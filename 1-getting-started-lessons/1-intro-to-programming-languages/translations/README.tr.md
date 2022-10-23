# Programlama Dillerine ve Araçlarına Başlangıç

Bu ders programlama dillerinin temellerini kapsıyor. Bahsi geçilen konular günümüzdeki çoğu modern programlama dillerine uygulanabilir durumda. Dersin 'Programlama Araçları' kısmında ise,  yazılım hayatınızda size yardımcı olacak kullanışlı araçları öğreneceksiniz. 

![Programlamaya Giriş](../../sketchnotes/webdev101-programming.png)
>  Grafik Çizeri: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ders Öncesi Testi
[Ara Sınav](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/1?loc=tr)

## Giriş

Bu derste aşağıdaki konuları işleyeceğiz: 

- Programlama nedir?
- Programlama dilleri tipleri
- Bir programın temel bileşenleri
- Profesyonel geliştiriciler için kullanışlı yazılım ve programlama araçları.


> Bu dersi [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming?WT.mc_id=academic-13441-cxa) sitesinden de alabilirsin!

## Programlama Nedir?

Programlama (ya da kodlama) bilgisayar veya mobil cihazlara talimat verilme sürecidir. Bu talimatları, daha sonra cihaz tarafından yorumlanacak programlama dilleri ile yazıyoruz. Bu talimatlar bütünü karşımıza sıkça *program*, *bilgisayar programı*, *uygulama (app)*, ve *yürütülebilir program* olarak çıkabilir. 

Bir *program* kod ile yazılmış herhangi bir şey olabilir; Websiteleri, oyunlar, ve telefon uygulamaları buna örnekler olarak gösterilebilir. Kod yazmadan bir program oluşturmak mümkün olsa da, altta yatan mantık cihaz tarafından yorumlanır ve bu mantık büyük olasılıkla bir yerlerde kodla yazılmıştır. *Çalışan* veya kod *çalıştıran* bir program talimatları yerine getirir. Aynı bu dersi okuduğunuz cihazın ekranınıza yazdırmak için bir program çalıştırıyor olduğu gibi.

✅ Araştırma Zamanı: Dünyanın ilk bilgisayar programcısı kim olarak kabul ediliyor?

## Programlama Dilleri 

Programlama dilleri, geliştiricilerin bir cihaz için talimatlar yazmasını sağlar. Cihazlar yalnızca binary (1'ler ve 0'lar) dilini anlayabilir ve *çoğu* geliştirici için bu iletişim kurmanın çok verimli bir yolu değildir. Programlama dilleri insanlar ve bilgisayarlar arasındaki iletişim için bir araçtır.

Programlama dilleri farklı biçimlerde gelir ve farklı amaçlara hizmet edebilir. Örneğin, JavaScript asıl olarak web uygulamaları için kullanılırken, Bash genellikle işletim sistemleri için kullanılır.

*Düşük seviyeli diller* (Low-Level) genellikle bir cihazın talimatları yorumlaması için *yüksek seviyeli dillerden* (High-Level) daha az adım gerektirir. Bununla birlikte, yüksek seviyeli dilleri popüler yapan şey okunabilirlikleri ve destekleridir. JavaScript yüksek seviyeli bir dil olarak kabul edilir.

Aşağıdaki kod, JavaScript gibi yüksek seviyeli bir dil ve ARM üretici (assembly) kodu gibi düşük seviyeli bir dil arasındaki farkı göstermektedir.

```javascript
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

```c
 area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

İster inanın ister inanmayın, *ikisi de 10'a kadar bir Fibonacci dizisi yazdırıyor*.

