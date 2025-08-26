<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b4612bbb9ace984f374fcc80e3e035ad",
  "translation_date": "2025-08-26T21:44:12+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "da"
}
-->
# JavaScript Grundlæggende: Metoder og Funktioner

![JavaScript Basics - Functions](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.da.png)
> Sketchnote af [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz før lektionen
[Quiz før lektionen](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/9)

Når vi tænker på at skrive kode, vil vi altid sikre, at vores kode er læsbar. Selvom det kan lyde kontraintuitivt, bliver kode læst mange flere gange, end den bliver skrevet. Et af de vigtigste værktøjer i en udviklers værktøjskasse for at sikre vedligeholdelig kode er **funktionen**.

[![Metoder og Funktioner](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Metoder og Funktioner")

> 🎥 Klik på billedet ovenfor for en video om metoder og funktioner.

> Du kan tage denne lektion på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Funktioner

Grundlæggende er en funktion en blok af kode, som vi kan udføre efter behov. Dette er perfekt til scenarier, hvor vi skal udføre den samme opgave flere gange; i stedet for at duplikere logikken flere steder (hvilket ville gøre det svært at opdatere senere), kan vi centralisere den ét sted og kalde den, når vi har brug for operationen udført - du kan endda kalde funktioner fra andre funktioner!

Lige så vigtigt er evnen til at navngive en funktion. Selvom det kan virke trivielt, giver navnet en hurtig måde at dokumentere en sektion af kode. Du kan tænke på det som en etiket på en knap. Hvis jeg klikker på en knap, der står "Annuller timer", ved jeg, at den vil stoppe uret.

## Oprettelse og kald af en funktion

Syntaksen for en funktion ser sådan ud:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Hvis jeg ville oprette en funktion til at vise en hilsen, kunne det se sådan ud:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Når vi vil kalde (eller udføre) vores funktion, bruger vi navnet på funktionen efterfulgt af `()`. Det er værd at bemærke, at vores funktion kan defineres før eller efter, vi beslutter at kalde den; JavaScript-kompilatoren vil finde den for dig.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** Der er en speciel type funktion kendt som en **metode**, som du allerede har brugt! Faktisk så vi dette i vores demo ovenfor, da vi brugte `console.log`. Det, der gør en metode anderledes end en funktion, er, at en metode er knyttet til et objekt (`console` i vores eksempel), mens en funktion er fritstående. Du vil høre mange udviklere bruge disse termer i flæng.

### Bedste praksis for funktioner

Der er nogle få bedste praksis at huske på, når du opretter funktioner:

- Som altid, brug beskrivende navne, så du ved, hvad funktionen vil gøre
- Brug **camelCasing** til at kombinere ord
- Hold dine funktioner fokuseret på en specifik opgave

## Overførsel af information til en funktion

For at gøre en funktion mere genanvendelig vil du ofte gerne overføre information til den. Hvis vi ser på vores `displayGreeting`-eksempel ovenfor, vil den kun vise **Hello, world!**. Ikke den mest nyttige funktion, man kunne oprette. Hvis vi vil gøre den lidt mere fleksibel, som at give nogen mulighed for at angive navnet på den person, der skal hilses, kan vi tilføje en **parameter**. En parameter (nogle gange også kaldet et **argument**) er yderligere information, der sendes til en funktion.

Parametre er angivet i definitionsdelen inden for parenteser og er kommaseparerede som følger:

```javascript
function name(param, param2, param3) {

}
```

Vi kan opdatere vores `displayGreeting` til at acceptere et navn og få det vist.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Når vi vil kalde vores funktion og overføre parameteren, angiver vi den i parenteserne.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Standardværdier

Vi kan gøre vores funktion endnu mere fleksibel ved at tilføje flere parametre. Men hvad hvis vi ikke vil kræve, at hver værdi angives? Hvis vi holder os til vores hilsenseksempel, kunne vi lade navnet være obligatorisk (vi skal vide, hvem vi hilser på), men vi vil give mulighed for, at selve hilsenen kan tilpasses efter ønske. Hvis nogen ikke ønsker at tilpasse den, giver vi en standardværdi i stedet. For at give en parameter en standardværdi sætter vi den på samme måde, som vi sætter en værdi for en variabel - `parameterName = 'defaultValue'`. For at se et fuldt eksempel:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Når vi kalder funktionen, kan vi derefter beslutte, om vi vil angive en værdi for `salutation`.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Returneringsværdier

Indtil nu vil den funktion, vi har bygget, altid outputte til [console](https://developer.mozilla.org/docs/Web/API/console). Nogle gange kan dette være præcis, hvad vi leder efter, især når vi opretter funktioner, der vil kalde andre tjenester. Men hvad hvis jeg vil oprette en hjælpefunktion til at udføre en beregning og give værdien tilbage, så jeg kan bruge den andre steder?

Vi kan gøre dette ved at bruge en **returneringsværdi**. En returneringsværdi returneres af funktionen og kan gemmes i en variabel på samme måde, som vi kunne gemme en bogstavelig værdi som en streng eller et tal.

Hvis en funktion returnerer noget, bruges nøgleordet `return`. Nøgleordet `return` forventer en værdi eller reference af det, der returneres, som følger:

```javascript
return myVariable;
```  

Vi kunne oprette en funktion til at oprette en hilsenbesked og returnere værdien tilbage til den, der kalder den.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Når vi kalder denne funktion, gemmer vi værdien i en variabel. Dette er meget på samme måde, som vi ville sætte en variabel til en statisk værdi (som `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Funktioner som parametre for funktioner

Når du udvikler dig i din programmeringskarriere, vil du støde på funktioner, der accepterer funktioner som parametre. Dette smarte trick bruges ofte, når vi ikke ved, hvornår noget vil ske eller afsluttes, men vi ved, at vi skal udføre en operation som svar.

Som et eksempel kan vi se på [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), som starter en timer og vil udføre kode, når den er færdig. Vi skal fortælle den, hvilken kode vi vil udføre. Lyder som et perfekt job for en funktion!

Hvis du kører koden nedenfor, vil du efter 3 sekunder se beskeden **3 sekunder er gået**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Anonyme funktioner

Lad os tage et nyt kig på, hvad vi har bygget. Vi opretter en funktion med et navn, som kun vil blive brugt én gang. Efterhånden som vores applikation bliver mere kompleks, kan vi se os selv oprette mange funktioner, som kun vil blive kaldt én gang. Dette er ikke ideelt. Som det viser sig, behøver vi ikke altid at give et navn!

Når vi sender en funktion som en parameter, kan vi undgå at oprette en på forhånd og i stedet bygge en som en del af parameteren. Vi bruger det samme nøgleord `function`, men i stedet bygger vi det som en parameter.

Lad os omskrive koden ovenfor til at bruge en anonym funktion:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Hvis du kører vores nye kode, vil du bemærke, at vi får de samme resultater. Vi har oprettet en funktion, men behøvede ikke at give den et navn!

### Fat arrow-funktioner

En genvej, der er almindelig i mange programmeringssprog (inklusive JavaScript), er evnen til at bruge det, der kaldes en **arrow** eller **fat arrow**-funktion. Den bruger en speciel indikator `=>`, som ligner en pil - deraf navnet! Ved at bruge `=>` kan vi springe nøgleordet `function` over.

Lad os omskrive vores kode endnu en gang til at bruge en fat arrow-funktion:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Hvornår skal man bruge hver strategi

Du har nu set, at vi har tre måder at sende en funktion som en parameter og undrer dig måske over, hvornår du skal bruge hver. Hvis du ved, at du vil bruge funktionen mere end én gang, skal du oprette den som normalt. Hvis du kun vil bruge den til én placering, er det generelt bedst at bruge en anonym funktion. Om du bruger en fat arrow-funktion eller den mere traditionelle `function`-syntaks er op til dig, men du vil bemærke, at de fleste moderne udviklere foretrækker `=>`.

---

## 🚀 Udfordring

Kan du formulere forskellen mellem funktioner og metoder i én sætning? Giv det et forsøg!

## Quiz efter lektionen
[Quiz efter lektionen](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/10)

## Gennemgang & Selvstudie

Det er værd at [læse lidt mere om arrow-funktioner](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), da de i stigende grad bruges i kodebaser. Øv dig i at skrive en funktion og derefter omskrive den med denne syntaks.

## Opgave

[Leg med Funktioner](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os ikke ansvar for eventuelle misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.