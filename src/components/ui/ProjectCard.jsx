import { Card } from './Card'
import { PlaceholderImage } from './PlaceholderImage'
import { Button } from './Button'

export function ProjectCard({ project }) {
  return (
    <Card
      hover
      className="group flex h-full flex-col overflow-hidden p-0 ring-1 ring-inset ring-line/60 transition-[box-shadow] duration-500 hover:ring-rose-900/40"
    >
      <div className="relative overflow-hidden">
        <div className="transition duration-700 ease-out group-hover:scale-[1.03]">
          <PlaceholderImage
            src={project.image}
            alt={project.title}
            label={`Visual: ${project.title}`}
            className="rounded-none"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent opacity-90"
          aria-hidden
        />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-display text-lg font-bold tracking-tight text-mist drop-shadow-md sm:text-xl">{project.title}</h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full border border-rose-500/15 bg-rose-950/25 px-3 py-1 text-xs font-medium text-rose-100/85"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3 border-t border-line/80 pt-5">
          <Button as="a" href={project.githubUrl} variant="secondary" target="_blank" rel="noreferrer">
            GitHub
          </Button>
          <Button as="a" href={project.demoUrl} variant="ghost" target="_blank" rel="noreferrer">
            Demo
          </Button>
        </div>
      </div>
    </Card>
  )
}
