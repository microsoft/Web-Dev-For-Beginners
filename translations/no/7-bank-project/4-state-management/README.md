<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "32bd800759c3e943c38ad9ae6e1f51e0",
  "translation_date": "2025-10-23T22:29:56+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "no"
}
-->
# Bygg en bankapp del 4: Konsepter for tilstandshåndtering

## Quiz før forelesning

[Quiz før forelesning](https://ff-quizzes.netlify.app/web/quiz/47)

## Introduksjon

Tilstandshåndtering er som navigasjonssystemet på Voyager-romfartøyet – når alt fungerer som det skal, merker du knapt at det er der. Men når ting går galt, kan det være forskjellen mellom å nå interstellart rom og å drive viljeløst i det kosmiske tomrommet. I webutvikling representerer tilstand alt applikasjonen din trenger å huske: brukerens innloggingsstatus, skjemadata, navigasjonshistorikk og midlertidige grensesnittilstander.

Etter hvert som bankappen din har utviklet seg fra et enkelt innloggingsskjema til en mer sofistikert applikasjon, har du sannsynligvis støtt på noen vanlige utfordringer. Oppdater siden, og brukerne blir uventet logget ut. Lukk nettleseren, og all fremgang forsvinner. Feilsøk et problem, og du leter gjennom flere funksjoner som alle endrer de samme dataene på forskjellige måter.

Dette er ikke tegn på dårlig koding – det er de naturlige voksesmertene som oppstår når applikasjoner når et visst kompleksitetsnivå. Hver utvikler møter disse utfordringene når appene deres går fra "proof of concept" til "produksjonsklar."

I denne leksjonen skal vi implementere et sentralisert system for tilstandshåndtering som forvandler bankappen din til en pålitelig, profesjonell applikasjon. Du vil lære å håndtere dataflyt på en forutsigbar måte, opprettholde brukerøkter riktig og skape den jevne brukeropplevelsen som moderne webapplikasjoner krever.

## Forutsetninger

Før du dykker ned i konseptene for tilstandshåndtering, må du ha utviklingsmiljøet ditt riktig satt opp og grunnlaget for bankappen din på plass. Denne leksjonen bygger direkte på konseptene og koden fra tidligere deler av denne serien.

Sørg for at du har følgende komponenter klare før du fortsetter:

**Nødvendig oppsett:**
- Fullfør [leksjonen om datahenting](../3-data/README.md) - appen din bør laste og vise kontodata korrekt
- Installer [Node.js](https://nodejs.org) på systemet ditt for å kjøre backend-API
- Start [server-API](../api/README.md) lokalt for å håndtere kontodataoperasjoner

**Test miljøet ditt:**

Bekreft at API-serveren din kjører korrekt ved å utføre denne kommandoen i en terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

**Hva denne kommandoen gjør:**
- **Sender** en GET-forespørsel til din lokale API-server
- **Tester** tilkoblingen og bekrefter at serveren svarer
- **Returnerer** API-versjonsinformasjon hvis alt fungerer som det skal

---

## Diagnostisering av nåværende tilstandsproblemer

Som Sherlock Holmes som undersøker en åsted, må vi forstå nøyaktig hva som skjer i vår nåværende implementering før vi kan løse mysteriet med forsvinnende brukerøkter.

La oss gjennomføre et enkelt eksperiment som avslører de underliggende utfordringene med tilstandshåndtering:

**🧪 Prøv denne diagnostiske testen:**
1. Logg inn på bankappen din og naviger til dashbordet
2. Oppdater nettlesersiden
3. Observer hva som skjer med innloggingsstatusen din

Hvis du blir omdirigert tilbake til innloggingsskjermen, har du oppdaget det klassiske problemet med tilstandspersistens. Denne oppførselen oppstår fordi vår nåværende implementering lagrer brukerdata i JavaScript-variabler som nullstilles ved hver sideoppdatering.

**Problemer med nåværende implementering:**

Den enkle `account`-variabelen fra vår [forrige leksjon](../3-data/README.md) skaper tre betydelige problemer som påvirker både brukeropplevelse og kodevedlikehold:

| Problem | Teknisk årsak | Brukerpåvirkning |
|---------|---------------|------------------|
| **Tap av økt** | Sideoppdatering nullstiller JavaScript-variabler | Brukere må autentisere seg ofte |
| **Spredte oppdateringer** | Flere funksjoner endrer tilstand direkte | Feilsøking blir stadig vanskeligere |
| **Ufullstendig opprydding** | Utlogging fjerner ikke alle tilstandsreferanser | Potensielle sikkerhets- og personvernproblemer |

**Den arkitektoniske utfordringen:**

Som Titanics oppdelte design som virket robust til flere rom ble oversvømt samtidig, vil det å fikse disse problemene individuelt ikke løse det underliggende arkitektoniske problemet. Vi trenger en omfattende løsning for tilstandshåndtering.

> 💡 **Hva prøver vi egentlig å oppnå her?**

[Tilstandshåndtering](https://en.wikipedia.org/wiki/State_management) handler egentlig om å løse to grunnleggende gåter:

1. **Hvor er dataene mine?**: Holde oversikt over hvilken informasjon vi har og hvor den kommer fra
2. **Er alle på samme side?**: Sørge for at det brukerne ser samsvarer med det som faktisk skjer

**Vår handlingsplan:**

I stedet for å jage vår egen hale, skal vi opprette et **sentralisert system for tilstandshåndtering**. Tenk på det som å ha én veldig organisert person som har kontroll på alt det viktige:

![Skjema som viser dataflyten mellom HTML, brukerhandlinger og tilstand](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.no.png)

**Forstå denne dataflyten:**
- **Sentraliserer** all applikasjonstilstand på ett sted
- **Ruter** alle tilstandsoppdateringer gjennom kontrollerte funksjoner
- **Sikrer** at brukergrensesnittet forblir synkronisert med gjeldende tilstand
- **Gir** et klart, forutsigbart mønster for databehandling

> 💡 **Profesjonelt innblikk**: Denne leksjonen fokuserer på grunnleggende konsepter. For komplekse applikasjoner gir biblioteker som [Redux](https://redux.js.org) mer avanserte funksjoner for tilstandshåndtering. Å forstå disse grunnprinsippene vil hjelpe deg med å mestre ethvert bibliotek for tilstandshåndtering.

> ⚠️ **Avansert emne**: Vi dekker ikke automatiske UI-oppdateringer utløst av tilstandsforandringer, da dette involverer konsepter fra [reaktiv programmering](https://en.wikipedia.org/wiki/Reactive_programming). Vurder dette som et utmerket neste steg i læringsreisen din!

### Oppgave: Sentraliser tilstandsstruktur

La oss begynne å transformere vår spredte tilstandshåndtering til et sentralisert system. Dette første steget etablerer grunnlaget for alle forbedringene som følger.

**Steg 1: Opprett et sentralt tilstandsobjekt**

Erstatt den enkle `account`-deklarasjonen:

```js
let account = null;
```

Med et strukturert tilstandsobjekt:

```js
let state = {
  account: null
};
```

**Hvorfor denne endringen er viktig:**
- **Sentraliserer** all applikasjonsdata på ett sted
- **Forbereder** strukturen for å legge til flere tilstandsegenskaper senere
- **Skaper** en klar grense mellom tilstand og andre variabler
- **Etablerer** et mønster som skalerer etter hvert som appen din vokser

**Steg 2: Oppdater tilgangsmønstre for tilstand**

Oppdater funksjonene dine til å bruke den nye tilstandsstrukturen:

**I `register()` og `login()`-funksjonene**, erstatt:
```js
account = ...
```

Med:
```js
state.account = ...
```

**I `updateDashboard()`-funksjonen**, legg til denne linjen øverst:
```js
const account = state.account;
```

**Hva disse oppdateringene oppnår:**
- **Opprettholder** eksisterende funksjonalitet samtidig som strukturen forbedres
- **Forbereder** koden din for mer sofistikert tilstandshåndtering
- **Skaper** konsistente mønstre for tilgang til tilstandsdata
- **Etablerer** grunnlaget for sentraliserte tilstandsoppdateringer

> 💡 **Merk**: Denne refaktoriseringen løser ikke umiddelbart problemene våre, men den skaper det essensielle grunnlaget for de kraftige forbedringene som kommer!

## Implementering av kontrollerte tilstandsoppdateringer

Med vår tilstand sentralisert, innebærer neste steg å etablere kontrollerte mekanismer for datamodifikasjoner. Denne tilnærmingen sikrer forutsigbare tilstandsforandringer og enklere feilsøking.

Kjerneprinsippet ligner på flykontroll: i stedet for å tillate flere funksjoner å endre tilstand uavhengig, vil vi kanalisere alle endringer gjennom én kontrollert funksjon. Dette mønsteret gir klar oversikt over når og hvordan data endres.

**Uforanderlig tilstandshåndtering:**

Vi vil behandle vårt `state`-objekt som [*uforanderlig*](https://en.wikipedia.org/wiki/Immutable_object), noe som betyr at vi aldri endrer det direkte. I stedet skaper hver endring et nytt tilstandsobjekt med de oppdaterte dataene.

Selv om denne tilnærmingen kanskje virker ineffektiv sammenlignet med direkte modifikasjoner, gir den betydelige fordeler for feilsøking, testing og opprettholdelse av applikasjonens forutsigbarhet.

**Fordeler med uforanderlig tilstandshåndtering:**

| Fordel | Beskrivelse | Påvirkning |
|--------|-------------|-----------|
| **Forutsigbarhet** | Endringer skjer kun gjennom kontrollerte funksjoner | Enklere å feilsøke og teste |
| **Historikksporing** | Hver tilstandsforandring skaper et nytt objekt | Muliggjør angre/gjenta-funksjonalitet |
| **Forebygging av bivirkninger** | Ingen utilsiktede modifikasjoner | Forhindrer mystiske feil |
| **Ytelsesoptimalisering** | Lett å oppdage når tilstanden faktisk endret seg | Muliggjør effektive UI-oppdateringer |

**JavaScript-uforanderlighet med `Object.freeze()`:**

JavaScript tilbyr [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) for å forhindre objektmodifikasjoner:

```js
const immutableState = Object.freeze({ account: userData });
// Any attempt to modify immutableState will throw an error
```

**Hva som skjer her:**
- **Forhindrer** direkte egenskapsendringer eller slettinger
- **Kaster** unntak hvis modifikasjonsforsøk gjøres
- **Sikrer** at tilstandsforandringer må gå gjennom kontrollerte funksjoner
- **Skaper** en klar kontrakt for hvordan tilstanden kan oppdateres

> 💡 **Dypdykk**: Lær om forskjellen mellom *grunn* og *dyp* uforanderlige objekter i [MDN-dokumentasjonen](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze). Å forstå denne distinksjonen er avgjørende for komplekse tilstandsstrukturer.

### Oppgave

La oss opprette en ny `updateState()`-funksjon:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

I denne funksjonen oppretter vi et nytt tilstandsobjekt og kopierer data fra den forrige tilstanden ved hjelp av [*spredningsoperatoren (`...`)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Deretter overstyrer vi en bestemt egenskap i tilstandsobjektet med de nye dataene ved hjelp av [brakettnotasjon](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` for tildeling. Til slutt låser vi objektet for å forhindre modifikasjoner ved hjelp av `Object.freeze()`. Vi har foreløpig bare `account`-egenskapen lagret i tilstanden, men med denne tilnærmingen kan du legge til så mange egenskaper du trenger i tilstanden.

Vi vil også oppdatere initialiseringen av `state` for å sikre at den opprinnelige tilstanden også er låst:

```js
let state = Object.freeze({
  account: null
});
```

Deretter oppdaterer vi `register`-funksjonen ved å erstatte `state.account = result;`-tildelingen med:

```js
updateState('account', result);
```

Gjør det samme med `login`-funksjonen, og erstatt `state.account = data;` med:

```js
updateState('account', data);
```

Vi tar nå sjansen til å fikse problemet med at kontodata ikke blir fjernet når brukeren klikker på *Logg ut*.

Opprett en ny funksjon `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

I `updateDashboard()`, erstatt omdirigeringen `return navigate('/login');` med `return logout();`

Prøv å registrere en ny konto, logge ut og inn igjen for å sjekke at alt fortsatt fungerer som det skal.

> Tips: Du kan se på alle tilstandsforandringer ved å legge til `console.log(state)` nederst i `updateState()` og åpne konsollen i nettleserens utviklingsverktøy.

## Implementering av datapersistens

Problemet med tap av økt som vi identifiserte tidligere krever en persistensløsning som opprettholder brukertilstanden på tvers av nettleserøkter. Dette forvandler applikasjonen vår fra en midlertidig opplevelse til et pålitelig, profesjonelt verktøy.

Tenk på hvordan atomklokker opprettholder presis tid selv gjennom strømbrudd ved å lagre kritisk tilstand i ikke-flyktig minne. På samme måte trenger webapplikasjoner vedvarende lagringsmekanismer for å bevare essensielle brukerdata på tvers av nettleserøkter og sideoppdateringer.

**Strategiske spørsmål for datapersistens:**

Før du implementerer persistens, vurder disse kritiske faktorene:

| Spørsmål | Kontekst for bankappen | Beslutningspåvirkning |
|----------|-------------------------|-----------------------|
| **Er dataene sensitive?** | Kontosaldo, transaksjonshistorikk | Velg sikre lagringsmetoder |
| **Hvor lenge skal det vedvare?** | Innloggingsstatus vs. midlertidige UI-preferanser | Velg passende lagringsvarighet |
| **Trenger serveren det?** | Autentiseringstokens vs. UI-innstillinger | Bestem delingskrav |

**Lagringsalternativer i nettleseren:**

Moderne nettlesere tilbyr flere lagringsmekanismer, hver designet for forskjellige bruksområder:

**Primære lagrings-API-er:**

1. **[`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage)**: Vedvarende [Key/Value-lagring](https://en.wikipedia.org/wiki/Key%E2%80%93value_database)
   - **Vedvarer** data på tvers av nettleserøkter på ubestemt tid  
   - **Overlever** nettleseromstarter og datamaskinens omstart
   - **Begrenset** til det spesifikke nettstedets domene
   - **Perfekt** for brukerpreferanser og innloggingsstatus

2. **[`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)**: Midlertidig øktlagring
   - **Fungerer** identisk med localStorage under aktive økter
   - **Tømmes** automatisk når nettleserfanen lukkes
   - **Ideell** for midlertidige data som ikke bør vedvare

3. **[HTTP Cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies)**: Serverdelt lagring
   - **Sendes automatisk** med hver serverforespørsel
   - **Perfekt** for [autentisering](https://en.wikipedia.org/wiki/Authentication)stokens
   - **Begrenset** i størrelse og kan påvirke ytelsen

**Krav til dataserialisering:**

Både `localStorage` og `sessionStorage` lagrer kun [strenger](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String):

```js
// Convert objects to JSON strings for storage
const accountData = { user: 'john', balance: 150 };
localStorage.setItem('account', JSON.stringify(accountData));

// Parse JSON strings back to objects when retrieving
const savedAccount = JSON.parse(localStorage.getItem('account'));
```

**Forstå serialisering:**
- **Konverterer** JavaScript-objekter til JSON-strenger ved hjelp av [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- **Rekonstruerer** objekter fra JSON ved hjelp av [`JSON.parse()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- **Håndterer** komplekse, nestede objekter og matriser automatisk
- **Feiler** på funksjoner, udefinerte verdier og sirkulære referanser
> 💡 **Avansert alternativ**: For komplekse offline-applikasjoner med store datasett, vurder [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Det gir en fullverdig database på klientsiden, men krever en mer kompleks implementering.

### Oppgave: Implementere localStorage-persistens

La oss implementere vedvarende lagring slik at brukerne forblir innlogget til de eksplisitt logger ut. Vi bruker `localStorage` for å lagre kontodata på tvers av nettleserøkter.

**Trinn 1: Definer lagringskonfigurasjon**

```js
const storageKey = 'savedAccount';
```

**Hva denne konstanten gir:**
- **Oppretter** en konsistent identifikator for våre lagrede data
- **Forhindrer** skrivefeil i referanser til lagringsnøkler
- **Gjør** det enkelt å endre lagringsnøkkelen hvis nødvendig
- **Følger** beste praksis for vedlikeholdbar kode

**Trinn 2: Legg til automatisk persistens**

Legg til denne linjen på slutten av `updateState()`-funksjonen:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

**Hva som skjer her:**
- **Konverterer** kontoobjektet til en JSON-streng for lagring
- **Lagrer** dataene ved hjelp av vår konsistente lagringsnøkkel
- **Utfører** automatisk hver gang tilstandsendringer oppstår
- **Sikrer** at lagrede data alltid er synkronisert med gjeldende tilstand

> 💡 **Arkitekturmessig fordel**: Fordi vi sentraliserte alle tilstandsoppdateringer gjennom `updateState()`, krevde det bare én linje kode for å legge til persistens. Dette demonstrerer kraften i gode arkitektoniske beslutninger!

**Trinn 3: Gjenopprett tilstand ved oppstart av appen**

Opprett en initialiseringsfunksjon for å gjenopprette lagrede data:

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

**Forstå initialiseringsprosessen:**
- **Henter** eventuelle tidligere lagrede kontodata fra localStorage
- **Parser** JSON-strengen tilbake til et JavaScript-objekt
- **Oppdaterer** tilstanden ved hjelp av vår kontrollerte oppdateringsfunksjon
- **Gjenoppretter** brukerens økt automatisk ved sideinnlasting
- **Utfører** før ruteoppdateringer for å sikre at tilstanden er tilgjengelig

**Trinn 4: Optimaliser standardruten**

Oppdater standardruten for å dra nytte av persistens:

I `updateRoute()`, erstatt:
```js
// Replace: return navigate('/login');
return navigate('/dashboard');
```

**Hvorfor denne endringen gir mening:**
- **Utnytter** vårt nye persistenssystem effektivt
- **Lar** dashbordet håndtere autentiseringssjekker
- **Omdirigerer** automatisk til innlogging hvis ingen lagret økt eksisterer
- **Skaper** en mer sømløs brukeropplevelse

**Testing av implementeringen:**

1. Logg inn på din bankapp
2. Oppdater nettlesersiden
3. Bekreft at du forblir innlogget og på dashbordet
4. Lukk og åpne nettleseren på nytt
5. Naviger tilbake til appen og bekreft at du fortsatt er innlogget

🎉 **Prestasjon oppnådd**: Du har med suksess implementert vedvarende tilstandshåndtering! Appen din oppfører seg nå som en profesjonell webapplikasjon.

## Balansering av persistens med dataintegritet

Vårt persistenssystem opprettholder brukerøkter, men introduserer en ny utfordring: datastagnasjon. Når flere brukere eller applikasjoner endrer de samme serverdataene, blir lokalbufret informasjon utdatert.

Denne situasjonen ligner på vikingnavigatører som stolte på både lagrede stjernekart og nåværende observasjoner av himmelen. Kartene ga konsistens, men navigatørene trengte ferske observasjoner for å ta hensyn til endrede forhold. På samme måte trenger vår applikasjon både vedvarende brukertilstand og oppdaterte serverdata.

**🧪 Oppdage problemet med datastagnasjon:**

1. Logg inn på dashbordet med `test`-kontoen
2. Kjør denne kommandoen i en terminal for å simulere en transaksjon fra en annen kilde:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

3. Oppdater dashbordet i nettleseren
4. Observer om du ser den nye transaksjonen

**Hva denne testen demonstrerer:**
- **Viser** hvordan localStorage kan bli "gammel" (utdatert)
- **Simulerer** virkelige scenarier der dataendringer skjer utenfor appen din
- **Avslører** spenningen mellom persistens og dataintegritet

**Utfordringen med datastagnasjon:**

| Problem | Årsak | Brukeropplevelse |
|---------|-------|------------------|
| **Utdaterte data** | localStorage utløper aldri automatisk | Brukere ser utdatert informasjon |
| **Serverendringer** | Andre apper/brukere endrer de samme dataene | Ulike visninger på tvers av plattformer |
| **Cache vs. virkelighet** | Lokal cache samsvarer ikke med servertilstand | Dårlig brukeropplevelse og forvirring |

**Løsningsstrategi:**

Vi implementerer et "oppdater ved innlasting"-mønster som balanserer fordelene med persistens med behovet for oppdaterte data. Denne tilnærmingen opprettholder en jevn brukeropplevelse samtidig som den sikrer datanøyaktighet.

### Oppgave: Implementere system for dataoppdatering

Vi lager et system som automatisk henter oppdaterte data fra serveren samtidig som vi opprettholder fordelene med vår vedvarende tilstandshåndtering.

**Trinn 1: Opprett oppdateringsfunksjon for kontodata**

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

**Forstå logikken i denne funksjonen:**
- **Sjekker** om en bruker er innlogget (state.account eksisterer)
- **Omdirigerer** til utlogging hvis ingen gyldig økt finnes
- **Henter** oppdaterte kontodata fra serveren ved hjelp av den eksisterende `getAccount()`-funksjonen
- **Håndterer** serverfeil på en smidig måte ved å logge ut ugyldige økter
- **Oppdaterer** tilstanden med oppdaterte data ved hjelp av vårt kontrollerte oppdateringssystem
- **Trigger** automatisk localStorage-persistens gjennom `updateState()`-funksjonen

**Trinn 2: Opprett oppdateringshåndtering for dashbordet**

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

**Hva denne oppdateringsfunksjonen oppnår:**
- **Koordinerer** dataoppdatering og UI-oppdateringsprosessen
- **Venter** på at oppdaterte data skal lastes før visningen oppdateres
- **Sikrer** at dashbordet viser den mest oppdaterte informasjonen
- **Opprettholder** en ren separasjon mellom databehandling og UI-oppdateringer

**Trinn 3: Integrer med rutesystemet**

Oppdater rutekonfigurasjonen for å automatisk trigge oppdatering:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

**Hvordan denne integrasjonen fungerer:**
- **Utfører** oppdateringsfunksjonen hver gang dashbordruten lastes
- **Sikrer** at oppdaterte data alltid vises når brukere navigerer til dashbordet
- **Opprettholder** den eksisterende rutestrukturen samtidig som dataintegritet legges til
- **Gir** et konsistent mønster for rutespesifikk initialisering

**Testing av systemet for dataoppdatering:**

1. Logg inn på din bankapp
2. Kjør curl-kommandoen fra tidligere for å opprette en ny transaksjon
3. Oppdater dashbordet eller naviger bort og tilbake
4. Bekreft at den nye transaksjonen vises umiddelbart

🎉 **Perfekt balanse oppnådd**: Appen din kombinerer nå den jevne opplevelsen av vedvarende tilstand med nøyaktigheten av oppdaterte serverdata!

## GitHub Copilot Agent-utfordring 🚀

Bruk Agent-modus for å fullføre følgende utfordring:

**Beskrivelse:** Implementer et omfattende tilstandshåndteringssystem med angre/gjenta-funksjonalitet for bankappen. Denne utfordringen vil hjelpe deg med å øve på avanserte konsepter innen tilstandshåndtering, inkludert historikksporing, uforanderlige oppdateringer og synkronisering av brukergrensesnittet.

**Oppgave:** Lag et forbedret tilstandshåndteringssystem som inkluderer: 1) En historikk-array som sporer alle tidligere tilstander, 2) Angre- og gjenta-funksjoner som kan gå tilbake til tidligere tilstander, 3) UI-knapper for angre/gjenta-operasjoner på dashbordet, 4) En maksimal historikkgrense på 10 tilstander for å forhindre minneproblemer, og 5) Rydding av historikk når brukeren logger ut. Sørg for at angre/gjenta-funksjonaliteten fungerer med endringer i kontosaldo og vedvarer på tvers av nettleseroppdateringer.

Lær mer om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) her.

## 🚀 Utfordring: Optimalisering av lagring

Implementeringen din håndterer nå brukerøkter, dataoppdatering og tilstandshåndtering effektivt. Men vurder om vår nåværende tilnærming balanserer lagringseffektivitet med funksjonalitet optimalt.

Som sjakkmestere som skiller mellom essensielle brikker og utbyttbare bønder, krever effektiv tilstandshåndtering identifisering av hvilke data som må vedvare kontra hvilke som alltid bør hentes ferske fra serveren.

**Analyse av optimalisering:**

Evaluer din nåværende localStorage-implementering og vurder disse strategiske spørsmålene:
- Hva er minimumsinformasjonen som kreves for å opprettholde brukerautentisering?
- Hvilke data endres ofte nok til at lokalbufring gir liten fordel?
- Hvordan kan lagringsoptimalisering forbedre ytelsen uten å forringe brukeropplevelsen?

**Implementeringsstrategi:**
- **Identifiser** de essensielle dataene som må vedvare (sannsynligvis bare brukeridentifikasjon)
- **Endre** din localStorage-implementering for kun å lagre kritiske sesjonsdata
- **Sørg for** at oppdaterte data alltid lastes fra serveren ved dashbordbesøk
- **Test** at din optimaliserte tilnærming opprettholder samme brukeropplevelse

**Avansert vurdering:**
- **Sammenlign** avveiningene mellom å lagre fullstendige kontodata kontra kun autentiseringstoken
- **Dokumenter** dine beslutninger og begrunnelser for fremtidige teammedlemmer

Denne utfordringen vil hjelpe deg å tenke som en profesjonell utvikler som vurderer både brukeropplevelse og applikasjonseffektivitet. Ta deg tid til å eksperimentere med forskjellige tilnærminger!

## Quiz etter forelesning

[Quiz etter forelesning](https://ff-quizzes.netlify.app/web/quiz/48)

## Oppgave

[Implementer "Legg til transaksjon"-dialog](assignment.md)

Her er et eksempelresultat etter å ha fullført oppgaven:

![Skjermbilde som viser et eksempel på "Legg til transaksjon"-dialog](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.no.png)

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.