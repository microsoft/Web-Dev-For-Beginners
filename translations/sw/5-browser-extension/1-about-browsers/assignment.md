<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b6897c02603d0045dd6d8256e8714baa",
  "translation_date": "2025-10-24T19:47:55+00:00",
  "source_file": "5-browser-extension/1-about-browsers/assignment.md",
  "language_code": "sw"
}
-->
# Kazi: Badilisha Muonekano wa Kiendelezi Chako cha Kivinjari

## Muhtasari

Sasa kwa kuwa umeunda muundo wa HTML kwa kiendelezi chako cha kivinjari cha alama ya kaboni, ni wakati wa kukifanya kivutie zaidi na kuwa rafiki kwa mtumiaji. Muundo mzuri huongeza uzoefu wa mtumiaji na hufanya kiendelezi chako kuwa cha kitaalamu na cha kuvutia.

Kiendelezi chako kina mtindo wa msingi wa CSS, lakini kazi hii inakuhamasisha kuunda utambulisho wa kipekee wa muonekano unaoakisi mtindo wako wa kibinafsi huku ukidumisha urahisi wa matumizi.

## Maelekezo

### Sehemu ya 1: Changanua Muundo wa Sasa

Kabla ya kufanya mabadiliko, chunguza muundo wa CSS uliopo:

1. **Tafuta** faili za CSS katika mradi wa kiendelezi chako
2. **Pitia** mbinu ya mtindo wa sasa na mpangilio wa rangi
3. **Tambua** maeneo yanayohitaji kuboreshwa katika mpangilio, maandishi, na mpangilio wa kuona
4. **Fikiria** jinsi muundo unavyosaidia malengo ya mtumiaji (kukamilisha fomu kwa urahisi na kuonyesha data kwa uwazi)

### Sehemu ya 2: Buni Mtindo Wako wa Kibinafsi

Unda muundo wa kuona unaolingana na:

