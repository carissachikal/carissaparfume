# Panduan Lengkap SEO untuk CARFUME (carfume.my.id)

Panduan ini dibuat khusus untuk website static Carfume. Ikuti langkah demi langkah setelah kamu **deploy ulang** file-file dari ZIP ini.

---

## 1. Deploy Ulang Website

1. Download ZIP revisi yang diberikan.
2. Extract ZIP.
3. Upload **semua file** ke root repository GitHub-mu (https://github.com/carissachikal/carissaparfume):
   - index.html (sudah diupdate meta tags)
   - style.css
   - script.js
   - favicon.svg
   - robots.txt          ← baru
   - sitemap.xml         ← baru
   - og-image.jpg        ← baru
   - site.webmanifest    ← baru
   - CNAME
   - README.md
4. Commit & push ke branch `main` (atau branch yang dipakai GitHub Pages).
5. Tunggu 1–5 menit, lalu cek:
   - https://carfume.my.id/
   - https://carfume.my.id/robots.txt
   - https://carfume.my.id/sitemap.xml
   - https://carfume.my.id/og-image.jpg

---

## 2. Google Search Console (WAJIB)

Ini langkah paling penting agar Google bisa index website-mu.

1. Buka: **https://search.google.com/search-console**
2. Login dengan akun Google.
3. Klik **“Add property”** → pilih **URL prefix** → masukkan `https://carfume.my.id`
4. Verifikasi kepemilikan:
   - Cara termudah: **HTML tag**
   - Copy meta tag yang diberikan Google.
   - Tempel di dalam `<head>` file `index.html` (setelah meta charset).
   - Deploy ulang, lalu klik **Verify**.
5. Setelah verified:
   - Di menu kiri → **Sitemaps**
   - Submit: `https://carfume.my.id/sitemap.xml`
6. Di menu **URL Inspection** → masukkan `https://carfume.my.id/` → **Request Indexing**.

**Tips:** Cek setiap minggu di menu **Coverage / Pages** apakah sudah ter-index.

---

## 3. Google Business Profile (Sangat direkomendasikan)

Karena kamu berbasis fisik di Kalideres:

1. Buka: **https://business.google.com/**
2. Buat profil bisnis baru:
   - Nama: **CARFUME**
   - Kategori: **Perfume store** / **Toko parfum** / **Beauty supply store**
   - Alamat: Kalideres, Jakarta Barat (isi seakurat mungkin)
   - Nomor telepon: 085150933867
   - Website: https://carfume.my.id
3. Verifikasi bisnis (biasanya via postcard / phone / email).
4. Upload foto produk, logo, dan lokasi.
5. Minta review dari customer (penting untuk ranking lokal).

---

## 4. Bing Webmaster Tools

1. Buka: **https://www.bing.com/webmasters**
2. Login dengan Microsoft account.
3. Add site: `https://carfume.my.id`
4. Verifikasi (bisa pakai XML file atau meta tag).
5. Submit sitemap: `https://carfume.my.id/sitemap.xml`

---

## 5. Cek Open Graph & Share Preview

Setelah deploy:

1. **Facebook / Meta Debugger**  
   https://developers.facebook.com/tools/debug/  
   Masukkan URL → **Scrape Again** → pastikan title, description, dan og-image muncul.

2. **Twitter / X Card Validator**  
   https://cards-dev.twitter.com/validator  
   (atau share link di X dan lihat preview).

3. **LinkedIn Post Inspector**  
   https://www.linkedin.com/post-inspector/

4. **WhatsApp**  
   Kirim link `https://carfume.my.id` ke diri sendiri → pastikan preview gambar & text muncul.

---

## 6. Tools Cek SEO Teknis (Gratis)

| Tool | Link | Fungsi |
|------|------|--------|
| PageSpeed Insights | https://pagespeed.web.dev/ | Kecepatan & Core Web Vitals |
| Mobile-Friendly Test | https://search.google.com/test/mobile-friendly | Cek mobile |
| Rich Results Test | https://search.google.com/test/rich-results | Cek structured data |
| Schema Markup Validator | https://validator.schema.org/ | Validasi JSON-LD |
| SSL Check | https://www.ssllabs.com/ssltest/ | Pastikan HTTPS aman |
| Redirect Checker | https://www.redirect-checker.org/ | Pastikan tidak ada redirect aneh |

---

## 7. Optimasi Konten (On-Page) yang Bisa Kamu Lakukan Nanti

- Ganti gambar Pexels dengan **foto produk asli Carfume** (penting untuk trust & SEO image).
- Tambahkan alt text yang deskriptif di setiap `<img>` (sudah ada, tapi bisa lebih spesifik).
- Buat halaman `/produk/rose-cloud.html` dll jika ingin ranking per produk (lebih bagus daripada hanya #hash).
- Tambahkan blog sederhana (misal `/blog/cara-memilih-parfum.html`) untuk long-tail keyword.
- Pastikan semua link internal pakai `https://carfume.my.id/...`.

---

## 8. Local SEO & Google Maps

1. Pastikan Google Business Profile sudah verified.
2. Minta customer kasih review bintang 5 + sebut “parfum Carfume Kalideres”.
3. Daftarkan ke:
   - https://www.google.com/maps
   - Direktori lokal Indonesia (jika ada).

---

## 9. Social Media & Backlink Sederhana

- Buat Instagram / TikTok bisnis → taruh link di bio.
- Share website di Instagram Story, status WhatsApp, Facebook.
- Minta teman/teman yang punya blog/website taruh backlink ke carfume.my.id (do-follow lebih bagus).

---

## 10. Checklist Setelah Deploy

- [ ] robots.txt bisa diakses
- [ ] sitemap.xml bisa diakses
- [ ] og-image.jpg muncul
- [ ] Google Search Console verified + sitemap submitted
- [ ] URL Inspection → Request Indexing
- [ ] Facebook Debugger scrape berhasil
- [ ] Google Business Profile dibuat
- [ ] PageSpeed Insights score dicek (target > 80 mobile)

---

## File yang Ada di ZIP Revisi

```
carissaparfume-seo/
├── index.html          ← meta SEO + JSON-LD
├── style.css
├── script.js
├── favicon.svg
├── og-image.jpg        ← 1200×630 untuk social share
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── CNAME
├── README.md
└── SEO-GUIDE.md        ← file ini
```

---

**Catatan penting:**

- SEO butuh waktu 1–4 minggu sebelum mulai muncul di Google.
- Fokus dulu ke **Google Search Console + Google Business Profile**.
- Ganti `og-image.jpg` dengan foto produk asli yang lebih bagus kalau sudah punya (ukuran ideal 1200×630 px).

Semoga website Carfume cepat ranking! ✨  
Kalau ada pertanyaan, tanya lagi ya.
