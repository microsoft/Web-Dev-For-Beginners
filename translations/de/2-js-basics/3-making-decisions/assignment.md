# Entscheidungen treffen: Notenverarbeitung für Schüler

## Lernziele

In dieser Aufgabe übst du die Entscheidungskonzepte aus dieser Lektion, indem du ein Programm erstellst, das Schülernoten aus verschiedenen Notensystemen verarbeitet. Du verwendest `if...else`-Anweisungen, Vergleichsoperatoren und logische Operatoren, um zu bestimmen, welche Schüler ihre Kurse bestehen.

## Die Herausforderung

Du arbeitest für eine Schule, die kürzlich mit einer anderen Institution fusioniert hat. Nun musst du Schülernoten aus zwei komplett verschiedenen Notensystemen verarbeiten und feststellen, welche Schüler bestehen. Dies ist die perfekte Gelegenheit, um bedingte Logik zu üben!

### Verständnis der Notensysteme

#### Erstes Notensystem (Numerisch)
- Noten werden als Zahlen von 1-5 angegeben
- **Bestehensnote**: 3 und höher (3, 4 oder 5)
- **Nichtbestehen**: Unter 3 (1 oder 2)

#### Zweites Notensystem (Buchstabennoten)
- Noten verwenden Buchstaben: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Bestehensnoten**: `A`, `A-`, `B`, `B-`, `C`, `C-` (alle aufgeführten Noten gelten als bestanden)
- **Hinweis**: Dieses System enthält keine schlechten Noten wie `D` oder `F`

### Deine Aufgabe

Gegeben das folgende Array `allStudents`, das alle Schüler und ihre Noten darstellt, erstelle ein neues Array `studentsWhoPass`, welches alle Schüler enthält, die nach ihren jeweiligen Notensystemen bestehen.

```javascript
let allStudents = [
  'A',    // Buchstabennote - bestanden
  'B-',   // Buchstabennote - bestanden
  1,      // Numerische Note - nicht bestanden
  4,      // Numerische Note - bestanden
  5,      // Numerische Note - bestanden
  2       // Numerische Note - nicht bestanden
];

let studentsWhoPass = [];
```

### Schritt-für-Schritt-Vorgehen

1. **Richte eine Schleife ein**, um jede Note im `allStudents`-Array durchzugehen  
2. **Überprüfe den Notentyp** (ist es eine Zahl oder ein String?)  
3. **Wende die passenden Regeln des Notensystems an**:  
   - Für Zahlen: prüfe, ob Note >= 3 ist  
   - Für Strings: prüfe, ob es eine der gültigen Bestehensbuchstabennoten ist  
4. **Füge bestehende Noten** zum `studentsWhoPass`-Array hinzu  

### Hilfreiche Programmiertechniken

Verwende diese JavaScript-Konzepte aus der Lektion:

- **typeof-Operator**: `typeof grade === 'number'` um zu prüfen, ob es eine numerische Note ist  
- **Vergleichsoperatoren**: `>=` zum Vergleichen numerischer Noten  
- **Logische Operatoren**: `||` um mehrere Buchstabennoten-Bedingungen zu prüfen  
- **if...else-Anweisungen**: zum Umgang mit verschiedenen Notensystemen  
- **Array-Methoden**: `.push()` um bestehende Noten dem neuen Array hinzuzufügen  

### Erwartete Ausgabe

Wenn du dein Programm ausführst, sollte `studentsWhoPass` folgendes enthalten: `['A', 'B-', 4, 5]`

**Warum diese Noten bestehen:**  
- `'A'` und `'B-'` sind gültige Buchstabennoten (alle Buchstabennoten in diesem System bestehen)  
- `4` und `5` sind numerische Noten >= 3  
- `1` und `2` fallen durch, da sie numerische Noten < 3 sind  

## Teste deine Lösung

Teste deinen Code mit verschiedenen Szenarien:

```javascript
// Testen mit verschiedenen Notenkombinationen
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Ihre Lösung sollte mit jeder Kombination gültiger Noten funktionieren
```

## Bonus-Herausforderungen

Wenn du die Grundaufgabe abgeschlossen hast, versuche diese Erweiterungen:

1. **Füge Validierung hinzu**: Prüfe auf ungültige Noten (wie negative Zahlen oder ungültige Buchstaben)  
2. **Zähle Statistiken**: Berechne, wie viele Schüler bestehen vs. durchfallen  
3. **Notenumrechnung**: Wandle alle Noten in ein einheitliches numerisches System um (A=5, B=4, C=3, etc.)  

## Bewertungsbogen

| Kriterium | Hervorragend (4) | Gut (3) | In Entwicklung (2) | Anfang (1) |
|----------|------------------|---------|--------------------|------------|
| **Funktionalität** | Programm identifiziert alle Bestehensnoten aus beiden Systemen korrekt | Programm funktioniert mit kleineren Fehlern oder Grenzfällen | Programm funktioniert teilweise, hat aber logische Fehler | Programm hat erhebliche Fehler oder läuft nicht |
| **Code-Struktur** | Sauberer, gut organisierter Code mit korrekter if...else-Logik | Gute Struktur mit passenden bedingten Anweisungen | Akzeptable Struktur mit einigen Organisationsproblemen | Schlechte Struktur, schwer nachvollziehbare Logik |
| **Verwendung der Konzepte** | Effektiver Einsatz von Vergleichsoperatoren, logischen Operatoren und bedingten Anweisungen | Guter Gebrauch der Lektionsthemen mit kleinen Lücken | Teilweise Gebrauch der Konzepte, es fehlen wichtige Elemente | Eingeschränkter Gebrauch der Lektionsthemen |
| **Problemlösung** | Zeigt klares Verständnis des Problems und einen eleganten Lösungsansatz | Guter Lösungsansatz mit solider Logik | Angemessene Problemlösung mit gewissen Verwirrungen | Unklarer Ansatz, zeigt kein Verständnis |

## Einreichungsrichtlinien

1. **Teste deinen Code** gründlich mit den bereitgestellten Beispielen  
2. **Füge Kommentare hinzu**, die deine Logik erklären, besonders bei den bedingten Anweisungen  
3. **Überprüfe die Ausgabe** auf Übereinstimmung mit den erwarteten Ergebnissen: `['A', 'B-', 4, 5]`  
4. **Berücksichtige Randfälle** wie leere Arrays oder unerwartete Datentypen  

> 💡 **Profi-Tipp**: Fang einfach an! Sorge zuerst für die Grundfunktionalität, dann füge komplexere Features hinzu. Denk daran, das Ziel ist es, bedingte Logik mit den in dieser Lektion gelernten Werkzeugen zu üben.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Haftungsausschluss**:  
Dieses Dokument wurde mithilfe des KI-Übersetzungsdienstes [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, kann es vorkommen, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten. Das Originaldokument in der jeweiligen Ausgangssprache ist als maßgebliche Quelle zu betrachten. Für wichtige Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die durch die Nutzung dieser Übersetzung entstehen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->