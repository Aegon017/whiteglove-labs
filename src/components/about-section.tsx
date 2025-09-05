"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "@tanstack/react-router"
import SectionHero from "./section-hero"
import SectionLayout from "./section-layout"

export function AboutSection() {
  return (
    <SectionLayout id="about-us" className="bg-background">
        <motion.div
          initial={ { opacity: 0, y: 30 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true } }
          transition={ { duration: 0.7, ease: "easeOut" } }
        >
          <SectionHero heading="Who We Are" subHeading="About Whiteglove Labs" brief="" />
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Whiteglove Labs is a premier talent strategy partner that helps
            organizations build high-performing teams through innovative
            recruitment solutions and leadership development programs.
            Our <span className="font-semibold text-foreground">
              data-driven approach</span> and deep industry expertise enable us
            to deliver <span className="font-semibold text-foreground">
              exceptional results</span> for our clients.
          </p>


          <Button asChild className="mt-10 group bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/about-us">
              Learn more about us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
    </SectionLayout>
  )
}