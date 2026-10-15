'use client'

import { m, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Spider } from './decor'

/**
 * Thin red thread pinned to the viewport edge. It "draws" downward as the page
 * scrolls, with a spider hanging from its tip. Uses only transforms.
 */
export function RedThread() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  const spiderY = useTransform(progress, (p) => `calc(${p} * (100vh - 7rem))`)

  if (reduce) return null

  return (
    <div aria-hidden="true" className="pointer-events-none fixed right-3 top-16 bottom-0 z-40 hidden w-8 lg:block xl:right-6">
      <m.div
        style={{ scaleY: progress }}
        className="absolute left-1/2 top-0 h-[calc(100%-3rem)] w-px origin-top -translate-x-1/2 bg-accent"
      />
      <m.div style={{ y: spiderY }} className="absolute left-0 top-0">
        <div className="animate-sway origin-top pt-1">
          <Spider className="size-8 text-accent drop-shadow-[0_0_8px_rgba(215,38,61,0.6)]" />
        </div>
      </m.div>
    </div>
  )
}
