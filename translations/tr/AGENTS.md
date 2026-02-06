# AGENTS.md

## Proje Genel Bakış

Bu, yeni başlayanlara web geliştirme temellerini öğretmek için hazırlanmış eğitim müfredatı deposudur. Müfredat, Microsoft Cloud Advocates tarafından geliştirilen kapsamlı 12 haftalık bir kurstur ve JavaScript, CSS ve HTML içeren 24 uygulamalı ders barındırır.

### Ana Bileşenler

- **Eğitim İçeriği**: Proje bazlı modüllere ayrılmış 24 yapılandırılmış ders
- **Pratik Projeler**: Terrarium, Yazma Oyunu, Tarayıcı Uzantısı, Uzay Oyunu, Bankacılık Uygulaması, Kod Editörü ve AI Sohbet Asistanı
- **Etkileşimli Quizler**: Her biri 3 sorudan oluşan 48 quiz (ders öncesi/sonrası değerlendirmeler)
- **Çok Dilli Destek**: GitHub Actions ile 50+ dilde otomatik çeviri
- **Teknolojiler**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projeleri için)

### Mimari

- Ders bazlı yapıya sahip eğitim deposu
- Her ders klasörü README, kod örnekleri ve çözümler içerir
- Bağımsız projeler farklı dizinlerde (quiz-app, çeşitli ders projeleri)
- GitHub Actions kullanan çeviri sistemi (co-op-translator)
- Docsify ile sunulan dokümantasyon ve PDF olarak erişilebilirlik

## Kurulum Komutları

Bu depo öncelikle eğitim içeriği kullanımı içindir. Belirli projelerle çalışmak için:

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
# Tarayıcıya özel eklenti yükleme talimatlarını izleyin
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
# GITHUB_TOKEN ortam değişkenini ayarlayın
python api.py
```

## Geliştirme İş Akışı

### İçerik Katkıcıları İçin

1. Depoyu GitHub hesabınıza **fork**layın  
2. Fork’unuzu yerel olarak **clone**layın  
3. Değişiklikleriniz için yeni bir **branch** oluşturun  
4. Ders içeriği veya kod örneklerinde değişiklik yapın  
5. İlgili proje dizinlerinde kod değişikliklerini test edin  
6. Katkı kurallarına uygun pull request gönderin  

### Öğrenenler İçin

1. Depoyu fork veya clone edin  
2. Ders klasörlerinde sırasıyla gezin  
3. Her ders için README dosyalarını okuyun  
4. https://ff-quizzes.netlify.app/web/ adresinde ders öncesi quizlerini tamamlayın  
5. Ders klasörlerindeki kod örnekleriyle çalışın  
6. Ödev ve görevleri yapın  
7. Ders sonrası quizlere katılın  

### Canlı Geliştirme

- **Dokümantasyon**: Kök dizinde `docsify serve` komutunu çalıştırın (port 3000)  
- **Quiz Uygulaması**: `quiz-app` dizininde `npm run dev` komutunu çalıştırın  
- **Projeler**: HTML projeleri için VS Code Live Server eklentisini kullanın  
- **API Projeleri**: İlgili API dizinlerinde `npm start` komutunu çalıştırın  

## Test Talimatları

### Quiz Uygulaması Testi

```bash
cd quiz-app
npm run lint       # Kod stili sorunlarını kontrol edin
npm run build      # Derlemenin başarılı olduğunu doğrulayın
```

### Banka API Testi

```bash
cd 7-bank-project/api
npm run lint       # Kod stili sorunlarını kontrol et
node server.js     # Sunucunun hatasız başlatıldığını doğrula
```

### Genel Test Yaklaşımı

- Bu eğitim deposunda kapsamlı otomatik testler yoktur  
- Manuel testler şunlara odaklanır:  
  - Kod örnekleri hatasız çalışır  
  - Dokümantasyondaki bağlantılar düzgün çalışır  
  - Proje derlemeleri başarıyla tamamlanır  
  - Örnekler iyi uygulamaları takip eder  

### Gönderim Öncesi Kontroller

- Package.json bulunan dizinlerde `npm run lint` çalıştırın  
- Markdown linklerinin geçerliliğini kontrol edin  
- Kod örneklerini tarayıcı veya Node.js'de test edin  
- Çevirilerin yapısının korunduğundan emin olun  

## Kod Stili Kılavuzları

### JavaScript

- Modern ES6+ sözdizimi kullanılmalı  
- Projelerde sağlanan standart ESLint konfigürasyonlarına uyulmalı  
- Eğitim amaçlı olarak anlamlı değişken ve fonksiyon isimleri tercih edilmeli  
- Kavramları açıklayan yorumlar eklenmeli  
- Prettier ile formatlama yapılmalı (varsa)  

### HTML/CSS

- Semantik HTML5 elementleri kullanılmalı  
- Responsive tasarım prensiplerine uyulmalı  
- Anlaşılır sınıf isimlendirme kuralları takip edilmeli  
- CSS tekniklerini açıklayan yorumlar eklenmeli  

### Python

- PEP 8 stil kurallarına uyulmalı  
- Açık ve eğitim amaçlı kod örnekleri sunulmalı  
- Öğrenme için faydalı yerlerde tip ipuçları kullanılmalı  

### Markdown Dokümantasyonu

- Açık başlık hiyerarşisi  
- Dil belirtilmiş kod blokları  
- Ek kaynaklara bağlantılar  
- `images/` klasörlerinde ekran görüntüleri ve resimler  
- Erişilebilirlik için resimlere açıklayıcı alt metin  

### Dosya Organizasyonu

- Dersler numaralandırılmış ve sıralı (1-getting-started-lessons, 2-js-basics, vb.)  
- Her projenin `solution/` ve sıklıkla `start/` veya `your-work/` klasörleri bulunur  
- Resimler derslere özel `images/` klasörlerinde saklanır  
- Çeviriler `translations/{language-code}/` yapısındadır  

## Derleme ve Yayınlama

### Quiz Uygulaması Yayınlama (Azure Static Web Apps)

Quiz-app, Azure Static Web Apps yayını için yapılandırılmıştır:

```bash
cd quiz-app
npm run build      # dist/ klasörü oluşturur
# main dalına push yapıldığında GitHub Actions iş akışı ile dağıtım yapar
```

Azure Static Web Apps yapılandırması:  
- **Uygulama konumu**: `/quiz-app`  
- **Çıktı konumu**: `dist`  
- **Çalışma akışı**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`  

