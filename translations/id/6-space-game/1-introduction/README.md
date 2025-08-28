<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-27T22:43:39+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "id"
}
-->
# Membangun Game Luar Angkasa Bagian 1: Pengantar

![video](../../../../6-space-game/images/pewpew.gif)

## Kuis Sebelum Kuliah

[Kuis sebelum kuliah](https://ff-quizzes.netlify.app/web/quiz/29)

### Pewarisan dan Komposisi dalam Pengembangan Game

Dalam pelajaran sebelumnya, Anda tidak terlalu perlu memikirkan arsitektur desain aplikasi yang Anda buat, karena proyeknya sangat kecil. Namun, ketika aplikasi Anda berkembang dalam ukuran dan cakupan, keputusan arsitektur menjadi lebih penting. Ada dua pendekatan utama untuk membuat aplikasi yang lebih besar dalam JavaScript: *komposisi* atau *pewarisan*. Keduanya memiliki kelebihan dan kekurangan, tetapi mari kita jelaskan dalam konteks sebuah game.

✅ Salah satu buku pemrograman paling terkenal yang pernah ditulis berkaitan dengan [pola desain](https://en.wikipedia.org/wiki/Design_Patterns).

Dalam sebuah game, Anda memiliki `objek game`, yaitu objek yang ada di layar. Ini berarti mereka memiliki lokasi dalam sistem koordinat kartesius, yang ditandai dengan memiliki koordinat `x` dan `y`. Saat Anda mengembangkan game, Anda akan menyadari bahwa semua objek game Anda memiliki properti standar, yang umum untuk setiap game yang Anda buat, yaitu elemen-elemen yang:

- **berbasis lokasi** Sebagian besar, jika tidak semua, elemen game berbasis lokasi. Ini berarti mereka memiliki lokasi, yaitu `x` dan `y`.
- **dapat bergerak** Ini adalah objek yang dapat berpindah ke lokasi baru. Biasanya ini adalah pahlawan, monster, atau NPC (karakter non-pemain), tetapi bukan, misalnya, objek statis seperti pohon.
- **menghancurkan diri sendiri** Objek-objek ini hanya ada untuk jangka waktu tertentu sebelum mereka siap untuk dihapus. Biasanya ini diwakili oleh boolean `dead` atau `destroyed` yang memberi sinyal kepada mesin game bahwa objek ini tidak perlu lagi dirender.
- **cool-down** 'Cool-down' adalah properti khas di antara objek yang berumur pendek. Contoh khasnya adalah sepotong teks atau efek grafis seperti ledakan yang hanya terlihat selama beberapa milidetik.

✅ Pikirkan tentang game seperti Pac-Man. Bisakah Anda mengidentifikasi empat jenis objek yang disebutkan di atas dalam game ini?

### Mengekspresikan Perilaku

Semua yang dijelaskan di atas adalah perilaku yang dapat dimiliki oleh objek game. Jadi bagaimana kita mengkodekan perilaku tersebut? Kita dapat mengekspresikan perilaku ini sebagai metode yang terkait dengan kelas atau objek.

**Kelas**

Idenya adalah menggunakan `kelas` bersama dengan `pewarisan` untuk menambahkan perilaku tertentu ke sebuah kelas.

✅ Pewarisan adalah konsep penting untuk dipahami. Pelajari lebih lanjut di [artikel MDN tentang pewarisan](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Dalam kode, objek game biasanya dapat terlihat seperti ini:

```javascript

//set up the class GameObject
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}

//this class will extend the GameObject's inherent class properties
class Movable extends GameObject {
  constructor(x,y, type) {
    super(x,y, type)
  }

//this movable object can be moved on the screen
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}

//this is a specific class that extends the Movable class, so it can take advantage of all the properties that it inherits
class Hero extends Movable {
  constructor(x,y) {
    super(x,y, 'Hero')
  }
}

//this class, on the other hand, only inherits the GameObject properties
class Tree extends GameObject {
  constructor(x,y) {
    super(x,y, 'Tree')
  }
}

//a hero can move...
const hero = new Hero();
hero.moveTo(5,5);

//but a tree cannot
const tree = new Tree();
```

✅ Luangkan beberapa menit untuk membayangkan kembali pahlawan Pac-Man (Inky, Pinky, atau Blinky, misalnya) dan bagaimana mereka akan ditulis dalam JavaScript.

**Komposisi**

Cara lain untuk menangani pewarisan objek adalah dengan menggunakan *Komposisi*. Kemudian, objek mengekspresikan perilaku mereka seperti ini:

```javascript
//create a constant gameObject
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

//...and a constant movable
const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
//then the constant movableObject is composed of the gameObject and movable constants
const movableObject = {...gameObject, ...movable};

//then create a function to create a new Hero who inherits the movableObject properties
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  }
}
//...and a static object that inherits only the gameObject properties
function createStatic(x, y, type) {
  return {
    ...gameObject
    x,
    y,
    type
  }
}
//create the hero and move it
const hero = createHero(10,10);
hero.moveTo(5,5);
//and create a static tree which only stands around
const tree = createStatic(0,0, 'Tree'); 
```

**Pola mana yang harus saya gunakan?**

Terserah Anda untuk memilih pola mana yang akan digunakan. JavaScript mendukung kedua paradigma ini.

--

Pola lain yang umum dalam pengembangan game adalah menangani pengalaman pengguna dan kinerja game.

## Pola Pub/Sub

✅ Pub/Sub adalah singkatan dari 'publish-subscribe'

Pola ini membahas gagasan bahwa bagian-bagian yang berbeda dari aplikasi Anda tidak perlu saling mengetahui. Mengapa demikian? Ini membuat lebih mudah untuk melihat apa yang sedang terjadi secara umum jika berbagai bagian dipisahkan. Ini juga membuat lebih mudah untuk tiba-tiba mengubah perilaku jika diperlukan. Bagaimana cara kita mencapainya? Kita melakukannya dengan menetapkan beberapa konsep:

- **pesan**: Pesan biasanya berupa string teks yang disertai dengan payload opsional (sepotong data yang menjelaskan tentang apa pesan tersebut). Pesan khas dalam game bisa berupa `KEY_PRESSED_ENTER`.
- **publisher**: Elemen ini *menerbitkan* pesan dan mengirimkannya ke semua subscriber.
- **subscriber**: Elemen ini *mendengarkan* pesan tertentu dan melakukan tugas tertentu sebagai hasil dari menerima pesan tersebut, seperti menembakkan laser.

Implementasinya cukup kecil dalam ukuran tetapi merupakan pola yang sangat kuat. Berikut adalah cara implementasinya:

```javascript
//set up an EventEmitter class that contains listeners
class EventEmitter {
  constructor() {
    this.listeners = {};
  }
//when a message is received, let the listener to handle its payload
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
//when a message is sent, send it to a listener with some payload
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(l => l(message, payload))
    }
  }
}

```

Untuk menggunakan kode di atas, kita dapat membuat implementasi yang sangat kecil:

```javascript
//set up a message structure
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT'
};
//invoke the eventEmitter you set up above
const eventEmitter = new EventEmitter();
//set up a hero
const hero = createHero(0,0);
//let the eventEmitter know to watch for messages pertaining to the hero moving left, and act on it
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});

//set up the window to listen for the keyup event, specifically if the left arrow is hit, emit a message to move the hero left
window.addEventListener('keyup', (evt) => {
  if (evt.key === 'ArrowLeft') {
    eventEmitter.emit(Messages.HERO_MOVE_LEFT)
  }
});
```

Di atas, kita menghubungkan event keyboard, `ArrowLeft`, dan mengirimkan pesan `HERO_MOVE_LEFT`. Kita mendengarkan pesan tersebut dan menggerakkan `hero` sebagai hasilnya. Kekuatan pola ini adalah bahwa event listener dan hero tidak saling mengetahui. Anda dapat memetakan ulang `ArrowLeft` ke tombol `A`. Selain itu, Anda dapat melakukan sesuatu yang sama sekali berbeda pada `ArrowLeft` dengan membuat beberapa pengeditan pada fungsi `on` eventEmitter:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Saat hal-hal menjadi lebih rumit ketika game Anda berkembang, pola ini tetap sama dalam kompleksitas dan kode Anda tetap bersih. Sangat disarankan untuk mengadopsi pola ini.

---

## 🚀 Tantangan

Pikirkan tentang bagaimana pola pub-sub dapat meningkatkan sebuah game. Bagian mana yang harus mengirimkan event, dan bagaimana game harus bereaksi terhadapnya? Sekarang adalah kesempatan Anda untuk menjadi kreatif, memikirkan sebuah game baru dan bagaimana bagian-bagiannya mungkin berperilaku.

## Kuis Setelah Kuliah

[Kuis setelah kuliah](https://ff-quizzes.netlify.app/web/quiz/30)

## Tinjauan & Studi Mandiri

Pelajari lebih lanjut tentang Pub/Sub dengan [membacanya](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Tugas

[Mock up sebuah game](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diingat bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.