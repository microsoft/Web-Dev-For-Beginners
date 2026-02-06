# Rakenna näytepeli

## Tehtävän yleiskatsaus

Nyt kun olet hallinnut pelin päättymisehdot ja uudelleenkäynnistystoiminnallisuuden avaruuspelissäsi, on aika soveltaa näitä konsepteja täysin uuteen pelielämykseen. Suunnittelet ja rakennat oman pelin, joka esittelee erilaisia päättymisehtoja ja uudelleenkäynnistysmekanismeja.

Tämä tehtävä haastaa sinut ajattelemaan luovasti pelisuunnittelua samalla kun harjoittelet oppimiasi teknisiä taitoja. Tutkit erilaisia voitto- ja tappioskenaarioita, toteutat pelaajan etenemistä ja luot mukaansatempaavia uudelleenkäynnistyskokemuksia.

## Projektivaatimukset

### Pelin keskeiset ominaisuudet

Pelissäsi tulee olla seuraavat olennaiset elementit:

**Päättymisehtojen monipuolisuus**: Toteuta vähintään kaksi erilaista tapaa, joilla peli voi päättyä:
- **Pistepohjainen voitto**: Pelaaja saavuttaa tavoitepistemäärän tai kerää tiettyjä esineitä
- **Elämäpohjainen tappio**: Pelaaja menettää kaikki käytettävissä olevat elämät tai terveyspisteet
- **Tavoitteen saavuttaminen**: Kaikki viholliset on voitettu, tietyt esineet kerätty tai tavoitteet saavutettu
- **Aikapohjainen**: Peli päättyy tietyn ajan kuluttua tai kun laskuri saavuttaa nollan

**Uudelleenkäynnistystoiminnallisuus**: 
- **Pelin tilan tyhjentäminen**: Poista kaikki aiemmat pelin objektit ja nollaa muuttujat
- **Järjestelmien uudelleenkäynnistys**: Aloita alusta uusilla pelaajan tilastoilla, vihollisilla ja tavoitteilla
- **Käyttäjäystävälliset ohjaimet**: Tarjoa selkeät ohjeet pelin uudelleenkäynnistämiseen

**Palaute pelaajalle**:
- **Voittoviestit**: Juhlista pelaajan saavutuksia positiivisella palautteella
- **Tappioviestit**: Tarjoa kannustavia viestejä, jotka motivoivat pelaamaan uudelleen
- **Etenemisen indikaattorit**: Näytä nykyinen pistemäärä, elämät tai tavoitteen tila

### Pelin ideat ja inspiraatio

Valitse yksi näistä pelikonsepteista tai luo oma:

#### 1. Konsoliseikkailupeli
Luo tekstipohjainen seikkailu, jossa on taistelumekaniikkaa:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Keskeiset toteutettavat ominaisuudet:**
- **Vuoropohjainen taistelu** eri hyökkäysvaihtoehdoilla
- **Terveyspisteet** pelaajalle ja vihollisille
- **Inventaariojärjestelmä** kolikoiden tai esineiden keräämiseen
- **Useita vihollistyyppejä** eri vaikeustasoilla
- **Voittoehto** kun kaikki viholliset on voitettu

#### 2. Keräyspeli
- **Tavoite**: Kerää tiettyjä esineitä välttäen esteitä
- **Päättymisehdot**: Saavuta tavoitekeräysmäärä tai menetä kaikki elämät
- **Eteneminen**: Esineiden kerääminen vaikeutuu pelin edetessä

#### 3. Pulmapeli
- **Tavoite**: Ratkaise yhä vaikeampia pulmia
- **Päättymisehdot**: Suorita kaikki tasot tai käytä kaikki siirrot/aika
- **Uudelleenkäynnistys**: Palauta ensimmäiseen tasoon tyhjentäen edistymisen

#### 4. Puolustuspeli
- **Tavoite**: Suojaa tukikohtasi vihollisaalloilta
- **Päättymisehdot**: Selviydy kaikista aalloista (voitto) tai tukikohta tuhoutuu (tappio)
- **Eteneminen**: Vihollisaallot vaikeutuvat ja lisääntyvät

## Toteutusohjeet

### Aloittaminen

1. **Suunnittele pelisi**:
   - Piirrä pelin peruslogiikka
   - Määrittele päättymisehdot selkeästi
   - Tunnista, mitkä tiedot täytyy nollata uudelleenkäynnistyksessä

2. **Luo projektirakenne**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Luo pelin peruslogiikka**:
   - Alusta pelin tila
   - Käsittele käyttäjän syötteet
   - Päivitä pelin logiikkaa
   - Tarkista päättymisehdot
   - Renderöi nykyinen tila

### Teknisiä vaatimuksia

**Käytä modernia JavaScriptiä**: 
- Käytä `const` ja `let` muuttujien määrittelyyn
- Hyödynnä nuolifunktioita tarpeen mukaan
- Toteuta ES6+ ominaisuuksia, kuten template literalit ja destrukturointi

**Tapahtumapohjainen arkkitehtuuri**:
- Luo tapahtumankäsittelijöitä käyttäjän vuorovaikutuksille
- Toteuta pelin tilan muutokset tapahtumien kautta
- Käytä tapahtumakuuntelijoita uudelleenkäynnistystoiminnallisuudessa

