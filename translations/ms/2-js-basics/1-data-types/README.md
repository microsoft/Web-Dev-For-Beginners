<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0092f6533ae3ec3adad5b5ece68efaf",
  "translation_date": "2025-10-24T14:20:27+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "ms"
}
-->
# Asas JavaScript: Jenis Data

![Asas JavaScript - Jenis Data](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.ms.png)
> Sketchnote oleh [Tomomi Imura](https://twitter.com/girlie_mac)

Jenis data adalah salah satu konsep asas dalam JavaScript yang akan anda temui dalam setiap program yang anda tulis. Fikirkan jenis data seperti sistem pengurusan fail yang digunakan oleh pustakawan kuno di Alexandria – mereka mempunyai tempat khusus untuk gulungan yang mengandungi puisi, matematik, dan rekod sejarah. JavaScript mengatur maklumat dengan cara yang serupa dengan kategori yang berbeza untuk pelbagai jenis data.

Dalam pelajaran ini, kita akan meneroka jenis data teras yang membuat JavaScript berfungsi. Anda akan belajar bagaimana mengendalikan nombor, teks, nilai benar/palsu, dan memahami mengapa memilih jenis yang betul adalah penting untuk program anda. Konsep-konsep ini mungkin kelihatan abstrak pada mulanya, tetapi dengan latihan, ia akan menjadi kebiasaan.

Memahami jenis data akan menjadikan segala-galanya dalam JavaScript lebih jelas. Sama seperti arkitek perlu memahami bahan binaan yang berbeza sebelum membina katedral, asas-asas ini akan menyokong segala yang anda bina pada masa akan datang.

## Kuiz Pra-Kuliah
[Kuiz pra-kuliah](https://ff-quizzes.netlify.app/web/)

Pelajaran ini merangkumi asas JavaScript, bahasa yang menyediakan interaktiviti di web.

> Anda boleh mengikuti pelajaran ini di [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Pembolehubah](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Pembolehubah dalam JavaScript")

[![Jenis Data dalam JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Jenis Data dalam JavaScript")

> 🎥 Klik imej di atas untuk video tentang pembolehubah dan jenis data

Mari kita mulakan dengan pembolehubah dan jenis data yang mengisinya!

## Pembolehubah

Pembolehubah adalah blok binaan asas dalam pengaturcaraan. Seperti balang berlabel yang digunakan oleh ahli alkimia zaman pertengahan untuk menyimpan bahan-bahan yang berbeza, pembolehubah membolehkan anda menyimpan maklumat dan memberikannya nama deskriptif supaya anda boleh merujuknya kemudian. Perlu ingat umur seseorang? Simpan dalam pembolehubah yang dipanggil `age`. Mahu menjejaki nama pengguna? Simpan dalam pembolehubah yang dipanggil `userName`.

Kita akan memberi tumpuan kepada pendekatan moden untuk mencipta pembolehubah dalam JavaScript. Teknik yang akan anda pelajari di sini mewakili evolusi bahasa selama bertahun-tahun dan amalan terbaik yang dibangunkan oleh komuniti pengaturcaraan.

Mencipta dan **mengisytiharkan** pembolehubah mempunyai sintaks berikut **[keyword] [name]**. Ia terdiri daripada dua bahagian:

- **Kata kunci**. Gunakan `let` untuk pembolehubah yang boleh berubah, atau `const` untuk nilai yang kekal sama.
- **Nama pembolehubah**, ini adalah nama deskriptif yang anda pilih sendiri.

✅ Kata kunci `let` diperkenalkan dalam ES6 dan memberikan pembolehubah anda apa yang dipanggil _skop blok_. Disarankan agar anda menggunakan `let` atau `const` dan bukannya kata kunci `var` yang lebih lama. Kita akan membincangkan skop blok dengan lebih mendalam dalam bahagian seterusnya.

### Tugasan - bekerja dengan pembolehubah

1. **Isytiharkan pembolehubah**. Mari mulakan dengan mencipta pembolehubah pertama kita:

    ```javascript
    let myVariable;
    ```

   **Apa yang dicapai oleh ini:**
   - Ini memberitahu JavaScript untuk mencipta lokasi penyimpanan yang dipanggil `myVariable`
   - JavaScript memperuntukkan ruang dalam memori untuk pembolehubah ini
   - Pembolehubah pada masa ini tidak mempunyai nilai (undefined)

2. **Berikan nilai**. Sekarang mari kita letakkan sesuatu dalam pembolehubah kita:

    ```javascript
    myVariable = 123;
    ```

   **Bagaimana tugasan berfungsi:**
   - Operator `=` memberikan nilai 123 kepada pembolehubah kita
   - Pembolehubah kini mengandungi nilai ini dan bukannya undefined
   - Anda boleh merujuk nilai ini sepanjang kod anda menggunakan `myVariable`

   > Nota: penggunaan `=` dalam pelajaran ini bermaksud kita menggunakan "operator tugasan", digunakan untuk menetapkan nilai kepada pembolehubah. Ia tidak menunjukkan kesamaan.

3. **Lakukan dengan cara yang bijak**. Sebenarnya, mari kita gabungkan dua langkah tersebut:

    ```javascript
    let myVariable = 123;
    ```

    **Pendekatan ini lebih cekap:**
    - Anda mengisytiharkan pembolehubah dan memberikan nilai dalam satu pernyataan
    - Ini adalah amalan standard di kalangan pembangun
    - Ia mengurangkan panjang kod sambil mengekalkan kejelasan

4. **Ubah fikiran anda**. Bagaimana jika kita mahu menyimpan nombor yang berbeza?

   ```javascript
   myVariable = 321;
   ```

   **Memahami penugasan semula:**
   - Pembolehubah kini mengandungi 321 dan bukannya 123
   - Nilai sebelumnya digantikan – pembolehubah hanya menyimpan satu nilai pada satu masa
   - Kebolehubahan ini adalah ciri utama pembolehubah yang diisytiharkan dengan `let`

   ✅ Cuba! Anda boleh menulis JavaScript terus dalam pelayar anda. Buka tetingkap pelayar dan navigasi ke Alat Pembangun. Dalam konsol, anda akan menemui prompt; taip `let myVariable = 123`, tekan enter, kemudian taip `myVariable`. Apa yang berlaku? Nota, anda akan belajar lebih lanjut tentang konsep ini dalam pelajaran seterusnya.

## Konstanta

Kadang-kadang anda perlu menyimpan maklumat yang tidak boleh berubah semasa pelaksanaan program. Fikirkan konstanta seperti prinsip matematik yang Euclid tetapkan di Yunani kuno – setelah dibuktikan dan didokumentasikan, ia kekal tetap untuk rujukan masa depan.

Konstanta berfungsi sama seperti pembolehubah, tetapi dengan sekatan penting: setelah anda menetapkan nilainya, ia tidak boleh diubah. Ketidakbolehubahan ini membantu mencegah pengubahsuaian tidak sengaja kepada nilai kritikal dalam program anda.

Pengisytiharan dan inisialisasi konstanta mengikuti konsep yang sama seperti pembolehubah, dengan pengecualian kata kunci `const`. Konstanta biasanya diisytiharkan dengan huruf besar semua.

```javascript
const MY_VARIABLE = 123;
```

**Inilah yang dilakukan oleh kod ini:**
- **Mencipta** konstanta bernama `MY_VARIABLE` dengan nilai 123
- **Menggunakan** konvensyen penamaan huruf besar untuk konstanta
- **Menghalang** sebarang perubahan masa depan kepada nilai ini

Konstanta mempunyai dua peraturan utama:

- **Anda mesti memberikan nilai dengan segera** – tiada konstanta kosong dibenarkan!
- **Anda tidak boleh mengubah nilai itu** – JavaScript akan membuang ralat jika anda mencuba. Mari lihat apa maksudnya:

   **Nilai mudah** - Yang berikut TIDAK dibenarkan:
   
      ```javascript
      const PI = 3;
      PI = 4; // tidak dibenarkan
      ```

   **Apa yang perlu anda ingat:**
   - **Percubaan** untuk menetapkan semula konstanta akan menyebabkan ralat
   - **Melindungi** nilai penting daripada perubahan tidak sengaja
   - **Memastikan** nilai kekal konsisten sepanjang program anda
 
   **Rujukan objek dilindungi** - Yang berikut TIDAK dibenarkan:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // tidak dibenarkan
      ```

   **Memahami konsep ini:**
   - **Menghalang** penggantian keseluruhan objek dengan yang baru
   - **Melindungi** rujukan kepada objek asal
   - **Menjaga** identiti objek dalam memori

    **Nilai objek tidak dilindungi** - Yang berikut DIBENARKAN:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // dibenarkan
      ```

      **Memecahkan apa yang berlaku di sini:**
      - **Mengubah** nilai sifat dalam objek
      - **Menjaga** rujukan objek yang sama
      - **Menunjukkan** bahawa kandungan objek boleh berubah sementara rujukan kekal tetap

   > Nota, `const` bermaksud rujukan dilindungi daripada penugasan semula. Walau bagaimanapun, nilai tidak _tidak boleh diubah_ dan boleh berubah, terutamanya jika ia adalah struktur kompleks seperti objek.

## Jenis Data

JavaScript mengatur maklumat ke dalam kategori yang berbeza yang dipanggil jenis data. Konsep ini mencerminkan bagaimana sarjana kuno mengkategorikan pengetahuan – Aristotle membezakan antara jenis penalaran yang berbeza, mengetahui bahawa prinsip logik tidak boleh digunakan secara seragam pada puisi, matematik, dan falsafah semula jadi.

Jenis data penting kerana operasi yang berbeza berfungsi dengan jenis maklumat yang berbeza. Sama seperti anda tidak boleh melakukan aritmetik pada nama seseorang atau mengabjadkan persamaan matematik, JavaScript memerlukan jenis data yang sesuai untuk setiap operasi. Memahami ini mencegah ralat dan menjadikan kod anda lebih boleh dipercayai.

Pembolehubah boleh menyimpan pelbagai jenis nilai, seperti nombor dan teks. Pelbagai jenis nilai ini dikenali sebagai **jenis data**. Jenis data adalah bahagian penting dalam pembangunan perisian kerana ia membantu pembangun membuat keputusan tentang bagaimana kod harus ditulis dan bagaimana perisian harus berjalan. Selain itu, beberapa jenis data mempunyai ciri unik yang membantu mengubah atau mengekstrak maklumat tambahan dalam nilai.

✅ Jenis Data juga dirujuk sebagai primitif data JavaScript, kerana ia adalah jenis data peringkat terendah yang disediakan oleh bahasa. Terdapat 7 primitif data: string, number, bigint, boolean, undefined, null dan symbol. Luangkan masa untuk membayangkan apa yang mungkin diwakili oleh setiap primitif ini. Apa itu `zebra`? Bagaimana dengan `0`? `true`?

### Nombor

Nombor adalah jenis data yang paling mudah dalam JavaScript. Sama ada anda bekerja dengan nombor bulat seperti 42, perpuluhan seperti 3.14, atau nombor negatif seperti -5, JavaScript mengendalikannya secara seragam.

Ingat pembolehubah kita dari tadi? 123 yang kita simpan sebenarnya adalah jenis data nombor:

```javascript
let myVariable = 123;
```

**Ciri utama:**
- JavaScript secara automatik mengenali nilai berangka
- Anda boleh melakukan operasi matematik dengan pembolehubah ini
- Tiada pengisytiharan jenis eksplisit diperlukan

Pembolehubah boleh menyimpan semua jenis nombor, termasuk perpuluhan atau nombor negatif. Nombor juga boleh digunakan dengan operator aritmetik, yang dibincangkan dalam [bahagian seterusnya](../../../../2-js-basics/1-data-types).

### Operator Aritmetik

Operator aritmetik membolehkan anda melakukan pengiraan matematik dalam JavaScript. Operator ini mengikuti prinsip yang sama seperti yang digunakan oleh ahli matematik selama berabad-abad – simbol yang sama yang muncul dalam karya sarjana seperti Al-Khwarizmi, yang membangunkan notasi algebra.

Operator berfungsi seperti yang anda jangkakan daripada matematik tradisional: tambah untuk penjumlahan, tolak untuk penolakan, dan sebagainya.

Terdapat beberapa jenis operator untuk digunakan semasa melakukan fungsi aritmetik, dan beberapa disenaraikan di sini:

| Simbol | Penerangan                                                              | Contoh                          |
| ------ | ----------------------------------------------------------------------- | -------------------------------- |
| `+`    | **Penjumlahan**: Mengira jumlah dua nombor                              | `1 + 2 //jawapan yang dijangka ialah 3`   |
| `-`    | **Penolakan**: Mengira perbezaan dua nombor                             | `1 - 2 //jawapan yang dijangka ialah -1`  |
| `*`    | **Pendaraban**: Mengira hasil darab dua nombor                          | `1 * 2 //jawapan yang dijangka ialah 2`   |
| `/`    | **Pembahagian**: Mengira hasil bahagi dua nombor                        | `1 / 2 //jawapan yang dijangka ialah 0.5` |
| `%`    | **Baki**: Mengira baki daripada pembahagian dua nombor                  | `1 % 2 //jawapan yang dijangka ialah 1`   |

✅ Cuba! Cuba operasi aritmetik dalam konsol pelayar anda. Adakah hasilnya mengejutkan anda?

### String

Dalam JavaScript, data teks diwakili sebagai string. Istilah "string" berasal dari konsep watak yang disusun bersama dalam urutan, seperti cara penulis di biara zaman pertengahan menyambungkan huruf untuk membentuk perkataan dan ayat dalam manuskrip mereka.

String adalah asas kepada pembangunan web. Setiap teks yang dipaparkan di laman web – nama pengguna, label butang, mesej ralat, kandungan – dikendalikan sebagai data string. Memahami string adalah penting untuk mencipta antara muka pengguna yang berfungsi.

String adalah set watak yang berada di antara tanda petik tunggal atau berganda.

```javascript
'This is a string'
"This is also a string"
let myString = 'This is a string value stored in a variable';
```

**Memahami konsep ini:**
- **Menggunakan** sama ada tanda petik tunggal `'` atau tanda petik berganda `"` untuk menentukan string
- **Menyimpan** data teks yang boleh termasuk huruf, nombor, dan simbol
- **Menetapkan** nilai string kepada pembolehubah untuk digunakan kemudian
- **Memerlukan** tanda petik untuk membezakan teks daripada nama pembolehubah

Ingat untuk menggunakan tanda petik semasa menulis string, jika tidak JavaScript akan menganggapnya sebagai nama pembolehubah.

### Pemformatan String

Manipulasi string membolehkan anda menggabungkan elemen teks, menggabungkan pembolehubah, dan mencipta kandungan dinamik yang bertindak balas kepada keadaan program. Teknik ini membolehkan anda membina teks secara programatik.

Selalunya anda perlu menggabungkan beberapa string bersama – proses ini dipanggil penggabungan.

Untuk **menggabungkan** dua atau lebih string, atau menyatukannya, gunakan operator `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
```

**Langkah demi langkah, inilah yang berlaku:**
- **Menggabungkan** beberapa string menggunakan operator `+`
- **Menyatukan** string secara langsung tanpa ruang dalam contoh pertama
- **Menambah** watak ruang `" "` antara string untuk kebolehbacaan
- **Menyisipkan** tanda baca seperti koma untuk mencipta pemformatan yang betul

✅ Kenapa `1 + 1 = 2` dalam JavaScript, tetapi `'1' + '1' = 11?` Fikirkan tentangnya. Bagaimana pula dengan `'1' + 1`?

**Template literals** adalah cara lain untuk memformat string, kecuali bukannya tanda petik, tanda backtick digunakan. Apa sahaja yang bukan teks biasa mesti diletakkan di dalam tempat letak `${ }`. Ini termasuk sebarang pembolehubah yang mungkin berupa string.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

**Mari fahami setiap bahagian:**
- **Menggunakan** tanda backtick `` ` `` dan bukannya tanda petik biasa untuk mencipta template literals
- **Menyisipkan** pembolehubah secara langsung menggunakan sintaks tempat letak `${}`
- **Menjaga** ruang dan pemformatan seperti yang ditulis
- **Menyediakan** cara yang lebih bersih untuk mencipta string kompleks dengan pembolehubah
Anda boleh mencapai matlamat pemformatan anda dengan mana-mana kaedah, tetapi template literals akan menghormati sebarang ruang dan baris baru.

✅ Bilakah anda akan menggunakan template literal berbanding string biasa?

### Boolean

Boolean mewakili bentuk data yang paling mudah: ia hanya boleh memegang salah satu daripada dua nilai – `true` atau `false`. Sistem logik binari ini berasal daripada kerja George Boole, seorang ahli matematik abad ke-19 yang membangunkan algebra Boolean.

Walaupun kesederhanaannya, boolean adalah penting untuk logik program. Ia membolehkan kod anda membuat keputusan berdasarkan syarat – sama ada pengguna telah log masuk, jika butang telah diklik, atau jika kriteria tertentu dipenuhi.

Boolean hanya boleh mempunyai dua nilai: `true` atau `false`. Boolean boleh membantu membuat keputusan tentang baris kod mana yang harus dijalankan apabila syarat tertentu dipenuhi. Dalam banyak kes, [operator](../../../../2-js-basics/1-data-types) membantu menetapkan nilai Boolean dan anda sering akan melihat dan menulis pembolehubah yang diinisialisasi atau nilainya dikemas kini dengan operator.

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

**Dalam contoh di atas, kami telah:**
- **Mencipta** pembolehubah yang menyimpan nilai Boolean `true`
- **Menunjukkan** cara menyimpan nilai Boolean `false`
- **Menggunakan** kata kunci tepat `true` dan `false` (tidak memerlukan tanda petik)
- **Menyediakan** pembolehubah ini untuk digunakan dalam pernyataan bersyarat

✅ Pembolehubah boleh dianggap 'truthy' jika ia menilai kepada boolean `true`. Menariknya, dalam JavaScript, [semua nilai adalah truthy kecuali ditakrifkan sebagai falsy](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## Cabaran GitHub Copilot Agent 🚀

Gunakan mod Agent untuk menyelesaikan cabaran berikut:

**Deskripsi:** Cipta pengurus maklumat peribadi yang menunjukkan semua jenis data JavaScript yang telah anda pelajari dalam pelajaran ini sambil mengendalikan senario data dunia sebenar.

**Arahan:** Bina program JavaScript yang mencipta objek profil pengguna yang mengandungi: nama seseorang (string), umur (number), status pelajar (boolean), warna kegemaran sebagai array, dan objek alamat dengan sifat jalan, bandar, dan kod pos. Sertakan fungsi untuk memaparkan maklumat profil dan mengemas kini medan individu. Pastikan untuk menunjukkan penggabungan string, template literals, operasi aritmetik dengan umur, dan logik boolean untuk status pelajar.

Ketahui lebih lanjut tentang [mod agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## 🚀 Cabaran

JavaScript mempunyai beberapa tingkah laku yang boleh mengejutkan pembangun. Berikut adalah contoh klasik untuk diterokai: cuba taip ini dalam konsol penyemak imbas anda: `let age = 1; let Age = 2; age == Age` dan perhatikan hasilnya. Ia mengembalikan `false` – bolehkah anda menentukan sebabnya?

Ini mewakili salah satu daripada banyak tingkah laku JavaScript yang patut difahami. Keakraban dengan keanehan ini akan membantu anda menulis kod yang lebih boleh dipercayai dan menyelesaikan masalah dengan lebih berkesan.

## Kuiz Selepas Kuliah
[Kuiz selepas kuliah](https://ff-quizzes.netlify.app)

## Ulasan & Kajian Kendiri

Lihat [senarai latihan JavaScript ini](https://css-tricks.com/snippets/javascript/) dan cuba satu. Apa yang anda pelajari?

## Tugasan

[Latihan Jenis Data](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.