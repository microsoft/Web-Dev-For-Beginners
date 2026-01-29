# Membuat Game: Menerapkan Pola Desain

## Gambaran Tugas

Gunakan pengetahuan baru Anda tentang pola desain dengan membuat prototipe game sederhana! Tugas ini akan membantu Anda berlatih pola arsitektur (inheritance atau composition) dan sistem komunikasi pub/sub yang telah Anda pelajari dalam pelajaran.

## Instruksi

Buat representasi game sederhana yang menunjukkan pola desain dari pelajaran ini. Game Anda harus berfungsi tetapi tidak perlu memiliki grafik yang kompleks \u2013 fokuslah pada arsitektur dan pola komunikasi yang mendasarinya.

### Persyaratan

**Pilih Pola Arsitektur Anda:**
- **Opsi A**: Gunakan inheritance berbasis kelas (seperti contoh `GameObject` → `Movable` → `Hero`)
- **Opsi B**: Gunakan composition (seperti pendekatan fungsi factory dengan perilaku campuran)

**Implementasikan Komunikasi:**
- **Sertakan** kelas `EventEmitter` untuk sistem pesan pub/sub
- **Siapkan** setidaknya 2-3 jenis pesan berbeda (seperti `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Hubungkan** input pengguna (keyboard/mouse) ke event game melalui sistem event

**Elemen Game yang Harus Ada:**
- Setidaknya satu karakter yang dikendalikan pemain
- Setidaknya satu objek game lainnya (musuh, item yang bisa dikoleksi, atau elemen lingkungan)
- Interaksi dasar antara objek (tabrakan, pengumpulan, atau komunikasi)

### Ide Game yang Disarankan

**Game Sederhana yang Bisa Dipertimbangkan:**
- **Game Ular** \u2013 Segmen ular mengikuti kepala, makanan muncul secara acak
- **Variasi Pong** \u2013 Paddle merespons input, bola memantul dari dinding
- **Game Kolektor** \u2013 Pemain bergerak mengumpulkan item sambil menghindari rintangan
- **Dasar Tower Defense** \u2013 Menara mendeteksi dan menembak musuh yang bergerak

### Panduan Struktur Kode

```javascript
// Example starting structure
const Messages = {
  // Define your game messages here
};

class EventEmitter {
  // Your event system implementation
}

// Choose either class-based OR composition approach
// Class-based example:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// OR Composition example:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Menguji Implementasi Anda

**Pastikan kode Anda berfungsi dengan:**
- **Menguji** bahwa objek bergerak atau berubah saat event dipicu
- **Memastikan** bahwa beberapa objek dapat merespons event yang sama
- **Memeriksa** bahwa Anda dapat menambahkan perilaku baru tanpa memodifikasi kode yang ada
- **Memastikan** input keyboard/mouse memicu event game dengan benar

## Panduan Pengumpulan

**Pengumpulan Anda harus mencakup:**
1. **File JavaScript** dengan implementasi game Anda
2. **File HTML** untuk menjalankan dan menguji game Anda (bisa sederhana)
3. **Komentar** yang menjelaskan pola yang Anda pilih dan alasannya
4. **Dokumentasi singkat** tentang jenis pesan dan apa yang mereka lakukan

## Rubrik

| Kriteria | Unggul (3 poin) | Memadai (2 poin) | Perlu Perbaikan (1 poin) |
|----------|-----------------|------------------|--------------------------|
| **Pola Arsitektur** | Mengimplementasikan inheritance ATAU composition dengan hierarki kelas/objek yang jelas | Menggunakan pola yang dipilih dengan beberapa masalah atau inkonsistensi | Mencoba menggunakan pola tetapi implementasi memiliki masalah signifikan |
| **Implementasi Pub/Sub** | EventEmitter berfungsi dengan benar dengan beberapa jenis pesan dan alur event yang tepat | Sistem pub/sub dasar berfungsi dengan beberapa penanganan event | Sistem event ada tetapi tidak berfungsi dengan baik |
| **Fungsi Game** | Tiga atau lebih elemen interaktif yang berkomunikasi melalui event | Dua elemen interaktif dengan komunikasi event dasar | Satu elemen merespons event atau interaksi dasar |
| **Kualitas Kode** | Kode bersih, diberi komentar dengan baik, organisasi logis, dan menggunakan JavaScript modern | Kode umumnya terorganisasi dengan baik dengan komentar yang memadai | Kode berfungsi tetapi kurang terorganisasi atau komentar tidak jelas |

**Poin Bonus:**
- **Mekanika game yang kreatif** yang menunjukkan penggunaan pola yang menarik
- **Metode input yang beragam** (event keyboard DAN mouse)
- **Arsitektur yang dapat diskalakan** yang mudah diperluas dengan fitur baru

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang timbul dari penggunaan terjemahan ini.