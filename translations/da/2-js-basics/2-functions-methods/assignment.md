# Sjov med Funktioner

## Instruktioner

I denne opgave skal du øve dig i at oprette forskellige typer funktioner for at styrke de begreber, du har lært om JavaScript-funktioner, parametre, standardværdier og returneringssætninger.

Opret en JavaScript-fil kaldet `functions-practice.js` og implementer følgende funktioner:

### Del 1: Grundlæggende Funktioner
1. **Opret en funktion kaldet `sayHello`**, der ikke tager nogen parametre og blot logger "Hej!" til konsollen.

2. **Opret en funktion kaldet `introduceYourself`**, der tager en parameter `name` og logger en besked som "Hej, mit navn er [name]" til konsollen.

### Del 2: Funktioner med Standardparametre
3. **Opret en funktion kaldet `greetPerson`**, der tager to parametre: `name` (påkrævet) og `greeting` (valgfri, standardværdi er "Hej"). Funktionen skal logge en besked som "[greeting], [name]!" til konsollen.

### Del 3: Funktioner der Returnerer Værdier
4. **Opret en funktion kaldet `addNumbers`**, der tager to parametre (`num1` og `num2`) og returnerer deres sum.

5. **Opret en funktion kaldet `createFullName`**, der tager parametrene `firstName` og `lastName` og returnerer det fulde navn som en enkelt streng.

### Del 4: Kombiner Det Hele
6. **Opret en funktion kaldet `calculateTip`**, der tager to parametre: `billAmount` (påkrævet) og `tipPercentage` (valgfri, standardværdi er 15). Funktionen skal beregne og returnere drikkepengebeløbet.

### Del 5: Test Dine Funktioner
Tilføj funktionskald for at teste hver af dine funktioner og vis resultaterne ved hjælp af `console.log()`.

**Eksempel på testkald:**
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

## Bedømmelseskriterier

| Kriterier | Fremragende | Tilstrækkelig | Kræver Forbedring |
| --------- | ----------- | ------------- | ----------------- |
| **Oprettelse af Funktioner** | Alle 6 funktioner er korrekt implementeret med korrekt syntaks og navngivningskonventioner | 4-5 funktioner er korrekt implementeret med mindre syntaksproblemer | 3 eller færre funktioner implementeret eller større syntaksfejl |
| **Parametre & Standardværdier** | Bruger korrekt påkrævede parametre, valgfrie parametre og standardværdier som angivet | Bruger parametre korrekt, men kan have problemer med standardværdier | Forkert eller manglende parameterimplementering |
| **Returneringsværdier** | Funktioner, der skal returnere værdier, gør det korrekt, og funktioner, der ikke skal returnere værdier, udfører kun handlinger | De fleste returneringsværdier er korrekte med mindre problemer | Betydelige problemer med returneringssætninger |
| **Kodekvalitet** | Ren, velorganiseret kode med meningsfulde variabelnavne og korrekt indrykning | Koden fungerer, men kunne være renere eller bedre organiseret | Koden er svær at læse eller dårligt struktureret |
| **Testning** | Alle funktioner testes med passende funktionskald, og resultaterne vises tydeligt | De fleste funktioner testes tilstrækkeligt | Begrænset eller forkert testning af funktioner |

## Ekstra Udfordringer (Valgfrit)

Hvis du vil udfordre dig selv yderligere:

1. **Opret en version af en af dine funktioner som en pilfunktion**
2. **Opret en funktion, der accepterer en anden funktion som parameter** (som eksemplerne med `setTimeout` fra lektionen)
3. **Tilføj inputvalidering** for at sikre, at dine funktioner håndterer ugyldige input på en hensigtsmæssig måde

---

> 💡 **Tip**: Husk at åbne din browsers udviklerkonsol (F12) for at se outputtet af dine `console.log()`-udtalelser!

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.