<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46bcdd9a0174031655a49bb062aa279c",
  "translation_date": "2025-10-24T14:15:34+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "id"
}
-->
# Membangun Game Luar Angkasa Bagian 6: Akhir dan Mulai Ulang

Setiap game yang hebat membutuhkan kondisi akhir yang jelas dan mekanisme mulai ulang yang mulus. Anda telah membangun game luar angkasa yang mengesankan dengan gerakan, pertempuran, dan skor - sekarang saatnya menambahkan elemen terakhir yang membuatnya terasa lengkap.

Game Anda saat ini berjalan tanpa batas, seperti probe Voyager yang diluncurkan NASA pada tahun 1977 - masih menjelajahi luar angkasa beberapa dekade kemudian. Meskipun itu bagus untuk eksplorasi luar angkasa, game membutuhkan titik akhir yang jelas untuk menciptakan pengalaman yang memuaskan.

Hari ini, kita akan menerapkan kondisi menang/kalah yang tepat dan sistem mulai ulang. Pada akhir pelajaran ini, Anda akan memiliki game yang sudah dipoles yang dapat diselesaikan dan dimainkan ulang, seperti game arcade klasik yang mendefinisikan media ini.

## Kuis Pra-Pelajaran

[Kuis pra-pelajaran](https://ff-quizzes.netlify.app/web/quiz/39)

## Memahami Kondisi Akhir Game

Kapan game Anda harus berakhir? Pertanyaan mendasar ini telah membentuk desain game sejak era arcade awal. Pac-Man berakhir ketika Anda tertangkap oleh hantu atau membersihkan semua titik, sementara Space Invaders berakhir ketika alien mencapai bagian bawah atau Anda menghancurkan semuanya.

Sebagai pembuat game, Anda menentukan kondisi kemenangan dan kekalahan. Untuk game luar angkasa kita, berikut adalah pendekatan yang terbukti menciptakan gameplay yang menarik:

- **`N` Kapal musuh telah dihancurkan**: Ini cukup umum jika Anda membagi game menjadi level yang berbeda, di mana Anda harus menghancurkan `N` kapal musuh untuk menyelesaikan level.
- **Kapal Anda telah dihancurkan**: Ada banyak game di mana Anda kalah jika kapal Anda dihancurkan. Pendekatan umum lainnya adalah konsep nyawa. Setiap kali kapal Anda dihancurkan, itu mengurangi satu nyawa. Setelah semua nyawa habis, Anda kalah.
- **Anda telah mengumpulkan `N` poin**: Kondisi akhir umum lainnya adalah mengumpulkan poin. Bagaimana Anda mendapatkan poin terserah Anda, tetapi biasanya poin diberikan untuk berbagai aktivitas seperti menghancurkan kapal musuh atau mengumpulkan item yang dijatuhkan saat musuh dihancurkan.
- **Menyelesaikan level**: Ini mungkin melibatkan beberapa kondisi seperti `X` kapal musuh dihancurkan, `Y` poin dikumpulkan, atau mungkin item tertentu telah dikumpulkan.

## Menerapkan Fungsi Mulai Ulang Game

Game yang bagus mendorong replayability melalui mekanisme mulai ulang yang mulus. Ketika pemain menyelesaikan game (atau mengalami kekalahan), mereka sering ingin mencoba lagi segera - baik untuk mengalahkan skor mereka atau meningkatkan performa mereka.

Tetris adalah contoh sempurna: ketika blok Anda mencapai bagian atas, Anda dapat langsung memulai game baru tanpa harus menavigasi menu yang rumit. Kita akan membangun sistem mulai ulang serupa yang dengan bersih mengatur ulang keadaan game dan membuat pemain kembali beraksi dengan cepat.

✅ **Refleksi**: Pikirkan tentang game yang pernah Anda mainkan. Dalam kondisi apa mereka berakhir, dan bagaimana Anda diminta untuk memulai ulang? Apa yang membuat pengalaman mulai ulang terasa mulus dibandingkan dengan yang membuat frustrasi?

## Apa yang Akan Anda Bangun

Anda akan menerapkan fitur terakhir yang mengubah proyek Anda menjadi pengalaman game yang lengkap. Elemen-elemen ini membedakan game yang sudah dipoles dari prototipe dasar.

**Berikut adalah yang akan kita tambahkan hari ini:**

1. **Kondisi kemenangan**: Hancurkan semua musuh dan dapatkan perayaan yang layak (Anda pantas mendapatkannya!)
2. **Kondisi kekalahan**: Kehabisan nyawa dan hadapi layar kekalahan
3. **Mekanisme mulai ulang**: Tekan Enter untuk langsung kembali bermain - karena satu game tidak pernah cukup
4. **Manajemen keadaan**: Awal yang bersih setiap kali - tidak ada musuh yang tersisa atau gangguan aneh dari game sebelumnya

## Memulai

Mari siapkan lingkungan pengembangan Anda. Anda harus memiliki semua file game luar angkasa dari pelajaran sebelumnya.

**Proyek Anda seharusnya terlihat seperti ini:**

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
  -| life.png
-| index.html
-| app.js
-| package.json
```

**Mulai server pengembangan Anda:**

```bash
cd your-work
npm start
```

**Perintah ini:**
- Menjalankan server lokal di `http://localhost:5000`
- Menyajikan file Anda dengan benar
- Secara otomatis menyegarkan saat Anda membuat perubahan

Buka `http://localhost:5000` di browser Anda dan pastikan game Anda berjalan. Anda seharusnya dapat bergerak, menembak, dan berinteraksi dengan musuh. Setelah dikonfirmasi, kita dapat melanjutkan ke implementasi.

> 💡 **Tips Pro**: Untuk menghindari peringatan di Visual Studio Code, deklarasikan `gameLoopId` di bagian atas file Anda sebagai `let gameLoopId;` daripada mendeklarasikannya di dalam fungsi `window.onload`. Ini mengikuti praktik terbaik deklarasi variabel JavaScript modern.

## Langkah-Langkah Implementasi

### Langkah 1: Buat Fungsi Pelacakan Kondisi Akhir

Kita membutuhkan fungsi untuk memantau kapan game harus berakhir. Seperti sensor di Stasiun Luar Angkasa Internasional yang terus memantau sistem kritis, fungsi-fungsi ini akan terus memeriksa keadaan game.

```javascript
function isHeroDead() {
  return hero.life <= 0;
}

function isEnemiesDead() {
  const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
  return enemies.length === 0;
}
```

**Berikut yang terjadi di balik layar:**
- **Memeriksa** apakah pahlawan kita kehabisan nyawa (aduh!)
- **Menghitung** berapa banyak musuh yang masih hidup dan bergerak
- **Mengembalikan** `true` ketika medan perang bersih dari musuh
- **Menggunakan** logika true/false sederhana untuk menjaga semuanya tetap sederhana
- **Menyaring** semua objek game untuk menemukan yang masih bertahan

### Langkah 2: Perbarui Pengendali Event untuk Kondisi Akhir

Sekarang kita akan menghubungkan pemeriksaan kondisi ini ke sistem event game. Setiap kali terjadi tabrakan, game akan mengevaluasi apakah itu memicu kondisi akhir. Ini menciptakan umpan balik langsung untuk event penting dalam game.

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
    first.dead = true;
    second.dead = true;
    hero.incrementPoints();

    if (isEnemiesDead()) {
      eventEmitter.emit(Messages.GAME_END_WIN);
    }
});

eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
    enemy.dead = true;
    hero.decrementLife();
    if (isHeroDead())  {
      eventEmitter.emit(Messages.GAME_END_LOSS);
      return; // loss before victory
    }
    if (isEnemiesDead()) {
      eventEmitter.emit(Messages.GAME_END_WIN);
    }
});

eventEmitter.on(Messages.GAME_END_WIN, () => {
    endGame(true);
});
  
eventEmitter.on(Messages.GAME_END_LOSS, () => {
  endGame(false);
});
```

**Apa yang terjadi di sini:**
- **Laser mengenai musuh**: Keduanya menghilang, Anda mendapatkan poin, dan kita memeriksa apakah Anda menang
- **Musuh mengenai Anda**: Anda kehilangan nyawa, dan kita memeriksa apakah Anda masih bertahan
- **Urutan pintar**: Kita memeriksa kekalahan terlebih dahulu (tidak ada yang ingin menang dan kalah pada saat yang sama!)
- **Reaksi instan**: Begitu sesuatu yang penting terjadi, game langsung mengetahuinya

### Langkah 3: Tambahkan Konstanta Pesan Baru

Anda perlu menambahkan jenis pesan baru ke objek `Messages` Anda. Konstanta ini membantu menjaga konsistensi dan mencegah kesalahan ketik dalam sistem event Anda.

```javascript
GAME_END_LOSS: "GAME_END_LOSS",
GAME_END_WIN: "GAME_END_WIN",
```

**Dalam kode di atas, kita telah:**
- **Menambahkan** konstanta untuk event akhir game untuk menjaga konsistensi
- **Menggunakan** nama deskriptif yang jelas menunjukkan tujuan event
- **Mengikuti** konvensi penamaan yang ada untuk jenis pesan

### Langkah 4: Terapkan Kontrol Mulai Ulang

Sekarang Anda akan menambahkan kontrol keyboard yang memungkinkan pemain untuk memulai ulang game. Tombol Enter adalah pilihan alami karena biasanya diasosiasikan dengan tindakan konfirmasi dan memulai game baru.

**Tambahkan deteksi tombol Enter ke pendengar event keydown Anda yang sudah ada:**

```javascript
else if(evt.key === "Enter") {
   eventEmitter.emit(Messages.KEY_EVENT_ENTER);
}
```

**Tambahkan konstanta pesan baru:**

```javascript
KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
```

**Yang perlu Anda ketahui:**
- **Memperluas** sistem penanganan event keyboard yang sudah ada
- **Menggunakan** tombol Enter sebagai pemicu mulai ulang untuk pengalaman pengguna yang intuitif
- **Mengirimkan** event khusus yang dapat didengarkan oleh bagian lain dari game Anda
- **Mempertahankan** pola yang sama seperti kontrol keyboard lainnya

### Langkah 5: Buat Sistem Tampilan Pesan

Game Anda perlu berkomunikasi hasil dengan jelas kepada pemain. Kita akan membuat sistem pesan yang menampilkan keadaan kemenangan dan kekalahan menggunakan teks berwarna, mirip dengan antarmuka terminal komputer awal di mana hijau menunjukkan keberhasilan dan merah menandakan kesalahan.

**Buat fungsi `displayMessage()`:**

```javascript
function displayMessage(message, color = "red") {
  ctx.font = "30px Arial";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}
