<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0a02cb117e91a5b5f24178080068a3d",
  "translation_date": "2025-10-23T00:02:03+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "tr"
}
-->
# Kod Yeniden Düzenleme ve Dokümantasyon Ödevi

## Öğrenme Hedefleri

Bu ödevi tamamlayarak, profesyonel geliştiricilerin günlük olarak kullandığı temel yazılım geliştirme becerilerini pratik yapacaksınız. Kodunuzu sürdürülebilirlik için organize etmeyi, soyutlama yoluyla tekrarı azaltmayı ve gelecekteki geliştiriciler (kendiniz dahil) için çalışmanızı belgelemeyi öğreneceksiniz.

Temiz ve iyi belgelenmiş kod, birden fazla geliştiricinin iş birliği yaptığı ve kod tabanlarının zamanla geliştiği gerçek dünya web geliştirme projelerinde çok önemlidir.

## Ödevin Genel Bakışı

Bankacılık uygulamanızın `app.js` dosyası, giriş, kayıt ve kontrol paneli işlevselliği ile önemli ölçüde büyüdü. Kodun okunabilirliğini, sürdürülebilirliğini artırmak ve tekrarı azaltmak için profesyonel geliştirme uygulamalarını kullanarak bu kodu yeniden düzenleme zamanı.

## Talimatlar

Mevcut `app.js` kodunuzu aşağıdaki üç temel yeniden düzenleme tekniğini uygulayarak dönüştürün:

### 1. Yapılandırma Sabitlerini Çıkarın

**Görev**: Dosyanızın üst kısmında yeniden kullanılabilir sabitlerle bir yapılandırma bölümü oluşturun.

**Uygulama rehberi:**
- Sunucu API temel URL'sini (şu anda birden fazla yerde sabit kodlanmış) çıkarın
- Birden fazla işlevde görünen hata mesajları için sabitler oluşturun
- Tekrarlanan rota yolları ve öğe kimliklerini çıkarmayı düşünün

**Örnek yapı:**
```javascript
// Configuration constants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Birleşik İstek Fonksiyonu Oluşturun

**Görev**: `createAccount()` ve `getAccount()` arasındaki tekrarlayan kodu ortadan kaldıran yeniden kullanılabilir bir `sendRequest()` fonksiyonu oluşturun.

**Gereksinimler:**
- Hem GET hem de POST isteklerini işleyin
- Uygun hata işleme ekleyin
- Farklı URL uç noktalarını destekleyin
- İsteğe bağlı olarak istek gövdesi verilerini kabul edin

**Fonksiyon imza rehberi:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation here
}
```

### 3. Profesyonel Kod Dokümantasyonu Ekleyin

**Görev**: Kodunuzu, mantığınızın "neden"ini açıklayan açık ve yardımcı yorumlarla belgeleyin.

**Dokümantasyon standartları:**
- Fonksiyon dokümantasyonu ekleyerek amacını, parametrelerini ve dönüş değerlerini açıklayın
- Karmaşık mantık veya iş kuralları için satır içi yorumlar ekleyin
- İlgili işlevleri bölüm başlıklarıyla gruplandırın
- Belirgin olmayan kod kalıplarını veya tarayıcıya özgü çözümleri açıklayın

