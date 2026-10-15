'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { projectCategories, projects, type Project, type ProjectCategory } from '@/data/site'
import { cn } from '@/lib/utils'
import { Section } from './section'
import { ProjectCard } from './project-card'

// Dialogs are only downloaded when a project is opened.
const ProjectDialog = dynamic(() => import('./project-dialog').then((mod) => mod.ProjectDialog), { ssr: false })

type Filter = 'all' | ProjectCategory

const tabs: { id: Filter; label: string }[] = [{ id: 'all', label: 'All' }, ...projectCategories]

export function Work() {
  const [filter, setFilter] = useState<Filter>('all')
  const [active, setActive] = useState<Project | null>(null)
  const reduce = useReducedMotion()

  const groups = projectCategories
    .filter((c) => filter === 'all' || c.id === filter)
    .map((c) => ({ ...c, items: projects.filter((p) => p.category === c.id) }))
    .filter((g) => g.items.length > 0)

  return (
    <Section id="work" title="My Work" bgWord="MY WORK" accent="the good stuff" webSide="left">
      <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const selected = filter === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="work-panel"
              onClick={() => setFilter(tab.id)}
              className={cn(
                'h-11 rounded-full border px-5 text-sm font-semibold transition-colors',
                selected
                  ? 'border-accent bg-accent text-foreground'
                  : 'border-white/15 text-muted hover:border-white/40 hover:text-foreground',
              )}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div id="work-panel" role="tabpanel" aria-live="polite" className="mt-10">
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={filter}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-14"
          >
            {groups.map((group) => (
              <div key={group.id}>
                <h3 className="mb-6 flex items-center gap-3 font-display text-2xl uppercase tracking-wide">
                  <span aria-hidden="true" className="h-px w-8 bg-accent" />
                  {group.label}
                  <span className="text-sm font-sans font-medium text-muted">({group.items.length})</span>
                </h3>
                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((project, i) => (
                    <m.li
                      key={project.id}
                      initial={reduce ? false : { opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                    >
                      <ProjectCard project={project} onOpen={() => setActive(project)} />
                    </m.li>
                  ))}
                </ul>
              </div>
            ))}
          </m.div>
        </AnimatePresence>
      </div>

      {active && <ProjectDialog project={active} onClose={() => setActive(null)} />}
    </Section>
  )
}
