import { builtFor } from '../content/copy'

export function BuiltFor() {
  return (
    <section aria-labelledby="built-h2" className="relative z-10 px-5 md:px-20 py-[120px]">
      <h2 id="built-h2" className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-[-2px]">{builtFor.heading}</h2>
      <p className="font-sans text-[var(--text-muted)] mt-4 mb-12 max-w-[52ch]">{builtFor.sub}</p>
      {/* gap-px over a border-coloured bg gives 1px dividers between cells (joined grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)]">
        {builtFor.items.map((it) => (
          <article key={it.n} className="bg-[var(--bg)] p-8">
            <span className="font-mono text-sm text-[var(--accent-text)]">{it.n}</span>
            <h3 className="font-display text-2xl mt-2">{it.title}</h3>
            <p className="font-sans text-[var(--text-muted)] mt-3 max-w-[44ch]">{it.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
