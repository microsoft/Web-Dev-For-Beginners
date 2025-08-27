<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2e83e38c35dc003f046d7cc0bbfd4920",
  "translation_date": "2025-08-27T22:37:38+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "ms"
}
-->
# Bina Permainan Angkasa Bahagian 4: Menambah Laser dan Mengesan Perlanggaran

## Kuiz Pra-Kuliah

[Kuiz pra-kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/35)

Dalam pelajaran ini, anda akan belajar cara menembak laser menggunakan JavaScript! Kita akan menambah dua perkara dalam permainan kita:

- **Laser**: laser ini ditembak dari kapal wira anda dan bergerak secara menegak ke atas
- **Pengesanan perlanggaran**, sebagai sebahagian daripada pelaksanaan keupayaan untuk *menembak*, kita juga akan menambah beberapa peraturan permainan yang menarik:
   - **Laser mengenai musuh**: Musuh akan mati jika terkena laser
   - **Laser mengenai bahagian atas skrin**: Laser akan dimusnahkan jika terkena bahagian atas skrin
   - **Perlanggaran musuh dan wira**: Musuh dan wira akan dimusnahkan jika mereka bertembung
   - **Musuh mengenai bahagian bawah skrin**: Musuh dan wira akan dimusnahkan jika musuh mengenai bahagian bawah skrin

Secara ringkas, anda -- *si wira* -- perlu memusnahkan semua musuh dengan laser sebelum mereka berjaya bergerak ke bahagian bawah skrin.

✅ Lakukan sedikit penyelidikan tentang permainan komputer pertama yang pernah ditulis. Apakah fungsinya?

Mari jadi wira bersama!

## Pengesanan Perlanggaran

Bagaimana kita melakukan pengesanan perlanggaran? Kita perlu menganggap objek permainan kita sebagai segi empat tepat yang bergerak. Kenapa begitu, anda mungkin bertanya? Ini kerana imej yang digunakan untuk melukis objek permainan adalah segi empat tepat: ia mempunyai `x`, `y`, `width` dan `height`.

Jika dua segi empat tepat, iaitu wira dan musuh *bertembung*, anda mempunyai perlanggaran. Apa yang perlu berlaku selepas itu bergantung kepada peraturan permainan. Untuk melaksanakan pengesanan perlanggaran, anda memerlukan perkara berikut:

1. Cara untuk mendapatkan representasi segi empat tepat bagi objek permainan, seperti ini:

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

## Bagaimana untuk memusnahkan sesuatu

Untuk memusnahkan sesuatu dalam permainan, anda perlu memberitahu permainan bahawa ia tidak lagi perlu melukis item tersebut dalam gelung permainan yang dicetuskan pada selang tertentu. Salah satu cara untuk melakukannya adalah dengan menandakan objek permainan sebagai *mati* apabila sesuatu berlaku, seperti ini:

```javascript
// collision happened
enemy.dead = true
```

Kemudian anda boleh mengasingkan objek *mati* sebelum melukis semula skrin, seperti ini:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Bagaimana untuk menembak laser

Menembak laser bermaksud bertindak balas terhadap acara kekunci dan mencipta objek yang bergerak dalam arah tertentu. Oleh itu, kita perlu melaksanakan langkah-langkah berikut:

1. **Cipta objek laser**: dari bahagian atas kapal wira kita, yang akan mula bergerak ke atas menuju bahagian atas skrin sebaik sahaja dicipta.
2. **Lampirkan kod kepada acara kekunci**: kita perlu memilih kekunci pada papan kekunci yang mewakili pemain menembak laser.
3. **Cipta objek permainan yang kelihatan seperti laser** apabila kekunci ditekan.

## Tempoh Penyejukan Laser

Laser perlu ditembak setiap kali anda menekan kekunci, seperti *space* contohnya. Untuk mengelakkan permainan menghasilkan terlalu banyak laser dalam masa yang singkat, kita perlu memperbaikinya. Penyelesaiannya adalah dengan melaksanakan apa yang dipanggil *tempoh penyejukan*, iaitu pemasa, yang memastikan laser hanya boleh ditembak pada selang tertentu. Anda boleh melaksanakannya dengan cara berikut:

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

✅ Rujuk pelajaran 1 dalam siri permainan angkasa untuk mengingatkan diri anda tentang *tempoh penyejukan*.

