<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ffe366b2d1f037b99fbadbe1dc81083d",
  "translation_date": "2025-10-24T14:22:35+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "ms"
}
-->
# Membuat Keputusan: Pemproses Gred Pelajar

## Objektif Pembelajaran

Dalam tugasan ini, anda akan mempraktikkan konsep membuat keputusan daripada pelajaran ini dengan membina program yang memproses gred pelajar daripada sistem penilaian yang berbeza. Anda akan menggunakan pernyataan `if...else`, operator perbandingan, dan operator logik untuk menentukan pelajar mana yang lulus kursus mereka.

## Cabaran

Anda bekerja di sebuah sekolah yang baru-baru ini bergabung dengan institusi lain. Kini anda perlu memproses gred pelajar daripada dua sistem penilaian yang berbeza dan menentukan pelajar mana yang lulus. Ini adalah peluang yang sempurna untuk mempraktikkan logik bersyarat!

### Memahami Sistem Penilaian

#### Sistem Penilaian Pertama (Numerik)
- Gred diberikan sebagai nombor dari 1-5
- **Gred lulus**: 3 dan ke atas (3, 4, atau 5)
- **Gred gagal**: Di bawah 3 (1 atau 2)

#### Sistem Penilaian Kedua (Gred Huruf)
- Gred menggunakan huruf: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Gred lulus**: `A`, `A-`, `B`, `B-`, `C`, `C-` (semua gred yang disenaraikan adalah lulus)
- **Nota**: Sistem ini tidak termasuk gred gagal seperti `D` atau `F`

### Tugas Anda

Diberikan array `allStudents` yang mewakili semua pelajar dan gred mereka, bina array baru `studentsWhoPass` yang mengandungi semua pelajar yang lulus mengikut sistem penilaian masing-masing.

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

### Pendekatan Langkah Demi Langkah

1. **Tetapkan gelung** untuk melalui setiap gred dalam array `allStudents`
2. **Periksa jenis gred** (adakah ia nombor atau string?)
3. **Gunakan peraturan sistem penilaian yang sesuai**:
   - Untuk nombor: periksa jika gred >= 3
   - Untuk string: periksa jika ia salah satu gred huruf lulus yang sah
4. **Tambah gred lulus** ke dalam array `studentsWhoPass`

### Teknik Kod Berguna

Gunakan konsep JavaScript ini daripada pelajaran:

- **Operator typeof**: `typeof grade === 'number'` untuk memeriksa jika ia gred numerik
- **Operator perbandingan**: `>=` untuk membandingkan gred numerik
- **Operator logik**: `||` untuk memeriksa pelbagai syarat gred huruf
- **Pernyataan if...else**: untuk mengendalikan sistem penilaian yang berbeza
- **Kaedah Array**: `.push()` untuk menambah gred lulus ke dalam array baru anda

### Output Dijangka

Apabila anda menjalankan program anda, `studentsWhoPass` sepatutnya mengandungi: `['A', 'B-', 4, 5]`

**Mengapa gred ini lulus:**
- `'A'` dan `'B-'` adalah gred huruf yang sah (semua gred huruf dalam sistem ini adalah lulus)
- `4` dan `5` adalah gred numerik >= 3
- `1` dan `2` gagal kerana mereka adalah gred numerik < 3

## Menguji Penyelesaian Anda

Uji kod anda dengan pelbagai senario:

```javascript
// Test with different grade combinations
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Your solution should work with any combination of valid grades
```

## Cabaran Bonus

Setelah anda menyelesaikan tugasan asas, cuba sambungan ini:

1. **Tambah pengesahan**: Periksa gred yang tidak sah (seperti nombor negatif atau huruf yang tidak sah)
2. **Kira statistik**: Hitung berapa ramai pelajar yang lulus berbanding gagal
3. **Penukaran gred**: Tukarkan semua gred kepada satu sistem numerik (A=5, B=4, C=3, dll.)

## Rubrik

| Kriteria | Cemerlang (4) | Mahir (3) | Sedang Membangun (2) | Permulaan (1) |
|----------|---------------|-----------|-----------------------|---------------|
| **Fungsi** | Program mengenal pasti semua gred lulus daripada kedua-dua sistem dengan betul | Program berfungsi dengan isu kecil atau kes tepi | Program berfungsi sebahagian tetapi mempunyai kesilapan logik | Program mempunyai kesilapan besar atau tidak berjalan |
| **Struktur Kod** | Kod yang bersih, teratur dengan logik if...else yang betul | Struktur yang baik dengan pernyataan bersyarat yang sesuai | Struktur yang boleh diterima dengan beberapa isu organisasi | Struktur yang lemah, sukar untuk diikuti logiknya |
| **Penggunaan Konsep** | Menggunakan operator perbandingan, operator logik, dan pernyataan bersyarat dengan berkesan | Penggunaan konsep pelajaran yang baik dengan jurang kecil | Penggunaan konsep pelajaran tetapi kehilangan elemen utama | Penggunaan konsep pelajaran yang terhad |
| **Penyelesaian Masalah** | Menunjukkan pemahaman yang jelas tentang masalah dan pendekatan penyelesaian yang elegan | Pendekatan penyelesaian masalah yang baik dengan logik yang kukuh | Penyelesaian masalah yang mencukupi dengan beberapa kekeliruan | Pendekatan yang tidak jelas, tidak menunjukkan pemahaman |

## Garis Panduan Penyerahan

1. **Uji kod anda** dengan teliti menggunakan contoh yang diberikan
2. **Tambah komen** yang menerangkan logik anda, terutamanya untuk pernyataan bersyarat
3. **Sahkan output** sepadan dengan hasil yang dijangka: `['A', 'B-', 4, 5]`
4. **Pertimbangkan kes tepi** seperti array kosong atau jenis data yang tidak dijangka

> 💡 **Tip Pro**: Mulakan dengan mudah! Pastikan fungsi asas berfungsi dahulu, kemudian tambahkan ciri yang lebih canggih. Ingat, matlamatnya adalah untuk mempraktikkan logik membuat keputusan dengan alat yang anda pelajari dalam pelajaran ini.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.