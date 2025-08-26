<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bf62b82567e6f9bdf4abda9ae0ccb64a",
  "translation_date": "2025-08-25T21:38:53+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "tr"
}
-->
# Operatörler

## Talimatlar

Operatörlerle oynayın. İşte uygulayabileceğiniz bir program önerisi:

Elinizde iki farklı not sistemi kullanan bir grup öğrenci var.

### Birinci not sistemi

Bir not sistemi, notların 1-5 arasında olduğu ve 3 ve üzerinin dersi geçtiği anlamına geldiği bir sistemdir.

### İkinci not sistemi

Diğer not sistemi ise şu notlara sahiptir: `A, A-, B, B-, C, C-`, burada `A` en yüksek nottur ve `C` en düşük geçme notudur.

### Görev

Aşağıdaki `allStudents` dizisini kullanarak, tüm öğrencileri ve notlarını temsil eden bir dizi oluşturun. Daha sonra, dersi geçen tüm öğrencileri içeren yeni bir `studentsWhoPass` dizisi oluşturun.

> TIP, bir for-döngüsü, if...else ve karşılaştırma operatörlerini kullanın:

```javascript
let allStudents = [
  'A',
  'B-',
  1,
  4,
  5,
  2
]

let studentsWhoPass = [];
```

## Değerlendirme Kriterleri

| Kriter   | Örnek Teşkil Eden              | Yeterli                       | Geliştirmeye İhtiyaç Duyan      |
| -------- | ------------------------------ | ----------------------------- | ------------------------------- |
|          | Tam bir çözüm sunulmuş         | Kısmi bir çözüm sunulmuş      | Hatalar içeren bir çözüm sunulmuş |

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.