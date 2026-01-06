<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "df0dcecddcd28ea8cbf6ede0ad57d673",
  "translation_date": "2026-01-06T09:03:55+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "de"
}
-->
# Verbesserung des Routings

## Anweisungen

Nachdem du nun ein einfaches Routing-System gebaut hast, ist es Zeit, es mit professionellen Features zu erweitern, die das Benutzererlebnis verbessern und bessere Entwicklerwerkzeuge bieten. Anwendungen in der Praxis benötigen mehr als nur das Wechseln von Templates – sie erfordern dynamische Seitentitel, Lifecycle-Hooks und erweiterbare Architekturen.

In dieser Aufgabe wirst du deine Routing-Implementierung mit zwei essenziellen Features erweitern, die häufig in produktiven Webanwendungen zu finden sind. Diese Erweiterungen lassen deine Banking-App professioneller wirken und schaffen eine Grundlage für zukünftige Funktionalitäten.

Die Routen-Deklaration enthält bisher nur die Template-ID, die verwendet werden soll. Beim Anzeigen einer neuen Seite wird jedoch manchmal etwas mehr benötigt. Lass uns unsere Routing-Implementierung mit zwei zusätzlichen Features verbessern:

### Feature 1: Dynamische Seitentitel
**Ziel:** Vergib Titel für jedes Template und aktualisiere den Fenstertitel mit diesem neuen Titel, wenn das Template gewechselt wird.

**Warum das wichtig ist:**
- **Verbessert** das Benutzererlebnis durch aussagekräftige Browser-Tab-Titel
- **Erhöht** die Barrierefreiheit für Screenreader und Hilfstechnologien  
- **Bietet** besseren Kontext für Lesezeichen und Browser-Verlauf
- **Folgt** bewährten Praktiken der professionellen Webentwicklung

**Vorgehensweise:**
- **Erweitere** das Routen-Objekt um Titelinformationen für jede Route
- **Passe** die `updateRoute()`-Funktion an, um `document.title` dynamisch zu aktualisieren
- **Teste**, dass die Titel korrekt wechseln, wenn du zwischen den Bildschirmen navigierst

### Feature 2: Lifecycle-Hooks für Routen  
**Ziel:** Füge eine Option hinzu, um nach dem Template-Wechsel Code auszuführen. Wir wollen jedes Mal, wenn die Dashboard-Seite angezeigt wird, den Text `'Dashboard is shown'` in der Entwicklerkonsole ausgeben.

**Warum das wichtig ist:**
- **Ermöglicht** die Ausführung benutzerdefinierter Logiken beim Laden spezifischer Routen
- **Bietet** Hooks für Analyse, Logging oder Initialisierungscode
- **Schafft** eine Grundlage für komplexere Routinen
- **Demonstriert** das Observer-Pattern in der Webentwicklung

**Vorgehensweise:**
- **Füge** eine optionale Callback-Funktion als Eigenschaft den Routen-Konfigurationen hinzu
- **Führe** die Callback-Funktion (falls vorhanden) aus, nachdem das Rendering des Templates abgeschlossen ist
- **Stelle sicher**, dass das Feature für jede Route mit definiertem Callback funktioniert
- **Teste**, dass die Konsolennachricht erscheint, wenn das Dashboard besucht wird

## Bewertungsraster

| Kriterien | Vorbildlich                                                                                                                       | Ausreichend                                                                                                                                                                                | Verbesserungsbedürftig                                  |
| --------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
|           | Die zwei Features sind implementiert und funktionieren. Titel- und Codeerweiterung funktionieren auch für eine neu hinzugefügte Route in der `routes`-Deklaration. | Die zwei Features funktionieren, aber das Verhalten ist hardcodiert und nicht über die `routes`-Deklaration konfigurierbar. Das Hinzufügen einer dritten Route mit Titel- und Codeerweiterung funktioniert nicht oder nur teilweise. | Eines der Features fehlt oder funktioniert nicht richtig. |

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, können automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten. Das Originaldokument in seiner ursprünglichen Sprache gilt als maßgebliche Quelle. Für wichtige Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Verwendung dieser Übersetzung entstehen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->