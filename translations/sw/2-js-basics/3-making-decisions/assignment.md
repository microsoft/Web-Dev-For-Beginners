# Kufanya Maamuzi: Mchakato wa Daraja za Wanafunzi

## Malengo ya Kujifunza

Katika kazi hii, utajifunza dhana za kufanya maamuzi kutoka somo hili kwa kujenga programu inayochakata daraja za wanafunzi kutoka mifumo tofauti ya upangaji daraja. Utatumia kauli za `if...else`, waendeshaji wa kulinganisha, na waendeshaji wa kimantiki kuamua ni wanafunzi gani wanaofaulu masomo yao.

## Changamoto

Unafanya kazi katika shule ambayo hivi karibuni imeungana na taasisi nyingine. Sasa unahitaji kuchakata daraja za wanafunzi kutoka mifumo miwili tofauti kabisa ya upangaji daraja na kuamua ni wanafunzi gani wanaofaulu. Hii ni fursa nzuri ya kufanya mazoezi ya mantiki ya masharti!

### Kuelewa Mifumo ya Upangaji Daraja

#### Mfumo wa Kwanza wa Upangaji Daraja (Nambari)
- Daraja zinatolewa kama nambari kutoka 1-5
- **Daraja la kufaulu**: 3 na juu (3, 4, au 5)
- **Daraja la kufeli**: Chini ya 3 (1 au 2)

#### Mfumo wa Pili wa Upangaji Daraja (Herufi)
- Daraja zinatumia herufi: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Daraja za kufaulu**: `A`, `A-`, `B`, `B-`, `C`, `C-` (daraja zote zilizoorodheshwa ni za kufaulu)
- **Kumbuka**: Mfumo huu hauna daraja za kufeli kama `D` au `F`

### Kazi Yako

Kwa kuzingatia safu ifuatayo `allStudents` inayowakilisha wanafunzi wote na daraja zao, tengeneza safu mpya `studentsWhoPass` inayojumuisha wanafunzi wote wanaofaulu kulingana na mifumo yao ya upangaji daraja.

```javascript
let allStudents = [
  'A',    // Letter grade - passing
  'B-',   // Letter grade - passing  
  1,      // Numeric grade - failing
  4,      // Numeric grade - passing
  5,      // Numeric grade - passing
  2       // Numeric grade - failing
];

let studentsWhoPass = [];
```

### Njia ya Hatua kwa Hatua

1. **Sanidi mzunguko** wa kupitia kila daraja katika safu ya `allStudents`
2. **Angalia aina ya daraja** (ni nambari au herufi?)
3. **Tumia sheria zinazofaa za mfumo wa upangaji daraja**:
   - Kwa nambari: angalia kama daraja >= 3
   - Kwa herufi: angalia kama ni mojawapo ya daraja za kufaulu za herufi
4. **Ongeza daraja za kufaulu** kwenye safu mpya ya `studentsWhoPass`

### Mbinu za Msaada wa Nambari

Tumia dhana hizi za JavaScript kutoka somo:

- **Waendeshaji wa typeof**: `typeof grade === 'number'` kuangalia kama ni daraja ya nambari
- **Waendeshaji wa kulinganisha**: `>=` kulinganisha daraja za nambari
- **Waendeshaji wa kimantiki**: `||` kuangalia hali nyingi za daraja za herufi
- **Kauli za if...else**: kushughulikia mifumo tofauti ya upangaji daraja
- **Mbinu za safu**: `.push()` kuongeza daraja za kufaulu kwenye safu yako mpya

### Matokeo Yanayotarajiwa

Unapoendesha programu yako, `studentsWhoPass` inapaswa kuwa na: `['A', 'B-', 4, 5]`

**Kwa nini daraja hizi zinafaulu:**
- `'A'` na `'B-'` ni daraja halali za herufi (daraja zote za herufi katika mfumo huu zinafaulu)
- `4` na `5` ni daraja za nambari >= 3
- `1` na `2` zinashindwa kwa sababu ni daraja za nambari < 3

## Kupima Suluhisho Lako

Pima nambari yako na hali tofauti:

```javascript
// Test with different grade combinations
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Your solution should work with any combination of valid grades
```

## Changamoto za Ziada

Baada ya kukamilisha kazi ya msingi, jaribu nyongeza hizi:

1. **Ongeza uthibitisho**: Angalia daraja zisizo halali (kama nambari hasi au herufi zisizo halali)
2. **Hesabu takwimu**: Hesabu ni wanafunzi wangapi wanafaulu dhidi ya wanaoshindwa
3. **Ubadilishaji wa daraja**: Badilisha daraja zote kuwa mfumo mmoja wa nambari (A=5, B=4, C=3, nk.)

## Rubric

| Kigezo | Bora Zaidi (4) | Wastani (3) | Inayoendelea (2) | Mwanzo (1) |
|--------|----------------|-------------|------------------|------------|
| **Utendaji** | Programu inatambua kwa usahihi daraja zote za kufaulu kutoka mifumo yote | Programu inafanya kazi na masuala madogo au hali za kipekee | Programu inafanya kazi kwa sehemu lakini ina makosa ya kimantiki | Programu ina makosa makubwa au haifanyi kazi |
| **Muundo wa Nambari** | Nambari safi, iliyopangwa vizuri na mantiki sahihi ya if...else | Muundo mzuri na kauli za masharti zinazofaa | Muundo unaokubalika na masuala ya upangaji | Muundo mbaya, mantiki ngumu kufuatilia |
| **Matumizi ya Dhana** | Inatumia kwa ufanisi waendeshaji wa kulinganisha, waendeshaji wa kimantiki, na kauli za masharti | Matumizi mazuri ya dhana za somo na mapungufu madogo | Matumizi ya baadhi ya dhana za somo lakini inakosa vipengele muhimu | Matumizi kidogo ya dhana za somo |
| **Utatuzi wa Tatizo** | Inaonyesha uelewa wazi wa tatizo na mbinu ya suluhisho la kifahari | Mbinu nzuri ya kutatua tatizo na mantiki thabiti | Utatuzi wa tatizo wa kutosha na mkanganyiko fulani | Mbinu isiyoeleweka, haionyeshi uelewa |

## Miongozo ya Uwasilishaji

1. **Pima nambari yako** kwa kina na mifano iliyotolewa
2. **Ongeza maoni** yanayoelezea mantiki yako, hasa kwa kauli za masharti
3. **Thibitisha matokeo** yanalingana na matokeo yanayotarajiwa: `['A', 'B-', 4, 5]`
4. **Fikiria hali za kipekee** kama safu tupu au aina za data zisizotarajiwa

> 💡 **Ushauri wa Kitaalamu**: Anza kwa urahisi! Hakikisha utendaji wa msingi unafanya kazi kwanza, kisha ongeza vipengele vya kisasa zaidi. Kumbuka, lengo ni kufanya mazoezi ya mantiki ya maamuzi kwa kutumia zana ulizojifunza katika somo hili.

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.