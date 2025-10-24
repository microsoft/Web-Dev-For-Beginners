<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ffe366b2d1f037b99fbadbe1dc81083d",
  "translation_date": "2025-10-24T13:58:06+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "id"
}
-->
# Membuat Keputusan: Pemroses Nilai Siswa

## Tujuan Pembelajaran

Dalam tugas ini, Anda akan mempraktikkan konsep pengambilan keputusan dari pelajaran ini dengan membangun program yang memproses nilai siswa dari berbagai sistem penilaian. Anda akan menggunakan pernyataan `if...else`, operator perbandingan, dan operator logika untuk menentukan siswa mana yang lulus mata pelajaran mereka.

## Tantangan

Anda bekerja di sebuah sekolah yang baru saja bergabung dengan institusi lain. Sekarang Anda perlu memproses nilai siswa dari dua sistem penilaian yang sepenuhnya berbeda dan menentukan siswa mana yang lulus. Ini adalah kesempatan sempurna untuk mempraktikkan logika kondisional!

### Memahami Sistem Penilaian

#### Sistem Penilaian Pertama (Numerik)
- Nilai diberikan dalam angka dari 1-5
- **Nilai lulus**: 3 ke atas (3, 4, atau 5)
- **Nilai gagal**: Di bawah 3 (1 atau 2)

#### Sistem Penilaian Kedua (Huruf)
- Nilai menggunakan huruf: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Nilai lulus**: `A`, `A-`, `B`, `B-`, `C`, `C-` (semua nilai yang terdaftar adalah nilai lulus)
- **Catatan**: Sistem ini tidak mencakup nilai gagal seperti `D` atau `F`

### Tugas Anda

Diberikan array `allStudents` berikut yang mewakili semua siswa dan nilai mereka, buat array baru `studentsWhoPass` yang berisi semua siswa yang lulus sesuai dengan sistem penilaian masing-masing.

```javascript
let allStudents = [
  'A',    // Letter grade - passing
  'B-',   // Letter grade - passing  
  1,      // Numeric grade - failing
  4,      // Numeric grade - passing
  5,      // Numeric grade - passing
  2       // Numeric grade - failing
];

let studentsWhoPass = [];
```

### Pendekatan Langkah-demi-Langkah

1. **Buat loop** untuk melalui setiap nilai dalam array `allStudents`
2. **Periksa jenis nilai** (apakah itu angka atau string?)
3. **Terapkan aturan sistem penilaian yang sesuai**:
   - Untuk angka: periksa apakah nilai >= 3
   - Untuk string: periksa apakah itu salah satu nilai huruf yang valid untuk lulus
4. **Tambahkan nilai yang lulus** ke array `studentsWhoPass`

### Teknik Kode yang Berguna

Gunakan konsep JavaScript dari pelajaran ini:

- **Operator typeof**: `typeof grade === 'number'` untuk memeriksa apakah itu nilai numerik
- **Operator perbandingan**: `>=` untuk membandingkan nilai numerik
- **Operator logika**: `||` untuk memeriksa beberapa kondisi nilai huruf
- **Pernyataan if...else**: untuk menangani sistem penilaian yang berbeda
- **Metode array**: `.push()` untuk menambahkan nilai yang lulus ke array baru Anda

### Output yang Diharapkan

Saat Anda menjalankan program Anda, `studentsWhoPass` harus berisi: `['A', 'B-', 4, 5]`

**Mengapa nilai-nilai ini lulus:**
- `'A'` dan `'B-'` adalah nilai huruf yang valid (semua nilai huruf dalam sistem ini adalah nilai lulus)
- `4` dan `5` adalah nilai numerik >= 3
- `1` dan `2` gagal karena mereka adalah nilai numerik < 3

## Menguji Solusi Anda

Uji kode Anda dengan berbagai skenario:

```javascript
// Test with different grade combinations
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Your solution should work with any combination of valid grades
```

## Tantangan Bonus

Setelah Anda menyelesaikan tugas dasar, coba ekstensi berikut:

1. **Tambahkan validasi**: Periksa nilai yang tidak valid (seperti angka negatif atau huruf yang tidak valid)
2. **Hitung statistik**: Hitung berapa banyak siswa yang lulus vs. gagal
3. **Konversi nilai**: Konversikan semua nilai ke satu sistem numerik (A=5, B=4, C=3, dll.)

## Rubrik

| Kriteria | Unggul (4) | Mahir (3) | Berkembang (2) | Pemula (1) |
|----------|------------|-----------|----------------|------------|
| **Fungsionalitas** | Program dengan benar mengidentifikasi semua nilai lulus dari kedua sistem | Program bekerja dengan masalah kecil atau kasus tepi | Program sebagian bekerja tetapi memiliki kesalahan logis | Program memiliki kesalahan signifikan atau tidak berjalan |
| **Struktur Kode** | Kode bersih, terorganisir dengan baik dengan logika if...else yang tepat | Struktur baik dengan pernyataan kondisional yang sesuai | Struktur dapat diterima dengan beberapa masalah organisasi | Struktur buruk, logika sulit diikuti |
| **Penggunaan Konsep** | Menggunakan operator perbandingan, operator logika, dan pernyataan kondisional secara efektif | Penggunaan konsep pelajaran yang baik dengan beberapa kekurangan | Beberapa penggunaan konsep pelajaran tetapi kehilangan elemen penting | Penggunaan konsep pelajaran terbatas |
| **Pemecahan Masalah** | Menunjukkan pemahaman yang jelas tentang masalah dan pendekatan solusi yang elegan | Pendekatan pemecahan masalah yang baik dengan logika yang solid | Pemecahan masalah yang memadai dengan beberapa kebingungan | Pendekatan tidak jelas, tidak menunjukkan pemahaman |

## Panduan Pengumpulan

1. **Uji kode Anda** secara menyeluruh dengan contoh yang diberikan
2. **Tambahkan komentar** yang menjelaskan logika Anda, terutama untuk pernyataan kondisional
3. **Verifikasi output** sesuai dengan hasil yang diharapkan: `['A', 'B-', 4, 5]`
4. **Pertimbangkan kasus tepi** seperti array kosong atau tipe data yang tidak terduga

> 💡 **Tips Pro**: Mulailah dengan sederhana! Pastikan fungsionalitas dasar bekerja terlebih dahulu, lalu tambahkan fitur yang lebih canggih. Ingat, tujuan Anda adalah mempraktikkan logika pengambilan keputusan dengan alat yang Anda pelajari dalam pelajaran ini.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diperhatikan bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang salah yang timbul dari penggunaan terjemahan ini.