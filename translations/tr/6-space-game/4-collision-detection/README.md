<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2e83e38c35dc003f046d7cc0bbfd4920",
  "translation_date": "2025-08-25T22:25:30+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "tr"
}
-->
# Uzay Oyunu Yapımı Bölüm 4: Lazer Eklemek ve Çarpışmaları Algılamak

## Ders Öncesi Test

[Ders öncesi test](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/35)

Bu derste JavaScript ile lazer nasıl ateşlenir öğreneceksiniz! Oyunumuzda iki şey ekleyeceğiz:

- **Bir lazer**: Bu lazer kahramanınızın gemisinden yukarı doğru ateşlenir.
- **Çarpışma algılama**, ateş etme yeteneğini uygulamanın bir parçası olarak bazı güzel oyun kuralları ekleyeceğiz:
   - **Lazer düşmana çarpar**: Lazer bir düşmana çarptığında düşman yok olur.
   - **Lazer ekranın üst kısmına çarpar**: Lazer ekranın üst kısmına çarptığında yok olur.
   - **Düşman ve kahraman çarpışması**: Düşman ve kahraman birbirine çarptığında yok olur.
   - **Düşman ekranın altına çarpar**: Düşman ekranın altına çarptığında düşman ve kahraman yok olur.

Kısacası, siz -- *kahraman* -- düşmanlar ekranın altına ulaşmadan önce hepsini lazerle vurmalısınız.

✅ İlk yazılan bilgisayar oyunu hakkında biraz araştırma yapın. İşlevselliği neydi?

Haydi kahramanca olalım!

## Çarpışma Algılama

Çarpışma algılamayı nasıl yaparız? Oyun nesnelerimizi hareket eden dikdörtgenler olarak düşünmemiz gerekiyor. Neden mi? Çünkü bir oyun nesnesini çizmek için kullanılan görüntü bir dikdörtgendir: `x`, `y`, `genişlik` ve `yükseklik` değerlerine sahiptir.

Eğer iki dikdörtgen, yani bir kahraman ve bir düşman *kesişirse*, bir çarpışma meydana gelir. Bu durumda ne olacağı oyun kurallarına bağlıdır. Çarpışma algılamayı uygulamak için şu adımlara ihtiyacınız var:

1. Bir oyun nesnesinin dikdörtgen temsilini elde etme yöntemi, şöyle bir şey:

   ```javascript
   rectFromGameObject() {
     return {
       top: this.y,
       left: this.x,
       bottom: this.y + this.height,
       right: this.x + this.width
     }
   }
   ```

2. Bir karşılaştırma fonksiyonu, bu fonksiyon şöyle görünebilir:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Nesneleri Nasıl Yok Ederiz

Bir oyunda nesneleri yok etmek için oyuna bu nesnenin artık belirli bir aralıkta tetiklenen oyun döngüsünde çizilmemesi gerektiğini bildirmeniz gerekir. Bunun bir yolu, bir olay meydana geldiğinde bir oyun nesnesini *ölü* olarak işaretlemektir, şöyle:

```javascript
// collision happened
enemy.dead = true
```

Sonrasında ekranı yeniden çizerken *ölü* nesneleri ayıklayabilirsiniz, şöyle:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Lazer Nasıl Ateşlenir

Lazer ateşlemek, bir tuş olayına yanıt vermek ve belirli bir yönde hareket eden bir nesne oluşturmak anlamına gelir. Bu nedenle şu adımları gerçekleştirmemiz gerekiyor:

1. **Bir lazer nesnesi oluşturun**: Kahraman geminizin üst kısmından, oluşturulduğu anda ekranın üst kısmına doğru hareket etmeye başlar.
2. **Bir tuş olayına kod ekleyin**: Lazer ateşlemeyi temsil eden bir klavye tuşu seçmemiz gerekiyor.
3. **Bir lazer gibi görünen bir oyun nesnesi oluşturun**: Tuş basıldığında.

## Lazer İçin Bekleme Süresi

Lazer, örneğin *boşluk* tuşuna her basıldığında ateşlenmelidir. Oyunun kısa sürede çok fazla lazer üretmesini önlemek için bunu düzeltmemiz gerekiyor. Bu düzeltme, bir lazerin yalnızca belirli aralıklarla ateşlenmesini sağlayan bir *bekleme süresi* (cooldown) uygulayarak yapılabilir. Bunu şu şekilde uygulayabilirsiniz:

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time)
  }
}

class Weapon {
  constructor {
  }
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // produce a laser
      this.cooldown = new Cooldown(500);
    } else {
      // do nothing - it hasn't cooled down yet.
    }
  }
}
```

✅ Uzay oyunu serisinin 1. dersine göz atarak *bekleme süreleri* hakkında kendinizi hatırlatın.

## Ne Yapılacak

Önceki dersten aldığınız kodu (temizlenmiş ve yeniden düzenlenmiş olmalı) alıp genişleteceksiniz. İsterseniz II. bölümden kodla başlayabilir veya [III. Bölüm başlangıç kodu](../../../../../../../../../your-work) kullanabilirsiniz.

> ipucu: çalışacağınız lazer zaten varlıklar klasörünüzde ve kodunuzda referans verilmiş durumda.

- **Çarpışma algılama ekleyin**, bir lazer bir şeye çarptığında aşağıdaki kurallar uygulanmalıdır:
   1. **Lazer düşmana çarpar**: lazer bir düşmana çarptığında düşman yok olur.
   2. **Lazer ekranın üst kısmına çarpar**: lazer ekranın üst kısmına çarptığında yok olur.
   3. **Düşman ve kahraman çarpışması**: düşman ve kahraman birbirine çarptığında yok olur.
   4. **Düşman ekranın altına çarpar**: düşman ekranın altına çarptığında düşman ve kahraman yok olur.

## Önerilen Adımlar

`your-work` alt klasöründe sizin için oluşturulmuş dosyaları bulun. Şunları içermelidir:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Projenizi `your_work` klasöründe şu komutla başlatın:

```bash
cd your-work
npm start
```

Yukarıdaki komut, `http://localhost:5000` adresinde bir HTTP Sunucusu başlatacaktır. Bir tarayıcı açın ve bu adresi girin, şu anda kahramanı ve tüm düşmanları göstermesi gerekiyor, henüz hiçbir şey hareket etmiyor :).

