<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0092f6533ae3ec3adad5b5ece68efaf",
  "translation_date": "2025-10-22T23:43:54+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "tr"
}
-->
# JavaScript Temelleri: Veri Türleri

![JavaScript Temelleri - Veri Türleri](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.tr.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

Veri türleri, JavaScript'te yazacağınız her programda karşılaşacağınız temel kavramlardan biridir. Veri türlerini, antik İskenderiye kütüphanecilerinin kullandığı dosyalama sistemi gibi düşünebilirsiniz – şiir, matematik ve tarih kayıtlarını içeren parşömenler için belirli yerler vardı. JavaScript de bilgiyi benzer şekilde farklı veri türleriyle kategorilere ayırır.

Bu derste, JavaScript'in çalışmasını sağlayan temel veri türlerini keşfedeceğiz. Sayılar, metinler, doğru/yanlış değerleriyle nasıl çalışacağınızı öğrenecek ve doğru türü seçmenin programlarınız için neden önemli olduğunu anlayacaksınız. Bu kavramlar başlangıçta soyut görünebilir, ancak pratikle bunlar alışkanlık haline gelecek.

Veri türlerini anlamak, JavaScript'teki diğer her şeyi çok daha net hale getirecek. Tıpkı mimarların bir katedral inşa etmeden önce farklı yapı malzemelerini anlaması gerektiği gibi, bu temeller ileride inşa edeceğiniz her şeyi destekleyecek.

## Ders Öncesi Test
[Ders öncesi test](https://ff-quizzes.netlify.app/web/)

Bu ders, webde etkileşim sağlayan dil olan JavaScript'in temellerini kapsar.

> Bu dersi [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon) üzerinden alabilirsiniz!

[![Değişkenler](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "JavaScript'te Değişkenler")

[![JavaScript'te Veri Türleri](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "JavaScript'te Veri Türleri")

> 🎥 Yukarıdaki görüntülere tıklayarak değişkenler ve veri türleri hakkında videolar izleyebilirsiniz.

Hadi değişkenler ve onları dolduran veri türleriyle başlayalım!

## Değişkenler

Değişkenler, programlamanın temel yapı taşlarıdır. Ortaçağ simyacılarının farklı maddeleri saklamak için kullandığı etiketli kavanozlar gibi, değişkenler bilgiyi saklamanıza ve ona daha sonra başvurabilmeniz için açıklayıcı bir isim vermenize olanak tanır. Birinin yaşını hatırlamanız mı gerekiyor? `age` adlı bir değişkende saklayın. Bir kullanıcının adını mı takip etmek istiyorsunuz? `userName` adlı bir değişkende tutun.

Burada JavaScript'te değişken oluşturmanın modern yaklaşımına odaklanacağız. Burada öğreneceğiniz teknikler, yıllar süren dil evrimi ve programlama topluluğu tarafından geliştirilen en iyi uygulamaları temsil eder.

Bir değişken oluşturmak ve **tanımlamak** şu sözdizimine sahiptir: **[anahtar kelime] [isim]**. İki bölümden oluşur:

- **Anahtar kelime**. Değişebilen değişkenler için `let`, sabit kalan değerler için `const` kullanın.
- **Değişken adı**, bu sizin seçtiğiniz açıklayıcı bir isimdir.

✅ ES6'da tanıtılan `let` anahtar kelimesi, değişkeninize bir _blok kapsamı_ sağlar. `let` veya `const` kullanmanız, eski `var` anahtar kelimesine göre önerilir. Blok kapsamlarını daha ayrıntılı olarak ilerleyen bölümlerde ele alacağız.

### Görev - Değişkenlerle Çalışmak

1. **Bir değişken tanımlayın**. İlk değişkenimizi oluşturarak başlayalım:

    ```javascript
    let myVariable;
    ```

   **Bu ne sağlar:**
   - JavaScript'e `myVariable` adlı bir depolama alanı oluşturmasını söyler
   - JavaScript bu değişken için bellekte yer ayırır
   - Değişken şu anda bir değere sahip değil (undefined)

2. **Ona bir değer verin**. Şimdi değişkenimize bir şey koyalım:

    ```javascript
    myVariable = 123;
    ```

   **Atama nasıl çalışır:**
   - `=` operatörü, değişkenimize 123 değerini atar
   - Değişken artık bu değeri içerir ve undefined değildir
   - Bu değeri kodunuzda `myVariable` kullanarak referans alabilirsiniz

   > Not: Bu derste `=` kullanımı, bir değişkene değer atamak için kullanılan bir "atama operatörü" anlamına gelir. Eşitlik anlamına gelmez.

3. **Akıllıca yapın**. Aslında, bu iki adımı birleştirelim:

    ```javascript
    let myVariable = 123;
    ```

    **Bu yaklaşım daha verimlidir:**
    - Değişkeni tanımlıyor ve bir değeri tek bir ifadede atıyorsunuz
    - Bu, geliştiriciler arasında standart bir uygulamadır
    - Kod uzunluğunu azaltırken açıklığı korur

4. **Fikrini değiştir**. Peki ya farklı bir sayı saklamak istersek?

   ```javascript
   myVariable = 321;
   ```

   **Yeniden atamayı anlamak:**
   - Değişken artık 123 yerine 321 içerir
   - Önceki değer değiştirilir – değişkenler aynı anda yalnızca bir değer saklar
   - Bu değişkenlik, `let` ile tanımlanan değişkenlerin temel özelliğidir

   ✅ Deneyin! JavaScript'i doğrudan tarayıcınızda yazabilirsiniz. Bir tarayıcı penceresi açın ve Geliştirici Araçları'na gidin. Konsolda bir istem bulacaksınız; `let myVariable = 123` yazın, enter tuşuna basın, ardından `myVariable` yazın. Ne oluyor? Bu kavramlar hakkında daha fazla bilgiyi sonraki derslerde öğreneceksiniz.

## Sabitler

Bazen program yürütme sırasında asla değişmemesi gereken bilgileri saklamanız gerekir. Sabitleri, antik Yunan'da Euclid'in kanıtladığı ve belgelenen matematiksel prensipler gibi düşünebilirsiniz – bir kez kanıtlandıktan ve belgelendikten sonra, gelecekteki tüm referanslar için sabit kaldılar.

Sabitler, değişkenlere benzer şekilde çalışır, ancak önemli bir kısıtlama ile: bir kez değer atandıktan sonra değiştirilemez. Bu değişmezlik, programınızdaki kritik değerlerin yanlışlıkla değiştirilmesini önlemeye yardımcı olur.

Bir sabitin tanımlanması ve başlatılması, bir değişkenle aynı kavramları takip eder, ancak `const` anahtar kelimesi ile. Sabitler genellikle büyük harflerle tanımlanır.

```javascript
const MY_VARIABLE = 123;
```

**Bu kod ne yapar:**
- **Bir sabit oluşturur**: `MY_VARIABLE` adlı ve değeri 123 olan
- **Büyük harf adlandırma kuralını kullanır**: sabitler için
- **Gelecekteki değişiklikleri engeller**: bu değere

Sabitlerin iki ana kuralı vardır:

- **Hemen bir değer vermelisiniz** – boş sabitlere izin verilmez!
- **Bu değeri asla değiştiremezsiniz** – JavaScript bunu denerseniz bir hata verir. Ne demek istediğimi görelim:

   **Basit değer** - Aşağıdaki işlem YASAKTIR:
   
      ```javascript
      const PI = 3;
      PI = 4; // yasak
      ```

   **Hatırlamanız gerekenler:**
   - **Sabitin yeniden atanması** hata oluşturur
   - **Önemli değerleri korur**: yanlışlıkla değişikliklerden
   - **Değerin tutarlılığını sağlar**: program boyunca
 
   **Nesne referansı korunur** - Aşağıdaki işlem YASAKTIR:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // yasak
      ```

   **Bu kavramları anlamak:**
   - **Tüm nesneyi değiştirmeyi engeller**
   - **Orijinal nesneye referansı korur**
   - **Nesnenin kimliğini bellekte tutar**

    **Nesne değeri korunmaz** - Aşağıdaki işlem İZİN VERİLİR:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // izin verilir
      ```

      **Burada olanları açıklayalım:**
      - **Nesne içindeki özellik değerini değiştirir**
      - **Aynı nesne referansını korur**
      - **Nesne içeriğinin değişebileceğini gösterir**: referans sabit kalırken

   > Not: Bir `const`, referansın yeniden atanmasını engeller. Ancak değer tamamen _değişmez_ değildir ve özellikle bir nesne gibi karmaşık yapılar söz konusu olduğunda değişebilir.

## Veri Türleri

JavaScript, bilgiyi veri türleri adı verilen farklı kategorilere ayırır. Bu kavram, antik bilginlerin bilgiyi kategorize etme biçimini yansıtır – Aristoteles, mantıksal ilkelerin şiir, matematik ve doğal felsefeye eşit şekilde uygulanamayacağını bilerek farklı akıl yürütme türlerini ayırmıştır.

Veri türleri önemlidir çünkü farklı işlemler farklı türde bilgilerle çalışır. Tıpkı bir kişinin adı üzerinde aritmetik yapamayacağınız veya bir matematiksel denklemi alfabetik sıraya koyamayacağınız gibi, JavaScript her işlem için uygun veri türünü gerektirir. Bunu anlamak hataları önler ve kodunuzu daha güvenilir hale getirir.

Değişkenler, sayılar ve metinler gibi birçok farklı türde değer saklayabilir. Bu çeşitli değer türlerine **veri türü** denir. Veri türleri, yazılım geliştirme için önemlidir çünkü geliştiricilerin kodun nasıl yazılması ve yazılımın nasıl çalışması gerektiği konusunda kararlar almasına yardımcı olur. Ayrıca, bazı veri türleri, bir değerde ek bilgi dönüştürmeye veya çıkarmaya yardımcı olan benzersiz özelliklere sahiptir.

✅ Veri Türleri, JavaScript veri primitifleri olarak da adlandırılır, çünkü bunlar dil tarafından sağlanan en düşük seviyeli veri türleridir. 7 primitif veri türü vardır: string, number, bigint, boolean, undefined, null ve symbol. Bu primitiflerin her birinin neyi temsil edebileceğini bir dakika düşünün. Bir `zebra` nedir? Peki ya `0`? `true`?

### Sayılar

Sayılar, JavaScript'teki en basit veri türüdür. İster 42 gibi tam sayılar, ister 3.14 gibi ondalık sayılar, ister -5 gibi negatif sayılarla çalışıyor olun, JavaScript bunları aynı şekilde işler.

Daha önceki değişkenimizi hatırlıyor musunuz? Sakladığımız 123 aslında bir sayı veri türüydü:

```javascript
let myVariable = 123;
```

**Temel özellikler:**
- JavaScript, sayısal değerleri otomatik olarak tanır
- Bu değişkenlerle matematiksel işlemler yapabilirsiniz
- Açık bir tür bildirimi gerekmez

Değişkenler, ondalık veya negatif sayılar dahil olmak üzere her türden sayıyı saklayabilir. Sayılar ayrıca [bir sonraki bölümde](../../../../2-js-basics/1-data-types) ele alınan aritmetik operatörlerle kullanılabilir.

### Aritmetik Operatörler

Aritmetik operatörler, JavaScript'te matematiksel hesaplamalar yapmanıza olanak tanır. Bu operatörler, matematikçilerin yüzyıllardır kullandığı aynı prensipleri takip eder – Al-Khwarizmi gibi cebirsel notasyon geliştiren bilginlerin eserlerinde görülen aynı semboller.

Operatörler, geleneksel matematikten beklediğiniz gibi çalışır: toplama için artı, çıkarma için eksi ve benzeri.

Aritmetik işlevler gerçekleştirirken kullanabileceğiniz birkaç operatör türü vardır ve bazıları burada listelenmiştir:

| Sembol | Açıklama                                                                 | Örnek                           |
| ------ | ------------------------------------------------------------------------ | -------------------------------- |
| `+`    | **Toplama**: İki sayının toplamını hesaplar                              | `1 + 2 //beklenen cevap 3`       |
| `-`    | **Çıkarma**: İki sayının farkını hesaplar                                | `1 - 2 //beklenen cevap -1`      |
| `*`    | **Çarpma**: İki sayının çarpımını hesaplar                               | `1 * 2 //beklenen cevap 2`       |
| `/`    | **Bölme**: İki sayının bölümünü hesaplar                                 | `1 / 2 //beklenen cevap 0.5`     |
| `%`    | **Kalan**: İki sayının bölünmesinden kalan değeri hesaplar               | `1 % 2 //beklenen cevap 1`       |

✅ Deneyin! Tarayıcınızın konsolunda bir aritmetik işlem deneyin. Sonuçlar sizi şaşırtıyor mu?

### String'ler

JavaScript'te metinsel veriler string olarak temsil edilir. "String" terimi, karakterlerin bir dizi halinde bir araya getirilmesi fikrinden gelir; tıpkı ortaçağ manastırlarında yazıcıların harfleri birleştirerek kelimeler ve cümleler oluşturması gibi.

String'ler web geliştirme için temel bir unsurdur. Bir web sitesinde görüntülenen her metin parçası – kullanıcı adları, düğme etiketleri, hata mesajları, içerik – string veri olarak işlenir. String'leri anlamak, işlevsel kullanıcı arayüzleri oluşturmak için gereklidir.

String'ler, tek veya çift tırnak arasında yer alan karakter dizileridir.

```javascript
'This is a string'
"This is also a string"
let myString = 'This is a string value stored in a variable';
```

**Bu kavramları anlamak:**
- **Tek tırnak `'` veya çift tırnak `"` kullanır**: string tanımlamak için
- **Metin verilerini saklar**: harfler, sayılar ve semboller içerebilir
- **String değerlerini değişkenlere atar**: daha sonra kullanmak için
- **Metni ayırt etmek için tırnak işaretleri gerektirir**: değişken adlarından

String yazarken tırnak işaretlerini kullanmayı unutmayın, aksi takdirde JavaScript bunun bir değişken adı olduğunu varsayar.

### String'leri Biçimlendirme

String manipülasyonu, metin öğelerini birleştirmenize, değişkenleri dahil etmenize ve program durumuna yanıt veren dinamik içerik oluşturmanıza olanak tanır. Bu teknik, metni programlı olarak oluşturmanıza olanak tanır.

Çoğu zaman birden fazla string'i birleştirmeniz gerekir – bu işleme birleştirme (concatenation) denir.

İki veya daha fazla string'i **birleştirmek** veya bir araya getirmek için `+` operatörünü kullanın.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
```

**Adım adım, burada olanlar:**
- **Birden fazla string'i birleştirir**: `+` operatörünü kullanarak
- **String'leri doğrudan birleştirir**: ilk örnekte boşluk olmadan
- **Okunabilirlik için boşluk karakterleri `" "` ekler**
- **Virgül gibi noktalama işaretleri ekler**: doğru biçimlendirme için

✅ Neden JavaScript'te `1 + 1 = 2`, ama `'1' + '1' = 11`? Düşünün. Peki ya `'1' + 1`?

**Şablon string'ler** (template literals), string'leri biçimlendirmenin başka bir yoludur, ancak normal tırnaklar yerine ters tırnak işareti kullanılır. Düz metin olmayan her şey `${ }` yer tutucularına yerleştirilmelidir. Buna string olabilecek değişkenler de dahildir.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

**Her bir kısmı anlayalım:**
- **Ters tırnak `` ` `` kullanır**: normal tırnaklar yerine şablon string'ler oluşturmak için
- **Değişkenleri doğrudan gömer**: `${}` yer tutucu sözdizimi kullanarak
- **Boşlukları ve biçimlendirmeyi tam olarak korur**: yazıldığı gibi
- **Değişkenlerle karmaşık string'ler oluşturmak için daha temiz bir yol sağlar**
Formatlama hedeflerinize her iki yöntemle de ulaşabilirsiniz, ancak şablon dizileri boşlukları ve satır sonlarını korur.

✅ Şablon dizisi yerine düz bir dizeyi ne zaman kullanırsınız?

### Booleanlar

Booleanlar en basit veri türünü temsil eder: yalnızca iki değerden birini tutabilirler – `true` veya `false`. Bu ikili mantık sistemi, 19. yüzyıl matematikçisi George Boole'un geliştirdiği Boolean cebirine dayanır.

Basitliklerine rağmen, booleanlar program mantığı için çok önemlidir. Kodunuzun, bir kullanıcının giriş yapıp yapmadığı, bir düğmeye tıklanıp tıklanmadığı veya belirli kriterlerin karşılanıp karşılanmadığı gibi koşullara dayalı kararlar almasını sağlar.

Booleanlar yalnızca iki değer olabilir: `true` veya `false`. Booleanlar, belirli koşullar karşılandığında hangi kod satırlarının çalışması gerektiğine karar vermeye yardımcı olur. Çoğu durumda, [operatörler](../../../../2-js-basics/1-data-types) bir Boolean değerini ayarlamada yardımcı olur ve genellikle değişkenlerin başlatıldığını veya değerlerinin bir operatörle güncellendiğini fark edersiniz ve yazarsınız.

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

**Yukarıdaki örnekte:**
- **Boolean değeri** `true` saklayan bir değişken **oluşturduk**
- Boolean değeri `false` saklamayı **gösterdik**
- Tam olarak `true` ve `false` anahtar kelimelerini (tırnak işareti olmadan) **kullandık**
- Bu değişkenleri koşullu ifadelerde kullanmak için **hazırladık**

✅ Bir değişken, boolean `true` olarak değerlendiriliyorsa 'doğru' olarak kabul edilebilir. İlginç bir şekilde, JavaScript'te [tüm değerler, yanlış olarak tanımlanmadıkça doğru kabul edilir](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## GitHub Copilot Agent Challenge 🚀

Agent modunu kullanarak aşağıdaki meydan okumayı tamamlayın:

**Açıklama:** Bu derste öğrendiğiniz tüm JavaScript veri türlerini gerçek dünya veri senaryolarını ele alırken gösteren bir kişisel bilgi yöneticisi oluşturun.

**İstek:** Bir kişinin adını (string), yaşını (number), öğrenci olup olmadığını (boolean), favori renklerini bir dizi olarak ve sokak, şehir ve posta kodu özelliklerini içeren bir adres nesnesini içeren bir kullanıcı profili nesnesi oluşturan bir JavaScript programı yazın. Profil bilgilerini görüntülemek ve bireysel alanları güncellemek için işlevler ekleyin. String birleştirme, şablon dizileri, yaş ile aritmetik işlemler ve öğrenci durumu için boolean mantığını gösterdiğinizden emin olun.

[Agent modu](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hakkında daha fazla bilgi edinin.

## 🚀 Meydan Okuma

JavaScript'in geliştiricileri şaşırtabilecek bazı davranışları vardır. İşte keşfetmek için klasik bir örnek: tarayıcı konsolunuza şunu yazmayı deneyin: `let age = 1; let Age = 2; age == Age` ve sonucu gözlemleyin. Sonuç `false` döner – nedenini belirleyebilir misiniz?

Bu, JavaScript'in anlaşılması gereken birçok davranışından birini temsil eder. Bu tuhaflıklara aşina olmak, daha güvenilir kod yazmanıza ve sorunları daha etkili bir şekilde ayıklamanıza yardımcı olacaktır.

## Ders Sonrası Quiz
[Ders sonrası quiz](https://ff-quizzes.netlify.app)

## Gözden Geçirme ve Kendi Kendine Çalışma

[Bu JavaScript alıştırmaları listesini](https://css-tricks.com/snippets/javascript/) inceleyin ve birini deneyin. Ne öğrendiniz?

## Ödev

[Veri Türleri Uygulaması](assignment.md)

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çeviriler hata veya yanlışlıklar içerebilir. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.