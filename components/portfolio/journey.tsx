import { journey } from '@/data/site'
import { Section } from './section'
import { Reveal } from './reveal'

export function Journey() {
  return (
    <Section id="journey" title="My Journey" bgWord="JOURNEY" accent="the story so far">
      <ol className="relative mx-auto max-w-3xl">
        <span aria-hidden="true" className="absolute bottom-0 left-4 top-0 w-px bg-accent/40 md:left-1/2" />
        {journey.map((item, i) => {
          const right = i % 2 === 1
          return (
            <Reveal
              as="li"
              key={item.year + item.title}
              className="relative mb-10 pl-12 last:mb-0 md:grid md:grid-cols-2 md:gap-12 md:pl-0"
            >
              <span
                aria-hidden="true"
                className="absolute left-4 top-2 size-3.5 -translate-x-1/2 rounded-full bg-accent ring-4 ring-background md:left-1/2"
              />
              <div className={right ? 'md:col-start-2' : 'md:text-right'}>
                <span className="font-script text-2xl text-accent">{item.year}</span>
                <h3 className="font-display text-2xl uppercase tracking-wide">{item.title}</h3>
                <p className="text-sm font-medium text-muted">{item.place}</p>
                <p className="mt-2 leading-relaxed text-foreground/85">{item.description}</p>
              </div>
            </Reveal>
          )
        })}
      </ol>
    </Section>
  )
}
