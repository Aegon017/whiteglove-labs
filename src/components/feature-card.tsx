import type React from "react" // Import React to declare JSX

type Props = {
  title: string
  description: string
  icon?: "user-check" | "globe" | "workflow" | "compass" | "clipboard" | "megaphone"
}

const iconMap: Record<NonNullable<Props["icon"]>, React.JSX.Element> = {
  "user-check": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" />
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="m17 11 2 2 4-4" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  globe: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  workflow: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="15" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="9" y="15" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <path d="M9 6h6M6 9v6M18 9v6" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  compass: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="m14 10-4 2-2 4 4-2 2-4Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  clipboard: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="7" y="3" width="10" height="4" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="5" y="7" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 11h8M8 15h8" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  megaphone: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 11v2a4 4 0 0 0 4 4h1" stroke="currentColor" strokeWidth="2" />
      <path d="M14 8v8l7 4V4l-7 4Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
}

export function FeatureCard({ title, description, icon = "workflow" }: Props) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-700">
        {iconMap[icon]}
      </div>
      <h3 className="mt-3 font-semibold text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{description}</p>
    </div>
  )
}
