import { cn } from "@/lib/utils"
import type * as React from "react"

export function Section({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn("mx-auto max-w-6xl px-4 sm:px-6", className)}>{children}</div>
}
