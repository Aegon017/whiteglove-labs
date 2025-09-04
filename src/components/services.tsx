"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const services = [
  {
    n: "01.",
    t: "Executive Search",
    d: "Targeted leadership searches with structured rubrics and calibrated decision signals.",
    full: `We specialize in identifying and recruiting top-tier executive talent that aligns with your organization's vision and culture. Our data-driven approach ensures we find leaders who drive innovation and growth.`,
  },
  {
    n: "02.",
    t: "Global Capability Centers",
    d: "Stand up high-leverage GCCs with clarity on scope, capability maps, and governance.",
    full: `Our GCC solutions help organizations establish and optimize global capability centers with clear operational frameworks and governance models for seamless integration and maximum impact.`,
  },
  {
    n: "03.",
    t: "Talent Strategy",
    d: "Org design, role charters, scorecards, and interview systems that scale.",
    full: `We develop comprehensive talent strategies that encompass organizational design, role clarity, performance metrics, and scalable hiring processes to support your business objectives.`,
  },
  {
    n: "04.",
    t: "Talent Branding & PR",
    d: "Build credible talent narratives and operating norms that attract the right people.",
    full: `We craft authentic employer value propositions and talent narratives that resonate with your target candidates, enhancing your ability to attract and retain top talent in competitive markets.`,
  },
  {
    n: "05.",
    t: "Talent Experience & Retention",
    d: "Design whiteglove experiences for candidates and strengthen engagement & growth.",
    full: `Our talent experience solutions create seamless, engaging journeys for candidates and employees, fostering long-term engagement and reducing turnover through meaningful career development.`,
  },
]

export function Services() {
  const [ selectedService, setSelectedService ] = useState<number | null>( null )

  return (
    <section id="services" className="relative bg-background py-20 md:py-24">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Comprehensive Talent Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer end-to-end talent solutions designed to help your organization thrive in today's competitive landscape.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          { services.map( ( service, index ) => (
            <motion.div
              key={ service.n }
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              whileHover={ { y: -4 } }
              initial={ { opacity: 0, y: 20 } }
              whileInView={ { opacity: 1, y: 0 } }
              viewport={ { once: true } }
              transition={ { duration: 0.3, delay: index * 0.1 } }
              onClick={ () => setSelectedService( index ) }
            >
              <span className="text-sm font-medium text-primary">
                { service.n }
              </span>
              <h3 className="mt-3 text-xl font-semibold text-card-foreground">
                { service.t }
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                { service.d }
              </p>

              <Dialog open={ selectedService === index } onOpenChange={ ( open ) => !open && setSelectedService( null ) }>
                <DialogTrigger asChild>
                  <button className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl bg-background border-border">
                  <DialogHeader>
                    <span className="text-sm font-medium text-primary">
                      { service.n }
                    </span>
                    <DialogTitle className="text-2xl font-bold text-foreground">
                      { service.t }
                    </DialogTitle>
                  </DialogHeader>
                  <div className="text-muted-foreground">
                    <p className="leading-relaxed">{ service.full }</p>
                    <div className="mt-6">
                      <Button
                        variant="outline"
                        className="border-border text-foreground hover:bg-accent hover:text-accent-foreground"
                        onClick={ () => setSelectedService( null ) }
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ) ) }
        </div>
      </div>
    </section>
  )
}