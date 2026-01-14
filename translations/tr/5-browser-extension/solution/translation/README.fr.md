<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9361268ca430b2579375009e1eceb5e5",
  "translation_date": "2025-08-25T23:58:41+00:00",
  "source_file": "5-browser-extension/solution/translation/README.fr.md",
  "language_code": "tr"
}
-->
# Carbon Trigger Tarayıcı Uzantısı: Tamamlanmış Kod

Tmrow'un C02 Signal API'sini kullanarak elektrik tüketimini takip edin ve bölgenizdeki elektrik tüketimi hakkında doğrudan tarayıcınızda bir hatırlatıcı almanızı sağlayan bir tarayıcı uzantısı oluşturun. Bu özel uzantıyı kullanmak, bu bilgilere dayanarak aktiviteleriniz hakkında daha bilinçli kararlar vermenize yardımcı olacaktır.

![uzantı ekran görüntüsü](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.tr.png)

## Başlangıç

[Node.js](https://npmjs.com) yüklü olmalıdır. Bu kodun bir kopyasını bilgisayarınızdaki bir klasöre indirin.

Gerekli tüm paketleri yükleyin:

```
npm install
```

Webpack ile uzantıyı oluşturun:

```
npm run build
```

Edge tarayıcısına yüklemek için, tarayıcının sağ üst köşesindeki 'üç nokta' menüsünü kullanarak Uzantılar panelini bulun. Buradan 'Sıkıştırılmamış uzantıyı yükle' seçeneğini seçerek yeni bir uzantı yükleyin. İstendiğinde 'dist' klasörünü açın ve uzantı yüklenecektir. Kullanabilmek için CO2 Signal API'si için bir API anahtarına ihtiyacınız olacak ([buradan e-posta ile alın](https://www.co2signal.com/) - bu sayfadaki kutuya e-posta adresinizi girin) ve [Elektrik Haritası](https://www.electricitymap.org/map) ile eşleşen bölgenizin [koduna](http://api.electricitymap.org/v3/zones) ihtiyacınız olacak (örneğin, Boston'da 'US-NEISO' kodunu kullanıyorum).

![kurulum](../../../../../translated_images/install-on-edge.78634f02842c4828.tr.png)

API anahtarı ve bölge uzantı arayüzüne girildikten sonra, tarayıcı uzantı çubuğundaki renkli nokta bölgenizdeki enerji tüketimini yansıtacak şekilde değişmelidir ve enerji yoğun aktiviteler için uygun bir gösterge sunmalıdır. Bu 'nokta' sistemi konsepti, [Energy Lollipop uzantısından](https://energylollipop.com/) Kaliforniya emisyonları için ilham alınarak geliştirilmiştir.

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.