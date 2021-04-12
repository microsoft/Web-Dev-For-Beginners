# JavaScript Basics: Gegevenstypen

![JavaScript Basics - Data types](/sketchnotes/webdev101-js-datatypes.png)
> Sketchnote door [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz voorafgaand aan de lezing
[Quiz voorafgaand aan de lezing](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/7)

Deze les behandelt de basisprincipes van JavaScript, de taal die voor interactiviteit op internet zorgt.

[![Gegevenstypen in JavaScript](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Gegevenstypen in JavaScript")


Laten we beginnen met variabelen en de gegevenstypen waarmee ze worden gevuld!

## Variabelen

Variabelen slaan waarden op die in uw code kunnen worden gebruikt en gewijzigd.

Het creëren en **declareren** van een variabele heeft de volgende syntaxis **[sleutelwoord] [naam]**. Het bestaat uit twee delen:

- **Sleutelwoord**. Sleutelwoorden kunnen `let` of `var` zijn.  

   > Let op, het sleutelwoord `let` is geïntroduceerd in ES6 en geeft uw variabele een zogenaamde _block scope_. Het wordt aanbevolen om `let` over `var` te gebruiken. In toekomstige delen gaan we dieper in op block scopes.
- **De variabelenaam**, dit is een naam die u zelf kiest.

### Taak - werken met variabelen

1. **Declareer een variabele**. Laten we een variabele declareren met het sleutelwoord `let`:

    ```javascript
    let myVariable;
    ```

   `myVariable` is nu gedeclareerd met het `let` sleutelwoord. Het heeft momenteel geen waarde.

1. **Wijs een waarde toe**. Sla een waarde op in een variabele met de operator `=`, gevolgd door de verwachte waarde.

    ```javascript
    myVariable = 123;
    ```

   > Let op: het gebruik van `=` in deze les betekent dat we gebruik maken van een "toewijzingsoperator", die wordt gebruikt om een waarde aan een variabele te geven. Het duidt niet op gelijkheid.

   `myVariable` is nu *geïnitialiseerd* met de waarde 123.

1. **Refactor**. Vervang uw code door de volgende verklaring.

    ```javascript
    let myVariable = 123;
    ```

    Het bovenstaande wordt een _expliciete initialisatie_ genoemd wanneer een variabele wordt gedeclareerd en tegelijkertijd een waarde krijgt toegewezen.

1. **Wijzig de variabele waarde**. Wijzig de waarde van de variabele op de volgende manier:

   ```javascript
   myVariable = 321;
   ```

   Zodra een variabele is gedeclareerd, kunt u de waarde ervan op elk moment in uw code wijzigen met de operator `=` en de nieuwe waarde.

   ✅ Probeer het! U kunt JavaScript rechtstreeks in uw browser schrijven. Open een browservenster en ga naar Developer Tools. In de console vind u een prompt; typ `let myVariable = 123`, druk op Return en typ vervolgens `myVariable`. Wat gebeurt er? Let op, in de volgende lessen leert u meer over deze concepten.

## Constanten

Declaratie en initialisatie van een constante volgt dezelfde concepten als een variabele, met uitzondering van het sleutelwoord `const`. Constanten worden doorgaans gedeclareerd met alleen hoofdletters.

```javascript
const MY_VARIABLE = 123;
```

Constanten zijn vergelijkbaar met variabelen, met twee uitzonderingen:

- **Moet waarde hebben**. Constanten moeten worden geïnitialiseerd, anders treedt er een fout op bij het uitvoeren van code.
- **Referentie kan niet worden gewijzigd**. De referentie van een constante kan niet worden gewijzigd nadat deze is geïnitialiseerd, anders treedt er een fout op bij het uitvoeren van code. Laten we naar twee voorbeelden kijken:
   - **Eenvoudige waarde**. Het volgende is NIET toegestaan:
   
      ```javascript
      const PI = 3;
      PI = 4; // niet toegestaan
      ```
 
   - **Objectreferentie is beveiligd**. Het volgende is NIET toegestaan.
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // niet toegestaan
      ```

    - **Objectwaarde is niet beschermd**. Het volgende is toegestaan:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // toegestaan
      ```

      Hierboven verandert u de waarde van het object maar niet de referentie zelf, waardoor het toegestaan is.

   > Let op: een 'const' betekent dat de referentie is beschermd tegen opnieuw toewijzen. De waarde is echter niet _onveranderlijk_ en kan veranderen, vooral als het een complexe constructie is, zoals een object.

## Gegevenstypen

Variabelen kunnen veel verschillende soorten waarden opslaan, zoals getallen en tekst. Deze verschillende soorten waarden staan bekend als het **gegevenstype**. Gegevenstypen zijn een belangrijk onderdeel van softwareontwikkeling omdat het ontwikkelaars helpt beslissingen te nemen over hoe de code moet worden geschreven en hoe de software moet worden uitgevoerd. Bovendien hebben sommige gegevenstypen unieke kenmerken die helpen bij het transformeren of extraheren van aanvullende informatie in een waarde.

✅ Gegevenstypen worden ook wel JavaScript-gegevensprimitieven genoemd, omdat dit de gegevenstypen op het laagste niveau zijn die door de taal worden geleverd. Er zijn 6 primitieve gegevenstypen: string, number, bigint, boolean, undefined, en symbol. Neem even de tijd om te visualiseren wat elk van deze primitieven zou kunnen vertegenwoordigen. Wat is een `zebra`? Hoe zit het met `0`? `true`?

### Getallen

In de vorige sectie was de waarde van `myVariable` een gegevenstype met een getal.

`let myVariable = 123;`

Variabelen kunnen alle soorten getallen opslaan, inclusief decimalen of negatieve getallen. Getallen kunnen ook worden gebruikt met rekenkundige operatoren, behandeld in de [volgende sectie](#operators).

### Rekenkundige operatoren

Er zijn verschillende soorten operatoren die kunnen worden gebruikt bij het uitvoeren van rekenkundige functies, en sommige worden hier vermeld:

| Symbool | beschrijving                                                  | Voorbeeld                          |
| ------- | ------------------------------------------------------------- | ---------------------------------- |
| `+`     | **Toevoeging**: Berekent de som van twee getallen             | `1 + 2 //verwacht antwoord is 3`   |
| `-`     | **Aftrekken**: Berekent het verschil tussen twee getallen     | `1 - 2 //verwacht antwoord is -1`  |
| `*`     | **Vermenigvuldiging**: Berekent het product van twee getallen | `1 * 2 //verwacht antwoord is 2`   |
| `/`     | **Divisie**: Berekent het quotiënt van twee getallen          | `1 / 2 //verwacht antwoord is 0.5` |
| `%`     | **Rest**: Berekent de rest uit de deling van twee getallen    | `1 % 2 //verwacht antwoord is 1`   |

✅ Probeer het! Probeer een rekenkundige bewerking in de console van uw browser. Verrassen de resultaten u?

### Strings

Strings zijn sets van tekens die tussen enkele of dubbele aanhalingstekens staan.

- `'Dit is een string'`
- `"Dit is ook een string"`
- `let myString = 'Dit is een tekenreekswaarde die is opgeslagen in een variabele';`

Denk eraan om aanhalingstekens te gebruiken bij het schrijven van een string, anders neemt JavaScript aan dat het een variabelenaam is.

### Strings formatteren

Strings zijn tekstueel en moeten van tijd tot tijd worden opgemaakt.

Gebruik de operator `+` om twee of meer strings **samen te voegen**.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ Waarom is `1 + 1 = 2` in JavaScript, maar `'1' + '1' = 11?` Denk er eens over na. Hoe zit het met `'1' + 1`?

**Template literals** zijn een andere manier om strings op te maken, behalve dat in plaats van aanhalingstekens de backtick wordt gebruikt. Alles wat geen platte tekst is, moet tussen tijdelijke aanduidingen `${}` worden geplaatst. Dit omvat alle variabelen die strings kunnen zijn.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

U kunt uw opmaakdoelen met beide methoden bereiken, maar template literals respecteren alle spaties en regeleinden.

✅ Wanneer zou u een template literal versus een gewone string gebruiken?

### Booleans

Booleans kunnen slechts twee waarden zijn: `true` of `false`. Booleans kunnen helpen bij het nemen van beslissingen over welke regels code moeten worden uitgevoerd wanneer aan bepaalde voorwaarden is voldaan. In veel gevallen helpen [operatoren](# operators) bij het instellen van de waarde van een Boolean waarde en u zult vaak merken en variabelen schrijven die geïnitialiseerd worden of dat hun waarden worden bijgewerkt met een operator.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ Een variabele kan als 'waar' worden beschouwd als deze resulteert in een boolean waarde `true`. Interessant is dat in JavaScript [alle waarden waarheidsgetrouw zijn, tenzij ze als onjuist zijn gedefinieerd](https://developer.mozilla.org/nl/docs/Glossary/Truthy).

---

## 🚀 Uitdaging

JavaScript is berucht om zijn verrassende manieren om af en toe met gegevenstypen om te gaan. Doe een beetje onderzoek naar deze 'valstrikken'. Bijvoorbeeld: hoofdlettergevoeligheid kan bijten! Probeer dit in uw console: `let age = 1; let Age = 2; age == Age` (lost `false` op - waarom?). Welke andere valstrikken kunt u vinden?

## Quiz na de lezing
[Quiz na de lezing](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/8)

## Beoordeling en zelfstudie

Bekijk [deze lijst met JavaScript-oefeningen](https://css-tricks.com/snippets/javascript/) en probeer er een. Wat heeft u geleerd?

## Toewijzing

[Gegevenstypen Oefening](assignment.nl.md)
