# Olay Tabanlı Programlama - Bir Yazma Oyunu Oluşturun

```mermaid
journey
    title Your Typing Game Development Journey
    section Foundation
      Plan game structure: 3: Student
      Design user interface: 4: Student
      Setup HTML elements: 4: Student
    section Functionality
      Handle user input: 4: Student
      Track timing: 5: Student
      Calculate accuracy: 5: Student
    section Features
      Add visual feedback: 5: Student
      Implement game logic: 5: Student
      Polish experience: 5: Student
```

## Giriş

Her geliştiricinin bildiği ama nadiren dile getirdiği bir şey var: hızlı yazmak bir süper güçtür! 🚀 Bir düşünün - fikirlerinizi beyninizden kod editörüne ne kadar hızlı aktarabilirseniz, yaratıcılığınız o kadar akıcı olur. Bu, düşüncelerinizle ekran arasında doğrudan bir bağlantıya sahip olmak gibidir.

```mermaid
pie title Game Features
    "Real-time Feedback" : 25
    "Performance Tracking" : 20
    "Interactive UI" : 20
    "Timer System" : 15
    "Quote Management" : 10
    "Results Display" : 10
```

Bu beceriyi geliştirmek için en iyi yollardan birini öğrenmek ister misiniz? Tahmin ettiniz - bir oyun yapacağız!

```mermaid
flowchart LR
    A[Player starts game] --> B[Random quote displayed]
    B --> C[Player types characters]
    C --> D{Character correct?}
    D -->|Yes| E[Green highlight]
    D -->|No| F[Red highlight]
    E --> G[Update accuracy]
    F --> G
    G --> H{Quote complete?}
    H -->|No| C
    H -->|Yes| I[Calculate WPM]
    I --> J[Display results]
    J --> K[Play again?]
    K -->|Yes| B
    K -->|No| L[Game over]
    
    style A fill:#e1f5fe
    style D fill:#fff3e0
    style E fill:#e8f5e8
    style F fill:#ffebee
    style I fill:#f3e5f5
```

> Haydi birlikte harika bir yazma oyunu oluşturalım!

