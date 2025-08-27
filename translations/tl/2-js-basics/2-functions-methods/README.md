<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b4612bbb9ace984f374fcc80e3e035ad",
  "translation_date": "2025-08-27T22:46:41+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "tl"
}
-->
# Mga Pangunahing Kaalaman sa JavaScript: Mga Metodo at Function

![Mga Pangunahing Kaalaman sa JavaScript - Mga Function](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.tl.png)
> Sketchnote ni [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz
[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/9)

Kapag iniisip natin ang pagsusulat ng code, palagi nating nais tiyakin na ang ating code ay madaling basahin. Bagamat parang kontra-intuwitibo ito, mas madalas basahin ang code kaysa isulat. Isa sa mga pangunahing kasangkapan ng isang developer upang masiguro ang maayos na code ay ang **function**.

[![Mga Metodo at Function](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Mga Metodo at Function")

> 🎥 I-click ang larawan sa itaas para sa isang video tungkol sa mga metodo at function.

> Maaari mong kunin ang araling ito sa [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Mga Function

Sa pinakasimpleng anyo, ang function ay isang bloke ng code na maaari nating patakbuhin kapag kinakailangan. Perpekto ito para sa mga sitwasyon kung saan kailangan nating ulitin ang parehong gawain nang maraming beses; sa halip na ulitin ang lohika sa iba't ibang lugar (na mahirap i-update kapag dumating ang oras), maaari nating i-centralize ito sa isang lugar, at tawagin ito tuwing kailangan ang operasyon - maaari mo pang tawagin ang mga function mula sa ibang function!

Mahalaga rin ang kakayahang pangalanan ang isang function. Bagamat tila maliit na bagay ito, ang pangalan ay nagbibigay ng mabilis na paraan upang idokumento ang isang bahagi ng code. Maaari mo itong isipin na parang label sa isang pindutan. Kung pipindutin ko ang isang pindutan na may nakasulat na "Cancel timer", alam kong titigil ito sa pagpapatakbo ng orasan.

## Paglikha at pagtawag ng isang function

Ang syntax para sa isang function ay ganito ang hitsura:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Kung nais kong lumikha ng isang function upang magpakita ng pagbati, maaaring ganito ang hitsura nito:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Tuwing nais nating tawagin (o i-invoke) ang ating function, ginagamit natin ang pangalan ng function na sinusundan ng `()`. Mahalaga ring tandaan na ang ating function ay maaaring ideklara bago o pagkatapos natin itong tawagin; hahanapin ito ng JavaScript compiler para sa iyo.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** May isang espesyal na uri ng function na kilala bilang isang **method**, na ginagamit mo na! Sa katunayan, nakita natin ito sa ating demo sa itaas nang ginamit natin ang `console.log`. Ang kaibahan ng isang method sa isang function ay ang method ay nakakabit sa isang object (`console` sa ating halimbawa), habang ang function ay malayang nakahiwalay. Maririnig mo ang maraming developer na ginagamit ang mga terminong ito nang salitan.

### Mga pinakamahusay na kasanayan sa function

Narito ang ilang mga pinakamahusay na kasanayan na dapat tandaan kapag lumilikha ng mga function:

- Gaya ng dati, gumamit ng mga deskriptibong pangalan upang malaman mo kung ano ang gagawin ng function
- Gumamit ng **camelCasing** upang pagsamahin ang mga salita
- Panatilihing nakatuon ang iyong mga function sa isang partikular na gawain

## Pagpapasa ng impormasyon sa isang function

Upang gawing mas magagamit muli ang isang function, madalas mong nais na magpasa ng impormasyon dito. Kung isasaalang-alang natin ang halimbawa ng `displayGreeting` sa itaas, ipapakita lamang nito ang **Hello, world!**. Hindi ito ang pinaka-kapaki-pakinabang na function na maaaring malikha. Kung nais nating gawing mas flexible ito, tulad ng pagpapahintulot sa isang tao na tukuyin ang pangalan ng taong babatiin, maaari tayong magdagdag ng isang **parameter**. Ang parameter (na minsan ding tinatawag na **argument**), ay karagdagang impormasyon na ipinapasa sa isang function.

Ang mga parameter ay nakalista sa bahagi ng depinisyon sa loob ng mga panaklong at pinaghihiwalay ng kuwit tulad nito:

```javascript
function name(param, param2, param3) {

}
```

Maaari nating i-update ang `displayGreeting` upang tumanggap ng pangalan at ipakita ito.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Kapag nais nating tawagin ang ating function at ipasa ang parameter, tinutukoy natin ito sa mga panaklong.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Mga default na halaga

Maaari nating gawing mas flexible ang ating function sa pamamagitan ng pagdaragdag ng higit pang mga parameter. Ngunit paano kung ayaw nating gawing kinakailangan ang bawat halaga? Sa pagpapatuloy ng ating halimbawa ng pagbati, maaari nating iwanang kinakailangan ang pangalan (kailangan nating malaman kung sino ang babatiin), ngunit nais nating pahintulutan ang pagbati mismo na ma-customize kung nais. Kung ayaw ng isang tao na i-customize ito, nagbibigay tayo ng default na halaga. Upang magbigay ng default na halaga sa isang parameter, itinatakda natin ito tulad ng pagtatakda ng halaga para sa isang variable - `parameterName = 'defaultValue'`. Narito ang isang buong halimbawa:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Kapag tinawag natin ang function, maaari nating piliin kung nais nating magtakda ng halaga para sa `salutation`.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Mga return value

Hanggang ngayon, ang function na ginawa natin ay palaging maglalabas sa [console](https://developer.mozilla.org/docs/Web/API/console). Minsan ito ang eksaktong hinahanap natin, lalo na kapag lumilikha tayo ng mga function na tatawag sa ibang serbisyo. Ngunit paano kung nais kong lumikha ng isang helper function upang magsagawa ng kalkulasyon at ibalik ang halaga upang magamit ko ito sa ibang lugar?

Magagawa natin ito sa pamamagitan ng paggamit ng **return value**. Ang return value ay ibinabalik ng function, at maaaring itabi sa isang variable tulad ng pagtatabi natin ng literal na halaga tulad ng string o numero.

Kung ang isang function ay magbabalik ng isang bagay, ginagamit ang keyword na `return`. Ang keyword na `return` ay inaasahan ang isang halaga o reference ng kung ano ang ibinabalik tulad nito:

```javascript
return myVariable;
```  

Maaari tayong lumikha ng isang function upang lumikha ng mensahe ng pagbati at ibalik ang halaga sa tumatawag.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Kapag tinawag ang function na ito, itatabi natin ang halaga sa isang variable. Katulad ito ng paraan ng pagtatakda natin ng variable sa isang static na halaga (tulad ng `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Mga function bilang parameter para sa mga function

Habang umuusad ka sa iyong karera sa programming, makakakita ka ng mga function na tumatanggap ng mga function bilang parameter. Ang kakaibang trick na ito ay karaniwang ginagamit kapag hindi natin alam kung kailan mangyayari o matatapos ang isang bagay, ngunit alam nating kailangan nating magsagawa ng operasyon bilang tugon.

Halimbawa, isaalang-alang ang [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), na nagsisimula ng timer at magsasagawa ng code kapag natapos ito. Kailangan nating sabihin dito kung anong code ang nais nating isagawa. Tunog na perpektong trabaho para sa isang function!

Kung patakbuhin mo ang code sa ibaba, pagkatapos ng 3 segundo makikita mo ang mensaheng **3 seconds has elapsed**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Mga anonymous function

Balikan natin ang ginawa natin. Lumilikha tayo ng isang function na may pangalan na gagamitin nang isang beses. Habang nagiging mas kumplikado ang ating aplikasyon, maaari nating makita ang ating sarili na lumilikha ng maraming function na gagamitin lamang nang isang beses. Hindi ito ideal. Sa katunayan, hindi palaging kailangan na magbigay ng pangalan!

Kapag nagpapasa tayo ng isang function bilang parameter, maaari nating iwasan ang paglikha ng isa nang maaga at sa halip ay buuin ito bilang bahagi ng parameter. Ginagamit natin ang parehong keyword na `function`, ngunit sa halip ay binubuo natin ito bilang parameter.

Isulat natin muli ang code sa itaas upang gumamit ng anonymous function:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Kung patakbuhin mo ang ating bagong code, mapapansin mong makakakuha tayo ng parehong resulta. Nilikha natin ang isang function, ngunit hindi na kailangang bigyan ito ng pangalan!

### Fat arrow function

Isang shortcut na karaniwan sa maraming programming language (kasama ang JavaScript) ay ang kakayahang gumamit ng tinatawag na **arrow** o **fat arrow** function. Gumagamit ito ng espesyal na indicator na `=>`, na mukhang isang arrow - kaya ang pangalan! Sa pamamagitan ng paggamit ng `=>`, maaari nating laktawan ang keyword na `function`.

Isulat natin muli ang ating code upang gumamit ng fat arrow function:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Kailan gagamitin ang bawat estratehiya

Ngayon ay nakita mo na mayroon tayong tatlong paraan upang magpasa ng function bilang parameter at maaaring iniisip mo kung kailan gagamitin ang bawat isa. Kung alam mong gagamitin mo ang function nang higit sa isang beses, likhain ito nang normal. Kung gagamitin mo ito para lamang sa isang lokasyon, mas mainam na gumamit ng anonymous function. Kung gagamit ka ng fat arrow function o ang mas tradisyunal na syntax na `function`, nasa iyo na ito, ngunit mapapansin mong mas gusto ng karamihan sa mga modernong developer ang `=>`.

---

## 🚀 Hamon

Maaari mo bang ipaliwanag sa isang pangungusap ang pagkakaiba ng mga function at metodo? Subukan mo!

## Post-Lecture Quiz
[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/10)

## Review at Pag-aaral sa Sarili

Sulit na [magbasa pa tungkol sa arrow functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), dahil mas madalas na ginagamit ang mga ito sa mga code base. Magpraktis ng pagsusulat ng isang function, at pagkatapos ay isulat itong muli gamit ang syntax na ito.

## Takdang-Aralin

[Masaya sa Mga Function](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.