<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8abcada0534e0fb3a7556ea3c5a2a8a4",
  "translation_date": "2025-10-22T23:45:39+00:00",
  "source_file": "2-js-basics/4-arrays-loops/assignment.md",
  "language_code": "tr"
}
-->
# Diziler ve Döngüler Ödevi

## Talimatlar

Diziler ve döngülerle çalışmayı pratik etmek için aşağıdaki alıştırmaları tamamlayın. Her alıştırma, derste öğrenilen kavramlar üzerine inşa edilmiştir ve farklı döngü türlerini ve dizi yöntemlerini uygulamanızı teşvik eder.

### Alıştırma 1: Sayı Deseni Oluşturucu
1-20 arasındaki her 3. sayıyı listeleyen ve konsola yazdıran bir program oluşturun.

**Gereksinimler:**
- Özel bir artışla `for` döngüsü kullanın
- Sayıları kullanıcı dostu bir formatta görüntüleyin
- Mantığınızı açıklayan açıklayıcı yorumlar ekleyin

**Beklenen Çıktı:**
```
3, 6, 9, 12, 15, 18
```

> **İpucu:** For döngünüzdeki iterasyon ifadesini değiştirerek sayıları atlayabilirsiniz.

### Alıştırma 2: Dizi Analizi
En az 8 farklı sayı içeren bir dizi oluşturun ve verileri analiz etmek için fonksiyonlar yazın.

**Gereksinimler:**
- En az 8 değer içeren `numbers` adlı bir dizi oluşturun
- En yüksek sayıyı döndüren `findMaximum()` adlı bir fonksiyon yazın
- En düşük sayıyı döndüren `findMinimum()` adlı bir fonksiyon yazın  
- Tüm sayıların toplamını döndüren `calculateSum()` adlı bir fonksiyon yazın
- Her bir fonksiyonu test edin ve sonuçları görüntüleyin

**Bonus Görev:** Dizideki ikinci en yüksek sayıyı bulan bir fonksiyon oluşturun.

### Alıştırma 3: Dizi İşleme (String)
En sevdiğiniz filmler/kitaplar/şarkılardan oluşan bir dizi oluşturun ve farklı döngü türlerini pratik edin.

**Gereksinimler:**
- En az 5 string değer içeren bir dizi oluşturun
- Geleneksel bir `for` döngüsü kullanarak öğeleri numaralarla görüntüleyin (1. Öğe Adı)
- Öğeleri büyük harflerle görüntülemek için bir `for...of` döngüsü kullanın
- Toplam karakter sayısını saymak ve görüntülemek için `forEach()` yöntemini kullanın

**Örnek Çıktı:**
```
Traditional for loop:
1. The Matrix
2. Inception
3. Interstellar

For...of loop (uppercase):
THE MATRIX
INCEPTION
INTERSTELLAR

Character count:
Total characters across all titles: 42
```

### Alıştırma 4: Veri Filtreleme (İleri Seviye)
Öğrencileri temsil eden nesnelerden oluşan bir diziyi işleyen bir program oluşturun.

**Gereksinimler:**
- `name`, `age`, `grade` özelliklerine sahip en az 5 öğrenci nesnesinden oluşan bir dizi oluşturun
- 18 yaş ve üzerindeki öğrencileri bulmak için döngüler kullanın
- Tüm öğrencilerin ortalama notunu hesaplayın
- Sadece notları 85'in üzerinde olan öğrencilerden oluşan yeni bir dizi oluşturun

**Örnek Yapı:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Add more students...
];
```

## Kodunuzu Test Etme

Programlarınızı test etmek için:
1. Her alıştırmayı tarayıcınızın konsolunda çalıştırın
2. Çıktıların beklenen sonuçlarla eşleştiğini doğrulayın
3. Farklı veri setleriyle test yapın
4. Kodunuzun uç durumları (boş diziler, tek öğeler) ele aldığından emin olun

## Teslimat Yönergeleri

Teslimatınıza şunları dahil edin:
- Her alıştırma için iyi yorumlanmış JavaScript kodu
- Programlarınızın çalıştığını gösteren ekran görüntüleri veya metin çıktıları
- Her görev için hangi döngü türünü seçtiğinizi ve nedenini açıklayan kısa bir açıklama

## Değerlendirme Ölçütleri

| Kriter | Mükemmel (3 puan) | Yeterli (2 puan) | Geliştirme Gerekiyor (1 puan) |
| ------- | ----------------- | ---------------- | ---------------------------- |
| **Fonksiyonellik** | Tüm alıştırmalar doğru bir şekilde tamamlanmış, bonus görevler dahil | Tüm gerekli alıştırmalar doğru çalışıyor | Bazı alıştırmalar eksik veya hatalı |
| **Kod Kalitesi** | Temiz, iyi organize edilmiş kod, açıklayıcı değişken adlarıyla | Kod çalışıyor ancak daha temiz olabilir | Kod düzensiz veya anlaşılması zor |
| **Yorumlar** | Mantığı ve kararları açıklayan kapsamlı yorumlar | Temel yorumlar mevcut | Yetersiz veya hiç yorum yok |
| **Döngü Kullanımı** | Farklı döngü türlerini doğru bir şekilde kullanma becerisi gösteriyor | Döngüler doğru kullanılmış ancak sınırlı çeşitlilikte | Yanlış veya verimsiz döngü kullanımı |
| **Test Etme** | Birden fazla senaryo ile kapsamlı test kanıtı | Temel testler yapılmış | Test yapıldığına dair çok az kanıt |

## Düşünme Soruları

Alıştırmaları tamamladıktan sonra şunları düşünün:
1. Hangi döngü türünü kullanmak size daha doğal geldi ve neden?
2. Dizilerle çalışırken karşılaştığınız zorluklar nelerdi?
3. Bu beceriler gerçek dünya web geliştirme projelerine nasıl uygulanabilir?
4. Kodunuzu performans açısından optimize etmeniz gerekseydi, neyi farklı yapardınız?

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çeviriler hata veya yanlışlıklar içerebilir. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalardan sorumlu değiliz.