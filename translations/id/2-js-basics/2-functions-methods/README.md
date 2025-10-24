<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ec43b53e8e015cdabfd3ad877b3c28e5",
  "translation_date": "2025-10-24T13:56:45+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "id"
}
-->
# Dasar-Dasar JavaScript: Metode dan Fungsi

![Dasar-Dasar JavaScript - Fungsi](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.id.png)
> Sketchnote oleh [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuis Sebelum Pelajaran
[Kuis sebelum pelajaran](https://ff-quizzes.netlify.app)

Menulis kode yang sama berulang kali adalah salah satu frustrasi paling umum dalam pemrograman. Fungsi menyelesaikan masalah ini dengan memungkinkan Anda mengemas kode ke dalam blok yang dapat digunakan kembali. Pikirkan fungsi seperti komponen standar yang membuat jalur perakitan Henry Ford menjadi revolusioner – setelah Anda membuat komponen yang andal, Anda dapat menggunakannya di mana saja tanpa harus membangunnya dari awal.

Fungsi memungkinkan Anda menggabungkan potongan kode sehingga Anda dapat menggunakannya kembali di seluruh program Anda. Alih-alih menyalin dan menempelkan logika yang sama di mana-mana, Anda dapat membuat fungsi sekali dan memanggilnya kapan pun diperlukan. Pendekatan ini menjaga kode Anda tetap terorganisir dan membuat pembaruan jauh lebih mudah.

Dalam pelajaran ini, Anda akan belajar cara membuat fungsi Anda sendiri, mengirimkan informasi ke dalamnya, dan mendapatkan hasil yang berguna kembali. Anda akan menemukan perbedaan antara fungsi dan metode, mempelajari pendekatan sintaks modern, dan melihat bagaimana fungsi dapat bekerja dengan fungsi lainnya. Kita akan membangun konsep-konsep ini langkah demi langkah.

[![Metode dan Fungsi](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Metode dan Fungsi")

> 🎥 Klik gambar di atas untuk video tentang metode dan fungsi.

> Anda dapat mengikuti pelajaran ini di [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Fungsi

Fungsi adalah blok kode mandiri yang melakukan tugas tertentu. Fungsi mengenkapsulasi logika yang dapat Anda jalankan kapan pun diperlukan.

Alih-alih menulis kode yang sama beberapa kali di seluruh program Anda, Anda dapat mengemasnya dalam fungsi dan memanggil fungsi itu kapan pun Anda membutuhkannya. Pendekatan ini menjaga kode Anda tetap bersih dan membuat pembaruan jauh lebih mudah. Bayangkan tantangan pemeliharaan jika Anda perlu mengubah logika yang tersebar di 20 lokasi berbeda dalam kode Anda.

Memberi nama fungsi Anda secara deskriptif sangat penting. Fungsi yang diberi nama dengan baik mengkomunikasikan tujuannya dengan jelas – ketika Anda melihat `cancelTimer()`, Anda langsung memahami apa yang dilakukannya, seperti tombol yang diberi label dengan jelas memberi tahu Anda apa yang akan terjadi saat Anda mengkliknya.

## Membuat dan Memanggil Fungsi

Mari kita lihat bagaimana cara membuat fungsi. Sintaksnya mengikuti pola yang konsisten:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Mari kita uraikan:
- Kata kunci `function` memberi tahu JavaScript "Hei, saya sedang membuat fungsi!"
- `nameOfFunction` adalah tempat Anda memberikan nama deskriptif untuk fungsi Anda
- Tanda kurung `()` adalah tempat Anda dapat menambahkan parameter (kita akan membahasnya segera)
- Kurung kurawal `{}` berisi kode sebenarnya yang dijalankan saat Anda memanggil fungsi

Mari kita buat fungsi salam sederhana untuk melihat ini dalam aksi:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Fungsi ini mencetak "Hello, world!" ke konsol. Setelah Anda mendefinisikannya, Anda dapat menggunakannya sebanyak yang diperlukan.

Untuk menjalankan (atau "memanggil") fungsi Anda, tulis namanya diikuti oleh tanda kurung. JavaScript memungkinkan Anda mendefinisikan fungsi Anda sebelum atau setelah Anda memanggilnya – mesin JavaScript akan menangani urutan eksekusi.

```javascript
// calling our function
displayGreeting();
```

Saat Anda menjalankan baris ini, itu mengeksekusi semua kode di dalam fungsi `displayGreeting` Anda, menampilkan "Hello, world!" di konsol browser Anda. Anda dapat memanggil fungsi ini berulang kali.

> **Catatan:** Anda telah menggunakan **metode** sepanjang pelajaran ini. `console.log()` adalah metode – pada dasarnya fungsi yang dimiliki oleh objek `console`. Perbedaan utama adalah bahwa metode terlampir pada objek, sedangkan fungsi berdiri sendiri. Banyak pengembang menggunakan istilah ini secara bergantian dalam percakapan santai.

### Praktik Terbaik Fungsi

Berikut beberapa tips untuk membantu Anda menulis fungsi yang hebat:

- Berikan nama fungsi Anda yang jelas dan deskriptif – diri Anda di masa depan akan berterima kasih!
- Gunakan **camelCasing** untuk nama yang terdiri dari beberapa kata (seperti `calculateTotal` daripada `calculate_total`)
- Jaga agar setiap fungsi fokus pada satu hal dengan baik

## Mengirimkan Informasi ke Fungsi

Fungsi `displayGreeting` kita terbatas – hanya dapat menampilkan "Hello, world!" untuk semua orang. Parameter memungkinkan kita membuat fungsi lebih fleksibel dan berguna.

**Parameter** bertindak seperti placeholder di mana Anda dapat memasukkan nilai yang berbeda setiap kali Anda menggunakan fungsi. Dengan cara ini, fungsi yang sama dapat bekerja dengan informasi yang berbeda pada setiap pemanggilan.

Anda mencantumkan parameter di dalam tanda kurung saat Anda mendefinisikan fungsi Anda, memisahkan beberapa parameter dengan koma:

```javascript
function name(param, param2, param3) {

}
```

Setiap parameter bertindak seperti placeholder – saat seseorang memanggil fungsi Anda, mereka akan memberikan nilai sebenarnya yang dimasukkan ke dalam tempat-tempat ini.

Mari kita perbarui fungsi salam kita untuk menerima nama seseorang:

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Perhatikan bagaimana kita menggunakan backticks (`` ` ``) dan `${}` untuk memasukkan nama langsung ke dalam pesan kita – ini disebut template literal, dan ini adalah cara yang sangat praktis untuk membangun string dengan variabel yang dicampur.

Sekarang saat kita memanggil fungsi kita, kita dapat memasukkan nama apa pun:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

JavaScript mengambil string `'Christopher'`, menetapkannya ke parameter `name`, dan membuat pesan yang dipersonalisasi "Hello, Christopher!"

## Nilai Default

Bagaimana jika kita ingin membuat beberapa parameter bersifat opsional? Di sinilah nilai default berguna!

Misalnya kita ingin orang dapat menyesuaikan kata salam, tetapi jika mereka tidak menentukan satu, kita akan menggunakan "Hello" sebagai cadangan. Anda dapat mengatur nilai default dengan menggunakan tanda sama dengan, seperti mengatur variabel:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Di sini, `name` masih diperlukan, tetapi `salutation` memiliki nilai cadangan `'Hello'` jika tidak ada yang memberikan salam yang berbeda.

Sekarang kita dapat memanggil fungsi ini dengan dua cara berbeda:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

Pada pemanggilan pertama, JavaScript menggunakan "Hello" default karena kita tidak menentukan salam. Pada pemanggilan kedua, ia menggunakan "Hi" kustom kita. Fleksibilitas ini membuat fungsi dapat beradaptasi dengan berbagai skenario.

## Nilai Kembali

Fungsi kita sejauh ini hanya mencetak pesan ke konsol, tetapi bagaimana jika Anda ingin fungsi menghitung sesuatu dan memberikan hasilnya kembali kepada Anda?

Di sinilah **nilai kembali** masuk. Alih-alih hanya menampilkan sesuatu, fungsi dapat memberikan nilai yang dapat Anda simpan dalam variabel atau gunakan di bagian lain kode Anda.

Untuk mengirimkan nilai kembali, Anda menggunakan kata kunci `return` diikuti oleh apa pun yang ingin Anda kembalikan:

```javascript
return myVariable;
```

Ini penting: saat fungsi mencapai pernyataan `return`, ia langsung berhenti berjalan dan mengirimkan nilai itu kembali kepada siapa pun yang memanggilnya.

Mari kita modifikasi fungsi salam kita untuk mengembalikan pesan daripada mencetaknya:

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Sekarang alih-alih mencetak salam, fungsi ini membuat pesan dan memberikannya kembali kepada kita.

Untuk menggunakan nilai yang dikembalikan, kita dapat menyimpannya dalam variabel seperti nilai lainnya:

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

Sekarang `greetingMessage` berisi "Hello, Christopher" dan kita dapat menggunakannya di mana saja dalam kode kita – untuk menampilkannya di halaman web, menyertakannya dalam email, atau meneruskannya ke fungsi lain.

## Fungsi sebagai Parameter untuk Fungsi

Fungsi dapat diteruskan sebagai parameter ke fungsi lain. Meskipun konsep ini mungkin tampak rumit pada awalnya, ini adalah fitur yang kuat yang memungkinkan pola pemrograman yang fleksibel.

Pola ini sangat umum ketika Anda ingin mengatakan "ketika sesuatu terjadi, lakukan hal lain." Misalnya, "ketika timer selesai, jalankan kode ini" atau "ketika pengguna mengklik tombol, panggil fungsi ini."

Mari kita lihat `setTimeout`, yang merupakan fungsi bawaan yang menunggu waktu tertentu dan kemudian menjalankan beberapa kode. Kita perlu memberi tahu apa kode yang akan dijalankan – kasus penggunaan yang sempurna untuk meneruskan fungsi!

Coba kode ini – setelah 3 detik, Anda akan melihat pesan:

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

Perhatikan bagaimana kita meneruskan `displayDone` (tanpa tanda kurung) ke `setTimeout`. Kita tidak memanggil fungsi itu sendiri – kita menyerahkannya ke `setTimeout` dan mengatakan "panggil ini dalam 3 detik."

### Fungsi Anonim

Kadang-kadang Anda membutuhkan fungsi hanya untuk satu hal dan tidak ingin memberinya nama. Pikirkan – jika Anda hanya menggunakan fungsi sekali, mengapa memperumit kode Anda dengan nama tambahan?

JavaScript memungkinkan Anda membuat **fungsi anonim** – fungsi tanpa nama yang dapat Anda definisikan langsung di tempat Anda membutuhkannya.

Berikut cara kita dapat menulis ulang contoh timer kita menggunakan fungsi anonim:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Ini mencapai hasil yang sama, tetapi fungsi didefinisikan langsung dalam pemanggilan `setTimeout`, menghilangkan kebutuhan untuk deklarasi fungsi terpisah.

### Fungsi Panah

JavaScript modern memiliki cara yang lebih singkat untuk menulis fungsi yang disebut **fungsi panah**. Mereka menggunakan `=>` (yang terlihat seperti panah – mengerti?) dan sangat populer di kalangan pengembang.

Fungsi panah memungkinkan Anda melewati kata kunci `function` dan menulis kode yang lebih ringkas.

Berikut contoh timer kita menggunakan fungsi panah:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

Tanda `()` adalah tempat parameter akan masuk (kosong dalam kasus ini), kemudian muncul panah `=>`, dan akhirnya tubuh fungsi dalam kurung kurawal. Ini memberikan fungsi yang sama dengan sintaks yang lebih ringkas.

### Kapan Menggunakan Setiap Strategi

Kapan Anda harus menggunakan setiap pendekatan? Panduan praktis: jika Anda akan menggunakan fungsi beberapa kali, beri nama dan definisikan secara terpisah. Jika hanya untuk satu penggunaan spesifik, pertimbangkan fungsi anonim. Baik fungsi panah maupun sintaks tradisional adalah pilihan yang valid, meskipun fungsi panah sangat umum dalam basis kode JavaScript modern.

---



## 🚀 Tantangan

Bisakah Anda menjelaskan dalam satu kalimat perbedaan antara fungsi dan metode? Coba!

## Tantangan Agen GitHub Copilot 🚀

Gunakan mode Agen untuk menyelesaikan tantangan berikut:

**Deskripsi:** Buat pustaka utilitas fungsi matematika yang menunjukkan berbagai konsep fungsi yang dibahas dalam pelajaran ini, termasuk parameter, nilai default, nilai kembali, dan fungsi panah.

**Prompt:** Buat file JavaScript bernama `mathUtils.js` yang berisi fungsi-fungsi berikut:
1. Fungsi `add` yang menerima dua parameter dan mengembalikan jumlahnya
2. Fungsi `multiply` dengan nilai parameter default (parameter kedua default ke 1)
3. Fungsi panah `square` yang menerima angka dan mengembalikan kuadratnya
4. Fungsi `calculate` yang menerima fungsi lain sebagai parameter dan dua angka, lalu menerapkan fungsi tersebut pada angka-angka tersebut
5. Demonstrasikan pemanggilan setiap fungsi dengan kasus uji yang sesuai

Pelajari lebih lanjut tentang [mode agen](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## Kuis Setelah Pelajaran
[Kuis setelah pelajaran](https://ff-quizzes.netlify.app)

## Tinjauan & Studi Mandiri

Ada baiknya [membaca lebih lanjut tentang fungsi panah](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), karena mereka semakin banyak digunakan dalam basis kode. Latih menulis fungsi, lalu tulis ulang dengan sintaks ini.

## Tugas

[Seru dengan Fungsi](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang keliru yang timbul dari penggunaan terjemahan ini.