<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4b1d441cfd31924084956000c0fee5a5",
  "translation_date": "2025-10-24T14:16:15+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "id"
}
-->
# Membangun Game Luar Angkasa Bagian 4: Menambahkan Laser dan Mendeteksi Tabrakan

## Kuis Pra-Pelajaran

[Kuis pra-pelajaran](https://ff-quizzes.netlify.app/web/quiz/35)

Pikirkan momen dalam Star Wars ketika torpedo proton Luke mengenai lubang pembuangan Death Star. Deteksi tabrakan yang tepat itu mengubah nasib galaksi! Dalam game, deteksi tabrakan bekerja dengan cara yang sama - menentukan kapan objek berinteraksi dan apa yang terjadi selanjutnya.

Dalam pelajaran ini, Anda akan menambahkan senjata laser ke game luar angkasa Anda dan menerapkan deteksi tabrakan. Sama seperti perencana misi NASA menghitung lintasan pesawat ruang angkasa untuk menghindari puing-puing, Anda akan belajar mendeteksi saat objek game saling bersinggungan. Kami akan memecahnya menjadi langkah-langkah yang mudah dipahami.

Pada akhirnya, Anda akan memiliki sistem pertempuran yang berfungsi di mana laser menghancurkan musuh dan tabrakan memicu peristiwa dalam game. Prinsip deteksi tabrakan yang sama digunakan dalam segala hal, mulai dari simulasi fisika hingga antarmuka web interaktif.

✅ Lakukan sedikit penelitian tentang game komputer pertama yang pernah dibuat. Apa fungsinya?

## Deteksi Tabrakan

Deteksi tabrakan bekerja seperti sensor jarak pada modul lunar Apollo - terus-menerus memeriksa jarak dan memicu peringatan saat objek terlalu dekat. Dalam game, sistem ini menentukan kapan objek berinteraksi dan apa yang harus terjadi selanjutnya.

Pendekatan yang akan kita gunakan memperlakukan setiap objek game sebagai persegi panjang, mirip dengan bagaimana sistem kontrol lalu lintas udara menggunakan bentuk geometris sederhana untuk melacak pesawat. Metode persegi panjang ini mungkin terlihat sederhana, tetapi efisien secara komputasi dan bekerja dengan baik untuk sebagian besar skenario game.

### Representasi Persegi Panjang

Setiap objek game membutuhkan batas koordinat, mirip dengan bagaimana rover Mars Pathfinder memetakan lokasinya di permukaan Mars. Berikut cara kita mendefinisikan batas koordinat ini:

```javascript
rectFromGameObject() {
  return {
    top: this.y,
    left: this.x,
    bottom: this.y + this.height,
    right: this.x + this.width
  }
}
```

**Mari kita uraikan:**
- **Tepi atas**: Di mana objek Anda dimulai secara vertikal (posisi y-nya)
- **Tepi kiri**: Di mana objek dimulai secara horizontal (posisi x-nya)
- **Tepi bawah**: Tambahkan tinggi ke posisi y - sekarang Anda tahu di mana objek berakhir!
- **Tepi kanan**: Tambahkan lebar ke posisi x - dan Anda memiliki batas lengkapnya

### Algoritma Persilangan

Mendeteksi persilangan persegi panjang menggunakan logika yang mirip dengan bagaimana Teleskop Luar Angkasa Hubble menentukan apakah objek langit saling tumpang tindih dalam bidang pandangnya. Algoritma ini memeriksa pemisahan:

```javascript
function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}
```

**Tes pemisahan bekerja seperti sistem radar:**
- Apakah persegi panjang 2 sepenuhnya berada di kanan persegi panjang 1?
- Apakah persegi panjang 2 sepenuhnya berada di kiri persegi panjang 1?
- Apakah persegi panjang 2 sepenuhnya berada di bawah persegi panjang 1?
- Apakah persegi panjang 2 sepenuhnya berada di atas persegi panjang 1?

Jika tidak ada kondisi ini yang benar, maka persegi panjang pasti saling tumpang tindih. Pendekatan ini mencerminkan bagaimana operator radar menentukan apakah dua pesawat berada pada jarak yang aman.

## Mengelola Siklus Hidup Objek

Ketika laser mengenai musuh, kedua objek perlu dihapus dari game. Namun, menghapus objek di tengah loop dapat menyebabkan crash - pelajaran yang dipelajari dengan susah payah dalam sistem komputer awal seperti Apollo Guidance Computer. Sebagai gantinya, kita menggunakan pendekatan "tandai untuk dihapus" yang dengan aman menghapus objek di antara frame.

Berikut cara kita menandai sesuatu untuk dihapus:

```javascript
// Mark object for removal
enemy.dead = true;
```

**Mengapa pendekatan ini berhasil:**
- Kita menandai objek sebagai "mati" tetapi tidak langsung menghapusnya
- Ini memungkinkan frame game saat ini selesai dengan aman
- Tidak ada crash karena mencoba menggunakan sesuatu yang sudah dihapus!

Kemudian filter objek yang ditandai sebelum siklus render berikutnya:

```javascript
gameObjects = gameObjects.filter(go => !go.dead);
```

**Apa yang dilakukan filter ini:**
- Membuat daftar baru hanya dengan objek yang "hidup"
- Membuang apa pun yang ditandai sebagai mati
- Menjaga game Anda tetap berjalan lancar
- Mencegah pembengkakan memori dari akumulasi objek yang dihancurkan

## Menerapkan Mekanisme Laser

Proyektil laser dalam game bekerja dengan prinsip yang sama seperti torpedo foton dalam Star Trek - mereka adalah objek diskrit yang bergerak dalam garis lurus hingga mengenai sesuatu. Setiap kali tombol spasi ditekan, objek laser baru dibuat yang bergerak melintasi layar.

Untuk membuat ini berfungsi, kita perlu mengoordinasikan beberapa bagian yang berbeda:

**Komponen utama untuk diterapkan:**
- **Membuat** objek laser yang muncul dari posisi hero
- **Menangani** input keyboard untuk memicu pembuatan laser
- **Mengelola** pergerakan dan siklus hidup laser
- **Menerapkan** representasi visual untuk proyektil laser

## Menerapkan Kontrol Tingkat Penembakan

Tingkat penembakan tanpa batas akan membebani mesin game dan membuat gameplay terlalu mudah. Sistem senjata nyata menghadapi kendala serupa - bahkan phaser USS Enterprise membutuhkan waktu untuk mengisi ulang antara tembakan.

Kita akan menerapkan sistem cooldown yang mencegah spam tembakan cepat sambil mempertahankan kontrol yang responsif:

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time);
  }
}

