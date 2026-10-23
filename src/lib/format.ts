import { config, type MenuItem } from '../config'

export const formatRupiah = (amount: number) => `Rp${amount.toLocaleString('id-ID')}`

export function createWhatsAppUrl({
  items,
  cart,
  total,
  customerName,
  note,
  orderType,
  table,
}: {
  items: readonly MenuItem[]
  cart: Record<string, number>
  total: number
  customerName: string
  note: string
  orderType: string
  table: string
}) {
  const lines = [
    `Halo ${config.name}, saya mau pesan:`,
    ...items.map(item => `- ${cart[item.name]}x ${item.name} — ${formatRupiah(item.price * cart[item.name])}`),
    `Total: ${formatRupiah(total)}`,
    `Nama: ${customerName.trim() || 'Pelanggan'}`,
    `Catatan: ${note.trim() || '-'}`,
    `Tipe: ${orderType}${orderType === 'Makan di tempat' && table.trim() ? ` (Meja ${table.trim()})` : ''}`,
  ]

  return `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
}
