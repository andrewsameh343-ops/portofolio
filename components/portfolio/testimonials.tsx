import { Quote } from 'lucide-react'
import { site, testimonials } from '@/data/site'
import { Section } from './section'
import { Reveal } from './reveal'

/** Hidden unless `site.showTestimonials` is true in data/site.ts. */
export function Testimonials() {
  if (!site.showTestimonials || testimonials.length === 0) return null
  return (
    <Section id="testimonials" title="Kind Words" bgWord="REVIEWS" accent="what clients say">
      <ul className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal as="li" key={t.quote} delay={i * 0.06}>
            <figure className="h-full rounded-2xl border border-white/10 bg-surface p-7">
              <Quote className="size-8 text-accent" aria-hidden="true" />
              <blockquote className="mt-4 text-lg leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold">{t.name}</span>
                <span className="text-muted">{` · ${t.role}`}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
