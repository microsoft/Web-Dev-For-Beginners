<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a203e560e58ccc6ba68bffc40c7c8676",
  "translation_date": "2025-10-24T14:42:35+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/assignment.md",
  "language_code": "ms"
}
-->
# Menganalisis Laman Web untuk Prestasi

## Gambaran Tugasan

Analisis prestasi adalah kemahiran penting bagi pembangun web moden. Dalam tugasan ini, anda akan menjalankan audit prestasi menyeluruh terhadap laman web sebenar, menggunakan alat berasaskan pelayar dan perkhidmatan pihak ketiga untuk mengenal pasti halangan dan mencadangkan strategi pengoptimuman.

Tugas anda adalah menyediakan laporan prestasi terperinci yang menunjukkan pemahaman anda tentang prinsip prestasi web dan keupayaan anda menggunakan alat analisis profesional dengan berkesan.

## Arahan Tugasan

**Pilih laman web** untuk dianalisis - pilih salah satu daripada pilihan berikut:
- Laman web popular yang sering anda gunakan (laman berita, media sosial, e-dagang)
- Laman web projek sumber terbuka (halaman GitHub, laman dokumentasi)
- Laman web perniagaan tempatan atau laman portfolio
- Projek anda sendiri atau kerja kursus terdahulu

**Lakukan analisis pelbagai alat** menggunakan sekurang-kurangnya tiga pendekatan berbeza:
- **DevTools Pelayar** - Gunakan tab Prestasi Chrome/Edge untuk profil terperinci
- **Alat audit dalam talian** - Cuba Lighthouse, GTmetrix, atau WebPageTest
- **Analisis rangkaian** - Periksa pemuatan sumber, saiz fail, dan pola permintaan

**Dokumentasikan penemuan anda** dalam laporan komprehensif yang merangkumi:

### Analisis Metrik Prestasi
- **Pengukuran masa pemuatan** dari pelbagai alat dan perspektif
- **Skor Core Web Vitals** (LCP, FID, CLS) dan implikasinya
- **Pecahan sumber** yang menunjukkan aset mana yang paling menyumbang kepada masa pemuatan
- **Analisis waterfall rangkaian** mengenal pasti sumber yang menyekat

### Pengenalpastian Masalah
- **Halangan prestasi tertentu** dengan data sokongan
- **Analisis punca masalah** menerangkan mengapa setiap isu berlaku
- **Penilaian impak pengguna** menerangkan bagaimana masalah mempengaruhi pengguna sebenar
- **Peringkat keutamaan** isu berdasarkan tahap keseriusan dan kesukaran untuk diperbaiki

### Cadangan Pengoptimuman
- **Penambahbaikan yang spesifik dan boleh dilaksanakan** dengan impak yang dijangka
- **Strategi pelaksanaan** untuk setiap perubahan yang disyorkan
- **Amalan terbaik moden** yang boleh diterapkan (lazy loading, pemampatan, dll.)
- **Alat dan teknik** untuk pemantauan prestasi berterusan

## Keperluan Penyelidikan

**Jangan hanya bergantung pada alat pelayar** - kembangkan analisis anda menggunakan:

**Perkhidmatan audit pihak ketiga:**
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) - Audit menyeluruh
- [GTmetrix](https://gtmetrix.com/) - Wawasan prestasi dan pengoptimuman
- [WebPageTest](https://www.webpagetest.org/) - Keadaan ujian dunia sebenar
- [Pingdom](https://tools.pingdom.com/) - Pemantauan prestasi global

**Alat analisis khusus:**
- [Bundle Analyzer](https://bundlephobia.com/) - Analisis saiz bundle JavaScript
- [Alat pengoptimuman imej](https://squoosh.app/) - Peluang pengoptimuman aset
- [Analisis header keselamatan](https://securityheaders.com/) - Impak prestasi keselamatan

## Format Hasil Kerja

Sediakan laporan profesional (2-3 halaman) yang merangkumi:

1. **Ringkasan Eksekutif** - Gambaran keseluruhan penemuan dan cadangan utama
2. **Metodologi** - Alat yang digunakan dan pendekatan ujian
3. **Penilaian Prestasi Semasa** - Metrik dan pengukuran asas
4. **Isu yang Dikenalpasti** - Analisis masalah terperinci dengan data sokongan
5. **Cadangan** - Strategi penambahbaikan yang diutamakan
6. **Peta Jalan Pelaksanaan** - Pelan pengoptimuman langkah demi langkah

**Sertakan bukti visual:**
- Tangkapan skrin alat prestasi dan metrik
- Carta atau graf yang menunjukkan data prestasi
- Perbandingan sebelum/selepas jika boleh
- Carta waterfall rangkaian dan pecahan sumber

## Rubrik

| Kriteria | Cemerlang (90-100%) | Memadai (70-89%) | Perlu Penambahbaikan (50-69%) |
| -------- | ------------------- | ----------------- | -------------------------- |
| **Kedalaman Analisis** | Analisis menyeluruh menggunakan 4+ alat dengan metrik terperinci, analisis punca masalah, dan penilaian impak pengguna | Analisis baik menggunakan 3 alat dengan metrik jelas dan pengenalpastian masalah asas | Analisis asas menggunakan 2 alat dengan kedalaman terhad dan pengenalpastian masalah minimum |
| **Kepelbagaian Alat** | Menggunakan alat pelayar + 3+ perkhidmatan pihak ketiga dengan analisis perbandingan dan wawasan dari setiap alat | Menggunakan alat pelayar + 2 perkhidmatan pihak ketiga dengan beberapa analisis perbandingan | Menggunakan alat pelayar + 1 perkhidmatan pihak ketiga dengan perbandingan terhad |
| **Pengenalpastian Masalah** | Mengenalpasti 5+ isu prestasi tertentu dengan analisis punca masalah terperinci dan impak yang diukur | Mengenalpasti 3-4 isu prestasi dengan analisis baik dan beberapa pengukuran impak | Mengenalpasti 1-2 isu prestasi dengan analisis asas |
| **Cadangan** | Memberikan cadangan yang spesifik dan boleh dilaksanakan dengan butiran pelaksanaan, impak yang dijangka, dan amalan terbaik moden | Memberikan cadangan baik dengan beberapa panduan pelaksanaan dan hasil yang dijangka | Memberikan cadangan asas dengan butiran pelaksanaan terhad |
| **Pembentangan Profesional** | Laporan yang teratur dengan struktur jelas, bukti visual, ringkasan eksekutif, dan format profesional | Organisasi baik dengan beberapa bukti visual dan struktur jelas | Organisasi asas dengan bukti visual minimum |

## Hasil Pembelajaran

Dengan menyelesaikan tugasan ini, anda akan menunjukkan keupayaan untuk:
- **Mengaplikasikan** alat dan metodologi analisis prestasi profesional
- **Mengenalpasti** halangan prestasi menggunakan analisis berasaskan data
- **Menganalisis** hubungan antara kualiti kod dan pengalaman pengguna
- **Mencadangkan** strategi pengoptimuman yang spesifik dan boleh dilaksanakan
- **Mengkomunikasikan** penemuan teknikal dalam format profesional

Tugasan ini mengukuhkan konsep prestasi yang dipelajari dalam pelajaran sambil membina kemahiran praktikal yang akan anda gunakan sepanjang kerjaya pembangunan web anda.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.