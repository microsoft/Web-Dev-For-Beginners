<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7587943d38d095de8613e1b508609f5",
  "translation_date": "2025-08-29T00:23:20+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "tr"
}
-->
# Tarayıcı Eklentisi Projesi Bölüm 2: Bir API Çağırma, Yerel Depolama Kullanma

## Ders Öncesi Test

[Ders öncesi test](https://ff-quizzes.netlify.app/web/quiz/25)

### Giriş

Bu derste, tarayıcı eklentinizin formunu kullanarak bir API çağıracak ve sonuçları tarayıcı eklentinizde görüntüleyeceksiniz. Ayrıca, gelecekteki referanslar ve kullanım için verileri tarayıcınızın yerel deposunda nasıl saklayabileceğinizi öğreneceksiniz.

✅ Kodunuzu nereye yerleştireceğinizi öğrenmek için ilgili dosyalardaki numaralandırılmış bölümleri takip edin.

### Eklentide manipüle edilecek öğeleri ayarlayın:

Bu aşamaya kadar, tarayıcı eklentiniz için form ve sonuç `<div>` HTML'sini oluşturmuş olmalısınız. Bundan sonra, `/src/index.js` dosyasında çalışmanız ve eklentinizi adım adım oluşturmanız gerekecek. Projenizi kurma ve derleme süreci hakkında bilgi almak için [önceki derse](../1-about-browsers/README.md) başvurabilirsiniz.

`index.js` dosyanızda çalışarak, çeşitli alanlarla ilişkili değerleri tutmak için bazı `const` değişkenleri oluşturarak başlayın:

```JavaScript
// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// results
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');
```

Bu alanların tümü, önceki derste HTML'de ayarladığınız CSS sınıflarıyla referans alınır.

### Dinleyiciler ekleyin

Sonraki adımda, formu ve formu sıfırlayan temizleme düğmesini dinleyen olay dinleyicileri ekleyin. Böylece bir kullanıcı formu gönderdiğinde veya sıfırlama düğmesine tıkladığında bir şeyler olur. Ayrıca dosyanın altına uygulamayı başlatma çağrısını ekleyin:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Bir gönderme veya tıklama olayını dinlemek için kullanılan kısayola dikkat edin ve olayın handleSubmit veya reset fonksiyonlarına nasıl iletildiğini inceleyin. Bu kısayolun daha uzun bir formatını yazabilir misiniz? Hangisini tercih edersiniz?

### init() ve reset() fonksiyonlarını oluşturun:

Şimdi, eklentiyi başlatan init() fonksiyonunu oluşturacaksınız:

```JavaScript
function init() {
	//if anything is in localStorage, pick it up
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//set icon to be generic green
	//todo

	if (storedApiKey === null || storedRegion === null) {
		//if we don't have the keys, show the form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
        //if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//clear local storage for region only
	localStorage.removeItem('regionName');
	init();
}

```

Bu fonksiyonda ilginç bir mantık var. Okuyarak neler olduğunu görebiliyor musunuz?

- Kullanıcının bir APIKey ve bölge kodunu yerel depolamada saklayıp saklamadığını kontrol etmek için iki `const` ayarlanır.
- Eğer bunlardan biri null ise, formu 'block' olarak görüntüleyerek gösterin.
- Sonuçları, yükleme durumunu ve clearBtn'i gizleyin ve hata metnini boş bir dizeye ayarlayın.
- Eğer bir anahtar ve bölge varsa, şu rutini başlatın:
  - API'yi çağırarak karbon kullanım verilerini alın.
  - Sonuçlar alanını gizleyin.
  - Formu gizleyin.
  - Sıfırlama düğmesini gösterin.

Devam etmeden önce, tarayıcılarda mevcut olan çok önemli bir kavramı öğrenmek faydalı olacaktır: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage, tarayıcıda `anahtar-değer` çifti olarak dizeleri saklamak için kullanışlı bir yöntemdir. Bu tür bir web depolama, tarayıcıdaki verileri yönetmek için JavaScript tarafından manipüle edilebilir. LocalStorage süresiz olarak saklanırken, başka bir tür web depolama olan SessionStorage, tarayıcı kapatıldığında temizlenir. Depolama türlerinin kullanımına göre avantajları ve dezavantajları vardır.

> Not - tarayıcı eklentinizin kendi yerel deposu vardır; ana tarayıcı penceresi farklı bir örnektir ve ayrı davranır.

APIKey'inizi bir dize değeri olarak ayarlayın ve bunun Edge'de nasıl ayarlandığını görmek için bir web sayfasını "inceleyerek" (tarayıcıya sağ tıklayıp inceleyebilirsiniz) ve Uygulamalar sekmesine giderek depolamayı görebilirsiniz.

![Yerel depolama paneli](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.tr.png)

✅ Yerel Depolama'da hangi durumlarda veri saklamak istemeyeceğinizi düşünün. Genel olarak, API Anahtarlarını Yerel Depolama'da saklamak kötü bir fikirdir! Nedenini görebiliyor musunuz? Bizim durumumuzda, uygulamamız tamamen öğrenme amaçlı olduğu ve bir uygulama mağazasında dağıtılmayacağı için bu yöntemi kullanacağız.

Yerel Depolama'yı manipüle etmek için Web API'sini `getItem()`, `setItem()` veya `removeItem()` kullanarak kullandığınızı unutmayın. Bu yöntemler tarayıcılar arasında geniş bir destek görmektedir.

`displayCarbonUsage()` fonksiyonunu oluşturmadan önce, ilk form gönderimini işlemek için işlevselliği oluşturalım.

### Form gönderimini işleyin

Bir `(e)` olay argümanını kabul eden `handleSubmit` adlı bir fonksiyon oluşturun. Olayın yayılmasını durdurun (bu durumda, tarayıcının yenilenmesini durdurmak istiyoruz) ve `setUpUser` adlı yeni bir fonksiyonu çağırarak `apiKey.value` ve `region.value` argümanlarını iletin. Bu şekilde, uygun alanlar doldurulduğunda ilk form aracılığıyla getirilen iki değeri kullanırsınız.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ Hafızanızı tazeleyin - Son derste ayarladığınız HTML, `const` ile dosyanın üst kısmında yakalanan iki giriş alanına sahiptir ve her ikisi de `required` olarak ayarlanmıştır, böylece tarayıcı kullanıcıların null değerler girmesini engeller.

### Kullanıcıyı ayarlayın

`setUpUser` fonksiyonuna geçerek, burada apiKey ve regionName için yerel depolama değerlerini ayarlarsınız. Yeni bir fonksiyon ekleyin:

```JavaScript
function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//make initial call
	displayCarbonUsage(apiKey, regionName);
}
```

Bu fonksiyon, API çağrılırken bir yükleme mesajı gösterir. Bu noktada, bu tarayıcı eklentisinin en önemli fonksiyonunu oluşturmaya geldiniz!

### Karbon Kullanımını Göster

Sonunda API'yi sorgulama zamanı geldi!

Daha ileri gitmeden önce, API'leri tartışmalıyız. API'ler veya [Uygulama Programlama Arayüzleri](https://www.webopedia.com/TERM/A/API.html), bir web geliştiricisinin araç kutusunun kritik bir unsurudur. Programların birbirleriyle etkileşimde bulunması ve arayüz oluşturması için standart yollar sağlarlar. Örneğin, bir veritabanını sorgulaması gereken bir web sitesi oluşturuyorsanız, birisi sizin için bir API oluşturmuş olabilir. Birçok API türü olmasına rağmen, en popüler olanlardan biri [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/)’dir.

✅ 'REST' terimi 'Temsili Durum Transferi' anlamına gelir ve veri almak için çeşitli şekilde yapılandırılmış URL'ler kullanmayı içerir. Geliştiriciler için mevcut olan çeşitli API türleri hakkında biraz araştırma yapın. Hangi format size daha çekici geliyor?

Bu fonksiyonla ilgili önemli noktalar var. İlk olarak, [`async` anahtar kelimesine](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) dikkat edin. Fonksiyonlarınızı asenkron çalışacak şekilde yazmak, bir eylemin (örneğin, verilerin döndürülmesi) tamamlanmasını beklemeden devam etmelerini sağlar.

`async` hakkında hızlı bir video:

[![Async ve Await ile vaatleri yönetme](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async ve Await ile vaatleri yönetme")

> 🎥 Yukarıdaki görüntüye tıklayarak async/await hakkında bir video izleyin.

C02Signal API'sini sorgulamak için yeni bir fonksiyon oluşturun:

```JavaScript
import axios from '../node_modules/axios';

async function displayCarbonUsage(apiKey, region) {
	try {
		await axios
			.get('https://api.co2signal.com/v1/latest', {
				params: {
					countryCode: region,
				},
				headers: {
					'auth-token': apiKey,
				},
			})
			.then((response) => {
				let CO2 = Math.floor(response.data.data.carbonIntensity);

				//calculateColor(CO2);

				loading.style.display = 'none';
				form.style.display = 'none';
				myregion.textContent = region;
				usage.textContent =
					Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
				fossilfuel.textContent =
					response.data.data.fossilFuelPercentage.toFixed(2) +
					'% (percentage of fossil fuels used to generate electricity)';
				results.style.display = 'block';
			});
	} catch (error) {
		console.log(error);
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we have no data for the region you have requested.';
	}
}
```

Bu büyük bir fonksiyon. Burada neler oluyor?

- En iyi uygulamaları takip ederek, bu fonksiyonun asenkron davranmasını sağlamak için bir `async` anahtar kelimesi kullanıyorsunuz. Fonksiyon, API veri döndürdüğünde bir vaat döndüreceği için bir `try/catch` bloğu içerir. API'nin yanıt verme hızını kontrol edemediğinizden (hiç yanıt vermeyebilir!), bu belirsizliği asenkron olarak çağırarak ele almanız gerekir.
- co2signal API'sini sorgulayarak bölgenizin verilerini alıyorsunuz ve API Anahtarınızı kullanıyorsunuz. Bu anahtarı kullanmak için, başlık parametrelerinizde bir tür kimlik doğrulama yapmanız gerekiyor.
- API yanıt verdiğinde, yanıt verilerinin çeşitli öğelerini ekranınızda bu verileri göstermek için ayarladığınız bölümlere atıyorsunuz.
- Bir hata varsa veya sonuç yoksa, bir hata mesajı gösteriyorsunuz.

✅ Asenkron programlama desenlerini kullanmak, araç kutunuzda çok faydalı bir başka araçtır. Bu tür kodu yapılandırmanın [çeşitli yolları](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) hakkında bilgi edinin.

Tebrikler! Eklentinizi oluşturursanız (`npm run build`) ve uzantılar panelinizde yenilerseniz, çalışan bir eklentiniz var! Çalışmayan tek şey simge ve bunu bir sonraki derste düzelteceksiniz.

---

## 🚀 Meydan Okuma

Bu derslerde şimdiye kadar birkaç API türünü tartıştık. Bir web API'si seçin ve sunduklarını derinlemesine araştırın. Örneğin, tarayıcılarda mevcut olan [HTML Sürükle ve Bırak API'sine](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) bir göz atın. Sizce harika bir API'yi ne oluşturur?

## Ders Sonrası Test

[Ders sonrası test](https://ff-quizzes.netlify.app/web/quiz/26)

## Gözden Geçirme ve Kendi Kendine Çalışma

Bu derste Yerel Depolama ve API'ler hakkında bilgi edindiniz, her ikisi de profesyonel bir web geliştirici için çok kullanışlıdır. Bu iki şeyin birlikte nasıl çalıştığını düşünebilir misiniz? Bir API tarafından kullanılacak öğeleri saklayacak bir web sitesini nasıl tasarlayacağınızı düşünün.

## Ödev

[Bir API Benimseyin](assignment.md)

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.