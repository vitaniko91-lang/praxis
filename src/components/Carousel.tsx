import { useState, type ReactNode } from 'react'

type Props = { label: string; children: ReactNode[] }

export function Carousel({ label, children }: Props) {
  const [i, setI] = useState(0)
  const last = children.length - 1
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') setI((n) => Math.min(last, n + 1))
    if (e.key === 'ArrowLeft') setI((n) => Math.max(0, n - 1))
  }
  return (
    <div role="group" aria-roledescription="carousel" aria-label={label} tabIndex={0} onKeyDown={onKey}
         className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent-text)]">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-[400ms] ease-[var(--ease-out)]" style={{ transform: `translateX(-${i * 100}%)` }}>
          {children.map((c, idx) => <div key={idx} className="min-w-full" aria-hidden={idx !== i} inert={idx !== i ? true : undefined}>{c}</div>)}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-4 font-mono text-xs text-[var(--text-muted)]">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} aria-label="Previous" disabled={i === 0}>←</button>
        <span aria-live="polite">{i + 1} / {children.length}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} aria-label="Next" disabled={i === last}>→</button>
      </div>
    </div>
  )
}
