<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bee6762d4092a13fc7c338814963f980",
  "translation_date": "2025-10-24T14:08:35+00:00",
  "source_file": "3-terrarium/2-intro-to-css/assignment.md",
  "language_code": "id"
}
-->
# Tugas Refactoring CSS

## Tujuan

Ubah proyek terrarium Anda untuk menggunakan teknik tata letak CSS modern! Refactor pendekatan posisi absolut saat ini untuk menerapkan **Flexbox** atau **CSS Grid** agar desain lebih mudah dikelola dan responsif. Tugas ini menantang Anda untuk menerapkan standar CSS modern sambil tetap mempertahankan daya tarik visual dari terrarium Anda.

Memahami kapan dan bagaimana menggunakan metode tata letak yang berbeda adalah keterampilan penting dalam pengembangan web modern. Latihan ini menjembatani teknik posisi tradisional dengan sistem tata letak CSS kontemporer.

## Instruksi Tugas

### Fase 1: Analisis dan Perencanaan
1. **Tinjau kode terrarium Anda saat ini** - Identifikasi elemen mana yang saat ini menggunakan posisi absolut
2. **Pilih metode tata letak Anda** - Tentukan apakah Flexbox atau CSS Grid lebih sesuai dengan tujuan desain Anda
3. **Buat sketsa struktur tata letak baru Anda** - Rencanakan bagaimana kontainer dan elemen tanaman akan diatur

### Fase 2: Implementasi
1. **Buat versi baru** dari proyek terrarium Anda di folder terpisah
2. **Perbarui struktur HTML** sesuai kebutuhan untuk mendukung metode tata letak yang Anda pilih
3. **Refactor CSS** untuk menggunakan Flexbox atau CSS Grid sebagai pengganti posisi absolut
4. **Pertahankan konsistensi visual** - Pastikan tanaman dan toples terrarium tetap berada di posisi yang sama
5. **Terapkan perilaku responsif** - Tata letak Anda harus beradaptasi dengan baik pada berbagai ukuran layar

### Fase 3: Pengujian dan Dokumentasi
1. **Pengujian lintas browser** - Pastikan desain Anda berfungsi di Chrome, Firefox, Edge, dan Safari
2. **Pengujian responsif** - Periksa tata letak Anda di layar ponsel, tablet, dan desktop
3. **Dokumentasi** - Tambahkan komentar pada CSS Anda yang menjelaskan pilihan tata letak Anda
4. **Screenshot** - Ambil gambar terrarium Anda di berbagai browser dan ukuran layar

## Persyaratan Teknis

### Implementasi Tata Letak
- **Pilih SATU**: Terapkan Flexbox ATAU CSS Grid (bukan keduanya untuk elemen yang sama)
- **Desain Responsif**: Gunakan unit relatif (`rem`, `em`, `%`, `vw`, `vh`) alih-alih piksel tetap
- **Aksesibilitas**: Pertahankan struktur HTML semantik yang benar dan teks alt
- **Kualitas Kode**: Gunakan konvensi penamaan yang konsisten dan susun CSS secara logis

### Fitur CSS Modern yang Harus Disertakan
```css
/* Example Flexbox approach */
.terrarium-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.plant-containers {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

/* Example Grid approach */
.terrarium-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  gap: 1rem;
}
```

### Persyaratan Dukungan Browser
- **Chrome/Edge**: 2 versi terbaru
- **Firefox**: 2 versi terbaru  
- **Safari**: 2 versi terbaru
- **Browser seluler**: iOS Safari, Chrome Mobile

## Hasil yang Diharapkan

1. **File HTML yang diperbarui** dengan struktur semantik yang lebih baik
2. **File CSS yang telah di-refactor** menggunakan teknik tata letak modern
3. **Koleksi screenshot** yang menunjukkan kompatibilitas lintas browser:
   - Tampilan desktop (1920x1080)
   - Tampilan tablet (768x1024) 
   - Tampilan ponsel (375x667)
   - Setidaknya 2 browser yang berbeda
4. **File README.md** yang mendokumentasikan:
   - Pilihan tata letak Anda (Flexbox vs Grid) dan alasannya
   - Tantangan yang dihadapi selama refactoring
   - Catatan kompatibilitas browser
   - Instruksi untuk menjalankan kode Anda

## Rubrik Penilaian

| Kriteria | Unggul (4) | Mahir (3) | Berkembang (2) | Pemula (1) |
|----------|------------|-----------|----------------|------------|
| **Implementasi Tata Letak** | Penggunaan Flexbox/Grid yang sangat baik dengan fitur canggih; sepenuhnya responsif | Implementasi yang benar dengan perilaku responsif yang baik | Implementasi dasar dengan masalah responsif kecil | Implementasi tata letak yang tidak lengkap atau salah |
| **Kualitas Kode** | CSS yang bersih, terorganisir dengan baik, komentar yang bermakna, dan penamaan yang konsisten | Organisasi yang baik dengan beberapa komentar | Organisasi yang memadai dengan sedikit komentar | Organisasi yang buruk; sulit dipahami |
| **Kompatibilitas Lintas Browser** | Konsistensi sempurna di semua browser yang diwajibkan dengan screenshot | Kompatibilitas yang baik dengan perbedaan kecil yang didokumentasikan | Beberapa masalah kompatibilitas yang tidak merusak fungsi | Masalah kompatibilitas besar atau pengujian yang hilang |
| **Desain Responsif** | Pendekatan mobile-first yang luar biasa dengan breakpoint yang mulus | Perilaku responsif yang baik dengan breakpoint yang sesuai | Fitur responsif dasar dengan beberapa masalah tata letak | Perilaku responsif yang terbatas atau rusak |
| **Dokumentasi** | README yang komprehensif dengan penjelasan dan wawasan yang mendetail | Dokumentasi yang baik mencakup semua elemen yang diwajibkan | Dokumentasi dasar dengan penjelasan minimal | Dokumentasi yang tidak lengkap atau hilang |

## Sumber Daya yang Berguna

### Panduan Metode Tata Letak
- 📖 [Panduan Lengkap Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [Panduan Lengkap CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - Pilih Alat yang Tepat](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### Alat Pengujian Browser
- 🛠️ [Mode Responsif DevTools Browser](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - Dukungan Fitur](https://caniuse.com/)
- 🛠️ [BrowserStack - Pengujian Lintas Browser](https://www.browserstack.com/)

### Alat Kualitas Kode
- ✅ [Validator CSS](https://jigsaw.w3.org/css-validator/)
- ✅ [Validator HTML](https://validator.w3.org/)
- ✅ [Pemeriksa Kontras WebAIM](https://webaim.org/resources/contrastchecker/)

## Tantangan Bonus

🌟 **Tata Letak Lanjutan**: Terapkan Flexbox DAN Grid di bagian desain yang berbeda  
🌟 **Integrasi Animasi**: Tambahkan transisi atau animasi CSS yang sesuai dengan tata letak baru Anda  
🌟 **Mode Gelap**: Terapkan pengalih tema berbasis properti kustom CSS  
🌟 **Kueri Kontainer**: Gunakan teknik kueri kontainer modern untuk responsivitas tingkat komponen  

> 💡 **Ingat**: Tujuannya bukan hanya membuatnya berfungsi, tetapi memahami MENGAPA metode tata letak yang Anda pilih adalah solusi terbaik untuk tantangan desain ini!

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang keliru yang timbul dari penggunaan terjemahan ini.