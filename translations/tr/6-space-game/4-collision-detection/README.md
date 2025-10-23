<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4b1d441cfd31924084956000c0fee5a5",
  "translation_date": "2025-10-23T00:07:49+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "tr"
}
-->
# Uzay Oyunu Yapımı Bölüm 4: Lazer Ekleme ve Çarpışmaları Algılama

## Ders Öncesi Test

[Ders öncesi test](https://ff-quizzes.netlify.app/web/quiz/35)

Star Wars'ta Luke'un proton torpidolarının Ölüm Yıldızı'nın egzoz portuna çarptığı anı düşünün. O hassas çarpışma algılama, galaksinin kaderini değiştirdi! Oyunlarda çarpışma algılama aynı şekilde çalışır - nesnelerin ne zaman etkileşime geçtiğini ve sonrasında ne olduğunu belirler.

Bu derste, uzay oyununuza lazer silahları ekleyecek ve çarpışma algılamayı uygulayacaksınız. NASA'nın uzay araçlarının enkazdan kaçınmak için yörüngelerini hesaplaması gibi, oyun nesnelerinin kesiştiği anları algılamayı öğreneceksiniz. Bunu birbirini tamamlayan adımlara bölerek öğreneceğiz.

Dersin sonunda, lazerlerin düşmanları yok ettiği ve çarpışmaların oyun olaylarını tetiklediği çalışan bir savaş sistemi oluşturmuş olacaksınız. Bu çarpışma prensipleri, fizik simülasyonlarından etkileşimli web arayüzlerine kadar her şeyde kullanılır.

✅ Yazılmış ilk bilgisayar oyunu hakkında biraz araştırma yapın. İşlevi neydi?

## Çarpışma Algılama

Çarpışma algılama, Apollo ay modülündeki yakınlık sensörleri gibi çalışır - sürekli mesafeleri kontrol eder ve nesneler çok yaklaştığında uyarılar verir. Oyunlarda bu sistem, nesnelerin ne zaman etkileşime geçtiğini ve sonrasında ne olması gerektiğini belirler.

Kullanacağımız yaklaşım, her oyun nesnesini bir dikdörtgen olarak ele alır. Bu, hava trafik kontrol sistemlerinin uçakları izlemek için basitleştirilmiş geometrik şekiller kullanmasına benzer. Bu dikdörtgen yöntemi basit görünebilir, ancak hesaplama açısından verimlidir ve çoğu oyun senaryosu için iyi çalışır.

### Dikdörtgen Temsili

Her oyun nesnesinin, Mars Pathfinder gezgininin Mars yüzeyindeki konumunu haritaladığı gibi koordinat sınırlarına ihtiyacı vardır. İşte bu sınır koordinatlarını nasıl tanımladığımız:

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

**Bunu parçalayalım:**
- **Üst kenar**: Nesnenizin dikey olarak başladığı yer (y konumu)
- **Sol kenar**: Yatay olarak başladığı yer (x konumu)
- **Alt kenar**: Y konumuna yüksekliği ekleyin - şimdi nerede bittiğini biliyorsunuz!
- **Sağ kenar**: Genişliği x konumuna ekleyin - ve tam sınırı elde ettiniz.

### Kesişim Algoritması

Dikdörtgen kesişimlerini algılamak, Hubble Uzay Teleskobu'nun görüş alanındaki gök cisimlerinin örtüşüp örtüşmediğini belirleme mantığına benzer. Algoritma ayrımı kontrol eder:

```javascript
function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}
```

**Ayrım testi radar sistemleri gibi çalışır:**
- Dikdörtgen 2 tamamen dikdörtgen 1'in sağında mı?
- Dikdörtgen 2 tamamen dikdörtgen 1'in solunda mı?
- Dikdörtgen 2 tamamen dikdörtgen 1'in altında mı?
- Dikdörtgen 2 tamamen dikdörtgen 1'in üstünde mi?

Bu koşulların hiçbiri doğru değilse, dikdörtgenler örtüşüyor demektir. Bu yaklaşım, radar operatörlerinin iki uçağın güvenli mesafede olup olmadığını belirleme yöntemine benzer.

## Nesne Yaşam Döngülerini Yönetme

Bir lazer bir düşmana çarptığında, her iki nesnenin de oyundan kaldırılması gerekir. Ancak, döngü sırasında nesneleri silmek çökme sorunlarına neden olabilir - Apollo Rehberlik Bilgisayarı gibi erken bilgisayar sistemlerinde zor yoldan öğrenilen bir ders. Bunun yerine, nesneleri kareler arasında güvenli bir şekilde kaldıran bir "silinmek için işaretleme" yaklaşımı kullanıyoruz.

Bir şeyi kaldırmak için nasıl işaretlediğimiz:

```javascript
// Mark object for removal
enemy.dead = true;
```

**Bu yaklaşım neden işe yarar:**
- Nesneyi "ölü" olarak işaretleriz ancak hemen silmeyiz
- Bu, mevcut oyun karesinin güvenli bir şekilde tamamlanmasını sağlar
- Zaten silinmiş bir şeyi kullanmaya çalışmaktan kaynaklanan çökme sorunlarını önler!

Sonraki render döngüsünden önce işaretlenmiş nesneleri filtreleyin:

```javascript
gameObjects = gameObjects.filter(go => !go.dead);
```

**Bu filtreleme ne yapar:**
- Sadece "canlı" nesnelerle yeni bir liste oluşturur
- Ölü olarak işaretlenmiş olan her şeyi çıkarır
- Oyununuzun sorunsuz çalışmasını sağlar
- Yok edilen nesnelerin birikmesinden kaynaklanan bellek şişmesini önler

## Lazer Mekaniklerini Uygulama

Oyunlardaki lazer mermileri, Star Trek'teki foton torpidoları gibi çalışır - düz çizgiler halinde hareket eden ve bir şeye çarpana kadar ilerleyen ayrık nesnelerdir. Her boşluk tuşuna basıldığında, ekran boyunca hareket eden yeni bir lazer nesnesi oluşturulur.

Bunu çalıştırmak için birkaç farklı parçayı koordine etmemiz gerekiyor:

**Uygulanacak ana bileşenler:**
- **Oluştur** kahramanın konumundan çıkan lazer nesneleri
- **Yönet** lazer hareketini ve yaşam döngüsünü
- **Görsel temsil** için lazer mermilerini uygula

## Ateşleme Hızı Kontrolünü Uygulama

Sınırsız ateşleme hızları oyun motorunu zorlar ve oyunu çok kolay hale getirir. Gerçek silah sistemleri benzer kısıtlamalarla karşı karşıya - USS Enterprise'ın fazörleri bile atışlar arasında yeniden şarj olmak için zamana ihtiyaç duyardı.

Spam ateşlemeyi önleyen ve kontrolleri duyarlı tutan bir soğuma sistemi uygulayacağız:

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time);
  }
}

