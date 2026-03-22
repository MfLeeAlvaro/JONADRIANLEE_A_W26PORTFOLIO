import { useState } from 'react'
import { Button } from './Button'

/**
 * UI-only contact form for portfolio demonstration.
 * Wire to EmailJS, Formspree, or a backend when you are ready.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
          Name
          <input
            required
            type="text"
            name="name"
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
            placeholder="Your name"
          />
        </label>
        <label className="block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
          Email
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="block text-left text-sm font-medium text-slate-700 dark:text-slate-300">
        Message
        <textarea
          required
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
          placeholder="Brief message — for assignment demo this form does not send email yet."
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" variant="primary">
          Send message (demo)
        </Button>
        {sent ? (
          <p className="text-sm text-emerald-600 dark:text-emerald-400">
            Thanks — this demo captured your click. Connect a form backend to deliver messages.
          </p>
        ) : null}
      </div>
    </form>
  )
}
