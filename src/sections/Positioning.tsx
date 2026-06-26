import { useEffect, useRef } from 'react'
import { positioning } from '../content/copy'
import { useReducedMotion } from '../motion/useReducedMotion'
import { registerScroll, gsap } from '../motion/gsapScroll'

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
      // Restore the dimmed words so opacity:0.12 isn't left as a stuck inline style
      // after teardown (killing the timeline does not revert set() styles).
      gsap.set(words, { clearProps: 'opacity' })
    }
  }, [reduced])

  return (
    <section ref={root} aria-labelledby="pos-h2" className="relative z-10 min-h-screen flex items-center justify-center px-5">
      <h2 id="pos-h2" className="font-display font-bold text-[clamp(2rem,6vw,4.5rem)] leading-[1] tracking-[-2px] text-center max-w-[16ch]">
        {/* sr-only span carries the full phrase so getByText queries work */}
        <span className="sr-only">{positioning.line}</span>
        {positioning.words.map((w, i) => (
          <span key={i} data-word aria-hidden="true">
            {w}{' '}
          </span>
        ))}
      </h2>
    </section>
  )
}
