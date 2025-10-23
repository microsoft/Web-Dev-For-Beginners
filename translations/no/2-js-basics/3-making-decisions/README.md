<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c32c3377f83ab750c2447c77ab98",
  "translation_date": "2025-10-23T22:17:28+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "no"
}
-->
# Grunnleggende JavaScript: Ta avgjørelser

![Grunnleggende JavaScript - Ta avgjørelser](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.no.png)

> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

Har du noen gang lurt på hvordan applikasjoner tar smarte avgjørelser? Som hvordan et navigasjonssystem velger den raskeste ruten, eller hvordan en termostat bestemmer når den skal slå på varmen? Dette er det grunnleggende konseptet med beslutningstaking i programmering.

Akkurat som Charles Babbages Analytical Engine ble designet for å følge ulike sekvenser av operasjoner basert på betingelser, må moderne JavaScript-programmer ta valg basert på varierende omstendigheter. Denne evnen til å forgrene seg og ta avgjørelser er det som forvandler statisk kode til responsive, intelligente applikasjoner.

I denne leksjonen vil du lære hvordan du implementerer betinget logikk i programmene dine. Vi skal utforske betingede utsagn, sammenligningsoperatorer og logiske uttrykk som lar koden din evaluere situasjoner og reagere deretter.

## Quiz før leksjonen

