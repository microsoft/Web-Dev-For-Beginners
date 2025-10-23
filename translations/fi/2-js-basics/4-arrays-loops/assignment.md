<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8abcada0534e0fb3a7556ea3c5a2a8a4",
  "translation_date": "2025-10-23T00:14:21+00:00",
  "source_file": "2-js-basics/4-arrays-loops/assignment.md",
  "language_code": "fi"
}
-->
# Taulukot ja silmukat -tehtävä

## Ohjeet

Tee seuraavat harjoitukset harjoitellaksesi taulukoiden ja silmukoiden käyttöä. Jokainen harjoitus perustuu oppitunnin käsitteisiin ja rohkaisee sinua soveltamaan erilaisia silmukkatyyppejä ja taulukkometodeja.

### Harjoitus 1: Numerokuvion luonti
Luo ohjelma, joka listaa jokaisen 3. numeron välillä 1-20 ja tulostaa sen konsoliin.

**Vaatimukset:**
- Käytä `for`-silmukkaa mukautetulla lisäyksellä
- Näytä numerot käyttäjäystävällisessä muodossa
- Lisää kuvailevia kommentteja, jotka selittävät logiikkasi

**Odotettu tulos:**
```
3, 6, 9, 12, 15, 18
```

> **Vinkki:** Muokkaa for-silmukan iteraatioilmaisua ohittaaksesi numeroita.

### Harjoitus 2: Taulukon analysointi
Luo vähintään 8 eri numeron taulukko ja kirjoita funktioita datan analysointiin.

**Vaatimukset:**
- Luo taulukko nimeltä `numbers`, jossa on vähintään 8 arvoa
- Kirjoita funktio `findMaximum()`, joka palauttaa suurimman numeron
- Kirjoita funktio `findMinimum()`, joka palauttaa pienimmän numeron  
- Kirjoita funktio `calculateSum()`, joka palauttaa kaikkien numeroiden summan
- Testaa jokainen funktio ja näytä tulokset

**Bonushaaste:** Luo funktio, joka löytää taulukon toiseksi suurimman numeron.

### Harjoitus 3: Merkkijonotaulukon käsittely
Luo taulukko suosikkielokuvistasi/kirjoistasi/lauluistasi ja harjoittele erilaisia silmukkatyyppejä.

**Vaatimukset:**
- Luo taulukko, jossa on vähintään 5 merkkijonoarvoa
- Käytä perinteistä `for`-silmukkaa näyttämään kohteet numeroiden kanssa (1. Kohteen nimi)
- Käytä `for...of`-silmukkaa näyttämään kohteet isoilla kirjaimilla
- Käytä `forEach()`-metodia laskeaksesi ja näyttämään kokonaismerkkimäärän

**Esimerkkituloste:**
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

### Harjoitus 4: Datan suodatus (Edistynyt)
Luo ohjelma, joka käsittelee taulukkoa opiskelijoita edustavista olioista.

**Vaatimukset:**
- Luo taulukko, jossa on vähintään 5 opiskelijaoliota, joilla on ominaisuudet: `name`, `age`, `grade`
- Käytä silmukoita löytääksesi opiskelijat, jotka ovat 18-vuotiaita tai vanhempia
- Laske kaikkien opiskelijoiden keskiarvosana
- Luo uusi taulukko, joka sisältää vain opiskelijat, joiden arvosana on yli 85

**Esimerkkirakenne:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Add more students...
];
```

## Koodin testaus

Testaa ohjelmasi seuraavasti:
1. Suorita jokainen harjoitus selaimesi konsolissa
2. Varmista, että tulokset vastaavat odotettuja
3. Testaa eri tietojoukoilla
4. Tarkista, että koodisi käsittelee reunatapaukset (tyhjät taulukot, yksittäiset elementit)

## Palautusohjeet

Sisällytä palautukseesi seuraavat:
- Hyvin kommentoitu JavaScript-koodi jokaisesta harjoituksesta
- Kuvakaappaukset tai tekstimuotoiset tulosteet, jotka näyttävät ohjelmiesi toiminnan
- Lyhyt selitys siitä, minkä tyyppistä silmukkaa käytit kussakin tehtävässä ja miksi

## Arviointikriteerit

| Kriteeri | Erinomainen (3 pistettä) | Riittävä (2 pistettä) | Parannettavaa (1 piste) |
| -------- | ------------------------ | --------------------- | ----------------------- |
| **Toiminnallisuus** | Kaikki harjoitukset tehty oikein, mukaan lukien bonushaasteet | Kaikki vaaditut harjoitukset toimivat oikein | Jotkut harjoitukset ovat keskeneräisiä tai sisältävät virheitä |
| **Koodin laatu** | Selkeä, hyvin organisoitu koodi kuvailevilla muuttujanimillä | Koodi toimii, mutta voisi olla selkeämpää | Koodi on sekavaa tai vaikeasti ymmärrettävää |
| **Kommentit** | Kattavat kommentit, jotka selittävät logiikan ja päätökset | Peruskommentit ovat mukana | Vähän tai ei lainkaan kommentteja |
| **Silmukoiden käyttö** | Osoittaa ymmärrystä eri silmukkatyypeistä ja käyttää niitä tarkoituksenmukaisesti | Käyttää silmukoita oikein, mutta rajoitetusti | Väärä tai tehoton silmukoiden käyttö |
| **Testaus** | Todiste perusteellisesta testauksesta eri skenaarioilla | Perustestaus osoitettu | Vähän todisteita testauksesta |

## Pohdintakysymykset

Harjoitusten suorittamisen jälkeen pohdi:
1. Mikä silmukkatyyppi tuntui luonnollisimmalta käyttää ja miksi?
2. Mitä haasteita kohtasit työskennellessäsi taulukoiden kanssa?
3. Miten nämä taidot voisivat soveltua todellisiin verkkokehitysprojekteihin?
4. Mitä tekisit toisin, jos sinun pitäisi optimoida koodisi suorituskykyä varten?

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Tärkeissä tiedoissa suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.