import { SectionHeading } from '../components/ui/SectionHeading'
import { Card } from '../components/ui/Card'
import { PlaceholderImage } from '../components/ui/PlaceholderImage'
import { biography, interests, personal } from '../data/personal'

export function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="About me"
        title="Biography"
        subtitle="A concise introduction for instructors, mentors, and recruiters reviewing this academic portfolio."
      />
      <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
        <Card className="overflow-hidden p-0">
          <PlaceholderImage
            src={personal.assets.profilePhoto}
            alt={`${personal.name} profile`}
            label="Profile photo — add /public/assets/images/profile-photo.jpg"
            aspect="square"
          />
          <div className="p-5 text-left">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{personal.name}</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{personal.location}</p>
          </div>
        </Card>
        <div className="space-y-6 text-left text-slate-700 dark:text-slate-300">
          {biography.split('\n\n').map((para, i) => (
            <p key={i} className="leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>

      <Card className="mt-12 text-left">
        <h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">Interests</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {interests.map((item) => (
            <li
              key={item}
              className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
