# Moro med funksjoner

## Instruksjoner

I denne oppgaven skal du øve på å lage forskjellige typer funksjoner for å styrke forståelsen din av JavaScript-funksjoner, parametere, standardverdier og returverdier.

Lag en JavaScript-fil kalt `functions-practice.js` og implementer følgende funksjoner:

### Del 1: Grunnleggende funksjoner
1. **Lag en funksjon kalt `sayHello`** som ikke tar noen parametere og bare logger "Hello!" til konsollen.

2. **Lag en funksjon kalt `introduceYourself`** som tar en parameter `name` og logger en melding som "Hei, jeg heter [name]" til konsollen.

### Del 2: Funksjoner med standardparametere
3. **Lag en funksjon kalt `greetPerson`** som tar to parametere: `name` (påkrevd) og `greeting` (valgfri, standardverdi er "Hello"). Funksjonen skal logge en melding som "[greeting], [name]!" til konsollen.

### Del 3: Funksjoner som returnerer verdier
4. **Lag en funksjon kalt `addNumbers`** som tar to parametere (`num1` og `num2`) og returnerer summen av dem.

5. **Lag en funksjon kalt `createFullName`** som tar parametrene `firstName` og `lastName` og returnerer fullt navn som en enkelt streng.

### Del 4: Kombiner alt
6. **Lag en funksjon kalt `calculateTip`** som tar to parametere: `billAmount` (påkrevd) og `tipPercentage` (valgfri, standardverdi er 15). Funksjonen skal beregne og returnere tipbeløpet.

### Del 5: Test funksjonene dine
Legg til funksjonskall for å teste hver av funksjonene dine og vis resultatene ved hjelp av `console.log()`.

**Eksempel på testkall:**
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

## Vurderingskriterier

| Kriterier | Fremragende | Tilfredsstillende | Trenger forbedring |
| --------- | ----------- | ----------------- | ------------------ |
| **Funksjonsopprettelse** | Alle 6 funksjoner er korrekt implementert med riktig syntaks og navnekonvensjoner | 4-5 funksjoner er korrekt implementert med mindre syntaksproblemer | 3 eller færre funksjoner implementert eller store syntaksfeil |
| **Parametere og standardverdier** | Bruker påkrevde parametere, valgfrie parametere og standardverdier korrekt som spesifisert | Bruker parametere korrekt, men kan ha problemer med standardverdier | Feil eller manglende implementering av parametere |
| **Returverdier** | Funksjoner som skal returnere verdier gjør det korrekt, og funksjoner som ikke skal returnere verdier utfører kun handlinger | De fleste returverdier er korrekte med mindre problemer | Betydelige problemer med retursetninger |
| **Kodekvalitet** | Ren, godt organisert kode med meningsfulle variabelnavn og riktig innrykk | Koden fungerer, men kan være renere eller bedre organisert | Koden er vanskelig å lese eller dårlig strukturert |
| **Testing** | Alle funksjoner er testet med passende funksjonskall og resultatene vises tydelig | De fleste funksjoner er testet tilstrekkelig | Begrenset eller feil testing av funksjoner |

## Ekstra utfordringer (valgfritt)

Hvis du vil utfordre deg selv ytterligere:

1. **Lag en versjon av en av funksjonene som pilfunksjon**
2. **Lag en funksjon som aksepterer en annen funksjon som parameter** (som eksemplene med `setTimeout` fra leksjonen)
3. **Legg til inputvalidering** for å sikre at funksjonene dine håndterer ugyldige input på en god måte

---

> 💡 **Tips**: Husk å åpne utviklerkonsollen i nettleseren din (F12) for å se resultatene av `console.log()`-utskriftene dine!

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.