<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "232d592791465c1678cab3a2bb6cd3e8",
  "translation_date": "2025-10-24T14:15:58+00:00",
  "source_file": "6-space-game/6-end-condition/assignment.md",
  "language_code": "id"
}
-->
# Membangun Game Contoh

## Gambaran Tugas

Setelah Anda menguasai kondisi akhir permainan dan fungsi restart dalam game luar angkasa Anda, sekarang saatnya menerapkan konsep-konsep tersebut ke pengalaman bermain yang benar-benar baru. Anda akan merancang dan membangun game Anda sendiri yang menunjukkan pola kondisi akhir yang berbeda dan mekanisme restart.

Tugas ini menantang Anda untuk berpikir kreatif tentang desain game sambil mempraktikkan keterampilan teknis yang telah Anda pelajari. Anda akan mengeksplorasi berbagai skenario kemenangan dan kekalahan, menerapkan perkembangan pemain, dan menciptakan pengalaman restart yang menarik.

## Persyaratan Proyek

### Fitur Utama Game

Game Anda harus mencakup elemen-elemen penting berikut:

**Variasi Kondisi Akhir**: Implementasikan setidaknya dua cara berbeda untuk mengakhiri game:
- **Kemenangan berbasis poin**: Pemain mencapai skor target atau mengumpulkan item tertentu
- **Kekalahan berbasis nyawa**: Pemain kehilangan semua nyawa atau poin kesehatan yang tersedia
- **Penyelesaian tujuan**: Semua musuh dikalahkan, item tertentu dikumpulkan, atau tujuan tercapai
- **Berbasis waktu**: Game berakhir setelah durasi tertentu atau hitungan mundur mencapai nol

**Fungsi Restart**: 
- **Hapus status game**: Hapus semua objek game sebelumnya dan reset variabel
- **Inisialisasi ulang sistem**: Mulai dari awal dengan statistik pemain, musuh, dan tujuan baru
- **Kontrol yang ramah pengguna**: Berikan instruksi yang jelas untuk memulai ulang game

**Umpan Balik Pemain**:
- **Pesan kemenangan**: Rayakan pencapaian pemain dengan umpan balik positif
- **Pesan kekalahan**: Berikan pesan yang mendorong untuk bermain ulang
- **Indikator progres**: Tampilkan skor saat ini, nyawa, atau status tujuan

### Ide Game dan Inspirasi

Pilih salah satu konsep game berikut atau buat sendiri:

#### 1. Game Petualangan Konsol
Buat petualangan berbasis teks dengan mekanisme pertarungan:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Fitur utama yang harus diimplementasikan:**
- **Pertarungan berbasis giliran** dengan opsi serangan yang berbeda
- **Poin kesehatan** untuk pemain dan musuh
- **Sistem inventaris** untuk mengumpulkan koin atau item
- **Berbagai jenis musuh** dengan tingkat kesulitan yang berbeda
- **Kondisi kemenangan** saat semua musuh dikalahkan

#### 2. Game Koleksi
- **Tujuan**: Mengumpulkan item tertentu sambil menghindari rintangan
- **Kondisi akhir**: Mencapai jumlah koleksi target atau kehilangan semua nyawa
- **Progresi**: Item menjadi lebih sulit dijangkau seiring berjalannya game

#### 3. Game Puzzle
- **Tujuan**: Menyelesaikan puzzle yang semakin sulit
- **Kondisi akhir**: Menyelesaikan semua level atau kehabisan langkah/waktu
- **Restart**: Reset ke level pertama dengan progres yang dihapus

#### 4. Game Pertahanan
- **Tujuan**: Melindungi basis Anda dari gelombang musuh
- **Kondisi akhir**: Bertahan dari semua gelombang (kemenangan) atau basis hancur (kekalahan)
- **Progresi**: Gelombang musuh meningkat dalam kesulitan dan jumlah

## Panduan Implementasi

### Memulai

1. **Rencanakan desain game Anda**:
   - Buat sketsa loop gameplay dasar
   - Definisikan kondisi akhir Anda dengan jelas
   - Identifikasi data apa yang perlu di-reset saat restart

2. **Siapkan struktur proyek Anda**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Buat loop game inti Anda**:
   - Inisialisasi status game
   - Tangani input pengguna
   - Perbarui logika game
   - Periksa kondisi akhir
   - Render status saat ini

### Persyaratan Teknis

**Gunakan JavaScript Modern**: 
- Terapkan `const` dan `let` untuk deklarasi variabel
- Gunakan fungsi panah jika sesuai
- Implementasikan fitur ES6+ seperti template literals dan destructuring

**Arsitektur Berbasis Event**:
- Buat event handler untuk interaksi pengguna
- Implementasikan perubahan status game melalui event
- Gunakan event listener untuk fungsi restart

