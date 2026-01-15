<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "50a7783473b39a2e0f133e271a102231",
  "translation_date": "2025-10-23T00:00:43+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "tr"
}
-->
# "İşlem Ekle" Diyalog Kutusunu Uygulama

## Genel Bakış

Bankacılık uygulamanız artık sağlam bir durum yönetimi ve veri kalıcılığına sahip, ancak gerçek bir bankacılık uygulamasının ihtiyaç duyduğu önemli bir özellik eksik: kullanıcıların kendi işlemlerini ekleyebilme yeteneği. Bu görevde, mevcut durum yönetimi sisteminizle sorunsuz bir şekilde entegre olan eksiksiz bir "İşlem Ekle" diyalog kutusunu uygulayacaksınız.

Bu görev, bankacılık ile ilgili dört derste öğrendiğiniz her şeyi bir araya getiriyor: HTML şablonlama, form işleme, API entegrasyonu ve durum yönetimi.

## Öğrenme Hedefleri

Bu görevi tamamlayarak:
- **Kullanıcı dostu** bir veri giriş diyalog arayüzü oluşturmayı öğreneceksiniz
- **Erişilebilir** bir form tasarımı uygulayarak klavye ve ekran okuyucu desteği sağlayacaksınız
- **Yeni özellikleri** mevcut durum yönetimi sisteminize entegre edeceksiniz
- **API iletişimi** ve hata yönetimi pratiği yapacaksınız
- **Modern web geliştirme** kalıplarını gerçek dünya özelliklerine uygulayacaksınız

## Talimatlar

### Adım 1: İşlem Ekle Butonu

**Oluşturun**: Kullanıcıların kolayca bulup erişebileceği bir "İşlem Ekle" butonu, kontrol paneli sayfanıza eklenmelidir.

**Gereksinimler:**
- **Butonu** kontrol panelinde mantıklı bir yere yerleştirin
- **Açık ve eylem odaklı** bir buton metni kullanın
- **Butonu** mevcut kullanıcı arayüzü tasarımınıza uygun şekilde stilize edin
- **Butonun** klavye ile erişilebilir olmasını sağlayın

### Adım 2: Diyalog Uygulaması

Diyalogunuzu uygulamak için aşağıdaki iki yaklaşımdan birini seçin:

**Seçenek A: Ayrı Sayfa**
- **Yeni** bir HTML şablonu oluşturun
- **Yönlendirme sisteminize** yeni bir rota ekleyin
- **Form sayfasına** geçişi ve geri dönüşü uygulayın

**Seçenek B: Modal Diyalog (Önerilen)**
- **JavaScript** kullanarak diyalogu gösterin/gizleyin, kontrol panelinden çıkmadan
- **[`hidden` özelliğini](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden)** veya CSS sınıflarını kullanarak uygulayın
- **Odak yönetimi** ile kullanıcı dostu bir deneyim oluşturun

### Adım 3: Erişilebilirlik Uygulaması

**Diyalogunuzun** [modal diyaloglar için erişilebilirlik standartlarına](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) uygun olduğundan emin olun:

**Klavye Navigasyonu:**
- **Escape** tuşu ile diyalogu kapatma desteği sağlayın
- **Odak** diyalog açıkken diyalog içinde hapsedilmeli
- **Odak** diyalog kapandığında tetikleyici butona geri dönmeli

**Ekran Okuyucu Desteği:**
- **Uygun ARIA etiketleri ve rolleri** ekleyin
- **Diyalog açılma/kapanma** durumunu ekran okuyuculara duyurun
- **Açık ve net** form alanı etiketleri ve hata mesajları sağlayın

### Adım 4: Form Oluşturma

**Bir HTML formu tasarlayın** ve işlem verilerini toplayın:

**Gerekli Alanlar:**
- **Tarih**: İşlemin gerçekleştiği tarih
- **Açıklama**: İşlemin amacı
- **Tutar**: İşlem değeri (gelir için pozitif, gider için negatif)

**Form Özellikleri:**
- **Kullanıcı girişlerini** gönderimden önce doğrulayın
- **Geçersiz veriler için** açık hata mesajları sağlayın
- **Yardımcı** yer tutucu metinler ve etiketler ekleyin
- **Mevcut tasarımla** tutarlı bir şekilde stilize edin

### Adım 5: API Entegrasyonu

**Formunuzu** arka uç API'sine bağlayın:

**Uygulama Adımları:**
- **Doğru uç nokta ve veri formatı için** [sunucu API spesifikasyonlarını](../api/README.md) inceleyin
- **Form girişlerinden** JSON verisi oluşturun
- **Veriyi** uygun hata yönetimi ile API'ye gönderin
- **Başarı/hata mesajlarını** kullanıcıya gösterin
- **Ağ hatalarını** düzgün bir şekilde yönetin

### Adım 6: Durum Yönetimi Entegrasyonu

**Kontrol panelinizi** yeni işlemle güncelleyin:

