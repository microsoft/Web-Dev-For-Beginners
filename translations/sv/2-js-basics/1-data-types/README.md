<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0092f6533ae3ec3adad5b5ece68efaf",
  "translation_date": "2025-10-23T21:26:24+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "sv"
}
-->
# JavaScript-grunder: Datatyper

![JavaScript Basics - Datatyper](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.sv.png)
> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

Datatyper är ett av de grundläggande koncepten i JavaScript som du kommer att stöta på i varje program du skriver. Tänk på datatyper som det arkiveringssystem som användes av de gamla bibliotekarierna i Alexandria – de hade specifika platser för skriftrullar med poesi, matematik och historiska dokument. JavaScript organiserar information på ett liknande sätt med olika kategorier för olika typer av data.

I denna lektion kommer vi att utforska de grundläggande datatyperna som gör att JavaScript fungerar. Du kommer att lära dig hur man hanterar siffror, text, sant/falskt-värden och förstå varför det är viktigt att välja rätt typ för dina program. Dessa koncept kan verka abstrakta till en början, men med övning kommer de att bli en självklarhet.

Att förstå datatyper kommer att göra allt annat i JavaScript mycket tydligare. Precis som arkitekter behöver förstå olika byggmaterial innan de konstruerar en katedral, kommer dessa grunder att stödja allt du bygger framöver.

