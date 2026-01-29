# DOM Elemanı İnceleme Ödevi

## Genel Bakış

Artık DOM manipülasyonunun gücünü ilk elden deneyimlediğinize göre, DOM arayüzlerinin daha geniş dünyasını keşfetme zamanı geldi. Bu ödev, yalnızca öğeleri sürüklemenin ötesinde, farklı web teknolojilerinin DOM ile nasıl etkileşimde bulunduğunu daha iyi anlamanızı sağlayacak.

## Öğrenme Hedefleri

Bu ödevi tamamlayarak:
- Belirli bir DOM arayüzünü derinlemesine **araştıracak** ve anlayacaksınız
- DOM manipülasyonunun gerçek dünya uygulamalarını **analiz edeceksiniz**
- Teorik kavramları pratik uygulamalarla **bağdaştıracaksınız**
- Teknik dokümantasyon ve analiz becerilerinizi **geliştireceksiniz**

## Talimatlar

### Adım 1: DOM Arayüzünüzü Seçin

MDN'nin kapsamlı [DOM arayüzleri listesine](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) gidin ve ilginizi çeken bir arayüz seçin. Çeşitlilik için aşağıdaki kategorilerden seçim yapmayı düşünebilirsiniz:

**Yeni Başlayanlar İçin Uygun Seçenekler:**
- `Element.classList` - CSS sınıflarını dinamik olarak yönetme
- `Document.querySelector()` - Gelişmiş öğe seçimi
- `Element.addEventListener()` - İşaretçi olaylarının ötesinde olay işleme
- `Window.localStorage` - İstemci tarafı veri depolama

**Orta Seviye Zorluklar:**
- `Intersection Observer API` - Öğenin görünürlüğünü algılama
- `MutationObserver` - DOM değişikliklerini izleme
- `Drag and Drop API` - İşaretçi tabanlı yaklaşımımıza alternatif
- `Geolocation API` - Kullanıcı konumuna erişim

**İleri Düzey Keşif:**
- `Web Components` - Özel öğeler ve shadow DOM
- `Canvas API` - Programlanabilir grafikler
- `Web Workers` - Arka plan işlemleri
- `Service Workers` - Çevrimdışı işlevsellik

### Adım 2: Araştırma ve Dokümantasyon

300-500 kelimelik kapsamlı bir analiz oluşturun ve şunları içermesine dikkat edin:

#### Teknik Genel Bakış
- Seçtiğiniz arayüzün ne yaptığını açık, yeni başlayanlara uygun bir dilde **tanımlayın**
- Sağladığı temel yöntemleri, özellikleri veya olayları **açıklayın**
- Çözmeyi amaçladığı problem türlerini **tanımlayın**

#### Gerçek Dünya Uygulaması
- Seçtiğiniz arayüzü kullanan bir web sitesi **bulun** (kodu inceleyin veya örnekleri araştırın)
- Mümkünse kod parçacıklarıyla birlikte belirli bir uygulamayı **dokümante edin**
- Geliştiricilerin neden bu yaklaşımı seçtiğini **analiz edin**
- Kullanıcı deneyimini nasıl geliştirdiğini **açıklayın**

#### Pratik Uygulama
- Arayüzünüzü teraryum projesinde kullandığımız tekniklerle **karşılaştırın**
- Arayüzünüzün teraryum işlevselliğini nasıl geliştirebileceğini veya genişletebileceğini **önerin**
- Bu arayüzün değerli olabileceği diğer projeleri **belirleyin**

### Adım 3: Kod Örneği

Arayüzünüzü çalışırken gösteren basit, çalışan bir kod örneği ekleyin. Bu örnek:
- **Fonksiyonel** olmalı - Kod test edildiğinde gerçekten çalışmalı
- **Yorumlanmış** olmalı - Her bir kısmın ne yaptığını açıklayın
- **İlgili** olmalı - Gerçekçi bir kullanım senaryosuyla bağlantılı olmalı
- **Yeni başlayanlara uygun** olmalı - Web geliştirmeyi öğrenen biri tarafından anlaşılabilir olmalı

