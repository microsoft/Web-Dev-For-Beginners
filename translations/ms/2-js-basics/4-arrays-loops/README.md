<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-24T14:21:40+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "ms"
}
-->
# Asas JavaScript: Array dan Gelung

![Asas JavaScript - Array](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.ms.png)
> Nota sketsa oleh [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuiz Pra-Kuliah
[Kuiz pra-kuliah](https://ff-quizzes.netlify.app/web/quiz/13)

Pernah terfikir bagaimana laman web menyimpan rekod item dalam troli belian atau memaparkan senarai rakan anda? Di sinilah array dan gelung memainkan peranan. Array adalah seperti bekas digital yang menyimpan pelbagai maklumat, manakala gelung membolehkan anda bekerja dengan semua data tersebut secara efisien tanpa kod berulang.

Bersama-sama, kedua-dua konsep ini membentuk asas untuk menguruskan maklumat dalam program anda. Anda akan belajar bagaimana beralih daripada menulis setiap langkah secara manual kepada mencipta kod pintar dan efisien yang boleh memproses ratusan atau ribuan item dengan cepat.

Menjelang akhir pelajaran ini, anda akan memahami cara menyelesaikan tugas data yang kompleks dengan hanya beberapa baris kod. Mari kita terokai konsep pengaturcaraan penting ini.

[![Array](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Array")

[![Gelung](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Gelung")

> 🎥 Klik imej di atas untuk video tentang array dan gelung.

> Anda boleh mengambil pelajaran ini di [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Array

Bayangkan array sebagai kabinet fail digital - bukannya menyimpan satu dokumen setiap laci, anda boleh mengatur pelbagai item berkaitan dalam satu bekas yang terstruktur. Dalam istilah pengaturcaraan, array membolehkan anda menyimpan pelbagai maklumat dalam satu pakej yang teratur.

Sama ada anda sedang membina galeri foto, menguruskan senarai tugasan, atau menyimpan rekod skor tinggi dalam permainan, array menyediakan asas untuk pengurusan data. Mari kita lihat bagaimana ia berfungsi.

✅ Array ada di sekeliling kita! Bolehkah anda fikirkan contoh kehidupan sebenar bagi array, seperti susunan panel solar?

### Mencipta Array

Mencipta array sangat mudah - hanya gunakan kurungan segi empat!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**Apa yang berlaku di sini?**
Anda baru sahaja mencipta bekas kosong menggunakan kurungan segi empat `[]`. Anggap ia seperti rak perpustakaan kosong - ia sedia untuk menyimpan apa sahaja buku yang anda ingin susun di situ.

Anda juga boleh mengisi array anda dengan nilai awal dari awal:

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**Perkara menarik untuk diperhatikan:**
- Anda boleh menyimpan teks, nombor, atau nilai benar/palsu dalam array yang sama
- Hanya pisahkan setiap item dengan koma - mudah!
- Array sangat sesuai untuk menyimpan maklumat berkaitan bersama-sama

### Pengindeksan Array

Ini mungkin kelihatan luar biasa pada mulanya: array menomborkan item mereka bermula dari 0, bukan 1. Pengindeksan berasaskan sifar ini berakar dalam cara memori komputer berfungsi - ia telah menjadi konvensyen pengaturcaraan sejak zaman awal bahasa pengaturcaraan seperti C. Setiap tempat dalam array mendapat nombor alamat sendiri yang dipanggil **indeks**.

| Indeks | Nilai | Penerangan |
|--------|-------|------------|
| 0 | "Coklat" | Elemen pertama |
| 1 | "Strawberi" | Elemen kedua |
| 2 | "Vanila" | Elemen ketiga |
| 3 | "Pistachio" | Elemen keempat |
| 4 | "Rocky Road" | Elemen kelima |

✅ Adakah anda terkejut bahawa array bermula pada indeks sifar? Dalam beberapa bahasa pengaturcaraan, indeks bermula pada 1. Terdapat sejarah menarik tentang ini, yang boleh anda [baca di Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering).

**Mengakses Elemen Array:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**Memecahkan apa yang berlaku di sini:**
- **Menggunakan** notasi kurungan segi empat dengan nombor indeks untuk mengakses elemen
- **Mengembalikan** nilai yang disimpan di kedudukan tertentu dalam array
- **Bermula** mengira dari 0, menjadikan elemen pertama indeks 0

**Mengubah Elemen Array:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**Dalam contoh di atas, kami telah:**
- **Mengubah** elemen pada indeks 4 daripada "Rocky Road" kepada "Butter Pecan"
- **Menambah** elemen baru "Cookie Dough" pada indeks 5
- **Memperluas** panjang array secara automatik apabila menambah melebihi sempadan semasa

### Panjang Array dan Kaedah Biasa

Array dilengkapi dengan sifat dan kaedah terbina dalam yang memudahkan kerja dengan data.

**Mencari Panjang Array:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**Perkara penting untuk diingat:**
- **Mengembalikan** jumlah elemen dalam array
- **Mengemas kini** secara automatik apabila elemen ditambah atau dibuang
- **Menyediakan** kiraan dinamik yang berguna untuk gelung dan pengesahan

**Kaedah Array Penting:**

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

**Memahami kaedah ini:**
- **Menambah** elemen dengan `push()` (akhir) dan `unshift()` (permulaan)
- **Membuang** elemen dengan `pop()` (akhir) dan `shift()` (permulaan)
- **Mencari** elemen dengan `indexOf()` dan memeriksa kewujudan dengan `includes()`
- **Mengembalikan** nilai berguna seperti elemen yang dibuang atau indeks kedudukan

✅ Cuba sendiri! Gunakan konsol pelayar anda untuk mencipta dan memanipulasi array ciptaan anda sendiri.

## Gelung

Bayangkan hukuman terkenal dari novel Charles Dickens di mana pelajar perlu menulis ayat berulang kali di papan tulis. Bayangkan jika anda boleh hanya mengarahkan seseorang untuk "tulis ayat ini 100 kali" dan ia dilakukan secara automatik. Itulah yang dilakukan oleh gelung untuk kod anda.

Gelung adalah seperti mempunyai pembantu yang tidak pernah letih yang boleh mengulangi tugas tanpa kesilapan. Sama ada anda perlu memeriksa setiap item dalam troli belian atau memaparkan semua foto dalam album, gelung mengendalikan pengulangan dengan efisien.

JavaScript menyediakan beberapa jenis gelung untuk dipilih. Mari kita periksa setiap satu dan fahami bila untuk menggunakannya.

### Gelung For

Gelung `for` adalah seperti menetapkan pemasa - anda tahu dengan tepat berapa kali anda mahu sesuatu berlaku. Ia sangat teratur dan boleh diramal, yang menjadikannya sempurna apabila anda bekerja dengan array atau perlu mengira sesuatu.

**Struktur Gelung For:**

| Komponen | Tujuan | Contoh |
|----------|--------|--------|
| **Inisialisasi** | Menetapkan titik permulaan | `let i = 0` |
| **Keadaan** | Bila untuk meneruskan | `i < 10` |
| **Peningkatan** | Cara untuk mengemas kini | `i++` |

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

**Langkah demi langkah, inilah yang berlaku:**
- **Menginisialisasi** pembolehubah kaunter `i` kepada 0 pada permulaan
- **Memeriksa** keadaan `i < 10` sebelum setiap iterasi
- **Melaksanakan** blok kod apabila keadaan adalah benar
- **Meningkatkan** `i` sebanyak 1 selepas setiap iterasi dengan `i++`
- **Berhenti** apabila keadaan menjadi palsu (apabila `i` mencapai 10)

✅ Jalankan kod ini dalam konsol pelayar. Apa yang berlaku apabila anda membuat perubahan kecil pada kaunter, keadaan, atau ekspresi iterasi? Bolehkah anda membuatnya berjalan ke belakang, mencipta kiraan mundur?

### Gelung While

Gelung `while` adalah seperti mengatakan "teruskan melakukan ini sehingga..." - anda mungkin tidak tahu dengan tepat berapa kali ia akan berjalan, tetapi anda tahu bila untuk berhenti. Ia sempurna untuk perkara seperti meminta input pengguna sehingga mereka memberikan apa yang anda perlukan, atau mencari data sehingga anda menemui apa yang anda cari.

**Ciri-ciri Gelung While:**
- **Teruskan** melaksanakan selagi keadaan adalah benar
- **Memerlukan** pengurusan manual bagi sebarang pembolehubah kaunter
- **Memeriksa** keadaan sebelum setiap iterasi
- **Berisiko** gelung tak terhingga jika keadaan tidak pernah menjadi palsu

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

**Memahami contoh ini:**
- **Menguruskan** pembolehubah kaunter `i` secara manual dalam badan gelung
- **Meningkatkan** kaunter untuk mengelakkan gelung tak terhingga
- **Menunjukkan** kes penggunaan praktikal dengan input pengguna dan had percubaan
- **Termasuk** mekanisme keselamatan untuk mengelakkan pelaksanaan tanpa henti

### Alternatif Gelung Moden

JavaScript menawarkan sintaks gelung moden yang boleh menjadikan kod anda lebih mudah dibaca dan kurang terdedah kepada kesilapan.

**Gelung For...of (ES6+):**

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

**Kelebihan utama for...of:**
- **Menghapuskan** pengurusan indeks dan potensi kesilapan off-by-one
- **Menyediakan** akses langsung kepada elemen array
- **Meningkatkan** kebolehbacaan kod dan mengurangkan kerumitan sintaks

**Kaedah forEach:**

```javascript
const prices = [9.99, 15.50, 22.75, 8.25];

// Using forEach for functional programming style
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price.toFixed(2)}`);
});

// forEach with arrow functions for simple operations
prices.forEach(price => console.log(`Price: $${price}`));
```

**Apa yang perlu anda tahu tentang forEach:**
- **Melaksanakan** fungsi untuk setiap elemen array
- **Menyediakan** nilai elemen dan indeks sebagai parameter
- **Tidak boleh** dihentikan awal (tidak seperti gelung tradisional)
- **Mengembalikan** undefined (tidak mencipta array baru)

✅ Mengapa anda memilih gelung for berbanding gelung while? 17K penonton mempunyai soalan yang sama di StackOverflow, dan beberapa pendapat [mungkin menarik untuk anda](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Gelung dan Array

Menggabungkan array dengan gelung mencipta keupayaan pemprosesan data yang kuat. Gabungan ini adalah asas kepada banyak tugas pengaturcaraan, daripada memaparkan senarai kepada mengira statistik.

**Pemprosesan Array Tradisional:**

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

**Mari fahami setiap pendekatan:**
- **Menggunakan** sifat panjang array untuk menentukan sempadan gelung
- **Mengakses** elemen melalui indeks dalam gelung for tradisional
- **Menyediakan** akses langsung kepada elemen dalam gelung for...of
- **Memproses** setiap elemen array tepat sekali

**Contoh Pemprosesan Data Praktikal:**

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

**Inilah cara kod ini berfungsi:**
- **Menginisialisasi** pembolehubah penjejakan untuk jumlah dan nilai ekstrem
- **Memproses** setiap gred dengan satu gelung yang efisien
- **Mengumpulkan** jumlah untuk pengiraan purata
- **Menjejaki** nilai tertinggi dan terendah semasa iterasi
- **Mengira** statistik akhir selepas gelung selesai

✅ Bereksperimen dengan gelung melalui array ciptaan anda sendiri dalam konsol pelayar anda.

---

## Cabaran Ejen GitHub Copilot 🚀

Gunakan mod Ejen untuk menyelesaikan cabaran berikut:

**Penerangan:** Bina fungsi pemprosesan data yang komprehensif yang menggabungkan array dan gelung untuk menganalisis dataset dan menghasilkan wawasan bermakna.

**Arahan:** Cipta fungsi bernama `analyzeGrades` yang mengambil array objek gred pelajar (setiap satu mengandungi sifat nama dan skor) dan mengembalikan objek dengan statistik termasuk skor tertinggi, skor terendah, skor purata, bilangan pelajar yang lulus (skor >= 70), dan array nama pelajar yang mendapat skor di atas purata. Gunakan sekurang-kurangnya dua jenis gelung yang berbeza dalam penyelesaian anda.

Ketahui lebih lanjut tentang [mod ejen](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## 🚀 Cabaran

JavaScript menawarkan beberapa kaedah array moden yang boleh menggantikan gelung tradisional untuk tugas tertentu. Terokai [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), dan [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). 

**Cabaran anda:** Refaktor contoh gred pelajar menggunakan sekurang-kurangnya tiga kaedah array yang berbeza. Perhatikan betapa lebih bersih dan mudah dibaca kod tersebut dengan sintaks JavaScript moden.

## Kuiz Pasca-Kuliah
[Kuiz pasca-kuliah](https://ff-quizzes.netlify.app/web/quiz/14)


## Ulasan & Kajian Kendiri

Array dalam JavaScript mempunyai banyak kaedah yang sangat berguna untuk manipulasi data. [Baca tentang kaedah-kaedah ini](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) dan cuba beberapa daripadanya (seperti push, pop, slice dan splice) pada array ciptaan anda sendiri.

## Tugasan

[Gelung Array](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.