<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "022bbb5c869091b98f19e408e0c51d5d",
  "translation_date": "2025-10-24T14:14:17+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "id"
}
-->
# Membangun Game Luar Angkasa Bagian 3: Menambahkan Gerakan

Pikirkan tentang game favoritmu – yang membuatnya menarik bukan hanya grafis yang indah, tetapi juga cara semuanya bergerak dan merespons tindakanmu. Saat ini, game luar angkasamu seperti lukisan yang indah, tetapi kita akan menambahkan gerakan yang membuatnya hidup.

Ketika insinyur NASA memprogram komputer panduan untuk misi Apollo, mereka menghadapi tantangan serupa: bagaimana membuat pesawat luar angkasa merespons input pilot sambil secara otomatis menjaga koreksi jalur? Prinsip yang akan kita pelajari hari ini mencerminkan konsep yang sama – mengelola gerakan yang dikendalikan pemain bersama perilaku sistem otomatis.

Dalam pelajaran ini, kamu akan belajar cara membuat pesawat luar angkasa meluncur di layar, merespons perintah pemain, dan menciptakan pola gerakan yang halus. Kita akan memecah semuanya menjadi konsep yang mudah dipahami yang saling membangun secara alami.

Pada akhirnya, pemain akan dapat menerbangkan pesawat pahlawan mereka di layar sementara kapal musuh berpatroli di atas. Lebih penting lagi, kamu akan memahami prinsip inti yang mendukung sistem gerakan dalam game.

## Kuis Pra-Pelajaran

