<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b4612bbb9ace984f374fcc80e3e035ad",
  "translation_date": "2025-08-26T21:43:38+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "sv"
}
-->
# JavaScript Grunder: Metoder och Funktioner

![JavaScript Grunder - Funktioner](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.sv.png)
> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz före föreläsning
[Quiz före föreläsning](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/9)

När vi tänker på att skriva kod vill vi alltid säkerställa att vår kod är läsbar. Även om det kan låta motsägelsefullt, läses kod många fler gånger än den skrivs. Ett av de viktigaste verktygen i en utvecklares verktygslåda för att säkerställa underhållbar kod är **funktionen**.

[![Metoder och Funktioner](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Metoder och Funktioner")

> 🎥 Klicka på bilden ovan för en video om metoder och funktioner.

> Du kan ta denna lektion på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Funktioner

I grunden är en funktion ett kodblock som vi kan köra på begäran. Detta är perfekt för scenarier där vi behöver utföra samma uppgift flera gånger; istället för att duplicera logiken på flera platser (vilket skulle göra det svårt att uppdatera när det behövs), kan vi centralisera den på ett ställe och anropa den när vi behöver utföra operationen – du kan till och med anropa funktioner från andra funktioner!

Lika viktigt är möjligheten att namnge en funktion. Även om det kan verka trivialt, ger namnet ett snabbt sätt att dokumentera en kodsektion. Du kan tänka på det som en etikett på en knapp. Om jag klickar på en knapp som det står "Avbryt timer" på, vet jag att den kommer att stoppa klockan.

## Skapa och anropa en funktion

Syntaxen för en funktion ser ut så här:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Om jag ville skapa en funktion för att visa en hälsning, skulle den kunna se ut så här:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

När vi vill anropa (eller köra) vår funktion använder vi namnet på funktionen följt av `()`. Det är värt att notera att vår funktion kan definieras före eller efter vi bestämmer oss för att anropa den; JavaScript-kompilatorn hittar den åt dig.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** Det finns en speciell typ av funktion som kallas för en **metod**, som du redan har använt! Faktum är att vi såg detta i vårt exempel ovan när vi använde `console.log`. Det som skiljer en metod från en funktion är att en metod är kopplad till ett objekt (som `console` i vårt exempel), medan en funktion är fristående. Många utvecklare använder dessa termer omväxlande.

### Bästa praxis för funktioner

Det finns några bästa praxis att tänka på när du skapar funktioner:

- Som alltid, använd beskrivande namn så att du vet vad funktionen gör
- Använd **camelCase** för att kombinera ord
- Håll dina funktioner fokuserade på en specifik uppgift

## Skicka information till en funktion

För att göra en funktion mer återanvändbar vill du ofta skicka information till den. Om vi tittar på vårt exempel `displayGreeting` ovan, kommer det bara att visa **Hello, world!**. Inte den mest användbara funktionen man kan skapa. Om vi vill göra den lite mer flexibel, som att låta någon specificera namnet på personen som ska hälsas, kan vi lägga till en **parameter**. En parameter (ibland kallad ett **argument**) är ytterligare information som skickas till en funktion.

Parametrar listas i definitionsdelen inom parentes och är kommaseparerade, som så här:

```javascript
function name(param, param2, param3) {

}
```

Vi kan uppdatera vår `displayGreeting` för att acceptera ett namn och visa det.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

När vi vill anropa vår funktion och skicka in parametern, specificerar vi den inom parentes.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Standardvärden

Vi kan göra vår funktion ännu mer flexibel genom att lägga till fler parametrar. Men vad händer om vi inte vill kräva att varje värde anges? Om vi fortsätter med vårt hälsningsexempel kan vi låta namnet vara obligatoriskt (vi behöver veta vem vi hälsar på), men vi vill tillåta att själva hälsningen anpassas vid behov. Om någon inte vill anpassa den, tillhandahåller vi ett standardvärde istället. För att tilldela ett standardvärde till en parameter, sätter vi det på samma sätt som vi tilldelar ett värde till en variabel - `parameterName = 'defaultValue'`. För att se ett fullständigt exempel:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

När vi anropar funktionen kan vi sedan bestämma om vi vill ange ett värde för `salutation`.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Returnera värden

Hittills har funktionen vi byggt alltid skickat utdata till [konsolen](https://developer.mozilla.org/docs/Web/API/console). Ibland kan detta vara precis vad vi letar efter, särskilt när vi skapar funktioner som kommer att anropa andra tjänster. Men vad händer om jag vill skapa en hjälpfunktion för att utföra en beräkning och returnera värdet så att jag kan använda det någon annanstans?

Vi kan göra detta genom att använda ett **returvärde**. Ett returvärde returneras av funktionen och kan lagras i en variabel precis som vi kan lagra ett bokstavligt värde som en sträng eller ett nummer.

Om en funktion returnerar något används nyckelordet `return`. Nyckelordet `return` förväntar sig ett värde eller en referens till det som returneras, som så här:

```javascript
return myVariable;
```  

Vi skulle kunna skapa en funktion för att skapa ett hälsningsmeddelande och returnera värdet till den som anropar funktionen.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

När vi anropar denna funktion lagrar vi värdet i en variabel. Detta är mycket likt hur vi skulle tilldela en variabel ett statiskt värde (som `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Funktioner som parametrar för funktioner

När du utvecklas i din programmeringskarriär kommer du att stöta på funktioner som accepterar funktioner som parametrar. Detta smarta knep används ofta när vi inte vet när något kommer att inträffa eller slutföras, men vi vet att vi behöver utföra en operation som svar.

Som ett exempel, överväg [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), som startar en timer och kör kod när den är klar. Vi behöver tala om vilken kod vi vill köra. Låter som ett perfekt jobb för en funktion!

Om du kör koden nedan, kommer du efter 3 sekunder att se meddelandet **3 sekunder har gått**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Anonyma funktioner

Låt oss titta närmare på vad vi har byggt. Vi skapar en funktion med ett namn som bara kommer att användas en gång. När vår applikation blir mer komplex kan vi se oss själva skapa många funktioner som bara kommer att anropas en gång. Detta är inte idealiskt. Som det visar sig behöver vi inte alltid ge ett namn!

När vi skickar en funktion som en parameter kan vi hoppa över att skapa en i förväg och istället bygga en som en del av parametern. Vi använder samma nyckelord `function`, men bygger den som en parameter.

Låt oss skriva om koden ovan för att använda en anonym funktion:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Om du kör vår nya kod kommer du att märka att vi får samma resultat. Vi har skapat en funktion, men behövde inte ge den ett namn!

### Fet-pil-funktioner

En genväg som är vanlig i många programmeringsspråk (inklusive JavaScript) är möjligheten att använda det som kallas en **pil** eller **fet-pil**-funktion. Den använder en speciell indikator `=>`, som ser ut som en pil - därav namnet! Genom att använda `=>` kan vi hoppa över nyckelordet `function`.

Låt oss skriva om vår kod en gång till för att använda en fet-pil-funktion:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### När ska man använda varje strategi

Du har nu sett att vi har tre sätt att skicka en funktion som en parameter och kanske undrar när du ska använda vilket. Om du vet att du kommer att använda funktionen mer än en gång, skapa den som vanligt. Om du bara kommer att använda den på ett ställe är det generellt bäst att använda en anonym funktion. Om du ska använda en fet-pil-funktion eller den mer traditionella `function`-syntaxen är upp till dig, men du kommer att märka att de flesta moderna utvecklare föredrar `=>`.

---

## 🚀 Utmaning

Kan du formulera skillnaden mellan funktioner och metoder i en mening? Försök!

## Quiz efter föreläsning
[Quiz efter föreläsning](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/10)

## Granskning & Självstudier

Det är värt att [läsa lite mer om pilfunktioner](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), eftersom de används alltmer i kodbaser. Öva på att skriva en funktion och skriv sedan om den med denna syntax.

## Uppgift

[Skoj med Funktioner](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör du vara medveten om att automatiska översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.