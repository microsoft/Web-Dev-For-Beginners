# Projek Pelanjutan Penyemak Imbas Bahagian 1: Semua mengenai Penyemak Imbas

![Sketchnote penyemak imbas](/sketchnotes/browser.jpg)
> Sketchnote karya [Wassim Chegham](https://dev.to/wassimchegham/ever-wondered-what-happens-when-you-type-in-a-url-in-an-address-bar-in-a-browser-3dob)

## Kuiz Pra Kuliah

[Kuiz Pra Kuliah](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/23)

### Pengenalan

Sambungan penyemak imbas menambah fungsi tambahan pada penyemak imbas. Tetapi sebelum anda membuatnya, anda harus mengetahui sedikit tentang bagaimana penyemak imbas melakukan kerja mereka.

### Mengenai penyemak imbas

Dalam siri pelajaran ini, anda akan belajar bagaimana membina pelanjutan penyemak imbas yang akan berfungsi pada penyemak imbas Chrome, Firefox dan Edge. Di bahagian ini, anda akan mengetahui cara penyemak imbas berfungsi dan memaparkan elemen pelanjutan penyemak imbas.

Tetapi apakah sebenarnya penyemak imbas itu? Ini adalah aplikasi perisian yang memungkinkan pengguna akhir mengakses kandungan dari pelayan dan memaparkannya di laman web.

✅ Sejarah sedikit: penyemak imbas pertama dipanggil 'WorldWideWeb' dan dicipta oleh Sir Timothy Berners-Lee pada tahun 1990.

![penyemak imbas awal](../images/earlybrowsers.jpg)
> Beberapa penyemak imbas awal, melalui [Karen McGrane](https://www.slideshare.net/KMcGrane/week-4-ixd-history-personal-computing)

Apabila pengguna tersambung ke internet menggunakan alamat URL (Uniform Resource Locator), biasanya menggunakan Hypertext Transfer Protocol melalui alamat `http` atau `https`, penyemak imbas berkomunikasi dengan pelayan web dan mengambil halaman web.

Pada titik ini, mesin rendering penyemak imbas memaparkannya pada perangkat pengguna, yang mungkin merupakan telefon bimbit, desktop, atau komputer riba.

Penyemak imbas juga memiliki kemampuan untuk menyimpan konten sehingga tidak perlu diambil dari pelayan setiap masa. Mereka dapat mencatat sejarah aktiviti menyemak imbas pengguna, menyimpan 'kuki', yang merupakan sekumpulan kecil data yang mengandungi maklumat yang digunakan untuk menyimpan aktiviti pengguna, dan banyak lagi.

Perkara yang sangat penting untuk diingat mengenai penyemak imbas ialah semuanya tidak sama! Setiap penyemak imbas mempunyai kelebihan dan kekurangannya, dan pembangun web profesional perlu memahami cara membuat laman web berfungsi dengan baik di antara penyemak imbas. Ini merangkumi pengendalian ruang pandang kecil seperti telefon bimbit, dan juga pengguna yang berada di luar talian.

Laman web yang sangat berguna yang mungkin anda tandakan dalam penyemak imbas apa pun yang anda mahu gunakan ialah [caniuse.com](https://www.caniuse.com). Semasa anda membina laman web, sangat berguna untuk menggunakan senarai teknologi yang disokong oleh caniuse sehingga anda dapat menyokong pengguna anda dengan sebaik-baiknya.

✅ Bagaimanakah anda dapat mengetahui penyemak imbas apa yang paling popular dengan pangkalan pengguna laman web anda? Periksa analisis anda - anda boleh memasang pelbagai pakej analitik sebagai sebahagian daripada proses pengembangan web anda, dan mereka akan memberitahu anda penyemak imbas apa yang paling banyak digunakan oleh pelbagai penyemak imbas yang popular.

## Pelanjutan Penyemak Imbas

Mengapakah anda mahu membina pelanjutan penyemak imbas? Adalah berguna untuk melampirkan pada penyemak imbas anda apabila anda memerlukan akses cepat ke tugas yang cenderung anda ulang. Contohnya, jika anda perlu memeriksa warna di pelbagai laman web yang anda berinteraksi, anda mungkin memasang pelanjutan penyemak imbas pemilih warna. Sekiranya anda menghadapi masalah mengingat kata laluan, anda mungkin menggunakan pelanjutan penyemak imbas pengurusan kata laluan.

Pelanjutan penyemak imbas juga senang dikembangkan. Mereka cenderung menguruskan sejumlah tugas yang mereka laksanakan dengan baik.

✅ Apakah pelanjutan penyemak imbas kegemaran anda? Tugas apa yang mereka laksanakan?

### Memuat turun pelanjutan penyemak imbas

Sebelum anda mula membina, lihatlah proses membina dan menggunakan pelanjutan penyemak imbas. Walaupun setiap penyemak imbas sedikit berbeza dalam cara mereka menguruskan tugas ini, prosesnya serupa di Chrome dan Firefox dengan contoh ini di Edge:

![tangkapan skrin penyemak imbas Edge menunjukkan tepi terbuka://halaman peluasan dan menu tetapan terbuka](../images/install-on-edge.png)

Pada dasarnya, prosesnya adalah:

- buat pelanjutan anda menggunakan `npm build`
- arahkan di penyemak imbas ke panel pelanjutan menggunakan butang "Tetapan dan lain-lain" (ikon `...`) di kanan atas
- jika ia adalah pemasangan baru, pilih `load unpacked` untuk memuat naik ekstensi baru dari folder buildnya (dalam kes kami adalah `/ dist`)
- atau, klik `reload` jika anda memuat semula pelanjutan yang sudah dipasang

✅ Arahan ini berkaitan dengan sambungan yang anda buat sendiri; untuk memasang pelanjutan yang telah dilepaskan ke kedai pelanjutan penyemak imbas yang berkaitan dengan setiap penyemak imbas, anda harus menavigasi ke [kedai](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home) dan pasang pelanjutan pilihan anda.

### Bermula Di Sini

Anda akan membina pelanjutan penyemak imbas yang memaparkan jejak karbon wilayah anda, menunjukkan penggunaan tenaga wilayah anda dan sumber tenaga. Pelanjutan penyemak imbas tersebut akan mempunyai bentuk yang mengumpulkan kunci API sehingga anda dapat mengaksesnya
CO2 Signal's API.

**Keperluan:**

- [kunci API](https://www.co2signal.com/); masukkan e-mel anda di dalam kotak di halaman ini dan satu akan dihantar kepada anda
- [kod untuk wilayah anda](http://api.electricitymap.org/v3/zones) yang sesuai dengan [Peta Elektrik](https://www.electricitymap.org/map) (di Boston, misalnya, Saya menggunakan 'US-NEISO').
- [kod pemula](../start). Muat turun folder `start`; anda akan melengkapkan kod dalam folder ini.
- [NPM](https://www.npmjs.com) - NPM adalah alat pengurusan pakej; memasangnya secara tempatan dan pakej yang disenaraikan dalam fail `package.json` anda akan dipasang untuk digunakan oleh aset web anda

✅ Ketahui lebih lanjut mengenai pengurusan pakej dalam [modul pembelajaran yang sangat baik](https://docs.microsoft.com/learn/modules/create-nodejs-project-dependencies/)

Luangkan masa sebentar untuk melihat pangkalan kode:

dist
    -|manifest.json (lalai ditetapkan di sini)
    -|index.html (front-end HTML markup di sini)
    -|background.js (latar belakang JS di sini)
    -|main.js (membina JS)
src
    -|index.js (kod JS anda ada di sini)

✅ Setelah anda mempunyai kunci API dan kod Wilayah yang berguna, simpan di suatu tempat dalam nota untuk penggunaan masa depan.

### Bina HTML untuk pelanjutan penyemak imbas

Pelanjutan penyemak imbas ini mempunyai dua pandangan. Satu untuk mengumpulkan kunci API dan kod wilayah:

![tangkapan skrin pelanjutan selesai dibuka di penyemak imbas, menampilkan borang dengan input untuk nama wilayah dan kunci API.](../images/1.png)

Dan yang kedua untuk memaparkan penggunaan karbon di rantau ini:

![tangkapan skrin pelanjutan lengkap yang menunjukkan nilai untuk penggunaan karbon dan peratusan bahan bakar fosil untuk wilayah AS-NEISO.](images/2.png)

Mari mulakan dengan membina HTML untuk borang dan menggayakannya dengan CSS.

Dalam folder `/ dist`, anda akan membina borang dan kawasan hasil. Dalam fail `index.html`, isikan kawasan borang yang digambarkan:

```HTML
<form class="form-data" autocomplete="on">
	<div>
		<h2>Baru? Tambahkan Maklumat anda</h2>
	</div>
	<div>
		<label for="region">Nama Wilayah</label>
		<input type="text" id="region" required class="region-name" />
	</div>
	<div>
		<label for="api">Kunci API anda dari tmrow</label>
		<input type="text" id="api" required class="api-key" />
	</div>
	<button class="search-btn">Hantar</button>
</form>	
```
Ini adalah bentuk di mana maklumat yang anda simpan akan dimasukkan dan disimpan ke simpanan tempatan.

Seterusnya, buat kawasan hasil; di bawah tag borang akhir, tambahkan beberapa divs:

```HTML
<div class="result">
	<div class="loading">loading...</div>
	<div class="errors"></div>
	<div class="data"></div>
	<div class="result-container">
		<p><strong>Wilayah: </strong><span class="my-region"></span></p>
		<p><strong>Penggunaan Karbon: </strong><span class="carbon-usage"></span></p>
		<p><strong>Peratusan Bahan Bakar Fosil: </strong><span class="fossil-fuel"></span></p>
	</div>
	<button class="clear-btn">Tukar wilayah</button>
</div>
```
Pada ketika ini, anda boleh mencuba binaan. Pastikan memasang pergantungan pakej pelanjutan ini:

```
npm install
```

Perintah ini akan menggunakan npm, Pengurus Pakej Node, untuk memasang paket web untuk proses pembuatan pelanjutan anda. Webpack adalah bundler yang mengendalikan menyusun kod. Anda dapat melihat output proses ini dengan melihat di `/dist/main.js` - anda melihat kodnya telah digabungkan.

Buat masa ini, pelanjutan penyemak imbas perlu dibina dan, jika anda menyebarkannya ke Edge sebagai pelanjutan, anda akan melihat borang yang dipaparkan dengan kemas.

Tahniah, anda telah mengambil langkah pertama untuk membina pelanjutan penyemak imbas. Dalam pelajaran seterusnya, anda akan menjadikannya lebih berfungsi dan berguna.

---

## 🚀 Cabaran

Lihatlah kedai pelanjutan penyemak imbas dan pasang satu di penyemak imbas anda. Anda boleh memeriksa failnya dengan cara yang menarik. Apa yang anda dapati?

## Kuiz Pasca Kuliah

[Kuiz Pasca Kuliah](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/24)

## Mengkaji dan Belajar Sendiri

Dalam pelajaran ini anda belajar sedikit mengenai sejarah penyemak imbas web; ambil kesempatan ini untuk mengetahui bagaimana pencipta World Wide Web membayangkan penggunaannya dengan membaca lebih banyak mengenai sejarahnya. Beberapa laman web yang berguna termasuk:

[Sejarah Penyemak Imbas Web](https://www.mozilla.org/firefox/browsers/browser-history/)

[Sejarah Tentang Web](https://webfoundation.org/about/vision/history-of-the-web/)

[Temu ramah dengan Tim Berners-Lee](https://www.theguardian.com/technology/2019/mar/12/tim-berners-lee-on-30-years-of-the-web-if-we-dream-a-little-we-can-get-the-web-we-want)

## Tugasan

[Mengayakan semula penlanjut penyemak imbas](assignment.ms.md)

