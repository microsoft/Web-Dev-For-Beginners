<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8c8cd4af6086cc1d47e1d43aa4983d20",
  "translation_date": "2025-10-23T00:10:04+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "tr"
}
-->
# Tarayıcı Uzantısı Projesi Bölüm 2: Bir API Çağırma, Yerel Depolama Kullanma

## Ders Öncesi Test

[Ders öncesi test](https://ff-quizzes.netlify.app/web/quiz/25)

## Giriş

Hatırlıyor musunuz, bir tarayıcı uzantısı oluşturmaya başlamıştınız? Şu anda güzel bir formunuz var, ancak bu form oldukça statik. Bugün onu gerçek verilerle bağlayarak ve hafıza ekleyerek canlandıracağız.

Apollo görev kontrol bilgisayarlarını düşünün - sadece sabit bilgileri göstermiyorlardı. Sürekli olarak uzay araçlarıyla iletişim kuruyor, telemetri verileriyle güncelleniyor ve kritik görev parametrelerini hatırlıyorlardı. Bugün inşa edeceğimiz dinamik davranış tam olarak bu. Uzantınız internete bağlanacak, gerçek çevresel verileri alacak ve ayarlarınızı bir dahaki sefere hatırlayacak.

API entegrasyonu karmaşık görünebilir, ancak aslında kodunuza diğer hizmetlerle nasıl iletişim kuracağını öğretmekten ibarettir. İster hava durumu verilerini, sosyal medya akışlarını, ister bugün yapacağımız gibi karbon ayak izi bilgilerini alıyor olun, hepsi bu dijital bağlantıları kurmakla ilgilidir. Ayrıca tarayıcıların bilgiyi nasıl kalıcı hale getirebileceğini keşfedeceğiz - tıpkı kütüphanelerin kitapların nerede olduğunu hatırlamak için kart kataloglarını kullanması gibi.

Bu dersin sonunda, gerçek verileri alan, kullanıcı tercihlerini saklayan ve sorunsuz bir deneyim sunan bir tarayıcı uzantısına sahip olacaksınız. Hadi başlayalım!

✅ Kodunuzu nereye yerleştireceğinizi bilmek için ilgili dosyalardaki numaralandırılmış bölümleri takip edin.

## Uzantıda manipüle edilecek öğeleri ayarlayın

JavaScript'iniz arayüzü manipüle edebilmeden önce, belirli HTML öğelerine referanslar alması gerekir. Bunu, Galileo'nun Jüpiter'in uydularını incelemeden önce Jüpiter'i bulup odaklanması gerektiği bir teleskop gibi düşünün.

`index.js` dosyanızda, her önemli form öğesine referansları yakalayan `const` değişkenler oluşturacağız. Bu, bilim insanlarının ekipmanlarını etiketlemesine benzer - her seferinde tüm laboratuvarı aramak yerine, doğrudan ihtiyaç duydukları şeylere erişebilirler.

```javascript
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

**Bu kodun yaptığı şeyler:**
- **Form öğelerini yakalar**: `document.querySelector()` ile CSS sınıf seçicilerini kullanarak
- **Referanslar oluşturur**: Bölge adı ve API anahtarı için giriş alanlarına
- **Bağlantılar kurar**: Karbon kullanım verileri için sonuç görüntüleme öğelerine
- **Erişim sağlar**: Yükleme göstergeleri ve hata mesajları gibi UI öğelerine
- **Her öğe referansını** kodunuzda kolayca yeniden kullanmak için bir `const` değişkeninde saklar

## Olay dinleyicileri ekleyin

Şimdi uzantınızın kullanıcı eylemlerine yanıt vermesini sağlayacağız. Olay dinleyiciler, kodunuzun kullanıcı etkileşimlerini izleme yöntemidir. Bunları, erken telefon santrallerindeki operatörler gibi düşünün - gelen çağrıları dinler ve birisi bağlantı kurmak istediğinde doğru devreleri bağlarlardı.

```javascript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

**Bu kavramları anlamak:**
- **Form'a bir gönderme dinleyicisi ekler**: Kullanıcılar Enter tuşuna bastığında veya gönder düğmesine tıkladığında tetiklenir
- **Temizleme düğmesine bir tıklama dinleyicisi bağlar**: Formu sıfırlamak için
- **Olay nesnesini `(e)` işleyici fonksiyonlara iletir**: Ek kontrol için
- **`init()` fonksiyonunu hemen çağırır**: Uzantınızın başlangıç durumunu ayarlamak için

✅ Burada kullanılan kısa ok fonksiyon sözdizimine dikkat edin. Bu modern JavaScript yaklaşımı, geleneksel fonksiyon ifadelerinden daha temizdir, ancak her ikisi de eşit derecede iyi çalışır!

## Başlatma ve sıfırlama fonksiyonlarını oluşturun

Uzantınız için başlatma mantığını oluşturalım. `init()` fonksiyonu, bir geminin navigasyon sistemi gibi enstrümanlarını kontrol eder - mevcut durumu belirler ve arayüzü buna göre ayarlar. Birinin uzantınızı daha önce kullanıp kullanmadığını kontrol eder ve önceki ayarlarını yükler.

`reset()` fonksiyonu, kullanıcılara temiz bir başlangıç sağlar - bilim insanlarının deneyler arasında enstrümanlarını sıfırlayarak temiz veri elde etmeleri gibi.

```javascript
function init() {
	// Check if user has previously saved API credentials
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	// Set extension icon to generic green (placeholder for future lesson)
	// TODO: Implement icon update in next lesson

	if (storedApiKey === null || storedRegion === null) {
		// First-time user: show the setup form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
		// Returning user: load their saved data automatically
		displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
}

function reset(e) {
	e.preventDefault();
	// Clear stored region to allow user to choose a new location
	localStorage.removeItem('regionName');
	// Restart the initialization process
	init();
}
```

**Burada olanları parçalayarak:**
- **Tarayıcının yerel depolamasından** kaydedilmiş API anahtarını ve bölgeyi alır
- **Kontrol eder**: Bu bir ilk kez kullanıcı mı (kaydedilmiş kimlik bilgisi yok) yoksa geri dönen bir kullanıcı mı
- **Yeni kullanıcılar için** kurulum formunu gösterir ve diğer arayüz öğelerini gizler
- **Kaydedilmiş verileri otomatik olarak yükler**: Geri dönen kullanıcılar için ve sıfırlama seçeneğini gösterir
- **Kullanıcı arayüzü durumunu yönetir**: Mevcut verilere göre

**Yerel Depolama hakkında temel bilgiler:**
- **Verileri** tarayıcı oturumları arasında kalıcı hale getirir (oturum depolamanın aksine)
- **Verileri** anahtar-değer çiftleri olarak `getItem()` ve `setItem()` kullanarak saklar
- **Veri yoksa** belirli bir anahtar için `null` döner
- **Kullanıcı tercihlerini ve ayarlarını hatırlamak için** basit bir yol sağlar

> 💡 **Tarayıcı Depolamasını Anlamak**: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage), uzantınıza kalıcı bir hafıza vermek gibidir. Antik İskenderiye Kütüphanesi'nin parşömenleri sakladığı gibi - bilgi, bilim insanları ayrılıp geri döndüğünde bile erişilebilir kalır.
>
> **Ana özellikler:**
> - **Verileri korur**: Tarayıcıyı kapattıktan sonra bile
> - **Bilgisayar yeniden başlatmalarında ve tarayıcı çöküşlerinde** hayatta kalır
> - **Kullanıcı tercihleri için** önemli bir depolama alanı sağlar
> - **Ağ gecikmeleri olmadan** anında erişim sunar

