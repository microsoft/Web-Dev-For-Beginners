# AGENTS.md

## Proje Genel Bakışı

Bu, yeni başlayanlara web geliştirme temellerini öğretmek için hazırlanan eğitim müfredatı deposudur. Müfredat, Microsoft Cloud Advocates tarafından geliştirilen kapsamlı 12 haftalık bir kurstur ve JavaScript, CSS ve HTML’i içeren 24 uygulamalı ders içermektedir.

### Ana Bileşenler

- **Eğitim İçeriği**: Proje tabanlı modüller halinde düzenlenmiş 24 yapılandırılmış ders
- **Pratik Projeler**: Terrarium, Yazı Yazma Oyunu, Tarayıcı Uzantısı, Uzay Oyunu, Bankacılık Uygulaması, Kod Editörü ve AI Sohbet Asistanı
- **Etkileşimli Quizler**: Her biri 3 sorudan oluşan 48 quiz (ders öncesi/sonrası değerlendirmeler)
- **Çok Dilli Destek**: GitHub Actions ile 50’den fazla dile otomatik çeviriler
- **Teknolojiler**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projeleri için)

### Mimari

- Ders tabanlı yapıya sahip eğitim deposu
- Her ders klasörü README, kod örnekleri ve çözümler içerir
- Bağımsız projeler ayrı dizinlerde (quiz-app, çeşitli ders projeleri)
- GitHub Actions (co-op-translator) ile çeviri sistemi
- Docsify üzerinden sunulan ve PDF olarak erişilebilen dokümantasyon

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
npm run dev        # Geliştirme sunucusunu başlat
npm run build      # Üretim için yapılandır
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
# Tarayıcıya özgü eklenti yükleme talimatlarını izleyin
```

### Uzay Oyunu Projeleri

```bash
cd 6-space-game/solution
npm install
# Tarayıcıda index.html dosyasını açın veya Live Server kullanın
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

1. Depoyu GitHub hesabınıza **forklayın**
2. Kendi fork’unuzu yerel olarak **klonlayın**
3. Değişiklikleriniz için yeni bir **branch oluşturun**
4. Ders içeriği veya kod örneklerinde değişiklik yapın
5. İlgili proje dizinlerinde kod değişikliklerini test edin
6. Katkı kurallarına uygun şekilde pull request gönderin

### Öğrenenler İçin

1. Depoyu fork’layın veya klonlayın
2. Ders dizinlerinde sırayla ilerleyin
3. Her dersin README dosyasını okuyun
4. Ders öncesi quizlerini https://ff-quizzes.netlify.app/web/ adresinde tamamlayın
5. Ders klasörlerindeki kod örnekleriyle çalışın
6. Ödevleri ve zorlukları tamamlayın
7. Ders sonrası quizlerini yapın

### Canlı Geliştirme

