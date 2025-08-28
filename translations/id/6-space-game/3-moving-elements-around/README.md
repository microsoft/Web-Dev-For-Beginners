<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "23f088add24f0f1fa51014a9e27ea280",
  "translation_date": "2025-08-27T22:32:40+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "id"
}
-->
# Membangun Game Luar Angkasa Bagian 3: Menambahkan Gerakan

## Kuis Pra-Kuliah

[Kuis pra-kuliah](https://ff-quizzes.netlify.app/web/quiz/33)

Game tidak akan seru sampai ada alien yang bergerak di layar! Dalam game ini, kita akan menggunakan dua jenis gerakan:

- **Gerakan Keyboard/Mouse**: ketika pengguna berinteraksi dengan keyboard atau mouse untuk menggerakkan objek di layar.
- **Gerakan yang diinduksi oleh game**: ketika game menggerakkan objek dengan interval waktu tertentu.

Jadi, bagaimana cara kita menggerakkan sesuatu di layar? Semuanya berkaitan dengan koordinat kartesian: kita mengubah lokasi (x,y) objek dan kemudian menggambar ulang layar.

Biasanya, Anda memerlukan langkah-langkah berikut untuk mencapai *gerakan* di layar:

1. **Tetapkan lokasi baru** untuk sebuah objek; ini diperlukan agar objek terlihat seperti bergerak.
2. **Bersihkan layar**, layar perlu dibersihkan di antara proses menggambar. Kita bisa membersihkannya dengan menggambar sebuah persegi panjang yang diisi dengan warna latar belakang.
3. **Gambar ulang objek** di lokasi baru. Dengan melakukan ini, kita akhirnya berhasil memindahkan objek dari satu lokasi ke lokasi lainnya.

Berikut adalah contoh kode yang menggambarkan proses tersebut:

```javascript
//set the hero's location
hero.x += 5;
// clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ Bisakah Anda memikirkan alasan mengapa menggambar ulang karakter Anda beberapa frame per detik dapat menyebabkan biaya kinerja? Baca tentang [alternatif untuk pola ini](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Menangani Event Keyboard

Anda menangani event dengan menambahkan event tertentu ke dalam kode. Event keyboard dipicu di seluruh jendela, sedangkan event mouse seperti `click` dapat dikaitkan dengan klik pada elemen tertentu. Kita akan menggunakan event keyboard sepanjang proyek ini.

Untuk menangani sebuah event, Anda perlu menggunakan metode `addEventListener()` pada jendela dan memberikannya dua parameter input. Parameter pertama adalah nama event, misalnya `keyup`. Parameter kedua adalah fungsi yang harus dipanggil sebagai hasil dari event tersebut terjadi.

Berikut adalah contohnya:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Untuk event keyboard, ada dua properti pada event yang dapat Anda gunakan untuk melihat tombol mana yang ditekan:

- `key`, ini adalah representasi string dari tombol yang ditekan, misalnya `ArrowUp`.
- `keyCode`, ini adalah representasi angka, misalnya `37`, yang sesuai dengan `ArrowLeft`.

✅ Manipulasi event keyboard berguna di luar pengembangan game. Apa kegunaan lain yang dapat Anda pikirkan untuk teknik ini?

### Tombol Khusus: Catatan Penting

Ada beberapa tombol *khusus* yang memengaruhi jendela. Artinya, jika Anda mendengarkan event `keyup` dan menggunakan tombol-tombol khusus ini untuk menggerakkan karakter Anda, itu juga akan melakukan pengguliran horizontal. Oleh karena itu, Anda mungkin ingin *mematikan* perilaku bawaan browser ini saat Anda membangun game Anda. Anda memerlukan kode seperti ini:

```javascript
let onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // Arrow keys
    case 32:
      e.preventDefault();
      break; // Space
    default:
      break; // do not block other keys
  }
};

