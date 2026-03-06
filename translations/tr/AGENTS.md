# AGENTS.md

## Proje Genel Bakış

Bu, başlangıç seviyesindeki kişilere web geliştirme temel bilgilerini öğretmek için hazırlanmış eğitici bir müfredat deposudur. Müfredat, Microsoft Cloud Advocates tarafından geliştirilen kapsamlı 12 haftalık bir kurstur ve JavaScript, CSS ve HTML'i kapsayan 24 uygulamalı dersten oluşur.

### Ana Bileşenler

- **Eğitici İçerik**: Proje bazlı modüllere organize edilmiş 24 yapılandırılmış ders
- **Pratik Projeler**: Terrarium, Yazma Oyunu, Tarayıcı Uzantısı, Uzay Oyunu, Bankacılık Uygulaması, Kod Editörü ve Yapay Zeka Sohbet Asistanı
- **Etkileşimli Quizler**: Her biri 3 sorudan oluşan 48 quiz (ders öncesi/sonrası değerlendirmeleri)
- **Çok Dilli Destek**: GitHub Actions ile 50+ dilde otomatik çeviriler
- **Teknolojiler**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (Yapay Zeka projeleri için)

### Mimari

- Ders tabanlı yapıya sahip eğitim deposu
- Her ders klasörü README, kod örnekleri ve çözümler içerir
- Ayrı dizinlerde bağımsız projeler (quiz-app, çeşitli ders projeleri)
- GitHub Actions kullanan çeviri sistemi (co-op-translator)
- Docsify ile sunulan dokümantasyon ve PDF olarak erişilebilirlik

## Kurulum Komutları

Bu depo esas olarak eğitim içeriğinin tüketimi içindir. Belirli projelerle çalışmak için:

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

### Sohbet Projesi (Python Arka Uç)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# GITHUB_TOKEN ortam değişkenini ayarlayın
python api.py
```

## Geliştirme İş Akışı

### İçerik Katkısı Sağlayanlar için

1. Depoyu GitHub hesabınıza **forklayın**
2. Forkladığınız depoyu yerel olarak **klonlayın**
3. Değişiklikleriniz için yeni bir **dal (branch)** oluşturun
4. Ders içeriği veya kod örneklerinde değişiklik yapın
5. İlgili proje klasörlerinde kod değişikliklerini test edin
6. Katkı yönergelerini takip ederek pull request gönderin

### Öğrenenler için

1. Depoyu forklayın veya klonlayın
2. Ders klasörleri arasında sırayla gezin
3. Her ders için README dosyalarını okuyun
4. Ders öncesi quizlerini https://ff-quizzes.netlify.app/web/ adresinde tamamlayın
5. Ders klasörlerindeki kod örneklerini uygulayın
6. Ödevleri ve zorlukları tamamlayın
7. Ders sonrası quizlerine katılın

### Canlı Geliştirme

- **Dokümantasyon**: Kök dizinde `docsify serve` çalıştırın (port 3000)
- **Quiz Uygulaması**: quiz-app dizininde `npm run dev` komutunu çalıştırın
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
node server.js     # Sunucunun hatasız başlatıldığını doğrula
```

### Genel Test Yaklaşımı

- Bu, kapsamlı otomatik testler içermeyen bir eğitim deposudur
- Manuel testler şunlara odaklanır:
  - Kod örnekleri hatasız çalışmalı
  - Dokümantasyon linkleri düzgün çalışmalı
  - Proje derlemeleri başarılı şekilde tamamlanmalı
  - Örnekler en iyi uygulamaları takip etmeli

### Gönderim Öncesi Kontroller

- package.json olan dizinlerde `npm run lint` çalıştırın
- Markdown bağlantılarının geçerli olduğunu doğrulayın
- Kod örneklerini tarayıcıda veya Node.js'de test edin
- Çevirilerin yapısını koruduğundan emin olun

## Kod Stili Rehberi

### JavaScript

- Modern ES6+ sözdizimi kullanın
- Projelerde sağlanan standart ESLint yapılandırmalarını uygulayın
- Eğitim amacıyla anlamlı değişken ve fonksiyon isimleri kullanın
- Öğrenenlere kavramları açıklayan yorumlar ekleyin
- Ayarlanmışsa Prettier ile biçimlendirin

### HTML/CSS

- Anlamsal HTML5 öğeleri
- Duyarlı tasarım prensipleri
- Açık sınıf isimlendirme kuralları
- Öğrenenler için CSS tekniklerini açıklayan yorumlar

### Python

- PEP 8 stil yönergeleri
- Açık, eğitici kod örnekleri
- Öğrenmeye yardımcı olabilecek tip ipuçları

### Markdown Dokümantasyonu

