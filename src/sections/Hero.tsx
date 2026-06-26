import { hero, brand } from '../content/copy'

export function Hero() {
  return (
    <section aria-labelledby="hero-h1" className="relative z-10 min-h-screen flex flex-col justify-center px-5 md:px-20">
      <p className="font-mono text-xs tracking-[2px] text-[var(--accent-text)]">{hero.kicker}</p>
      <h1 id="hero-h1" className="font-display font-bold text-[clamp(3rem,8vw,7.5rem)] leading-[.85] tracking-[-2px]">{hero.h1}</h1>
      <p className="mt-6 font-sans text-[var(--text-muted)] max-w-[48ch]">{hero.sub}</p>
      <span aria-hidden="true" className="absolute bottom-8 left-5 md:left-20 font-mono text-[10px] tracking-[2px] text-[var(--accent-text)]">{brand.mark} INTELLIGENCE, APPLIED</span>
    </section>
  )
}
