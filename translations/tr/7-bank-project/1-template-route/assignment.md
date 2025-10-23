<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "df0dcecddcd28ea8cbf6ede0ad57d673",
  "translation_date": "2025-10-23T00:03:11+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "tr"
}
-->
# Yönlendirmeyi Geliştirme

## Talimatlar

Artık temel bir yönlendirme sistemi oluşturduğunuza göre, kullanıcı deneyimini iyileştiren ve geliştirici araçlarını daha iyi hale getiren profesyonel özelliklerle bunu geliştirme zamanı geldi. Gerçek dünya uygulamaları sadece şablon değiştirmekten fazlasını gerektirir – dinamik sayfa başlıkları, yaşam döngüsü kancaları ve genişletilebilir mimariler gibi özelliklere ihtiyaç duyar.

Bu ödevde, yönlendirme uygulamanızı üretim web uygulamalarında yaygın olarak bulunan iki temel özellik ile genişleteceksiniz. Bu geliştirmeler, bankacılık uygulamanızın daha profesyonel görünmesini sağlayacak ve gelecekteki işlevsellik için bir temel oluşturacaktır.

Şu anda rota tanımları yalnızca kullanılacak şablon kimliğini içeriyor. Ancak yeni bir sayfa görüntülerken bazen biraz daha fazlasına ihtiyaç duyulur. Hadi yönlendirme uygulamamızı iki ek özellik ile geliştirelim:

### Özellik 1: Dinamik Sayfa Başlıkları
**Amaç:** Her şablona başlıklar ekleyin ve şablon değiştiğinde pencere başlığını bu yeni başlıkla güncelleyin.

**Neden önemli:**
- **Kullanıcı deneyimini iyileştirir**: Tarayıcı sekmelerinde açıklayıcı başlıklar gösterir
- **Erişilebilirliği artırır**: Ekran okuyucular ve yardımcı teknolojiler için daha iyi destek sağlar  
- **Daha iyi yer imi ve tarayıcı geçmişi bağlamı sağlar**
- **Profesyonel web geliştirme en iyi uygulamalarını takip eder**

**Uygulama yaklaşımı:**
- **Rota nesnesini genişletin**: Her rota için başlık bilgisi ekleyin
- **`updateRoute()` fonksiyonunu değiştirin**: `document.title` öğesini dinamik olarak güncelleyin
- **Test edin**: Ekranlar arasında gezinirken başlıkların doğru şekilde değiştiğinden emin olun

### Özellik 2: Rota Yaşam Döngüsü Kancaları  
**Amaç:** Şablon değiştikten sonra bazı kodları çalıştırma seçeneği ekleyin. Her seferinde kontrol paneli sayfası görüntülendiğinde geliştirici konsolunda `'Dashboard is shown'` yazdırmak istiyoruz.

**Neden önemli:**
- **Belirli rotalar yüklendiğinde özel mantık yürütmeyi sağlar**
- **Analitik, günlük kaydı veya başlatma kodu için kancalar sağlar**
- **Daha karmaşık rota davranışları için bir temel oluşturur**
- **Web geliştirmede gözlemci desenini gösterir**

**Uygulama yaklaşımı:**
- **Rota yapılandırmalarına isteğe bağlı bir geri çağırma fonksiyonu özelliği ekleyin**
- **Şablon render işlemi tamamlandıktan sonra geri çağırma fonksiyonunu (varsa) çalıştırın**
- **Özelliğin tanımlı bir geri çağırma ile herhangi bir rota için çalıştığından emin olun**
- **Kontrol panelini ziyaret ettiğinizde konsol mesajının göründüğünü test edin**

## Değerlendirme Ölçütleri

| Kriter | Örnek                                                                                                                          | Yeterli                                                                                                                                                                                  | Geliştirme Gerekiyor                                       |
| ------ | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
|        | İki özellik uygulanmış ve çalışıyor. Başlık ve kod ekleme, `routes` tanımına eklenen yeni bir rota için de çalışıyor.           | İki özellik çalışıyor, ancak davranış `routes` tanımı üzerinden yapılandırılamıyor. Başlık ve kod ekleme ile üçüncü bir rota eklemek ya çalışmıyor ya da kısmen çalışıyor.                | Özelliklerden biri eksik veya düzgün çalışmıyor.          |

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul edilmez.