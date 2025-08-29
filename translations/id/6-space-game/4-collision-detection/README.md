<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a6ce295ff03bb49df7a3e17e6e7100a0",
  "translation_date": "2025-08-29T09:10:57+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "id"
}
-->
# Membangun Game Luar Angkasa Bagian 4: Menambahkan Laser dan Deteksi Tabrakan

## Kuis Pra-Pelajaran

[Kuis pra-pelajaran](https://ff-quizzes.netlify.app/web/quiz/35)

Dalam pelajaran ini, kamu akan belajar cara menembakkan laser menggunakan JavaScript! Kita akan menambahkan dua hal ke dalam game kita:

- **Laser**: laser ini ditembakkan dari kapal pahlawanmu dan bergerak vertikal ke atas.
- **Deteksi tabrakan**, sebagai bagian dari implementasi kemampuan *menembak*, kita juga akan menambahkan beberapa aturan permainan yang menarik:
   - **Laser mengenai musuh**: Musuh akan mati jika terkena laser.
   - **Laser mengenai bagian atas layar**: Laser akan dihancurkan jika menyentuh bagian atas layar.
   - **Tabrakan musuh dan pahlawan**: Musuh dan pahlawan akan hancur jika saling bertabrakan.
   - **Musuh menyentuh bagian bawah layar**: Musuh dan pahlawan akan hancur jika musuh mencapai bagian bawah layar.

Singkatnya, kamu -- *sang pahlawan* -- harus menghancurkan semua musuh dengan laser sebelum mereka berhasil mencapai bagian bawah layar.

✅ Lakukan sedikit riset tentang game komputer pertama yang pernah dibuat. Apa fungsinya?

Mari menjadi pahlawan bersama!

## Deteksi Tabrakan

Bagaimana cara kita melakukan deteksi tabrakan? Kita perlu memikirkan objek game kita sebagai persegi panjang yang bergerak. Mengapa demikian? Karena gambar yang digunakan untuk menggambar objek game adalah persegi panjang: ia memiliki `x`, `y`, `width`, dan `height`.

Jika dua persegi panjang, misalnya pahlawan dan musuh *berpotongan*, maka terjadi tabrakan. Apa yang harus terjadi setelah itu tergantung pada aturan permainan. Untuk mengimplementasikan deteksi tabrakan, kamu memerlukan hal-hal berikut:

1. Cara untuk mendapatkan representasi persegi panjang dari sebuah objek game, seperti ini:

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

2. Fungsi perbandingan, fungsi ini dapat terlihat seperti ini:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Bagaimana Cara Menghancurkan Sesuatu

Untuk menghancurkan sesuatu dalam game, kamu perlu memberi tahu game bahwa item tersebut tidak boleh lagi digambar dalam loop game yang dipicu pada interval tertentu. Salah satu cara untuk melakukannya adalah dengan menandai objek game sebagai *mati* ketika sesuatu terjadi, seperti ini:

```javascript
// collision happened
enemy.dead = true
```

Kemudian kamu dapat melanjutkan untuk menyortir objek *mati* sebelum menggambar ulang layar, seperti ini:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Bagaimana Cara Menembakkan Laser

Menembakkan laser berarti merespons sebuah event tombol dan membuat objek yang bergerak ke arah tertentu. Oleh karena itu, kita perlu melakukan langkah-langkah berikut:

1. **Membuat objek laser**: dari bagian atas kapal pahlawan kita, yang setelah dibuat akan mulai bergerak ke atas menuju bagian atas layar.
2. **Menambahkan kode ke event tombol**: kita perlu memilih tombol pada keyboard yang mewakili pemain menembakkan laser.
3. **Membuat objek game yang terlihat seperti laser** ketika tombol ditekan.

## Cooldown pada Laser

Laser perlu ditembakkan setiap kali kamu menekan tombol, misalnya *spasi*. Untuk mencegah game menghasilkan terlalu banyak laser dalam waktu singkat, kita perlu memperbaikinya. Perbaikan ini dilakukan dengan mengimplementasikan yang disebut *cooldown*, sebuah timer, yang memastikan bahwa laser hanya dapat ditembakkan dalam interval tertentu. Kamu dapat mengimplementasikannya seperti ini:

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time)
  }
}

