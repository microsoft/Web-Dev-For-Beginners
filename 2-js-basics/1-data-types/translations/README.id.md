# Dasar-dasar JavaScript: Tipe Data

![Dasar-dasar JavaScript - Tipe data](/sketchnotes/webdev101-js-datatypes.png)

> Catatan sketsa oleh [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuis Pra-Kuliah

[Kuis pra-Kuliah](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/7?loc=id)

Pelajaran ini mencakup dasar-dasar JavaScript, bahasa yang menyediakan interaktivitas di web.

[![Jenis data di JavaScript](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Jenis data di JavaScript")

Mari kita mulai dengan variabel dan tipe data yang mengisinya!

## Variabel

Variabel menyimpan nilai yang dapat digunakan dan diubah di seluruh kode Anda.

Membuat dan **mendeklarasikan** variabel memiliki sintaks berikut **[kata kunci] [nama]**. Itu terdiri dari dua bagian:

- **Kata kunci (Keywords)**. Kata kunci bisa `let` atau `var`.

  > Catatan, Mereka kata kunci `let` diperkenalkan di ES6 dan memberi variabel Anda apa yang disebut _block scope_. Anda disarankan untuk menggunakan `let` di atas `var`. Kita akan membahas cakupan blok lebih mendalam di bagian mendatang.

- **Nama variabel**, ini adalah nama yang Anda pilih sendiri.

### Tugas - bekerja dengan variabel

1. **Deklarasikan variabel**. Mari kita deklarasikan variabel menggunakan kata kunci `let`:

   ```javascript
   let variabelSaya;
   ```

   `variabelSaya` sekarang telah dideklarasikan menggunakan kata kunci `let`. Saat ini tidak memiliki nilai.

1. **Tetapkan nilai**. Simpan nilai dalam variabel dengan operator `=`, diikuti dengan nilai yang diharapkan.

   ```javascript
   variabelSaya = 123;
   ```

   > Catatan: penggunaan `=` dalam pelajaran ini berarti kita menggunakan "operator penugasan (assignment operator)", yang digunakan untuk menetapkan nilai ke variabel. Itu _tidak menunjukkan kesetaraan_.

   `variabelSaya` sekarang telah _diinisialisasi (initialized)_ dengan nilai 123.

1. **Refaktor**. Ganti kode Anda dengan pernyataan berikut.

   ```javascript
   let variabelSaya = 123;
   ```

   Di atas disebut inisialisasi _explisit_ saat variabel dideklarasikan dan diberi nilai pada saat yang sama.

1. **Ubah nilai variabel**. Ubah nilai variabel dengan cara berikut:

   ```javascript
   variabelSaya = 321;
   ```

   Setelah variabel dideklarasikan, Anda dapat mengubah nilainya di titik mana pun dalam kode Anda dengan operator `=` dan nilai baru.

   ✅ Cobalah! Anda dapat menulis JavaScript langsung di browser Anda. Buka jendela browser dan arahkan ke Alat Pengembang. Di konsol, Anda akan menemukan prompt; ketik `let variabelSaya = 123`, tekan enter, lalu ketik `variabelSaya`. Apa yang terjadi? Catatan, Anda akan mempelajari lebih lanjut tentang konsep ini di pelajaran berikutnya.

## Konstanta (Constants)

Deklarasi dan inisialisasi konstanta mengikuti konsep yang sama sebagai variabel, dengan pengecualian kata kunci `const`. Konstanta biasanya dideklarasikan dengan semua huruf besar.

```javascript
const VARIABEL_SAYA = 123;
```

Konstanta mirip dengan variabel, dengan dua pengecualian:

- **Harus punya nilai**. Konstanta harus diinisialisasi, atau kesalahan akan terjadi saat menjalankan kode.
- **Referensi tidak dapat diubah**. Referensi konstanta tidak dapat diubah setelah diinisialisasi, atau kesalahan akan terjadi saat menjalankan kode. Mari kita lihat dua contoh:

  - **Nilai sederhana**. Berikut ini TIDAK diperbolehkan:

    ```javascript
    const PI = 3;
    PI = 4; // tidak diperbolehkan
    ```

  - **Referensi objek dilindungi**. Berikut ini TIDAK diperbolehkan.

    ```javascript
    const obj = { a: 3 };
    obj = { b: 5 }; // tidak diperbolehkan
    ```

  - **Nilai objek tidak dilindungi**. Berikut diperbolehkan:

    ```javascript
    const obj = { a: 3 };
    obj.a = 5; // diperbolehkan
    ```

    Di atas Anda mengubah nilai objek tetapi bukan referensi itu sendiri, yang membuatnya diizinkan.

  > Catatan, `const` berarti referensi dilindungi dari penugasan ulang. Nilainya tidak _immutable_ dan bisa berubah, terutama jika itu adalah konstruksi kompleks seperti sebuah objek.

## Tipe Data

Variabel dapat menyimpan berbagai jenis nilai, seperti angka dan teks. Berbagai jenis nilai ini dikenal sebagai **tipe data**. Tipe data adalah bagian penting dari pengembangan perangkat lunak karena membantu pengembang membuat keputusan tentang bagaimana kode harus ditulis dan bagaimana perangkat lunak harus dijalankan. Selain itu, beberapa tipe data memiliki fitur unik yang membantu mengubah atau mengekstrak informasi tambahan dalam sebuah nilai.

✅ Tipe Data juga disebut sebagai data primitif JavaScript, karena mereka adalah tipe data tingkat terendah yang disediakan oleh bahasa. Ada 6 tipe data primitif: string, number, bigint, boolean, undefined, dan symbol. Luangkan waktu sebentar untuk memvisualisasikan apa yang mungkin diwakili oleh masing-masing primitif ini. Apa itu `zebra`? Bagaimana dengan `0`? `true`?

### Angka (Numbers)

Pada bagian sebelumnya nilai `variabelSaya` adalah tipe data angka.

`let variabelSaya = 123;`

Variabel dapat menyimpan semua jenis angka, termasuk desimal atau angka negatif. Angka juga dapat digunakan dengan operator aritmatika, yang dibahas di [bagian selanjutnya](#Operator-Aritmatika).

### Operator Aritmatika

Ada beberapa jenis operator untuk digunakan saat menjalankan fungsi aritmatika, dan beberapa di antaranya tercantum di sini:

| Simbol | Deskripsi                                           | Contoh                                     |
| ------ | --------------------------------------------------- | ------------------------------------------ |
| `+`    | **Penjumlahan**: Menghitung jumlah dari dua angka   | `1 + 2 //hasil yang diharapkan adalah 3`   |
| `-`    | **Pengurangan**: Menghitung selisih dua angka       | `1 - 2 //hasil yang diharapkan adalah -1`  |
| `*`    | **Perkalian**: Menghitung hasil kali dua angka      | `1 * 2 //hasil yang diharapkan adalah 2`   |
| `/`    | **Pembagian**: Menghitung hasil bagi dari dua angka | `1 / 2 //hasil yang diharapkan adalah 0.5` |
| `%`    | **Sisa**: Menghitung sisa dari pembagian dua angka  | `3 % 2 //hasil yang diharapkan adalah 1`   |

✅ Cobalah! Coba operasi aritmatika di konsol browser Anda. Apakah hasilnya mengejutkan Anda?

### String

String adalah kumpulan karakter yang berada di antara tanda kutip tunggal atau ganda.

- `'Ini string'`
- `"Ini juga string"`
- `let myString = 'Ini adalah nilai string yang disimpan dalam variabel';`

Ingatlah untuk menggunakan tanda kutip saat menulis string, atau JavaScript akan menganggapnya sebagai nama variabel.

### Memformat String

String bersifat tekstual, dan akan membutuhkan pemformatan dari waktu ke waktu.

Untuk **menggabungkan (concatenate)** dua string atau lebih, atau menggabungkannya, gunakan operator `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
```

✅ Mengapa `1 + 1 = 2` di JavaScript, tetapi`'1' + '1' = 11?`Pikirkanlah. Bagaimana dengan `'1' + 1`?

**Template literals** adalah cara lain untuk memformat string, kecuali sebagai pengganti tanda kutip, digunakan backtick. Apa pun yang bukan teks biasa harus ditempatkan di dalam placeholder `${ }`. Ini termasuk variabel apa pun yang mungkin berupa string.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!`; //Hello World!
```

Anda dapat mencapai tujuan pemformatan Anda dengan salah satu metode, tetapi template literal akan menghormati spasi dan jeda baris apa pun.

✅ Kapan Anda akan menggunakan template literal dibanding string biasa?

### Boolean

Boolean hanya dapat berupa dua nilai: `true` atau `false`. Boolean dapat membantu membuat keputusan tentang baris kode mana yang harus dijalankan ketika kondisi tertentu terpenuhi. Dalam banyak kasus, [operator](#operator) membantu pengaturan nilai Boolean dan Anda akan sering melihat dan menulis variabel yang diinisialisasi atau nilainya diperbarui dengan operator.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ Variabel dapat dianggap 'benar (truthy)' jika dievaluasi ke boolean `true`. Menariknya, di JavaScript, [semua nilai adalah benar (truthy) kecuali jika didefinisikan sebagai salah](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## 🚀 Tantangan

JavaScript terkenal karena cara yang mengejutkan dalam menangani tipe data pada kesempatan tertentu. Lakukan sedikit riset tentang 'kejutaan' ini. Misalnya: sensitivitas kasus bisa menggigit! Coba ini di konsol Anda: `let usia = 1; let Usia = 2; usia == Usia` (meghasilkan `false` - kenapa?). Kejutan lain apa yang bisa kamu temukan?

## Kuis Pasca-Kuliah

[Kuis pasca-kuliah](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/8?loc=id)

## Review & Belajar Mandiri

Lihat [daftar latihan JavaScript ini](https://css-tricks.com/snippets/javascript/) dan coba salah satunya. Apa yang kamu pelajari?

## Tugas

[Praktek Tipe Data](assignment.id.md)
