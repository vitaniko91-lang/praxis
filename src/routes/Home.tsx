import { useRef } from 'react'
import { ScrollProgressContext } from '../motion/ScrollProgressContext'
import { useScrollProgress } from '../motion/useScrollProgress'
import { CrystalCanvas } from '../three/CrystalCanvas'
import { Hero } from '../sections/Hero'
import { Positioning } from '../sections/Positioning'
import { HowItWorks } from '../sections/HowItWorks'
import { CodeBlock } from '../sections/CodeBlock'
import { Capabilities } from '../sections/Capabilities'
import { BuiltFor } from '../sections/BuiltFor'
import { Proof } from '../sections/Proof'
import { Testimonials } from '../sections/Testimonials'
import { Faq } from '../sections/Faq'
import { CTA } from '../sections/CTA'

export default function Home() {
  const immersiveRef = useRef<HTMLDivElement>(null)
  const progress = useScrollProgress(immersiveRef)
  return (
    <ScrollProgressContext.Provider value={progress}>
      {/* sections 1–3 share one sticky crystal behind them */}
      <div ref={immersiveRef} className="relative">
        <div className="pointer-events-none sticky top-0 h-screen z-0" aria-hidden="true">
          <CrystalCanvas />
        </div>
        <div className="-mt-[100vh]">
          <Hero />
          <Positioning />
          <HowItWorks />
        </div>
      </div>
      <CodeBlock />
      <Capabilities />
      <BuiltFor />
      <Proof />
      <Testimonials />
      <Faq />
      <CTA />
    </ScrollProgressContext.Provider>
  )
}
