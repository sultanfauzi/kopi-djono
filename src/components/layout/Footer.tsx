import { Link } from '@tanstack/react-router'
import { config } from '../../config'
import { Brand } from '../Brand'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top"><Brand small /><p>Teman cerita, teman ngopi.<br />Sampai ketemu di gelas berikutnya.</p><a href="#beranda" className="back-top">KEMBALI KE ATAS ↑</a></div>
      <div className="footer-bottom"><span>© {config.name.toUpperCase()}</span><Link to="/qr">WEBSITE DEMO · HALAMAN QR</Link><span>DIBUAT DENGAN ☕ DI JAKARTA</span></div>
    </footer>
  )
}
