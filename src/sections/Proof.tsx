import { proof } from '../content/copy'
import { CountUp } from '../components/CountUp'

export function Proof() {
  return (
    <section aria-labelledby="proof-h2" className="relative z-10 px-5 md:px-20 py-[120px]">
      <h2 id="proof-h2" className="sr-only">
        {proof.heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {proof.stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-[clamp(2.5rem,6vw,4rem)] text-[var(--accent-text)]">
              <CountUp to={s.to} suffix={s.suffix} />
            </div>
            <div className="font-mono text-xs tracking-[2px] uppercase text-[var(--text-muted)] mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