## Quiz före föreläsningen
[Quiz före föreläsningen](https://ff-quizzes.netlify.app/web/)

Denna lektion täcker grunderna i JavaScript, språket som ger interaktivitet på webben.

> Du kan ta denna lektion på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Variabler](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variabler i JavaScript")

[![Datatyper i JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Datatyper i JavaScript")

> 🎥 Klicka på bilderna ovan för videor om variabler och datatyper

Låt oss börja med variabler och de datatyper som fyller dem!

## Variabler

Variabler är grundläggande byggstenar inom programmering. Precis som de märkta burkar som medeltida alkemister använde för att lagra olika substanser, låter variabler dig lagra information och ge den ett beskrivande namn så att du kan referera till den senare. Behöver du komma ihåg någons ålder? Lagra det i en variabel som heter `age`. Vill du hålla koll på en användares namn? Spara det i en variabel som heter `userName`.

Vi kommer att fokusera på det moderna sättet att skapa variabler i JavaScript. Teknikerna du lär dig här representerar år av språkutveckling och bästa praxis som utvecklats av programmeringsgemenskapen.

Att skapa och **deklarera** en variabel har följande syntax **[nyckelord] [namn]**. Det består av två delar:

- **Nyckelord**. Använd `let` för variabler som kan ändras, eller `const` för värden som förblir desamma.
- **Variabelnamnet**, detta är ett beskrivande namn som du själv väljer.

✅ Nyckelordet `let` introducerades i ES6 och ger din variabel en så kallad _blockscope_. Det rekommenderas att du använder `let` eller `const` istället för det äldre nyckelordet `var`. Vi kommer att gå igenom blockscope mer ingående i framtida delar.

### Uppgift - arbeta med variabler

1. **Deklarera en variabel**. Låt oss börja med att skapa vår första variabel:

    ```javascript
    let myVariable;
    ```

   **Vad detta åstadkommer:**
   - Detta säger till JavaScript att skapa en lagringsplats som heter `myVariable`
   - JavaScript allokerar utrymme i minnet för denna variabel
   - Variabeln har för närvarande inget värde (undefined)

2. **Ge den ett värde**. Nu ska vi lägga något i vår variabel:

    ```javascript
    myVariable = 123;
    ```

   **Hur tilldelning fungerar:**
   - Operatören `=` tilldelar värdet 123 till vår variabel
   - Variabeln innehåller nu detta värde istället för att vara undefined
   - Du kan referera till detta värde i hela din kod med `myVariable`

   > Obs: användningen av `=` i denna lektion innebär att vi använder en "tilldelningsoperator", som används för att sätta ett värde till en variabel. Det betyder inte likhet.

3. **Gör det på det smarta sättet**. Låt oss faktiskt kombinera dessa två steg:

    ```javascript
    let myVariable = 123;
    ```

    **Detta tillvägagångssätt är mer effektivt:**
    - Du deklarerar variabeln och tilldelar ett värde i ett steg
    - Detta är standardpraxis bland utvecklare
    - Det minskar kodlängden samtidigt som det bibehåller tydlighet

4. **Ändra dig**. Vad händer om vi vill lagra ett annat nummer?

   ```javascript
   myVariable = 321;
   ```

   **Förstå omtilldelning:**
   - Variabeln innehåller nu 321 istället för 123
   - Det tidigare värdet ersätts – variabler lagrar bara ett värde åt gången
   - Denna förändringsbarhet är en nyckelfunktion hos variabler deklarerade med `let`

   ✅ Prova! Du kan skriva JavaScript direkt i din webbläsare. Öppna ett webbläsarfönster och navigera till utvecklarverktygen. I konsolen hittar du en prompt; skriv `let myVariable = 123`, tryck på return, och skriv sedan `myVariable`. Vad händer? Obs, du kommer att lära dig mer om dessa koncept i kommande lektioner.

## Konstanter

Ibland behöver du lagra information som aldrig ska ändras under programmets körning. Tänk på konstanter som de matematiska principer som Euklides fastställde i antikens Grekland – när de väl bevisats och dokumenterats förblev de fasta för all framtid.

Konstanter fungerar på liknande sätt som variabler, men med en viktig begränsning: när du har tilldelat deras värde kan det inte ändras. Denna oföränderlighet hjälper till att förhindra oavsiktliga ändringar av kritiska värden i ditt program.

Deklaration och initialisering av en konstant följer samma koncept som en variabel, med undantag för nyckelordet `const`. Konstanter deklareras vanligtvis med stora bokstäver.

```javascript
const MY_VARIABLE = 123;
```

**Vad denna kod gör:**
- **Skapar** en konstant som heter `MY_VARIABLE` med värdet 123
- **Använder** versaler som namngivningskonvention för konstanter
- **Förhindrar** framtida ändringar av detta värde

Konstanter har två huvudregler:

- **Du måste ge dem ett värde direkt** – inga tomma konstanter tillåtna!
- **Du kan aldrig ändra det värdet** – JavaScript kommer att kasta ett fel om du försöker. Låt oss se vad jag menar:

   **Enkelt värde** - Följande är INTE tillåtet:
   
      ```javascript
      const PI = 3;
      PI = 4; // inte tillåtet
      ```

   **Vad du behöver komma ihåg:**
   - **Försök** att tilldela om en konstant kommer att orsaka ett fel
   - **Skyddar** viktiga värden från oavsiktliga ändringar
   - **Säkerställer** att värdet förblir konsekvent under hela programmet
 
   **Objektreferens är skyddad** - Följande är INTE tillåtet:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // inte tillåtet
      ```

   **Förstå dessa koncept:**
   - **Förhindrar** att hela objektet ersätts med ett nytt
   - **Skyddar** referensen till det ursprungliga objektet
   - **Bibehåller** objektets identitet i minnet

    **Objektvärde är inte skyddat** - Följande ÄR tillåtet:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // tillåtet
      ```

      **Bryt ner vad som händer här:**
      - **Modifierar** egenskapens värde inuti objektet
      - **Behåller** samma objektreferens
      - **Visar** att objektets innehåll kan ändras medan referensen förblir konstant

   > Obs, en `const` betyder att referensen är skyddad från omtilldelning. Värdet är dock inte _oföränderligt_ och kan ändras, särskilt om det är en komplex konstruktion som ett objekt.

## Datatyper

JavaScript organiserar information i olika kategorier som kallas datatyper. Detta koncept speglar hur gamla lärda kategoriserade kunskap – Aristoteles skiljde mellan olika typer av resonemang, med vetskapen om att logiska principer inte kunde tillämpas enhetligt på poesi, matematik och naturfilosofi.

Datatyper är viktiga eftersom olika operationer fungerar med olika typer av information. Precis som du inte kan utföra aritmetik på en persons namn eller alfabetiskt ordna en matematisk ekvation, kräver JavaScript rätt datatyp för varje operation. Att förstå detta förhindrar fel och gör din kod mer tillförlitlig.

Variabler kan lagra många olika typer av värden, som siffror och text. Dessa olika typer av värden kallas **datatyper**. Datatyper är en viktig del av mjukvaruutveckling eftersom det hjälper utvecklare att fatta beslut om hur koden ska skrivas och hur mjukvaran ska fungera. Dessutom har vissa datatyper unika egenskaper som hjälper till att omvandla eller extrahera ytterligare information från ett värde.

✅ Datatyper kallas också för JavaScript-data-primitiver, eftersom de är de mest grundläggande datatyperna som tillhandahålls av språket. Det finns 7 primitiva datatyper: string, number, bigint, boolean, undefined, null och symbol. Ta en minut och visualisera vad var och en av dessa primitiva typer kan representera. Vad är en `zebra`? Hur är det med `0`? `true`?

### Siffror

Siffror är den mest grundläggande datatypen i JavaScript. Oavsett om du arbetar med heltal som 42, decimaler som 3.14 eller negativa tal som -5, hanterar JavaScript dem på samma sätt.

Kommer du ihåg vår variabel från tidigare? Den 123 vi lagrade var faktiskt en datatyp för siffror:

```javascript
let myVariable = 123;
```

**Viktiga egenskaper:**
- JavaScript känner automatiskt igen numeriska värden
- Du kan utföra matematiska operationer med dessa variabler
- Ingen explicit typdeklaration krävs

Variabler kan lagra alla typer av siffror, inklusive decimaler eller negativa tal. Siffror kan också användas med aritmetiska operatorer, som behandlas i [nästa avsnitt](../../../../2-js-basics/1-data-types).

### Aritmetiska operatorer

Aritmetiska operatorer gör det möjligt att utföra matematiska beräkningar i JavaScript. Dessa operatorer följer samma principer som matematiker har använt i århundraden – samma symboler som dök upp i verk av lärda som Al-Khwarizmi, som utvecklade algebraisk notation.

Operatorerna fungerar som du förväntar dig från traditionell matematik: plus för addition, minus för subtraktion och så vidare.

Det finns flera typer av operatorer att använda när du utför aritmetiska funktioner, och några är listade här:

| Symbol | Beskrivning                                                             | Exempel                          |
| ------ | ----------------------------------------------------------------------- | -------------------------------- |
| `+`    | **Addition**: Beräknar summan av två siffror                            | `1 + 2 //förväntat svar är 3`   |
| `-`    | **Subtraktion**: Beräknar skillnaden mellan två siffror                 | `1 - 2 //förväntat svar är -1`  |
| `*`    | **Multiplikation**: Beräknar produkten av två siffror                   | `1 * 2 //förväntat svar är 2`   |
| `/`    | **Division**: Beräknar kvoten av två siffror                            | `1 / 2 //förväntat svar är 0.5` |
| `%`    | **Rest**: Beräknar resten från divisionen av två siffror                | `1 % 2 //förväntat svar är 1`   |

✅ Prova! Testa en aritmetisk operation i din webbläsares konsol. Överraskar resultaten dig?

### Strängar

I JavaScript representeras textdata som strängar. Termen "sträng" kommer från konceptet med tecken som är sammanbundna i en sekvens, ungefär som hur skrivare i medeltida kloster kopplade bokstäver för att bilda ord och meningar i sina manuskript.

Strängar är grundläggande för webbutveckling. Varje text som visas på en webbplats – användarnamn, knappetiketter, felmeddelanden, innehåll – hanteras som strängdata. Att förstå strängar är avgörande för att skapa funktionella användargränssnitt.

Strängar är uppsättningar av tecken som finns mellan enkla eller dubbla citattecken.

```javascript
'This is a string'
"This is also a string"
let myString = 'This is a string value stored in a variable';
```

**Förstå dessa koncept:**
- **Använder** antingen enkla citattecken `'` eller dubbla citattecken `"` för att definiera strängar
- **Lagrar** textdata som kan inkludera bokstäver, siffror och symboler
- **Tilldelar** strängvärden till variabler för senare användning
- **Kräver** citattecken för att skilja text från variabelnamn

Kom ihåg att använda citattecken när du skriver en sträng, annars kommer JavaScript att anta att det är ett variabelnamn.

### Formatering av strängar

Strängmanipulation gör det möjligt att kombinera textelement, inkludera variabler och skapa dynamiskt innehåll som svarar på programmets tillstånd. Denna teknik gör det möjligt att konstruera text programmatiskt.

Ofta behöver du kombinera flera strängar – denna process kallas för konkatenering.

För att **konkatenera** två eller flera strängar, eller slå ihop dem, använd operatorn `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
```

**Steg för steg, här är vad som händer:**
- **Kombinerar** flera strängar med hjälp av operatorn `+`
- **Slår ihop** strängar direkt utan mellanslag i det första exemplet
- **Lägger till** mellanslag `" "` mellan strängar för läsbarhet
- **Infogar** skiljetecken som kommatecken för att skapa korrekt formatering

✅ Varför är `1 + 1 = 2` i JavaScript, men `'1' + '1' = 11?` Fundera på det. Vad händer med `'1' + 1`?

**Mallsträngar** är ett annat sätt att formatera strängar, förutom citattecken används här backtick. Allt som inte är vanlig text måste placeras i platshållare `${ }`. Detta inkluderar alla variabler som kan vara strängar.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

**Låt oss förstå varje del:**
- **Använder** backtick `` ` `` istället för vanliga citattecken för att skapa mallsträngar
- **Infogar** variabler direkt med `${}`-syntax för platshållare
- **Bevarar** mellanslag och formatering exakt som skrivet
- **Ger** ett renare sätt att skapa komplexa strängar med variabler
Du kan uppnå dina formateringsmål med båda metoderna, men mallsträngar respekterar alla mellanslag och radbrytningar.

✅ När skulle du använda en mallsträng istället för en vanlig sträng?

### Booleaner

Booleaner representerar den enklaste formen av data: de kan bara ha ett av två värden – `true` eller `false`. Detta binära logiska system går tillbaka till George Boole, en matematiker från 1800-talet som utvecklade Boolesk algebra.

Trots sin enkelhet är booleaner avgörande för programlogik. De gör det möjligt för din kod att fatta beslut baserat på villkor – om en användare är inloggad, om en knapp har klickats på eller om vissa kriterier är uppfyllda.

Booleaner kan bara ha två värden: `true` eller `false`. Booleaner kan hjälpa till att avgöra vilka kodrader som ska köras när vissa villkor är uppfyllda. I många fall hjälper [operatorer](../../../../2-js-basics/1-data-types) till att sätta värdet på en boolean, och du kommer ofta att märka och skriva variabler som initieras eller vars värden uppdateras med en operator.

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

**I exemplet ovan har vi:**
- **Skapat** en variabel som lagrar booleanvärdet `true`
- **Visat** hur man lagrar booleanvärdet `false`
- **Använt** de exakta nyckelorden `true` och `false` (inga citattecken behövs)
- **Förberett** dessa variabler för användning i villkorssatser

✅ En variabel kan anses vara 'truthy' om den utvärderas till booleanvärdet `true`. Intressant nog är [alla värden i JavaScript truthy om de inte är definierade som falsy](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## GitHub Copilot Agent Challenge 🚀

Använd Agent-läget för att slutföra följande utmaning:

**Beskrivning:** Skapa en personlig informationshanterare som demonstrerar alla JavaScript-datatyper du har lärt dig i denna lektion samtidigt som du hanterar verkliga datascenarier.

**Uppmaning:** Bygg ett JavaScript-program som skapar ett användarprofilobjekt innehållande: en persons namn (sträng), ålder (nummer), studentstatus (boolean), favoritfärger som en array och en adressobjekt med egenskaperna gata, stad och postnummer. Inkludera funktioner för att visa profilinformationen och uppdatera enskilda fält. Se till att demonstrera strängkonkatenering, mallsträngar, aritmetiska operationer med åldern och booleanlogik för studentstatus.

Läs mer om [agent-läge](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) här.

## 🚀 Utmaning

JavaScript har vissa beteenden som kan överraska utvecklare. Här är ett klassiskt exempel att utforska: prova att skriva detta i din webbläsares konsol: `let age = 1; let Age = 2; age == Age` och observera resultatet. Det returnerar `false` – kan du avgöra varför?

Detta representerar ett av många JavaScript-beteenden som är värda att förstå. Att vara bekant med dessa egenheter hjälper dig att skriva mer pålitlig kod och felsöka problem mer effektivt.

## Efterföreläsningsquiz
[Efterföreläsningsquiz](https://ff-quizzes.netlify.app)

## Granskning & Självstudier

Ta en titt på [denna lista med JavaScript-övningar](https://css-tricks.com/snippets/javascript/) och prova en. Vad lärde du dig?

## Uppgift

[Övning med datatyper](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.