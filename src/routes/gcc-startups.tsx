"use client"

import { createFileRoute, Link } from "@tanstack/react-router"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Users, Target, BarChart3, Briefcase, CheckSquare } from "lucide-react"
import React from "react"

export const Route = createFileRoute( "/gcc-startups" )( {
  component: GCCStartupsPage,
} )

function GCCStartupsPage() {
  const sections = [
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Discovery",
      desc: "Partner closely with clients to capture detailed requirements by conducting cross-functional design workshops that bring together diverse teams, including HR, IT Infrastructure, office facility design & planning, and more. Leveraging our deep knowledge of GCC operations, we also provide tailored support to your legal team during the legal entity formation process.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Consulting & Advisory",
      desc: "Deliver specialized guidance for setting up the GCC model, ensuring the adoption of industry best practices and refining design strategies to achieve optimal outcomes.",
    },
    {
      icon: <CheckSquare className="h-6 w-6 text-primary" />,
      title: "GCC Operational Excellence",
      desc: "Create the GCC Playbook, a detailed roadmap that captures critical decisions, provides a step-by-step action checklist, and establishes a clear, organized project plan.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Talent Acquisition & Intelligence",
      desc: "Perform an in-depth evaluation of the current talent ecosystem, including a review of global outsourcing collaborations. Craft a tailored hiring strategy that aligns with your organizational goals and enhances your employee value proposition.",
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Legal Entity Setup",
      desc: "Facilitate the seamless establishment of the appropriate legal entity and secure requisite regulatory approvals with the support of our expert counsel on Global Capability Center (GCC) solutions.",
    },
  ]

  return (
    <main className="bg-background min-h-screen">
      <PageHero
        title="Global Capability Centre & Startups"
        subtitle="Mastering Global Growth: Your Seamless Journey to Establishing and Expanding Capability Centers while achieving Worldwide Success with our Specialized Expertise in GCCs & Indigenous Startups."
      />

      {/* Intro Section */ }
      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-muted-foreground text-[16px] leading-relaxed">
            <p>
              We partner with you to establish Global Capability Centres and startups, combining strategic guidance, operational excellence, and talent intelligence to accelerate growth and ensure sustainable success.
            </p>
            <p>
              From discovery to legal setup, we provide end-to-end advisory, creating a seamless journey for organizations seeking global expansion and operational efficiency.
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
              src="/global_capability_centre_and_startups.png"
              alt="GCC & Startups"
              className="w-full h-[420px] object-cover object-center"
            />
          </motion.div>
        </div>
      </section>

      {/* Sections */ }
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          { sections.map( ( sec, i ) => (
            <motion.div
              key={ i }
              initial={ { opacity: 0, y: 20 } }
              whileInView={ { opacity: 1, y: 0 } }
              transition={ { duration: 0.5, delay: i * 0.2 } }
              viewport={ { once: true } }
            >
              <Card className="h-full border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex items-center gap-3 pb-3">
                  <div className="p-3 rounded-lg bg-accent flex items-center justify-center">
                    { React.cloneElement( sec.icon, { className: "h-6 w-6 text-accent-foreground" } ) }
                  </div>
                  <CardTitle className="text-lg text-card-foreground">{ sec.title }</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-[16px]">{ sec.desc }</p>
                </CardContent>
              </Card>
            </motion.div>
          ) ) }
        </div>
      </section>
    </main>
  )
}