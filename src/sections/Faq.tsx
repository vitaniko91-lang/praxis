import { useId, useState } from 'react'
import { faq } from '../content/copy'

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  return (
    <div className="border-b border-[var(--border)]">
      <h3 className="m-0">
        <button
          type="button"
          id={`${id}-btn`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between gap-6 py-6 text-left font-display text-xl md:text-2xl"
        >
          <span>{q}</span>
          <span aria-hidden="true" className="font-mono text-[var(--accent-text)] shrink-0">{open ? '–' : '+'}</span>
        </button>
      </h3>
      {open && (
        <div id={`${id}-panel`} role="region" aria-labelledby={`${id}-btn`} className="pb-6 font-sans text-[var(--text-muted)] max-w-[60ch] leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

export function Faq() {
  return (
    <section aria-labelledby="faq-h2" className="relative z-10 px-5 md:px-20 py-[120px]">
      <h2 id="faq-h2" className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-[-2px] mb-8">{faq.heading}</h2>
      <div className="border-t border-[var(--border)] max-w-[820px]">
        {faq.items.map((item) => (
          <FaqItem key={item.q} q={item.q} a={item.a} />
        ))}
      </div>
    </section>
  )
}
