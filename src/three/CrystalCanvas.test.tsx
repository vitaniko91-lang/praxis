import { render, screen } from '@testing-library/react'
import { CrystalCanvas } from './CrystalCanvas'
import { ScrollProgressContext } from '../motion/ScrollProgressContext'

function withCtx(ui: React.ReactNode, reduced: boolean) {
  window.matchMedia = ((q: string) => ({ matches: reduced, media: q, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){}, onchange:null, dispatchEvent:()=>true })) as unknown as typeof window.matchMedia
  // { current: 0 } matches the context default — safe if a future non-reduced test mounts Crystal
  return render(<ScrollProgressContext.Provider value={{ current: 0 } as React.MutableRefObject<number>}>{ui}</ScrollProgressContext.Provider>)
}

test('under reduced motion renders the static poster image with alt, not a canvas', () => {
  withCtx(<CrystalCanvas />, true)
  const img = screen.getByRole('img', { name: /praxis crystal/i })
  expect(img).toHaveAttribute('src', expect.stringContaining('crystal-poster'))
  expect(document.querySelector('canvas')).toBeNull()
})
