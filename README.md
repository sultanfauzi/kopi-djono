# Kopi Djono — demo website

Website demo kedai kopi yang dibuat dengan React, TanStack Router, Tailwind CSS, dan komponen UI lokal bergaya shadcn.

## Menjalankan

```bash
npm install
npm run dev
```

Buka `/` untuk halaman utama dan `/qr?meja=03` untuk simulasi pelanggan yang masuk lewat QR di meja 03. Untuk QR meja lain, ganti nomor di belakang `?meja=`. Halaman QR langsung membuka menu, memilih mode makan di tempat, dan mengisi nomor meja di keranjang.

## Struktur kode

```text
src/
├── components/
│   ├── cart/        # Keranjang dan tombol keranjang melayang
│   ├── layout/      # Navigasi dan footer
│   ├── sections/    # Hero, menu, cerita, dan lokasi
│   └── ui/          # Komponen UI kecil
├── features/order/  # State keranjang dan pesanan
├── lib/             # Format harga dan tautan WhatsApp
├── pages/           # Halaman route /qr
├── styles/          # CSS per area tampilan
├── App.tsx          # Komposisi halaman utama
├── config.ts        # Data bisnis dan menu
└── main.tsx         # Setup route dan entry point React
```

## Pemesanan

Website ini frontend-only. Keranjang disimpan di `localStorage`, lalu detail pesanan dibuka sebagai pesan siap kirim ke WhatsApp kasir. Untuk demo alur ini sudah bisa diklik dari QR sampai pesanan. Agar pesanan pelanggan masuk langsung ke panel kasir di perangkat lain, perlu backend dan dashboard kasir. Ganti nomor WhatsApp, alamat, jam buka, Instagram, dan Maps di `src/config.ts` sebelum demo ke pelanggan.
