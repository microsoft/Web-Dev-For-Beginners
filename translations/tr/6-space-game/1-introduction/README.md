<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-23T00:08:29+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "tr"
}
-->
# Uzay Oyunu Yapımı Bölüm 1: Giriş

![Oyun oynanışını gösteren uzay oyunu animasyonu](../../../../6-space-game/images/pewpew.gif)

NASA'nın görev kontrol merkezi bir uzay fırlatışı sırasında birden fazla sistemi koordine ettiği gibi, biz de bir uzay oyunu yapacağız ve bir programın farklı bölümlerinin nasıl sorunsuz bir şekilde birlikte çalışabileceğini göstereceğiz. Oynayabileceğiniz bir şey yaratırken, herhangi bir yazılım projesine uygulanabilecek temel programlama kavramlarını öğreneceksiniz.

Kod organizasyonu için iki temel yaklaşımı keşfedeceğiz: kalıtım ve bileşim. Bunlar sadece akademik kavramlar değil – video oyunlarından bankacılık sistemlerine kadar her şeyi güçlendiren aynı desenlerdir. Ayrıca, uzay araçlarında kullanılan iletişim ağları gibi, farklı bileşenlerin bağımlılık oluşturmadan bilgi paylaşmasına olanak tanıyan pub/sub adlı bir iletişim sistemini uygulayacağız.

Bu serinin sonunda, oyunlar, web uygulamaları veya başka herhangi bir yazılım sistemi geliştirirken ölçeklenebilir ve evrimleşebilir uygulamalar oluşturmayı anlayacaksınız.

## Ders Öncesi Test