[Kuis pra-pelajaran](https://ff-quizzes.netlify.app/web/quiz/33)

## Memahami Gerakan dalam Game

Game menjadi hidup ketika segala sesuatunya mulai bergerak, dan pada dasarnya ada dua cara hal ini terjadi:

- **Gerakan yang dikendalikan pemain**: Ketika kamu menekan tombol atau mengklik mouse, sesuatu bergerak. Ini adalah hubungan langsung antara kamu dan dunia game.
- **Gerakan otomatis**: Ketika game itu sendiri memutuskan untuk menggerakkan sesuatu – seperti kapal musuh yang perlu berpatroli di layar apakah kamu melakukan sesuatu atau tidak.

Membuat objek bergerak di layar komputer lebih sederhana dari yang kamu pikirkan. Ingat koordinat x dan y dari pelajaran matematika? Itulah yang akan kita gunakan di sini. Ketika Galileo melacak bulan Jupiter pada tahun 1610, dia pada dasarnya melakukan hal yang sama – memplot posisi dari waktu ke waktu untuk memahami pola gerakan.

Menggerakkan sesuatu di layar seperti membuat animasi flipbook – kamu perlu mengikuti tiga langkah sederhana ini:

1. **Perbarui posisi** – Ubah di mana objekmu seharusnya berada (mungkin pindahkan 5 piksel ke kanan)
2. **Hapus bingkai lama** – Bersihkan layar agar tidak terlihat jejak bayangan di mana-mana
3. **Gambar bingkai baru** – Tempatkan objekmu di posisi barunya

Lakukan ini dengan cukup cepat, dan boom! Kamu mendapatkan gerakan halus yang terasa alami bagi pemain.

Berikut adalah contoh kode:

```javascript
// Set the hero's location
hero.x += 5;
// Clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// Redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

**Apa yang dilakukan kode ini:**
- **Memperbarui** koordinat x pahlawan sebanyak 5 piksel untuk menggerakkannya secara horizontal
- **Membersihkan** seluruh area kanvas untuk menghapus bingkai sebelumnya
- **Mengisi** kanvas dengan warna latar belakang hitam
- **Menggambar ulang** gambar pahlawan di posisinya yang baru

✅ Bisakah kamu memikirkan alasan mengapa menggambar ulang pahlawanmu banyak bingkai per detik dapat menyebabkan biaya kinerja? Baca tentang [alternatif untuk pola ini](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Menangani Event Keyboard

Di sinilah kita menghubungkan input pemain ke aksi dalam game. Ketika seseorang menekan tombol spasi untuk menembakkan laser atau menekan tombol panah untuk menghindari asteroid, game-mu perlu mendeteksi dan merespons input tersebut.

Event keyboard terjadi di tingkat jendela, artinya seluruh jendela browsermu mendengarkan penekanan tombol tersebut. Klik mouse, di sisi lain, dapat diikat ke elemen tertentu (seperti mengklik tombol). Untuk game luar angkasa kita, kita akan fokus pada kontrol keyboard karena itulah yang memberikan pemain nuansa arcade klasik.

Ini mengingatkan saya pada bagaimana operator telegraf di tahun 1800-an harus menerjemahkan input kode morse menjadi pesan yang bermakna – kita melakukan sesuatu yang serupa, menerjemahkan penekanan tombol menjadi perintah game.

Untuk menangani sebuah event, kamu perlu menggunakan metode `addEventListener()` pada jendela dan memberikannya dua parameter input. Parameter pertama adalah nama event, misalnya `keyup`. Parameter kedua adalah fungsi yang harus dipanggil sebagai hasil dari terjadinya event.

Berikut adalah contohnya:

```javascript
window.addEventListener('keyup', (evt) => {
  // evt.key = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
});
```

**Penjelasan tentang apa yang terjadi di sini:**
- **Mendengarkan** event keyboard di seluruh jendela
- **Menangkap** objek event yang berisi informasi tentang tombol mana yang ditekan
- **Memeriksa** apakah tombol yang ditekan cocok dengan tombol tertentu (dalam hal ini, tombol panah atas)
- **Menjalankan** kode ketika kondisi terpenuhi

Untuk event tombol, ada dua properti pada event yang dapat kamu gunakan untuk melihat tombol mana yang ditekan:

- `key` - ini adalah representasi string dari tombol yang ditekan, misalnya `'ArrowUp'`
- `keyCode` - ini adalah representasi angka, misalnya `37`, yang sesuai dengan `ArrowLeft`

✅ Manipulasi event tombol berguna di luar pengembangan game. Apa kegunaan lain yang dapat kamu pikirkan untuk teknik ini?

### Tombol Khusus: Perhatian!

Beberapa tombol memiliki perilaku bawaan browser yang dapat mengganggu game-mu. Tombol panah menggulir halaman dan tombol spasi melompat ke bawah – perilaku yang tidak kamu inginkan ketika seseorang mencoba mengendalikan pesawat luar angkasa mereka.

Kita dapat mencegah perilaku bawaan ini dan membiarkan game kita menangani input tersebut. Ini mirip dengan bagaimana programmer komputer awal harus menimpa interupsi sistem untuk menciptakan perilaku khusus – kita hanya melakukannya di tingkat browser. Berikut caranya:

```javascript
const onKeyDown = function (e) {
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

**Memahami kode pencegahan ini:**
- **Memeriksa** kode tombol tertentu yang mungkin menyebabkan perilaku browser yang tidak diinginkan
- **Mencegah** tindakan bawaan browser untuk tombol panah dan tombol spasi
- **Mengizinkan** tombol lain berfungsi normal
- **Menggunakan** `e.preventDefault()` untuk menghentikan perilaku bawaan browser

## Gerakan yang Diinduksi Game

Sekarang mari kita bicara tentang objek yang bergerak tanpa input pemain. Pikirkan tentang kapal musuh yang meluncur di layar, peluru yang terbang dalam garis lurus, atau awan yang melayang di latar belakang. Gerakan otomatis ini membuat dunia game-mu terasa hidup bahkan ketika tidak ada yang menyentuh kontrol.

Kita menggunakan timer bawaan JavaScript untuk memperbarui posisi pada interval yang teratur. Konsep ini mirip dengan cara kerja jam pendulum – mekanisme reguler yang memicu tindakan yang konsisten dan teratur. Berikut betapa sederhananya ini:

```javascript
const id = setInterval(() => {
  // Move the enemy on the y axis
  enemy.y += 10;
}, 100);
```

**Apa yang dilakukan kode gerakan ini:**
- **Membuat** timer yang berjalan setiap 100 milidetik
- **Memperbarui** koordinat y musuh sebanyak 10 piksel setiap kali
- **Menyimpan** ID interval sehingga kita dapat menghentikannya nanti jika diperlukan
- **Menggerakkan** musuh ke bawah layar secara otomatis

## Loop Game

Berikut adalah konsep yang mengikat semuanya – loop game. Jika game-mu adalah film, loop game akan menjadi proyektor film, menampilkan bingkai demi bingkai dengan sangat cepat sehingga semuanya tampak bergerak dengan mulus.

Setiap game memiliki salah satu loop ini yang berjalan di belakang layar. Ini adalah fungsi yang memperbarui semua objek game, menggambar ulang layar, dan mengulangi proses ini secara terus-menerus. Ini melacak pahlawanmu, semua musuh, laser yang terbang – seluruh keadaan game.

Konsep ini mengingatkan saya pada bagaimana animator film awal seperti Walt Disney harus menggambar ulang karakter bingkai demi bingkai untuk menciptakan ilusi gerakan. Kita melakukan hal yang sama, hanya saja dengan kode daripada pensil.

Berikut adalah seperti apa loop game biasanya, diekspresikan dalam kode:

```javascript
const gameLoopId = setInterval(() => {
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
  }
  gameLoop();
}, 200);
```

**Memahami struktur loop game:**
- **Membersihkan** seluruh kanvas untuk menghapus bingkai sebelumnya
- **Mengisi** latar belakang dengan warna solid
- **Menggambar** semua objek game di posisi mereka saat ini
- **Mengulangi** proses ini setiap 200 milidetik untuk menciptakan animasi yang halus
- **Mengelola** frame rate dengan mengontrol waktu interval

## Melanjutkan Game Luar Angkasa

Sekarang kita akan menambahkan gerakan ke adegan statis yang telah kamu buat sebelumnya. Kita akan mengubahnya dari tangkapan layar menjadi pengalaman interaktif. Kita akan bekerja melalui ini langkah demi langkah untuk memastikan setiap bagian saling membangun.

Ambil kode dari tempat kita berhenti di pelajaran sebelumnya (atau mulai dengan kode di folder [Part II- starter](../../../../6-space-game/3-moving-elements-around/your-work) jika kamu membutuhkan awal yang baru).

**Inilah yang akan kita bangun hari ini:**
- **Kontrol pahlawan**: Tombol panah akan mengendalikan pesawat luar angkasamu di layar
- **Gerakan musuh**: Kapal alien itu akan mulai maju

Mari kita mulai menerapkan fitur-fitur ini.

## Langkah yang Direkomendasikan

Temukan file yang telah dibuat untukmu di sub folder `your-work`. Seharusnya berisi:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Mulailah proyekmu di folder `your-work` dengan mengetik:

```bash
cd your-work
npm start
```

**Apa yang dilakukan perintah ini:**
- **Menavigasi** ke direktori proyekmu
- **Memulai** HTTP Server di alamat `http://localhost:5000`
- **Menyajikan** file game-mu sehingga kamu dapat mengujinya di browser

Perintah di atas akan memulai HTTP Server di alamat `http://localhost:5000`. Buka browser dan masukkan alamat tersebut, saat ini seharusnya menampilkan pahlawan dan semua musuh; tidak ada yang bergerak - belum!

### Tambahkan kode

1. **Tambahkan objek khusus** untuk `hero`, `enemy`, dan `game object`, mereka harus memiliki properti `x` dan `y`. (Ingat bagian tentang [Inheritance atau composition](../README.md)).

   *PETUNJUK* `game object` harus menjadi objek dengan `x` dan `y` serta kemampuan untuk menggambar dirinya sendiri ke kanvas.

   > **Tip**: Mulailah dengan menambahkan kelas `GameObject` baru dengan konstruktor yang dijelaskan di bawah ini, lalu gambarlah ke kanvas:

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

    **Memahami kelas dasar ini:**
    - **Mendefinisikan** properti umum yang dimiliki semua objek game (posisi, ukuran, gambar)
    - **Menyertakan** flag `dead` untuk melacak apakah objek harus dihapus
    - **Menyediakan** metode `draw()` yang merender objek di kanvas
    - **Mengatur** nilai default untuk semua properti yang dapat ditimpa oleh kelas turunan

    Sekarang, perluas `GameObject` ini untuk membuat `Hero` dan `Enemy`:
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        super(x, y);
        this.width = 98;
        this.height = 75;
        this.type = "Hero";
        this.speed = 5;
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        this.width = 98;
        this.height = 50;
        this.type = "Enemy";
        const id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y);
            clearInterval(id);
          }
        }, 300);
      }
    }
    ```

    **Konsep utama dalam kelas-kelas ini:**
    - **Mewarisi** dari `GameObject` menggunakan kata kunci `extends`
    - **Memanggil** konstruktor induk dengan `super(x, y)`
    - **Mengatur** dimensi dan properti spesifik untuk setiap tipe objek
    - **Mengimplementasikan** gerakan otomatis untuk musuh menggunakan `setInterval()`

2. **Tambahkan handler event tombol** untuk menangani navigasi tombol (menggerakkan pahlawan ke atas/bawah kiri/kanan)

   *INGAT* ini adalah sistem kartesius, kiri atas adalah `0,0`. Juga ingat untuk menambahkan kode untuk menghentikan *perilaku default*

   > **Tip**: Buat fungsi `onKeyDown` dan lampirkan ke jendela:

   ```javascript
   const onKeyDown = function (e) {
     console.log(e.keyCode);
     // Add the code from the lesson above to stop default behavior
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

   window.addEventListener("keydown", onKeyDown);
   ```
    
   **Apa yang dilakukan handler event ini:**
   - **Mendengarkan** event keydown di seluruh jendela
   - **Mencatat** kode tombol untuk membantumu memeriksa tombol mana yang ditekan
   - **Mencegah** perilaku default browser untuk tombol panah dan tombol spasi
   - **Mengizinkan** tombol lain berfungsi normal
   
   Periksa konsol browsermu pada titik ini, dan lihat penekanan tombol yang dicatat.

3. **Implementasikan** [Pola Pub sub](../README.md), ini akan menjaga kode-mu tetap bersih saat kamu mengikuti bagian-bagian berikutnya.

   Pola Publish-Subscribe membantu mengatur kode-mu dengan memisahkan deteksi event dari penanganan event. Ini membuat kode-mu lebih modular dan lebih mudah untuk dipelihara.

   Untuk melakukan bagian terakhir ini, kamu dapat:

   1. **Tambahkan listener event** pada jendela:

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

   **Apa yang dilakukan sistem event ini:**
   - **Mendeteksi** input keyboard dan mengonversinya menjadi event game khusus
   - **Memisahkan** deteksi input dari logika game
   - **Mempermudah** untuk mengubah kontrol nanti tanpa memengaruhi kode game
   - **Mengizinkan** beberapa sistem merespons input yang sama

   2. **Buat kelas EventEmitter** untuk mempublikasikan dan berlangganan pesan:

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
       
   3. **Tambahkan konstanta** dan siapkan EventEmitter:

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

   **Memahami pengaturan:**
   - **Mendefinisikan** konstanta pesan untuk menghindari kesalahan ketik dan mempermudah refactoring
   - **Mendeklarasikan** variabel untuk gambar, konteks kanvas, dan keadaan game
   - **Membuat** event emitter global untuk sistem pub-sub
   - **Menginisialisasi** array untuk menampung semua objek game

   4. **Inisialisasi game**

       ```javascript
       function initGame() {
         gameObjects = [];
         createEnemies();
         createHero();
       
         eventEmitter.on(Messages.KEY_EVENT_UP, () => {
           hero.y -= 5;
         });
       
         eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
           hero.y += 5;
         });
       
         eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
           hero.x -= 5;
         });
       
