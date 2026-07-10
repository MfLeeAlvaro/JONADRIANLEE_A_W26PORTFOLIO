import { PageHeader } from '../components/ui/PageHeader'
import { Button } from '../components/ui/Button'
import { Seo } from '../components/ui/Seo'
import { personal } from '../data/personal'

export function ResumePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <Seo
        title="Resume"
        description="Download or view the resume of Jon Adrian Alvaro — junior software developer and Computer Programming graduate."
      />
      <PageHeader
        eyebrow="Documents"
        title="Resume"
        subtitle="One-page overview of education, employment, and technical skills—ready to download or open in a new tab."
      />

      <div className="flex flex-wrap gap-3">
        <Button as="a" href={personal.assets.resumePdf} variant="primary" download>
          Download Resume
        </Button>
        <Button as="a" href={personal.assets.resumePdf} variant="secondary" target="_blank" rel="noreferrer">
          Open Resume in New Tab
        </Button>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-line/80 bg-panel/50">
        <iframe
          title="Resume PDF preview"
          src={personal.assets.resumePdf}
          className="h-[70vh] w-full min-h-[420px] bg-void"
        />
      </div>
    </div>
  )
}
