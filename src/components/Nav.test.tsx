import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Nav } from './Nav'

test('focus returns to the MENU button after the overlay closes', async () => {
  render(<Nav />)
  const trigger = screen.getByRole('button', { name: 'MENU' })
  trigger.focus()
  await userEvent.click(trigger)
  // overlay is open
  expect(screen.getByRole('dialog')).toBeInTheDocument()
  await userEvent.keyboard('{Escape}')
  // overlay closed, focus returned to trigger
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  expect(document.activeElement).toBe(trigger)
})
