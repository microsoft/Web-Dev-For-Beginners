<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-24T14:16:51+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "id"
}
-->
# Membangun Game Luar Angkasa Bagian 1: Pengantar

![Animasi game luar angkasa yang menunjukkan gameplay](../../../../6-space-game/images/pewpew.gif)

Seperti misi NASA yang mengoordinasikan berbagai sistem selama peluncuran luar angkasa, kita akan membangun sebuah game luar angkasa yang menunjukkan bagaimana berbagai bagian dari program dapat bekerja bersama dengan mulus. Sambil menciptakan sesuatu yang bisa dimainkan, Anda akan mempelajari konsep pemrograman penting yang berlaku untuk setiap proyek perangkat lunak.

Kita akan menjelajahi dua pendekatan mendasar untuk mengorganisasi kode: inheritance dan composition. Ini bukan hanya konsep akademis – ini adalah pola yang sama yang mendukung segalanya mulai dari video game hingga sistem perbankan. Kita juga akan menerapkan sistem komunikasi yang disebut pub/sub yang bekerja seperti jaringan komunikasi yang digunakan di pesawat luar angkasa, memungkinkan berbagai komponen berbagi informasi tanpa menciptakan ketergantungan.

Pada akhir seri ini, Anda akan memahami cara membangun aplikasi yang dapat berkembang dan beradaptasi – baik Anda mengembangkan game, aplikasi web, atau sistem perangkat lunak lainnya.

## Kuis Pra-Pelajaran

