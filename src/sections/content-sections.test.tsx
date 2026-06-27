import { render, screen } from '@testing-library/react'
import { CodeBlock } from './CodeBlock'
import { BuiltFor } from './BuiltFor'

test('CodeBlock renders heading, the SDK snippet, and a copy button', () => {
  render(<CodeBlock />)
  expect(screen.getByRole('heading', { name: /intelligence in one call/i })).toBeInTheDocument()
  expect(screen.getByText(/praxis\.reason/)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /copy/i })).toBeInTheDocument()
})

test('BuiltFor lists all four use cases with real headings', () => {
  render(<BuiltFor />)
  expect(screen.getByRole('heading', { name: /built for/i })).toBeInTheDocument()
  ;['Support agents', 'Search', 'Copilots', 'Workflows'].forEach((t) =>
    expect(screen.getByRole('heading', { name: t })).toBeInTheDocument(),
  )
})