class Weapon {
  constructor() {
    this.cooldown = null;
  }
  
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // Create laser projectile
      this.cooldown = new Cooldown(500);
    } else {
      // Weapon is still cooling down
    }
  }
}
```

**Bagaimana cooldown bekerja:**
- Saat dibuat, senjata mulai "panas" (belum bisa menembak)
- Setelah periode timeout, senjata menjadi "dingin" (siap menembak)
- Sebelum menembak, kita memeriksa: "Apakah senjata dingin?"
- Ini mencegah spam-klik sambil menjaga kontrol tetap responsif

✅ Lihat pelajaran 1 dalam seri game luar angkasa untuk mengingat tentang cooldown.

## Membangun Sistem Deteksi Tabrakan

Anda akan memperluas kode game luar angkasa Anda yang ada untuk membuat sistem deteksi tabrakan. Seperti sistem penghindaran tabrakan otomatis Stasiun Luar Angkasa Internasional, game Anda akan terus memantau posisi objek dan merespons persilangan.

Mulai dari kode pelajaran sebelumnya, Anda akan menambahkan deteksi tabrakan dengan aturan spesifik yang mengatur interaksi objek.

> 💡 **Pro Tip**: Sprite laser sudah termasuk dalam folder aset Anda dan dirujuk dalam kode Anda, siap untuk diterapkan.

### Aturan Tabrakan yang Harus Diterapkan

**Mekanisme game yang harus ditambahkan:**
1. **Laser mengenai musuh**: Objek musuh hancur saat terkena proyektil laser
2. **Laser mengenai batas layar**: Laser dihapus saat mencapai tepi atas layar
3. **Tabrakan musuh dan hero**: Kedua objek hancur saat mereka bersinggungan
4. **Musuh mencapai bawah**: Kondisi game over saat musuh mencapai bagian bawah layar

## Menyiapkan Lingkungan Pengembangan Anda

Kabar baik - kami telah menyiapkan sebagian besar dasar-dasar untuk Anda! Semua aset game dan struktur dasar Anda sudah ada di subfolder `your-work`, siap untuk Anda tambahkan fitur-fitur tabrakan yang keren.

### Struktur Proyek

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

**Memahami struktur file:**
- **Berisi** semua gambar sprite yang diperlukan untuk objek game
- **Termasuk** dokumen HTML utama dan file aplikasi JavaScript
- **Menyediakan** konfigurasi paket untuk server pengembangan lokal

### Memulai Server Pengembangan

Navigasikan ke folder proyek Anda dan mulai server lokal:

```bash
cd your-work
npm start
```

**Urutan perintah ini:**
- **Mengubah** direktori ke folder proyek kerja Anda
- **Memulai** server HTTP lokal di `http://localhost:5000`
- **Menyajikan** file game Anda untuk pengujian dan pengembangan
- **Memungkinkan** pengembangan langsung dengan pemuatan ulang otomatis

