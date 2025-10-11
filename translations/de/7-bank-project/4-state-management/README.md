<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b46acf79da8550d76445eed00b06c878",
  "translation_date": "2025-10-03T12:45:19+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "de"
}
-->
# Erstellen einer Banking-App Teil 4: Konzepte des Zustandsmanagements

## Quiz vor der Vorlesung

[Quiz vor der Vorlesung](https://ff-quizzes.netlify.app/web/quiz/47)

### Einführung

Mit dem Wachstum einer Webanwendung wird es immer schwieriger, alle Datenflüsse im Blick zu behalten. Welcher Code holt die Daten, welche Seite nutzt sie, wo und wann müssen sie aktualisiert werden... Es ist leicht, unübersichtlichen Code zu erstellen, der schwer zu warten ist. Dies gilt insbesondere, wenn Daten zwischen verschiedenen Seiten der App geteilt werden müssen, wie z. B. Benutzerdaten. Das Konzept des *Zustandsmanagements* existiert schon immer in allen Arten von Programmen, aber mit der zunehmenden Komplexität von Webanwendungen ist es heute ein zentraler Punkt bei der Entwicklung.

In diesem letzten Teil werfen wir einen Blick auf die App, die wir erstellt haben, und überdenken, wie der Zustand verwaltet wird, um Unterstützung für Browseraktualisierungen zu jedem Zeitpunkt zu ermöglichen und Daten über Benutzersitzungen hinweg zu speichern.

### Voraussetzungen

Du solltest den [Datenabruf](../3-data/README.md)-Teil der Web-App für diese Lektion abgeschlossen haben. Außerdem musst du [Node.js](https://nodejs.org) installieren und die [Server-API](../api/README.md) lokal ausführen, um Kontodaten zu verwalten.

Du kannst testen, ob der Server ordnungsgemäß läuft, indem du diesen Befehl in einem Terminal ausführst:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Zustandsmanagement überdenken

In der [vorherigen Lektion](../3-data/README.md) haben wir ein grundlegendes Konzept des Zustands in unserer App eingeführt, mit der globalen Variablen `account`, die die Bankdaten des aktuell angemeldeten Benutzers enthält. Unsere aktuelle Implementierung weist jedoch einige Schwächen auf. Versuche, die Seite zu aktualisieren, während du dich auf dem Dashboard befindest. Was passiert?

Es gibt drei Probleme mit dem aktuellen Code:

- Der Zustand wird nicht gespeichert, da ein Browser-Refresh dich zurück zur Login-Seite bringt.
- Es gibt mehrere Funktionen, die den Zustand ändern. Mit dem Wachstum der App wird es schwierig, die Änderungen nachzuverfolgen, und es ist leicht, das Aktualisieren einer Funktion zu vergessen.
- Der Zustand wird nicht bereinigt, sodass die Kontodaten beim Klicken auf *Logout* weiterhin vorhanden sind, obwohl du dich auf der Login-Seite befindest.

Wir könnten unseren Code aktualisieren, um diese Probleme einzeln anzugehen, aber das würde zu mehr Code-Duplikation führen und die App komplexer und schwerer wartbar machen. Oder wir könnten uns ein paar Minuten Zeit nehmen und unsere Strategie überdenken.

> Welche Probleme versuchen wir hier wirklich zu lösen?

[Zustandsmanagement](https://de.wikipedia.org/wiki/State_Management) dreht sich darum, einen guten Ansatz zu finden, um diese beiden spezifischen Probleme zu lösen:

- Wie kann man die Datenflüsse in einer App verständlich halten?
- Wie kann man sicherstellen, dass die Zustandsdaten immer mit der Benutzeroberfläche synchronisiert sind (und umgekehrt)?

Sobald diese Probleme gelöst sind, könnten andere Probleme entweder bereits behoben sein oder leichter zu lösen sein. Es gibt viele mögliche Ansätze zur Lösung dieser Probleme, aber wir werden eine gängige Lösung verwenden, die darin besteht, **die Daten und die Möglichkeiten, sie zu ändern, zu zentralisieren**. Die Datenflüsse würden so aussehen:

![Schema, das die Datenflüsse zwischen HTML, Benutzeraktionen und Zustand zeigt](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.de.png)

> Wir werden hier nicht den Teil behandeln, bei dem die Daten automatisch die Ansicht aktualisieren, da dies mit fortgeschritteneren Konzepten der [reaktiven Programmierung](https://de.wikipedia.org/wiki/Reaktive_Programmierung) verbunden ist. Es ist ein gutes Thema für ein tiefergehendes Studium.

✅ Es gibt viele Bibliotheken mit unterschiedlichen Ansätzen zum Zustandsmanagement, [Redux](https://redux.js.org) ist eine beliebte Option. Schau dir die Konzepte und Muster an, da sie oft eine gute Möglichkeit bieten, potenzielle Probleme in großen Web-Apps zu verstehen und wie sie gelöst werden können.

### Aufgabe

Wir beginnen mit etwas Refactoring. Ersetze die `account`-Deklaration:

```js
let account = null;
```

Mit:

```js
let state = {
  account: null
};
```

Die Idee ist, *alle App-Daten* in einem einzigen Zustandsobjekt zu zentralisieren. Wir haben derzeit nur `account` im Zustand, daher ändert sich nicht viel, aber es schafft eine Grundlage für zukünftige Erweiterungen.

Wir müssen auch die Funktionen aktualisieren, die es verwenden. Ersetze in den Funktionen `register()` und `login()` `account = ...` durch `state.account = ...`;

Füge am Anfang der Funktion `updateDashboard()` diese Zeile hinzu:

```js
const account = state.account;
```

Dieses Refactoring allein bringt noch keine großen Verbesserungen, aber die Idee war, die Grundlage für die nächsten Änderungen zu schaffen.

## Datenänderungen verfolgen

Nachdem wir das `state`-Objekt eingerichtet haben, um unsere Daten zu speichern, besteht der nächste Schritt darin, die Aktualisierungen zu zentralisieren. Ziel ist es, Änderungen und deren Zeitpunkt leichter nachverfolgen zu können.

Um zu vermeiden, dass Änderungen direkt am `state`-Objekt vorgenommen werden, ist es auch eine gute Praxis, es als [*unveränderlich*](https://de.wikipedia.org/wiki/Unver%C3%A4nderliches_Objekt) zu betrachten, was bedeutet, dass es überhaupt nicht geändert werden kann. Das bedeutet auch, dass du ein neues Zustandsobjekt erstellen musst, wenn du etwas daran ändern möchtest. Auf diese Weise schützt du dich vor potenziell unerwünschten [Seiteneffekten](https://de.wikipedia.org/wiki/Seiteneffekt_(Informatik)) und eröffnest Möglichkeiten für neue Funktionen in deiner App, wie z. B. die Implementierung von Rückgängig/Wiederholen, während du gleichzeitig das Debuggen erleichterst. Zum Beispiel könntest du jede Änderung am Zustand protokollieren und eine Historie der Änderungen führen, um die Quelle eines Fehlers zu verstehen.

In JavaScript kannst du [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) verwenden, um eine unveränderliche Version eines Objekts zu erstellen. Wenn du versuchst, Änderungen an einem unveränderlichen Objekt vorzunehmen, wird eine Ausnahme ausgelöst.

✅ Kennst du den Unterschied zwischen einem *flachen* und einem *tiefen* unveränderlichen Objekt? Du kannst darüber [hier](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze) lesen.

### Aufgabe

Erstelle eine neue Funktion `updateState()`:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

In dieser Funktion erstellen wir ein neues Zustandsobjekt und kopieren Daten aus dem vorherigen Zustand mithilfe des [*Spread-Operators (`...`)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Dann überschreiben wir eine bestimmte Eigenschaft des Zustandsobjekts mit den neuen Daten, indem wir die [Klammernotation](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` für die Zuweisung verwenden. Schließlich sperren wir das Objekt, um Änderungen mit `Object.freeze()` zu verhindern. Derzeit speichern wir nur die `account`-Eigenschaft im Zustand, aber mit diesem Ansatz kannst du so viele Eigenschaften hinzufügen, wie du benötigst.

Wir aktualisieren auch die `state`-Initialisierung, um sicherzustellen, dass der Anfangszustand ebenfalls eingefroren ist:

```js
let state = Object.freeze({
  account: null
});
```

Danach aktualisiere die `register`-Funktion, indem du die Zuweisung `state.account = result;` durch Folgendes ersetzt:

```js
updateState('account', result);
```

Mache dasselbe mit der `login`-Funktion, indem du `state.account = data;` durch Folgendes ersetzt:

```js
updateState('account', data);
```

Wir nutzen die Gelegenheit, um das Problem zu beheben, dass Kontodaten nicht gelöscht werden, wenn der Benutzer auf *Logout* klickt.

Erstelle eine neue Funktion `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

Ersetze in `updateDashboard()` die Weiterleitung `return navigate('/login');` durch `return logout();`;

Versuche, ein neues Konto zu registrieren, dich abzumelden und erneut anzumelden, um zu überprüfen, ob alles noch korrekt funktioniert.

> Tipp: Du kannst alle Zustandsänderungen anzeigen, indem du `console.log(state)` am Ende von `updateState()` hinzufügst und die Konsole in den Entwicklerwerkzeugen deines Browsers öffnest.

## Zustand speichern

Die meisten Web-Apps müssen Daten speichern, um korrekt zu funktionieren. Alle kritischen Daten werden normalerweise in einer Datenbank gespeichert und über eine Server-API abgerufen, wie z. B. die Benutzerdaten in unserem Fall. Aber manchmal ist es auch interessant, einige Daten in der Client-App zu speichern, die in deinem Browser läuft, um eine bessere Benutzererfahrung zu bieten oder die Ladeleistung zu verbessern.

Wenn du Daten in deinem Browser speichern möchtest, gibt es einige wichtige Fragen, die du dir stellen solltest:

- *Sind die Daten sensibel?* Du solltest vermeiden, sensible Daten wie Benutzerpasswörter auf dem Client zu speichern.
- *Wie lange möchtest du diese Daten aufbewahren?* Planst du, auf diese Daten nur während der aktuellen Sitzung zuzugreifen, oder möchtest du, dass sie dauerhaft gespeichert werden?

Es gibt mehrere Möglichkeiten, Informationen in einer Web-App zu speichern, je nachdem, was du erreichen möchtest. Zum Beispiel kannst du die URLs verwenden, um eine Suchanfrage zu speichern und sie zwischen Benutzern teilbar zu machen. Du kannst auch [HTTP-Cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies) verwenden, wenn die Daten mit dem Server geteilt werden müssen, wie z. B. [Authentifizierungsinformationen](https://de.wikipedia.org/wiki/Authentifizierung).

Eine weitere Option ist die Verwendung einer der vielen Browser-APIs zum Speichern von Daten. Zwei davon sind besonders interessant:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): Ein [Key/Value-Store](https://de.wikipedia.org/wiki/Key-Value-Datenbank), der es ermöglicht, datenbankspezifische Daten für die aktuelle Website über verschiedene Sitzungen hinweg zu speichern. Die darin gespeicherten Daten verfallen nie.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): Funktioniert genauso wie `localStorage`, außer dass die darin gespeicherten Daten gelöscht werden, wenn die Sitzung endet (wenn der Browser geschlossen wird).

Beachte, dass beide APIs nur das Speichern von [Strings](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) erlauben. Wenn du komplexe Objekte speichern möchtest, musst du sie in das [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Format serialisieren, indem du [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verwendest.

✅ Wenn du eine Web-App erstellen möchtest, die ohne Server funktioniert, ist es auch möglich, eine Datenbank auf dem Client mit der [`IndexedDB`-API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API) zu erstellen. Diese ist für fortgeschrittene Anwendungsfälle oder wenn du eine erhebliche Menge an Daten speichern musst, da sie komplexer zu verwenden ist.

### Aufgabe

Wir möchten, dass unsere Benutzer angemeldet bleiben, bis sie explizit auf die Schaltfläche *Logout* klicken. Daher verwenden wir `localStorage`, um die Kontodaten zu speichern. Definiere zunächst einen Schlüssel, den wir zum Speichern unserer Daten verwenden.

```js
const storageKey = 'savedAccount';
```

Füge dann diese Zeile am Ende der Funktion `updateState()` hinzu:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

Damit werden die Benutzerdaten gespeichert und bleiben immer auf dem neuesten Stand, da wir zuvor alle Zustandsaktualisierungen zentralisiert haben. Hier beginnen wir, von all unseren vorherigen Refactorings zu profitieren 🙂.

Da die Daten gespeichert werden, müssen wir uns auch darum kümmern, sie wiederherzustellen, wenn die App geladen wird. Da wir nun mehr Initialisierungscode haben, könnte es eine gute Idee sein, eine neue Funktion `init` zu erstellen, die auch unseren bisherigen Code am Ende von `app.js` enthält:

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

Hier rufen wir die gespeicherten Daten ab, und falls welche vorhanden sind, aktualisieren wir den Zustand entsprechend. Es ist wichtig, dies *vor* der Aktualisierung der Route zu tun, da es möglicherweise Code gibt, der während der Seitenaktualisierung auf den Zustand angewiesen ist.

Wir können auch die *Dashboard*-Seite zur Standardseite unserer Anwendung machen, da wir jetzt die Kontodaten speichern. Wenn keine Daten gefunden werden, kümmert sich das Dashboard ohnehin um die Weiterleitung zur *Login*-Seite. Ersetze in `updateRoute()` den Fallback `return navigate('/login');` durch `return navigate('/dashboard');`.

Melde dich jetzt in der App an und versuche, die Seite zu aktualisieren. Du solltest auf dem Dashboard bleiben. Mit diesem Update haben wir alle unsere anfänglichen Probleme gelöst...

## Daten aktualisieren

...Aber wir könnten auch ein neues Problem geschaffen haben. Ups!

Gehe mit dem `test`-Konto zum Dashboard und führe dann diesen Befehl in einem Terminal aus, um eine neue Transaktion zu erstellen:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Versuche jetzt, die Dashboard-Seite in deinem Browser zu aktualisieren. Was passiert? Siehst du die neue Transaktion?

Der Zustand wird dank `localStorage` unbegrenzt gespeichert, aber das bedeutet auch, dass er nie aktualisiert wird, bis du dich aus der App abmeldest und wieder anmeldest!

Eine mögliche Strategie, um das zu beheben, besteht darin, die Kontodaten jedes Mal neu zu laden, wenn das Dashboard geladen wird, um veraltete Daten zu vermeiden.

### Aufgabe

Erstelle eine neue Funktion `updateAccountData`:

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

Diese Methode überprüft, ob wir derzeit angemeldet sind, und lädt dann die Kontodaten vom Server neu.

Erstelle eine weitere Funktion namens `refresh`:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

Diese Funktion aktualisiert die Kontodaten und kümmert sich dann um die Aktualisierung des HTMLs der Dashboard-Seite. Sie ist das, was wir aufrufen müssen, wenn die Dashboard-Route geladen wird. Aktualisiere die Routendefinition mit:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Versuche jetzt, das Dashboard zu aktualisieren. Es sollte die aktualisierten Kontodaten anzeigen.

---

## 🚀 Herausforderung

Da wir die Kontodaten jedes Mal neu laden, wenn das Dashboard geladen wird, denkst du, dass wir *alle Kontodaten* weiterhin speichern müssen?

Versuche gemeinsam zu erarbeiten, was minimal in `localStorage` gespeichert und geladen werden muss, damit die App funktioniert.

## Quiz nach der Vorlesung
[Quiz nach der Vorlesung](https://ff-quizzes.netlify.app/web/quiz/48)

## Aufgabe

[Dialog "Transaktion hinzufügen" implementieren](assignment.md)

Hier ist ein Beispielergebnis nach Abschluss der Aufgabe:

![Screenshot, der einen Beispiel-Dialog "Transaktion hinzufügen" zeigt](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.de.png)

---

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, weisen wir darauf hin, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.