window.addEventListener('keydown', onKeyDown);
```

Kode di atas akan memastikan bahwa tombol panah dan tombol spasi memiliki perilaku *default* yang dimatikan. Mekanisme *mematikan* terjadi ketika kita memanggil `e.preventDefault()`.

## Gerakan yang Diinduksi oleh Game

Kita dapat membuat objek bergerak sendiri dengan menggunakan timer seperti fungsi `setTimeout()` atau `setInterval()` yang memperbarui lokasi objek pada setiap tick, atau interval waktu. Berikut adalah contohnya:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Loop Game

Loop game adalah konsep yang pada dasarnya merupakan fungsi yang dipanggil secara berkala. Disebut loop game karena semua yang seharusnya terlihat oleh pengguna digambar dalam loop tersebut. Loop game menggunakan semua objek game yang menjadi bagian dari game, menggambar semuanya kecuali untuk beberapa alasan tidak lagi menjadi bagian dari game. Misalnya, jika sebuah objek adalah musuh yang terkena laser dan meledak, itu tidak lagi menjadi bagian dari loop game saat ini (Anda akan mempelajari lebih lanjut tentang ini di pelajaran berikutnya).

Berikut adalah contoh loop game yang biasanya diekspresikan dalam kode:

```javascript
let gameLoopId = setInterval(() =>
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
}, 200);
```

Loop di atas dipanggil setiap `200` milidetik untuk menggambar ulang kanvas. Anda memiliki kemampuan untuk memilih interval terbaik yang sesuai untuk game Anda.

## Melanjutkan Game Luar Angkasa

Anda akan mengambil kode yang ada dan memperluasnya. Mulailah dengan kode yang telah Anda selesaikan selama bagian I atau gunakan kode di [Bagian II - starter](../../../../6-space-game/3-moving-elements-around/your-work).

- **Menggerakkan karakter utama**: Anda akan menambahkan kode untuk memastikan Anda dapat menggerakkan karakter utama menggunakan tombol panah.
- **Menggerakkan musuh**: Anda juga perlu menambahkan kode untuk memastikan musuh bergerak dari atas ke bawah pada kecepatan tertentu.

## Langkah yang Direkomendasikan

Temukan file yang telah dibuat untuk Anda di sub folder `your-work`. Folder tersebut harus berisi:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Mulailah proyek Anda di folder `your_work` dengan mengetik:

```bash
cd your-work
npm start
```

Kode di atas akan memulai HTTP Server pada alamat `http://localhost:5000`. Buka browser dan masukkan alamat tersebut, saat ini seharusnya menampilkan karakter utama dan semua musuh; tidak ada yang bergerak - belum!

### Tambahkan Kode

