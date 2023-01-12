# Panimula sa Programming Language at Tools of the Trade

Sinasaklaw ng araling ito ang mga pangunahing kaalaman sa mga programming language. Ang mga paksang sakop dito ay nalalapat sa karamihan ng mga modernong programming language ngayon. Sa seksyong 'Tools of the Trade', matututunan mo ang tungkol sa kapaki-pakinabang na software na tumutulong sa iyo bilang isang developer.

![Intro Programming](/sketchnotes/webdev101-programming.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Pagsusulit bago ang lektura
[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/1)

## Panimula

Sa araling ito, tatalakayin natin:

- Ano ang programming?
- Mga uri ng programming language
- Mga pangunahing elemento ng isang programa
- Kapaki-pakinabang na software at tooling para sa propesyonal na developer

> Maaari mong kunin ang araling ito [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## Ano ang Programming?

Ang programming (kilala rin bilang coding) ay ang proseso ng pagsulat ng mga tagubilin sa isang device, gaya ng computer o mobile device. Isinulat namin ang mga tagubiling ito gamit ang isang programming language, na pagkatapos ay binibigyang-kahulugan ng device. Ang mga hanay ng mga tagubiling ito ay maaaring tukuyin ng iba't ibang pangalan, ngunit ang *program*, *computer program*, *application (app)*, at *executable* ay ilang sikat na pangalan.

Ang *program* ay maaaring maging anumang nakasulat gamit ang code; Ang mga website, laro, at app ng telepono ay mga programa. Bagama't posibleng gumawa ng program nang walang pagsusulat ng code, ang pinagbabatayan na lohika ay binibigyang-kahulugan sa device at ang logic na iyon ay malamang na nakasulat gamit ang code. Ang isang program na *tumatakbo* o *nagpapatupad ng code* ay nagsasagawa ng mga tagubilin. Ang device na kasalukuyang binabasa mo ang araling ito ay nagpapatakbo ng isang programa upang i-print ito sa iyong screen.

✅ Gumawa ng kaunting pananaliksik: sino ang itinuturing na unang computer programmer sa mundo?

## Mga Wika sa Programming

Ang mga programming language ay may pangunahing layunin: para sa mga developer na bumuo ng mga tagubilin para ipadala sa isang device. Ang mga device lang ang makakaintindi ng binary (1s at 0s), at para sa *karamihan* na mga developer, hindi iyon isang napakahusay na paraan para makipag-usap. Ang mga programming language ay isang sasakyan para sa komunikasyon sa pagitan ng mga tao at mga computer.

Ang mga programming language ay may iba't ibang format at maaaring magsilbi ng iba't ibang layunin. Halimbawa, ang JavaScript ay pangunahing ginagamit para sa mga web application, habang ang Bash ay pangunahing ginagamit para sa mga operating system.

*Mababang antas ng mga wika* ay karaniwang nangangailangan ng mas kaunting mga hakbang kaysa sa *mataas na antas ng mga wika* para sa isang device upang bigyang-kahulugan ang mga tagubilin. Gayunpaman, ang nagpapasikat sa mga mataas na antas ng wika ay ang kanilang pagiging madaling mabasa at suporta. Ang JavaScript ay itinuturing na isang mataas na antas ng wika.

Ang sumusunod na code ay naglalarawan ng pagkakaiba sa pagitan ng mataas na antas ng wika na may JavaScript at mababang antas ng wika na may ARM assembly code.

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

Maniwala ka man o hindi, *pareho silang gumagawa ng parehong bagay*: pag-print ng Fibonacci sequence hanggang 10.

✅ Ang Fibonacci sequence ay [tinukoy](https://en.wikipedia.org/wiki/Fibonacci_number) bilang isang hanay ng mga numero na ang bawat numero ay ang kabuuan ng dalawang nauna, simula sa 0 at 1.

## Mga elemento ng isang programa

Ang nag-iisang pagtuturo sa isang programa ay tinatawag na *pahayag* at kadalasang magkakaroon ng character o line spacing na nagmamarka kung saan nagtatapos ang pagtuturo, o *nagtatapos*. Nag-iiba-iba ang paraan ng pagwawakas ng isang programa sa bawat wika.

Karamihan sa mga program ay umaasa sa paggamit ng data mula sa isang user o sa ibang lugar, kung saan ang mga pahayag ay maaaring umasa sa data upang magsagawa ng mga tagubilin. Maaaring baguhin ng data kung paano kumikilos ang isang program, kaya ang mga programming language ay may paraan upang pansamantalang mag-imbak ng data na magagamit sa ibang pagkakataon. Ang data na ito ay tinatawag na *mga variable*. Ang mga variable ay mga pahayag na nagtuturo sa isang device na mag-save ng data sa memorya nito. Ang mga variable sa mga programa ay katulad ng mga nasa algebra, kung saan mayroon silang natatanging pangalan at ang kanilang halaga ay maaaring magbago sa paglipas ng panahon.

May posibilidad na ang ilang pahayag ay hindi isasagawa ng isang device. Ito ay karaniwang sa pamamagitan ng disenyo kapag isinulat ng developer o hindi sinasadya kapag may nangyaring hindi inaasahang error. Ang ganitong uri ng kontrol ng isang application ay ginagawa itong mas matatag at mapanatili. Karaniwang nangyayari ang mga pagbabagong ito sa kontrol kapag natugunan ang ilang partikular na desisyon. Ang isang karaniwang pahayag sa mga modernong programming language upang kontrolin kung paano pinapatakbo ang isang programa ay ang `if..else` na pahayag.

✅ Matututo ka pa tungkol sa ganitong uri ng pahayag sa mga susunod na aralin

## Mga Tool ng Kalakalan

[![Tools of the Trade](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools of the Trade")

> 🎥 I-click ang larawan sa itaas para sa isang video tungkol sa tooling

Sa seksyong ito, matututunan mo ang tungkol sa ilang software na maaari mong makitang lubhang kapaki-pakinabang habang sinisimulan mo ang iyong paglalakbay sa propesyonal na pag-unlad.

Ang **development environment** ay isang natatanging hanay ng mga tool at feature na madalas gamitin ng developer kapag nagsusulat ng software. Ang ilan sa mga tool na ito ay na-customize para sa isang partikular na pangangailangan ng developer, at maaaring magbago sa paglipas ng panahon kung babaguhin ng developer ang mga priyoridad sa trabaho o personal na mga proyekto, o kapag gumagamit sila ng ibang programming language. Ang mga development environment ay kasing kakaiba ng mga developer na gumagamit ng mga ito.

### Editors

Ang isa sa mga pinakamahalagang tool para sa pagbuo ng software ay ang editor. Ang mga editor ay kung saan mo isusulat ang iyong code at kung minsan kung saan mo tatakbo ang iyong code.

Umaasa ang mga developer sa mga editor para sa ilang karagdagang dahilan:

- *Debugging* Pagtuklas ng mga bug at error sa pamamagitan ng hakbang sa code, linya sa linya. Ang ilang mga editor ay may mga kakayahan sa pag-debug, o maaaring i-customize at idagdag para sa mga partikular na programming language.  
- *Syntax highlighting* Nagdaragdag ng mga kulay at pag-format ng teksto sa code, ginagawang mas madaling basahin. Pinapayagan ng karamihan sa mga editor ang naka-customize na pag-highlight ng syntax.
- *Extensions and Integrations* Mga karagdagan na dalubhasa para sa mga developer, ng mga developer, para sa access sa mga karagdagang tool na hindi naka-built sa base editor. Halimbawa, kailangan din ng maraming developer ng paraan para idokumento ang kanilang code at ipaliwanag kung paano ito gumagana at mag-i-install ng extension ng spell check upang suriin kung may mga typo. Karamihan sa mga karagdagan na ito ay inilaan para sa paggamit sa loob ng isang partikular na editor, at karamihan sa mga editor ay may kasamang paraan upang maghanap ng mga available na extension.
- *Customization* Karamihan sa mga editor ay lubos na napapasadya, at ang bawat developer ay magkakaroon ng kanilang sariling natatanging kapaligiran sa pag-unlad na nababagay sa kanilang mga pangangailangan. Marami rin ang nagpapahintulot sa mga developer na gumawa ng sarili nilang mga extension.

#### Mga Sikat na Editor at Web Development Extension

- [Visual Studio Code](https://code.visualstudio.com/)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)

### Browsers

Ang isa pang mahalagang tool ay ang browser. Ang mga web developer ay umaasa sa browser upang obserbahan kung paano tumatakbo ang kanilang code sa web, ginagamit din ito upang tingnan ang mga visual na elemento ng isang web page na nakasulat sa editor, tulad ng HTML.

Maraming browser ang kasama ng *developer tools* (DevTools) na naglalaman ng isang hanay ng mga kapaki-pakinabang na feature at impormasyon para tulungan ang mga developer na mangolekta at makakuha ng mahahalagang insight tungkol sa kanilang application. Halimbawa: Kung ang isang web page ay may mga error, minsan nakakatulong na malaman kung kailan nangyari ang mga ito. Maaaring i-configure ang DevTools sa isang browser upang makuha ang impormasyong ito.

#### Mga sikat na Browser at DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Mga Tool sa Command Line

Mas gusto ng ilang developer ang isang mas kaunting graphical na view para sa kanilang mga pang-araw-araw na gawain at umaasa sa command line para makamit ito. Ang pagbuo ng code ay nangangailangan ng malaking halaga ng pagta-type, at mas gusto ng ilang developer na huwag guluhin ang kanilang daloy sa keyboard at gagamit sila ng mga keyboard shortcut upang magpalit sa pagitan ng mga desktop windows, magtrabaho sa iba't ibang file, at gumamit ng mga tool. Karamihan sa mga gawain ay maaaring kumpletuhin gamit ang isang mouse, ngunit ang isang benepisyo ng paggamit ng command line ay ang maraming maaaring gawin gamit ang command line tool nang hindi nangangailangan ng pagpapalit sa pagitan ng mouse at keyboard. Ang isa pang benepisyo ng command line ay ang mga ito ay maaaring i-configure at maaari mong i-save ang iyong custom na configuration, baguhin ito sa ibang pagkakataon, at i-import din ito sa mga bagong development machine. Dahil natatangi ang mga development environment sa bawat developer, iiwasan ng ilan ang paggamit ng command line, ang ilan ay aasa dito nang buo, at ang ilan ay mas gusto ang paghahalo ng dalawa.

### Mga Sikat na Opsyon sa Command Line

Mag-iiba ang mga opsyon para sa command line batay sa operating system na iyong ginagamit.

*💻 = ay paunang naka-install sa operating system.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (also known as CMD) 💻
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

#### Mga sikat na Command Line Tool

- [Git](https://git-scm.com/) (💻 on most operating systems)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Documentation

Kapag ang isang developer ay gustong matuto ng bago, malamang na bumaling sila sa dokumentasyon upang matutunan kung paano ito gamitin. Ang mga developer ay madalas na umaasa sa dokumentasyon upang gabayan sila sa kung paano gamitin nang maayos ang mga tool at wika, at upang makakuha din ng mas malalim na kaalaman sa kung paano ito gumagana.

#### Popular Documentation sa Web Development

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), from Mozilla, ang mga publisher ng [Firefox](https://www.mozilla.org/firefox/) browser
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), mula sa Google, mga publisher ng [Chrome](https://www.google.com/chrome/)
- [Microsoft's own developer docs](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), para sa [Microsoft Edge](https://www.microsoft.com/edge)

✅ Magsaliksik: Ngayong alam mo na ang mga pangunahing kaalaman sa kapaligiran ng isang web developer, ihambing at ihambing ito sa kapaligiran ng isang web designer.

---

## 🚀 Hamon

Ihambing ang ilang mga programming language. Ano ang ilan sa mga natatanging katangian ng JavaScript vs. Java? Kumusta naman ang COBOL vs. Go?

## Pagsusulit pagkatapos ng Lektura
[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/2)

## Pagsusuri

Mag-aral nang kaunti sa iba't ibang wika na magagamit ng programmer. Subukang magsulat ng isang linya sa isang wika, at pagkatapos ay gawing muli ito sa dalawang iba pa. Ano ang nalaman mo?

## Assignment

[Reading the Docs](assignment.md)