- **Dokümantasyon**: Kök dizinde `docsify serve` çalıştırın (port 3000)
- **Quiz Uygulaması**: quiz-app dizininde `npm run dev` çalıştırın
- **Projeler**: HTML projeleri için VS Code Live Server uzantısını kullanın
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
node server.js     # Sunucunun hatasız başladığını doğrula
```

### Genel Test Yaklaşımı

- Bu eğitim deposunda kapsamlı otomatik testler yoktur
- Manuel testler şunlara odaklanır:
  - Kod örneklerinin hatasız çalışması
  - Dokümantasyondaki bağlantıların doğru çalışması
  - Proje derlemelerinin başarılı olması
  - Örneklerin en iyi uygulamaları takip etmesi

### Gönderim Öncesi Kontroller

- package.json bulunan dizinlerde `npm run lint` çalıştırın
- Markdown bağlantılarının geçerli olduğundan emin olun
- Kod örneklerini tarayıcı veya Node.js’de test edin
- Çevirilerin yapısını koruduğundan emin olun

## Kod Stili Rehberi

### JavaScript

- Modern ES6+ sözdizimi kullanın
- Projelerde sağlanan standart ESLint yapılandırmalarını takip edin
- Eğitim amaçlı anlamlı değişken ve fonksiyon isimleri kullanın
- Öğrenenler için kavramları açıklayan yorumlar ekleyin
- Yapılandırılmış ise Prettier ile formatlayın

### HTML/CSS

- Semantik HTML5 elemanları kullanın
- Duyarlı tasarım prensipleri uygulayın
- Açık sınıf isimlendirme konvansiyonları kullanın
- Öğrenenler için CSS tekniklerini açıklayan yorumlar ekleyin

### Python

- PEP 8 stil kurallarına uyun
- Açık, eğitim amaçlı kod örnekleri sunun
- Öğrenmeyi kolaylaştıran tip ipuçları kullanın

### Markdown Dokümantasyon

- Açık başlık hiyerarşisi
- Programlama dili belirtilmiş kod blokları
- Ek kaynaklara bağlantılar
- `images/` dizininde ekran görüntüleri ve resimler
- Erişilebilirlik için resimlerin alt metinleri

### Dosya Organizasyonu

- Dersler numaralandırılmıştır (1-getting-started-lessons, 2-js-basics, vb.)
- Her projenin `solution/` ve genellikle `start/` veya `your-work/` dizinleri bulunur
- Resimler ders bazlı `images/` klasörlerinde saklanır
- Çeviriler `translations/{language-code}/` yapısındadır

## Derleme ve Dağıtım

### Quiz Uygulaması Dağıtımı (Azure Static Web Apps)

quiz-app, Azure Static Web Apps dağıtımına uygun şekilde yapılandırılmıştır:

```bash
cd quiz-app
npm run build      # dist/ klasörü oluşturur
# main dalına push yapıldığında GitHub Actions iş akışı ile dağıtım yapar
```

Azure Static Web Apps yapılandırması:
- **Uygulama konumu**: `/quiz-app`
- **Çıktı konumu**: `dist`
- **İş akışı**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokümantasyon PDF Üretimi

```bash
npm install                    # docsify-to-pdf yükleyin
npm run convert               # docs'dan PDF oluşturun
```

### Docsify Dokümantasyonu

```bash
npm install -g docsify-cli    # Docsify'i global olarak yükleyin
docsify serve                 # localhost:3000 üzerinde servis verin
```

### Projeye Özel Derlemeler

Her proje dizininin kendi derleme süreci olabilir:
- Vue projeleri: Üretim paketleri için `npm run build`
- Statik projeler: Derleme yok, dosyalar doğrudan sunulur

## Pull Request Kuralları

### Başlık Formatı

Değişiklik alanını belirten net, açıklayıcı başlık kullanın:
- `[Quiz-app] Ders X için yeni quiz eklendi`
- `[Lesson-3] Terrarium projesinde yazım hatası düzeltildi`
- `[Translation] Ders 5 için İspanyolca çeviri eklendi`
- `[Docs] Kurulum talimatları güncellendi`

### Gerekli Kontroller

PR göndermeden önce:

1. **Kod Kalitesi**:
   - Etkilenen proje dizinlerinde `npm run lint` çalıştırın
   - Tüm lint hatalarını ve uyarılarını giderin

2. **Derleme Doğrulaması**:
   - Uygunsa `npm run build` çalıştırın
   - Derleme hatası olmadığından emin olun

3. **Bağlantı Doğrulaması**:
   - Tüm markdown bağlantılarını test edin
   - Resim referanslarının çalıştığını kontrol edin

4. **İçerik İncelemesi**:
   - Yazım ve dilbilgisi kontrolü yapın
   - Kod örneklerinin doğru ve öğretici olduğundan emin olun
   - Çevirilerin orijinal anlamı koruduğunu doğrulayın

### Katkı Gereksinimleri

- Microsoft CLA’ya (ilk PR’de otomatik kontrol)
- [Microsoft Açık Kaynak Davranış Kuralları](https://opensource.microsoft.com/codeofconduct/) uyumu
- Detaylı kurallar için [CONTRIBUTING.md](./CONTRIBUTING.md) dosyasına bakın
- PR açıklamasında ilgili sorun numaralarına atıfta bulunun

### İnceleme Süreci

- PR’lar bakımcılar ve topluluk tarafından incelenir
- Eğitimsel açıklık ön plandadır
- Kod örnekleri güncel en iyi uygulamaları takip etmelidir
- Çeviriler doğruluk ve kültürel uygunluk açısından kontrol edilir

## Çeviri Sistemi

### Otomatik Çeviri

- GitHub Actions ile co-op-translator iş akışı kullanılır
- 50’den fazla dile otomatik çeviri yapılır
- Kaynak dosyalar ana dizinlerde bulunur
- Çeviriler `translations/{language-code}/` klasörlerinde yer alır

### Manuel Çeviri İyileştirmeleri Ekleme

1. Dosyayı `translations/{language-code}/` içinde bulun
2. Yapıyı koruyarak iyileştirmeler yapın
3. Kod örneklerinin işlevselliğinin devam ettiğinden emin olun
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

**Quiz uygulaması başlamıyor**:
- Node.js sürümünü kontrol edin (v14+ önerilir)
- `node_modules` ve `package-lock.json` silin, sonra `npm install` çalıştırın
- Port çakışmalarını kontrol edin (default: Vite port 5173 kullanır)

**API sunucusu başlamıyor**:
- Minimum Node.js sürümü kontrol edin (node >=10)
- Portun kullanımda olup olmadığını doğrulayın
- `npm install` ile tüm bağımlılıkların yüklendiğinden emin olun

**Tarayıcı uzantısı yüklenmiyor**:
- manifest.json dosyasının doğru formatta olduğunu kontrol edin
- Tarayıcı konsolundaki hatalara bakın
- Tarayıcıya özgü uzantı kurulum talimatlarını izleyin

**Python sohbet projesi sorunları**:
- OpenAI paketi kurulu olmalı: `pip install openai`
- GITHUB_TOKEN ortam değişkeninin ayarlı olduğundan emin olun
- GitHub Modeller erişim izinlerini kontrol edin

**Docsify dokümantasyonu sunmuyor**:
- docsify-cli’yi global kurun: `npm install -g docsify-cli`
- Depo kök dizininden çalıştırın
- `docs/_sidebar.md` dosyasının varlığını kontrol edin

### Geliştirme Ortamı İpuçları

- HTML projeleri için VS Code Live Server uzantısını kullanın
- Tutarlı format için ESLint ve Prettier uzantılarını kurun
- JavaScript hata ayıklama için tarayıcı Geliştirici Araçlarını kullanın
- Vue projeleri için Vue DevTools tarayıcı uzantısını yükleyin

### Performans Considerations

- Çok sayıda çevrilmiş dosya (50+ dil) tam klonlama boyutunu artırır
- Sadece içerik üzerinde çalışıyorsanız sığ klonlama kullanın: `git clone --depth 1`
- İngilizce içerik çalışırken çevirileri aramalardan hariç tutun
- İlk kurulumda derleme işlemleri (npm install, Vite build) yavaş olabilir

## Güvenlik Considerations

### Ortam Değişkenleri

- API anahtarları hiçbir zaman depoya commit edilmemelidir
- `.env` dosyaları kullanılır (zaten `.gitignore`da var)
- Proje README’lerinde gerekli ortam değişkenleri belgelenir

### Python Projeleri

- Sanal ortamlar kullanın: `python -m venv venv`
- Bağımlılıkları güncel tutun
- GitHub token’lar gerekli minimum izinlere sahip olmalıdır

### GitHub Modeller Erişimi

- GitHub Modeller için Kişisel Erişim Tokenları (PAT) gereklidir
- Token'lar ortam değişkeni olarak saklanmalıdır
- Token veya kimlik bilgileri hiçbir zaman commit edilmemelidir

## Ek Notlar

### Hedef Kitle

- Tamamen yeni başlayan web geliştiriciler
- Öğrenciler ve kendi kendine öğrenenler
- Müfredatı sınıflarında kullanan öğretmenler
- İçerik erişilebilirlik ve aşamalı beceri gelişimi için tasarlanmıştır

### Eğitim Felsefesi

- Proje tabanlı öğrenme yaklaşımı
- Sık sık bilgi kontrolü (quizler)
- Uygulamalı kodlama egzersizleri
- Gerçek dünya uygulama örnekleri
- Frameworklerden önce temellerin vurgulanması

### Depo Bakımı

- Aktif öğrenenler ve katkıda bulunanlar topluluğu
- Düzenli bağımlılık ve içerik güncellemeleri
- Sorunlar ve tartışmalar bakımcılarca izlenir
- Çeviri güncellemeleri GitHub Actions ile otomatik

### İlgili Kaynaklar

- [Microsoft Learn modülleri](https://docs.microsoft.com/learn/)
- [Öğrenci Merkezi kaynakları](https://docs.microsoft.com/learn/student-hub/)
- Öğrenenler için önerilen [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- Ek kurslar: Üretken AI, Veri Bilimi, ML, IoT müfredatları mevcut

### Belirli Projelerle Çalışmak

Bireysel projeler için detaylı talimatlar README dosyalarında:
- `quiz-app/README.md` - Vue 3 quiz uygulaması
- `7-bank-project/README.md` - Kimlik doğrulamalı bankacılık uygulaması
- `5-browser-extension/README.md` - Tarayıcı uzantısı geliştirme
- `6-space-game/README.md` - Canvas tabanlı oyun geliştirme
- `9-chat-project/README.md` - AI sohbet asistanı projesi

### Monorepo Yapısı

Geleneksel bir monorepo olmamakla birlikte, bu depo birden fazla bağımsız proje içerir:
- Her ders kendi içinde bağımsızdır
- Projeler ortak bağımlılık paylaşmaz
- Diğerlerini etkilemeden bireysel projelerde çalışılır
- Tüm müfredatı deneyimlemek için depo tamamen klonlanabilir

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba sarf edilse de, otomatik çevirilerin hatalar veya yanlışlıklar içerebileceğini lütfen unutmayınız. Orijinal belge, kendi dilinde yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımı sonucunda oluşabilecek herhangi bir yanlış anlama veya yorum hatasından sorumlu tutulamayız.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->