<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e982871b8388c59c22a41b73b5fca70f",
  "translation_date": "2025-08-27T23:10:33+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "ms"
}
-->
# Membuat permainan menggunakan acara

## Kuiz Pra-Kuliah

[Kuiz pra-kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/21)

## Pengaturcaraan berasaskan acara

Apabila mencipta aplikasi berasaskan pelayar, kita menyediakan antara muka pengguna grafik (GUI) untuk digunakan oleh pengguna semasa berinteraksi dengan apa yang telah kita bina. Cara paling biasa untuk berinteraksi dengan pelayar adalah melalui klik dan menaip dalam pelbagai elemen. Cabaran yang kita hadapi sebagai pembangun adalah kita tidak tahu bila mereka akan melakukan operasi ini!

[Pengaturcaraan berasaskan acara](https://en.wikipedia.org/wiki/Event-driven_programming) adalah nama untuk jenis pengaturcaraan yang perlu kita lakukan untuk mencipta GUI kita. Jika kita pecahkan frasa ini sedikit, kita akan melihat perkataan utama di sini ialah **acara**. [Acara](https://www.merriam-webster.com/dictionary/event), menurut Merriam-Webster, didefinisikan sebagai "sesuatu yang berlaku". Ini menggambarkan situasi kita dengan sempurna. Kita tahu sesuatu akan berlaku yang mana kita mahu melaksanakan beberapa kod sebagai tindak balas, tetapi kita tidak tahu bila ia akan berlaku.

Cara kita menandakan bahagian kod yang kita mahu laksanakan adalah dengan mencipta fungsi. Apabila kita memikirkan tentang [pengaturcaraan prosedural](https://en.wikipedia.org/wiki/Procedural_programming), fungsi dipanggil dalam susunan tertentu. Perkara yang sama juga akan berlaku dengan pengaturcaraan berasaskan acara. Perbezaannya adalah **bagaimana** fungsi-fungsi itu akan dipanggil.

Untuk mengendalikan acara (klik butang, menaip, dll.), kita mendaftarkan **pendengar acara**. Pendengar acara adalah fungsi yang mendengar sesuatu acara berlaku dan melaksanakannya sebagai tindak balas. Pendengar acara boleh mengemas kini UI, membuat panggilan ke pelayan, atau apa sahaja yang perlu dilakukan sebagai tindak balas kepada tindakan pengguna. Kita menambah pendengar acara dengan menggunakan [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener), dan menyediakan fungsi untuk dilaksanakan.

> **NOTE:** Perlu diingatkan bahawa terdapat banyak cara untuk mencipta pendengar acara. Anda boleh menggunakan fungsi tanpa nama, atau mencipta fungsi yang dinamakan. Anda boleh menggunakan pelbagai pintasan, seperti menetapkan sifat `click`, atau menggunakan `addEventListener`. Dalam latihan kita, kita akan memberi tumpuan kepada `addEventListener` dan fungsi tanpa nama, kerana ini mungkin teknik yang paling biasa digunakan oleh pembangun web. Ia juga yang paling fleksibel, kerana `addEventListener` berfungsi untuk semua acara, dan nama acara boleh disediakan sebagai parameter.

### Acara biasa

Terdapat [berpuluh-puluh acara](https://developer.mozilla.org/docs/Web/Events) yang tersedia untuk anda dengar semasa mencipta aplikasi. Pada asasnya, apa sahaja yang pengguna lakukan pada halaman akan mencetuskan acara, yang memberikan anda banyak kuasa untuk memastikan mereka mendapat pengalaman yang anda inginkan. Nasib baik, anda biasanya hanya memerlukan sebilangan kecil acara. Berikut adalah beberapa acara biasa (termasuk dua yang akan kita gunakan semasa mencipta permainan kita):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Pengguna mengklik sesuatu, biasanya butang atau pautan
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Pengguna mengklik butang kanan tetikus
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Pengguna menyorot beberapa teks
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Pengguna memasukkan beberapa teks

## Mencipta permainan

Kita akan mencipta permainan untuk meneroka bagaimana acara berfungsi dalam JavaScript. Permainan kita akan menguji kemahiran menaip pemain, yang merupakan salah satu kemahiran paling penting yang semua pembangun harus miliki. Kita semua sepatutnya berlatih menaip! Aliran umum permainan akan kelihatan seperti ini:

- Pemain mengklik butang mula dan diberikan petikan untuk ditaip
- Pemain menaip petikan secepat mungkin dalam kotak teks
  - Apabila setiap perkataan selesai, perkataan seterusnya diserlahkan
  - Jika pemain membuat kesalahan ejaan, kotak teks akan berubah menjadi merah
  - Apabila pemain melengkapkan petikan, mesej kejayaan dipaparkan bersama masa yang diambil

Mari kita bina permainan kita, dan belajar tentang acara!

### Struktur fail

Kita akan memerlukan tiga fail keseluruhan: **index.html**, **script.js** dan **style.css**. Mari kita mulakan dengan menyediakan fail-fail ini untuk memudahkan kerja kita.

- Cipta folder baru untuk kerja anda dengan membuka konsol atau tetingkap terminal dan melaksanakan arahan berikut:

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
  - script.js
  - style.css

## Cipta antara muka pengguna

Jika kita meneliti keperluan, kita tahu kita akan memerlukan beberapa elemen pada halaman HTML kita. Ini seperti resipi, di mana kita memerlukan beberapa bahan:

- Tempat untuk memaparkan petikan untuk ditaip oleh pengguna
- Tempat untuk memaparkan sebarang mesej, seperti mesej kejayaan
- Kotak teks untuk menaip
- Butang mula

Setiap elemen ini memerlukan ID supaya kita boleh bekerja dengannya dalam JavaScript kita. Kita juga akan menambah rujukan kepada fail CSS dan JavaScript yang akan kita cipta.

Cipta fail baru bernama **index.html**. Tambahkan HTML berikut:

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

### Lancarkan aplikasi

Adalah lebih baik untuk membangunkan secara iteratif untuk melihat bagaimana sesuatu kelihatan. Mari lancarkan aplikasi kita. Terdapat sambungan yang hebat untuk Visual Studio Code yang dipanggil [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) yang akan menjadi hos aplikasi anda secara tempatan dan menyegarkan pelayar setiap kali anda menyimpan.

- Pasang [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) dengan mengikuti pautan dan klik **Install**
  - Anda akan diminta oleh pelayar untuk membuka Visual Studio Code, dan kemudian oleh Visual Studio Code untuk melaksanakan pemasangan
  - Mulakan semula Visual Studio Code jika diminta
- Setelah dipasang, dalam Visual Studio Code, klik Ctrl-Shift-P (atau Cmd-Shift-P) untuk membuka palet arahan
- Taip **Live Server: Open with Live Server**
  - Live Server akan mula menjadi hos aplikasi anda
- Buka pelayar dan navigasi ke **https://localhost:5500**
- Anda kini sepatutnya melihat halaman yang anda cipta!

Mari tambahkan beberapa fungsi.

## Tambah CSS

Dengan HTML kita telah dicipta, mari tambahkan CSS untuk gaya teras. Kita perlu menyerlahkan perkataan yang sepatutnya ditaip oleh pemain, dan mewarnakan kotak teks jika apa yang mereka taip adalah salah. Kita akan melakukannya dengan dua kelas.

Cipta fail baru bernama **style.css** dan tambahkan sintaks berikut.

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

✅ Apabila berkaitan dengan CSS, anda boleh menyusun halaman anda mengikut kehendak anda. Luangkan sedikit masa dan buat halaman kelihatan lebih menarik:

- Pilih fon yang berbeza
- Warnakan tajuk
- Ubah saiz elemen

## JavaScript

Dengan UI kita telah dicipta, kini tiba masanya untuk memberi tumpuan kepada JavaScript yang akan menyediakan logik. Kita akan memecahkannya kepada beberapa langkah:

- [Cipta pemalar](../../../../4-typing-game/typing-game)
- [Pendengar acara untuk memulakan permainan](../../../../4-typing-game/typing-game)
- [Pendengar acara untuk menaip](../../../../4-typing-game/typing-game)

Tetapi pertama, cipta fail baru bernama **script.js**.

### Tambah pemalar

Kita akan memerlukan beberapa item untuk memudahkan kerja pengaturcaraan kita. Sekali lagi, seperti resipi, berikut adalah apa yang kita perlukan:

- Array dengan senarai semua petikan
- Array kosong untuk menyimpan semua perkataan untuk petikan semasa
- Ruang untuk menyimpan indeks perkataan yang sedang ditaip oleh pemain
- Masa pemain mengklik mula

Kita juga akan memerlukan rujukan kepada elemen UI:

- Kotak teks (**typed-value**)
- Paparan petikan (**quote**)
- Mesej (**message**)

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

✅ Tambahkan lebih banyak petikan ke dalam permainan anda

> **NOTE:** Kita boleh mendapatkan elemen bila-bila masa dalam kod dengan menggunakan `document.getElementById`. Disebabkan kita akan merujuk elemen-elemen ini secara kerap, kita akan mengelakkan kesalahan ejaan dengan literal string dengan menggunakan pemalar. Rangka kerja seperti [Vue.js](https://vuejs.org/) atau [React](https://reactjs.org/) boleh membantu anda menguruskan kod anda dengan lebih baik.

Luangkan masa untuk menonton video tentang penggunaan `const`, `let` dan `var`

[![Jenis pembolehubah](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Jenis pembolehubah")

> 🎥 Klik imej di atas untuk video tentang pembolehubah.

### Tambah logik mula

Untuk memulakan permainan, pemain akan mengklik mula. Sudah tentu, kita tidak tahu bila mereka akan mengklik mula. Di sinilah [pendengar acara](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) memainkan peranan. Pendengar acara akan membolehkan kita mendengar sesuatu berlaku (acara) dan melaksanakan kod sebagai tindak balas. Dalam kes kita, kita mahu melaksanakan kod apabila pengguna mengklik mula.

Apabila pengguna mengklik **mula**, kita perlu memilih petikan, menyediakan antara muka pengguna, dan menyediakan penjejakan untuk perkataan semasa dan masa. Di bawah adalah JavaScript yang anda perlu tambahkan; kita akan membincangkannya selepas blok skrip.

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

Mari kita pecahkan kod ini!

- Menyediakan penjejakan perkataan
  - Menggunakan [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) dan [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) membolehkan kita memilih petikan secara rawak daripada array `quotes`
  - Kita menukar `quote` kepada array `words` supaya kita boleh menjejaki perkataan yang sedang ditaip oleh pemain
  - `wordIndex` ditetapkan kepada 0, kerana pemain akan bermula pada perkataan pertama
- Menyediakan UI
  - Cipta array `spanWords`, yang mengandungi setiap perkataan dalam elemen `span`
    - Ini akan membolehkan kita menyerlahkan perkataan pada paparan
  - `join` array untuk mencipta string yang boleh kita gunakan untuk mengemas kini `innerHTML` pada `quoteElement`
    - Ini akan memaparkan petikan kepada pemain
  - Tetapkan `className` elemen `span` pertama kepada `highlight` untuk menyerlahkannya sebagai kuning
  - Bersihkan `messageElement` dengan menetapkan `innerText` kepada `''`
- Menyediakan kotak teks
  - Kosongkan `value` semasa pada `typedValueElement`
  - Tetapkan `focus` kepada `typedValueElement`
- Mulakan pemasa dengan memanggil `getTime`

### Tambah logik menaip

Semasa pemain menaip, acara `input` akan dicetuskan. Pendengar acara ini akan memeriksa untuk memastikan pemain menaip perkataan dengan betul, dan mengendalikan status semasa permainan. Kembali ke **script.js**, tambahkan kod berikut ke penghujung. Kita akan memecahkannya selepas itu.

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

Mari kita pecahkan kod ini! Kita bermula dengan mendapatkan perkataan semasa dan nilai yang telah ditaip oleh pemain setakat ini. Kemudian kita mempunyai logik bertingkat, di mana kita memeriksa sama ada petikan telah lengkap, perkataan telah lengkap, perkataan adalah betul, atau (akhirnya), jika terdapat ralat.

- Petikan telah lengkap, ditunjukkan oleh `typedValue` sama dengan `currentWord`, dan `wordIndex` sama dengan satu kurang daripada `length` `words`
  - Kira `elapsedTime` dengan menolak `startTime` daripada masa semasa
  - Bahagikan `elapsedTime` dengan 1,000 untuk menukar daripada milisaat kepada saat
  - Paparkan mesej kejayaan
- Perkataan telah lengkap, ditunjukkan oleh `typedValue` berakhir dengan ruang (akhir perkataan) dan `typedValue` sama dengan `currentWord`
  - Tetapkan `value` pada `typedElement` kepada `''` untuk membolehkan perkataan seterusnya ditaip
  - Tambahkan `wordIndex` untuk bergerak ke perkataan seterusnya
  - Ulangi semua `childNodes` `quoteElement` untuk menetapkan `className` kepada `''` untuk kembali ke paparan lalai
  - Tetapkan `className` perkataan semasa kepada `highlight` untuk menandakannya sebagai perkataan seterusnya untuk ditaip
- Perkataan sedang ditaip dengan betul (tetapi belum lengkap), ditunjukkan oleh `currentWord` bermula dengan `typedValue`
  - Pastikan `typedValueElement` dipaparkan sebagai lalai dengan membersihkan `className`
- Jika kita sampai sejauh ini, kita mempunyai ralat
  - Tetapkan `className` pada `typedValueElement` kepada `error`

## Uji aplikasi anda

Anda telah sampai ke penghujungnya! Langkah terakhir adalah memastikan aplikasi kita berfungsi. Cubalah! Jangan risau jika terdapat ralat; **semua pembangun** menghadapi ralat. Periksa mesej dan nyahpepijat jika perlu.

Klik pada **mula**, dan mula menaip! Ia sepatutnya kelihatan seperti animasi yang kita lihat sebelum ini.

![Animasi permainan dalam tindakan](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Cabaran

Tambahkan lebih banyak fungsi

- Lumpuhkan pendengar acara `input` apabila selesai, dan aktifkan semula apabila butang diklik
- Lumpuhkan kotak teks apabila pemain melengkapkan petikan
- Paparkan kotak dialog modal dengan mesej kejayaan
- Simpan skor tertinggi menggunakan [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

## Kuiz Selepas Kuliah

[Kuiz selepas kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/22)

## Ulasan & Kajian Kendiri

Baca tentang [semua acara yang tersedia](https://developer.mozilla.org/docs/Web/Events) kepada pembangun melalui pelayar web, dan fikirkan senario di mana anda akan menggunakan setiap satu.

## Tugasan

[Cipta permainan papan kekunci baharu](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.