Buka browser Anda dan navigasikan ke `http://localhost:5000` untuk melihat status game Anda saat ini dengan hero dan musuh yang dirender di layar.

### Implementasi Langkah-demi-Langkah

Seperti pendekatan sistematis yang digunakan NASA untuk memprogram pesawat ruang angkasa Voyager, kita akan menerapkan deteksi tabrakan secara metodis, membangun setiap komponen langkah demi langkah.

#### 1. Tambahkan Batas Tabrakan Persegi Panjang

Pertama, mari ajarkan objek game kita cara mendeskripsikan batas mereka. Tambahkan metode ini ke kelas `GameObject` Anda:

```javascript
rectFromGameObject() {
    return {
      top: this.y,
      left: this.x,
      bottom: this.y + this.height,
      right: this.x + this.width,
    };
  }
```

**Metode ini mencapai:**
- **Membuat** objek persegi panjang dengan koordinat batas yang tepat
- **Menghitung** tepi bawah dan kanan menggunakan posisi ditambah dimensi
- **Mengembalikan** objek yang siap untuk algoritma deteksi tabrakan
- **Menyediakan** antarmuka standar untuk semua objek game

#### 2. Menerapkan Deteksi Persilangan

Sekarang mari kita buat detektif tabrakan kita - sebuah fungsi yang dapat memberi tahu kapan dua persegi panjang saling tumpang tindih:

```javascript
function intersectRect(r1, r2) {
  return !(
    r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top
  );
}
```

**Algoritma ini bekerja dengan:**
- **Menguji** empat kondisi pemisahan antara persegi panjang
- **Mengembalikan** `false` jika ada kondisi pemisahan yang benar
- **Menunjukkan** tabrakan saat tidak ada pemisahan
- **Menggunakan** logika negasi untuk pengujian persilangan yang efisien

#### 3. Menerapkan Sistem Penembakan Laser

Di sinilah segalanya menjadi menarik! Mari kita atur sistem penembakan laser.

##### Konstanta Pesan

Pertama, mari kita definisikan beberapa jenis pesan sehingga bagian-bagian berbeda dari game kita dapat saling berkomunikasi:

```javascript
KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
```

**Konstanta ini menyediakan:**
- **Standarisasi** nama acara di seluruh aplikasi
- **Memungkinkan** komunikasi yang konsisten antara sistem game
- **Mencegah** kesalahan ketik dalam pendaftaran handler acara

##### Penanganan Input Keyboard

Tambahkan deteksi tombol spasi ke listener acara tombol Anda:

```javascript
} else if(evt.keyCode === 32) {
  eventEmitter.emit(Messages.KEY_EVENT_SPACE);
}
```

**Penangan input ini:**
- **Mendeteksi** penekanan tombol spasi menggunakan keyCode 32
- **Mengirimkan** pesan acara yang standar
- **Memungkinkan** logika penembakan yang terpisah

##### Pengaturan Listener Acara

Daftarkan perilaku penembakan dalam fungsi `initGame()` Anda:

```javascript
eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
 if (hero.canFire()) {
   hero.fire();
 }
});
```

**Listener acara ini:**
- **Merespons** acara tombol spasi
- **Memeriksa** status cooldown penembakan
- **Memicu** pembuatan laser saat diizinkan

