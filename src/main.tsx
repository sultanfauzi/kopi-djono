import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRootRoute, createRoute, createRouter, Outlet, RouterProvider } from '@tanstack/react-router'
import App from './App'
import { QrPage } from './pages/QrPage'
import './styles.css'

const rootRoute = createRootRoute({ component: () => <Outlet /> })
const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: App })
const qrRoute = createRoute({ getParentRoute: () => rootRoute, path: '/qr', component: QrPage })
const routeTree = rootRoute.addChildren([homeRoute, qrRoute])
const router = createRouter({ routeTree, scrollRestoration: true, defaultPreload: 'intent' })
declare module '@tanstack/react-router' { interface Register { router: typeof router } }

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><RouterProvider router={router} /></React.StrictMode>)
