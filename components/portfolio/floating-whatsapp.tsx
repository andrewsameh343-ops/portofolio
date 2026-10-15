import { whatsappUrl } from '@/lib/links'
import { BrandIcon } from './decor'

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-transform hover:scale-110 lg:right-16"
    >
      <BrandIcon name="whatsapp" className="size-7" />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  )
}
