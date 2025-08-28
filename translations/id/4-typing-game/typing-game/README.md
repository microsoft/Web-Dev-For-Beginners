<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e982871b8388c59c22a41b73b5fca70f",
  "translation_date": "2025-08-27T23:09:55+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "id"
}
-->
# Membuat game menggunakan event

## Kuis Pra-Kuliah

[Kuis pra-kuliah](https://ff-quizzes.netlify.app/web/quiz/21)

## Pemrograman berbasis event

Saat membuat aplikasi berbasis browser, kita menyediakan antarmuka pengguna grafis (GUI) untuk digunakan pengguna saat berinteraksi dengan apa yang telah kita bangun. Cara paling umum untuk berinteraksi dengan browser adalah melalui klik dan mengetik pada berbagai elemen. Tantangan yang kita hadapi sebagai pengembang adalah kita tidak tahu kapan mereka akan melakukan operasi tersebut!

[Pemrograman berbasis event](https://en.wikipedia.org/wiki/Event-driven_programming) adalah nama untuk jenis pemrograman yang perlu kita lakukan untuk membuat GUI kita. Jika kita memecah frasa ini sedikit, kita melihat kata inti di sini adalah **event**. [Event](https://www.merriam-webster.com/dictionary/event), menurut Merriam-Webster, didefinisikan sebagai "sesuatu yang terjadi". Ini menggambarkan situasi kita dengan sempurna. Kita tahu sesuatu akan terjadi yang ingin kita tanggapi dengan kode, tetapi kita tidak tahu kapan itu akan terjadi.

Cara kita menandai bagian kode yang ingin kita eksekusi adalah dengan membuat fungsi. Ketika kita memikirkan [pemrograman prosedural](https://en.wikipedia.org/wiki/Procedural_programming), fungsi dipanggil dalam urutan tertentu. Hal yang sama berlaku untuk pemrograman berbasis event. Perbedaannya adalah **bagaimana** fungsi tersebut dipanggil.

Untuk menangani event (klik tombol, mengetik, dll.), kita mendaftarkan **event listener**. Event listener adalah fungsi yang mendengarkan suatu event terjadi dan dieksekusi sebagai respons. Event listener dapat memperbarui UI, melakukan panggilan ke server, atau apa pun yang perlu dilakukan sebagai respons terhadap tindakan pengguna. Kita menambahkan event listener dengan menggunakan [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener), dan memberikan fungsi untuk dieksekusi.

> **NOTE:** Perlu dicatat bahwa ada banyak cara untuk membuat event listener. Anda dapat menggunakan fungsi anonim, atau membuat fungsi bernama. Anda dapat menggunakan berbagai pintasan, seperti mengatur properti `click`, atau menggunakan `addEventListener`. Dalam latihan kita, kita akan fokus pada `addEventListener` dan fungsi anonim, karena ini mungkin teknik yang paling umum digunakan oleh pengembang web. Ini juga yang paling fleksibel, karena `addEventListener` bekerja untuk semua event, dan nama event dapat diberikan sebagai parameter.

### Event umum

Ada [puluhan event](https://developer.mozilla.org/docs/Web/Events) yang tersedia untuk Anda dengarkan saat membuat aplikasi. Pada dasarnya, apa pun yang dilakukan pengguna di halaman akan memicu event, yang memberi Anda banyak kekuatan untuk memastikan mereka mendapatkan pengalaman yang Anda inginkan. Untungnya, Anda biasanya hanya membutuhkan sedikit event. Berikut beberapa event umum (termasuk dua yang akan kita gunakan saat membuat game kita):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Pengguna mengklik sesuatu, biasanya tombol atau tautan
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Pengguna mengklik tombol kanan mouse
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Pengguna menyorot beberapa teks
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Pengguna memasukkan beberapa teks

## Membuat game

Kita akan membuat game untuk mengeksplorasi bagaimana event bekerja dalam JavaScript. Game kita akan menguji keterampilan mengetik pemain, yang merupakan salah satu keterampilan paling penting yang harus dimiliki semua pengembang. Kita semua harus berlatih mengetik! Alur umum game akan terlihat seperti ini:

- Pemain mengklik tombol mulai dan diberikan sebuah kutipan untuk diketik
- Pemain mengetik kutipan secepat mungkin di kotak teks
  - Saat setiap kata selesai, kata berikutnya disorot
  - Jika pemain membuat kesalahan ketik, kotak teks akan berubah menjadi merah
  - Ketika pemain menyelesaikan kutipan, pesan sukses ditampilkan dengan waktu yang telah berlalu

Mari kita bangun game kita, dan pelajari tentang event!

### Struktur file

Kita akan membutuhkan tiga file total: **index.html**, **script.js**, dan **style.css**. Mari kita mulai dengan menyiapkan file-file tersebut untuk mempermudah pekerjaan kita.

- Buat folder baru untuk pekerjaan Anda dengan membuka konsol atau jendela terminal dan menjalankan perintah berikut:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Buka Visual Studio Code

```bash
code .
```

- Tambahkan tiga file ke folder di Visual Studio Code dengan nama berikut:
  - index.html
  - script.js
  - style.css

## Membuat antarmuka pengguna

Jika kita mengeksplorasi persyaratan, kita tahu kita akan membutuhkan beberapa elemen di halaman HTML kita. Ini seperti resep, di mana kita membutuhkan beberapa bahan:

- Tempat untuk menampilkan kutipan yang akan diketik oleh pengguna
- Tempat untuk menampilkan pesan apa pun, seperti pesan sukses
- Kotak teks untuk mengetik
- Tombol mulai

Masing-masing elemen tersebut akan membutuhkan ID sehingga kita dapat bekerja dengannya di JavaScript kita. Kita juga akan menambahkan referensi ke file CSS dan JavaScript yang akan kita buat.

Buat file baru bernama **index.html**. Tambahkan HTML berikut:

```html
<!-- inside index.html -->
<html>
<head>
  <title>Typing game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Typing game!</h1>
  <p>Practice your typing skills with a quote from Sherlock Holmes. Click **start** to begin!</p>
  <p id="quote"></p> <!-- This will display our quote -->
  <p id="message"></p> <!-- This will display any status messages -->
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- The textbox for typing -->
    <button type="button" id="start">Start</button> <!-- To start the game -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### Meluncurkan aplikasi

Selalu lebih baik untuk mengembangkan secara iteratif untuk melihat bagaimana tampilannya. Mari kita luncurkan aplikasi kita. Ada ekstensi yang luar biasa untuk Visual Studio Code bernama [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) yang akan meng-host aplikasi Anda secara lokal dan menyegarkan browser setiap kali Anda menyimpan.

- Instal [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) dengan mengikuti tautan dan mengklik **Install**
  - Anda akan diminta oleh browser untuk membuka Visual Studio Code, dan kemudian oleh Visual Studio Code untuk melakukan instalasi
  - Restart Visual Studio Code jika diminta
- Setelah terinstal, di Visual Studio Code, klik Ctrl-Shift-P (atau Cmd-Shift-P) untuk membuka command palette
- Ketik **Live Server: Open with Live Server**
  - Live Server akan mulai meng-host aplikasi Anda
- Buka browser dan navigasikan ke **https://localhost:5500**
- Anda sekarang seharusnya melihat halaman yang Anda buat!

Mari tambahkan beberapa fungsionalitas.

## Menambahkan CSS

Dengan HTML kita yang telah dibuat, mari tambahkan CSS untuk styling inti. Kita perlu menyorot kata yang harus diketik oleh pemain, dan mewarnai kotak teks jika apa yang mereka ketik salah. Kita akan melakukan ini dengan dua kelas.

Buat file baru bernama **style.css** dan tambahkan sintaks berikut.

```css
/* inside style.css */
.highlight {
  background-color: yellow;
}

.error {
  background-color: lightcoral;
  border: red;
}
```

✅ Dalam hal CSS, Anda dapat mengatur tata letak halaman Anda sesuai keinginan. Luangkan sedikit waktu untuk membuat halaman terlihat lebih menarik:

- Pilih font yang berbeda
- Warnai header
- Ubah ukuran elemen

## JavaScript

Dengan UI kita yang telah dibuat, saatnya fokus pada JavaScript yang akan menyediakan logika. Kita akan memecahnya menjadi beberapa langkah:

- [Membuat konstanta](../../../../4-typing-game/typing-game)
- [Event listener untuk memulai game](../../../../4-typing-game/typing-game)
- [Event listener untuk mengetik](../../../../4-typing-game/typing-game)

Tetapi pertama-tama, buat file baru bernama **script.js**.

### Menambahkan konstanta

Kita akan membutuhkan beberapa item untuk mempermudah pemrograman kita. Lagi-lagi, seperti resep, berikut yang kita butuhkan:

- Array dengan daftar semua kutipan
- Array kosong untuk menyimpan semua kata dari kutipan saat ini
- Ruang untuk menyimpan indeks kata yang sedang diketik oleh pemain
- Waktu saat pemain mengklik mulai

Kita juga akan membutuhkan referensi ke elemen UI:

- Kotak teks (**typed-value**)
- Tampilan kutipan (**quote**)
- Pesan (**message**)

```javascript
// inside script.js
// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

✅ Silakan tambahkan lebih banyak kutipan ke game Anda

> **NOTE:** Kita dapat mengambil elemen kapan saja dalam kode dengan menggunakan `document.getElementById`. Karena kita akan sering merujuk elemen-elemen ini, kita akan menghindari kesalahan ketik dengan string literal dengan menggunakan konstanta. Framework seperti [Vue.js](https://vuejs.org/) atau [React](https://reactjs.org/) dapat membantu Anda mengelola sentralisasi kode dengan lebih baik.

Luangkan waktu sebentar untuk menonton video tentang penggunaan `const`, `let`, dan `var`

[![Jenis variabel](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Jenis variabel")

> 🎥 Klik gambar di atas untuk video tentang variabel.

### Menambahkan logika mulai

Untuk memulai game, pemain akan mengklik tombol mulai. Tentu saja, kita tidak tahu kapan mereka akan mengklik mulai. Di sinilah [event listener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) berperan. Event listener memungkinkan kita mendengarkan sesuatu yang terjadi (event) dan mengeksekusi kode sebagai respons. Dalam kasus kita, kita ingin mengeksekusi kode saat pengguna mengklik mulai.

Ketika pengguna mengklik **start**, kita perlu memilih kutipan, mengatur antarmuka pengguna, dan mengatur pelacakan untuk kata saat ini dan waktu. Di bawah ini adalah JavaScript yang perlu Anda tambahkan; kita akan membahasnya setelah blok skrip.

```javascript
// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
  // get a quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // Put the quote into an array of words
  words = quote.split(' ');
  // reset the word index for tracking
  wordIndex = 0;

  // UI updates
  // Create an array of span elements so we can set a class
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // Convert into string and set as innerHTML on quote display
  quoteElement.innerHTML = spanWords.join('');
  // Highlight the first word
  quoteElement.childNodes[0].className = 'highlight';
  // Clear any prior messages
  messageElement.innerText = '';

  // Setup the textbox
  // Clear the textbox
  typedValueElement.value = '';
  // set focus
  typedValueElement.focus();
  // set the event handler

  // Start the timer
  startTime = new Date().getTime();
});
```

Mari kita uraikan kode!

- Mengatur pelacakan kata
  - Menggunakan [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) dan [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) memungkinkan kita memilih kutipan secara acak dari array `quotes`
  - Kita mengonversi `quote` menjadi array `words` sehingga kita dapat melacak kata yang sedang diketik oleh pemain
  - `wordIndex` diatur ke 0, karena pemain akan mulai dari kata pertama
- Mengatur UI
  - Membuat array `spanWords`, yang berisi setiap kata di dalam elemen `span`
    - Ini memungkinkan kita menyorot kata pada tampilan
  - `join` array untuk membuat string yang dapat kita gunakan untuk memperbarui `innerHTML` pada `quoteElement`
    - Ini akan menampilkan kutipan kepada pemain
  - Mengatur `className` elemen `span` pertama menjadi `highlight` untuk menyorotnya sebagai kuning
  - Membersihkan `messageElement` dengan mengatur `innerText` menjadi `''`
- Mengatur kotak teks
  - Membersihkan `value` saat ini pada `typedValueElement`
  - Mengatur `focus` ke `typedValueElement`
- Memulai timer dengan memanggil `getTime`

### Menambahkan logika mengetik

Saat pemain mengetik, event `input` akan dipicu. Event listener ini akan memeriksa untuk memastikan pemain mengetik kata dengan benar, dan menangani status game saat ini. Kembali ke **script.js**, tambahkan kode berikut di akhir. Kita akan membahasnya setelahnya.

```javascript
// at the end of script.js
typedValueElement.addEventListener('input', () => {
  // Get the current word
  const currentWord = words[wordIndex];
  // get the current value
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence
    // Display success
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValueElement for the new word
    typedValueElement.value = '';
    // move to the next word
    wordIndex++;
    // reset the class name for all elements in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // highlight the new word
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    typedValueElement.className = '';
  } else {
    // error state
    typedValueElement.className = 'error';
  }
});
```

Mari kita uraikan kode! Kita mulai dengan mengambil kata saat ini dan nilai yang telah diketik oleh pemain sejauh ini. Kemudian kita memiliki logika berurutan, di mana kita memeriksa apakah kutipan selesai, kata selesai, kata benar, atau (akhirnya), jika ada kesalahan.

- Kutipan selesai, ditunjukkan oleh `typedValue` yang sama dengan `currentWord`, dan `wordIndex` yang sama dengan satu kurang dari `length` dari `words`
  - Menghitung `elapsedTime` dengan mengurangi `startTime` dari waktu saat ini
  - Membagi `elapsedTime` dengan 1.000 untuk mengonversi dari milidetik ke detik
  - Menampilkan pesan sukses
- Kata selesai, ditunjukkan oleh `typedValue` yang diakhiri dengan spasi (akhir kata) dan `typedValue` yang sama dengan `currentWord`
  - Mengatur `value` pada `typedElement` menjadi `''` untuk memungkinkan kata berikutnya diketik
  - Meningkatkan `wordIndex` untuk pindah ke kata berikutnya
  - Melakukan loop melalui semua `childNodes` dari `quoteElement` untuk mengatur `className` menjadi `''` untuk kembali ke tampilan default
  - Mengatur `className` dari kata saat ini menjadi `highlight` untuk menandainya sebagai kata berikutnya yang harus diketik
- Kata saat ini diketik dengan benar (tetapi belum selesai), ditunjukkan oleh `currentWord` yang dimulai dengan `typedValue`
  - Memastikan `typedValueElement` ditampilkan sebagai default dengan membersihkan `className`
- Jika kita sampai sejauh ini, kita memiliki kesalahan
  - Mengatur `className` pada `typedValueElement` menjadi `error`

## Menguji aplikasi Anda

Anda telah sampai di akhir! Langkah terakhir adalah memastikan aplikasi kita berfungsi. Cobalah! Jangan khawatir jika ada kesalahan; **semua pengembang** mengalami kesalahan. Periksa pesan dan debug sesuai kebutuhan.

Klik **start**, dan mulailah mengetik! Seharusnya terlihat seperti animasi yang kita lihat sebelumnya.

![Animasi game dalam aksi](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Tantangan

Tambahkan lebih banyak fungsionalitas

- Nonaktifkan event listener `input` saat selesai, dan aktifkan kembali saat tombol diklik
- Nonaktifkan kotak teks saat pemain menyelesaikan kutipan
- Tampilkan kotak dialog modal dengan pesan sukses
- Simpan skor tertinggi menggunakan [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Kuis Setelah Kuliah

[Kuis setelah kuliah](https://ff-quizzes.netlify.app/web/quiz/22)

## Tinjauan & Belajar Mandiri

Baca lebih lanjut tentang [semua event yang tersedia](https://developer.mozilla.org/docs/Web/Events) untuk pengembang melalui browser web, dan pertimbangkan skenario di mana Anda akan menggunakan masing-masing event tersebut.

## Tugas

[Buat game keyboard baru](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diingat bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.