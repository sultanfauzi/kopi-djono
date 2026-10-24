import { useMemo, useState } from 'react'
import { Check, Plus, Search } from 'lucide-react'
import type { Cart } from '../../features/order/useOrder'
import { formatRupiah } from '../../lib/format'
import { CupArt } from '../CupArt'
import { useTenant } from '../../tenants/TenantProvider'

export function MenuSection({ cart, onAddItem }: { cart: Cart; onAddItem: (name: string) => void }) {
  const tenant = useTenant()
  const [category, setCategory] = useState(tenant.categories[0] ?? '')
  const [query, setQuery] = useState('')
  const visibleItems = useMemo(() => tenant.menu.filter(item => item.available !== false && item.category === category && item.name.toLowerCase().includes(query.toLowerCase())), [tenant.menu, category, query])

  return (
    <section className="menu-section section-pad" id="menu">
      <div className="section-heading"><div><p className="eyebrow">YANG LAGI KAMU PENGIN</p><h2>Menu <em>favorit.</em></h2></div><p className="section-intro">Diracik segar setiap hari.<br />Pilih teman seruputmu.</p></div>
      <div className="menu-tools">
        <div className="tabs" role="tablist" aria-label="Kategori menu">{tenant.categories.map(itemCategory => {
          const count = tenant.menu.filter(item => item.category === itemCategory && item.available !== false).length
          return <button key={itemCategory} className={category === itemCategory ? 'active' : ''} onClick={() => setCategory(itemCategory)} role="tab" aria-selected={category === itemCategory}>{itemCategory} <span>{String(count).padStart(2, '0')}</span></button>
        })}</div>
        <label className="search-box"><Search size={17} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Cari minuman..." aria-label="Cari minuman" /><kbd>âŒ•</kbd></label>
      </div>
      <div className="menu-grid">{visibleItems.map(item => {
        const index = tenant.menu.findIndex(menuItem => menuItem.id === item.id)
        return <article className="menu-card" key={item.name}>
          <div className="menu-card-art"><span className="drink-label">DIRACIK<br />SEGAR</span>{item.bestSeller && <span className="best-badge">âœ³ BEST SELLER</span>}<CupArt index={index} /></div>
          <div className="menu-card-info"><div className="item-copy"><span className="item-category">{item.category.toUpperCase()}</span><h3>{item.name}</h3><p>{item.description}</p><strong>{formatRupiah(item.price)}</strong></div>
            <button className={`add-button ${cart[item.id] ? 'added' : ''}`} onClick={() => onAddItem(item.id)} aria-label={`Tambah ${item.name} ke keranjang`}>{cart[item.id] ? <Check size={19} /> : <Plus size={20} />}</button>
          </div>
        </article>
      })}</div>
      {visibleItems.length === 0 && <div className="empty-results">Belum ketemu. Coba nama minuman yang lain, ya.</div>}
      <div className="menu-foot"><span>SEMUA MINUMAN DISAJIKAN DINGIN</span><span>DIRACIK SATU-SATU, BUAT KAMU <span className="sparkle">âœ³</span></span></div>
    </section>
  )
}
