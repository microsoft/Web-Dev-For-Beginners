# Asas JavaScript: Array dan Loop

![Asas JavaScript - Array](/sketchnotes/webdev101-js-arrays.png)
> Sketchnote karya [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuiz Pra Kuliah
[Kuiz Pra Kuliah](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/13)

Pelajaran ini merangkumi asas-asas JavaScript, bahasa yang menyediakan interaktiviti di web. Dalam pelajaran ini, anda akan belajar tentang array dan loop, yang digunakan untuk memanipulasi data.

[![Array](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Array")
[![Gelung](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Gelung")

> Klik gambar di atas untuk video mengenai tatasusunan dan gelung.
## Array

Bekerja dengan data adalah tugas biasa untuk bahasa apa pun, dan ini adalah tugas yang lebih mudah apabila data disusun dalam format struktur, seperti array. Dengan array, data disimpan dalam struktur yang serupa dengan senarai. Satu faedah utama array ialah anda dapat menyimpan pelbagai jenis data dalam satu array.

✅ Array ada di sekeliling kita! Bolehkah anda memikirkan contoh array sebenar, seperti susunan panel solar?

Sintaks untuk array adalah sepasang tanda kurung persegi.

```javascript
let myArray = [];
```

Ini adalah array kosong, tetapi tatasusunan dapat dinyatakan sudah diisi dengan data. Pelbagai nilai dalam array dipisahkan dengan koma.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

Nilai array diberikan nilai unik yang disebut **indeks**, nombor bulat yang diberikan berdasarkan jaraknya dari awal array. Dalam contoh di atas, nilai rentetan "Chocolate" mempunyai indeks 0, dan indeks "Rocky Road" adalah 4. Gunakan indeks dengan tanda kurung persegi untuk mengambil, mengubah, atau memasukkan nilai array.

✅ Adakah mengejutkan anda bahawa tatasusunan bermula dari indeks sifar? Dalam beberapa bahasa pengaturcaraan, indeks bermula pada 1. Ada sejarah menarik di sekitar ini, yang boleh anda [baca di Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering).

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

Anda boleh memanfaatkan indeks untuk mengubah nilai, seperti ini:

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Tukar "Rocky Road" menjadi "Butter Pecan"
```

Dan anda boleh memasukkan nilai baru pada indeks tertentu seperti ini:

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //Tambah "Cookie Dough"
```

✅ Cara yang lebih biasa untuk mendorong nilai ke array adalah dengan menggunakan pengendali array seperti array.push()

Untuk mengetahui berapa banyak item dalam array, gunakan sifat `length`.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ Cubalah sendiri! Gunakan konsol penyemak imbas anda untuk membuat dan memanipulasi pelbagai ciptaan anda sendiri.

## Loop

Loop membolehkan tugas berulang atau tugasan **interaktif**, dan dapat menjimatkan banyak masa dan kod. Setiap lelaran boleh berbeza-beza dalam pemboleh ubah, nilai, dan keadaannya. Terdapat pelbagai jenis loop dalam JavaScript, dan mereka mempunyai perbezaan kecil, tetapi pada dasarnya melakukan perkara yang sama: loop over data.

### For Loop

Gelung `for` memerlukan 3 bahagian untuk berulang:
    - `counter` Pemboleh ubah yang biasanya diinisialisasi dengan nombor yang mengira bilangan lelaran.
    - Ungkapan `condition` yang menggunakan operator perbandingan untuk menyebabkan gelung berhenti ketika` true`
    - `iterasi-ekspresi` Berjalan pada akhir setiap lelaran, biasanya digunakan untuk mengubah nilai pembilang

```javascript
// Menggira hingga 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅ Jalankan kod ini di konsol penyemak imbas. Apa yang berlaku apabila anda membuat perubahan kecil pada ungkapan pembilang, keadaan, atau lelaran? Bolehkah anda membuatnya berjalan ke belakang, membuat undur?

### While loop

Tidak seperti sintaks untuk `for` loop, `while` loop hanya memerlukan keadaan yang akan menghentikan loop ketika `true`. Keadaan dalam loop biasanya bergantung pada nilai lain seperti pembilang, dan mesti dikendalikan semasa gelung. Nilai permulaan untuk pembilang mesti dibuat di loop luar, dan sebarang ungkapan untuk memenuhi syarat, termasuk menukar pembilang mesti dipertahankan di dalam loop.

```javascript
//Menggira hingga 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ Mengapakah anda memilih gelung untuk gelung berbanding sebentar? Penonton 17K mempunyai soalan yang sama mengenai StackOverflow, dan beberapa pendapat [mungkin menarik bagi anda](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Loop dan Array

Array sering digunakan dengan loop kerana kebanyakan keadaan memerlukan panjang larik untuk menghentikan loop, dan indeks juga boleh menjadi nilai pembilang.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Berakhir apabila semua perisa dicetak
```

✅ Bereksperimen dengan melengkapkan pelbagai pembuatan anda sendiri di konsol penyemak imbas anda.

---

## 🚀 Cabaran

Terdapat cara lain untuk mengulangi tatasusunan selain untuk dan semasa gelung. Terdapat [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), dan [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Tulis semula array loop anda menggunakan salah satu teknik ini.

## Kuiz Pasca Kuliah
[Kuiz Pasca Kuliah](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/14)

## Mengkaji and Belajar Sendiri 

Array dalam JavaScript mempunyai banyak kaedah yang melekat padanya, sangat berguna untuk manipulasi data. [Baca kaedah ini](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) dan cuba beberapa di antaranya (seperti push, pop, slice dan splice) pada pelbagai ciptaan anda.

## Tugasan

[Loop an Array](./assignment.ms.md)
