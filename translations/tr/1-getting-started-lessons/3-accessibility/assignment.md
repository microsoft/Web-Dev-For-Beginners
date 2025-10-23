<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e6d0f456dfc22afb41bbdefeb5ec179d",
  "translation_date": "2025-10-22T23:50:42+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/assignment.md",
  "language_code": "tr"
}
-->
# Kapsamlı Web Sitesi Erişilebilirlik Denetimi

## Talimatlar

Bu ödevde, öğrendiğiniz ilke ve teknikleri uygulayarak gerçek bir web sitesinin profesyonel düzeyde erişilebilirlik denetimini gerçekleştireceksiniz. Bu uygulamalı deneyim, erişilebilirlik engellerini ve çözümlerini daha iyi anlamanızı sağlayacaktır.

Erişilebilirlik sorunları olduğu görülen bir web sitesi seçin—zaten mükemmel bir siteyi analiz etmektense sorunlu bir siteyi incelemek daha fazla öğrenme fırsatı sunar. İyi adaylar arasında eski web siteleri, karmaşık web uygulamaları veya zengin multimedya içeriği olan siteler bulunur.

### Aşama 1: Stratejik manuel değerlendirme

Otomatik araçlara başvurmadan önce kapsamlı bir manuel değerlendirme yapın. Bu insan odaklı yaklaşım, araçların kaçırdığı sorunları genellikle ortaya çıkarır ve gerçek kullanıcı deneyimini anlamanıza yardımcı olur.

**🔍 Temel değerlendirme kriterleri:**

**Navigasyon ve Yapı:**
- Sadece klavye (Tab, Shift+Tab, Enter, Space, Ok tuşları) kullanarak tüm siteyi gezebiliyor musunuz?
- Tüm etkileşimli öğelerde odak göstergeleri açıkça görülebiliyor mu?
- Başlık yapısı (H1-H6) mantıklı bir içerik taslağı oluşturuyor mu?
- Ana içeriğe atlamak için geçiş bağlantıları var mı?

**Görsel Erişilebilirlik:**
- Sitede yeterli renk kontrastı var mı (normal metin için minimum 4.5:1)?
- Site, önemli bilgileri iletmek için yalnızca renge mi dayanıyor?
- Tüm görsellerin uygun alternatif metni var mı?
- Düzen, %200 yakınlaştırıldığında işlevsel kalıyor mu?

**İçerik ve İletişim:**
- "Buraya tıklayın" gibi belirsiz bağlantı metinleri var mı?
- Görsel ipuçları olmadan içerik ve işlevselliği anlayabiliyor musunuz?
- Form alanları doğru şekilde etiketlenmiş ve gruplandırılmış mı?
- Hata mesajları açık ve yardımcı mı?

**Etkileşimli Öğeler:**
- Tüm düğmeler ve form kontrolleri yalnızca klavye ile çalışıyor mu?
- Dinamik içerik değişiklikleri ekran okuyuculara duyuruluyor mu?
- Modal diyaloglar ve karmaşık widget'lar uygun erişilebilirlik kalıplarını takip ediyor mu?

📝 **Bulgularınızı belgeleyin** ve belirli örnekler, ekran görüntüleri ve sayfa URL'leri ekleyin. Hem sorunları hem de iyi yapılan şeyleri not edin.

### Aşama 2: Kapsamlı otomatik testler

Şimdi manuel bulgularınızı endüstri standardı erişilebilirlik test araçlarını kullanarak doğrulayın ve genişletin. Her araç farklı güçlü yönlere sahiptir, bu nedenle birden fazla araç kullanmak tam kapsam sağlar.

**🛠️ Gerekli test araçları:**

