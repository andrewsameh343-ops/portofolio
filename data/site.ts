/**
 * ============================================================================
 *  SITE CONTENT — the single source of truth for the whole portfolio.
 * ============================================================================
 *  Every section reads ONLY from this file. To change text, links, projects,
 *  skills, certificates, etc. — edit the values below. No component changes
 *  needed.
 *
 *  Images live in /public. Paths here are relative to /public
 *  (e.g. "/images/projects/web-1.webp" -> public/images/projects/web-1.webp).
 *  Use WebP or AVIF for best performance.
 * ============================================================================
 */

/* ----------------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------------- */

export type ProjectCategory = 'websites' | 'ai-automation' | 'unreal-engine'

export type ImageAsset = {
  src: string
  alt: string
  width: number
  height: number
}

type ProjectBase = {
  id: string
  slug: string
  title: string
  category: ProjectCategory
  cover: ImageAsset
  /** One or two sentences shown on the card. */
  description: string
  tags: string[]
}

/** Websites & AI Automation projects open a case-study modal. */
export type CaseStudyProject = ProjectBase & {
  type: 'case-study'
  overview: string
  problem: string
  whatIBuilt: string[]
  tools: string[]
  result: string
  gallery: ImageAsset[]
  links?: { live?: string; demo?: string; repo?: string }
}

/**
 * Unreal Engine projects open a video lightbox.
 * Provide EITHER a YouTube / Vimeo embed URL, OR a self-hosted MP4 in /public.
 * Example embeds:
 *   YouTube: https://www.youtube-nocookie.com/embed/VIDEO_ID
 *   Vimeo:   https://player.vimeo.com/video/VIDEO_ID
 */
export type VideoProject = ProjectBase & {
  type: 'video'
  video: { kind: 'embed'; url: string } | { kind: 'mp4'; src: string }
}

export type Project = CaseStudyProject | VideoProject

export type SkillLevel = 1 | 2 | 3 | 4 | 5

export type Skill = {
  name: string
  /** File name (without .svg) in /public/icons. Leave empty to show initials. */
  icon?: string
  /** Optional 1–5 proficiency, rendered as a ring. */
  level?: SkillLevel
}

export type SkillGroup = { title: string; skills: Skill[] }

export type ServiceIcon = 'website' | 'automation' | 'unreal'

export type Service = {
  id: string
  icon: ServiceIcon
  title: string
  description: string
  /** Prefilled WhatsApp message used by the "Get a quote" button. */
  quoteMessage: string
}

export type JourneyItem = {
  year: string
  title: string
  place: string
  description: string
}

export type Certificate = {
  title: string
  issuer: string
  year: string
  image: ImageAsset
  /** Optional verification link. */
  url?: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
}

/* ----------------------------------------------------------------------------
 * Identity & contact
 * ------------------------------------------------------------------------- */

