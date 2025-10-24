<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0092f6533ae3ec3adad5b5ece68efaf",
  "translation_date": "2025-10-23T22:15:52+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "no"
}
-->
# Grunnleggende JavaScript: Datatyper

![Grunnleggende JavaScript - Datatyper](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.no.png)
> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

Datatyper er et av de grunnleggende konseptene i JavaScript som du vil møte i hvert program du skriver. Tenk på datatyper som arkivsystemet som gamle bibliotekarer i Alexandria brukte – de hadde spesifikke steder for skriftruller som inneholdt poesi, matematikk og historiske opptegnelser. JavaScript organiserer informasjon på en lignende måte med ulike kategorier for forskjellige typer data.

I denne leksjonen skal vi utforske de viktigste datatypene som gjør at JavaScript fungerer. Du vil lære hvordan du håndterer tall, tekst, sanne/falske verdier, og forstå hvorfor det er viktig å velge riktig type for programmene dine. Disse konseptene kan virke abstrakte i starten, men med øvelse vil de bli en naturlig del av programmeringen.

Å forstå datatyper vil gjøre alt annet i JavaScript mye klarere. Akkurat som arkitekter må forstå ulike byggematerialer før de konstruerer en katedral, vil disse grunnleggende prinsippene støtte alt du bygger fremover.

