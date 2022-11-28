# Programlama Dillerine ve Araçlarına Giriş

Bu ders, programlama dillerinin temellerini kapsar. Burada ele alınan konular günümüzün çoğu modern programlama dili için geçerlidir. 'Ticaret Araçları' bölümünde, bir geliştirici olarak size yardımcı olacak faydalı yazılımlar hakkında bilgi edineceksiniz.

![Programlamaya Giriş](../../sketchnotes/webdev101-programming.png)
> [Tomomi Imura]'dan eskiz notu(https://twitter.com/girlie_mac)

## Ders Öncesi Testi
[Ders öncesi sınav](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/1)

## Giriiş

Bu derste şunları ele alacağız:

- Programlama nedir?
- Programlama dili türleri
- Bir programın temel öğeleri
- Profesyonel geliştiriciler için faydalı yazılım ve araçlar

> Bu dersi [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming?WT.mc_id=academic-77807-sagibbon) üzerinden alabilirsiniz!

## Programlama Nedir?

Programlama (kodlama olarak da bilinir), bilgisayar veya mobil cihaz gibi bir cihaz için talimat yazma işlemidir. Bu talimatları daha sonra cihaz tarafından yorumlanan bir programlama dili ile yazıyoruz. Bu talimat setlerine çeşitli adlar verilebilir, ancak *program*, *bilgisayar programı*, *uygulama (uygulama)* ve *yürütülebilir* birkaç popüler addır.

Bir *program*, kodla yazılmış herhangi bir şey olabilir; web siteleri, oyunlar ve telefon uygulamaları programlardır. Kod yazmadan program oluşturmak mümkün olsa da, altta yatan mantık cihaz tarafından yorumlanır ve bu mantık büyük olasılıkla kodla yazılmıştır. *Kod çalıştıran* veya *yürüten* bir program talimatları yerine getiriyor. Bu dersi okuduğunuz cihaz, onu ekranınıza yazdırmak için bir program çalıştırıyor.

✅ Biraz araştırma yapın: Dünyanın ilk bilgisayar programcısı olarak kabul edilen kişi kimdir?


## Programlama dilleri

Programlama dilleri, geliştiricilerin bir aygıt için yönergeler yazmasını sağlar. Cihazlar yalnızca ikiliyi (1'ler ve 0'lar) anlayabilir ve *çoğu* geliştirici için bu, iletişim kurmanın pek verimli bir yolu değildir. Programlama dilleri, insanlar ve bilgisayarlar arasındaki iletişim aracıdır.

Programlama dilleri farklı biçimlerde gelir ve farklı amaçlara hizmet edebilir. Örneğin, JavaScript öncelikle web uygulamaları için kullanılırken, Bash öncelikle işletim sistemleri için kullanılır.

*Düşük seviyeli diller*, bir cihazın talimatları yorumlaması için genellikle *yüksek seviyeli dillerden* daha az adım gerektirir. Ancak, yüksek seviyeli dilleri popüler yapan okunabilirliği ve desteğidir. JavaScript, üst düzey bir dil olarak kabul edilir.

Aşağıdaki kod, JavaScript içeren yüksek seviyeli bir dil ile ARM derleme kodlu düşük seviyeli bir dil arasındaki farkı göstermektedir.

```javascript
sayı = 10 olsun
n1 = 0, n2 = 1, nextTerm olsun;

için (i = 1 olsun; i <= sayı; i++) {
    konsol.log(n1);
    sonraki Terim = n1 + n2;
    n1 = n2;
    n2 = sonraki Terim;
}
```

```c
 alan yükselişi,kod,salt okunur
 giriş
 kod32
 adr r0,başparmak+1
 bx r0
 kod16
baş parmak
 hareket r0,#00
 alt r0,r0,#01
 hareket r1,#01
 hareket r4,#10
 ldr r2,=0x40000000
geri ekle r0,r1
 str r0,[r2]
 r2,#04 ekle
 hareket r3,r0
 hareket r0,r1
 hareket r1,r3
 alt r4,#01
 cmp r4,#00
 geri dön
 son
```

