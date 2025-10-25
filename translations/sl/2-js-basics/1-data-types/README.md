<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0092f6533ae3ec3adad5b5ece68efaf",
  "translation_date": "2025-10-25T00:17:52+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "sl"
}
-->
# Osnove JavaScripta: Podatkovni tipi

![Osnove JavaScripta - Podatkovni tipi](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.sl.png)
> Sketchnote avtorja [Tomomi Imura](https://twitter.com/girlie_mac)

Podatkovni tipi so eden temeljnih konceptov v JavaScriptu, s katerimi se boste srečali v vsakem programu, ki ga napišete. Pomislite na podatkovne tipe kot na sistem razvrščanja, ki so ga uporabljali starodavni knjižničarji v Aleksandriji – imeli so posebna mesta za zvitke, ki so vsebovali poezijo, matematiko in zgodovinske zapise. JavaScript organizira informacije na podoben način, z različnimi kategorijami za različne vrste podatkov.

V tej lekciji bomo raziskali osnovne podatkovne tipe, ki omogočajo delovanje JavaScripta. Naučili se boste, kako ravnati s številkami, besedilom, vrednostmi true/false in razumeti, zakaj je izbira pravilnega tipa ključna za vaše programe. Ti koncepti se morda na začetku zdijo abstraktni, vendar bodo z vajo postali nekaj povsem naravnega.

Razumevanje podatkovnih tipov bo vse ostalo v JavaScriptu naredilo veliko bolj jasno. Tako kot morajo arhitekti razumeti različne gradbene materiale, preden zgradijo katedralo, bodo ti temelji podpirali vse, kar boste gradili v prihodnje.

## Predhodni kviz
[Predhodni kviz](https://ff-quizzes.netlify.app/web/)

Ta lekcija pokriva osnove JavaScripta, jezika, ki omogoča interaktivnost na spletu.

> To lekcijo lahko opravite na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Spremenljivke](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Spremenljivke v JavaScriptu")

[![Podatkovni tipi v JavaScriptu](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Podatkovni tipi v JavaScriptu")

> 🎥 Kliknite na zgornje slike za videoposnetke o spremenljivkah in podatkovnih tipih

Začnimo s spremenljivkami in podatkovnimi tipi, ki jih napolnjujejo!

## Spremenljivke

Spremenljivke so temeljni gradniki v programiranju. Tako kot označeni kozarci, ki so jih srednjeveški alkimisti uporabljali za shranjevanje različnih snovi, vam spremenljivke omogočajo shranjevanje informacij in jim dodelijo opisno ime, da jih lahko kasneje uporabite. Potrebujete shraniti starost nekoga? Shranite jo v spremenljivko z imenom `age`. Želite slediti uporabniškemu imenu? Shranite ga v spremenljivko z imenom `userName`.

Osredotočili se bomo na sodoben pristop k ustvarjanju spremenljivk v JavaScriptu. Te tehnike predstavljajo leta razvoja jezika in najboljše prakse, ki jih je razvila programska skupnost.

Ustvarjanje in **deklaracija** spremenljivke ima naslednjo sintakso **[ključna beseda] [ime]**. Sestavljena je iz dveh delov:

- **Ključna beseda**. Uporabite `let` za spremenljivke, ki se lahko spreminjajo, ali `const` za vrednosti, ki ostajajo enake.
- **Ime spremenljivke**, to je opisno ime, ki ga sami izberete.

✅ Ključna beseda `let` je bila uvedena v ES6 in daje vaši spremenljivki tako imenovano _blokovno področje veljavnosti_. Priporočljivo je, da uporabljate `let` ali `const` namesto starejše ključne besede `var`. O blokovnih področjih veljavnosti bomo podrobneje govorili v prihodnjih delih.

### Naloga - delo s spremenljivkami

1. **Deklarirajte spremenljivko**. Začnimo z ustvarjanjem naše prve spremenljivke:

    ```javascript
    let myVariable;
    ```

   **Kaj to doseže:**
   - To pove JavaScriptu, naj ustvari mesto za shranjevanje z imenom `myVariable`
   - JavaScript dodeli prostor v pomnilniku za to spremenljivko
   - Spremenljivka trenutno nima vrednosti (undefined)

2. **Dodelite vrednost**. Zdaj pa nekaj shranimo v našo spremenljivko:

    ```javascript
    myVariable = 123;
    ```

   **Kako deluje dodelitev:**
   - Operater `=` dodeli vrednost 123 naši spremenljivki
   - Spremenljivka zdaj vsebuje to vrednost namesto da bi bila undefined
   - To vrednost lahko uporabite v svoji kodi z uporabo `myVariable`

   > Opomba: uporaba `=` v tej lekciji pomeni, da uporabljamo "operater dodelitve", ki se uporablja za nastavitev vrednosti spremenljivki. Ne označuje enakosti.

3. **Naredite to pametno**. Pravzaprav združimo ti dve koraka:

    ```javascript
    let myVariable = 123;
    ```

    **Ta pristop je bolj učinkovit:**
    - Deklarirate spremenljivko in ji dodelite vrednost v eni izjavi
    - To je standardna praksa med razvijalci
    - Zmanjša dolžino kode, hkrati pa ohranja jasnost

4. **Premislite si**. Kaj pa, če želimo shraniti drugo številko?

   ```javascript
   myVariable = 321;
   ```

   **Razumevanje ponovne dodelitve:**
   - Spremenljivka zdaj vsebuje 321 namesto 123
   - Prejšnja vrednost je zamenjana – spremenljivke shranjujejo le eno vrednost naenkrat
   - Ta spremenljivost je ključna značilnost spremenljivk, deklariranih z `let`

   ✅ Poskusite! JavaScript lahko napišete kar v svojem brskalniku. Odprite okno brskalnika in pojdite na Orodja za razvijalce. V konzoli boste našli poziv; vnesite `let myVariable = 123`, pritisnite enter, nato vnesite `myVariable`. Kaj se zgodi? Opomba, več o teh konceptih boste izvedeli v naslednjih lekcijah.

## Konstante

Včasih morate shraniti informacije, ki se med izvajanjem programa nikoli ne smejo spremeniti. Pomislite na konstante kot na matematična načela, ki jih je Euclid vzpostavil v stari Grčiji – ko so bila dokazana in dokumentirana, so ostala nespremenjena za vse prihodnje reference.

Konstante delujejo podobno kot spremenljivke, vendar z pomembno omejitvijo: ko jim dodelite vrednost, je ni mogoče spremeniti. Ta nespremenljivost pomaga preprečiti nenamerne spremembe ključnih vrednosti v vašem programu.

Deklaracija in inicializacija konstante sledi istim konceptom kot spremenljivka, z izjemo ključne besede `const`. Konstante so običajno deklarirane z velikimi črkami.

```javascript
const MY_VARIABLE = 123;
```

**Kaj ta koda naredi:**
- **Ustvari** konstanto z imenom `MY_VARIABLE` in vrednostjo 123
- **Uporablja** konvencijo poimenovanja z velikimi črkami za konstante
- **Preprečuje** kakršne koli prihodnje spremembe te vrednosti

Konstante imajo dve glavni pravili:

- **Takoj jim morate dodeliti vrednost** – prazne konstante niso dovoljene!
- **Te vrednosti nikoli ne morete spremeniti** – JavaScript bo vrgel napako, če poskusite. Poglejmo, kaj to pomeni:

   **Preprosta vrednost** - Naslednje NI dovoljeno:
   
      ```javascript
      const PI = 3;
      PI = 4; // ni dovoljeno
      ```

   **Kaj si morate zapomniti:**
   - **Poskusi** ponovne dodelitve konstante bodo povzročili napako
   - **Ščiti** pomembne vrednosti pred nenamernimi spremembami
   - **Zagotavlja**, da vrednost ostane dosledna skozi celoten program
 
   **Referenca objekta je zaščitena** - Naslednje NI dovoljeno:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // ni dovoljeno
      ```

   **Razumevanje teh konceptov:**
   - **Preprečuje** zamenjavo celotnega objekta z novim
   - **Ščiti** referenco na izvirni objekt
   - **Ohranja** identiteto objekta v pomnilniku

    **Vrednost objekta ni zaščitena** - Naslednje JE dovoljeno:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // dovoljeno
      ```

      **Razčlenitev, kaj se tukaj zgodi:**
      - **Spremeni** vrednost lastnosti znotraj objekta
      - **Ohranja** isto referenco objekta
      - **Pokaže**, da se vsebina objekta lahko spremeni, medtem ko referenca ostaja nespremenjena

   > Opomba, `const` pomeni, da je referenca zaščitena pred ponovno dodelitvijo. Vrednost pa ni _nespremenljiva_ in se lahko spremeni, še posebej, če gre za kompleksno strukturo, kot je objekt.

## Podatkovni tipi

JavaScript organizira informacije v različne kategorije, imenovane podatkovni tipi. Ta koncept odraža, kako so starodavni učenjaki kategorizirali znanje – Aristotel je razlikoval med različnimi vrstami razmišljanja, saj je vedel, da logična načela ni mogoče enotno uporabiti za poezijo, matematiko in naravno filozofijo.

Podatkovni tipi so pomembni, ker različne operacije delujejo z različnimi vrstami informacij. Tako kot ne morete izvajati aritmetike na imenu osebe ali abecedno razvrstiti matematične enačbe, JavaScript zahteva ustrezen podatkovni tip za vsako operacijo. Razumevanje tega preprečuje napake in naredi vašo kodo bolj zanesljivo.

Spremenljivke lahko shranjujejo različne vrste vrednosti, kot so številke in besedilo. Te različne vrste vrednosti so znane kot **podatkovni tipi**. Podatkovni tipi so pomemben del razvoja programske opreme, saj pomagajo razvijalcem pri odločanju, kako naj bo koda napisana in kako naj programska oprema deluje. Poleg tega imajo nekateri podatkovni tipi edinstvene značilnosti, ki pomagajo preoblikovati ali pridobiti dodatne informacije iz vrednosti.

✅ Podatkovni tipi se imenujejo tudi primitivni podatkovni tipi JavaScripta, saj so najnižji nivo podatkovnih tipov, ki jih jezik ponuja. Obstaja 7 primitivnih podatkovnih tipov: string, number, bigint, boolean, undefined, null in symbol. Vzemite si trenutek in si predstavljajte, kaj vsak od teh primitivov predstavlja. Kaj je `zebra`? Kaj pa `0`? `true`?

### Številke

Številke so najbolj enostaven podatkovni tip v JavaScriptu. Ne glede na to, ali delate s celimi števili, kot je 42, decimalnimi števili, kot je 3.14, ali negativnimi števili, kot je -5, JavaScript z njimi ravna enotno.

Se spomnite naše spremenljivke od prej? Tistih 123, ki smo jih shranili, je pravzaprav podatkovni tip številka:

```javascript
let myVariable = 123;
```

**Ključne značilnosti:**
- JavaScript samodejno prepozna številske vrednosti
- Z uporabo teh spremenljivk lahko izvajate matematične operacije
- Ni potrebna izrecna deklaracija tipa

Spremenljivke lahko shranjujejo vse vrste številk, vključno z decimalnimi ali negativnimi števili. Številke se lahko uporabljajo tudi z aritmetičnimi operaterji, ki jih bomo obravnavali v [naslednjem razdelku](../../../../2-js-basics/1-data-types).

### Aritmetični operaterji

Aritmetični operaterji vam omogočajo izvajanje matematičnih izračunov v JavaScriptu. Ti operaterji sledijo istim načelom, ki so jih matematiki uporabljali stoletja – istim simbolom, ki so se pojavili v delih učenjakov, kot je Al-Khwarizmi, ki je razvil algebrsko notacijo.

Operaterji delujejo, kot bi pričakovali od tradicionalne matematike: plus za seštevanje, minus za odštevanje in tako naprej.

Obstaja več vrst operaterjev za uporabo pri izvajanju aritmetičnih funkcij, nekateri so navedeni tukaj:

| Simbol | Opis                                                                      | Primer                          |
| ------ | ------------------------------------------------------------------------ | -------------------------------- |
| `+`    | **Seštevanje**: Izračuna vsoto dveh števil                              | `1 + 2 //pričakovan odgovor je 3`   |
| `-`    | **Odštevanje**: Izračuna razliko med dvema številoma                     | `1 - 2 //pričakovan odgovor je -1`  |
| `*`    | **Množenje**: Izračuna produkt dveh števil                               | `1 * 2 //pričakovan odgovor je 2`   |
| `/`    | **Deljenje**: Izračuna količnik dveh števil                              | `1 / 2 //pričakovan odgovor je 0.5` |
| `%`    | **Ostanek**: Izračuna ostanek pri deljenju dveh števil                   | `1 % 2 //pričakovan odgovor je 1`   |

✅ Poskusite! Poskusite aritmetično operacijo v konzoli vašega brskalnika. Vas rezultati presenetijo?

### Nizi

V JavaScriptu je besedilne podatke predstavljeno kot nize. Izraz "niz" izhaja iz koncepta znakov, povezanih skupaj v zaporedju, podobno kot so pisarji v srednjeveških samostanih povezovali črke, da bi oblikovali besede in stavke v svojih rokopisih.

Nizi so temeljni za spletni razvoj. Vsak kos besedila, prikazan na spletni strani – uporabniška imena, oznake gumbov, sporočila o napakah, vsebina – je obravnavan kot podatkovni tip niz. Razumevanje nizov je bistveno za ustvarjanje funkcionalnih uporabniških vmesnikov.

Nizi so nizi znakov, ki se nahajajo med enojnimi ali dvojnimi narekovaji.

```javascript
'This is a string'
"This is also a string"
let myString = 'This is a string value stored in a variable';
```

**Razumevanje teh konceptov:**
- **Uporablja** bodisi enojne `'` ali dvojne `"` narekovaje za definiranje nizov
- **Shranjuje** besedilne podatke, ki lahko vključujejo črke, številke in simbole
- **Dodeljuje** vrednosti nizov spremenljivkam za kasnejšo uporabo
- **Zahteva** narekovaje za razlikovanje besedila od imen spremenljivk

Ne pozabite uporabiti narekovajev pri pisanju niza, sicer bo JavaScript domneval, da gre za ime spremenljivke.

### Oblikovanje nizov

Manipulacija z nizi vam omogoča združevanje besedilnih elementov, vključevanje spremenljivk in ustvarjanje dinamične vsebine, ki se odziva na stanje programa. Ta tehnika vam omogoča, da besedilo sestavite programsko.

Pogosto morate združiti več nizov – ta proces se imenuje konkatenacija.

Za **konkatenacijo** dveh ali več nizov, ali njihovo združitev, uporabite operater `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
```

**Korak za korakom, kaj se dogaja:**
- **Združuje** več nizov z uporabo operaterja `+`
- **Povezuje** nize neposredno skupaj brez presledkov v prvem primeru
- **Dodaja** presledke `" "` med nizi za boljšo berljivost
- **Vstavi** ločila, kot so vejice, za pravilno oblikovanje

✅ Zakaj v JavaScriptu `1 + 1 = 2`, medtem ko `'1' + '1' = 11?` Razmislite o tem. Kaj pa `'1' + 1`?

**Predloge nizov** so še en način za oblikovanje nizov, razen da se namesto narekovajev uporablja poševnica nazaj. Vse, kar ni navadno besedilo, mora biti postavljeno v oklepaje `${ }`. To vključuje vse spremenljivke, ki so lahko nizi.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

**Razumevanje vsakega dela:**
- **Uporablja** poševnice nazaj `` ` `` namesto običajnih narekovajev za ustvarjanje predlog nizov
- **Vgrajuje** spremenljivke neposredno z uporabo sintakse `${}`
- **Ohranja** presledke in oblikovanje točno tako, kot je napisano
- **Ponuja** čistejši način za ustvarjanje kompleks
Svoje cilje oblikovanja lahko dosežete z obema metodama, vendar predloge nizov spoštujejo vse presledke in prelome vrstic.

✅ Kdaj bi uporabili predlogo niza namesto navadnega niza?

### Logične vrednosti (Booleans)

Logične vrednosti predstavljajo najpreprostejšo obliko podatkov: lahko imajo le eno od dveh vrednosti – `true` ali `false`. Ta binarni logični sistem izvira iz dela Georgea Boolea, matematika iz 19. stoletja, ki je razvil Boolovo algebro.

Kljub svoji preprostosti so logične vrednosti ključne za logiko programiranja. Omogočajo vaši kodi, da sprejema odločitve na podlagi pogojev – ali je uporabnik prijavljen, ali je bil gumb kliknjen ali ali so izpolnjeni določeni kriteriji.

Logične vrednosti so lahko le dve: `true` ali `false`. Logične vrednosti pomagajo pri odločanju, katere vrstice kode naj se izvedejo, ko so izpolnjeni določeni pogoji. V mnogih primerih [operatorji](../../../../2-js-basics/1-data-types) pomagajo pri nastavitvi vrednosti logične vrednosti, pogosto pa boste opazili in pisali spremenljivke, ki se inicializirajo ali njihove vrednosti posodabljajo z operatorjem.

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

**V zgornjem primeru smo:**
- **Ustvarili** spremenljivko, ki shranjuje logično vrednost `true`
- **Prikazali**, kako shraniti logično vrednost `false`
- **Uporabili** točne ključne besede `true` in `false` (brez narekovajev)
- **Pripravili** te spremenljivke za uporabo v pogojnih stavkih

✅ Spremenljivka se lahko šteje za 'resnično' (truthy), če se oceni kot logična vrednost `true`. Zanimivo je, da so v JavaScriptu [vse vrednosti resnične, razen če so opredeljene kot lažne](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## Izziv z GitHub Copilot Agent 🚀

Uporabite način Agent za dokončanje naslednjega izziva:

**Opis:** Ustvarite upravitelja osebnih informacij, ki prikazuje vse tipe podatkov JavaScripta, ki ste se jih naučili v tej lekciji, medtem ko obravnava scenarije resničnega sveta.

**Navodilo:** Zgradite JavaScript program, ki ustvari objekt uporabniškega profila, ki vsebuje: ime osebe (string), starost (number), status študenta (boolean), najljubše barve kot array in objekt naslova s lastnostmi ulica, mesto in poštna številka. Vključite funkcije za prikaz informacij o profilu in posodabljanje posameznih polj. Poskrbite, da boste prikazali združevanje nizov, predloge nizov, aritmetične operacije s starostjo in logično vrednost za status študenta.

Več o [načinu Agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) si preberite tukaj.

## 🚀 Izziv

JavaScript ima nekatere vedenjske značilnosti, ki lahko presenetijo razvijalce. Tukaj je klasičen primer za raziskovanje: poskusite vtipkati to v konzolo brskalnika: `let age = 1; let Age = 2; age == Age` in opazujte rezultat. Vrne `false` – ali lahko ugotovite, zakaj?

To je eden izmed mnogih vedenj JavaScripta, ki jih je vredno razumeti. Poznavanje teh posebnosti vam bo pomagalo pisati zanesljivejšo kodo in učinkoviteje odpravljati težave.

## Kviz po predavanju
[Kviz po predavanju](https://ff-quizzes.netlify.app)

## Pregled in samostojno učenje

Oglejte si [ta seznam vaj za JavaScript](https://css-tricks.com/snippets/javascript/) in poskusite eno. Kaj ste se naučili?

## Naloga

[Praksa tipov podatkov](assignment.md)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne odgovarjamo za morebitna nesporazumevanja ali napačne razlage, ki izhajajo iz uporabe tega prevoda.