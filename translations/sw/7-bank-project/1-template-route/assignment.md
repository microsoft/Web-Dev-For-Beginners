<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "df0dcecddcd28ea8cbf6ede0ad57d673",
  "translation_date": "2025-10-24T19:35:06+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "sw"
}
-->
# Boresha Njia za Usafirishaji

## Maelekezo

Sasa kwa kuwa umeunda mfumo wa msingi wa usafirishaji, ni wakati wa kuuboresha kwa vipengele vya kitaalamu vinavyoboresha uzoefu wa mtumiaji na kutoa zana bora kwa watengenezaji. Programu halisi zinahitaji zaidi ya kubadilisha tu templeti \u2013 zinahitaji vichwa vya kurasa vinavyobadilika, hooks za mzunguko wa maisha, na miundombinu inayoweza kupanuliwa.

Katika kazi hii, utaongeza utekelezaji wa usafirishaji wako kwa vipengele viwili muhimu ambavyo mara nyingi hupatikana katika programu za wavuti za uzalishaji. Maboresho haya yatafanya programu yako ya benki ionekane ya kitaalamu zaidi na kutoa msingi wa utendaji wa baadaye.

Tangazo la njia kwa sasa lina ID ya templeti pekee ya kutumia. Lakini wakati wa kuonyesha ukurasa mpya, mara nyingine inahitajika zaidi. Hebu tuboreshe utekelezaji wa usafirishaji wetu kwa vipengele viwili vya ziada:

### Kipengele cha 1: Vichwa vya Kurasa Vinavyobadilika
**Lengo:** Toa vichwa kwa kila templeti na sasisha kichwa cha dirisha na kichwa kipya wakati templeti inabadilika.

**Kwa nini hili ni muhimu:**
- **Huboresha** uzoefu wa mtumiaji kwa kuonyesha vichwa vya tabo vya kivinjari vinavyofafanua
- **Huinua** upatikanaji kwa wasomaji wa skrini na teknolojia za kusaidia  
- **Hutoa** muktadha bora wa kuhifadhi alama na historia ya kivinjari
- **Hufuata** mbinu bora za maendeleo ya wavuti za kitaalamu

**Njia ya utekelezaji:**
- **Panua** kitu cha njia ili kujumuisha taarifa ya kichwa kwa kila njia
- **Badilisha** kazi ya `updateRoute()` ili kusasisha `document.title` kwa njia ya nguvu
- **Jaribu** kwamba vichwa vinabadilika ipasavyo wakati wa kuvinjari kati ya skrini

### Kipengele cha 2: Hooks za Mzunguko wa Maisha ya Njia  
**Lengo:** Ongeza chaguo la kuendesha baadhi ya msimbo baada ya templeti kubadilika. Tunataka kuchapisha `'Dashboard is shown'` kwenye koni ya msanidi programu kila wakati ukurasa wa dashibodi unapoonyeshwa.

**Kwa nini hili ni muhimu:**
- **Huwezesha** utekelezaji wa mantiki maalum wakati njia fulani zinapakiwa
- **Hutoa** hooks kwa uchanganuzi, uandishi wa kumbukumbu, au msimbo wa uanzishaji
- **Huunda** msingi wa tabia ngumu zaidi za njia
- **Inaonyesha** muundo wa mtazamaji katika maendeleo ya wavuti

**Njia ya utekelezaji:**
- **Ongeza** mali ya kazi ya callback ya hiari kwenye usanidi wa njia
- **Tekeleza** kazi ya callback (ikiwa ipo) baada ya uonyeshaji wa templeti kukamilika
- **Hakikisha** kipengele kinafanya kazi kwa njia yoyote yenye callback iliyofafanuliwa
- **Jaribu** kwamba ujumbe wa koni unaonekana wakati wa kutembelea dashibodi

## Rubric

| Vigezo | Bora                                                                                                                          | Inayotosheleza                                                                                                                                                                                  | Inahitaji Kuboreshwa                                       |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | Vipengele viwili vinatekelezwa na vinafanya kazi. Kichwa na nyongeza ya msimbo pia vinafanya kazi kwa njia mpya iliyoongezwa kwenye tangazo la `routes`. | Vipengele viwili vinafanya kazi, lakini tabia imewekwa moja kwa moja na haiwezi kusanidiwa kupitia tangazo la `routes`. Kuongeza njia ya tatu yenye kichwa na nyongeza ya msimbo haifanyi kazi au inafanya kazi kwa sehemu. | Kipengele kimoja kinakosekana au hakifanyi kazi ipasavyo. |

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.