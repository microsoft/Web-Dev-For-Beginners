# Bina Permainan Angkasa Bahagian 3: Menambah Gerakan

## Kuiz Pra Kuliah

[Kuiz Pra Kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/33)

Permainan tidak begitu menyeronokkan sehingga anda mempunyai makhluk asing di layar! Dalam permainan ini, kami akan menggunakan dua jenis pergerakan:

- **Pergerakan papan kekunci / Tetikus**: ketika pengguna berinteraksi dengan papan kekunci atau tetikus untuk menggerakkan objek di layar.
- **Pergerakan yang disebabkan oleh permainan**: ketika permainan menggerakkan objek dengan selang waktu tertentu.

Jadi bagaimana kita memindahkan sesuatu di skrin? Ini semua mengenai koordinat kartesian: kami menukar lokasi (x, y) objek dan kemudian melukis semula skrin.

Biasanya anda memerlukan langkah-langkah berikut untuk menyelesaikan *pergerakan* di skrin:

1. **Tetapkan lokasi baru** untuk objek; ini diperlukan untuk melihat objek sebagai bergerak.
2. **Kosongkan skrin**, skrin perlu dibersihkan di antara undian. Kita dapat membersihkannya dengan melukis sebuah segi empat tepat yang kita isi dengan warna latar belakang.
3. **Lukis semula objek** di lokasi baru. Dengan melakukan ini kita akhirnya dapat memindahkan objek dari satu lokasi ke lokasi lain.

 Inilah rupa bentuknya dalam kod:

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

