import { useMemo, useState } from 'react'
import { Check, Plus, Search } from 'lucide-react'
import { config } from '../../config'
import type { Cart } from '../../features/order/useOrder'
import { formatRupiah } from '../../lib/format'
import { CupArt } from '../CupArt'

const bestsellers = ['Klepon', 'Kopi Tor', 'Dalgona']

export function MenuSection({ cart, onAddItem }: { cart: Cart; onAddItem: (name: string) => void }) {
  const [category, setCategory] = useState<'Kopi' | 'Non-Kopi'>('Kopi')
  const [query, setQuery] = useState('')
  const visibleItems = useMemo(() => config.menu.filter(item => item.available && item.category === category && item.name.toLowerCase().includes(query.toLowerCase())), [category, query])

  return (
    <section className="menu-section section-pad" id="menu">
      <div className="section-heading"><div><p className="eyebrow">YANG LAGI KAMU PENGIN</p><h2>Menu <em>favorit.</em></h2></div><p className="section-intro">Diracik segar setiap hari.<br />Pilih teman seruputmu.</p></div>
      <div className="menu-tools">
        <div className="tabs" role="tablist" aria-label="Kategori menu">
          <button className={category === 'Kopi' ? 'active' : ''} onClick={() => setCategory('Kopi')} role="tab" aria-selected={category === 'Kopi'}>Kopi <span>23</span></button>
          <button className={category === 'Non-Kopi' ? 'active' : ''} onClick={() => setCategory('Non-Kopi')} role="tab" aria-selected={category === 'Non-Kopi'}>Non-Kopi <span>04</span></button>
        </div>
        <label className="search-box"><Search size={17} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Cari minuman..." aria-label="Cari minuman" /><kbd>⌕</kbd></label>
      </div>
      <div className="menu-grid">{visibleItems.map(item => {
        const index = config.menu.findIndex(menuItem => menuItem.name === item.name)
        return <article className="menu-card" key={item.name}>
          <div className="menu-card-art"><span className="drink-label">DINGIN<br />SELALU</span>{bestsellers.includes(item.name) && <span className="best-badge">✳ BEST SELLER</span>}<CupArt index={index} /></div>
          <div className="menu-card-info"><div className="item-copy"><span className="item-category">{item.category === 'Kopi' ? 'KOPI DJONO' : 'SEGAR TANPA KOPI'}</span><h3>{item.name}</h3><p>{item.description}</p><strong>{formatRupiah(item.price)}</strong></div>
            <button className={`add-button ${cart[item.name] ? 'added' : ''}`} onClick={() => onAddItem(item.name)} aria-label={`Tambah ${item.name} ke keranjang`}>{cart[item.name] ? <Check size={19} /> : <Plus size={20} />}</button>
          </div>
        </article>
      })}</div>
      {visibleItems.length === 0 && <div className="empty-results">Belum ketemu. Coba nama minuman yang lain, ya.</div>}
      <div className="menu-foot"><span>SEMUA MINUMAN DISAJIKAN DINGIN</span><span>DIRACIK SATU-SATU, BUAT KAMU <span className="sparkle">✳</span></span></div>
    </section>
  )
}
