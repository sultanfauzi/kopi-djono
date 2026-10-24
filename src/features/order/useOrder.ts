import { useEffect, useMemo, useState } from 'react'
import { useTenant } from '../../tenants/TenantProvider'

export type Cart = Record<string, number>
export type OrderType = 'Ambil sendiri' | 'Makan di tempat'

function readCart(storageKey: string, validIds: Set<string>): Cart {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '{}') as Record<string, unknown>
    return Object.fromEntries(Object.entries(saved).filter(([id, quantity]) => validIds.has(id) && Number.isInteger(quantity) && Number(quantity) > 0).map(([id, quantity]) => [id, Number(quantity)]))
  } catch {
    return {}
  }
}

export function useOrder({ dineIn = false, initialTable = '' }: { dineIn?: boolean; initialTable?: string } = {}) {
  const tenant = useTenant()
  const storageKey = `menu-kedai-cart:${tenant.slug}`
  const [cart, setCart] = useState<Cart>(() => readCart(storageKey, new Set(tenant.menu.map(item => item.id))))
  const [customerName, setCustomerName] = useState('')
  const [note, setNote] = useState('')
  const [orderType, setOrderType] = useState<OrderType>(dineIn ? 'Makan di tempat' : 'Ambil sendiri')
  const [table, setTable] = useState(initialTable)

  useEffect(() => {
    try { localStorage.setItem(storageKey, JSON.stringify(cart)) } catch { /* Keranjang tetap dipakai selama halaman terbuka. */ }
  }, [cart, storageKey])

  const items = useMemo(() => tenant.menu.filter(item => cart[item.id] > 0), [tenant.menu, cart])
  const itemCount = Object.values(cart).reduce<number>((sum, quantity) => sum + Number(quantity), 0)
  const total = items.reduce((sum, item) => sum + item.price * cart[item.id], 0)

  const updateQuantity = (name: string, amount: number) => {
    setCart(current => {
      const quantity = Math.max(0, (current[name] || 0) + amount)
      const next = { ...current }
      if (quantity === 0) delete next[name]
      else next[name] = quantity
      return next
    })
  }

  return {
    cart, items, itemCount, total,
    customerName, setCustomerName,
    note, setNote,
    orderType, setOrderType,
    table, setTable,
    addItem: (name: string) => updateQuantity(name, 1),
    updateQuantity,
  }
}

export type OrderState = ReturnType<typeof useOrder>
