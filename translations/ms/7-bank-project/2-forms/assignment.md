<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2025-10-24T14:37:12+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "ms"
}
-->
# Gaya Aplikasi Bank Anda dengan CSS Moden

## Gambaran Projek

Ubah aplikasi perbankan anda yang berfungsi menjadi aplikasi web yang menarik dan profesional menggunakan teknik CSS moden. Anda akan mencipta sistem reka bentuk yang kohesif untuk meningkatkan pengalaman pengguna sambil mengekalkan prinsip reka bentuk yang responsif dan mesra akses.

Tugasan ini mencabar anda untuk menerapkan corak reka bentuk web kontemporari, melaksanakan identiti visual yang konsisten, dan mencipta antara muka yang menarik serta mudah untuk dinavigasi oleh pengguna.

## Arahan

### Langkah 1: Sediakan Stylesheet Anda

**Cipta asas CSS anda:**

1. **Cipta** fail baru bernama `styles.css` dalam direktori projek anda
2. **Pautkan** stylesheet dalam fail `index.html` anda:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Mulakan** dengan reset CSS dan tetapan moden:
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

### Langkah 2: Keperluan Sistem Reka Bentuk

**Laksanakan elemen reka bentuk penting ini:**

#### Palet Warna
- **Warna utama**: Pilih warna profesional untuk butang dan sorotan
- **Warna sekunder**: Warna pelengkap untuk aksen dan tindakan sekunder
- **Warna neutral**: Kelabu untuk teks, sempadan, dan latar belakang
- **Warna kejayaan/kesalahan**: Hijau untuk keadaan berjaya, merah untuk kesalahan

#### Tipografi
- **Hierarki tajuk**: Perbezaan jelas antara elemen H1, H2, dan H3
- **Teks badan**: Saiz fon yang boleh dibaca (minimum 16px) dan ketinggian baris yang sesuai
- **Label borang**: Gaya teks yang jelas dan mesra akses

#### Susun Atur dan Jarak
- **Jarak konsisten**: Gunakan skala jarak (8px, 16px, 24px, 32px)
- **Sistem grid**: Susun atur teratur untuk borang dan bahagian kandungan
- **Reka bentuk responsif**: Pendekatan berasaskan mudah alih dengan titik pecah

### Langkah 3: Gaya Komponen

**Gayakan komponen spesifik ini:**

#### Borang
- **Medan input**: Sempadan profesional, keadaan fokus, dan gaya pengesahan
- **Butang**: Kesan hover, keadaan tidak aktif, dan indikator pemuatan
- **Label**: Kedudukan yang jelas dan indikator medan wajib
- **Mesej kesalahan**: Gaya kesalahan yang jelas dan mesej yang membantu

#### Navigasi
- **Header**: Kawasan navigasi yang bersih dan berjenama
- **Pautan**: Kesan hover yang jelas dan indikator aktif
- **Logo/Tajuk**: Elemen penjenamaan yang tersendiri

#### Kawasan Kandungan
- **Bahagian**: Pemisahan visual yang jelas antara kawasan yang berbeza
- **Kad**: Jika menggunakan susun atur berasaskan kad, sertakan bayang dan sempadan
- **Latar belakang**: Penggunaan ruang putih dan latar belakang yang halus

### Langkah 4: Ciri Tambahan (Pilihan)

**Pertimbangkan untuk melaksanakan ciri-ciri canggih ini:**
- **Mod gelap**: Tukar antara tema terang dan gelap
- **Animasi**: Peralihan halus dan interaksi mikro
- **Keadaan pemuatan**: Maklum balas visual semasa penghantaran borang
- **Imej responsif**: Imej yang dioptimumkan untuk saiz skrin yang berbeza

## Inspirasi Reka Bentuk

**Ciri-ciri aplikasi perbankan moden:**
- **Reka bentuk yang bersih dan minimal** dengan banyak ruang putih
- **Skema warna profesional** (biru, hijau, atau neutral yang sofistikated)
- **Hierarki visual yang jelas** dengan butang panggilan tindakan yang menonjol
- **Nisbah kontras yang mesra akses** memenuhi garis panduan WCAG
- **Susun atur responsif** yang berfungsi pada semua peranti

