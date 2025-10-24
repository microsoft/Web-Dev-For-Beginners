<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5d259f6962464ad91e671083aa0398f4",
  "translation_date": "2025-10-24T14:11:26+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "id"
}
-->
# Membangun Aplikasi Perbankan Bagian 1: Template HTML dan Rute dalam Aplikasi Web

Ketika komputer panduan Apollo 11 menavigasi ke bulan pada tahun 1969, ia harus beralih antara berbagai program tanpa memulai ulang seluruh sistem. Aplikasi web modern bekerja dengan cara yang serupa – mereka mengubah apa yang Anda lihat tanpa memuat ulang semuanya dari awal. Hal ini menciptakan pengalaman yang mulus dan responsif seperti yang diharapkan pengguna saat ini.

Berbeda dengan situs web tradisional yang memuat ulang seluruh halaman untuk setiap interaksi, aplikasi web modern hanya memperbarui bagian yang perlu diubah. Pendekatan ini, seperti bagaimana pusat kendali beralih antara berbagai tampilan sambil mempertahankan komunikasi yang konstan, menciptakan pengalaman yang lancar seperti yang kita harapkan.

Inilah yang membuat perbedaannya begitu dramatis:

| Aplikasi Multi-Halaman Tradisional | Aplikasi Satu Halaman Modern |
|------------------------------------|-----------------------------|
| **Navigasi** | Muat ulang halaman penuh untuk setiap layar | Pergantian konten instan |
| **Performa** | Lebih lambat karena unduhan HTML lengkap | Lebih cepat dengan pembaruan parsial |
| **Pengalaman Pengguna** | Kilatan halaman yang mengganggu | Transisi mulus seperti aplikasi |
| **Berbagi Data** | Sulit antar halaman | Manajemen status yang mudah |
| **Pengembangan** | Banyak file HTML untuk dikelola | Satu HTML dengan template dinamis |

**Memahami evolusi:**
- **Aplikasi tradisional** membutuhkan permintaan server untuk setiap tindakan navigasi
- **SPA modern** hanya dimuat sekali dan memperbarui konten secara dinamis menggunakan JavaScript
- **Ekspektasi pengguna** sekarang lebih menyukai interaksi yang instan dan mulus
- **Manfaat performa** termasuk pengurangan bandwidth dan respons yang lebih cepat

Dalam pelajaran ini, kita akan membangun aplikasi perbankan dengan beberapa layar yang mengalir bersama secara mulus. Seperti bagaimana para ilmuwan menggunakan instrumen modular yang dapat dikonfigurasi ulang untuk eksperimen yang berbeda, kita akan menggunakan template HTML sebagai komponen yang dapat digunakan kembali yang dapat ditampilkan sesuai kebutuhan.

Anda akan bekerja dengan template HTML (cetakan yang dapat digunakan kembali untuk berbagai layar), routing JavaScript (sistem yang beralih antara layar), dan API riwayat browser (yang menjaga tombol kembali berfungsi seperti yang diharapkan). Teknik-teknik ini adalah dasar yang sama yang digunakan oleh kerangka kerja seperti React, Vue, dan Angular.

Pada akhirnya, Anda akan memiliki aplikasi perbankan yang berfungsi yang menunjukkan prinsip aplikasi satu halaman profesional.

## Kuis Pra-Pelajaran

