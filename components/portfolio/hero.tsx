import Image from 'next/image'
import { ArrowDown, MessageCircle } from 'lucide-react'
import { site } from '@/data/site'
import { whatsappUrl } from '@/lib/links'
import { ScribbleUnderline, TapeSticker, WebCorner } from './decor'

export function Hero() {
  const hero = site.characters.hero
  const [first, ...rest] = site.name.split(' ')

  return (
    <section id="top" aria-label="Introduction" className="halftone relative overflow-hidden pt-24 md:pt-28">
      <WebCorner className="absolute right-0 top-16 size-48 text-white/10 md:size-72" />
      <WebCorner flip className="absolute bottom-0 left-0 size-40 rotate-180 text-white/5 md:size-56" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-5 pb-16 md:min-h-[calc(100svh-7rem)] md:grid-cols-2 md:px-8">
        {/* Giant "PORTFOLIO" word behind the character */}
        <p
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-display text-[22vw] leading-none text-white/[0.05] md:text-[15rem]"
        >
          PORTFOLIO
        </p>

        <div className="relative z-10 order-2 md:order-1">
          <p className="font-script text-2xl text-accent md:text-3xl">{'Hey there, I\u2019m'}</p>
          <h1 className="mt-1 font-display text-6xl uppercase leading-[0.9] tracking-wide sm:text-7xl lg:text-8xl">
            {first}
            <br />
            <span className="relative inline-block">
              {rest.join(' ')}
              <ScribbleUnderline className="absolute -bottom-3 left-0 h-4 w-full text-accent" />
            </span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted text-pretty">{site.tagline}</p>

          <ul className="mt-8 flex flex-wrap gap-4" aria-label="Roles">
            {site.roles.map((role, i) => (
              <li key={role}>
                <TapeSticker rotate={i % 2 === 0 ? -3 : 2}>{role}</TapeSticker>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 font-semibold transition-colors hover:bg-accent-soft"
            >
              View My Work
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-7 font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              {"Let's Talk"}
            </a>
          </div>
        </div>

        <div className="relative order-1 flex justify-center md:order-2">
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-1/2 h-10 w-2/3 -translate-x-1/2 rounded-[50%] bg-accent/25 blur-2xl"
          />
          <Image
            src={hero.src || '/placeholder.svg'}
            alt={hero.alt}
            width={hero.width}
            height={hero.height}
            priority
            fetchPriority="high"
            sizes="(min-width: 768px) 420px, 70vw"
            className="relative h-auto w-[62vw] max-w-[420px] animate-float drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] md:w-full"
          />
        </div>
      </div>
    </section>
  )
}