class Weapon {
  constructor() {
    this.cooldown = null;
  }
  
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // Create laser projectile
      this.cooldown = new Cooldown(500);
    } else {
      // Weapon is still cooling down
    }
  }
}
```

**Soğuma nasıl çalışır:**
- Oluşturulduğunda, silah "sıcak" başlar (henüz ateş edemez)
- Zaman aşımı süresinden sonra "soğur" (ateş etmeye hazır)
- Ateşlemeden önce kontrol ederiz: "Silah soğuk mu?"
- Bu, spam tıklamayı önlerken kontrolleri duyarlı tutar

✅ Soğuma sürelerini hatırlamak için uzay oyunu serisinin 1. dersine göz atın.

## Çarpışma Sistemini Oluşturma

Mevcut uzay oyunu kodunuzu genişleterek bir çarpışma algılama sistemi oluşturacaksınız. Uluslararası Uzay İstasyonu'nun otomatik çarpışma önleme sistemi gibi, oyununuz sürekli olarak nesne konumlarını izleyecek ve kesişimlere tepki verecek.

Önceki dersinizin kodundan başlayarak, nesne etkileşimlerini yöneten belirli kurallarla çarpışma algılamayı ekleyeceksiniz.

> 💡 **Pro İpucu**: Lazer sprite'ı zaten varlıklar klasörünüzde ve kodunuzda referans olarak bulunuyor, uygulamaya hazır.

### Uygulanacak Çarpışma Kuralları

**Eklenecek oyun mekanikleri:**
1. **Lazer düşmana çarpar**: Lazer mermisi bir düşmana çarptığında düşman nesnesi yok edilir
2. **Lazer ekran sınırına çarpar**: Lazer ekranın üst kenarına ulaştığında kaldırılır
3. **Düşman ve kahraman çarpışması**: İki nesne kesiştiğinde her ikisi de yok edilir
4. **Düşman alt kenara ulaşır**: Düşmanlar ekranın altına ulaştığında oyun biter

## Geliştirme Ortamınızı Ayarlama

Güzel haber - sizin için çoğu altyapıyı zaten hazırladık! Tüm oyun varlıklarınız ve temel yapınız, çarpışma özelliklerini eklemeniz için `your-work` alt klasöründe sizi bekliyor.

### Proje Yapısı

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

**Dosya yapısını anlama:**
- **İçerir** oyun nesneleri için gerekli tüm sprite görüntülerini
- **Dahil eder** ana HTML belgesini ve JavaScript uygulama dosyasını
- **Sağlar** yerel geliştirme sunucusu için paket yapılandırması

### Geliştirme Sunucusunu Başlatma

Proje klasörünüze gidin ve yerel sunucuyu başlatın:

```bash
cd your-work
npm start
```

**Bu komut dizisi:**
- **Dizin değiştirir** çalışma proje klasörünüze
- **Başlatır** yerel bir HTTP sunucusunu `http://localhost:5000` adresinde
- **Sunar** oyun dosyalarınızı test ve geliştirme için
- **Canlı geliştirme** sağlar, otomatik yeniden yükleme ile