> **Önemli Not**: Tarayıcı uzantınızın, normal web sayfalarından ayrı olan kendi izole edilmiş yerel depolaması vardır. Bu, güvenlik sağlar ve diğer web siteleriyle çakışmaları önler.

Kaydedilen verilerinizi görmek için tarayıcı Geliştirici Araçlarını (F12) açabilir, **Uygulama** sekmesine gidebilir ve **Yerel Depolama** bölümünü genişletebilirsiniz.

![Yerel depolama bölmesi](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.tr.png)

> ⚠️ **Güvenlik Düşüncesi**: Üretim uygulamalarında, API anahtarlarını Yerel Depolamada saklamak güvenlik riskleri taşır çünkü JavaScript bu verilere erişebilir. Eğitim amaçları için bu yaklaşım uygundur, ancak gerçek uygulamalar hassas kimlik bilgileri için güvenli sunucu tarafı depolama kullanmalıdır.

## Form gönderimini işleme

Şimdi birisi formunuzu gönderdiğinde ne olacağını ele alacağız. Varsayılan olarak, tarayıcılar form gönderildiğinde sayfayı yeniden yükler, ancak bu davranışı kesintiye uğratarak daha sorunsuz bir deneyim oluşturacağız.

Bu yaklaşım, görev kontrolünün uzay aracı iletişimlerini nasıl ele aldığına benzer - her iletim için tüm sistemi sıfırlamak yerine, sürekli operasyonu sürdürürken yeni bilgileri işlerler.

