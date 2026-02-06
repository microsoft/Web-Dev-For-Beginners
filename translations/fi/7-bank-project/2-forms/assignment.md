# Muotoile pankkisovelluksesi modernilla CSS:llä

## Projektin yleiskatsaus

Muuta toimiva pankkisovelluksesi visuaalisesti houkuttelevaksi ja ammattimaiseksi verkkosovellukseksi käyttämällä moderneja CSS-tekniikoita. Luot yhtenäisen suunnittelujärjestelmän, joka parantaa käyttäjäkokemusta ja noudattaa samalla saavutettavuuden ja responsiivisen suunnittelun periaatteita.

Tämä tehtävä haastaa sinut soveltamaan nykyaikaisia verkkosuunnittelumalleja, toteuttamaan johdonmukaisen visuaalisen identiteetin ja luomaan käyttöliittymän, joka on sekä houkutteleva että helppokäyttöinen.

## Ohjeet

### Vaihe 1: Tyylitiedoston valmistelu

**Luo CSS-perusta:**

1. **Luo** uusi tiedosto nimeltä `styles.css` projektisi juurihakemistoon.
2. **Linkitä** tyylitiedosto `index.html`-tiedostoon:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Aloita** CSS:n nollaamisella ja moderneilla oletuksilla:
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

### Vaihe 2: Suunnittelujärjestelmän vaatimukset

**Toteuta nämä olennaiset suunnitteluelementit:**

#### Väripaletti
- **Ensisijainen väri**: Valitse ammattimainen väri painikkeille ja korostuksille.
- **Toissijainen väri**: Täydentävä väri aksenteille ja toissijaisille toiminnoille.
- **Neutraalit värit**: Harmaat teksteille, reunoille ja taustoille.
- **Onnistuminen/Virhe-värit**: Vihreä onnistumisen tiloille, punainen virheille.

#### Typografia
- **Otsikkohierarkia**: Selkeä ero H1-, H2- ja H3-elementtien välillä.
- **Leipäteksti**: Luettava fonttikoko (vähintään 16px) ja sopiva riviväli.
- **Lomakekenttien otsikot**: Selkeä ja saavutettava tekstityyli.

#### Layout ja välistykset
- **Johdonmukainen välistys**: Käytä välistysasteikkoa (8px, 16px, 24px, 32px).
- **Ruudukkojärjestelmä**: Järjestetty asettelu lomakkeille ja sisältöosioille.
- **Responsiivinen suunnittelu**: Mobiililähtöinen lähestymistapa ja taukopisteet.

### Vaihe 3: Komponenttien tyylittely

**Muotoile nämä tietyt komponentit:**

#### Lomakkeet
- **Syöttökentät**: Ammattimaiset reunat, fokus-tilat ja validointityylit.
- **Painikkeet**: Hover-efektit, poistetut tilat ja latausindikaattorit.
- **Otsikot**: Selkeä sijoittelu ja pakollisten kenttien merkinnät.
- **Virheilmoitukset**: Näkyvä virhetyylittely ja hyödylliset viestit.

#### Navigointi
- **Ylätunniste**: Siisti, brändätty navigointialue.
- **Linkit**: Selkeät hover-tilat ja aktiiviset indikaattorit.
- **Logo/Otsikko**: Erottuva brändielementti.

#### Sisältöalueet
- **Osat**: Selkeä visuaalinen erottelu eri alueiden välillä.
- **Kortit**: Jos käytät korttipohjaisia asetteluja, lisää varjostuksia ja reunoja.
- **Taustat**: Sopiva valkoisen tilan käyttö ja hienovaraiset taustat.

### Vaihe 4: Parannellut ominaisuudet (valinnainen)

**Harkitse näiden edistyneiden ominaisuuksien toteuttamista:**
- **Tumma tila**: Vaihtoehto vaalean ja tumman teeman välillä.
- **Animaatiot**: Hienovaraiset siirtymät ja mikrointeraktiot.
- **Lataustilat**: Visuaalinen palaute lomakkeiden lähetyksen aikana.
- **Responsiiviset kuvat**: Optimoidut kuvat eri näyttökokoja varten.

## Suunnitteluinspiraatio

**Modernin pankkisovelluksen ominaisuudet:**
- **Siisti, minimalistinen muotoilu**, jossa on runsaasti valkoista tilaa.
- **Ammattimaiset värimaailmat** (siniset, vihreät tai tyylikkäät neutraalit).
- **Selkeä visuaalinen hierarkia**, jossa korostetaan toimintapainikkeita.
- **Saavutettava kontrastisuhde**, joka täyttää WCAG-ohjeet.
- **Mobiiliresponsiiviset asettelut**, jotka toimivat kaikilla laitteilla.