## Quiz før leksjonen
[Quiz før leksjonen](https://ff-quizzes.netlify.app/web/)

Denne leksjonen dekker det grunnleggende i JavaScript, språket som gir interaktivitet på nettet.

> Du kan ta denne leksjonen på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Variabler](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variabler i JavaScript")

[![Datatyper i JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Datatyper i JavaScript")

> 🎥 Klikk på bildene ovenfor for videoer om variabler og datatyper

La oss begynne med variabler og datatypene som fyller dem!

## Variabler

Variabler er grunnleggende byggesteiner i programmering. Akkurat som merkede krukker som middelalderens alkymister brukte til å lagre ulike stoffer, lar variabler deg lagre informasjon og gi den et beskrivende navn slik at du kan referere til det senere. Trenger du å huske noens alder? Lagre det i en variabel kalt `age`. Vil du holde styr på en brukers navn? Lagre det i en variabel kalt `userName`.

Vi skal fokusere på den moderne tilnærmingen til å opprette variabler i JavaScript. Teknikken du lærer her representerer år med språkutvikling og beste praksis utviklet av programmeringssamfunnet.

Å opprette og **deklarere** en variabel har følgende syntaks **[nøkkelord] [navn]**. Det består av to deler:

- **Nøkkelord**. Bruk `let` for variabler som kan endres, eller `const` for verdier som forblir de samme.
- **Variabelnavnet**, dette er et beskrivende navn du velger selv.

✅ Nøkkelordet `let` ble introdusert i ES6 og gir variabelen din en såkalt _blokk-scope_. Det anbefales at du bruker `let` eller `const` i stedet for det eldre nøkkelordet `var`. Vi vil dekke blokk-scope mer i dybden i fremtidige deler.

### Oppgave - arbeid med variabler

1. **Deklarer en variabel**. La oss starte med å opprette vår første variabel:

    ```javascript
    let myVariable;
    ```

   **Hva dette oppnår:**
   - Dette forteller JavaScript å opprette et lagringssted kalt `myVariable`
   - JavaScript tildeler plass i minnet for denne variabelen
   - Variabelen har foreløpig ingen verdi (undefined)

2. **Gi den en verdi**. La oss nå legge noe inn i variabelen vår:

    ```javascript
    myVariable = 123;
    ```

   **Hvordan tildeling fungerer:**
   - Operatoren `=` tildeler verdien 123 til variabelen vår
   - Variabelen inneholder nå denne verdien i stedet for å være undefined
   - Du kan referere til denne verdien gjennom hele koden din ved å bruke `myVariable`

   > Merk: bruken av `=` i denne leksjonen betyr at vi bruker en "tildelingsoperator", brukt for å sette en verdi til en variabel. Det betyr ikke likhet.

3. **Gjør det på den smarte måten**. Faktisk, la oss kombinere de to trinnene:

    ```javascript
    let myVariable = 123;
    ```

    **Denne tilnærmingen er mer effektiv:**
    - Du deklarerer variabelen og tildeler en verdi i én setning
    - Dette er standard praksis blant utviklere
    - Det reduserer kodelengden samtidig som det opprettholder klarhet

4. **Endre mening**. Hva om vi vil lagre et annet tall?

   ```javascript
   myVariable = 321;
   ```

   **Forstå omfordeling:**
   - Variabelen inneholder nå 321 i stedet for 123
   - Den forrige verdien er erstattet – variabler lagrer bare én verdi om gangen
   - Denne mutabiliteten er en nøkkelfunksjon for variabler deklarert med `let`

   ✅ Prøv det! Du kan skrive JavaScript direkte i nettleseren din. Åpne et nettleservindu og naviger til utviklerverktøy. I konsollen finner du en prompt; skriv `let myVariable = 123`, trykk enter, og skriv deretter `myVariable`. Hva skjer? Merk, du vil lære mer om disse konseptene i senere leksjoner.

## Konstanter

Noen ganger trenger du å lagre informasjon som aldri skal endres under programutførelsen. Tenk på konstanter som de matematiske prinsippene som Euklid etablerte i det gamle Hellas – når de først er bevist og dokumentert, forblir de faste for all fremtidig referanse.

Konstanter fungerer på samme måte som variabler, men med en viktig begrensning: når du har tildelt verdien deres, kan den ikke endres. Denne uforanderligheten hjelper til med å forhindre utilsiktede endringer av kritiske verdier i programmet ditt.

Deklarasjon og initialisering av en konstant følger de samme prinsippene som en variabel, med unntak av nøkkelordet `const`. Konstanter blir vanligvis deklarert med store bokstaver.

```javascript
const MY_VARIABLE = 123;
```

**Dette gjør koden:**
- **Oppretter** en konstant kalt `MY_VARIABLE` med verdien 123
- **Bruker** store bokstaver som navnekonvensjon for konstanter
- **Forhindrer** fremtidige endringer av denne verdien

Konstanter har to hovedregler:

- **Du må gi dem en verdi med en gang** – ingen tomme konstanter er tillatt!
- **Du kan aldri endre den verdien** – JavaScript vil gi en feil hvis du prøver. La oss se hva jeg mener:

   **Enkel verdi** - Følgende er IKKE tillatt:
   
      ```javascript
      const PI = 3;
      PI = 4; // ikke tillatt
      ```

   **Hva du må huske:**
   - **Forsøk** på å tilordne en ny verdi til en konstant vil føre til en feil
   - **Beskytter** viktige verdier mot utilsiktede endringer
   - **Sikrer** at verdien forblir konsistent gjennom hele programmet
 
   **Objektreferanse er beskyttet** - Følgende er IKKE tillatt:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // ikke tillatt
      ```

   **Forstå disse konseptene:**
   - **Forhindrer** å erstatte hele objektet med et nytt
   - **Beskytter** referansen til det opprinnelige objektet
   - **Opprettholder** objektets identitet i minnet

    **Objektverdi er ikke beskyttet** - Følgende ER tillatt:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // tillatt
      ```

      **Hva som skjer her:**
      - **Endrer** egenskapsverdien inne i objektet
      - **Beholder** den samme objektreferansen
      - **Viser** at objektinnhold kan endres mens referansen forblir konstant

   > Merk, en `const` betyr at referansen er beskyttet mot omfordeling. Verdien er derimot ikke _uforanderlig_ og kan endres, spesielt hvis det er en kompleks konstruksjon som et objekt.

## Datatyper

JavaScript organiserer informasjon i ulike kategorier kalt datatyper. Dette konseptet speiler hvordan gamle lærde kategoriserte kunnskap – Aristoteles skilte mellom ulike typer resonnement, og visste at logiske prinsipper ikke kunne brukes likt på poesi, matematikk og naturfilosofi.

Datatyper er viktige fordi ulike operasjoner fungerer med ulike typer informasjon. Akkurat som du ikke kan utføre aritmetikk på en persons navn eller alfabetisere en matematisk ligning, krever JavaScript riktig datatype for hver operasjon. Å forstå dette forhindrer feil og gjør koden din mer pålitelig.

Variabler kan lagre mange forskjellige typer verdier, som tall og tekst. Disse ulike typene verdier er kjent som **datatyper**. Datatyper er en viktig del av programvareutvikling fordi det hjelper utviklere med å ta beslutninger om hvordan koden skal skrives og hvordan programvaren skal fungere. Videre har noen datatyper unike egenskaper som hjelper til med å transformere eller hente ut tilleggsinformasjon fra en verdi.

✅ Datatyper kalles også JavaScript data-primitiver, da de er de laveste nivå datatypene som tilbys av språket. Det finnes 7 primitive datatyper: string, number, bigint, boolean, undefined, null og symbol. Ta et øyeblikk til å visualisere hva hver av disse primitivene kan representere. Hva er en `zebra`? Hva med `0`? `true`?

### Tall

Tall er den mest rett frem datatypen i JavaScript. Enten du jobber med hele tall som 42, desimaltall som 3.14, eller negative tall som -5, håndterer JavaScript dem på en enhetlig måte.

Husker du variabelen vår fra tidligere? Den 123 vi lagret var faktisk en tall-datatype:

```javascript
let myVariable = 123;
```

**Viktige egenskaper:**
- JavaScript gjenkjenner automatisk numeriske verdier
- Du kan utføre matematiske operasjoner med disse variablene
- Ingen eksplisitt typeerklæring er nødvendig

Variabler kan lagre alle typer tall, inkludert desimaltall eller negative tall. Tall kan også brukes med aritmetiske operatorer, dekket i [neste seksjon](../../../../2-js-basics/1-data-types).

### Aritmetiske operatorer

Aritmetiske operatorer lar deg utføre matematiske beregninger i JavaScript. Disse operatorene følger de samme prinsippene som matematikere har brukt i århundrer – de samme symbolene som dukket opp i verkene til lærde som Al-Khwarizmi, som utviklet algebraisk notasjon.

Operatorene fungerer som du forventer fra tradisjonell matematikk: pluss for addisjon, minus for subtraksjon, og så videre.

Det finnes flere typer operatorer å bruke når du utfører aritmetiske funksjoner, og noen er listet her:

| Symbol | Beskrivelse                                                              | Eksempel                          |
| ------ | ------------------------------------------------------------------------ | --------------------------------- |
| `+`    | **Addisjon**: Beregner summen av to tall                                | `1 + 2 //forventet svar er 3`     |
| `-`    | **Subtraksjon**: Beregner differansen mellom to tall                     | `1 - 2 //forventet svar er -1`    |
| `*`    | **Multiplikasjon**: Beregner produktet av to tall                        | `1 * 2 //forventet svar er 2`     |
| `/`    | **Divisjon**: Beregner kvotienten av to tall                             | `1 / 2 //forventet svar er 0.5`   |
| `%`    | **Rest**: Beregner resten fra divisjonen av to tall                      | `1 % 2 //forventet svar er 1`     |

✅ Prøv det! Prøv en aritmetisk operasjon i nettleserens konsoll. Overrasker resultatene deg?

### Strenger

I JavaScript representeres tekstdata som strenger. Begrepet "streng" kommer fra konseptet med tegn som er strukket sammen i en sekvens, omtrent som måten skrivere i middelalderklostre koblet bokstaver sammen for å danne ord og setninger i sine manuskripter.

Strenger er grunnleggende for webutvikling. Hver tekstbit som vises på et nettsted – brukernavn, knappetekster, feilmeldinger, innhold – håndteres som strengdata. Å forstå strenger er avgjørende for å lage funksjonelle brukergrensesnitt.

Strenger er sett med tegn som er plassert mellom enkelt- eller dobbeltanførselstegn.

```javascript
'This is a string'
"This is also a string"
let myString = 'This is a string value stored in a variable';
```

**Forstå disse konseptene:**
- **Bruker** enten enkeltanførselstegn `'` eller dobbeltanførselstegn `"` for å definere strenger
- **Lagrer** tekstdata som kan inkludere bokstaver, tall og symboler
- **Tildeler** strengverdier til variabler for senere bruk
- **Krever** anførselstegn for å skille tekst fra variabelnavn

Husk å bruke anførselstegn når du skriver en streng, ellers vil JavaScript anta at det er et variabelnavn.

### Formatering av strenger

Strengmanipulering lar deg kombinere tekstelementer, inkludere variabler og lage dynamisk innhold som reagerer på programtilstanden. Denne teknikken gjør det mulig å konstruere tekst programmessig.

Ofte trenger du å slå sammen flere strenger – denne prosessen kalles sammenkobling.

For å **sammenkoble** to eller flere strenger, eller slå dem sammen, bruk operatoren `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
```

**Trinn for trinn, her er hva som skjer:**
- **Kombinerer** flere strenger ved hjelp av operatoren `+`
- **Slår sammen** strenger direkte uten mellomrom i det første eksempelet
- **Legger til** mellomrom `" "` mellom strenger for lesbarhet
- **Setter inn** tegnsetting som komma for å lage riktig formatering

✅ Hvorfor er `1 + 1 = 2` i JavaScript, men `'1' + '1' = 11?` Tenk over det. Hva med `'1' + 1`?

**Maluttrykk** er en annen måte å formatere strenger på, bortsett fra at det brukes baktegn i stedet for anførselstegn. Alt som ikke er ren tekst må plasseres inne i plassholdere `${ }`. Dette inkluderer eventuelle variabler som kan være strenger.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

**La oss forstå hver del:**
- **Bruker** baktegn `` ` `` i stedet for vanlige anførselstegn for å lage maluttrykk
- **Inkluderer** variabler direkte ved hjelp av `${}` plassholder-syntaks
- **Bevarer** mellomrom og formatering akkurat som skrevet
- **Gir** en mer elegant måte å lage komplekse strenger med variabler
Du kan oppnå dine formateringsmål med begge metoder, men mal-litteraler vil respektere alle mellomrom og linjeskift.

✅ Når bør du bruke en mal-litteral kontra en vanlig streng?

### Booleske verdier

Booleske verdier representerer den enkleste formen for data: de kan bare ha én av to verdier – `true` eller `false`. Dette binære logikksystemet stammer fra arbeidet til George Boole, en matematiker fra 1800-tallet som utviklet boolsk algebra.

Til tross for sin enkelhet er booleske verdier essensielle for programlogikk. De gjør det mulig for koden din å ta avgjørelser basert på betingelser – om en bruker er logget inn, om en knapp ble klikket, eller om visse kriterier er oppfylt.

Booleske verdier kan bare ha to verdier: `true` eller `false`. Booleske verdier kan hjelpe med å avgjøre hvilke linjer med kode som skal kjøres når visse betingelser er oppfylt. I mange tilfeller hjelper [operatorer](../../../../2-js-basics/1-data-types) med å sette verdien til en boolsk variabel, og du vil ofte legge merke til og skrive variabler som blir initialisert eller oppdatert med en operator.

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

**I eksempelet ovenfor har vi:**
- **Opprettet** en variabel som lagrer den boolske verdien `true`
- **Demonstrert** hvordan man lagrer den boolske verdien `false`
- **Brukt** de eksakte nøkkelordene `true` og `false` (ingen anførselstegn nødvendig)
- **Forberedt** disse variablene for bruk i betingede utsagn

✅ En variabel kan anses som 'truthy' hvis den evalueres til en boolsk `true`. Interessant nok, i JavaScript er [alle verdier truthy med mindre de er definert som falsy](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## GitHub Copilot Agent Challenge 🚀

Bruk Agent-modus for å fullføre følgende utfordring:

**Beskrivelse:** Lag en personlig informasjonsbehandler som demonstrerer alle JavaScript-datatypene du har lært i denne leksjonen, samtidig som den håndterer realistiske datascenarier.

**Oppgave:** Lag et JavaScript-program som oppretter et brukerprofilobjekt som inneholder: en persons navn (streng), alder (nummer), studentstatus (boolsk), favorittfarger som en array, og et adresseobjekt med egenskaper for gate, by og postnummer. Inkluder funksjoner for å vise profilinformasjon og oppdatere individuelle felt. Sørg for å demonstrere strengsammenkobling, mal-litteraler, aritmetiske operasjoner med alder, og boolsk logikk for studentstatus.

Lær mer om [agent-modus](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## 🚀 Utfordring

JavaScript har noen oppførselstrekk som kan overraske utviklere. Her er et klassisk eksempel å utforske: prøv å skrive dette i nettleserkonsollen din: `let age = 1; let Age = 2; age == Age` og observer resultatet. Det returnerer `false` – kan du finne ut hvorfor?

Dette representerer en av mange JavaScript-oppførselstrekk som er verdt å forstå. Kjennskap til disse særegenhetene vil hjelpe deg med å skrive mer pålitelig kode og feilsøke problemer mer effektivt.

## Quiz etter leksjonen
[Quiz etter leksjonen](https://ff-quizzes.netlify.app)

## Gjennomgang & Selvstudium

Ta en titt på [denne listen over JavaScript-øvelser](https://css-tricks.com/snippets/javascript/) og prøv en. Hva lærte du?

## Oppgave

[Øv på datatyper](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.