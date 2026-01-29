# Kazi ya Marekebisho ya CSS

## Lengo

Badilisha mradi wako wa terrarium ili utumie mbinu za kisasa za mpangilio wa CSS! Rekebisha mbinu ya sasa ya kuweka kwa nafasi kamili ili kutekeleza **Flexbox** au **CSS Grid** kwa muundo unaoweza kudumishwa na unaojibika zaidi. Kazi hii inakupa changamoto ya kutumia viwango vya kisasa vya CSS huku ukidumisha mvuto wa kuona wa terrarium yako.

Kuelewa wakati na jinsi ya kutumia mbinu tofauti za mpangilio ni ujuzi muhimu kwa maendeleo ya wavuti ya kisasa. Zoezi hili linaunganisha mbinu za jadi za nafasi na mifumo ya kisasa ya mpangilio wa CSS.

## Maelekezo ya Kazi

### Awamu ya 1: Uchambuzi na Mipango
1. **Kagua msimbo wa terrarium yako ya sasa** - Tambua vipengele vinavyotumia nafasi kamili kwa sasa
2. **Chagua mbinu yako ya mpangilio** - Amua ikiwa Flexbox au CSS Grid inafaa zaidi kwa malengo yako ya muundo
3. **Chora muundo wako mpya wa mpangilio** - Panga jinsi vyombo na vipengele vya mimea vitakavyopangwa

### Awamu ya 2: Utekelezaji
1. **Unda toleo jipya** la mradi wako wa terrarium katika folda tofauti
2. **Sasisha muundo wa HTML** kama inavyohitajika ili kuunga mkono mbinu yako ya mpangilio uliyochagua
3. **Rekebisha CSS** ili kutumia Flexbox au CSS Grid badala ya nafasi kamili
4. **Dumisha uthabiti wa kuona** - Hakikisha mimea yako na chupa ya terrarium zinaonekana katika nafasi zile zile
5. **Tekeleza tabia ya kujibika** - Mpangilio wako unapaswa kubadilika vizuri kwa ukubwa tofauti wa skrini

### Awamu ya 3: Upimaji na Uandishi wa Nyaraka
1. **Upimaji wa kivinjari tofauti** - Hakikisha muundo wako unafanya kazi katika Chrome, Firefox, Edge, na Safari
2. **Upimaji wa kujibika** - Angalia mpangilio wako kwenye skrini za simu, kompyuta kibao, na kompyuta
3. **Uandishi wa nyaraka** - Ongeza maoni kwenye CSS yako kuelezea chaguo zako za mpangilio
4. **Picha za skrini** - Piga picha ya terrarium yako katika vivinjari na ukubwa tofauti wa skrini

## Mahitaji ya Kiufundi

### Utekelezaji wa Mpangilio
- **Chagua MOJA**: Tekeleza Flexbox AU CSS Grid (si zote kwa vipengele sawa)
- **Muundo wa Kujibika**: Tumia vitengo vya jamaa (`rem`, `em`, `%`, `vw`, `vh`) badala ya pikseli za kudumu
- **Ufikiaji**: Dumisha muundo sahihi wa HTML wa kisemantiki na maandishi ya alt
- **Ubora wa Msimbo**: Tumia majina ya kawaida na panga CSS kwa mantiki

### Vipengele vya Kisasa vya CSS vya Kujumuisha
```css
/* Example Flexbox approach */
.terrarium-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.plant-containers {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

/* Example Grid approach */
.terrarium-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  gap: 1rem;
}
```

### Mahitaji ya Msaada wa Kivinjari
- **Chrome/Edge**: Toleo 2 za hivi karibuni
- **Firefox**: Toleo 2 za hivi karibuni  
- **Safari**: Toleo 2 za hivi karibuni
- **Vivinjari vya simu**: iOS Safari, Chrome Mobile

## Vitu vya Kuwasilisha

