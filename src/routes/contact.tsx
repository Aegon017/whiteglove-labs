import { createFileRoute } from "@tanstack/react-router"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import SectionLayout from "@/components/section-layout"

export const Route = createFileRoute( "/contact" )( {
  component: ContactPage,
} )

function ContactPage() {
  return (
    <main className="bg-background">
      <PageHero
        title="Get in Touch"
        subtitle="Have questions or want to learn more about our services? We'd love to hear from you."
      />

      <SectionLayout id='contact' className="bg-background">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="lg:pr-12">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
              Send us a message
            </h2>
            <ContactForm />
          </div>
          <ContactInfo />
        </div>
      </SectionLayout>
    </main>
  )
}