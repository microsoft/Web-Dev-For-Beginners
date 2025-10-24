<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "eb358f3f4c2c082f9f3a4f98efa1d337",
  "translation_date": "2025-10-24T14:17:35+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "id"
}
-->
# Proyek Ekstensi Browser Bagian 3: Pelajari Tugas Latar Belakang dan Performa

Pernah bertanya-tanya mengapa beberapa ekstensi browser terasa cepat dan responsif sementara yang lain terasa lambat? Rahasianya terletak pada apa yang terjadi di balik layar. Saat pengguna mengklik antarmuka ekstensi Anda, ada dunia proses latar belakang yang diam-diam mengelola pengambilan data, pembaruan ikon, dan sumber daya sistem.

Ini adalah pelajaran terakhir dalam seri ekstensi browser, dan kita akan membuat pelacak jejak karbon Anda bekerja dengan lancar. Anda akan menambahkan pembaruan ikon dinamis dan belajar cara mendeteksi masalah performa sebelum menjadi masalah besar. Ini seperti menyetel mobil balap - optimasi kecil dapat membuat perbedaan besar dalam cara semuanya berjalan.

Saat kita selesai, Anda akan memiliki ekstensi yang terpolish dan memahami prinsip performa yang membedakan aplikasi web yang baik dari yang hebat. Mari kita selami dunia optimasi browser.

## Kuis Pra-Pelajaran

