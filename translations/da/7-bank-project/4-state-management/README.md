<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "32bd800759c3e943c38ad9ae6e1f51e0",
  "translation_date": "2025-10-23T22:04:43+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "da"
}
-->
# Byg en bankapp del 4: Koncepter inden for tilstandshåndtering

## Quiz før lektionen

[Quiz før lektionen](https://ff-quizzes.netlify.app/web/quiz/47)

## Introduktion

Tilstandshåndtering er som navigationssystemet på Voyager-rumfartøjet – når alt fungerer glat, bemærker du knap nok, at det er der. Men når tingene går galt, kan det være forskellen mellem at nå interstellart rum og at drive fortabt i det kosmiske tomrum. Inden for webudvikling repræsenterer tilstand alt, hvad din applikation skal huske: brugerens loginstatus, formulardata, navigationshistorik og midlertidige grænsefladetilstande.

Efterhånden som din bankapp er udviklet fra en simpel loginformular til en mere sofistikeret applikation, har du sandsynligvis stødt på nogle almindelige udfordringer. Opdater siden, og brugerne bliver uventet logget ud. Luk browseren, og al fremgang forsvinder. Fejlsøg et problem, og du leder gennem flere funktioner, der alle ændrer de samme data på forskellige måder.

Dette er ikke tegn på dårlig kodning – det er de naturlige vækstproblemer, der opstår, når applikationer når en vis kompleksitet. Hver udvikler står over for disse udfordringer, når deres apps går fra "proof of concept" til "produktionsklar."

I denne lektion implementerer vi et centraliseret tilstandshåndteringssystem, der forvandler din bankapp til en pålidelig, professionel applikation. Du lærer at håndtere dataflow forudsigeligt, bevare brugersessioner korrekt og skabe den glatte brugeroplevelse, som moderne webapplikationer kræver.

## Forudsætninger

Før du dykker ned i tilstandshåndteringskoncepter, skal du have din udviklingsmiljø korrekt opsat og din bankapps fundament på plads. Denne lektion bygger direkte på koncepterne og koden fra de tidligere dele af denne serie.

Sørg for, at du har følgende komponenter klar, før du fortsætter:

**Påkrævet opsætning:**
- Fuldfør [datahentningslektionen](../3-data/README.md) - din app skal kunne indlæse og vise kontodata korrekt
- Installer [Node.js](https://nodejs.org) på dit system for at køre backend-API'en
- Start [server-API'en](../api/README.md) lokalt for at håndtere kontodataoperationer

**Test af dit miljø:**

Bekræft, at din API-server kører korrekt ved at udføre denne kommando i en terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

**Hvad denne kommando gør:**
- **Sender** en GET-anmodning til din lokale API-server
- **Tester** forbindelsen og bekræfter, at serveren svarer
- **Returnerer** API-versionens oplysninger, hvis alt fungerer korrekt

---

## Diagnosticering af de nuværende tilstandsproblemer

Som Sherlock Holmes, der undersøger en gerningssted, skal vi forstå præcis, hvad der sker i vores nuværende implementering, før vi kan løse mysteriet om forsvindende brugersessioner.

Lad os udføre et simpelt eksperiment, der afslører de underliggende udfordringer med tilstandshåndtering:

**🧪 Prøv denne diagnostiske test:**
1. Log ind på din bankapp og naviger til dashboardet
2. Opdater browserens side
3. Observer, hvad der sker med din loginstatus

Hvis du bliver omdirigeret tilbage til login-skærmen, har du opdaget det klassiske problem med tilstandspersistens. Denne adfærd opstår, fordi vores nuværende implementering gemmer brugerdata i JavaScript-variabler, der nulstilles ved hver sideindlæsning.

**Problemer med den nuværende implementering:**

Den simple `account`-variabel fra vores [tidligere lektion](../3-data/README.md) skaber tre væsentlige problemer, der påvirker både brugeroplevelse og kodevedligeholdelse:

| Problem | Teknisk årsag | Brugerpåvirkning |
|---------|---------------|------------------|
| **Sessionstab** | Sideopdatering rydder JavaScript-variabler | Brugere skal ofte logge ind igen |
| **Spredte opdateringer** | Flere funktioner ændrer tilstand direkte | Fejlsøgning bliver mere og mere vanskelig |
| **Ufuldstændig oprydning** | Logout rydder ikke alle tilstandsreferencer | Potentielle sikkerheds- og privatlivsproblemer |

**Den arkitektoniske udfordring:**

Ligesom Titanics opdelte design, der virkede robust, indtil flere rum blev oversvømmet samtidig, vil det ikke løse de underliggende arkitektoniske problemer at rette disse problemer individuelt. Vi har brug for en omfattende løsning til tilstandshåndtering.

> 💡 **Hvad prøver vi egentlig at opnå her?**

[Tilstandshåndtering](https://en.wikipedia.org/wiki/State_management) handler i virkeligheden om at løse to grundlæggende gåder:

1. **Hvor er mine data?**: At holde styr på, hvilke oplysninger vi har, og hvor de kommer fra
2. **Er alle på samme side?**: At sikre, at det, brugerne ser, stemmer overens med, hvad der faktisk sker

**Vores handlingsplan:**

I stedet for at jagte vores egen hale, vil vi oprette et **centraliseret tilstandshåndteringssystem**. Tænk på det som at have én virkelig organiseret person, der har styr på alle de vigtige ting:

![Skema, der viser dataflowet mellem HTML, brugerhandlinger og tilstand](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.da.png)

**Forståelse af dette dataflow:**
- **Centraliserer** al applikationstilstand ét sted
- **Dirigerer** alle tilstandsændringer gennem kontrollerede funktioner
- **Sikrer**, at brugergrænsefladen forbliver synkroniseret med den aktuelle tilstand
- **Giver** et klart, forudsigeligt mønster for datastyring

> 💡 **Professionel indsigt**: Denne lektion fokuserer på grundlæggende koncepter. For komplekse applikationer tilbyder biblioteker som [Redux](https://redux.js.org) mere avancerede funktioner til tilstandshåndtering. At forstå disse kerneprincipper vil hjælpe dig med at mestre ethvert tilstandshåndteringsbibliotek.

> ⚠️ **Avanceret emne**: Vi dækker ikke automatiske UI-opdateringer, der udløses af tilstandsændringer, da dette involverer [Reaktiv programmering](https://en.wikipedia.org/wiki/Reactive_programming)-koncepter. Overvej dette som et fremragende næste skridt i din læringsrejse!

### Opgave: Centraliser tilstandsstruktur

Lad os begynde at transformere vores spredte tilstandshåndtering til et centraliseret system. Dette første skridt etablerer fundamentet for alle de forbedringer, der følger.

**Trin 1: Opret et centraliseret tilstandsobjekt**

Erstat den simple `account`-deklaration:

```js
let account = null;
```

Med et struktureret tilstandsobjekt:

```js
let state = {
  account: null
};
```

**Hvorfor denne ændring er vigtig:**
- **Centraliserer** alle applikationsdata ét sted
- **Forbereder** strukturen til at tilføje flere tilstandsegenskaber senere
- **Skaber** en klar grænse mellem tilstand og andre variabler
- **Etablerer** et mønster, der skalerer, efterhånden som din app vokser

**Trin 2: Opdater tilstandsadgangsmønstre**

Opdater dine funktioner til at bruge den nye tilstandsstruktur:

**I `register()` og `login()` funktionerne**, erstat:
```js
account = ...
```

Med:
```js
state.account = ...
```

**I `updateDashboard()` funktionen**, tilføj denne linje øverst:
```js
const account = state.account;
```

**Hvad disse opdateringer opnår:**
- **Bevarer** eksisterende funktionalitet, mens strukturen forbedres
- **Forbereder** din kode til mere sofistikeret tilstandshåndtering
- **Skaber** konsistente mønstre for adgang til tilstandsdata
- **Etablerer** fundamentet for centraliserede tilstandsopdateringer

> 💡 **Bemærk**: Denne refaktorering løser ikke straks vores problemer, men det skaber det essentielle fundament for de kraftfulde forbedringer, der kommer!

## Implementering af kontrollerede tilstandsopdateringer

Med vores tilstand centraliseret er næste skridt at etablere kontrollerede mekanismer til dataændringer. Denne tilgang sikrer forudsigelige tilstandsændringer og lettere fejlsøgning.

Det grundlæggende princip minder om lufttrafikkontrol: i stedet for at tillade flere funktioner at ændre tilstanden uafhængigt, vil vi kanalisere alle ændringer gennem en enkelt, kontrolleret funktion. Dette mønster giver klar kontrol over, hvornår og hvordan data ændres.

**Uforanderlig tilstandshåndtering:**

Vi vil behandle vores `state`-objekt som [*uforanderligt*](https://en.wikipedia.org/wiki/Immutable_object), hvilket betyder, at vi aldrig ændrer det direkte. I stedet skaber hver ændring et nyt tilstandsobjekt med de opdaterede data.

Selvom denne tilgang måske oprindeligt virker ineffektiv sammenlignet med direkte ændringer, giver den betydelige fordele for fejlsøgning, testning og opretholdelse af applikationens forudsigelighed.

**Fordele ved uforanderlig tilstandshåndtering:**

| Fordel | Beskrivelse | Indvirkning |
|--------|-------------|-------------|
| **Forudsigelighed** | Ændringer sker kun gennem kontrollerede funktioner | Nemmere at fejlsøge og teste |
| **Historiksporing** | Hver tilstandsændring skaber et nyt objekt | Muliggør fortryd/omgør funktionalitet |
| **Forebyggelse af bivirkninger** | Ingen utilsigtede ændringer | Forhindrer mystiske fejl |
| **Ydelsesoptimering** | Let at opdage, når tilstanden faktisk ændrede sig | Muliggør effektive UI-opdateringer |

**JavaScript-uforanderlighed med `Object.freeze()`:**

JavaScript tilbyder [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) for at forhindre ændringer af objekter:

```js
const immutableState = Object.freeze({ account: userData });
// Any attempt to modify immutableState will throw an error
```

**Hvad der sker her:**
- **Forhindrer** direkte egenskabstildelinger eller sletninger
- **Kaster** undtagelser, hvis der forsøges på ændringer
- **Sikrer**, at tilstandsændringer skal gå gennem kontrollerede funktioner
- **Skaber** en klar kontrakt for, hvordan tilstanden kan opdateres

> 💡 **Dybdegående**: Læs om forskellen mellem *overfladiske* og *dybe* uforanderlige objekter i [MDN-dokumentationen](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze). At forstå denne forskel er afgørende for komplekse tilstandsstrukturer.

### Opgave

Lad os oprette en ny `updateState()`-funktion:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

I denne funktion opretter vi et nyt tilstandsobjekt og kopierer data fra den tidligere tilstand ved hjælp af [*spread (`...`) operatoren*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Derefter overskriver vi en bestemt egenskab i tilstandsobjektet med de nye data ved hjælp af [bracket notation](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` til tildeling. Til sidst låser vi objektet for at forhindre ændringer ved hjælp af `Object.freeze()`. Vi har kun egenskaben `account` gemt i tilstanden for nu, men med denne tilgang kan du tilføje så mange egenskaber, som du har brug for i tilstanden.

Vi opdaterer også initialiseringen af `state` for at sikre, at den oprindelige tilstand også er låst:

```js
let state = Object.freeze({
  account: null
});
```

Derefter opdaterer vi `register`-funktionen ved at erstatte tildelingen `state.account = result;` med:

```js
updateState('account', result);
```

Gør det samme med `login`-funktionen, og erstat `state.account = data;` med:

```js
updateState('account', data);
```

Vi benytter også lejligheden til at løse problemet med, at kontodata ikke ryddes, når brugeren klikker på *Logout*.

Opret en ny funktion `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

I `updateDashboard()` skal du erstatte omdirigeringen `return navigate('/login');` med `return logout();`.

Prøv at registrere en ny konto, logge ud og logge ind igen for at kontrollere, at alt stadig fungerer korrekt.

> Tip: Du kan se alle tilstandsændringer ved at tilføje `console.log(state)` nederst i `updateState()` og åbne konsollen i din browsers udviklingsværktøjer.

## Implementering af datapersistens

Problemet med sessionstab, som vi identificerede tidligere, kræver en persistensløsning, der opretholder brugertilstanden på tværs af browsersessioner. Dette forvandler vores applikation fra en midlertidig oplevelse til et pålideligt, professionelt værktøj.

Tænk på, hvordan atomure opretholder præcis tid, selv under strømafbrydelser, ved at gemme kritisk tilstand i ikke-flygtig hukommelse. På samme måde har webapplikationer brug for persistente lagringsmekanismer for at bevare essentielle brugerdata på tværs af browsersessioner og sideopdateringer.

**Strategiske spørgsmål for datapersistens:**

Før du implementerer persistens, skal du overveje disse kritiske faktorer:

| Spørgsmål | Bankapp-kontekst | Beslutningspåvirkning |
|-----------|------------------|-----------------------|
| **Er dataene følsomme?** | Kontosaldo, transaktionshistorik | Vælg sikre lagringsmetoder |
| **Hvor længe skal det opbevares?** | Loginstatus vs. midlertidige UI-præferencer | Vælg passende lagringsvarighed |
| **Har serveren brug for det?** | Autentificeringstokens vs. UI-indstillinger | Bestem delingskrav |

**Browserlagringsmuligheder:**

Moderne browsere tilbyder flere lagringsmekanismer, hver designet til forskellige anvendelser:

**Primære lagrings-API'er:**

1. **[`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage)**: Persistent [Key/Value-lagring](https://en.wikipedia.org/wiki/Key%E2%80%93value_database)
   - **Bevarer** data på tværs af browsersessioner på ubestemt tid  
   - **Overlever** genstart af browseren og computeren
   - **Afgrænset** til det specifikke websteds domæne
   - **Perfekt** til brugerpræferencer og loginstatus

2. **[`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)**: Midlertidig sessionlagring
   - **Fungerer** identisk med localStorage under aktive sessioner
   - **Rydder** automatisk, når browserfanen lukkes
   - **Ideel** til midlertidige data, der ikke bør bevares

3. **[HTTP-cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies)**: Server-delt lagring
   - **Sendes automatisk** med hver serveranmodning
   - **Perfekt** til [autentificering](https://en.wikipedia.org/wiki/Authentication) tokens
   - **Begrænset** i størrelse og kan påvirke ydeevnen

**Krav til dataserialisering:**

Både `localStorage` og `sessionStorage` gemmer kun [strenge](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String):

```js
// Convert objects to JSON strings for storage
const accountData = { user: 'john', balance: 150 };
localStorage.setItem('account', JSON.stringify(accountData));

// Parse JSON strings back to objects when retrieving
const savedAccount = JSON.parse(localStorage.getItem('account'));
```

**Forståelse af serialisering:**
- **Konverterer** JavaScript-objekter til JSON-strenge ved hjælp af [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- **Genskaber** objekter fra JSON ved hjælp af [`JSON.parse()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- **Håndterer** komplekse indlejrede objekter og arrays automatisk
- **Fejler** på funktioner, udefinerede værdier og cirkulære referencer
> 💡 **Avanceret mulighed**: For komplekse offline-applikationer med store datasæt, overvej [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Det tilbyder en fuld klient-side database, men kræver en mere kompleks implementering.

### Opgave: Implementer localStorage Persistens

Lad os implementere persistent lagring, så brugerne forbliver logget ind, indtil de eksplicit logger ud. Vi bruger `localStorage` til at gemme kontodata på tværs af browsersessioner.

**Trin 1: Definer lagringskonfiguration**

```js
const storageKey = 'savedAccount';
```

**Hvad denne konstant tilbyder:**
- **Skaber** en konsistent identifikator for vores lagrede data
- **Forebygger** tastefejl i referencer til lagringsnøgler
- **Gør** det nemt at ændre lagringsnøglen, hvis nødvendigt
- **Følger** bedste praksis for vedligeholdelig kode

**Trin 2: Tilføj automatisk persistens**

Tilføj denne linje i slutningen af funktionen `updateState()`:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

**Hvad der sker her:**
- **Konverterer** kontoobjektet til en JSON-streng for lagring
- **Gemmer** data ved hjælp af vores konsistente lagringsnøgle
- **Udføres** automatisk, når der sker ændringer i tilstanden
- **Sikrer** at lagrede data altid er synkroniseret med den aktuelle tilstand

> 💡 **Arkitektonisk fordel**: Fordi vi centraliserede alle tilstandsopdateringer gennem `updateState()`, krævede det kun én linje kode at tilføje persistens. Dette viser styrken ved gode arkitektoniske beslutninger!

**Trin 3: Gendan tilstand ved app-opstart**

Opret en initialiseringsfunktion til at gendanne gemte data:

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Our previous initialization code
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

**Forståelse af initialiseringsprocessen:**
- **Henter** eventuelle tidligere gemte kontodata fra localStorage
- **Parser** JSON-strengen tilbage til et JavaScript-objekt
- **Opdaterer** tilstanden ved hjælp af vores kontrollerede opdateringsfunktion
- **Gendanner** brugerens session automatisk ved sideindlæsning
- **Udføres** før ruteopdateringer for at sikre, at tilstanden er tilgængelig

**Trin 4: Optimer standardruten**

Opdater standardruten for at udnytte persistens:

I `updateRoute()`, erstat:
```js
// Replace: return navigate('/login');
return navigate('/dashboard');
```

**Hvorfor denne ændring giver mening:**
- **Udnytter** vores nye persistenssystem effektivt
- **Tillader** dashboardet at håndtere autentificeringskontroller
- **Omdirigerer** automatisk til login, hvis der ikke findes en gemt session
- **Skaber** en mere problemfri brugeroplevelse

**Test din implementering:**

1. Log ind på din bankapp
2. Opdater browserens side
3. Bekræft, at du forbliver logget ind og på dashboardet
4. Luk og genåbn din browser
5. Naviger tilbage til din app og bekræft, at du stadig er logget ind

🎉 **Mål opnået**: Du har med succes implementeret persistent tilstandsstyring! Din app opfører sig nu som en professionel webapplikation.

## Balancering af persistens med dataaktualitet

Vores persistenssystem opretholder brugersessioner, men introducerer en ny udfordring: dataforældelse. Når flere brugere eller applikationer ændrer de samme serverdata, bliver lokal cache-information forældet.

Denne situation minder om viking-navigatører, der både stolede på gemte stjernekort og aktuelle observationer af himmellegemer. Kortene gav konsistens, men navigatørerne havde brug for friske observationer for at tage højde for ændrede forhold. På samme måde har vores applikation brug for både persistent brugertilstand og aktuelle serverdata.

**🧪 Opdagelse af problemet med dataaktualitet:**

1. Log ind på dashboardet med kontoen `test`
2. Kør denne kommando i en terminal for at simulere en transaktion fra en anden kilde:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

3. Opdater din dashboard-side i browseren
4. Observer, om du ser den nye transaktion

**Hvad denne test viser:**
- **Viser** hvordan localStorage kan blive "forældet" (udateret)
- **Simulerer** virkelige scenarier, hvor dataændringer sker uden for din app
- **Afslører** spændingen mellem persistens og dataaktualitet

**Udfordringen med dataforældelse:**

| Problem | Årsag | Brugerpåvirkning |
|---------|-------|------------------|
| **Forældede data** | localStorage udløber aldrig automatisk | Brugere ser uaktuelle oplysninger |
| **Serverændringer** | Andre apps/brugere ændrer de samme data | Inkonsistente visninger på tværs af platforme |
| **Cache vs. virkelighed** | Lokal cache matcher ikke servertilstanden | Dårlig brugeroplevelse og forvirring |

**Løsningsstrategi:**

Vi implementerer et "opdater ved indlæsning"-mønster, der balancerer fordelene ved persistens med behovet for friske data. Denne tilgang opretholder den glatte brugeroplevelse, samtidig med at den sikrer dataens nøjagtighed.

### Opgave: Implementer dataopdateringssystem

Vi opretter et system, der automatisk henter friske data fra serveren, mens vi opretholder fordelene ved vores persistente tilstandsstyring.

**Trin 1: Opret konto-dataopdaterer**

```js
async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}
```

**Forståelse af denne funktions logik:**
- **Kontrollerer** om en bruger i øjeblikket er logget ind (state.account eksisterer)
- **Omdirigerer** til logout, hvis der ikke findes en gyldig session
- **Henter** friske kontodata fra serveren ved hjælp af den eksisterende `getAccount()`-funktion
- **Håndterer** serverfejl elegant ved at logge ud ugyldige sessioner
- **Opdaterer** tilstanden med friske data ved hjælp af vores kontrollerede opdateringssystem
- **Udløser** automatisk localStorage-persistens gennem funktionen `updateState()`

**Trin 2: Opret dashboard-opdateringshåndtering**

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

**Hvad denne opdateringsfunktion opnår:**
- **Koordinerer** dataopdatering og UI-opdateringsprocessen
- **Venter** på, at friske data indlæses, før displayet opdateres
- **Sikrer** at dashboardet viser de mest aktuelle oplysninger
- **Opretholder** en ren adskillelse mellem datastyring og UI-opdateringer

**Trin 3: Integrer med rutesystemet**

Opdater din rutekonfiguration til automatisk at udløse opdatering:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

**Hvordan denne integration fungerer:**
- **Udfører** opdateringsfunktionen hver gang dashboard-ruten indlæses
- **Sikrer** at friske data altid vises, når brugere navigerer til dashboardet
- **Opretholder** den eksisterende rutestruktur, mens dataaktualitet tilføjes
- **Tilbyder** et konsistent mønster for rutespecifik initialisering

**Test dit dataopdateringssystem:**

1. Log ind på din bankapp
2. Kør curl-kommandoen fra tidligere for at oprette en ny transaktion
3. Opdater din dashboard-side eller naviger væk og tilbage
4. Bekræft, at den nye transaktion vises med det samme

🎉 **Perfekt balance opnået**: Din app kombinerer nu den glatte oplevelse af persistent tilstand med nøjagtigheden af friske serverdata!

## GitHub Copilot Agent-udfordring 🚀

Brug Agent-tilstand til at fuldføre følgende udfordring:

**Beskrivelse:** Implementer et omfattende tilstandsstyringssystem med fortryd/gendan-funktionalitet til bankappen. Denne udfordring vil hjælpe dig med at øve avancerede tilstandsstyringskoncepter, herunder historiksporing af tilstand, uforanderlige opdateringer og synkronisering af brugergrænsefladen.

**Prompt:** Opret et forbedret tilstandsstyringssystem, der inkluderer: 1) En historik-array, der sporer alle tidligere tilstande, 2) Fortryd og gendan funktioner, der kan vende tilbage til tidligere tilstande, 3) UI-knapper til fortryd/gendan operationer på dashboardet, 4) En maksimal historikgrænse på 10 tilstande for at forhindre hukommelsesproblemer, og 5) Korrekt oprydning af historik, når brugeren logger ud. Sørg for, at fortryd/gendan-funktionaliteten fungerer med ændringer i kontosaldo og vedvarer på tværs af browseropdateringer.

Læs mere om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## 🚀 Udfordring: Lagringsoptimering

Din implementering håndterer nu brugersessioner, dataopdatering og tilstandsstyring effektivt. Overvej dog, om vores nuværende tilgang optimalt balancerer lagringseffektivitet med funktionalitet.

Ligesom skakmestre, der skelner mellem essentielle brikker og ofre, kræver effektiv tilstandsstyring identifikation af, hvilke data der skal bevares, og hvilke der altid skal hentes friske fra serveren.

**Optimeringsanalyse:**

Evaluer din nuværende localStorage-implementering og overvej disse strategiske spørgsmål:
- Hvad er det minimale information, der kræves for at opretholde brugerautentifikation?
- Hvilke data ændrer sig ofte nok til, at lokal caching giver lille fordel?
- Hvordan kan lagringsoptimering forbedre ydeevnen uden at forringe brugeroplevelsen?

**Implementeringsstrategi:**
- **Identificer** de essentielle data, der skal bevares (sandsynligvis kun brugeridentifikation)
- **Modificer** din localStorage-implementering til kun at gemme kritiske sessionsdata
- **Sørg for** at friske data altid hentes fra serveren ved dashboardbesøg
- **Test** at din optimerede tilgang opretholder den samme brugeroplevelse

**Avanceret overvejelse:**
- **Sammenlign** kompromiserne mellem at gemme fulde kontodata vs. kun autentifikationstokens
- **Dokumenter** dine beslutninger og begrundelser for fremtidige teammedlemmer

Denne udfordring vil hjælpe dig med at tænke som en professionel udvikler, der overvejer både brugeroplevelse og applikationseffektivitet. Tag dig tid til at eksperimentere med forskellige tilgange!

## Quiz efter forelæsning

[Quiz efter forelæsning](https://ff-quizzes.netlify.app/web/quiz/48)

## Opgave

[Implementer "Tilføj transaktion"-dialog](assignment.md)

Her er et eksempelresultat efter at have fuldført opgaven:

![Skærmbillede, der viser et eksempel på "Tilføj transaktion"-dialog](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.da.png)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.