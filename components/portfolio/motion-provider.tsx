'use client'

import { LazyMotion, domAnimation } from 'framer-motion'

/** Loads only the DOM animation feature set (smaller bundle than full `motion`). */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
}
