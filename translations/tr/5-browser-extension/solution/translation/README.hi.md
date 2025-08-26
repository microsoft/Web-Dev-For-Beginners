<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dd58ae1b7707034f055718c1b68bc8de",
  "translation_date": "2025-08-25T23:55:08+00:00",
  "source_file": "5-browser-extension/solution/translation/README.hi.md",
  "language_code": "tr"
}
-->
# Karbon Tetikleyici Tarayıcı Uzantısı: Tamamlanmış Kod

Elektrik kullanımını izlemek için tmrow'un CO2 Signal API'sini kullanarak, tarayıcınızda bölgenizdeki elektrik kullanımının ne kadar yoğun olduğunu hatırlatacak bir tarayıcı uzantısı oluşturmak. Bu uzantıyı kullanarak, bu bilgiye dayanarak aktiviteleriniz hakkında karar vermenize yardımcı olabilirsiniz.

![Uzantı Ekran Görüntüsü](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.tr.png)

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

Edge tarayıcısına yüklemek için, tarayıcının sağ üst köşesindeki 'üç nokta' menüsünü kullanarak uzantılar panelini bulun. Buradan, yeni bir uzantı yüklemek için 'Load unpacked' seçeneğini seçin. Açılan pencerede 'dist' klasörünü seçin ve uzantı yüklenecektir. Uzantıyı kullanabilmek için CO2 Signal API'sinden ([buradan e-posta ile alın](https://www.co2signal.com/)) bir API anahtarına ihtiyacınız olacak - bu sayfadaki kutuya e-posta adresinizi girin. Ayrıca [bölgeniz için kod](http://api.electricitymap.org/v3/zones) [Elektrik Haritası](https://www.electricitymap.org/map) üzerinden bulunabilir (örneğin, Boston için 'US-NEISO' kodunu kullanıyorum).

![Kurulum](../../../../../translated_images/install-on-edge.78634f02842c48283726c531998679a6f03a45556b2ee99d8ff231fe41446324.tr.png)

API anahtarı ve bölge kodu uzantı arayüzüne girildikten sonra, tarayıcı uzantı çubuğundaki renkli nokta bölgenizdeki enerji kullanımını yansıtacak şekilde değişmelidir ve enerji yoğun aktivitelerin performansınıza uygun olup olmadığını gösteren bir işaretçi sunmalıdır. Bu 'nokta' sistemi fikri, Kaliforniya emisyonları için [Energy Lollipop Uzantısı](https://energylollipop.com/) tarafından bana ilham verdi.

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dilindeki hali, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.