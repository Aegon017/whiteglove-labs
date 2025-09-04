import { createFileRoute } from "@tanstack/react-router"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

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

      <section className="py-20 sm:py-28">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            
            <div className="lg:pr-12">
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
                Send us a message
              </h2>
              <ContactForm />
            </div>

            
            <ContactInfo />
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
          <div className="overflow-hidden rounded-lg border border-border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0000000000000!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={ { border: 0 } }
              loading="lazy"
              aria-hidden="false"
              tabIndex={ 0 }
              title="Whiteglove Labs Location"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </main>
  )
}