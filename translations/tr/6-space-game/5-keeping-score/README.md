<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-25T22:05:47+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "tr"
}
-->
# Uzay Oyunu Yapımı Bölüm 5: Puanlama ve Canlar

## Ders Öncesi Test

[Ders öncesi test](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/37)

Bu derste, bir oyuna puan eklemeyi ve can hesaplamayı öğreneceksiniz.

## Ekrana metin çizmek

Ekranda bir oyun puanını gösterebilmek için, metni ekrana nasıl yerleştireceğinizi bilmeniz gerekir. Bunun cevabı, canvas nesnesi üzerinde `fillText()` metodunu kullanmaktır. Ayrıca hangi fontun kullanılacağı, metnin rengi ve hizalaması (sol, sağ, merkez) gibi diğer özellikleri de kontrol edebilirsiniz. Aşağıda ekrana metin çizen bir kod örneği bulunmaktadır.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ [Canvas'a nasıl metin eklenir](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) hakkında daha fazla bilgi edinin ve kendi tasarımınızı daha şık hale getirmekten çekinmeyin!

## Oyun konsepti olarak can

Bir oyunda can sahibi olma konsepti sadece bir sayıdan ibarettir. Uzay oyunu bağlamında, geminiz hasar aldığında birer birer azalan belirli bir can seti atamak yaygındır. Bu, bir sayı yerine minigemi veya kalp gibi grafiksel bir temsil göstermek hoş bir dokunuş olabilir.

## Ne yapılacak?

Oyununuzda aşağıdakileri ekleyelim:

- **Oyun puanı**: Yok edilen her düşman gemisi için kahramana puan verilmelidir. Gemi başına 100 puan öneriyoruz. Oyun puanı ekranın sol alt köşesinde gösterilmelidir.
- **Can**: Geminizin üç canı vardır. Her düşman gemisi sizinle çarpıştığında bir can kaybedersiniz. Can puanı ekranın sağ alt köşesinde gösterilmeli ve aşağıdaki grafikle oluşturulmalıdır: ![can görseli](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.tr.png).

## Önerilen adımlar

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

Projenizi `your_work` klasöründe başlatmak için şu komutu yazın:

```bash
cd your-work
npm start
```

Yukarıdaki komut, `http://localhost:5000` adresinde bir HTTP Sunucusu başlatacaktır. Bir tarayıcı açın ve bu adresi girin. Şu anda kahramanı ve tüm düşmanları görmelisiniz. Sol ve sağ ok tuşlarına bastığınızda kahraman hareket eder ve düşmanları vurabilir.

### Kod ekleme

1. **Gerekli varlıkları kopyalayın**. `solution/assets/` klasöründen `your-work` klasörüne `life.png` varlığını ekleyin. `lifeImg`'i `window.onload` fonksiyonuna ekleyin:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. `lifeImg`'i varlıklar listesine ekleyin:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Değişkenler ekleyin**. Toplam puanı (0) ve kalan canları (3) temsil eden kod ekleyin, bu puanları ekranda gösterin.

3. **`updateGameObjects()` fonksiyonunu genişletin**. Düşman çarpışmalarını işlemek için `updateGameObjects()` fonksiyonunu genişletin:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Can ve puan ekleyin**. 
   1. **Değişkenleri başlatın**. `Hero` sınıfında `this.cooldown = 0` altında can ve puan ayarlayın:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Değişkenleri ekrana çizin**. Bu değerleri ekrana çizin:

        ```javascript
        function drawLife() {
          // TODO, 35, 27
          const START_POS = canvas.width - 180;
          for(let i=0; i < hero.life; i++ ) {
            ctx.drawImage(
              lifeImg, 
              START_POS + (45 * (i+1) ), 
              canvas.height - 37);
          }
        }
        
        function drawPoints() {
          ctx.font = "30px Arial";
          ctx.fillStyle = "red";
          ctx.textAlign = "left";
          drawText("Points: " + hero.points, 10, canvas.height-20);
        }
        
        function drawText(message, x, y) {
          ctx.fillText(message, x, y);
        }

        ```

   1. **Oyun döngüsüne metotlar ekleyin**. Bu fonksiyonları `updateGameObjects()` altında `window.onload` fonksiyonuna eklediğinizden emin olun:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Oyun kurallarını uygulayın**. Aşağıdaki oyun kurallarını uygulayın:

   1. **Her kahraman ve düşman çarpışması için**, bir can eksiltin.
   
      `Hero` sınıfını bu eksiltmeyi yapmak için genişletin:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Her lazer düşmana çarptığında**, oyun puanını 100 puan artırın.

      Kahraman sınıfını bu artırmayı yapmak için genişletin:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Bu fonksiyonları Çarpışma Olayı Emitters'a ekleyin:

        ```javascript
        eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
           first.dead = true;
           second.dead = true;
           hero.incrementPoints();
        })

        eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
           enemy.dead = true;
           hero.decrementLife();
        });
        ```

✅ JavaScript/Canvas kullanılarak oluşturulan diğer oyunları keşfetmek için biraz araştırma yapın. Ortak özellikleri nelerdir?

Bu çalışmanın sonunda, sağ alt köşede küçük 'can' gemilerini, sol alt köşede puanları görmelisiniz. Düşmanlarla çarpıştığınızda can sayınız azalmalı ve düşmanları vurduğunuzda puanlarınız artmalı. Tebrikler! Oyununuz neredeyse tamamlandı.

---

## 🚀 Meydan Okuma

Kodunuz neredeyse tamamlandı. Bir sonraki adımlarınızı hayal edebiliyor musunuz?

## Ders Sonrası Test

[Ders sonrası test](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/38)

## Gözden Geçirme ve Kendi Kendine Çalışma

Oyun puanlarını ve canları artırmanın ve azaltmanın yollarını araştırın. [PlayFab](https://playfab.com) gibi ilginç oyun motorları var. Bunlardan birini kullanmak oyununuzu nasıl geliştirebilir?

## Ödev

[Puanlama Oyunu Yap](assignment.md)

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.