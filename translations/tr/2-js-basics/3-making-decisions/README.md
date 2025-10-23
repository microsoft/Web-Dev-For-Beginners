<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c32c3377f83ab750c2447c77ab98",
  "translation_date": "2025-10-22T23:45:49+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "tr"
}
-->
# JavaScript Temelleri: Karar Verme

![JavaScript Temelleri - Karar Verme](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.tr.png)

> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

Hiç uygulamaların nasıl akıllıca kararlar verdiğini merak ettiniz mi? Örneğin, bir navigasyon sisteminin en hızlı rotayı nasıl seçtiğini veya bir termostatın ısıtmayı ne zaman açacağına nasıl karar verdiğini? İşte bu, programlamada karar verme kavramının temelidir.

Charles Babbage'ın Analitik Motoru'nun koşullara bağlı olarak farklı işlem dizilerini takip etmek üzere tasarlandığı gibi, modern JavaScript programlarının da değişen durumlara göre seçim yapması gerekir. Bu dallanma ve karar verme yeteneği, statik kodu duyarlı ve akıllı uygulamalara dönüştüren şeydir.

Bu derste, programlarınızda koşullu mantığı nasıl uygulayacağınızı öğreneceksiniz. Koşullu ifadeleri, karşılaştırma operatörlerini ve kodunuzun durumları değerlendirip uygun şekilde yanıt vermesini sağlayan mantıksal ifadeleri keşfedeceğiz.

## Ders Öncesi Test

