<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bee6762d4092a13fc7c338814963f980",
  "translation_date": "2025-10-22T23:58:49+00:00",
  "source_file": "3-terrarium/2-intro-to-css/assignment.md",
  "language_code": "tr"
}
-->
# CSS Yeniden Düzenleme Ödevi

## Amaç

Terrarium projenizi modern CSS düzen tekniklerini kullanarak dönüştürün! Mevcut mutlak konumlandırma yaklaşımını daha sürdürülebilir ve duyarlı bir tasarım için **Flexbox** veya **CSS Grid** ile yeniden düzenleyin. Bu ödev, modern CSS standartlarını uygulamanızı ve terrariumunuzun görsel çekiciliğini korumanızı hedefler.

Farklı düzen yöntemlerini ne zaman ve nasıl kullanacağınızı anlamak, modern web geliştirme için kritik bir beceridir. Bu alıştırma, geleneksel konumlandırma teknikleri ile çağdaş CSS düzen sistemleri arasında bir köprü kurar.

## Ödev Talimatları

### Aşama 1: Analiz ve Planlama
1. **Mevcut terrarium kodunuzu inceleyin** - Hangi öğelerin şu anda mutlak konumlandırma kullandığını belirleyin
2. **Düzen yöntemini seçin** - Tasarım hedeflerinize en uygun olanın Flexbox mı yoksa CSS Grid mi olduğuna karar verin
3. **Yeni düzen yapınızı tasarlayın** - Konteynerlerin ve bitki öğelerinin nasıl organize edileceğini planlayın

### Aşama 2: Uygulama
1. **Terrarium projenizin yeni bir versiyonunu** ayrı bir klasörde oluşturun
2. **HTML yapısını güncelleyin** - Seçtiğiniz düzen yöntemini destekleyecek şekilde düzenleyin
3. **CSS'i yeniden düzenleyin** - Mutlak konumlandırma yerine Flexbox veya CSS Grid kullanın
4. **Görsel tutarlılığı koruyun** - Bitkilerinizin ve terrarium kavanozunun aynı konumlarda göründüğünden emin olun
5. **Duyarlı davranış uygulayın** - Düzeninizin farklı ekran boyutlarına uyum sağlaması gerekir

### Aşama 3: Test ve Dokümantasyon
1. **Tarayıcılar arası test** - Tasarımınızın Chrome, Firefox, Edge ve Safari'de çalıştığını doğrulayın
2. **Duyarlı test** - Düzeninizi mobil, tablet ve masaüstü ekran boyutlarında kontrol edin
3. **Dokümantasyon** - CSS'inize düzen seçimlerinizi açıklayan yorumlar ekleyin
4. **Ekran görüntüleri** - Terrariumunuzu farklı tarayıcılar ve ekran boyutlarında yakalayın

## Teknik Gereksinimler

### Düzen Uygulaması
- **BİRİNİ SEÇİN**: Aynı öğeler için Flexbox VEYA CSS Grid uygulayın (ikisini birden kullanmayın)
- **Duyarlı Tasarım**: Sabit piksel yerine göreceli birimler (`rem`, `em`, `%`, `vw`, `vh`) kullanın
- **Erişilebilirlik**: Uygun semantik HTML yapısını ve alt metni koruyun
- **Kod Kalitesi**: Tutarlı adlandırma kuralları kullanın ve CSS'i mantıklı bir şekilde organize edin

### Dahil Edilecek Modern CSS Özellikleri
```css
/* Example Flexbox approach */
.terrarium-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.plant-containers {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

/* Example Grid approach */
.terrarium-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  gap: 1rem;
}
```

### Tarayıcı Desteği Gereksinimleri
- **Chrome/Edge**: Son 2 sürüm
- **Firefox**: Son 2 sürüm  
- **Safari**: Son 2 sürüm
- **Mobil tarayıcılar**: iOS Safari, Chrome Mobile

## Teslim Edilecekler

