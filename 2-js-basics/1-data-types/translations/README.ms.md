# Asas JavaScript: Jenis Data

![Asas JavaScript: Jenis Data](/sketchnotes/webdev101-js-datatypes.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuiz Pra Kuliah
[Kuiz Pra Kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/7)

Pelajaran ini merangkumi asas-asas JavaScript, bahasa yang menyediakan interaktiviti di web.

[![Jenis Data Dalam JavaScript](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Data types in JavaScript")

[![Data Types in JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Data Types in JavaScript")

Marilah kita mulakan dengan pemboleh ubah dan jenis data yang mengisinya!

## Pemboleh Ubah

Pemboleh ubah menyimpan nilai yang boleh digunakan dan diubah di seluruh kod anda.

Membuat dan **menyatakan** pemboleh ubah mempunyai sintaks berikut **[kata kunci] [nama]**. Ia terdiri daripada dua bahagian:

- **Kata Kunci**. Kata kunci seperti `let` atau `var`.

   > Perhatikan, kata kunci seperti `let` diperkenalkan dalam ES6 dan memberikan pemboleh ubah anda apa yang disebut _block lingkup_. Sebaiknya gunakan `let` over` var`. Kami akan merangkumi skop blok dengan lebih mendalam di bahagian-bahagian masa depan.
- **Nama pemboleh ubah**, ini adalah nama yang anda pilih sendiri.

### Tugasan - bekerja dengan pemboleh ubah

1. **Menyatakan pemboleh ubah**. Marilah nyatakan pemboleh ubah menggunakan kata kunci `let`:

    ```javascript
    let myVariable;
    ```

    `myVariable` kini telah dinyatakan menggunakan kata kunci` let`. Pada masa ini tidak mempunyai nilai.

1. **Berikan nilai**. Simpan nilai dalam pemboleh ubah dengan pengendali `=`, diikuti dengan nilai yang diharapkan.

    ```javascript
    myVariable = 123;
    ```

    > Catatan: penggunaan `=` dalam pelajaran ini berarti kita menggunakan "pengendali tugasan", yang digunakan untuk menetapkan nilai ke pemboleh ubah. Itu tidak menunjukkan persamaan.

    `myVariable` kini telah *diinisialisasi* dengan nilai 123.

1. **Pemfaktor**. Gantikan kod anda dengan pernyataan berikut.

    ```javascript
    let myVariable = 123;
    ```
    Perkara di atas dipanggil _inisialisasi eksplisit_ apabila pemboleh ubah diisytiharkan dan diberikan nilai pada masa yang sama.

1. **Tukar nilai pemboleh ubah**. Tukar nilai pemboleh ubah dengan cara berikut:

   ```javascript
   myVariable = 321;
   ```

   Setelah pemboleh ubah diisytiharkan, anda boleh mengubah nilainya pada bila-bila masa dalam kod anda dengan pengedali `=` dan nilai baru.

   ✅ Cubalah! Anda boleh menulis JavaScript di penyemak imbas anda. Buka tetingkap penyemak imbas dan arahkan ke Alat Pembangun. Dalam konsol, anda akan menemui arahan; taip `let myVariable = 123`, tekan return, kemudian taip `myVariable`. Apa yang berlaku? Perhatikan, anda akan mengetahui lebih lanjut mengenai konsep ini dalam pelajaran seterusnya.

## Pemalar

Pengisytiharan dan permulaan pemalar mengikuti konsep yang sama dengan pemboleh ubah, dengan menggunakan `const`. Pemalar biasanya dinyatakan dengan semua huruf besar.

```javascript
const MY_VARIABLE = 123;
```

Pemalar serupa dengan pemboleh ubah, dengan dua pengecualian:

- **Mesti ada nilai**. Pemalar mesti diinisialisasi, atau kesalahan akan berlaku semasa menjalankan kod.
- **Rujukan tidak boleh diubah**. Rujukan pemalar tidak dapat diubah setelah diinisialisasi, atau kesalahan akan terjadi ketika menjalankan kod. Marilah kita lihat dua contoh:
    - **Menyimpan nilai**. Perkara berikut TIDAK dibenarkan:

      ```javascript
      const PI = 3;
      PI = 4; // tidak dibenarkan
      ```

    - **Rujukan objek dilindungi**. Perkara berikut TIDAK dibenarkan:

      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // tidak dibenarkan
      ```


    - **Rujukan objek tidak dilindungi**. Perkara berikut dibenakan: 

      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      Di atas anda mengubah nilai objek tetapi bukan rujukan itu sendiri, yang membuatnya dibenarkan.

    > Perhatikan, `const` bermaksud rujukan dilindungi dari penugasan semula. Nilainya tidak _tidak berubah_ dan ia juga boleh berubah, terutamanya jika konstruk kompleks seperti objek.

## Jenis Data

Pemboleh ubah boleh menyimpan pelbagai jenis nilai, seperti nombor dan teks. Pelbagai jenis nilai ini dikenali sebagai **jenis data**. Jenis data adalah bahagian penting dalam pembangunan perisian kerana ia membantu pembangun membuat keputusan mengenai bagaimana kod itu harus ditulis dan bagaimana perisian itu harus dijalankan. Tambahan pula, beberapa jenis data mempunyai ciri unik yang membantu mengubah atau mengekstrak maklumat tambahan dalam suatu nilai.

✅ Jenis Data juga disebut sebagai primitif data JavaScript, kerana ia adalah jenis data tahap terendah yang disediakan oleh bahasa. Terdapat 6 jenis data primitif: rentetan, nombor, bigint, boolean, tidak ditentukan, dan simbol. Luangkan masa sebentar untuk menggambarkan apa yang diwakili oleh setiap primitif ini. Apa itu `zebra`? Bagaimana dengan `0`? `benar`?

### Nombor

Pada bahagian sebelumnya, nilai `myVariable` adalah jenis data nombor.

`let myVariable = 123;`

Pemboleh ubah boleh menyimpan semua jenis nombor, termasuk nombor perpuluhan atau nombor negatif. Nombor juga boleh digunakan dengan pengendali aritmetik, yang terdapat dalam [bahagian seterusnya](#Pengendali-Aritmetik).

### Pengendali Aritmetik

Terdapat beberapa jenis operator yang boleh digunakan semasa menjalankan fungsi aritmetik, dan ada yang disenaraikan di sini:

| Simbol | Penerangan                                         | Contoh                      |
| ------ | -------------------------------------------------- | --------------------------- |
| `+`    | **Penambahan**: Mengira jumlah dua nombor          | `1 + 2 // jawapan ialah 3`  |
| `-`    | **Penolakan**: Mengira perbezaan dua nombor        | `1 - 2 // jawapan ialah -1` |
| `*`    | **Pendaraban**: Mengira hasil dua nombor           | `1 * 2 // jawapan ialah 2`  |
| `/`    | **Pembahagian**: Mengira hasil bagi dua nombor     | `1 / 2 //jawapan ialah 0.5` |
| `%`    | **Baki**: Mengira baki dari pembahagian dua nombor | `1 % 2 //jawapan ialah 1`   |

✅ Cubalah! Cuba operasi aritmetik di konsol penyemak imbas anda. Adakah hasilnya mengejutkan anda?

### String

String adalah kumpulan watak yang berada di antara tanda petik tunggal atau ganda.

- `'Ini adalah string'`
- `"Ini pun juga string"`
- `let myString = 'Ini adalah nilai string yang disimpan dalam pemboleh ubah';`

Ingatlah untuk menggunakan tanda kutip semasa menulis string, jika tidak, JavaScript akan menganggapnya adalah nama yang berubah-ubah.

### Memformat String

String bersifat teks, dan memerlukan format dari semasa ke semasa.

Untuk **menggabungkan** dua atau lebih string, gunakan pengendali `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ Mengapakah `1 + 1 = 2` dalam JavaScript, tetapi `'1' + '1' = 11?` Cuba fikirkan. Bagaimanakah dengan `'1' + 1`?

**Literal templat** adalah cara lain untuk memformat rentetan, kecuali tanda petik, tanda belakang digunakan. Apa-apa yang bukan teks biasa mesti diletakkan di dalam pemegang tempat `$ {}`. Ini merangkumi sebarang pemboleh ubah yang mungkin adalah string.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

Anda boleh mencapai matlamat pemformatan anda dengan mana-mana kaedah, tetapi templat literal akan menghormati ruang dan jeda baris.

✅ Bilakah anda menggunakan templat literal berbanding string biasa?

### Booleans

Booleans boleh hanya dua nilai: `benar` atau `salah`. Booleans dapat membantu membuat keputusan mengenai garis kod mana yang harus dijalankan apabila syarat tertentu dipenuhi. Dalam banyak kes, [pengendali](#Pengendali-Aritmetik) membantu menetapkan nilai Boolean dan anda sering akan melihat dan menulis pemboleh ubah yang dimulakan atau nilainya dikemas kini dengan operator.

- `let myTrueBool = betul`
- `let myFalseBool = salah`

✅ Pemboleh ubah boleh dianggap 'benar' jika dinilai menjadi `benar` boolean. Menariknya, dalam JavaScript, [semua nilai adalah benar kecuali ditakrifkan sebagai palsu](https://developer.mozilla.org/docs/Glossary/Truthy).

--- 

## 🚀 Cabaran

JavaScript terkenal kerana kaedahnya yang mengagumkan dalam mengendalikan jenis data sesekali. Lakukan sedikit kajian mengenai 'gotchas' ini. Contohnya: kepekaan kes boleh menggigit! Cubalah ini di konsol anda: `let age = 1; biarkan Umur = 2; age == Age` (menyelesaikan `false` - mengapa?). Apa lagi gotchas yang anda dapati?

## Kuiz Pasca Kuliah
[Kuiz Pasca Kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/8)

## Mengkaji dan belajar sendiri

Lihat [latihan JavaScript](https://css-tricks.com/snippets/javascript/) dan cubalah. Apa yang anda telah belajar?

## Tugasan

[Latihan Jenis Data](../assignment.md)