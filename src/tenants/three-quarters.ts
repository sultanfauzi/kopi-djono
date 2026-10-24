import type { Tenant } from './types'

export const threeQuarters: Tenant = {
  slug: 'three-quarters',
  name: 'Three Quarters (3/4) Cafe - Pluit',
  tagline: 'Secangkir jeda, diracik sepenuh rasa.',
  whatsapp: '6281234567890',
  address: 'Jl. Pluit Sakti III No.4, RT.5/RW.7, Pluit, Kec. Penjaringan, Jakarta Utara 14450',
  openingHours: 'Tutup pukul 17.00',
  instagram: '3quarters.id',
  mapsUrl: 'https://maps.google.com/?q=Jl.+Pluit+Sakti+III+No.4,+Jakarta+Utara',
  theme: {
    primary: '#7A0F0F',
    accent: '#A66A50',
    background: '#EAE7E1',
    headingFont: "'Cormorant Garamond', Georgia, serif",
  },
  categories: ['Coffee', 'Ceremonial Matcha', 'Tea', 'Extras'],
  menu: [
    { id: 'hot-iced-long-black', name: 'Hot/Iced Long Black', category: 'Coffee', price: 40000, description: 'Kopi hitam bersih dengan karakter espresso yang tegas.', available: true },
    { id: 'hot-iced-latte', name: 'Hot/Iced Latte', category: 'Coffee', price: 45000, description: 'Espresso seimbang dengan susu lembut pilihan.', available: true },
    { id: 'iced-house-vanilla-latte', name: 'Iced House Vanilla Latte', category: 'Coffee', price: 50000, description: 'Latte dingin khas rumah dengan aroma vanila yang lembut.', available: true },
    { id: 'iced-einspanner-latte', name: 'Iced Einspanner Latte', category: 'Coffee', price: 55000, description: 'Latte dingin dengan lapisan krim lembut di atasnya.', available: true },
    { id: 'iced-house-matcha-latte', name: 'Iced House Matcha Latte', category: 'Ceremonial Matcha', price: 65000, description: 'Matcha ceremonial dengan susu dingin yang halus.', available: true },
    { id: 'iced-matcha-espresso', name: 'Iced Matcha Espresso', category: 'Ceremonial Matcha', price: 67000, description: 'Matcha segar bertemu espresso dengan rasa berlapis.', available: true },
    { id: 'iced-usucha', name: 'Iced Usucha', category: 'Ceremonial Matcha', price: 60000, description: 'Matcha encer tradisional, ringan dengan rasa umami.', available: true },
    { id: 'iced-matcha-einspanner', name: 'Iced Matcha Einspanner', category: 'Ceremonial Matcha', price: 70000, description: 'Matcha ceremonial dingin dengan krim lembut.', available: true },
    { id: 'iced-tea', name: 'Iced Tea', category: 'Tea', price: 25000, description: 'Teh dingin segar untuk menemani waktu santai.', available: true },
    { id: 'hot-tea-chamomile-earl-grey', name: 'Hot Tea (Chamomile / Earl Grey)', category: 'Tea', price: 37000, description: 'Teh hangat pilihan: chamomile yang menenangkan atau Earl Grey yang harum.', available: true },
    { id: 'oat-milk', name: 'Oat Milk', category: 'Extras', price: 7000, description: 'Tambahan susu oat yang lembut dan ringan.', available: true },
    { id: 'vanilla-syrup', name: 'Vanilla Syrup', category: 'Extras', price: 5000, description: 'Sirup vanila untuk sentuhan manis yang harum.', available: true },
    { id: 'extra-shot', name: 'Extra Shot', category: 'Extras', price: 8000, description: 'Tambahan satu shot espresso untuk rasa kopi lebih kuat.', available: true },
  ],
}
