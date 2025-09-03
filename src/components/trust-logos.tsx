export function TrustLogos() {
  const logos = Array.from({ length: 6 }).map((_, i) => i)
  return (
    <section aria-labelledby="trusted-by" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <h2 id="trusted-by" className="text-center text-sm text-muted-foreground">
          Trusted by hiring teams at
        </h2>
        <div className="mt-6 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((i) => (
            <div key={i} className="flex items-center justify-center">
              <img
                src={`/generic-logo.png?height=40&width=120&query=logo ${i + 1}`}
                alt={`Company logo ${i + 1}`}
                className="h-8 opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
