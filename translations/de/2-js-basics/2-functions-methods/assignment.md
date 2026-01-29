# Spaß mit Funktionen

## Anweisungen

In dieser Aufgabe übst du das Erstellen verschiedener Arten von Funktionen, um die Konzepte, die du zu JavaScript-Funktionen, Parametern, Standardwerten und Rückgabewerten gelernt hast, zu festigen.

Erstelle eine JavaScript-Datei namens `functions-practice.js` und implementiere die folgenden Funktionen:

### Teil 1: Grundlegende Funktionen
1. **Erstelle eine Funktion namens `sayHello`**, die keine Parameter entgegennimmt und einfach "Hello!" in die Konsole ausgibt.

2. **Erstelle eine Funktion namens `introduceYourself`**, die einen Parameter `name` erhält und eine Nachricht wie "Hi, my name is [name]" in die Konsole schreibt.

### Teil 2: Funktionen mit Standardparametern
3. **Erstelle eine Funktion namens `greetPerson`**, die zwei Parameter erhält: `name` (erforderlich) und `greeting` (optional, Standardwert "Hello"). Die Funktion soll eine Nachricht wie "[greeting], [name]!" in die Konsole ausgeben.

### Teil 3: Funktionen, die Werte zurückgeben
4. **Erstelle eine Funktion namens `addNumbers`**, die zwei Parameter (`num1` und `num2`) erhält und deren Summe zurückgibt.

5. **Erstelle eine Funktion namens `createFullName`**, die die Parameter `firstName` und `lastName` erhält und den vollständigen Namen als einzelnen String zurückgibt.

### Teil 4: Alles zusammenführen
6. **Erstelle eine Funktion namens `calculateTip`**, die zwei Parameter erhält: `billAmount` (erforderlich) und `tipPercentage` (optional, Standardwert 15). Die Funktion soll den Trinkgeldbetrag berechnen und zurückgeben.

### Teil 5: Teste deine Funktionen
Füge Funktionsaufrufe hinzu, um jede deiner Funktionen zu testen und die Ergebnisse mit `console.log()` anzuzeigen.

**Beispielhafte Testaufrufe:**
```javascript
// Testen Sie hier Ihre Funktionen
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## Bewertungsraster

| Kriterium | Hervorragend | Ausreichend | Verbesserungsbedürftig |
| -------- | --------- | -------- | ----------------- |
| **Funktionserstellung** | Alle 6 Funktionen sind korrekt mit richtiger Syntax und Benennung implementiert | 4-5 Funktionen sind korrekt implementiert mit kleineren Syntaxproblemen | 3 oder weniger Funktionen implementiert oder schwerwiegende Syntaxfehler |
| **Parameter & Standardwerte** | Verwendet erforderliche Parameter, optionale Parameter und Standardwerte korrekt wie angegeben | Parameter werden korrekt verwendet, könnten aber Probleme mit Standardwerten haben | Falsche oder fehlende Parameterimplementierung |
| **Rückgabewerte** | Funktionen, die Werte zurückgeben sollen, tun dies korrekt, Funktionen ohne Rückgabe führen nur Aktionen aus | Die meisten Rückgabewerte sind korrekt mit kleineren Fehlern | Wesentliche Probleme bei Rückgabewerten |
| **Codequalität** | Sauberer, gut organisierter Code mit aussagekräftigen Variablennamen und korrekter Einrückung | Code funktioniert, könnte aber sauberer oder besser organisiert sein | Code ist schwer lesbar oder schlecht strukturiert |
| **Testen** | Alle Funktionen sind mit passenden Funktionsaufrufen getestet und Ergebnisse klar dargestellt | Die meisten Funktionen sind angemessen getestet | Begrenztes oder fehlerhaftes Testen der Funktionen |

## Bonusaufgaben (Optional)

Falls du dich weiter herausfordern möchtest:

1. **Erstelle eine Pfeilfunktionsversion** einer deiner Funktionen  
2. **Erstelle eine Funktion, die eine andere Funktion als Parameter akzeptiert** (wie die `setTimeout` Beispiele aus der Lektion)  
3. **Füge eine Eingabevalidierung hinzu**, um sicherzustellen, dass deine Funktionen ungültige Eingaben elegant behandeln  

---

> 💡 **Tipp**: Denk daran, die Entwicklerkonsole deines Browsers (F12) zu öffnen, um die Ausgabe deiner `console.log()`-Anweisungen zu sehen!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Haftungsausschluss**:
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir auf Genauigkeit achten, kann es vorkommen, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten. Das Originaldokument in seiner Ursprungssprache gilt als maßgebliche Quelle. Für wichtige Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die durch die Verwendung dieser Übersetzung entstehen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->