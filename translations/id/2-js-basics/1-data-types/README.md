<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0092f6533ae3ec3adad5b5ece68efaf",
  "translation_date": "2025-10-24T13:56:11+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "id"
}
-->
# Dasar-Dasar JavaScript: Tipe Data

![Dasar-Dasar JavaScript - Tipe Data](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.id.png)
> Sketchnote oleh [Tomomi Imura](https://twitter.com/girlie_mac)

Tipe data adalah salah satu konsep mendasar dalam JavaScript yang akan Anda temui di setiap program yang Anda tulis. Pikirkan tipe data seperti sistem pengarsipan yang digunakan oleh pustakawan kuno di Alexandria – mereka memiliki tempat khusus untuk gulungan yang berisi puisi, matematika, dan catatan sejarah. JavaScript mengorganisasi informasi dengan cara serupa, dengan kategori yang berbeda untuk berbagai jenis data.

Dalam pelajaran ini, kita akan menjelajahi tipe data inti yang membuat JavaScript bekerja. Anda akan belajar cara menangani angka, teks, nilai benar/salah, dan memahami mengapa memilih tipe yang tepat sangat penting untuk program Anda. Konsep-konsep ini mungkin tampak abstrak pada awalnya, tetapi dengan latihan, mereka akan menjadi kebiasaan.

Memahami tipe data akan membuat segalanya dalam JavaScript jauh lebih jelas. Sama seperti arsitek perlu memahami berbagai bahan bangunan sebelum membangun katedral, dasar-dasar ini akan mendukung segala sesuatu yang Anda bangun ke depannya.

## Kuis Sebelum Pelajaran
[Kuis sebelum pelajaran](https://ff-quizzes.netlify.app/web/)

Pelajaran ini mencakup dasar-dasar JavaScript, bahasa yang menyediakan interaktivitas di web.

> Anda dapat mengikuti pelajaran ini di [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Variabel](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variabel dalam JavaScript")

[![Tipe Data dalam JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Tipe Data dalam JavaScript")

> 🎥 Klik gambar di atas untuk video tentang variabel dan tipe data

Mari kita mulai dengan variabel dan tipe data yang mengisinya!

## Variabel

Variabel adalah blok bangunan mendasar dalam pemrograman. Seperti toples berlabel yang digunakan oleh alkemis abad pertengahan untuk menyimpan berbagai zat, variabel memungkinkan Anda menyimpan informasi dan memberinya nama deskriptif sehingga Anda dapat merujuknya nanti. Perlu mengingat usia seseorang? Simpan dalam variabel bernama `age`. Ingin melacak nama pengguna? Simpan dalam variabel bernama `userName`.

Kita akan fokus pada pendekatan modern untuk membuat variabel dalam JavaScript. Teknik-teknik yang akan Anda pelajari di sini mewakili evolusi bahasa selama bertahun-tahun dan praktik terbaik yang dikembangkan oleh komunitas pemrograman.

Membuat dan **mendeklarasikan** variabel memiliki sintaks berikut **[keyword] [name]**. Ini terdiri dari dua bagian:

- **Keyword**. Gunakan `let` untuk variabel yang dapat berubah, atau `const` untuk nilai yang tetap.
- **Nama variabel**, ini adalah nama deskriptif yang Anda pilih sendiri.

✅ Kata kunci `let` diperkenalkan dalam ES6 dan memberikan variabel Anda yang disebut _block scope_. Disarankan untuk menggunakan `let` atau `const` daripada kata kunci `var` yang lebih lama. Kita akan membahas block scope lebih mendalam di bagian selanjutnya.

### Tugas - bekerja dengan variabel

1. **Deklarasikan variabel**. Mari mulai dengan membuat variabel pertama kita:

    ```javascript
    let myVariable;
    ```

   **Apa yang dicapai:**
   - Ini memberi tahu JavaScript untuk membuat lokasi penyimpanan bernama `myVariable`
   - JavaScript mengalokasikan ruang di memori untuk variabel ini
   - Variabel saat ini tidak memiliki nilai (undefined)

2. **Berikan nilai**. Sekarang mari kita masukkan sesuatu ke dalam variabel kita:

    ```javascript
    myVariable = 123;
    ```

   **Bagaimana penugasan bekerja:**
   - Operator `=` menetapkan nilai 123 ke variabel kita
   - Variabel sekarang berisi nilai ini daripada undefined
   - Anda dapat merujuk nilai ini di seluruh kode Anda menggunakan `myVariable`

   > Catatan: penggunaan `=` dalam pelajaran ini berarti kita menggunakan "operator penugasan", digunakan untuk menetapkan nilai ke variabel. Ini tidak menunjukkan kesetaraan.

3. **Lakukan dengan cara yang cerdas**. Sebenarnya, mari kita gabungkan dua langkah tersebut:

    ```javascript
    let myVariable = 123;
    ```

    **Pendekatan ini lebih efisien:**
    - Anda mendeklarasikan variabel dan menetapkan nilai dalam satu pernyataan
    - Ini adalah praktik standar di kalangan pengembang
    - Mengurangi panjang kode sambil tetap menjaga kejelasan

4. **Ubah pikiran Anda**. Bagaimana jika kita ingin menyimpan angka yang berbeda?

   ```javascript
   myVariable = 321;
   ```

   **Memahami penugasan ulang:**
   - Variabel sekarang berisi 321 daripada 123
   - Nilai sebelumnya digantikan – variabel hanya menyimpan satu nilai pada satu waktu
   - Kemampuan untuk berubah ini adalah karakteristik utama variabel yang dideklarasikan dengan `let`

   ✅ Coba! Anda dapat menulis JavaScript langsung di browser Anda. Buka jendela browser dan navigasikan ke Developer Tools. Di konsol, Anda akan menemukan prompt; ketik `let myVariable = 123`, tekan enter, lalu ketik `myVariable`. Apa yang terjadi? Catatan, Anda akan mempelajari lebih lanjut tentang konsep-konsep ini di pelajaran berikutnya.

## Konstanta

Kadang-kadang Anda perlu menyimpan informasi yang tidak boleh berubah selama eksekusi program. Pikirkan konstanta seperti prinsip matematika yang ditetapkan oleh Euclid di Yunani kuno – setelah terbukti dan didokumentasikan, mereka tetap tetap untuk referensi di masa depan.

Konstanta bekerja mirip dengan variabel, tetapi dengan pembatasan penting: setelah Anda menetapkan nilainya, itu tidak dapat diubah. Ketidakmampuan ini membantu mencegah modifikasi yang tidak disengaja pada nilai-nilai penting dalam program Anda.

Deklarasi dan inisialisasi konstanta mengikuti konsep yang sama seperti variabel, dengan pengecualian kata kunci `const`. Konstanta biasanya dideklarasikan dengan huruf besar semua.

```javascript
const MY_VARIABLE = 123;
```

**Inilah yang dilakukan kode ini:**
- **Membuat** konstanta bernama `MY_VARIABLE` dengan nilai 123
- **Menggunakan** konvensi penamaan huruf besar untuk konstanta
- **Mencegah** perubahan nilai di masa depan

Konstanta memiliki dua aturan utama:

- **Anda harus memberikan nilai segera** – tidak ada konstanta kosong yang diizinkan!
- **Anda tidak pernah bisa mengubah nilai itu** – JavaScript akan memberikan error jika Anda mencoba. Mari kita lihat apa yang saya maksud:

   **Nilai sederhana** - Berikut ini TIDAK diizinkan:
   
      ```javascript
      const PI = 3;
      PI = 4; // tidak diizinkan
      ```

   **Yang perlu Anda ingat:**
   - **Upaya** untuk menetapkan ulang konstanta akan menyebabkan error
   - **Melindungi** nilai penting dari perubahan yang tidak disengaja
   - **Memastikan** nilai tetap konsisten di seluruh program Anda
 
   **Referensi objek dilindungi** - Berikut ini TIDAK diizinkan:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // tidak diizinkan
      ```

   **Memahami konsep ini:**
   - **Mencegah** penggantian seluruh objek dengan yang baru
   - **Melindungi** referensi ke objek asli
   - **Mempertahankan** identitas objek dalam memori

    **Nilai objek tidak dilindungi** - Berikut ini DIIZINKAN:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // diizinkan
      ```

      **Memahami apa yang terjadi di sini:**
      - **Memodifikasi** nilai properti di dalam objek
      - **Mempertahankan** referensi objek yang sama
      - **Menunjukkan** bahwa isi objek dapat berubah sementara referensi tetap konstan

   > Catatan, `const` berarti referensi dilindungi dari penugasan ulang. Nilainya tidak _immutable_ dan dapat berubah, terutama jika itu adalah konstruksi kompleks seperti objek.

## Tipe Data

JavaScript mengorganisasi informasi ke dalam kategori yang berbeda yang disebut tipe data. Konsep ini mencerminkan bagaimana para sarjana kuno mengkategorikan pengetahuan – Aristoteles membedakan antara berbagai jenis penalaran, mengetahui bahwa prinsip logis tidak dapat diterapkan secara seragam pada puisi, matematika, dan filsafat alam.

Tipe data penting karena operasi yang berbeda bekerja dengan jenis informasi yang berbeda. Sama seperti Anda tidak dapat melakukan aritmatika pada nama seseorang atau mengurutkan alfabet pada persamaan matematika, JavaScript membutuhkan tipe data yang sesuai untuk setiap operasi. Memahami ini mencegah kesalahan dan membuat kode Anda lebih andal.

Variabel dapat menyimpan berbagai jenis nilai, seperti angka dan teks. Berbagai jenis nilai ini dikenal sebagai **tipe data**. Tipe data adalah bagian penting dari pengembangan perangkat lunak karena membantu pengembang membuat keputusan tentang bagaimana kode harus ditulis dan bagaimana perangkat lunak harus berjalan. Selain itu, beberapa tipe data memiliki fitur unik yang membantu mengubah atau mengekstrak informasi tambahan dari suatu nilai.

✅ Tipe Data juga disebut sebagai primitif data JavaScript, karena mereka adalah tipe data tingkat terendah yang disediakan oleh bahasa. Ada 7 primitif data: string, number, bigint, boolean, undefined, null, dan symbol. Luangkan waktu sejenak untuk memvisualisasikan apa yang masing-masing primitif ini mungkin wakili. Apa itu `zebra`? Bagaimana dengan `0`? `true`?

### Angka

Angka adalah tipe data paling sederhana dalam JavaScript. Apakah Anda bekerja dengan bilangan bulat seperti 42, desimal seperti 3.14, atau angka negatif seperti -5, JavaScript menangani semuanya secara seragam.

Ingat variabel kita sebelumnya? Nilai 123 yang kita simpan sebenarnya adalah tipe data angka:

```javascript
let myVariable = 123;
```

**Karakteristik utama:**
- JavaScript secara otomatis mengenali nilai numerik
- Anda dapat melakukan operasi matematika dengan variabel ini
- Tidak diperlukan deklarasi tipe secara eksplisit

Variabel dapat menyimpan semua jenis angka, termasuk desimal atau angka negatif. Angka juga dapat digunakan dengan operator aritmatika, yang akan dibahas di [bagian berikutnya](../../../../2-js-basics/1-data-types).

### Operator Aritmatika

Operator aritmatika memungkinkan Anda melakukan perhitungan matematika dalam JavaScript. Operator ini mengikuti prinsip yang sama seperti yang digunakan oleh matematikawan selama berabad-abad – simbol yang sama yang muncul dalam karya para sarjana seperti Al-Khwarizmi, yang mengembangkan notasi aljabar.

Operator bekerja seperti yang Anda harapkan dari matematika tradisional: tanda tambah untuk penjumlahan, tanda minus untuk pengurangan, dan sebagainya.

Ada beberapa jenis operator yang dapat digunakan saat melakukan fungsi aritmatika, dan beberapa di antaranya tercantum di sini:

| Simbol | Deskripsi                                                               | Contoh                          |
| ------ | ----------------------------------------------------------------------- | -------------------------------- |
| `+`    | **Penjumlahan**: Menghitung jumlah dua angka                           | `1 + 2 //jawaban yang diharapkan adalah 3`   |
| `-`    | **Pengurangan**: Menghitung selisih dua angka                          | `1 - 2 //jawaban yang diharapkan adalah -1`  |
| `*`    | **Perkalian**: Menghitung hasil kali dua angka                         | `1 * 2 //jawaban yang diharapkan adalah 2`   |
| `/`    | **Pembagian**: Menghitung hasil bagi dua angka                         | `1 / 2 //jawaban yang diharapkan adalah 0.5` |
| `%`    | **Sisa**: Menghitung sisa dari pembagian dua angka                     | `1 % 2 //jawaban yang diharapkan adalah 1`   |

✅ Coba! Cobalah operasi aritmatika di konsol browser Anda. Apakah hasilnya mengejutkan Anda?

### String

Dalam JavaScript, data teks direpresentasikan sebagai string. Istilah "string" berasal dari konsep karakter yang dirangkai bersama dalam urutan, seperti cara penulis di biara abad pertengahan menghubungkan huruf untuk membentuk kata dan kalimat dalam manuskrip mereka.

String adalah dasar dari pengembangan web. Setiap potongan teks yang ditampilkan di situs web – nama pengguna, label tombol, pesan kesalahan, konten – ditangani sebagai data string. Memahami string sangat penting untuk membuat antarmuka pengguna yang fungsional.

String adalah kumpulan karakter yang berada di antara tanda kutip tunggal atau ganda.

```javascript
'This is a string'
"This is also a string"
let myString = 'This is a string value stored in a variable';
```

**Memahami konsep-konsep ini:**
- **Menggunakan** tanda kutip tunggal `'` atau tanda kutip ganda `"` untuk mendefinisikan string
- **Menyimpan** data teks yang dapat mencakup huruf, angka, dan simbol
- **Menetapkan** nilai string ke variabel untuk digunakan nanti
- **Membutuhkan** tanda kutip untuk membedakan teks dari nama variabel

Ingatlah untuk menggunakan tanda kutip saat menulis string, atau JavaScript akan menganggapnya sebagai nama variabel.

### Memformat String

Manipulasi string memungkinkan Anda menggabungkan elemen teks, memasukkan variabel, dan membuat konten dinamis yang merespons keadaan program. Teknik ini memungkinkan Anda membangun teks secara programatis.

Sering kali Anda perlu menggabungkan beberapa string – proses ini disebut konkatenasi.

Untuk **menggabungkan** dua atau lebih string, atau menggabungkannya, gunakan operator `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
```

**Langkah demi langkah, inilah yang terjadi:**
- **Menggabungkan** beberapa string menggunakan operator `+`
- **Menggabungkan** string langsung tanpa spasi dalam contoh pertama
- **Menambahkan** karakter spasi `" "` di antara string untuk keterbacaan
- **Memasukkan** tanda baca seperti koma untuk membuat format yang benar

✅ Mengapa `1 + 1 = 2` dalam JavaScript, tetapi `'1' + '1' = 11?` Pikirkanlah. Bagaimana dengan `'1' + 1`?

**Template literals** adalah cara lain untuk memformat string, kecuali alih-alih tanda kutip, backtick digunakan. Apa pun yang bukan teks biasa harus ditempatkan di dalam placeholder `${ }`. Ini termasuk variabel yang mungkin berupa string.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

**Mari kita pahami setiap bagian:**
- **Menggunakan** backtick `` ` `` alih-alih tanda kutip biasa untuk membuat template literals
- **Menyisipkan** variabel langsung menggunakan sintaks placeholder `${}`
- **Mempertahankan** spasi dan format persis seperti yang ditulis
- **Memberikan** cara yang lebih bersih untuk membuat string kompleks dengan variabel
Anda dapat mencapai tujuan format Anda dengan salah satu metode, tetapi template literal akan menghormati setiap spasi dan baris baru.

✅ Kapan Anda akan menggunakan template literal dibandingkan string biasa?

### Boolean

Boolean mewakili bentuk data paling sederhana: mereka hanya dapat memiliki salah satu dari dua nilai – `true` atau `false`. Sistem logika biner ini berasal dari karya George Boole, seorang matematikawan abad ke-19 yang mengembangkan aljabar Boolean.

Meskipun sederhana, boolean sangat penting untuk logika program. Mereka memungkinkan kode Anda membuat keputusan berdasarkan kondisi – apakah pengguna sudah masuk, apakah tombol telah diklik, atau apakah kriteria tertentu terpenuhi.

Boolean hanya dapat memiliki dua nilai: `true` atau `false`. Boolean dapat membantu membuat keputusan tentang baris kode mana yang harus dijalankan ketika kondisi tertentu terpenuhi. Dalam banyak kasus, [operator](../../../../2-js-basics/1-data-types) membantu menetapkan nilai Boolean, dan Anda sering melihat serta menulis variabel yang diinisialisasi atau nilainya diperbarui dengan operator.

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

**Dalam contoh di atas, kita telah:**
- **Membuat** variabel yang menyimpan nilai Boolean `true`
- **Menunjukkan** cara menyimpan nilai Boolean `false`
- **Menggunakan** kata kunci `true` dan `false` secara langsung (tanpa tanda kutip)
- **Menyiapkan** variabel-variabel ini untuk digunakan dalam pernyataan kondisional

✅ Sebuah variabel dapat dianggap 'truthy' jika dievaluasi menjadi boolean `true`. Menariknya, dalam JavaScript, [semua nilai dianggap truthy kecuali yang didefinisikan sebagai falsy](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## Tantangan GitHub Copilot Agent 🚀

Gunakan mode Agent untuk menyelesaikan tantangan berikut:

**Deskripsi:** Buat pengelola informasi pribadi yang menunjukkan semua tipe data JavaScript yang telah Anda pelajari dalam pelajaran ini sambil menangani skenario data dunia nyata.

**Prompt:** Bangun program JavaScript yang membuat objek profil pengguna yang berisi: nama seseorang (string), usia (number), status sebagai pelajar (boolean), warna favorit sebagai array, dan objek alamat dengan properti jalan, kota, dan kode pos. Sertakan fungsi untuk menampilkan informasi profil dan memperbarui bidang individu. Pastikan untuk menunjukkan penggabungan string, template literal, operasi aritmatika dengan usia, dan logika boolean untuk status pelajar.

Pelajari lebih lanjut tentang [mode agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## 🚀 Tantangan

JavaScript memiliki beberapa perilaku yang dapat mengejutkan pengembang. Berikut adalah contoh klasik untuk dieksplorasi: coba ketik ini di konsol browser Anda: `let age = 1; let Age = 2; age == Age` dan amati hasilnya. Ini mengembalikan `false` – dapatkah Anda menentukan alasannya?

Ini mewakili salah satu dari banyak perilaku JavaScript yang layak dipahami. Familiaritas dengan keanehan-keanehan ini akan membantu Anda menulis kode yang lebih andal dan memperbaiki masalah dengan lebih efektif.

## Kuis Pasca-Pelajaran
[Kuis pasca-pelajaran](https://ff-quizzes.netlify.app)

## Tinjauan & Studi Mandiri

Lihat [daftar latihan JavaScript ini](https://css-tricks.com/snippets/javascript/) dan coba salah satu. Apa yang Anda pelajari?

## Tugas

[Latihan Tipe Data](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang timbul dari penggunaan terjemahan ini.