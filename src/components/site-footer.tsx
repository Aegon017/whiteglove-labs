import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-primary" aria-hidden />
              <span className="font-semibold">Whiteglove Labs</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Structured interviews, calibrated feedback, and confident decisions.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Explore</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/services" className="hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-foreground">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-foreground">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link className="hover:text-foreground" to="/about-us">
                  About
                </Link>
              </li>
              <li>
                <a className="hover:text-foreground" href="#" aria-disabled>
                  Careers
                </a>
              </li>
              <li>
                <Link className="hover:text-foreground" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a className="hover:text-foreground" href="#" aria-disabled>
                  Privacy
                </a>
              </li>
              <li>
                <a className="hover:text-foreground" href="#" aria-disabled>
                  Terms
                </a>
              </li>
              <li>
                <a className="hover:text-foreground" href="#" aria-disabled>
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 border-t pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Whiteglove Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