[Quiz før leksjonen](https://ff-quizzes.netlify.app/web/quiz/11)

Evnen til å ta avgjørelser og kontrollere programflyten er en grunnleggende del av programmering. Denne delen dekker hvordan du kan kontrollere utførelsesbanen til JavaScript-programmene dine ved hjelp av boolske verdier og betinget logikk.

[![Ta avgjørelser](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Ta avgjørelser")

> 🎥 Klikk på bildet over for en video om å ta avgjørelser.

> Du kan ta denne leksjonen på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## En kort oppsummering om boolske verdier

Før vi utforsker beslutningstaking, la oss ta en titt på boolske verdier fra vår forrige leksjon. Oppkalt etter matematikeren George Boole, representerer disse verdiene binære tilstander – enten `true` eller `false`. Det er ingen tvetydighet, ingen mellomting.

Disse binære verdiene utgjør grunnlaget for all beregningslogikk. Hver avgjørelse programmet ditt tar, reduseres til slutt til en boolsk evaluering.

Å opprette boolske variabler er enkelt:

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

Dette oppretter to variabler med eksplisitte boolske verdier.

✅ Boolske verdier er oppkalt etter den engelske matematikeren, filosofen og logikeren George Boole (1815–1864).

## Sammenligningsoperatorer og boolske verdier

I praksis vil du sjelden sette boolske verdier manuelt. I stedet genererer du dem ved å evaluere betingelser: "Er dette tallet større enn det andre?" eller "Er disse verdiene like?"

Sammenligningsoperatorer muliggjør disse evalueringene. De sammenligner verdier og returnerer boolske resultater basert på forholdet mellom operandene.

| Symbol | Beskrivelse                                                                                                                                                   | Eksempel           |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Mindre enn**: Sammenligner to verdier og returnerer `true` hvis verdien på venstre side er mindre enn høyre                                                 | `5 < 6 // true`    |
| `<=`   | **Mindre enn eller lik**: Sammenligner to verdier og returnerer `true` hvis verdien på venstre side er mindre enn eller lik høyre                             | `5 <= 6 // true`   |
| `>`    | **Større enn**: Sammenligner to verdier og returnerer `true` hvis verdien på venstre side er større enn høyre                                                 | `5 > 6 // false`   |
| `>=`   | **Større enn eller lik**: Sammenligner to verdier og returnerer `true` hvis verdien på venstre side er større enn eller lik høyre                             | `5 >= 6 // false`  |
| `===`  | **Streng likhet**: Sammenligner to verdier og returnerer `true` hvis verdiene på høyre og venstre er like OG har samme datatyper                              | `5 === 6 // false` |
| `!==`  | **Ulikhet**: Sammenligner to verdier og returnerer det motsatte boolske resultatet av hva en streng likhetsoperator ville returnere                          | `5 !== 6 // true`  |

✅ Test kunnskapen din ved å skrive noen sammenligninger i nettleserens konsoll. Er det noen returnerte data som overrasker deg?

## If-setning

`if`-setningen er som å stille et spørsmål i koden din. "Hvis denne betingelsen er sann, gjør denne tingen." Det er sannsynligvis det viktigste verktøyet du vil bruke for å ta avgjørelser i JavaScript.

Slik fungerer det:

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

Betingelsen går inn i parentesene, og hvis den er `true`, kjører JavaScript koden inne i krøllparentesene. Hvis den er `false`, hopper JavaScript over hele blokken.

Du vil ofte bruke sammenligningsoperatorer for å lage disse betingelsene. La oss se et praktisk eksempel:

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

Siden `1000 >= 800` evalueres til `true`, utføres koden inne i blokken, og "Kjøper en ny laptop!" vises i konsollen.

## If..Else-setning

Men hva om du vil at programmet ditt skal gjøre noe annet når betingelsen er falsk? Det er her `else` kommer inn – det er som å ha en backup-plan.

`else`-setningen gir deg en måte å si "hvis denne betingelsen ikke er sann, gjør denne andre tingen i stedet."

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

Nå, siden `500 >= 800` er `false`, hopper JavaScript over den første blokken og kjører `else`-blokken i stedet. Du vil se "Har ikke råd til en ny laptop, ennå!" i konsollen.

✅ Test forståelsen din av denne koden og den følgende koden ved å kjøre den i en nettleserkonsoll. Endre verdiene til variablene currentMoney og laptopPrice for å endre den returnerte `console.log()`.

## Switch-setning

Noen ganger må du sammenligne én verdi med flere alternativer. Selv om du kan lenke flere `if..else`-setninger, blir denne tilnærmingen tungvint. `switch`-setningen gir en mer ryddig struktur for å håndtere flere diskrete verdier.

Konseptet ligner de mekaniske koblingssystemene som ble brukt i tidlige telefonsentraler – én inngangsverdi bestemmer hvilken spesifikk vei utførelsen følger.

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

Slik er den strukturert:
- JavaScript evaluerer uttrykket én gang
- Den ser gjennom hver `case` for å finne en match
- Når den finner en match, kjører den den kodeblokken
- `break` forteller JavaScript å stoppe og avslutte switch
- Hvis ingen cases matcher, kjører den `default`-blokken (hvis du har en)

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

I dette eksempelet ser JavaScript at `dayNumber` er `2`, finner den matchende `case 2`, setter `dayName` til "Tirsdag", og bryter deretter ut av switch. Resultatet? "I dag er det tirsdag" logges til konsollen.

✅ Test forståelsen din av denne koden og den følgende koden ved å kjøre den i en nettleserkonsoll. Endre verdiene til variabelen a for å endre den returnerte `console.log()`.

## Logiske operatorer og boolske verdier

Komplekse avgjørelser krever ofte evaluering av flere betingelser samtidig. Akkurat som boolsk algebra lar matematikere kombinere logiske uttrykk, gir programmering logiske operatorer for å koble sammen flere boolske betingelser.

Disse operatorene muliggjør sofistikert betinget logikk ved å kombinere enkle true/false-evalueringer.

| Symbol | Beskrivelse                                                                                     | Eksempel                                                                 |
| ------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **Logisk OG**: Sammenligner to boolske uttrykk. Returnerer true **kun** hvis begge sider er sanne | `(5 > 3) && (5 < 10) // Begge sider er sanne. Returnerer true` |
| `\|\|` | **Logisk ELLER**: Sammenligner to boolske uttrykk. Returnerer true hvis minst én side er sann     | `(5 > 10) \|\| (5 < 10) // Én side er falsk, den andre er sann. Returnerer true` |
| `!`    | **Logisk IKKE**: Returnerer den motsatte verdien av et boolsk uttrykk                             | `!(5 > 10) // 5 er ikke større enn 10, så "!" gjør det sant`         |

Disse operatorene lar deg kombinere betingelser på nyttige måter:
- OG (`&&`) betyr at begge betingelsene må være sanne
- ELLER (`||`) betyr at minst én betingelse må være sann  
- IKKE (`!`) snur sann til falsk (og omvendt)

## Betingelser og avgjørelser med logiske operatorer

La oss se disse logiske operatorene i aksjon med et mer realistisk eksempel:

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

I dette eksempelet: vi beregner en 20% rabattpris (640), og evaluerer deretter om våre tilgjengelige midler dekker enten full pris ELLER rabattert pris. Siden 600 oppfyller den rabatterte prisgrensen på 640, evalueres betingelsen til sann.

### Negasjonsoperator

Noen ganger er det lettere å tenke på når noe IKKE er sant. Som i stedet for å spørre "Er brukeren logget inn?", kan du spørre "Er brukeren IKKE logget inn?" Utropstegnet (`!`) snur logikken for deg.

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

`!`-operatoren er som å si "det motsatte av..." – hvis noe er `true`, gjør `!` det til `false`, og omvendt.

### Ternære uttrykk

For enkle betingede tildelinger gir JavaScript **ternær operator**. Denne konsise syntaksen lar deg skrive et betinget uttrykk på én linje, nyttig når du trenger å tildele én av to verdier basert på en betingelse.

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

Det leses som et spørsmål: "Er denne betingelsen sann? Hvis ja, bruk denne verdien. Hvis nei, bruk den andre verdien."

Nedenfor er et mer konkret eksempel:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Ta et øyeblikk til å lese denne koden noen ganger. Forstår du hvordan disse operatorene fungerer?

Her sier denne linjen: "Er `firstNumber` større enn `secondNumber`? Hvis ja, sett `firstNumber` i `biggestNumber`. Hvis nei, sett `secondNumber` i `biggestNumber`."

Den ternære operatoren er bare en kortere måte å skrive denne tradisjonelle `if..else`-setningen:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

Begge tilnærmingene gir identiske resultater. Den ternære operatoren gir konsishet, mens den tradisjonelle if-else-strukturen kan være mer lesbar for komplekse betingelser.

---

## 🚀 Utfordring

Lag et program som først er skrevet med logiske operatorer, og deretter skriv det om ved hjelp av et ternært uttrykk. Hvilken syntaks foretrekker du?

---

## GitHub Copilot Agent Challenge 🚀

Bruk Agent-modus for å fullføre følgende utfordring:

**Beskrivelse:** Lag en omfattende karakterkalkulator som demonstrerer flere beslutningstakingskonsepter fra denne leksjonen, inkludert if-else-setninger, switch-setninger, logiske operatorer og ternære uttrykk.

**Oppgave:** Skriv et JavaScript-program som tar en students numeriske poengsum (0-100) og bestemmer deres bokstavkarakter ved hjelp av følgende kriterier:
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: Under 60

Krav:
1. Bruk en if-else-setning for å bestemme bokstavkarakteren
2. Bruk logiske operatorer for å sjekke om studenten består (karakter >= 60) OG har utmerkelse (karakter >= 90)
3. Bruk en switch-setning for å gi spesifikke tilbakemeldinger for hver bokstavkarakter
4. Bruk en ternær operator for å avgjøre om studenten er kvalifisert for neste kurs (karakter >= 70)
5. Inkluder inputvalidering for å sikre at poengsummen er mellom 0 og 100

Test programmet ditt med ulike poengsummer, inkludert grensesaker som 59, 60, 89, 90 og ugyldige inndata.

Les mer om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## Quiz etter leksjonen

[Quiz etter leksjonen](https://ff-quizzes.netlify.app/web/quiz/12)

## Gjennomgang og selvstudium

Les mer om de mange tilgjengelige operatorene [på MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Gå gjennom Josh Comeaus fantastiske [operator lookup](https://joshwcomeau.com/operator-lookup/)!

## Oppgave

[Operatorer](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på dets opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.