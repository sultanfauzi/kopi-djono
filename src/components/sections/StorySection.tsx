import { ArrowRight } from 'lucide-react'
import { useTenant } from '../../tenants/TenantProvider'

export function StorySection() {
  const tenant = useTenant()
  return (
    <section className="story-section" id="cerita">
      <div className="story-decoration">3<span>✳</span></div>
      <div className="story-inner"><p className="eyebrow">SEDIKIT CERITA DARI KAMI</p><h2>Kopi enak itu<br />soal <em>rasa</em> dan rasa.</h2>
        <p className="story-body">{tenant.name} hadir untuk menemani obrolan santai dengan racikan yang dibuat sepenuh hati. Pilih menu favoritmu, nikmati suasananya, lalu datang lagi kapan saja.</p>
        <a href={`/${tenant.slug}/lokasi`} className="text-link">Kenalan lebih dekat <ArrowRight size={16} /></a><div className="story-sign">— SAMPAI KETEMU DI {tenant.name.toUpperCase()}</div>
      </div>
      <div className="story-seal"><span>DIRACIK<br />PAKAI HATI</span><i>✳</i><small>JAKARTA • INDONESIA</small></div>
    </section>
  )
}
