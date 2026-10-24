import { useParams } from '@tanstack/react-router'
import { getTenant } from '../tenants'
import { TenantProvider } from '../tenants/TenantProvider'
import { NotFoundPage } from './NotFoundPage'
import App from '../App'

export function TenantMenuPage() {
  const { slug } = useParams({ strict: false }) as { slug: string }
  const tenant = getTenant(slug)
  if (!tenant) return <NotFoundPage />
  return <TenantProvider tenant={tenant}><App /></TenantProvider>
}
