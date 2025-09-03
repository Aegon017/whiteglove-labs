import { ArrowDownRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="border-t bg-white">
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-widest text-zinc-500">About</p>
          <h2 className="mt-1 text-sm font-semibold">TalentForge Growth Advisors</h2>
          <ArrowDownRight className="mt-6 h-6 w-6 text-red-600" aria-hidden />
        </div>
        <div className="md:col-span-2">
          <p className="text-sm leading-relaxed text-zinc-700">
            TalentForge is a global talent strategy firm specializing in executive search, AI-driven capability centers,
            and leadership assessments. We combine structured interviewing, calibrated feedback, and pragmatic operator
            expertise to help companies hire with confidence and speed.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-700">
            We partner from first principles: define competencies, establish rating anchors, guide interviewers, and
            turn qualitative notes into comparable signals across panels. Integrity, context, and measurable outcomes
            guide every engagement.
          </p>
          <a
            href="#services"
            className="mt-3 inline-block text-xs font-medium text-red-600 underline underline-offset-4"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  )
}
