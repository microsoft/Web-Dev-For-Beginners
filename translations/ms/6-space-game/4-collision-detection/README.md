<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4b1d441cfd31924084956000c0fee5a5",
  "translation_date": "2025-10-24T14:40:39+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "ms"
}
-->
# Bina Permainan Angkasa Bahagian 4: Menambah Laser dan Mengesan Perlanggaran

## Kuiz Pra-Kuliah

[Kuiz pra-kuliah](https://ff-quizzes.netlify.app/web/quiz/35)

Fikirkan saat dalam Star Wars apabila torpedo proton Luke mengenai lubang ekzos Death Star. Pengesanan perlanggaran yang tepat itu mengubah nasib galaksi! Dalam permainan, pengesanan perlanggaran berfungsi dengan cara yang sama - ia menentukan bila objek berinteraksi dan apa yang berlaku seterusnya.

Dalam pelajaran ini, anda akan menambah senjata laser ke permainan angkasa anda dan melaksanakan pengesanan perlanggaran. Sama seperti perancang misi NASA mengira trajektori kapal angkasa untuk mengelakkan serpihan, anda akan belajar mengesan apabila objek permainan bersilang. Kami akan memecahkannya kepada langkah-langkah yang mudah difahami.

Pada akhirnya, anda akan mempunyai sistem pertempuran yang berfungsi di mana laser memusnahkan musuh dan perlanggaran mencetuskan acara permainan. Prinsip perlanggaran yang sama digunakan dalam segala-galanya daripada simulasi fizik hingga antara muka web interaktif.

✅ Lakukan sedikit penyelidikan tentang permainan komputer pertama yang pernah ditulis. Apakah fungsinya?

## Pengesanan Perlanggaran

Pengesanan perlanggaran berfungsi seperti sensor jarak pada modul lunar Apollo - ia sentiasa memeriksa jarak dan mencetuskan amaran apabila objek terlalu dekat. Dalam permainan, sistem ini menentukan bila objek berinteraksi dan apa yang perlu berlaku seterusnya.

Pendekatan yang akan kita gunakan menganggap setiap objek permainan sebagai segi empat tepat, sama seperti sistem kawalan trafik udara menggunakan bentuk geometri yang dipermudahkan untuk menjejaki pesawat. Kaedah segi empat tepat ini mungkin kelihatan asas, tetapi ia cekap dari segi pengiraan dan berfungsi dengan baik untuk kebanyakan senario permainan.

### Representasi Segi Empat Tepat

Setiap objek permainan memerlukan sempadan koordinat, sama seperti rover Mars Pathfinder memetakan lokasinya di permukaan Marikh. Berikut adalah cara kita menentukan koordinat sempadan ini:

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

**Mari kita pecahkan:**
- **Tepi atas**: Di mana objek anda bermula secara menegak (posisi y)
- **Tepi kiri**: Di mana ia bermula secara mendatar (posisi x)
- **Tepi bawah**: Tambahkan ketinggian kepada posisi y - sekarang anda tahu di mana ia berakhir!
- **Tepi kanan**: Tambahkan lebar kepada posisi x - dan anda mempunyai sempadan lengkap

### Algoritma Persilangan

Mengesan persilangan segi empat tepat menggunakan logik yang serupa dengan cara Teleskop Angkasa Hubble menentukan jika objek cakerawala bertindih dalam medan pandangannya. Algoritma ini memeriksa pemisahan:

```javascript
function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}
```

**Ujian pemisahan berfungsi seperti sistem radar:**
- Adakah segi empat tepat 2 sepenuhnya di sebelah kanan segi empat tepat 1?
- Adakah segi empat tepat 2 sepenuhnya di sebelah kiri segi empat tepat 1?
- Adakah segi empat tepat 2 sepenuhnya di bawah segi empat tepat 1?
- Adakah segi empat tepat 2 sepenuhnya di atas segi empat tepat 1?

Jika tiada satu pun daripada syarat ini benar, segi empat tepat mesti bertindih. Pendekatan ini mencerminkan cara pengendali radar menentukan jika dua pesawat berada pada jarak yang selamat.

## Mengurus Kitaran Hayat Objek

Apabila laser mengenai musuh, kedua-dua objek perlu dikeluarkan dari permainan. Walau bagaimanapun, memadamkan objek semasa gelung boleh menyebabkan kerosakan - pelajaran yang dipelajari dengan susah payah dalam sistem komputer awal seperti Apollo Guidance Computer. Sebaliknya, kita menggunakan pendekatan "tandakan untuk penghapusan" yang selamat mengeluarkan objek antara bingkai.

Berikut adalah cara kita menandakan sesuatu untuk penghapusan:

```javascript
// Mark object for removal
enemy.dead = true;
```

**Mengapa pendekatan ini berfungsi:**
- Kita menandakan objek sebagai "mati" tetapi tidak memadamkannya dengan segera
- Ini membolehkan bingkai permainan semasa selesai dengan selamat
- Tiada kerosakan daripada cuba menggunakan sesuatu yang sudah tiada!

Kemudian tapis objek yang ditandakan sebelum kitaran render seterusnya:

```javascript
gameObjects = gameObjects.filter(go => !go.dead);
```

**Apa yang penapisan ini lakukan:**
- Membuat senarai baru dengan hanya objek "hidup"
- Membuang apa sahaja yang ditandakan sebagai mati
- Menjaga permainan anda berjalan lancar
- Mengelakkan pembaziran memori daripada pengumpulan objek yang dimusnahkan

## Melaksanakan Mekanik Laser

Projektil laser dalam permainan berfungsi berdasarkan prinsip yang sama seperti torpedo foton dalam Star Trek - ia adalah objek diskret yang bergerak dalam garis lurus sehingga ia mengenai sesuatu. Setiap tekan bar ruang mencipta objek laser baru yang bergerak di skrin.

Untuk membuat ini berfungsi, kita perlu menyelaraskan beberapa bahagian yang berbeza:

**Komponen utama untuk dilaksanakan:**
- **Cipta** objek laser yang muncul dari posisi hero
- **Kendalikan** input papan kekunci untuk mencetuskan penciptaan laser
- **Urus** pergerakan dan kitaran hayat laser
- **Laksanakan** representasi visual untuk projektil laser

## Melaksanakan Kawalan Kadar Tembakan

Kadar tembakan tanpa had akan membebankan enjin permainan dan menjadikan permainan terlalu mudah. Sistem senjata sebenar menghadapi kekangan yang sama - bahkan phaser USS Enterprise memerlukan masa untuk mengecas semula antara tembakan.

Kami akan melaksanakan sistem cooldown yang menghalang spam tembakan pantas sambil mengekalkan kawalan yang responsif:

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

**Bagaimana cooldown berfungsi:**
- Apabila dicipta, senjata bermula "panas" (tidak boleh menembak lagi)
- Selepas tempoh timeout, ia menjadi "sejuk" (sedia untuk menembak)
- Sebelum menembak, kita periksa: "Adakah senjata sejuk?"
- Ini menghalang spam klik sambil mengekalkan kawalan yang responsif

✅ Rujuk pelajaran 1 dalam siri permainan angkasa untuk mengingatkan diri anda tentang cooldown.

## Membina Sistem Pengesanan Perlanggaran

Anda akan melanjutkan kod permainan angkasa sedia ada anda untuk mencipta sistem pengesanan perlanggaran. Seperti sistem pengelakan perlanggaran automatik Stesen Angkasa Antarabangsa, permainan anda akan sentiasa memantau posisi objek dan bertindak balas terhadap persilangan.

Bermula dari kod pelajaran sebelumnya, anda akan menambah pengesanan perlanggaran dengan peraturan khusus yang mengawal interaksi objek.

> 💡 **Tip Pro**: Sprite laser sudah termasuk dalam folder aset anda dan dirujuk dalam kod anda, sedia untuk dilaksanakan.

### Peraturan Perlanggaran untuk Dilaksanakan

**Mekanisme permainan untuk ditambah:**
1. **Laser mengenai musuh**: Objek musuh dimusnahkan apabila terkena projektil laser
2. **Laser mengenai sempadan skrin**: Laser dikeluarkan apabila mencapai tepi atas skrin
3. **Perlanggaran musuh dan hero**: Kedua-dua objek dimusnahkan apabila mereka bersilang
4. **Musuh mencapai bawah**: Keadaan tamat permainan apabila musuh mencapai bahagian bawah skrin

## Menyediakan Persekitaran Pembangunan Anda

Berita baik - kami telah menyediakan kebanyakan asas untuk anda! Semua aset permainan dan struktur asas anda menunggu dalam subfolder `your-work`, sedia untuk anda menambah ciri perlanggaran yang menarik.

### Struktur Projek

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

**Memahami struktur fail:**
- **Mengandungi** semua imej sprite yang diperlukan untuk objek permainan
- **Termasuk** dokumen HTML utama dan fail aplikasi JavaScript
- **Menyediakan** konfigurasi pakej untuk pelayan pembangunan tempatan

### Memulakan Pelayan Pembangunan

Navigasi ke folder projek anda dan mulakan pelayan tempatan:

```bash
cd your-work
npm start
```

**Urutan arahan ini:**
- **Menukar** direktori ke folder projek kerja anda
- **Memulakan** pelayan HTTP tempatan pada `http://localhost:5000`
- **Menyajikan** fail permainan anda untuk ujian dan pembangunan
- **Membolehkan** pembangunan langsung dengan pemuatan semula automatik

Buka pelayar anda dan navigasi ke `http://localhost:5000` untuk melihat keadaan permainan semasa anda dengan hero dan musuh yang dirender di skrin.

### Pelaksanaan Langkah Demi Langkah

Seperti pendekatan sistematik yang digunakan NASA untuk memprogramkan kapal angkasa Voyager, kami akan melaksanakan pengesanan perlanggaran secara metodik, membina setiap komponen langkah demi langkah.

#### 1. Tambah Sempadan Perlanggaran Segi Empat Tepat

Pertama, mari ajar objek permainan kita bagaimana untuk menerangkan sempadan mereka. Tambahkan kaedah ini ke kelas `GameObject` anda:

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

**Kaedah ini mencapai:**
- **Mencipta** objek segi empat tepat dengan koordinat sempadan yang tepat
- **Mengira** tepi bawah dan kanan menggunakan posisi ditambah dimensi
- **Mengembalikan** objek sedia untuk algoritma pengesanan perlanggaran
- **Menyediakan** antara muka standard untuk semua objek permainan

#### 2. Laksanakan Pengesanan Persilangan

Sekarang mari kita cipta detektif perlanggaran kita - fungsi yang boleh memberitahu bila dua segi empat tepat bertindih:

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

**Algoritma ini berfungsi dengan:**
- **Menguji** empat syarat pemisahan antara segi empat tepat
- **Mengembalikan** `false` jika mana-mana syarat pemisahan adalah benar
- **Menunjukkan** perlanggaran apabila tiada pemisahan wujud
- **Menggunakan** logik penafian untuk ujian persilangan yang cekap

#### 3. Laksanakan Sistem Tembakan Laser

Di sinilah perkara menjadi menarik! Mari kita sediakan sistem tembakan laser.

##### Konstanta Mesej

Pertama, mari kita tentukan beberapa jenis mesej supaya bahagian-bahagian permainan kita boleh berkomunikasi antara satu sama lain:

```javascript
KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
```

**Konstanta ini menyediakan:**
- **Menstandardkan** nama acara di seluruh aplikasi
- **Membolehkan** komunikasi konsisten antara sistem permainan
- **Mengelakkan** kesilapan dalam pendaftaran pengendali acara

##### Pengendalian Input Papan Kekunci

Tambahkan pengesanan kekunci ruang ke pendengar acara kekunci anda:

```javascript
} else if(evt.keyCode === 32) {
  eventEmitter.emit(Messages.KEY_EVENT_SPACE);
}
```

**Pengendali input ini:**
- **Mengesan** tekan kekunci ruang menggunakan keyCode 32
- **Menghantar** mesej acara yang standard
- **Membolehkan** logik tembakan yang tidak bergantung

##### Persediaan Pendengar Acara

Daftarkan tingkah laku tembakan dalam fungsi `initGame()` anda:

```javascript
eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
 if (hero.canFire()) {
   hero.fire();
 }
});
```

**Pendengar acara ini:**
- **Bertindak balas** kepada acara kekunci ruang
- **Memeriksa** status cooldown tembakan
- **Mencetuskan** penciptaan laser apabila dibenarkan

Tambahkan pengendalian perlanggaran untuk interaksi laser-musuh:

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
  first.dead = true;
  second.dead = true;
});
```

**Pengendali perlanggaran ini:**
- **Menerima** data acara perlanggaran dengan kedua-dua objek
- **Menandakan** kedua-dua objek untuk penghapusan
- **Memastikan** pembersihan yang betul selepas perlanggaran

#### 4. Cipta Kelas Laser

Laksanakan projektil laser yang bergerak ke atas dan menguruskan kitaran hayatnya sendiri:

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

**Pelaksanaan kelas ini:**
- **Melanjutkan** GameObject untuk mewarisi fungsi asas
- **Menetapkan** dimensi yang sesuai untuk sprite laser
- **Mencipta** pergerakan automatik ke atas menggunakan `setInterval()`
- **Mengendalikan** pemusnahan diri apabila mencapai bahagian atas skrin
- **Menguruskan** masa animasi dan pembersihan sendiri

#### 5. Laksanakan Sistem Pengesanan Perlanggaran

Cipta fungsi pengesanan perlanggaran yang komprehensif:

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

**Sistem perlanggaran ini:**
- **Menapis** objek permainan mengikut jenis untuk ujian yang cekap
- **Menguji** setiap laser terhadap setiap musuh untuk persilangan
- **Menghantar** acara perlanggaran apabila persilangan dikesan
- **Membersihkan** objek yang dimusnahkan selepas pemprosesan perlanggaran

> ⚠️ **Penting**: Tambahkan `updateGameObjects()` ke gelung permainan utama anda dalam `window.onload` untuk mengaktifkan pengesanan perlanggaran.

#### 6. Tambahkan Sistem Cooldown ke Kelas Hero

Tingkatkan kelas Hero dengan mekanik tembakan dan had kadar tembakan:

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
- **Memulakan** pemasa cooldown pada sifar (sedia untuk menembak)
- **Mencipta** objek laser yang diposisikan di atas kapal hero
- **Menetapkan** tempoh cooldown untuk menghalang tembakan pantas
- **Mengurangkan** pemasa cooldown menggunakan kemas kini berasaskan selang
- **Menyediakan** pemeriksaan status tembakan melalui kaedah `canFire()`

### Menguji Pelaksanaan Anda

Permainan angkasa anda kini mempunyai pengesanan perlanggaran lengkap dan mekanik pertempuran. 🚀 Uji keupayaan baru ini:
- **Navigasi** dengan kekunci anak panah untuk mengesahkan kawalan pergerakan
- **Tembak laser** dengan bar ruang - perhatikan bagaimana cooldown menghalang spam klik
- **Perhatikan perlanggaran** apabila laser mengenai musuh, mencetuskan penghapusan
- **Sahkan pembersihan** apabila objek yang dimusnahkan hilang dari permainan

Anda telah berjaya melaksanakan sistem pengesanan perlanggaran menggunakan prinsip matematik yang sama yang membimbing navigasi kapal angkasa dan robotik.

## Cabaran Ejen GitHub Copilot 🚀

Gunakan mod Ejen untuk menyelesaikan cabaran berikut:

**Penerangan:** Tingkatkan sistem pengesanan perlanggaran dengan melaksanakan power-up yang muncul secara rawak dan memberikan keupayaan sementara apabila dikumpulkan oleh kapal hero.

**Arahan:** Cipta kelas PowerUp yang melanjutkan GameObject dan laksanakan pengesanan perlanggaran antara hero dan power-up. Tambahkan sekurang-kurangnya dua jenis power-up: satu yang meningkatkan kadar tembakan (mengurangkan cooldown) dan satu lagi yang mencipta perisai sementara. Sertakan logik spawn yang mencipta power-up pada selang dan posisi rawak.

---



## 🚀 Cabaran

Tambahkan letupan! Lihat aset permainan dalam [repo Seni Angkasa](../../../../6-space-game/solution/spaceArt/readme.txt) dan cuba tambahkan letupan apabila laser mengenai alien.

## Kuiz Pasca-Kuliah

[Kuiz pasca-kuliah](https://ff-quizzes.netlify.app/web/quiz/36)

## Ulasan & Kajian Sendiri

Eksperimen dengan selang dalam permainan anda setakat ini. Apa yang berlaku apabila anda mengubahnya? Baca lebih lanjut tentang [acara masa JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Tugasan

[Terokai perlanggaran](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.