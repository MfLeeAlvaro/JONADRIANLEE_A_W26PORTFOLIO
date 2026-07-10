import { Card } from './Card'
import { PlaceholderImage } from './PlaceholderImage'
import { Button } from './Button'

function isValidUrl(url) {
  return typeof url === 'string' && url.length > 1 && url !== '#'
}

export function ProjectCard({ project, onOpenCaseStudy }) {
  const hasGithub = isValidUrl(project.githubUrl)
  const hasDemo = isValidUrl(project.demoUrl)
  const hasCaseStudy = Boolean(project.caseStudy)

  return (
    <Card
      hover
      className="group flex h-full flex-col overflow-hidden p-0 ring-1 ring-inset ring-line/60"
    >
      <div className="relative overflow-hidden">
        <div className="transition duration-500 ease-out group-hover:scale-[1.02]">
          <PlaceholderImage
            src={project.image}
            alt={`${project.title} preview`}
            label={project.title}
            loading="lazy"
            className="rounded-none"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent"
          aria-hidden
        />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-rose-200/80">
            {project.category}
          </p>
          <h3 className="mt-1 font-display text-lg font-bold tracking-tight text-mist sm:text-xl">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-dim">{project.status}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.purpose || project.summary}</p>
        {project.contribution ? (
          <p className="mt-3 text-sm leading-relaxed text-dim">
            <span className="font-medium text-muted">My role: </span>
            {project.contribution}
          </p>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 6).map((t) => (
            <span
              key={t}
              className="rounded-lg border border-rose-500/15 bg-rose-950/25 px-2.5 py-1 text-xs font-medium text-rose-100/85"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-line/80 pt-5">
          {hasCaseStudy && onOpenCaseStudy ? (
            <Button type="button" variant="primary" onClick={() => onOpenCaseStudy(project)}>
              View Project
            </Button>
          ) : null}
          {hasGithub ? (
            <Button as="a" href={project.githubUrl} variant="secondary" target="_blank" rel="noreferrer">
              Source Code
            </Button>
          ) : null}
          {hasDemo ? (
            <Button as="a" href={project.demoUrl} variant="ghost" target="_blank" rel="noreferrer">
              Live Demo
            </Button>
          ) : null}
        </div>
      </div>
    </Card>
  )
}
