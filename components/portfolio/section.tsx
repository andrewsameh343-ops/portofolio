import { cn } from '@/lib/utils'
import { ParallaxWord } from './parallax-word'
import { WebCorner } from './decor'

/**
 * Shared section wrapper: faded parallax word + full-width navy title bar.
 */
export function Section({
  id,
  title,
  bgWord,
  accent,
  children,
  className,
  webSide = 'right',
}: {
  id: string
  title: string
  bgWord: string
  /** Small brush-script word shown on the title bar. */
  accent?: string
  children: React.ReactNode
  className?: string
  webSide?: 'left' | 'right' | 'none'
}) {
  const headingId = `${id}-title`
  return (
    <section id={id} aria-labelledby={headingId} className={cn('relative py-20 md:py-28', className)}>
      <ParallaxWord word={bgWord} className="top-6 md:top-2" />
      {webSide !== 'none' && (
        <WebCorner
          flip={webSide === 'left'}
          className={cn(
            'absolute top-0 size-32 text-white/10 md:size-48',
            webSide === 'right' ? 'right-0' : 'left-0',
          )}
        />
      )}

      <div className="relative mt-10 border-y border-white/5 bg-surface md:mt-16">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-4 md:px-8">
          <span aria-hidden="true" className="h-8 w-1.5 bg-accent" />
          <h2 id={headingId} className="font-display text-3xl uppercase tracking-wide text-foreground md:text-5xl">
            {title}
          </h2>
          {accent && (
            <span className="ml-auto hidden -rotate-3 font-script text-xl text-accent sm:block md:text-2xl">
              {accent}
            </span>
          )}
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-6xl px-5 md:mt-16 md:px-8">{children}</div>
    </section>
  )
}
