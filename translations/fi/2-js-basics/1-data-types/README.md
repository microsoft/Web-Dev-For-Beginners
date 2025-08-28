<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fc6aef8ecfdd5b0ad2afa6e6ba52bfde",
  "translation_date": "2025-08-27T20:17:21+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "fi"
}
-->
# JavaScriptin perusteet: Tietotyypit

![JavaScript Basics - Data types](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.fi.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ennakkokysely
[Ennakkokysely](https://ff-quizzes.netlify.app/web/quiz/7)

Tässä oppitunnissa käsitellään JavaScriptin perusteita, kieltä, joka tuo verkkosivuille vuorovaikutteisuutta.

> Voit käydä tämän oppitunnin läpi [Microsoft Learnissa](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Muuttujat](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Muuttujat JavaScriptissä")

[![Tietotyypit JavaScriptissä](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Tietotyypit JavaScriptissä")

> 🎥 Klikkaa yllä olevia kuvia katsellaksesi videoita muuttujista ja tietotyypeistä

Aloitetaan muuttujista ja niihin tallennettavista tietotyypeistä!

## Muuttujat

Muuttujat tallentavat arvoja, joita voidaan käyttää ja muuttaa koodin aikana.

Muuttujan luominen ja **määrittely** tapahtuu seuraavalla syntaksilla **[avainsana] [nimi]**. Se koostuu kahdesta osasta:

- **Avainsana**. Avainsanoja voivat olla `let` tai `var`.  

✅ Avainsana `let` esiteltiin ES6:ssa ja se antaa muuttujalle niin sanotun _lohkoalueen_ (block scope). On suositeltavaa käyttää `let`-avainsanaa `var`-avainsanan sijaan. Lohkoalueita käsitellään tarkemmin myöhemmissä osissa.
- **Muuttujan nimi**, jonka valitset itse.

### Tehtävä - työskentely muuttujien kanssa

1. **Määrittele muuttuja**. Määritellään muuttuja käyttäen `let`-avainsanaa:

    ```javascript
    let myVariable;
    ```

   `myVariable` on nyt määritelty käyttäen `let`-avainsanaa. Sillä ei vielä ole arvoa.

1. **Aseta arvo**. Tallenna arvo muuttujaan käyttämällä `=`-operaattoria ja odotettua arvoa.

    ```javascript
    myVariable = 123;
    ```

   > Huom: tässä oppitunnissa `=` tarkoittaa "arvon asettamisen operaattoria", jota käytetään arvon asettamiseen muuttujalle. Se ei tarkoita yhtäsuuruutta.

   `myVariable` on nyt *alustettu* arvolla 123.

1. **Refaktoroi**. Korvaa koodisi seuraavalla lauseella.

    ```javascript
    let myVariable = 123;
    ```

    Yllä oleva on esimerkki _eksplisiittisestä alustuksesta_, jossa muuttuja määritellään ja sille asetetaan arvo samanaikaisesti.

1. **Muuta muuttujan arvoa**. Muuta muuttujan arvoa seuraavasti:

   ```javascript
   myVariable = 321;
   ```

   Kun muuttuja on määritelty, sen arvoa voidaan muuttaa missä tahansa koodin kohdassa käyttämällä `=`-operaattoria ja uutta arvoa.

   ✅ Kokeile! Voit kirjoittaa JavaScriptiä suoraan selaimessasi. Avaa selainikkuna ja siirry kehittäjätyökaluihin. Konsolissa näet kehotteen; kirjoita `let myVariable = 123`, paina Enter ja kirjoita sitten `myVariable`. Mitä tapahtuu? Huomaa, että opit näistä käsitteistä lisää seuraavilla oppitunneilla.

## Vakiot

Vakion määrittely ja alustus noudattaa samoja periaatteita kuin muuttujan, mutta käytetään `const`-avainsanaa. Vakiot määritellään yleensä kokonaan isoilla kirjaimilla.

```javascript
const MY_VARIABLE = 123;
```

Vakiot ovat samankaltaisia kuin muuttujat, mutta niillä on kaksi poikkeusta:

- **Täytyy olla arvo**. Vakiot on alustettava, muuten koodin suorittaminen aiheuttaa virheen.
- **Viitettä ei voi muuttaa**. Vakion viitettä ei voi muuttaa alustuksen jälkeen, muuten koodin suorittaminen aiheuttaa virheen. Katsotaanpa kaksi esimerkkiä:
   - **Yksinkertainen arvo**. Seuraava EI ole sallittua:
   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```
 
   - **Olion viite on suojattu**. Seuraava EI ole sallittua.
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

    - **Olion arvo ei ole suojattu**. Seuraava ON sallittua:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      Yllä muutat olion arvoa, mutta et itse viitettä, mikä tekee siitä sallittua.

   > Huomaa, että `const` tarkoittaa, että viite on suojattu uudelleenmäärittelyltä. Arvo ei kuitenkaan ole _muuttumaton_ ja voi muuttua, erityisesti jos kyseessä on monimutkainen rakenne, kuten olio.

## Tietotyypit

Muuttujat voivat tallentaa monenlaisia arvoja, kuten numeroita ja tekstiä. Näitä erilaisia arvoja kutsutaan **tietotyypeiksi**. Tietotyypit ovat tärkeä osa ohjelmistokehitystä, koska ne auttavat kehittäjiä päättämään, miten koodi tulisi kirjoittaa ja miten ohjelmiston tulisi toimia. Lisäksi joillakin tietotyypeillä on ainutlaatuisia ominaisuuksia, jotka auttavat muuntamaan tai hakemaan lisätietoja arvosta.

✅ Tietotyyppejä kutsutaan myös JavaScriptin tietoprimitiiveiksi, koska ne ovat kielen tarjoamia alimmantason tietotyyppejä. Primitiiivejä on 7: string, number, bigint, boolean, undefined, null ja symbol. Mieti hetki, mitä kukin näistä primitiiveistä voisi edustaa. Mitä on `zebra`? Entä `0`? `true`?

### Numerot

Edellisessä osiossa `myVariable`-muuttujan arvo oli numerotyyppi.

`let myVariable = 123;`

Muuttujat voivat tallentaa kaikenlaisia numeroita, mukaan lukien desimaalit tai negatiiviset luvut. Numeroita voidaan myös käyttää aritmeettisten operaattorien kanssa, joita käsitellään [seuraavassa osiossa](../../../../2-js-basics/1-data-types).

### Aritmeettiset operaattorit

Aritmeettisten toimintojen suorittamiseen on useita operaattoreita, joista osa on listattu alla:

| Symboli | Kuvaus                                                                 | Esimerkki                        |
| ------- | ---------------------------------------------------------------------- | -------------------------------- |
| `+`     | **Yhteenlasku**: Laskee kahden luvun summan                            | `1 + 2 //odotettu vastaus on 3`  |
| `-`     | **Vähennyslasku**: Laskee kahden luvun erotuksen                       | `1 - 2 //odotettu vastaus on -1` |
| `*`     | **Kertolasku**: Laskee kahden luvun tulon                              | `1 * 2 //odotettu vastaus on 2`  |
| `/`     | **Jakolasku**: Laskee kahden luvun osamäärän                           | `1 / 2 //odotettu vastaus on 0.5`|
| `%`     | **Jakojäännös**: Laskee kahden luvun jaon jakojäännöksen               | `1 % 2 //odotettu vastaus on 1`  |

✅ Kokeile! Kokeile aritmeettista operaatiota selaimesi konsolissa. Yllättivätkö tulokset sinut?

### Merkkijonot

Merkkijonot ovat merkkejä, jotka sijaitsevat yksinkertaisten tai kaksoislainausmerkkien sisällä.

- `'Tämä on merkkijono'`
- `"Tämä on myös merkkijono"`
- `let myString = 'Tämä on merkkijonoarvo, joka on tallennettu muuttujaan';`

Muista käyttää lainausmerkkejä kirjoittaessasi merkkijonoa, muuten JavaScript olettaa sen olevan muuttujan nimi.

### Merkkijonojen muotoilu

Merkkijonot ovat tekstuaalisia ja vaativat ajoittain muotoilua.

Kahden tai useamman merkkijonon **yhdistämiseen** käytetään `+`-operaattoria.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ Miksi `1 + 1 = 2` JavaScriptissä, mutta `'1' + '1' = 11`? Mieti asiaa. Entä `'1' + 1`?

**Mallimerkkijonot** ovat toinen tapa muotoilla merkkijonoja. Niissä käytetään lainausmerkkien sijaan takakenoa. Kaikki, mikä ei ole pelkkää tekstiä, on sijoitettava paikkamerkkeihin `${ }`. Tämä sisältää kaikki muuttujat, jotka voivat olla merkkijonoja.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

Voit saavuttaa muotoilutavoitteesi kummallakin menetelmällä, mutta mallimerkkijonot säilyttävät kaikki välilyönnit ja rivinvaihdot.

✅ Milloin käyttäisit mallimerkkijonoa tavallisen merkkijonon sijaan?

### Totuusarvot

Totuusarvot voivat olla vain kaksi arvoa: `true` tai `false`. Totuusarvot auttavat päättämään, mitkä koodirivit suoritetaan, kun tietyt ehdot täyttyvät. Monissa tapauksissa [operaattorit](../../../../2-js-basics/1-data-types) auttavat totuusarvon asettamisessa, ja huomaat usein muuttujien alustamisen tai niiden arvojen päivittämisen operaattorin avulla.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ Muuttujaa voidaan pitää 'totuusarvoisena', jos se arvioidaan totuusarvoksi `true`. Mielenkiintoista on, että JavaScriptissä [kaikki arvot ovat totuusarvoisia, ellei niitä ole määritelty epätosiksi](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## 🚀 Haaste

JavaScript on tunnettu yllättävistä tavoistaan käsitellä tietotyyppejä. Tee hieman tutkimusta näistä "ansakohdista". Esimerkiksi: kirjainkoolla on merkitystä! Kokeile tätä konsolissasi: `let age = 1; let Age = 2; age == Age` (tulos on `false` -- miksi?). Mitä muita ansakohtia löydät?

## Oppitunnin jälkeinen kysely
[Oppitunnin jälkeinen kysely](https://ff-quizzes.netlify.app/web/quiz/8)

## Kertaus ja itseopiskelu

Tutustu [tähän JavaScript-harjoitusten listaan](https://css-tricks.com/snippets/javascript/) ja kokeile yhtä. Mitä opit?

## Tehtävä

[Tietotyyppiharjoitus](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa tämän käännöksen käytöstä johtuvista väärinkäsityksistä tai virhetulkinnoista.