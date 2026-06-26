export type RequestPayload = { name: string; email: string; message: string }
export type ValidationResult = { ok: boolean; errors: Partial<Record<keyof RequestPayload, string>> }

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateRequest(p: RequestPayload): ValidationResult {
  const errors: ValidationResult['errors'] = {}
  if (!p.name.trim()) errors.name = 'Please enter your name.'
  if (!EMAIL.test(p.email)) errors.email = 'Please enter a valid email.'
  if (p.message.trim().length < 10) errors.message = 'Please add a bit more detail (10+ characters).'
  return { ok: Object.keys(errors).length === 0, errors }
}
