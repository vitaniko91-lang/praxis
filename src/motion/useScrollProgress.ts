import { useEffect, useRef, type RefObject } from 'react'
import { computeProgress } from './computeProgress'

/** Returns a ref whose .current is 0..1 scroll progress across the target element. No re-renders. */
export function useScrollProgress(target: RefObject<HTMLElement | null>) {
  const progress = useRef(0)
  useEffect(() => {
    const update = () => {
      const el = target.current
      if (!el) return
      const top = el.offsetTop
      progress.current = computeProgress(window.scrollY, top, el.offsetHeight)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [target])
  return progress
}
