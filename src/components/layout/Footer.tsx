import { Brand } from '../Brand'
import { useTenant } from '../../tenants/TenantProvider'

export function Footer() {
  const tenant = useTenant()
  return (
    <footer className="footer">
      <div className="footer-top"><Brand small /><p>Teman cerita, teman ngopi.<br />Sampai ketemu di gelas berikutnya.</p><a href={`/${tenant.slug}`} className="back-top">KEMBALI KE ATAS ↑</a></div>
      <div className="footer-bottom"><span>© {tenant.name.toUpperCase()}</span><a href={`/${tenant.slug}/qr`}>QR MENU · {tenant.name.toUpperCase()}</a><span>MENU DIGITAL</span></div>
    </footer>
  )
}