[Ders öncesi test](https://ff-quizzes.netlify.app/web/quiz/11)

Karar verme ve program akışını kontrol etme yeteneği, programlamanın temel bir yönüdür. Bu bölüm, JavaScript programlarınızın yürütme yolunu Boolean değerleri ve koşullu mantık kullanarak nasıl kontrol edeceğinizi kapsar.

[![Karar Verme](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Karar Verme")

> 🎥 Yukarıdaki görsele tıklayarak karar verme hakkında bir video izleyebilirsiniz.

> Bu dersi [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon) üzerinden alabilirsiniz!

## Boolean'lar Üzerine Kısa Bir Hatırlatma

Karar vermeyi keşfetmeden önce, önceki dersimizden Boolean değerlerini tekrar gözden geçirelim. Matematikçi George Boole'un adını taşıyan bu değerler, ikili durumları temsil eder – ya `true` ya da `false`. Hiçbir belirsizlik yok, ara bir durum yok.

Bu ikili değerler, tüm hesaplama mantığının temelini oluşturur. Programınızın verdiği her karar nihayetinde bir Boolean değerlendirmesine indirgenir.

Boolean değişkenler oluşturmak oldukça basittir:

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

Bu, açık Boolean değerlerine sahip iki değişken oluşturur.

✅ Boolean'lar, İngiliz matematikçi, filozof ve mantıkçı George Boole (1815–1864) adını taşır.

## Karşılaştırma Operatörleri ve Boolean'lar

Pratikte, Boolean değerlerini manuel olarak ayarlamanız nadirdir. Bunun yerine, koşulları değerlendirerek onları oluşturursunuz: "Bu sayı diğerinden büyük mü?" veya "Bu değerler eşit mi?"

Karşılaştırma operatörleri bu değerlendirmeleri mümkün kılar. Değerleri karşılaştırır ve operatörlerin ilişkisinden yola çıkarak Boolean sonuçlar döndürür.

| Sembol | Açıklama                                                                                                                                                   | Örnek              |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Küçüktür**: İki değeri karşılaştırır ve sol taraftaki değer sağ taraftakinden küçükse `true` Boolean veri türünü döndürür                                | `5 < 6 // true`    |
| `<=`   | **Küçük veya eşittir**: İki değeri karşılaştırır ve sol taraftaki değer sağ taraftakinden küçük veya eşitse `true` Boolean veri türünü döndürür            | `5 <= 6 // true`   |
| `>`    | **Büyüktür**: İki değeri karşılaştırır ve sol taraftaki değer sağ taraftakinden büyükse `true` Boolean veri türünü döndürür                                | `5 > 6 // false`   |
| `>=`   | **Büyük veya eşittir**: İki değeri karşılaştırır ve sol taraftaki değer sağ taraftakinden büyük veya eşitse `true` Boolean veri türünü döndürür            | `5 >= 6 // false`  |
| `===`  | **Kesin eşitlik**: İki değeri karşılaştırır ve sağ ve sol taraftaki değerler hem eşit hem de aynı veri türündeyse `true` Boolean veri türünü döndürür      | `5 === 6 // false` |
| `!==`  | **Eşitsizlik**: İki değeri karşılaştırır ve kesin eşitlik operatörünün döndüreceği Boolean değerin tersini döndürür                                        | `5 !== 6 // true`  |

✅ Bilginizi kontrol etmek için tarayıcınızın konsolunda bazı karşılaştırmalar yazın. Döndürülen veriler sizi şaşırtıyor mu?

## If İfadesi

`if` ifadesi, kodunuzda bir soru sormak gibidir. "Eğer bu koşul doğruysa, o zaman bu şeyi yap." JavaScript'te karar vermek için kullanacağınız en önemli araçlardan biridir.

İşte nasıl çalıştığı:

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

Koşul parantezlerin içine gider ve eğer `true` ise, JavaScript süslü parantezlerin içindeki kodu çalıştırır. Eğer `false` ise, JavaScript o bloğu tamamen atlar.

Bu koşulları oluşturmak için genellikle karşılaştırma operatörlerini kullanırsınız. İşte pratik bir örnek:

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

`1000 >= 800` `true` olarak değerlendirildiği için, blok içindeki kod çalışır ve konsolda "Yeni bir laptop alınıyor!" mesajını gösterir.

## If..Else İfadesi

Peki ya koşul yanlış olduğunda programınızın farklı bir şey yapmasını istiyorsanız? İşte burada `else` devreye girer – yedek bir plan gibi.

`else` ifadesi, "eğer bu koşul doğru değilse, bunun yerine başka bir şey yap" demenizi sağlar.

```javascript
let currentMoney = 500;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

Şimdi `500 >= 800` `false` olduğu için, JavaScript ilk bloğu atlar ve bunun yerine `else` bloğunu çalıştırır. Konsolda "Henüz yeni bir laptop alacak kadar param yok!" mesajını görürsünüz.

✅ Bu kodu ve aşağıdaki kodu tarayıcı konsolunda çalıştırarak anlayışınızı test edin. `currentMoney` ve `laptopPrice` değişkenlerinin değerlerini değiştirerek döndürülen `console.log()` çıktısını değiştirin.

## Switch İfadesi

Bazen bir değeri birden fazla seçeneğe karşı karşılaştırmanız gerekir. Birkaç `if..else` ifadesini zincirleyebilirsiniz, ancak bu yaklaşım karmaşık hale gelir. `switch` ifadesi, birden fazla ayrık değeri ele almak için daha düzenli bir yapı sağlar.

Bu konsept, erken dönem telefon santrallerinde kullanılan mekanik anahtarlama sistemlerine benzer – bir giriş değeri, yürütmenin hangi özel yolu izleyeceğini belirler.

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

İşte yapısı:
- JavaScript ifadeyi bir kez değerlendirir
- Her bir `case`i kontrol eder ve eşleşme arar
- Eşleşme bulduğunda, o kod bloğunu çalıştırır
- `break`, JavaScript'e durmasını ve switch'ten çıkmasını söyler
- Hiçbir case eşleşmezse, `default` bloğunu çalıştırır (varsa)

```javascript
// Program using switch statement for day of week
let dayNumber = 2;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown day";
    break;
}
console.log(`Today is ${dayName}`);
```

Bu örnekte, JavaScript `dayNumber`ın `2` olduğunu görür, eşleşen `case 2`yi bulur, `dayName`i "Salı" olarak ayarlar ve ardından switch'ten çıkar. Sonuç? Konsolda "Bugün Salı" mesajı görüntülenir.

✅ Bu kodu ve aşağıdaki kodu tarayıcı konsolunda çalıştırarak anlayışınızı test edin. `a` değişkeninin değerlerini değiştirerek döndürülen `console.log()` çıktısını değiştirin.

## Mantıksal Operatörler ve Boolean'lar

Karmaşık kararlar genellikle birden fazla koşulu aynı anda değerlendirmeyi gerektirir. Boolean cebiri, matematikçilerin mantıksal ifadeleri birleştirmesine olanak tanıdığı gibi, programlama da birden fazla Boolean koşulunu bağlamak için mantıksal operatörler sağlar.

Bu operatörler, basit doğru/yanlış değerlendirmeleri birleştirerek karmaşık koşullu mantık sağlar.

| Sembol | Açıklama                                                                                     | Örnek                                                                 |
| ------ | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `&&`   | **Mantıksal VE**: İki Boolean ifadeyi karşılaştırır. Her iki taraf da doğruysa `true` döner   | `(5 > 3) && (5 < 10) // Her iki taraf doğru. true döner`              |
| `\|\|` | **Mantıksal VEYA**: İki Boolean ifadeyi karşılaştırır. En az bir taraf doğruysa `true` döner  | `(5 > 10) \|\| (5 < 10) // Bir taraf yanlış, diğer doğru. true döner` |
| `!`    | **Mantıksal DEĞİL**: Bir Boolean ifadesinin ters değerini döner                              | `!(5 > 10) // 5, 10'dan büyük değil, bu yüzden "!" bunu doğru yapar`  |

Bu operatörler, koşulları faydalı şekillerde birleştirmenizi sağlar:
- VE (`&&`) her iki koşulun da doğru olması gerektiği anlamına gelir
- VEYA (`||`) en az bir koşulun doğru olması gerektiği anlamına gelir  
- DEĞİL (`!`) doğruyu yanlışa (ve tam tersine) çevirir

## Mantıksal Operatörlerle Koşullar ve Kararlar

Bu mantıksal operatörlerin daha gerçekçi bir örnekle nasıl çalıştığını görelim:

```javascript
let currentMoney = 600;
let laptopPrice = 800;
let laptopDiscountPrice = laptopPrice - (laptopPrice * 0.2); // Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

Bu örnekte: %20 indirimli fiyatı (640) hesaplıyoruz, ardından mevcut paramızın ya tam fiyatı ya da indirimli fiyatı karşılayıp karşılamadığını değerlendiriyoruz. 600, indirimli fiyat eşiğini (640) karşıladığı için koşul doğru olarak değerlendirilir.

### Negasyon Operatörü

Bazen bir şeyin doğru OLMADIĞI durumları düşünmek daha kolaydır. Örneğin, "Kullanıcı giriş yaptı mı?" diye sormak yerine "Kullanıcı giriş yapmadı mı?" diye sorabilirsiniz. Ünlem işareti (`!`) operatörü mantığı sizin için tersine çevirir.

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

`!` operatörü, "tam tersi..." demek gibidir – bir şey `true` ise, `!` bunu `false` yapar ve tam tersi.

### Ternary İfadeler

Basit koşullu atamalar için JavaScript, **ternary operatörünü** sağlar. Bu kısa sözdizimi, bir koşullu ifadeyi tek bir satırda yazmanıza olanak tanır ve bir koşula bağlı olarak iki değerden birini atamanız gerektiğinde kullanışlıdır.

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

Bu, bir soru gibi okunur: "Bu koşul doğru mu? Evetse, bu değeri kullan. Hayırsa, şu değeri kullan."

Aşağıda daha somut bir örnek verilmiştir:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Bu kodu birkaç kez okuyarak bir dakikanızı ayırın. Bu operatörlerin nasıl çalıştığını anlıyor musunuz?

Bu satır şunu söylüyor: "`firstNumber` `secondNumber`dan büyük mü? Evetse, `firstNumber`ı `biggestNumber`a koy. Hayırsa, `secondNumber`ı `biggestNumber`a koy."

Ternary operatörü, bu geleneksel `if..else` ifadesini daha kısa bir şekilde yazmanın bir yoludur:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

Her iki yaklaşım da aynı sonuçları üretir. Ternary operatörü kısalık sunarken, geleneksel if-else yapısı karmaşık koşullar için daha okunabilir olabilir.

---

## 🚀 Meydan Okuma

Önce mantıksal operatörlerle yazılmış, ardından bir ternary ifade kullanılarak yeniden yazılmış bir program oluşturun. Hangi sözdizimini tercih ediyorsunuz?

---

## GitHub Copilot Agent Meydan Okuması 🚀

Agent modunu kullanarak aşağıdaki meydan okumayı tamamlayın:

**Açıklama:** Bu dersteki birden fazla karar verme konseptini içeren kapsamlı bir not hesaplayıcı oluşturun. Bu, if-else ifadeleri, switch ifadeleri, mantıksal operatörler ve ternary ifadeleri içermelidir.

**Talimat:** Bir öğrencinin sayısal notunu (0-100) alan ve aşağıdaki kriterlere göre harf notunu belirleyen bir JavaScript programı yazın:
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: 60'ın altında

Gereksinimler:
1. Harf notunu belirlemek için bir if-else ifadesi kullanın
2. Öğrencinin geçip geçmediğini (not >= 60) VE onur derecesine sahip olup olmadığını (not >= 90) kontrol etmek için mantıksal operatörler kullanın
3. Her harf notu için özel geri bildirim sağlamak için bir switch ifadesi kullanın
4. Öğrencinin bir sonraki kursa uygun olup olmadığını (not >= 70) belirlemek için bir ternary operatörü kullanın
5. Notun 0 ile 100 arasında olduğundan emin olmak için giriş doğrulaması ekleyin

Programınızı 59, 60, 89, 90 ve geçersiz girişler gibi çeşitli notlarla test edin.

Daha fazla bilgi için [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) bağlantısını ziyaret edin.

## Ders Sonrası Test

[Ders sonrası test](https://ff-quizzes.netlify.app/web/quiz/12)

## Gözden Geçirme ve Kendi Kendine Çalışma

Kullanıcıya sunulan birçok operatör hakkında daha fazla bilgi edinmek için [MDN'de](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators) okuyun.

Josh Comeau'nun harika [operatör rehberine](https://joshwcomeau.com/operator-lookup/) göz atın!

## Ödev

[Operatörler](assignment.md)

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çeviriler hata veya yanlışlıklar içerebilir. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalardan sorumlu değiliz.