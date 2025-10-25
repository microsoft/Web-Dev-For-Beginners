<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "50a7783473b39a2e0f133e271a102231",
  "translation_date": "2025-10-24T19:31:56+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "sw"
}
-->
# Tekeleza "Ongeza Muamala" Dialogi

## Muhtasari

Programu yako ya benki sasa ina usimamizi wa hali thabiti na uhifadhi wa data, lakini inakosa kipengele muhimu ambacho programu halisi za benki zinahitaji: uwezo wa watumiaji kuongeza miamala yao wenyewe. Katika kazi hii, utaunda dialogi kamili ya "Ongeza Muamala" ambayo inaunganishwa vizuri na mfumo wako wa usimamizi wa hali uliopo.

Kazi hii inakusanya kila kitu ulichojifunza katika masomo manne ya benki: uundaji wa HTML, usimamizi wa fomu, ujumuishaji wa API, na usimamizi wa hali.

## Malengo ya Kujifunza

Kwa kukamilisha kazi hii, utaweza:
- **Kuunda** kiolesura cha dialogi kinachofaa kwa kuingiza data
- **Kutumia** muundo wa fomu unaopatikana kwa msaada wa kibodi na wasomaji wa skrini
- **Kuunganisha** vipengele vipya na mfumo wako wa usimamizi wa hali uliopo
- **Kufanya mazoezi** ya mawasiliano ya API na kushughulikia makosa
- **Kutumia** mifumo ya kisasa ya maendeleo ya wavuti kwa kipengele halisi cha ulimwengu

## Maelekezo

### Hatua ya 1: Kitufe cha Ongeza Muamala

**Unda** kitufe cha "Ongeza Muamala" kwenye ukurasa wa dashibodi yako ambacho watumiaji wanaweza kukiona kwa urahisi na kukitumia.

**Mahitaji:**
- **Weka** kitufe mahali panapofaa kwenye dashibodi
- **Tumia** maandishi ya kitufe yaliyo wazi na yanayoelekeza hatua
- **Pamba** kitufe ili kifanane na muundo wa UI uliopo
- **Hakikisha** kitufe kinapatikana kwa kibodi

### Hatua ya 2: Utekelezaji wa Dialogi

Chagua mojawapo ya njia hizi mbili za kutekeleza dialogi yako:

**Chaguo A: Ukurasa Tofauti**
- **Unda** kiolezo kipya cha HTML kwa fomu ya muamala
- **Ongeza** njia mpya kwenye mfumo wako wa njia
- **Tekeleza** urambazaji wa kwenda na kutoka kwenye ukurasa wa fomu

**Chaguo B: Dialogi ya Modal (Inapendekezwa)**
- **Tumia** JavaScript kuonyesha/kuficha dialogi bila kuondoka kwenye dashibodi
- **Tekeleza** kwa kutumia mali ya [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) au madarasa ya CSS
- **Unda** uzoefu laini wa mtumiaji na usimamizi sahihi wa mwelekeo

### Hatua ya 3: Utekelezaji wa Upatikanaji

**Hakikisha** dialogi yako inakidhi [viwango vya upatikanaji kwa dialogi za modal](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/):

**Urambazaji wa Kibodi:**
- **Saidia** kitufe cha Escape kufunga dialogi
- **Zuia** mwelekeo ndani ya dialogi wakati imefunguliwa
- **Rudisha** mwelekeo kwenye kitufe cha kuzindua wakati imefungwa

**Msaada wa Wasomaji wa Skrini:**
- **Ongeza** lebo na majukumu sahihi ya ARIA
- **Tangaza** kufunguliwa/kufungwa kwa dialogi kwa wasomaji wa skrini
- **Toa** lebo za wazi za sehemu za fomu na ujumbe wa makosa

### Hatua ya 4: Uundaji wa Fomu

**Buni** fomu ya HTML inayokusanya data ya muamala:

**Sehemu Zinazohitajika:**
- **Tarehe**: Wakati muamala ulifanyika
- **Maelezo**: Muamala ulikuwa wa nini
- **Kiasi**: Thamani ya muamala (chanya kwa mapato, hasi kwa matumizi)

**Vipengele vya Fomu:**
- **Thibitisha** uingizaji wa mtumiaji kabla ya kuwasilisha
- **Toa** ujumbe wa makosa wazi kwa data isiyo sahihi
- **Jumuisha** maandishi ya maelezo na lebo za kusaidia
- **Pamba** kwa muundo unaolingana na muundo wako uliopo

### Hatua ya 5: Ujumuishaji wa API

**Unganisha** fomu yako na API ya nyuma:

**Hatua za Utekelezaji:**
- **Kagua** [maelezo ya API ya seva](../api/README.md) kwa njia sahihi na muundo wa data
- **Unda** data ya JSON kutoka kwa pembejeo za fomu yako
- **Tuma** data kwa API kwa kutumia usimamizi sahihi wa makosa
- **Onyesha** ujumbe wa mafanikio/makosa kwa mtumiaji
- **Shughulikia** makosa ya mtandao kwa uangalifu

### Hatua ya 6: Ujumuishaji wa Usimamizi wa Hali

**Sasisha** dashibodi yako na muamala mpya:

**Mahitaji ya Ujumuishaji:**
- **Fanya upya** data ya akaunti baada ya kuongeza muamala kwa mafanikio
- **Sasisha** onyesho la dashibodi bila kuhitaji upakiaji wa ukurasa
- **Hakikisha** muamala mpya unaonekana mara moja
- **Dumisha** uthabiti sahihi wa hali katika mchakato mzima

## Maelezo ya Kiufundi

**Maelezo ya Njia ya API:**
Rejelea [nyaraka za API ya seva](../api/README.md) kwa:
- Muundo wa JSON unaohitajika kwa data ya muamala
- Njia ya HTTP na URL ya njia
- Muundo wa majibu yanayotarajiwa
- Kushughulikia majibu ya makosa

**Matokeo Yanayotarajiwa:**
Baada ya kukamilisha kazi hii, programu yako ya benki inapaswa kuwa na kipengele kamili cha "Ongeza Muamala" ambacho kinaonekana na kinafanya kazi kitaalamu:

![Picha ya skrini inayoonyesha mfano wa dialogi ya "Ongeza muamala"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.sw.png)

## Kupima Utekelezaji Wako

**Upimaji wa Kazi:**
1. **Thibitisha** kitufe cha "Ongeza Muamala" kinaonekana wazi na kinapatikana
2. **Jaribu** kwamba dialogi inafunguka na kufungwa vizuri
3. **Hakikisha** uthibitishaji wa fomu unafanya kazi kwa sehemu zote zinazohitajika
4. **Angalia** kwamba miamala iliyofanikiwa inaonekana mara moja kwenye dashibodi
5. **Hakikisha** usimamizi wa makosa unafanya kazi kwa data isiyo sahihi na masuala ya mtandao

**Upimaji wa Upatikanaji:**
1. **Tembea** kupitia mtiririko mzima kwa kutumia kibodi pekee
2. **Jaribu** na msomaji wa skrini ili kuhakikisha matangazo sahihi
3. **Thibitisha** usimamizi wa mwelekeo unafanya kazi vizuri
4. **Angalia** kwamba vipengele vyote vya fomu vina lebo sahihi

## Rubric ya Tathmini

| Kigezo | Bora Zaidi | Inatosha | Inahitaji Kuboresha |
| ------- | --------- | -------- | ------------------- |
| **Kazi** | Kipengele cha kuongeza muamala kinafanya kazi bila dosari na kina uzoefu bora wa mtumiaji na kinazingatia mazoea bora yote kutoka masomo | Kipengele cha kuongeza muamala kinafanya kazi vizuri lakini kinaweza kukosa baadhi ya mazoea bora au kina masuala madogo ya matumizi | Kipengele cha kuongeza muamala kinafanya kazi kwa sehemu au kina matatizo makubwa ya matumizi |
| **Ubora wa Msimbo** | Msimbo umeandaliwa vizuri, unafuata mifumo iliyowekwa, unajumuisha usimamizi sahihi wa makosa, na unaunganishwa vizuri na usimamizi wa hali uliopo | Msimbo unafanya kazi lakini unaweza kuwa na masuala ya mpangilio au mifumo isiyo thabiti na msimbo uliopo | Msimbo una masuala makubwa ya muundo au haujajumuishwa vizuri na mifumo iliyopo |
| **Upatikanaji** | Msaada kamili wa urambazaji wa kibodi, usomaji wa skrini, na unafuata miongozo ya WCAG na usimamizi bora wa mwelekeo | Vipengele vya msingi vya upatikanaji vimetekelezwa lakini vinaweza kukosa baadhi ya urambazaji wa kibodi au vipengele vya usomaji wa skrini | Hakuna au upatikanaji mdogo umetekelezwa |
| **Uzoefu wa Mtumiaji** | Kiolesura cha angavu, kilichosafishwa na maoni wazi, mwingiliano laini, na muonekano wa kitaalamu | Uzoefu mzuri wa mtumiaji na maeneo madogo ya kuboresha katika maoni au muundo wa kuona | Uzoefu duni wa mtumiaji na kiolesura kinachochanganya au ukosefu wa maoni ya mtumiaji |

## Changamoto za Ziada (Hiari)

Baada ya kukamilisha mahitaji ya msingi, zingatia maboresho haya:

**Vipengele Vilivyoboreshwa:**
- **Ongeza** kategoria za muamala (chakula, usafiri, burudani, nk.)
- **Tekeleza** uthibitishaji wa pembejeo na maoni ya wakati halisi
- **Unda** njia za mkato za kibodi kwa watumiaji wa nguvu
- **Ongeza** uwezo wa kuhariri na kufuta miamala

**Ujumuishaji wa Juu:**
- **Tekeleza** utendakazi wa kufuta kwa muamala ulioongezwa hivi karibuni
- **Ongeza** uingizaji wa miamala kwa wingi kutoka faili za CSV
- **Unda** uwezo wa kutafuta na kuchuja miamala
- **Tekeleza** utendakazi wa kusafirisha data

Vipengele hivi vya hiari vitakusaidia kufanya mazoezi ya dhana za juu za maendeleo ya wavuti na kuunda programu ya benki kamili zaidi!

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya kiasili inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.