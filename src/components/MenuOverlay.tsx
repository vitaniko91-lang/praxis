import { useEffect, useRef } from 'react'

type Item = { href: string; label: string }
type Props = { open: boolean; onClose: () => void; items: Item[] }

export function MenuOverlay({ open, onClose, items }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    ref.current?.querySelector<HTMLElement>('a,button')?.focus()
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null
  return (
    <div ref={ref} role="dialog" aria-modal="true" aria-label="Menu"
         className="fixed inset-0 z-50 bg-[var(--bg)] flex flex-col gap-6 p-8">
      <button onClick={onClose} className="self-end font-mono text-xs tracking-[2px]" aria-label="Close menu">CLOSE ✕</button>
      <nav aria-label="Overlay" className="flex flex-col gap-4">
        {items.map((it, i) => (
          <a key={it.href} href={it.href} onClick={onClose}
             className="text-[clamp(2rem,6vw,4rem)] font-extrabold tracking-[-2px]">
            <span aria-hidden="true" className="font-mono text-sm text-[var(--text-muted)] mr-3">0{i}</span>{it.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
