import { Card, CardContent } from "./ui/card"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  company?: string
  rating: number
  featured?: boolean
}

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
  variant?: "default" | "featured" | "minimal"
  className?: string
}

export function TestimonialCard( {
  testimonial,
  index,
  variant = "default",
  className = ""
}: TestimonialCardProps ) {
  // Render star ratings if provided
  const renderStars = () => {
    if ( !testimonial.rating ) return null

    return (
      <div className="flex items-center mt-2">
        { [ ...Array( 5 ) ].map( ( _, i ) => (
          <svg
            key={ i }
            className={ `w-4 h-4 ${ i < testimonial.rating ? "text-primary fill-current" : "text-muted-foreground" }` }
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ) ) }
      </div>
    )
  }

  // Variant-based styling
  const cardClasses = {
    default: "border-border bg-card",
    featured: "border-primary/30 bg-primary/5",
    minimal: "border-border bg-transparent shadow-none"
  }

  const contentClasses = {
    default: "p-6",
    featured: "p-6",
    minimal: "p-4"
  }

  return (
    <motion.div
      initial={ { opacity: 0, y: 20 } }
      whileInView={ { opacity: 1, y: 0 } }
      whileHover={ variant !== "minimal" ? { y: -5 } : {} }
      transition={ { duration: 0.3, delay: index * 0.1 } }
      viewport={ { once: true } }
      className={ `h-full ${ className }` }
    >
      <Card
        className={ `h-full overflow-hidden transition-all ${ cardClasses[ variant ] } ${ variant !== "minimal" ? "hover:shadow-md" : ""
          }` }
      >
        <CardContent className={ `h-full flex flex-col ${ contentClasses[ variant ] }` }>
          <div className="flex justify-between items-start mb-4">
            <Quote className={ `h-6 w-6 ${ variant === "featured" ? "text-primary" : "text-primary/70"
              }` } />

            { testimonial.featured && variant !== "minimal" && (
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                Featured
              </span>
            ) }
          </div>

          <p className={ `flex-1 leading-relaxed ${ variant === "featured" ? "text-card-foreground font-medium" : "text-card-foreground"
            }` }>
            "{ testimonial.quote }"
          </p>

          { renderStars() }

          <div className={ `mt-6 pt-4 ${ variant === "minimal" ? "border-border/50" : "border-border"
            } border-t` }>
            <p className="font-medium text-card-foreground">{ testimonial.author }</p>
            <p className="text-xs text-muted-foreground">
              { testimonial.role }
              { testimonial.company && `, ${ testimonial.company }` }
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}