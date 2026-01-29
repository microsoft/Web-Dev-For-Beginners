# Hauskaa funktioiden parissa

## Ohjeet

Tässä tehtävässä harjoittelet erilaisten funktioiden luomista vahvistaaksesi JavaScript-funktioihin, parametreihin, oletusarvoihin ja palautuslausekkeisiin liittyviä oppejasi.

Luo JavaScript-tiedosto nimeltä `functions-practice.js` ja toteuta seuraavat funktiot:

### Osa 1: Perusfunktiot
1. **Luo funktio nimeltä `sayHello`**, joka ei ota mitään parametreja ja tulostaa konsoliin "Hello!".

2. **Luo funktio nimeltä `introduceYourself`**, joka ottaa `name`-parametrin ja tulostaa viestin, kuten "Hei, nimeni on [name]" konsoliin.

### Osa 2: Funktiot oletusparametreilla
3. **Luo funktio nimeltä `greetPerson`**, joka ottaa kaksi parametria: `name` (pakollinen) ja `greeting` (valinnainen, oletusarvo "Hello"). Funktion tulee tulostaa viesti, kuten "[greeting], [name]!" konsoliin.

### Osa 3: Funktiot, jotka palauttavat arvoja
4. **Luo funktio nimeltä `addNumbers`**, joka ottaa kaksi parametria (`num1` ja `num2`) ja palauttaa niiden summan.

5. **Luo funktio nimeltä `createFullName`**, joka ottaa `firstName`- ja `lastName`-parametrit ja palauttaa koko nimen yhtenä merkkijonona.

### Osa 4: Yhdistä kaikki
6. **Luo funktio nimeltä `calculateTip`**, joka ottaa kaksi parametria: `billAmount` (pakollinen) ja `tipPercentage` (valinnainen, oletusarvo 15). Funktion tulee laskea ja palauttaa tippi.

### Osa 5: Testaa funktioitasi
Lisää funktiokutsuja testataksesi kutakin funktiota ja näytä tulokset käyttämällä `console.log()`.

**Esimerkki testikutsuista:**
```javascript
// Test your functions here
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## Arviointikriteerit

| Kriteeri | Erinomainen | Riittävä | Parannettavaa |
| -------- | ----------- | -------- | ------------- |
| **Funktion luominen** | Kaikki 6 funktiota on toteutettu oikein, ja niissä on oikea syntaksi ja nimeämiskäytännöt | 4-5 funktiota on toteutettu oikein, mutta niissä voi olla pieniä syntaksivirheitä | 3 tai vähemmän funktioita toteutettu tai merkittäviä syntaksivirheitä |
| **Parametrit ja oletusarvot** | Pakollisia parametreja, valinnaisia parametreja ja oletusarvoja käytetään oikein ohjeiden mukaisesti | Parametreja käytetään oikein, mutta oletusarvoissa voi olla ongelmia | Parametrien toteutus on virheellinen tai puutteellinen |
| **Palautusarvot** | Funktiot, joiden pitäisi palauttaa arvoja, tekevät sen oikein, ja funktiot, joiden ei pitäisi palauttaa arvoja, suorittavat vain toimintoja | Suurin osa palautusarvoista on oikein, mutta pieniä ongelmia esiintyy | Merkittäviä ongelmia palautuslausekkeissa |
| **Koodin laatu** | Selkeästi järjestetty koodi, merkitykselliset muuttujanimet ja asianmukainen sisennys | Koodi toimii, mutta voisi olla siistimpää tai paremmin järjestettyä | Koodi on vaikeasti luettavaa tai huonosti jäsenneltyä |
| **Testaus** | Kaikki funktiot on testattu asianmukaisilla funktiokutsuilla, ja tulokset näytetään selkeästi | Suurin osa funktioista on testattu riittävästi | Funktioiden testaus on rajallista tai virheellistä |

## Bonushaasteet (valinnainen)

Jos haluat haastaa itseäsi lisää:

1. **Luo nuolifunktioversio** jostakin funktiostasi
2. **Luo funktio, joka ottaa toisen funktion parametrina** (kuten oppitunnin `setTimeout`-esimerkit)
3. **Lisää syötteen validointi**, jotta funktiosi käsittelevät virheelliset syötteet sujuvasti

---

> 💡 **Vinkki**: Muista avata selaimesi kehittäjäkonsoli (F12), jotta näet `console.log()`-lauseiden tulostamat tiedot!

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Tärkeissä tiedoissa suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.