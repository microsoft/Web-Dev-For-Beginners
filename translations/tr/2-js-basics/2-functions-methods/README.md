<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ec43b53e8e015cdabfd3ad877b3c28e5",
  "translation_date": "2025-10-22T23:44:37+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "tr"
}
-->
# JavaScript Temelleri: Metotlar ve Fonksiyonlar

![JavaScript Temelleri - Fonksiyonlar](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.tr.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ders Öncesi Quiz
[Ders öncesi quiz](https://ff-quizzes.netlify.app)

Aynı kodu tekrar tekrar yazmak, programlamanın en yaygın sıkıntılarından biridir. Fonksiyonlar, kodu yeniden kullanılabilir bloklar halinde paketlemenize olanak tanıyarak bu sorunu çözer. Fonksiyonları, Henry Ford'un montaj hattını devrimsel hale getiren standart parçalar gibi düşünebilirsiniz – bir kez güvenilir bir bileşen oluşturduğunuzda, onu yeniden sıfırdan yapmadan ihtiyaç duyduğunuz her yerde kullanabilirsiniz.

Fonksiyonlar, kod parçalarını paketlemenize ve programınız boyunca yeniden kullanmanıza olanak tanır. Aynı mantığı her yerde kopyalayıp yapıştırmak yerine, bir kez bir fonksiyon oluşturabilir ve ihtiyaç duyduğunuzda çağırabilirsiniz. Bu yaklaşım kodunuzu düzenli tutar ve güncellemeleri çok daha kolay hale getirir.

Bu derste, kendi fonksiyonlarınızı nasıl oluşturacağınızı, onlara nasıl bilgi aktaracağınızı ve faydalı sonuçlar almayı öğreneceksiniz. Fonksiyonlar ile metotlar arasındaki farkı keşfedecek, modern sözdizimi yaklaşımlarını öğrenecek ve fonksiyonların diğer fonksiyonlarla nasıl çalışabileceğini göreceksiniz. Bu kavramları adım adım oluşturacağız.

[![Metotlar ve Fonksiyonlar](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Metotlar ve Fonksiyonlar")

> 🎥 Metotlar ve fonksiyonlar hakkında bir video için yukarıdaki görsele tıklayın.

> Bu dersi [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon) üzerinden alabilirsiniz!

## Fonksiyonlar

Bir fonksiyon, belirli bir görevi yerine getiren bağımsız bir kod bloğudur. İhtiyaç duyduğunuzda çalıştırabileceğiniz mantığı kapsar.

Programınız boyunca aynı kodu birden fazla kez yazmak yerine, bunu bir fonksiyon içinde paketleyebilir ve ihtiyaç duyduğunuzda çağırabilirsiniz. Bu yaklaşım kodunuzu temiz tutar ve güncellemeleri çok daha kolay hale getirir. Kod tabanınızda 20 farklı yerde dağılmış mantığı değiştirmek zorunda kalırsanız bakım zorluğunu düşünün.

Fonksiyonlarınıza açıklayıcı isimler vermek çok önemlidir. İyi adlandırılmış bir fonksiyon amacını açıkça iletir – `cancelTimer()` gördüğünüzde, ne yaptığını hemen anlarsınız, tıpkı açıkça etiketlenmiş bir düğmenin tıklanıldığında ne olacağını size söylemesi gibi.

## Fonksiyon oluşturma ve çağırma

Bir fonksiyonun nasıl oluşturulacağını inceleyelim. Sözdizimi tutarlı bir deseni takip eder:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Bunu parçalayalım:
- `function` anahtar kelimesi JavaScript'e "Hey, bir fonksiyon oluşturuyorum!" der.
- `nameOfFunction` fonksiyonunuza açıklayıcı bir isim verdiğiniz yerdir.
- Parantezler `()` parametreler ekleyebileceğiniz yerdir (buna birazdan geleceğiz).
- Süslü parantezler `{}` fonksiyonu çağırdığınızda çalışacak olan gerçek kodu içerir.

Bunu eylemde görmek için basit bir selamlama fonksiyonu oluşturalım:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Bu fonksiyon konsola "Hello, world!" yazdırır. Bir kez tanımladıktan sonra, ihtiyacınız olduğu kadar kullanabilirsiniz.

Fonksiyonunuzu çalıştırmak (veya "çağırmak") için adını yazın ve ardından parantez ekleyin. JavaScript, fonksiyonunuzu çağırmadan önce veya sonra tanımlamanıza izin verir – JavaScript motoru yürütme sırasını halleder.

```javascript
// calling our function
displayGreeting();
```

Bu satırı çalıştırdığınızda, `displayGreeting` fonksiyonunuzun içindeki tüm kodu çalıştırır ve tarayıcınızın konsolunda "Hello, world!" görüntüler. Bu fonksiyonu tekrar tekrar çağırabilirsiniz.

> **Not:** Bu derslerde **metotlar** kullanıyordunuz. `console.log()` bir metottur – esasen `console` nesnesine ait bir fonksiyondur. Temel fark, metotların nesnelere bağlı olması, fonksiyonların ise bağımsız olmasıdır. Birçok geliştirici bu terimleri günlük konuşmalarda birbirinin yerine kullanır.

### Fonksiyon yazma en iyi uygulamaları

İşte harika fonksiyonlar yazmanıza yardımcı olacak birkaç ipucu:

- Fonksiyonlarınıza açık, açıklayıcı isimler verin – gelecekteki kendinize teşekkür edeceksiniz!
- Çok kelimeli isimler için **camelCasing** kullanın (örneğin, `calculateTotal` yerine `calculate_total`).
- Her fonksiyonun bir şeyi iyi yapmaya odaklanmasını sağlayın.

## Fonksiyona bilgi aktarma

`displayGreeting` fonksiyonumuz sınırlı – herkes için sadece "Hello, world!" görüntüleyebilir. Parametreler, fonksiyonları daha esnek ve kullanışlı hale getirmemizi sağlar.

**Parametreler**, fonksiyonu her kullandığınızda farklı değerler ekleyebileceğiniz yerler gibi davranır. Bu şekilde, aynı fonksiyon her çağrıda farklı bilgilerle çalışabilir.

Fonksiyonunuzu tanımlarken parametreleri parantez içine listeleyin ve birden fazla parametreyi virgülle ayırın:

```javascript
function name(param, param2, param3) {

}
```

Her parametre bir yer tutucu gibi davranır – birisi fonksiyonunuzu çağırdığında, bu yerlere yerleştirilecek gerçek değerler sağlar.

Selamlama fonksiyonumuzu birinin adını kabul edecek şekilde güncelleyelim:

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Adı doğrudan mesajımıza eklemek için ters tırnak işaretleri (`` ` ``) ve `${}` kullandığımıza dikkat edin – buna şablon dizesi denir ve değişkenlerle karışık dizeler oluşturmanın gerçekten kullanışlı bir yoludur.

Şimdi fonksiyonumuzu çağırdığımızda, istediğimiz herhangi bir adı geçirebiliriz:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

JavaScript, `'Christopher'` dizgesini alır, `name` parametresine atar ve "Hello, Christopher!" şeklinde kişiselleştirilmiş mesajı oluşturur.

## Varsayılan değerler

Bazı parametreleri isteğe bağlı yapmak istersek ne olur? İşte burada varsayılan değerler devreye girer!

Diyelim ki insanlar selamlama kelimesini özelleştirebilsin istiyoruz, ancak bir şey belirtmezlerse, yedek olarak "Hello" kullanacağız. Varsayılan değerleri, bir değişken ayarlamak gibi eşittir işareti kullanarak ayarlayabilirsiniz:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Burada, `name` hala gereklidir, ancak `salutation` için kimse farklı bir selamlama sağlamazsa `'Hello'` yedek değeri vardır.

Artık bu fonksiyonu iki farklı şekilde çağırabiliriz:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

İlk çağrıda, selamlama belirtmediğimiz için JavaScript varsayılan "Hello"yu kullanır. İkinci çağrıda ise özel "Hi" kullanır. Bu esneklik, fonksiyonları farklı senaryolara uyarlanabilir hale getirir.

## Geri dönen değerler

Şimdiye kadar fonksiyonlarımız sadece konsola mesajlar yazdırıyordu, ancak bir fonksiyonun bir şey hesaplamasını ve sonucu size geri vermesini istiyorsanız ne olur?

İşte burada **geri dönen değerler** devreye girer. Bir şey görüntülemek yerine, bir fonksiyon size bir değer verebilir ve bu değeri bir değişkende saklayabilir veya kodunuzun diğer bölümlerinde kullanabilirsiniz.

Bir değeri geri göndermek için `return` anahtar kelimesini ve ardından geri göndermek istediğiniz şeyi kullanırsınız:

```javascript
return myVariable;
```

Önemli bir nokta: Bir fonksiyon bir `return` ifadesine ulaştığında, hemen çalışmayı durdurur ve bu değeri kendisini çağıran kişiye geri gönderir.

Selamlama fonksiyonumuzu mesajı yazdırmak yerine geri dönecek şekilde değiştirelim:

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Artık bu fonksiyon selamlamayı yazdırmak yerine mesajı oluşturur ve bize geri verir.

Geri dönen değeri kullanmak için, diğer herhangi bir değer gibi bir değişkende saklayabiliriz:

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

Artık `greetingMessage` "Hello, Christopher" içerir ve bunu kodunuzun herhangi bir yerinde kullanabilirsiniz – bir web sayfasında görüntülemek, bir e-postaya eklemek veya başka bir fonksiyona iletmek için.

## Fonksiyonları diğer fonksiyonlara parametre olarak geçirme

Fonksiyonlar, diğer fonksiyonlara parametre olarak geçirilebilir. Bu kavram başlangıçta karmaşık görünebilir, ancak esnek programlama desenlerini mümkün kılan güçlü bir özelliktir.

Bu desen, "bir şey olduğunda, şu diğer şeyi yap" demek istediğinizde çok yaygındır. Örneğin, "zamanlayıcı bittiğinde, bu kodu çalıştır" veya "kullanıcı düğmeye tıkladığında, bu fonksiyonu çağır."

`setTimeout`'a bakalım, bu yerleşik bir fonksiyondur ve belirli bir süre bekler, ardından bir kodu çalıştırır. Hangi kodu çalıştıracağını söylememiz gerekir – fonksiyon geçirme için mükemmel bir kullanım durumu!

Bu kodu deneyin – 3 saniye sonra bir mesaj göreceksiniz:

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

`setTimeout`'a `displayDone`'ı (parantezsiz) geçirdiğimize dikkat edin. Fonksiyonu kendimiz çağırmıyoruz – onu `setTimeout`'a teslim ediyoruz ve "3 saniye içinde bunu çağır" diyoruz.

### İsimsiz fonksiyonlar

Bazen bir fonksiyona sadece bir şey için ihtiyacınız olur ve ona bir isim vermek istemezsiniz. Düşünün – bir fonksiyonu sadece bir kez kullanıyorsanız, neden kodunuzu fazladan bir isimle karmaşıklaştırasınız?

JavaScript, **isimsiz fonksiyonlar** oluşturmanıza olanak tanır – sadece ihtiyacınız olan yerde tanımlayabileceğiniz isimsiz fonksiyonlar.

Zamanlayıcı örneğimizi bir isimsiz fonksiyon kullanarak yeniden yazabiliriz:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Bu aynı sonucu sağlar, ancak fonksiyon doğrudan `setTimeout` çağrısı içinde tanımlanır, ayrı bir fonksiyon bildirimi gereksiz hale gelir.

### Ok fonksiyonları

Modern JavaScript, **ok fonksiyonları** adı verilen daha kısa bir fonksiyon yazma yöntemi sunar. `=>` (ok gibi görünür – anladınız mı?) kullanırlar ve geliştiriciler arasında oldukça popülerdir.

Ok fonksiyonları, `function` anahtar kelimesini atlamanıza ve daha özlü kod yazmanıza olanak tanır.

Zamanlayıcı örneğimizi bir ok fonksiyonu kullanarak yazalım:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

`()` parametrelerin gideceği yerdir (bu durumda boş), ardından ok `=>` gelir ve son olarak süslü parantezler içinde fonksiyon gövdesi. Bu, daha özlü bir sözdizimiyle aynı işlevselliği sağlar.

### Hangi stratejiyi ne zaman kullanmalı

Hangi yaklaşımı kullanmalısınız? Pratik bir kılavuz: Fonksiyonu birden fazla kez kullanacaksanız, ona bir isim verin ve ayrı olarak tanımlayın. Sadece belirli bir kullanım içinse, bir isimsiz fonksiyon düşünün. Hem ok fonksiyonları hem de geleneksel sözdizimi geçerli seçeneklerdir, ancak ok fonksiyonları modern JavaScript kod tabanlarında yaygındır.

---



## 🚀 Meydan Okuma

Fonksiyonlar ve metotlar arasındaki farkı bir cümleyle açıklayabilir misiniz? Deneyin!

## GitHub Copilot Agent Meydan Okuması 🚀

Agent modunu kullanarak aşağıdaki meydan okumayı tamamlayın:

**Açıklama:** Bu derste ele alınan farklı fonksiyon kavramlarını içeren matematiksel fonksiyonlardan oluşan bir yardımcı kütüphane oluşturun. Parametreler, varsayılan değerler, geri dönen değerler ve ok fonksiyonlarını içermelidir.

**Talimat:** `mathUtils.js` adlı bir JavaScript dosyası oluşturun ve şu fonksiyonları içersin:
1. İki parametre alan ve toplamlarını döndüren bir `add` fonksiyonu
2. Varsayılan parametre değerleri olan bir `multiply` fonksiyonu (ikinci parametre varsayılan olarak 1)
3. Bir sayı alıp karesini döndüren bir ok fonksiyonu `square`
4. Başka bir fonksiyonu parametre olarak ve iki sayı kabul eden, ardından bu fonksiyonu bu sayılara uygulayan bir `calculate` fonksiyonu
5. Her fonksiyonu uygun test durumlarıyla çağırmayı gösterin

[Agent modunu](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) burada öğrenin.

## Ders Sonrası Quiz
[Ders sonrası quiz](https://ff-quizzes.netlify.app)

## Gözden Geçirme ve Kendi Kendine Çalışma

[Ok fonksiyonları hakkında biraz daha okumaya](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) değer, çünkü kod tabanlarında giderek daha fazla kullanılıyorlar. Bir fonksiyon yazmayı ve ardından bu sözdizimiyle yeniden yazmayı deneyin.

## Ödev

[Fonksiyonlarla Eğlence](assignment.md)

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.