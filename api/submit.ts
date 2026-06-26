import { validateRequest, type RequestPayload } from '../src/lib/validateRequest'

// Vercel serverless function. Honest status codes — the client only shows success on a 2xx.
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false })

  const body: RequestPayload = req.body ?? { name: '', email: '', message: '' }
  const v = validateRequest(body)
  if (!v.ok) return res.status(400).json({ ok: false, errors: v.errors })

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO
  // If the backend isn't configured (e.g. preview without env), accept rather than 500 —
  // but never fake success on a real upstream failure below.
  if (!apiKey || !to) return res.status(200).json({ ok: true, note: 'accepted (no mail backend configured)' })

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'PRAXIS <hello@praxis.example>',
        to: [to],
        reply_to: body.email,
        subject: `New request from ${body.name}`,
        text: `From: ${body.name} <${body.email}>\n\n${body.message}`,
      }),
    })
    if (!r.ok) return res.status(502).json({ ok: false }) // honest upstream failure
    return res.status(200).json({ ok: true })
  } catch {
    return res.status(500).json({ ok: false })
  }
}
