"use client"

import { createFileRoute } from "@tanstack/react-router"
import { PageHero } from "@/components/page-hero"

export const Route = createFileRoute("/our-approach/talent-experience")({
  component: TalentExperiencePage,
})

function TalentExperiencePage() {
  const experiences = [
    "Reinvent interview process",
    "Transparent consistent communication",
    "Personalize candidate journey",
    "Proactive, constructive feedback",
  ]

  return (
    <main className="bg-background min-h-screen">
      <PageHero
        title="Talent Experience"
        subtitle="Deliver a whiteglove experience for candidates and interviewers."
      />

      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-4xl px-4 lg:px-8">
          <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
            <div className="space-y-6 text-muted-foreground text-[16px] leading-relaxed">
              <p>
                We build an engagement and experience model designed to make the hiring process enjoyable, transparent, and professional for all candidates.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                {experiences.map((e, i) => (
                  <li key={i} className="text-card-foreground">{e}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}