# Bina Aplikasi Perbankan Bahagian 2: Bina Log Masuk dan Borang Pendaftaran

# Kuiz Pra Kuliah

[Kuiz Pra Kuliah](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/43)

### Pengenalan

Di hampir semua aplikasi web moden, anda boleh membuat akaun untuk mempunyai ruang peribadi anda sendiri. Oleh kerana banyak pengguna dapat mengakses aplikasi web pada masa yang sama, anda memerlukan mekanisme untuk menyimpan data peribadi setiap pengguna secara berasingan dan memilih maklumat yang akan ditampilkan. Kami tidak akan membahas bagaimana menguruskan [identiti pengguna dengan selamat](https://en.wikipedia.org/wiki/Authentication) kerana ia adalah topik yang luas sendiri, tetapi kami akan memastikan setiap pengguna dapat membuatnya (atau lebih) akaun bank di aplikasi kami.

Di bahagian ini kami akan menggunakan borang HTML untuk menambahkan log masuk dan pendaftaran ke aplikasi web kami. Kami akan melihat cara mengirim data ke API pelayan secara terprogram, dan akhirnya bagaimana menentukan peraturan pengesahan asas untuk input pengguna.

### Prasyarat

Anda perlu melengkapkan [templat HTML dan perutean](../../1-template-rute/README.md) aplikasi web untuk pelajaran ini. Anda juga perlu memasang [Node.js](https://nodejs.org) dan [jalankan API pelayan](../../api/README.md) secara tempatan supaya anda dapat menghantar data untuk membuat akaun.

Anda boleh menguji bahawa pelayan berjalan dengan betul dengan menjalankan perintah ini di terminal:

```sh
curl http://localhost:5000/api
# -> harus mengembalikan "Bank API v1.0.0" sebagai hasilnya
```

---

## Bentuk dan kawalan

Elemen `<form>` merangkumi bahagian dokumen HTML di mana pengguna dapat memasukkan dan menyerahkan data dengan kawalan interaktif. Terdapat pelbagai jenis kawalan antara muka pengguna (UI) yang dapat digunakan dalam bentuk, yang paling umum adalah elemen `<input>` dan elemen `<button>`.

Terdapat banyak [jenis yang berbeza](https://developer.mozilla.org/docs/Web/HTML/Element/input) dari `<input>`, misalnya untuk membuat bidang di mana pengguna boleh memasukkan nama penggunanya yang boleh anda gunakan:

```html
<input id="username" name="username" type="text">
```

Atribut `name` akan digunakan sebagai nama harta ketika data borang akan dihantar. Atribut `id` digunakan untuk mengaitkan` <label>` dengan kawalan bentuk.

> Lihat keseluruhan senarai [`<input>` types](https://developer.mozilla.org/docs/Web/HTML/Element/input) dan [kawalan bentuk lain](https://developer.mozilla.org/docs/Learn/Forms/Other_form_controls) untuk mendapatkan idea tentang semua elemen UI asli yang boleh anda gunakan semasa membina UI anda.

✅ Perhatikan bahawa `<input>` adalah [elemen kosong](https://developer.mozilla.org/docs/Glossary/Empty_element) di mana anda seharusnya *tidak* menambahkan tag penutup yang sepadan. Anda bagaimanapun boleh menggunakan notasi `<input/>` tutup sendiri, tetapi tidak diperlukan.

Elemen `<button>` dalam bentuk agak istimewa. Sekiranya anda tidak menentukan atribut `type`, ia akan secara automatik mengirimkan data borang ke pelayan ketika ditekan. Berikut adalah nilai `type` yang mungkin:

- `submit`: Lalai dalam `<form>`, butang memicu tindakan pengiriman borang.
- `reset`: Butang menetapkan semula semua kawalan bentuk ke nilai awalnya.
-  `button`: Jangan berikan tingkah laku lalai semasa butang ditekan. Anda kemudian dapat menetapkan tindakan khusus untuknya menggunakan JavaScript.

### Tugas

Mari mulakan dengan menambahkan borang ke templat `login`. Kami memerlukan medan *nama pengguna* dan butang *Log masuk*.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <h2>Login</h2>
    <form id="loginForm">
      <label for="username">Username</label>
      <input id="username" name="user" type="text">
      <button>Login</button>
    </form>
  </section>
</template>
```

Sekiranya anda melihat lebih dekat, anda dapat melihat bahawa kami juga menambahkan elemen `<label>` di sini. Elemen `<label>` digunakan untuk menambahkan nama ke kawalan UI, seperti bidang nama pengguna kami. Label penting untuk keterbacaan borang anda, tetapi juga dilengkapi dengan faedah tambahan:

- Dengan mengaitkan label dengan kawalan bentuk, ia membantu pengguna menggunakan teknologi bantu (seperti pembaca skrin) untuk memahami data apa yang diharapkan dapat mereka berikan.
- Anda dapat mengklik label untuk memberi fokus langsung pada input yang berkaitan, sehingga lebih mudah dijangkau pada peranti berdasarkan layar sentuh.

> [Kebolehcapaian](https://developer.mozilla.org/docs/Learn/Accessibility/What_is_accessibility) di web adalah topik yang sangat penting yang sering diabaikan. Terima kasih kepada [elemen HTML semantik](https://developer.mozilla.org/docs/Learn/Accessibility/HTML) tidak sukar untuk membuat kandungan yang boleh diakses jika anda menggunakannya dengan betul. Anda boleh [baca lebih lanjut mengenai kebolehaksesan](https://developer.mozilla.org/docs/Web/Accessibility) untuk mengelakkan kesilapan biasa dan menjadi pembangun yang bertanggungjawab.

Sekarang kita akan menambah borang kedua untuk pendaftaran, tepat di bawah yang sebelumnya:

```html
<hr/>
<h2>Register</h2>
<form id="registerForm">
  <label for="user">Username</label>
  <input id="user" name="user" type="text">
  <label for="currency">Currency</label>
  <input id="currency" name="currency" type="text" value="$">
  <label for="description">Description</label>
  <input id="description" name="description" type="text">
  <label for="balance">Current balance</label>
  <input id="balance" name="balance" type="number" value="0">
  <button>Register</button>
</form>
```

Dengan menggunakan atribut `value` kita dapat menentukan nilai lalai untuk input yang diberikan.
Perhatikan juga bahawa input untuk `balance` mempunyai jenis `number`. Adakah ia kelihatan berbeza daripada input lain? Cuba berinteraksi dengannya.

✅ Bolehkah anda menavigasi dan berinteraksi dengan borang hanya menggunakan papan kekunci? Bagaimana anda akan melakukannya?

## Menyerahkan data ke pelayan

Sekarang kita mempunyai UI yang berfungsi, langkah seterusnya adalah mengirim data ke pelayan kita. Mari buat ujian cepat menggunakan kod kami sekarang: apa yang berlaku jika anda mengklik butang *Login* atau *Register*?

Adakah anda melihat perubahan pada bahagian URL penyemak imbas anda?

![Tangkapan skrin perubahan URL penyemak imbas setelah mengklik butang Daftar](../images/click-register.png)

Tindakan lalai untuk `<form>` adalah menyerahkan borang ke URL pelayan semasa menggunakan [kaedah GET](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3 ), menambahkan data borang terus ke URL. Kaedah ini mempunyai beberapa kekurangan walaupun:

- Ukuran data yang dikirim sangat terhad (sekitar 2000 aksara)
- Data dapat dilihat secara langsung di URL (tidak bagus untuk kata laluan)
- Ia tidak berfungsi dengan muat naik fail

Itulah sebabnya anda boleh mengubahnya untuk menggunakan [kaedah POST](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) yang menghantar data borang ke pelayan di badan permintaan HTTP, tanpa batasan sebelumnya.

> Walaupun POST adalah kaedah yang paling sering digunakan untuk mengirim data, [dalam beberapa senario tertentu](https://www.w3.org/2001/tag/doc/whenToUseGet.html) lebih baik menggunakan kaedah GET, semasa melaksanakan bidang carian misalnya.

### Tugas

Tambahkan sifat `action` dan `method` ke borang pendaftaran:

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

Sekarang cuba daftarkan akaun baru dengan nama anda. Setelah mengklik butang * Daftar * anda akan melihat sesuatu seperti ini:

![Tetingkap penyemak imbas di alamat localhost:5000/api/akaun, menunjukkan rentetan JSON dengan data pengguna](../images/form-post.png)

Sekiranya semuanya berjalan lancar, pelayan harus menjawab permintaan anda dengan respons [JSON](https://www.json.org/json-en.html) yang mengandungi data akaun yang telah dibuat.

✅ Cuba daftar sekali lagi dengan nama yang sama. Apa yang berlaku?

## Mengirim data tanpa memuatkan semula halaman

Seperti yang anda perhatikan, ada sedikit masalah dengan pendekatan yang baru kami gunakan: semasa menghantar borang, kami keluar dari aplikasi kami dan penyemak imbas mengalihkan ke URL pelayan. Kami berusaha untuk mengelakkan semua muat semula halaman dengan aplikasi web kami, kerana kami sedang membuat [Aplikasi satu halaman (SPA)](https://en.wikipedia.org/wiki/Single-page_application).

Untuk mengirim data formulir ke pelayan tanpa memaksa muat ulang halaman, kita harus menggunakan kod JavaScript. Daripada meletakkan URL di properti `action` elemen `<form>`, Anda dapat menggunakan kod JavaScript apa pun yang disiapkan oleh string `javascript:` untuk melakukan tindakan khusus. Menggunakan ini juga bermaksud bahawa anda harus melaksanakan beberapa tugas yang sebelumnya dilakukan secara automatik oleh penyemak imbas:

- Dapatkan semula data borang
- Tukar dan kodkan data bentuk ke format yang sesuai
- Buat permintaan HTTP dan kirimkan ke pelayan

### Tugas

Ganti borang tindakan `action` dengan:

```html
<form id="registerForm" action="javascript:register()">
```

Buka `app.js` tambahkan fungsi baru bernama `register`:

```js
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
}
```

Di sini kita mengambil elemen borang menggunakan `getElementById()` dan menggunakan pembantu [`FormData`](https://developer.mozilla.org/docs/Web/API/FormData) untuk mengekstrak nilai dari borang kawalan sebagai satu set pasangan kunci / nilai. Kemudian kami menukar data ke objek biasa menggunakan [`Object.fromEntries()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) dan akhirnya bersiri data ke [JSON](https://www.json.org/json-en.html), format yang biasa digunakan untuk pertukaran data di web.

Data kini siap dihantar ke pelayan. Buat fungsi baru bernama `createAccount`:

```js
async function createAccount(account) {
  try {
    const response = await fetch('//localhost:5000/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: account
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

Apakah fungsi ini? Pertama, perhatikan kata kunci `async` di sini. Ini bermaksud bahawa fungsi tersebut mengandungi kod yang akan menjalankan [**asynchronously**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Apabila digunakan di sepanjang kata kunci `await`, ia membolehkan menunggu kod tak segerak untuk dilaksanakan - seperti menunggu tindak balas pelayan di sini - sebelum meneruskan.

Berikut adalah video ringkas mengenai penggunaan `async/await`:

[![Async dan Tunggu untuk menguruskan janji](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async dan Tunggu untuk mengurus janji")

> Klik gambar di atas untuk video mengenai async / waiting.

Kami menggunakan API `fetch()` untuk mengirim data JSON ke pelayan. Kaedah ini mengambil 2 parameter:

- URL pelayan, jadi kami meletakkan kembali `//localhost5000/api/akaun` di sini.
- Tetapan permintaan. Di situlah kami menetapkan kaedah untuk `POST` dan memberikan `body` untuk permintaan tersebut. Semasa kami menghantar data JSON ke pelayan, kami juga perlu menetapkan tajuk `Content-Type` ke` application/json` sehingga pelayan tahu bagaimana menafsirkan isi.

Oleh kerana pelayan akan menjawab permintaan dengan JSON, kita dapat menggunakan `tunggu tunggu.json()` untuk mengurai kandungan JSON dan mengembalikan objek yang dihasilkan. Perhatikan bahawa kaedah ini tidak segerak, jadi kami menggunakan kata kunci `tunggu 'di sini sebelum kembali untuk memastikan sebarang ralat semasa penghuraian juga terperangkap.

Sekarang tambahkan beberapa kod ke fungsi `register` untuk memanggil `createAccount()`:

```js
const result = await createAccount(jsonData);
```

Kerana kita menggunakan kata kunci `await` di sini, kita perlu menambahkan kata kunci `async` sebelum fungsi daftar:

```js
async function register() {
```

Akhirnya, mari kita tambahkan beberapa log untuk memeriksa hasilnya. Fungsi terakhir kelihatan seperti ini:

```js
async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const result = await createAccount(jsonData);

  if (result.error) {
    return console.log('An error occured:', result.error);
  }

  console.log('Account created!', result);
}
```

Itu agak lama tetapi kami sampai di sana! Sekiranya anda membuka [alat pembangun penyemak imbas](https://developer.mozilla.org/docs/Learn/Common_questions/What_are_browser_developer_tools), dan cuba mendaftarkan akaun baru, anda tidak akan melihat perubahan di laman web tetapi mesej akan muncul di konsol yang mengesahkan bahawa semuanya berfungsi.

![Tangkapan skrin yang menunjukkan mesej log di konsol penyemak imbas](../images/browser-console.png)

✅ Anda fikir data dihantar ke pelayan dengan selamat? Bagaimana jika seseorang yang dapat memintas permintaan itu? Anda boleh membaca mengenai [HTTPS](https://en.wikipedia.org/wiki/HTTPS) untuk mengetahui lebih lanjut mengenai komunikasi data yang selamat.

## Pengesahan data

Sekiranya anda cuba mendaftarkan akaun baru tanpa menetapkan nama pengguna terlebih dahulu, anda dapat melihat bahawa pelayan mengembalikan ralat dengan kod status [400 (Bad Request)](https://developer.mozilla.org/docs/Web/HTTP/Status/400#:~:text=The%20HyperText%20Transfer%20Protocol%20(HTTP,%2C%20or%20deceptive%20request%20routing).).

Sebelum menghantar data ke pelayan, adalah amalan yang baik untuk [mengesahkan data borang](https://developer.mozilla.org/docs/Learn/Forms/Form_validation) terlebih dahulu apabila mungkin, untuk memastikan anda menghantar permintaan yang sah. Kawalan borang HTML5 memberikan pengesahan terbina dalam menggunakan pelbagai atribut:

- `diperlukan`: bidang perlu diisi jika tidak, borang tidak dapat dihantar.
- `minlength` dan` maxlength`: menentukan bilangan aksara minimum dan maksimum dalam bidang teks.
- `min` dan `max`: menentukan nilai minimum dan maksimum medan angka.
- `type`: mentakrifkan jenis data yang diharapkan, seperti `number`, `email`, `file` atau [other built-in types](https://developer.mozilla.org/docs/Web/HTML/Elemen/input). Atribut ini juga dapat mengubah rendering visual kawalan bentuk.
- `pattern`: memungkinkan untuk menentukan [ungkapan biasa](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions) untuk menguji sama ada data yang dimasukkan sah atau tidak.

> Petua: anda boleh menyesuaikan rupa kawalan borang anda bergantung pada apakah itu sah atau tidak menggunakan kelas pseudo CSS `:invalid` dan`:valid`.

### Tugas

Terdapat 2 medan yang diperlukan untuk membuat akaun baru yang sah, nama pengguna dan mata wang, medan lain menjadi pilihan. Kemas kini HTML borang, menggunakan atribut `required` dan teks di label medan untuk itu:

```html
<label for="user">Username (required)</label>
<input id="user" name="user" type="text" required>
...
<label for="currency">Currency (required)</label>
<input id="currency" name="currency" type="text" value="$" required>
```

Walaupun pelaksanaan pelayan tertentu ini tidak memaksakan had khusus pada panjang maksimum medan, selalu menjadi amalan yang baik untuk menentukan had yang munasabah untuk setiap entri teks pengguna.

Tambahkan atribut `maxlength` ke medan teks:

```html
<input id="user" name="user" type="text" maxlength="20" required>
...
<input id="currency" name="currency" type="text" value="$" maxlength="5" required>
...
<input id="description" name="description" type="text" maxlength="100">
```

Sekarang jika anda menekan butang *Daftar* dan medan tidak mematuhi peraturan pengesahan yang kami tetapkan, anda akan melihat sesuatu seperti ini:

![Tangkapan skrin menunjukkan ralat pengesahan semasa cuba menghantar borang](../images/validation-error.png)

Pengesahan seperti ini dilakukan *sebelum* menghantar sebarang data ke pelayan dipanggil pengesahan **client-side**. Tetapi perhatikan bahawa tidak semestinya melakukan semua pemeriksaan tanpa menghantar data. Sebagai contoh, kami tidak dapat memeriksa di sini jika akaun sudah ada dengan nama pengguna yang sama tanpa menghantar permintaan ke pelayan. Pengesahan tambahan yang dilakukan di pelayan dipanggil pengesahan **server-side**.

Biasanya kedua-duanya perlu dilaksanakan, dan semasa menggunakan pengesahan sisi klien meningkatkan pengalaman pengguna dengan memberikan maklum balas segera kepada pengguna, pengesahan sisi pelayan sangat penting untuk memastikan data pengguna yang anda manipulasi adalah baik dan selamat.

---

## 🚀 Cabaran

Tunjukkan mesej ralat dalam HTML jika pengguna sudah ada.

Berikut adalah contoh bagaimana rupa halaman log masuk akhir setelah sedikit gaya:

![Tangkapan skrin halaman log masuk setelah menambahkan gaya CSS](../images/result.png)

## Kuiz Pasca Kuliah

[Kuiz Pasca Kuliah](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/44)

## Mengkaji & Belajar Sendiri

Pembangun menjadi sangat kreatif mengenai usaha membina bentuk mereka, terutama mengenai strategi pengesahan. Ketahui mengenai aliran bentuk yang berbeza dengan melihat melalui [CodePen](https://codepen.com); bolehkah anda mencari beberapa bentuk yang menarik dan memberi inspirasi?

## Tugasan

[Gayakan bank app anda](assignment.ms.md)