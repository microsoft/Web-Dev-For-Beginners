<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2025-10-23T00:04:06+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "tr"
}
-->
# Banka Uygulamanızı Modern CSS ile Şekillendirin

## Proje Genel Bakış

Fonksiyonel banka uygulamanızı modern CSS teknikleri kullanarak görsel olarak çekici ve profesyonel bir web uygulamasına dönüştürün. Kullanıcı deneyimini geliştirirken erişilebilirlik ve duyarlı tasarım ilkelerini koruyan uyumlu bir tasarım sistemi oluşturacaksınız.

Bu ödev, çağdaş web tasarım kalıplarını uygulamanızı, tutarlı bir görsel kimlik oluşturmanızı ve kullanıcıların hem çekici hem de gezinmesi kolay bulacağı bir arayüz tasarlamanızı gerektiriyor.

## Talimatlar

### Adım 1: Stil Dosyanızı Hazırlayın

**CSS temelini oluşturun:**

1. **Yeni bir dosya oluşturun**: Proje kök dizininde `styles.css` adında bir dosya oluşturun.
2. **Stil dosyasını bağlayın**: `index.html` dosyanıza stil dosyasını bağlayın:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **CSS sıfırlama ve modern varsayılanlarla başlayın**:
   ```css
   /* Modern CSS reset and base styles */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     line-height: 1.6;
     color: #333;
   }
   ```

### Adım 2: Tasarım Sistemi Gereksinimleri

**Bu temel tasarım öğelerini uygulayın:**

#### Renk Paleti
- **Ana renk**: Düğmeler ve vurgular için profesyonel bir renk seçin.
- **İkincil renk**: Aksanlar ve ikincil işlemler için tamamlayıcı bir renk seçin.
- **Nötr renkler**: Metin, kenarlıklar ve arka planlar için gri tonlar.
- **Başarı/Hata renkleri**: Başarı durumları için yeşil, hatalar için kırmızı.

#### Tipografi
- **Başlık hiyerarşisi**: H1, H2 ve H3 öğeleri arasında net bir ayrım.
- **Gövde metni**: Okunabilir yazı tipi boyutu (minimum 16px) ve uygun satır yüksekliği.
- **Form etiketleri**: Net, erişilebilir metin stili.

#### Düzen ve Boşluk
- **Tutarlı boşluklar**: Bir boşluk ölçeği kullanın (8px, 16px, 24px, 32px).
- **Izgara sistemi**: Formlar ve içerik bölümleri için düzenli bir düzen.
- **Duyarlı tasarım**: Mobil öncelikli yaklaşım ve kırılma noktaları.

### Adım 3: Bileşenlerin Stili

**Bu belirli bileşenleri şekillendirin:**

#### Formlar
- **Giriş alanları**: Profesyonel kenarlıklar, odak durumları ve doğrulama stilleri.
- **Düğmeler**: Üzerine gelme efektleri, devre dışı bırakılmış durumlar ve yükleme göstergeleri.
- **Etiketler**: Net konumlandırma ve gerekli alan göstergeleri.
- **Hata mesajları**: Görünür hata stilleri ve yardımcı mesajlar.

#### Navigasyon
- **Üst bilgi**: Temiz, markalı bir navigasyon alanı.
- **Bağlantılar**: Net üzerine gelme durumları ve aktif göstergeler.
- **Logo/Başlık**: Belirgin bir marka öğesi.

#### İçerik Alanları
- **Bölümler**: Farklı alanlar arasında net görsel ayrım.
- **Kartlar**: Kart tabanlı düzenler kullanılıyorsa, gölgeler ve kenarlıklar ekleyin.
- **Arka planlar**: Beyaz alanların ve ince arka planların uygun kullanımı.

### Adım 4: Gelişmiş Özellikler (Opsiyonel)

**Bu gelişmiş özellikleri uygulamayı düşünün:**
- **Karanlık mod**: Açık ve koyu temalar arasında geçiş yapma.
- **Animasyonlar**: İnce geçişler ve mikro etkileşimler.
- **Yükleme durumları**: Form gönderimleri sırasında görsel geri bildirim.
- **Duyarlı görseller**: Farklı ekran boyutları için optimize edilmiş görseller.

## Tasarım İlhamı

**Modern banka uygulaması özellikleri:**
- **Temiz, minimal tasarım** ve bol beyaz alan.
- **Profesyonel renk şemaları** (mavi, yeşil veya sofistike nötr tonlar).
- **Net görsel hiyerarşi** ve belirgin harekete geçirici mesaj düğmeleri.
- **Erişilebilir kontrast oranları** WCAG yönergelerine uygun.
- **Mobil uyumlu düzenler** tüm cihazlarda çalışır.

