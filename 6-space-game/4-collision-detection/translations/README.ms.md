# Bina Permainan Angkasa Bahagian 4: Menambah Laser dan Mengesan Perlanggaran

## Kuiz Pra Kuliah

[Kuiz Pra Kuliah](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/35)

Dalam pelajaran ini, anda akan belajar bagaimana menembak laser dengan JavaScript! Kami akan menambah dua perkara pada permainan kami:

- **Laser**: laser ini ditembak dari kapal wira anda dan menegak ke atas
- **Pengesanan perlanggaran**, sebagai bagian dari menerapkan kemampuan untuk *menembak* kami juga akan menambahkan beberapa peraturan permainan yang bagus:
   - **Laser menyerang musuh**: Musuh mati jika terkena laser
   - **Laser mencecah skrin atas**: Laser hancur jika memukul bahagian atas skrin
   - **Pertempuran musuh dan pahlawan**: Musuh dan pahlawan musnah jika saling memukul
   - **Musuh memukul bahagian bawah layar**: Musuh dan pahlawan hancur jika musuh memukul bahagian bawah layar

Pendek kata, anda - *pahlawan* - perlu memukul semua musuh dengan laser sebelum mereka berjaya bergerak ke bahagian bawah skrin.

✅ Lakukan sedikit kajian mengenai permainan komputer pertama yang pernah ditulis. Apa fungsinya?

Mari sama-sama menjadi wira!

## Pengesanan perlanggaran

Bagaimanakah kita melakukan pengesanan perlanggaran? Kita perlu memikirkan objek permainan kita sebagai segi empat tepat bergerak. Mengapa anda bertanya? Nah, gambar yang digunakan untuk menggambar objek permainan adalah persegi panjang: ia memiliki `x`, `y`, `width` dan` height`.

Sekiranya dua segi empat tepat, iaitu pahlawan dan musuh *berpotongan*, anda akan bertembung. Apa yang harus berlaku adalah mengikut peraturan permainan. Oleh itu, untuk melaksanakan pengesanan perlanggaran anda memerlukan perkara berikut:

1. Cara untuk mendapatkan representasi segi empat tepat dari objek permainan, seperti ini:

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

2. Fungsi perbandingan, fungsi ini boleh kelihatan seperti ini:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Bagaimanakah kita memusnahkan perkara

Untuk menghancurkan sesuatu dalam permainan, anda perlu memberitahu permainan bahawa permainan ini tidak lagi harus melukis item ini dalam gelung permainan yang mencetuskan pada selang waktu tertentu. Cara untuk melakukannya adalah dengan menandakan objek permainan sebagai *mati* apabila sesuatu berlaku, seperti:

```javascript
// collision happened
enemy.dead = true
```

Kemudian anda meneruskan untuk menyusun *mati* objek sebelum mengecat semula skrin, seperti:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Bagaimanakah kita menghidupkan laser

Menyalakan laser diterjemahkan untuk bertindak balas terhadap peristiwa penting dan membuat objek yang bergerak ke arah tertentu. Oleh itu, kita perlu melakukan langkah-langkah berikut:

1. **Buat objek laser**: dari bahagian atas kapal pahlawan kita, bahawa setelah penciptaan mula bergerak ke atas menuju bahagian atas layar.
2. **Lampirkan kod ke acara utama**: kita perlu memilih kunci pada papan kekunci yang mewakili pemain yang menembak laser.
3. **Buat objek permainan yang kelihatan seperti laser** apabila kekunci ditekan.

## Cooldown menggunakan laser kami

