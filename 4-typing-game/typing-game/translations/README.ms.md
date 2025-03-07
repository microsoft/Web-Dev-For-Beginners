# Membuat permainan menggunakan acara (events)

## Kuiz Pra Kuliah

[Kuiz Pra Kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/21)

## Pengaturcaraan berdasarkan acara

Semasa membuat aplikasi berasaskan penyemak imbas, kami menyediakan antara muka pengguna grafik (GUI) untuk pengguna gunakan ketika berinteraksi dengan apa yang telah kami buat. Cara paling biasa untuk berinteraksi dengan penyemak imbas adalah dengan mengklik dan menaip pelbagai elemen. Cabaran yang kita hadapi sebagai pembangun adalah kita tidak tahu kapan mereka akan melakukan operasi ini!

[Pengaturcaraan berdasarkan acara](https://en.wikipedia.org/wiki/Event-driven_programming) adalah nama untuk jenis pengaturcaraan yang perlu kita lakukan untuk membuat GUI kita. Sekiranya kita memecahkan frasa ini sedikit, kita akan melihat kata intinya di sini adalah **event**. [Event](https://www.merriam-webster.com/dictionary/event), menurut Merriam-Webster, didefinisikan sebagai "sesuatu yang berlaku". Ini menggambarkan keadaan kita dengan sempurna. Kami tahu ada sesuatu yang akan berlaku dan kami ingin melaksanakan beberapa kod sebagai tindak balas, tetapi kami tidak tahu kapan ia akan berlaku.

Cara kita menandakan bahagian kod yang ingin kita laksanakan adalah dengan membuat fungsi. Apabila kita memikirkan [pengaturcaraan prosedural](https://en.wikipedia.org/wiki/Procedural_programming), fungsi dipanggil dalam urutan tertentu. Perkara yang sama akan berlaku dengan pengaturcaraan berdasarkan acara. Perbezaannya adalah **bagaimana** fungsi akan dipanggil.

Untuk menangani acara (klik butang, menaip, dll.), Kami mendaftarkan **pendengar acara**. Pendengar peristiwa adalah fungsi yang mendengarkan peristiwa yang berlaku dan dilaksanakan sebagai tindak balas. Pendengar acara boleh mengemas kini UI, membuat panggilan ke pelayan, atau apa sahaja yang perlu dilakukan sebagai tindak balas terhadap tindakan pengguna. Kami menambahkan pendengar acara dengan menggunakan [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener), dan menyediakan fungsi untuk dilaksanakan.

> **CATATAN:** Perlu dinyatakan bahawa terdapat banyak cara untuk membuat pendengar acara. Anda boleh menggunakan fungsi tanpa nama, atau membuat fungsi yang dinamakan. Anda boleh menggunakan pelbagai jalan pintas, seperti menetapkan sifat `klik`, atau menggunakan` addEventListener`. Dalam latihan kami, kami akan menumpukan pada fungsi `addEventLister` dan anonim, kerana mungkin teknik yang paling biasa digunakan oleh pembangun web. Ini juga paling fleksibel, kerana `addEventListener` berfungsi untuk semua acara, dan nama acara dapat diberikan sebagai parameter.

### Acara biasa

Terdapat [puluhan acara](https://developer.mozilla.org/docs/Web/Events) yang tersedia untuk anda dengarkan semasa membuat aplikasi. Pada asasnya apa sahaja yang dilakukan pengguna pada halaman menimbulkan peristiwa, yang memberi anda banyak kekuatan untuk memastikan mereka mendapat pengalaman yang anda inginkan. Nasib baik, anda biasanya hanya memerlukan sebilangan kecil acara. Berikut adalah beberapa perkara biasa (termasuk dua yang akan kami gunakan semasa membuat permainan kami):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Pengguna mengklik sesuatu, biasanya butang atau hyperlink
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Pengguna mengklik butang tetikus kanan
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Pengguna menyoroti beberapa teks
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Pengguna memasukkan beberapa teks

## Membuat permainan

Kami akan membuat permainan untuk meneroka bagaimana acara berfungsi dalam JavaScript. Permainan kami akan menguji kemahiran menaip pemain, yang merupakan salah satu kemahiran paling rendah yang harus dimiliki oleh pemaju. Kita semua mesti berlatih menaip kita! Aliran umum permainan akan kelihatan seperti ini:

- Pemain mengklik butang mula dan disertakan dengan petikan untuk menaip
- Pemain menaip petikan secepat mungkin di kotak teks
  - Apabila setiap perkataan selesai, yang berikutnya diserlahkan
  - Sekiranya pemain mempunyai kesalahan ketik, kotak teks dikemas kini menjadi merah
  - Apabila pemain menyelesaikan petikan, mesej kejayaan akan dipaparkan dengan masa yang berlalu

Mari membina permainan kami, dan belajar tentang acara!

### Struktur fail

Kami memerlukan tiga jumlah fail: **index.html**, **script.js** dan **style.css**. Mari mulakan dengan menetapkannya untuk menjadikan hidup lebih mudah bagi kita.

- Buat folder baru untuk kerja anda dengan membuka tetingkap konsol atau terminal dan mengeluarkan perintah berikut:

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

- Tambahkan tiga fail ke folder dalam Visual Studio Code dengan nama berikut:
  - index.html
  - skrip.js
  - style.css

## Buat antara muka pengguna (user interface)

Sekiranya kita meneliti syarat-syaratnya, kita tahu kita akan memerlukan segelintir elemen di halaman HTML kita. Ini seperti resipi, di mana kita memerlukan beberapa ramuan:

- Di suatu tempat untuk memaparkan petikan untuk pengguna menaip
- Di suatu tempat untuk memaparkan sebarang mesej, seperti mesej kejayaan
- Kotak teks untuk menaip
- Butang mula

Masing-masing memerlukan ID supaya kita dapat bekerja dengannya dalam JavaScript kita. Kami juga akan menambahkan rujukan ke fail CSS dan JavaScript yang akan kami buat.

Buat fail baru bernama **index.html**. Tambahkan HTML berikut:

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

## Lancarkan aplikasi

Adalah lebih baik untuk mengembangkannya secara berulang untuk melihat bagaimana keadaannya. Mari melancarkan aplikasi kami. Terdapat peluasan hebat untuk Visual Studio Code yang disebut [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) yang akan menghoskan aplikasi anda secara tempatan dan menyegarkan penyemak imbas setiap kali anda menyimpan.

- Pasang [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) dengan mengikuti pautan dan mengklik **Install**
  - Anda akan diminta oleh penyemak imbas untuk membuka Kod Visual Studio, dan kemudian oleh Kod Visual Studio untuk melakukan pemasangan
  - Mulakan semula Kod Visual Studio jika diminta
- Setelah dipasang, dalam Visual Studio Code, klik Ctrl-Shift-P (atau Cmd-Shift-P) untuk membuka perintah pallate
- Taip **Pelayan Langsung: Buka dengan Pelayan Langsung**
  - Live Server akan mula menghoskan aplikasi anda
- Buka penyemak imbas dan arahkan ke **https: // localhost: 5500**
- Anda kini harus melihat halaman yang anda buat!

Mari tambahkan beberapa fungsi.

## Tambah CSS

Dengan HTML kami dibuat, mari tambahkan CSS untuk gaya inti. Kita perlu mengetengahkan perkataan yang harus ditaip oleh pemain, dan mewarnakan kotak teks jika apa yang mereka taipkan tidak betul. Kami akan melakukan ini dengan dua kelas.

Buat fail baru bernama **style.css** dan tambahkan sintaks berikut.

```css
/* dalam style.css */
.highlight {
  background-color: yellow;
}

.error {
  background-color: lightcoral;
  border: red;
}
```

✅ Ketika datang ke CSS, anda boleh mengatur halaman anda sesuka hati. Luangkan sedikit masa dan buat halaman kelihatan lebih menarik:

- Pilih fon yang berbeza
- Warnakan tajuk
- Ubah saiz item

## JavaScript

Dengan UI kami dibuat, inilah masanya untuk menumpukan perhatian kami pada JavaScript yang akan memberikan logik. Kami akan membahagikannya kepada beberapa langkah:

- [Buat pemalar](#tambah-pemalar)
- [Pendengar acara untuk memulakan permainan](#add-start-logic)
- [Pendengar acara untuk menaip](#add-typing-logic)

Tetapi pertama, buat fail baru bernama **script.js**.

### Tambahkan pemalar

Kita akan memerlukan beberapa item untuk menjadikan kehidupan kita lebih mudah untuk pengaturcaraan. Sekali lagi, serupa dengan resipi, inilah yang kita perlukan:

- Susun dengan senarai semua petikan
- Susunan kosong untuk menyimpan semua perkataan untuk petikan semasa
- Ruang untuk menyimpan indeks kata pemain sedang menaip
- Masa pemain mengklik permulaan

Kami juga mahu rujukan ke elemen UI:

- Kotak teks (**nilai taip**)
- Paparan petikan (**petikan**)
- Mesej (**mesej**)

```javascript
// dalam script.js
// semua quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// simpan senarai perkataan dan indeks perkataan yang sedang ditaip pemain
let words = [];
let wordIndex = 0;
// masa permulaan
let startTime = Date.now();
// elemen halaman
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

✅ Teruskan dan tambahkan lebih banyak petikan ke permainan anda

> ** CATATAN: ** Kami dapat mengambil elemen bila-bila masa yang kami mahukan dalam kod dengan menggunakan `document.getElementById`. Oleh kerana hakikatnya kita akan merujuk unsur-unsur ini secara berkala, kita akan mengelakkan kesalahan ketik dengan literal string dengan menggunakan pemalar. Rangka kerja seperti [Vue.js](https://vuejs.org/) atau [React](https://reactjs.org/) dapat membantu anda menguruskan pemusatan kod anda dengan lebih baik.

Luangkan masa sebentar untuk menonton video menggunakan `const`,` let` dan `var`

[![Jenis pemboleh ubah](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Jenis pemboleh ubah")

> Klik gambar di atas untuk video mengenai pemboleh ubah.

### Tambahkan Logik

Untuk memulakan permainan, pemain akan mengklik pada permulaan. Sudah tentu, kita tidak tahu kapan mereka akan mula klik. Di sinilah seorang [pendengar acara](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) mula bermain. Pendengar acara akan membolehkan kita mendengar sesuatu yang berlaku (suatu peristiwa) dan melaksanakan kod sebagai tindak balas. Dalam kes kami, kami ingin melaksanakan kod ketika pengguna mengklik pada permulaan.

Apabila pengguna mengklik **start**, kita harus memilih sebut harga, menyiapkan antarmuka pengguna, dan penyiapan pelacakan untuk kata dan waktu semasa. Berikut adalah JavaScript yang perlu anda tambahkan; kita membincangkannya selepas blok skrip.

```javascript
// pada akhir script.js
document.getElementById('start').addEventListener('click', () => {
  // dapatkan quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // Masukkan petikan ke dalam susunan kata
  words = quote.split(' ');
  // tetapkan semula indeks kata untuk penjejakan
  wordIndex = 0;

  // Kemas kini UI
  // Buat susunan elemen span supaya kita dapat mengatur kelas
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // Tukar menjadi rentetan dan tetapkan sebagai innerHTML pada paparan petikan
  quoteElement.innerHTML = spanWords.join('');
  // Serlahkan perkataan pertama
  quoteElement.childNodes[0].className = 'highlight';
  // Kosongkan sebarang mesej sebelumnya
  messageElement.innerText = '';

  // Sediakan kotak teks
  // Kosongkan kotak teks
  typedValueElement.value = '';
  // Sediakan fokus
  typedValueElement.focus();
  // tetapkan pengendali acara

  // Mulakan pemasa
  startTime = new Date().getTime();
});
```

Mari pecahkan kodnya!

- Siapkan penjejakan perkataan
  - Menggunakan [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) dan [Math.random](https://developer.mozilla.org/docs / Web / JavaScript / Rujukan / Global_Objects / Matematik / rawak) membolehkan kita memilih petikan secara rawak dari array `quotes`
  - Kami menukar `quote 'menjadi array` kata` sehingga kami dapat mengesan perkataan yang sedang ditaip pemain
  - `wordIndex` ditetapkan ke 0, kerana pemain akan bermula pada kata pertama
- Sediakan UI
  - Buat array `spanWords`, yang berisi setiap kata di dalam elemen` span`
    - Ini akan membolehkan kita menonjolkan perkataan di paparan
  - `join` array untuk membuat rentetan yang dapat kita gunakan untuk mengemas kini` innerHTML` pada `quoteElement`
    - Ini akan memaparkan petikan kepada pemain
  - Tetapkan `className` elemen` span` pertama ke  highlight untuk menyerlahkannya sebagai kuning
  - Bersihkan `messageElement` dengan menetapkan "innerText" ke `''`
- Sediakan kotak teks
  - Kosongkan `nilai` semasa di` typedValueElement`
  - Tetapkan `fokus` ke` typedValueElement`
- Mulakan pemasa dengan memanggil `getTime`

### Tambahkan logik menaip

Semasa pemain menaip, acara `input` akan dinaikkan. Pendengar acara ini akan memeriksa untuk memastikan pemain menaip perkataan dengan betul, dan mengendalikan status permainan semasa. Kembali ke **script.js**, tambahkan kod berikut hingga akhir. Kami akan memecahkannya selepas itu.

```javascript
// pada akhir skrip.js
typedValueElement.addEventListener('input', () => {
  // Dapatkan perkataan semasa
  const currentWord = words[wordIndex];
  // dapatkan nilai semasa
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // akhir ayat
    // Paparkan kejayaan
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // akhir kata
    // kosongkan typedValueElement untuk perkataan baru
    typedValueElement.value = '';
    // beralih ke perkataan seterusnya
    wordIndex++;
    // tetapkan semula nama kelas untuk semua elemen dalam petikan
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // serlahkan perkataan baru
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // betul sekarang
    // serlahkan perkataan seterusnya
    typedValueElement.className = '';
  } else {
    // keadaan ralat
    typedValueElement.className = 'error';
  }
});
```

Mari pecahkan kodnya! Kami mulakan dengan merebut perkataan semasa dan nilai yang ditaip pemain sejauh ini. Kemudian kita mempunyai logik air terjun, di mana kita memeriksa apakah petikannya lengkap, kata itu lengkap, kata itu betul, atau (akhirnya), jika ada kesalahan.

- Kutipan selesai, ditunjukkan oleh `typedValue` sama dengan` currentWord`, dan `wordIndex` sama dengan satu yang kurang dari` panjang 'kata-kata `
  - Hitung `elapsedTime` dengan mengurangkan` startTime` dari waktu semasa
  - Bahagikan `elapsedTime` dengan 1,000 untuk menukar dari milisaat hingga saat
  - Paparkan mesej kejayaan
- Kata lengkap, ditunjukkan oleh `typedValue` yang diakhiri dengan spasi (akhir kata) dan` typedValue` sama dengan `currentWord`
  - Tetapkan "nilai" pada "typedElement" menjadi "" untuk membolehkan kata berikutnya ditaip
  - Kenaikan `wordIndex` untuk beralih ke kata seterusnya
  - Gelung semua "childNodes" "quoteElement" untuk menetapkan "className" ke "" untuk kembali ke paparan lalai
  - Tetapkan `className` dari kata semasa ke` highlight 'untuk menandakannya sebagai kata seterusnya untuk menaip
- Word saat ini ditaip dengan betul (tetapi tidak lengkap), ditunjukkan oleh `currentWord` yang dimulakan dengan` typedValue`
  - Pastikan `typedValueElement` dipaparkan sebagai lalai dengan membersihkan` className`
- Sekiranya kita berjaya sejauh ini, kita mempunyai ralat
  - Tetapkan `className` pada` typedValueElement` ke `error`

## Uji aplikasi anda

Anda berjaya sampai akhir! Langkah terakhir adalah memastikan aplikasi kita berfungsi. Cubalah! Jangan risau sekiranya terdapat kesilapan; **semua pembangun** mempunyai kesilapan. Teliti mesej dan debug mengikut keperluan.

Klik **start**, dan mula menaip! Ia semestinya kelihatan seperti animasi yang kita lihat sebelumnya.

![Animasi permainan beraksi](/4-typing-game/images/demo.gif)

---

## 🚀 Cabaran

Tambahkan lebih banyak fungsi

- Lumpuhkan pendengar acara `input` setelah selesai, dan aktifkan semula apabila butang diklik
- Lumpuhkan kotak teks semasa pemain menyelesaikan petikan
- Paparkan kotak dialog mod dengan mesej kejayaan
- Simpan skor tinggi menggunakan [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Kuiz Pasca Kuliah

[Kuiz Pasca Kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/22)

## Mengkaji & Belajar Sendiri

Bacalah [semua acara yang ada](https://developer.mozilla.org/docs/Web/Events) kepada pembangun melalui penyemak imbas web, dan pertimbangkan senario di mana anda akan menggunakannya.

## Tugasan

[Buat permainan papan kekunci baru](assignment.ms.md)