[Kuis pra-pelajaran](https://ff-quizzes.netlify.app/web/quiz/27)

### Pendahuluan

Dalam pelajaran sebelumnya, Anda telah membuat formulir, menghubungkannya ke API, dan menangani pengambilan data asinkron. Ekstensi Anda mulai terbentuk dengan baik.

Sekarang kita perlu menambahkan sentuhan akhir - seperti membuat ikon ekstensi berubah warna berdasarkan data karbon. Ini mengingatkan saya pada bagaimana NASA harus mengoptimalkan setiap sistem di pesawat ruang angkasa Apollo. Mereka tidak bisa membuang siklus atau memori karena performa sangat penting. Meskipun ekstensi browser kita tidak sepenting itu, prinsip yang sama berlaku - kode yang efisien menciptakan pengalaman pengguna yang lebih baik.

## Dasar-Dasar Performa Web

Ketika kode Anda berjalan dengan efisien, orang benar-benar *merasakan* perbedaannya. Anda tahu momen ketika sebuah halaman langsung dimuat atau animasi mengalir dengan lancar? Itu adalah performa yang baik.

Performa bukan hanya tentang kecepatan - ini tentang menciptakan pengalaman web yang terasa alami daripada kaku dan membuat frustrasi. Pada masa awal komputasi, Grace Hopper terkenal menyimpan nanodetik (seutas kawat sepanjang sekitar satu kaki) di mejanya untuk menunjukkan seberapa jauh cahaya bergerak dalam satu miliar detik. Itu adalah cara dia menjelaskan mengapa setiap mikrodetik penting dalam komputasi. Mari kita jelajahi alat detektif yang membantu Anda mencari tahu apa yang memperlambat segalanya.

> "Performa situs web adalah tentang dua hal: seberapa cepat halaman dimuat, dan seberapa cepat kode di dalamnya berjalan." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Topik tentang cara membuat situs web Anda sangat cepat di semua jenis perangkat, untuk semua jenis pengguna, dalam semua jenis situasi, tentu saja sangat luas. Berikut adalah beberapa poin yang perlu diingat saat Anda membangun proyek web standar atau ekstensi browser.

Langkah pertama dalam mengoptimalkan situs Anda adalah memahami apa yang sebenarnya terjadi di balik layar. Untungnya, browser Anda dilengkapi dengan alat detektif yang kuat.

Untuk membuka Developer Tools di Edge, klik tiga titik di sudut kanan atas, lalu pergi ke More Tools > Developer Tools. Atau gunakan pintasan keyboard: `Ctrl` + `Shift` + `I` di Windows atau `Option` + `Command` + `I` di Mac. Setelah Anda berada di sana, klik tab Performance - di sinilah Anda akan melakukan investigasi.

**Berikut adalah alat detektif performa Anda:**
- **Buka** Developer Tools (Anda akan sering menggunakannya sebagai pengembang!)
- **Pergi** ke tab Performance - anggap ini sebagai pelacak kebugaran aplikasi web Anda
- **Tekan** tombol Record dan lihat halaman Anda beraksi
- **Pelajari** hasilnya untuk menemukan apa yang memperlambat segalanya

Mari kita coba ini. Buka sebuah situs web (Microsoft.com cukup baik untuk ini) dan klik tombol 'Record'. Sekarang segarkan halaman dan lihat profiler menangkap semua yang terjadi. Ketika Anda berhenti merekam, Anda akan melihat rincian mendetail tentang bagaimana browser 'scripts', 'renders', dan 'paints' situs tersebut. Ini mengingatkan saya pada bagaimana pusat kendali memantau setiap sistem selama peluncuran roket - Anda mendapatkan data waktu nyata tentang apa yang terjadi dan kapan.

✅ [Dokumentasi Microsoft](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) memiliki banyak detail jika Anda ingin mendalami lebih jauh.

> Tip: Bersihkan cache browser Anda sebelum menguji untuk melihat bagaimana situs Anda tampil untuk pengunjung pertama kali - biasanya sangat berbeda dari kunjungan ulang!

Pilih elemen dari timeline profil untuk memperbesar peristiwa yang terjadi saat halaman Anda dimuat.

Dapatkan snapshot performa halaman Anda dengan memilih bagian dari timeline profil dan melihat panel ringkasan:

![Edge profiler snapshot](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.id.png)

Periksa panel Event Log untuk melihat apakah ada peristiwa yang memakan waktu lebih dari 15 ms:

![Edge event log](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.id.png)

✅ Kenali profiler Anda! Buka developer tools di situs ini dan lihat apakah ada hambatan. Apa aset yang paling lambat dimuat? Yang tercepat?

## Apa yang Dicari Saat Profiling

Menjalankan profiler hanyalah permulaan - keterampilan sebenarnya adalah mengetahui apa yang sebenarnya dikatakan oleh grafik berwarna-warni tersebut. Jangan khawatir, Anda akan terbiasa membacanya. Pengembang berpengalaman telah belajar mengenali tanda-tanda peringatan sebelum menjadi masalah besar.

Mari kita bicara tentang pelaku masalah performa yang biasanya menyelinap ke dalam proyek web. Seperti bagaimana Marie Curie harus memantau tingkat radiasi di labnya dengan hati-hati, kita perlu mengawasi pola tertentu yang menunjukkan masalah yang sedang berkembang. Menangkap ini lebih awal akan menghemat banyak frustrasi bagi Anda (dan pengguna Anda).

**Ukuran aset**: Situs web telah menjadi semakin "berat" selama bertahun-tahun, dan banyak dari berat tambahan itu berasal dari gambar. Ini seperti kita terus memasukkan lebih banyak barang ke dalam koper digital kita.

✅ Lihat [Internet Archive](https://httparchive.org/reports/page-weight) untuk melihat bagaimana ukuran halaman telah berkembang dari waktu ke waktu - ini cukup mengungkapkan.

**Berikut cara menjaga aset Anda tetap optimal:**
- **Kompres** gambar-gambar tersebut! Format modern seperti WebP dapat memangkas ukuran file secara dramatis
- **Sajikan** ukuran gambar yang tepat untuk setiap perangkat - tidak perlu mengirim gambar desktop besar ke ponsel
- **Minify** CSS dan JavaScript Anda - setiap byte penting
- **Gunakan** lazy loading sehingga gambar hanya diunduh saat pengguna benar-benar menggulir ke sana

**Traversals DOM**: Browser harus membangun Document Object Model berdasarkan kode yang Anda tulis, jadi demi performa halaman yang baik, pertahankan tag seminimal mungkin, hanya menggunakan dan menata apa yang dibutuhkan halaman. Dalam hal ini, CSS berlebih yang terkait dengan halaman dapat dioptimalkan; gaya yang hanya perlu digunakan di satu halaman tidak perlu dimasukkan dalam lembar gaya utama, misalnya.

**Strategi utama untuk optimasi DOM:**
- **Minimalkan** jumlah elemen HTML dan tingkat nesting
- **Hapus** aturan CSS yang tidak digunakan dan konsolidasikan lembar gaya secara efisien
- **Organisasikan** CSS untuk memuat hanya yang diperlukan untuk setiap halaman
- **Strukturkan** HTML secara semantik untuk parsing browser yang lebih baik

**JavaScript**: Setiap pengembang JavaScript harus memperhatikan skrip 'render-blocking' yang harus dimuat sebelum sisa DOM dapat ditelusuri dan di-paint ke browser. Pertimbangkan menggunakan `defer` dengan skrip inline Anda (seperti yang dilakukan dalam modul Terrarium).

**Teknik optimasi JavaScript modern:**
- **Gunakan** atribut `defer` untuk memuat skrip setelah parsing DOM
- **Implementasikan** code splitting untuk memuat JavaScript yang diperlukan saja
- **Terapkan** lazy loading untuk fungsi yang tidak kritis
- **Minimalkan** penggunaan pustaka dan framework yang berat jika memungkinkan

✅ Coba beberapa situs di [Situs Uji Kecepatan](https://www.webpagetest.org/) untuk mempelajari lebih lanjut tentang pemeriksaan umum yang dilakukan untuk menentukan performa situs.

Sekarang Anda memiliki gambaran tentang bagaimana browser merender aset yang Anda kirimkan, mari kita lihat beberapa hal terakhir yang perlu Anda lakukan untuk menyelesaikan ekstensi Anda:

### Buat fungsi untuk menghitung warna

Sekarang kita akan membuat fungsi yang mengubah data numerik menjadi warna yang bermakna. Anggap ini seperti sistem lampu lalu lintas - hijau untuk energi bersih, merah untuk intensitas karbon tinggi.

Fungsi ini akan mengambil data CO2 dari API kita dan menentukan warna apa yang paling mewakili dampak lingkungan. Ini mirip dengan bagaimana para ilmuwan menggunakan kode warna dalam peta panas untuk memvisualisasikan pola data yang kompleks - dari suhu laut hingga pembentukan bintang. Tambahkan ini ke `/src/index.js`, tepat setelah variabel `const` yang kita tetapkan sebelumnya:

```javascript
function calculateColor(value) {
	// Define CO2 intensity scale (grams per kWh)
	const co2Scale = [0, 150, 600, 750, 800];
	// Corresponding colors from green (clean) to dark brown (high carbon)
	const colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	// Find the closest scale value to our input
	const closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	
	console.log(`${value} is closest to ${closestNum}`);
	
	// Find the index for color mapping
	const num = (element) => element > closestNum;
	const scaleIndex = co2Scale.findIndex(num);

	const closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	// Send color update message to background script
	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

**Mari kita uraikan fungsi kecil yang cerdas ini:**
- **Menyiapkan** dua array - satu untuk tingkat CO2, satu lagi untuk warna (hijau = bersih, coklat = kotor!)
- **Menemukan** kecocokan terdekat dengan nilai CO2 aktual kita menggunakan beberapa sorting array yang rapi
- **Mengambil** warna yang cocok menggunakan metode findIndex()
- **Mengirim** pesan ke skrip latar belakang Chrome dengan warna yang dipilih
- **Menggunakan** template literals (backticks) untuk format string yang lebih bersih
- **Menjaga** semuanya terorganisir dengan deklarasi const

API `chrome.runtime` [API](https://developer.chrome.com/extensions/runtime) seperti sistem saraf ekstensi Anda - ini menangani semua komunikasi dan tugas di balik layar:

> "Gunakan API chrome.runtime untuk mengambil halaman latar belakang, mengembalikan detail tentang manifest, dan mendengarkan serta merespons peristiwa dalam siklus hidup aplikasi atau ekstensi. Anda juga dapat menggunakan API ini untuk mengonversi jalur relatif URL menjadi URL yang sepenuhnya memenuhi syarat."

**Mengapa API Chrome Runtime sangat berguna:**
- **Memungkinkan** bagian-bagian berbeda dari ekstensi Anda berbicara satu sama lain
- **Menangani** pekerjaan latar belakang tanpa membekukan antarmuka pengguna
- **Mengelola** peristiwa siklus hidup ekstensi Anda
- **Membuat** pengiriman pesan antar skrip menjadi sangat mudah

✅ Jika Anda mengembangkan ekstensi browser ini untuk Edge, mungkin mengejutkan Anda bahwa Anda menggunakan API chrome. Versi browser Edge yang lebih baru berjalan di mesin browser Chromium, sehingga Anda dapat memanfaatkan alat ini.

> **Tip**: Jika Anda ingin memprofil ekstensi browser, buka dev tools dari dalam ekstensi itu sendiri, karena ini adalah instance browser yang terpisah. Ini memberi Anda akses ke metrik performa khusus ekstensi.

### Tetapkan warna ikon default

Sebelum kita mulai mengambil data nyata, mari kita beri ekstensi kita titik awal. Tidak ada yang suka melihat ikon yang kosong atau terlihat rusak. Kita akan mulai dengan warna hijau sehingga pengguna tahu ekstensi berfungsi sejak saat mereka menginstalnya.

Dalam fungsi `init()` Anda, mari kita atur ikon hijau default itu:

```javascript
chrome.runtime.sendMessage({
	action: 'updateIcon',
	value: {
		color: 'green',
	},
});
```

**Apa yang dicapai oleh inisialisasi ini:**
- **Menetapkan** warna hijau netral sebagai keadaan default
- **Memberikan** umpan balik visual langsung saat ekstensi dimuat
- **Membangun** pola komunikasi dengan skrip latar belakang
- **Memastikan** pengguna melihat ekstensi yang berfungsi sebelum data dimuat

### Panggil fungsi, eksekusi panggilan

Sekarang mari kita hubungkan semuanya sehingga ketika data CO2 baru masuk, ikon Anda secara otomatis diperbarui dengan warna yang tepat. Ini seperti menghubungkan sirkuit terakhir dalam perangkat elektronik - tiba-tiba semua komponen individu bekerja sebagai satu sistem.

Tambahkan baris ini tepat setelah Anda mendapatkan data CO2 dari API:

```javascript
// After retrieving CO2 data from the API
// let CO2 = data.data[0].intensity.actual;
calculateColor(CO2);
```

**Integrasi ini mencapai:**
- **Menghubungkan** aliran data API dengan sistem indikator visual
- **Memicu** pembaruan ikon secara otomatis saat data baru tiba
- **Memastikan** umpan balik visual waktu nyata berdasarkan intensitas karbon saat ini
- **Mempertahankan** pemisahan perhatian antara pengambilan data dan logika tampilan

Dan akhirnya, di `/dist/background.js`, tambahkan pendengar untuk panggilan aksi latar belakang ini:

```javascript
// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.action.setIcon({ imageData: drawIcon(msg.value) });
	}
});

