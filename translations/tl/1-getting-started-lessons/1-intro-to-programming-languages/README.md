<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2dcbb9259dee4f20a4f08d9a1aa2bd4c",
  "translation_date": "2025-08-28T15:53:29+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "tl"
}
-->
# Panimula sa Mga Wika ng Programming at Mga Kasangkapan ng Propesyon

Ang araling ito ay tumatalakay sa mga pangunahing kaalaman ng mga wika ng programming. Ang mga paksang tinalakay dito ay naaangkop sa karamihan ng mga modernong wika ng programming ngayon. Sa seksyong 'Mga Kasangkapan ng Propesyon', matututo ka tungkol sa mga kapaki-pakinabang na software na makakatulong sa iyo bilang isang developer.

![Intro Programming](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.tl.png)
> Sketchnote ni [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz
[Pre-lecture quiz](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Panimula

Sa araling ito, tatalakayin natin:

- Ano ang programming?
- Mga uri ng wika ng programming
- Mga pangunahing elemento ng isang programa
- Kapaki-pakinabang na software at mga kasangkapan para sa propesyonal na developer

> Maaari mong kunin ang araling ito sa [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## Ano ang Programming?

Ang programming (kilala rin bilang coding) ay ang proseso ng pagsulat ng mga tagubilin para sa isang device tulad ng computer o mobile device. Isinusulat natin ang mga tagubilin gamit ang isang wika ng programming, na pagkatapos ay binibigyang-kahulugan ng device. Ang mga set ng tagubilin na ito ay maaaring tawaging iba't ibang pangalan, ngunit *program*, *computer program*, *application (app)*, at *executable* ay ilan sa mga sikat na pangalan.

Ang isang *program* ay maaaring anumang bagay na isinulat gamit ang code; mga website, laro, at mga app sa telepono ay mga programa. Bagama't posible na lumikha ng isang programa nang hindi nagsusulat ng code, ang pinagbabatayan na lohika ay binibigyang-kahulugan ng device at ang lohikang iyon ay malamang na isinulat gamit ang code. Ang isang programang *tumatakbo* o *nagpapatupad* ng code ay nagsasagawa ng mga tagubilin. Ang device na ginagamit mo upang basahin ang araling ito ay tumatakbo ng isang programa upang ipakita ito sa iyong screen.

✅ Mag-research ng kaunti: Sino ang itinuturing na unang computer programmer sa mundo?

## Mga Wika ng Programming

Ang mga wika ng programming ay nagbibigay-daan sa mga developer na magsulat ng mga tagubilin para sa isang device. Ang mga device ay maaari lamang makaintindi ng binary (1s at 0s), at para sa *karamihan* ng mga developer, hindi ito isang epektibong paraan ng komunikasyon. Ang mga wika ng programming ang nagsisilbing tulay ng komunikasyon sa pagitan ng tao at ng computer.

Ang mga wika ng programming ay may iba't ibang format at maaaring maglingkod sa iba't ibang layunin. Halimbawa, ang JavaScript ay pangunahing ginagamit para sa mga web application, habang ang Bash ay pangunahing ginagamit para sa mga operating system.

*Low level languages* ay karaniwang nangangailangan ng mas kaunting hakbang kaysa sa *high level languages* para ma-interpret ng isang device ang mga tagubilin. Gayunpaman, ang dahilan kung bakit popular ang high level languages ay ang kanilang readability at suporta. Ang JavaScript ay itinuturing na isang high level language.

Ang sumusunod na code ay nagpapakita ng pagkakaiba sa pagitan ng isang high level language gamit ang JavaScript at isang low level language gamit ang ARM assembly code.

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

Maniwala ka man o hindi, *pareho lang ang ginagawa nila*: nagpi-print ng Fibonacci sequence hanggang 10.

✅ Ang Fibonacci sequence ay [tinukoy](https://en.wikipedia.org/wiki/Fibonacci_number) bilang isang set ng mga numero kung saan ang bawat numero ay ang kabuuan ng dalawang naunang numero, simula sa 0 at 1. Ang unang 10 numero sa Fibonacci sequence ay 0, 1, 1, 2, 3, 5, 8, 13, 21, at 34.

## Mga Elemento ng Isang Programa

Ang isang solong tagubilin sa isang programa ay tinatawag na *statement* at karaniwang may karakter o espasyo sa linya na nagmamarka kung saan nagtatapos ang tagubilin, o *terminates*. Ang paraan ng pag-terminate ng isang programa ay nag-iiba sa bawat wika.

Ang mga statement sa loob ng isang programa ay maaaring umasa sa data na ibinigay ng isang user o mula sa ibang lugar upang maisagawa ang mga tagubilin. Ang data ay maaaring magbago kung paano kumikilos ang isang programa, kaya ang mga wika ng programming ay may paraan upang pansamantalang iimbak ang data upang magamit ito sa hinaharap. Ang mga ito ay tinatawag na *variables*. Ang mga variables ay mga statement na nag-uutos sa isang device na i-save ang data sa memory nito. Ang mga variables sa mga programa ay katulad ng mga variables sa algebra, kung saan mayroon silang natatanging pangalan at ang kanilang halaga ay maaaring magbago sa paglipas ng panahon.

May posibilidad na ang ilang mga statement ay hindi maisasagawa ng isang device. Karaniwan itong sinasadya kapag isinulat ng developer o hindi sinasadya kapag nagkaroon ng hindi inaasahang error. Ang ganitong uri ng kontrol sa isang application ay ginagawa itong mas matatag at mas madaling mapanatili. Karaniwan, ang mga pagbabagong ito sa kontrol ay nangyayari kapag natugunan ang ilang mga kondisyon. Ang isang karaniwang statement na ginagamit sa modernong programming upang kontrolin kung paano tumatakbo ang isang programa ay ang `if..else` statement.

✅ Matututo ka pa tungkol sa ganitong uri ng statement sa mga susunod na aralin.

## Mga Kasangkapan ng Propesyon

[![Tools of the Trade](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools of the Trade")

> 🎥 I-click ang imahe sa itaas para sa isang video tungkol sa mga kasangkapan

Sa seksyong ito, matututo ka tungkol sa ilang software na maaaring maging kapaki-pakinabang habang sinisimulan mo ang iyong propesyonal na paglalakbay bilang developer.

Ang **development environment** ay isang natatanging set ng mga kasangkapan at tampok na madalas ginagamit ng isang developer kapag nagsusulat ng software. Ang ilan sa mga kasangkapang ito ay na-customize para sa mga partikular na pangangailangan ng developer, at maaaring magbago sa paglipas ng panahon kung magbabago ang mga priyoridad ng developer sa trabaho, personal na proyekto, o kapag gumamit ng ibang wika ng programming. Ang mga development environment ay kasing natatangi ng mga developer na gumagamit nito.

### Mga Editor

Isa sa pinakamahalagang kasangkapan para sa software development ay ang editor. Ang mga editor ang lugar kung saan mo isinusulat ang iyong code at kung minsan ay kung saan mo pinapatakbo ang iyong code.

Umaasa ang mga developer sa mga editor para sa ilang karagdagang dahilan:

- *Debugging* ay tumutulong na matuklasan ang mga bug at error sa pamamagitan ng pagdaan sa code, linya bawat linya. Ang ilang editor ay may kakayahan sa debugging; maaari itong i-customize at idagdag para sa mga partikular na wika ng programming.
- *Syntax highlighting* ay nagdadagdag ng mga kulay at pag-format ng teksto sa code, na ginagawang mas madaling basahin. Karamihan sa mga editor ay nagpapahintulot ng customized syntax highlighting.
- *Extensions and Integrations* ay mga espesyal na kasangkapan para sa mga developer, gawa ng mga developer. Ang mga kasangkapang ito ay hindi bahagi ng base editor. Halimbawa, maraming developer ang nagdodokumento ng kanilang code upang ipaliwanag kung paano ito gumagana. Maaari silang mag-install ng spell check extension upang matulungan silang makita ang mga typo sa dokumentasyon. Karamihan sa mga extension ay nilalayon para sa paggamit sa loob ng isang partikular na editor, at karamihan sa mga editor ay may paraan upang maghanap ng mga available na extension.
- *Customization* ay nagbibigay-daan sa mga developer na lumikha ng natatanging development environment na angkop sa kanilang mga pangangailangan. Karamihan sa mga editor ay lubos na nako-customize at maaari ring payagan ang mga developer na lumikha ng mga custom na extension.

#### Mga Sikat na Editor at Web Development Extensions

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

### Mga Browser

Isa pang mahalagang kasangkapan ay ang browser. Umaasa ang mga web developer sa browser upang makita kung paano tumatakbo ang kanilang code sa web. Ginagamit din ito upang ipakita ang mga visual na elemento ng isang web page na isinulat sa editor, tulad ng HTML.

Maraming browser ang may *developer tools* (DevTools) na naglalaman ng set ng mga kapaki-pakinabang na tampok at impormasyon upang matulungan ang mga developer na mangolekta at makuha ang mahalagang impormasyon tungkol sa kanilang application. Halimbawa: Kung ang isang web page ay may mga error, minsan ay kapaki-pakinabang na malaman kung kailan ito nangyari. Ang DevTools sa isang browser ay maaaring i-configure upang makuha ang impormasyong ito.

#### Mga Sikat na Browser at DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Mga Kasangkapan sa Command Line

Ang ilang mga developer ay mas gusto ang mas hindi graphical na view para sa kanilang pang-araw-araw na gawain at umaasa sa command line upang makamit ito. Ang pagsusulat ng code ay nangangailangan ng malaking dami ng pagta-type at ang ilang mga developer ay mas gustong hindi maantala ang kanilang daloy sa keyboard. Gagamit sila ng mga keyboard shortcut upang magpalipat-lipat sa mga desktop window, magtrabaho sa iba't ibang file, at gumamit ng mga kasangkapan. Karamihan sa mga gawain ay maaaring gawin gamit ang mouse, ngunit ang isang benepisyo ng paggamit ng command line ay marami ang maaaring gawin gamit ang mga kasangkapan sa command line nang hindi kinakailangang magpalipat-lipat sa pagitan ng mouse at keyboard. Isa pang benepisyo ng command line ay ang mga ito ay nako-configure at maaari mong i-save ang isang custom na configuration, baguhin ito sa ibang pagkakataon, at i-import ito sa iba pang development machines. Dahil ang mga development environment ay napaka-natatangi sa bawat developer, ang ilan ay iiwas sa paggamit ng command line, ang ilan ay lubos na umaasa dito, at ang ilan ay mas gusto ang halo ng dalawa.

### Mga Sikat na Opsyon sa Command Line

Ang mga opsyon para sa command line ay nag-iiba batay sa operating system na ginagamit mo.

*💻 = naka-preinstall sa operating system.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (kilala rin bilang CMD) 💻
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

#### Mga Sikat na Kasangkapan sa Command Line

- [Git](https://git-scm.com/) (💻 sa karamihan ng mga operating system)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Dokumentasyon

Kapag ang isang developer ay gustong matuto ng bago, malamang na babaling sila sa dokumentasyon upang matutunan kung paano ito gamitin. Madalas na umaasa ang mga developer sa dokumentasyon upang gabayan sila kung paano gamitin nang tama ang mga kasangkapan at wika, at upang makakuha ng mas malalim na kaalaman kung paano ito gumagana.

#### Mga Sikat na Dokumentasyon sa Web Development

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), mula sa Mozilla, ang publisher ng [Firefox](https://www.mozilla.org/firefox/) browser
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), mula sa Google, publisher ng [Chrome](https://www.google.com/chrome/)
- [Microsoft's own developer docs](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), para sa [Microsoft Edge](https://www.microsoft.com/edge)
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Mag-research: Ngayon na alam mo na ang mga pangunahing kaalaman ng environment ng isang web developer, ihambing ito sa environment ng isang web designer.

---

## 🚀 Hamon

Ihambing ang ilang mga wika ng programming. Ano ang ilan sa mga natatanging katangian ng JavaScript kumpara sa Java? Paano naman ang COBOL kumpara sa Go?

## Post-Lecture Quiz
[Post-lecture quiz](https://ff-quizzes.netlify.app/web/)

## Review & Self Study

Mag-aral ng kaunti tungkol sa iba't ibang wika na magagamit ng programmer. Subukang magsulat ng isang linya sa isang wika, at pagkatapos ay isulat ito muli sa dalawa pang wika. Ano ang natutunan mo?

## Takdang-Aralin

[Reading the Docs](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, pakatandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.