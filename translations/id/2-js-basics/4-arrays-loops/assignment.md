# Tugas Arrays dan Loop

## Instruksi

Selesaikan latihan berikut untuk berlatih bekerja dengan array dan loop. Setiap latihan membangun konsep dari pelajaran dan mendorong Anda untuk menerapkan berbagai jenis loop dan metode array.

### Latihan 1: Generator Pola Angka
Buat program yang mencantumkan setiap angka ke-3 antara 1-20 dan mencetaknya ke konsol.

**Persyaratan:**
- Gunakan `for` loop dengan peningkatan khusus
- Tampilkan angka dalam format yang mudah dibaca
- Tambahkan komentar deskriptif yang menjelaskan logika Anda

**Output yang Diharapkan:**
```
3, 6, 9, 12, 15, 18
```

> **Tip:** Modifikasi ekspresi iterasi dalam for loop Anda untuk melewati angka.

### Latihan 2: Analisis Array
Buat array dengan setidaknya 8 angka berbeda dan tulis fungsi untuk menganalisis data.

**Persyaratan:**
- Buat array bernama `numbers` dengan setidaknya 8 nilai
- Tulis fungsi `findMaximum()` yang mengembalikan angka tertinggi
- Tulis fungsi `findMinimum()` yang mengembalikan angka terendah  
- Tulis fungsi `calculateSum()` yang mengembalikan total semua angka
- Uji setiap fungsi dan tampilkan hasilnya

**Tantangan Bonus:** Buat fungsi yang menemukan angka tertinggi kedua dalam array.

### Latihan 3: Pemrosesan Array String
Buat array berisi film/buku/lagu favorit Anda dan latih berbagai jenis loop.

**Persyaratan:**
- Buat array dengan setidaknya 5 nilai string
- Gunakan `for` loop tradisional untuk menampilkan item dengan angka (1. Nama Item)
- Gunakan loop `for...of` untuk menampilkan item dalam huruf besar
- Gunakan metode `forEach()` untuk menghitung dan menampilkan total karakter

**Contoh Output:**
```
Traditional for loop:
1. The Matrix
2. Inception
3. Interstellar

For...of loop (uppercase):
THE MATRIX
INCEPTION
INTERSTELLAR

Character count:
Total characters across all titles: 42
```

### Latihan 4: Penyaringan Data (Lanjutan)
Buat program yang memproses array objek yang mewakili siswa.

**Persyaratan:**
- Buat array dengan setidaknya 5 objek siswa dengan properti: `name`, `age`, `grade`
- Gunakan loop untuk menemukan siswa yang berusia 18 tahun atau lebih
- Hitung rata-rata nilai semua siswa
- Buat array baru yang hanya berisi siswa dengan nilai di atas 85

**Struktur Contoh:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Add more students...
];
```

## Pengujian Kode Anda

Uji program Anda dengan:
1. Menjalankan setiap latihan di konsol browser Anda
2. Memverifikasi output sesuai dengan hasil yang diharapkan
3. Menguji dengan set data yang berbeda
4. Memeriksa bahwa kode Anda menangani kasus tepi (array kosong, elemen tunggal)

## Panduan Pengumpulan

Sertakan hal berikut dalam pengumpulan Anda:
- Kode JavaScript yang dikomentari dengan baik untuk setiap latihan
- Screenshot atau output teks yang menunjukkan program Anda berjalan
- Penjelasan singkat tentang jenis loop yang Anda pilih untuk setiap tugas dan alasannya

## Rubrik

| Kriteria | Unggul (3 poin) | Memadai (2 poin) | Perlu Peningkatan (1 poin) |
| -------- | --------------- | ---------------- | -------------------------- |
| **Fungsionalitas** | Semua latihan selesai dengan benar termasuk tantangan bonus | Semua latihan yang diperlukan berfungsi dengan benar | Beberapa latihan tidak selesai atau mengandung kesalahan |
| **Kualitas Kode** | Kode bersih, terorganisir dengan baik, dan nama variabel deskriptif | Kode berfungsi tetapi bisa lebih bersih | Kode berantakan atau sulit dipahami |
| **Komentar** | Komentar komprehensif yang menjelaskan logika dan keputusan | Komentar dasar ada | Komentar minimal atau tidak ada |
| **Penggunaan Loop** | Menunjukkan pemahaman tentang berbagai jenis loop dengan tepat | Menggunakan loop dengan benar tetapi variasi terbatas | Penggunaan loop yang salah atau tidak efisien |
| **Pengujian** | Bukti pengujian menyeluruh dengan berbagai skenario | Pengujian dasar ditunjukkan | Bukti pengujian sedikit atau tidak ada |

## Pertanyaan Refleksi

Setelah menyelesaikan latihan, pertimbangkan:
1. Jenis loop mana yang terasa paling alami untuk digunakan dan mengapa?
2. Tantangan apa yang Anda temui saat bekerja dengan array?
3. Bagaimana keterampilan ini dapat diterapkan pada proyek pengembangan web dunia nyata?
4. Apa yang akan Anda lakukan secara berbeda jika Anda harus mengoptimalkan kode Anda untuk kinerja?

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis dapat mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang keliru yang timbul dari penggunaan terjemahan ini.