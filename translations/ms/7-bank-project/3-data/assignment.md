# Tugasan Penstrukturan Semula Kod dan Dokumentasi

## Objektif Pembelajaran

Dengan menyelesaikan tugasan ini, anda akan berlatih kemahiran pembangunan perisian penting yang digunakan oleh pembangun profesional setiap hari. Anda akan belajar mengatur kod untuk kemudahan penyelenggaraan, mengurangkan pendua melalui abstraksi, dan mendokumentasikan kerja anda untuk pembangun masa depan (termasuk diri anda!).

Kod yang bersih dan didokumentasikan dengan baik adalah penting untuk projek pembangunan web dunia nyata di mana ramai pembangun bekerjasama dan pangkalan kod berkembang dari masa ke masa.

## Gambaran Keseluruhan Tugasan

Fail `app.js` aplikasi perbankan anda telah berkembang dengan ketara dengan fungsi log masuk, pendaftaran, dan paparan papan pemuka. Kini tiba masanya untuk menstruktur semula kod ini menggunakan amalan pembangunan profesional untuk meningkatkan kebolehbacaan, kemudahan penyelenggaraan, dan mengurangkan pendua.

## Arahan

Ubah kod `app.js` semasa anda dengan melaksanakan tiga teknik penstrukturan semula utama ini:

### 1. Ekstrak Konstanta Konfigurasi

**Tugas**: Buat bahagian konfigurasi di bahagian atas fail anda dengan konstanta yang boleh digunakan semula.

**Panduan pelaksanaan:**
- Ekstrak URL asas API pelayan (yang kini ditulis secara langsung di beberapa tempat)
- Buat konstanta untuk mesej ralat yang muncul dalam beberapa fungsi
- Pertimbangkan untuk mengekstrak laluan dan ID elemen yang digunakan berulang kali

**Struktur contoh:**
```javascript
// Configuration constants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Buat Fungsi Permintaan Bersatu

**Tugas**: Bina fungsi `sendRequest()` yang boleh digunakan semula untuk menghapuskan kod pendua antara `createAccount()` dan `getAccount()`.

**Keperluan:**
- Mengendalikan permintaan GET dan POST
- Termasuk pengendalian ralat yang betul
- Menyokong titik akhir URL yang berbeza
- Menerima data badan permintaan secara pilihan

**Panduan tandatangan fungsi:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation here
}
```

### 3. Tambahkan Dokumentasi Kod Profesional

**Tugas**: Dokumentasikan kod anda dengan komen yang jelas dan berguna yang menerangkan "mengapa" di sebalik logik anda.

**Piawaian dokumentasi:**
- Tambahkan dokumentasi fungsi yang menerangkan tujuan, parameter, dan nilai pulangan
- Sertakan komen dalam baris untuk logik kompleks atau peraturan perniagaan
- Kumpulkan fungsi berkaitan bersama dengan tajuk bahagian
- Terangkan sebarang corak kod yang tidak jelas atau penyelesaian khusus pelayar

**Gaya dokumentasi contoh:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Prevent default form submission to handle with JavaScript
  event.preventDefault();
  
  // Your implementation...
}
```

## Kriteria Kejayaan

Kod yang telah disusun semula anda harus menunjukkan amalan pembangunan profesional ini:

### Pelaksanaan Cemerlang
- ✅ **Konstanta**: Semua string ajaib dan URL diekstrak ke dalam konstanta yang dinamakan dengan jelas
- ✅ **Prinsip DRY**: Logik permintaan biasa disatukan ke dalam fungsi `sendRequest()` yang boleh digunakan semula
- ✅ **Dokumentasi**: Fungsi mempunyai komen JSDoc yang jelas menerangkan tujuan dan parameter
- ✅ **Organisasi**: Kod dikumpulkan secara logik dengan tajuk bahagian dan format yang konsisten
- ✅ **Pengendalian Ralat**: Pengendalian ralat yang lebih baik menggunakan fungsi permintaan baharu

### Pelaksanaan Memadai
- ✅ **Konstanta**: Kebanyakan nilai yang berulang telah diekstrak, dengan beberapa nilai yang masih ditulis secara langsung
- ✅ **Faktorisasi**: Fungsi `sendRequest()` asas telah dibuat tetapi mungkin tidak mengendalikan semua kes tepi
- ✅ **Komen**: Fungsi utama didokumentasikan, walaupun beberapa penjelasan boleh lebih lengkap
- ✅ **Kebolehbacaan**: Kod umumnya teratur dengan beberapa kawasan untuk penambahbaikan

### Perlu Penambahbaikan
- ❌ **Konstanta**: Banyak string ajaib dan URL masih ditulis secara langsung di seluruh fail
- ❌ **Penduaan**: Penduaan kod yang ketara masih ada antara fungsi yang serupa
- ❌ **Dokumentasi**: Komen yang hilang atau tidak mencukupi yang tidak menerangkan tujuan kod
- ❌ **Organisasi**: Kod kekurangan struktur yang jelas dan pengelompokan logik

## Ujian Kod yang Telah Disusun Semula

Selepas penstrukturan semula, pastikan aplikasi perbankan anda masih berfungsi dengan betul:

1. **Uji semua aliran pengguna**: Pendaftaran, log masuk, paparan papan pemuka, dan pengendalian ralat
2. **Sahkan panggilan API**: Pastikan fungsi `sendRequest()` anda berfungsi untuk kedua-dua penciptaan dan pengambilan akaun
3. **Periksa senario ralat**: Uji dengan kelayakan yang tidak sah dan ralat rangkaian
4. **Semak output konsol**: Pastikan tiada ralat baharu diperkenalkan semasa penstrukturan semula

## Garis Panduan Penyerahan

Serahkan fail `app.js` yang telah disusun semula dengan:
- Tajuk bahagian yang jelas mengatur fungsi yang berbeza
- Format dan indentasi kod yang konsisten
- Dokumentasi JSDoc lengkap untuk semua fungsi
- Komen ringkas di bahagian atas yang menerangkan pendekatan penstrukturan semula anda

**Cabaran Bonus**: Buat fail dokumentasi kod ringkas (`CODE_STRUCTURE.md`) yang menerangkan seni bina aplikasi anda dan bagaimana fungsi yang berbeza berfungsi bersama.

## Sambungan Dunia Nyata

Tugasan ini mencerminkan jenis penyelenggaraan kod yang dilakukan oleh pembangun profesional secara berkala. Dalam tetapan industri:
- **Semakan kod** menilai kebolehbacaan dan kemudahan penyelenggaraan seperti tugasan ini
- **Hutang teknikal** terkumpul apabila kod tidak disusun semula dan didokumentasikan secara berkala
- **Kerjasama pasukan** bergantung pada kod yang jelas dan didokumentasikan dengan baik yang boleh difahami oleh ahli pasukan baharu
- **Pembaikan pepijat** menjadi lebih mudah dalam pangkalan kod yang teratur dengan abstraksi yang betul

Kemahiran yang anda latih di sini - mengekstrak konstanta, menghapuskan pendua, dan menulis dokumentasi yang jelas - adalah asas kepada pembangunan perisian profesional.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.