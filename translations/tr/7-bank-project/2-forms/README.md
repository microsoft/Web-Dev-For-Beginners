<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b667b7d601e2ee19acb5aa9d102dc9f3",
  "translation_date": "2025-08-26T00:15:42+00:00",
  "source_file": "7-bank-project/2-forms/README.md",
  "language_code": "tr"
}
-->
# Bankacılık Uygulaması Bölüm 2: Giriş ve Kayıt Formu Oluşturma

## Ders Öncesi Test

[Ders öncesi test](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/43)

### Giriş

Neredeyse tüm modern web uygulamalarında, kendi özel alanınıza sahip olmak için bir hesap oluşturabilirsiniz. Bir web uygulamasına aynı anda birden fazla kullanıcı erişebileceğinden, her kullanıcının kişisel verilerini ayrı ayrı saklamak ve hangi bilgilerin görüntüleneceğini seçmek için bir mekanizmaya ihtiyacınız vardır. [Kullanıcı kimliğini güvenli bir şekilde yönetme](https://en.wikipedia.org/wiki/Authentication) konusunu ele almayacağız çünkü bu başlı başına kapsamlı bir konudur, ancak her kullanıcının uygulamamızda bir (veya daha fazla) banka hesabı oluşturabilmesini sağlayacağız.

Bu bölümde, web uygulamamıza giriş ve kayıt eklemek için HTML formlarını kullanacağız. Verileri bir sunucu API'sine programlı bir şekilde nasıl göndereceğimizi ve nihayetinde kullanıcı girdileri için temel doğrulama kurallarını nasıl tanımlayacağımızı göreceğiz.

### Ön Koşul

Bu ders için web uygulamasının [HTML şablonları ve yönlendirme](../1-template-route/README.md) bölümünü tamamlamış olmanız gerekiyor. Ayrıca [Node.js](https://nodejs.org) yüklemeniz ve [sunucu API'sini](../api/README.md) yerel olarak çalıştırmanız gerekiyor, böylece hesap oluşturmak için veri gönderebilirsiniz.

**Not alın**
Aynı anda iki terminal çalıştırmanız gerekecek:
1. [HTML şablonları ve yönlendirme](../1-template-route/README.md) dersinde oluşturduğumuz ana banka uygulaması için
2. Yukarıda kurduğumuz [Bank APP sunucu API](../api/README.md) için.

Dersin geri kalanını takip edebilmek için iki sunucunun da çalışır durumda olması gerekiyor. Farklı portlarda (port `3000` ve port `5000`) dinledikleri için her şey sorunsuz çalışmalı.

Sunucunun düzgün çalıştığını test etmek için bir terminalde şu komutu çalıştırabilirsiniz:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Form ve Kontroller

`<form>` öğesi, kullanıcının etkileşimli kontrollerle veri girebileceği ve gönderebileceği bir HTML belgesinin bir bölümünü kapsar. Bir form içinde kullanılabilecek birçok kullanıcı arayüzü (UI) kontrolü vardır, en yaygın olanı `<input>` ve `<button>` öğeleridir.

`<input>` öğesinin birçok farklı [türü](https://developer.mozilla.org/docs/Web/HTML/Element/input) vardır. Örneğin, kullanıcının kullanıcı adını girebileceği bir alan oluşturmak için şunu kullanabilirsiniz:

```html
<input id="username" name="username" type="text">
```

`name` özelliği, form verileri gönderildiğinde özellik adı olarak kullanılacaktır. `id` özelliği ise bir `<label>` öğesini form kontrolüyle ilişkilendirmek için kullanılır.

> [`<input>` türlerinin](https://developer.mozilla.org/docs/Web/HTML/Element/input) ve [diğer form kontrollerinin](https://developer.mozilla.org/docs/Learn/Forms/Other_form_controls) tam listesine göz atarak UI oluştururken kullanabileceğiniz tüm yerel UI öğeleri hakkında fikir edinebilirsiniz.

✅ `<input>` öğesinin bir [boş öğe](https://developer.mozilla.org/docs/Glossary/Empty_element) olduğunu ve eşleşen bir kapanış etiketi eklememeniz gerektiğini unutmayın. Ancak, kendi kendine kapanan `<input/>` notasyonunu kullanabilirsiniz, ancak bu gerekli değildir.

Bir form içindeki `<button>` öğesi biraz özeldir. Eğer `type` özelliğini belirtmezseniz, basıldığında form verilerini otomatik olarak sunucuya gönderir. İşte olası `type` değerleri:

- `submit`: Bir `<form>` içinde varsayılan olarak, düğme form gönderme işlemini tetikler.
- `reset`: Düğme, tüm form kontrollerini ilk değerlerine sıfırlar.
- `button`: Düğme basıldığında varsayılan bir davranış atamaz. Daha sonra JavaScript kullanarak özel eylemler atayabilirsiniz.

### Görev

Hadi `login` şablonuna bir form ekleyerek başlayalım. Bir *kullanıcı adı* alanına ve bir *Giriş* düğmesine ihtiyacımız olacak.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <h2>Login</h2>
    <form id="loginForm">
      <label for="username">Username</label>
      <input id="username" name="user" type="text">
      <button>Login</button>
    </form>
  </section>
</template>
```

Daha yakından bakarsanız, burada bir `<label>` öğesi eklediğimizi fark edebilirsiniz. `<label>` öğeleri, kullanıcı adı alanımız gibi UI kontrollerine bir ad eklemek için kullanılır. Etiketler, formlarınızın okunabilirliği için önemlidir, ancak ek faydalar da sağlar:

- Bir etiketi bir form kontrolüyle ilişkilendirerek, yardımcı teknolojiler (örneğin ekran okuyucular) kullanan kullanıcıların hangi verileri sağlamaları gerektiğini anlamalarına yardımcı olur.
- Etikete tıklayarak, ilgili girdiye doğrudan odaklanabilirsiniz, bu da dokunmatik ekranlı cihazlarda erişimi kolaylaştırır.

> Web'de [erişilebilirlik](https://developer.mozilla.org/docs/Learn/Accessibility/What_is_accessibility) genellikle göz ardı edilen çok önemli bir konudur. [Semantik HTML öğeleri](https://developer.mozilla.org/docs/Learn/Accessibility/HTML) sayesinde, bunları doğru şekilde kullanırsanız erişilebilir içerik oluşturmak zor değildir. [Erişilebilirlik hakkında daha fazla bilgi edinebilirsiniz](https://developer.mozilla.org/docs/Web/Accessibility) ve yaygın hatalardan kaçınarak sorumlu bir geliştirici olabilirsiniz.

Şimdi önceki formun hemen altına ikinci bir kayıt formu ekleyeceğiz:

```html
<hr/>
<h2>Register</h2>
<form id="registerForm">
  <label for="user">Username</label>
  <input id="user" name="user" type="text">
  <label for="currency">Currency</label>
  <input id="currency" name="currency" type="text" value="$">
  <label for="description">Description</label>
  <input id="description" name="description" type="text">
  <label for="balance">Current balance</label>
  <input id="balance" name="balance" type="number" value="0">
  <button>Register</button>
</form>
```

`value` özelliğini kullanarak belirli bir giriş için varsayılan bir değer tanımlayabiliriz. Ayrıca, `balance` için olan girdinin `number` türüne sahip olduğunu da fark edin. Diğer girdilerden farklı mı görünüyor? Onunla etkileşim kurmayı deneyin.

✅ Formlarla yalnızca bir klavye kullanarak gezinebilir ve etkileşimde bulunabilir misiniz? Bunu nasıl yapardınız?

## Verileri Sunucuya Gönderme

Artık işlevsel bir kullanıcı arayüzümüz olduğuna göre, bir sonraki adım verileri sunucuya göndermek. Mevcut kodumuzu kullanarak hızlı bir test yapalım: *Giriş* veya *Kayıt* düğmesine tıklarsanız ne olur?

Tarayıcınızın URL bölümünde bir değişiklik fark ettiniz mi?

![Kayıt düğmesine tıkladıktan sonra tarayıcı URL'sindeki değişikliğin ekran görüntüsü](../../../../translated_images/click-register.e89a30bf0d4bc9ca867dc537c4cea679a7c26368bd790969082f524fed2355bc.tr.png)

Bir `<form>` öğesi için varsayılan eylem, formu mevcut sunucu URL'sine [GET yöntemi](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3) kullanarak göndermek ve form verilerini doğrudan URL'ye eklemektir. Ancak bu yöntemin bazı eksiklikleri vardır:

- Gönderilen veri boyutu çok sınırlıdır (yaklaşık 2000 karakter)
- Veri URL'de doğrudan görünür (şifreler için iyi değil)
- Dosya yüklemeleriyle çalışmaz

Bu nedenle, form verilerini HTTP isteğinin gövdesinde sunucuya gönderen [POST yöntemi](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) kullanabilirsiniz, önceki sınırlamaların hiçbiri olmadan.

> POST, veri göndermek için en yaygın kullanılan yöntem olsa da, [bazı özel senaryolarda](https://www.w3.org/2001/tag/doc/whenToUseGet.html) GET yöntemini kullanmak tercih edilebilir, örneğin bir arama alanı uygularken.

### Görev

Kayıt formuna `action` ve `method` özelliklerini ekleyin:

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

Şimdi adınızı kullanarak yeni bir hesap kaydetmeyi deneyin. *Kayıt* düğmesine tıkladıktan sonra şöyle bir şey görmelisiniz:

![Bir tarayıcı penceresi localhost:5000/api/accounts adresinde, kullanıcı verileri içeren bir JSON dizesi gösteriyor](../../../../translated_images/form-post.61de4ca1b964d91a9e338416e19f218504dd0af5f762fbebabfe7ae80edf885f.tr.png)

Her şey yolunda giderse, sunucu isteğinize yanıt olarak oluşturulan hesap verilerini içeren bir [JSON](https://www.json.org/json-en.html) yanıtı göndermelidir.

✅ Aynı adla tekrar kayıt olmayı deneyin. Ne oluyor?

## Sayfa Yenilemeden Veri Gönderme

Muhtemelen fark ettiğiniz gibi, kullandığımız yaklaşımda küçük bir sorun var: formu gönderdiğimizde uygulamamızdan çıkıyoruz ve tarayıcı sunucu URL'sine yönlendiriyor. Web uygulamamızda tüm sayfa yenilemelerinden kaçınmaya çalışıyoruz çünkü bir [Tek sayfa uygulaması (SPA)](https://en.wikipedia.org/wiki/Single-page_application) yapıyoruz.

Form verilerini sayfa yenilemeden sunucuya göndermek için JavaScript kodu kullanmamız gerekiyor. Bir `<form>` öğesinin `action` özelliğine bir URL koymak yerine, herhangi bir JavaScript kodunu `javascript:` dizesiyle başlayarak özel bir eylem gerçekleştirmek için kullanabilirsiniz. Bunu kullanmak, tarayıcı tarafından otomatik olarak yapılan bazı görevleri sizin uygulamanız gerektiği anlamına gelir:

- Form verilerini almak
- Form verilerini uygun bir formata dönüştürmek ve kodlamak
- HTTP isteğini oluşturmak ve sunucuya göndermek

### Görev

Kayıt formunun `action` özelliğini şu şekilde değiştirin:

```html
<form id="registerForm" action="javascript:register()">
```

`app.js` dosyasını açın ve `register` adında yeni bir fonksiyon ekleyin:

```js
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
}
```

Burada form öğesini `getElementById()` kullanarak alıyoruz ve [`FormData`](https://developer.mozilla.org/docs/Web/API/FormData) yardımcı aracını kullanarak form kontrollerinden değerleri anahtar/değer çiftleri olarak çıkarıyoruz. Ardından verileri [`Object.fromEntries()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) kullanarak düzenli bir nesneye dönüştürüyoruz ve son olarak verileri [JSON](https://www.json.org/json-en.html) formatında serileştiriyoruz, bu format web üzerinde veri alışverişi için yaygın olarak kullanılır.

Veriler artık sunucuya gönderilmeye hazır. `createAccount` adında yeni bir fonksiyon oluşturun:

```js
async function createAccount(account) {
  try {
    const response = await fetch('//localhost:5000/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: account
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

Bu fonksiyon ne yapıyor? Öncelikle burada `async` anahtar kelimesine dikkat edin. Bu, fonksiyonun [**asenkron**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) olarak çalışacak kod içerdiği anlamına gelir. `await` anahtar kelimesiyle birlikte kullanıldığında, burada sunucu yanıtını beklemek gibi asenkron kodun tamamlanmasını bekler ve ardından devam eder.

`fetch()` API'sini kullanarak JSON verilerini sunucuya gönderiyoruz. Bu yöntem 2 parametre alır:

- Sunucunun URL'si, bu yüzden buraya `//localhost:5000/api/accounts` koyuyoruz.
- İsteğin ayarları. Burada yöntemi `POST` olarak ayarlıyoruz ve isteğin `body` kısmını sağlıyoruz. JSON verilerini sunucuya gönderdiğimiz için, `Content-Type` başlığını `application/json` olarak ayarlamamız gerekiyor, böylece sunucu içeriği nasıl yorumlayacağını bilir.

Sunucu isteğe JSON ile yanıt vereceği için, JSON içeriğini ayrıştırmak ve sonuç nesnesini döndürmek için `await response.json()` kullanabiliriz. Bu yöntemin asenkron olduğunu unutmayın, bu yüzden ayrıştırma sırasında oluşabilecek hataların da yakalanmasını sağlamak için burada `await` anahtar kelimesini kullanıyoruz.

Şimdi `register` fonksiyonuna `createAccount()` çağrısı eklemek için biraz kod ekleyin:

```js
const result = await createAccount(jsonData);
```

Burada `await` anahtar kelimesini kullandığımız için, `register` fonksiyonunun önüne `async` anahtar kelimesini eklememiz gerekiyor:

```js
async function register() {
```

Son olarak, sonucu kontrol etmek için bazı loglar ekleyelim. Son fonksiyon şu şekilde görünmelidir:

```js
async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const result = await createAccount(jsonData);

  if (result.error) {
    return console.log('An error occurred:', result.error);
  }

  console.log('Account created!', result);
}
```

Biraz uzun sürdü ama başardık! [Tarayıcı geliştirici araçlarını](https://developer.mozilla.org/docs/Learn/Common_questions/What_are_browser_developer_tools) açarsanız ve yeni bir hesap kaydetmeyi denerseniz, web sayfasında herhangi bir değişiklik görmemelisiniz ancak konsolda her şeyin çalıştığını doğrulayan bir mesaj görünecektir.

![Tarayıcı konsolunda log mesajını gösteren ekran görüntüsü](../../../../translated_images/browser-console.efaf0b51aaaf67782a29e1a0bb32cc063f189b18e894eb5926e02f1abe864ec2.tr.png)

✅ Verilerin sunucuya güvenli bir şekilde gönderildiğini düşünüyor musunuz? Peki ya biri isteği engelleyebilseydi? Güvenli veri iletişimi hakkında daha fazla bilgi edinmek için [HTTPS](https://en.wikipedia.org/wiki/HTTPS) hakkında okuyabilirsiniz.

## Veri Doğrulama

Eğer kullanıcı adı ayarlamadan yeni bir hesap kaydetmeyi denerseniz, sunucunun [400 (Bad Request)](https://developer.mozilla.org/docs/Web/HTTP/Status/400#:~:text=The%20HyperText%20Transfer%20Protocol%20(HTTP,%2C%20or%20deceptive%20request%20routing).) durum koduyla bir hata döndürdüğünü görebilirsiniz.

Verileri bir sunucuya göndermeden önce, mümkün olduğunda [form verilerini doğrulamak](https://developer.mozilla.org/docs/Learn/Forms/Form_validation) iyi bir uygulamadır, böylece geçerli bir istek gönderdiğinizden emin olabilirsiniz. HTML5 form kontrolleri, çeşitli özellikler kullanarak yerleşik doğrulama sağlar:

- `required`: alan doldurulmalıdır, aksi takdirde form gönderilemez.
- `minlength` ve `maxlength`: metin alanlarında minimum ve maksimum karakter sayısını tanımlar.
- `min` ve `max`: sayısal bir alanın minimum ve maksimum değerini tanımlar.
- `type`: beklenen veri türünü tanımlar, örneğin `number`, `email`, `file` veya [diğer yerleşik türler](https://developer.mozilla.org/docs/Web/HTML/Element/input). Bu özellik ayrıca form kontrolünün görsel render'ını değiştirebilir.
- `pattern`: girilen verilerin geçerli olup olmadığını test etmek için bir [düzenli ifade](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions) deseni tanımlamanıza olanak tanır.
İpucu: Form kontrollerinizin geçerli veya geçersiz olup olmadığını CSS `:valid` ve `:invalid` pseudo-class'larını kullanarak özelleştirebilirsiniz.
### Görev

Yeni bir hesap oluşturmak için kullanıcı adı ve para birimi olmak üzere 2 zorunlu alan vardır, diğer alanlar isteğe bağlıdır. Formun HTML'ini güncelleyin ve hem `required` özelliğini hem de alan etiketindeki metni kullanarak şunları yapın:

```html
<label for="user">Username (required)</label>
<input id="user" name="user" type="text" required>
...
<label for="currency">Currency (required)</label>
<input id="currency" name="currency" type="text" value="$" required>
```

Bu özel sunucu uygulaması, alanların maksimum uzunluğu için belirli sınırlar zorunlu kılmasa da, herhangi bir kullanıcı metin girişi için makul sınırlar tanımlamak her zaman iyi bir uygulamadır.

Metin alanlarına bir `maxlength` özelliği ekleyin:

```html
<input id="user" name="user" type="text" maxlength="20" required>
...
<input id="currency" name="currency" type="text" value="$" maxlength="5" required>
...
<input id="description" name="description" type="text" maxlength="100">
```

Şimdi *Kaydol* düğmesine basarsanız ve bir alan tanımladığımız bir doğrulama kuralına uymazsa, şu şekilde bir şey görmelisiniz:

![Formu göndermeye çalışırken doğrulama hatasını gösteren ekran görüntüsü](../../../../translated_images/validation-error.8bd23e98d416c22f80076d04829a4bb718e0e550fd622862ef59008ccf0d5dce.tr.png)

Bu tür bir doğrulama, herhangi bir veriyi sunucuya göndermeden *önce* gerçekleştirilir ve buna **istemci tarafı** doğrulama denir. Ancak, tüm kontrolleri veri göndermeden gerçekleştirmek her zaman mümkün değildir. Örneğin, burada aynı kullanıcı adına sahip bir hesabın zaten var olup olmadığını sunucuya bir istek göndermeden kontrol edemeyiz. Sunucuda gerçekleştirilen ek doğrulamaya **sunucu tarafı** doğrulama denir.

Genellikle her ikisinin de uygulanması gerekir ve istemci tarafı doğrulama, kullanıcıya anında geri bildirim sağlayarak kullanıcı deneyimini iyileştirirken, sunucu tarafı doğrulama, işlediğiniz kullanıcı verilerinin güvenli ve doğru olmasını sağlamak için çok önemlidir.

---

## 🚀 Meydan Okuma

Kullanıcı zaten mevcutsa HTML'de bir hata mesajı gösterin.

İşte biraz stil ekledikten sonra nihai giriş sayfasının nasıl görünebileceğine dair bir örnek:

![CSS stilleri eklendikten sonra giriş sayfasının ekran görüntüsü](../../../../translated_images/result.96ef01f607bf856aa9789078633e94a4f7664d912f235efce2657299becca483.tr.png)

## Ders Sonrası Test

[Ders sonrası test](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/44)

## Gözden Geçirme ve Kendi Kendine Çalışma

Geliştiriciler, özellikle doğrulama stratejileri konusunda, form oluşturma çabalarında oldukça yaratıcı hale geldiler. [CodePen](https://codepen.com) üzerinden farklı form akışlarını öğrenin; ilginç ve ilham verici formlar bulabilir misiniz?

## Ödev

[Bankacılık uygulamanızı stilize edin](assignment.md)

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.