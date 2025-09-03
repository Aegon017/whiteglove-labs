"use client"

import { useState, useEffect } from "react"
import { Testimonial, TestimonialCard } from "./testimonial-card"

// Testimonials Grid Component
interface TestimonialsGridProps {
  testimonials: Testimonial[]
  title?: string
  subtitle?: string
  variant?: "default" | "featured-first" | "minimal"
  columns?: 1 | 2 | 3
  className?: string
}

export function TestimonialsGrid( {
  testimonials,
  title = "Trusted by Industry Leaders",
  subtitle = "Here's what our clients say about working with us to transform their talent strategies.",
  variant = "default",
  columns = 3,
  className = ""
}: TestimonialsGridProps ) {
  const [ featuredTestimonial, setFeaturedTestimonial ] = useState<Testimonial | null>( null )
  const [ regularTestimonials, setRegularTestimonials ] = useState<Testimonial[]>( [] )

  useEffect( () => {
    if ( variant === "featured-first" && testimonials.length > 0 ) {
      const featured = testimonials.find( t => t.featured ) || testimonials[ 0 ]
      setFeaturedTestimonial( featured )
      setRegularTestimonials( testimonials.filter( t => t.id !== featured.id ) )
    } else {
      setRegularTestimonials( testimonials )
    }
  }, [ testimonials, variant ] )

  const gridClasses = {
    1: "grid-cols-1 max-w-2xl",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
  }

  return (
    <section className={ `py-20 md:py-24 ${ className }` }>
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Client Testimonials
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            { title }
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            { subtitle }
          </p>
        </div>

        { variant === "featured-first" && featuredTestimonial && (
          <div className="mb-12">
            <TestimonialCard
              testimonial={ featuredTestimonial }
              index={ 0 }
              variant="featured"
              className="max-w-4xl mx-auto"
            />
          </div>
        ) }

        <div className={ `grid gap-6 ${ gridClasses[ columns ] }` }>
          { regularTestimonials.map( ( testimonial, index ) => (
            <TestimonialCard
              key={ testimonial.id }
              testimonial={ testimonial }
              index={ index }
              variant={ variant === "minimal" ? "minimal" : "default" }
            />
          ) ) }
        </div>
      </div>
    </section>
  )
}

// Usage example with sample data
const sampleTestimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The structured hiring process and scorecards transformed our executive search. We found the perfect CTO in half the expected time.",
    author: "Siddharth D.",
    role: "Founder-CEO",
    company: "FinTech",
    rating: 5,
    featured: true
  },
  {
    id: 2,
    quote: "Their talent strategy framework helped us reduce bias and improve our hiring success rate by 40% across all technical roles.",
    author: "Rupesh V.",
    role: "Head of HR",
    company: "Scale-up",
    rating: 5
  },
  {
    id: 3,
    quote: "We established our GCC in record time with clear governance and talent acquisition strategies that delivered results from day one.",
    author: "Karthik N.",
    role: "Co-founder",
    company: "Infra",
    rating: 4
  },
  {
    id: 4,
    quote: "The employer branding strategy helped us attract 3x more qualified candidates and significantly reduced our time-to-hire.",
    author: "Priya M.",
    role: "Talent Acquisition Lead",
    company: "SaaS",
    rating: 5
  },
  {
    id: 5,
    quote: "Their leadership development programs have been instrumental in reducing our executive turnover by 60% in the first year.",
    author: "Arjun K.",
    role: "CHRO",
    company: "Enterprise",
    rating: 5
  },
  {
    id: 6,
    quote: "The talent assessment framework they implemented helped us make more objective hiring decisions and improved team performance.",
    author: "Neha R.",
    role: "VP Engineering",
    company: "Scale-up",
    rating: 4
  },
]

// Example usage in a page component
export function TestimonialsSection() {
  return (
    <TestimonialsGrid
      testimonials={ sampleTestimonials }
      variant="featured-first"
      columns={ 3 }
      className="bg-muted/30"
    />
  )
}