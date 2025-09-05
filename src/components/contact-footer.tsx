"use client"

import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import SectionHero from "./section-hero"
import SectionLayout from "./section-layout"

export function ContactFooter() {
  return (
    <SectionLayout id="contact" className="bg-muted">
      <SectionHero heading="Get in Touch" subHeading="Ready to Transform Your Talent Strategy?" brief="Let's discuss how we can help you build high-performing teams and drive business growth." />
      <div className="grid gap-12 md:grid-cols-2 py-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </SectionLayout>
  )
}