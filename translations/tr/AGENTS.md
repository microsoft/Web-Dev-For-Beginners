# AGENTS.md

## Proje Genel Bakışı

Bu, yeni başlayanlara web geliştirme temellerini öğretmek için hazırlanmış eğitim müfredatı deposudur. Müfredat, Microsoft Cloud Advocates tarafından geliştirilmiş kapsamlı 12 haftalık bir kurstur ve JavaScript, CSS ve HTML'i kapsayan 24 uygulamalı ders içerir.

### Ana Bileşenler

- **Eğitim İçeriği**: Proje tabanlı modüllerde düzenlenmiş 24 yapılandırılmış ders
- **Pratik Projeler**: Terrarium, Yazma Oyunu, Tarayıcı Uzantısı, Uzay Oyunu, Bankacılık Uygulaması, Kod Editörü ve AI Sohbet Asistanı
- **Etkileşimli Quizler**: Her biri 3 sorudan oluşan 48 quiz (ders öncesi/sonrası değerlendirmeler)
- **Çok Dilli Destek**: GitHub Actions ile 50+ dilde otomatik çeviriler
- **Teknolojiler**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projeleri için)

### Mimari

- Ders tabanlı yapıya sahip eğitim deposu
- Her ders klasörü README, kod örnekleri ve çözümler içerir
- Bağımsız projeler ayrı dizinlerde (quiz-app, çeşitli ders projeleri)
- GitHub Actions (co-op-translator) ile çeviri sistemi
- Docsify ile sunulan ve PDF olarak da erişilebilen dokümantasyon

## Kurulum Komutları

Bu depo öncelikle eğitim içeriği tüketimi içindir. Belirli projelerle çalışmak için:

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
npm run format     # Prettier ile formatla
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
# index.html dosyasını tarayıcıda açın veya Canlı Sunucu kullanın
```

### Sohbet Projesi (Python Arka Uç)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN ortam değişkenini ayarla
python api.py
```

## Geliştirme İş Akışı

### İçerik Katkı Sağlayıcıları için

1. Depoyu GitHub hesabınıza **fork edin**
2. Kendi forkunuzu yerel olarak **klonlayın**
3. Değişiklikler için **yeni bir dal oluşturun**
4. Ders içeriği veya kod örneklerinde değişiklik yapın
5. İlgili proje dizinlerinde kod değişikliklerini test edin
6. Katkı kurallarına uygun şekilde pull request gönderin

### Öğrenenler için

1. Depoyu fork edin veya klonlayın
2. Ders dizinlerinde sırasıyla gezin
3. Her dersin README dosyasını okuyun
4. https://ff-quizzes.netlify.app/web/ adresinde ders öncesi quizleri tamamlayın
5. Ders klasörlerindeki kod örneklerinin üzerinden geçin
6. Ödevleri ve zorlukları tamamlayın
7. Ders sonrası quizleri yapın

### Canlı Geliştirme

- **Dokümantasyon**: Kök dizinde `docsify serve` komutunu çalıştırın (port 3000)
- **Quiz Uygulaması**: `quiz-app` dizininde `npm run dev` komutunu çalıştırın
- **Projeler**: HTML projeleri için VS Code Live Server uzantısını kullanın
- **API Projeleri**: İlgili API dizinlerinde `npm start` komutunu çalıştırın

## Test Talimatları

### Quiz Uygulaması Testi

```bash
cd quiz-app
npm run lint       # Kod stili sorunları için kontrol et
npm run build      # Derlemenin başarılı olduğunu doğrula
```

### Banka API Testi

```bash
cd 7-bank-project/api
npm run lint       # Kod stili sorunlarını kontrol et
node server.js     # Sunucunun hatasız başlatıldığını doğrula
```

### Genel Test Yaklaşımı

- Bu bir eğitim deposudur ve kapsamlı otomatik testler içermez
- Manuel test şu noktalara odaklanır:
  - Kod örneklerinin hata vermeden çalışması
  - Dokümantasyondaki bağlantıların doğru çalışması
  - Proje derlemelerinin başarılı tamamlanması
  - Örneklerin en iyi uygulamaları takip etmesi

### Gönderim Öncesi Kontroller

- package.json içeren dizinlerde `npm run lint` komutunu çalıştırın
- Markdown bağlantılarının geçerliliğini doğrulayın
- Kod örneklerini tarayıcıda veya Node.js'te test edin
- Çevirilerin yapısal bütünlüğünü kontrol edin

## Kod Stili Kuralları

### JavaScript

- Modern ES6+ sözdizimi kullanın
- Projelerde verilen standart ESLint yapılandırmalarına uyun
- Eğitsel açıklık için anlamlı değişken ve fonksiyon isimleri kullanın
- Öğrenenler için kavramları açıklayan yorumlar ekleyin
- Yapılandırılmış Prettier ile biçimlendirin

### HTML/CSS

- Anlamsal HTML5 öğeleri
- Duyarlı tasarım prensipleri
- Açık sınıf isimlendirme kuralları
- Öğrenenler için CSS tekniklerini açıklayan yorumlar

