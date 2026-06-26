import { useEffect, useState } from 'react'
import { useReducedMotion } from '../motion/useReducedMotion'

type Props = { to: number; suffix?: string; durationMs?: number }

export function CountUp({ to, suffix = '', durationMs = 1500 }: Props) {
  const reduced = useReducedMotion()
  const [n, setN] = useState(reduced ? to : 0)
  useEffect(() => {
    if (reduced) { setN(to); return }
    let raf = 0; const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs)
      setN(Math.round(to * (1 - Math.pow(1 - p, 3)))) // ease-out cubic
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to, durationMs, reduced])
  return <span>{n}{suffix}</span>
}
