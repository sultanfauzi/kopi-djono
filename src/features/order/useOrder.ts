import { useEffect, useMemo, useState } from 'react'
import { config } from '../../config'

export type Cart = Record<string, number>
export type OrderType = 'Ambil sendiri' | 'Makan di tempat'

function readCart(): Cart {
  try {
    return JSON.parse(localStorage.getItem('djono-cart') || '{}') as Cart
  } catch {
    return {}
  }
}

export function useOrder({ dineIn = false, initialTable = '' }: { dineIn?: boolean; initialTable?: string } = {}) {
  const [cart, setCart] = useState<Cart>(readCart)
  const [customerName, setCustomerName] = useState('')
  const [note, setNote] = useState('')
  const [orderType, setOrderType] = useState<OrderType>(dineIn ? 'Makan di tempat' : 'Ambil sendiri')
  const [table, setTable] = useState(initialTable)

  useEffect(() => {
    localStorage.setItem('djono-cart', JSON.stringify(cart))
  }, [cart])

  const items = useMemo(() => config.menu.filter(item => cart[item.name] > 0), [cart])
  const itemCount = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0)
  const total = items.reduce((sum, item) => sum + item.price * cart[item.name], 0)

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