✅ Bir [Fibonacci dizisi](https://en.wikipedia.org/wiki/Fibonacci_number), 0 ve 1'den başlayarak her sayı kendinden önceki iki sayının toplamı olacak şekilde bir sayı kümesi olarak tanımlanır.

## Programın Bileşenleri

Bir programdaki tek bir talimat *ifade* (expression) olarak adlandırılır ve genellikle komutun nerede bittiğini veya *sonlandığını* (terminate) gösteren bir karaktere veya satır aralığına sahip olur. Bir programın nasıl sonlandırılacağı her programlama diline göre değişir.

Bir program içindeki ifadeler, talimatları yerine getirmek için kullanıcı tarafından veya başka bir yerden sağlanan verilere dayanabilir. Veriler bir programın nasıl davranacağını değiştirebilir, bu nedenle programlama dilleri verileri daha sonra kullanılmak üzere geçici olarak saklamak için bir yol sunar. Bunlara *değişkenler* denir. Değişkenler, bir cihaza verileri hafızasına kaydetmesi talimatını veren ifadelerdir. Programlardaki değişkenler cebirdeki değişkenlere benzer, kendine özgün bir adları vardır ve değerleri zaman içinde değişebilir.

Bazı ifadelerin bir cihaz tarafından yürütülmeme ihtimali vardır. Bu genellikle geliştirici tarafından yazıldığında tasarım gereği veya beklenmedik bir hata oluştuğunda kazara olur. Bir program üzerindeki bu tür bir kontrol, onu daha sağlam ve sürdürülebilir hale getirir. Tipik olarak, kontroldeki bu değişiklikler belirli koşullar karşılandığında gerçekleşir. Modern programlamada bir programın nasıl çalıştığını kontrol etmek için kullanılan yaygın bir deyim `if..else` deyimidir.

✅ Sonraki derslerde bu tür ifadeler hakkında daha fazla bilgi edineceksiniz.

## Programlama Araçları

[![Programlama Araçları](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Programlama Araçları")

> 🎥 Programlama Araçları hakkında bir video için yukarıdaki resme tıklayın (İngilizce)

Bu bölümde, profesyonel geliştirici yolculuğunuza başlarken çok faydalı bulabileceğiniz bazı yazılımlar hakkında bilgi edineceksiniz.

Bir **geliştirme ortamı**, bir geliştiricinin yazılım yazarken sıklıkla kullandığı benzersiz araçlar ve özellikler kümesidir.Bu araçlardan bazıları bir geliştiricinin özel ihtiyaçlarına, geliştiricinin işteki önceliklerine, kişisel projelerini değiştirmesi veya farklı bir programlama dili kullanması durumuna göre zaman içinde değişebilir. Geliştirme ortamları, onları kullanan geliştiriciler kadar benzersizdir.

## Metin Editörler

Yazılım geliştirme için en önemli araçlardan biri metin editörüdür. Editörler kodunuzu yazdığınız ve bazen de kodunuzu çalıştırdığınız yerdir.

Geliştiricilerin editörlere güveni ek olarak bu nedenlere de dayanır:

- *Hata ayıklama* (Debugging), kod üzerinde satır satır gezinerek hataların ortaya çıkarılmasına yardımcı olur. Bazı editörlerin hata ayıklama özellikleri vardır; bunlar belirli programlama dilleri için özelleştirilebilir ve eklenebilir.  
- *Sözdizimi vurgulama* (Syntax highlighting) koda renkler ve metin biçimlendirmesi ekleyerek okunmasını kolaylaştırır. Çoğu editör özelleştirilmiş sözdizimi vurgulamasına izin verir.
- *Uzantılar ve Entegrasyonlar* geliştiriciler için geliştiriciler tarafından geliştirilen özel araçlardır. Bu araçlar temel editörlerde yerleşik olarak bulunmaz. Örneğin, birçok geliştirici kodlarının nasıl çalıştığını açıklamak için yorum olarak dökümantasyon blokları yazarlar. Bunun için, belgelerindeki yazım hatalarını bulmaya yardımcı olması için bir yazım denetimi uzantısı yükleyebilirler. Çoğu uzantı belirli bir editörde kullanılmak üzere tasarlanmıştır ve çoğu editör mevcut uzantıları aramak ve indirmek için bir özellikle birlikte gelir.
- *Özelleştirme*, geliştiricilerin kendi ihtiyaçlarına uygun benzersiz bir geliştirme ortamı oluşturmalarını sağlar. Çoğu editör son derece özelleştirilebilir ve geliştiricilerin özel uzantılar oluşturmasına da izin verebilir.

#### Popüler Metin Editörleri ve Web Geliştirme Uzantıları

- [Visual Studio Code](https://code.visualstudio.com/)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)

### Tarayıcılar

Bir diğer önemli araç ise tarayıcıdır. Web geliştiricileri, kodlarının web üzerinde nasıl çalıştığını görmek için tarayıcıya güvenirler. Ayrıca HTML gibi, editörde yazılan bir web sayfasının görsel öğelerini görüntülemek için de kullanılır.

Birçok tarayıcı, geliştiricilerin uygulamaları hakkında önemli bilgileri toplamalarına ve yakalamalarına yardımcı olacak bir dizi yararlı özellik ve bilgi içeren *geliştirici araçları* (DevTools) ile birlikte gelir. Örneğin: Bir web sayfasında hatalar varsa, bunların ne zaman oluştuğunu bilmek bazen yararlı olabilir. Bir tarayıcıdaki geliştiri araçları bu bilgileri yakalamak için yapılandırılabilir.

#### Popüler Tarayıcılar ve Geliştirici Araçları

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium?WT.mc_id=academic-13441-cxa)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Komut Satırı Araçları

Bazı geliştiriciler günlük görevleri için daha az grafiksel bir görünümü tercih eder ve bunu başarmak için komut satırına güvenir. Kod yazmak önemli miktarda yazı yazmayı gerektirir ve bazı geliştiriciler klavyedeki akışlarını bozmamayı tercih eder. Masaüstü pencereleri arasında geçiş yapmak, farklı dosyalar üzerinde çalışmak ve araçları kullanmak için klavye kısayollarını kullanırlar. Çoğu görev fare ile tamamlanabilir, ancak komut satırını kullanmanın bir avantajı, fare ve klavye arasında geçiş yapmaya gerek kalmadan komut satırı araçlarıyla çok şey yapılabilmesidir. Komut satırının bir diğer faydası da yapılandırılabilir olmalarıdır. Buna ek olarak özel bir yapılandırmayı kaydedebilir, daha sonra değiştirebilir ve diğer geliştirme makinelerine de aktarabilirsiniz. Geliştirme ortamları her geliştirici için çok özel olduğundan, bazıları komut satırını kullanmaktan kaçınır, bazıları tamamen ona güvenir ve bazıları da ikisinin karışımını tercih eder.

### Popüler Komut Satırı Seçenekleri

Komut satırı için seçenekler kullandığınız işletim sistemine göre farklılık gösterecektir.

*💻 = işletim sistemine önceden yüklenmiş olarak geliyor anlamında.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7?WT.mc_id=academic-13441-cxa) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands?WT.mc_id=academic-13441-cxa) (CMD olarak da bilinir) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-13441-cxa)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7?WT.mc_id=academic-13441-cxa)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7?WT.mc_id=academic-13441-cxa)

