<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b121a279a6ab39878491f3e572673515",
  "translation_date": "2025-08-25T23:27:25+00:00",
  "source_file": "5-browser-extension/README.md",
  "language_code": "tr"
}
-->
# Bir tarayıcı uzantısı oluşturma

Tarayıcı uzantıları oluşturmak, uygulamalarınızın performansını düşünürken farklı bir tür web varlığı oluşturmanın eğlenceli ve ilginç bir yoludur. Bu modül, tarayıcıların nasıl çalıştığı ve bir tarayıcı uzantısının nasıl dağıtılacağı, bir formun nasıl oluşturulacağı, bir API'nin nasıl çağrılacağı, yerel depolamanın nasıl kullanılacağı ve web sitenizin performansını nasıl ölçüp iyileştirebileceğiniz hakkında dersler içerir.

Edge, Chrome ve Firefox'ta çalışan bir tarayıcı uzantısı oluşturacaksınız. Bu uzantı, çok belirli bir göreve yönelik olarak tasarlanmış mini bir web sitesi gibidir ve belirli bir bölgenin elektrik kullanımını ve karbon yoğunluğunu kontrol etmek için [C02 Signal API](https://www.co2signal.com)'yi kullanır ve bölgenin karbon ayak izi hakkında bir okuma sunar.

Bu uzantı, bir kullanıcı tarafından, bir API anahtarı ve bölge kodu bir forma girildikten sonra, yerel elektrik kullanımını belirlemek ve böylece bir kullanıcının elektrik kararlarını etkileyebilecek veriler sunmak için ad hoc olarak çağrılabilir. Örneğin, bölgenizde yüksek elektrik kullanımının olduğu bir dönemde çamaşır kurutma makinesini (karbon yoğun bir etkinlik) çalıştırmayı ertelemek daha uygun olabilir.

### Konular

1. [Tarayıcı hakkında](1-about-browsers/README.md)
2. [Formlar ve yerel depolama](2-forms-browsers-local-storage/README.md)
3. [Arka plan görevleri ve performans](3-background-tasks-and-performance/README.md)

### Katkılar

![yeşil bir tarayıcı uzantısı](../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.tr.png)

## Katkılar

Bu web karbon tetikleyicisi fikri, Microsoft'ta Green Cloud Advocacy ekibinin lideri ve [Green Principles](https://principles.green/) yazarı Asim Hussain tarafından önerildi. İlk olarak bir [web sitesi projesi](https://github.com/jlooper/green) olarak tasarlandı.

Tarayıcı uzantısının yapısı, [Adebola Adeniran'ın COVID uzantısından](https://github.com/onedebos/covtension) etkilenmiştir.

'Dot' simge sistemi konsepti, [Energy Lollipop](https://energylollipop.com/) tarayıcı uzantısının Kaliforniya emisyonları için kullanılan simge yapısından esinlenmiştir.

Bu dersler, [Jen Looper](https://www.twitter.com/jenlooper) tarafından ♥️ ile yazılmıştır.

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.