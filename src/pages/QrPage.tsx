import { useState } from 'react'
import { ArrowRight, Copy, MapPin } from 'lucide-react'
import { useTenant } from '../tenants/TenantProvider'
import App from '../App'

function readTableFromUrl() {
  const value = new URLSearchParams(window.location.search).get('meja')
  return value?.replace(/\D/g, '').slice(0, 4) ?? ''
}

function QrGeneratorPage() {
  const tenant = useTenant()
  const [table, setTable] = useState('01')
  const [copied, setCopied] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)
  const safeTable = table.replace(/\D/g, '').slice(0, 4) || '01'
  const orderUrl = new URL(`/${tenant.slug}/qr?meja=${encodeURIComponent(safeTable)}`, window.location.origin).toString()
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=12&data=${encodeURIComponent(orderUrl)}`

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(orderUrl)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return <main className="qr-builder-page"><section className="qr-builder-card">
    <p className="eyebrow">QR MENU • {tenant.name.toUpperCase()}</p>
    <h1>Siapkan QR<br /><em>meja kedai.</em></h1>
    <p className="qr-builder-copy">Pilih nomor meja. QR ini akan membuka menu {tenant.name} dan mengisi nomor meja otomatis.</p>
    <label className="qr-table-input"><span><MapPin size={16} /> NOMOR MEJA</span><input value={table} onChange={event => setTable(event.target.value.replace(/\D/g, '').slice(0, 4))} inputMode="numeric" placeholder="Contoh: 03" /></label>
    <div className="qr-preview">
      {imageFailed ? <div className="qr-unavailable">Pratinjau QR belum bisa dimuat. Tautan pesanan tetap siap disalin.</div> : <img src={qrImageUrl} alt={`QR menu untuk meja ${safeTable}`} onError={() => setImageFailed(true)} />}
      <div><span>TAUTAN PESANAN</span><code>{orderUrl}</code><button className="qr-copy-button" onClick={copyUrl}><Copy size={15} />{copied ? 'Tersalin' : 'Salin tautan'}</button></div>
    </div>
    <a className="button button-dark qr-open-link" href={orderUrl}>Buka simulasi pesanan <ArrowRight size={16} /></a>
    <small className="qr-builder-note">QR akan memesan ke WhatsApp kedai. Untuk menerima pesanan otomatis di kasir, hubungkan aplikasi ke backend.</small>
  </section></main>
}

export function QrPage() {
  return readTableFromUrl() ? <App qrMode /> : <QrGeneratorPage />
}