### Kod Ekleyin

1. **Oyun nesneniz için bir dikdörtgen temsili ayarlayın, çarpışmayı yönetmek için** Aşağıdaki kod, bir `GameObject` için dikdörtgen temsili almanıza olanak tanır. GameObject sınıfınızı şu şekilde düzenleyin:

    ```javascript
    rectFromGameObject() {
        return {
          top: this.y,
          left: this.x,
          bottom: this.y + this.height,
          right: this.x + this.width,
        };
      }
    ```

2. **Çarpışmayı kontrol eden kod ekleyin** Bu, iki dikdörtgenin kesişip kesişmediğini test eden yeni bir fonksiyon olacaktır:

    ```javascript
    function intersectRect(r1, r2) {
      return !(
        r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top
      );
    }
    ```

3. **Lazer ateşleme yeteneği ekleyin**
   1. **Tuş olayı mesajı ekleyin**. *Boşluk* tuşu, kahraman gemisinin hemen üstünde bir lazer oluşturmalıdır. Messages nesnesine üç sabit ekleyin:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Boşluk tuşunu yönetin**. `window.addEventListener` keyup fonksiyonunu boşluk tuşunu yönetmek için düzenleyin:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Dinleyiciler ekleyin**. `initGame()` fonksiyonunu düzenleyerek kahramanın boşluk tuşuna basıldığında ateş edebilmesini sağlayın:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       ve bir düşman lazerle çarpıştığında davranışı sağlamak için yeni bir `eventEmitter.on()` fonksiyonu ekleyin:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Nesneyi hareket ettirin**, Lazerin ekranın üst kısmına doğru kademeli olarak hareket etmesini sağlayın. Daha önce yaptığınız gibi `GameObject` sınıfını genişleten yeni bir Laser sınıfı oluşturacaksınız: 
   
      ```javascript
        class Laser extends GameObject {
        constructor(x, y) {
          super(x,y);
          (this.width = 9), (this.height = 33);
          this.type = 'Laser';
          this.img = laserImg;
          let id = setInterval(() => {
            if (this.y > 0) {
              this.y -= 15;
            } else {
              this.dead = true;
              clearInterval(id);
            }
          }, 100)
        }
      }
      ```

   1. **Çarpışmaları yönetin**, Lazer için çarpışma kurallarını uygulayın. Çarpışan nesneleri test eden bir `updateGameObjects()` fonksiyonu ekleyin:

      ```javascript
      function updateGameObjects() {
        const enemies = gameObjects.filter(go => go.type === 'Enemy');
        const lasers = gameObjects.filter((go) => go.type === "Laser");
      // laser hit something
        lasers.forEach((l) => {
          enemies.forEach((m) => {
            if (intersectRect(l.rectFromGameObject(), m.rectFromGameObject())) {
            eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
              first: l,
              second: m,
            });
          }
         });
      });

        gameObjects = gameObjects.filter(go => !go.dead);
      }  
      ```

      `updateGameObjects()` fonksiyonunu `window.onload` içindeki oyun döngüsüne eklediğinizden emin olun.

   4. **Lazer için bekleme süresi uygulayın**, böylece lazer yalnızca belirli aralıklarla ateşlenebilir.

      Son olarak, Hero sınıfını düzenleyerek bekleme süresini ekleyin:

       ```javascript
      class Hero extends GameObject {
        constructor(x, y) {
          super(x, y);
          (this.width = 99), (this.height = 75);
          this.type = "Hero";
          this.speed = { x: 0, y: 0 };
          this.cooldown = 0;
        }
        fire() {
          gameObjects.push(new Laser(this.x + 45, this.y - 10));
          this.cooldown = 500;
    
          let id = setInterval(() => {
            if (this.cooldown > 0) {
              this.cooldown -= 100;
            } else {
              clearInterval(id);
            }
          }, 200);
        }
        canFire() {
          return this.cooldown === 0;
        }
      }
      ```

Bu noktada oyununuzda bazı işlevsellikler var! Ok tuşlarıyla hareket edebilir, boşluk tuşuyla lazer ateşleyebilir ve düşmanlara vurduğunuzda yok olmalarını sağlayabilirsiniz. Tebrikler!

---

## 🚀 Meydan Okuma

Bir patlama ekleyin! [Uzay Sanatı deposundaki](../../../../6-space-game/solution/spaceArt/readme.txt) oyun varlıklarına göz atın ve bir lazer bir uzaylıya çarptığında bir patlama eklemeyi deneyin.

## Ders Sonrası Test

[Ders sonrası test](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/36)

## Gözden Geçirme ve Kendi Kendine Çalışma

Şimdiye kadar oyununuzdaki aralıklarla deney yapın. Aralıkları değiştirdiğinizde ne olur? [JavaScript zamanlama olayları](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/) hakkında daha fazla bilgi edinin.

## Ödev

[Çarpışmaları keşfedin](assignment.md)

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dilindeki hali, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.