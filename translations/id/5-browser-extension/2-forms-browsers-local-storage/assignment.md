# Adopsi API

## Ikhtisar

API membuka banyak kemungkinan untuk pengembangan web yang kreatif! Dalam tugas ini, Anda akan memilih API eksternal dan membuat ekstensi browser yang menyelesaikan masalah nyata atau memberikan fungsi yang berharga bagi pengguna.

## Instruksi

### Langkah 1: Pilih API Anda
Pilih API dari [daftar API publik gratis](https://github.com/public-apis/public-apis) yang telah dikurasi. Pertimbangkan kategori berikut:

**Pilihan populer untuk pemula:**
- **Hiburan**: [Dog CEO API](https://dog.ceo/dog-api/) untuk gambar anjing acak
- **Cuaca**: [OpenWeatherMap](https://openweathermap.org/api) untuk data cuaca terkini
- **Kutipan**: [Quotable API](https://quotable.io/) untuk kutipan inspiratif
- **Berita**: [NewsAPI](https://newsapi.org/) untuk berita utama terkini
- **Fakta Menarik**: [Numbers API](http://numbersapi.com/) untuk fakta menarik tentang angka

### Langkah 2: Rencanakan Ekstensi Anda
Sebelum mulai coding, jawab pertanyaan perencanaan berikut:
- Masalah apa yang diselesaikan oleh ekstensi Anda?
- Siapa target pengguna Anda?
- Data apa yang akan Anda simpan di local storage?
- Bagaimana Anda akan menangani kegagalan API atau batasan kuota?

### Langkah 3: Bangun Ekstensi Anda
Ekstensi Anda harus mencakup:

**Fitur Wajib:**
- Input formulir untuk parameter API yang diperlukan
- Integrasi API dengan penanganan kesalahan yang tepat
- Penyimpanan lokal untuk preferensi pengguna atau kunci API
- Antarmuka pengguna yang bersih dan responsif
- Status pemuatan dan umpan balik pengguna

**Persyaratan Kode:**
- Gunakan fitur JavaScript modern (ES6+)
- Implementasikan async/await untuk pemanggilan API
- Sertakan penanganan kesalahan yang tepat dengan blok try/catch
- Tambahkan komentar yang bermakna untuk menjelaskan kode Anda
- Ikuti format kode yang konsisten

### Langkah 4: Uji dan Sempurnakan
- Uji ekstensi Anda dengan berbagai input
- Tangani kasus tepi (tidak ada internet, respons API tidak valid)
- Pastikan ekstensi Anda berfungsi setelah browser di-restart
- Tambahkan pesan kesalahan yang ramah pengguna

## Tantangan Bonus

Tingkatkan ekstensi Anda ke level berikutnya:
- Tambahkan beberapa endpoint API untuk fungsi yang lebih kaya
- Implementasikan caching data untuk mengurangi pemanggilan API
- Buat pintasan keyboard untuk tindakan umum
- Tambahkan fitur ekspor/impor data
- Implementasikan opsi kustomisasi pengguna

## Persyaratan Pengumpulan

1. **Ekstensi browser yang berfungsi** yang berhasil terintegrasi dengan API pilihan Anda
2. **File README** yang menjelaskan:
   - API mana yang Anda pilih dan alasannya
   - Cara menginstal dan menggunakan ekstensi Anda
   - Kunci API atau pengaturan yang diperlukan
   - Screenshot ekstensi Anda saat digunakan
3. **Kode yang bersih dan diberi komentar** yang mengikuti praktik JavaScript modern

## Rubrik

| Kriteria | Unggul (90-100%) | Cukup Baik (80-89%) | Berkembang (70-79%) | Pemula (60-69%) |
|----------|------------------|---------------------|---------------------|-----------------|
| **Integrasi API** | Integrasi API sempurna dengan penanganan kesalahan yang komprehensif dan manajemen kasus tepi | Integrasi API berhasil dengan penanganan kesalahan dasar | API berfungsi tetapi memiliki penanganan kesalahan yang terbatas | Integrasi API memiliki masalah signifikan |
| **Kualitas Kode** | JavaScript modern yang bersih, diberi komentar dengan baik, mengikuti praktik terbaik | Struktur kode yang baik dengan komentar yang memadai | Kode berfungsi tetapi membutuhkan organisasi yang lebih baik | Kualitas kode buruk dengan komentar minimal |
| **Pengalaman Pengguna** | Antarmuka yang dipoles dengan status pemuatan dan umpan balik pengguna yang sangat baik | Antarmuka yang baik dengan umpan balik pengguna dasar | Antarmuka dasar yang berfungsi dengan memadai | Pengalaman pengguna buruk dengan antarmuka yang membingungkan |
| **Penyimpanan Lokal** | Penggunaan penyimpanan lokal yang canggih dengan validasi dan manajemen data | Implementasi penyimpanan lokal yang tepat untuk fitur utama | Implementasi penyimpanan lokal dasar | Penggunaan penyimpanan lokal minimal atau tidak benar |
| **Dokumentasi** | README yang komprehensif dengan instruksi pengaturan dan screenshot | Dokumentasi yang baik mencakup sebagian besar persyaratan | Dokumentasi dasar yang kehilangan beberapa detail | Dokumentasi buruk atau tidak ada |

## Tips Memulai

1. **Mulai dengan sederhana**: Pilih API yang tidak memerlukan autentikasi yang rumit
2. **Baca dokumentasi**: Pahami dengan baik endpoint dan respons API yang Anda pilih
3. **Rencanakan UI Anda**: Buat sketsa antarmuka ekstensi Anda sebelum mulai coding
4. **Uji secara berkala**: Bangun secara bertahap dan uji setiap fitur saat Anda menambahkannya
5. **Tangani kesalahan**: Selalu asumsikan pemanggilan API mungkin gagal dan rencanakan solusinya

## Sumber Daya

- [Dokumentasi Ekstensi Browser](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Panduan Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Tutorial Penyimpanan Lokal](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [Parsing dan Penanganan JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Selamat bersenang-senang membangun sesuatu yang berguna dan kreatif! 🚀

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang keliru yang timbul dari penggunaan terjemahan ini.