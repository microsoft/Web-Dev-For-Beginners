<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "7f2c48e04754724123ea100a822765e5",
  "translation_date": "2025-11-04T00:48:16+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "tr"
}
-->
# Erişilebilir Web Sayfaları Oluşturma

![Erişilebilirlik Hakkında Her Şey](../../../../translated_images/tr/webdev101-a11y.8ef3025c858d897a.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

```mermaid
journey
    title Your Accessibility Learning Adventure
    section Foundation
      Understanding Users: 5: You
      Testing Tools: 4: You
      POUR Principles: 5: You
    section Build Skills
      Semantic HTML: 4: You
      Visual Design: 5: You
      ARIA Techniques: 4: You
    section Master Practice
      Keyboard Navigation: 5: You
      Form Accessibility: 4: You
      Real-world Testing: 5: You
```

## Ders Öncesi Quiz
[Ders öncesi quiz](https://ff-quizzes.netlify.app/web/)

> Web'in gücü evrenselliğinde yatar. Engellilik durumuna bakılmaksızın herkesin erişimi temel bir unsurdur.
>
> \- Sir Timothy Berners-Lee, W3C Direktörü ve World Wide Web'in mucidi

Sizi şaşırtabilecek bir şey: erişilebilir web siteleri oluşturduğunuzda, sadece engelli insanlara yardımcı olmuyorsunuz—aslında web'i herkes için daha iyi hale getiriyorsunuz!

Sokak köşelerindeki kaldırım rampalarını fark ettiniz mi? Başlangıçta tekerlekli sandalyeler için tasarlandılar, ancak şimdi bebek arabası kullananlar, teslimat çalışanları, valiz taşıyan yolcular ve bisikletçiler için de faydalı. Erişilebilir web tasarımı tam olarak böyle çalışır—bir gruba yardımcı olan çözümler genellikle herkes için faydalı olur. Harika, değil mi?

Bu derste, web'i nasıl herkes için çalışır hale getirebileceğimizi keşfedeceğiz. Web standartlarına zaten entegre edilmiş pratik teknikleri öğrenecek, test araçlarını kullanacak ve erişilebilirliğin sitelerinizi tüm kullanıcılar için nasıl daha kullanışlı hale getirdiğini göreceksiniz.

Dersin sonunda, erişilebilirliği geliştirme sürecinizin doğal bir parçası haline getirme konusunda kendinize güveneceksiniz. Düşünceli tasarım seçimlerinin web'i milyarlarca kullanıcıya nasıl açabileceğini keşfetmeye hazır mısınız? Haydi başlayalım!

```mermaid
mindmap
  root((Web Accessibility))
    Users
      Screen readers
      Keyboard navigation
      Voice control
      Magnification
    Technologies
      HTML semantics
      ARIA attributes
      CSS focus indicators
      Keyboard events
    Benefits
      Wider audience
      Better SEO
      Legal compliance
      Universal design
    Testing
      Automated tools
      Manual testing
      User feedback
      Real assistive tech
```

> Bu dersi [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon) üzerinden alabilirsiniz!

## Yardımcı Teknolojileri Anlamak

Kodlamaya başlamadan önce, farklı yeteneklere sahip insanların web'i nasıl deneyimlediğini anlamak için biraz zaman ayıralım. Bu sadece teori değil—bu gerçek dünya gezinme modellerini anlamak sizi çok daha iyi bir geliştirici yapacak!

Yardımcı teknolojiler, engelli insanların web siteleriyle etkileşim kurmasına yardımcı olan oldukça etkileyici araçlardır. Bu teknolojilerin nasıl çalıştığını kavradığınızda, erişilebilir web deneyimleri oluşturmak çok daha sezgisel hale gelir. Kodunuzu başkasının gözünden görmeyi öğrenmek gibi bir şey.

### Ekran okuyucular

[Ekran okuyucular](https://en.wikipedia.org/wiki/Screen_reader), dijital metni konuşma veya braille çıktısına dönüştüren oldukça sofistike teknolojilerdir. Genellikle görme engelli kişiler tarafından kullanılsa da, disleksi gibi öğrenme güçlükleri olan kullanıcılar için de oldukça faydalıdır.

Bir ekran okuyucuyu, size bir kitabı çok akıllı bir anlatıcının okuması gibi düşünebilirsiniz. İçeriği mantıklı bir sırayla sesli olarak okur, "buton" veya "link" gibi etkileşimli öğeleri duyurur ve bir sayfada gezinmek için klavye kısayolları sağlar. Ancak işin püf noktası şu—ekran okuyucular yalnızca web sitelerini doğru yapı ve anlamlı içerikle oluşturduğumuzda sihirlerini gerçekleştirebilir. İşte burada devreye siz geliştiriciler giriyorsunuz!

**Platformlar arası popüler ekran okuyucular:**
- **Windows**: [NVDA](https://www.nvaccess.org/about-nvda/) (ücretsiz ve en popüler), [JAWS](https://webaim.org/articles/jaws/), [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) (yerleşik)
- **macOS/iOS**: [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) (yerleşik ve oldukça yetenekli)
- **Android**: [TalkBack](https://support.google.com/accessibility/android/answer/6283677) (yerleşik)
- **Linux**: [Orca](https://wiki.gnome.org/Projects/Orca) (ücretsiz ve açık kaynak)

**Ekran okuyucuların web içeriğinde gezinme yöntemleri:**

Ekran okuyucular, deneyimli kullanıcılar için gezinmeyi verimli hale getiren çeşitli yöntemler sunar:
- **Sıralı okuma**: İçeriği yukarıdan aşağıya doğru okur, tıpkı bir kitabı takip eder gibi
- **Dönüm noktası navigasyonu**: Sayfa bölümleri arasında geçiş yapar (başlık, navigasyon, ana içerik, alt bilgi)
- **Başlık navigasyonu**: Sayfa yapısını anlamak için başlıklar arasında geçiş yapar
- **Bağlantı listeleri**: Hızlı erişim için tüm bağlantıların bir listesini oluşturur
- **Form kontrolleri**: Giriş alanları ve butonlar arasında doğrudan gezinir

> 💡 **Beni şaşırtan bir şey**: Ekran okuyucu kullanıcılarının %68'i öncelikle başlıklarla gezinir ([WebAIM Anketi](https://webaim.org/projects/screenreadersurvey9/#finding)). Bu, başlık yapınızın kullanıcılar için bir yol haritası gibi olduğu anlamına gelir—doğru yaptığınızda, insanların içeriğinizde daha hızlı yol almasına gerçekten yardımcı oluyorsunuz!

### Test iş akışınızı oluşturma

İyi haber—etkili erişilebilirlik testi göz korkutucu olmak zorunda değil! Otomatik araçları (açık sorunları yakalamakta harikalar) biraz manuel testle birleştirmek isteyeceksiniz. İşte en fazla sorunu yakalayan ve tüm gününüzü harcamayan sistematik bir yaklaşım:

**Temel manuel test iş akışı:**

```mermaid
flowchart TD
    A[🚀 Start Testing] --> B{⌨️ Keyboard Navigation}
    B --> C[Tab through all interactive elements]
    C --> D{🎧 Screen Reader Testing}
    D --> E[Test with NVDA/VoiceOver]
    E --> F{🔍 Zoom Testing}
    F --> G[Zoom to 200% and test functionality]
    G --> H{🎨 Color/Contrast Check}
    H --> I[Verify all text meets contrast ratios]
    I --> J{👁️ Focus Management}
    J --> K[Ensure focus indicators are visible]
    K --> L[✅ Testing Complete]
    
    style A fill:#e3f2fd
    style L fill:#e8f5e8
    style B fill:#fff3e0
    style D fill:#f3e5f5
    style F fill:#e0f2f1
    style H fill:#fce4ec
    style J fill:#e8eaf6
```

**Adım adım test kontrol listesi:**
1. **Klavyeyle gezinme**: Sadece Tab, Shift+Tab, Enter, Space ve Ok tuşlarını kullanın
2. **Ekran okuyucu testi**: NVDA, VoiceOver veya Narrator'ı etkinleştirin ve gözleriniz kapalı gezin
3. **Yakınlaştırma testi**: %200 ve %400 yakınlaştırma seviyelerinde test yapın
4. **Renk kontrastı doğrulama**: Tüm metin ve kullanıcı arayüzü bileşenlerini kontrol edin
5. **Odak göstergesi testi**: Tüm etkileşimli öğelerin görünür odak durumlarına sahip olduğundan emin olun

✅ **Lighthouse ile başlayın**: Tarayıcınızın Geliştirici Araçlarını açın, bir Lighthouse erişilebilirlik denetimi çalıştırın ve ardından sonuçları manuel test odak alanlarınızı yönlendirmek için kullanın.

### Yakınlaştırma ve büyütme araçları

Telefonunuzda metin çok küçük olduğunda yakınlaştırma hareketi yaptığınız veya parlak güneş ışığında dizüstü bilgisayar ekranınıza gözlerinizi kısarak baktığınız zamanları hatırlıyor musunuz? Birçok kullanıcı, içeriği her gün okunabilir hale getirmek için büyütme araçlarına güveniyor. Buna düşük görme yetisine sahip kişiler, yaşlı yetişkinler ve dışarıda bir web sitesini okumaya çalışan herkes dahildir.

Modern yakınlaştırma teknolojileri, sadece şeyleri büyütmekten çok daha fazlasını sunar. Bu araçların nasıl çalıştığını anlamak, her büyütme seviyesinde işlevsel ve çekici kalan duyarlı tasarımlar oluşturmanıza yardımcı olacaktır.

**Modern tarayıcı yakınlaştırma özellikleri:**
- **Sayfa yakınlaştırma**: Tüm içeriği orantılı olarak ölçeklendirir (metin, resimler, düzen) - tercih edilen yöntem budur
- **Sadece metin yakınlaştırma**: Yazı tipi boyutunu artırır, ancak orijinal düzeni korur
- **Yakınlaştırma hareketi**: Geçici büyütme için mobil cihazlarda hareket desteği
- **Tarayıcı desteği**: Tüm modern tarayıcılar, işlevselliği bozmadan %500'e kadar yakınlaştırmayı destekler

**Özel büyütme yazılımları:**
- **Windows**: [Büyüteç](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) (yerleşik), [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/)
- **macOS/iOS**: [Zoom](https://www.apple.com/accessibility/mac/vision/) (yerleşik ve gelişmiş özelliklerle)

> ⚠️ **Tasarım Düşüncesi**: WCAG, içeriğin %200 oranında yakınlaştırıldığında işlevsel kalmasını gerektirir. Bu seviyede yatay kaydırma minimumda olmalı ve tüm etkileşimli öğeler erişilebilir kalmalıdır.

✅ **Duyarlı tasarımınızı test edin**: Tarayıcınızı %200 ve %400 oranında yakınlaştırın. Düzeniniz zarif bir şekilde uyum sağlıyor mu? Aşırı kaydırma olmadan tüm işlevlere hala erişebiliyor musunuz?

## Modern Erişilebilirlik Test Araçları

Artık insanların yardımcı teknolojilerle web'de nasıl gezindiğini anladığınıza göre, erişilebilir web siteleri oluşturmanıza ve test etmenize yardımcı olacak araçları keşfedelim.

Bunu şöyle düşünün: otomatik araçlar açık sorunları yakalamakta harikadır (örneğin eksik alt metin), manuel testler ise sitenizin gerçek dünyada kullanımı iyi hissettirdiğinden emin olmanıza yardımcı olur. Birlikte, sitelerinizin herkes için çalıştığına dair güven verirler.

### Renk kontrastı testi

İyi haber: renk kontrastı en yaygın erişilebilirlik sorunlarından biridir, ancak düzeltmesi en kolay olanlardan biridir. İyi kontrast, görme engelli kullanıcılardan plajda telefonlarını okumaya çalışan insanlara kadar herkese fayda sağlar.

**WCAG kontrast gereksinimleri:**

| Metin Türü | WCAG AA (Minimum) | WCAG AAA (Gelişmiş) |
|------------|-------------------|---------------------|
| **Normal metin** (18pt altında) | 4.5:1 kontrast oranı | 7:1 kontrast oranı |
| **Büyük metin** (18pt+ veya 14pt+ kalın) | 3:1 kontrast oranı | 4.5:1 kontrast oranı |
| **UI bileşenleri** (butonlar, form kenarları) | 3:1 kontrast oranı | 3:1 kontrast oranı |

**Temel test araçları:**
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) - Renk seçici ile masaüstü uygulaması
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Anında geri bildirim sağlayan web tabanlı araç
- [Stark](https://www.getstark.co/) - Figma, Sketch, Adobe XD için tasarım aracı eklentisi
- [Accessible Colors](https://accessible-colors.com/) - Erişilebilir renk paletleri bulun

✅ **Daha iyi renk paletleri oluşturun**: Marka renklerinizle başlayın ve erişilebilir varyasyonlar oluşturmak için kontrast kontrol araçlarını kullanın. Bunları tasarım sisteminizin erişilebilir renk belirteçleri olarak belgeleyin.

### Kapsamlı erişilebilirlik denetimi

En etkili erişilebilirlik testi, birden fazla yaklaşımı birleştirir. Tek bir araç her şeyi yakalamaz, bu yüzden çeşitli yöntemlerle bir test rutini oluşturmak kapsamlı bir kapsama alanı sağlar.

**Tarayıcı tabanlı test (Geliştirici Araçlarına entegre):**
- **Chrome/Edge**: Lighthouse erişilebilirlik denetimi + Erişilebilirlik paneli
- **Firefox**: Ayrıntılı ağaç görünümü ile Erişilebilirlik Denetleyicisi
- **Safari**: Web Denetleyicisi'ndeki Denetim sekmesi ile VoiceOver simülasyonu

**Profesyonel test uzantıları:**
- [axe DevTools](https://www.deque.com/axe/devtools/) - Endüstri standardı otomatik test
- [WAVE](https://wave.webaim.org/extension/) - Hata vurgulama ile görsel geri bildirim
- [Accessibility Insights](https://accessibilityinsights.io/) - Microsoft'un kapsamlı test paketi

**Komut satırı ve CI/CD entegrasyonu:**
- [axe-core](https://github.com/dequelabs/axe-core) - Otomatik test için JavaScript kütüphanesi
- [Pa11y](https://pa11y.org/) - Komut satırı erişilebilirlik test aracı
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) - Otomatik erişilebilirlik puanlama

> 🎯 **Test Hedefi**: Lighthouse erişilebilirlik puanınızı 95+ olarak belirleyin. Unutmayın, otomatik araçlar erişilebilirlik sorunlarının yalnızca %30-40'ını yakalar—manuel test hala gereklidir!

### 🧠 **Test Becerileri Kontrolü: Sorunları Bulmaya Hazır mısınız?**

**Erişilebilirlik testi hakkında nasıl hissediyorsunuz:**
- Şu anda size en uygun test yöntemi hangisi gibi görünüyor?
- Bir gün boyunca sadece klavye ile gezinmeyi hayal edebiliyor musunuz?
- Çevrimiçi olarak kişisel olarak yaşadığınız bir erişilebilirlik engeli nedir?

```mermaid
pie title "Accessibility Issues Caught by Different Methods"
    "Automated Tools" : 35
    "Manual Testing" : 40
    "User Feedback" : 25
```

> **Güven artırıcı**: Profesyonel erişilebilirlik test uzmanları tam olarak bu yöntem kombinasyonunu kullanır. Endüstri standartlarını öğreniyorsunuz!

## Erişilebilirliği Baştan İtibaren İnşa Etmek

Erişilebilirlik başarısının anahtarı, bunu en baştan itibaren temelinizin bir parçası haline getirmektir. "Erişilebilirliği sonra eklerim" diye düşünmek cazip gelebilir, ancak bu, bir ev inşa edildikten sonra bir rampa eklemeye çalışmak gibidir. Mümkün mü? Evet. Kolay mı? Pek değil.

Erişilebilirliği bir ev planlamak gibi düşünün—tekerlekli sandalye erişimini ilk mimari planlarınıza dahil etmek, her şeyi sonradan uyarlamaktan çok daha kolaydır.

### POUR prensipleri: Erişilebilirlik temeliniz

Web İçeriği Erişilebilirlik Yönergeleri (WCAG), POUR olarak adlandırılan dört temel prensip etrafında şekillenir. Endişelenmeyin—bunlar sıkıcı akademik kavramlar değil! Aslında herkes için çalışan içerikler oluşturmak için pratik rehberlerdir.

POUR'u kavradığınızda, erişilebilirlik kararları almak çok daha sezgisel hale gelir. Tasarım seçimlerinizi yönlendiren zihinsel bir kontrol listesi gibi. Haydi bunu parçalayalım:

```mermaid
flowchart LR
    A[🔍 PERCEIVABLE<br/>Can users sense it?] --> B[🎮 OPERABLE<br/>Can users use it?]
    B --> C[📖 UNDERSTANDABLE<br/>Can users get it?]
    C --> D[💪 ROBUST<br/>Does it work everywhere?]
    
    A1[Alt text<br/>Captions<br/>Contrast] --> A
    B1[Keyboard access<br/>No seizures<br/>Time limits] --> B
    C1[Clear language<br/>Predictable<br/>Error help] --> C
    D1[Valid code<br/>Compatible<br/>Future-proof] --> D
    
    style A fill:#e1f5fe
    style B fill:#e8f5e8
    style C fill:#fff3e0
    style D fill:#f3e5f5
```

**🔍 Algılanabilir**: Bilgi, kullanıcıların mevcut duyularıyla algılayabileceği şekilde sunulmalıdır

- Metin olmayan içerik için metin alternatifleri sağlayın (resimler, videolar, ses)
- Tüm metin ve kullanıcı arayüzü bileşenleri için yeterli renk kontrastı sağlayın
- Multimedya içerik için altyazılar ve transkriptler sunun
- %200'e kadar yeniden boyutlandırıldığında işlevsel kalan içerik tasarlayın
- Bilgi iletmek için sadece renk değil, birden fazla duyusal özellik kullanın

**🎮 İşlenebilir**: Tüm arayüz bileşenleri mevcut giriş yöntemleriyle işlenebilir olmalıdır

- Tüm işlevselliği klavye navigasyonu ile erişilebilir hale getirin
- Kullanıcılara içeriği okumak ve etkileşimde bulunmak için yeterli zaman sağlayın
- Nöbet veya vestibüler bozukluklara neden olan içerikten kaçının
- Kullanıcılara net yapı ve dönüm noktaları ile verimli bir şekilde gezinmelerine yardımcı olun
- Etkileşimli öğelerin yeterli hedef boyutlarına sahip olduğundan emin olun (minimum 44px)

**📖 Anlaşılabilir**: Bilgi ve kullanıcı arayüzü işlemleri açık ve anlaşılır olmalıdır

- Hedef kitlenize uygun açık, basit bir dil kullanın
- İçeriğin öngörülebilir, tutarlı şekillerde görünmesini ve çalışmasını sağlayın
- Kullanıcı girişleri için net talimatlar ve hata mesajları sağlayın
- Kullanıcıların formlarda hataları anlamalarına ve düzeltmelerine yardımcı olun
- İçeriği mantıksal okuma sırası ve bilgi hiyerarşisi ile düzenleyin

**💪 Sağlam**: İçerik, farklı teknolojiler ve yardımcı cihazlar arasında güvenilir şekilde çalışmalıdır

- **Geçerli, semantik HTML'yi temeliniz olarak kullanın**
- **Mevcut ve gelecekteki yardımcı teknolojilerle uyumluluğu sağlayın**
- **İşaretleme için web standartlarını ve en iyi uygulamaları takip edin**
- **Farklı tarayıcılar, cihazlar ve yardımcı araçlar üzerinde test yapın**  
- **İçeriği, gelişmiş özellikler desteklenmediğinde sorunsuz çalışacak şekilde yapılandırın**

### 🎯 **POUR İlkeleri Kontrolü: Akılda Kalıcı Hale Getirme**

**Temel prensipler üzerine hızlı bir düşünce:**  
- Her bir POUR ilkesini ihlal eden bir web sitesi özelliği düşünebiliyor musunuz?  
- Geliştirici olarak size en doğal gelen ilke hangisi?  
- Bu ilkeler, yalnızca engelli kullanıcılar için değil, herkes için tasarımı nasıl iyileştirebilir?

```mermaid
quadrantChart
    title POUR Principles Impact Matrix
    x-axis Low Effort --> High Effort
    y-axis Low Impact --> High Impact
    quadrant-1 Quick Wins
    quadrant-2 Major Projects
    quadrant-3 Consider Later
    quadrant-4 Strategic Focus
    
    Alt Text: [0.2, 0.9]
    Color Contrast: [0.3, 0.8]
    Semantic HTML: [0.4, 0.9]
    Keyboard Nav: [0.6, 0.8]
    ARIA Complex: [0.8, 0.7]
    Screen Reader Testing: [0.7, 0.6]
```
  
> **Unutmayın**: Yüksek etkili, düşük çaba gerektiren iyileştirmelerle başlayın. Semantik HTML ve alt metin, en az çabayla en büyük erişilebilirlik avantajını sağlar!

## Erişilebilir Görsel Tasarım Oluşturma

İyi görsel tasarım ve erişilebilirlik birbiriyle uyumludur. Erişilebilirlik düşünülerek tasarım yapıldığında, genellikle bu kısıtlamalar daha temiz ve zarif çözümler ortaya çıkarır ve tüm kullanıcılar için faydalı olur.

Herkes için, görsel yeteneklerinden veya içeriğin görüntülendiği koşullardan bağımsız olarak çalışan görsel olarak çekici tasarımlar oluşturmayı keşfedelim.

### Renk ve görsel erişilebilirlik stratejileri

Renk, iletişim için güçlü bir araçtır, ancak önemli bilgileri iletmek için asla tek başına kullanılmamalıdır. Rengin ötesinde tasarım yapmak, daha sağlam ve kapsayıcı deneyimler yaratır.

**Renk görme farklılıklarına göre tasarım yapın:**  
Yaklaşık %8 erkek ve %0.5 kadın, bir tür renk görme farklılığına sahiptir (genellikle "renk körlüğü" olarak adlandırılır). En yaygın türler:  
- **Deuteranopi**: Kırmızı ve yeşili ayırt etmede zorluk  
- **Protanopi**: Kırmızı daha soluk görünür  
- **Tritanopi**: Mavi ve sarıyı ayırt etmede zorluk (nadir)

**Kapsayıcı renk stratejileri:**  

```css
/* ❌ Bad: Using only color to indicate status */
.error { color: red; }
.success { color: green; }

/* ✅ Good: Color plus icons and context */
.error {
  color: #d32f2f;
  border-left: 4px solid #d32f2f;
}
.error::before {
  content: "⚠️";
  margin-right: 8px;
}

.success {
  color: #2e7d32;
  border-left: 4px solid #2e7d32;
}
.success::before {
  content: "✅";
  margin-right: 8px;
}
```
  
**Temel kontrast gereksinimlerinin ötesinde:**  
- Renk seçimlerinizi renk körlüğü simülatörleriyle test edin  
- Renk kodlamanın yanında desenler, dokular veya şekiller kullanın  
- Etkileşimli durumların renk olmadan da ayırt edilebilir olmasını sağlayın  
- Tasarımınızın yüksek kontrast modunda nasıl göründüğünü düşünün  

✅ **Renk erişilebilirliğinizi test edin**: Sitenizin farklı renk görme türlerine sahip kullanıcılar için nasıl göründüğünü görmek için [Coblis](https://www.color-blindness.com/coblis-color-blindness-simulator/) gibi araçları kullanın.

### Odak göstergeleri ve etkileşim tasarımı

Odak göstergeleri, dijital dünyada bir imleç gibidir—klavye kullanıcılarına sayfada nerede olduklarını gösterir. İyi tasarlanmış odak göstergeleri, etkileşimleri net ve tahmin edilebilir hale getirerek herkes için deneyimi geliştirir.

**Modern odak göstergesi en iyi uygulamaları:**  

```css
/* Enhanced focus styles that work across browsers */
button:focus-visible {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(0, 102, 204, 0.25);
}

/* Remove focus outline for mouse users, preserve for keyboard users */
button:focus:not(:focus-visible) {
  outline: none;
}

/* Focus-within for complex components */
.card:focus-within {
  box-shadow: 0 0 0 3px rgba(74, 144, 164, 0.5);
  border-color: #4A90A4;
}

/* Ensure focus indicators meet contrast requirements */
.custom-focus:focus-visible {
  outline: 3px solid #ffffff;
  outline-offset: 2px;
  box-shadow: 0 0 0 6px #000000;
}
```
  
**Odak göstergesi gereksinimleri:**  
- **Görünürlük**: Çevresindeki öğelerle en az 3:1 kontrast oranına sahip olmalı  
- **Genişlik**: Tüm öğe etrafında minimum 2px kalınlık  
- **Süreklilik**: Odak başka bir yere taşınana kadar görünür kalmalı  
- **Ayırt edilebilirlik**: Diğer UI durumlarından görsel olarak farklı olmalı  

> 💡 **Tasarım İpucu**: Harika odak göstergeleri genellikle görünürlüğü artırmak için kontur, kutu gölgesi ve renk değişikliklerinin bir kombinasyonunu kullanır.

✅ **Odak göstergelerini denetleyin**: Web sitenizde sekme tuşuyla gezinerek hangi öğelerin net odak göstergelerine sahip olduğunu not edin. Görülmesi zor veya tamamen eksik olan var mı?

### Semantik HTML: Erişilebilirliğin Temeli

Semantik HTML, yardımcı teknolojilere web siteniz için bir GPS sistemi vermek gibidir. HTML öğelerini amaçlarına uygun şekilde kullandığınızda, ekran okuyucular, klavyeler ve diğer araçlara kullanıcıların etkili bir şekilde gezinmesine yardımcı olacak ayrıntılı bir yol haritası sağlamış olursunuz.

Bunu gerçekten anlamamı sağlayan bir benzetme: Semantik HTML, net kategoriler ve yardımcı işaretlerle düzenlenmiş bir kütüphane ile kitapların rastgele dağıtıldığı bir depo arasındaki fark gibidir. Her iki yerde de aynı kitaplar var, ama hangisinde bir şey bulmaya çalışmayı tercih edersiniz? Aynen öyle!

```mermaid
flowchart TD
    A[🏠 HTML Document] --> B[📰 header]
    A --> C[🧭 nav]
    A --> D[📄 main]
    A --> E[📋 footer]
    
    B --> B1[h1: Site Name<br/>Logo & branding]
    C --> C1[ul: Navigation<br/>Primary links]
    D --> D1[article: Content<br/>section: Subsections]
    D --> D2[aside: Sidebar<br/>Related content]
    E --> E1[nav: Footer links<br/>Copyright info]
    
    D1 --> D1a[h1: Page title<br/>h2: Major sections<br/>h3: Subsections]
    
    style A fill:#e3f2fd
    style B fill:#e8f5e8
    style C fill:#fff3e0
    style D fill:#f3e5f5
    style E fill:#e0f2f1
```
  
**Erişilebilir sayfa yapısının yapı taşları:**  

```html
<!-- Landmark elements provide page navigation structure -->
<header>
  <h1>Your Site Name</h1>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/services">Services</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <header>
      <h1>Article Title</h1>
      <p>Published on <time datetime="2024-10-14">October 14, 2024</time></p>
    </header>
    
    <section>
      <h2>First Section</h2>
      <p>Content that relates to this section...</p>
    </section>
    
    <section>
      <h2>Second Section</h2>
      <p>More related content...</p>
    </section>
  </article>
  
  <aside>
    <h2>Related Links</h2>
    <nav aria-label="Related articles">
      <ul>
        <li><a href="/related-1">First related article</a></li>
        <li><a href="/related-2">Second related article</a></li>
      </ul>
    </nav>
  </aside>
</main>

<footer>
  <p>&copy; 2024 Your Site Name. All rights reserved.</p>
  <nav aria-label="Footer links">
    <ul>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/contact">Contact Us</a></li>
    </ul>
  </nav>
</footer>
```
  
**Semantik HTML'nin erişilebilirliği nasıl dönüştürdüğü:**  

| Semantik Eleman | Amaç | Ekran Okuyucu Faydası |
|------------------|---------|----------------------|
| `<header>` | Sayfa veya bölüm başlığı | "Banner landmark" - hızlıca en üste gitme |
| `<nav>` | Navigasyon bağlantıları | "Navigation landmark" - navigasyon bölümlerinin listesi |
| `<main>` | Ana sayfa içeriği | "Main landmark" - doğrudan içeriğe geçiş |
| `<article>` | Bağımsız içerik | Makale sınırlarını duyurur |
| `<section>` | Temalı içerik grupları | İçerik yapısı sağlar |
| `<aside>` | İlgili yan içerik | "Complementary landmark" |
| `<footer>` | Sayfa veya bölüm altbilgisi | "Contentinfo landmark" |

**Semantik HTML ile ekran okuyucu süper güçleri:**  
- **Landmark navigasyonu**: Büyük sayfa bölümleri arasında anında geçiş yapma  
- **Başlık özetleri**: Başlık yapınızdan bir içerik tablosu oluşturma  
- **Öğe listeleri**: Tüm bağlantılar, düğmeler veya form kontrollerinin listelerini oluşturma  
- **Bağlam farkındalığı**: İçerik bölümleri arasındaki ilişkileri anlama  

> 🎯 **Hızlı Test**: NVDA/JAWS'da landmark kısayollarını (D için landmark, H için başlık, K için bağlantı) kullanarak sitenizde gezinmeyi deneyin. Navigasyon mantıklı mı?

### 🏗️ **Semantik HTML Ustalık Kontrolü: Güçlü Temeller İnşa Etmek**

**Semantik anlayışınızı değerlendirelim:**  
- HTML'ye bakarak bir web sayfasındaki landmarkları tanımlayabilir misiniz?  
- Bir arkadaşınıza `<section>` ve `<div>` arasındaki farkı nasıl açıklardınız?  
- Bir ekran okuyucu kullanıcısı navigasyon sorunları bildirdiğinde ilk olarak neyi kontrol edersiniz?

```mermaid
stateDiagram-v2
    [*] --> UnsementicHTML: div soup
    UnsementicHTML --> SemanticHTML: Add landmarks
    SemanticHTML --> AccessibleHTML: Test with AT
    AccessibleHTML --> [*]: User success!
    
    note right of UnsementicHTML
        Screen readers lost
        Keyboard nav broken
    end note
    
    note right of AccessibleHTML
        Clear navigation
        Efficient browsing
    end note
```
  
> **Uzman içgörüsü**: İyi semantik HTML, erişilebilirlik sorunlarının yaklaşık %70'ini otomatik olarak çözer. Bu temeli ustalıkla öğrenin ve doğru yolda ilerleyin!

✅ **Semantik yapınızı denetleyin**: Tarayıcınızın DevTools'undaki Erişilebilirlik panelini kullanarak erişilebilirlik ağacını görüntüleyin ve işaretlemenizin mantıklı bir yapı oluşturduğundan emin olun.

### Başlık hiyerarşisi: Mantıklı bir içerik taslağı oluşturma

Başlıklar, erişilebilir içerik için kesinlikle çok önemlidir—her şeyi bir arada tutan omurga gibidir. Ekran okuyucu kullanıcıları, içeriğinizi anlamak ve gezinmek için başlıklara büyük ölçüde güvenir. Bunu, sayfanız için bir içerik tablosu sağlamak gibi düşünün.

**Başlıklar için altın kural:**  
Seviyeleri atlamayın. Her zaman mantıklı bir şekilde `<h1>`'den `<h2>`'ye, `<h3>`'e ve devam edin. Okulda taslaklar hazırladığınızı hatırlıyor musunuz? Aynı prensip—"I. Ana Nokta"dan doğrudan "C. Alt-alt nokta"ya geçmezsiniz, değil mi?

**Mükemmel başlık yapısı örneği:**  

```html
<!-- ✅ Excellent: Logical, hierarchical progression -->
<main>
  <h1>Complete Guide to Web Accessibility</h1>
  
  <section>
    <h2>Understanding Screen Readers</h2>
    <p>Introduction to screen reader technology...</p>
    
    <h3>Popular Screen Reader Software</h3>
    <p>NVDA, JAWS, and VoiceOver comparison...</p>
    
    <h3>Testing with Screen Readers</h3>
    <p>Step-by-step testing instructions...</p>
  </section>
  
  <section>
    <h2>Color and Contrast Guidelines</h2>
    <p>Designing with sufficient contrast...</p>
    
    <h3>WCAG Contrast Requirements</h3>
    <p>Understanding the different contrast levels...</p>
    
    <h3>Testing Tools and Techniques</h3>
    <p>Tools for verifying contrast ratios...</p>
  </section>
</main>
```
  
```html
<!-- ❌ Problematic: Skipping levels, inconsistent structure -->
<h1>Page Title</h1>
<h3>Subsection</h3> <!-- Skipped h2 -->
<h2>This should come before h3</h2>
<h1>Another main heading?</h1> <!-- Multiple h1s -->
```
  
**Başlık en iyi uygulamaları:**  
- **Sayfa başına bir `<h1>`**: Genellikle ana sayfa başlığı veya birincil içerik başlığı  
- **Mantıklı ilerleme**: Seviyeleri atlamayın (h1 → h2 → h3, h1 → h3 değil)  
- **Açıklayıcı içerik**: Başlıkları bağlam dışında okunduğunda anlamlı hale getirin  
- **CSS ile görsel stil**: Görünüm için CSS kullanın, yapı için HTML seviyeleri  

**Ekran okuyucu navigasyon istatistikleri:**  
- Ekran okuyucu kullanıcılarının %68'i başlıklarla gezinir ([WebAIM Anketi](https://webaim.org/projects/screenreadersurvey9/#finding))  
- Kullanıcılar mantıklı bir başlık taslağı bulmayı bekler  
- Başlıklar, sayfa yapısını anlamanın en hızlı yolunu sağlar  

> 💡 **Uzman İpucu**: "HeadingsMap" gibi tarayıcı uzantılarını kullanarak başlık yapınızı görselleştirin. İyi organize edilmiş bir içerik tablosu gibi okunmalıdır.

✅ **Başlık yapınızı test edin**: Bir ekran okuyucunun başlık navigasyonunu (NVDA'da H tuşu) kullanarak başlıklar arasında geçiş yapın. İlerleme, içeriğinizin hikayesini mantıklı bir şekilde anlatıyor mu?

### Gelişmiş görsel erişilebilirlik teknikleri

Kontrast ve renk temellerinin ötesinde, gerçekten kapsayıcı görsel deneyimler oluşturmaya yardımcı olan sofistike teknikler vardır. Bu yöntemler, içeriğinizin farklı görüntüleme koşulları ve yardımcı teknolojilerle çalışmasını sağlar.

**Temel görsel iletişim stratejileri:**  
- **Çok modlu geri bildirim**: Görsel, metinsel ve bazen sesli ipuçlarını birleştirin  
- **Aşamalı açıklama**: Bilgiyi sindirilebilir parçalara ayırarak sunun  
- **Tutarlı etkileşim desenleri**: Tanıdık UI konvansiyonlarını kullanın  
- **Duyarlı tipografi**: Metni cihazlar arasında uygun şekilde ölçeklendirin  
- **Yükleme ve hata durumları**: Tüm kullanıcı eylemleri için net geri bildirim sağlayın  

**Erişilebilirliği artıran CSS araçları:**  

```css
/* Screen reader only text - visually hidden but accessible */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Skip link for keyboard navigation */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000000;
  color: #ffffff;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: top 0.3s ease;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}

/* Reduced motion respect */
@media (prefers-reduced-motion: reduce) {
  .skip-link {
    transition: none;
  }
  
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .button {
    border: 2px solid;
  }
}
```
  
> 🎯 **Erişilebilirlik Deseni**: "Atla bağlantısı" klavye kullanıcıları için gereklidir. Sayfanızdaki ilk odaklanabilir öğe olmalı ve doğrudan ana içerik alanına geçmelidir.

✅ **Navigasyonu atlama bağlantısı ekleyin**: Sayfalarınıza atlama bağlantıları ekleyin ve sayfa yüklendiğinde Tab tuşuna basarak test edin. Görünmeli ve sizi ana içeriğe yönlendirmelidir.

## Anlamlı Bağlantı Metni Oluşturma

Bağlantılar, web'in otoyolları gibidir, ancak kötü yazılmış bağlantı metni, "Yer" yerine "Chicago Şehir Merkezi" yazan yol tabelalarına benzer. Pek yardımcı olmaz, değil mi?

İlk öğrendiğimde beni gerçekten etkileyen bir şey: Ekran okuyucular, bir sayfadaki tüm bağlantıları çıkarabilir ve bunları büyük bir liste olarak gösterebilir. Birisi size sayfanızdaki her bağlantının bir dizinini verseydi, her biri kendi başına anlamlı olur muydu? Bağlantı metninizin geçmesi gereken test tam olarak budur!

### Bağlantı navigasyon desenlerini anlama

Ekran okuyucular, iyi yazılmış bağlantı metnine dayanan güçlü bağlantı navigasyon özellikleri sunar:

**Bağlantı navigasyon yöntemleri:**  
- **Sıralı okuma**: Bağlantılar içerik akışının bir parçası olarak okunur  
- **Bağlantı listesi oluşturma**: Tüm sayfa bağlantıları aranabilir bir dizin olarak derlenir  
- **Hızlı navigasyon**: Klavye kısayolları kullanarak bağlantılar arasında geçiş yapma (NVDA'da K tuşu)  
- **Arama işlevi**: Kısmi metin yazarak belirli bağlantıları bulma  

**Bağlam neden önemlidir:**  
Ekran okuyucu kullanıcıları bir bağlantı listesi oluşturduğunda, şu gibi bir şey görürler:  
- "Raporu indir"  
- "Daha fazla bilgi edinin"  
- "Buraya tıklayın"  
- "Gizlilik politikası"  
- "Buraya tıklayın"  

Bu bağlantılardan yalnızca ikisi bağlam dışında okunduğunda faydalı bilgi sağlar!

> 📊 **Kullanıcı Etkisi**: Ekran okuyucu kullanıcıları, sayfa içeriğini hızlıca anlamak için bağlantı listelerini tarar. Genel bağlantı metni, her bağlantının bağlamına geri dönmelerini zorunlu kılarak gezinme hızlarını önemli ölçüde yavaşlatır.

### Kaçınılması gereken yaygın bağlantı metni hataları

Ne işe yaramadığını anlamak, mevcut içerikteki erişilebilirlik sorunlarını tanımanıza ve düzeltmenize yardımcı olur.

**❌ Bağlam sağlamayan genel bağlantı metni:**  

```html
<!-- Meaningless when read from a link list -->
<p>Our sustainability efforts are detailed in our recent report. 
   <a href="/sustainability-2024.pdf">Click here</a> to view it.</p>

<!-- Repeated generic text throughout the page -->
<div class="article-card">
  <h3>Web Accessibility Guide</h3>
  <p>Learn the fundamentals...</p>
  <a href="/accessibility-guide">Read more</a>
</div>
<div class="article-card">
  <h3>Color Contrast Tips</h3>
  <p>Improve your design...</p>
  <a href="/color-contrast">Read more</a>
</div>

<!-- URLs as link text (difficult for screen readers to announce) -->
<p>Visit https://www.w3.org/WAI/WCAG21/quickref/ for WCAG guidelines.</p>

<!-- Vague action words -->
<a href="/contact">Go</a> | <a href="/about">See</a> | <a href="/help">View</a>
```
  
**Bu desenlerin neden başarısız olduğu:**  
- **"Buraya tıklayın"** kullanıcıya hedef hakkında hiçbir şey söylemez  
- **"Daha fazla bilgi edinin"** birden fazla kez tekrarlandığında kafa karışıklığı yaratır  
- **Ham URL'ler** ekran okuyucular tarafından net bir şekilde telaffuz edilmesi zordur  
- **Tek kelimeler** "Git" veya "Gör" gibi açıklayıcı bağlamdan yoksundur  

### Mükemmel bağlantı metni yazma

Açıklayıcı bağlantı metni herkes için faydalıdır—görsel kullanıcılar bağlantıları hızlıca tarayabilir ve ekran okuyucu kullanıcıları hedefleri hemen anlayabilir.

**✅ Açık, açıklayıcı bağlantı metni örnekleri:**  

```html
<!-- Descriptive text that explains the destination -->
<p>Our comprehensive <a href="/sustainability-2024.pdf">2024 sustainability report (PDF, 2.1MB)</a> details our environmental initiatives.</p>

<!-- Specific, unique link text for each card -->
<div class="article-card">
  <h3>Web Accessibility Guide</h3>
  <p>Learn the fundamentals of inclusive design...</p>
  <a href="/accessibility-guide">Read our complete web accessibility guide</a>
</div>
<div class="article-card">
  <h3>Color Contrast Tips</h3>
  <p>Improve your design with better color choices...</p>
  <a href="/color-contrast">Explore color contrast best practices</a>
</div>

<!-- Meaningful text instead of raw URLs -->
<p>The <a href="https://www.w3.org/WAI/WCAG21/quickref/">WCAG 2.1 Quick Reference guide</a> provides comprehensive accessibility guidelines.</p>

<!-- Descriptive action links -->
<a href="/contact">Contact our support team</a> | 
<a href="/about">About our company</a> | 
<a href="/help">Get help with your account</a>
```
  
**Bağlantı metni en iyi uygulamaları:**  
- **Spesifik olun**: "Üç aylık finansal raporu indir" vs. "İndir"  
- **Dosya türü ve boyutunu belirtin**: "(PDF, 1.2MB)" indirilebilir dosyalar için  
- **Bağlantıların harici olarak açıldığını belirtin**: "(yeni pencerede açılır)" gerektiğinde  
- **Aktif dil kullanın**: "Bize ulaşın" vs. "İletişim sayfası"  
- **Kısa tutun**: Mümkünse 2-8 kelime hedefleyin  

### Gelişmiş bağlantı erişilebilirlik desenleri

Bazen görsel tasarım kısıtlamaları veya teknik gereksinimler özel çözümler gerektirir. İşte yaygın zorlu senaryolar için sofistike teknikler:

**Gelişmiş bağlam için ARIA kullanımı:**  

```html
<!-- When button text must be short but needs more context -->
<a href="/report.pdf" 
   aria-label="Download 2024 annual financial report, PDF format, 2.3MB">
  Download Report
</a>

<!-- When the full context comes from surrounding content -->
<h3 id="sustainability-heading">Sustainability Initiative</h3>
<p>Our efforts to reduce environmental impact...</p>
<a href="/sustainability-details" 
   aria-labelledby="sustainability-heading"
   aria-describedby="sustainability-summary">
  Learn more
</a>
<p id="sustainability-summary">Detailed breakdown of our 2024 environmental goals and achievements</p>
```
  
**Dosya türlerini ve harici hedefleri belirtme:**  

```html
<!-- Method 1: Include information in visible link text -->
<a href="/annual-report.pdf">
  Download our 2024 annual report (PDF, 2.3MB)
</a>

<!-- Method 2: Use screen reader-only text for file details -->
<a href="/annual-report.pdf">
  Download our 2024 annual report
  <span class="sr-only">(PDF format, 2.3MB)</span>
</a>

<!-- Method 3: External link indication -->
<a href="https://example.com" 
   target="_blank" 
   aria-describedby="external-link-warning">
  Visit external resource
</a>
<span id="external-link-warning" class="sr-only">
  (opens in new window)
</span>

<!-- Method 4: Using CSS for visual indicators -->
<a href="https://example.com" class="external-link">
  External resource
</a>
```
  
```css
/* Visual indicator for external links */
.external-link::after {
  content: " ↗";
  font-size: 0.8em;
  color: #666;
}

/* Screen reader announcement for external links */
.external-link::before {
  content: "External link: ";
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
```
  
> ⚠️ **Önemli**: `target="_blank"` kullanırken, bağlantının yeni bir pencerede veya sekmede açıldığını her zaman kullanıcıya bildirin. Beklenmedik navigasyon değişiklikleri kafa karıştırıcı olabilir.

✅ **Bağlantı bağlamınızı test edin**: Tarayıcınızın geliştirici araçlarını kullanarak sayfanızdaki tüm bağlantıların bir listesini oluşturun. Her bağlantının amacını çevresel bağlam olmadan anlayabiliyor musunuz?

## ARIA: HTML Erişilebilirliğini Güçlendirme

[Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA), karmaşık web uygulamalarınız ile yardımcı teknolojiler arasında evrensel bir çevirmen gibidir. HTML tek başına etkileşimli bileşenlerinizin tüm işlevlerini ifade edemediğinde, ARIA bu boşlukları doldurmak için devreye girer.

ARIA'yı HTML'nize yardımcı açıklamalar eklemek gibi düşünmeyi seviyorum—oyun senaryosundaki sahne yönlendirmeleri gibi, aktörlerin rollerini ve ilişkilerini anlamalarına yardımcı olur.

**ARIA hakkında en önemli kural şudur**: Her zaman önce semantik HTML kullanın, ardından ARIA'yı geliştirmek için ekleyin. ARIA'yı ana yemek değil, baharat olarak düşünün. HTML yapınızı asla değiştirmemeli, yalnızca açıklığa kavuşturmalı ve geliştirmelidir. Önce o temeli doğru yapın!

### Stratejik ARIA uygulaması

ARIA güçlüdür, ancak güçle birlikte sorumluluk gelir. Yanlış ARIA, erişilebilirliği hiç ARIA olmamasından daha kötü hale getirebilir. İşte ne zaman ve nasıl etkili bir şekilde kullanacağınız:

**✅ ARIA'yı şu durumlarda kullanın:**  
- Özel etkileşimli widget'lar oluştururken (akordeonlar, sekmeler, karuseller)  
- Sayfa yeniden yüklenmeden değişen dinamik içerik oluştururken  
- Karmaşık UI ilişkileri için ek bağlam sağlarken  
- Yükleme durumlarını veya canlı içerik güncellemelerini belirtirken  
- Özel
**ARIA'nın beş kategorisi:**

1. **Roller**: Bu öğe nedir? (`button`, `tab`, `dialog`)
2. **Özellikler**: Özellikleri nelerdir? (`aria-required`, `aria-haspopup`)
3. **Durumlar**: Şu anki durumu nedir? (`aria-expanded`, `aria-checked`)
4. **Yer işaretleri**: Sayfa yapısında nerede? (`banner`, `navigation`, `main`)
5. **Canlı bölgeler**: Değişiklikler nasıl duyurulmalı? (`aria-live`, `aria-atomic`)

### Modern web uygulamaları için temel ARIA kalıpları

Bu kalıplar, etkileşimli web uygulamalarındaki en yaygın erişilebilirlik sorunlarını çözer:

**Öğeleri adlandırma ve açıklama:**

```html
<!-- aria-label: Provides accessible name when visible text isn't sufficient -->
<button aria-label="Close newsletter subscription dialog">×</button>

<!-- aria-labelledby: References existing text as the accessible name -->
<section aria-labelledby="news-heading">
  <h2 id="news-heading">Latest News</h2>
  <!-- news content -->
</section>

<!-- aria-describedby: Links to additional descriptive text -->
<input type="password" 
       aria-describedby="pwd-requirements pwd-strength"
       required>
<div id="pwd-requirements">
  Password must contain at least 8 characters, including uppercase, lowercase, and numbers.
</div>
<div id="pwd-strength" aria-live="polite">
  <!-- Dynamic password strength indicator -->
</div>
```

**Dinamik içerik için canlı bölgeler:**

```html
<!-- Polite announcements (don't interrupt current speech) -->
<div aria-live="polite" id="status-updates">
  <!-- Status messages appear here -->
</div>

<!-- Assertive announcements (interrupt and announce immediately) -->
<div aria-live="assertive" id="urgent-alerts">
  <!-- Error messages and critical alerts -->
</div>

<!-- Loading states with live regions -->
<button id="submit-btn" aria-describedby="loading-status">
  Submit Application
</button>
<div id="loading-status" aria-live="polite" aria-atomic="true">
  <!-- "Processing your application..." appears here -->
</div>
```

**Etkileşimli widget örneği (akordeon):**

```html
<div class="accordion">
  <h3>
    <button aria-expanded="false" 
            aria-controls="panel-1" 
            id="accordion-trigger-1"
            class="accordion-trigger">
      Accessibility Guidelines
    </button>
  </h3>
  <div id="panel-1" 
       role="region"
       aria-labelledby="accordion-trigger-1" 
       hidden>
    <p>WCAG 2.1 provides comprehensive guidelines...</p>
  </div>
</div>
```

```javascript
// JavaScript to manage accordion state
function toggleAccordion(trigger) {
  const panel = document.getElementById(trigger.getAttribute('aria-controls'));
  const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
  
  // Toggle states
  trigger.setAttribute('aria-expanded', !isExpanded);
  panel.hidden = isExpanded;
  
  // Announce change to screen readers
  const status = document.getElementById('status-updates');
  status.textContent = isExpanded ? 'Section collapsed' : 'Section expanded';
}
```

### ARIA uygulama en iyi uygulamaları

ARIA güçlüdür ancak dikkatli bir şekilde uygulanması gerekir. Bu yönergeleri takip etmek, ARIA'nın erişilebilirliği artırmasını ve engellememesini sağlar:

**🛡️ Temel ilkeler:**

```mermaid
flowchart TD
    A[🚀 Start with semantic HTML] --> B{Does HTML provide needed semantics?}
    B -->|Yes| C[✅ Use HTML only]
    B -->|No| D[Consider ARIA enhancement]
    D --> E{Can you achieve it with simpler means?}
    E -->|Yes| F[🔄 Simplify approach]
    E -->|No| G[📝 Implement ARIA carefully]
    G --> H[🧪 Test with real AT]
    H --> I{Works as expected?}
    I -->|No| J[🔧 Debug and fix]
    I -->|Yes| K[✅ Success!]
    J --> H
    F --> C
    
    style A fill:#e3f2fd
    style C fill:#e8f5e8
    style K fill:#e8f5e8
    style G fill:#fff3e0
    style H fill:#f3e5f5
```

1. **Öncelikle anlamsal HTML**: Her zaman `<button>` öğesini `<div role="button">` öğesine tercih edin
2. **Anlamı bozmayın**: Mevcut HTML anlamını asla geçersiz kılmayın (örneğin `<h1 role="button">` kullanmaktan kaçının)
3. **Klavyeyle erişilebilirliği koruyun**: Tüm etkileşimli ARIA öğeleri tamamen klavyeyle erişilebilir olmalıdır
4. **Gerçek kullanıcılarla test yapın**: ARIA desteği yardımcı teknolojiler arasında önemli ölçüde değişir
5. **Basit başlayın**: Karmaşık ARIA uygulamaları hata yapma olasılığını artırır

**🔍 Test iş akışı:**

```mermaid
graph TD
    A[Write ARIA code] --> B[Validate HTML]
    B --> C[Test with keyboard only]
    C --> D[Test with screen reader]
    D --> E[Test across browsers]
    E --> F{Issues found?}
    F -->|Yes| G[Fix and re-test]
    F -->|No| H[Implementation complete]
    G --> B
```

**🚫 Kaçınılması gereken yaygın ARIA hataları:**

- **Çelişkili bilgiler**: HTML anlamıyla çelişmeyin
- **Aşırı etiketleme**: Çok fazla ARIA bilgisi kullanıcıları bunaltır
- **Statik ARIA**: İçerik değiştiğinde ARIA durumlarını güncellemeyi unutmak
- **Test edilmemiş uygulamalar**: Teoride çalışan ancak pratikte başarısız olan ARIA
- **Eksik klavye desteği**: Klavye etkileşimleri olmayan ARIA rolleri

> 💡 **Test Kaynakları**: [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) gibi araçları kullanarak ARIA doğrulamasını otomatikleştirin, ancak tam deneyim için her zaman gerçek ekran okuyucularla test yapın.

### 🎭 **ARIA Becerileri Kontrolü: Karmaşık Etkileşimlere Hazır mısınız?**

**ARIA güveninizi ölçün:**
- Ne zaman ARIA'yı anlamsal HTML yerine tercih edersiniz? (İpucu: neredeyse hiç!)
- Neden `<div role="button">` genellikle `<button>` öğesinden daha kötü olduğunu açıklayabilir misiniz?
- ARIA testi hakkında hatırlanması gereken en önemli şey nedir?

```mermaid
pie title "Common ARIA Usage Patterns"
    "Labels & Descriptions" : 40
    "Live Regions" : 25
    "Widget States" : 20
    "Complex Controls" : 15
```

> **Önemli bilgi**: ARIA'nın çoğu kullanımı öğeleri etiketlemek ve açıklamak içindir. Karmaşık widget kalıpları düşündüğünüzden çok daha az yaygındır!

✅ **Uzmanlardan öğrenin**: [ARIA Authoring Practices Guide](https://w3c.github.io/aria-practices/) ile karmaşık etkileşimli widget'ların test edilmiş kalıplarını ve uygulamalarını inceleyin.

## Görselleri ve Medyayı Erişilebilir Hale Getirme

Görsel ve sesli içerik modern web deneyimlerinin önemli bir parçasıdır, ancak düşünceli bir şekilde uygulanmazsa engeller oluşturabilir. Amaç, medyanızın bilgi ve duygusal etkisinin her kullanıcıya ulaşmasını sağlamaktır. Bir kez alıştığınızda, bu doğal bir hale gelir.

Farklı medya türleri farklı erişilebilirlik yaklaşımları gerektirir. Bu, yemek yapmaya benzer—hassas bir balığı, doyurucu bir biftekle aynı şekilde ele almazsınız. Bu farklılıkları anlamak, her durum için doğru çözümü seçmenize yardımcı olur.

### Stratejik görsel erişilebilirlik

Web sitenizdeki her görsel bir amaca hizmet eder. Bu amacı anlamak, daha iyi alternatif metinler yazmanıza ve daha kapsayıcı deneyimler oluşturmanıza yardımcı olur.

**Görsellerin dört türü ve alt metin stratejileri:**

**Bilgilendirici görseller** - önemli bilgileri iletir:
```html
<img src="../../../../translated_images/tr/chart.31c7eb0eb5c4450deba10b6f236732dfee8e8a11f6c0d8f31d2c2efb9d4c00ef.png" alt="Sales increased 25% from Q1 to Q2 2024">
```

**Dekoratif görseller** - yalnızca görsel, bilgi değeri yok:
```html
<img src="../../../../translated_images/tr/decorative-border.b2f3c4d6634fb79d57fb6357835906c16938df3d5651c1314c196c3b1c52df98.png" alt="" role="presentation">
```

**Fonksiyonel görseller** - düğme veya kontrol işlevi görür:
```html
<button>
  <img src="search-icon.svg" alt="Search">
</button>
```

**Karmaşık görseller** - grafikler, diyagramlar, infografikler:
```html
<img src="../../../../translated_images/tr/complex-chart.c831f461a363b446a688be5ccacde20d011221758c902cb082cfd4293534ef17.png" alt="Quarterly sales data" aria-describedby="chart-description">
<div id="chart-description">
  <p>Detailed description: Sales data shows a steady increase across all quarters...</p>
</div>
```

### Video ve ses erişilebilirliği

**Video gereksinimleri:**
- **Altyazılar**: Konuşulan içerik ve ses efektlerinin metin versiyonu
- **Sesli açıklamalar**: Görme engelli kullanıcılar için görsel öğelerin anlatımı
- **Transkriptler**: Tüm sesli ve görsel içeriğin tam metin versiyonu

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track kind="captions" src="captions.vtt" srclang="en" label="English">
  <track kind="descriptions" src="descriptions.vtt" srclang="en" label="Audio descriptions">
</video>
```

**Ses gereksinimleri:**
- **Transkriptler**: Tüm konuşulan içeriğin metin versiyonu
- **Görsel göstergeler**: Yalnızca ses içeriği için görsel ipuçları sağlayın

### Modern görsel teknikler

**Dekoratif görseller için CSS kullanımı:**
```css
.hero-section {
  background-image: url('decorative-hero.jpg');
  /* Decorative images in CSS don't need alt text */
}
```

**Erişilebilirlik ile duyarlı görseller:**
```html
<picture>
  <source media="(min-width: 800px)" srcset="large-chart.png">
  <source media="(min-width: 400px)" srcset="medium-chart.png">
  <img src="../../../../translated_images/tr/small-chart.c50c7b1bbcce43d8d24fbfbab8f691fe47d8f25fb7c70857c9eae21d5f22862e.png" alt="Website traffic increased 40% after accessibility improvements">
</picture>
```

✅ **Görsel erişilebilirliği test edin**: Bir ekran okuyucu kullanarak görseller içeren bir sayfada gezinin. İçeriği anlamak için yeterli bilgi alıyor musunuz?

## Klavye navigasyonu ve odak yönetimi

Birçok kullanıcı webde tamamen klavyeleriyle gezinir. Buna motor engelli kişiler, fare yerine klavyeyi daha hızlı bulan ileri düzey kullanıcılar ve fareleri çalışmayan herkes dahildir. Sitenizin klavye girişiyle iyi çalıştığından emin olmak önemlidir ve genellikle sitenizi herkes için daha verimli hale getirir.

```mermaid
flowchart LR
    A[⌨️ Keyboard Navigation] --> B[Tab Order]
    A --> C[Focus Indicators]
    A --> D[Skip Links]
    A --> E[Keyboard Shortcuts]
    
    B --> B1[Logical sequence<br/>All interactive elements<br/>No tab traps]
    C --> C1[Visible outlines<br/>High contrast<br/>Clear boundaries]
    D --> D1[Skip to main<br/>Skip to nav<br/>Bypass repetitive]
    E --> E1[Escape to close<br/>Enter to activate<br/>Arrows in groups]
    
    style A fill:#e3f2fd
    style B fill:#e8f5e8
    style C fill:#fff3e0
    style D fill:#f3e5f5
    style E fill:#e0f2f1
```

### Temel klavye navigasyon kalıpları

**Standart klavye etkileşimleri:**
- **Tab**: Etkileşimli öğeler arasında ileriye doğru odaklanma
- **Shift + Tab**: Geriye doğru odaklanma
- **Enter**: Düğmeleri ve bağlantıları etkinleştirme
- **Boşluk**: Düğmeleri etkinleştirme, onay kutularını işaretleme
- **Ok tuşları**: Bileşen grupları içinde gezinme (radyo düğmeleri, menüler)
- **Escape**: Modalları, açılır menüleri kapatma veya işlemleri iptal etme

### Odak yönetimi en iyi uygulamaları

**Görünür odak göstergeleri:**
```css
/* Ensure focus is always visible */
button:focus-visible {
  outline: 2px solid #4A90A4;
  outline-offset: 2px;
}

/* Custom focus styles for different components */
.card:focus-within {
  box-shadow: 0 0 0 3px rgba(74, 144, 164, 0.5);
}
```

**Verimli navigasyon için atlama bağlantıları:**
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
<a href="#navigation" class="skip-link">Skip to navigation</a>

<nav id="navigation">
  <!-- navigation content -->
</nav>
<main id="main-content">
  <!-- main content -->
</main>
```

**Doğru sekme sırası:**
```html
<!-- Use semantic HTML for natural tab order -->
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" tabindex="0">
  
  <label for="email">Email:</label>
  <input type="email" id="email" tabindex="0">
  
  <button type="submit" tabindex="0">Submit</button>
</form>
```

### Modallarda odak tuzağı

Modal diyalog kutuları açıldığında, odak modal içinde tuzağa düşürülmelidir:

```javascript
// Modern focus trap implementation
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
    
    if (e.key === 'Escape') {
      closeModal();
    }
  });
  
  // Focus first element when modal opens
  firstElement.focus();
}
```

✅ **Klavye navigasyonunu test edin**: Sitenizde yalnızca Tab tuşunu kullanarak gezinmeyi deneyin. Tüm etkileşimli öğelere ulaşabiliyor musunuz? Odak sırası mantıklı mı? Odak göstergeleri net bir şekilde görülebiliyor mu?

## Form Erişilebilirliği

Formlar, kullanıcı etkileşimi için kritik öneme sahiptir ve erişilebilirlik açısından özel bir dikkat gerektirir.

### Etiket ve form kontrolü ilişkilendirme

**Her form kontrolünün bir etiketi olmalıdır:**
```html
<!-- Explicit labeling (preferred) -->
<label for="username">Username:</label>
<input type="text" id="username" name="username" required>

<!-- Implicit labeling -->
<label>
  Password:
  <input type="password" name="password" required>
</label>

<!-- Using aria-label when visual label isn't desired -->
<input type="search" aria-label="Search products" placeholder="Search...">
```

### Hata yönetimi ve doğrulama

**Erişilebilir hata mesajları:**
```html
<label for="email">Email Address:</label>
<input type="email" id="email" name="email" 
       aria-describedby="email-error" 
       aria-invalid="true" required>
<div id="email-error" role="alert">
  Please enter a valid email address
</div>
```

**Form doğrulama en iyi uygulamaları:**
- Geçersiz alanları belirtmek için `aria-invalid` kullanın
- Açık ve spesifik hata mesajları sağlayın
- Önemli hata duyuruları için `role="alert"` kullanın
- Hataları hem anında hem de form gönderiminde gösterin

### Alan grupları ve gruplama

**İlgili form kontrollerini gruplayın:**
```html
<fieldset>
  <legend>Shipping Address</legend>
  <label for="street">Street Address:</label>
  <input type="text" id="street" name="street">
  
  <label for="city">City:</label>
  <input type="text" id="city" name="city">
</fieldset>

<fieldset>
  <legend>Preferred Contact Method</legend>
  <input type="radio" id="contact-email" name="contact" value="email">
  <label for="contact-email">Email</label>
  
  <input type="radio" id="contact-phone" name="contact" value="phone">
  <label for="contact-phone">Phone</label>
</fieldset>
```

## Erişilebilirlik Yolculuğunuz: Temel Çıkarımlar

Tebrikler! Gerçekten kapsayıcı web deneyimleri oluşturmak için temel bilgileri kazandınız. Bu oldukça heyecan verici bir şey! Web erişilebilirliği sadece uyumluluk kutularını işaretlemekle ilgili değil—insanların dijital içeriği etkileşimde bulunma biçimlerinin çeşitliliğini tanımak ve bu harika karmaşıklık için tasarım yapmakla ilgilidir.

Artık dijital içeriği herkes için erişilebilir kılmanın önemini anlayan büyüyen bir geliştirici topluluğunun parçasısınız. Kulübe hoş geldiniz!

**🎯 Artık erişilebilirlik araç setiniz şunları içeriyor:**

| Temel İlke | Uygulama | Etki |
|------------|----------|------|
| **Anlamsal HTML Temeli** | HTML öğelerini amaçlarına uygun şekilde kullanın | Ekran okuyucular verimli bir şekilde gezinebilir, klavyeler otomatik olarak çalışır |
| **Kapsayıcı Görsel Tasarım** | Yeterli kontrast, anlamlı renk kullanımı, görünür odak göstergeleri | Herkes için her türlü ışık koşulunda netlik |
| **Açıklayıcı İçerik** | Anlamlı bağlantı metni, alt metin, başlıklar | Kullanıcılar görsel bağlam olmadan içeriği anlayabilir |
| **Klavyeyle Erişilebilirlik** | Sekme sırası, klavye kısayolları, odak yönetimi | Motor erişilebilirliği ve ileri düzey kullanıcı verimliliği |
| **ARIA Geliştirmesi** | Anlamsal boşlukları doldurmak için stratejik kullanım | Karmaşık uygulamalar yardımcı teknolojilerle çalışır |
| **Kapsamlı Test** | Otomatik araçlar + manuel doğrulama + gerçek kullanıcı testi | Sorunları kullanıcıları etkilemeden önce yakalayın |

**🚀 Sonraki adımlarınız:**

1. **Erişilebilirliği iş akışınıza dahil edin**: Testi geliştirme sürecinizin doğal bir parçası haline getirin
2. **Gerçek kullanıcılardan öğrenin**: Yardımcı teknolojileri kullanan kişilerden geri bildirim alın
3. **Güncel kalın**: Erişilebilirlik teknikleri yeni teknolojiler ve standartlarla birlikte gelişir
4. **Kapsayıcılığı savunun**: Bilginizi paylaşın ve erişilebilirliği ekip önceliği haline getirin

> 💡 **Unutmayın**: Erişilebilirlik kısıtlamaları genellikle herkes için faydalı olan yenilikçi, zarif çözümlere yol açar. Rampalar, altyazılar ve sesli kontroller başlangıçta erişilebilirlik özellikleri olarak başladı ve ana akım iyileştirmelere dönüştü.

**İş açısından bakıldığında durum çok net**: Erişilebilir web siteleri daha fazla kullanıcıya ulaşır, arama motorlarında daha iyi sıralanır, daha düşük bakım maliyetlerine sahiptir ve yasal risklerden kaçınır. Ama dürüst olmak gerekirse, erişilebilirliğe önem vermenin gerçek nedeni çok daha derindir. Erişilebilir web siteleri, webin en iyi değerlerini—açıklık, kapsayıcılık ve herkesin bilgiye eşit erişim hakkı olduğu fikrini—somutlaştırır.

Artık geleceğin kapsayıcı webini oluşturmak için donanımlısınız. Oluşturduğunuz her erişilebilir site, interneti herkes için daha misafirperver bir yer haline getirir. Bunu düşündüğünüzde gerçekten harika bir şey!

## Ek Kaynaklar

Erişilebilirlik öğrenme yolculuğunuza bu temel kaynaklarla devam edin:

**📚 Resmi Standartlar ve Yönergeler:**
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Hızlı referans ile resmi erişilebilirlik standardı
- [ARIA Authoring Practices Guide](https://w3c.github.io/aria-practices/) - Etkileşimli widget'lar için kapsamlı kalıplar
- [WebAIM Guidelines](https://webaim.org/) - Pratik, başlangıç dostu erişilebilirlik rehberi

**🛠️ Araçlar ve Test Kaynakları:**
- [axe DevTools](https://www.deque.com/axe/devtools/) - Endüstri standardı erişilebilirlik testi
- [A11y Project Checklist](https://www.a11yproject.com/checklist/) - Adım adım erişilebilirlik doğrulaması
- [Accessibility Insights](https://accessibilityinsights.io/) - Microsoft'un kapsamlı test paketi
- [Color Oracle](https://colororacle.org/) - Tasarım testi için renk körlüğü simülatörü

**🎓 Öğrenme ve Topluluk:**
- [WebAIM Screen Reader Survey](https://webaim.org/projects/screenreadersurvey9/) - Gerçek kullanıcı tercihleri ve davranışları
- [Inclusive Components](https://inclusive-components.design/) - Modern erişilebilir bileşen kalıpları
- [A11y Coffee](https://a11y.coffee/) - Hızlı erişilebilirlik ipuçları ve içgörüler
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/) - W3C'nin kapsamlı erişilebilirlik kaynakları

**🎥 Uygulamalı Öğrenme:**
- [Accessibility Developer Guide](https://www.accessibility-developer-guide.com/) - Pratik uygulama rehberi
- [Deque University](https://dequeuniversity.com/) - Profesyonel erişilebilirlik eğitim kursları

## GitHub Copilot Agent Challenge 🚀

Agent modunu kullanarak aşağıdaki meydan okumayı tamamlayın:

**Açıklama:** Doğru odak yönetimi, ARIA öznitelikleri ve klavye navigasyon kalıplarını gösteren erişilebilir bir modal diyalog bileşeni oluşturun.

**Talimat:** HTML, CSS ve JavaScript kullanarak tam bir modal diyalog bileşeni oluşturun. Bu bileşen şunları içermelidir: doğru odak tuzağı, ESC tuşuyla kapatma, dışarıya tıklayarak kapatma, ekran okuyucular için ARIA öznitelikleri ve görünür odak göstergeleri. Modal, doğru etiketler ve hata yönetimi içeren bir form içermelidir. Bileşenin WCAG 2.1 AA standartlarına uygun olduğundan emin olun.

## 🚀 Meydan Okuma

Bu HTML'yi, öğrendiğiniz stratejilere göre mümkün olduğunca erişilebilir hale getirin.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Turtle Ipsum - The World's Premier Turtle Fan Club</title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <header class="site-header">
      <h1 class="site-title">Turtle Ipsum</h1>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </header>
    
    <nav class="main-nav" aria-label="Main navigation">
      <h2 class="nav-header">Resources</h2>
      <ul class="nav-list">
        <li><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles" video</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Turtle">Basic turtle information</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate turtles candy</a></li>
      </ul>
    </nav>
    
    <main class="main-content">
      <article>
        <h1>Welcome to Turtle Ipsum</h1>
        <p class="intro">
          <a href="/about">Learn more about our turtle community</a> and discover fascinating facts about these amazing creatures.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
    </main>
    
    <footer class="footer">
      <section class="newsletter-signup">
        <h2>Stay Updated</h2>
        <button type="button" onclick="showNewsletterForm()">Sign up for turtle news</button>
      </section>
      
      <nav class="footer-nav" aria-label="Footer navigation">
        <h2>Site Pages</h2>
        <ul>
          <li><a href="../">Home</a></li>
          <li><a href="../semantic">Semantic HTML example</a></li>
        </ul>
      </nav>
      
      <p class="footer-copyright">&copy; 2024 Instrument. All rights reserved.</p>
    </footer>
  </body>
</html>
```

**Yapılan temel iyileştirmeler:**
- Doğru anlamsal HTML yapısı eklendi
- Başlık hiyerarşisi düzeltildi (tek bir h1, mantıklı ilerleme)
- "Buraya tıklayın" yerine anlamlı bağlantı metni eklendi
- Navigasyon için doğru ARIA etiketleri eklendi
- Lang özniteliği ve doğru meta etiketler eklendi
- Etkileşimli öğeler için button öğesi kullanıldı
- Footer içeriği doğru yer işaretleriyle yapılandırıldı

## Ders Sonrası Quiz
[Ders sonrası quiz](https://ff-quizzes.netlify.app/web/en/)

## İnceleme ve Kendi Kendine Çalışma

Birçok hükümetin erişilebilirlik gereksinimleriyle ilgili yasaları vardır. Kendi ülkenizin erişilebilirlik yasalarını araştırın. Neler kapsanıyor, neler kapsanmıyor? Örneğin [bu hükümet web sitesi](https://accessibility.blog.gov.uk/).

## Ödev
 
[Erişilebilir olmayan bir web sitesini analiz edin](assignment.md)

Kaynaklar: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) by Instrument

---

## 🚀 Erişilebilirlik Ustalık Zaman Çizelgeniz

### ⚡ **Sonraki 5 Dakikada Yapabilecekleriniz**
- [ ] Tarayıcınıza axe DevTools uzantısını yükleyin
- [ ] Favori web sitenizde Lighthouse erişilebilirlik denetimi çalıştırın
- [ ] Yalnızca Tab tuşunu kullanarak herhangi bir web sitesinde gezinmeyi deneyin
- [ ] Tarayıcınızın yerleşik ekran okuyucusunu test edin (Narrator/VoiceOver)

### 🎯 **Bu Saatte Başarabilecekleriniz**
- [ ] Ders sonrası quiz'i tamamlayın ve erişilebilirlik içgörülerini düşünün
- [ ] 10 farklı görsel için anlamlı alt metin yazmayı uygulayın
- [ ] HeadingsMap uzantısını kullanarak bir web sitesinin başlık yapısını denetleyin
- [ ] Meydan okuma HTML'sinde bulunan erişilebilirlik sorunlarını düzeltin
- [ ] WebAIM'in aracıyla mevcut projenizdeki renk kontrastını test edin

### 📅 **Haftalık Erişilebilir
- [ ] 5 farklı karmaşık web sitesinde klavye navigasyonu pratiği yap
- [ ] Doğru etiketler, hata yönetimi ve ARIA ile basit bir form oluştur
- [ ] Bir erişilebilirlik topluluğuna katıl (A11y Slack, WebAIM forumu)
- [ ] Engelli gerçek kullanıcıların web sitelerinde nasıl gezindiğini izle (YouTube'da harika örnekler var)

### 🌟 **Bir Aylık Dönüşümünüz**
- [ ] Erişilebilirlik testlerini geliştirme iş akışınıza entegre edin
- [ ] Açık kaynak bir projeye erişilebilirlik sorunlarını çözerek katkıda bulunun
- [ ] Yardımcı teknolojiler kullanan biriyle kullanılabilirlik testi yapın
- [ ] Ekibiniz için erişilebilir bir bileşen kütüphanesi oluşturun
- [ ] İş yerinizde veya topluluğunuzda erişilebilirlik savunuculuğu yapın
- [ ] Erişilebilirlik kavramlarına yeni başlayan birine mentorluk yapın

### 🏆 **Son Erişilebilirlik Şampiyonu Kontrol Noktası**

**Erişilebilirlik yolculuğunuzu kutlayın:**
- İnsanların web'i nasıl kullandığı hakkında öğrendiğiniz en şaşırtıcı şey nedir?
- Hangi erişilebilirlik ilkesi geliştirme tarzınızla en çok uyum sağlıyor?
- Erişilebilirlik hakkında öğrenmek tasarım perspektifinizi nasıl değiştirdi?
- Gerçek bir projede yapmak istediğiniz ilk erişilebilirlik iyileştirmesi nedir?

```mermaid
journey
    title Your Accessibility Confidence Evolution
    section Today
      Overwhelmed: 3: You
      Curious: 4: You
      Motivated: 5: You
    section This Week
      Practicing: 4: You
      Testing: 5: You
      Understanding: 5: You
    section Next Month
      Advocating: 5: You
      Leading: 5: You
      Inclusive by Default: 5: You
```

> 🌍 **Artık bir erişilebilirlik şampiyonusunuz!** Harika web deneyimlerinin, web'e nasıl eriştiklerinden bağımsız olarak herkes için çalıştığını anlıyorsunuz. Oluşturduğunuz her erişilebilir özellik, interneti daha kapsayıcı hale getiriyor. Web, erişilebilirliği bir kısıtlama değil, tüm kullanıcılar için daha iyi deneyimler yaratma fırsatı olarak gören geliştiricilere ihtiyaç duyuyor. Hareketimize hoş geldiniz! 🎉

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.