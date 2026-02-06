# Bina Permainan Angkasa Bahagian 3: Menambah Pergerakan

```mermaid
journey
    title Your Game Animation Journey
    section Movement Basics
      Understand motion principles: 3: Student
      Learn coordinate updates: 4: Student
      Implement basic movement: 4: Student
    section Player Controls
      Handle keyboard events: 4: Student
      Prevent default behaviors: 5: Student
      Create responsive controls: 5: Student
    section Game Systems
      Build game loop: 5: Student
      Manage object lifecycle: 5: Student
      Implement pub/sub pattern: 5: Student
```

Fikirkan tentang permainan kegemaran anda – apa yang membuatkan ia menarik bukan hanya grafik yang cantik, tetapi cara semuanya bergerak dan bertindak balas terhadap tindakan anda. Sekarang, permainan angkasa anda seperti lukisan yang indah, tetapi kita akan menambah pergerakan yang menghidupkannya.

Apabila jurutera NASA memprogramkan komputer panduan untuk misi Apollo, mereka menghadapi cabaran yang sama: bagaimana membuat kapal angkasa bertindak balas terhadap input juruterbang sambil secara automatik mengekalkan pembetulan kursus? Prinsip yang akan kita pelajari hari ini mencerminkan konsep yang sama – menguruskan pergerakan yang dikawal pemain bersama tingkah laku sistem automatik.

Dalam pelajaran ini, anda akan belajar bagaimana membuat kapal angkasa meluncur di skrin, bertindak balas terhadap arahan pemain, dan mencipta corak pergerakan yang lancar. Kami akan memecahkan semuanya kepada konsep yang mudah difahami dan saling berkaitan.

Pada akhirnya, pemain akan dapat mengemudi kapal hero mereka di skrin sementara kapal musuh berpatroli di atas. Lebih penting lagi, anda akan memahami prinsip asas yang menggerakkan sistem pergerakan permainan.

```mermaid
mindmap
  root((Game Animation))
    Movement Types
      Player Controlled
      Automatic Motion
      Physics Based
      Scripted Paths
    Event Handling
      Keyboard Input
      Mouse Events
      Touch Controls
      Default Prevention
    Game Loop
      Update Logic
      Render Frame
      Clear Canvas
      Frame Rate Control
    Object Management
      Position Updates
      Collision Detection
      Lifecycle Management
      State Tracking
    Communication
      Pub/Sub Pattern
      Event Emitters
      Message Passing
      Loose Coupling
```

## Kuiz Pra-Pelajaran

