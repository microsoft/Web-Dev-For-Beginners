# Asas JavaScript: Membuat Keputusan

![Asas JavaScript - Membuat Keputusan](/sketchnotes/webdev101-js-decisions.png)
> Sketchnote karya [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuiz Pra Kuliah
[Kuiz Pra Kuliah](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/11)

Membuat keputusan dan mengawal urutan kod anda berjalan menjadikan kod anda boleh digunakan semula dan kukuh. Bahagian ini merangkumi sintaks untuk mengawal aliran data dalam JavaScript dan kepentingannya apabila digunakan dengan jenis data Boolean

[![Membuat Keputusan](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Membuat Keputusan")

> Klik gambar di atas untuk video mengenai membuat keputusan.
## Secara rumus untuk mengenai Booleans

Booleans boleh hanya dua nilai: `true` atau` false`. Booleans membantu membuat keputusan mengenai garis kod mana yang harus dijalankan apabila syarat tertentu dipenuhi.

Tetapkan boolean anda menjadi benar atau salah seperti ini:

`let myTrueBool = true`
`let myFalseBool = false`

✅ Booleans dinamai oleh ahli matematik Inggeris, ahli falsafah dan ahli logik George Boole (1815-1864).

## Pengendali Perbandingan dan Booleans

Pengendali digunakan untuk menilai keadaan dengan membuat perbandingan yang akan menghasilkan nilai Boolean. Berikut adalah senarai pengendali yang sering digunakan.

| Simbol | Penerangan                                                                                                                                                                      | Contoh             |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Kurang daripada**: Membandingkan dua nilai dan mengembalikan jenis data Boolean `true` jika nilai di sebelah kiri kurang dari kanan                                           | `5 < 6 // true`    |
| `<=`   | **Kurang daripada atau sama dengan**: Membandingkan dua nilai dan mengembalikan jenis data Boolean `true` jika nilai di sebelah kiri kurang dari atau sama dengan kanan         | `5 <= 6 // true`   |
| `>`    | **Lebih daripada**: Membandingkan dua nilai dan mengembalikan jenis data Boolean `true` jika nilai di sebelah kiri lebih besar daripada kanan                                   | `5 > 6 // false`   |
| `>=`   | **Lebih daripada atau sama dengan**: Membandingkan dua nilai dan mengembalikan jenis data Boolean `true` jika nilai di sebelah kiri lebih besar daripada atau sama dengan kanan | `5 >= 6 // false`  |
| `===`  | **Persamaan yang ketat**: Membandingkan dua nilai dan mengembalikan jenis data Boolean `true` jika nilai di kanan dan kiri sama DAN adalah jenis data yang sama.                | `5 === 6 // false` |
| `!==`  | **Ketidaksamaan**: Membandingkan dua nilai dan mengembalikan nilai Boolean yang bertentangan dengan apa yang akan dikembalikan oleh operator persamaan yang ketat               | `5 !== 6 // true`  |

✅ Periksa pengetahuan anda dengan menulis beberapa perbandingan di konsol penyemak imbas anda. Adakah data yang dikembalikan mengejutkan anda?

## Penyata sekiranya (if)

Pernyataan _if_ akan menjalankan kod di antara bloknya jika keadaannya benar.

```javascript
if (condition){
    //Keadaan itu benar. Kod di blok ini akan dijalankan.
}
```

Pengendali logik sering digunakan untuk membentuk keadaan.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    //Keadaan itu benar. Kod di blok ini akan dijalankan.
    console.log("Getting a new laptop!");
}
```

## Penyata (IF.. Else)

Pernyataan `else` akan menjalankan kod di antara bloknya apabila keadaannya salah. Ia pilihan dengan pernyataan `if`.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    //Keadaan itu benar. Kod di blok ini akan dijalankan.
    console.log("Getting a new laptop!");
}
else{
    //Keadaan itu benar. Kod di blok ini akan dijalankan.
    console.log("Can't afford a new laptop, yet!");
}
```

✅ Uji pemahaman anda mengenai kod ini dan kod berikut dengan menjalankannya di konsol penyemak imbas. Tukar nilai pemboleh ubahMoney dan laptopPrice semasa untuk menukar `console.log ()` yang dikembalikan.

## Pengendali Logik dan Booleans 

Keputusan mungkin memerlukan lebih dari satu perbandingan, dan dapat disatukan dengan operator logik untuk menghasilkan nilai Boolean.

| Simbol | Penerangan                                                                                                    | Contoh                                                                         |
| ------ | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `&&`   | **Logik AND**: Membandingkan dua ungkapan Boolean. Mengembalikan benar **hanya** jika kedua-dua sisi benar    | `(5 > 6) && (5 < 6 ) //Satu pihak salah, yang lain benar. Mengembalikan palsu` |
| `\|\|` | **Logik OR**: Membandingkan dua ungkapan Boolean. Mengembalikan benar jika sekurang-kurangnya satu sisi benar | `(5 > 6) \|\| (5 < 6) //Satu pihak salah, yang lain benar. Kembali benar`      |
| `!`    | **Logik NOT**: Mengembalikan nilai bertentangan ungkapan Boolean                                              | `!(5 > 6) // 5 tidak lebih besar daripada 6, tetapi "!" akan kembali benar`    |

## Syarat dan Keputusan dengan Pengendali Logik

Pengendali logik boleh digunakan untuk membentuk keadaan dalam pernyataan (if..else).

```javascript
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) //Harga komputer riba diskaun 20 peratus

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
    //Keadaan itu benar. Kod di blok ini akan dijalankan.
    console.log("Getting a new laptop!");
}
else {
    //Keadaan itu benar. Kod di blok ini akan dijalankan.
    console.log("Can't afford a new laptop, yet!");
}
```

### Pengendali negasi

Anda telah melihat sejauh mana bagaimana anda boleh menggunakan pernyataan `if ... else` untuk membuat logik bersyarat. Apa-apa yang masuk ke `if` perlu dinilai menjadi benar / salah. Dengan menggunakan operator `!` Anda boleh _negate_ ungkapan itu. Ia kelihatan seperti:

```javascript
if (!condition) {
  // kod ini akan berjalan sekiranya keadaan salah
} else {
  // kod ini akan berjalan sekiranya keadaan benar
}
```

### Ungkapan Ternary

`if ... else` bukan satu-satunya cara untuk menyatakan logik keputusan. Anda juga boleh menggunakan sesuatu yang disebut pengendali ternary. Sintaks untuknya kelihatan seperti ini:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

Berikut adalah contoh yang lebih nyata:

```javascript
let firstNumber = 20;
let secondNumber = 10
let biggestNumber = firstNumber > secondNumber ? firstNumber: secondNumber;
```

✅ Luangkan masa sebentar untuk membaca kod ini beberapa kali. Adakah anda faham bagaimana pengendali ini berfungsi?

Perkara di atas menyatakan bahawa
- jika `firstNumber` lebih besar daripada` secondNumber`
- kemudian tetapkan `firstNumber` ke` largeNumber`
- lain tetapkan `secondNumber`.

Ungkapan terner hanyalah cara ringkas untuk menulis kod di bawah:

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

Buat program yang ditulis terlebih dahulu dengan operator logik, dan kemudian tulis semula menggunakan ungkapan terary. Apakah sintaks pilihan anda?

---
## Kuiz Pasca Kuliah
[Kuiz Pasca Kuliah](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/12)

## Mengkaji & Belajar Sendiri

Baca lebih lanjut mengenai banyak pengendali yang ada pada pengguna[pada laman MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Lalui laman Josh Comeau tentang [pengendali](https://joshwcomeau.com/operator-lookup/)!

## Tugasan

[Pengendali](./assignment.ms.md)
