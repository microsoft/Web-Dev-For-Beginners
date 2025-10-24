<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a203e560e58ccc6ba68bffc40c7c8676",
  "translation_date": "2025-10-24T14:18:04+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/assignment.md",
  "language_code": "id"
}
-->
# Menganalisis Situs untuk Performa

## Gambaran Tugas

Analisis performa adalah keterampilan penting bagi pengembang web modern. Dalam tugas ini, Anda akan melakukan audit performa menyeluruh pada sebuah situs web nyata, menggunakan alat berbasis browser dan layanan pihak ketiga untuk mengidentifikasi hambatan dan mengusulkan strategi optimasi.

Tugas Anda adalah memberikan laporan performa yang mendetail yang menunjukkan pemahaman Anda tentang prinsip-prinsip performa web dan kemampuan Anda menggunakan alat analisis profesional secara efektif.

## Instruksi Tugas

**Pilih sebuah situs web** untuk dianalisis - pilih salah satu dari opsi berikut:
- Situs web populer yang sering Anda gunakan (situs berita, media sosial, e-commerce)
- Situs web proyek open-source (halaman GitHub, situs dokumentasi)
- Situs web bisnis lokal atau situs portofolio
- Proyek Anda sendiri atau tugas sebelumnya

**Lakukan analisis multi-alat** menggunakan setidaknya tiga pendekatan berbeda:
- **Browser DevTools** - Gunakan tab Performance di Chrome/Edge untuk profil mendetail
- **Alat audit online** - Coba Lighthouse, GTmetrix, atau WebPageTest
- **Analisis jaringan** - Periksa pemuatan sumber daya, ukuran file, dan pola permintaan

**Dokumentasikan temuan Anda** dalam laporan komprehensif yang mencakup:

### Analisis Metrik Performa
- **Pengukuran waktu pemuatan** dari berbagai alat dan perspektif
- **Skor Core Web Vitals** (LCP, FID, CLS) dan implikasinya
- **Rincian sumber daya** yang menunjukkan aset mana yang paling berkontribusi pada waktu pemuatan
- **Analisis waterfall jaringan** yang mengidentifikasi sumber daya yang menghambat

### Identifikasi Masalah
- **Hambatan performa spesifik** dengan data pendukung
- **Analisis akar masalah** yang menjelaskan mengapa setiap masalah terjadi
- **Penilaian dampak pengguna** yang menggambarkan bagaimana masalah memengaruhi pengguna nyata
- **Peringkat prioritas** masalah berdasarkan tingkat keparahan dan kesulitan perbaikan

### Rekomendasi Optimasi
- **Perbaikan spesifik dan dapat dilakukan** dengan dampak yang diharapkan
- **Strategi implementasi** untuk setiap perubahan yang direkomendasikan
- **Praktik terbaik modern** yang dapat diterapkan (lazy loading, kompresi, dll.)
- **Alat dan teknik** untuk pemantauan performa berkelanjutan

## Persyaratan Penelitian

**Jangan hanya mengandalkan alat browser** - perluas analisis Anda menggunakan:

**Layanan audit pihak ketiga:**
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) - Audit komprehensif
- [GTmetrix](https://gtmetrix.com/) - Wawasan performa dan optimasi
- [WebPageTest](https://www.webpagetest.org/) - Kondisi pengujian dunia nyata
- [Pingdom](https://tools.pingdom.com/) - Pemantauan performa global

**Alat analisis khusus:**
- [Bundle Analyzer](https://bundlephobia.com/) - Analisis ukuran bundle JavaScript
- [Alat optimasi gambar](https://squoosh.app/) - Peluang optimasi aset
- [Analisis header keamanan](https://securityheaders.com/) - Dampak performa keamanan

## Format Hasil

Buat laporan profesional (2-3 halaman) yang mencakup:

1. **Ringkasan Eksekutif** - Gambaran temuan dan rekomendasi utama
2. **Metodologi** - Alat yang digunakan dan pendekatan pengujian
3. **Penilaian Performa Saat Ini** - Metrik dan pengukuran dasar
4. **Masalah yang Diidentifikasi** - Analisis masalah mendetail dengan data pendukung
5. **Rekomendasi** - Strategi perbaikan yang diprioritaskan
6. **Peta Jalan Implementasi** - Rencana optimasi langkah demi langkah

**Sertakan bukti visual:**
- Tangkapan layar alat performa dan metrik
- Grafik atau diagram yang menunjukkan data performa
- Perbandingan sebelum/sesudah jika memungkinkan
- Diagram waterfall jaringan dan rincian sumber daya

## Rubrik

| Kriteria | Unggul (90-100%) | Cukup (70-89%) | Perlu Peningkatan (50-69%) |
| -------- | ---------------- | --------------- | -------------------------- |
| **Kedalaman Analisis** | Analisis komprehensif menggunakan 4+ alat dengan metrik mendetail, analisis akar masalah, dan penilaian dampak pengguna | Analisis baik menggunakan 3 alat dengan metrik jelas dan identifikasi masalah dasar | Analisis dasar menggunakan 2 alat dengan kedalaman terbatas dan identifikasi masalah minimal |
| **Keanekaragaman Alat** | Menggunakan alat browser + 3+ layanan pihak ketiga dengan analisis komparatif dan wawasan dari masing-masing | Menggunakan alat browser + 2 layanan pihak ketiga dengan beberapa analisis komparatif | Menggunakan alat browser + 1 layanan pihak ketiga dengan perbandingan terbatas |
| **Identifikasi Masalah** | Mengidentifikasi 5+ masalah performa spesifik dengan analisis akar masalah mendetail dan dampak yang terukur | Mengidentifikasi 3-4 masalah performa dengan analisis baik dan beberapa pengukuran dampak | Mengidentifikasi 1-2 masalah performa dengan analisis dasar |
| **Rekomendasi** | Memberikan rekomendasi spesifik dan dapat dilakukan dengan detail implementasi, dampak yang diharapkan, dan praktik terbaik modern | Memberikan rekomendasi baik dengan beberapa panduan implementasi dan hasil yang diharapkan | Memberikan rekomendasi dasar dengan detail implementasi terbatas |
| **Presentasi Profesional** | Laporan terorganisasi dengan baik, struktur jelas, bukti visual, ringkasan eksekutif, dan format profesional | Organisasi baik dengan beberapa bukti visual dan struktur jelas | Organisasi dasar dengan bukti visual minimal |

## Hasil Pembelajaran

Dengan menyelesaikan tugas ini, Anda akan menunjukkan kemampuan untuk:
- **Menerapkan** alat dan metodologi analisis performa profesional
- **Mengidentifikasi** hambatan performa menggunakan analisis berbasis data
- **Menganalisis** hubungan antara kualitas kode dan pengalaman pengguna
- **Merekomendasikan** strategi optimasi spesifik dan dapat dilakukan
- **Mengkomunikasikan** temuan teknis dalam format profesional

Tugas ini memperkuat konsep performa yang dipelajari dalam pelajaran sambil membangun keterampilan praktis yang akan Anda gunakan sepanjang karier pengembangan web Anda.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang salah yang timbul dari penggunaan terjemahan ini.