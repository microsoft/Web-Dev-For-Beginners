# AGENTS.md

## Proje Genel Bakış

Bu, web geliştirme temellerini yeni başlayanlara öğretmek için hazırlanmış eğitim amaçlı bir müfredat deposudur. Müfredat, Microsoft Cloud Advocates tarafından geliştirilen kapsamlı bir 12 haftalık kurstur ve JavaScript, CSS ve HTML'i kapsayan 24 uygulamalı ders içerir.

### Ana Bileşenler

- **Eğitim İçeriği**: Proje tabanlı modüllere düzenlenmiş 24 yapılandırılmış ders
- **Pratik Projeler**: Terrarium, Yazma Oyunu, Tarayıcı Uzantısı, Uzay Oyunu, Banka Uygulaması, Kod Editörü ve AI Sohbet Asistanı
- **Etkileşimli Quizler**: Her biri 3 sorudan oluşan 48 quiz (ders öncesi/sonrası değerlendirmeler)
- **Çoklu Dil Desteği**: GitHub Actions ile 50+ dilde otomatik çeviri
- **Teknolojiler**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projeleri için)

### Mimari

- Ders tabanlı yapıya sahip eğitim deposu
- Her ders klasörü README, kod örnekleri ve çözümler içerir
- Ayrı dizinlerde bağımsız projeler (quiz-app, çeşitli ders projeleri)
- GitHub Actions kullanan çeviri sistemi (co-op-translator)
- Docsify ile sunulan ve PDF olarak erişilebilir dokümantasyon

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
npm run format     # Prettier ile biçimlendir
```

### Tarayıcı Uzantısı Projeleri

```bash
cd 5-browser-extension/solution
npm install
# Tarayıcıya özgü uzantı yükleme talimatlarını izleyin
```

### Uzay Oyunu Projeleri

```bash
cd 6-space-game/solution
npm install
# index.html dosyasını tarayıcıda açın veya Canlı Sunucu kullanın
```

### Sohbet Projesi (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN ortam değişkenini ayarla
python api.py
```

## Geliştirme İş Akışı

### İçerik Katkıcıları İçin

1. Depoyu GitHub hesabınıza **forklayın**
2. Forkunuzu yerel olarak **klonlayın**
3. Değişiklikleriniz için yeni bir **branch oluşturun**
4. Ders içeriği veya kod örneklerinde değişiklik yapın
5. İlgili proje dizinlerinde kod değişikliklerini test edin
6. Katkı rehberine uygun şekilde pull request gönderin

### Öğrenenler İçin

1. Depoyu forklayın veya klonlayın
2. Ders dizinlerinde sırasıyla gezin
3. Her ders için README dosyalarını okuyun
4. https://ff-quizzes.netlify.app/web/ adresindeki ders öncesi quizleri tamamlayın
5. Ders klasörlerindeki kod örnekleri üzerinde çalışın
6. Ödevleri ve zorlukları tamamlayın
7. Ders sonrası quizlere katılın

### Canlı Geliştirme

