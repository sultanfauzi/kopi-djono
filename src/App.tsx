import { useEffect, useState } from 'react'
import { CartDrawer } from './components/cart/CartDrawer'
import { FloatingCart } from './components/cart/FloatingCart'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { LocationSection } from './components/sections/LocationSection'
import { MenuSection } from './components/sections/MenuSection'
import { StorySection } from './components/sections/StorySection'
import { Toast } from './components/ui/Toast'
import { useOrder } from './features/order/useOrder'
import { useTenant } from './tenants/TenantProvider'

export default function App({ qrMode = false, scrollTarget }: { qrMode?: boolean; scrollTarget?: 'menu' | 'cerita' | 'lokasi' }) {
  const tenant = useTenant()
  const tableNumber = qrMode ? (new URLSearchParams(window.location.search).get('meja') ?? '').replace(/\D/g, '').slice(0, 4) : ''
  const order = useOrder({ dineIn: qrMode, initialTable: tableNumber })
  const [cartOpen, setCartOpen] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(() => {
    if (!scrollTarget) return
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(scrollTarget)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => window.cancelAnimationFrame(frame)
  }, [scrollTarget])

  const addItem = (id: string) => {
    order.addItem(id)
    const itemName = tenant.menu.find(item => item.id === id)?.name ?? id
    setToast(`${itemName} masuk keranjang`)
    window.setTimeout(() => setToast(''), 1800)
  }

  return (
    <>
      <Header itemCount={order.itemCount} onOpenCart={() => setCartOpen(true)} qrMode={qrMode} tableNumber={tableNumber} />
      <main>
        {qrMode ? <section className="qr-order-intro"><p className="eyebrow">PESAN LANGSUNG DARI MEJA</p><h1>{tableNumber ? `Meja ${tableNumber},` : 'Selamat datang,'}<br /><em>mau minum apa?</em></h1><p>Pilih minuman favoritmu. Pesananmu akan diteruskan ke kasir.</p></section> : <Hero onOpenCart={() => setCartOpen(true)} />}
        <MenuSection cart={order.cart} onAddItem={addItem} />
        {!qrMode && <><StorySection /><LocationSection onOpenCart={() => setCartOpen(true)} /></>}
      </main>
      {!qrMode && <Footer />}
      <FloatingCart count={order.itemCount} total={order.total} onClick={() => setCartOpen(true)} />
      {cartOpen && <CartDrawer order={order} onClose={() => setCartOpen(false)} />}
      {toast && <Toast message={toast} />}
    </>
  )
}
