<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b95fdd8310ef467305015ece1b0f9411",
  "translation_date": "2025-08-29T00:43:39+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "fi"
}
-->
# JavaScriptin perusteet: Tietotyypit

![JavaScript Basics - Data types](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.fi.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Ennakkokysely
[Ennakkokysely](https://ff-quizzes.netlify.app/web/)

Tässä oppitunnissa käsitellään JavaScriptin perusteita, kieltä, joka tuo interaktiivisuutta verkkosivuille.

> Voit käydä tämän oppitunnin [Microsoft Learnissa](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Muuttujat](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Muuttujat JavaScriptissä")

[![Tietotyypit JavaScriptissä](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Tietotyypit JavaScriptissä")

> 🎥 Klikkaa yllä olevia kuvia nähdäksesi videoita muuttujista ja tietotyypeistä

Aloitetaan muuttujista ja tietotyypeistä, jotka täyttävät ne!

## Muuttujat

Muuttujat tallentavat arvoja, joita voidaan käyttää ja muuttaa koodin aikana.

Muuttujan luominen ja **määrittäminen** tapahtuu seuraavalla syntaksilla **[avainsana] [nimi]**. Se koostuu kahdesta osasta:

- **Avainsana**. Avainsanoja voivat olla `let` tai `var`.  

✅ Avainsana `let` esiteltiin ES6:ssa ja antaa muuttujalle niin sanotun _lohkon scope_:n. On suositeltavaa käyttää `let`-avainsanaa `var`:n sijaan. Käsittelemme lohkon scope:a tarkemmin myöhemmissä osissa.
- **Muuttujan nimi**, jonka valitset itse.

### Tehtävä - työskentely muuttujien kanssa

1. **Määritä muuttuja**. Määritetään muuttuja käyttämällä `let`-avainsanaa:

    ```javascript
    let myVariable;
    ```

   `myVariable` on nyt määritetty käyttämällä `let`-avainsanaa. Sillä ei tällä hetkellä ole arvoa.

1. **Aseta arvo**. Tallenna arvo muuttujaan käyttämällä `=`-operaattoria, jota seuraa odotettu arvo.

    ```javascript
    myVariable = 123;
    ```

   > Huomio: `=`-operaattorin käyttö tässä oppitunnissa tarkoittaa "määrittämisoperaattoria", jota käytetään arvon asettamiseen muuttujalle. Se ei tarkoita yhtäläisyyttä.

   `myVariable` on nyt *alustettu* arvolla 123.

1. **Refaktoroi**. Korvaa koodisi seuraavalla lauseella.

    ```javascript
    let myVariable = 123;
    ```

    Yllä oleva on _eksplisiittinen alustus_, jossa muuttuja määritetään ja sille annetaan arvo samanaikaisesti.

1. **Muuta muuttujan arvoa**. Muuta muuttujan arvoa seuraavalla tavalla:

   ```javascript
   myVariable = 321;
   ```

   Kun muuttuja on määritetty, sen arvoa voidaan muuttaa milloin tahansa koodissa käyttämällä `=`-operaattoria ja uutta arvoa.

   ✅ Kokeile! Voit kirjoittaa JavaScriptiä suoraan selaimessasi. Avaa selainikkuna ja siirry kehittäjätyökaluihin. Konsolista löydät kehotteen; kirjoita `let myVariable = 123`, paina Enter, ja kirjoita sitten `myVariable`. Mitä tapahtuu? Huomaa, että opit lisää näistä käsitteistä seuraavissa oppitunneissa.

## Vakiot

Vakion määrittäminen ja alustaminen noudattaa samoja periaatteita kuin muuttujan, mutta käytetään `const`-avainsanaa. Vakiot määritetään yleensä kokonaan isoilla kirjaimilla.

```javascript
const MY_VARIABLE = 123;
```

Vakiot ovat samanlaisia kuin muuttujat, mutta niillä on kaksi poikkeusta:

- **Täytyy olla arvo**. Vakiot täytyy alustaa, muuten koodin suorittaminen aiheuttaa virheen.
- **Viitettä ei voi muuttaa**. Vakion viitettä ei voi muuttaa alustamisen jälkeen, muuten koodin suorittaminen aiheuttaa virheen. Katsotaan kaksi esimerkkiä:
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

   > Huomio, `const` tarkoittaa, että viite on suojattu uudelleenmäärittelyltä. Arvo ei kuitenkaan ole _muuttumaton_ ja voi muuttua, erityisesti jos kyseessä on monimutkainen rakenne, kuten olio.

## Tietotyypit

Muuttujat voivat tallentaa monenlaisia arvoja, kuten numeroita ja tekstiä. Näitä erilaisia arvoja kutsutaan **tietotyypeiksi**. Tietotyypit ovat tärkeä osa ohjelmistokehitystä, koska ne auttavat kehittäjiä tekemään päätöksiä siitä, miten koodi tulisi kirjoittaa ja miten ohjelmisto toimii. Lisäksi joillakin tietotyypeillä on ainutlaatuisia ominaisuuksia, jotka auttavat muuntamaan tai poimimaan lisätietoja arvosta.

✅ Tietotyyppejä kutsutaan myös JavaScriptin tietoprimitiiiveiksi, koska ne ovat kielen tarjoamia alimmantason tietotyyppejä. Primitiiivejä on 7: string, number, bigint, boolean, undefined, null ja symbol. Käytä hetki visualisoidaksesi, mitä kukin näistä primitiiveistä voisi edustaa. Mitä on `zebra`? Entä `0`? `true`?

### Numerot

Edellisessä osiossa `myVariable`-muuttujan arvo oli numerotietotyyppi.

`let myVariable = 123;`

Muuttujat voivat tallentaa kaikenlaisia numeroita, mukaan lukien desimaalit tai negatiiviset numerot. Numeroita voidaan myös käyttää aritmeettisten operaattorien kanssa, joita käsitellään [seuraavassa osiossa](../../../../2-js-basics/1-data-types).

### Aritmeettiset operaattorit

Aritmeettisten toimintojen suorittamiseen on useita operaattoreita, joista osa on lueteltu tässä:

| Symboli | Kuvaus                                                                  | Esimerkki                        |
| ------- | ----------------------------------------------------------------------- | -------------------------------- |
| `+`     | **Yhteenlasku**: Laskee kahden numeron summan                           | `1 + 2 //odotettu vastaus on 3`  |
| `-`     | **Vähennyslasku**: Laskee kahden numeron erotuksen                      | `1 - 2 //odotettu vastaus on -1` |
| `*`     | **Kertolasku**: Laskee kahden numeron tulon                             | `1 * 2 //odotettu vastaus on 2`  |
| `/`     | **Jakolasku**: Laskee kahden numeron osamäärän                          | `1 / 2 //odotettu vastaus on 0.5`|
| `%`     | **Jakojäännös**: Laskee kahden numeron jaon jakojäännöksen              | `1 % 2 //odotettu vastaus on 1`  |

✅ Kokeile! Kokeile aritmeettista operaatiota selaimesi konsolissa. Yllättävätkö tulokset sinut?

### Merkkijonot

Merkkijonot ovat joukko merkkejä, jotka sijaitsevat yksittäisten tai kaksoislainausmerkkien välissä.

- `'Tämä on merkkijono'`
- `"Tämä on myös merkkijono"`
- `let myString = 'Tämä on merkkijonoarvo, joka on tallennettu muuttujaan';`

Muista käyttää lainausmerkkejä kirjoittaessasi merkkijonoa, muuten JavaScript olettaa sen olevan muuttujan nimi.

### Merkkijonojen muotoilu

Merkkijonot ovat tekstuaalisia ja vaativat ajoittain muotoilua.

Merkkijonojen **yhdistämiseksi** tai niiden liittämiseksi yhteen käytä `+`-operaattoria.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ Miksi `1 + 1 = 2` JavaScriptissä, mutta `'1' + '1' = 11?` Mieti asiaa. Entä `'1' + 1`?

**Mallimerkkijonot** ovat toinen tapa muotoilla merkkijonoja, paitsi että lainausmerkkien sijaan käytetään heittomerkkiä. Kaikki, mikä ei ole pelkkää tekstiä, täytyy sijoittaa paikkamerkkien `${ }` sisään. Tämä sisältää kaikki muuttujat, jotka voivat olla merkkijonoja.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

Voit saavuttaa muotoilutavoitteesi kummallakin menetelmällä, mutta mallimerkkijonot kunnioittavat kaikkia välilyöntejä ja rivinvaihtoja.

✅ Milloin käyttäisit mallimerkkijonoa tavallisen merkkijonon sijaan?

### Totuusarvot

Totuusarvot voivat olla vain kaksi arvoa: `true` tai `false`. Totuusarvot voivat auttaa tekemään päätöksiä siitä, mitkä koodirivit tulisi suorittaa, kun tietyt ehdot täyttyvät. Monissa tapauksissa [operaattorit](../../../../2-js-basics/1-data-types) auttavat totuusarvon asettamisessa, ja huomaat usein muuttujien alustamisen tai niiden arvojen päivittämisen operaattorin avulla.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ Muuttujaa voidaan pitää 'totuusarvoisena', jos se arvioidaan totuusarvoksi `true`. Mielenkiintoista on, että JavaScriptissä [kaikki arvot ovat totuusarvoisia, ellei niitä määritetä epätotuusarvoisiksi](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## 🚀 Haaste

JavaScript on tunnettu yllättävistä tavoistaan käsitellä tietotyyppejä ajoittain. Tee hieman tutkimusta näistä 'ansakohdista'. Esimerkiksi: kirjainkoko voi aiheuttaa ongelmia! Kokeile tätä konsolissasi: `let age = 1; let Age = 2; age == Age` (tulos `false` -- miksi?). Mitä muita ansakohtia löydät?

## Jälkikysely
[Jälkikysely](https://ff-quizzes.netlify.app)

## Kertaus ja itseopiskelu

Tutustu [tähän JavaScript-harjoitusten listaan](https://css-tricks.com/snippets/javascript/) ja kokeile yhtä. Mitä opit?

## Tehtävä

[Tietotyyppien harjoittelu](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Pyrimme tarkkuuteen, mutta huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulee pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskääntämistä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.