<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-23T00:13:52+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "fi"
}
-->
# JavaScriptin perusteet: Taulukot ja silmukat

![JavaScriptin perusteet - Taulukot](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.fi.png)
> Kuvitus: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ennen luentoa - Kysely
[Ennen luentoa - kysely](https://ff-quizzes.netlify.app/web/quiz/13)

Oletko koskaan miettinyt, miten verkkosivustot pitävät kirjaa ostoskorin sisällöstä tai näyttävät ystävälistasi? Tässä kohtaa taulukot ja silmukat astuvat kuvaan. Taulukot ovat kuin digitaalisia säilytysastioita, jotka pitävät sisällään useita tietoja, kun taas silmukat auttavat käsittelemään näitä tietoja tehokkaasti ilman toistuvaa koodia.

Yhdessä nämä kaksi käsitettä muodostavat perustan tietojen käsittelylle ohjelmissasi. Opit siirtymään vaiheittaisesta koodin kirjoittamisesta älykkääseen ja tehokkaaseen koodiin, joka voi käsitellä satoja tai jopa tuhansia kohteita nopeasti.

Tämän oppitunnin lopussa ymmärrät, miten monimutkaisia tietotehtäviä voidaan suorittaa vain muutamalla koodirivillä. Tutkitaanpa näitä olennaisia ohjelmointikäsitteitä.

[![Taulukot](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Taulukot")

[![Silmukat](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Silmukat")

> 🎥 Klikkaa yllä olevia kuvia katsoaksesi videoita taulukoista ja silmukoista.

> Voit käydä tämän oppitunnin läpi [Microsoft Learn -sivustolla](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Taulukot

Ajattele taulukoita digitaalisena arkistokaappina – sen sijaan, että tallentaisit yhden asiakirjan per laatikko, voit järjestää useita toisiinsa liittyviä kohteita yhteen rakenteelliseen säiliöön. Ohjelmoinnissa taulukot mahdollistavat useiden tietojen tallentamisen yhteen järjestettyyn pakettiin.

Olitpa sitten rakentamassa valokuvagalleriaa, hallitsemassa tehtävälistaa tai pitämässä kirjaa pelin huipputuloksista, taulukot tarjoavat perustan tietojen järjestämiselle. Katsotaanpa, miten ne toimivat.

✅ Taulukoita on kaikkialla ympärillämme! Voitko keksiä esimerkin tosielämän taulukosta, kuten aurinkopaneelijärjestelmästä?

### Taulukoiden luominen

Taulukon luominen on todella helppoa – käytä vain hakasulkeita!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**Mitä tässä tapahtuu?**
Olet juuri luonut tyhjän säiliön käyttämällä hakasulkeita `[]`. Ajattele sitä kuin tyhjää kirjahyllyä – se on valmis säilyttämään mitä tahansa kirjoja, jotka haluat sinne järjestää.

Voit myös täyttää taulukon alusta alkaen arvoilla:

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**Huomionarvoisia asioita:**
- Voit tallentaa tekstiä, numeroita tai jopa tosi/epätosi-arvoja samaan taulukkoon
- Erota jokainen kohde pilkulla – helppoa!
- Taulukot ovat täydellisiä toisiinsa liittyvien tietojen säilyttämiseen yhdessä

### Taulukon indeksointi

Tässä on jotain, mikä saattaa aluksi tuntua oudolta: taulukot numeroivat kohteensa alkaen nollasta, eivät yhdestä. Tämä nollapohjainen indeksointi juontaa juurensa tietokoneiden muistinhallinnasta – se on ollut ohjelmointikielien käytäntö jo varhaisista ajoista lähtien. Jokaisella taulukon kohdalla on oma osoitenumeronsa, jota kutsutaan **indeksiksi**.

| Indeksi | Arvo | Kuvaus |
|---------|------|--------|
| 0       | "Suklaa" | Ensimmäinen elementti |
| 1       | "Mansikka" | Toinen elementti |
| 2       | "Vanilja" | Kolmas elementti |
| 3       | "Pistaasi" | Neljäs elementti |
| 4       | "Rocky Road" | Viides elementti |

✅ Yllättääkö sinua, että taulukot alkavat nollasta? Joissakin ohjelmointikielissä indeksit alkavat yhdestä. Tähän liittyy mielenkiintoinen historia, josta voit [lukea lisää Wikipediasta](https://en.wikipedia.org/wiki/Zero-based_numbering).

**Taulukon elementtien käsittely:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**Mitä tässä tapahtuu:**
- **Käytetään** hakasulkeita ja indeksinumeroa elementtien käsittelyyn
- **Palauttaa** arvon, joka on tallennettu kyseiseen taulukon kohtaan
- **Aloittaa** laskemisen nollasta, joten ensimmäinen elementti on indeksissä 0

**Taulukon elementtien muokkaaminen:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**Yllä olevassa koodissa:**
- **Muokataan** elementtiä indeksissä 4 muuttamalla "Rocky Road" -> "Butter Pecan"
- **Lisätään** uusi elementti "Cookie Dough" indeksiin 5
- **Laajennetaan** taulukon pituutta automaattisesti, kun lisätään elementti nykyisten rajojen ulkopuolelle

### Taulukon pituus ja yleiset metodit

Taulukoilla on sisäänrakennettuja ominaisuuksia ja metodeja, jotka helpottavat tietojen käsittelyä.

**Taulukon pituuden selvittäminen:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**Tärkeitä huomioita:**
- **Palauttaa** taulukon elementtien kokonaismäärän
- **Päivittyy** automaattisesti, kun elementtejä lisätään tai poistetaan
- **Tarjoaa** dynaamisen laskurin, joka on hyödyllinen silmukoissa ja tarkistuksissa

**Tärkeitä taulukkometodeja:**

```javascript
const fruits = ["apple", "banana", "orange"];

// Add elements
fruits.push("grape");           // Adds to end: ["apple", "banana", "orange", "grape"]
fruits.unshift("strawberry");   // Adds to beginning: ["strawberry", "apple", "banana", "orange", "grape"]

// Remove elements
const lastFruit = fruits.pop();        // Removes and returns "grape"
const firstFruit = fruits.shift();     // Removes and returns "strawberry"

// Find elements
const index = fruits.indexOf("banana"); // Returns 1 (position of "banana")
const hasApple = fruits.includes("apple"); // Returns true
```

**Näiden metodien ymmärtäminen:**
- **Lisää** elementtejä `push()` (loppuun) ja `unshift()` (alkuun)
- **Poistaa** elementtejä `pop()` (lopusta) ja `shift()` (alusta)
- **Etsii** elementtejä `indexOf()`-metodilla ja tarkistaa olemassaolon `includes()`-metodilla
- **Palauttaa** hyödyllisiä arvoja, kuten poistettuja elementtejä tai sijainti-indeksejä

✅ Kokeile itse! Luo ja muokkaa omaa taulukkoasi selaimen konsolissa.

## Silmukat

Ajattele Charles Dickensin romaaneista tuttua rangaistusta, jossa oppilaiden piti kirjoittaa sama lause toistuvasti liitutaululle. Kuvittele, jos voisit vain käskeä jotakuta "kirjoita tämä lause 100 kertaa" ja se tapahtuisi automaattisesti. Juuri tätä silmukat tekevät koodillesi.

Silmukat ovat kuin väsymätön apulainen, joka voi toistaa tehtäviä virheettömästi. Tarvitsetpa sitten tarkistaa jokaisen ostoskorin tuotteen tai näyttää kaikki valokuvat albumissa, silmukat hoitavat toistuvat tehtävät tehokkaasti.

JavaScript tarjoaa useita erilaisia silmukoita, joista voit valita. Tarkastellaan kutakin ja ymmärretään, milloin niitä kannattaa käyttää.

### For-silmukka

`for`-silmukka on kuin ajastimen asettaminen – tiedät tarkalleen, kuinka monta kertaa haluat jonkin tapahtuvan. Se on erittäin järjestelmällinen ja ennustettava, mikä tekee siitä täydellisen, kun työskentelet taulukoiden kanssa tai haluat laskea asioita.

**For-silmukan rakenne:**

| Osa | Tarkoitus | Esimerkki |
|-----|-----------|-----------|
| **Alustus** | Asettaa aloituspisteen | `let i = 0` |
| **Ehto** | Milloin jatketaan | `i < 10` |
| **Inkrementti** | Miten päivitetään | `i++` |

```javascript
// Counting from 0 to 9
for (let i = 0; i < 10; i++) {
  console.log(`Count: ${i}`);
}

// More practical example: processing scores
const testScores = [85, 92, 78, 96, 88];
for (let i = 0; i < testScores.length; i++) {
  console.log(`Student ${i + 1}: ${testScores[i]}%`);
}
```

**Vaihe vaiheelta, mitä tapahtuu:**
- **Alustaa** laskurin `i` arvoon 0 alussa
- **Tarkistaa** ehdon `i < 10` ennen jokaista iteraatiota
- **Suorittaa** koodilohkon, kun ehto on tosi
- **Kasvattaa** `i`:tä yhdellä jokaisen iteraation jälkeen `i++`-operaattorilla
- **Lopettaa**, kun ehto ei enää täyty (kun `i` saavuttaa 10)

✅ Aja tämä koodi selaimen konsolissa. Mitä tapahtuu, kun teet pieniä muutoksia laskuriin, ehtoon tai iteraatioilmaisuun? Voitko saada sen toimimaan taaksepäin, luoden lähtölaskennan?

### While-silmukka

`while`-silmukka on kuin sanoisit "jatka tätä, kunnes..." – et ehkä tiedä tarkalleen, kuinka monta kertaa se suoritetaan, mutta tiedät, milloin sen pitäisi pysähtyä. Se on täydellinen esimerkiksi silloin, kun pyydät käyttäjältä syötettä, kunnes saat haluamasi, tai etsit tietoa, kunnes löydät etsimäsi.

**While-silmukan ominaisuudet:**
- **Jatkaa** suorittamista niin kauan kuin ehto on tosi
- **Vaatii** laskurimuuttujien manuaalisen hallinnan
- **Tarkistaa** ehdon ennen jokaista iteraatiota
- **Riski** loputtomista silmukoista, jos ehto ei koskaan muutu epätodeksi

```javascript
// Basic counting example
let i = 0;
while (i < 10) {
  console.log(`While count: ${i}`);
  i++; // Don't forget to increment!
}

// More practical example: processing user input
let userInput = "";
let attempts = 0;
const maxAttempts = 3;

while (userInput !== "quit" && attempts < maxAttempts) {
  userInput = prompt(`Enter 'quit' to exit (attempt ${attempts + 1}):`);
  attempts++;
}

if (attempts >= maxAttempts) {
  console.log("Maximum attempts reached!");
}
```

**Näiden esimerkkien ymmärtäminen:**
- **Hallinnoi** laskurimuuttujaa `i` manuaalisesti silmukan sisällä
- **Kasvattaa** laskuria estääkseen loputtomat silmukat
- **Havainnollistaa** käytännön esimerkkiä käyttäjän syötteestä ja yritysrajoituksista
- **Sisältää** turvamekanismeja loputtoman suorituksen estämiseksi

### Modernit silmukkavaihtoehdot

JavaScript tarjoaa moderneja silmukkasynteesejä, jotka voivat tehdä koodistasi luettavampaa ja vähemmän virhealtista.

**For...of-silmukka (ES6+):**

```javascript
const colors = ["red", "green", "blue", "yellow"];

// Modern approach - cleaner and safer
for (const color of colors) {
  console.log(`Color: ${color}`);
}

// Compare with traditional for loop
for (let i = 0; i < colors.length; i++) {
  console.log(`Color: ${colors[i]}`);
}
```

**For...of-silmukan edut:**
- **Poistaa** indeksinhallinnan ja mahdolliset virheet
- **Tarjoaa** suoran pääsyn taulukon elementteihin
- **Parantaa** koodin luettavuutta ja vähentää syntaksin monimutkaisuutta

**forEach-metodi:**

```javascript
const prices = [9.99, 15.50, 22.75, 8.25];

// Using forEach for functional programming style
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price.toFixed(2)}`);
});

// forEach with arrow functions for simple operations
prices.forEach(price => console.log(`Price: $${price}`));
```

**Mitä sinun tulee tietää forEach-metodista:**
- **Suorittaa** funktion jokaiselle taulukon elementille
- **Tarjoaa** sekä elementin arvon että indeksin parametreina
- **Ei voi** keskeyttää ennenaikaisesti (toisin kuin perinteiset silmukat)
- **Palauttaa** undefined (ei luo uutta taulukkoa)

✅ Miksi valitsisit for-silmukan while-silmukan sijaan? 17 000 katsojaa pohti samaa kysymystä StackOverflow'ssa, ja jotkut mielipiteet [voivat olla sinulle mielenkiintoisia](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Silmukat ja taulukot

Taulukoiden ja silmukoiden yhdistäminen luo tehokkaita tietojenkäsittelymahdollisuuksia. Tämä yhdistelmä on olennainen monissa ohjelmointitehtävissä, kuten listojen näyttämisessä tai tilastojen laskemisessa.

**Perinteinen taulukon käsittely:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Classic for loop approach
for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(`Flavor ${i + 1}: ${iceCreamFlavors[i]}`);
}

// Modern for...of approach
for (const flavor of iceCreamFlavors) {
  console.log(`Available flavor: ${flavor}`);
}
```

**Ymmärretäänpä jokainen lähestymistapa:**
- **Käyttää** taulukon pituusominaisuutta silmukan rajojen määrittämiseen
- **Käsittelee** elementtejä indeksin avulla perinteisissä for-silmukoissa
- **Tarjoaa** suoran pääsyn elementteihin for...of-silmukoissa
- **Käsittelee** jokaisen taulukon elementin täsmälleen kerran

**Käytännön tietojenkäsittelyesimerkki:**

```javascript
const studentGrades = [85, 92, 78, 96, 88, 73, 89];
let total = 0;
let highestGrade = studentGrades[0];
let lowestGrade = studentGrades[0];

// Process all grades with a single loop
for (let i = 0; i < studentGrades.length; i++) {
  const grade = studentGrades[i];
  total += grade;
  
  if (grade > highestGrade) {
    highestGrade = grade;
  }
  
  if (grade < lowestGrade) {
    lowestGrade = grade;
  }
}

const average = total / studentGrades.length;
console.log(`Average: ${average.toFixed(1)}`);
console.log(`Highest: ${highestGrade}`);
console.log(`Lowest: ${lowestGrade}`);
```

**Näin tämä koodi toimii:**
- **Alustaa** seurantamuuttujat summalle ja ääripäille
- **Käsittelee** jokaisen arvosanan yhdellä tehokkaalla silmukalla
- **Kertyy** kokonaismäärä keskiarvon laskemista varten
- **Seuraa** korkeimpia ja matalimpia arvoja iteraation aikana
- **Laskee** lopulliset tilastot silmukan päätyttyä

✅ Kokeile silmukoida omaa taulukkoasi selaimen konsolissa.

---

## GitHub Copilot Agent -haaste 🚀

Käytä Agent-tilaa suorittaaksesi seuraava haaste:

**Kuvaus:** Rakenna kattava tietojenkäsittelyfunktio, joka yhdistää taulukot ja silmukat analysoidakseen tietojoukon ja tuottaakseen merkityksellisiä oivalluksia.

**Tehtävänanto:** Luo funktio nimeltä `analyzeGrades`, joka ottaa parametrina taulukon opiskelijoiden arvosanaobjekteja (jokaisella on nimi- ja pistemääräominaisuudet) ja palauttaa objektin, joka sisältää tilastoja, kuten korkein pistemäärä, matalin pistemäärä, keskiarvo, hyväksyttyjen opiskelijoiden määrä (pistemäärä >= 70) ja taulukon opiskelijoiden nimistä, jotka saivat keskiarvoa paremman pistemäärän. Käytä ratkaisussasi vähintään kahta erilaista silmukkatyyppiä.

Lue lisää [agent-tilasta](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) täältä.

## 🚀 Haaste

JavaScript tarjoaa useita moderneja taulukkometodeja, jotka voivat korvata perinteiset silmukat tietyissä tehtävissä. Tutustu [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) ja [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) -metodeihin.

**Haasteesi:** Refaktoroi opiskelijoiden arvosanaesimerkki käyttämällä vähintään kolmea erilaista taulukkometodia. Huomaa, kuinka paljon siistimmäksi ja luettavammaksi koodi muuttuu modernilla JavaScript-syntaksilla.

## Luentojälkeinen kysely
[Luentojälkeinen kysely](https://ff-quizzes.netlify.app/web/quiz/14)

## Kertaus ja itseopiskelu

JavaScriptin taulukoilla on monia hyödyllisiä metodeja, jotka helpottavat tietojen käsittelyä. [Lue lisää näistä metodeista](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) ja kokeile joitakin niistä itse (kuten push, pop, slice ja splice) luomallasi taulukolla.

## Tehtävä

[Silmukoi taulukko](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa tämän käännöksen käytöstä johtuvista väärinkäsityksistä tai virhetulkinnoista.