# Tugasan Penstrukturan Semula CSS

## Objektif

Ubah projek terrarium anda untuk menggunakan teknik susun atur CSS moden! Struktur semula pendekatan kedudukan mutlak semasa untuk melaksanakan **Flexbox** atau **CSS Grid** bagi reka bentuk yang lebih mudah diselenggara dan responsif. Tugasan ini mencabar anda untuk menerapkan piawaian CSS moden sambil mengekalkan daya tarikan visual terrarium anda.

Memahami bila dan bagaimana menggunakan kaedah susun atur yang berbeza adalah kemahiran penting dalam pembangunan web moden. Latihan ini menghubungkan teknik kedudukan tradisional dengan sistem susun atur CSS kontemporari.

## Arahan Tugasan

### Fasa 1: Analisis dan Perancangan
1. **Semak kod terrarium semasa anda** - Kenal pasti elemen yang sedang menggunakan kedudukan mutlak
2. **Pilih kaedah susun atur anda** - Tentukan sama ada Flexbox atau CSS Grid lebih sesuai dengan matlamat reka bentuk anda
3. **Lakar struktur susun atur baharu anda** - Rancang bagaimana bekas dan elemen tumbuhan akan diatur

### Fasa 2: Pelaksanaan
1. **Buat versi baharu** projek terrarium anda dalam folder berasingan
2. **Kemas kini struktur HTML** mengikut keperluan untuk menyokong kaedah susun atur yang dipilih
3. **Struktur semula CSS** untuk menggunakan Flexbox atau CSS Grid dan bukannya kedudukan mutlak
4. **Kekalkan konsistensi visual** - Pastikan tumbuhan dan balang terrarium muncul di kedudukan yang sama
5. **Laksanakan tingkah laku responsif** - Susun atur anda harus menyesuaikan diri dengan baik pada pelbagai saiz skrin

### Fasa 3: Ujian dan Dokumentasi
1. **Ujian pelayar silang** - Pastikan reka bentuk anda berfungsi dalam Chrome, Firefox, Edge, dan Safari
2. **Ujian responsif** - Periksa susun atur anda pada skrin mudah alih, tablet, dan desktop
3. **Dokumentasi** - Tambahkan komen pada CSS anda yang menerangkan pilihan susun atur anda
4. **Tangkap layar** - Ambil gambar terrarium anda dalam pelbagai pelayar dan saiz skrin

## Keperluan Teknikal

### Pelaksanaan Susun Atur
- **Pilih SATU**: Laksanakan sama ada Flexbox ATAU CSS Grid (bukan kedua-duanya untuk elemen yang sama)
- **Reka Bentuk Responsif**: Gunakan unit relatif (`rem`, `em`, `%`, `vw`, `vh`) dan bukannya piksel tetap
- **Kebolehaksesan**: Kekalkan struktur HTML semantik yang betul dan teks alt
- **Kualiti Kod**: Gunakan konvensyen penamaan yang konsisten dan susun CSS secara logik

### Ciri CSS Moden untuk Disertakan
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

### Keperluan Sokongan Pelayar
- **Chrome/Edge**: 2 versi terkini
- **Firefox**: 2 versi terkini  
- **Safari**: 2 versi terkini
- **Pelayar mudah alih**: iOS Safari, Chrome Mobile

## Hasil Tugasan

1. **Fail HTML yang dikemas kini** dengan struktur semantik yang lebih baik
2. **Fail CSS yang disusun semula** menggunakan teknik susun atur moden
3. **Koleksi tangkap layar** yang menunjukkan keserasian pelayar silang:
   - Paparan desktop (1920x1080)
   - Paparan tablet (768x1024) 
   - Paparan mudah alih (375x667)
   - Sekurang-kurangnya 2 pelayar berbeza
4. **Fail README.md** yang mendokumentasikan:
   - Pilihan susun atur anda (Flexbox vs Grid) dan alasan
   - Cabaran yang dihadapi semasa penstrukturan semula
   - Nota keserasian pelayar
   - Arahan untuk menjalankan kod anda

## Rubrik Penilaian

| Kriteria | Cemerlang (4) | Mahir (3) | Sedang Meningkat (2) | Permulaan (1) |
|----------|---------------|----------------|---------------|---------------|
| **Pelaksanaan Susun Atur** | Penggunaan Flexbox/Grid yang mahir dengan ciri lanjutan; sepenuhnya responsif | Pelaksanaan yang betul dengan tingkah laku responsif yang baik | Pelaksanaan asas dengan isu responsif kecil | Pelaksanaan susun atur yang tidak lengkap atau salah |
| **Kualiti Kod** | CSS yang bersih, teratur dengan komen bermakna dan penamaan konsisten | Organisasi yang baik dengan beberapa komen | Organisasi yang memadai dengan komen minimum | Organisasi yang lemah; sukar difahami |
| **Keserasian Pelayar Silang** | Konsistensi sempurna di semua pelayar yang diperlukan dengan tangkap layar | Keserasian yang baik dengan perbezaan kecil yang didokumentasikan | Beberapa isu keserasian yang tidak merosakkan fungsi | Masalah keserasian utama atau ujian yang hilang |
| **Reka Bentuk Responsif** | Pendekatan mobile-first yang luar biasa dengan titik pecah yang lancar | Tingkah laku responsif yang baik dengan titik pecah yang sesuai | Ciri responsif asas dengan beberapa isu susun atur | Tingkah laku responsif yang terhad atau rosak |
| **Dokumentasi** | README yang komprehensif dengan penjelasan dan wawasan terperinci | Dokumentasi yang baik merangkumi semua elemen yang diperlukan | Dokumentasi asas dengan penjelasan minimum | Dokumentasi yang tidak lengkap atau hilang |

## Sumber Berguna

### Panduan Kaedah Susun Atur
- 📖 [Panduan Lengkap Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [Panduan Lengkap CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - Pilih Alat yang Tepat](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### Alat Ujian Pelayar
- 🛠️ [Mod Responsif DevTools Pelayar](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - Sokongan Ciri](https://caniuse.com/)
- 🛠️ [BrowserStack - Ujian Pelayar Silang](https://www.browserstack.com/)

### Alat Kualiti Kod
- ✅ [Validator CSS](https://jigsaw.w3.org/css-validator/)
- ✅ [Validator HTML](https://validator.w3.org/)
- ✅ [Pemeriksa Kontras WebAIM](https://webaim.org/resources/contrastchecker/)

## Cabaran Bonus

🌟 **Susun Atur Lanjutan**: Laksanakan kedua-dua Flexbox DAN Grid di bahagian reka bentuk yang berbeza  
🌟 **Integrasi Animasi**: Tambahkan peralihan atau animasi CSS yang berfungsi dengan susun atur baharu anda  
🌟 **Mod Gelap**: Laksanakan penukar tema berdasarkan sifat tersuai CSS  
🌟 **Pertanyaan Kontena**: Gunakan teknik pertanyaan kontena moden untuk responsif pada tahap komponen  

> 💡 **Ingat**: Matlamatnya bukan hanya untuk membuatnya berfungsi, tetapi untuk memahami MENGAPA kaedah susun atur yang dipilih adalah penyelesaian terbaik untuk cabaran reka bentuk ini!

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.