import { ArrowDown, ShoppingBag } from 'lucide-react'
import { useTenant } from '../../tenants/TenantProvider'

export function Hero({ onOpenCart }: { onOpenCart: () => void }) {
  const tenant = useTenant()
  const [cupName = 'THREE', cupSecond = 'QUARTERS'] = tenant.name.replace(/\s*\([^)]*\)/g, '').split(/\s+/)
  return (
    <section className="hero" id="beranda">
      <div className="hero-grain" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-kicker"><span />KEDAI KOPI DI PLUIT</div>
          <h1>{tenant.tagline}</h1>
          <p className="hero-sub">Kopi pilihan, matcha ceremonial, dan teman cerita<br />untuk menemani harimu.</p>
          <div className="hero-actions"><a className="button button-cream" href={`/${tenant.slug}/menu`}>Lihat menu <ArrowDown size={16} /></a><button className="button button-outline" onClick={onOpenCart}><ShoppingBag size={16} /> Pesan via WhatsApp</button></div>
          <div className="hero-note"><span className="note-stars">✳ ✳ ✳</span> DIBUAT DENGAN HATI, DISAJIKAN SEGAR</div>
        </div>
        <div className="hero-visual">
          <div className="sun-stamp">SEGAR<br />SETIAP<br />SERUPUT</div><div className="hero-beans bean-a">✳</div><div className="hero-beans bean-b">✳</div>
          <div className="hero-cup-wrap"><div className="hero-cup"><div className="hero-cup-lid" /><div className="hero-cup-straw" /><span className="hero-cup-logo">{cupName.toUpperCase()}<br /><b>{cupSecond.toUpperCase()}</b><i>✳</i></span><div className="hero-cup-drink" /></div><div className="hero-shadow" /></div>
          <div className="visual-caption"><span>01 — RACIKAN HARI INI</span><span>JAKARTA UTARA</span></div>
        </div>
      </div>
      <div className="hero-bottom"><span>SEJAK PAGI, SAMPAI HATI</span><span>GULIR UNTUK PESAN <ArrowDown size={13} /></span></div>
    </section>
  )
}
