<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0092f6533ae3ec3adad5b5ece68efaf",
  "translation_date": "2025-10-23T00:47:10+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "nl"
}
-->
# JavaScript Basisprincipes: Gegevenstypen

![JavaScript Basisprincipes - Gegevenstypen](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.nl.png)
> Sketchnote door [Tomomi Imura](https://twitter.com/girlie_mac)

Gegevenstypen zijn een van de fundamentele concepten in JavaScript die je in elk programma tegenkomt dat je schrijft. Denk aan gegevenstypen als het archiefsysteem dat oude bibliothecarissen in Alexandrië gebruikten – ze hadden specifieke plekken voor rollen met poëzie, wiskunde en historische verslagen. JavaScript organiseert informatie op een vergelijkbare manier met verschillende categorieën voor verschillende soorten gegevens.

In deze les gaan we de kerngegevenstypen verkennen die JavaScript laten werken. Je leert hoe je met getallen, tekst, waar/onwaar-waarden omgaat en waarom het kiezen van het juiste type essentieel is voor je programma's. Deze concepten lijken in het begin misschien abstract, maar met oefening worden ze vanzelfsprekend.

Het begrijpen van gegevenstypen maakt alles in JavaScript veel duidelijker. Net zoals architecten verschillende bouwmaterialen moeten begrijpen voordat ze een kathedraal bouwen, zullen deze basisprincipes alles ondersteunen wat je in de toekomst bouwt.

## Quiz voor de les
[Quiz voor de les](https://ff-quizzes.netlify.app/web/)

Deze les behandelt de basisprincipes van JavaScript, de taal die interactiviteit op het web mogelijk maakt.

> Je kunt deze les volgen op [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Variabelen](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variabelen in JavaScript")

[![Gegevenstypen in JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Gegevenstypen in JavaScript")

> 🎥 Klik op de afbeeldingen hierboven voor video's over variabelen en gegevenstypen

Laten we beginnen met variabelen en de gegevenstypen die ze vullen!

## Variabelen

Variabelen zijn fundamentele bouwstenen in programmeren. Net zoals de gelabelde potten die middeleeuwse alchemisten gebruikten om verschillende stoffen op te slaan, kun je met variabelen informatie opslaan en een beschrijvende naam geven, zodat je er later naar kunt verwijzen. Moet je iemands leeftijd onthouden? Sla het op in een variabele genaamd `age`. Wil je de naam van een gebruiker bijhouden? Bewaar het in een variabele genaamd `userName`.

We richten ons op de moderne aanpak om variabelen te maken in JavaScript. De technieken die je hier leert, vertegenwoordigen jaren van taalontwikkeling en best practices ontwikkeld door de programmeergemeenschap.

Het maken en **declareren** van een variabele heeft de volgende syntaxis **[keyword] [name]**. Het bestaat uit twee delen:

- **Keyword**. Gebruik `let` voor variabelen die kunnen veranderen, of `const` voor waarden die hetzelfde blijven.
- **De variabelenaam**, dit is een beschrijvende naam die je zelf kiest.

✅ Het keyword `let` werd geïntroduceerd in ES6 en geeft je variabele een zogenaamde _block scope_. Het wordt aanbevolen om `let` of `const` te gebruiken in plaats van het oudere keyword `var`. We zullen block scopes later in meer detail behandelen.

### Taak - werken met variabelen

1. **Declareer een variabele**. Laten we beginnen met het maken van onze eerste variabele:

    ```javascript
    let myVariable;
    ```

   **Wat dit doet:**
   - Dit vertelt JavaScript om een opslaglocatie genaamd `myVariable` te maken
   - JavaScript reserveert ruimte in het geheugen voor deze variabele
   - De variabele heeft momenteel geen waarde (undefined)

2. **Geef het een waarde**. Laten we nu iets in onze variabele plaatsen:

    ```javascript
    myVariable = 123;
    ```

   **Hoe toewijzing werkt:**
   - De `=` operator wijst de waarde 123 toe aan onze variabele
   - De variabele bevat nu deze waarde in plaats van undefined
   - Je kunt deze waarde overal in je code gebruiken met `myVariable`

   > Opmerking: het gebruik van `=` in deze les betekent dat we gebruik maken van een "toewijzingsoperator", die wordt gebruikt om een waarde aan een variabele toe te wijzen. Het geeft geen gelijkheid aan.

3. **Doe het op de slimme manier**. Eigenlijk kunnen we deze twee stappen combineren:

    ```javascript
    let myVariable = 123;
    ```

    **Deze aanpak is efficiënter:**
    - Je declareert de variabele en wijst een waarde toe in één statement
    - Dit is de standaardpraktijk onder ontwikkelaars
    - Het verkort de code terwijl de duidelijkheid behouden blijft

4. **Van gedachten veranderen**. Wat als we een ander nummer willen opslaan?

   ```javascript
   myVariable = 321;
   ```

   **Begrip van hernieuwde toewijzing:**
   - De variabele bevat nu 321 in plaats van 123
   - De vorige waarde wordt vervangen – variabelen slaan slechts één waarde tegelijk op
   - Deze veranderlijkheid is een belangrijk kenmerk van variabelen die met `let` zijn gedeclareerd

   ✅ Probeer het! Je kunt JavaScript direct in je browser schrijven. Open een browservenster en ga naar Developer Tools. In de console vind je een prompt; typ `let myVariable = 123`, druk op enter, en typ vervolgens `myVariable`. Wat gebeurt er? Let op, je leert meer over deze concepten in de volgende lessen.

## Constanten

Soms moet je informatie opslaan die tijdens de uitvoering van het programma nooit mag veranderen. Denk aan constanten als de wiskundige principes die Euclides vaststelde in het oude Griekenland – eenmaal bewezen en gedocumenteerd, bleven ze vaststaan voor alle toekomstige referenties.

Constanten werken vergelijkbaar met variabelen, maar met een belangrijke beperking: zodra je hun waarde toewijst, kan deze niet meer worden gewijzigd. Deze onveranderlijkheid helpt om onbedoelde wijzigingen aan kritieke waarden in je programma te voorkomen.

Declaratie en initialisatie van een constante volgen dezelfde concepten als een variabele, met uitzondering van het keyword `const`. Constanten worden meestal gedeclareerd met alleen hoofdletters.

```javascript
const MY_VARIABLE = 123;
```

**Wat deze code doet:**
- **Maakt** een constante genaamd `MY_VARIABLE` met de waarde 123
- **Gebruikt** een naamgevingsconventie met hoofdletters voor constanten
- **Voorkomt** toekomstige wijzigingen aan deze waarde

Constanten hebben twee hoofdregels:

- **Je moet ze meteen een waarde geven** – lege constanten zijn niet toegestaan!
- **Je kunt die waarde nooit veranderen** – JavaScript geeft een foutmelding als je dat probeert. Laten we zien wat ik bedoel:

   **Eenvoudige waarde** - Het volgende is NIET toegestaan:
   
      ```javascript
      const PI = 3;
      PI = 4; // niet toegestaan
      ```

   **Wat je moet onthouden:**
   - **Pogingen** om een constante opnieuw toe te wijzen veroorzaken een fout
   - **Beschermt** belangrijke waarden tegen onbedoelde wijzigingen
   - **Zorgt ervoor** dat de waarde consistent blijft in je programma
 
   **Objectreferentie is beschermd** - Het volgende is NIET toegestaan:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // niet toegestaan
      ```

   **Begrip van deze concepten:**
   - **Voorkomt** het vervangen van het hele object door een nieuw object
   - **Beschermt** de referentie naar het oorspronkelijke object
   - **Behoudt** de identiteit van het object in het geheugen

    **Objectwaarde is niet beschermd** - Het volgende IS toegestaan:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // toegestaan
      ```

      **Wat hier gebeurt:**
      - **Wijzigt** de eigenschapswaarde binnen het object
      - **Behoudt** dezelfde objectreferentie
      - **Toont** dat de inhoud van het object kan veranderen terwijl de referentie constant blijft

   > Opmerking, een `const` betekent dat de referentie beschermd is tegen hernieuwde toewijzing. De waarde is echter niet _onveranderlijk_ en kan veranderen, vooral als het een complex construct is zoals een object.

## Gegevenstypen

JavaScript organiseert informatie in verschillende categorieën, zogenaamde gegevenstypen. Dit concept weerspiegelt hoe oude geleerden kennis categoriseerden – Aristoteles maakte onderscheid tussen verschillende soorten redeneringen, wetende dat logische principes niet uniform konden worden toegepast op poëzie, wiskunde en natuurlijke filosofie.

Gegevenstypen zijn belangrijk omdat verschillende bewerkingen werken met verschillende soorten informatie. Net zoals je geen rekenkundige bewerkingen kunt uitvoeren op iemands naam of een wiskundige vergelijking kunt alfabetiseren, vereist JavaScript het juiste gegevenstype voor elke bewerking. Dit begrijpen voorkomt fouten en maakt je code betrouwbaarder.

Variabelen kunnen veel verschillende soorten waarden opslaan, zoals getallen en tekst. Deze verschillende soorten waarden staan bekend als het **gegevenstype**. Gegevenstypen zijn een belangrijk onderdeel van softwareontwikkeling omdat ze ontwikkelaars helpen beslissingen te nemen over hoe de code moet worden geschreven en hoe de software moet werken. Bovendien hebben sommige gegevenstypen unieke kenmerken die helpen om extra informatie uit een waarde te halen of deze te transformeren.

✅ Gegevenstypen worden ook wel JavaScript data primitives genoemd, omdat het de laagste niveau gegevenstypen zijn die door de taal worden geleverd. Er zijn 7 primitieve gegevenstypen: string, number, bigint, boolean, undefined, null en symbol. Neem een minuut de tijd om je voor te stellen wat elk van deze primitieve typen zou kunnen vertegenwoordigen. Wat is een `zebra`? Hoe zit het met `0`? `true`?

### Getallen

Getallen zijn het meest eenvoudige gegevenstype in JavaScript. Of je nu werkt met gehele getallen zoals 42, decimalen zoals 3.14, of negatieve getallen zoals -5, JavaScript behandelt ze uniform.

Weet je nog onze variabele van eerder? Die 123 die we opsloegen was eigenlijk een gegevenstype getal:

```javascript
let myVariable = 123;
```

**Belangrijke kenmerken:**
- JavaScript herkent numerieke waarden automatisch
- Je kunt wiskundige bewerkingen uitvoeren met deze variabelen
- Geen expliciete typeverklaring vereist

Variabelen kunnen alle soorten getallen opslaan, inclusief decimalen of negatieve getallen. Getallen kunnen ook worden gebruikt met rekenkundige operators, behandeld in de [volgende sectie](../../../../2-js-basics/1-data-types).

### Rekenkundige operators

Rekenkundige operators stellen je in staat om wiskundige berekeningen uit te voeren in JavaScript. Deze operators volgen dezelfde principes die wiskundigen al eeuwenlang gebruiken – dezelfde symbolen die verschenen in de werken van geleerden zoals Al-Khwarizmi, die de algebraïsche notatie ontwikkelde.

De operators werken zoals je zou verwachten van traditionele wiskunde: plus voor optellen, min voor aftrekken, enzovoort.

Er zijn verschillende soorten operators die je kunt gebruiken bij het uitvoeren van rekenkundige functies, en enkele worden hier vermeld:

| Symbool | Beschrijving                                                            | Voorbeeld                        |
| ------- | ----------------------------------------------------------------------- | -------------------------------- |
| `+`     | **Optelling**: Berekent de som van twee getallen                        | `1 + 2 //verwachte antwoord is 3`   |
| `-`     | **Aftrekking**: Berekent het verschil tussen twee getallen              | `1 - 2 //verwachte antwoord is -1`  |
| `*`     | **Vermenigvuldiging**: Berekent het product van twee getallen           | `1 * 2 //verwachte antwoord is 2`   |
| `/`     | **Deling**: Berekent het quotiënt van twee getallen                     | `1 / 2 //verwachte antwoord is 0.5` |
| `%`     | **Rest**: Berekent de rest van de deling van twee getallen              | `1 % 2 //verwachte antwoord is 1`   |

✅ Probeer het! Probeer een rekenkundige bewerking in de console van je browser. Verrassen de resultaten je?

### Strings

In JavaScript wordt tekstuele data weergegeven als strings. De term "string" komt van het concept van karakters die aan elkaar worden geregen, net zoals middeleeuwse monniken letters aan elkaar verbonden om woorden en zinnen te vormen in hun manuscripten.

Strings zijn fundamenteel voor webontwikkeling. Elk stukje tekst dat op een website wordt weergegeven – gebruikersnamen, knoplabels, foutmeldingen, inhoud – wordt behandeld als stringdata. Het begrijpen van strings is essentieel voor het maken van functionele gebruikersinterfaces.

Strings zijn reeksen van tekens die tussen enkele of dubbele aanhalingstekens staan.

```javascript
'This is a string'
"This is also a string"
let myString = 'This is a string value stored in a variable';
```

**Begrip van deze concepten:**
- **Gebruikt** ofwel enkele aanhalingstekens `'` of dubbele aanhalingstekens `"` om strings te definiëren
- **Slaat** tekstgegevens op die letters, cijfers en symbolen kunnen bevatten
- **Wijst** stringwaarden toe aan variabelen voor later gebruik
- **Vereist** aanhalingstekens om tekst te onderscheiden van variabelenamen

Onthoud dat je aanhalingstekens moet gebruiken bij het schrijven van een string, anders gaat JavaScript ervan uit dat het een variabelenaam is.

### Strings formatteren

Met stringmanipulatie kun je tekstelementen combineren, variabelen opnemen en dynamische inhoud creëren die reageert op de toestand van het programma. Deze techniek stelt je in staat om tekst programmatisch te construeren.

Vaak moet je meerdere strings samenvoegen – dit proces wordt concatenatie genoemd.

Om **twee of meer strings samen te voegen**, gebruik je de `+` operator.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
```

**Stap voor stap, dit gebeurt er:**
- **Combineert** meerdere strings met behulp van de `+` operator
- **Voegt** strings direct samen zonder spaties in het eerste voorbeeld
- **Voegt** spaties `" "` tussen strings toe voor leesbaarheid
- **Voegt** interpunctie zoals komma's toe om een correcte opmaak te creëren

✅ Waarom is `1 + 1 = 2` in JavaScript, maar `'1' + '1' = 11?` Denk er eens over na. En hoe zit het met `'1' + 1`?

**Template literals** zijn een andere manier om strings te formatteren, behalve dat in plaats van aanhalingstekens, de backtick wordt gebruikt. Alles wat geen gewone tekst is, moet worden geplaatst in placeholders `${ }`. Dit omvat eventuele variabelen die strings kunnen zijn.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

**Laten we elk onderdeel begrijpen:**
- **Gebruikt** backticks `` ` `` in plaats van gewone aanhalingstekens om template literals te maken
- **Embedt** variabelen direct met behulp van `${}` placeholder-syntaxis
- **Behoudt** spaties en opmaak precies zoals geschreven
- **Biedt** een schonere manier om complexe strings met variabelen te maken
Je kunt je formatteringsdoelen bereiken met beide methoden, maar template literals respecteren alle spaties en regeleinden.

✅ Wanneer zou je een template literal gebruiken in plaats van een gewone string?

### Booleans

Booleans vertegenwoordigen de eenvoudigste vorm van data: ze kunnen slechts één van twee waarden bevatten – `true` of `false`. Dit binaire logische systeem gaat terug naar het werk van George Boole, een wiskundige uit de 19e eeuw die de Booleaanse algebra ontwikkelde.

Ondanks hun eenvoud zijn booleans essentieel voor de logica in programma's. Ze stellen je code in staat beslissingen te nemen op basis van voorwaarden – of een gebruiker is ingelogd, of een knop is aangeklikt, of bepaalde criteria zijn vervuld.

Booleans kunnen slechts twee waarden hebben: `true` of `false`. Booleans helpen bij het nemen van beslissingen over welke regels code moeten worden uitgevoerd wanneer aan bepaalde voorwaarden wordt voldaan. In veel gevallen helpen [operators](../../../../2-js-basics/1-data-types) bij het instellen van de waarde van een Boolean en je zult vaak zien dat variabelen worden geïnitialiseerd of dat hun waarden worden bijgewerkt met een operator.

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

**In het bovenstaande hebben we:**
- **Een variabele gemaakt** die de Boolean-waarde `true` opslaat
- **Gedemonstreerd** hoe je de Boolean-waarde `false` kunt opslaan
- **De exacte trefwoorden** `true` en `false` gebruikt (geen aanhalingstekens nodig)
- **Deze variabelen voorbereid** voor gebruik in conditionele statements

✅ Een variabele kan als 'truthy' worden beschouwd als deze evalueert naar een Boolean `true`. Interessant genoeg zijn in JavaScript [alle waarden truthy, tenzij ze als falsy zijn gedefinieerd](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## GitHub Copilot Agent Challenge 🚀

Gebruik de Agent-modus om de volgende uitdaging te voltooien:

**Beschrijving:** Maak een persoonlijke informatiebeheerder die alle JavaScript-datatypen demonstreert die je in deze les hebt geleerd, terwijl je echte datascenario's behandelt.

**Opdracht:** Bouw een JavaScript-programma dat een gebruikersprofielobject maakt met: de naam van een persoon (string), leeftijd (nummer), studentstatus (boolean), favoriete kleuren als een array, en een adresobject met eigenschappen voor straat, stad en postcode. Voeg functies toe om de profielinformatie weer te geven en individuele velden bij te werken. Zorg ervoor dat je stringconcatenatie, template literals, rekenkundige bewerkingen met de leeftijd en Booleaanse logica voor de studentstatus demonstreert.

Meer informatie over [agent-modus](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) vind je hier.

## 🚀 Uitdaging

JavaScript heeft enkele gedragingen die ontwikkelaars kunnen verrassen. Hier is een klassiek voorbeeld om te verkennen: probeer dit in je browserconsole te typen: `let age = 1; let Age = 2; age == Age` en observeer het resultaat. Het retourneert `false` – kun je bepalen waarom?

Dit is een van de vele JavaScript-gedragingen die het waard zijn om te begrijpen. Vertrouwdheid met deze eigenaardigheden zal je helpen betrouwbaardere code te schrijven en problemen effectiever op te lossen.

## Quiz na de les
[Quiz na de les](https://ff-quizzes.netlify.app)

## Review & Zelfstudie

Bekijk [deze lijst met JavaScript-oefeningen](https://css-tricks.com/snippets/javascript/) en probeer er een. Wat heb je geleerd?

## Opdracht

[Oefening met datatypes](assignment.md)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.