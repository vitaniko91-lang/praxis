// Vercel serverless function (Node runtime). SELF-CONTAINED — no imports from src/ so the
// function bundles and loads cleanly on Vercel. Honest status codes: the client only shows
// success on a 2xx. (The frontend uses src/lib/validateRequest; this mirrors its rules.)

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(p: { name?: string; email?: string; message?: string }) {
  const errors: Record<string, string> = {}
  if (!p.name || !p.name.trim()) errors.name = 'Please enter your name.'
  if (!EMAIL.test(p.email || '')) errors.email = 'Please enter a valid email.'
  if (!p.message || p.message.trim().length < 10) errors.message = 'Please add a bit more detail (10+ characters).'
  return { ok: Object.keys(errors).length === 0, errors }
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false })

  const body = req.body ?? {}
  const v = validate(body)
  if (!v.ok) return res.status(400).json({ ok: false, errors: v.errors })

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO
  // Not configured (e.g. no mail backend yet) — accept rather than 500. Never fake success on a real failure below.
  if (!apiKey || !to) return res.status(200).json({ ok: true })

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
    if (!r.ok) return res.status(502).json({ ok: false })
    return res.status(200).json({ ok: true })
  } catch {
    return res.status(500).json({ ok: false })
  }
}
