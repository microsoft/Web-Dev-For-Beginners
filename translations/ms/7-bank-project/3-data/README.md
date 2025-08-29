<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "89d0df9854ed020f155e94882ae88d4c",
  "translation_date": "2025-08-29T09:21:47+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "ms"
}
-->
# Membina Aplikasi Perbankan Bahagian 3: Kaedah Mendapatkan dan Menggunakan Data

## Kuiz Pra-Kuliah

[Kuiz pra-kuliah](https://ff-quizzes.netlify.app/web/quiz/45)

### Pengenalan

Di teras setiap aplikasi web terdapat *data*. Data boleh hadir dalam pelbagai bentuk, tetapi tujuan utamanya adalah untuk memaparkan maklumat kepada pengguna. Dengan aplikasi web yang semakin interaktif dan kompleks, cara pengguna mengakses dan berinteraksi dengan maklumat kini menjadi bahagian penting dalam pembangunan web.

Dalam pelajaran ini, kita akan melihat cara mendapatkan data dari pelayan secara asinkron, dan menggunakan data ini untuk memaparkan maklumat pada halaman web tanpa memuat semula HTML.

### Prasyarat

Anda perlu telah membina [Borang Log Masuk dan Pendaftaran](../2-forms/README.md) sebagai sebahagian daripada aplikasi web untuk pelajaran ini. Anda juga perlu memasang [Node.js](https://nodejs.org) dan [menjalankan API pelayan](../api/README.md) secara tempatan supaya anda mendapat data akaun.

Anda boleh menguji sama ada pelayan berfungsi dengan betul dengan melaksanakan arahan ini dalam terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX dan pengambilan data

Laman web tradisional mengemas kini kandungan yang dipaparkan apabila pengguna memilih pautan atau menghantar data menggunakan borang, dengan memuat semula keseluruhan halaman HTML. Setiap kali data baharu perlu dimuatkan, pelayan web mengembalikan halaman HTML baharu yang perlu diproses oleh pelayar, mengganggu tindakan pengguna semasa dan mengehadkan interaksi semasa pemuatan semula. Aliran kerja ini juga dikenali sebagai *Aplikasi Berbilang Halaman* atau *MPA*.

![Aliran kemas kini dalam aplikasi berbilang halaman](../../../../translated_images/mpa.7f7375a1a2d4aa779d3f928a2aaaf9ad76bcdeb05cfce2dc27ab126024050f51.ms.png)

Apabila aplikasi web mula menjadi lebih kompleks dan interaktif, teknik baharu yang dipanggil [AJAX (Asynchronous JavaScript and XML)](https://en.wikipedia.org/wiki/Ajax_(programming)) muncul. Teknik ini membolehkan aplikasi web menghantar dan mendapatkan data dari pelayan secara asinkron menggunakan JavaScript, tanpa perlu memuat semula halaman HTML, menghasilkan kemas kini yang lebih pantas dan interaksi pengguna yang lebih lancar. Apabila data baharu diterima dari pelayan, halaman HTML semasa juga boleh dikemas kini dengan JavaScript menggunakan API [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model). Lama-kelamaan, pendekatan ini telah berkembang menjadi apa yang kini dipanggil [*Aplikasi Halaman Tunggal* atau *SPA*](https://en.wikipedia.org/wiki/Single-page_application).

![Aliran kemas kini dalam aplikasi halaman tunggal](../../../../translated_images/spa.268ec73b41f992c2a21ef9294235c6ae597b3c37e2c03f0494c2d8857325cc57.ms.png)

Apabila AJAX mula diperkenalkan, satu-satunya API yang tersedia untuk mendapatkan data secara asinkron ialah [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest). Tetapi pelayar moden kini juga melaksanakan API yang lebih mudah dan berkuasa iaitu [`Fetch` API](https://developer.mozilla.org/docs/Web/API/Fetch_API), yang menggunakan janji (promises) dan lebih sesuai untuk memanipulasi data JSON.

> Walaupun semua pelayar moden menyokong `Fetch API`, jika anda mahu aplikasi web anda berfungsi pada pelayar lama atau warisan, adalah idea yang baik untuk menyemak [jadual keserasian di caniuse.com](https://caniuse.com/fetch) terlebih dahulu.

### Tugasan

Dalam [pelajaran sebelumnya](../2-forms/README.md) kita telah melaksanakan borang pendaftaran untuk mencipta akaun. Kini kita akan menambah kod untuk log masuk menggunakan akaun sedia ada, dan mendapatkan datanya. Buka fail `app.js` dan tambahkan fungsi `login` baharu:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

Di sini kita bermula dengan mendapatkan elemen borang menggunakan `getElementById()`, dan kemudian kita mendapatkan nama pengguna dari input dengan `loginForm.user.value`. Setiap kawalan borang boleh diakses melalui namanya (ditetapkan dalam HTML menggunakan atribut `name`) sebagai sifat borang.

Dengan cara yang sama seperti yang kita lakukan untuk pendaftaran, kita akan mencipta fungsi lain untuk melaksanakan permintaan pelayan, tetapi kali ini untuk mendapatkan data akaun:

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

Kita menggunakan `fetch` API untuk meminta data secara asinkron dari pelayan, tetapi kali ini kita tidak memerlukan parameter tambahan selain URL untuk dipanggil, kerana kita hanya menanyakan data. Secara lalai, `fetch` mencipta permintaan HTTP [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET), yang merupakan apa yang kita perlukan di sini.

✅ `encodeURIComponent()` ialah fungsi yang melarikan watak khas untuk URL. Apakah masalah yang mungkin timbul jika kita tidak memanggil fungsi ini dan menggunakan nilai `user` secara langsung dalam URL?

Sekarang mari kita kemas kini fungsi `login` kita untuk menggunakan `getAccount`:

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

Pertama, kerana `getAccount` ialah fungsi asinkron kita perlu memadankannya dengan kata kunci `await` untuk menunggu hasil pelayan. Seperti mana-mana permintaan pelayan, kita juga perlu menangani kesilapan. Buat masa ini kita hanya akan menambah mesej log untuk memaparkan kesilapan, dan akan kembali kepadanya kemudian.

Kemudian kita perlu menyimpan data di suatu tempat supaya kita boleh menggunakannya kemudian untuk memaparkan maklumat papan pemuka. Oleh kerana pemboleh ubah `account` belum wujud, kita akan mencipta pemboleh ubah global untuknya di bahagian atas fail kita:

```js
let account = null;
```

Selepas data pengguna disimpan ke dalam pemboleh ubah, kita boleh menavigasi dari halaman *login* ke *dashboard* menggunakan fungsi `navigate()` yang telah kita ada.

Akhir sekali, kita perlu memanggil fungsi `login` kita apabila borang log masuk dihantar, dengan mengubah suai HTML:

```html
<form id="loginForm" action="javascript:login()">
```

Uji bahawa semuanya berfungsi dengan betul dengan mendaftar akaun baharu dan cuba log masuk menggunakan akaun yang sama.

Sebelum beralih ke bahagian seterusnya, kita juga boleh melengkapkan fungsi `register` dengan menambah ini di bahagian bawah fungsi:

```js
account = result;
navigate('/dashboard');
```

✅ Tahukah anda bahawa secara lalai, anda hanya boleh memanggil API pelayan dari *domain dan port yang sama* dengan halaman web yang anda lihat? Ini adalah mekanisme keselamatan yang dikuatkuasakan oleh pelayar. Tetapi tunggu, aplikasi web kita berjalan pada `localhost:3000` manakala API pelayan berjalan pada `localhost:5000`, mengapa ia berfungsi? Dengan menggunakan teknik yang dipanggil [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS), adalah mungkin untuk melaksanakan permintaan HTTP rentas asal jika pelayan menambah tajuk khas pada respons, membenarkan pengecualian untuk domain tertentu.

> Ketahui lebih lanjut tentang API dengan mengikuti [pelajaran ini](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon)

## Kemas kini HTML untuk memaparkan data

Sekarang kita mempunyai data pengguna, kita perlu mengemas kini HTML sedia ada untuk memaparkannya. Kita sudah tahu cara mendapatkan elemen dari DOM menggunakan contohnya `document.getElementById()`. Selepas anda mempunyai elemen asas, berikut adalah beberapa API yang boleh anda gunakan untuk mengubahnya atau menambah elemen anak kepadanya:

- Menggunakan sifat [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent) anda boleh menukar teks elemen. Perhatikan bahawa menukar nilai ini akan menghapuskan semua anak elemen (jika ada) dan menggantikannya dengan teks yang diberikan. Oleh itu, ia juga merupakan kaedah yang cekap untuk menghapuskan semua anak elemen tertentu dengan memberikan nilai kosong `''` kepadanya.

- Menggunakan [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) bersama dengan kaedah [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) anda boleh mencipta dan melampirkan satu atau lebih elemen anak baharu.

✅ Menggunakan sifat [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) elemen juga mungkin untuk menukar kandungan HTMLnya, tetapi ini harus dielakkan kerana ia terdedah kepada serangan [cross-site scripting (XSS)](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting).

### Tugasan

Sebelum beralih ke skrin papan pemuka, ada satu perkara lagi yang perlu kita lakukan pada halaman *login*. Pada masa ini, jika anda cuba log masuk dengan nama pengguna yang tidak wujud, mesej ditunjukkan dalam konsol tetapi bagi pengguna biasa tiada apa yang berubah dan anda tidak tahu apa yang sedang berlaku.

Mari kita tambahkan elemen pemegang tempat dalam borang log masuk di mana kita boleh memaparkan mesej ralat jika diperlukan. Tempat yang baik adalah tepat sebelum butang `<button>` log masuk:

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

Elemen `<div>` ini kosong, bermakna tiada apa yang akan dipaparkan pada skrin sehingga kita menambah kandungan kepadanya. Kita juga memberikannya `id` supaya kita boleh mendapatkannya dengan mudah menggunakan JavaScript.

Kembali ke fail `app.js` dan cipta fungsi pembantu baharu `updateElement`:

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

Fungsi ini agak mudah: diberikan *id* elemen dan *teks*, ia akan mengemas kini kandungan teks elemen DOM yang sepadan dengan `id`. Mari kita gunakan kaedah ini sebagai ganti mesej ralat sebelumnya dalam fungsi `login`:

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

Sekarang jika anda cuba log masuk dengan akaun yang tidak sah, anda sepatutnya melihat sesuatu seperti ini:

![Tangkapan skrin menunjukkan mesej ralat yang dipaparkan semasa log masuk](../../../../translated_images/login-error.416fe019b36a63276764c2349df5d99e04ebda54fefe60c715ee87a28d5d4ad0.ms.png)

Kini kita mempunyai teks ralat yang muncul secara visual, tetapi jika anda mencubanya dengan pembaca skrin anda akan perasan bahawa tiada apa yang diumumkan. Untuk teks yang ditambah secara dinamik pada halaman diumumkan oleh pembaca skrin, ia perlu menggunakan sesuatu yang dipanggil [Live Region](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions). Di sini kita akan menggunakan jenis live region tertentu yang dipanggil amaran:

```html
<div id="loginError" role="alert"></div>
```

Laksanakan tingkah laku yang sama untuk ralat fungsi `register` (jangan lupa untuk mengemas kini HTML).

## Memaparkan maklumat pada papan pemuka

Menggunakan teknik yang sama yang baru kita lihat, kita juga akan menguruskan memaparkan maklumat akaun pada halaman papan pemuka.

Ini adalah bagaimana objek akaun yang diterima dari pelayan kelihatan:

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

> Nota: untuk memudahkan kerja anda, anda boleh menggunakan akaun `test` yang telah dipraisi dengan data.

### Tugasan

Mari kita mulakan dengan menggantikan bahagian "Balance" dalam HTML untuk menambah elemen pemegang tempat:

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

Kita juga akan menambah bahagian baharu tepat di bawah untuk memaparkan penerangan akaun:

```html
<h2 id="description"></h2>
```

✅ Oleh kerana penerangan akaun berfungsi sebagai tajuk untuk kandungan di bawahnya, ia ditandai secara semantik sebagai tajuk. Ketahui lebih lanjut tentang bagaimana [struktur tajuk](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) adalah penting untuk kebolehaksesan, dan lihat secara kritikal pada halaman untuk menentukan apa lagi yang boleh menjadi tajuk.

Seterusnya, kita akan mencipta fungsi baharu dalam `app.js` untuk mengisi pemegang tempat:

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

Pertama, kita memeriksa bahawa kita mempunyai data akaun yang kita perlukan sebelum melangkah lebih jauh. Kemudian kita menggunakan fungsi `updateElement()` yang kita cipta sebelum ini untuk mengemas kini HTML.

> Untuk menjadikan paparan baki lebih cantik, kita menggunakan kaedah [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) untuk memaksa memaparkan nilai dengan 2 digit selepas titik perpuluhan.

Sekarang kita perlu memanggil fungsi `updateDashboard()` kita setiap kali papan pemuka dimuatkan. Jika anda telah menyelesaikan [tugasan pelajaran 1](../1-template-route/assignment.md) ini sepatutnya mudah, jika tidak anda boleh menggunakan pelaksanaan berikut.

Tambahkan kod ini ke penghujung fungsi `updateRoute()`:

```js
if (typeof route.init === 'function') {
  route.init();
}
```

Dan kemas kini definisi laluan dengan:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

Dengan perubahan ini, setiap kali halaman papan pemuka dipaparkan, fungsi `updateDashboard()` dipanggil. Selepas log masuk, anda sepatutnya dapat melihat baki akaun, mata wang dan penerangan.

## Cipta baris jadual secara dinamik dengan templat HTML

Dalam [pelajaran pertama](../1-template-route/README.md) kita menggunakan templat HTML bersama dengan kaedah [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) untuk melaksanakan navigasi dalam aplikasi kita. Templat juga boleh lebih kecil dan digunakan untuk mengisi bahagian berulang halaman secara dinamik.

Kita akan menggunakan pendekatan yang sama untuk memaparkan senarai transaksi dalam jadual HTML.

### Tugasan

Tambahkan templat baharu dalam `<body>` HTML:

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

Kemudian, tambahkan sifat `id` ini pada elemen `<tbody>` jadual dalam templat papan pemuka untuk memudahkan pencarian menggunakan JavaScript:

```html
<tbody id="transactions"></tbody>
```

HTML kita sudah siap, mari beralih ke kod JavaScript dan cipta fungsi baharu `createTransactionRow`:

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

Fungsi ini melakukan apa yang namanya nyatakan: menggunakan templat yang kita cipta sebelum ini, ia mencipta baris jadual baharu dan mengisi kandungannya menggunakan data transaksi. Kita akan menggunakan ini dalam fungsi `updateDashboard()` kita untuk mengisi jadual:

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

Di sini kita menggunakan kaedah [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment) yang mencipta fragmen DOM baharu yang boleh kita kerjakan, sebelum akhirnya melampirkannya pada jadual HTML kita.

Masih ada satu perkara lagi yang perlu kita lakukan sebelum kod ini boleh berfungsi, kerana fungsi `updateElement()` kita pada masa ini hanya menyokong kandungan teks. Mari ubah sedikit kodnya:

```js
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

Kita menggunakan kaedah [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) kerana ia membolehkan kita melampirkan sama ada teks atau [DOM Nodes](https://developer.mozilla.org/docs/Web/API/Node) kepada elemen induk, yang sesuai untuk semua kes penggunaan kita.
Jika anda cuba menggunakan akaun `test` untuk log masuk, anda kini sepatutnya melihat senarai transaksi di papan pemuka 🎉.

---

## 🚀 Cabaran

Bekerjasama untuk menjadikan halaman papan pemuka kelihatan seperti aplikasi perbankan sebenar. Jika anda sudah menggayakan aplikasi anda, cuba gunakan [media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) untuk mencipta [reka bentuk responsif](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) yang berfungsi dengan baik pada kedua-dua peranti desktop dan mudah alih.

Berikut adalah contoh halaman papan pemuka yang telah digayakan:

![Tangkapan skrin contoh hasil papan pemuka selepas digayakan](../../../../translated_images/screen2.123c82a831a1d14ab2061994be2fa5de9cec1ce651047217d326d4773a6348e4.ms.png)

## Kuiz Selepas Kuliah

[Kuiz selepas kuliah](https://ff-quizzes.netlify.app/web/quiz/46)

## Tugasan

[Refaktor dan komen kod anda](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil maklum bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.