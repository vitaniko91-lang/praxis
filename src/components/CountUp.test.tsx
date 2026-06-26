import { render, screen } from '@testing-library/react'
import { CountUp } from './CountUp'

// jsdom reports no matchMedia by default; force reduced-motion path for deterministic test
beforeEach(() => {
  window.matchMedia = ((q: string) => ({ matches: true, media: q, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){}, onchange:null, dispatchEvent:()=>true })) as any
})

test('under reduced motion, renders the final value immediately with suffix', () => {
  render(<CountUp to={40} suffix="+" />)
  expect(screen.getByText('40+')).toBeInTheDocument()
})
