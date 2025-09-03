"use client"

import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export function ContactFooter() {
  return (
    <footer
      id="contact"
      className="relative border-t border-border bg-background text-foreground"
    >
      {/* Subtle background accent */ }
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />

      <div className="container relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Left: Contact Form Section */ }
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Get in Touch
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Transform Your Talent Strategy?
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Let's discuss how we can help you build high-performing teams and drive business growth.
          </p>

          <div className="mt-8 rounded-lg border border-border bg-card p-6 shadow-lg">
            <ContactForm />
          </div>
        </div>

        {/* Right: Contact Info */ }
        <div className="lg:pl-8">
          <ContactInfo />
        </div>
      </div>
    </footer>
  )
}