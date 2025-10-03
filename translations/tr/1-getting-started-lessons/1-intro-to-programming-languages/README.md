<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2581528206a2a01c3a0b9c88e039b7bc",
  "translation_date": "2025-10-03T09:44:00+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "tr"
}
-->
# Programlama Dillerine ve Geliştirici Araçlarına Giriş

Bu ders, programlama dillerinin temellerini kapsar. Burada ele alınan konular, günümüzdeki modern programlama dillerinin çoğuna uygulanabilir. 'Geliştirici Araçları' bölümünde, bir geliştirici olarak size yardımcı olacak faydalı yazılımlar hakkında bilgi edineceksiniz.

![Programlama Girişi](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.tr.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ders Öncesi Test
[Ders öncesi test](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Giriş

Bu derste şunları ele alacağız:

- Programlama nedir?
- Programlama dillerinin türleri
- Bir programın temel öğeleri
- Profesyonel geliştiriciler için faydalı yazılım ve araçlar

> Bu dersi [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon) üzerinden alabilirsiniz!

## Programlama Nedir?

Programlama (kodlama olarak da bilinir), bir bilgisayar veya mobil cihaz gibi bir cihaz için talimatlar yazma sürecidir. Bu talimatları bir programlama dili ile yazarız ve cihaz bu dili yorumlar. Bu talimat setleri çeşitli isimlerle anılabilir, ancak *program*, *bilgisayar programı*, *uygulama (app)* ve *çalıştırılabilir dosya* en popüler isimlerden bazılarıdır.

Bir *program*, kodla yazılmış herhangi bir şey olabilir; web siteleri, oyunlar ve telefon uygulamaları programdır. Kod yazmadan bir program oluşturmak mümkün olsa da, cihaz tarafından yorumlanan temel mantık büyük olasılıkla kodla yazılmıştır. Kod *çalıştıran* veya *yürütülen* bir program, talimatları yerine getiriyor demektir. Bu dersi okuduğunuz cihaz, ekranınıza yazdırmak için bir program çalıştırıyor.

✅ Küçük bir araştırma yapın: Dünyanın ilk bilgisayar programcısı olarak kabul edilen kişi kimdir?

## Programlama Dilleri

Programlama dilleri, geliştiricilerin bir cihaz için talimatlar yazmasını sağlar. Cihazlar yalnızca ikili (1'ler ve 0'lar) anlayabilir ve *çoğu* geliştirici için bu, iletişim kurmanın verimli bir yolu değildir. Programlama dilleri, insanlar ve bilgisayarlar arasındaki iletişim aracıdır.

Programlama dilleri farklı formatlarda gelir ve farklı amaçlara hizmet edebilir. Örneğin, JavaScript ağırlıklı olarak web uygulamaları için kullanılırken, Bash ağırlıklı olarak işletim sistemleri için kullanılır.

*Düşük seviyeli diller*, bir cihazın talimatları yorumlaması için genellikle *yüksek seviyeli dillere* göre daha az adım gerektirir. Ancak, yüksek seviyeli dilleri popüler yapan şey, okunabilirlikleri ve destekleridir. JavaScript, yüksek seviyeli bir dil olarak kabul edilir.

Aşağıdaki kod, JavaScript ile yüksek seviyeli bir dil ve ARM assembly kodu ile düşük seviyeli bir dil arasındaki farkı göstermektedir.

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

✅ Fibonacci dizisi, [tanımlandığı](https://en.wikipedia.org/wiki/Fibonacci_number) gibi, her sayının kendisinden önceki iki sayının toplamı olduğu bir sayı dizisidir. Fibonacci dizisine göre ilk 10 sayı: 0, 1, 1, 2, 3, 5, 8, 13, 21 ve 34.

## Bir Programın Öğeleri

Bir programdaki tek bir talimat *ifade* olarak adlandırılır ve genellikle talimatın nerede sona erdiğini veya *sonlandığını* belirten bir karakter veya satır aralığına sahip olur. Bir programın nasıl sonlandığı, her dilde farklılık gösterir.

Bir programdaki ifadeler, bir kullanıcı veya başka bir kaynaktan sağlanan verilere dayanarak talimatları yerine getirebilir. Veriler, bir programın davranışını değiştirebilir, bu nedenle programlama dilleri, verileri geçici olarak saklamak için bir yol sunar. Bunlara *değişkenler* denir. Değişkenler, bir cihazın belleğinde veri saklamasını talimat veren ifadelerdir. Programlardaki değişkenler, cebirdeki değişkenlere benzer; benzersiz bir adı vardır ve değerleri zamanla değişebilir.

Bazı ifadelerin bir cihaz tarafından yürütülmeme olasılığı vardır. Bu genellikle geliştirici tarafından tasarlandığında veya beklenmeyen bir hata meydana geldiğinde kazara olur. Bir uygulama üzerindeki bu tür kontrol, onu daha sağlam ve sürdürülebilir hale getirir. Genellikle, bu kontrol değişiklikleri belirli koşullar sağlandığında gerçekleşir. Modern programlamada bir programın nasıl çalıştığını kontrol etmek için yaygın olarak kullanılan bir ifade `if..else` ifadesidir.

✅ Bu tür ifadeler hakkında daha fazla bilgiyi sonraki derslerde öğreneceksiniz.

## Geliştirici Araçları

[![Geliştirici Araçları](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Geliştirici Araçları")

> 🎥 Yukarıdaki görüntüye tıklayarak araçlar hakkında bir video izleyebilirsiniz

Bu bölümde, profesyonel geliştirme yolculuğunuza başlarken çok faydalı bulabileceğiniz bazı yazılımlar hakkında bilgi edineceksiniz.

**Geliştirme ortamı**, bir geliştiricinin yazılım yazarken sıkça kullandığı araçlar ve özelliklerin benzersiz bir kombinasyonudur. Bu araçların bazıları, geliştiricinin özel ihtiyaçlarına göre özelleştirilmiştir ve bu geliştirici iş önceliklerini, kişisel projelerini veya farklı bir programlama dili kullandığında değişebilir. Geliştirme ortamları, onları kullanan geliştiriciler kadar benzersizdir.

### Editörler

Yazılım geliştirme için en kritik araçlardan biri editördür. Editörler, kodunuzu yazdığınız ve bazen çalıştırdığınız yerdir.

Geliştiriciler editörlere birkaç ek nedenle güvenir:

- *Hata ayıklama* (debugging), koddaki hataları ve sorunları satır satır inceleyerek ortaya çıkarır. Bazı editörler hata ayıklama yeteneklerine sahiptir; bunlar belirli programlama dilleri için özelleştirilebilir ve eklenebilir.
- *Sözdizimi vurgulama* (syntax highlighting), kodu daha okunabilir hale getiren renkler ve metin biçimlendirmesi ekler. Çoğu editör, özelleştirilmiş sözdizimi vurgulamasına izin verir.
- *Eklentiler ve Entegrasyonlar*, geliştiriciler için geliştiriciler tarafından oluşturulmuş özel araçlardır. Bu araçlar temel editöre dahil edilmemiştir. Örneğin, birçok geliştirici kodlarını nasıl çalıştığını açıklamak için belgeler. Belgelerdeki yazım hatalarını bulmaya yardımcı olmak için bir yazım denetimi eklentisi yükleyebilirler. Çoğu eklenti belirli bir editör içinde kullanılmak üzere tasarlanmıştır ve çoğu editör, mevcut eklentileri aramak için bir yol sunar.
- *Özelleştirme*, geliştiricilerin ihtiyaçlarına uygun benzersiz bir geliştirme ortamı oluşturmasını sağlar. Çoğu editör son derece özelleştirilebilir ve geliştiricilerin özel eklentiler oluşturmasına da izin verebilir.

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

Bir diğer kritik araç tarayıcıdır. Web geliştiriciler, kodlarının web üzerinde nasıl çalıştığını görmek için tarayıcıya güvenir. Ayrıca, editörde yazılan HTML gibi bir web sayfasının görsel öğelerini görüntülemek için kullanılır.

Birçok tarayıcı, geliştiricilerin uygulamaları hakkında önemli bilgileri toplamasına ve yakalamasına yardımcı olan bir dizi faydalı özellik ve bilgi içeren *geliştirici araçları* (DevTools) ile birlikte gelir. Örneğin: Bir web sayfasında hatalar varsa, ne zaman meydana geldiklerini bilmek bazen faydalı olabilir. Bir tarayıcıdaki DevTools, bu bilgiyi yakalamak için yapılandırılabilir.

#### Popüler Tarayıcılar ve DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Komut Satırı Araçları

Bazı geliştiriciler günlük görevleri için daha az grafiksel bir görünümü tercih eder ve bunu başarmak için komut satırına güvenir. Kod yazmak önemli miktarda yazma gerektirir ve bazı geliştiriciler klavyedeki akışlarını bozmamayı tercih eder. Masaüstü pencereleri arasında geçiş yapmak, farklı dosyalar üzerinde çalışmak ve araçları kullanmak için klavye kısayollarını kullanırlar. Çoğu görev fare ile tamamlanabilir, ancak komut satırını kullanmanın bir avantajı, komut satırı araçlarıyla fare ve klavye arasında geçiş yapmadan çok şey yapılabilmesidir. Komut satırının bir diğer avantajı, yapılandırılabilir olması ve özel bir yapılandırmayı kaydedip daha sonra değiştirebilmeniz ve diğer geliştirme makinelerine aktarabilmenizdir. Geliştirme ortamları her geliştiriciye göre çok benzersiz olduğundan, bazıları komut satırını kullanmaktan kaçınır, bazıları tamamen ona güvenir ve bazıları ikisinin bir karışımını tercih eder.

### Popüler Komut Satırı Seçenekleri

Komut satırı seçenekleri, kullandığınız işletim sistemine bağlı olarak farklılık gösterecektir.

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

- [Git](https://git-scm.com/) (💻 çoğu işletim sisteminde)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Dokümantasyon

Bir geliştirici yeni bir şey öğrenmek istediğinde, büyük olasılıkla bunu nasıl kullanacağını öğrenmek için dokümantasyona başvuracaktır. Geliştiriciler genellikle araçları ve dilleri doğru bir şekilde nasıl kullanacaklarını öğrenmek ve ayrıca nasıl çalıştığı hakkında daha derin bir bilgi edinmek için dokümantasyona güvenirler.

#### Web Geliştirme ile İlgili Popüler Dokümantasyon

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), Mozilla'dan, [Firefox](https://www.mozilla.org/firefox/) tarayıcısının yayıncıları
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), Google'dan, [Chrome](https://www.google.com/chrome/) yayıncıları
- [Microsoft'un kendi geliştirici dokümanları](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), [Microsoft Edge](https://www.microsoft.com/edge) için
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Biraz araştırma yapın: Artık bir web geliştiricisinin ortamının temellerini bildiğinize göre, bunu bir web tasarımcısının ortamıyla karşılaştırın.

---

## 🚀 Zorluk

Bazı programlama dillerini karşılaştırın. JavaScript ile Java'nın bazı benzersiz özellikleri nelerdir? Peki ya COBOL ile Go?

## Ders Sonrası Test
[Ders sonrası test](https://ff-quizzes.netlify.app/web/)

## Gözden Geçirme ve Kendi Kendine Çalışma

Programcılar için mevcut olan farklı diller hakkında biraz araştırma yapın. Bir dilde bir satır yazmayı deneyin ve ardından bunu iki farklı dilde yeniden yazın. Ne öğrendiniz?

## Ödev

[Dokümanları Okuma](assignment.md)

> Not: Ödeviniz için araç seçerken, yukarıda listelenmiş editörleri, tarayıcıları veya komut satırı araçlarını seçmeyin.

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluğu sağlamak için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.