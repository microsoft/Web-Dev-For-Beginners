<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "022bbb5c869091b98f19e408e0c51d5d",
  "translation_date": "2025-10-23T00:05:28+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "tr"
}
-->
# Uzay Oyunu Yapımı Bölüm 3: Hareket Eklemek

Favori oyunlarınızı düşünün – onları etkileyici kılan şey sadece güzel grafikler değil, aynı zamanda her şeyin nasıl hareket ettiği ve eylemlerinize nasıl tepki verdiğidir. Şu anda uzay oyununuz güzel bir tablo gibi, ancak ona hayat verecek hareketi eklemek üzereyiz.

NASA mühendisleri Apollo görevleri için rehberlik bilgisayarını programladıklarında benzer bir zorlukla karşılaştılar: Bir uzay aracını pilotun girdilerine nasıl tepki verecek şekilde programlarsınız ve aynı zamanda otomatik olarak rota düzeltmelerini nasıl sağlarsınız? Bugün öğreneceğimiz prensipler, oyuncu kontrollü hareketi otomatik sistem davranışlarıyla yönetme konusunda aynı kavramları yansıtıyor.

Bu derste, uzay gemilerinin ekran boyunca kaymasını, oyuncu komutlarına tepki vermesini ve pürüzsüz hareket desenleri oluşturmayı öğreneceksiniz. Her şeyi doğal bir şekilde birbirine bağlanan yönetilebilir kavramlara ayıracağız.

Dersin sonunda, oyuncular kahraman gemilerini ekranın etrafında uçururken düşman gemileri yukarıda devriye gezecek. Daha da önemlisi, oyun hareket sistemlerini güçlendiren temel prensipleri anlayacaksınız.

## Ders Öncesi Test

