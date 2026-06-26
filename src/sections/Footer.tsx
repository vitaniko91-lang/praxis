import { brand } from '../content/copy'

export function Footer() {
  return (
    <footer className="relative z-10 px-5 md:px-20 py-12 border-t border-[var(--border-soft)] flex items-center justify-between font-mono text-xs text-[var(--text-muted)]">
      <span className="font-display text-lg text-white">
        <span className="text-[var(--accent)]">{brand.mark}</span>
        {brand.name}
      </span>
      <a href="/manifesto" className="hover:text-white">
        MANIFESTO · © 2026
      </a>
    </footer>
  )
}
