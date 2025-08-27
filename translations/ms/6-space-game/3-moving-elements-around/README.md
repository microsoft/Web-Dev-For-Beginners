<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "23f088add24f0f1fa51014a9e27ea280",
  "translation_date": "2025-08-27T22:33:03+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "ms"
}
-->
# Membina Permainan Angkasa Bahagian 3: Menambah Pergerakan

## Kuiz Pra-Kuliah

[Kuiz pra-kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/33)

Permainan tidak begitu menyeronokkan sehingga anda mempunyai makhluk asing bergerak di skrin! Dalam permainan ini, kita akan menggunakan dua jenis pergerakan:

- **Pergerakan Papan Kekunci/Tetikus**: apabila pengguna berinteraksi dengan papan kekunci atau tetikus untuk menggerakkan objek di skrin.
- **Pergerakan yang Dihasilkan Permainan**: apabila permainan menggerakkan objek dengan selang masa tertentu.

Jadi bagaimana kita menggerakkan sesuatu di skrin? Ia semua berkaitan dengan koordinat kartesian: kita mengubah lokasi (x,y) objek dan kemudian melukis semula skrin.

Biasanya anda memerlukan langkah-langkah berikut untuk mencapai *pergerakan* di skrin:

1. **Tetapkan lokasi baru** untuk objek; ini diperlukan untuk melihat objek seolah-olah telah bergerak.
2. **Kosongkan skrin**, skrin perlu dikosongkan di antara lukisan. Kita boleh mengosongkannya dengan melukis segi empat tepat yang kita isi dengan warna latar belakang.
3. **Lukis semula objek** di lokasi baru. Dengan melakukan ini, kita akhirnya berjaya menggerakkan objek dari satu lokasi ke lokasi lain.

Berikut adalah bagaimana ia boleh kelihatan dalam kod:

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

