<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b4612bbb9ace984f374fcc80e3e035ad",
  "translation_date": "2025-08-28T04:04:10+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "sw"
}
-->
# Misingi ya JavaScript: Mbinu na Kazi

![Misingi ya JavaScript - Kazi](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.sw.png)  
> Sketchnote na [Tomomi Imura](https://twitter.com/girlie_mac)

## Jaribio la Kabla ya Somo  
[Jaribio la kabla ya somo](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/9)

Tunapofikiria kuhusu kuandika msimbo, tunapaswa kuhakikisha kuwa msimbo wetu unasomeka. Ingawa hili linaweza kuonekana kinyume na matarajio, msimbo husomwa mara nyingi zaidi kuliko unavyoandikwa. Chombo kimoja muhimu katika kisanduku cha zana cha msanidi programu kuhakikisha msimbo unaoweza kudumishwa ni **kazi**.

[![Mbinu na Kazi](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Mbinu na Kazi")

> 🎥 Bofya picha hapo juu kwa video kuhusu mbinu na kazi.

> Unaweza kuchukua somo hili kwenye [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Kazi

Kwa msingi wake, kazi ni kipande cha msimbo ambacho tunaweza kukitekeleza tunapohitaji. Hii ni bora kwa hali ambapo tunahitaji kufanya kazi ile ile mara kadhaa; badala ya kurudia mantiki hiyo katika maeneo mengi (ambayo ingekuwa ngumu kusasisha baadaye), tunaweza kuiweka mahali pamoja na kuipigia simu tunapohitaji kazi hiyo kufanyika - unaweza hata kupigia kazi kutoka kwa kazi nyingine!

Jambo jingine muhimu ni uwezo wa kuipa kazi jina. Ingawa hili linaweza kuonekana dogo, jina linatoa njia ya haraka ya kuandika maelezo ya sehemu ya msimbo. Unaweza kufikiria hili kama lebo kwenye kitufe. Nikibonyeza kitufe kilichoandikwa "Sitisha kipima muda", najua kitakomesha saa inayoendelea.

## Kuunda na Kupigia Kazi Simu

Sintaksia ya kazi inaonekana kama ifuatavyo:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Ikiwa ningetaka kuunda kazi ya kuonyesha salamu, ingeonekana hivi:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Tunapohitaji kupigia kazi simu (au kuiita), tunatumia jina la kazi likifuatiwa na `()`. Ni vyema kutambua kuwa kazi yetu inaweza kufafanuliwa kabla au baada ya kuamua kuipigia simu; mkusanyaji wa JavaScript ataipeleleza kwa ajili yako.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** Kuna aina maalum ya kazi inayojulikana kama **mbinu**, ambayo tayari umekuwa ukitumia! Kwa kweli, tuliona hili katika onyesho letu hapo juu tulipotumia `console.log`. Tofauti kati ya mbinu na kazi ni kwamba mbinu imeambatanishwa na kitu (`console` katika mfano wetu), wakati kazi ni huru. Utasikia wasanidi programu wengi wakitumia maneno haya kwa kubadilishana.

### Mazoea Bora ya Kazi

Kuna mazoea machache bora ya kuzingatia unapounda kazi:

- Kama kawaida, tumia majina yanayoelezea ili ujue kazi itafanya nini  
- Tumia **camelCasing** kuunganisha maneno  
- Weka kazi zako zikilenga kazi maalum  

## Kupitisha Taarifa kwa Kazi

Ili kufanya kazi iweze kutumika tena mara nyingi, mara nyingi utataka kupitisha taarifa ndani yake. Tukizingatia mfano wetu wa `displayGreeting` hapo juu, itaonyesha tu **Hello, world!**. Sio kazi yenye manufaa sana ambayo mtu anaweza kuunda. Ikiwa tunataka kuifanya iwe rahisi zaidi, kama kuruhusu mtu kutaja jina la mtu wa kusalimiwa, tunaweza kuongeza **kigezo**. Kigezo (wakati mwingine huitwa **hoja**) ni taarifa ya ziada inayotumwa kwa kazi.

Vigezo huorodheshwa katika sehemu ya ufafanuzi ndani ya mabano na hutenganishwa kwa koma kama ifuatavyo:

```javascript
function name(param, param2, param3) {

}
```

Tunaweza kusasisha `displayGreeting` yetu kukubali jina na kulionyesha.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Tunapohitaji kupigia kazi simu na kupitisha kigezo, tunakitaja ndani ya mabano.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Thamani Chaguo-Msingi

Tunaweza kufanya kazi yetu iwe rahisi zaidi kwa kuongeza vigezo zaidi. Lakini vipi ikiwa hatutaki kila thamani iwe ya lazima? Tukizingatia mfano wetu wa salamu, tunaweza kuacha jina kuwa la lazima (tunapaswa kujua tunamsalimu nani), lakini tunataka kuruhusu salamu yenyewe kubadilishwa kama mtu anavyotaka. Ikiwa mtu hataki kuibadilisha, tunatoa thamani chaguo-msingi badala yake. Ili kutoa thamani chaguo-msingi kwa kigezo, tunaiweka kwa njia ile ile tunavyoweka thamani kwa kigezo - `parameterName = 'defaultValue'`. Ili kuona mfano kamili:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Tunapopigia kazi simu, tunaweza kuamua ikiwa tunataka kuweka thamani kwa `salutation`.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Thamani za Kurudisha

Hadi sasa kazi tuliyojenga itatoa matokeo kila mara kwenye [console](https://developer.mozilla.org/docs/Web/API/console). Wakati mwingine hii inaweza kuwa kile tunachotafuta hasa, hasa tunapounda kazi ambazo zitakuwa zikihusiana na huduma nyingine. Lakini vipi ikiwa nataka kuunda kazi ya kusaidia kufanya hesabu na kutoa thamani hiyo ili niitumie mahali pengine?

Tunaweza kufanya hivyo kwa kutumia **thamani ya kurudisha**. Thamani ya kurudisha inarudishwa na kazi, na inaweza kuhifadhiwa kwenye kigezo sawa na tunavyoweza kuhifadhi thamani ya moja kwa moja kama kamba au namba.

Ikiwa kazi inarudisha kitu basi neno kuu `return` linatumika. Neno kuu `return` linatarajia thamani au rejeleo la kile kinachorudishwa kama ifuatavyo:

```javascript
return myVariable;
```  

Tunaweza kuunda kazi ya kuunda ujumbe wa salamu na kurudisha thamani hiyo kwa mpigaji simu.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Tunapopigia kazi simu, tutahifadhi thamani hiyo kwenye kigezo. Hii ni sawa na tunavyoweka kigezo kwa thamani ya tuli (kama `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Kazi kama Vigezo kwa Kazi

Unapopiga hatua katika taaluma yako ya programu, utakutana na kazi zinazokubali kazi kama vigezo. Mbinu hii nzuri hutumika mara nyingi tunapokuwa hatujui ni lini kitu kitatokea au kukamilika, lakini tunajua tunahitaji kufanya kazi fulani kama mwitikio.

Kwa mfano, fikiria [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), ambayo huanzisha kipima muda na itatekeleza msimbo inapokamilika. Tunahitaji kuiambia ni msimbo gani tunataka utekelezwe. Hii inaonekana kama kazi bora kwa kazi!

Ukikimbia msimbo hapa chini, baada ya sekunde 3 utaona ujumbe **3 seconds has elapsed**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Kazi Zisizo na Majina

Hebu tuangalie tena tulichojenga. Tunaunda kazi yenye jina ambayo itatumika mara moja tu. Kadri programu yetu inavyokuwa ngumu zaidi, tunaweza kujikuta tukitengeneza kazi nyingi ambazo zitatumika mara moja tu. Hili si bora. Kama inavyotokea, hatuhitaji kila mara kutoa jina!

Tunapopitisha kazi kama kigezo tunaweza kupitisha kuunda moja mapema na badala yake kuijenga kama sehemu ya kigezo. Tunatumia neno kuu `function`, lakini badala yake tunaijenga kama kigezo.

Hebu tuandike upya msimbo hapo juu ili kutumia kazi isiyo na jina:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Ukikimbia msimbo wetu mpya utaona tunapata matokeo yale yale. Tumeunda kazi, lakini hatukuhitaji kuipa jina!

### Kazi za Mishale Mafupi

Njia moja ya mkato inayotumika sana katika lugha nyingi za programu (ikiwa ni pamoja na JavaScript) ni uwezo wa kutumia kile kinachoitwa **arrow** au **fat arrow** function. Inatumia kiashiria maalum cha `=>`, ambacho kinaonekana kama mshale - hivyo jina! Kwa kutumia `=>`, tunaweza kuruka neno kuu `function`.

Hebu tuandike upya msimbo wetu mara nyingine tena ili kutumia kazi ya mshale mfupi:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Wakati wa Kutumia Kila Mkakati

Sasa umeona tuna njia tatu za kupitisha kazi kama kigezo na unaweza kuwa unajiuliza ni lini utumie kila moja. Ikiwa unajua utatumia kazi hiyo zaidi ya mara moja, iunde kama kawaida. Ikiwa utaitumia kwa eneo moja tu, kwa kawaida ni bora kutumia kazi isiyo na jina. Ikiwa utatumia kazi ya mshale mfupi au sintaksia ya jadi ya `function` ni juu yako, lakini utaona wasanidi programu wengi wa kisasa wanapendelea `=>`.

---

## 🚀 Changamoto

Je, unaweza kuelezea kwa sentensi moja tofauti kati ya kazi na mbinu? Jaribu!

## Jaribio la Baada ya Somo  
[Jaribio la baada ya somo](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/10)

## Mapitio na Kujisomea

Inafaa [kusoma zaidi kuhusu kazi za mshale](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), kwani zinatumiwa zaidi katika misimbo ya programu. Fanya mazoezi ya kuandika kazi, kisha uandike upya kwa kutumia sintaksia hii.

## Kazi

[Furahia na Kazi](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kuhakikisha usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.