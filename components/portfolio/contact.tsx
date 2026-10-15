import Image from 'next/image'
import { Download, Mail } from 'lucide-react'
import { site } from '@/data/site'
import { mailtoUrl, whatsappUrl } from '@/lib/links'
import { Section } from './section'
import { Reveal } from './reveal'
import { BrandIcon, TapeSticker } from './decor'

export function Contact() {
  const character = site.characters.contact
  const socials = [
    { href: site.contact.instagram, label: 'Instagram', icon: 'instagram' },
    { href: site.contact.linkedin, label: 'LinkedIn', icon: 'linkedin' },
  ]

  return (
    <Section id="contact" title="Let's Talk" bgWord="CONTACT" accent="say hello">
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <Reveal>
          <p className="max-w-lg font-display text-4xl uppercase leading-tight tracking-wide text-balance md:text-5xl">
            Got a project in mind? <span className="text-accent">{"Let's build it."}</span>
          </p>
          <p className="mt-4 max-w-md text-lg text-muted">
            {'The fastest way to reach me is WhatsApp — I usually reply within a few hours.'}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center gap-3 rounded-full bg-accent px-8 text-lg font-semibold transition-colors hover:bg-accent-soft"
            >
              <BrandIcon name="whatsapp" className="size-5" />
              Chat on WhatsApp
            </a>
            <a
              href={site.contact.cvUrl}
              download
              className="inline-flex h-14 items-center gap-2 rounded-full border border-white/20 px-7 font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              <Download className="size-5" aria-hidden="true" />
              Download CV
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-3" aria-label="Other ways to reach me">
            <li>
              <a
                href={mailtoUrl()}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 px-4 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
              >
                <Mail className="size-4" aria-hidden="true" />
                {site.contact.email}
              </a>
            </li>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <BrandIcon name={s.icon} className="size-5" />
                  <span className="sr-only">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-[260px]">
          <TapeSticker rotate={-6} className="absolute -left-4 top-6 z-10 bg-accent text-foreground">
            {'Hit me up!'}
          </TapeSticker>
          <Image
            src={character.src || '/placeholder.svg'}
            alt={character.alt}
            width={character.width}
            height={character.height}
            loading="lazy"
            sizes="260px"
            className="h-auto w-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
          />
        </Reveal>
      </div>
    </Section>
  )
}