Tarayıcınızı açın ve `http://localhost:5000` adresine giderek kahraman ve düşmanların ekranda görüntülendiği mevcut oyun durumunuzu görün.

### Adım Adım Uygulama

NASA'nın Voyager uzay aracını programlamak için kullandığı sistematik yaklaşım gibi, çarpışma algılamayı adım adım metodik bir şekilde uygulayacağız.

#### 1. Dikdörtgen Çarpışma Sınırlarını Ekleyin

Öncelikle, oyun nesnelerimize sınırlarını nasıl tanımlayacaklarını öğretelim. Bu yöntemi `GameObject` sınıfınıza ekleyin:

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

**Bu yöntem şunları sağlar:**
- **Oluşturur** kesin sınır koordinatlarına sahip bir dikdörtgen nesnesi
- **Hesaplar** alt ve sağ kenarları pozisyon artı boyutları kullanarak
- **Döndürür** çarpışma algılama algoritmaları için hazır bir nesne
- **Standart bir arayüz sağlar** tüm oyun nesneleri için

#### 2. Kesişim Algılamayı Uygulama

Şimdi çarpışmaları tespit edebilen bir fonksiyon oluşturalım:

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

**Bu algoritma şunları yapar:**
- **Test eder** dikdörtgenler arasındaki dört ayrım koşulunu
- **Döndürür** herhangi bir ayrım koşulu doğruysa `false`
- **Belirler** çarpışmayı, ayrım olmadığında
- **Kullanır** verimli kesişim testi için olumsuz mantık

#### 3. Lazer Ateşleme Sistemini Uygulama

Şimdi işler heyecanlanıyor! Lazer ateşleme sistemini kurmaya başlayalım.

##### Mesaj Sabitleri

Öncelikle, oyunun farklı bölümlerinin birbirleriyle iletişim kurabilmesi için bazı mesaj türlerini tanımlayalım:

```javascript
KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
```

**Bu sabitler şunları sağlar:**
- **Standartlaştırır** uygulama genelinde olay adlarını
- **Kolaylaştırır** oyun sistemleri arasında tutarlı iletişimi
- **Önler** olay işleyici kaydında yazım hatalarını

##### Klavye Giriş İşleme

Anahtar olay dinleyicinize boşluk tuşu algılamayı ekleyin:

```javascript
} else if(evt.keyCode === 32) {
  eventEmitter.emit(Messages.KEY_EVENT_SPACE);
}
```

**Bu giriş işleyici:**
- **Algılar** boşluk tuşu basışlarını keyCode 32 kullanarak
- **Gönderir** standart bir olay mesajı
- **Etkinleştirir** ayrık ateşleme mantığını

##### Olay Dinleyici Kurulumu

`initGame()` fonksiyonunuza ateşleme davranışını kaydedin:

```javascript
eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
 if (hero.canFire()) {
   hero.fire();
 }
});
```

**Bu olay dinleyici:**
- **Tepki verir** boşluk tuşu olaylarına
- **Kontrol eder** ateşleme soğuma durumunu
- **Tetikler** lazer oluşturmayı izin verildiğinde

