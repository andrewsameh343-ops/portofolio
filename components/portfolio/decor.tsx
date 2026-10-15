import { cn } from '@/lib/utils'

/** Original, simple stylized spider. Purely decorative. */
export function Spider({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 44" className={className} aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 20 6 13 3 5M13 24H4L1 20M14 28l-8 6-2 7M26 20l8-7 3-8M27 24h9l3-4M26 28l8 6 2 7" />
      </g>
      <ellipse cx="20" cy="27" rx="7.5" ry="9.5" fill="currentColor" />
      <circle cx="20" cy="15" r="5.5" fill="currentColor" />
      <circle cx="18" cy="14" r="1.2" fill="var(--bg)" />
      <circle cx="22" cy="14" r="1.2" fill="var(--bg)" />
    </svg>
  )
}

/** Hand-drawn style spider web for section corners. */
export function WebCorner({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn('pointer-events-none', flip && '-scale-x-100', className)}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M200 0 0 200M200 0 60 200M200 0 130 200M200 0 0 60M200 0 0 130M200 0 200 200M200 0 0 0" />
        <path d="M200 40c-14 4-28 6-40 0-6 12-18 22-30 26 2 14-4 28-14 36 6 12 6 26 0 36" />
        <path d="M200 80c-20 6-40 6-58 0-8 18-26 32-44 38 2 20-6 40-20 52" />
        <path d="M200 120c-26 8-52 8-76 0-12 24-34 42-58 50" />
        <path d="M200 160c-30 8-62 10-92 2-14 18-30 30-50 36" />
      </g>
    </svg>
  )
}

/** Taped paper-sticker label. */
export function TapeSticker({
  children,
  className,
  rotate = -2,
}: {
  children: React.ReactNode
  className?: string
  rotate?: number
}) {
  return (
    <span
      className={cn(
        'relative inline-block bg-paper px-4 py-1.5 font-display text-sm uppercase tracking-wider text-background shadow-[3px_4px_0_rgba(0,0,0,0.45)]',
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <span
        aria-hidden="true"
        className="absolute -top-2 left-1/2 h-4 w-10 -translate-x-1/2 rotate-3 bg-white/40 backdrop-blur-[1px]"
      />
      {children}
    </span>
  )
}

/** Pencil-style underline doodle. */
export function ScribbleUnderline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 20" className={className} aria-hidden="true" focusable="false" preserveAspectRatio="none">
      <path
        d="M3 13c40-8 90-10 140-6 26 2 50 4 74-2M10 17c50-6 110-7 170-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Brand icon from /public/icons, tinted with currentColor via CSS mask. */
export function BrandIcon({ name, className }: { name: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn('mask-icon inline-block', className)}
      style={{ '--icon': `url(/icons/${name}.svg)` } as React.CSSProperties}
    />
  )
}
