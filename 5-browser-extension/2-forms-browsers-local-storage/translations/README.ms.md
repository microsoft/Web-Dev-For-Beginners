# Projek Pelanjutan Penyemak Imbas Bahagian 2: Panggil API, gunakan Penyimpanan Tempatan

## Kuiz Pra Kuliah

[Kuiz Pra Kuliah](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/25)

### Pengenalan

Dalam pelajaran ini, anda akan memanggil API dengan menyerahkan borang pelanjutan penyemak imbas anda dan memaparkan hasilnya dalam pelanjutan penyemak imbas anda. Di samping itu, anda akan belajar bagaimana anda boleh menyimpan data di storan tempatan penyemak imbas anda untuk rujukan dan penggunaan di masa hadapan.

✅ Ikuti segmen bernombor dalam fail yang sesuai untuk mengetahui di mana meletakkan kod anda

### Sediakan elemen untuk dimanipulasi dalam pelanjutan:

Pada masa ini anda telah membina HTML untuk bentuk dan hasilnya `<div>` untuk pelanjutan penyemak imbas anda. Mulai sekarang, anda perlu bekerja dalam fail `/src/index.js` dan membina pelanjutan anda sedikit demi sedikit. Rujuk [pelajaran sebelumnya](../../1-about-browsers/translations/README.ms.md) untuk menyiapkan projek anda dan pada proses pembinaan.

Bekerja dalam fail `index.js` anda, mulakan dengan membuat beberapa pemboleh ubah `const` untuk menahan nilai yang berkaitan dengan pelbagai bidang:

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

Semua bidang ini dirujuk oleh kelas css mereka, semasa anda memasangnya dalam HTML pada pelajaran sebelumnya.

### Tambah pendengar

Seterusnya, tambahkan pendengar acara ke formulir dan butang kosong yang mengatur ulang borang, sehingga jika pengguna menyerahkan borang atau mengklik butang set semula itu, sesuatu akan terjadi, dan tambahkan panggilan untuk menginisialisasi aplikasi di bahagian bawah fail:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Perhatikan singkatan yang digunakan untuk mendengarkan acara kirim atau klik, dan bagaimana peristiwa itu diteruskan ke pemegang Fungsi hantar atau set semula. Bolehkah anda menulis setara dengan singkatan ini dalam format yang lebih panjang? Yang mana satu pilihan anda?

### Bangun fungsi init() dan fungsi reset():

Sekarang anda akan membina fungsi yang menginisialisasi pelanjutan, yang dipanggil init():

```JavaScript
function init() {
	//jika ada di localStorage
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//tetapkan ikon menjadi hijau generik
	//todo

	if (storedApiKey === null || storedRegion === null) {
		//jika kami tidak mempunyai kunci, tunjukkan borangnya
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
        //jika kita telah menyimpan kunci / kawasan di localStorage, tunjukkan hasilnya ketika dimuat
        displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//kosongkan simpanan tempatan untuk wilayah sahaja
	localStorage.removeItem('regionName');
	init();
}

```
Dalam fungsi ini, terdapat beberapa logik yang menarik. Bacalah, anda dapat melihat apa yang berlaku?

- dua `const` disiapkan untuk memeriksa sama ada pengguna telah menyimpan kod APIKey dan wilayah di storan tempatan.
- jika salah satu daripadanya adalah nol, tunjukkan borang dengan mengubah gaya untuk ditampilkan sebagai 'blok'
- sembunyikan hasilnya, muat, dan clearBtn dan tetapkan teks ralat ke rentetan kosong
- jika ada kunci dan wilayah, mulailah rutin untuk:
  - hubungi API untuk mendapatkan data penggunaan karbon
  - menyembunyikan kawasan hasil
  - sembunyikan borang
  - tunjukkan butang set semula

Sebelum meneruskan, berguna untuk mengetahui konsep yang sangat penting yang terdapat dalam penyemak imbas: [LocalStorage] https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage adalah cara yang berguna untuk menyimpan rentetan dalam penyemak imbas sebagai pasangan `kunci-nilai` . Jenis storan web ini dapat dimanipulasi oleh JavaScript untuk menguruskan data di penyemak imbas. LocalStorage tidak akan habis masa berlakunya, sementara SessionStorage, jenis penyimpanan web lain, akan dihapus apabila penyemak imbas ditutup. Pelbagai jenis storan mempunyai kebaikan dan keburukan terhadap penggunaannya.

> Catatan - pelanjutan penyemak imbas anda mempunyai storan tempatan sendiri; tetingkap penyemak imbas utama adalah contoh yang berbeza dan berkelakuan secara berasingan.

Anda menetapkan APIKey anda agar mempunyai nilai rentetan, misalnya, dan anda dapat melihatnya diatur di Edge dengan "memeriksa" laman web (anda boleh mengklik kanan penyemak imbas untuk memeriksa) dan pergi ke tab Aplikasi untuk melihat penyimpanan.

![Local sotrage pane](../images/localstorage.png)

✅ Fikirkan situasi di mana anda TIDAK mahu menyimpan beberapa data di LocalStorage. Secara umum, meletakkan Kunci API di LocalStorage adalah idea yang tidak baik! Bolehkah anda melihat mengapa? Dalam kes kami, kerana aplikasi kami adalah semata-mata untuk belajar dan tidak akan digunakan ke kedai aplikasi, kami akan menggunakan kaedah ini.

Perhatikan bahawa anda menggunakan Web API untuk memanipulasi LocalStorage, baik dengan menggunakan `getItem()`, `setItem()` atau `removeItem()`. Ia disokong secara meluas di penyemak imbas.

