<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-24T13:57:12+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "id"
}
-->
# Dasar-Dasar JavaScript: Array dan Loop

![Dasar-Dasar JavaScript - Array](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.id.png)
> Sketchnote oleh [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuis Pra-Pelajaran
[Kuis pra-pelajaran](https://ff-quizzes.netlify.app/web/quiz/13)

Pernah bertanya-tanya bagaimana situs web melacak item di keranjang belanja atau menampilkan daftar teman Anda? Di sinilah array dan loop berperan. Array seperti wadah digital yang menyimpan banyak informasi, sementara loop memungkinkan Anda bekerja dengan semua data tersebut secara efisien tanpa kode yang berulang.

Bersama-sama, kedua konsep ini menjadi dasar untuk menangani informasi dalam program Anda. Anda akan belajar beralih dari menulis setiap langkah secara manual ke membuat kode yang cerdas dan efisien yang dapat memproses ratusan atau bahkan ribuan item dengan cepat.

Pada akhir pelajaran ini, Anda akan memahami cara menyelesaikan tugas data yang kompleks hanya dengan beberapa baris kode. Mari kita jelajahi konsep pemrograman penting ini.

[![Arrays](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Arrays")

[![Loops](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Loops")

> 🎥 Klik gambar di atas untuk video tentang array dan loop.

> Anda dapat mengikuti pelajaran ini di [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Array

Bayangkan array sebagai lemari arsip digital - alih-alih menyimpan satu dokumen per laci, Anda dapat mengatur beberapa item terkait dalam satu wadah yang terstruktur. Dalam istilah pemrograman, array memungkinkan Anda menyimpan banyak informasi dalam satu paket yang terorganisir.

Apakah Anda sedang membangun galeri foto, mengelola daftar tugas, atau melacak skor tertinggi dalam permainan, array menyediakan dasar untuk pengorganisasian data. Mari kita lihat cara kerjanya.

✅ Array ada di sekitar kita! Bisakah Anda memikirkan contoh nyata dari array, seperti array panel surya?

### Membuat Array

Membuat array sangat sederhana - cukup gunakan tanda kurung siku!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**Apa yang terjadi di sini?**
Anda baru saja membuat wadah kosong menggunakan tanda kurung siku `[]`. Anggap saja seperti rak perpustakaan kosong - siap untuk menyimpan buku apa pun yang ingin Anda atur di sana.

Anda juga dapat mengisi array Anda dengan nilai awal langsung dari awal:

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**Hal-hal keren yang perlu diperhatikan:**
- Anda dapat menyimpan teks, angka, atau bahkan nilai benar/salah dalam array yang sama
- Cukup pisahkan setiap item dengan koma - mudah!
- Array sangat cocok untuk menyimpan informasi terkait bersama-sama

### Indeks Array

Ada sesuatu yang mungkin tampak tidak biasa pada awalnya: array memberi nomor pada item mereka mulai dari 0, bukan 1. Penomoran berbasis nol ini berakar pada cara kerja memori komputer - ini telah menjadi konvensi pemrograman sejak awal bahasa pemrograman seperti C. Setiap tempat dalam array mendapatkan nomor alamatnya sendiri yang disebut **indeks**.

| Indeks | Nilai | Deskripsi |
|-------|-------|-------------|
| 0 | "Cokelat" | Elemen pertama |
| 1 | "Stroberi" | Elemen kedua |
| 2 | "Vanila" | Elemen ketiga |
| 3 | "Pistachio" | Elemen keempat |
| 4 | "Rocky Road" | Elemen kelima |

✅ Apakah mengejutkan Anda bahwa array dimulai dari indeks nol? Dalam beberapa bahasa pemrograman, indeks dimulai dari 1. Ada sejarah menarik tentang ini, yang dapat Anda [baca di Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering).

**Mengakses Elemen Array:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**Memecah apa yang terjadi di sini:**
- **Menggunakan** notasi tanda kurung siku dengan nomor indeks untuk mengakses elemen
- **Mengembalikan** nilai yang disimpan di posisi tertentu dalam array
- **Dimulai** dari 0, membuat elemen pertama memiliki indeks 0

**Memodifikasi Elemen Array:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**Dalam contoh di atas, kita telah:**
- **Memodifikasi** elemen pada indeks 4 dari "Rocky Road" menjadi "Butter Pecan"
- **Menambahkan** elemen baru "Cookie Dough" pada indeks 5
- **Memperluas** panjang array secara otomatis saat menambahkan di luar batas saat ini

### Panjang Array dan Metode Umum

Array dilengkapi dengan properti dan metode bawaan yang membuat bekerja dengan data menjadi jauh lebih mudah.

**Menemukan Panjang Array:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**Poin penting untuk diingat:**
- **Mengembalikan** jumlah total elemen dalam array
- **Memperbarui** secara otomatis saat elemen ditambahkan atau dihapus
- **Memberikan** hitungan dinamis yang berguna untuk loop dan validasi

**Metode Array Penting:**

```javascript
const fruits = ["apple", "banana", "orange"];

// Add elements
fruits.push("grape");           // Adds to end: ["apple", "banana", "orange", "grape"]
fruits.unshift("strawberry");   // Adds to beginning: ["strawberry", "apple", "banana", "orange", "grape"]

// Remove elements
const lastFruit = fruits.pop();        // Removes and returns "grape"
const firstFruit = fruits.shift();     // Removes and returns "strawberry"

// Find elements
const index = fruits.indexOf("banana"); // Returns 1 (position of "banana")
const hasApple = fruits.includes("apple"); // Returns true
```

**Memahami metode ini:**
- **Menambahkan** elemen dengan `push()` (akhir) dan `unshift()` (awal)
- **Menghapus** elemen dengan `pop()` (akhir) dan `shift()` (awal)
- **Menemukan** elemen dengan `indexOf()` dan memeriksa keberadaan dengan `includes()`
- **Mengembalikan** nilai berguna seperti elemen yang dihapus atau indeks posisi

✅ Coba sendiri! Gunakan konsol browser Anda untuk membuat dan memanipulasi array buatan Anda sendiri.

## Loop

Bayangkan hukuman terkenal dari novel Charles Dickens di mana siswa harus menulis kalimat berulang kali di papan tulis. Bayangkan jika Anda bisa cukup memberi instruksi kepada seseorang untuk "tulis kalimat ini 100 kali" dan itu selesai secara otomatis. Itulah yang dilakukan loop untuk kode Anda.

Loop seperti memiliki asisten yang tak kenal lelah yang dapat mengulangi tugas tanpa kesalahan. Apakah Anda perlu memeriksa setiap item di keranjang belanja atau menampilkan semua foto dalam album, loop menangani pengulangan dengan efisien.

JavaScript menyediakan beberapa jenis loop untuk dipilih. Mari kita periksa masing-masing dan memahami kapan menggunakannya.

### For Loop

`for` loop seperti mengatur timer - Anda tahu persis berapa kali Anda ingin sesuatu terjadi. Ini sangat terorganisir dan dapat diprediksi, yang membuatnya sempurna saat Anda bekerja dengan array atau perlu menghitung sesuatu.

**Struktur For Loop:**

| Komponen | Tujuan | Contoh |
|-----------|---------|----------|
| **Inisialisasi** | Menetapkan titik awal | `let i = 0` |
| **Kondisi** | Kapan harus melanjutkan | `i < 10` |
| **Inkrementasi** | Cara memperbarui | `i++` |

```javascript
// Counting from 0 to 9
for (let i = 0; i < 10; i++) {
  console.log(`Count: ${i}`);
}

// More practical example: processing scores
const testScores = [85, 92, 78, 96, 88];
for (let i = 0; i < testScores.length; i++) {
  console.log(`Student ${i + 1}: ${testScores[i]}%`);
}
```

**Langkah demi langkah, inilah yang terjadi:**
- **Menginisialisasi** variabel penghitung `i` ke 0 di awal
- **Memeriksa** kondisi `i < 10` sebelum setiap iterasi
- **Menjalankan** blok kode saat kondisi benar
- **Meningkatkan** `i` sebesar 1 setelah setiap iterasi dengan `i++`
- **Berhenti** saat kondisi menjadi salah (saat `i` mencapai 10)

✅ Jalankan kode ini di konsol browser. Apa yang terjadi saat Anda membuat perubahan kecil pada penghitung, kondisi, atau ekspresi iterasi? Bisakah Anda membuatnya berjalan mundur, menciptakan hitungan mundur?

### While Loop

`while` loop seperti mengatakan "terus lakukan ini sampai..." - Anda mungkin tidak tahu persis berapa kali itu akan berjalan, tetapi Anda tahu kapan harus berhenti. Ini sempurna untuk hal-hal seperti meminta input pengguna sampai mereka memberikan apa yang Anda butuhkan, atau mencari data sampai Anda menemukan apa yang Anda cari.

**Karakteristik While Loop:**
- **Melanjutkan** eksekusi selama kondisi benar
- **Membutuhkan** pengelolaan manual variabel penghitung
- **Memeriksa** kondisi sebelum setiap iterasi
- **Berisiko** loop tak terbatas jika kondisi tidak pernah menjadi salah

```javascript
// Basic counting example
let i = 0;
while (i < 10) {
  console.log(`While count: ${i}`);
  i++; // Don't forget to increment!
}

// More practical example: processing user input
let userInput = "";
let attempts = 0;
const maxAttempts = 3;

while (userInput !== "quit" && attempts < maxAttempts) {
  userInput = prompt(`Enter 'quit' to exit (attempt ${attempts + 1}):`);
  attempts++;
}

if (attempts >= maxAttempts) {
  console.log("Maximum attempts reached!");
}
```

**Memahami contoh-contoh ini:**
- **Mengelola** variabel penghitung `i` secara manual di dalam tubuh loop
- **Meningkatkan** penghitung untuk mencegah loop tak terbatas
- **Menunjukkan** kasus penggunaan praktis dengan input pengguna dan pembatasan percobaan
- **Menyertakan** mekanisme keamanan untuk mencegah eksekusi tanpa akhir

### Alternatif Loop Modern

JavaScript menawarkan sintaks loop modern yang dapat membuat kode Anda lebih mudah dibaca dan lebih sedikit rentan terhadap kesalahan.

**For...of Loop (ES6+):**

```javascript
const colors = ["red", "green", "blue", "yellow"];

// Modern approach - cleaner and safer
for (const color of colors) {
  console.log(`Color: ${color}`);
}

// Compare with traditional for loop
for (let i = 0; i < colors.length; i++) {
  console.log(`Color: ${colors[i]}`);
}
```

**Keuntungan utama for...of:**
- **Menghilangkan** pengelolaan indeks dan potensi kesalahan off-by-one
- **Memberikan** akses langsung ke elemen array
- **Meningkatkan** keterbacaan kode dan mengurangi kompleksitas sintaks

**Metode forEach:**

```javascript
const prices = [9.99, 15.50, 22.75, 8.25];

// Using forEach for functional programming style
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price.toFixed(2)}`);
});

// forEach with arrow functions for simple operations
prices.forEach(price => console.log(`Price: $${price}`));
```

**Yang perlu Anda ketahui tentang forEach:**
- **Menjalankan** fungsi untuk setiap elemen array
- **Memberikan** nilai elemen dan indeks sebagai parameter
- **Tidak dapat** dihentikan lebih awal (tidak seperti loop tradisional)
- **Mengembalikan** undefined (tidak membuat array baru)

✅ Mengapa Anda memilih for loop dibandingkan while loop? 17K penonton memiliki pertanyaan yang sama di StackOverflow, dan beberapa pendapat [mungkin menarik bagi Anda](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Loop dan Array

Menggabungkan array dengan loop menciptakan kemampuan pemrosesan data yang kuat. Pasangan ini sangat penting untuk banyak tugas pemrograman, mulai dari menampilkan daftar hingga menghitung statistik.

**Pemrosesan Array Tradisional:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Classic for loop approach
for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(`Flavor ${i + 1}: ${iceCreamFlavors[i]}`);
}

// Modern for...of approach
for (const flavor of iceCreamFlavors) {
  console.log(`Available flavor: ${flavor}`);
}
```

**Mari kita pahami setiap pendekatan:**
- **Menggunakan** properti panjang array untuk menentukan batas loop
- **Mengakses** elemen berdasarkan indeks dalam loop for tradisional
- **Memberikan** akses langsung ke elemen dalam loop for...of
- **Memproses** setiap elemen array tepat satu kali

**Contoh Pemrosesan Data Praktis:**

```javascript
const studentGrades = [85, 92, 78, 96, 88, 73, 89];
let total = 0;
let highestGrade = studentGrades[0];
let lowestGrade = studentGrades[0];

// Process all grades with a single loop
for (let i = 0; i < studentGrades.length; i++) {
  const grade = studentGrades[i];
  total += grade;
  
  if (grade > highestGrade) {
    highestGrade = grade;
  }
  
  if (grade < lowestGrade) {
    lowestGrade = grade;
  }
}

const average = total / studentGrades.length;
console.log(`Average: ${average.toFixed(1)}`);
console.log(`Highest: ${highestGrade}`);
console.log(`Lowest: ${lowestGrade}`);
```

**Inilah cara kerja kode ini:**
- **Menginisialisasi** variabel pelacakan untuk jumlah dan nilai ekstrem
- **Memproses** setiap nilai dengan satu loop yang efisien
- **Mengakumulasi** total untuk perhitungan rata-rata
- **Melacak** nilai tertinggi dan terendah selama iterasi
- **Menghitung** statistik akhir setelah loop selesai

✅ Bereksperimenlah dengan melakukan loop pada array buatan Anda sendiri di konsol browser.

---

## Tantangan Agen GitHub Copilot 🚀

Gunakan mode Agen untuk menyelesaikan tantangan berikut:

**Deskripsi:** Bangun fungsi pemrosesan data yang komprehensif yang menggabungkan array dan loop untuk menganalisis dataset dan menghasilkan wawasan yang bermakna.

**Prompt:** Buat fungsi bernama `analyzeGrades` yang menerima array objek nilai siswa (masing-masing berisi properti nama dan skor) dan mengembalikan objek dengan statistik termasuk skor tertinggi, skor terendah, skor rata-rata, jumlah siswa yang lulus (skor >= 70), dan array nama siswa yang mencetak nilai di atas rata-rata. Gunakan setidaknya dua jenis loop berbeda dalam solusi Anda.

Pelajari lebih lanjut tentang [mode agen](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## 🚀 Tantangan

JavaScript menawarkan beberapa metode array modern yang dapat menggantikan loop tradisional untuk tugas tertentu. Jelajahi [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), dan [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). 

**Tantangan Anda:** Refactor contoh nilai siswa menggunakan setidaknya tiga metode array berbeda. Perhatikan betapa lebih bersih dan lebih mudah dibaca kode tersebut dengan sintaks JavaScript modern.

## Kuis Pasca-Pelajaran
[Kuis pasca-pelajaran](https://ff-quizzes.netlify.app/web/quiz/14)


## Tinjauan & Studi Mandiri

Array dalam JavaScript memiliki banyak metode yang sangat berguna untuk manipulasi data. [Baca tentang metode ini](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) dan coba beberapa di antaranya (seperti push, pop, slice, dan splice) pada array buatan Anda sendiri.

## Tugas

[Loop pada Array](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang keliru yang timbul dari penggunaan terjemahan ini.