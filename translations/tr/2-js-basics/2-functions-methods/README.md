<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92e136090efc4341b1d51c37924c1802",
  "translation_date": "2025-08-29T00:26:06+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "tr"
}
-->
# JavaScript Temelleri: Metotlar ve Fonksiyonlar

![JavaScript Temelleri - Fonksiyonlar](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.tr.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ders Öncesi Quiz
[Ders öncesi quiz](https://ff-quizzes.netlify.app)

Kod yazmayı düşündüğümüzde, kodumuzun okunabilir olmasını her zaman sağlamak isteriz. Bu kulağa ters gibi gelse de, kod yazıldığından çok daha fazla kez okunur. Geliştiricinin araç kutusundaki sürdürülebilir kodu sağlamak için temel araçlardan biri **fonksiyon**dur.

[![Metotlar ve Fonksiyonlar](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Metotlar ve Fonksiyonlar")

> 🎥 Metotlar ve fonksiyonlar hakkında bir video için yukarıdaki görsele tıklayın.

> Bu dersi [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon) üzerinden alabilirsiniz!

## Fonksiyonlar

Temelde bir fonksiyon, talep üzerine çalıştırabileceğimiz bir kod bloğudur. Bu, aynı görevi birden fazla kez gerçekleştirmemiz gereken senaryolar için mükemmeldir; mantığı birden fazla yerde çoğaltmak yerine (bu, güncelleme zamanı geldiğinde zor olurdu), onu tek bir yerde merkezileştirebilir ve işlemi gerçekleştirmek istediğimizde çağırabiliriz - hatta diğer fonksiyonlardan fonksiyon çağırabilirsiniz!

Bir fonksiyona isim verebilmek de aynı derecede önemlidir. Bu önemsiz gibi görünse de, isim bir kod bölümünü hızlı bir şekilde belgelemek için bir yol sağlar. Bunu bir düğme üzerindeki etiket gibi düşünebilirsiniz. "Zamanlayıcıyı iptal et" yazan bir düğmeye tıklarsam, saati durduracağını bilirim.

## Fonksiyon Oluşturma ve Çağırma

Bir fonksiyonun sözdizimi şu şekilde görünür:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Bir selamlama mesajı göstermek için bir fonksiyon oluşturmak isteseydim, bu şöyle görünebilirdi:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Fonksiyonumuzu çağırmak (veya çalıştırmak) istediğimizde, fonksiyonun adını ve ardından `()` kullanırız. Fonksiyonumuzun çağrılmadan önce veya sonra tanımlanabileceğini belirtmekte fayda var; JavaScript derleyicisi onu sizin için bulacaktır.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** **Metot** olarak bilinen özel bir fonksiyon türü vardır ve bunu zaten kullanıyordunuz! Aslında, yukarıdaki demoda `console.log` kullandığımızda bunu gördük. Bir metodu bir fonksiyondan ayıran şey, bir metodun bir nesneye (`console` örneğimizde) bağlı olmasıdır, oysa bir fonksiyon serbest dolaşımdadır. Birçok geliştiricinin bu terimleri birbirinin yerine kullandığını duyacaksınız.

### Fonksiyonlar için En İyi Uygulamalar

Fonksiyonlar oluştururken akılda tutulması gereken birkaç en iyi uygulama vardır:

- Her zaman olduğu gibi, fonksiyonun ne yapacağını bilmek için açıklayıcı isimler kullanın
- Kelimeleri birleştirmek için **camelCasing** kullanın
- Fonksiyonlarınızı belirli bir göreve odaklanmış tutun

## Fonksiyona Bilgi Aktarma

Bir fonksiyonu daha yeniden kullanılabilir hale getirmek için genellikle ona bilgi aktarmak istersiniz. Yukarıdaki `displayGreeting` örneğimizi düşünürsek, yalnızca **Hello, world!** gösterecektir. Birinin oluşturabileceği en kullanışlı fonksiyon değil. Biraz daha esnek hale getirmek istersek, selamlanacak kişinin adını belirtmesine izin vermek gibi, bir **parametre** ekleyebiliriz. Parametre (bazen **argüman** olarak da adlandırılır), bir fonksiyona gönderilen ek bilgidir.

Parametreler, tanım kısmında parantez içinde listelenir ve şu şekilde virgülle ayrılır:

```javascript
function name(param, param2, param3) {

}
```

`displayGreeting` fonksiyonumuzu bir isim kabul edecek ve bunu gösterecek şekilde güncelleyebiliriz.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Fonksiyonumuzu çağırmak ve parametreyi aktarmak istediğimizde, bunu parantez içinde belirtiriz.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Varsayılan Değerler

Fonksiyonumuzu daha da esnek hale getirmek için daha fazla parametre ekleyebiliriz. Ancak her değerin belirtilmesini istemezsek ne olur? Selamlama örneğimizle devam edersek, adı gerekli bırakabiliriz (kimi selamladığımızı bilmemiz gerekiyor), ancak selamlamanın kendisinin istenildiği gibi özelleştirilmesine izin vermek isteriz. Birisi bunu özelleştirmek istemezse, bunun yerine bir varsayılan değer sağlarız. Bir parametreye varsayılan bir değer sağlamak için, bir değişken için değer belirlediğimiz gibi ayarlarız - `parameterName = 'defaultValue'`. Tam bir örnek görmek için:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Fonksiyonu çağırdığımızda, `salutation` için bir değer belirlemek isteyip istemediğimize karar verebiliriz.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Dönen Değerler

Şimdiye kadar oluşturduğumuz fonksiyon her zaman [console](https://developer.mozilla.org/docs/Web/API/console)'a çıktı verecek. Bazen bu tam olarak aradığımız şey olabilir, özellikle diğer hizmetleri çağıracak fonksiyonlar oluşturduğumuzda. Ancak bir hesaplama yapmak ve değeri geri döndürmek için bir yardımcı fonksiyon oluşturmak istersem, böylece başka bir yerde kullanabilirim?

Bunu bir **dönen değer** kullanarak yapabiliriz. Dönen bir değer, fonksiyon tarafından döndürülür ve bir değişkende saklanabilir, tıpkı bir dize veya sayı gibi sabit bir değer saklayabileceğimiz gibi.

Bir fonksiyon bir şey döndürüyorsa, `return` anahtar kelimesi kullanılır. `return` anahtar kelimesi döndürülen şeyin bir değerini veya referansını bekler, şu şekilde:

```javascript
return myVariable;
```  

Bir selamlama mesajı oluşturmak ve değeri çağırana geri döndürmek için bir fonksiyon oluşturabiliriz.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Bu fonksiyonu çağırdığımızda, değeri bir değişkende saklayacağız. Bu, sabit bir değeri bir değişkene ayarladığımız şekilde çok benzer (örneğin `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Fonksiyonları Fonksiyonlara Parametre Olarak Geçirme

Programlama kariyerinizde ilerledikçe, parametre olarak fonksiyon kabul eden fonksiyonlarla karşılaşacaksınız. Bu güzel numara, bir şeyin ne zaman gerçekleşeceğini veya tamamlanacağını bilmediğimizde, ancak buna yanıt olarak bir işlem gerçekleştirmemiz gerektiğinde yaygın olarak kullanılır.

Bir örnek olarak, [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)'u düşünün, bir zamanlayıcı başlatır ve tamamlandığında kodu çalıştırır. Hangi kodu çalıştırmak istediğimizi ona söylememiz gerekiyor. Mükemmel bir iş gibi görünüyor!

Aşağıdaki kodu çalıştırırsanız, 3 saniye sonra **3 saniye geçti** mesajını görürsünüz.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### İsimsiz Fonksiyonlar

Oluşturduğumuz şeye bir kez daha bakalım. Bir kez kullanılacak bir isimle bir fonksiyon oluşturuyoruz. Uygulamamız daha karmaşık hale geldikçe, yalnızca bir kez çağrılacak birçok fonksiyon oluşturduğumuzu görebiliriz. Bu ideal değil. Görünüşe göre, her zaman bir isim vermemiz gerekmiyor!

Bir fonksiyonu parametre olarak geçirirken, önceden bir tane oluşturmayı atlayabilir ve bunun yerine bir parametre olarak oluşturabiliriz. Aynı `function` anahtar kelimesini kullanırız, ancak bunu bir parametre olarak oluştururuz.

Yukarıdaki kodu isimsiz bir fonksiyon kullanacak şekilde yeniden yazalım:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Yeni kodumuzu çalıştırırsanız, aynı sonuçları aldığımızı fark edeceksiniz. Bir fonksiyon oluşturduk, ancak ona bir isim vermemiz gerekmedi!

### Fat Arrow Fonksiyonları

Birçok programlama dilinde (JavaScript dahil) yaygın olan bir kısayol, **ok** veya **fat arrow** fonksiyon olarak adlandırılan bir şey kullanma yeteneğidir. `=>` adlı özel bir gösterge kullanır, bu bir oka benzer - bu yüzden adı bu! `=>` kullanarak, `function` anahtar kelimesini atlayabiliriz.

Kodumuzu bir kez daha fat arrow fonksiyon kullanacak şekilde yeniden yazalım:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Hangi Stratejiyi Ne Zaman Kullanmalı

Artık bir fonksiyonu parametre olarak geçmek için üç yolumuz olduğunu gördünüz ve her birini ne zaman kullanacağınızı merak ediyor olabilirsiniz. Fonksiyonu birden fazla kez kullanacağınızı biliyorsanız, normal şekilde oluşturun. Sadece bir konum için kullanacaksanız, genellikle isimsiz bir fonksiyon kullanmak en iyisidir. Fat arrow fonksiyon mu yoksa daha geleneksel `function` sözdizimini mi kullanacağınız size bağlıdır, ancak çoğu modern geliştiricinin `=>` tercih ettiğini fark edeceksiniz.

---

## 🚀 Zorluk

Fonksiyonlar ve metotlar arasındaki farkı bir cümleyle ifade edebilir misiniz? Deneyin!

## Ders Sonrası Quiz
[Ders sonrası quiz](https://ff-quizzes.netlify.app)

## Gözden Geçirme ve Kendi Kendine Çalışma

[Ok fonksiyonları hakkında biraz daha okumaya](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) değer, çünkü kod tabanlarında giderek daha fazla kullanılıyorlar. Bir fonksiyon yazmayı ve ardından bu sözdizimiyle yeniden yazmayı pratik edin.

## Ödev

[Fonksiyonlarla Eğlence](assignment.md)

---

**Feragatname**:  
Bu belge, [Co-op Translator](https://github.com/Azure/co-op-translator) adlı yapay zeka çeviri hizmeti kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel bir insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlama veya yanlış yorumlamalardan sorumlu değiliz.