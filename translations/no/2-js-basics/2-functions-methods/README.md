<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b4612bbb9ace984f374fcc80e3e035ad",
  "translation_date": "2025-08-26T21:44:35+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "no"
}
-->
# Grunnleggende JavaScript: Metoder og Funksjoner

![Grunnleggende JavaScript - Funksjoner](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.no.png)
> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz før forelesning
[Quiz før forelesning](https://ff-quizzes.netlify.app/web/quiz/9)

Når vi skriver kode, ønsker vi alltid å sørge for at koden er lesbar. Selv om dette kan virke motstridende, blir kode lest mange flere ganger enn den blir skrevet. Et av de viktigste verktøyene i en utviklers verktøykasse for å sikre vedlikeholdbar kode er **funksjonen**.

[![Metoder og Funksjoner](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Metoder og Funksjoner")

> 🎥 Klikk på bildet over for en video om metoder og funksjoner.

> Du kan ta denne leksjonen på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Funksjoner

En funksjon er i bunn og grunn en blokk med kode som vi kan kjøre på forespørsel. Dette er perfekt for situasjoner der vi trenger å utføre den samme oppgaven flere ganger; i stedet for å duplisere logikken på flere steder (noe som ville gjort det vanskelig å oppdatere senere), kan vi sentralisere den på ett sted og kalle den når vi trenger operasjonen utført – du kan til og med kalle funksjoner fra andre funksjoner!

Like viktig er evnen til å gi en funksjon et navn. Selv om dette kan virke trivielt, gir navnet en rask måte å dokumentere en del av koden på. Du kan tenke på det som en etikett på en knapp. Hvis jeg klikker på en knapp som sier "Avbryt timer", vet jeg at den kommer til å stoppe klokken.

## Opprette og kalle en funksjon

Syntaksen for en funksjon ser slik ut:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Hvis jeg ønsket å lage en funksjon for å vise en hilsen, kan den se slik ut:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Når vi ønsker å kalle (eller utføre) funksjonen vår, bruker vi navnet på funksjonen etterfulgt av `()`. Det er verdt å merke seg at funksjonen vår kan defineres før eller etter vi bestemmer oss for å kalle den; JavaScript-kompilatoren vil finne den for deg.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** Det finnes en spesiell type funksjon kjent som en **metode**, som du allerede har brukt! Faktisk så vi dette i vårt eksempel ovenfor da vi brukte `console.log`. Det som skiller en metode fra en funksjon er at en metode er knyttet til et objekt (`console` i vårt eksempel), mens en funksjon er frittstående. Mange utviklere bruker disse begrepene om hverandre.

### Beste praksis for funksjoner

Her er noen beste praksiser å huske på når du lager funksjoner:

- Som alltid, bruk beskrivende navn slik at du vet hva funksjonen gjør
- Bruk **camelCasing** for å kombinere ord
- Hold funksjonene dine fokusert på en spesifikk oppgave

## Sende informasjon til en funksjon

For å gjøre en funksjon mer gjenbrukbar vil du ofte sende informasjon til den. Hvis vi ser på vårt `displayGreeting`-eksempel ovenfor, vil det bare vise **Hello, world!**. Ikke den mest nyttige funksjonen man kan lage. Hvis vi ønsker å gjøre den litt mer fleksibel, som å la noen spesifisere navnet på personen som skal hilses på, kan vi legge til en **parameter**. En parameter (noen ganger kalt et **argument**) er tilleggsinformasjon som sendes til en funksjon.

Parametere listes opp i definisjonsdelen innenfor parenteser og er adskilt med komma, slik som dette:

```javascript
function name(param, param2, param3) {

}
```

Vi kan oppdatere vår `displayGreeting` til å akseptere et navn og vise det.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Når vi ønsker å kalle funksjonen vår og sende inn parameteren, spesifiserer vi den i parentesene.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Standardverdier

Vi kan gjøre funksjonen vår enda mer fleksibel ved å legge til flere parametere. Men hva om vi ikke ønsker å kreve at alle verdier spesifiseres? Hvis vi holder oss til vårt hilsningseksempel, kan vi la navnet være obligatorisk (vi må vite hvem vi hilser på), men vi ønsker å tillate at selve hilsningen kan tilpasses etter ønske. Hvis noen ikke ønsker å tilpasse den, gir vi en standardverdi i stedet. For å gi en standardverdi til en parameter, setter vi den på samme måte som vi setter en verdi for en variabel - `parameterName = 'defaultValue'`. For å se et fullstendig eksempel:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Når vi kaller funksjonen, kan vi da bestemme om vi vil sette en verdi for `salutation`.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Returneringsverdier

Hittil har funksjonene vi har laget alltid skrevet ut til [konsollen](https://developer.mozilla.org/docs/Web/API/console). Noen ganger kan dette være akkurat det vi ser etter, spesielt når vi lager funksjoner som skal kalle andre tjenester. Men hva om jeg ønsker å lage en hjelpefunksjon for å utføre en beregning og gi verdien tilbake slik at jeg kan bruke den andre steder?

Vi kan gjøre dette ved å bruke en **returneringsverdi**. En returneringsverdi returneres av funksjonen og kan lagres i en variabel på samme måte som vi kunne lagre en bokstavelig verdi som en streng eller et tall.

Hvis en funksjon returnerer noe, brukes nøkkelordet `return`. Nøkkelordet `return` forventer en verdi eller referanse til det som returneres, slik som dette:

```javascript
return myVariable;
```  

Vi kunne lage en funksjon for å lage en hilsningsmelding og returnere verdien tilbake til den som kaller funksjonen.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Når vi kaller denne funksjonen, lagrer vi verdien i en variabel. Dette er på samme måte som vi ville satt en variabel til en statisk verdi (som `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Funksjoner som parametere for funksjoner

Etter hvert som du utvikler deg som programmerer, vil du komme over funksjoner som aksepterer andre funksjoner som parametere. Dette smarte trikset brukes ofte når vi ikke vet når noe kommer til å skje eller bli fullført, men vi vet at vi må utføre en operasjon som svar.

Som et eksempel, vurder [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), som starter en timer og vil utføre kode når den er ferdig. Vi må fortelle den hvilken kode vi ønsker å utføre. Høres ut som en perfekt jobb for en funksjon!

Hvis du kjører koden nedenfor, vil du etter 3 sekunder se meldingen **3 sekunder har gått**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Anonyme funksjoner

La oss ta en ny titt på det vi har laget. Vi lager en funksjon med et navn som bare skal brukes én gang. Etter hvert som applikasjonen vår blir mer kompleks, kan vi se for oss at vi lager mange funksjoner som bare vil bli kalt én gang. Dette er ikke ideelt. Det viser seg at vi ikke alltid trenger å gi en funksjon et navn!

Når vi sender en funksjon som en parameter, kan vi hoppe over å lage en på forhånd og i stedet bygge en som en del av parameteren. Vi bruker det samme nøkkelordet `function`, men bygger den som en parameter.

La oss skrive om koden ovenfor for å bruke en anonym funksjon:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Hvis du kjører den nye koden vår, vil du legge merke til at vi får samme resultat. Vi har laget en funksjon, men trengte ikke gi den et navn!

### Fat arrow-funksjoner

En snarvei som er vanlig i mange programmeringsspråk (inkludert JavaScript) er muligheten til å bruke det som kalles en **arrow** eller **fat arrow**-funksjon. Den bruker en spesiell indikator `=>`, som ser ut som en pil – derav navnet! Ved å bruke `=>` kan vi hoppe over nøkkelordet `function`.

La oss skrive om koden vår en gang til for å bruke en fat arrow-funksjon:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Når skal man bruke hver strategi

Du har nå sett at vi har tre måter å sende en funksjon som en parameter på, og du lurer kanskje på når du skal bruke hver. Hvis du vet at du kommer til å bruke funksjonen mer enn én gang, opprett den som vanlig. Hvis du bare skal bruke den på ett sted, er det generelt best å bruke en anonym funksjon. Om du bruker en fat arrow-funksjon eller den mer tradisjonelle `function`-syntaksen er opp til deg, men du vil legge merke til at de fleste moderne utviklere foretrekker `=>`.

---

## 🚀 Utfordring

Kan du forklare forskjellen mellom funksjoner og metoder i én setning? Prøv!

## Quiz etter forelesning
[Quiz etter forelesning](https://ff-quizzes.netlify.app/web/quiz/10)

## Gjennomgang og selvstudium

Det er verdt å [lese litt mer om arrow-funksjoner](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), ettersom de brukes stadig mer i kodebaser. Øv deg på å skrive en funksjon, og skriv den deretter om med denne syntaksen.

## Oppgave

[Moro med Funksjoner](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.