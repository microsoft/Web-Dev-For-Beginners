# Membuat Halaman Web yang Dapat Diakses (oleh Semua Orang)

![Semua Tentang Aksesibilitas](../webdev101-a11y.png)
> Catatan sketsa oleh [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuis Pra-Kuliah
[Kuis pra-kuliah](.github/pre-lecture-quiz.id.md)

> Kekuatan Web ada dalam universalitasnya. Akses oleh semua orang tanpa memandang disabilitas merupakan aspek penting.
>
> \- Sir Timothy Berners-Lee, Direktur W3C dan penemu World Wide Web

Kutipan ini dengan sempurna menyoroti pentingnya membuat situs web yang dapat diakses. Sebuah aplikasi yang tidak dapat diakses oleh semua adalah menurut definisi pengecualian. Sebagai pengembang web, kami harus selalu memikirkan aksesibilitas. Dengan memiliki fokus ini sejak awal Anda akan berada di jalur yang benar untuk memastikan semua orang dapat mengakses halaman yang Anda buat. Dalam pelajaran ini, Anda akan mempelajari tentang alat yang dapat membantu Anda memastikan bahwa aset web Anda dapat diakses dan cara membangun dengan mempertimbangkan aksesibilitas.

## Alat yang digunakan

### Pembaca layar (Screen readers)

Salah satu alat aksesibilitas paling terkenal adalah pembaca layar.

[Pembaca layar](https://en.wikipedia.org/wiki/Screen_reader) adalah klien yang biasa digunakan untuk mereka yang memiliki gangguan penglihatan. Saat kami menghabiskan waktu untuk memastikan browser menyampaikan informasi yang ingin kami bagikan dengan benar, kami juga harus memastikan pembaca layar melakukan hal yang sama.

Pada dasarnya, pembaca layar akan membaca halaman dari atas ke bawah dengan suara. Jika halaman Anda semuanya teks, pembaca akan menyampaikan informasi dengan cara yang mirip dengan browser. Tentu saja, halaman web jarang hanya berupa teks; mereka akan berisi tautan, grafik, warna, dan komponen visual lainnya. Perhatian harus diberikan untuk memastikan bahwa informasi ini dibaca dengan benar oleh pembaca layar.

Setiap pengembang web harus membiasakan diri dengan pembaca layar. Seperti yang disorot di atas, itu adalah klien yang akan digunakan pengguna Anda. Sama seperti saat Anda memahami cara kerja browser, Anda juga harus mempelajari cara kerja pembaca layar. Untungnya, pembaca layar sudah terpasang di sebagian besar sistem operasi, dan banyak browser berisi ekstensi untuk meniru pembaca layar.

✅ Coba ekstensi atau alat browser pembaca layar. Salah satu yang hanya berfungsi di Windows adalah [JAWS](https://webaim.org/articles/jaws/). Peramban (browser) juga memiliki alat bawaan yang dapat digunakan untuk tujuan ini; lihat [alat browser Edge yang berfokus pada aksesibilitas ini](https://support.microsoft.com/en-us/help/4000734/microsoft-edge-accessibility-features).

### Pemeriksa kontras

Warna di situs web perlu dipilih dengan cermat untuk menjawab kebutuhan pengguna buta warna atau orang yang kesulitan melihat warna kontras rendah.

✅ Uji situs web yang Anda sukai untuk penggunaan warna dengan ekstensi browser seperti [pemeriksa warna WCAG](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US). Apa yang Anda pelajari?

### Lighthouse

Di area alat pengembang di browser Anda, Anda akan menemukan alat Lighthouse. Alat ini penting untuk mendapatkan tampilan pertama aksesibilitas (serta analisis lain) dari situs web. Meskipun penting untuk tidak mengandalkan Lighthouse secara eksklusif, skor 100% sangat membantu sebagai dasar.

✅ Temukan Lighthouse di panel alat pengembang browser Anda dan jalankan analisis di situs mana pun. apa yang kamu temukan?

## Mendesain untuk aksesibilitas

Aksesibilitas adalah topik yang relatif besar. Untuk membantu Anda, ada banyak sumber daya yang tersedia.

- [Accessible U - Universitas Minnesota](https://accessibility.umn.edu/your-role/web-developers)

Meskipun kami tidak dapat mencakup setiap aspek dalam membuat situs yang dapat diakses, berikut adalah beberapa prinsip inti yang ingin Anda terapkan. Mendesain halaman yang dapat diakses dari awal **selalu** lebih mudah daripada kembali ke halaman yang ada untuk membuatnya dapat diakses.

## Prinsip tampilan yang bagus

### Palet warna yang aman

Orang melihat dunia dengan cara yang berbeda, dan ini termasuk warna. Saat memilih skema warna untuk situs Anda, Anda harus memastikannya dapat diakses oleh semua orang. Salah satu [alat hebat untuk menghasilkan palet warna adalah Color Safe](http://colorsafe.co/).

✅ Identifikasi situs web yang sangat bermasalah dalam penggunaan warna. Mengapa?
Properly highlight text

### Sorot teks dengan benar

Highlighting text by color, [font weight (berat font)](https://developer.mozilla.org/docs/Web/CSS/font-weight), atau [dekorasi teks lainnya](https://developer.mozilla.org/docs/Web/CSS/text-decoration) tidak secara langsung memberi tahu pembaca layar tentang kepentingannya. Sebuah kata dapat dicetak tebal karena merupakan kata kunci, atau karena kata pertama dan perancang memutuskan kata tersebut harus dicetak tebal.

Saat frasa tertentu perlu disorot, gunakan elemen `<strong>` atau `<em>`. Ini akan menunjukkan kepada pembaca layar bahwa item tersebut penting.

### Gunakan HTML yang benar

Dengan CSS dan JavaScript, memungkinkan banyak elemen terlihat seperti jenis kontrol apa pun. `<span>` bisa digunakan untuk membuat sebuah `<button>`, dan `<b>` bisa menjadi hyperlink. Meskipun ini mungkin dianggap lebih mudah untuk diatur, ini membingungkan pembaca layar. Gunakan HTML yang sesuai saat membuat kontrol di halaman. Jika Anda menginginkan hyperlink, gunakan `<a>`. Menggunakan HTML yang tepat untuk kontrol yang tepat disebut dengan menggunakan HTML Semantik.

✅ Kunjungi situs web mana saja dan lihat apakah perancang dan pengembang menggunakan HTML dengan benar. Dapatkah Anda menemukan tombol yang seharusnya menjadi tautan? Petunjuk: klik kanan dan pilih 'View Page Source' di browser Anda untuk melihat kode yang mendasarinya.

### Gunakan petunjuk visual yang baik

CSS menawarkan kontrol penuh atas tampilan elemen apa pun di halaman. Anda dapat membuat kotak teks tanpa kerangka atau hyperlink tanpa garis bawah. Sayangnya, menghapus petunjuk tersebut dapat membuat seseorang yang bergantung padanya lebih sulit untuk mengenali jenis kontrol tersebut.

## Pentingnya teks tautan

Hyperlink adalah inti untuk menavigasi web. Hasilnya, memastikan pembaca layar dapat membaca tautan dengan benar memungkinkan semua pengguna menavigasi situs Anda.

### Pembaca layar dan tautan

Seperti yang Anda harapkan, pembaca layar membaca teks link dengan cara yang sama seperti membaca teks lain di halaman. Dengan pemikiran ini, teks yang ditunjukkan di bawah ini mungkin terasa sangat dapat diterima.

> Penguin kecil, terkadang dikenal sebagai penguin peri, adalah penguin terkecil di dunia. [Klik disini](https://en.wikipedia.org/wiki/Little_penguin) untuk informasi lebih lanjut.

> Penguin kecil, terkadang dikenal sebagai penguin peri, adalah penguin terkecil di dunia. Kunjungi https://en.wikipedia.org/wiki/Little_penguin untuk informasi lebih lanjut.

> **CATATAN** Saat akan membaca, Anda **jangan pernah** membuat tautan seperti di atas.

Ingat, pembaca layar adalah antarmuka yang berbeda dari browser dengan sekumpulan fitur yang berbeda.

### Masalah dengan menggunakan URL

Pembaca layar membaca teks. Jika URL muncul di teks, pembaca layar akan membaca URL tersebut. Secara umum, URL tidak menyampaikan informasi yang berarti, dan dapat terdengar mengganggu. Anda mungkin pernah mengalami ini jika ponsel Anda pernah membaca pesan teks dengan URL.

### Masalah dengan "klik di sini"

Pembaca layar juga memiliki kemampuan untuk membaca hanya hyperlink pada halaman, sama seperti orang awam yang memindai halaman untuk mencari link. Jika teks tautan selalu "klik di sini", yang akan didengar pengguna hanyalah "klik di sini, klik di sini, klik di sini, klik di sini, klik di sini, ..." Semua tautan sekarang tidak dapat dibedakan satu sama lain.

### Teks tautan yang bagus

Teks tautan yang bagus menjelaskan secara singkat apa yang ada di sisi lain tautan. Dalam contoh di atas yang berbicara tentang penguin kecil, tautannya menuju ke halaman Wikipedia tentang spesies tersebut. Frasa *penguin kecil* akan menjadi teks tautan yang sempurna karena menjelaskan apa yang akan dipelajari seseorang jika mereka mengeklik tautan - penguin kecil.

> [Penguin kecil](https://en.wikipedia.org/wiki/Little_penguin), kadang dikenal sebagai penguin peri, adalah penguin terkecil di dunia.

✅ Jelajahi web selama beberapa menit untuk menemukan halaman yang menggunakan strategi penautan yang tidak jelas. Bandingkan mereka dengan situs lain yang ditautkan lebih baik. Apa yang kamu pelajari?

#### Catatan mesin pencari

Sebagai bonus tambahan untuk memastikan situs Anda dapat diakses oleh semua, Anda juga akan membantu mesin pencari menavigasi situs Anda. Mesin pencari menggunakan teks link untuk mempelajari topik halaman. Jadi, menggunakan teks tautan yang bagus membantu semua orang!

### ARIA

Bayangkan halaman berikut:

| Produk       | Deskripsi        | Pesan        |
|--------------|------------------|--------------|
| Widget       | [Deskripsi]('#') | [Pesan]('#') |
| Widget super | [Deskripsi]('#') | [Pesan]('#') |

Dalam contoh ini, menduplikasi teks deskripsi dan urutan masuk akal bagi seseorang yang menggunakan browser. Namun, seseorang yang menggunakan pembaca layar hanya akan mendengar kata *deskripsi* dan *pesan* diulang tanpa konteks.

Untuk mendukung jenis skenario ini, HTML mendukung sekumpulan atribut yang dikenal sebagai [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) (Aplikasi Internet Kaya yang Dapat Diakses). Atribut ini memungkinkan Anda memberikan informasi tambahan kepada pembaca layar.

> **CATATAN**: Seperti banyak aspek HTML, dukungan browser dan pembaca layar mungkin berbeda. Namun, sebagian besar klien pasaran mendukung atribut ARIA.

Anda dapat menggunakan `aria-label` untuk mendeskripsikan link jika format halaman tidak mengizinkan Anda. Deskripsi untuk widget dapat disetel sebagai

``` html
<a href="#" aria-label="Deskripsi widget">deskripsi</a>
```

✅ Secara umum, menggunakan markup Semantik seperti yang dijelaskan di atas menggantikan penggunaan ARIA, tetapi terkadang tidak ada padanan semantik untuk berbagai widget HTML. Contoh yang bagus adalah Progressbar. Tidak ada HTML yang setara untuk bilah kemajuan, jadi Anda mengidentifikasi `<div>` generik untuk elemen ini dengan peran yang tepat dan nilai aria. [Dokumentasi MDN tentang ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) berisi informasi yang lebih berguna.

```html
<div id="percent-loaded" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
</div>
```

## Gambar-gambar

Tak perlu dikatakan pembaca layar tidak dapat secara otomatis membaca apa yang ada dalam gambar. Memastikan gambar dapat diakses tidak membutuhkan banyak pekerjaan - itulah yang dimaksud dengan atribut `alt`. Semua gambar harus memiliki `alt` untuk mendeskripsikan gambar tersebut.

✅ Seperti yang Anda duga, mesin telusur juga tidak dapat memahami apa yang ada di gambar. Mereka juga menggunakan teks alt. Jadi sekali lagi, memastikan halaman Anda dapat diakses memberikan bonus tambahan!

## Keyboard

Beberapa pengguna tidak dapat menggunakan mouse atau trackpad, sebagai gantinya mengandalkan interaksi keyboard untuk tab dari satu elemen ke elemen berikutnya. Situs web Anda harus menyajikan konten Anda dalam urutan logis sehingga keyboard dapat mengakses setiap elemen saat pengguna bergerak ke bawah dokumen. Jika Anda membangun halaman web Anda dengan markup semantik dan menggunakan CSS untuk mengatur tata letak visualnya, situs Anda harus dapat dinavigasi dengan keyboard, tetapi penting untuk menguji aspek ini secara manual. Pelajari lebih lanjut tentang [strategi navigasi keyboard](https://webaim.org/techniques/keyboard/).

✅ Buka situs web mana pun dan coba menavigasi hanya dengan menggunakan tombol tab Anda. Apa yang berhasil, apa yang tidak berhasil? Mengapa?

## Ringkasan

Web yang dapat diakses oleh beberapa orang bukanlah benar-benar 'web di seluruh dunia'. Cara terbaik untuk memastikan situs yang Anda buat dapat diakses adalah dengan menerapkan praktik terbaik aksesibilitas sejak awal. Meskipun ada langkah tambahan yang terlibat, menggabungkan keterampilan ini ke dalam alur kerja Anda sekarang berarti semua halaman yang Anda buat dapat diakses.

---

## 🚀 Tantangan

Ambil HTML ini dan tulis ulang agar dapat diakses semaksimal mungkin, dengan strategi yang Anda pelajari.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Example
    </title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="site-header">
      <p class="site-title">Turtle Ipsum</p>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </div>
    <div class="main-nav">
      <p class="nav-header">Resources</p>
      <div class="nav-list">
        <p class="nav-item nav-item-bull"><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles"</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtle">Basic Turtle Info</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate Turtles</a></p>
      </div>
    </div>
    <div class="main-content">
      <div>
        <p class="page-title">Welcome to Turtle Ipsum. 
            <a href="">Click here</a> to learn more.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <span class="button">Sign up for turtle news</span>
      </div><div class="footer-section">
        <p class="nav-header footer-title">
          Internal Pages
        </p>
        <div class="nav-list">
          <p class="nav-item nav-item-bull"><a href="../">Index</a></p>
          <p class="nav-item nav-item-bull"><a href="../semantic">Semantic Example</a></p>
        </div>
      </div>
      <p class="footer-copyright">&copy; 2016 Instrument</span>
    </div>
  </body>
</html>
```

## Kuis Pasca Kuliah
[Kuis pasca kuliah](.github/post-lecture-quiz.id.md)

## Review & Belajar Mandiri

Banyak pemerintah memiliki undang-undang tentang persyaratan aksesibilitas. Baca tentang undang-undang aksesibilitas negara asal Anda. Apa yang tercakup, dan apa yang tidak? Contohnya adalah [situs web pemerintah ini](https://accessibility.blog.gov.uk/).

## Tugas

[Analisis situs web yang tidak dapat diakses](assignment.id.md)

Kredit: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) oleh Instrumen
