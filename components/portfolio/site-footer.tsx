import { site } from '@/data/site'
import { Spider } from './decor'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-surface/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted md:flex-row md:px-8">
        <p className="flex items-center gap-2">
          <Spider className="size-4 text-accent" />
          {`© ${new Date().getFullYear()} ${site.name}`}
        </p>
        <p className="font-script text-lg text-foreground/80">Your friendly neighborhood creator</p>
      </div>
    </footer>
  )
}