1. **Faili ya HTML iliyosasishwa** yenye muundo bora wa kisemantiki
2. **Faili ya CSS iliyorekebishwa** ikitumia mbinu za kisasa za mpangilio
3. **Mkusanyiko wa picha za skrini** unaoonyesha utangamano wa kivinjari tofauti:
   - Muonekano wa kompyuta (1920x1080)
   - Muonekano wa kompyuta kibao (768x1024) 
   - Muonekano wa simu (375x667)
   - Angalau vivinjari 2 tofauti
4. **Faili ya README.md** inayoelezea:
   - Chaguo lako la mpangilio (Flexbox vs Grid) na sababu zake
   - Changamoto ulizokutana nazo wakati wa kurekebisha
   - Maelezo ya utangamano wa kivinjari
   - Maelekezo ya kuendesha msimbo wako

## Rubric ya Tathmini

| Kigezo | Bora Zaidi (4) | Wastani (3) | Inayoendelea (2) | Mwanzo (1) |
|----------|---------------|----------------|---------------|---------------|
| **Utekelezaji wa Mpangilio** | Matumizi bora ya Flexbox/Grid na vipengele vya hali ya juu; kujibika kikamilifu | Utekelezaji sahihi na tabia nzuri ya kujibika | Utekelezaji wa msingi na masuala madogo ya kujibika | Utekelezaji usio kamili au usio sahihi wa mpangilio |
| **Ubora wa Msimbo** | CSS safi, iliyopangwa vizuri na maoni yenye maana na majina ya kawaida | Mpangilio mzuri na maoni kadhaa | Mpangilio wa kutosha na maoni machache | Mpangilio mbaya; vigumu kuelewa |
| **Utangamano wa Kivinjari Tofauti** | Uthabiti kamili katika vivinjari vyote vinavyohitajika na picha za skrini | Utangamano mzuri na tofauti ndogo zilizorekodiwa | Masuala ya utangamano ambayo hayavunji utendaji | Matatizo makubwa ya utangamano au upimaji unaokosekana |
| **Muundo wa Kujibika** | Mbinu bora ya kwanza ya simu na sehemu laini za kuvunjika | Tabia nzuri ya kujibika na sehemu zinazofaa za kuvunjika | Vipengele vya msingi vya kujibika na masuala ya mpangilio | Tabia ya kujibika iliyopunguzwa au iliyovunjika |
| **Uandishi wa Nyaraka** | README kamili yenye maelezo ya kina na maarifa | Nyaraka nzuri zinazoshughulikia vipengele vyote vinavyohitajika | Nyaraka za msingi na maelezo machache | Nyaraka zisizo kamili au zinazokosekana |

## Rasilimali za Msaada

### Miongozo ya Mbinu za Mpangilio
- 📖 [Mwongozo Kamili wa Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [Mwongozo Kamili wa CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - Chagua Zana Sahihi](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### Zana za Upimaji wa Kivinjari
- 🛠️ [Njia ya Kujibika ya DevTools ya Kivinjari](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Je, Naweza Kutumia - Msaada wa Kipengele](https://caniuse.com/)
- 🛠️ [BrowserStack - Upimaji wa Kivinjari Tofauti](https://www.browserstack.com/)

### Zana za Ubora wa Msimbo
- ✅ [Kithibitishaji cha CSS](https://jigsaw.w3.org/css-validator/)
- ✅ [Kithibitishaji cha HTML](https://validator.w3.org/)
- ✅ [Kikagua Ulinganifu wa WebAIM](https://webaim.org/resources/contrastchecker/)

## Changamoto za Ziada

🌟 **Mipangilio ya Juu**: Tekeleza Flexbox NA Grid katika sehemu tofauti za muundo wako  
🌟 **Muunganiko wa Uhuishaji**: Ongeza mabadiliko ya CSS au uhuishaji unaofanya kazi na mpangilio wako mpya  
🌟 **Hali ya Giza**: Tekeleza swichi ya mandhari inayotegemea mali maalum za CSS  
🌟 **Maswali ya Kontena**: Tumia mbinu za kisasa za maswali ya kontena kwa kujibika kwa kiwango cha kipengele  

> 💡 **Kumbuka**: Lengo si tu kufanya kazi, bali kuelewa KWA NINI mbinu yako ya mpangilio uliyochagua ni suluhisho bora kwa changamoto hii ya muundo!

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.