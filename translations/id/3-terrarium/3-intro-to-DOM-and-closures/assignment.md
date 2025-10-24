<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "947ca5ce7c94aee9c7de7034e762bc17",
  "translation_date": "2025-10-24T14:07:48+00:00",
  "source_file": "3-terrarium/3-intro-to-DOM-and-closures/assignment.md",
  "language_code": "id"
}
-->
# Tugas Penyelidikan Elemen DOM

## Gambaran Umum

Setelah Anda merasakan kekuatan manipulasi DOM secara langsung, sekarang saatnya menjelajahi dunia antarmuka DOM yang lebih luas. Tugas ini akan memperdalam pemahaman Anda tentang bagaimana berbagai teknologi web berinteraksi dengan DOM, tidak hanya sekadar menyeret elemen.

## Tujuan Pembelajaran

Dengan menyelesaikan tugas ini, Anda akan:
- **Meneliti** dan memahami satu antarmuka DOM secara mendalam
- **Menganalisis** implementasi nyata manipulasi DOM
- **Menghubungkan** konsep teoretis dengan aplikasi praktis
- **Mengembangkan** keterampilan dalam dokumentasi teknis dan analisis

## Instruksi

### Langkah 1: Pilih Antarmuka DOM Anda

Kunjungi [daftar antarmuka DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) yang komprehensif di MDN dan pilih satu antarmuka yang menarik bagi Anda. Pertimbangkan untuk memilih dari kategori berikut untuk variasi:

**Pilihan Pemula:**
- `Element.classList` - Mengelola kelas CSS secara dinamis
- `Document.querySelector()` - Pemilihan elemen tingkat lanjut
- `Element.addEventListener()` - Penanganan acara di luar acara pointer
- `Window.localStorage` - Penyimpanan data sisi klien

**Tantangan Menengah:**
- `Intersection Observer API` - Mendeteksi visibilitas elemen
- `MutationObserver` - Memantau perubahan DOM
- `Drag and Drop API` - Alternatif untuk pendekatan berbasis pointer
- `Geolocation API` - Mengakses lokasi pengguna

**Eksplorasi Lanjutan:**
- `Web Components` - Elemen kustom dan shadow DOM
- `Canvas API` - Grafik programatik
- `Web Workers` - Pemrosesan latar belakang
- `Service Workers` - Fungsionalitas offline

### Langkah 2: Penelitian dan Dokumentasi

Buat analisis komprehensif (300-500 kata) yang mencakup:

#### Gambaran Teknis
- **Definisikan** apa yang dilakukan antarmuka pilihan Anda dengan bahasa yang jelas dan mudah dipahami
- **Jelaskan** metode, properti, atau acara utama yang disediakan
- **Deskripsikan** jenis masalah yang dirancang untuk diselesaikan

#### Implementasi Dunia Nyata
- **Temukan** situs web yang menggunakan antarmuka pilihan Anda (periksa kode atau cari contoh)
- **Dokumentasikan** implementasi spesifik dengan cuplikan kode jika memungkinkan
- **Analisis** mengapa pengembang memilih pendekatan ini
- **Jelaskan** bagaimana hal itu meningkatkan pengalaman pengguna

#### Aplikasi Praktis
- **Bandingkan** antarmuka Anda dengan teknik yang kami gunakan dalam proyek terrarium
- **Usulkan** bagaimana antarmuka Anda dapat meningkatkan atau memperluas fungsionalitas terrarium
- **Identifikasi** proyek lain di mana antarmuka ini akan bernilai

### Langkah 3: Contoh Kode

Sertakan contoh kode sederhana yang berfungsi dan menunjukkan antarmuka Anda dalam aksi. Contoh ini harus:
- **Fungsional** - Kode harus benar-benar berfungsi saat diuji
- **Diberi Komentar** - Jelaskan apa yang dilakukan setiap bagian
- **Relevan** - Terhubung dengan kasus penggunaan yang realistis
- **Mudah Dipahami** - Dapat dimengerti oleh seseorang yang sedang belajar pengembangan web

## Format Pengumpulan

Strukturkan pengumpulan Anda dengan judul yang jelas:

```markdown
# [Interface Name] DOM Investigation

## What It Does
[Technical overview]

## Real-World Example
[Website analysis and implementation details]

## Code Demonstration
[Your working example with comments]

## Reflection
[How this connects to our terrarium project and future applications]
```

## Rubrik Penilaian

| Kriteria | Unggul (A) | Cukup (B) | Berkembang (C) | Perlu Peningkatan (D) |
|----------|------------|-----------|----------------|-----------------------|
| **Pemahaman Teknis** | Menunjukkan pemahaman mendalam dengan penjelasan yang akurat dan terminologi yang tepat | Menunjukkan pemahaman yang solid dengan penjelasan yang sebagian besar akurat | Pemahaman dasar dengan beberapa kesalahpahaman | Pemahaman terbatas dengan kesalahan signifikan |
| **Analisis Dunia Nyata** | Mengidentifikasi dan menganalisis implementasi nyata dengan contoh spesifik | Menemukan contoh nyata dengan analisis yang memadai | Menemukan contoh tetapi analisis kurang mendalam | Koneksi dunia nyata yang samar atau tidak akurat |
| **Contoh Kode** | Kode yang berfungsi, diberi komentar dengan baik, dan jelas menunjukkan antarmuka | Kode fungsional dengan komentar yang memadai | Kode berfungsi tetapi membutuhkan dokumentasi yang lebih baik | Kode memiliki kesalahan atau penjelasan yang buruk |
| **Kualitas Penulisan** | Penulisan yang jelas, menarik dengan struktur yang tepat dan komunikasi teknis yang baik | Terorganisir dengan baik dengan penulisan teknis yang baik | Organisasi dan kejelasan yang memadai | Organisasi yang buruk atau komunikasi yang tidak jelas |
| **Pemikiran Kritis** | Membuat koneksi yang mendalam antara konsep dan menyarankan aplikasi inovatif | Menunjukkan pemikiran analitis yang baik dan koneksi yang relevan | Beberapa analisis hadir tetapi bisa lebih mendalam | Bukti pemikiran kritis yang terbatas |

## Tips untuk Sukses

**Strategi Penelitian:**
- **Mulai** dengan dokumentasi MDN untuk informasi yang otoritatif
- **Cari** contoh kode di GitHub atau CodePen
- **Periksa** situs web populer menggunakan alat pengembang browser
- **Tonton** video tutorial untuk penjelasan visual

**Panduan Penulisan:**
- **Gunakan** kata-kata Anda sendiri daripada menyalin dokumentasi
- **Sertakan** contoh spesifik dan cuplikan kode
- **Jelaskan** konsep teknis seolah-olah mengajar teman
- **Hubungkan** antarmuka Anda dengan konsep pengembangan web yang lebih luas

**Ide Contoh Kode:**
- **Buat** demo sederhana yang menunjukkan fitur utama antarmuka
- **Bangun** dari konsep proyek terrarium kami jika relevan
- **Fokus** pada fungsionalitas daripada desain visual
- **Uji** kode Anda untuk memastikan berfungsi dengan benar

## Batas Waktu Pengumpulan

[Masukkan batas waktu di sini]

## Pertanyaan?

Jika Anda membutuhkan klarifikasi tentang aspek apa pun dari tugas ini, jangan ragu untuk bertanya! Penyelidikan ini akan memperdalam pemahaman Anda tentang bagaimana DOM memungkinkan pengalaman web interaktif yang kita gunakan setiap hari.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang salah yang timbul dari penggunaan terjemahan ini.