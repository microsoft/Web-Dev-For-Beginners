# CSS Refaktorointitehtävä

## Tavoite

Muuta terrarium-projektisi käyttämään moderneja CSS-asettelutekniikoita! Refaktoroi nykyinen absoluuttinen sijoittelu ja ota käyttöön **Flexbox** tai **CSS Grid**, jotta saat aikaan helpommin ylläpidettävän ja responsiivisen suunnittelun. Tämä tehtävä haastaa sinut soveltamaan moderneja CSS-standardeja samalla säilyttäen terrariumin visuaalisen houkuttelevuuden.

Ymmärrys siitä, milloin ja miten käyttää erilaisia asettelumenetelmiä, on olennainen taito nykyaikaisessa web-kehityksessä. Tämä harjoitus yhdistää perinteiset sijoittelutekniikat nykyaikaisiin CSS-asettelujärjestelmiin.

## Tehtävän ohjeet

### Vaihe 1: Analyysi ja suunnittelu
1. **Tarkista nykyinen terrarium-koodisi** - Tunnista, mitkä elementit käyttävät tällä hetkellä absoluuttista sijoittelua
2. **Valitse asettelumenetelmäsi** - Päätä, sopiiko Flexbox vai CSS Grid paremmin suunnittelutavoitteisiisi
3. **Piirrä uusi asettelurakenteesi** - Suunnittele, miten kontit ja kasvielementit järjestetään

### Vaihe 2: Toteutus
1. **Luo uusi versio** terrarium-projektistasi erilliseen kansioon
2. **Päivitä HTML-rakenne** tukemaan valitsemaasi asettelumenetelmää
3. **Refaktoroi CSS** käyttämään Flexboxia tai CSS Gridia absoluuttisen sijoittelun sijaan
4. **Säilytä visuaalinen johdonmukaisuus** - Varmista, että kasvit ja terrarium-purkki näkyvät samoissa paikoissa
5. **Toteuta responsiivinen toiminta** - Asettelusi tulisi mukautua sulavasti eri näyttökokoihin

### Vaihe 3: Testaus ja dokumentointi
1. **Selaintestaus** - Varmista, että suunnittelusi toimii Chromessa, Firefoxissa, Edgessä ja Safarissa
2. **Responsiivinen testaus** - Tarkista asettelusi mobiili-, tabletti- ja työpöytänäytöillä
3. **Dokumentointi** - Lisää CSS:ään kommentteja, jotka selittävät asetteluratkaisusi
4. **Näyttökuvat** - Tallenna terrariumisi eri selaimissa ja näyttökokoisina

## Teknisiä vaatimuksia

### Asettelun toteutus
- **Valitse YKSI**: Toteuta joko Flexbox TAI CSS Grid (ei molempia samoille elementeille)
- **Responsiivinen suunnittelu**: Käytä suhteellisia yksiköitä (`rem`, `em`, `%`, `vw`, `vh`) kiinteiden pikselien sijaan
- **Saavutettavuus**: Säilytä oikea semanttinen HTML-rakenne ja alt-tekstit
- **Koodin laatu**: Käytä johdonmukaisia nimeämiskäytäntöjä ja järjestä CSS loogisesti

### Modernit CSS-ominaisuudet
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

### Selaintuen vaatimukset
- **Chrome/Edge**: Viimeiset 2 versiota
- **Firefox**: Viimeiset 2 versiota  
- **Safari**: Viimeiset 2 versiota
- **Mobiiliselaimet**: iOS Safari, Chrome Mobile

## Toimitettavat materiaalit

1. **Päivitetty HTML-tiedosto**, jossa on parannettu semanttinen rakenne
2. **Refaktoroitu CSS-tiedosto**, joka käyttää moderneja asettelutekniikoita
3. **Näyttökuvakokoelma**, joka osoittaa selainten yhteensopivuuden:
   - Työpöytänäkymä (1920x1080)
   - Tablettinäkymä (768x1024) 
   - Mobiilinäkymä (375x667)
   - Vähintään 2 eri selainta
