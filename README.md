# Three Quarters Cafe

Website menu digital Three Quarters (3/4) Cafe - Pluit. Dibangun dengan React, TanStack Router, Tailwind CSS v4, dan TypeScript.

## Menjalankan

```bash
npm install
npm run dev
```

## Halaman

- `/` — website Three Quarters.
- `/three-quarters` — alamat tenant eksplisit untuk website yang sama.
- `/three-quarters/menu`, `/three-quarters/cerita`, `/three-quarters/lokasi` — URL khusus yang membuka website lalu scroll halus ke bagian tujuan.
- `/three-quarters/qr` — membuat QR per meja.
- `/three-quarters/qr?meja=03` — simulasi pesan dari meja 03.

Menu dan info kedai tersimpan di `src/tenants/three-quarters.ts`. Keranjang memakai `localStorage` dan pesanan diteruskan ke WhatsApp. Agar pesanan masuk langsung ke aplikasi kasir, dibutuhkan backend dan panel kasir.
