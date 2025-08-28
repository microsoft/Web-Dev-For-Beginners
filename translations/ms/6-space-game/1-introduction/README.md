<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d9da6dc61fb712b29f65e108c79b8a5d",
  "translation_date": "2025-08-27T22:43:55+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "ms"
}
-->
# Membina Permainan Angkasa Bahagian 1: Pengenalan

![video](../../../../6-space-game/images/pewpew.gif)

## Kuiz Pra-Kuliah

[Kuiz pra-kuliah](https://ff-quizzes.netlify.app/web/quiz/29)

### Pewarisan dan Komposisi dalam pembangunan permainan

Dalam pelajaran sebelum ini, tidak banyak keperluan untuk memikirkan tentang reka bentuk seni bina aplikasi yang anda bina, kerana projek-projek tersebut berskala kecil. Walau bagaimanapun, apabila aplikasi anda berkembang dari segi saiz dan skop, keputusan seni bina menjadi lebih penting. Terdapat dua pendekatan utama untuk mencipta aplikasi yang lebih besar dalam JavaScript: *komposisi* atau *pewarisan*. Kedua-duanya mempunyai kelebihan dan kekurangan, tetapi mari kita jelaskan dalam konteks permainan.

✅ Salah satu buku pengaturcaraan paling terkenal yang pernah ditulis berkaitan dengan [corak reka bentuk](https://en.wikipedia.org/wiki/Design_Patterns).

Dalam permainan, anda mempunyai `objek permainan` yang merupakan objek yang wujud di skrin. Ini bermakna mereka mempunyai lokasi dalam sistem koordinat Cartesian, yang dicirikan oleh koordinat `x` dan `y`. Semasa anda membangunkan permainan, anda akan perasan bahawa semua objek permainan anda mempunyai sifat standard, yang biasa untuk setiap permainan yang anda cipta, iaitu elemen-elemen yang:

- **berasaskan lokasi** Kebanyakan, jika tidak semua, elemen permainan adalah berasaskan lokasi. Ini bermakna mereka mempunyai lokasi, iaitu `x` dan `y`.
- **boleh bergerak** Ini adalah objek yang boleh bergerak ke lokasi baru. Biasanya ini adalah hero, raksasa atau NPC (watak bukan pemain), tetapi bukan, sebagai contoh, objek statik seperti pokok.
- **memusnahkan diri sendiri** Objek ini hanya wujud untuk tempoh masa tertentu sebelum mereka bersedia untuk dihapuskan. Biasanya ini diwakili oleh boolean `mati` atau `dimusnahkan` yang memberi isyarat kepada enjin permainan bahawa objek ini tidak perlu lagi dipaparkan.
- **masa rehat** 'Masa rehat' adalah sifat biasa di kalangan objek jangka pendek. Contoh tipikal adalah sekeping teks atau kesan grafik seperti letupan yang hanya perlu dilihat selama beberapa milisaat.

✅ Fikirkan tentang permainan seperti Pac-Man. Bolehkah anda mengenal pasti empat jenis objek yang disenaraikan di atas dalam permainan ini?

### Menyatakan tingkah laku

Semua yang kami terangkan di atas adalah tingkah laku yang boleh dimiliki oleh objek permainan. Jadi bagaimana kita menyandikannya? Kita boleh menyatakan tingkah laku ini sebagai kaedah yang dikaitkan dengan kelas atau objek.

**Kelas**

Idea ini adalah menggunakan `kelas` bersama dengan `pewarisan` untuk menambah tingkah laku tertentu kepada kelas.

✅ Pewarisan adalah konsep penting untuk difahami. Ketahui lebih lanjut di [artikel MDN tentang pewarisan](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Dinyatakan melalui kod, objek permainan biasanya kelihatan seperti ini:

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

✅ Luangkan beberapa minit untuk membayangkan semula hero Pac-Man (contohnya Inky, Pinky atau Blinky) dan bagaimana ia akan ditulis dalam JavaScript.

**Komposisi**

Cara lain untuk mengendalikan pewarisan objek adalah dengan menggunakan *Komposisi*. Kemudian, objek menyatakan tingkah laku mereka seperti ini:

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

**Corak mana yang patut saya gunakan?**

Terpulang kepada anda corak mana yang anda pilih. JavaScript menyokong kedua-dua paradigma ini.

--

Satu lagi corak yang biasa dalam pembangunan permainan menangani masalah menguruskan pengalaman pengguna permainan dan prestasi.

## Corak Pub/Sub

✅ Pub/Sub bermaksud 'publish-subscribe'

Corak ini menangani idea bahawa bahagian-bahagian aplikasi anda yang berbeza tidak sepatutnya mengetahui tentang satu sama lain. Mengapa begitu? Ia menjadikan lebih mudah untuk melihat apa yang sedang berlaku secara umum jika pelbagai bahagian dipisahkan. Ia juga menjadikan lebih mudah untuk tiba-tiba mengubah tingkah laku jika anda perlu. Bagaimana kita mencapainya? Kita melakukannya dengan menetapkan beberapa konsep:

- **mesej**: Mesej biasanya adalah rentetan teks yang disertai dengan muatan pilihan (sekeping data yang menjelaskan tentang apa mesej itu). Mesej tipikal dalam permainan boleh menjadi `KEY_PRESSED_ENTER`.
- **penerbit**: Elemen ini *menerbitkan* mesej dan menghantarnya kepada semua pelanggan.
- **pelanggan**: Elemen ini *mendengar* mesej tertentu dan melaksanakan beberapa tugas sebagai hasil menerima mesej ini, seperti menembak laser.

Pelaksanaannya agak kecil dari segi saiz tetapi ia adalah corak yang sangat berkuasa. Berikut adalah cara ia boleh dilaksanakan:

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

Untuk menggunakan kod di atas, kita boleh mencipta pelaksanaan yang sangat kecil:

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

Di atas, kita menghubungkan acara papan kekunci, `ArrowLeft` dan menghantar mesej `HERO_MOVE_LEFT`. Kita mendengar mesej itu dan menggerakkan `hero` sebagai hasilnya. Kekuatan corak ini adalah bahawa pendengar acara dan hero tidak mengetahui tentang satu sama lain. Anda boleh memetakan semula `ArrowLeft` kepada kekunci `A`. Selain itu, adalah mungkin untuk melakukan sesuatu yang sama sekali berbeza pada `ArrowLeft` dengan membuat beberapa suntingan pada fungsi `on` eventEmitter:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Apabila perkara menjadi lebih rumit apabila permainan anda berkembang, corak ini tetap sama dari segi kerumitan dan kod anda tetap bersih. Sangat disarankan untuk mengamalkan corak ini.

---

## 🚀 Cabaran

Fikirkan tentang bagaimana corak pub-sub boleh meningkatkan permainan. Bahagian mana yang patut mengeluarkan acara, dan bagaimana permainan patut bertindak balas terhadapnya? Sekarang adalah peluang anda untuk menjadi kreatif, memikirkan permainan baru dan bagaimana bahagiannya mungkin berkelakuan.

## Kuiz Pasca-Kuliah

[Kuiz pasca-kuliah](https://ff-quizzes.netlify.app/web/quiz/30)

## Ulasan & Kajian Kendiri

Ketahui lebih lanjut tentang Pub/Sub dengan [membacanya](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Tugasan

[Reka bentuk permainan](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.