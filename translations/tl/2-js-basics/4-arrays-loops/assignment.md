<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8abcada0534e0fb3a7556ea3c5a2a8a4",
  "translation_date": "2025-10-22T15:18:27+00:00",
  "source_file": "2-js-basics/4-arrays-loops/assignment.md",
  "language_code": "tl"
}
-->
# Arrays at Loops Assignment

## Mga Instruksyon

Kumpletuhin ang mga sumusunod na ehersisyo upang magsanay sa paggamit ng arrays at loops. Ang bawat ehersisyo ay nakabatay sa mga konsepto mula sa aralin at hinihikayat kang gamitin ang iba't ibang uri ng loop at mga pamamaraan ng array.

### Ehersisyo 1: Tagalikha ng Pattern ng Numero
Gumawa ng programa na naglilista ng bawat ika-3 numero sa pagitan ng 1-20 at ipakita ito sa console.

**Mga Kinakailangan:**
- Gumamit ng `for` loop na may custom na increment
- Ipakita ang mga numero sa user-friendly na format
- Magdagdag ng mga deskriptibong komento na nagpapaliwanag ng iyong lohika

**Inaasahang Output:**
```
3, 6, 9, 12, 15, 18
```

> **Tip:** Baguhin ang iteration-expression sa iyong for loop upang laktawan ang mga numero.

### Ehersisyo 2: Pagsusuri ng Array
Gumawa ng array na may hindi bababa sa 8 iba't ibang numero at magsulat ng mga function upang suriin ang data.

**Mga Kinakailangan:**
- Gumawa ng array na tinatawag na `numbers` na may hindi bababa sa 8 halaga
- Magsulat ng function na `findMaximum()` na nagbabalik ng pinakamataas na numero
- Magsulat ng function na `findMinimum()` na nagbabalik ng pinakamababang numero  
- Magsulat ng function na `calculateSum()` na nagbabalik ng kabuuan ng lahat ng numero
- Subukan ang bawat function at ipakita ang mga resulta

**Bonus Challenge:** Gumawa ng function na naghahanap ng pangalawang pinakamataas na numero sa array.

### Ehersisyo 3: Pagproseso ng String Array
Gumawa ng array ng iyong mga paboritong pelikula/libro/kanta at magsanay sa iba't ibang uri ng loop.

**Mga Kinakailangan:**
- Gumawa ng array na may hindi bababa sa 5 string values
- Gumamit ng tradisyunal na `for` loop upang ipakita ang mga item na may numero (1. Pangalan ng Item)
- Gumamit ng `for...of` loop upang ipakita ang mga item sa uppercase
- Gumamit ng `forEach()` method upang bilangin at ipakita ang kabuuang bilang ng mga karakter

**Halimbawa ng Output:**
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

### Ehersisyo 4: Pag-filter ng Data (Advanced)
Gumawa ng programa na nagpoproseso ng array ng mga object na kumakatawan sa mga estudyante.

**Mga Kinakailangan:**
- Gumawa ng array na may hindi bababa sa 5 object ng estudyante na may mga property: `name`, `age`, `grade`
- Gumamit ng loops upang hanapin ang mga estudyanteng 18 taong gulang o mas matanda
- Kalkulahin ang average grade ng lahat ng estudyante
- Gumawa ng bagong array na naglalaman lamang ng mga estudyante na may grades na higit sa 85

**Halimbawa ng Estruktura:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Add more students...
];
```

## Pagsubok ng Iyong Code

Subukan ang iyong mga programa sa pamamagitan ng:
1. Pagpapatakbo ng bawat ehersisyo sa console ng iyong browser
2. Pag-verify na ang mga output ay tumutugma sa inaasahang resulta
3. Pagsubok gamit ang iba't ibang set ng data
4. Pag-check na ang iyong code ay humahawak sa mga edge cases (mga empty arrays, single elements)

## Mga Alituntunin sa Pagsumite

Isama ang mga sumusunod sa iyong pagsumite:
- JavaScript code na may mahusay na komento para sa bawat ehersisyo
- Mga screenshot o text output na nagpapakita ng iyong mga programang tumatakbo
- Maikling paliwanag kung aling uri ng loop ang iyong pinili para sa bawat gawain at bakit

## Rubric

| Pamantayan | Napakahusay (3 puntos) | Katanggap-tanggap (2 puntos) | Kailangan ng Pagpapabuti (1 punto) |
| -------- | -------------------- | ------------------- | --------------------------- |
| **Functionality** | Lahat ng ehersisyo ay tamang natapos kasama ang bonus challenges | Lahat ng kinakailangang ehersisyo ay gumagana nang tama | Ang ilang ehersisyo ay hindi kumpleto o may mga error |
| **Code Quality** | Malinis, maayos na code na may deskriptibong pangalan ng variable | Gumagana ang code ngunit maaaring mas malinis | Magulo o mahirap intindihin ang code |
| **Comments** | Komprehensibong komento na nagpapaliwanag ng lohika at desisyon | May mga basic na komento | Kaunti o walang komento |
| **Loop Usage** | Nagpapakita ng pag-unawa sa iba't ibang uri ng loop nang naaangkop | Gumagamit ng loops nang tama ngunit limitado ang variety | Mali o hindi epektibong paggamit ng loop |
| **Testing** | May ebidensya ng masusing pagsubok gamit ang maraming senaryo | Pangunahing pagsubok na ipinakita | Kaunting ebidensya ng pagsubok |

## Mga Tanong sa Pagmumuni-muni

Pagkatapos kumpletuhin ang mga ehersisyo, isaalang-alang:
1. Aling uri ng loop ang pinaka-natural gamitin at bakit?
2. Anong mga hamon ang iyong naranasan sa paggamit ng arrays?
3. Paano maaaring magamit ang mga kasanayang ito sa mga proyekto sa real-world web development?
4. Ano ang gagawin mo nang iba kung kailangan mong i-optimize ang iyong code para sa performance?

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na mapagkakatiwalaang pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.