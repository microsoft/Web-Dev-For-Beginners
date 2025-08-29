<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2dcbb9259dee4f20a4f08d9a1aa2bd4c",
  "translation_date": "2025-08-29T00:31:07+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "tr"
}
-->
# Programlama Dillerine ve Geliştirici Araçlarına Giriş

Bu ders, programlama dillerinin temellerini kapsar. Burada ele alınan konular, günümüzdeki modern programlama dillerinin çoğuna uygulanabilir. 'Geliştirici Araçları' bölümünde, bir geliştirici olarak size yardımcı olacak faydalı yazılımlar hakkında bilgi edineceksiniz.

![Programlamaya Giriş](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.tr.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ders Öncesi Test
[Ders öncesi testi](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Giriş

Bu derste şunları ele alacağız:

- Programlama nedir?
- Programlama dillerinin türleri
- Bir programın temel unsurları
- Profesyonel geliştiriciler için faydalı yazılımlar ve araçlar

> Bu dersi [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon) üzerinden alabilirsiniz!

## Programlama Nedir?

Programlama (kodlama olarak da bilinir), bir bilgisayar veya mobil cihaz gibi bir cihaz için talimatlar yazma sürecidir. Bu talimatları bir programlama diliyle yazarız ve cihaz bu dili yorumlar. Bu talimat setleri farklı isimlerle anılabilir, ancak *program*, *bilgisayar programı*, *uygulama (app)* ve *çalıştırılabilir dosya* en yaygın isimlerdir.

Bir *program*, kodla yazılmış herhangi bir şey olabilir; web siteleri, oyunlar ve telefon uygulamaları programlara örnektir. Kod yazmadan bir program oluşturmak mümkün olsa da, cihazın yorumladığı temel mantık büyük olasılıkla kodla yazılmıştır. *Çalışan* veya *çalıştırılan* bir program, talimatları yerine getiriyor demektir. Bu dersi okuduğunuz cihaz, ekranınıza bu içeriği yazdırmak için bir program çalıştırıyor.

✅ Küçük bir araştırma yapın: Dünyanın ilk bilgisayar programcısı olarak kabul edilen kişi kimdir?

## Programlama Dilleri

Programlama dilleri, geliştiricilerin bir cihaz için talimatlar yazmasını sağlar. Cihazlar yalnızca ikili (1'ler ve 0'lar) anlayabilir ve *çoğu* geliştirici için bu, iletişim kurmanın verimli bir yolu değildir. Programlama dilleri, insanlar ve bilgisayarlar arasındaki iletişim aracıdır.

Programlama dilleri farklı formatlarda olabilir ve farklı amaçlara hizmet edebilir. Örneğin, JavaScript genellikle web uygulamaları için kullanılırken, Bash genellikle işletim sistemleri için kullanılır.

*Düşük seviyeli diller*, bir cihazın talimatları yorumlaması için genellikle *yüksek seviyeli dillere* göre daha az adım gerektirir. Ancak, yüksek seviyeli dilleri popüler yapan şey, okunabilirlikleri ve desteklenebilirlikleridir. JavaScript, yüksek seviyeli bir dil olarak kabul edilir.

Aşağıdaki kod, JavaScript ile yüksek seviyeli bir dil ve ARM montaj koduyla düşük seviyeli bir dil arasındaki farkı göstermektedir.

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

İnanması zor olabilir, ancak *ikisi de aynı şeyi yapıyor*: 10'a kadar bir Fibonacci dizisi yazdırıyor.

✅ Fibonacci dizisi, [şöyle tanımlanır](https://en.wikipedia.org/wiki/Fibonacci_number): Her sayının, kendisinden önceki iki sayının toplamı olduğu bir sayı dizisi. 0 ve 1 ile başlar. Fibonacci dizisini takip eden ilk 10 sayı: 0, 1, 1, 2, 3, 5, 8, 13, 21 ve 34.

## Bir Programın Unsurları

Bir programdaki tek bir talimat, *ifade* olarak adlandırılır ve genellikle talimatın nerede bittiğini veya *sonlandığını* belirten bir karakter veya satır aralığına sahiptir. Bir programın nasıl sonlandığı, kullanılan dile bağlı olarak değişir.

Bir programdaki ifadeler, bir kullanıcıdan veya başka bir yerden sağlanan verilere dayanarak talimatları yerine getirebilir. Veriler, bir programın davranışını değiştirebilir, bu nedenle programlama dilleri, verilerin daha sonra kullanılabilmesi için geçici olarak saklanmasını sağlayan bir yol sunar. Bunlara *değişkenler* denir. Değişkenler, bir cihazın belleğinde veri saklamasını söyleyen ifadelerdir. Programlardaki değişkenler, cebirdeki değişkenlere benzer; benzersiz bir isme sahiptirler ve değerleri zamanla değişebilir.

Bazı ifadelerin bir cihaz tarafından çalıştırılmama olasılığı vardır. Bu genellikle geliştirici tarafından tasarlandığında veya beklenmeyen bir hata oluştuğunda meydana gelir. Bir uygulama üzerindeki bu tür bir kontrol, onu daha sağlam ve sürdürülebilir hale getirir. Genellikle, bu kontrol değişiklikleri belirli koşullar karşılandığında gerçekleşir. Modern programlamada bir programın nasıl çalışacağını kontrol etmek için yaygın olarak kullanılan bir ifade `if..else` ifadesidir.

✅ Bu tür ifadeler hakkında daha fazla bilgiyi sonraki derslerde öğreneceksiniz.

## Geliştirici Araçları

[![Geliştirici Araçları](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Geliştirici Araçları")

> 🎥 Yukarıdaki görsele tıklayarak araçlar hakkında bir video izleyebilirsiniz.

Bu bölümde, profesyonel geliştirme yolculuğunuza başlarken faydalı bulabileceğiniz bazı yazılımlar hakkında bilgi edineceksiniz.

Bir **geliştirme ortamı**, bir geliştiricinin yazılım yazarken sıkça kullandığı araçlar ve özelliklerden oluşan benzersiz bir settir. Bu araçların bazıları, geliştiricinin özel ihtiyaçlarına göre özelleştirilmiştir ve geliştiricinin iş öncelikleri, kişisel projeleri veya kullandığı programlama dili değiştiğinde zamanla değişebilir. Geliştirme ortamları, onları kullanan geliştiriciler kadar benzersizdir.

### Editörler

Yazılım geliştirme için en önemli araçlardan biri editördür. Editörler, kodunuzu yazdığınız ve bazen çalıştırdığınız yerlerdir.

Geliştiriciler, editörleri birkaç ek nedenle kullanır:

- *Hata ayıklama (Debugging)*, kodu satır satır inceleyerek hataları ve sorunları ortaya çıkarır. Bazı editörler hata ayıklama özelliklerine sahiptir; bunlar belirli programlama dilleri için özelleştirilebilir ve eklenebilir.
- *Sözdizimi vurgulama (Syntax highlighting)*, koda renkler ve metin biçimlendirmesi ekleyerek okunmasını kolaylaştırır. Çoğu editör, özelleştirilmiş sözdizimi vurgulamasına izin verir.
- *Eklentiler ve Entegrasyonlar*, geliştiriciler için geliştiriciler tarafından oluşturulmuş özel araçlardır. Bu araçlar, temel editöre dahil edilmemiştir. Örneğin, birçok geliştirici, kodlarının nasıl çalıştığını açıklamak için belgeler yazar. Belge içindeki yazım hatalarını bulmaya yardımcı olmak için bir yazım denetimi eklentisi yükleyebilirler. Çoğu eklenti, belirli bir editör içinde kullanım için tasarlanmıştır ve çoğu editör, mevcut eklentileri aramak için bir yol sunar.
- *Özelleştirme*, geliştiricilerin ihtiyaçlarına uygun benzersiz bir geliştirme ortamı oluşturmasını sağlar. Çoğu editör son derece özelleştirilebilir ve geliştiricilerin özel eklentiler oluşturmasına da olanak tanır.

#### Popüler Editörler ve Web Geliştirme Eklentileri

- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)
  
- [Sublimetext](https://www.sublimetext.com/)
  - [emmet](https://emmet.io/)
  - [SublimeLinter](http://www.sublimelinter.com/en/stable/)

### Tarayıcılar

Bir diğer önemli araç tarayıcılardır. Web geliştiricileri, kodlarının web üzerinde nasıl çalıştığını görmek için tarayıcıya güvenirler. Ayrıca, editörde yazılan HTML gibi bir web sayfasının görsel öğelerini görüntülemek için de kullanılır.

Birçok tarayıcı, geliştiricilerin uygulamaları hakkında önemli bilgileri toplamasına ve yakalamasına yardımcı olan bir dizi özellik ve bilgi içeren *geliştirici araçları* (DevTools) ile birlikte gelir. Örneğin: Bir web sayfasında hatalar varsa, bunların ne zaman meydana geldiğini bilmek bazen faydalı olabilir. Bir tarayıcıdaki DevTools, bu bilgileri yakalamak için yapılandırılabilir.

#### Popüler Tarayıcılar ve Geliştirici Araçları

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Komut Satırı Araçları

Bazı geliştiriciler, günlük görevleri için daha az grafiksel bir görünümü tercih eder ve bunu başarmak için komut satırına güvenirler. Kod yazmak, önemli miktarda yazı yazmayı gerektirir ve bazı geliştiriciler, klavye üzerindeki akışlarını bozmamayı tercih eder. Masaüstü pencereleri arasında geçiş yapmak, farklı dosyalar üzerinde çalışmak ve araçları kullanmak için klavye kısayollarını kullanırlar. Çoğu görev fare ile tamamlanabilir, ancak komut satırını kullanmanın bir avantajı, fare ve klavye arasında geçiş yapmaya gerek kalmadan birçok şeyin yapılabilmesidir. Komut satırının bir diğer avantajı, yapılandırılabilir olmasıdır; özel bir yapılandırma kaydedebilir, daha sonra değiştirebilir ve diğer geliştirme makinelerine aktarabilirsiniz. Geliştirme ortamları her geliştiriciye özgü olduğu için, bazıları komut satırını hiç kullanmaz, bazıları tamamen ona güvenir ve bazıları ikisinin bir karışımını tercih eder.

### Popüler Komut Satırı Seçenekleri

Komut satırı seçenekleri, kullandığınız işletim sistemine bağlı olarak değişir.

*💻 = işletim sistemine önceden yüklenmiş olarak gelir.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Komut Satırı](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (CMD olarak da bilinir) 💻
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

- [Git](https://git-scm.com/) (💻 çoğu işletim sisteminde önceden yüklü)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Dokümantasyon

Bir geliştirici yeni bir şey öğrenmek istediğinde, büyük olasılıkla nasıl kullanılacağını öğrenmek için dokümantasyona başvurur. Geliştiriciler, araçları ve dilleri doğru bir şekilde nasıl kullanacaklarını öğrenmek ve ayrıca nasıl çalıştıkları hakkında daha derin bir bilgi edinmek için genellikle dokümantasyona güvenirler.

#### Web Geliştirme Üzerine Popüler Dokümantasyonlar

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), [Firefox](https://www.mozilla.org/firefox/) tarayıcısının yayıncısı Mozilla'dan
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), [Chrome](https://www.google.com/chrome/) tarayıcısının yayıncısı Google'dan
- [Microsoft'un kendi geliştirici dokümanları](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), [Microsoft Edge](https://www.microsoft.com/edge) için
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Biraz araştırma yapın: Artık bir web geliştiricisinin ortamının temellerini bildiğinize göre, bunu bir web tasarımcısının ortamıyla karşılaştırın ve farklılıklarını inceleyin.

---

## 🚀 Meydan Okuma

Bazı programlama dillerini karşılaştırın. JavaScript ile Java'nın bazı benzersiz özellikleri nelerdir? Peki ya COBOL ile Go?

## Ders Sonrası Test
[Ders sonrası testi](https://ff-quizzes.netlify.app/web/)

## Gözden Geçirme ve Kendi Kendine Çalışma

Programcılar için mevcut olan farklı diller hakkında biraz araştırma yapın. Bir dilde bir satır yazmayı deneyin ve ardından bunu iki farklı dilde yeniden yazın. Ne öğrendiniz?

## Ödev

[Dokümanları Okuma](assignment.md)

---

**Feragatname**:  
Bu belge, [Co-op Translator](https://github.com/Azure/co-op-translator) adlı yapay zeka çeviri hizmeti kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel bir insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlama veya yanlış yorumlamalardan sorumlu değiliz.