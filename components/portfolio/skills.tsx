import { skillGroups, type Skill } from '@/data/site'
import { Section } from './section'
import { Reveal } from './reveal'
import { BrandIcon } from './decor'

const RING = 2 * Math.PI * 22

function SkillTile({ skill }: { skill: Skill }) {
  const initials = skill.name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
  const pct = skill.level ? skill.level / 5 : 0

  return (
    <li className="group flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-surface/70 p-4 text-center transition-colors hover:border-accent/60">
      <div className="relative flex size-14 items-center justify-center">
        {skill.level && (
          <svg viewBox="0 0 50 50" className="absolute inset-0 size-full -rotate-90" aria-hidden="true">
            <circle cx="25" cy="25" r="22" fill="none" stroke="var(--line)" strokeWidth="2.5" />
            <circle
              cx="25"
              cy="25"
              r="22"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={RING}
              strokeDashoffset={RING * (1 - pct)}
            />
          </svg>
        )}
        {skill.icon ? (
          <BrandIcon name={skill.icon} className="size-7 text-foreground transition-colors group-hover:text-accent" />
        ) : (
          <span aria-hidden="true" className="font-display text-lg text-foreground group-hover:text-accent">
            {initials}
          </span>
        )}
      </div>
      <span className="text-sm font-medium">{skill.name}</span>
      {skill.level && <span className="sr-only">{`Proficiency ${skill.level} out of 5`}</span>}
    </li>
  )
}

export function Skills() {
  return (
    <Section id="skills" title="Skills & Tools" bgWord="SKILLS" accent="my toolbelt" webSide="left">
      <div className="grid gap-12">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <h3 className="mb-5 flex items-center gap-3 font-display text-2xl uppercase tracking-wide">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              {group.title}
            </h3>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {group.skills.map((skill) => (
                <SkillTile key={skill.name} skill={skill} />
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
