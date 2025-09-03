"use client"

import { createFileRoute } from "@tanstack/react-router"
import { PageHero } from "@/components/page-hero"
import { TestimonialCard } from "@/components/testimonial-card"

const testimonials = [
  {
    id: 1,
    quote: "They moved our hiring velocity from weeks to days, without compromising quality. Clear process and outcomes.",
    author: "Priya Desai",
    role: "VP People",
    company: "FintechCo",
    rating: 5
  },
  {
    id: 2,
    quote: "The GCC setup was surgical—compliant, fast, and well-led. We were shipping within the first quarter.",
    author: "Martin Lopez",
    role: "COO",
    company: "Global SaaS",
    rating: 5
  },
  {
    id: 3,
    quote: "Exec search done right. Thorough research, strong shortlist, and a hire who changed our trajectory.",
    author: "Sarah Chen",
    role: "Founder & CEO",
    company: "HealthTech",
    rating: 5
  },
  {
    id: 4,
    quote: "Hiring pods gave us leverage at exactly the right moments—pipeline, coordination, and close.",
    author: "Daniel Kim",
    role: "Head of Talent",
    company: "LogisticsAI",
    rating: 5
  },
]

function TestimonialsPage() {
  return (
    <main className="bg-background min-h-screen">
      <PageHero
        title="Client Outcomes"
        subtitle="Results that compound—faster hiring, stronger teams, and accountable delivery."
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          { testimonials.map( ( testimonial, index ) => (
            <TestimonialCard
              key={ testimonial.id }
              testimonial={ testimonial }
              index={ index }
            />
          ) ) }
        </div>
      </section>
    </main>
  )
}

export const Route = createFileRoute( "/testimonials" )( {
  component: TestimonialsPage,
} )