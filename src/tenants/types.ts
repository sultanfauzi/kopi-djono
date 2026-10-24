export interface MenuItem {
  id: string
  name: string
  category: string
  price: number
  description?: string
  bestSeller?: boolean
  available?: boolean
}

export interface Tenant {
  slug: string
  name: string
  tagline: string
  whatsapp: string
  address: string
  openingHours: string
  instagram: string
  mapsUrl: string
  theme?: {
    primary: string
    accent: string
    background?: string
    headingFont?: string
  }
  categories: string[]
  menu: MenuItem[]
}
