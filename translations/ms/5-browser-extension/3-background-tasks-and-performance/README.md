<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "eb358f3f4c2c082f9f3a4f98efa1d337",
  "translation_date": "2025-10-24T14:42:05+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "ms"
}
-->
# Projek Sambungan Pelayar Bahagian 3: Ketahui tentang Tugas Latar Belakang dan Prestasi

Pernah terfikir mengapa sesetengah sambungan pelayar terasa pantas dan responsif manakala yang lain kelihatan perlahan? Rahsianya terletak pada apa yang berlaku di belakang tabir. Semasa pengguna mengklik sekitar antara muka sambungan anda, terdapat dunia proses latar belakang yang senyap menguruskan pengambilan data, kemas kini ikon, dan sumber sistem.

Ini adalah pelajaran terakhir dalam siri sambungan pelayar, dan kami akan memastikan penjejak jejak karbon anda berfungsi dengan lancar. Anda akan menambah kemas kini ikon dinamik dan belajar cara mengenal pasti isu prestasi sebelum ia menjadi masalah. Ia seperti melaras kereta lumba - pengoptimuman kecil boleh membuat perbezaan besar dalam cara semuanya berjalan.

Apabila kita selesai, anda akan mempunyai sambungan yang kemas dan memahami prinsip prestasi yang membezakan aplikasi web yang baik daripada yang hebat. Mari terjun ke dunia pengoptimuman pelayar.

## Kuiz Pra-Kuliah