Laser perlu menyala setiap kali anda menekan kekunci, seperti *ruang* misalnya. Untuk mengelakkan permainan menghasilkan terlalu banyak laser dalam masa yang singkat, kita perlu memperbaikinya. Penyelesaiannya adalah dengan menerapkan *cooldown*, pemasa, yang memastikan bahawa laser hanya dapat dipecat begitu kerap. Anda boleh melaksanakannya dengan cara berikut:

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
      // menghasilkan laser
      this.cooldown = new Cooldown(500);
    } else {
      // buat apa-apa - ia belum cooldown.
    }
  }
}
```

✅ Rujuk pelajaran 1 dalam siri permainan ruang untuk mengingatkan diri anda mengenai *cooldowns*.

## Apakah yang hendak dibina

Anda akan mengambil kod yang ada (yang seharusnya anda bersihkan dan refactored) dari pelajaran sebelumnya, dan memperpanjangnya. Mulakan dengan kod dari bahagian II atau gunakan kod di [Bahagian III-starter](/your-work)

> tip: laser yang akan anda gunakan sudah ada di folder aset anda dan dirujuk oleh kod anda

- **Tambahkan pengesanan perlanggaran**, apabila laser bertabrakan dengan sesuatu peraturan berikut harus berlaku:
   1. **Laser memukul musuh**: musuh mati jika terkena laser
   2. **Laser mencecah skrin atas**: Laser hancur jika menyentuh bahagian atas skrin kita
   3. **Pertembungan musuh dan pahlawan**: musuh dan pahlawan musnah jika saling memukul
   4. **Musuh memukul bahagian bawah skrin**: Musuh dan pahlawan hancur jika musuh memukul bahagian bawah skrin

## Langkah-langkah yang disyorkan

Cari fail yang telah dibuat untuk anda dalam sub folder `your-work`. Ia harus mengandungi yang berikut:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Anda memulakan projek anda folder `your_work` dengan mengetik:

```bash
cd your-work
npm start
```

Perkara di atas akan memulakan Pelayan HTTP pada alamat `http: // localhost: 5000`. Buka penyemak imbas dan masukkan alamatnya, sekarang ia harus menjadikan pahlawan dan semua musuh, tidak ada yang bergerak - namun :).

### Tambah kod

1. **Siapkan representasi segi empat tepat dari objek permainan anda, untuk menangani perlanggaran** Kod di bawah ini membolehkan anda mendapatkan representasi segi empat tepat dari `GameObject`. Edit kelas GameObject anda untuk memperluasnya:

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

2. **Tambahkan kod yang memeriksa perlanggaran** Ini akan menjadi fungsi baru yang menguji sama ada dua segi empat tepat bersilang:

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

3. **Tambahkan keupayaan menembak laser**
   1. **Tambah mesej peristiwa penting**. Kekunci *ruang* harus membuat laser tepat di atas kapal wira. Tambahkan tiga pemalar dalam objek Mesej:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

       1. **Kendalikan kekunci ruang**. Edit fungsi kekunci `window.addEventListener` untuk menangani ruang:

        ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
        ```

        1. **Tambah pendengar**. Edit fungsi `initGame ()` untuk memastikan bahawa pahlawan dapat melepaskan tembakan ketika spasi terkena:

            ```javascript
            eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
            if (hero.canFire()) {
            hero.fire();
            }
            ```

       and add a new `eventEmitter.on()` function to ensure behavior when an enemy collides with a laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

        1. **Pindahkan objek**, Pastikan laser bergerak ke bahagian atas skrin secara beransur-ansur. Anda akan membuat kelas Laser baru yang meluaskan `GameObject`, seperti yang telah anda lakukan sebelumnya:

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

        1. ** Tangani perlanggaran **, Terapkan peraturan perlanggaran untuk laser. Tambahkan fungsi `updateGameObjects ()` yang menguji objek bertembung untuk hits

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

         Pastikan untuk menambah `updateGameObjects ()` ke gelung permainan anda di `window.onload`.

   4. ** Terapkan cooldown ** pada laser, sehingga hanya dapat dipecat begitu kerap.

   Akhir sekali, edit kelas Wira sehingga dapat dikembalikan:

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

Pada ketika ini, permainan anda mempunyai beberapa fungsi! Anda boleh menavigasi dengan kekunci anak panah anda, menembak laser dengan bar ruang anda, dan musuh hilang ketika anda memukulnya. Bagus!

---

## 🚀 Cabaran

Tambah letupan! Lihat aset permainan di [Space Art repo](../../solution/spaceArt/readme.txt) dan cuba tambahkan letupan ketika laser memukul makhluk asing

## Kuiz Pasca Kuliah

[Kuiz Pasca Kuliah](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/36)

## Mengkaji & Belajar Sendiri

Percubaan dengan selang permainan anda setakat ini. Apa yang berlaku apabila anda menukarnya? Baca lebih lanjut mengenai [acara pemasaan JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Tugasan

[Menerokai Perlanggaran](assignment.ms.md)