Lazer-düşman etkileşimleri için çarpışma işleme ekleyin:

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
  first.dead = true;
  second.dead = true;
});
```

**Bu çarpışma işleyici:**
- **Alır** çarpışma olay verilerini her iki nesneyle birlikte
- **İşaretler** her iki nesneyi kaldırılmak üzere
- **Sağlar** çarpışma sonrası uygun temizliği

#### 4. Lazer Sınıfını Oluşturma

Yukarı doğru hareket eden ve kendi yaşam döngüsünü yöneten bir lazer mermisi uygulayın:

```javascript
class Laser extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 9;
    this.height = 33;
    this.type = 'Laser';
    this.img = laserImg;
    
    let id = setInterval(() => {
      if (this.y > 0) {
        this.y -= 15;
      } else {
        this.dead = true;
        clearInterval(id);
      }
    }, 100);
  }
}
```

**Bu sınıf uygulaması:**
- **Genişletir** GameObject'i temel işlevselliği miras almak için
- **Ayarlar** lazer sprite'ı için uygun boyutlar
- **Oluşturur** `setInterval()` kullanarak otomatik yukarı hareket
- **Yönetir** ekranın üstüne ulaştığında kendi kendini yok etme
- **Yönetir** kendi animasyon zamanlamasını ve temizliğini

#### 5. Çarpışma Algılama Sistemini Uygulama

Kapsamlı bir çarpışma algılama fonksiyonu oluşturun:

```javascript
function updateGameObjects() {
  const enemies = gameObjects.filter(go => go.type === 'Enemy');
  const lasers = gameObjects.filter(go => go.type === "Laser");
  
  // Test laser-enemy collisions
  lasers.forEach((laser) => {
    enemies.forEach((enemy) => {
      if (intersectRect(laser.rectFromGameObject(), enemy.rectFromGameObject())) {
        eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
          first: laser,
          second: enemy,
        });
      }
    });
  });

  // Remove destroyed objects
  gameObjects = gameObjects.filter(go => !go.dead);
}
```

**Bu çarpışma sistemi:**
- **Filtreler** oyun nesnelerini türüne göre verimli test için
- **Test eder** her lazeri her düşmana karşı kesişim için
- **Gönderir** kesişim olaylarını algılandığında
- **Temizler** çarpışma işleminden sonra yok edilen nesneleri

> ⚠️ **Önemli**: Çarpışma algılamayı etkinleştirmek için `updateGameObjects()` fonksiyonunu `window.onload` içindeki ana oyun döngünüze ekleyin.

#### 6. Kahraman Sınıfına Soğuma Sistemi Ekleyin

Kahraman sınıfını ateşleme mekanikleri ve hız sınırlaması ile geliştirin:

```javascript
class Hero extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 99;
    this.height = 75;
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

**Geliştirilmiş Kahraman sınıfını anlama:**
- **Başlatır** soğuma zamanlayıcısını sıfırda (ateş etmeye hazır)
- **Oluşturur** kahraman gemisinin üzerinde konumlandırılmış lazer nesneleri
- **Ayarlar** hızlı ateşlemeyi önlemek için soğuma süresini
- **Azaltır** soğuma zamanlayıcısını aralıklı güncellemelerle
- **Sağlar** ateşleme durumu kontrolünü `canFire()` yöntemiyle

### Uygulamanızı Test Etme

Uzay oyununuz artık tam bir çarpışma algılama ve savaş mekaniklerine sahip. 🚀 Bu yeni özellikleri test edin:
- **Ok tuşlarıyla gezin** ve hareket kontrollerini doğrulayın
- **Boşluk tuşuyla lazer ateşleyin** - soğuma süresinin spam tıklamayı nasıl önlediğini fark edin
- **Çarpışmaları gözlemleyin** lazerler düşmanlara çarptığında, kaldırılma tetiklenir
- **Temizliği doğrulayın** yok edilen nesneler oyundan kaybolur

Çarpışma algılama sistemini, uzay aracı navigasyonu ve robotik rehberlikte kullanılan aynı matematiksel prensipleri kullanarak başarıyla uyguladınız.

## GitHub Copilot Agent Challenge 🚀

Agent modunu kullanarak aşağıdaki meydan okumayı tamamlayın:

**Açıklama:** Kahraman gemisi tarafından toplanan geçici yetenekler sağlayan rastgele ortaya çıkan güçlendirmeler ekleyerek çarpışma algılama sistemini geliştirin.

**Talimat:** GameObject'i genişleten bir PowerUp sınıfı oluşturun ve kahraman ile güçlendirmeler arasındaki çarpışma algılamayı uygulayın. En az iki tür güçlendirme ekleyin: biri ateşleme hızını artıran (soğuma süresini azaltan) ve diğeri geçici bir kalkan oluşturan. Rastgele aralıklarla ve pozisyonlarda güçlendirme oluşturma mantığını ekleyin.

---

## 🚀 Meydan Okuma

Bir patlama ekleyin! [Space Art repo](../../../../6-space-game/solution/spaceArt/readme.txt) içindeki oyun varlıklarına göz atın ve bir lazer bir uzaylıya çarptığında bir patlama eklemeyi deneyin.

## Ders Sonrası Test

[Ders sonrası test](https://ff-quizzes.netlify.app/web/quiz/36)

## Gözden Geçirme ve Kendi Kendine Çalışma

Şimdiye kadar oyununuzdaki aralıklarla deney yapın. Onları değiştirdiğinizde ne olur? [JavaScript zamanlama olayları](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/) hakkında daha fazla okuyun.

## Ödev

[Çarpışmaları keşfedin](assignment.md)

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.