<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5d2efabbc8f94d89f4317ee8646c3ce9",
  "translation_date": "2025-08-29T08:08:04+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "da"
}
-->
# Byg en Bankapp Del 4: Koncepter inden for State Management

## Quiz før forelæsning

[Quiz før forelæsning](https://ff-quizzes.netlify.app/web/quiz/47)

### Introduktion

Når en webapplikation vokser, bliver det en udfordring at holde styr på alle dataflows. Hvilken kode henter data, hvilken side bruger det, hvor og hvornår skal det opdateres...det er nemt at ende med rodet kode, der er svær at vedligeholde. Dette er især tilfældet, når du skal dele data mellem forskellige sider i din app, for eksempel brugerdata. Konceptet *state management* har altid eksisteret i alle slags programmer, men efterhånden som webapps bliver mere komplekse, er det nu et centralt punkt at tænke over under udviklingen.

I denne sidste del vil vi gennemgå den app, vi har bygget, for at genoverveje, hvordan state håndteres, så vi kan understøtte browseropdatering på ethvert tidspunkt og bevare data på tværs af brugersessioner.

### Forudsætninger

Du skal have gennemført [datahentning](../3-data/README.md)-delen af webappen for denne lektion. Du skal også installere [Node.js](https://nodejs.org) og [køre server-API'et](../api/README.md) lokalt, så du kan administrere kontodata.

Du kan teste, om serveren kører korrekt, ved at udføre denne kommando i en terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Genovervej state management

I [den forrige lektion](../3-data/README.md) introducerede vi et grundlæggende koncept for state i vores app med den globale `account`-variabel, som indeholder bankdata for den aktuelt loggede bruger. Men vores nuværende implementering har nogle mangler. Prøv at opdatere siden, når du er på dashboardet. Hvad sker der?

Der er tre problemer med den nuværende kode:

- State bliver ikke bevaret, da en browseropdatering sender dig tilbage til login-siden.
- Der er flere funktioner, der ændrer state. Efterhånden som appen vokser, kan det gøre det svært at spore ændringer, og det er nemt at glemme at opdatere en.
- State bliver ikke ryddet op, så når du klikker på *Logout*, er kontodata stadig der, selvom du er på login-siden.

Vi kunne opdatere vores kode for at tackle disse problemer ét ad gangen, men det ville skabe mere kodegentagelse og gøre appen mere kompleks og svær at vedligeholde. Eller vi kunne tage et øjeblik og genoverveje vores strategi.

> Hvilke problemer prøver vi egentlig at løse her?

[State management](https://en.wikipedia.org/wiki/State_management) handler om at finde en god tilgang til at løse disse to specifikke problemer:

- Hvordan holder vi dataflows i en app forståelige?
- Hvordan holder vi state-data altid i sync med brugergrænsefladen (og omvendt)?

Når du har taget hånd om disse, kan andre problemer enten allerede være løst eller være blevet lettere at løse. Der er mange mulige tilgange til at løse disse problemer, men vi vil vælge en almindelig løsning, der består i **at centralisere data og måderne at ændre dem på**. Dataflows ville se sådan ud:

![Skema, der viser dataflows mellem HTML, brugerhandlinger og state](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.da.png)

> Vi vil ikke dække den del, hvor data automatisk udløser opdatering af visningen, da det er knyttet til mere avancerede koncepter inden for [Reactive Programming](https://en.wikipedia.org/wiki/Reactive_programming). Det er et godt emne til en dybere dykning.

✅ Der findes mange biblioteker med forskellige tilgange til state management, hvor [Redux](https://redux.js.org) er en populær mulighed. Tag et kig på de koncepter og mønstre, der bruges, da det ofte er en god måde at lære om potentielle problemer, du kan stå over for i store webapps, og hvordan de kan løses.

### Opgave

Vi starter med lidt refaktorering. Erstat `account`-deklarationen:

```js
let account = null;
```

Med:

```js
let state = {
  account: null
};
```

Ideen er at *centralisere* alle vores appdata i et enkelt state-objekt. Vi har kun `account` i state lige nu, så det ændrer ikke meget, men det skaber en vej for fremtidige udvidelser.

Vi skal også opdatere de funktioner, der bruger det. I funktionerne `register()` og `login()` skal du erstatte `account = ...` med `state.account = ...`;

Øverst i funktionen `updateDashboard()` skal du tilføje denne linje:

```js
const account = state.account;
```

Denne refaktorering i sig selv har ikke bragt mange forbedringer, men ideen var at lægge fundamentet for de næste ændringer.

## Spor dataændringer

Nu hvor vi har oprettet `state`-objektet til at gemme vores data, er næste skridt at centralisere opdateringerne. Målet er at gøre det lettere at holde styr på eventuelle ændringer og hvornår de sker.

For at undgå, at der foretages ændringer i `state`-objektet, er det også en god praksis at betragte det som [*immutable*](https://en.wikipedia.org/wiki/Immutable_object), hvilket betyder, at det slet ikke kan ændres. Det betyder også, at du skal oprette et nyt state-objekt, hvis du vil ændre noget i det. Ved at gøre dette bygger du en beskyttelse mod potentielt uønskede [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) og åbner op for nye funktioner i din app, som f.eks. implementering af undo/redo, samtidig med at det bliver lettere at debugge. For eksempel kunne du logge hver ændring, der foretages i state, og holde en historik over ændringerne for at forstå kilden til en fejl.

I JavaScript kan du bruge [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) til at oprette en immutable version af et objekt. Hvis du forsøger at foretage ændringer i et immutable objekt, vil der blive rejst en undtagelse.

✅ Kender du forskellen mellem et *shallow* og et *deep* immutable objekt? Du kan læse om det [her](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze).

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

I denne funktion opretter vi et nyt state-objekt og kopierer data fra det tidligere state ved hjælp af [*spread (`...`) operatoren*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Derefter overskriver vi en bestemt egenskab i state-objektet med de nye data ved hjælp af [bracket notation](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` til tildeling. Til sidst låser vi objektet for at forhindre ændringer ved hjælp af `Object.freeze()`. Vi har kun egenskaben `account` gemt i state lige nu, men med denne tilgang kan du tilføje så mange egenskaber, som du har brug for i state.

Vi opdaterer også `state`-initialiseringen for at sikre, at den oprindelige state også er frosset:

```js
let state = Object.freeze({
  account: null
});
```

Derefter opdaterer vi `register`-funktionen ved at erstatte `state.account = result;`-tildelingen med:

```js
updateState('account', result);
```

Gør det samme med `login`-funktionen ved at erstatte `state.account = data;` med:

```js
updateState('account', data);
```

Vi benytter nu lejligheden til at løse problemet med, at kontodata ikke bliver ryddet, når brugeren klikker på *Logout*.

Opret en ny funktion `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

I `updateDashboard()` skal du erstatte omdirigeringen `return navigate('/login');` med `return logout();`

Prøv at registrere en ny konto, logge ud og logge ind igen for at kontrollere, at alt stadig fungerer korrekt.

> Tip: Du kan se alle state-ændringer ved at tilføje `console.log(state)` nederst i `updateState()` og åbne konsollen i din browsers udviklingsværktøjer.

## Bevar state

De fleste webapps har brug for at bevare data for at kunne fungere korrekt. Alle kritiske data gemmes normalt i en database og tilgås via et server-API, som f.eks. brugerens kontodata i vores tilfælde. Men nogle gange kan det også være interessant at bevare nogle data i klientappen, der kører i din browser, for at give en bedre brugeroplevelse eller forbedre indlæsningshastigheden.

Når du vil bevare data i din browser, er der nogle vigtige spørgsmål, du bør stille dig selv:

- *Er dataene følsomme?* Du bør undgå at gemme følsomme data på klienten, såsom brugerens adgangskoder.
- *Hvor længe har du brug for at gemme disse data?* Planlægger du kun at tilgå disse data under den aktuelle session, eller vil du have dem gemt for evigt?

Der er flere måder at gemme information i en webapp på, afhængigt af hvad du vil opnå. For eksempel kan du bruge URL'er til at gemme en søgeforespørgsel og gøre den delbar mellem brugere. Du kan også bruge [HTTP cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies), hvis dataene skal deles med serveren, som f.eks. [autentifikations](https://en.wikipedia.org/wiki/Authentication)-information.

En anden mulighed er at bruge en af de mange browser-API'er til at gemme data. To af dem er særligt interessante:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): en [Key/Value store](https://en.wikipedia.org/wiki/Key%E2%80%93value_database), der gør det muligt at bevare data, der er specifikke for det aktuelle websted, på tværs af forskellige sessioner. De gemte data udløber aldrig.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): denne fungerer på samme måde som `localStorage`, bortset fra at de gemte data ryddes, når sessionen slutter (når browseren lukkes).

Bemærk, at begge disse API'er kun tillader at gemme [strings](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String). Hvis du vil gemme komplekse objekter, skal du serialisere dem til [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)-formatet ved hjælp af [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

✅ Hvis du vil oprette en webapp, der ikke arbejder med en server, er det også muligt at oprette en database på klienten ved hjælp af [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Denne er reserveret til avancerede brugsscenarier eller hvis du har brug for at gemme betydelige mængder data, da den er mere kompleks at bruge.

### Opgave

Vi vil gerne have, at vores brugere forbliver logget ind, indtil de eksplicit klikker på *Logout*-knappen, så vi bruger `localStorage` til at gemme kontodata. Først definerer vi en nøgle, som vi vil bruge til at gemme vores data.

```js
const storageKey = 'savedAccount';
```

Tilføj derefter denne linje nederst i `updateState()`-funktionen:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

Med dette vil brugerens kontodata blive bevaret og altid være opdateret, da vi tidligere centraliserede alle vores state-opdateringer. Det er her, vi begynder at drage fordel af alle vores tidligere refaktoreringer 🙂.

Da dataene gemmes, skal vi også tage os af at gendanne dem, når appen indlæses. Da vi begynder at have mere initialiseringskode, kan det være en god idé at oprette en ny `init`-funktion, der også inkluderer vores tidligere kode nederst i `app.js`:

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

Her henter vi de gemte data, og hvis der er nogen, opdaterer vi state tilsvarende. Det er vigtigt at gøre dette *før* opdatering af ruten, da der kan være kode, der afhænger af state under sideopdateringen.

Vi kan også gøre *Dashboard*-siden til vores applikations standardside, da vi nu bevarer kontodata. Hvis der ikke findes data, sørger dashboardet for at omdirigere til *Login*-siden alligevel. I `updateRoute()` skal du erstatte fallback `return navigate('/login');` med `return navigate('/dashboard');`.

Log nu ind i appen og prøv at opdatere siden. Du bør forblive på dashboardet. Med denne opdatering har vi taget hånd om alle vores oprindelige problemer...

## Opdater dataene

...Men vi har måske også skabt et nyt problem. Ups!

Gå til dashboardet ved hjælp af `test`-kontoen, og kør derefter denne kommando i en terminal for at oprette en ny transaktion:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Prøv at opdatere dashboard-siden i browseren nu. Hvad sker der? Ser du den nye transaktion?

State bevares på ubestemt tid takket være `localStorage`, men det betyder også, at det aldrig opdateres, før du logger ud af appen og logger ind igen!

En mulig strategi for at løse dette er at genindlæse kontodataene hver gang dashboardet indlæses, for at undgå forældede data.

### Opgave

Opret en ny funktion `updateAccountData`:

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

Denne metode kontrollerer, at vi i øjeblikket er logget ind, og genindlæser derefter kontodataene fra serveren.

Opret en anden funktion ved navn `refresh`:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

Denne opdaterer kontodataene og sørger derefter for at opdatere HTML'en på dashboard-siden. Det er den, vi skal kalde, når dashboard-ruten indlæses. Opdater rutedefinitionen med:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Prøv at genindlæse dashboardet nu, det burde vise de opdaterede kontodata.

---

## 🚀 Udfordring

Nu hvor vi genindlæser kontodataene hver gang dashboardet indlæses, tror du, vi stadig har brug for at bevare *alle kontodata*?

Prøv at arbejde sammen om at ændre, hvad der gemmes og hentes fra `localStorage`, så det kun inkluderer det, der er absolut nødvendigt for, at appen fungerer.

## Quiz efter forelæsning

[Quiz efter forelæsning](https://ff-quizzes.netlify.app/web/quiz/48)

## Opgave
[Implementer "Tilføj transaktion"-dialog](assignment.md)

Her er et eksempelresultat efter at have fuldført opgaven:

![Skærmbillede, der viser et eksempel på "Tilføj transaktion"-dialog](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.da.png)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på at sikre nøjagtighed, skal det bemærkes, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os ikke ansvar for eventuelle misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.