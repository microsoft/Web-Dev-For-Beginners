<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "979cfcce2413a87d9e4c67eb79234bc3",
  "translation_date": "2025-08-29T00:25:41+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "tr"
}
-->
# Uzay Oyunu Yapımı Bölüm 1: Giriş

![video](../../../../6-space-game/images/pewpew.gif)

## Ders Öncesi Test

[Ders öncesi testi](https://ff-quizzes.netlify.app/web/quiz/29)

### Oyun Geliştirmede Kalıtım ve Bileşim

Önceki derslerde, oluşturduğunuz uygulamaların tasarım mimarisi hakkında çok fazla endişelenmenize gerek yoktu, çünkü projeler oldukça küçük kapsamlıydı. Ancak, uygulamalarınız büyüdükçe ve kapsamı genişledikçe, mimari kararlar daha büyük bir endişe haline gelir. JavaScript'te daha büyük uygulamalar oluşturmanın iki ana yaklaşımı vardır: *bileşim* veya *kalıtım*. Her ikisinin de artıları ve eksileri vardır, ancak bunları bir oyun bağlamında açıklayalım.

✅ Yazılmış en ünlü programlama kitaplarından biri [tasarım desenleri](https://en.wikipedia.org/wiki/Design_Patterns) ile ilgilidir.

Bir oyunda, ekranda var olan `oyun nesneleri` bulunur. Bu, bir kartezyen koordinat sisteminde bir konuma sahip oldukları anlamına gelir ve bu, bir `x` ve `y` koordinatı ile tanımlanır. Bir oyun geliştirirken, tüm oyun nesnelerinizin her oyun için ortak olan standart bir özelliğe sahip olduğunu fark edeceksiniz. Bu özellikler şunlardır:

- **konum tabanlı** Çoğu, hatta tüm oyun öğeleri konum tabanlıdır. Bu, bir `x` ve `y` konumuna sahip oldukları anlamına gelir.
- **hareket edebilir** Yeni bir konuma hareket edebilen nesnelerdir. Genellikle bir kahraman, bir canavar veya bir NPC'dir (oyuncu olmayan karakter), ancak örneğin bir ağaç gibi sabit bir nesne değildir.
- **kendini yok eden** Bu nesneler, yalnızca belirli bir süre boyunca var olur ve ardından silinmek üzere kendilerini hazırlar. Genellikle bu, oyun motoruna bu nesnenin artık render edilmemesi gerektiğini belirten bir `ölü` veya `yok edildi` boolean değeri ile temsil edilir.
- **soğuma süresi** 'Soğuma süresi', kısa ömürlü nesneler arasında tipik bir özelliktir. Tipik bir örnek, yalnızca birkaç milisaniye boyunca görülmesi gereken bir metin parçası veya bir patlama gibi grafiksel bir etkidir.

✅ Pac-Man gibi bir oyun düşünün. Bu oyunda yukarıda listelenen dört nesne türünü tanımlayabilir misiniz?

### Davranışı İfade Etme

Yukarıda tanımladığımız her şey, oyun nesnelerinin sahip olabileceği davranışlardır. Peki, bunları nasıl kodlarız? Bu davranışları, sınıflara veya nesnelere bağlı yöntemler olarak ifade edebiliriz.

**Sınıflar**

Fikir, bir sınıfa belirli bir davranış eklemek için `sınıfları` ve `kalıtımı` birlikte kullanmaktır.

✅ Kalıtım, anlaşılması gereken önemli bir kavramdır. Daha fazlasını [MDN'nin kalıtım hakkındaki makalesinde](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) öğrenin.

Kodla ifade edildiğinde, bir oyun nesnesi genellikle şu şekilde görünebilir:

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

✅ Birkaç dakikanızı ayırarak bir Pac-Man kahramanını (örneğin Inky, Pinky veya Blinky) yeniden hayal edin ve bunun JavaScript'te nasıl yazılacağını düşünün.

**Bileşim**

Nesne kalıtımını ele almanın farklı bir yolu, *Bileşim* kullanmaktır. Bu durumda, nesneler davranışlarını şu şekilde ifade eder:

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

**Hangi deseni kullanmalıyım?**

Hangi deseni seçeceğiniz size bağlıdır. JavaScript her iki paradigmayı da destekler.

--

Oyun geliştirmede yaygın olan başka bir desen, oyunun kullanıcı deneyimini ve performansını ele alma sorununu çözer.

## Yayınla/Abone Ol Deseni

✅ Pub/Sub, 'yayınla-abone ol' anlamına gelir.

Bu desen, uygulamanızın farklı bölümlerinin birbirinden haberdar olmaması fikrini ele alır. Neden böyle? Çünkü çeşitli bölümler ayrıldığında genel olarak neler olduğunu görmek çok daha kolaydır. Ayrıca, davranışı aniden değiştirmeniz gerektiğinde bunu yapmak daha kolay olur. Bunu nasıl başarırız? Bazı kavramlar oluşturarak:

- **mesaj**: Bir mesaj genellikle bir metin dizesi ve isteğe bağlı bir yük (mesajın ne hakkında olduğunu açıklayan bir veri parçası) ile birlikte gelir. Bir oyunda tipik bir mesaj `KEY_PRESSED_ENTER` olabilir.
- **yayıncı**: Bu öğe bir mesaj *yayınlar* ve tüm abonelere gönderir.
- **abone**: Bu öğe belirli mesajları *dinler* ve bu mesajı aldıktan sonra bir görev gerçekleştirir, örneğin bir lazer ateşlemek.

Uygulaması oldukça küçük boyutludur, ancak çok güçlü bir desendir. İşte nasıl uygulanabileceği:

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

Yukarıdaki kodu kullanmak için çok küçük bir uygulama oluşturabiliriz:

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

Yukarıda, bir klavye olayı olan `ArrowLeft` ile `HERO_MOVE_LEFT` mesajını gönderiyoruz. Bu mesajı dinliyoruz ve sonuç olarak `kahramanı` hareket ettiriyoruz. Bu desenin gücü, olay dinleyicisinin ve kahramanın birbirinden habersiz olmasıdır. `ArrowLeft` tuşunu `A` tuşuna yeniden eşleyebilirsiniz. Ayrıca, olay yayıcının `on` işlevine birkaç düzenleme yaparak `ArrowLeft` üzerinde tamamen farklı bir şey yapmak da mümkün olur:

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

Oyun büyüdükçe işler daha karmaşık hale gelse de, bu desenin karmaşıklığı aynı kalır ve kodunuz temiz kalır. Bu deseni benimsemeniz gerçekten önerilir.

---

## 🚀 Zorluk

Yayınla-abone ol deseninin bir oyunu nasıl geliştirebileceğini düşünün. Hangi bölümler olaylar yaymalı ve oyun bunlara nasıl tepki vermeli? Şimdi yaratıcı olma şansınız, yeni bir oyun düşünün ve parçalarının nasıl davranabileceğini hayal edin.

## Ders Sonrası Test

[Ders sonrası testi](https://ff-quizzes.netlify.app/web/quiz/30)

## Gözden Geçirme ve Kendi Kendine Çalışma

Yayınla/Abone Ol hakkında daha fazla bilgi edinmek için [bunu okuyun](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Ödev

[Bir oyun taslağı oluşturun](assignment.md)

---

**Feragatname**:  
Bu belge, [Co-op Translator](https://github.com/Azure/co-op-translator) adlı yapay zeka çeviri hizmeti kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlama veya yanlış yorumlamalardan sorumlu değiliz.