### Dokümantasyon PDF Oluşturma

```bash
npm install                    # docsify-to-pdf yükleyin
npm run convert               # Docs'tan PDF oluşturun
```

### Docsify Dokümantasyonu

```bash
npm install -g docsify-cli    # Docsify'i global olarak kur
docsify serve                 # localhost:3000 üzerinde servis et
```

### Proje Bazlı Derlemeler

Her proje dizininde kendi derleme süreci olabilir:  
- Vue projeleri: `npm run build` komutu prodüksiyon paketleri oluşturur  
- Statik projeler: Derleme adımı yoktur, dosyalar doğrudan sunulur  

## Pull Request Kılavuzları

### Başlık Formatı

Değişiklik yapılacak alanı açıkça belirtin:  
- `[Quiz-app] Ders X için yeni quiz ekle`  
- `[Lesson-3] Terrarium projesinde yazım hatası düzelt`  
- `[Translation] Ders 5 için İspanyolca çeviri ekle`  
- `[Docs] Kurulum talimatlarını güncelle`  

### Gereken Kontroller

PR göndermeden önce:  

1. **Kod Kalitesi**:  
   - İlgili proje dizinlerinde `npm run lint` çalıştırın  
   - Tüm lint hatalarını ve uyarılarını düzeltin  

2. **Derleme Doğrulama**:  
   - Geçerliyse `npm run build` çalıştırın  
   - Derleme hatası olmadığından emin olun  

3. **Bağlantı Doğrulaması**:  
   - Tüm markdown linklerini test edin  
   - Resim referanslarının çalıştığını kontrol edin  

4. **İçerik İncelemesi**:  
   - Yazım ve dil bilgisi kontrolü yapın  
   - Kod örneklerinin doğru ve eğitici olduğunu doğrulayın  
   - Çevirilerin orijinal anlamı koruduğunu kontrol edin  

### Katkı Koşulları