#### Popüler Komut Satırı Araçları 

- [Git](https://git-scm.com/) (💻 çoğu işletim sisteminde)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Dökümantasyon

Bir geliştirici yeni bir şey öğrenmek istediğinde, nasıl kullanılacağını öğrenmek için büyük olasılıkla dökümantasyona başvuracaktır. Geliştiriciler genellikle araçları ve dilleri doğru şekilde nasıl kullanacakları konusunda kendilerine rehberlik etmesi ve ayrıca nasıl çalıştığı hakkında daha derin bilgi edinmek için dökümantasyonlara güvenirler.

#### Popüler Web Geliştirimi Dökümantasyonları

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), [Firefox](https://www.mozilla.org/firefox/) tarayıcısının kurucusu Mozilla tarafından
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), [Chrome](https://www.google.com/chrome/) tarayıcısının kurucusu Google tarafından
- [Microsoft's own developer docs](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), [Microsoft Edge](https://www.microsoft.com/edge) için

✅ Araştırma Zamanı: Artık bir web geliştiricisi ortamının temellerini bildiğinize göre, bunu bir web tasarımcısının ortamı ile karşılaştırın.

--- 

## 🚀 Meydan Okuma

Bazı programlama dillerini karşılaştırın. Java'ya kıyasla JavaScript'in bazı benzersiz özellikleri nelerdir? Peki ya COBOL ve Go?

## Ders Sonrası Quiz
[Ders sonrası quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/2?loc=tr)

## Ders Tekrarı ve Bireysel Çalışma

Programcıların kullanabileceği farklı diller üzerine biraz çalışın. Bir dilde bir satır yazmaya çalışın ve daha sonra bunu diğer iki dilde yeniden yazın. Ne öğrendiniz?

## Ödev
[Dökümantasyon Okumak](assignment.md)