JavaScript, HTML ve CSS becerilerinizi kullanmaya hazır mısınız? Efsanevi dedektif [Sherlock Holmes](https://en.wikipedia.org/wiki/Sherlock_Holmes)'dan rastgele alıntılarla sizi zorlayacak bir yazma oyunu yapacağız. Oyun, ne kadar hızlı ve doğru yazabildiğinizi takip edecek - ve inanın bana, düşündüğünüzden daha bağımlılık yapıcı!

```mermaid
mindmap
  root((Typing Game Development))
    User Interface
      Input Elements
      Visual Feedback
      Responsive Design
      Accessibility
    Game Logic
      Quote Selection
      Timer Management
      Accuracy Tracking
      Score Calculation
    Event Handling
      Keyboard Input
      Button Clicks
      Real-time Updates
      Game State Changes
    Performance Metrics
      Words Per Minute
      Character Accuracy
      Error Tracking
      Progress Display
    User Experience
      Immediate Feedback
      Clear Instructions
      Engaging Content
      Achievement System
```

![demo](../../../4-typing-game/images/demo.gif)

## Bilmeniz Gerekenler

```mermaid
flowchart TD
    A[User Action] --> B{Event Type?}
    B -->|Key Press| C[Keyboard Event]
    B -->|Button Click| D[Mouse Event]
    B -->|Timer| E[Time Event]
    
    C --> F[Check Character]
    D --> G[Start/Reset Game]
    E --> H[Update Timer]
    
    F --> I{Correct?}
    I -->|Yes| J[Highlight Green]
    I -->|No| K[Highlight Red]
    
    J --> L[Update Score]
    K --> L
    L --> M[Check Game State]
    
    G --> N[Generate New Quote]
    H --> O[Display Time]
    
    M --> P{Game Complete?}
    P -->|Yes| Q[Show Results]
    P -->|No| R[Continue Game]
    
    style A fill:#e1f5fe
    style F fill:#e8f5e8
    style I fill:#fff3e0
    style Q fill:#f3e5f5
```

Başlamadan önce, bu kavramlara aşina olduğunuzdan emin olun (endişelenmeyin, hızlı bir hatırlatma gerekiyorsa - hepimiz oradaydık!):

- Metin girişi ve düğme kontrolleri oluşturma
- CSS ve sınıflar kullanarak stiller ayarlama  
- JavaScript temelleri
  - Bir dizi oluşturma
  - Rastgele bir sayı oluşturma
  - Mevcut zamanı alma

Eğer bunlar biraz paslanmış hissediyorsanız, bu tamamen normal! Bazen bilgilerinizi pekiştirmenin en iyi yolu bir projeye dalmak ve ilerledikçe öğrenmektir.

### 🔄 **Pedagojik Kontrol**
**Temel Değerlendirme**: Geliştirmeye başlamadan önce şunları anladığınızdan emin olun:
- ✅ HTML formları ve giriş öğelerinin nasıl çalıştığı
- ✅ CSS sınıfları ve dinamik stil verme
- ✅ JavaScript olay dinleyicileri ve işleyicileri
- ✅ Dizi manipülasyonu ve rastgele seçim
- ✅ Zaman ölçümü ve hesaplamalar

**Hızlı Kendini Test Et**: Bu kavramların interaktif bir oyunda nasıl birlikte çalıştığını açıklayabilir misiniz?
- **Olaylar**, kullanıcıların öğelerle etkileşimde bulunmasıyla tetiklenir
- **İşleyiciler**, bu olayları işler ve oyun durumunu günceller
- **CSS**, kullanıcı eylemleri için görsel geri bildirim sağlar
- **Zamanlama**, performans ölçümü ve oyun ilerlemesini mümkün kılar

```mermaid
quadrantChart
    title Typing Game Skills Development
    x-axis Beginner --> Expert
    y-axis Static --> Interactive
    quadrant-1 Advanced Games
    quadrant-2 Real-time Apps
    quadrant-3 Basic Pages
    quadrant-4 Interactive Sites
    
    HTML Forms: [0.3, 0.2]
    CSS Styling: [0.4, 0.3]
    Event Handling: [0.7, 0.8]
    Game Logic: [0.8, 0.9]
    Performance Tracking: [0.9, 0.7]
```

## Haydi Bu Şeyi İnşa Edelim!

[Olay tabanlı programlama kullanarak yazma oyunu oluşturma](./typing-game/README.md)

### ⚡ **Sonraki 5 Dakikada Yapabilecekleriniz**
- [ ] Tarayıcı konsolunuzu açın ve `addEventListener` ile klavye olaylarını dinlemeyi deneyin
- [ ] Basit bir HTML sayfası oluşturun, bir giriş alanı ekleyin ve yazma algılamayı test edin
- [ ] Yazılan metni hedef metinle karşılaştırarak dize manipülasyonunu pratik yapın
- [ ] Zamanlama işlevlerini anlamak için `setTimeout` ile deney yapın

### 🎯 **Bu Saatte Başarabilecekleriniz**
- [ ] Ders sonrası testi tamamlayın ve olay tabanlı programlamayı anlayın
- [ ] Kelime doğrulaması ile yazma oyununun temel bir versiyonunu oluşturun
- [ ] Doğru ve yanlış yazma için görsel geri bildirim ekleyin
- [ ] Hız ve doğruluğa dayalı basit bir puanlama sistemi uygulayın
- [ ] Oyununuzu görsel olarak çekici hale getirmek için CSS ile stil verin

### 📅 **Haftalık Oyun Geliştirme Planınız**
- [ ] Tüm özellikleri ve cilalarıyla tam bir yazma oyunu tamamlayın
- [ ] Kelime karmaşıklığına göre değişen zorluk seviyeleri ekleyin
- [ ] Kullanıcı istatistik takibi uygulayın (WPM, zaman içinde doğruluk)
- [ ] Daha iyi bir kullanıcı deneyimi için ses efektleri ve animasyonlar ekleyin
- [ ] Oyununuzu dokunmatik cihazlar için mobil uyumlu hale getirin
- [ ] Oyununuzu çevrimiçi paylaşın ve kullanıcılardan geri bildirim alın

### 🌟 **Aylık Etkileşimli Geliştirme Planınız**
- [ ] Farklı etkileşim desenlerini keşfeden birden fazla oyun oluşturun
- [ ] Oyun döngüleri, durum yönetimi ve performans optimizasyonu hakkında bilgi edinin
- [ ] Açık kaynak oyun geliştirme projelerine katkıda bulunun
- [ ] Gelişmiş zamanlama kavramlarını ve akıcı animasyonları öğrenin
- [ ] Çeşitli etkileşimli uygulamaları sergileyen bir portföy oluşturun
- [ ] Oyun geliştirme ve kullanıcı etkileşimiyle ilgilenenlere mentorluk yapın

## 🎯 Yazma Oyunu Ustalık Zaman Çizelgeniz

```mermaid
timeline
    title Game Development Learning Progression
    
    section Setup (10 minutes)
        Project Structure: HTML foundation
                         : CSS styling setup
                         : JavaScript file creation
        
    section User Interface (20 minutes)
        Interactive Elements: Input fields
                            : Button controls
                            : Display areas
                            : Responsive layout
        
    section Event Handling (25 minutes)
        User Interaction: Keyboard events
                        : Mouse events
                        : Real-time feedback
                        : State management
        
    section Game Logic (30 minutes)
        Core Functionality: Quote generation
                          : Character comparison
                          : Accuracy calculation
                          : Timer implementation
        
    section Performance Tracking (35 minutes)
        Metrics & Analytics: WPM calculation
                           : Error tracking
                           : Progress visualization
                           : Results display
        
    section Polish & Enhancement (45 minutes)
        User Experience: Visual feedback
                       : Sound effects
                       : Animations
                       : Accessibility features
        
    section Advanced Features (1 week)
        Extended Functionality: Difficulty levels
                              : Leaderboards
                              : Custom quotes
                              : Multiplayer options
        
    section Professional Skills (1 month)
        Game Development: Performance optimization
                        : Code architecture
                        : Testing strategies
                        : Deployment patterns
```

### 🛠️ Oyun Geliştirme Araç Seti Özeti

Bu projeyi tamamladıktan sonra şunlarda ustalaşmış olacaksınız:
- **Olay Tabanlı Programlama**: Kullanıcı girdilerine tepki veren arayüzler
- **Gerçek Zamanlı Geri Bildirim**: Anlık görsel ve performans güncellemeleri
- **Performans Ölçümü**: Doğru zamanlama ve puanlama sistemleri
- **Oyun Durumu Yönetimi**: Uygulama akışını ve kullanıcı deneyimini kontrol etme
- **Etkileşimli Tasarım**: İlgi çekici, bağımlılık yapan kullanıcı deneyimleri oluşturma
- **Modern Web API'leri**: Zengin etkileşimler için tarayıcı yeteneklerini kullanma
- **Erişilebilirlik Desenleri**: Tüm kullanıcılar için kapsayıcı tasarım

**Gerçek Dünya Uygulamaları**: Bu beceriler doğrudan şunlara uygulanabilir:
- **Web Uygulamaları**: Herhangi bir etkileşimli arayüz veya kontrol paneli
- **Eğitim Yazılımları**: Öğrenme platformları ve beceri değerlendirme araçları
- **Verimlilik Araçları**: Metin editörleri, IDE'ler ve işbirliği yazılımları
- **Oyun Endüstrisi**: Tarayıcı oyunları ve etkileşimli eğlence
- **Mobil Geliştirme**: Dokunmatik tabanlı arayüzler ve hareket algılama

**Bir Sonraki Seviye**: Gelişmiş oyun çerçevelerini, gerçek zamanlı çok oyunculu sistemleri veya karmaşık etkileşimli uygulamaları keşfetmeye hazırsınız!

## Katkılar

[Christopher Harrison](http://www.twitter.com/geektrainer) tarafından ♥️ ile yazılmıştır

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.