<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8c8cd4af6086cc1d47e1d43aa4983d20",
  "translation_date": "2025-10-24T14:42:48+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "ms"
}
-->
# Projek Sambungan Pelayar Bahagian 2: Panggil API, gunakan Penyimpanan Tempatan

## Kuiz Pra-Kuliah

[Kuiz pra-kuliah](https://ff-quizzes.netlify.app/web/quiz/25)

## Pengenalan

Ingat sambungan pelayar yang anda mula bina? Sekarang anda mempunyai borang yang kelihatan menarik, tetapi ia masih statik. Hari ini kita akan menghidupkannya dengan menghubungkannya kepada data sebenar dan memberikannya memori.

Fikirkan tentang komputer kawalan misi Apollo - mereka tidak hanya memaparkan maklumat tetap. Mereka sentiasa berkomunikasi dengan kapal angkasa, dikemas kini dengan data telemetri, dan mengingati parameter misi kritikal. Itulah jenis tingkah laku dinamik yang kita bina hari ini. Sambungan anda akan mengakses internet, mengambil data alam sekitar sebenar, dan mengingati tetapan anda untuk masa akan datang.

Integrasi API mungkin kedengaran rumit, tetapi ia sebenarnya hanya mengajar kod anda bagaimana berkomunikasi dengan perkhidmatan lain. Sama ada anda mengambil data cuaca, suapan media sosial, atau maklumat jejak karbon seperti yang akan kita lakukan hari ini, semuanya tentang mewujudkan hubungan digital ini. Kita juga akan meneroka bagaimana pelayar boleh menyimpan maklumat - seperti perpustakaan menggunakan katalog kad untuk mengingati lokasi buku.

Pada akhir pelajaran ini, anda akan mempunyai sambungan pelayar yang mengambil data sebenar, menyimpan pilihan pengguna, dan memberikan pengalaman yang lancar. Mari kita mulakan!

✅ Ikuti segmen bernombor dalam fail yang sesuai untuk mengetahui di mana meletakkan kod anda

## Sediakan elemen untuk dimanipulasi dalam sambungan

Sebelum JavaScript anda boleh memanipulasi antara muka, ia memerlukan rujukan kepada elemen HTML tertentu. Fikirkan ia seperti teleskop yang perlu diarahkan kepada bintang tertentu - sebelum Galileo dapat mengkaji bulan Jupiter, dia perlu mencari dan memfokuskan pada Jupiter itu sendiri.

Dalam fail `index.js` anda, kita akan mencipta pemboleh ubah `const` yang menangkap rujukan kepada setiap elemen borang penting. Ini serupa dengan bagaimana saintis melabelkan peralatan mereka - daripada mencari seluruh makmal setiap kali, mereka boleh mengakses apa yang mereka perlukan secara langsung.

```javascript
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

**Apa yang dilakukan oleh kod ini:**
- **Menangkap** elemen borang menggunakan `document.querySelector()` dengan pemilih kelas CSS
- **Mencipta** rujukan kepada medan input untuk nama kawasan dan kunci API
- **Menjalin** sambungan kepada elemen paparan hasil untuk data penggunaan karbon
- **Menyiapkan** akses kepada elemen UI seperti indikator pemuatan dan mesej ralat
- **Menyimpan** setiap rujukan elemen dalam pemboleh ubah `const` untuk kegunaan mudah sepanjang kod anda

## Tambah pendengar acara

Sekarang kita akan membuat sambungan anda bertindak balas kepada tindakan pengguna. Pendengar acara adalah cara kod anda memantau interaksi pengguna. Fikirkan mereka seperti operator dalam pertukaran telefon awal - mereka mendengar panggilan masuk dan menyambungkan litar yang betul apabila seseorang ingin membuat sambungan.

```javascript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

**Memahami konsep ini:**
- **Melampirkan** pendengar submit kepada borang yang dicetuskan apabila pengguna menekan Enter atau klik submit
- **Menyambungkan** pendengar klik kepada butang kosong untuk menetapkan semula borang
- **Menghantar** objek acara `(e)` kepada fungsi pengendali untuk kawalan tambahan
- **Memanggil** fungsi `init()` dengan segera untuk menyediakan keadaan awal sambungan anda

✅ Perhatikan sintaks fungsi anak panah ringkas yang digunakan di sini. Pendekatan JavaScript moden ini lebih bersih daripada ekspresi fungsi tradisional, tetapi kedua-duanya berfungsi dengan baik!

## Bina fungsi inisialisasi dan tetapan semula

Mari kita cipta logik inisialisasi untuk sambungan anda. Fungsi `init()` adalah seperti sistem navigasi kapal yang memeriksa instrumennya - ia menentukan keadaan semasa dan menyesuaikan antara muka dengan sewajarnya. Ia memeriksa sama ada seseorang telah menggunakan sambungan anda sebelum ini dan memuatkan tetapan mereka yang terdahulu.

Fungsi `reset()` memberikan pengguna permulaan baru - serupa dengan bagaimana saintis menetapkan semula instrumen mereka antara eksperimen untuk memastikan data bersih.

```javascript
function init() {
	// Check if user has previously saved API credentials
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	// Set extension icon to generic green (placeholder for future lesson)
	// TODO: Implement icon update in next lesson

	if (storedApiKey === null || storedRegion === null) {
		// First-time user: show the setup form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
		// Returning user: load their saved data automatically
		displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
}

function reset(e) {
	e.preventDefault();
	// Clear stored region to allow user to choose a new location
	localStorage.removeItem('regionName');
	// Restart the initialization process
	init();
}
```

**Memecahkan apa yang berlaku di sini:**
- **Mengambil** kunci API dan kawasan yang disimpan dari penyimpanan tempatan pelayar
- **Memeriksa** sama ada ini adalah pengguna kali pertama (tiada kelayakan yang disimpan) atau pengguna yang kembali
- **Menunjukkan** borang persediaan untuk pengguna baru dan menyembunyikan elemen antara muka lain
- **Memuatkan** data yang disimpan secara automatik untuk pengguna yang kembali dan memaparkan pilihan tetapan semula
- **Menguruskan** keadaan antara muka pengguna berdasarkan data yang tersedia

**Konsep utama tentang Penyimpanan Tempatan:**
- **Menyimpan** data antara sesi pelayar (tidak seperti penyimpanan sesi)
- **Menyimpan** data sebagai pasangan kunci-nilai menggunakan `getItem()` dan `setItem()`
- **Mengembalikan** `null` apabila tiada data wujud untuk kunci tertentu
- **Memberikan** cara mudah untuk mengingati pilihan dan tetapan pengguna

> 💡 **Memahami Penyimpanan Pelayar**: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) adalah seperti memberikan sambungan anda memori yang berterusan. Fikirkan bagaimana Perpustakaan Alexandria kuno menyimpan gulungan - maklumat tetap tersedia walaupun apabila sarjana meninggalkan dan kembali.
>
> **Ciri utama:**
> - **Menyimpan** data walaupun selepas anda menutup pelayar anda
> - **Bertahan** selepas komputer dihidupkan semula dan pelayar terhempas
> - **Memberikan** ruang penyimpanan yang besar untuk pilihan pengguna
> - **Menyediakan** akses segera tanpa kelewatan rangkaian

