<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5d2efabbc8f94d89f4317ee8646c3ce9",
  "translation_date": "2025-08-29T00:53:54+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "nl"
}
-->
# Bouw een Bankapp Deel 4: Concepten van State Management

## Quiz vóór de les

[Quiz vóór de les](https://ff-quizzes.netlify.app/web/quiz/47)

### Introductie

Naarmate een webapplicatie groeit, wordt het steeds moeilijker om alle datastromen bij te houden. Welke code haalt de data op, welke pagina gebruikt het, waar en wanneer moet het worden bijgewerkt... Het is makkelijk om te eindigen met rommelige code die moeilijk te onderhouden is. Dit geldt vooral wanneer je data moet delen tussen verschillende pagina's van je app, zoals gebruikersgegevens. Het concept van *state management* heeft altijd bestaan in allerlei soorten programma's, maar nu webapps steeds complexer worden, is het een belangrijk punt om over na te denken tijdens de ontwikkeling.

In dit laatste deel bekijken we de app die we hebben gebouwd opnieuw om te heroverwegen hoe de state wordt beheerd. Dit maakt ondersteuning voor browserverversingen op elk moment mogelijk en zorgt ervoor dat gegevens behouden blijven tussen gebruikerssessies.

### Vereisten

Je moet het [data ophalen](../3-data/README.md) deel van de webapp hebben voltooid voor deze les. Je moet ook [Node.js](https://nodejs.org) installeren en de [server-API](../api/README.md) lokaal uitvoeren, zodat je accountgegevens kunt beheren.

Je kunt controleren of de server correct werkt door dit commando in een terminal uit te voeren:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## State management heroverwegen

In de [vorige les](../3-data/README.md) hebben we een basisconcept van state in onze app geïntroduceerd met de globale `account`-variabele die de bankgegevens bevat van de momenteel ingelogde gebruiker. Onze huidige implementatie heeft echter enkele tekortkomingen. Probeer de pagina te verversen terwijl je op het dashboard bent. Wat gebeurt er?

Er zijn drie problemen met de huidige code:

- De state wordt niet behouden, want een browserverversing brengt je terug naar de inlogpagina.
- Er zijn meerdere functies die de state wijzigen. Naarmate de app groeit, kan dit het moeilijk maken om de wijzigingen bij te houden en is het makkelijk om te vergeten iets bij te werken.
- De state wordt niet opgeruimd, dus wanneer je op *Uitloggen* klikt, blijven de accountgegevens aanwezig, zelfs als je op de inlogpagina bent.

We zouden onze code kunnen bijwerken om deze problemen één voor één aan te pakken, maar dat zou leiden tot meer code duplicatie en de app complexer en moeilijker te onderhouden maken. Of we kunnen even pauzeren en onze strategie heroverwegen.

> Welke problemen proberen we hier echt op te lossen?

[State management](https://en.wikipedia.org/wiki/State_management) draait om het vinden van een goede aanpak om deze twee specifieke problemen op te lossen:

- Hoe houden we de datastromen in een app begrijpelijk?
- Hoe zorgen we ervoor dat de state data altijd synchroon loopt met de gebruikersinterface (en vice versa)?

Als je deze problemen hebt aangepakt, zijn andere problemen die je mogelijk hebt, of al opgelost, of makkelijker op te lossen. Er zijn veel mogelijke benaderingen om deze problemen op te lossen, maar wij kiezen voor een veelgebruikte oplossing die bestaat uit **het centraliseren van de data en de manieren om deze te wijzigen**. De datastromen zouden er als volgt uitzien:

![Schema dat de datastromen tussen de HTML, gebruikersacties en state toont](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.nl.png)

> We behandelen hier niet het deel waarin de data automatisch de weergave bijwerkt, omdat dit gekoppeld is aan meer geavanceerde concepten van [Reactive Programming](https://en.wikipedia.org/wiki/Reactive_programming). Dit is een goed vervolgonderwerp als je een diepere duik wilt nemen.

✅ Er zijn veel bibliotheken met verschillende benaderingen voor state management, waarbij [Redux](https://redux.js.org) een populaire optie is. Bekijk de concepten en patronen die worden gebruikt, omdat dit vaak een goede manier is om te leren welke potentiële problemen je kunt tegenkomen in grote webapps en hoe deze kunnen worden opgelost.

### Taak

We beginnen met een beetje refactoring. Vervang de `account`-declaratie:

```js
let account = null;
```

Met:

```js
let state = {
  account: null
};
```

Het idee is om *alle app-data te centraliseren* in een enkel state-object. Voor nu hebben we alleen `account` in de state, dus het verandert niet veel, maar het creëert een basis voor toekomstige uitbreidingen.

We moeten ook de functies die het gebruiken bijwerken. Vervang in de functies `register()` en `login()` `account = ...` door `state.account = ...`;

Voeg aan het begin van de functie `updateDashboard()` deze regel toe:

```js
const account = state.account;
```

Deze refactoring op zichzelf brengt niet veel verbeteringen, maar het idee was om de basis te leggen voor de volgende wijzigingen.

## Gegevenswijzigingen bijhouden

Nu we het `state`-object hebben geïntroduceerd om onze data op te slaan, is de volgende stap om de updates te centraliseren. Het doel is om het makkelijker te maken om wijzigingen en wanneer ze plaatsvinden bij te houden.

Om te voorkomen dat wijzigingen worden aangebracht in het `state`-object, is het ook een goede gewoonte om het te beschouwen als [*immutable*](https://en.wikipedia.org/wiki/Immutable_object), wat betekent dat het helemaal niet kan worden gewijzigd. Dit betekent ook dat je een nieuw state-object moet maken als je iets wilt wijzigen. Door dit te doen, bouw je een bescherming tegen mogelijk ongewenste [bijwerkingen](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) en open je mogelijkheden voor nieuwe functies in je app, zoals het implementeren van ongedaan maken/herhalen, terwijl het ook makkelijker wordt om te debuggen. Bijvoorbeeld, je zou elke wijziging in de state kunnen loggen en een geschiedenis van de wijzigingen kunnen bijhouden om de bron van een bug te begrijpen.

In JavaScript kun je [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) gebruiken om een onveranderlijke versie van een object te maken. Als je probeert wijzigingen aan te brengen in een onveranderlijk object, wordt er een uitzondering gegenereerd.

✅ Weet je het verschil tussen een *oppervlakkig* en een *diep* onveranderlijk object? Je kunt erover lezen [hier](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze).

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

In deze functie maken we een nieuw state-object en kopiëren we data van de vorige state met behulp van de [*spread (`...`) operator*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Vervolgens overschrijven we een specifieke eigenschap van het state-object met de nieuwe data met behulp van de [bracket notatie](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` voor toewijzing. Tot slot vergrendelen we het object om wijzigingen te voorkomen met `Object.freeze()`. Voor nu hebben we alleen de `account`-eigenschap opgeslagen in de state, maar met deze aanpak kun je zoveel eigenschappen toevoegen als je nodig hebt.

We zullen ook de `state`-initialisatie bijwerken om ervoor te zorgen dat de initiële state ook bevroren is:

```js
let state = Object.freeze({
  account: null
});
```

Daarna werk je de `register`-functie bij door de toewijzing `state.account = result;` te vervangen door:

```js
updateState('account', result);
```

Doe hetzelfde met de `login`-functie, vervang `state.account = data;` door:

```js
updateState('account', data);
```

We grijpen nu de kans om het probleem op te lossen waarbij accountgegevens niet worden gewist wanneer de gebruiker op *Uitloggen* klikt.

Maak een nieuwe functie `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

Vervang in `updateDashboard()` de omleiding `return navigate('/login');` door `return logout();`

Probeer een nieuw account te registreren, uit te loggen en opnieuw in te loggen om te controleren of alles nog steeds correct werkt.

> Tip: je kunt alle state-wijzigingen bekijken door `console.log(state)` toe te voegen onderaan `updateState()` en de console in de ontwikkelaarstools van je browser te openen.

## De state behouden

De meeste webapps moeten gegevens behouden om correct te kunnen werken. Alle kritieke gegevens worden meestal opgeslagen in een database en benaderd via een server-API, zoals de gebruikersaccountgegevens in ons geval. Maar soms is het ook interessant om bepaalde gegevens op te slaan in de client-app die in je browser draait, voor een betere gebruikerservaring of om de laadtijd te verbeteren.

Wanneer je gegevens in je browser wilt opslaan, zijn er een paar belangrijke vragen die je jezelf moet stellen:

- *Zijn de gegevens gevoelig?* Je moet vermijden om gevoelige gegevens op de client op te slaan, zoals gebruikerswachtwoorden.
- *Hoe lang moet je deze gegevens bewaren?* Wil je deze gegevens alleen voor de huidige sessie gebruiken of wil je dat ze voor altijd worden opgeslagen?

Er zijn meerdere manieren om informatie op te slaan in een webapp, afhankelijk van wat je wilt bereiken. Bijvoorbeeld, je kunt de URL's gebruiken om een zoekopdracht op te slaan en deze deelbaar te maken tussen gebruikers. Je kunt ook [HTTP-cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies) gebruiken als de gegevens moeten worden gedeeld met de server, zoals [authenticatie](https://en.wikipedia.org/wiki/Authentication) informatie.

Een andere optie is om een van de vele browser-API's te gebruiken voor het opslaan van gegevens. Twee daarvan zijn bijzonder interessant:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): een [Key/Value store](https://en.wikipedia.org/wiki/Key%E2%80%93value_database) waarmee je gegevens specifiek voor de huidige website kunt behouden over verschillende sessies. De opgeslagen gegevens verlopen nooit.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): dit werkt hetzelfde als `localStorage`, behalve dat de opgeslagen gegevens worden gewist wanneer de sessie eindigt (wanneer de browser wordt gesloten).

Merk op dat beide API's alleen [strings](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) kunnen opslaan. Als je complexe objecten wilt opslaan, moet je ze serialiseren naar het [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)-formaat met [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

✅ Als je een webapp wilt maken die niet met een server werkt, is het ook mogelijk om een database op de client te maken met behulp van de [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Dit is gereserveerd voor geavanceerde gebruiksscenario's of als je een aanzienlijke hoeveelheid gegevens moet opslaan, omdat het complexer is om te gebruiken.

### Taak

We willen dat onze gebruikers ingelogd blijven totdat ze expliciet op de *Uitloggen*-knop klikken, dus we gebruiken `localStorage` om de accountgegevens op te slaan. Laten we eerst een sleutel definiëren die we zullen gebruiken om onze gegevens op te slaan.

```js
const storageKey = 'savedAccount';
```

Voeg vervolgens deze regel toe aan het einde van de `updateState()`-functie:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

Hiermee worden de gebruikersaccountgegevens opgeslagen en altijd up-to-date gehouden, omdat we eerder alle state-updates hebben gecentraliseerd. Dit is waar we beginnen te profiteren van al onze eerdere refactors 🙂.

Omdat de gegevens worden opgeslagen, moeten we ook zorgen voor het herstellen ervan wanneer de app wordt geladen. Aangezien we meer initialisatiecode beginnen te krijgen, is het misschien een goed idee om een nieuwe `init`-functie te maken, die ook onze eerdere code onderaan `app.js` bevat:

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

Hier halen we de opgeslagen gegevens op, en als er gegevens zijn, werken we de state dienovereenkomstig bij. Het is belangrijk om dit *voordat* de route wordt bijgewerkt te doen, omdat er mogelijk code is die afhankelijk is van de state tijdens de pagina-update.

We kunnen ook de *Dashboard*-pagina de standaardpagina van onze applicatie maken, aangezien we nu de accountgegevens behouden. Als er geen gegevens worden gevonden, zorgt het dashboard er toch voor dat je wordt doorgestuurd naar de *Inlog*-pagina. Vervang in `updateRoute()` de fallback `return navigate('/login');` door `return navigate('/dashboard');`.

Log nu in op de app en probeer de pagina te verversen. Je zou op het dashboard moeten blijven. Met die update hebben we al onze initiële problemen opgelost...

## De gegevens verversen

...Maar we hebben mogelijk ook een nieuw probleem gecreëerd. Oeps!

Ga naar het dashboard met het `test`-account en voer vervolgens dit commando uit in een terminal om een nieuwe transactie te maken:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Probeer nu de dashboardpagina in de browser te verversen. Wat gebeurt er? Zie je de nieuwe transactie?

De state wordt dankzij de `localStorage` voor onbepaalde tijd behouden, maar dat betekent ook dat deze nooit wordt bijgewerkt totdat je uitlogt en opnieuw inlogt!

Een mogelijke strategie om dit op te lossen is om de accountgegevens elke keer dat het dashboard wordt geladen opnieuw te laden, om verouderde gegevens te voorkomen.

### Taak

Maak een nieuwe functie `updateAccountData`:

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

Deze methode controleert of we momenteel zijn ingelogd en laadt vervolgens de accountgegevens opnieuw van de server.

Maak een andere functie genaamd `refresh`:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

Deze functie werkt de accountgegevens bij en zorgt er vervolgens voor dat de HTML van de dashboardpagina wordt bijgewerkt. Dit is wat we moeten aanroepen wanneer de dashboardroute wordt geladen. Werk de routedefinitie bij met:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Probeer nu het dashboard te verversen, het zou de bijgewerkte accountgegevens moeten weergeven.

---

## 🚀 Uitdaging

Nu we de accountgegevens elke keer dat het dashboard wordt geladen opnieuw ophalen, denk je dat we nog steeds *alle accountgegevens* moeten behouden?

Probeer samen te werken om te wijzigen wat wordt opgeslagen en geladen vanuit `localStorage`, zodat alleen wordt opgeslagen wat absoluut noodzakelijk is voor de app om te werken.

## Quiz na de les

[Quiz na de les](https://ff-quizzes.netlify.app/web/quiz/48)

## Opdracht
[Implementeer "Transactie toevoegen" dialoogvenster](assignment.md)

Hier is een voorbeeldresultaat na het voltooien van de opdracht:

![Schermafbeelding met een voorbeeld van het dialoogvenster "Transactie toevoegen"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.nl.png)

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.