4. **README.md-tiedosto**, jossa dokumentoidaan:
   - Valitsemasi asettelutapa (Flexbox vs Grid) ja perustelut
   - Haasteet, joita kohtasit refaktoroinnin aikana
   - Huomioita selainten yhteensopivuudesta
   - Ohjeet koodin suorittamiseen

## Arviointikriteerit

| Kriteeri | Erinomainen (4) | Hyvä (3) | Kehittyvä (2) | Alkuvaiheessa (1) |
|----------|-----------------|----------|---------------|-------------------|
| **Asettelun toteutus** | Mestarinomainen Flexbox/Grid-käyttö edistyneillä ominaisuuksilla; täysin responsiivinen | Oikea toteutus hyvällä responsiivisella toiminnalla | Perustoteutus pienillä responsiivisilla ongelmilla | Epätäydellinen tai virheellinen asettelutoteutus |
| **Koodin laatu** | Siisti, hyvin järjestetty CSS merkityksellisillä kommenteilla ja johdonmukaisilla nimillä | Hyvä järjestys ja joitakin kommentteja | Riittävä järjestys vähäisillä kommenteilla | Huono järjestys; vaikea ymmärtää |
| **Selainten yhteensopivuus** | Täydellinen johdonmukaisuus kaikissa vaadituissa selaimissa näyttökuvien kera | Hyvä yhteensopivuus pienillä eroilla, jotka on dokumentoitu | Joitakin yhteensopivuusongelmia, jotka eivät riko toiminnallisuutta | Merkittäviä yhteensopivuusongelmia tai puuttuva testaus |
| **Responsiivinen suunnittelu** | Erinomainen mobiililähtöinen lähestymistapa sujuvilla taukokohdilla | Hyvä responsiivinen toiminta sopivilla taukokohdilla | Perusresponsiiviset ominaisuudet joillakin asetteluongelmilla | Rajoitettu tai rikkinäinen responsiivinen toiminta |
| **Dokumentointi** | Kattava README, jossa yksityiskohtaiset selitykset ja oivallukset | Hyvä dokumentointi, joka kattaa kaikki vaaditut elementit | Perusdokumentointi vähäisillä selityksillä | Epätäydellinen tai puuttuva dokumentointi |

## Hyödyllisiä resursseja

### Asettelumenetelmäoppaat
- 📖 [Täydellinen opas Flexboxiin](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [Täydellinen opas CSS Gridiin](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - Valitse oikea työkalu](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)

### Selaintestaustyökalut
- 🛠️ [Browser DevTools Responsiivinen tila](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - Ominaisuuksien tuki](https://caniuse.com/)
- 🛠️ [BrowserStack - Selaintestaus](https://www.browserstack.com/)

### Koodin laatutyökalut
- ✅ [CSS Validator](https://jigsaw.w3.org/css-validator/)
- ✅ [HTML Validator](https://validator.w3.org/)
- ✅ [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Lisähaasteet

🌟 **Edistyneet asettelut**: Toteuta sekä Flexbox että Grid eri osissa suunnittelua  
🌟 **Animaatioiden integrointi**: Lisää CSS-siirtymiä tai animaatioita, jotka toimivat uuden asettelusi kanssa  
🌟 **Tumma tila**: Toteuta CSS:n mukautettuihin ominaisuuksiin perustuva teemanvaihtaja  
🌟 **Konttikyselyt**: Käytä moderneja konttikyselytekniikoita komponenttitasoiseen responsiivisuuteen  

> 💡 **Muista**: Tavoitteena ei ole vain saada toimiva lopputulos, vaan ymmärtää, MIKSI valitsemasi asettelumenetelmä on paras ratkaisu juuri tähän suunnittelutehtävään!

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.