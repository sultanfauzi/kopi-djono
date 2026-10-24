import { useParams } from '@tanstack/react-router'
import { getTenant } from '../tenants'
import { TenantProvider } from '../tenants/TenantProvider'
import { NotFoundPage } from './NotFoundPage'
import { QrPage } from './QrPage'

export function TenantQrPage() {
  const { slug } = useParams({ strict: false }) as { slug: string }
  const tenant = getTenant(slug)
  if (!tenant) return <NotFoundPage />
  return <TenantProvider tenant={tenant}><QrPage /></TenantProvider>
}
