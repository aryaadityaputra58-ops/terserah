# Hammers Wallabe — Toko Sepatu Sneaker City Series

Website e-commerce untuk **Hammers Wallabe**, toko sepatu online yang menjual sneaker suede bergaya *city series* (Terrace, Spezial, dan Classic Runner) dengan berbagai colorway kota ikonik: Wien, Dublin, Liverpool, Hamburg, Bali, Birmingham, Amsterdam, München, dan London.

🔗 **Live Demo:** _isi dengan URL GitHub Pages setelah deploy, mis. `https://<username>.github.io/hammers-wallabe/`_

---

## 1. Fitur Teknis

- **Responsive Design** — dioptimalkan untuk desktop, tablet, dan mobile menggunakan CSS Grid/Flexbox + media query (`css/responsive.css`).
- **Struktur Halaman:**
  - `index.html` — Navbar + Hero banner + kategori (silhouette) + produk pilihan
  - `categories.html` — Katalog lengkap (10 produk) dengan filter & search
  - `cart.html` — Keranjang belanja (tambah, ubah kuantitas, hapus, total otomatis, kode promo)
  - `checkout.html` — Form pengiriman + simulasi metode pembayaran (**QRIS**, Virtual Account, E-Wallet, Kartu Kredit/Debit)
  - `about.html` — Business overview lengkap
  - Footer lengkap di semua halaman (kategori, bantuan, newsletter)
- **Fitur Interaktif (JavaScript):**
  - Filter & search produk (silhouette, harga, nama)
  - Keranjang belanja memakai `localStorage` (`hw_cart`)
  - Perhitungan total otomatis (subtotal, ongkir, diskon promo) + validasi form checkout
  - Modal detail produk, mode gelap/terang, smooth scrolling, scroll-reveal animation
- **Desain:** Flexbox/Grid, warna brand konsisten (claret, sky blue, gum tan di atas dasar krem), tipografi Space Grotesk + Inter.
- **Analytics:** `js/analytics.js` menyimulasikan Google Analytics 4 (gtag.js) — lihat bagian Rencana Analytics di bawah.

## 2. Business Overview

### Nama Bisnis & Deskripsi
**Hammers Wallabe** adalah toko sepatu online yang mengkurasi sneaker suede bergaya city-series — sepatu klasik terrace/spezial dengan sol gum ikonik, dijual dalam berbagai colorway yang terinspirasi kota-kota dunia.

### Value Proposition
Kualitas suede & jahitan yang diperiksa langsung sebelum dikirim, katalog yang dikurasi rapi per silhouette, serta foto produk asli (bukan ilustrasi) sehingga pembeli tahu persis warna dan tekstur yang akan diterima.

### Target Market & Segmentasi Pelanggan
1. **Sneakerhead & kolektor** (18–35 tahun) — memburu colorway langka/edisi terbatas.
2. **Anak muda urban & pekerja kreatif** (20–40 tahun) — butuh sneaker kasual harian yang stylish.
3. **Penggemar terrace/streetwear culture** — mengapresiasi sejarah city-series dan sol gum klasik.

### Analisis Pasar Singkat & Kompetitor
Minat pada gaya retro/terrace culture terus tumbuh di komunitas sneaker lokal. Kompetitor tidak langsung: marketplace umum (jangkauan luas, kurasi lemah) dan reseller media sosial (stok tidak konsisten). Diferensiasi Hammers Wallabe: kurasi ketat per silhouette + transparansi foto & deskripsi produk.

### Strategi Manajemen Produk & Katalog
Tiga kategori inti: **Terrace Series**, **Spezial Series**, **Classic Runner**. Setiap listing memuat nama colorway, koleksi/kota asal, deskripsi naratif, rating, stok, dan tag pencarian (`sol gum`, `edisi terbatas`, dll).

### Model Bisnis & Revenue Stream
Retail langsung (D2C) dengan margin ritel per pasang. Revenue tambahan: colorway edisi terbatas harga premium, bundling perawatan suede (brush & protector spray), dan program pre-order drop baru.

### Strategi Harga, Promosi, dan Diskon
Harga bervariasi menurut silhouette & kelangkaan. Kode promo simulasi: `HAMMERS10` (10%) dan `WALLABE20` (20%). Gratis ongkir bertahap + bundling perawatan gratis untuk pembelian ≥2 pasang.

### Proses Checkout & Simulasi Payment Gateway
Dua langkah: Keranjang → Checkout. Payment gateway disimulasikan mengikuti pola **Midtrans/Xendit**, dengan pilihan:
- **QRIS** (scan sekali, bayar pakai bank/e-wallet apa saja — standar GPN "Satu QRIS untuk Semua")
- Virtual Account (BCA/BNI/BRI/Mandiri)
- E-Wallet (GoPay/OVO/DANA/ShopeePay)
- Kartu Kredit/Debit (dengan validasi format nomor kartu, masa berlaku, CVV)

Pada produksi nyata, langkah ini digantikan Midtrans/Xendit Snap API untuk menghasilkan kode QRIS & token pembayaran sungguhan dengan notifikasi status via webhook.

### Rencana SEO, Keamanan, dan Pemeliharaan
- **SEO:** URL deskriptif per silhouette/colorway, meta description unik tiap halaman, heading semantik, atribut `alt` pada gambar, konten edukatif seputar terrace culture untuk kata kunci long-tail.
- **Keamanan:** HTTPS wajib, validasi input client & server, sanitasi data, payment gateway pihak ketiga bersertifikasi PCI-DSS (data kartu/QRIS tidak disimpan di server sendiri).
- **Pemeliharaan:** audit performa & broken link bulanan, backup mingguan, update dependensi berkala.

### Rencana Penggunaan Data Analytics
Metrik GA4 (bounce rate, conversion rate, add-to-cart rate, cart abandonment, AOV, kata kunci pencarian internal, serta adopsi metode pembayaran termasuk QRIS) ditinjau dua mingguan untuk keputusan restock, penyesuaian copywriting, retargeting keranjang, dan evaluasi efektivitas promo.

---

## 3. Struktur Folder

```
hammers-wallabe/
├── index.html
├── categories.html
├── cart.html
├── checkout.html
├── about.html
├── README.md
├── css/
│   ├── style.css
│   ├── darkmode.css
│   └── responsive.css
├── js/
│   ├── data.js
│   ├── script.js
│   ├── products.js
│   ├── darkmode.js
│   └── analytics.js
└── images/
    ├── wien.webp
    ├── dublin.jpg
    ├── liverpool.jpg
    ├── hamburg-navy.jpg
    ├── bali.jpg
    ├── birmingham.jpg
    ├── hamburg-cream.webp
    ├── amsterdam.jpg
    ├── munich.jpg
    ├── london.jpg
    └── qris.jpg
```

## 4. Technical Notes

- Ditulis murni dengan **HTML + CSS + JavaScript vanilla** (tanpa framework/library eksternal), agar seluruh logika mudah dipelajari dan dimodifikasi.
- Data produk & kategori terpusat di `js/data.js` sehingga mudah ditambah/diubah tanpa menyentuh HTML.
- Keranjang belanja memakai `localStorage` (key `hw_cart`) — data tersimpan per-browser, tanpa backend.
- **Deployment:** commit ke repository GitHub pribadi, aktifkan GitHub Pages (Settings → Pages → Branch `main` / folder root), lalu isi tautan live demo di bagian atas README ini.
