# Audit Komprehensif Aksesibilitas Website

## Instruksi

Dalam tugas ini, Anda akan melakukan audit aksesibilitas tingkat profesional pada sebuah situs web nyata, dengan menerapkan prinsip dan teknik yang telah Anda pelajari. Pengalaman langsung ini akan memperdalam pemahaman Anda tentang hambatan dan solusi aksesibilitas.

Pilihlah situs web yang tampaknya memiliki masalah aksesibilitas—ini akan memberikan lebih banyak peluang belajar dibandingkan menganalisis situs yang sudah sempurna. Kandidat yang baik termasuk situs web lama, aplikasi web yang kompleks, atau situs dengan konten multimedia yang kaya.

### Fase 1: Evaluasi manual strategis

Sebelum menggunakan alat otomatis, lakukan penilaian manual yang komprehensif. Pendekatan yang berpusat pada manusia ini sering kali mengungkap masalah yang tidak terdeteksi oleh alat dan membantu Anda memahami pengalaman pengguna yang sebenarnya.

**🔍 Kriteria evaluasi penting:**

**Navigasi dan Struktur:**
- Bisakah Anda menavigasi seluruh situs hanya menggunakan keyboard (Tab, Shift+Tab, Enter, Space, tombol panah)?
- Apakah indikator fokus terlihat jelas pada semua elemen interaktif?
- Apakah struktur heading (H1-H6) menciptakan kerangka konten yang logis?
- Apakah ada tautan skip untuk langsung menuju konten utama?

**Aksesibilitas Visual:**
- Apakah ada kontras warna yang cukup di seluruh situs (minimal 4.5:1 untuk teks normal)?
- Apakah situs hanya mengandalkan warna untuk menyampaikan informasi penting?
- Apakah semua gambar memiliki teks alternatif yang sesuai?
- Apakah tata letak tetap berfungsi saat diperbesar hingga 200%?

**Konten dan Komunikasi:**
- Apakah ada teks tautan seperti "klik di sini" atau teks tautan yang ambigu?
- Bisakah Anda memahami konten dan fungsionalitas tanpa petunjuk visual?
- Apakah bidang formulir diberi label dan dikelompokkan dengan benar?
- Apakah pesan kesalahan jelas dan membantu?

**Elemen Interaktif:**
- Apakah semua tombol dan kontrol formulir berfungsi hanya dengan keyboard?
- Apakah perubahan konten dinamis diumumkan kepada pembaca layar?
- Apakah dialog modal dan widget kompleks mengikuti pola aksesibilitas yang benar?

📝 **Dokumentasikan temuan Anda** dengan contoh spesifik, tangkapan layar, dan URL halaman. Catat baik masalah maupun hal-hal yang sudah dilakukan dengan baik.

### Fase 2: Pengujian otomatis yang komprehensif

Sekarang validasi dan perluas temuan manual Anda menggunakan alat pengujian aksesibilitas standar industri. Setiap alat memiliki kekuatan yang berbeda, sehingga menggunakan beberapa alat memberikan cakupan yang lengkap.

**🛠️ Alat pengujian yang diperlukan:**

1. **Lighthouse Accessibility Audit** (terintegrasi dalam Chrome/Edge DevTools)
   - Jalankan audit di beberapa halaman
   - Fokus pada metrik dan rekomendasi spesifik
   - Catat skor aksesibilitas Anda dan pelanggaran spesifik

2. **axe DevTools** (ekstensi browser - standar industri)
   - Deteksi masalah yang lebih rinci dibandingkan Lighthouse
   - Memberikan contoh kode spesifik untuk perbaikan
   - Menguji terhadap kriteria WCAG 2.1

3. **WAVE Web Accessibility Evaluator** (ekstensi browser)
   - Representasi visual fitur aksesibilitas
   - Menyoroti baik kesalahan maupun fitur positif
   - Sangat baik untuk memahami struktur halaman

4. **Color Contrast Analyzers**
   - WebAIM Contrast Checker untuk pasangan warna tertentu
   - Ekstensi browser untuk analisis seluruh halaman
   - Uji terhadap standar WCAG AA dan AAA

**🎧 Pengujian teknologi bantu nyata:**
- **Pengujian pembaca layar**: Gunakan NVDA (Windows), VoiceOver (Mac), atau TalkBack (Android)
- **Navigasi hanya dengan keyboard**: Cabut mouse Anda dan navigasikan seluruh situs
- **Pengujian zoom**: Uji fungsionalitas pada tingkat zoom 200% dan 400%
- **Pengujian kontrol suara**: Jika tersedia, coba alat navigasi suara

