# AGENTS.md

## Proje Genel Bakışı

Bu, yeni başlayanlara web gelişimini temel prensipleri öğretmek için hazırlanmış eğitim müfredatı deposudur. Müfredat, Microsoft Bulut Savunucuları tarafından geliştirilen kapsamlı bir 12 haftalık kurstur ve JavaScript, CSS ve HTML içeren 24 uygulamalı ders içermektedir.

### Ana Bileşenler

- **Eğitim İçeriği**: Proje tabanlı modüllere organize edilmiş 24 yapılandırılmış ders
- **Pratik Projeler**: Terrarium, Yazma Oyunu, Tarayıcı Uzantısı, Uzay Oyunu, Bankacılık Uygulaması, Kod Editörü ve Yapay Zeka Sohbet Asistanı
- **Etkileşimli Quizler**: Her biri 3 sorudan oluşan 48 quiz (ders öncesi/sonrası değerlendirmeleri)
- **Çok Dilli Destek**: GitHub Actions ile 50+ dilde otomatik çeviri
- **Teknolojiler**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (Yapay Zeka projeleri için)

### Mimari

- Ders temelli yapıya sahip eğitim deposu
- Her ders klasörü README, kod örnekleri ve çözümler içerir
- Ayrı klasörlerde bağımsız projeler (quiz-app, çeşitli ders projeleri)
- GitHub Actions kullanan çeviri sistemi (co-op-translator)
- Docsify ile sağlanan dökümantasyon ve PDF halinde erişilebilirlik

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

### İçerik Katkıcıları İçin

1. **Depoyu kendi GitHub hesabınıza fork edin**
2. **Fork’unuzu yerel olarak klonlayın**
3. **Değişiklikleriniz için yeni bir dal oluşturun**
4. Ders içeriği veya kod örneklerinde değişiklik yapın
5. İlgili proje klasörlerinde kod değişikliklerini test edin
6. Katkı yönergelerine uygun şekilde pull request gönderin

### Öğrenenler İçin

1. Depoyu fork edin veya klonlayın
2. Ders klasörlerinde sırayla gezin
3. Her dersin README dosyasını okuyun
4. https://ff-quizzes.netlify.app/web/ adresinde ders öncesi quizleri tamamlayın
5. Ders klasörlerindeki kod örnekleri üzerinde çalışın
6. Ödevleri ve zorlukları tamamlayın
7. Ders sonrası quizleri yapın

### Canlı Geliştirme