> **Nota Penting**: Sambungan pelayar anda mempunyai penyimpanan tempatan yang terpencil yang berasingan daripada halaman web biasa. Ini memberikan keselamatan dan mengelakkan konflik dengan laman web lain.

Anda boleh melihat data yang disimpan dengan membuka Alat Pembangun pelayar (F12), pergi ke tab **Application**, dan mengembangkan bahagian **Local Storage**.

![Panel penyimpanan tempatan](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.ms.png)

> ⚠️ **Pertimbangan Keselamatan**: Dalam aplikasi pengeluaran, menyimpan kunci API dalam LocalStorage menimbulkan risiko keselamatan kerana JavaScript boleh mengakses data ini. Untuk tujuan pembelajaran, pendekatan ini berfungsi dengan baik, tetapi aplikasi sebenar harus menggunakan penyimpanan pelayan yang selamat untuk kelayakan sensitif.

## Tangani penghantaran borang

Sekarang kita akan menangani apa yang berlaku apabila seseorang menghantar borang anda. Secara lalai, pelayar akan memuat semula halaman apabila borang dihantar, tetapi kita akan memintas tingkah laku ini untuk mencipta pengalaman yang lebih lancar.

Pendekatan ini mencerminkan bagaimana kawalan misi menangani komunikasi kapal angkasa - bukannya menetapkan semula keseluruhan sistem untuk setiap penghantaran, mereka mengekalkan operasi berterusan sambil memproses maklumat baru.

