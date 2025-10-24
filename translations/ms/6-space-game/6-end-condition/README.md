<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46bcdd9a0174031655a49bb062aa279c",
  "translation_date": "2025-10-24T14:39:54+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "ms"
}
-->
# Bina Permainan Angkasa Bahagian 6: Tamat dan Mulakan Semula

Setiap permainan hebat memerlukan syarat tamat yang jelas dan mekanisme permulaan semula yang lancar. Anda telah membina permainan angkasa yang mengagumkan dengan pergerakan, pertempuran, dan skor - kini tiba masanya untuk menambah elemen terakhir yang menjadikannya terasa lengkap.

Permainan anda kini berjalan tanpa henti, seperti probe Voyager yang dilancarkan oleh NASA pada tahun 1977 - masih bergerak melalui angkasa beberapa dekad kemudian. Walaupun itu sesuai untuk penerokaan angkasa, permainan memerlukan titik tamat yang ditentukan untuk mencipta pengalaman yang memuaskan.

Hari ini, kita akan melaksanakan syarat menang/kalah yang betul dan sistem permulaan semula. Pada akhir pelajaran ini, anda akan mempunyai permainan yang lengkap yang boleh diselesaikan dan dimainkan semula, seperti permainan arked klasik yang mendefinisikan medium ini.

## Kuiz Pra-Kuliah

