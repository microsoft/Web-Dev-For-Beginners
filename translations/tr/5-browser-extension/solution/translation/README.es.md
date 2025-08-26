<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cbaf73f94a9ab4c680a10ef871e92948",
  "translation_date": "2025-08-25T23:53:17+00:00",
  "source_file": "5-browser-extension/solution/translation/README.es.md",
  "language_code": "tr"
}
-->
# Carbon Trigger Tarayıcı Eklentisi: Tam Kod

Elektrik kullanımını takip etmek için tmrow'un CO2 sinyal API'sini kullanarak, bölgenizdeki elektrik tüketimi hakkında doğrudan tarayıcınızda bir hatırlatıcı almanızı sağlayan bir tarayıcı eklentisi oluşturun. Bu özel eklentiyi kullanmak, bu bilgileri temel alarak aktiviteleriniz hakkında kararlar almanıza yardımcı olacaktır.

![extension screenshot](../../../../../translated_images/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.tr.png)

## Başlarken

[npm](https://npmjs.com)'in yüklü olması gereklidir. Bu kodun bir kopyasını bilgisayarınızdaki bir klasöre indirin.

Gerekli tüm paketleri yükleyin:

```
npm install
```

Eklentiyi webpack ile oluşturun:

```
npm run build
```

Edge'e yüklemek için, tarayıcının sağ üst köşesindeki 'üç nokta' menüsünü kullanarak Uzantılar panelini bulun. Buradan, yeni bir uzantı yüklemek için 'Paketlenmemiş yükle' seçeneğini seçin. İstendiğinde 'dist' klasörünü açın ve eklenti yüklenecektir. Kullanmak için, CO2 Signal API'si için bir API anahtarına ([buradan e-posta ile alın](https://www.co2signal.com/) - bu sayfadaki kutuya e-posta adresinizi girin) ve [Elektrik Haritası](https://www.electricitymap.org/map)'na karşılık gelen bölgenizin [kodu](http://api.electricitymap.org/v3/zones)'na ihtiyacınız olacak (örneğin, Boston'da 'US-NEISO' kullanıyorum).

![installing](../../../../../translated_images/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.tr.png)

API anahtarı ve bölge eklenti arayüzüne girildiğinde, tarayıcı uzantı çubuğundaki renkli nokta, bölgenizdeki enerji kullanımını yansıtacak şekilde değişmeli ve size yüksek enerji tüketen aktiviteler hakkında uygun bir gösterge sunmalıdır. Bu "nokta" sistemi fikrini, Kaliforniya emisyonları için [Energy Lollipop uzantısından](https://energylollipop.com/) aldım.

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalardan sorumlu değiliz.