<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0a02cb117e91a5b5f24178080068a3d",
  "translation_date": "2025-10-24T19:33:44+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "sw"
}
-->
# Kazi ya Marekebisho ya Msimbo na Uandishi wa Nyaraka

## Malengo ya Kujifunza

Kwa kukamilisha kazi hii, utajifunza ujuzi muhimu wa maendeleo ya programu ambao watengenezaji wa kitaalamu hutumia kila siku. Utajifunza kupanga msimbo kwa urahisi wa kutunza, kupunguza marudio kupitia uabstrakishaji, na kuandika nyaraka za kazi yako kwa watengenezaji wa baadaye (ikiwemo wewe mwenyewe!).

Msimbo safi na ulioandikwa vizuri ni muhimu kwa miradi halisi ya maendeleo ya wavuti ambapo watengenezaji wengi hushirikiana na misimbo hubadilika kwa muda.

## Muhtasari wa Kazi

Faili ya `app.js` ya programu yako ya benki imekua sana na ina utendaji wa kuingia, usajili, na dashibodi. Ni wakati wa kurekebisha msimbo huu kwa kutumia mbinu za kitaalamu za maendeleo ili kuboresha usomaji, urahisi wa kutunza, na kupunguza marudio.

## Maelekezo

Badilisha msimbo wako wa sasa wa `app.js` kwa kutekeleza mbinu hizi tatu kuu za marekebisho:

### 1. Ondoa Vigezo vya Usanidi

**Kazi**: Unda sehemu ya usanidi juu ya faili yako yenye vigezo vinavyoweza kutumika tena.

**Mwongozo wa utekelezaji:**
- Ondoa URL ya msingi ya API ya seva (ambayo kwa sasa imeandikwa mara nyingi)
- Unda vigezo vya ujumbe wa makosa vinavyoonekana katika kazi nyingi
- Fikiria kuondoa njia za njia na vitambulisho vya vipengele vinavyotumika mara kwa mara

**Mfano wa muundo:**
```javascript
// Configuration constants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Unda Kazi Moja ya Maombi

**Kazi**: Tengeneza kazi inayoweza kutumika tena ya `sendRequest()` ambayo itaondoa marudio ya msimbo kati ya `createAccount()` na `getAccount()`.

**Mahitaji:**
- Shughulikia maombi ya GET na POST
- Jumuisha utunzaji sahihi wa makosa
- Saidia njia tofauti za URL
- Kubali data ya mwili wa ombi kwa hiari

**Mwongozo wa saini ya kazi:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation here
}
```

### 3. Ongeza Nyaraka za Msimbo za Kitaalamu

**Kazi**: Andika nyaraka za msimbo wako na maoni wazi, yenye msaada yanayoelezea "kwa nini" nyuma ya mantiki yako.

**Viwango vya nyaraka:**
- Ongeza nyaraka za kazi zinazoelezea madhumuni, vigezo, na thamani za kurudi
- Jumuisha maoni ya ndani kwa mantiki ngumu au sheria za biashara
- Panga kazi zinazohusiana pamoja na vichwa vya sehemu
- Eleza mifumo yoyote ya msimbo isiyo ya wazi au mbinu za kipekee za kivinjari

