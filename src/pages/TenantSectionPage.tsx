import { useParams } from '@tanstack/react-router'
import { getTenant } from '../tenants'
import { TenantProvider } from '../tenants/TenantProvider'
import { NotFoundPage } from './NotFoundPage'
import App from '../App'

type Section = 'menu' | 'cerita' | 'lokasi'

export function TenantSectionPage({ section }: { section: Section }) {
  const { slug } = useParams({ strict: false }) as { slug: string }
  const tenant = getTenant(slug)
  if (!tenant) return <NotFoundPage />
  return <TenantProvider tenant={tenant}><App scrollTarget={section} /></TenantProvider>
}
