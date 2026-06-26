type Props = {
  id: string
  label: string
  type?: string
  as?: 'input' | 'textarea'
  value: string
  onChange: (v: string) => void
  error?: string
  autoComplete?: string
  inputMode?: 'text' | 'email'
}

export function Field({ id, label, type = 'text', as = 'input', value, onChange, error, autoComplete, inputMode }: Props) {
  const errId = `${id}-error`
  const shared = {
    id,
    value,
    'aria-invalid': !!error,
    'aria-describedby': error ? errId : undefined,
    autoComplete,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value),
    className: 'w-full bg-transparent border-b border-[var(--border)] py-3 text-[var(--text-on-light)] focus:border-[var(--accent)]',
  }
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-mono text-xs tracking-[2px] uppercase text-[var(--text-muted)]">{label}</label>
      {as === 'textarea'
        ? <textarea {...shared} rows={4} />
        : <input {...shared} type={type} inputMode={inputMode} />}
      {error && <span id={errId} role="alert" className="text-[var(--accent-text)] text-sm">{error}</span>}
    </div>
  )
}
