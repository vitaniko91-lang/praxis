import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

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

test('renders all three steps with real headings', () => {
  render(<HowItWorks />)
  expect(screen.getByRole('heading', { name: /how it works/i })).toBeInTheDocument()
  ;['Ingest', 'Reason', 'Ship'].forEach((t) => expect(screen.getByText(t)).toBeInTheDocument())
})
