import { ArrowRight, Minus, Plus, X } from 'lucide-react'
import { config } from '../../config'
import type { OrderState } from '../../features/order/useOrder'
import { createWhatsAppUrl, formatRupiah } from '../../lib/format'
import { CupArt } from '../CupArt'
import { Button } from '../ui/button'

export function CartDrawer({ order, onClose }: { order: OrderState; onClose: () => void }) {
  const sendOrder = () => {
    if (!order.items.length) return
    const url = createWhatsAppUrl({ items: order.items, cart: order.cart, total: order.total, customerName: order.customerName, note: order.note, orderType: order.orderType, table: order.table })
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return <div className="drawer-backdrop" onClick={onClose}>
    <aside className="cart-drawer" onClick={event => event.stopPropagation()} aria-label="Keranjang pesanan">
      <div className="drawer-head"><div><p className="eyebrow">PESANANMU</p><h2>Keranjang <em>kopi.</em></h2></div><button className="close-button" onClick={onClose} aria-label="Tutup keranjang"><X /></button></div>
      {order.items.length === 0 ? <div className="cart-empty"><div className="empty-cup">☕</div><h3>Masih kosong, nih.</h3><p>Yuk, pilih minuman yang bikin hari lebih enak.</p><button className="button button-dark" onClick={() => { onClose(); document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' }) }}>Lihat menu <ArrowRight size={16} /></button></div> : <>
        <div className="cart-lines">{order.items.map(item => <div className="cart-line" key={item.name}>
          <CupArt index={config.menu.findIndex(menuItem => menuItem.name === item.name)} /><div className="cart-line-title"><b>{item.name}</b><span>{formatRupiah(item.price)}</span></div>
          <div className="quantity"><button onClick={() => order.updateQuantity(item.name, -1)} aria-label={`Kurangi ${item.name}`}><Minus size={13} /></button><span>{order.cart[item.name]}</span><button onClick={() => order.updateQuantity(item.name, 1)} aria-label={`Tambah ${item.name}`}><Plus size={13} /></button></div>
        </div>)}</div>
        <div className="order-form">
          <label>Nama kamu<input value={order.customerName} onChange={event => order.setCustomerName(event.target.value)} placeholder="Misal: Budi" /></label>
          <label>Catatan untuk kami <span>(opsional)</span><input value={order.note} onChange={event => order.setNote(event.target.value)} placeholder="Kurang manis, ya..." /></label>
          <div className="form-label">Mau dinikmati di mana?</div>
          <div className="order-options"><button className={order.orderType === 'Ambil sendiri' ? 'selected' : ''} onClick={() => order.setOrderType('Ambil sendiri')}>Ambil sendiri</button><button className={order.orderType === 'Makan di tempat' ? 'selected' : ''} onClick={() => order.setOrderType('Makan di tempat')}>Makan di tempat</button></div>
          {order.orderType === 'Makan di tempat' && <label>Nomor meja<input value={order.table} onChange={event => order.setTable(event.target.value)} placeholder="Misal: 3" inputMode="numeric" /></label>}
        </div>
        <div className="drawer-total"><div><span>Total pesanan</span><b>{formatRupiah(order.total)}</b></div><Button className="whatsapp-button" onClick={sendOrder}>Lanjut pesan via WhatsApp <ArrowRight size={16} /></Button><small>Pesananmu akan dikirim ke WhatsApp Kopi Djono.</small></div>
      </>}
    </aside>
  </div>
}
