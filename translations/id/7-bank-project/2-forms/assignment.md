# Gaya Aplikasi Bank Anda dengan CSS Modern

## Gambaran Proyek

Ubah aplikasi perbankan fungsional Anda menjadi aplikasi web yang menarik secara visual dan terlihat profesional menggunakan teknik CSS modern. Anda akan membuat sistem desain yang kohesif untuk meningkatkan pengalaman pengguna sambil tetap mempertahankan prinsip desain yang responsif dan aksesibilitas.

Tugas ini menantang Anda untuk menerapkan pola desain web kontemporer, menciptakan identitas visual yang konsisten, dan membuat antarmuka yang menarik serta mudah dinavigasi oleh pengguna.

## Instruksi

### Langkah 1: Siapkan Stylesheet Anda

**Buat fondasi CSS Anda:**

1. **Buat** file baru bernama `styles.css` di root proyek Anda
2. **Hubungkan** stylesheet di file `index.html` Anda:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Mulai** dengan reset CSS dan pengaturan default modern:
   ```css
   /* Modern CSS reset and base styles */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     line-height: 1.6;
     color: #333;
   }
   ```


### Langkah 2: Persyaratan Sistem Desain

**Terapkan elemen desain penting berikut:**

#### Palet Warna
- **Warna utama**: Pilih warna profesional untuk tombol dan sorotan
- **Warna sekunder**: Warna pelengkap untuk aksen dan tindakan sekunder
- **Warna netral**: Abu-abu untuk teks, border, dan latar belakang
- **Warna sukses/error**: Hijau untuk status sukses, merah untuk error

#### Tipografi
- **Hierarki heading**: Perbedaan yang jelas antara elemen H1, H2, dan H3
- **Teks isi**: Ukuran font yang mudah dibaca (minimal 16px) dan tinggi baris yang sesuai
- **Label formulir**: Gaya teks yang jelas dan mudah diakses

#### Tata Letak dan Spasi
- **Spasi konsisten**: Gunakan skala spasi (8px, 16px, 24px, 32px)
- **Sistem grid**: Tata letak yang terorganisir untuk formulir dan bagian konten
- **Desain responsif**: Pendekatan mobile-first dengan breakpoint

### Langkah 3: Gaya Komponen

**Gaya untuk komponen spesifik berikut:**

#### Formulir
- **Kolom input**: Border profesional, status fokus, dan gaya validasi
- **Tombol**: Efek hover, status nonaktif, dan indikator loading
- **Label**: Posisi yang jelas dan indikator bidang wajib
- **Pesan error**: Gaya error yang terlihat dan pesan yang membantu

#### Navigasi
- **Header**: Area navigasi yang bersih dan bermerk
- **Tautan**: Efek hover yang jelas dan indikator aktif
- **Logo/Judul**: Elemen branding yang khas

#### Area Konten
- **Bagian**: Pemisahan visual yang jelas antara area yang berbeda
- **Kartu**: Jika menggunakan tata letak berbasis kartu, tambahkan bayangan dan border
- **Latar belakang**: Penggunaan ruang putih yang sesuai dan latar belakang yang halus

### Langkah 4: Fitur Tambahan (Opsional)

**Pertimbangkan untuk menerapkan fitur-fitur canggih berikut:**
- **Mode gelap**: Beralih antara tema terang dan gelap
- **Animasi**: Transisi halus dan interaksi mikro
- **Status loading**: Umpan balik visual selama pengiriman formulir
- **Gambar responsif**: Gambar yang dioptimalkan untuk berbagai ukuran layar

## Inspirasi Desain

**Karakteristik aplikasi perbankan modern:**
- **Desain yang bersih dan minimalis** dengan banyak ruang putih
- **Skema warna profesional** (biru, hijau, atau netral yang elegan)
- **Hierarki visual yang jelas** dengan tombol call-to-action yang menonjol
- **Rasio kontras yang dapat diakses** sesuai pedoman WCAG
- **Tata letak responsif** yang berfungsi di semua perangkat

## Persyaratan Teknis

