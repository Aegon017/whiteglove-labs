"use client"

import { createFileRoute } from "@tanstack/react-router"
import { PageHero } from "@/components/page-hero"
import { motion } from "framer-motion"
import { Users, Target, BarChart3, Briefcase, CheckSquare } from "lucide-react"
import SectionLayout from "@/components/section-layout"
import InfoCard from "@/components/info-card"

export const Route = createFileRoute( "/gcc-startups" )( {
  component: GCCStartupsPage,
} )

function GCCStartupsPage() {
  const sections = [
    {
      icon: Briefcase,
      title: "Discovery",
      desc: "Partner closely with clients to capture detailed requirements by conducting cross-functional design workshops that bring together diverse teams, including HR, IT Infrastructure, office facility design & planning, and more. Leveraging our deep knowledge of GCC operations, we also provide tailored support to your legal team during the legal entity formation process.",
    },
    {
      icon: Users,
      title: "Consulting & Advisory",
      desc: "Deliver specialized guidance for setting up the GCC model, ensuring the adoption of industry best practices and refining design strategies to achieve optimal outcomes.",
    },
    {
      icon: CheckSquare,
      title: "GCC Operational Excellence",
      desc: "Create the GCC Playbook, a detailed roadmap that captures critical decisions, provides a step-by-step action checklist, and establishes a clear, organized project plan.",
    },
    {
      icon: BarChart3,
      title: "Talent Acquisition & Intelligence",
      desc: "Perform an in-depth evaluation of the current talent ecosystem, including a review of global outsourcing collaborations. Craft a tailored hiring strategy that aligns with your organizational goals and enhances your employee value proposition.",
    },
    {
      icon: Target,
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
      <SectionLayout id='gcc-startups' className="bg-background">
        <div className="grid lg:grid-cols-2 gap-12">
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
            className="relative overflow-hidden"
          >
            <img
              src="/global_capability_centre_and_startups.png"
              alt="GCC & Startups"
              className="w-full h-auto object-cover object-center"
            />
          </motion.div>
        </div>
      </SectionLayout>
      <SectionLayout id='gcc-startups-info' className="bg-muted">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          { sections.map( ( sec, i ) => (
            <motion.div
              key={ i }
              initial={ { opacity: 0, y: 20 } }
              whileInView={ { opacity: 1, y: 0 } }
              transition={ { duration: 0.5, delay: i * 0.2 } }
              viewport={ { once: true } }
            >
              <InfoCard icon={ sec.icon } title={ sec.title } description={ sec.desc } />
            </motion.div>
          ) ) }
        </div>
      </SectionLayout>
    </main>
  )
}