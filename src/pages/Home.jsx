import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Reveal } from '../components/ui/Reveal'
import { ProjectCard } from '../components/ui/ProjectCard'
import { ProjectCaseStudy } from '../components/ui/ProjectCaseStudy'
import { Seo } from '../components/ui/Seo'
import { personal, techStack, whatIBring } from '../data/personal'
import { featuredProjects } from '../data/projects'

export function Home() {
  const [active, setActive] = useState(null)

  return (
    <div>
      <Seo />

      <section className="relative overflow-hidden border-b border-line/40">
        <div className="bg-grid-faint absolute inset-0 opacity-50" aria-hidden />
        <div
          className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-rose-600/12 blur-[90px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-rose-950/25 blur-[100px]"
          aria-hidden
        />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:gap-14 lg:py-20">
          <Reveal className="flex shrink-0 justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-rose-500/35 via-transparent to-rose-900/20 opacity-90 blur-[2px]"
                aria-hidden
              />
              <img
                src={personal.assets.profilePhoto}
                alt={`${personal.name}, junior software developer based in ${personal.location}`}
                width={176}
                height={176}
                className="relative h-40 w-40 rounded-2xl border border-rose-500/25 object-cover object-top shadow-2xl shadow-black/50 ring-1 ring-rose-950/60 sm:h-44 sm:w-44"
              />
            </div>
          </Reveal>

          <div className="min-w-0 flex-1 lg:order-1">
            <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-rose-300/80">
              {personal.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-mist sm:text-5xl">
              {personal.name}
            </h1>
            <p className="mt-3 font-display text-lg font-semibold text-rose-100/90 sm:text-xl">{personal.role}</p>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-muted">{personal.heroSupporting}</p>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-dim sm:text-[0.95rem]">
              {personal.heroIntro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button as={Link} to="/projects" variant="primary">
                View Projects
              </Button>
              <Button
                as="a"
                href={personal.assets.resumePdf}
                variant="secondary"
                download
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </Button>
              <Button as={Link} to="/contact" variant="link">
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl border-t border-line/40 px-4 py-6 sm:px-6">
          <p className="sr-only">Primary technologies</p>
          <ul className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-lg border border-line/80 bg-panel/50 px-3 py-1.5 text-xs font-medium text-muted sm:text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-rose-300/80">
                Selected work
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-mist sm:text-3xl">Featured Projects</h2>
            </div>
            <Button as={Link} to="/projects" variant="ghost" className="self-start sm:self-auto">
              All projects
            </Button>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 60}>
              <ProjectCard project={project} onOpenCaseStudy={setActive} />
            </Reveal>
          ))}
        </div>
      </section>

      <ProjectCaseStudy project={active} onClose={() => setActive(null)} />

      <section className="border-t border-line/40 bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-mist sm:text-3xl">What I Bring</h2>
            <p className="mt-3 max-w-prose text-muted">
              Practical strengths from coursework, portfolio builds, and customer-facing work.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {whatIBring.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={i * 50}>
                  <Card className="h-full">
                    <h3 className="font-display text-lg font-bold text-mist">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                  </Card>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
