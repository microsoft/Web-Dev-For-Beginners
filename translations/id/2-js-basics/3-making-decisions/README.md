<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "888609c48329c280ca2477d2df40f2e5",
  "translation_date": "2025-08-27T22:47:56+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "id"
}
-->
# Dasar-Dasar JavaScript: Membuat Keputusan

![Dasar-Dasar JavaScript - Membuat keputusan](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.id.png)

> Sketchnote oleh [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuis Sebelum Kuliah

[Kuis sebelum kuliah](https://ff-quizzes.netlify.app/web/quiz/11)

Membuat keputusan dan mengontrol urutan kode yang dijalankan membuat kode Anda dapat digunakan kembali dan tangguh. Bagian ini membahas sintaks untuk mengontrol alur data dalam JavaScript dan pentingnya saat digunakan dengan tipe data Boolean.

[![Membuat Keputusan](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Membuat Keputusan")

> 🎥 Klik gambar di atas untuk video tentang membuat keputusan.

> Anda dapat mengikuti pelajaran ini di [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Sekilas Tentang Boolean

Boolean hanya memiliki dua nilai: `true` atau `false`. Boolean membantu membuat keputusan tentang baris kode mana yang harus dijalankan ketika kondisi tertentu terpenuhi.

Tetapkan nilai boolean Anda menjadi true atau false seperti ini:

`let myTrueBool = true`  
`let myFalseBool = false`

✅ Boolean dinamai sesuai dengan matematikawan, filsuf, dan ahli logika Inggris George Boole (1815–1864).

## Operator Perbandingan dan Boolean

Operator digunakan untuk mengevaluasi kondisi dengan membuat perbandingan yang menghasilkan nilai Boolean. Berikut adalah daftar operator yang sering digunakan.

| Simbol | Deskripsi                                                                                                                                                   | Contoh             |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Kurang dari**: Membandingkan dua nilai dan mengembalikan tipe data Boolean `true` jika nilai di sisi kiri lebih kecil daripada nilai di sisi kanan         | `5 < 6 // true`    |
| `<=`   | **Kurang dari atau sama dengan**: Membandingkan dua nilai dan mengembalikan tipe data Boolean `true` jika nilai di sisi kiri lebih kecil atau sama dengan nilai di sisi kanan | `5 <= 6 // true`   |
| `>`    | **Lebih besar dari**: Membandingkan dua nilai dan mengembalikan tipe data Boolean `true` jika nilai di sisi kiri lebih besar daripada nilai di sisi kanan    | `5 > 6 // false`   |
| `>=`   | **Lebih besar dari atau sama dengan**: Membandingkan dua nilai dan mengembalikan tipe data Boolean `true` jika nilai di sisi kiri lebih besar atau sama dengan nilai di sisi kanan | `5 >= 6 // false`  |
| `===`  | **Kesetaraan ketat**: Membandingkan dua nilai dan mengembalikan tipe data Boolean `true` jika nilai di sisi kanan dan kiri sama DAN memiliki tipe data yang sama | `5 === 6 // false` |
| `!==`  | **Ketidaksamaan**: Membandingkan dua nilai dan mengembalikan nilai Boolean yang berlawanan dengan apa yang akan dikembalikan oleh operator kesetaraan ketat  | `5 !== 6 // true`  |

✅ Uji pengetahuan Anda dengan menulis beberapa perbandingan di konsol browser Anda. Apakah ada data yang dikembalikan yang mengejutkan Anda?

## Pernyataan If

Pernyataan if akan menjalankan kode di antara bloknya jika kondisinya benar.

```javascript
if (condition) {
  //Condition is true. Code in this block will run.
}
```

Operator logika sering digunakan untuk membentuk kondisi.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

## Pernyataan If..Else

Pernyataan `else` akan menjalankan kode di antara bloknya ketika kondisinya salah. Pernyataan ini bersifat opsional dengan pernyataan `if`.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

✅ Uji pemahaman Anda tentang kode ini dan kode berikut dengan menjalankannya di konsol browser. Ubah nilai variabel currentMoney dan laptopPrice untuk mengubah hasil `console.log()`.

## Pernyataan Switch

Pernyataan `switch` digunakan untuk melakukan tindakan yang berbeda berdasarkan kondisi yang berbeda. Gunakan pernyataan `switch` untuk memilih salah satu dari banyak blok kode yang akan dijalankan.

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

```javascript
// program using switch statement
let a = 2;

switch (a) {
  case 1:
    a = "one";
    break;
  case 2:
    a = "two";
    break;
  default:
    a = "not found";
    break;
}
console.log(`The value is ${a}`);
```

✅ Uji pemahaman Anda tentang kode ini dan kode berikut dengan menjalankannya di konsol browser. Ubah nilai variabel a untuk mengubah hasil `console.log()`.

## Operator Logika dan Boolean

Keputusan mungkin memerlukan lebih dari satu perbandingan, dan dapat dirangkai bersama dengan operator logika untuk menghasilkan nilai Boolean.

| Simbol | Deskripsi                                                                                     | Contoh                                                                 |
| ------ | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `&&`   | **Logika AND**: Membandingkan dua ekspresi Boolean. Mengembalikan true **hanya** jika kedua sisi bernilai true | `(5 > 6) && (5 < 6 ) //Satu sisi salah, sisi lainnya benar. Mengembalikan false` |
| `\|\|` | **Logika OR**: Membandingkan dua ekspresi Boolean. Mengembalikan true jika setidaknya satu sisi bernilai true | `(5 > 6) \|\| (5 < 6) //Satu sisi salah, sisi lainnya benar. Mengembalikan true` |
| `!`    | **Logika NOT**: Mengembalikan nilai yang berlawanan dari ekspresi Boolean                      | `!(5 > 6) // 5 tidak lebih besar dari 6, tetapi "!" akan mengembalikan true`     |

## Kondisi dan Keputusan dengan Operator Logika

Operator logika dapat digunakan untuk membentuk kondisi dalam pernyataan if..else.

```javascript
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - laptopPrice * 0.2; //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is true. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

### Operator Negasi

Sejauh ini Anda telah melihat bagaimana Anda dapat menggunakan pernyataan `if...else` untuk membuat logika bersyarat. Apa pun yang dimasukkan ke dalam `if` harus dievaluasi menjadi true/false. Dengan menggunakan operator `!`, Anda dapat _menegasikan_ ekspresi. Ini akan terlihat seperti ini:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### Ekspresi Ternary

`if...else` bukan satu-satunya cara untuk mengekspresikan logika keputusan. Anda juga dapat menggunakan sesuatu yang disebut operator ternary. Sintaksnya terlihat seperti ini:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

Berikut adalah contoh yang lebih nyata:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Luangkan waktu untuk membaca kode ini beberapa kali. Apakah Anda memahami bagaimana operator ini bekerja?

Kode di atas menyatakan bahwa:

- jika `firstNumber` lebih besar dari `secondNumber`
- maka tetapkan `firstNumber` ke `biggestNumber`
- jika tidak, tetapkan `secondNumber`.

Ekspresi ternary hanyalah cara ringkas untuk menulis kode berikut:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 Tantangan

Buat program yang ditulis pertama dengan operator logika, lalu tulis ulang menggunakan ekspresi ternary. Apa sintaks yang Anda sukai?

---

## Kuis Setelah Kuliah

[Kuis setelah kuliah](https://ff-quizzes.netlify.app/web/quiz/12)

## Tinjauan & Studi Mandiri

Baca lebih lanjut tentang banyak operator yang tersedia untuk pengguna [di MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Jelajahi alat pencarian operator yang luar biasa dari Josh Comeau [di sini](https://joshwcomeau.com/operator-lookup/)!

## Tugas

[Operator](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diingat bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.