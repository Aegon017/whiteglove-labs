import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute( '/services' )( {
  component: RouteComponent,
} )

const services = [
  {
    title: "Executive Search",
    desc: "Board, C‑suite, and senior leaders. Research pods, structured loops, and comprehensive references.",
  },
  {
    title: "GCC Design & Setup",
    desc: "Location strategy, entity setup, compliance, leadership hiring, and ramp-up plans.",
  },
  {
    title: "Hiring Pods",
    desc: "Embedded sourcers, recruiters, and coordinators to accelerate pipelines and offers.",
  },
  {
    title: "Talent Strategy",
    desc: "Org architecture, headcount planning, comp benchmarks, and talent brand.",
  },
  {
    title: "Assessments",
    desc: "Role scorecards, structured interviews, and enablement to lift hiring signal.",
  },
  {
    title: "Employer Brand",
    desc: "Narrative, content, and campaigns to attract mission-critical talent.",
  },
]

function RouteComponent() {
  return (
    <main className="space-y-16">
      <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md">
        Skip to content
      </a>
      <div id="main-content" className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-pretty text-3xl sm:text-4xl font-semibold tracking-tight">Services</h1>
          <p className="text-lg text-muted-foreground">
            Modular, outcome-driven engagements. Choose what you need, when you need it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="group relative rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md dark:shadow-none dark:hover:shadow-none dark:bg-card/80 dark:hover:bg-card">
              <div className="absolute inset-px z-0 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110 dark:bg-primary/5">
                  <span className="text-base font-semibold">★</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-secondary px-4 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:shadow-none"
                >
                  Enquire
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