✅ Bolehkah anda memikirkan sebab mengapa menggambar semula pahlawan anda dengan banyak bingkai sesaat mungkin menambah kos prestasi? Baca mengenai [alternatif untuk corak ini](https://www.html5rocks.com/en/tutorials/canvas/performance/).

## Mengendalikan acara papan kekunci

Anda mengendalikan acara dengan melampirkan acara tertentu ke kod. Peristiwa papan kekunci dipicu di seluruh tetingkap sedangkan peristiwa tetikus seperti `click` dapat dihubungkan dengan mengklik elemen tertentu. Kami akan menggunakan acara papan kekunci sepanjang projek ini.

Untuk menangani suatu peristiwa, anda perlu menggunakan kaedah ``addEventListener()` tetingkap dan memberikannya dua parameter input. Parameter pertama adalah nama acara, misalnya `keyup`. Parameter kedua adalah fungsi yang harus dipanggil sebagai akibat dari peristiwa yang berlaku.

Inilah contohnya:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Untuk acara utama terdapat dua sifat pada acara yang boleh anda gunakan untuk melihat kunci apa yang ditekan:

- `key`, ini adalah representasi rentetan dari kekunci yang ditekan, misalnya `ArrowUp`
- `keyCode`, ini adalah representasi angka, misalnya `37`, sesuai dengan `ArrowLeft`.

✅ Manipulasi acara utama berguna di luar pengembangan permainan. Apa kegunaan lain yang dapat anda fikirkan untuk teknik ini?

### Kekunci khas: peringatan

Terdapat beberapa *kunci* khas yang mempengaruhi tetingkap. Ini bermaksud bahawa jika anda sedang mendengar acara `keyup` dan anda menggunakan kekunci khas ini untuk menggerakkan wira anda, ia juga akan melakukan tatal mendatar. Untuk itu anda mungkin mahu *mematikan* tingkah laku penyemak imbas terbina dalam ini semasa anda membina permainan anda. Anda memerlukan kod seperti ini:

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

Kod di atas akan memastikan bahawa anak panah dan kekunci spasi mempunyai tingkah laku *lalai* mereka. Mekanisme *shut-off* berlaku apabila kita memanggil `e.preventDefault()`.

## Pergerakan yang disebabkan oleh permainan

Kita dapat membuat sesuatu bergerak dengan menggunakan pemasa seperti fungsi `setTimeout()` atau `setInterval()` yang mengemas kini lokasi objek pada setiap centang, atau selang waktu. Begini rupa:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Gelung permainan

Gelung permainan adalah konsep yang pada dasarnya adalah fungsi yang dipanggil pada selang waktu yang tetap. Ia dipanggil gelung permainan kerana segala sesuatu yang dapat dilihat oleh pengguna ditarik ke dalam gelung. Gelung permainan menggunakan semua objek permainan yang menjadi bagian dari permainan, menggambar semuanya kecuali untuk beberapa alasan tidak seharusnya menjadi bagian dari permainan lagi. Contohnya jika objek adalah musuh yang terkena laser dan meletup, ia bukan lagi bahagian dari gelung permainan semasa (anda akan mengetahui lebih lanjut mengenai perkara ini dalam pelajaran berikutnya).

Inilah rupa gelung permainan, yang dinyatakan dalam kod:

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

Gelung di atas dipanggil setiap `200` milisaat untuk menggambar semula kanvas. Anda mempunyai kemampuan untuk memilih selang terbaik yang sesuai untuk permainan anda.

## Meneruskan Permainan Angkasa

Anda akan mengambil kod yang ada dan memanjangkannya. Mulakan dengan kod yang anda lengkapkan semasa bahagian I atau gunakan kod di [Bahagian II- starter] (karya anda).

- **Memindahkan pahlawan**: anda akan menambah kod untuk memastikan anda dapat memindahkan pahlawan menggunakan kekunci anak panah.
- **Pindahkan musuh**: anda juga perlu menambahkan kod untuk memastikan musuh bergerak dari atas ke bawah pada kadar tertentu.

## Langkah yang disyorkan

Cari fail yang telah dibuat untuk anda dalam sub folder `your-work`. Ia harus mengandungi yang berikut:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Anda memulakan projek anda folder `your_work` dengan mengetik:

```bash
cd your-work
npm start
```

Perkara di atas akan memulakan Pelayan HTTP pada alamat `http: // localhost: 5000`. Buka penyemak imbas dan masukkan alamat itu, sekarang ia harus menjadikan pahlawan dan semua musuh; tidak ada yang bergerak - namun!

### Tambah kod

1. **Tambahkan objek khusus** untuk `hero` dan `musuh` dan `objek permainan`, mereka harus mempunyai sifat `x` dan `y`. ( Ingat bahagian pada [Warisan atau komposisi](../../translations/README.ms.md) ).

   *HINT* `objek permainan` harus menjadi objek dengan `x` dan `y` dan kemampuan untuk menarik dirinya ke kanvas.

   > tip: mulakan dengan menambahkan kelas GameObject baru dengan konstruktornya digambarkan seperti di bawah, dan kemudian lukiskannya ke kanvas:

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

    Sekarang, panjangkan GameObject ini untuk membuat Wira dan Musuh.

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

2. **Tambahkan pengendali acara utama** untuk mengendalikan navigasi utama (pusing pahlawan ke atas / bawah kiri / kanan)

   *INGAT* ini adalah sistem kartesian, kiri atas adalah `0,0`. Juga ingat untuk menambah kod untuk menghentikan *tingkah laku lalai*

   > tip: buat fungsi onKeyDown anda dan pasangkannya ke tetingkap:

      ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```

   Periksa konsol penyemak imbas anda pada ketika ini, dan perhatikan penekanan kekunci dicatat.

3. **Terapkan** the [Pub sub pattern](../../translations/README.ms.md), ini akan memastikan kod anda tetap bersih semasa anda mengikuti bahagian yang tinggal.

   Untuk melakukan bahagian terakhir ini, anda boleh:

   1. **Tambahkan pendengar acara** di tetingkap:

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

        1. **Buat kelas EventEmitter** untuk menerbitkan dan melanggan mesej:

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

        1. **Tambah pemalar** dan sediakan EventEmitter:

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

        1. **Memulakan permainan**

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

1. **Siapkan gelung permainan**

   Memfaktorkan semula fungsi window.onload untuk memulakan permainan dan mengatur gelung permainan pada selang waktu yang baik. Anda juga akan menambah sinar laser:

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

5. **Tambahkan kod** untuk memindahkan musuh pada selang waktu tertentu

    Refactor fungsi `createEnemies()` untuk membuat musuh dan mendorong mereka ke kelas gameObjects yang baru:

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

    dan tambahkan fungsi `createHero()` untuk melakukan proses yang serupa untuk wira.

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

    dan akhirnya, tambahkan fungsi `drawGameObjects()` untuk memulakan lukisan:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Musuh anda harus mula maju di kapal angkasa wira anda!

---

## 🚀 Cabaran

Seperti yang anda lihat, kod anda boleh berubah menjadi 'spaghetti code' apabila anda mula menambahkan fungsi dan pemboleh ubah dan kelas. Bagaimana anda dapat mengatur kod anda dengan lebih baik agar lebih mudah dibaca? Lakarkan sistem untuk mengatur kod anda, walaupun masih terdapat dalam satu fail.

## Kuiz Pasca Kuliah

[Kuiz Pasca Kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/34)

## Mengkaji & Belajar Sendiri

Semasa kami menulis permainan kami tanpa menggunakan kerangka kerja, ada banyak kerangka kanvas berdasarkan JavaScript untuk pengembangan permainan. Luangkan sedikit masa untuk melakukan [membaca mengenai perkara ini](https://github.com/collections/javascript-game-engines).

## Tugasan

[Komen kod anda](assignment.ms.md)