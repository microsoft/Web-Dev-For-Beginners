<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "124efddbb65166cddb38075ad6dae324",
  "translation_date": "2025-10-23T00:08:20+00:00",
  "source_file": "6-space-game/4-collision-detection/assignment.md",
  "language_code": "tr"
}
-->
# Çarpışmaları Keşfet

## Talimatlar

Çarpışma algılama bilginizi kullanarak farklı nesne etkileşimlerini gösteren özel bir mini oyun oluşturun. Bu ödev, yaratıcı uygulama ve deneyim yoluyla çarpışma mekaniğini anlamanıza yardımcı olacaktır.

### Proje gereksinimleri

**Küçük bir etkileşimli oyun oluşturun:**
- **Birden fazla hareketli nesne**, klavye veya fare girdisiyle kontrol edilebilir
- Derste öğrendiğiniz dikdörtgen kesişim prensiplerini kullanan bir **çarpışma algılama sistemi**
- Çarpışmalar meydana geldiğinde **görsel geri bildirim** (nesne yok edilmesi, renk değişiklikleri, efektler)
- Çarpışmaları anlamlı ve ilgi çekici kılan **oyun kuralları**

### Yaratıcı öneriler

**Aşağıdaki senaryolardan birini uygulamayı düşünebilirsiniz:**
- **Asteroit alanı**: Bir gemiyi tehlikeli uzay enkazı arasında yönlendirin
- **Çarpışan arabalar**: Fizik tabanlı bir çarpışma arenası oluşturun
- **Meteor savunması**: Dünya'yı yaklaşan uzay kayalarından koruyun
- **Toplama oyunu**: Engellerden kaçınarak nesneleri toplayın
- **Bölge kontrolü**: Alanı ele geçirmeye çalışan rekabetçi nesneler

### Teknik uygulama

**Çözümünüz şunları göstermelidir:**
- Dikdörtgen tabanlı çarpışma algılamanın doğru kullanımı
- Kullanıcı girdisi için olay odaklı programlama
- Nesne yaşam döngüsü yönetimi (oluşturma ve yok etme)
- Uygun sınıf yapısıyla temiz kod organizasyonu

### Ekstra zorluklar

**Oyununuzu ek özelliklerle geliştirin:**
- Çarpışmalar meydana geldiğinde **parçacık efektleri**
- Farklı çarpışma türleri için **ses efektleri**
- Çarpışma sonuçlarına dayalı bir **puanlama sistemi**
- Farklı davranışlara sahip **birden fazla çarpışma türü**
- Zamanla artan **ilerleyici zorluk**

## Değerlendirme Ölçütleri

| Kriter | Üstün | Yeterli | Geliştirme Gerekiyor |
|--------|-------|---------|----------------------|
| **Çarpışma Algılama** | Birden fazla nesne türü ve karmaşık etkileşim kurallarıyla doğru dikdörtgen tabanlı çarpışma algılama uygulanmış | Temel çarpışma algılama basit nesne etkileşimleriyle doğru çalışıyor | Çarpışma algılamada sorunlar var veya tutarlı çalışmıyor |
| **Kod Kalitesi** | Temiz, iyi organize edilmiş kod, uygun sınıf yapısı, anlamlı değişken adları ve uygun yorumlar içeriyor | Kod çalışıyor ancak daha iyi organize edilebilir veya belgelenebilir | Kod anlaşılması zor veya kötü yapılandırılmış |
| **Kullanıcı Etkileşimi** | Akıcı oynanış, net görsel geri bildirim ve ilgi çekici mekaniklerle duyarlı kontroller | Temel kontroller çalışıyor ve yeterli geri bildirim sağlıyor | Kontroller tepkisiz veya kafa karıştırıcı |
| **Yaratıcılık** | Özgün konsept, benzersiz özellikler, görsel cilalama ve yenilikçi çarpışma davranışları içeriyor | Standart uygulama, bazı yaratıcı unsurlarla | Temel işlevsellik, yaratıcı geliştirmeler olmadan |

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çeviriler hata veya yanlışlıklar içerebilir. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan herhangi bir yanlış anlama veya yanlış yorumlama durumunda sorumluluk kabul edilmez.