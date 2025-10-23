<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ffe366b2d1f037b99fbadbe1dc81083d",
  "translation_date": "2025-10-23T00:15:00+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "fi"
}
-->
# Päätöksenteko: Opiskelijoiden arvosanojen käsittely

## Oppimistavoitteet

Tässä tehtävässä harjoittelet tämän oppitunnin päätöksentekokonsepteja rakentamalla ohjelman, joka käsittelee opiskelijoiden arvosanoja eri arvostelujärjestelmistä. Käytät `if...else`-lauseita, vertailuoperaattoreita ja loogisia operaattoreita määrittääksesi, mitkä opiskelijat läpäisevät kurssinsa.

## Haaste

Työskentelet koulussa, joka on äskettäin yhdistynyt toisen oppilaitoksen kanssa. Nyt sinun täytyy käsitellä opiskelijoiden arvosanoja kahdesta täysin erilaisesta arvostelujärjestelmästä ja määrittää, mitkä opiskelijat läpäisevät. Tämä on täydellinen tilaisuus harjoitella ehdollista logiikkaa!

### Arvostelujärjestelmien ymmärtäminen

#### Ensimmäinen arvostelujärjestelmä (Numeraalinen)
- Arvosanat annetaan numeroina välillä 1-5
- **Hyväksytty arvosana**: 3 ja sitä korkeammat (3, 4 tai 5)
- **Hylätty arvosana**: Alle 3 (1 tai 2)

#### Toinen arvostelujärjestelmä (Kirjaimet)
- Arvosanat annetaan kirjaimina: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Hyväksytyt arvosanat**: `A`, `A-`, `B`, `B-`, `C`, `C-` (kaikki listatut arvosanat ovat hyväksyttyjä)
- **Huomio**: Tässä järjestelmässä ei ole hylättyjä arvosanoja, kuten `D` tai `F`

### Tehtäväsi

Annettuna seuraava taulukko `allStudents`, joka edustaa kaikkia opiskelijoita ja heidän arvosanojaan, rakenna uusi taulukko `studentsWhoPass`, joka sisältää kaikki opiskelijat, jotka läpäisevät omien arvostelujärjestelmiensä mukaan.

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

### Vaiheittainen lähestymistapa

1. **Aseta silmukka**, joka käy läpi jokaisen arvosanan `allStudents`-taulukossa
2. **Tarkista arvosanan tyyppi** (onko se numero vai merkkijono?)
3. **Sovella sopivia arvostelujärjestelmän sääntöjä**:
   - Numeroille: tarkista, onko arvosana >= 3
   - Merkkijonoille: tarkista, onko se yksi hyväksytyistä kirjainarvosanoista
4. **Lisää hyväksytyt arvosanat** `studentsWhoPass`-taulukkoon

### Hyödyllisiä kooditekniikoita

Käytä näitä oppitunnilla opittuja JavaScript-konsepteja:

- **typeof-operaattori**: `typeof grade === 'number'` tarkistaaksesi, onko kyseessä numeraalinen arvosana
- **Vertailuoperaattorit**: `>=` numeraalisten arvosanojen vertailuun
- **Loogiset operaattorit**: `||` tarkistaaksesi useita kirjainarvosanaehtoja
- **if...else-lauseet**: käsitelläksesi eri arvostelujärjestelmiä
- **Taulukkometodit**: `.push()` lisätäksesi hyväksytyt arvosanat uuteen taulukkoon

### Odotettu tulos

Kun suoritat ohjelman, `studentsWhoPass`-taulukon tulisi sisältää: `['A', 'B-', 4, 5]`

**Miksi nämä arvosanat läpäisevät:**
- `'A'` ja `'B-'` ovat hyväksyttyjä kirjainarvosanoja (kaikki kirjainarvosanat tässä järjestelmässä ovat hyväksyttyjä)
- `4` ja `5` ovat numeraalisia arvosanoja, jotka ovat >= 3
- `1` ja `2` hylätään, koska ne ovat numeraalisia arvosanoja < 3

## Ratkaisun testaaminen

Testaa koodiasi eri skenaarioilla:

```javascript
// Test with different grade combinations
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Your solution should work with any combination of valid grades
```

## Bonushaasteet

Kun olet suorittanut perustehtävän, kokeile näitä lisähaasteita:

1. **Lisää validointi**: Tarkista virheelliset arvosanat (kuten negatiiviset numerot tai virheelliset kirjaimet)
2. **Laske tilastot**: Laske kuinka monta opiskelijaa läpäisee ja kuinka monta hylätään
3. **Arvosanojen muuntaminen**: Muunna kaikki arvosanat yhdeksi numeraaliseksi järjestelmäksi (A=5, B=4, C=3 jne.)

## Arviointikriteerit

| Kriteeri | Erinomainen (4) | Hyvä (3) | Kehittyvä (2) | Alkuvaiheessa (1) |
|----------|-----------------|----------|---------------|-------------------|
| **Toiminnallisuus** | Ohjelma tunnistaa oikein kaikki hyväksytyt arvosanat molemmista järjestelmistä | Ohjelma toimii pienillä ongelmilla tai reunatapauksilla | Ohjelma toimii osittain, mutta siinä on loogisia virheitä | Ohjelmassa on merkittäviä virheitä tai se ei toimi |
| **Koodin rakenne** | Siisti, hyvin järjestetty koodi, jossa on asianmukainen if...else-logiikka | Hyvä rakenne, jossa on sopivia ehtolauseita | Hyväksyttävä rakenne, jossa on joitakin järjestelyongelmia | Huono rakenne, vaikeasti seurattava logiikka |
| **Konseptien käyttö** | Käyttää tehokkaasti vertailuoperaattoreita, loogisia operaattoreita ja ehtolauseita | Hyvä konseptien käyttö pienillä puutteilla | Joitakin konseptien käyttöä, mutta puuttuu keskeisiä elementtejä | Rajoitettu konseptien käyttö |
| **Ongelmanratkaisu** | Osoittaa selkeää ymmärrystä ongelmasta ja eleganttia ratkaisua | Hyvä ongelmanratkaisulähestymistapa ja vankka logiikka | Riittävä ongelmanratkaisu, mutta jonkin verran epäselvyyttä | Epäselvä lähestymistapa, ei osoita ymmärrystä |

## Palautusohjeet

1. **Testaa koodiasi** perusteellisesti annetuilla esimerkeillä
2. **Lisää kommentteja** selittääksesi logiikkasi, erityisesti ehtolauseiden kohdalla
3. **Varmista, että tulos** vastaa odotettuja tuloksia: `['A', 'B-', 4, 5]`
4. **Huomioi reunatapaukset**, kuten tyhjät taulukot tai odottamattomat tietotyypit

> 💡 **Vinkki**: Aloita yksinkertaisesti! Varmista ensin perustoiminnallisuus, ja lisää sitten monimutkaisempia ominaisuuksia. Muista, että tavoitteena on harjoitella päätöksentekologiikkaa oppitunnilla opituilla työkaluilla.

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.