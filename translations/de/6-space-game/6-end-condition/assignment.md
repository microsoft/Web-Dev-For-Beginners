# Erstelle ein Beispielspiel

## Aufgabenübersicht

Nachdem du die Spielendbedingungen und die Neustartfunktionalität in deinem Weltraumspiel gemeistert hast, ist es nun an der Zeit, diese Konzepte auf ein völlig neues Spielerlebnis anzuwenden. Du wirst dein eigenes Spiel entwerfen und erstellen, das verschiedene Endbedingungsmuster und Neustartmechaniken demonstriert.

Diese Aufgabe fordert dich heraus, kreativ über Spieldesign nachzudenken und gleichzeitig die technischen Fähigkeiten zu üben, die du gelernt hast. Du wirst unterschiedliche Sieg- und Niederlagenszenarien erkunden, Spielerverlauf implementieren und ansprechende Neustarterfahrungen schaffen.

## Projektanforderungen

### Kernfunktionen des Spiels

Dein Spiel muss die folgenden wesentlichen Elemente enthalten:

**Vielfalt der Endbedingung**: Implementiere mindestens zwei verschiedene Möglichkeiten, wie das Spiel enden kann:
- **Punktbasierter Sieg**: Spieler erreicht eine Zielpunktzahl oder sammelt bestimmte Gegenstände
- **Lebenbasierte Niederlage**: Spieler verliert alle verfügbaren Leben oder Gesundheitspunkte
- **Zielerreichung**: Alle Gegner besiegt, bestimmte Gegenstände eingesammelt oder Ziele erreicht
- **Zeitbasiert**: Spiel endet nach einer festgelegten Dauer oder wenn der Countdown null erreicht

**Neustartfunktionalität**:
- **Spielzustand löschen**: Entferne alle vorherigen Spielobjekte und setze Variablen zurück
- **Systeme reinitialisieren**: Starte neu mit neuen Spielerstatistiken, Gegnern und Zielen
- **Benutzerfreundliche Steuerung**: Biete klare Anweisungen zum Neustart des Spiels

**Spielerfeedback**:
- **Siegmeldungen**: Feier Spielerfolge mit positivem Feedback
- **Niedergangsmeldungen**: Biete motivierende Nachrichten, die zum erneuten Spielen anregen
- **Fortschrittsanzeige**: Zeige aktuellen Punktestand, Leben oder Zielstatus

### Spielideen und Inspiration

Wähle eines dieser Spielkonzepte oder entwickle dein eigenes:

#### 1. Konsolen-Adventure-Spiel
Erstelle ein textbasiertes Abenteuer mit Kampfsystem:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Wichtige Funktionen zur Implementierung:**
- **Rundenbasierter Kampf** mit verschiedenen Angriffsoptionen
- **Gesundheitspunkte** für Spieler und Gegner
- **Inventarsystem** zum Sammeln von Münzen oder Gegenständen
- **Mehrere Gegnertypen** mit unterschiedlicher Schwierigkeit
- **Siegbedingung**, wenn alle Gegner besiegt sind

#### 2. Sammelspiel
- **Ziel**: Sammle bestimmte Gegenstände und weiche Hindernissen aus
- **Endbedingungen**: Erreiche die Zielanzahl an Sammlungen oder verliere alle Leben
- **Fortschritt**: Gegenstände werden im Verlauf schwerer zu erreichen

#### 3. Rätselspiel
- **Ziel**: Löse zunehmend schwierigere Rätsel
- **Endbedingungen**: Schließe alle Level ab oder gehe die Züge/Zeit aus
- **Neustart**: Setze zum ersten Level zurück mit gelöscht Fortschritt

#### 4. Verteidigungsspiel
- **Ziel**: Schütze deine Basis vor Gegnerwellen
- **Endbedingungen**: Überlebe alle Wellen (Sieg) oder Basis wird zerstört (Niederlage)
- **Fortschritt**: Gegnerwellen werden in Schwierigkeit und Anzahl erhöht

## Implementierungsrichtlinien

### Erste Schritte

1. **Plane dein Spieldesign**:
   - Skizziere den grundlegenden Spielablauf
   - Definiere deine Endbedingungen klar
   - Bestimme, welche Daten beim Neustart zurückgesetzt werden müssen

2. **Richte deine Projektstruktur ein**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Erstelle deine zentrale Spielschleife**:
   - Initialisiere den Spielzustand
   - Verarbeite Benutzereingaben
   - Aktualisiere die Spiel-Logik
   - Prüfe Endbedingungen
   - Rendere den aktuellen Zustand

### Technische Anforderungen

**Verwende modernes JavaScript**:
- Nutze `const` und `let` für Variablendeklarationen
- Verwende Pfeilfunktionen, wo angebracht
- Implementiere ES6+ Features wie Template-Literale und Destrukturierung

