# Dasar-dasar JavaScript: Membuat Keputusan

![Dasar-dasar JavaScript - Membuat Keputusan](/sketchnotes/webdev101-js-decisions.png)

> Sketsa oleh [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuis Pra-Kuliah

[Kuis pra-Kuliah](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/11?loc=id)

Membuat keputusan dan mengontrol urutan kode Anda berjalan membuat kode Anda dapat digunakan kembali dan kuat. Bagian ini membahas sintaks untuk mengontrol aliran data di JavaScript dan signifikansinya saat digunakan dengan tipe data Boolean.

[![Membuat keputusan](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Membuat keputusan")

## Rekap Singkat tentang Boolean

Boolean hanya dapat berupa dua nilai: `true` atau `false`. Boolean membantu membuat keputusan tentang baris kode mana yang harus dijalankan ketika kondisi tertentu terpenuhi.

Setel boolean Anda menjadi true atau false seperti ini:

`let myTrueBool = true`
`let myFalseBool = false`

✅ Nama Boolean diambil dari ahli matematika, filsuf, dan ahli logika Inggris George Boole (1815-1864).

## Operator Perbandingan dan Boolean

Operator digunakan untuk mengevaluasi kondisi dengan membuat perbandingan yang akan menghasilkan nilai Boolean. Berikut ini adalah daftar operator yang sering digunakan.

| Simbol | Deskripsi                                                                                                                                                                  | Contoh             |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Kurang dari**: Membandingkan dua nilai dan mengembalikan jenis data Boolean `true` jika nilai di sisi kiri kurang dari kanan                                             | `5 < 6 // true`    |
| `<=`   | **Kurang dari atau sama dengan**: Membandingkan dua nilai dan mengembalikan jenis data Boolean `true` jika nilai di sisi kiri kurang dari atau sama dengan kanan           | `5 <= 6 // true`   |
| `>`    | **Lebih besar dari**: Membandingkan dua nilai dan mengembalikan tipe data Boolean `true` jika nilai di sisi kiri lebih besar dari kanan                                    | `5 > 6 // false`   |
| `>=`   | **Lebih besar dari atau sama dengan**: Membandingkan dua nilai dan mengembalikan jenis data Boolean `true` jika nilai di sisi kiri lebih besar dari atau sama dengan kanan | `5 >= 6 // false`  |
| `===`  | **Kesetaraan ketat**: Membandingkan dua nilai dan mengembalikan jenis data Boolean `true` jika nilai di kanan dan kiri sama DAN merupakan jenis data yang sama.            | `5 === 6 // false` |
| `!==`  | **Ketidaksamaan**: Membandingkan dua nilai dan mengembalikan nilai Boolean yang berlawanan dari yang akan dikembalikan oleh operator persamaan ketat                       | `5 !== 6 // true`  |

✅ Uji pengetahuan Anda dengan menulis beberapa perbandingan di konsol browser Anda. Apakah data yang dikembalikan mengejutkan Anda?

## Pernyataan If

Pernyataan if akan menjalankan kode di antara bloknya jika kondisinya benar.

```javascript
if (kondisi) {
  //Kondisinya benar. Kode di blok ini akan berjalan.
}
```

Operator logika sering digunakan untuk membentuk kondisi tersebut.

```javascript
let uangSekarang;
let hargaLaptop;

if (uangSekarang >= hargaLaptop) {
  //Kondisinya benar. Kode di blok ini akan berjalan.
  console.log("Mendapatkan laptop baru!");
}
```

## Pernyataan IF..Else

Pernyataan `else` akan menjalankan kode di antara bloknya jika kondisinya salah. Ini opsional dengan pernyataan `if`, jadi tidak semua `if` harus diikuti dengan pernyataan `else`.

```javascript
let uangSekarang;
let hargaLaptop;

if (uangSekarang >= hargaLaptop) {
  //Kondisinya benar. Kode di blok ini akan berjalan.
  console.log("Mendapatkan laptop baru!");
} else {
  //Kondisinya benar. Kode di blok ini akan berjalan.
  console.log("Belum bisa membeli laptop baru!");
}
```

✅ Uji pemahaman Anda tentang kode ini dan kode berikut dengan menjalankannya di konsol browser. Ubah nilai variabel uangSekarang dan hargaLaptop untuk mengubah `console.log()` yang dikembalikan.

## Operator Logis dan Boolean

Keputusan mungkin memerlukan lebih dari satu perbandingan, dan dapat digabungkan dengan operator logika untuk menghasilkan nilai Boolean.

| Simbol | Deskripsi                                                                                                      | Contoh                                                                                 |
| ------ | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `&&`   | **Logical AND**: Membandingkan dua ekspresi Boolean. Mengembalikan nilai benar **hanya** jika kedua sisi benar | `(5 > 6) && (5 < 6 ) //Satu sisi salah, sisi lainnya benar. Mengembalikan nilai salah` |
| `\|\|` | **Logical OR**: Membandingkan dua ekspresi Boolean. Mengembalikan nilai benar jika setidaknya satu sisi benar  | `(5 > 6) \|\| (5 < 6) //Satu sisi salah, sisi lainnya benar. Mengembalikan nilai true` |
| `!`    | **Logical NOT**: Menampilkan nilai kebalikan dari ekspresi Boolean                                             | `!(5 > 6) // 5 tidak lebih besar dari 6, tapi "!" akan kembali benar`                  |

## Kondisi dan Keputusan dengan Operator Logis

Operator logika dapat digunakan untuk membentuk kondisi dalam pernyataan if..else.

```javascript
let uangSekarang;
let hargaLaptop;
let hargaDiskonLaptop = hargaLaptop - hargaLaptop * 0.2; //Harga laptop diskon 20 persen

if (uangSekarang >= hargaLaptop || uangSekarang >= hargaDiskonLaptop) {
  //Kondisinya benar. Kode di blok ini akan berjalan.
  console.log("Mendapatkan laptop baru!");
} else {
  //Kondisinya benar. Kode di blok ini akan berjalan.
  console.log("Belum bisa membeli laptop baru!");
}
```

### Operator Negasi

Anda telah melihat sejauh ini bagaimana jika Anda bisa menggunakan pernyataan `if ... else` untuk membuat logika kondisional. Apa pun yang menjadi `jika` perlu dievaluasi menjadi benar / salah. Dengan menggunakan operator `!` Anda dapat _negate_ ekspresi. Ini akan terlihat seperti ini:

```javascript
if (!kondisi) {
  // berjalan jika kondisinya false
} else {
  // berjalan jika kondisinya true
}
```

### Ekspresi Terner

`if ... else` bukanlah satu-satunya cara untuk mengekspresikan logika keputusan. Anda juga dapat menggunakan sesuatu yang disebut operator terner (ternary operator). Sintaksnya terlihat seperti ini:

```javascript
let variable = kondisi ? <kembalikan ini jika benar> : <kembalikan ini jika salah>`
```

Di bawah ini adalah contoh yang lebih nyata:

```javascript
let nomorPertama = 20;
let nomorKedua = 10;
let nomorTerbesar = nomorPertama > nomorKedua ? nomorPertama : nomorKedua;
```

✅ Luangkan waktu sebentar untuk membaca kode ini beberapa kali. Apakah Anda memahami cara kerja operator ini?

Di atas menyatakan bahwa

- jika `nomorPertama` lebih besar dari `nomorKedua`
- tetapkan `nomorPertama` ke `nomorTerbesar`
- jika tidak tetapkan `nomorKedua`.

Ekspresi terner hanyalah cara ringkas untuk menulis kode di bawah ini:

```javascript
let nomorTerbesar;
if (nomorPertama > nomorKedua) {
  nomorTerbesar = nomorPertama;
} else {
  nomorTerbesar = nomorKedua;
}
```

---

## 🚀 Tantangan

Buat program yang ditulis pertama kali dengan operator logika, lalu tulis ulang menggunakan ekspresi terner. Apa sintaks pilihan Anda?

## Kuis Pasca-Kuliah

[Kuis pasca-kuliah](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/12?loc=id)

## Review & Belajar Mandiri

Baca lebih lanjut tentang banyak operator yang tersedia untuk pengguna [di MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Lihat [pencarian operator](https://joshwcomeau.com/operator-lookup/) oleh Josh Comeau yang luar biasa!

## Tugas

[Operator](./assignment.id.md)
