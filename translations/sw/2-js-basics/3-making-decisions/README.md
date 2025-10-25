<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c32c3377f83ab750c2447c77ab98",
  "translation_date": "2025-10-24T19:12:00+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "sw"
}
-->
# Misingi ya JavaScript: Kufanya Maamuzi

![Misingi ya JavaScript - Kufanya maamuzi](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.sw.png)

> Sketchnote na [Tomomi Imura](https://twitter.com/girlie_mac)

Je, umewahi kujiuliza jinsi programu zinavyofanya maamuzi ya busara? Kama jinsi mfumo wa urambazaji unavyochagua njia ya haraka zaidi, au jinsi thermostat inavyoamua wakati wa kuwasha joto? Hii ni dhana ya msingi ya kufanya maamuzi katika programu.

Kama vile Injini ya Uchambuzi ya Charles Babbage ilivyoundwa kufuata mfululizo tofauti wa operesheni kulingana na hali, programu za kisasa za JavaScript zinahitaji kufanya chaguo kulingana na hali tofauti. Uwezo huu wa kuchagua na kufanya maamuzi ndio hubadilisha msimbo wa tuli kuwa programu zinazojibu na zenye akili.

Katika somo hili, utajifunza jinsi ya kutekeleza mantiki ya masharti katika programu zako. Tutachunguza kauli za masharti, waendeshaji wa kulinganisha, na maelezo ya kimantiki yanayoruhusu msimbo wako kutathmini hali na kujibu ipasavyo.

## Jaribio la Kabla ya Somo

[Jaribio la kabla ya somo](https://ff-quizzes.netlify.app/web/quiz/11)

Uwezo wa kufanya maamuzi na kudhibiti mtiririko wa programu ni kipengele cha msingi cha programu. Sehemu hii inashughulikia jinsi ya kudhibiti njia ya utekelezaji wa programu zako za JavaScript kwa kutumia thamani za Boolean na mantiki ya masharti.

[![Kufanya Maamuzi](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Kufanya Maamuzi")

> 🎥 Bonyeza picha hapo juu kwa video kuhusu kufanya maamuzi.

> Unaweza kuchukua somo hili kwenye [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Muhtasari Mfupi Kuhusu Booleans

Kabla ya kuchunguza kufanya maamuzi, hebu tukumbuke thamani za Boolean kutoka somo letu la awali. Zikitajwa kwa jina la mwanahisabati George Boole, thamani hizi zinawakilisha hali mbili – aidha `true` au `false`. Hakuna utata, hakuna hali ya kati.

Thamani hizi za binary zinaunda msingi wa mantiki yote ya kompyuta. Kila uamuzi ambao programu yako hufanya hatimaye hupunguzwa kuwa tathmini ya Boolean.

Kuunda vigezo vya Boolean ni rahisi:

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

Hii huunda vigezo viwili vyenye thamani za Boolean wazi.

✅ Booleans zimetajwa kwa jina la mwanahisabati, mwanafalsafa na mtaalamu wa mantiki George Boole (1815–1864).

## Waendeshaji wa Kulinganisha na Booleans

Kwa vitendo, mara chache utaweka thamani za Boolean kwa mkono. Badala yake, utazalisha thamani hizi kwa kutathmini hali: "Je, namba hii ni kubwa kuliko ile?" au "Je, thamani hizi ni sawa?"

Waendeshaji wa kulinganisha huwezesha tathmini hizi. Wanalinganisha thamani na kurudisha matokeo ya Boolean kulingana na uhusiano kati ya operands.

| Alama | Maelezo                                                                                                                                                   | Mfano              |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Kidogo kuliko**: Inalinganisha thamani mbili na kurudisha aina ya data ya Boolean `true` ikiwa thamani upande wa kushoto ni ndogo kuliko ya kulia                              | `5 < 6 // true`    |
| `<=`   | **Kidogo au sawa na**: Inalinganisha thamani mbili na kurudisha aina ya data ya Boolean `true` ikiwa thamani upande wa kushoto ni ndogo au sawa na ya kulia      | `5 <= 6 // true`   |
| `>`    | **Kubwa kuliko**: Inalinganisha thamani mbili na kurudisha aina ya data ya Boolean `true` ikiwa thamani upande wa kushoto ni kubwa kuliko ya kulia                         | `5 > 6 // false`   |
| `>=`   | **Kubwa au sawa na**: Inalinganisha thamani mbili na kurudisha aina ya data ya Boolean `true` ikiwa thamani upande wa kushoto ni kubwa au sawa na ya kulia | `5 >= 6 // false`  |
| `===`  | **Usawa mkali**: Inalinganisha thamani mbili na kurudisha aina ya data ya Boolean `true` ikiwa thamani upande wa kulia na kushoto ni sawa NA ni aina sawa ya data.       | `5 === 6 // false` |
| `!==`  | **Kutokuwepo usawa**: Inalinganisha thamani mbili na kurudisha thamani ya Boolean kinyume na kile ambacho operator wa usawa mkali ungeweza kurudisha                                    | `5 !== 6 // true`  |

✅ Angalia ujuzi wako kwa kuandika kulinganisha kadhaa kwenye console ya kivinjari chako. Je, data yoyote iliyorejeshwa inakushangaza?

## Kauli ya If

Kauli ya `if` ni kama kuuliza swali katika msimbo wako. "Ikiwa hali hii ni kweli, basi fanya jambo hili." Labda ni zana muhimu zaidi utakayotumia kufanya maamuzi katika JavaScript.

Hivi ndivyo inavyofanya kazi:

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

Hali huwekwa ndani ya mabano, na ikiwa ni `true`, JavaScript inaendesha msimbo ndani ya mabano ya curly. Ikiwa ni `false`, JavaScript inaruka kizuizi hicho chote.

Mara nyingi utatumia waendeshaji wa kulinganisha kuunda hali hizi. Hebu tuone mfano wa vitendo:

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

Kwa kuwa `1000 >= 800` inatathminiwa kuwa `true`, msimbo ndani ya kizuizi unatekelezwa, na kuonyesha "Kupata laptop mpya!" kwenye console.

## Kauli ya If..Else

Lakini vipi ikiwa unataka programu yako ifanye kitu tofauti wakati hali ni false? Hapo ndipo `else` inapoingia – ni kama kuwa na mpango wa dharura.

Kauli ya `else` inakupa njia ya kusema "ikiwa hali hii si kweli, fanya jambo hili badala yake."

```javascript
let currentMoney = 500;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

Sasa kwa kuwa `500 >= 800` ni `false`, JavaScript inaruka kizuizi cha kwanza na inaendesha kizuizi cha `else` badala yake. Utaona "Siwezi kumudu laptop mpya, bado!" kwenye console.

✅ Jaribu kuelewa msimbo huu na msimbo unaofuata kwa kuutekeleza kwenye console ya kivinjari. Badilisha thamani za vigezo vya currentMoney na laptopPrice ili kubadilisha `console.log()` inayorejeshwa.

## Kauli ya Switch

Wakati mwingine unahitaji kulinganisha thamani moja dhidi ya chaguo nyingi. Ingawa unaweza kufunga kauli kadhaa za `if..else`, mbinu hii inakuwa ngumu. Kauli ya `switch` inatoa muundo safi zaidi wa kushughulikia thamani nyingi tofauti.

Dhana hii inafanana na mifumo ya kubadili mitambo iliyotumika katika ubadilishaji wa simu za mapema – thamani moja ya pembejeo huamua njia maalum ambayo utekelezaji unafuata.

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

Hivi ndivyo ilivyo:
- JavaScript inatathmini usemi mara moja
- Inatafuta kila `case` ili kupata mechi
- Inapopata mechi, inaendesha kizuizi cha msimbo hicho
- `break` inaambia JavaScript kusimama na kutoka kwenye switch
- Ikiwa hakuna kesi inayolingana, inaendesha kizuizi cha `default` (ikiwa unacho)

```javascript
// Program using switch statement for day of week
let dayNumber = 2;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown day";
    break;
}
console.log(`Today is ${dayName}`);
```

Katika mfano huu, JavaScript inaona kwamba `dayNumber` ni `2`, inapata `case 2` inayolingana, inaweka `dayName` kuwa "Jumanne", na kisha inatoka kwenye switch. Matokeo? "Leo ni Jumanne" linaonyeshwa kwenye console.

✅ Jaribu kuelewa msimbo huu na msimbo unaofuata kwa kuutekeleza kwenye console ya kivinjari. Badilisha thamani za kigezo a ili kubadilisha `console.log()` inayorejeshwa.

## Waendeshaji wa Mantiki na Booleans

Maamuzi magumu mara nyingi yanahitaji kutathmini hali nyingi kwa wakati mmoja. Kama vile aljebra ya Boolean inavyoruhusu wanahisabati kuunganisha maelezo ya kimantiki, programu hutoa waendeshaji wa mantiki kuunganisha hali nyingi za Boolean.

Waendeshaji hawa huwezesha mantiki ya masharti ya hali ya juu kwa kuunganisha tathmini rahisi za kweli/siyo kweli.

| Alama | Maelezo                                                                                     | Mfano                                                                 |
| ------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **Mantiki AND**: Inalinganisha maelezo mawili ya Boolean. Inarudisha kweli **tu** ikiwa pande zote mbili ni kweli | `(5 > 3) && (5 < 10) // Pande zote mbili ni kweli. Inarudisha kweli` |
| `\|\|` | **Mantiki OR**: Inalinganisha maelezo mawili ya Boolean. Inarudisha kweli ikiwa angalau upande mmoja ni kweli     | `(5 > 10) \|\| (5 < 10) // Upande mmoja ni false, mwingine ni kweli. Inarudisha kweli` |
| `!`    | **Mantiki NOT**: Inarudisha thamani kinyume ya maelezo ya Boolean                             | `!(5 > 10) // 5 si kubwa kuliko 10, kwa hivyo "!" inafanya kuwa kweli`         |

Waendeshaji hawa hukuruhusu kuunganisha hali kwa njia za manufaa:
- AND (`&&`) inamaanisha hali zote mbili lazima ziwe kweli
- OR (`||`) inamaanisha angalau hali moja lazima iwe kweli  
- NOT (`!`) hubadilisha kweli kuwa si kweli (na kinyume chake)

## Hali na Maamuzi kwa Waendeshaji wa Mantiki

Hebu tuone waendeshaji hawa wa mantiki wakifanya kazi na mfano halisi zaidi:

```javascript
let currentMoney = 600;
let laptopPrice = 800;
let laptopDiscountPrice = laptopPrice - (laptopPrice * 0.2); // Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

Katika mfano huu: tunahesabu bei ya punguzo la 20% (640), kisha tunatathmini ikiwa fedha zetu zilizopo zinatosha kwa bei kamili AU bei ya punguzo. Kwa kuwa 600 inakidhi kizingiti cha bei ya punguzo cha 640, hali inatathminiwa kuwa kweli.

### Operator ya Kukanusha

Wakati mwingine ni rahisi kufikiria kuhusu wakati kitu si kweli. Kama badala ya kuuliza "Je, mtumiaji ameingia?", unaweza kutaka kuuliza "Je, mtumiaji hajajaingia?" Alama ya mshangao (`!`) hubadilisha mantiki kwa ajili yako.

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

Operator ya `!` ni kama kusema "kinyume cha..." – ikiwa kitu ni `true`, `!` inafanya kuwa `false`, na kinyume chake.

### Maelezo ya Ternary

Kwa ugawaji rahisi wa masharti, JavaScript hutoa **operator ya ternary**. Sintaksia hii fupi hukuruhusu kuandika maelezo ya masharti kwa mstari mmoja, muhimu unapohitaji kugawa moja ya thamani mbili kulingana na hali.

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

Inasomeka kama swali: "Je, hali hii ni kweli? Ikiwa ndiyo, tumia thamani hii. Ikiwa hapana, tumia thamani ile."

Hapa chini kuna mfano wa dhahiri zaidi:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Chukua dakika kusoma msimbo huu mara kadhaa. Je, unaelewa jinsi waendeshaji hawa wanavyofanya kazi?

Hii ndiyo mstari unasema: "Je, `firstNumber` ni kubwa kuliko `secondNumber`? Ikiwa ndiyo, weka `firstNumber` ndani ya `biggestNumber`. Ikiwa hapana, weka `secondNumber` ndani ya `biggestNumber`."

Operator ya ternary ni njia fupi tu ya kuandika kauli ya jadi ya `if..else`:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

Mbinu zote mbili hutoa matokeo sawa. Operator ya ternary inatoa ufupi, wakati muundo wa jadi wa if-else unaweza kuwa rahisi kusomeka kwa hali ngumu.

---



## 🚀 Changamoto

Unda programu ambayo imeandikwa kwanza kwa waendeshaji wa mantiki, kisha iandike upya kwa kutumia maelezo ya ternary. Je, sintaksia unayoipendelea ni ipi?

---

## Changamoto ya Wakala wa GitHub Copilot 🚀

Tumia hali ya Wakala kukamilisha changamoto ifuatayo:

**Maelezo:** Unda kikokotoo cha alama za daraja kinachojumuisha dhana nyingi za kufanya maamuzi kutoka somo hili, ikiwa ni pamoja na kauli za if-else, kauli za switch, waendeshaji wa mantiki, na maelezo ya ternary.

**Kichocheo:** Andika programu ya JavaScript inayochukua alama ya nambari ya mwanafunzi (0-100) na kuamua daraja lake la herufi kwa kutumia vigezo vifuatavyo:
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: Chini ya 60

Mahitaji:
1. Tumia kauli ya if-else kuamua daraja la herufi
2. Tumia waendeshaji wa mantiki kuangalia ikiwa mwanafunzi amefaulu (alama >= 60) NA ana heshima (alama >= 90)
3. Tumia kauli ya switch kutoa maoni maalum kwa kila daraja la herufi
4. Tumia operator ya ternary kuamua ikiwa mwanafunzi anastahili kozi inayofuata (alama >= 70)
5. Jumuisha uthibitishaji wa pembejeo ili kuhakikisha alama iko kati ya 0 na 100

Jaribu programu yako kwa alama mbalimbali ikiwa ni pamoja na kesi za ukingo kama 59, 60, 89, 90, na pembejeo zisizo sahihi.

Jifunze zaidi kuhusu [hali ya wakala](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hapa.


## Jaribio la Baada ya Somo

[Jaribio la baada ya somo](https://ff-quizzes.netlify.app/web/quiz/12)

## Mapitio & Kujisomea

Soma zaidi kuhusu waendeshaji wengi waliopo kwa mtumiaji [kwenye MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Pitisha muhtasari mzuri wa waendeshaji wa Josh Comeau [operator lookup](https://joshwcomeau.com/operator-lookup/)!

## Kazi ya Nyumbani

[Waendeshaji](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya asili inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.