**Ereignisgesteuerte Architektur**:
- Erstelle Event-Handler für Benutzerinteraktionen
- Implementiere Zustandsänderungen im Spiel über Events
- Verwende Event Listener für die Neustartfunktion

**Saubere Codepraktiken**:
- Schreibe Funktionen mit einzelner Verantwortlichkeit
- Nutze aussagekräftige Variablen- und Funktionsnamen
- Füge Kommentare ein, die Spiel-Logik und Regeln erläutern
- Organisiere Code in logische Abschnitte

## Einreichungsanforderungen

### Abgabetermine

1. **Vollständige Spieldateien**: Alle HTML-, CSS- und JavaScript-Dateien, die für den Betrieb deines Spiels nötig sind
2. **README.md**: Dokumentation, die erklärt:
   - Wie man dein Spiel spielt
   - Welche Endbedingungen du implementiert hast
   - Anweisungen zum Neustarten
   - Besondere Funktionen oder Mechaniken
3. **Code-Kommentare**: Klare Erklärungen zu deiner Spiel-Logik und Algorithmen

### Test-Checkliste

Vor der Abgabe prüfe, ob dein Spiel:

- [ ] **Fehlerfrei läuft** in der Browser-Konsole
- [ ] **Mehrere Endbedingungen implementiert** hat, wie spezifiziert
- [ ] **Ordnungsgemäß neu startet** mit sauberem Zustandsreset
- [ ] **Klares Feedback** zum Spielstatus für Spieler bietet
- [ ] **Moderne JavaScript-Syntax** und Best Practices verwendet
- [ ] **Umfassende Dokumentation** in README.md enthält

## Bewertungsraster

| Kriterium | Hervorragend (4) | Gut (3) | Entwickelnd (2) | Anfang (1) |
|-----------|------------------|---------|-----------------|------------|
| **Spiel-Funktionalität** | Vollständiges Spiel mit mehreren Endbedingungen, flüssigem Neustart und polierter Spielerfahrung | Komplettes Spiel mit grundlegenden Endbedingungen und funktionierendem Neustart | Teilweises Spiel mit einigen implementierten Endbedingungen, Neustart kann kleinere Probleme haben | Unvollständiges Spiel mit begrenzter Funktionalität und erheblichen Fehlern |
| **Codequalität** | Sauberer, gut organisierter Code mit modernen JavaScript-Praktiken, umfassenden Kommentaren und ausgezeichneter Struktur | Gute Codeorganisation mit moderner Syntax, ausreichenden Kommentaren und klarer Struktur | Basis-Codeorganisation mit vereinzelten modernen Praktiken, wenige Kommentare | Schlechte Codeorganisation, veraltete Syntax, fehlende Kommentare und Struktur |
| **Benutzererlebnis** | Intuitives Gameplay mit klaren Anweisungen, ausgezeichnetem Feedback und fesselnder End-/Neustarterfahrung | Gutes Gameplay mit ausreichenden Anweisungen und Feedback, funktionalem Ende/Neustart | Einfaches Gameplay mit minimalen Anweisungen, begrenztem Spielstatus-Feedback | Verwirrendes Gameplay mit unklaren Anweisungen und schlechtem Nutzerfeedback |
| **Technische Umsetzung** | Beherrscht Konzepte der Spieleentwicklung, Ereignisbehandlung und Zustandsmanagement | Zeigt solides Verständnis der Spielkonzepte mit guter Umsetzung | Grundverständnis mit akzeptabler Umsetzung | Eingeschränktes Verständnis mit mangelhafter Umsetzung |
| **Dokumentation** | Umfassendes README mit klaren Anweisungen, gut dokumentiertem Code und gründlichen Testnachweisen | Gute Dokumentation mit klaren Anweisungen und ausreichenden Code-Kommentaren | Basis-Dokumentation mit minimalen Anweisungen | Schlechte oder fehlende Dokumentation |

### Bewertungsskala
- **Hervorragend (16-20 Punkte)**: Übertrifft Erwartungen mit kreativen Funktionen und polierter Umsetzung
- **Gut (12-15 Punkte)**: Erfüllt alle Anforderungen mit solider Ausführung
- **Entwickelnd (8-11 Punkte)**: Erfüllt die meisten Anforderungen mit kleineren Problemen
- **Anfang (4-7 Punkte)**: Erfüllt einige Anforderungen, benötigt aber deutliche Verbesserungen

## Zusätzliche Lernressourcen

- [MDN Game Development Guide](https://developer.mozilla.org/en-US/docs/Games)
- [JavaScript Game Development Tutorials](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Canvas API Dokumentation](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Spiel-Design-Prinzipien](https://www.gamasutra.com/blogs/)

> 💡 **Pro Tipp**: Beginne einfach und füge Funktionen schrittweise hinzu. Ein gut poliertes einfaches Spiel ist besser als ein komplexes Spiel mit Fehlern!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in der Ausgangssprache gilt als maßgebliche Quelle. Für wichtige Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Verwendung dieser Übersetzung entstehen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->