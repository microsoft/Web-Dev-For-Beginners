# Arrays und Schleifen Aufgabe

## Anweisungen

Bearbeite die folgenden Übungen, um den Umgang mit Arrays und Schleifen zu üben. Jede Übung baut auf Konzepten aus der Lektion auf und fordert dich auf, verschiedene Schleifenarten und Array-Methoden anzuwenden.

### Übung 1: Zahlenmustergenerator
Erstelle ein Programm, das jede 3. Zahl zwischen 1 und 20 auflistet und in der Konsole ausgibt.

**Anforderungen:**
- Verwende eine `for`-Schleife mit einem benutzerdefinierten Inkrement
- Zeige Zahlen in einem benutzerfreundlichen Format an
- Füge beschreibende Kommentare hinzu, die deine Logik erklären

**Erwartete Ausgabe:**
```
3, 6, 9, 12, 15, 18
```

> **Tipp:** Ändere den Iterationsausdruck in deiner for-Schleife, um Zahlen zu überspringen.

### Übung 2: Array-Analyse
Erstelle ein Array mit mindestens 8 verschiedenen Zahlen und schreibe Funktionen zur Analyse der Daten.

**Anforderungen:**
- Erstelle ein Array namens `numbers` mit mindestens 8 Werten
- Schreibe eine Funktion `findMaximum()`, die die höchste Zahl zurückgibt
- Schreibe eine Funktion `findMinimum()`, die die niedrigste Zahl zurückgibt  
- Schreibe eine Funktion `calculateSum()`, die die Summe aller Zahlen zurückgibt
- Teste jede Funktion und gib die Ergebnisse aus

**Bonus-Herausforderung:** Erstelle eine Funktion, die die zweitgrößte Zahl im Array findet.

### Übung 3: Verarbeitung von String-Arrays
Erstelle ein Array deiner Lieblingsfilme/-bücher/-songs und übe verschiedene Schleifenarten.

**Anforderungen:**
- Erstelle ein Array mit mindestens 5 String-Werten
- Verwende eine traditionelle `for`-Schleife, um Elemente mit Nummern anzuzeigen (1. Elementname)
- Verwende eine `for...of`-Schleife, um Elemente in Großbuchstaben anzuzeigen
- Verwende die `forEach()`-Methode, um die Gesamtanzahl der Zeichen zu zählen und anzuzeigen

**Beispielausgabe:**
```
Traditional for loop:
1. The Matrix
2. Inception
3. Interstellar

For...of loop (uppercase):
THE MATRIX
INCEPTION
INTERSTELLAR

Character count:
Total characters across all titles: 42
```

### Übung 4: Datenfilterung (Fortgeschritten)
Erstelle ein Programm, das ein Array von Objekten verarbeitet, die Studenten repräsentieren.

**Anforderungen:**
- Erstelle ein Array mit mindestens 5 Studentenobjekten mit den Eigenschaften: `name`, `age`, `grade`
- Verwende Schleifen, um Studenten zu finden, die 18 Jahre oder älter sind
- Berechne die durchschnittliche Note aller Studenten
- Erstelle ein neues Array, das nur Studenten mit Noten über 85 enthält

**Beispielstruktur:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Füge weitere Schüler hinzu...
];
```

## Testen deines Codes

Teste deine Programme, indem du:
1. Jede Übung in der Konsole deines Browsers ausführst
2. Überprüfst, ob die Ausgaben den erwarteten Ergebnissen entsprechen
3. Mit verschiedenen Datensätzen testest
4. Prüfst, ob dein Code Randfälle behandelt (leere Arrays, einzelne Elemente)

## Einreichungsrichtlinien

Füge deiner Einreichung Folgendes bei:
- Gut kommentierten JavaScript-Code für jede Übung
- Screenshots oder Texteingaben, die zeigen, dass deine Programme laufen
- Eine kurze Erklärung, für welche Aufgabe du welchen Schleifentyp verwendet hast und warum

## Bewertungskriterien

| Kriterien | Hervorragend (3 Punkte) | Ausreichend (2 Punkte) | Verbesserungswürdig (1 Punkt) |
| -------- | ----------------------- | ---------------------- | ----------------------------- |
| **Funktionalität** | Alle Übungen korrekt abgeschlossen inklusive Bonusaufgaben | Alle erforderlichen Übungen funktionieren korrekt | Einige Übungen unvollständig oder fehlerhaft |
| **Codequalität** | Sauberer, gut organisierter Code mit aussagekräftigen Variablennamen | Code funktioniert, könnte aber sauberer sein | Code ist unordentlich oder schwer verständlich |
| **Kommentare** | Umfassende Kommentare, die Logik und Entscheidungen erklären | Grundlegende Kommentare vorhanden | Wenige oder keine Kommentare |
| **Schleifeneinsatz** | Zeigt angemessenes Verständnis verschiedener Schleifentypen | Verwendet Schleifen korrekt, aber mit begrenzter Vielfalt | Falsche oder ineffiziente Schleifennutzung |
| **Testen** | Nachweis gründlicher Tests mit mehreren Szenarien | Grundlegende Tests durchgeführt | Kaum Nachweise für Tests |

## Reflexionsfragen

Nachdem du die Übungen abgeschlossen hast, überlege:
1. Welcher Schleifentyp fühlte sich am natürlichsten an und warum?
2. Welche Herausforderungen hattest du beim Arbeiten mit Arrays?
3. Wie könnten diese Fähigkeiten in realen Webentwicklungsprojekten angewendet werden?
4. Was würdest du anders machen, wenn du deinen Code für bessere Performance optimieren müsstest?

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner Ursprungssprache gilt als maßgebliche Quelle. Für wichtige Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Verwendung dieser Übersetzung entstehen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->