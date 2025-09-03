import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/our-approach')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/our-approach"!</div>
}