**Selkeät koodikäytännöt**:
- Kirjoita funktioita, joilla on yksi vastuualue
- Käytä kuvaavia muuttuja- ja funktioiden nimiä
- Lisää kommentteja, jotka selittävät pelin logiikkaa ja sääntöjä
- Järjestä koodi loogisiin osioihin

## Palautusvaatimukset

### Toimitettavat materiaalit

1. **Valmiit pelitiedostot**: Kaikki HTML-, CSS- ja JavaScript-tiedostot, jotka tarvitaan pelin suorittamiseen
2. **README.md**: Dokumentaatio, joka selittää:
   - Kuinka pelata peliäsi
   - Mitkä päättymisehdot olet toteuttanut
   - Ohjeet pelin uudelleenkäynnistämiseen
   - Mahdolliset erityisominaisuudet tai -mekaniikat
3. **Koodikommentit**: Selkeät selitykset pelin logiikasta ja algoritmeista

### Testauslista

Ennen palautusta, varmista että pelisi:

- [ ] **Toimii ilman virheitä** selaimen konsolissa
- [ ] **Toteuttaa useita päättymisehtoja** vaatimusten mukaisesti
- [ ] **Käynnistyy uudelleen oikein** puhtaalla tilan nollauksella
- [ ] **Tarjoaa selkeää palautetta** pelaajille pelin tilasta
- [ ] **Käyttää modernia JavaScriptiä** ja parhaita käytäntöjä
- [ ] **Sisältää kattavan dokumentaation** README.md-tiedostossa

## Arviointikriteerit

| Kriteeri | Erinomainen (4) | Hyvä (3) | Kehittyvä (2) | Alkuvaiheessa (1) |
|----------|-----------------|----------|---------------|-------------------|
| **Pelin toiminnallisuus** | Täydellinen peli, jossa on useita päättymisehtoja, sujuva uudelleenkäynnistys ja hiottu pelikokemus | Täysi peli, jossa on peruspäättymisehdot ja toimiva uudelleenkäynnistysmekanismi | Osittainen peli, jossa on joitakin päättymisehtoja, uudelleenkäynnistys voi sisältää pieniä ongelmia | Keskeneräinen peli, jossa on rajoitettu toiminnallisuus ja merkittäviä virheitä |
| **Koodin laatu** | Siisti, hyvin järjestetty koodi, joka käyttää modernia JavaScriptiä, kattavia kommentteja ja erinomaista rakennetta | Hyvä koodin organisointi modernilla syntaksilla, riittävät kommentit ja selkeä rakenne | Perustason koodin organisointi, joitakin moderneja käytäntöjä, vähäiset kommentit | Huono koodin organisointi, vanhentunut syntaksi, puutteelliset kommentit ja rakenne |
| **Käyttäjäkokemus** | Intuitiivinen pelikokemus selkeillä ohjeilla, erinomaisella palautteella ja mukaansatempaavalla päättymis-/uudelleenkäynnistyskokemuksella | Hyvä pelikokemus riittävillä ohjeilla ja palautteella, toimiva päättymis-/uudelleenkäynnistys | Perustason pelikokemus vähäisillä ohjeilla, rajoitettu palaute pelin tilasta | Sekava pelikokemus epäselvillä ohjeilla ja heikolla käyttäjäpalautteella |
| **Tekninen toteutus** | Osoittaa pelikehityksen konseptien, tapahtumien käsittelyn ja tilanhallinnan hallintaa | Osoittaa vankkaa ymmärrystä pelikonsepteista ja hyvää toteutusta | Perustason ymmärrys ja hyväksyttävä toteutus | Rajoitettu ymmärrys ja heikko toteutus |
| **Dokumentaatio** | Kattava README, jossa on selkeät ohjeet, hyvin dokumentoitu koodi ja perusteellinen testausnäyttö | Hyvä dokumentaatio selkeillä ohjeilla ja riittävillä koodikommenteilla | Perustason dokumentaatio vähäisillä ohjeilla | Huono tai puuttuva dokumentaatio |

### Arviointiasteikko
- **Erinomainen (16-20 pistettä)**: Ylittää odotukset luovilla ominaisuuksilla ja hiotulla toteutuksella
- **Hyvä (12-15 pistettä)**: Täyttää kaikki vaatimukset ja toteutus on hyvä
- **Kehittyvä (8-11 pistettä)**: Täyttää suurimman osan vaatimuksista, mutta sisältää pieniä ongelmia
- **Alkuvaiheessa (4-7 pistettä)**: Täyttää joitakin vaatimuksia, mutta vaatii merkittävää parannusta

## Lisäoppimisresurssit

- [MDN:n pelikehitysopas](https://developer.mozilla.org/en-US/docs/Games)
- [JavaScript-pelikehityksen opetusohjelmat](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Canvas API -dokumentaatio](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Pelisuunnittelun periaatteet](https://www.gamasutra.com/blogs/)

> 💡 **Vinkki**: Aloita yksinkertaisesti ja lisää ominaisuuksia vähitellen. Hyvin hiottu yksinkertainen peli on parempi kuin monimutkainen peli, jossa on virheitä!

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.