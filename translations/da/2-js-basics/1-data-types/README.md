<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0092f6533ae3ec3adad5b5ece68efaf",
  "translation_date": "2025-10-23T21:52:10+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "da"
}
-->
# JavaScript Grundlæggende: Datatyper

![JavaScript Grundlæggende - Datatyper](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.da.png)
> Sketchnote af [Tomomi Imura](https://twitter.com/girlie_mac)

Datatyper er en af de grundlæggende koncepter i JavaScript, som du vil støde på i hvert program, du skriver. Tænk på datatyper som det arkiveringssystem, som de gamle bibliotekarer i Alexandria brugte – de havde specifikke steder til skriftruller med poesi, matematik og historiske optegnelser. JavaScript organiserer information på en lignende måde med forskellige kategorier for forskellige slags data.

I denne lektion vil vi udforske de centrale datatyper, der får JavaScript til at fungere. Du vil lære at håndtere tal, tekst, sand/falsk værdier og forstå, hvorfor det er vigtigt at vælge den korrekte type for dine programmer. Disse koncepter kan virke abstrakte i starten, men med øvelse vil de blive en naturlig del af din programmering.

At forstå datatyper vil gøre alt andet i JavaScript meget klarere. Ligesom arkitekter skal forstå forskellige byggematerialer, før de konstruerer en katedral, vil disse grundlæggende begreber støtte alt, hvad du bygger fremover.

## Quiz før lektionen
[Quiz før lektionen](https://ff-quizzes.netlify.app/web/)

Denne lektion dækker det grundlæggende i JavaScript, sproget der giver interaktivitet på nettet.

> Du kan tage denne lektion på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Variabler](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variabler i JavaScript")

[![Datatyper i JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Datatyper i JavaScript")

> 🎥 Klik på billederne ovenfor for videoer om variabler og datatyper

Lad os starte med variabler og de datatyper, der fylder dem!

## Variabler

Variabler er fundamentale byggesten i programmering. Ligesom de mærkede krukker, som middelalderens alkymister brugte til at opbevare forskellige stoffer, giver variabler dig mulighed for at gemme information og give den et beskrivende navn, så du kan referere til det senere. Skal du huske en persons alder? Gem det i en variabel kaldet `age`. Vil du holde styr på en brugers navn? Gem det i en variabel kaldet `userName`.

Vi vil fokusere på den moderne tilgang til at oprette variabler i JavaScript. De teknikker, du lærer her, repræsenterer års udvikling af sproget og bedste praksis udviklet af programmeringsfællesskabet.

At oprette og **deklarere** en variabel har følgende syntaks **[nøgleord] [navn]**. Det består af to dele:

- **Nøgleord**. Brug `let` til variabler, der kan ændre sig, eller `const` til værdier, der forbliver de samme.
- **Variabelnavnet**, dette er et beskrivende navn, du selv vælger.

✅ Nøgleordet `let` blev introduceret i ES6 og giver din variabel en såkaldt _blokscope_. Det anbefales, at du bruger `let` eller `const` i stedet for det ældre nøgleord `var`. Vi vil dække blokscope mere detaljeret i fremtidige dele.

### Opgave - arbejde med variabler

1. **Deklarer en variabel**. Lad os starte med at oprette vores første variabel:

    ```javascript
    let myVariable;
    ```

   **Hvad dette opnår:**
   - Dette fortæller JavaScript at oprette en lagerplads kaldet `myVariable`
   - JavaScript allokerer plads i hukommelsen til denne variabel
   - Variablen har i øjeblikket ingen værdi (undefined)

2. **Giv den en værdi**. Lad os nu placere noget i vores variabel:

    ```javascript
    myVariable = 123;
    ```

   **Hvordan tildeling fungerer:**
   - Operatøren `=` tildeler værdien 123 til vores variabel
   - Variablen indeholder nu denne værdi i stedet for at være undefined
   - Du kan referere til denne værdi i hele din kode ved hjælp af `myVariable`

   > Bemærk: brugen af `=` i denne lektion betyder, at vi bruger en "tildelingsoperator", der bruges til at sætte en værdi til en variabel. Det angiver ikke lighed.

3. **Gør det på den smarte måde**. Lad os faktisk kombinere de to trin:

    ```javascript
    let myVariable = 123;
    ```

    **Denne tilgang er mere effektiv:**
    - Du deklarerer variablen og tildeler en værdi i én erklæring
    - Dette er standardpraksis blandt udviklere
    - Det reducerer kodelængden, mens det opretholder klarhed

4. **Skift mening**. Hvad hvis vi vil gemme et andet nummer?

   ```javascript
   myVariable = 321;
   ```

   **Forståelse af gen-tildeling:**
   - Variablen indeholder nu 321 i stedet for 123
   - Den tidligere værdi erstattes – variabler gemmer kun én værdi ad gangen
   - Denne mutabilitet er den nøgleegenskab ved variabler, der er deklareret med `let`

   ✅ Prøv det! Du kan skrive JavaScript direkte i din browser. Åbn et browservindue og naviger til Developer Tools. I konsollen finder du en prompt; skriv `let myVariable = 123`, tryk på return, og skriv derefter `myVariable`. Hvad sker der? Bemærk, du vil lære mere om disse koncepter i de følgende lektioner.

## Konstanter

Nogle gange har du brug for at gemme information, der aldrig må ændres under programkørslen. Tænk på konstanter som de matematiske principper, som Euklid etablerede i det gamle Grækenland – når de først er bevist og dokumenteret, forbliver de faste for al fremtidig reference.

Konstanter fungerer på samme måde som variabler, men med en vigtig begrænsning: når du har tildelt deres værdi, kan den ikke ændres. Denne uforanderlighed hjælper med at forhindre utilsigtede ændringer af kritiske værdier i dit program.

Deklaration og initialisering af en konstant følger de samme koncepter som en variabel, med undtagelse af nøgleordet `const`. Konstanter deklareres typisk med store bogstaver.

```javascript
const MY_VARIABLE = 123;
```

**Hvad denne kode gør:**
- **Opretter** en konstant kaldet `MY_VARIABLE` med værdien 123
- **Bruger** store bogstaver som navnekonvention for konstanter
- **Forhindrer** fremtidige ændringer af denne værdi

Konstanter har to hovedregler:

- **Du skal give dem en værdi med det samme** – ingen tomme konstanter tilladt!
- **Du kan aldrig ændre den værdi** – JavaScript vil give en fejl, hvis du prøver. Lad os se, hvad jeg mener:

   **Simpel værdi** - Følgende er IKKE tilladt:
   
      ```javascript
      const PI = 3;
      PI = 4; // ikke tilladt
      ```

   **Hvad du skal huske:**
   - **Forsøg** på at gen-tildeling af en konstant vil forårsage en fejl
   - **Beskytter** vigtige værdier mod utilsigtede ændringer
   - **Sikrer** at værdien forbliver konsistent i hele dit program
 
   **Objektreference er beskyttet** - Følgende er IKKE tilladt:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // ikke tilladt
      ```

   **Forståelse af disse koncepter:**
   - **Forhindrer** at erstatte hele objektet med et nyt
   - **Beskytter** referencen til det oprindelige objekt
   - **Bevarer** objektets identitet i hukommelsen

    **Objektværdi er ikke beskyttet** - Følgende ER tilladt:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // tilladt
      ```

      **Hvad der sker her:**
      - **Ændrer** egenskabsværdien inde i objektet
      - **Bevarer** den samme objektreference
      - **Viser** at objektindhold kan ændres, mens referencen forbliver konstant

   > Bemærk, en `const` betyder, at referencen er beskyttet mod gen-tildeling. Værdien er dog ikke _uforanderlig_ og kan ændre sig, især hvis det er en kompleks konstruktion som et objekt.

## Datatyper

JavaScript organiserer information i forskellige kategorier kaldet datatyper. Dette koncept afspejler, hvordan gamle lærde kategoriserede viden – Aristoteles skelnede mellem forskellige typer af ræsonnement, idet han vidste, at logiske principper ikke kunne anvendes ensartet på poesi, matematik og naturfilosofi.

Datatyper er vigtige, fordi forskellige operationer fungerer med forskellige slags information. Ligesom du ikke kan udføre aritmetik på en persons navn eller alfabetisere en matematisk ligning, kræver JavaScript den passende datatype for hver operation. At forstå dette forhindrer fejl og gør din kode mere pålidelig.

Variabler kan gemme mange forskellige typer værdier, såsom tal og tekst. Disse forskellige typer værdier er kendt som **datatyper**. Datatyper er en vigtig del af softwareudvikling, fordi det hjælper udviklere med at træffe beslutninger om, hvordan koden skal skrives, og hvordan softwaren skal køre. Desuden har nogle datatyper unikke funktioner, der hjælper med at transformere eller udtrække yderligere information fra en værdi.

✅ Datatyper kaldes også JavaScript data primitives, da de er de laveste niveau datatyper, der leveres af sproget. Der er 7 primitive datatyper: string, number, bigint, boolean, undefined, null og symbol. Tag et øjeblik til at visualisere, hvad hver af disse primitives kunne repræsentere. Hvad er en `zebra`? Hvad med `0`? `true`?

### Tal

Tal er den mest ligetil datatype i JavaScript. Uanset om du arbejder med hele tal som 42, decimaler som 3.14 eller negative tal som -5, håndterer JavaScript dem ensartet.

Husk vores variabel fra tidligere? Den 123, vi gemte, var faktisk en tal-datatype:

```javascript
let myVariable = 123;
```

**Vigtige egenskaber:**
- JavaScript genkender automatisk numeriske værdier
- Du kan udføre matematiske operationer med disse variabler
- Ingen eksplicit typeerklæring er nødvendig

Variabler kan gemme alle typer tal, inklusive decimaler eller negative tal. Tal kan også bruges med aritmetiske operatorer, som dækkes i [næste afsnit](../../../../2-js-basics/1-data-types).

### Aritmetiske Operatorer

Aritmetiske operatorer giver dig mulighed for at udføre matematiske beregninger i JavaScript. Disse operatorer følger de samme principper, som matematikere har brugt i århundreder – de samme symboler, der optrådte i værker af lærde som Al-Khwarizmi, der udviklede algebraisk notation.

Operatorerne fungerer, som du ville forvente fra traditionel matematik: plus for addition, minus for subtraktion og så videre.

Der er flere typer operatorer, du kan bruge, når du udfører aritmetiske funktioner, og nogle er listet her:

| Symbol | Beskrivelse                                                             | Eksempel                         |
| ------ | ----------------------------------------------------------------------- | -------------------------------- |
| `+`    | **Addition**: Beregner summen af to tal                                | `1 + 2 //forventet svar er 3`    |
| `-`    | **Subtraktion**: Beregner forskellen mellem to tal                     | `1 - 2 //forventet svar er -1`   |
| `*`    | **Multiplikation**: Beregner produktet af to tal                       | `1 * 2 //forventet svar er 2`    |
| `/`    | **Division**: Beregner kvotienten af to tal                            | `1 / 2 //forventet svar er 0.5`  |
| `%`    | **Rest**: Beregner resten fra divisionen af to tal                     | `1 % 2 //forventet svar er 1`    |

✅ Prøv det! Prøv en aritmetisk operation i din browsers konsol. Overrasker resultaterne dig?

### Strings

I JavaScript repræsenteres tekstdata som strings. Udtrykket "string" kommer fra konceptet med tegn, der er bundet sammen i en sekvens, ligesom skrivere i middelalderens klostre forbandt bogstaver for at danne ord og sætninger i deres manuskripter.

Strings er fundamentale for webudvikling. Hver tekst, der vises på en hjemmeside – brugernavne, knapetiketter, fejlmeddelelser, indhold – håndteres som string-data. At forstå strings er afgørende for at skabe funktionelle brugergrænseflader.

Strings er sæt af tegn, der er placeret mellem enkelt- eller dobbeltanførselstegn.

```javascript
'This is a string'
"This is also a string"
let myString = 'This is a string value stored in a variable';
```

**Forståelse af disse koncepter:**
- **Bruger** enten enkeltanførselstegn `'` eller dobbeltanførselstegn `"` til at definere strings
- **Gemmer** tekstdata, der kan inkludere bogstaver, tal og symboler
- **Tildeler** string-værdier til variabler til senere brug
- **Kræver** anførselstegn for at skelne tekst fra variabelnavne

Husk at bruge anførselstegn, når du skriver en string, ellers vil JavaScript antage, at det er et variabelnavn.

### Formatering af Strings

String-manipulation giver dig mulighed for at kombinere tekstelementer, inkorporere variabler og skabe dynamisk indhold, der reagerer på programmets tilstand. Denne teknik gør det muligt for dig at konstruere tekst programmæssigt.

Ofte har du brug for at kombinere flere strings – denne proces kaldes sammenkædning.

For at **sammenkæde** to eller flere strings, eller forbinde dem, skal du bruge operatoren `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
```

**Trin for trin, her er hvad der sker:**
- **Kombinerer** flere strings ved hjælp af operatoren `+`
- **Forbinder** strings direkte sammen uden mellemrum i det første eksempel
- **Tilføjer** mellemrumstegn `" "` mellem strings for læsbarhed
- **Indsætter** tegnsætning som kommaer for at skabe korrekt formatering

✅ Hvorfor er `1 + 1 = 2` i JavaScript, men `'1' + '1' = 11?` Tænk over det. Hvad med `'1' + 1`?

**Template literals** er en anden måde at formatere strings på, bortset fra at der bruges backtick i stedet for anførselstegn. Alt, der ikke er almindelig tekst, skal placeres i pladsholdere `${ }`. Dette inkluderer eventuelle variabler, der kan være strings.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

**Lad os forstå hver del:**
- **Bruger** backticks `` ` `` i stedet for almindelige anførselstegn til at oprette template literals
- **Indlejrer** variabler direkte ved hjælp af `${}` pladsholder-syntaks
- **Bevarer** mellemrum og formatering præcis som skrevet
- **Giver** en mere overskuelig måde at oprette komplekse strings med variabler
Du kan opnå dine formateringsmål med begge metoder, men skabelonlitteraler vil respektere alle mellemrum og linjeskift.

✅ Hvornår ville du bruge en skabelonlitteral i stedet for en almindelig streng?

### Booleans

Booleans repræsenterer den simpleste form for data: de kan kun have én af to værdier – `true` eller `false`. Dette binære logiksystem stammer fra George Boole, en matematiker fra det 19. århundrede, som udviklede Boolesk algebra.

På trods af deres enkelhed er booleans essentielle for programlogik. De gør det muligt for din kode at træffe beslutninger baseret på betingelser – om en bruger er logget ind, om en knap er blevet klikket, eller om visse kriterier er opfyldt.

Booleans kan kun have to værdier: `true` eller `false`. Booleans kan hjælpe med at beslutte, hvilke linjer kode der skal køres, når visse betingelser er opfyldt. I mange tilfælde hjælper [operatorer](../../../../2-js-basics/1-data-types) med at sætte værdien af en Boolean, og du vil ofte bemærke og skrive variabler, der bliver initialiseret eller deres værdier opdateret med en operator.

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

**I ovenstående har vi:**
- **Oprettet** en variabel, der gemmer Boolean-værdien `true`
- **Demonstreret** hvordan man gemmer Boolean-værdien `false`
- **Brugt** de præcise nøgleord `true` og `false` (ingen anførselstegn nødvendige)
- **Forberedt** disse variabler til brug i betingede udsagn

✅ En variabel kan betragtes som 'truthy', hvis den evalueres til en boolean `true`. Interessant nok er [alle værdier i JavaScript truthy, medmindre de er defineret som falsy](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## GitHub Copilot Agent Challenge 🚀

Brug Agent-tilstand til at fuldføre følgende udfordring:

**Beskrivelse:** Opret en personlig informationsmanager, der demonstrerer alle de JavaScript-datatyper, du har lært i denne lektion, mens du håndterer scenarier med data fra den virkelige verden.

**Opgave:** Byg et JavaScript-program, der opretter et brugerprofilobjekt, som indeholder: en persons navn (string), alder (number), status som studerende (boolean), yndlingsfarver som en array, og en adresseobjekt med egenskaberne gade, by og postnummer. Inkluder funktioner til at vise profilinformationen og opdatere individuelle felter. Sørg for at demonstrere strengsammenkædning, skabelonlitteraler, aritmetiske operationer med alderen og boolean-logik for studerendes status.

Læs mere om [agent-tilstand](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## 🚀 Udfordring

JavaScript har nogle adfærdsmønstre, der kan overraske udviklere. Her er et klassisk eksempel at udforske: prøv at skrive dette i din browserkonsol: `let age = 1; let Age = 2; age == Age` og observer resultatet. Det returnerer `false` – kan du finde ud af hvorfor?

Dette repræsenterer én af mange JavaScript-adfærdsmønstre, som er værd at forstå. Kendskab til disse quirks vil hjælpe dig med at skrive mere pålidelig kode og fejlfinde problemer mere effektivt.

## Quiz efter lektionen
[Quiz efter lektionen](https://ff-quizzes.netlify.app)

## Gennemgang & Selvstudie

Tag et kig på [denne liste over JavaScript-øvelser](https://css-tricks.com/snippets/javascript/) og prøv en. Hvad lærte du?

## Opgave

[Øvelse med datatyper](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.