export const site = {
  name: 'Andrew Sameh',
  shortName: 'Andrew',
  /** Production URL — used for SEO / Open Graph. Update after deploying. */
  url: 'https://andrewsameh.com',
  // PLACEHOLDER tagline
  tagline: 'I build websites, automations & game worlds.',
  roles: ['AI Automation', 'Web Development', 'Unreal Engine 5'],
  seo: {
    title: 'Andrew Sameh — AI Automation, Web Development & Unreal Engine 5',
    description:
      'Portfolio of Andrew Sameh: websites, AI automation workflows and Unreal Engine 5 trailers & game visuals. Your friendly neighborhood creator.',
  },

  contact: {
    /** International format, digits only (no +, spaces or dashes). PLACEHOLDER */
    whatsappNumber: '201000000000',
    whatsappMessage:
      "Hi Andrew! I saw your portfolio and I'd love to talk about a project.",
    email: 'hello@andrewsameh.com', // PLACEHOLDER
    instagram: 'https://instagram.com/andrewsameh', // PLACEHOLDER
    linkedin: 'https://linkedin.com/in/andrewsameh', // PLACEHOLDER
    /** English CV in /public/cv. Replace the placeholder PDF. */
    cvUrl: '/cv/andrew-sameh-cv.pdf',
  },

  /**
   * Character image slots — swap the files to update the art.
   * Transparent-background PNG/WebP with a white sticker outline work best.
   * Keep width/height matching the real file to avoid layout shift.
   */
  characters: {
    hero: {
      src: '/images/character-hero.webp',
      alt: 'Cartoon illustration of Andrew in a dynamic action pose',
      width: 591,
      height: 1075,
    },
    // PLACEHOLDER — replace with /images/character-about.webp when ready
    about: {
      src: '/images/character-hero.webp',
      alt: 'Cartoon portrait of Andrew smiling',
      width: 591,
      height: 1075,
    },
    // PLACEHOLDER — replace with /images/character-working.webp when ready
    working: {
      src: '/images/character-hero.webp',
      alt: 'Cartoon of Andrew at work',
      width: 591,
      height: 1075,
    },
    // PLACEHOLDER — replace with /images/character-contact.webp when ready
    contact: {
      src: '/images/character-hero.webp',
      alt: 'Cartoon of Andrew waving hello',
      width: 591,
      height: 1075,
    },
  } satisfies Record<string, ImageAsset>,

  /* --------------------------------------------------------------------------
   * About
   * ----------------------------------------------------------------------- */
  about: {
    // PLACEHOLDER bio
    bio: [
      "I'm Andrew — a creator who swings between code, automation and real-time 3D.",
      'I design and build fast websites, wire up AI workflows that save teams hours every week, and craft cinematic trailers and game visuals in Unreal Engine 5.',
    ],
    facts: [
      { label: 'Based in', value: 'Egypt · working worldwide' },
      { label: 'Focus', value: 'Web, AI automation, UE5' },
      { label: 'Languages', value: 'English, Arabic' },
      { label: 'Available for', value: 'Freelance & collaborations' },
    ],
  },

  /* --------------------------------------------------------------------------
   * Feature flags
   * ----------------------------------------------------------------------- */
  /** Flip to true once you have real reviews in `testimonials` below. */
  showTestimonials: false,
} as const

/* ----------------------------------------------------------------------------
 * Projects — add / edit / remove entries here.
 * Order inside each category is preserved; the "All" tab groups by category.
 * ------------------------------------------------------------------------- */

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: 'websites', label: 'Websites' },
  { id: 'ai-automation', label: 'AI Automation' },
  { id: 'unreal-engine', label: 'Unreal Engine' },
]

const cover = (src: string, alt: string): ImageAsset => ({
  src,
  alt,
  width: 1280,
  height: 714,
})

