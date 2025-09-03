const steps = [
  {
    number: "1",
    title: "Define the rubric",
    desc: "Pick competencies, behaviors, and rating anchors for the role.",
  },
  {
    number: "2",
    title: "Guide interviewers",
    desc: "Share structured prompts and capture notes the same way every time.",
  },
  {
    number: "3",
    title: "Calibrate feedback",
    desc: "Normalize ratings across interviewers and teams to reduce variance.",
  },
  {
    number: "4",
    title: "Decide with confidence",
    desc: "Get a clear, comparable scorecard that highlights strengths and risks.",
  },
]

export function Steps() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="border-y bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-xl text-center">
          <h2 id="how-heading" className="text-balance text-2xl font-semibold md:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-muted-foreground">
            A simple, repeatable process that improves with every interview you run.
          </p>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.number} className="rounded-lg border bg-card p-6">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                {s.number}
              </div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
