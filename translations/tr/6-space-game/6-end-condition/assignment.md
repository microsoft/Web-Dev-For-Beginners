<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "232d592791465c1678cab3a2bb6cd3e8",
  "translation_date": "2025-10-23T00:07:30+00:00",
  "source_file": "6-space-game/6-end-condition/assignment.md",
  "language_code": "tr"
}
-->
# Örnek Bir Oyun Oluşturma

## Ödevin Genel Bakışı

Uzay oyununuzda oyun sonu koşulları ve yeniden başlatma işlevselliğini öğrendiğinize göre, bu kavramları tamamen yeni bir oyun deneyimine uygulama zamanı. Farklı sonlanma koşulları ve yeniden başlatma mekaniklerini gösteren kendi oyununuzu tasarlayıp geliştireceksiniz.

Bu ödev, oyun tasarımı hakkında yaratıcı düşünmenizi sağlarken öğrendiğiniz teknik becerileri uygulamanızı teşvik eder. Farklı zafer ve yenilgi senaryolarını keşfedecek, oyuncu ilerlemesini uygulayacak ve ilgi çekici yeniden başlatma deneyimleri oluşturacaksınız.

## Proje Gereksinimleri

### Temel Oyun Özellikleri

Oyununuz aşağıdaki temel unsurları içermelidir:

**Sonlanma Koşullarında Çeşitlilik**: Oyunun en az iki farklı şekilde sona ermesini sağlayın:
- **Puan tabanlı zafer**: Oyuncu belirli bir hedef puana ulaşır veya belirli öğeleri toplar
- **Can tabanlı yenilgi**: Oyuncu tüm mevcut canlarını veya sağlık puanlarını kaybeder
- **Hedef tamamlama**: Tüm düşmanlar yenilir, belirli öğeler toplanır veya hedefler gerçekleştirilir
- **Zaman tabanlı**: Oyun belirli bir süre sonunda veya geri sayım sıfıra ulaştığında sona erer

**Yeniden Başlatma İşlevselliği**: 
- **Oyun durumunu temizle**: Tüm önceki oyun nesnelerini kaldırın ve değişkenleri sıfırlayın
- **Sistemleri yeniden başlat**: Yeni oyuncu istatistikleri, düşmanlar ve hedeflerle sıfırdan başlayın
- **Kullanıcı dostu kontroller**: Oyunu yeniden başlatmak için net talimatlar sağlayın

**Oyuncu Geri Bildirimi**:
- **Zafer mesajları**: Oyuncu başarılarını olumlu geri bildirimlerle kutlayın
- **Yenilgi mesajları**: Tekrar oynamayı motive eden teşvik edici mesajlar sağlayın
- **İlerleme göstergeleri**: Mevcut puanı, canları veya hedef durumunu gösterin

### Oyun Fikirleri ve İlham

Bu oyun konseptlerinden birini seçin veya kendi fikrinizi oluşturun:

#### 1. Konsol Macera Oyunu
Savaş mekanikleri içeren metin tabanlı bir macera oluşturun:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Uygulanacak temel özellikler:**
- **Sıra tabanlı savaş** ile farklı saldırı seçenekleri
- Hem oyuncu hem de düşmanlar için **sağlık puanları**
- **Envanter sistemi** ile madeni para veya eşya toplama
- Farklı zorluk seviyelerine sahip **birden fazla düşman türü**
- Tüm düşmanlar yenildiğinde **zafer koşulu**

#### 2. Toplama Oyunu
- **Hedef**: Engellerden kaçınarak belirli öğeleri toplayın
- **Sonlanma koşulları**: Hedef toplama sayısına ulaşın veya tüm canları kaybedin
- **İlerleme**: Oyun devam ettikçe öğelere ulaşmak zorlaşır

#### 3. Bulmaca Oyunu
- **Hedef**: Giderek zorlaşan bulmacaları çözmek
- **Sonlanma koşulları**: Tüm seviyeleri tamamlayın veya hamle/zaman tükenir
- **Yeniden başlatma**: İlerleme temizlenerek ilk seviyeye sıfırlanır

#### 4. Savunma Oyunu
- **Hedef**: Üssünüzü düşman dalgalarından koruyun
- **Sonlanma koşulları**: Tüm dalgalardan sağ çıkın (zafer) veya üs yok edilir (yenilgi)
- **İlerleme**: Düşman dalgaları zorluk ve sayı olarak artar

## Uygulama Yönergeleri

### Başlangıç

1. **Oyun tasarımınızı planlayın**:
   - Temel oyun döngüsünü tasarlayın
   - Sonlanma koşullarınızı net bir şekilde tanımlayın
   - Yeniden başlatma sırasında hangi verilerin sıfırlanması gerektiğini belirleyin

2. **Proje yapınızı oluşturun**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Temel oyun döngünüzü oluşturun**:
   - Oyun durumunu başlatın
   - Kullanıcı girdisini işleyin
   - Oyun mantığını güncelleyin
   - Sonlanma koşullarını kontrol edin
   - Mevcut durumu render edin

### Teknik Gereksinimler

**Modern JavaScript Kullanın**: 
- Değişken tanımlamaları için `const` ve `let` kullanın
- Uygun yerlerde ok fonksiyonları kullanın
- Şablon dizeleri ve destructuring gibi ES6+ özelliklerini uygulayın