export const projects: Project[] = [
  // ---- Websites ----
  {
    id: 'p1',
    slug: 'kickin-chicken',
    type: 'case-study',
    title: 'Kickin Chicken — Ordering Website',
    category: 'websites',
    cover: cover('/images/projects/web-kiken-1.webp', 'Kickin Chicken website hero with the rooster logo'),
    description: 'Arabic (RTL) fried-chicken menu with a cart that sends the full order to WhatsApp.',
    tags: ['HTML/CSS/JS', 'RTL', 'WhatsApp'],
    overview: 'A single-file, mobile-first ordering site for a fried-chicken restaurant in 15th of May City.',
    problem: 'The restaurant needed customers to browse the menu and place an order without calling or installing an app.',
    whatIBuilt: [
      'Full Arabic RTL menu: 38 items across 8 categories (meals, kids meals, sandwiches, rizo, starters, extras, sauces, drinks)',
      'Meals from 100 EGP (2 pieces) up to 450 EGP (12 pieces); sandwiches 50–135 EGP',
      'Cart with quantities and total, then a ready-written WhatsApp order with name, phone and address',
      'Branch section with map link, plus a single settings block to edit prices, phones and branches',
    ],
    tools: ['HTML', 'CSS', 'JavaScript', 'WhatsApp'],
    result: 'Live site that turns a menu into a one-tap WhatsApp order.',
    gallery: [cover('/images/projects/web-kiken-1.webp', 'Kickin Chicken home page')],
    links: { live: 'https://andrewsameh343-ops.github.io/kickin_chicken/' },
  },
  {
    id: 'p2',
    slug: 'b-fresco',
    type: 'case-study',
    title: 'B Fresco — Ordering Website',
    category: 'websites',
    cover: cover('/images/projects/web-bfresco.webp', 'B Fresco fried chicken ordering website'),
    description: 'Fried-chicken sandwich menu with single/double sizes and WhatsApp ordering.',
    tags: ['Lovable', 'React', 'WhatsApp'],
    overview: 'An online menu and ordering page for a fried-chicken restaurant in 15th of May City.',
    problem: 'Customers had no quick way to see the menu, choose sizes and send an order to delivery.',
    whatIBuilt: [
      'Menu in 6 sections: sandwiches, meals, fries, drinks, sauces and rizo',
      '7 signature sandwiches with single and double prices (90–195 EGP) and a combo upgrade (+25 EGP)',
      'Cart that sends the order to WhatsApp, with call and Google Maps directions built in',
    ],
    tools: ['Lovable', 'React', 'Google Maps', 'WhatsApp'],
    result: 'Live site where customers pick their meal and send the order in seconds.',
    gallery: [cover('/images/projects/web-bfresco.webp', 'B Fresco ordering website')],
    links: { live: 'https://chat-order-kitchen.lovable.app/' },
  },
  {
    id: 'p3',
    slug: 'ebn-el-balad',
    type: 'case-study',
    title: 'Ebn El Balad — Online Menu',
    category: 'websites',
    cover: cover('/images/projects/web-ebn-el-balad.webp', 'Ebn El Balad grill restaurant website'),
    description: 'A huge menu (grills, pizza, crepes, home cooking) made easy to browse and order.',
    tags: ['Lovable', 'React', 'Online Ordering'],
    overview: 'A full online menu for an Egyptian grill and home-cooking restaurant.',
    problem: 'The menu had hundreds of items, so customers needed fast category browsing and a simple way to order.',
    whatIBuilt: [
      'Menu with 19 category tabs: home cooking, grills, hawawshi, trays, shawarma, pizza, pasta, crepes, burgers and more',
      'Hundreds of items with prices from 10 to 3,900 EGP, and "most ordered" badges on best sellers',
      'Order cart with a notes field, call button and location link',
    ],
    tools: ['Lovable', 'React', 'Google Maps'],
    result: 'A complete, easy-to-scan menu with cash-on-delivery ordering.',
    gallery: [cover('/images/projects/web-ebn-el-balad.webp', 'Ebn El Balad menu')],
    links: { live: 'https://ibn-el-balad-palette.lovable.app/' },
  },
  {
    id: 'p4',
    slug: 'hati-si-el-sayed',
    type: 'case-study',
    title: 'Hati Si El Sayed — Ordering Website',
    category: 'websites',
    cover: cover('/images/projects/web-hati.webp', 'Hati Si El Sayed grill restaurant website'),
    description: 'Charcoal grills and hawawshi menu with a cart that sends the order to WhatsApp.',
    tags: ['Lovable', 'React', 'WhatsApp'],
    overview: 'An ordering website for a charcoal-grill restaurant with two branches in 15th of May City.',
    problem: 'The restaurant wanted customers to see its best dishes and send orders directly, without a delivery app.',
    whatIBuilt: [
      'Hero gallery of top dishes (hawawshi, charcoal kofta, mixed grill)',
      'Menu in 10 categories: hawawshi, meat and chicken grills, meals, pasta, crepes, sandwiches, trays and desserts',
      'Hawawshi from 45 to 100 EGP, cart and WhatsApp ordering',
      'Branches section with map link and phone numbers',
    ],
    tools: ['Lovable', 'React', 'Google Maps', 'WhatsApp'],
    result: 'Live ordering site that makes the menu easy to browse and the order easy to send.',
    gallery: [cover('/images/projects/web-hati.webp', 'Hati Si El Sayed ordering website')],
    links: { live: 'https://wow-menu-chat.lovable.app/' },
  },

  {
    id: 'p5',
    slug: 'freshco',
    type: 'case-study',
    title: 'FreshCo — Fresh Chicken & Frozen Shop',
    category: 'websites',
    cover: cover('/images/projects/web-freshco.webp', 'FreshCo fresh chicken and frozen products website'),
    description: 'Order fresh chicken and frozen products by weight, with an admin page to update prices.',
    tags: ['Lovable', 'React', 'WhatsApp', 'Admin'],
    overview: 'An online shop for fresh chicken, liver, ready-to-cook items and frozen meat, sold by the kilo.',
    problem: 'Prices change often and customers order by weight, so the shop needed a catalog that is easy to update and easy to order from.',
    whatIBuilt: [
      '16 products in 4 categories: fresh chicken, liver and gizzards, ready-to-cook and frozen meat',
      'Customers choose the weight in kilos, and the cart calculates the price and sends the order to WhatsApp',
      'Private prices admin page, so the owner updates prices without touching code and the "last updated" date shows on the page',
    ],
    tools: ['Lovable', 'React', 'WhatsApp'],
    result: 'Live shop where the owner keeps prices current and customers order by weight in seconds.',
    gallery: [cover('/images/projects/web-freshco.webp', 'FreshCo shop')],
    links: { live: 'https://chickencart-online.lovable.app/' },
  },
  {
    id: 'p6',
    slug: 'yoanna-reda-portfolio',
    type: 'case-study',
    title: 'Yoanna Reda — Designer Portfolio',
    category: 'websites',
    cover: cover('/images/projects/web-yoanna.webp', 'Yoanna Reda graphic designer portfolio home page'),
    description: 'An editorial, paper-and-ink portfolio website for a graphic designer, with her own admin login.',
    tags: ['Next.js', 'Editorial Design', 'Admin'],
    overview: 'A portfolio website for graphic designer Yoanna Reda, with a handmade botanical-journal look.',
    problem: 'She needed a portfolio that looks as crafted as her work and that she can update by herself.',
    whatIBuilt: [
      '5 pages: Work, About, Journal, CV and Contact, laid out like a printed book with a table of contents',
      'Torn-paper shapes, serif typography and botanical illustrations in a warm beige palette',
      'Studio login (admin area) so she can add and manage her projects',
    ],
    tools: ['Next.js', 'React', 'Vercel'],
    result: 'Live portfolio, deployed on Vercel and ready for her projects.',
    gallery: [cover('/images/projects/web-yoanna.webp', 'Yoanna Reda portfolio home page')],
    links: { live: 'https://graphic-design-portfolio-website.vercel.app/' },
  },

  // ---- AI Automation (PLACEHOLDERS) ----
  {
    id: 'p7',
    slug: 'lead-pipeline',
    type: 'case-study',
    title: 'Auto Lead Pipeline',
    category: 'ai-automation',
    cover: cover('/images/projects/ai-1.webp', 'Connected automation workflow nodes'),
    description: 'Leads captured, enriched by AI and routed to the right person automatically.',
    tags: ['n8n', 'OpenAI', 'Google Sheets'],
    overview: 'An end-to-end lead handling automation for a small agency.',
    problem: 'Leads from several forms were copied by hand and often answered too late.',
    whatIBuilt: [
      'Workflow collecting leads from all forms into one place',
      'AI classification and lead scoring',
      'Instant WhatsApp & email notifications',
    ],
    tools: ['n8n', 'OpenAI', 'Google Sheets'],
    result: 'Response time dropped from hours to under 5 minutes.',
    gallery: [cover('/images/projects/ai-1.webp', 'Automation workflow overview')],
  },
  {
    id: 'p8',
    slug: 'support-assistant',
    type: 'case-study',
    title: 'AI Support Assistant',
    category: 'ai-automation',
    cover: cover('/images/projects/ai-2.webp', 'AI chatbot answering customer messages on a phone'),
    description: 'A chatbot that answers common customer questions 24/7.',
    tags: ['OpenAI', 'Make', 'WhatsApp'],
    overview: 'A customer-support assistant trained on a business’s FAQs.',
    problem: 'The team spent most of the day answering the same questions.',
    whatIBuilt: ['Knowledge base from existing FAQs', 'AI assistant connected to WhatsApp', 'Hand-off to a human when needed'],
    tools: ['OpenAI', 'Make', 'Airtable'],
    result: '70% of conversations resolved without human help.',
    gallery: [cover('/images/projects/ai-2.webp', 'AI assistant chat screen')],
  },

  // ---- Unreal Engine ----
  {
    id: 'p9',
    slug: 'ue5-cinematic',
    type: 'video',
    title: 'UE5 Cinematic Trailer',
    category: 'unreal-engine',
    cover: cover('/images/projects/ue-1.webp', 'Rows of armored soldiers in a cinematic Unreal Engine 5 scene'),
    description: 'A real-time cinematic of a massive armored army, rendered in Unreal Engine 5.',
    tags: ['Unreal Engine 5', 'Cinematic', 'Real-time'],
    video: { kind: 'embed', url: 'https://www.youtube.com/embed/8dqcith5DIA' },
  },
  {
    id: 'p10',
    slug: 'my-first-game',
    type: 'video',
    title: 'My First Game — FPS Prototype',
    category: 'unreal-engine',
    cover: cover('/images/projects/ue-2.webp', 'Red neon first-person shooter prototype with score and timer'),
    description: 'A first-person target-shooting prototype with a neon look, score and timer.',
    tags: ['Unreal Engine 5', 'Gameplay', 'Prototype'],
    video: { kind: 'embed', url: 'https://www.youtube.com/embed/EVqhncBN0Uo' },
  },
]

