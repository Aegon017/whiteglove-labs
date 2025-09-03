import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Quote } from "lucide-react"

const quotes = [
  {
    q: "Scorecards made our loops consistent and fast. The decision meetings are now 80% shorter.",
    a: "Siddharth D.",
    r: "Founder-CEO, FinTech",
  },
  {
    q: "Calibrated ratings cut bias and improved close rates materially across engineering.",
    a: "Rupesh V.",
    r: "Head of HR, Scale-up",
  },
  {
    q: "We stood up a GCC in weeks with crisp charters and interview systems that actually work.",
    a: "Karthik N.",
    r: "Co-founder, Infra",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-semibold text-white md:text-4xl">Teams trust the clarity</h2>
          <p className="mt-3 text-zinc-400">Real results from leaders and talent teams.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {quotes.map((t, i) => (
            <Card key={i} className="border-white/10 bg-zinc-900">
              <CardHeader className="flex flex-row items-start gap-2">
                <Quote className="h-5 w-5 text-red-600" aria-hidden />
                <p className="text-sm leading-relaxed text-zinc-200">“{t.q}”</p>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="font-medium text-white">{t.a}</p>
                <p className="text-xs text-zinc-400">{t.r}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
