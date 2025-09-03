import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "What makes interviews “structured”?",
    a: "Using a consistent rubric, questions, and rating anchors across candidates to reduce variance and bias.",
  },
  {
    q: "Do you support panels and loops?",
    a: "Yes. Assign competencies per interviewer, collect notes consistently, and generate a unified scorecard.",
  },
  {
    q: "Is there an AI feature?",
    a: "AI can suggest questions, summarize feedback, and surface strengths/risks. You stay in control of decisions.",
  },
  {
    q: "Can I try it free?",
    a: "Yes. The Starter plan is free forever for small teams and trials.",
  },
]

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-t">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h2 id="faq-heading" className="text-balance text-center text-2xl font-semibold md:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          Can’t find what you’re looking for? Contact us and we’ll help.
        </p>

        <div className="mt-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