**Mpangilio wa Rangi:**
- Chagua rangi kuu zinazoakisi mada za mazingira
- Hakikisha kuna utofauti wa kutosha kwa upatikanaji (tumia zana kama WebAIM's contrast checker)
- Fikiria jinsi rangi zitakavyoonekana katika mandhari tofauti za kivinjari

**Maandishi:**
- Chagua fonti zinazosomeka vizuri hata kwa ukubwa mdogo wa kiendelezi
- Weka mpangilio wazi kwa kutumia ukubwa na uzito wa fonti unaofaa
- Hakikisha maandishi yanabaki kusomeka katika mandhari za kivinjari za mwanga na giza

**Mpangilio na Nafasi:**
- Boresha mpangilio wa kuona wa vipengele vya fomu na maonyesho ya data
- Ongeza nafasi ya kutosha kwa usomaji bora
- Fikiria kanuni za muundo unaojibika kwa ukubwa tofauti wa skrini

### Sehemu ya 3: Tekeleza Muundo Wako

Badilisha faili za CSS ili kutekeleza muundo wako:

```css
/* Example starting points for customization */

.form-data {
    /* Style the configuration form */
    background: /* your choice */;
    padding: /* your spacing */;
    border-radius: /* your preference */;
}

.result-container {
    /* Style the data display area */
    background: /* complementary color */;
    border: /* your border style */;
    margin: /* your spacing */;
}

/* Add your custom styles here */
```

**Maeneo muhimu ya kuunda:**
- **Vipengele vya fomu**: Sehemu za kuingiza, lebo, na kitufe cha kutuma
- **Maonyesho ya matokeo**: Kontena la data, mtindo wa maandishi, na hali za kupakia
- **Vipengele vya mwingiliano**: Athari za hover, hali za kitufe, na mabadiliko
- **Mpangilio wa jumla**: Nafasi ya kontena, rangi za mandhari, na mpangilio wa kuona

### Sehemu ya 4: Jaribu na Rekebisha

1. **Jenga** kiendelezi chako kwa `npm run build`
2. **Pakia** kiendelezi kilichosasishwa kwenye kivinjari chako
3. **Jaribu** hali zote za kuona (kuingiza fomu, kupakia, kuonyesha matokeo, makosa)
4. **Thibitisha** upatikanaji kwa kutumia zana za watengenezaji wa kivinjari
5. **Rekebisha** mitindo yako kulingana na matumizi halisi

## Changamoto za Ubunifu

### Kiwango cha Msingi
- Sasisha rangi na fonti ili kuunda mandhari inayolingana
- Boresha nafasi na mpangilio katika kiolesura chote
- Ongeza athari za hover za hila kwa vipengele vya mwingiliano

### Kiwango cha Kati
- Buni ikoni au michoro maalum kwa kiendelezi chako
- Tekeleza mabadiliko laini kati ya hali tofauti
- Unda uhuishaji wa kipekee wa kupakia kwa miito ya API

### Kiwango cha Juu
- Buni chaguo nyingi za mandhari (mwanga/giza/utoaji wa juu)
- Tekeleza muundo unaojibika kwa ukubwa tofauti wa dirisha la kivinjari
- Ongeza mwingiliano mdogo unaoboreshwa uzoefu wa mtumiaji

## Miongozo ya Uwasilishaji

Kazi yako iliyokamilika inapaswa kujumuisha:

- **Faili za CSS zilizobadilishwa** na mtindo wako wa kibinafsi
- **Picha za skrini** zinazoonyesha kiendelezi chako katika hali tofauti (fomu, kupakia, matokeo)
- **Maelezo mafupi** (sentensi 2-3) yanayoelezea chaguo zako za muundo na jinsi zinavyoboreshwa uzoefu wa mtumiaji

## Rubric ya Tathmini

| Kigezo | Bora (4) | Wastani (3) | Maendeleo (2) | Mwanzo (1) |
|--------|----------|-------------|---------------|------------|
| **Muundo wa Kuona** | Muundo wa ubunifu, unaolingana unaoboreshwa urahisi wa matumizi na unaakisi kanuni za muundo thabiti | Chaguo nzuri za muundo na mtindo unaolingana na mpangilio wa kuona wazi | Maboresho ya msingi ya muundo na masuala ya usawa | Mabadiliko madogo ya mtindo au muundo usiolingana |
| **Utendaji** | Mitindo yote inafanya kazi kikamilifu katika hali tofauti na mazingira ya kivinjari | Mitindo inafanya kazi vizuri na masuala madogo katika hali za kipekee | Mitindo mingi inafanya kazi na matatizo ya kuonyesha | Masuala makubwa ya mtindo yanayoathiri urahisi wa matumizi |
| **Ubora wa Msimbo** | CSS safi, iliyopangwa vizuri na majina ya darasa yenye maana na vichagua bora | Muundo mzuri wa CSS na matumizi sahihi ya vichagua na mali | CSS inayokubalika na masuala ya mpangilio | Muundo mbaya wa CSS au mtindo mgumu kupita kiasi |
| **Upatikanaji** | Utofauti bora wa rangi, fonti zinazosomeka, na kuzingatia watumiaji wenye ulemavu | Mazoea mazuri ya upatikanaji na maeneo madogo ya kuboreshwa | Mawazo ya msingi ya upatikanaji na masuala kadhaa | Uzingatiaji mdogo wa mahitaji ya upatikanaji |

## Vidokezo vya Mafanikio

> 💡 **Kidokezo cha Muundo**: Anza na mabadiliko madogo na endelea hadi kwenye mtindo wa kuvutia zaidi. Maboresho madogo katika maandishi na nafasi mara nyingi yana athari kubwa kwa ubora unaoonekana.

**Mazoea bora ya kufuata:**
- **Jaribu** kiendelezi chako katika mandhari za kivinjari za mwanga na giza
- **Tumia** vitengo vya jamaa (em, rem) kwa upanuzi bora
- **Dumisha** nafasi thabiti kwa kutumia mali za kawaida za CSS
- **Fikiria** jinsi muundo wako utakavyoonekana kwa watumiaji wenye mahitaji tofauti ya kuona
- **Thibitisha** CSS yako ili kuhakikisha inafuata sintaksia sahihi

> ⚠️ **Kosa la Kawaida**: Usipuuze urahisi wa matumizi kwa ajili ya kuvutia kwa kuona. Kiendelezi chako kinapaswa kuwa kizuri na chenye kazi.

**Kumbuka:**
- **Dumisha** taarifa muhimu zikiwa rahisi kusomeka
- **Hakikisha** vitufe na vipengele vya mwingiliano ni rahisi kubofya
- **Dumisha** maoni ya kuona wazi kwa vitendo vya mtumiaji
- **Jaribu** muundo wako kwa data halisi, si maandishi ya nafasi tu

Kila la heri kuunda kiendelezi cha kivinjari ambacho ni kizuri na chenye kazi!

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya asili inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.