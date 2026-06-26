import { Suspense, useContext, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useReducedMotion } from '../motion/useReducedMotion'
import { Crystal } from './Crystal'
import { ScrollProgressContext } from '../motion/ScrollProgressContext'

export function CrystalCanvas() {
  const reduced = useReducedMotion()
  useContext(ScrollProgressContext) // ensures provider present
  const pointer = useRef({ x: 0, y: 0 })

  if (reduced) {
    return <img src="/crystal-poster.webp" alt="PRAXIS crystal" className="pointer-events-none select-none w-full h-full object-contain" />
  }
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 5], fov: 45 }}
      onPointerMove={(e) => { pointer.current = { x: (e.clientX / window.innerWidth) * 2 - 1, y: -(e.clientY / window.innerHeight) * 2 + 1 } }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={null}><Crystal pointer={pointer} /></Suspense>
    </Canvas>
  )
}
