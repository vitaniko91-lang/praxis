import { useEffect, useRef } from 'react'
import { howItWorks } from '../content/copy'
import { useReducedMotion } from '../motion/useReducedMotion'
import { registerScroll, gsap } from '../motion/gsapScroll'

export function HowItWorks() {
  const root = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || !root.current) return
    registerScroll()
    const steps = root.current.querySelectorAll('[data-step]')
    const ctx = gsap.context(() => {
      steps.forEach((s) =>
        gsap.from(s, {
          opacity: 0,
          y: 24,
          ease: 'power2.out',
          scrollTrigger: { trigger: s, start: 'top 80%', end: 'top 50%', scrub: true },
        }),
      )
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={root} aria-labelledby="hiw-h2" className="relative z-10 px-5 md:px-20 py-[120px]">
      <h2 id="hiw-h2" className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-[-2px] mb-12">
        {howItWorks.heading}
      </h2>
      <ol className="flex flex-col gap-10">
        {howItWorks.steps.map((s) => (
          <li key={s.n} data-step className="border-t border-[var(--border)] pt-6">
            <span className="font-mono text-sm text-[var(--accent-text)]">{s.n}</span>
            <h3 className="font-display text-2xl mt-2">{s.title}</h3>
            <p className="font-sans text-[var(--text-muted)] mt-2 max-w-[52ch]">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