**Praktik Kode Bersih**:
- Tulis fungsi dengan tanggung jawab tunggal
- Gunakan nama variabel dan fungsi yang deskriptif
- Tambahkan komentar yang menjelaskan logika dan aturan game
- Organisasi kode ke dalam bagian yang logis

## Persyaratan Pengumpulan

### Hasil yang Harus Diserahkan

1. **File game lengkap**: Semua file HTML, CSS, dan JavaScript yang diperlukan untuk menjalankan game Anda
2. **README.md**: Dokumentasi yang menjelaskan:
   - Cara memainkan game Anda
   - Kondisi akhir apa yang Anda implementasikan
   - Instruksi untuk memulai ulang
   - Fitur atau mekanik khusus apa pun
3. **Komentar kode**: Penjelasan yang jelas tentang logika dan algoritma game Anda

### Daftar Periksa Pengujian

Sebelum mengumpulkan, pastikan bahwa game Anda:

- [ ] **Berjalan tanpa error** di konsol browser
- [ ] **Mengimplementasikan beberapa kondisi akhir** seperti yang ditentukan
- [ ] **Restart dengan benar** dengan reset status yang bersih
- [ ] **Memberikan umpan balik yang jelas** kepada pemain tentang status game
- [ ] **Menggunakan sintaks dan praktik terbaik JavaScript modern**
- [ ] **Menyertakan dokumentasi yang komprehensif** di README.md

## Rubrik Penilaian

| Kriteria | Unggul (4) | Mahir (3) | Berkembang (2) | Pemula (1) |
|----------|------------|-----------|----------------|------------|
| **Fungsi Game** | Game lengkap dengan beberapa kondisi akhir, restart yang lancar, dan pengalaman gameplay yang terpolish | Game lengkap dengan kondisi akhir dasar dan mekanisme restart yang berfungsi | Game sebagian dengan beberapa kondisi akhir yang diimplementasikan, restart mungkin memiliki masalah kecil | Game tidak lengkap dengan fungsionalitas terbatas dan bug signifikan |
| **Kualitas Kode** | Kode bersih, terorganisir dengan baik menggunakan praktik JavaScript modern, komentar yang komprehensif, dan struktur yang sangat baik | Organisasi kode yang baik dengan sintaks modern, komentar memadai, dan struktur yang jelas | Organisasi kode dasar dengan beberapa praktik modern, komentar minimal | Organisasi kode buruk, sintaks usang, kurang komentar dan struktur |
| **Pengalaman Pengguna** | Gameplay intuitif dengan instruksi yang jelas, umpan balik yang sangat baik, dan pengalaman akhir/restart yang menarik | Gameplay yang baik dengan instruksi dan umpan balik yang memadai, akhir/restart yang fungsional | Gameplay dasar dengan instruksi minimal, umpan balik terbatas tentang status game | Gameplay membingungkan dengan instruksi yang tidak jelas dan umpan balik pengguna yang buruk |
| **Implementasi Teknis** | Menunjukkan penguasaan konsep pengembangan game, penanganan event, dan manajemen status | Menunjukkan pemahaman yang solid tentang konsep game dengan implementasi yang baik | Pemahaman dasar dengan implementasi yang dapat diterima | Pemahaman terbatas dengan implementasi yang buruk |
| **Dokumentasi** | README yang komprehensif dengan instruksi yang jelas, kode yang terdokumentasi dengan baik, dan bukti pengujian yang menyeluruh | Dokumentasi yang baik dengan instruksi yang jelas dan komentar kode yang memadai | Dokumentasi dasar dengan instruksi minimal | Dokumentasi buruk atau tidak ada |

### Skala Penilaian
- **Unggul (16-20 poin)**: Melebihi ekspektasi dengan fitur kreatif dan implementasi yang terpolish
- **Mahir (12-15 poin)**: Memenuhi semua persyaratan dengan eksekusi yang solid
- **Berkembang (8-11 poin)**: Memenuhi sebagian besar persyaratan dengan masalah kecil
- **Pemula (4-7 poin)**: Memenuhi beberapa persyaratan tetapi membutuhkan perbaikan signifikan

## Sumber Belajar Tambahan

- [Panduan Pengembangan Game MDN](https://developer.mozilla.org/en-US/docs/Games)
- [Tutorial Pengembangan Game JavaScript](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Dokumentasi Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Prinsip Desain Game](https://www.gamasutra.com/blogs/)

> 💡 **Tips Profesional**: Mulailah dengan sederhana dan tambahkan fitur secara bertahap. Game sederhana yang terpolish lebih baik daripada game kompleks dengan banyak bug!

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis dapat mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang keliru yang timbul dari penggunaan terjemahan ini.