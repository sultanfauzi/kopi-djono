import type { MenuItem, Tenant } from '../tenants/types'

export const formatRupiah = (amount: number) => `Rp${amount.toLocaleString('id-ID')}`

export function createWhatsAppUrl({
  tenant,
  items,
  cart,
  total,
  customerName,
  note,
  orderType,
  table,
}: {
  tenant: Tenant
  items: readonly MenuItem[]
  cart: Record<string, number>
  total: number
  customerName: string
  note: string
  orderType: string
  table: string
}) {
  const lines = [
    `Halo ${tenant.name}, saya mau pesan:`,
    ...items.map(item => `- ${cart[item.id]}x ${item.name} — ${formatRupiah(item.price * cart[item.id])}`),
    `Total: ${formatRupiah(total)}`,
    `Nama: ${customerName.trim() || 'Pelanggan'}`,
    `Catatan: ${note.trim() || '-'}`,
    `Tipe: ${orderType}${orderType === 'Makan di tempat' && table.trim() ? ` (Meja ${table.trim()})` : ''}`,
  ]

  return `https://wa.me/${tenant.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
}