İster inanın ister inanmayın, *ikisi de aynı şeyi yapıyor*: 10'a kadar bir Fibonacci dizisi basıyor.

✅ Bir Fibonacci dizisi, 0 ve 1'den başlayarak her sayı kendinden önceki iki sayının toplamı olacak şekilde bir sayı kümesi olarak [tanımlanmıştır](https://en.wikipedia.org/wiki/Fibonacci_number).

## Bir Programın Öğeleri

Bir programdaki tek bir talimata *ifade* denir ve genellikle talimatın nerede bittiğini veya *bittiğini* gösteren bir karakter veya satır aralığı bulunur. Bir programın nasıl sona erdiği her dile göre değişir.

Bir program içindeki ifadeler, talimatları yerine getirmek için bir kullanıcı veya başka bir yer tarafından sağlanan verilere dayanabilir. Veriler, bir programın davranışını değiştirebilir, bu nedenle programlama dilleri, verileri daha sonra kullanılmak üzere geçici olarak depolamanın bir yolunu sunar. Bunlara *değişkenler* denir. Değişkenler, bir aygıta verileri belleğine kaydetmesi talimatını veren ifadelerdir. Programlardaki değişkenler, benzersiz bir ada sahip oldukları ve değerlerinin zaman içinde değişebileceği cebirdeki değişkenlere benzer.

Bazı ifadelerin bir cihaz tarafından yürütülmeme ihtimali vardır. Bu genellikle geliştirici tarafından yazıldığında tasarım gereğidir veya beklenmeyen bir hata oluştuğunda kazara olur. Bir uygulama üzerindeki bu tür kontrol, onu daha sağlam ve sürdürülebilir hale getirir. Tipik olarak, kontroldeki bu değişiklikler belirli koşullar karşılandığında gerçekleşir. Bir programın nasıl çalıştığını kontrol etmek için modern programlamada kullanılan yaygın bir ifade, "if..else" ifadesidir.

✅ Sonraki derslerde bu tür ifadeler hakkında daha fazla bilgi edineceksiniz.

## Geliştirme Araçları

