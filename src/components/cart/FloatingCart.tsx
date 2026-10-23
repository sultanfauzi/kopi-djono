import { ShoppingBag } from 'lucide-react'
import { formatRupiah } from '../../lib/format'

export function FloatingCart({ count, total, onClick }: { count: number; total: number; onClick: () => void }) {
  return <button className={`floating-cart ${count ? 'has-items' : ''}`} onClick={onClick} aria-label={`Keranjang, ${count} item`}>
    <span className="floating-icon"><ShoppingBag size={19} />{count > 0 && <i>{count}</i>}</span><span className="floating-label">{count > 0 ? `${count} item` : 'Keranjang'}</span><b>{formatRupiah(total)}</b>
  </button>
}
