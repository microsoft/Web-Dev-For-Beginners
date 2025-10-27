<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0092f6533ae3ec3adad5b5ece68efaf",
  "translation_date": "2025-10-24T19:09:52+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "sw"
}
-->
# Misingi ya JavaScript: Aina za Data

![Misingi ya JavaScript - Aina za Data](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.sw.png)
> Sketchnote na [Tomomi Imura](https://twitter.com/girlie_mac)

Aina za data ni mojawapo ya dhana za msingi katika JavaScript ambazo utazikuta katika kila programu unayoandika. Fikiria aina za data kama mfumo wa kuhifadhi unaotumiwa na maktaba za kale huko Alexandria – walikuwa na sehemu maalum za kuhifadhi maandiko ya mashairi, hesabu, na historia. JavaScript hupanga taarifa kwa njia sawa na hiyo kwa kutumia makundi tofauti kwa aina tofauti za data.

Katika somo hili, tutachunguza aina za msingi za data zinazofanya JavaScript ifanye kazi. Utajifunza jinsi ya kushughulikia namba, maandishi, thamani za kweli/siyo kweli, na kuelewa kwa nini kuchagua aina sahihi ni muhimu kwa programu zako. Dhana hizi zinaweza kuonekana ngumu mwanzoni, lakini kwa mazoezi, zitakuwa rahisi kuelewa.

Kuelewa aina za data kutafanya kila kitu kingine katika JavaScript kuwa wazi zaidi. Kama vile wasanifu majengo wanavyohitaji kuelewa vifaa tofauti vya ujenzi kabla ya kujenga kanisa kuu, misingi hii itasaidia kila kitu unachojenga baadaye.

## Jaribio la Kabla ya Somo
[Jaribio la kabla ya somo](https://ff-quizzes.netlify.app/web/)

Somo hili linashughulikia misingi ya JavaScript, lugha inayotoa mwingiliano kwenye wavuti.

> Unaweza kuchukua somo hili kwenye [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Variables](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variables in JavaScript")

[![Data Types in JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Data Types in JavaScript")

> 🎥 Bonyeza picha hapo juu kwa video kuhusu variables na aina za data

Tuanzie na variables na aina za data zinazojaza ndani yake!

## Variables

Variables ni sehemu za msingi za programu. Kama vile mitungi yenye lebo ambayo wataalamu wa alkemia wa enzi za kati walitumia kuhifadhi vitu tofauti, variables hukuruhusu kuhifadhi taarifa na kuipa jina la kuelezea ili uweze kuitumia baadaye. Unahitaji kukumbuka umri wa mtu? Hifadhi kwenye variable inayoitwa `age`. Unataka kufuatilia jina la mtumiaji? Hifadhi kwenye variable inayoitwa `userName`.

Tutazingatia mbinu za kisasa za kuunda variables katika JavaScript. Mbinu utakazojifunza hapa zinawakilisha miaka ya mageuzi ya lugha na mazoea bora yaliyotengenezwa na jamii ya programu.

Kuunda na **kutangaza** variable kuna syntax ifuatayo **[keyword] [name]**. Inajumuisha sehemu mbili:

- **Keyword**. Tumia `let` kwa variables zinazoweza kubadilika, au `const` kwa thamani zinazobaki sawa.
- **Jina la variable**, hili ni jina la kuelezea unalochagua mwenyewe.

✅ Keyword `let` ilianzishwa katika ES6 na inatoa variable yako kinachoitwa _block scope_. Inapendekezwa utumie `let` au `const` badala ya keyword ya zamani `var`. Tutashughulikia block scopes kwa undani zaidi katika sehemu zijazo.

### Kazi - Kufanya kazi na variables

1. **Tangaza variable**. Hebu tuanze kwa kuunda variable yetu ya kwanza:

    ```javascript
    let myVariable;
    ```

   **Hii inakamilisha:**
   - Hii inaiambia JavaScript kuunda eneo la kuhifadhi linaloitwa `myVariable`
   - JavaScript inatenga nafasi kwenye kumbukumbu kwa variable hii
   - Variable kwa sasa haina thamani (undefined)

2. **Ipe thamani**. Sasa hebu tuweke kitu kwenye variable yetu:

    ```javascript
    myVariable = 123;
    ```

   **Jinsi ugawaji unavyofanya kazi:**
   - Opereta `=` inagawanya thamani ya 123 kwa variable yetu
   - Variable sasa ina thamani hii badala ya kuwa undefined
   - Unaweza kutumia thamani hii katika msimbo wako ukitumia `myVariable`

   > Kumbuka: matumizi ya `=` katika somo hili yanamaanisha tunatumia "assignment operator", inayotumika kuweka thamani kwenye variable. Haimaanishi usawa.

3. **Fanya kwa njia bora**. Kwa kweli, hebu tuunganishe hatua hizo mbili:

    ```javascript
    let myVariable = 123;
    ```

    **Njia hii ni bora zaidi:**
    - Unatangaza variable na kugawa thamani kwa kauli moja
    - Hii ni mazoea ya kawaida miongoni mwa watengenezaji programu
    - Inapunguza urefu wa msimbo huku ikihifadhi uwazi

4. **Badilisha mawazo yako**. Je, ikiwa tunataka kuhifadhi namba tofauti?

   ```javascript
   myVariable = 321;
   ```

   **Kuelewa ugawaji upya:**
   - Variable sasa ina thamani ya 321 badala ya 123
   - Thamani ya awali inabadilishwa – variables huhifadhi thamani moja tu kwa wakati mmoja
   - Uwezo huu wa kubadilika ni sifa kuu ya variables zilizotangazwa na `let`

   ✅ Jaribu! Unaweza kuandika JavaScript moja kwa moja kwenye kivinjari chako. Fungua dirisha la kivinjari na nenda kwenye Developer Tools. Kwenye console, utapata prompt; andika `let myVariable = 123`, bonyeza return, kisha andika `myVariable`. Nini kinatokea? Kumbuka, utajifunza zaidi kuhusu dhana hizi katika masomo yanayofuata.

## Constants

Wakati mwingine unahitaji kuhifadhi taarifa ambayo haipaswi kubadilika wakati wa utekelezaji wa programu. Fikiria constants kama kanuni za hesabu ambazo Euclid alianzisha huko Ugiriki ya kale – mara tu zilipothibitishwa na kuandikwa, zilibaki thabiti kwa marejeleo ya baadaye.

Constants hufanya kazi sawa na variables, lakini kwa kizuizi muhimu: mara tu unapogawa thamani yao, haiwezi kubadilishwa. Uwezo huu wa kutobadilika husaidia kuzuia mabadiliko ya bahati mbaya kwa thamani muhimu katika programu yako.

Kutangaza na kuanzisha constant kunafuata dhana sawa na variable, isipokuwa kwa keyword ya `const`. Constants kwa kawaida hutangazwa kwa herufi kubwa zote.

```javascript
const MY_VARIABLE = 123;
```

**Hii inafanya nini:**
- **Inaunda** constant inayoitwa `MY_VARIABLE` yenye thamani ya 123
- **Inatumia** mtindo wa jina la herufi kubwa kwa constants
- **Inazuia** mabadiliko yoyote ya baadaye kwa thamani hii

Constants zina sheria kuu mbili:

- **Lazima uwape thamani mara moja** – hakuna constants tupu zinazoruhusiwa!
- **Huwezi kubadilisha thamani hiyo** – JavaScript itatoa kosa ukijaribu. Hebu tuone ninachomaanisha:

   **Thamani rahisi** - Ifuatayo haikubaliki:
   
      ```javascript
      const PI = 3;
      PI = 4; // haikubaliki
      ```

   **Unachohitaji kukumbuka:**
   - **Jaribio** la kugawa upya constant litasababisha kosa
   - **Inalinda** thamani muhimu dhidi ya mabadiliko ya bahati mbaya
   - **Inahakikisha** thamani inabaki thabiti katika programu yako
 
   **Rejeleo la kitu linalindwa** - Ifuatayo haikubaliki:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // haikubaliki
      ```

   **Kuelewa dhana hizi:**
   - **Inazuia** kubadilisha kitu kizima na kipya
   - **Inalinda** rejeleo la kitu cha awali
   - **Inahifadhi** utambulisho wa kitu kwenye kumbukumbu

    **Thamani ya kitu haijalindwa** - Ifuatayo inakubalika:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // inakubalika
      ```

      **Kufafanua kinachotokea hapa:**
      - **Inabadilisha** thamani ya mali ndani ya kitu
      - **Inahifadhi** rejeleo la kitu kile kile
      - **Inaonyesha** kuwa maudhui ya kitu yanaweza kubadilika huku rejeleo likibaki thabiti

   > Kumbuka, `const` inamaanisha kuwa rejeleo linalindwa dhidi ya kugawa upya. Hata hivyo, thamani si _thabiti_ na inaweza kubadilika, hasa ikiwa ni muundo tata kama kitu.

## Aina za Data

JavaScript hupanga taarifa katika makundi tofauti yanayoitwa aina za data. Dhana hii inafanana na jinsi wasomi wa kale walivyopanga maarifa – Aristotle alitofautisha kati ya aina tofauti za hoja, akijua kuwa kanuni za mantiki haziwezi kutumika kwa usawa kwa mashairi, hesabu, na falsafa ya asili.

Aina za data ni muhimu kwa sababu operesheni tofauti hufanya kazi na aina tofauti za taarifa. Kama vile huwezi kufanya hesabu kwa jina la mtu au kupanga alfabeti kwa mlinganyo wa hesabu, JavaScript inahitaji aina sahihi ya data kwa kila operesheni. Kuelewa hili kunazuia makosa na hufanya msimbo wako kuwa wa kuaminika zaidi.

Variables zinaweza kuhifadhi aina nyingi tofauti za thamani, kama namba na maandishi. Aina hizi mbalimbali za thamani zinajulikana kama **aina za data**. Aina za data ni sehemu muhimu ya maendeleo ya programu kwa sababu husaidia watengenezaji kufanya maamuzi kuhusu jinsi msimbo unavyopaswa kuandikwa na jinsi programu inavyopaswa kufanya kazi. Zaidi ya hayo, baadhi ya aina za data zina sifa za kipekee zinazosaidia kubadilisha au kutoa taarifa ya ziada katika thamani.

✅ Aina za Data pia hujulikana kama primitives za data za JavaScript, kwa kuwa ni aina za data za kiwango cha chini kabisa zinazotolewa na lugha. Kuna aina 7 za msingi za data: string, number, bigint, boolean, undefined, null na symbol. Chukua dakika moja kufikiria kila moja ya hizi inawakilisha nini. Je, `zebra` ni nini? Vipi kuhusu `0`? `true`?

### Namba

Namba ni aina ya data rahisi zaidi katika JavaScript. Ikiwa unafanya kazi na namba kamili kama 42, desimali kama 3.14, au namba hasi kama -5, JavaScript inazishughulikia kwa njia sawa.

Kumbuka variable yetu kutoka awali? Ile 123 tuliyohifadhi ilikuwa kweli aina ya data ya namba:

```javascript
let myVariable = 123;
```

**Sifa kuu:**
- JavaScript inatambua thamani za namba moja kwa moja
- Unaweza kufanya operesheni za hesabu na variables hizi
- Hakuna hitaji la kutangaza aina ya data waziwazi

Variables zinaweza kuhifadhi aina zote za namba, ikiwa ni pamoja na desimali au namba hasi. Namba pia zinaweza kutumika na opereta za hesabu, zilizofunikwa katika [sehemu inayofuata](../../../../2-js-basics/1-data-types).

### Opereta za Hesabu

Opereta za hesabu hukuruhusu kufanya mahesabu ya kihesabu katika JavaScript. Opereta hizi hufuata kanuni zile zile ambazo wanahisabati wametumia kwa karne nyingi – alama zile zile zilizotokea katika kazi za wasomi kama Al-Khwarizmi, aliyebuni noti za algebra.

Opereta hufanya kazi kama unavyotarajia kutoka kwa hesabu za jadi: plus kwa kuongeza, minus kwa kutoa, na kadhalika.

Kuna aina kadhaa za opereta za kutumia wakati wa kufanya kazi za hesabu, na baadhi yao yameorodheshwa hapa:

| Alama | Maelezo                                                                 | Mfano                          |
| ------ | ------------------------------------------------------------------------ | -------------------------------- |
| `+`    | **Kuongeza**: Inahesabu jumla ya namba mbili                          | `1 + 2 //jibu linalotarajiwa ni 3`   |
| `-`    | **Kutoa**: Inahesabu tofauti ya namba mbili                | `1 - 2 //jibu linalotarajiwa ni -1`  |
| `*`    | **Kuzidisha**: Inahesabu bidhaa ya namba mbili                | `1 * 2 //jibu linalotarajiwa ni 2`   |
| `/`    | **Kugawanya**: Inahesabu mgawanyiko wa namba mbili                     | `1 / 2 //jibu linalotarajiwa ni 0.5` |
| `%`    | **Salio**: Inahesabu salio kutoka kwa mgawanyiko wa namba mbili | `1 % 2 //jibu linalotarajiwa ni 1`   |

✅ Jaribu! Jaribu operesheni ya hesabu kwenye console ya kivinjari chako. Je, matokeo yanakushangaza?

### Strings

Katika JavaScript, data ya maandishi inawakilishwa kama strings. Neno "string" linatokana na dhana ya herufi zinazounganishwa pamoja kwa mpangilio, kama vile waandishi wa maandishi katika monasteri za enzi za kati walivyokuwa wakichanganya herufi kuunda maneno na sentensi katika maandiko yao.

Strings ni muhimu sana katika maendeleo ya wavuti. Kila kipande cha maandishi kinachoonyeshwa kwenye tovuti – majina ya watumiaji, lebo za vifungo, ujumbe wa makosa, maudhui – hushughulikiwa kama data ya string. Kuelewa strings ni muhimu kwa kuunda interfaces za watumiaji zinazofanya kazi.

Strings ni seti za herufi zinazokaa kati ya alama za nukta moja au nukta mbili.

```javascript
'This is a string'
"This is also a string"
let myString = 'This is a string value stored in a variable';
```

**Kuelewa dhana hizi:**
- **Inatumia** nukta moja `'` au nukta mbili `"` kufafanua strings
- **Inahifadhi** data ya maandishi inayoweza kujumuisha herufi, namba, na alama
- **Inagawa** thamani za string kwa variables kwa matumizi ya baadaye
- **Inahitaji** nukta ili kutofautisha maandishi na majina ya variables

Kumbuka kutumia nukta wakati wa kuandika string, vinginevyo JavaScript itadhani ni jina la variable.

### Kuweka Muundo wa Strings

Ubadilishaji wa strings hukuruhusu kuunganisha vipengele vya maandishi, kuingiza variables, na kuunda maudhui ya kubadilika yanayojibu hali ya programu. Mbinu hii hukuwezesha kuunda maandishi kwa njia ya programu.

Mara nyingi unahitaji kuunganisha strings nyingi pamoja – mchakato huu unaitwa concatenation.

Ili **kuunganisha** strings mbili au zaidi, au kuziunganisha pamoja, tumia opereta `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
```

**Hatua kwa hatua, kinachotokea:**
- **Inaunganisha** strings nyingi kwa kutumia opereta `+`
- **Inaunganisha** strings moja kwa moja bila nafasi katika mfano wa kwanza
- **Inaongeza** nafasi za wahusika `" "` kati ya strings kwa usomaji mzuri
- **Inaingiza** alama za uakifishi kama koma kuunda muundo sahihi

✅ Kwa nini `1 + 1 = 2` katika JavaScript, lakini `'1' + '1' = 11?` Fikiria kuhusu hilo. Vipi kuhusu `'1' + 1`?

**Template literals** ni njia nyingine ya kuweka muundo wa strings, isipokuwa badala ya nukta, alama ya backtick  inatumika. Kitu chochote ambacho si maandishi ya kawaida lazima kiwekwe ndani ya placeholders `${ }`. Hii inajumuisha variables ambazo zinaweza kuwa strings.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

**Hebu tuelewe kila sehemu:**
- **Inatumia** backticks `` ` `` badala ya nukta za kawaida kuunda template literals
- **Inaingiza** variables moja kwa moja kwa kutumia syntax ya placeholder `${}`
- **Inahifadhi** nafasi na muundo kama ilivyoandikwa
- **Inatoa** njia safi ya kuunda strings ngumu na variables
Unaweza kufanikisha malengo yako ya uundaji kwa kutumia mojawapo ya mbinu hizi, lakini template literals zitaheshimu nafasi na mistari mipya.

✅ Ni lini ungetumia template literal badala ya string ya kawaida?

### Booleans

Booleans zinawakilisha aina rahisi zaidi ya data: zinaweza tu kushikilia mojawapo ya thamani mbili – `true` au `false`. Mfumo huu wa mantiki ya binary unarudi kwenye kazi ya George Boole, mwanahisabati wa karne ya 19 ambaye alianzisha algebra ya Boolean.

Licha ya urahisi wake, booleans ni muhimu sana kwa mantiki ya programu. Zinasaidia programu yako kufanya maamuzi kulingana na hali – kama mtumiaji ameingia, kama kitufe kimebonyezwa, au kama vigezo fulani vimetimizwa.

Booleans zinaweza kuwa na thamani mbili tu: `true` au `false`. Booleans zinaweza kusaidia kufanya maamuzi kuhusu mistari gani ya msimbo inapaswa kutekelezwa wakati hali fulani zimetimizwa. Katika hali nyingi, [operators](../../../../2-js-basics/1-data-types) husaidia kuweka thamani ya Boolean na mara nyingi utaona na kuandika vigezo vikiwa vimeanzishwa au thamani zao zikiwa zimebadilishwa kwa kutumia operator.

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

**Katika mfano hapo juu, tumefanya:**
- **Kuunda** kigezo kinachohifadhi thamani ya Boolean `true`
- **Kuonyesha** jinsi ya kuhifadhi thamani ya Boolean `false`
- **Kutumia** maneno halisi `true` na `false` (hakuna nukuu zinazohitajika)
- **Kuandaa** vigezo hivi kwa matumizi katika kauli za hali

✅ Kigezo kinaweza kuchukuliwa kuwa 'truthy' ikiwa kinatathminiwa kuwa boolean `true`. Cha kushangaza, katika JavaScript, [thamani zote ni truthy isipokuwa zifafanuliwe kama falsy](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## Changamoto ya Wakala wa GitHub Copilot 🚀

Tumia hali ya Wakala kukamilisha changamoto ifuatayo:

**Maelezo:** Unda meneja wa taarifa za kibinafsi unaoonyesha aina zote za data za JavaScript ulizojifunza katika somo hili huku ukishughulikia hali halisi za data.

**Maelekezo:** Tengeneza programu ya JavaScript inayounda kitu cha wasifu wa mtumiaji kinachojumuisha: jina la mtu (string), umri (number), hali ya kuwa mwanafunzi (boolean), rangi zinazopendwa kama array, na kitu cha anwani chenye mali za mtaa, jiji, na nambari ya posta. Jumuisha kazi za kuonyesha taarifa za wasifu na kusasisha sehemu za mtu binafsi. Hakikisha unaonyesha muunganiko wa string, template literals, operesheni za hesabu na umri, na mantiki ya boolean kwa hali ya mwanafunzi.

Jifunze zaidi kuhusu [hali ya wakala](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hapa.

## 🚀 Changamoto

JavaScript ina tabia fulani zinazoweza kuwashangaza watengenezaji. Hapa kuna mfano wa kawaida wa kuchunguza: jaribu kuandika hii kwenye console ya kivinjari chako: `let age = 1; let Age = 2; age == Age` na angalia matokeo. Inarudisha `false` – unaweza kubaini kwa nini?

Hii inawakilisha mojawapo ya tabia nyingi za JavaScript zinazostahili kueleweka. Kuzifahamu tabia hizi kutakusaidia kuandika msimbo wa kuaminika zaidi na kutatua masuala kwa ufanisi zaidi.

## Jaribio la Baada ya Somo
[Jaribio la baada ya somo](https://ff-quizzes.netlify.app)

## Mapitio na Kujisomea

Angalia [orodha hii ya mazoezi ya JavaScript](https://css-tricks.com/snippets/javascript/) na jaribu moja. Umejifunza nini?

## Kazi

[Mazoezi ya Aina za Data](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya kiasili inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.