<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2025-10-24T19:37:46+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "sw"
}
-->
# Pamba App Yako ya Benki kwa CSS ya Kisasa

## Muhtasari wa Mradi

Badilisha programu yako ya benki inayofanya kazi kuwa programu ya wavuti yenye kuvutia, yenye muonekano wa kitaalamu kwa kutumia mbinu za kisasa za CSS. Utaunda mfumo wa muundo unaoimarisha uzoefu wa mtumiaji huku ukizingatia kanuni za ufikivu na muundo unaojibika.

Kazi hii inakuhamasisha kutumia mifumo ya kisasa ya muundo wa wavuti, kutekeleza utambulisho wa kuona unaoendelea, na kuunda kiolesura ambacho watumiaji watakiona cha kuvutia na rahisi kutumia.

## Maelekezo

### Hatua ya 1: Sanidi Faili ya CSS Yako

**Unda msingi wa CSS yako:**

1. **Unda** faili mpya inayoitwa `styles.css` kwenye mzizi wa mradi wako
2. **Unganisha** stylesheet kwenye faili yako ya `index.html`:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Anza** na upya wa CSS na chaguo-msingi za kisasa:
   ```css
   /* Modern CSS reset and base styles */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     line-height: 1.6;
     color: #333;
   }
   ```

### Hatua ya 2: Mahitaji ya Mfumo wa Muundo

**Tekeleza vipengele muhimu vya muundo:**

#### Rangi
- **Rangi ya msingi**: Chagua rangi ya kitaalamu kwa vitufe na vivutio
- **Rangi ya pili**: Rangi inayosaidia kwa vivutio na vitendo vya pili
- **Rangi za neutral**: Kijivu kwa maandishi, mipaka, na mandharinyuma
- **Rangi za mafanikio/kosa**: Kijani kwa hali za mafanikio, nyekundu kwa makosa

#### Tipografia
- **Uongozi wa vichwa**: Tofauti wazi kati ya vipengele vya H1, H2, na H3
- **Maandishi ya mwili**: Ukubwa wa fonti inayosomeka (angalau 16px) na urefu wa mstari unaofaa
- **Lebo za fomu**: Muundo wa maandishi wazi na unaofikika

#### Mpangilio na Nafasi
- **Nafasi thabiti**: Tumia kiwango cha nafasi (8px, 16px, 24px, 32px)
- **Mfumo wa gridi**: Mpangilio uliopangwa kwa fomu na sehemu za maudhui
- **Muundo unaojibika**: Mbinu ya kwanza ya simu na sehemu za kuvunjika

### Hatua ya 3: Muundo wa Vipengele

**Pamba vipengele hivi maalum:**

#### Fomu
- **Sehemu za kuingiza**: Mipaka ya kitaalamu, hali za kuzingatia, na muundo wa uthibitishaji
- **Vitufe**: Athari za hover, hali za kuzimwa, na viashiria vya kupakia
- **Lebo**: Uwekaji wazi na viashiria vya uwanja unaohitajika
- **Ujumbe wa makosa**: Muundo wa makosa unaoonekana na ujumbe wa msaada

#### Uabiri
- **Kichwa**: Eneo la uabiri safi, lenye chapa
- **Viungo**: Hali za hover wazi na viashiria vya hali ya kazi
- **Nembo/Kichwa**: Kipengele cha chapa kinachotambulika

#### Maeneo ya Maudhui
- **Sehemu**: Mgawanyo wa kuona wazi kati ya maeneo tofauti
- **Kadi**: Ikiwa unatumia mpangilio wa kadi, jumuisha vivuli na mipaka
- **Mandharinyuma**: Matumizi yanayofaa ya nafasi nyeupe na mandharinyuma laini

### Hatua ya 4: Vipengele Vilivyoboreshwa (Hiari)

**Fikiria kutekeleza vipengele hivi vya hali ya juu:**
- **Hali ya giza**: Kubadilisha kati ya mandhari ya mwanga na giza
- **Miondoko**: Mabadiliko laini na mwingiliano mdogo
- **Hali za kupakia**: Maoni ya kuona wakati wa kuwasilisha fomu
- **Picha zinazojibika**: Picha zilizoboreshwa kwa ukubwa tofauti wa skrini

## Msukumo wa Muundo

**Tabia za kisasa za programu ya benki:**
- **Muundo safi, wa chini** na nafasi nyingi nyeupe
- **Mifumo ya rangi ya kitaalamu** (bluu, kijani, au neutral za kifahari)
- **Uongozi wa kuona wazi** na vitufe vya hatua vinavyoonekana
- **Uwiano wa utofauti unaofikika** unaokidhi miongozo ya WCAG
- **Mpangilio unaojibika kwa simu** unaofanya kazi kwenye vifaa vyote

