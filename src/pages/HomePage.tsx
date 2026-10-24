import { TenantProvider } from '../tenants/TenantProvider'
import { threeQuarters } from '../tenants/three-quarters'
import App from '../App'

export function HomePage() {
  return <TenantProvider tenant={threeQuarters}><App /></TenantProvider>
}
