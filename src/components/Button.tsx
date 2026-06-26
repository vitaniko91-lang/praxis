import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'outline'
  type?: 'button' | 'submit'
}

const base = 'inline-flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-[2px] uppercase rounded-none transition-colors duration-200'
const variants = {
  primary: 'bg-white text-black hover:bg-[var(--accent)] hover:text-white',
  outline: 'border border-[var(--border)] text-white hover:border-[var(--accent-text)]',
}

export function Button({ children, onClick, href, variant = 'primary', type = 'button' }: Props) {
  const cls = `${base} ${variants[variant]}`
  if (href) return <a href={href} className={cls} onClick={onClick}>{children}</a>
  return <button type={type} className={cls} onClick={onClick}>{children}</button>
}
