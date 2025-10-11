<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b91cbf14240ee59411b96448b994ace1",
  "translation_date": "2025-10-03T12:24:13+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "tr"
}
-->
# Tarayıcı Uzantısı Projesi Bölüm 3: Arka Plan Görevleri ve Performans Hakkında Bilgi Edinin

## Ders Öncesi Test

[Ders öncesi test](https://ff-quizzes.netlify.app/web/quiz/27)

### Giriş

Bu modülün son iki dersinde, bir API'den alınan veriler için bir form ve görüntüleme alanı oluşturmayı öğrendiniz. Bu, web üzerinde bir varlık oluşturmanın oldukça standart bir yoludur. Ayrıca verileri asenkron olarak almayı nasıl yöneteceğinizi öğrendiniz. Tarayıcı uzantınız neredeyse tamamlanmış durumda.

Geriye, uzantının simgesinin rengini yenilemek gibi bazı arka plan görevlerini yönetmek kalıyor. Bu, tarayıcının bu tür görevleri nasıl yönettiğini konuşmak için harika bir zaman. Web varlıklarınızı oluştururken bu tarayıcı görevlerini performans bağlamında düşünelim.

## Web Performansı Temelleri

> "Web sitesi performansı iki şeyle ilgilidir: sayfanın ne kadar hızlı yüklendiği ve üzerindeki kodun ne kadar hızlı çalıştığı." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Web sitelerinizi her tür cihazda, her tür kullanıcı için ve her tür durumda son derece hızlı hale getirmenin yolları oldukça geniş bir konudur. İşte standart bir web projesi veya bir tarayıcı uzantısı oluştururken akılda tutulması gereken bazı noktalar.

Web sitenizin verimli çalıştığından emin olmak için yapmanız gereken ilk şey, performansı hakkında veri toplamaktır. Bunun için ilk yer, web tarayıcınızın geliştirici araçlarıdır. Edge'de, tarayıcının sağ üst köşesindeki "Ayarlar ve daha fazlası" düğmesini (üç nokta simgesi) seçebilir, ardından Daha Fazla Araç > Geliştirici Araçları'na giderek Performans sekmesini açabilirsiniz. Ayrıca Windows'da `Ctrl` + `Shift` + `I` veya Mac'te `Option` + `Command` + `I` klavye kısayollarını kullanarak geliştirici araçlarını açabilirsiniz.

Performans sekmesi bir Profil oluşturma aracı içerir. Bir web sitesini açın (örneğin, [https://www.microsoft.com](https://www.microsoft.com/?WT.mc_id=academic-77807-sagibbon)) ve 'Kaydet' düğmesine tıklayın, ardından siteyi yenileyin. Kaydı istediğiniz zaman durdurun ve sitenin 'script', 'render' ve 'paint' rutinlerini görebilirsiniz:

![Edge profiler](../../../../translated_images/profiler.5a4a62479c5df01cfec9aab74173dba13f91d2c968e1a1ae434c26165792df15.tr.png)

✅ Edge'deki Performans paneli hakkında daha fazla bilgi edinmek için [Microsoft Belgeleri](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) sayfasını ziyaret edin.

> İpucu: Web sitenizin başlangıç süresi hakkında doğru bir okuma almak için tarayıcınızın önbelleğini temizleyin.

Sayfanız yüklenirken gerçekleşen olaylara yakınlaşmak için profil zaman çizelgesinin öğelerini seçin.

Profil zaman çizelgesinin bir bölümünü seçerek ve özet paneline bakarak sayfanızın performansının bir anlık görüntüsünü alın:

![Edge profiler snapshot](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.tr.png)

Olay Günlüğü panelini kontrol ederek herhangi bir olayın 15 ms'den uzun sürüp sürmediğini görün:

![Edge event log](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.tr.png)

✅ Profil oluşturucuyu tanıyın! Bu sitede geliştirici araçlarını açın ve herhangi bir darboğaz olup olmadığını kontrol edin. En yavaş yüklenen varlık hangisi? En hızlısı hangisi?

## Profil Kontrolleri

Genel olarak, bir web geliştiricisinin bir site oluştururken üretime geçme zamanı geldiğinde hoş olmayan sürprizlerden kaçınmak için dikkat etmesi gereken bazı "sorun alanları" vardır.

**Varlık boyutları**: Web son birkaç yılda 'ağırlaştı' ve dolayısıyla yavaşladı. Bu ağırlığın bir kısmı görüntülerin kullanımından kaynaklanıyor.

✅ Sayfa ağırlığı ve daha fazlası hakkında tarihsel bir görünüm için [Internet Archive](https://httparchive.org/reports/page-weight) sayfasına göz atın.

Görüntülerinizin optimize edildiğinden ve kullanıcılarınıza doğru boyut ve çözünürlükte sunulduğundan emin olmak iyi bir uygulamadır.

**DOM geçişleri**: Tarayıcı, yazdığınız koda dayanarak Belge Nesne Modelini (DOM) oluşturmak zorundadır, bu nedenle iyi sayfa performansı için etiketlerinizi minimumda tutmak, yalnızca sayfanın ihtiyaç duyduğu şeyleri kullanmak ve stil vermek önemlidir. Bu noktada, bir sayfayla ilişkilendirilen fazla CSS optimize edilebilir; yalnızca bir sayfada kullanılacak stiller, örneğin ana stil sayfasına dahil edilmemelidir.

**JavaScript**: Her JavaScript geliştiricisi, DOM'un geri kalanının taranıp tarayıcıya boyanmasından önce yüklenmesi gereken 'render-blocking' (render engelleyici) betiklere dikkat etmelidir. Inline betiklerinizle `defer` kullanmayı düşünün (Terrarium modülünde olduğu gibi).

✅ Site performansını belirlemek için yapılan yaygın kontroller hakkında daha fazla bilgi edinmek için [Site Hız Testi web sitesi](https://www.webpagetest.org/) üzerinde bazı siteleri deneyin.

Artık tarayıcının gönderdiğiniz varlıkları nasıl işlediği hakkında bir fikriniz olduğuna göre, uzantınızı tamamlamak için yapmanız gereken son birkaç şeye bakalım:

### Renk Hesaplama Fonksiyonu Oluşturun

`/src/index.js` dosyasında, DOM'a erişim sağlamak için ayarladığınız `const` değişkenler serisinden sonra `calculateColor()` adlı bir fonksiyon ekleyin:

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

Burada neler oluyor? Bir önceki derste tamamladığınız API çağrısından bir değer (karbon yoğunluğu) alıyorsunuz ve ardından bu değerin renkler dizisinde sunulan indekse ne kadar yakın olduğunu hesaplıyorsunuz. Ardından bu en yakın renk değerini chrome runtime'a gönderiyorsunuz.

Chrome.runtime, her türlü arka plan görevini yöneten [bir API](https://developer.chrome.com/extensions/runtime) içerir ve uzantınız bunu kullanıyor:

> "Chrome.runtime API'sini kullanarak arka plan sayfasını alın, manifest hakkında ayrıntıları döndürün ve uygulama veya uzantı yaşam döngüsündeki olayları dinleyin ve yanıtlayın. Ayrıca bu API'yi URL'lerin göreceli yolunu tam nitelikli URL'lere dönüştürmek için kullanabilirsiniz."

✅ Bu tarayıcı uzantısını Edge için geliştiriyorsanız, bir chrome API'si kullandığınıza şaşırabilirsiniz. Edge'in daha yeni tarayıcı sürümleri Chromium tarayıcı motorunda çalışır, bu nedenle bu araçlardan yararlanabilirsiniz.

> Not: Bir tarayıcı uzantısını profil oluşturmak istiyorsanız, uzantının kendisinden geliştirici araçlarını başlatın, çünkü bu kendi ayrı tarayıcı örneğidir.

### Varsayılan Simge Rengi Ayarlayın

Şimdi, `init()` fonksiyonunda, simgeyi başlangıçta genel bir yeşil olarak ayarlayın ve yine chrome'un `updateIcon` eylemini çağırın:

```JavaScript
chrome.runtime.sendMessage({
	action: 'updateIcon',
		value: {
			color: 'green',
		},
});
```
### Fonksiyonu Çağırın, Çağrıyı Gerçekleştirin

Son olarak, bir önceki derste tamamladığınız C02Signal API'sinden dönen promise'e bu yeni oluşturduğunuz fonksiyonu ekleyin:

```JavaScript
//let CO2...
calculateColor(CO2);
```

Ve son olarak, `/dist/background.js` dosyasında bu arka plan eylem çağrılarını dinlemek için bir dinleyici ekleyin:

```JavaScript
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.action.setIcon({ imageData: drawIcon(msg.value) });
	}
});
//borrowed from energy lollipop extension, nice feature!
function drawIcon(value) {
	let canvas = new OffscreenCanvas(200, 200);
	let context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	return context.getImageData(50, 50, 100, 100);
}
```

Bu kodda, arka plan görev yöneticisine gelen herhangi bir mesaj için bir dinleyici ekliyorsunuz. Eğer mesaj 'updateIcon' olarak adlandırılmışsa, bir sonraki kod Canvas API'sini kullanarak uygun renkte bir simge çizmek için çalıştırılır.

✅ Canvas API hakkında daha fazla bilgi edinmek için [Uzay Oyunu dersleri](../../6-space-game/2-drawing-to-canvas/README.md) sayfasını ziyaret edin.

Şimdi uzantınızı yeniden oluşturun (`npm run build`), yenileyin ve uzantınızı başlatın, ardından rengin değişimini izleyin. Bir iş yapmak veya bulaşıkları yıkamak için iyi bir zaman mı? Artık biliyorsunuz!

Tebrikler, kullanışlı bir tarayıcı uzantısı oluşturdunuz ve tarayıcının nasıl çalıştığı ve performansını nasıl profil oluşturacağınız hakkında daha fazla bilgi edindiniz.

---

## 🚀 Meydan Okuma

Uzun zamandır var olan bazı açık kaynaklı web sitelerini araştırın ve GitHub geçmişlerine dayanarak, yıllar içinde performans için nasıl optimize edildiklerini (eğer optimize edildilerse) belirlemeye çalışın. En yaygın sorun noktası nedir?

## Ders Sonrası Test

[Ders sonrası test](https://ff-quizzes.netlify.app/web/quiz/28)

## Gözden Geçirme ve Kendi Kendine Çalışma

Bir [performans bültenine](https://perf.email/) abone olmayı düşünün.

Tarayıcıların web performansını nasıl ölçtüğüne dair bazı yolları araştırmak için web araçlarındaki performans sekmelerine göz atın. Önemli farklılıklar buluyor musunuz?

## Ödev

[Bir siteyi performans açısından analiz edin](assignment.md)

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul edilmez.