1. **Tambahkan objek khusus** untuk `hero`, `enemy`, dan `game object`, mereka harus memiliki properti `x` dan `y`. (Ingat bagian tentang [Inheritance atau komposisi](../README.md)).

   *PETUNJUK* `game object` harus menjadi objek yang memiliki properti `x` dan `y` serta kemampuan untuk menggambar dirinya sendiri ke kanvas.

   >tip: mulailah dengan menambahkan kelas GameObject baru dengan konstruktor seperti di bawah ini, lalu gambarlah ke kanvas:
  
    ```javascript
        
    class GameObject {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dead = false;
        this.type = "";
        this.width = 0;
        this.height = 0;
        this.img = undefined;
      }
    
      draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }
    ```

    Sekarang, perluas GameObject ini untuk membuat Hero dan Enemy.
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        ...it needs an x, y, type, and speed
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        (this.width = 98), (this.height = 50);
        this.type = "Enemy";
        let id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y)
            clearInterval(id);
          }
        }, 300)
      }
    }
    ```

2. **Tambahkan handler event keyboard** untuk menangani navigasi tombol (menggerakkan karakter utama ke atas/bawah kiri/kanan).

   *INGAT* ini adalah sistem kartesian, kiri atas adalah `0,0`. Juga ingat untuk menambahkan kode untuk menghentikan *perilaku default*.

   >tip: buat fungsi onKeyDown Anda dan tambahkan ke jendela:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Periksa konsol browser Anda pada titik ini, dan lihat tombol yang ditekan sedang dicatat.

3. **Implementasikan** [Pola Pub Sub](../README.md), ini akan menjaga kode Anda tetap bersih saat Anda mengikuti bagian-bagian berikutnya.

   Untuk melakukan bagian terakhir ini, Anda dapat:

   1. **Tambahkan event listener** pada jendela:

       ```javascript
        window.addEventListener("keyup", (evt) => {
          if (evt.key === "ArrowUp") {
            eventEmitter.emit(Messages.KEY_EVENT_UP);
          } else if (evt.key === "ArrowDown") {
            eventEmitter.emit(Messages.KEY_EVENT_DOWN);
          } else if (evt.key === "ArrowLeft") {
            eventEmitter.emit(Messages.KEY_EVENT_LEFT);
          } else if (evt.key === "ArrowRight") {
            eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
          }
        });
        ```

    1. **Buat kelas EventEmitter** untuk mempublikasikan dan berlangganan pesan:

        ```javascript
        class EventEmitter {
          constructor() {
            this.listeners = {};
          }
        
          on(message, listener) {
            if (!this.listeners[message]) {
              this.listeners[message] = [];
            }
            this.listeners[message].push(listener);
          }
        
          emit(message, payload = null) {
            if (this.listeners[message]) {
              this.listeners[message].forEach((l) => l(message, payload));
            }
          }
        }
        ```

    1. **Tambahkan konstanta** dan siapkan EventEmitter:

        ```javascript
        const Messages = {
          KEY_EVENT_UP: "KEY_EVENT_UP",
          KEY_EVENT_DOWN: "KEY_EVENT_DOWN",
          KEY_EVENT_LEFT: "KEY_EVENT_LEFT",
          KEY_EVENT_RIGHT: "KEY_EVENT_RIGHT",
        };
        
        let heroImg, 
            enemyImg, 
            laserImg,
            canvas, ctx, 
            gameObjects = [], 
            hero, 
            eventEmitter = new EventEmitter();
        ```

    1. **Inisialisasi game**

    ```javascript
    function initGame() {
      gameObjects = [];
      createEnemies();
      createHero();
    
      eventEmitter.on(Messages.KEY_EVENT_UP, () => {
        hero.y -=5 ;
      })
    
      eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
        hero.y += 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
        hero.x -= 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
        hero.x += 5;
      });
    }
    ```

1. **Siapkan loop game**

   Refactor fungsi window.onload untuk menginisialisasi game dan menyiapkan loop game pada interval yang baik. Anda juga akan menambahkan sinar laser:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      let gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100)
      
    };
    ```

5. **Tambahkan kode** untuk menggerakkan musuh pada interval tertentu.

    Refactor fungsi `createEnemies()` untuk membuat musuh dan mendorong mereka ke dalam kelas gameObjects baru:

    ```javascript
    function createEnemies() {
      const MONSTER_TOTAL = 5;
      const MONSTER_WIDTH = MONSTER_TOTAL * 98;
      const START_X = (canvas.width - MONSTER_WIDTH) / 2;
      const STOP_X = START_X + MONSTER_WIDTH;
    
      for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          const enemy = new Enemy(x, y);
          enemy.img = enemyImg;
          gameObjects.push(enemy);
        }
      }
    }
    ```
    
    dan tambahkan fungsi `createHero()` untuk melakukan proses serupa untuk karakter utama.
    
    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```

    dan terakhir, tambahkan fungsi `drawGameObjects()` untuk mulai menggambar:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Musuh Anda seharusnya mulai maju menuju pesawat luar angkasa karakter utama Anda!

---

## 🚀 Tantangan

Seperti yang Anda lihat, kode Anda dapat berubah menjadi 'kode spaghetti' ketika Anda mulai menambahkan fungsi, variabel, dan kelas. Bagaimana Anda dapat mengatur kode Anda dengan lebih baik sehingga lebih mudah dibaca? Buatlah sketsa sistem untuk mengatur kode Anda, bahkan jika masih berada dalam satu file.

## Kuis Pasca-Kuliah

[Kuis pasca-kuliah](https://ff-quizzes.netlify.app/web/quiz/34)

## Tinjauan & Studi Mandiri

Meskipun kita menulis game kita tanpa menggunakan framework, ada banyak framework berbasis JavaScript untuk pengembangan game dengan canvas. Luangkan waktu untuk [membaca tentang ini](https://github.com/collections/javascript-game-engines).

## Tugas

[Komentari kode Anda](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.