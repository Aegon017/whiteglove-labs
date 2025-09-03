"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ContactFooter() {
  return (
    <footer id="contact" className="border-t">
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-10 px-4 py-12 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-widest text-zinc-500">Contact us</p>
          <h3 className="mt-1 text-lg font-semibold">Reach out with any questions or inquiries</h3>

          <form
            className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault()
              alert("Submitted (demo)")
            }}
          >
            <div className="space-y-1">
              <Label htmlFor="cfname">First name</Label>
              <Input id="cfname" name="first" placeholder="Jane" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="clname">Last name</Label>
              <Input id="clname" name="last" placeholder="Doe" />
            </div>
            <div className="space-y-1 sm:col-span-2">
              <Label htmlFor="cemail">Email</Label>
              <Input id="cemail" type="email" name="email" placeholder="jane@company.com" />
            </div>
            <div className="space-y-1 sm:col-span-2">
              <Label htmlFor="cmsg">Message</Label>
              <Textarea id="cmsg" name="message" placeholder="How can we help?" className="min-h-28" />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" className="bg-red-600 text-white hover:bg-red-700">
                Send message
              </Button>
            </div>
          </form>
        </div>

        <address className="not-italic text-sm text-zinc-600">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-red-600" aria-hidden />
            <span className="font-semibold text-zinc-900">TalentForge Advisors</span>
          </div>
          <p className="mt-3">Address</p>
          <p className="text-zinc-500">
            123 Residency Road,
            <br />
            Business District,
            <br />
            Bengaluru, KA 560001
            <br />
            India
          </p>
          <p className="mt-3 text-zinc-500">contact@talentforge.co</p>
          <p className="sr-only">
            Colors: primary red-600; neutrals white, zinc-900, zinc-100; accent zinc-500 (5 total).
          </p>
        </address>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} TalentForge Advisors. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
