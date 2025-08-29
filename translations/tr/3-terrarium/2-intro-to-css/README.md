<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "acb5ae00cde004304296bb97da8ff4c3",
  "translation_date": "2025-08-29T00:28:32+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "tr"
}
-->
# Teraryum Projesi Bölüm 2: CSS'e Giriş

![CSS'e Giriş](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.tr.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ders Öncesi Test

[Ders öncesi test](https://ff-quizzes.netlify.app/web/quiz/17)

### Giriş

CSS, yani Cascading Style Sheets, web geliştirme dünyasında önemli bir sorunu çözer: web sitenizi nasıl güzel görünecek şekilde tasarlarsınız. Uygulamalarınızı stilize etmek, onları daha kullanışlı ve estetik hale getirir; ayrıca CSS kullanarak Responsive Web Design (RWD) oluşturabilirsiniz - bu, uygulamalarınızın hangi ekran boyutunda görüntülenirse görüntülensin iyi görünmesini sağlar. CSS sadece uygulamanızı güzel göstermekle kalmaz; spesifikasyonu, uygulamalarınız için gelişmiş etkileşimler sağlayabilecek animasyonlar ve dönüşümleri de içerir. CSS Çalışma Grubu, mevcut CSS spesifikasyonlarını korumaya yardımcı olur; çalışmalarını [World Wide Web Consortium'un sitesinden](https://www.w3.org/Style/CSS/members) takip edebilirsiniz.

> Not: CSS, webdeki her şey gibi gelişen bir dildir ve tüm tarayıcılar spesifikasyonun yeni bölümlerini desteklemez. Uygulamalarınızı her zaman [CanIUse.com](https://caniuse.com) adresinden kontrol ederek doğrulayın.

Bu derste, çevrimiçi teraryumumuza stiller ekleyeceğiz ve CSS'in birkaç konsepti hakkında daha fazla bilgi edineceğiz: kaskad, kalıtım, seçicilerin kullanımı, konumlandırma ve CSS kullanarak düzen oluşturma. Bu süreçte teraryumu düzenleyecek ve gerçek teraryumu oluşturacağız.

### Ön Koşul

Teraryumunuz için HTML'nin oluşturulmuş ve stilize edilmeye hazır olması gerekir.

> Videoyu kontrol edin

> 
> [![Git ve GitHub temel bilgileri videosu](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Görev

Teraryum klasörünüzde `style.css` adında yeni bir dosya oluşturun. Bu dosyayı `<head>` bölümüne dahil edin:

```html
<link rel="stylesheet" href="./style.css" />
```

---

## Kaskad

Cascading Style Sheets, stillerin 'kaskad' olduğu fikrini içerir; bu, bir stilin uygulanmasının önceliğine göre yönlendirildiği anlamına gelir. Bir web sitesi yazarı tarafından ayarlanan stiller, bir tarayıcı tarafından ayarlanan stillerden önceliklidir. 'Inline' olarak ayarlanan stiller, harici bir stil dosyasında ayarlanan stillerden önceliklidir.

### Görev

`<h1>` etiketinize "color: red" inline stilini ekleyin:

```HTML
<h1 style="color: red">My Terrarium</h1>
```

Ardından, `style.css` dosyanıza aşağıdaki kodu ekleyin:

```CSS
h1 {
 color: blue;
}
```

✅ Web uygulamanızda hangi renk görüntüleniyor? Neden? Stilleri geçersiz kılmanın bir yolunu bulabilir misiniz? Bunu ne zaman yapmak istersiniz veya neden yapmazsınız?

---

## Kalıtım

Stiller, bir üst öğeden bir alt öğeye miras alınır; bu, iç içe geçmiş öğelerin ebeveynlerinin stillerini miras aldığı anlamına gelir.

### Görev

Body'nin fontunu belirli bir fonta ayarlayın ve iç içe geçmiş bir öğenin fontunu kontrol edin:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}
```

Tarayıcınızın 'Elements' sekmesini açın ve H1'in fontunu gözlemleyin. Tarayıcıda belirtildiği gibi, fontunu body'den miras alır:

![miras alınan font](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.tr.png)

✅ İç içe geçmiş bir stilin farklı bir özelliği miras almasını sağlayabilir misiniz?

---

## CSS Seçiciler

### Etiketler

Şu ana kadar, `style.css` dosyanızda yalnızca birkaç etiket stilize edildi ve uygulama oldukça garip görünüyor:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

Bu etiketleri stilize etme yöntemi, benzersiz öğeler üzerinde kontrol sağlar, ancak teraryumunuzdaki birçok bitkinin stillerini kontrol etmeniz gerekir. Bunu yapmak için CSS seçicilerinden yararlanmanız gerekir.

### Id'ler

Sol ve sağ konteynerleri düzenlemek için biraz stil ekleyin. İşaretlemede yalnızca bir sol konteyner ve bir sağ konteyner olduğu için, bunlara id'ler verilmiştir. Stil vermek için `#` kullanın:

```CSS
#left-container {
	background-color: #eee;
	width: 15%;
	left: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}

#right-container {
	background-color: #eee;
	width: 15%;
	right: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}
```

Burada, bu konteynerleri ekranın en soluna ve en sağına mutlak konumlandırma ile yerleştirdiniz ve genişlikleri için yüzde kullandınız, böylece küçük mobil ekranlar için ölçeklenebilirler.

✅ Bu kod oldukça tekrarlı, dolayısıyla "DRY" (Don't Repeat Yourself - Kendini Tekrarlama) değil; id'leri stilize etmek için daha iyi bir yol bulabilir misiniz, belki bir id ve bir sınıf ile? İşaretlemeyi değiştirmeniz ve CSS'i yeniden düzenlemeniz gerekir:

```html
<div id="left-container" class="container"></div>
```

### Sınıflar

Yukarıdaki örnekte, ekrandaki iki benzersiz öğeyi stilize ettiniz. Ekrandaki birçok öğeye stil uygulamak istiyorsanız, CSS sınıflarını kullanabilirsiniz. Sol ve sağ konteynerlerdeki bitkileri düzenlemek için bunu yapın.

HTML işaretlemesindeki her bitkinin id'ler ve sınıfların bir kombinasyonuna sahip olduğunu fark edin. Buradaki id'ler, teraryum bitki yerleşimini manipüle etmek için daha sonra ekleyeceğiniz JavaScript tarafından kullanılır. Ancak sınıflar, tüm bitkilere belirli bir stil verir.

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

`style.css` dosyanıza aşağıdakileri ekleyin:

```CSS
.plant-holder {
	position: relative;
	height: 13%;
	left: -10px;
}

.plant {
	position: absolute;
	max-width: 150%;
	max-height: 150%;
	z-index: 2;
}
```

Bu kod parçasında dikkat çeken şey, göreceli ve mutlak konumlandırmanın karışımıdır; bunu bir sonraki bölümde ele alacağız. Yüksekliklerin yüzde ile nasıl ele alındığına bir göz atın:

Bitki tutucunun yüksekliğini %13 olarak ayarladınız, bu, tüm bitkilerin dikey konteynerlerde kaydırma gerektirmeden görüntülenmesini sağlamak için iyi bir sayıdır.

Bitki tutucuyu sola hareket ettirerek bitkilerin konteyner içinde daha ortalanmış görünmesini sağladınız. Görsellerin büyük bir miktarda şeffaf arka planı vardır, bu da onları daha sürüklenebilir hale getirir, bu yüzden ekranda daha iyi oturması için sola itilmesi gerekir.

Ardından, bitkinin kendisine %150 maksimum genişlik verildi. Bu, tarayıcı küçüldükçe küçülmesini sağlar. Tarayıcınızı yeniden boyutlandırmayı deneyin; bitkiler konteynerlerinde kalır ancak küçülerek sığar.

Ayrıca dikkat çeken bir diğer şey, z-index'in kullanımıdır; bu, bir öğenin göreceli yüksekliğini kontrol eder (bitkilerin konteynerin üstünde oturması ve teraryumun içinde görünmesi için).

✅ Neden hem bir bitki tutucu hem de bir bitki CSS seçicisine ihtiyacınız var?

## CSS Konumlandırma

Konum özelliklerini karıştırmak (statik, göreceli, sabit, mutlak ve yapışkan konumlar) biraz karmaşık olabilir, ancak doğru yapıldığında sayfalarınızdaki öğeler üzerinde iyi bir kontrol sağlar.

Mutlak konumlandırılmış öğeler, en yakın konumlandırılmış atalarına göre konumlandırılır ve eğer yoksa, belge gövdesine göre konumlandırılır.

Göreceli konumlandırılmış öğeler, CSS'in yerleştirme talimatlarına göre başlangıç konumundan uzaklaştırılarak konumlandırılır.

Örneğimizde, `plant-holder` mutlak konumlandırılmış bir konteyner içinde konumlandırılmış göreceli bir öğedir. Sonuçta ortaya çıkan davranış, yan çubuk konteynerlerin sola ve sağa sabitlenmesi ve bitki tutucunun iç içe geçerek yan çubuklar içinde ayarlanması, bitkilerin dikey bir sırada yerleştirilmesi için alan sağlamasıdır.

> `plant` öğesinin kendisi de mutlak konumlandırmaya sahiptir, bu da onu sürüklenebilir hale getirmek için gereklidir; bunu bir sonraki derste keşfedeceksiniz.

✅ Yan konteynerlerin ve bitki tutucunun konumlandırma türlerini değiştirmeyi deneyin. Ne oluyor?

## CSS Düzenleri

Şimdi öğrendiklerinizi kullanarak teraryumun kendisini tamamen CSS kullanarak oluşturacaksınız!

İlk olarak, `.terrarium` div çocuklarını CSS kullanarak yuvarlak bir dikdörtgen olarak stilize edin:

```CSS
.jar-walls {
	height: 80%;
	width: 60%;
	background: #d1e1df;
	border-radius: 1rem;
	position: absolute;
	bottom: 0.5%;
	left: 20%;
	opacity: 0.5;
	z-index: 1;
}

.jar-top {
	width: 50%;
	height: 5%;
	background: #d1e1df;
	position: absolute;
	bottom: 80.5%;
	left: 25%;
	opacity: 0.7;
	z-index: 1;
}

.jar-bottom {
	width: 50%;
	height: 1%;
	background: #d1e1df;
	position: absolute;
	bottom: 0%;
	left: 25%;
	opacity: 0.7;
}

.dirt {
	width: 60%;
	height: 5%;
	background: #3a241d;
	position: absolute;
	border-radius: 0 0 1rem 1rem;
	bottom: 1%;
	left: 20%;
	opacity: 0.7;
	z-index: -1;
}
```

Burada yüzde kullanımına dikkat edin. Tarayıcınızı küçülttüğünüzde, kavanozun nasıl ölçeklendiğini görebilirsiniz. Ayrıca kavanoz öğelerinin genişlik ve yükseklik yüzdelerine ve her öğenin merkezde, görünümün altına sabitlenmiş şekilde mutlak olarak konumlandırılmasına dikkat edin.

Ayrıca `rem` kullanıyoruz, bu bir fonta göre uzunluk ölçüsüdür. Bu tür göreceli ölçüm hakkında daha fazla bilgi için [CSS spesifikasyonu](https://www.w3.org/TR/css-values-3/#font-relative-lengths) adresini okuyun.

✅ Kavanoz renklerini ve opaklığını toprakla karşılaştırarak değiştirmeyi deneyin. Ne oluyor? Neden?

---

## 🚀Meydan Okuma

Kavanozun sol alt bölgesine bir 'baloncuk' parlaklığı ekleyerek daha cam gibi görünmesini sağlayın. `.jar-glossy-long` ve `.jar-glossy-short` öğelerini yansıyan bir parlaklık gibi görünmesi için stilize edeceksiniz. İşte nasıl görüneceği:

![tamamlanmış teraryum](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.tr.png)

Ders sonrası testi tamamlamak için şu Learn modülünü inceleyin: [HTML uygulamanızı CSS ile stilize edin](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Ders Sonrası Test

[Ders sonrası test](https://ff-quizzes.netlify.app/web/quiz/18)

## Gözden Geçirme ve Kendi Kendine Çalışma

CSS aldatıcı bir şekilde basit görünebilir, ancak bir uygulamayı tüm tarayıcılar ve ekran boyutları için mükemmel bir şekilde stilize etmeye çalışırken birçok zorlukla karşılaşabilirsiniz. CSS-Grid ve Flexbox, işi biraz daha yapılandırılmış ve güvenilir hale getirmek için geliştirilmiş araçlardır. Bu araçlar hakkında bilgi edinmek için [Flexbox Froggy](https://flexboxfroggy.com/) ve [Grid Garden](https://codepip.com/games/grid-garden/) oynayın.

## Ödev

[CSS Yeniden Düzenleme](assignment.md)

---

**Feragatname**:  
Bu belge, [Co-op Translator](https://github.com/Azure/co-op-translator) adlı yapay zeka çeviri hizmeti kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlama veya yanlış yorumlamalardan sorumlu değiliz.