**Örnek dokümantasyon stili:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Prevent default form submission to handle with JavaScript
  event.preventDefault();
  
  // Your implementation...
}
```

## Başarı Kriterleri

Yeniden düzenlenmiş kodunuz şu profesyonel geliştirme uygulamalarını göstermelidir:

### Örnek Uygulama
- ✅ **Sabitler**: Tüm sihirli dizeler ve URL'ler açıkça adlandırılmış sabitlere çıkarılmıştır
- ✅ **DRY Prensibi**: Ortak istek mantığı yeniden kullanılabilir bir `sendRequest()` fonksiyonunda birleştirilmiştir
- ✅ **Dokümantasyon**: Fonksiyonlar, amaçlarını ve parametrelerini açıklayan açık JSDoc yorumlarına sahiptir
- ✅ **Organizasyon**: Kod, bölüm başlıkları ve tutarlı formatlama ile mantıksal olarak gruplandırılmıştır
- ✅ **Hata İşleme**: Yeni istek fonksiyonunu kullanarak geliştirilmiş hata işleme

### Yeterli Uygulama
- ✅ **Sabitler**: Çoğu tekrarlanan değer çıkarılmış, ancak bazı küçük sabit kodlanmış değerler kalmış
- ✅ **Faktorizasyon**: Temel bir `sendRequest()` fonksiyonu oluşturulmuş, ancak tüm uç durumları ele almayabilir
- ✅ **Yorumlar**: Anahtar fonksiyonlar belgelenmiş, ancak bazı açıklamalar daha eksiksiz olabilir
- ✅ **Okunabilirlik**: Kod genel olarak iyi organize edilmiş, ancak bazı iyileştirme alanları mevcut

### Geliştirme Gerekiyor
- ❌ **Sabitler**: Birçok sihirli dize ve URL dosya boyunca sabit kodlanmış olarak kalmış
- ❌ **Tekrar**: Benzer işlevler arasında önemli kod tekrarı mevcut
- ❌ **Dokümantasyon**: Eksik veya yetersiz yorumlar, kodun amacını açıklamıyor
- ❌ **Organizasyon**: Kod açık bir yapı ve mantıksal gruplamadan yoksun

## Yeniden Düzenlenmiş Kodunuzu Test Etme

Yeniden düzenlemeden sonra, bankacılık uygulamanızın hala doğru çalıştığından emin olun:

1. **Tüm kullanıcı akışlarını test edin**: Kayıt, giriş, kontrol paneli görüntüleme ve hata işleme
2. **API çağrılarını doğrulayın**: `sendRequest()` fonksiyonunuzun hem hesap oluşturma hem de alma işlemleri için çalıştığından emin olun
3. **Hata senaryolarını kontrol edin**: Geçersiz kimlik bilgileri ve ağ hataları ile test yapın
4. **Konsol çıktısını inceleyin**: Yeniden düzenleme sırasında yeni hataların tanıtılmadığından emin olun

## Teslimat Yönergeleri

Yeniden düzenlenmiş `app.js` dosyanızı şu şekilde gönderin:
- Farklı işlevsellikleri organize eden açık bölüm başlıkları
- Tutarlı kod formatlama ve girintileme
- Tüm fonksiyonlar için eksiksiz JSDoc dokümantasyonu
- Yeniden düzenleme yaklaşımınızı açıklayan kısa bir yorum

**Bonus Görev**: Uygulamanızın mimarisini ve farklı işlevlerin nasıl birlikte çalıştığını açıklayan basit bir kod dokümantasyon dosyası (`CODE_STRUCTURE.md`) oluşturun.

## Gerçek Dünya Bağlantısı

Bu ödev, profesyonel geliştiricilerin düzenli olarak gerçekleştirdiği türde kod bakımını yansıtmaktadır. Endüstri ortamlarında:
- **Kod incelemeleri**, bu ödevde olduğu gibi okunabilirlik ve sürdürülebilirliği değerlendirir
- **Teknik borç**, kod düzenli olarak yeniden düzenlenip belgelenmediğinde birikir
- **Ekip iş birliği**, yeni ekip üyelerinin anlayabileceği açık ve iyi belgelenmiş koda bağlıdır
- **Hata düzeltmeleri**, uygun soyutlamalarla iyi organize edilmiş kod tabanlarında çok daha kolaydır

Burada pratik yaptığınız beceriler - sabitleri çıkarmak, tekrarı ortadan kaldırmak ve açık belgeler yazmak - profesyonel yazılım geliştirme için temel niteliklerdir.

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.