✅ Bolehkah anda memikirkan sebab mengapa melukis semula wira anda banyak bingkai sesaat mungkin menyebabkan kos prestasi? Baca tentang [alternatif kepada corak ini](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Mengendalikan acara papan kekunci

Anda mengendalikan acara dengan melampirkan acara tertentu kepada kod. Acara papan kekunci dicetuskan pada keseluruhan tetingkap manakala acara tetikus seperti `click` boleh disambungkan kepada klik pada elemen tertentu. Kita akan menggunakan acara papan kekunci sepanjang projek ini.

Untuk mengendalikan acara, anda perlu menggunakan kaedah `addEventListener()` pada tetingkap dan memberikannya dua parameter input. Parameter pertama ialah nama acara, contohnya `keyup`. Parameter kedua ialah fungsi yang sepatutnya dipanggil sebagai hasil daripada acara berlaku.

Berikut adalah contoh:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Untuk acara papan kekunci, terdapat dua sifat pada acara yang boleh anda gunakan untuk melihat kekunci yang ditekan:

- `key`, ini adalah representasi string bagi kekunci yang ditekan, contohnya `ArrowUp`
- `keyCode`, ini adalah representasi nombor, contohnya `37`, bersamaan dengan `ArrowLeft`.

✅ Manipulasi acara kekunci berguna di luar pembangunan permainan. Apakah kegunaan lain yang boleh anda fikirkan untuk teknik ini?

### Kekunci khas: satu peringatan

Terdapat beberapa *kekunci khas* yang mempengaruhi tetingkap. Ini bermakna jika anda mendengar acara `keyup` dan anda menggunakan kekunci khas ini untuk menggerakkan wira anda, ia juga akan melakukan penatalan mendatar. Oleh itu, anda mungkin mahu *mematikan* tingkah laku lalai penyemak imbas ini semasa anda membina permainan anda. Anda memerlukan kod seperti ini:

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

Kod di atas akan memastikan kekunci anak panah dan kekunci ruang mempunyai tingkah laku *lalai* dimatikan. Mekanisme *mematikan* berlaku apabila kita memanggil `e.preventDefault()`.

## Pergerakan yang Dihasilkan Permainan

Kita boleh membuat sesuatu bergerak dengan sendirinya dengan menggunakan pemasa seperti fungsi `setTimeout()` atau `setInterval()` yang mengemas kini lokasi objek pada setiap tick, atau selang masa. Berikut adalah bagaimana ia boleh kelihatan:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Gelung permainan

Gelung permainan adalah konsep yang pada dasarnya adalah fungsi yang dipanggil pada selang masa tetap. Ia dipanggil gelung permainan kerana segala-galanya yang sepatutnya kelihatan kepada pengguna dilukis ke dalam gelung. Gelung permainan menggunakan semua objek permainan yang merupakan sebahagian daripada permainan, melukis semuanya kecuali atas sebab tertentu tidak sepatutnya menjadi sebahagian daripada permainan lagi. Contohnya, jika objek adalah musuh yang terkena laser dan meletup, ia tidak lagi menjadi sebahagian daripada gelung permainan semasa (anda akan belajar lebih lanjut tentang ini dalam pelajaran seterusnya).

Berikut adalah bagaimana gelung permainan biasanya kelihatan, dinyatakan dalam kod:

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

Gelung di atas dipanggil setiap `200` milisaat untuk melukis semula kanvas. Anda mempunyai keupayaan untuk memilih selang terbaik yang masuk akal untuk permainan anda.

## Meneruskan Permainan Angkasa

Anda akan mengambil kod sedia ada dan meluaskannya. Sama ada mulakan dengan kod yang anda lengkapkan semasa bahagian I atau gunakan kod dalam [Bahagian II - permulaan](../../../../6-space-game/3-moving-elements-around/your-work).

- **Menggerakkan wira**: anda akan menambah kod untuk memastikan anda boleh menggerakkan wira menggunakan kekunci anak panah.
- **Menggerakkan musuh**: anda juga perlu menambah kod untuk memastikan musuh bergerak dari atas ke bawah pada kadar tertentu.

## Langkah yang Disyorkan

Cari fail yang telah dibuat untuk anda dalam sub folder `your-work`. Ia sepatutnya mengandungi perkara berikut:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Anda memulakan projek anda dalam folder `your_work` dengan menaip:

```bash
cd your-work
npm start
```

Yang di atas akan memulakan HTTP Server pada alamat `http://localhost:5000`. Buka penyemak imbas dan masukkan alamat itu, sekarang ia sepatutnya memaparkan wira dan semua musuh; tiada apa yang bergerak - lagi!

### Tambah kod

1. **Tambah objek khusus** untuk `hero` dan `enemy` dan `game object`, mereka sepatutnya mempunyai sifat `x` dan `y`. (Ingat bahagian tentang [Pewarisan atau komposisi](../README.md)).

   *PETUNJUK* `game object` sepatutnya menjadi yang mempunyai `x` dan `y` dan keupayaan untuk melukis dirinya ke kanvas.

   >tip: mulakan dengan menambah kelas GameObject baharu dengan pembinaannya seperti di bawah, dan kemudian lukis ke kanvas:
  
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

    Sekarang, luaskan GameObject ini untuk mencipta Hero dan Enemy.
    
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

2. **Tambah pengendali acara kekunci** untuk mengendalikan navigasi kekunci (gerakkan wira ke atas/bawah kiri/kanan)

   *INGAT* ia adalah sistem kartesian, kiri atas ialah `0,0`. Juga ingat untuk menambah kod untuk menghentikan *tingkah laku lalai*

   >tip: cipta fungsi onKeyDown anda dan lampirkan pada tetingkap:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Semak konsol penyemak imbas anda pada ketika ini, dan lihat kekunci yang ditekan sedang direkodkan.

3. **Laksanakan** [Corak Pub sub](../README.md), ini akan memastikan kod anda bersih semasa anda mengikuti bahagian yang tinggal.

   Untuk melakukan bahagian terakhir ini, anda boleh:

   1. **Tambah pendengar acara** pada tetingkap:

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

    1. **Cipta kelas EventEmitter** untuk menerbitkan dan melanggan mesej:

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

    1. **Inisialisasi permainan**

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

1. **Sediakan gelung permainan**

   Refaktor fungsi window.onload untuk memulakan permainan dan menyediakan gelung permainan pada selang yang baik. Anda juga akan menambah pancaran laser:

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

5. **Tambah kod** untuk menggerakkan musuh pada selang tertentu

    Refaktor fungsi `createEnemies()` untuk mencipta musuh dan menolaknya ke dalam kelas gameObjects baharu:

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
    
    dan tambah fungsi `createHero()` untuk melakukan proses serupa untuk wira.
    
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

    dan akhirnya, tambah fungsi `drawGameObjects()` untuk memulakan lukisan:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Musuh anda sepatutnya mula mara ke arah kapal angkasa wira anda!

---

## 🚀 Cabaran

Seperti yang anda lihat, kod anda boleh menjadi 'kod spaghetti' apabila anda mula menambah fungsi, pembolehubah dan kelas. Bagaimana anda boleh mengatur kod anda dengan lebih baik supaya ia lebih mudah dibaca? Lakarkan sistem untuk mengatur kod anda, walaupun ia masih berada dalam satu fail.

## Kuiz Pasca-Kuliah

[Kuiz pasca-kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/34)

## Kajian & Pembelajaran Kendiri

Walaupun kita menulis permainan kita tanpa menggunakan kerangka kerja, terdapat banyak kerangka kerja kanvas berasaskan JavaScript untuk pembangunan permainan. Luangkan masa untuk melakukan [pembacaan tentang ini](https://github.com/collections/javascript-game-engines).

## Tugasan

[Komen kod anda](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.