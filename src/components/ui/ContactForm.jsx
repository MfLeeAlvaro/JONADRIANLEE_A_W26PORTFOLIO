import { useState } from 'react'
import { Button } from './Button'

const field =
  'mt-2 w-full rounded-xl border border-line bg-void/60 px-4 py-3 text-mist placeholder:text-dim shadow-inner shadow-black/20 transition focus:border-rose-500/40 focus:outline-none focus:ring-2 focus:ring-rose-500/20'

/**
 * Demo form UI — connect EmailJS / Formspree / backend when ready.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-left text-sm font-medium text-muted">
          Name
          <input required type="text" name="name" className={field} placeholder="Your name" autoComplete="name" />
        </label>
        <label className="block text-left text-sm font-medium text-muted">
          Email
          <input
            required
            type="email"
            name="email"
            className={field}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>
      </div>
      <label className="block text-left text-sm font-medium text-muted">
        Message
        <textarea
          required
          name="message"
          rows={4}
          className={field}
          placeholder="Say hello — this demo doesn’t send mail until you wire a handler."
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" variant="primary">
          Send message
        </Button>
        {sent ? (
          <p className="text-sm text-rose-200/90">Noted — hook this form to a service to deliver messages.</p>
        ) : null}
      </div>
    </form>
  )
}