1. **Lighthouse Erişilebilirlik Denetimi** (Chrome/Edge DevTools'a entegre)
   - Birden fazla sayfada denetim yapın
   - Belirli metriklere ve önerilere odaklanın
   - Erişilebilirlik puanınızı ve belirli ihlalleri not edin

2. **axe DevTools** (tarayıcı eklentisi - endüstri standardı)
   - Lighthouse'dan daha ayrıntılı sorun tespiti
   - Düzeltmeler için belirli kod örnekleri sağlar
   - WCAG 2.1 kriterlerine karşı test yapar

3. **WAVE Web Erişilebilirlik Değerlendirici** (tarayıcı eklentisi)
   - Erişilebilirlik özelliklerinin görsel temsili
   - Hem hataları hem de olumlu özellikleri vurgular
   - Sayfa yapısını anlamak için harika bir araç

4. **Renk Kontrast Analizörleri**
   - WebAIM Kontrast Denetleyicisi ile belirli renk çiftlerini test edin
   - Sayfa genelinde analiz için tarayıcı eklentileri
   - Hem WCAG AA hem de AAA standartlarına karşı test yapın

**🎧 Gerçek yardımcı teknoloji testleri:**
- **Ekran okuyucu testi**: NVDA (Windows), VoiceOver (Mac) veya TalkBack (Android) kullanın
- **Sadece klavye ile navigasyon**: Farenizi çıkarın ve tüm siteyi gezin
- **Yakınlaştırma testi**: %200 ve %400 yakınlaştırma seviyelerinde işlevselliği test edin
- **Ses kontrol testi**: Mümkünse sesli navigasyon araçlarını deneyin

**📊 Sonuçlarınızı organize edin** ve bir ana elektronik tablo oluşturun:
- Sorun açıklaması ve konumu
- Önem seviyesi (Kritik/Yüksek/Orta/Düşük)
- İhlal edilen WCAG başarı kriteri
- Sorunu tespit eden araç
- Ekran görüntüleri ve kanıtlar

### Aşama 3: Kapsamlı bulguların belgelenmesi

Hem teknik sorunları hem de insan üzerindeki etkilerini anladığınızı gösteren profesyonel bir erişilebilirlik denetim raporu oluşturun.

**📋 Gerekli rapor bölümleri:**

1. **Yönetici Özeti** (1 sayfa)
   - Web sitesi URL'si ve kısa açıklaması
   - Genel erişilebilirlik olgunluk seviyesi
   - En kritik 3 sorun
   - Engelli kullanıcılar üzerindeki tahmini etkisi

2. **Metodoloji** (½ sayfa)
   - Test yaklaşımı ve kullanılan araçlar
   - Değerlendirilen sayfalar ve cihaz/tarayıcı kombinasyonları
   - Değerlendirilen standartlar (WCAG 2.1 AA)

3. **Detaylı Bulgular** (2-3 sayfa)
   - WCAG prensibine göre kategorize edilmiş sorunlar (Algılanabilir, İşletilebilir, Anlaşılabilir, Sağlam)
   - Ekran görüntüleri ve belirli örnekler ekleyin
   - Bulduğunuz olumlu erişilebilirlik özelliklerini not edin
   - Otomatik araç sonuçlarıyla çapraz referans yapın

4. **Kullanıcı Etki Değerlendirmesi** (1 sayfa)
   - Belirlenen sorunların farklı engelli kullanıcıları nasıl etkilediği
   - Gerçek kullanıcı deneyimlerini açıklayan senaryolar
   - İş etkisi (yasal risk, SEO, kullanıcı tabanı genişlemesi)

**📸 Kanıt toplama:**
- Erişilebilirlik ihlallerinin ekran görüntüleri
- Sorunlu kullanıcı akışlarının ekran kayıtları
- Araç raporları (PDF olarak kaydedin)
- Sorunları gösteren kod örnekleri

### Aşama 4: Profesyonel iyileştirme planı

Erişilebilirlik sorunlarını çözmek için stratejik, öncelikli bir plan geliştirin. Bu, gerçek iş kısıtlamalarını ele alan profesyonel bir web geliştirici gibi düşünme yeteneğinizi gösterir.

**🎯 Belirlenen her sorun için detaylı iyileştirme önerileri (minimum 10 sorun):**

**Her bir sorun için şunları sağlayın:**

- **Sorun Açıklaması**: Neyin yanlış olduğunu ve neden sorunlu olduğunu açık bir şekilde açıklayın
- **WCAG Referansı**: İhlal edilen belirli başarı kriteri (örneğin, "2.4.4 Bağlantı Amacı (Bağlamda) - Seviye A")
- **Kullanıcı Etkisi**: Bunun farklı engelli kullanıcıları nasıl etkilediği
- **Çözüm**: Belirli kod değişiklikleri, tasarım modifikasyonları veya süreç iyileştirmeleri
- **Öncelik Seviyesi**: Kritik (temel kullanımı engeller) / Yüksek (önemli engel) / Orta (kullanılabilirlik sorunu) / Düşük (iyileştirme)
- **Uygulama Çabası**: Zaman/zorluk tahmini (Hızlı çözüm / Orta çaba / Büyük yeniden yapılandırma)
- **Test Doğrulama**: Düzeltmenin işe yaradığını nasıl doğrulayacağınızı belirtin

**Örnek iyileştirme girişi:**

```
Issue: Generic "Read more" link text appears 8 times on homepage
WCAG Reference: 2.4.4 Link Purpose (In Context) - Level A
User Impact: Screen reader users cannot distinguish between links when viewed in link list
Solution: Replace with descriptive text like "Read more about sustainability initiatives"
Priority: High (major navigation barrier)
Effort: Low (30 minutes to update content)
Testing: Generate link list with screen reader - each link should be meaningful standalone
```

**📈 Stratejik uygulama aşamaları:**

- **Aşama 1 (0-2 hafta)**: Temel işlevselliği engelleyen kritik sorunlar
- **Aşama 2 (1-2 ay)**: Daha iyi kullanıcı deneyimi için yüksek öncelikli iyileştirmeler
- **Aşama 3 (3-6 ay)**: Orta öncelikli iyileştirmeler ve süreç geliştirmeleri
- **Aşama 4 (Sürekli)**: Sürekli izleme ve iyileştirme

## Değerlendirme Ölçütleri

Erişilebilirlik denetiminiz hem teknik doğruluk hem de profesyonel sunum açısından değerlendirilecektir:

| Kriter | Mükemmel (90-100%) | İyi (80-89%) | Tatmin Edici (70-79%) | Geliştirme Gerekiyor (<70%) |
|--------|--------------------|--------------|-----------------------|---------------------------|
| **Manuel Test Derinliği** | Tüm POUR prensiplerini kapsayan kapsamlı değerlendirme, ayrıntılı gözlemler ve kullanıcı senaryoları | Çoğu erişilebilirlik alanını iyi kapsayan, açık bulgular ve bazı kullanıcı etkisi analizleri | Temel alanları kapsayan, yeterli gözlemlerle temel değerlendirme | Sınırlı test, yüzeysel gözlemler ve minimum kullanıcı etkisi değerlendirmesi |
| **Araç Kullanımı ve Analiz** | Tüm gerekli araçları etkili bir şekilde kullanır, bulguları çapraz referans yapar, açık kanıtlar içerir ve araç sınırlamalarını analiz eder | Çoğu aracı iyi belgelerle kullanır, bazı çapraz referanslar ve yeterli kanıtlar içerir | Gerekli araçları temel belgelerle kullanır ve bazı kanıtlar içerir | Minimum araç kullanımı, zayıf belgeler veya eksik kanıtlar |
| **Sorun Belirleme ve Kategorilendirme** | Tüm WCAG prensiplerinde 15+ spesifik sorun belirler, doğru şekilde kategorize eder, derin anlayış gösterir | Çoğu WCAG prensibinde 10-14 sorun belirler, iyi kategorize eder, sağlam anlayış gösterir | 7-9 sorun belirler, yeterli WCAG kapsamı ve temel kategorilendirme | <7 sorun belirler, sınırlı kapsam veya zayıf kategorilendirme |
| **Çözüm Kalitesi ve Uygulanabilirlik** | 10+ ayrıntılı, uygulanabilir çözüm, doğru WCAG referansları, gerçekçi uygulama zaman çizelgeleri ve doğrulama yöntemleri içerir | 8-9 iyi geliştirilmiş çözüm, çoğunlukla doğru referanslar ve iyi uygulama detayları içerir | 6-7 temel çözüm, bazı detaylar ve genellikle gerçekçi yaklaşımlar içerir | <6 çözüm veya yetersiz detay, gerçekçi olmayan uygulamalar |
| **Profesyonel İletişim** | Rapor mükemmel şekilde organize edilmiş, açıkça yazılmış, yönetici özeti içerir, uygun teknik dil kullanır ve iş dokümanı standartlarına uyar | İyi organize edilmiş, iyi yazılmış, çoğu gerekli bölümü içerir, uygun ton kullanır | Yeterince organize edilmiş, kabul edilebilir yazım, temel gerekli bölümleri içerir | Zayıf organizasyon, belirsiz yazım veya önemli bölümlerin eksikliği |
| **Gerçek Dünya Uygulaması** | İş etkisi, yasal hususlar, kullanıcı çeşitliliği ve pratik uygulama zorluklarını anladığını gösterir | Pratik uygulamalarla ilgili iyi bir anlayış gösterir, bazı iş bağlamı içerir | Gerçek dünya uygulamalarını temel düzeyde anlar | Pratik uygulamalara sınırlı bağlantı |

## İleri Düzey Zorluk Seçenekleri

**🚀 Ek zorluk arayan öğrenciler için:**

- **Karşılaştırmalı Analiz**: 2-3 rakip web sitesini denetleyin ve erişilebilirlik olgunluklarını karşılaştırın
- **Mobil Erişilebilirlik Odaklı**: Android TalkBack veya iOS VoiceOver kullanarak mobil erişilebilirlik sorunlarına derinlemesine dalın
- **Uluslararası Perspektif**: Farklı ülkelerin erişilebilirlik standartlarını araştırın ve uygulayın (EN 301 549, Section 508, ADA)
- **Erişilebilirlik Bildirimi İncelemesi**: Web sitesinin mevcut erişilebilirlik bildirimini (varsa) bulgularınıza karşı değerlendirin

## Teslim Edilecekler

Profesyonel düzeyde analiz ve pratik uygulama planlamasını gösteren kapsamlı bir erişilebilirlik denetim raporu gönderin:

**📄 Nihai Rapor Gereksinimleri:**

1. **Yönetici Özeti** (1 sayfa)
   - Web sitesi genel görünümü ve erişilebilirlik olgunluk değerlendirmesi
   - İş etkisiyle birlikte temel bulgular özeti
   - Önerilen öncelikli eylemler

2. **Metodoloji ve Kapsam** (1 sayfa)
   - Test yaklaşımı, kullanılan araçlar ve değerlendirme kriterleri
   - Değerlendirilen sayfalar/bölümler ve varsa sınırlamalar
   - Standart uyumluluk çerçevesi (WCAG 2.1 AA)

3. **Detaylı Bulgular Raporu** (3-4 sayfa)
   - Kullanıcı senaryolarıyla manuel test gözlemleri
   - Otomatik araç sonuçlarıyla çapraz referans
   - WCAG prensiplerine göre organize edilmiş sorunlar ve kanıtlar
   - Belirlenen olumlu erişilebilirlik özellikleri

4. **Stratejik İyileştirme Planı** (3-4 sayfa)
   - Öncelikli iyileştirme önerileri (minimum 10)
   - Çaba tahminleriyle uygulama zaman çizelgesi
   - Başarı metrikleri ve doğrulama yöntemleri
   - Uzun vadeli erişilebilirlik bakım stratejisi

5. **Destekleyici Kanıtlar** (Ekler)
   - Erişilebilirlik ihlallerinin ve test araçlarının ekran görüntüleri
   - Sorunları ve çözümleri gösteren kod örnekleri
   - Araç raporları ve denetim özetleri
   - Ekran okuyucu test notları veya kayıtları

**📊 Format Gereksinimleri:**
- **Belge formatı**: PDF (profesyonel sunum)
- **Kelime sayısı**: 2.500-3.500 kelime (ekler ve ekran görüntüleri hariç)
- **Görsel öğeler**: Ekran görüntüleri, diyagramlar ve örnekler ekleyin
- **Atıflar**: WCAG yönergelerini ve erişilebilirlik kaynaklarını uygun şekilde referans alın

**💡 Mükemmellik için İpuçları:**
- Tutarlı başlıklar ve stil ile profesyonel rapor formatı kullanın
- Kolay gezinme için bir içindekiler tablosu ekleyin
- Teknik doğruluğu açık, iş dünyasına uygun bir dil ile dengeleyin
- Teknik uygulama ve kullanıcı etkisi anlayışını gösterin

## Öğrenme Çıktıları

Bu kapsamlı erişilebilirlik denetimini tamamladıktan sonra, temel profesyonel beceriler geliştirmiş olacaksınız:

**🎯 Teknik Yetkinlikler:**
- **Erişilebilirlik Testi Uzmanlığı**: Endüstri standardı manuel ve otomatik test yöntemlerinde yetkinlik
- **WCAG Uygulaması**: Web İçeriği Erişilebilirlik Yönergelerini gerçek dünya senaryolarına uygulama deneyimi
- **Yardımcı Teknoloji Anlayışı**: Ekran okuyucular ve klavye navigasyonu ile uygulamalı deneyim
- **Sorun-Çözüm Haritalama**: Erişilebilirlik engellerini belirleme ve spesifik, uygulanabilir iyileştirme stratejileri geliştirme yeteneği

**💼 Profesyonel Beceriler:**
- **Teknik İletişim**: Çeşitli paydaşlar için profesyonel erişilebilirlik raporları yazma deneyimi
- **Stratejik Planlama**: Kullanıcı etkisi ve uygulama yapılabilirliğine dayalı erişilebilirlik iyileştirmelerini önceliklendirme yeteneği
- **Kalite Güvencesi**: Geliştirme yaşam döngüsünün bir parçası olarak erişilebilirlik testini anlama
- **Risk Değerlendirmesi**: Erişilebilirlik uyumluluğunun yasal, iş ve etik sonuçlarını anlama

**🌍 Kapsayıcı Tasarım Zihniyeti:**
- **Kullanıcı Empatisi**: Çeşitli kullanıcı ihtiyaçlarını ve yardımcı teknoloji etkileşimlerini derinlemesine anlama
- **Evrensel Tasarım İlkeleri**: Erişilebilir tasarımın yalnızca engelli kullanıcılar için değil, tüm kullanıcılar için faydalı olduğunu kabul etme
- **Sürekli İyileştirme**: Sürekli erişilebilirlik değerlendirme ve geliştirme çerçevesi
- **Savunuculuk Becerileri**: Gelecekteki projelerde ve ekiplerde erişilebilirlik en iyi uygulamalarını teşvik etme güveni

**🚀 Kariyer Hazırlığı:**
Bu ödev, gerçek dünya erişilebilirlik danışmanlık projelerini yansıtarak şu becerileri sergileyen portföy değerinde bir deneyim sunar:
- Sistematik problem

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.