import { createFileRoute, Link } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { motion } from 'framer-motion'
import { Search, Eye, Users } from 'lucide-react'

export const Route = createFileRoute( '/about-us' )( {
  component: AboutUs,
} )

function AboutUs() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Accents */ }
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-24 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />

      <section
        id="main-content"
        className="container mx-auto px-4 py-16 sm:py-24 max-w-6xl relative z-10"
      >
        {/* Header */ }
        <div className="mb-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground relative inline-block">
            About Us
            <Separator className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-primary to-secondary" />
          </h1>
        </div>

        {/* Intro Section */ }
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text */ }
          <div className="space-y-6 text-muted-foreground leading-relaxed text-[16px]">
            <p>
              <span className='ml-8'></span>Optimizing tech leadership consulting and executive search is a
              delicate task. The decisions made by executives significantly
              influence both their own success and the organization’s
              performance and reputation. Pursuing the right hiring strategy is
              essential for fostering strong relationships between leaders and
              companies.
            </p>
            <p>
              <strong>Whiteglove Labs</strong> excels in setting up Global Capability Centres
              (GCCs) in India, with decades of expertise in recruiting for
              leadership roles in technology, AI, ML, and Data Science. Our
              executive search services are designed to your needs, delivering
              top leadership talent and great potential while offering a white
              glove experience throughout the journey for both employer and
              candidate.
            </p>
            <p>
              With over two decades of experience in recruiting for technology
              talent for management and leadership roles, we offer a
              consultative approach to meet your hiring needs with accuracy,
              speed and quality. Explore our comprehensive talent management
              solutions, crafted to optimize compensation, culture, and
              performance while aligning with global benchmarks.
            </p>
          </div>
          {/* Image */ }
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

        {/* Features */ }
        <div className="grid gap-8 md:grid-cols-3 mb-20">
          { [
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
          ].map( ( item ) => (
            <Card
              key={ item.title }
              className="h-full transition hover:shadow-xl border bg-card/80 backdrop-blur"
            >
              <CardHeader className="flex flex-row items-center gap-3 pb-3">
                <div className="p-3 rounded-lg bg-muted flex items-center justify-center">
                  <item.icon className={ `h-6 w-6 ${ item.color }` } />
                </div>
                <CardTitle className="text-xl">{ item.title }</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-[16px]">{ item.desc }</p>
              </CardContent>
            </Card>
          ) ) }
        </div>

        {/* Stats */ }
        <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-10 mb-20 text-primary-foreground shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            { [
              { value: '20+', label: 'Years Experience' },
              { value: '500+', label: 'Leadership Placements' },
              { value: '98%', label: 'Retention Rate' },
              { value: '50+', label: 'GCCs Established' },
            ].map( ( stat ) => (
              <div key={ stat.label } className="space-y-1">
                <div className="text-4xl font-bold">{ stat.value }</div>
                <div className="text-sm opacity-90">{ stat.label }</div>
              </div>
            ) ) }
          </div>
        </div>

        {/* CTA */ }
        <div className="text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Ready to transform your leadership hiring?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8 rounded-full">
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 rounded-full"
            >
              <Link to="/contact">Talk to Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}