# Erişilebilir Web Sayfaları Oluşturma

![Erişilebilirlik Hakkında Her Şey](/sketchnotes/webdev101-a11y.png)
> [Tomomi Imura] tarafından hazırlanan Sketchnote(https://twitter.com/girlie_mac)

## Ders Öncesi Sınav
[Ders öncesi sınav](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/5)

> Web'in gücü evrenselliğindedir. Engellilik durumuna bakılmaksızın herkesin erişimi önemli bir husustur.
>
> \- Sir Timothy Berners-Lee, W3C Direktörü ve World Wide Web'in mucidi

Bu alıntı, erişilebilir web siteleri oluşturmanın önemini mükemmel bir şekilde vurgulamaktadır. Herkes tarafından erişilemeyen bir uygulama, tanımı gereği dışlayıcıdır. Web geliştiricileri olarak her zaman erişilebilirliği aklımızda tutmalıyız. Baştan bu odağı alarak, oluşturduğunuz sayfalara herkesin erişebilmesini sağlama yolunda ilerlemiş olacaksınız. Bu derste, web varlıklarınızın erişilebilir olduğundan emin olmanıza yardımcı olabilecek araçları ve erişilebilirlik göz önünde bulundurularak nasıl oluşturulacağını öğreneceksiniz.

> Bu dersi [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility?WT.mc_id=academic-77807-sagibbon) üzerinden alabilirsiniz!

## Kullanılacak araçlar

### Ekran okuyucular

En iyi bilinen erişilebilirlik araçlarından biri ekran okuyuculardır.

[Ekran okuyucular](https://en.wikipedia.org/wiki/Screen_reader), görme bozukluğu olanlar için yaygın olarak kullanılan istemcilerdir. Bir tarayıcının paylaşmak istediğimiz bilgileri doğru bir şekilde iletmesini sağlamak için zaman harcadığımız için, bir ekran okuyucunun da aynı şeyi yapmasını sağlamalıyız.

En basit haliyle, bir ekran okuyucu, bir sayfayı yukarıdan aşağıya sesli bir şekilde okuyacaktır. Sayfanızın tamamı metin ise, okuyucu bilgileri benzer bir şekilde bir tarayıcıya iletecektir. Elbette, web sayfaları nadiren salt metindir; bağlantılar, grafikler, renk ve diğer görsel bileşenleri içerecektir. Bu bilgilerin bir ekran okuyucu tarafından doğru bir şekilde okunduğundan emin olmak için özen gösterilmelidir.

Her web geliştiricisi bir ekran okuyucuya aşina olmalıdır. Yukarıda vurgulandığı gibi, kullanıcılarınızın kullanacağı istemcidir. Bir tarayıcının nasıl çalıştığını bildiğiniz gibi, bir ekran okuyucunun nasıl çalıştığını da öğrenmelisiniz. Neyse ki, ekran okuyucular çoğu işletim sisteminde yerleşik olarak bulunur.

Bazı tarayıcılarda ayrıca metni yüksek sesle okuyabilen ve hatta [erişilebilirlik odaklı bu Edge tarayıcı araçları](https://support.microsoft.com/help/4000734/microsoft) gibi bazı temel gezinme özellikleri sağlayan yerleşik araçlar ve uzantılar bulunur. -uç-erişilebilirlik-özellikleri). Bunlar aynı zamanda önemli erişilebilirlik araçlarıdır, ancak ekran okuyuculardan çok farklı işlev görürler ve ekran okuyucu test araçlarıyla karıştırılmamalıdırlar.

✅ Bir ekran okuyucu ve tarayıcı metin okuyucusu deneyin. Windows'ta [Anlatıcı](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1?WT.mc_id=academic-77807-sagibbon) varsayılan olarak dahildir ve [JAWS](https://webaim.org/articles/jaws/) ve [NVDA](https://www.nvaccess.org/about-nvda/) da yüklenebilir. macOS ve iOS'ta varsayılan olarak [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) yüklenir.

### Yakınlaştır

Görme bozukluğu olan kişiler tarafından yaygın olarak kullanılan bir diğer araç ise yakınlaştırmadır. En temel yakınlaştırma türü, 'Kontrol + artı işareti (+)' aracılığıyla veya ekran çözünürlüğü azaltılarak kontrol edilen statik yakınlaştırmadır. Bu tür yakınlaştırma tüm sayfanın yeniden boyutlandırılmasına neden olur, bu nedenle [duyarlı tasarım](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) kullanmak, artırılmış yakınlaştırma düzeylerinde iyi bir kullanıcı deneyimi sağlamak için önemlidir. .

Başka bir yakınlaştırma türü, gerçek bir büyüteç kullanmak gibi, ekranın bir alanını büyütmek ve kaydırmak için özel yazılıma dayanır. Windows'ta, [Büyüteç](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198 ) yerleşiktir ve [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) daha fazla özelliğe ve daha geniş bir kullanıcı tabanına sahip bir üçüncü taraf büyütme yazılımıdır. Hem macOS hem de iOS, [Zoom](https://www.apple.com/accessibility/mac/vision/) adlı yerleşik bir büyütme yazılımına sahiptir.

### Kontrast denetleyicileri

Web sitelerindeki renklerin, renk körü kullanıcıların veya düşük kontrastlı renkleri görmekte zorlanan kişilerin ihtiyaçlarına cevap verecek şekilde özenle seçilmesi gerekir.

✅ Kullanmayı sevdiğiniz bir web sitesini [WCAG's color checker](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=tr) gibi bir tarayıcı uzantısıyla renk kullanımı için test edin -US&WT.mc_id=akademik-77807-sagibbon). Ne öğreniyorsun?

### Deniz Feneri

Tarayıcınızın geliştirici aracı alanında Deniz Feneri aracını bulacaksınız. Bu araç, bir web sitesinin erişilebilirliğine (ve diğer analizlere) ilişkin bir ilk görüş elde etmek için önemlidir. Yalnızca Lighthouse'a güvenmemek önemli olsa da, temel olarak %100'lük bir puan çok yararlıdır.

✅ Tarayıcınızın geliştirici araç panelinde Lighthouse'u bulun ve herhangi bir sitede bir analiz çalıştırın. ne keşfedersiniz?

## Erişilebilir bir tasarım yapmak

Erişilebilirlik nispeten geniş bir konudur. Size yardımcı olmak için çok sayıda kaynak mevcuttur.

- [Erişilebilir U - Minnesota Üniversitesi](https://accessibility.umn.edu/your-role/web-developers)

Erişilebilir siteler oluşturmanın her yönünü kapsayamayacak olsak da, aşağıda uygulamak isteyeceğiniz temel ilkelerden bazıları verilmiştir. Erişilebilir bir sayfa tasarlamak, erişilebilir hale getirmek için mevcut bir sayfaya geri dönmekten **her zaman** daha kolaydır.

## İyi görüntüleme ilkeleri

### Renk güvenli paletler

İnsanlar dünyayı farklı şekillerde görürler ve buna renkler de dahildir. Siteniz için bir renk şeması seçerken, herkes tarafından erişilebilir olduğundan emin olmalısınız. [Renk paletleri oluşturmak için harika bir araç Color Safe'dir](http://colorsafe.co/).

✅ Renk kullanımında çok sorunlu bir web sitesi belirleyin. Neden? Niye?

### Doğru HTML'yi kullanın

CSS ve JavaScript ile herhangi bir öğeyi herhangi bir kontrol türü gibi göstermek mümkündür. "<span>", "<button>" oluşturmak için kullanılabilir ve "<b>" bir köprü olabilir. Bu, stil oluşturmanın daha kolay olduğu düşünülse de, ekran okuyucuya hiçbir şey iletmez. Bir sayfada denetimler oluştururken uygun HTML'yi kullanın. Köprü istiyorsanız, `<a>` kullanın. Doğru kontrol için doğru HTML'yi kullanmaya Semantik HTML'den yararlanma denir.

✅ Herhangi bir web sitesine gidin ve tasarımcıların ve geliştiricilerin HTML'yi düzgün kullanıp kullanmadığını görün. Bağlantı olması gereken bir düğme bulabilir misiniz? İpucu: Temel koda bakmak için sağ tıklayın ve tarayıcınızda 'Sayfa Kaynağını Görüntüle'yi seçin.

### Açıklayıcı bir başlık hiyerarşisi oluşturun

Ekran okuyucu kullanıcıları, bilgi bulmak ve bir sayfada gezinmek için [büyük ölçüde başlıklara güvenir](https://webaim.org/projects/screenreadersurvey8/#finding). Açıklayıcı başlık içeriği yazmak ve anlamsal başlık etiketleri kullanmak, ekran okuyucu kullanıcıları için kolayca gezinilebilir bir site oluşturmak için önemlidir.

### İyi görsel ipuçları kullanın

CSS, bir sayfadaki herhangi bir öğenin görünümü üzerinde tam kontrol sunar. Anahatsız metin kutuları veya altı çizili olmayan köprüler oluşturabilirsiniz. Ne yazık ki, bu ipuçlarını ortadan kaldırmak, onlara bağımlı olan birinin kontrol türünü tanımasını daha zor hale getirebilir.

## Bağlantı metninin önemi

Köprüler, web'de gezinmenin özüdür. Sonuç olarak, bir ekran okuyucunun bağlantıları düzgün bir şekilde okuyabilmesini sağlamak, tüm kullanıcıların sitenizde gezinmesine olanak tanır.

### Ekran okuyucular ve bağlantılar

Beklediğiniz gibi, ekran okuyucular bağlantı metnini sayfadaki diğer metinleri okudukları gibi okurlar. Bunu akılda tutarak, aşağıda gösterilen metin tamamen kabul edilebilir gelebilir.

> Bazen peri pengueni olarak da bilinen küçük penguen, dünyanın en küçük penguenidir. Daha fazla bilgi için [burayı tıklayın](https://en.wikipedia.org/wiki/Little_penguin).

> Bazen peri pengueni olarak da bilinen küçük penguen, dünyanın en küçük penguenidir. Daha fazla bilgi için https://en.wikipedia.org/wiki/Little_penguin adresini ziyaret edin.

> **NOT** Okumak üzereyken, yukarıdakine benzeyen bağlantılar **asla** oluşturmamalısınız.

Ekran okuyucuların, farklı özelliklere sahip tarayıcılardan farklı bir arayüz olduğunu unutmayın.

### URL'yi kullanma sorunu

Ekran okuyucuları metni okur. Metinde bir URL görünüyorsa, ekran okuyucu URL'yi okuyacaktır. Genel olarak konuşursak, URL anlamlı bilgiler iletmez ve kulağa rahatsız edici gelebilir. Telefonunuz URL içeren bir kısa mesajı sesli olarak okuduysa, bunu yaşamış olabilirsiniz.

### "burayı tıklayın" sorunu

Ekran okuyucular ayrıca bir sayfadaki yalnızca köprüleri okuma yeteneğine de sahiptir; tıpkı gören bir kişinin bir sayfada bağlantılar için tarama yapmasına benzer şekilde. Bağlantı metni her zaman "buraya tıklayın" ise, kullanıcının duyacağı tek şey "buraya tıklayın, buraya tıklayın, buraya tıklayın, buraya tıklayın, buraya tıklayın, ..." Artık tüm bağlantılar birbirinden ayırt edilemez.

### İyi bağlantı metni

İyi bağlantı metni, bağlantının diğer tarafında ne olduğunu kısaca açıklar. Küçük penguenlerden bahseden yukarıdaki örnekte, bağlantı türlerle ilgili Wikipedia sayfasına verilmiştir. *Küçük penguenler* ifadesi, birisinin bağlantıyı tıkladığında ne öğreneceğini açıkladığı için mükemmel bir bağlantı metni oluşturur - küçük penguenler.

> Bazen peri pengueni olarak da bilinen [küçük penguen](https://en.wikipedia.org/wiki/Little_penguin), dünyanın en küçük penguenidir.

✅ Belirsiz bağlantı stratejileri kullanan sayfaları bulmak için web'de birkaç dakika gezinin. Bunları diğer, daha iyi bağlantılı sitelerle karşılaştırın. Ne öğreniyorsun?

#### Arama motoru notları

Sitenizin herkes tarafından erişilebilir olmasını sağlamak için ek bir bonus olarak, arama motorlarının sitenizde gezinmesine de yardımcı olacaksınız. Arama motorları, sayfaların konularını öğrenmek için bağlantı metnini kullanır. Bu yüzden iyi bir bağlantı metni kullanmak herkese yardımcı olur!

### ARIA

Aşağıdaki sayfayı hayal edin:

| Ürün | Açıklama | Sipariş |
| ------------ | ------------------ | ------------ |
| Widget | [Açıklama]('#') | [Sipariş]('#') |
| Süper widget | [Açıklama]('#') | [Sipariş]('#') |

Bu örnekte, açıklama ve düzen metnini kopyalamak, tarayıcı kullanan biri için anlamlıdır. Ancak, ekran okuyucu kullanan biri bağlam olmadan yalnızca *açıklama* ve *sıralama* sözcüklerini duyar.

Bu tür senaryoları desteklemek için HTML, [Erişilebilir Zengin İnternet Uygulamaları (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) olarak bilinen bir dizi özelliği destekler. Bu öznitelikler, ekran okuyuculara ek bilgi sağlamanıza olanak tanır.

> **NOT**: HTML'nin birçok özelliği gibi, tarayıcı ve ekran okuyucu desteği de değişiklik gösterebilir. Ancak, çoğu ana hat istemcisi ARIA özniteliklerini destekler.

Sayfanın formatı buna izin vermediğinde bağlantıyı açıklamak için 'aria-label' kullanabilirsiniz. Widget için açıklama şu şekilde ayarlanabilir:

``` html
<a href="#" aria-label="Widget açıklaması">açıklama</a>
```

✅ Genel olarak, yukarıda açıklandığı gibi Semantik işaretlemenin kullanılması ARIA kullanımının yerini alır, ancak bazen çeşitli HTML widget'larının anlamsal eşdeğeri yoktur. İyi bir örnek bir Ağaçtır. Bir ağaç için HTML eşdeğeri yoktur, bu nedenle bu öğe için genel "<div>" öğesini uygun bir rol ve arya değerleriyle tanımlarsınız. [ARIA ile ilgili MDN belgeleri](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) daha faydalı bilgiler içerir.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Görüntüler

Ekran okuyucuların bir görüntüdekileri otomatik olarak okuyamadığını söylemeye gerek yok. Görüntülerin erişilebilir olmasını sağlamak çok fazla iş gerektirmez - "alt" özelliğinin amacı budur. Tüm anlamlı görseller, ne olduklarını açıklamak için bir "alt" işaretine sahip olmalıdır.
Tamamen dekoratif olan resimlerin "alt" özniteliği boş bir dizeye ayarlanmalıdır: "alt=""`. Bu, ekran okuyucuların dekoratif görüntüyü gereksiz yere duyurmasını engeller.

✅ Tahmin edebileceğiniz gibi arama motorları da bir görselde ne olduğunu anlayamazlar. Ayrıca alternatif metin kullanırlar. Bu nedenle, bir kez daha sayfanızın erişilebilir olmasını sağlamak ek bonuslar sağlar!

## Klavye

Bazı kullanıcılar, bir öğeden diğerine sekme yapmak için klavye etkileşimlerine güvenmek yerine fare veya izleme dörtgeni kullanamazlar. Web sitenizin içeriğinizi mantıklı bir sırayla sunması önemlidir, böylece bir klavye kullanıcısı bir belgede aşağı inerken her etkileşimli öğeye erişebilir. Web sayfalarınızı anlamsal biçimlendirme ile oluşturursanız ve görsel düzenini biçimlendirmek için CSS kullanırsanız, siteniz klavyeyle gezilebilir olmalıdır, ancak bu yönü manuel olarak test etmek önemlidir. [Klavyede gezinme stratejileri](https://webaim.org/techniques/keyboard/) hakkında daha fazla bilgi edinin.

✅ Herhangi bir web sitesine gidin ve yalnızca klavyenizi kullanarak gezinmeye çalışın. Ne işe yarıyor, ne çalışmıyor? Neden? Niye?

## Özet

Bazıları için erişilebilir bir web, gerçekten 'dünya çapında bir ağ' değildir. Oluşturduğunuz sitelerin erişilebilir olmasını sağlamanın en iyi yolu, en baştan erişilebilirlikle ilgili en iyi uygulamaları dahil etmektir. Ek adımlar olsa da, bu becerileri iş akışınıza dahil etmek, oluşturduğunuz tüm sayfaların erişilebilir olacağı anlamına gelir.

---

## 🚀 Meydan Okuma

Bu HTML'yi alın ve öğrendiğiniz stratejilere göre mümkün olduğunca erişilebilir olacak şekilde yeniden yazın.

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

## Ders Sonrası Sınav
[Ders sonrası test](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/6)

## İnceleme ve Bireysel Çalışma

Birçok hükümetin erişilebilirlik gereksinimleriyle ilgili yasaları vardır. Kendi ülkenizin erişilebilirlik yasalarını okuyun. Neleri kapsar, neleri kapsamaz? Bir örnek [bu hükümet web sitesidir](https://accessibility.blog.gov.uk/).

## Atama
 
[Erişilemeyen bir web sitesini analiz edin](assignment.md)

Kredi: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) Instrument tarafından