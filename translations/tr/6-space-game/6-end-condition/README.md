<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05be6c37791668e3719c4fba94566367",
  "translation_date": "2025-08-29T00:25:22+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "tr"
}
-->
# Uzay Oyunu Yapımı Bölüm 6: Bitirme ve Yeniden Başlatma

## Ders Öncesi Test

[Ders öncesi testi](https://ff-quizzes.netlify.app/web/quiz/39)

Bir oyunda *bitirme koşulunu* ifade etmenin farklı yolları vardır. Oyunun yaratıcısı olarak, oyunun neden sona erdiğini belirlemek size bağlıdır. Şimdiye kadar inşa ettiğiniz uzay oyunu bağlamında, işte bazı nedenler:

- **`N` düşman gemisi yok edildi**: Oyunu farklı seviyelere böldüğünüzde, bir seviyeyi tamamlamak için `N` düşman gemisini yok etmeniz gerekmesi oldukça yaygındır.
- **Geminiz yok edildi**: Geminiz yok edilirse oyunu kaybettiğiniz oyunlar kesinlikle vardır. Bir diğer yaygın yaklaşım ise "can" kavramını kullanmaktır. Geminiz her yok edildiğinde bir can eksilir. Tüm canlar tükendiğinde oyunu kaybedersiniz.
- **`N` puan topladınız**: Bir diğer yaygın bitirme koşulu, belirli bir puan toplamaktır. Puanları nasıl kazanacağınız size bağlıdır, ancak genellikle düşman gemilerini yok etmek veya yok edilen gemilerden düşen eşyaları toplamak gibi çeşitli aktivitelere puan atanır.
- **Bir seviyeyi tamamladınız**: Bu, `X` düşman gemisinin yok edilmesi, `Y` puanın toplanması veya belirli bir eşyanın toplanması gibi birkaç koşulu içerebilir.

## Yeniden Başlatma

Eğer insanlar oyununuzu beğenirse, tekrar oynamak isteyeceklerdir. Oyun herhangi bir nedenle sona erdiğinde, yeniden başlatma seçeneği sunmalısınız.

✅ Bir oyunun hangi koşullarda sona erdiğini ve ardından nasıl yeniden başlatılmaya teşvik edildiğinizi düşünün.

## Ne Yapılacak

Oyununuz için şu kuralları ekleyeceksiniz:

1. **Oyunu kazanma**. Tüm düşman gemileri yok edildiğinde oyunu kazanırsınız. Ayrıca bir zafer mesajı görüntüleyin.
2. **Yeniden başlatma**. Tüm canlarınız tükendiğinde veya oyunu kazandığınızda, oyunu yeniden başlatma seçeneği sunmalısınız. Unutmayın! Oyunu yeniden başlatmanız ve önceki oyun durumunu temizlemeniz gerekecek.

## Önerilen Adımlar

`your-work` alt klasöründe sizin için oluşturulmuş dosyaları bulun. Şu dosyaları içermelidir:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
  -| life.png
-| index.html
-| app.js
-| package.json
```

Projenizi `your_work` klasöründe şu komutla başlatın:

```bash
cd your-work
npm start
```

Yukarıdaki komut, `http://localhost:5000` adresinde bir HTTP Sunucusu başlatacaktır. Bir tarayıcı açın ve bu adresi girin. Oyununuz oynanabilir durumda olmalıdır.

> ipucu: Visual Studio Code'da uyarılardan kaçınmak için, `window.onload` fonksiyonunu `gameLoopId`'yi olduğu gibi çağıracak şekilde düzenleyin (başında `let` olmadan) ve `gameLoopId`'yi dosyanın en üstünde bağımsız olarak tanımlayın: `let gameLoopId;`

### Kod Ekleme

1. **Bitirme koşulunu takip edin**. Düşman sayısını veya kahraman gemisinin yok edilip edilmediğini takip eden şu iki fonksiyonu ekleyin:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Mesaj işleyicilere mantık ekleyin**. `eventEmitter`'ı şu koşulları işlemek için düzenleyin:

    ```javascript
    eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
        first.dead = true;
        second.dead = true;
        hero.incrementPoints();

        if (isEnemiesDead()) {
          eventEmitter.emit(Messages.GAME_END_WIN);
        }
    });

    eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
        enemy.dead = true;
        hero.decrementLife();
        if (isHeroDead())  {
          eventEmitter.emit(Messages.GAME_END_LOSS);
          return; // loss before victory
        }
        if (isEnemiesDead()) {
          eventEmitter.emit(Messages.GAME_END_WIN);
        }
    });
    
    eventEmitter.on(Messages.GAME_END_WIN, () => {
        endGame(true);
    });
      
    eventEmitter.on(Messages.GAME_END_LOSS, () => {
      endGame(false);
    });
    ```

1. **Yeni mesaj türleri ekleyin**. Bu mesajları constants nesnesine ekleyin:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Yeniden başlatma kodu ekleyin**. Seçilen bir tuşa basıldığında oyunu yeniden başlatacak kodu ekleyin.

   1. **`Enter` tuşuna basmayı dinleyin**. Pencerenizin eventListener'ını bu tuşu dinleyecek şekilde düzenleyin:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Yeniden başlatma mesajı ekleyin**. Bu mesajı Messages sabitine ekleyin:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Oyun kurallarını uygulayın**. Şu oyun kurallarını uygulayın:

   1. **Oyuncu kazanma koşulu**. Tüm düşman gemileri yok edildiğinde bir zafer mesajı görüntüleyin.

      1. İlk olarak, bir `displayMessage()` fonksiyonu oluşturun:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Bir `endGame()` fonksiyonu oluşturun:

        ```javascript
        function endGame(win) {
          clearInterval(gameLoopId);
        
          // set a delay so we are sure any paints have finished
          setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            if (win) {
              displayMessage(
                "Victory!!! Pew Pew... - Press [Enter] to start a new game Captain Pew Pew",
                "green"
              );
            } else {
              displayMessage(
                "You died !!! Press [Enter] to start a new game Captain Pew Pew"
              );
            }
          }, 200)  
        }
        ```

   1. **Yeniden başlatma mantığı**. Tüm canlar tükendiğinde veya oyuncu oyunu kazandığında, oyunun yeniden başlatılabileceğini gösterin. Ayrıca, *yeniden başlatma* tuşuna basıldığında oyunu yeniden başlatın (hangi tuşun yeniden başlatmaya atanacağına siz karar verebilirsiniz).

      1. `resetGame()` fonksiyonunu oluşturun:

        ```javascript
        function resetGame() {
          if (gameLoopId) {
            clearInterval(gameLoopId);
            eventEmitter.clear();
            initGame();
            gameLoopId = setInterval(() => {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.fillStyle = "black";
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              drawPoints();
              drawLife();
              updateGameObjects();
              drawGameObjects(ctx);
            }, 100);
          }
        }
        ```

     1. `initGame()` içinde oyunu sıfırlamak için `eventEmitter` çağrısı ekleyin:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. EventEmitter'a bir `clear()` fonksiyonu ekleyin:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Tebrikler, Kaptan! Oyununuz tamamlandı! Harika iş çıkardınız! 🚀 💥 👽

---

## 🚀 Zorluk

Bir ses ekleyin! Oyun deneyiminizi geliştirmek için bir ses ekleyebilir misiniz? Belki bir lazer çarptığında, kahraman öldüğünde veya kazandığında bir ses çalabilir. JavaScript kullanarak ses çalmayı öğrenmek için bu [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play)'a göz atın.

## Ders Sonrası Test

[Ders sonrası testi](https://ff-quizzes.netlify.app/web/quiz/40)

## Gözden Geçirme ve Kendi Kendine Çalışma

Göreviniz, yeni bir örnek oyun oluşturmaktır, bu yüzden inşa edebileceğiniz oyun türlerini görmek için ilginç oyunları keşfedin.

## Ödev

[Örnek Bir Oyun Yapın](assignment.md)

---

**Feragatname**:  
Bu belge, [Co-op Translator](https://github.com/Azure/co-op-translator) adlı yapay zeka çeviri hizmeti kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlama veya yanlış yorumlamalardan sorumlu değiliz.