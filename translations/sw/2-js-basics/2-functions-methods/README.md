<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92e136090efc4341b1d51c37924c1802",
  "translation_date": "2025-08-29T10:07:20+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "sw"
}
-->
# Misingi ya JavaScript: Mbinu na Kazi

![Misingi ya JavaScript - Kazi](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.sw.png)
> Sketchnote na [Tomomi Imura](https://twitter.com/girlie_mac)

## Jaribio la Kabla ya Somo
[Jaribio la kabla ya somo](https://ff-quizzes.netlify.app)

Tunapofikiria kuhusu kuandika msimbo, tunataka kuhakikisha kuwa msimbo wetu unasomeka. Ingawa hili linaweza kuonekana kinyume na matarajio, msimbo husomwa mara nyingi zaidi kuliko unavyoandikwa. Chombo kimoja muhimu katika kisanduku cha zana cha msanidi programu ili kuhakikisha msimbo unaoweza kudumishwa ni **kazi**.

[![Mbinu na Kazi](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Mbinu na Kazi")

> 🎥 Bofya picha hapo juu kwa video kuhusu mbinu na kazi.

> Unaweza kuchukua somo hili kwenye [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Kazi

Kwa msingi wake, kazi ni kipande cha msimbo ambacho tunaweza kukiendesha tunapohitaji. Hii ni bora kwa hali ambapo tunahitaji kutekeleza jukumu lile lile mara kadhaa; badala ya kurudia mantiki hiyo katika maeneo mengi (ambayo ingefanya iwe ngumu kusasisha wakati ukifika), tunaweza kuiweka katikati katika eneo moja, na kuiita tunapohitaji operesheni hiyo kufanywa - unaweza hata kuita kazi kutoka kwa kazi nyingine!

Jambo jingine muhimu ni uwezo wa kuipa kazi jina. Ingawa hili linaweza kuonekana kuwa dogo, jina hutoa njia ya haraka ya kuandika maelezo ya sehemu ya msimbo. Unaweza kufikiria hili kama lebo kwenye kitufe. Nikibonyeza kitufe kilichoandikwa "Sitisha kipima muda", najua kitaacha saa kuendelea.

## Kuunda na kuita kazi

Sintaksia ya kazi inaonekana kama ifuatavyo:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Ikiwa ningetaka kuunda kazi ya kuonyesha salamu, inaweza kuonekana hivi:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Wakati wowote tunapotaka kuita (au kuendesha) kazi yetu, tunatumia jina la kazi likifuatiwa na `()`. Ni muhimu kutambua kuwa kazi yetu inaweza kufafanuliwa kabla au baada ya kuamua kuiita; mkusanyaji wa JavaScript ataiangalia kwa ajili yako.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** Kuna aina maalum ya kazi inayojulikana kama **mbinu**, ambayo tayari umekuwa ukitumia! Kwa kweli, tuliona hili katika onyesho letu hapo juu tulipotumia `console.log`. Kinachofanya mbinu kuwa tofauti na kazi ni kwamba mbinu imeambatanishwa na kitu (`console` katika mfano wetu), wakati kazi ni huru. Utasikia wasanidi programu wengi wakitumia maneno haya kwa kubadilishana.

### Miongozo bora ya kazi

Kuna miongozo michache bora ya kuzingatia unapounda kazi:

- Kama kawaida, tumia majina yanayoelezea ili ujue kazi itafanya nini
- Tumia **camelCasing** kuunganisha maneno
- Hakikisha kazi zako zinalenga jukumu maalum

## Kupitisha taarifa kwa kazi

Ili kufanya kazi iweze kutumika tena mara nyingi, utataka kupitisha taarifa ndani yake. Tukizingatia mfano wetu wa `displayGreeting` hapo juu, utaonyesha tu **Hello, world!**. Sio kazi yenye manufaa sana ambayo mtu anaweza kuunda. Ikiwa tunataka kuifanya iwe rahisi zaidi, kama kuruhusu mtu kubainisha jina la mtu wa kusalimiwa, tunaweza kuongeza **kigezo**. Kigezo (ambacho wakati mwingine huitwa **hoja**), ni taarifa ya ziada inayotumwa kwa kazi.

Vigezo vinaorodheshwa katika sehemu ya ufafanuzi ndani ya mabano na hutenganishwa kwa koma kama ifuatavyo:

```javascript
function name(param, param2, param3) {

}
```

Tunaweza kusasisha `displayGreeting` yetu ili kukubali jina na kulionyesha.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Tunapoitaka kazi yetu na kupitisha kigezo, tunakibainisha ndani ya mabano.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Thamani za chaguo-msingi

Tunaweza kufanya kazi yetu iwe rahisi zaidi kwa kuongeza vigezo zaidi. Lakini vipi ikiwa hatutaki kila thamani iwe lazima kubainishwa? Tukizingatia mfano wetu wa salamu, tunaweza kuacha jina likiwa la lazima (tunapaswa kujua tunamsalimia nani), lakini tunataka kuruhusu salamu yenyewe ibadilishwe kama inavyotakiwa. Ikiwa mtu hataki kuibadilisha, tunatoa thamani ya chaguo-msingi badala yake. Ili kutoa thamani ya chaguo-msingi kwa kigezo, tunaiweka kwa njia ile ile tunavyoweka thamani kwa kigezo - `parameterName = 'defaultValue'`. Ili kuona mfano kamili:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Tunapoiita kazi, tunaweza kuamua ikiwa tunataka kuweka thamani kwa `salutation`.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Thamani za kurudi

Hadi sasa kazi tuliyojenga itaonyesha kila mara kwenye [console](https://developer.mozilla.org/docs/Web/API/console). Wakati mwingine hii inaweza kuwa kile tunachotafuta, hasa tunapounda kazi ambazo zitakuwa zikiita huduma nyingine. Lakini vipi ikiwa nataka kuunda kazi ya kusaidia kufanya hesabu na kutoa thamani hiyo ili niitumie mahali pengine?

Tunaweza kufanya hivi kwa kutumia **thamani ya kurudi**. Thamani ya kurudi inarudishwa na kazi, na inaweza kuhifadhiwa kwenye kigezo sawa na tunavyoweza kuhifadhi thamani ya moja kwa moja kama kamba au nambari.

Ikiwa kazi inarudisha kitu basi neno kuu `return` linatumika. Neno kuu `return` linatarajia thamani au rejeleo la kile kinachorudishwa kama ifuatavyo:

```javascript
return myVariable;
```  

Tunaweza kuunda kazi ya kuunda ujumbe wa salamu na kurudisha thamani hiyo kwa mpigaji.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Tunapoiita kazi hii tutahifadhi thamani hiyo kwenye kigezo. Hii ni sawa na jinsi tunavyoweka kigezo kwa thamani ya tuli (kama `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Kazi kama vigezo kwa kazi

Unapopiga hatua katika taaluma yako ya programu, utakutana na kazi zinazokubali kazi kama vigezo. Mbinu hii ya kipekee hutumika mara nyingi tunapokuwa hatujui ni lini kitu kitatokea au kukamilika, lakini tunajua tunahitaji kutekeleza operesheni kwa kujibu.

Kwa mfano, fikiria [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), ambayo huanzisha kipima muda na itaendesha msimbo inapokamilika. Tunahitaji kuiambia ni msimbo gani tunataka utekelezwe. Inaonekana kama kazi kamili kwa kazi!

Ukikimbia msimbo hapa chini, baada ya sekunde 3 utaona ujumbe **3 seconds has elapsed**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Kazi zisizo na majina

Hebu tuangalie tena kile tulichojenga. Tunaunda kazi yenye jina ambalo litatumika mara moja tu. Kadri programu yetu inavyokuwa ngumu zaidi, tunaweza kujikuta tukitengeneza kazi nyingi ambazo zitatumika mara moja tu. Hili si bora. Kama inavyotokea, hatuhitaji kila wakati kutoa jina!

Tunapopitisha kazi kama kigezo tunaweza kupitisha kuunda moja mapema na badala yake kuijenga kama sehemu ya kigezo. Tunatumia neno kuu `function`, lakini badala yake tunaiunda kama kigezo.

Hebu tuandike tena msimbo hapo juu ili kutumia kazi isiyo na jina:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Ukikimbia msimbo wetu mpya utagundua tunapata matokeo sawa. Tumeunda kazi, lakini hatukuhitaji kuipa jina!

### Kazi za mishale minene

Njia moja ya mkato inayotumika sana katika lugha nyingi za programu (pamoja na JavaScript) ni uwezo wa kutumia kile kinachoitwa **arrow** au **fat arrow** function. Inatumia kiashiria maalum cha `=>`, ambacho kinaonekana kama mshale - hivyo jina! Kwa kutumia `=>`, tunaweza kuruka neno kuu `function`.

Hebu tuandike tena msimbo wetu mara moja zaidi ili kutumia kazi ya mshale mnene:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Wakati wa kutumia kila mkakati

Sasa umeona tuna njia tatu za kupitisha kazi kama kigezo na unaweza kuwa unajiuliza ni lini utumie kila moja. Ikiwa unajua utatumia kazi hiyo zaidi ya mara moja, iunde kama kawaida. Ikiwa utaitumia kwa eneo moja tu, kwa ujumla ni bora kutumia kazi isiyo na jina. Ikiwa utatumia kazi ya mshale mnene au sintaksia ya jadi ya `function` ni juu yako, lakini utagundua wasanidi programu wengi wa kisasa wanapendelea `=>`.

---

## 🚀 Changamoto

Je, unaweza kueleza kwa sentensi moja tofauti kati ya kazi na mbinu? Jaribu!

## Jaribio la Baada ya Somo
[Jaribio la baada ya somo](https://ff-quizzes.netlify.app)

## Mapitio na Kujisomea

Inafaa [kusoma zaidi kuhusu kazi za mishale](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), kwani zinatumiwa zaidi katika misimbo. Fanya mazoezi ya kuandika kazi, kisha uandike tena kwa kutumia sintaksia hii.

## Kazi

[Furahia na Kazi](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, inashauriwa kutumia tafsiri ya kitaalamu ya binadamu. Hatutawajibika kwa maelewano mabaya au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.