'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ExternalLink, X } from 'lucide-react'
import type { CaseStudyProject, Project, VideoProject } from '@/data/site'
import { cn } from '@/lib/utils'

/**
 * Native <dialog> modal: built-in focus trapping, Esc to close, top-layer rendering.
 * Case studies show a write-up; videos show a lightbox player (no autoplay sound).
 */
export function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const isVideo = project.type === 'video'

  return (
    <dialog
      ref={ref}
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close()
      }}
      className={cn(
        'm-auto w-[calc(100%-1.5rem)] overflow-visible bg-transparent p-0 text-foreground',
        isVideo ? 'max-w-5xl' : 'max-w-3xl',
      )}
    >
      <div className="relative max-h-[90svh] overflow-y-auto rounded-2xl border border-white/10 bg-surface">
        <button
          type="button"
          onClick={() => ref.current?.close()}
          className="sticky right-3 top-3 z-10 float-right m-3 inline-flex size-11 items-center justify-center rounded-full bg-background/90 transition-colors hover:bg-accent"
        >
          <X className="size-5" aria-hidden="true" />
          <span className="sr-only">Close</span>
        </button>
        {isVideo ? <VideoBody project={project} /> : <CaseStudyBody project={project} />}
      </div>
    </dialog>
  )
}

function VideoBody({ project }: { project: VideoProject }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="p-4 pt-0 md:p-6 md:pt-0">
      <h2 id="project-dialog-title" className="pr-14 pt-5 font-display text-2xl uppercase tracking-wide md:text-3xl">
        {project.title}
      </h2>
      <div className="mt-4 aspect-video overflow-hidden rounded-xl bg-background">
        {project.video.kind === 'embed' ? (
          <iframe
            src={project.video.url}
            title={project.title}
            loading="lazy"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            className="h-full w-full"
          />
        ) : (
          <video
            src={project.video.src}
            poster={project.cover.src}
            controls
            preload="metadata"
            playsInline
            onError={() => setFailed(true)}
            className="h-full w-full"
          />
        )}
      </div>
      {failed && project.video.kind === 'mp4' && (
        <p className="mt-3 text-sm text-muted">
          The video could not be played here.{' '}
          <a href={project.video.src} target="_blank" rel="noreferrer" className="underline">
            Open it directly
          </a>
        </p>
      )}
      <p className="mt-4 text-muted">{project.description}</p>
    </div>
  )
}

function CaseStudyBody({ project }: { project: CaseStudyProject }) {
  const links = project.links ?? {}
  const linkItems = [
    links.live && { href: links.live, label: 'Visit live site' },
    links.demo && { href: links.demo, label: 'View demo' },
    links.repo && { href: links.repo, label: 'View code' },
  ].filter(Boolean) as { href: string; label: string }[]

  return (
    <article>
      <div className="relative aspect-video bg-background">
        <Image
          src={project.cover.src || '/placeholder.svg'}
          alt={project.cover.alt}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
      </div>
      <div className="relative -mt-12 px-5 pb-8 md:px-8">
        <h2 id="project-dialog-title" className="font-display text-3xl uppercase tracking-wide md:text-4xl">
          {project.title}
        </h2>
        <p className="mt-3 text-lg text-muted text-pretty">{project.overview}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Block title="The problem">
            <p>{project.problem}</p>
          </Block>
          <Block title="The result">
            <p>{project.result}</p>
          </Block>
        </div>

        <Block title="What I built" className="mt-6">
          <ul className="list-disc space-y-1.5 pl-5 marker:text-accent">
            {project.whatIBuilt.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        <Block title="Tools" className="mt-6">
          <ul className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <li key={tool} className="rounded-full border border-white/15 px-3 py-1 text-sm">
                {tool}
              </li>
            ))}
          </ul>
        </Block>

        {project.gallery.length > 0 && (
          <Block title="Gallery" className="mt-6">
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.gallery.map((img) => (
                <li key={img.src + img.alt} className="overflow-hidden rounded-lg">
                  <Image
                    src={img.src || '/placeholder.svg'}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    sizes="(min-width: 640px) 360px, 100vw"
                    className="h-auto w-full"
                  />
                </li>
              ))}
            </ul>
          </Block>
        )}

        {linkItems.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {linkItems.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 font-semibold transition-colors hover:bg-accent-soft"
              >
                {link.label}
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

function Block({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={className}>
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">{title}</h3>
      <div className="leading-relaxed text-foreground/90">{children}</div>
    </section>
  )
}