[Kuiz pra-kuliah](https://ff-quizzes.netlify.app/web/quiz/39)

## Memahami Syarat Tamat Permainan

Bilakah permainan anda sepatutnya tamat? Soalan asas ini telah membentuk reka bentuk permainan sejak era arked awal. Pac-Man tamat apabila anda ditangkap oleh hantu atau membersihkan semua titik, manakala Space Invaders tamat apabila alien mencapai bahagian bawah atau anda memusnahkan mereka semua.

Sebagai pencipta permainan, anda menentukan syarat kemenangan dan kekalahan. Untuk permainan angkasa kita, berikut adalah pendekatan yang terbukti yang mencipta permainan yang menarik:

- **`N` Kapal musuh telah dimusnahkan**: Ini agak biasa jika anda membahagikan permainan kepada tahap yang berbeza di mana anda perlu memusnahkan `N` kapal musuh untuk melengkapkan satu tahap.
- **Kapal anda telah dimusnahkan**: Terdapat permainan di mana anda kalah jika kapal anda dimusnahkan. Pendekatan biasa lain adalah konsep nyawa. Setiap kali kapal anda dimusnahkan, ia mengurangkan satu nyawa. Apabila semua nyawa telah hilang, anda kalah.
- **Anda telah mengumpul `N` mata**: Syarat tamat lain yang biasa adalah untuk anda mengumpul mata. Bagaimana anda mendapat mata terpulang kepada anda tetapi ia agak biasa untuk memberikan mata kepada pelbagai aktiviti seperti memusnahkan kapal musuh atau mungkin mengumpul item yang *jatuh* apabila mereka dimusnahkan.
- **Melengkapkan satu tahap**: Ini mungkin melibatkan beberapa syarat seperti `X` kapal musuh dimusnahkan, `Y` mata dikumpul atau mungkin item tertentu telah dikumpul.

## Melaksanakan Fungsi Permulaan Semula Permainan

Permainan yang baik menggalakkan kebolehmainan semula melalui mekanisme permulaan semula yang lancar. Apabila pemain melengkapkan permainan (atau mengalami kekalahan), mereka sering ingin mencuba lagi dengan segera - sama ada untuk mengalahkan skor mereka atau meningkatkan prestasi mereka.

Tetris adalah contoh sempurna: apabila blok anda mencapai bahagian atas, anda boleh segera memulakan permainan baru tanpa perlu melalui menu yang kompleks. Kita akan membina sistem permulaan semula yang serupa yang membersihkan keadaan permainan dan membawa pemain kembali ke aksi dengan cepat.

✅ **Refleksi**: Fikirkan tentang permainan yang pernah anda mainkan. Dalam keadaan apa ia tamat, dan bagaimana anda digalakkan untuk memulakan semula? Apa yang membuat pengalaman permulaan semula terasa lancar berbanding mengecewakan?

## Apa yang Akan Anda Bina

Anda akan melaksanakan ciri-ciri terakhir yang mengubah projek anda menjadi pengalaman permainan yang lengkap. Elemen-elemen ini membezakan permainan yang dipoles daripada prototaip asas.

**Inilah yang kita tambahkan hari ini:**

1. **Syarat kemenangan**: Musnahkan semua musuh dan dapatkan sambutan yang sewajarnya (anda layak mendapatnya!)
2. **Syarat kekalahan**: Kehabisan nyawa dan hadapi kekalahan dengan skrin kekalahan
3. **Mekanisme permulaan semula**: Tekan Enter untuk kembali bermain - kerana satu permainan tidak pernah cukup
4. **Pengurusan keadaan**: Permulaan baru setiap kali - tiada musuh yang tertinggal atau gangguan pelik dari permainan sebelumnya

## Memulakan

Mari sediakan persekitaran pembangunan anda. Anda sepatutnya mempunyai semua fail permainan angkasa anda dari pelajaran sebelumnya.

**Projek anda sepatutnya kelihatan seperti ini:**

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

**Mulakan pelayan pembangunan anda:**

```bash
cd your-work
npm start
```

**Perintah ini:**
- Menjalankan pelayan tempatan di `http://localhost:5000`
- Menyediakan fail anda dengan betul
- Menyegarkan secara automatik apabila anda membuat perubahan

Buka `http://localhost:5000` dalam pelayar anda dan pastikan permainan anda berjalan. Anda sepatutnya boleh bergerak, menembak, dan berinteraksi dengan musuh. Setelah disahkan, kita boleh meneruskan pelaksanaan.

> 💡 **Petua Pro**: Untuk mengelakkan amaran dalam Visual Studio Code, isytiharkan `gameLoopId` di bahagian atas fail anda sebagai `let gameLoopId;` daripada mengisytiharkannya di dalam fungsi `window.onload`. Ini mengikuti amalan terbaik pengisytiharan pembolehubah JavaScript moden.

## Langkah Pelaksanaan

### Langkah 1: Cipta Fungsi Penjejakan Syarat Tamat

Kita memerlukan fungsi untuk memantau bila permainan sepatutnya tamat. Seperti sensor di Stesen Angkasa Antarabangsa yang sentiasa memantau sistem kritikal, fungsi-fungsi ini akan sentiasa memeriksa keadaan permainan.

```javascript
function isHeroDead() {
  return hero.life <= 0;
}

function isEnemiesDead() {
  const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
  return enemies.length === 0;
}
```

**Inilah yang berlaku di belakang tabir:**
- **Memeriksa** jika hero kita kehabisan nyawa (aduh!)
- **Mengira** berapa banyak musuh yang masih hidup dan aktif
- **Mengembalikan** `true` apabila medan perang bersih daripada musuh
- **Menggunakan** logik benar/palsu yang mudah untuk memastikan ia mudah
- **Menapis** semua objek permainan untuk mencari yang masih hidup

### Langkah 2: Kemas Kini Pengendali Acara untuk Syarat Tamat

Sekarang kita akan menghubungkan pemeriksaan syarat ini kepada sistem acara permainan. Setiap kali perlanggaran berlaku, permainan akan menilai sama ada ia mencetuskan syarat tamat. Ini mencipta maklum balas segera untuk acara permainan kritikal.

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

**Apa yang berlaku di sini:**
- **Laser mengenai musuh**: Kedua-duanya hilang, anda mendapat mata, dan kita memeriksa jika anda menang
- **Musuh mengenai anda**: Anda kehilangan nyawa, dan kita memeriksa jika anda masih hidup
- **Susunan pintar**: Kita memeriksa kekalahan dahulu (tiada siapa yang mahu menang dan kalah pada masa yang sama!)
- **Reaksi segera**: Sebaik sahaja sesuatu yang penting berlaku, permainan mengetahuinya

### Langkah 3: Tambah Pemalar Mesej Baru

Anda perlu menambah jenis mesej baru kepada objek pemalar `Messages` anda. Pemalar ini membantu mengekalkan konsistensi dan mencegah kesalahan ejaan dalam sistem acara anda.

```javascript
GAME_END_LOSS: "GAME_END_LOSS",
GAME_END_WIN: "GAME_END_WIN",
```

**Dalam yang di atas, kita telah:**
- **Menambah** pemalar untuk acara tamat permainan untuk mengekalkan konsistensi
- **Menggunakan** nama deskriptif yang jelas menunjukkan tujuan acara
- **Mengikuti** konvensyen penamaan yang sedia ada untuk jenis mesej

### Langkah 4: Laksanakan Kawalan Permulaan Semula

Sekarang anda akan menambah kawalan papan kekunci yang membolehkan pemain memulakan semula permainan. Kekunci Enter adalah pilihan semula jadi kerana ia biasanya dikaitkan dengan tindakan pengesahan dan permulaan permainan baru.

**Tambah pengesanan kekunci Enter kepada pendengar acara keydown sedia ada anda:**

```javascript
else if(evt.key === "Enter") {
   eventEmitter.emit(Messages.KEY_EVENT_ENTER);
}
```

**Tambah pemalar mesej baru:**

```javascript
KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
```

**Apa yang perlu anda tahu:**
- **Meluaskan** sistem pengendalian acara papan kekunci sedia ada anda
- **Menggunakan** kekunci Enter sebagai pencetus permulaan semula untuk pengalaman pengguna yang intuitif
- **Mengeluarkan** acara tersuai yang boleh didengar oleh bahagian lain permainan anda
- **Menjaga** corak yang sama seperti kawalan papan kekunci anda yang lain

### Langkah 5: Cipta Sistem Paparan Mesej

Permainan anda perlu menyampaikan hasil dengan jelas kepada pemain. Kita akan mencipta sistem mesej yang memaparkan keadaan kemenangan dan kekalahan menggunakan teks berwarna, serupa dengan antara muka terminal komputer awal di mana hijau menunjukkan kejayaan dan merah menandakan kesilapan.

**Cipta fungsi `displayMessage()`:**

```javascript
function displayMessage(message, color = "red") {
  ctx.font = "30px Arial";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}
```

**Langkah demi langkah, inilah yang berlaku:**
- **Menetapkan** saiz dan jenis fon untuk teks yang jelas dan mudah dibaca
- **Menggunakan** parameter warna dengan "merah" sebagai lalai untuk amaran
- **Memusatkan** teks secara mendatar dan menegak pada kanvas
- **Menggunakan** parameter lalai JavaScript moden untuk pilihan warna yang fleksibel
- **Memanfaatkan** konteks 2D kanvas untuk rendering teks secara langsung

**Cipta fungsi `endGame()`:**

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

**Apa yang dilakukan oleh fungsi ini:**
- **Membekukan** segalanya - tiada lagi kapal atau laser yang bergerak
- **Mengambil** jeda kecil (200ms) untuk membiarkan bingkai terakhir selesai melukis
- **Membersihkan** skrin dan menjadikannya hitam untuk kesan dramatik
- **Menunjukkan** mesej yang berbeza untuk pemenang dan yang kalah
- **Menggunakan kod warna** untuk berita - hijau untuk baik, merah untuk... tidak begitu baik
- **Memberitahu** pemain cara untuk kembali bermain

### Langkah 6: Laksanakan Fungsi Tetapan Semula Permainan

Sistem tetapan semula perlu membersihkan sepenuhnya keadaan permainan semasa dan memulakan sesi permainan baru. Ini memastikan pemain mendapat permulaan yang bersih tanpa sebarang data yang tertinggal dari permainan sebelumnya.

**Cipta fungsi `resetGame()`:**

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

**Mari fahami setiap bahagian:**
- **Memeriksa** jika gelung permainan sedang berjalan sebelum menetapkan semula
- **Membersihkan** gelung permainan sedia ada untuk menghentikan semua aktiviti permainan semasa
- **Menghapuskan** semua pendengar acara untuk mencegah kebocoran memori
- **Memulakan semula** keadaan permainan dengan objek dan pembolehubah baru
- **Memulakan** gelung permainan baru dengan semua fungsi permainan penting
- **Menjaga** selang 100ms yang sama untuk prestasi permainan yang konsisten

**Tambah pengendali acara kekunci Enter kepada fungsi `initGame()` anda:**

```javascript
eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
  resetGame();
});
```

**Tambah kaedah `clear()` kepada kelas EventEmitter anda:**

```javascript
clear() {
  this.listeners = {};
}
```

**Perkara utama untuk diingat:**
- **Menghubungkan** tekan kekunci Enter kepada fungsi tetapan semula permainan
- **Mendaftarkan** pendengar acara ini semasa inisialisasi permainan
- **Memberikan** cara yang bersih untuk menghapuskan semua pendengar acara semasa menetapkan semula
- **Mencegah** kebocoran memori dengan membersihkan pengendali acara antara permainan
- **Menetapkan semula** objek pendengar kepada keadaan kosong untuk inisialisasi baru

## Tahniah! 🎉

👽 💥 🚀 Anda telah berjaya membina permainan lengkap dari awal. Seperti pengaturcara yang mencipta permainan video pertama pada tahun 1970-an, anda telah mengubah barisan kod menjadi pengalaman interaktif dengan mekanik permainan dan maklum balas pengguna yang betul. 🚀 💥 👽

**Anda telah mencapai:**
- **Melaksanakan** syarat menang dan kalah lengkap dengan maklum balas pengguna
- **Mencipta** sistem permulaan semula yang lancar untuk permainan berterusan
- **Merancang** komunikasi visual yang jelas untuk keadaan permainan
- **Menguruskan** peralihan dan pembersihan keadaan permainan yang kompleks
- **Menggabungkan** semua komponen menjadi permainan yang boleh dimainkan dengan kohesif

## Cabaran Ejen GitHub Copilot 🚀

Gunakan mod Ejen untuk menyelesaikan cabaran berikut:

**Penerangan:** Tingkatkan permainan angkasa dengan melaksanakan sistem perkembangan tahap dengan kesukaran yang meningkat dan ciri bonus.

**Arahan:** Cipta sistem permainan angkasa berbilang tahap di mana setiap tahap mempunyai lebih banyak kapal musuh dengan kelajuan dan kesihatan yang meningkat. Tambahkan pengganda skor yang meningkat dengan setiap tahap, dan laksanakan kuasa tambahan (seperti tembakan pantas atau perisai) yang muncul secara rawak apabila musuh dimusnahkan. Sertakan bonus penyelesaian tahap dan paparkan tahap semasa di skrin bersama skor dan nyawa yang sedia ada.

Ketahui lebih lanjut tentang [mod ejen](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## 🚀 Cabaran Peningkatan Pilihan

**Tambah Audio kepada Permainan Anda**: Tingkatkan pengalaman permainan anda dengan melaksanakan kesan bunyi! Pertimbangkan untuk menambah audio untuk:

- **Tembakan laser** apabila pemain menembak
- **Kemusnahan musuh** apabila kapal terkena
- **Kerosakan hero** apabila pemain terkena
- **Muzik kemenangan** apabila permainan dimenangi
- **Bunyi kekalahan** apabila permainan kalah

**Contoh pelaksanaan audio:**

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

**Apa yang perlu anda tahu:**
- **Mencipta** objek Audio untuk pelbagai kesan bunyi
- **Menetapkan semula** `currentTime` untuk membolehkan kesan bunyi tembakan pantas
- **Mengendalikan** dasar autoplay pelayar dengan mencetuskan bunyi daripada interaksi pengguna
- **Menguruskan** kelantangan dan masa audio untuk pengalaman permainan yang lebih baik

> 💡 **Sumber Pembelajaran**: Terokai [audio sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) ini untuk mengetahui lebih lanjut tentang melaksanakan audio dalam permainan JavaScript.

## Kuiz Pasca-Kuliah

[Kuiz pasca-kuliah](https://ff-quizzes.netlify.app/web/quiz/40)

## Ulasan & Kajian Kendiri

Tugasan anda adalah untuk mencipta permainan contoh baru, jadi terokai beberapa permainan menarik di luar sana untuk melihat jenis permainan yang mungkin anda bina.

## Tugasan

[Bina Permainan Contoh](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.