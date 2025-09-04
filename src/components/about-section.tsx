"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "@tanstack/react-router"

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden bg-background">
      
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/5 via-background to-background"
      />

      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center"
            initial={ { opacity: 0, y: 30 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true } }
            transition={ { duration: 0.7, ease: "easeOut" } }
          >
            
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              About Whiteglove Labs
            </h2>
            <div className="mt-5 h-1 w-20 mx-auto rounded-full bg-primary" />

            
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
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
        </div>
      </div>

      
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
    </section>
  )
}