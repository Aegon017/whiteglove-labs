"use client"

import { createFileRoute } from "@tanstack/react-router"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/page-hero"

export const Route = createFileRoute( "/executive-search" )( {
  component: ExecutiveSearchPage,
} )

function ExecutiveSearchPage() {
  const infoCards = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Inclusive Leadership",
      desc: "We build diverse pipelines that fuel innovation and resilience in leadership roles.",
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Strategic Alignment",
      desc: "Leaders who match your company vision, values, and long-term strategic roadmap.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Data-Driven Precision",
      desc: "Market intelligence and analytics ensure the right leadership fit at the right time.",
    },
  ]

  return (
    <main className="bg-background min-h-screen">
      <PageHero
        title="Executive Search"
        subtitle="Connecting your organization with top leadership talent through strategic, data-driven, and inclusive methods."
      />

      
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-muted-foreground text-[16px] leading-relaxed">
            <p>
              Technology is transforming every industry, requiring a clear vision and strategic roadmap for effective utilization. In an era of constant disruption, relying on skilled technologists is more crucial than ever. Building lasting relationships between technology leadership and organizations remains a complex challenge.
            </p>
            <p>
              At <span className="font-semibold text-foreground">Whiteglove Labs</span>, we specialize in aligning your company's long-term vision with the strengths of emerging leaders. By fostering meaningful collaborations and leveraging forward-thinking strategies, we help organizations unlock new opportunities for exponential growth and sustained competitive advantage.
            </p>
            <p>
              Through our <span className="font-semibold text-foreground">data-driven matchmaking</span> and precision talent solutions, we ensure that organizations are connected with the right leadership talent at the right time. By combining market intelligence with advanced insights, we curate high-potential leaders who bring both expertise and fresh perspectives.
            </p>
            <p>
              <span className="font-semibold text-foreground">Diversity lies at the heart</span> of our philosophy — we build inclusive leadership pipelines that empower businesses with innovation, resilience, and a wealth of ideas that fuel long-term success.
            </p>
          </div>
          <motion.div
            initial={ { opacity: 0, x: 30 } }
            whileHover={ { y: -6 } }
            animate={ { opacity: 1, x: 0 } }
            transition={ { duration: 0.7 } }
            className="relative overflow-hidden rounded-lg border border-border shadow-lg"
          >
            <img
              src="/executive-search.png"
              alt="Executive collaboration"
              className="w-full h-[420px] object-cover object-center"
            />
          </motion.div>
        </div>
      </section>

      
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          { infoCards.map( ( card, i ) => (
            <motion.div
              key={ i }
              initial={ { opacity: 0, y: 20 } }
              whileInView={ { opacity: 1, y: 0 } }
              transition={ { duration: 0.5, delay: i * 0.2 } }
              viewport={ { once: true } }
            >
              <Card className="h-full border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-3">{ card.icon }</div>
                  <h3 className="text-lg font-semibold text-card-foreground">{ card.title }</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{ card.desc }</p>
                </CardContent>
              </Card>
            </motion.div>
          ) ) }
        </div>
      </section>
    </main>
  )
}