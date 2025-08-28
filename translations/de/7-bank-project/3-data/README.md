<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f587e913e3f7c0b1c549a05dd74ee8e5",
  "translation_date": "2025-08-24T13:34:07+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "de"
}
-->
# Erstellen einer Banking-App Teil 3: Methoden zum Abrufen und Verwenden von Daten

## Quiz vor der Vorlesung

[Quiz vor der Vorlesung](https://ff-quizzes.netlify.app/web/quiz/45)

### Einführung

Im Kern jeder Webanwendung stehen *Daten*. Daten können viele Formen annehmen, aber ihr Hauptzweck ist es immer, dem Benutzer Informationen anzuzeigen. Da Webanwendungen zunehmend interaktiver und komplexer werden, ist die Art und Weise, wie der Benutzer auf Informationen zugreift und mit ihnen interagiert, ein zentraler Bestandteil der Webentwicklung.

In dieser Lektion werden wir sehen, wie man Daten asynchron von einem Server abruft und diese Daten verwendet, um Informationen auf einer Webseite anzuzeigen, ohne das HTML neu zu laden.

### Voraussetzungen

Für diese Lektion musst du den [Login- und Registrierungsformular](../2-forms/README.md)-Teil der Webanwendung erstellt haben. Außerdem musst du [Node.js](https://nodejs.org) installieren und die [Server-API](../api/README.md) lokal ausführen, um auf Kontodaten zuzugreifen.

Du kannst testen, ob der Server ordnungsgemäß läuft, indem du diesen Befehl in einem Terminal ausführst:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## AJAX und Datenabruf

Traditionelle Webseiten aktualisieren den angezeigten Inhalt, wenn der Benutzer einen Link auswählt oder Daten über ein Formular sendet, indem die gesamte HTML-Seite neu geladen wird. Jedes Mal, wenn neue Daten geladen werden müssen, liefert der Webserver eine komplett neue HTML-Seite, die vom Browser verarbeitet werden muss. Dies unterbricht die aktuelle Benutzeraktion und schränkt die Interaktionen während des Neuladens ein. Dieser Workflow wird auch als *Multi-Page Application* oder *MPA* bezeichnet.

![Aktualisierungsworkflow in einer Multi-Page-Anwendung](../../../../7-bank-project/3-data/images/mpa.png)

Als Webanwendungen komplexer und interaktiver wurden, entstand eine neue Technik namens [AJAX (Asynchronous JavaScript and XML)](https://de.wikipedia.org/wiki/Ajax_(Programmierung)). Diese Technik ermöglicht es Webanwendungen, Daten asynchron von einem Server zu senden und abzurufen, ohne die HTML-Seite neu laden zu müssen. Das führt zu schnelleren Updates und flüssigeren Benutzerinteraktionen. Wenn neue Daten vom Server empfangen werden, kann die aktuelle HTML-Seite auch mit JavaScript über die [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)-API aktualisiert werden. Im Laufe der Zeit hat sich dieser Ansatz zu dem entwickelt, was heute als [*Single-Page Application* oder *SPA*](https://de.wikipedia.org/wiki/Single-Page-Webanwendung) bekannt ist.

![Aktualisierungsworkflow in einer Single-Page-Anwendung](../../../../7-bank-project/3-data/images/spa.png)

Als AJAX erstmals eingeführt wurde, war die einzige verfügbare API zum asynchronen Abrufen von Daten [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest). Moderne Browser implementieren jedoch auch die bequemere und leistungsfähigere [`Fetch` API](https://developer.mozilla.org/docs/Web/API/Fetch_API), die auf Promises basiert und besser geeignet ist, um JSON-Daten zu verarbeiten.

> Obwohl alle modernen Browser die `Fetch API` unterstützen, solltest du, wenn deine Webanwendung auch auf älteren Browsern funktionieren soll, immer die [Kompatibilitätstabelle auf caniuse.com](https://caniuse.com/fetch) überprüfen.

### Aufgabe

In [der vorherigen Lektion](../2-forms/README.md) haben wir das Registrierungsformular implementiert, um ein Konto zu erstellen. Jetzt fügen wir Code hinzu, um sich mit einem bestehenden Konto anzumelden und dessen Daten abzurufen. Öffne die Datei `app.js` und füge eine neue Funktion `login` hinzu:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
}
```

Hier beginnen wir damit, das Formularelement mit `getElementById()` abzurufen, und holen dann den Benutzernamen aus dem Eingabefeld mit `loginForm.user.value`. Jedes Formularelement kann über seinen Namen (im HTML mit dem Attribut `name` festgelegt) als Eigenschaft des Formulars aufgerufen werden.

Ähnlich wie bei der Registrierung erstellen wir eine weitere Funktion, um eine Serveranfrage auszuführen, diesmal jedoch, um die Kontodaten abzurufen:

```js
async function getAccount(user) {
  try {
    const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

Wir verwenden die `fetch` API, um die Daten asynchron vom Server anzufordern. Diesmal benötigen wir keine zusätzlichen Parameter außer der URL, da wir nur Daten abfragen. Standardmäßig erstellt `fetch` eine [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET)-HTTP-Anfrage, was hier genau das ist, was wir brauchen.

✅ `encodeURIComponent()` ist eine Funktion, die Sonderzeichen für URLs maskiert. Welche Probleme könnten auftreten, wenn wir diese Funktion nicht aufrufen und den Wert von `user` direkt in der URL verwenden?

Jetzt aktualisieren wir unsere `login`-Funktion, um `getAccount` zu verwenden:

```js
async function login() {
  const loginForm = document.getElementById('loginForm')
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return console.log('loginError', data.error);
  }

  account = data;
  navigate('/dashboard');
}
```

Da `getAccount` eine asynchrone Funktion ist, müssen wir sie mit dem Schlüsselwort `await` verwenden, um auf das Serverergebnis zu warten. Wie bei jeder Serveranfrage müssen wir auch Fehlerfälle behandeln. Für den Moment fügen wir nur eine Log-Nachricht hinzu, um den Fehler anzuzeigen, und kommen später darauf zurück.

Dann müssen wir die Daten irgendwo speichern, damit wir sie später verwenden können, um die Dashboard-Informationen anzuzeigen. Da die Variable `account` noch nicht existiert, erstellen wir eine globale Variable dafür am Anfang unserer Datei:

```js
let account = null;
```

Nachdem die Benutzerdaten in einer Variablen gespeichert wurden, können wir mit der Funktion `navigate()` von der *Login*-Seite zum *Dashboard* wechseln.

Schließlich müssen wir unsere `login`-Funktion aufrufen, wenn das Login-Formular abgeschickt wird, indem wir das HTML ändern:

```html
<form id="loginForm" action="javascript:login()">
```

Teste, ob alles korrekt funktioniert, indem du ein neues Konto registrierst und versuchst, dich mit demselben Konto anzumelden.

Bevor wir zum nächsten Teil übergehen, können wir auch die `register`-Funktion vervollständigen, indem wir dies am Ende der Funktion hinzufügen:

```js
account = result;
navigate('/dashboard');
```

✅ Wusstest du, dass du standardmäßig nur Server-APIs von derselben *Domain und Port* wie die Webseite, die du ansiehst, aufrufen kannst? Dies ist ein Sicherheitsmechanismus, der von Browsern durchgesetzt wird. Aber Moment mal, unsere Web-App läuft auf `localhost:3000`, während die Server-API auf `localhost:5000` läuft. Warum funktioniert das? Durch die Verwendung einer Technik namens [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS) ist es möglich, Cross-Origin-HTTP-Anfragen auszuführen, wenn der Server spezielle Header zur Antwort hinzufügt, die Ausnahmen für bestimmte Domains erlauben.

> Erfahre mehr über APIs in dieser [Lektion](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon)

## HTML aktualisieren, um Daten anzuzeigen

Jetzt, da wir die Benutzerdaten haben, müssen wir das bestehende HTML aktualisieren, um sie anzuzeigen. Wir wissen bereits, wie man ein Element aus dem DOM abruft, z. B. mit `document.getElementById()`. Nachdem du ein Basiselement hast, kannst du mit diesen APIs den Inhalt ändern oder Kind-Elemente hinzufügen:

- Mit der [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent)-Eigenschaft kannst du den Text eines Elements ändern. Beachte, dass das Ändern dieses Werts alle Kind-Elemente des Elements (falls vorhanden) entfernt und durch den angegebenen Text ersetzt. Daher ist es auch eine effiziente Methode, alle Kinder eines Elements zu entfernen, indem man ihm einen leeren String `''` zuweist.

- Mit [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) und der [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append)-Methode kannst du ein oder mehrere neue Kind-Elemente erstellen und anhängen.

✅ Mit der [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML)-Eigenschaft eines Elements ist es ebenfalls möglich, dessen HTML-Inhalt zu ändern. Diese Methode sollte jedoch vermieden werden, da sie anfällig für [Cross-Site-Scripting (XSS)](https://developer.mozilla.org/docs/Glossary/Cross-site_scripting)-Angriffe ist.

### Aufgabe

Bevor wir zur Dashboard-Seite übergehen, sollten wir noch etwas auf der *Login*-Seite erledigen. Derzeit wird, wenn du versuchst, dich mit einem nicht existierenden Benutzernamen anzumelden, eine Nachricht in der Konsole angezeigt, aber für einen normalen Benutzer ändert sich nichts, und man weiß nicht, was los ist.

Fügen wir ein Platzhalterelement im Login-Formular hinzu, in dem wir bei Bedarf eine Fehlermeldung anzeigen können. Ein guter Platz wäre direkt vor dem Login-`<button>`:

```html
...
<div id="loginError"></div>
<button>Login</button>
...
```

Dieses `<div>`-Element ist leer, was bedeutet, dass nichts auf dem Bildschirm angezeigt wird, bis wir ihm Inhalte hinzufügen. Wir geben ihm auch eine `id`, damit wir es leicht mit JavaScript abrufen können.

Gehe zurück zur Datei `app.js` und erstelle eine neue Hilfsfunktion `updateElement`:

```js
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

Diese Funktion ist ziemlich einfach: Sie aktualisiert den Textinhalt des DOM-Elements mit der passenden `id`, basierend auf den übergebenen Parametern *id* und *text*. Verwenden wir diese Methode anstelle der vorherigen Fehlermeldung in der `login`-Funktion:

```js
if (data.error) {
  return updateElement('loginError', data.error);
}
```

Wenn du jetzt versuchst, dich mit einem ungültigen Konto anzumelden, solltest du etwas wie das Folgende sehen:

![Screenshot, der die Fehlermeldung während des Logins anzeigt](../../../../7-bank-project/3-data/images/login-error.png)

Jetzt haben wir einen Fehlertext, der visuell angezeigt wird. Wenn du jedoch einen Screenreader verwendest, wirst du feststellen, dass nichts angesagt wird. Damit Text, der dynamisch zu einer Seite hinzugefügt wird, von Screenreadern angesagt wird, muss er eine sogenannte [Live Region](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) verwenden. Hier verwenden wir eine spezielle Art von Live-Region, die als Alert bezeichnet wird:

```html
<div id="loginError" role="alert"></div>
```

Implementiere das gleiche Verhalten für die Fehler in der `register`-Funktion (vergiss nicht, das HTML zu aktualisieren).

## Informationen im Dashboard anzeigen

Mit den gleichen Techniken, die wir gerade gesehen haben, kümmern wir uns auch um die Anzeige der Kontoinformationen auf der Dashboard-Seite.

So sieht ein vom Server empfangenes Kontoobjekt aus:

```json
{
  "user": "test",
  "currency": "$",
  "description": "Test account",
  "balance": 75,
  "transactions": [
    { "id": "1", "date": "2020-10-01", "object": "Pocket money", "amount": 50 },
    { "id": "2", "date": "2020-10-03", "object": "Book", "amount": -10 },
    { "id": "3", "date": "2020-10-04", "object": "Sandwich", "amount": -5 }
  ],
}
```

> Hinweis: Um dir das Leben zu erleichtern, kannst du das vorgefertigte `test`-Konto verwenden, das bereits mit Daten gefüllt ist.

### Aufgabe

Beginnen wir damit, den Abschnitt "Balance" im HTML zu ersetzen, um Platzhalterelemente hinzuzufügen:

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

Wir fügen auch einen neuen Abschnitt direkt darunter hinzu, um die Kontobeschreibung anzuzeigen:

```html
<h2 id="description"></h2>
```

✅ Da die Kontobeschreibung als Titel für den darunter liegenden Inhalt fungiert, wird sie semantisch als Überschrift ausgezeichnet. Erfahre mehr darüber, wie [Überschriftenstruktur](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) für die Barrierefreiheit wichtig ist, und wirf einen kritischen Blick auf die Seite, um zu bestimmen, was sonst noch eine Überschrift sein könnte.

Als Nächstes erstellen wir eine neue Funktion in `app.js`, um die Platzhalter zu füllen:

```js
function updateDashboard() {
  if (!account) {
    return navigate('/login');
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);
}
```

Zuerst überprüfen wir, ob wir die benötigten Kontodaten haben, bevor wir fortfahren. Dann verwenden wir die zuvor erstellte Funktion `updateElement()`, um das HTML zu aktualisieren.

> Um die Anzeige des Kontostands ansprechender zu gestalten, verwenden wir die Methode [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed), um den Wert mit 2 Nachkommastellen anzuzeigen.

Jetzt müssen wir unsere `updateDashboard()`-Funktion jedes Mal aufrufen, wenn das Dashboard geladen wird. Wenn du die [Aufgabe aus Lektion 1](../1-template-route/assignment.md) bereits abgeschlossen hast, sollte dies einfach sein. Andernfalls kannst du die folgende Implementierung verwenden.

Füge diesen Code am Ende der Funktion `updateRoute()` hinzu:

```js
if (typeof route.init === 'function') {
  route.init();
}
```

Und aktualisiere die Routen-Definition mit:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

Mit dieser Änderung wird die Funktion `updateDashboard()` jedes Mal aufgerufen, wenn die Dashboard-Seite angezeigt wird. Nach einem Login solltest du dann den Kontostand, die Währung und die Beschreibung sehen können.

## Tabellenzeilen dynamisch mit HTML-Templates erstellen

In der [ersten Lektion](../1-template-route/README.md) haben wir HTML-Templates zusammen mit der Methode [`appendChild()`](https://developer.mozilla.org/docs/Web/API/Node/appendChild) verwendet, um die Navigation in unserer App zu implementieren. Templates können auch kleiner sein und verwendet werden, um sich wiederholende Teile einer Seite dynamisch zu füllen.

Wir verwenden einen ähnlichen Ansatz, um die Liste der Transaktionen in der HTML-Tabelle anzuzeigen.

### Aufgabe

Füge ein neues Template in den HTML-`<body>`-Bereich ein:

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

Dieses Template stellt eine einzelne Tabellenzeile dar, mit den 3 Spalten, die wir füllen möchten: *Datum*, *Objekt* und *Betrag* einer Transaktion.

Füge dann diese `id`-Eigenschaft zum `<tbody>`-Element der Tabelle im Dashboard-Template hinzu, um es mit JavaScript leichter zu finden:

```html
<tbody id="transactions"></tbody>
```

Unser HTML ist bereit. Wechseln wir zum JavaScript-Code und erstellen eine neue Funktion `createTransactionRow`:

```js
function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}
```

Diese Funktion macht genau das, was ihr Name andeutet: Sie verwendet das zuvor erstellte Template, um eine neue Tabellenzeile zu erstellen und deren Inhalte mit Transaktionsdaten zu füllen. Wir verwenden dies in unserer `updateDashboard()`-Funktion, um die Tabelle zu füllen:

```js
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

Hier verwenden wir die Methode [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment), die ein neues DOM-Fragment erstellt, mit dem wir arbeiten können, bevor wir es schließlich an unsere HTML-Tabelle anhängen.

Es gibt noch eine Sache, die wir tun müssen, bevor dieser Code funktioniert, da unsere Funktion `updateElement()` derzeit nur Textinhalte unterstützt. Ändern wir ihren Code ein wenig:

```js
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

Wir verwenden die Methode [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append), da sie es ermöglicht, entweder Text oder [DOM-Knoten](https://developer.mozilla.org/docs/Web/API/Node) an ein übergeordnetes Element anzuhängen, was perfekt für all unsere Anwendungsfälle ist.
Wenn Sie versuchen, sich mit dem `test`-Konto anzumelden, sollten Sie jetzt eine Transaktionsliste auf dem Dashboard sehen 🎉.

---

## 🚀 Herausforderung

Arbeitet zusammen, um die Dashboard-Seite wie eine echte Banking-App aussehen zu lassen. Falls ihr eure App bereits gestaltet habt, versucht [Media Queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) zu verwenden, um ein [responsives Design](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) zu erstellen, das sowohl auf Desktop- als auch auf Mobilgeräten gut funktioniert.

Hier ist ein Beispiel für eine gestaltete Dashboard-Seite:

![Screenshot eines Beispielergebnisses des Dashboards nach der Gestaltung](../../../../7-bank-project/images/screen2.png)

## Quiz nach der Vorlesung

[Quiz nach der Vorlesung](https://ff-quizzes.netlify.app/web/quiz/46)

## Aufgabe

[Refaktorieren und kommentieren Sie Ihren Code](assignment.md)

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, weisen wir darauf hin, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.