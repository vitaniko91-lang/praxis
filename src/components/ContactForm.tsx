import { useState } from 'react'
import { validateRequest, type RequestPayload } from '../lib/validateRequest'
import { Field } from './Field'
import { Button } from './Button'

type Status = 'idle' | 'submitting' | 'success' | 'error'
type Props = { onSubmit?: (p: RequestPayload) => Promise<{ ok: boolean }> }

async function defaultSubmit(p: RequestPayload) {
  const res = await fetch('/api/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(p),
  })
  return { ok: res.ok }
}

export function ContactForm({ onSubmit = defaultSubmit }: Props) {
  const [data, setData] = useState<RequestPayload>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<ReturnType<typeof validateRequest>['errors']>({})
  const [status, setStatus] = useState<Status>('idle')
  const set = (k: keyof RequestPayload) => (v: string) => setData((d) => ({ ...d, [k]: v }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'submitting') return // double-submit guard
    const v = validateRequest(data)
    setErrors(v.errors)
    if (!v.ok) return
    setStatus('submitting')
    try {
      const r = await onSubmit(data)
      setStatus(r.ok ? 'success' : 'error') // honest: success only on ok
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return <p role="status" className="text-[var(--text-on-light)]">Thank you — your message is on its way.</p>
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 max-w-[520px]">
      <Field id="name" label="Name" value={data.name} onChange={set('name')} error={errors.name} autoComplete="name" />
      <Field id="email" label="Email" type="email" inputMode="email" value={data.email} onChange={set('email')} error={errors.email} autoComplete="email" />
      <Field id="message" label="Message" as="textarea" value={data.message} onChange={set('message')} error={errors.message} />
      <div aria-live="polite" aria-atomic="true">
        {status === 'error' && (
          <span className="text-[var(--accent-text)]">Something went wrong. Please try again.</span>
        )}
      </div>
      <Button type="submit">{status === 'submitting' ? 'Sending…' : 'Send →'}</Button>
    </form>
  )
}
