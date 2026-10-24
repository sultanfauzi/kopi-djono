import { ArrowRight, ShoppingBag } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'
import type { MouseEvent } from 'react'
import { useTenant } from '../../tenants/TenantProvider'

export function Header({ itemCount, onOpenCart, qrMode = false, tableNumber = '' }: { itemCount: number; onOpenCart: () => void; qrMode?: boolean; tableNumber?: string }) {
  const tenant = useTenant()
  const navigate = useNavigate()
  const [first, ...rest] = tenant.name.split(' ')
  const homeUrl = `/${tenant.slug}`
  const locationUrl = `/${tenant.slug}/lokasi`
  const goToSection = (section: 'menu' | 'cerita' | 'lokasi') => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (section === 'menu') void navigate({ to: '/$slug/menu', params: { slug: tenant.slug } })
    if (section === 'cerita') void navigate({ to: '/$slug/cerita', params: { slug: tenant.slug } })
    if (section === 'lokasi') void navigate({ to: '/$slug/lokasi', params: { slug: tenant.slug } })
  }
  return (
    <header className="topbar">
      <a className="mobile-brand" href={qrMode ? '#menu' : homeUrl}>{first} <span>{rest.join(' ')}</span></a>
      {qrMode ? <span className="qr-table-label">{tableNumber ? `MEJA ${tableNumber}` : 'PESAN DI KEDAI'}</span> : <nav className="desktop-nav" aria-label="Navigasi utama"><a href={`/${tenant.slug}/menu`} onClick={goToSection('menu')}>Menu</a><a href={`/${tenant.slug}/cerita`} onClick={goToSection('cerita')}>Cerita kami</a><a href={locationUrl} onClick={goToSection('lokasi')} aria-current={window.location.pathname.endsWith('/lokasi') ? 'page' : undefined}>Lokasi</a></nav>}
      {!qrMode && <a href={`/${tenant.slug}/menu`} onClick={goToSection('menu')} className="top-order">Cari minuman <ArrowRight size={15} /></a>}
      <button className="header-cart" onClick={onOpenCart} aria-label={`Buka keranjang, ${itemCount} item`}><ShoppingBag size={19} />{itemCount > 0 && <i>{itemCount}</i>}</button>
    </header>
  )
}
