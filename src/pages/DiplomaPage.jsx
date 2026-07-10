import { PageHeader } from '../components/ui/PageHeader'
import { Button } from '../components/ui/Button'
import { Seo } from '../components/ui/Seo'
import { additionalCredentials } from '../data/education'

export function DiplomaPage() {
  const diploma = additionalCredentials[0]

  if (!diploma) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <PageHeader title="Diploma" subtitle="Diploma file is not available yet." />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <Seo
        title="Diploma"
        description="Ontario College Advanced Diploma in Computer Programming and Analysis — George Brown College."
      />
      <PageHeader
        eyebrow="Documents"
        title="Diploma"
        subtitle={`${diploma.title} · ${diploma.issuer} · ${diploma.year}`}
      />

      <div className="flex flex-wrap gap-3">
        <Button as="a" href={diploma.file} variant="primary" download>
          Download Diploma
        </Button>
        <Button as="a" href={diploma.file} variant="secondary" target="_blank" rel="noreferrer">
          Open Diploma in New Tab
        </Button>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-line/80 bg-panel/50">
        <iframe
          title="Diploma PDF preview"
          src={diploma.file}
          className="h-[70vh] w-full min-h-[420px] bg-void"
        />
      </div>
    </div>
  )
}
