'use client'

import { useRef } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

/** Huge faded outlined word that drifts horizontally as its section scrolls by. */
export function ParallaxWord({ word, className }: { word: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['6%', '-10%'])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-x-0 overflow-hidden select-none', className)}
    >
      <m.span
        style={reduce ? undefined : { x }}
        className="outline-word block whitespace-nowrap font-display text-[24vw] leading-none md:text-[17vw]"
      >
        {word}
      </m.span>
    </div>
  )
}
