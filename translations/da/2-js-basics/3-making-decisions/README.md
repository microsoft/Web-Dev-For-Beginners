<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c32c3377f83ab750c2447c77ab98",
  "translation_date": "2025-10-23T21:53:51+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "da"
}
-->
# JavaScript Grundlæggende: At træffe beslutninger

![JavaScript Grundlæggende - At træffe beslutninger](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.da.png)

> Sketchnote af [Tomomi Imura](https://twitter.com/girlie_mac)

Har du nogensinde undret dig over, hvordan applikationer træffer smarte beslutninger? Som hvordan et navigationssystem vælger den hurtigste rute, eller hvordan en termostat beslutter, hvornår den skal tænde for varmen? Dette er det grundlæggende koncept for beslutningstagning i programmering.

Ligesom Charles Babbages Analytical Engine blev designet til at følge forskellige sekvenser af operationer baseret på betingelser, skal moderne JavaScript-programmer træffe valg baseret på skiftende omstændigheder. Denne evne til at forgrene sig og træffe beslutninger er det, der forvandler statisk kode til responsive, intelligente applikationer.

I denne lektion lærer du, hvordan du implementerer betinget logik i dine programmer. Vi vil udforske betingede udsagn, sammenligningsoperatorer og logiske udtryk, der gør det muligt for din kode at evaluere situationer og reagere passende.

## Quiz før lektionen

[Quiz før lektionen](https://ff-quizzes.netlify.app/web/quiz/11)

Evnen til at træffe beslutninger og kontrollere programflow er en grundlæggende del af programmering. Dette afsnit dækker, hvordan du styrer eksekveringsvejen for dine JavaScript-programmer ved hjælp af Boolean-værdier og betinget logik.

[![At træffe beslutninger](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "At træffe beslutninger")

> 🎥 Klik på billedet ovenfor for en video om at træffe beslutninger.

> Du kan tage denne lektion på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## En kort opsummering af Booleans

Før vi udforsker beslutningstagning, lad os genbesøge Boolean-værdier fra vores tidligere lektion. Opkaldt efter matematikeren George Boole repræsenterer disse værdier binære tilstande – enten `true` eller `false`. Der er ingen tvetydighed, ingen mellemvej.

Disse binære værdier danner grundlaget for al beregningslogik. Hver beslutning, dit program træffer, reduceres i sidste ende til en Boolean-evaluering.

At oprette Boolean-variabler er ligetil:

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

Dette opretter to variabler med eksplicitte Boolean-værdier.

✅ Booleans er opkaldt efter den engelske matematiker, filosof og logiker George Boole (1815–1864).

## Sammenligningsoperatorer og Booleans

I praksis vil du sjældent manuelt indstille Boolean-værdier. I stedet genererer du dem ved at evaluere betingelser: "Er dette tal større end det andet?" eller "Er disse værdier ens?"

Sammenligningsoperatorer muliggør disse evalueringer. De sammenligner værdier og returnerer Boolean-resultater baseret på forholdet mellem operandene.

| Symbol | Beskrivelse                                                                                                                                                   | Eksempel           |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Mindre end**: Sammenligner to værdier og returnerer `true` Boolean-datatype, hvis værdien på venstre side er mindre end højre                               | `5 < 6 // true`    |
| `<=`   | **Mindre end eller lig med**: Sammenligner to værdier og returnerer `true` Boolean-datatype, hvis værdien på venstre side er mindre end eller lig med højre   | `5 <= 6 // true`   |
| `>`    | **Større end**: Sammenligner to værdier og returnerer `true` Boolean-datatype, hvis værdien på venstre side er større end højre                              | `5 > 6 // false`   |
| `>=`   | **Større end eller lig med**: Sammenligner to værdier og returnerer `true` Boolean-datatype, hvis værdien på venstre side er større end eller lig med højre   | `5 >= 6 // false`  |
| `===`  | **Streng lighed**: Sammenligner to værdier og returnerer `true` Boolean-datatype, hvis værdierne på højre og venstre er ens OG har samme datatype.            | `5 === 6 // false` |
| `!==`  | **Ulighed**: Sammenligner to værdier og returnerer den modsatte Boolean-værdi af, hvad en streng lighedsoperator ville returnere                             | `5 !== 6 // true`  |

✅ Test din viden ved at skrive nogle sammenligninger i din browsers konsol. Overrasker nogle af de returnerede data dig?

## If-sætning

`if`-sætningen er som at stille et spørgsmål i din kode. "Hvis denne betingelse er sand, så gør dette." Det er sandsynligvis det vigtigste værktøj, du vil bruge til at træffe beslutninger i JavaScript.

Sådan fungerer det:

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

Betingelsen går ind i parenteserne, og hvis den er `true`, kører JavaScript koden inde i de krøllede parenteser. Hvis den er `false`, springer JavaScript bare hele blokken over.

Du vil ofte bruge sammenligningsoperatorer til at oprette disse betingelser. Lad os se et praktisk eksempel:

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

Da `1000 >= 800` evalueres til `true`, udføres koden inde i blokken, og "Får en ny bærbar computer!" vises i konsollen.

## If..Else-sætning

Men hvad hvis du vil have, at dit program skal gøre noget andet, når betingelsen er falsk? Det er her, `else` kommer ind – det er som at have en backup-plan.

`else`-sætningen giver dig en måde at sige "hvis denne betingelse ikke er sand, gør i stedet dette andet."

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

Nu, da `500 >= 800` er `false`, springer JavaScript den første blok over og kører i stedet `else`-blokken. Du vil se "Har ikke råd til en ny bærbar computer, endnu!" i konsollen.

✅ Test din forståelse af denne kode og den følgende kode ved at køre den i en browserkonsol. Ændr værdierne for variablerne currentMoney og laptopPrice for at ændre den returnerede `console.log()`.

## Switch-sætning

Nogle gange skal du sammenligne én værdi med flere muligheder. Selvom du kunne kæde flere `if..else`-sætninger sammen, bliver denne tilgang uhåndterlig. `switch`-sætningen giver en mere overskuelig struktur til at håndtere flere diskrete værdier.

Konceptet minder om de mekaniske koblingssystemer, der blev brugt i tidlige telefoncentraler – én inputværdi bestemmer, hvilken specifik vej eksekveringen følger.

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

Sådan er det struktureret:
- JavaScript evaluerer udtrykket én gang
- Det gennemgår hver `case` for at finde et match
- Når det finder et match, kører det den kodeblok
- `break` fortæller JavaScript at stoppe og afslutte switchen
- Hvis ingen cases matcher, kører det `default`-blokken (hvis du har en)

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

I dette eksempel ser JavaScript, at `dayNumber` er `2`, finder den matchende `case 2`, sætter `dayName` til "Tirsdag" og bryder derefter ud af switchen. Resultatet? "I dag er det tirsdag" bliver logget til konsollen.

✅ Test din forståelse af denne kode og den følgende kode ved at køre den i en browserkonsol. Ændr værdierne for variablen a for at ændre den returnerede `console.log()`.

## Logiske operatorer og Booleans

Komplekse beslutninger kræver ofte evaluering af flere betingelser samtidigt. Ligesom Boolean-algebra giver matematikere mulighed for at kombinere logiske udtryk, giver programmering logiske operatorer til at forbinde flere Boolean-betingelser.

Disse operatorer muliggør sofistikeret betinget logik ved at kombinere simple sand/falsk-evalueringer.

| Symbol | Beskrivelse                                                                                     | Eksempel                                                                 |
| ------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **Logisk OG**: Sammenligner to Boolean-udtryk. Returnerer true **kun** hvis begge sider er true | `(5 > 3) && (5 < 10) // Begge sider er true. Returnerer true` |
| `\|\|` | **Logisk ELLER**: Sammenligner to Boolean-udtryk. Returnerer true, hvis mindst én side er true  | `(5 > 10) \|\| (5 < 10) // Én side er false, den anden er true. Returnerer true` |
| `!`    | **Logisk IKKE**: Returnerer den modsatte værdi af et Boolean-udtryk                             | `!(5 > 10) // 5 er ikke større end 10, så "!" gør det true`         |

Disse operatorer lader dig kombinere betingelser på nyttige måder:
- OG (`&&`) betyder, at begge betingelser skal være sande
- ELLER (`||`) betyder, at mindst én betingelse skal være sand  
- IKKE (`!`) vender sand til falsk (og omvendt)

## Betingelser og beslutninger med logiske operatorer

Lad os se disse logiske operatorer i aktion med et mere realistisk eksempel:

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

I dette eksempel: vi beregner en rabatpris på 20% (640), og evaluerer derefter, om vores tilgængelige midler dækker enten den fulde pris ELLER rabatprisen. Da 600 opfylder rabatprisgrænsen på 640, evalueres betingelsen til sand.

### Negationsoperator

Nogle gange er det nemmere at tænke på, hvornår noget IKKE er sandt. Som i stedet for at spørge "Er brugeren logget ind?", vil du måske spørge "Er brugeren IKKE logget ind?" Udråbstegnet (`!`) operatør vender logikken for dig.

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

`!`-operatoren er som at sige "det modsatte af..." – hvis noget er `true`, gør `!` det `false`, og omvendt.

### Ternære udtryk

For enkle betingede tildelinger giver JavaScript den **ternære operator**. Denne korte syntaks giver dig mulighed for at skrive et betinget udtryk på én linje, nyttigt når du skal tildele en af to værdier baseret på en betingelse.

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

Det læses som et spørgsmål: "Er denne betingelse sand? Hvis ja, brug denne værdi. Hvis nej, brug den anden værdi."

Nedenfor er et mere håndgribeligt eksempel:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Tag et øjeblik til at læse denne kode et par gange. Forstår du, hvordan disse operatorer fungerer?

Her er, hvad denne linje siger: "Er `firstNumber` større end `secondNumber`? Hvis ja, sæt `firstNumber` i `biggestNumber`. Hvis nej, sæt `secondNumber` i `biggestNumber`."

Den ternære operator er bare en kortere måde at skrive denne traditionelle `if..else`-sætning:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

Begge tilgange giver identiske resultater. Den ternære operator tilbyder kortfattethed, mens den traditionelle if-else-struktur kan være mere læsbar for komplekse betingelser.

---



## 🚀 Udfordring

Lav et program, der først er skrevet med logiske operatorer, og omskriv det derefter ved hjælp af et ternært udtryk. Hvilken syntaks foretrækker du?

---

## GitHub Copilot Agent Udfordring 🚀

Brug Agent-tilstand til at fuldføre følgende udfordring:

**Beskrivelse:** Lav en omfattende karakterberegner, der demonstrerer flere beslutningstagende koncepter fra denne lektion, inklusive if-else-sætninger, switch-sætninger, logiske operatorer og ternære udtryk.

**Opgave:** Skriv et JavaScript-program, der tager en elevs numeriske score (0-100) og bestemmer deres bogstavkarakter ved hjælp af følgende kriterier:
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: Under 60

Krav:
1. Brug en if-else-sætning til at bestemme bogstavkarakteren
2. Brug logiske operatorer til at tjekke, om eleven består (karakter >= 60) OG har udmærkelse (karakter >= 90)
3. Brug en switch-sætning til at give specifik feedback for hver bogstavkarakter
4. Brug en ternær operator til at bestemme, om eleven er berettiget til det næste kursus (karakter >= 70)
5. Inkluder inputvalidering for at sikre, at scoren er mellem 0 og 100

Test dit program med forskellige scores, inklusive kanttilfælde som 59, 60, 89, 90 og ugyldige input.

Læs mere om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.


## Quiz efter lektionen

[Quiz efter lektionen](https://ff-quizzes.netlify.app/web/quiz/12)

## Gennemgang & Selvstudie

Læs mere om de mange operatorer, der er tilgængelige for brugeren [på MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Gå igennem Josh Comeaus fantastiske [operator-oversigt](https://joshwcomeau.com/operator-lookup/)!

## Opgave

[Operatorer](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.