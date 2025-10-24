<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "32bd800759c3e943c38ad9ae6e1f51e0",
  "translation_date": "2025-10-23T21:40:32+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "sv"
}
-->
# Bygg en bankapp del 4: Koncept för tillståndshantering

## Förhandsquiz

[Förhandsquiz](https://ff-quizzes.netlify.app/web/quiz/47)

## Introduktion

Tillståndshantering är som navigationssystemet på Voyager-rymdfarkosten – när allt fungerar smidigt märker du knappt att det finns där. Men när något går fel blir det skillnaden mellan att nå interstellärt utrymme och att driva vilse i den kosmiska tomheten. Inom webbutveckling representerar tillstånd allt som din applikation behöver komma ihåg: användarens inloggningsstatus, formulärdata, navigeringshistorik och tillfälliga gränssnittstillstånd.

När din bankapp har utvecklats från ett enkelt inloggningsformulär till en mer sofistikerad applikation har du förmodligen stött på några vanliga utmaningar. Uppdatera sidan och användarna loggas ut oväntat. Stäng webbläsaren och allt framsteg försvinner. Försök att felsöka ett problem och du letar genom flera funktioner som alla ändrar samma data på olika sätt.

Detta är inte tecken på dålig kodning – det är de naturliga växtsmärtor som uppstår när applikationer når en viss komplexitet. Varje utvecklare möter dessa utmaningar när deras appar går från "proof of concept" till "produktionsklara."

I den här lektionen kommer vi att implementera ett centraliserat tillståndshanteringssystem som förvandlar din bankapp till en pålitlig, professionell applikation. Du kommer att lära dig att hantera dataflöden förutsägbart, bevara användarsessioner på rätt sätt och skapa den smidiga användarupplevelse som moderna webbapplikationer kräver.

## Förkunskaper

Innan du dyker in i koncepten för tillståndshantering behöver du ha din utvecklingsmiljö korrekt inställd och grunden för din bankapp på plats. Den här lektionen bygger direkt på koncepten och koden från tidigare delar i den här serien.

Se till att du har följande komponenter redo innan du fortsätter:

**Nödvändig inställning:**
- Slutför [lektionen om datahämtning](../3-data/README.md) - din app bör framgångsrikt ladda och visa kontodata
- Installera [Node.js](https://nodejs.org) på ditt system för att köra backend-API:t
- Starta [server-API:t](../api/README.md) lokalt för att hantera kontodataoperationer

**Testa din miljö:**

Verifiera att din API-server fungerar korrekt genom att köra detta kommando i en terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

**Vad detta kommando gör:**
- **Skickar** en GET-förfrågan till din lokala API-server
- **Testar** anslutningen och verifierar att servern svarar
- **Returnerar** API-versioninformation om allt fungerar korrekt

---

## Diagnostisera nuvarande tillståndsproblem

Som Sherlock Holmes som undersöker en brottsplats behöver vi förstå exakt vad som händer i vår nuvarande implementation innan vi kan lösa mysteriet med försvinnande användarsessioner.

Låt oss genomföra ett enkelt experiment som avslöjar de underliggande utmaningarna med tillståndshantering:

**🧪 Prova detta diagnostiska test:**
1. Logga in på din bankapp och navigera till instrumentpanelen
2. Uppdatera webbläsarsidan
3. Observera vad som händer med din inloggningsstatus

Om du omdirigeras tillbaka till inloggningsskärmen har du upptäckt det klassiska problemet med tillståndsbevarande. Detta beteende uppstår eftersom vår nuvarande implementation lagrar användardata i JavaScript-variabler som återställs vid varje sidladdning.

**Nuvarande implementeringsproblem:**

Den enkla `account`-variabeln från vår [tidigare lektion](../3-data/README.md) skapar tre betydande problem som påverkar både användarupplevelse och kodunderhåll:

| Problem | Teknisk orsak | Användarpåverkan |
|---------|---------------|------------------|
| **Sessionförlust** | Siduppdatering rensar JavaScript-variabler | Användare måste autentisera sig ofta |
| **Spridda uppdateringar** | Flera funktioner ändrar tillstånd direkt | Felsökning blir allt svårare |
| **Ofullständig rensning** | Utloggning rensar inte alla tillståndsreferenser | Potentiella säkerhets- och integritetsproblem |

**Den arkitektoniska utmaningen:**

Som Titanics fackindelade design som verkade robust tills flera fack fylldes med vatten samtidigt, kommer det inte att lösa de underliggande arkitektoniska problemen att fixa dessa problem individuellt. Vi behöver en omfattande lösning för tillståndshantering.

> 💡 **Vad försöker vi egentligen åstadkomma här?**

[Tillståndshantering](https://en.wikipedia.org/wiki/State_management) handlar egentligen om att lösa två grundläggande pussel:

1. **Var är mina data?**: Hålla reda på vilken information vi har och var den kommer ifrån
2. **Är alla på samma sida?**: Säkerställa att det användarna ser stämmer överens med vad som faktiskt händer

**Vår plan:**

Istället för att jaga vår egen svans ska vi skapa ett **centraliserat tillståndshanteringssystem**. Tänk på det som att ha en riktigt organiserad person som ansvarar för allt viktigt:

![Schema som visar dataflöden mellan HTML, användaråtgärder och tillstånd](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.sv.png)

**Förstå detta dataflöde:**
- **Centraliserar** allt applikationstillstånd på en plats
- **Styr** alla tillståndsförändringar genom kontrollerade funktioner
- **Säkerställer** att användargränssnittet förblir synkroniserat med det aktuella tillståndet
- **Tillhandahåller** ett tydligt, förutsägbart mönster för datahantering

> 💡 **Professionell insikt**: Den här lektionen fokuserar på grundläggande koncept. För komplexa applikationer erbjuder bibliotek som [Redux](https://redux.js.org) mer avancerade funktioner för tillståndshantering. Att förstå dessa grundprinciper hjälper dig att bemästra vilket tillståndshanteringsbibliotek som helst.

> ⚠️ **Avancerat ämne**: Vi kommer inte att täcka automatiska UI-uppdateringar som triggas av tillståndsförändringar, eftersom detta involverar koncept från [reaktiv programmering](https://en.wikipedia.org/wiki/Reactive_programming). Se detta som ett utmärkt nästa steg för din lärande resa!

### Uppgift: Centralisera tillståndsstruktur

Låt oss börja med att omvandla vår spridda tillståndshantering till ett centraliserat system. Detta första steg lägger grunden för alla förbättringar som följer.

**Steg 1: Skapa ett centraliserat tillståndsobjekt**

Byt ut den enkla `account`-deklarationen:

```js
let account = null;
```

Mot ett strukturerat tillståndsobjekt:

```js
let state = {
  account: null
};
```

**Varför denna förändring är viktig:**
- **Centraliserar** all applikationsdata på en plats
- **Förbereder** strukturen för att lägga till fler tillståndsegenskaper senare
- **Skapar** en tydlig gräns mellan tillstånd och andra variabler
- **Etablerar** ett mönster som skalar när din app växer

**Steg 2: Uppdatera tillgångsmönster för tillstånd**

Uppdatera dina funktioner för att använda den nya tillståndsstrukturen:

**I funktionerna `register()` och `login()`**, ersätt:
```js
account = ...
```

Med:
```js
state.account = ...
```

**I funktionen `updateDashboard()`**, lägg till denna rad högst upp:
```js
const account = state.account;
```

**Vad dessa uppdateringar åstadkommer:**
- **Bibehåller** befintlig funktionalitet samtidigt som strukturen förbättras
- **Förbereder** din kod för mer sofistikerad tillståndshantering
- **Skapar** konsekventa mönster för att komma åt tillståndsdata
- **Etablerar** grunden för centraliserade tillståndsuppdateringar

> 💡 **Notera**: Denna omstrukturering löser inte omedelbart våra problem, men den skapar den nödvändiga grunden för de kraftfulla förbättringar som kommer härnäst!

## Implementera kontrollerade tillståndsuppdateringar

Med vårt tillstånd centraliserat är nästa steg att etablera kontrollerade mekanismer för datamodifikationer. Detta tillvägagångssätt säkerställer förutsägbara tillståndsförändringar och enklare felsökning.

Den grundläggande principen liknar flygtrafikledning: istället för att tillåta flera funktioner att ändra tillstånd oberoende, kommer vi att kanalisera alla förändringar genom en enda, kontrollerad funktion. Detta mönster ger tydlig översikt över när och hur data ändras.

**Oföränderlig tillståndshantering:**

Vi kommer att behandla vårt `state`-objekt som [*oföränderligt*](https://en.wikipedia.org/wiki/Immutable_object), vilket innebär att vi aldrig ändrar det direkt. Istället skapar varje förändring ett nytt tillståndsobjekt med de uppdaterade data.

Även om detta tillvägagångssätt initialt kan verka ineffektivt jämfört med direkta ändringar, ger det betydande fördelar för felsökning, testning och att upprätthålla applikationens förutsägbarhet.

**Fördelar med oföränderlig tillståndshantering:**

| Fördel | Beskrivning | Påverkan |
|--------|-------------|----------|
| **Förutsägbarhet** | Förändringar sker endast genom kontrollerade funktioner | Lättare att felsöka och testa |
| **Historikspårning** | Varje tillståndsförändring skapar ett nytt objekt | Möjliggör ångra/göra om-funktionalitet |
| **Förebyggande av sidoeffekter** | Inga oavsiktliga ändringar | Förhindrar mystiska buggar |
| **Prestandaoptimering** | Lätt att upptäcka när tillstånd faktiskt ändrades | Möjliggör effektiva UI-uppdateringar |

**JavaScript-oföränderlighet med `Object.freeze()`:**

JavaScript tillhandahåller [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) för att förhindra objektmodifikationer:

```js
const immutableState = Object.freeze({ account: userData });
// Any attempt to modify immutableState will throw an error
```

**Vad som händer här:**
- **Förhindrar** direkta egenskapsändringar eller borttagningar
- **Kastar** undantag vid försök till modifikation
- **Säkerställer** att tillståndsförändringar måste gå genom kontrollerade funktioner
- **Skapar** ett tydligt kontrakt för hur tillstånd kan uppdateras

> 💡 **Fördjupning**: Läs om skillnaden mellan *ytlig* och *djup* oföränderlighet i [MDN-dokumentationen](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze). Att förstå denna skillnad är avgörande för komplexa tillståndsstrukturer.

### Uppgift

Låt oss skapa en ny funktion `updateState()`:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

I denna funktion skapar vi ett nytt tillståndsobjekt och kopierar data från det tidigare tillståndet med hjälp av [*spridningsoperatorn (`...`)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Sedan skriver vi över en specifik egenskap i tillståndsobjektet med de nya data med hjälp av [haknotation](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` för tilldelning. Slutligen låser vi objektet för att förhindra modifikationer med `Object.freeze()`. Vi har bara egenskapen `account` lagrad i tillståndet för tillfället, men med detta tillvägagångssätt kan du lägga till så många egenskaper som du behöver i tillståndet.

Vi kommer också att uppdatera initialiseringen av `state` för att säkerställa att det initiala tillståndet också är låst:

```js
let state = Object.freeze({
  account: null
});
```

Efter det, uppdatera funktionen `register` genom att ersätta tilldelningen `state.account = result;` med:

```js
updateState('account', result);
```

Gör samma sak med funktionen `login`, ersätt `state.account = data;` med:

```js
updateState('account', data);
```

Vi tar nu tillfället i akt att åtgärda problemet med att kontodata inte rensas när användaren klickar på *Logga ut*.

Skapa en ny funktion `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

I `updateDashboard()`, ersätt omdirigeringen `return navigate('/login');` med `return logout();`;

Prova att registrera ett nytt konto, logga ut och in igen för att kontrollera att allt fortfarande fungerar korrekt.

> Tips: Du kan titta på alla tillståndsförändringar genom att lägga till `console.log(state)` längst ner i `updateState()` och öppna konsolen i webbläsarens utvecklingsverktyg.

## Implementera databevarande

Problemet med sessionförlust som vi identifierade tidigare kräver en bevarandelösning som upprätthåller användartillstånd över webbläsarsessioner. Detta förvandlar vår applikation från en tillfällig upplevelse till ett pålitligt, professionellt verktyg.

Tänk på hur atomklockor bibehåller exakt tid även vid strömavbrott genom att lagra kritiskt tillstånd i icke-flyktigt minne. På samma sätt behöver webbapplikationer persistenta lagringsmekanismer för att bevara viktig användardata över webbläsarsessioner och siduppdateringar.

**Strategiska frågor för databevarande:**

Innan du implementerar bevarande, överväg dessa kritiska faktorer:

| Fråga | Bankappens kontext | Beslutsinverkan |
|-------|--------------------|-----------------|
| **Är datan känslig?** | Kontosaldo, transaktionshistorik | Välj säkra lagringsmetoder |
| **Hur länge ska det bevaras?** | Inloggningsstatus vs. tillfälliga UI-inställningar | Välj lämplig lagringsvaraktighet |
| **Behöver servern det?** | Autentiseringstoken vs. UI-inställningar | Bestäm delningskrav |

**Webbläsarens lagringsalternativ:**

Moderna webbläsare tillhandahåller flera lagringsmekanismer, var och en designad för olika användningsområden:

**Primära lagrings-API:er:**

1. **[`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage)**: Persistent [Nyckel/Värde-lagring](https://en.wikipedia.org/wiki/Key%E2%80%93value_database)
   - **Bevarar** data över webbläsarsessioner på obestämd tid  
   - **Överlever** webbläsaromstarter och datoromstarter
   - **Avgränsad** till den specifika webbplatsens domän
   - **Perfekt** för användarinställningar och inloggningsstatus

2. **[`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)**: Tillfällig sessionslagring
   - **Fungerar** identiskt med localStorage under aktiva sessioner
   - **Rensas** automatiskt när webbläsarfliken stängs
   - **Idealisk** för tillfälliga data som inte bör bevaras

3. **[HTTP Cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies)**: Serverdelad lagring
   - **Skickas automatiskt** med varje serverförfrågan
   - **Perfekt** för [autentisering](https://en.wikipedia.org/wiki/Authentication)stoken
   - **Begränsad** i storlek och kan påverka prestanda

**Krav på dataserialisering:**

Både `localStorage` och `sessionStorage` lagrar endast [strängar](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String):

```js
// Convert objects to JSON strings for storage
const accountData = { user: 'john', balance: 150 };
localStorage.setItem('account', JSON.stringify(accountData));

// Parse JSON strings back to objects when retrieving
const savedAccount = JSON.parse(localStorage.getItem('account'));
```

**Förstå serialisering:**
- **Konverterar** JavaScript-objekt till JSON-strängar med [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- **Återskapar** objekt från JSON med [`JSON.parse()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- **Hanterar** komplexa, inbäddade objekt och arrayer automatiskt
- **Misslyckas** med funktioner, odefinierade värden och cirkulära referenser
> 💡 **Avancerat alternativ**: För komplexa offline-applikationer med stora dataset, överväg att använda [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Det erbjuder en fullständig databas på klientsidan men kräver en mer komplex implementation.

### Uppgift: Implementera localStorage-persistens

Låt oss implementera en persistent lagring så att användare förblir inloggade tills de uttryckligen loggar ut. Vi kommer att använda `localStorage` för att lagra kontodata mellan webbläsarsessioner.

**Steg 1: Definiera lagringskonfiguration**

```js
const storageKey = 'savedAccount';
```

**Vad denna konstant tillhandahåller:**
- **Skapar** en konsekvent identifierare för vår lagrade data
- **Förhindrar** skrivfel i referenser till lagringsnycklar
- **Gör** det enkelt att ändra lagringsnyckeln vid behov
- **Följer** bästa praxis för underhållbar kod

**Steg 2: Lägg till automatisk persistens**

Lägg till denna rad i slutet av funktionen `updateState()`:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

**Genomgång av vad som händer här:**
- **Konverterar** kontoobjektet till en JSON-sträng för lagring
- **Sparar** datan med vår konsekventa lagringsnyckel
- **Utförs** automatiskt när tillståndsändringar sker
- **Säkerställer** att lagrad data alltid är synkroniserad med aktuellt tillstånd

> 💡 **Arkitektonisk fördel**: Eftersom vi centraliserade alla tillståndsuppdateringar via `updateState()`, krävdes endast en rad kod för att lägga till persistens. Detta visar styrkan i goda arkitektoniska beslut!

**Steg 3: Återställ tillstånd vid appstart**

Skapa en initialiseringsfunktion för att återställa sparad data:

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

**Förståelse för initialiseringsprocessen:**
- **Hämtar** tidigare sparad kontodata från localStorage
- **Parserar** JSON-strängen tillbaka till ett JavaScript-objekt
- **Uppdaterar** tillståndet med vår kontrollerade uppdateringsfunktion
- **Återställer** användarens session automatiskt vid sidladdning
- **Utförs** innan ruttuppdateringar för att säkerställa att tillståndet är tillgängligt

**Steg 4: Optimera standardrutt**

Uppdatera standardrutten för att dra nytta av persistens:

I `updateRoute()`, ersätt:
```js
// Replace: return navigate('/login');
return navigate('/dashboard');
```

**Varför denna ändring är logisk:**
- **Utnyttjar** vårt nya persistenssystem effektivt
- **Tillåter** dashboarden att hantera autentiseringskontroller
- **Omdirigerar** automatiskt till inloggning om ingen sparad session finns
- **Skapar** en mer sömlös användarupplevelse

**Testa din implementation:**

1. Logga in på din bankapp
2. Uppdatera webbläsarsidan
3. Verifiera att du förblir inloggad och på dashboarden
4. Stäng och öppna webbläsaren igen
5. Navigera tillbaka till din app och bekräfta att du fortfarande är inloggad

🎉 **Prestation uppnådd**: Du har framgångsrikt implementerat persistent tillståndshantering! Din app beter sig nu som en professionell webbapplikation.

## Balans mellan persistens och dataintegritet

Vårt persistenssystem upprätthåller användarsessioner framgångsrikt, men introducerar en ny utmaning: data som blir inaktuell. När flera användare eller applikationer ändrar samma serverdata blir lokal cache-information föråldrad.

Denna situation liknar vikinganavigatörer som förlitade sig på både lagrade stjärnkartor och aktuella observationer av himlakroppar. Kartorna gav konsistens, men navigatörerna behövde färska observationer för att ta hänsyn till förändrade förhållanden. På samma sätt behöver vår applikation både persistent användartillstånd och aktuell serverdata.

**🧪 Upptäck problemet med inaktuell data:**

1. Logga in på dashboarden med kontot `test`
2. Kör detta kommando i en terminal för att simulera en transaktion från en annan källa:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

3. Uppdatera din dashboard-sida i webbläsaren
4. Observera om du ser den nya transaktionen

**Vad detta test visar:**
- **Visar** hur localStorage kan bli "föråldrad" (inaktuell)
- **Simulerar** verkliga scenarier där dataändringar sker utanför din app
- **Avslöjar** spänningen mellan persistens och dataintegritet

**Utmaningen med inaktuell data:**

| Problem | Orsak | Användarpåverkan |
|---------|-------|------------------|
| **Föråldrad data** | localStorage löper aldrig ut automatiskt | Användare ser inaktuell information |
| **Serverändringar** | Andra appar/användare ändrar samma data | Inkonsekventa vyer över plattformar |
| **Cache vs. verklighet** | Lokal cache matchar inte serverns tillstånd | Dålig användarupplevelse och förvirring |

**Lösningsstrategi:**

Vi kommer att implementera ett "uppdatera vid laddning"-mönster som balanserar fördelarna med persistens med behovet av aktuell data. Denna metod bibehåller en smidig användarupplevelse samtidigt som den säkerställer datanoggrannhet.

### Uppgift: Implementera datauppdateringssystem

Vi kommer att skapa ett system som automatiskt hämtar färsk data från servern samtidigt som vi behåller fördelarna med vår persistenta tillståndshantering.

**Steg 1: Skapa en uppdateringsfunktion för kontodata**

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

**Förstå logiken i denna funktion:**
- **Kontrollerar** om en användare för närvarande är inloggad (state.account finns)
- **Omdirigerar** till utloggning om ingen giltig session hittas
- **Hämtar** färsk kontodata från servern med den befintliga funktionen `getAccount()`
- **Hanterar** serverfel på ett smidigt sätt genom att logga ut ogiltiga sessioner
- **Uppdaterar** tillståndet med färsk data via vårt kontrollerade uppdateringssystem
- **Triggar** automatisk localStorage-persistens via funktionen `updateState()`

**Steg 2: Skapa en uppdateringshanterare för dashboarden**

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

**Vad denna uppdateringsfunktion åstadkommer:**
- **Samordnar** datauppdatering och UI-uppdateringsprocessen
- **Väntar** på att färsk data ska laddas innan displayen uppdateras
- **Säkerställer** att dashboarden visar den mest aktuella informationen
- **Bibehåller** en tydlig separation mellan datahantering och UI-uppdateringar

**Steg 3: Integrera med ruttsystemet**

Uppdatera din ruttkonfiguration för att trigga uppdatering automatiskt:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

**Hur denna integration fungerar:**
- **Utför** uppdateringsfunktionen varje gång dashboard-rutten laddas
- **Säkerställer** att färsk data alltid visas när användare navigerar till dashboarden
- **Bibehåller** den befintliga ruttstrukturen samtidigt som dataintegritet läggs till
- **Tillhandahåller** ett konsekvent mönster för rutt-specifik initialisering

**Testa ditt datauppdateringssystem:**

1. Logga in på din bankapp
2. Kör curl-kommandot från tidigare för att skapa en ny transaktion
3. Uppdatera din dashboard-sida eller navigera bort och tillbaka
4. Verifiera att den nya transaktionen visas omedelbart

🎉 **Perfekt balans uppnådd**: Din app kombinerar nu den smidiga upplevelsen av persistent tillstånd med noggrannheten hos färsk serverdata!

## GitHub Copilot Agent-utmaning 🚀

Använd Agent-läget för att slutföra följande utmaning:

**Beskrivning:** Implementera ett omfattande tillståndshanteringssystem med ångra/gör om-funktionalitet för bankappen. Denna utmaning hjälper dig att öva på avancerade koncept inom tillståndshantering, inklusive historikspårning, immutabla uppdateringar och synkronisering av användargränssnittet.

**Prompt:** Skapa ett förbättrat tillståndshanteringssystem som inkluderar: 1) En historikarray som spårar alla tidigare tillstånd, 2) Ångra och gör om-funktioner som kan återgå till tidigare tillstånd, 3) UI-knappar för ångra/gör om-operationer på dashboarden, 4) En maximal historikgräns på 10 tillstånd för att förhindra minnesproblem, och 5) Rätt städning av historik när användaren loggar ut. Säkerställ att ångra/gör om-funktionaliteten fungerar med kontosaldoförändringar och kvarstår över webbläsaruppdateringar.

Läs mer om [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) här.

## 🚀 Utmaning: Lagringsoptimering

Din implementation hanterar nu användarsessioner, datauppdateringar och tillståndshantering effektivt. Men överväg om vår nuvarande metod optimalt balanserar lagringseffektivitet med funktionalitet.

Precis som schackmästare som skiljer mellan viktiga pjäser och utbytbara bönder, kräver effektiv tillståndshantering att man identifierar vilken data som måste bevaras kontra vilken som alltid bör hämtas färsk från servern.

**Optimeringsanalys:**

Utvärdera din nuvarande localStorage-implementation och överväg dessa strategiska frågor:
- Vilken är den minsta informationen som krävs för att upprätthålla användarautentisering?
- Vilken data ändras tillräckligt ofta för att lokal caching ger liten nytta?
- Hur kan lagringsoptimering förbättra prestanda utan att försämra användarupplevelsen?

**Implementeringsstrategi:**
- **Identifiera** den väsentliga data som måste bevaras (troligen bara användaridentifiering)
- **Modifiera** din localStorage-implementation för att endast lagra kritisk sessionsdata
- **Säkerställ** att färsk data alltid hämtas från servern vid dashboardbesök
- **Testa** att din optimerade metod bibehåller samma användarupplevelse

**Avancerad övervägning:**
- **Jämför** avvägningarna mellan att lagra fullständig kontodata kontra endast autentiseringstokens
- **Dokumentera** dina beslut och resonemang för framtida teammedlemmar

Denna utmaning hjälper dig att tänka som en professionell utvecklare som överväger både användarupplevelse och applikationseffektivitet. Ta dig tid att experimentera med olika tillvägagångssätt!

## Quiz efter föreläsningen

[Quiz efter föreläsningen](https://ff-quizzes.netlify.app/web/quiz/48)

## Uppgift

[Implementera dialogen "Lägg till transaktion"](assignment.md)

Här är ett exempelresultat efter att ha slutfört uppgiften:

![Skärmdump som visar ett exempel på dialogen "Lägg till transaktion"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.sv.png)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.