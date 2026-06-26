import { hero } from '../content/copy'
export default function Home() {
  return (
    <section aria-labelledby="hero-h1" className="px-5 md:px-20 py-20">
      <p className="font-mono text-xs tracking-[2px] text-[var(--accent-text)]">{hero.kicker}</p>
      <h1 id="hero-h1" className="text-[clamp(3rem,8vw,7.5rem)] font-extrabold leading-[.85] tracking-[-2px]">{hero.h1}</h1>
      <p className="mt-6 text-[var(--text-muted)] max-w-[48ch]">{hero.sub}</p>
    </section>
  )
}
