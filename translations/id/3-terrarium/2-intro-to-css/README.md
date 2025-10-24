<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92c4431eac70670b0450b02c1d11279a",
  "translation_date": "2025-10-24T14:08:00+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "id"
}
-->
# Proyek Terrarium Bagian 2: Pengantar CSS

![Pengantar CSS](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.id.png)
> Sketchnote oleh [Tomomi Imura](https://twitter.com/girlie_mac)

Ingat bagaimana terrarium HTML Anda terlihat cukup sederhana? CSS adalah tempat kita mengubah struktur polos itu menjadi sesuatu yang menarik secara visual.

Jika HTML seperti membangun kerangka rumah, maka CSS adalah segala sesuatu yang membuatnya terasa seperti rumah - warna cat, pengaturan furnitur, pencahayaan, dan bagaimana ruangan-ruangan saling terhubung. Pikirkan bagaimana Istana Versailles awalnya hanya sebuah pondok berburu sederhana, tetapi perhatian yang cermat terhadap dekorasi dan tata letak mengubahnya menjadi salah satu bangunan paling megah di dunia.

Hari ini, kita akan mengubah terrarium Anda dari fungsional menjadi lebih rapi. Anda akan belajar bagaimana memposisikan elemen dengan tepat, membuat tata letak yang responsif terhadap berbagai ukuran layar, dan menciptakan daya tarik visual yang membuat situs web menarik.

Pada akhir pelajaran ini, Anda akan melihat bagaimana penataan CSS yang strategis dapat meningkatkan proyek Anda secara dramatis. Mari tambahkan gaya pada terrarium Anda.

## Kuis Pra-Pelajaran

[Kuis pra-pelajaran](https://ff-quizzes.netlify.app/web/quiz/17)

## Memulai dengan CSS

CSS sering dianggap hanya sebagai "membuat sesuatu terlihat cantik," tetapi sebenarnya memiliki tujuan yang jauh lebih luas. CSS seperti menjadi sutradara film - Anda mengontrol tidak hanya bagaimana semuanya terlihat, tetapi juga bagaimana semuanya bergerak, merespons interaksi, dan beradaptasi dengan berbagai situasi.

CSS modern sangatlah canggih. Anda dapat menulis kode yang secara otomatis menyesuaikan tata letak untuk ponsel, tablet, dan komputer desktop. Anda dapat membuat animasi halus yang mengarahkan perhatian pengguna ke tempat yang diperlukan. Hasilnya bisa sangat mengesankan ketika semuanya bekerja bersama-sama.

> 💡 **Tips Profesional**: CSS terus berkembang dengan fitur dan kemampuan baru. Selalu periksa [CanIUse.com](https://caniuse.com) untuk memverifikasi dukungan browser terhadap fitur CSS terbaru sebelum menggunakannya dalam proyek produksi.

**Inilah yang akan kita capai dalam pelajaran ini:**
- **Membuat** desain visual lengkap untuk terrarium Anda menggunakan teknik CSS modern
- **Mengeksplorasi** konsep dasar seperti cascade, inheritance, dan CSS selectors
- **Mengimplementasikan** strategi tata letak dan posisi yang responsif
- **Membangun** wadah terrarium menggunakan bentuk dan gaya CSS

### Prasyarat

Anda harus sudah menyelesaikan struktur HTML untuk terrarium Anda dari pelajaran sebelumnya dan siap untuk diberi gaya.

> 📺 **Sumber Video**: Lihat video panduan yang bermanfaat ini
>
> [![Tutorial Dasar CSS](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Menyiapkan File CSS Anda

Sebelum kita mulai memberi gaya, kita perlu menghubungkan CSS ke HTML kita. Koneksi ini memberi tahu browser di mana menemukan instruksi gaya untuk terrarium kita.

Di folder terrarium Anda, buat file baru bernama `style.css`, lalu tautkan ke dokumen HTML Anda di bagian `<head>`:

```html
<link rel="stylesheet" href="./style.css" />
```

**Inilah yang dilakukan kode ini:**
- **Membuat** koneksi antara file HTML dan CSS Anda
- **Memberitahu** browser untuk memuat dan menerapkan gaya dari `style.css`
- **Menggunakan** atribut `rel="stylesheet"` untuk menentukan bahwa ini adalah file CSS
- **Merujuk** jalur file dengan `href="./style.css"`

## Memahami CSS Cascade

Pernah bertanya-tanya mengapa CSS disebut "Cascading" Style Sheets? Gaya mengalir turun seperti air terjun, dan kadang-kadang mereka saling bertentangan.

Pertimbangkan bagaimana struktur komando militer bekerja - perintah umum mungkin mengatakan "semua pasukan memakai hijau," tetapi perintah khusus untuk unit Anda mungkin mengatakan "pakai seragam biru untuk upacara." Instruksi yang lebih spesifik memiliki prioritas. CSS mengikuti logika serupa, dan memahami hierarki ini membuat debugging jauh lebih mudah.

### Bereksperimen dengan Prioritas Cascade

Mari kita lihat cascade dalam aksi dengan membuat konflik gaya. Pertama, tambahkan gaya inline ke tag `<h1>` Anda:

```html
<h1 style="color: red">My Terrarium</h1>
```

**Apa yang dilakukan kode ini:**
- **Menerapkan** warna merah langsung ke elemen `<h1>` menggunakan gaya inline
- **Menggunakan** atribut `style` untuk menyematkan CSS langsung di HTML
- **Membuat** aturan gaya dengan prioritas tertinggi untuk elemen spesifik ini

Selanjutnya, tambahkan aturan ini ke file `style.css` Anda:

```css
h1 {
  color: blue;
}
```

**Dalam kode di atas, kita telah:**
- **Mendefinisikan** aturan CSS yang menargetkan semua elemen `<h1>`
- **Mengatur** warna teks menjadi biru menggunakan stylesheet eksternal
- **Membuat** aturan prioritas lebih rendah dibandingkan gaya inline

✅ **Cek Pengetahuan**: Warna mana yang ditampilkan di aplikasi web Anda? Mengapa warna itu menang? Bisakah Anda memikirkan skenario di mana Anda ingin mengganti gaya?

> 💡 **Urutan Prioritas CSS (tertinggi ke terendah):**
> 1. **Gaya inline** (atribut style)
> 2. **IDs** (#myId)
> 3. **Classes** (.myClass) dan atribut
> 4. **Selector elemen** (h1, div, p)
> 5. **Default browser**

## CSS Inheritance dalam Aksi

Pewarisan CSS bekerja seperti genetika - elemen mewarisi properti tertentu dari elemen induknya. Jika Anda mengatur font family pada elemen body, semua teks di dalamnya secara otomatis menggunakan font yang sama. Ini mirip dengan bagaimana ciri khas rahang keluarga Habsburg muncul di generasi berikutnya tanpa ditentukan untuk setiap individu.

Namun, tidak semuanya diwarisi. Gaya teks seperti font dan warna memang diwarisi, tetapi properti tata letak seperti margin dan border tidak. Sama seperti anak-anak mungkin mewarisi ciri fisik tetapi tidak pilihan mode orang tua mereka.

### Mengamati Pewarisan Font

Mari kita lihat pewarisan dalam aksi dengan mengatur font family pada elemen `<body>`:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

**Memecah apa yang terjadi di sini:**
- **Mengatur** font family untuk seluruh halaman dengan menargetkan elemen `<body>`
- **Menggunakan** tumpukan font dengan opsi cadangan untuk kompatibilitas browser yang lebih baik
- **Menerapkan** font sistem modern yang terlihat bagus di berbagai sistem operasi
- **Memastikan** semua elemen anak mewarisi font ini kecuali secara khusus diganti

Buka alat pengembang browser Anda (F12), navigasikan ke tab Elemen, dan inspeksi elemen `<h1>` Anda. Anda akan melihat bahwa elemen tersebut mewarisi font family dari body:

![font yang diwarisi](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.id.png)

✅ **Waktu Eksperimen**: Cobalah mengatur properti lain yang dapat diwarisi pada `<body>` seperti `color`, `line-height`, atau `text-align`. Apa yang terjadi pada heading dan elemen lainnya?

> 📝 **Properti yang Dapat Diwarisi Termasuk**: `color`, `font-family`, `font-size`, `line-height`, `text-align`, `visibility`
>
> **Properti yang Tidak Dapat Diwarisi Termasuk**: `margin`, `padding`, `border`, `width`, `height`, `position`

## Menguasai CSS Selectors

CSS selectors adalah cara Anda menargetkan elemen tertentu untuk diberi gaya. Mereka bekerja seperti memberikan petunjuk yang tepat - alih-alih mengatakan "rumah," Anda mungkin mengatakan "rumah biru dengan pintu merah di Jalan Maple."

CSS menyediakan berbagai cara untuk menjadi spesifik, dan memilih selector yang tepat seperti memilih alat yang sesuai untuk tugas tersebut. Kadang-kadang Anda perlu memberi gaya pada setiap pintu di lingkungan, dan kadang-kadang hanya satu pintu tertentu.

### Element Selectors (Tag)

Element selectors menargetkan elemen HTML berdasarkan nama tag mereka. Mereka sempurna untuk mengatur gaya dasar yang berlaku secara luas di seluruh halaman Anda:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: #3a241d;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
```

**Memahami gaya ini:**
- **Mengatur** tipografi yang konsisten di seluruh halaman dengan selector `body`
- **Menghapus** margin dan padding default browser untuk kontrol yang lebih baik
- **Memberi gaya** semua elemen heading dengan warna, alignment, dan spasi
- **Menggunakan** unit `rem` untuk ukuran font yang dapat diskalakan dan aksesibel

Sementara element selectors bekerja dengan baik untuk gaya umum, Anda memerlukan selector yang lebih spesifik untuk memberi gaya pada komponen individual seperti tanaman di terrarium Anda.

### ID Selectors untuk Elemen Unik

ID selectors menggunakan simbol `#` dan menargetkan elemen dengan atribut `id` tertentu. Karena ID harus unik di halaman, mereka sempurna untuk memberi gaya pada elemen khusus seperti wadah tanaman kiri dan kanan.

Mari kita buat gaya untuk wadah sisi terrarium kita tempat tanaman akan ditempatkan:

```css
#left-container {
  background-color: #f5f5f5;
  width: 15%;
  left: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#right-container {
  background-color: #f5f5f5;
  width: 15%;
  right: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}
```

**Inilah yang dicapai kode ini:**
- **Memposisikan** wadah di tepi kiri dan kanan menggunakan posisi `absolute`
- **Menggunakan** unit `vh` (viewport height) untuk tinggi responsif yang beradaptasi dengan ukuran layar
- **Menerapkan** `box-sizing: border-box` sehingga padding termasuk dalam total lebar
- **Menghapus** unit `px` yang tidak perlu dari nilai nol untuk kode yang lebih bersih
- **Mengatur** warna latar belakang yang lembut yang lebih nyaman di mata daripada abu-abu mencolok

✅ **Tantangan Kualitas Kode**: Perhatikan bagaimana CSS ini melanggar prinsip DRY (Don't Repeat Yourself). Bisakah Anda merombaknya menggunakan ID dan class?

**Pendekatan yang Ditingkatkan:**
```html
<div id="left-container" class="container"></div>
<div id="right-container" class="container"></div>
```

```css
.container {
  background-color: #f5f5f5;
  width: 15%;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#left-container {
  left: 0;
}

#right-container {
  right: 0;
}
```

### Class Selectors untuk Gaya yang Dapat Digunakan Kembali

Class selectors menggunakan simbol `.` dan sangat cocok ketika Anda ingin menerapkan gaya yang sama ke beberapa elemen. Tidak seperti ID, class dapat digunakan kembali di seluruh HTML Anda, menjadikannya ideal untuk pola gaya yang konsisten.

Di terrarium kita, setiap tanaman membutuhkan gaya yang serupa tetapi juga membutuhkan posisi individual. Kita akan menggunakan kombinasi class untuk gaya bersama dan ID untuk posisi unik.

**Inilah struktur HTML untuk setiap tanaman:**
```html
<div class="plant-holder">
  <img class="plant" alt="Decorative plant for terrarium" id="plant1" src="../../../../translated_images/plant1.d18b18ffe73da18f8b1ac7aba73b4050af52f4a0c9174aeac464b85123fc2850.id.png" />
</div>
```

**Elemen kunci dijelaskan:**
- **Menggunakan** `class="plant-holder"` untuk gaya wadah yang konsisten di semua tanaman
- **Menerapkan** `class="plant"` untuk gaya dan perilaku gambar bersama
- **Menyertakan** `id="plant1"` yang unik untuk posisi individual dan interaksi JavaScript
- **Memberikan** teks alt deskriptif untuk aksesibilitas pembaca layar

Sekarang tambahkan gaya ini ke file `style.css` Anda:

```css
.plant-holder {
  position: relative;
  height: 13%;
  left: -0.6rem;
}

.plant {
  position: absolute;
  max-width: 150%;
  max-height: 150%;
  z-index: 2;
  transition: transform 0.3s ease;
}

.plant:hover {
  transform: scale(1.05);
}
```

**Memecah gaya ini:**
- **Membuat** posisi relatif untuk wadah tanaman untuk membangun konteks posisi
- **Mengatur** setiap wadah tanaman ke tinggi 13%, memastikan semua tanaman pas secara vertikal tanpa menggulir
- **Menggeser** wadah sedikit ke kiri untuk lebih memusatkan tanaman di dalam wadah mereka
- **Memungkinkan** tanaman untuk berskala responsif dengan properti `max-width` dan `max-height`
- **Menggunakan** `z-index` untuk melapisi tanaman di atas elemen lain di terrarium
- **Menambahkan** efek hover halus dengan transisi CSS untuk interaksi pengguna yang lebih baik

✅ **Berpikir Kritis**: Mengapa kita membutuhkan kedua selector `.plant-holder` dan `.plant`? Apa yang akan terjadi jika kita mencoba menggunakan hanya satu?

> 💡 **Pola Desain**: Wadah (`.plant-holder`) mengontrol tata letak dan posisi, sementara konten (`.plant`) mengontrol tampilan dan skala. Pemisahan ini membuat kode lebih mudah dikelola dan fleksibel.

## Memahami Posisi CSS

Posisi CSS seperti menjadi sutradara panggung untuk sebuah pertunjukan - Anda mengarahkan di mana setiap aktor berdiri dan bagaimana mereka bergerak di sekitar panggung. Beberapa aktor mengikuti formasi standar, sementara yang lain membutuhkan posisi khusus untuk efek dramatis.

Setelah Anda memahami posisi, banyak tantangan tata letak menjadi dapat dikelola. Membutuhkan bilah navigasi yang tetap di atas saat pengguna menggulir? Posisi menangani itu. Ingin tooltip yang muncul di lokasi tertentu? Itu juga posisi.

### Lima Nilai Posisi

| Nilai Posisi | Perilaku | Kasus Penggunaan |
|--------------|----------|------------------|
| `static` | Aliran default, mengabaikan top/left/right/bottom | Tata letak dokumen normal |
| `relative` | Diposisikan relatif terhadap posisi normalnya | Penyesuaian kecil, menciptakan konteks posisi |
| `absolute` | Diposisikan relatif terhadap leluhur yang diposisikan | Penempatan presisi, overlay |
| `fixed` | Diposisikan relatif terhadap viewport | Bilah navigasi, elemen mengambang |
| `sticky` | Beralih antara relatif dan tetap berdasarkan gulir | Header yang tetap saat menggulir |

### Posisi di Terrarium Kita

Terrarium kita menggunakan kombinasi strategi posisi yang strategis untuk menciptakan tata letak yang diinginkan:

```css
/* Container positioning */
.container {
  position: absolute; /* Removes from normal flow */
  /* ... other styles ... */
}

/* Plant holder positioning */
.plant-holder {
  position: relative; /* Creates positioning context */
  /* ... other styles ... */
}

/* Plant positioning */
.plant {
  position: absolute; /* Allows precise placement within holder */
  /* ... other styles ... */
}
```

**Memahami strategi posisi:**
- **Wadah absolut** dihapus dari aliran dokumen normal dan dipasang di tepi layar
- **Wadah tanaman relatif** menciptakan konteks posisi sambil tetap dalam aliran dokumen
- **Tanaman absolut** dapat diposisikan dengan presisi di dalam wadah relatif mereka
- **Kombinasi ini** memungkinkan tanaman untuk ditumpuk secara vertikal sambil dapat diposisikan secara individual

> 🎯 **Mengapa Ini Penting**: Elemen `plant` membutuhkan posisi absolut agar dapat ditarik di pelajaran berikutnya. Posisi absolut menghapus mereka dari aliran tata letak normal, membuat interaksi drag-and-drop menjadi mungkin.

✅ **Waktu Eksperimen**: Cobalah mengubah nilai posisi dan amati hasilnya:
- Apa yang terjadi jika Anda mengubah `.container` dari `absolute` menjadi `relative`?
- Bagaimana tata letak berubah jika `.plant-holder` menggunakan `absolute` alih-alih `relative`?
- Apa yang terjadi ketika Anda mengubah `.plant` menjadi posisi `relative`?

## Membangun Terrarium dengan CSS

Sekarang kita akan membangun toples kaca menggunakan hanya CSS - tanpa gambar atau perangkat lunak grafis.

Menciptakan kaca yang terlihat realistis, bayangan, dan efek kedalaman menggunakan posisi dan transparansi menunjukkan kemampuan visual CSS. Teknik ini mencerminkan bagaimana arsitek dalam gerakan Bauhaus menggunakan bentuk geometris sederhana untuk menciptakan struktur yang kompleks dan indah. Setelah Anda memahami prinsip-prinsip ini, Anda akan mengenali teknik CSS di balik banyak desain web.

### Membuat Komponen Toples Kaca
Mari kita bangun terrarium dalam toples secara bertahap. Setiap bagian menggunakan posisi absolut dan ukuran berbasis persentase untuk desain responsif:

```css
.jar-walls {
  height: 80%;
  width: 60%;
  background: #d1e1df;
  border-radius: 1rem;
  position: absolute;
  bottom: 0.5%;
  left: 20%;
  opacity: 0.5;
  z-index: 1;
  box-shadow: inset 0 0 2rem rgba(0, 0, 0, 0.1);
}

.jar-top {
  width: 50%;
  height: 5%;
  background: #d1e1df;
  position: absolute;
  bottom: 80.5%;
  left: 25%;
  opacity: 0.7;
  z-index: 1;
  border-radius: 0.5rem 0.5rem 0 0;
}

.jar-bottom {
  width: 50%;
  height: 1%;
  background: #d1e1df;
  position: absolute;
  bottom: 0;
  left: 25%;
  opacity: 0.7;
  border-radius: 0 0 0.5rem 0.5rem;
}

.dirt {
  width: 60%;
  height: 5%;
  background: #3a241d;
  position: absolute;
  border-radius: 0 0 1rem 1rem;
  bottom: 1%;
  left: 20%;
  opacity: 0.7;
  z-index: -1;
}
```

**Memahami konstruksi terrarium:**
- **Menggunakan** dimensi berbasis persentase untuk penskalaan responsif di semua ukuran layar
- **Memposisikan** elemen secara absolut untuk menumpuk dan menyelaraskannya dengan tepat
- **Menerapkan** nilai opasitas berbeda untuk menciptakan efek transparansi kaca
- **Menggunakan** layering `z-index` agar tanaman terlihat berada di dalam toples
- **Menambahkan** bayangan kotak halus dan radius tepi yang disempurnakan untuk tampilan yang lebih realistis

### Desain Responsif dengan Persentase

Perhatikan bagaimana semua dimensi menggunakan persentase daripada nilai piksel tetap:

**Mengapa ini penting:**
- **Memastikan** terrarium dapat menyesuaikan proporsional di semua ukuran layar
- **Mempertahankan** hubungan visual antara komponen toples
- **Memberikan** pengalaman yang konsisten dari ponsel hingga monitor desktop besar
- **Memungkinkan** desain beradaptasi tanpa merusak tata letak visual

### Unit CSS dalam Praktik

Kami menggunakan unit `rem` untuk radius tepi, yang skalanya relatif terhadap ukuran font root. Ini menciptakan desain yang lebih mudah diakses dan menghormati preferensi font pengguna. Pelajari lebih lanjut tentang [unit relatif CSS](https://www.w3.org/TR/css-values-3/#font-relative-lengths) di spesifikasi resmi.

✅ **Eksperimen Visual**: Coba ubah nilai-nilai ini dan amati efeknya:
- Ubah opasitas toples dari 0.5 menjadi 0.8 – bagaimana ini memengaruhi tampilan kaca?
- Sesuaikan warna tanah dari `#3a241d` menjadi `#8B4513` – apa dampak visualnya?
- Modifikasi `z-index` tanah menjadi 2 – apa yang terjadi pada lapisan?

---

## Tantangan GitHub Copilot Agent 🚀

Gunakan mode Agent untuk menyelesaikan tantangan berikut:

**Deskripsi:** Buat animasi CSS yang membuat tanaman di terrarium bergoyang perlahan, mensimulasikan efek angin alami. Ini akan membantu Anda berlatih animasi CSS, transformasi, dan keyframe sambil meningkatkan daya tarik visual terrarium.

**Prompt:** Tambahkan animasi keyframe CSS untuk membuat tanaman di terrarium bergoyang perlahan dari sisi ke sisi. Buat animasi goyangan yang memutar setiap tanaman sedikit (2-3 derajat) ke kiri dan kanan dengan durasi 3-4 detik, dan terapkan pada kelas `.plant`. Pastikan animasi berulang tanpa henti dan memiliki fungsi easing untuk gerakan alami.

Pelajari lebih lanjut tentang [mode agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## 🚀 Tantangan: Menambahkan Refleksi Kaca

Siap meningkatkan terrarium Anda dengan refleksi kaca yang realistis? Teknik ini akan menambahkan kedalaman dan realisme pada desain.

Anda akan membuat sorotan halus yang mensimulasikan bagaimana cahaya memantul dari permukaan kaca. Pendekatan ini mirip dengan bagaimana pelukis Renaissance seperti Jan van Eyck menggunakan cahaya dan refleksi untuk membuat kaca yang dilukis tampak tiga dimensi. Berikut adalah tujuan Anda:

![finished terrarium](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.id.png)

**Tantangan Anda:**
- **Buat** bentuk oval putih atau berwarna terang untuk refleksi kaca
- **Posisikan** mereka secara strategis di sisi kiri toples
- **Terapkan** efek opasitas dan blur yang sesuai untuk refleksi cahaya yang realistis
- **Gunakan** `border-radius` untuk menciptakan bentuk organik seperti gelembung
- **Eksperimen** dengan gradien atau bayangan kotak untuk realisme yang lebih baik

## Kuis Setelah Kuliah

[Kuis setelah kuliah](https://ff-quizzes.netlify.app/web/quiz/18)

## Perluas Pengetahuan CSS Anda

CSS mungkin terasa rumit pada awalnya, tetapi memahami konsep inti ini memberikan dasar yang kuat untuk teknik yang lebih maju.

**Area pembelajaran CSS berikutnya:**
- **Flexbox** - menyederhanakan penyelarasan dan distribusi elemen
- **CSS Grid** - menyediakan alat yang kuat untuk membuat tata letak yang kompleks
- **CSS Variables** - mengurangi pengulangan dan meningkatkan pemeliharaan
- **Desain responsif** - memastikan situs berfungsi dengan baik di berbagai ukuran layar

### Sumber Belajar Interaktif

Latih konsep-konsep ini dengan permainan interaktif yang menarik:
- 🐸 [Flexbox Froggy](https://flexboxfroggy.com/) - Kuasai Flexbox melalui tantangan yang menyenangkan
- 🌱 [Grid Garden](https://codepip.com/games/grid-garden/) - Pelajari CSS Grid dengan menanam wortel virtual
- 🎯 [CSS Battle](https://cssbattle.dev/) - Uji keterampilan CSS Anda dengan tantangan coding

### Pembelajaran Tambahan

Untuk dasar-dasar CSS yang komprehensif, selesaikan modul Microsoft Learn ini: [Style your HTML app with CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Tugas

[Refactoring CSS](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis dapat mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang timbul dari penggunaan terjemahan ini.