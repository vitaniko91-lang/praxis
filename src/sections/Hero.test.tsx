import { render, screen } from '@testing-library/react'
import { ScrollProgressContext } from '../motion/ScrollProgressContext'
import { Hero } from './Hero'

test('renders the real h1 and kicker regardless of motion', () => {
  render(
    <ScrollProgressContext.Provider value={{ current: 0 } as React.MutableRefObject<number>}>
      <Hero />
    </ScrollProgressContext.Provider>,
  )
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/intelligence, applied/i)
  expect(screen.getByText(/the thinking layer/i)).toBeInTheDocument()
})
