# AGENTS.md

## Proje Genel Bakışı

Bu, başlangıç seviyesindekilere web geliştirme temellerini öğretmek için hazırlanmış bir eğitim müfredatı deposudur. Müfredat, Microsoft Cloud Advocates tarafından geliştirilen kapsamlı 12 haftalık bir ders programıdır ve JavaScript, CSS ve HTML'i kapsayan 24 uygulamalı dersten oluşmaktadır.

### Temel Bileşenler

- **Eğitim İçeriği**: Proje tabanlı modüllere organize edilmiş 24 yapılandırılmış ders
- **Pratik Projeler**: Terrarium, Yazma Oyunu, Tarayıcı Uzantısı, Uzay Oyunu, Bankacılık Uygulaması, Kod Editörü ve AI Sohbet Asistanı
- **Etkileşimli Quizler**: Her biri 3 soruluk 48 quiz (ders öncesi/sonrası değerlendirmeler)
- **Çok Dilli Destek**: GitHub Actions ile 50+ dile otomatik çeviriler
- **Teknolojiler**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projeleri için)

### Mimari

- Ders bazlı yapıya sahip eğitim deposu
- Her ders klasöründe README, kod örnekleri ve çözümler bulunur
- Bağımsız projeler ayrı dizinlerde (quiz-app, çeşitli ders projeleri)
- GitHub Actions (co-op-translator) ile çeviri sistemi
- Docsify ile sunulan dokümantasyon ve PDF olarak erişilebilir

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
npm run lint       # ESLint'i çalıştır
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
# index.html dosyasını tarayıcıda açın veya Canlı Sunucu kullanın
```

### Sohbet Projesi (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN ortam değişkenini ayarlayın
python api.py
```

## Geliştirme İş Akışı

### İçerik Katkıda Bulunanlar İçin

1. Depoyu GitHub hesabınıza **fork edin**
2. Fork'unuzu lokal olarak **klonlayın**
3. Değişiklikleriniz için yeni bir **branch oluşturun**
4. Ders içeriği veya kod örneklerinde değişiklik yapın
5. İlgili proje dizinlerinde kod değişikliklerini test edin
6. Katkı kurallarına uygun şekilde pull request gönderin

### Öğrenenler İçin

1. Depoyu fork edin ya da klonlayın
2. Ders dizinlerinde sırasıyla ilerleyin
3. Her ders için README dosyalarını okuyun
4. Ders öncesi quizlerini https://ff-quizzes.netlify.app/web/ adresinde tamamlayın
5. Ders klasörlerindeki kod örnekleri üzerinde çalışın
6. Ödevleri ve zorlukları tamamlayın
7. Ders sonrası quizlerini çözün

### Canlı Geliştirme

