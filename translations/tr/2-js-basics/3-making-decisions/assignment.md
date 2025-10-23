<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ffe366b2d1f037b99fbadbe1dc81083d",
  "translation_date": "2025-10-22T23:46:17+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "tr"
}
-->
# Karar Verme: Öğrenci Not İşlemcisi

## Öğrenme Hedefleri

Bu ödevde, bu dersteki karar verme kavramlarını uygulayarak farklı not sistemlerinden öğrenci notlarını işleyen bir program oluşturacaksınız. Öğrencilerin derslerini geçip geçmediğini belirlemek için `if...else` ifadelerini, karşılaştırma operatörlerini ve mantıksal operatörleri kullanacaksınız.

## Zorluk

Bir okulda çalışıyorsunuz ve yakın zamanda başka bir kurumla birleşti. Şimdi iki tamamen farklı not sisteminden gelen öğrenci notlarını işlemeli ve hangi öğrencilerin geçtiğini belirlemelisiniz. Bu, koşullu mantık pratiği yapmak için mükemmel bir fırsat!

### Not Sistemlerini Anlamak

#### Birinci Not Sistemi (Sayısal)
- Notlar 1-5 arasında sayılarla verilir
- **Geçme notu**: 3 ve üzeri (3, 4 veya 5)
- **Kalma notu**: 3'ün altında (1 veya 2)

#### İkinci Not Sistemi (Harf Notları)
- Notlar harflerle ifade edilir: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Geçme notları**: `A`, `A-`, `B`, `B-`, `C`, `C-` (listelenen tüm notlar geçer)
- **Not**: Bu sistemde `D` veya `F` gibi kalma notları bulunmaz

### Göreviniz

`allStudents` adlı bir dizi verildiğinde, bu dizideki tüm öğrencileri ve notlarını işleyerek, kendi not sistemlerine göre geçen tüm öğrencileri içeren yeni bir `studentsWhoPass` dizisi oluşturun.

```javascript
let allStudents = [
  'A',    // Letter grade - passing
  'B-',   // Letter grade - passing  
  1,      // Numeric grade - failing
  4,      // Numeric grade - passing
  5,      // Numeric grade - passing
  2       // Numeric grade - failing
];

let studentsWhoPass = [];
```

### Adım Adım Yaklaşım

1. **Bir döngü kurun** ve `allStudents` dizisindeki her notu tek tek inceleyin
2. **Not türünü kontrol edin** (sayı mı yoksa metin mi?)
3. **Uygun not sistemi kurallarını uygulayın**:
   - Sayılar için: not >= 3 olup olmadığını kontrol edin
   - Harfler için: geçerli harf notlarından biri olup olmadığını kontrol edin
4. **Geçen notları** `studentsWhoPass` dizisine ekleyin

### Faydalı Kod Teknikleri

Bu derste öğrendiğiniz şu JavaScript kavramlarını kullanın:

- **typeof operatörü**: `typeof grade === 'number'` ile notun sayısal olup olmadığını kontrol edin
- **Karşılaştırma operatörleri**: Sayısal notları karşılaştırmak için `>=` kullanın
- **Mantıksal operatörler**: Birden fazla harf notu koşulunu kontrol etmek için `||` kullanın
- **if...else ifadeleri**: Farklı not sistemlerini işlemek için kullanın
- **Dizi metotları**: Geçen notları yeni diziye eklemek için `.push()` kullanın

### Beklenen Çıktı

Programınızı çalıştırdığınızda, `studentsWhoPass` şu değerleri içermelidir: `['A', 'B-', 4, 5]`

**Bu notların geçme sebebi:**
- `'A'` ve `'B-'` geçerli harf notlarıdır (bu sistemdeki tüm harf notları geçer)
- `4` ve `5` sayısal notlar olup 3'ten büyüktür
- `1` ve `2` başarısızdır çünkü 3'ten küçüktür

## Çözümünüzü Test Etme

Kodunuzu farklı senaryolarla test edin:

```javascript
// Test with different grade combinations
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Your solution should work with any combination of valid grades
```

## Ekstra Zorluklar

Temel ödevi tamamladıktan sonra şu ek görevleri deneyin:

1. **Doğrulama ekleyin**: Geçersiz notları kontrol edin (örneğin negatif sayılar veya geçersiz harfler)
2. **İstatistikleri hesaplayın**: Kaç öğrencinin geçtiğini ve kaldığını hesaplayın
3. **Not dönüşümü**: Tüm notları tek bir sayısal sisteme dönüştürün (A=5, B=4, C=3, vb.)

## Değerlendirme Ölçütleri

| Kriter | Mükemmel (4) | Yeterli (3) | Gelişmekte (2) | Başlangıç (1) |
|--------|--------------|-------------|----------------|---------------|
| **Fonksiyonellik** | Program her iki sistemden geçen tüm notları doğru bir şekilde belirler | Program küçük sorunlar veya uç durumlarla çalışır | Program kısmen çalışır ancak mantıksal hatalar içerir | Programda ciddi hatalar var veya çalışmıyor |
| **Kod Yapısı** | Temiz, iyi organize edilmiş kod ve doğru if...else mantığı | Uygun yapı, doğru koşullu ifadelerle | Kabul edilebilir yapı, bazı organizasyonel sorunlarla | Zayıf yapı, mantığı takip etmek zor |
| **Kavramların Kullanımı** | Karşılaştırma operatörleri, mantıksal operatörler ve koşullu ifadeleri etkili bir şekilde kullanır | Ders kavramlarını iyi kullanır, küçük eksikliklerle | Ders kavramlarını kısmen kullanır ancak önemli unsurlar eksik | Ders kavramlarını sınırlı bir şekilde kullanır |
| **Problem Çözme** | Problemi net bir şekilde anlar ve zarif bir çözüm yaklaşımı gösterir | İyi bir problem çözme yaklaşımı ve sağlam mantık | Yeterli problem çözme, bazı karışıklıklarla | Belirsiz yaklaşım, problemi anlama eksikliği gösterir |

## Teslimat Yönergeleri

1. **Kodunuzu** verilen örneklerle iyice test edin
2. **Açıklamalar ekleyin**: Özellikle koşullu ifadeler için mantığınızı açıklayın
3. **Çıktıyı doğrulayın**: Beklenen sonuçlarla eşleştiğinden emin olun: `['A', 'B-', 4, 5]`
4. **Uç durumları göz önünde bulundurun**: Boş diziler veya beklenmedik veri türleri gibi

> 💡 **İpucu**: Basit başlayın! Önce temel işlevselliği çalıştırın, ardından daha sofistike özellikler ekleyin. Unutmayın, hedef bu derste öğrendiğiniz karar verme mantığını uygulamaktır.

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.