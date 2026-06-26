import { createContext, type MutableRefObject } from 'react'

export const ScrollProgressContext = createContext<MutableRefObject<number>>({ current: 0 })
