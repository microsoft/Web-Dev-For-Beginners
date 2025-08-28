<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fc6aef8ecfdd5b0ad2afa6e6ba52bfde",
  "translation_date": "2025-08-27T22:50:37+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "ms"
}
-->
# Asas JavaScript: Jenis Data

![Asas JavaScript - Jenis Data](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.ms.png)
> Sketchnote oleh [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuiz Pra-Kuliah
[Kuiz pra-kuliah](https://ff-quizzes.netlify.app/web/quiz/7)

Pelajaran ini merangkumi asas JavaScript, bahasa yang memberikan interaktiviti pada web.

> Anda boleh mengikuti pelajaran ini di [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Pembolehubah](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Pembolehubah dalam JavaScript")

[![Jenis Data dalam JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Jenis Data dalam JavaScript")

> 🎥 Klik gambar di atas untuk video tentang pembolehubah dan jenis data

Mari kita mulakan dengan pembolehubah dan jenis data yang mengisinya!

## Pembolehubah

Pembolehubah menyimpan nilai yang boleh digunakan dan diubah sepanjang kod anda.

Mencipta dan **mengisytiharkan** pembolehubah mempunyai sintaks berikut **[kata kunci] [nama]**. Ia terdiri daripada dua bahagian:

- **Kata kunci**. Kata kunci boleh menjadi `let` atau `var`.  

✅ Kata kunci `let` diperkenalkan dalam ES6 dan memberikan pembolehubah anda skop _blok_. Adalah disyorkan untuk menggunakan `let` berbanding `var`. Kita akan membincangkan skop blok dengan lebih mendalam dalam bahagian seterusnya.
- **Nama pembolehubah**, ini adalah nama yang anda pilih sendiri.

### Tugasan - bekerja dengan pembolehubah

1. **Isytiharkan pembolehubah**. Mari kita isytiharkan pembolehubah menggunakan kata kunci `let`:

    ```javascript
    let myVariable;
    ```

   `myVariable` kini telah diisytiharkan menggunakan kata kunci `let`. Ia belum mempunyai nilai.

1. **Tetapkan nilai**. Simpan nilai dalam pembolehubah dengan operator `=`, diikuti oleh nilai yang diharapkan.

    ```javascript
    myVariable = 123;
    ```

   > Nota: penggunaan `=` dalam pelajaran ini bermaksud kita menggunakan "operator penugasan", yang digunakan untuk menetapkan nilai kepada pembolehubah. Ia tidak menunjukkan kesamaan.

   `myVariable` kini telah *diinisialisasi* dengan nilai 123.

1. **Refaktor**. Gantikan kod anda dengan pernyataan berikut.

    ```javascript
    let myVariable = 123;
    ```

    Yang di atas dipanggil _inisialisasi eksplisit_ apabila pembolehubah diisytiharkan dan diberikan nilai pada masa yang sama.

1. **Ubah nilai pembolehubah**. Ubah nilai pembolehubah dengan cara berikut:

   ```javascript
   myVariable = 321;
   ```

   Setelah pembolehubah diisytiharkan, anda boleh mengubah nilainya pada bila-bila masa dalam kod anda dengan operator `=` dan nilai baru.

   ✅ Cuba! Anda boleh menulis JavaScript terus di pelayar anda. Buka tetingkap pelayar dan navigasi ke Alat Pembangun. Dalam konsol, anda akan menemui prompt; taip `let myVariable = 123`, tekan enter, kemudian taip `myVariable`. Apa yang berlaku? Nota, anda akan mempelajari lebih lanjut tentang konsep ini dalam pelajaran seterusnya.

## Konstanta

Pengisytiharan dan inisialisasi konstanta mengikuti konsep yang sama seperti pembolehubah, kecuali penggunaan kata kunci `const`. Konstanta biasanya diisytiharkan dengan huruf besar semua.

```javascript
const MY_VARIABLE = 123;
```

Konstanta serupa dengan pembolehubah, dengan dua pengecualian:

- **Mesti mempunyai nilai**. Konstanta mesti diinisialisasi, atau ralat akan berlaku semasa kod dijalankan.
- **Rujukan tidak boleh diubah**. Rujukan konstanta tidak boleh diubah setelah diinisialisasi, atau ralat akan berlaku semasa kod dijalankan. Mari kita lihat dua contoh:
   - **Nilai mudah**. Yang berikut TIDAK dibenarkan:
   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```
 
   - **Rujukan objek dilindungi**. Yang berikut TIDAK dibenarkan.
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

    - **Nilai objek tidak dilindungi**. Yang berikut DIBENARKAN:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      Di atas anda mengubah nilai objek tetapi bukan rujukan itu sendiri, yang menjadikannya dibenarkan.

   > Nota, `const` bermaksud rujukan dilindungi daripada penugasan semula. Walau bagaimanapun, nilai tidak _tidak boleh diubah_ dan boleh berubah, terutamanya jika ia adalah struktur kompleks seperti objek.

## Jenis Data

Pembolehubah boleh menyimpan pelbagai jenis nilai, seperti nombor dan teks. Pelbagai jenis nilai ini dikenali sebagai **jenis data**. Jenis data adalah bahagian penting dalam pembangunan perisian kerana ia membantu pembangun membuat keputusan tentang cara kod harus ditulis dan bagaimana perisian harus dijalankan. Selain itu, beberapa jenis data mempunyai ciri unik yang membantu mengubah atau mengekstrak maklumat tambahan dalam nilai.

✅ Jenis Data juga dirujuk sebagai primitif data JavaScript, kerana ia adalah jenis data peringkat terendah yang disediakan oleh bahasa. Terdapat 7 jenis data primitif: string, number, bigint, boolean, undefined, null dan symbol. Luangkan masa untuk membayangkan apa yang mungkin diwakili oleh setiap primitif ini. Apa itu `zebra`? Bagaimana pula dengan `0`? `true`?

### Nombor

Dalam bahagian sebelumnya, nilai `myVariable` adalah jenis data nombor.

`let myVariable = 123;`

Pembolehubah boleh menyimpan semua jenis nombor, termasuk nombor perpuluhan atau nombor negatif. Nombor juga boleh digunakan dengan operator aritmetik, yang dibincangkan dalam [bahagian seterusnya](../../../../2-js-basics/1-data-types).

### Operator Aritmetik

Terdapat beberapa jenis operator untuk digunakan semasa melakukan fungsi aritmetik, dan beberapa disenaraikan di sini:

| Simbol | Penerangan                                                              | Contoh                          |
| ------ | ----------------------------------------------------------------------- | ------------------------------- |
| `+`    | **Penambahan**: Mengira jumlah dua nombor                               | `1 + 2 //jawapan yang dijangka adalah 3`   |
| `-`    | **Penolakan**: Mengira perbezaan dua nombor                             | `1 - 2 //jawapan yang dijangka adalah -1`  |
| `*`    | **Pendaraban**: Mengira hasil darab dua nombor                          | `1 * 2 //jawapan yang dijangka adalah 2`   |
| `/`    | **Pembahagian**: Mengira hasil bahagi dua nombor                        | `1 / 2 //jawapan yang dijangka adalah 0.5` |
| `%`    | **Baki**: Mengira baki daripada pembahagian dua nombor                  | `1 % 2 //jawapan yang dijangka adalah 1`   |

✅ Cuba! Cuba operasi aritmetik dalam konsol pelayar anda. Adakah hasilnya mengejutkan anda?

### String

String adalah set aksara yang berada di antara tanda petik tunggal atau berganda.

- `'Ini adalah string'`
- `"Ini juga adalah string"`
- `let myString = 'Ini adalah nilai string yang disimpan dalam pembolehubah';`

Ingat untuk menggunakan tanda petik semasa menulis string, jika tidak, JavaScript akan menganggapnya sebagai nama pembolehubah.

### Memformat String

String adalah teks, dan kadangkala memerlukan pemformatan.

Untuk **menggabungkan** dua atau lebih string, atau menyatukannya, gunakan operator `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ Mengapa `1 + 1 = 2` dalam JavaScript, tetapi `'1' + '1' = 11?` Fikirkan mengenainya. Bagaimana pula dengan `'1' + 1`?

**Template literals** adalah cara lain untuk memformat string, kecuali bukannya tanda petik, backtick digunakan. Apa sahaja yang bukan teks biasa mesti diletakkan di dalam placeholder `${ }`. Ini termasuk mana-mana pembolehubah yang mungkin string.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

Anda boleh mencapai matlamat pemformatan anda dengan mana-mana kaedah, tetapi template literals akan menghormati sebarang ruang dan baris baru.

✅ Bilakah anda akan menggunakan template literal berbanding string biasa?

### Boolean

Boolean hanya boleh mempunyai dua nilai: `true` atau `false`. Boolean membantu membuat keputusan tentang baris kod mana yang harus dijalankan apabila syarat tertentu dipenuhi. Dalam banyak kes, [operator](../../../../2-js-basics/1-data-types) membantu menetapkan nilai Boolean dan anda sering akan melihat dan menulis pembolehubah yang diinisialisasi atau nilainya dikemas kini dengan operator.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ Pembolehubah boleh dianggap 'truthy' jika ia menilai kepada boolean `true`. Menariknya, dalam JavaScript, [semua nilai adalah truthy kecuali ditakrifkan sebagai falsy](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## 🚀 Cabaran

JavaScript terkenal dengan cara yang mengejutkan dalam mengendalikan jenis data pada masa tertentu. Lakukan sedikit penyelidikan tentang 'perangkap' ini. Sebagai contoh: kepekaan huruf besar boleh menjadi masalah! Cuba ini dalam konsol anda: `let age = 1; let Age = 2; age == Age` (menyelesaikan `false` -- mengapa?). Apakah perangkap lain yang anda temui?

## Kuiz Pasca-Kuliah
[Kuiz pasca-kuliah](https://ff-quizzes.netlify.app/web/quiz/8)

## Kajian & Pembelajaran Kendiri

Lihat [senarai latihan JavaScript ini](https://css-tricks.com/snippets/javascript/) dan cuba satu. Apa yang anda pelajari?

## Tugasan

[Latihan Jenis Data](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.