## Teknisiä vaatimuksia

### CSS:n organisointi
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

### Saavutettavuusvaatimukset
- **Värikontrasti**: Varmista vähintään 4.5:1-suhde normaalille tekstille.
- **Fokusindikaattorit**: Näkyvät fokus-tilat näppäimistön navigointia varten.
- **Lomakekenttien otsikot**: Oikein yhdistetty syöttökenttiin.
- **Responsiivinen suunnittelu**: Käytettävissä näytöillä, joiden leveys on 320px–1920px.

## Arviointikriteerit

| Kriteeri | Erinomainen (A) | Hyvä (B) | Kehittyvä (C) | Parannettavaa (F) |
|----------|-----------------|----------|---------------|-------------------|
| **Suunnittelujärjestelmä** | Toteuttaa kattavan suunnittelujärjestelmän, jossa on johdonmukaiset värit, typografia ja välistykset | Käyttää johdonmukaista tyyliä, jossa on selkeät suunnittelumallit ja hyvä visuaalinen hierarkia | Perustason tyylittely, jossa on joitakin johdonmukaisuusongelmia tai puuttuvia suunnitteluelementtejä | Vähäinen tyylittely, jossa on epäjohdonmukaisia tai ristiriitaisia suunnitteluratkaisuja |
| **Käyttäjäkokemus** | Luo intuitiivisen, ammattimaisen käyttöliittymän, jossa on erinomainen käytettävyys ja visuaalinen houkuttelevuus | Tarjoaa hyvän käyttäjäkokemuksen, jossa on selkeä navigointi ja luettava sisältö | Perustason käytettävyys, jossa tarvitaan joitakin UX-parannuksia | Huono käytettävyys, vaikea navigoida tai lukea |
| **Tekninen toteutus** | Käyttää moderneja CSS-tekniikoita, järjestettyä koodirakennetta ja noudattaa parhaita käytäntöjä | Toteuttaa CSS:n tehokkaasti, hyvällä organisoinnilla ja sopivilla tekniikoilla | CSS toimii oikein, mutta saattaa puuttua organisointia tai moderneja lähestymistapoja | Huono CSS-toteutus, jossa on teknisiä ongelmia tai yhteensopivuusongelmia |
| **Responsiivinen suunnittelu** | Täysin responsiivinen suunnittelu, joka toimii kauniisti kaikilla laitekokoilla | Hyvä responsiivinen toiminta, jossa on pieniä ongelmia joillakin näytön kokoilla | Perustason responsiivinen toteutus, jossa on joitakin asetteluongelmia | Ei responsiivinen tai merkittäviä ongelmia mobiililaitteilla |
| **Saavutettavuus** | Täyttää WCAG-ohjeet, erinomainen näppäimistön navigointi ja ruudunlukijatuki | Hyvät saavutettavuuskäytännöt, joissa on oikea kontrasti ja fokusindikaattorit | Perustason saavutettavuus, jossa on joitakin puuttuvia elementtejä | Huono saavutettavuus, vaikea käyttää vammaisille käyttäjille |

## Lähetysohjeet

**Sisällytä lähetykseesi:**
- **styles.css**: Täydellinen tyylitiedostosi.
- **Päivitetty HTML**: Kaikki tekemäsi HTML-muutokset.
- **Näyttökuvat**: Kuvia suunnittelustasi työpöydällä ja mobiilissa.
- **README**: Lyhyt kuvaus suunnitteluratkaisuistasi ja väripaletista.

**Lisäpisteitä:**
- **CSS:n mukautetut ominaisuudet** ylläpidettävään teemaan.
- **Edistyneet CSS-ominaisuudet** kuten Grid, Flexbox tai CSS-animaatiot.
- **Suorituskykyhuomiot** kuten optimoitu CSS ja minimaalinen tiedostokoko.
- **Selainten välinen testaus**, joka varmistaa yhteensopivuuden eri selaimilla.

> 💡 **Vinkki**: Aloita mobiilisuunnittelusta ja paranna sitä suuremmille näytöille. Tämä mobiililähtöinen lähestymistapa varmistaa, että sovelluksesi toimii hyvin kaikilla laitteilla ja noudattaa moderneja verkkokehityksen parhaita käytäntöjä.

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Tärkeissä tiedoissa suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.