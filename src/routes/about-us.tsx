import { createFileRoute, Link } from '@tanstack/react-router'
import { PageHero } from '@/components/page-hero'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Search, Eye, Users } from 'lucide-react'

export const Route = createFileRoute( '/about-us' )( {
  component: AboutUs,
} )

function AboutUs() {
  const features = [
    {
      title: 'Research-Led Approach',
      desc: 'Our methodology combines deep market intelligence with targeted outreach to identify and engage the right leadership talent.',
      icon: Search,
      color: 'text-primary',
    },
    {
      title: 'Transparent Process',
      desc: 'We maintain clear communication through regular reporting and shared insights, ensuring complete visibility throughout the search.',
      icon: Eye,
      color: 'text-primary',
    },
    {
      title: 'Integrated Partnership',
      desc: 'We seamlessly integrate with your team and workflows, functioning as an extension of your organization to achieve unified goals.',
      icon: Users,
      color: 'text-primary',
    },
  ]

  const stats = [
    { value: '20+', label: 'Years Experience' },
    { value: '500+', label: 'Leadership Placements' },
    { value: '98%', label: 'Retention Rate' },
    { value: '50+', label: 'GCCs Established' },
  ]

  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */ }
      <PageHero
        title="About Us"
        subtitle="Learn more about our expertise in executive search, leadership consulting, and building high-performing teams."
      />

      {/* Company Intro */ }
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */ }
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

          {/* Image */ }
          <motion.div
            whileHover={ { y: -6 } }
            className="relative rounded-lg overflow-hidden shadow-lg border border-border"
          >
            <img
              src="https://whiteglovelabs.io/Images/image5.webp"
              alt="Whiteglove Labs team"
              className="w-full h-[420px] object-cover object-center"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */ }
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
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
        </div>
      </section>

      {/* Features Section */ }
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-3xl font-semibold text-foreground mb-12 text-center">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            { features.map( ( item ) => (
              <Card key={ item.title } className="h-full transition hover:shadow-md border-border bg-card">
                <CardHeader className="flex items-center gap-3 pb-3">
                  <div className="p-3 rounded-lg bg-accent flex items-center justify-center">
                    <item.icon className={ `h-6 w-6 text-accent-foreground` } />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{ item.title }</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-[16px]">{ item.desc }</p>
                </CardContent>
              </Card>
            ) ) }
          </div>
        </div>
      </section>
    </main>
  )
}