### Organisasi CSS
```css
/* 1. CSS Custom Properties (Variables) */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* Add more variables */
}

/* 2. Base Styles */
/* Reset, typography, general elements */

/* 3. Layout */
/* Grid, flexbox, positioning */

/* 4. Components */
/* Forms, buttons, cards */

/* 5. Utilities */
/* Helper classes, responsive utilities */

/* 6. Media Queries */
/* Responsive breakpoints */
```


### Persyaratan Aksesibilitas
- **Kontras warna**: Pastikan rasio minimal 4.5:1 untuk teks normal
- **Indikator fokus**: Status fokus yang terlihat untuk navigasi keyboard
- **Label formulir**: Terhubung dengan benar ke input
- **Desain responsif**: Dapat digunakan pada layar dengan lebar 320px hingga 1920px

## Rubrik Penilaian

| Kriteria | Unggul (A) | Cukup Baik (B) | Berkembang (C) | Perlu Perbaikan (F) |
|----------|------------|----------------|----------------|---------------------|
| **Sistem Desain** | Menerapkan sistem desain yang komprehensif dengan warna, tipografi, dan spasi yang konsisten di seluruh aplikasi | Menggunakan gaya yang konsisten dengan pola desain yang jelas dan hierarki visual yang baik | Gaya dasar diterapkan dengan beberapa masalah konsistensi atau elemen desain yang hilang | Gaya minimal dengan pilihan desain yang tidak konsisten atau bertentangan |
| **Pengalaman Pengguna** | Membuat antarmuka yang intuitif dan profesional dengan kegunaan dan daya tarik visual yang sangat baik | Memberikan pengalaman pengguna yang baik dengan navigasi yang jelas dan konten yang mudah dibaca | Kegunaan dasar dengan beberapa perbaikan UX yang diperlukan | Kegunaan buruk, sulit dinavigasi atau dibaca |
| **Implementasi Teknis** | Menggunakan teknik CSS modern, struktur kode yang terorganisir, dan mengikuti praktik terbaik | Menerapkan CSS secara efektif dengan organisasi yang baik dan teknik yang sesuai | CSS berfungsi dengan benar tetapi mungkin kurang terorganisir atau menggunakan pendekatan modern | Implementasi CSS yang buruk dengan masalah teknis atau kompatibilitas browser |
| **Desain Responsif** | Desain responsif sepenuhnya yang berfungsi dengan baik di semua ukuran perangkat | Responsif yang baik dengan masalah kecil pada beberapa ukuran layar | Implementasi responsif dasar dengan beberapa masalah tata letak | Tidak responsif atau masalah signifikan pada perangkat seluler |
| **Aksesibilitas** | Memenuhi pedoman WCAG dengan navigasi keyboard yang sangat baik dan dukungan pembaca layar | Praktik aksesibilitas yang baik dengan kontras dan indikator fokus yang sesuai | Pertimbangan aksesibilitas dasar dengan beberapa elemen yang hilang | Aksesibilitas buruk, sulit bagi pengguna dengan disabilitas |

## Panduan Pengiriman

**Sertakan dalam pengiriman Anda:**
- **styles.css**: Stylesheet lengkap Anda
- **HTML yang diperbarui**: Modifikasi HTML yang Anda buat
- **Screenshot**: Gambar yang menunjukkan desain Anda di desktop dan perangkat seluler
- **README**: Deskripsi singkat tentang pilihan desain Anda dan palet warna

**Poin bonus untuk:**
- **Properti kustom CSS** untuk tema yang mudah dikelola
- **Fitur CSS canggih** seperti Grid, Flexbox, atau animasi CSS
- **Pertimbangan performa** seperti CSS yang dioptimalkan dan ukuran file minimal
- **Pengujian lintas-browser** untuk memastikan kompatibilitas di berbagai browser

> 💡 **Tips Profesional**: Mulailah dengan desain untuk perangkat seluler terlebih dahulu, lalu tingkatkan untuk layar yang lebih besar. Pendekatan mobile-first ini memastikan aplikasi Anda berfungsi dengan baik di semua perangkat dan mengikuti praktik terbaik pengembangan web modern.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang timbul dari penggunaan terjemahan ini.