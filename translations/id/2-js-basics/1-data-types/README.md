<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b95fdd8310ef467305015ece1b0f9411",
  "translation_date": "2025-08-29T09:13:19+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "id"
}
-->
# Dasar-Dasar JavaScript: Tipe Data

![Dasar-Dasar JavaScript - Tipe Data](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.id.png)
> Sketchnote oleh [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuis Sebelum Pelajaran
[Kuis sebelum pelajaran](https://ff-quizzes.netlify.app/web/)

Pelajaran ini membahas dasar-dasar JavaScript, bahasa yang memberikan interaktivitas pada web.

> Anda dapat mengikuti pelajaran ini di [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Variabel](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variabel dalam JavaScript")

[![Tipe Data dalam JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Tipe Data dalam JavaScript")

> 🎥 Klik gambar di atas untuk video tentang variabel dan tipe data

Mari kita mulai dengan variabel dan tipe data yang mengisinya!

## Variabel

Variabel menyimpan nilai yang dapat digunakan dan diubah sepanjang kode Anda.

Membuat dan **mendeklarasikan** variabel memiliki sintaks berikut **[keyword] [name]**. Ini terdiri dari dua bagian:

- **Keyword**. Keyword dapat berupa `let` atau `var`.  

✅ Keyword `let` diperkenalkan di ES6 dan memberikan variabel Anda yang disebut _block scope_. Disarankan untuk menggunakan `let` daripada `var`. Kita akan membahas block scope lebih mendalam di bagian selanjutnya.
- **Nama variabel**, ini adalah nama yang Anda pilih sendiri.

### Tugas - bekerja dengan variabel

1. **Deklarasikan variabel**. Mari deklarasikan variabel menggunakan keyword `let`:

    ```javascript
    let myVariable;
    ```

   `myVariable` sekarang telah dideklarasikan menggunakan keyword `let`. Saat ini belum memiliki nilai.

1. **Berikan nilai**. Simpan nilai dalam variabel dengan operator `=` diikuti oleh nilai yang diharapkan.

    ```javascript
    myVariable = 123;
    ```

   > Catatan: penggunaan `=` dalam pelajaran ini berarti kita menggunakan "operator penugasan", digunakan untuk menetapkan nilai ke variabel. Ini tidak menunjukkan kesetaraan.

   `myVariable` sekarang telah *diinisialisasi* dengan nilai 123.

1. **Refactor**. Ganti kode Anda dengan pernyataan berikut.

    ```javascript
    let myVariable = 123;
    ```

    Di atas disebut _inisialisasi eksplisit_ ketika variabel dideklarasikan dan diberi nilai pada saat yang sama.

1. **Ubah nilai variabel**. Ubah nilai variabel dengan cara berikut:

   ```javascript
   myVariable = 321;
   ```

   Setelah variabel dideklarasikan, Anda dapat mengubah nilainya kapan saja dalam kode Anda dengan operator `=` dan nilai baru.

   ✅ Coba! Anda dapat menulis JavaScript langsung di browser Anda. Buka jendela browser dan navigasikan ke Developer Tools. Di konsol, Anda akan menemukan prompt; ketik `let myVariable = 123`, tekan enter, lalu ketik `myVariable`. Apa yang terjadi? Catatan, Anda akan mempelajari lebih lanjut tentang konsep-konsep ini di pelajaran berikutnya.

## Konstanta

Deklarasi dan inisialisasi konstanta mengikuti konsep yang sama seperti variabel, dengan pengecualian keyword `const`. Konstanta biasanya dideklarasikan dengan huruf besar semua.

```javascript
const MY_VARIABLE = 123;
```

Konstanta mirip dengan variabel, dengan dua pengecualian:

- **Harus memiliki nilai**. Konstanta harus diinisialisasi, atau akan terjadi kesalahan saat menjalankan kode.
- **Referensi tidak dapat diubah**. Referensi konstanta tidak dapat diubah setelah diinisialisasi, atau akan terjadi kesalahan saat menjalankan kode. Mari kita lihat dua contoh:
   - **Nilai sederhana**. Berikut ini TIDAK diperbolehkan:
   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```
 
   - **Referensi objek dilindungi**. Berikut ini TIDAK diperbolehkan.
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

    - **Nilai objek tidak dilindungi**. Berikut ini DIPERBOLEHKAN:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      Di atas Anda mengubah nilai objek tetapi bukan referensinya, yang membuatnya diperbolehkan.

   > Catatan, `const` berarti referensi dilindungi dari penugasan ulang. Namun, nilainya tidak _immutable_ dan dapat berubah, terutama jika itu adalah konstruksi kompleks seperti objek.

## Tipe Data

Variabel dapat menyimpan berbagai jenis nilai, seperti angka dan teks. Berbagai jenis nilai ini dikenal sebagai **tipe data**. Tipe data adalah bagian penting dari pengembangan perangkat lunak karena membantu pengembang membuat keputusan tentang bagaimana kode harus ditulis dan bagaimana perangkat lunak harus berjalan. Selain itu, beberapa tipe data memiliki fitur unik yang membantu mengubah atau mengekstrak informasi tambahan dari suatu nilai.

✅ Tipe Data juga disebut sebagai primitif data JavaScript, karena mereka adalah tipe data tingkat terendah yang disediakan oleh bahasa. Ada 7 tipe data primitif: string, number, bigint, boolean, undefined, null, dan symbol. Luangkan waktu sejenak untuk membayangkan apa yang masing-masing primitif ini mungkin wakili. Apa itu `zebra`? Bagaimana dengan `0`? `true`?

### Angka

Pada bagian sebelumnya, nilai dari `myVariable` adalah tipe data angka.

`let myVariable = 123;`

Variabel dapat menyimpan semua jenis angka, termasuk desimal atau angka negatif. Angka juga dapat digunakan dengan operator aritmatika, yang dibahas di [bagian berikutnya](../../../../2-js-basics/1-data-types).

### Operator Aritmatika

Ada beberapa jenis operator yang dapat digunakan saat melakukan fungsi aritmatika, dan beberapa di antaranya tercantum di sini:

| Simbol | Deskripsi                                                               | Contoh                          |
| ------ | ----------------------------------------------------------------------- | -------------------------------- |
| `+`    | **Penjumlahan**: Menghitung jumlah dua angka                            | `1 + 2 //jawaban yang diharapkan adalah 3`   |
| `-`    | **Pengurangan**: Menghitung selisih dua angka                           | `1 - 2 //jawaban yang diharapkan adalah -1`  |
| `*`    | **Perkalian**: Menghitung hasil kali dua angka                          | `1 * 2 //jawaban yang diharapkan adalah 2`   |
| `/`    | **Pembagian**: Menghitung hasil bagi dua angka                          | `1 / 2 //jawaban yang diharapkan adalah 0.5` |
| `%`    | **Sisa bagi**: Menghitung sisa dari pembagian dua angka                 | `1 % 2 //jawaban yang diharapkan adalah 1`   |

✅ Coba! Coba operasi aritmatika di konsol browser Anda. Apakah hasilnya mengejutkan Anda?

### String

String adalah kumpulan karakter yang berada di antara tanda kutip tunggal atau ganda.

- `'Ini adalah string'`
- `"Ini juga string"`
- `let myString = 'Ini adalah nilai string yang disimpan dalam variabel';`

Ingatlah untuk menggunakan tanda kutip saat menulis string, jika tidak JavaScript akan menganggapnya sebagai nama variabel.

### Memformat String

String bersifat tekstual, dan akan membutuhkan pemformatan dari waktu ke waktu.

Untuk **menggabungkan** dua atau lebih string, atau menyatukannya, gunakan operator `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ Mengapa `1 + 1 = 2` dalam JavaScript, tetapi `'1' + '1' = 11?` Pikirkan tentang itu. Bagaimana dengan `'1' + 1`?

**Template literals** adalah cara lain untuk memformat string, kecuali alih-alih tanda kutip, backtick digunakan. Apa pun yang bukan teks biasa harus ditempatkan di dalam placeholder `${ }`. Ini termasuk variabel apa pun yang mungkin berupa string.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

Anda dapat mencapai tujuan pemformatan Anda dengan salah satu metode, tetapi template literals akan menghormati spasi dan jeda baris.

✅ Kapan Anda akan menggunakan template literal dibandingkan string biasa?

### Boolean

Boolean hanya dapat memiliki dua nilai: `true` atau `false`. Boolean dapat membantu membuat keputusan tentang baris kode mana yang harus dijalankan ketika kondisi tertentu terpenuhi. Dalam banyak kasus, [operator](../../../../2-js-basics/1-data-types) membantu menetapkan nilai Boolean dan Anda sering kali akan melihat dan menulis variabel yang diinisialisasi atau nilainya diperbarui dengan operator.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ Sebuah variabel dapat dianggap 'truthy' jika dievaluasi menjadi boolean `true`. Menariknya, dalam JavaScript, [semua nilai adalah truthy kecuali didefinisikan sebagai falsy](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## 🚀 Tantangan

JavaScript terkenal dengan cara mengejutkannya dalam menangani tipe data pada beberapa kesempatan. Lakukan sedikit penelitian tentang 'kejutan' ini. Misalnya: sensitivitas huruf besar/kecil bisa menjebak! Coba ini di konsol Anda: `let age = 1; let Age = 2; age == Age` (hasilnya `false` -- mengapa?). Apa kejutan lain yang dapat Anda temukan?

## Kuis Setelah Pelajaran
[Kuis setelah pelajaran](https://ff-quizzes.netlify.app)

## Tinjauan & Studi Mandiri

Lihat [daftar latihan JavaScript ini](https://css-tricks.com/snippets/javascript/) dan coba satu. Apa yang Anda pelajari?

## Tugas

[Latihan Tipe Data](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diperhatikan bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang berwenang. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa terjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.