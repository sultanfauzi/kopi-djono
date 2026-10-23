import { ArrowRight, ShoppingBag } from 'lucide-react'
import { config } from '../../config'

export function Header({ itemCount, onOpenCart, qrMode = false, tableNumber = '' }: { itemCount: number; onOpenCart: () => void; qrMode?: boolean; tableNumber?: string }) {
  const [first, ...rest] = config.name.split(' ')
  return (
    <header className="topbar">
      <a className="mobile-brand" href={qrMode ? '#menu' : '#beranda'}>{first} <span>{rest.join(' ')}</span></a>
      {qrMode ? <span className="qr-table-label">{tableNumber ? `MEJA ${tableNumber}` : 'PESAN DI KEDAI'}</span> : <nav className="desktop-nav" aria-label="Navigasi utama"><a href="#menu">Menu</a><a href="#cerita">Cerita kami</a><a href="#lokasi">Lokasi</a></nav>}
      {!qrMode && <a href="#menu" className="top-order">Cari minuman <ArrowRight size={15} /></a>}
      <button className="header-cart" onClick={onOpenCart} aria-label={`Buka keranjang, ${itemCount} item`}><ShoppingBag size={19} />{itemCount > 0 && <i>{itemCount}</i>}</button>
    </header>
  )
}
