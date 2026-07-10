import { useEffect, useId, useRef } from 'react'
import { Button } from './Button'
import { PlaceholderImage } from './PlaceholderImage'

function isValidUrl(url) {
  return typeof url === 'string' && url.length > 1 && url !== '#'
}

export function ProjectCaseStudy({ project, onClose }) {
  const titleId = useId()
  const closeRef = useRef(null)
  const caseStudy = project?.caseStudy

  useEffect(() => {
    if (!project) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  if (!project || !caseStudy) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-void/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-line bg-surface shadow-2xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-line/60 px-5 py-4 sm:px-6">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-rose-300/80">
              Case study · {project.category}
            </p>
            <h2 id={titleId} className="mt-1 font-display text-xl font-bold text-mist sm:text-2xl">
              {project.title}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-xl border border-line px-3 py-2 text-sm text-muted transition hover:bg-panel hover:text-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400/80"
            aria-label="Close case study"
          >
            Close
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-6 sm:px-6">
          <section className="space-y-3">
            <h3 className="font-display text-base font-bold text-mist">Overview</h3>
            <p className="max-w-prose text-sm leading-relaxed text-muted">{caseStudy.overview}</p>
          </section>

          <section className="mt-8 space-y-3">
            <h3 className="font-display text-base font-bold text-mist">Problem / goal</h3>
            <p className="max-w-prose text-sm leading-relaxed text-muted">{caseStudy.problem}</p>
          </section>

          <section className="mt-8 space-y-3">
            <h3 className="font-display text-base font-bold text-mist">My responsibilities</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-rose-600/50">
              {caseStudy.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>

          <section className="mt-8 space-y-3">
            <h3 className="font-display text-base font-bold text-mist">Technologies and architecture</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-line bg-void/50 px-2.5 py-1 text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="max-w-prose text-sm leading-relaxed text-muted">{caseStudy.architecture}</p>
          </section>

          <section className="mt-8 space-y-3">
            <h3 className="font-display text-base font-bold text-mist">Important features</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-rose-600/50">
              {caseStudy.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>

          <section className="mt-8 space-y-4">
            <h3 className="font-display text-base font-bold text-mist">Challenges and solutions</h3>
            {caseStudy.challenges.map((c) => (
              <div key={c.challenge} className="rounded-xl border border-line/70 bg-void/40 p-4">
                <p className="text-sm font-medium text-mist">{c.challenge}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.solution}</p>
              </div>
            ))}
          </section>

          {project.gallery?.length ? (
            <section className="mt-8 space-y-3">
              <h3 className="font-display text-base font-bold text-mist">Screenshots</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.gallery.map((g) => (
                  <PlaceholderImage key={g.src} src={g.src} alt={g.alt} label={g.alt} className="rounded-xl" />
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-8 space-y-3">
            <h3 className="font-display text-base font-bold text-mist">What I learned</h3>
            <p className="max-w-prose text-sm leading-relaxed text-muted">{caseStudy.learned}</p>
          </section>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-line/60 pt-6">
            {isValidUrl(project.githubUrl) ? (
              <Button as="a" href={project.githubUrl} variant="secondary" target="_blank" rel="noreferrer">
                Source Code
              </Button>
            ) : null}
            {isValidUrl(project.demoUrl) ? (
              <Button as="a" href={project.demoUrl} variant="primary" target="_blank" rel="noreferrer">
                Live Demo
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
