<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6fd645e97c48cd5eb5a3d290815ec8b5",
  "translation_date": "2025-10-22T23:44:30+00:00",
  "source_file": "2-js-basics/1-data-types/assignment.md",
  "language_code": "tr"
}
-->
# Veri Türleri Uygulaması: E-ticaret Alışveriş Sepeti

## Talimatlar

Modern bir e-ticaret alışveriş sepeti sistemi oluşturduğunuzu hayal edin. Bu ödev, farklı JavaScript veri türlerinin gerçek dünya uygulamaları oluşturmak için nasıl bir arada çalıştığını anlamanıza yardımcı olacaktır.

### Göreviniz

JavaScript veri türlerini bir alışveriş sepeti uygulamasında nasıl kullanacağınız hakkında kapsamlı bir analiz oluşturun. Yedi temel veri türü ve nesneler için şunları yapmanız gerekiyor:

1. **Belirleyin**: Veri türünü ve amacını tanımlayın
2. **Açıklayın**: Bu veri türünün belirli alışveriş sepeti özellikleri için neden en iyi seçim olduğunu açıklayın
3. **Gerçekçi kod örnekleri sağlayın**: Veri türünün nasıl kullanıldığını gösterin
4. **Açıklayın**: Bu veri türünün alışveriş sepetinin diğer bölümleriyle nasıl etkileşimde bulunduğunu anlatın

### Kapsanması Gereken Veri Türleri

**Temel Veri Türleri:**
- **String**: Ürün adları, açıklamalar, kullanıcı bilgileri
- **Number**: Fiyatlar, miktarlar, vergi hesaplamaları
- **Boolean**: Ürün mevcudiyeti, kullanıcı tercihleri, sepet durumu
- **Null**: Kasten boş bırakılmış değerler (örneğin eksik indirim kodları)
- **Undefined**: Başlatılmamış değerler veya eksik veriler
- **Symbol**: Benzersiz tanımlayıcılar (ileri düzey kullanım)
- **BigInt**: Büyük finansal hesaplamalar (ileri düzey kullanım)

**Referans Türleri:**
- **Object**: Ürün detayları, kullanıcı profilleri, sepet içeriği
- **Array**: Ürün listesi, sipariş geçmişi, kategoriler

### Her Veri Türü İçin Örnek Format

Her veri türü için yanıtınızı şu şekilde yapılandırın:

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```

**Gerçek Dünya Kullanımı:** [Bu türün pratikte nasıl çalışacağını açıklayın]

**Etkileşimler:** [Bu veri türünün diğerleriyle nasıl çalıştığını açıklayın]
```

### Bonus Challenges

1. **Type Coercion**: Show an example where JavaScript automatically converts between data types in your shopping cart (e.g., string "5" + number 10)

2. **Data Validation**: Demonstrate how you would check if user input is the correct data type before processing

3. **Performance Considerations**: Explain when you might choose one data type over another for performance reasons

### Submission Guidelines

- Create a markdown document with clear headings for each data type
- Include working JavaScript code examples
- Use realistic e-commerce scenarios in your examples
- Explain your reasoning clearly for beginners to understand
- Test your code examples to ensure they work correctly

## Rubric

| Criteria | Exemplary (90-100%) | Proficient (80-89%) | Developing (70-79%) | Needs Improvement (Below 70%) |
|----------|---------------------|---------------------|---------------------|------------------------------|
| **Data Type Coverage** | All 7 primitive types and objects/arrays covered with detailed explanations | 6-7 data types covered with good explanations | 4-5 data types covered with basic explanations | Fewer than 4 data types or minimal explanations |
| **Code Examples** | All examples are realistic, working, and well-commented | Most examples work and are relevant to e-commerce | Some examples work but may be generic | Code examples are incomplete or non-functional |
| **Real-world Application** | Clearly connects each data type to practical shopping cart features | Good connection to e-commerce scenarios | Some connection to shopping cart context | Limited real-world application demonstrated |
| **Technical Accuracy** | All technical information is correct and demonstrates deep understanding | Most technical information is accurate | Generally accurate with minor errors | Contains significant technical errors |
| **Communication** | Explanations are clear, beginner-friendly, and well-organized | Good explanations that are mostly clear | Explanations are understandable but may lack clarity | Explanations are unclear or poorly organized |
| **Bonus Elements** | Includes multiple bonus challenges with excellent execution | Includes one or more bonus challenges well done | Attempts bonus challenges with mixed success | No bonus challenges attempted |

### Learning Objectives

By completing this assignment, you will:
- ✅ **Understand** the seven JavaScript primitive data types and their uses
- ✅ **Apply** data types to real-world programming scenarios
- ✅ **Analyze** when to choose specific data types for different purposes
- ✅ **Create** working code examples that demonstrate data type usage
- ✅ **Explain** technical concepts in beginner-friendly language
- ✅ **Connect** fundamental programming concepts to practical applications

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.