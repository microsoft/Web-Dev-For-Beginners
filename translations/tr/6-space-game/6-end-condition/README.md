<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46bcdd9a0174031655a49bb062aa279c",
  "translation_date": "2025-10-23T00:06:59+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "tr"
}
-->
# Uzay Oyunu Yapımı Bölüm 6: Bitiş ve Yeniden Başlatma

Her harika oyun, net bitiş koşullarına ve sorunsuz bir yeniden başlatma mekanizmasına ihtiyaç duyar. Hareket, savaş ve puanlama özelliklerine sahip etkileyici bir uzay oyunu yaptınız - şimdi oyununuzu tamamlanmış hissettirecek son parçaları ekleme zamanı.

Oyununuz şu anda NASA'nın 1977'de fırlattığı Voyager sondaları gibi sonsuza kadar çalışıyor - onlarca yıl sonra bile uzayda yolculuklarına devam ediyorlar. Bu, uzay keşfi için uygun olsa da, oyunlar tatmin edici deneyimler yaratmak için tanımlı bitiş noktalarına ihtiyaç duyar.

Bugün, doğru kazanma/kaybetme koşullarını ve bir yeniden başlatma sistemini uygulayacağız. Bu dersin sonunda, oyuncuların tamamlayıp tekrar oynayabileceği, klasik arcade oyunları gibi bir cilalı oyun sahibi olacaksınız.

## Ders Öncesi Test

