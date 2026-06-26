import { render, screen } from '@testing-library/react'
import { LenisProvider } from './LenisProvider'

beforeEach(() => {
  window.matchMedia = ((q: string) => ({ matches: true, media: q, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){}, onchange:null, dispatchEvent:()=>true })) as any
})

test('renders children and does not crash under reduced motion (Lenis not initialized)', () => {
  render(<LenisProvider><p>content</p></LenisProvider>)
  expect(screen.getByText('content')).toBeInTheDocument()
})
