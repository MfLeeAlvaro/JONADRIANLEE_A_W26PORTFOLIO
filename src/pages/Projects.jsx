import { SectionHeading } from '../components/ui/SectionHeading'
import { ProjectCard } from '../components/ui/ProjectCard'
import { Reveal } from '../components/ui/Reveal'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Academic work"
        title="Projects & samples"
        subtitle="Four substantive builds—mobile, full-stack inventory, Java AI game logic, and Roblox—with stack, role, and outcomes."
      />
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 70}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
