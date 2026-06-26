import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Carousel } from './Carousel'

const items = [<div key="a">Inference</div>, <div key="b">Routing</div>, <div key="c">Guardrails</div>]

test('shows a visible position counter starting at 1 of N', () => {
  render(<Carousel label="Capabilities">{items}</Carousel>)
  expect(screen.getByText('1 / 3')).toBeInTheDocument()
})

test('arrow keys move the counter and clamp at the ends', async () => {
  render(<Carousel label="Capabilities">{items}</Carousel>)
  const region = screen.getByRole('group', { name: 'Capabilities' })
  region.focus()
  await userEvent.keyboard('{ArrowRight}{ArrowRight}')
  expect(screen.getByText('3 / 3')).toBeInTheDocument()
  await userEvent.keyboard('{ArrowRight}') // clamp
  expect(screen.getByText('3 / 3')).toBeInTheDocument()
  await userEvent.keyboard('{ArrowLeft}')
  expect(screen.getByText('2 / 3')).toBeInTheDocument()
})
