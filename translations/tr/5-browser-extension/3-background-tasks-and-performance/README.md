<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "eb358f3f4c2c082f9f3a4f98efa1d337",
  "translation_date": "2025-10-23T00:09:16+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "tr"
}
-->
# Tarayıcı Uzantısı Projesi Bölüm 3: Arka Plan Görevleri ve Performans Hakkında Bilgi Edinin

Bazı tarayıcı uzantılarının neden hızlı ve duyarlı hissettirdiğini, diğerlerinin ise neden yavaş göründüğünü hiç merak ettiniz mi? Sır, sahne arkasında neler olduğunda gizlidir. Kullanıcılar uzantınızın arayüzünde gezinirken, veri alma, simge güncellemeleri ve sistem kaynaklarını sessizce yöneten bir arka plan işlemleri dünyası vardır.

Bu, tarayıcı uzantısı serimizin son dersi ve karbon ayak izi takipçinizi sorunsuz çalıştıracağız. Dinamik simge güncellemeleri ekleyecek ve performans sorunlarını sorun haline gelmeden önce nasıl tespit edeceğinizi öğreneceksiniz. Bu, bir yarış arabasını ayarlamak gibi - küçük optimizasyonlar her şeyin nasıl çalıştığı konusunda büyük bir fark yaratabilir.

Dersin sonunda, cilalanmış bir uzantıya sahip olacak ve iyi web uygulamaları ile harika olanlar arasındaki performans ilkelerini anlayacaksınız. Haydi, tarayıcı optimizasyonu dünyasına dalalım.

## Ders Öncesi Test

