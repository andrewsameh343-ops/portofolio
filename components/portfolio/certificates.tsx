import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { certificates } from '@/data/site'
import { Section } from './section'
import { Reveal } from './reveal'

export function Certificates() {
  if (certificates.length === 0) return null
  return (
    <Section id="certificates" title="Certificates" bgWord="CERTIFIED" accent="proof of skill" webSide="left">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <Reveal as="li" key={cert.title} delay={i * 0.06}>
            <article className="h-full overflow-hidden rounded-2xl border border-white/10 bg-surface">
              <div className="aspect-[4/3] overflow-hidden bg-background">
                <Image
                  src={cert.image.src || '/placeholder.svg'}
                  alt={cert.image.alt}
                  width={cert.image.width}
                  height={cert.image.height}
                  loading="lazy"
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl uppercase tracking-wide">{cert.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  {cert.issuer} · {cert.year}
                </p>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                  >
                    Verify <ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
