<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f7009631b73556168ca435120a231c98",
  "translation_date": "2025-08-29T00:26:31+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "tr"
}
-->
# JavaScript Temelleri: Karar Verme

![JavaScript Temelleri - Karar Verme](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.tr.png)

> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ders Öncesi Test

[Ders öncesi test](https://ff-quizzes.netlify.app/web/quiz/11)

Karar vermek ve kodunuzun çalışma sırasını kontrol etmek, kodunuzu yeniden kullanılabilir ve sağlam hale getirir. Bu bölüm, JavaScript'te veri akışını kontrol etme sözdizimini ve bunun Boolean veri türleriyle kullanıldığında önemini ele alır.

[![Karar Verme](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Karar Verme")

> 🎥 Yukarıdaki görsele tıklayarak karar verme hakkında bir video izleyebilirsiniz.

> Bu dersi [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon) üzerinden alabilirsiniz!

## Boolean'lar Hakkında Kısa Bir Hatırlatma

Boolean'lar yalnızca iki değere sahip olabilir: `true` veya `false`. Boolean'lar, belirli koşullar sağlandığında hangi kod satırlarının çalışması gerektiğine karar vermeye yardımcı olur.

Boolean'ınızı şu şekilde true veya false olarak ayarlayın:

`let myTrueBool = true`  
`let myFalseBool = false`

✅ Boolean'lar, İngiliz matematikçi, filozof ve mantıkçı George Boole (1815–1864) adına adlandırılmıştır.

## Karşılaştırma Operatörleri ve Boolean'lar

Operatörler, koşulları değerlendirerek Boolean değerler oluşturmak için karşılaştırmalar yapmak amacıyla kullanılır. İşte sıkça kullanılan operatörlerin bir listesi:

| Sembol | Açıklama                                                                                                                                                     | Örnek              |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Küçüktür**: İki değeri karşılaştırır ve sol taraftaki değer sağdakinden küçükse `true` Boolean veri türünü döndürür                                         | `5 < 6 // true`    |
| `<=`   | **Küçük veya eşittir**: İki değeri karşılaştırır ve sol taraftaki değer sağdakinden küçük veya eşitse `true` Boolean veri türünü döndürür                     | `5 <= 6 // true`   |
| `>`    | **Büyüktür**: İki değeri karşılaştırır ve sol taraftaki değer sağdakinden büyükse `true` Boolean veri türünü döndürür                                         | `5 > 6 // false`   |
| `>=`   | **Büyük veya eşittir**: İki değeri karşılaştırır ve sol taraftaki değer sağdakinden büyük veya eşitse `true` Boolean veri türünü döndürür                     | `5 >= 6 // false`  |
| `===`  | **Sıkı eşitlik**: İki değeri karşılaştırır ve sağdaki ve soldaki değerler eşit VE aynı veri türündeyse `true` Boolean veri türünü döndürür                    | `5 === 6 // false` |
| `!==`  | **Eşitsizlik**: İki değeri karşılaştırır ve sıkı eşitlik operatörünün döndüreceği değerin tersini döndürür                                                    | `5 !== 6 // true`  |

✅ Tarayıcınızın konsolunda bazı karşılaştırmalar yazarak bilginizi test edin. Döndürülen veriler sizi şaşırtıyor mu?

## If İfadesi

If ifadesi, koşul doğru olduğunda blokları arasındaki kodu çalıştırır.

```javascript
if (condition) {
  //Condition is true. Code in this block will run.
}
```

Mantıksal operatörler genellikle koşul oluşturmak için kullanılır.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

## If..Else İfadesi

`else` ifadesi, koşul yanlış olduğunda blokları arasındaki kodu çalıştırır. `if` ifadesiyle kullanımı isteğe bağlıdır.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

✅ Bu kodu ve aşağıdaki kodu tarayıcı konsolunda çalıştırarak anlayışınızı test edin. Döndürülen `console.log()` değerini değiştirmek için currentMoney ve laptopPrice değişkenlerinin değerlerini değiştirin.

## Switch İfadesi

`switch` ifadesi, farklı koşullara bağlı olarak farklı işlemler gerçekleştirmek için kullanılır. `switch` ifadesini, çalıştırılacak birçok kod bloğundan birini seçmek için kullanabilirsiniz.

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

```javascript
// program using switch statement
let a = 2;

switch (a) {
  case 1:
    a = "one";
    break;
  case 2:
    a = "two";
    break;
  default:
    a = "not found";
    break;
}
console.log(`The value is ${a}`);
```

✅ Bu kodu ve aşağıdaki kodu tarayıcı konsolunda çalıştırarak anlayışınızı test edin. Döndürülen `console.log()` değerini değiştirmek için a değişkeninin değerlerini değiştirin.

## Mantıksal Operatörler ve Boolean'lar

Kararlar birden fazla karşılaştırma gerektirebilir ve mantıksal operatörlerle birleştirilerek Boolean değerler oluşturulabilir.

| Sembol | Açıklama                                                                                     | Örnek                                                                 |
| ------ | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `&&`   | **Mantıksal VE**: İki Boolean ifadeyi karşılaştırır. Her iki taraf da doğruysa true döndürür   | `(5 > 6) && (5 < 6 ) //Bir taraf yanlış, diğer doğru. False döner`    |
| `\|\|` | **Mantıksal VEYA**: İki Boolean ifadeyi karşılaştırır. En az bir taraf doğruysa true döndürür | `(5 > 6) \|\| (5 < 6) //Bir taraf yanlış, diğer doğru. True döner`    |
| `!`    | **Mantıksal DEĞİL**: Bir Boolean ifadenin ters değerini döndürür                              | `!(5 > 6) // 5, 6'dan büyük değil, ancak "!" true döndürür`           |

## Mantıksal Operatörlerle Koşullar ve Kararlar

Mantıksal operatörler, if..else ifadelerinde koşul oluşturmak için kullanılabilir.

```javascript
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - laptopPrice * 0.2; //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is true. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

### Negasyon Operatörü

Şimdiye kadar, koşullu mantık oluşturmak için bir `if...else` ifadesi kullanabileceğinizi gördünüz. `if` içine giren her şey true/false olarak değerlendirilmelidir. `!` operatörünü kullanarak ifadeyi _tersine çevirebilirsiniz_. Şöyle görünür:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### Ternary İfadeler

Karar mantığını ifade etmek için yalnızca `if...else` kullanmak zorunda değilsiniz. Ayrıca ternary operatör adı verilen bir şey kullanabilirsiniz. Sözdizimi şu şekilde görünür:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

Aşağıda daha somut bir örnek bulunmaktadır:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Bu kodu birkaç kez okuyarak bir dakika ayırın. Bu operatörlerin nasıl çalıştığını anlıyor musunuz?

Yukarıdaki ifade şunu belirtir:

- Eğer `firstNumber`, `secondNumber`'dan büyükse
- `firstNumber`'ı `biggestNumber`'a atayın
- aksi takdirde `secondNumber`'ı atayın.

Ternary ifade, aşağıdaki kodu yazmanın daha kompakt bir yoludur:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 Zorluk

Mantıksal operatörlerle yazılmış bir program oluşturun ve ardından bunu bir ternary ifade kullanarak yeniden yazın. Tercih ettiğiniz sözdizimi hangisi?

---

## Ders Sonrası Test

[Ders sonrası test](https://ff-quizzes.netlify.app/web/quiz/12)

## Gözden Geçirme ve Kendi Kendine Çalışma

Kullanıcıya sunulan birçok operatör hakkında daha fazla bilgi edinin [MDN'de](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Josh Comeau'nun harika [operatör rehberine](https://joshwcomeau.com/operator-lookup/) göz atın!

## Ödev

[Operatörler](assignment.md)

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalardan sorumlu değiliz.