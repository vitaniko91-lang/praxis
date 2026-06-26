import { render, screen } from '@testing-library/react'
import { Positioning } from './Positioning'

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

test('renders the complete positioning line (readable without motion)', () => {
  render(<Positioning />)
  expect(screen.getByRole('heading')).toHaveTextContent(/a thinking layer inside your product/i)
})
