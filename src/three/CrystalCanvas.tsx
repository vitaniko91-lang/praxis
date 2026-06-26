import { lazy, Suspense } from 'react'
import { useReducedMotion } from '../motion/useReducedMotion'

// Light wrapper — NO static three import. Under reduced-motion it renders the static poster
// immediately (zero three downloaded). Otherwise it lazy-loads the heavy WebGL scene chunk.
const CrystalScene = lazy(() => import('./CrystalScene'))

export function CrystalCanvas() {
  const reduced = useReducedMotion()
  if (reduced) {
    return <img src="/crystal-poster.webp" alt="PRAXIS crystal" className="pointer-events-none select-none w-full h-full object-contain" />
  }
  return (
    <Suspense fallback={null}>
      <CrystalScene />
    </Suspense>
  )
}