4. **Siapkan loop game**

   Refactor fungsi `window.onload` untuk menginisialisasi game dan mengatur loop game pada interval yang baik. Kamu juga akan menambahkan sinar laser:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      const gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100);
    };
    ```

   **Memahami pengaturan game:**
   - **Menunggu** halaman dimuat sepenuhnya sebelum memulai
   - **Mengambil** elemen kanvas dan konteks rendering 2D-nya
   - **Memuat** semua aset gambar secara asinkron menggunakan `await`
   - **Memulai** loop game yang berjalan pada interval 100ms (10 FPS)
   - **Membersihkan** dan menggambar ulang seluruh layar setiap bingkai

5. **Tambahkan kode** untuk menggerakkan musuh pada interval tertentu

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

    **Apa yang dilakukan pembuatan musuh:**
    - **Menghitung** posisi untuk memusatkan musuh di layar
- **Membuat** grid musuh menggunakan loop bersarang  
- **Menetapkan** gambar musuh ke setiap objek musuh  
- **Menambahkan** setiap musuh ke array objek permainan global  

dan tambahkan fungsi `createHero()` untuk melakukan proses serupa pada hero.  

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
  
**Apa yang dilakukan pembuatan hero:**  
- **Memposisikan** hero di bagian bawah tengah layar  
- **Menetapkan** gambar hero ke objek hero  
- **Menambahkan** hero ke array objek permainan untuk dirender  

dan terakhir, tambahkan fungsi `drawGameObjects()` untuk mulai menggambar:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
**Memahami fungsi menggambar:**  
- **Melakukan iterasi** melalui semua objek permainan dalam array  
- **Memanggil** metode `draw()` pada setiap objek  
- **Melewatkan** konteks canvas sehingga objek dapat merender dirinya sendiri  

Musuh-musuhmu akan mulai maju menuju pesawat luar angkasa hero-mu!  
}  
}  
    ```
    
    and add a `createHero()` function to do a similar process for the hero.
    
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
  
