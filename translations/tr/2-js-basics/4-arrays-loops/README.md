<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-22T23:45:12+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "tr"
}
-->
# JavaScript Temelleri: Diziler ve Döngüler

![JavaScript Temelleri - Diziler](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.tr.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ders Öncesi Test
[Ders öncesi testi](https://ff-quizzes.netlify.app/web/quiz/13)

Hiç web sitelerinin alışveriş sepeti öğelerini nasıl takip ettiğini veya arkadaş listenizi nasıl gösterdiğini merak ettiniz mi? İşte burada diziler ve döngüler devreye giriyor. Diziler, birden fazla bilgiyi tutan dijital kaplar gibidir, döngüler ise tüm bu verilerle verimli bir şekilde çalışmanıza olanak tanır ve tekrarlayan kod yazma ihtiyacını ortadan kaldırır.

Bu iki kavram bir araya geldiğinde, programlarınızda bilgi işleme temellerini oluşturur. Her adımı manuel olarak yazmaktan, yüzlerce hatta binlerce öğeyi hızlı bir şekilde işleyebilen akıllı ve verimli kodlar oluşturmaya geçiş yapmayı öğreneceksiniz.

Bu dersin sonunda, sadece birkaç satır kodla karmaşık veri görevlerini nasıl başaracağınızı anlayacaksınız. Haydi, bu temel programlama kavramlarını keşfedelim.

[![Diziler](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Diziler")

[![Döngüler](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Döngüler")

> 🎥 Yukarıdaki videoları izlemek için resimlere tıklayın.

> Bu dersi [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon) üzerinden alabilirsiniz!

## Diziler

Dizileri dijital bir dosya dolabı gibi düşünün - her çekmecede bir belge saklamak yerine, birden fazla ilgili öğeyi tek bir yapılandırılmış kapta organize edebilirsiniz. Programlama açısından, diziler birden fazla bilgiyi tek bir düzenli pakette saklamanıza olanak tanır.

Bir fotoğraf galerisi oluşturuyor, yapılacaklar listesini yönetiyor veya bir oyunda yüksek puanları takip ediyor olun, diziler veri organizasyonu için temel sağlar. Nasıl çalıştıklarını görelim.

✅ Diziler her yerde! Güneş paneli dizisi gibi gerçek hayattan bir dizi örneği düşünebilir misiniz?

### Diziler Oluşturma

Bir dizi oluşturmak çok basit - sadece köşeli parantezler kullanın!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**Burada ne oluyor?**
Köşeli parantez `[]` kullanarak boş bir kap oluşturdunuz. Bunu boş bir kütüphane rafı gibi düşünün - orada organize etmek istediğiniz kitapları tutmaya hazır.

Diziyi başlangıç değerleriyle doldurabilirsiniz:

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**Dikkat edilmesi gereken harika şeyler:**
- Aynı dizide metin, sayı veya doğru/yanlış değerleri saklayabilirsiniz
- Her öğeyi bir virgülle ayırın - kolay!
- Diziler, ilgili bilgileri bir arada tutmak için mükemmeldir

### Dizi İndeksleme

İlk başta biraz garip gelebilecek bir şey: diziler öğelerini 1'den değil, 0'dan numaralandırır. Bu sıfır tabanlı indeksleme, bilgisayar belleğinin nasıl çalıştığına dayanır - C gibi programlama dillerinin ilk günlerinden beri bir programlama geleneği olmuştur. Dizideki her bir nokta, **indeks** adı verilen kendi adres numarasını alır.

| İndeks | Değer | Açıklama |
|--------|-------|----------|
| 0 | "Çikolata" | İlk öğe |
| 1 | "Çilek" | İkinci öğe |
| 2 | "Vanilya" | Üçüncü öğe |
| 3 | "Antep Fıstığı" | Dördüncü öğe |
| 4 | "Rocky Road" | Beşinci öğe |

✅ Dizilerin sıfır indeksinden başlaması sizi şaşırttı mı? Bazı programlama dillerinde indeksler 1'den başlar. Bununla ilgili ilginç bir geçmişi [Wikipedia'da okuyabilirsiniz](https://en.wikipedia.org/wiki/Zero-based_numbering).

**Dizi Öğelerine Erişim:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**Burada olanları açıklayalım:**
- **Kullanır** öğelere erişmek için indeks numarasıyla köşeli parantez notasyonu
- **Döndürür** dizideki belirli bir pozisyonda saklanan değeri
- **Başlar** 0'dan saymaya, ilk öğeyi indeks 0 yapar

**Dizi Öğelerini Değiştirme:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**Yukarıda şunları yaptık:**
- **Değiştirdik** indeks 4'teki öğeyi "Rocky Road"dan "Butter Pecan"a
- **Ekledik** indeks 5'te yeni bir öğe "Cookie Dough"
- **Dizi uzunluğunu** mevcut sınırların ötesine ekleme yapıldığında otomatik olarak genişlettik

### Dizi Uzunluğu ve Yaygın Metotlar

Diziler, veriyle çalışmayı çok daha kolaylaştıran yerleşik özellikler ve metotlarla birlikte gelir.

**Dizi Uzunluğunu Bulma:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**Hatırlanması gereken önemli noktalar:**
- **Döndürür** dizideki toplam öğe sayısını
- **Otomatik olarak güncellenir** öğeler eklendiğinde veya çıkarıldığında
- **Dinamik bir sayım sağlar** döngüler ve doğrulama için kullanışlıdır

**Temel Dizi Metotları:**

```javascript
const fruits = ["apple", "banana", "orange"];

// Add elements
fruits.push("grape");           // Adds to end: ["apple", "banana", "orange", "grape"]
fruits.unshift("strawberry");   // Adds to beginning: ["strawberry", "apple", "banana", "orange", "grape"]

// Remove elements
const lastFruit = fruits.pop();        // Removes and returns "grape"
const firstFruit = fruits.shift();     // Removes and returns "strawberry"

// Find elements
const index = fruits.indexOf("banana"); // Returns 1 (position of "banana")
const hasApple = fruits.includes("apple"); // Returns true
```

**Bu metotları anlamak:**
- **Ekler** öğeleri `push()` (son) ve `unshift()` (başlangıç) ile
- **Çıkarır** öğeleri `pop()` (son) ve `shift()` (başlangıç) ile
- **Bulur** öğeleri `indexOf()` ile ve varlığını `includes()` ile kontrol eder
- **Döndürür** çıkarılan öğeler veya pozisyon indeksleri gibi faydalı değerler

✅ Kendiniz deneyin! Tarayıcınızın konsolunu kullanarak kendi oluşturduğunuz bir diziyi oluşturun ve üzerinde değişiklikler yapın.

## Döngüler

Charles Dickens'ın romanlarındaki ünlü ceza sahnesini düşünün; öğrenciler bir cümleyi defalarca bir tahtaya yazmak zorunda kalıyordu. Birine "bu cümleyi 100 kez yaz" demeyi ve bunun otomatik olarak yapılmasını hayal edin. Döngüler tam olarak bunu kodunuz için yapar.

Döngüler, hatasız bir şekilde görevleri tekrarlayabilen yorulmaz bir asistan gibidir. Alışveriş sepetindeki her öğeyi kontrol etmek veya bir albümdeki tüm fotoğrafları göstermek istiyorsanız, döngüler bu tekrarı verimli bir şekilde halleder.

JavaScript, seçebileceğiniz birkaç tür döngü sunar. Her birini inceleyelim ve ne zaman kullanmanız gerektiğini anlayalım.

### For Döngüsü

`for` döngüsü, bir zamanlayıcı ayarlamak gibidir - bir şeyin kaç kez gerçekleşmesini istediğinizi tam olarak bilirsiniz. Süper düzenli ve tahmin edilebilirdir, bu da dizilerle çalışırken veya bir şeyleri saymanız gerektiğinde mükemmel bir seçimdir.

**For Döngüsü Yapısı:**

| Bileşen | Amaç | Örnek |
|---------|------|-------|
| **Başlatma** | Başlangıç noktasını ayarlar | `let i = 0` |
| **Koşul** | Ne zaman devam edileceği | `i < 10` |
| **Artış** | Nasıl güncelleneceği | `i++` |

```javascript
// Counting from 0 to 9
for (let i = 0; i < 10; i++) {
  console.log(`Count: ${i}`);
}

// More practical example: processing scores
const testScores = [85, 92, 78, 96, 88];
for (let i = 0; i < testScores.length; i++) {
  console.log(`Student ${i + 1}: ${testScores[i]}%`);
}
```

**Adım adım, burada olanlar:**
- **Başlatır** sayaç değişkeni `i`yi başlangıçta 0 olarak
- **Kontrol eder** her yinelemeden önce `i < 10` koşulunu
- **Çalıştırır** koşul doğru olduğunda kod bloğunu
- **Artırır** her yinelemeden sonra `i`yi 1 ile (`i++`)
- **Durdurur** koşul yanlış olduğunda (örneğin, `i` 10'a ulaştığında)

✅ Bu kodu bir tarayıcı konsolunda çalıştırın. Sayaç, koşul veya yineleme ifadesinde küçük değişiklikler yaptığınızda ne olur? Geriye doğru çalıştırarak bir geri sayım oluşturabilir misiniz?

### While Döngüsü

`while` döngüsü, "bunu yapmaya devam et, ta ki..." demek gibidir - kaç kez çalışacağını tam olarak bilmeyebilirsiniz, ancak ne zaman duracağını bilirsiniz. Kullanıcıdan istediğiniz bilgiyi alana kadar sormak veya aradığınız şeyi bulana kadar verileri aramak gibi durumlar için mükemmeldir.

**While Döngüsü Özellikleri:**
- **Devam eder** koşul doğru olduğu sürece çalışmaya
- **Gerektirir** sayaç değişkenlerinin manuel yönetimini
- **Kontrol eder** her yinelemeden önce koşulu
- **Risk taşır** koşul hiçbir zaman yanlış olmazsa sonsuz döngüye girme

```javascript
// Basic counting example
let i = 0;
while (i < 10) {
  console.log(`While count: ${i}`);
  i++; // Don't forget to increment!
}

// More practical example: processing user input
let userInput = "";
let attempts = 0;
const maxAttempts = 3;

while (userInput !== "quit" && attempts < maxAttempts) {
  userInput = prompt(`Enter 'quit' to exit (attempt ${attempts + 1}):`);
  attempts++;
}

if (attempts >= maxAttempts) {
  console.log("Maximum attempts reached!");
}
```

**Bu örnekleri anlamak:**
- **Yönetir** sayaç değişkeni `i`yi döngü gövdesinde manuel olarak
- **Artırır** sonsuz döngüleri önlemek için sayaç
- **Pratik kullanım örneği gösterir** kullanıcı girdisi ve deneme sınırlandırma ile
- **Güvenlik mekanizmaları içerir** sonsuz çalışmayı önlemek için

### Modern Döngü Alternatifleri

JavaScript, kodunuzu daha okunabilir ve hata yapma olasılığını azaltan modern döngü sözdizimi sunar.

**For...of Döngüsü (ES6+):**

```javascript
const colors = ["red", "green", "blue", "yellow"];

// Modern approach - cleaner and safer
for (const color of colors) {
  console.log(`Color: ${color}`);
}

// Compare with traditional for loop
for (let i = 0; i < colors.length; i++) {
  console.log(`Color: ${colors[i]}`);
}
```

**For...of'un temel avantajları:**
- **Ortadan kaldırır** indeks yönetimini ve olası bir hata payını
- **Doğrudan erişim sağlar** dizi öğelerine
- **Kod okunabilirliğini artırır** ve sözdizimi karmaşıklığını azaltır

**forEach Metodu:**

```javascript
const prices = [9.99, 15.50, 22.75, 8.25];

// Using forEach for functional programming style
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price.toFixed(2)}`);
});

// forEach with arrow functions for simple operations
prices.forEach(price => console.log(`Price: $${price}`));
```

**forEach hakkında bilmeniz gerekenler:**
- **Çalıştırır** her dizi öğesi için bir fonksiyon
- **Sağlar** hem öğe değeri hem de indeks parametre olarak
- **Erken durdurulamaz** (geleneksel döngülerden farklı olarak)
- **Undefined döndürür** (yeni bir dizi oluşturmaz)

✅ Neden bir for döngüsünü bir while döngüsüne tercih edersiniz? StackOverflow'da 17K izleyici aynı soruyu sordu ve bazı görüşler [ilginç olabilir](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Döngüler ve Diziler

Dizileri döngülerle birleştirmek, güçlü veri işleme yetenekleri oluşturur. Bu eşleşme, listeleri görüntülemekten istatistikleri hesaplamaya kadar birçok programlama görevi için temel oluşturur.

**Geleneksel Dizi İşleme:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Classic for loop approach
for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(`Flavor ${i + 1}: ${iceCreamFlavors[i]}`);
}

// Modern for...of approach
for (const flavor of iceCreamFlavors) {
  console.log(`Available flavor: ${flavor}`);
}
```

**Her yaklaşımı anlamak:**
- **Kullanır** döngü sınırını belirlemek için dizi uzunluk özelliğini
- **Erişir** geleneksel for döngülerinde indeksle öğelere
- **Doğrudan erişim sağlar** for...of döngülerinde öğelere
- **İşler** her dizi öğesini tam olarak bir kez

**Pratik Veri İşleme Örneği:**

```javascript
const studentGrades = [85, 92, 78, 96, 88, 73, 89];
let total = 0;
let highestGrade = studentGrades[0];
let lowestGrade = studentGrades[0];

// Process all grades with a single loop
for (let i = 0; i < studentGrades.length; i++) {
  const grade = studentGrades[i];
  total += grade;
  
  if (grade > highestGrade) {
    highestGrade = grade;
  }
  
  if (grade < lowestGrade) {
    lowestGrade = grade;
  }
}

const average = total / studentGrades.length;
console.log(`Average: ${average.toFixed(1)}`);
console.log(`Highest: ${highestGrade}`);
console.log(`Lowest: ${lowestGrade}`);
```

**Bu kod nasıl çalışıyor:**
- **Başlatır** toplam ve uç değerler için izleme değişkenlerini
- **İşler** her notu tek bir verimli döngüyle
- **Biriktirir** ortalama hesaplama için toplamı
- **Takip eder** en yüksek ve en düşük değerleri yineleme sırasında
- **Son istatistikleri hesaplar** döngü tamamlandıktan sonra

✅ Tarayıcınızın konsolunda kendi oluşturduğunuz bir dizi üzerinde döngü yapmayı deneyin.

---

## GitHub Copilot Agent Challenge 🚀

Agent modunu kullanarak aşağıdaki meydan okumayı tamamlayın:

**Açıklama:** Diziler ve döngüleri birleştirerek bir veri setini analiz eden ve anlamlı içgörüler üreten kapsamlı bir veri işleme fonksiyonu oluşturun.

**İstek:** `analyzeGrades` adlı bir fonksiyon oluşturun. Bu fonksiyon, öğrenci notu nesnelerinden oluşan bir dizi alır (her biri ad ve puan özelliklerini içerir) ve en yüksek puan, en düşük puan, ortalama puan, geçen öğrenci sayısı (puan >= 70) ve ortalama puanın üzerinde puan alan öğrenci isimlerini içeren bir istatistik nesnesi döndürür. Çözümünüzde en az iki farklı döngü türü kullanın.

Agent modu hakkında daha fazla bilgi edinin [buradan](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode).

## 🚀 Meydan Okuma

JavaScript, belirli görevler için geleneksel döngülerin yerini alabilecek birkaç modern dizi metodu sunar. [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) ve [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) metodlarını keşfedin.

**Meydan okumanız:** Öğrenci notları örneğini en az üç farklı dizi metodu kullanarak yeniden düzenleyin. Modern JavaScript sözdizimiyle kodun ne kadar temiz ve okunabilir hale geldiğini fark edin.

## Ders Sonrası Test
[Ders sonrası testi](https://ff-quizzes.netlify.app/web/quiz/14)

## Gözden Geçirme ve Kendi Kendine Çalışma

JavaScript'teki diziler, veri manipülasyonu için son derece kullanışlı birçok metoda sahiptir. [Bu metotlar hakkında bilgi edinin](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) ve kendi oluşturduğunuz bir dizide bazılarını deneyin (örneğin push, pop, slice ve splice).

## Ödev

[Diziyi Döngüle](assignment.md)

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.