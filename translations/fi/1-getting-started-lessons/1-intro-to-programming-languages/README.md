<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2581528206a2a01c3a0b9c88e039b7bc",
  "translation_date": "2025-10-03T10:05:38+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "fi"
}
-->
# Johdatus ohjelmointikieliin ja työkaluihin

Tässä oppitunnissa käsitellään ohjelmointikielten perusteita. Aiheet, joita käsitellään, pätevät useimpiin nykyaikaisiin ohjelmointikieliin. "Työkalut"-osiossa opit hyödyllisestä ohjelmistosta, joka auttaa sinua kehittäjänä.

![Intro Programming](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.fi.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ennakkokysely
[Ennakkokysely](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Johdanto

Tässä oppitunnissa käsitellään:

- Mitä ohjelmointi on?
- Ohjelmointikielten tyypit
- Ohjelman peruselementit
- Hyödyllinen ohjelmisto ja työkalut ammattilaiskehittäjälle

> Voit käydä tämän oppitunnin [Microsoft Learnissa](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## Mitä ohjelmointi on?

Ohjelmointi (tunnetaan myös nimellä koodaus) on prosessi, jossa kirjoitetaan ohjeita laitteelle, kuten tietokoneelle tai mobiililaitteelle. Kirjoitamme nämä ohjeet ohjelmointikielellä, jonka laite tulkitsee. Näitä ohjeita voidaan kutsua eri nimillä, kuten *ohjelma*, *tietokoneohjelma*, *sovellus (app)* ja *suoritettava tiedosto*.

*Ohjelma* voi olla mitä tahansa, mikä on kirjoitettu koodilla; verkkosivustot, pelit ja puhelinsovellukset ovat ohjelmia. Vaikka ohjelman luominen ilman koodin kirjoittamista on mahdollista, laitteen tulkitsema logiikka on todennäköisesti kirjoitettu koodilla. Ohjelma, joka *suorittaa* tai *ajaa* koodia, toteuttaa ohjeita. Laite, jolla luet tätä oppituntia, suorittaa ohjelmaa, joka näyttää sen näytölläsi.

✅ Tee hieman tutkimusta: kuka on maailman ensimmäinen tietokoneohjelmoija?

## Ohjelmointikielet

Ohjelmointikielet mahdollistavat kehittäjien ohjeiden kirjoittamisen laitteelle. Laitteet ymmärtävät vain binäärikoodia (1:t ja 0:t), ja *useimmille* kehittäjille se ei ole kovin tehokas tapa kommunikoida. Ohjelmointikielet ovat väline ihmisten ja tietokoneiden väliseen viestintään.

Ohjelmointikielet ovat erilaisia ja voivat palvella eri tarkoituksia. Esimerkiksi JavaScriptia käytetään pääasiassa verkkosovelluksissa, kun taas Bashia käytetään pääasiassa käyttöjärjestelmissä.

*Matalan tason kielet* vaativat yleensä vähemmän vaiheita laitteen ohjeiden tulkitsemiseksi kuin *korkean tason kielet*. Korkean tason kielet ovat kuitenkin suosittuja niiden luettavuuden ja tuen vuoksi. JavaScriptia pidetään korkean tason kielenä.

Seuraava koodi havainnollistaa eroa korkean tason kielen (JavaScript) ja matalan tason kielen (ARM assembly code) välillä.

```javascript
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

```c
 area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

Uskokaa tai älkää, *ne tekevät saman asian*: tulostavat Fibonacci-sekvenssin 10:een asti.

✅ Fibonacci-sekvenssi [määritellään](https://en.wikipedia.org/wiki/Fibonacci_number) numeroryhmäksi, jossa jokainen numero on kahden edeltävän numeron summa, alkaen 0:sta ja 1:stä. Ensimmäiset 10 Fibonacci-sekvenssin numeroa ovat 0, 1, 1, 2, 3, 5, 8, 13, 21 ja 34.

## Ohjelman elementit

Yksittäistä ohjetta ohjelmassa kutsutaan *lauseeksi*, ja sillä on yleensä merkki tai riviväli, joka osoittaa, missä ohje päättyy eli *terminoituu*. Ohjelman päättymistapa vaihtelee kielen mukaan.

Ohjelman lauseet voivat perustua käyttäjän tai muun lähteen antamiin tietoihin ohjeiden suorittamiseksi. Tiedot voivat muuttaa ohjelman käyttäytymistä, joten ohjelmointikielissä on tapa tallentaa tietoja väliaikaisesti myöhempää käyttöä varten. Näitä kutsutaan *muuttujiksi*. Muuttujat ovat lauseita, jotka ohjeistavat laitteen tallentamaan tietoja muistiinsa. Muuttujat ohjelmissa ovat samanlaisia kuin muuttujat algebrassa, joissa niillä on yksilöllinen nimi ja niiden arvo voi muuttua ajan myötä.

On mahdollista, että jotkut lauseet eivät tule laitteen suorittamiksi. Tämä tapahtuu yleensä tarkoituksella, kun kehittäjä on kirjoittanut ohjelman näin, tai vahingossa, kun odottamaton virhe tapahtuu. Tällainen sovelluksen hallinta tekee siitä kestävämmän ja helpommin ylläpidettävän. Tyypillisesti nämä hallinnan muutokset tapahtuvat, kun tietyt ehdot täyttyvät. Yksi yleinen lause, jota käytetään nykyaikaisessa ohjelmoinnissa ohjelman suorittamisen hallintaan, on `if..else`-lause.

✅ Opit lisää tämän tyyppisestä lauseesta myöhemmissä oppitunneissa.

## Työkalut

[![Työkalut](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Työkalut")

> 🎥 Klikkaa yllä olevaa kuvaa nähdäksesi videon työkaluista

Tässä osiossa opit ohjelmistoista, jotka voivat olla erittäin hyödyllisiä, kun aloitat ammatillisen kehittäjän urasi.

**Kehitysympäristö** on ainutlaatuinen joukko työkaluja ja ominaisuuksia, joita kehittäjä käyttää usein ohjelmistoa kirjoittaessaan. Jotkut näistä työkaluista on räätälöity kehittäjän erityistarpeisiin, ja ne voivat muuttua ajan myötä, jos kehittäjä muuttaa työprioriteettejaan, henkilökohtaisia projektejaan tai käyttää eri ohjelmointikieltä. Kehitysympäristöt ovat yhtä ainutlaatuisia kuin kehittäjät, jotka niitä käyttävät.

### Editorit

Yksi tärkeimmistä ohjelmistokehityksen työkaluista on editori. Editoreissa kirjoitat koodisi ja joskus myös suoritat sen.

Kehittäjät luottavat editoreihin muutamasta lisäsyystä:

- *Virheenkorjaus* auttaa löytämään virheitä ja ongelmia käymällä koodia läpi rivi riviltä. Joissakin editoreissa on virheenkorjausominaisuuksia; niitä voidaan räätälöidä ja lisätä tiettyjä ohjelmointikieliä varten.
- *Syntaksin korostus* lisää värejä ja tekstimuotoiluja koodiin, mikä tekee siitä helpommin luettavan. Useimmat editorit sallivat mukautetun syntaksin korostuksen.
- *Laajennukset ja integraatiot* ovat kehittäjien kehittämiä erikoistyökaluja. Nämä työkalut eivät ole osa editorin perustoimintoja. Esimerkiksi monet kehittäjät dokumentoivat koodinsa selittääkseen, miten se toimii. He voivat asentaa oikeinkirjoituksen tarkistuslaajennuksen löytääkseen kirjoitusvirheitä dokumentaatiosta. Useimmat laajennukset on tarkoitettu käytettäväksi tietyn editorin sisällä, ja useimmat editorit sisältävät tavan etsiä saatavilla olevia laajennuksia.
- *Mukauttaminen* mahdollistaa kehittäjien luoda ainutlaatuisen kehitysympäristön tarpeidensa mukaan. Useimmat editorit ovat erittäin mukautettavia ja voivat myös sallia kehittäjien luoda omia laajennuksia.

#### Suositut editorit ja verkkokehityksen laajennukset

- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)
  
- [Sublimetext](https://www.sublimetext.com/)
  - [emmet](https://emmet.io/)
  - [SublimeLinter](http://www.sublimelinter.com/en/stable/)

### Selaimet

Toinen tärkeä työkalu on selain. Verkkokehittäjät luottavat selaimeen nähdäkseen, miten heidän koodinsa toimii verkossa. Selainta käytetään myös näyttämään verkkosivun visuaaliset elementit, jotka on kirjoitettu editorissa, kuten HTML.

Monet selaimet sisältävät *kehittäjätyökaluja* (DevTools), jotka sisältävät joukon hyödyllisiä ominaisuuksia ja tietoja, jotka auttavat kehittäjiä keräämään ja tallentamaan tärkeää tietoa sovelluksestaan. Esimerkiksi: Jos verkkosivulla on virheitä, on joskus hyödyllistä tietää, milloin ne tapahtuivat. Selaimen DevTools voidaan konfiguroida keräämään nämä tiedot.

#### Suositut selaimet ja DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Komentorivityökalut

Jotkut kehittäjät suosivat vähemmän graafista näkymää päivittäisiin tehtäviinsä ja luottavat komentoriviin tämän saavuttamiseksi. Koodin kirjoittaminen vaatii paljon näppäimistön käyttöä, ja jotkut kehittäjät haluavat olla keskeyttämättä työskentelyään näppäimistöllä. He käyttävät näppäinoikoteitä vaihtaakseen työpöytäikkunoiden välillä, työskennelläkseen eri tiedostoissa ja käyttää työkaluja. Useimmat tehtävät voidaan suorittaa hiirellä, mutta yksi komentorivin etu on, että paljon voidaan tehdä komentorivityökaluilla ilman tarvetta vaihtaa hiiren ja näppäimistön välillä. Toinen komentorivin etu on, että ne ovat konfiguroitavissa, ja voit tallentaa mukautetun konfiguraation, muuttaa sitä myöhemmin ja tuoda sen muihin kehityskoneisiin. Koska kehitysympäristöt ovat niin ainutlaatuisia jokaiselle kehittäjälle, jotkut välttävät komentorivin käyttöä, jotkut luottavat siihen täysin, ja jotkut suosivat näiden kahden yhdistelmää.

### Suositut komentorivivaihtoehdot

Komentorivivaihtoehdot vaihtelevat käyttämäsi käyttöjärjestelmän mukaan.

*💻 = tulee esiasennettuna käyttöjärjestelmään.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Komentorivi](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (tunnetaan myös nimellä CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Suositut komentorivityökalut

- [Git](https://git-scm.com/) (💻 useimmissa käyttöjärjestelmissä)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Dokumentaatio

Kun kehittäjä haluaa oppia jotain uutta, hän todennäköisesti kääntyy dokumentaation puoleen oppiakseen, miten sitä käytetään. Kehittäjät luottavat usein dokumentaatioon saadakseen ohjeita työkalujen ja kielten oikeasta käytöstä sekä syvempää tietoa niiden toiminnasta.

#### Suosittu dokumentaatio verkkokehityksestä

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), Mozillalta, [Firefox](https://www.mozilla.org/firefox/)-selaimen julkaisijoilta
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), Googlelta, [Chrome](https://www.google.com/chrome/)-selaimen julkaisijoilta
- [Microsoftin oma kehittäjädokumentaatio](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), [Microsoft Edge](https://www.microsoft.com/edge)-selaimelle
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Tee tutkimusta: Nyt kun tiedät verkkokehittäjän ympäristön perusteet, vertaa ja kontrastoi sitä verkkosuunnittelijan ympäristöön.

---

## 🚀 Haaste

Vertaa joitakin ohjelmointikieliä. Mitkä ovat JavaScriptin ja Javan ainutlaatuiset piirteet? Entä COBOL vs. Go?

## Jälkikysely
[Jälkikysely](https://ff-quizzes.netlify.app/web/)

## Kertaus ja itseopiskelu

Tutki hieman eri kieliä, joita ohjelmoija voi käyttää. Yritä kirjoittaa yksi rivi yhdellä kielellä ja kirjoita se sitten uudelleen kahdella muulla. Mitä opit?

## Tehtävä

[Dokumentaation lukeminen](assignment.md)

> Huom: Kun valitset työkaluja tehtävääsi, älä valitse edellä mainittuja editoreita, selaimia tai komentorivityökaluja.

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.