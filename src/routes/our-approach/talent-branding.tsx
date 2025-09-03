"use client"

import { createFileRoute } from "@tanstack/react-router"
import { PageHero } from "@/components/page-hero"

export const Route = createFileRoute( "/our-approach/talent-branding" )( {
  component: TalentBrandingPage,
} )

function TalentBrandingPage() {
  const services = [
    "Shape EVP",
    "Enhance candidate journey",
    "Showcase culture, diversity, inclusion and belonging",
  ]

  return (
    <main className="bg-background min-h-screen">
      <PageHero
        title="Talent Branding & Attraction"
        subtitle="Strengthen your employer brand to attract and retain top talent."
      />

      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-4xl px-4 lg:px-8">
          <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
            <div className="space-y-6 text-muted-foreground text-[16px] leading-relaxed">
              <p>
                We help companies define their unique identity to attract and retain top talent. Our services include crafting a strategic talent branding approach and clearly communicating your employee value proposition.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                { services.map( ( s, i ) => (
                  <li key={ i } className="text-card-foreground">{ s }</li>
                ) ) }
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}