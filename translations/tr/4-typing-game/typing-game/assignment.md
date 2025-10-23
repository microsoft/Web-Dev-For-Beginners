<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3eac59d70e2532a677a2ce6bf765485a",
  "translation_date": "2025-10-23T00:05:18+00:00",
  "source_file": "4-typing-game/typing-game/assignment.md",
  "language_code": "tr"
}
-->
# Yeni bir klavye oyunu oluşturun

## Talimatlar

Artık yazma oyunu ile olay odaklı programlamanın temellerini öğrendiğinize göre, yaratıcılığınızı serbest bırakmanın zamanı geldi! Olay işleme, DOM manipülasyonu ve kullanıcı etkileşim desenlerini anladığınızı gösterecek kendi klavye tabanlı oyununuzu tasarlayıp oluşturacaksınız.

Belirli görevleri yerine getirmek için klavye olaylarını kullanan küçük bir oyun oluşturun. Bu, farklı bir tür yazma oyunu, tuş vuruşlarıyla ekrana piksel çizen bir sanat uygulaması, ok tuşlarıyla kontrol edilen basit bir arcade tarzı oyun veya hayal edebileceğiniz başka bir yaratıcı konsept olabilir. Yaratıcı olun ve farklı tuşların farklı davranışları nasıl tetikleyebileceğini düşünün!

**Oyununuz şunları içermelidir:**

| Gereklilik | Açıklama | Amaç |
|-------------|-------------|---------|
| **Olay Dinleyicileri** | En az 3 farklı klavye olayına yanıt verin | Olay işleme anlayışını gösterin |
| **Görsel Geri Bildirim** | Kullanıcı girdisine anında görsel yanıt sağlayın | DOM manipülasyonunda ustalığınızı gösterin |
| **Oyun Mantığı** | Puanlama, seviyeler veya ilerleme mekanikleri içermelidir | Uygulama durumunu uygulama pratiği yapın |
| **Kullanıcı Arayüzü** | Açık talimatlar ve sezgisel kontroller | Kullanıcı deneyimi tasarım becerilerinizi geliştirin |

**Düşünebileceğiniz yaratıcı proje fikirleri:**
- **Ritim Oyunu**: Oyuncular müzik veya görsel ipuçlarıyla uyumlu bir şekilde tuşlara basar
- **Piksel Sanatı Oluşturucu**: Farklı tuşlar farklı renkler veya desenler çizer
- **Kelime Oluşturucu**: Oyuncular harfleri belirli sıralarda yazarak kelimeler oluşturur
- **Yılan Oyunu**: Ok tuşlarıyla bir yılanı kontrol ederek nesneleri toplama
- **Müzik Sintetizörü**: Farklı tuşlar farklı müzik notaları veya sesler çalar
- **Hızlı Yazma Varyasyonları**: Kategoriye özel yazma (programlama terimleri, yabancı diller)
- **Klavye Davulcusu**: Farklı tuşları farklı davul seslerine eşleştirerek ritimler oluşturma

**Uygulama yönergeleri:**
- **Basit bir konseptle başlayın** ve karmaşıklığı kademeli olarak artırın
- **Odaklanın**: Doğal hissettiren akıcı ve duyarlı kontroller
- **Dahil edin**: Oyun durumu ve oyuncu ilerlemesi için net görsel göstergeler
- **Test edin**: Oyununuzu farklı kullanıcılarla test ederek sezgisel oynanabilirliği sağlayın
- **Belgeleyin**: Olay işleme stratejinizi açıklayan yorumlarla kodunuzu belgeleyin

## Değerlendirme Ölçütleri

| Kriter | Üstün | Yeterli | Geliştirme Gerekiyor |
| -------- | --------- | -------- | ----------------- |
| **Fonksiyonellik** | Birden fazla özellik ve akıcı oynanışa sahip eksiksiz, cilalı bir oyun | Klavye olay işleme becerisini gösteren temel özelliklere sahip çalışan bir oyun | Sınırlı işlevsellik veya önemli hatalarla minimal bir uygulama |
| **Kod Kalitesi** | İyi organize edilmiş, en iyi uygulamalara uygun, verimli olay işleme ile yorumlanmış kod | Olay dinleyicileri ve DOM manipülasyonunun uygun şekilde kullanıldığı temiz, okunabilir kod | Bazı organizasyon sorunları veya verimsiz uygulamalarla temel kod yapısı |
| **Kullanıcı Deneyimi** | Sezgisel kontroller, net geri bildirim ve profesyonel hissettiren ilgi çekici oynanış | Yeterli kullanıcı rehberliği ve duyarlı kontrollerle işlevsel arayüz | Belirsiz talimatlar veya zayıf duyarlılıkla temel arayüz |
| **Yaratıcılık** | Klavye olaylarının yenilikçi kullanımı ve yaratıcı problem çözme ile özgün konsept | Olay işleme kullanımında iyi bir varyasyonla ilginç bir oyun modeli | Minimal yaratıcı unsurlarla temel bir konseptin basit uygulaması |

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.