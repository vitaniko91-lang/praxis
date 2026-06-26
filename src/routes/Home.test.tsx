import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from './Home'
beforeEach(() => { window.matchMedia = ((q: string) => ({ matches: true, media: q, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){}, onchange:null, dispatchEvent:()=>true })) as unknown as typeof window.matchMedia })

test('home renders hero h1 + all section headings in order', () => {
  render(<MemoryRouter><Home /></MemoryRouter>)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/intelligence, applied/i)
  expect(screen.getByText(/a thinking layer inside your product/i)).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /how it works/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /let's apply it/i })).toBeInTheDocument()
})
