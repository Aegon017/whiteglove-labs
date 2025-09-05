import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { CheckCircle, Search, Users, Handshake } from "lucide-react"
import SectionLayout from "@/components/section-layout"
import SectionHero from "./section-hero"

const steps = [
  {
    title: "Break Through Session",
    description: "Deep dive into your needs and challenges",
    icon: CheckCircle,
    iconBg: "bg-background",
    color: "bg-background",
    bg: "bg-accent/10",
    iconColor: "text-foreground",
    borderColor: "border-border",
  },
  {
    title: "Strategic Qualified Search",
    description: "Targeted search for the perfect candidates",
    icon: Search,
    iconBg: "bg-background",
    color: "bg-background",
    bg: "bg-accent/10",
    iconColor: "text-foreground",
    borderColor: "border-border",
  },
  {
    title: "Assessments & Selection",
    description: "Comprehensive evaluation and screening",
    icon: Users,
    iconBg: "bg-background",
    color: "bg-background",
    bg: "bg-accent/10",
    iconColor: "text-foreground",
    borderColor: "border-border",
  },
  {
    title: "Offer & Onboarding",
    description: "Seamless integration into your team",
    icon: Handshake,
    iconBg: "bg-background",
    color: "bg-background",
    bg: "bg-accent/10",
    iconColor: "text-foreground",
    borderColor: "border-border",
  },
]


export default function OurApproachPath() {
  return (
    <SectionLayout
      id="our-approach-path"
      className="bg-muted"
    >
      <SectionHero
        heading="Our Approach"
        subHeading="A Structured Path to Identify and Secure Exceptional Leadership Talent"
        brief="We combine in-depth organizational understanding, targeted candidate search, and rigorous assessment to deliver leaders who drive growth, culture, and innovation. Every step is transparent, collaborative, and tailored to your business goals."
      />
      <div className="relative z-10 mt-8">
        <div className="hidden lg:block relative">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 400" fill="none">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#000" stopOpacity="0.3" />
                <stop offset="25%" stopColor="#000" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#000" stopOpacity="0.3" />
                <stop offset="75%" stopColor="#000" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#000" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 100 200 Q 300 100 500 200 Q 700 300 900 200"
              stroke="url(#pathGradient)"
              strokeWidth="4"
              fill="none"
              strokeDasharray="10,5"
              initial={ { pathLength: 0 } }
              animate={ { pathLength: 1 } }
              transition={ { duration: 2, delay: 0.5 } }
            />
          </svg>

          {/* Floating Cards */ }
          <div className="relative grid grid-cols-4 gap-8 px-16">
            { steps.map( ( step, index ) => {
              const Icon = step.icon
              const yOffset = index % 2 === 0 ? 0 : 40

              return (
                <motion.div
                  key={ index }
                  initial={ { opacity: 0, y: 50, scale: 0.8 } }
                  animate={ { opacity: 1, y: yOffset, scale: 1 } }
                  transition={ {
                    duration: 0.8,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  } }
                  whileHover={ {
                    y: yOffset - 10,
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  } }
                  className="relative group"
                >
                  <Card
                    className={ `relative overflow-hidden border-2 ${ step.borderColor } bg-gradient-to-br ${ step.color } backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-opacity-60` }
                  >
                    <CardContent className="p-8 text-center relative">
                      {/* Floating Icon */ }
                      <motion.div
                        whileHover={ { rotate: 360 } }
                        transition={ { duration: 0.6 } }
                        className={ `relative mx-auto mb-6 w-20 h-20 ${ step.iconBg } rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300` }
                      >
                        <Icon className={ `w-8 h-8 ${ step.iconColor }` } />
                      </motion.div>

                      <h3 className="font-bold text-lg mb-3 text-slate-800 text-balance group-hover:text-slate-900 transition-colors">
                        { step.title }
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed text-balance group-hover:text-slate-700 transition-colors">
                        { step.description }
                      </p>

                      {/* Subtle glow effect */ }
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                    </CardContent>
                  </Card>

                  {/* Floating particles */ }
                  <motion.div
                    animate={ {
                      y: [ 0, -10, 0 ],
                      opacity: [ 0.3, 0.6, 0.3 ],
                    } }
                    transition={ {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5,
                    } }
                    className={ `absolute -top-4 -right-4 w-3 h-3 ${ step.iconBg } rounded-full blur-sm` }
                  />
                </motion.div>
              )
            } ) }
          </div>
        </div>

        {/* Mobile Layout - Vertical Flow */ }
        <div className="lg:hidden space-y-8">
          { steps.map( ( step, index ) => {
            const Icon = step.icon
            return (
              <motion.div
                key={ index }
                initial={ { opacity: 0, x: index % 2 === 0 ? -50 : 50 } }
                animate={ { opacity: 1, x: 0 } }
                transition={ { duration: 0.6, delay: index * 0.15 } }
                className={ `relative ${ index % 2 === 0 ? "mr-8" : "ml-8" }` }
              >
                <Card
                  className={ `border-2 ${ step.borderColor } bg-gradient-to-br ${ step.color } shadow-lg hover:shadow-xl transition-all duration-300` }
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={ `relative flex-shrink-0 w-16 h-16 ${ step.iconBg } rounded-xl flex items-center justify-center shadow-md` }
                      >
                        <Icon className={ `w-6 h-6 ${ step.iconColor }` } />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-base mb-2 text-slate-800">{ step.title }</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{ step.description }</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Mobile connector */ }
                { index < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <motion.div
                      initial={ { scaleY: 0 } }
                      animate={ { scaleY: 1 } }
                      transition={ { duration: 0.5, delay: index * 0.15 + 0.3 } }
                      className="w-px h-8 bg-gradient-to-b from-slate-300 to-slate-400"
                    />
                  </div>
                ) }
              </motion.div>
            )
          } ) }
        </div>
      </div>
    </SectionLayout>
  )
}