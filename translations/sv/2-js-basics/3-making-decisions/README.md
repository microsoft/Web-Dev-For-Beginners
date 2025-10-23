<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c32c3377f83ab750c2447c77ab98",
  "translation_date": "2025-10-23T21:28:05+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "sv"
}
-->
# JavaScript Grunder: Att fatta beslut

![JavaScript Grunder - Att fatta beslut](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.sv.png)

> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

Har du någonsin undrat hur applikationer fattar smarta beslut? Som hur ett navigationssystem väljer den snabbaste rutten, eller hur en termostat bestämmer när den ska slå på värmen? Detta är den grundläggande konceptet för beslutsfattande inom programmering.

Precis som Charles Babbages Analytical Engine var designad för att följa olika sekvenser av operationer baserat på villkor, behöver moderna JavaScript-program göra val baserat på varierande omständigheter. Denna förmåga att grena och fatta beslut är det som förvandlar statisk kod till responsiva, intelligenta applikationer.

I denna lektion kommer du att lära dig hur man implementerar villkorslogik i dina program. Vi kommer att utforska villkorssatser, jämförelseoperatorer och logiska uttryck som gör att din kod kan utvärdera situationer och reagera på lämpligt sätt.

## Quiz före föreläsningen

[Quiz före föreläsningen](https://ff-quizzes.netlify.app/web/quiz/11)

Förmågan att fatta beslut och kontrollera programflödet är en grundläggande aspekt av programmering. Detta avsnitt täcker hur man kontrollerar exekveringsvägen för dina JavaScript-program med hjälp av booleska värden och villkorslogik.

[![Att fatta beslut](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Att fatta beslut")

> 🎥 Klicka på bilden ovan för en video om att fatta beslut.

> Du kan ta denna lektion på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## En kort återblick på Booleans

Innan vi utforskar beslutsfattande, låt oss återbesöka booleska värden från vår tidigare lektion. Uppkallade efter matematikern George Boole, representerar dessa värden binära tillstånd – antingen `true` eller `false`. Det finns ingen tvetydighet, inget mellanting.

Dessa binära värden utgör grunden för all beräkningslogik. Varje beslut ditt program fattar reduceras i slutändan till en boolesk utvärdering.

Att skapa booleska variabler är enkelt:

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

Detta skapar två variabler med explicita booleska värden.

✅ Booleans är uppkallade efter den engelska matematikern, filosofen och logikern George Boole (1815–1864).

## Jämförelseoperatorer och Booleans

I praktiken kommer du sällan att sätta booleska värden manuellt. Istället genererar du dem genom att utvärdera villkor: "Är detta nummer större än det andra?" eller "Är dessa värden lika?"

Jämförelseoperatorer möjliggör dessa utvärderingar. De jämför värden och returnerar booleska resultat baserat på relationen mellan operanderna.

| Symbol | Beskrivning                                                                                                                                                   | Exempel            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Mindre än**: Jämför två värden och returnerar `true` om värdet på vänster sida är mindre än det på höger                                                    | `5 < 6 // true`    |
| `<=`   | **Mindre än eller lika med**: Jämför två värden och returnerar `true` om värdet på vänster sida är mindre än eller lika med det på höger                      | `5 <= 6 // true`   |
| `>`    | **Större än**: Jämför två värden och returnerar `true` om värdet på vänster sida är större än det på höger                                                   | `5 > 6 // false`   |
| `>=`   | **Större än eller lika med**: Jämför två värden och returnerar `true` om värdet på vänster sida är större än eller lika med det på höger                      | `5 >= 6 // false`  |
| `===`  | **Strikt likhet**: Jämför två värden och returnerar `true` om värdena på höger och vänster är lika OCH har samma datatyp.                                     | `5 === 6 // false` |
| `!==`  | **Olikhet**: Jämför två värden och returnerar motsatt booleskt värde av vad en strikt likhetsoperator skulle returnera                                       | `5 !== 6 // true`  |

✅ Testa din kunskap genom att skriva några jämförelser i din webbläsares konsol. Överraskar något av det returnerade datat dig?

## If-sats

`if`-satsen är som att ställa en fråga i din kod. "Om detta villkor är sant, gör då detta." Det är förmodligen det viktigaste verktyget du kommer att använda för att fatta beslut i JavaScript.

Så här fungerar det:

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

Villkoret går inuti parenteserna, och om det är `true` kör JavaScript koden inuti klamrarna. Om det är `false` hoppar JavaScript över hela blocket.

Du kommer ofta att använda jämförelseoperatorer för att skapa dessa villkor. Låt oss se ett praktiskt exempel:

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

Eftersom `1000 >= 800` utvärderas till `true`, körs koden inuti blocket och visar "Köper en ny laptop!" i konsolen.

## If..Else-sats

Men vad händer om du vill att ditt program ska göra något annat när villkoret är falskt? Det är där `else` kommer in – det är som att ha en reservplan.

`else`-satsen ger dig ett sätt att säga "om detta villkor inte är sant, gör istället detta andra."

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

Nu eftersom `500 >= 800` är `false`, hoppar JavaScript över det första blocket och kör istället `else`-blocket. Du kommer att se "Har inte råd med en ny laptop, än!" i konsolen.

✅ Testa din förståelse av denna kod och följande kod genom att köra den i en webbläsares konsol. Ändra värdena på variablerna currentMoney och laptopPrice för att ändra det returnerade `console.log()`.

## Switch-sats

Ibland behöver du jämföra ett värde mot flera alternativ. Även om du kan kedja flera `if..else`-satser, blir denna metod otymplig. `switch`-satsen ger en renare struktur för att hantera flera diskreta värden.

Konceptet liknar de mekaniska kopplingssystemen som användes i tidiga telefonväxlar – ett inmatningsvärde avgör vilken specifik väg exekveringen följer.

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

Så här är det strukturerat:
- JavaScript utvärderar uttrycket en gång
- Det går igenom varje `case` för att hitta en matchning
- När det hittar en matchning kör det det kodblocket
- `break` säger till JavaScript att sluta och lämna switchen
- Om inga fall matchar körs `default`-blocket (om du har ett)

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

I detta exempel ser JavaScript att `dayNumber` är `2`, hittar den matchande `case 2`, sätter `dayName` till "Tisdag" och bryter sedan ut ur switchen. Resultatet? "Idag är det tisdag" loggas till konsolen.

✅ Testa din förståelse av denna kod och följande kod genom att köra den i en webbläsares konsol. Ändra värdena på variabeln a för att ändra det returnerade `console.log()`.

## Logiska operatorer och Booleans

Komplexa beslut kräver ofta att man utvärderar flera villkor samtidigt. Precis som boolesk algebra tillåter matematiker att kombinera logiska uttryck, tillhandahåller programmering logiska operatorer för att koppla samman flera booleska villkor.

Dessa operatorer möjliggör sofistikerad villkorslogik genom att kombinera enkla sant/falskt-utvärderingar.

| Symbol | Beskrivning                                                                                     | Exempel                                                                 |
| ------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **Logisk OCH**: Jämför två booleska uttryck. Returnerar sant **endast** om båda sidorna är sanna | `(5 > 3) && (5 < 10) // Båda sidorna är sanna. Returnerar true` |
| `\|\|` | **Logisk ELLER**: Jämför två booleska uttryck. Returnerar sant om åtminstone en sida är sann     | `(5 > 10) \|\| (5 < 10) // Ena sidan är falsk, andra är sann. Returnerar true` |
| `!`    | **Logisk INTE**: Returnerar motsatt värde av ett booleskt uttryck                               | `!(5 > 10) // 5 är inte större än 10, så "!" gör det sant`         |

Dessa operatorer låter dig kombinera villkor på användbara sätt:
- OCH (`&&`) betyder att båda villkoren måste vara sanna
- ELLER (`||`) betyder att åtminstone ett villkor måste vara sant  
- INTE (`!`) vänder sant till falskt (och vice versa)

## Villkor och beslut med logiska operatorer

Låt oss se dessa logiska operatorer i praktiken med ett mer realistiskt exempel:

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

I detta exempel: vi beräknar ett 20% rabattpris (640), och utvärderar sedan om våra tillgängliga medel täcker antingen det fulla priset ELLER rabattpriset. Eftersom 600 uppfyller rabattpriströskeln på 640, utvärderas villkoret till sant.

### Negationsoperator

Ibland är det lättare att tänka på när något INTE är sant. Som istället för att fråga "Är användaren inloggad?", kanske du vill fråga "Är användaren INTE inloggad?" Utropstecknet (`!`) vänder logiken åt dig.

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

`!`-operatorn är som att säga "motsatsen till..." – om något är `true`, gör `!` det till `false`, och vice versa.

### Ternära uttryck

För enkla villkorsuppdrag tillhandahåller JavaScript **ternära operatorn**. Denna koncisa syntax låter dig skriva ett villkorsuttryck på en enda rad, användbart när du behöver tilldela ett av två värden baserat på ett villkor.

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

Det läses som en fråga: "Är detta villkor sant? Om ja, använd detta värde. Om nej, använd det andra värdet."

Nedan är ett mer konkret exempel:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Ta en minut att läsa denna kod några gånger. Förstår du hur dessa operatorer fungerar?

Det här är vad denna rad säger: "Är `firstNumber` större än `secondNumber`? Om ja, sätt `firstNumber` i `biggestNumber`. Om nej, sätt `secondNumber` i `biggestNumber`."

Den ternära operatorn är bara ett kortare sätt att skriva denna traditionella `if..else`-sats:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

Båda metoderna ger identiska resultat. Den ternära operatorn erbjuder korthet, medan den traditionella if-else-strukturen kan vara mer läsbar för komplexa villkor.

---



## 🚀 Utmaning

Skapa ett program som först skrivs med logiska operatorer och sedan skrivs om med ett ternärt uttryck. Vilken syntax föredrar du?

---

## GitHub Copilot Agent Utmaning 🚀

Använd Agent-läget för att slutföra följande utmaning:

**Beskrivning:** Skapa en omfattande betygskalkylator som demonstrerar flera beslutsfattande koncept från denna lektion, inklusive if-else-satser, switch-satser, logiska operatorer och ternära uttryck.

**Uppgift:** Skriv ett JavaScript-program som tar en elevs numeriska poäng (0-100) och avgör deras bokstavsbetyg enligt följande kriterier:
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: Under 60

Krav:
1. Använd en if-else-sats för att avgöra bokstavsbetyget
2. Använd logiska operatorer för att kontrollera om eleven klarar sig (betyg >= 60) OCH har utmärkt resultat (betyg >= 90)
3. Använd en switch-sats för att ge specifik feedback för varje bokstavsbetyg
4. Använd en ternär operator för att avgöra om eleven är berättigad till nästa kurs (betyg >= 70)
5. Inkludera inmatningsvalidering för att säkerställa att poängen är mellan 0 och 100

Testa ditt program med olika poäng inklusive gränsfall som 59, 60, 89, 90 och ogiltiga inmatningar.

Läs mer om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) här.


## Quiz efter föreläsningen

[Quiz efter föreläsningen](https://ff-quizzes.netlify.app/web/quiz/12)

## Granskning & Självstudier

Läs mer om de många operatorer som finns tillgängliga för användaren [på MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Gå igenom Josh Comeaus fantastiska [operator lookup](https://joshwcomeau.com/operator-lookup/)!

## Uppgift

[Operatorer](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.