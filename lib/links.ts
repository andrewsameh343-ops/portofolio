import { site } from '@/data/site'

/** wa.me click-to-chat link with a prefilled message. */
export function whatsappUrl(message: string = site.contact.whatsappMessage) {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function mailtoUrl(subject = `Project inquiry for ${site.name}`) {
  return `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}`
}
