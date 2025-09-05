import { createFileRoute } from '@tanstack/react-router'
import { HeroContact } from '../components/hero-contact'
import { AboutSection } from '../components/about-section'
import { Services } from '../components/services'
import { ContactFooter } from '../components/contact-footer'
import OurApproachPath from '@/components/our-approach-path'

export const Route = createFileRoute( '/' )( {
  component: Index,
} )

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <HeroContact />
      <AboutSection />
      <OurApproachPath />
      <Services />
      <ContactFooter />
    </main>
  )
}