import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

test('shows validation errors and does not call submit on invalid input', async () => {
  const submit = vi.fn()
  render(<ContactForm onSubmit={submit} />)
  await userEvent.click(screen.getByRole('button', { name: /send/i }))
  expect(await screen.findAllByRole('alert')).not.toHaveLength(0)
  expect(submit).not.toHaveBeenCalled()
})

test('shows success ONLY after a resolved submit (no optimistic success)', async () => {
  const submit = vi.fn().mockResolvedValue({ ok: true })
  render(<ContactForm onSubmit={submit} />)
  await userEvent.type(screen.getByLabelText(/name/i), 'Ada')
  await userEvent.type(screen.getByLabelText(/email/i), 'ada@x.io')
  await userEvent.type(screen.getByLabelText(/message/i), 'I want the thinking layer.')
  await userEvent.click(screen.getByRole('button', { name: /send/i }))
  expect(await screen.findByText(/thank you/i)).toBeInTheDocument()
  expect(submit).toHaveBeenCalledTimes(1)
})

test('shows an error when submit resolves {ok:false}', async () => {
  const submit = vi.fn().mockResolvedValue({ ok: false })
  render(<ContactForm onSubmit={submit} />)
  await userEvent.type(screen.getByLabelText(/name/i), 'Ada')
  await userEvent.type(screen.getByLabelText(/email/i), 'ada@x.io')
  await userEvent.type(screen.getByLabelText(/message/i), 'I want the thinking layer.')
  await userEvent.click(screen.getByRole('button', { name: /send/i }))
  expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument()
})

test('shows an error when submit throws (network failure)', async () => {
  const submit = vi.fn().mockRejectedValue(new Error('network'))
  render(<ContactForm onSubmit={submit} />)
  await userEvent.type(screen.getByLabelText(/name/i), 'Ada')
  await userEvent.type(screen.getByLabelText(/email/i), 'ada@x.io')
  await userEvent.type(screen.getByLabelText(/message/i), 'I want the thinking layer.')
  await userEvent.click(screen.getByRole('button', { name: /send/i }))
  expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument()
})