[Kuiz pra-pelajaran](https://ff-quizzes.netlify.app/web/quiz/33)

## Memahami Pergerakan Permainan

Permainan menjadi hidup apabila objek mula bergerak, dan secara asasnya terdapat dua cara ini berlaku:

- **Pergerakan yang dikawal pemain**: Apabila anda menekan kekunci atau klik tetikus, sesuatu bergerak. Ini adalah hubungan langsung antara anda dan dunia permainan.
- **Pergerakan automatik**: Apabila permainan itu sendiri memutuskan untuk menggerakkan objek – seperti kapal musuh yang perlu berpatroli di skrin tanpa mengira apa yang anda lakukan.

Membuat objek bergerak di skrin komputer lebih mudah daripada yang anda fikirkan. Ingat koordinat x dan y dari kelas matematik? Itulah yang kita gunakan di sini. Apabila Galileo menjejaki bulan Jupiter pada tahun 1610, dia pada dasarnya melakukan perkara yang sama – memplot kedudukan dari masa ke masa untuk memahami corak pergerakan.

Menggerakkan objek di skrin adalah seperti mencipta animasi buku flip – anda perlu mengikuti tiga langkah mudah ini:

```mermaid
flowchart LR
    A["Frame N"] --> B["Update Positions"]
    B --> C["Clear Canvas"]
    C --> D["Draw Objects"]
    D --> E["Frame N+1"]
    E --> F{Continue?}
    F -->|Yes| B
    F -->|No| G["Game Over"]
    
    subgraph "Animation Cycle"
        H["1. Calculate new positions"]
        I["2. Erase previous frame"]
        J["3. Render new frame"]
    end
    
    style B fill:#e1f5fe
    style C fill:#ffebee
    style D fill:#e8f5e8
```

1. **Kemas kini kedudukan** – Tukar di mana objek anda sepatutnya berada (mungkin gerakkannya 5 piksel ke kanan)
2. **Padam bingkai lama** – Kosongkan skrin supaya anda tidak melihat jejak bayangan di mana-mana
3. **Lukis bingkai baru** – Letakkan objek anda di tempat barunya

Lakukan ini dengan cukup pantas, dan boom! Anda mendapat pergerakan yang lancar yang terasa semula jadi kepada pemain.

Inilah rupa kodnya:

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

**Apa yang dilakukan oleh kod ini:**
- **Mengemas kini** koordinat x hero sebanyak 5 piksel untuk menggerakkannya secara mendatar
- **Membersihkan** seluruh kawasan kanvas untuk menghapus bingkai sebelumnya
- **Mengisi** kanvas dengan warna latar belakang hitam
- **Melukis semula** imej hero di kedudukan barunya

✅ Bolehkah anda memikirkan sebab mengapa melukis semula hero anda banyak bingkai sesaat mungkin menyebabkan kos prestasi? Baca tentang [alternatif kepada corak ini](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Mengendalikan acara papan kekunci

Di sinilah kita menghubungkan input pemain kepada tindakan permainan. Apabila seseorang menekan bar ruang untuk menembak laser atau mengetuk kekunci anak panah untuk mengelak asteroid, permainan anda perlu mengesan dan bertindak balas terhadap input tersebut.

Acara papan kekunci berlaku di peringkat tetingkap, bermakna seluruh tetingkap pelayar anda mendengar penekanan kekunci tersebut. Klik tetikus, sebaliknya, boleh diikat kepada elemen tertentu (seperti mengklik butang). Untuk permainan angkasa kita, kita akan fokus pada kawalan papan kekunci kerana itulah yang memberikan pemain rasa arked klasik.

Ini mengingatkan saya kepada bagaimana operator telegraf pada tahun 1800-an perlu menterjemah input kod morse kepada mesej yang bermakna – kita melakukan sesuatu yang serupa, menterjemah penekanan kekunci kepada arahan permainan.

Untuk mengendalikan acara, anda perlu menggunakan kaedah `addEventListener()` tetingkap dan memberikannya dua parameter input. Parameter pertama adalah nama acara, contohnya `keyup`. Parameter kedua adalah fungsi yang harus dipanggil sebagai hasil daripada acara yang berlaku.

Berikut adalah contoh:

```javascript
window.addEventListener('keyup', (evt) => {
  // evt.key = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
});
```

**Memecahkan apa yang berlaku di sini:**
- **Mendengar** acara papan kekunci pada seluruh tetingkap
- **Menangkap** objek acara yang mengandungi maklumat tentang kekunci mana yang ditekan
- **Memeriksa** jika kekunci yang ditekan sepadan dengan kekunci tertentu (dalam kes ini, anak panah atas)
- **Melaksanakan** kod apabila syarat dipenuhi

Untuk acara kekunci terdapat dua sifat pada acara yang boleh anda gunakan untuk melihat kekunci mana yang ditekan:

- `key` - ini adalah representasi string kekunci yang ditekan, contohnya `'ArrowUp'`
- `keyCode` - ini adalah representasi nombor, contohnya `37`, sepadan dengan `ArrowLeft`

✅ Manipulasi acara kekunci berguna di luar pembangunan permainan. Apakah kegunaan lain yang boleh anda fikirkan untuk teknik ini?

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant EventSystem
    participant GameLogic
    participant Hero
    
    User->>Browser: Presses ArrowUp key
    Browser->>EventSystem: keydown event
    EventSystem->>EventSystem: preventDefault()
    EventSystem->>GameLogic: emit('KEY_EVENT_UP')
    GameLogic->>Hero: hero.y -= 5
    Hero->>Hero: Update position
    
    Note over Browser,GameLogic: Event flow prevents browser defaults
    Note over GameLogic,Hero: Pub/sub pattern enables clean communication
```

### Kekunci khas: perhatian!

Sesetengah kekunci mempunyai tingkah laku terbina dalam pelayar yang boleh mengganggu permainan anda. Kekunci anak panah menatal halaman dan bar ruang melompat ke bawah – tingkah laku yang tidak anda inginkan apabila seseorang cuba mengemudi kapal angkasa mereka.

Kita boleh menghalang tingkah laku lalai ini dan membiarkan permainan kita mengendalikan input sebaliknya. Ini serupa dengan bagaimana pengaturcara komputer awal perlu mengatasi gangguan sistem untuk mencipta tingkah laku tersuai – kita hanya melakukannya di peringkat pelayar. Berikut adalah caranya:

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

**Memahami kod pencegahan ini:**
- **Memeriksa** kod kekunci tertentu yang mungkin menyebabkan tingkah laku pelayar yang tidak diingini
- **Menghalang** tindakan pelayar lalai untuk kekunci anak panah dan bar ruang
- **Membenarkan** kekunci lain berfungsi seperti biasa
- **Menggunakan** `e.preventDefault()` untuk menghentikan tingkah laku terbina dalam pelayar

### 🔄 **Pemeriksaan Pedagogi**
**Pemahaman Pengendalian Acara**: Sebelum beralih kepada pergerakan automatik, pastikan anda boleh:
- ✅ Jelaskan perbezaan antara acara `keydown` dan `keyup`
- ✅ Fahami mengapa kita menghalang tingkah laku lalai pelayar
- ✅ Terangkan bagaimana pendengar acara menghubungkan input pengguna kepada logik permainan
- ✅ Kenal pasti kekunci mana yang mungkin mengganggu kawalan permainan

**Ujian Kendiri Cepat**: Apa yang akan berlaku jika anda tidak menghalang tingkah laku lalai untuk kekunci anak panah?
*Jawapan: Pelayar akan menatal halaman, mengganggu pergerakan permainan*

**Seni Bina Sistem Acara**: Anda kini memahami:
- **Pendengaran peringkat tetingkap**: Menangkap acara di peringkat pelayar
- **Sifat objek acara**: String `key` vs nombor `keyCode`
- **Pencegahan lalai**: Menghentikan tingkah laku pelayar yang tidak diingini
- **Logik bersyarat**: Bertindak balas kepada kombinasi kekunci tertentu

## Pergerakan yang disebabkan oleh permainan

Sekarang mari kita bincangkan objek yang bergerak tanpa input pemain. Fikirkan tentang kapal musuh yang meluncur di skrin, peluru yang terbang dalam garis lurus, atau awan yang melayang di latar belakang. Pergerakan autonomi ini membuatkan dunia permainan anda terasa hidup walaupun tiada siapa yang menyentuh kawalan.

Kita menggunakan pemasa terbina dalam JavaScript untuk mengemas kini kedudukan pada selang masa tetap. Konsep ini serupa dengan bagaimana jam pendulum berfungsi – mekanisme tetap yang mencetuskan tindakan yang konsisten dan berjadual. Berikut adalah betapa mudahnya:

```javascript
const id = setInterval(() => {
  // Move the enemy on the y axis
  enemy.y += 10;
}, 100);
```

**Apa yang dilakukan oleh kod pergerakan ini:**
- **Mencipta** pemasa yang berjalan setiap 100 milisaat
- **Mengemas kini** koordinat y musuh sebanyak 10 piksel setiap kali
- **Menyimpan** ID selang supaya kita boleh menghentikannya kemudian jika diperlukan
- **Menggerakkan** musuh ke bawah skrin secara automatik

## Gelung permainan

Inilah konsep yang mengikat semuanya – gelung permainan. Jika permainan anda adalah sebuah filem, gelung permainan akan menjadi projektor filem, menunjukkan bingkai demi bingkai dengan cukup pantas sehingga semuanya kelihatan bergerak dengan lancar.

Setiap permainan mempunyai salah satu gelung ini berjalan di belakang tabir. Ia adalah fungsi yang mengemas kini semua objek permainan, melukis semula skrin, dan mengulangi proses ini secara berterusan. Ini menjejaki hero anda, semua musuh, mana-mana laser yang terbang – keseluruhan keadaan permainan.

Konsep ini mengingatkan saya kepada bagaimana animator filem awal seperti Walt Disney perlu melukis semula watak bingkai demi bingkai untuk mencipta ilusi pergerakan. Kita melakukan perkara yang sama, hanya dengan kod dan bukannya pensel.

Berikut adalah rupa gelung permainan, yang dinyatakan dalam kod:

```mermaid
flowchart TD
    A["Start Game Loop"] --> B["Clear Canvas"]
    B --> C["Fill Background"]
    C --> D["Update Game Objects"]
    D --> E["Draw Hero"]
    E --> F["Draw Enemies"]
    F --> G["Draw UI Elements"]
    G --> H["Wait for Next Frame"]
    H --> I{Game Running?}
    I -->|Yes| B
    I -->|No| J["End Game"]
    
    subgraph "Frame Rate Control"
        K["60 FPS = 16.67ms"]
        L["30 FPS = 33.33ms"]
        M["10 FPS = 100ms"]
    end
    
    style B fill:#ffebee
    style D fill:#e1f5fe
    style E fill:#e8f5e8
    style F fill:#e8f5e8
```

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

**Memahami struktur gelung permainan:**
- **Membersihkan** seluruh kanvas untuk menghapus bingkai sebelumnya
- **Mengisi** latar belakang dengan warna solid
- **Melukis** semua objek permainan di kedudukan semasa mereka
- **Mengulangi** proses ini setiap 200 milisaat untuk mencipta animasi yang lancar
- **Menguruskan** kadar bingkai dengan mengawal masa selang

## Meneruskan Permainan Angkasa

Sekarang kita akan menambah pergerakan kepada adegan statik yang anda bina sebelum ini. Kita akan mengubahnya daripada tangkapan skrin kepada pengalaman interaktif. Kita akan bekerja melalui langkah ini satu persatu untuk memastikan setiap bahagian saling berkaitan.

Ambil kod dari tempat kita berhenti dalam pelajaran sebelumnya (atau mulakan dengan kod dalam folder [Bahagian II - permulaan](../../../../6-space-game/3-moving-elements-around/your-work) jika anda memerlukan permulaan baru).

**Inilah yang kita bina hari ini:**
- **Kawalan hero**: Kekunci anak panah akan mengemudi kapal angkasa anda di skrin
- **Pergerakan musuh**: Kapal alien itu akan mula mara

Mari kita mulakan pelaksanaan ciri-ciri ini.

## Langkah yang disyorkan

Cari fail yang telah dibuat untuk anda dalam sub folder `your-work`. Ia sepatutnya mengandungi:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Anda memulakan projek anda dalam folder `your-work` dengan menaip:

```bash
cd your-work
npm start
```

**Apa yang dilakukan oleh arahan ini:**
- **Menavigasi** ke direktori projek anda
- **Memulakan** HTTP Server pada alamat `http://localhost:5000`
- **Menyajikan** fail permainan anda supaya anda boleh mengujinya dalam pelayar

Arahan di atas akan memulakan HTTP Server pada alamat `http://localhost:5000`. Buka pelayar dan masukkan alamat itu, sekarang ia sepatutnya memaparkan hero dan semua musuh; tiada apa yang bergerak - lagi!

### Tambah kod

1. **Tambah objek khusus** untuk `hero` dan `enemy` dan `game object`, mereka sepatutnya mempunyai sifat `x` dan `y`. (Ingat bahagian tentang [Pewarisan atau komposisi](../README.md)).

   *PETUNJUK* `game object` sepatutnya menjadi yang mempunyai `x` dan `y` serta keupayaan untuk melukis dirinya ke kanvas.

   > **Tip**: Mulakan dengan menambah kelas `GameObject` baru dengan pembinaannya seperti di bawah, dan kemudian lukisnya ke kanvas:

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

    **Memahami kelas asas ini:**
    - **Menentukan** sifat umum yang dikongsi oleh semua objek permainan (kedudukan, saiz, imej)
    - **Termasuk** bendera `dead` untuk menjejaki sama ada objek itu perlu dikeluarkan
    - **Menyediakan** kaedah `draw()` yang melukis objek pada kanvas
    - **Menetapkan** nilai lalai untuk semua sifat yang boleh diatasi oleh kelas anak

    ```mermaid
    classDiagram
        class GameObject {
            +x: number
            +y: number
            +dead: boolean
            +type: string
            +width: number
            +height: number
            +img: Image
            +draw(ctx)
        }
        
        class Hero {
            +speed: number
            +type: "Hero"
            +width: 98
            +height: 75
        }
        
        class Enemy {
            +type: "Enemy"
            +width: 98
            +height: 50
            +setInterval()
        }
        
        GameObject <|-- Hero
        GameObject <|-- Enemy
        
        class EventEmitter {
            +listeners: object
            +on(message, listener)
            +emit(message, payload)
        }
    ```

    Sekarang, kembangkan `GameObject` ini untuk mencipta `Hero` dan `Enemy`:
    
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

    **Konsep utama dalam kelas ini:**
    - **Mewarisi** daripada `GameObject` menggunakan kata kunci `extends`
    - **Memanggil** pembina induk dengan `super(x, y)`
    - **Menetapkan** dimensi dan sifat khusus untuk setiap jenis objek
    - **Melaksanakan** pergerakan automatik untuk musuh menggunakan `setInterval()`

2. **Tambah pengendali acara kekunci** untuk mengendalikan navigasi kekunci (gerakkan hero ke atas/bawah kiri/kanan)

   *INGAT* ia adalah sistem kartesian, sudut kiri atas adalah `0,0`. Juga ingat untuk menambah kod untuk menghentikan *tingkah laku lalai*

   > **Tip**: Cipta fungsi `onKeyDown` anda dan lampirkan kepada tetingkap:

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
    
   **Apa yang dilakukan oleh pengendali acara ini:**
   - **Mendengar** acara `keydown` pada seluruh tetingkap
   - **Mencatat** kod kekunci untuk membantu anda menyahpepijat kekunci mana yang ditekan
   - **Menghalang** tingkah laku lalai pelayar untuk kekunci anak panah dan bar ruang
   - **Membenarkan** kekunci lain berfungsi seperti biasa
   
   Periksa konsol pelayar anda pada ketika ini, dan lihat penekanan kekunci yang dicatatkan.

3. **Laksanakan** [Corak Pub sub](../README.md), ini akan memastikan kod anda bersih semasa anda mengikuti bahagian yang tinggal.

   Corak Publish-Subscribe membantu mengatur kod anda dengan memisahkan pengesanan acara daripada pengendalian acara. Ini menjadikan kod anda lebih modular dan mudah diselenggara.

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

   **Apa yang dilakukan oleh sistem acara ini:**
   - **Mengesan** input papan kekunci dan menukarkannya kepada acara permainan tersuai
   - **Memisahkan** pengesanan input daripada logik permainan
   - **Memudahkan** perubahan kawalan kemudian tanpa menjejaskan kod permainan
   - **Membenarkan** pelbagai sistem bertindak balas kepada input yang sama

   ```mermaid
   flowchart TD
       A["Keyboard Input"] --> B["Window Event Listener"]
       B --> C["Event Emitter"]
       C --> D["KEY_EVENT_UP"]
       C --> E["KEY_EVENT_DOWN"]
       C --> F["KEY_EVENT_LEFT"]
       C --> G["KEY_EVENT_RIGHT"]
       
       D --> H["Hero Movement"]
       D --> I["Sound System"]
       D --> J["Visual Effects"]
       
       E --> H
       F --> H
       G --> H
       
       style A fill:#e1f5fe
       style C fill:#e8f5e8
       style H fill:#fff3e0
   ```

   2. **Cipta kelas EventEmitter** untuk menerbitkan dan melanggan mesej:

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
       
   3. **Tambah pemalar** dan sediakan EventEmitter:

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

   **Memahami persediaan:**
   - **Menentukan** pemalar mesej untuk mengelakkan kesilapan dan memudahkan penstrukturan semula
   - **Mengisytiharkan** pembolehubah untuk imej, konteks kanvas, dan keadaan permainan
   - **Mencipta** pemancar acara global untuk sistem pub-sub
   - **Memulakan** array untuk menyimpan semua objek permainan

   4. **Mulakan permainan**

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
       
4. **Tetapkan gelung permainan**

   Refactor fungsi `window.onload` untuk memulakan permainan dan menetapkan gelung permainan pada selang masa yang sesuai. Anda juga akan menambah pancaran laser:

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

   **Memahami tetapan permainan:**
   - **Menunggu** halaman dimuat sepenuhnya sebelum memulakan
   - **Mendapatkan** elemen kanvas dan konteks rendering 2D-nya
   - **Memuatkan** semua aset imej secara asinkron menggunakan `await`
   - **Memulakan** gelung permainan berjalan pada selang masa 100ms (10 FPS)
   - **Membersihkan** dan melukis semula keseluruhan skrin setiap bingkai

5. **Tambah kod** untuk menggerakkan musuh pada selang masa tertentu

    Refactor fungsi `createEnemies()` untuk mencipta musuh dan menambah mereka ke dalam kelas gameObjects yang baru:

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

    **Apa yang dilakukan oleh penciptaan musuh:**
    - **Mengira** posisi untuk memusatkan musuh di skrin
    - **Mencipta** grid musuh menggunakan gelung bersarang
    - **Menetapkan** imej musuh kepada setiap objek musuh
    - **Menambah** setiap musuh ke dalam array objek permainan global
    
    dan tambah fungsi `createHero()` untuk melakukan proses serupa bagi hero.
    
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

    **Apa yang dilakukan oleh penciptaan hero:**
    - **Memposisikan** hero di bahagian bawah tengah skrin
    - **Menetapkan** imej hero kepada objek hero
    - **Menambah** hero ke dalam array objek permainan untuk rendering

    dan akhirnya, tambah fungsi `drawGameObjects()` untuk memulakan lukisan:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    **Memahami fungsi lukisan:**
    - **Mengiterasi** semua objek permainan dalam array
    - **Memanggil** kaedah `draw()` pada setiap objek
    - **Menyampaikan** konteks kanvas supaya objek boleh melukis diri mereka sendiri

    ### 🔄 **Pemeriksaan Pedagogi**
    **Pemahaman Sistem Permainan Lengkap**: Sahkan penguasaan anda terhadap keseluruhan seni bina:
    - ✅ Bagaimana pewarisan membolehkan Hero dan Musuh berkongsi sifat GameObject yang sama?
    - ✅ Mengapa corak pub/sub menjadikan kod anda lebih mudah diselenggara?
    - ✅ Apa peranan gelung permainan dalam mencipta animasi yang lancar?
    - ✅ Bagaimana pendengar acara menghubungkan input pengguna kepada tingkah laku objek permainan?

    **Integrasi Sistem**: Permainan anda kini menunjukkan:
    - **Reka Bentuk Berorientasikan Objek**: Kelas asas dengan pewarisan khusus
    - **Seni Bina Berasaskan Acara**: Corak pub/sub untuk penggandingan longgar
    - **Kerangka Animasi**: Gelung permainan dengan kemas kini bingkai yang konsisten
    - **Pengendalian Input**: Acara papan kekunci dengan pencegahan lalai
    - **Pengurusan Aset**: Pemuatan imej dan rendering sprite

    **Corak Profesional**: Anda telah melaksanakan:
    - **Pemisahan Kebimbangan**: Input, logik, dan rendering dipisahkan
    - **Polimorfisme**: Semua objek permainan berkongsi antara muka lukisan yang sama
    - **Penghantaran Mesej**: Komunikasi bersih antara komponen
    - **Pengurusan Sumber**: Pengendalian sprite dan animasi yang cekap

    Musuh anda sepatutnya mula maju ke arah kapal angkasa hero anda!
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

    dan akhirnya, tambah fungsi `drawGameObjects()` untuk memulakan lukisan:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Musuh anda sepatutnya mula maju ke arah kapal angkasa hero anda!

---

## Cabaran Ejen GitHub Copilot 🚀

Berikut adalah cabaran yang akan meningkatkan kemasan permainan anda: menambah sempadan dan kawalan yang lancar. Pada masa ini, hero anda boleh terbang keluar dari skrin, dan pergerakan mungkin terasa terputus-putus.

**Misi Anda:** Jadikan kapal angkasa anda terasa lebih realistik dengan melaksanakan sempadan skrin dan pergerakan yang lancar. Ini serupa dengan bagaimana sistem kawalan penerbangan NASA menghalang kapal angkasa daripada melebihi parameter operasi yang selamat.

**Apa yang perlu dibina:** Cipta sistem yang memastikan kapal angkasa hero anda kekal di skrin, dan buat kawalan terasa lancar. Apabila pemain menekan kekunci anak panah, kapal itu sepatutnya meluncur secara berterusan dan bukannya bergerak dalam langkah diskret. Pertimbangkan untuk menambah maklum balas visual apabila kapal mencapai sempadan skrin – mungkin kesan halus untuk menunjukkan tepi kawasan permainan.

Ketahui lebih lanjut tentang [mod ejen](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## 🚀 Cabaran

Pengorganisasian kod menjadi semakin penting apabila projek berkembang. Anda mungkin telah perasan fail anda menjadi sesak dengan fungsi, pembolehubah, dan kelas yang bercampur-campur. Ini mengingatkan saya kepada bagaimana jurutera yang mengatur kod misi Apollo perlu mencipta sistem yang jelas dan boleh diselenggara yang boleh digunakan oleh pelbagai pasukan secara serentak.

**Misi Anda:**
Fikir seperti seorang arkitek perisian. Bagaimana anda akan mengatur kod anda supaya enam bulan dari sekarang, anda (atau rakan sepasukan) boleh memahami apa yang sedang berlaku? Walaupun semuanya kekal dalam satu fail buat masa ini, anda boleh mencipta pengorganisasian yang lebih baik:

- **Mengelompokkan fungsi berkaitan** bersama dengan tajuk komen yang jelas
- **Memisahkan kebimbangan** - simpan logik permainan berasingan daripada rendering
- **Menggunakan konvensi penamaan** yang konsisten untuk pembolehubah dan fungsi
- **Mencipta modul** atau namespace untuk mengatur aspek permainan yang berbeza
- **Menambah dokumentasi** yang menerangkan tujuan setiap bahagian utama

**Soalan refleksi:**
- Bahagian mana dalam kod anda yang paling sukar difahami apabila anda kembali kepadanya?
- Bagaimana anda boleh mengatur kod anda supaya lebih mudah untuk orang lain menyumbang?
- Apa yang akan berlaku jika anda ingin menambah ciri baru seperti power-up atau jenis musuh yang berbeza?

## Kuiz Selepas Kuliah

[Kuiz selepas kuliah](https://ff-quizzes.netlify.app/web/quiz/34)

## Ulasan & Kajian Kendiri

Kami telah membina semuanya dari awal, yang sangat bagus untuk pembelajaran, tetapi berikut adalah rahsia kecil – terdapat beberapa kerangka kerja JavaScript yang hebat di luar sana yang boleh menangani banyak kerja berat untuk anda. Setelah anda merasa selesa dengan asas yang telah kami bahas, ia berbaloi untuk [meneroka apa yang tersedia](https://github.com/collections/javascript-game-engines).

Fikirkan kerangka kerja seperti mempunyai kotak alat yang lengkap dan bukannya membuat setiap alat secara manual. Mereka boleh menyelesaikan banyak cabaran pengorganisasian kod yang telah kita bincangkan, serta menawarkan ciri-ciri yang akan mengambil masa berminggu-minggu untuk dibina sendiri.

**Perkara yang berbaloi untuk diteroka:**
- Bagaimana enjin permainan mengatur kod – anda akan kagum dengan corak pintar yang mereka gunakan
- Trik prestasi untuk membuat permainan kanvas berjalan dengan lancar  
- Ciri-ciri JavaScript moden yang boleh menjadikan kod anda lebih bersih dan mudah diselenggara
- Pendekatan yang berbeza untuk menguruskan objek permainan dan hubungan mereka

## 🎯 Garis Masa Penguasaan Animasi Permainan Anda

```mermaid
timeline
    title Game Animation & Interaction Learning Progression
    
    section Movement Fundamentals (20 minutes)
        Animation Principles: Frame-based animation
                            : Position updates
                            : Coordinate systems
                            : Smooth movement
        
    section Event Systems (25 minutes)
        User Input: Keyboard event handling
                  : Default behavior prevention
                  : Event object properties
                  : Window-level listening
        
    section Game Architecture (30 minutes)
        Object Design: Inheritance patterns
                     : Base class creation
                     : Specialized behaviors
                     : Polymorphic interfaces
        
    section Communication Patterns (35 minutes)
        Pub/Sub Implementation: Event emitters
                              : Message constants
                              : Loose coupling
                              : System integration
        
    section Game Loop Mastery (40 minutes)
        Real-time Systems: Frame rate control
                         : Update/render cycle
                         : State management
                         : Performance optimization
        
    section Advanced Techniques (45 minutes)
        Professional Features: Collision detection
                             : Physics simulation
                             : State machines
                             : Component systems
        
    section Game Engine Concepts (1 week)
        Framework Understanding: Entity-component systems
                               : Scene graphs
                               : Asset pipelines
                               : Performance profiling
        
    section Production Skills (1 month)
        Professional Development: Code organization
                                : Team collaboration
                                : Testing strategies
                                : Deployment optimization
```

### 🛠️ Ringkasan Alat Pembangunan Permainan Anda

Selepas menyelesaikan pelajaran ini, anda kini telah menguasai:
- **Prinsip Animasi**: Pergerakan berasaskan bingkai dan peralihan yang lancar
- **Pengaturcaraan Berasaskan Acara**: Pengendalian input papan kekunci dengan pengurusan acara yang betul
- **Reka Bentuk Berorientasikan Objek**: Hierarki pewarisan dan antara muka polimorfik
- **Corak Komunikasi**: Seni bina pub/sub untuk kod yang boleh diselenggara
- **Seni Bina Gelung Permainan**: Kemas kini masa nyata dan kitaran rendering
- **Sistem Input**: Pemetaan kawalan pengguna dengan pencegahan tingkah laku lalai
- **Pengurusan Aset**: Pemuatan sprite dan teknik rendering yang cekap

### ⚡ **Apa yang Boleh Anda Lakukan dalam 5 Minit Seterusnya**
- [ ] Buka konsol pelayar dan cuba `addEventListener('keydown', console.log)` untuk melihat acara papan kekunci
- [ ] Cipta elemen div ringkas dan gerakkannya menggunakan kekunci anak panah
- [ ] Bereksperimen dengan `setInterval` untuk mencipta pergerakan berterusan
- [ ] Cuba mencegah tingkah laku lalai dengan `event.preventDefault()`

### 🎯 **Apa yang Boleh Anda Capai Dalam Jam Ini**
- [ ] Lengkapkan kuiz selepas pelajaran dan fahami pengaturcaraan berasaskan acara
- [ ] Bina kapal angkasa hero yang bergerak dengan kawalan papan kekunci penuh
- [ ] Laksanakan corak pergerakan musuh yang lancar
- [ ] Tambah sempadan untuk menghalang objek permainan daripada meninggalkan skrin
- [ ] Cipta pengesanan perlanggaran asas antara objek permainan

### 📅 **Perjalanan Animasi Anda Sepanjang Minggu**
- [ ] Lengkapkan permainan angkasa penuh dengan pergerakan dan interaksi yang kemas
- [ ] Tambah corak pergerakan lanjutan seperti lengkung, pecutan, dan fizik
- [ ] Laksanakan peralihan yang lancar dan fungsi easing
- [ ] Cipta kesan partikel dan sistem maklum balas visual
- [ ] Optimumkan prestasi permainan untuk permainan 60fps yang lancar
- [ ] Tambah kawalan sentuhan mudah alih dan reka bentuk responsif

### 🌟 **Pembangunan Interaktif Anda Sepanjang Bulan**
- [ ] Bina aplikasi interaktif yang kompleks dengan sistem animasi lanjutan
- [ ] Pelajari perpustakaan animasi seperti GSAP atau cipta enjin animasi anda sendiri
- [ ] Menyumbang kepada projek pembangunan permainan dan animasi sumber terbuka
- [ ] Kuasai pengoptimuman prestasi untuk aplikasi intensif grafik
- [ ] Cipta kandungan pendidikan tentang pembangunan permainan dan animasi
- [ ] Bina portfolio yang mempamerkan kemahiran pengaturcaraan interaktif yang maju

**Aplikasi Dunia Sebenar**: Kemahiran animasi permainan anda digunakan secara langsung untuk:
- **Aplikasi Web Interaktif**: Papan pemuka dinamik dan antara muka masa nyata
- **Visualisasi Data**: Carta animasi dan grafik interaktif
- **Perisian Pendidikan**: Simulasi interaktif dan alat pembelajaran
- **Pembangunan Mudah Alih**: Permainan berasaskan sentuhan dan pengendalian isyarat
- **Aplikasi Desktop**: Aplikasi Electron dengan animasi yang lancar
- **Animasi Web**: Perpustakaan animasi CSS dan JavaScript

**Kemahiran Profesional Diperoleh**: Anda kini boleh:
- **Mereka Bentuk** sistem berasaskan acara yang berskala dengan kerumitan
- **Melaksanakan** animasi yang lancar menggunakan prinsip matematik
- **Menyahpepijat** sistem interaksi kompleks menggunakan alat pembangun pelayar
- **Mengoptimumkan** prestasi permainan untuk pelbagai peranti dan pelayar
- **Mereka Bentuk** struktur kod yang boleh diselenggara menggunakan corak yang terbukti

**Konsep Pembangunan Permainan Dikuasai**:
- **Pengurusan Kadar Bingkai**: Memahami FPS dan kawalan masa
- **Pengendalian Input**: Sistem papan kekunci dan acara merentas platform
- **Kitaran Hayat Objek**: Corak penciptaan, kemas kini, dan pemusnahan
- **Penyelarasan Keadaan**: Menjaga keadaan permainan konsisten merentas bingkai
- **Seni Bina Acara**: Komunikasi yang tidak bergantung antara sistem permainan

**Tahap Seterusnya**: Anda bersedia untuk menambah pengesanan perlanggaran, sistem pemarkahan, kesan bunyi, atau meneroka kerangka kerja permainan moden seperti Phaser atau Three.js!

🌟 **Pencapaian Terkunci**: Anda telah membina sistem permainan interaktif lengkap dengan corak seni bina profesional!

## Tugasan

[Komen kod anda](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.