Cipta fungsi yang menangkap acara penghantaran borang dan mengekstrak input pengguna:

```javascript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

**Dalam kod di atas, kita telah:**
- **Menghalang** tingkah laku penghantaran borang lalai yang akan menyegarkan halaman
- **Mengekstrak** nilai input pengguna dari medan kunci API dan kawasan
- **Menghantar** data borang kepada fungsi `setUpUser()` untuk diproses
- **Menjaga** tingkah laku aplikasi satu halaman dengan mengelakkan penyegaran halaman

✅ Ingat bahawa medan borang HTML anda termasuk atribut `required`, jadi pelayar secara automatik mengesahkan bahawa pengguna memberikan kedua-dua kunci API dan kawasan sebelum fungsi ini dijalankan.

## Tetapkan pilihan pengguna

Fungsi `setUpUser` bertanggungjawab untuk menyimpan kelayakan pengguna dan memulakan panggilan API pertama. Ini mencipta peralihan yang lancar dari persediaan kepada paparan hasil.

```javascript
function setUpUser(apiKey, regionName) {
	// Save user credentials for future sessions
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	
	// Update UI to show loading state
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	
	// Fetch carbon usage data with user's credentials
	displayCarbonUsage(apiKey, regionName);
}
```

**Langkah demi langkah, inilah yang berlaku:**
- **Menyimpan** kunci API dan nama kawasan ke penyimpanan tempatan untuk kegunaan masa depan
- **Menunjukkan** indikator pemuatan untuk memberitahu pengguna bahawa data sedang diambil
- **Mengosongkan** mesej ralat sebelumnya dari paparan
- **Menampilkan** butang kosong untuk pengguna menetapkan semula tetapan mereka kemudian
- **Memulakan** panggilan API untuk mengambil data penggunaan karbon sebenar

Fungsi ini mencipta pengalaman pengguna yang lancar dengan menguruskan kedua-dua penyimpanan data dan kemas kini antara muka pengguna dalam satu tindakan yang terkoordinasi.

## Paparkan data penggunaan karbon

Sekarang kita akan menyambungkan sambungan anda kepada sumber data luaran melalui API. Ini mengubah sambungan anda daripada alat yang berdiri sendiri kepada sesuatu yang boleh mengakses maklumat masa nyata dari seluruh internet.

**Memahami API**

[API](https://www.webopedia.com/TERM/A/API.html) adalah bagaimana aplikasi yang berbeza berkomunikasi antara satu sama lain. Fikirkan mereka seperti sistem telegraf yang menghubungkan bandar-bandar jauh pada abad ke-19 - operator akan menghantar permintaan kepada stesen jauh dan menerima respons dengan maklumat yang diminta. Setiap kali anda memeriksa media sosial, bertanya kepada pembantu suara soalan, atau menggunakan aplikasi penghantaran, API memudahkan pertukaran data ini.

**Konsep utama tentang REST API:**
- **REST** bermaksud 'Representational State Transfer'
- **Menggunakan** kaedah HTTP standard (GET, POST, PUT, DELETE) untuk berinteraksi dengan data
- **Mengembalikan** data dalam format yang boleh diramal, biasanya JSON
- **Menyediakan** titik akhir berasaskan URL yang konsisten untuk jenis permintaan yang berbeza

✅ [API CO2 Signal](https://www.co2signal.com/) yang akan kita gunakan menyediakan data intensiti karbon masa nyata dari grid elektrik di seluruh dunia. Ini membantu pengguna memahami kesan alam sekitar penggunaan elektrik mereka!

> 💡 **Memahami JavaScript Asinkron**: Kata kunci [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) membolehkan kod anda mengendalikan pelbagai operasi secara serentak. Apabila anda meminta data dari pelayan, anda tidak mahu keseluruhan sambungan anda membeku - itu seperti kawalan lalu lintas udara menghentikan semua operasi semasa menunggu satu pesawat untuk bertindak balas.
>
> **Manfaat utama:**
> - **Menjaga** responsif sambungan semasa data dimuatkan
> - **Membolehkan** kod lain terus dilaksanakan semasa permintaan rangkaian
> - **Meningkatkan** kebolehbacaan kod berbanding corak panggilan balik tradisional
> - **Membolehkan** pengendalian ralat yang anggun untuk masalah rangkaian

Berikut adalah video ringkas tentang `async`:

[![Async dan Await untuk mengurus janji](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async dan Await untuk mengurus janji")

> 🎥 Klik imej di atas untuk video tentang async/await.

Cipta fungsi untuk mengambil dan memaparkan data penggunaan karbon:

```javascript
// Modern fetch API approach (no external dependencies needed)
async function displayCarbonUsage(apiKey, region) {
	try {
		// Fetch carbon intensity data from CO2 Signal API
		const response = await fetch('https://api.co2signal.com/v1/latest', {
			method: 'GET',
			headers: {
				'auth-token': apiKey,
				'Content-Type': 'application/json'
			},
			// Add query parameters for the specific region
			...new URLSearchParams({ countryCode: region }) && {
				url: `https://api.co2signal.com/v1/latest?countryCode=${region}`
			}
		});

		// Check if the API request was successful
		if (!response.ok) {
			throw new Error(`API request failed: ${response.status}`);
		}

		const data = await response.json();
		const carbonData = data.data;

		// Calculate rounded carbon intensity value
		const carbonIntensity = Math.round(carbonData.carbonIntensity);

		// Update the user interface with fetched data
		loading.style.display = 'none';
		form.style.display = 'none';
		myregion.textContent = region.toUpperCase();
		usage.textContent = `${carbonIntensity} grams (grams CO₂ emitted per kilowatt hour)`;
		fossilfuel.textContent = `${carbonData.fossilFuelPercentage.toFixed(2)}% (percentage of fossil fuels used to generate electricity)`;
		results.style.display = 'block';

		// TODO: calculateColor(carbonIntensity) - implement in next lesson

	} catch (error) {
		console.error('Error fetching carbon data:', error);
		
		// Show user-friendly error message
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we couldn\'t fetch data for that region. Please check your API key and region code.';
	}
}
```

**Memecahkan apa yang berlaku di sini:**
- **Menggunakan** API `fetch()` moden dan bukannya perpustakaan luaran seperti Axios untuk kod yang lebih bersih dan bebas pergantungan
- **Melaksanakan** pemeriksaan ralat yang betul dengan `response.ok` untuk menangkap kegagalan API lebih awal
- **Mengendalikan** operasi asinkron dengan `async/await` untuk aliran kod yang lebih mudah dibaca
- **Mengesahkan** dengan API CO2 Signal menggunakan header `auth-token`
- **Menganalisis** data respons JSON dan mengekstrak maklumat intensiti karbon
- **Mengemas kini** pelbagai elemen UI dengan data alam sekitar yang diformatkan
- **Memberikan** mesej ralat mesra pengguna apabila panggilan API gagal

**Konsep JavaScript moden yang ditunjukkan:**
- **Literal templat** dengan sintaks `${}` untuk pemformatan string yang bersih
- **Pengendalian ralat** dengan blok try/catch untuk aplikasi yang kukuh
- **Corak async/await** untuk mengendalikan permintaan rangkaian dengan anggun
- **Pemusnahan objek** untuk mengekstrak data tertentu dari respons API
- **Rantai kaedah** untuk pelbagai manipulasi DOM

✅ Fungsi ini menunjukkan beberapa konsep penting dalam pembangunan web - berkomunikasi dengan pelayan luaran, mengendalikan pengesahan, memproses data, mengemas kini antara muka, dan menguruskan ralat dengan anggun. Ini adalah kemahiran asas yang digunakan oleh pembangun profesional secara kerap.

🎉 **Apa yang telah anda capai:** Anda telah mencipta sambungan pelayar yang:
- **Menyambung** ke internet dan mengambil data alam sekitar sebenar
- **Menyimpan** tetapan pengguna antara sesi
- **Menguruskan** ralat dengan anggun dan bukannya terhempas
- **Memberikan** pengalaman pengguna yang lancar dan profesional

Uji kerja anda dengan menjalankan `npm run build` dan menyegarkan semula sambungan anda dalam pelayar. Anda kini mempunyai penjejak jejak karbon yang berfungsi. Pelajaran seterusnya akan menambah fungsi ikon dinamik untuk melengkapkan sambungan.

---

## Cabaran Ejen GitHub Copilot 🚀

Gunakan mod Ejen untuk melengkapkan cabaran berikut:

**Penerangan:** Tingkatkan sambungan pelayar dengan menambah penambahbaikan pengendalian ralat dan ciri pengalaman pengguna. Cabaran ini akan membantu anda berlatih bekerja dengan API, penyimpanan tempatan, dan manipulasi DOM menggunakan corak JavaScript moden.

**Arahan:** Cipta versi yang dipertingkatkan bagi fungsi displayCarbonUsage yang termasuk: 1) Mekanisme percubaan semula untuk panggilan API yang gagal dengan backoff eksponen, 2) Pengesahan input untuk kod kawasan sebelum membuat panggilan API, 3) Animasi pemuatan dengan indikator kemajuan, 4) Caching respons API dalam localStorage dengan cap masa tamat (cache selama 30 minit), dan 5) Ciri untuk memaparkan data sejarah dari panggilan API sebelumnya. Juga tambahkan komen JSDoc gaya TypeScript yang sesuai untuk mendokumentasikan semua parameter fungsi dan jenis pengembalian.

Ketahui lebih lanjut tentang [mod ejen](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## 🚀 Cabaran

Luaskan pemahaman anda tentang API dengan meneroka kekayaan API berasaskan pelayar yang tersedia untuk pembangunan web. Pilih salah satu API pelayar ini dan bina demonstrasi kecil:

- [Geolocation API](https://developer.mozilla.org/docs/Web/API/Geolocation_API) - Dapatkan lokasi semasa pengguna
- [Notification API](https://developer.mozilla.org/docs/Web/API/Notifications_API) - Hantar notifikasi desktop
- [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) - Cipta antara muka seret interaktif
- [Web Storage API](https://developer.mozilla.org/docs/Web/API/Web_Storage_API) - Teknik penyimpanan tempatan lanjutan
- [Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API) - Alternatif moden kepada XMLHttpRequest

**Soalan penyelidikan untuk dipertimbangkan:**
- Masalah dunia nyata apa yang diselesaikan oleh API ini?
- Bagaimana API ini mengendalikan ralat dan kes tepi?
- Apakah pertimbangan keselamatan yang wujud semasa menggunakan API ini?
- Sejauh mana API ini disokong di pelbagai pelayar?

Selepas penyelidikan anda, kenal pasti ciri-ciri apa yang menjadikan API mesra pembangun dan boleh dipercayai.

## Kuiz Pasca-Kuliah

[Kuiz pasca-kuliah](https://ff-quizzes.netlify.app/web/quiz/26)

## Ulasan & Kajian Sendiri
Anda telah mempelajari tentang LocalStorage dan API dalam pelajaran ini, kedua-duanya sangat berguna untuk pembangun web profesional. Bolehkah anda fikirkan bagaimana kedua-dua perkara ini berfungsi bersama? Fikirkan bagaimana anda akan merancang sebuah laman web yang akan menyimpan item untuk digunakan oleh API.

## Tugasan

[Adopt an API](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.