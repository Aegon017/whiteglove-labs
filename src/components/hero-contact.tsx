"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import SectionLayout from "./section-layout"

export function HeroContact() {
  return (
    <section className="relative isolate overflow-hidden bg-foreground h-dvh">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[url('/people-walking-in-lobby--overhead-view.png')] bg-cover bg-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-foreground/95 via-foreground/90 to-foreground/80"
      />
      <SectionLayout id="hero" className="py-24 sm:py-44">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="text-background space-y-6">
            <p className="text-sm font-semibold tracking-wider text-primary-foreground/80">
              Whiteglove Labs
            </p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl drop-shadow-md">
              Finding Visionary Tech Leaders
            </h1>
            <p className="text-lg text-muted-foreground/95 max-w-lg">
              For Next-Gen Start Ups, GCCS and Enterprises
            </p>
            <p className="text-base leading-relaxed text-muted-foreground/90 max-w-2xl">
              We redefine talent strategy by partnering with founders and leaders to build
              repeatable, fair, and data-backed hiring systems across leadership, technology,
              and global capability centres.
            </p>
          </div>
          <Card className="w-full border border-border bg-background/80">
            <CardHeader className="border-border border-b">
              <CardTitle className="text-xl font-bold tracking-tight text-card-foreground">
                Together, we’ll shape a solution built just for you.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </SectionLayout>
    </section>
  )
}