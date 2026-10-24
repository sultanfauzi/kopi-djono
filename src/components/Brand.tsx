import { useTenant } from '../tenants/TenantProvider'

export function Brand({ small = false }: { small?: boolean }) {
  const tenant = useTenant()
  const [first, ...rest] = tenant.name.split(' ')

  return (
    <a href="#beranda" className={`brand ${small ? 'brand-small' : ''}`} aria-label={`${tenant.name}, ke beranda`}>
      <span className="brand-type">{first}</span>
      <span className="brand-cup">☕</span>
      <span className="brand-type">{rest.join(' ')}</span>
    </a>
  )
}
