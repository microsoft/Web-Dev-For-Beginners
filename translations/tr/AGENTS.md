# AGENTS.md

## Proje Genel Bakış

Bu, web geliştirme temellerini yeni başlayanlara öğretmek için hazırlanmış bir eğitim müfredatı deposudur. Müfredat, Microsoft Cloud Advocates tarafından geliştirilen ve JavaScript, CSS ve HTML konularını kapsayan 24 uygulamalı ders içeren kapsamlı bir 12 haftalık kurstur.

### Ana Bileşenler

- **Eğitim İçeriği**: Proje tabanlı modüller halinde düzenlenmiş 24 yapılandırılmış ders
- **Uygulamalı Projeler**: Terrarium, Yazı Oyunu, Tarayıcı Uzantısı, Uzay Oyunu, Bankacılık Uygulaması, Kod Editörü ve Yapay Zeka Sohbet Asistanı
- **Etkileşimli Testler**: Her biri 3 sorudan oluşan 48 test (ders öncesi/sonrası değerlendirmeler)
- **Çok Dilli Destek**: GitHub Actions aracılığıyla 50+ dilde otomatik çeviriler
- **Teknolojiler**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projeleri için)

### Mimari

- Ders tabanlı yapılandırılmış eğitim deposu
- Her ders klasörü README, kod örnekleri ve çözümler içerir
- Bağımsız projeler ayrı dizinlerde (quiz-app, çeşitli ders projeleri)
- GitHub Actions (co-op-translator) kullanılarak çeviri sistemi
- Docsify üzerinden sunulan ve PDF olarak erişilebilen belgeler

## Kurulum Komutları

Bu depo öncelikle eğitim içeriği tüketimi için tasarlanmıştır. Belirli projelerle çalışmak için:

