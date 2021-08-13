# Asas JavaScript: Kaedah dan Fungsi

![Asas JavaScript - Fungsi](/sketchnotes/webdev101-js-functions.png)
> Sketchnote karya [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuiz Pra Kuliah
[Kuiz Pra Kuliah](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/9)

Apabila kita berfikir tentang menulis kod, kita selalu ingin memastikan kod kita dapat dibaca. Walaupun ini terdengar berlawanan dengan intuisi, kod dibaca lebih banyak kali daripada yang ditulis. Satu alat inti dalam kotak alat pemaju untuk memastikan kod yang dapat dikendalikan adalah **fungsi**.

[![Kaedah dan Fungsi](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Methods and Functions")

> Klik gambar di atas untuk video mengenai kaedah dan fungsi.

## Fungsi

Pada intinya, fungsi adalah sekumpulan kod yang dapat kita laksanakan berdasarkan permintaan. Ini sesuai untuk senario di mana kita perlu melakukan tugas yang sama berkali-kali; daripada menggandakan logik di beberapa lokasi (yang akan menjadikannya sukar untuk dikemas kini apabila tiba masanya), kita dapat memusatkannya di satu lokasi, dan memanggilnya setiap kali kita memerlukan operasi yang dilakukan - anda bahkan dapat memanggil fungsi dari fungsi lain !.

Sama pentingnya ialah kemampuan menamakan fungsi. Walaupun ini kelihatan remeh, namanya memberikan cara cepat untuk mendokumentasikan bahagian kod. Anda boleh menganggap ini sebagai label pada butang. Sekiranya saya mengklik pada butang yang berbunyi "Batalkan pemasa", saya tahu ia akan berhenti menjalankan jam.

## Membuat dan memanggil fungsi

Sintaks untuk fungsi kelihatan seperti berikut:

```javascript
function nameOfFunction() { // definisi fungsi
 // definisi fungsi dan badannya
}
```

Sekiranya saya ingin membuat fungsi untuk memaparkan ucapan, mungkin seperti ini:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Setiap kali kita mahu memanggil (atau memanggil) fungsi kita, kita menggunakan nama fungsi diikuti oleh `()`. Perlu diperhatikan bahawa fungsi kita dapat ditentukan sebelum atau selepas kita memutuskan untuk menyebutnya; penyusun JavaScript akan mencarinya untuk anda.

```javascript
// memanggil fungsi
displayGreeting();
```

> **CATATAN:** Terdapat jenis fungsi khas yang dikenali sebagai
**kaedah**, yang sudah anda gunakan! Sebenarnya, kami melihat ini dalam demo kami di atas semasa kami menggunakan `console.log`. Apa yang membuat kaedah berbeza dari fungsi adalah metode yang dilampirkan ke objek (`console` dalam contoh kami), sementara fungsi bebas mengambang. Anda akan mendengar banyak pembangun menggunakan istilah ini secara bergantian.

### Amalan terbaik untuk fungsi

Terdapat sebilangan kecil amalan terbaik yang perlu diingat semasa membuat fungsi

- Seperti biasa, gunakan nama deskriptif sehingga anda tahu fungsi apa yang akan dilakukan
- Gunakan **camelCasing** untuk menggabungkan perkataan
- Pastikan fungsi anda tertumpu pada tugas tertentu

## Menyampaikan maklumat ke fungsi

Untuk menjadikan fungsi lebih boleh digunakan semula, anda selalunya ingin menyampaikan maklumat ke dalamnya. Sekiranya kita mempertimbangkan contoh `displayGreeting` di atas, ia hanya akan memaparkan **Hello, world!**. Bukan fungsi paling berguna yang dapat dibuat oleh seseorang. Sekiranya kita ingin menjadikannya sedikit lebih fleksibel, seperti membiarkan seseorang menentukan nama orang yang disambut, kita dapat menambahkan **parameter**. Parameter (kadang-kadang disebut **argumen**), adalah maklumat tambahan yang dikirim ke fungsi.

Parameter disenaraikan di bahagian definisi dalam kurungan dan dipisahkan koma seperti:

```javascript
function name(param, param2, param3) {

}
```

Kami boleh mengemas kini `displayGreeting` kami untuk menerima nama dan memaparkannya.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Apabila kita mahu memanggil fungsi kita dan meneruskan parameter, kita menentukannya dalam kurungan.

```javascript
displayGreeting('Christopher');
// memapar "Hello, Christopher!" apabila memproseskannya
```

## Nilai lalai

Kita dapat menjadikan fungsi kita lebih fleksibel dengan menambahkan lebih banyak parameter. Tetapi bagaimana jika kita tidak mahu setiap nilai ditentukan? Sesuai dengan contoh ucapan kami, kami dapat meninggalkan nama seperti yang diperlukan (kami harus tahu siapa yang kami sapa), tetapi kami ingin membiarkan ucapan itu disesuaikan sesuai keinginan. Sekiranya seseorang tidak mahu menyesuaikannya, kami memberikan nilai lalai. Untuk memberikan nilai lalai ke parameter, kami menetapkannya dengan cara yang sama dengan menetapkan nilai untuk pemboleh ubah - `parameterName = 'defaultValue' `. Untuk melihat contoh penuh:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Apabila kita memanggil fungsi tersebut, kita kemudian dapat memutuskan apakah kita ingin menetapkan nilai untuk `salam `.

```javascript
displayGreeting('Christopher');
// memapar "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// memapar "Hi, Christopher"
```

## Nilai Pulangan

Sehingga kini fungsi yang kami bina akan selalu dikeluarkan ke [console](https://developer.mozilla.org/docs/Web/API/console). Kadang kala inilah yang sebenarnya kita cari, terutamanya ketika kita membuat fungsi yang akan memanggil perkhidmatan lain. Tetapi bagaimana jika saya ingin membuat fungsi pembantu untuk melakukan pengiraan dan memberikan nilai kembali supaya saya dapat menggunakannya di tempat lain?

Kita boleh melakukan ini dengan menggunakan **nilai kembali**. Nilai kembali akan dikembalikan oleh fungsi, dan dapat disimpan dalam pemboleh ubah sama seperti kita dapat menyimpan nilai literal seperti rentetan atau angka.

Sekiranya fungsi mengembalikan sesuatu maka kata kunci `return` digunakan. Kata kunci `return` menjangkakan nilai atau rujukan tentang apa yang dikembalikan seperti itu:

```javascript
return myVariable;
```  

Kami dapat membuat fungsi untuk membuat pesan ucapan dan mengembalikan nilainya kembali ke pemanggil

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Apabila memanggil fungsi ini, kita akan menyimpan nilainya dalam pemboleh ubah. Ini sama dengan cara kita menetapkan pemboleh ubah ke nilai statik (seperti `const name = 'Christopher' `).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Berfungsi sebagai parameter untuk fungsi 

Semasa anda maju dalam kerjaya pengaturcaraan anda, anda akan menemui fungsi yang menerima fungsi sebagai parameter. Trik rapi ini biasanya digunakan ketika kita tidak tahu kapan sesuatu akan terjadi atau selesai, tetapi kita tahu kita perlu melakukan operasi sebagai tindak balas.

Sebagai contoh, pertimbangkan [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), yang memulakan pemasa dan akan melaksanakan kod apabila selesai. Kita perlu memberitahu apa kod yang ingin kita laksanakan. Kedengarannya pekerjaan yang sempurna untuk fungsi!

Sekiranya anda menjalankan kod di bawah ini, setelah 3 saat anda akan melihat mesej **3 saat telah berlalu**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Fungsi tanpa nama

Mari kita lihat lagi apa yang telah kita bina. Kami membuat fungsi dengan nama yang akan digunakan sekali sahaja. Oleh kerana aplikasi kita semakin rumit, kita dapat melihat diri kita membuat banyak fungsi yang hanya akan dipanggil sekali. Ini tidak sesuai. Ternyata, kita tidak selalu perlu memberikan nama!

Ketika kita meneruskan fungsi sebagai parameter, kita dapat memotong membuatnya terlebih dahulu dan sebaliknya membangunnya sebagai bagian dari parameter. Kami menggunakan kata kunci `function` yang sama, tetapi sebaliknya kami membuatnya sebagai parameter.

Marilah tulis semula kod di atas untuk menggunakan fungsi tanpa nama:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Sekiranya anda menjalankan kod baru kami, anda akan melihat bahawa kami mendapat hasil yang sama. Kami telah membuat fungsi, tetapi tidak perlu memberikan nama!

### Fungsi panah gemuk

Salah satu jalan pintas yang biasa digunakan dalam banyak bahasa pengaturcaraan (termasuk JavaScript) adalah kemampuan untuk menggunakan apa yang disebut fungsi **panah** atau **panah lemak**. Ia menggunakan penunjuk khas `=>`, yang kelihatan seperti anak panah - dengan demikian namanya! Dengan menggunakan `=>`, kita dapat melangkau kata kunci `function`.

Mari tulis semula kod kami sekali lagi untuk menggunakan fungsi anak panah lemak:

```javascript
setTimeout(() => {
  console.log('3 saat telah berlalu');
}, 3000);
```

### Bila menggunakan strategi masing-masing

Anda sekarang telah melihat kita mempunyai tiga cara untuk meneruskan fungsi sebagai parameter dan mungkin tertanya-tanya kapan menggunakannya. Sekiranya anda tahu anda akan menggunakan fungsi lebih dari sekali, buat seperti biasa. Sekiranya anda menggunakannya hanya untuk satu lokasi, biasanya lebih baik menggunakan fungsi tanpa nama. Sama ada anda menggunakan fungsi anak panah lemak atau sintaks `function` yang lebih tradisional bergantung kepada anda, tetapi anda akan perhatikan bahawa kebanyakan pembangun moden lebih suka `=>`.

--- 

## 🚀 Cabaran

Bolehkah anda menyatakan dalam satu ayat perbezaan antara fungsi dan kaedah? Mencubanya!

## Kuiz Pasca Kuliah
[Kuiz Pasca Kuliah](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/10)

## Mengkaji & Belajar Sendiri 

Perlu [membaca sedikit lebih banyak mengenai fungsi anak panah](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), kerana ia semakin banyak digunakan dalam pangkalan kod. Berlatih menulis fungsi, dan kemudian menulis semula dengan sintaks ini.

## Tugasan

[Seronok dengan Fungsi](assignment.ms.md)