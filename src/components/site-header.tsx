"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/about-us", label: "About Us" },
  { href: "/executive-search", label: "Executive Search" },
  {
    label: "Our Approach",
    dropdown: [
      { href: "/our-approach/talent-strategy", label: "Talent Strategy" },
      { href: "/our-approach/talent-branding", label: "Talent Branding & Attraction" },
      { href: "/our-approach/talent-experience", label: "Talent Experience" },
      { href: "/our-approach/talent-retention", label: "Talent Retention" },
    ],
  },
  { href: "/gcc-startups", label: "Global Capability Center & Startups" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [ mobileDropdownOpen, setMobileDropdownOpen ] = useState<string | null>( null )

  return (
    <header className="fixed inset-x-0 lg:top-2 z-50">
      <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4 lg:px-6 bg-background/80 backdrop-blur-md shadow-sm lg:rounded-lg">
        
        <Link to="/" className="flex items-center gap-2">
          <img src="/black-logo.png" alt="Whiteglove Labs" className="h-8 w-auto dark:invert" />
        </Link>

        
        <nav className="hidden md:flex md:items-center md:gap-8 relative">
          { nav.map( ( item ) =>
            item.dropdown ? (
              <DropdownMenu key={ item.label }>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    { item.label } <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-52 bg-popover text-popover-foreground border-border">
                  { item.dropdown.map( ( sub ) => (
                    <DropdownMenuItem key={ sub.href } asChild className="focus:bg-accent focus:text-accent-foreground">
                      <Link to={ sub.href } className="cursor-pointer">
                        { sub.label }
                      </Link>
                    </DropdownMenuItem>
                  ) ) }
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={ item.href }
                to={ item.href }
                className={ cn(
                  "relative text-sm font-medium transition-colors",
                  "text-foreground hover:text-primary"
                ) }
                activeProps={ {
                  className:
                    "text-primary after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-primary after:rounded-full",
                } }
              >
                { item.label }
              </Link>
            )
          ) }
        </nav>

        
        <div className="hidden md:block">
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact">Book a Call</Link>
          </Button>
        </div>

        
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground md:hidden transition-colors"
              aria-label="Toggle navigation"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-md bg-background text-foreground border-l border-border">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b border-border p-4">
                <Link to="/" onClick={ () => document.dispatchEvent( new KeyboardEvent( 'keydown', { key: 'Escape' } ) ) }>
                  <img src="/black-logo.png" alt="Whiteglove Labs" className="h-8 w-auto dark:invert" />
                </Link>
              </div>

              <nav className="flex-1 py-6 space-y-2">
                { nav.map( ( item ) =>
                  item.dropdown ? (
                    <div key={ item.label } className="space-y-1">
                      <button
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-foreground rounded-md hover:bg-accent hover:text-accent-foreground"
                        onClick={ () => setMobileDropdownOpen(
                          mobileDropdownOpen === item.label ? null : item.label
                        ) }
                      >
                        { item.label }
                        <ChevronDown
                          className={ cn(
                            "h-4 w-4 transition-transform",
                            mobileDropdownOpen === item.label ? "rotate-180" : ""
                          ) }
                        />
                      </button>
                      { mobileDropdownOpen === item.label && (
                        <div className="pl-4 space-y-1">
                          { item.dropdown.map( ( sub ) => (
                            <SheetTrigger key={ sub.href } asChild>
                              <Link
                                to={ sub.href }
                                className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                              >
                                { sub.label }
                              </Link>
                            </SheetTrigger>
                          ) ) }
                        </div>
                      ) }
                    </div>
                  ) : (
                    <SheetTrigger key={ item.href } asChild>
                      <Link
                        to={ item.href }
                        className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        activeProps={ { className: "bg-primary text-primary-foreground font-semibold" } }
                      >
                        { item.label }
                      </Link>
                    </SheetTrigger>
                  )
                ) }
              </nav>

              <div className="border-t border-border pt-4">
                <SheetTrigger asChild>
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="sm">
                    <Link to="/contact">Book a Call</Link>
                  </Button>
                </SheetTrigger>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}