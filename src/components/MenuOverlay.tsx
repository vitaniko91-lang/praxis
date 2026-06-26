import { useEffect, useRef } from 'react'

type Item = { href: string; label: string }
type Props = { open: boolean; onClose: () => void; items: Item[] }

const FOCUSABLE = 'a[href], button:not([disabled])'

export function MenuOverlay({ open, onClose, items }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!open) return
    const prev = document.activeElement as HTMLElement | null
    const focusables = () =>
      Array.from(ref.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? [])
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key === 'Tab') {
        const els = focusables()
        if (els.length === 0) return
        const first = els[0]
        const last = els[els.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          last.focus(); e.preventDefault()
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus(); e.preventDefault()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    ref.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prev?.focus()
    }
  }, [open, onClose])

  if (!open) return null
  return (
    <div ref={ref} role="dialog" aria-modal="true" aria-label="Menu"
         className="fixed inset-0 z-50 bg-[var(--bg)] flex flex-col gap-6 p-8">
      <button onClick={onClose} className="self-end font-mono text-xs tracking-[2px]" aria-label="Close menu">CLOSE ✕</button>
      <nav aria-label="Site navigation" className="flex flex-col gap-4">
        {items.map((it, i) => (
          <a key={it.href} href={it.href} onClick={onClose}
             className="text-[clamp(2rem,6vw,4rem)] font-extrabold tracking-[-2px]">
            <span aria-hidden="true" className="font-mono text-sm text-[var(--text-muted)] mr-3">{String(i).padStart(2, '0')}</span>{it.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
