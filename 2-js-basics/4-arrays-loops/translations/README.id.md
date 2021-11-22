# Dasar-dasar JavaScript: Array dan Loop

![Dasar-dasar JavaScript - Array](/sketchnotes/webdev101-js-arrays.png)

> Sketsa oleh [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuis Pra-Kuliah

[Kuis pra-Kuliah](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/13?loc=id)

Pelajaran ini mencakup dasar-dasar JavaScript, bahasa yang menyediakan interaktivitas di web. Dalam pelajaran ini, Anda akan belajar tentang array dan loop, yang digunakan untuk memanipulasi data.


[![Arrays](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Arrays")
[![Loop](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Loop")


## Array

Bekerja dengan data adalah tugas umum untuk bahasa apa pun, dan ini jauh lebih mudah saat data diatur dalam format struktural, seperti array. Dengan array, data disimpan dalam struktur yang mirip dengan daftar. Salah satu manfaat utama dari array adalah Anda dapat menyimpan berbagai jenis data dalam satu array.

✅ Array ada di sekitar kita! Dapatkah Anda memikirkan contoh array dalam kehidupan nyata, seperti array panel surya?

Sintaks untuk array adalah sepasang tanda kurung siku.

```javascript
let arrayKu = [];
```

Ini adalah array kosong, tetapi array dapat dideklarasikan sudah diisi dengan data. Beberapa nilai dalam array dipisahkan dengan koma.

```javascript
let rasaRasaEsKrim = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

Nilai array diberi nilai unik yang disebut **indeks**, bilangan bulat yang ditetapkan berdasarkan jaraknya dari awal array. Dalam contoh di atas, nilai string "Chocolate" memiliki indeks 0, dan indeks "Rocky Road" adalah 4. Gunakan indeks dengan tanda kurung siku untuk mengambil, mengubah, atau menyisipkan nilai array.

✅ Apakah Anda terkejut bahwa array mulai dari indeks nol? Dalam beberapa bahasa pemrograman, indeks dimulai dari 1. Ada sejarah menarik seputar ini, yang dapat Anda [baca di Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering).

```javascript
let rasaRasaEsKrim = [
  "Chocolate",
  "Strawberry",
  "Vanilla",
  "Pistachio",
  "Rocky Road",
];
rasaRasaEsKrim[2]; //"Vanilla"
```

Anda dapat memanfaatkan indeks untuk mengubah nilai, seperti ini:

```javascript
rasaRasaEsKrim[4] = "Butter Pecan"; //Mengubah "Rocky Road" menjadi "Butter Pecan"
```

Dan Anda dapat memasukkan nilai baru pada indeks tertentu seperti ini:

```javascript
rasaRasaEsKrim[5] = "Cookie Dough"; //Ditambahkan "Cookie Dough"
```

✅ Cara yang lebih umum untuk mendorong nilai ke array adalah dengan menggunakan operator array seperti array.push()

Untuk mengetahui berapa banyak item dalam sebuah array, gunakan properti `length`.

```javascript
let rasaRasaEsKrim = [
  "Chocolate",
  "Strawberry",
  "Vanilla",
  "Pistachio",
  "Rocky Road",
];
rasaRasaEsKrim.length; //5
```

✅ Cobalah sendiri! Gunakan konsol browser Anda untuk membuat dan memanipulasi array kreasi Anda sendiri.

## Loop

Pengulangan memungkinkan untuk tugas berulang atau **iterative**, dan dapat menghemat banyak waktu dan kode. Setiap iterasi dapat bervariasi dalam variabel, nilai, dan kondisinya. Ada berbagai jenis loop dalam JavaScript, dan mereka memiliki perbedaan kecil, tetapi pada dasarnya melakukan hal yang sama: loop di atas data.

### For Loop

Perulangan `for` membutuhkan 3 bagian untuk melakukan iterasi: - `counter` Variabel yang biasanya diinisialisasi dengan angka yang menghitung jumlah iterasi. - `condition` Expression yang menggunakan operator perbandingan untuk menyebabkan loop berhenti ketika `true`. - `iteration-expression` Berjalan di akhir setiap iterasi, biasanya digunakan untuk mengubah nilai penghitung.

```javascript
// Menghitung hingga 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅ Jalankan kode ini di konsol browser. Apa yang terjadi jika Anda membuat perubahan kecil pada penghitung, kondisi, atau ekspresi iterasi? Bisakah Anda membuatnya berjalan mundur, membuat hitungan mundur?

### While loop

Tidak seperti sintaks untuk pengulangan `for`, pengulangan `while` hanya membutuhkan kondisi yang akan menghentikan pengulangan jika `true`. Kondisi dalam pengulangan biasanya mengandalkan nilai lain seperti penghitung, dan harus dikelola selama pengulangan. Nilai awal untuk pencacah harus dibuat di luar perulangan, dan ekspresi apa pun untuk memenuhi suatu kondisi, termasuk mengubah penghitung harus dipertahankan di dalam perulangan.

```javascript
//Menghitung hingga 10
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

✅ Mengapa Anda memilih for loop vs. a while loop? Sebanyak 17 ribu penonton memiliki pertanyaan yang sama tentang StackOverflow, dan beberapa opini [mungkin menarik bagi Anda](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Loop dan Array

Array sering digunakan dengan loop karena sebagian besar kondisi memerlukan panjang array untuk menghentikan loop, dan indeks juga bisa menjadi nilai counter.

```javascript
let rasaRasaEsKrim = [
  "Chocolate",
  "Strawberry",
  "Vanilla",
  "Pistachio",
  "Rocky Road",
];

for (let i = 0; i < rasaRasaEsKrim.length; i++) {
  console.log(rasaRasaEsKrim[i]);
} //Berakhir saat semua rasa dicetak
```

✅ Bereksperimenlah dengan melakukan perulangan pada array buatan Anda sendiri di konsol browser Anda.

---

## 🚀 Tantangan

Ada cara lain untuk melakukan perulangan pada array selain perulangan for dan while. Ada [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), dan [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Tulis ulang loop array Anda menggunakan salah satu dari teknik ini.

## Kuis Pasca-Kuliah

[Kuis pasca-kuliah](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/14?loc=id)

## Review & Belajar Mandiri

Array dalam JavaScript memiliki banyak metode yang menyertainya, sangat berguna untuk manipulasi data. [Bacalah tentang metode ini](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) dan coba beberapa di antaranya (seperti push, pop, slice dan splice) pada array kreasi Anda.

## Tugas

[Loop sebuah Array](./assignment.id.md)
