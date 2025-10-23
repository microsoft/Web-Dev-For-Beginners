<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c32c3377f83ab750c2447c77ab98",
  "translation_date": "2025-10-23T00:14:33+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "fi"
}
-->
# JavaScriptin perusteet: Päätöksenteko

![JavaScriptin perusteet - Päätöksenteko](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.fi.png)

> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

Oletko koskaan miettinyt, miten sovellukset tekevät älykkäitä päätöksiä? Esimerkiksi miten navigointijärjestelmä valitsee nopeimman reitin tai miten termostaatti päättää, milloin lämmitys kytketään päälle? Tämä on ohjelmoinnin päätöksenteon perusajatus.

Aivan kuten Charles Babbagen analyyttinen kone suunniteltiin suorittamaan erilaisia operaatioita ehtojen perusteella, modernit JavaScript-ohjelmat tekevät valintoja vaihtelevien olosuhteiden mukaan. Tämä kyky haarautua ja tehdä päätöksiä muuttaa staattisen koodin reagoiviksi ja älykkäiksi sovelluksiksi.

Tässä oppitunnissa opit toteuttamaan ehdollista logiikkaa ohjelmissasi. Tutustumme ehtoihin, vertailuoperaattoreihin ja loogisiin lausekkeisiin, jotka mahdollistavat tilanteiden arvioinnin ja niihin sopivan reagoinnin.

## Ennakkokysely

