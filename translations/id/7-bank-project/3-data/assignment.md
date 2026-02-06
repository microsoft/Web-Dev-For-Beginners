# Penugasan Refactoring dan Dokumentasi Kode

## Tujuan Pembelajaran

Dengan menyelesaikan penugasan ini, Anda akan berlatih keterampilan pengembangan perangkat lunak penting yang digunakan oleh pengembang profesional setiap hari. Anda akan belajar mengorganisasi kode agar mudah dipelihara, mengurangi duplikasi melalui abstraksi, dan mendokumentasikan pekerjaan Anda untuk pengembang di masa depan (termasuk diri Anda sendiri!).

Kode yang bersih dan terdokumentasi dengan baik sangat penting untuk proyek pengembangan web dunia nyata di mana banyak pengembang bekerja sama dan basis kode berkembang seiring waktu.

## Gambaran Penugasan

File `app.js` aplikasi perbankan Anda telah berkembang pesat dengan fungsionalitas login, registrasi, dan dashboard. Saatnya untuk merapikan kode ini menggunakan praktik pengembangan profesional untuk meningkatkan keterbacaan, kemudahan pemeliharaan, dan mengurangi duplikasi.

## Instruksi

Ubah kode `app.js` Anda saat ini dengan menerapkan tiga teknik refactoring inti berikut:

### 1. Ekstraksi Konstanta Konfigurasi

**Tugas**: Buat bagian konfigurasi di bagian atas file Anda dengan konstanta yang dapat digunakan kembali.

**Panduan implementasi:**
- Ekstrak URL dasar API server (saat ini ditulis langsung di beberapa tempat)
- Buat konstanta untuk pesan error yang muncul di beberapa fungsi
- Pertimbangkan untuk mengekstrak jalur rute dan ID elemen yang sering digunakan

**Contoh struktur:**
```javascript
// Configuration constants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Buat Fungsi Permintaan Terpadu

**Tugas**: Bangun fungsi `sendRequest()` yang dapat digunakan kembali untuk menghilangkan kode duplikat antara `createAccount()` dan `getAccount()`.

**Persyaratan:**
- Menangani permintaan GET dan POST
- Menyertakan penanganan error yang tepat
- Mendukung berbagai endpoint URL
- Menerima data body permintaan opsional

**Panduan tanda tangan fungsi:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation here
}
```

### 3. Tambahkan Dokumentasi Kode Profesional

**Tugas**: Dokumentasikan kode Anda dengan komentar yang jelas dan membantu yang menjelaskan "mengapa" di balik logika Anda.

**Standar dokumentasi:**
- Tambahkan dokumentasi fungsi yang menjelaskan tujuan, parameter, dan nilai pengembalian
- Sertakan komentar inline untuk logika kompleks atau aturan bisnis
- Kelompokkan fungsi terkait bersama dengan header bagian
- Jelaskan pola kode yang tidak jelas atau solusi khusus browser

**Contoh gaya dokumentasi:**
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

## Kriteria Keberhasilan

Kode yang telah dirapikan harus menunjukkan praktik pengembangan profesional berikut:

### Implementasi Teladan
- ✅ **Konstanta**: Semua string ajaib dan URL diekstraksi ke dalam konstanta yang diberi nama dengan jelas
- ✅ **Prinsip DRY**: Logika permintaan umum dikonsolidasikan ke dalam fungsi `sendRequest()` yang dapat digunakan kembali
- ✅ **Dokumentasi**: Fungsi memiliki komentar JSDoc yang jelas yang menjelaskan tujuan dan parameter
- ✅ **Organisasi**: Kode dikelompokkan secara logis dengan header bagian dan format yang konsisten
- ✅ **Penanganan Error**: Penanganan error yang ditingkatkan menggunakan fungsi permintaan baru

### Implementasi Memadai
- ✅ **Konstanta**: Sebagian besar nilai yang berulang telah diekstraksi, dengan beberapa nilai yang masih ditulis langsung
- ✅ **Faktorisasi**: Fungsi dasar `sendRequest()` dibuat tetapi mungkin tidak menangani semua kasus tepi
- ✅ **Komentar**: Fungsi utama didokumentasikan, meskipun beberapa penjelasan bisa lebih lengkap
- ✅ **Keterbacaan**: Kode umumnya terorganisasi dengan baik dengan beberapa area yang perlu diperbaiki

### Perlu Peningkatan
- ❌ **Konstanta**: Banyak string ajaib dan URL tetap ditulis langsung di seluruh file
- ❌ **Duplikasi**: Duplikasi kode yang signifikan tetap ada di antara fungsi yang serupa
- ❌ **Dokumentasi**: Komentar yang hilang atau tidak memadai yang tidak menjelaskan tujuan kode
- ❌ **Organisasi**: Kode tidak memiliki struktur yang jelas dan pengelompokan logis

## Pengujian Kode yang Telah Dirapikan

Setelah refactoring, pastikan aplikasi perbankan Anda masih berfungsi dengan baik:

1. **Uji semua alur pengguna**: Registrasi, login, tampilan dashboard, dan penanganan error
2. **Verifikasi panggilan API**: Pastikan fungsi `sendRequest()` Anda berfungsi untuk pembuatan dan pengambilan akun
3. **Periksa skenario error**: Uji dengan kredensial yang tidak valid dan error jaringan
4. **Tinjau output konsol**: Pastikan tidak ada error baru yang muncul selama refactoring

## Panduan Pengumpulan

Kirim file `app.js` yang telah dirapikan dengan:
- Header bagian yang jelas yang mengorganisasi berbagai fungsionalitas
- Format dan indentasi kode yang konsisten
- Dokumentasi JSDoc lengkap untuk semua fungsi
- Komentar singkat di bagian atas yang menjelaskan pendekatan refactoring Anda

**Tantangan Bonus**: Buat file dokumentasi kode sederhana (`CODE_STRUCTURE.md`) yang menjelaskan arsitektur aplikasi Anda dan bagaimana berbagai fungsi bekerja bersama.

## Koneksi Dunia Nyata

Penugasan ini mencerminkan jenis pemeliharaan kode yang dilakukan pengembang profesional secara teratur. Dalam pengaturan industri:
- **Review kode** mengevaluasi keterbacaan dan kemudahan pemeliharaan seperti penugasan ini
- **Utang teknis** menumpuk ketika kode tidak dirapikan dan didokumentasikan secara teratur
- **Kolaborasi tim** bergantung pada kode yang jelas dan terdokumentasi dengan baik yang dapat dipahami oleh anggota tim baru
- **Perbaikan bug** jauh lebih mudah dalam basis kode yang terorganisasi dengan baik dengan abstraksi yang tepat

Keterampilan yang Anda latih di sini - mengekstraksi konstanta, menghilangkan duplikasi, dan menulis dokumentasi yang jelas - adalah dasar dari pengembangan perangkat lunak profesional.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang timbul dari penggunaan terjemahan ini.