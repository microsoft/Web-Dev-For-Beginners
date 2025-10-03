<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b46acf79da8550d76445eed00b06c878",
  "translation_date": "2025-10-03T13:09:58+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "ms"
}
-->
# Bina Aplikasi Perbankan Bahagian 4: Konsep Pengurusan Keadaan

## Kuiz Pra-Kuliah

[Kuiz pra-kuliah](https://ff-quizzes.netlify.app/web/quiz/47)

### Pengenalan

Apabila aplikasi web berkembang, ia menjadi cabaran untuk menjejaki semua aliran data. Kod mana yang mendapatkan data, halaman mana yang menggunakannya, di mana dan bila ia perlu dikemas kini... mudah untuk berakhir dengan kod yang berselerak dan sukar untuk diselenggara. Ini terutamanya benar apabila anda perlu berkongsi data antara halaman yang berbeza dalam aplikasi anda, contohnya data pengguna. Konsep *pengurusan keadaan* sentiasa wujud dalam semua jenis program, tetapi apabila aplikasi web terus berkembang dalam kerumitan, ia kini menjadi titik utama yang perlu difikirkan semasa pembangunan.

Dalam bahagian terakhir ini, kita akan meninjau semula aplikasi yang telah kita bina untuk memikirkan semula bagaimana keadaan diuruskan, membolehkan sokongan untuk penyegaran pelayar pada bila-bila masa, dan mengekalkan data merentasi sesi pengguna.

### Prasyarat

Anda perlu telah melengkapkan bahagian [pengambilan data](../3-data/README.md) aplikasi web untuk pelajaran ini. Anda juga perlu memasang [Node.js](https://nodejs.org) dan [menjalankan API pelayan](../api/README.md) secara tempatan supaya anda boleh menguruskan data akaun.

Anda boleh menguji sama ada pelayan berjalan dengan betul dengan melaksanakan perintah ini dalam terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Fikirkan semula pengurusan keadaan

Dalam [pelajaran sebelumnya](../3-data/README.md), kami memperkenalkan konsep asas keadaan dalam aplikasi kami dengan pembolehubah global `account` yang mengandungi data bank untuk pengguna yang sedang log masuk. Walau bagaimanapun, pelaksanaan semasa kami mempunyai beberapa kelemahan. Cuba segarkan halaman apabila anda berada di papan pemuka. Apa yang berlaku?

Terdapat 3 isu dengan kod semasa:

- Keadaan tidak dikekalkan, kerana penyegaran pelayar membawa anda kembali ke halaman log masuk.
- Terdapat pelbagai fungsi yang mengubah keadaan. Apabila aplikasi berkembang, ia boleh menyukarkan untuk menjejaki perubahan dan mudah untuk terlupa mengemas kini satu.
- Keadaan tidak dibersihkan, jadi apabila anda mengklik *Logout*, data akaun masih ada walaupun anda berada di halaman log masuk.

Kami boleh mengemas kini kod kami untuk menangani isu-isu ini satu persatu, tetapi ia akan mencipta lebih banyak penduaan kod dan menjadikan aplikasi lebih kompleks dan sukar untuk diselenggara. Atau kami boleh berhenti seketika dan memikirkan semula strategi kami.

> Apakah masalah yang sebenarnya kita cuba selesaikan di sini?

[Pengurusan keadaan](https://en.wikipedia.org/wiki/State_management) adalah tentang mencari pendekatan yang baik untuk menyelesaikan dua masalah tertentu ini:

- Bagaimana untuk memastikan aliran data dalam aplikasi mudah difahami?
- Bagaimana untuk memastikan data keadaan sentiasa selaras dengan antara muka pengguna (dan sebaliknya)?

Setelah anda menyelesaikan perkara ini, sebarang isu lain yang mungkin anda hadapi sama ada telah diselesaikan atau menjadi lebih mudah untuk diselesaikan. Terdapat banyak pendekatan yang mungkin untuk menyelesaikan masalah ini, tetapi kami akan menggunakan penyelesaian biasa yang terdiri daripada **memusatkan data dan cara untuk mengubahnya**. Aliran data akan berjalan seperti ini:

![Skema menunjukkan aliran data antara HTML, tindakan pengguna dan keadaan](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.ms.png)

> Kami tidak akan membincangkan bahagian di mana data secara automatik mencetuskan kemas kini paparan, kerana ia berkaitan dengan konsep lanjutan [Pengaturcaraan Reaktif](https://en.wikipedia.org/wiki/Reactive_programming). Ia adalah subjek susulan yang baik jika anda ingin mendalami.

✅ Terdapat banyak perpustakaan di luar sana dengan pendekatan yang berbeza untuk pengurusan keadaan, [Redux](https://redux.js.org) menjadi pilihan yang popular. Lihat konsep dan corak yang digunakan kerana ia sering menjadi cara yang baik untuk belajar tentang isu-isu yang mungkin anda hadapi dalam aplikasi web besar dan bagaimana ia boleh diselesaikan.

### Tugas

Kita akan mulakan dengan sedikit penstrukturan semula. Gantikan deklarasi `account`:

```js
let account = null;
```

Dengan:

```js
let state = {
  account: null
};
```

Idea ini adalah untuk *memusatkan* semua data aplikasi kami dalam satu objek keadaan. Kami hanya mempunyai `account` buat masa ini dalam keadaan jadi ia tidak banyak berubah, tetapi ia mencipta laluan untuk evolusi.

Kami juga perlu mengemas kini fungsi yang menggunakannya. Dalam fungsi `register()` dan `login()`, gantikan `account = ...` dengan `state.account = ...`;

Di bahagian atas fungsi `updateDashboard()`, tambahkan baris ini:

```js
const account = state.account;
```

Penstrukturan semula ini sendiri tidak membawa banyak penambahbaikan, tetapi idea ini adalah untuk meletakkan asas untuk perubahan seterusnya.

## Jejak perubahan data

Sekarang kita telah meletakkan objek `state` untuk menyimpan data kita, langkah seterusnya adalah untuk memusatkan kemas kini. Matlamatnya adalah untuk memudahkan menjejaki sebarang perubahan dan bila ia berlaku.

Untuk mengelakkan perubahan dibuat pada objek `state`, adalah juga amalan yang baik untuk menganggapnya [*tidak boleh diubah*](https://en.wikipedia.org/wiki/Immutable_object), yang bermaksud ia tidak boleh diubah sama sekali. Ini juga bermakna anda perlu mencipta objek keadaan baharu jika anda ingin mengubah apa-apa di dalamnya. Dengan melakukan ini, anda membina perlindungan terhadap [kesan sampingan](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) yang berpotensi tidak diingini, dan membuka kemungkinan untuk ciri baharu dalam aplikasi anda seperti melaksanakan undo/redo, sambil juga memudahkan penyahpepijatan. Sebagai contoh, anda boleh log setiap perubahan yang dibuat pada keadaan dan menyimpan sejarah perubahan untuk memahami punca pepijat.

Dalam JavaScript, anda boleh menggunakan [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) untuk mencipta versi objek yang tidak boleh diubah. Jika anda cuba membuat perubahan pada objek yang tidak boleh diubah, pengecualian akan dinaikkan.

✅ Adakah anda tahu perbezaan antara objek *shallow* dan *deep* yang tidak boleh diubah? Anda boleh membacanya [di sini](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze).

### Tugas

Mari kita cipta fungsi baharu `updateState()`:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

Dalam fungsi ini, kami mencipta objek keadaan baharu dan menyalin data daripada keadaan sebelumnya menggunakan [*operator spread (`...`)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Kemudian kami menimpa sifat tertentu objek keadaan dengan data baharu menggunakan [notasi kurungan](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` untuk tugasan. Akhir sekali, kami mengunci objek untuk mengelakkan pengubahsuaian menggunakan `Object.freeze()`. Buat masa ini, kami hanya mempunyai sifat `account` yang disimpan dalam keadaan, tetapi dengan pendekatan ini anda boleh menambah sebanyak mana sifat yang anda perlukan dalam keadaan.

Kami juga akan mengemas kini inisialisasi `state` untuk memastikan keadaan awal juga dibekukan:

```js
let state = Object.freeze({
  account: null
});
```

Selepas itu, kemas kini fungsi `register` dengan menggantikan tugasan `state.account = result;` dengan:

```js
updateState('account', result);
```

Lakukan perkara yang sama dengan fungsi `login`, menggantikan `state.account = data;` dengan:

```js
updateState('account', data);
```

Kami kini akan mengambil peluang untuk membetulkan isu data akaun yang tidak dibersihkan apabila pengguna mengklik *Logout*.

Cipta fungsi baharu `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

Dalam `updateDashboard()`, gantikan pengalihan `return navigate('/login');` dengan `return logout()`;

Cuba daftar akaun baharu, log keluar dan log masuk semula untuk memastikan semuanya masih berfungsi dengan betul.

> Petua: anda boleh melihat semua perubahan keadaan dengan menambah `console.log(state)` di bahagian bawah `updateState()` dan membuka konsol dalam alat pembangunan pelayar anda.

## Kekalkan keadaan

Kebanyakan aplikasi web perlu mengekalkan data untuk dapat berfungsi dengan betul. Semua data kritikal biasanya disimpan dalam pangkalan data dan diakses melalui API pelayan, seperti data akaun pengguna dalam kes kami. Tetapi kadangkala, adalah menarik untuk mengekalkan beberapa data pada aplikasi klien yang berjalan dalam pelayar anda, untuk pengalaman pengguna yang lebih baik atau untuk meningkatkan prestasi pemuatan.

Apabila anda ingin mengekalkan data dalam pelayar anda, terdapat beberapa soalan penting yang perlu anda tanyakan kepada diri sendiri:

- *Adakah data itu sensitif?* Anda harus mengelakkan daripada menyimpan sebarang data sensitif pada klien, seperti kata laluan pengguna.
- *Berapa lama anda perlu menyimpan data ini?* Adakah anda merancang untuk mengakses data ini hanya untuk sesi semasa atau adakah anda mahu ia disimpan selama-lamanya?

Terdapat pelbagai cara untuk menyimpan maklumat dalam aplikasi web, bergantung pada apa yang anda ingin capai. Sebagai contoh, anda boleh menggunakan URL untuk menyimpan pertanyaan carian, dan menjadikannya boleh dikongsi antara pengguna. Anda juga boleh menggunakan [kuki HTTP](https://developer.mozilla.org/docs/Web/HTTP/Cookies) jika data perlu dikongsi dengan pelayan, seperti maklumat [pengesahan](https://en.wikipedia.org/wiki/Authentication).

Pilihan lain adalah menggunakan salah satu daripada banyak API pelayar untuk menyimpan data. Dua daripadanya sangat menarik:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): sebuah [Key/Value store](https://en.wikipedia.org/wiki/Key%E2%80%93value_database) yang membolehkan untuk mengekalkan data khusus untuk laman web semasa merentasi sesi yang berbeza. Data yang disimpan di dalamnya tidak pernah tamat tempoh.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): ini berfungsi sama seperti `localStorage` kecuali data yang disimpan di dalamnya akan dipadamkan apabila sesi tamat (apabila pelayar ditutup).

Perhatikan bahawa kedua-dua API ini hanya membenarkan untuk menyimpan [rentetan](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String). Jika anda ingin menyimpan objek kompleks, anda perlu menyusunnya ke format [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON) menggunakan [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

✅ Jika anda ingin mencipta aplikasi web yang tidak berfungsi dengan pelayan, adalah juga mungkin untuk mencipta pangkalan data pada klien menggunakan API [`IndexedDB`](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Ini dikhaskan untuk kes penggunaan lanjutan atau jika anda perlu menyimpan sejumlah besar data, kerana ia lebih kompleks untuk digunakan.

### Tugas

Kami mahu pengguna kami kekal log masuk sehingga mereka secara eksplisit mengklik butang *Logout*, jadi kami akan menggunakan `localStorage` untuk menyimpan data akaun. Pertama, mari kita tentukan kunci yang akan kita gunakan untuk menyimpan data kita.

```js
const storageKey = 'savedAccount';
```

Kemudian tambahkan baris ini di akhir fungsi `updateState()`:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

Dengan ini, data akaun pengguna akan dikekalkan dan sentiasa terkini kerana kami telah memusatkan semua kemas kini keadaan kami sebelum ini. Di sinilah kami mula mendapat manfaat daripada semua penstrukturan semula kami sebelum ini 🙂.

Memandangkan data disimpan, kami juga perlu mengambil berat tentang memulihkannya apabila aplikasi dimuatkan. Oleh kerana kami akan mula mempunyai lebih banyak kod inisialisasi, mungkin idea yang baik untuk mencipta fungsi baharu `init`, yang juga termasuk kod kami sebelum ini di bahagian bawah `app.js`:

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Our previous initialization code
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

Di sini kami mendapatkan data yang disimpan, dan jika ada, kami mengemas kini keadaan sewajarnya. Adalah penting untuk melakukan ini *sebelum* mengemas kini laluan, kerana mungkin terdapat kod yang bergantung pada keadaan semasa kemas kini halaman.

Kami juga boleh menjadikan halaman *Dashboard* sebagai halaman lalai aplikasi kami, kerana kami kini mengekalkan data akaun. Jika tiada data ditemui, papan pemuka akan menguruskan pengalihan ke halaman *Login* juga. Dalam `updateRoute()`, gantikan fallback `return navigate('/login');` dengan `return navigate('/dashboard');`.

Sekarang log masuk ke aplikasi dan cuba segarkan halaman. Anda sepatutnya kekal di papan pemuka. Dengan kemas kini itu, kami telah menyelesaikan semua isu awal kami...

## Segarkan data

...Tetapi kami mungkin juga telah mencipta isu baharu. Oops!

Pergi ke papan pemuka menggunakan akaun `test`, kemudian jalankan perintah ini pada terminal untuk mencipta transaksi baharu:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Cuba segarkan halaman papan pemuka anda dalam pelayar sekarang. Apa yang berlaku? Adakah anda melihat transaksi baharu?

Keadaan dikekalkan selama-lamanya terima kasih kepada `localStorage`, tetapi itu juga bermakna ia tidak pernah dikemas kini sehingga anda log keluar dari aplikasi dan log masuk semula!

Satu strategi yang mungkin untuk membetulkannya adalah dengan memuat semula data akaun setiap kali papan pemuka dimuatkan, untuk mengelakkan data yang tidak terkini.

### Tugas

Cipta fungsi baharu `updateAccountData`:

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

Kaedah ini memeriksa bahawa kami sedang log masuk kemudian memuat semula data akaun dari pelayan.

Cipta satu lagi fungsi bernama `refresh`:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

Yang ini mengemas kini data akaun, kemudian menguruskan pengemaskinian HTML halaman papan pemuka. Inilah yang perlu kita panggil apabila laluan papan pemuka dimuatkan. Kemas kini definisi laluan dengan:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Cuba muat semula papan pemuka sekarang, ia sepatutnya memaparkan data akaun yang dikemas kini.

---

## 🚀 Cabaran

Sekarang bahawa kami memuat semula data akaun setiap kali papan pemuka dimuatkan, adakah anda fikir kami masih perlu mengekalkan *semua data akaun*?

Cuba bekerjasama untuk mengubah apa yang disimpan dan dimuatkan dari `localStorage` untuk hanya memasukkan apa yang benar-benar diperlukan untuk aplikasi berfungsi.

## Kuiz Pasca-Kuliah
[Kuiz selepas kuliah](https://ff-quizzes.netlify.app/web/quiz/48)

## Tugasan

[Laksanakan dialog "Tambah transaksi"](assignment.md)

Berikut adalah contoh hasil selepas menyelesaikan tugasan:

![Tangkapan skrin menunjukkan contoh dialog "Tambah transaksi"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.ms.png)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.