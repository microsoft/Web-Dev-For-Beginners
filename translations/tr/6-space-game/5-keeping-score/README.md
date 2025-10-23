<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-23T00:09:01+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "tr"
}
-->
# Uzay Oyunu Yapımı Bölüm 5: Puanlama ve Canlar

## Ders Öncesi Test

[Ders öncesi test](https://ff-quizzes.netlify.app/web/quiz/37)

Uzay oyununuzu gerçek bir oyun gibi hissettirmeye hazır mısınız? Puanlama ve can yönetimi ekleyelim - Space Invaders gibi erken dönem arcade oyunlarını basit bir gösterimden bağımlılık yaratan eğlenceye dönüştüren temel mekanikler. İşte oyununuzun gerçekten oynanabilir hale geldiği yer.

## Ekranda Metin Çizmek - Oyununuzun Sesi

Puanınızı göstermek için, tuval üzerinde metin nasıl çizileceğini öğrenmemiz gerekiyor. `fillText()` yöntemi, bunun için ana aracınızdır - klasik arcade oyunlarında puanları ve durum bilgilerini göstermek için kullanılan aynı tekniktir.

Metin görünümünü tamamen kontrol edebilirsiniz:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ [Tuval üzerine metin ekleme](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) hakkında daha fazla bilgi edinin - yazı tipleri ve stil ile ne kadar yaratıcı olabileceğinize şaşırabilirsiniz!

## Canlar - Sadece Bir Sayıdan Fazlası

Oyun tasarımında, bir "can" oyuncunun hata yapma payını temsil eder. Bu kavram, birden fazla top ile oynayabileceğiniz pinball makinelerine kadar uzanır. Asteroids gibi erken dönem video oyunlarında, canlar oyunculara risk alma ve hatalardan öğrenme izni verdi.

Görsel temsil büyük önem taşır - sadece "Canlar: 3" yerine gemi simgeleri göstermek, dil engellerini aşmak için erken arcade kabinlerinin ikonografi kullandığı gibi, anında görsel tanıma sağlar.

## Oyununuzun Ödül Sistemini İnşa Etmek

Şimdi oyuncuları meşgul tutan temel geri bildirim sistemlerini uygulayacağız:

- **Puanlama sistemi**: Her yok edilen düşman gemisi 100 puan kazandırır (yuvarlak sayılar oyuncuların zihinsel olarak hesaplamasını kolaylaştırır). Puan, sol alt köşede gösterilir.
- **Can sayacı**: Kahramanınız üç canla başlar - erken dönem arcade oyunlarının zorluk ve oynanabilirlik dengesini sağlamak için belirlediği bir standart. Her düşmanla çarpışma bir cana mal olur. Kalan canlar sağ alt köşede gemi simgeleriyle gösterilir ![can resmi](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.tr.png).

## Hadi Başlayalım!

Öncelikle çalışma alanınızı ayarlayın. `your-work` alt klasöründeki dosyalara gidin. Bu dosyaları görmelisiniz:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Oyununuzu test etmek için, `your_work` klasöründen geliştirme sunucusunu başlatın:

```bash
cd your-work
npm start
```

Bu, `http://localhost:5000` adresinde yerel bir sunucu çalıştırır. Bu adresi tarayıcınızda açarak oyununuzu görebilirsiniz. Kontrolleri ok tuşlarıyla test edin ve her şeyin çalıştığını doğrulamak için düşmanları vurmaya çalışın.

### Kodlama Zamanı!

1. **Gerekli görsel varlıkları alın**. `solution/assets/` klasöründen `life.png` varlığını kopyalayarak `your-work` klasörüne ekleyin. Ardından `lifeImg`'i window.onload fonksiyonunuza ekleyin:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. `lifeImg`'i varlık listenize eklemeyi unutmayın:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Oyun değişkenlerinizi ayarlayın**. Toplam puanınızı (0'dan başlayarak) ve kalan canlarınızı (3'ten başlayarak) takip etmek için biraz kod ekleyin. Bunları ekranda göstereceğiz, böylece oyuncular her zaman durumlarını bilecek.

3. **Çarpışma algılama uygulayın**. `updateGameObjects()` fonksiyonunuzu düşmanların kahramanınızla çarpıştığını algılayacak şekilde genişletin:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Kahramanınıza can ve puan takibi ekleyin**. 
   1. **Sayaçları başlatın**. `Hero` sınıfınızdaki `this.cooldown = 0` altında, can ve puan ayarlarını yapın:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Bu değerleri oyuncuya gösterin**. Bu değerleri ekranda çizmek için fonksiyonlar oluşturun:

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

   1. **Her şeyi oyun döngünüze bağlayın**. Bu fonksiyonları `updateGameObjects()`'tan hemen sonra window.onload fonksiyonunuza ekleyin:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Oyun sonuçları ve ödüller uygulayın**. Şimdi oyuncu eylemlerini anlamlı kılan geri bildirim sistemlerini ekleyeceğiz:

   1. **Çarpışmalar can kaybettirir**. Kahramanınız her düşmanla çarpıştığında bir can kaybetmelisiniz.
   
      `Hero` sınıfınıza bu yöntemi ekleyin:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Düşmanları vurmak puan kazandırır**. Her başarılı vuruş 100 puan kazandırır, doğru atışlar için anında olumlu geri bildirim sağlar.

      Kahraman sınıfınızı bu artırma yöntemiyle genişletin:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Şimdi bu fonksiyonları çarpışma olaylarınıza bağlayın:

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

✅ JavaScript ve Canvas ile yapılmış diğer oyunlar hakkında meraklı mısınız? Biraz araştırma yapın - mümkün olan şeylere şaşırabilirsiniz!

Bu özellikleri uyguladıktan sonra, oyununuzu test ederek tam geri bildirim sistemini çalışırken görün. Sağ alt köşede can simgelerini, sol alt köşede puanınızı görmelisiniz ve çarpışmaların canları azalttığını, başarılı atışların ise puanınızı artırdığını izleyin.

Oyununuz artık erken dönem arcade oyunlarını bu kadar etkileyici yapan temel mekaniklere sahip - net hedefler, anında geri bildirim ve oyuncu eylemleri için anlamlı sonuçlar.

---

## GitHub Copilot Agent Challenge 🚀

Agent modunu kullanarak aşağıdaki meydan okumayı tamamlayın:

**Açıklama:** Uzay oyununun puanlama sistemini, kalıcı depolama ve bonus puanlama mekanikleri ile geliştirin.

**İstek:** Oyuncunun en iyi puanını localStorage'a kaydeden bir yüksek puan sistemi oluşturun. Ardışık düşman öldürmeleri için bonus puanlar (kombinasyon sistemi) ekleyin ve farklı düşman türleri için farklı puan değerleri uygulayın. Oyuncu yeni bir yüksek puan elde ettiğinde görsel bir gösterge ekleyin ve oyun ekranında mevcut yüksek puanı gösterin.

## 🚀 Meydan Okuma

Artık puanlama ve canlara sahip işlevsel bir oyununuz var. Oyuncu deneyimini geliştirebilecek ek özellikler neler olabilir?

## Ders Sonrası Test

[Ders sonrası test](https://ff-quizzes.netlify.app/web/quiz/38)

## Gözden Geçirme ve Kendi Kendine Çalışma

Daha fazla keşfetmek ister misiniz? Oyun puanlama ve can sistemlerine farklı yaklaşımları araştırın. [PlayFab](https://playfab.com) gibi puanlama, liderlik tabloları ve oyuncu ilerlemesini yöneten büyüleyici oyun motorları var. Böyle bir şeyi entegre etmek oyununuzu bir sonraki seviyeye nasıl taşıyabilir?

## Ödev

[Puanlama Oyunu Yap](assignment.md)

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çeviriler hata veya yanlışlıklar içerebilir. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.