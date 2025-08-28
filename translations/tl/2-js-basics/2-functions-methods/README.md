<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92e136090efc4341b1d51c37924c1802",
  "translation_date": "2025-08-28T15:46:47+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "tl"
}
-->
# Mga Pangunahing Kaalaman sa JavaScript: Mga Pamamaraan at Function

![Mga Pangunahing Kaalaman sa JavaScript - Mga Function](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.tl.png)
> Sketchnote ni [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz
[Pre-lecture quiz](https://ff-quizzes.netlify.app)

Kapag iniisip natin ang pagsusulat ng code, palagi nating nais tiyakin na ang ating code ay madaling basahin. Bagama't tila kontra sa lohika, ang code ay mas madalas basahin kaysa isulat. Isa sa mga pangunahing kasangkapan ng isang developer upang matiyak ang maayos na code ay ang **function**.

[![Mga Pamamaraan at Function](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Mga Pamamaraan at Function")

> 🎥 I-click ang imahe sa itaas para sa isang video tungkol sa mga pamamaraan at function.

> Maaari mong kunin ang araling ito sa [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Mga Function

Sa pinakapayak na anyo, ang function ay isang bloke ng code na maaari nating patakbuhin kapag kinakailangan. Perpekto ito para sa mga sitwasyon kung saan kailangan nating ulitin ang parehong gawain nang maraming beses; sa halip na ulitin ang lohika sa iba't ibang lugar (na magpapahirap sa pag-update kapag dumating ang oras), maaari nating i-centralize ito sa isang lokasyon, at tawagin ito tuwing kailangan ang operasyon - maaari mo pang tawagin ang mga function mula sa ibang function!

Kasinghalaga rin ang kakayahang pangalanan ang isang function. Bagama't tila simpleng bagay ito, ang pangalan ay nagbibigay ng mabilis na paraan upang idokumento ang isang bahagi ng code. Maaari mong isipin ito bilang label sa isang button. Kung mag-click ako sa isang button na may nakasulat na "Cancel timer", alam kong ihihinto nito ang pagtakbo ng orasan.

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

Tuwing nais nating tawagin (o i-invoke) ang ating function, ginagamit natin ang pangalan ng function na sinusundan ng `()`. Mahalagang tandaan na ang ating function ay maaaring tukuyin bago o pagkatapos natin ito tawagin; hahanapin ito ng JavaScript compiler para sa iyo.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** Mayroong espesyal na uri ng function na tinatawag na **method**, na ginagamit mo na! Sa katunayan, nakita natin ito sa ating demo sa itaas nang ginamit natin ang `console.log`. Ang kaibahan ng method sa function ay ang method ay nakakabit sa isang object (`console` sa ating halimbawa), habang ang function ay malayang nakahiwalay. Maraming developer ang gumagamit ng mga terminong ito nang palitan.

### Mga pinakamahusay na kasanayan sa function

May ilang mga pinakamahusay na kasanayan na dapat tandaan kapag lumilikha ng mga function:

- Gaya ng dati, gumamit ng mga deskriptibong pangalan upang malaman mo kung ano ang gagawin ng function
- Gumamit ng **camelCasing** upang pagsamahin ang mga salita
- Panatilihing nakatuon ang iyong mga function sa isang partikular na gawain

## Pagpapasa ng impormasyon sa isang function

Upang gawing mas reusable ang isang function, madalas mong nais na magpasa ng impormasyon dito. Kung isasaalang-alang natin ang halimbawa ng `displayGreeting` sa itaas, magpapakita lamang ito ng **Hello, world!**. Hindi ito ang pinaka-kapaki-pakinabang na function na maaaring likhain. Kung nais nating gawing mas flexible ito, tulad ng pagpapahintulot sa isang tao na tukuyin ang pangalan ng taong babatiin, maaari tayong magdagdag ng **parameter**. Ang parameter (minsan tinatawag ding **argument**) ay karagdagang impormasyon na ipinapadala sa isang function.

Ang mga parameter ay nakalista sa bahagi ng kahulugan sa loob ng mga parenthesis at pinaghihiwalay ng kuwit tulad nito:

```javascript
function name(param, param2, param3) {

}
```

Maaari nating i-update ang `displayGreeting` upang tanggapin ang isang pangalan at ipakita ito.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Kapag nais nating tawagin ang ating function at ipasa ang parameter, tinutukoy natin ito sa mga parenthesis.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Mga default na halaga

Maaari nating gawing mas flexible ang ating function sa pamamagitan ng pagdaragdag ng higit pang mga parameter. Ngunit paano kung ayaw nating gawing kinakailangan ang bawat halaga? Sa pagpapatuloy ng halimbawa ng pagbati, maaari nating iwanan ang pangalan bilang kinakailangan (kailangan nating malaman kung sino ang binabati), ngunit nais nating pahintulutan ang pagbati mismo na i-customize kung nais. Kung ayaw ng isang tao na i-customize ito, nagbibigay tayo ng default na halaga. Upang magbigay ng default na halaga sa isang parameter, itinakda natin ito tulad ng paraan ng pagtatakda ng halaga para sa isang variable - `parameterName = 'defaultValue'`. Upang makita ang isang buong halimbawa:

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

Hanggang ngayon, ang function na ginawa natin ay palaging maglalabas sa [console](https://developer.mozilla.org/docs/Web/API/console). Minsan ito ang eksaktong hinahanap natin, lalo na kapag gumagawa tayo ng mga function na tatawag sa ibang mga serbisyo. Ngunit paano kung nais kong lumikha ng helper function upang magsagawa ng kalkulasyon at ibalik ang halaga upang magamit ko ito sa ibang lugar?

Magagawa natin ito sa pamamagitan ng paggamit ng **return value**. Ang return value ay ibinabalik ng function, at maaaring itago sa isang variable tulad ng maaari nating itago ang literal na halaga tulad ng string o numero.

Kung ang isang function ay nagbabalik ng isang bagay, ginagamit ang keyword na `return`. Ang keyword na `return` ay inaasahan ang isang halaga o reference ng kung ano ang ibinabalik tulad nito:

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

Kapag tinawag ang function na ito, itatago natin ang halaga sa isang variable. Katulad ito ng paraan ng pagtatakda ng variable sa isang static na halaga (tulad ng `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Mga function bilang parameter para sa mga function

Habang umuunlad ka sa iyong karera sa programming, makakakita ka ng mga function na tumatanggap ng mga function bilang parameter. Ang kahanga-hangang trick na ito ay karaniwang ginagamit kapag hindi natin alam kung kailan may mangyayari o matatapos, ngunit alam natin na kailangan nating magsagawa ng operasyon bilang tugon.

Halimbawa, isaalang-alang ang [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), na nagsisimula ng timer at magsasagawa ng code kapag natapos ito. Kailangan nating sabihin dito kung anong code ang nais nating isagawa. Tunog na perpektong trabaho para sa isang function!

Kung patakbuhin mo ang code sa ibaba, pagkatapos ng 3 segundo makikita mo ang mensahe **3 seconds has elapsed**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Mga anonymous function

Tingnan natin muli ang ginawa natin. Gumagawa tayo ng isang function na may pangalan na gagamitin nang isang beses. Habang nagiging mas kumplikado ang ating application, makikita natin ang ating sarili na gumagawa ng maraming function na gagamitin lamang nang isang beses. Hindi ito ideal. Sa katunayan, hindi palaging kailangan nating magbigay ng pangalan!

Kapag nagpapasa tayo ng function bilang parameter, maaari nating iwasan ang paggawa ng isa nang maaga at sa halip ay bumuo ng isa bilang bahagi ng parameter. Ginagamit natin ang parehong keyword na `function`, ngunit sa halip ay binubuo natin ito bilang parameter.

Isulat natin muli ang code sa itaas upang gumamit ng anonymous function:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Kung patakbuhin mo ang bagong code natin, mapapansin mong pareho ang resulta. Gumawa tayo ng function, ngunit hindi natin kailangang bigyan ito ng pangalan!

### Mga fat arrow function

Isang shortcut na karaniwan sa maraming programming language (kasama ang JavaScript) ay ang kakayahang gumamit ng tinatawag na **arrow** o **fat arrow** function. Gumagamit ito ng espesyal na indicator na `=>`, na mukhang arrow - kaya ang pangalan! Sa pamamagitan ng paggamit ng `=>`, maaari nating laktawan ang keyword na `function`.

Isulat natin muli ang code natin upang gumamit ng fat arrow function:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Kailan gagamitin ang bawat estratehiya

Ngayon nakita mo na mayroon tayong tatlong paraan upang magpasa ng function bilang parameter at maaaring iniisip mo kung kailan gagamitin ang bawat isa. Kung alam mong gagamitin mo ang function nang higit sa isang beses, gawin ito nang normal. Kung gagamitin mo ito para lamang sa isang lokasyon, mas mainam na gumamit ng anonymous function. Kung gagamit ka ng fat arrow function o ang mas tradisyunal na syntax na `function`, nasa iyo ang desisyon, ngunit mapapansin mong mas gusto ng karamihan sa mga modernong developer ang `=>`.

---

## 🚀 Hamon

Maaari mo bang ipaliwanag sa isang pangungusap ang pagkakaiba ng function at method? Subukan mo!

## Post-Lecture Quiz
[Post-lecture quiz](https://ff-quizzes.netlify.app)

## Review at Pag-aaral sa Sarili

Sulit na [magbasa pa tungkol sa arrow functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), dahil mas madalas na ginagamit ang mga ito sa mga code base. Magpraktis sa pagsusulat ng isang function, at pagkatapos ay isulat itong muli gamit ang syntax na ito.

## Takdang-Aralin

[Masaya sa Mga Function](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.