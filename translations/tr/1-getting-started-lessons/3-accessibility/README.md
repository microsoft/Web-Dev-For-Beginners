<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e4cd5b1faed4adab5acf720f82798003",
  "translation_date": "2025-08-25T23:03:32+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "tr"
}
-->
# Erişilebilir Web Sayfaları Oluşturma

![Erişilebilirlik Hakkında Her Şey](../../../../translated_images/webdev101-a11y.8ef3025c858d897a403a1a42c0897c76e11b724d9a8a0c0578dd4316f7507622.tr.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ders Öncesi Test
[Ders öncesi testi](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/5)

> Web'in gücü evrenselliğinde yatar. Engellilik durumuna bakılmaksızın herkesin erişimi temel bir unsurdur.
>
> \- Sir Timothy Berners-Lee, W3C Direktörü ve World Wide Web'in mucidi

Bu alıntı, erişilebilir web siteleri oluşturmanın önemini mükemmel bir şekilde vurgular. Herkesin erişemediği bir uygulama, tanımı gereği dışlayıcıdır. Web geliştiricileri olarak her zaman erişilebilirliği göz önünde bulundurmalıyız. Bu odağı baştan itibaren koruyarak, oluşturduğunuz sayfalara herkesin erişebilmesini sağlamaya bir adım daha yaklaşmış olursunuz. Bu derste, web varlıklarınızın erişilebilir olduğundan emin olmanıza yardımcı olacak araçları ve erişilebilirlik düşüncesiyle nasıl geliştirme yapacağınızı öğreneceksiniz.

> Bu dersi [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon) üzerinden alabilirsiniz!

## Kullanılacak Araçlar

### Ekran okuyucular

En bilinen erişilebilirlik araçlarından biri ekran okuyuculardır.

[Ekran okuyucular](https://en.wikipedia.org/wiki/Screen_reader), görme engelli bireyler için yaygın olarak kullanılan araçlardır. Bir tarayıcının paylaşmak istediğimiz bilgiyi doğru bir şekilde iletmesini sağlamak için zaman harcadığımız gibi, bir ekran okuyucunun da aynı şeyi yapmasını sağlamalıyız.

En temel haliyle, bir ekran okuyucu bir sayfayı yukarıdan aşağıya doğru sesli bir şekilde okur. Sayfanız tamamen metin içeriyorsa, okuyucu bilgiyi bir tarayıcıya benzer şekilde iletecektir. Ancak, web sayfaları nadiren yalnızca metinden oluşur; bağlantılar, grafikler, renkler ve diğer görsel bileşenler içerir. Bu bilgilerin bir ekran okuyucu tarafından doğru bir şekilde okunmasını sağlamak önemlidir.

Her web geliştiricisi bir ekran okuyucuyla tanışmalıdır. Yukarıda belirtildiği gibi, bu araç kullanıcılarınızın kullanacağı bir istemcidir. Bir tarayıcının nasıl çalıştığını bildiğiniz gibi, bir ekran okuyucunun nasıl çalıştığını da öğrenmelisiniz. Neyse ki, ekran okuyucular çoğu işletim sistemine entegre edilmiştir.

Bazı tarayıcılar ayrıca metni sesli okuma veya temel gezinme özellikleri sağlayan yerleşik araçlar ve uzantılar sunar, örneğin [bu erişilebilirlik odaklı Edge tarayıcı araçları](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features). Ancak, bu araçlar ekran okuyucu test araçlarıyla karıştırılmamalıdır.

✅ Bir ekran okuyucu ve tarayıcı metin okuyucusunu deneyin. Windows'ta [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) varsayılan olarak bulunur ve [JAWS](https://webaim.org/articles/jaws/) ile [NVDA](https://www.nvaccess.org/about-nvda/) da yüklenebilir. macOS ve iOS'ta [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) varsayılan olarak yüklüdür.

### Yakınlaştırma

Görme engelli bireyler tarafından yaygın olarak kullanılan bir diğer araç yakınlaştırmadır. En temel yakınlaştırma türü, `Control + artı işareti (+)` ile kontrol edilen veya ekran çözünürlüğünü düşürerek yapılan statik yakınlaştırmadır. Bu tür bir yakınlaştırma, tüm sayfanın yeniden boyutlandırılmasına neden olur, bu nedenle [duyarlı tasarım](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) kullanmak, artırılmış yakınlaştırma seviyelerinde iyi bir kullanıcı deneyimi sağlamak için önemlidir.

Bir diğer yakınlaştırma türü, ekranın bir alanını büyütmek ve bir büyüteç gibi kaydırmak için özel yazılımlara dayanır. Windows'ta [Magnifier](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) yerleşiktir ve [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) daha fazla özellik ve daha geniş bir kullanıcı kitlesine sahip üçüncü taraf bir büyütme yazılımıdır. Hem macOS hem de iOS'ta [Zoom](https://www.apple.com/accessibility/mac/vision/) adlı yerleşik bir büyütme yazılımı bulunur.

### Kontrast denetleyiciler

Web sitelerindeki renkler, renk körlüğü olan kullanıcıların veya düşük kontrastlı renkleri görmekte zorlanan kişilerin ihtiyaçlarını karşılayacak şekilde dikkatlice seçilmelidir.

✅ Sevdiğiniz bir web sitesini bir tarayıcı uzantısı kullanarak, örneğin [WCAG'ın renk denetleyicisi](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon) ile test edin. Ne öğreniyorsunuz?

### Lighthouse

Tarayıcınızın geliştirici araçları alanında Lighthouse aracı bulunur. Bu araç, bir web sitesinin erişilebilirliği (ve diğer analizleri) hakkında ilk bir bakış elde etmek için önemlidir. Lighthouse'a tamamen güvenmemek önemli olsa da, %100'lük bir puan başlangıç için oldukça faydalıdır.

✅ Tarayıcınızın geliştirici araçları panelinde Lighthouse'u bulun ve herhangi bir site üzerinde bir analiz çalıştırın. Ne keşfediyorsunuz?

## Erişilebilirlik için Tasarım

Erişilebilirlik oldukça geniş bir konudur. Size yardımcı olmak için birçok kaynak mevcuttur.

- [Accessible U - Minnesota Üniversitesi](https://accessibility.umn.edu/your-role/web-developers)

Her ne kadar erişilebilir siteler oluşturmanın her yönünü ele alamayacak olsak da, aşağıda uygulamak isteyeceğiniz bazı temel ilkeler bulunmaktadır. Baştan erişilebilir bir sayfa tasarlamak, mevcut bir sayfayı sonradan erişilebilir hale getirmekten **her zaman** daha kolaydır.

## İyi Görüntüleme İlkeleri

### Renk güvenli paletler

İnsanlar dünyayı farklı şekillerde görür ve bu renkleri de içerir. Siteniz için bir renk şeması seçerken, herkes için erişilebilir olduğundan emin olmalısınız. [Color Safe](http://colorsafe.co/) gibi harika bir araç, renk paletleri oluşturmanıza yardımcı olabilir.

✅ Renk kullanımı açısından çok sorunlu bir web sitesi belirleyin. Neden?

### Doğru HTML kullanın

CSS ve JavaScript ile herhangi bir öğeyi herhangi bir kontrol türü gibi göstermek mümkündür. `<span>` bir `<button>` haline getirilebilir ve `<b>` bir bağlantıya dönüşebilir. Bu, stil vermeyi daha kolay hale getirebilir gibi görünse de, bir ekran okuyucuya hiçbir şey iletmez. Sayfada kontroller oluştururken uygun HTML'yi kullanın. Bir bağlantı istiyorsanız, `<a>` kullanın. Doğru kontrol için doğru HTML'yi kullanmak, Anlamsal HTML kullanımı olarak adlandırılır.

✅ Herhangi bir web sitesine gidin ve tasarımcıların ve geliştiricilerin HTML'yi doğru kullanıp kullanmadığını kontrol edin. Bir bağlantı olması gereken bir düğme bulabilir misiniz? İpucu: Tarayıcınızda sağ tıklayın ve 'Sayfa Kaynağını Görüntüle' seçeneğini seçin.

### Açıklayıcı bir başlık hiyerarşisi oluşturun

Ekran okuyucu kullanıcıları, [başlıklara büyük ölçüde güvenir](https://webaim.org/projects/screenreadersurvey8/#finding) ve bir sayfada bilgi bulmak ve gezinmek için başlıkları kullanır. Açıklayıcı başlık içerikleri yazmak ve anlamsal başlık etiketleri kullanmak, ekran okuyucu kullanıcıları için kolayca gezilebilir bir site oluşturmak açısından önemlidir.

### İyi görsel ipuçları kullanın

CSS, bir sayfadaki herhangi bir öğenin görünümü üzerinde tam kontrol sağlar. Çerçevesiz metin kutuları veya alt çizgisiz bağlantılar oluşturabilirsiniz. Ancak, bu ipuçlarını kaldırmak, onlara bağımlı olan birinin kontrol türünü tanımasını daha zor hale getirebilir.

## Bağlantı Metninin Önemi

Bağlantılar, webde gezinmenin temelidir. Bu nedenle, bir ekran okuyucunun bağlantıları doğru bir şekilde okuyabilmesini sağlamak, tüm kullanıcıların sitenizde gezinmesine olanak tanır.

### Ekran okuyucular ve bağlantılar

Beklediğiniz gibi, ekran okuyucular bağlantı metnini sayfadaki diğer metinler gibi okur. Bu bağlamda, aşağıda gösterilen metin kabul edilebilir görünebilir.

> Küçük penguen, bazen peri pengueni olarak da bilinir, dünyadaki en küçük penguendir. Daha fazla bilgi için [buraya tıklayın](https://en.wikipedia.org/wiki/Little_penguin).

> Küçük penguen, bazen peri pengueni olarak da bilinir, dünyadaki en küçük penguendir. Daha fazla bilgi için https://en.wikipedia.org/wiki/Little_penguin adresini ziyaret edin.

> **NOT**: Az sonra okuyacağınız gibi, yukarıdaki gibi bağlantılar **asla** oluşturulmamalıdır.

Unutmayın, ekran okuyucular tarayıcılardan farklı bir arayüze ve farklı bir özellik setine sahiptir.

### URL kullanmanın sorunu

Ekran okuyucular metni okur. Metinde bir URL varsa, ekran okuyucu URL'yi okur. Genel olarak konuşursak, URL anlamlı bir bilgi iletmez ve rahatsız edici olabilir. Telefonunuzun bir metin mesajındaki bir URL'yi sesli okuduğu bir durumu yaşamış olabilirsiniz.

### "Buraya tıklayın" kullanmanın sorunu

Ekran okuyucular, bir sayfadaki yalnızca bağlantıları okuma yeteneğine de sahiptir, tıpkı gören bir kişinin bağlantıları taraması gibi. Eğer bağlantı metni sürekli "buraya tıklayın" ise, kullanıcı yalnızca "buraya tıklayın, buraya tıklayın, buraya tıklayın, buraya tıklayın, buraya tıklayın, ..." şeklinde bir şey duyacaktır. Tüm bağlantılar birbirinden ayırt edilemez hale gelir.

### İyi bağlantı metni

İyi bağlantı metni, bağlantının diğer tarafında ne olduğunu kısaca açıklar. Yukarıdaki küçük penguenlerle ilgili örnekte, bağlantı türü Wikipedia sayfasına yönlendiriyor. *Küçük penguenler* ifadesi, birinin bağlantıya tıkladığında ne öğreneceğini açıkça belirttiği için mükemmel bir bağlantı metni olur.

> [Küçük penguen](https://en.wikipedia.org/wiki/Little_penguin), bazen peri pengueni olarak da bilinir, dünyadaki en küçük penguendir.

✅ Birkaç dakika boyunca internette gezinerek belirsiz bağlantı stratejileri kullanan sayfalar bulun. Bunları daha iyi bağlantılandırılmış sitelerle karşılaştırın. Ne öğreniyorsunuz?

#### Arama motoru notları

Sitenizin herkes için erişilebilir olmasını sağlamakla birlikte, arama motorlarının sitenizde gezinmesine de yardımcı olursunuz. Arama motorları, sayfaların konularını öğrenmek için bağlantı metnini kullanır. Bu nedenle, iyi bağlantı metni kullanmak herkes için faydalıdır!

### ARIA

Aşağıdaki sayfayı hayal edin:

| Ürün         | Açıklama           | Sipariş      |
| ------------ | ------------------ | ------------ |
| Widget       | [Açıklama](../../../../1-getting-started-lessons/3-accessibility/')    | [Sipariş](../../../../1-getting-started-lessons/3-accessibility/') |
| Süper widget | [Açıklama](../../../../1-getting-started-lessons/3-accessibility/')    | [Sipariş](../../../../1-getting-started-lessons/3-accessibility/') |

Bu örnekte, açıklama ve sipariş metnini çoğaltmak bir tarayıcı kullanan biri için mantıklıdır. Ancak, bir ekran okuyucu kullanan biri yalnızca *açıklama* ve *sipariş* kelimelerini tekrar tekrar duyacaktır.

Bu tür senaryoları desteklemek için, HTML [Erişilebilir Zengin İnternet Uygulamaları (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) olarak bilinen bir dizi özelliği destekler. Bu özellikler, ekran okuyuculara ek bilgi sağlamanıza olanak tanır.

> **NOT**: HTML'nin birçok yönü gibi, tarayıcı ve ekran okuyucu desteği değişiklik gösterebilir. Ancak, çoğu ana akım istemci ARIA özelliklerini destekler.

`aria-label` kullanarak, sayfanın formatının izin vermediği durumlarda bağlantıyı tanımlayabilirsiniz. Widget için açıklama şu şekilde ayarlanabilir:

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ Genel olarak, yukarıda açıklandığı gibi Anlamsal işaretleme kullanımı, ARIA kullanımının önüne geçer, ancak bazen çeşitli HTML bileşenleri için anlamsal bir eşdeğer yoktur. İyi bir örnek, bir Ağaçtır. Ağacın HTML eşdeğeri yoktur, bu nedenle bu öğe için genel `<div>` öğesini uygun bir rol ve aria değerleriyle tanımlarsınız. [MDN'nin ARIA belgeleri](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) daha fazla faydalı bilgi içerir.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Görseller

Ekran okuyucuların bir görselde ne olduğunu otomatik olarak okuyamadığı açıktır. Görsellerin erişilebilir olmasını sağlamak çok fazla çaba gerektirmez - bu, `alt` özelliğinin amacıdır. Tüm anlamlı görseller, ne olduklarını açıklayan bir `alt` özelliğine sahip olmalıdır. 
Tamamen dekoratif olan görsellerin `alt` özelliği boş bir dize olarak ayarlanmalıdır: `alt=""`. Bu, ekran okuyucuların dekoratif görseli gereksiz yere duyurmasını engeller.

✅ Tahmin edebileceğiniz gibi, arama motorları da bir görselde ne olduğunu anlayamaz. Onlar da alt metni kullanır. Bu nedenle, sayfanızın erişilebilir olmasını sağlamak ek avantajlar sağlar!

## Klavye

Bazı kullanıcılar fare veya dokunmatik yüzey kullanamaz, bunun yerine bir öğeden diğerine geçmek için klavye etkileşimlerine güvenir. Web sitenizin içeriğinizi mantıksal bir sırayla sunması önemlidir, böylece bir klavye kullanıcısı belge boyunca her etkileşimli öğeye erişebilir. Web sayfalarınızı anlamsal işaretleme ile oluşturur ve görsel düzenlerini CSS ile şekillendirirseniz, siteniz klavye ile gezilebilir olmalıdır, ancak bu yönü manuel olarak test etmek önemlidir. Daha fazla bilgi için [klavye gezinme stratejileri](https://webaim.org/techniques/keyboard/) hakkında bilgi edinin.

✅ Herhangi bir web sitesine gidin ve yalnızca klavyenizi kullanarak gezinmeyi deneyin. Ne çalışıyor, ne çalışmıyor? Neden?

## Özet

Bazılarına erişilebilir bir web, gerçekten 'dünya çapında bir web' değildir. Oluşturduğunuz sitelerin erişilebilir olmasını sağlamanın en iyi yolu, baştan itibaren erişilebilirlik en iyi uygulamalarını dahil etmektir. Ekstra adımlar olsa da, bu becerileri şimdi iş akışınıza dahil etmek, oluşturduğunuz tüm sayfaların erişilebilir olmasını sağlayacaktır.

---

## 🚀 Zorluk

Bu HTML'yi alın ve öğrendiğiniz stratejilere göre mümkün olduğunca erişilebilir hale getirin.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Example
    </title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="site-header">
      <p class="site-title">Turtle Ipsum</p>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </div>
    <div class="main-nav">
      <p class="nav-header">Resources</p>
      <div class="nav-list">
        <p class="nav-item nav-item-bull"><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles"</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtle">Basic Turtle Info</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate Turtles</a></p>
      </div>
    </div>
    <div class="main-content">
      <div>
        <p class="page-title">Welcome to Turtle Ipsum. 
            <a href="">Click here</a> to learn more.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <span class="button">Sign up for turtle news</span>
      </div><div class="footer-section">
        <p class="nav-header footer-title">
          Internal Pages
        </p>
        <div class="nav-list">
          <p class="nav-item nav-item-bull"><a href="../">Index</a></p>
          <p class="nav-item nav-item-bull"><a href="../semantic">Semantic Example</a></p>
        </div>
      </div>
      <p class="footer-copyright">&copy; 2016 Instrument</span>
    </div>
  </body>
</html>
```

## Ders Sonrası Test
[Ders sonrası testi](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/6)

## Gözden Geçirme ve Kendi Kendine Çalışma
Birçok hükümetin erişilebilirlik gereksinimlerine ilişkin yasaları vardır. Kendi ülkenizin erişilebilirlik yasalarını araştırın. Neler kapsanıyor, neler kapsam dışı bırakılıyor? Bir örnek olarak [bu hükümet web sitesi](https://accessibility.blog.gov.uk/) gösterilebilir.

## Görev

[Erişilebilir olmayan bir web sitesini analiz edin](assignment.md)

Kaynak: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) - Instrument tarafından hazırlanmıştır.

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalardan sorumlu değiliz.