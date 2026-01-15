<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "effe56ba51c38d7bdfad1ea38288666b",
  "translation_date": "2025-10-22T23:47:14+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/assignment.md",
  "language_code": "tr"
}
-->
# VSCode.dev Kullanarak Özgeçmiş Web Sitesi Oluşturma

Kariyer fırsatlarınızı, becerilerinizi ve deneyimlerinizi interaktif, modern bir formatta sergileyen profesyonel bir özgeçmiş web sitesi oluşturarak dönüştürün. Geleneksel PDF'ler göndermek yerine, niteliklerinizi ve web geliştirme yeteneklerinizi gösteren şık, duyarlı bir web sitesi sunmayı hayal edin.

Bu uygulamalı ödev, VSCode.dev becerilerinizi pratikte kullanmanızı sağlarken kariyeriniz için gerçekten faydalı bir şey yaratmanıza olanak tanır. Tüm web geliştirme iş akışını – depo oluşturmadan yayına kadar – tamamen tarayıcınızda deneyimleyeceksiniz.

Bu projeyi tamamladığınızda, potansiyel işverenlerle kolayca paylaşabileceğiniz, becerileriniz geliştikçe güncelleyebileceğiniz ve kişisel markanıza uygun şekilde özelleştirebileceğiniz profesyonel bir çevrimiçi varlığa sahip olacaksınız. Bu, gerçek dünya web geliştirme becerilerini gösteren tam anlamıyla pratik bir projedir.

## Öğrenme Hedefleri

Bu ödevi tamamladıktan sonra şunları yapabileceksiniz:

- VSCode.dev kullanarak eksiksiz bir web geliştirme projesi **oluşturmak** ve yönetmek
- Semantik HTML öğelerini kullanarak profesyonel bir web sitesi **yapılandırmak**
- Modern CSS teknikleriyle duyarlı düzenler **tasarlamak**
- Temel web teknolojilerini kullanarak interaktif özellikler **uygulamak**
- Paylaşılabilir bir URL aracılığıyla erişilebilen canlı bir web sitesi **yayınlamak**
- Geliştirme süreci boyunca versiyon kontrolü en iyi uygulamalarını **göstermek**

## Ön Koşullar

Bu ödeve başlamadan önce şunlara sahip olduğunuzdan emin olun:

- Bir GitHub hesabı ([github.com](https://github.com/) adresinden oluşturabilirsiniz)
- VSCode.dev dersini tamamlamış olmak (arayüz navigasyonu ve temel işlemler hakkında bilgi sahibi olmak)
- HTML yapısı ve CSS stil kavramları hakkında temel bilgi

## Proje Kurulumu ve Depo Oluşturma

Proje temelini oluşturarak başlayalım. Bu süreç, projelerin doğru depo başlatma ve yapı planlaması ile başladığı gerçek dünya geliştirme iş akışlarını yansıtır.

### Adım 1: GitHub Deposu Oluşturma

Özel bir depo oluşturmak, projenizin başından itibaren düzgün bir şekilde organize edilmesini ve versiyon kontrolü yapılmasını sağlar.

1. [GitHub.com](https://github.com) adresine gidin ve hesabınıza giriş yapın
2. Sağ üst köşedeki yeşil "New" düğmesine veya "+" simgesine **tıklayın**
3. Depoya `my-resume` adını verin (veya `john-smith-resume` gibi kişiselleştirilmiş bir ad seçin)
4. Kısa bir açıklama ekleyin: "HTML ve CSS ile oluşturulmuş profesyonel özgeçmiş web sitesi"
5. Özgeçmişinizi potansiyel işverenlere erişilebilir kılmak için "Public" seçeneğini **seçin**
6. İlk proje açıklamasını oluşturmak için "Add a README file" kutusunu **işaretleyin**
7. Kurulumu tamamlamak için "Create repository" düğmesine **tıklayın**

> 💡 **Depo Adı İpucu**: Projenin amacını açıkça belirten açıklayıcı, profesyonel isimler kullanın. Bu, işverenlerle paylaşırken veya portföy incelemelerinde yardımcı olur.

### Adım 2: Proje Yapısını Başlatma

VSCode.dev'in bir depoyu açması için en az bir dosya gerektirdiğinden, web düzenleyicisine geçmeden önce ana HTML dosyamızı doğrudan GitHub'da oluşturacağız.

1. Yeni deponuzda "creating a new file" bağlantısına **tıklayın**
2. Dosya adı olarak `index.html` yazın
3. Bu başlangıç HTML yapısını ekleyin:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Professional Resume</title>
</head>
<body>
    <h1>Your Name</h1>
    <p>Professional Resume Website</p>
</body>
</html>
```

4. Bir commit mesajı yazın: "Add initial HTML structure"
5. Değişikliklerinizi kaydetmek için "Commit new file" düğmesine **tıklayın**

![GitHub'da ilk dosyayı oluşturma](../../../../translated_images/tr/new-file-github.com.c886796d800e8056.png)

**Bu başlangıç kurulumu şunları sağlar:**
- HTML5 belge yapısını semantik öğelerle **oluşturur**
- Duyarlı tasarım uyumluluğu için viewport meta etiketini **ekler**
- Tarayıcı sekmelerinde görünen açıklayıcı bir sayfa başlığı **ayarlar**
- Profesyonel içerik organizasyonu için temel **oluşturur**

## VSCode.dev'de Çalışma

Depo temeliniz oluşturulduğuna göre, ana geliştirme çalışmaları için VSCode.dev'e geçelim. Bu web tabanlı düzenleyici, profesyonel web geliştirme için gereken tüm araçları sağlar.

### Adım 3: Projenizi VSCode.dev'de Açma

1. Yeni bir tarayıcı sekmesinde [vscode.dev](https://vscode.dev) adresine **gidin**
2. Karşılama ekranında "Open Remote Repository" seçeneğine **tıklayın**
3. GitHub'dan depo URL'nizi kopyalayın ve giriş alanına yapıştırın

   Format: `https://github.com/your-username/my-resume`
   
   *`your-username` kısmını gerçek GitHub kullanıcı adınızla değiştirin*

4. Projenizi yüklemek için Enter tuşuna **basın**

✅ **Başarı göstergesi**: Proje dosyalarınızı Explorer yan çubuğunda ve `index.html` dosyasını düzenleme için ana düzenleyici alanında görmelisiniz.

![VSCode.dev'de yüklenen proje](../../../../translated_images/tr/project-on-vscode.dev.e79815a9a95ee7fe.png)

**Arayüzde göreceğiniz şeyler:**
- **Explorer yan çubuğu**: Depo dosyalarınızı ve klasör yapınızı **gösterir**
- **Düzenleyici alanı**: Seçilen dosyaların içeriğini düzenlemek için **gösterir**
- **Etkinlik çubuğu**: Kaynak Kontrol ve Uzantılar gibi özelliklere erişim **sağlar**
- **Durum çubuğu**: Bağlantı durumu ve mevcut dal bilgilerini **gösterir**

### Adım 4: Özgeçmiş İçeriğinizi Oluşturma

`index.html` dosyasındaki yer tutucu içeriği, kapsamlı bir özgeçmiş yapısıyla değiştirin. Bu HTML, niteliklerinizi profesyonel bir şekilde sunmak için temel sağlar.

<details>
<summary><b>Eksiksiz HTML Özgeçmiş Yapısı</b></summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <title>Your Name - Professional Resume</title>
</head>
<body>
    <header id="header">
        <h1>Your Full Name</h1>
        <hr>
        <p class="role">Your Professional Title</p>
        <hr>
    </header>
    
    <main>
        <article id="mainLeft">
            <section>
                <h2>CONTACT</h2>
                <p>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <a href="mailto:your.email@domain.com">your.email@domain.com</a>
                </p>
                <p>
                    <i class="fab fa-github" aria-hidden="true"></i>
                    <a href="https://github.com/your-username">github.com/your-username</a>
                </p>
                <p>
                    <i class="fab fa-linkedin" aria-hidden="true"></i>
                    <a href="https://linkedin.com/in/your-profile">linkedin.com/in/your-profile</a>
                </p>
            </section>
            
            <section>
                <h2>SKILLS</h2>
                <ul>
                    <li>HTML5 & CSS3</li>
                    <li>JavaScript (ES6+)</li>
                    <li>Responsive Web Design</li>
                    <li>Version Control (Git)</li>
                    <li>Problem Solving</li>
                </ul>
            </section>
            
            <section>
                <h2>EDUCATION</h2>
                <h3>Your Degree or Certification</h3>
                <p>Institution Name</p>
                <p>Start Date - End Date</p>
            </section>
        </article>
        
        <article id="mainRight">
            <section>
                <h2>ABOUT</h2>
                <p>Write a compelling summary that highlights your passion for web development, key achievements, and career goals. This section should give employers insight into your personality and professional approach.</p>
            </section>
            
            <section>
                <h2>WORK EXPERIENCE</h2>
                <div class="job">
                    <h3>Job Title</h3>
                    <p class="company">Company Name | Start Date – End Date</p>
                    <ul>
                        <li>Describe a key accomplishment or responsibility</li>
                        <li>Highlight specific skills or technologies used</li>
                        <li>Quantify impact where possible (e.g., "Improved efficiency by 25%")</li>
                    </ul>
                </div>
                
                <div class="job">
                    <h3>Previous Job Title</h3>
                    <p class="company">Previous Company | Start Date – End Date</p>
                    <ul>
                        <li>Focus on transferable skills and achievements</li>
                        <li>Demonstrate growth and learning progression</li>
                        <li>Include any leadership or collaboration experiences</li>
                    </ul>
                </div>
            </section>
            
            <section>
                <h2>PROJECTS</h2>
                <div class="project">
                    <h3>Project Name</h3>
                    <p>Brief description of what the project accomplishes and technologies used.</p>
                    <a href="#" target="_blank">View Project</a>
                </div>
            </section>
        </article>
    </main>
</body>
</html>
```
</details>

**Özelleştirme yönergeleri:**
- Tüm yer tutucu metni kendi gerçek bilgilerinizle **değiştirin**
- Deneyim seviyenize ve kariyer odaklarınıza göre bölümleri **ayarlayın**
- Gerekirse bölümler ekleyin veya çıkarın (örneğin, Sertifikalar, Gönüllü Çalışmalar, Diller)
- Gerçek profillerinize ve projelerinize bağlantılar **ekleyin**

### Adım 5: Destekleyici Dosyalar Oluşturma

Profesyonel web siteleri, düzenli dosya yapıları gerektirir. Eksiksiz bir proje için gerekli olan CSS stil dosyasını ve yapılandırma dosyalarını oluşturun.

1. Explorer yan çubuğunda proje klasörünüzün üzerine **gelin**
2. Görünen "Yeni Dosya" simgesine (📄+) **tıklayın**
3. Bu dosyaları tek tek **oluşturun**:
   - `style.css` (stil ve düzen için)
   - `codeswing.json` (önizleme uzantısı yapılandırması için)

**CSS dosyasını oluşturma (`style.css`):**

<details>
<summary><b>Profesyonel CSS Stili</b></summary>

```css
/* Modern Resume Styling */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    color: #333;
    background-color: #f9f9f9;
}

/* Header Styling */
header {
    text-align: center;
    margin-bottom: 3em;
    padding: 2em;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 3em;
    letter-spacing: 0.1em;
    margin-bottom: 0.2em;
    font-weight: 300;
}

.role {
    font-size: 1.3em;
    font-weight: 300;
    margin: 1em 0;
}

/* Main Content Layout */
main {
    display: grid;
    grid-template-columns: 35% 65%;
    gap: 3em;
    margin-top: 3em;
    background: white;
    padding: 2em;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Typography */
h2 {
    font-size: 1.4em;
    font-weight: 600;
    margin-bottom: 1em;
    color: #667eea;
    border-bottom: 2px solid #667eea;
    padding-bottom: 0.3em;
}

h3 {
    font-size: 1.1em;
    font-weight: 600;
    margin-bottom: 0.5em;
    color: #444;
}

/* Section Styling */
section {
    margin-bottom: 2.5em;
}

#mainLeft {
    border-right: 1px solid #e0e0e0;
    padding-right: 2em;
}

/* Contact Links */
section a {
    color: #667eea;
    text-decoration: none;
    transition: color 0.3s ease;
}

section a:hover {
    color: #764ba2;
    text-decoration: underline;
}

/* Icons */
i {
    margin-right: 0.8em;
    width: 20px;
    text-align: center;
    color: #667eea;
}

/* Lists */
ul {
    list-style: none;
    padding-left: 0;
}

li {
    margin: 0.5em 0;
    padding: 0.3em 0;
    position: relative;
}

li:before {
    content: "▸";
    color: #667eea;
    margin-right: 0.5em;
}

/* Work Experience */
.job, .project {
    margin-bottom: 2em;
    padding-bottom: 1.5em;
    border-bottom: 1px solid #f0f0f0;
}

.company {
    font-style: italic;
    color: #666;
    margin-bottom: 0.5em;
}

/* Responsive Design */
@media (max-width: 768px) {
    main {
        grid-template-columns: 1fr;
        gap: 2em;
    }
    
    #mainLeft {
        border-right: none;
        border-bottom: 1px solid #e0e0e0;
        padding-right: 0;
        padding-bottom: 2em;
    }
    
    h1 {
        font-size: 2.2em;
    }
    
    body {
        padding: 10px;
    }
}

/* Print Styles */
@media print {
    body {
        background: white;
        color: black;
        font-size: 12pt;
    }
    
    header {
        background: none;
        color: black;
        box-shadow: none;
    }
    
    main {
        box-shadow: none;
    }
}
```
</details>

**Yapılandırma dosyasını oluşturma (`codeswing.json`):**

```json
{
    "scripts": [],
    "styles": []
}
```

**CSS özelliklerini anlama:**
- Duyarlı, profesyonel düzen yapısı için CSS Grid **kullanır**
- Gradient başlıklarla modern renk şemaları **uygular**
- Etkileşim için hover efektleri ve yumuşak geçişler **ekler**
- Tüm cihaz boyutlarında çalışan duyarlı tasarım **sağlar**
- PDF oluşturma için yazdırma dostu stiller **ekler**

### Adım 6: Uzantıları Yükleme ve Yapılandırma

Uzantılar, geliştirme deneyiminizi iyileştirerek canlı önizleme yetenekleri ve geliştirilmiş iş akışı araçları sağlar. CodeSwing uzantısı, özellikle web geliştirme projeleri için oldukça kullanışlıdır.

**CodeSwing Uzantısını Yükleme:**

1. Etkinlik Çubuğunda Uzantılar simgesine (🧩) **tıklayın**
2. Pazar yeri arama kutusunda "CodeSwing" arayın
3. Arama sonuçlarından CodeSwing uzantısını **seçin**
4. Mavi "Install" düğmesine **tıklayın**

![CodeSwing uzantısını yükleme](../../../../8-code-editor/images/install-extension.gif)

**CodeSwing'in sağladıkları:**
- Düzenleme yaparken web sitenizin canlı önizlemesini **etkinleştirir**
- Manuel yenileme olmadan değişiklikleri gerçek zamanlı olarak **gösterir**
- HTML, CSS ve JavaScript dahil olmak üzere birden fazla dosya türünü **destekler**
- Entegre bir geliştirme ortamı deneyimi **sağlar**

**Yükleme sonrası anında sonuçlar:**
CodeSwing yüklendikten sonra, özgeçmiş web sitenizin canlı önizlemesi düzenleyicide görünür. Bu, siteyi düzenlerken tam olarak nasıl göründüğünü görmenizi sağlar.

![CodeSwing uzantısı canlı önizleme gösteriyor](../../../../translated_images/tr/after-codeswing-extension-pb.0ebddddcf73b5509.png)

**Geliştirilmiş arayüzü anlama:**
- **Bölünmüş görünüm**: Kodunuzu bir tarafta ve canlı önizlemeyi diğer tarafta **gösterir**
- **Gerçek zamanlı güncellemeler**: Yazarken değişiklikleri anında **yansıtır**
- **Etkileşimli önizleme**: Bağlantıları ve etkileşimleri test etmenize **olanak tanır**
- **Mobil simülasyon**: Duyarlı tasarım test yetenekleri **sağlar**

### Adım 7: Versiyon Kontrolü ve Yayınlama

Artık özgeçmiş web siteniz tamamlandığına göre, Git'i kullanarak çalışmalarınızı kaydedin ve çevrimiçi olarak erişilebilir hale getirin.

**Değişikliklerinizi kaydetme:**

1. Etkinlik Çubuğunda Kaynak Kontrol simgesine (🌿) **tıklayın**
2. "Changes" bölümünde oluşturduğunuz ve değiştirdiğiniz tüm dosyaları **gözden geçirin**
3. Her dosyanın yanındaki "+" simgesine **tıklayarak** değişikliklerinizi aşamalı hale getirin
4. Açıklayıcı bir commit mesajı yazın, örneğin:
   - "Duyarlı tasarımla eksiksiz özgeçmiş web sitesi eklendi"
   - "Profesyonel stil ve içerik yapısı uygulandı"
5. Değişikliklerinizi commit ve push etmek için onay işaretine (✓) **tıklayın**

**Etkili commit mesajı örnekleri:**
- "Profesyonel özgeçmiş içeriği ve stili eklendi"
- "Mobil uyumluluk için duyarlı tasarım uygulandı"
- "İletişim bilgileri ve proje bağlantıları güncellendi"

> 💡 **Profesyonel İpucu**: İyi yazılmış commit mesajları, projenizin evrimini takip etmeye yardımcı olur ve detaylara gösterilen özeni ortaya koyar – işverenlerin değer verdiği nitelikler.

**Yayınlanmış sitenize erişim:**
Commit işlemi tamamlandıktan sonra, sol üst köşedeki hamburger menüsünü (☰) kullanarak GitHub deponuza geri dönebilirsiniz. Özgeçmiş web siteniz artık versiyon kontrolüne alınmış ve yayına hazır.

## Sonuçlar ve Sonraki Adımlar

**Tebrikler! 🎉** VSCode.dev kullanarak profesyonel bir özgeçmiş web sitesi oluşturmayı başardınız. Projeniz şunları gösteriyor:
**Gösterilen teknik beceriler:**
- **Depo yönetimi**: Eksiksiz bir proje yapısı oluşturma ve düzenleme
- **Web geliştirme**: Modern HTML5 ve CSS3 kullanarak duyarlı bir web sitesi oluşturma
- **Versiyon kontrolü**: Anlamlı commit'lerle doğru bir Git iş akışı uygulama
- **Araç becerisi**: VSCode.dev'in arayüzünü ve uzantı sistemini etkili bir şekilde kullanma

**Elde edilen profesyonel sonuçlar:**
- **Çevrimiçi varlık**: Niteliklerinizi sergileyen paylaşılabilir bir URL
- **Modern format**: Geleneksel PDF özgeçmişlere interaktif bir alternatif
- **Gösterilebilir beceriler**: Web geliştirme yeteneklerinizin somut kanıtı
- **Kolay güncellemeler**: Sürekli geliştirebileceğiniz ve özelleştirebileceğiniz bir temel

### Yayınlama Seçenekleri

Özgeçmişinizi işverenlere erişilebilir kılmak için şu barındırma seçeneklerini değerlendirin:

**GitHub Pages (Önerilen):**
1. GitHub'da depo Ayarlarına gidin
2. "Pages" bölümüne kadar aşağı kaydırın
3. "Deploy from a branch" seçeneğini seçin ve "main" dalını seçin
4. Siteniz şu adreste erişilebilir olacak: `https://your-username.github.io/my-resume`

**Alternatif platformlar:**
- **Netlify**: Özel alan adlarıyla otomatik yayınlama
- **Vercel**: Modern barındırma özellikleriyle hızlı yayınlama
- **GitHub Codespaces**: Entegre önizleme ile geliştirme ortamı

### Geliştirme Önerileri

Beceri setinizi geliştirmeye devam ederek şu özellikleri ekleyebilirsiniz:

**Teknik iyileştirmeler:**
- **JavaScript etkileşimi**: Yumuşak kaydırma veya interaktif öğeler ekleyin
- **Karanlık mod geçişi**: Kullanıcı tercihi için tema değiştirme özelliği ekleyin
- **İletişim formu**: Potansiyel işverenlerle doğrudan iletişim sağlayın
- **SEO optimizasyonu**: Daha iyi arama görünürlüğü için meta etiketler ve yapılandırılmış veri ekleyin

**İçerik geliştirmeleri:**
- **Proje portföyü**: GitHub depolarına ve canlı demolarına bağlantılar ekleyin
- **Beceri görselleştirme**: İlerleme çubukları veya beceri derecelendirme sistemleri oluşturun
- **Referanslar bölümü**: Meslektaşlarınızdan veya eğitmenlerinizden öneriler ekleyin
- **Blog entegrasyonu**: Öğrenme yolculuğunuzu sergilemek için bir blog bölümü ekleyin

## GitHub Copilot Agent Challenge 🚀

Agent modunu kullanarak aşağıdaki meydan okumayı tamamlayın:

**Açıklama:** Profesyonel web geliştirme yeteneklerini ve modern tasarım ilkelerini gösteren gelişmiş özelliklerle özgeçmiş web sitenizi geliştirin.

**Talimat:** Mevcut özgeçmiş web sitenizi temel alarak şu gelişmiş özellikleri uygulayın:
1. Karanlık/açık tema geçişi ekleyin ve yumuşak geçişler sağlayın
2. Animasyonlu ilerleme çubuklarıyla interaktif bir beceri bölümü oluşturun
3. Form doğrulama ile bir iletişim formu uygulayın
4. Hover efektleri ve modal pop-up'larla bir proje portföyü bölümü ekleyin
5. Öğrenme yolculuğunuz hakkında en az 3 örnek yazı içeren bir blog bölümü ekleyin
6. SEO için uygun meta etiketler, yapılandırılmış veri ve performans optimizasyonu ekleyin
7. Geliştirilmiş siteyi GitHub Pages veya Netlify kullanarak yayınlayın
8. README.md dosyanızda tüm yeni özellikleri ekran görüntüleriyle belgeleyin

Geliştirilmiş web siteniz, duyarlı tasarım, JavaScript etkileşimi ve profesyonel yayınlama iş akışlarını içeren modern web geliştirme uygulamalarında ustalığınızı göstermelidir.

## Meydan Okuma Uzantısı

Becerilerinizi daha ileriye taşımaya hazır mısınız? Bu gelişmiş meydan okumaları deneyin:

**📱 Mobil-Öncelikli Yeniden Tasarım:** CSS Grid ve Flexbox ile mobil-öncelikli bir yaklaşım kullanarak sitenizi tamamen yeniden oluşturun

**🔍 SEO Optimizasyonu:** Meta etiketler, yapılandırılmış veri ve performans optimizasyonu dahil kapsamlı bir SEO uygulayın

**🌐 Çok Dilli Destek:** Birden fazla dili desteklemek için uluslararasılaştırma özellikleri ekleyin

**📊 Analitik Entegrasyonu:** Ziyaretçi etkileşimini izlemek ve içeriğinizi optimize etmek için Google Analytics ekleyin

**🚀 Performans Optimizasyonu:** Tüm kategorilerde mükemmel Lighthouse puanları elde edin

## İnceleme ve Kendi Kendine Çalışma

Bilginizi şu kaynaklarla genişletin:

**Gelişmiş VSCode.dev Özellikleri:**
- [VSCode.dev Belgeleri](https
- **Erişilebilirlik**: Kapsayıcı web tasarımı için WCAG yönergelerini öğrenin  
- **Performans**: Optimizasyon için Lighthouse gibi araçları keşfedin  
- **SEO**: Arama motoru optimizasyonunun temel prensiplerini anlayın  

**Profesyonel Gelişim:**  
- **Portföy Oluşturma**: Çeşitli becerilerinizi sergilemek için ek projeler oluşturun  
- **Açık Kaynak**: İş birliği deneyimi kazanmak için mevcut projelere katkıda bulunun  
- **Ağ Kurma**: Özgeçmiş web sitenizi geliştirici topluluklarında paylaşarak geri bildirim alın  
- **Sürekli Öğrenme**: Web geliştirme trendleri ve teknolojileriyle güncel kalın  

---

**Sonraki Adımlarınız:** Özgeçmiş web sitenizi arkadaşlarınız, aileniz veya mentorlarınızla paylaşarak geri bildirim alın. Onların önerilerini kullanarak tasarımınızı geliştirin ve iyileştirin. Unutmayın, bu proje sadece bir özgeçmiş değil – aynı zamanda bir web geliştirici olarak büyümenizin bir göstergesi!

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalardan sorumlu değiliz.