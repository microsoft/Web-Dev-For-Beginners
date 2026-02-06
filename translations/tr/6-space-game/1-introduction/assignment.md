# Bir Oyun Tasarlayın: Tasarım Kalıplarını Uygulayın

## Ödevin Genel Bakışı

Tasarım kalıpları konusundaki yeni bilginizi kullanarak basit bir oyun prototipi oluşturun! Bu ödev, hem mimari kalıpları (kalıtım veya bileşim) hem de derste öğrendiğiniz pub/sub iletişim sistemini uygulamanıza yardımcı olacak.

## Talimatlar

Bu dersteki tasarım kalıplarını gösteren basit bir oyun temsili oluşturun. Oyununuz işlevsel olmalı ancak karmaşık grafiklere ihtiyaç duymamalı – odak noktanız temel mimari ve iletişim kalıpları olmalı.

### Gereksinimler

**Mimari Kalıbınızı Seçin:**
- **Seçenek A**: Sınıf tabanlı kalıtım kullanın (örneğin `GameObject` → `Movable` → `Hero`)
- **Seçenek B**: Bileşim kullanın (karışık davranışlarla fabrika fonksiyonu yaklaşımı gibi)

**İletişimi Uygulayın:**
- **Bir** `EventEmitter` sınıfı ekleyin pub/sub mesajlaşma için
- **En az** 2-3 farklı mesaj türü ayarlayın (örneğin `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Kullanıcı girişini** (klavye/fare) olay sistemi aracılığıyla oyun olaylarına bağlayın

**Oyunda Bulunması Gereken Öğeler:**
- En az bir oyuncu tarafından kontrol edilen karakter
- En az bir başka oyun nesnesi (düşman, toplanabilir öğe veya çevresel bir öğe)
- Nesneler arasında temel etkileşim (çarpışma, toplama veya iletişim)

### Önerilen Oyun Fikirleri

**Düşünebileceğiniz Basit Oyunlar:**
- **Yılan Oyunu** – Yılan segmentleri başı takip eder, yiyecek rastgele ortaya çıkar
- **Pong Varyasyonu** – Raket girişlere tepki verir, top duvarlardan sekerek hareket eder
- **Toplayıcı Oyunu** – Oyuncu, engellerden kaçınarak etrafta dolaşıp nesneleri toplar
- **Kule Savunma Temelleri** – Kuleler hareket eden düşmanları algılar ve ateş eder

### Kod Yapısı Rehberi

```javascript
// Example starting structure
const Messages = {
  // Define your game messages here
};

class EventEmitter {
  // Your event system implementation
}

// Choose either class-based OR composition approach
// Class-based example:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// OR Composition example:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Uygulamanızı Test Etme

**Kodunuzun çalıştığını doğrulamak için:**
- **Test edin**: Olaylar tetiklendiğinde nesnelerin hareket ettiğini veya değiştiğini
- **Doğrulayın**: Birden fazla nesnenin aynı olaya tepki verebildiğini
- **Kontrol edin**: Yeni davranışlar ekleyebildiğinizi, mevcut kodu değiştirmeden
- **Emin olun**: Klavye/fare girişlerinin oyun olaylarını doğru şekilde tetiklediğini

## Teslimat Yönergeleri

**Teslimatınız şunları içermelidir:**
1. **JavaScript dosyaları** ile oyun uygulamanız
2. **HTML dosyası** oyununuzu çalıştırmak ve test etmek için (basit olabilir)
3. **Yorumlar** hangi kalıbı seçtiğinizi ve nedenini açıklayan
4. **Kısa bir dokümantasyon** mesaj türleriniz ve ne yaptıkları hakkında

## Değerlendirme Ölçütleri

| Kriter | Mükemmel (3 puan) | Yeterli (2 puan) | Geliştirme Gerekiyor (1 puan) |
|--------|-------------------|------------------|------------------------------|
| **Mimari Kalıp** | Kalıtım VEYA bileşimi doğru bir şekilde uygular, açık sınıf/nesne hiyerarşisi ile | Seçilen kalıbı küçük sorunlar veya tutarsızlıklarla kullanır | Kalıbı kullanmaya çalışır ancak uygulamada önemli sorunlar vardır |
| **Pub/Sub Uygulaması** | EventEmitter, birden fazla mesaj türü ve doğru olay akışı ile düzgün çalışır | Temel pub/sub sistemi bazı olay işleme ile çalışır | Olay sistemi mevcut ancak güvenilir şekilde çalışmaz |
| **Oyun İşlevselliği** | Olaylar aracılığıyla iletişim kuran üç veya daha fazla etkileşimli öğe | İki etkileşimli öğe ile temel olay iletişimi | Bir öğe olaylara tepki verir veya temel etkileşim |
| **Kod Kalitesi** | Temiz, iyi yorumlanmış kod, mantıklı organizasyon ve modern JavaScript | Genel olarak iyi organize edilmiş kod, yeterli yorumlarla | Kod çalışıyor ancak organizasyon veya açık yorumlama eksik |

**Bonus Puanlar:**
- **Yaratıcı oyun mekanikleri** tasarım kalıplarının ilginç kullanımını sergileyen
- **Birden fazla giriş yöntemi** (klavye VE fare olayları)
- **Genişletilebilir mimari** yeni özelliklerle kolayca genişletilebilecek şekilde

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul edilmez.