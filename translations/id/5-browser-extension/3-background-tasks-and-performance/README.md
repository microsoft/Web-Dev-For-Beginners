<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f198c6b817b4b2a99749f4662e7cae98",
  "translation_date": "2025-08-27T22:20:14+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "id"
}
-->
# Proyek Ekstensi Browser Bagian 3: Pelajari Tentang Tugas Latar Belakang dan Performa

## Kuis Pra-Pelajaran

[Kuis pra-pelajaran](https://ff-quizzes.netlify.app/web/quiz/27)

### Pendahuluan

Dalam dua pelajaran terakhir dari modul ini, Anda telah belajar cara membuat formulir dan area tampilan untuk data yang diambil dari API. Ini adalah cara yang sangat standar untuk menciptakan kehadiran web di internet. Anda bahkan telah belajar cara menangani pengambilan data secara asinkron. Ekstensi browser Anda hampir selesai.

Yang tersisa adalah mengelola beberapa tugas latar belakang, termasuk menyegarkan warna ikon ekstensi. Ini adalah waktu yang tepat untuk membahas bagaimana browser mengelola jenis tugas ini. Mari kita pikirkan tugas-tugas browser ini dalam konteks performa aset web Anda saat Anda membangunnya.

## Dasar-Dasar Performa Web

> "Performa situs web berkaitan dengan dua hal: seberapa cepat halaman dimuat, dan seberapa cepat kode di dalamnya berjalan." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Topik tentang cara membuat situs web Anda sangat cepat di berbagai jenis perangkat, untuk berbagai jenis pengguna, dalam berbagai situasi, tentu saja sangat luas. Berikut adalah beberapa poin yang perlu diingat saat Anda membangun proyek web standar atau ekstensi browser.

Hal pertama yang perlu Anda lakukan untuk memastikan situs Anda berjalan dengan efisien adalah mengumpulkan data tentang performanya. Tempat pertama untuk melakukannya adalah di alat pengembang browser web Anda. Di Edge, Anda dapat memilih tombol "Settings and more" (ikon tiga titik di kanan atas browser), lalu navigasikan ke More Tools > Developer Tools dan buka tab Performance. Anda juga dapat menggunakan pintasan keyboard `Ctrl` + `Shift` + `I` di Windows atau `Option` + `Command` + `I` di Mac untuk membuka alat pengembang.

Tab Performance berisi alat Profiling. Buka sebuah situs web (coba, misalnya, [https://www.microsoft.com](https://www.microsoft.com/?WT.mc_id=academic-77807-sagibbon)) dan klik tombol 'Record', lalu segarkan situs tersebut. Hentikan rekaman kapan saja, dan Anda akan dapat melihat rutinitas yang dihasilkan untuk 'script', 'render', dan 'paint' situs tersebut:

![Edge profiler](../../../../translated_images/profiler.5a4a62479c5df01cfec9aab74173dba13f91d2c968e1a1ae434c26165792df15.id.png)

✅ Kunjungi [Dokumentasi Microsoft](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) tentang panel Performance di Edge

> Tip: untuk mendapatkan pembacaan yang akurat tentang waktu startup situs web Anda, kosongkan cache browser Anda

Pilih elemen dari garis waktu profil untuk memperbesar peristiwa yang terjadi saat halaman Anda dimuat.

Dapatkan snapshot performa halaman Anda dengan memilih bagian dari garis waktu profil dan melihat panel ringkasan:

![Edge profiler snapshot](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.id.png)

Periksa panel Event Log untuk melihat apakah ada peristiwa yang memakan waktu lebih dari 15 ms:

![Edge event log](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.id.png)

✅ Kenali profiler Anda! Buka alat pengembang di situs ini dan lihat apakah ada hambatan. Apa aset yang paling lambat dimuat? Yang tercepat?

## Pemeriksaan Profiling

Secara umum, ada beberapa "area masalah" yang harus diperhatikan setiap pengembang web saat membangun situs untuk menghindari kejutan buruk saat tiba waktunya untuk menerapkan ke produksi.

**Ukuran aset**: Web menjadi lebih 'berat', dan dengan demikian lebih lambat, selama beberapa tahun terakhir. Sebagian dari berat ini berkaitan dengan penggunaan gambar.

✅ Lihat melalui [Internet Archive](https://httparchive.org/reports/page-weight) untuk pandangan historis tentang berat halaman dan lainnya.

Praktik yang baik adalah memastikan bahwa gambar Anda dioptimalkan dan disampaikan pada ukuran dan resolusi yang tepat untuk pengguna Anda.

**Traversals DOM**: Browser harus membangun Document Object Model berdasarkan kode yang Anda tulis, jadi demi performa halaman yang baik, penting untuk menjaga tag seminimal mungkin, hanya menggunakan dan menata apa yang dibutuhkan halaman. Dalam hal ini, CSS berlebih yang terkait dengan halaman dapat dioptimalkan; gaya yang hanya perlu digunakan di satu halaman tidak perlu dimasukkan dalam lembar gaya utama, misalnya.

**JavaScript**: Setiap pengembang JavaScript harus memperhatikan skrip 'render-blocking' yang harus dimuat sebelum sisa DOM dapat ditelusuri dan di-paint ke browser. Pertimbangkan untuk menggunakan `defer` dengan skrip inline Anda (seperti yang dilakukan dalam modul Terrarium).

✅ Coba beberapa situs di [Situs Uji Kecepatan](https://www.webpagetest.org/) untuk mempelajari lebih lanjut tentang pemeriksaan umum yang dilakukan untuk menentukan performa situs.

Sekarang Anda memiliki gambaran tentang bagaimana browser merender aset yang Anda kirimkan kepadanya, mari kita lihat beberapa hal terakhir yang perlu Anda lakukan untuk menyelesaikan ekstensi Anda:

### Buat fungsi untuk menghitung warna

Bekerja di `/src/index.js`, tambahkan fungsi bernama `calculateColor()` setelah serangkaian variabel `const` yang Anda tetapkan untuk mendapatkan akses ke DOM:

```JavaScript
function calculateColor(value) {
	let co2Scale = [0, 150, 600, 750, 800];
	let colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	let closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	console.log(value + ' is closest to ' + closestNum);
	let num = (element) => element > closestNum;
	let scaleIndex = co2Scale.findIndex(num);

	let closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

Apa yang terjadi di sini? Anda memasukkan nilai (intensitas karbon) dari panggilan API yang Anda selesaikan di pelajaran terakhir, lalu Anda menghitung seberapa dekat nilainya dengan indeks yang disajikan dalam array warna. Kemudian Anda mengirimkan nilai warna terdekat tersebut ke runtime chrome.

Chrome.runtime memiliki [API](https://developer.chrome.com/extensions/runtime) yang menangani berbagai jenis tugas latar belakang, dan ekstensi Anda memanfaatkan itu:

> "Gunakan API chrome.runtime untuk mengambil halaman latar belakang, mengembalikan detail tentang manifest, dan mendengarkan serta merespons peristiwa dalam siklus hidup aplikasi atau ekstensi. Anda juga dapat menggunakan API ini untuk mengonversi jalur relatif URL menjadi URL yang sepenuhnya memenuhi syarat."

✅ Jika Anda mengembangkan ekstensi browser ini untuk Edge, mungkin mengejutkan Anda bahwa Anda menggunakan API chrome. Versi browser Edge yang lebih baru berjalan di mesin browser Chromium, sehingga Anda dapat memanfaatkan alat ini.

> Catatan, jika Anda ingin memprofil ekstensi browser, luncurkan alat pengembang dari dalam ekstensi itu sendiri, karena ini adalah instance browser yang terpisah.

### Tetapkan warna ikon default

Sekarang, dalam fungsi `init()`, tetapkan ikon menjadi hijau generik untuk memulai dengan kembali memanggil aksi `updateIcon` dari chrome:

```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```

### Panggil fungsi, eksekusi panggilan

Selanjutnya, panggil fungsi yang baru saja Anda buat dengan menambahkannya ke promise yang dikembalikan oleh API C02Signal:

```JavaScript
//let CO2...
calculateColor(CO2);
```

Dan akhirnya, di `/dist/background.js`, tambahkan pendengar untuk panggilan aksi latar belakang ini:

```JavaScript
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.browserAction.setIcon({ imageData: drawIcon(msg.value) });
	}
});
//borrowed from energy lollipop extension, nice feature!
function drawIcon(value) {
	let canvas = document.createElement('canvas');
	let context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	return context.getImageData(50, 50, 100, 100);
}
```

Dalam kode ini, Anda menambahkan pendengar untuk pesan apa pun yang datang ke pengelola tugas latar belakang. Jika disebut 'updateIcon', maka kode berikut dijalankan untuk menggambar ikon dengan warna yang sesuai menggunakan Canvas API.

✅ Anda akan belajar lebih banyak tentang Canvas API di [pelajaran Space Game](../../6-space-game/2-drawing-to-canvas/README.md).

Sekarang, bangun ulang ekstensi Anda (`npm run build`), segarkan dan luncurkan ekstensi Anda, dan perhatikan perubahan warna. Apakah ini waktu yang tepat untuk menjalankan tugas atau mencuci piring? Sekarang Anda tahu!

Selamat, Anda telah membangun ekstensi browser yang berguna dan belajar lebih banyak tentang cara kerja browser serta cara memprofil performanya.

---

## 🚀 Tantangan

Selidiki beberapa situs web open source yang telah ada sejak lama, dan, berdasarkan sejarah GitHub mereka, lihat apakah Anda dapat menentukan bagaimana mereka dioptimalkan selama bertahun-tahun untuk performa, jika ada. Apa titik masalah yang paling umum?

## Kuis Pasca-Pelajaran

[Kuis pasca-pelajaran](https://ff-quizzes.netlify.app/web/quiz/28)

## Tinjauan & Studi Mandiri

Pertimbangkan untuk mendaftar ke [newsletter performa](https://perf.email/)

Selidiki beberapa cara browser mengukur performa web dengan melihat melalui tab performa di alat web mereka. Apakah Anda menemukan perbedaan besar?

## Tugas

[Analisis situs untuk performa](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diingat bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.