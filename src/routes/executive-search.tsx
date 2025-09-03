import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/executive-search')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/executive-search"!</div>
}