









import { Route as rootRouteImport } from './routes/__root'
import { Route as TestimonialsRouteImport } from './routes/testimonials'
import { Route as GccStartupsRouteImport } from './routes/gcc-startups'
import { Route as ExecutiveSearchRouteImport } from './routes/executive-search'
import { Route as ContactRouteImport } from './routes/contact'
import { Route as AboutUsRouteImport } from './routes/about-us'
import { Route as IndexRouteImport } from './routes/index'
import { Route as OurApproachIndexRouteImport } from './routes/our-approach/index'
import { Route as OurApproachTalentStrategyRouteImport } from './routes/our-approach/talent-strategy'
import { Route as OurApproachTalentRetentionRouteImport } from './routes/our-approach/talent-retention'
import { Route as OurApproachTalentExperienceRouteImport } from './routes/our-approach/talent-experience'
import { Route as OurApproachTalentBrandingRouteImport } from './routes/our-approach/talent-branding'

const TestimonialsRoute = TestimonialsRouteImport.update({
  id: '/testimonials',
  path: '/testimonials',
  getParentRoute: () => rootRouteImport,
} as any)
const GccStartupsRoute = GccStartupsRouteImport.update({
  id: '/gcc-startups',
  path: '/gcc-startups',
  getParentRoute: () => rootRouteImport,
} as any)
const ExecutiveSearchRoute = ExecutiveSearchRouteImport.update({
  id: '/executive-search',
  path: '/executive-search',
  getParentRoute: () => rootRouteImport,
} as any)
const ContactRoute = ContactRouteImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRouteImport,
} as any)
const AboutUsRoute = AboutUsRouteImport.update({
  id: '/about-us',
  path: '/about-us',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const OurApproachIndexRoute = OurApproachIndexRouteImport.update({
  id: '/our-approach/',
  path: '/our-approach/',
  getParentRoute: () => rootRouteImport,
} as any)
const OurApproachTalentStrategyRoute =
  OurApproachTalentStrategyRouteImport.update({
    id: '/our-approach/talent-strategy',
    path: '/our-approach/talent-strategy',
    getParentRoute: () => rootRouteImport,
  } as any)
const OurApproachTalentRetentionRoute =
  OurApproachTalentRetentionRouteImport.update({
    id: '/our-approach/talent-retention',
    path: '/our-approach/talent-retention',
    getParentRoute: () => rootRouteImport,
  } as any)
const OurApproachTalentExperienceRoute =
  OurApproachTalentExperienceRouteImport.update({
    id: '/our-approach/talent-experience',
    path: '/our-approach/talent-experience',
    getParentRoute: () => rootRouteImport,
  } as any)
const OurApproachTalentBrandingRoute =
  OurApproachTalentBrandingRouteImport.update({
    id: '/our-approach/talent-branding',
    path: '/our-approach/talent-branding',
    getParentRoute: () => rootRouteImport,
  } as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about-us': typeof AboutUsRoute
  '/contact': typeof ContactRoute
  '/executive-search': typeof ExecutiveSearchRoute
  '/gcc-startups': typeof GccStartupsRoute
  '/testimonials': typeof TestimonialsRoute
  '/our-approach/talent-branding': typeof OurApproachTalentBrandingRoute
  '/our-approach/talent-experience': typeof OurApproachTalentExperienceRoute
  '/our-approach/talent-retention': typeof OurApproachTalentRetentionRoute
  '/our-approach/talent-strategy': typeof OurApproachTalentStrategyRoute
  '/our-approach': typeof OurApproachIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about-us': typeof AboutUsRoute
  '/contact': typeof ContactRoute
  '/executive-search': typeof ExecutiveSearchRoute
  '/gcc-startups': typeof GccStartupsRoute
  '/testimonials': typeof TestimonialsRoute
  '/our-approach/talent-branding': typeof OurApproachTalentBrandingRoute
  '/our-approach/talent-experience': typeof OurApproachTalentExperienceRoute
  '/our-approach/talent-retention': typeof OurApproachTalentRetentionRoute
  '/our-approach/talent-strategy': typeof OurApproachTalentStrategyRoute
  '/our-approach': typeof OurApproachIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about-us': typeof AboutUsRoute
  '/contact': typeof ContactRoute
  '/executive-search': typeof ExecutiveSearchRoute
  '/gcc-startups': typeof GccStartupsRoute
  '/testimonials': typeof TestimonialsRoute
  '/our-approach/talent-branding': typeof OurApproachTalentBrandingRoute
  '/our-approach/talent-experience': typeof OurApproachTalentExperienceRoute
  '/our-approach/talent-retention': typeof OurApproachTalentRetentionRoute
  '/our-approach/talent-strategy': typeof OurApproachTalentStrategyRoute
  '/our-approach/': typeof OurApproachIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about-us'
    | '/contact'
    | '/executive-search'
    | '/gcc-startups'
    | '/testimonials'
    | '/our-approach/talent-branding'
    | '/our-approach/talent-experience'
    | '/our-approach/talent-retention'
    | '/our-approach/talent-strategy'
    | '/our-approach'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about-us'
    | '/contact'
    | '/executive-search'
    | '/gcc-startups'
    | '/testimonials'
    | '/our-approach/talent-branding'
    | '/our-approach/talent-experience'
    | '/our-approach/talent-retention'
    | '/our-approach/talent-strategy'
    | '/our-approach'
  id:
    | '__root__'
    | '/'
    | '/about-us'
    | '/contact'
    | '/executive-search'
    | '/gcc-startups'
    | '/testimonials'
    | '/our-approach/talent-branding'
    | '/our-approach/talent-experience'
    | '/our-approach/talent-retention'
    | '/our-approach/talent-strategy'
    | '/our-approach/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutUsRoute: typeof AboutUsRoute
  ContactRoute: typeof ContactRoute
  ExecutiveSearchRoute: typeof ExecutiveSearchRoute
  GccStartupsRoute: typeof GccStartupsRoute
  TestimonialsRoute: typeof TestimonialsRoute
  OurApproachTalentBrandingRoute: typeof OurApproachTalentBrandingRoute
  OurApproachTalentExperienceRoute: typeof OurApproachTalentExperienceRoute
  OurApproachTalentRetentionRoute: typeof OurApproachTalentRetentionRoute
  OurApproachTalentStrategyRoute: typeof OurApproachTalentStrategyRoute
  OurApproachIndexRoute: typeof OurApproachIndexRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/testimonials': {
      id: '/testimonials'
      path: '/testimonials'
      fullPath: '/testimonials'
      preLoaderRoute: typeof TestimonialsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/gcc-startups': {
      id: '/gcc-startups'
      path: '/gcc-startups'
      fullPath: '/gcc-startups'
      preLoaderRoute: typeof GccStartupsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/executive-search': {
      id: '/executive-search'
      path: '/executive-search'
      fullPath: '/executive-search'
      preLoaderRoute: typeof ExecutiveSearchRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/about-us': {
      id: '/about-us'
      path: '/about-us'
      fullPath: '/about-us'
      preLoaderRoute: typeof AboutUsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/our-approach/': {
      id: '/our-approach/'
      path: '/our-approach'
      fullPath: '/our-approach'
      preLoaderRoute: typeof OurApproachIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/our-approach/talent-strategy': {
      id: '/our-approach/talent-strategy'
      path: '/our-approach/talent-strategy'
      fullPath: '/our-approach/talent-strategy'
      preLoaderRoute: typeof OurApproachTalentStrategyRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/our-approach/talent-retention': {
      id: '/our-approach/talent-retention'
      path: '/our-approach/talent-retention'
      fullPath: '/our-approach/talent-retention'
      preLoaderRoute: typeof OurApproachTalentRetentionRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/our-approach/talent-experience': {
      id: '/our-approach/talent-experience'
      path: '/our-approach/talent-experience'
      fullPath: '/our-approach/talent-experience'
      preLoaderRoute: typeof OurApproachTalentExperienceRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/our-approach/talent-branding': {
      id: '/our-approach/talent-branding'
      path: '/our-approach/talent-branding'
      fullPath: '/our-approach/talent-branding'
      preLoaderRoute: typeof OurApproachTalentBrandingRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutUsRoute: AboutUsRoute,
  ContactRoute: ContactRoute,
  ExecutiveSearchRoute: ExecutiveSearchRoute,
  GccStartupsRoute: GccStartupsRoute,
  TestimonialsRoute: TestimonialsRoute,
  OurApproachTalentBrandingRoute: OurApproachTalentBrandingRoute,
  OurApproachTalentExperienceRoute: OurApproachTalentExperienceRoute,
  OurApproachTalentRetentionRoute: OurApproachTalentRetentionRoute,
  OurApproachTalentStrategyRoute: OurApproachTalentStrategyRoute,
  OurApproachIndexRoute: OurApproachIndexRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
