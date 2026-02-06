# Tugas: Merancang Ulang Ekstensi Browser Anda

## Ikhtisar

Setelah Anda membangun struktur HTML untuk ekstensi browser jejak karbon Anda, sekarang saatnya membuatnya lebih menarik secara visual dan ramah pengguna. Desain yang baik meningkatkan pengalaman pengguna dan membuat ekstensi Anda terlihat lebih profesional dan menarik.

Ekstensi Anda sudah memiliki gaya dasar CSS, tetapi tugas ini menantang Anda untuk menciptakan identitas visual yang unik yang mencerminkan gaya pribadi Anda sambil tetap menjaga kegunaan yang baik.

## Instruksi

### Bagian 1: Analisis Desain Saat Ini

Sebelum membuat perubahan, periksa struktur CSS yang ada:

1. **Temukan** file CSS di proyek ekstensi Anda
2. **Tinjau** pendekatan gaya dan skema warna saat ini
3. **Identifikasi** area yang perlu diperbaiki dalam tata letak, tipografi, dan hierarki visual
4. **Pertimbangkan** bagaimana desain mendukung tujuan pengguna (pengisian formulir yang mudah dan tampilan data yang jelas)

### Bagian 2: Desain Gaya Kustom Anda

Buat desain visual yang kohesif yang mencakup:

**Skema Warna:**
- Pilih palet warna utama yang mencerminkan tema lingkungan
- Pastikan kontras yang cukup untuk aksesibilitas (gunakan alat seperti WebAIM's contrast checker)
- Pertimbangkan bagaimana warna akan terlihat di berbagai tema browser

**Tipografi:**
- Pilih font yang mudah dibaca dan cocok untuk ukuran ekstensi yang kecil
- Tetapkan hierarki yang jelas dengan ukuran dan berat font yang sesuai
- Pastikan teks tetap terbaca di tema browser terang dan gelap

**Tata Letak dan Spasi:**
- Tingkatkan organisasi visual elemen formulir dan tampilan data
- Tambahkan padding dan margin yang sesuai untuk meningkatkan keterbacaan
- Pertimbangkan prinsip desain responsif untuk berbagai ukuran layar

### Bagian 3: Terapkan Desain Anda

Modifikasi file CSS untuk menerapkan desain Anda:

```css
/* Example starting points for customization */

.form-data {
    /* Style the configuration form */
    background: /* your choice */;
    padding: /* your spacing */;
    border-radius: /* your preference */;
}

.result-container {
    /* Style the data display area */
    background: /* complementary color */;
    border: /* your border style */;
    margin: /* your spacing */;
}

/* Add your custom styles here */
```

**Area utama untuk diatur:**
- **Elemen formulir**: Kolom input, label, dan tombol kirim
- **Tampilan hasil**: Kontainer data, gaya teks, dan status pemuatan
- **Elemen interaktif**: Efek hover, status tombol, dan transisi
- **Tata letak keseluruhan**: Spasi kontainer, warna latar belakang, dan hierarki visual

### Bagian 4: Uji dan Sempurnakan

1. **Bangun** ekstensi Anda dengan `npm run build`
2. **Muat** ekstensi yang diperbarui ke browser Anda
3. **Uji** semua status visual (pengisian formulir, pemuatan, tampilan hasil, kesalahan)
4. **Verifikasi** aksesibilitas dengan alat pengembang browser
5. **Sempurnakan** gaya Anda berdasarkan penggunaan nyata

## Tantangan Kreatif

### Tingkat Dasar
- Perbarui warna dan font untuk menciptakan tema yang kohesif
- Tingkatkan spasi dan penyelarasan di seluruh antarmuka
- Tambahkan efek hover yang halus pada elemen interaktif

### Tingkat Menengah
- Desain ikon atau grafik kustom untuk ekstensi Anda
- Terapkan transisi yang mulus antara berbagai status
- Buat animasi pemuatan yang unik untuk panggilan API

### Tingkat Lanjutan
- Desain beberapa opsi tema (terang/gelap/kontras tinggi)
- Terapkan desain responsif untuk berbagai ukuran jendela browser
- Tambahkan mikro-interaksi yang meningkatkan pengalaman pengguna

## Panduan Pengumpulan

Tugas yang telah selesai harus mencakup:

- **File CSS yang dimodifikasi** dengan gaya kustom Anda
- **Screenshot** yang menunjukkan ekstensi Anda dalam berbagai status (formulir, pemuatan, hasil)
- **Deskripsi singkat** (2-3 kalimat) yang menjelaskan pilihan desain Anda dan bagaimana itu meningkatkan pengalaman pengguna

## Rubrik Penilaian

| Kriteria | Unggul (4) | Mahir (3) | Berkembang (2) | Pemula (1) |
|----------|------------|-----------|----------------|------------|
| **Desain Visual** | Desain kreatif dan kohesif yang meningkatkan kegunaan dan mencerminkan prinsip desain yang kuat | Pilihan desain yang baik dengan gaya konsisten dan hierarki visual yang jelas | Perbaikan desain dasar dengan beberapa masalah konsistensi | Perubahan gaya minimal atau desain yang tidak konsisten |
| **Fungsionalitas** | Semua gaya berfungsi sempurna di berbagai status dan lingkungan browser | Gaya berfungsi dengan baik dengan masalah kecil di kasus tepi | Sebagian besar gaya berfungsi dengan beberapa masalah tampilan | Masalah gaya signifikan yang memengaruhi kegunaan |
| **Kualitas Kode** | CSS yang bersih, terorganisir dengan baik, nama kelas yang bermakna, dan selektor yang efisien | Struktur CSS yang baik dengan penggunaan selektor dan properti yang tepat | CSS yang dapat diterima dengan beberapa masalah organisasi | Struktur CSS yang buruk atau gaya yang terlalu kompleks |
| **Aksesibilitas** | Kontras warna yang sangat baik, font yang mudah dibaca, dan perhatian untuk pengguna dengan disabilitas | Praktik aksesibilitas yang baik dengan area perbaikan kecil | Pertimbangan aksesibilitas dasar dengan beberapa masalah | Perhatian terbatas pada persyaratan aksesibilitas |

## Tips Sukses

> 💡 **Tip Desain**: Mulailah dengan perubahan kecil dan bangun hingga gaya yang lebih dramatis. Perbaikan kecil dalam tipografi dan spasi sering kali memiliki dampak besar pada kualitas yang dirasakan.

**Praktik terbaik yang harus diikuti:**
- **Uji** ekstensi Anda di tema browser terang dan gelap
- **Gunakan** unit relatif (em, rem) untuk skalabilitas yang lebih baik
- **Pertahankan** spasi konsisten menggunakan properti kustom CSS
- **Pertimbangkan** bagaimana desain Anda akan terlihat bagi pengguna dengan kebutuhan visual yang berbeda
- **Validasi** CSS Anda untuk memastikan mengikuti sintaks yang benar

> ⚠️ **Kesalahan Umum**: Jangan mengorbankan kegunaan demi daya tarik visual. Ekstensi Anda harus indah sekaligus fungsional.

**Ingat untuk:**
- **Pastikan** informasi penting mudah dibaca
- **Pastikan** tombol dan elemen interaktif mudah diklik
- **Pertahankan** umpan balik visual yang jelas untuk tindakan pengguna
- **Uji** desain Anda dengan data nyata, bukan hanya teks placeholder

Semoga sukses menciptakan ekstensi browser yang fungsional dan memukau secara visual!

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang timbul dari penggunaan terjemahan ini.