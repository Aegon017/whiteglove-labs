"use client"

import { createFileRoute } from "@tanstack/react-router"
import { PageHero } from "@/components/page-hero"

export const Route = createFileRoute( "/our-approach/talent-strategy" )( {
  component: TalentStrategyPage,
} )

function TalentStrategyPage() {
  return (
    <main className="bg-background min-h-screen">
      <PageHero
        title="Talent Strategy"
        subtitle="Unlock the full potential of your workforce with tailored talent solutions."
      />

      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-4xl px-4 lg:px-8">
          <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
            <div className="space-y-6 text-muted-foreground text-[16px] leading-relaxed">
              <p>
                We design data-driven solutions to attract, retain, and develop top talent, aligning your people strategy with business goals.
              </p>
              <p>
                From workforce planning to employer branding, we empower your organization to thrive in a competitive landscape.
              </p>
              <p>
                Let us help you build a future-ready talent ecosystem that drives sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}