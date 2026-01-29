# HTML Uygulama Ödevi: Blog Taslağı Oluşturma

## Öğrenme Hedefleri

HTML bilginizi kullanarak tam bir blog ana sayfa yapısı tasarlayıp kodlayın. Bu uygulamalı ödev, semantik HTML kavramlarını, erişilebilirlik en iyi uygulamalarını ve profesyonel kod organizasyonu becerilerini pekiştirmenize yardımcı olacak. Bu beceriler, web geliştirme yolculuğunuz boyunca kullanacağınız temel yetkinliklerdir.

**Bu ödevi tamamlayarak:**
- Web sitesi düzenini kodlamadan önce planlama pratiği yapacaksınız
- Semantik HTML öğelerini uygun şekilde uygulayacaksınız
- Erişilebilir, iyi yapılandırılmış bir işaretleme oluşturacaksınız
- Yorumlar ve organizasyon ile profesyonel kodlama alışkanlıkları geliştireceksiniz

## Proje Gereksinimleri

### Bölüm 1: Tasarım Planlama (Görsel Taslak)

**Blog ana sayfanızın görsel bir taslağını oluşturun ve şunları dahil edin:**
- Site başlığı ve navigasyon içeren bir üst bilgi
- En az 2-3 blog yazısı önizlemesi içeren ana içerik alanı
- Ek bilgiler (hakkında bölümü, son yazılar, kategoriler) içeren bir yan panel
- İletişim bilgileri veya bağlantılar içeren bir alt bilgi

**Taslak Oluşturma Seçenekleri:**
- **Elle çizim**: Kağıt ve kalem kullanarak çizin, ardından tasarımınızı fotoğraflayın veya tarayın
- **Dijital araçlar**: Figma, Adobe XD, Canva, PowerPoint veya herhangi bir çizim uygulaması
- **Wireframe araçları**: Balsamiq, MockFlow veya benzeri wireframe yazılımları

**Taslak bölümlerinizi** kullanmayı planladığınız HTML öğeleriyle etiketleyin (örneğin, "Üst Bilgi - `<header>`", "Blog Yazıları - `<article>`").

### Bölüm 2: HTML Öğesi Planlama

**Taslağınızdaki her bölümü belirli HTML öğeleriyle eşleştiren bir liste oluşturun:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Dahil Edilmesi Gereken Öğeler:**
HTML kodunuzda aşağıdaki listeden en az 10 farklı semantik öğe bulunmalıdır:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Bölüm 3: HTML Uygulaması

**Blog ana sayfanızı aşağıdaki standartlara uygun şekilde kodlayın:**

1. **Belge Yapısı**: Doğru DOCTYPE, html, head ve body öğelerini dahil edin
2. **Semantik İşaretleme**: HTML öğelerini amaçlarına uygun şekilde kullanın
3. **Erişilebilirlik**: Görseller için uygun alt metinler ve anlamlı bağlantı metinleri ekleyin
4. **Kod Kalitesi**: Tutarlı girintileme ve anlamlı yorumlar kullanın
5. **İçerik**: Gerçekçi blog içeriği ekleyin (yer tutucu metin kullanabilirsiniz)