[Ders öncesi test](https://ff-quizzes.netlify.app/web/quiz/33)

## Oyun Hareketini Anlamak

Oyunlar, bir şeyler hareket etmeye başladığında canlanır ve temelde iki şekilde bu gerçekleşir:

- **Oyuncu kontrollü hareket**: Bir tuşa bastığınızda veya farenizi tıkladığınızda bir şey hareket eder. Bu, sizinle oyun dünyanız arasındaki doğrudan bağlantıdır.
- **Otomatik hareket**: Oyun kendi kendine bir şeyleri hareket ettirmeye karar verdiğinde – örneğin, düşman gemilerinin ekran boyunca devriye gezmesi gibi, siz bir şey yapmasanız bile.

Bilgisayar ekranında nesneleri hareket ettirmek düşündüğünüzden daha basittir. Matematik dersinden hatırladığınız x ve y koordinatlarını hatırlıyor musunuz? İşte tam olarak burada çalıştığımız şey bu. Galileo, 1610 yılında Jüpiter'in uydularını izlerken aslında aynı şeyi yapıyordu – hareket desenlerini anlamak için zaman içinde konumları çiziyordu.

Ekranda bir şeyleri hareket ettirmek, bir flipbook animasyonu oluşturmak gibidir – şu üç basit adımı takip etmeniz gerekir:

1. **Konumu güncelle** – Nesnenizin nerede olması gerektiğini değiştirin (belki 5 piksel sağa hareket ettirin)
2. **Eski kareyi sil** – Ekranı temizleyin, böylece her yerde hayalet izler görmezsiniz
3. **Yeni kareyi çizin** – Nesnenizi yeni yerine yerleştirin

Bunu yeterince hızlı yaparsanız, işte! Oyunculara doğal gelen pürüzsüz bir hareket elde edersiniz.

Kodda nasıl görünebileceği:

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

**Bu kodun yaptığı şey:**
- Kahramanın x-koordinatını 5 piksel güncelleyerek yatay olarak hareket ettirir
- Önceki kareyi kaldırmak için tüm tuvali temizler
- Tuvali siyah bir arka plan rengiyle doldurur
- Kahraman görüntüsünü yeni konumunda yeniden çizer

✅ Kahramanınızı saniyede birçok kare yeniden çizerken performans maliyetlerinin birikmesine neden olabilecek bir sebep düşünebilir misiniz? [Bu desene alternatifler](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas) hakkında okuyun.

## Klavye olaylarını yönetmek

Burada oyuncu girdisini oyun eylemine bağlarız. Birisi lazer ateşlemek için boşluk tuşuna bastığında veya bir asteroitten kaçmak için ok tuşuna dokunduğunda, oyununuz bu girdiyi algılamalı ve buna tepki vermelidir.

Klavye olayları pencere düzeyinde gerçekleşir, yani tüm tarayıcı pencereniz bu tuş vuruşlarını dinler. Fare tıklamaları ise belirli öğelere bağlanabilir (örneğin bir düğmeye tıklamak). Uzay oyunumuz için klavye kontrollerine odaklanacağız çünkü bu, oyunculara klasik arcade hissi verir.

Bu, 1800'lerde telgraf operatörlerinin mors kodu girdisini anlamlı mesajlara çevirmesi gerektiği zamana benziyor – biz de benzer bir şey yapıyoruz, tuş vuruşlarını oyun komutlarına çeviriyoruz.

Bir olayı yönetmek için pencerenin `addEventListener()` metodunu kullanmanız ve ona iki giriş parametresi sağlamanız gerekir. İlk parametre olayın adı, örneğin `keyup`. İkinci parametre ise olay gerçekleştiğinde çağrılması gereken fonksiyondur.

İşte bir örnek:

```javascript
window.addEventListener('keyup', (evt) => {
  // evt.key = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
});
```

**Burada olanları açıklamak:**
- Tüm pencere üzerinde klavye olaylarını dinler
- Hangi tuşun basıldığını içeren olay nesnesini yakalar
- Basılan tuşun belirli bir tuşla eşleşip eşleşmediğini kontrol eder (bu durumda yukarı ok tuşu)
- Koşul sağlandığında kodu çalıştırır

Tuş olayları için hangi tuşun basıldığını görmek için olay üzerinde kullanabileceğiniz iki özellik vardır:

- `key` - basılan tuşun string temsili, örneğin `'ArrowUp'`
- `keyCode` - bu bir sayı temsili, örneğin `37`, `ArrowLeft` ile eşleşir

✅ Tuş olayları manipülasyonu oyun geliştirme dışında da kullanışlıdır. Bu tekniğin başka hangi kullanımlarını düşünebilirsiniz?

### Özel tuşlar: dikkat!

Bazı tuşların yerleşik tarayıcı davranışları vardır ve bunlar oyununuzu etkileyebilir. Ok tuşları sayfayı kaydırır ve boşluk tuşu aşağıya atlar – birisi uzay gemisini kullanmaya çalışırken istemediğiniz davranışlar.

Bu varsayılan davranışları önleyebilir ve girdiyi oyununuzun işlemesine izin verebilirsiniz. Bu, erken dönem bilgisayar programcılarının özel davranışlar oluşturmak için sistem kesintilerini geçersiz kılmak zorunda olduğu zamana benzer – biz bunu tarayıcı düzeyinde yapıyoruz. İşte nasıl:

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

**Bu önleme kodunu anlamak:**
- İstenmeyen tarayıcı davranışlarına neden olabilecek belirli tuş kodlarını kontrol eder
- Ok tuşları ve boşluk tuşu için varsayılan tarayıcı eylemini engeller
- Diğer tuşların normal şekilde çalışmasına izin verir
- Tarayıcının yerleşik davranışını durdurmak için `e.preventDefault()` kullanır

## Oyun kaynaklı hareket

Şimdi oyuncu girdisi olmadan hareket eden nesnelerden bahsedelim. Ekranda dolaşan düşman gemilerini, düz çizgiler halinde uçan mermileri veya arka planda sürüklenen bulutları düşünün. Bu otonom hareket, kimse kontrolleri dokunmasa bile oyun dünyanızı canlı hissettirir.

JavaScript'in yerleşik zamanlayıcılarını kullanarak pozisyonları düzenli aralıklarla güncelleriz. Bu konsept, sarkaçlı saatlerin nasıl çalıştığına benzer – düzenli bir mekanizma, tutarlı ve zamanlanmış eylemleri tetikler. İşte ne kadar basit olabileceği:

```javascript
const id = setInterval(() => {
  // Move the enemy on the y axis
  enemy.y += 10;
}, 100);
```

**Bu hareket kodunun yaptığı şey:**
- Her 100 milisaniyede bir çalışan bir zamanlayıcı oluşturur
- Her seferinde düşmanın y-koordinatını 10 piksel günceller
- Daha sonra durdurabilmek için aralık kimliğini saklar
- Düşmanı ekranda otomatik olarak aşağıya doğru hareket ettirir

## Oyun döngüsü

İşte her şeyi bir araya getiren konsept – oyun döngüsü. Oyununuz bir film olsaydı, oyun döngüsü bir film projektörü olurdu, kareyi kareye göstererek her şeyin pürüzsüz bir şekilde hareket ediyormuş gibi görünmesini sağlar.

Her oyunun arka planda çalışan bir döngüsü vardır. Bu, tüm oyun nesnelerini güncelleyen, ekranı yeniden çizen ve bu süreci sürekli olarak tekrarlayan bir fonksiyondur. Bu, kahramanınızı, tüm düşmanları, etrafta uçan lazerleri – tüm oyun durumunu takip eder.

Bu konsept, Walt Disney gibi erken dönem film animatörlerinin hareket illüzyonu yaratmak için karakterleri kare kare yeniden çizmek zorunda olduğu zamana benziyor. Biz aynı şeyi yapıyoruz, sadece kalem yerine kod kullanıyoruz.

Bir oyun döngüsünün genellikle kodda nasıl göründüğü:

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

**Oyun döngüsü yapısını anlamak:**
- Önceki kareyi kaldırmak için tüm tuvali temizler
- Arka planı düz bir renkle doldurur
- Tüm oyun nesnelerini mevcut konumlarında çizer
- Pürüzsüz animasyon oluşturmak için bu işlemi her 200 milisaniyede bir tekrarlar
- Kare hızını kontrol ederek aralık zamanlamasını yönetir

## Uzay Oyunu Devam Ediyor

Şimdi, daha önce oluşturduğunuz statik sahneye hareket ekleyeceğiz. Onu bir ekran görüntüsünden interaktif bir deneyime dönüştüreceğiz. Her parçanın bir sonrakini doğal bir şekilde oluşturmasını sağlamak için adım adım ilerleyeceğiz.

Önceki derste kaldığımız yerden kodu alın (veya yeni bir başlangıç yapmanız gerekiyorsa [Bölüm II - başlangıç](../../../../6-space-game/3-moving-elements-around/your-work) klasöründeki kodla başlayın).

**Bugün oluşturacağımız şey:**
- **Kahraman kontrolleri**: Ok tuşları uzay geminizi ekranın etrafında yönlendirecek
- **Düşman hareketi**: O uzaylı gemileri ilerlemeye başlayacak

Bu özellikleri uygulamaya başlayalım.

## Önerilen adımlar

Sizin için oluşturulmuş dosyaları `your-work` alt klasöründe bulun. Şunları içermelidir:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Projenize `your-work` klasöründe şu komutu yazarak başlayın:

```bash
cd your-work
npm start
```

**Bu komutun yaptığı şey:**
- Proje dizinine gider
- `http://localhost:5000` adresinde bir HTTP Sunucusu başlatır
- Oyun dosyalarınızı bir tarayıcıda test etmeniz için sunar

Yukarıdaki komut, `http://localhost:5000` adresinde bir HTTP Sunucusu başlatacaktır. Bir tarayıcı açın ve bu adresi girin, şu anda kahramanı ve tüm düşmanları görüntülemelidir; henüz hiçbir şey hareket etmiyor!

### Kod ekleme

1. **Özel nesneler ekleyin**: `hero`, `enemy` ve `game object` için `x` ve `y` özellikleri ekleyin. ([Kalıtım veya kompozisyon](../README.md) bölümünü hatırlayın).

   *İPUCU* `game object`, `x` ve `y` özelliklerine ve kendini bir tuvale çizebilme yeteneğine sahip olan nesne olmalıdır.

   > **İpucu**: Yeni bir `GameObject` sınıfı ekleyerek aşağıdaki gibi bir yapıcı tanımlayın ve ardından tuvale çizin:

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

    **Bu temel sınıfı anlamak:**
    - Tüm oyun nesnelerinin paylaştığı ortak özellikleri tanımlar (konum, boyut, görüntü)
    - Nesnenin kaldırılıp kaldırılmadığını izlemek için bir `dead` bayrağı içerir
    - Tuval üzerine nesneyi çizen bir `draw()` yöntemi sağlar
    - Çocuk sınıfların geçersiz kılabileceği tüm özellikler için varsayılan değerler belirler

    Şimdi, bu `GameObject` sınıfını genişleterek `Hero` ve `Enemy` oluşturun:
    
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

    **Bu sınıflardaki anahtar kavramlar:**
    - `GameObject` sınıfından `extends` anahtar kelimesiyle kalıtım alır
    - `super(x, y)` ile ebeveyn yapıcıyı çağırır
    - Her nesne türü için belirli boyutlar ve özellikler ayarlar
    - `setInterval()` kullanarak düşmanlar için otomatik hareket uygular

2. **Tuş olay işleyicileri ekleyin**: Kahramanı yukarı/aşağı, sola/sağa hareket ettirmek için tuş navigasyonunu yönetin.

   *UNUTMAYIN* Bu bir Kartezyen sistemdir, sol üst köşe `0,0`'dır. Ayrıca *varsayılan davranışı* durdurmak için kod eklemeyi unutmayın.

   > **İpucu**: `onKeyDown` fonksiyonunuzu oluşturun ve pencereye bağlayın:

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
    
   **Bu olay işleyicinin yaptığı şey:**
   - Tüm pencere üzerinde tuş aşağı olaylarını dinler
   - Hangi tuşların basıldığını görmek için tuş kodunu kaydeder
   - Ok tuşları ve boşluk tuşu için varsayılan tarayıcı davranışını engeller
   - Diğer tuşların normal şekilde çalışmasına izin verir
   
   Bu noktada tarayıcı konsolunuzu kontrol edin ve tuş vuruşlarının kaydedildiğini izleyin.

3. **[Pub sub pattern](../README.md) uygulayın**, bu kodunuzu temiz tutmanıza yardımcı olur ve kalan bölümleri takip etmenizi kolaylaştırır.

   Publish-Subscribe deseni, olay algılamayı olay işleme sürecinden ayırarak kodunuzu düzenler. Bu, kodunuzu daha modüler ve bakımı daha kolay hale getirir.

   Bu son kısmı yapmak için şunları yapabilirsiniz:

   1. **Pencereye bir olay dinleyici ekleyin**:

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

   **Bu olay sistemi ne yapar:**
   - Klavye girişini algılar ve bunu özel oyun olaylarına dönüştürür
   - Giriş algılamayı oyun mantığından ayırır
   - Kontrolleri daha sonra değiştirmeyi kolaylaştırır
   - Aynı girdiye birden fazla sistemin tepki vermesine olanak tanır

   2. **Bir EventEmitter sınıfı oluşturun**: Mesajları yayınlamak ve abone olmak için:

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
       
   3. **Sabitler ekleyin** ve EventEmitter'ı ayarlayın:

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

   **Kurulumu anlamak:**
   - Yazım hatalarını önlemek ve yeniden düzenlemeyi kolaylaştırmak için mesaj sabitlerini tanımlar
   - Görüntüler, tuval bağlamı ve oyun durumu için değişkenler tanımlar
   - Pub-sub sistemi için global bir olay yayıcı oluşturur
   - Tüm oyun nesnelerini tutmak için bir dizi başlatır

   4. **Oyunu başlatın**

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
       
4. **Oyun döngüsünü ayarlayın**

   `window.onload` fonksiyonunu yeniden düzenleyerek oyunu başlatın ve iyi bir aralıkta bir oyun döngüsü ayarlayın. Ayrıca bir lazer ışını ekleyeceksiniz:

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

   **Oyun kurulumunu anlamak:**
   - Sayfanın tamamen yüklenmesini bekler
   - Tuval öğesini ve 2D render bağlamını alır
   - Tüm görüntü varlıklarını `await` kullanarak eşzamanlı olarak yükler
   - Oyun döngüsünü 100ms aralıklarla (10 FPS) çalıştırmaya başlar
   - Her karede tüm ekranı temizler ve yeniden çizer

5. **Kod ekleyin**: Düşmanları belirli bir aralıkta hareket ettirin

    Düşmanları oluşturmak ve yeni gameObjects sınıfına eklemek için `createEnemies()` fonksiyonunu yeniden düzenleyin:

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

    **Düşman oluşturmanın yaptığı şey:**
    - Düşmanları ekranın ortasına yerleştirmek için pozisyonları hesaplar
- **Düşmanlardan oluşan** bir ızgara oluşturur, iç içe döngüler kullanarak
- **Her bir düşman nesnesine** düşman görselini atar
- **Her bir düşmanı** global oyun nesneleri dizisine ekler

ve benzer bir işlem yapmak için bir `createHero()` fonksiyonu ekleyin.

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

**Kahraman oluşturma işlemi:**
- **Kahramanı** ekranın alt ortasına konumlandırır
- **Kahraman nesnesine** kahraman görselini atar
- **Kahramanı** oyun nesneleri dizisine ekler, böylece render edilebilir

Son olarak, çizimi başlatmak için bir `drawGameObjects()` fonksiyonu ekleyin:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

**Çizim fonksiyonunu anlama:**
- **Dizideki tüm oyun nesnelerini** döngüyle gezer
- **Her bir nesne üzerinde** `draw()` metodunu çağırır
- **Canvas bağlamını** nesnelerin kendilerini çizebilmesi için iletir

Düşmanlarınız kahraman uzay geminize doğru ilerlemeye başlamalı!
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

Son olarak, çizimi başlatmak için bir `drawGameObjects()` fonksiyonu ekleyin:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

Düşmanlarınız kahraman uzay geminize doğru ilerlemeye başlamalı!

---

## GitHub Copilot Agent Challenge 🚀

İşte oyununuzu daha da geliştirecek bir meydan okuma: sınırlar ve akıcı kontroller eklemek. Şu anda kahramanınız ekranın dışına uçabiliyor ve hareket biraz kesik kesik hissediliyor.

**Göreviniz:** Uzay geminizi daha gerçekçi hissettirmek için ekran sınırlarını ve akıcı hareketi uygulayın. Bu, NASA'nın uçuş kontrol sistemlerinin uzay araçlarının güvenli operasyonel parametreleri aşmasını önlemesine benzer.

**Yapmanız gerekenler:** Kahraman uzay geminizi ekranın içinde tutacak bir sistem oluşturun ve kontrolleri daha akıcı hale getirin. Oyuncular bir ok tuşuna bastığında, gemi kesik adımlarla değil, sürekli bir şekilde kaymalı. Geminin ekran sınırlarına ulaştığında görsel bir geri bildirim eklemeyi düşünün – oyun alanının kenarını göstermek için hafif bir efekt olabilir.

[agent mode hakkında daha fazla bilgi edinin](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode).

## 🚀 Meydan Okuma

Projeler büyüdükçe kod organizasyonu giderek daha önemli hale gelir. Dosyanızın işlevler, değişkenler ve sınıflarla dolup taşmaya başladığını fark etmiş olabilirsiniz. Bu, Apollo görev kodunu organize eden mühendislerin, birden fazla ekibin aynı anda çalışabileceği açık ve sürdürülebilir sistemler oluşturmak zorunda olduğu durumu hatırlatıyor.

**Göreviniz:**
Bir yazılım mimarı gibi düşünün. Altı ay sonra siz (veya bir ekip arkadaşınız) kodun ne yaptığını anlayabilmesi için kodunuzu nasıl organize ederdiniz? Şimdilik her şey tek bir dosyada kalsa bile, daha iyi bir organizasyon oluşturabilirsiniz:

- **İlgili işlevleri gruplandırmak** ve net yorum başlıkları eklemek
- **Sorumlulukları ayırmak** - oyun mantığını render işlemlerinden ayrı tutmak
- **Tutarlı adlandırma** kuralları kullanmak, değişkenler ve işlevler için
- **Modüller veya ad alanları oluşturmak**, oyunun farklı yönlerini organize etmek için
- **Belgelendirme eklemek**, her bir ana bölümün amacını açıklamak için

**Düşünme soruları:**
- Kodunuzun hangi bölümleri geri döndüğünüzde anlaması en zor olanlar?
- Kodunuzu başkalarının katkıda bulunmasını kolaylaştıracak şekilde nasıl organize edebilirsiniz?
- Güçlendirmeler veya farklı düşman türleri gibi yeni özellikler eklemek isteseydiniz ne olurdu?

## Ders Sonrası Test

[Ders sonrası test](https://ff-quizzes.netlify.app/web/quiz/34)

## Gözden Geçirme ve Kendi Kendine Çalışma

Her şeyi sıfırdan inşa ediyoruz, bu öğrenmek için harika, ancak size küçük bir sır vereyim – JavaScript ile oyun yapımında işinizi kolaylaştıracak harika framework'ler var. Şimdiye kadar ele aldığımız temellerde kendinizi rahat hissettiğinizde, [mevcut olanları keşfetmeye](https://github.com/collections/javascript-game-engines) değer.

Framework'leri, her aracı el yapımı yapmak yerine, iyi donanımlı bir alet çantası olarak düşünün. Kod organizasyonu ile ilgili birçok zorluğu çözebilirler ve haftalarca sürecek özellikleri size sunabilirler.

**Keşfetmeye değer şeyler:**
- Oyun motorlarının kodu nasıl organize ettiği – kullandıkları akıllı yöntemlere hayran kalacaksınız
- Canvas oyunlarının daha akıcı çalışmasını sağlamak için performans ipuçları  
- Kodunuzu daha temiz ve sürdürülebilir hale getirebilecek modern JavaScript özellikleri
- Oyun nesnelerini ve ilişkilerini yönetmek için farklı yaklaşımlar

## Ödev

[Kodunuzu yorumlayın](assignment.md)

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çeviriler hata veya yanlışlıklar içerebilir. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalardan sorumlu değiliz.