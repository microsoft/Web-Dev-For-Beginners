<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "30f8903a1f290e3d438dc2c70fe60259",
  "translation_date": "2025-08-25T21:21:22+00:00",
  "source_file": "3-terrarium/3-intro-to-DOM-and-closures/README.md",
  "language_code": "tr"
}
-->
# Teraryum Projesi Bölüm 3: DOM Manipülasyonu ve Bir Closure

![DOM ve bir closure](../../../../translated_images/webdev101-js.10280393044d7eaaec7e847574946add7ddae6be2b2194567d848b61d849334a.tr.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ders Öncesi Test

[Ders öncesi testi](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/19)

### Giriş

DOM veya "Document Object Model" manipülasyonu, web geliştirme sürecinin önemli bir parçasıdır. [MDN](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction)'ye göre, "Document Object Model (DOM), web üzerindeki bir belgenin yapısını ve içeriğini oluşturan nesnelerin veri temsili şeklidir." Web'de DOM manipülasyonu ile ilgili zorluklar, genellikle JavaScript çerçevelerinin kullanılmasının temel nedenlerinden biri olmuştur. Ancak biz, vanilla JavaScript kullanarak bu işi kendimiz halledeceğiz!

Ayrıca, bu derste bir [JavaScript closure](https://developer.mozilla.org/docs/Web/JavaScript/Closures) fikrini tanıtacağız. Closure, bir fonksiyonun başka bir fonksiyon tarafından kapsanmasıdır ve bu sayede içteki fonksiyon, dıştaki fonksiyonun kapsamına erişebilir.

> JavaScript closure'ları geniş ve karmaşık bir konudur. Bu derste, teraryum kodunda bir closure'ın temel fikrine değineceğiz: bir iç fonksiyon ve bir dış fonksiyon, iç fonksiyonun dış fonksiyonun kapsamına erişmesine izin verecek şekilde yapılandırılmıştır. Bu konunun nasıl çalıştığı hakkında daha fazla bilgi için [kapsamlı dokümantasyonu](https://developer.mozilla.org/docs/Web/JavaScript/Closures) ziyaret edebilirsiniz.

DOM'u manipüle etmek için bir closure kullanacağız.

DOM'u, bir web sayfası belgesinin manipüle edilebileceği tüm yolları temsil eden bir ağaç olarak düşünebilirsiniz. Programcıların tercih ettikleri programlama dillerini kullanarak DOM'a erişip düzenleme, değiştirme, yeniden düzenleme ve yönetme işlemleri yapabilmeleri için çeşitli API'ler (Uygulama Programlama Arayüzleri) yazılmıştır.

![DOM ağaç temsili](../../../../translated_images/dom-tree.7daf0e763cbbba9273f9a66fe04c98276d7d23932309b195cb273a9cf1819b42.tr.png)

> DOM'un ve onu referans alan HTML işaretlemesinin bir temsili. Kaynak: [Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

Bu derste, kullanıcıların sayfadaki bitkileri manipüle etmesine olanak tanıyan JavaScript'i oluşturarak interaktif teraryum projemizi tamamlayacağız.

### Önkoşul

Teraryumunuz için HTML ve CSS'in hazır olması gerekiyor. Bu dersin sonunda, bitkileri sürükleyerek teraryuma ekleyip çıkarabileceksiniz.

### Görev

Teraryum klasörünüzde `script.js` adında yeni bir dosya oluşturun. Bu dosyayı `<head>` bölümüne şu şekilde ekleyin:

```html
	<script src="./script.js" defer></script>
```

> Not: Bir JavaScript dosyasını HTML dosyasına dışarıdan eklerken `defer` kullanın, böylece JavaScript, HTML dosyası tamamen yüklendikten sonra çalışır. Alternatif olarak, `async` özelliğini kullanabilirsiniz; bu, script'in HTML dosyası ayrıştırılırken çalışmasına izin verir. Ancak bizim durumumuzda, sürükleme işlemi başlamadan önce HTML öğelerinin tamamen hazır olması önemlidir.
---

## DOM Öğeleri

İlk olarak, DOM'da manipüle etmek istediğiniz öğelere referanslar oluşturmanız gerekiyor. Bizim durumumuzda, bunlar yan çubuklarda bekleyen 14 bitkidir.

### Görev

```html
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));
```

Burada ne oluyor? Belgeyi referans alıyor ve DOM'un içinde belirli bir Id'ye sahip bir öğe arıyorsunuz. HTML dersinin ilk bölümünde, her bir bitki görseline bireysel Id'ler verdiğinizi hatırlıyor musunuz (`id="plant1"`) ? Şimdi bu çabayı kullanacaksınız. Her bir öğeyi tanımladıktan sonra, bu öğeyi birazdan oluşturacağınız `dragElement` adlı bir fonksiyona aktarıyorsunuz. Böylece, HTML'deki öğe artık sürüklenebilir hale geliyor (veya birazdan gelecek).

✅ Neden öğelere Id ile referans veriyoruz? Neden CSS sınıfı ile değil? Bu sorunun cevabını CSS dersine geri dönerek bulabilirsiniz.

---

## Closure

Şimdi, bir dış fonksiyonun bir veya daha fazla iç fonksiyonu kapsadığı `dragElement` closure'ını oluşturmaya hazırsınız. 

Closure'lar, bir veya daha fazla fonksiyonun dış fonksiyonun kapsamına erişmesi gerektiğinde kullanışlıdır. İşte bir örnek:

```javascript
function displayCandy(){
	let candy = ['jellybeans'];
	function addCandy(candyType) {
		candy.push(candyType)
	}
	addCandy('gumdrops');
}
displayCandy();
console.log(candy)
```

Bu örnekte, `displayCandy` fonksiyonu, zaten fonksiyon içinde var olan bir diziye yeni bir şeker türü ekleyen bir fonksiyonu kapsar. Bu kodu çalıştırırsanız, `candy` dizisi tanımsız olur çünkü bu dizi bir yerel değişkendir (closure'a özeldir). 

✅ `candy` dizisini nasıl erişilebilir hale getirebilirsiniz? Diziyi closure'ın dışına taşıyın. Bu şekilde, dizi global hale gelir ve closure'ın yerel kapsamıyla sınırlı kalmaz.

### Görev

`script.js` dosyasındaki öğe tanımlamalarının altına bir fonksiyon oluşturun:

```javascript
function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;
}
```

`dragElement`, `terrariumElement` nesnesini script'in başındaki tanımlamalardan alır. Daha sonra, fonksiyona geçirilen nesne için bazı yerel pozisyonları `0` olarak ayarlarsınız. Bunlar, sürükleme ve bırakma işlevselliği eklerken her bir öğe için manipüle edilecek yerel değişkenlerdir. Teraryum, bu sürüklenen öğelerle doldurulacak, bu nedenle uygulamanın bu öğelerin nereye yerleştirildiğini takip etmesi gerekir.

Ayrıca, bu fonksiyona geçirilen `terrariumElement`, bir `pointerdown` olayı atanır. Bu olay, [web API'lerinin](https://developer.mozilla.org/docs/Web/API) bir parçasıdır ve DOM yönetimine yardımcı olmak için tasarlanmıştır. `onpointerdown`, bir düğmeye basıldığında veya bizim durumumuzda, sürüklenebilir bir öğeye dokunulduğunda tetiklenir. Bu olay işleyici, birkaç istisna dışında hem [web hem de mobil tarayıcılarda](https://caniuse.com/?search=onpointerdown) çalışır.

✅ [onclick olay işleyicisinin](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) tarayıcılar arası çok daha fazla desteği var; neden burada kullanmıyorsunuz? Burada oluşturmak istediğiniz ekran etkileşiminin tam türünü düşünün.

---

## Pointerdrag Fonksiyonu

`terrariumElement`, sürüklenmeye hazırdır; `onpointerdown` olayı tetiklendiğinde, `pointerDrag` fonksiyonu çağrılır. Bu satırın hemen altına bu fonksiyonu ekleyin: `terrariumElement.onpointerdown = pointerDrag;`:

### Görev 

```javascript
function pointerDrag(e) {
	e.preventDefault();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;
}
```

Birçok şey olur. İlk olarak, `e.preventDefault();` kullanarak, pointerdown olayında normalde gerçekleşen varsayılan olayları engellersiniz. Bu şekilde, arayüzün davranışı üzerinde daha fazla kontrol sahibi olursunuz.

> Script dosyasını tamamen oluşturduğunuzda bu satıra geri dönün ve `e.preventDefault()` olmadan deneyin - ne olur?

İkinci olarak, `index.html` dosyasını bir tarayıcı penceresinde açın ve arayüzü inceleyin. Bir bitkiye tıkladığınızda, 'e' olayının nasıl yakalandığını görebilirsiniz. Olayın içine dalarak, bir pointerdown olayıyla ne kadar bilgi toplandığını inceleyin!

Son olarak, yerel değişkenler `pos3` ve `pos4`'ün `e.clientX` değerine nasıl ayarlandığına dikkat edin. `e` değerlerini inceleme panelinde bulabilirsiniz. Bu değerler, bitkiye tıkladığınız veya dokunduğunuz andaki x ve y koordinatlarını yakalar. Bitkilerin tıklanıp sürüklenmesi sırasında ince ayar yapmak için koordinatlarını takip etmeniz gerekir.

✅ Bu uygulamanın neden bir closure ile oluşturulduğu daha net hale geliyor mu? Eğer closure olmasaydı, 14 sürüklenebilir bitkinin kapsamını nasıl koruyabilirdiniz?

İlk fonksiyonu şu iki pointer olay manipülasyonunu ekleyerek tamamlayın:

```html
document.onpointermove = elementDrag;
document.onpointerup = stopElementDrag;
```
Burada, bitkinin pointer ile birlikte sürüklenmesini ve bitkiyi seçmeyi bıraktığınızda sürükleme hareketinin durmasını istiyorsunuz. `onpointermove` ve `onpointerup`, `onpointerdown` ile aynı API'nin bir parçasıdır. Arayüz şu anda hata verebilir çünkü `elementDrag` ve `stopElementDrag` fonksiyonlarını henüz tanımlamadınız, bu yüzden şimdi onları oluşturun.

## ElementDrag ve StopElementDrag Fonksiyonları

Closure'ınızı, bir bitkiyi sürüklediğinizde ve sürüklemeyi bıraktığınızda ne olacağını yöneten iki dahili fonksiyon ekleyerek tamamlayacaksınız. İstediğiniz davranış, herhangi bir bitkiyi istediğiniz zaman sürükleyebilmeniz ve ekranın herhangi bir yerine yerleştirebilmenizdir. Bu arayüz oldukça esnektir (örneğin, bir bırakma alanı yoktur) ve bitkileri ekleyip çıkararak teraryumunuzu istediğiniz gibi tasarlamanıza olanak tanır.

### Görev

`pointerDrag` fonksiyonunun kapanış süslü parantezinin hemen altına `elementDrag` fonksiyonunu ekleyin:

```javascript
function elementDrag(e) {
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	console.log(pos1, pos2, pos3, pos4);
	terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
	terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
}
```
Bu fonksiyonda, dış fonksiyonda yerel değişkenler olarak ayarladığınız pozisyonları (1-4) oldukça fazla düzenliyorsunuz. Burada ne oluyor?

Sürükleme sırasında, `pos1`'i `pos3` (daha önce `e.clientX` olarak ayarladığınız) eksi mevcut `e.clientX` değerine eşit yaparak yeniden atarsınız. Benzer bir işlemi `pos2` için yaparsınız. Daha sonra, `pos3` ve `pos4`'ü öğenin yeni X ve Y koordinatlarına yeniden ayarlarsınız. Bu değişiklikleri sürüklerken konsolda izleyebilirsiniz. Daha sonra, bitkinin css stilini, yeni pozisyonlarına göre üst ve sol X ve Y koordinatlarını ayarlayarak manipüle edersiniz.

> `offsetTop` ve `offsetLeft`, bir öğenin pozisyonunu, ebeveyninin pozisyonuna göre ayarlayan CSS özellikleridir; ebeveyni, `static` olarak konumlandırılmamış herhangi bir öğe olabilir.

Bu pozisyonların yeniden hesaplanması, teraryumun ve bitkilerinin davranışını ince ayar yapmanıza olanak tanır.

### Görev 

Arayüzü tamamlamak için son görev, `stopElementDrag` fonksiyonunu `elementDrag` fonksiyonunun kapanış süslü parantezinin altına eklemektir:

```javascript
function stopElementDrag() {
	document.onpointerup = null;
	document.onpointermove = null;
}
```

Bu küçük fonksiyon, `onpointerup` ve `onpointermove` olaylarını sıfırlar, böylece bitkinizin hareketini yeniden başlatabilir veya yeni bir bitkiyi sürüklemeye başlayabilirsiniz.

✅ Bu olayları null olarak ayarlamazsanız ne olur?

Artık projenizi tamamladınız!

🥇Tebrikler! Güzel teraryumunuzu tamamladınız. ![tamamlanmış teraryum](../../../../translated_images/terrarium-final.0920f16e87c13a84cd2b553a5af9a3ad1cffbd41fbf8ce715d9e9c43809a5e2c.tr.png)

---

## 🚀Meydan Okuma

Closure'ınıza bitkilerle ilgili başka bir şey yapmak için yeni bir olay işleyici ekleyin; örneğin, bir bitkiye çift tıklayarak onu öne getirin. Yaratıcı olun!

## Ders Sonrası Test

[Ders sonrası testi](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/20)

## İnceleme ve Kendi Kendine Çalışma

Ekranda öğeleri sürüklemek basit görünse de, bunu yapmanın birçok yolu ve istediğiniz etkiye bağlı olarak birçok tuzak vardır. Aslında, üzerinde çalışabileceğiniz bir [sürükle ve bırak API'si](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) vardır. Bu modülde kullanmadık çünkü istediğimiz etki biraz farklıydı, ancak bu API'yi kendi projenizde deneyin ve neler başarabileceğinizi görün.

Pointer olayları hakkında daha fazla bilgi için [W3C belgelerine](https://www.w3.org/TR/pointerevents1/) ve [MDN web belgelerine](https://developer.mozilla.org/docs/Web/API/Pointer_events) göz atın.

Her zaman tarayıcı yeteneklerini [CanIUse.com](https://caniuse.com/) ile kontrol edin.

## Ödev

[DOM ile biraz daha çalışın](assignment.md)

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.