**📊 Organisasi hasil Anda** dengan membuat spreadsheet utama yang mencakup:
- Deskripsi masalah dan lokasi
- Tingkat keparahan (Kritis/Tinggi/Sedang/Rendah)
- Kriteria keberhasilan WCAG yang dilanggar
- Alat yang mendeteksi masalah
- Tangkapan layar dan bukti

### Fase 3: Dokumentasi temuan yang komprehensif

Buat laporan audit aksesibilitas profesional yang menunjukkan pemahaman Anda tentang masalah teknis dan dampaknya terhadap manusia.

**📋 Bagian laporan yang diperlukan:**

1. **Ringkasan Eksekutif** (1 halaman)
   - URL situs web dan deskripsi singkat
   - Tingkat kematangan aksesibilitas secara keseluruhan
   - 3 masalah paling kritis
   - Perkiraan dampak pada pengguna dengan disabilitas

2. **Metodologi** (½ halaman)
   - Pendekatan pengujian dan alat yang digunakan
   - Halaman yang dievaluasi dan kombinasi perangkat/browser
   - Standar yang dievaluasi (WCAG 2.1 AA)

3. **Temuan Detail** (2-3 halaman)
   - Masalah yang dikategorikan berdasarkan prinsip WCAG (Dapat Dipersepsikan, Dapat Dioperasikan, Dapat Dipahami, dan Kuat)
   - Sertakan tangkapan layar dan contoh spesifik
   - Catat fitur aksesibilitas positif yang Anda temukan
   - Referensi silang dengan hasil alat otomatis

4. **Penilaian Dampak Pengguna** (1 halaman)
   - Bagaimana masalah yang diidentifikasi memengaruhi pengguna dengan berbagai disabilitas
   - Skenario yang menggambarkan pengalaman pengguna nyata
   - Dampak bisnis (risiko hukum, SEO, perluasan basis pengguna)

**📸 Pengumpulan bukti:**
- Tangkapan layar pelanggaran aksesibilitas
- Rekaman layar alur pengguna yang bermasalah
- Laporan alat (simpan sebagai PDF)
- Contoh kode yang menunjukkan masalah

### Fase 4: Rencana remediasi profesional

Kembangkan rencana strategis yang diprioritaskan untuk memperbaiki masalah aksesibilitas. Ini menunjukkan kemampuan Anda untuk berpikir seperti pengembang web profesional yang menghadapi kendala bisnis nyata.

**🎯 Buat rekomendasi perbaikan yang terperinci (minimal 10 masalah):**

**Untuk setiap masalah yang diidentifikasi, berikan:**

- **Deskripsi Masalah**: Penjelasan yang jelas tentang apa yang salah dan mengapa itu bermasalah
- **Referensi WCAG**: Kriteria keberhasilan spesifik yang dilanggar (misalnya, "2.4.4 Tujuan Tautan (Dalam Konteks) - Level A")
- **Dampak Pengguna**: Bagaimana ini memengaruhi orang dengan berbagai disabilitas
- **Solusi**: Perubahan kode spesifik, modifikasi desain, atau perbaikan proses
- **Tingkat Prioritas**: Kritis (menghalangi penggunaan dasar) / Tinggi (hambatan signifikan) / Sedang (masalah kegunaan) / Rendah (peningkatan)
- **Upaya Implementasi**: Estimasi waktu/kompleksitas (Perbaikan cepat / Upaya sedang / Refaktor besar)
- **Verifikasi Pengujian**: Cara memverifikasi bahwa perbaikan berhasil

**Contoh entri perbaikan:**

```
Issue: Generic "Read more" link text appears 8 times on homepage
WCAG Reference: 2.4.4 Link Purpose (In Context) - Level A
User Impact: Screen reader users cannot distinguish between links when viewed in link list
Solution: Replace with descriptive text like "Read more about sustainability initiatives"
Priority: High (major navigation barrier)
Effort: Low (30 minutes to update content)
Testing: Generate link list with screen reader - each link should be meaningful standalone
```

**📈 Fase implementasi strategis:**

- **Fase 1 (0-2 minggu)**: Masalah kritis yang menghalangi fungsionalitas dasar
- **Fase 2 (1-2 bulan)**: Perbaikan prioritas tinggi untuk pengalaman pengguna yang lebih baik
- **Fase 3 (3-6 bulan)**: Peningkatan prioritas sedang dan perbaikan proses
- **Fase 4 (Berlanjut)**: Pemantauan dan peningkatan berkelanjutan

## Rubrik Evaluasi

Audit aksesibilitas Anda akan dinilai berdasarkan akurasi teknis dan presentasi profesional:

