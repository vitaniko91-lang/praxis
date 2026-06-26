import { renderHook } from '@testing-library/react'
import { useReducedMotion } from './useReducedMotion'

function mockMatchMedia(matches: boolean) {
  window.matchMedia = (q: string) => ({
    matches, media: q, onchange: null,
    addEventListener: () => {}, removeEventListener: () => {},
    addListener: () => {}, removeListener: () => {}, dispatchEvent: () => true,
  }) as unknown as MediaQueryList
}

test('returns true when user prefers reduced motion', () => {
  mockMatchMedia(true)
  const { result } = renderHook(() => useReducedMotion())
  expect(result.current).toBe(true)
})

test('returns false when user has no reduced-motion preference', () => {
  mockMatchMedia(false)
  const { result } = renderHook(() => useReducedMotion())
  expect(result.current).toBe(false)
})
