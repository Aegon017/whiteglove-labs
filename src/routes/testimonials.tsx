import { createFileRoute } from '@tanstack/react-router';

const testimonials = [
  {
    quote:
      "They moved our hiring velocity from weeks to days, without compromising quality. Clear process and outcomes.",
    author: "Priya Desai",
    role: "VP People, FintechCo",
  },
  {
    quote: "The GCC setup was surgical—compliant, fast, and well-led. We were shipping within the first quarter.",
    author: "Martin Lopez",
    role: "COO, Global SaaS",
  },
  {
    quote: "Exec search done right. Thorough research, strong shortlist, and a hire who changed our trajectory.",
    author: "Sarah Chen",
    role: "Founder & CEO, HealthTech",
  },
  {
    quote: "Hiring pods gave us leverage at exactly the right moments—pipeline, coordination, and close.",
    author: "Daniel Kim",
    role: "Head of Talent, LogisticsAI",
  },
];

function RouteComponent() {
  return (
    <main className="bg-muted">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-2xl">
          <h1 className="text-pretty text-3xl sm:text-4xl font-semibold">Client Outcomes</h1>
          <p className="mt-3 text-muted-foreground">
            Results that compound—faster hiring, stronger teams, and accountable delivery.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.author} className="rounded-lg border bg-card p-6">
              <blockquote className="text-sm leading-relaxed text-muted-foreground">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium">
                {t.author}
                <span className="ml-2 font-normal text-muted-foreground">— {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}

export const Route = createFileRoute('/testimonials')({
  component: RouteComponent,
});
