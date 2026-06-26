import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Crystal } from './Crystal'

// The heavy WebGL scene (pulls in three/R3F). Lazy-loaded by CrystalCanvas ONLY when
// motion is allowed — reduced-motion users never download this chunk.
export default function CrystalScene() {
  const pointer = useRef({ x: 0, y: 0 })
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 5], fov: 45 }}
      onPointerMove={(e) => {
        // mutate in place (no per-event allocation on the 60–120Hz hot path)
        pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
        pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1
      }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={null}><Crystal pointer={pointer} /></Suspense>
    </Canvas>
  )
}
