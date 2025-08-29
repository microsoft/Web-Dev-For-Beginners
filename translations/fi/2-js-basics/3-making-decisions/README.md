<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f7009631b73556168ca435120a231c98",
  "translation_date": "2025-08-29T00:43:11+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "fi"
}
-->
# JavaScriptin perusteet: Päätöksenteko

![JavaScript Basics - Making decisions](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.fi.png)

> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ennakkokysely

[Ennakkokysely](https://ff-quizzes.netlify.app/web/quiz/11)

Päätöksenteko ja koodin suoritusjärjestyksen hallinta tekevät koodistasi uudelleenkäytettävää ja kestävää. Tässä osiossa käsitellään JavaScriptin datavirran hallinnan syntaksia ja sen merkitystä Boolean-datatyyppien kanssa.

[![Päätöksenteko](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Making Decisions")

> 🎥 Klikkaa yllä olevaa kuvaa katsellaksesi videon päätöksenteosta.

> Voit käydä tämän oppitunnin [Microsoft Learnissa](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Lyhyt kertaus Booleaneista

Boolean-arvot voivat olla vain kaksi: `true` tai `false`. Booleanit auttavat päättämään, mitkä koodirivit suoritetaan, kun tietyt ehdot täyttyvät.

Aseta Boolean-arvo `true` tai `false` seuraavasti:

`let myTrueBool = true`  
`let myFalseBool = false`

✅ Booleanit on nimetty englantilaisen matemaatikon, filosofin ja logiikan tutkijan George Boolen (1815–1864) mukaan.

## Vertailuoperaattorit ja Booleanit

Operaattoreita käytetään ehtojen arvioimiseen tekemällä vertailuja, jotka tuottavat Boolean-arvon. Alla on lista usein käytetyistä operaattoreista.

| Symboli | Kuvaus                                                                                                                                                       | Esimerkki          |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `<`     | **Pienempi kuin**: Vertaa kahta arvoa ja palauttaa `true` Boolean-datatyyppi, jos vasemman puolen arvo on pienempi kuin oikea                                | `5 < 6 // true`    |
| `<=`    | **Pienempi tai yhtä suuri kuin**: Vertaa kahta arvoa ja palauttaa `true` Boolean-datatyyppi, jos vasemman puolen arvo on pienempi tai yhtä suuri kuin oikea  | `5 <= 6 // true`   |
| `>`     | **Suurempi kuin**: Vertaa kahta arvoa ja palauttaa `true` Boolean-datatyyppi, jos vasemman puolen arvo on suurempi kuin oikea                               | `5 > 6 // false`   |
| `>=`    | **Suurempi tai yhtä suuri kuin**: Vertaa kahta arvoa ja palauttaa `true` Boolean-datatyyppi, jos vasemman puolen arvo on suurempi tai yhtä suuri kuin oikea | `5 >= 6 // false`  |
| `===`   | **Tarkka yhtäsuuruus**: Vertaa kahta arvoa ja palauttaa `true` Boolean-datatyyppi, jos oikean ja vasemman puolen arvot ovat yhtäsuuret JA samaa datatyyppiä | `5 === 6 // false` |
| `!==`   | **Epäyhtäsuuruus**: Vertaa kahta arvoa ja palauttaa Boolean-arvon, joka on päinvastainen tarkalle yhtäsuuruusoperaattorille                                 | `5 !== 6 // true`  |

✅ Testaa tietosi kirjoittamalla vertailuja selaimesi konsoliin. Yllättääkö jokin palautettu data sinut?

## If-lause

If-lause suorittaa koodin lohkojensa sisällä, jos ehto on tosi.

```javascript
if (condition) {
  //Condition is true. Code in this block will run.
}
```

Loogisia operaattoreita käytetään usein ehtojen muodostamiseen.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

## If..Else-lause

`else`-lause suorittaa koodin lohkojensa sisällä, kun ehto on epätosi. Se on valinnainen `if`-lauseen kanssa.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

✅ Testaa ymmärrystäsi tästä koodista ja seuraavasta koodista suorittamalla se selaimen konsolissa. Muuta currentMoney- ja laptopPrice-muuttujien arvoja muuttaaksesi palautettua `console.log()`-tulosta.

## Switch-lause

`switch`-lausetta käytetään suorittamaan erilaisia toimintoja eri ehtojen perusteella. Käytä `switch`-lausetta valitaksesi yksi monista suoritettavista koodilohkoista.

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

```javascript
// program using switch statement
let a = 2;

switch (a) {
  case 1:
    a = "one";
    break;
  case 2:
    a = "two";
    break;
  default:
    a = "not found";
    break;
}
console.log(`The value is ${a}`);
```

✅ Testaa ymmärrystäsi tästä koodista ja seuraavasta koodista suorittamalla se selaimen konsolissa. Muuta muuttujan a arvoja muuttaaksesi palautettua `console.log()`-tulosta.

## Loogiset operaattorit ja Booleanit

Päätökset saattavat vaatia useamman kuin yhden vertailun, ja ne voidaan yhdistää loogisilla operaattoreilla tuottamaan Boolean-arvo.

| Symboli | Kuvaus                                                                                     | Esimerkki                                                                 |
| ------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| `&&`    | **Looginen JA**: Vertaa kahta Boolean-lauseketta. Palauttaa true **vain**, jos molemmat puolet ovat tosi | `(5 > 6) && (5 < 6 ) //Toinen puoli on epätosi, toinen tosi. Palauttaa false` |
| `\|\|`  | **Looginen TAI**: Vertaa kahta Boolean-lauseketta. Palauttaa true, jos vähintään yksi puoli on tosi     | `(5 > 6) \|\| (5 < 6) //Toinen puoli on epätosi, toinen tosi. Palauttaa true` |
| `!`     | **Looginen EI**: Palauttaa Boolean-lausekkeen vastakkaisen arvon                             | `!(5 > 6) // 5 ei ole suurempi kuin 6, mutta "!" palauttaa true`         |

## Ehdot ja päätökset loogisilla operaattoreilla

Loogisia operaattoreita voidaan käyttää ehtojen muodostamiseen if..else-lauseissa.

```javascript
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - laptopPrice * 0.2; //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is true. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

### Negaatio-operaattori

Olet tähän mennessä nähnyt, kuinka voit käyttää `if...else`-lausetta luodaksesi ehdollista logiikkaa. Kaiken, mikä menee `if`-lauseeseen, täytyy arvioitua todeksi tai epätodeksi. Käyttämällä `!`-operaattoria voit _kieltää_ lausekkeen. Se näyttäisi tältä:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### Ternäärilausekkeet

`if...else` ei ole ainoa tapa ilmaista päätöksentekologiikkaa. Voit myös käyttää niin sanottua ternäärioperaattoria. Sen syntaksi näyttää tältä:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

Alla on konkreettisempi esimerkki:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Käytä hetki aikaa lukeaksesi tämä koodi muutaman kerran. Ymmärrätkö, miten nämä operaattorit toimivat?

Yllä oleva koodi sanoo:

- jos `firstNumber` on suurempi kuin `secondNumber`
- silloin määritä `firstNumber` muuttujalle `biggestNumber`
- muuten määritä `secondNumber`.

Ternäärilauseke on vain tiivis tapa kirjoittaa alla oleva koodi:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 Haaste

Luo ohjelma, joka kirjoitetaan ensin loogisilla operaattoreilla ja sitten uudelleen ternäärilausekkeella. Mikä syntaksi on mielestäsi parempi?

---

## Jälkikysely

[Jälkikysely](https://ff-quizzes.netlify.app/web/quiz/12)

## Kertaus ja itseopiskelu

Lue lisää käyttäjän käytettävissä olevista operaattoreista [MDN:ssä](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Tutustu Josh Comeaun upeaan [operaattorihakemistoon](https://joshwcomeau.com/operator-lookup/)!

## Tehtävä

[Operaattorit](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa tämän käännöksen käytöstä johtuvista väärinkäsityksistä tai virhetulkinnoista.