Musuh-musuhmu akan mulai maju menuju pesawat luar angkasa hero-mu!  

---

## Tantangan GitHub Copilot Agent 🚀  

Berikut tantangan yang akan meningkatkan kualitas permainanmu: menambahkan batas layar dan kontrol yang halus. Saat ini, hero-mu bisa terbang keluar layar, dan gerakannya mungkin terasa kaku.  

**Misi Kamu:** Buat pesawat luar angkasa hero-mu terasa lebih realistis dengan menerapkan batas layar dan gerakan yang mulus. Ini mirip dengan bagaimana sistem kontrol penerbangan NASA mencegah pesawat luar angkasa melebihi parameter operasional yang aman.  

**Apa yang harus dibuat:** Buat sistem yang menjaga pesawat luar angkasa hero-mu tetap berada di layar, dan buat kontrol terasa halus. Ketika pemain menahan tombol panah, pesawat harus meluncur terus-menerus daripada bergerak dalam langkah-langkah diskrit. Pertimbangkan untuk menambahkan umpan balik visual saat pesawat mencapai batas layar – mungkin efek halus untuk menunjukkan tepi area permainan.  

Pelajari lebih lanjut tentang [mode agen](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.  

## 🚀 Tantangan  

Organisasi kode menjadi semakin penting seiring pertumbuhan proyek. Kamu mungkin telah memperhatikan filemu mulai penuh dengan fungsi, variabel, dan kelas yang bercampur aduk. Ini mengingatkan saya pada bagaimana para insinyur yang mengorganisasi kode misi Apollo harus menciptakan sistem yang jelas dan dapat dipelihara sehingga tim-tim yang berbeda dapat bekerja secara bersamaan.  

**Misi Kamu:**  
Berpikir seperti seorang arsitek perangkat lunak. Bagaimana kamu akan mengorganisasi kode sehingga enam bulan dari sekarang, kamu (atau rekan timmu) dapat memahami apa yang sedang terjadi? Bahkan jika semuanya tetap dalam satu file untuk saat ini, kamu dapat menciptakan organisasi yang lebih baik:  

- **Mengelompokkan fungsi terkait** dengan header komentar yang jelas  
- **Memisahkan tanggung jawab** - pisahkan logika permainan dari rendering  
- **Menggunakan konvensi penamaan** yang konsisten untuk variabel dan fungsi  
- **Membuat modul** atau namespace untuk mengorganisasi aspek-aspek berbeda dari permainanmu  
- **Menambahkan dokumentasi** yang menjelaskan tujuan setiap bagian utama  

**Pertanyaan refleksi:**  
- Bagian mana dari kode kamu yang paling sulit dipahami saat kamu kembali ke sana?  
- Bagaimana kamu bisa mengorganisasi kode agar lebih mudah bagi orang lain untuk berkontribusi?  
- Apa yang akan terjadi jika kamu ingin menambahkan fitur baru seperti power-up atau jenis musuh yang berbeda?  

## Kuis Pasca-Kuliah  

[Kuis pasca-kuliah](https://ff-quizzes.netlify.app/web/quiz/34)  

## Tinjauan & Studi Mandiri  

Kita telah membangun semuanya dari awal, yang sangat bagus untuk belajar, tetapi ada sedikit rahasia – ada beberapa framework JavaScript luar biasa di luar sana yang dapat menangani banyak pekerjaan berat untukmu. Setelah kamu merasa nyaman dengan dasar-dasar yang telah kita bahas, ada baiknya [menjelajahi apa yang tersedia](https://github.com/collections/javascript-game-engines).  

Anggaplah framework seperti memiliki kotak alat yang lengkap daripada membuat setiap alat secara manual. Mereka dapat menyelesaikan banyak tantangan organisasi kode yang kita bicarakan, plus menawarkan fitur yang akan memakan waktu berminggu-minggu untuk kamu bangun sendiri.  

**Hal-hal yang layak dijelajahi:**  
- Bagaimana engine game mengorganisasi kode – kamu akan kagum dengan pola-pola cerdas yang mereka gunakan  
- Trik performa untuk membuat permainan canvas berjalan sangat mulus  
- Fitur modern JavaScript yang dapat membuat kode kamu lebih bersih dan lebih mudah dipelihara  
- Pendekatan berbeda untuk mengelola objek permainan dan hubungan mereka  

## Tugas  

[Komentari kode kamu](assignment.md)  

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis dapat mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang keliru yang timbul dari penggunaan terjemahan ini.