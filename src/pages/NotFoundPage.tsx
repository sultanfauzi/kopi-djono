import { Link } from '@tanstack/react-router'

export function NotFoundPage() {
  return <main className="not-found-page"><p className="eyebrow">HALAMAN TIDAK DITEMUKAN</p><h1>Kedainya belum terdaftar.</h1><p>Coba periksa lagi tautannya, ya.</p><Link className="button button-dark" to="/">Kembali ke awal</Link></main>
}
