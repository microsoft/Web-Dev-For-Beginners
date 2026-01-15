<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "21b364c158c8e4f698de65eeac16c9fe",
  "translation_date": "2025-08-25T23:56:53+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ms.md",
  "language_code": "tr"
}
-->
# Carbon Trigger Tarayıcı Uzantısı: Tam Kod

Elektrik kullanımını izlemek için tmrow CO2 Signal API'sini kullanarak, bölgenizdeki elektrik tüketiminin yoğunluğuna dair tarayıcınızda uyarılar almanızı sağlayan bir tarayıcı uzantısı oluşturun. Bu uzantıyı kullanmak, bu bilgiler doğrultusunda aktivitelerinizi değerlendirmenize yardımcı olacaktır.

![tarayıcı uzantısı ekran görüntüsü](../../../../../translated_images/tr/extension-screenshot.0e7f5bfa110e92e3.png)

## Başlangıç

Öncelikle [npm](https://npmjs.com) yüklemeniz gerekiyor. Bu kodun bir kopyasını bilgisayarınızdaki bir klasöre indirin.

Gerekli tüm paketleri yükleyin:

```
npm install
```

Webpack ile uzantıyı oluşturun:

```
npm run build
```

Edge tarayıcısına yüklemek için, tarayıcının sağ üst köşesindeki 'üç nokta' menüsünü kullanarak Uzantılar panelini bulun. Buradan 'Load Unpacked' seçeneğini seçerek yeni bir uzantı yükleyin. İstendiğinde 'dist' klasörünü açın ve uzantı yüklenecektir. Kullanabilmek için CO2 Signal API için bir API anahtarına ihtiyacınız olacak ([buradan e-posta ile alın](https://www.co2signal.com/) - bu sayfadaki kutuya e-posta adresinizi girin) ve [Elektrik Haritası](https://www.electricitymap.org/map) ile uyumlu olan bölgenize ait [kod](http://api.electricitymap.org/v3/zones) (örneğin, Boston'da 'US-NEISO' kullanıyorum).

![yükleniyor](../../../../../translated_images/tr/install-on-edge.78634f02842c4828.png)

API anahtarı ve bölge bilgisi uzantı arayüzüne girildikten sonra, tarayıcı uzantı çubuğundaki renkli nokta, bölgenizdeki enerji tüketimini yansıtacak şekilde değişir ve size uygun aktiviteler hakkında önerilerde bulunur. Bu 'nokta' sisteminin konsepti, [California için Energy Lollipop tarayıcı uzantısından](https://energylollipop.com/) ilham alınmıştır.

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dilindeki hali, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.