[Kuis pra-pelajaran](https://ff-quizzes.netlify.app/web/quiz/29)

## Inheritance dan Composition dalam Pengembangan Game

Saat proyek menjadi lebih kompleks, pengorganisasian kode menjadi sangat penting. Apa yang dimulai sebagai skrip sederhana dapat menjadi sulit untuk dikelola tanpa struktur yang tepat – seperti bagaimana misi Apollo membutuhkan koordinasi yang hati-hati antara ribuan komponen.

Kita akan menjelajahi dua pendekatan mendasar untuk mengorganisasi kode: inheritance dan composition. Masing-masing memiliki keunggulan yang berbeda, dan memahami keduanya membantu Anda memilih pendekatan yang tepat untuk situasi yang berbeda. Kita akan mendemonstrasikan konsep-konsep ini melalui game luar angkasa kita, di mana pahlawan, musuh, power-up, dan objek lainnya harus berinteraksi secara efisien.

✅ Salah satu buku pemrograman paling terkenal yang pernah ditulis berkaitan dengan [design patterns](https://en.wikipedia.org/wiki/Design_Patterns).

Dalam setiap game, Anda memiliki `game objects` – elemen interaktif yang mengisi dunia game Anda. Pahlawan, musuh, power-up, dan efek visual semuanya adalah objek game. Masing-masing ada di koordinat layar tertentu menggunakan nilai `x` dan `y`, mirip dengan memplot titik pada bidang koordinat.

Meskipun secara visual berbeda, objek-objek ini sering berbagi perilaku mendasar:

- **Mereka ada di suatu tempat** – Setiap objek memiliki koordinat x dan y sehingga game tahu di mana harus menggambarnya
- **Banyak yang bisa bergerak** – Pahlawan berlari, musuh mengejar, peluru terbang melintasi layar
- **Mereka memiliki masa hidup** – Beberapa tetap ada selamanya, yang lain (seperti ledakan) muncul sebentar dan menghilang
- **Mereka bereaksi terhadap sesuatu** – Ketika benda-benda bertabrakan, power-up dikumpulkan, bilah kesehatan diperbarui

✅ Pikirkan tentang game seperti Pac-Man. Bisakah Anda mengidentifikasi empat jenis objek yang tercantum di atas dalam game ini?

### Mengekspresikan Perilaku Melalui Kode

Sekarang Anda memahami perilaku umum yang dimiliki objek game, mari kita jelajahi cara menerapkan perilaku ini dalam JavaScript. Anda dapat mengekspresikan perilaku objek melalui metode yang terlampir pada kelas atau objek individu, dan ada beberapa pendekatan yang dapat dipilih.

**Pendekatan Berbasis Kelas**

Kelas dan inheritance menyediakan pendekatan terstruktur untuk mengorganisasi objek game. Seperti sistem klasifikasi taksonomi yang dikembangkan oleh Carl Linnaeus, Anda mulai dengan kelas dasar yang berisi properti umum, lalu membuat kelas khusus yang mewarisi dasar-dasar ini sambil menambahkan kemampuan spesifik.

✅ Inheritance adalah konsep penting untuk dipahami. Pelajari lebih lanjut di [artikel MDN tentang inheritance](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Berikut cara Anda dapat menerapkan objek game menggunakan kelas dan inheritance:

```javascript
// Step 1: Create the base GameObject class
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}
```

**Mari kita uraikan langkah demi langkah:**
- Kita membuat template dasar yang dapat digunakan setiap objek game
- Constructor menyimpan di mana objek berada (`x`, `y`) dan jenisnya
- Ini menjadi dasar yang akan dibangun oleh semua objek game Anda

```javascript
// Step 2: Add movement capability through inheritance
class Movable extends GameObject {
  constructor(x, y, type) {
    super(x, y, type); // Call parent constructor
  }

  // Add the ability to move to a new position
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
```

**Dalam kode di atas, kita telah:**
- **Memperluas** kelas GameObject untuk menambahkan fungsi gerakan
- **Memanggil** constructor induk menggunakan `super()` untuk menginisialisasi properti yang diwarisi
- **Menambahkan** metode `moveTo()` yang memperbarui posisi objek

```javascript
// Step 3: Create specific game object types
class Hero extends Movable {
  constructor(x, y) {
    super(x, y, 'Hero'); // Set type automatically
  }
}

class Tree extends GameObject {
  constructor(x, y) {
    super(x, y, 'Tree'); // Trees don't need movement
  }
}

// Step 4: Use your game objects
const hero = new Hero(0, 0);
hero.moveTo(5, 5); // Hero can move!

const tree = new Tree(10, 15);
// tree.moveTo() would cause an error - trees can't move
```

**Memahami konsep-konsep ini:**
- **Menciptakan** jenis objek khusus yang mewarisi perilaku yang sesuai
- **Menunjukkan** bagaimana inheritance memungkinkan inklusi fitur selektif
- **Menunjukkan** bahwa pahlawan dapat bergerak sementara pohon tetap diam
- **Mengilustrasikan** bagaimana hierarki kelas mencegah tindakan yang tidak sesuai

✅ Luangkan beberapa menit untuk membayangkan kembali pahlawan Pac-Man (Inky, Pinky, atau Blinky, misalnya) dan bagaimana itu akan ditulis dalam JavaScript.

**Pendekatan Komposisi**

Komposisi mengikuti filosofi desain modular, mirip dengan bagaimana insinyur merancang pesawat luar angkasa dengan komponen yang dapat diganti. Alih-alih mewarisi dari kelas induk, Anda menggabungkan perilaku spesifik untuk menciptakan objek dengan fungsi yang tepat yang mereka butuhkan. Pendekatan ini menawarkan fleksibilitas tanpa batasan hierarki yang kaku.

```javascript
// Step 1: Create base behavior objects
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
};
```

**Berikut yang dilakukan kode ini:**
- **Mendefinisikan** objek dasar `gameObject` dengan properti posisi dan jenis
- **Menciptakan** objek perilaku `movable` terpisah dengan fungsi gerakan
- **Memisahkan** perhatian dengan menjaga data posisi dan logika gerakan tetap independen

```javascript
// Step 2: Compose objects by combining behaviors
const movableObject = { ...gameObject, ...movable };

// Step 3: Create factory functions for different object types
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  };
}

function createStatic(x, y, type) {
  return {
    ...gameObject,
    x,
    y,
    type
  };
}
```

**Dalam kode di atas, kita telah:**
- **Menggabungkan** properti objek dasar dengan perilaku gerakan menggunakan sintaks spread
- **Menciptakan** fungsi pabrik yang mengembalikan objek yang disesuaikan
- **Memungkinkan** pembuatan objek yang fleksibel tanpa hierarki kelas yang kaku
- **Mengizinkan** objek memiliki perilaku yang tepat yang mereka butuhkan

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Poin-poin penting yang perlu diingat:**
- **Menggabungkan** objek dengan mencampur perilaku daripada mewarisinya
- **Memberikan** lebih banyak fleksibilitas daripada hierarki inheritance yang kaku
- **Mengizinkan** objek memiliki fitur yang tepat yang mereka butuhkan
- **Menggunakan** sintaks spread JavaScript modern untuk kombinasi objek yang bersih
```

**Which Pattern Should You Choose?**

> 💡 **Pro Tip**: Both patterns have their place in modern JavaScript development. Classes work well for clearly defined hierarchies, while composition shines when you need maximum flexibility.
> 
**Here's when to use each approach:**
- **Choose** inheritance when you have clear "is-a" relationships (a Hero *is-a* Movable object)
- **Select** composition when you need "has-a" relationships (a Hero *has* movement abilities)
- **Consider** your team's preferences and project requirements
- **Remember** that you can mix both approaches in the same application

## Communication Patterns: The Pub/Sub System

As applications grow complex, managing communication between components becomes challenging. The publish-subscribe pattern (pub/sub) solves this problem using principles similar to radio broadcasting – one transmitter can reach multiple receivers without knowing who's listening.

Consider what happens when a hero takes damage: the health bar updates, sound effects play, visual feedback appears. Rather than coupling the hero object directly to these systems, pub/sub allows the hero to broadcast a "damage taken" message. Any system that needs to respond can subscribe to this message type and react accordingly.

✅ **Pub/Sub** stands for 'publish-subscribe'

### Understanding the Pub/Sub Architecture

The pub/sub pattern keeps different parts of your application loosely coupled, meaning they can work together without being directly dependent on each other. This separation makes your code more maintainable, testable, and flexible to changes.

**The key players in pub/sub:**
- **Messages** – Simple text labels like `'PLAYER_SCORED'` that describe what happened (plus any extra info)
- **Publishers** – The objects that shout out "Something happened!" to anyone who's listening
- **Subscribers** – The objects that say "I care about that event" and react when it happens
- **Event System** – The middleman that makes sure messages get to the right listeners

### Building an Event System

Let's create a simple but powerful event system that demonstrates these concepts:

```javascript
// Step 1: Create the EventEmitter class
class EventEmitter {
  constructor() {
    this.listeners = {}; // Store all event listeners
  }
  
  // Register a listener for a specific message type
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
  
  // Send a message to all registered listeners
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(listener => {
        listener(message, payload);
      });
    }
  }
}
```

**Menguraikan apa yang terjadi di sini:**
- **Menciptakan** sistem manajemen acara pusat menggunakan kelas sederhana
- **Menyimpan** pendengar dalam objek yang diorganisasi berdasarkan jenis pesan
- **Mendaftarkan** pendengar baru menggunakan metode `on()`
- **Menyiarkan** pesan ke semua pendengar yang tertarik menggunakan `emit()`
- **Mendukung** payload data opsional untuk menyampaikan informasi yang relevan

### Menggabungkan Semuanya: Contoh Praktis

Baiklah, mari kita lihat ini dalam aksi! Kita akan membangun sistem gerakan sederhana yang menunjukkan betapa bersih dan fleksibelnya pub/sub:

```javascript
// Step 1: Define your message types
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT',
  HERO_MOVE_RIGHT: 'HERO_MOVE_RIGHT',
  ENEMY_SPOTTED: 'ENEMY_SPOTTED'
};