**Mfano wa mtindo wa nyaraka:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Prevent default form submission to handle with JavaScript
  event.preventDefault();
  
  // Your implementation...
}
```

## Vigezo vya Mafanikio

Msimbo wako uliorekebishwa unapaswa kuonyesha mbinu hizi za maendeleo ya kitaalamu:

### Utekelezaji Bora
- ✅ **Vigezo**: Maneno yote ya kichawi na URL zimeondolewa kwenye vigezo vilivyopewa majina wazi
- ✅ **Kanuni ya DRY**: Mantiki ya maombi ya kawaida imeunganishwa katika kazi inayoweza kutumika tena ya `sendRequest()`
- ✅ **Nyaraka**: Kazi zina maoni ya JSDoc yanayoelezea madhumuni na vigezo
- ✅ **Mpangilio**: Msimbo umewekwa kwa mantiki na vichwa vya sehemu na muundo thabiti
- ✅ **Utunzaji wa Makosa**: Utunzaji wa makosa umeboreshwa kwa kutumia kazi mpya ya maombi

### Utekelezaji wa Kutosha
- ✅ **Vigezo**: Thamani nyingi zinazojirudia zimeondolewa, na thamani chache zimebaki zimeandikwa moja kwa moja
- ✅ **Urekebishaji**: Kazi ya msingi ya `sendRequest()` imeundwa lakini inaweza kuwa haishughulikii hali zote za kipekee
- ✅ **Maoni**: Kazi kuu zimeandikwa nyaraka, ingawa maelezo mengine yanaweza kuwa kamili zaidi
- ✅ **Usomaji**: Msimbo kwa ujumla umeandaliwa vizuri na maeneo machache yanahitaji kuboreshwa

### Inahitaji Kuboreshwa
- ❌ **Vigezo**: Maneno mengi ya kichawi na URL bado yameandikwa moja kwa moja katika faili
- ❌ **Marudio**: Marudio makubwa ya msimbo bado yapo kati ya kazi zinazofanana
- ❌ **Nyaraka**: Maoni yanakosekana au hayatoshi kuelezea madhumuni ya msimbo
- ❌ **Mpangilio**: Msimbo hauna muundo wazi na mpangilio wa mantiki

## Kupima Msimbo Wako Uliorekebishwa

Baada ya kurekebisha, hakikisha programu yako ya benki bado inafanya kazi vizuri:

1. **Jaribu mtiririko wote wa mtumiaji**: Usajili, kuingia, kuonyesha dashibodi, na utunzaji wa makosa
2. **Thibitisha maombi ya API**: Hakikisha kazi yako ya `sendRequest()` inafanya kazi kwa uundaji wa akaunti na upatikanaji
3. **Angalia hali za makosa**: Jaribu na hati za kuingia zisizo sahihi na makosa ya mtandao
4. **Kagua matokeo ya console**: Hakikisha hakuna makosa mapya yaliyoletwa wakati wa marekebisho

## Miongozo ya Uwasilishaji

Wasilisha faili yako ya `app.js` iliyorekebishwa ikiwa na:
- Vichwa vya sehemu vilivyo wazi vinavyopanga utendaji tofauti
- Muundo na upangaji wa msimbo thabiti
- Nyaraka kamili za JSDoc kwa kazi zote
- Maoni mafupi juu ya kuelezea mbinu yako ya marekebisho juu ya faili

**Changamoto ya Ziada**: Unda faili rahisi ya nyaraka za msimbo (`CODE_STRUCTURE.md`) inayoelezea usanifu wa programu yako na jinsi kazi tofauti zinavyofanya kazi pamoja.

## Uhusiano wa Ulimwengu Halisi

Kazi hii inaakisi aina ya matengenezo ya msimbo ambayo watengenezaji wa kitaalamu hufanya mara kwa mara. Katika mazingira ya tasnia:
- **Mapitio ya msimbo** yanatathmini usomaji na urahisi wa kutunza kama kazi hii
- **Deni la kiufundi** hukusanyika wakati msimbo haurekebishwi na kuandikwa nyaraka mara kwa mara
- **Ushirikiano wa timu** hutegemea msimbo ulio wazi na ulioandikwa nyaraka vizuri ambao wanachama wapya wa timu wanaweza kuelewa
- **Marekebisho ya hitilafu** ni rahisi sana katika misimbo iliyopangwa vizuri na yenye uabstrakishaji sahihi

Ujuzi unaofanya mazoezi hapa - kuondoa vigezo, kuondoa marudio, na kuandika nyaraka wazi - ni msingi wa maendeleo ya programu ya kitaalamu.

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.