// Draw dynamic icon using Canvas API
// Borrowed from energy lollipop extension - nice feature!
function drawIcon(value) {
	// Create an offscreen canvas for better performance
	const canvas = new OffscreenCanvas(200, 200);
	const context = canvas.getContext('2d');

	// Draw a colored circle representing carbon intensity
	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	// Return the image data for the browser icon
	return context.getImageData(50, 50, 100, 100);
}
```

**Apa yang dilakukan skrip latar belakang ini:**
- **Mendengarkan** pesan dari skrip utama Anda (seperti resepsionis yang menerima panggilan)
- **Memproses** permintaan 'updateIcon' untuk mengubah ikon toolbar Anda
- **Membuat** ikon baru secara langsung menggunakan Canvas API
- **Menggambar** lingkaran berwarna sederhana yang menunjukkan intensitas karbon saat ini
- **Memperbarui** toolbar browser Anda dengan ikon baru
- **Menggunakan** OffscreenCanvas untuk performa yang lancar (tanpa UI yang terblokir)

✅ Anda akan belajar lebih banyak tentang Canvas API dalam [pelajaran Space Game](../../6-space-game/2-drawing-to-canvas/README.md).

**Saatnya menguji ekstensi Anda:**
- **Bangun** semuanya dengan `npm run build`
- **Muat ulang** ekstensi Anda di browser (jangan lupa langkah ini)
- **Buka** ekstensi Anda dan lihat ikon itu berubah warna
- **Periksa** bagaimana ia merespons data karbon nyata dari seluruh dunia

Sekarang Anda akan tahu sekilas apakah ini waktu yang baik untuk mencuci pakaian atau jika Anda harus menunggu energi yang lebih bersih. Anda baru saja membangun sesuatu yang benar-benar berguna dan belajar tentang performa browser di sepanjang jalan.

## Tantangan Agen GitHub Copilot 🚀

Gunakan mode Agen untuk menyelesaikan tantangan berikut:

**Deskripsi:** Tingkatkan kemampuan pemantauan performa ekstensi browser dengan menambahkan fitur yang melacak dan menampilkan waktu muat untuk berbagai komponen ekstensi.

**Prompt:** Buat sistem pemantauan performa untuk ekstensi browser yang mengukur dan mencatat waktu yang diperlukan untuk mengambil data CO2 dari API, menghitung warna, dan memperbarui ikon. Tambahkan fungsi bernama `performanceTracker` yang menggunakan Performance API untuk mengukur operasi ini dan menampilkan hasilnya di konsol browser dengan stempel waktu dan metrik durasi.

Pelajari lebih lanjut tentang [mode agen](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## 🚀 Tantangan
Berikut adalah misi detektif yang menarik: pilih beberapa situs web open source yang telah ada selama bertahun-tahun (seperti Wikipedia, GitHub, atau Stack Overflow) dan telusuri riwayat commit mereka. Bisakah Anda menemukan di mana mereka melakukan peningkatan kinerja? Masalah apa yang terus muncul?

**Pendekatan investigasi Anda:**
- **Cari** pesan commit dengan kata-kata seperti "optimize," "performance," atau "faster"
- **Perhatikan** pola - apakah mereka terus memperbaiki jenis masalah yang sama?
- **Identifikasi** penyebab umum yang memperlambat situs web
- **Bagikan** apa yang Anda temukan - pengembang lain dapat belajar dari contoh nyata

## Kuis Pasca-Kuliah

[Kuis pasca-kuliah](https://ff-quizzes.netlify.app/web/quiz/28)

## Tinjauan & Studi Mandiri

Pertimbangkan untuk mendaftar ke [newsletter tentang kinerja](https://perf.email/)

Selidiki beberapa cara browser mengukur kinerja web dengan melihat tab kinerja di alat web mereka. Apakah Anda menemukan perbedaan besar?

## Tugas

[Analisis situs untuk kinerja](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang timbul dari penggunaan terjemahan ini.