```

**Langkah demi langkah, berikut yang terjadi:**
- **Mengatur** ukuran dan jenis font untuk teks yang jelas dan mudah dibaca
- **Menerapkan** parameter warna dengan "merah" sebagai default untuk peringatan
- **Memusatkan** teks secara horizontal dan vertikal di kanvas
- **Menggunakan** parameter default JavaScript modern untuk opsi warna yang fleksibel
- **Memanfaatkan** konteks 2D kanvas untuk rendering teks langsung

**Buat fungsi `endGame()`:**

```javascript
function endGame(win) {
  clearInterval(gameLoopId);

  // Set a delay to ensure any pending renders complete
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (win) {
      displayMessage(
        "Victory!!! Pew Pew... - Press [Enter] to start a new game Captain Pew Pew",
        "green"
      );
    } else {
      displayMessage(
        "You died !!! Press [Enter] to start a new game Captain Pew Pew"
      );
    }
  }, 200)  
}
```

**Apa yang dilakukan fungsi ini:**
- **Membekukan** semuanya di tempat - tidak ada lagi kapal atau laser yang bergerak
- **Mengambil** jeda kecil (200ms) untuk membiarkan frame terakhir selesai digambar
- **Membersihkan** layar dan mengecatnya hitam untuk efek dramatis
- **Menampilkan** pesan berbeda untuk pemenang dan yang kalah
- **Memberi kode warna** berita - hijau untuk kabar baik, merah untuk... yah, tidak begitu baik
- **Memberitahu** pemain cara untuk langsung kembali bermain

### Langkah 6: Terapkan Fungsi Reset Game

Sistem reset perlu sepenuhnya membersihkan keadaan game saat ini dan menginisialisasi sesi game baru. Ini memastikan pemain mendapatkan awal yang bersih tanpa data sisa dari game sebelumnya.

**Buat fungsi `resetGame()`:**

```javascript
function resetGame() {
  if (gameLoopId) {
    clearInterval(gameLoopId);
    eventEmitter.clear();
    initGame();
    gameLoopId = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawPoints();
      drawLife();
      updateGameObjects();
      drawGameObjects(ctx);
    }, 100);
  }
}
```

**Mari kita pahami setiap bagian:**
- **Memeriksa** apakah loop game saat ini berjalan sebelum mereset
- **Membersihkan** loop game yang ada untuk menghentikan semua aktivitas game saat ini
- **Menghapus** semua pendengar event untuk mencegah kebocoran memori
- **Menginisialisasi ulang** keadaan game dengan objek dan variabel baru
- **Memulai** loop game baru dengan semua fungsi game penting
- **Mempertahankan** interval 100ms yang sama untuk performa game yang konsisten

**Tambahkan pengendali event tombol Enter ke fungsi `initGame()` Anda:**

```javascript
eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
  resetGame();
});
```

**Tambahkan metode `clear()` ke kelas EventEmitter Anda:**

```javascript
clear() {
  this.listeners = {};
}
```

**Poin penting yang perlu diingat:**
- **Menghubungkan** penekanan tombol Enter ke fungsi reset game
- **Mendaftarkan** pendengar event ini selama inisialisasi game
- **Memberikan** cara yang bersih untuk menghapus semua pendengar event saat mereset
- **Mencegah** kebocoran memori dengan membersihkan pengendali event antar game
- **Mereset** objek pendengar ke keadaan kosong untuk inisialisasi baru

## Selamat! 🎉

👽 💥 🚀 Anda telah berhasil membangun game lengkap dari awal. Seperti para programmer yang menciptakan video game pertama pada tahun 1970-an, Anda telah mengubah baris kode menjadi pengalaman interaktif dengan mekanisme game dan umpan balik pengguna yang tepat. 🚀 💥 👽

**Anda telah mencapai:**
- **Menerapkan** kondisi menang dan kalah lengkap dengan umpan balik pengguna
- **Menciptakan** sistem mulai ulang yang mulus untuk gameplay berkelanjutan
- **Merancang** komunikasi visual yang jelas untuk keadaan game
- **Mengelola** transisi dan pembersihan keadaan game yang kompleks
- **Merakit** semua komponen menjadi game yang kohesif dan dapat dimainkan

## Tantangan GitHub Copilot Agent 🚀

Gunakan mode Agent untuk menyelesaikan tantangan berikut:

**Deskripsi:** Tingkatkan game luar angkasa dengan menerapkan sistem progresi level dengan peningkatan kesulitan dan fitur bonus.

**Prompt:** Buat sistem game multi-level di mana setiap level memiliki lebih banyak kapal musuh dengan kecepatan dan kesehatan yang meningkat. Tambahkan pengganda skor yang meningkat dengan setiap level, dan terapkan power-up (seperti tembakan cepat atau perisai) yang muncul secara acak saat musuh dihancurkan. Sertakan bonus penyelesaian level dan tampilkan level saat ini di layar bersama skor dan nyawa yang ada.

Pelajari lebih lanjut tentang [mode agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## 🚀 Tantangan Peningkatan Opsional

**Tambahkan Audio ke Game Anda**: Tingkatkan pengalaman gameplay Anda dengan menerapkan efek suara! Pertimbangkan untuk menambahkan audio untuk:

- **Tembakan laser** saat pemain menembak
- **Penghancuran musuh** saat kapal terkena
- **Kerusakan pahlawan** saat pemain terkena
- **Musik kemenangan** saat game dimenangkan
- **Suara kekalahan** saat game kalah

**Contoh implementasi audio:**

```javascript
// Create audio objects
const laserSound = new Audio('assets/laser.wav');
const explosionSound = new Audio('assets/explosion.wav');

// Play sounds during game events
function playLaserSound() {
  laserSound.currentTime = 0; // Reset to beginning
  laserSound.play();
}
```

**Yang perlu Anda ketahui:**
- **Membuat** objek Audio untuk efek suara yang berbeda
- **Mereset** `currentTime` untuk memungkinkan efek suara tembakan cepat
- **Menangani** kebijakan autoplay browser dengan memicu suara dari interaksi pengguna
- **Mengelola** volume dan waktu audio untuk pengalaman game yang lebih baik

> 💡 **Sumber Belajar**: Jelajahi [audio sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) ini untuk mempelajari lebih lanjut tentang menerapkan audio dalam game JavaScript.

## Kuis Pasca-Pelajaran

[Kuis pasca-pelajaran](https://ff-quizzes.netlify.app/web/quiz/40)

## Tinjauan & Studi Mandiri

Tugas Anda adalah membuat contoh game baru, jadi jelajahi beberapa game menarik di luar sana untuk melihat jenis game apa yang mungkin Anda bangun.

## Tugas

[Buat Contoh Game](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang timbul dari penggunaan terjemahan ini.