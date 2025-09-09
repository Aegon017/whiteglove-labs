import { createFileRoute } from '@tanstack/react-router'
import { PageHero } from '@/components/page-hero'
import { motion } from 'framer-motion'
import SectionLayout from '@/components/section-layout'

export const Route = createFileRoute( '/about-us' )( {
  component: AboutUs,
} )

function AboutUs() {
  const stats = [
    { value: '20+', label: 'Years Experience' },
    { value: '100+', label: 'Leadership Placements' },
    { value: '98%', label: 'Retention Rate' },
    { value: '50+', label: 'Happy Customers' },
  ]

  return (
    <main className="bg-background min-h-screen">
      <PageHero
        title="About Us"
        subtitle="Learn more about us delivering a whiteglove experience for you, our expertise in executive search, leadership consulting and building high performing teams."
      />
      <SectionLayout id='about-us' className="bg-background">
        <div className='grid lg:grid-cols-2 gap-12'>
          <div className="space-y-6 text-muted-foreground text-[16px] leading-relaxed">
            <p>
              Optimizing tech leadership consulting and executive search is a
              delicate task. The decisions made by executives significantly
              influence both their own success and the organization's
              performance and reputation. Pursuing the right hiring strategy is
              essential for fostering strong relationships between leaders and
              companies.
            </p>
            <p>
              <strong className="text-foreground">Whiteglove Labs</strong> excels in setting up Global Capability Centres
              (GCCs) in India, with decades of expertise in recruiting for
              leadership roles in technology, AI, ML, and Data Science. Our
              executive search services are tailored to your needs, delivering
              top leadership talent while offering a white-glove experience
              throughout the journey for both employer and candidate.
            </p>
            <p>
              With over two decades of experience in recruiting for technology
              talent for management and leadership roles, we offer a
              consultative approach to meet your hiring needs with accuracy,
              speed, and quality. Explore our comprehensive talent management
              solutions crafted to optimize compensation, culture, and
              performance while aligning with global benchmarks.
            </p>
          </div>
          <motion.div
            whileHover={ { y: -6 } }
            className="relative overflow-hidden"
          >
            <img
              src="/about-us.png"
              alt="Whiteglove Labs team"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
      </SectionLayout>
      <SectionLayout id='stats' className="bg-muted">
        <div className="rounded-lg bg-primary p-10 text-primary-foreground shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            { stats.map( ( stat ) => (
              <div key={ stat.label } className="space-y-1">
                <div className="text-4xl font-bold">{ stat.value }</div>
                <div className="text-sm opacity-90">{ stat.label }</div>
              </div>
            ) ) }
          </div>
        </div>
      </SectionLayout>
    </main>
  )
}