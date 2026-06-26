import { validateRequest } from '../src/lib/validateRequest'

// TODO at deploy (Plan 3): forward to email/CRM. For now, accept.
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false })
  const v = validateRequest(req.body ?? { name: '', email: '', message: '' })
  if (!v.ok) return res.status(400).json({ ok: false, errors: v.errors })
  return res.status(200).json({ ok: true })
}