[Ders öncesi test](https://ff-quizzes.netlify.app/web/quiz/39)

## Oyun Bitiş Koşullarını Anlamak

Oyununuz ne zaman bitmeli? Bu temel soru, ilk arcade döneminden beri oyun tasarımını şekillendirmiştir. Pac-Man, hayaletler tarafından yakalandığınızda veya tüm noktaları temizlediğinizde sona ererken, Space Invaders, uzaylılar alt sıraya ulaştığında veya hepsini yok ettiğinizde sona erer.

Oyun yaratıcısı olarak, zafer ve yenilgi koşullarını siz belirlersiniz. Uzay oyunumuz için, ilgi çekici bir oyun deneyimi yaratacak kanıtlanmış yaklaşımlar şunlardır:

- **`N` Düşman gemisi yok edildi**: Oyunu farklı seviyelere bölerseniz, bir seviyeyi tamamlamak için `N` düşman gemisini yok etmeniz gerekebilir.
- **Geminiz yok edildi**: Geminiz yok edilirse oyunu kaybedersiniz. Yaygın bir başka yaklaşım, "can" kavramını kullanmaktır. Geminiz her yok edildiğinde bir can kaybedersiniz. Tüm canlar kaybedildiğinde oyun sona erer.
- **`N` puan topladınız**: Bir başka yaygın bitiş koşulu, puan toplamanızdır. Puanları nasıl topladığınız size bağlıdır, ancak genellikle düşman gemisini yok etmek veya yok edilen gemilerden düşen öğeleri toplamak gibi çeşitli etkinliklere puan atanır.
- **Bir seviyeyi tamamladınız**: Bu, `X` düşman gemisi yok edildi, `Y` puan toplandı veya belirli bir öğe toplandı gibi birkaç koşulu içerebilir.

## Oyun Yeniden Başlatma İşlevselliğini Uygulamak

İyi oyunlar, sorunsuz yeniden başlatma mekanizmalarıyla tekrar oynanabilirliği teşvik eder. Oyuncular bir oyunu tamamladığında (veya yenilgiyle karşılaştığında), genellikle hemen tekrar denemek isterler - ister puanlarını geçmek ister performanslarını geliştirmek için.

Tetris bunu mükemmel bir şekilde örnekler: bloklarınız en üste ulaştığında, karmaşık menülerde gezinmeden hemen yeni bir oyun başlatabilirsiniz. Oyuncuları hızlı bir şekilde tekrar aksiyona döndüren, oyunun durumunu temiz bir şekilde sıfırlayan benzer bir yeniden başlatma sistemi oluşturacağız.

✅ **Düşünce**: Oynadığınız oyunları düşünün. Hangi koşullarda sona eriyorlar ve nasıl yeniden başlatmanız isteniyor? Yeniden başlatma deneyimini sorunsuz veya sinir bozucu yapan nedir?

## Ne Yapacaksınız?

Projenizi tamamlanmış bir oyun deneyimine dönüştüren son özellikleri uygulayacaksınız. Bu unsurlar, cilalı oyunları temel prototiplerden ayırır.

**Bugün ekleyeceğimiz şeyler:**

1. **Zafer koşulu**: Tüm düşmanları yok edin ve hak ettiğiniz kutlamayı alın!
2. **Yenilgi koşulu**: Canlarınız bittiğinde yenilgi ekranıyla yüzleşin
3. **Yeniden başlatma mekanizması**: Enter tuşuna basarak hemen geri dönün - çünkü bir oyun asla yetmez
4. **Durum yönetimi**: Her seferinde temiz bir başlangıç - önceki oyundan kalan düşmanlar veya garip hatalar yok

## Başlarken

Geliştirme ortamınızı hazırlayalım. Önceki derslerden tüm uzay oyunu dosyalarınız hazır olmalı.

**Projeniz aşağıdaki gibi görünmelidir:**

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

**Geliştirme sunucunuzu başlatın:**

```bash
cd your-work
npm start
```

**Bu komut:**
- Yerel bir sunucuyu `http://localhost:5000` adresinde çalıştırır
- Dosyalarınızı düzgün bir şekilde sunar
- Değişiklik yaptığınızda otomatik olarak yeniler

Tarayıcınızda `http://localhost:5000` adresini açın ve oyununuzun çalıştığını doğrulayın. Hareket edebilmeniz, ateş edebilmeniz ve düşmanlarla etkileşimde bulunabilmeniz gerekir. Onaylandıktan sonra uygulamaya geçebiliriz.

> 💡 **Profesyonel İpucu**: Visual Studio Code'da uyarılardan kaçınmak için, `gameLoopId`'yi dosyanızın en üstünde `let gameLoopId;` olarak tanımlayın, `window.onload` fonksiyonunun içinde tanımlamak yerine. Bu, modern JavaScript değişken tanımlama en iyi uygulamalarını takip eder.

## Uygulama Adımları

### Adım 1: Bitiş Koşullarını İzleyen Fonksiyonlar Oluşturun

Oyunun ne zaman bitmesi gerektiğini izlemek için fonksiyonlara ihtiyacımız var. Uluslararası Uzay İstasyonu'ndaki sensörler gibi, bu fonksiyonlar sürekli olarak oyun durumunu kontrol edecek.

```javascript
function isHeroDead() {
  return hero.life <= 0;
}

function isEnemiesDead() {
  const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
  return enemies.length === 0;
}
```

**Burada neler oluyor:**
- **Kontrol eder**: Kahramanımızın canları bitmiş mi (vah vah!)
- **Sayar**: Kaç düşman hala hayatta ve savaşıyor
- **`true` döner**: Savaş alanı düşmanlardan temizlendiğinde
- **Basit true/false mantığı kullanır**: İşleri basit tutar
- **Filtreler**: Tüm oyun nesnelerini tarayarak hayatta kalanları bulur

### Adım 2: Bitiş Koşulları için Olay İşleyicileri Güncelleyin

Şimdi bu koşul kontrollerini oyunun olay sistemine bağlayacağız. Her çarpışma gerçekleştiğinde, oyun bunun bir bitiş koşulunu tetikleyip tetiklemediğini değerlendirecek. Bu, kritik oyun olayları için anında geri bildirim oluşturur.

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

**Burada neler oluyor:**
- **Lazer düşmana çarpar**: İkisi de kaybolur, puan alırsınız ve kazandınız mı kontrol edilir
- **Düşman size çarpar**: Bir can kaybedersiniz ve hala hayatta mısınız kontrol edilir
- **Akıllı sıralama**: Önce yenilgi kontrol edilir (kimse aynı anda kazanıp kaybetmek istemez!)
- **Anında tepkiler**: Önemli bir şey olduğunda, oyun bunu hemen bilir

### Adım 3: Yeni Mesaj Sabitlerini Ekleyin

`Messages` sabit nesnenize yeni mesaj türleri eklemeniz gerekecek. Bu sabitler, tutarlılığı korumaya ve olay sisteminizdeki yazım hatalarını önlemeye yardımcı olur.

```javascript
GAME_END_LOSS: "GAME_END_LOSS",
GAME_END_WIN: "GAME_END_WIN",
```

**Yukarıda şunları yaptık:**
- **Ekledik**: Oyun bitiş olayları için sabitler, tutarlılığı korumak için
- **Kullandık**: Olay amacını açıkça belirten açıklayıcı isimler
- **Takip ettik**: Mesaj türleri için mevcut adlandırma kurallarını

### Adım 4: Yeniden Başlatma Kontrollerini Uygulama

Şimdi oyuncuların oyunu yeniden başlatmasına olanak tanıyan klavye kontrolleri ekleyeceksiniz. Enter tuşu, genellikle eylemleri onaylamak ve yeni oyunlar başlatmakla ilişkilendirildiği için doğal bir seçimdir.

**Mevcut keydown olay dinleyicinize Enter tuşu algılamayı ekleyin:**

```javascript
else if(evt.key === "Enter") {
   eventEmitter.emit(Messages.KEY_EVENT_ENTER);
}
```

**Yeni mesaj sabitini ekleyin:**

```javascript
KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
```

**Bilmeniz gerekenler:**
- **Mevcut klavye olay işleme sisteminizi genişletir**
- **Enter tuşunu** yeniden başlatma tetikleyicisi olarak kullanır, kullanıcı deneyimi açısından sezgisel
- **Özel bir olay yayar**: Oyunun diğer bölümleri bunu dinleyebilir
- **Aynı deseni korur**: Diğer klavye kontrollerinizle uyumlu

### Adım 5: Mesaj Görüntüleme Sistemi Oluşturun

Oyununuzun sonuçları oyunculara net bir şekilde iletmesi gerekir. Zafer ve yenilgi durumlarını renk kodlu metinlerle gösteren bir mesaj sistemi oluşturacağız. Bu, erken bilgisayar sistemlerinin yeşil başarı ve kırmızı hata sinyalleriyle çalışan terminal arayüzlerine benzer.

**`displayMessage()` fonksiyonunu oluşturun:**

```javascript
function displayMessage(message, color = "red") {
  ctx.font = "30px Arial";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}
```

**Adım adım neler oluyor:**
- **Yazı tipi boyutunu ve ailesini ayarlar**: Net, okunabilir metin için
- **Bir renk parametresi uygular**: Uyarılar için varsayılan olarak "kırmızı"
- **Metni yatay ve dikey olarak tuvalin ortasına yerleştirir**
- **Modern JavaScript varsayılan parametrelerini kullanır**: Esnek renk seçenekleri için
- **Tuval 2D bağlamını kullanır**: Doğrudan metin işleme için

**`endGame()` fonksiyonunu oluşturun:**

```javascript
function endGame(win) {
  clearInterval(gameLoopId);

  // Set a delay to ensure any pending renders complete
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

**Bu fonksiyonun yaptığı şeyler:**
- **Her şeyi dondurur**: Artık hareket eden gemiler veya lazerler yok
- **Küçük bir duraklama yapar** (200ms): Son kareyi bitirmek için
- **Ekranı temizler ve siyaha boyar**: Dramatik bir etki için
- **Kazananlar ve kaybedenler için farklı mesajlar gösterir**
- **Haberleri renk kodlar**: İyi için yeşil, kötü için... eh, kırmızı
- **Oyunculara tam olarak nasıl geri döneceklerini söyler**

### Adım 6: Oyun Sıfırlama İşlevselliğini Uygulama

Sıfırlama sistemi, mevcut oyun durumunu tamamen temizlemeli ve yeni bir oyun oturumu başlatmalıdır. Bu, oyuncuların önceki oyundan kalan veriler olmadan temiz bir başlangıç yapmasını sağlar.

**`resetGame()` fonksiyonunu oluşturun:**

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

**Her bir kısmı anlayalım:**
- **Kontrol eder**: Şu anda bir oyun döngüsü çalışıyor mu
- **Mevcut oyun döngüsünü temizler**: Tüm mevcut oyun etkinliğini durdurur
- **Tüm olay dinleyicilerini kaldırır**: Bellek sızıntılarını önler
- **Oyun durumunu yeniden başlatır**: Yeni nesneler ve değişkenlerle
- **Yeni bir oyun döngüsü başlatır**: Tüm temel oyun fonksiyonlarıyla
- **Aynı 100ms aralığını korur**: Tutarlı oyun performansı için

**Enter tuşu olay işleyicisini `initGame()` fonksiyonunuza ekleyin:**

```javascript
eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
  resetGame();
});
```

**EventEmitter sınıfınıza `clear()` metodunu ekleyin:**

```javascript
clear() {
  this.listeners = {};
}
```

**Hatırlamanız gereken önemli noktalar:**
- **Enter tuşu basımını** oyun sıfırlama işlevselliğine bağlar
- **Bu olay dinleyiciyi** oyun başlatma sırasında kaydeder
- **Tüm olay dinleyicilerini temizlemek için** temiz bir yol sağlar
- **Bellek sızıntılarını önler**: Oyunlar arasında olay işleyicileri temizleyerek
- **Dinleyiciler nesnesini sıfırlar**: Yeni başlatma için boş bir duruma

## Tebrikler! 🎉

👽 💥 🚀 Baştan sona eksiksiz bir oyun oluşturmayı başardınız. 1970'lerde ilk video oyunlarını yaratan programcılar gibi, kod satırlarını etkileşimli bir deneyime dönüştürdünüz. 🚀 💥 👽

**Başardıklarınız:**
- **Tam kazanma ve kaybetme koşullarını** kullanıcı geri bildirimiyle uyguladınız
- **Sorunsuz bir yeniden başlatma sistemi** oluşturdunuz
- **Oyun durumları için net görsel iletişim tasarladınız**
- **Karmaşık oyun durumu geçişlerini ve temizliğini yönettiniz**
- **Tüm bileşenleri** uyumlu, oynanabilir bir oyuna birleştirdiniz

## GitHub Copilot Agent Challenge 🚀

Agent modunu kullanarak aşağıdaki meydan okumayı tamamlayın:

**Açıklama:** Zorluk seviyesi artan ve bonus özellikler içeren bir seviye ilerleme sistemi uygulayarak uzay oyununu geliştirin.

**İstek:** Her seviyede daha fazla düşman gemisi, artan hız ve sağlık ile çok seviyeli bir uzay oyunu sistemi oluşturun. Her seviyede artan bir puan çarpanı ekleyin ve düşmanlar yok edildiğinde rastgele ortaya çıkan güçlendirmeler (hızlı ateş veya kalkan gibi) uygulayın. Seviye tamamlama bonusu ekleyin ve mevcut seviyeyi ekrandaki mevcut puan ve canlarla birlikte gösterin.

Daha fazla bilgi için [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) bağlantısını inceleyin.

## 🚀 İsteğe Bağlı Geliştirme Meydan Okuması

**Oyununuza Ses Ekleyin**: Oyun deneyiminizi ses efektleri ekleyerek geliştirin! Şunlar için ses eklemeyi düşünün:

- **Lazer atışları**: Oyuncu ateş ettiğinde
- **Düşman yok edilmesi**: Gemiler vurulduğunda
- **Kahraman hasarı**: Oyuncu darbe aldığında
- **Zafer müziği**: Oyun kazanıldığında
- **Yenilgi sesi**: Oyun kaybedildiğinde

**Ses uygulama örneği:**

```javascript
// Create audio objects
const laserSound = new Audio('assets/laser.wav');
const explosionSound = new Audio('assets/explosion.wav');

// Play sounds during game events
function playLaserSound() {
  laserSound.currentTime = 0; // Reset to beginning
  laserSound.play();
}
```

**Bilmeniz gerekenler:**
- **Farklı ses efektleri için** Audio nesneleri oluşturur
- **`currentTime`'ı sıfırlar**: Hızlı ateş ses efektlerine izin vermek için
- **Tarayıcı otomatik oynatma politikalarını yönetir**: Sesleri kullanıcı etkileşimlerinden tetikleyerek
- **Ses hacmini ve zamanlamasını yönetir**: Daha iyi bir oyun deneyimi için

> 💡 **Öğrenme Kaynağı**: JavaScript oyunlarında ses uygulamayı öğrenmek için bu [ses kum havuzunu](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) keşfedin.

## Ders Sonrası Test

[Ders sonrası test](https://ff-quizzes.netlify.app/web/quiz/40)

## Gözden Geçirme ve Kendi Kendine Çalışma

Göreviniz, yeni bir örnek oyun oluşturmak, bu yüzden hangi türde bir oyun yapabileceğinizi görmek için ilginç oyunları keşfedin.

## Ödev

[Örnek Bir Oyun Yapın](assignment.md)

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.