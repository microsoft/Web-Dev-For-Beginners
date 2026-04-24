# AGENTS.md

## Proje Genel Bakışı

Bu, başlangıç seviyesindeki kişilere web geliştirme temellerini öğretmek için hazırlanmış eğitim müfredatı deposudur. Müfredat, Microsoft Cloud Advocates tarafından geliştirilmiş kapsamlı 12 haftalık bir kurstur ve JavaScript, CSS ve HTML içeren 24 pratik ders içerir.

### Temel Bileşenler

- **Eğitim İçeriği**: Proje tabanlı modüllere organize edilmiş 24 yapılandırılmış ders  
- **Pratik Projeler**: Terrarium, Yazı Yazma Oyunu, Tarayıcı Uzantısı, Uzay Oyunu, Banka Uygulaması, Kod Editörü ve Yapay Zeka Sohbet Asistanı  
- **Etkileşimli Quizler**: Her biri 3 sorudan oluşan 48 quiz (ders öncesi/sonrası değerlendirmeler)  
- **Çok Dilli Destek**: GitHub Actions aracılığıyla 50+ dillere otomatik çeviri  
- **Teknolojiler**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (Yapay Zeka projeleri için)  

### Mimari

- Ders tabanlı yapıya sahip eğitim deposu  
- Her ders klasörü README, kod örnekleri ve çözümler içerir  
- Bağımsız projeler ayrı dizinlerde (quiz-app, çeşitli ders projeleri)  
- GitHub Actions kullanan çeviri sistemi (co-op-translator)  
- Docsify ile sunulan ve PDF olarak mevcut belgeler  

## Kurulum Komutları

Bu depo öncelikle eğitim içeriğinin tüketimi için hazırlanmıştır. Belirli projelerle çalışmak için:

### Ana Depo Kurulumu

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz Uygulaması Kurulumu (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Geliştirme sunucusunu başlat
npm run build      # Üretim için derle
npm run lint       # ESLint'i çalıştır
```

### Banka Projesi API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # API sunucusunu başlat
npm run lint       # ESLint çalıştır
npm run format     # Prettier ile biçimlendir
```

### Tarayıcı Uzantısı Projeleri

```bash
cd 5-browser-extension/solution
npm install
# Tarayıcıya özel uzantı yükleme talimatlarını izleyin
```

### Uzay Oyunu Projeleri

```bash
cd 6-space-game/solution
npm install
# index.html dosyasını tarayıcıda açın veya Live Server kullanın
```

### Sohbet Projesi (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN ortam değişkenini ayarla
python api.py
```

## Geliştirme İş Akışı

### İçerik Katkısı Sağlayanlar İçin

1. Depoyu GitHub hesabınıza **forklayın**  
2. Forkladığınız depoyu **yerel olarak klonlayın**  
3. Değişiklikler için yeni bir **branch oluşturun**  
4. Ders içeriğinde veya kod örneklerinde değişiklik yapın  
5. İlgili proje dizinlerinde kod değişikliklerini test edin  
6. Katkı yönergelerine uygun şekilde pull request gönderin  

### Öğrenenler İçin

1. Depoyu forklar veya klonlar  
2. Ders dizinlerine sırasıyla gidin  
3. Her ders için README dosyalarını okuyun  
4. https://ff-quizzes.netlify.app/web/ adresinde ders öncesi quizleri tamamlayın  
5. Ders klasörlerindeki kod örneklerinde çalışın  
6. Ödevleri ve zorlukları tamamlayın  
7. Ders sonrası quizleri yapın  

### Canlı Geliştirme

- **Dokümantasyon**: Kök dizinde `docsify serve` çalıştırın (port 3000)  
- **Quiz Uygulaması**: quiz-app dizininde `npm run dev` çalıştırın  
- **Projeler**: HTML projeleri için VS Code Live Server eklentisi kullanın  
- **API Projeleri**: İlgili API dizinlerinde `npm start` komutunu çalıştırın  

## Test Talimatları

### Quiz Uygulaması Testi

```bash
cd quiz-app
npm run lint       # Kod stili sorunlarını kontrol et
npm run build      # Derlemenin başarılı olduğunu doğrula
```

### Banka API Testi

```bash
cd 7-bank-project/api
npm run lint       # Kod stili sorunlarını kontrol et
node server.js     # Sunucunun hatasız başlamasını doğrula
```

### Genel Test Yaklaşımı

- Bu eğitim deposunda kapsamlı otomatik test yoktur  
- Manuel testler şunlara odaklanır:  
  - Kod örneklerinin hata vermeden çalışması  
  - Dokümantasyondaki linklerin doğru çalışması  
  - Proje derlemelerinin sorunsuz tamamlanması  
  - Örneklerin en iyi uygulamalara uygunluğu  

### Ön Gönderim Kontrolleri

- package.json bulunan dizinlerde `npm run lint` çalıştırın  
- Markdown bağlantılarının geçerliliğini kontrol edin  
- Kod örneklerini tarayıcı veya Node.js’de test edin  
- Çevirilerin yapısal bütünlüğünü doğrulayın  

## Kod Stili Kuralları

### JavaScript

- Modern ES6+ sözdizimini kullanın  
- Projelerde sağlanan standart ESLint yapılandırmalarına uyun  
- Eğitimsel netlik için anlamlı değişken ve fonksiyon isimleri kullanın  
- Öğrenenler için kavramları açıklayan yorumlar ekleyin  
- Prettier ile biçimlendirin (yapılandırılmışsa)  

### HTML/CSS

- Anlamlı HTML5 elementleri kullanın  
- Duyarlı tasarım prensiplerini takip edin  
- Net sınıf adlandırma konvansiyonları uygulayın  
- Öğrenenlere CSS tekniklerini açıklayan yorumlar ekleyin  

### Python

- PEP 8 stil rehberine uyun  
- Açık ve eğitimsel kod örnekleri yazın  
- Öğrenmeye yardımcı olması için tip ipuçları kullanın  

### Markdown Dokümantasyon

- Net başlık hiyerarşisi  
- Dil belirticili kod blokları  
- Ek kaynaklara linkler  
- `images/` dizininde ekran görüntüleri ve resimler  
- Görseller için erişilebilirlik amacıyla alt metin  

### Dosya Organizasyonu

- Dersler sıralı numaralandırılmış (1-getting-started-lessons, 2-js-basics, vb.)  
- Her projenin `solution/` ve genellikle `start/` ya da `your-work/` dizinleri var  
- Derslere özgü `images/` klasörlerinde görseller saklanır  
- Çeviriler `translations/{language-code}/` yapısında  

## Derleme ve Dağıtım

### Quiz Uygulaması Dağıtımı (Azure Statik Web Uygulamaları)

quiz-app, Azure Statik Web Uygulamaları dağıtımı için yapılandırılmıştır:

```bash
cd quiz-app
npm run build      # dist/ klasörünü oluşturur
# main dalına push yapıldığında GitHub Actions iş akışı ile dağıtım yapar
```

Azure Statik Web Uygulamaları yapılandırması:  
- **Uygulama konumu**: `/quiz-app`  
- **Çıktı konumu**: `dist`  
- **İş akışı**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`  

### Dokümantasyon PDF Oluşturma

```bash
npm install                    # docsify-to-pdf yükleyin
npm run convert               # docs'dan PDF oluşturun
```

### Docsify Dokümantasyonu

```bash
npm install -g docsify-cli    # Docsify'i global olarak yükleyin
docsify serve                 # localhost:3000 üzerinde sunun
```

### Proje Bazlı Derlemeler

Her proje dizininin kendi derleme süreci olabilir:  
- Vue projeleri: üretim paketleri için `npm run build`  
- Statik projeler: derleme adımı yok, dosyalar doğrudan servis edilir  

## Pull Request Yönergeleri

### Başlık Formatı

Değişiklik alanını açıkça belirten başlıklar kullanın:  
- `[Quiz-app] Ders X için yeni quiz ekle`  
- `[Lesson-3] Terrarium projesinde yazım hatası düzelt`  
- `[Translation] 5. ders için İspanyolca çeviri ekle`  
- `[Docs] Kurulum talimatlarını güncelle`  

### Gerekli Kontroller

Bir PR göndermeden önce:  

1. **Kod Kalitesi**:  
   - Etkilenen projelerde `npm run lint` çalıştırın  
   - Tüm lint hatalarını ve uyarılarını düzeltin  

2. **Derleme Doğrulaması**:  
   - Uygun ise `npm run build` komutunu çalıştırın  
   - Derleme hatası olmadığından emin olun  

3. **Link Doğrulaması**:  
   - Tüm markdown linklerini test edin  
   - Görsel referanslarının çalıştığını doğrulayın  

4. **İçerik İncelemesi**:  
   - Yazım ve dil bilgisi kontrolü yapın  
   - Kod örneklerinin doğru ve eğitici olduğundan emin olun  
   - Çevirilerin orijinal anlamı koruduğunu kontrol edin  

### Katkı Gereksinimleri

- Microsoft CLA’ya (ilk PR’da otomatik kontrol) onay verin  
- [Microsoft Açık Kaynak Davranış Kuralları](https://opensource.microsoft.com/codeofconduct/)na uyun  
- Ayrıntılar için [CONTRIBUTING.md](./CONTRIBUTING.md) dosyasına bakın  
- Varsa PR açıklamasında ilgili issue numaralarını belirtin  

### İnceleme Süreci

- PR’lar maintainers ve topluluk tarafından incelenir  
- Eğitimsel netlik önceliklidir  
- Kod örnekleri güncel en iyi uygulamalara uygun olmalıdır  
- Çeviriler doğruluk ve kültürel uygunluk açısından gözden geçirilir  

## Çeviri Sistemi

### Otomatik Çeviri

- GitHub Actions ile co-op-translator iş akışı kullanılır  
- 50’den fazla dile otomatik çeviri yapılır  
- Kaynak dosyalar ana dizinlerde bulunur  
- Çeviriler `translations/{language-code}/` dizinlerinde saklanır  

### El İle Çeviri İyileştirmeleri Ekleme

1. `translations/{language-code}/` içindeki dosyayı bulun  
2. Yapıyı bozmadan geliştirmeler yapın  
3. Kod örneklerinin çalışır durumda kalmasını sağlayın  
4. Lokal quiz içeriklerini test edin  

### Çeviri Meta Verileri

Çevrilmiş dosyalar meta veri başlığı içerir:  
```markdown
<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "...",
  "translation_date": "...",
  "source_file": "...",
  "language_code": "..."
}
-->
```

## Hata Ayıklama ve Sorun Giderme

### Yaygın Sorunlar

**Quiz uygulaması başlamıyor**:  
- Node.js sürümünü kontrol edin (v14+ önerilir)  
- `node_modules` ve `package-lock.json` silip `npm install` yeniden çalıştırın  
- Port çakışmalarını kontrol edin (varsayılan: Vite port 5173 kullanır)  

**API sunucusu başlamıyor**:  
- Node.js sürümünün minimum gereksinimi karşıladığından emin olun (node >=10)  
- Portun kullanımda olup olmadığını kontrol edin  
- Tüm bağımlılıkların `npm install` ile kurulu olduğundan emin olun  

**Tarayıcı uzantısı yüklenmiyor**:  
- manifest.json’ın doğru formatta olduğunu doğrulayın  
- Tarayıcı konsolundaki hataları kontrol edin  
- Tarayıcıya özgü uzantı kurulum talimatlarını izleyin  

**Python sohbet projesi sorunları**:  
- OpenAI paketinin yüklü olduğundan emin olun: `pip install openai`  
- GITHUB_TOKEN ortam değişkeninin ayarlı olduğundan emin olun  
- GitHub Modelleri erişim izinlerini kontrol edin  

**Docsify dokümantasyon hizmet vermiyor**:  
- docsify-cli küresel kurulumu yapın: `npm install -g docsify-cli`  
- Depo kök dizininden çalıştırın  
- `docs/_sidebar.md` dosyasının mevcut olduğunu kontrol edin  

### Geliştirme Ortamı İpuçları

- HTML projeleri için VS Code Live Server eklentisi kullanın  
- Tutarlı biçimlendirme için ESLint ve Prettier eklentileri kurun  
- JavaScript hata ayıklaması için tarayıcı Geliştirici Araçlarını kullanın  
- Vue projeleri için Vue DevTools tarayıcı eklentisini yükleyin  

### Performans Dikkatleri

- Çok sayıda çeviri dosyası (50+ dil) tam klonların büyük olmasına neden olur  
- Sadece içeriğe çalışıyorsanız `git clone --depth 1` ile sığ klon alın  
- İngilizce içerikte çalışırken çevirileri aramalardan hariç tutun  
- İlk çalıştırmada derleme süreçleri yavaş olabilir (npm install, Vite build)  

## Güvenlik Dikkatleri

### Ortam Değişkenleri

- API anahtarları depo içerisine asla commit edilmemelidir  
- `.env` dosyaları kullanılır (zaten `.gitignore`da)  
- Gerekli ortam değişkenleri proje README’lerinde belgelenir  

### Python Projeleri

- Sanal ortamlar kullanın: `python -m venv venv`  
- Bağımlılıkları güncel tutun  
- GitHub tokenları minimum gerekli izinlere sahip olmalı  

### GitHub Modelleri Erişimi

- GitHub Modelleri için Kişisel Erişim Tokenları (PAT) gerekir  
- Tokenlar ortam değişkenleri olarak saklanmalı  
- Token veya kimlik bilgileri asla commit edilmemeli  

## Ek Notlar

### Hedef Kitle

- Web geliştirmeye yeni başlayanlar  
- Öğrenciler ve kendi kendine öğrenenler  
- Sınıflarda müfredatı kullanan öğretmenler  
- İçerik erişilebilirlik ve kademeli beceri gelişimi üzerine tasarlanmıştır  

### Eğitim Felsefesi

- Proje tabanlı öğrenme yaklaşımı  
- Sık bilgi denetimleri (quizler)  
- Uygulamalı kodlama egzersizleri  
- Gerçek dünya uygulama örnekleri  
- Öncelikle temel becerilere odaklanma, sonrasında frameworkler  

### Depo Bakımı

- Aktif öğrenenler ve katkı sağlayan topluluk  
- Düzenli olarak bağımlılık ve içerik güncellemeleri  
- Issue ve tartışmalar maintainers tarafından takip edilir  
- Çeviri güncellemeleri GitHub Actions ile otomatik yapılır  

### İlgili Kaynaklar

- [Microsoft Learn modülleri](https://docs.microsoft.com/learn/)  
- [Student Hub kaynakları](https://docs.microsoft.com/learn/student-hub/)  
- Öğrenenler için önerilen [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)  
- Ek kurslar: Üretken Yapay Zeka, Veri Bilimi, ML, IoT müfredatları mevcut  

### Belirli Projelerle Çalışmak

Bireysel projeler için ayrıntılı talimatlar `README` dosyalarında:  
- `quiz-app/README.md` - Vue 3 quiz uygulaması  
- `7-bank-project/README.md` - Kimlik doğrulamalı banka uygulaması  
- `5-browser-extension/README.md` - Tarayıcı uzantısı geliştirme  
- `6-space-game/README.md` - Canvas tabanlı oyun geliştirme  
- `9-chat-project/README.md` - Yapay zeka sohbet asistanı projesi  

### Monorepo Yapısı

Geleneksel bir monorepo olmasa da, bu depo birden fazla bağımsız proje içerir:  
- Her ders kendi içinde tamdır  
- Projeler paylaşılmış bağımlılıklara sahip değildir  
- Bireysel projeler üzerinde diğerlerini etkilemeden çalışabilirsiniz  
- Tam müfredat deneyimi için tüm depo klonlanabilir  


---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Feragatname**:  
Bu doküman, yapay zeka çeviri servisi [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluğa özen gösterilmekle birlikte, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayınız. Orijinal doküman, kendi dilinde yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yorum hatalarından sorumlu değiliz.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->