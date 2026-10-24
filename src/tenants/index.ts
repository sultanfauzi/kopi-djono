import { threeQuarters } from './three-quarters'
import type { Tenant } from './types'

export const tenants: Record<string, Tenant> = {
  [threeQuarters.slug]: threeQuarters,
}

export function getTenant(slug: string): Tenant | undefined {
  return tenants[slug.toLowerCase()]
}

export type { MenuItem, Tenant } from './types'
