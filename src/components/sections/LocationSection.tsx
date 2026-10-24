import { ArrowRight, Clock3, Instagram, MapPin } from 'lucide-react'
import { useTenant } from '../../tenants/TenantProvider'

export function LocationSection({ onOpenCart }: { onOpenCart: () => void }) {
  const tenant = useTenant()
  const instagramUrl = tenant.instagram.startsWith('http') ? tenant.instagram : `https://instagram.com/${tenant.instagram.replace(/^@/, '')}`
  return (
    <section className="visit-section section-pad" id="lokasi">
      <div className="visit-head"><p className="eyebrow">KAMI ADA DI SINI</p><h2>Mampir <em>yuk.</em></h2><p>Tempat kecil, obrolan panjang, kopi dingin selalu siap.</p></div>
      <div className="visit-grid">
        <div className="location-card">
          <div className="location-graphic"><div className="map-grid" /><div className="map-road road-one" /><div className="map-road road-two" /><div className="map-road road-three" /><div className="map-pin"><MapPin size={24} fill="currentColor" /></div><div className="map-label">{tenant.name}</div><span className="map-neighborhood">JAKARTA UTARA</span></div>
          <div className="location-detail"><div className="detail-icon"><MapPin size={18} /></div><div><span>ALAMAT KAMI</span><p>{tenant.address}</p></div><a href={tenant.mapsUrl} target="_blank" rel="noreferrer" aria-label="Buka lokasi di Google Maps"><ArrowRight size={17} /></a></div>
        </div>
        <div className="visit-side">
          <div className="hours-card"><div className="detail-icon"><Clock3 size={18} /></div><div><span>JAM BUKA</span><p>{tenant.openingHours}</p><small>Datang kapan aja, kami tunggu!</small></div><span className="open-dot" /></div>
          <div className="visit-cta"><div><p>Sudah tahu mau pesan apa?</p><span>Langsung kabari kami, ya.</span></div><button className="button button-dark" onClick={onOpenCart}>Pesan sekarang <ArrowRight size={16} /></button></div>
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="instagram-link"><Instagram size={17} /> IKUTI CERITA KAMI DI INSTAGRAM <ArrowRight size={15} /></a>
        </div>
      </div>
    </section>
  )
}