[Ders öncesi test](https://ff-quizzes.netlify.app/web/quiz/27)

### Giriş

Önceki derslerimizde bir form oluşturmuş, bunu bir API'ye bağlamış ve asenkron veri almayı ele almıştınız. Uzantınız güzel bir şekilde şekilleniyor.

Şimdi son dokunuşları eklememiz gerekiyor - örneğin, uzantı simgesinin karbon verilerine göre renk değiştirmesini sağlamak. Bu, NASA'nın Apollo uzay aracındaki her sistemi optimize etmek zorunda olduğu zamana benziyor. Performans hayat kurtarmak kadar kritik olmasa da, aynı prensipler geçerli - verimli kod daha iyi kullanıcı deneyimleri yaratır.

## Web Performansı Temelleri

Kodunuz verimli çalıştığında, insanlar bunu gerçekten *hissedebilir*. Bir sayfa anında yüklendiğinde veya bir animasyon akıcı bir şekilde aktığında yaşadığınız o an? İşte bu, iyi performansın iş başında olduğu an.

Performans sadece hızla ilgili değil - web deneyimlerini hantal ve sinir bozucu yerine doğal hissettirmekle ilgilidir. Bilgisayarın ilk günlerinde, Grace Hopper bir nanosecond (yaklaşık bir ayak uzunluğunda bir tel parçası) masasında tutardı, ışığın bir milyarda bir saniyede ne kadar yol aldığını göstermek için. Bu, her mikro saniyenin bilgisayarda neden önemli olduğunu açıklama şekliydi. Şimdi, işleri yavaşlatan şeyleri anlamanıza yardımcı olacak dedektif araçlarını keşfedelim.

> "Web sitesi performansı iki şeyle ilgilidir: sayfanın ne kadar hızlı yüklendiği ve üzerindeki kodun ne kadar hızlı çalıştığı." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Web sitelerinizi her tür cihazda, her tür kullanıcı için, her tür durumda inanılmaz derecede hızlı hale getirme konusu, tahmin edilebileceği gibi oldukça geniştir. İster standart bir web projesi ister bir tarayıcı uzantısı oluşturuyor olun, akılda tutulması gereken bazı noktalar şunlardır.

Sitenizi optimize etmenin ilk adımı, kaputun altında neler olduğunu anlamaktır. Neyse ki, tarayıcınızda güçlü dedektif araçları yerleşik olarak bulunuyor.

Edge'de Geliştirici Araçlarını açmak için sağ üst köşedeki üç noktaya tıklayın, ardından Daha Fazla Araç > Geliştirici Araçları'na gidin. Veya klavye kısayolunu kullanabilirsiniz: Windows'ta `Ctrl` + `Shift` + `I` veya Mac'te `Option` + `Command` + `I`. Oraya vardığınızda, Performans sekmesine tıklayın - burada araştırmanızı yapacaksınız.

**İşte performans dedektif araçlarınız:**
- **Açın** Geliştirici Araçları (bir geliştirici olarak bunları sürekli kullanacaksınız!)
- **Performans** sekmesine gidin - bunu web uygulamanızın fitness takipçisi olarak düşünün
- **Kaydı başlatın** ve sayfanızın aksiyonunu izleyin
- **Sonuçları inceleyin** ve işleri yavaşlatan şeyleri tespit edin

Hadi bunu deneyelim. Bir web sitesi açın (Microsoft.com iyi çalışır) ve 'Kaydı başlat' düğmesine tıklayın. Şimdi sayfayı yenileyin ve profil oluşturucu her şeyi yakalasın. Kaydı durdurduğunuzda, tarayıcının siteyi nasıl 'komutlandırdığı', 'işlediği' ve 'boyadığı' hakkında ayrıntılı bir döküm göreceksiniz. Bu, görev kontrolünün bir roket fırlatışı sırasında her sistemi izlemesine benziyor - tam olarak ne olduğunu ve ne zaman olduğunu gerçek zamanlı verilerle görüyorsunuz.

![Edge profiler](../../../../translated_images/profiler.5a4a62479c5df01cfec9aab74173dba13f91d2c968e1a1ae434c26165792df15.tr.png)

✅ [Microsoft Belgeleri](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) daha fazla ayrıntı için harika bir kaynak

> İpucu: Test yapmadan önce tarayıcı önbelleğinizi temizleyin, böylece sitenizin ilk kez ziyaret edenler için nasıl performans gösterdiğini görebilirsiniz - genellikle tekrar ziyaretlerden oldukça farklıdır!

Sayfanız yüklenirken gerçekleşen olayları yakınlaştırmak için profil zaman çizelgesinin öğelerini seçin.

Profil zaman çizelgesinin bir bölümünü seçerek ve özet paneline bakarak sayfanızın performansının bir anlık görüntüsünü alın:

![Edge profiler snapshot](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.tr.png)

Olay Günlüğü panelini kontrol ederek herhangi bir olayın 15 ms'den uzun sürüp sürmediğini görün:

![Edge event log](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.tr.png)

✅ Profil oluşturucuyu tanıyın! Bu sitedeki geliştirici araçlarını açın ve herhangi bir darboğaz olup olmadığını kontrol edin. En yavaş yüklenen varlık hangisi? En hızlısı hangisi?

## Profil Oluştururken Nelere Dikkat Edilmeli

Profil oluşturmak sadece başlangıçtır - asıl beceri, bu renkli grafiklerin size ne söylediğini anlamaktır. Endişelenmeyin, onları okumayı öğrenmek zamanla kolaylaşır. Deneyimli geliştiriciler, uyarı işaretlerini tam bir sorun haline gelmeden önce tespit etmeyi öğrenmişlerdir.

Hadi genellikle performans sorunlarına neden olan başlıca faktörlerden bahsedelim - web projelerine sızma eğiliminde olan performans sorunları. Marie Curie'nin laboratuvarında radyasyon seviyelerini dikkatle izlemesi gerektiği gibi, biz de sorunların ortaya çıkabileceğini gösteren belirli kalıpları izlemeliyiz. Bunları erken yakalamak, size (ve kullanıcılarınıza) çok fazla hayal kırıklığını önleyecektir.

**Varlık boyutları**: Web siteleri yıllar içinde "ağırlaşmaya" başladı ve bu ekstra ağırlığın çoğu görüntülerden geliyor. Sanki dijital bavullarımıza daha fazla şey dolduruyormuşuz gibi.

✅ [Internet Archive](https://httparchive.org/reports/page-weight) adresine göz atarak sayfa boyutlarının zaman içinde nasıl büyüdüğünü görebilirsiniz - oldukça açıklayıcı.

**Varlıklarınızı optimize etmenin yolları:**
- **Görüntüleri sıkıştırın!** Modern formatlar, örneğin WebP, dosya boyutlarını önemli ölçüde azaltabilir
- **Her cihaz için doğru görüntü boyutunu sunun** - telefonlara büyük masaüstü görüntüleri göndermeye gerek yok
- **CSS ve JavaScript'i küçültün** - her bayt önemlidir
- **Lazy loading kullanın** böylece kullanıcılar gerçekten kaydırdığında görüntüler indirilsin

**DOM geçişleri**: Tarayıcı, yazdığınız koda dayanarak Belge Nesne Modelini oluşturmak zorundadır, bu nedenle iyi sayfa performansı için etiketlerinizi minimumda tutmak, yalnızca sayfanın ihtiyaç duyduğu şeyleri kullanmak ve stil vermek önemlidir. Bu noktada, bir sayfayla ilişkili fazla CSS optimize edilebilir; yalnızca bir sayfada kullanılacak stiller ana stil sayfasına dahil edilmemelidir.

**DOM optimizasyonu için ana stratejiler:**
- **HTML öğelerinin ve iç içe geçmiş seviyelerin sayısını en aza indirir**
- **Kullanılmayan CSS kurallarını kaldırır ve stil dosyalarını verimli bir şekilde birleştirir**
- **Her sayfa için yalnızca gerekli olan CSS'yi yükler**
- **HTML'yi tarayıcı tarafından daha iyi analiz için anlamsal olarak yapılandırır**

**JavaScript**: Her JavaScript geliştiricisi, DOM'un geri kalanının taranıp tarayıcıya boyanmasından önce yüklenmesi gereken 'render-blocking' (işlem engelleyici) komut dosyalarına dikkat etmelidir. Terrarium modülünde olduğu gibi, inline komut dosyalarınızla `defer` kullanmayı düşünün.

**Modern JavaScript optimizasyon teknikleri:**
- **Komut dosyalarını DOM analizi sonrası yüklemek için** `defer` özelliğini kullanır
- **Kod bölme uygular** yalnızca gerekli JavaScript'i yüklemek için
- **Kritik olmayan işlevsellik için lazy loading uygular**
- **Ağır kütüphane ve çerçevelerin kullanımını mümkün olduğunca minimize eder**

✅ [Site Hız Testi web sitesi](https://www.webpagetest.org/) adresinde bazı siteleri deneyin ve site performansını belirlemek için yapılan yaygın kontroller hakkında daha fazla bilgi edinin.

Tarayıcının gönderdiğiniz varlıkları nasıl işlediği hakkında bir fikriniz olduğuna göre, uzantınızı tamamlamak için yapmanız gereken son birkaç şeye bakalım:

### Renk hesaplamak için bir fonksiyon oluşturun

Şimdi sayısal verileri anlamlı renklere dönüştüren bir fonksiyon oluşturacağız. Bunu bir trafik ışığı sistemi gibi düşünün - temiz enerji için yeşil, yüksek karbon yoğunluğu için kırmızı.

Bu fonksiyon, API'mizden gelen CO2 verilerini alacak ve çevresel etkiyi en iyi temsil eden rengi belirleyecek. Bu, bilim insanlarının karmaşık veri desenlerini görselleştirmek için ısı haritalarında renk kodlaması kullanmasına benzer - okyanus sıcaklıklarından yıldız oluşumuna kadar. Bunu `/src/index.js` dosyasına, daha önce ayarladığımız `const` değişkenlerinden hemen sonra ekleyelim:

```javascript
function calculateColor(value) {
	// Define CO2 intensity scale (grams per kWh)
	const co2Scale = [0, 150, 600, 750, 800];
	// Corresponding colors from green (clean) to dark brown (high carbon)
	const colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	// Find the closest scale value to our input
	const closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	
	console.log(`${value} is closest to ${closestNum}`);
	
	// Find the index for color mapping
	const num = (element) => element > closestNum;
	const scaleIndex = co2Scale.findIndex(num);

	const closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	// Send color update message to background script
	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

**Bu akıllı küçük fonksiyonu parçalayalım:**
- **İki dizi oluşturur** - biri CO2 seviyeleri için, diğeri renkler için (yeşil = temiz, kahverengi = kirli!)
- **Gerçek CO2 değerimize en yakın eşleşmeyi bulur** bazı akıllı dizi sıralama kullanarak
- **Eşleşen rengi alır** findIndex() yöntemiyle
- **Seçilen rengi Chrome'un arka plan betiğine bir mesaj olarak gönderir**
- **Daha temiz dize formatlama için** şablon dizeleri (o ters tırnak işaretleri) kullanır
- **Her şeyi düzenli tutar** const bildirimleriyle

`chrome.runtime` [API](https://developer.chrome.com/extensions/runtime), uzantınızın sinir sistemi gibidir - sahne arkasındaki tüm iletişim ve görevleri yönetir:

> "Chrome.runtime API'sini kullanarak arka plan sayfasını alın, manifest hakkında ayrıntıları döndürün ve uygulama veya uzantı yaşam döngüsündeki olayları dinleyin ve yanıtlayın. Ayrıca bu API'yi URL'lerin göreceli yolunu tam nitelikli URL'lere dönüştürmek için kullanabilirsiniz."

**Chrome Runtime API neden bu kadar kullanışlı:**
- **Uzantınızın farklı bölümlerinin birbirleriyle konuşmasına izin verir**
- **Arka plan işlerini kullanıcı arayüzünü dondurmadan yönetir**
- **Uzantınızın yaşam döngüsü olaylarını yönetir**
- **Komut dosyaları arasında mesaj iletimini çok kolay hale getirir**

✅ Bu tarayıcı uzantısını Edge için geliştiriyorsanız, Chrome API'si kullandığınıza şaşırabilirsiniz. Yeni Edge tarayıcı sürümleri Chromium tarayıcı motorunda çalıştığı için bu araçlardan yararlanabilirsiniz.

> **İpucu**: Bir tarayıcı uzantısının profilini oluşturmak istiyorsanız, uzantının içinden geliştirici araçlarını başlatın, çünkü bu kendi ayrı bir tarayıcı instance'ıdır. Bu, uzantıya özgü performans metriklerine erişmenizi sağlar.

### Varsayılan bir simge rengi ayarlayın

Gerçek verileri almaya başlamadan önce, uzantımıza bir başlangıç noktası verelim. Kimse boş veya bozuk görünen bir simgeye bakmayı sevmez. Yeşil bir renk ile başlayacağız, böylece kullanıcılar uzantının kurulum anından itibaren çalıştığını bilir.

`init()` fonksiyonunuzda, varsayılan yeşil simgeyi ayarlayalım:

```javascript
chrome.runtime.sendMessage({
	action: 'updateIcon',
	value: {
		color: 'green',
	},
});
```

**Bu başlatma işlemi şunları sağlar:**
- **Varsayılan durum olarak** nötr bir yeşil renk ayarlar
- **Uzantı yüklendiğinde** anında görsel geri bildirim sağlar
- **Arka plan betiği ile iletişim modelini oluşturur**
- **Veriler yüklenmeden önce kullanıcıların çalışan bir uzantı görmesini sağlar**

### Fonksiyonu çağırın, çağrıyı yürütün

Şimdi her şeyin birbiriyle bağlantılı olmasını sağlayalım, böylece yeni CO2 verileri geldiğinde simgeniz otomatik olarak doğru renkle güncellensin. Bu, bir elektronik cihazda son devreyi bağlamak gibi - birdenbire tüm bireysel bileşenler bir sistem olarak çalışır.

API'den CO2 verilerini aldıktan hemen sonra bu satırı ekleyin:

```javascript
// After retrieving CO2 data from the API
// let CO2 = data.data[0].intensity.actual;
calculateColor(CO2);
```

**Bu entegrasyon şunları sağlar:**
- **API veri akışını** görsel gösterge sistemiyle bağlar
- **Yeni veriler geldiğinde** simge güncellemelerini otomatik olarak tetikler
- **Mevcut karbon yoğunluğuna dayalı olarak** gerçek zamanlı görsel geri bildirim sağlar
- **Veri alma ve görüntüleme mantığı arasında** sorumluluk ayrımını korur

Son olarak, `/dist/background.js` dosyanıza bu arka plan eylem çağrılarını dinlemek için bir dinleyici ekleyin:

```javascript
// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.action.setIcon({ imageData: drawIcon(msg.value) });
	}
});

