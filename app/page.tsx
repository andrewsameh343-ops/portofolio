import { MotionProvider } from '@/components/portfolio/motion-provider'
import { SiteNav } from '@/components/portfolio/site-nav'
import { Hero } from '@/components/portfolio/hero'
import { RedThread } from '@/components/portfolio/red-thread'
import { About } from '@/components/portfolio/about'
import { Work } from '@/components/portfolio/work'
import { Services } from '@/components/portfolio/services'
import { Skills } from '@/components/portfolio/skills'
import { Journey } from '@/components/portfolio/journey'
import { Certificates } from '@/components/portfolio/certificates'
import { Testimonials } from '@/components/portfolio/testimonials'
import { Contact } from '@/components/portfolio/contact'
import { SiteFooter } from '@/components/portfolio/site-footer'
import { FloatingWhatsApp } from '@/components/portfolio/floating-whatsapp'

export default function Page() {
  return (
    <MotionProvider>
      <SiteNav />
      <RedThread />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Services />
        <Skills />
        <Journey />
        <Certificates />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </MotionProvider>
  )
}