**Entegrasyon Gereksinimleri:**
- **Başarılı işlem eklemeden sonra** hesap verilerini yenileyin
- **Kontrol paneli görüntüsünü** sayfa yenilemesi gerektirmeden güncelleyin
- **Yeni işlemin** hemen görünmesini sağlayın
- **Süreç boyunca** doğru durum tutarlılığını koruyun

## Teknik Özellikler

**API Uç Noktası Detayları:**
[Sunucu API belgelerine](../api/README.md) başvurun:
- İşlem verileri için gerekli JSON formatı
- HTTP yöntemi ve uç nokta URL'si
- Beklenen yanıt formatı
- Hata yanıtı yönetimi

**Beklenen Sonuç:**
Bu görevi tamamladıktan sonra, bankacılık uygulamanız profesyonel bir görünüme ve davranışa sahip, tamamen işlevsel bir "İşlem Ekle" özelliğine sahip olmalıdır:

![Bir örnek "İşlem ekle" diyalog kutusunu gösteren ekran görüntüsü](../../../../translated_images/tr/dialog.93bba104afeb79f1.png)

## Uygulamanızı Test Etme

**Fonksiyonel Testler:**
1. **Doğrulayın**: "İşlem Ekle" butonu açıkça görülebilir ve erişilebilir
2. **Test edin**: Diyalog düzgün bir şekilde açılıp kapanıyor mu
3. **Onaylayın**: Form doğrulaması tüm gerekli alanlar için çalışıyor mu
4. **Kontrol edin**: Başarılı işlemler hemen kontrol panelinde görünüyor mu
5. **Emin olun**: Geçersiz veriler ve ağ sorunları için hata yönetimi çalışıyor mu

**Erişilebilirlik Testleri:**
1. **Sadece klavye kullanarak** tüm akışta gezinin
2. **Ekran okuyucu ile test edin**: Doğru duyurular yapılıyor mu
3. **Odak yönetiminin** düzgün çalıştığını doğrulayın
4. **Tüm form öğelerinin** uygun etiketlere sahip olduğunu kontrol edin

## Değerlendirme Rubriği

| Kriter | Örnek | Yeterli | Geliştirme Gerekiyor |
| -------- | --------- | -------- | ----------------- |
| **Fonksiyonellik** | İşlem ekleme özelliği kusursuz çalışıyor, mükemmel kullanıcı deneyimi sunuyor ve derslerdeki en iyi uygulamaları tamamen takip ediyor | İşlem ekleme özelliği doğru çalışıyor ancak bazı en iyi uygulamalar eksik veya küçük kullanılabilirlik sorunları var | İşlem ekleme özelliği kısmen çalışıyor veya önemli kullanılabilirlik sorunları var |
| **Kod Kalitesi** | Kod iyi organize edilmiş, belirlenmiş kalıpları takip ediyor, uygun hata yönetimi içeriyor ve mevcut durum yönetimiyle sorunsuz bir şekilde entegre oluyor | Kod çalışıyor ancak bazı organizasyon sorunları veya mevcut kod tabanıyla tutarsızlıklar olabilir | Kodda önemli yapısal sorunlar var veya mevcut kalıplarla iyi entegre olmuyor |
| **Erişilebilirlik** | Tam klavye navigasyon desteği, ekran okuyucu uyumluluğu ve mükemmel odak yönetimi ile WCAG yönergelerine tamamen uyuyor | Temel erişilebilirlik özellikleri uygulanmış ancak bazı klavye navigasyonu veya ekran okuyucu özellikleri eksik olabilir | Sınırlı veya hiç erişilebilirlik dikkate alınmamış |
| **Kullanıcı Deneyimi** | Sezgisel, cilalı arayüz, net geri bildirim, akıcı etkileşimler ve profesyonel görünüm | İyi kullanıcı deneyimi, geri bildirim veya görsel tasarımda küçük iyileştirme alanları var | Kötü kullanıcı deneyimi, kafa karıştırıcı arayüz veya geri bildirim eksikliği |

## Ek Zorluklar (İsteğe Bağlı)

Temel gereksinimleri tamamladıktan sonra, şu geliştirmeleri düşünebilirsiniz:

**Gelişmiş Özellikler:**
- **İşlem kategorileri** ekleyin (yemek, ulaşım, eğlence, vb.)
- **Gerçek zamanlı geri bildirimle** giriş doğrulaması uygulayın
- **Güçlü kullanıcılar için** klavye kısayolları oluşturun
- **İşlem düzenleme ve silme** yetenekleri ekleyin

**Gelişmiş Entegrasyon:**
- **Yeni eklenen işlemler için** geri alma işlevi uygulayın
- **CSV dosyalarından** toplu işlem içe aktarma ekleyin
- **İşlem arama ve filtreleme** yetenekleri oluşturun
- **Veri dışa aktarma** işlevi uygulayın

Bu isteğe bağlı özellikler, daha gelişmiş web geliştirme kavramlarını uygulamanıza ve daha eksiksiz bir bankacılık uygulaması oluşturmanıza yardımcı olacaktır!

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.