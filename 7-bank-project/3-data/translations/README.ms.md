# Bina Aplikasi Perbankan Bahagian 3: Kaedah Mengambil dan Menggunakan Data

## Kuiz Pra Kuliah

[Kuiz Pra Kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/45)

### Pengenalan

Inti setiap aplikasi web ada *data*. Data boleh dilakukan dalam pelbagai bentuk, tetapi tujuan utamanya adalah untuk menunjukkan maklumat kepada pengguna. Dengan aplikasi web menjadi semakin interaktif dan kompleks, bagaimana pengguna mengakses dan berinteraksi dengan maklumat kini menjadi bahagian penting dalam pembangunan web.

Dalam pelajaran ini, kita akan melihat cara mengambil data dari pelayan secara asinkron, dan menggunakan data ini untuk memaparkan maklumat di laman web tanpa memuatkan semula HTML.

### Prasyarat

Anda perlu membina bahagian [Borang Log Masuk dan Pendaftaran](../2-forms/README.md) dari aplikasi web untuk pelajaran ini. Anda juga perlu memasang [Node.js](https://nodejs.org) dan [jalankan API pelayan](../api/README.md) secara tempatan supaya anda mendapat data akaun.

Anda boleh menguji bahawa pelayan berjalan dengan betul dengan menjalankan perintah ini di terminal:

```sh
curl http://localhost:5000/api
# -> harus mengembalikan "Bank API v1.0.0" sebagai hasilnya
```

---

## AJAX dan pengambilan data

Laman web tradisional mengemas kini kandungan yang dipaparkan ketika pengguna memilih pautan atau mengirimkan data menggunakan borang, dengan memuatkan semula halaman HTML penuh. Setiap kali data baru dimuat, pelayan web mengembalikan halaman HTML baru yang perlu diproses oleh penyemak imbas, mengganggu tindakan pengguna semasa dan membatasi interaksi semasa muat semula. Alur kerja ini juga disebut *Aplikasi Multi-Halaman* atau *MPA*.

![Kemas kini aliran kerja dalam aplikasi berbilang halaman](./images/mpa.png)

Ketika aplikasi web mula menjadi lebih kompleks dan interaktif, teknik baru yang disebut [AJAX (Asynchronous JavaScript and XML)](https://en.wikipedia.org/wiki/Ajax_(programming)) muncul. Teknik ini membolehkan aplikasi web mengirim dan mengambil data dari pelayan secara asinkron menggunakan JavaScript, tanpa harus memuat semula halaman HTML, menghasilkan kemas kini yang lebih cepat dan interaksi pengguna yang lebih lancar. Apabila data baru diterima dari pelayan, halaman HTML semasa juga dapat diperbarui dengan JavaScript menggunakan API [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model). Dari masa ke masa, pendekatan ini telah berkembang menjadi apa yang sekarang disebut [*Aplikasi Halaman Tunggal* atau *SPA*](https://en.wikipedia.org/wiki/Single-page_application).

![Kemas kini alur kerja dalam aplikasi satu halaman](./images/spa.png)

Semasa AJAX pertama kali diperkenalkan, satu-satunya API yang tersedia untuk mengambil data secara asinkron adalah [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest). Tetapi penyemak imbas moden kini juga melaksanakan [`Fetch` API](https://developer.mozilla.org/docs/Web/API/Fetch_API), yang menggunakan janji dan lebih sesuai untuk dimanipulasi Data JSON.

> Walaupun semua penyemak imbas moden menyokong `Fetch API`, jika anda mahu aplikasi web anda berfungsi pada penyemak imbas lama atau penyemak imbas lama, sebaiknya periksa [jadual keserasian di caniuse.com](https://caniuse.com/fetch) pertama.

### Tugas

Dalam [pelajaran sebelumnya](../2-form/README.md) kami melaksanakan borang pendaftaran untuk membuat akaun. Kami sekarang akan menambahkan kod untuk log masuk menggunakan akaun yang ada, dan mengambil datanya. Buka fail `app.js` dan tambahkan fungsi `login` baru:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

Di sini kita mulakan dengan mengambil elemen borang dengan `getElementById()`, dan kemudian kita mendapat nama pengguna dari input dengan `loginForm.user.value`. Setiap kawalan borang dapat diakses dengan namanya (diatur dalam HTML menggunakan atribut `name`) sebagai harta bentuk.

Dengan cara yang serupa dengan apa yang kami lakukan untuk pendaftaran, kami akan membuat fungsi lain untuk melakukan permintaan pelayan, tetapi kali ini untuk mengambil data akaun:

```js
async function getAccount(user) {
  try {
    const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

Kami menggunakan API `fetch` untuk meminta data secara tidak serentak dari pelayan, tetapi kali ini kami tidak memerlukan parameter tambahan selain URL untuk dipanggil, kerana kami hanya meminta data. Secara lalai, `fetch` membuat permintaan HTTP [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET), itulah yang kami cari di sini.

✅ `encodeURIComponent()` adalah fungsi yang melarikan diri daripada watak khas untuk URL. Masalah apa yang mungkin kita hadapi jika kita tidak memanggil fungsi ini dan menggunakan nilai `pengguna` secara langsung di URL?

Sekarang mari kita kemas kini fungsi `login` kami untuk menggunakan `getAccount`:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return console.log('loginError', data.error);
  }

  account = data;
  navigate('/dashboard');
}
```

Pertama, kerana `getAccount` adalah fungsi tak segerak, kita perlu memadankannya dengan kata kunci `await` untuk menunggu hasil pelayan. Seperti permintaan pelayan, kami juga harus menangani kes ralat. Buat masa ini kami hanya akan menambahkan mesej log untuk memaparkan ralat, dan kembali kepadanya kemudian.

Kemudian kita harus menyimpan data di suatu tempat sehingga nanti kita dapat menggunakannya untuk memaparkan maklumat papan pemuka. Oleh kerana pemboleh ubah `account` belum ada, kami akan membuat pemboleh ubah global untuknya di bahagian atas fail kami:

```js
let account = null;
```

Setelah data pengguna disimpan ke dalam variabel kita dapat menavigasi dari halaman *login* ke papan pemuka * menggunakan fungsi `navigate()` yang sudah kita miliki.

Akhirnya, kita perlu memanggil fungsi `login` kita semasa borang log masuk dihantar, dengan mengubah HTML:

```html
<form id="loginForm" action="javascript:login()">
```

Uji bahawa semuanya berfungsi dengan betul dengan mendaftarkan akaun baru dan cuba log masuk menggunakan akaun yang sama.

Sebelum beralih ke bahagian seterusnya, kita juga dapat menyelesaikan fungsi `register` dengan menambahkan ini di bahagian bawah fungsi:

```js
account = result;
navigate('/dashboard');
```

✅ Tahukah anda bahawa secara lalai, anda hanya dapat memanggil API pelayan dari *domain dan port yang sama* daripada halaman web yang anda lihat? Ini adalah mekanisme keselamatan yang dikuatkuasakan oleh penyemak imbas. Tetapi tunggu, aplikasi web kami berjalan di `localhost: 3000` sedangkan API pelayan berjalan di `localhost: 5000`, mengapa ia berfungsi? Dengan menggunakan teknik yang disebut [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS), adalah mungkin untuk melakukan permintaan HTTP bersilang asal jika pelayan menambah tajuk khas untuk respons, yang memungkinkan pengecualian untuk domain tertentu.

> Ketahui lebih lanjut mengenai API dengan mengambil [pelajaran](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon)

## Kemas kini HTML untuk memaparkan data

Sekarang kita mempunyai data pengguna, kita harus mengemas kini HTML yang ada untuk memaparkannya. Kami sudah tahu cara mendapatkan elemen dari DOM menggunakan contohnya `document.getElementById()`. Setelah anda mempunyai elemen asas, berikut adalah beberapa API yang boleh anda gunakan untuk mengubahnya atau menambahkan elemen anak padanya:

- Dengan menggunakan sifat [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent), anda boleh mengubah teks elemen. Perhatikan bahawa mengubah nilai ini akan membuang semua anak elemen (jika ada) dan menggantinya dengan teks yang disediakan. Oleh itu, ini juga kaedah yang berkesan untuk membuang semua anak dari elemen tertentu dengan memberikan string kosong "" kepadanya.

- Menggunakan [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/DocumentcreateElement) bersama dengan [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) kaedah anda boleh membuat dan melampirkan satu atau lebih elemen anak baru.

✅ Menggunakan sifat [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) elemen juga mungkin untuk mengubah kandungan HTMLnya, tetapi yang ini harus dielakkan kerana terdedah kepada serangan [cross-site scripting (XSS)](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting) serangan.

### Tugas

Sebelum beralih ke skrin papan pemuka, ada satu perkara lagi yang harus kita lakukan di halaman *log masuk*. Pada masa ini, jika anda cuba log masuk dengan nama pengguna yang tidak ada, mesej ditunjukkan di konsol tetapi untuk pengguna biasa tidak ada yang berubah dan anda tidak tahu apa yang berlaku.

Mari tambahkan elemen placeholder dalam borang log masuk di mana kita dapat memaparkan mesej ralat jika diperlukan. Tempat yang bagus adalah tepat sebelum log masuk `<button>`:

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

Elemen `<div>` ini kosong, yang bermaksud bahawa tidak ada yang akan dipaparkan di layar sehingga kami menambahkan beberapa kandungan ke dalamnya. Kami juga memberikannya `id` sehingga kami dapat mengambilnya dengan mudah dengan JavaScript.

Kembali ke fail `app.js` dan buat fungsi pembantu baru `updateElement`:

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

Yang ini cukup mudah: diberi elemen *id* dan *teks*, ia akan mengemas kini kandungan teks elemen DOM dengan `id` yang sepadan. Mari gunakan kaedah ini sebagai ganti mesej ralat sebelumnya dalam fungsi `login`:

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

Sekiranya anda cuba log masuk dengan akaun yang tidak sah, anda akan melihat seperti ini:

![Tangkapan skrin yang menunjukkan mesej ralat yang ditunjukkan semasa log masuk](../images/login-error.png)

Sekarang kita mempunyai teks ralat yang muncul secara visual, tetapi jika anda mencubanya dengan pembaca skrin, anda akan melihat bahawa tidak ada yang diumumkan. Agar teks yang ditambahkan secara dinamis ke halaman diumumkan oleh pembaca skrin, ia perlu menggunakan sesuatu yang disebut [Live Region](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Di sini kita akan menggunakan jenis kawasan langsung yang disebut amaran:

```html
<div id="loginError" role="alert"></div>
```

Terapkan tingkah laku yang sama untuk kesalahan fungsi `register` (jangan lupa untuk mengemas kini HTML).

## Paparkan maklumat di papan pemuka

Dengan menggunakan teknik yang sama seperti yang baru kita lihat, kita juga akan menjaga memaparkan maklumat akaun di halaman papan pemuka.

Seperti inilah objek akaun yang diterima dari pelayan:

```json
{
  "user": "test",
  "currency": "$",
  "description": "Test account",
  "balance": 75,
  "transactions": [
    { "id": "1", "date": "2020-10-01", "object": "Pocket money", "amount": 50 },
    { "id": "2", "date": "2020-10-03", "object": "Book", "amount": -10 },
    { "id": "3", "date": "2020-10-04", "object": "Sandwich", "amount": -5 }
  ],
}
```

> Catatan: untuk menjadikan hidup anda lebih mudah, anda boleh menggunakan akaun `test` yang sudah ada yang sudah diisi dengan data.

### Tugas

Mari mulakan dengan mengganti bahagian "Baki" dalam HTML untuk menambahkan elemen ruang letak:

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

Kami juga akan menambah bahagian baru di bawah untuk memaparkan keterangan akaun:

```html
<h2 id="description"></h2>
```

✅ Oleh kerana perihalan akaun berfungsi sebagai tajuk untuk kandungan di bawahnya, ia ditandakan secara semantik sebagai tajuk. Ketahui lebih lanjut mengenai bagaimana [struktur tajuk](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) penting untuk dilayari, dan lihat halaman secara kritis untuk menentukan apa lagi boleh menjadi tajuk.

Seterusnya, kami akan membuat fungsi baru di `app.js` untuk mengisi ruang letak:

```js
function updateDashboard() {
  if (!account) {
    return navigate('/login');
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);
}
```

Pertama, kami memeriksa bahawa kami mempunyai data akaun yang kami perlukan sebelum melangkah lebih jauh. Kemudian kami menggunakan fungsi `updateElement()` yang kami buat sebelumnya untuk mengemas kini HTML.

> Untuk menjadikan paparan keseimbangan lebih cantik, kami menggunakan kaedah [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) untuk daya memaparkan nilai dengan 2 digit selepas titik perpuluhan.

Sekarang kita perlu memanggil fungsi `updateDashboard()` setiap kali papan pemuka dimuat. Sekiranya anda sudah menyelesaikan [tugasan 1](../1-template-route/assignment.md) ini harus dilakukan dengan mudah, jika tidak, anda boleh menggunakan pelaksanaan berikut.

Tambahkan kod ini ke akhir fungsi `updateRoute()`:

```js
if (typeof route.init === 'function') {
  route.init();
}
```

And update the routes definition with:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

Dengan perubahan ini, setiap kali halaman dashboard ditampilkan, fungsi `updateDashboard()` dipanggil. Selepas log masuk, anda seharusnya dapat melihat baki akaun, mata wang dan keterangan.

## Buat baris jadual secara dinamik dengan templat HTML

Dalam [first lesson](../1-template-route/README.md) kami menggunakan templat HTML bersama dengan [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) kaedah untuk melaksanakan navigasi di aplikasi kami. Templat juga dapat lebih kecil dan digunakan untuk mengisi bahagian halaman yang berulang secara dinamis.

Kami akan menggunakan pendekatan yang serupa untuk memaparkan senarai transaksi dalam jadual HTML.

### Tugas 

Tambahkan templat baru dalam HTML `<body>`:

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

Templat ini mewakili satu baris jadual, dengan 3 lajur yang ingin kita isi: *tarikh*, *objek* dan *jumlah* transaksi.

Kemudian, tambahkan sifat `id` ini ke elemen` <tbody> `di dalam templat papan pemuka untuk memudahkan pencarian menggunakan JavaScript:

```html
<tbody id="transactions"></tbody>
```

HTML kami sudah siap, mari beralih ke kod JavaScript dan buat fungsi baru `createTransactionRow`:

```js
function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}
```

Fungsi ini melakukan apa yang disiratkan namanya: menggunakan templat yang kita buat sebelumnya, ia membuat baris jadual baru dan mengisi isinya menggunakan data transaksi. Kami akan menggunakannya dalam fungsi `updateDashboard()` kami untuk mengisi jadual:

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

Di sini kita menggunakan kaedah [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment) yang membuat serpihan DOM baru yang boleh kita gunakan , sebelum akhirnya melampirkannya ke jadual HTML kami.

Masih ada satu perkara lagi yang harus kita lakukan sebelum kod ini dapat berfungsi, kerana fungsi `updateElement()` kami pada masa ini hanya menyokong kandungan teks. Mari ubah kodnya sedikit:

```js
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

Kami menggunakan kaedah [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) kerana ia membolehkan melampirkan teks atau [DOM Nodes] (https : //developer.mozilla.org/docs/Web/API/Node) ke elemen induk, yang sangat sesuai untuk semua kes penggunaan kami.

Sekiranya anda cuba menggunakan akaun `test` untuk log masuk, kini anda akan melihat senarai transaksi di papan pemuka 🎉.

---

## 🚀 Cabaran

Bekerjasama untuk menjadikan halaman papan pemuka kelihatan seperti aplikasi perbankan sebenar. Sekiranya anda sudah menggayakan aplikasi anda, cuba gunakan [pertanyaan media](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) untuk membuat [responsive design](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) berfungsi dengan baik pada kedua-dua desktop dan peranti mudah alih.

Berikut adalah contoh halaman papan pemuka yang digayakan:

![Tangkapan skrin hasil contoh papan pemuka selepas menggayakan](../../images/screen2.png)

## Kuiz Pasca Kuliah

[Kuiz Pasca Kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/46)

## Tugasan

[Refaktor dan komen kod anda](assignment.ms.md)