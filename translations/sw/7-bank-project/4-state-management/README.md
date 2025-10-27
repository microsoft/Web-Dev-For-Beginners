<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "32bd800759c3e943c38ad9ae6e1f51e0",
  "translation_date": "2025-10-24T19:30:49+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "sw"
}
-->
# Jenga Programu ya Benki Sehemu ya 4: Dhana za Usimamizi wa Hali

## Maswali ya Awali ya Somo

[Maswali ya awali ya somo](https://ff-quizzes.netlify.app/web/quiz/47)

## Utangulizi

Usimamizi wa hali ni kama mfumo wa urambazaji kwenye chombo cha Voyager – kila kitu kinapofanya kazi vizuri, huwezi hata kugundua kuwa upo. Lakini mambo yanapokwenda vibaya, inakuwa tofauti kati ya kufika anga za mbali na kupotea katika ulimwengu wa nyota. Katika ukuzaji wa wavuti, hali inawakilisha kila kitu ambacho programu yako inahitaji kukumbuka: hali ya kuingia kwa mtumiaji, data ya fomu, historia ya urambazaji, na hali za muda za kiolesura.

Kadri programu yako ya benki imeendelea kutoka fomu rahisi ya kuingia hadi kuwa programu ya kisasa zaidi, huenda umekutana na changamoto za kawaida. Ukiboresha ukurasa, watumiaji huingia tena bila kutarajia. Ukifunga kivinjari, maendeleo yote yanapotea. Ukijaribu kutatua tatizo, unatafuta kupitia kazi nyingi zinazobadilisha data kwa njia tofauti.

Hizi si dalili za uandishi mbaya wa programu – ni changamoto za kawaida zinazotokea programu zinapofikia kiwango fulani cha ugumu. Kila msanidi programu hukutana na changamoto hizi programu zao zinapobadilika kutoka "uthibitisho wa dhana" hadi "tayari kwa uzalishaji."

Katika somo hili, tutaweka mfumo wa usimamizi wa hali ulio katikati ambao utabadilisha programu yako ya benki kuwa programu ya kuaminika na ya kitaalamu. Utajifunza kudhibiti mtiririko wa data kwa njia inayotabirika, kuhifadhi vikao vya watumiaji ipasavyo, na kuunda uzoefu laini wa mtumiaji ambao programu za wavuti za kisasa zinahitaji.

## Mahitaji ya Awali

Kabla ya kuingia kwenye dhana za usimamizi wa hali, unahitaji kuwa na mazingira yako ya ukuzaji yamewekwa vizuri na msingi wa programu yako ya benki uko tayari. Somo hili linajengwa moja kwa moja juu ya dhana na msimbo kutoka sehemu za awali za mfululizo huu.

Hakikisha una vipengele vifuatavyo tayari kabla ya kuendelea:

**Mazingira Yanayohitajika:**
- Kamilisha [somo la upatikanaji wa data](../3-data/README.md) - programu yako inapaswa kupakia na kuonyesha data ya akaunti kwa mafanikio
- Sakinisha [Node.js](https://nodejs.org) kwenye mfumo wako kwa ajili ya kuendesha API ya nyuma
- Anzisha [API ya seva](../api/README.md) kwa ndani ili kushughulikia shughuli za data ya akaunti

**Kujaribu Mazingira Yako:**

Thibitisha kuwa seva yako ya API inafanya kazi kwa usahihi kwa kutekeleza amri hii kwenye terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

**Kile amri hii inafanya:**
- **Inatuma** ombi la GET kwa seva yako ya API ya ndani
- **Inajaribu** muunganisho na kuthibitisha kuwa seva inajibu
- **Inarudisha** taarifa ya toleo la API ikiwa kila kitu kinafanya kazi vizuri

---

## Kutambua Masuala ya Hali ya Sasa

Kama Sherlock Holmes akichunguza eneo la uhalifu, tunahitaji kuelewa kinachotokea katika utekelezaji wetu wa sasa kabla ya kutatua fumbo la vikao vya watumiaji vinavyopotea.

Tufanye jaribio rahisi linaloonyesha changamoto za usimamizi wa hali:

**🧪 Jaribu Uchunguzi Huu:**
1. Ingia kwenye programu yako ya benki na nenda kwenye dashibodi
2. Boresha ukurasa wa kivinjari
3. Angalia kinachotokea kwa hali yako ya kuingia

Ikiwa unarudishwa kwenye skrini ya kuingia, umegundua tatizo la kawaida la uhifadhi wa hali. Tabia hii hutokea kwa sababu utekelezaji wetu wa sasa huhifadhi data ya mtumiaji kwenye vigezo vya JavaScript vinavyofutwa kila ukurasa unapobadilishwa.

**Matatizo ya Utekelezaji wa Sasa:**

Kigezo rahisi cha `account` kutoka [somo letu la awali](../3-data/README.md) kinazalisha matatizo matatu makubwa yanayoathiri uzoefu wa mtumiaji na utunzaji wa msimbo:

| Tatizo | Sababu ya Kiufundi | Athari kwa Mtumiaji |
|---------|--------|----------------|
| **Upotevu wa Kikao** | Kuboresha ukurasa hufuta vigezo vya JavaScript | Watumiaji wanapaswa kuingia mara kwa mara |
| **Mabadiliko Yaliyotawanyika** | Kazi nyingi hubadilisha hali moja kwa moja | Utatuzi wa matatizo unakuwa mgumu zaidi |
| **Usafishaji Usio Kamili** | Kuondoka hakufuti marejeleo yote ya hali | Wasiwasi wa usalama na faragha |

**Changamoto ya Kimuundo:**

Kama muundo wa sehemu za Titanic ulioonekana kuwa thabiti hadi sehemu nyingi zilipojaa maji kwa wakati mmoja, kutatua matatizo haya moja moja hakutashughulikia tatizo la kimuundo lililopo. Tunahitaji suluhisho la kina la usimamizi wa hali.

> 💡 **Tunajaribu kufanikisha nini hapa?**

[Usimamizi wa hali](https://en.wikipedia.org/wiki/State_management) kimsingi ni kuhusu kutatua mafumbo mawili ya msingi:

1. **Data Yangu Iko Wapi?**: Kufuatilia taarifa tuliyonayo na inatoka wapi
2. **Je, Kila Mtu Yuko Ukurasa Mmoja?**: Kuhakikisha kile watumiaji wanachoona kinawiana na kinachotokea

**Mpango Wetu wa Mchezo:**

Badala ya kuzunguka bila mwelekeo, tutaunda mfumo wa **usimamizi wa hali ulio katikati**. Fikiria kama kuwa na mtu mmoja aliyeandaliwa vizuri anayesimamia mambo yote muhimu:

![Mchoro unaoonyesha mtiririko wa data kati ya HTML, vitendo vya mtumiaji na hali](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.sw.png)

**Kuelewa mtiririko huu wa data:**
- **Unakusanya** hali yote ya programu katika eneo moja
- **Unapanga** mabadiliko yote ya hali kupitia kazi zilizodhibitiwa
- **Unahakikisha** UI inabaki kulingana na hali ya sasa
- **Unatoa** muundo wazi na unaotabirika wa usimamizi wa data

> 💡 **Ujuzi wa Kitaalamu**: Somo hili linazingatia dhana za msingi. Kwa programu ngumu, maktaba kama [Redux](https://redux.js.org) hutoa vipengele vya hali ya juu vya usimamizi wa hali. Kuelewa kanuni hizi za msingi kutakusaidia kumudu maktaba yoyote ya usimamizi wa hali.

> ⚠️ **Mada ya Juu**: Hatutashughulikia masasisho ya UI yanayotokea moja kwa moja kutokana na mabadiliko ya hali, kwani hili linahusisha dhana za [Programu ya Kijibu](https://en.wikipedia.org/wiki/Reactive_programming). Fikiria hili kama hatua nzuri inayofuata katika safari yako ya kujifunza!

### Kazi: Kuweka Muundo wa Hali Katikati

Tuanzishe mabadiliko ya usimamizi wa hali uliotawanyika kuwa mfumo ulio katikati. Hatua hii ya kwanza inaweka msingi wa maboresho yote yanayofuata.

**Hatua ya 1: Unda Kitu cha Hali Katikati**

Badilisha tamko rahisi la `account`:

```js
let account = null;
```

Na kitu cha hali kilichopangwa:

```js
let state = {
  account: null
};
```

**Kwa nini mabadiliko haya ni muhimu:**
- **Unakusanya** data yote ya programu katika eneo moja
- **Unatayarisha** muundo wa kuongeza mali zaidi za hali baadaye
- **Unaunda** mpaka wazi kati ya hali na vigezo vingine
- **Unaanzisha** muundo unaokua kadri programu yako inavyopanuka

**Hatua ya 2: Sasisha Mifumo ya Ufikiaji wa Hali**

Sasisha kazi zako kutumia muundo mpya wa hali:

**Katika kazi za `register()` na `login()`**, badilisha:
```js
account = ...
```

Na:
```js
state.account = ...
```

**Katika kazi ya `updateDashboard()`**, ongeza mstari huu juu:
```js
const account = state.account;
```

**Kile masasisho haya yanayofanikisha:**
- **Yanaweka** utendaji uliopo huku yakiboresha muundo
- **Yanatayarisha** msimbo wako kwa usimamizi wa hali wa kisasa zaidi
- **Yanaanzisha** mifumo thabiti ya kufikia data ya hali
- **Yanaweka** msingi wa masasisho ya hali yaliyo katikati

> 💡 **Kumbuka**: Urekebishaji huu hauwezi kutatua matatizo yetu mara moja, lakini unaweka msingi muhimu kwa maboresho yenye nguvu yanayokuja!

## Kutekeleza Masasisho ya Hali Yaliyo Dhibitiwa

Kadri hali yetu inavyokusanywa, hatua inayofuata inahusisha kuanzisha mifumo iliyodhibitiwa ya mabadiliko ya data. Mbinu hii inahakikisha mabadiliko ya hali yanayotabirika na utatuzi rahisi wa matatizo.

Kanuni ya msingi inafanana na udhibiti wa trafiki ya anga: badala ya kuruhusu kazi nyingi kubadilisha hali kwa uhuru, tutapanga mabadiliko yote kupitia kazi moja iliyodhibitiwa. Muundo huu unatoa usimamizi wazi wa wakati na jinsi data inavyobadilika.

**Usimamizi wa Hali Isiyobadilika:**

Tutachukulia kitu chetu cha `state` kama [*kisichobadilika*](https://en.wikipedia.org/wiki/Immutable_object), ikimaanisha hatutabadilisha moja kwa moja. Badala yake, kila mabadiliko yataunda kitu kipya cha hali na data iliyosasishwa.

Ingawa mbinu hii inaweza kuonekana kuwa isiyo na ufanisi mwanzoni ikilinganishwa na mabadiliko ya moja kwa moja, inatoa faida kubwa kwa utatuzi wa matatizo, upimaji, na kudumisha utabiri wa programu.

**Faida za usimamizi wa hali isiyobadilika:**

| Faida | Maelezo | Athari |
|---------|-------------|--------|
| **Utabiri** | Mabadiliko hutokea tu kupitia kazi zilizodhibitiwa | Rahisi kutatua matatizo na kupima |
| **Ufuatiliaji wa Historia** | Kila mabadiliko ya hali huunda kitu kipya | Inawezesha utendakazi wa kurudisha/kufanya upya |
| **Kuzuia Athari za Pembeni** | Hakuna mabadiliko ya bahati mbaya | Huzuia hitilafu za ajabu |
| **Uboreshaji wa Utendaji** | Rahisi kugundua wakati hali imebadilika | Inawezesha masasisho ya UI yenye ufanisi |

**Usimamizi wa Hali Isiyobadilika kwa JavaScript na `Object.freeze()`:**

JavaScript inatoa [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) kuzuia mabadiliko ya vitu:

```js
const immutableState = Object.freeze({ account: userData });
// Any attempt to modify immutableState will throw an error
```

**Kufafanua kinachotokea hapa:**
- **Inazuia** uwekaji wa mali moja kwa moja au ufutaji
- **Inatupa** makosa ikiwa majaribio ya mabadiliko yanafanywa
- **Inahakikisha** mabadiliko ya hali lazima yapitie kazi zilizodhibitiwa
- **Inaunda** mkataba wazi wa jinsi hali inavyoweza kusasishwa

> 💡 **Uchambuzi wa Kina**: Jifunze kuhusu tofauti kati ya vitu vya *juu juu* na *vilivyo ndani kabisa* visivyobadilika katika [mdokumentari ya MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze). Kuelewa tofauti hii ni muhimu kwa miundo ya hali ngumu.

### Kazi

Tuunde kazi mpya ya `updateState()`:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

Katika kazi hii, tunaunda kitu kipya cha hali na kunakili data kutoka hali ya awali kwa kutumia [*spread (`...`) operator*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Kisha tunabadilisha mali fulani ya kitu cha hali na data mpya kwa kutumia [bracket notation](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` kwa uwekaji. Hatimaye, tunafungia kitu ili kuzuia mabadiliko kwa kutumia `Object.freeze()`. Kwa sasa tuna mali ya `account` tu iliyohifadhiwa katika hali, lakini kwa mbinu hii unaweza kuongeza mali nyingi unavyohitaji katika hali.

Tutasasisha pia uanzishaji wa `state` kuhakikisha hali ya awali imefungwa pia:

```js
let state = Object.freeze({
  account: null
});
```

Baada ya hapo, sasisha kazi ya `register` kwa kubadilisha uwekaji wa `state.account = result;` na:

```js
updateState('account', result);
```

Fanya vivyo hivyo na kazi ya `login`, ukibadilisha `state.account = data;` na:

```js
updateState('account', data);
```

Sasa tutatumia fursa ya kutatua tatizo la data ya akaunti kutosafishwa mtumiaji anapobofya *Logout*.

Unda kazi mpya `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

Katika `updateDashboard()`, badilisha uelekezaji `return navigate('/login');` na `return logout()`;

Jaribu kusajili akaunti mpya, kutoka na kuingia tena ili kuhakikisha kila kitu bado kinafanya kazi vizuri.

> Kidokezo: unaweza kuangalia mabadiliko yote ya hali kwa kuongeza `console.log(state)` chini ya `updateState()` na kufungua console katika zana za ukuzaji za kivinjari chako.

## Kutekeleza Uhifadhi wa Data

Tatizo la upotevu wa kikao tulilobaini awali linahitaji suluhisho la uhifadhi linalodumisha hali ya mtumiaji katika vikao vya kivinjari. Hii inabadilisha programu yetu kutoka uzoefu wa muda hadi kuwa zana ya kuaminika na ya kitaalamu.

Fikiria jinsi saa za atomiki zinavyodumisha muda sahihi hata wakati wa kukatika kwa umeme kwa kuhifadhi hali muhimu katika kumbukumbu isiyopotea. Vivyo hivyo, programu za wavuti zinahitaji mifumo ya uhifadhi wa kudumu ili kuhifadhi data muhimu ya mtumiaji katika vikao vya kivinjari na ubadilishaji wa ukurasa.

**Maswali ya Kistratejia kwa Uhifadhi wa Data:**

Kabla ya kutekeleza uhifadhi, fikiria mambo haya muhimu:

| Swali | Muktadha wa Programu ya Benki | Athari ya Uamuzi |
|----------|-------------------|----------------|
| **Je, data ni nyeti?** | Mizani ya akaunti, historia ya miamala | Chagua mbinu salama za uhifadhi |
| **Inapaswa kudumu kwa muda gani?** | Hali ya kuingia vs. mapendeleo ya muda ya UI | Chagua muda wa uhifadhi unaofaa |
| **Je, seva inaihitaji?** | Tokeni za uthibitishaji vs. mipangilio ya UI | Amua mahitaji ya kushiriki |

**Chaguo za Uhifadhi wa Kivinjari:**

Vivinjari vya kisasa vinatoa mifumo kadhaa ya uhifadhi, kila moja imeundwa kwa matumizi tofauti:

**API za Uhifadhi wa Msingi:**

1. **[`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage)**: Uhifadhi wa [Key/Value](https://en.wikipedia.org/wiki/Key%E2%80%93value_database) wa kudumu
   - **Hudumu** data katika vikao vya kivinjari bila kikomo  
   - **Husalia** hata kivinjari kinapofungwa na kompyuta kuanzishwa upya
   - **Imefungwa** kwa kikoa maalum cha tovuti
   - **Inafaa** kwa mapendeleo ya mtumiaji na hali za kuingia

2. **[`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)**: Uhifadhi wa kikao cha muda
   - **Hufanya kazi** sawa na localStorage wakati wa vikao hai
   - **Hufutwa** kiotomatiki kivinjari kinapofungwa
   - **Inafaa** kwa data ya muda ambayo haipaswi kudumu

3. **[HTTP Cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies)**: Uhifadhi unaoshirikiwa na seva
   - **Hutumwa** kiotomatiki na kila ombi la seva
   - **Inafaa** kwa [uthibitishaji](https://en.wikipedia.org/wiki/Authentication) wa tokeni
   - **Imewekewa mipaka** kwa ukubwa na inaweza kuathiri utendaji

**Mahitaji ya Usawazishaji wa Data:**

Zote `localStorage` na `sessionStorage` huhifadhi tu [nyuzi](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String):

```js
// Convert objects to JSON strings for storage
const accountData = { user: 'john', balance: 150 };
localStorage.setItem('account', JSON.stringify(accountData));

// Parse JSON strings back to objects when retrieving
const savedAccount = JSON.parse(localStorage.getItem('account'));
```

**Kuelewa usawazishaji:**
- **Hubadilisha** vitu vya JavaScript kuwa nyuzi za JSON kwa kutumia [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- **Hujenga upya** vitu kutoka JSON kwa kutumia [`JSON.parse()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- **Hushughulikia** vitu vilivyopangwa kwa kina na safu kiotomatiki
- **Hushindwa** kwa kazi, thamani zisizoelezwa, na marejeleo ya mzunguko
> 💡 **Chaguo la Juu**: Kwa programu ngumu za nje ya mtandao zenye hifadhidata kubwa, fikiria kutumia [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Inatoa hifadhidata kamili upande wa mteja lakini inahitaji utekelezaji tata zaidi.

### Kazi: Tekeleza Uhifadhi wa localStorage

Tutaweka uhifadhi wa kudumu ili watumiaji wabaki wameingia hadi watakapoamua kujiondoa. Tutatumia `localStorage` kuhifadhi data ya akaunti kati ya vikao vya kivinjari.

**Hatua ya 1: Fafanua Usanidi wa Uhifadhi**

```js
const storageKey = 'savedAccount';
```

**Kile ambacho kigezo hiki kinatoa:**
- **Hutengeneza** kitambulisho thabiti kwa data yetu iliyohifadhiwa
- **Huzuia** makosa ya herufi katika marejeleo ya funguo za uhifadhi
- **Hufanya** iwe rahisi kubadilisha ufunguo wa uhifadhi ikiwa inahitajika
- **Hufuata** mbinu bora za msimbo unaoweza kudumishwa

**Hatua ya 2: Ongeza Uhifadhi wa Kiotomatiki**

Ongeza mstari huu mwishoni mwa kazi ya `updateState()`:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

**Kufafanua kinachotokea hapa:**
- **Hubadilisha** kitu cha akaunti kuwa kamba ya JSON kwa uhifadhi
- **Huokoa** data kwa kutumia ufunguo wetu thabiti wa uhifadhi
- **Hutekeleza** kiotomatiki kila mabadiliko ya hali yanapotokea
- **Hakikisha** data iliyohifadhiwa inalingana na hali ya sasa

> 💡 **Faida ya Usanifu**: Kwa sababu tulizingatia mabadiliko yote ya hali kupitia `updateState()`, kuongeza uhifadhi kulihitaji mstari mmoja tu wa msimbo. Hii inaonyesha nguvu ya maamuzi mazuri ya usanifu!

**Hatua ya 3: Rudisha Hali Wakati Programu Inapopakia**

Tengeneza kazi ya uanzishaji ili kurudisha data iliyohifadhiwa:

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Our previous initialization code
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

**Kuelewa mchakato wa uanzishaji:**
- **Hurejesha** data yoyote ya akaunti iliyohifadhiwa awali kutoka localStorage
- **Huchambua** kamba ya JSON kurudi kuwa kitu cha JavaScript
- **Husasa** hali kwa kutumia kazi yetu ya kusasisha iliyodhibitiwa
- **Hurudisha** kikao cha mtumiaji kiotomatiki wakati ukurasa unapopakia
- **Hutekeleza** kabla ya masasisho ya njia ili kuhakikisha hali inapatikana

**Hatua ya 4: Boresha Njia ya Kawaida**

Sasisha njia ya kawaida ili kutumia uhifadhi:

Katika `updateRoute()`, badilisha:
```js
// Replace: return navigate('/login');
return navigate('/dashboard');
```

**Kwa nini mabadiliko haya yana mantiki:**
- **Hutumia** mfumo wetu mpya wa uhifadhi kwa ufanisi
- **Huruhusu** dashibodi kushughulikia ukaguzi wa uthibitisho
- **Huelekeza** kiotomatiki kwenye kuingia ikiwa hakuna kikao kilichohifadhiwa
- **Hutengeneza** uzoefu wa mtumiaji usio na mshono

**Kupima Utekelezaji Wako:**

1. Ingia kwenye programu yako ya benki
2. Fanya upya ukurasa wa kivinjari
3. Thibitisha unakaa umeingia na uko kwenye dashibodi
4. Funga na fungua tena kivinjari chako
5. Rudi kwenye programu yako na thibitisha bado uko umeingia

🎉 **Ufanisi Umefikiwa**: Umefanikiwa kutekeleza usimamizi wa hali ya kudumu! Programu yako sasa inafanya kazi kama programu ya kitaalamu ya wavuti.

## Kuweka Mizani Kati ya Uhifadhi na Ufreshi wa Data

Mfumo wetu wa uhifadhi unadumisha vikao vya mtumiaji kwa mafanikio, lakini unaleta changamoto mpya: uchakavu wa data. Wakati watumiaji au programu nyingi zinapobadilisha data sawa ya seva, taarifa iliyohifadhiwa ndani inakuwa ya zamani.

Hali hii inafanana na mabaharia wa Viking waliotegemea ramani za nyota zilizohifadhiwa na uchunguzi wa nyota wa sasa. Ramani zilitoa uthabiti, lakini mabaharia walihitaji uchunguzi mpya ili kuzingatia hali zinazobadilika. Vivyo hivyo, programu yetu inahitaji hali ya mtumiaji iliyohifadhiwa na data ya sasa ya seva.

**🧪 Kugundua Tatizo la Ufreshi wa Data:**

1. Ingia kwenye dashibodi ukitumia akaunti ya `test`
2. Endesha amri hii kwenye terminal ili kuiga muamala kutoka chanzo kingine:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

3. Fanya upya ukurasa wa dashibodi yako kwenye kivinjari
4. Angalia ikiwa unaona muamala mpya

**Kile ambacho jaribio hili linaonyesha:**
- **Inaonyesha** jinsi localStorage inaweza kuwa "chakavu" (ya zamani)
- **Inaiga** hali halisi ambapo mabadiliko ya data hutokea nje ya programu yako
- **Inafichua** mvutano kati ya uhifadhi na ufreshi wa data

**Changamoto ya Uchakavu wa Data:**

| Tatizo | Sababu | Athari kwa Mtumiaji |
|--------|--------|---------------------|
| **Data Chakavu** | localStorage haimaliziki kiotomatiki | Watumiaji wanaona taarifa za zamani |
| **Mabadiliko ya Seva** | Programu/Watumiaji wengine hubadilisha data sawa | Maoni yasiyo thabiti kati ya majukwaa |
| **Akiba vs. Uhalisia** | Akiba ya ndani haifanani na hali ya seva | Uzoefu duni wa mtumiaji na mkanganyiko |

**Mkakati wa Suluhisho:**

Tutatekeleza muundo wa "ufreshi wakati wa kupakia" ambao unadumisha faida za uhifadhi huku ukihakikisha usahihi wa data.

### Kazi: Tekeleza Mfumo wa Ufreshi wa Data

Tutatengeneza mfumo ambao unaleta kiotomatiki data mpya kutoka kwa seva huku ukidumisha faida za usimamizi wetu wa hali ya kudumu.

**Hatua ya 1: Tengeneza Kisasa cha Data ya Akaunti**

```js
async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}
```

**Kuelewa mantiki ya kazi hii:**
- **Hukagua** ikiwa mtumiaji ameingia (state.account ipo)
- **Huelekeza** kwenye kujiondoa ikiwa hakuna kikao halali kilichopatikana
- **Huleta** data mpya ya akaunti kutoka kwa seva kwa kutumia kazi ya `getAccount()` iliyopo
- **Hushughulikia** makosa ya seva kwa kujiondoa vikao visivyo halali
- **Husasa** hali na data mpya kwa kutumia mfumo wetu wa kusasisha uliodhibitiwa
- **Husababisha** uhifadhi wa localStorage kiotomatiki kupitia kazi ya `updateState()`

**Hatua ya 2: Tengeneza Kishughulikia Ufreshi wa Dashibodi**

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

**Kile ambacho kazi hii ya ufreshi inakamilisha:**
- **Husimamia** mchakato wa ufreshi wa data na masasisho ya UI
- **Husubiri** data mpya ipakie kabla ya kusasisha onyesho
- **Hakikisha** dashibodi inaonyesha taarifa za sasa zaidi
- **Hudumisha** mgawanyo safi kati ya usimamizi wa data na masasisho ya UI

**Hatua ya 3: Jumuisha na Mfumo wa Njia**

Sasisha usanidi wa njia zako ili kusababisha ufreshi kiotomatiki:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

**Jinsi ujumuishaji huu unavyofanya kazi:**
- **Hutekeleza** kazi ya ufreshi kila wakati njia ya dashibodi inapopakia
- **Hakikisha** data mpya inaonyeshwa kila wakati watumiaji wanapohamia kwenye dashibodi
- **Hudumisha** muundo wa njia uliopo huku ukiongeza ufreshi wa data
- **Hutoa** muundo thabiti wa uanzishaji maalum wa njia

**Kupima Mfumo Wako wa Ufreshi wa Data:**

1. Ingia kwenye programu yako ya benki
2. Endesha amri ya curl kutoka awali ili kuunda muamala mpya
3. Fanya upya ukurasa wa dashibodi yako au nenda mbali na urudi
4. Thibitisha kuwa muamala mpya unaonekana mara moja

🎉 **Mizani Kamili Imepatikana**: Programu yako sasa inachanganya uzoefu laini wa hali ya kudumu na usahihi wa data mpya ya seva!

## Changamoto ya Wakala wa GitHub Copilot 🚀

Tumia hali ya Wakala kukamilisha changamoto ifuatayo:

**Maelezo:** Tekeleza mfumo wa kina wa usimamizi wa hali na utendakazi wa kurudisha/kufanya upya kwa programu ya benki. Changamoto hii itakusaidia kufanya mazoezi ya dhana za hali ya juu za usimamizi wa hali ikiwa ni pamoja na ufuatiliaji wa historia ya hali, masasisho yasiyobadilika, na usawazishaji wa kiolesura cha mtumiaji.

**Kichocheo:** Tengeneza mfumo wa hali ulioboreshwa unaojumuisha: 1) Kundi la historia ya hali linalofuatilia hali zote za awali, 2) Kazi za kurudisha na kufanya upya zinazoweza kurudi kwenye hali za awali, 3) Vitufe vya UI vya operesheni za kurudisha/kufanya upya kwenye dashibodi, 4) Kikomo cha historia cha hali 10 ili kuzuia masuala ya kumbukumbu, na 5) Usafishaji sahihi wa historia wakati mtumiaji anajiondoa. Hakikisha utendakazi wa kurudisha/kufanya upya unafanya kazi na mabadiliko ya salio la akaunti na unadumu kati ya upya wa kivinjari.

Jifunze zaidi kuhusu [hali ya wakala](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hapa.

## 🚀 Changamoto: Uboreshaji wa Uhifadhi

Utekelezaji wako sasa unashughulikia vikao vya mtumiaji, ufreshi wa data, na usimamizi wa hali kwa ufanisi. Hata hivyo, fikiria ikiwa mbinu yetu ya sasa inasawazisha kwa ufanisi uhifadhi na utendakazi.

Kama mabingwa wa chess wanaotofautisha kati ya vipande muhimu na vigae vinavyoweza kutolewa, usimamizi mzuri wa hali unahitaji kutambua data gani lazima ihifadhiwe dhidi ya data gani inapaswa kuwa mpya kila wakati kutoka kwa seva.

**Uchambuzi wa Uboreshaji:**

Tathmini utekelezaji wako wa localStorage wa sasa na fikiria maswali haya ya kimkakati:
- Ni taarifa gani ya chini inayohitajika kudumisha uthibitisho wa mtumiaji?
- Ni data gani hubadilika mara kwa mara kiasi kwamba uhifadhi wa ndani hauna faida?
- Uboreshaji wa uhifadhi unaweza kuboresha utendakazi bila kupunguza uzoefu wa mtumiaji?

Aina hii ya uchambuzi wa usanifu inawatofautisha watengenezaji wenye uzoefu wanaozingatia utendakazi na ufanisi katika suluhisho zao.

**Mkakati wa Utekelezaji:**
- **Tambua** data muhimu ambayo lazima ihifadhiwe (labda tu kitambulisho cha mtumiaji)
- **Badilisha** utekelezaji wako wa localStorage ili kuhifadhi tu data muhimu ya kikao
- **Hakikisha** data mpya inapakiwa kila wakati kutoka kwa seva wakati wa ziara za dashibodi
- **Jaribu** kwamba mbinu yako iliyoboreshwa inadumisha uzoefu sawa wa mtumiaji

**Fikra ya Juu:**
- **Linganisheni** faida na hasara kati ya kuhifadhi data kamili ya akaunti dhidi ya tokeni za uthibitisho pekee
- **Andika** maamuzi yako na mantiki kwa wanachama wa timu ya baadaye

Changamoto hii itakusaidia kufikiria kama mtengenezaji wa kitaalamu anayezingatia uzoefu wa mtumiaji na ufanisi wa programu. Chukua muda wako kujaribu mbinu tofauti!

## Jaribio la Baada ya Somo

[Jaribio la baada ya somo](https://ff-quizzes.netlify.app/web/quiz/48)

## Kazi

[Tekeleza "Ongeza muamala" dirisha](assignment.md)

Hapa kuna mfano wa matokeo baada ya kukamilisha kazi:

![Picha inayoonyesha mfano wa dirisha la "Ongeza muamala"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.sw.png)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.