- Açık başlık hiyerarşisi
- Dil belirtimi içeren kod blokları
- Ek kaynak bağlantıları
- `images/` klasörlerinde ekran görüntüleri ve resimler
- Erişilebilirlik için görüntülerde alt metin

### Dosya Organizasyonu

- Dersler sıralı numaralandırılmış (1-getting-started-lessons, 2-js-basics, vb.)
- Her projenin `solution/` ve genellikle `start/` veya `your-work/` klasörleri var
- Resimler derslere özgü `images/` klasörlerinde saklanır
- Çeviriler `translations/{dil-kodu}/` yapısında

## Derleme ve Yayınlama

### Quiz Uygulaması Yayınlama (Azure Static Web Apps)

quiz-app Azure Static Web Apps yayınlama için yapılandırılmıştır:

```bash
cd quiz-app
npm run build      # dist/ klasörü oluşturur
# main dalına push yapıldığında GitHub Actions iş akışıyla dağıtım yapar
```

Azure Static Web Apps yapılandırması:
- **Uygulama konumu**: `/quiz-app`
- **Çıktı konumu**: `dist`
- **İş akışı**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokümantasyon PDF Oluşturma

```bash
npm install                    # docsify-to-pdf kur
npm run convert               # Belgelerden PDF oluştur
```

### Docsify Dokümantasyonu

```bash
npm install -g docsify-cli    # Docsify'ı küresel olarak yükleyin
docsify serve                 # localhost:3000 üzerinde sunun
```

### Proje Özel Derlemeler

Her proje dizini kendi derleme sürecine sahip olabilir:
- Vue projeleri: `npm run build` üretim paketlerini oluşturur
- Statik projeler: Derleme işlemi yok, dosyalar doğrudan servis edilir

## Pull Request Yönergeleri

### Başlık Formatı

Değişiklik alanını açıkça belirten başlıklar kullanın:
- `[Quiz-app] Ders X için yeni quiz ekle`
- `[Lesson-3] Terrarium projesinde yazım hatası düzeltildi`
- `[Translation] Ders 5 için İspanyolca çeviri eklendi`
- `[Docs] Kurulum talimatları güncellendi`

### Gerekli Kontroller

PR göndermeden önce:

1. **Kod Kalitesi**:
   - Etkilenen proje dizinlerinde `npm run lint` çalıştırın
   - Tüm lint hatalarını ve uyarılarını düzeltin

2. **Derleme Doğrulama**:
   - Uygun ise `npm run build` çalıştırın
   - Derleme hatası olmadığından emin olun

3. **Bağlantı Doğrulama**:
   - Tüm markdown bağlantılarını test edin
   - Resim referanslarının çalıştığını kontrol edin

4. **İçerik İncelemesi**:
   - Yazım ve dil bilgisi denetimi yapın
   - Kod örneklerinin doğru ve eğitici olduğundan emin olun
   - Çevirilerin orijinal anlamı koruduğunu doğrulayın

### Katkı Koşulları

