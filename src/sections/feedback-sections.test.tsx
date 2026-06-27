import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { Faq } from './Faq'

test('Testimonials shows the heading and attributed quotes', () => {
  render(<Testimonials />)
  expect(screen.getByRole('heading', { name: /from the teams shipping it/i })).toBeInTheDocument()
  expect(screen.getByText(/Maya Chen/)).toBeInTheDocument()
  expect(screen.getByText(/no PII leaks/i)).toBeInTheDocument()
})

test('FAQ questions are real buttons that toggle their answers', async () => {
  render(<Faq />)
  const q = screen.getByRole('button', { name: /how fast can we integrate/i })
  expect(q).toHaveAttribute('aria-expanded', 'false')
  expect(screen.queryByText(/ship a working reasoning layer/i)).not.toBeInTheDocument()
  await userEvent.click(q)
  expect(q).toHaveAttribute('aria-expanded', 'true')
  expect(screen.getByText(/ship a working reasoning layer/i)).toBeInTheDocument()
})
