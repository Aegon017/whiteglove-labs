const items = [
  {
    n: "01.",
    t: "Executive Search",
    d: "Targeted leadership searches with structured rubrics and calibrated decision signals.",
  },
  {
    n: "02.",
    t: "AI Global Capability Centers",
    d: "Stand up high-leverage GCCs with clarity on scope, capability maps, and governance.",
  },
  {
    n: "03.",
    t: "Talent Strategy",
    d: "Org design, role charters, scorecards, and interview systems that scale.",
  },
  {
    n: "04.",
    t: "Talent Brand & PR",
    d: "Build credible talent narratives and operating norms that attract the right people.",
  },
  {
    n: "05.",
    t: "AI Assist",
    d: "Question generation, note summaries, and risk/strength highlights—humans in control.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-red-600">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-xs uppercase tracking-widest text-red-100">What we can do for you</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {items.map((s) => (
            <div key={s.n} className="rounded-md border border-white/20 bg-white/5 p-5 text-red-50">
              <div className="text-sm opacity-80">{s.n}</div>
              <h3 className="mt-2 text-base font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-red-100">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
