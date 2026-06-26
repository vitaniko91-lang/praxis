import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

beforeEach(() => {
  window.matchMedia = ((q: string) => ({
    matches: true,
    media: q,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
    onchange: null,
    dispatchEvent: () => true,
  })) as unknown as typeof window.matchMedia
})

test('renders semantic landmarks and a visible h1 on home', () => {
  render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
  expect(screen.getByRole('banner')).toBeInTheDocument()
  expect(screen.getByRole('main')).toBeInTheDocument()
  expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/intelligence, applied/i)
})

test('renders a skip link as the first focusable element', () => {
  render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
  expect(screen.getByText(/skip to content/i)).toHaveAttribute('href', '#main')
})
