import Image from 'next/image'
import { site } from '@/data/site'
import { Section } from './section'
import { Reveal } from './reveal'
import { TapeSticker } from './decor'

export function About() {
  const portrait = site.characters.about
  return (
    <Section id="about" title="About Me" bgWord="ABOUT" accent="nice to meet you">
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <Reveal className="relative mx-auto w-full max-w-xs">
          <div className="relative -rotate-2 rounded-2xl border-4 border-paper bg-surface p-4 shadow-[8px_10px_0_rgba(0,0,0,0.5)]">
            <span aria-hidden="true" className="absolute -top-3 left-6 h-6 w-16 -rotate-6 bg-white/30" />
            <span aria-hidden="true" className="absolute -top-3 right-6 h-6 w-16 rotate-6 bg-white/30" />
            <div className="aspect-square overflow-hidden rounded-xl bg-background">
              <Image
                src={portrait.src || '/placeholder.svg'}
                alt={portrait.alt}
                width={portrait.width}
                height={portrait.height}
                sizes="320px"
                className="h-auto w-full object-cover object-top"
              />
            </div>
          </div>
          <TapeSticker rotate={4} className="absolute -bottom-4 -right-2 bg-accent text-foreground">
            {'That\u2019s me!'}
          </TapeSticker>
        </Reveal>

        <div>
          <Reveal>
            {site.about.bio.map((p) => (
              <p key={p} className="mb-4 text-lg leading-relaxed text-muted text-pretty first:text-xl first:text-foreground">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {site.about.facts.map((fact) => (
                <div key={fact.label} className="rounded-xl border border-white/10 bg-surface/60 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-accent">{fact.label}</dt>
                  <dd className="mt-1 font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
