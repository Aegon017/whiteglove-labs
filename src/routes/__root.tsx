import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { createRootRoute, Outlet } from '@tanstack/react-router'

const RootLayout = () => (
    <>
        <SiteHeader />
        <Outlet />
        <SiteFooter />
    </>
)

export const Route = createRootRoute( { component: RootLayout } )