## Apa yang perlu dibina

Anda akan mengambil kod sedia ada (yang sepatutnya telah anda bersihkan dan refaktor) daripada pelajaran sebelumnya, dan meluaskannya. Sama ada mulakan dengan kod dari bahagian II atau gunakan kod di [Bahagian III - permulaan](../../../../../../../../../your-work).

> tip: laser yang akan anda gunakan sudah ada dalam folder aset anda dan dirujuk oleh kod anda

- **Tambah pengesanan perlanggaran**, apabila laser bertembung dengan sesuatu, peraturan berikut harus digunakan:
   1. **Laser mengenai musuh**: musuh akan mati jika terkena laser
   2. **Laser mengenai bahagian atas skrin**: Laser akan dimusnahkan jika terkena bahagian atas skrin
   3. **Perlanggaran musuh dan wira**: musuh dan wira akan dimusnahkan jika mereka bertembung
   4. **Musuh mengenai bahagian bawah skrin**: musuh dan wira akan dimusnahkan jika musuh mengenai bahagian bawah skrin

## Langkah yang Disyorkan

Cari fail yang telah dicipta untuk anda dalam sub folder `your-work`. Ia sepatutnya mengandungi perkara berikut:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Mulakan projek anda dalam folder `your_work` dengan menaip:

```bash
cd your-work
npm start
```

Arahan di atas akan memulakan HTTP Server pada alamat `http://localhost:5000`. Buka pelayar dan masukkan alamat tersebut, buat masa ini ia sepatutnya memaparkan wira dan semua musuh, tetapi tiada apa yang bergerak - lagi :).

### Tambah kod

1. **Sediakan representasi segi empat tepat bagi objek permainan anda, untuk mengendalikan perlanggaran** Kod di bawah membolehkan anda mendapatkan representasi segi empat tepat bagi `GameObject`. Edit kelas GameObject anda untuk meluaskannya:

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

2. **Tambah kod yang memeriksa perlanggaran** Ini akan menjadi fungsi baru yang menguji sama ada dua segi empat tepat bertembung:

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

3. **Tambah keupayaan menembak laser**
   1. **Tambah mesej acara kekunci**. Kekunci *space* sepatutnya mencipta laser tepat di atas kapal wira. Tambah tiga pemalar dalam objek Messages:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Kendalikan kekunci space**. Edit fungsi `window.addEventListener` keyup untuk mengendalikan kekunci space:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Tambah pendengar**. Edit fungsi `initGame()` untuk memastikan wira boleh menembak apabila kekunci space ditekan:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       dan tambah fungsi `eventEmitter.on()` baru untuk memastikan tingkah laku apabila musuh bertembung dengan laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Gerakkan objek**, Pastikan laser bergerak ke bahagian atas skrin secara beransur-ansur. Anda akan mencipta kelas Laser baru yang meluaskan `GameObject`, seperti yang telah anda lakukan sebelum ini: 
   
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

   1. **Kendalikan perlanggaran**, Laksanakan peraturan perlanggaran untuk laser. Tambah fungsi `updateGameObjects()` yang menguji objek yang bertembung untuk terkena

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

      Pastikan untuk menambah `updateGameObjects()` ke dalam gelung permainan anda dalam `window.onload`.

   4. **Laksanakan tempoh penyejukan** pada laser, supaya ia hanya boleh ditembak pada selang tertentu.

      Akhir sekali, edit kelas Hero supaya ia boleh mempunyai tempoh penyejukan:

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

Pada tahap ini, permainan anda mempunyai beberapa fungsi! Anda boleh menavigasi dengan kekunci anak panah, menembak laser dengan kekunci space, dan musuh akan hilang apabila anda mengenainya. Syabas!

---

## 🚀 Cabaran

Tambah letupan! Lihat aset permainan dalam [repositori Seni Angkasa](../../../../6-space-game/solution/spaceArt/readme.txt) dan cuba tambah letupan apabila laser mengenai alien.

## Kuiz Pasca-Kuliah

[Kuiz pasca-kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/36)

## Ulasan & Kajian Kendiri

Eksperimen dengan selang masa dalam permainan anda setakat ini. Apa yang berlaku apabila anda mengubahnya? Baca lebih lanjut tentang [acara masa JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Tugasan

[Terokai perlanggaran](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.