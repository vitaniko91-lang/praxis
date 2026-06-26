import { lazy, Suspense, useRef } from 'react'
import { ScrollProgressContext } from '../motion/ScrollProgressContext'
import { useScrollProgress } from '../motion/useScrollProgress'
import { Hero } from '../sections/Hero'
import { Positioning } from '../sections/Positioning'
import { HowItWorks } from '../sections/HowItWorks'
import { Capabilities } from '../sections/Capabilities'
import { Proof } from '../sections/Proof'
import { CTA } from '../sections/CTA'
const CrystalCanvas = lazy(() => import('../three/CrystalCanvas').then((m) => ({ default: m.CrystalCanvas })))

export default function Home() {
  const immersiveRef = useRef<HTMLDivElement>(null)
  const progress = useScrollProgress(immersiveRef)
  return (
    <ScrollProgressContext.Provider value={progress}>
      {/* sections 1–3 share one sticky crystal behind them */}
      <div ref={immersiveRef} className="relative">
        <div className="pointer-events-none sticky top-0 h-screen z-0" aria-hidden="true">
          <Suspense fallback={null}><CrystalCanvas /></Suspense>
        </div>
        <div className="-mt-[100vh]">
          <Hero />
          <Positioning />
          <HowItWorks />
        </div>
      </div>
      <Capabilities />
      <Proof />
      <CTA />
    </ScrollProgressContext.Provider>
  )
}
