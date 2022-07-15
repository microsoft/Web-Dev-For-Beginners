# Dasar-dasar JavaScript: Metode dan Fungsi

![Dasar-dasar JavaScript - Fungsi](/sketchnotes/webdev101-js-functions.png)

> Catatan sketsa oleh [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuis Pra-Kuliah

[Kuis pra-Kuliah](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/9?loc=id)

Ketika kita berpikir tentang menulis kode, kita selalu ingin memastikan kode kita dapat dibaca. Meskipun ini terdengar berlawanan dengan intuisi, kode dibaca lebih banyak kali daripada yang tertulis. Salah satu alat inti dalam kotak alat pengembang untuk memastikan kode yang dapat dipelihara adalah **function (fungsi)**.

[![Metode dan Fungsi](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Metode dan Fungsi")

## Fungsi

Pada intinya, fungsi adalah sekumpulan kode yang dapat kita jalankan sesuai permintaan. Ini sempurna untuk skenario di mana kita perlu melakukan tugas yang sama beberapa kali; daripada menduplikasi logika di beberapa lokasi (yang akan menyulitkan pembaruan saat waktunya tiba), kita dapat memusatkannya di satu lokasi, dan memanggilnya kapan pun kita membutuhkan operasi dilakukan - Anda bahkan dapat memanggil fungsi dari fungsi lain!.

Sama pentingnya adalah kemampuan untuk menamai suatu fungsi. Meskipun ini mungkin tampak sepele, nama tersebut memberikan cara cepat untuk mendokumentasikan bagian kode. Anda bisa menganggap ini sebagai label pada sebuah tombol. Jika saya mengklik tombol yang bertuliskan "Batalkan pengatur waktu", saya tahu itu akan berhenti menjalankan jam.

## Membuat dan memanggil suatu fungsi

Sintaks untuk suatu fungsi terlihat seperti berikut:

```javascript
function nameOfFunction() {
  // definisi fungsi
  // definisi fungsi/tubuh
}
```

Jika saya ingin membuat fungsi untuk menampilkan salam, mungkin akan terlihat seperti ini:

```javascript
function tampilkanSapaan() {
  console.log("Hello, world!");
}
```

Kapanpun kita ingin memanggil (atau memanggil) fungsi kita, kita menggunakan nama fungsi yang diikuti dengan `()`. Perlu diperhatikan fakta bahwa fungsi kita dapat didefinisikan sebelum atau sesudah kita memutuskan untuk memanggilnya; kompilator JavaScript (JavaScript compiler) akan menemukannya untuk Anda.

```javascript
// memanggil fungsi kita
tampilkanSapaan();
```

> **CATATAN:** Ada jenis fungsi khusus yang dikenal sebagai **method**, yang telah Anda gunakan! Faktanya, kita melihat ini di demo kita di atas ketika kita menggunakan `console.log`. Apa yang membuat metode berbeda dari fungsi adalah metode dilampirkan ke objek (`konsol` dalam contoh kita), sementara fungsi mengambang bebas. Anda akan mendengar banyak pengembang menggunakan istilah ini secara bergantian.

### Praktik terbaik fungsi

Ada beberapa praktik terbaik yang perlu diperhatikan saat membuat fungsi

- Seperti biasa, gunakan nama deskriptif agar Anda tahu fungsinya
- Gunakan **camelCasing** untuk menggabungkan kata-kata
- Jaga agar fungsi Anda tetap fokus pada tugas tertentu

## Memasukkan informasi ke suatu fungsi

Agar suatu fungsi lebih dapat digunakan kembali, Anda sering kali ingin menyampaikan informasi ke dalamnya. Jika kita mempertimbangkan contoh `tampilkanSapaan` di atas, itu hanya akan menampilkan **Halo, dunia!**. Bukan fungsi paling berguna yang bisa dibuat seseorang. Jika kita ingin membuatnya sedikit lebih fleksibel, seperti mengizinkan seseorang untuk menentukan nama orang yang akan disapa, kita dapat menambahkan **parameter**. Parameter (juga terkadang disebut **argumen**), adalah informasi tambahan yang dikirim ke suatu fungsi.

Parameter dicantumkan di bagian definisi dalam tanda kurung dan dipisahkan dengan koma seperti ini:

```javascript
function nama(param, param2, param3) {}
```

Kita dapat memperbarui `tampilkanSapaan` kita untuk menerima sebuah nama dan menampilkannya.

```javascript
function tampilkanSapaan(nama) {
  const pesan = `Hello, ${nama}!`;
  console.log(pesan);
}
```

Ketika kita ingin memanggil fungsi kita dan memasukkan parameternya, kita tentukan di dalam tanda kurung.

```javascript
tampilkanSapaan("Christopher");
// Menampilkan "Hello, Christopher!" ketika dijalankan
```

## Nilai dasar (Nilai Default)

Kita dapat membuat fungsi kita lebih fleksibel dengan menambahkan lebih banyak parameter. Tetapi bagaimana jika kita tidak ingin setiap nilai ditentukan? Sesuai dengan contoh sapaan kita, kita bisa membiarkan nama sesuai kebutuhan (kita perlu tahu siapa yang kita sapa), tapi kita ingin membiarkan sapaan itu sendiri disesuaikan sesuai keinginan. Jika seseorang tidak ingin menyesuaikannya, kita memberikan nilai default sebagai gantinya. Untuk memberikan nilai default ke parameter, kita menyetelnya dengan cara yang sama seperti kita menyetel nilai untuk variabel - `namaParameter = 'nilaiDefault'`. Berikut contoh lengkapnya:

```javascript
function tampilkanSapaan(nama, salam = "Hello") {
  console.log(`${salam}, ${nama}`);
}
```

Ketika kita memanggil fungsi tersebut, kita kemudian dapat memutuskan apakah kita ingin menetapkan nilai dari `salam`.

```javascript
tampilkanSapaan("Christopher");
// menampilkan "Hello, Christopher"

tampilkanSapaan("Christopher", "Hi");
// menampilkan "Hi, Christopher"
```

## Nilai Kembali (Return values)

Hingga saat ini fungsi yang kita buat akan selalu menghasilkan [konsol](https://developer.mozilla.org/docs/Web/API/console). Terkadang ini persis seperti yang kita cari, terutama saat kita membuat fungsi yang akan memanggil layanan lain. Tetapi bagaimana jika saya ingin membuat fungsi pembantu untuk melakukan kalkulasi dan memberikan nilai kembali sehingga saya dapat menggunakannya di tempat lain?

Kita bisa melakukan ini dengan menggunakan **nilai kembali (return value)**. Nilai kembali dikembalikan oleh fungsi, dan dapat disimpan dalam variabel sama seperti kita dapat menyimpan nilai literal seperti string atau angka.

Jika suatu fungsi mengembalikan sesuatu maka kata kunci `return` digunakan. Kata kunci `return` mengharapkan nilai atau referensi dari apa yang dikembalikan seperti:

```javascript
return variabelSaya;
```

Kita bisa membuat fungsi untuk membuat pesan ucapan dan mengembalikan nilainya ke pemanggil

```javascript
function buatPesanSapaan(nama) {
  const pesan = `Hello, ${nama}`;
  return pesan;
}
```

Saat memanggil fungsi ini, kita akan menyimpan nilai dalam variabel. Ini hampir sama dengan cara kita menetapkan variabel ke nilai statis (seperti `const nama = 'Christopher'`).

```javascript
const pesanSapaan = buatPesanSapaan("Christopher");
```

## Fungsi sebagai parameter untuk fungsi

Saat Anda maju dalam karir pemrograman Anda, Anda akan menemukan fungsi yang menerima fungsi sebagai parameter. Trik rapi ini biasanya digunakan ketika kita tidak tahu kapan sesuatu akan terjadi atau selesai, tetapi kita tahu kita perlu melakukan operasi sebagai tanggapan.

Sebagai contoh, pertimbangkan [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), yang memulai timer dan akan mengeksekusi kode setelah selesai. Kita perlu memberi tahu kode apa yang ingin kita jalankan. Kedengarannya seperti pekerjaan yang sempurna untuk suatu fungsi!

Jika Anda menjalankan kode di bawah ini, setelah 3 detik Anda akan melihat pesan **3 detik telah berlalu**.

```javascript
function tampilkanSelesai() {
  console.log("3 detik telah berlalu");
}
// nilai timer dalam milidetik
setTimeout(3000, tampilkanSelesai);
```

### Fungsi anonim

Mari kita lihat lagi apa yang telah kita bangun. Kita membuat fungsi dengan nama yang akan digunakan satu kali. Saat aplikasi kita menjadi lebih kompleks, kita dapat melihat diri kita sendiri membuat banyak fungsi yang hanya akan dipanggil sekali. Ini tidak ideal. Ternyata, kita tidak selalu perlu memberi nama!

Saat kita mengirimkan fungsi sebagai parameter, kita dapat mengabaikan pembuatannya terlebih dahulu dan sebagai gantinya membuatnya sebagai bagian dari parameter. Kita menggunakan kata kunci `function` yang sama, tetapi kita membuatnya sebagai parameter.

Mari tulis ulang kode di atas untuk menggunakan fungsi anonim:

```javascript
setTimeout(3000, function () {
  console.log("3 detik telah berlalu");
});
```

Jika Anda menjalankan kode baru kita, Anda akan melihat kita mendapatkan hasil yang sama. Kita telah membuat fungsi, tetapi tidak harus memberinya nama!

### Fungsi panah gemuk

Satu pintasan yang umum di banyak bahasa pemrograman (termasuk JavaScript) adalah kemampuan untuk menggunakan apa yang disebut fungsi **panah (arrow)** atau **panah gemuk (fat arrow)**. Ini menggunakan indikator khusus `=>`, yang terlihat seperti panah - demikian namanya! Dengan menggunakan `=>`, kita dapat melewati kata kunci `function`.

Mari kita tulis ulang kode kita sekali lagi untuk menggunakan fungsi panah gemuk:

```javascript
setTimeout(3000, () => {
  console.log("3 detik telah berlalu");
});
```

### Kapan menggunakan setiap strategi

Anda sekarang telah melihat bahwa kita memiliki tiga cara untuk meneruskan fungsi sebagai parameter dan mungkin bertanya-tanya kapan harus menggunakannya. Jika Anda tahu Anda akan menggunakan fungsi tersebut lebih dari sekali, buatlah seperti biasa. Jika Anda akan menggunakannya hanya untuk satu lokasi, biasanya yang terbaik adalah menggunakan fungsi anonim. Apakah Anda menggunakan fungsi panah gemuk atau tidak atau sintaks `function` yang lebih tradisional terserah Anda, tetapi Anda akan melihat sebagian besar pengembang modern lebih memilih`=>`.

---

## 🚀 Tantangan

Bisakah Anda mengartikulasikan dalam satu kalimat perbedaan antara fungsi dan metode? Cobalah!

## Kuis Pasca-Kuliah

[Kuis pasca-kuliah](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/10?loc=id)

## Review & Belajar Mandiri

Layak [membaca lebih banyak tentang fungsi panah](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), karena semakin sering digunakan dalam basis kode. Berlatihlah menulis fungsi, lalu menulis ulang dengan sintaks ini.

## Tugas

[Bersenang-senang dengan Fungsi](./assignment.id.md)
