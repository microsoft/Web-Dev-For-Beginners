<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fc6aef8ecfdd5b0ad2afa6e6ba52bfde",
  "translation_date": "2025-08-26T21:49:49+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "no"
}
-->
# JavaScript Grunnleggende: Datatyper

![JavaScript Grunnleggende - Datatyper](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.no.png)
> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz før forelesning
[Quiz før forelesning](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/7)

Denne leksjonen dekker det grunnleggende i JavaScript, språket som gir interaktivitet på nettet.

> Du kan ta denne leksjonen på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Variabler](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variabler i JavaScript")

[![Datatyper i JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Datatyper i JavaScript")

> 🎥 Klikk på bildene ovenfor for videoer om variabler og datatyper

La oss starte med variabler og datatypene som fyller dem!
## Variabler

Variabler lagrer verdier som kan brukes og endres gjennom koden din.

Å opprette og **deklarere** en variabel har følgende syntaks **[nøkkelord] [navn]**. Det består av to deler:

- **Nøkkelord**. Nøkkelord kan være `let` eller `var`.  

✅ Nøkkelordet `let` ble introdusert i ES6 og gir variabelen din en såkalt _blokk-scope_. Det anbefales å bruke `let` fremfor `var`. Vi vil dekke blokk-scopes mer i dybden i fremtidige deler.
- **Variabelnavnet**, dette er et navn du velger selv.

### Oppgave - jobbe med variabler

1. **Deklarer en variabel**. La oss deklarere en variabel ved å bruke nøkkelordet `let`:

    ```javascript
    let myVariable;
    ```

   `myVariable` er nå deklarert ved hjelp av nøkkelordet `let`. Den har foreløpig ingen verdi.

1. **Tildel en verdi**. Lagre en verdi i en variabel med operatoren `=`, etterfulgt av den forventede verdien.

    ```javascript
    myVariable = 123;
    ```

   > Merk: bruken av `=` i denne leksjonen betyr at vi bruker en "tilordningsoperator", som brukes til å sette en verdi til en variabel. Det betyr ikke likhet.

   `myVariable` er nå *initialisert* med verdien 123.

1. **Refaktorer**. Erstatt koden din med følgende uttalelse.

    ```javascript
    let myVariable = 123;
    ```

    Det ovennevnte kalles en _eksplisitt initialisering_ når en variabel deklareres og tildeles en verdi samtidig.

1. **Endre variabelverdien**. Endre variabelverdien på følgende måte:

   ```javascript
   myVariable = 321;
   ```

   Når en variabel er deklarert, kan du endre verdien når som helst i koden din med operatoren `=` og den nye verdien.

   ✅ Prøv det! Du kan skrive JavaScript direkte i nettleseren din. Åpne et nettleservindu og naviger til Developer Tools. I konsollen finner du en prompt; skriv `let myVariable = 123`, trykk enter, og skriv deretter `myVariable`. Hva skjer? Merk, du vil lære mer om disse konseptene i senere leksjoner.

## Konstanter

Deklarasjon og initialisering av en konstant følger de samme konseptene som en variabel, med unntak av nøkkelordet `const`. Konstanter deklareres vanligvis med store bokstaver.

```javascript
const MY_VARIABLE = 123;
```

Konstanter ligner på variabler, med to unntak:

- **Må ha en verdi**. Konstanter må initialiseres, ellers vil det oppstå en feil når koden kjøres.
- **Referansen kan ikke endres**. Referansen til en konstant kan ikke endres etter initialisering, ellers vil det oppstå en feil når koden kjøres. La oss se på to eksempler:
   - **Enkel verdi**. Følgende er IKKE tillatt:
   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```
 
   - **Objektreferanse er beskyttet**. Følgende er IKKE tillatt.
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

    - **Objektverdi er ikke beskyttet**. Følgende ER tillatt:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      Ovenfor endrer du verdien til objektet, men ikke selve referansen, noe som gjør det tillatt.

   > Merk, en `const` betyr at referansen er beskyttet mot omtilordning. Verdien er derimot ikke _uforanderlig_ og kan endres, spesielt hvis det er en kompleks konstruksjon som et objekt.

## Datatyper

Variabler kan lagre mange forskjellige typer verdier, som tall og tekst. Disse ulike typene verdier er kjent som **datatyper**. Datatyper er en viktig del av programvareutvikling fordi det hjelper utviklere med å ta beslutninger om hvordan koden skal skrives og hvordan programvaren skal fungere. Videre har noen datatyper unike funksjoner som hjelper til med å transformere eller hente ut tilleggsinformasjon fra en verdi.

✅ Datatyper kalles også JavaScript-dataprimitiver, da de er de laveste nivåene av datatyper som tilbys av språket. Det finnes 7 primitive datatyper: string, number, bigint, boolean, undefined, null og symbol. Ta et øyeblikk til å visualisere hva hver av disse primitivene kan representere. Hva er en `zebra`? Hva med `0`? `true`?

### Tall

I forrige seksjon var verdien av `myVariable` en tall-datatype.

`let myVariable = 123;`

Variabler kan lagre alle typer tall, inkludert desimaltall eller negative tall. Tall kan også brukes med aritmetiske operatorer, som dekkes i [neste seksjon](../../../../2-js-basics/1-data-types).

### Aritmetiske operatorer

Det finnes flere typer operatorer som kan brukes når du utfører aritmetiske funksjoner, og noen er listet her:

| Symbol | Beskrivelse                                                             | Eksempel                          |
| ------ | ----------------------------------------------------------------------- | --------------------------------- |
| `+`    | **Addisjon**: Beregner summen av to tall                               | `1 + 2 //forventet svar er 3`     |
| `-`    | **Subtraksjon**: Beregner differansen mellom to tall                    | `1 - 2 //forventet svar er -1`    |
| `*`    | **Multiplikasjon**: Beregner produktet av to tall                       | `1 * 2 //forventet svar er 2`     |
| `/`    | **Divisjon**: Beregner kvotienten av to tall                           | `1 / 2 //forventet svar er 0.5`   |
| `%`    | **Rest**: Beregner resten fra divisjonen av to tall                    | `1 % 2 //forventet svar er 1`     |

✅ Prøv det! Prøv en aritmetisk operasjon i nettleserens konsoll. Overrasker resultatene deg?

### Strenger

Strenger er sett med tegn som ligger mellom enkelt- eller dobbeltanførselstegn.

- `'Dette er en streng'`
- `"Dette er også en streng"`
- `let myString = 'Dette er en strengverdi lagret i en variabel';`

Husk å bruke anførselstegn når du skriver en streng, ellers vil JavaScript anta at det er et variabelnavn.

### Formatering av strenger

Strenger er tekstuelle og vil kreve formatering fra tid til annen.

For å **konkatenere** to eller flere strenger, eller sette dem sammen, bruk operatoren `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ Hvorfor er `1 + 1 = 2` i JavaScript, men `'1' + '1' = 11?` Tenk på det. Hva med `'1' + 1`?

**Template literals** er en annen måte å formatere strenger på, bortsett fra at baktegn brukes i stedet for anførselstegn. Alt som ikke er ren tekst må plasseres inne i plassholdere `${ }`. Dette inkluderer eventuelle variabler som kan være strenger.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

Du kan oppnå formateringsmålene dine med begge metoder, men template literals vil respektere eventuelle mellomrom og linjeskift.

✅ Når ville du brukt en template literal kontra en vanlig streng?

### Booleans

Booleans kan bare ha to verdier: `true` eller `false`. Booleans kan hjelpe med å ta beslutninger om hvilke linjer med kode som skal kjøres når visse betingelser er oppfylt. I mange tilfeller hjelper [operatorer](../../../../2-js-basics/1-data-types) med å sette verdien til en Boolean, og du vil ofte legge merke til og skrive variabler som blir initialisert eller deres verdier som blir oppdatert med en operator.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ En variabel kan anses som 'truthy' hvis den evalueres til en boolean `true`. Interessant nok, i JavaScript, [er alle verdier truthy med mindre de er definert som falsy](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## 🚀 Utfordring

JavaScript er kjent for sine overraskende måter å håndtere datatyper på av og til. Gjør litt research på disse 'gotchas'. For eksempel: små og store bokstaver kan skape problemer! Prøv dette i konsollen din: `let age = 1; let Age = 2; age == Age` (gir `false` -- hvorfor?). Hvilke andre gotchas kan du finne?

## Quiz etter forelesning
[Quiz etter forelesning](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/8)

## Gjennomgang & Selvstudium

Ta en titt på [denne listen over JavaScript-øvelser](https://css-tricks.com/snippets/javascript/) og prøv en. Hva lærte du?

## Oppgave

[Øv på datatyper](assignment.md)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.