- Microsoft CLA’ya (ilk PR’de otomatik kontrol)
- [Microsoft Açık Kaynak Davranış Kurallarına](https://opensource.microsoft.com/codeofconduct/) uyun
- Ayrıntılı yönergeler için [CONTRIBUTING.md](./CONTRIBUTING.md) dosyasına bakın
- Gerekliyse PR açıklamasında ilgili issue numaralarını belirtin

### İnceleme Süreci

- PR’lar bakımcılar ve topluluk tarafından incelenir
- Eğitici açıklık önceliklidir
- Kod örnekleri güncel en iyi uygulamalara uygun olmalı
- Çeviriler doğruluk ve kültürel uygunluk için denetlenir

## Çeviri Sistemi

### Otomatik Çeviri

- GitHub Actions ile co-op-translator iş akışı kullanılır
- 50+ dile otomatik çeviri yapılır
- Kaynak dosyalar ana dizinlerde olur
- Çeviriler `translations/{dil-kodu}/` klasörlerinde bulunur

### Manuel Çeviri İyileştirmeleri Ekleme

1. Dosyayı `translations/{dil-kodu}/` içinde bulun
2. Yapıyı koruyarak iyileştirmeler yapın
3. Kod örneklerinin işlevselliğini muhafaza edin
4. Yerelleştirilmiş quiz içeriğini test edin

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
- Node.js versiyonunu kontrol edin (v14+ önerilir)
- `node_modules` ve `package-lock.json` silin, ardından `npm install` çalıştırın
- Port çakışmalarını kontrol edin (varsayılan: Vite 5173 portunu kullanır)

**API sunucusu başlamıyor**:
- Node.js sürümünün minimum (node >=10) olduğundan emin olun
- Portun kullanımda olmadığını kontrol edin
- Tüm bağımlılıkların `npm install` ile yüklendiğinden emin olun

**Tarayıcı uzantısı yüklenmiyor**:
- manifest.json dosyasının düzgün formatlandığını kontrol edin
- Tarayıcı konsolundaki hatalara bakın
- Tarayıcıya özgü uzantı kurulum talimatlarını takip edin

**Python sohbet projesinde sorunlar**:
- OpenAI paketi kurulu olmalı: `pip install openai`
- GITHUB_TOKEN çevre değişkeni ayarlı olmalı
- GitHub Models erişim izinleri kontrol edilmeli

**Docsify dokümanları sunmuyor**:
- docsify-cli global kurulu değilse: `npm install -g docsify-cli`
- Depo kök dizininden çalıştırın
- `docs/_sidebar.md` var mı kontrol edin

### Geliştirme Ortamı İpuçları

- HTML projeleri için VS Code Live Server uzantısını kullanın
- Tutarlı formatlama için ESLint ve Prettier uzantıları yükleyin
- JavaScript hata ayıklaması için tarayıcı geliştirici araçlarını kullanın
- Vue projeleri için Vue DevTools tarayıcı uzantısını kurun

### Performans Dikkatleri

- 50+ dilde çok sayıda çeviri dosyası olması, tam klonlamayı büyük yapar
- İçerikle çalışıyorsanız sığ klon kullanın: `git clone --depth 1`
- İngilizce içerikle çalışırken çevirileri aramalardan hariç tutun
- İlk çalıştırmada kurulum ve derleme süreçleri (npm install, Vite build) yavaş olabilir

## Güvenlik Dikkatleri

### Ortam Değişkenleri

- API anahtarları asla depoya eklenmemeli
- `.env` dosyaları kullanılmalı (zaten `.gitignore` içinde)
- Gerekli ortam değişkenleri proje README’lerinde belgelenmeli

### Python Projeleri

- Sanal ortamlar kullanılmalı: `python -m venv venv`
- Bağımlılıklar güncel tutulmalı
- GitHub tokenları minimum gerekli izinlere sahip olmalı

### GitHub Models Erişimi

- GitHub Models için Kişisel Erişim Tokenları (PAT) gerekir
- Tokenlar ortam değişkeni olarak saklanmalı
- Tokenlar veya kimlik bilgileri asla depoya commit edilmemeli

## Ek Notlar

### Hedef Kitle

- Web geliştirmeye tamamen yeni başlayanlar
- Öğrenciler ve kendi kendine öğrenenler
- Müfredatı sınıflarda kullanan öğretmenler
- İçerik erişilebilirlik ve aşamalı beceri oluşturma için tasarlanmıştır

### Eğitim Felsefesi

- Proje bazlı öğrenme yaklaşımı
- Sık aralıklarla bilgi kontrolü (quizler)
- Uygulamalı kodlama alıştırmaları
- Gerçek dünya uygulama örnekleri
- Frameworklerden önce temellere odaklanma

### Depo Bakımı

- Aktif öğrenenler ve katkı sağlayanlardan oluşan topluluk
- Bağımlılık ve içerik düzenli güncellenir
- Bakımcılar tarafından sorunlar ve tartışmalar izlenir
- Çeviri güncellemeleri GitHub Actions ile otomatik yapılır

### İlgili Kaynaklar

- [Microsoft Learn modülleri](https://docs.microsoft.com/learn/)
- [Student Hub kaynakları](https://docs.microsoft.com/learn/student-hub/)
- Öğrenenler için önerilen [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- Ek kurslar: Üretken AI, Veri Bilimi, ML, IoT müfredatları mevcut

### Belirli Projelerle Çalışma

Bireysel projelerle ilgili ayrıntılı talimatlar için README dosyalarına bakınız:
- `quiz-app/README.md` - Vue 3 quiz uygulaması
- `7-bank-project/README.md` - Kimlik doğrulamalı bankacılık uygulaması
- `5-browser-extension/README.md` - Tarayıcı uzantısı geliştirme
- `6-space-game/README.md` - Canvas tabanlı oyun geliştirme
- `9-chat-project/README.md` - Yapay zeka sohbet asistanı projesi

### Monorepo Yapısı

Klasik bir monorepo olmasa da bu depo birçok bağımsız projeyi içerir:
- Her ders kendi içinde bağımsızdır
- Projeler bağımlılık paylaşmaz
- Bireysel projeler üzerinde diğerlerini etkilemeden çalışabilirsiniz
- Tam müfredatı deneyimlemek için tüm depo klonlanabilir

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba sarf etsek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayınız. Orijinal belge, kendi dilinde yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanılması sonucu oluşabilecek yanlış anlaşılmalardan veya yorum hatalarından sorumlu tutulamayız.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->