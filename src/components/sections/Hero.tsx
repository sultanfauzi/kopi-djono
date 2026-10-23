import { ArrowDown, ShoppingBag } from 'lucide-react'

export function Hero({ onOpenCart }: { onOpenCart: () => void }) {
  return (
    <section className="hero" id="beranda">
      <div className="hero-grain" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-kicker"><span />KEDAI KOPI TETANGGA</div>
          <h1>Cara manis<br />menikmati <em>pahitnya</em><br />kopi.</h1>
          <p className="hero-sub">Dari gelas pertama sampai tegukan terakhir,<br />selalu ada cerita yang enak dibagi.</p>
          <div className="hero-actions"><a className="button button-cream" href="#menu">Lihat menu <ArrowDown size={16} /></a><button className="button button-outline" onClick={onOpenCart}><ShoppingBag size={16} /> Pesan via WhatsApp</button></div>
          <div className="hero-note"><span className="note-stars">✳ ✳ ✳</span> DIBUAT DENGAN HATI, DISAJIKAN DINGIN</div>
        </div>
        <div className="hero-visual">
          <div className="sun-stamp">SEGAR<br />SETIAP<br />SERUPUT</div><div className="hero-beans bean-a">✳</div><div className="hero-beans bean-b">✳</div>
          <div className="hero-cup-wrap"><div className="hero-cup"><div className="hero-cup-lid" /><div className="hero-cup-straw" /><span className="hero-cup-logo">KOPI<br /><b>DJONO</b><i>✳</i></span><div className="hero-cup-drink" /></div><div className="hero-shadow" /></div>
          <div className="visual-caption"><span>01 — RACIKAN HARI INI</span><span>JAKARTA BARAT</span></div>
        </div>
      </div>
      <div className="hero-bottom"><span>SEJAK PAGI, SAMPAI HATI</span><span>GULIR UNTUK PESAN <ArrowDown size={13} /></span></div>
    </section>
  )
}
