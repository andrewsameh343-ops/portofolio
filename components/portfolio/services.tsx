import { Bot, Clapperboard, MonitorSmartphone, ArrowRight } from 'lucide-react'
import { services, type ServiceIcon } from '@/data/site'
import { whatsappUrl } from '@/lib/links'
import { Section } from './section'
import { Reveal } from './reveal'

const icons: Record<ServiceIcon, typeof Bot> = {
  website: MonitorSmartphone,
  automation: Bot,
  unreal: Clapperboard,
}

export function Services() {
  return (
    <Section id="services" title="What I Do" bgWord="SERVICES" accent="how I can help">
      <ul className="grid gap-6 md:grid-cols-3">
        {services.map((service, i) => {
          const Icon = icons[service.icon]
          return (
            <Reveal as="li" key={service.id} delay={i * 0.08}>
              <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-surface p-7 transition-colors hover:border-accent/60">
                <div className="flex size-14 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-foreground">
                  <Icon className="size-7" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-2xl uppercase leading-tight tracking-wide">{service.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{service.description}</p>
                <a
                  href={whatsappUrl(service.quoteMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex h-11 items-center justify-center gap-2 self-start rounded-full border border-accent px-5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-foreground"
                >
                  Get a quote
                  <span className="sr-only">{` for ${service.title}`}</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
