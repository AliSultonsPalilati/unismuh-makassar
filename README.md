# Website Universitas Muhammadiyah Makassar

Website informasi dan pengenalan kampus untuk Universitas Muhammadiyah Makassar. Dibangun dengan React, TypeScript, dan Tailwind CSS.

## 🎓 Fitur Utama

- **6 Halaman Utama**: Beranda, Profil Kampus, Program Studi, Alur Pendaftaran, Fasilitas, dan Kontak
- **Desain Responsif**: Optimal di mobile, tablet, dan desktop
- **Navigasi Intuitif**: Header sticky dengan menu hamburger untuk mobile
- **SEO Optimized**: Meta tags lengkap untuk setiap halaman
- **Modern UI**: Design system dengan color palette akademik Islami (biru tua, hijau, dan aksen emas)

## 🚀 Cara Menjalankan

### Prasyarat
- Node.js versi 16 atau lebih tinggi
- npm atau yarn

### Instalasi

1. Clone repository ini
```bash
git clone <repository-url>
cd <project-folder>
```

2. Install dependencies
```bash
npm install
```

3. Jalankan development server
```bash
npm run dev
```

4. Buka browser dan akses `http://localhost:8080`

### Build untuk Production

```bash
npm run build
```

File hasil build akan tersimpan di folder `dist/`.

## 📁 Struktur Project

```
src/
├── assets/              # Gambar dan asset statis
│   ├── hero-campus.jpg
│   ├── library.jpg
│   ├── laboratory.jpg
│   └── mosque.jpg
├── components/          # Komponen reusable
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── StatCard.tsx
│   └── FeatureCard.tsx
├── data/               # File JSON untuk konten
│   ├── fakultas.json
│   ├── statistik.json
│   ├── fasilitas.json
│   └── kontak.json
├── pages/              # Halaman utama
│   ├── Beranda.tsx
│   ├── ProfilKampus.tsx
│   ├── ProgramStudi.tsx
│   ├── Pendaftaran.tsx
│   ├── Fasilitas.tsx
│   └── Kontak.tsx
└── App.tsx             # Root component dengan routing
```

## 🎨 Kustomisasi

### Mengganti Gambar

Gambar kampus tersimpan di folder `src/assets/`. Untuk mengganti:

1. Tambahkan gambar baru ke folder `src/assets/`
2. Import gambar di file komponen yang relevan
```typescript
import gambarBaru from "@/assets/gambar-baru.jpg";
```
3. Gunakan dalam komponen

### Mengubah Data Konten

Semua konten dinamis tersimpan dalam file JSON di folder `src/data/`:

- **fakultas.json**: Data fakultas dan program studi
- **statistik.json**: Statistik kampus (jumlah fakultas, mahasiswa, dll)
- **fasilitas.json**: Daftar fasilitas kampus
- **kontak.json**: Informasi kontak, alamat, dan social media

Edit file-file ini untuk mengubah konten tanpa perlu mengubah kode.

### Mengubah Warna Theme

Theme warna didefinisikan di `src/index.css` dalam variabel CSS. Edit nilai HSL untuk mengubah warna:

```css
:root {
  --primary: 220 80% 25%;      /* Warna utama (biru tua) */
  --secondary: 38 95% 50%;     /* Warna aksen (emas) */
  --accent: 165 70% 40%;       /* Warna aksen tambahan (hijau) */
  /* ... */
}
```

## 📱 Halaman

### 1. Beranda (/)
- Hero banner dengan tagline kampus
- Statistik kampus (fakultas, mahasiswa, akreditasi)
- Program dan fasilitas unggulan
- Call-to-action untuk pendaftaran

### 2. Profil Kampus (/profil)
- Sejarah singkat universitas
- Visi, misi, dan nilai-nilai
- Struktur pimpinan
- Akreditasi dan prestasi

### 3. Program Studi (/program-studi)
- Daftar fakultas dengan program studinya
- Badge akreditasi untuk setiap fakultas
- Keunggulan program studi

### 4. Alur Pendaftaran (/pendaftaran)
- Step-by-step proses pendaftaran (6 langkah)
- Dokumen yang diperlukan
- Timeline pendaftaran
- CTA untuk daftar online

### 5. Fasilitas (/fasilitas)
- Galeri fasilitas kampus dengan foto
- Deskripsi lengkap setiap fasilitas
- Fasilitas pendukung lainnya

### 6. Kontak (/kontak)
- Informasi kontak lengkap
- Form kontak interaktif
- Tombol WhatsApp
- Google Maps embed
- Link social media

## 🛠️ Teknologi

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Vite** - Build Tool
- **Shadcn/ui** - UI Components

## 📝 Catatan Pengembangan

- Semua komponen menggunakan design system dari `index.css` dan `tailwind.config.ts`
- Images di-import sebagai ES6 modules untuk optimal bundling
- Form kontak menggunakan validasi HTML5 (placeholder - belum terintegrasi backend)
- Responsive design dengan breakpoint: mobile (< 768px), tablet (768px - 1024px), desktop (> 1024px)

## 📞 Support

Untuk pertanyaan atau bantuan:
- Email: info@unismuh.ac.id
- WhatsApp: +62 812-3456-7890
- Website: https://unismuh.ac.id

---

© 2025 Universitas Muhammadiyah Makassar. All rights reserved.