Form gönderim olayını yakalayan ve kullanıcının girişini çıkaran bir fonksiyon oluşturun:

```javascript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

**Yukarıdaki kodda:**
- **Varsayılan form gönderim davranışını engeller**: Sayfanın yenilenmesini önlemek için
- **Kullanıcı giriş değerlerini çıkarır**: API anahtarı ve bölge alanlarından
- **Form verilerini `setUpUser()` fonksiyonuna iletir**: İşleme için
- **Tek sayfa uygulama davranışını korur**: Sayfa yenilemelerinden kaçınarak

✅ HTML form alanlarınız `required` özelliğini içerdiğinden, bu fonksiyon çalışmadan önce tarayıcı kullanıcıların hem API anahtarını hem de bölgeyi sağlamasını otomatik olarak doğrular.

## Kullanıcı tercihlerini ayarlayın

`setUpUser` fonksiyonu, kullanıcının kimlik bilgilerini kaydetmek ve ilk API çağrısını başlatmaktan sorumludur. Bu, kurulumdan sonuçların görüntülenmesine sorunsuz bir geçiş sağlar.

```javascript
function setUpUser(apiKey, regionName) {
	// Save user credentials for future sessions
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	
	// Update UI to show loading state
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	
	// Fetch carbon usage data with user's credentials
	displayCarbonUsage(apiKey, regionName);
}
```

**Adım adım burada olanlar:**
- **API anahtarını ve bölge adını yerel depolamaya kaydeder**: Gelecekteki kullanım için
- **Yükleme göstergesini gösterir**: Kullanıcılara verilerin alındığını bildirmek için
- **Önceki hata mesajlarını temizler**: Görüntüden
- **Temizleme düğmesini gösterir**: Kullanıcıların ayarlarını daha sonra sıfırlaması için
- **API çağrısını başlatır**: Gerçek karbon kullanım verilerini almak için

Bu fonksiyon, hem veri kalıcılığını hem de kullanıcı arayüzü güncellemelerini bir arada yöneterek sorunsuz bir kullanıcı deneyimi oluşturur.

## Karbon kullanım verilerini görüntüleyin

Şimdi uzantınızı API'ler aracılığıyla harici veri kaynaklarına bağlayacağız. Bu, uzantınızı bağımsız bir araçtan, internet üzerinden gerçek zamanlı bilgilere erişebilen bir şeye dönüştürür.

**API'leri Anlamak**

[API'ler](https://www.webopedia.com/TERM/A/API.html), farklı uygulamaların birbirleriyle iletişim kurma yöntemidir. Bunları, 19. yüzyılda uzak şehirleri birbirine bağlayan telgraf sistemi gibi düşünün - operatörler uzak istasyonlara talepler gönderir ve istenen bilgilerle yanıt alırlardı. Sosyal medyayı kontrol ettiğinizde, bir sesli asistana soru sorduğunuzda veya bir teslimat uygulaması kullandığınızda, API'ler bu veri alışverişlerini kolaylaştırır.

**REST API'ler hakkında temel bilgiler:**
- **REST**, 'Temsili Durum Transferi' anlamına gelir
- **Standart HTTP yöntemlerini kullanır**: (GET, POST, PUT, DELETE) veriyle etkileşim için
- **Verileri tahmin edilebilir formatlarda döndürür**: Genellikle JSON
- **Tutarlı, URL tabanlı uç noktalar sağlar**: Farklı türde talepler için

✅ Kullanacağımız [CO2 Signal API](https://www.co2signal.com/), dünya çapındaki elektrik şebekelerinden gerçek zamanlı karbon yoğunluğu verileri sağlar. Bu, kullanıcıların elektrik kullanımının çevresel etkisini anlamalarına yardımcı olur!

> 💡 **Asenkron JavaScript'i Anlamak**: [`async` anahtar kelimesi](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function), kodunuzun aynı anda birden fazla işlemi yönetmesini sağlar. Bir sunucudan veri talep ettiğinizde, tüm uzantınızın donmasını istemezsiniz - bu, hava trafik kontrolünün bir uçağın yanıtını beklerken tüm operasyonları durdurması gibi olurdu.
>
> **Ana faydalar:**
> - **Uzantı yanıt verebilirliğini korur**: Veri yüklenirken
> - **Diğer kodun çalışmaya devam etmesine izin verir**: Ağ talepleri sırasında
> - **Kod okunabilirliğini artırır**: Geleneksel geri çağrı desenlerine kıyasla
> - **Ağ sorunları için zarif hata yönetimi sağlar**

İşte `async` hakkında hızlı bir video:

[![Async ve Await ile sözleri yönetmek](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async ve Await ile sözleri yönetmek")

> 🎥 Yukarıdaki görüntüye tıklayarak async/await hakkında bir video izleyebilirsiniz.

Karbon kullanım verilerini almak ve görüntülemek için fonksiyonu oluşturun:

```javascript
// Modern fetch API approach (no external dependencies needed)
async function displayCarbonUsage(apiKey, region) {
	try {
		// Fetch carbon intensity data from CO2 Signal API
		const response = await fetch('https://api.co2signal.com/v1/latest', {
			method: 'GET',
			headers: {
				'auth-token': apiKey,
				'Content-Type': 'application/json'
			},
			// Add query parameters for the specific region
			...new URLSearchParams({ countryCode: region }) && {
				url: `https://api.co2signal.com/v1/latest?countryCode=${region}`
			}
		});

		// Check if the API request was successful
		if (!response.ok) {
			throw new Error(`API request failed: ${response.status}`);
		}

		const data = await response.json();
		const carbonData = data.data;

		// Calculate rounded carbon intensity value
		const carbonIntensity = Math.round(carbonData.carbonIntensity);

		// Update the user interface with fetched data
		loading.style.display = 'none';
		form.style.display = 'none';
		myregion.textContent = region.toUpperCase();
		usage.textContent = `${carbonIntensity} grams (grams CO₂ emitted per kilowatt hour)`;
		fossilfuel.textContent = `${carbonData.fossilFuelPercentage.toFixed(2)}% (percentage of fossil fuels used to generate electricity)`;
		results.style.display = 'block';

		// TODO: calculateColor(carbonIntensity) - implement in next lesson

	} catch (error) {
		console.error('Error fetching carbon data:', error);
		
		// Show user-friendly error message
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we couldn\'t fetch data for that region. Please check your API key and region code.';
	}
}
```

**Burada olanları parçalayarak:**
- **Modern `fetch()` API'sini kullanır**: Axios gibi harici kütüphaneler yerine daha temiz, bağımlılıksız kod için
- **Doğru hata kontrolü uygular**: `response.ok` ile API hatalarını erken yakalamak için
- **Asenkron işlemleri yönetir**: `async/await` ile daha okunabilir kod akışı için
- **CO2 Signal API ile kimlik doğrulama yapar**: `auth-token` başlığı kullanarak
- **JSON yanıt verilerini ayrıştırır**: Ve karbon yoğunluğu bilgilerini çıkarır
- **Birden fazla UI öğesini günceller**: Formatlanmış çevresel verilerle
- **API çağrıları başarısız olduğunda kullanıcı dostu hata mesajları sağlar**

**Gösterilen modern JavaScript kavramları:**
- **Şablon dizeleri**: `${}` sözdizimi ile temiz dize formatlama
- **Hata yönetimi**: Sağlam uygulamalar için try/catch blokları ile
- **Async/await deseni**: Ağ taleplerini zarif bir şekilde yönetmek için
- **Nesne yapılandırması**: API yanıtlarından belirli verileri çıkarmak için
- **Yöntem zincirleme**: Birden fazla DOM manipülasyonu için

✅ Bu fonksiyon, harici sunucularla iletişim kurma, kimlik doğrulama, veri işleme, arayüz güncelleme ve hataları zarif bir şekilde yönetme gibi birkaç önemli web geliştirme kavramını gösterir. Bunlar, profesyonel geliştiricilerin düzenli olarak kullandığı temel becerilerdir.

🎉 **Başardığınız şey:** Şu özelliklere sahip bir tarayıcı uzantısı oluşturdunuz:
- **İnternete bağlanır**: Ve gerçek çevresel verileri alır
- **Kullanıcı ayarlarını korur**: Oturumlar arasında
- **Hataları zarif bir şekilde yönetir**: Çökmeden
- **Sorunsuz, profesyonel bir kullanıcı deneyimi sunar**

`npm run build` komutunu çalıştırarak ve tarayıcıdaki uzantınızı yenileyerek çalışmanızı test edin. Artık işlevsel bir karbon ayak izi takipçiniz var. Bir sonraki derste, uzantıyı tamamlamak için dinamik simge işlevselliği ekleyeceğiz.

---

## GitHub Copilot Agent Challenge 🚀

Agent modunu kullanarak aşağıdaki meydan okumayı tamamlayın:

**Açıklama:** Tarayıcı uzantısını hata yönetimi iyileştirmeleri ve kullanıcı deneyimi özellikleri ekleyerek geliştirin. Bu meydan okuma, modern JavaScript desenlerini kullanarak API'lerle çalışma, yerel depolama ve DOM manipülasyonu pratiği yapmanıza yardımcı olacaktır.

**Talimat:** displayCarbonUsage fonksiyonunun geliştirilmiş bir versiyonunu oluşturun. Bu versiyon şunları içermelidir: 1) Başarısız API çağrıları için üstel geri çekilme mekanizması, 2) API çağrısı yapmadan önce bölge kodu için giriş doğrulaması, 3) İlerleme göstergeleriyle yükleme animasyonu, 4) Yerel depolamada API yanıtlarının 30 dakika süreyle önbelleğe alınması, ve 5) Önceki API çağrılarından gelen geçmiş verileri görüntüleme özelliği. Ayrıca tüm fonksiyon parametrelerini ve dönüş türlerini belgelemek için uygun TypeScript tarzı JSDoc yorumları ekleyin.

Agent modu hakkında daha fazla bilgi edinin: [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode).

## 🚀 Meydan Okuma

Web geliştirme için mevcut olan tarayıcı tabanlı API'lerin zenginliğini keşfederek API'ler hakkındaki bilginizi genişletin. Bu tarayıcı API'lerinden birini seçin ve küçük bir demo oluşturun:

- [Geolocation API](https://developer.mozilla.org/docs/Web/API/Geolocation_API) - Kullanıcının mevcut konumunu alın
- [Notification API](https://developer.mozilla.org/docs/Web/API/Notifications_API) - Masaüstü bildirimleri gönderin
- [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) - Etkileşimli sürükleme arayüzleri oluşturun
- [Web Storage API](https://developer.mozilla.org/docs/Web/API/Web_Storage_API) - Gelişmiş yerel depolama teknikleri
- [Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API) - XMLHttpRequest'e modern bir alternatif

**Araştırma soruları:**
- Bu API hangi gerçek dünya problemlerini çözüyor?
- API hataları ve uç durumları nasıl ele alıyor?
- Bu API'yi kullanırken hangi güvenlik hususları var?
- Bu API farklı tarayıcılar arasında ne kadar yaygın olarak destekleniyor?

Araştırmanızdan sonra, bir API'yi geliştirici dostu ve güvenilir yapan özellikleri belirleyin.

## Ders Sonrası Test

[Ders sonrası test](https://ff-quizzes.netlify.app/web/quiz/26)

## Gözden
Bu derste LocalStorage ve API'ler hakkında bilgi edindiniz, her ikisi de profesyonel bir web geliştirici için oldukça kullanışlıdır. Peki, bu iki şeyin birlikte nasıl çalıştığını düşünebilir misiniz? Bir API tarafından kullanılacak öğeleri depolayan bir web sitesini nasıl tasarlayacağınızı düşünün.

## Ödev

[Bir API Sahiplenin](assignment.md)

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.