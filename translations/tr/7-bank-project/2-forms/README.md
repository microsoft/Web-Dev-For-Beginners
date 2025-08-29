<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8baca047d77a5f43fa4099c0578afa42",
  "translation_date": "2025-08-29T00:18:58+00:00",
  "source_file": "7-bank-project/2-forms/README.md",
  "language_code": "tr"
}
-->
# Bankacılık Uygulaması Bölüm 2: Giriş ve Kayıt Formu Oluşturma

## Ders Öncesi Test

[Ders öncesi testi](https://ff-quizzes.netlify.app/web/quiz/43)

### Giriş

Neredeyse tüm modern web uygulamalarında, kendi özel alanınıza sahip olmak için bir hesap oluşturabilirsiniz. Birden fazla kullanıcı aynı anda bir web uygulamasına erişebildiğinden, her kullanıcının kişisel verilerini ayrı ayrı saklamak ve hangi bilgilerin görüntüleneceğini seçmek için bir mekanizmaya ihtiyacınız vardır. [Kullanıcı kimliğini güvenli bir şekilde yönetmeyi](https://en.wikipedia.org/wiki/Authentication) bu derste ele almayacağız çünkü bu başlı başına kapsamlı bir konudur, ancak her kullanıcının uygulamamızda bir (veya daha fazla) banka hesabı oluşturabilmesini sağlayacağız.

Bu bölümde, web uygulamamıza giriş ve kayıt eklemek için HTML formlarını kullanacağız. Verileri bir sunucu API'sine programlı bir şekilde nasıl göndereceğimizi ve nihayetinde kullanıcı girdileri için temel doğrulama kurallarını nasıl tanımlayacağımızı göreceğiz.

### Ön Koşul

Bu ders için web uygulamasının [HTML şablonları ve yönlendirme](../1-template-route/README.md) bölümünü tamamlamış olmanız gerekiyor. Ayrıca [Node.js](https://nodejs.org) yüklemiş ve [sunucu API'sini çalıştırmış](../api/README.md) olmanız gerekiyor, böylece hesap oluşturmak için veri gönderebilirsiniz.

**Dikkat Edin**
Aynı anda aşağıda listelenen iki terminal çalıştırmanız gerekecek:
1. [HTML şablonları ve yönlendirme](../1-template-route/README.md) dersinde oluşturduğumuz ana banka uygulaması için
2. Yukarıda kurduğumuz [Banka Uygulaması sunucu API'si](../api/README.md) için.

Dersin geri kalanını takip edebilmek için iki sunucunun da çalışır durumda olması gerekiyor. Bunlar farklı portlarda (port `3000` ve port `5000`) dinliyor, bu yüzden her şey sorunsuz çalışmalı.

Sunucunun düzgün çalıştığını test etmek için bir terminalde şu komutu çalıştırabilirsiniz:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Form ve Kontroller

`<form>` elementi, kullanıcının etkileşimli kontrollerle veri girebileceği ve gönderebileceği bir HTML belgesinin bir bölümünü kapsar. Bir form içinde kullanılabilecek her türlü kullanıcı arayüzü (UI) kontrolü vardır, bunların en yaygın olanı `<input>` ve `<button>` elementleridir.

Kullanıcının kullanıcı adını girebileceği bir alan oluşturmak için, `<input>` elementinin farklı [türlerini](https://developer.mozilla.org/docs/Web/HTML/Element/input) kullanabilirsiniz. Örneğin:

```html
<input id="username" name="username" type="text">
```

`name` özelliği, form verileri gönderildiğinde kullanılacak özellik adını belirtir. `id` özelliği ise bir `<label>` ile form kontrolünü ilişkilendirmek için kullanılır.

> [`<input>` türlerinin](https://developer.mozilla.org/docs/Web/HTML/Element/input) ve [diğer form kontrollerinin](https://developer.mozilla.org/docs/Learn/Forms/Other_form_controls) tam listesine göz atarak, UI'nizi oluştururken kullanabileceğiniz tüm yerel UI öğeleri hakkında fikir edinebilirsiniz.

✅ `<input>` bir [boş elementtir](https://developer.mozilla.org/docs/Glossary/Empty_element), bu yüzden eşleşen bir kapanış etiketi eklememelisiniz. Ancak, kendi kendini kapatan `<input/>` notasyonunu kullanabilirsiniz, ancak bu gerekli değildir.

Bir form içindeki `<button>` elementi biraz özeldir. Eğer `type` özelliğini belirtmezseniz, basıldığında form verilerini otomatik olarak sunucuya gönderir. İşte olası `type` değerleri:

- `submit`: Bir `<form>` içinde varsayılan olarak, düğme form gönderme işlemini tetikler.
- `reset`: Düğme, tüm form kontrollerini başlangıç değerlerine sıfırlar.
- `button`: Düğme basıldığında varsayılan bir davranış atamaz. Bunun yerine JavaScript kullanarak özel eylemler atayabilirsiniz.

### Görev

`login` şablonuna bir form ekleyerek başlayalım. Bir *kullanıcı adı* alanına ve bir *Giriş* düğmesine ihtiyacımız olacak.

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

Daha yakından bakarsanız, burada bir `<label>` elementi de eklediğimizi fark edebilirsiniz. `<label>` elementleri, kullanıcı arayüzü kontrollerine bir ad eklemek için kullanılır, örneğin kullanıcı adı alanımız gibi. Etiketler, formlarınızın okunabilirliği için önemlidir, ancak aynı zamanda ek avantajlar da sağlar:

- Bir etiketi bir form kontrolüyle ilişkilendirerek, yardımcı teknolojiler (örneğin ekran okuyucular) kullanan kullanıcıların hangi verileri sağlamaları gerektiğini anlamalarına yardımcı olur.
- Etikete tıklayarak, ilgili girdiye doğrudan odaklanabilirsiniz, bu da dokunmatik ekranlı cihazlarda erişimi kolaylaştırır.

> Web'de [erişilebilirlik](https://developer.mozilla.org/docs/Learn/Accessibility/What_is_accessibility) genellikle göz ardı edilen çok önemli bir konudur. [Semantik HTML elementleri](https://developer.mozilla.org/docs/Learn/Accessibility/HTML) sayesinde, bunları doğru bir şekilde kullanırsanız erişilebilir içerik oluşturmak zor değildir. [Erişilebilirlik hakkında daha fazla bilgi edinebilirsiniz](https://developer.mozilla.org/docs/Web/Accessibility) ve yaygın hatalardan kaçınarak sorumlu bir geliştirici olabilirsiniz.

Şimdi, önceki formun hemen altına bir kayıt formu ekleyelim:

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

`value` özelliğini kullanarak belirli bir giriş için varsayılan bir değer tanımlayabiliriz. Ayrıca, `balance` için olan girdinin `number` türüne sahip olduğunu fark edin. Diğer girdilerden farklı mı görünüyor? Onunla etkileşim kurmayı deneyin.

✅ Sadece klavye kullanarak formlarda gezinip etkileşim kurabilir misiniz? Bunu nasıl yapardınız?

## Verileri Sunucuya Gönderme

Artık işlevsel bir kullanıcı arayüzümüz olduğuna göre, bir sonraki adım verileri sunucumuza göndermek. Mevcut kodumuzu kullanarak hızlı bir test yapalım: *Giriş Yap* veya *Kayıt Ol* düğmesine tıklarsanız ne olur?

Tarayıcınızın URL bölümünde bir değişiklik fark ettiniz mi?

![Kayıt Ol düğmesine tıkladıktan sonra tarayıcı URL'sindeki değişikliğin ekran görüntüsü](../../../../translated_images/click-register.e89a30bf0d4bc9ca867dc537c4cea679a7c26368bd790969082f524fed2355bc.tr.png)

Bir `<form>` için varsayılan eylem, formu mevcut sunucu URL'sine [GET yöntemi](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3) kullanarak göndermek ve form verilerini doğrudan URL'ye eklemektir. Ancak bu yöntemin bazı dezavantajları vardır:

- Gönderilen veri boyutu çok sınırlıdır (yaklaşık 2000 karakter)
- Veriler URL'de doğrudan görünür (şifreler için iyi değil)
- Dosya yüklemeleriyle çalışmaz

Bu nedenle, form verilerini HTTP isteğinin gövdesinde sunucuya gönderen ve önceki sınırlamaların hiçbirine sahip olmayan [POST yöntemini](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) kullanabilirsiniz.

> POST, veri göndermek için en yaygın kullanılan yöntemdir, ancak [belirli senaryolarda](https://www.w3.org/2001/tag/doc/whenToUseGet.html) bir arama alanı uygularken olduğu gibi GET yöntemini kullanmak tercih edilebilir.

### Görev

Kayıt formuna `action` ve `method` özelliklerini ekleyin:

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

Şimdi adınızı kullanarak yeni bir hesap kaydetmeyi deneyin. *Kayıt Ol* düğmesine tıkladıktan sonra şu gibi bir şey görmelisiniz:

![localhost:5000/api/accounts adresinde bir JSON dizesi gösteren bir tarayıcı penceresi](../../../../translated_images/form-post.61de4ca1b964d91a9e338416e19f218504dd0af5f762fbebabfe7ae80edf885f.tr.png)

Her şey yolunda giderse, sunucu isteğinize oluşturulan hesap verilerini içeren bir [JSON](https://www.json.org/json-en.html) yanıtı ile cevap vermelidir.

✅ Aynı adla tekrar kayıt olmayı deneyin. Ne olur?

## Sayfa Yenilemeden Veri Gönderme

Muhtemelen fark ettiğiniz gibi, az önce kullandığımız yaklaşımda küçük bir sorun var: formu gönderdiğimizde uygulamamızdan çıkıyoruz ve tarayıcı sunucu URL'sine yönlendiriyor. Web uygulamamızda tüm sayfa yenilemelerinden kaçınmaya çalışıyoruz çünkü bir [Tek sayfa uygulaması (SPA)](https://en.wikipedia.org/wiki/Single-page_application) yapıyoruz.

Form verilerini sayfa yenilemeden sunucuya göndermek için JavaScript kodu kullanmamız gerekiyor. Bir `<form>` elementinin `action` özelliğine bir URL koymak yerine, `javascript:` dizesiyle başlayan herhangi bir JavaScript kodunu kullanarak özel bir işlem gerçekleştirebilirsiniz. Bunu kullanmak, tarayıcının daha önce otomatik olarak yaptığı bazı görevleri sizin uygulamanız gerektiği anlamına gelir:

- Form verilerini almak
- Form verilerini uygun bir formata dönüştürmek ve kodlamak
- HTTP isteği oluşturmak ve sunucuya göndermek

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

Burada, `getElementById()` kullanarak form elementini alıyoruz ve [`FormData`](https://developer.mozilla.org/docs/Web/API/FormData) yardımıyla form kontrollerinden değerleri anahtar/değer çiftleri olarak çıkarıyoruz. Daha sonra verileri [`Object.fromEntries()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) kullanarak düzenli bir nesneye dönüştürüyoruz ve son olarak verileri web üzerinde yaygın olarak kullanılan bir format olan [JSON](https://www.json.org/json-en.html) olarak serileştiriyoruz.

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

Bu fonksiyon ne yapıyor? İlk olarak, burada `async` anahtar kelimesine dikkat edin. Bu, fonksiyonun [**asenkron**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) kod içereceği anlamına gelir. `await` anahtar kelimesiyle birlikte kullanıldığında, burada olduğu gibi sunucu yanıtını beklemek gibi asenkron kodun yürütülmesini beklemeye olanak tanır.

`fetch()` API'sini kullanarak JSON verilerini sunucuya gönderiyoruz. Bu yöntem 2 parametre alır:

- Sunucunun URL'si, bu yüzden buraya `//localhost:5000/api/accounts` koyuyoruz.
- İsteğin ayarları. Burada yöntemi `POST` olarak ayarladığımız ve isteğin `body` kısmını sağladığımız yer. JSON verilerini sunucuya gönderdiğimiz için, içeriğin nasıl yorumlanacağını sunucuya bildirmek için `Content-Type` başlığını `application/json` olarak ayarlamamız gerekiyor.

Sunucu isteğe JSON ile yanıt vereceği için, JSON içeriğini ayrıştırmak ve ortaya çıkan nesneyi döndürmek için `await response.json()` kullanabiliriz. Bu yöntemin asenkron olduğunu unutmayın, bu yüzden ayrıştırma sırasında oluşabilecek hataların da yakalanmasını sağlamak için burada `await` anahtar kelimesini kullanıyoruz.

Şimdi `register` fonksiyonuna `createAccount()` çağrısı eklemek için biraz kod ekleyin:

```js
const result = await createAccount(jsonData);
```

Burada `await` anahtar kelimesini kullandığımız için, `register` fonksiyonunun başına `async` anahtar kelimesini eklememiz gerekiyor:

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

Bu biraz uzun sürdü ama başardık! [Tarayıcı geliştirici araçlarını](https://developer.mozilla.org/docs/Learn/Common_questions/What_are_browser_developer_tools) açarsanız ve yeni bir hesap kaydetmeyi denerseniz, web sayfasında herhangi bir değişiklik görmemelisiniz, ancak her şeyin çalıştığını doğrulayan bir mesaj konsolda görünecektir.

![Tarayıcı konsolunda log mesajını gösteren ekran görüntüsü](../../../../translated_images/browser-console.efaf0b51aaaf67782a29e1a0bb32cc063f189b18e894eb5926e02f1abe864ec2.tr.png)

✅ Verilerin sunucuya güvenli bir şekilde gönderildiğini düşünüyor musunuz? Ya biri isteği engelleyebilirse? Güvenli veri iletişimi hakkında daha fazla bilgi edinmek için [HTTPS](https://en.wikipedia.org/wiki/HTTPS) hakkında okuyabilirsiniz.

## Veri Doğrulama

Eğer önce bir kullanıcı adı ayarlamadan yeni bir hesap kaydetmeyi denerseniz, sunucunun [400 (Geçersiz İstek)](https://developer.mozilla.org/docs/Web/HTTP/Status/400#:~:text=The%20HyperText%20Transfer%20Protocol%20(HTTP,%2C%20or%20deceptive%20request%20routing).) durum koduyla bir hata döndürdüğünü görebilirsiniz.

Bir sunucuya veri göndermeden önce, mümkün olduğunda [form verilerini doğrulamak](https://developer.mozilla.org/docs/Learn/Forms/Form_validation) iyi bir uygulamadır, böylece geçerli bir istek gönderdiğinizden emin olabilirsiniz. HTML5 form kontrolleri, çeşitli özellikler kullanarak yerleşik doğrulama sağlar:

- `required`: Alan doldurulmadığı sürece form gönderilemez.
- `minlength` ve `maxlength`: Metin alanlarında minimum ve maksimum karakter sayısını tanımlar.
- `min` ve `max`: Sayısal bir alanın minimum ve maksimum değerini tanımlar.
- `type`: Beklenen veri türünü tanımlar, örneğin `number`, `email`, `file` veya [diğer yerleşik türler](https://developer.mozilla.org/docs/Web/HTML/Element/input). Bu özellik ayrıca form kontrolünün görsel görünümünü değiştirebilir.
- `pattern`: Girilen verilerin geçerli olup olmadığını test etmek için bir [düzenli ifade](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions) deseni tanımlamaya olanak tanır.
İpucu: Form kontrollerinizin geçerli veya geçersiz olup olmadığına bağlı olarak görünümünü özelleştirmek için `:valid` ve `:invalid` CSS pseudo-class'larını kullanabilirsiniz.
### Görev

Geçerli bir yeni hesap oluşturmak için gerekli olan iki alan vardır: kullanıcı adı ve para birimi. Diğer alanlar isteğe bağlıdır. Formun HTML'ini güncelleyin ve hem `required` özelliğini hem de alanın etiketindeki metni kullanarak şunları yapın:

```html
<label for="user">Username (required)</label>
<input id="user" name="user" type="text" required>
...
<label for="currency">Currency (required)</label>
<input id="currency" name="currency" type="text" value="$" required>
```

Bu özel sunucu uygulaması, alanların maksimum uzunluğu üzerinde belirli sınırları zorlamasa da, kullanıcı metin girişleri için makul sınırlar tanımlamak her zaman iyi bir uygulamadır.

Metin alanlarına bir `maxlength` özelliği ekleyin:

```html
<input id="user" name="user" type="text" maxlength="20" required>
...
<input id="currency" name="currency" type="text" value="$" maxlength="5" required>
...
<input id="description" name="description" type="text" maxlength="100">
```

Şimdi *Kaydol* düğmesine basarsanız ve bir alan tanımladığımız bir doğrulama kuralına uymazsa, aşağıdaki gibi bir şey görmelisiniz:

![Formu göndermeye çalışırken doğrulama hatasını gösteren ekran görüntüsü](../../../../translated_images/validation-error.8bd23e98d416c22f80076d04829a4bb718e0e550fd622862ef59008ccf0d5dce.tr.png)

Bu tür doğrulama, herhangi bir veri sunucuya gönderilmeden *önce* gerçekleştirilir ve **istemci tarafı** doğrulama olarak adlandırılır. Ancak, tüm kontrolleri veri göndermeden gerçekleştirmek her zaman mümkün değildir. Örneğin, burada aynı kullanıcı adına sahip bir hesabın zaten var olup olmadığını sunucuya bir istek göndermeden kontrol edemeyiz. Sunucuda gerçekleştirilen ek doğrulama ise **sunucu tarafı** doğrulama olarak adlandırılır.

Genellikle her ikisinin de uygulanması gerekir ve istemci tarafı doğrulama, kullanıcıya anında geri bildirim sağlayarak kullanıcı deneyimini iyileştirirken, sunucu tarafı doğrulama, işlediğiniz kullanıcı verilerinin sağlam ve güvenli olmasını sağlamak için çok önemlidir.

---

## 🚀 Meydan Okuma

HTML'de kullanıcı zaten mevcutsa bir hata mesajı gösterin.

İşte biraz stil ekledikten sonra son giriş sayfasının nasıl görünebileceğine dair bir örnek:

![CSS stilleri eklendikten sonra giriş sayfasının ekran görüntüsü](../../../../translated_images/result.96ef01f607bf856aa9789078633e94a4f7664d912f235efce2657299becca483.tr.png)

## Ders Sonrası Test

[Ders sonrası test](https://ff-quizzes.netlify.app/web/quiz/44)

## Gözden Geçirme ve Kendi Kendine Çalışma

Geliştiriciler, özellikle doğrulama stratejileri konusunda, form oluşturma çabalarında oldukça yaratıcı hale geldiler. [CodePen](https://codepen.com) üzerinden farklı form akışlarını öğrenin; ilginç ve ilham verici formlar bulabilir misiniz?

## Ödev

[Bankacılık uygulamanızı stilize edin](assignment.md)

---

**Feragatname**:  
Bu belge, [Co-op Translator](https://github.com/Azure/co-op-translator) adlı yapay zeka çeviri hizmeti kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlama veya yanlış yorumlamalardan sorumlu değiliz.