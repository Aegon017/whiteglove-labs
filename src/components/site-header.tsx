"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Link } from "@tanstack/react-router"

const nav = [
  { href: "/about-us", label: "About Us" },
  { href: "/executive-search", label: "Executive Search" },
  { href: "/our-approach", label: "Our Approach" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-md border border-border bg-background/80 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Link to="/" aria-label="Go to homepage">
            <img src="/black-logo.png" alt="whiteglovelabs-logo" className="max-w-52 h-auto"/>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((i) => (
              <Link key={i.href} to={i.href} className="text-sm text-muted-foreground hover:text-foreground">
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="hidden gap-2 md:flex">
            <Button className="bg-primary text-primary-foreground hover:opacity-90" asChild>
              <Link to="/contact">Book a call</Link>
            </Button>
          </div>

          <button
            className="inline-flex items-center justify-center rounded md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-md border border-border bg-background/90 p-3 md:hidden">
            <nav className="flex flex-col gap-2">
              {nav.map((i) => (
                <Link
                  key={i.href}
                  to={i.href}
                  className="rounded px-2 py-2 text-sm text-muted-foreground hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {i.label}
                </Link>
              ))}
              <Button className="mt-2 w-full bg-primary text-primary-foreground hover:opacity-90" asChild>
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Get in touch
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
