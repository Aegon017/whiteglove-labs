import { Link } from "@tanstack/react-router"
import { Linkedin, Twitter, Mail } from "lucide-react"

export function SiteFooter() {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/whiteglove-labs", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/whiteglove-labs", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@whiteglove-labs.com", label: "Email" },
  ]

  const exploreLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/executive-search", label: "Executive Search" },
    { href: "/our-approach", label: "Our Approach" },
    { href: "/gcc-startups", label: "Global Capability Center & Startups" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-3">

          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-semibold">Whiteglove Labs</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Structured interviews, calibrated feedback, and confident decisions.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 space-y-3">
              { exploreLinks.map( ( item ) => (
                <li key={ item.href }>
                  <Link
                    to={ item.href }
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    { item.label }
                  </Link>
                </li>
              ) ) }
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <div className="mt-4 flex gap-3">
              { socialLinks.map( ( item ) => (
                <a
                  key={ item.label }
                  href={ item.href }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ item.label }
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ) ) }
            </div>
          </div>
        </div>


        <div className="border-t border-border">
          <div className="flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; { new Date().getFullYear() } Whiteglove Labs. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}