## Keperluan Teknikal

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

### Keperluan Aksesibiliti
- **Kontras warna**: Pastikan nisbah sekurang-kurangnya 4.5:1 untuk teks biasa
- **Indikator fokus**: Keadaan fokus yang jelas untuk navigasi papan kekunci
- **Label borang**: Dikaitkan dengan input dengan betul
- **Reka bentuk responsif**: Boleh digunakan pada skrin dari lebar 320px hingga 1920px

## Rubrik Penilaian

| Kriteria | Cemerlang (A) | Mahir (B) | Sedang Membangun (C) | Perlu Penambahbaikan (F) |
|----------|---------------|----------------|----------------|----------------------|
| **Sistem Reka Bentuk** | Melaksanakan sistem reka bentuk yang komprehensif dengan warna, tipografi, dan jarak yang konsisten | Menggunakan gaya yang konsisten dengan corak reka bentuk yang jelas dan hierarki visual yang baik | Gaya asas diterapkan dengan beberapa isu konsistensi atau elemen reka bentuk yang hilang | Gaya minimum dengan pilihan reka bentuk yang tidak konsisten atau bercanggah |
| **Pengalaman Pengguna** | Mencipta antara muka profesional yang intuitif dengan kebolehgunaan dan daya tarikan visual yang sangat baik | Memberikan pengalaman pengguna yang baik dengan navigasi yang jelas dan kandungan yang mudah dibaca | Kebolehgunaan asas dengan beberapa penambahbaikan UX diperlukan | Kebolehgunaan yang lemah, sukar untuk dinavigasi atau dibaca |
| **Pelaksanaan Teknikal** | Menggunakan teknik CSS moden, struktur kod yang teratur, dan mengikuti amalan terbaik | Melaksanakan CSS dengan berkesan dengan organisasi yang baik dan teknik yang sesuai | CSS berfungsi dengan betul tetapi mungkin kurang teratur atau pendekatan moden | Pelaksanaan CSS yang lemah dengan isu teknikal atau masalah keserasian pelayar |
| **Reka Bentuk Responsif** | Reka bentuk responsif sepenuhnya yang berfungsi dengan baik pada semua saiz peranti | Tingkah laku responsif yang baik dengan isu kecil pada beberapa saiz skrin | Pelaksanaan responsif asas dengan beberapa isu susun atur | Tidak responsif atau masalah besar pada peranti mudah alih |
| **Aksesibiliti** | Memenuhi garis panduan WCAG dengan navigasi papan kekunci dan sokongan pembaca skrin yang sangat baik | Amalan aksesibiliti yang baik dengan kontras dan indikator fokus yang sesuai | Pertimbangan aksesibiliti asas dengan beberapa elemen yang hilang | Aksesibiliti yang lemah, sukar untuk pengguna dengan kecacatan |

## Garis Panduan Penyerahan

**Sertakan dalam penyerahan anda:**
- **styles.css**: Stylesheet lengkap anda
- **HTML yang dikemas kini**: Sebarang pengubahsuaian HTML yang anda buat
- **Tangkap layar**: Imej yang menunjukkan reka bentuk anda pada desktop dan mudah alih
- **README**: Penerangan ringkas tentang pilihan reka bentuk anda dan palet warna

**Mata bonus untuk:**
- **Sifat CSS tersuai** untuk tema yang mudah diselenggara
- **Ciri CSS canggih** seperti Grid, Flexbox, atau animasi CSS
- **Pertimbangan prestasi** seperti CSS yang dioptimumkan dan saiz fail yang minimum
- **Ujian pelayar silang** memastikan keserasian di pelbagai pelayar

> 💡 **Tip Pro**: Mulakan dengan reka bentuk mudah alih terlebih dahulu, kemudian tingkatkan untuk skrin yang lebih besar. Pendekatan berasaskan mudah alih ini memastikan aplikasi anda berfungsi dengan baik pada semua peranti dan mengikuti amalan terbaik pembangunan web moden.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.