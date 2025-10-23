<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "25b8d28b8531352d4eb67291fd7824c4",
  "translation_date": "2025-10-23T00:10:38+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/assignment.md",
  "language_code": "tr"
}
-->
# Bir API Benimse

## Genel Bakış

API'ler, yaratıcı web geliştirme için sonsuz olanaklar sunar! Bu ödevde, bir dış API seçecek ve kullanıcılar için gerçek bir sorunu çözen veya değerli bir işlevsellik sağlayan bir tarayıcı uzantısı oluşturacaksınız.

## Talimatlar

### Adım 1: API'nizi Seçin
Bu özenle seçilmiş [ücretsiz halka açık API'ler listesi](https://github.com/public-apis/public-apis)'nden bir API seçin. Şu kategorileri göz önünde bulundurun:

**Yeni başlayanlar için popüler seçenekler:**
- **Eğlence**: Rastgele köpek resimleri için [Dog CEO API](https://dog.ceo/dog-api/)
- **Hava Durumu**: Güncel hava durumu verileri için [OpenWeatherMap](https://openweathermap.org/api)
- **Alıntılar**: İlham verici alıntılar için [Quotable API](https://quotable.io/)
- **Haberler**: Güncel başlıklar için [NewsAPI](https://newsapi.org/)
- **Eğlenceli Bilgiler**: İlginç sayı bilgileri için [Numbers API](http://numbersapi.com/)

### Adım 2: Uzantınızı Planlayın
Kodlamaya başlamadan önce şu planlama sorularını yanıtlayın:
- Uzantınız hangi sorunu çözüyor?
- Hedef kullanıcı kitleniz kim?
- Yerel depolamada hangi verileri saklayacaksınız?
- API hatalarını veya oran sınırlamalarını nasıl ele alacaksınız?

### Adım 3: Uzantınızı Oluşturun
Uzantınız şunları içermelidir:

**Gerekli Özellikler:**
- Gerekli API parametreleri için form girişleri
- Uygun hata yönetimi ile API entegrasyonu
- Kullanıcı tercihleri veya API anahtarları için yerel depolama
- Temiz, duyarlı kullanıcı arayüzü
- Yükleme durumları ve kullanıcı geri bildirimi

**Kod Gereksinimleri:**
- Modern JavaScript (ES6+) özelliklerini kullanın
- API çağrıları için async/await uygulayın
- try/catch blokları ile uygun hata yönetimi ekleyin
- Kodunuzu açıklayan anlamlı yorumlar ekleyin
- Tutarlı kod formatlamasına uyun

### Adım 4: Test Edin ve Son Rötuşları Yapın
- Uzantınızı çeşitli girişlerle test edin
- Kenar durumlarıyla başa çıkın (internet yok, geçersiz API yanıtları)
- Uzantınızın tarayıcı yeniden başlatıldıktan sonra çalıştığından emin olun
- Kullanıcı dostu hata mesajları ekleyin

## Ekstra Zorluklar

Uzantınızı bir üst seviyeye taşıyın:
- Daha zengin işlevsellik için birden fazla API uç noktası ekleyin
- API çağrılarını azaltmak için veri önbellekleme uygulayın
- Yaygın işlemler için klavye kısayolları oluşturun
- Veri dışa aktarma/içeri aktarma özellikleri ekleyin
- Kullanıcı özelleştirme seçenekleri uygulayın

## Teslim Gereksinimleri

1. **Çalışan bir tarayıcı uzantısı**, seçtiğiniz API ile başarılı bir şekilde entegre edilmiş
2. **README dosyası** açıklayan:
   - Hangi API'yi seçtiğiniz ve neden
   - Uzantınızı nasıl kuracağınız ve kullanacağınız
   - Gerekli API anahtarları veya kurulum
   - Uzantınızın çalışırken ekran görüntüleri
3. **Temiz, yorumlanmış kod**, modern JavaScript uygulamalarını takip eden

## Değerlendirme Ölçütleri

| Kriter | Mükemmel (90-100%) | Yeterli (80-89%) | Gelişmekte (70-79%) | Başlangıç (60-69%) |
|--------|---------------------|------------------|---------------------|--------------------|
| **API Entegrasyonu** | Kusursuz API entegrasyonu, kapsamlı hata yönetimi ve kenar durumlarıyla başa çıkma | Başarılı API entegrasyonu, temel hata yönetimi | API çalışıyor ancak sınırlı hata yönetimi var | API entegrasyonunda önemli sorunlar var |
| **Kod Kalitesi** | Temiz, iyi yorumlanmış modern JavaScript, en iyi uygulamaları takip eden | İyi kod yapısı, yeterli yorumlar | Kod çalışıyor ancak daha iyi organizasyona ihtiyaç var | Zayıf kod kalitesi, minimum yorum |
| **Kullanıcı Deneyimi** | Mükemmel yükleme durumları ve kullanıcı geri bildirimi ile cilalı arayüz | Temel kullanıcı geri bildirimi ile iyi bir arayüz | Yeterli işlevselliğe sahip temel arayüz | Kafa karıştırıcı arayüz ile zayıf kullanıcı deneyimi |
| **Yerel Depolama** | Veri doğrulama ve yönetim ile gelişmiş yerel depolama kullanımı | Ana özellikler için uygun yerel depolama uygulaması | Temel yerel depolama uygulaması | Minimum veya yanlış yerel depolama kullanımı |
| **Dokümantasyon** | Kurulum talimatları ve ekran görüntüleri ile kapsamlı README | Çoğu gereksinimi kapsayan iyi dokümantasyon | Bazı detayları eksik olan temel dokümantasyon | Zayıf veya eksik dokümantasyon |

## Başlangıç İpuçları

1. **Basit başlayın**: Karmaşık kimlik doğrulama gerektirmeyen bir API seçin
2. **Belgeleri okuyun**: Seçtiğiniz API'nin uç noktalarını ve yanıtlarını iyice anlayın
3. **Arayüzünüzü planlayın**: Kodlamadan önce uzantınızın arayüzünü tasarlayın
4. **Sık sık test edin**: Aşamalı olarak oluşturun ve her özelliği ekledikçe test edin
5. **Hataları yönetin**: API çağrılarının başarısız olabileceğini her zaman varsayın ve buna göre plan yapın

## Kaynaklar

- [Tarayıcı Uzantısı Belgeleri](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Fetch API Kılavuzu](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Yerel Depolama Eğitimi](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [JSON Ayrıştırma ve İşleme](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Yararlı ve yaratıcı bir şeyler yaparken eğlenin! 🚀

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çeviriler hata veya yanlışlıklar içerebilir. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul edilmez.