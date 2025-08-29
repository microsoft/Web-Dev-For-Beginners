<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b95fdd8310ef467305015ece1b0f9411",
  "translation_date": "2025-08-29T10:08:23+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "sw"
}
-->
# Msingi wa JavaScript: Aina za Data

![Msingi wa JavaScript - Aina za Data](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.sw.png)
> Sketchnote na [Tomomi Imura](https://twitter.com/girlie_mac)

## Jaribio la Kabla ya Somo
[Jaribio la kabla ya somo](https://ff-quizzes.netlify.app/web/)

Somo hili linashughulikia misingi ya JavaScript, lugha inayowezesha mwingiliano kwenye wavuti.

> Unaweza kuchukua somo hili kwenye [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variables in JavaScript")

[![Data Types in JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Data Types in JavaScript")

> 🎥 Bonyeza picha hapo juu kwa video kuhusu variables na aina za data

Tuanze na variables na aina za data zinazojaza hizo variables!

## Variables

Variables huhifadhi thamani ambazo zinaweza kutumika na kubadilishwa katika msimbo wako.

Kuunda na **kutangaza** variable kuna sintaksia ifuatayo **[keyword] [name]**. Inajumuisha sehemu mbili:

- **Keyword**. Keywords zinaweza kuwa `let` au `var`.  

✅ Neno kuu `let` lilianzishwa katika ES6 na linatoa kile kinachoitwa _block scope_ kwa variable yako. Inapendekezwa kutumia `let` badala ya `var`. Tutajadili block scopes kwa kina zaidi katika sehemu zijazo.
- **Jina la variable**, hili ni jina unalochagua mwenyewe.

### Kazi - Kufanya kazi na variables

1. **Tangaza variable**. Tuseme tunatangaza variable kwa kutumia neno kuu `let`:

    ```javascript
    let myVariable;
    ```

   `myVariable` sasa imetangazwa kwa kutumia neno kuu `let`. Kwa sasa haina thamani.

1. **Weka thamani**. Hifadhi thamani kwenye variable kwa kutumia operator `=` ikifuatiwa na thamani inayotarajiwa.

    ```javascript
    myVariable = 123;
    ```

   > Kumbuka: matumizi ya `=` katika somo hili yanamaanisha tunatumia "assignment operator", inayotumika kuweka thamani kwenye variable. Haimaanishi usawa.

   `myVariable` sasa imepewa thamani ya 123.

1. **Badilisha msimbo**. Badilisha msimbo wako na kauli ifuatayo.

    ```javascript
    let myVariable = 123;
    ```

    Hii inaitwa _explicit initialization_ ambapo variable inatangazwa na kupewa thamani kwa wakati mmoja.

1. **Badilisha thamani ya variable**. Badilisha thamani ya variable kwa njia ifuatayo:

   ```javascript
   myVariable = 321;
   ```

   Mara variable inapokuwa imetangazwa, unaweza kubadilisha thamani yake wakati wowote katika msimbo wako kwa kutumia operator `=` na thamani mpya.

   ✅ Jaribu! Unaweza kuandika JavaScript moja kwa moja kwenye kivinjari chako. Fungua dirisha la kivinjari na uende kwenye Developer Tools. Katika console, utapata prompt; andika `let myVariable = 123`, bonyeza return, kisha andika `myVariable`. Nini kinatokea? Kumbuka, utajifunza zaidi kuhusu dhana hizi katika masomo yajayo.

## Constants

Kutangaza na kuanzisha constant hufuata dhana sawa na variable, isipokuwa kwa neno kuu `const`. Constants kwa kawaida hutangazwa kwa herufi kubwa zote.

```javascript
const MY_VARIABLE = 123;
```

Constants zinafanana na variables, isipokuwa kwa tofauti mbili:

- **Lazima ziwe na thamani**. Constants lazima ziwe zimeanzishwa, vinginevyo kosa litatokea wakati wa kuendesha msimbo.
- **Marejeleo hayawezi kubadilishwa**. Marejeleo ya constant hayawezi kubadilishwa mara baada ya kuanzishwa, vinginevyo kosa litatokea wakati wa kuendesha msimbo. Hebu tuangalie mifano miwili:
   - **Thamani rahisi**. Ifuatayo HAIRUHUSIWI:
   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```
 
   - **Marejeleo ya kitu yanalindwa**. Ifuatayo HAIRUHUSIWI.
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

    - **Thamani ya kitu haijalindwa**. Ifuatayo INARUHUSIWA:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      Hapo juu unabadilisha thamani ya kitu lakini si marejeleo yenyewe, jambo linaloruhusiwa.

   > Kumbuka, `const` inamaanisha marejeleo yanalindwa dhidi ya kupewa upya. Hata hivyo, thamani si _immutable_ na inaweza kubadilika, hasa ikiwa ni muundo changamano kama kitu.

## Aina za Data

Variables zinaweza kuhifadhi aina nyingi tofauti za thamani, kama namba na maandishi. Aina hizi mbalimbali za thamani zinajulikana kama **aina za data**. Aina za data ni sehemu muhimu ya maendeleo ya programu kwa sababu husaidia watengenezaji kufanya maamuzi kuhusu jinsi msimbo unavyopaswa kuandikwa na jinsi programu inavyopaswa kufanya kazi. Zaidi ya hayo, baadhi ya aina za data zina sifa za kipekee zinazosaidia kubadilisha au kutoa taarifa za ziada kwenye thamani.

✅ Aina za Data pia hujulikana kama JavaScript data primitives, kwani ni aina za data za kiwango cha chini kabisa zinazotolewa na lugha. Kuna aina 7 za msingi: string, number, bigint, boolean, undefined, null na symbol. Chukua dakika moja kufikiria kila moja ya hizi primitives inawakilisha nini. `zebra` ni nini? Je, `0`? `true`?

### Namba

Katika sehemu iliyopita, thamani ya `myVariable` ilikuwa aina ya data ya namba.

`let myVariable = 123;`

Variables zinaweza kuhifadhi aina zote za namba, ikiwa ni pamoja na desimali au namba hasi. Namba pia zinaweza kutumika na arithmetic operators, ambazo zitajadiliwa katika [sehemu inayofuata](../../../../2-js-basics/1-data-types).

### Arithmetic Operators

Kuna aina kadhaa za operators za kutumia wakati wa kufanya kazi za hesabu, na baadhi zimeorodheshwa hapa:

| Alama  | Maelezo                                                               | Mfano                           |
| ------ | --------------------------------------------------------------------- | -------------------------------- |
| `+`    | **Kuongeza**: Inahesabu jumla ya namba mbili                          | `1 + 2 //jibu linalotarajiwa ni 3`   |
| `-`    | **Kutoa**: Inahesabu tofauti ya namba mbili                           | `1 - 2 //jibu linalotarajiwa ni -1`  |
| `*`    | **Kuzidisha**: Inahesabu bidhaa ya namba mbili                        | `1 * 2 //jibu linalotarajiwa ni 2`   |
| `/`    | **Kugawanya**: Inahesabu mgawanyo wa namba mbili                      | `1 / 2 //jibu linalotarajiwa ni 0.5` |
| `%`    | **Remainder**: Inahesabu mabaki kutoka mgawanyo wa namba mbili        | `1 % 2 //jibu linalotarajiwa ni 1`   |

✅ Jaribu! Jaribu operesheni ya hesabu kwenye console ya kivinjari chako. Je, matokeo yanakushangaza?

### Strings

Strings ni seti za herufi zinazokaa kati ya alama za nukuu moja au mbili.

- `'Hii ni string'`
- `"Hii pia ni string"`
- `let myString = 'Hii ni thamani ya string iliyohifadhiwa kwenye variable';`

Kumbuka kutumia nukuu unapokuwa unaandika string, vinginevyo JavaScript itadhani ni jina la variable.

### Kuweka Muundo wa Strings

Strings ni maandishi, na mara kwa mara zitahitaji kuwekwa muundo.

Ili **kuunganisha** strings mbili au zaidi, au kuziunganisha pamoja, tumia operator `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ Kwa nini `1 + 1 = 2` katika JavaScript, lakini `'1' + '1' = 11?` Fikiria kuhusu hilo. Je, vipi kuhusu `'1' + 1`?

**Template literals** ni njia nyingine ya kuweka muundo wa strings, isipokuwa badala ya nukuu, backtick hutumika. Kitu chochote ambacho si maandishi ya kawaida lazima kiwekwe ndani ya placeholders `${ }`. Hii inajumuisha variables zozote ambazo zinaweza kuwa strings.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

Unaweza kufanikisha malengo yako ya kuweka muundo kwa njia yoyote, lakini template literals zitaheshimu nafasi na mistari mipya.

✅ Ni lini utatumia template literal badala ya string ya kawaida?

### Booleans

Booleans zinaweza kuwa na thamani mbili tu: `true` au `false`. Booleans zinaweza kusaidia kufanya maamuzi kuhusu mistari gani ya msimbo inapaswa kuendeshwa wakati masharti fulani yanapokamilika. Katika hali nyingi, [operators](../../../../2-js-basics/1-data-types) husaidia kuweka thamani ya Boolean na mara nyingi utaona na kuandika variables zikianzishwa au thamani zao zikisasishwa kwa operator.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ Variable inaweza kuchukuliwa kuwa 'truthy' ikiwa inatathminiwa kuwa boolean `true`. Cha kushangaza, katika JavaScript, [thamani zote ni truthy isipokuwa zimedhamiriwa kuwa falsy](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## 🚀 Changamoto

JavaScript inajulikana kwa njia zake za kushangaza za kushughulikia aina za data mara nyingine. Fanya utafiti kidogo kuhusu 'mambo ya kushangaza' haya. Kwa mfano: usikivu wa herufi kubwa na ndogo unaweza kukusumbua! Jaribu hili kwenye console yako: `let age = 1; let Age = 2; age == Age` (inatoa `false` -- kwa nini?). Ni mambo gani mengine ya kushangaza unaweza kupata?

## Jaribio la Baada ya Somo
[Jaribio la baada ya somo](https://ff-quizzes.netlify.app)

## Mapitio na Kujisomea

Angalia [orodha hii ya mazoezi ya JavaScript](https://css-tricks.com/snippets/javascript/) na ujaribu moja. Umejifunza nini?

## Kazi

[Mazoezi ya Aina za Data](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kuhakikisha usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.