[Kuiz pra-kuliah](https://ff-quizzes.netlify.app/web/quiz/27)

### Pengenalan

Dalam pelajaran sebelumnya, anda telah membina borang, menyambungkannya ke API, dan menangani pengambilan data secara asinkron. Sambungan anda sedang terbentuk dengan baik.

Sekarang kita perlu menambah sentuhan akhir - seperti menjadikan ikon sambungan itu berubah warna berdasarkan data karbon. Ini mengingatkan saya bagaimana NASA perlu mengoptimumkan setiap sistem pada kapal angkasa Apollo. Mereka tidak mampu membazirkan sebarang kitaran atau memori kerana nyawa bergantung pada prestasi. Walaupun sambungan pelayar kita tidak begitu kritikal, prinsip yang sama terpakai - kod yang cekap mencipta pengalaman pengguna yang lebih baik.

## Asas Prestasi Web

Apabila kod anda berjalan dengan cekap, orang boleh *merasakan* perbezaannya. Anda tahu saat di mana halaman dimuat dengan serta-merta atau animasi mengalir dengan lancar? Itulah prestasi yang baik sedang berfungsi.

Prestasi bukan hanya tentang kelajuan - ia tentang mencipta pengalaman web yang terasa semula jadi dan tidak menjengkelkan. Pada zaman awal pengkomputeran, Grace Hopper terkenal menyimpan nanosecond (seutas wayar kira-kira satu kaki panjang) di mejanya untuk menunjukkan sejauh mana cahaya bergerak dalam satu bilion saat. Ia adalah cara beliau menjelaskan mengapa setiap mikrodetik penting dalam pengkomputeran. Mari kita terokai alat detektif yang membantu anda mengetahui apa yang melambatkan sesuatu.

> "Prestasi laman web adalah tentang dua perkara: seberapa cepat halaman dimuat, dan seberapa cepat kod di dalamnya berjalan." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Topik tentang bagaimana membuat laman web anda sangat pantas pada semua jenis peranti, untuk semua jenis pengguna, dalam semua jenis situasi, tidak mengejutkan adalah luas. Berikut adalah beberapa perkara yang perlu diingat semasa anda membina sama ada projek web standard atau sambungan pelayar.

Langkah pertama dalam mengoptimumkan laman anda adalah memahami apa yang sebenarnya berlaku di belakang tabir. Nasib baik, pelayar anda dilengkapi dengan alat detektif yang hebat.

Untuk membuka Alat Pembangun di Edge, klik tiga titik di sudut kanan atas, kemudian pergi ke Alat Lain > Alat Pembangun. Atau gunakan pintasan papan kekunci: `Ctrl` + `Shift` + `I` pada Windows atau `Option` + `Command` + `I` pada Mac. Setelah anda berada di sana, klik pada tab Prestasi - di sinilah anda akan melakukan penyiasatan anda.

**Berikut adalah alat detektif prestasi anda:**
- **Buka** Alat Pembangun (anda akan menggunakannya secara berterusan sebagai pembangun!)
- **Pergi** ke tab Prestasi - anggap ia sebagai penjejak kecergasan aplikasi web anda
- **Tekan** butang Rekod dan lihat halaman anda beraksi
- **Kaji** hasil untuk mengenal pasti apa yang melambatkan prestasi

Mari cuba ini. Buka laman web (Microsoft.com berfungsi dengan baik untuk ini) dan klik butang 'Rekod'. Sekarang muat semula halaman dan lihat profiler menangkap segala yang berlaku. Apabila anda berhenti merekod, anda akan melihat pecahan terperinci tentang bagaimana pelayar 'menykrip', 'merender', dan 'melukis' laman web. Ia mengingatkan saya bagaimana pusat kawalan misi memantau setiap sistem semasa pelancaran roket - anda mendapat data masa nyata tentang apa yang berlaku dan bila.

✅ [Dokumentasi Microsoft](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) mempunyai banyak maklumat jika anda ingin mendalami lebih lanjut.

> Tip pro: Kosongkan cache pelayar anda sebelum menguji untuk melihat bagaimana laman anda berprestasi untuk pelawat kali pertama - biasanya ia sangat berbeza daripada lawatan berulang!

Pilih elemen pada garis masa profil untuk mengezum masuk pada acara yang berlaku semasa halaman anda dimuat.

Dapatkan gambaran prestasi halaman anda dengan memilih bahagian garis masa profil dan melihat panel ringkasan:

![Edge profiler snapshot](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.ms.png)

Periksa panel Log Acara untuk melihat jika ada acara yang mengambil masa lebih daripada 15 ms:

![Edge event log](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.ms.png)

✅ Kenali profiler anda! Buka alat pembangun di laman ini dan lihat jika ada halangan. Apakah aset yang paling lambat dimuat? Yang paling pantas?

## Apa yang Perlu Dicari Semasa Profiling

Menjalankan profiler hanyalah permulaan - kemahiran sebenar adalah mengetahui apa yang sebenarnya diberitahu oleh carta berwarna-warni itu. Jangan risau, anda akan terbiasa membacanya. Pembangun berpengalaman telah belajar mengenal pasti tanda amaran sebelum ia menjadi masalah besar.

Mari kita bincangkan suspek biasa - pengganggu prestasi yang cenderung menyelinap ke dalam projek web. Seperti bagaimana Marie Curie perlu memantau tahap radiasi dengan teliti di makmalnya, kita perlu memerhatikan corak tertentu yang menunjukkan masalah yang sedang berlaku. Menangkap ini lebih awal akan menjimatkan banyak kekecewaan untuk anda (dan pengguna anda).

**Saiz aset**: Laman web telah menjadi semakin "berat" selama bertahun-tahun, dan banyak berat tambahan itu datang dari imej. Ia seperti kita telah memasukkan lebih banyak ke dalam beg digital kita.

✅ Lihat [Internet Archive](https://httparchive.org/reports/page-weight) untuk melihat bagaimana saiz halaman telah berkembang dari masa ke masa - ia sangat mendedahkan.

**Cara untuk memastikan aset anda dioptimumkan:**
- **Kompres** imej tersebut! Format moden seperti WebP boleh mengurangkan saiz fail dengan ketara
- **Hantar** saiz imej yang sesuai untuk setiap peranti - tidak perlu menghantar imej desktop besar ke telefon
- **Minify** CSS dan JavaScript anda - setiap byte penting
- **Gunakan** pemuatan malas supaya imej hanya dimuat turun apabila pengguna benar-benar menatal ke arahnya

**Traversals DOM**: Pelayar perlu membina Model Objek Dokumen berdasarkan kod yang anda tulis, jadi demi prestasi halaman yang baik, pastikan tag anda minimum, hanya menggunakan dan menggayakan apa yang diperlukan oleh halaman. Sebagai contoh, CSS berlebihan yang dikaitkan dengan halaman boleh dioptimumkan; gaya yang hanya perlu digunakan pada satu halaman tidak perlu dimasukkan dalam helaian gaya utama.

**Strategi utama untuk pengoptimuman DOM:**
- **Kurangkan** bilangan elemen HTML dan tahap sarang
- **Buang** peraturan CSS yang tidak digunakan dan gabungkan helaian gaya dengan cekap
- **Susun** CSS untuk memuatkan hanya apa yang diperlukan untuk setiap halaman
- **Strukturkan** HTML secara semantik untuk penguraian pelayar yang lebih baik

**JavaScript**: Setiap pembangun JavaScript harus memerhatikan skrip 'render-blocking' yang mesti dimuat sebelum DOM yang lain dapat dilalui dan dilukis ke pelayar. Pertimbangkan menggunakan `defer` dengan skrip inline anda (seperti yang dilakukan dalam modul Terrarium).

**Teknik pengoptimuman JavaScript moden:**
- **Gunakan** atribut `defer` untuk memuatkan skrip selepas penguraian DOM
- **Laksanakan** pembahagian kod untuk memuatkan hanya JavaScript yang diperlukan
- **Gunakan** pemuatan malas untuk fungsi yang tidak kritikal
- **Kurangkan** penggunaan perpustakaan dan rangka kerja yang berat jika boleh

✅ Cuba beberapa laman web di laman [Ujian Kelajuan Laman](https://www.webpagetest.org/) untuk mengetahui lebih lanjut tentang pemeriksaan biasa yang dilakukan untuk menentukan prestasi laman.

Sekarang anda mempunyai idea tentang bagaimana pelayar merender aset yang anda hantar kepadanya, mari kita lihat beberapa perkara terakhir yang perlu anda lakukan untuk melengkapkan sambungan anda:

### Cipta fungsi untuk mengira warna

Sekarang kita akan mencipta fungsi yang menukar data berangka kepada warna yang bermakna. Anggap ia seperti sistem lampu isyarat - hijau untuk tenaga bersih, merah untuk intensiti karbon tinggi.

Fungsi ini akan mengambil data CO2 daripada API kita dan menentukan warna yang paling sesuai mewakili impak alam sekitar. Ia serupa dengan bagaimana saintis menggunakan pengekodan warna dalam peta haba untuk menggambarkan corak data kompleks - daripada suhu lautan hingga pembentukan bintang. Mari tambahkan ini ke `/src/index.js`, tepat selepas pembolehubah `const` yang kita tetapkan sebelum ini:

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

**Mari kita pecahkan fungsi kecil yang bijak ini:**
- **Menyiapkan** dua array - satu untuk tahap CO2, satu lagi untuk warna (hijau = bersih, coklat = kotor!)
- **Mencari** padanan terdekat dengan nilai CO2 sebenar kita menggunakan beberapa pengisihan array yang bijak
- **Mengambil** warna yang sepadan menggunakan kaedah findIndex()
- **Menghantar** mesej kepada skrip latar belakang Chrome dengan warna yang dipilih
- **Menggunakan** template literals (backticks) untuk pemformatan string yang lebih bersih
- **Menjaga** semuanya teratur dengan deklarasi const

API `chrome.runtime` [API](https://developer.chrome.com/extensions/runtime) adalah seperti sistem saraf sambungan anda - ia mengendalikan semua komunikasi dan tugas di belakang tabir:

> "Gunakan API chrome.runtime untuk mendapatkan halaman latar belakang, mengembalikan butiran tentang manifest, dan mendengar serta bertindak balas terhadap acara dalam kitaran hayat aplikasi atau sambungan. Anda juga boleh menggunakan API ini untuk menukar laluan relatif URL kepada URL yang berkelayakan sepenuhnya."

**Mengapa API Chrome Runtime sangat berguna:**
- **Membolehkan** bahagian yang berbeza dalam sambungan anda berkomunikasi antara satu sama lain
- **Mengendalikan** kerja latar belakang tanpa membekukan antara muka pengguna
- **Menguruskan** acara kitaran hayat sambungan anda
- **Memudahkan** penghantaran mesej antara skrip

✅ Jika anda sedang membangunkan sambungan pelayar ini untuk Edge, mungkin mengejutkan anda bahawa anda menggunakan API chrome. Versi pelayar Edge yang lebih baru berjalan pada enjin pelayar Chromium, jadi anda boleh memanfaatkan alat ini.

> **Tip Pro**: Jika anda ingin memprofilkan sambungan pelayar, lancarkan alat pembangun dari dalam sambungan itu sendiri, kerana ia adalah instance pelayar yang berasingan. Ini memberi anda akses kepada metrik prestasi khusus sambungan.

### Tetapkan warna ikon lalai

Sebelum kita mula mengambil data sebenar, mari kita berikan sambungan kita titik permulaan. Tiada siapa yang suka melihat ikon yang kosong atau kelihatan rosak. Kita akan mulakan dengan warna hijau supaya pengguna tahu sambungan itu berfungsi dari saat mereka memasangnya.

Dalam fungsi `init()` anda, mari tetapkan ikon hijau lalai itu:

```javascript
chrome.runtime.sendMessage({
	action: 'updateIcon',
	value: {
		color: 'green',
	},
});
```

**Apa yang dicapai oleh inisialisasi ini:**
- **Menetapkan** warna hijau neutral sebagai keadaan lalai
- **Memberikan** maklum balas visual segera apabila sambungan dimuat
- **Menetapkan** corak komunikasi dengan skrip latar belakang
- **Memastikan** pengguna melihat sambungan yang berfungsi sebelum data dimuat

### Panggil fungsi, laksanakan panggilan

Sekarang mari kita sambungkan semuanya supaya apabila data CO2 segar masuk, ikon anda secara automatik dikemas kini dengan warna yang betul. Ia seperti menyambungkan litar terakhir dalam peranti elektronik - tiba-tiba semua komponen individu berfungsi sebagai satu sistem.

Tambahkan baris ini tepat selepas anda mendapatkan data CO2 daripada API:

```javascript
// After retrieving CO2 data from the API
// let CO2 = data.data[0].intensity.actual;
calculateColor(CO2);
```

**Apa yang dicapai oleh integrasi ini:**
- **Menyambungkan** aliran data API dengan sistem penunjuk visual
- **Mencetuskan** kemas kini ikon secara automatik apabila data baru tiba
- **Memastikan** maklum balas visual masa nyata berdasarkan intensiti karbon semasa
- **Menjaga** pemisahan kebimbangan antara pengambilan data dan logik paparan

Dan akhirnya, dalam `/dist/background.js`, tambahkan pendengar untuk panggilan tindakan latar belakang ini:

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

**Apa yang dilakukan oleh skrip latar belakang ini:**
- **Mendengar** mesej daripada skrip utama anda (seperti penyambut tetamu mengambil panggilan)
- **Memproses** permintaan 'updateIcon' untuk menukar ikon toolbar anda
- **Mencipta** ikon baru secara langsung menggunakan API Canvas
- **Melukis** bulatan berwarna sederhana yang menunjukkan intensiti karbon semasa
- **Mengemas kini** toolbar pelayar anda dengan ikon yang baru
- **Menggunakan** OffscreenCanvas untuk prestasi yang lancar (tanpa menyekat UI)

✅ Anda akan belajar lebih lanjut tentang API Canvas dalam pelajaran [Permainan Angkasa](../../6-space-game/2-drawing-to-canvas/README.md).

**Masa untuk menguji sambungan anda:**
- **Bina** semuanya dengan `npm run build`
- **Muat semula** sambungan anda dalam pelayar (jangan lupa langkah ini)
- **Buka** sambungan anda dan lihat ikon itu berubah warna
- **Periksa** bagaimana ia bertindak balas terhadap data karbon sebenar dari seluruh dunia

Sekarang anda akan tahu sekilas pandang sama ada masa yang sesuai untuk mencuci pakaian atau jika anda harus menunggu tenaga yang lebih bersih. Anda baru sahaja membina sesuatu yang benar-benar berguna dan belajar tentang prestasi pelayar sepanjang perjalanan.

## Cabaran Ejen GitHub Copilot 🚀

Gunakan mod Ejen untuk melengkapkan cabaran berikut:

**Deskripsi:** Tingkatkan keupayaan pemantauan prestasi sambungan pelayar dengan menambah ciri yang menjejaki dan memaparkan masa muat untuk komponen yang berbeza dalam sambungan.

**Arahan:** Cipta sistem pemantauan prestasi untuk sambungan pelayar yang mengukur dan mencatat masa yang diambil untuk mengambil data CO2 daripada API, mengira warna, dan mengemas kini ikon. Tambahkan fungsi yang dipanggil `performanceTracker` yang menggunakan API Prestasi untuk mengukur operasi ini dan memaparkan hasilnya dalam konsol pelayar dengan cap masa dan metrik tempoh.

Ketahui lebih lanjut tentang [mod ejen](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## 🚀 Cabaran
Berikut adalah misi detektif yang menarik: pilih beberapa laman web sumber terbuka yang telah wujud selama bertahun-tahun (contohnya Wikipedia, GitHub, atau Stack Overflow) dan selidiki sejarah komit mereka. Bolehkah anda mengenal pasti di mana mereka membuat penambahbaikan prestasi? Masalah apa yang sering muncul?

**Pendekatan penyiasatan anda:**
- **Cari** mesej komit untuk perkataan seperti "optimize," "performance," atau "faster"
- **Perhatikan** corak - adakah mereka sering membetulkan jenis masalah yang sama?
- **Kenal pasti** punca biasa yang menyebabkan laman web menjadi perlahan
- **Kongsi** apa yang anda temui - pembangun lain boleh belajar daripada contoh dunia sebenar

## Kuiz Selepas Kuliah

[Kuiz selepas kuliah](https://ff-quizzes.netlify.app/web/quiz/28)

## Ulasan & Kajian Kendiri

Pertimbangkan untuk melanggan [newsletter prestasi](https://perf.email/)

Selidiki beberapa cara pelayar mengukur prestasi web dengan melihat tab prestasi dalam alat web mereka. Adakah anda menemui sebarang perbezaan besar?

## Tugasan

[Analisis laman web untuk prestasi](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.