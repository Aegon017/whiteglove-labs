"use client"

import { createFileRoute } from "@tanstack/react-router"
import { PageHero } from "@/components/page-hero"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, BarChart3, Award } from "lucide-react"

export const Route = createFileRoute( "/our-approach/" )( {
    component: OurApproachPage,
} )

function OurApproachPage() {
    const talentSpectrum = [
        {
            title: "Talent Strategy",
            desc: "Unlock the full potential of your workforce with tailored Talent Strategy services. We design data-driven solutions to attract, retain, and develop top talent, aligning your people strategy with business goals.",
            icon: Target,
        },
        {
            title: "Talent Branding & Attraction",
            desc: "Strengthen and elevate your employer brand by defining your unique identity. Shape EVP, enhance candidate journey, and showcase culture, diversity, and inclusion.",
            icon: Users,
        },
        {
            title: "Talent Experience",
            desc: "Build an engagement model for candidates and interviewers to deliver a whiteglove experience. Reinvent interviews, maintain consistent communication, personalize journey, and provide proactive feedback.",
            icon: BarChart3,
        },
        {
            title: "Talent Retention",
            desc: "Strengthen employee engagement, optimize compensation, career growth, recognition, and future-proof your leadership pipeline.",
            icon: Award,
        },
    ]

    return (
        <main className="bg-background min-h-screen">
            <PageHero
                title="Our Approach"
                subtitle="Comprehensive, transparent, and customized executive search for leadership talent."
            />

            
            <section className="py-20 sm:py-28">
                <div className="container mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                    
                    <motion.div
                        initial={ { opacity: 0, x: -20 } }
                        animate={ { opacity: 1, x: 0 } }
                        transition={ { duration: 0.7 } }
                        className="space-y-6 text-muted-foreground text-[16px] leading-relaxed"
                    >
                        <p>
                            We collaborate with you to identify non-negotiables for the hire and formulate a strategy to enhance the hiring process while organizing a comprehensive exploration into organizational needs, scope of the role, etc., to deliver the best leadership hire for you.
                        </p>
                        <p>
                            We activate our current talent pool while simultaneously identifying high-performing leaders who have strong technology, business acumen, are a culture fit, and understand growing and scaling organizations and talent within them.
                        </p>
                        <p>
                            Before the assessment begins, a detailed document outlining expectations, values, competencies, etc., is shared with candidates, who are then coached for the assessment ahead. We engage in round tables to help you calibrate expectations and outcomes and provide support during offer discussions and continuous engagement.
                        </p>
                        <p>
                            We take a deep dive into your organization's culture, strategy, and long-term goals to identify leaders who align with your vision. Every candidate is rigorously evaluated—not just for experience and skills, but also for leadership style, cultural alignment, and strategic outlook. We design tailored onboarding programs to accelerate integration and early success.
                        </p>
                        <p>
                            Beyond placements, we are committed to future-proofing your leadership pipeline. Diversity is embedded in every search, enriching organizations with fresh perspectives and driving innovation.
                        </p>
                    </motion.div>

                    
                    <motion.div
                        initial={ { opacity: 0, x: 20 } }
                        animate={ { opacity: 1, x: 0 } }
                        transition={ { duration: 0.7 } }
                        className="relative rounded-lg overflow-hidden border border-border shadow-lg"
                    >
                        <img
                            src="/our-approach.png"
                            alt="Our Approach Illustration"
                            className="w-full h-auto object-cover object-center"
                        />
                    </motion.div>
                </div>
            </section>

            
            <section className="py-20 sm:py-28 bg-muted/30">
                <div className="container mx-auto max-w-7xl px-4 lg:px-8 space-y-12">
                    <h2 className="text-3xl font-semibold text-center text-foreground mb-12">
                        Talent Spectrum
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        { talentSpectrum.map( ( item, i ) => (
                            <Card
                                key={ i }
                                className="h-full border-border bg-card shadow-sm hover:shadow-md transition"
                            >
                                <CardHeader className="flex items-center gap-3 pb-3">
                                    <div className="p-3 rounded-lg bg-accent flex items-center justify-center">
                                        <item.icon className="h-6 w-6 text-accent-foreground" />
                                    </div>
                                    <CardTitle className="text-lg text-card-foreground">{ item.title }</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-[15px]">{ item.desc }</p>
                                </CardContent>
                            </Card>
                        ) ) }
                    </div>
                </div>
            </section>
        </main>
    )
}