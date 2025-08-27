<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b4612bbb9ace984f374fcc80e3e035ad",
  "translation_date": "2025-08-27T22:46:12+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "ms"
}
-->
# Asas JavaScript: Kaedah dan Fungsi

![Asas JavaScript - Fungsi](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.ms.png)
> Sketchnote oleh [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuiz Pra-Kuliah
[Kuiz pra-kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/9)

Apabila kita memikirkan tentang menulis kod, kita sentiasa mahu memastikan kod kita mudah dibaca. Walaupun ini mungkin kedengaran bertentangan, kod dibaca lebih banyak kali daripada ia ditulis. Salah satu alat utama dalam kotak peralatan pembangun untuk memastikan kod yang boleh diselenggara ialah **fungsi**.

[![Kaedah dan Fungsi](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Kaedah dan Fungsi")

> 🎥 Klik imej di atas untuk menonton video tentang kaedah dan fungsi.

> Anda boleh mengikuti pelajaran ini di [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Fungsi

Secara asasnya, fungsi ialah satu blok kod yang boleh kita jalankan apabila diperlukan. Ini sangat sesuai untuk situasi di mana kita perlu melakukan tugas yang sama berulang kali; daripada menduplikasi logik di pelbagai lokasi (yang akan menyukarkan kemas kini apabila tiba masanya), kita boleh memusatkannya di satu lokasi, dan memanggilnya apabila kita memerlukan operasi itu dilakukan - malah anda boleh memanggil fungsi dari fungsi lain!

Sama pentingnya ialah keupayaan untuk menamakan fungsi. Walaupun ini mungkin kelihatan remeh, nama memberikan cara pantas untuk mendokumentasikan satu bahagian kod. Anda boleh menganggapnya seperti label pada butang. Jika saya klik pada butang yang bertulis "Batalkan pemasa", saya tahu ia akan menghentikan jam daripada berjalan.

## Mencipta dan memanggil fungsi

Sintaks untuk fungsi kelihatan seperti berikut:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Jika saya ingin mencipta fungsi untuk memaparkan ucapan, ia mungkin kelihatan seperti ini:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Setiap kali kita ingin memanggil (atau melaksanakan) fungsi kita, kita gunakan nama fungsi diikuti dengan `()`. Perlu diingat bahawa fungsi kita boleh ditakrifkan sebelum atau selepas kita memutuskan untuk memanggilnya; pengkompil JavaScript akan mencarinya untuk anda.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** Terdapat satu jenis fungsi khas yang dikenali sebagai **kaedah**, yang anda sudah gunakan! Malah, kita telah melihat ini dalam demo di atas apabila kita menggunakan `console.log`. Apa yang membezakan kaedah daripada fungsi ialah kaedah dilampirkan pada objek (`console` dalam contoh kita), manakala fungsi adalah bebas. Anda akan mendengar ramai pembangun menggunakan istilah ini secara bergantian.

### Amalan terbaik fungsi

Terdapat beberapa amalan terbaik yang perlu diingat semasa mencipta fungsi:

- Seperti biasa, gunakan nama yang deskriptif supaya anda tahu apa yang fungsi itu akan lakukan
- Gunakan **camelCasing** untuk menggabungkan perkataan
- Pastikan fungsi anda tertumpu pada tugas tertentu

## Menyampaikan maklumat kepada fungsi

Untuk menjadikan fungsi lebih boleh digunakan semula, anda sering mahu menyampaikan maklumat kepadanya. Jika kita mempertimbangkan contoh `displayGreeting` kita di atas, ia hanya akan memaparkan **Hello, world!**. Bukan fungsi yang paling berguna yang boleh dicipta. Jika kita mahu menjadikannya lebih fleksibel, seperti membenarkan seseorang menentukan nama orang yang ingin disapa, kita boleh menambah **parameter**. Parameter (kadang-kadang juga dipanggil **argumen**) ialah maklumat tambahan yang dihantar kepada fungsi.

Parameter disenaraikan dalam bahagian definisi dalam kurungan dan dipisahkan dengan koma seperti berikut:

```javascript
function name(param, param2, param3) {

}
```

Kita boleh mengemas kini `displayGreeting` kita untuk menerima nama dan memaparkannya.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Apabila kita ingin memanggil fungsi kita dan menyampaikan parameter, kita tentukan ia dalam kurungan.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Nilai lalai

Kita boleh menjadikan fungsi kita lebih fleksibel dengan menambah lebih banyak parameter. Tetapi bagaimana jika kita tidak mahu setiap nilai perlu ditentukan? Mengikut contoh ucapan kita, kita boleh meninggalkan nama sebagai wajib (kita perlu tahu siapa yang kita sapa), tetapi kita mahu membenarkan ucapan itu disesuaikan jika dikehendaki. Jika seseorang tidak mahu menyesuaikannya, kita menyediakan nilai lalai sebagai gantinya. Untuk menyediakan nilai lalai kepada parameter, kita menetapkannya dengan cara yang sama seperti kita menetapkan nilai untuk pembolehubah - `parameterName = 'defaultValue'`. Untuk melihat contoh penuh:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Apabila kita memanggil fungsi, kita boleh memutuskan sama ada kita mahu menetapkan nilai untuk `salutation`.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Nilai pulangan

Sehingga kini, fungsi yang kita bina akan sentiasa menghasilkan output ke [console](https://developer.mozilla.org/docs/Web/API/console). Kadang-kadang ini boleh menjadi apa yang kita cari, terutamanya apabila kita mencipta fungsi yang akan memanggil perkhidmatan lain. Tetapi bagaimana jika saya mahu mencipta fungsi pembantu untuk melakukan pengiraan dan memberikan nilai kembali supaya saya boleh menggunakannya di tempat lain?

Kita boleh melakukannya dengan menggunakan **nilai pulangan**. Nilai pulangan dikembalikan oleh fungsi, dan boleh disimpan dalam pembolehubah sama seperti kita boleh menyimpan nilai literal seperti rentetan atau nombor.

Jika fungsi mengembalikan sesuatu, maka kata kunci `return` digunakan. Kata kunci `return` mengharapkan nilai atau rujukan kepada apa yang dikembalikan seperti berikut:

```javascript
return myVariable;
```  

Kita boleh mencipta fungsi untuk mencipta mesej ucapan dan mengembalikan nilai itu kepada pemanggil.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Apabila memanggil fungsi ini, kita akan menyimpan nilai dalam pembolehubah. Ini sama seperti cara kita menetapkan pembolehubah kepada nilai statik (seperti `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Fungsi sebagai parameter untuk fungsi

Apabila anda maju dalam kerjaya pengaturcaraan anda, anda akan menemui fungsi yang menerima fungsi sebagai parameter. Helah menarik ini biasanya digunakan apabila kita tidak tahu bila sesuatu akan berlaku atau selesai, tetapi kita tahu kita perlu melakukan operasi sebagai tindak balas.

Sebagai contoh, pertimbangkan [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), yang memulakan pemasa dan akan melaksanakan kod apabila ia selesai. Kita perlu memberitahu apa kod yang kita mahu laksanakan. Kedengaran seperti tugas yang sempurna untuk fungsi!

Jika anda menjalankan kod di bawah, selepas 3 saat anda akan melihat mesej **3 saat telah berlalu**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Fungsi tanpa nama

Mari kita lihat semula apa yang telah kita bina. Kita mencipta fungsi dengan nama yang akan digunakan sekali sahaja. Apabila aplikasi kita menjadi lebih kompleks, kita boleh melihat diri kita mencipta banyak fungsi yang hanya akan dipanggil sekali. Ini tidak ideal. Ternyata, kita tidak selalu perlu memberikan nama!

Apabila kita menyampaikan fungsi sebagai parameter, kita boleh mengelakkan daripada menciptanya terlebih dahulu dan sebaliknya membinanya sebagai sebahagian daripada parameter. Kita menggunakan kata kunci `function` yang sama, tetapi sebaliknya kita membinanya sebagai parameter.

Mari kita tulis semula kod di atas untuk menggunakan fungsi tanpa nama:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Jika anda menjalankan kod baru kita, anda akan perasan kita mendapat hasil yang sama. Kita telah mencipta fungsi, tetapi tidak perlu memberikannya nama!

### Fungsi anak panah tebal

Satu pintasan yang biasa dalam banyak bahasa pengaturcaraan (termasuk JavaScript) ialah keupayaan untuk menggunakan apa yang dipanggil **arrow** atau **fat arrow** function. Ia menggunakan penunjuk khas `=>`, yang kelihatan seperti anak panah - maka namanya! Dengan menggunakan `=>`, kita boleh melangkau kata kunci `function`.

Mari kita tulis semula kod kita sekali lagi untuk menggunakan fungsi anak panah tebal:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Bila hendak menggunakan setiap strategi

Anda kini telah melihat kita mempunyai tiga cara untuk menyampaikan fungsi sebagai parameter dan mungkin tertanya-tanya bila hendak menggunakan setiap satu. Jika anda tahu anda akan menggunakan fungsi lebih daripada sekali, cipta ia seperti biasa. Jika anda akan menggunakannya hanya untuk satu lokasi, secara amnya lebih baik menggunakan fungsi tanpa nama. Sama ada anda menggunakan fungsi anak panah tebal atau sintaks `function` yang lebih tradisional terpulang kepada anda, tetapi anda akan perasan kebanyakan pembangun moden lebih suka `=>`.

---

## 🚀 Cabaran

Bolehkah anda menjelaskan dalam satu ayat perbezaan antara fungsi dan kaedah? Cuba!

## Kuiz Pasca-Kuliah
[Kuiz pasca-kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/10)

## Ulasan & Kajian Kendiri

Ia berbaloi untuk [membaca lebih lanjut tentang fungsi anak panah](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), kerana ia semakin banyak digunakan dalam pangkalan kod. Latih diri anda menulis fungsi, dan kemudian tulis semula dengan sintaks ini.

## Tugasan

[Keseronokan dengan Fungsi](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.