## Teslim Formatı

Gönderiminizi açık başlıklarla yapılandırın:

```markdown
# [Interface Name] DOM Investigation

## What It Does
[Technical overview]

## Real-World Example
[Website analysis and implementation details]

## Code Demonstration
[Your working example with comments]

## Reflection
[How this connects to our terrarium project and future applications]
```

## Değerlendirme Rubriği

| Kriter | Mükemmel (A) | Yeterli (B) | Gelişmekte (C) | Geliştirme Gerekiyor (D) |
|--------|--------------|-------------|----------------|--------------------------|
| **Teknik Anlayış** | Derin bir anlayış sergiler, doğru açıklamalar ve uygun terminoloji kullanır | Sağlam bir anlayış gösterir, çoğunlukla doğru açıklamalar yapar | Bazı yanlış anlamalarla birlikte temel bir anlayış gösterir | Önemli hatalarla sınırlı bir anlayış sergiler |
| **Gerçek Dünya Analizi** | Gerçek bir uygulamayı belirler ve spesifik örneklerle detaylı analiz eder | Gerçek bir örnek bulur ve yeterli analiz yapar | Örnek bulur ancak analiz derinlikten yoksundur | Belirsiz veya yanlış bir gerçek dünya bağlantısı |
| **Kod Örneği** | Çalışan, iyi yorumlanmış ve arayüzü açıkça gösteren kod | Fonksiyonel kod, yeterli yorumlarla | Kod çalışıyor ancak daha iyi dokümantasyona ihtiyaç var | Kodda hatalar veya yetersiz açıklama |
| **Yazım Kalitesi** | Açık, ilgi çekici yazım, uygun yapı ve teknik iletişim | İyi organize edilmiş, iyi teknik yazım | Yeterli organizasyon ve açıklık | Zayıf organizasyon veya belirsiz iletişim |
| **Eleştirel Düşünme** | Kavramlar arasında anlamlı bağlantılar kurar ve yenilikçi uygulamalar önerir | İyi analitik düşünme ve ilgili bağlantılar gösterir | Bazı analizler mevcut ancak daha derin olabilir | Eleştirel düşünme kanıtı sınırlı |

## Başarı İçin İpuçları

**Araştırma Stratejileri:**
- Yetkili bilgi için MDN dokümantasyonu ile **başlayın**
- GitHub veya CodePen'de kod örnekleri **arayın**
- Tarayıcı geliştirici araçlarını kullanarak popüler web sitelerini **kontrol edin**
- Görsel açıklamalar için eğitim videoları **izleyin**

**Yazım Yönergeleri:**
- Belgeleri kopyalamak yerine **kendi kelimelerinizi kullanın**
- Spesifik örnekler ve kod parçacıkları **ekleyin**
- Teknik kavramları bir arkadaşınıza öğretiyormuş gibi **açıklayın**
- Arayüzünüzü daha geniş web geliştirme kavramlarıyla **bağdaştırın**

**Kod Örneği Fikirleri:**
- Arayüzün ana özelliklerini gösteren basit bir demo **oluşturun**
- Teraryum projesindeki kavramları temel alarak **geliştirin**
- Görsel tasarımdan çok işlevselliğe **odaklanın**
- Kodun doğru çalıştığından emin olmak için **test edin**

## Teslim Tarihi

[Buraya teslim tarihini ekleyin]

## Sorular?

Bu ödevin herhangi bir yönü hakkında açıklama yapmanız gerekiyorsa, sormaktan çekinmeyin! Bu araştırma, her gün kullandığımız etkileşimli web deneyimlerini mümkün kılan DOM'un nasıl çalıştığını daha iyi anlamanızı sağlayacaktır.

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.