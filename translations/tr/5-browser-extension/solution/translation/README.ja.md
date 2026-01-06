<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f5e6821e0febccfc5d05e7c944d9e3d",
  "translation_date": "2025-08-26T00:02:18+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ja.md",
  "language_code": "tr"
}
-->
# Karbon Tetikleyici Tarayıcı Uzantısı: Tamamlanmış Kod

tmrow'un CO2 Signal API'sini kullanarak enerji tüketiminizi takip etmek için, bölgenizdeki enerji kullanımının ne kadar yoğun olduğunu tarayıcıda bir hatırlatıcı olarak gösterebilen bir tarayıcı uzantısı oluşturacağız. Bu uzantıyı ad-hoc olarak kullanarak, bu bilgiye dayanarak aktivitelerinizi değerlendirebilirsiniz.

![uzantı ekran görüntüsü](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.tr.png)

## Başlangıç

[npm](https://npmjs.com) yüklü olmalıdır. Bu kodun bir kopyasını bilgisayarınızdaki bir klasöre indirin.

Gerekli tüm paketleri yükleyin.

```
npm install
```

Uzantıyı webpack ile derleyin.

```
npm run build
```

Edge'e yüklemek için, tarayıcının sağ üst köşesindeki "üç nokta" menüsünden "Uzantılar" panelini bulun. Buradan "Load Unpacked" seçeneğini seçerek yeni uzantıyı yükleyin. İstendiğinde "dist" klasörünü açın, böylece uzantı yüklenir. Kullanmak için, CO2 Signal API'nin API anahtarına ([buradan e-posta ile alın](https://www.co2signal.com/) - bu sayfadaki kutuya e-posta adresinizi girin) ve [Electricity Map](https://www.electricitymap.org/map) ile uyumlu [bölgenizin koduna](http://api.electricitymap.org/v3/zones) ihtiyacınız olacak (örneğin, Boston için 'US-NEISO' kullanabilirsiniz).

![yükleme](../../../../../translated_images/install-on-edge.78634f02842c4828.tr.png)

API anahtarını ve bölgenizi uzantı arayüzüne girdikten sonra, tarayıcı uzantı çubuğunda görünen renkli bir nokta değişir ve bölgenizdeki enerji kullanımını yansıtarak hangi tür enerji gerektiren aktiviteleri yapmanın uygun olduğunu gösterir. Bu "nokta" sistemi konsepti, Kaliforniya'daki emisyonlar için [Energy Lollipop uzantısı](https://energylollipop.com/) tarafından bana ilham verilmiştir.

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.