1. **Güncellenmiş HTML dosyası** - Geliştirilmiş semantik yapı ile
2. **Yeniden düzenlenmiş CSS dosyası** - Modern düzen tekniklerini kullanarak
3. **Ekran görüntüsü koleksiyonu** - Tarayıcılar arası uyumluluğu gösteren:
   - Masaüstü görünümü (1920x1080)
   - Tablet görünümü (768x1024) 
   - Mobil görünümü (375x667)
   - En az 2 farklı tarayıcı
4. **README.md dosyası** - Şunları belgeleyen:
   - Düzen seçiminiz (Flexbox vs Grid) ve nedenleri
   - Yeniden düzenleme sırasında karşılaşılan zorluklar
   - Tarayıcı uyumluluğu notları
   - Kodunuzu çalıştırma talimatları

## Değerlendirme Ölçütleri

| Kriter | Üstün (4) | Yeterli (3) | Gelişmekte (2) | Başlangıç (1) |
|--------|-----------|-------------|----------------|---------------|
| **Düzen Uygulaması** | Flexbox/Grid'in ustaca kullanımı; tamamen duyarlı | Doğru uygulama ve iyi duyarlı davranış | Küçük duyarlı sorunlarla temel uygulama | Eksik veya yanlış düzen uygulaması |
| **Kod Kalitesi** | Temiz, iyi organize edilmiş CSS; anlamlı yorumlar ve tutarlı adlandırma | İyi organizasyon ve bazı yorumlar | Yeterli organizasyon ve minimum yorumlar | Zayıf organizasyon; anlaşılması zor |
| **Tarayıcılar Arası Uyumluluk** | Tüm gerekli tarayıcılarda mükemmel tutarlılık ve ekran görüntüleri | İyi uyumluluk, küçük farklılıklar belgelenmiş | İşlevselliği bozmayan bazı uyumluluk sorunları | Büyük uyumluluk sorunları veya eksik test |
| **Duyarlı Tasarım** | Olağanüstü mobil öncelikli yaklaşım ve sorunsuz geçiş noktaları | İyi duyarlı davranış ve uygun geçiş noktaları | Bazı düzen sorunlarıyla temel duyarlı özellikler | Sınırlı veya bozuk duyarlı davranış |
| **Dokümantasyon** | Detaylı açıklamalar ve içgörülerle kapsamlı README | Tüm gerekli öğeleri kapsayan iyi dokümantasyon | Minimum açıklamalarla temel dokümantasyon | Eksik veya yetersiz dokümantasyon |

## Faydalı Kaynaklar

### Düzen Yöntemi Kılavuzları
- 📖 [Flexbox'a Tam Kılavuz](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [CSS Grid'e Tam Kılavuz](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - Doğru Aracı Seçin](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### Tarayıcı Test Araçları
- 🛠️ [Tarayıcı Geliştirici Araçları Duyarlı Modu](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - Özellik Desteği](https://caniuse.com/)
- 🛠️ [BrowserStack - Tarayıcılar Arası Test](https://www.browserstack.com/)

### Kod Kalitesi Araçları
- ✅ [CSS Doğrulayıcı](https://jigsaw.w3.org/css-validator/)
- ✅ [HTML Doğrulayıcı](https://validator.w3.org/)
- ✅ [WebAIM Kontrast Kontrolü](https://webaim.org/resources/contrastchecker/)

## Bonus Zorluklar

🌟 **Gelişmiş Düzenler**: Tasarımınızın farklı bölümlerinde hem Flexbox hem de Grid'i uygulayın  
🌟 **Animasyon Entegrasyonu**: Yeni düzeninizle uyumlu CSS geçişleri veya animasyonlar ekleyin  
🌟 **Karanlık Mod**: CSS özel özelliklerine dayalı bir tema değiştirici uygulayın  
🌟 **Konteyner Sorguları**: Bileşen düzeyinde duyarlılık için modern konteyner sorgu tekniklerini kullanın  

> 💡 **Unutmayın**: Amaç sadece çalıştırmak değil, seçtiğiniz düzen yönteminin bu özel tasarım zorluğu için neden en iyi çözüm olduğunu anlamaktır!

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çeviriler hata veya yanlışlıklar içerebilir. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalardan sorumlu değiliz.