class Weapon {
  constructor {
  }
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // produce a laser
      this.cooldown = new Cooldown(500);
    } else {
      // do nothing - it hasn't cooled down yet.
    }
  }
}
```

✅ Lihat kembali pelajaran 1 dalam seri game luar angkasa untuk mengingat tentang *cooldowns*.

## Apa yang Akan Dibangun

Kamu akan mengambil kode yang sudah ada (yang seharusnya sudah kamu bersihkan dan refactor) dari pelajaran sebelumnya, dan memperluasnya. Mulailah dengan kode dari bagian II atau gunakan kode di [Bagian III - starter](../../../../../../../../../your-work).

> tip: laser yang akan kamu gunakan sudah ada di folder asetmu dan sudah direferensikan oleh kodenya

- **Tambahkan deteksi tabrakan**, ketika laser bertabrakan dengan sesuatu, aturan berikut harus diterapkan:
   1. **Laser mengenai musuh**: musuh mati jika terkena laser.
   2. **Laser mengenai bagian atas layar**: laser dihancurkan jika menyentuh bagian atas layar.
   3. **Tabrakan musuh dan pahlawan**: musuh dan pahlawan hancur jika saling bertabrakan.
   4. **Musuh menyentuh bagian bawah layar**: musuh dan pahlawan hancur jika musuh mencapai bagian bawah layar.

## Langkah-Langkah yang Direkomendasikan

Temukan file yang telah dibuat untukmu di sub-folder `your-work`. Folder ini seharusnya berisi:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Mulailah proyekmu di folder `your_work` dengan mengetik:

```bash
cd your-work
npm start
```

Perintah di atas akan memulai HTTP Server di alamat `http://localhost:5000`. Buka browser dan masukkan alamat tersebut, saat ini seharusnya hanya menampilkan pahlawan dan semua musuh, belum ada yang bergerak - belum :).

### Tambahkan Kode

1. **Siapkan representasi persegi panjang untuk objek game, untuk menangani tabrakan** Kode di bawah ini memungkinkanmu mendapatkan representasi persegi panjang dari `GameObject`. Edit kelas GameObject-mu untuk memperluasnya:

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

2. **Tambahkan kode untuk memeriksa tabrakan** Ini akan menjadi fungsi baru yang menguji apakah dua persegi panjang saling berpotongan:

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

3. **Tambahkan kemampuan menembakkan laser**
   1. **Tambahkan pesan event tombol**. Tombol *spasi* harus membuat laser tepat di atas kapal pahlawan. Tambahkan tiga konstanta di objek Messages:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Tangani tombol spasi**. Edit fungsi `window.addEventListener` keyup untuk menangani tombol spasi:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Tambahkan pendengar event**. Edit fungsi `initGame()` untuk memastikan pahlawan dapat menembak ketika tombol spasi ditekan:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       dan tambahkan fungsi `eventEmitter.on()` baru untuk memastikan perilaku ketika musuh bertabrakan dengan laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Gerakkan objek**, Pastikan laser bergerak ke atas layar secara bertahap. Kamu akan membuat kelas Laser baru yang memperluas `GameObject`, seperti yang telah kamu lakukan sebelumnya: 
   
      ```javascript
        class Laser extends GameObject {
        constructor(x, y) {
          super(x,y);
          (this.width = 9), (this.height = 33);
          this.type = 'Laser';
          this.img = laserImg;
          let id = setInterval(() => {
            if (this.y > 0) {
              this.y -= 15;
            } else {
              this.dead = true;
              clearInterval(id);
            }
          }, 100)
        }
      }
      ```

   1. **Tangani tabrakan**, Implementasikan aturan tabrakan untuk laser. Tambahkan fungsi `updateGameObjects()` yang menguji objek yang bertabrakan:

      ```javascript
      function updateGameObjects() {
        const enemies = gameObjects.filter(go => go.type === 'Enemy');
        const lasers = gameObjects.filter((go) => go.type === "Laser");
      // laser hit something
        lasers.forEach((l) => {
          enemies.forEach((m) => {
            if (intersectRect(l.rectFromGameObject(), m.rectFromGameObject())) {
            eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
              first: l,
              second: m,
            });
          }
         });
      });

        gameObjects = gameObjects.filter(go => !go.dead);
      }  
      ```

      Pastikan untuk menambahkan `updateGameObjects()` ke dalam loop game-mu di `window.onload`.

   4. **Implementasikan cooldown** pada laser, sehingga hanya dapat ditembakkan dalam interval tertentu.

      Terakhir, edit kelas Hero sehingga dapat melakukan cooldown:

       ```javascript
      class Hero extends GameObject {
        constructor(x, y) {
          super(x, y);
          (this.width = 99), (this.height = 75);
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

Pada titik ini, game-mu sudah memiliki beberapa fungsi! Kamu dapat bernavigasi dengan tombol panah, menembakkan laser dengan tombol spasi, dan musuh menghilang ketika kamu mengenainya. Kerja bagus!

---

## 🚀 Tantangan

Tambahkan ledakan! Lihat aset game di [repo Space Art](../../../../6-space-game/solution/spaceArt/readme.txt) dan coba tambahkan efek ledakan ketika laser mengenai alien.

## Kuis Pasca-Pelajaran

[Kuis pasca-pelajaran](https://ff-quizzes.netlify.app/web/quiz/36)

## Tinjauan & Studi Mandiri

Bereksperimenlah dengan interval dalam game-mu sejauh ini. Apa yang terjadi ketika kamu mengubahnya? Baca lebih lanjut tentang [event timing JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Tugas

[Eksplorasi tabrakan](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.