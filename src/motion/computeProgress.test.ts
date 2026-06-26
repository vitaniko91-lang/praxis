import { computeProgress } from './computeProgress'

test('returns 0 before the range, 1 after, linear within (clamped)', () => {
  // element top at 1000, height 2000 → progresses 0..1 as scrollY goes 1000..3000
  expect(computeProgress(500, 1000, 2000)).toBe(0)
  expect(computeProgress(2000, 1000, 2000)).toBeCloseTo(0.5)
  expect(computeProgress(3500, 1000, 2000)).toBe(1)
})
