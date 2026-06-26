import { useEffect, type ReactNode } from 'react'
import Lenis from 'lenis'
import { useReducedMotion } from './useReducedMotion'

let lenisInstance: Lenis | null = null
export const getLenis = () => lenisInstance

export function LenisProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion()
  useEffect(() => {
    if (reduced) return // native scroll under reduced motion
    const lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 3) })
    lenisInstance = lenis
    let raf = 0
    const loop = (time: number) => { lenis.raf(time); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); lenis.destroy(); lenisInstance = null }
  }, [reduced])
  return <>{children}</>
}
