<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f198c6b817b4b2a99749f4662e7cae98",
  "translation_date": "2025-08-25T23:48:14+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "tr"
}
-->
# Tarayıcı Eklentisi Projesi Bölüm 3: Arka Plan Görevlerini ve Performansı Öğrenin

## Ders Öncesi Test

[Ders öncesi test](https://ff-quizzes.netlify.app/web/quiz/27)

### Giriş

Bu modülün son iki dersinde, bir API'den alınan veriler için bir form ve görüntüleme alanı oluşturmayı öğrendiniz. Bu, web üzerinde bir varlık oluşturmanın oldukça standart bir yoludur. Hatta verileri asenkron olarak almayı nasıl yöneteceğinizi de öğrendiniz. Tarayıcı eklentiniz neredeyse tamamlanmış durumda.

Şimdi, eklentinin simgesinin rengini yenilemek gibi bazı arka plan görevlerini yönetmek kaldı. Bu, tarayıcının bu tür görevleri nasıl yönettiğini konuşmak için harika bir zaman. Bu tarayıcı görevlerini, web varlıklarınızı oluştururken performans bağlamında düşünelim.

## Web Performansı Temelleri

> "Web sitesi performansı iki şeyle ilgilidir: sayfanın ne kadar hızlı yüklendiği ve üzerindeki kodun ne kadar hızlı çalıştığı." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Web sitelerinizi her tür cihazda, her tür kullanıcı için ve her tür durumda inanılmaz derecede hızlı hale getirmenin konusu, şaşırtıcı olmayan bir şekilde geniştir. İster standart bir web projesi ister bir tarayıcı eklentisi oluşturuyor olun, aklınızda bulundurmanız gereken bazı noktalar şunlardır:

Web sitenizin verimli çalıştığından emin olmak için yapmanız gereken ilk şey, performansı hakkında veri toplamaktır. Bunu yapacağınız ilk yer, web tarayıcınızın geliştirici araçlarıdır. Edge'de, "Ayarlar ve daha fazlası" düğmesini (tarayıcının sağ üst köşesindeki üç nokta simgesi) seçebilir, ardından Daha Fazla Araç > Geliştirici Araçları'na gidip Performans sekmesini açabilirsiniz. Geliştirici araçlarını açmak için Windows'ta `Ctrl` + `Shift` + `I` veya Mac'te `Option` + `Command` + `I` klavye kısayollarını da kullanabilirsiniz.

Performans sekmesi bir Profil Oluşturma aracı içerir. Bir web sitesini açın (örneğin, [https://www.microsoft.com](https://www.microsoft.com/?WT.mc_id=academic-77807-sagibbon)) ve 'Kaydet' düğmesine tıklayın, ardından siteyi yenileyin. Kaydı istediğiniz zaman durdurabilirsiniz ve siteyi 'script', 'render' ve 'paint' etmek için oluşturulan rutinleri görebilirsiniz:

![Edge profiler](../../../../translated_images/profiler.5a4a62479c5df01cfec9aab74173dba13f91d2c968e1a1ae434c26165792df15.tr.png)

✅ Edge'deki Performans paneli hakkında daha fazla bilgi için [Microsoft Belgeleri](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) sayfasını ziyaret edin.

> İpucu: Web sitenizin başlangıç süresi hakkında doğru bir okuma almak için tarayıcınızın önbelleğini temizleyin.

Sayfanızın yüklenirken gerçekleşen olayları yakınlaştırmak için profil zaman çizelgesinin öğelerini seçin.

Profil zaman çizelgesinin bir bölümünü seçerek ve özet paneline bakarak sayfanızın performansının bir anlık görüntüsünü alın:

![Edge profiler snapshot](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.tr.png)

15 ms'den uzun süren bir olay olup olmadığını görmek için Olay Günlüğü panelini kontrol edin:

![Edge event log](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.tr.png)

✅ Profil oluşturucuyu tanıyın! Bu sitedeki geliştirici araçlarını açın ve herhangi bir darboğaz olup olmadığını kontrol edin. En yavaş yüklenen varlık nedir? En hızlısı nedir?

## Profil Oluşturma Kontrolleri

Genel olarak, bir site oluştururken her web geliştiricisinin dikkat etmesi gereken bazı "sorun alanları" vardır. Bu, üretime geçme zamanı geldiğinde hoş olmayan sürprizlerden kaçınmak için önemlidir.

**Varlık boyutları**: Web son birkaç yılda 'ağırlaştı' ve dolayısıyla yavaşladı. Bu ağırlığın bir kısmı, görüntülerin kullanımından kaynaklanmaktadır.

✅ Sayfa ağırlığı ve daha fazlası hakkında tarihsel bir görünüm için [Internet Archive](https://httparchive.org/reports/page-weight) sayfasına göz atın.

Görüntülerinizin optimize edildiğinden ve kullanıcılarınız için doğru boyut ve çözünürlükte sunulduğundan emin olmak iyi bir uygulamadır.

**DOM geçişleri**: Tarayıcı, yazdığınız koda dayanarak Belge Nesne Modelini (DOM) oluşturmak zorundadır, bu nedenle iyi bir sayfa performansı için etiketlerinizi minimumda tutmak, yalnızca sayfanın ihtiyaç duyduğu şeyleri kullanmak ve stil vermek önemlidir. Bu noktada, bir sayfayla ilişkili fazla CSS optimize edilebilir; yalnızca bir sayfada kullanılması gereken stiller, örneğin ana stil sayfasına dahil edilmemelidir.

**JavaScript**: Her JavaScript geliştiricisi, DOM'un geri kalanının taranıp tarayıcıya boyanmasından önce yüklenmesi gereken 'render-blocking' (render engelleyici) komut dosyalarına dikkat etmelidir. Satır içi komut dosyalarınızla `defer` kullanmayı düşünün (Terrarium modülünde yapıldığı gibi).

✅ Site performansını belirlemek için yapılan yaygın kontroller hakkında daha fazla bilgi edinmek için [Site Hız Testi web sitesinde](https://www.webpagetest.org/) bazı siteleri deneyin.

Artık tarayıcının gönderdiğiniz varlıkları nasıl işlediği hakkında bir fikriniz olduğuna göre, eklentinizi tamamlamak için yapmanız gereken son birkaç şeye bakalım:

### Renk hesaplamak için bir fonksiyon oluşturun

`/src/index.js` dosyasında, DOM'a erişim sağlamak için ayarladığınız `const` değişkenleri serisinin ardından `calculateColor()` adlı bir fonksiyon ekleyin:

```JavaScript
function calculateColor(value) {
	let co2Scale = [0, 150, 600, 750, 800];
	let colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	let closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	console.log(value + ' is closest to ' + closestNum);
	let num = (element) => element > closestNum;
	let scaleIndex = co2Scale.findIndex(num);

	let closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

Burada neler oluyor? Bir önceki derste tamamladığınız API çağrısından bir değer (karbon yoğunluğu) alıyorsunuz ve ardından bu değerin renkler dizisinde sunulan indekse ne kadar yakın olduğunu hesaplıyorsunuz. Daha sonra bu en yakın renk değerini chrome runtime'a gönderiyorsunuz.

Chrome.runtime, her türlü arka plan görevini yöneten [bir API](https://developer.chrome.com/extensions/runtime) sağlar ve eklentiniz bunu kullanır:

> "Chrome.runtime API'sini kullanarak arka plan sayfasını alın, manifest hakkında ayrıntıları döndürün ve uygulama veya eklenti yaşam döngüsündeki olayları dinleyin ve yanıtlayın. Ayrıca bu API'yi, URL'lerin göreceli yolunu tam nitelikli URL'lere dönüştürmek için kullanabilirsiniz."

✅ Bu tarayıcı eklentisini Edge için geliştiriyorsanız, bir chrome API'si kullandığınıza şaşırabilirsiniz. Daha yeni Edge tarayıcı sürümleri Chromium tarayıcı motorunda çalışır, bu nedenle bu araçlardan yararlanabilirsiniz.

> Not: Bir tarayıcı eklentisinin profilini oluşturmak istiyorsanız, geliştirici araçlarını eklentinin içinden başlatın, çünkü bu kendi ayrı bir tarayıcı örneğidir.

### Varsayılan bir simge rengi ayarlayın

Şimdi, `init()` fonksiyonunda, chrome'un `updateIcon` eylemini tekrar çağırarak simgeyi başlangıçta genel bir yeşil renge ayarlayın:

```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```

### Fonksiyonu çağırın, çağrıyı yürütün

Son olarak, oluşturduğunuz bu fonksiyonu, C02Signal API tarafından döndürülen promise'e ekleyerek çağırın:

```JavaScript
//let CO2...
calculateColor(CO2);
```

Ve son olarak, `/dist/background.js` dosyasında, bu arka plan eylem çağrıları için dinleyiciyi ekleyin:

```JavaScript
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.browserAction.setIcon({ imageData: drawIcon(msg.value) });
	}
});
//borrowed from energy lollipop extension, nice feature!
function drawIcon(value) {
	let canvas = document.createElement('canvas');
	let context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	return context.getImageData(50, 50, 100, 100);
}
```

Bu kodda, arka plan görev yöneticisine gelen herhangi bir mesaj için bir dinleyici ekliyorsunuz. Eğer mesaj 'updateIcon' olarak adlandırılmışsa, Canvas API'sini kullanarak uygun renkte bir simge çizmek için sonraki kod çalıştırılır.

✅ Canvas API'si hakkında daha fazla bilgi edinmek için [Uzay Oyunu derslerine](../../6-space-game/2-drawing-to-canvas/README.md) göz atabilirsiniz.

Şimdi, eklentinizi yeniden oluşturun (`npm run build`), yenileyin ve eklentinizi başlatın, ardından rengin değişimini izleyin. Bulaşıkları yıkamak veya bir iş yapmak için iyi bir zaman mı? Artık biliyorsunuz!

Tebrikler, kullanışlı bir tarayıcı eklentisi oluşturdunuz ve tarayıcının nasıl çalıştığını ve performansını nasıl profil oluşturacağınızı öğrendiniz.

---

## 🚀 Zorluk

Uzun zamandır var olan bazı açık kaynaklı web sitelerini araştırın ve GitHub geçmişlerine dayanarak, yıllar içinde performans için nasıl optimize edildiklerini belirleyip belirleyemeyeceğinizi görün. En yaygın sorun noktası nedir?

## Ders Sonrası Test

[Ders sonrası test](https://ff-quizzes.netlify.app/web/quiz/28)

## Gözden Geçirme ve Kendi Kendine Çalışma

[Performans bültenine](https://perf.email/) kaydolmayı düşünün.

Tarayıcıların web performansını nasıl ölçtüğüne dair bazı yolları araştırmak için web araçlarındaki performans sekmelerine göz atın. Büyük farklılıklar buluyor musunuz?

## Ödev

[Bir siteyi performans için analiz edin](assignment.md)

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dilindeki hali, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.