- **Dokümantasyon**: Root dizinde `docsify serve` çalıştırın (port 3000)
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
npm run lint       # Kod stili sorunlarını kontrol et
node server.js     # Sunucunun hatasız başlatıldığını doğrula
```

### Genel Test Yaklaşımı

- Bu depo kapsamlı otomatik testler içermez
- Manuel test odakları:
  - Kod örnekleri hatasız çalışmalı
  - Dokümantasyon linkleri doğru çalışmalı
  - Proje derlemeleri başarılı olmalı
  - Örnekler en iyi uygulamaları takip etmeli

### Gönderim Öncesi Kontroller

- package.json içeren dizinlerde `npm run lint` çalıştırın
- Markdown linklerinin geçerli olduğunu doğrulayın
- Kod örneklerini tarayıcı veya Node.js’de test edin
- Çevirilerin yapısal bütünlüğü korunduğundan emin olun

## Kod Stili Yönergeleri

### JavaScript

- Modern ES6+ sözdizimi kullanın
- Projelerde verilen standart ESLint yapılandırmalarına uyun
- Eğitim amaçlı anlamlı değişken ve fonksiyon isimleri tercih edin
- Kavramları açıklayan yorumlar ekleyin
- Prettier ile biçimlendirin (konfigüre edilen yerlerde)

### HTML/CSS

- Semantik HTML5 elementleri
- Responsive tasarım ilkeleri
- Anlaşılır sınıf isimlendirmeleri
- Öğrenenler için CSS tekniklerini açıklayan yorumlar

### Python

- PEP 8 stil kuralları
- Açık ve eğitim odaklı kod örnekleri
- Öğrenimi kolaylaştırmak için tip ipuçları

### Markdown Dokümantasyon

- Net başlık hiyerarşisi
- Dil belirtilmiş kod blokları
- Ek kaynaklara yönlendiren linkler
- `images/` klasöründe ekran görüntüleri ve görseller
- Erişilebilirlik için resimler alt metinleri

### Dosya Organizasyonu

- Dersler numaralandırılmış (1-getting-started-lessons, 2-js-basics, vb.)
- Her projenin `solution/` ve genellikle `start/` veya `your-work/` dizinleri var
- Derslere özgü `images/` klasörlerinde görseller saklanır
- Çeviriler `translations/{language-code}/` dizin yapısında

## Derleme ve Yayınlama

### Quiz Uygulaması Yayınlama (Azure Static Web Apps)

Quiz-app, Azure Static Web Apps için yapılandırılmıştır:

```bash
cd quiz-app
npm run build      # dist/ klasörü oluşturur
# main'e push yapıldığında GitHub Actions iş akışı ile dağıtım yapar
```

Azure Static Web Apps konfigürasyonu:
- **Uygulama dizini**: `/quiz-app`
- **Çıkış dizini**: `dist`
- **İş akışı**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokümantasyon PDF Oluşturma

```bash
npm install                    # Docsify-to-pdf yükle
npm run convert               # Docs'tan PDF oluştur
```

### Docsify Dokümantasyon

```bash
npm install -g docsify-cli    # Docsify'yi global olarak yükleyin
docsify serve                 # localhost:3000 üzerinde servis verin
```

### Proje Özel Derleme

Her proje dizininin kendi derleme süreci olabilir:
- Vue projeleri: `npm run build` ile üretim paketleri oluşturur
- Statik projeler: Derleme adımı yok, dosyalar doğrudan sunulur

## Pull Request (PR) Yönergeleri

### Başlık Formatı

Değişiklik alanını net belirten açıklayıcı başlıklar kullanın:
- `[Quiz-app] Ders X için yeni quiz ekle`
- `[Lesson-3] Terrarium projesinde yazım hatası düzelt`
- `[Translation] Ders 5 İspanyolca çevirisi ekle`
- `[Docs] Kurulum talimatlarını güncelle`

### Gerekli Kontroller

PR göndermeden önce:

1. **Kod Kalitesi**:
   - Etkilenen projelerde `npm run lint` çalıştırın
   - Tüm hata ve uyarıları giderin

2. **Derleme Doğrulama**:
   - Uygunsa `npm run build` yapın
   - Derleme hatası olmadığından emin olun

3. **Link Doğrulama**:
   - Tüm markdown linklerini test edin
   - Görsel referanslarının çalıştığını kontrol edin

4. **İçerik İncelemesi**:
   - Yazım ve dilbilgisi denetimi yapın
   - Kod örneklerinin doğru ve öğretici olduğunu teyit edin
   - Çevirilerin anlam bütünlüğünü koruduğundan emin olun

### Katkı Gereksinimleri

- Microsoft CLA onaylayın (ilk PR’de otomatik kontrol)
- [Microsoft Açık Kaynak Davranış Kurallarına](https://opensource.microsoft.com/codeofconduct/) uyun
- Ayrıntılar için [CONTRIBUTING.md](./CONTRIBUTING.md) dosyasını inceleyin
- Varsa PR açıklamasında ilgili issue numaralarını referans gösterin

### İnceleme Süreci

- PR’lar bakımcılar ve topluluk tarafından incelenir
- Eğitimsel netliğe öncelik verilir
- Kod örnekleri güncel en iyi uygulamalara uygun olmalı
- Çeviriler doğruluk ve kültürel uygunluk açısından değerlendirilir

## Çeviri Sistemi

### Otomatik Çeviri

- GitHub Actions ile co-op-translator iş akışı kullanılır
- 50+ dile otomatik çeviri yapılır
- Kaynak dosyalar ana dizinlerde
- Çevrilmiş dosyalar `translations/{language-code}/` klasörlerinde

### Manuel Çeviri İyileştirmeleri Ekleme

1. `translations/{language-code}/` içindeki dosyayı bulun
2. Yapıyı koruyarak iyileştirmeler yapın
3. Kod örneklerinin çalışmaya devam ettiğinden emin olun
4. Yerelleştirilmiş quiz içeriklerini test edin

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

**Quiz uygulaması başlamıyor**:
- Node.js sürümünü kontrol edin (v14+ önerilir)
- `node_modules` ve `package-lock.json` dosyalarını silip `npm install` yapın
- Port çakışmalarını kontrol edin (varsayılan: Vite port 5173 kullanır)

**API sunucusu başlatılamıyor**:
- Node.js sürümünün minimum gereksinimi karşılayıp karşılamadığını doğrulayın (node >=10)
- Portun kullanımda olup olmadığını kontrol edin
- Tüm bağımlılıkların `npm install` ile yüklendiğinden emin olun

**Tarayıcı uzantısı yüklenmiyor**:
- manifest.json dosyasının doğru biçimlendirildiğini doğrulayın
- Tarayıcı konsolunda hata kontrolü yapın
- Tarayıcıya özgü uzantı kurulum talimatlarını izleyin

**Python sohbet projesi sorunları**:
- OpenAI paketi yüklü mü: `pip install openai`
- GITHUB_TOKEN ortam değişkeninin ayarlı olduğundan emin olun
- GitHub Modeller erişim izinlerini kontrol edin

**Docsify dokümanları sunmuyor**:
- docsify-cli’yi global kurun: `npm install -g docsify-cli`
- Depo root klasöründen çalıştırın
- `docs/_sidebar.md` dosyasının var olduğundan emin olun

### Geliştirme Ortamı İpuçları

- HTML projelerde VS Code ve Live Server eklentisini kullanın
- Tutarlı biçimlendirme için ESLint ve Prettier eklentilerini kurun
- JavaScript hata ayıklama için tarayıcı geliştirici araçlarını kullanın
- Vue projeleri için Vue DevTools tarayıcı eklentisini yükleyin

### Performans Dikkatleri

- Çok sayıda çevrilmiş dosya (50+ dil) tam klonları büyük yapar
- Sadece içerik çalışıyorsanız shallow clone kullanın: `git clone --depth 1`
- İngilizce içerikteyken çevirileri aramalardan hariç tutun
- İlk çalıştırmada derleme süreçleri yavaş olabilir (npm install, Vite build)

## Güvenlik Hususları

### Ortam Değişkenleri

- API anahtarları asla depoya eklenmemeli
- `.env` dosyaları kullanılmalı (zaten `.gitignore`da)
- Gerekli ortam değişkenleri proje README’lerinde belgelenmeli

### Python Projeleri

- Sanal ortam kullanımı: `python -m venv venv`
- Bağımlılıkları güncel tutun
- GitHub tokenlarının minimum gerekli izinlere sahip olmasına özen gösterin

### GitHub Modeller Erişimi

- GitHub Modeller için Kişisel Erişim Tokenları (PAT) gerekir
- Tokenlar ortam değişkeni olarak saklanmalı
- Tokenlar ya da kimlik bilgilerinin asla depoya eklenmemesi gerekir

## Ek Notlar

### Hedef Kitle

- Web geliştirmede tamamen yeni başlayanlar
- Öğrenciler ve kendi kendine öğrenenler
- Müfredatı sınıflarında kullanan öğretmenler
- İçerik erişilebilirlik ve kademeli beceri gelişimi için tasarlandı

### Eğitim Felsefesi

- Proje tabanlı öğrenme yaklaşımı
- Sık bilgi kontrolü (quizler)
- Uygulamalı kodlama alıştırmaları
- Gerçek dünya uygulama örnekleri
- Çerçeve kullanımından önce temellere odaklanma

### Depo Bakımı

- Aktif öğrenenler ve katkıda bulunanlar topluluğu
- Bağımlılıklar ve içerik düzenli güncellenir
- Sorunlar ve tartışmalar bakımcılar tarafından izlenir
- Çeviri güncellemeleri GitHub Actions ile otomatik

### İlgili Kaynaklar

- [Microsoft Learn modülleri](https://docs.microsoft.com/learn/)
- [Student Hub kaynakları](https://docs.microsoft.com/learn/student-hub/)
- Öğrenenler için önerilen [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- Ek kurslar: Üretken AI, Veri Bilimi, Makine Öğrenimi, Nesnelerin İnterneti müfredatları mevcut

### Belirli Projelerle Çalışmak

Bireysel projelerle ilgili ayrıntılı talimatlar için README dosyalarına bakın:
- `quiz-app/README.md` - Vue 3 quiz uygulaması
- `7-bank-project/README.md` - Kimlik doğrulamalı bankacılık uygulaması
- `5-browser-extension/README.md` - Tarayıcı uzantısı geliştirme
- `6-space-game/README.md` - Canvas tabanlı oyun geliştirme
- `9-chat-project/README.md` - AI sohbet asistanı projesi

### Monorepo Yapısı

Geleneksel bir monorepo olmamakla birlikte, bu depo birden fazla bağımsız proje içerir:
- Her ders kendi başına bağımsızdır
- Projeler bağımlılıkları paylaşmaz
- Bireysel projelerde çalışırken diğerlerini etkilemezsiniz
- Tam müfredat deneyimi için tüm depo klonlanabilir

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Feragatname**:  
Bu belge, AI çeviri servisi [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerde hatalar veya yanlışlıklar olabileceğini lütfen unutmayınız. Orijinal belge, kendi dilinde yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan herhangi bir yanlış anlama veya yanlış yorumlamadan sorumlu değiliz.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->