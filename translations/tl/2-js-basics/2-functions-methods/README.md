<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ec43b53e8e015cdabfd3ad877b3c28e5",
  "translation_date": "2025-10-22T15:17:18+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "tl"
}
-->
# Mga Pangunahing Kaalaman sa JavaScript: Mga Pamamaraan at Function

![Mga Pangunahing Kaalaman sa JavaScript - Mga Function](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.tl.png)
> Sketchnote ni [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz
[Pre-lecture quiz](https://ff-quizzes.netlify.app)

Ang paulit-ulit na pagsusulat ng parehong code ay isa sa mga pinakakaraniwang pagkadismaya sa programming. Ang mga function ay nag-aalok ng solusyon sa problemang ito sa pamamagitan ng pagpapahintulot sa iyo na i-package ang code sa mga reusable na bloke. Isipin ang mga function na parang mga standardized na bahagi na nagpa-rebolusyon sa assembly line ni Henry Ford – kapag nakagawa ka ng maaasahang bahagi, magagamit mo ito kahit saan nang hindi kailangang magsimula mula sa simula.

Ang mga function ay nagbibigay-daan sa iyo na mag-bundle ng mga piraso ng code upang magamit mo ito sa buong programa. Sa halip na kopyahin at i-paste ang parehong lohika sa lahat ng lugar, maaari kang lumikha ng isang function nang isang beses at tawagin ito tuwing kinakailangan. Ang ganitong paraan ay nagpapanatili ng organisado ang iyong code at mas madali ang pag-update.

Sa araling ito, matututunan mo kung paano lumikha ng sarili mong mga function, magpasa ng impormasyon sa mga ito, at makakuha ng kapaki-pakinabang na resulta. Malalaman mo ang pagkakaiba ng mga function at pamamaraan, matutunan ang mga modernong syntax na pamamaraan, at makikita kung paano maaaring magtrabaho ang mga function kasama ang iba pang mga function. Bubuuin natin ang mga konseptong ito nang hakbang-hakbang.

[![Mga Pamamaraan at Function](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Mga Pamamaraan at Function")

> 🎥 I-click ang imahe sa itaas para sa isang video tungkol sa mga pamamaraan at function.

> Maaari mong kunin ang araling ito sa [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Mga Function

Ang function ay isang self-contained na bloke ng code na gumaganap ng isang partikular na gawain. Pinagsasama nito ang lohika na maaari mong isagawa tuwing kinakailangan.

Sa halip na isulat ang parehong code nang maraming beses sa buong programa, maaari mo itong i-package sa isang function at tawagin ang function na iyon tuwing kailangan mo ito. Ang ganitong paraan ay nagpapanatili ng malinis ang iyong code at mas madali ang pag-update. Isipin ang hamon sa pagpapanatili kung kailangan mong baguhin ang lohika na nakakalat sa 20 iba't ibang lokasyon sa iyong codebase.

Napakahalaga ng pagbibigay ng deskriptibong pangalan sa iyong mga function. Ang isang maayos na pinangalanang function ay malinaw na nagpapahayag ng layunin nito – kapag nakita mo ang `cancelTimer()`, agad mong mauunawaan kung ano ang ginagawa nito, tulad ng isang malinaw na label sa isang pindutan na nagsasabi sa iyo kung ano ang mangyayari kapag na-click mo ito.

## Paglikha at pagtawag ng isang function

Tingnan natin kung paano lumikha ng isang function. Ang syntax ay sumusunod sa isang pare-parehong pattern:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Narito ang paliwanag:
- Ang keyword na `function` ay nagsasabi sa JavaScript na "Hoy, gumagawa ako ng isang function!"
- Ang `nameOfFunction` ay kung saan mo bibigyan ng deskriptibong pangalan ang iyong function
- Ang mga parentheses `()` ay kung saan maaari kang magdagdag ng mga parameter (pag-uusapan natin ito mamaya)
- Ang mga curly braces `{}` ay naglalaman ng aktwal na code na tumatakbo kapag tinawag mo ang function

Gumawa tayo ng simpleng greeting function upang makita ito sa aksyon:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Ang function na ito ay nagpi-print ng "Hello, world!" sa console. Kapag na-define mo na ito, magagamit mo ito nang maraming beses kung kinakailangan.

Upang isagawa (o "tawagin") ang iyong function, isulat ang pangalan nito na sinusundan ng mga parentheses. Pinapayagan ng JavaScript na i-define ang iyong function bago o pagkatapos mo itong tawagin – ang JavaScript engine ang bahala sa pagkakasunod-sunod ng pagpapatupad.

```javascript
// calling our function
displayGreeting();
```

Kapag pinatakbo mo ang linyang ito, isinasagawa nito ang lahat ng code sa loob ng iyong `displayGreeting` function, na nagpapakita ng "Hello, world!" sa console ng iyong browser. Maaari mong tawagin ang function na ito nang paulit-ulit.

> **Note:** Gumagamit ka na ng **mga pamamaraan** sa buong mga araling ito. Ang `console.log()` ay isang pamamaraan – mahalagang isang function na kabilang sa `console` object. Ang pangunahing pagkakaiba ay ang mga pamamaraan ay nakakabit sa mga object, habang ang mga function ay nakatayo nang mag-isa. Maraming developer ang gumagamit ng mga terminong ito nang palitan sa kaswal na usapan.

### Mga pinakamahusay na kasanayan sa function

Narito ang ilang mga tip upang matulungan kang magsulat ng mahusay na mga function:

- Bigyan ang iyong mga function ng malinaw, deskriptibong mga pangalan – pasasalamatan ka ng iyong sarili sa hinaharap!
- Gumamit ng **camelCasing** para sa mga pangalan na may maraming salita (tulad ng `calculateTotal` sa halip na `calculate_total`)
- Panatilihing nakatuon ang bawat function sa paggawa ng isang bagay nang mahusay

## Pagpapasa ng impormasyon sa isang function

Ang ating `displayGreeting` function ay limitado – maaari lamang itong magpakita ng "Hello, world!" para sa lahat. Ang mga parameter ay nagbibigay-daan sa atin na gawing mas flexible at kapaki-pakinabang ang mga function.

Ang **mga parameter** ay kumikilos na parang mga placeholder kung saan maaari kang magpasok ng iba't ibang mga halaga sa bawat paggamit ng function. Sa ganitong paraan, ang parehong function ay maaaring gumana sa iba't ibang impormasyon sa bawat tawag.

Ililista mo ang mga parameter sa loob ng mga parentheses kapag dine-define mo ang iyong function, na pinaghihiwalay ang maraming parameter gamit ang mga comma:

```javascript
function name(param, param2, param3) {

}
```

Ang bawat parameter ay kumikilos na parang placeholder – kapag may tumawag sa iyong function, magbibigay sila ng aktwal na mga halaga na ilalagay sa mga spot na ito.

I-update natin ang ating greeting function upang tanggapin ang pangalan ng isang tao:

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Pansinin kung paano natin ginagamit ang backticks (`` ` ``) at `${}` upang direktang ipasok ang pangalan sa ating mensahe – ito ay tinatawag na template literal, at ito ay isang napaka-kapaki-pakinabang na paraan upang bumuo ng mga string na may halong mga variable.

Ngayon kapag tinawag natin ang ating function, maaari tayong magpasa ng anumang pangalan:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

Kinukuha ng JavaScript ang string na `'Christopher'`, itinalaga ito sa parameter na `name`, at lumilikha ng personalized na mensahe na "Hello, Christopher!"

## Mga default na halaga

Paano kung gusto nating gawing opsyonal ang ilang mga parameter? Dito nagiging kapaki-pakinabang ang mga default na halaga!

Sabihin nating gusto nating bigyan ang mga tao ng kakayahang i-customize ang salitang pagbati, ngunit kung hindi sila magbibigay ng isa, gagamitin na lang natin ang "Hello" bilang fallback. Maaari kang mag-set up ng mga default na halaga sa pamamagitan ng paggamit ng equals sign, tulad ng pag-set ng variable:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Dito, ang `name` ay kinakailangan pa rin, ngunit ang `salutation` ay may backup na halaga na `'Hello'` kung walang magbigay ng ibang pagbati.

Ngayon maaari nating tawagin ang function na ito sa dalawang magkaibang paraan:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

Sa unang tawag, ginagamit ng JavaScript ang default na "Hello" dahil hindi tayo nagbigay ng salutation. Sa pangalawang tawag, ginagamit nito ang ating custom na "Hi" sa halip. Ang flexibility na ito ay ginagawang adaptable ang mga function sa iba't ibang sitwasyon.

## Mga return value

Ang ating mga function sa ngayon ay nagpi-print lang ng mga mensahe sa console, ngunit paano kung gusto mong mag-compute ang isang function at ibalik sa iyo ang resulta?

Dito pumapasok ang **mga return value**. Sa halip na magpakita lang ng isang bagay, ang isang function ay maaaring magbigay sa iyo ng isang halaga na maaari mong i-store sa isang variable o gamitin sa iba pang bahagi ng iyong code.

Upang magpadala ng isang halaga pabalik, gagamitin mo ang keyword na `return` na sinusundan ng anumang nais mong ibalik:

```javascript
return myVariable;
```

Narito ang mahalaga: kapag ang isang function ay umabot sa isang `return` statement, agad itong humihinto sa pagtakbo at ibinabalik ang halagang iyon sa tumawag dito.

Baguhin natin ang ating greeting function upang ibalik ang mensahe sa halip na i-print ito:

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Ngayon sa halip na i-print ang greeting, ang function na ito ay lumilikha ng mensahe at ibinibigay ito sa atin.

Upang magamit ang ibinalik na halaga, maaari natin itong i-store sa isang variable tulad ng anumang ibang halaga:

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

Ngayon ang `greetingMessage` ay naglalaman ng "Hello, Christopher" at magagamit natin ito kahit saan sa ating code – upang ipakita ito sa isang webpage, isama ito sa isang email, o ipasa ito sa ibang function.

## Mga function bilang parameter para sa mga function

Ang mga function ay maaaring ipasa bilang mga parameter sa iba pang mga function. Bagama't maaaring mukhang kumplikado ang konseptong ito sa simula, ito ay isang makapangyarihang tampok na nagbibigay-daan sa mga flexible na pattern ng programming.

Ang pattern na ito ay karaniwang ginagamit kapag gusto mong sabihin na "kapag may nangyari, gawin ang ibang bagay." Halimbawa, "kapag natapos ang timer, patakbuhin ang code na ito" o "kapag na-click ng user ang button, tawagin ang function na ito."

Tingnan natin ang `setTimeout`, na isang built-in na function na naghihintay ng tiyak na dami ng oras at pagkatapos ay nagpapatakbo ng ilang code. Kailangan nating sabihin dito kung anong code ang tatakbo – perpektong kaso para sa pagpapasa ng isang function!

Subukan ang code na ito – pagkatapos ng 3 segundo, makakakita ka ng mensahe:

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

Pansinin kung paano natin ipinapasa ang `displayDone` (nang walang parentheses) sa `setTimeout`. Hindi natin tinatawag ang function mismo – ibinibigay natin ito sa `setTimeout` at sinasabing "tawagin ito sa loob ng 3 segundo."

### Mga Anonymous Function

Minsan kailangan mo ng function para sa isang bagay lang at ayaw mong bigyan ito ng pangalan. Isipin mo – kung gagamitin mo lang ang isang function nang isang beses, bakit mo pa ito bibigyan ng pangalan?

Pinapayagan ka ng JavaScript na lumikha ng **mga anonymous function** – mga function na walang pangalan na maaari mong i-define kung saan mo ito kailangan.

Narito kung paano natin maaaring isulat muli ang ating timer example gamit ang isang anonymous function:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Nakakamit nito ang parehong resulta, ngunit ang function ay dine-define nang direkta sa loob ng tawag sa `setTimeout`, na inaalis ang pangangailangan para sa isang hiwalay na deklarasyon ng function.

### Mga Fat Arrow Function

Ang modernong JavaScript ay may mas maikling paraan upang magsulat ng mga function na tinatawag na **arrow functions**. Ginagamit nila ang `=>` (na mukhang isang arrow – gets mo?) at napakapopular sa mga developer.

Ang mga arrow function ay nagbibigay-daan sa iyo na laktawan ang keyword na `function` at magsulat ng mas maikli na code.

Narito ang ating timer example gamit ang isang arrow function:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

Ang `()` ay kung saan ilalagay ang mga parameter (walang laman sa kasong ito), pagkatapos ay ang arrow `=>`, at sa wakas ang katawan ng function sa mga curly braces. Nagbibigay ito ng parehong functionality na may mas maikling syntax.

### Kailan gagamitin ang bawat estratehiya

Kailan mo dapat gamitin ang bawat pamamaraan? Isang praktikal na gabay: kung gagamitin mo ang function nang maraming beses, bigyan ito ng pangalan at i-define ito nang hiwalay. Kung ito ay para sa isang partikular na paggamit, isaalang-alang ang isang anonymous function. Parehong valid ang arrow functions at tradisyunal na syntax, bagama't ang arrow functions ay laganap sa mga modernong JavaScript codebase.

---



## 🚀 Hamon

Maaari mo bang ipaliwanag sa isang pangungusap ang pagkakaiba ng mga function at pamamaraan? Subukan mo!

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode upang kumpletuhin ang sumusunod na hamon:

**Deskripsyon:** Gumawa ng utility library ng mga mathematical function na nagpapakita ng iba't ibang konsepto ng function na tinalakay sa araling ito, kabilang ang mga parameter, default na halaga, return value, at arrow functions.

**Prompt:** Gumawa ng JavaScript file na tinatawag na `mathUtils.js` na naglalaman ng mga sumusunod na function:
1. Isang function na `add` na tumatanggap ng dalawang parameter at ibinabalik ang kanilang kabuuan
2. Isang function na `multiply` na may default na halaga ng parameter (ang pangalawang parameter ay default sa 1)
3. Isang arrow function na `square` na tumatanggap ng isang numero at ibinabalik ang square nito
4. Isang function na `calculate` na tumatanggap ng isa pang function bilang parameter at dalawang numero, pagkatapos ay inilalapat ang function sa mga numerong iyon
5. Ipakita ang pagtawag sa bawat function gamit ang mga angkop na test case

Alamin ang higit pa tungkol sa [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) dito.

## Post-Lecture Quiz
[Post-lecture quiz](https://ff-quizzes.netlify.app)

## Review & Self Study

Sulit na [magbasa pa tungkol sa arrow functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), dahil mas madalas na ginagamit ang mga ito sa mga code base. Magpraktis sa pagsusulat ng isang function, at pagkatapos ay isulat ito muli gamit ang syntax na ito.

## Assignment

[Masaya sa Mga Function](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na awtoritatibong pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.