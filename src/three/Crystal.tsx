import { useContext, useRef, type MutableRefObject } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'
import { ScrollProgressContext } from '../motion/ScrollProgressContext'

export function Crystal({ pointer }: { pointer: MutableRefObject<{ x: number; y: number }> }) {
  const mesh = useRef<Mesh>(null!)
  const progress = useContext(ScrollProgressContext)
  useFrame((_, dt) => {
    const p = progress.current
    mesh.current.rotation.y += dt * 0.15 + p * dt * 2
    mesh.current.rotation.x = pointer.current.y * 0.3 + p * 0.6
    const s = 1 + p * 0.25
    mesh.current.scale.set(s, s, s)
  })
  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.4, 0]} />
      <meshBasicMaterial wireframe color="#ffffff" />
    </mesh>
  )
}
