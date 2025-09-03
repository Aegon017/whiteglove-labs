import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main>
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-2xl">
          <h1 className="text-pretty text-3xl sm:text-4xl font-semibold">Contact</h1>
          <p className="mt-3 text-muted-foreground">Tell us about your goals—we’ll respond within one business day.</p>
        </div>

        <form
          className="mt-8 grid gap-4 rounded-lg border bg-card p-6"
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="h-10 rounded-md border bg-input px-3 outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Your name"
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="email" className="text-sm font-medium">
                Work email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="h-10 rounded-md border bg-input px-3 outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="grid gap-1.5">
            <label htmlFor="company" className="text-sm font-medium">
              Company
            </label>
            <input
              id="company"
              name="company"
              className="h-10 rounded-md border bg-input px-3 outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Company name"
            />
          </div>

          <div className="grid gap-1.5">
            <label htmlFor="message" className="text-sm font-medium">
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="rounded-md border bg-input px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Share your goals, timeline, and any context."
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">We’ll never share your information.</p>
            <Button type="submit" className="bg-primary text-primary-foreground hover:opacity-90">
              Send message
            </Button>
          </div>

          {submitted && (
            <p role="status" className="text-sm text-secondary">
              Thanks! We’ll be in touch shortly.
            </p>
          )}
        </form>
      </section>
    </main>
  )
}