Sebelum membina fungsi `displayCarbonUsage()` yang dipanggil di `init()`, mari kita bina fungsi untuk menangani penyerahan borang awal.

### Mengendalikan penghantaran borang

Buat fungsi yang disebut `handleSubmit` yang menerima argumen peristiwa `(e)`. Hentikan peristiwa daripada menyebarkan (dalam hal ini, kami ingin menghentikan penyemak imbas menyegarkan) dan panggil fungsi baru, `setUpUser`, meneruskan argumen `apiKey.value` dan `region.value`. Dengan cara ini, anda menggunakan dua nilai yang dibawa melalui bentuk awal apabila medan yang sesuai diisi.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```
✅ Refresh memori anda - HTML yang anda tetapkan dalam pelajaran terakhir mempunyai dua medan input yang `value` nya ditangkap melalui `const` yang anda tetapkan di bahagian atas fail, dan keduanya `required` sehingga penyemak imbas berhenti pengguna daripada memasukkan nilai nol.

### Sediakan pengguna

Beralih ke fungsi `setUpUser`, di sinilah anda menetapkan nilai penyimpanan tempatan untuk apiKey dan regionName. Tambahkan fungsi baru:

```JavaScript
function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//buat panggilan awal
	displayCarbonUsage(apiKey, regionName);
}
```
Fungsi ini menetapkan mesej memuat untuk ditunjukkan semasa API dipanggil. Pada ketika ini, anda telah berjaya membuat fungsi terpenting pelanjutan penyemak imbas ini!

### Paparkan Penggunaan Karbon

Sebelum melangkah lebih jauh, kita harus membincangkan API. API, atau [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html), adalah elemen penting dari kotak alat pembangun web. Mereka menyediakan cara standard untuk program berinteraksi dan saling berinteraksi antara satu sama lain. Sebagai contoh, jika anda membuat laman web yang perlu membuat pertanyaan pada pangkalan data, seseorang mungkin telah membuat API untuk anda gunakan. Walaupun terdapat banyak jenis API, salah satu yang paling popular adalah [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ Istilah 'REST' adalah singkatan dari 'Representational State Transfer' dan ciri menggunakan URL yang dikonfigurasikan dengan pelbagai untuk mengambil data. Lakukan sedikit kajian mengenai pelbagai jenis API yang tersedia untuk pembangun. Format apa yang menarik bagi anda?

Terdapat perkara penting yang perlu diperhatikan mengenai fungsi ini. Perhatikan dahulu kata kunci [`async` kata kunci](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Menulis fungsi anda supaya mereka berjalan secara tidak segerak bermakna mereka menunggu tindakan, seperti data yang dikembalikan, diselesaikan sebelum meneruskan.

Inilah video ringkas mengenai `async`:

[![Async dan Await untuk menguruskan promises](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async dan Await untuk menguruskan promises")

> Klik gambar di atas untuk video mengenai async/await.

Buat fungsi baru untuk meminta API C02Signal:

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

Ini adalah fungsi besar. Apa yang berlaku di sini?

- mengikuti amalan terbaik, anda menggunakan kata kunci `async` untuk menjadikan fungsi ini berkelakuan tidak segerak. Fungsi tersebut mengandungi blok `try/catch` kerana akan mengembalikan janji ketika API mengembalikan data. Oleh kerana anda tidak mempunyai kawalan terhadap kelajuan yang akan ditanggapi oleh API (ia sama sekali tidak bertindak balas!), Anda perlu mengatasi ketidakpastian ini dengan memanggilnya secara tidak segerak.
- anda meminta API co2signal untuk mendapatkan data wilayah anda, menggunakan Kunci API anda. Untuk menggunakan kunci itu, anda mesti menggunakan jenis pengesahan dalam parameter tajuk anda.
- setelah API bertindak balas, anda menetapkan pelbagai elemen data responsnya ke bahagian-bahagian skrin yang anda siapkan untuk menunjukkan data ini.
- jika ada ralat, atau jika tidak ada hasil, anda akan menunjukkan mesej ralat.

✅ Menggunakan corak pengaturcaraan tak segerak adalah alat lain yang sangat berguna dalam kotak alat anda. Baca untuk[mengenai pelbagai cara](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) anda boleh mengkonfigurasi jenis kod ini.

Tahniah! Sekiranya anda membina pelanjutan anda (`npm run build`) dan menyegarkannya di panel pelanjutan anda, anda mempunyai sambungan yang berfungsi! Satu-satunya perkara yang tidak berfungsi ialah ikon, dan anda akan memperbaikinya pada pelajaran seterusnya.

---

## 🚀 Cabaran

Kami telah membincangkan beberapa jenis API setakat ini dalam pelajaran ini. Pilih API web dan teliti secara mendalam apa yang ditawarkannya. Sebagai contoh, perhatikan API yang tersedia dalam penyemak imbas seperti [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). Apa yang menjadikan API hebat pada pendapat anda?

## Kuiz Pasca Kuliah

[Kuiz Pasca Kuliah](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/26)


## Mengkaji & Belajar Sendiri

Anda belajar mengenai LocalStorage dan API dalam pelajaran ini, keduanya sangat berguna untuk pembangun web profesional. Bolehkah anda berfikir bagaimana kedua-dua perkara ini berfungsi bersama? Fikirkan bagaimana anda akan membina laman web yang akan menyimpan item yang akan digunakan oleh API.

## Tugasan

[Menggunakan API](assignment.ms.md)