- **Dökümantasyon**: `docsify serve` komutunu kök dizinde çalıştırın (port 3000)
- **Quiz Uygulaması**: `quiz-app` dizininde `npm run dev` çalıştırın
- **Projeler**: HTML projeleri için VS Code Live Server uzantısını kullanın
- **API Projeleri**: İlgili API dizinlerinde `npm start` komutunu kullanın

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
npm run lint       # Kod stil sorunlarını kontrol et
node server.js     # Sunucunun hatasız başladığını doğrula
```

### Genel Test Yaklaşımı

- Bu eğitim deposunda kapsamlı otomatik test bulunmamaktadır
- Manuel testler:
  - Kod örneklerinin hatasız çalışması
  - Dökümantasyondaki linklerin doğru çalışması
  - Proje derlemelerinin başarılı olması
  - Örneklerin en iyi uygulamalara uygun olması

### Gönderim Öncesi Kontroller

- package.json içeren dizinlerde `npm run lint` komutunu çalıştırın
- Markdown bağlantılarının geçerli olduğundan emin olun
- Kod örneklerini tarayıcı veya Node.js üzerinde test edin
- Çevirilerin yapısını koruduğunu kontrol edin

## Kod Stili Yönergeleri

### JavaScript

- Modern ES6+ sözdizimi kullanın
- Projelerde sağlanan standart ESLint yapılandırmalarını takip edin
- Eğitim için anlamlı değişken ve fonksiyon isimleri kullanın
- Kavramları açıklayan yorumlar ekleyin
- Prettier kullanılan yerlerde biçimlendirme yapın

### HTML/CSS

- Semantik HTML5 elemanları kullanın
- Duyarlı tasarım prensiplerine uyun
- Açık sınıf isimlendirme konvansiyonları kullanın
- CSS tekniklerini açıklayan yorumlar ekleyin

### Python

- PEP 8 stil kurallarına uyun
- Açık, eğitim amaçlı kod örnekleri sunun
- Öğrenmeye yardımcı olan yerlerde tip ipuçları kullanın

### Markdown Dökümantasyonu

- Net başlık hiyerarşisi
- Dil belirtilmiş kod blokları
- Ek kaynaklara linkler
- `images/` dizininde ekran görüntüleri ve görseller
- Erişilebilirlik için görsellerde alt metin kullanımı

### Dosya Organizasyonu

- Dersler sırayla numaralandırılmış (1-getting-started-lessons, 2-js-basics, vb.)
- Her projenin `solution/` ve çoğunlukla `start/` veya `your-work/` klasörleri var
- Görseller derslere özel `images/` klasörlerinde tutulur
- Çeviriler `translations/{language-code}/` yapısında

## Derleme ve Dağıtım

### Quiz Uygulaması Dağıtımı (Azure Static Web Apps)

quiz-app Azure Static Web Apps dağıtımı için yapılandırılmıştır:

```bash
cd quiz-app
npm run build      # dist/ klasörü oluşturur
# main'e push yapıldığında GitHub Actions iş akışıyla dağıtır
```

Azure Static Web Apps yapılandırması:
- **Uygulama konumu**: `/quiz-app`
- **Çıktı konumu**: `dist`
- **İş akışı**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dökümantasyon PDF Oluşturma

```bash
npm install                    # docsify-to-pdf yükleyin
npm run convert               # Docs'dan PDF oluşturun
```

### Docsify Dökümantasyonu

```bash
npm install -g docsify-cli    # Docsify'yi global olarak kur
docsify serve                 # localhost:3000 üzerinde sun
```

### Proje Bazlı Derlemeler

Her proje dizininde kendi derleme süreci olabilir:
- Vue projeleri: `npm run build` ile üretim paketleri oluşturulur
- Statik projeler: Derleme adımı yok, dosyalar doğrudan servis edilir

## Pull Request Yönergeleri

### Başlık Formatı

Değişiklik alanını belirtmek için açık ve açıklayıcı başlıklar kullanın:
- `[Quiz-app] Ders X için yeni quiz ekle`
- `[Lesson-3] Terrarium projesinde yazım hatasını düzelt`
- `[Translation] Ders 5 için İspanyolca çeviri ekle`
- `[Docs] Kurulum talimatlarını güncelle`

### Gereken Kontroller

PR göndermeden önce:

1. **Kod Kalitesi**:
   - Etkilenen proje dizinlerinde `npm run lint` çalıştırın
   - Tüm lint hatalarını ve uyarılarını düzeltin

2. **Derleme Doğrulaması**:
   - Uygunsa, `npm run build` komutunu çalıştırın
   - Derleme hatası olmadığından emin olun

3. **Link Doğrulama**:
   - Tüm markdown linklerini test edin
   - Görsel referansların çalıştığını kontrol edin

4. **İçerik İncelemesi**:
   - İmla ve gramer kontrolü yapın
   - Kod örneklerinin doğru ve öğretici olduğundan emin olun
   - Çevirilerin orijinal anlamı koruduğunu teyit edin

### Katkı Gereksinimleri

- Microsoft CLA’ya (otomatik kontrol ilk PR’da) onay verin
- [Microsoft Açık Kaynak Davranış Kuralları](https://opensource.microsoft.com/codeofconduct/)’na uyun
- Detaylı yönergeler için [CONTRIBUTING.md](./CONTRIBUTING.md) dosyasına bakın
- Uygunsa, PR açıklamasında ilgili issue numaralarını belirtin

### İnceleme Süreci

- PR’lar bakımcılar ve topluluk tarafından incelenir
- Eğitimsel açıklık önceliklidir
- Kod örnekleri mevcut en iyi uygulamalara uygun olmalıdır
- Çeviriler doğruluk ve kültürel uygunluk açısından gözden geçirilir

## Çeviri Sistemi

### Otomatik Çeviri

- GitHub Actions ile co-op-translator iş akışını kullanır
- 50+ dile otomatik çeviri yapar
- Kaynak dosyalar ana dizinlerde
- Çeviriler `translations/{language-code}/` dizinlerinde

### Manuel Çeviri İyileştirmeleri Ekleme

1. `translations/{language-code}/` dizininde dosyayı bulun
2. Yapıyı koruyarak iyileştirmeler yapın
3. Kod örneklerinin çalışır durumda kaldığından emin olun
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
- `node_modules` ve `package-lock.json` silip `npm install` komutunu tekrar çalıştırın
- Port çakışması olup olmadığını kontrol edin (varsayılan: Vite portu 5173)

**API sunucusu başlamıyor**:
- Node.js sürümünün minimum gereksinimi karşılayıp karşılamadığını kontrol edin (node >=10)
- Portun kullanımda olup olmadığını kontrol edin
- Tüm bağımlılıkların `npm install` ile yüklendiğinden emin olun

**Tarayıcı uzantısı yüklenmiyor**:
- manifest.json dosyasının doğru formatlandığını kontrol edin
- Tarayıcı konsolunda hata var mı bakın
- Tarayıcıya özel uzantı yükleme talimatlarını takip edin

**Python sohbet projesi sorunları**:
- OpenAI paketi yüklü mü: `pip install openai`
- GITHUB_TOKEN çevre değişkeninin ayarlı olduğundan emin olun
- GitHub Modeller erişim izinlerini kontrol edin

**Docsify dökümantasyonu servis etmiyor**:
- docsify-cli global olarak yüklü mü: `npm install -g docsify-cli`
- Depo kök dizininden çalıştırın
- `docs/_sidebar.md` dosyasının varlığını kontrol edin

### Geliştirme Ortamı İpuçları

- HTML projeleri için VS Code Live Server uzantısını kullanın
- Tutarlı biçimlendirme için ESLint ve Prettier uzantılarını kurun
- JavaScript hata ayıklamak için tarayıcı geliştirici araçlarını kullanın
- Vue projeleri için Vue DevTools tarayıcı uzantısını kurun

### Performans Dikkatleri

- Çok sayıda çevrilmiş dosya (50+ dil) tam klonlama boyutunu artırır
- Sadece içerikle çalışıyorsanız sığ klon kullanın: `git clone --depth 1`
- İngilizce içerikle çalışırken çevirileri aramalardan hariç tutun
- Derleme süreçleri ilk seferde yavaş olabilir (npm install, Vite build)

## Güvenlik Dikkatleri

### Ortam Değişkenleri

- API anahtarları asla depoya gönderilmemelidir
- `.env` dosyaları kullanılır (zaten `.gitignore` içinde)
- Gerekli ortam değişkenleri proje README’lerinde belgelenmelidir

### Python Projeleri

- Sanal ortamlar kullanın: `python -m venv venv`
- Bağımlılıkları güncel tutun
- GitHub tokenleri minimum yetkiyle ayarlayın

### GitHub Modeller Erişimi

- GitHub Modeller için Kişisel Erişim Tokenleri (PAT) gerekir
- Tokenlar çevre değişkeni olarak saklanmalıdır
- Token veya kimlik bilgileri asla versiyon kontrolüne gönderilmemelidir

## Ek Notlar

### Hedef Kitle

- Web geliştirmeye tamamen yeni başlayanlar
- Öğrenciler ve kendi kendine öğrenenler
- Müfredatı sınıf ortamında kullanan öğretmenler
- İçerik erişilebilirlik ve aşamalı beceri geliştirmeye uygun şekilde tasarlanmıştır

### Eğitim Felsefesi

- Proje tabanlı öğrenme yöntemi
- Sık aralıklarla bilgi ölçümleri (quizler)
- Uygulamalı kodlama egzersizleri
- Gerçek dünya uygulaması örnekleri
- Çerçeveler öncesi temel bilgiler üzerine odaklanma

### Depo Bakımı

- Aktif öğrenenler ve katkıcılar topluluğu
- Bağımlılık ve içerik düzenli güncellenir
- Sorunlar ve tartışmalar bakımcılar tarafından izlenir
- Çeviri güncellemeleri GitHub Actions aracılığıyla otomatik

### İlgili Kaynaklar

- [Microsoft Learn modülleri](https://docs.microsoft.com/learn/)
- [Öğrenci Merkezi kaynakları](https://docs.microsoft.com/learn/student-hub/)
- Öğrenenler için önerilen [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- Ek kurslar: Üretken AI, Veri Bilimi, ML, Nesnelerin İnterneti müfredatları

### Belirli Projelerle Çalışma

Bireysel projeler hakkında detaylı talimatlar için README dosyalarına bakın:
- `quiz-app/README.md` - Vue 3 quiz uygulaması
- `7-bank-project/README.md` - Kimlik doğrulamalı bankacılık uygulaması
- `5-browser-extension/README.md` - Tarayıcı uzantısı geliştirme
- `6-space-game/README.md` - Canvas tabanlı oyun geliştirme
- `9-chat-project/README.md` - AI sohbet asistanı projesi

### Monorepo Yapısı

Geleneksel bir monorepo olmasa da, bu depo birçok bağımsız proje içerir:
- Her ders kendi başına bağımsızdır
- Projeler bağımlılık paylaşmaz
- Bir projede çalışmak diğerlerini etkilemez
- Tüm müfredatı deneyimlemek için tüm depo klonlanabilir

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba gösterilse de, otomatik çevirilerin hatalar veya yanlışlıklar içerebileceğini lütfen unutmayınız. Orijinal belge, kendi ana dilinde yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi tavsiye edilir. Bu çevirinin kullanımı sonucu oluşabilecek herhangi bir yanlış anlama veya yorumlama nedeniyle sorumluluk kabul edilmemektedir.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->