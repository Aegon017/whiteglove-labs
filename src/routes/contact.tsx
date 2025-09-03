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
            {/* Contact Form */ }
            <div className="lg:pr-12">
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info Component */ }
            <ContactInfo />
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
          <div className="overflow-hidden rounded-lg border border-border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1677878871116!2d-122.40197268468222!3d37.78688277975752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085817f4d4c5d5d%3A0x3b8f2f7b3c6f9b1f!2sTech%20Park%20Ave%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
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