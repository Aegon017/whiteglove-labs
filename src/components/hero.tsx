import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="get-started" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-amber-700 dark:bg-transparent dark:text-amber-400">
              <span className="inline-block h-2 w-2 rounded-full bg-amber-500" aria-hidden />
              New: AI-powered candidate insights
            </div>
            <h1 className="text-pretty text-3xl font-semibold leading-tight md:text-5xl">
              Hire smarter with structured interviews powered by AI
            </h1>
            <p className="mt-4 text-pretty text-muted-foreground md:text-lg">
              Standardize interviews, reduce bias, and make confident hiring decisions. Create rubrics, calibrate
              feedback, and turn interviews into reliable signals.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Start free</Button>
              <Button variant="outline">Book a demo</Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">No credit card required.</p>
          </div>

          <div className="rounded-lg border bg-card p-2 shadow-sm">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-slate-100">
              <img
                src="/dashboard-mock-showing-interview-rubric-and-candid.png"
                alt="Product dashboard preview showing interview rubric and candidate feedback"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950/30"
      />
    </section>
  )
}
