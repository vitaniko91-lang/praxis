import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getLenis } from './LenisProvider'

let registered = false

/**
 * Register GSAP ScrollTrigger and keep it in sync with Lenis's virtual scroll.
 * Idempotent — safe to call from multiple sections.
 *
 * NOTE: Lenis is already advanced by its own requestAnimationFrame loop inside
 * LenisProvider. We deliberately do NOT also add `lenis.raf` to `gsap.ticker`
 * here — doing both would advance Lenis twice per frame (≈2× scroll speed /
 * jitter). We only forward Lenis scroll events to ScrollTrigger.update so pins
 * and scrubs stay aligned with the smooth-scrolled position.
 */
export function registerScroll() {
  if (registered) return
  gsap.registerPlugin(ScrollTrigger)
  const lenis = getLenis()
  if (lenis) {
    lenis.on('scroll', ScrollTrigger.update)
  }
  registered = true
}

export { gsap, ScrollTrigger }
