<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "888609c48329c280ca2477d2df40f2e5",
  "translation_date": "2025-08-27T22:48:15+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "ms"
}
-->
# Asas JavaScript: Membuat Keputusan

![Asas JavaScript - Membuat keputusan](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.ms.png)

> Sketchnote oleh [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuiz Pra-Kuliah

[Kuiz pra-kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/11)

Membuat keputusan dan mengawal urutan kod anda dijalankan menjadikan kod anda boleh digunakan semula dan kukuh. Bahagian ini merangkumi sintaks untuk mengawal aliran data dalam JavaScript dan kepentingannya apabila digunakan dengan jenis data Boolean.

[![Membuat Keputusan](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Membuat Keputusan")

> 🎥 Klik imej di atas untuk menonton video tentang membuat keputusan.

> Anda boleh mengikuti pelajaran ini di [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Ringkasan Ringkas tentang Boolean

Boolean hanya boleh mempunyai dua nilai: `true` atau `false`. Boolean membantu membuat keputusan tentang baris kod mana yang perlu dijalankan apabila syarat tertentu dipenuhi.

Tetapkan boolean anda kepada true atau false seperti ini:

`let myTrueBool = true`  
`let myFalseBool = false`

✅ Boolean dinamakan sempena ahli matematik, ahli falsafah, dan ahli logik Inggeris George Boole (1815–1864).

## Operator Perbandingan dan Boolean

Operator digunakan untuk menilai syarat dengan membuat perbandingan yang akan menghasilkan nilai Boolean. Berikut adalah senarai operator yang sering digunakan.

| Simbol | Penerangan                                                                                                                                                   | Contoh             |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Kurang daripada**: Membandingkan dua nilai dan mengembalikan jenis data Boolean `true` jika nilai di sebelah kiri kurang daripada nilai di sebelah kanan    | `5 < 6 // true`    |
| `<=`   | **Kurang daripada atau sama dengan**: Membandingkan dua nilai dan mengembalikan jenis data Boolean `true` jika nilai di sebelah kiri kurang atau sama dengan nilai di sebelah kanan | `5 <= 6 // true`   |
| `>`    | **Lebih daripada**: Membandingkan dua nilai dan mengembalikan jenis data Boolean `true` jika nilai di sebelah kiri lebih besar daripada nilai di sebelah kanan | `5 > 6 // false`   |
| `>=`   | **Lebih daripada atau sama dengan**: Membandingkan dua nilai dan mengembalikan jenis data Boolean `true` jika nilai di sebelah kiri lebih besar atau sama dengan nilai di sebelah kanan | `5 >= 6 // false`  |
| `===`  | **Kesamaan ketat**: Membandingkan dua nilai dan mengembalikan jenis data Boolean `true` jika nilai di sebelah kanan dan kiri adalah sama DAN jenis data juga sama | `5 === 6 // false` |
| `!==`  | **Ketidaksamaan**: Membandingkan dua nilai dan mengembalikan nilai Boolean yang bertentangan dengan apa yang akan dikembalikan oleh operator kesamaan ketat    | `5 !== 6 // true`  |

✅ Uji pengetahuan anda dengan menulis beberapa perbandingan dalam konsol penyemak imbas anda. Adakah data yang dikembalikan mengejutkan anda?

## Pernyataan If

Pernyataan if akan menjalankan kod di antara bloknya jika syarat adalah benar.

```javascript
if (condition) {
  //Condition is true. Code in this block will run.
}
```

Operator logik sering digunakan untuk membentuk syarat.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

## Pernyataan If..Else

Pernyataan `else` akan menjalankan kod di antara bloknya apabila syarat adalah salah. Ia adalah pilihan dengan pernyataan `if`.

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

✅ Uji pemahaman anda tentang kod ini dan kod berikut dengan menjalankannya dalam konsol penyemak imbas. Tukar nilai pemboleh ubah currentMoney dan laptopPrice untuk menukar nilai yang dikembalikan oleh `console.log()`.

## Pernyataan Switch

Pernyataan `switch` digunakan untuk melaksanakan tindakan yang berbeza berdasarkan syarat yang berbeza. Gunakan pernyataan `switch` untuk memilih salah satu daripada banyak blok kod untuk dilaksanakan.

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

✅ Uji pemahaman anda tentang kod ini dan kod berikut dengan menjalankannya dalam konsol penyemak imbas. Tukar nilai pemboleh ubah a untuk menukar nilai yang dikembalikan oleh `console.log()`.

## Operator Logik dan Boolean

Keputusan mungkin memerlukan lebih daripada satu perbandingan, dan boleh digabungkan dengan operator logik untuk menghasilkan nilai Boolean.

| Simbol | Penerangan                                                                                     | Contoh                                                                  |
| ------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **Logik AND**: Membandingkan dua ekspresi Boolean. Mengembalikan true **hanya** jika kedua-dua sisi adalah benar | `(5 > 6) && (5 < 6 ) //Satu sisi salah, satu lagi benar. Mengembalikan false` |
| `\|\|` | **Logik OR**: Membandingkan dua ekspresi Boolean. Mengembalikan true jika sekurang-kurangnya satu sisi adalah benar | `(5 > 6) \|\| (5 < 6) //Satu sisi salah, satu lagi benar. Mengembalikan true` |
| `!`    | **Logik NOT**: Mengembalikan nilai bertentangan dengan ekspresi Boolean                          | `!(5 > 6) // 5 tidak lebih besar daripada 6, tetapi "!" akan mengembalikan true` |

## Syarat dan Keputusan dengan Operator Logik

Operator logik boleh digunakan untuk membentuk syarat dalam pernyataan if..else.

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

Anda telah melihat bagaimana anda boleh menggunakan pernyataan `if...else` untuk mencipta logik bersyarat. Apa sahaja yang dimasukkan ke dalam `if` perlu dinilai kepada true/false. Dengan menggunakan operator `!`, anda boleh _menegasikan_ ekspresi. Ia akan kelihatan seperti ini:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### Ekspresi Ternari

`if...else` bukan satu-satunya cara untuk menyatakan logik keputusan. Anda juga boleh menggunakan sesuatu yang dipanggil operator ternari. Sintaksnya kelihatan seperti ini:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

Berikut adalah contoh yang lebih konkrit:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Luangkan masa sebentar untuk membaca kod ini beberapa kali. Adakah anda memahami bagaimana operator ini berfungsi?

Kod di atas menyatakan bahawa:

- jika `firstNumber` lebih besar daripada `secondNumber`
- maka tetapkan `firstNumber` kepada `biggestNumber`
- jika tidak, tetapkan `secondNumber`.

Ekspresi ternari hanyalah cara ringkas untuk menulis kod berikut:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 Cabaran

Cipta program yang ditulis terlebih dahulu dengan operator logik, dan kemudian tulis semula menggunakan ekspresi ternari. Apakah sintaks yang anda lebih suka?

---

## Kuiz Pasca-Kuliah

[Kuiz pasca-kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/12)

## Ulasan & Kajian Kendiri

Baca lebih lanjut tentang banyak operator yang tersedia untuk pengguna [di MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Lihat panduan operator yang hebat oleh Josh Comeau [di sini](https://joshwcomeau.com/operator-lookup/)!

## Tugasan

[Operator](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.