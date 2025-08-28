<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e10f168beac4e7b05e30e0eb5c92bf11",
  "translation_date": "2025-08-27T22:29:17+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "id"
}
-->
# Proyek Ekstensi Browser Bagian 2: Memanggil API, Menggunakan Local Storage

## Kuis Pra-Pelajaran

[Kuis pra-pelajaran](https://ff-quizzes.netlify.app/web/quiz/25)

### Pendahuluan

Dalam pelajaran ini, Anda akan memanggil sebuah API dengan mengirimkan formulir dari ekstensi browser Anda dan menampilkan hasilnya di ekstensi browser tersebut. Selain itu, Anda akan mempelajari cara menyimpan data di local storage browser Anda untuk referensi dan penggunaan di masa mendatang.

✅ Ikuti segmen bernomor di file yang sesuai untuk mengetahui di mana harus meletakkan kode Anda.

### Siapkan elemen untuk dimanipulasi di ekstensi:

Pada tahap ini, Anda telah membuat HTML untuk formulir dan `<div>` hasil untuk ekstensi browser Anda. Mulai sekarang, Anda perlu bekerja di file `/src/index.js` dan membangun ekstensi Anda sedikit demi sedikit. Lihat [pelajaran sebelumnya](../1-about-browsers/README.md) untuk menyiapkan proyek Anda dan proses build-nya.

Bekerja di file `index.js` Anda, mulailah dengan membuat beberapa variabel `const` untuk menyimpan nilai yang terkait dengan berbagai bidang:

```JavaScript
// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// results
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');
```

Semua bidang ini direferensikan oleh class CSS-nya, seperti yang Anda atur di HTML pada pelajaran sebelumnya.

### Tambahkan pendengar acara

Selanjutnya, tambahkan event listener ke formulir dan tombol reset yang mengatur ulang formulir, sehingga jika pengguna mengirimkan formulir atau mengklik tombol reset tersebut, sesuatu akan terjadi. Tambahkan juga pemanggilan untuk menginisialisasi aplikasi di bagian bawah file:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Perhatikan cara singkat yang digunakan untuk mendengarkan acara submit atau klik, dan bagaimana acara tersebut diteruskan ke fungsi handleSubmit atau reset. Bisakah Anda menulis versi panjang dari cara singkat ini? Mana yang Anda lebih suka?

### Bangun fungsi init() dan reset():

Sekarang Anda akan membangun fungsi yang menginisialisasi ekstensi, yang disebut init():

```JavaScript
function init() {
	//if anything is in localStorage, pick it up
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//set icon to be generic green
	//todo

	if (storedApiKey === null || storedRegion === null) {
		//if we don't have the keys, show the form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
        //if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//clear local storage for region only
	localStorage.removeItem('regionName');
	init();
}

```

Dalam fungsi ini, terdapat logika yang menarik. Dengan membaca kode ini, bisakah Anda melihat apa yang terjadi?

- Dua `const` dibuat untuk memeriksa apakah pengguna telah menyimpan APIKey dan kode wilayah di local storage.
- Jika salah satu dari keduanya bernilai null, tampilkan formulir dengan mengubah gayanya menjadi 'block'.
- Sembunyikan area hasil, loading, dan clearBtn, serta atur teks error menjadi string kosong.
- Jika terdapat key dan wilayah, mulai rutinitas untuk:
  - Memanggil API untuk mendapatkan data penggunaan karbon.
  - Sembunyikan area hasil.
  - Sembunyikan formulir.
  - Tampilkan tombol reset.

Sebelum melanjutkan, ada baiknya mempelajari konsep penting yang tersedia di browser: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage adalah cara yang berguna untuk menyimpan string di browser sebagai pasangan `key-value`. Jenis penyimpanan web ini dapat dimanipulasi oleh JavaScript untuk mengelola data di browser. LocalStorage tidak kedaluwarsa, sedangkan SessionStorage, jenis penyimpanan web lainnya, akan dihapus saat browser ditutup. Berbagai jenis penyimpanan memiliki kelebihan dan kekurangan masing-masing.

> Catatan - ekstensi browser Anda memiliki local storage-nya sendiri; jendela browser utama adalah instance yang berbeda dan berperilaku secara terpisah.

Anda menetapkan APIKey Anda untuk memiliki nilai string, misalnya, dan Anda dapat melihat bahwa itu disimpan di Edge dengan "memeriksa" halaman web (Anda dapat mengklik kanan browser untuk memeriksa) dan pergi ke tab Aplikasi untuk melihat penyimpanannya.

![Panel local storage](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.id.png)

✅ Pikirkan situasi di mana Anda TIDAK ingin menyimpan beberapa data di LocalStorage. Secara umum, menempatkan API Key di LocalStorage adalah ide yang buruk! Bisakah Anda melihat alasannya? Dalam kasus kami, karena aplikasi ini murni untuk pembelajaran dan tidak akan diterbitkan di toko aplikasi, kami akan menggunakan metode ini.

Perhatikan bahwa Anda menggunakan Web API untuk memanipulasi LocalStorage, baik dengan menggunakan `getItem()`, `setItem()`, atau `removeItem()`. Ini didukung secara luas di berbagai browser.

Sebelum membangun fungsi `displayCarbonUsage()` yang dipanggil di `init()`, mari kita bangun fungsionalitas untuk menangani pengiriman formulir awal.

### Tangani pengiriman formulir

Buat fungsi bernama `handleSubmit` yang menerima argumen event `(e)`. Hentikan propagasi event (dalam hal ini, kita ingin menghentikan browser dari refresh) dan panggil fungsi baru, `setUpUser`, dengan meneruskan argumen `apiKey.value` dan `region.value`. Dengan cara ini, Anda menggunakan dua nilai yang dimasukkan melalui formulir awal saat bidang yang sesuai diisi.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ Segarkan ingatan Anda - HTML yang Anda buat di pelajaran terakhir memiliki dua input field yang `value`-nya ditangkap melalui `const` yang Anda buat di bagian atas file, dan keduanya `required` sehingga browser menghentikan pengguna dari memasukkan nilai null.

### Atur pengguna

Lanjutkan ke fungsi `setUpUser`, di sinilah Anda menetapkan nilai local storage untuk apiKey dan regionName. Tambahkan fungsi baru:

```JavaScript
function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//make initial call
	displayCarbonUsage(apiKey, regionName);
}
```

Fungsi ini menetapkan pesan loading untuk ditampilkan saat API dipanggil. Pada titik ini, Anda telah sampai pada pembuatan fungsi terpenting dari ekstensi browser ini!

### Tampilkan Penggunaan Karbon

Akhirnya, saatnya untuk melakukan query ke API!

Sebelum melangkah lebih jauh, kita harus membahas API. API, atau [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html), adalah elemen penting dalam kotak alat pengembang web. Mereka menyediakan cara standar bagi program untuk berinteraksi dan berkomunikasi satu sama lain. Misalnya, jika Anda membangun situs web yang perlu melakukan query ke database, seseorang mungkin telah membuat API untuk Anda gunakan. Meskipun ada banyak jenis API, salah satu yang paling populer adalah [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ Istilah 'REST' adalah singkatan dari 'Representational State Transfer' dan melibatkan penggunaan URL yang dikonfigurasi untuk mengambil data. Lakukan sedikit riset tentang berbagai jenis API yang tersedia untuk pengembang. Format mana yang menarik bagi Anda?

Ada hal-hal penting yang perlu diperhatikan tentang fungsi ini. Pertama, perhatikan kata kunci [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Menulis fungsi Anda agar berjalan secara asinkron berarti fungsi tersebut menunggu suatu tindakan, seperti data yang dikembalikan, untuk diselesaikan sebelum melanjutkan.

Berikut adalah video singkat tentang `async`:

[![Async dan Await untuk mengelola promises](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async dan Await untuk mengelola promises")

> 🎥 Klik gambar di atas untuk video tentang async/await.

Buat fungsi baru untuk melakukan query ke API C02Signal:

```JavaScript
import axios from '../node_modules/axios';

async function displayCarbonUsage(apiKey, region) {
	try {
		await axios
			.get('https://api.co2signal.com/v1/latest', {
				params: {
					countryCode: region,
				},
				headers: {
					'auth-token': apiKey,
				},
			})
			.then((response) => {
				let CO2 = Math.floor(response.data.data.carbonIntensity);

				//calculateColor(CO2);

				loading.style.display = 'none';
				form.style.display = 'none';
				myregion.textContent = region;
				usage.textContent =
					Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
				fossilfuel.textContent =
					response.data.data.fossilFuelPercentage.toFixed(2) +
					'% (percentage of fossil fuels used to generate electricity)';
				results.style.display = 'block';
			});
	} catch (error) {
		console.log(error);
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we have no data for the region you have requested.';
	}
}
```

Ini adalah fungsi besar. Apa yang terjadi di sini?

- Mengikuti praktik terbaik, Anda menggunakan kata kunci `async` untuk membuat fungsi ini berperilaku secara asinkron. Fungsi ini berisi blok `try/catch` karena akan mengembalikan promise saat API mengembalikan data. Karena Anda tidak memiliki kendali atas kecepatan respons API (mungkin tidak merespons sama sekali!), Anda perlu menangani ketidakpastian ini dengan memanggilnya secara asinkron.
- Anda melakukan query ke API co2signal untuk mendapatkan data wilayah Anda, menggunakan API Key Anda. Untuk menggunakan key tersebut, Anda harus menggunakan jenis autentikasi di parameter header Anda.
- Setelah API merespons, Anda menetapkan berbagai elemen dari data responsnya ke bagian layar yang Anda atur untuk menampilkan data ini.
- Jika ada kesalahan, atau jika tidak ada hasil, Anda menampilkan pesan error.

✅ Menggunakan pola pemrograman asinkron adalah alat yang sangat berguna lainnya dalam kotak alat Anda. Baca [tentang berbagai cara](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) Anda dapat mengonfigurasi jenis kode ini.

Selamat! Jika Anda membangun ekstensi Anda (`npm run build`) dan menyegarkannya di panel ekstensi Anda, Anda memiliki ekstensi yang berfungsi! Satu-satunya hal yang belum berfungsi adalah ikon, dan Anda akan memperbaikinya di pelajaran berikutnya.

---

## 🚀 Tantangan

Kita telah membahas beberapa jenis API sejauh ini dalam pelajaran ini. Pilih sebuah web API dan teliti secara mendalam apa yang ditawarkannya. Misalnya, lihat API yang tersedia di dalam browser seperti [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). Menurut Anda, apa yang membuat sebuah API menjadi hebat?

## Kuis Pasca-Pelajaran

[Kuis pasca-pelajaran](https://ff-quizzes.netlify.app/web/quiz/26)

## Tinjauan & Studi Mandiri

Anda telah mempelajari tentang LocalStorage dan API dalam pelajaran ini, keduanya sangat berguna bagi pengembang web profesional. Bisakah Anda memikirkan bagaimana kedua hal ini bekerja bersama? Pikirkan bagaimana Anda akan merancang sebuah situs web yang akan menyimpan item untuk digunakan oleh sebuah API.

## Tugas

[Adopsi sebuah API](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diingat bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.