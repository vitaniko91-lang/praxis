import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

test('renders a real <button> and fires onClick via keyboard', async () => {
  const onClick = vi.fn()
  render(<Button onClick={onClick}>Send</Button>)
  const btn = screen.getByRole('button', { name: 'Send' })
  btn.focus()
  await userEvent.keyboard('{Enter}')
  expect(onClick).toHaveBeenCalledTimes(1)
})

test('renders as a real link when href is provided', () => {
  render(<Button href="/manifesto">Manifesto</Button>)
  expect(screen.getByRole('link', { name: 'Manifesto' })).toHaveAttribute('href', '/manifesto')
})