| Kriteria | Sangat Baik (90-100%) | Baik (80-89%) | Memadai (70-79%) | Perlu Peningkatan (<70%) |
|----------|-------------------|---------------|---------------------|------------------------|
| **Kedalaman Pengujian Manual** | Evaluasi komprehensif mencakup semua prinsip POUR dengan observasi rinci dan skenario pengguna | Cakupan baik sebagian besar area aksesibilitas dengan temuan jelas dan beberapa analisis dampak pengguna | Evaluasi dasar mencakup area utama dengan observasi memadai | Pengujian terbatas dengan observasi dangkal dan pertimbangan dampak pengguna minimal |
| **Penggunaan Alat & Analisis** | Menggunakan semua alat yang diperlukan secara efektif, referensi silang temuan, menyertakan bukti jelas, dan menganalisis keterbatasan alat | Menggunakan sebagian besar alat dengan dokumentasi baik, beberapa referensi silang, dan bukti memadai | Menggunakan alat yang diperlukan dengan dokumentasi dasar dan beberapa bukti | Penggunaan alat minimal, dokumentasi buruk, atau bukti hilang |
| **Identifikasi & Kategorisasi Masalah** | Mengidentifikasi 15+ masalah spesifik di semua prinsip WCAG, mengkategorikan dengan akurat, menunjukkan pemahaman mendalam | Mengidentifikasi 10-14 masalah di sebagian besar prinsip WCAG, kategorisasi baik, menunjukkan pemahaman solid | Mengidentifikasi 7-9 masalah dengan cakupan WCAG memadai dan kategorisasi dasar | Mengidentifikasi <7 masalah dengan cakupan terbatas atau kategorisasi buruk |
| **Kualitas & Kelayakan Solusi** | 10+ solusi terperinci dan dapat diterapkan dengan referensi WCAG akurat, timeline implementasi realistis, dan metode verifikasi | 8-9 solusi yang dikembangkan dengan baik dengan referensi sebagian besar akurat dan detail implementasi baik | 6-7 solusi dasar dengan beberapa detail dan pendekatan umumnya realistis | <6 solusi atau detail tidak memadai, implementasi tidak realistis |
| **Komunikasi Profesional** | Laporan sangat terorganisir, ditulis dengan jelas, termasuk ringkasan eksekutif, menggunakan bahasa teknis yang sesuai, dan mengikuti standar dokumen bisnis | Terorganisir dengan baik dengan kualitas penulisan baik, termasuk sebagian besar bagian yang diperlukan, nada yang sesuai | Terorganisir memadai dengan penulisan yang dapat diterima, termasuk bagian dasar yang diperlukan | Organisasi buruk, penulisan tidak jelas, atau bagian penting hilang |
| **Aplikasi Dunia Nyata** | Menunjukkan pemahaman tentang dampak bisnis, pertimbangan hukum, keragaman pengguna, dan tantangan implementasi praktis | Menunjukkan pemahaman baik tentang aplikasi praktis dengan beberapa konteks bisnis | Pemahaman dasar tentang aplikasi dunia nyata | Koneksi terbatas ke aplikasi praktis |

## Pilihan Tantangan Lanjutan

**🚀 Untuk siswa yang mencari tantangan tambahan:**

- **Analisis Perbandingan**: Audit 2-3 situs web pesaing dan bandingkan tingkat kematangan aksesibilitas mereka
- **Fokus Aksesibilitas Mobile**: Penelitian mendalam tentang masalah aksesibilitas khusus mobile menggunakan Android TalkBack atau iOS VoiceOver
- **Perspektif Internasional**: Teliti dan terapkan standar aksesibilitas dari berbagai negara (EN 301 549, Section 508, ADA)
- **Review Pernyataan Aksesibilitas**: Evaluasi pernyataan aksesibilitas situs web (jika ada) terhadap temuan Anda

## Hasil yang Harus Diserahkan

Kirimkan laporan audit aksesibilitas komprehensif yang menunjukkan analisis tingkat profesional dan perencanaan implementasi praktis:

**📄 Persyaratan Laporan Akhir:**

1. **Ringkasan Eksekutif** (1 halaman)
   - Gambaran situs web dan penilaian kematangan aksesibilitas
   - Ringkasan temuan utama dengan dampak bisnis
   - Tindakan prioritas yang direkomendasikan

2. **Metodologi dan Ruang Lingkup** (1 halaman)
   - Pendekatan pengujian, alat yang digunakan, dan kriteria evaluasi
   - Halaman/bagian yang dievaluasi dan batasan apa pun
   - Kerangka kepatuhan standar (WCAG 2.1 AA)

