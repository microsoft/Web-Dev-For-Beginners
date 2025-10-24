<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "25b8d28b8531352d4eb67291fd7824c4",
  "translation_date": "2025-10-24T14:43:16+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/assignment.md",
  "language_code": "ms"
}
-->
# Mengguna API

## Gambaran Keseluruhan

API membuka peluang tanpa batas untuk pembangunan web yang kreatif! Dalam tugasan ini, anda akan memilih API luaran dan membina sambungan pelayar yang menyelesaikan masalah sebenar atau menyediakan fungsi yang bernilai kepada pengguna.

## Arahan

### Langkah 1: Pilih API Anda
Pilih API daripada [senarai API awam percuma](https://github.com/public-apis/public-apis) yang telah disusun ini. Pertimbangkan kategori berikut:

**Pilihan popular untuk pemula:**
- **Hiburan**: [Dog CEO API](https://dog.ceo/dog-api/) untuk gambar anjing secara rawak
- **Cuaca**: [OpenWeatherMap](https://openweathermap.org/api) untuk data cuaca semasa
- **Petikan**: [Quotable API](https://quotable.io/) untuk petikan inspirasi
- **Berita**: [NewsAPI](https://newsapi.org/) untuk tajuk berita terkini
- **Fakta Menarik**: [Numbers API](http://numbersapi.com/) untuk fakta menarik tentang nombor

### Langkah 2: Rancang Sambungan Anda
Sebelum mula menulis kod, jawab soalan perancangan ini:
- Masalah apa yang diselesaikan oleh sambungan anda?
- Siapa pengguna sasaran anda?
- Data apa yang akan disimpan dalam storan tempatan?
- Bagaimana anda akan menangani kegagalan API atau had kadar?

### Langkah 3: Bina Sambungan Anda
Sambungan anda harus merangkumi:

**Ciri Wajib:**
- Input borang untuk sebarang parameter API yang diperlukan
- Integrasi API dengan pengendalian ralat yang betul
- Storan tempatan untuk keutamaan pengguna atau kunci API
- Antara muka pengguna yang bersih dan responsif
- Status pemuatan dan maklum balas pengguna

**Keperluan Kod:**
- Gunakan ciri JavaScript moden (ES6+)
- Laksanakan async/await untuk panggilan API
- Sertakan pengendalian ralat yang betul dengan blok try/catch
- Tambahkan komen bermakna yang menerangkan kod anda
- Ikuti format kod yang konsisten

### Langkah 4: Uji dan Perbaiki
- Uji sambungan anda dengan pelbagai input
- Tangani kes tepi (tiada internet, respons API tidak sah)
- Pastikan sambungan anda berfungsi selepas pelayar dimulakan semula
- Tambahkan mesej ralat yang mesra pengguna

## Cabaran Bonus

Tingkatkan sambungan anda ke tahap seterusnya:
- Tambahkan beberapa titik akhir API untuk fungsi yang lebih kaya
- Laksanakan caching data untuk mengurangkan panggilan API
- Cipta pintasan papan kekunci untuk tindakan biasa
- Tambahkan ciri eksport/import data
- Laksanakan pilihan penyesuaian pengguna

## Keperluan Penyerahan

1. **Sambungan pelayar yang berfungsi** yang berjaya diintegrasikan dengan API pilihan anda
2. **Fail README** yang menerangkan:
   - API yang anda pilih dan sebabnya
   - Cara memasang dan menggunakan sambungan anda
   - Sebarang kunci API atau persediaan yang diperlukan
   - Tangkapan skrin sambungan anda semasa berfungsi
3. **Kod yang bersih dan dikomen** mengikut amalan JavaScript moden

## Rubrik

| Kriteria | Cemerlang (90-100%) | Mahir (80-89%) | Sedang Membangun (70-79%) | Permulaan (60-69%) |
|----------|---------------------|---------------------|---------------------|--------------------|
| **Integrasi API** | Integrasi API yang sempurna dengan pengendalian ralat yang menyeluruh dan pengurusan kes tepi | Integrasi API yang berjaya dengan pengendalian ralat asas | API berfungsi tetapi pengendalian ralat terhad | Integrasi API mempunyai masalah besar |
| **Kualiti Kod** | JavaScript moden yang bersih, dikomen dengan baik, mengikut amalan terbaik | Struktur kod yang baik dengan komen yang mencukupi | Kod berfungsi tetapi memerlukan organisasi yang lebih baik | Kualiti kod yang lemah dengan komen yang minimum |
| **Pengalaman Pengguna** | Antara muka yang kemas dengan status pemuatan dan maklum balas pengguna yang sangat baik | Antara muka yang baik dengan maklum balas pengguna asas | Antara muka asas yang berfungsi dengan memadai | Pengalaman pengguna yang lemah dengan antara muka yang mengelirukan |
| **Storan Tempatan** | Penggunaan storan tempatan yang canggih dengan pengesahan dan pengurusan data | Pelaksanaan storan tempatan yang betul untuk ciri utama | Pelaksanaan storan tempatan asas | Penggunaan storan tempatan yang minimum atau tidak betul |
| **Dokumentasi** | README yang komprehensif dengan arahan persediaan dan tangkapan skrin | Dokumentasi yang baik meliputi kebanyakan keperluan | Dokumentasi asas yang kekurangan beberapa butiran | Dokumentasi yang lemah atau tiada |

## Petua Memulakan

1. **Mulakan dengan mudah**: Pilih API yang tidak memerlukan pengesahan yang kompleks
2. **Baca dokumentasi**: Fahami sepenuhnya titik akhir dan respons API pilihan anda
3. **Rancang UI anda**: Lakarkan antara muka sambungan anda sebelum mula menulis kod
4. **Uji dengan kerap**: Bina secara berperingkat dan uji setiap ciri semasa anda menambahnya
5. **Tangani ralat**: Sentiasa anggap panggilan API mungkin gagal dan rancang dengan sewajarnya

## Sumber

- [Dokumentasi Sambungan Pelayar](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Panduan Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Tutorial Storan Tempatan](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [Pengendalian dan Penguraian JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Selamat membina sesuatu yang berguna dan kreatif! 🚀

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.