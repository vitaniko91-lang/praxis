import { render, screen } from '@testing-library/react'
import { CrystalCanvas } from './CrystalCanvas'
import { ScrollProgressContext } from '../motion/ScrollProgressContext'
import { createRef } from 'react'

function withCtx(ui: React.ReactNode, reduced: boolean) {
  window.matchMedia = ((q: string) => ({ matches: reduced, media: q, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){}, onchange:null, dispatchEvent:()=>true })) as unknown as typeof window.matchMedia
  return render(<ScrollProgressContext.Provider value={createRef<number>() as React.MutableRefObject<number>}>{ui}</ScrollProgressContext.Provider>)
}

test('under reduced motion renders the static poster image with alt, not a canvas', () => {
  withCtx(<CrystalCanvas />, true)
  const img = screen.getByRole('img', { name: /praxis crystal/i })
  expect(img).toHaveAttribute('src', expect.stringContaining('crystal-poster'))
  expect(document.querySelector('canvas')).toBeNull()
})
