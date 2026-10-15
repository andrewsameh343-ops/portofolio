import Image from 'next/image'
import { ArrowUpRight, Play } from 'lucide-react'
import { projectCategories, type Project } from '@/data/site'

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const category = projectCategories.find((c) => c.id === project.category)?.label
  const isVideo = project.type === 'video'

  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-surface transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-accent/70 hover:shadow-[0_0_0_1px_var(--accent),0_18px_40px_-12px_rgba(215,38,61,0.45)]">
      <div className="relative aspect-video overflow-hidden bg-background">
        <Image
          src={project.cover.src || '/placeholder.svg'}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {isVideo && (
          <span
            aria-hidden="true"
            className="absolute inset-0 m-auto flex size-14 items-center justify-center rounded-full bg-accent/90 shadow-lg transition-transform group-hover:scale-110"
          >
            <Play className="ml-0.5 size-6 fill-current" />
          </span>
        )}
        <span className="absolute left-3 top-3 rounded-sm bg-background/85 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
          {category}
        </span>
      </div>

      <div className="flex flex-col gap-3 p-5">
        <h4 className="font-display text-xl uppercase tracking-wide">
          <button
            type="button"
            onClick={onOpen}
            className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            {project.title}
            <span className="sr-only">{isVideo ? ' — play video' : ' — view case study'}</span>
          </button>
        </h4>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>
        <ul className="mt-1 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-muted">
              {tag}
            </li>
          ))}
        </ul>
        <span aria-hidden="true" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-accent">
          {isVideo ? 'Watch video' : 'View case study'}
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
      {/* Visible keyboard focus ring for the stretched button */}
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl ring-accent group-has-[:focus-visible]:ring-2" />
    </article>
  )
}
