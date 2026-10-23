import { ArrowRight } from 'lucide-react'

export function StorySection() {
  return (
    <section className="story-section" id="cerita">
      <div className="story-decoration">DJ<span>✳</span></div>
      <div className="story-inner"><p className="eyebrow">SEDIKIT CERITA DARI KAMI</p><h2>Kopi enak itu<br />soal <em>rasa</em> dan rasa.</h2>
        <p className="story-body">Kopi Djono lahir dari obrolan santai dan satu keyakinan sederhana: kopi enak harus bisa dinikmati siapa saja. Kami meracik setiap gelas dengan bahan pilihan, rasa yang akrab, dan hati yang selalu hangat.</p>
        <a href="#lokasi" className="text-link">Kenalan lebih dekat <ArrowRight size={16} /></a><div className="story-sign">— SAMPAI KETEMU DI DJONO</div>
      </div>
      <div className="story-seal"><span>DIRACIK<br />PAKAI HATI</span><i>✳</i><small>JAKARTA • INDONESIA</small></div>
    </section>
  )
}