## Mahitaji ya Kiufundi

### Mpangilio wa CSS
```css
/* 1. CSS Custom Properties (Variables) */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* Add more variables */
}

/* 2. Base Styles */
/* Reset, typography, general elements */

/* 3. Layout */
/* Grid, flexbox, positioning */

/* 4. Components */
/* Forms, buttons, cards */

/* 5. Utilities */
/* Helper classes, responsive utilities */

/* 6. Media Queries */
/* Responsive breakpoints */
```

### Mahitaji ya Ufikiaji
- **Uwiano wa utofauti wa rangi**: Hakikisha angalau uwiano wa 4.5:1 kwa maandishi ya kawaida
- **Viashiria vya kuzingatia**: Hali za kuzingatia zinazoonekana kwa uabiri wa kibodi
- **Lebo za fomu**: Zimehusishwa ipasavyo na sehemu za kuingiza
- **Muundo unaojibika**: Unaotumika kwenye skrini kutoka 320px hadi 1920px upana

## Rubric ya Tathmini

| Kigezo | Bora (A) | Wastani (B) | Maendeleo (C) | Inahitaji Kuboresha (F) |
|--------|----------|-------------|---------------|-------------------------|
| **Mfumo wa Muundo** | Hutekeleza mfumo wa muundo wa kina na rangi thabiti, tipografia, na nafasi kote | Hutumia muundo thabiti na mifumo ya muundo wazi na uongozi mzuri wa kuona | Muundo wa msingi umetumika na masuala ya uthabiti au vipengele vya muundo vinavyokosekana | Muundo mdogo na chaguo za muundo zisizo thabiti au zinazokinzana |
| **Uzoefu wa Mtumiaji** | Huunda kiolesura cha kitaalamu, chenye mvuto na kinachotumika vizuri | Hutoa uzoefu mzuri wa mtumiaji na uabiri wazi na maudhui yanayosomeka | Uzoefu wa msingi wa mtumiaji na maboresho yanayohitajika | Uzoefu mbaya wa mtumiaji, vigumu kuabiri au kusoma |
| **Utekelezaji wa Kiufundi** | Hutumia mbinu za kisasa za CSS, muundo wa msimbo uliopangwa, na kufuata mazoea bora | Hutekeleza CSS kwa ufanisi na muundo mzuri na mbinu zinazofaa | CSS inafanya kazi vizuri lakini inaweza kukosa mpangilio au mbinu za kisasa | Utekelezaji mbaya wa CSS na masuala ya kiufundi au matatizo ya utangamano wa kivinjari |
| **Muundo Unaojibika** | Muundo unaojibika kikamilifu unaofanya kazi vizuri kwenye ukubwa wote wa vifaa | Tabia nzuri ya kujibika na masuala madogo kwenye baadhi ya ukubwa wa skrini | Utekelezaji wa msingi wa kujibika na masuala ya mpangilio | Sio unaojibika au matatizo makubwa kwenye vifaa vya simu |
| **Ufikiaji** | Hukutana na miongozo ya WCAG na uabiri bora wa kibodi na msaada wa wasomaji wa skrini | Mazoea mazuri ya ufikiaji na utofauti sahihi na viashiria vya kuzingatia | Mazingatio ya msingi ya ufikiaji na vipengele vinavyokosekana | Ufikiaji mbaya, vigumu kwa watumiaji wenye ulemavu |

## Miongozo ya Uwasilishaji

**Jumuisha katika uwasilishaji wako:**
- **styles.css**: Stylesheet yako kamili
- **HTML iliyosasishwa**: Marekebisho yoyote ya HTML uliyofanya
- **Picha za skrini**: Picha zinazoonyesha muundo wako kwenye desktop na simu
- **README**: Maelezo mafupi ya chaguo zako za muundo na rangi

**Pointi za ziada kwa:**
- **Sifa za kawaida za CSS** kwa mandhari inayoweza kudumishwa
- **Vipengele vya hali ya juu vya CSS** kama Grid, Flexbox, au miondoko ya CSS
- **Mazingatio ya utendaji** kama CSS iliyoboreshwa na ukubwa mdogo wa faili
- **Upimaji wa kivinjari tofauti** kuhakikisha utangamano kwenye vivinjari tofauti

> 💡 **Kidokezo cha Kitaalamu**: Anza na muundo wa simu kwanza, kisha boresha kwa skrini kubwa. Mbinu hii ya kwanza ya simu inahakikisha programu yako inafanya kazi vizuri kwenye vifaa vyote na inafuata mazoea bora ya maendeleo ya wavuti ya kisasa.

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya asili inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.