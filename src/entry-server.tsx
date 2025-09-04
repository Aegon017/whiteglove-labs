// src/entry-server.tsx
import {
  createRequestHandler,
  defaultRenderToString,
} from '@tanstack/react-router/ssr/server'
import { createRouter } from './router'

export async function render({ request }: { request: Request }) {
  const handler = createRequestHandler({ request, createRouter })

  return await handler(defaultRenderToString)
}