[Kuis pra-pelajaran](https://ff-quizzes.netlify.app/web/quiz/41)

### Apa yang Anda Butuhkan

Kita memerlukan server web lokal untuk menguji aplikasi perbankan kita – jangan khawatir, ini lebih mudah daripada yang Anda pikirkan! Jika Anda belum memilikinya, cukup instal [Node.js](https://nodejs.org) dan jalankan `npx lite-server` dari folder proyek Anda. Perintah praktis ini akan menjalankan server lokal dan secara otomatis membuka aplikasi Anda di browser.

### Persiapan

Di komputer Anda, buat folder bernama `bank` dengan file bernama `index.html` di dalamnya. Kita akan memulai dari [boilerplate HTML](https://en.wikipedia.org/wiki/Boilerplate_code) ini:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- This is where you'll work -->
  </body>
</html>
```

**Inilah yang disediakan oleh boilerplate ini:**
- **Menetapkan** struktur dokumen HTML5 dengan deklarasi DOCTYPE yang benar
- **Mengonfigurasi** pengkodean karakter sebagai UTF-8 untuk dukungan teks internasional
- **Mengaktifkan** desain responsif dengan tag meta viewport untuk kompatibilitas seluler
- **Menetapkan** judul deskriptif yang muncul di tab browser
- **Membuat** bagian body yang bersih tempat kita akan membangun aplikasi kita

> 📁 **Pratinjau Struktur Proyek**
> 
> **Pada akhir pelajaran ini, proyek Anda akan berisi:**
> ```
> bank/
> ├── index.html      <!-- Main HTML with templates -->
> ├── app.js          <!-- Routing and navigation logic -->
> └── style.css       <!-- (Optional for future lessons) -->
> ```
> 
> **Tanggung jawab file:**
> - **index.html**: Berisi semua template dan menyediakan struktur aplikasi
> - **app.js**: Menangani routing, navigasi, dan manajemen template
> - **Template**: Mendefinisikan UI untuk login, dashboard, dan layar lainnya

---

## Template HTML

Template menyelesaikan masalah mendasar dalam pengembangan web. Ketika Gutenberg menemukan pencetakan tipe bergerak pada tahun 1440-an, ia menyadari bahwa daripada mengukir seluruh halaman, ia dapat membuat blok huruf yang dapat digunakan kembali dan mengaturnya sesuai kebutuhan. Template HTML bekerja dengan prinsip yang sama – daripada membuat file HTML terpisah untuk setiap layar, Anda mendefinisikan struktur yang dapat digunakan kembali yang dapat ditampilkan sesuai kebutuhan.

Pikirkan template sebagai cetak biru untuk berbagai bagian aplikasi Anda. Seperti seorang arsitek yang membuat satu cetak biru dan menggunakannya beberapa kali daripada menggambar ulang ruangan yang identik, kita membuat template sekali dan menggunakannya sesuai kebutuhan. Browser menyimpan template ini tersembunyi sampai JavaScript mengaktifkannya.

Jika Anda ingin membuat beberapa layar untuk halaman web, salah satu solusinya adalah membuat satu file HTML untuk setiap layar yang ingin Anda tampilkan. Namun, solusi ini memiliki beberapa ketidaknyamanan:

- Anda harus memuat ulang seluruh HTML saat beralih layar, yang bisa lambat.
- Sulit untuk berbagi data antara layar yang berbeda.

Pendekatan lain adalah memiliki hanya satu file HTML, dan mendefinisikan beberapa [template HTML](https://developer.mozilla.org/docs/Web/HTML/Element/template) menggunakan elemen `<template>`. Template adalah blok HTML yang dapat digunakan kembali yang tidak ditampilkan oleh browser, dan perlu diinstansiasi saat runtime menggunakan JavaScript.

### Mari Kita Bangun

Kita akan membuat aplikasi bank dengan dua layar utama: halaman login dan dashboard. Pertama, mari tambahkan elemen placeholder ke body HTML kita – di sinilah semua layar berbeda kita akan muncul:

```html
<div id="app">Loading...</div>
```

**Memahami placeholder ini:**
- **Membuat** wadah dengan ID "app" tempat semua layar akan ditampilkan
- **Menampilkan** pesan pemuatan hingga JavaScript menginisialisasi layar pertama
- **Menyediakan** satu titik pemasangan untuk konten dinamis kita
- **Memungkinkan** penargetan mudah dari JavaScript menggunakan `document.getElementById()`

> 💡 **Tips Pro**: Karena konten elemen ini akan diganti, kita dapat menempatkan pesan atau indikator pemuatan yang akan ditampilkan saat aplikasi sedang dimuat.

Selanjutnya, mari tambahkan template HTML untuk halaman login di bawahnya. Untuk saat ini kita hanya akan menambahkan judul dan bagian yang berisi tautan yang akan kita gunakan untuk navigasi.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

**Memecah template login ini:**
- **Mendefinisikan** template dengan pengidentifikasi unik "login" untuk penargetan JavaScript
- **Menyertakan** heading utama yang menetapkan branding aplikasi
- **Berisi** elemen `<section>` semantik untuk mengelompokkan konten terkait
- **Menyediakan** tautan navigasi yang akan mengarahkan pengguna ke dashboard

Kemudian kita akan menambahkan template HTML lain untuk halaman dashboard. Halaman ini akan berisi beberapa bagian:

- Header dengan judul dan tautan logout
- Saldo saat ini dari rekening bank
- Daftar transaksi, ditampilkan dalam tabel

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <a href="/login">Logout</a>
  </header>
  <section>
    Balance: 100$
  </section>
  <section>
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Object</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section>
</template>
```

**Mari kita pahami setiap bagian dari dashboard ini:**
- **Menyusun** halaman dengan elemen `<header>` semantik yang berisi navigasi
- **Menampilkan** judul aplikasi secara konsisten di seluruh layar untuk branding
- **Menyediakan** tautan logout yang mengarahkan kembali ke layar login
- **Menampilkan** saldo rekening saat ini di bagian khusus
- **Mengorganisasi** data transaksi menggunakan tabel HTML yang terstruktur dengan baik
- **Mendefinisikan** header tabel untuk kolom Tanggal, Objek, dan Jumlah
- **Meninggalkan** badan tabel kosong untuk injeksi konten dinamis nanti

> 💡 **Tips Pro**: Saat membuat template HTML, jika Anda ingin melihat seperti apa tampilannya, Anda dapat mengomentari baris `<template>` dan `</template>` dengan menutupnya menggunakan `<!-- -->`.

✅ Mengapa menurut Anda kita menggunakan atribut `id` pada template? Bisakah kita menggunakan sesuatu yang lain seperti kelas?

## Menghidupkan Template dengan JavaScript

Sekarang kita perlu membuat template kita berfungsi. Seperti bagaimana printer 3D mengambil cetak biru digital dan menciptakan objek fisik, JavaScript mengambil template tersembunyi kita dan menciptakan elemen yang terlihat dan interaktif yang dapat dilihat dan digunakan oleh pengguna.

Prosesnya mengikuti tiga langkah konsisten yang membentuk dasar pengembangan web modern. Setelah Anda memahami pola ini, Anda akan mengenalinya di banyak kerangka kerja dan pustaka.

Jika Anda mencoba file HTML Anda saat ini di browser, Anda akan melihat bahwa itu terjebak menampilkan `Loading...`. Itu karena kita perlu menambahkan beberapa kode JavaScript untuk menginstansiasi dan menampilkan template HTML.

Menginstansiasi template biasanya dilakukan dalam 3 langkah:

1. Mengambil elemen template di DOM, misalnya menggunakan [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById).
2. Mengkloning elemen template, menggunakan [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode).
3. Melampirkannya ke DOM di bawah elemen yang terlihat, misalnya menggunakan [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild).

```mermaid
flowchart TD
    A[🔍 Step 1: Find Template] --> B[📋 Step 2: Clone Template]
    B --> C[🔗 Step 3: Attach to DOM]
    
    A1["document.getElementById('login')"] --> A
    B1["template.content.cloneNode(true)"] --> B  
    C1["app.appendChild(view)"] --> C
    
    C --> D[👁️ Template Visible to User]
    
    style A fill:#e1f5fe
    style B fill:#f3e5f5
    style C fill:#e8f5e8
    style D fill:#fff3e0
```

**Penjelasan visual dari proses:**
- **Langkah 1** menemukan template tersembunyi dalam struktur DOM
- **Langkah 2** membuat salinan kerja yang dapat dimodifikasi dengan aman
- **Langkah 3** menyisipkan salinan ke area halaman yang terlihat
- **Hasil** adalah layar fungsional yang dapat digunakan dan dilihat oleh pengguna

✅ Mengapa kita perlu mengkloning template sebelum melampirkannya ke DOM? Apa yang Anda pikirkan akan terjadi jika kita melewatkan langkah ini?

### Tugas

Buat file baru bernama `app.js` di folder proyek Anda dan impor file tersebut di bagian `<head>` dari HTML Anda:

```html
<script src="app.js" defer></script>
```

**Memahami impor skrip ini:**
- **Menghubungkan** file JavaScript ke dokumen HTML kita
- **Menggunakan** atribut `defer` untuk memastikan skrip berjalan setelah parsing HTML selesai
- **Memungkinkan** akses ke semua elemen DOM karena mereka sepenuhnya dimuat sebelum eksekusi skrip
- **Mengikuti** praktik terbaik modern untuk pemuatan skrip dan performa

Sekarang di `app.js`, kita akan membuat fungsi baru `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

**Langkah demi langkah, inilah yang terjadi:**
- **Menemukan** elemen template menggunakan ID uniknya
- **Membuat** salinan mendalam dari konten template menggunakan `cloneNode(true)`
- **Menemukan** wadah aplikasi tempat konten akan ditampilkan
- **Menghapus** konten yang ada dari wadah aplikasi
- **Menyisipkan** konten template yang telah dikloning ke dalam DOM yang terlihat

Sekarang panggil fungsi ini dengan salah satu template dan lihat hasilnya.

```js
updateRoute('login');
```

**Apa yang dicapai oleh pemanggilan fungsi ini:**
- **Mengaktifkan** template login dengan melewatkan ID-nya sebagai parameter
- **Menunjukkan** cara beralih secara programatis antara berbagai layar aplikasi
- **Menampilkan** layar login menggantikan pesan "Loading..."

✅ Apa tujuan dari kode ini `app.innerHTML = '';`? Apa yang terjadi jika tanpa kode ini?

## Membuat Rute

Routing pada dasarnya adalah tentang menghubungkan URL ke konten yang tepat. Pertimbangkan bagaimana operator telepon awal menggunakan switchboard untuk menghubungkan panggilan – mereka akan mengambil permintaan masuk dan mengarahkannya ke tujuan yang benar. Routing web bekerja dengan cara yang serupa, mengambil permintaan URL dan menentukan konten mana yang akan ditampilkan.

Secara tradisional, server web menangani ini dengan menyajikan file HTML yang berbeda untuk URL yang berbeda. Karena kita sedang membangun aplikasi satu halaman, kita perlu menangani routing ini sendiri dengan JavaScript. Pendekatan ini memberi kita lebih banyak kontrol atas pengalaman pengguna dan performa.

```mermaid
flowchart LR
    A["🌐 URL Path<br/>/dashboard"] --> B["🗺️ Routes Object<br/>Lookup"]
    B --> C["🎯 Template ID<br/>'dashboard'"]
    C --> D["📄 Find Template<br/>getElementById"]
    D --> E["👁️ Display Screen<br/>Clone & Append"]
    
    F["📍 /login"] --> G["🎯 'login'"]
    H["📍 /unknown"] --> I["❌ Not Found"]
    I --> J["🔄 Redirect to /login"]
    
    style B fill:#e3f2fd
    style E fill:#e8f5e8
    style I fill:#ffebee
    style J fill:#fff3e0
```

**Memahami alur routing:**
- **Perubahan URL** memicu pencarian dalam konfigurasi rute kita
- **Rute yang valid** dipetakan ke ID template tertentu untuk dirender
- **Rute yang tidak valid** memicu perilaku fallback untuk mencegah keadaan rusak
- **Rendering template** mengikuti proses tiga langkah yang telah kita pelajari sebelumnya

Ketika berbicara tentang aplikasi web, kita menyebut *Routing* sebagai niat untuk memetakan **URL** ke layar tertentu yang harus ditampilkan. Pada situs web dengan banyak file HTML, ini dilakukan secara otomatis karena jalur file tercermin pada URL. Misalnya, dengan file-file ini di folder proyek Anda:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

Jika Anda membuat server web dengan `mywebsite` sebagai root, pemetaan URL akan menjadi:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

Namun, untuk aplikasi web kita menggunakan satu file HTML yang berisi semua layar sehingga perilaku default ini tidak akan membantu kita. Kita harus membuat peta ini secara manual dan memperbarui template yang ditampilkan menggunakan JavaScript.

### Tugas

Kita akan menggunakan objek sederhana untuk mengimplementasikan [peta](https://en.wikipedia.org/wiki/Associative_array) antara jalur URL dan template kita. Tambahkan objek ini di bagian atas file `app.js` Anda.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

**Memahami konfigurasi rute ini:**
- **Mendefinisikan** pemetaan antara jalur URL dan pengidentifikasi template
- **Menggunakan** sintaks objek di mana kunci adalah jalur URL dan nilai berisi informasi template
- **Memungkinkan** pencarian mudah tentang template mana yang akan ditampilkan untuk URL tertentu
- **Menyediakan** struktur yang dapat diskalakan untuk menambahkan rute baru di masa depan

Sekarang mari kita modifikasi sedikit fungsi `updateRoute`. Alih-alih langsung melewatkan `templateId` sebagai argumen, kita ingin mengambilnya dengan terlebih dahulu melihat URL saat ini, lalu menggunakan peta kita untuk mendapatkan nilai ID template yang sesuai. Kita dapat menggunakan [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) untuk mendapatkan bagian jalur saja dari URL.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

**Memecah apa yang terjadi di sini:**
- **Mengambil** jalur saat ini dari URL browser menggunakan `window.location.pathname`
- **Mencari** konfigurasi rute yang sesuai dalam objek rute kita
- **Mengambil** ID template dari konfigurasi rute
- **Mengikuti** proses rendering template yang sama seperti sebelumnya
- **Menciptakan** sistem dinamis yang merespons perubahan URL

Di sini kita memetakan rute yang telah kita deklarasikan ke template yang sesuai. Anda dapat mencobanya dan melihat bahwa itu berfungsi dengan benar dengan mengubah URL secara manual di browser Anda.
✅ Apa yang terjadi jika Anda memasukkan path yang tidak dikenal di URL? Bagaimana kita bisa menyelesaikannya?

## Menambahkan Navigasi

Dengan routing yang sudah dibuat, pengguna membutuhkan cara untuk bernavigasi melalui aplikasi. Situs web tradisional memuat ulang seluruh halaman saat mengklik tautan, tetapi kita ingin memperbarui URL dan konten tanpa memuat ulang halaman. Ini menciptakan pengalaman yang lebih mulus, mirip dengan bagaimana aplikasi desktop beralih antara tampilan yang berbeda.

Kita perlu mengoordinasikan dua hal: memperbarui URL browser sehingga pengguna dapat menandai halaman dan berbagi tautan, serta menampilkan konten yang sesuai. Ketika diimplementasikan dengan benar, ini menciptakan navigasi yang mulus seperti yang diharapkan pengguna dari aplikasi modern.

> 🏗️ **Wawasan Arsitektur**: Komponen Sistem Navigasi
>
> **Apa yang Anda bangun:**
> - **🔄 Manajemen URL**: Memperbarui bilah alamat browser tanpa memuat ulang halaman
> - **📋 Sistem Template**: Mengganti konten secara dinamis berdasarkan route saat ini  
> - **📚 Integrasi History**: Mempertahankan fungsi tombol maju/mundur browser
> - **🛡️ Penanganan Error**: Penanganan yang baik untuk route yang tidak valid atau hilang
>
> **Bagaimana komponen bekerja bersama:**
> - **Mendengarkan** peristiwa navigasi (klik, perubahan history)
> - **Memperbarui** URL menggunakan History API
> - **Merender** template yang sesuai untuk route baru
> - **Mempertahankan** pengalaman pengguna yang mulus sepanjang waktu

Langkah berikutnya untuk aplikasi kita adalah menambahkan kemungkinan untuk bernavigasi antar halaman tanpa harus mengubah URL secara manual. Ini berarti dua hal:

  1. Memperbarui URL saat ini
  2. Memperbarui template yang ditampilkan berdasarkan URL baru

Kita sudah menyelesaikan bagian kedua dengan fungsi `updateRoute`, jadi kita harus mencari cara untuk memperbarui URL saat ini.

Kita harus menggunakan JavaScript dan lebih spesifik lagi [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState) yang memungkinkan untuk memperbarui URL dan membuat entri baru dalam riwayat penelusuran, tanpa memuat ulang HTML.

> ⚠️ **Catatan Penting**: Meskipun elemen anchor HTML [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) dapat digunakan sendiri untuk membuat hyperlink ke URL yang berbeda, secara default ini akan membuat browser memuat ulang HTML. Penting untuk mencegah perilaku ini saat menangani routing dengan JavaScript kustom, menggunakan fungsi preventDefault() pada peristiwa klik.

### Tugas

Mari kita buat fungsi baru yang dapat kita gunakan untuk bernavigasi dalam aplikasi kita:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

**Memahami fungsi navigasi ini:**
- **Memperbarui** URL browser ke path baru menggunakan `history.pushState`
- **Menambahkan** entri baru ke stack riwayat browser untuk mendukung tombol maju/mundur
- **Memicu** fungsi `updateRoute()` untuk menampilkan template yang sesuai
- **Mempertahankan** pengalaman aplikasi satu halaman tanpa memuat ulang halaman

Metode ini pertama-tama memperbarui URL saat ini berdasarkan path yang diberikan, lalu memperbarui template. Properti `window.location.origin` mengembalikan root URL, memungkinkan kita untuk merekonstruksi URL lengkap dari path yang diberikan.

Sekarang kita memiliki fungsi ini, kita dapat menangani masalah yang terjadi jika path tidak cocok dengan route yang telah didefinisikan. Kita akan memodifikasi fungsi `updateRoute` dengan menambahkan fallback ke salah satu route yang ada jika kita tidak dapat menemukan kecocokan.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

**Poin-poin penting yang perlu diingat:**
- **Memeriksa** apakah ada route untuk path saat ini
- **Mengalihkan** ke halaman login saat route yang tidak valid diakses
- **Menyediakan** mekanisme fallback yang mencegah navigasi yang rusak
- **Memastikan** pengguna selalu melihat layar yang valid, bahkan dengan URL yang salah

Jika route tidak dapat ditemukan, kita sekarang akan mengalihkan ke halaman `login`.

Sekarang mari kita buat fungsi untuk mendapatkan URL saat tautan diklik, dan untuk mencegah perilaku default tautan browser:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

**Memecah handler klik ini:**
- **Mencegah** perilaku default tautan browser menggunakan `preventDefault()`
- **Mengambil** URL tujuan dari elemen tautan yang diklik
- **Memanggil** fungsi navigasi kustom kita alih-alih memuat ulang halaman
- **Mempertahankan** pengalaman aplikasi satu halaman yang mulus

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

**Apa yang dicapai oleh binding onclick ini:**
- **Menghubungkan** setiap tautan ke sistem navigasi kustom kita
- **Meneruskan** peristiwa klik ke fungsi `onLinkClick` kita untuk diproses
- **Memungkinkan** navigasi yang mulus tanpa memuat ulang halaman
- **Mempertahankan** struktur URL yang dapat ditandai atau dibagikan oleh pengguna

Atribut [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) mengikat peristiwa `click` ke kode JavaScript, di sini panggilan ke fungsi `navigate()`.

Coba klik tautan-tautan ini, Anda sekarang seharusnya dapat bernavigasi antara berbagai layar aplikasi Anda.

✅ Metode `history.pushState` adalah bagian dari standar HTML5 dan diimplementasikan di [semua browser modern](https://caniuse.com/?search=pushState). Jika Anda sedang membangun aplikasi web untuk browser lama, ada trik yang dapat Anda gunakan sebagai pengganti API ini: menggunakan [hash (`#`)](https://en.wikipedia.org/wiki/URI_fragment) sebelum path, Anda dapat mengimplementasikan routing yang bekerja dengan navigasi anchor biasa dan tidak memuat ulang halaman, karena tujuannya adalah untuk membuat tautan internal dalam halaman.

## Membuat Tombol Maju dan Mundur Berfungsi

Tombol maju dan mundur adalah hal mendasar dalam penelusuran web, seperti bagaimana pengendali misi NASA dapat meninjau status sistem sebelumnya selama misi luar angkasa. Pengguna mengharapkan tombol-tombol ini berfungsi, dan ketika tidak, itu merusak pengalaman penelusuran yang diharapkan.

Aplikasi satu halaman kita membutuhkan konfigurasi tambahan untuk mendukung ini. Browser mempertahankan stack riwayat (yang telah kita tambahkan dengan `history.pushState`), tetapi ketika pengguna bernavigasi melalui riwayat ini, aplikasi kita perlu merespons dengan memperbarui konten yang ditampilkan sesuai.

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant App
    participant Template
    
    User->>Browser: Clicks "Login" link
    Browser->>App: onclick event triggered
    App->>App: preventDefault() & navigate('/dashboard')
    App->>Browser: history.pushState('/dashboard')
    Browser->>Browser: URL updates to /dashboard
    App->>App: updateRoute() called
    App->>Template: Find & clone dashboard template
    Template->>App: Return cloned content
    App->>Browser: Replace app content with template
    Browser->>User: Display dashboard screen
    
    Note over User,Template: User clicks browser back button
    
    User->>Browser: Clicks back button
    Browser->>Browser: History moves back to /login
    Browser->>App: popstate event fired
    App->>App: updateRoute() called automatically
    App->>Template: Find & clone login template
    Template->>App: Return cloned content
    App->>Browser: Replace app content with template
    Browser->>User: Display login screen
```

**Poin interaksi utama:**
- **Tindakan pengguna** memicu navigasi melalui klik atau tombol browser
- **Aplikasi mencegat** klik tautan untuk mencegah pemuatan ulang halaman
- **History API** mengelola perubahan URL dan stack riwayat browser
- **Template** menyediakan struktur konten untuk setiap layar
- **Event listener** memastikan aplikasi merespons semua jenis navigasi

Menggunakan `history.pushState` membuat entri baru dalam riwayat navigasi browser. Anda dapat memeriksanya dengan menahan *tombol mundur* browser Anda, seharusnya menampilkan sesuatu seperti ini:

![Screenshot riwayat navigasi](../../../../translated_images/history.7fdabbafa521e06455b738d3dafa3ff41d3071deae60ead8c7e0844b9ed987d8.id.png)

Jika Anda mencoba mengklik tombol mundur beberapa kali, Anda akan melihat bahwa URL saat ini berubah dan riwayat diperbarui, tetapi template yang sama tetap ditampilkan.

Itu karena aplikasi tidak tahu bahwa kita perlu memanggil `updateRoute()` setiap kali riwayat berubah. Jika Anda melihat dokumentasi [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), Anda dapat melihat bahwa jika state berubah - artinya kita berpindah ke URL yang berbeda - peristiwa [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event) dipicu. Kita akan menggunakan itu untuk memperbaiki masalah tersebut.

### Tugas

Untuk memastikan template yang ditampilkan diperbarui saat riwayat browser berubah, kita akan menambahkan fungsi baru yang memanggil `updateRoute()`. Kita akan melakukannya di bagian bawah file `app.js` kita:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

**Memahami integrasi riwayat ini:**
- **Mendengarkan** peristiwa `popstate` yang terjadi saat pengguna bernavigasi dengan tombol browser
- **Menggunakan** fungsi panah untuk sintaks handler peristiwa yang ringkas
- **Memanggil** `updateRoute()` secara otomatis setiap kali state riwayat berubah
- **Menginisialisasi** aplikasi dengan memanggil `updateRoute()` saat halaman pertama kali dimuat
- **Memastikan** template yang benar ditampilkan terlepas dari bagaimana pengguna bernavigasi

> 💡 **Tips Pro**: Kami menggunakan [fungsi panah](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) di sini untuk mendeklarasikan handler peristiwa `popstate` kami agar lebih ringkas, tetapi fungsi biasa juga akan berfungsi sama.

Berikut video penyegaran tentang fungsi panah:

[![Fungsi Panah](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Fungsi Panah")

> 🎥 Klik gambar di atas untuk video tentang fungsi panah.

Sekarang coba gunakan tombol mundur dan maju browser Anda, dan periksa bahwa route yang ditampilkan diperbarui dengan benar kali ini.

---

## Tantangan GitHub Copilot Agent 🚀

Gunakan mode Agent untuk menyelesaikan tantangan berikut:

**Deskripsi:** Tingkatkan aplikasi perbankan dengan menerapkan penanganan error dan template halaman 404 untuk route yang tidak valid, meningkatkan pengalaman pengguna saat bernavigasi ke halaman yang tidak ada.

**Prompt:** Buat template HTML baru dengan id "not-found" yang menampilkan halaman error 404 yang ramah pengguna dengan styling. Kemudian modifikasi logika routing JavaScript untuk menampilkan template ini saat pengguna bernavigasi ke URL yang tidak valid, dan tambahkan tombol "Go Home" yang mengarahkan kembali ke halaman login.

Pelajari lebih lanjut tentang [mode agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## 🚀 Tantangan

Tambahkan template dan route baru untuk halaman ketiga yang menampilkan kredit untuk aplikasi ini.

**Tujuan tantangan:**
- **Buat** template HTML baru dengan struktur konten yang sesuai
- **Tambahkan** route baru ke objek konfigurasi route Anda
- **Sertakan** tautan navigasi ke dan dari halaman kredit
- **Uji** bahwa semua navigasi berfungsi dengan benar dengan riwayat browser

## Kuis Pasca-Kuliah

[Kuis pasca-kuliah](https://ff-quizzes.netlify.app/web/quiz/42)

## Tinjauan & Studi Mandiri

Routing adalah salah satu bagian yang cukup rumit dalam pengembangan web, terutama saat web beralih dari perilaku refresh halaman ke refresh halaman Aplikasi Satu Halaman. Bacalah sedikit tentang [bagaimana layanan Azure Static Web App](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon) menangani routing. Bisakah Anda menjelaskan mengapa beberapa keputusan yang dijelaskan dalam dokumen tersebut diperlukan?

**Sumber belajar tambahan:**
- **Jelajahi** bagaimana framework populer seperti React Router dan Vue Router mengimplementasikan routing sisi klien
- **Teliti** perbedaan antara routing berbasis hash dan routing API history
- **Pelajari** tentang rendering sisi server (SSR) dan bagaimana hal itu memengaruhi strategi routing
- **Investigasi** bagaimana Progressive Web Apps (PWAs) menangani routing dan navigasi

## Tugas

[Tingkatkan routing](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diperhatikan bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang timbul dari penggunaan terjemahan ini.