### Python

- PEP 8 stil kuralları
- Açık, eğitim amaçlı kod örnekleri
- Öğrenim için faydalı ise tip ipuçları

### Markdown Dokümantasyonu

- Net başlık hiyerarşisi
- Dil belirtilmiş kod blokları
- Ek kaynaklara bağlantılar
- `images/` klasörlerindeki ekran görüntüleri ve resimler
- Erişilebilirlik için görsellerde alt metin

### Dosya Organizasyonu

- Dersler numaralandırılmış sırasıyla (1-getting-started-lessons, 2-js-basics, vb.)
- Her projenin `solution/` ve genellikle `start/` veya `your-work/` dizinleri var
- Resimler derslere özel `images/` klasörlerinde tutulur
- Çeviriler `translations/{language-code}/` yapısında

## Derleme ve Dağıtım

### Quiz Uygulaması Dağıtımı (Azure Static Web Apps)

quiz-app, Azure Static Web Apps dağıtımı için yapılandırılmıştır:

```bash
cd quiz-app
npm run build      # dist/ klasörü oluşturur
# main dalına push yapıldığında GitHub Actions iş akışı ile dağıtımı gerçekleştirir
```

Azure Static Web Apps yapılandırması:
- **Uygulama konumu**: `/quiz-app`
- **Çıktı konumu**: `dist`
- **İş akışı**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokümantasyon PDF Oluşturma

```bash
npm install                    # docsify-to-pdf yükle
npm run convert               # Docs'dan PDF oluştur
```

### Docsify Dokümantasyonu

```bash
npm install -g docsify-cli    # Docsify'ı global olarak yükleyin
docsify serve                 # localhost:3000 üzerinde hizmet verin
```

### Proje Bazlı Derlemeler

Her proje dizininin kendi derleme süreci olabilir:
- Vue projeleri: `npm run build` ile üretim paketleri oluşturur
- Statik projeler: Derleme adımı yok, dosyalar doğrudan sunulur

## Pull Request Kuralları

### Başlık Formatı

Değişiklik alanını belirten net, açıklayıcı başlıklar kullanın:
- `[Quiz-app] Ders X için yeni quiz ekle`
- `[Lesson-3] Terrarium projesinde yazım hatasını düzelt`
- `[Translation] Ders 5 için İspanyolca çeviri ekle`
- `[Docs] Kurulum talimatlarını güncelle`

### Gereken Kontroller

PR göndermeden önce:

1. **Kod Kalitesi**:
   - Etkilenen proje dizinlerinde `npm run lint`i çalıştırın
   - Tüm lint hatalarını ve uyarılarını düzeltin

2. **Derleme Doğrulaması**:
   - Geçerliyse `npm run build` komutunu çalıştırın
   - Derleme hatası olmadığından emin olun

3. **Bağlantı Kontrolü**:
   - Tüm markdown bağlantılarını test edin
   - Resim referanslarının çalıştığını doğrulayın

4. **İçerik İncelemesi**:
   - Yazım ve dilbilgisi kontrolü yapın
   - Kod örneklerinin doğru ve eğitsel olduğundan emin olun
   - Çevirilerin orijinal anlamı koruduğunu onaylayın

### Katkı Koşulları