// Draw dynamic icon using Canvas API
// Borrowed from energy lollipop extension - nice feature!
function drawIcon(value) {
	// Create an offscreen canvas for better performance
	const canvas = new OffscreenCanvas(200, 200);
	const context = canvas.getContext('2d');

	// Draw a colored circle representing carbon intensity
	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	// Return the image data for the browser icon
	return context.getImageData(50, 50, 100, 100);
}
```

**Bu arka plan betiği şunları yapar:**
- **Ana betikten gelen mesajları dinler** (bir resepsiyonist gibi çağrıları alır)
- **Bu 'updateIcon' isteklerini işleyerek** araç çubuğu simgenizi değiştirir
- **Canvas API kullanarak** yeni simgeler oluşturur
- **Mevcut karbon yoğunluğunu gösteren basit bir renkli daire çizer**
- **Tarayıcı araç çubuğunuzu** yeni simgeyle günceller
- **UI'yi engellemeden** OffscreenCanvas kullanır

✅ Canvas API hakkında daha fazla bilgi edinmek için [Uzay Oyunu derslerine](../../6-space-game/2-drawing-to-canvas/README.md) göz atabilirsiniz.

**Uzantınızı test etme zamanı:**
- **Her şeyi derleyin** `npm run build` ile
- **Uzantınızı tarayıcıda yeniden yükleyin** (bu adımı unutmayın)
- **Uzantınızı açın** ve simgenin renk değiştirdiğini izleyin
- **Gerçek karbon verilerine nasıl tepki verdiğini kontrol edin**

Artık bir çamaşır yükü için iyi bir zaman olup olmadığını veya daha temiz enerji için beklemeniz gerekip gerekmediğini bir bakışta bileceksiniz. Gerçekten kullanışlı bir şey inşa ettiniz ve bu süreçte tarayıcı performansı hakkında bilgi edindiniz.

## GitHub Copilot Agent Challenge 🚀

Agent modunu kullanarak aşağıdaki meydan okumayı tamamlayın:

**Açıklama:** Tarayıcı uzantısının performans izleme yeteneklerini geliştirerek uzantının farklı bileşenlerinin yükleme sürelerini izleyen ve görüntüleyen bir özellik ekleyin.

**İstek:** Tarayıcı uzantısı için bir performans izleme sistemi oluşturun. Bu sistem, API'den CO2 verilerini alma, renkleri hesaplama ve simgeyi güncelleme işlemlerinin ne kadar sürdüğünü ölçer ve sonuçları zaman damgaları ve süre metrikleriyle tarayıcı konsolunda görüntüler.

[Agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hakkında daha fazla bilgi edinin.

## 🚀 Meydan Okuma
İşte ilginç bir dedektiflik görevi: yıllardır var olan birkaç açık kaynaklı web sitesini (Wikipedia, GitHub veya Stack Overflow gibi) seçin ve commit geçmişlerini inceleyin. Performans iyileştirmelerini nerede yaptıklarını fark edebilir misiniz? Sürekli ortaya çıkan sorunlar nelerdi?

**Araştırma yaklaşımınız:**
- Commit mesajlarında "optimize," "performance" veya "faster" gibi kelimeleri **arama**
- **Desenleri inceleme** - sürekli aynı tür sorunları mı düzeltiyorlar?
- Web sitelerini yavaşlatan yaygın nedenleri **belirleme**
- **Keşfettiklerinizi paylaşma** - diğer geliştiriciler gerçek dünya örneklerinden öğrenebilir

## Ders Sonrası Test

[Ders sonrası test](https://ff-quizzes.netlify.app/web/quiz/28)

## Gözden Geçirme ve Kendi Kendine Çalışma

Bir [performans bültenine](https://perf.email/) abone olmayı düşünün.

Tarayıcıların web performansını nasıl değerlendirdiğini, web araçlarındaki performans sekmelerine bakarak araştırın. Büyük farklılıklar bulabiliyor musunuz?

## Ödev

[Bir siteyi performans açısından analiz edin](assignment.md)

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çeviriler hata veya yanlışlıklar içerebilir. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalardan sorumlu değiliz.