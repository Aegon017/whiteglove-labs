import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList, Gauge, Scale, Bot } from "lucide-react"

const items = [
  {
    icon: ClipboardList,
    title: "Structured rubrics",
    desc: "Create role-specific rubrics to standardize interviews and capture consistent signals.",
  },
  {
    icon: Scale,
    title: "Calibration & fairness",
    desc: "Normalize ratings across interviewers to reduce bias and improve reliability.",
  },
  {
    icon: Gauge,
    title: "Scorecards that matter",
    desc: "Summarize strengths, risks, and decision signals in one clear scorecard.",
  },
  {
    icon: Bot,
    title: "AI assistance",
    desc: "Generate questions, summarize feedback, and surface themes from interviews.",
  },
]

export function Features() {
  return (
    <section id="features" aria-labelledby="features-heading">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="features-heading" className="text-balance text-2xl font-semibold md:text-4xl">
            Everything you need for consistent, fair interviews
          </h2>
          <p className="mt-3 text-muted-foreground">
            Build rubrics, guide interviewers, and turn unstructured notes into calibrated, comparable evaluations.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Card key={item.title} className="h-full">
              <CardHeader>
                <item.icon className="h-6 w-6 text-blue-600" aria-hidden />
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{item.desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
