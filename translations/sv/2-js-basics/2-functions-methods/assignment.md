<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8328f58f4593b4671656ff8f4b2edbd9",
  "translation_date": "2025-10-23T21:27:23+00:00",
  "source_file": "2-js-basics/2-functions-methods/assignment.md",
  "language_code": "sv"
}
-->
# Roligt med Funktioner

## Instruktioner

I den här uppgiften ska du öva på att skapa olika typer av funktioner för att förstärka de koncept du har lärt dig om JavaScript-funktioner, parametrar, standardvärden och returvärden.

Skapa en JavaScript-fil som heter `functions-practice.js` och implementera följande funktioner:

### Del 1: Grundläggande Funktioner
1. **Skapa en funktion som heter `sayHello`** som inte tar några parametrar och bara loggar "Hej!" till konsolen.

2. **Skapa en funktion som heter `introduceYourself`** som tar en parameter `name` och loggar ett meddelande som "Hej, jag heter [name]" till konsolen.

### Del 2: Funktioner med Standardparametrar
3. **Skapa en funktion som heter `greetPerson`** som tar två parametrar: `name` (obligatorisk) och `greeting` (valfri, standardvärde är "Hej"). Funktionen ska logga ett meddelande som "[greeting], [name]!" till konsolen.

### Del 3: Funktioner som Returnerar Värden
4. **Skapa en funktion som heter `addNumbers`** som tar två parametrar (`num1` och `num2`) och returnerar deras summa.

5. **Skapa en funktion som heter `createFullName`** som tar parametrarna `firstName` och `lastName` och returnerar det fullständiga namnet som en enda sträng.

### Del 4: Kombinera Allt
6. **Skapa en funktion som heter `calculateTip`** som tar två parametrar: `billAmount` (obligatorisk) och `tipPercentage` (valfri, standardvärde är 15). Funktionen ska beräkna och returnera dricksbeloppet.

### Del 5: Testa Dina Funktioner
Lägg till funktionsanrop för att testa var och en av dina funktioner och visa resultaten med `console.log()`.

**Exempel på testanrop:**
```javascript
// Test your functions here
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## Bedömningskriterier

| Kriterier | Exemplariskt | Tillräckligt | Behöver Förbättras |
| --------- | ------------ | ------------ | ------------------ |
| **Skapande av Funktioner** | Alla 6 funktioner är korrekt implementerade med rätt syntax och namngivningskonventioner | 4-5 funktioner är korrekt implementerade med mindre syntaxproblem | 3 eller färre funktioner implementerade eller stora syntaxfel |
| **Parametrar & Standardvärden** | Använder obligatoriska parametrar, valfria parametrar och standardvärden korrekt enligt specifikationen | Använder parametrar korrekt men kan ha problem med standardvärden | Felaktig eller saknad parameterimplementering |
| **Returvärden** | Funktioner som ska returnera värden gör det korrekt, och funktioner som inte ska returnera värden utför endast handlingar | De flesta returvärden är korrekta med mindre problem | Betydande problem med returvärden |
| **Kodkvalitet** | Ren, välorganiserad kod med meningsfulla variabelnamn och korrekt indragning | Koden fungerar men kan vara renare eller bättre organiserad | Koden är svår att läsa eller dåligt strukturerad |
| **Testning** | Alla funktioner testas med lämpliga funktionsanrop och resultaten visas tydligt | De flesta funktioner testas tillräckligt | Begränsad eller felaktig testning av funktioner |

## Bonusutmaningar (Valfritt)

Om du vill utmana dig själv ytterligare:

1. **Skapa en version av en av dina funktioner som pilfunktion**
2. **Skapa en funktion som accepterar en annan funktion som parameter** (som `setTimeout`-exemplen från lektionen)
3. **Lägg till validering av indata** för att säkerställa att dina funktioner hanterar ogiltiga indata på ett bra sätt

---

> 💡 **Tips**: Kom ihåg att öppna webbläsarens utvecklarkonsol (F12) för att se output från dina `console.log()`-uttryck!

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.