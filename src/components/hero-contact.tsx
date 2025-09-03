"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function HeroContact() {
  return (
    <section className="relative isolate">
      {/* Background image */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[url('/people-walking-in-lobby--overhead-view.png')] bg-cover bg-center" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/55" />

      <div className="mx-auto max-w-6xl px-4 pt-28 pb-12 md:pb-16">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div className="text-white">
            <p className="text-[10px] uppercase tracking-widest opacity-80">
              Redefining Talent Strategy and Management
            </p>
            <h1 className="mt-2 text-pretty text-3xl font-semibold leading-tight md:text-5xl">
              TalentForge Growth Advisors
            </h1>
            <p className="mt-3 max-w-xl text-zinc-200 md:text-lg">
              A boutique advisory partnering with founders and leaders to build repeatable, fair, and data-backed hiring
              systems across leadership, tech, and global capability centers.
            </p>
          </div>

          <Card className="border-red-600/20 bg-white/95 shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-zinc-700">
                Let’s create a bespoke solution for you
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  alert("Form submitted (demo)")
                }}
              >
                <div className="space-y-1">
                  <Label htmlFor="fname">First name</Label>
                  <Input id="fname" name="fname" placeholder="Jane" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="lname">Last name</Label>
                  <Input id="lname" name="lname" placeholder="Doe" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" name="email" placeholder="jane@company.com" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" placeholder="+1 555 000 1234" />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" className="w-full bg-red-600 text-white hover:bg-red-700">
                    Get in touch
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
