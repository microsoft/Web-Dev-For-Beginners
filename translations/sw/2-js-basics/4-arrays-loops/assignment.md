<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8abcada0534e0fb3a7556ea3c5a2a8a4",
  "translation_date": "2025-10-24T19:11:46+00:00",
  "source_file": "2-js-basics/4-arrays-loops/assignment.md",
  "language_code": "sw"
}
-->
# Kazi ya Arrays na Loops

## Maelekezo

Kamilisha mazoezi yafuatayo ili kujifunza jinsi ya kufanya kazi na arrays na loops. Kila zoezi linajenga juu ya dhana kutoka somo na linakuhimiza kutumia aina tofauti za loops na mbinu za array.

### Zoezi la 1: Mtengenezaji wa Muundo wa Nambari
Tengeneza programu inayoorodhesha kila nambari ya 3 kati ya 1-20 na kuichapisha kwenye console.

**Mahitaji:**
- Tumia `for` loop yenye ongezeko maalum
- Onyesha nambari kwa muundo unaoeleweka kwa mtumiaji
- Ongeza maelezo ya maoni yanayoelezea mantiki yako

**Matokeo Yanayotarajiwa:**
```
3, 6, 9, 12, 15, 18
```

> **Tip:** Badilisha usemi wa iteration katika for loop yako ili kuruka nambari.

### Zoezi la 2: Uchambuzi wa Array
Tengeneza array yenye angalau nambari 8 tofauti na andika kazi za kuchambua data.

**Mahitaji:**
- Tengeneza array inayoitwa `numbers` yenye angalau thamani 8
- Andika kazi `findMaximum()` inayorejesha nambari ya juu zaidi
- Andika kazi `findMinimum()` inayorejesha nambari ya chini zaidi  
- Andika kazi `calculateSum()` inayorejesha jumla ya nambari zote
- Jaribu kila kazi na onyesha matokeo

**Changamoto ya Ziada:** Tengeneza kazi inayopata nambari ya pili ya juu zaidi kwenye array.

### Zoezi la 3: Usindikaji wa Array ya Nyuzi
Tengeneza array ya filamu/vitabu/nyimbo unazozipenda na ufanye mazoezi ya aina tofauti za loops.

**Mahitaji:**
- Tengeneza array yenye angalau thamani 5 za nyuzi
- Tumia `for` loop ya kawaida kuonyesha vitu na nambari (1. Jina la Kitu)
- Tumia `for...of` loop kuonyesha vitu kwa herufi kubwa
- Tumia mbinu ya `forEach()` kuhesabu na kuonyesha jumla ya herufi

**Mfano wa Matokeo:**
```
Traditional for loop:
1. The Matrix
2. Inception
3. Interstellar

For...of loop (uppercase):
THE MATRIX
INCEPTION
INTERSTELLAR

Character count:
Total characters across all titles: 42
```

### Zoezi la 4: Uchujaji wa Data (Advanced)
Tengeneza programu inayosindika array ya vitu vinavyowakilisha wanafunzi.

**Mahitaji:**
- Tengeneza array yenye angalau vitu 5 vya wanafunzi vyenye mali: `name`, `age`, `grade`
- Tumia loops kupata wanafunzi walio na umri wa miaka 18 au zaidi
- Hesabu wastani wa alama za wanafunzi wote
- Tengeneza array mpya inayojumuisha tu wanafunzi wenye alama zaidi ya 85

**Mfano wa Muundo:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Add more students...
];
```

## Kupima Kazi Yako

Pima programu zako kwa:
1. Kuendesha kila zoezi kwenye console ya kivinjari chako
2. Kuhakikisha matokeo yanalingana na yanayotarajiwa
3. Kupima na seti tofauti za data
4. Kuangalia kama programu yako inashughulikia hali za kipekee (arrays tupu, kipengele kimoja)

## Miongozo ya Uwasilishaji

Jumuisha yafuatayo katika uwasilishaji wako:
- Nambari ya JavaScript iliyo na maoni mazuri kwa kila zoezi
- Picha za skrini au matokeo ya maandishi yanayoonyesha programu zako zikifanya kazi
- Maelezo mafupi ya aina ya loop uliyotumia kwa kila kazi na sababu

## Rubric

| Vigezo | Bora (Alama 3) | Inayotosha (Alama 2) | Inahitaji Kuboresha (Alama 1) |
| ------- | -------------------- | ------------------- | --------------------------- |
| **Utendaji** | Mazoezi yote yamekamilika kwa usahihi na changamoto za ziada | Mazoezi yote yanayohitajika yanafanya kazi kwa usahihi | Baadhi ya mazoezi hayajakamilika au yana makosa |
| **Ubora wa Nambari** | Nambari safi, iliyopangwa vizuri na majina ya mabadiliko yanayoeleweka | Nambari inafanya kazi lakini inaweza kuwa safi zaidi | Nambari ni chafu au ngumu kuelewa |
| **Maoni** | Maoni ya kina yanayoelezea mantiki na maamuzi | Maoni ya msingi yapo | Maoni machache au hakuna kabisa |
| **Matumizi ya Loop** | Inaonyesha uelewa wa aina tofauti za loops kwa usahihi | Inatumia loops kwa usahihi lakini aina chache | Matumizi yasiyo sahihi au yasiyo na ufanisi ya loops |
| **Kupima** | Ushahidi wa kupima kwa kina na hali nyingi | Kupima msingi kumeonyeshwa | Ushahidi mdogo wa kupima |

## Maswali ya Tafakari

Baada ya kukamilisha mazoezi, fikiria:
1. Ni aina gani ya loop ilihisi kuwa rahisi zaidi kutumia na kwa nini?
2. Ni changamoto gani ulizokutana nazo ulipokuwa ukifanya kazi na arrays?
3. Ujuzi huu unaweza kutumika vipi katika miradi halisi ya maendeleo ya wavuti?
4. Ungefanya nini tofauti ikiwa ungetakiwa kuboresha utendaji wa nambari yako?

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya asili inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.