- Microsoft CLA’ya (ilk PR’de otomatik kontrol) onay verilmeli  
- [Microsoft Açık Kaynak Davranış Kuralları](https://opensource.microsoft.com/codeofconduct/) izlenmeli  
- Detaylı kurallar için [CONTRIBUTING.md](./CONTRIBUTING.md) dosyasına bakılmalı  
- PR açıklamasında ilgili issue numaraları belirtilmeli (varsa)  

### İnceleme Süreci

- PR’ler bakımcılar ve topluluk tarafından incelenir  
- Eğitimsel açıklık önceliklidir  
- Kod örnekleri güncel en iyi uygulamaları takip etmelidir  
- Çeviriler doğruluk ve kültürel uygunluk açısından gözden geçirilir  

## Çeviri Sistemi

### Otomatik Çeviri

- GitHub Actions üzerinde co-op-translator akışı kullanılır  
- 50+ dile otomatik çeviri yapılır  
- Kaynak dosyalar ana dizinlerde bulunur  
- Çevirilmiş dosyalar `translations/{language-code}/` klasörlerinde yer alır  

### Manuel Çeviri İyileştirmeleri Ekleme

1. `translations/{language-code}/` klasöründen ilgili dosya bulunur  
2. Yapı korunarak iyileştirmeler yapılır  
3. Kod örneklerinin işlevselliği korunur  
4. Lokalize quiz içerikleri test edilir  

### Çeviri Meta Verileri

Çevrilmiş dosyalar meta veri üst bilgisi içerir:  
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
- `node_modules` ve `package-lock.json` silin, `npm install` tekrar çalıştırın  
- Port çakışmalarını kontrol edin (varsayılan: Vite port 5173 kullanır)  

**API sunucusu başlamıyor**:  
- Node.js sürümü minimum koşulu karşılıyor mu? (node >=10)  
- Portun kullanılıp kullanılmadığını kontrol edin  
- Tüm bağımlılıkların yüklendiğinden emin olun (`npm install`)  

**Tarayıcı uzantısı yüklenmiyor**:  
- manifest.json dosyasının doğru formatta olduğundan emin olun  
- Tarayıcı konsolundaki hataları kontrol edin  
- Tarayıcıya özel uzantı kurulum talimatlarını takip edin  

**Python sohbet projesi sorunları**:  
- OpenAI paketi yüklü mü? `pip install openai`  
- GITHUB_TOKEN ortam değişkeni ayarlı mı?  
- GitHub Modellerine erişim izinleri kontrol edin  

**Docsify doküman servisi çalışmıyor**:  
- docsify-cli küresel olarak yüklü olmalı: `npm install -g docsify-cli`  
- Depo kök dizininden çalıştırılmalı  
- `docs/_sidebar.md` dosyası mevcut olmalı  

### Geliştirme Ortamı İpuçları

- HTML projeleri için VS Code Live Server eklentisi kullanın  
- Tutarlı formatlama için ESLint ve Prettier eklentilerini kurun  
- JavaScript debug için tarayıcı geliştirici araçlarını kullanın  
- Vue projeleri için Vue DevTools tarayıcı uzantısını kurun  

### Performans Konuları

- Çok sayıda çeviri dosyası (50+ dil), tam klonlamaları büyük yapar  
- Sadece içerik üzerinde çalışıyorsanız `git clone --depth 1` ile sığ klonlama önerilir  
- İngilizce içeriğe çalışırken çevirileri aramalardan hariç tutun  
- İlk çalıştırmada derleme süreçleri (npm install, Vite build) yavaş olabilir  

## Güvenlik Hususları

### Ortam Değişkenleri

- API anahtarları asla depoya gönderilmemeli  
- `.env` dosyaları kullanılmalı (zaten `.gitignore`da)  
- Gerekli ortam değişkenleri proje README’lerinde belgelendirilmeli  

### Python Projeleri

- Sanal ortamlar kullanılmalı: `python -m venv venv`  
- Bağımlılıklar güncel tutulmalı  
- GitHub tokenları minimum yetkilerle kullanılmalı  

### GitHub Modelleri Erişimi

- GitHub Modelleri için Kişisel Erişim Tokenları (PAT) gerekli  
- Tokenlar ortam değişkeni olarak saklanmalı  
- Tokenlar veya kimlik bilgileri asla depoya gönderilmemeli  

## Ek Notlar

### Hedef Kitle

- Web geliştirmeye tamamen yeni başlayanlar  
- Öğrenciler ve kendi kendine öğrenenler  
- Müfredatı sınıflarda kullanan öğretmenler  
- İçerik erişilebilirlik ve kademeli beceri geliştirmeye uygun  

### Eğitim Felsefesi

- Proje bazlı öğrenme yaklaşımı  
- Sık bilgi kontrolü (quizler)  
- Uygulamalı kodlama egzersizleri  
- Gerçek dünya uygulama örnekleri  
- Frameworklerden önce temeller üzerine odaklanma  

### Depo Bakımı

- Aktif öğrenenler ve katkıcılar topluluğu  
- Bağımlılık ve içerik düzenli güncellenir  
- Maliyet ve tartışmalar bakımcılar tarafından takip edilir  
- Çeviri güncellemeleri GitHub Actions ile otomatik  

### İlgili Kaynaklar

- [Microsoft Learn modülleri](https://docs.microsoft.com/learn/)  
- [Öğrenci Merkezi kaynakları](https://docs.microsoft.com/learn/student-hub/)  
- Öğrenenler için [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) önerilir  
- Ek kurslar: Üretken AI, Veri Bilimi, ML, Nesnelerin İnterneti müfredatları mevcut  

### Belirli Projelerle Çalışma

Detaylı talimatlar için ilgili projelerin README dosyalarına bakınız:  
- `quiz-app/README.md` - Vue 3 quiz uygulaması  
- `7-bank-project/README.md` - Kimlik doğrulamalı bankacılık uygulaması  
- `5-browser-extension/README.md` - Tarayıcı uzantısı geliştirme  
- `6-space-game/README.md` - Canvas tabanlı oyun geliştirme  
- `9-chat-project/README.md` - AI sohbet asistanı projesi  

### Monorepo Yapısı

Geleneksel monorepo olmasa da bu depo birçok bağımsız proje içerir:  
- Her ders kendi içinde kapalıdır  
- Projeler bağımlılık paylaşmaz  
- Projeler üzerinde birbirini etkilemeden çalışabilirsiniz  
- Tam müfredat deneyimi için tüm repo klonlanabilir

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayınız. Orijinal belge, kendi dilinde yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımı sonucu oluşabilecek yanlış anlamalar veya yanlış yorumlamalardan sorumlu değiliz.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->