<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ec43b53e8e015cdabfd3ad877b3c28e5",
  "translation_date": "2025-10-24T14:21:07+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "ms"
}
-->
# Asas JavaScript: Kaedah dan Fungsi

![Asas JavaScript - Fungsi](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.ms.png)
> Sketchnote oleh [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuiz Pra-Kuliah
[Kuiz pra-kuliah](https://ff-quizzes.netlify.app)

Menulis kod yang sama berulang kali adalah salah satu kekecewaan yang paling biasa dalam pengaturcaraan. Fungsi menyelesaikan masalah ini dengan membolehkan anda membungkus kod ke dalam blok yang boleh digunakan semula. Fikirkan fungsi seperti bahagian standard yang menjadikan barisan pemasangan Henry Ford revolusioner – setelah anda mencipta komponen yang boleh dipercayai, anda boleh menggunakannya di mana sahaja diperlukan tanpa perlu membina semula dari awal.

Fungsi membolehkan anda membungkus bahagian kod supaya anda boleh menggunakannya semula di seluruh program anda. Daripada menyalin dan menampal logik yang sama di mana-mana, anda boleh mencipta fungsi sekali dan memanggilnya apabila diperlukan. Pendekatan ini menjadikan kod anda teratur dan memudahkan kemas kini.

Dalam pelajaran ini, anda akan belajar cara mencipta fungsi anda sendiri, menghantar maklumat kepadanya, dan mendapatkan hasil yang berguna kembali. Anda akan menemui perbezaan antara fungsi dan kaedah, mempelajari pendekatan sintaks moden, dan melihat bagaimana fungsi boleh berfungsi dengan fungsi lain. Kami akan membina konsep ini langkah demi langkah.

[![Kaedah dan Fungsi](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Kaedah dan Fungsi")

> 🎥 Klik imej di atas untuk video tentang kaedah dan fungsi.

> Anda boleh mengambil pelajaran ini di [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Fungsi

Fungsi ialah blok kod yang berdiri sendiri yang melaksanakan tugas tertentu. Ia merangkumi logik yang boleh anda laksanakan apabila diperlukan.

Daripada menulis kod yang sama berulang kali di seluruh program anda, anda boleh membungkusnya dalam fungsi dan memanggil fungsi itu apabila anda memerlukannya. Pendekatan ini menjadikan kod anda bersih dan memudahkan kemas kini. Pertimbangkan cabaran penyelenggaraan jika anda perlu menukar logik yang tersebar di 20 lokasi berbeza dalam pangkalan kod anda.

Menamakan fungsi anda dengan deskriptif adalah penting. Fungsi yang dinamakan dengan baik menyampaikan tujuannya dengan jelas – apabila anda melihat `cancelTimer()`, anda segera memahami apa yang dilakukannya, sama seperti butang yang dilabel dengan jelas memberitahu anda dengan tepat apa yang akan berlaku apabila anda mengkliknya.

## Mencipta dan memanggil fungsi

Mari kita lihat cara mencipta fungsi. Sintaksnya mengikut corak yang konsisten:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Mari kita pecahkan:
- Kata kunci `function` memberitahu JavaScript "Hei, saya sedang mencipta fungsi!"
- `nameOfFunction` ialah tempat anda memberikan nama deskriptif kepada fungsi anda
- Kurungan `()` ialah tempat anda boleh menambah parameter (kita akan sampai ke situ sebentar lagi)
- Kurungan keriting `{}` mengandungi kod sebenar yang berjalan apabila anda memanggil fungsi

Mari kita cipta fungsi ucapan ringkas untuk melihat ini dalam tindakan:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Fungsi ini mencetak "Hello, world!" ke konsol. Setelah anda mendefinisikannya, anda boleh menggunakannya sebanyak yang diperlukan.

Untuk melaksanakan (atau "memanggil") fungsi anda, tulis namanya diikuti dengan kurungan. JavaScript membolehkan anda mentakrifkan fungsi anda sebelum atau selepas anda memanggilnya – enjin JavaScript akan mengendalikan susunan pelaksanaan.

```javascript
// calling our function
displayGreeting();
```

Apabila anda menjalankan baris ini, ia melaksanakan semua kod dalam fungsi `displayGreeting` anda, memaparkan "Hello, world!" dalam konsol pelayar anda. Anda boleh memanggil fungsi ini berulang kali.

> **Nota:** Anda telah menggunakan **kaedah** sepanjang pelajaran ini. `console.log()` ialah kaedah – pada dasarnya fungsi yang tergolong dalam objek `console`. Perbezaan utama ialah kaedah dilampirkan pada objek, manakala fungsi berdiri sendiri. Ramai pembangun menggunakan istilah ini secara bergantian dalam perbualan santai.

### Amalan terbaik fungsi

Berikut adalah beberapa petua untuk membantu anda menulis fungsi yang hebat:

- Berikan nama yang jelas dan deskriptif kepada fungsi anda – diri anda di masa depan akan berterima kasih!
- Gunakan **camelCasing** untuk nama berbilang perkataan (seperti `calculateTotal` dan bukannya `calculate_total`)
- Pastikan setiap fungsi memberi tumpuan kepada melakukan satu perkara dengan baik

## Menghantar maklumat kepada fungsi

Fungsi `displayGreeting` kita terhad – ia hanya boleh memaparkan "Hello, world!" untuk semua orang. Parameter membolehkan kita menjadikan fungsi lebih fleksibel dan berguna.

**Parameter** bertindak seperti tempat letak di mana anda boleh memasukkan nilai yang berbeza setiap kali anda menggunakan fungsi. Dengan cara ini, fungsi yang sama boleh berfungsi dengan maklumat yang berbeza pada setiap panggilan.

Anda menyenaraikan parameter di dalam kurungan apabila anda mentakrifkan fungsi anda, memisahkan parameter berbilang dengan koma:

```javascript
function name(param, param2, param3) {

}
```

Setiap parameter bertindak seperti tempat letak – apabila seseorang memanggil fungsi anda, mereka akan memberikan nilai sebenar yang dimasukkan ke dalam tempat ini.

Mari kita kemas kini fungsi ucapan kita untuk menerima nama seseorang:

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Perhatikan bagaimana kita menggunakan tanda belakang (`` ` ``) dan `${}` untuk memasukkan nama terus ke dalam mesej kita – ini dipanggil literal templat, dan ia adalah cara yang sangat berguna untuk membina rentetan dengan pembolehubah yang dicampur.

Sekarang apabila kita memanggil fungsi kita, kita boleh menghantar sebarang nama:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

JavaScript mengambil rentetan `'Christopher'`, memberikannya kepada parameter `name`, dan mencipta mesej peribadi "Hello, Christopher!"

## Nilai lalai

Bagaimana jika kita mahu menjadikan beberapa parameter pilihan? Di sinilah nilai lalai berguna!

Katakan kita mahu orang ramai dapat menyesuaikan perkataan ucapan, tetapi jika mereka tidak menentukan satu, kita hanya akan menggunakan "Hello" sebagai sandaran. Anda boleh menyediakan nilai lalai dengan menggunakan tanda sama, sama seperti menetapkan pembolehubah:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Di sini, `name` masih diperlukan, tetapi `salutation` mempunyai nilai sandaran `'Hello'` jika tiada siapa yang memberikan ucapan yang berbeza.

Sekarang kita boleh memanggil fungsi ini dengan dua cara berbeza:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

Dalam panggilan pertama, JavaScript menggunakan lalai "Hello" kerana kita tidak menentukan ucapan. Dalam panggilan kedua, ia menggunakan "Hi" tersuai kita. Fleksibiliti ini menjadikan fungsi boleh disesuaikan dengan senario yang berbeza.

## Nilai pulangan

Fungsi kita setakat ini hanya mencetak mesej ke konsol, tetapi bagaimana jika anda mahu fungsi mengira sesuatu dan memberikan hasilnya kembali kepada anda?

Di sinilah **nilai pulangan** masuk. Daripada hanya memaparkan sesuatu, fungsi boleh menyerahkan nilai kepada anda yang boleh anda simpan dalam pembolehubah atau gunakan di bahagian lain kod anda.

Untuk menghantar nilai kembali, anda menggunakan kata kunci `return` diikuti dengan apa sahaja yang anda mahu kembalikan:

```javascript
return myVariable;
```

Ini sesuatu yang penting: apabila fungsi mencapai pernyataan `return`, ia serta-merta berhenti berjalan dan menghantar nilai itu kembali kepada sesiapa yang memanggilnya.

Mari kita ubah suai fungsi ucapan kita untuk mengembalikan mesej dan bukannya mencetaknya:

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Sekarang, bukannya mencetak ucapan, fungsi ini mencipta mesej dan menyerahkannya kembali kepada kita.

Untuk menggunakan nilai yang dikembalikan, kita boleh menyimpannya dalam pembolehubah seperti mana-mana nilai lain:

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

Sekarang `greetingMessage` mengandungi "Hello, Christopher" dan kita boleh menggunakannya di mana-mana dalam kod kita – untuk memaparkannya di laman web, memasukkannya ke dalam e-mel, atau menghantarnya ke fungsi lain.

## Fungsi sebagai parameter untuk fungsi

Fungsi boleh dihantar sebagai parameter kepada fungsi lain. Walaupun konsep ini mungkin kelihatan kompleks pada mulanya, ia adalah ciri yang kuat yang membolehkan corak pengaturcaraan yang fleksibel.

Corak ini sangat biasa apabila anda ingin mengatakan "apabila sesuatu berlaku, lakukan perkara lain ini." Sebagai contoh, "apabila pemasa tamat, jalankan kod ini" atau "apabila pengguna mengklik butang, panggil fungsi ini."

Mari kita lihat `setTimeout`, yang merupakan fungsi terbina dalam yang menunggu masa tertentu dan kemudian menjalankan beberapa kod. Kita perlu memberitahu apa kod yang hendak dijalankan – kes penggunaan yang sempurna untuk menghantar fungsi!

Cuba kod ini – selepas 3 saat, anda akan melihat mesej:

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

Perhatikan bagaimana kita menghantar `displayDone` (tanpa kurungan) kepada `setTimeout`. Kita tidak memanggil fungsi itu sendiri – kita menyerahkannya kepada `setTimeout` dan berkata "panggil ini dalam 3 saat."

### Fungsi tanpa nama

Kadang-kadang anda memerlukan fungsi untuk satu perkara sahaja dan tidak mahu memberikannya nama. Fikirkan – jika anda hanya menggunakan fungsi sekali, mengapa menyemakkan kod anda dengan nama tambahan?

JavaScript membolehkan anda mencipta **fungsi tanpa nama** – fungsi tanpa nama yang boleh anda tentukan di mana anda memerlukannya.

Berikut adalah cara kita boleh menulis semula contoh pemasa kita menggunakan fungsi tanpa nama:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Ini mencapai hasil yang sama, tetapi fungsi itu ditakrifkan terus dalam panggilan `setTimeout`, menghapuskan keperluan untuk deklarasi fungsi yang berasingan.

### Fungsi anak panah

JavaScript moden mempunyai cara yang lebih pendek untuk menulis fungsi yang dipanggil **fungsi anak panah**. Ia menggunakan `=>` (yang kelihatan seperti anak panah – faham?) dan sangat popular dalam kalangan pembangun.

Fungsi anak panah membolehkan anda melangkau kata kunci `function` dan menulis kod yang lebih ringkas.

Berikut adalah contoh pemasa kita menggunakan fungsi anak panah:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

`()` ialah tempat parameter akan pergi (kosong dalam kes ini), kemudian datang anak panah `=>`, dan akhirnya badan fungsi dalam kurungan keriting. Ini memberikan fungsi yang sama dengan sintaks yang lebih ringkas.

### Bila hendak menggunakan setiap strategi

Bilakah anda harus menggunakan setiap pendekatan? Panduan praktikal: jika anda akan menggunakan fungsi itu beberapa kali, berikan nama dan tentukan secara berasingan. Jika ia untuk satu kegunaan tertentu, pertimbangkan fungsi tanpa nama. Kedua-dua fungsi anak panah dan sintaks tradisional adalah pilihan yang sah, walaupun fungsi anak panah adalah lazim dalam pangkalan kod JavaScript moden.

---



## 🚀 Cabaran

Bolehkah anda menerangkan dalam satu ayat perbezaan antara fungsi dan kaedah? Cuba!

## Cabaran Ejen GitHub Copilot 🚀

Gunakan mod Ejen untuk melengkapkan cabaran berikut:

**Penerangan:** Cipta perpustakaan utiliti fungsi matematik yang menunjukkan pelbagai konsep fungsi yang dibincangkan dalam pelajaran ini, termasuk parameter, nilai lalai, nilai pulangan, dan fungsi anak panah.

**Arahan:** Cipta fail JavaScript yang dipanggil `mathUtils.js` yang mengandungi fungsi berikut:
1. Fungsi `add` yang mengambil dua parameter dan mengembalikan jumlahnya
2. Fungsi `multiply` dengan nilai parameter lalai (parameter kedua lalai kepada 1)
3. Fungsi anak panah `square` yang mengambil nombor dan mengembalikan kuadratnya
4. Fungsi `calculate` yang menerima fungsi lain sebagai parameter dan dua nombor, kemudian menggunakan fungsi itu pada nombor tersebut
5. Tunjukkan panggilan setiap fungsi dengan kes ujian yang sesuai

Ketahui lebih lanjut tentang [mod ejen](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## Kuiz Pasca-Kuliah
[Kuiz pasca-kuliah](https://ff-quizzes.netlify.app)

## Ulasan & Kajian Kendiri

Ia berbaloi [membaca lebih lanjut tentang fungsi anak panah](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), kerana ia semakin banyak digunakan dalam pangkalan kod. Latihlah menulis fungsi, dan kemudian tulis semula dengan sintaks ini.

## Tugasan

[Keseronokan dengan Fungsi](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.