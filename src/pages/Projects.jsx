import { useState } from 'react'
import { PageHeader } from '../components/ui/PageHeader'
import { ProjectCard } from '../components/ui/ProjectCard'
import { ProjectCaseStudy } from '../components/ui/ProjectCaseStudy'
import { Reveal } from '../components/ui/Reveal'
import { Seo } from '../components/ui/Seo'
import { projects } from '../data/projects'

export function Projects() {
  const [active, setActive] = useState(null)

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <Seo
        title="Projects"
        description="Web, mobile, game, and capstone projects by Jon Adrian Alvaro — ASP.NET Core, React Native, Java, and Roblox Luau."
      />
      <PageHeader
        eyebrow="Portfolio"
        title="Projects"
        subtitle="Selected work ordered by relevance—full-stack web, mobile, game systems, and academic capstone."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 40}>
            <ProjectCard project={project} onOpenCaseStudy={setActive} />
          </Reveal>
        ))}
      </div>

      <ProjectCaseStudy project={active} onClose={() => setActive(null)} />
    </div>
  )
}