[Ennakkokysely](https://ff-quizzes.netlify.app/web/quiz/11)

Päätöksentekokyky ja ohjelman kulun hallinta ovat ohjelmoinnin perusasioita. Tässä osiossa käsitellään, miten JavaScript-ohjelmien suorituspolkua hallitaan Boolean-arvojen ja ehdollisen logiikan avulla.

[![Päätöksenteko](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Päätöksenteko")

> 🎥 Klikkaa yllä olevaa kuvaa katsoaksesi videon päätöksenteosta.

> Voit käydä tämän oppitunnin [Microsoft Learnissa](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Lyhyt kertaus Booleaneista

Ennen kuin sukellamme päätöksentekoon, kerrataan edellisestä oppitunnista Boolean-arvot. Matemaatikko George Boolen mukaan nimettynä nämä arvot edustavat binäärisiä tiloja – joko `true` tai `false`. Ei epäselvyyttä, ei välimuotoa.

Nämä binääriset arvot muodostavat kaiken laskennallisen logiikan perustan. Jokainen ohjelman tekemä päätös palautuu lopulta Boolean-arviointiin.

Boolean-muuttujien luominen on yksinkertaista:

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

Tämä luo kaksi muuttujaa, joilla on selkeät Boolean-arvot.

✅ Booleanit on nimetty englantilaisen matemaatikon, filosofin ja loogikon George Boolen (1815–1864) mukaan.

## Vertailuoperaattorit ja Booleanit

Käytännössä harvoin asetat Boolean-arvoja manuaalisesti. Sen sijaan luot niitä arvioimalla ehtoja: "Onko tämä luku suurempi kuin tuo?" tai "Ovatko nämä arvot yhtä suuret?"

Vertailuoperaattorit mahdollistavat nämä arvioinnit. Ne vertailevat arvoja ja palauttavat Boolean-tuloksia operandien välisen suhteen perusteella.

| Symboli | Kuvaus                                                                                                                                                   | Esimerkki          |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`     | **Pienempi kuin**: Vertaa kahta arvoa ja palauttaa `true`-Boolean-arvon, jos vasemman puolen arvo on pienempi kuin oikea                                 | `5 < 6 // true`    |
| `<=`    | **Pienempi tai yhtä suuri kuin**: Vertaa kahta arvoa ja palauttaa `true`-Boolean-arvon, jos vasemman puolen arvo on pienempi tai yhtä suuri kuin oikea   | `5 <= 6 // true`   |
| `>`     | **Suurempi kuin**: Vertaa kahta arvoa ja palauttaa `true`-Boolean-arvon, jos vasemman puolen arvo on suurempi kuin oikea                                | `5 > 6 // false`   |
| `>=`    | **Suurempi tai yhtä suuri kuin**: Vertaa kahta arvoa ja palauttaa `true`-Boolean-arvon, jos vasemman puolen arvo on suurempi tai yhtä suuri kuin oikea   | `5 >= 6 // false`  |
| `===`   | **Tarkka yhtäsuuruus**: Vertaa kahta arvoa ja palauttaa `true`-Boolean-arvon, jos oikean ja vasemman puolen arvot ovat yhtä suuret JA samaa tietotyyppiä | `5 === 6 // false` |
| `!==`   | **Epäyhtäsuuruus**: Vertaa kahta arvoa ja palauttaa päinvastaisen Boolean-arvon kuin tarkka yhtäsuuruusoperaattori                                       | `5 !== 6 // true`  |

✅ Testaa tietosi kirjoittamalla vertailuja selaimesi konsoliin. Yllättääkö jokin palautettu tieto sinut?

## If-lause

`if`-lause on kuin kysymyksen esittäminen koodissasi. "Jos tämä ehto on tosi, tee tämä asia." Se on luultavasti tärkein työkalu, jota käytät päätöksenteossa JavaScriptissä.

Näin se toimii:

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

Ehto menee sulkeiden sisään, ja jos se on `true`, JavaScript suorittaa koodin aaltosulkeiden sisällä. Jos ehto on `false`, JavaScript ohittaa koko lohkon.

Usein käytät vertailuoperaattoreita luodaksesi näitä ehtoja. Katsotaan käytännön esimerkki:

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

Koska `1000 >= 800` arvioituu `true`:ksi, lohkon sisällä oleva koodi suoritetaan, ja konsoliin tulostuu "Getting a new laptop!"

## If..Else-lause

Mutta entä jos haluat ohjelmasi tekevän jotain muuta, kun ehto on epätosi? Silloin `else` tulee apuun – se on kuin varasuunnitelma.

`else`-lause antaa sinulle tavan sanoa "jos tämä ehto ei ole tosi, tee sen sijaan tämä toinen asia."

```javascript
let currentMoney = 500;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

Nyt, koska `500 >= 800` on `false`, JavaScript ohittaa ensimmäisen lohkon ja suorittaa `else`-lohkon. Konsoliin tulostuu "Can't afford a new laptop, yet!"

✅ Testaa ymmärrystäsi tästä koodista ja seuraavasta koodista suorittamalla se selaimen konsolissa. Muuta currentMoney- ja laptopPrice-muuttujien arvoja muuttaaksesi palautettua `console.log()`-tulosta.

## Switch-lause

Joskus sinun täytyy verrata yhtä arvoa useisiin vaihtoehtoihin. Vaikka voisit ketjuttaa useita `if..else`-lauseita, tämä lähestymistapa voi käydä hankalaksi. `switch`-lause tarjoaa selkeämmän rakenteen useiden erillisten arvojen käsittelyyn.

Konsepti muistuttaa varhaisten puhelinkeskusten mekaanisia kytkentäjärjestelmiä – yksi syöttöarvo määrittää, mitä polkua suoritus seuraa.

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

Näin se on rakennettu:
- JavaScript arvioi lausekkeen kerran
- Se käy läpi jokaisen `case`:n löytääkseen osuman
- Kun osuma löytyy, se suorittaa kyseisen koodilohkon
- `break` kertoo JavaScriptille, että se lopettaa ja poistuu switchistä
- Jos mikään case ei täsmää, se suorittaa `default`-lohkon (jos sellainen on)

```javascript
// Program using switch statement for day of week
let dayNumber = 2;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown day";
    break;
}
console.log(`Today is ${dayName}`);
```

Tässä esimerkissä JavaScript näkee, että `dayNumber` on `2`, löytää vastaavan `case 2`:n, asettaa `dayName`:ksi "Tuesday" ja sitten poistuu switchistä. Tuloksena konsoliin tulostuu "Today is Tuesday".

✅ Testaa ymmärrystäsi tästä koodista ja seuraavasta koodista suorittamalla se selaimen konsolissa. Muuta muuttujan a arvoja muuttaaksesi palautettua `console.log()`-tulosta.

## Loogiset operaattorit ja Booleanit

Monimutkaiset päätökset vaativat usein useiden ehtojen arviointia samanaikaisesti. Aivan kuten Boolean-algebra mahdollistaa loogisten lausekkeiden yhdistämisen matemaatikoille, ohjelmointi tarjoaa loogisia operaattoreita useiden Boolean-ehtojen yhdistämiseen.

Nämä operaattorit mahdollistavat kehittyneen ehdollisen logiikan yhdistämällä yksinkertaisia tosi/epätosi-arviointeja.

| Symboli | Kuvaus                                                                                     | Esimerkki                                                                 |
| ------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `&&`    | **Looginen JA**: Vertaa kahta Boolean-lauseketta. Palauttaa true **vain**, jos molemmat puolet ovat tosi | `(5 > 3) && (5 < 10) // Molemmat puolet ovat tosi. Palauttaa true` |
| `\|\|`  | **Looginen TAI**: Vertaa kahta Boolean-lauseketta. Palauttaa true, jos vähintään toinen puoli on tosi     | `(5 > 10) \|\| (5 < 10) // Toinen puoli on epätosi, toinen tosi. Palauttaa true` |
| `!`     | **Looginen EI**: Palauttaa Boolean-lausekkeen vastakkaisen arvon                             | `!(5 > 10) // 5 ei ole suurempi kuin 10, joten "!" tekee siitä tosi`         |

Nämä operaattorit antavat mahdollisuuden yhdistää ehtoja hyödyllisillä tavoilla:
- JA (`&&`) tarkoittaa, että molempien ehtojen täytyy olla tosi
- TAI (`||`) tarkoittaa, että vähintään yhden ehdon täytyy olla tosi  
- EI (`!`) kääntää tosi epätodeksi (ja päinvastoin)

## Ehdot ja päätökset loogisilla operaattoreilla

Katsotaan, miten nämä loogiset operaattorit toimivat käytännössä realistisemmassa esimerkissä:

```javascript
let currentMoney = 600;
let laptopPrice = 800;
let laptopDiscountPrice = laptopPrice - (laptopPrice * 0.2); // Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

Tässä esimerkissä: laskemme 20 % alennushinnan (640), sitten arvioimme, riittävätkö käytettävissä olevat varat joko täyteen hintaan TAI alennettuun hintaan. Koska 600 täyttää alennushinnan rajan 640, ehto arvioituu todeksi.

### Negaatio-operaattori

Joskus on helpompaa ajatella, milloin jokin ei ole totta. Esimerkiksi sen sijaan, että kysyisit "Onko käyttäjä kirjautunut sisään?", saatat haluta kysyä "Eikö käyttäjä ole kirjautunut sisään?" Huutomerkki (`!`) kääntää logiikan puolestasi.

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

`!`-operaattori on kuin sanoisi "päinvastoin kuin..." – jos jokin on `true`, `!` tekee siitä `false`, ja päinvastoin.

### Ternäärilausekkeet

Yksinkertaisiin ehdollisiin määrittelyihin JavaScript tarjoaa **ternäärisen operaattorin**. Tämä tiivis syntaksi mahdollistaa ehdollisen lausekkeen kirjoittamisen yhdelle riville, mikä on hyödyllistä, kun haluat määrittää yhden kahdesta arvosta ehdon perusteella.

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

Se lukee kuin kysymys: "Onko tämä ehto tosi? Jos kyllä, käytä tätä arvoa. Jos ei, käytä tuota arvoa."

Alla on konkreettisempi esimerkki:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Käytä hetki aikaa tämän koodin lukemiseen muutaman kerran. Ymmärrätkö, miten nämä operaattorit toimivat?

Tämä rivi sanoo: "Onko `firstNumber` suurempi kuin `secondNumber`? Jos kyllä, laita `firstNumber` muuttujaan `biggestNumber`. Jos ei, laita `secondNumber` muuttujaan `biggestNumber`."

Ternäärinen operaattori on vain lyhyempi tapa kirjoittaa perinteinen `if..else`-lause:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

Molemmat lähestymistavat tuottavat samat tulokset. Ternäärinen operaattori tarjoaa tiiviyttä, kun taas perinteinen if-else-rakenne voi olla luettavampi monimutkaisissa ehdoissa.

---

## 🚀 Haaste

Luo ohjelma, joka kirjoitetaan ensin loogisilla operaattoreilla ja sitten uudelleen ternäärisellä lausekkeella. Mikä syntaksi on mielestäsi parempi?

---

## GitHub Copilot Agent -haaste 🚀

Käytä Agent-tilaa suorittaaksesi seuraavan haasteen:

**Kuvaus:** Luo kattava arvosanalaskuri, joka havainnollistaa useita tämän oppitunnin päätöksentekokonsepteja, mukaan lukien if-else-lauseet, switch-lauseet, loogiset operaattorit ja ternääriset lausekkeet.

**Tehtävä:** Kirjoita JavaScript-ohjelma, joka ottaa opiskelijan numeerisen pistemäärän (0-100) ja määrittää hänen arvosanansa seuraavien kriteerien mukaan:
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: Alle 60

Vaatimukset:
1. Käytä if-else-lauseita arvosanan määrittämiseen
2. Käytä loogisia operaattoreita tarkistaaksesi, läpäiseekö opiskelija (arvosana >= 60) JA saako hän kunniamaininnan (arvosana >= 90)
3. Käytä switch-lausetta antaaksesi erityistä palautetta jokaisesta arvosanasta
4. Käytä ternääristä operaattoria määrittääksesi, onko opiskelija oikeutettu seuraavaan kurssiin (arvosana >= 70)
5. Sisällytä syötteen validointi varmistaaksesi, että pistemäärä on välillä 0 ja 100

Testaa ohjelmasi eri pistemäärillä, mukaan lukien rajatapaukset, kuten 59, 60, 89, 90 ja virheelliset syötteet.

Lisätietoja [agent-tilasta](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) löydät täältä.

## Jälkikysely

[Jälkikysely](https://ff-quizzes.netlify.app/web/quiz/12)

## Kertaus ja itseopiskelu

Lue lisää käyttäjän käytettävissä olevista monista operaattoreista [MDN:ssä](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Tutustu Josh Comeaun upeaan [operaattorihakemistoon](https://joshwcomeau.com/operator-lookup/)!

## Tehtävä

[Operaattorit](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.