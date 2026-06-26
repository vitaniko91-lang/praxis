export function computeProgress(scrollY: number, top: number, height: number): number {
  if (height <= 0) return 0
  const p = (scrollY - top) / height
  return Math.min(1, Math.max(0, p))
}
