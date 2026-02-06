# Plezier met Functies

## Instructies

In deze opdracht ga je oefenen met het maken van verschillende soorten functies om de concepten die je hebt geleerd over JavaScript-functies, parameters, standaardwaarden en return statements te versterken.

Maak een JavaScript-bestand genaamd `functions-practice.js` en implementeer de volgende functies:

### Deel 1: Basisfuncties
1. **Maak een functie genaamd `sayHello`** die geen parameters accepteert en simpelweg "Hallo!" naar de console logt.

2. **Maak een functie genaamd `introduceYourself`** die een `name`-parameter accepteert en een bericht zoals "Hoi, mijn naam is [name]" naar de console logt.

### Deel 2: Functies met standaardparameters
3. **Maak een functie genaamd `greetPerson`** die twee parameters accepteert: `name` (vereist) en `greeting` (optioneel, standaard "Hallo"). De functie moet een bericht zoals "[greeting], [name]!" naar de console loggen.

### Deel 3: Functies die waarden retourneren
4. **Maak een functie genaamd `addNumbers`** die twee parameters accepteert (`num1` en `num2`) en hun som retourneert.

5. **Maak een functie genaamd `createFullName`** die `firstName` en `lastName`-parameters accepteert en de volledige naam als een enkele string retourneert.

### Deel 4: Alles combineren
6. **Maak een functie genaamd `calculateTip`** die twee parameters accepteert: `billAmount` (vereist) en `tipPercentage` (optioneel, standaard 15). De functie moet het fooi-bedrag berekenen en retourneren.

### Deel 5: Test je functies
Voeg functie-aanroepen toe om elk van je functies te testen en de resultaten weer te geven met `console.log()`.

**Voorbeeld testaanroepen:**
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

## Rubriek

| Criteria | Uitmuntend | Voldoende | Verbetering nodig |
| -------- | ---------- | --------- | ----------------- |
| **Functiecreatie** | Alle 6 functies zijn correct geïmplementeerd met juiste syntax en naamgevingsconventies | 4-5 functies zijn correct geïmplementeerd met kleine syntaxfouten | 3 of minder functies geïmplementeerd of grote syntaxfouten |
| **Parameters & Standaardwaarden** | Vereiste parameters, optionele parameters en standaardwaarden worden correct gebruikt zoals gespecificeerd | Parameters worden correct gebruikt, maar er kunnen problemen zijn met standaardwaarden | Onjuiste of ontbrekende parameterimplementatie |
| **Returnwaarden** | Functies die waarden moeten retourneren doen dit correct, en functies die dat niet moeten doen voeren alleen acties uit | De meeste returnwaarden zijn correct met kleine problemen | Significante problemen met return statements |
| **Codekwaliteit** | Schone, goed georganiseerde code met betekenisvolle variabelenamen en correcte inspringing | Code werkt, maar kan schoner of beter georganiseerd zijn | Code is moeilijk te lezen of slecht gestructureerd |
| **Testen** | Alle functies worden getest met geschikte functie-aanroepen en resultaten worden duidelijk weergegeven | De meeste functies worden adequaat getest | Beperkt of incorrect testen van functies |

## Bonusuitdagingen (Optioneel)

Als je jezelf verder wilt uitdagen:

1. **Maak een arrow function-versie** van een van je functies
2. **Maak een functie die een andere functie als parameter accepteert** (zoals de `setTimeout`-voorbeelden uit de les)
3. **Voeg invoervalidatie toe** om ervoor te zorgen dat je functies ongeldige invoer netjes afhandelen

---

> 💡 **Tip**: Vergeet niet de ontwikkelaarsconsole van je browser te openen (F12) om de uitvoer van je `console.log()`-verklaringen te zien!

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.