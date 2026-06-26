import { validateRequest } from './validateRequest'

test('flags empty name and invalid email', () => {
  const r = validateRequest({ name: '', email: 'nope', message: 'hi' })
  expect(r.ok).toBe(false)
  expect(r.errors.name).toBeTruthy()
  expect(r.errors.email).toBeTruthy()
})

test('passes with a valid payload', () => {
  const r = validateRequest({ name: 'Ada', email: 'ada@x.io', message: 'Let us talk.' })
  expect(r.ok).toBe(true)
  expect(r.errors).toEqual({})
})

test('requires a non-trivial message', () => {
  const r = validateRequest({ name: 'Ada', email: 'ada@x.io', message: 'hi' })
  expect(r.ok).toBe(false)
  expect(r.errors.message).toBeTruthy()
})
