<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "89d0df9854ed020f155e94882ae88d4c",
  "translation_date": "2025-08-29T00:18:13+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "tr"
}
-->
# Bankacılık Uygulaması Yapımı Bölüm 3: Veri Alma ve Kullanma Yöntemleri

## Ders Öncesi Test

[Ders öncesi test](https://ff-quizzes.netlify.app/web/quiz/45)

### Giriş

Her web uygulamasının temelinde *veri* bulunur. Veri birçok biçimde olabilir, ancak temel amacı her zaman kullanıcıya bilgi sunmaktır. Web uygulamaları giderek daha etkileşimli ve karmaşık hale geldikçe, kullanıcının bilgiye erişimi ve bu bilgiyle etkileşimi web geliştirme sürecinin önemli bir parçası haline gelmiştir.

Bu derste, bir sunucudan verileri asenkron olarak nasıl alacağımızı ve bu verileri HTML'yi yeniden yüklemeden bir web sayfasında nasıl göstereceğimizi göreceğiz.

### Ön Koşul

Bu ders için web uygulamasının [Giriş ve Kayıt Formu](../2-forms/README.md) bölümünü oluşturmuş olmanız gerekiyor. Ayrıca [Node.js](https://nodejs.org) kurmanız ve [sunucu API'sini](../api/README.md) yerel olarak çalıştırmanız gerekiyor, böylece hesap verilerine erişebilirsiniz.

Sunucunun düzgün çalıştığını test etmek için bir terminalde şu komutu çalıştırabilirsiniz:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX ve veri alma

Geleneksel web siteleri, kullanıcı bir bağlantı seçtiğinde veya bir form aracılığıyla veri gönderdiğinde, tam HTML sayfasını yeniden yükleyerek görüntülenen içeriği günceller. Yeni veriler her yüklendiğinde, web sunucusu tarayıcı tarafından işlenmesi gereken tamamen yeni bir HTML sayfası döndürür. Bu işlem, mevcut kullanıcı eylemini kesintiye uğratır ve yeniden yükleme sırasında etkileşimleri sınırlar. Bu iş akışı *Çok Sayfalı Uygulama* veya *MPA* olarak adlandırılır.

![Çok sayfalı uygulamada güncelleme iş akışı](../../../../translated_images/mpa.7f7375a1a2d4aa779d3f928a2aaaf9ad76bcdeb05cfce2dc27ab126024050f51.tr.png)

Web uygulamaları daha karmaşık ve etkileşimli hale gelmeye başladığında, [AJAX (Asynchronous JavaScript and XML)](https://en.wikipedia.org/wiki/Ajax_(programming)) adı verilen yeni bir teknik ortaya çıktı. Bu teknik, JavaScript kullanarak verileri bir sunucudan asenkron olarak göndermeye ve almaya olanak tanır, HTML sayfasını yeniden yüklemeye gerek kalmadan daha hızlı güncellemeler ve daha akıcı kullanıcı etkileşimleri sağlar. Sunucudan yeni veriler alındığında, mevcut HTML sayfası JavaScript kullanılarak [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) API'si ile güncellenebilir. Zamanla bu yaklaşım, günümüzde [*Tek Sayfalı Uygulama* veya *SPA*](https://en.wikipedia.org/wiki/Single-page_application) olarak adlandırılan bir yapıya evrilmiştir.

![Tek sayfalı uygulamada güncelleme iş akışı](../../../../translated_images/spa.268ec73b41f992c2a21ef9294235c6ae597b3c37e2c03f0494c2d8857325cc57.tr.png)

AJAX ilk tanıtıldığında, verileri asenkron olarak almak için mevcut olan tek API [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) idi. Ancak modern tarayıcılar artık JSON verilerini manipüle etmek için daha uygun ve güçlü olan, sözler (promises) kullanan [`Fetch` API](https://developer.mozilla.org/docs/Web/API/Fetch_API)'yi de destekliyor.

> Tüm modern tarayıcılar `Fetch API`'yi desteklerken, web uygulamanızın eski veya eski tarayıcılarda çalışmasını istiyorsanız, öncelikle [caniuse.com'daki uyumluluk tablosunu](https://caniuse.com/fetch) kontrol etmek her zaman iyi bir fikirdir.

### Görev

[Önceki derste](../2-forms/README.md) bir hesap oluşturmak için kayıt formunu uygulamıştık. Şimdi mevcut bir hesapla giriş yapmayı ve verilerini almayı sağlayacak kodu ekleyeceğiz. `app.js` dosyasını açın ve yeni bir `login` fonksiyonu ekleyin:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

Burada `getElementById()` ile form öğesini alarak başlıyoruz ve ardından `loginForm.user.value` ile giriş formundaki kullanıcı adını alıyoruz. Her form kontrolü, HTML'de `name` özelliği ile ayarlanmış adıyla formun bir özelliği olarak erişilebilir.

Kayıt işlemi için yaptığımız gibi, hesap verilerini almak için bir sunucu isteği gerçekleştiren başka bir fonksiyon oluşturacağız:

```js
async function getAccount(user) {
  try {
    const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

Verileri sunucudan asenkron olarak almak için `fetch` API'sini kullanıyoruz, ancak bu sefer yalnızca veri sorguladığımız için URL dışında başka bir parametreye ihtiyacımız yok. Varsayılan olarak, `fetch` bir [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET) HTTP isteği oluşturur, ki bu burada aradığımız şeydir.

✅ `encodeURIComponent()` URL için özel karakterleri kaçış karakterine dönüştüren bir fonksiyondur. Bu fonksiyonu çağırmaz ve doğrudan `user` değerini URL'de kullanırsak ne tür sorunlarla karşılaşabiliriz?

Şimdi `login` fonksiyonumuzu `getAccount` fonksiyonunu kullanacak şekilde güncelleyelim:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return console.log('loginError', data.error);
  }

  account = data;
  navigate('/dashboard');
}
```

Öncelikle, `getAccount` asenkron bir fonksiyon olduğu için sunucu sonucunu beklemek için `await` anahtar kelimesini kullanmamız gerekiyor. Herhangi bir sunucu isteğinde olduğu gibi, hata durumlarıyla da başa çıkmamız gerekiyor. Şimdilik yalnızca bir hata mesajı göstermek için bir log mesajı ekleyeceğiz ve daha sonra buna geri döneceğiz.

Daha sonra verileri bir yere kaydetmemiz gerekiyor, böylece daha sonra gösterge paneli bilgilerini göstermek için kullanabiliriz. `account` değişkeni henüz mevcut olmadığından, dosyamızın en üstünde bir global değişken oluşturacağız:

```js
let account = null;
```

Kullanıcı verileri bir değişkene kaydedildikten sonra, *giriş* sayfasından *gösterge paneli*ne `navigate()` fonksiyonunu kullanarak geçiş yapabiliriz.

Son olarak, giriş formu gönderildiğinde `login` fonksiyonumuzu çağırmamız gerekiyor. HTML'yi şu şekilde değiştirerek bunu yapabiliriz:

```html
<form id="loginForm" action="javascript:login()">
```

Her şeyin düzgün çalıştığını test etmek için yeni bir hesap oluşturun ve aynı hesapla giriş yapmayı deneyin.

Bir sonraki bölüme geçmeden önce, `register` fonksiyonunu şu kodu ekleyerek tamamlayabiliriz:

```js
account = result;
navigate('/dashboard');
```

✅ Varsayılan olarak, yalnızca *görüntülediğiniz web sayfasıyla aynı alan adı ve porttan* sunucu API'lerini çağırabilirsiniz. Bu, tarayıcılar tarafından uygulanan bir güvenlik mekanizmasıdır. Ama bekleyin, web uygulamamız `localhost:3000` üzerinde çalışırken sunucu API'si `localhost:5000` üzerinde çalışıyor, neden çalışıyor? [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS) adı verilen bir teknik kullanılarak, sunucu yanıtına özel başlıklar eklenirse belirli alan adları için istisnalar tanımlanabilir.

> API'ler hakkında daha fazla bilgi edinmek için bu [dersi](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon) alın.

## HTML'yi veri göstermek için güncelleme

Artık kullanıcı verilerine sahibiz, mevcut HTML'yi bu verileri göstermek için güncellememiz gerekiyor. Örneğin, bir öğeyi DOM'dan almak için `document.getElementById()` kullanmayı zaten biliyoruz. Bir temel öğeye sahip olduktan sonra, onu değiştirmek veya alt öğeler eklemek için kullanabileceğiniz bazı API'ler şunlardır:

- [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent) özelliğini kullanarak bir öğenin metnini değiştirebilirsiniz. Bu değeri değiştirmek, öğenin tüm alt öğelerini (varsa) kaldırır ve sağlanan metinle değiştirir. Bu nedenle, bir öğenin tüm alt öğelerini kaldırmak için boş bir dize `''` atamak da etkili bir yöntemdir.

- [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) ve [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) yöntemlerini kullanarak bir veya daha fazla yeni alt öğe oluşturabilir ve ekleyebilirsiniz.

✅ Bir öğenin HTML içeriğini değiştirmek için [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) özelliğini kullanmak da mümkündür, ancak bu özellik [cross-site scripting (XSS)](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting) saldırılarına karşı savunmasız olduğu için kaçınılmalıdır.

### Görev

Gösterge paneli ekranına geçmeden önce, *giriş* sayfasında yapmamız gereken bir şey daha var. Şu anda, var olmayan bir kullanıcı adıyla giriş yapmaya çalışırsanız, konsolda bir mesaj gösteriliyor ancak normal bir kullanıcı için hiçbir şey değişmiyor ve ne olduğunu anlamıyorsunuz.

Giriş `<button>` öğesinin hemen öncesine bir hata mesajı gösterebileceğimiz bir yer tutucu öğe ekleyelim:

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

Bu `<div>` öğesi boş, yani ekrana hiçbir şey gösterilmeyecek. Ancak JavaScript ile içerik eklediğimizde görünür hale gelecek. Ayrıca `id` özelliği ekleyerek JavaScript ile kolayca erişilebilir hale getiriyoruz.

`app.js` dosyasına geri dönün ve yeni bir yardımcı fonksiyon `updateElement` oluşturun:

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

Bu fonksiyon oldukça basit: bir öğe *id* ve *metin* verildiğinde, DOM'daki eşleşen `id` öğesinin metin içeriğini günceller. Bu yöntemi `login` fonksiyonundaki önceki hata mesajı yerine kullanalım:

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

Şimdi geçersiz bir hesapla giriş yapmaya çalışırsanız, şöyle bir şey görmelisiniz:

![Giriş sırasında gösterilen hata mesajını gösteren ekran görüntüsü](../../../../translated_images/login-error.416fe019b36a63276764c2349df5d99e04ebda54fefe60c715ee87a28d5d4ad0.tr.png)

Artık görsel olarak bir hata metni gösteriliyor, ancak bir ekran okuyucu ile denediğinizde hiçbir şeyin duyurulmadığını fark edeceksiniz. Bir sayfaya dinamik olarak eklenen metnin ekran okuyucular tarafından duyurulabilmesi için [Live Region](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) adı verilen bir şey kullanılması gerekir. Burada bir uyarı olarak adlandırılan özel bir tür canlı bölge kullanacağız:

```html
<div id="loginError" role="alert"></div>
```

Aynı davranışı `register` fonksiyon hataları için de uygulayın (HTML'yi güncellemeyi unutmayın).

## Gösterge panelinde bilgi gösterme

Az önce gördüğümüz teknikleri kullanarak, hesap bilgilerini gösterge paneli sayfasında da göstereceğiz.

Sunucudan alınan bir hesap nesnesi şu şekilde görünüyor:

```json
{
  "user": "test",
  "currency": "$",
  "description": "Test account",
  "balance": 75,
  "transactions": [
    { "id": "1", "date": "2020-10-01", "object": "Pocket money", "amount": 50 },
    { "id": "2", "date": "2020-10-03", "object": "Book", "amount": -10 },
    { "id": "3", "date": "2020-10-04", "object": "Sandwich", "amount": -5 }
  ],
}
```

> Not: işinizi kolaylaştırmak için, önceden doldurulmuş verilerle `test` hesabını kullanabilirsiniz.

### Görev

HTML'deki "Bakiye" bölümünü yer tutucu öğeler eklemek için değiştirelim:

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

Ayrıca, hesap açıklamasını göstermek için hemen altına yeni bir bölüm ekleyeceğiz:

```html
<h2 id="description"></h2>
```

✅ Hesap açıklaması, altındaki içeriğin başlığı olarak işlev gördüğü için semantik olarak bir başlık olarak işaretlenmiştir. [Başlık yapısının](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) erişilebilirlik için neden önemli olduğunu öğrenin ve sayfayı eleştirel bir gözle inceleyerek başka nelerin başlık olabileceğini belirleyin.

Şimdi `app.js` dosyasına yeni bir fonksiyon ekleyerek yer tutucuyu dolduralım:

```js
function updateDashboard() {
  if (!account) {
    return navigate('/login');
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);
}
```

Öncelikle, devam etmeden önce ihtiyacımız olan hesap verilerine sahip olduğumuzu kontrol ediyoruz. Ardından, daha önce oluşturduğumuz `updateElement()` fonksiyonunu kullanarak HTML'yi güncelliyoruz.

> Bakiye görüntüsünü daha güzel hale getirmek için, değeri ondalık noktadan sonra 2 basamakla zorlamak için [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) yöntemini kullanıyoruz.

Şimdi `updateDashboard()` fonksiyonumuzu her gösterge paneli yüklendiğinde çağırmamız gerekiyor. [Ders 1 ödevini](../1-template-route/assignment.md) zaten tamamladıysanız bu oldukça basit olmalı, aksi takdirde aşağıdaki uygulamayı kullanabilirsiniz.

`updateRoute()` fonksiyonunun sonuna şu kodu ekleyin:

```js
if (typeof route.init === 'function') {
  route.init();
}
```

Ve rota tanımlarını şu şekilde güncelleyin:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

Bu değişiklikle, her gösterge paneli sayfası görüntülendiğinde `updateDashboard()` fonksiyonu çağrılır. Giriş yaptıktan sonra hesap bakiyesini, para birimini ve açıklamayı görebilmelisiniz.

## HTML şablonlarıyla tablo satırlarını dinamik olarak oluşturma

[Birinci derste](../1-template-route/README.md) uygulamamızdaki navigasyonu uygulamak için HTML şablonlarını ve [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) yöntemini kullandık. Şablonlar daha küçük olabilir ve bir sayfanın tekrarlayan bölümlerini dinamik olarak doldurmak için kullanılabilir.

Aynı yaklaşımı HTML tablosundaki işlem listesini göstermek için kullanacağız.

### Görev

HTML `<body>` içinde yeni bir şablon ekleyin:

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

Bu şablon, bir işlem için *tarih*, *nesne* ve *miktar* gibi 3 sütunu doldurmak istediğimiz tek bir tablo satırını temsil eder.

Ardından, JavaScript ile kolayca bulabilmek için gösterge paneli şablonundaki tablonun `<tbody>` öğesine şu `id` özelliğini ekleyin:

```html
<tbody id="transactions"></tbody>
```

HTML'miz hazır, şimdi JavaScript koduna geçelim ve yeni bir `createTransactionRow` fonksiyonu oluşturalım:

```js
function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}
```

Bu fonksiyon tam olarak adının ima ettiği şeyi yapar: daha önce oluşturduğumuz şablonu kullanarak yeni bir tablo satırı oluşturur ve işlem verilerini kullanarak içeriğini doldurur. Bunu `updateDashboard()` fonksiyonumuzda tabloyu doldurmak için kullanacağız:

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

Burada, üzerinde çalışabileceğimiz yeni bir DOM parçası oluşturan [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment) yöntemini kullanıyoruz ve sonunda HTML tablomuzla iliştiriyoruz.

Bu kodun çalışabilmesi için hala yapmamız gereken bir şey var, çünkü `updateElement()` fonksiyonumuz şu anda yalnızca metin içeriğini destekliyor. Kodunu biraz değiştirelim:

```js
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

[`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) yöntemini kullanıyoruz çünkü bu yöntem bir üst öğeye metin veya [DOM Düğümleri](https://developer.mozilla.org/docs/Web/API/Node) eklemeye olanak tanır, bu da tüm kullanım durumlarımız için mükemmeldir.
Eğer `test` hesabını kullanarak giriş yapmayı denerseniz, artık kontrol panelinde bir işlem listesi görmelisiniz 🎉.

---

## 🚀 Meydan Okuma

Birlikte çalışarak kontrol paneli sayfasını gerçek bir bankacılık uygulaması gibi görünmesini sağlayın. Eğer uygulamanızı zaten tasarladıysanız, [media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) kullanarak hem masaüstü hem de mobil cihazlarda güzel çalışan bir [duyarlı tasarım](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) oluşturmayı deneyin.

İşte tasarlanmış bir kontrol paneli sayfası örneği:

![Kontrol panelinin tasarlandıktan sonraki örnek sonucunun ekran görüntüsü](../../../../translated_images/screen2.123c82a831a1d14ab2061994be2fa5de9cec1ce651047217d326d4773a6348e4.tr.png)

## Ders Sonrası Test

[Ders sonrası test](https://ff-quizzes.netlify.app/web/quiz/46)

## Ödev

[Kodunuzu yeniden düzenleyin ve yorumlayın](assignment.md)

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.