3. **Laporan Temuan Detail** (3-4 halaman)
   - Observasi pengujian manual dengan skenario pengguna
   - Hasil alat otomatis dengan referensi silang
   - Masalah yang diorganisasi berdasarkan prinsip WCAG dengan bukti
   - Fitur aksesibilitas positif yang diidentifikasi

4. **Rencana Remediasi Strategis** (3-4 halaman)
   - Rekomendasi perbaikan yang diprioritaskan (minimal 10)
   - Timeline implementasi dengan estimasi upaya
   - Metrik keberhasilan dan metode verifikasi
   - Strategi pemeliharaan aksesibilitas jangka panjang

5. **Bukti Pendukung** (Lampiran)
   - Tangkapan layar pelanggaran aksesibilitas dan alat pengujian
   - Contoh kode yang menunjukkan masalah dan solusi
   - Laporan alat dan ringkasan audit
   - Catatan atau rekaman pengujian pembaca layar

**📊 Persyaratan Format:**
- **Format dokumen**: PDF (presentasi profesional)
- **Jumlah kata**: 2.500-3.500 kata (tidak termasuk lampiran dan tangkapan layar)
- **Elemen visual**: Sertakan tangkapan layar, diagram, dan contoh di seluruh laporan
- **Referensi**: Rujuk panduan WCAG dan sumber daya aksesibilitas dengan tepat

**💡 Tips untuk Keunggulan:**
- Gunakan format laporan profesional dengan heading dan gaya yang konsisten
- Sertakan daftar isi untuk navigasi yang mudah
- Seimbangkan akurasi teknis dengan bahasa yang jelas dan sesuai untuk bisnis
- Tunjukkan pemahaman tentang implementasi teknis dan dampak pengguna

## Hasil Pembelajaran

Setelah menyelesaikan audit aksesibilitas komprehensif ini, Anda akan mengembangkan keterampilan profesional yang penting:

**🎯 Kompetensi Teknis:**
- **Penguasaan Pengujian Aksesibilitas**: Kemahiran dengan metode pengujian manual dan otomatis standar industri
- **Penerapan WCAG**: Pengalaman praktis menerapkan Pedoman Aksesibilitas Konten Web ke skenario dunia nyata
- **Pemahaman Teknologi Bantu**: Pengalaman langsung dengan pembaca layar dan navigasi keyboard
- **Pemetaan Masalah-Solusi**: Kemampuan untuk mengidentifikasi hambatan aksesibilitas dan mengembangkan strategi remediasi yang spesifik dan dapat diterapkan

**💼 Keterampilan Profesional:**
- **Komunikasi Teknis**: Pengalaman menulis laporan aksesibilitas profesional untuk berbagai pemangku kepentingan
- **Perencanaan Strategis**: Kemampuan untuk memprioritaskan perbaikan aksesibilitas berdasarkan dampak pengguna dan kelayakan implementasi
- **Jaminan Kualitas**: Pemahaman tentang pengujian aksesibilitas sebagai bagian dari siklus pengembangan
- **Penilaian Risiko**: Penghargaan terhadap implikasi hukum, bisnis, dan etika dari kepatuhan aksesibilitas

**🌍 Pola Pikir Desain Inklusif:**
- **Empati Pengguna**: Pemahaman mendalam tentang kebutuhan pengguna yang beragam dan interaksi teknologi bantu
- **Prinsip Desain Universal**: Pengakuan bahwa desain yang aksesibel menguntungkan semua pengguna, bukan hanya mereka yang memiliki disabilitas
- **Peningkatan Berkelanjutan**: Kerangka kerja untuk penilaian dan peningkatan aksesibilitas yang berkelanjutan
- **Keterampilan Advokasi**: Kepercayaan diri untuk mempromosikan praktik terbaik aksesibilitas dalam proyek dan tim di masa depan

**🚀 Persiapan Karir:**
Tugas ini mencerminkan proyek konsultasi aksesibilitas dunia nyata, memberikan pengalaman yang layak dimasukkan ke dalam portofolio yang menunjukkan:
- Pendekatan pemecahan masalah yang sistematis
- Perhatian terhadap detail teknis dan dampak bisnis
- Komunikasi yang jelas tentang konsep teknis yang kompleks
- Pemahaman tentang tanggung jawab hukum dan etika dalam pengembangan web

Setelah selesai, Anda akan siap untuk berkontribusi secara bermakna pada inisiatif aksesibilitas dalam peran pengembangan web apa pun dan mempromosikan praktik desain inklusif sepanjang karier Anda.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diperhatikan bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang keliru yang timbul dari penggunaan terjemahan ini.