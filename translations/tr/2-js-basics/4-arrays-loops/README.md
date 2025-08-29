<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9029f96b0e034839c1799f4595e4bb66",
  "translation_date": "2025-08-29T00:27:26+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "tr"
}
-->
# JavaScript Temelleri: Diziler ve Döngüler

![JavaScript Temelleri - Diziler](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.tr.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ders Öncesi Test
[Ders öncesi testi](https://ff-quizzes.netlify.app/web/quiz/13)

Bu ders, webde etkileşim sağlayan JavaScript dilinin temellerini kapsar. Bu derste, verileri işlemek için kullanılan diziler ve döngüler hakkında bilgi edineceksiniz.

[![Diziler](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Diziler")

[![Döngüler](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Döngüler")

> 🎥 Diziler ve döngüler hakkında videolar için yukarıdaki görsellere tıklayın.

> Bu dersi [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon) üzerinden alabilirsiniz!

## Diziler

Verilerle çalışmak, herhangi bir programlama dilinde yaygın bir görevdir ve veriler diziler gibi yapısal bir formatta düzenlendiğinde bu görev çok daha kolay hale gelir. Dizilerle, veriler bir listeye benzer bir yapıda saklanır. Dizilerin en büyük avantajlarından biri, tek bir dizi içinde farklı türde veriler saklayabilmenizdir.

✅ Diziler hayatımızın her yerinde! Güneş paneli dizisi gibi gerçek hayattan bir dizi örneği düşünebilir misiniz?

Bir dizi için sözdizimi, köşeli parantez çiftidir.

```javascript
let myArray = [];
```

Bu, boş bir dizidir, ancak diziler veriyle önceden doldurulmuş olarak da tanımlanabilir. Bir dizideki birden fazla değer virgülle ayrılır.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

Dizi değerlerine, **indeks** adı verilen benzersiz bir değer atanır. Bu indeks, dizinin başlangıcından olan uzaklığına göre atanmış bir tam sayıdır. Yukarıdaki örnekte, "Chocolate" dizesinin indeksi 0, "Rocky Road" ise 4'tür. Dizi değerlerini almak, değiştirmek veya eklemek için indeksi köşeli parantezlerle kullanabilirsiniz.

✅ Dizilerin sıfır indeksinden başlaması sizi şaşırttı mı? Bazı programlama dillerinde indeksler 1'den başlar. Bununla ilgili ilginç bir geçmişi [Wikipedia'da okuyabilirsiniz](https://en.wikipedia.org/wiki/Zero-based_numbering).

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

Bir değeri değiştirmek için indeksi şu şekilde kullanabilirsiniz:

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Changed "Rocky Road" to "Butter Pecan"
```

Ve belirli bir indekse yeni bir değer eklemek için şu şekilde yapabilirsiniz:

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //Added "Cookie Dough"
```

✅ Dizilere değer eklemenin daha yaygın bir yolu, array.push() gibi dizi operatörlerini kullanmaktır.

Bir dizide kaç öğe olduğunu öğrenmek için `length` özelliğini kullanabilirsiniz.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ Kendiniz deneyin! Tarayıcınızın konsolunda kendi oluşturduğunuz bir dizi yaratın ve üzerinde işlem yapın.

## Döngüler

Döngüler, tekrarlayan veya **iteratif** görevleri gerçekleştirmemizi sağlar ve çok fazla zaman ve kod tasarrufu sağlar. Her yineleme, değişkenler, değerler ve koşullar açısından farklılık gösterebilir. JavaScript'te farklı türde döngüler vardır ve hepsi küçük farklılıklara sahiptir, ancak temelde aynı şeyi yaparlar: veriler üzerinde döngü oluştururlar.

### For Döngüsü

`for` döngüsü, yineleme yapmak için 3 parçaya ihtiyaç duyar:
- `counter` Genellikle bir sayı ile başlatılan ve yineleme sayısını sayan bir değişken
- `condition` `false` olduğunda döngünün durmasına neden olan karşılaştırma operatörlerini kullanan ifade
- `iteration-expression` Her yinelemenin sonunda çalışır, genellikle sayaç değerini değiştirmek için kullanılır

```javascript
// Counting up to 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅ Bu kodu bir tarayıcı konsolunda çalıştırın. Sayaç, koşul veya yineleme ifadesinde küçük değişiklikler yaptığınızda ne olur? Geriye doğru çalışmasını sağlayabilir misiniz, bir geri sayım oluşturabilir misiniz?

### While Döngüsü

`for` döngüsünün sözdiziminden farklı olarak, `while` döngüleri yalnızca bir koşula ihtiyaç duyar ve bu koşul `false` olduğunda döngü durur. Döngülerdeki koşullar genellikle sayaçlar gibi diğer değerlere dayanır ve döngü sırasında yönetilmelidir. Sayaçlar için başlangıç değerleri döngü dışında oluşturulmalı ve koşulu karşılamak için gerekli ifadeler, sayaç değişikliği dahil, döngü içinde sürdürülmelidir.

```javascript
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ Neden bir for döngüsü yerine bir while döngüsü seçersiniz? StackOverflow'da 17 bin kişi aynı soruyu sormuş ve bazı görüşler [ilginizi çekebilir](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Döngüler ve Diziler

Diziler genellikle döngülerle birlikte kullanılır çünkü çoğu koşul, döngüyü durdurmak için dizinin uzunluğunu gerektirir ve indeks aynı zamanda sayaç değeri olabilir.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Ends when all flavors are printed
```

✅ Tarayıcınızın konsolunda kendi oluşturduğunuz bir dizi üzerinde döngü oluşturmayı deneyin.

---

## 🚀 Zorluk

Diziler üzerinde döngü oluşturmanın for ve while döngüleri dışında başka yolları da vardır. [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of) ve [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map) gibi yöntemler mevcuttur. Dizi döngünüzü bu tekniklerden biriyle yeniden yazın.

## Ders Sonrası Test
[Ders sonrası testi](https://ff-quizzes.netlify.app/web/quiz/14)

## Gözden Geçirme ve Kendi Kendine Çalışma

JavaScript'teki diziler, veri manipülasyonu için son derece kullanışlı birçok metoda sahiptir. [Bu metodlar hakkında bilgi edinin](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) ve kendi oluşturduğunuz bir dizi üzerinde push, pop, slice ve splice gibi bazılarını deneyin.

## Ödev

[Diziyi Döngüye Al](assignment.md)

---

**Feragatname**:  
Bu belge, [Co-op Translator](https://github.com/Azure/co-op-translator) adlı yapay zeka çeviri hizmeti kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlama veya yanlış yorumlamalardan sorumlu değiliz.