/* ----------------------------------------------------------------------------
 * Services
 * ------------------------------------------------------------------------- */

export const services: Service[] = [
  {
    id: 'web',
    icon: 'website',
    title: 'Website Design & Development',
    description: 'Fast, beautiful websites that look great on every screen and turn visitors into clients.',
    quoteMessage: "Hi Andrew! I'd like a quote for a website.",
  },
  {
    id: 'automation',
    icon: 'automation',
    title: 'AI Automation & Workflows',
    description: 'Smart automations and AI assistants that take repetitive work off your plate.',
    quoteMessage: "Hi Andrew! I'd like a quote for an AI automation.",
  },
  {
    id: 'unreal',
    icon: 'unreal',
    title: 'Unreal Engine 5 Trailers & Game Visuals',
    description: 'Cinematic trailers, environments and game visuals rendered in real time with UE5.',
    quoteMessage: "Hi Andrew! I'd like a quote for an Unreal Engine 5 project.",
  },
]

/* ----------------------------------------------------------------------------
 * Skills — icon names match files in /public/icons (without .svg)
 * ------------------------------------------------------------------------- */

export const skillGroups: SkillGroup[] = [
  {
    title: 'Web',
    skills: [
      { name: 'React', icon: 'react', level: 5 },
      { name: 'Next.js', icon: 'nextdotjs', level: 5 },
      { name: 'TypeScript', icon: 'typescript', level: 4 },
      { name: 'Tailwind CSS', icon: 'tailwind-css', level: 5 },
      { name: 'JavaScript', icon: 'javascript', level: 5 },
      { name: 'HTML5', icon: 'html5', level: 5 },
    ],
  },
  {
    title: 'AI Automation',
    skills: [
      { name: 'n8n', icon: 'n8n', level: 5 },
      { name: 'Make', icon: 'make', level: 4 },
      { name: 'Zapier', icon: 'zapier', level: 4 },
      { name: 'OpenAI', icon: 'openai', level: 5 },
      { name: 'Python', icon: 'python', level: 3 },
      { name: 'Node.js', icon: 'nodedotjs', level: 4 },
    ],
  },
  {
    title: 'Unreal Engine 5',
    skills: [
      { name: 'Unreal Engine', icon: 'unreal-engine', level: 4 },
      { name: 'Blueprints', level: 4 },
      { name: 'Sequencer', level: 4 },
      { name: 'Blender', icon: 'blender', level: 3 },
      { name: 'DaVinci Resolve', icon: 'davinci-resolve', level: 3 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Figma', icon: 'figma', level: 4 },
      { name: 'GitHub', icon: 'github', level: 4 },
      { name: 'Vercel', icon: 'vercel', level: 4 },
      { name: 'Photoshop', icon: 'photoshop', level: 3 },
      { name: 'Notion', icon: 'notion', level: 4 },
      { name: 'Airtable', icon: 'airtable', level: 4 },
      { name: 'Google Sheets', icon: 'google-sheets', level: 5 },
    ],
  },
]

/* ----------------------------------------------------------------------------
 * Journey (PLACEHOLDERS) — newest first
 * ------------------------------------------------------------------------- */

export const journey: JourneyItem[] = [
  {
    year: '2026',
    title: 'Freelance Creator',
    place: 'Independent',
    description: 'Building websites, AI automations and UE5 visuals for clients worldwide.',
  },
  {
    year: '2025',
    title: 'AI Automation Specialist',
    place: 'Agency projects',
    description: 'Designed workflows and AI assistants that saved teams hundreds of hours.',
  },
  {
    year: '2024',
    title: 'Unreal Engine 5 Deep Dive',
    place: 'Self-taught',
    description: 'Started creating cinematic trailers and game prototypes in UE5.',
  },
  {
    year: '2023',
    title: 'Web Developer',
    place: 'First clients',
    description: 'Shipped my first paid websites for local businesses.',
  },
  {
    year: '2022',
    title: 'Hello, World',
    place: 'The beginning',
    description: 'Wrote my first lines of code and never looked back.',
  },
]

/* ----------------------------------------------------------------------------
 * Certificates (PLACEHOLDERS) — leave the array empty to hide the section.
 * ------------------------------------------------------------------------- */

const certImage = (alt: string): ImageAsset => ({
  src: '/images/certificates/cert.webp',
  alt,
  width: 1200,
  height: 896,
})

export const certificates: Certificate[] = [
  { title: 'Meta Front-End Developer', issuer: 'Coursera', year: '2024', image: certImage('Front-End Developer certificate') },
  { title: 'AI Automation Fundamentals', issuer: 'Online Academy', year: '2025', image: certImage('AI Automation certificate') },
  { title: 'Unreal Engine 5 Cinematics', issuer: 'Epic Games Learning', year: '2025', image: certImage('Unreal Engine certificate') },
]

/* ----------------------------------------------------------------------------
 * Testimonials — shown only when site.showTestimonials is true.
 * ------------------------------------------------------------------------- */

export const testimonials: Testimonial[] = [
  { quote: 'Andrew delivered beyond what we imagined — fast, friendly and super talented.', name: 'Client Name', role: 'Founder, Company' },
  { quote: 'The automation he built saves our team hours every single week.', name: 'Client Name', role: 'Operations Lead, Company' },
]

/* ----------------------------------------------------------------------------
 * Navigation
 * ------------------------------------------------------------------------- */

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Skills' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
] as const
