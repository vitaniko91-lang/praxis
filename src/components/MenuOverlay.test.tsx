import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MenuOverlay } from './MenuOverlay'
import { nav } from '../content/copy'

test('open overlay has dialog role and lists nav links', () => {
  render(<MenuOverlay open onClose={() => {}} items={nav} />)
  const dialog = screen.getByRole('dialog')
  expect(dialog).toHaveAttribute('aria-modal', 'true')
  expect(screen.getByRole('link', { name: 'Manifesto' })).toBeInTheDocument()
})

test('Escape key closes the overlay', async () => {
  const onClose = vi.fn()
  render(<MenuOverlay open onClose={onClose} items={nav} />)
  await userEvent.keyboard('{Escape}')
  expect(onClose).toHaveBeenCalledTimes(1)
})

test('renders nothing when closed', () => {
  render(<MenuOverlay open={false} onClose={() => {}} items={nav} />)
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
})

test('Tab from the last focusable wraps to the first', async () => {
  render(<MenuOverlay open onClose={() => {}} items={nav} />)
  const focusables = screen.getAllByRole('link')
  const closeBtn = screen.getByRole('button', { name: 'Close menu' })
  const first = closeBtn
  const last = focusables[focusables.length - 1]
  last.focus()
  expect(document.activeElement).toBe(last)
  await userEvent.tab()
  expect(document.activeElement).toBe(first)
})

test('Shift+Tab from the first focusable wraps to the last', async () => {
  render(<MenuOverlay open onClose={() => {}} items={nav} />)
  const focusables = screen.getAllByRole('link')
  const closeBtn = screen.getByRole('button', { name: 'Close menu' })
  const first = closeBtn
  const last = focusables[focusables.length - 1]
  first.focus()
  expect(document.activeElement).toBe(first)
  await userEvent.tab({ shift: true })
  expect(document.activeElement).toBe(last)
})
