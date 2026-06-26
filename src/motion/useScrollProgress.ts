import { useEffect, useRef, type RefObject } from 'react'
import { computeProgress } from './computeProgress'

/** Returns a ref whose .current is 0..1 scroll progress across the target element. No re-renders. */
export function useScrollProgress(target: RefObject<HTMLElement | null>) {
  const progress = useRef(0)
  useEffect(() => {
    const update = () => {
      const el = target.current
      if (!el) return
      // Document-relative top (getBoundingClientRect is viewport-relative; + scrollY makes it
      // document-relative). offsetTop would be wrong here because the immersive wrapper sits
      // under positioned ancestors (its own `relative` + <main>).
      const top = el.getBoundingClientRect().top + window.scrollY
      progress.current = computeProgress(window.scrollY, top, el.offsetHeight)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [target])
  return progress
}
