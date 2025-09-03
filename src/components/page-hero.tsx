"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface PageHeroProps {
    title: string
    subtitle?: string
    className?: string
}

export function PageHero( { title, subtitle, className }: PageHeroProps ) {
    return (
        <section className={ cn( "relative overflow-hidden bg-foreground text-background", className ) }>
            {/* Animated Beam Background */ }
            <motion.div
                initial={ { rotate: -30, opacity: 0 } }
                animate={ { rotate: 15, opacity: 1 } }
                transition={ { duration: 1, ease: "easeOut" } }
                className="absolute inset-0"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/25 via-transparent to-transparent" />
            </motion.div>

            {/* Content */ }
            <div className="container relative mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:px-8">
                <motion.div
                    initial={ { opacity: 0, y: 40 } }
                    animate={ { opacity: 1, y: 0 } }
                    transition={ { duration: 0.8, ease: "easeOut" } }
                    className="max-w-3xl"
                >
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        { title }
                    </h1>
                    { subtitle && (
                        <p className="mt-6 text-lg text-muted-foreground">
                            { subtitle }
                        </p>
                    ) }
                </motion.div>
            </div>
        </section>
    )
}