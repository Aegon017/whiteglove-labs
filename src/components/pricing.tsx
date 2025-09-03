import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    features: ["Up to 3 roles", "Basic rubrics", "Email support"],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Team",
    price: "$39",
    period: "per user / mo",
    features: ["Unlimited roles", "Calibration & scorecards", "AI summaries", "Priority support"],
    cta: "Start 14-day trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact sales",
    features: ["SSO/SAML", "Admin controls", "Security reviews", "Dedicated CSM"],
    cta: "Contact sales",
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-xl text-center">
          <h2 id="pricing-heading" className="text-balance text-2xl font-semibold md:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-muted-foreground">Choose a plan that grows with your team.</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {tiers.map((t) => (
            <Card key={t.name} className={t.highlight ? "border-blue-600" : ""}>
              <CardHeader>
                <CardTitle className="flex items-baseline justify-between">
                  <span>{t.name}</span>
                  {t.highlight && (
                    <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs text-white">Most popular</span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-semibold">{t.price}</span>
                  <span className="text-sm text-muted-foreground">{t.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${t.highlight ? "bg-blue-600 hover:bg-blue-700 text-white" : ""}`}>
                  {t.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