- Microsoft CLA onaylayın (ilk PR’de otomatik kontrol)
- [Microsoft Açık Kaynak Davranış Kuralları](https://opensource.microsoft.com/codeofconduct/)na uyun
- Ayrıntılı kurallar için [CONTRIBUTING.md](./CONTRIBUTING.md) dosyasına bakın
- Gerekirse PR açıklamasına ilgili issue numaralarını ekleyin

### İnceleme Süreci

- PR’lar bakımcılar ve topluluk tarafından incelenir
- Eğitsel açıklık önceliklidir
- Kod örnekleri güncel en iyi uygulamalara uygun olmalıdır
- Çeviriler doğruluk ve kültürel uygunluk açısından değerlendirilir

## Çeviri Sistemi

### Otomatik Çeviri

- co-op-translator iş akışı ile GitHub Actions kullanılır
- 50+ dile otomatik çeviri yapılır
- Kaynak dosyalar ana dizinlerde
- Çevirilen dosyalar `translations/{language-code}/` dizinlerinde

### Manuel Çeviri İyileştirmeleri Ekleme

1. `translations/{language-code}/` dizininde dosyayı bulun
2. Yapıyı koruyarak iyileştirmeler yapın
3. Kod örneklerinin işlevselliğinin devam ettiğinden emin olun
4. Yerelleştirilmiş quiz içeriğini test edin

### Çeviri Meta Verileri

Çevrilmiş dosyalarda meta veri başlığı bulunur:
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
- `node_modules` ve `package-lock.json` dosyalarını silip `npm install` çalıştırın
- Port çakışmalarını kontrol edin (varsayılan: Vite port 5173 kullanır)

**API sunucusu başlamıyor**:
- Node.js sürümünün minimum gereksinimi karşıladığını doğrulayın (node >=10)
- Portun başka bir uygulama tarafından kullanılmadığını kontrol edin
- Tüm bağımlılıkların `npm install` ile yüklendiğinden emin olun

**Tarayıcı uzantısı yüklenmiyor**:
- manifest.json dosyasının doğru biçimlendirildiğini doğrulayın
- Tarayıcı konsolundaki hataları kontrol edin
- Tarayıcıya özgü uzantı yükleme talimatlarını takip edin

**Python sohbet projesi sorunları**:
- OpenAI paketin yüklü olduğundan emin olun: `pip install openai`
- GITHUB_TOKEN ortam değişkeninin ayarlı olduğundan emin olun
- GitHub Modelleri erişim izinlerini kontrol edin

**Docsify dokümantasyonu sunmuyor**:
- docsify-cli küresel olarak yüklü mü kontrol edin: `npm install -g docsify-cli`
- Depo kök dizininden çalıştırın
- `docs/_sidebar.md` dosyasının varlığını kontrol edin

### Geliştirme Ortamı İpuçları

- HTML projeleri için VS Code Live Server uzantısını kullanın
- Tutarlı biçimlendirme için ESLint ve Prettier uzantılarını yükleyin
- JavaScript hata ayıklaması için tarayıcı Geliştirici Araçlarını kullanın
- Vue projeleri için Vue DevTools tarayıcı uzantısını yükleyin

### Performans Dikkat Edilmesi Gerekenler

- Çok sayıda (50+ dil) çevrilmiş dosya olması tam klonlamada büyük boyut anlamına gelir
- Sadece içerik üzerinde çalışıyorsanız derinliği 1 olan klon kullanın: `git clone --depth 1`
- İngilizce içerikle çalışırken çevirileri aramalardan hariç tutun
- İlk kurulumlarda (npm install, Vite build) derlemeler yavaş olabilir

## Güvenlik Dikkat Edilmesi Gerekenler

### Ortam Değişkenleri

- API anahtarları asla depoya commit edilmemelidir
- `.env` dosyaları kullanılır (zaten `.gitignore`da)
- Gerekli ortam değişkenleri proje README dosyalarında belgelenir

### Python Projeleri

- Sanal ortamlar kullanın: `python -m venv venv`
- Bağımlılıkları güncel tutun
- GitHub tokenları minimum gerekli izinlere sahip olmalıdır

### GitHub Modellerine Erişim

- GitHub Modelleri için Kişisel Erişim Tokenları (PAT) gerekir
- Tokenlar ortam değişkeni olarak saklanmalıdır
- Token veya kimlik bilgileri commit edilmemelidir

## Ek Notlar

### Hedef Kitle

- Web geliştirmeye tamamen yeni başlayanlar
- Öğrenciler ve kendi kendine öğrenenler
- Müfredatı sınıflarında kullanan öğretmenler
- İçerik erişilebilirlik ve aşamalı beceri geliştirmeye uygun olarak tasarlanmıştır

### Eğitim Felsefesi

- Proje tabanlı öğrenme yaklaşımı
- Sık sık bilgi değerlendirmeleri (quizler)
- Uygulamalı kodlama alıştırmaları
- Gerçek dünya uygulama örnekleri
- Öncelikle temel teorilere odaklanma, sonra frameworkler

### Depo Bakımı

- Aktif öğrenenler ve katkı sağlıyan topluluk
- Bağımlılıklar ve içerikte düzenli güncellemeler
- Bakımcılar tarafından izlenen issue ve tartışmalar
- Çeviri güncellemeleri GitHub Actions ile otomatik

### İlgili Kaynaklar

- [Microsoft Learn modülleri](https://docs.microsoft.com/learn/)
- [Öğrenci Merkezi kaynakları](https://docs.microsoft.com/learn/student-hub/)
- Öğrenenler için önerilen [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- Ek kurslar: Üretken AI, Veri Bilimi, ML, IoT müfredatları mevcut

### Belirli Projelerle Çalışma

Aşağıdaki README dosyalarında bireysel projelere yönelik detaylı talimatlar vardır:
- `quiz-app/README.md` - Vue 3 quiz uygulaması
- `7-bank-project/README.md` - Kimlik doğrulamalı bankacılık uygulaması
- `5-browser-extension/README.md` - Tarayıcı uzantısı geliştirme
- `6-space-game/README.md` - Canvas tabanlı oyun geliştirme
- `9-chat-project/README.md` - AI sohbet asistanı projesi

### Monorepo Yapısı

Geleneksel bir monorepo olmasa da, bu depo birden çok bağımsız proje içerir:
- Her ders kendi içinde bağımsızdır
- Projeler bağımlılık paylaşmaz
- Projelerde çalışırken diğer projeleri etkilemezsiniz
- Tüm müfredat deneyimi için depo tamamen klonlanabilir

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Feragatname**:
Bu belge, AI çeviri servisi [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Orijinal belgenin kendi dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımı nedeniyle ortaya çıkabilecek yanlış anlamalar veya yorum hatalarından sorumlu tutulamayız.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->