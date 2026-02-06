# Ödev: Tarayıcı Eklentinizi Yeniden Tasarlayın

## Genel Bakış

Karbon ayak izi tarayıcı eklentinizin HTML yapısını oluşturduğunuza göre, şimdi onu görsel olarak çekici ve kullanıcı dostu hale getirme zamanı. Harika bir tasarım, kullanıcı deneyimini geliştirir ve eklentinizi daha profesyonel ve ilgi çekici hale getirir.

Eklentiniz temel CSS stilleriyle birlikte gelir, ancak bu ödev, kişisel tarzınızı yansıtan ve mükemmel kullanılabilirliği koruyan benzersiz bir görsel kimlik oluşturmanızı gerektiriyor.

## Talimatlar

### Bölüm 1: Mevcut Tasarımı Analiz Edin

Değişiklik yapmadan önce mevcut CSS yapısını inceleyin:

1. **CSS dosyalarını bulun**: Eklenti projenizdeki CSS dosyalarını bulun.
2. **Mevcut stil yaklaşımını gözden geçirin**: Renk şeması ve düzeni inceleyin.
3. **Geliştirme alanlarını belirleyin**: Düzen, tipografi ve görsel hiyerarşi açısından iyileştirme yapılabilecek alanları tespit edin.
4. **Tasarımın kullanıcı hedeflerini nasıl desteklediğini düşünün**: Formun kolayca doldurulması ve verilerin net bir şekilde görüntülenmesi.

### Bölüm 2: Özel Stil Tasarımınızı Oluşturun

Uyumlu bir görsel tasarım oluşturun:

**Renk Şeması:**
- Çevresel temaları yansıtan bir ana renk paleti seçin.
- Erişilebilirlik için yeterli kontrast sağlayın (WebAIM'in kontrast kontrol aracı gibi araçları kullanabilirsiniz).
- Renklerin farklı tarayıcı temalarında nasıl görüneceğini düşünün.

**Tipografi:**
- Küçük eklenti boyutlarında iyi çalışan okunabilir yazı tipleri seçin.
- Uygun yazı boyutları ve ağırlıkları ile net bir hiyerarşi oluşturun.
- Metnin hem açık hem de koyu tarayıcı temalarında okunabilir olmasını sağlayın.

**Düzen ve Boşluklar:**
- Form öğelerinin ve veri görüntülemenin görsel organizasyonunu iyileştirin.
- Daha iyi okunabilirlik için uygun dolgu ve kenar boşlukları ekleyin.
- Farklı ekran boyutları için duyarlı tasarım ilkelerini göz önünde bulundurun.

### Bölüm 3: Tasarımınızı Uygulayın

CSS dosyalarını düzenleyerek tasarımınızı uygulayın:

```css
/* Example starting points for customization */

.form-data {
    /* Style the configuration form */
    background: /* your choice */;
    padding: /* your spacing */;
    border-radius: /* your preference */;
}

.result-container {
    /* Style the data display area */
    background: /* complementary color */;
    border: /* your border style */;
    margin: /* your spacing */;
}

/* Add your custom styles here */
```

**Stil verilecek ana alanlar:**
- **Form öğeleri**: Giriş alanları, etiketler ve gönderme düğmesi.
- **Sonuç görüntüleme**: Veri konteyneri, metin stili ve yükleme durumları.
- **Etkileşimli öğeler**: Üzerine gelme efektleri, düğme durumları ve geçişler.
- **Genel düzen**: Konteyner boşlukları, arka plan renkleri ve görsel hiyerarşi.

### Bölüm 4: Test Edin ve Geliştirin

1. **Eklentinizi oluşturun**: `npm run build` komutunu kullanarak.
2. **Güncellenmiş eklentiyi tarayıcınıza yükleyin**.
3. **Tüm görsel durumları test edin**: Form girişi, yükleme, sonuç görüntüleme, hatalar.
4. **Erişilebilirliği doğrulayın**: Tarayıcı geliştirici araçlarını kullanarak.
5. **Stillerinizi gerçek kullanım temelinde geliştirin**.

## Yaratıcı Zorluklar

### Temel Seviye
- Renkleri ve yazı tiplerini güncelleyerek uyumlu bir tema oluşturun.
- Arayüzdeki boşlukları ve hizalamayı iyileştirin.
- Etkileşimli öğelere hafif üzerine gelme efektleri ekleyin.

### Orta Seviye
- Eklentiniz için özel simgeler veya grafikler tasarlayın.
- Farklı durumlar arasında yumuşak geçişler uygulayın.
- API çağrıları için benzersiz bir yükleme animasyonu oluşturun.

### İleri Seviye
- Birden fazla tema seçeneği tasarlayın (açık/koyu/yüksek kontrast).
- Farklı tarayıcı pencere boyutları için duyarlı tasarım uygulayın.
- Kullanıcı deneyimini geliştiren mikro etkileşimler ekleyin.

## Teslimat Yönergeleri

Tamamlanmış ödeviniz şunları içermelidir:

- **Düzenlenmiş CSS dosyaları**: Özel stilinizle.
- **Ekran görüntüleri**: Eklentinizin farklı durumlarını (form, yükleme, sonuçlar) gösteren.
- **Kısa açıklama**: (2-3 cümle) Tasarım seçimlerinizi ve kullanıcı deneyimini nasıl geliştirdiğini açıklayan.

## Değerlendirme Ölçütleri

| Kriter | Üstün (4) | Yeterli (3) | Gelişmekte (2) | Başlangıç (1) |
|--------|-----------|-------------|----------------|---------------|
| **Görsel Tasarım** | Kullanılabilirliği artıran ve güçlü tasarım ilkelerini yansıtan yaratıcı, uyumlu tasarım | İyi tasarım seçimleri, tutarlı stil ve net görsel hiyerarşi | Temel tasarım iyileştirmeleri, bazı tutarsızlıklar | Minimal stil değişiklikleri veya tutarsız tasarım |
| **Fonksiyonellik** | Tüm stiller farklı durumlar ve tarayıcı ortamlarında mükemmel çalışıyor | Stiller iyi çalışıyor, ancak uç durumlarda küçük sorunlar var | Çoğu stil işlevsel, bazı görüntüleme sorunları mevcut | Kullanılabilirliği etkileyen önemli stil sorunları |
| **Kod Kalitesi** | Anlamlı sınıf adları ve verimli seçicilerle temiz, iyi organize edilmiş CSS | Uygun seçici ve özellik kullanımı ile iyi CSS yapısı | Kabul edilebilir CSS, bazı organizasyon sorunları mevcut | Zayıf CSS yapısı veya aşırı karmaşık stil |
| **Erişilebilirlik** | Mükemmel renk kontrastı, okunabilir yazı tipleri ve engelli kullanıcılar için düşünülmüş tasarım | İyi erişilebilirlik uygulamaları, küçük iyileştirme alanları mevcut | Temel erişilebilirlik dikkate alınmış, bazı sorunlar var | Erişilebilirlik gereksinimlerine sınırlı dikkat verilmiş |

## Başarı İçin İpuçları

> 💡 **Tasarım İpucu**: Küçük değişikliklerle başlayın ve daha dramatik stillere doğru ilerleyin. Tipografi ve boşluklardaki küçük iyileştirmeler, algılanan kalite üzerinde büyük etkiler yaratabilir.

**Takip edilmesi gereken en iyi uygulamalar:**
- **Eklentinizi** hem açık hem de koyu tarayıcı temalarında test edin.
- **Göreceli birimler kullanın** (em, rem) daha iyi ölçeklenebilirlik için.
- **Tutarlı boşluklar sağlayın** CSS özel özelliklerini kullanarak.
- **Farklı görsel ihtiyaçlara sahip kullanıcılar için tasarımınızı düşünün**.
- **CSS'inizi doğrulayın** doğru sözdizimini takip ettiğinden emin olmak için.

> ⚠️ **Yaygın Hata**: Görsel çekicilik uğruna kullanılabilirliği feda etmeyin. Eklentiniz hem güzel hem de işlevsel olmalıdır.

**Unutmayın:**
- **Önemli bilgilerin** kolayca okunabilir olmasını sağlayın.
- **Düğmelerin ve etkileşimli öğelerin** kolayca tıklanabilir olmasını sağlayın.
- **Kullanıcı eylemleri için net görsel geri bildirim sağlayın**.
- **Tasarımınızı gerçek verilerle test edin**, sadece yer tutucu metinle değil.

Hem işlevsel hem de görsel olarak etkileyici bir tarayıcı eklentisi oluşturmak için iyi şanslar!

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.