# Adoptieren Sie eine API

## Übersicht

APIs eröffnen endlose Möglichkeiten für kreatives Web-Development! In dieser Aufgabe wählen Sie eine externe API aus und erstellen eine Browser-Erweiterung, die ein echtes Problem löst oder den Nutzern wertvolle Funktionen bietet.

## Anweisungen

### Schritt 1: Wählen Sie Ihre API aus
Wählen Sie eine API aus dieser kuratierten [Liste kostenloser öffentlicher APIs](https://github.com/public-apis/public-apis). Berücksichtigen Sie folgende Kategorien:

**Beliebte Optionen für Anfänger:**
- **Unterhaltung**: [Dog CEO API](https://dog.ceo/dog-api/) für zufällige Hundebilder
- **Wetter**: [OpenWeatherMap](https://openweathermap.org/api) für aktuelle Wetterdaten
- **Zitate**: [Quotable API](https://quotable.io/) für inspirierende Zitate
- **Nachrichten**: [NewsAPI](https://newsapi.org/) für aktuelle Schlagzeilen
- **Spaßfakten**: [Numbers API](http://numbersapi.com/) für interessante Zahlenfakten

### Schritt 2: Planen Sie Ihre Erweiterung
Beantworten Sie vor dem Programmieren diese Planungsfragen:
- Welches Problem löst Ihre Erweiterung?
- Wer ist Ihre Zielgruppe?
- Welche Daten werden Sie im lokalen Speicher ablegen?
- Wie gehen Sie mit API-Fehlern oder Rate-Limits um?

### Schritt 3: Erstellen Sie Ihre Erweiterung
Ihre Erweiterung sollte beinhalten:

**Erforderliche Funktionen:**
- Formulareingaben für alle benötigten API-Parameter
- API-Integration mit angemessener Fehlerbehandlung
- Lokaler Speicher für Benutzereinstellungen oder API-Schlüssel
- Sauberes, responsives Benutzerinterface
- Ladezustände und Nutzerfeedback

**Code-Anforderungen:**
- Verwenden Sie moderne JavaScript-Features (ES6+)
- Implementieren Sie async/await für API-Aufrufe
- Schließen Sie angemessene Fehlerbehandlung mit try/catch-Blöcken ein
- Fügen Sie aussagekräftige Kommentare hinzu, die Ihren Code erklären
- Folgen Sie einer konsistenten Code-Formatierung

### Schritt 4: Testen und Verfeinern
- Testen Sie Ihre Erweiterung mit verschiedenen Eingaben
- Berücksichtigen Sie Randfälle (kein Internet, ungültige API-Antworten)
- Stellen Sie sicher, dass Ihre Erweiterung nach einem Browser-Neustart funktioniert
- Fügen Sie benutzerfreundliche Fehlermeldungen hinzu

## Bonus-Herausforderungen

Bringen Sie Ihre Erweiterung auf die nächste Stufe:
- Fügen Sie mehrere API-Endpunkte für umfassendere Funktionen hinzu
- Implementieren Sie Daten-Caching zur Reduzierung von API-Aufrufen
- Erstellen Sie Tastenkürzel für häufige Aktionen
- Fügen Sie Funktionen für Datenexport/-import hinzu
- Implementieren Sie Benutzeranpassungsoptionen

## Einreichungsanforderungen

1. **Funktionierende Browser-Erweiterung**, die erfolgreich mit der gewählten API integriert ist
2. **README-Datei**, die erklärt:
   - Welche API Sie gewählt haben und warum
   - Wie man Ihre Erweiterung installiert und nutzt
   - Alle benötigten API-Schlüssel oder Setup-Schritte
   - Screenshots Ihrer Erweiterung in Aktion
3. **Sauberer, kommentierter Code**, der modernen JavaScript-Praktiken folgt

## Bewertungsraster

| Kriterien | Hervorragend (90-100%) | Gut (80-89%) | In Entwicklung (70-79%) | Anfang (60-69%) |
|----------|------------------------|--------------|------------------------|----------------|
| **API-Integration** | Fehlerfreie API-Integration mit umfassender Fehler- und Randfallbehandlung | Erfolgreiche API-Integration mit grundlegender Fehlerbehandlung | API funktioniert, aber mit eingeschränkter Fehlerbehandlung | API-Integration hat erhebliche Probleme |
| **Codequalität** | Sauberer, gut kommentierter moderner JavaScript-Code nach Best Practices | Gute Code-Struktur mit angemessenen Kommentaren | Code funktioniert, benötigt aber bessere Organisation | Schlechte Codequalität mit minimalen Kommentaren |
| **Benutzererlebnis** | Ausgereiftes Interface mit exzellenten Ladezuständen und Nutzer-Feedback | Gutes Interface mit grundlegenden Nutzer-Feedback | Einfaches Interface, das ausreichend funktioniert | Schlechtes Nutzererlebnis mit verwirrender Oberfläche |
| **Lokaler Speicher** | Sophistizierter Einsatz von lokalem Speicher mit Datenvalidierung und -verwaltung | Korrekte Implementierung des lokalen Speichers für Schlüsselmerkmale | Basisimplementierung des lokalen Speichers | Minimaler oder falscher Einsatz von lokalem Speicher |
| **Dokumentation** | Umfassende README mit Installationsanleitungen und Screenshots | Gute Dokumentation, die die meisten Anforderungen abdeckt | Basisdokumentation mit fehlenden Details | Schlechte oder fehlende Dokumentation |

## Erste Schritte Tipps

1. **Einfach anfangen**: Wählen Sie eine API, die keine komplexe Authentifizierung erfordert
2. **Lesen Sie die Dokumentation**: Verstehen Sie gründlich die Endpunkte und Antworten der API
3. **Planen Sie Ihre UI**: Skizzieren Sie die Benutzeroberfläche Ihrer Erweiterung vor dem Programmieren
4. **Häufig testen**: Bauen Sie Schritt für Schritt auf und testen Sie jede Funktion nach dem Hinzufügen
5. **Fehler behandeln**: Gehen Sie immer davon aus, dass API-Aufrufe fehlschlagen können und planen Sie entsprechend

## Ressourcen

- [Dokumentation für Browser-Erweiterungen](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Fetch API Anleitung](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Tutorial zum lokalen Speicher](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [JSON Parsing und Verarbeitung](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Viel Spaß beim Erstellen von etwas Nützlichem und Kreativem! 🚀

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir bestrebt sind, Genauigkeit zu gewährleisten, kann es bei automatischen Übersetzungen zu Fehlern oder Ungenauigkeiten kommen. Das Originaldokument in seiner Ursprungssprache ist als maßgebliche Quelle zu betrachten. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Verwendung dieser Übersetzung entstehen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->