[Ders öncesi test](https://ff-quizzes.netlify.app/web/quiz/29)

## Oyun Geliştirmede Kalıtım ve Bileşim

Projeler karmaşıklık kazandıkça, kod organizasyonu kritik hale gelir. Basit bir script olarak başlayan şey, uygun bir yapı olmadan bakımı zor hale gelebilir – tıpkı Apollo görevlerinin binlerce bileşen arasında dikkatli bir koordinasyon gerektirdiği gibi.

Kod organizasyonu için iki temel yaklaşımı keşfedeceğiz: kalıtım ve bileşim. Her birinin kendine özgü avantajları vardır ve her ikisini anlamak, farklı durumlar için doğru yaklaşımı seçmenize yardımcı olur. Bu kavramları, kahramanlar, düşmanlar, güçlendirmeler ve diğer nesnelerin verimli bir şekilde etkileşimde bulunması gereken uzay oyunumuz aracılığıyla göstereceğiz.

✅ En ünlü programlama kitaplarından biri [tasarım desenleri](https://en.wikipedia.org/wiki/Design_Patterns) ile ilgilidir.

Her oyunda `oyun nesneleri` vardır – oyun dünyanızı dolduran etkileşimli öğeler. Kahramanlar, düşmanlar, güçlendirmeler ve görsel efektler hepsi oyun nesneleridir. Her biri, bir koordinat düzleminde noktaları çizmek gibi, `x` ve `y` değerlerini kullanarak belirli ekran koordinatlarında bulunur.

Görsel farklılıklarına rağmen, bu nesneler genellikle temel davranışları paylaşır:

- **Bir yerde bulunurlar** – Her nesne x ve y koordinatlarına sahiptir, böylece oyun onu nereye çizeceğini bilir
- **Birçoğu hareket edebilir** – Kahramanlar koşar, düşmanlar kovalar, mermiler ekran boyunca uçar
- **Bir ömre sahiptirler** – Bazıları sonsuza kadar kalır, diğerleri (patlamalar gibi) kısa bir süre görünür ve kaybolur
- **Bir şeylere tepki verirler** – Çarpışmalar olduğunda, güçlendirmeler toplanır, sağlık çubukları güncellenir

✅ Pac-Man gibi bir oyunu düşünün. Bu oyunda yukarıda listelenen dört nesne türünü tanımlayabilir misiniz?

### Davranışı Kodla İfade Etmek

Artık oyun nesnelerinin paylaştığı ortak davranışları anladığınıza göre, bu davranışları JavaScript'te nasıl uygulayacağımızı keşfedelim. Nesne davranışını, sınıflara veya bireysel nesnelere eklenmiş yöntemler aracılığıyla ifade edebilirsiniz ve seçebileceğiniz birkaç yaklaşım vardır.

**Sınıf Tabanlı Yaklaşım**

Sınıflar ve kalıtım, oyun nesnelerini organize etmek için yapılandırılmış bir yaklaşım sunar. Carl Linnaeus tarafından geliştirilen taksonomik sınıflandırma sistemi gibi, ortak özellikler içeren bir temel sınıfla başlarsınız, ardından bu temelleri miras alırken belirli yetenekler ekleyen özel sınıflar oluşturursunuz.

✅ Kalıtım, anlaşılması gereken önemli bir kavramdır. [MDN'nin kalıtım hakkındaki makalesini](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) okuyarak daha fazla bilgi edinin.

İşte sınıflar ve kalıtım kullanarak oyun nesnelerini nasıl uygulayabileceğiniz:

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

**Bunu adım adım inceleyelim:**
- Her oyun nesnesinin kullanabileceği temel bir şablon oluşturuyoruz
- Yapıcı, nesnenin nerede olduğunu (`x`, `y`) ve ne tür bir şey olduğunu kaydeder
- Bu, tüm oyun nesnelerinizin üzerine inşa edileceği temel haline gelir

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

**Yukarıda şunları yaptık:**
- GameObject sınıfını genişleterek hareket işlevselliği ekledik
- `super()` kullanarak üst yapıcıyı çağırdık ve miras alınan özellikleri başlattık
- Nesnenin konumunu güncelleyen bir `moveTo()` yöntemi ekledik

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

**Bu kavramları anlamak:**
- Uygun davranışları miras alan özel nesne türleri oluşturur
- Kalıtımın seçici özellik eklemeye nasıl izin verdiğini gösterir
- Kahramanların hareket edebileceğini, ağaçların ise sabit kalacağını gösterir
- Sınıf hiyerarşisinin uygunsuz eylemleri nasıl önlediğini açıklar

✅ Bir Pac-Man kahramanını (örneğin Inky, Pinky veya Blinky) yeniden tasarlamayı ve JavaScript'te nasıl yazılacağını düşünmek için birkaç dakika ayırın.

**Bileşim Yaklaşımı**

Bileşim, mühendislerin uzay araçlarını değiştirilebilir bileşenlerle tasarladığı modüler bir tasarım felsefesini takip eder. Bir üst sınıftan miras almak yerine, belirli davranışları birleştirerek tam olarak ihtiyaç duydukları işlevselliğe sahip nesneler oluşturursunuz. Bu yaklaşım, katı hiyerarşik kısıtlamalar olmadan esneklik sunar.

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

**Bu kodun yaptığı şey:**
- Konum ve tür özelliklerine sahip temel bir `gameObject` tanımlar
- Hareket işlevselliği olan ayrı bir `movable` davranış nesnesi oluşturur
- Konum verilerini ve hareket mantığını bağımsız tutarak sorumlulukları ayırır

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

**Yukarıda şunları yaptık:**
- Temel nesne özelliklerini hareket davranışıyla birleştirdik (spread syntax kullanarak)
- Özelleştirilmiş nesneler döndüren fabrika fonksiyonları oluşturduk
- Katı sınıf hiyerarşileri olmadan esnek nesne oluşturmayı sağladık
- Nesnelerin tam olarak ihtiyaç duydukları davranışlara sahip olmasını sağladık

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**Hatırlanması gereken önemli noktalar:**
- Nesneleri miras almak yerine davranışları karıştırarak oluşturur
- Katı kalıtım hiyerarşilerinden daha fazla esneklik sağlar
- Nesnelerin tam olarak ihtiyaç duydukları özelliklere sahip olmasını sağlar
- Temiz nesne kombinasyonu için modern JavaScript spread syntax kullanır
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

**Burada olanları açıklayalım:**
- Basit bir sınıf kullanarak merkezi bir olay yönetim sistemi oluşturur
- Dinleyicileri mesaj türüne göre düzenlenmiş bir nesnede saklar
- Yeni dinleyicileri `on()` yöntemiyle kaydeder
- İlgili tüm dinleyicilere mesajları `emit()` kullanarak iletir
- İlgili bilgileri iletmek için isteğe bağlı veri yüklerini destekler

### Hepsini Bir Araya Getirmek: Pratik Bir Örnek

Tamam, bunu harekete geçirelim! Pub/sub'un ne kadar temiz ve esnek olabileceğini gösteren basit bir hareket sistemi oluşturacağız:

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

**Bu kodun yaptığı şey:**
- Mesaj adlarında yazım hatalarını önlemek için bir sabitler nesnesi tanımlar
- Tüm iletişimi yönetmek için bir olay yayıcı örneği oluşturur
- Kahraman nesnesini başlangıç konumunda başlatır

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

**Yukarıda şunları yaptık:**
- Hareket mesajlarına yanıt veren olay dinleyicileri kaydettik
- Kahramanın konumunu hareket yönüne göre güncelledik
- Kahramanın konum değişikliklerini izlemek için konsol günlüğü ekledik
- Hareket mantığını giriş işleme mantığından ayırdık

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

**Bu kavramları anlamak:**
- Klavye girişini oyun olaylarına sıkı bir şekilde bağlamadan bağlar
- Giriş sisteminin oyun nesneleriyle dolaylı olarak iletişim kurmasını sağlar
- Aynı klavye olaylarına birden fazla sistemin yanıt vermesine olanak tanır
- Tuş atamalarını değiştirmeyi veya yeni giriş yöntemleri eklemeyi kolaylaştırır

> 💡 **İpucu**: Bu desenin güzelliği esnekliktir! Ses efektleri, ekran titremesi veya parçacık efektleri eklemek çok kolaydır – sadece ilgilendiğiniz olayları dinleyin, mevcut klavye veya hareket kodunu değiştirmenize gerek yok.
> 
**Bu yaklaşımı seveceksiniz çünkü:**
- Yeni özellikler eklemek çok kolay – sadece ilgilendiğiniz olayları dinleyin
- Birden fazla şey aynı olaya birbirine karışmadan tepki verebilir
- Test yapmak çok daha basit hale gelir çünkü her parça bağımsız çalışır
- Bir şey bozulduğunda, tam olarak nerede arayacağınızı bilirsiniz

### Pub/Sub Neden Etkili Ölçeklenir?

Pub/sub deseni, uygulamalar karmaşıklık kazandıkça basitliği korur. İster düzinelerce düşmanı, dinamik kullanıcı arayüzü güncellemelerini veya ses sistemlerini yönetin, desen mimari değişiklikler olmadan artan ölçeği yönetir. Yeni özellikler, mevcut işlevselliği etkilemeden mevcut olay sistemine entegre edilir.

> ⚠️ **Yaygın Hata**: Başlangıçta çok fazla spesifik mesaj türü oluşturmayın. Geniş kategorilerle başlayın ve oyununuzun ihtiyaçları daha net hale geldikçe bunları geliştirin.
> 
**Takip edilmesi gereken en iyi uygulamalar:**
- **İlgili** mesajları mantıksal kategorilere ayırır
- **Açıklayıcı** adlar kullanarak ne olduğunu açıkça belirtir
- **Basit ve odaklı** mesaj yüklerini korur
- **Mesaj türlerinizi** ekip işbirliği için belgeler

---

## GitHub Copilot Agent Challenge 🚀

Agent modunu kullanarak aşağıdaki meydan okumayı tamamlayın:

**Açıklama:** Hem kalıtım hem de pub/sub desenini kullanarak basit bir oyun nesnesi sistemi oluşturun. Farklı nesnelerin birbirlerini doğrudan tanımadan olaylar aracılığıyla iletişim kurabileceği temel bir oyun uygulayacaksınız.

**Talimat:** Aşağıdaki gereksinimlere sahip bir JavaScript oyun sistemi oluşturun: 1) x, y koordinatları ve bir tür özelliği olan bir temel GameObject sınıfı oluşturun. 2) GameObject'i genişleten ve hareket edebilen bir Hero sınıfı oluşturun. 3) GameObject'i genişleten ve kahramanı takip edebilen bir Enemy sınıfı oluşturun. 4) Pub/sub deseni için bir EventEmitter sınıfı uygulayın. 5) Kahraman hareket ettiğinde, yakındaki düşmanların 'HERO_MOVED' olayını alıp kahramana doğru hareket etmek için konumlarını güncelleyecekleri olay dinleyicilerini ayarlayın. Nesneler arasındaki iletişimi göstermek için console.log ifadeleri ekleyin.

[Agent modu](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hakkında daha fazla bilgi edinin.

## 🚀 Meydan Okuma

Pub-sub deseninin oyun mimarisini nasıl geliştirebileceğini düşünün. Hangi bileşenlerin olay yayması gerektiğini ve sistemin nasıl yanıt vermesi gerektiğini belirleyin. Bir oyun konsepti tasarlayın ve bileşenleri arasındaki iletişim desenlerini haritalayın.

## Ders Sonrası Test

[Ders sonrası test](https://ff-quizzes.netlify.app/web/quiz/30)

## Gözden Geçirme ve Kendi Kendine Çalışma

Pub/Sub hakkında daha fazla bilgi edinmek için [buradan okuyabilirsiniz](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon).

## Ödev

[Bir oyun taslağı oluşturun](assignment.md)

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.