- **Dokümantasyon**: Kök dizinde `docsify serve` komutunu çalıştırın (port 3000)
- **Quiz Uygulaması**: quiz-app dizininde `npm run dev` çalıştırın
- **Projeler**: HTML projeleri için VS Code Live Server eklentisini kullanın
- **API Projeleri**: İlgili API dizinlerinde `npm start` çalıştırın

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
npm run lint       # Kod stili sorunlarını kontrol edin
node server.js     # Sunucunun hatasız başlamasını doğrulayın
```

### Genel Test Yaklaşımı

- Bu bir eğitim deposudur ve kapsamlı otomatik test içermez
- Manuel testler şunlara odaklanır:
  - Kod örnekleri hatasız çalışıyor
  - Dokümantasyondaki bağlantılar doğru çalışıyor
  - Proje derlemeleri başarılı tamamlanıyor
  - Örnekler en iyi uygulamalara uygun

### Gönderim Öncesi Kontroller

- package.json içeren dizinlerde `npm run lint` çalıştırın
- Markdown bağlantılarının geçerli olduğunu doğrulayın
- Kod örneklerini tarayıcı veya Node.js'de test edin
- Çevirilerin yapı olarak doğru kaldığını kontrol edin

## Kod Stili Yönergeleri

### JavaScript

- Modern ES6+ sözdizimini kullanın
- Projelerde sağlanan standart ESLint yapılandırmalarını izleyin
- Eğitim için anlaşılır değişken ve fonksiyon isimleri kullanın
- Öğrenenler için kavramları açıklayan yorumlar ekleyin
- Konfigüre edilmişse Prettier ile biçimlendirin

### HTML/CSS

- Semantik HTML5 öğeleri kullanın
- Duyarlı tasarım prensipleri uygulayın
- Açık sınıf isimlendirme kuralları kullanın
- CSS tekniklerini öğrencilere açıklayan yorumlar ekleyin

### Python

- PEP 8 stil rehberini takip edin
- Açık ve eğitim odaklı kod örnekleri oluşturun
- Öğrenme için faydalı olduğunda tip ipuçları ekleyin

### Markdown Dokümantasyon

- Açık başlık hiyerarşisi
- Dil belirtmeli kod blokları
- Ek kaynaklara bağlantılar
- `images/` dizinlerinde ekran görüntüleri ve görseller
- Erişilebilirlik için resimlerde alt metin

### Dosya Organizasyonu

- Dersler sıralı numaralanmış (1-getting-started-lessons, 2-js-basics vb.)
- Her projenin `solution/` ve genellikle `start/` veya `your-work/` dizinleri var
- Görseller ders bazlı `images/` klasörlerinde depolanır
- Çeviriler `translations/{language-code}/` yapısında

## Derleme ve Yayınlama

### Quiz Uygulaması Yayını (Azure Static Web Apps)

Quiz-app, Azure Static Web Apps yayını için ayarlanmıştır:

```bash
cd quiz-app
npm run build      # dist/ klasörü oluşturur
# main dalına push yapıldığında GitHub Actions iş akışı ile dağıtımı yapar
```

Azure Static Web Apps yapılandırması:
- **Uygulama konumu**: `/quiz-app`
- **Çıktı konumu**: `dist`
- **İş akışı**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokümantasyon PDF Oluşturma

```bash
npm install                    # docsify-to-pdf yükle
npm run convert               # docs'tan PDF oluştur
```

### Docsify Dokümantasyonu

```bash
npm install -g docsify-cli    # Docsify'i global olarak kur
docsify serve                 # localhost:3000 üzerinde sun
```

### Proje Bazlı Derlemeler

Her proje dizininin kendi derleme süreci olabilir:
- Vue projeleri: `npm run build` üretim paketleri oluşturur
- Statik projeler: Derleme adımı yok, dosyalar direkt sunulur

## Pull Request İlkeleri

### Başlık Formatı

Değişiklik alanını açıkça belirten açıklayıcı başlıklar kullanın:
- `[Quiz-app] Ders X için yeni quiz ekle`
- `[Lesson-3] Terrarium projesindeki yazım hatasını düzelt`
- `[Translation] Ders 5 için İspanyolca çeviri ekle`
- `[Docs] Kurulum talimatlarını güncelle`

### Gereken Kontroller

PR göndermeden önce:

1. **Kod Kalitesi**:
   - Etkilenen proje dizinlerinde `npm run lint` komutunu çalıştırın
   - Tüm lint hatalarını ve uyarıları giderin

2. **Derleme Doğrulama**:
   - Geçerliyse `npm run build` çalıştırın
   - Derleme hatası olmadığından emin olun

3. **Bağlantı Geçerliliği**:
   - Tüm markdown bağlantıları test edin
   - Resim referanslarının çalıştığından emin olun

4. **İçerik İncelemesi**:
   - Yazım ve dilbilgisi kontrolü yapın
   - Kod örneklerinin doğru ve eğitici olduğundan emin olun
   - Çevirilerin orijinal anlamı koruduğunu doğrulayın

### Katkı Gereksinimleri

- Microsoft CLA’yı onaylayın (ilk PR’da otomatik kontrol)
- [Microsoft Açık Kaynak Davranış Kuralları](https://opensource.microsoft.com/codeofconduct/) izleyin
- Detaylı rehber için [CONTRIBUTING.md](./CONTRIBUTING.md)’yi inceleyin
- İlgili ise PR açıklamasında issue numaralarını referans gösterin

### İnceleme Süreci

- PR’lar bakımcılar ve topluluk tarafından incelenir
- Eğitimsel netlik önceliklidir
- Kod örnekleri mevcut en iyi uygulamalara uygun olmalı
- Çeviriler doğruluk ve kültürel uygunluk açısından gözden geçirilir

## Çeviri Sistemi

### Otomatik Çeviri

- co-op-translator iş akışıyla GitHub Actions kullanılır
- 50’den fazla dile otomatik çeviri yapılır
- Ana dizinlerde kaynak dosyalar
- Çevrilmiş dosyalar `translations/{language-code}/` dizinlerinde

### Elle Çeviri İyileştirmeleri Ekleme

1. `translations/{language-code}/` altında dosyayı bulun
2. Yapıyı koruyarak iyileştirmeler yapın
3. Kod örneklerinin çalışırlığını sağlayın
4. Yerelleştirilmiş quiz içeriğini test edin

### Çeviri Meta Verisi

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

**Quiz uygulaması başlatılamıyor**:
- Node.js sürümünü kontrol edin (v14+ önerilir)
- `node_modules` ve `package-lock.json` dosyalarını silin, `npm install` tekrar çalıştırın
- Port çakışmalarını kontrol edin (varsayılan: Vite portu 5173)

**API sunucusu başlatılamıyor**:
- Node.js sürümünün minimum (node >=10) olduğundan emin olun
- Portun kullanımda olup olmadığını kontrol edin
- Tüm bağımlılıkların `npm install` ile yüklendiğinden emin olun

**Tarayıcı uzantısı yüklenmiyor**:
- manifest.json dosyasının düzgün formatlandığını doğrulayın
- Tarayıcı konsolundaki hataları inceleyin
- Tarayıcıya özgü uzantı kurulum talimatlarını izleyin

**Python sohbet projesi sorunları**:
- OpenAI paketi kurulu olmalı: `pip install openai`
- GITHUB_TOKEN ortam değişkeninin ayarlı olduğundan emin olun
- GitHub Modellerine erişim izinlerini kontrol edin

**Docsify dokümantasyon sunmuyor**:
- docsify-cli global kurulumu yapın: `npm install -g docsify-cli`
- Depo kök dizininde çalıştırın
- `docs/_sidebar.md` varlığını doğrulayın

### Geliştirme Ortamı İpuçları

- HTML projeleri için VS Code Live Server eklentisini kullanın
- Tutarlı biçimlendirme için ESLint ve Prettier eklentilerini kurun
- JavaScript hatalarını tarayıcı geliştirici araçlarında ayıklayın
- Vue projeleri için Vue DevTools tarayıcı uzantısını kurun

### Performans Dikkatleri

- Çok sayıda çevrilmiş dosya (50+ dil) tam klonları büyük yapar
- Sadece içerikle çalışılıyorsa sığ klon kullanın: `git clone --depth 1`
- İngilizce içerikle çalışırken çevirileri aramalardan hariç tutun
- İlk çalıştırmada derleme süreçleri yavaş olabilir (npm install, Vite build)

## Güvenlik Dikkatleri

### Ortam Değişkenleri

- API anahtarları depoya asla eklenmemeli
- `.env` dosyaları kullanılmalı (zaten `.gitignore`’da)
- Gerekli ortam değişkenleri proje README dosyalarında belgelenmeli

### Python Projeleri

- Sanal ortam kullanın: `python -m venv venv`
- Bağımlılıkları güncel tutun
- GitHub tokenları en düşük gerekli izinlere sahip olmalı

### GitHub Modellerine Erişim

- Kişisel Erişim Tokenları (PAT) gerekiyor
- Tokenlar ortam değişkeni olarak saklanmalı
- Token veya kimlik bilgileri asla commitlememeli

## Ek Notlar

### Hedef Kitle

- Web geliştirmeye yeni başlayanlar
- Öğrenciler ve kendi kendine öğrenenler
- Müfredatı sınıf ortamında kullanan eğitmenler
- İçerik erişilebilirlik ve aşamalı beceri geliştirme için tasarlanmıştır

### Eğitim Felsefesi

- Proje tabanlı öğrenme yaklaşımı
- Sık sık bilgi kontrolü (quizler)
- Uygulamalı kodlama egzersizleri
- Gerçek dünya uygulama örnekleri
- Frameworklerden önce temellere odaklanma

### Depo Bakımı

- Aktif öğrenenler ve katkıcılar topluluğu
- Bağımlılık ve içerik düzenli güncelleniyor
- Sorunlar ve tartışmalar bakımcılar tarafından izlenir
- Çeviri güncellemeleri GitHub Actions ile otomatik

### İlgili Kaynaklar

- [Microsoft Learn modülleri](https://docs.microsoft.com/learn/)
- [Öğrenci Merkezi kaynakları](https://docs.microsoft.com/learn/student-hub/)
- Öğrenenler için önerilen [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- Ek kurslar: Üretken AI, Veri Bilimi, ML, IoT müfredatları mevcut

### Belirli Projelerle Çalışma

Bireysel projelere dair detaylı talimat için README dosyalarını inceleyin:
- `quiz-app/README.md` - Vue 3 quiz uygulaması
- `7-bank-project/README.md` - Kimlik doğrulamalı banka uygulaması
- `5-browser-extension/README.md` - Tarayıcı uzantısı geliştirme
- `6-space-game/README.md` - Canvas tabanlı oyun geliştirme
- `9-chat-project/README.md` - AI sohbet asistanı projesi

### Monorepo Yapısı

Geleneksel bir monorepo olmasa da bu depo çoklu bağımsız projeler içerir:
- Her ders kendi içinde bağımsızdır
- Projeler bağımlılıkları paylaşmaz
- Projelere diğerlerini etkilemeden çalışılabilir
- Tam müfredat deneyimi için tüm depo klonlanabilir

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba gösterilmekle birlikte, otomatik çevirilerin hatalar veya yanlışlıklar içerebileceğini lütfen unutmayın. Orijinal belge, kendi ana dilinde yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımı nedeniyle ortaya çıkabilecek herhangi bir yanlış anlama veya yanlış yorumdan sorumlu değiliz.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->