[![Geliştirme Araçları](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Geliştirme Araçları")

> 🎥 Kalıplama ile ilgili bir video için yukarıdaki resme tıklayın

Bu bölümde, profesyonel gelişim yolculuğunuza başlarken çok faydalı bulabileceğiniz bazı yazılımlar hakkında bilgi edineceksiniz.

**Geliştirme ortamı**, bir geliştiricinin yazılım yazarken sıklıkla kullandığı benzersiz bir araçlar ve özellikler grubudur. Bu araçlardan bazıları bir geliştiricinin özel ihtiyaçlarına göre özelleştirilmiştir ve bu geliştirici işteki, kişisel projelerdeki önceliklerini değiştirirse veya farklı bir programlama dili kullandıklarında zaman içinde değişebilir. Geliştirme ortamları, onları kullanan geliştiriciler kadar benzersizdir.

#### Popüler Düzenleyiciler ve Web Geliştirme Uzantıları

- [Visual Studio Kodu](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)
  - [Kod Yazım Denetleyicisi](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker/?WT.mc_id=academic-77807-sagibbon)
  - [Canlı Paylaşım](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack/?WT.mc_id=academic-77807-sagibbon)
  - [Daha Güzel - Kod biçimlendirici](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode/?WT.mc_id=academic-77807-sagibbon)
- [Atom](https://atom.io/)
  - [yazım denetimi](https://atom.io/packages/spell-check)
  - [teleyazıp](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)
  
- [www.sublimetext](https://www.sublimetext.com/)
  - [emmet](https://emmet.io/)
  - [SublimeLinter](http://www.sublimelinter.com/en/stable/)

### Tarayıcılar

Bir diğer önemli araç da tarayıcıdır. Web geliştiricileri, kodlarının web üzerinde nasıl çalıştığını görmek için tarayıcıya güvenir. Ayrıca, bir web sayfasının HTML gibi düzenleyicide yazılan görsel öğelerini görüntülemek için de kullanılır.

Çoğu tarayıcı, geliştiricilerin uygulamaları hakkında önemli bilgileri toplamasına ve yakalamasına yardımcı olacak bir dizi yararlı özellik ve bilgi içeren *geliştirici araçları* (DevTools) ile birlikte gelir. Örneğin: Bir web sayfasında hatalar varsa, bunların ne zaman oluştuğunu bilmek bazen yardımcı olabilir. Bir tarayıcıdaki DevTools, bu bilgileri yakalamak için yapılandırılabilir.

#### Popüler Tarayıcılar ve Geliştirme Araçları

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Komut Satırı Araçları

Bazı geliştiriciler, günlük görevleri için daha az grafiksel bir görünümü tercih eder ve bunu başarmak için komut satırına güvenir. Kod yazmak, önemli miktarda yazmayı gerektirir ve bazı geliştiriciler klavyedeki akışlarını bozmamayı tercih eder. Masaüstü pencereleri arasında geçiş yapmak, farklı dosyalar üzerinde çalışmak ve araçları kullanmak için klavye kısayollarını kullanacaklar. Görevlerin çoğu bir fare ile tamamlanabilir, ancak komut satırını kullanmanın bir yararı da, fare ve klavye arasında geçiş yapmaya gerek kalmadan komut satırı araçlarıyla pek çok şeyin yapılabilmesidir. Komut satırının diğer bir avantajı da yapılandırılabilir olmaları ve özel bir yapılandırmayı kaydedebilmeniz, daha sonra değiştirebilmeniz ve diğer geliştirme makinelerine aktarabilmenizdir. Geliştirme ortamları her geliştirici için çok benzersiz olduğundan, bazıları komut satırını kullanmaktan kaçınacak, bazıları tamamen ona güvenecek ve bazıları ikisinin karışımını tercih edecek.

#### Pencereler

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7?WT.mc_id=academic-77807-sagibbon) 💻
- [Komut Satırı](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands?WT.mc_id=academic-77807-sagibbon) (CMD olarak da bilinir) 💻
- [Windows Terminali](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)
- [mintty](https://mintty.github.io/)
  
#### Mac os işletim sistemi

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7?WT.mc_id=academic-77807-sagibbon)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7?WT.mc_id=academic-77807-sagibbon)

#### Popüler Komut Satırı Araçları

- [Git](https://git-scm.com/) (💻 çoğu işletim sisteminde)
- [NPM](https://www.npmjs.com/)
- [İplik](https://classic.yarnpkg.com/en/docs/cli/)

### Dokümantasyon

Bir geliştirici yeni bir şey öğrenmek istediğinde, onu nasıl kullanacağını öğrenmek için büyük ihtimalle belgelere başvurur. Geliştiriciler, araçları ve dilleri doğru bir şekilde nasıl kullanacakları konusunda kendilerine rehberlik etmesi ve ayrıca nasıl çalıştığı hakkında daha derin bilgi edinmeleri için genellikle belgelere güvenirler.

#### Web Geliştirme Konusunda Popüler Belgeler

- [Firefox](https://www.mozilla.org/firefox/) tarayıcısının yayıncısı Mozilla'dan [Mozilla Geliştirici Ağı (MDN)](https://developer.mozilla.org/docs/Web)
- [Ön Uç Uzmanları](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), Google'dan, [Chrome](https://www.google.com/chrome/) yayıncıları
- [Microsoft Edge](https: //www.microsoft.com/edge/?WT.mc_id=academic-77807-sagibbon)

✅ Biraz araştırma yapın: Artık bir web geliştirici ortamının temellerini bildiğinize göre, onu bir web tasarımcısının ortamıyla karşılaştırın ve karşılaştırın.

---

## 🚀 Meydan Okuma

Bazı programlama dillerini karşılaştırın. Java'ya karşı JavaScript'in benzersiz özelliklerinden bazıları nelerdir? COBOL'a karşı Go'ya ne dersiniz?

## Ders Sonrası Sınav
[Ders sonrası sınav](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/2)

## İnceleme ve Bireysel Çalışma

Programcının kullanabileceği farklı diller üzerinde biraz çalışın. Bir dilde bir satır yazmaya çalışın ve ardından diğer iki dilde yeniden yazın. Ne öğrendin?

## Atama

[Belgeleri Okuma](atama.md)