Tambahkan penanganan tabrakan untuk interaksi laser-musuh:

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
  first.dead = true;
  second.dead = true;
});
```

**Penangan tabrakan ini:**
- **Menerima** data acara tabrakan dengan kedua objek
- **Menandai** kedua objek untuk dihapus
- **Memastikan** pembersihan yang tepat setelah tabrakan

#### 4. Buat Kelas Laser

Terapkan proyektil laser yang bergerak ke atas dan mengelola siklus hidupnya sendiri:

```javascript
class Laser extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 9;
    this.height = 33;
    this.type = 'Laser';
    this.img = laserImg;
    
    let id = setInterval(() => {
      if (this.y > 0) {
        this.y -= 15;
      } else {
        this.dead = true;
        clearInterval(id);
      }
    }, 100);
  }
}
```

**Implementasi kelas ini:**
- **Memperluas** GameObject untuk mewarisi fungsionalitas dasar
- **Mengatur** dimensi yang sesuai untuk sprite laser
- **Membuat** pergerakan otomatis ke atas menggunakan `setInterval()`
- **Menangani** penghancuran diri saat mencapai bagian atas layar
- **Mengelola** waktu animasi dan pembersihan sendiri

#### 5. Menerapkan Sistem Deteksi Tabrakan

Buat fungsi deteksi tabrakan yang komprehensif:

```javascript
function updateGameObjects() {
  const enemies = gameObjects.filter(go => go.type === 'Enemy');
  const lasers = gameObjects.filter(go => go.type === "Laser");
  
  // Test laser-enemy collisions
  lasers.forEach((laser) => {
    enemies.forEach((enemy) => {
      if (intersectRect(laser.rectFromGameObject(), enemy.rectFromGameObject())) {
        eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
          first: laser,
          second: enemy,
        });
      }
    });
  });

  // Remove destroyed objects
  gameObjects = gameObjects.filter(go => !go.dead);
}
```

**Sistem tabrakan ini:**
- **Memfilter** objek game berdasarkan jenis untuk pengujian yang efisien
- **Menguji** setiap laser terhadap setiap musuh untuk persilangan
- **Mengirimkan** acara tabrakan saat persilangan terdeteksi
- **Membersihkan** objek yang dihancurkan setelah pemrosesan tabrakan

> ⚠️ **Penting**: Tambahkan `updateGameObjects()` ke loop utama game Anda di `window.onload` untuk mengaktifkan deteksi tabrakan.

#### 6. Tambahkan Sistem Cooldown ke Kelas Hero

Tingkatkan kelas Hero dengan mekanisme penembakan dan pembatasan tingkat:

```javascript
class Hero extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 99;
    this.height = 75;
    this.type = "Hero";
    this.speed = { x: 0, y: 0 };
    this.cooldown = 0;
  }
  
  fire() {
    gameObjects.push(new Laser(this.x + 45, this.y - 10));
    this.cooldown = 500;

    let id = setInterval(() => {
      if (this.cooldown > 0) {
        this.cooldown -= 100;
      } else {
        clearInterval(id);
      }
    }, 200);
  }
  
  canFire() {
    return this.cooldown === 0;
  }
}
```

**Memahami kelas Hero yang ditingkatkan:**
- **Menginisialisasi** timer cooldown pada nol (siap menembak)
- **Membuat** objek laser yang diposisikan di atas kapal hero
- **Mengatur** periode cooldown untuk mencegah penembakan cepat
- **Mengurangi** timer cooldown menggunakan pembaruan berbasis interval
- **Menyediakan** pemeriksaan status penembakan melalui metode `canFire()`

### Menguji Implementasi Anda

Game luar angkasa Anda sekarang memiliki deteksi tabrakan lengkap dan mekanisme pertempuran. 🚀 Uji kemampuan baru ini:
- **Navigasi** dengan tombol panah untuk memverifikasi kontrol pergerakan
- **Tembakkan laser** dengan tombol spasi - perhatikan bagaimana cooldown mencegah spam-klik
- **Amati tabrakan** saat laser mengenai musuh, memicu penghapusan
- **Verifikasi pembersihan** saat objek yang dihancurkan menghilang dari game

Anda telah berhasil menerapkan sistem deteksi tabrakan menggunakan prinsip matematika yang sama yang membimbing navigasi pesawat ruang angkasa dan robotika.

## Tantangan Agen GitHub Copilot 🚀

Gunakan mode Agen untuk menyelesaikan tantangan berikut:

**Deskripsi:** Tingkatkan sistem deteksi tabrakan dengan menerapkan power-up yang muncul secara acak dan memberikan kemampuan sementara saat dikumpulkan oleh kapal hero.

**Prompt:** Buat kelas PowerUp yang memperluas GameObject dan terapkan deteksi tabrakan antara hero dan power-up. Tambahkan setidaknya dua jenis power-up: satu yang meningkatkan tingkat tembakan (mengurangi cooldown) dan satu lagi yang menciptakan perisai sementara. Sertakan logika spawn yang menciptakan power-up pada interval dan posisi acak.

---



## 🚀 Tantangan

Tambahkan ledakan! Lihat aset game di [repo Seni Luar Angkasa](../../../../6-space-game/solution/spaceArt/readme.txt) dan coba tambahkan ledakan saat laser mengenai alien.

## Kuis Pasca-Pelajaran

[Kuis pasca-pelajaran](https://ff-quizzes.netlify.app/web/quiz/36)

## Tinjauan & Studi Mandiri

Eksperimen dengan interval dalam game Anda sejauh ini. Apa yang terjadi saat Anda mengubahnya? Baca lebih lanjut tentang [event timing JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Tugas

[Eksplorasi tabrakan](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang timbul dari penggunaan terjemahan ini.