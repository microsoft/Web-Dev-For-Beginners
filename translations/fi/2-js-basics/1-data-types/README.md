<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0092f6533ae3ec3adad5b5ece68efaf",
  "translation_date": "2025-10-23T00:12:29+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "fi"
}
-->
# JavaScriptin perusteet: Tietotyypit

![JavaScriptin perusteet - Tietotyypit](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.fi.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

Tietotyypit ovat yksi JavaScriptin peruskäsitteistä, joita kohtaat jokaisessa ohjelmassa, jonka kirjoitat. Ajattele tietotyyppejä kuin muinaisten Aleksandrian kirjastonhoitajien käyttämää arkistointijärjestelmää – heillä oli omat paikkansa runoudelle, matematiikalle ja historiallisille asiakirjoille. JavaScript järjestää tietoa samalla tavalla eri kategorioihin eri tyyppisille datalle.

Tässä oppitunnissa tutustumme JavaScriptin keskeisiin tietotyyppeihin. Opit käsittelemään numeroita, tekstiä, totuusarvoja ja ymmärrät, miksi oikean tyypin valinta on tärkeää ohjelmissasi. Nämä käsitteet saattavat aluksi tuntua abstrakteilta, mutta harjoittelun myötä ne tulevat sinulle luonnollisiksi.

Tietotyyppien ymmärtäminen tekee kaikesta muusta JavaScriptissä paljon selkeämpää. Aivan kuten arkkitehtien täytyy ymmärtää erilaisia rakennusmateriaaleja ennen katedraalin rakentamista, nämä perusasiat tukevat kaikkea, mitä tulet rakentamaan tulevaisuudessa.

## Ennakkokysely
[Ennakkokysely](https://ff-quizzes.netlify.app/web/)

Tämä oppitunti kattaa JavaScriptin perusteet, kielen, joka tuo interaktiivisuutta verkkoon.

> Voit käydä tämän oppitunnin [Microsoft Learnissa](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Muuttujat](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Muuttujat JavaScriptissä")

[![Tietotyypit JavaScriptissä](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Tietotyypit JavaScriptissä")

> 🎥 Klikkaa yllä olevia kuvia nähdäksesi videoita muuttujista ja tietotyypeistä

Aloitetaan muuttujista ja tietotyypeistä, jotka täyttävät ne!

## Muuttujat

Muuttujat ovat ohjelmoinnin perusrakennuspalikoita. Kuten keskiaikaiset alkemistit käyttivät nimettyjä purkkeja eri aineiden säilyttämiseen, muuttujat antavat sinun tallentaa tietoa ja antaa sille kuvaavan nimen, jotta voit viitata siihen myöhemmin. Tarvitsetko jonkun iän muistiin? Tallenna se muuttujaan nimeltä `age`. Haluatko seurata käyttäjän nimeä? Säilytä se muuttujassa nimeltä `userName`.

Keskitymme moderniin tapaan luoda muuttujia JavaScriptissä. Tässä oppitunnissa opit tekniikoita, jotka edustavat vuosien kielen kehitystä ja ohjelmointiyhteisön parhaita käytäntöjä.

Muuttujan **luominen** ja **määrittäminen** tapahtuu seuraavalla syntaksilla **[avainsana] [nimi]**. Se koostuu kahdesta osasta:

- **Avainsana**. Käytä `let` muuttujille, jotka voivat muuttua, tai `const` arvoille, jotka pysyvät samoina.
- **Muuttujan nimi**, tämä on kuvaava nimi, jonka valitset itse.

✅ Avainsana `let` esiteltiin ES6:ssa ja antaa muuttujallesi niin sanotun _lohkoalueen_. Suositellaan käyttämään `let` tai `const` vanhemman `var`-avainsanan sijaan. Käsittelemme lohkoalueita tarkemmin tulevissa osissa.

### Tehtävä - työskentely muuttujien kanssa

1. **Määritä muuttuja**. Aloitetaan luomalla ensimmäinen muuttujamme:

    ```javascript
    let myVariable;
    ```

   **Mitä tämä tekee:**
   - Tämä kertoo JavaScriptille, että luodaan tallennuspaikka nimeltä `myVariable`
   - JavaScript varaa muistista tilaa tälle muuttujalle
   - Muuttujalla ei ole vielä arvoa (undefined)

2. **Anna sille arvo**. Nyt asetetaan jotain muuttujaan:

    ```javascript
    myVariable = 123;
    ```

   **Miten arvon asettaminen toimii:**
   - `=`-operaattori asettaa arvon 123 muuttujalle
   - Muuttuja sisältää nyt tämän arvon sen sijaan, että se olisi määrittelemätön
   - Voit viitata tähän arvoon koodissasi käyttämällä `myVariable`

   > Huom: `=`-operaattorin käyttö tässä oppitunnissa tarkoittaa "arvon asettamista", eli muuttujalle annetaan arvo. Se ei tarkoita yhtäsuuruutta.

3. **Tee se fiksusti**. Yhdistetään itse asiassa nämä kaksi vaihetta:

    ```javascript
    let myVariable = 123;
    ```

    **Tämä tapa on tehokkaampi:**
    - Määrität muuttujan ja asetat arvon yhdellä lauseella
    - Tämä on kehittäjien yleinen käytäntö
    - Lyhentää koodia säilyttäen selkeyden

4. **Muutat mielesi**. Entä jos haluamme tallentaa eri numeron?

   ```javascript
   myVariable = 321;
   ```

   **Arvon uudelleenmäärittäminen:**
   - Muuttuja sisältää nyt arvon 321 sen sijaan, että se olisi 123
   - Aiempi arvo korvataan – muuttujat tallentavat vain yhden arvon kerrallaan
   - Tämä muokattavuus on `let`-avainsanalla määritettyjen muuttujien keskeinen ominaisuus

   ✅ Kokeile! Voit kirjoittaa JavaScriptiä suoraan selaimessasi. Avaa selainikkuna ja siirry kehittäjätyökaluihin. Konsolista löydät kehotteen; kirjoita `let myVariable = 123`, paina enteriä, ja kirjoita sitten `myVariable`. Mitä tapahtuu? Huomaa, että opit lisää näistä käsitteistä seuraavissa oppitunneissa.

## Vakiot

Joskus sinun täytyy tallentaa tietoa, joka ei saa muuttua ohjelman suorituksen aikana. Ajattele vakioita kuin matematiikan periaatteita, jotka Eukleides määritti muinaisessa Kreikassa – kerran todistettuina ja dokumentoituina ne pysyivät muuttumattomina tulevaisuudessa.

Vakiot toimivat samalla tavalla kuin muuttujat, mutta niillä on tärkeä rajoitus: kun niiden arvo on asetettu, sitä ei voi muuttaa. Tämä muuttumattomuus auttaa estämään kriittisten arvojen tahattomat muutokset ohjelmassasi.

Vakion määrittäminen ja alustaminen noudattaa samoja periaatteita kuin muuttujan, mutta käytetään `const`-avainsanaa. Vakiot määritellään yleensä kokonaan isoilla kirjaimilla.

```javascript
const MY_VARIABLE = 123;
```

**Mitä tämä koodi tekee:**
- **Luo** vakion nimeltä `MY_VARIABLE`, jonka arvo on 123
- **Käyttää** isojen kirjainten nimeämiskäytäntöä vakioille
- **Estää** tulevat muutokset tähän arvoon

Vakioilla on kaksi pääsääntöä:

- **Niille täytyy antaa arvo heti** – tyhjiä vakioita ei sallita!
- **Arvoa ei voi koskaan muuttaa** – JavaScript antaa virheen, jos yrität. Katsotaan, mitä tämä tarkoittaa:

   **Yksinkertainen arvo** - Seuraava EI ole sallittua:
   
      ```javascript
      const PI = 3;
      PI = 4; // ei sallittu
      ```

   **Mitä sinun tulee muistaa:**
   - **Yritykset** määrittää vakio uudelleen aiheuttavat virheen
   - **Suojaa** tärkeitä arvoja tahattomilta muutoksilta
   - **Varmistaa**, että arvo pysyy johdonmukaisena ohjelman aikana
 
   **Objektiviittaus on suojattu** - Seuraava EI ole sallittua:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // ei sallittu
      ```

   **Näiden käsitteiden ymmärtäminen:**
   - **Estää** koko objektin korvaamisen uudella
   - **Suojaa** alkuperäisen objektin viittauksen
   - **Säilyttää** objektin identiteetin muistissa

    **Objektin arvo ei ole suojattu** - Seuraava ON sallittua:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // sallittu
      ```

      **Mitä tässä tapahtuu:**
      - **Muokkaa** objektin sisäistä ominaisuutta
      - **Säilyttää** saman objektiviittauksen
      - **Osoittaa**, että objektin sisältö voi muuttua, vaikka viittaus pysyy samana

   > Huomaa, että `const` tarkoittaa, että viittaus on suojattu uudelleenmäärittelyltä. Arvo ei kuitenkaan ole täysin _muuttumaton_ ja voi muuttua, erityisesti jos kyseessä on monimutkainen rakenne, kuten objekti.

## Tietotyypit

JavaScript järjestää tietoa eri kategorioihin, joita kutsutaan tietotyypeiksi. Tämä käsite muistuttaa sitä, miten muinaiset oppineet luokittelivat tietoa – Aristoteles erotti eri päättelytyypit, tietäen, että loogisia periaatteita ei voitu soveltaa yhtäläisesti runouteen, matematiikkaan ja luonnonfilosofiaan.

Tietotyypeillä on merkitystä, koska eri operaatiot toimivat eri tyyppisen tiedon kanssa. Aivan kuten et voi suorittaa laskutoimituksia henkilön nimellä tai aakkostaa matemaattista yhtälöä, JavaScript vaatii sopivan tietotyypin jokaiseen operaatioon. Tämän ymmärtäminen estää virheitä ja tekee koodistasi luotettavamman.

Muuttujat voivat tallentaa monenlaisia arvoja, kuten numeroita ja tekstiä. Nämä erilaiset arvotyypit tunnetaan nimellä **tietotyyppi**. Tietotyypit ovat tärkeä osa ohjelmistokehitystä, koska ne auttavat kehittäjiä tekemään päätöksiä siitä, miten koodi tulisi kirjoittaa ja miten ohjelmisto tulisi toimia. Lisäksi joillakin tietotyypeillä on ainutlaatuisia ominaisuuksia, jotka auttavat muuntamaan tai poimimaan lisätietoa arvosta.

✅ Tietotyyppejä kutsutaan myös JavaScriptin datan primitiiveiksi, koska ne ovat kielen tarjoamia alimmantason tietotyyppejä. JavaScriptissä on 7 primitiivistä tietotyyppiä: string, number, bigint, boolean, undefined, null ja symbol. Mieti hetki, mitä kukin näistä primitiiveistä voisi edustaa. Mitä on `zebra`? Entä `0`? `true`?

### Numerot

Numerot ovat JavaScriptin yksinkertaisin tietotyyppi. Olipa kyseessä kokonaisluvut kuten 42, desimaalit kuten 3.14 tai negatiiviset luvut kuten -5, JavaScript käsittelee niitä yhtenäisesti.

Muistatko aiemman muuttujamme? Tuo 123, jonka tallensimme, oli itse asiassa numerotietotyyppi:

```javascript
let myVariable = 123;
```

**Keskeiset ominaisuudet:**
- JavaScript tunnistaa automaattisesti numeeriset arvot
- Voit suorittaa matemaattisia operaatioita näillä muuttujilla
- Ei vaadi erillistä tyypin määrittelyä

Muuttujat voivat tallentaa kaikenlaisia numeroita, mukaan lukien desimaaleja tai negatiivisia lukuja. Numeroita voidaan myös käyttää aritmeettisten operaattoreiden kanssa, joita käsitellään [seuraavassa osiossa](../../../../2-js-basics/1-data-types).

### Aritmeettiset operaattorit

Aritmeettiset operaattorit mahdollistavat matemaattisten laskutoimitusten tekemisen JavaScriptissä. Nämä operaattorit noudattavat samoja periaatteita, joita matemaatikot ovat käyttäneet vuosisatojen ajan – samoja symboleja, jotka esiintyivät oppineiden kuten Al-Khwarizmin teoksissa, jotka kehittivät algebrallista merkintätapaa.

Operaattorit toimivat kuten perinteisessä matematiikassa: plus yhteenlaskulle, miinus vähennyslaskulle ja niin edelleen.

Aritmeettisia toimintoja suoritettaessa on käytettävissä useita operaattoreita, joista osa on lueteltu tässä:

| Symboli | Kuvaus                                                                  | Esimerkki                        |
| ------- | ----------------------------------------------------------------------- | -------------------------------- |
| `+`     | **Yhteenlasku**: Laskee kahden numeron summan                           | `1 + 2 //odotettu vastaus on 3`   |
| `-`     | **Vähennyslasku**: Laskee kahden numeron erotuksen                      | `1 - 2 //odotettu vastaus on -1`  |
| `*`     | **Kertolasku**: Laskee kahden numeron tulon                             | `1 * 2 //odotettu vastaus on 2`   |
| `/`     | **Jakolasku**: Laskee kahden numeron osamäärän                          | `1 / 2 //odotettu vastaus on 0.5` |
| `%`     | **Jakojäännös**: Laskee kahden numeron jaon jakojäännöksen              | `1 % 2 //odotettu vastaus on 1`   |

✅ Kokeile! Kokeile aritmeettista operaatiota selaimesi konsolissa. Yllättävätkö tulokset sinut?

### Merkkijonot

JavaScriptissä tekstuaalista dataa edustetaan merkkijonoina. Termi "merkkijono" tulee käsitteestä, jossa merkkejä yhdistetään peräkkäin, aivan kuten keskiaikaiset kirjurit yhdistivät kirjaimia muodostaakseen sanoja ja lauseita käsikirjoituksissaan.

Merkkijonot ovat keskeisiä verkkokehityksessä. Jokainen verkkosivustolla näkyvä tekstinpätkä – käyttäjänimet, painikkeiden tekstit, virheilmoitukset, sisältö – käsitellään merkkijonodatana. Merkkijonojen ymmärtäminen on välttämätöntä toimivien käyttöliittymien luomisessa.

Merkkijonot ovat joukko merkkejä, jotka sijaitsevat yksinkertaisten tai kaksinkertaisten lainausmerkkien välissä.

```javascript
'This is a string'
"This is also a string"
let myString = 'This is a string value stored in a variable';
```

**Näiden käsitteiden ymmärtäminen:**
- **Käyttää** joko yksinkertaisia `'` tai kaksinkertaisia `"` lainausmerkkejä merkkijonojen määrittämiseen
- **Tallettaa** tekstidataa, joka voi sisältää kirjaimia, numeroita ja symboleja
- **Asettaa** merkkijonoarvoja muuttujille myöhempää käyttöä varten
- **Vaatii** lainausmerkit erottamaan tekstin muuttujan nimistä

Muista käyttää lainausmerkkejä kirjoittaessasi merkkijonoa, muuten JavaScript olettaa sen olevan muuttujan nimi.

### Merkkijonojen muotoilu

Merkkijonojen käsittely mahdollistaa tekstielementtien yhdistämisen, muuttujien sisällyttämisen ja dynaamisen sisällön luomisen, joka reagoi ohjelman tilaan. Tämä tekniikka mahdollistaa tekstin rakentamisen ohjelmallisesti.

Usein sinun täytyy yhdistää useita merkkijonoja – tätä prosessia kutsutaan ketjutukseksi.

Merkkijonojen **ketjuttamiseksi**, eli niiden yhdistämiseksi, käytä `+`-operaattoria.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
```

**Vaihe vaiheelta, tässä tapahtuu:**
- **Yhdistää** useita merkkijonoja käyttäen `+`-operaattoria
- **Liittää** merkkijonot suoraan yhteen ilman välilyöntejä ensimmäisessä esimerkissä
- **Lisää** välilyöntejä `" "` merkkijonojen väliin luettavuuden parantamiseksi
- **Sisällyttää** välimerkkejä, kuten pilkkuja, luodakseen oikean muotoilun

✅ Miksi `1 + 1 = 2` JavaScriptissä, mutta `'1' + '1' = 11?` Mieti asiaa. Entä `'1' + 1`?

**Mallimerkkijonot** ovat toinen tapa muotoilla merkkijonoja, paitsi että lainausmerkkien sijaan käytetään heittomerkkiä. Kaikki, mikä ei ole pelkkää tekstiä, täytyy sijoittaa paikkamerkkien `${ }` sisään. Tämä sisältää kaikki muuttujat, jotka voivat olla merkkijonoja.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

**Ymmärretään jokainen osa:**
- **Käyttää** heittomerkkejä `` ` `` tavallisten
Voit saavuttaa muotoilutavoitteesi kummallakin menetelmällä, mutta template literalit säilyttävät välilyönnit ja rivinvaihdot.

✅ Milloin käyttäisit template literalia tavallisen merkkijonon sijaan?

### Booleanit

Booleanit edustavat yksinkertaisinta datamuotoa: ne voivat sisältää vain yhden kahdesta arvosta – `true` tai `false`. Tämä binäärinen logiikkajärjestelmä juontaa juurensa 1800-luvun matemaatikon George Boolen työhön, joka kehitti Boolen algebran.

Vaikka booleanit ovat yksinkertaisia, ne ovat välttämättömiä ohjelmalogiikassa. Ne mahdollistavat koodin tekemään päätöksiä ehtojen perusteella – onko käyttäjä kirjautunut sisään, onko painiketta klikattu tai täyttyvätkö tietyt kriteerit.

Booleanit voivat olla vain kaksi arvoa: `true` tai `false`. Booleanit auttavat päättämään, mitkä koodirivit suoritetaan, kun tietyt ehdot täyttyvät. Monissa tapauksissa [operaattorit](../../../../2-js-basics/1-data-types) auttavat asettamaan Booleanin arvon, ja usein huomaat muuttujien alustamisen tai niiden arvojen päivittämisen operaattorin avulla.

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

**Yllä olevassa olemme:**
- **Luoneet** muuttujan, joka tallentaa Boolean-arvon `true`
- **Havainnollistaneet**, miten tallentaa Boolean-arvo `false`
- **Käyttäneet** tarkalleen avainsanoja `true` ja `false` (ei lainausmerkkejä)
- **Valmistelleet** nämä muuttujat käytettäväksi ehtolauseissa

✅ Muuttujaa voidaan pitää 'totena' (truthy), jos se arvioidaan Boolean-arvoksi `true`. Mielenkiintoista on, että JavaScriptissä [kaikki arvot ovat totuudenmukaisia, ellei niitä määritellä epätotuudenmukaisiksi](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## GitHub Copilot Agent -haaste 🚀

Käytä Agent-tilaa suorittaaksesi seuraavan haasteen:

**Kuvaus:** Luo henkilökohtainen tietojen hallintaohjelma, joka havainnollistaa kaikki JavaScriptin datatyypit, joita olet oppinut tässä oppitunnissa, samalla kun käsittelet todellisen maailman dataskenaarioita.

**Tehtävä:** Rakenna JavaScript-ohjelma, joka luo käyttäjäprofiiliobjektin sisältäen: henkilön nimen (merkkijono), iän (numero), opiskelijastatuksen (boolean), suosikkivärit taulukossa sekä osoiteobjektin, jossa on katu-, kaupunki- ja postinumero-ominaisuudet. Sisällytä funktioita, jotka näyttävät profiilitiedot ja päivittävät yksittäisiä kenttiä. Varmista, että havainnollistat merkkijonojen yhdistämistä, template literaleja, aritmeettisia operaatioita iän kanssa ja boolean-logiikkaa opiskelijastatuksen osalta.

Lisätietoja [agent-tilasta](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) löytyy täältä.

## 🚀 Haaste

JavaScriptillä on joitakin käyttäytymisiä, jotka voivat yllättää kehittäjät. Tässä on klassinen esimerkki tutkittavaksi: kokeile kirjoittaa selaimen konsoliin: `let age = 1; let Age = 2; age == Age` ja tarkkaile tulosta. Se palauttaa `false` – voitko selvittää miksi?

Tämä edustaa yhtä monista JavaScriptin käyttäytymismalleista, jotka kannattaa ymmärtää. Näiden erikoisuuksien tunteminen auttaa sinua kirjoittamaan luotettavampaa koodia ja ratkaisemaan ongelmia tehokkaammin.

## Luentojälkeinen kysely
[Luentojälkeinen kysely](https://ff-quizzes.netlify.app)

## Kertaus ja itseopiskelu

Tutustu [tähän JavaScript-harjoitusten listaan](https://css-tricks.com/snippets/javascript/) ja kokeile yhtä. Mitä opit?

## Tehtävä

[Datatyypit harjoitus](assignment.md)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.