// Step 2: Create your event system and game objects
const eventEmitter = new EventEmitter();
const hero = createHero(0, 0);
```

**Berikut yang dilakukan kode ini:**
- **Mendefinisikan** objek konstanta untuk mencegah kesalahan ketik dalam nama pesan
- **Menciptakan** instance event emitter untuk menangani semua komunikasi
- **Menginisialisasi** objek pahlawan di posisi awal

```javascript
// Step 3: Set up event listeners (subscribers)
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.moveTo(hero.x - 5, hero.y);
  console.log(`Hero moved to position: ${hero.x}, ${hero.y}`);
});

eventEmitter.on(Messages.HERO_MOVE_RIGHT, () => {
  hero.moveTo(hero.x + 5, hero.y);
  console.log(`Hero moved to position: ${hero.x}, ${hero.y}`);
});
```

**Dalam kode di atas, kita telah:**
- **Mendaftarkan** pendengar acara yang merespons pesan gerakan
- **Memperbarui** posisi pahlawan berdasarkan arah gerakan
- **Menambahkan** logging konsol untuk melacak perubahan posisi pahlawan
- **Memisahkan** logika gerakan dari penanganan input

```javascript
// Step 4: Connect keyboard input to events (publishers)
window.addEventListener('keydown', (event) => {
  switch(event.key) {
    case 'ArrowLeft':
      eventEmitter.emit(Messages.HERO_MOVE_LEFT);
      break;
    case 'ArrowRight':
      eventEmitter.emit(Messages.HERO_MOVE_RIGHT);
      break;
  }
});
```

**Memahami konsep-konsep ini:**
- **Menghubungkan** input keyboard ke acara game tanpa keterikatan yang ketat
- **Memungkinkan** sistem input berkomunikasi dengan objek game secara tidak langsung
- **Mengizinkan** beberapa sistem merespons acara keyboard yang sama
- **Mempermudah** perubahan pengikatan tombol atau penambahan metode input baru

> 💡 **Tips Pro**: Keindahan pola ini adalah fleksibilitas! Anda dapat dengan mudah menambahkan efek suara, guncangan layar, atau efek partikel hanya dengan menambahkan lebih banyak pendengar acara – tidak perlu memodifikasi kode keyboard atau gerakan yang ada.
> 
**Inilah alasan Anda akan menyukai pendekatan ini:**
- Menambahkan fitur baru menjadi sangat mudah – cukup dengarkan acara yang Anda pedulikan
- Banyak hal dapat bereaksi terhadap acara yang sama tanpa saling mengganggu
- Pengujian menjadi jauh lebih sederhana karena setiap bagian bekerja secara independen
- Ketika sesuatu rusak, Anda tahu persis di mana mencarinya

### Mengapa Pub/Sub Dapat Berkembang dengan Efektif

Pola pub/sub mempertahankan kesederhanaan saat aplikasi menjadi lebih kompleks. Baik mengelola puluhan musuh, pembaruan UI dinamis, atau sistem suara, pola ini menangani peningkatan skala tanpa perubahan arsitektur. Fitur baru terintegrasi ke dalam sistem acara yang ada tanpa memengaruhi fungsionalitas yang sudah ada.

> ⚠️ **Kesalahan Umum**: Jangan membuat terlalu banyak jenis pesan spesifik di awal. Mulailah dengan kategori yang luas dan perbaiki seiring kebutuhan game Anda menjadi lebih jelas.
> 
**Praktik terbaik yang harus diikuti:**
- **Mengelompokkan** pesan terkait ke dalam kategori logis
- **Menggunakan** nama deskriptif yang dengan jelas menunjukkan apa yang terjadi
- **Menjaga** payload pesan tetap sederhana dan fokus
- **Mendokumentasikan** jenis pesan Anda untuk kolaborasi tim

---

## Tantangan GitHub Copilot Agent 🚀

Gunakan mode Agent untuk menyelesaikan tantangan berikut:

**Deskripsi:** Buat sistem objek game sederhana menggunakan inheritance dan pola pub/sub. Anda akan mengimplementasikan game dasar di mana berbagai objek dapat berkomunikasi melalui acara tanpa saling mengetahui secara langsung.

**Prompt:** Buat sistem game JavaScript dengan persyaratan berikut: 1) Buat kelas GameObject dasar dengan koordinat x, y dan properti jenis. 2) Buat kelas Hero yang memperluas GameObject dan dapat bergerak. 3) Buat kelas Enemy yang memperluas GameObject dan dapat mengejar pahlawan. 4) Implementasikan kelas EventEmitter untuk pola pub/sub. 5) Atur pendengar acara sehingga ketika pahlawan bergerak, musuh di sekitarnya menerima acara 'HERO_MOVED' dan memperbarui posisi mereka untuk bergerak menuju pahlawan. Sertakan pernyataan console.log untuk menunjukkan komunikasi antara objek.

Pelajari lebih lanjut tentang [mode agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## 🚀 Tantangan

Pertimbangkan bagaimana pola pub-sub dapat meningkatkan arsitektur game. Identifikasi komponen mana yang harus mengirimkan acara dan bagaimana sistem harus merespons. Rancang konsep game dan petakan pola komunikasi antara komponennya.

## Kuis Pasca-Pelajaran

[Kuis pasca-pelajaran](https://ff-quizzes.netlify.app/web/quiz/30)

## Tinjauan & Studi Mandiri

Pelajari lebih lanjut tentang Pub/Sub dengan [membacanya](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Tugas

[Desain game](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang timbul dari penggunaan terjemahan ini.