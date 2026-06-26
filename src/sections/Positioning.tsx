import { useEffect, useRef } from 'react'
import { positioning } from '../content/copy'
import { useReducedMotion } from '../motion/useReducedMotion'
import { registerScroll, gsap, ScrollTrigger } from '../motion/gsapScroll'

export function Positioning() {
  const root = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || !root.current) return
    registerScroll()
    const words = root.current.querySelectorAll('[data-word]')
    gsap.set(words, { opacity: 0.12 })
    const tl = gsap.timeline({
      scrollTrigger: { trigger: root.current, start: 'top top', end: '+=120%', pin: true, scrub: true },
    })
    tl.to(words, { opacity: 1, stagger: 0.5, ease: 'none' })
    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
      ScrollTrigger.refresh()
    }
  }, [reduced])

  return (
    <section ref={root} aria-label="Positioning" className="relative z-10 min-h-screen flex items-center justify-center px-5">
      <h2 className="font-display font-bold text-[clamp(2rem,6vw,4.5rem)] leading-[1] tracking-[-2px] text-center max-w-[16ch]">
        {positioning.words.map((w, i) => (
          <span key={i} data-word>
            {w}{' '}
          </span>
        ))}
      </h2>
    </section>
  )
}
