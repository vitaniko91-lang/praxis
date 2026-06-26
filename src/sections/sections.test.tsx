import { render, screen } from '@testing-library/react'
import { Capabilities } from './Capabilities'
import { Proof } from './Proof'
import { CTA } from './CTA'

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

test('Capabilities lists capability titles in a labelled carousel group', () => {
  render(<Capabilities />)
  expect(screen.getByRole('group', { name: /capabilities/i })).toBeInTheDocument()
  expect(screen.getByText('Inference')).toBeInTheDocument()
})

test('Proof shows stat labels and a final number under reduced motion', () => {
  render(<Proof />)
  expect(screen.getByText(/p50 latency/i)).toBeInTheDocument()
  expect(screen.getByText('40+')).toBeInTheDocument()
})

test('CTA renders heading and the contact form', () => {
  render(<CTA />)
  expect(screen.getByRole('heading', { name: /let's apply it/i })).toBeInTheDocument()
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
})