### Ana Depo Kurulumu

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz Uygulaması Kurulumu (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### Banka Projesi API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Tarayıcı Uzantısı Projeleri

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Uzay Oyunu Projeleri

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Sohbet Projesi (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Geliştirme İş Akışı

### İçerik Katkıcıları İçin

1. **Depoyu fork edin** GitHub hesabınıza
2. **Fork'unuzu yerel olarak klonlayın**
3. Değişiklikleriniz için **yeni bir dal oluşturun**
4. Ders içeriği veya kod örneklerinde değişiklik yapın
5. İlgili proje dizinlerinde kod değişikliklerini test edin
6. Katkı yönergelerine uygun olarak pull request gönderin

### Öğrenciler İçin

1. Depoyu fork edin veya klonlayın
2. Ders dizinlerine sırasıyla gidin
3. Her ders için README dosyalarını okuyun
4. https://ff-quizzes.netlify.app/web/ adresinde ders öncesi testleri tamamlayın
5. Ders klasörlerindeki kod örneklerini inceleyin
6. Ödevleri ve zorlukları tamamlayın
7. Ders sonrası testleri yapın

### Canlı Geliştirme

- **Belgeler**: Kök dizinde `docsify serve` çalıştırın (port 3000)
- **Quiz Uygulaması**: quiz-app dizininde `npm run dev` çalıştırın
- **Projeler**: HTML projeleri için VS Code Live Server uzantısını kullanın
- **API Projeleri**: İlgili API dizinlerinde `npm start` çalıştırın

## Test Talimatları

### Quiz Uygulaması Testi

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Banka API Testi

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Genel Test Yaklaşımı

- Bu bir eğitim deposudur, kapsamlı otomatik testler içermez
- Manuel testler şunlara odaklanır:
  - Kod örneklerinin hatasız çalışması
  - Belgelerdeki bağlantıların doğru çalışması
  - Proje derlemelerinin başarıyla tamamlanması
  - Örneklerin en iyi uygulamalara uygun olması

### Gönderim Öncesi Kontroller

- `npm run lint` komutunu package.json bulunan dizinlerde çalıştırın
- Markdown bağlantılarının geçerli olduğunu doğrulayın
- Kod örneklerini tarayıcıda veya Node.js'de test edin
- Çevirilerin doğru yapıyı koruduğundan emin olun

## Kod Stili Yönergeleri

### JavaScript

- Modern ES6+ sözdizimini kullanın
- Projelerde sağlanan standart ESLint yapılandırmalarını takip edin
- Eğitim açısından anlamlı değişken ve fonksiyon adları kullanın
- Öğrenciler için kavramları açıklayan yorumlar ekleyin
- Prettier ile formatlama yapın (varsa)

### HTML/CSS

- Semantik HTML5 öğeleri
- Duyarlı tasarım prensipleri
- Açık sınıf adlandırma kuralları
- Öğrenciler için CSS tekniklerini açıklayan yorumlar

### Python

- PEP 8 stil yönergeleri
- Açık ve eğitici kod örnekleri
- Öğrenme açısından faydalı olduğunda tür ipuçları ekleyin

### Markdown Belgeleri

- Açık başlık hiyerarşisi
- Dil belirtimi olan kod blokları
- Ek kaynaklara bağlantılar
- `images/` dizinlerinde ekran görüntüleri ve resimler
- Erişilebilirlik için resimlere alt metin ekleme

### Dosya Organizasyonu

- Dersler sıralı olarak numaralandırılmış (1-getting-started-lessons, 2-js-basics, vb.)
- Her proje genellikle `solution/` ve `start/` veya `your-work/` dizinlerine sahiptir
- Resimler derslere özel `images/` klasörlerinde saklanır
- Çeviriler `translations/{language-code}/` yapısında bulunur

## Derleme ve Dağıtım

### Quiz Uygulaması Dağıtımı (Azure Static Web Apps)

Quiz-app, Azure Static Web Apps dağıtımı için yapılandırılmıştır:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Azure Static Web Apps yapılandırması:
- **Uygulama konumu**: `/quiz-app`
- **Çıktı konumu**: `dist`
- **İş akışı**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### PDF Belgeleri Oluşturma

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Docsify Belgeleri

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Proje Özel Derlemeler

Her proje dizini kendi derleme sürecine sahip olabilir:
- Vue projeleri: `npm run build` üretim paketleri oluşturur
- Statik projeler: Derleme adımı yok, dosyaları doğrudan sunun

## Pull Request Yönergeleri

### Başlık Formatı

Değişiklik alanını belirten açık ve açıklayıcı başlıklar kullanın:
- `[Quiz-app] Ders X için yeni test ekle`
- `[Lesson-3] Terrarium projesinde yazım hatasını düzelt`
- `[Translation] Ders 5 için İspanyolca çeviri ekle`
- `[Docs] Kurulum talimatlarını güncelle`

### Gerekli Kontroller

PR göndermeden önce:

1. **Kod Kalitesi**:
   - İlgili proje dizinlerinde `npm run lint` çalıştırın
   - Tüm lint hatalarını ve uyarılarını düzeltin

2. **Derleme Doğrulaması**:
   - Uygulanabilir ise `npm run build` çalıştırın
   - Derleme hatası olmadığından emin olun

3. **Bağlantı Doğrulaması**:
   - Tüm markdown bağlantılarını test edin
   - Resim referanslarının çalıştığını doğrulayın

4. **İçerik İncelemesi**:
   - Yazım ve dilbilgisi hatalarını kontrol edin
   - Kod örneklerinin doğru ve eğitici olduğundan emin olun
   - Çevirilerin orijinal anlamı koruduğunu doğrulayın

### Katkı Gereksinimleri

- Microsoft CLA'yı kabul edin (ilk PR'de otomatik kontrol)
- [Microsoft Açık Kaynak Davranış Kuralları](https://opensource.microsoft.com/codeofconduct/) yönergelerine uyun
- Ayrıntılı yönergeler için [CONTRIBUTING.md](./CONTRIBUTING.md) dosyasına bakın
- Uygulanabilir ise PR açıklamasında sorun numaralarına referans verin

### İnceleme Süreci

- PR'ler bakımcılar ve topluluk tarafından incelenir
- Eğitim netliği önceliklidir
- Kod örnekleri güncel en iyi uygulamalara uygun olmalıdır
- Çeviriler doğruluk ve kültürel uygunluk açısından incelenir

## Çeviri Sistemi

### Otomatik Çeviri

- GitHub Actions ile co-op-translator iş akışı kullanır
- 50+ dile otomatik çeviri yapar
- Ana dizinlerdeki kaynak dosyalar
- Çevrilmiş dosyalar `translations/{language-code}/` dizinlerinde

### Manuel Çeviri İyileştirmeleri Eklemek

1. Dosyayı `translations/{language-code}/` içinde bulun
2. Yapıyı koruyarak iyileştirmeler yapın
3. Kod örneklerinin çalışır durumda kaldığından emin olun
4. Yerelleştirilmiş test içeriğini test edin

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

**Quiz uygulaması başlatılamıyor**:
- Node.js sürümünü kontrol edin (v14+ önerilir)
- `node_modules` ve `package-lock.json` silin, ardından `npm install` çalıştırın
- Port çakışmalarını kontrol edin (varsayılan: Vite port 5173 kullanır)

**API sunucusu başlatılamıyor**:
- Node.js sürümünün minimum gereksinimi karşıladığını doğrulayın (node >=10)
- Portun zaten kullanımda olup olmadığını kontrol edin
- `npm install` ile tüm bağımlılıkların yüklendiğinden emin olun

**Tarayıcı uzantısı yüklenmiyor**:
- manifest.json dosyasının doğru biçimlendirildiğini doğrulayın
- Tarayıcı konsolunda hataları kontrol edin
- Tarayıcıya özel uzantı yükleme talimatlarını takip edin

**Python sohbet projesi sorunları**:
- OpenAI paketinin yüklü olduğundan emin olun: `pip install openai`
- GITHUB_TOKEN ortam değişkeninin ayarlandığını doğrulayın
- GitHub Modelleri erişim izinlerini kontrol edin

**Docsify belgeleri sunmuyor**:
- docsify-cli'yi global olarak yükleyin: `npm install -g docsify-cli`
- Depo kök dizininden çalıştırın
- `docs/_sidebar.md` dosyasının mevcut olduğundan emin olun

### Geliştirme Ortamı İpuçları

- HTML projeleri için VS Code Live Server uzantısını kullanın
- Tutarlı formatlama için ESLint ve Prettier uzantılarını yükleyin
- JavaScript hata ayıklama için tarayıcı Geliştirici Araçlarını kullanın
- Vue projeleri için Vue DevTools tarayıcı uzantısını yükleyin

### Performans Dikkatleri

- Çevrilmiş dosyaların çokluğu (50+ dil) nedeniyle tam klonlar büyük olabilir
- Sadece içerik üzerinde çalışıyorsanız sığ klon kullanın: `git clone --depth 1`
- İngilizce içerik üzerinde çalışırken çevirileri aramalardan hariç tutun
- İlk çalıştırmada derleme süreçleri yavaş olabilir (npm install, Vite build)

## Güvenlik Dikkatleri

### Ortam Değişkenleri

- API anahtarları asla depoya eklenmemelidir
- `.env` dosyalarını kullanın (zaten `.gitignore` içinde)
- Gerekli ortam değişkenlerini proje README dosyalarında belgeleyin

### Python Projeleri

- Sanal ortamlar kullanın: `python -m venv venv`
- Bağımlılıkları güncel tutun
- GitHub token'ları minimum gerekli izinlere sahip olmalıdır

### GitHub Modelleri Erişimi

- GitHub Modelleri için Kişisel Erişim Token'ları (PAT) gereklidir
- Token'lar ortam değişkenleri olarak saklanmalıdır
- Token'ları veya kimlik bilgilerini asla depoya eklemeyin

## Ek Notlar

### Hedef Kitle

- Web geliştirmeye tamamen yeni başlayanlar
- Öğrenciler ve kendi kendine öğrenenler
- Müfredatı sınıflarda kullanan öğretmenler
- İçerik erişilebilirlik ve kademeli beceri geliştirme için tasarlanmıştır

### Eğitim Felsefesi

- Proje tabanlı öğrenme yaklaşımı
- Sık bilgi kontrolleri (testler)
- Uygulamalı kodlama alıştırmaları
- Gerçek dünya uygulama örnekleri
- Çerçevelerden önce temellere odaklanma

### Depo Bakımı

- Öğrenciler ve katkıcılar tarafından aktif bir topluluk
- Bağımlılıkların ve içeriğin düzenli güncellenmesi
- Sorunlar ve tartışmalar bakımcılar tarafından izlenir
- Çeviri güncellemeleri GitHub Actions ile otomatikleştirilir

### İlgili Kaynaklar

- [Microsoft Learn modülleri](https://docs.microsoft.com/learn/)
- [Öğrenci Merkezi kaynakları](https://docs.microsoft.com/learn/student-hub/)
- Öğrenciler için [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) önerilir
- Ek kurslar: Üretken AI, Veri Bilimi, ML, IoT müfredatları mevcut

### Belirli Projelerle Çalışma

Bireysel projelerle ilgili ayrıntılı talimatlar için şu README dosyalarına bakın:
- `quiz-app/README.md` - Vue 3 quiz uygulaması
- `7-bank-project/README.md` - Kimlik doğrulamalı bankacılık uygulaması
- `5-browser-extension/README.md` - Tarayıcı uzantısı geliştirme
- `6-space-game/README.md` - Canvas tabanlı oyun geliştirme
- `9-chat-project/README.md` - AI sohbet asistanı projesi

### Monorepo Yapısı

Geleneksel bir monorepo olmasa da, bu depo birden fazla bağımsız proje içerir:
- Her ders kendi içinde bağımsızdır
- Projeler bağımlılıkları paylaşmaz
- Bireysel projeler üzerinde çalışırken diğerlerini etkilemez
- Tam müfredat deneyimi için tüm depoyu klonlayın

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.