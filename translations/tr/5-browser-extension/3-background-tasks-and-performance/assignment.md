<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a203e560e58ccc6ba68bffc40c7c8676",
  "translation_date": "2025-10-23T00:09:50+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/assignment.md",
  "language_code": "tr"
}
-->
# Performans Analizi için Bir Site İnceleyin

## Ödevin Genel Bakışı

Performans analizi, modern web geliştiriciler için kritik bir beceridir. Bu ödevde, gerçek bir web sitesinin kapsamlı bir performans denetimini gerçekleştireceksiniz. Tarayıcı tabanlı araçlar ve üçüncü taraf hizmetler kullanarak darboğazları belirleyecek ve optimizasyon stratejileri önereceksiniz.

Göreviniz, web performansı prensiplerini anladığınızı ve profesyonel analiz araçlarını etkili bir şekilde kullanma yeteneğinizi gösteren ayrıntılı bir performans raporu sunmaktır.

## Ödev Talimatları

**Bir web sitesi seçin** - Analiz için aşağıdaki seçeneklerden birini seçin:
- Sık kullandığınız popüler bir web sitesi (haber sitesi, sosyal medya, e-ticaret)
- Açık kaynaklı bir proje web sitesi (GitHub sayfaları, dokümantasyon siteleri)
- Yerel bir işletme web sitesi veya portföy sitesi
- Kendi projeniz veya önceki ders çalışmanız

**Çoklu araç analizi yapın** - En az üç farklı yaklaşım kullanarak analiz gerçekleştirin:
- **Tarayıcı Geliştirici Araçları** - Chrome/Edge Performans sekmesini kullanarak detaylı profil oluşturma
- **Çevrimiçi denetim araçları** - Lighthouse, GTmetrix veya WebPageTest'i deneyin
- **Ağ analizi** - Kaynak yükleme, dosya boyutları ve istek desenlerini inceleyin

**Bulgularınızı belgeleyin** - Kapsamlı bir rapor hazırlayın ve şunları içermesini sağlayın:

### Performans Metrikleri Analizi
- **Yükleme süresi ölçümleri** - Farklı araçlar ve perspektiflerden alınan veriler
- **Core Web Vitals** skorları (LCP, FID, CLS) ve bunların etkileri
- **Kaynak dökümü** - Yükleme süresine en çok katkıda bulunan varlıklar
- **Ağ şelale analizi** - Engelleyici kaynakların belirlenmesi

### Sorun Tespiti
- **Belirli performans darboğazları** - Destekleyici verilerle birlikte
- **Kök neden analizi** - Her sorunun neden oluştuğunu açıklama
- **Kullanıcı etkisi değerlendirmesi** - Sorunların gerçek kullanıcıları nasıl etkilediğini açıklama
- **Öncelik sıralaması** - Sorunların ciddiyetine ve çözüm zorluğuna göre sıralama

### Optimizasyon Önerileri
- **Spesifik, uygulanabilir iyileştirmeler** - Beklenen etkileriyle birlikte
- **Her önerilen değişiklik için uygulama stratejileri**
- **Uygulanabilecek modern en iyi uygulamalar** (tembel yükleme, sıkıştırma vb.)
- **Sürekli performans izleme için araçlar ve teknikler**

## Araştırma Gereksinimleri

**Sadece tarayıcı araçlarına güvenmeyin** - Analizinizi genişletmek için:

**Üçüncü taraf denetim hizmetleri:**
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) - Kapsamlı denetimler
- [GTmetrix](https://gtmetrix.com/) - Performans ve optimizasyon içgörüleri
- [WebPageTest](https://www.webpagetest.org/) - Gerçek dünya test koşulları
- [Pingdom](https://tools.pingdom.com/) - Küresel performans izleme

**Uzmanlaşmış analiz araçları:**
- [Bundle Analyzer](https://bundlephobia.com/) - JavaScript paket boyutu analizi
- [Görüntü optimizasyon araçları](https://squoosh.app/) - Varlık optimizasyon fırsatları
- [Güvenlik başlıkları analizi](https://securityheaders.com/) - Güvenlik performansı etkisi

## Teslim Formatı

Profesyonel bir rapor oluşturun (2-3 sayfa) ve şunları içermesini sağlayın:

1. **Yönetici Özeti** - Temel bulgular ve önerilerin genel görünümü
2. **Metodoloji** - Kullanılan araçlar ve test yaklaşımı
3. **Mevcut Performans Değerlendirmesi** - Temel metrikler ve ölçümler
4. **Belirlenen Sorunlar** - Destekleyici verilerle detaylı sorun analizi
5. **Öneriler** - Öncelikli iyileştirme stratejileri
6. **Uygulama Yol Haritası** - Adım adım optimizasyon planı

**Görsel kanıtlar ekleyin:**
- Performans araçlarının ve metriklerin ekran görüntüleri
- Performans verilerini gösteren grafikler veya tablolar
- Mümkünse önce/sonra karşılaştırmaları
- Ağ şelale grafikleri ve kaynak dökümleri

## Değerlendirme Ölçütleri

| Kriter | Üstün (90-100%) | Yeterli (70-89%) | Geliştirme Gerekiyor (50-69%) |
| ------ | --------------- | ---------------- | ----------------------------- |
| **Analiz Derinliği** | 4+ araç kullanılarak kapsamlı analiz, detaylı metrikler, kök neden analizi ve kullanıcı etkisi değerlendirmesi | 3 araç kullanılarak iyi analiz, net metrikler ve temel sorun tespiti | 2 araç kullanılarak temel analiz, sınırlı derinlik ve minimal sorun tespiti |
| **Araç Çeşitliliği** | Tarayıcı araçları + 3+ üçüncü taraf hizmeti kullanımı, karşılaştırmalı analiz ve her birinden içgörüler | Tarayıcı araçları + 2 üçüncü taraf hizmeti kullanımı, bazı karşılaştırmalı analizler | Tarayıcı araçları + 1 üçüncü taraf hizmeti kullanımı, sınırlı karşılaştırma |
| **Sorun Tespiti** | 5+ spesifik performans sorununu detaylı kök neden analizi ve ölçülebilir etkilerle belirleme | 3-4 performans sorununu iyi analiz ve bazı etki ölçümleriyle belirleme | 1-2 performans sorununu temel analizle belirleme |
| **Öneriler** | Spesifik, uygulanabilir öneriler, uygulama detayları, beklenen etkiler ve modern en iyi uygulamalar | İyi öneriler, bazı uygulama rehberliği ve beklenen sonuçlar | Temel öneriler, sınırlı uygulama detayları |
| **Profesyonel Sunum** | Net yapı, görsel kanıtlar, yönetici özeti ve profesyonel formatla iyi organize edilmiş rapor | İyi organizasyon, bazı görsel kanıtlar ve net yapı | Temel organizasyon, minimal görsel kanıtlar |

## Öğrenme Çıktıları

Bu ödevi tamamlayarak şu becerilerinizi göstereceksiniz:
- **Uygulama** - Profesyonel performans analiz araçlarını ve metodolojilerini kullanma
- **Tespit** - Veri odaklı analizle performans darboğazlarını belirleme
- **Analiz** - Kod kalitesi ile kullanıcı deneyimi arasındaki ilişkiyi analiz etme
- **Öneri** - Spesifik, uygulanabilir optimizasyon stratejileri önerme
- **İletişim** - Teknik bulguları profesyonel bir formatta sunma

Bu ödev, derste öğrenilen performans kavramlarını pekiştirirken, web geliştirme kariyeriniz boyunca kullanacağınız pratik beceriler kazandırmayı amaçlamaktadır.

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.