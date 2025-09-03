type Props = {
  quote: string
  author: string
  role?: string
}

export function TestimonialCard({ quote, author, role }: Props) {
  return (
    <figure className="rounded-lg border border-zinc-800 bg-zinc-900 p-6 text-white">
      <blockquote className="text-sm leading-relaxed text-zinc-200">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm font-medium text-white">
        {author}
        {role ? <span className="ml-2 font-normal text-zinc-400">— {role}</span> : null}
      </figcaption>
    </figure>
  )
}
