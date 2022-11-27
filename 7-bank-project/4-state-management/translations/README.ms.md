# Bina Aplikasi Perbankan Bahagian 4: Konsep State Management

## Kuiz Pra Kuliah

[Kuiz Pra Kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/47)

### Pengenalan

Apabila aplikasi web berkembang, menjadi cabaran untuk mengawasi semua aliran data. Kod mana yang mendapat data, halaman mana yang menggunakannya, di mana dan kapan ia perlu dikemas kini ... mudah untuk berakhir dengan kod tidak kemas yang sukar dijaga. Ini benar terutamanya apabila anda perlu berkongsi data di antara halaman aplikasi anda yang berbeza, misalnya data pengguna. Konsep *state management* selalu ada dalam semua jenis program, tetapi ketika aplikasi web terus berkembang dalam kerumitan, kini menjadi titik penting untuk dipikirkan semasa pembangunan.

Pada bahagian akhir ini, kita akan melihat aplikasi yang kita buat untuk memikirkan kembali bagaimana keadaan dikendalikan, yang membolehkan sokongan penyegaran penyemak imbas pada bila-bila masa, dan data yang berterusan sepanjang sesi pengguna.

### Prasyarat

Anda perlu menyelesaikan bahagian [pengambilan data](../../3-data/translations/README.ms.md) pada aplikasi web untuk pelajaran ini. Anda juga perlu memasang [Node.js](https://nodejs.org) dan [jalankan API pelayan](../../api/README.ms.md) secara tempatan supaya anda dapat menguruskan data akaun.

Anda boleh menguji bahawa pelayan berjalan dengan betul dengan menjalankan perintah ini di terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Fikirkan semula state management

Dalam [pelajaran sebelumnya](../../3-data/translations/README.md), kami memperkenalkan konsep dasar keadaan dalam aplikasi kami dengan pemboleh ubah `akaun` global yang mengandungi data bank untuk pengguna yang sedang log masuk. Walau bagaimanapun, pelaksanaan kami sekarang mempunyai beberapa kekurangan. Cuba muat semula halaman semasa anda berada di papan pemuka. Apa yang berlaku?

Terdapat 3 masalah dengan kod semasa:

- Keadaan tidak berterusan, kerana penyegaran penyemak imbas membawa anda kembali ke halaman log masuk.
- Terdapat pelbagai fungsi yang mengubah keadaan. Apabila aplikasinya berkembang, ini akan menyukarkan untuk mengesan perubahan dan mudah untuk melupakan pembaharuan.
- Keadaan tidak dibersihkan, apabila anda mengklik *Logout* data akaun masih ada walaupun anda berada di halaman log masuk.

Kami dapat mengemas kini kod kami untuk mengatasi masalah ini satu demi satu, tetapi ini akan membuat lebih banyak pendua kod dan menjadikan aplikasi lebih rumit dan sukar untuk dijaga. Atau kita boleh berhenti sebentar dan memikirkan semula strategi kita.

> Masalah apa yang sebenarnya ingin kita selesaikan di sini?

[State Management](https://en.wikipedia.org/wiki/State_management) adalah mengenai mencari pendekatan yang baik untuk menyelesaikan dua masalah tertentu:

- Bagaimana agar aliran data dalam aplikasi dapat difahami?
- Bagaimana cara menjaga data keadaan selalu selari dengan antara muka pengguna (dan sebaliknya)?

Setelah menyelesaikan masalah ini, masalah lain yang mungkin anda miliki mungkin sudah selesai atau menjadi lebih mudah untuk diselesaikan. Terdapat banyak kemungkinan pendekatan untuk menyelesaikan masalah ini, tetapi kami akan menggunakan penyelesaian bersama yang terdiri daripada **memusatkan data dan cara mengubahnya**. Aliran data akan seperti ini:

![Skema yang menunjukkan aliran data antara HTML, tindakan pengguna dan keadaan](../images/data-flow.png)

> Kami tidak akan membahas di sini bahagian di mana data secara automatik mencetuskan kemas kini paparan, kerana ia berkaitan dengan konsep [Pemrograman Reaktif](https://en.wikipedia.org/wiki/Reactive_programming). Ini adalah subjek susulan yang baik jika anda ingin menyelam.

✅ Terdapat banyak perpustakaan di luar sana dengan pendekatan yang berbeza untuk pengurusan negeri, [Redux](https://redux.js.org) menjadi pilihan yang popular. Lihat konsep dan corak yang digunakan kerana ini sering kali merupakan kaedah yang baik untuk mengetahui potensi masalah yang mungkin anda hadapi dalam aplikasi web besar dan bagaimana ia dapat diselesaikan.

### Tugas

Kita akan mulakan dengan sedikit refactoring. Ganti pernyataan `akaun`:

```js
let account = null;
```

With:

```js
let state = {
  account: null
};
```

Ideanya adalah untuk *memusatkan* semua data aplikasi kami dalam satu objek keadaan. Kami hanya mempunyai `akaun` untuk saat ini di negeri ini sehingga tidak banyak berubah, tetapi ini menciptakan jalan untuk evolusi.

Kita juga harus mengemas kini fungsi menggunakannya. Dalam fungsi `register()` dan `login()`, ganti `account = ...` dengan `state.account = ...`;

Di bahagian atas fungsi `updateDashboard()`, tambahkan baris ini:

```js
const account = state.account;
```

Pemfaktoran semula ini dengan sendirinya tidak membawa banyak peningkatan, tetapi ideanya adalah untuk meletakkan asas untuk perubahan selanjutnya.

## Jejak perubahan data

Sekarang kita telah meletakkan objek `state` untuk menyimpan data kita, langkah seterusnya adalah memusatkan kemas kini. Tujuannya adalah untuk menjadikannya lebih mudah untuk mengikuti setiap perubahan dan kapan ia berlaku.

Untuk mengelakkan berlakunya perubahan pada objek `state`, adalah praktik yang baik untuk mempertimbangkannya [*tidak berubah*](https://en.wikipedia.org/wiki/Immutable_object), yang bermaksud bahawa ia tidak dapat diubah sama sekali. Ini juga bermaksud bahawa anda harus membuat objek keadaan baru jika anda ingin mengubah apa-apa di dalamnya. Dengan melakukan ini, anda membina perlindungan mengenai [kesan sampingan](https://en.wikipedia.org/wiki/Side_effect_ (computer_science)), dan membuka kemungkinan untuk ciri baru dalam aplikasi anda seperti melaksanakan undo / redo, sambil mempermudah debug. Sebagai contoh, anda boleh mencatat setiap perubahan yang dibuat ke negeri dan menyimpan sejarah perubahan untuk memahami sumber pepijat.

Dalam JavaScript, anda boleh menggunakan [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) untuk membuat versi yang tidak berubah dari sebuah objek. Sekiranya anda cuba membuat perubahan pada objek yang tidak dapat diubah, pengecualian akan ditimbulkan.

✅ Adakah anda tahu perbezaan antara objek *cetek* dan *dalam* tidak berubah? Anda boleh membacanya [di sini](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze).

### Tugas

Mari buat fungsi `updateState()` baru:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

Dalam fungsi ini, kami membuat objek keadaan baru dan menyalin data dari keadaan sebelumnya menggunakan operator [*spread (`...`) operator*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Kemudian kami menimpa harta benda objek tertentu dengan data baru menggunakan [notasi kurungan](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` untuk tugasan. Akhirnya, kita mengunci objek untuk mengelakkan pengubahsuaian menggunakan `Object.freeze()`. Kami hanya menyimpan harta `akaun` di negeri ini buat masa ini, tetapi dengan pendekatan ini anda dapat menambahkan seberapa banyak harta tanah yang anda perlukan di negeri ini.

Kami juga akan mengemas kini inisialisasi `state` untuk memastikan keadaan awal juga dibekukan:

```js
let state = Object.freeze({
  account: null
});
```

After that, update the `register` function by replacing the `state.account = result;` assignment with:

```js
updateState('account', result);
```

Do the same with the `login` function, replacing `state.account = data;` with:

```js
updateState('account', data);
```

Kami sekarang akan mengambil kesempatan untuk memperbaiki masalah data akaun yang tidak dihapus ketika pengguna mengklik *Logout*.

Buat fungsi baru `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

Di `updateDashboard()`, ganti pengalihan `return navigate('/login');` dengan `return logout()`;

Cuba daftarkan akaun baru, log keluar dan masuk sekali lagi untuk memeriksa bahawa semuanya masih berfungsi dengan betul.

> Petua: anda dapat melihat semua perubahan keadaan dengan menambahkan `console.log(state)` di bahagian bawah `updateState()` dan membuka konsol di alat pengembangan penyemak imbas anda.

## Kekalkan keadaan

Sebilangan besar aplikasi web perlu mengekalkan data agar dapat berfungsi dengan betul. Semua data kritikal biasanya disimpan di pangkalan data dan diakses melalui API pelayan, seperti data akaun pengguna dalam kes kami. Tetapi kadang-kadang, juga menarik untuk mengekalkan beberapa data pada aplikasi klien yang berjalan di penyemak imbas anda, untuk pengalaman pengguna yang lebih baik atau untuk meningkatkan prestasi pemuatan.

Apabila anda ingin menyimpan data dalam penyemak imbas anda, terdapat beberapa soalan penting yang harus anda tanyakan kepada diri sendiri:

- *Adakah data sensitif?* Anda harus mengelakkan menyimpan data sensitif pada pelanggan, seperti kata laluan pengguna.
- *Berapa lama anda perlu menyimpan data ini?* Adakah anda merancang untuk mengakses data ini hanya untuk sesi semasa atau adakah anda ingin menyimpannya selamanya?

Terdapat banyak cara untuk menyimpan maklumat di dalam aplikasi web, bergantung pada apa yang ingin anda capai. Sebagai contoh, anda boleh menggunakan URL untuk menyimpan pertanyaan carian, dan menjadikannya boleh dibagikan antara pengguna. Anda juga boleh menggunakan [kuki HTTP](https://developer.mozilla.org/docs/Web/HTTP/Cookies) jika data perlu dikongsi dengan pelayan, seperti [pengesahan](https://en.wikipedia.org/wiki/Authentication) maklumat.

Pilihan lain adalah menggunakan salah satu dari banyak API penyemak imbas untuk menyimpan data. Dua daripadanya sangat menarik:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): a [Key/Value store](https://en.wikipedia.org/wiki/Key%E2%80%93value_database) yang memungkinkan untuk mengekalkan data khusus untuk laman web semasa di pelbagai sesi. Data yang disimpan di dalamnya tidak akan luput.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): ini berfungsi sama seperti `localStorage` kecuali data yang disimpan di dalamnya dibersihkan semasa sesi berakhir (semasa penyemak imbas ditutup).

Perhatikan bahawa kedua-dua API ini hanya membenarkan menyimpan [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String). Sekiranya anda ingin menyimpan objek yang kompleks, anda perlu membuat siri ke siri [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON) menggunakan [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

✅ Sekiranya anda ingin membuat aplikasi web yang tidak berfungsi dengan pelayan, anda juga boleh membuat pangkalan data pada klien menggunakan [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Yang ini dikhaskan untuk kes penggunaan lanjutan atau jika anda perlu menyimpan sejumlah besar data, kerana lebih kompleks untuk digunakan.

### Tugas

Kami mahu pengguna kami terus masuk sehingga mereka mengklik butang *Logout* secara eksplisit, jadi kami akan menggunakan `localStorage` untuk menyimpan data akaun. Pertama, mari tentukan kunci yang akan kami gunakan untuk menyimpan data kami.

```js
const storageKey = 'savedAccount';
```

Kemudian tambahkan baris ini pada akhir fungsi `updateState()`:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

Dengan ini, data akaun pengguna akan dikekalkan dan sentiasa terkini semasa kami memusatkan semua kemas kini negeri sebelumnya. Di sinilah kita mula mendapat manfaat daripada semua reaktor kita sebelumnya 🙂.

Semasa data disimpan, kita juga harus menjaga memulihkannya ketika aplikasi dimuat. Oleh kerana kita akan mempunyai lebih banyak kod inisialisasi, mungkin ada baiknya membuat fungsi `init` baru, yang juga merangkumi kod sebelumnya di bahagian bawah `app.js`:

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Kod permulaan kami sebelumnya
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

Di sini kami mengambil data yang disimpan, dan jika ada, kami akan mengemas kini keadaan dengan sewajarnya. Penting untuk melakukan ini *sebelum* mengemas kini laluan, kerana mungkin ada kod yang bergantung pada keadaan semasa kemas kini halaman.

Kami juga dapat menjadikan halaman *Dashboard* sebagai halaman lalai aplikasi kami, karena kami sekarang masih menyimpan data akun. Sekiranya tidak ada data, dashboard akan mengalihkan ke halaman *Login*. Dalam `updateRoute()`, ganti fallback `return navigate ('/login');` dengan `return navigate('dashboard');`.

Sekarang log masuk dalam aplikasi dan cuba memuat semula halaman, anda harus terus berada di papan pemuka. Dengan kemas kini itu, kami telah menangani semua masalah awal kami ...

## Muat semula data

... Tetapi kita mungkin juga telah membuat yang baru. Alamak!

Pergi ke papan pemuka menggunakan akaun `test`, kemudian jalankan perintah ini di terminal untuk membuat transaksi baru:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Cuba muat semula halaman papan pemuka anda di penyemak imbas sekarang. Apa yang berlaku? Adakah anda melihat transaksi baru?

Keadaan ini berterusan selama-lamanya berkat `localStorage`, tetapi itu juga bermaksud ia tidak akan dikemas kini sehingga anda log keluar dari aplikasi dan log masuk semula!

Salah satu strategi yang mungkin untuk diperbaiki adalah memuat semula data akaun setiap kali dashboard dimuat, untuk mengelakkan data terhenti.

### Tugas

Buat fungsi baru `updateAccountData`:

```js
async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}
```

Kaedah ini memeriksa bahawa kita sedang log masuk dan memuat semula data akaun dari pelayan.

Buat fungsi lain bernama `refresh`:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

Yang ini mengemas kini data akaun, kemudian mengurus mengemas kini HTML halaman papan pemuka. Inilah yang perlu kita panggil semasa laluan papan pemuka dimuat. Kemas kini definisi laluan dengan:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Cuba muatkan semula papan pemuka sekarang, ia akan memaparkan data akaun yang dikemas kini.

---

## 🚀 Cabaran

Setelah kita memuatkan semula data akaun setiap kali papan pemuka dimuat, adakah anda fikir kita masih perlu meneruskan *semua data* akaun?

Cuba bekerjasama untuk mengubah apa yang disimpan dan dimuat dari `localStorage` untuk hanya memasukkan perkara yang benar-benar diperlukan agar aplikasi berfungsi.

## Post-Lecture Quiz

[Post-Lecture Quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/48)

## Tugasan

[Laksanakan dialog "Tambah transaksi"](assignment.ms.md)

Inilah hasil contoh setelah menyelesaikan tugasan:

![Tangkapan skrin yang menunjukkan contoh dialog "Tambah transaksi"](../images/dialog.png)