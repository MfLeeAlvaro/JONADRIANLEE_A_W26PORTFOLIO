import { Card } from './Card'
import { PlaceholderImage } from './PlaceholderImage'
import { Button } from './Button'

export function ProjectCard({ project }) {
  return (
    <Card hover className="flex h-full flex-col overflow-hidden p-0">
      <PlaceholderImage
        src={project.image}
        alt={project.title}
        label={`Screenshot: ${project.title}`}
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-800 dark:bg-sky-950/50 dark:text-sky-200"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-100 pt-4 dark:border-slate-700">
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