## Teknik Gereksinimler

### CSS Organizasyonu
```css
/* 1. CSS Custom Properties (Variables) */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* Add more variables */
}

/* 2. Base Styles */
/* Reset, typography, general elements */

/* 3. Layout */
/* Grid, flexbox, positioning */

/* 4. Components */
/* Forms, buttons, cards */

/* 5. Utilities */
/* Helper classes, responsive utilities */

/* 6. Media Queries */
/* Responsive breakpoints */
```

### Erişilebilirlik Gereksinimleri
- **Renk kontrastı**: Normal metin için en az 4.5:1 oranını sağlayın.
- **Odak göstergeleri**: Klavye navigasyonu için görünür odak durumları.
- **Form etiketleri**: Girişlerle doğru şekilde ilişkilendirilmiş.
- **Duyarlı tasarım**: 320px ile 1920px genişliğindeki ekranlarda kullanılabilir.

## Değerlendirme Ölçütleri

| Kriter | Üstün (A) | Yeterli (B) | Gelişmekte (C) | Geliştirme Gerekiyor (F) |
|--------|-----------|-------------|----------------|--------------------------|
| **Tasarım Sistemi** | Tutarlı renkler, tipografi ve boşluklarla kapsamlı bir tasarım sistemi uygular | Tutarlı stil kullanımı, net tasarım kalıpları ve iyi görsel hiyerarşi | Temel stil uygulanmış, bazı tutarlılık sorunları veya eksik tasarım öğeleri | Minimal stil, tutarsız veya çelişkili tasarım seçimleri |
| **Kullanıcı Deneyimi** | Sezgisel, profesyonel bir arayüz oluşturur, mükemmel kullanılabilirlik ve görsel çekicilik sağlar | İyi bir kullanıcı deneyimi sunar, net navigasyon ve okunabilir içerik | Temel kullanılabilirlik, bazı UX iyileştirmeleri gerekli | Zayıf kullanılabilirlik, gezinmesi veya okunması zor |
| **Teknik Uygulama** | Modern CSS teknikleri, organize kod yapısı ve en iyi uygulamaları kullanır | CSS'i etkili bir şekilde uygular, iyi organizasyon ve uygun teknikler kullanır | CSS doğru çalışır ancak organizasyon veya modern yaklaşımlar eksik olabilir | Zayıf CSS uygulaması, teknik sorunlar veya tarayıcı uyumluluğu problemleri |
| **Duyarlı Tasarım** | Tüm cihaz boyutlarında mükemmel çalışan tamamen duyarlı tasarım | İyi duyarlı davranış, bazı ekran boyutlarında küçük sorunlar | Temel duyarlı uygulama, bazı düzen sorunları | Duyarlı değil veya mobil cihazlarda önemli problemler |
| **Erişilebilirlik** | WCAG yönergelerine uygun, mükemmel klavye navigasyonu ve ekran okuyucu desteği | İyi erişilebilirlik uygulamaları, uygun kontrast ve odak göstergeleri | Temel erişilebilirlik dikkate alınmış, bazı eksik öğeler | Zayıf erişilebilirlik, engelli kullanıcılar için zorlayıcı |

## Teslimat Yönergeleri

**Teslimatınıza şunları ekleyin:**
- **styles.css**: Tam stil dosyanız.
- **Güncellenmiş HTML**: Yaptığınız HTML değişiklikleri.
- **Ekran görüntüleri**: Tasarımınızı masaüstü ve mobilde gösteren görseller.
- **README**: Tasarım seçimleriniz ve renk paletiniz hakkında kısa açıklama.

**Ekstra puan için:**
- **CSS özel özellikleri**: Sürdürülebilir temalar için.
- **Gelişmiş CSS özellikleri**: Grid, Flexbox veya CSS animasyonları gibi.
- **Performans dikkate alınarak** optimize edilmiş CSS ve minimum dosya boyutu.
- **Tarayıcılar arası test**: Farklı tarayıcılarda uyumluluğu sağlama.

> 💡 **Profesyonel İpucu**: Önce mobil tasarımla başlayın, ardından daha büyük ekranlar için geliştirin. Bu mobil öncelikli yaklaşım, uygulamanızın tüm cihazlarda iyi çalışmasını sağlar ve modern web geliştirme en iyi uygulamalarını takip eder.

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluğu sağlamak için çaba göstersek de, otomatik çeviriler hata veya yanlışlıklar içerebilir. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul edilmez.