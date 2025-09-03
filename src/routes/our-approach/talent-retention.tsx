"use client"

import { createFileRoute } from "@tanstack/react-router"
import { PageHero } from "@/components/page-hero"

export const Route = createFileRoute( "/our-approach/talent-retention" )( {
  component: TalentRetentionPage,
} )

function TalentRetentionPage() {
  const retentionFocus = [
    "Strengthen employee engagement and culture",
    "Compensation and Benefits benchmarking and offering",
    "Career Growth and Development",
    "Recognition and appreciation",
  ]

  return (
    <main className="bg-background min-h-screen">
      <PageHero
        title="Talent Retention"
        subtitle="Ensure your leaders and employees thrive and stay engaged."
      />

      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-4xl px-4 lg:px-8">
          <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
            <div className="space-y-6 text-muted-foreground text-[16px] leading-relaxed">
              <p>
                Our talent retention services help strengthen employee engagement, optimize compensation, and support career development for long-term organizational success.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                { retentionFocus.map( ( f, i ) => (
                  <li key={ i } className="text-card-foreground">{ f }</li>
                ) ) }
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}