<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c32c3377f83ab750c2447c77ab98",
  "translation_date": "2025-10-24T14:22:13+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "ms"
}
-->
# Asas JavaScript: Membuat Keputusan

![Asas JavaScript - Membuat keputusan](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.ms.png)

> Sketchnote oleh [Tomomi Imura](https://twitter.com/girlie_mac)

Pernahkah anda tertanya-tanya bagaimana aplikasi membuat keputusan yang bijak? Seperti bagaimana sistem navigasi memilih laluan terpantas, atau bagaimana termostat memutuskan bila untuk menghidupkan pemanas? Inilah konsep asas membuat keputusan dalam pengaturcaraan.

Seperti mana Mesin Analitik Charles Babbage direka untuk mengikuti urutan operasi yang berbeza berdasarkan keadaan, program JavaScript moden perlu membuat pilihan berdasarkan pelbagai situasi. Keupayaan untuk bercabang dan membuat keputusan inilah yang mengubah kod statik menjadi aplikasi yang responsif dan pintar.

Dalam pelajaran ini, anda akan belajar cara melaksanakan logik bersyarat dalam program anda. Kita akan meneroka pernyataan bersyarat, operator perbandingan, dan ekspresi logik yang membolehkan kod anda menilai situasi dan bertindak balas dengan sewajarnya.

## Kuiz Pra-Kuliah

[Kuiz pra-kuliah](https://ff-quizzes.netlify.app/web/quiz/11)

Keupayaan untuk membuat keputusan dan mengawal aliran program adalah aspek asas dalam pengaturcaraan. Bahagian ini merangkumi cara mengawal laluan pelaksanaan program JavaScript anda menggunakan nilai Boolean dan logik bersyarat.

[![Membuat Keputusan](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Membuat Keputusan")

> 🎥 Klik imej di atas untuk video tentang membuat keputusan.

> Anda boleh mengikuti pelajaran ini di [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Ulang Kaji Ringkas tentang Boolean

Sebelum meneroka membuat keputusan, mari kita ulang kaji nilai Boolean dari pelajaran sebelumnya. Dinamakan sempena ahli matematik George Boole, nilai-nilai ini mewakili keadaan binari – sama ada `true` atau `false`. Tiada kekaburan, tiada jalan tengah.

Nilai binari ini membentuk asas semua logik pengiraan. Setiap keputusan yang dibuat oleh program anda akhirnya dikurangkan kepada penilaian Boolean.

Mencipta pembolehubah Boolean adalah mudah:

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

Ini mencipta dua pembolehubah dengan nilai Boolean yang jelas.

✅ Boolean dinamakan sempena ahli matematik, ahli falsafah, dan ahli logik Inggeris George Boole (1815–1864).

## Operator Perbandingan dan Boolean

Dalam amalan, anda jarang menetapkan nilai Boolean secara manual. Sebaliknya, anda akan menjana nilai tersebut dengan menilai keadaan: "Adakah nombor ini lebih besar daripada yang itu?" atau "Adakah nilai-nilai ini sama?"

Operator perbandingan membolehkan penilaian ini. Mereka membandingkan nilai dan mengembalikan hasil Boolean berdasarkan hubungan antara operand.

| Simbol | Penerangan                                                                                                                                                   | Contoh             |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Kurang daripada**: Membandingkan dua nilai dan mengembalikan jenis data Boolean `true` jika nilai di sebelah kiri kurang daripada nilai di sebelah kanan    | `5 < 6 // true`    |
| `<=`   | **Kurang daripada atau sama dengan**: Membandingkan dua nilai dan mengembalikan jenis data Boolean `true` jika nilai di sebelah kiri kurang daripada atau sama dengan nilai di sebelah kanan | `5 <= 6 // true`   |
| `>`    | **Lebih besar daripada**: Membandingkan dua nilai dan mengembalikan jenis data Boolean `true` jika nilai di sebelah kiri lebih besar daripada nilai di sebelah kanan | `5 > 6 // false`   |
| `>=`   | **Lebih besar daripada atau sama dengan**: Membandingkan dua nilai dan mengembalikan jenis data Boolean `true` jika nilai di sebelah kiri lebih besar daripada atau sama dengan nilai di sebelah kanan | `5 >= 6 // false`  |
| `===`  | **Kesamaan ketat**: Membandingkan dua nilai dan mengembalikan jenis data Boolean `true` jika nilai di sebelah kanan dan kiri adalah sama DAN jenis data adalah sama | `5 === 6 // false` |
| `!==`  | **Ketidaksamaan**: Membandingkan dua nilai dan mengembalikan nilai Boolean yang bertentangan dengan apa yang akan dikembalikan oleh operator kesamaan ketat | `5 !== 6 // true`  |

✅ Uji pengetahuan anda dengan menulis beberapa perbandingan dalam konsol pelayar anda. Adakah data yang dikembalikan mengejutkan anda?

## Pernyataan If

Pernyataan `if` adalah seperti bertanya soalan dalam kod anda. "Jika keadaan ini benar, maka lakukan perkara ini." Ia mungkin alat yang paling penting yang akan anda gunakan untuk membuat keputusan dalam JavaScript.

Beginilah cara ia berfungsi:

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

Keadaan diletakkan di dalam kurungan, dan jika ia `true`, JavaScript akan menjalankan kod di dalam kurungan keriting. Jika ia `false`, JavaScript hanya akan melangkau keseluruhan blok tersebut.

Anda sering menggunakan operator perbandingan untuk mencipta keadaan ini. Mari kita lihat contoh praktikal:

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

Oleh kerana `1000 >= 800` dinilai sebagai `true`, kod di dalam blok dilaksanakan, memaparkan "Mendapatkan komputer riba baru!" dalam konsol.

## Pernyataan If..Else

Tetapi bagaimana jika anda mahu program anda melakukan sesuatu yang berbeza apabila keadaan adalah palsu? Di sinilah `else` masuk – ia seperti mempunyai rancangan sandaran.

Pernyataan `else` memberi anda cara untuk mengatakan "jika keadaan ini tidak benar, lakukan perkara lain ini sebagai gantinya."

```javascript
let currentMoney = 500;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

Sekarang, oleh kerana `500 >= 800` adalah `false`, JavaScript melangkau blok pertama dan menjalankan blok `else` sebagai gantinya. Anda akan melihat "Belum mampu membeli komputer riba baru!" dalam konsol.

✅ Uji pemahaman anda tentang kod ini dan kod berikut dengan menjalankannya dalam konsol pelayar. Tukar nilai pembolehubah currentMoney dan laptopPrice untuk menukar `console.log()` yang dikembalikan.

## Pernyataan Switch

Kadang-kadang anda perlu membandingkan satu nilai dengan pelbagai pilihan. Walaupun anda boleh menggabungkan beberapa pernyataan `if..else`, pendekatan ini menjadi tidak praktikal. Pernyataan `switch` menyediakan struktur yang lebih bersih untuk mengendalikan pelbagai nilai diskret.

Konsep ini menyerupai sistem pensuisan mekanikal yang digunakan dalam pertukaran telefon awal – satu nilai input menentukan laluan pelaksanaan tertentu.

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

Beginilah cara ia disusun:
- JavaScript menilai ekspresi sekali
- Ia melihat setiap `case` untuk mencari padanan
- Apabila ia menemui padanan, ia menjalankan blok kod tersebut
- `break` memberitahu JavaScript untuk berhenti dan keluar dari switch
- Jika tiada kes yang sepadan, ia menjalankan blok `default` (jika anda ada)

```javascript
// Program using switch statement for day of week
let dayNumber = 2;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown day";
    break;
}
console.log(`Today is ${dayName}`);
```

Dalam contoh ini, JavaScript melihat bahawa `dayNumber` adalah `2`, mencari `case 2` yang sepadan, menetapkan `dayName` kepada "Tuesday", dan kemudian keluar dari switch. Hasilnya? "Hari ini adalah Selasa" dipaparkan dalam konsol.

✅ Uji pemahaman anda tentang kod ini dan kod berikut dengan menjalankannya dalam konsol pelayar. Tukar nilai pembolehubah a untuk menukar `console.log()` yang dikembalikan.

## Operator Logik dan Boolean

Keputusan yang kompleks sering memerlukan penilaian pelbagai keadaan secara serentak. Seperti mana algebra Boolean membolehkan ahli matematik menggabungkan ekspresi logik, pengaturcaraan menyediakan operator logik untuk menghubungkan pelbagai keadaan Boolean.

Operator ini membolehkan logik bersyarat yang canggih dengan menggabungkan penilaian benar/palsu yang mudah.

| Simbol | Penerangan                                                                                     | Contoh                                                                 |
| ------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **Logik AND**: Membandingkan dua ekspresi Boolean. Mengembalikan true **hanya** jika kedua-dua belah adalah benar | `(5 > 3) && (5 < 10) // Kedua-dua belah adalah benar. Mengembalikan true` |
| `\|\|` | **Logik OR**: Membandingkan dua ekspresi Boolean. Mengembalikan true jika sekurang-kurangnya satu belah adalah benar | `(5 > 10) \|\| (5 < 10) // Satu belah adalah palsu, yang lain adalah benar. Mengembalikan true` |
| `!`    | **Logik NOT**: Mengembalikan nilai yang bertentangan dengan ekspresi Boolean                     | `!(5 > 10) // 5 tidak lebih besar daripada 10, jadi "!" menjadikannya benar`         |

Operator ini membolehkan anda menggabungkan keadaan dengan cara yang berguna:
- AND (`&&`) bermaksud kedua-dua keadaan mesti benar
- OR (`||`) bermaksud sekurang-kurangnya satu keadaan mesti benar  
- NOT (`!`) membalikkan benar kepada palsu (dan sebaliknya)

## Keadaan dan Keputusan dengan Operator Logik

Mari kita lihat operator logik ini dalam tindakan dengan contoh yang lebih realistik:

```javascript
let currentMoney = 600;
let laptopPrice = 800;
let laptopDiscountPrice = laptopPrice - (laptopPrice * 0.2); // Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

Dalam contoh ini: kita mengira harga diskaun 20% (640), kemudian menilai sama ada dana yang tersedia kita mencukupi untuk harga penuh ATAU harga diskaun. Oleh kerana 600 memenuhi ambang harga diskaun 640, keadaan dinilai sebagai benar.

### Operator Negasi

Kadang-kadang lebih mudah untuk memikirkan apabila sesuatu TIDAK benar. Seperti bukannya bertanya "Adakah pengguna log masuk?", anda mungkin mahu bertanya "Adakah pengguna TIDAK log masuk?" Tanda seru (`!`) membalikkan logik untuk anda.

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

Operator `!` adalah seperti mengatakan "kebalikan daripada..." – jika sesuatu adalah `true`, `!` menjadikannya `false`, dan sebaliknya.

### Ekspresi Ternari

Untuk tugasan bersyarat yang mudah, JavaScript menyediakan **operator ternari**. Sintaks ringkas ini membolehkan anda menulis ekspresi bersyarat dalam satu baris, berguna apabila anda perlu menetapkan salah satu daripada dua nilai berdasarkan keadaan.

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

Ia dibaca seperti soalan: "Adakah keadaan ini benar? Jika ya, gunakan nilai ini. Jika tidak, gunakan nilai itu."

Di bawah adalah contoh yang lebih nyata:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Luangkan masa sebentar untuk membaca kod ini beberapa kali. Adakah anda memahami bagaimana operator ini berfungsi?

Inilah yang dikatakan oleh baris ini: "Adakah `firstNumber` lebih besar daripada `secondNumber`? Jika ya, letakkan `firstNumber` dalam `biggestNumber`. Jika tidak, letakkan `secondNumber` dalam `biggestNumber`."

Operator ternari hanyalah cara yang lebih pendek untuk menulis pernyataan `if..else` tradisional ini:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

Kedua-dua pendekatan menghasilkan hasil yang sama. Operator ternari menawarkan ringkasan, manakala struktur if-else tradisional mungkin lebih mudah dibaca untuk keadaan yang kompleks.

---

## 🚀 Cabaran

Cipta program yang ditulis terlebih dahulu dengan operator logik, dan kemudian tulis semula menggunakan ekspresi ternari. Apakah sintaks pilihan anda?

---

## Cabaran Ejen GitHub Copilot 🚀

Gunakan mod Ejen untuk melengkapkan cabaran berikut:

**Penerangan:** Cipta kalkulator gred yang komprehensif yang menunjukkan pelbagai konsep membuat keputusan dari pelajaran ini, termasuk pernyataan if-else, pernyataan switch, operator logik, dan ekspresi ternari.

**Arahan:** Tulis program JavaScript yang mengambil skor numerik pelajar (0-100) dan menentukan gred huruf mereka menggunakan kriteria berikut:
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: Di bawah 60

Keperluan:
1. Gunakan pernyataan if-else untuk menentukan gred huruf
2. Gunakan operator logik untuk memeriksa sama ada pelajar lulus (gred >= 60) DAN mempunyai penghormatan (gred >= 90)
3. Gunakan pernyataan switch untuk memberikan maklum balas khusus untuk setiap gred huruf
4. Gunakan operator ternari untuk menentukan sama ada pelajar layak untuk kursus seterusnya (gred >= 70)
5. Sertakan pengesahan input untuk memastikan skor adalah antara 0 dan 100

Uji program anda dengan pelbagai skor termasuk kes tepi seperti 59, 60, 89, 90, dan input tidak sah.

Ketahui lebih lanjut tentang [mod ejen](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## Kuiz Pasca-Kuliah

[Kuiz pasca-kuliah](https://ff-quizzes.netlify.app/web/quiz/12)

## Ulasan & Kajian Kendiri

Baca lebih lanjut tentang banyak operator yang tersedia untuk pengguna [di MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Pergi melalui panduan hebat Josh Comeau tentang [operator lookup](https://joshwcomeau.com/operator-lookup/)!

## Tugasan

[Operator](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.