**Olay Tabanlı Mimari**:
- Kullanıcı etkileşimleri için olay işleyiciler oluşturun
- Oyun durumu değişikliklerini olaylar aracılığıyla uygulayın
- Yeniden başlatma işlevselliği için olay dinleyiciler kullanın

**Temiz Kod Uygulamaları**:
- Tek sorumluluğa sahip fonksiyonlar yazın
- Açıklayıcı değişken ve fonksiyon adları kullanın
- Oyun mantığını ve kurallarını açıklayan yorumlar ekleyin
- Kodunuzu mantıksal bölümlere ayırın

## Teslim Gereksinimleri

### Teslim Edilecekler

1. **Tam oyun dosyaları**: Oyununuzu çalıştırmak için gereken tüm HTML, CSS ve JavaScript dosyaları
2. **README.md**: Açıklama dosyası:
   - Oyununuzun nasıl oynanacağı
   - Hangi sonlanma koşullarını uyguladığınız
   - Yeniden başlatma talimatları
   - Özel özellikler veya mekanikler
3. **Kod yorumları**: Oyun mantığınızı ve algoritmalarınızı net bir şekilde açıklayan yorumlar

### Test Kontrol Listesi

Göndermeden önce, oyununuzun aşağıdaki kriterleri karşıladığından emin olun:

- [ ] **Tarayıcı konsolunda hatasız çalışır**
- [ ] Belirtilen şekilde **birden fazla sonlanma koşulu uygular**
- [ ] **Temiz bir durum sıfırlamasıyla düzgün şekilde yeniden başlar**
- [ ] Oyunculara oyun durumu hakkında **net geri bildirim sağlar**
- [ ] **Modern JavaScript** sözdizimi ve en iyi uygulamaları kullanır
- [ ] README.md dosyasında **kapsamlı bir açıklama** içerir

## Değerlendirme Ölçütleri

| Kriter | Üstün (4) | Yeterli (3) | Gelişmekte (2) | Başlangıç (1) |
|--------|-----------|-------------|----------------|---------------|
| **Oyun İşlevselliği** | Birden fazla sonlanma koşulu, sorunsuz yeniden başlatma ve cilalı oyun deneyimi ile eksiksiz oyun | Temel sonlanma koşulları ve işlevsel yeniden başlatma mekanizması ile tam oyun | Bazı sonlanma koşulları uygulanmış, yeniden başlatmada küçük sorunlar olabilir | Sınırlı işlevsellik ve önemli hatalarla eksik oyun |
| **Kod Kalitesi** | Modern JavaScript uygulamaları, kapsamlı yorumlar ve mükemmel yapı ile temiz, iyi organize edilmiş kod | Modern sözdizimi ile iyi kod organizasyonu, yeterli yorumlar ve net yapı | Bazı modern uygulamalarla temel kod organizasyonu, minimum yorumlar | Kötü kod organizasyonu, eski sözdizimi, yorum ve yapı eksikliği |
| **Kullanıcı Deneyimi** | Net talimatlar, mükemmel geri bildirim ve ilgi çekici sonlanma/yeniden başlatma deneyimi ile sezgisel oynanış | Yeterli talimatlar ve geri bildirim ile iyi oynanış, işlevsel sonlanma/yeniden başlatma | Minimum talimatlarla temel oynanış, sınırlı oyun durumu geri bildirimi | Belirsiz talimatlar ve zayıf kullanıcı geri bildirimi ile kafa karıştırıcı oynanış |
| **Teknik Uygulama** | Oyun geliştirme konseptleri, olay işleme ve durum yönetimi konusunda ustalık sergiler | Oyun konseptlerini iyi anlayarak sağlam bir uygulama gösterir | Temel anlayışla kabul edilebilir bir uygulama | Sınırlı anlayışla zayıf bir uygulama |
| **Dokümantasyon** | Net talimatlar, iyi belgelenmiş kod ve kapsamlı test kanıtları içeren kapsamlı README | Net talimatlar ve yeterli kod yorumları ile iyi dokümantasyon | Minimum talimatlarla temel dokümantasyon | Zayıf veya eksik dokümantasyon |

### Değerlendirme Ölçeği
- **Üstün (16-20 puan)**: Yaratıcı özellikler ve cilalı uygulama ile beklentileri aşar
- **Yeterli (12-15 puan)**: Tüm gereksinimleri karşılar ve sağlam bir şekilde uygular
- **Gelişmekte (8-11 puan)**: Çoğu gereksinimi karşılar, küçük sorunlar içerir
- **Başlangıç (4-7 puan)**: Bazı gereksinimleri karşılar ancak önemli iyileştirmeler gerektirir

## Ek Öğrenme Kaynakları

- [MDN Oyun Geliştirme Rehberi](https://developer.mozilla.org/en-US/docs/Games)
- [JavaScript Oyun Geliştirme Eğitimleri](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Canvas API Belgeleri](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Oyun Tasarım İlkeleri](https://www.gamasutra.com/blogs/)

> 💡 **Profesyonel İpucu**: Basit başlayın ve özellikleri kademeli olarak ekleyin. Hatalarla dolu karmaşık bir oyundan ziyade, iyi cilalanmış basit bir oyun daha iyidir!

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.