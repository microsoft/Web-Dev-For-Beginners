# Programlama Dillerine Giriş ve Ticaret Araçları

Bu ders, programlama dillerinin temellerini kapsar. Burada ele alınan konular, günümüzdeki modern programlama dillerinin çoğuna uygulanmaktadır. 'Ticaret Araçları' bölümünde, bir geliştirici olarak size yardımcı olacak yararlı yazılımlar hakkında bilgi edineceksiniz.

![Intro Programming](../../sketchnotes/webdev101-programming.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Ders Öncesi Sınav
[Ders Öncesi Sınav](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/1)

## Giriş

Bu derste şunları ele alacağız:

- Programlama nedir?
- Programlama dillerinin türleri
- Bir programın temel öğeleri
- Profesyonel geliştirici için yararlı yazılımlar ve araçlar

> Bu dersi [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!'de alabilirsiniz!

## Programlama Nedir?

Programlama (kodlama olarak da bilinir), bilgisayar veya mobil cihaz gibi bir cihaz için talimatlar yazma sürecidir. Bu talimatları, cihaz tarafından yorumlanan bir programlama dili ile yazarız. Bu talimatlar seti çeşitli isimlerle anılabilir, ancak program, bilgisayar programı, uygulama (app) ve çalıştırılabilir dosya popüler isimlerden birkaçıdır.

Bir program, kodla yazılmış herhangi bir şey olabilir; web siteleri, oyunlar ve telefon uygulamaları programlardır. Kod yazmadan bir program oluşturmak mümkün olsa da, temel mantık cihaz tarafından yorumlanır ve bu mantık büyük olasılıkla kodla yazılmıştır. Çalışan veya çalıştıran bir program, talimatları yerine getirir. Bu dersi okuduğunuz cihaz, bu dersi ekranınıza yazdırmak için bir program çalıştırmaktadır.

✅ Küçük bir araştırma yapın: Dünyanın ilk bilgisayar programcısı olarak kabul edilen kişi kimdir?

## Programlama Dilleri

Programlama dilleri, geliştiricilerin bir cihaz için talimatlar yazmasını sağlar. Cihazlar yalnızca ikili (1'ler ve 0'lar) anlayabilir ve çoğu geliştirici için bu, iletişim kurmanın verimli bir yolu değildir. Programlama dilleri, insanlar ile bilgisayarlar arasındaki iletişim aracıdır.

Programlama dilleri farklı formatlarda gelir ve farklı amaçlara hizmet edebilir. Örneğin, JavaScript öncelikle web uygulamaları için kullanılırken, Bash öncelikle işletim sistemleri için kullanılır.

*Düşük seviyeli diller*, bir cihazın talimatları yorumlaması için yüksek seviyeli dillere göre genellikle daha az adım gerektirir. Ancak, yüksek seviyeli dillerin popüler olmasını sağlayan şey, okunabilirlikleri ve destekleridir. JavaScript, yüksek seviyeli bir dil olarak kabul edilir.

Aşağıdaki kod, JavaScript ile yüksek seviyeli bir dil ve ARM montaj kodu ile düşük seviyeli bir dil arasındaki farkı göstermektedir.

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

İnanın ya da inanmayın, her ikisi de aynı şeyi yapıyor: 10'a kadar bir Fibonacci dizisi yazdırıyorlar.

✅ Fibonacci dizisi, tanımlandığı gibi, 0 ve 1'den başlayarak, her sayının önceki iki sayının toplamı olduğu bir sayı setidir. Fibonacci dizisine göre ilk 10 sayı 0, 1, 1, 2, 3, 5, 8, 13, 21 ve 34'tür.

## Bir Programın Öğeleri

Bir programdaki tek bir talimat, ifade olarak adlandırılır ve genellikle ifadenin bittiği yeri veya sonlandığını belirten bir karakter veya satır aralığına sahiptir. Bir programın nasıl sonlandığı her dilde farklılık gösterir.

Bir programdaki ifadeler, bir kullanıcı tarafından sağlanan veriye veya başka bir kaynağa dayanarak talimatları yerine getirebilir. Veriler, bir programın nasıl davrandığını değiştirebilir, bu nedenle programlama dilleri, verilerin geçici olarak saklanabileceği ve daha sonra kullanılabileceği bir yol sunar. Bunlara değişkenler denir. Değişkenler, bir cihazın belleğinde veri saklamasını söyleyen ifadelerdir. Programlardaki değişkenler, cebirdeki değişkenlere benzer; benzersiz bir adı vardır ve değeri zaman içinde değişebilir.

Bazı ifadelerin bir cihaz tarafından çalıştırılmama olasılığı vardır. Bu genellikle geliştirici tarafından tasarlandığı gibi veya beklenmedik bir hata oluştuğunda kaza sonucu olur. Bir uygulama üzerindeki bu tür kontrol, onu daha sağlam ve sürdürülebilir kılar. Genellikle bu kontrol değişiklikleri, belirli koşullar karşılandığında gerçekleşir. Modern programlamada bir programın nasıl çalıştığını kontrol etmek için yaygın olarak kullanılan bir ifade `if..else` ifadesidir.

✅ Bu tür ifadeyi sonraki derslerde daha fazla öğreneceksiniz.

## Ticaret Araçları

[![Ticaret Araçları](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools of the Trade")

> 🎥 Araçlar hakkında bir video için yukarıdaki görüntüye tıklayın

Bu bölümde, profesyonel gelişim yolculuğunuza başlarken çok yararlı bulabileceğiniz bazı yazılımlar hakkında bilgi edineceksiniz.

Bir **geliştirme ortamı**, bir geliştiricinin yazılım yazarken sıkça kullandığı benzersiz araçlar ve özellikler setidir. Bu araçların bazıları, bir geliştiricinin belirli ihtiyaçlarına göre özelleştirilmiştir ve bu geliştirici iş, kişisel projeler veya farklı bir programlama dili kullanırken öncelikleri değiştiğinde değişebilir. Geliştirme ortamları, onları kullanan geliştiriciler kadar benzersizdir.

### Editörler

Yazılım geliştirme için en önemli araçlardan biri editördür. Editörler, kodunuzu yazdığınız ve bazen de kodunuzu çalıştırdığınız yerdir.

Geliştiriciler, editörleri birkaç ek neden için kullanırlar:

- *Hata Ayıklama*, kodu satır satır izleyerek hataları ve hataları ortaya çıkarmaya yardımcı olur. Bazı editörler hata ayıklama yeteneklerine sahiptir; belirli programlama dilleri için özelleştirilebilir ve eklenebilirler.
- *Sözdizimi vurgulama*, kodu daha okunabilir hale getirerek renklendirme ve metin biçimlendirme ekler. Çoğu editör, özelleştirilmiş sözdizimi vurgulamasına izin verir.
- *Eklentiler ve Entegrasyonlar*, geliştiriciler tarafından geliştiriciler için oluşturulmuş özel araçlardır. Bu araçlar temel editöre dahil edilmemiştir. Örneğin, birçok geliştirici kodlarını nasıl çalıştığını açıklamak için belgelendirir. Belgeler içinde yazım hatalarını bulmaya yardımcı olmak için bir yazım denetimi eklentisi yükleyebilirler. Çoğu eklenti, belirli bir editör için tasarlanmıştır ve çoğu editör, mevcut eklentileri aramak için bir yol sunar.
- *Özelleştirme*, geliştiricilerin ihtiyaçlarına uygun benzersiz bir geliştirme ortamı oluşturmasına olanak tanır. Çoğu editör son derece özelleştirilebilir ve geliştiricilerin özel eklentiler oluşturmasına da izin verebilir.

#### Popüler Editörler ve Web Geliştirme Eklentileri

- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)
  - [Kod Yazım Denetleyicisi](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Canlı Paylaşım](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
  - [Prettier - Kod biçimlendirici](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)
  
- [www.sublimetext](https://www.sublimetext.com/)
  - [emmet](https://emmet.io/)
  - [SublimeLinter](http://www.sublimelinter.com/en/stable/)

### Tarayıcılar

Diğer önemli bir araç tarayıcıdır. Web geliştiriciler, kodlarının web üzerinde nasıl çalıştığını görmek için tarayıcıya güvenirler. Ayrıca, bir web sayfasının HTML gibi editörde yazılan görsel öğelerini görüntülemek için de kullanılır.

Birçok tarayıcı, geliştiricilerin uygulamaları hakkında önemli bilgileri toplamasına ve yakalamasına yardımcı olan bir dizi yararlı özellik içeren geliştirici araçları (DevTools) ile birlikte gelir. Örneğin: Bir web sayfasında hatalar varsa, bunların ne zaman meydana geldiğini bilmek bazen yardımcı olabilir. Tarayıcıdaki geliştirici araçları, bu bilgileri yakalamak için yapılandırılabilir.

#### Popüler Tarayıcılar ve Geliştirici Araçları

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Komut Satırı Araçları

Bazı geliştiriciler, günlük görevleri için daha az grafiksel bir görünüm tercih eder ve bunu başarmak için komut satırını kullanır. Kod yazmak önemli miktarda yazı yazmayı gerektirir ve bazı geliştiriciler, klavye üzerindeki akışlarını bozmak istemezler. Farklı masaüstü pencereleri arasında geçiş yapmak, farklı dosyalar üzerinde çalışmak ve araçları kullanmak için klavye kısayollarını kullanırlar. Çoğu görev bir fare ile tamamlanabilir, ancak komut satırını kullanmanın bir faydası, klavye ve fare arasında geçiş yapmadan birçok işlemin gerçekleştirilebilmesidir. Komut satırının bir diğer avantajı, yapılandırılabilir olmaları ve özel bir yapılandırmayı kaydedip daha sonra değiştirebilmeniz ve diğer geliştirme makinelerine aktarmanızdır. Geliştirme ortamları her geliştiriciye özgü olduğundan, bazıları komut satırını kullanmaktan kaçınırken, bazıları tamamen buna güvenir ve bazıları ikisinin bir karışımını tercih eder.

### Popüler Komut Satırı Seçenekleri

Komut satırı seçenekleri, kullandığınız işletim sistemine bağlı olarak farklılık gösterecektir.

*💻 = işletim sisteminde önceden yüklü olarak gelir.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Komut Satırı](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (also known as CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Popüler Komut Satırı Araçları

- [Git](https://git-scm.com/) (💻 on most operating systems)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Dokümantasyon

Bir geliştirici yeni bir şey öğrenmek istediğinde, bunu nasıl kullanacağını öğrenmek için büyük olasılıkla dokümantasyona başvuracaktır. Geliştiriciler, araçları ve dilleri doğru bir şekilde nasıl kullanacaklarını öğrenmek ve ayrıca nasıl çalıştığı hakkında daha derin bilgi edinmek için genellikle dokümantasyona güvenirler.

#### Web Geliştirme ile İlgili Popüler Dokümantasyonlar

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), Mozilla'dan, [Firefox](https://www.mozilla.org/firefox/) tarayıcısının yayıncıları
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), Google'dan, [Chrome](https://www.google.com/chrome/) tarayıcısının yayıncıları
- [Microsoft'un kendi geliştirici dokümanları](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), [Microsoft Edge](https://www.microsoft.com/edge) için
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Araştırma yapın: Artık bir web geliştiricisinin ortamının temellerini bildiğinize göre, bunu bir web tasarımcısının ortamı ile karşılaştırın.

---

## 🚀 Meydan Okuma

Bazı programlama dillerini karşılaştırın. JavaScript ile Java'nın bazı benzersiz özellikleri nelerdir? Peki ya COBOL ile Go?

## Ders Sonrası Test
[Ders Sonrası Test](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/2)

## Gözden Geçirme ve Kendi Kendine Çalışma

Bir programcı için mevcut olan farklı diller hakkında biraz bilgi edinin. Bir dilde bir satır yazmayı deneyin ve ardından iki diğer dilde tekrar yazın. Ne öğrendiniz?

## Ödev

[Dokümanları Okumak](assignment.md)
