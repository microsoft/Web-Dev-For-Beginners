<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c32c3377f83ab750c2447c77ab98",
  "translation_date": "2025-10-24T13:57:45+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "id"
}
-->
# Dasar-Dasar JavaScript: Membuat Keputusan

![Dasar-Dasar JavaScript - Membuat keputusan](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.id.png)

> Sketchnote oleh [Tomomi Imura](https://twitter.com/girlie_mac)

Pernahkah Anda bertanya-tanya bagaimana aplikasi membuat keputusan yang cerdas? Seperti bagaimana sistem navigasi memilih rute tercepat, atau bagaimana termostat memutuskan kapan harus menyalakan pemanas? Ini adalah konsep dasar pengambilan keputusan dalam pemrograman.

Seperti halnya Mesin Analitik Charles Babbage yang dirancang untuk mengikuti urutan operasi yang berbeda berdasarkan kondisi, program JavaScript modern perlu membuat pilihan berdasarkan keadaan yang berbeda. Kemampuan untuk bercabang dan membuat keputusan inilah yang mengubah kode statis menjadi aplikasi yang responsif dan cerdas.

Dalam pelajaran ini, Anda akan belajar cara menerapkan logika kondisional dalam program Anda. Kita akan mengeksplorasi pernyataan kondisional, operator perbandingan, dan ekspresi logis yang memungkinkan kode Anda mengevaluasi situasi dan merespons dengan tepat.

## Kuis Pra-Pelajaran

[Kuis pra-pelajaran](https://ff-quizzes.netlify.app/web/quiz/11)

Kemampuan untuk membuat keputusan dan mengontrol alur program adalah aspek mendasar dari pemrograman. Bagian ini mencakup cara mengontrol jalannya eksekusi program JavaScript Anda menggunakan nilai Boolean dan logika kondisional.

[![Membuat Keputusan](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Membuat Keputusan")

> 🎥 Klik gambar di atas untuk menonton video tentang membuat keputusan.

> Anda dapat mengikuti pelajaran ini di [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Sekilas tentang Boolean

Sebelum menjelajahi pengambilan keputusan, mari kita tinjau kembali nilai Boolean dari pelajaran sebelumnya. Dinamai sesuai dengan nama matematikawan George Boole, nilai-nilai ini mewakili dua keadaan biner – `true` atau `false`. Tidak ada ambiguitas, tidak ada area abu-abu.

Nilai-nilai biner ini membentuk dasar dari semua logika komputasi. Setiap keputusan yang dibuat program Anda pada akhirnya bermuara pada evaluasi Boolean.

Membuat variabel Boolean sangatlah mudah:

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

Ini membuat dua variabel dengan nilai Boolean eksplisit.

✅ Boolean dinamai sesuai dengan matematikawan, filsuf, dan ahli logika Inggris George Boole (1815–1864).

## Operator Perbandingan dan Boolean

Dalam praktiknya, Anda jarang menetapkan nilai Boolean secara manual. Sebaliknya, Anda akan menghasilkan nilai tersebut dengan mengevaluasi kondisi: "Apakah angka ini lebih besar dari yang itu?" atau "Apakah nilai-nilai ini sama?"

Operator perbandingan memungkinkan evaluasi ini. Mereka membandingkan nilai dan mengembalikan hasil Boolean berdasarkan hubungan antara operand.

| Simbol | Deskripsi                                                                                                                                                   | Contoh             |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Kurang dari**: Membandingkan dua nilai dan mengembalikan tipe data Boolean `true` jika nilai di sisi kiri lebih kecil dari sisi kanan                     | `5 < 6 // true`    |
| `<=`   | **Kurang dari atau sama dengan**: Membandingkan dua nilai dan mengembalikan tipe data Boolean `true` jika nilai di sisi kiri lebih kecil atau sama dengan sisi kanan | `5 <= 6 // true`   |
| `>`    | **Lebih besar dari**: Membandingkan dua nilai dan mengembalikan tipe data Boolean `true` jika nilai di sisi kiri lebih besar dari sisi kanan                | `5 > 6 // false`   |
| `>=`   | **Lebih besar dari atau sama dengan**: Membandingkan dua nilai dan mengembalikan tipe data Boolean `true` jika nilai di sisi kiri lebih besar atau sama dengan sisi kanan | `5 >= 6 // false`  |
| `===`  | **Kesetaraan ketat**: Membandingkan dua nilai dan mengembalikan tipe data Boolean `true` jika nilai di sisi kanan dan kiri sama DAN memiliki tipe data yang sama | `5 === 6 // false` |
| `!==`  | **Ketidaksamaan**: Membandingkan dua nilai dan mengembalikan nilai Boolean yang berlawanan dengan apa yang akan dikembalikan oleh operator kesetaraan ketat | `5 !== 6 // true`  |

✅ Uji pengetahuan Anda dengan menulis beberapa perbandingan di konsol browser Anda. Apakah ada data yang dikembalikan yang mengejutkan Anda?

## Pernyataan If

Pernyataan `if` seperti mengajukan pertanyaan dalam kode Anda. "Jika kondisi ini benar, maka lakukan hal ini." Ini mungkin alat terpenting yang akan Anda gunakan untuk membuat keputusan dalam JavaScript.

Begini cara kerjanya:

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

Kondisi ditulis di dalam tanda kurung, dan jika kondisinya `true`, JavaScript menjalankan kode di dalam kurung kurawal. Jika kondisinya `false`, JavaScript akan melewati seluruh blok tersebut.

Anda sering menggunakan operator perbandingan untuk membuat kondisi ini. Mari kita lihat contoh praktis:

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

Karena `1000 >= 800` dievaluasi sebagai `true`, kode di dalam blok dijalankan, menampilkan "Mendapatkan laptop baru!" di konsol.

## Pernyataan If..Else

Namun bagaimana jika Anda ingin program Anda melakukan sesuatu yang berbeda ketika kondisinya salah? Di sinilah `else` berperan – ini seperti memiliki rencana cadangan.

Pernyataan `else` memberi Anda cara untuk mengatakan "jika kondisi ini tidak benar, lakukan hal lain sebagai gantinya."

```javascript
let currentMoney = 500;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

Sekarang karena `500 >= 800` adalah `false`, JavaScript melewati blok pertama dan menjalankan blok `else` sebagai gantinya. Anda akan melihat "Belum mampu membeli laptop baru!" di konsol.

✅ Uji pemahaman Anda tentang kode ini dan kode berikut dengan menjalankannya di konsol browser. Ubah nilai variabel currentMoney dan laptopPrice untuk mengubah hasil `console.log()`.

## Pernyataan Switch

Terkadang Anda perlu membandingkan satu nilai dengan beberapa opsi. Meskipun Anda bisa menggabungkan beberapa pernyataan `if..else`, pendekatan ini menjadi tidak praktis. Pernyataan `switch` memberikan struktur yang lebih rapi untuk menangani beberapa nilai diskrit.

Konsep ini mirip dengan sistem switching mekanis yang digunakan dalam pertukaran telepon awal – satu nilai input menentukan jalur spesifik yang diikuti eksekusi.

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

Berikut adalah strukturnya:
- JavaScript mengevaluasi ekspresi sekali
- JavaScript mencari setiap `case` untuk menemukan kecocokan
- Ketika menemukan kecocokan, JavaScript menjalankan blok kode tersebut
- `break` memberi tahu JavaScript untuk berhenti dan keluar dari switch
- Jika tidak ada case yang cocok, JavaScript menjalankan blok `default` (jika ada)

```javascript
// Program using switch statement for day of week
let dayNumber = 2;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown day";
    break;
}
console.log(`Today is ${dayName}`);
```

Dalam contoh ini, JavaScript melihat bahwa `dayNumber` adalah `2`, menemukan `case 2` yang cocok, menetapkan `dayName` menjadi "Selasa", dan kemudian keluar dari switch. Hasilnya? "Hari ini adalah Selasa" ditampilkan di konsol.

✅ Uji pemahaman Anda tentang kode ini dan kode berikut dengan menjalankannya di konsol browser. Ubah nilai variabel a untuk mengubah hasil `console.log()`.

## Operator Logis dan Boolean

Keputusan yang kompleks sering kali memerlukan evaluasi beberapa kondisi secara bersamaan. Seperti halnya aljabar Boolean memungkinkan matematikawan menggabungkan ekspresi logis, pemrograman menyediakan operator logis untuk menghubungkan beberapa kondisi Boolean.

Operator ini memungkinkan logika kondisional yang canggih dengan menggabungkan evaluasi true/false yang sederhana.

| Simbol | Deskripsi                                                                                     | Contoh                                                                 |
| ------ | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `&&`   | **Logika AND**: Membandingkan dua ekspresi Boolean. Mengembalikan true **hanya** jika kedua sisi adalah true | `(5 > 3) && (5 < 10) // Kedua sisi benar. Mengembalikan true` |
| `\|\|` | **Logika OR**: Membandingkan dua ekspresi Boolean. Mengembalikan true jika setidaknya satu sisi adalah true | `(5 > 10) \|\| (5 < 10) // Satu sisi salah, sisi lainnya benar. Mengembalikan true` |
| `!`    | **Logika NOT**: Mengembalikan nilai yang berlawanan dari ekspresi Boolean                     | `!(5 > 10) // 5 tidak lebih besar dari 10, jadi "!" membuatnya benar` |

Operator ini memungkinkan Anda menggabungkan kondisi dengan cara yang berguna:
- AND (`&&`) berarti kedua kondisi harus benar
- OR (`||`) berarti setidaknya satu kondisi harus benar  
- NOT (`!`) membalikkan true menjadi false (dan sebaliknya)

## Kondisi dan Keputusan dengan Operator Logis

Mari kita lihat bagaimana operator logis ini bekerja dengan contoh yang lebih realistis:

```javascript
let currentMoney = 600;
let laptopPrice = 800;
let laptopDiscountPrice = laptopPrice - (laptopPrice * 0.2); // Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

Dalam contoh ini: kita menghitung harga diskon 20% (640), lalu mengevaluasi apakah dana yang tersedia mencakup harga penuh ATAU harga diskon. Karena 600 memenuhi ambang harga diskon 640, kondisi dievaluasi sebagai benar.

### Operator Negasi

Terkadang lebih mudah untuk memikirkan kapan sesuatu TIDAK benar. Seperti alih-alih bertanya "Apakah pengguna sudah masuk?", Anda mungkin ingin bertanya "Apakah pengguna TIDAK masuk?" Tanda seru (`!`) membalikkan logika untuk Anda.

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

Operator `!` seperti mengatakan "kebalikan dari..." – jika sesuatu adalah `true`, `!` membuatnya `false`, dan sebaliknya.

### Ekspresi Ternary

Untuk penugasan kondisional yang sederhana, JavaScript menyediakan **operator ternary**. Sintaks yang ringkas ini memungkinkan Anda menulis ekspresi kondisional dalam satu baris, berguna saat Anda perlu menetapkan salah satu dari dua nilai berdasarkan kondisi.

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

Ini terbaca seperti pertanyaan: "Apakah kondisi ini benar? Jika ya, gunakan nilai ini. Jika tidak, gunakan nilai itu."

Berikut adalah contoh yang lebih nyata:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Luangkan waktu sebentar untuk membaca kode ini beberapa kali. Apakah Anda memahami bagaimana operator-operator ini bekerja?

Berikut adalah apa yang dikatakan baris ini: "Apakah `firstNumber` lebih besar dari `secondNumber`? Jika ya, masukkan `firstNumber` ke dalam `biggestNumber`. Jika tidak, masukkan `secondNumber` ke dalam `biggestNumber`."

Operator ternary hanyalah cara yang lebih singkat untuk menulis pernyataan `if..else` tradisional ini:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

Kedua pendekatan menghasilkan hasil yang identik. Operator ternary menawarkan kepraktisan, sementara struktur if-else tradisional mungkin lebih mudah dibaca untuk kondisi yang kompleks.

---

## 🚀 Tantangan

Buat program yang ditulis pertama dengan operator logis, lalu tulis ulang menggunakan ekspresi ternary. Mana sintaks yang Anda sukai?

---

## Tantangan Agen GitHub Copilot 🚀

Gunakan mode Agent untuk menyelesaikan tantangan berikut:

**Deskripsi:** Buat kalkulator nilai yang komprehensif yang menunjukkan berbagai konsep pengambilan keputusan dari pelajaran ini, termasuk pernyataan if-else, pernyataan switch, operator logis, dan ekspresi ternary.

**Prompt:** Tulis program JavaScript yang mengambil skor numerik siswa (0-100) dan menentukan nilai huruf mereka menggunakan kriteria berikut:
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: Di bawah 60

Persyaratan:
1. Gunakan pernyataan if-else untuk menentukan nilai huruf
2. Gunakan operator logis untuk memeriksa apakah siswa lulus (nilai >= 60) DAN memiliki penghargaan (nilai >= 90)
3. Gunakan pernyataan switch untuk memberikan umpan balik spesifik untuk setiap nilai huruf
4. Gunakan operator ternary untuk menentukan apakah siswa memenuhi syarat untuk kursus berikutnya (nilai >= 70)
5. Sertakan validasi input untuk memastikan skor berada di antara 0 dan 100

Uji program Anda dengan berbagai skor termasuk kasus tepi seperti 59, 60, 89, 90, dan input yang tidak valid.

Pelajari lebih lanjut tentang [mode agen](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## Kuis Pasca-Pelajaran

[Kuis pasca-pelajaran](https://ff-quizzes.netlify.app/web/quiz/12)

## Tinjauan & Studi Mandiri

Baca lebih lanjut tentang banyak operator yang tersedia untuk pengguna [di MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Jelajahi panduan luar biasa dari Josh Comeau tentang [operator lookup](https://joshwcomeau.com/operator-lookup/)!

## Tugas

[Operators](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang keliru yang timbul dari penggunaan terjemahan ini.