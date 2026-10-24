import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRootRoute, createRoute, createRouter, Outlet, RouterProvider } from '@tanstack/react-router'
import { HomePage } from './pages/HomePage'
import { TenantMenuPage } from './pages/TenantMenuPage'
import { TenantQrPage } from './pages/TenantQrPage'
import { TenantSectionPage } from './pages/TenantSectionPage'
import { NotFoundPage } from './pages/NotFoundPage'
import './styles.css'

const rootRoute = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: NotFoundPage,
})

const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: HomePage })
const tenantMenuRoute = createRoute({ getParentRoute: () => rootRoute, path: '/$slug', component: TenantMenuPage })
const tenantQrRoute = createRoute({ getParentRoute: () => rootRoute, path: '/$slug/qr', component: TenantQrPage })
const tenantMenuSectionRoute = createRoute({ getParentRoute: () => rootRoute, path: '/$slug/menu', component: () => <TenantSectionPage section="menu" /> })
const tenantStoryRoute = createRoute({ getParentRoute: () => rootRoute, path: '/$slug/cerita', component: () => <TenantSectionPage section="cerita" /> })
const tenantLocationRoute = createRoute({ getParentRoute: () => rootRoute, path: '/$slug/lokasi', component: () => <TenantSectionPage section="lokasi" /> })

const router = createRouter({
  routeTree: rootRoute.addChildren([homeRoute, tenantMenuRoute, tenantQrRoute, tenantMenuSectionRoute, tenantStoryRoute, tenantLocationRoute]),
  scrollRestoration: true,
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register { router: typeof router }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><RouterProvider router={router} /></React.StrictMode>,
)
