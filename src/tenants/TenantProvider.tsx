import { createContext, useContext, useEffect, type CSSProperties, type ReactNode } from 'react'
import type { Tenant } from './types'

const TenantContext = createContext<Tenant | null>(null)

export function TenantProvider({ tenant, children }: { tenant: Tenant; children: ReactNode }) {
  const primary = tenant.theme?.primary ?? '#1A1A1A'
  const accent = tenant.theme?.accent ?? '#C8863A'
  const background = tenant.theme?.background ?? '#F5EBDD'
  const headingFont = tenant.theme?.headingFont ?? "'Oswald', sans-serif"
  const themeStyle = {
    '--ink': primary,
    '--cream': background,
    '--page-bg': background,
    '--caramel': accent,
    '--accent': accent,
    '--cup-alt': '#9B604B',
    '--brown': primary,
    '--heading-font': headingFont,
  } as CSSProperties

  useEffect(() => {
    document.title = `${tenant.name} — ${tenant.tagline}`
    const description = `${tenant.name}. ${tenant.tagline}. Lihat menu dan pesan langsung.`
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.append(meta)
    }
    meta.content = description

    let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
    if (!ogTitle) {
      ogTitle = document.createElement('meta')
      ogTitle.setAttribute('property', 'og:title')
      document.head.append(ogTitle)
    }
    ogTitle.content = document.title

    let ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
    if (!ogDescription) {
      ogDescription = document.createElement('meta')
      ogDescription.setAttribute('property', 'og:description')
      document.head.append(ogDescription)
    }
    ogDescription.content = description
  }, [tenant])

  return <TenantContext.Provider value={tenant}><div className="tenant-app" data-tenant={tenant.slug} style={themeStyle}>{children}</div></TenantContext.Provider>
}

export function useTenant(): Tenant {
  const tenant = useContext(TenantContext)
  if (!tenant) throw new Error('useTenant harus digunakan di dalam TenantProvider')
  return tenant
}
