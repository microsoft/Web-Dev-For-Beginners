<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "32bd800759c3e943c38ad9ae6e1f51e0",
  "translation_date": "2025-10-23T00:59:02+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "nl"
}
-->
# Een bankapp bouwen Deel 4: Concepten van State Management

## Quiz voor de les

[Quiz voor de les](https://ff-quizzes.netlify.app/web/quiz/47)

## Introductie

State management is als het navigatiesysteem op het Voyager-ruimteschip – als alles soepel werkt, merk je nauwelijks dat het er is. Maar als er iets misgaat, kan het het verschil maken tussen het bereiken van de interstellaire ruimte en verloren raken in de kosmische leegte. In webontwikkeling vertegenwoordigt de state alles wat je applicatie moet onthouden: gebruikersloginstatus, formuliergegevens, navigatiegeschiedenis en tijdelijke interface-statussen.

Nu je bankapp is geëvolueerd van een eenvoudige inlogformulier naar een meer geavanceerde applicatie, ben je waarschijnlijk enkele veelvoorkomende uitdagingen tegengekomen. Vernieuw de pagina en gebruikers worden onverwacht uitgelogd. Sluit de browser en alle voortgang verdwijnt. Probeer een probleem op te lossen en je zoekt door meerdere functies die allemaal op verschillende manieren dezelfde gegevens wijzigen.

Dit zijn geen tekenen van slecht programmeren – het zijn de natuurlijke groeipijnen die optreden wanneer applicaties een bepaalde complexiteitsdrempel bereiken. Elke ontwikkelaar wordt met deze uitdagingen geconfronteerd wanneer hun apps overgaan van "proof of concept" naar "productieklaar."

In deze les implementeren we een gecentraliseerd state management systeem dat je bankapp transformeert in een betrouwbare, professionele applicatie. Je leert gegevensstromen voorspelbaar te beheren, gebruikerssessies op de juiste manier te behouden en de soepele gebruikerservaring te creëren die moderne webapplicaties vereisen.

## Vereisten

Voordat je je verdiept in de concepten van state management, moet je ervoor zorgen dat je ontwikkelomgeving goed is ingesteld en dat de basis van je bankapp in orde is. Deze les bouwt direct voort op de concepten en code uit de eerdere delen van deze serie.

Zorg ervoor dat je de volgende componenten klaar hebt voordat je verder gaat:

**Benodigdheden:**
- Voltooi de [les over gegevens ophalen](../3-data/README.md) - je app moet succesvol accountgegevens laden en weergeven
- Installeer [Node.js](https://nodejs.org) op je systeem om de backend-API te draaien
- Start de [server-API](../api/README.md) lokaal om accountgegevens te verwerken

**Test je omgeving:**

Controleer of je API-server correct werkt door dit commando uit te voeren in een terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

**Wat dit commando doet:**
- **Verstuurt** een GET-verzoek naar je lokale API-server
- **Test** de verbinding en controleert of de server reageert
- **Geeft** de API-versie-informatie terug als alles correct werkt

---

## Diagnosticeer de huidige state-problemen

Net als Sherlock Holmes die een plaats delict onderzoekt, moeten we precies begrijpen wat er gebeurt in onze huidige implementatie voordat we het mysterie van verdwijnende gebruikerssessies kunnen oplossen.

Laten we een eenvoudig experiment uitvoeren dat de onderliggende uitdagingen van state management onthult:

**🧪 Probeer deze diagnostische test:**
1. Log in op je bankapp en navigeer naar het dashboard
2. Vernieuw de browserpagina
3. Observeer wat er gebeurt met je loginstatus

Als je wordt doorgestuurd naar het inlogscherm, heb je het klassieke probleem van state-persistentie ontdekt. Dit gedrag treedt op omdat onze huidige implementatie gebruikersgegevens opslaat in JavaScript-variabelen die bij elke paginalading worden gereset.

**Huidige implementatieproblemen:**

De eenvoudige `account`-variabele uit onze [vorige les](../3-data/README.md) veroorzaakt drie belangrijke problemen die zowel de gebruikerservaring als de onderhoudbaarheid van de code beïnvloeden:

| Probleem | Technische oorzaak | Impact op gebruiker |
|----------|--------------------|---------------------|
| **Sessieverlies** | Pagina vernieuwen wist JavaScript-variabelen | Gebruikers moeten vaak opnieuw inloggen |
| **Verspreide updates** | Meerdere functies wijzigen de state direct | Debuggen wordt steeds moeilijker |
| **Onvolledige opruiming** | Uitloggen wist niet alle state-referenties | Mogelijke beveiligings- en privacyproblemen |

**De architecturale uitdaging:**

Net als het compartimentontwerp van de Titanic dat robuust leek totdat meerdere compartimenten tegelijkertijd overstroomden, zal het afzonderlijk oplossen van deze problemen de onderliggende architecturale uitdaging niet aanpakken. We hebben een uitgebreide oplossing voor state management nodig.

> 💡 **Wat proberen we hier eigenlijk te bereiken?**

[State management](https://en.wikipedia.org/wiki/State_management) draait eigenlijk om het oplossen van twee fundamentele puzzels:

1. **Waar zijn mijn gegevens?**: Bijhouden welke informatie we hebben en waar die vandaan komt
2. **Is iedereen op dezelfde pagina?**: Zorgen dat wat gebruikers zien overeenkomt met wat er daadwerkelijk gebeurt

**Ons actieplan:**

In plaats van achter de feiten aan te lopen, gaan we een **gecentraliseerd state management** systeem creëren. Denk eraan als één echt georganiseerd persoon die verantwoordelijk is voor alle belangrijke zaken:

![Schema dat de gegevensstromen tussen de HTML, gebruikersacties en state toont](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.nl.png)

**Begrijpen van deze gegevensstroom:**
- **Centraliseert** alle applicatiestate op één locatie
- **Routet** alle state-wijzigingen via gecontroleerde functies
- **Zorgt ervoor** dat de UI gesynchroniseerd blijft met de huidige state
- **Biedt** een duidelijk, voorspelbaar patroon voor gegevensbeheer

> 💡 **Professioneel inzicht**: Deze les richt zich op fundamentele concepten. Voor complexe applicaties bieden bibliotheken zoals [Redux](https://redux.js.org) meer geavanceerde functies voor state management. Het begrijpen van deze kernprincipes helpt je om elke state management-bibliotheek onder de knie te krijgen.

> ⚠️ **Geavanceerd onderwerp**: We behandelen geen automatische UI-updates die worden geactiveerd door state-wijzigingen, omdat dit concepten van [Reactive Programming](https://en.wikipedia.org/wiki/Reactive_programming) omvat. Beschouw dit als een uitstekende volgende stap in je leertraject!

### Taak: Centraliseer de structuur van de state

Laten we beginnen met het transformeren van ons verspreide state management naar een gecentraliseerd systeem. Deze eerste stap legt de basis voor alle verbeteringen die volgen.

**Stap 1: Maak een gecentraliseerd state-object**

Vervang de eenvoudige `account`-verklaring:

```js
let account = null;
```

Door een gestructureerd state-object:

```js
let state = {
  account: null
};
```

**Waarom deze verandering belangrijk is:**
- **Centraliseert** alle applicatiegegevens op één locatie
- **Bereidt** de structuur voor om later meer state-eigenschappen toe te voegen
- **Creëert** een duidelijke scheiding tussen state en andere variabelen
- **Legt** een patroon vast dat schaalbaar is naarmate je app groeit

**Stap 2: Update state-toegangspatronen**

Update je functies om de nieuwe state-structuur te gebruiken:

**In de functies `register()` en `login()`**, vervang:
```js
account = ...
```

Door:
```js
state.account = ...
```

**In de functie `updateDashboard()`**, voeg deze regel toe bovenaan:
```js
const account = state.account;
```

**Wat deze updates bereiken:**
- **Behoudt** bestaande functionaliteit terwijl de structuur wordt verbeterd
- **Bereidt** je code voor op meer geavanceerd state management
- **Creëert** consistente patronen voor toegang tot state-gegevens
- **Legt** de basis voor gecentraliseerde state-updates

> 💡 **Opmerking**: Deze refactoring lost onze problemen niet onmiddellijk op, maar creëert de essentiële basis voor de krachtige verbeteringen die volgen!

## Gecontroleerde state-updates implementeren

Met onze state gecentraliseerd, is de volgende stap het opzetten van gecontroleerde mechanismen voor gegevenswijzigingen. Deze aanpak zorgt voor voorspelbare state-wijzigingen en gemakkelijker debuggen.

Het kernprincipe lijkt op luchtverkeersleiding: in plaats van meerdere functies toe te staan om de state onafhankelijk te wijzigen, leiden we alle wijzigingen door een enkele, gecontroleerde functie. Dit patroon biedt duidelijk toezicht op wanneer en hoe gegevens worden gewijzigd.

**Immutable State Management:**

We behandelen ons `state`-object als [*immutable*](https://en.wikipedia.org/wiki/Immutable_object), wat betekent dat we het nooit direct wijzigen. In plaats daarvan creëert elke wijziging een nieuw state-object met de bijgewerkte gegevens.

Hoewel deze aanpak in eerste instantie misschien inefficiënt lijkt in vergelijking met directe wijzigingen, biedt het aanzienlijke voordelen voor debuggen, testen en het behouden van voorspelbaarheid van de applicatie.

**Voordelen van immutable state management:**

| Voordeel | Beschrijving | Impact |
|----------|--------------|--------|
| **Voorspelbaarheid** | Wijzigingen gebeuren alleen via gecontroleerde functies | Makkelijker te debuggen en testen |
| **Geschiedenis bijhouden** | Elke state-wijziging creëert een nieuw object | Maakt undo/redo-functionaliteit mogelijk |
| **Voorkomen van bijwerkingen** | Geen onbedoelde wijzigingen | Voorkomt mysterieuze bugs |
| **Prestatieoptimalisatie** | Makkelijk te detecteren wanneer de state daadwerkelijk is gewijzigd | Maakt efficiënte UI-updates mogelijk |

**JavaScript Immutability met `Object.freeze()`:**

JavaScript biedt [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) om objectwijzigingen te voorkomen:

```js
const immutableState = Object.freeze({ account: userData });
// Any attempt to modify immutableState will throw an error
```

**Wat hier gebeurt:**
- **Voorkomt** directe toewijzing of verwijdering van eigenschappen
- **Geeft** uitzonderingen als er pogingen tot wijzigingen worden gedaan
- **Zorgt ervoor** dat state-wijzigingen via gecontroleerde functies moeten gaan
- **Creëert** een duidelijke afspraak over hoe de state kan worden bijgewerkt

> 💡 **Verdieping**: Lees meer over het verschil tussen *shallow* en *deep* immutable objecten in de [MDN-documentatie](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze). Het begrijpen van dit onderscheid is cruciaal voor complexe state-structuren.

### Taak

Laten we een nieuwe functie `updateState()` maken:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

In deze functie maken we een nieuw state-object en kopiëren gegevens van de vorige state met behulp van de [*spread (`...`) operator*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Vervolgens overschrijven we een specifieke eigenschap van het state-object met de nieuwe gegevens met behulp van de [bracket notatie](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` voor toewijzing. Ten slotte vergrendelen we het object om wijzigingen te voorkomen met `Object.freeze()`. Voor nu hebben we alleen de eigenschap `account` opgeslagen in de state, maar met deze aanpak kun je zoveel eigenschappen toevoegen als je nodig hebt in de state.

We zullen ook de `state`-initialisatie bijwerken om ervoor te zorgen dat de initiële state ook wordt bevroren:

```js
let state = Object.freeze({
  account: null
});
```

Daarna, update de `register`-functie door de toewijzing `state.account = result;` te vervangen door:

```js
updateState('account', result);
```

Doe hetzelfde met de `login`-functie, vervang `state.account = data;` door:

```js
updateState('account', data);
```

We nemen nu de kans om het probleem op te lossen waarbij accountgegevens niet worden gewist wanneer de gebruiker op *Logout* klikt.

Maak een nieuwe functie `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

In `updateDashboard()`, vervang de redirect `return navigate('/login');` door `return logout();`

Probeer een nieuw account te registreren, uit te loggen en opnieuw in te loggen om te controleren of alles nog steeds correct werkt.

> Tip: je kunt alle state-wijzigingen bekijken door `console.log(state)` onderaan `updateState()` toe te voegen en de console in je browserontwikkeltools te openen.

## Gegevenspersistentie implementeren

Het probleem van sessieverlies dat we eerder hebben geïdentificeerd, vereist een persistentieoplossing die de gebruikersstate behoudt over browsersessies. Dit transformeert onze applicatie van een tijdelijke ervaring naar een betrouwbare, professionele tool.

Denk aan hoe atoomklokken nauwkeurige tijd behouden, zelfs tijdens stroomstoringen, door kritieke state op te slaan in niet-vluchtig geheugen. Op dezelfde manier hebben webapplicaties persistente opslagmechanismen nodig om essentiële gebruikersgegevens te behouden over browsersessies en paginavernieuwingen.

**Strategische vragen voor gegevenspersistentie:**

Voordat je persistentie implementeert, overweeg deze kritieke factoren:

| Vraag | Context van de bankapp | Impact van beslissing |
|-------|------------------------|-----------------------|
| **Zijn de gegevens gevoelig?** | Rekeningbalans, transactiegeschiedenis | Kies veilige opslagmethoden |
| **Hoe lang moet het blijven bestaan?** | Loginstatus vs. tijdelijke UI-voorkeuren | Selecteer geschikte opslagduur |
| **Heeft de server het nodig?** | Authenticatietokens vs. UI-instellingen | Bepaal delingsvereisten |

**Browseropslagopties:**

Moderne browsers bieden verschillende opslagmechanismen, elk ontworpen voor verschillende gebruiksscenario's:

**Primaire opslag-API's:**

1. **[`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage)**: Persistente [Key/Value-opslag](https://en.wikipedia.org/wiki/Key%E2%80%93value_database)
   - **Behoudt** gegevens over browsersessies heen  
   - **Overleeft** browserherstarts en computerreboots
   - **Gebonden** aan het specifieke website-domein
   - **Perfect** voor gebruikersvoorkeuren en loginstatussen

2. **[`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)**: Tijdelijke sessieopslag
   - **Werkt** identiek aan localStorage tijdens actieve sessies
   - **Wist** automatisch wanneer het browsertabblad wordt gesloten
   - **Ideaal** voor tijdelijke gegevens die niet moeten blijven bestaan

3. **[HTTP-cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies)**: Servergedeelde opslag
   - **Automatisch** verzonden met elk serververzoek
   - **Perfect** voor [authenticatie](https://en.wikipedia.org/wiki/Authentication) tokens
   - **Beperkt** in grootte en kan prestaties beïnvloeden

**Vereiste gegevensserialisatie:**

Zowel `localStorage` als `sessionStorage` slaan alleen [strings](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) op:

```js
// Convert objects to JSON strings for storage
const accountData = { user: 'john', balance: 150 };
localStorage.setItem('account', JSON.stringify(accountData));

// Parse JSON strings back to objects when retrieving
const savedAccount = JSON.parse(localStorage.getItem('account'));
```

**Begrijpen van serialisatie:**
- **Converteert** JavaScript-objecten naar JSON-strings met [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- **Reconstrueert** objecten uit JSON met [`JSON.parse()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- **Behandelt** automatisch complexe geneste objecten en arrays
- **Faalt** bij functies, ongedefinieerde waarden en circulaire referenties
> 💡 **Geavanceerde Optie**: Voor complexe offline applicaties met grote datasets, overweeg de [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Dit biedt een volledige client-side database, maar vereist een complexere implementatie.

### Taak: Implementeer localStorage Persistentie

Laten we een persistent opslagmechanisme implementeren zodat gebruikers ingelogd blijven totdat ze expliciet uitloggen. We gebruiken `localStorage` om accountgegevens op te slaan tussen browsersessies.

**Stap 1: Definieer Opslagconfiguratie**

```js
const storageKey = 'savedAccount';
```

**Wat deze constante biedt:**
- **Creëert** een consistente identifier voor onze opgeslagen gegevens
- **Voorkomt** typefouten in opslagkeys
- **Maakt** het eenvoudig om de opslagkey te wijzigen indien nodig
- **Volgt** best practices voor onderhoudbare code

**Stap 2: Voeg Automatische Persistentie Toe**

Voeg deze regel toe aan het einde van de `updateState()` functie:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

**Uitleg van wat hier gebeurt:**
- **Converteert** het accountobject naar een JSON-string voor opslag
- **Slaat** de gegevens op met onze consistente opslagkey
- **Wordt** automatisch uitgevoerd wanneer er statuswijzigingen plaatsvinden
- **Zorgt ervoor** dat opgeslagen gegevens altijd gesynchroniseerd zijn met de huidige status

> 💡 **Architectuurvoordeel**: Omdat we alle statusupdates hebben gecentraliseerd via `updateState()`, was het toevoegen van persistentie slechts één regel code. Dit toont de kracht van goede architectonische beslissingen!

**Stap 3: Herstel Status bij App-opstart**

Maak een initialisatiefunctie om opgeslagen gegevens te herstellen:

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

**Begrip van het initialisatieproces:**
- **Haalt** eerder opgeslagen accountgegevens op uit localStorage
- **Parseert** de JSON-string terug naar een JavaScript-object
- **Update** de status met behulp van onze gecontroleerde updatefunctie
- **Herstelt** automatisch de sessie van de gebruiker bij het laden van de pagina
- **Wordt uitgevoerd** voordat route-updates plaatsvinden om ervoor te zorgen dat de status beschikbaar is

**Stap 4: Optimaliseer de Standaardroute**

Werk de standaardroute bij om gebruik te maken van persistentie:

In `updateRoute()`, vervang:
```js
// Replace: return navigate('/login');
return navigate('/dashboard');
```

**Waarom deze wijziging logisch is:**
- **Benut** ons nieuwe persistentiesysteem effectief
- **Laat** het dashboard authenticatiecontroles uitvoeren
- **Leidt** automatisch door naar inloggen als er geen opgeslagen sessie is
- **Creëert** een meer naadloze gebruikerservaring

**Testen van je Implementatie:**

1. Log in op je bankapp
2. Vernieuw de browserpagina
3. Controleer of je ingelogd blijft en op het dashboard blijft
4. Sluit en heropen je browser
5. Navigeer terug naar je app en bevestig dat je nog steeds ingelogd bent

🎉 **Prestatie Behaald**: Je hebt succesvol een persistent statusbeheersysteem geïmplementeerd! Je app gedraagt zich nu als een professionele webapplicatie.

## Balans tussen Persistentie en Gegevensactualiteit

Ons persistentiesysteem behoudt succesvol gebruikerssessies, maar introduceert een nieuwe uitdaging: verouderde gegevens. Wanneer meerdere gebruikers of applicaties dezelfde servergegevens wijzigen, worden lokaal gecachte gegevens verouderd.

Deze situatie lijkt op Vikingnavigators die zowel opgeslagen sterrenkaarten als actuele waarnemingen van de sterrenhemel gebruikten. De kaarten boden consistentie, maar navigators hadden actuele waarnemingen nodig om rekening te houden met veranderende omstandigheden. Evenzo heeft onze applicatie zowel persistente gebruikersstatus als actuele servergegevens nodig.

**🧪 Het Probleem van Gegevensveroudering Ontdekken:**

1. Log in op het dashboard met het `test` account
2. Voer dit commando uit in een terminal om een transactie vanuit een andere bron te simuleren:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

3. Vernieuw je dashboardpagina in de browser
4. Observeer of je de nieuwe transactie ziet

**Wat deze test aantoont:**
- **Laat zien** hoe localStorage "verouderd" kan raken
- **Simuleert** realistische scenario's waarin gegevens buiten je app veranderen
- **Toont** de spanning tussen persistentie en gegevensactualiteit

**De Uitdaging van Verouderde Gegevens:**

| Probleem | Oorzaak | Impact op Gebruiker |
|----------|---------|---------------------|
| **Verouderde Gegevens** | localStorage verloopt nooit automatisch | Gebruikers zien verouderde informatie |
| **Serverwijzigingen** | Andere apps/gebruikers wijzigen dezelfde gegevens | Inconsistente weergaven tussen platforms |
| **Cache vs. Realiteit** | Lokale cache komt niet overeen met serverstatus | Slechte gebruikerservaring en verwarring |

**Oplossingsstrategie:**

We implementeren een "verversen bij laden"-patroon dat de voordelen van persistentie in balans brengt met de noodzaak van actuele gegevens. Deze aanpak behoudt de soepele gebruikerservaring en zorgt tegelijkertijd voor gegevensnauwkeurigheid.

### Taak: Implementeer Gegevensverversingssysteem

We maken een systeem dat automatisch actuele gegevens van de server ophaalt terwijl we de voordelen van ons persistente statusbeheer behouden.

**Stap 1: Maak Accountgegevens-Updater**

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

**Begrip van de logica van deze functie:**
- **Controleert** of een gebruiker momenteel is ingelogd (state.account bestaat)
- **Leidt** door naar uitloggen als er geen geldige sessie is
- **Haalt** actuele accountgegevens op van de server met behulp van de bestaande `getAccount()` functie
- **Handelt** serverfouten netjes af door ongeldige sessies uit te loggen
- **Update** de status met actuele gegevens via ons gecontroleerde updatesysteem
- **Activeert** automatische localStorage-persistentie via de `updateState()` functie

**Stap 2: Maak Dashboard Verversingshandler**

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

**Wat deze verversingsfunctie bereikt:**
- **Coördineert** het gegevensverversings- en UI-updateproces
- **Wacht** tot actuele gegevens zijn geladen voordat de weergave wordt bijgewerkt
- **Zorgt ervoor** dat het dashboard de meest actuele informatie toont
- **Behoudt** een duidelijke scheiding tussen gegevensbeheer en UI-updates

**Stap 3: Integreer met Routesysteem**

Werk je routeconfiguratie bij om automatisch te verversen:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

**Hoe deze integratie werkt:**
- **Voert** de verversingsfunctie uit elke keer dat de dashboardroute wordt geladen
- **Zorgt ervoor** dat actuele gegevens altijd worden weergegeven wanneer gebruikers naar het dashboard navigeren
- **Behoudt** de bestaande routestructuur terwijl gegevensactualiteit wordt toegevoegd
- **Biedt** een consistent patroon voor route-specifieke initialisatie

**Testen van je Gegevensverversingssysteem:**

1. Log in op je bankapp
2. Voer het eerder genoemde curl-commando uit om een nieuwe transactie te maken
3. Vernieuw je dashboardpagina of navigeer weg en terug
4. Controleer of de nieuwe transactie direct verschijnt

🎉 **Perfecte Balans Bereikt**: Je app combineert nu de soepele ervaring van persistente status met de nauwkeurigheid van actuele servergegevens!

## GitHub Copilot Agent Uitdaging 🚀

Gebruik de Agent-modus om de volgende uitdaging te voltooien:

**Beschrijving:** Implementeer een uitgebreid statusbeheersysteem met ongedaan maken/herstellen-functionaliteit voor de bankapp. Deze uitdaging helpt je geavanceerde concepten van statusbeheer te oefenen, waaronder het bijhouden van statusgeschiedenis, onveranderlijke updates en synchronisatie van de gebruikersinterface.

**Prompt:** Maak een verbeterd statusbeheersysteem dat omvat: 1) Een statusgeschiedenis-array die alle eerdere statussen bijhoudt, 2) Ongedaan maken- en herstellenfuncties die naar eerdere statussen kunnen terugkeren, 3) UI-knoppen voor ongedaan maken/herstellen op het dashboard, 4) Een maximale geschiedenisgrens van 10 statussen om geheugenproblemen te voorkomen, en 5) Correct opruimen van geschiedenis wanneer de gebruiker uitlogt. Zorg ervoor dat de ongedaan maken/herstellen-functionaliteit werkt met wijzigingen in het accountsaldo en blijft bestaan na browserverversingen.

Lees meer over [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hier.

## 🚀 Uitdaging: Opslagoptimalisatie

Je implementatie beheert nu gebruikerssessies, gegevensverversing en statusbeheer effectief. Overweeg echter of onze huidige aanpak opslag efficiënt balanceert met functionaliteit.

Net als schaakmeesters die onderscheid maken tussen essentiële stukken en inwisselbare pionnen, vereist effectief statusbeheer het identificeren van welke gegevens moeten worden behouden versus welke altijd vers van de server moeten komen.

**Optimalisatieanalyse:**

Evalueer je huidige localStorage-implementatie en overweeg deze strategische vragen:
- Wat is de minimale informatie die nodig is om gebruikersauthenticatie te behouden?
- Welke gegevens veranderen zo vaak dat lokale caching weinig voordeel biedt?
- Hoe kan opslagoptimalisatie de prestaties verbeteren zonder de gebruikerservaring te verslechteren?

**Implementatiestrategie:**
- **Identificeer** de essentiële gegevens die moeten worden behouden (waarschijnlijk alleen gebruikersidentificatie)
- **Pas** je localStorage-implementatie aan om alleen kritieke sessiegegevens op te slaan
- **Zorg ervoor** dat actuele gegevens altijd van de server worden geladen bij dashboardbezoeken
- **Test** of je geoptimaliseerde aanpak dezelfde gebruikerservaring behoudt

**Geavanceerde Overweging:**
- **Vergelijk** de afwegingen tussen het opslaan van volledige accountgegevens versus alleen authenticatietokens
- **Documenteer** je beslissingen en redeneringen voor toekomstige teamleden

Deze uitdaging helpt je denken als een professionele ontwikkelaar die zowel de gebruikerservaring als de efficiëntie van de applicatie in overweging neemt. Neem de tijd om te experimenteren met verschillende benaderingen!

## Quiz na de Les

[Quiz na de les](https://ff-quizzes.netlify.app/web/quiz/48)

## Opdracht

[Implementeer "Transactie toevoegen" dialoogvenster](assignment.md)

Hier is een voorbeeldresultaat na het voltooien van de opdracht:

![Screenshot van een voorbeeld "Transactie toevoegen" dialoogvenster](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.nl.png)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.