**Örnek HTML Yapısı:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Blog</title>
</head>
<body>
    <!-- Main site header -->
    <header>
        <h1>My Blog Title</h1>
        <nav>
            <!-- Navigation menu -->
        </nav>
    </header>
    
    <!-- Main content area -->
    <main>
        <!-- Blog posts go here -->
    </main>
    
    <!-- Sidebar content -->
    <aside>
        <!-- Additional information -->
    </aside>
    
    <!-- Site footer -->
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```

### Bölüm 4: Değerlendirme

**Kısa bir değerlendirme yazısı (3-5 cümle) yazın ve şunları ele alın:**
- Hangi HTML öğelerini kullanırken en çok kendinize güvendiniz?
- Planlama veya kodlama sırasında karşılaştığınız zorluklar nelerdi?
- Semantik HTML içeriğinizi organize etmenize nasıl yardımcı oldu?
- Bir sonraki HTML projenizde farklı olarak ne yapardınız?

## Teslim Kontrol Listesi

**Teslim etmeden önce şunları kontrol edin:**
- [ ] HTML öğeleriyle etiketlenmiş görsel taslak
- [ ] Doğru belge yapısına sahip tamamlanmış HTML dosyası
- [ ] Uygun şekilde kullanılan en az 10 farklı semantik HTML öğesi
- [ ] Kod yapınızı açıklayan anlamlı yorumlar
- [ ] Geçerli HTML sözdizimi (tarayıcıda test edin)
- [ ] Sorulara yanıt veren yazılı değerlendirme

## Değerlendirme Rubriği

| Kriter | Mükemmel (4) | Yeterli (3) | Gelişmekte (2) | Başlangıç (1) |
|--------|--------------|-------------|---------------|---------------|
| **Planlama ve Tasarım** | Düzen ve HTML semantik yapısını net bir şekilde anlayan, detaylı ve iyi etiketlenmiş taslak | Çoğu bölümü uygun şekilde etiketlenmiş net taslak | Bazı etiketlemelerle temel bir taslak, genel bir anlayış gösteriyor | Yetersiz veya belirsiz taslak, doğru bölüm tanımlaması eksik |
| **Semantik HTML Kullanımı** | 10+ semantik öğeyi uygun şekilde kullanır, HTML yapısı ve erişilebilirlik konusunda derin bir anlayış gösterir | 8-9 semantik öğeyi doğru kullanır, semantik işaretleme konusunda iyi bir anlayış gösterir | 6-7 semantik öğe kullanır, uygun kullanım konusunda bazı karışıklıklar var | 6'dan az öğe kullanır veya semantik öğeleri yanlış kullanır |
| **Kod Kalitesi ve Organizasyon** | Son derece iyi organize edilmiş, düzgün girintili kod, kapsamlı yorumlar ve kusursuz HTML sözdizimi | İyi organize edilmiş kod, düzgün girintileme, faydalı yorumlar ve geçerli sözdizimi | Çoğunlukla organize edilmiş kod, bazı yorumlar, küçük sözdizimi sorunları | Zayıf organizasyon, minimal yorumlar, birden fazla sözdizimi hatası |
| **Erişilebilirlik ve En İyi Uygulamalar** | Mükemmel erişilebilirlik özellikleri, anlamlı alt metin, doğru başlık hiyerarşisi, tüm modern HTML en iyi uygulamalarını takip eder | İyi erişilebilirlik özellikleri, uygun başlık ve alt metin kullanımı, çoğu en iyi uygulamaları takip eder | Bazı erişilebilirlik özellikleri, temel alt metin ve başlık yapısı | Sınırlı erişilebilirlik özellikleri, zayıf başlık yapısı, en iyi uygulamaları takip etmiyor |
| **Değerlendirme ve Öğrenme** | HTML kavramlarını derinlemesine anlayan ve öğrenme sürecini düşünceli bir şekilde analiz eden içgörülü değerlendirme | Temel kavramları anlayan ve öğrenme süreci hakkında biraz farkındalık gösteren iyi değerlendirme | HTML kavramları veya öğrenme süreci hakkında sınırlı içgörü ile temel değerlendirme | Minimal veya eksik değerlendirme, öğrenilen kavramlar hakkında az anlayış gösteriyor |

## Öğrenme Kaynakları

**Temel Referanslar:**
- [MDN HTML Öğeleri Referansı](https://developer.mozilla.org/docs/Web/HTML/Element) - Tüm HTML öğelerine dair kapsamlı rehber
- [HTML5 Semantik Öğeler](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - Semantik işaretlemeyi anlama
- [Web Erişilebilirlik Kılavuzları](https://www.w3.org/WAI/WCAG21/quickref/) - Erişilebilir web içeriği oluşturma
- [HTML Doğrulayıcı](https://validator.w3.org/) - HTML sözdiziminizi kontrol edin

**Başarı İçin İpuçları:**
- Kod yazmadan önce taslağınızı oluşturun
- HTML yapınızı incelemek için tarayıcının geliştirici araçlarını kullanın
- Sayfanızı farklı ekran boyutlarında test edin (CSS olmadan bile)
- HTML'inizi sesli okuyarak yapının mantıklı olup olmadığını kontrol edin
- Bir ekran okuyucunun sayfa yapınızı nasıl yorumlayacağını düşünün

> 💡 **Unutmayın**: Bu ödev HTML yapısı ve semantik üzerine odaklanmaktadır. Görsel stil konusunda endişelenmeyin – bunun için CSS var! Sayfanız basit görünebilir, ancak iyi yapılandırılmış ve anlamlı olmalıdır.

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çeviriler hata veya yanlışlıklar içerebilir. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan herhangi bir yanlış anlama veya yanlış yorumlama durumunda sorumluluk kabul edilmez.