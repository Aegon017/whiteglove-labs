import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section
      id="about"
      className="container mx-auto px-4 py-16 sm:py-24 max-w-6xl"
    >
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground relative inline-block">
          About Us
          <div className="mt-3 h-1 w-24 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full" />
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */ }
        <div className="space-y-6 text-muted-foreground leading-relaxed text-[16px]">
          <p>
            Optimizing tech leadership consulting and executive search is a
            delicate task. The decisions made by executives significantly
            influence both their own success and the organization’s performance
            and reputation. Pursuing the right hiring strategy is essential for
            fostering strong relationships between leaders and companies.
          </p>
          <p>
            Whiteglove Labs excels in setting up Global Capability Centres
            (GCCs) in India, with decades of expertise in recruiting for
            leadership roles in technology, AI, ML, and Data Science. Our
            executive search services are designed to your needs, delivering top
            leadership talent and great potential while offering a white glove
            experience throughout the journey for both employer and candidate.
          </p>
          <p>
            With over two decades of experience in recruiting for technology
            talent for management and leadership roles, we offer a consultative
            approach to meet your hiring needs with accuracy, speed and quality.
            Explore our comprehensive talent management solutions, crafted to
            optimize compensation, culture, and performance while aligning with
            global benchmarks.
          </p>
        </div>

        {/* Image Section */ }
        <motion.div
          whileHover={ { y: -6 } }
          className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border"
        >
          <img
            src="https://whiteglovelabs.io/Images/image5.webp"
            alt="Whiteglove Labs team"
            className="w-full h-[420px] object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  )
}
