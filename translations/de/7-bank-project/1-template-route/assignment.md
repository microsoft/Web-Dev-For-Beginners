<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-24T13:41:50+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "de"
}
-->
# Verbesserung der Routenführung

## Anweisungen

Die Routen-Deklaration enthält derzeit nur die Template-ID, die verwendet werden soll. Aber beim Anzeigen einer neuen Seite wird manchmal etwas mehr benötigt. Lassen Sie uns unsere Routing-Implementierung mit zwei zusätzlichen Funktionen verbessern:

- Geben Sie jedem Template einen Titel und aktualisieren Sie den Fenstertitel mit diesem neuen Titel, wenn sich das Template ändert.
- Fügen Sie eine Option hinzu, um nach der Änderung des Templates Code auszuführen. Wir möchten `'Dashboard is shown'` in der Entwicklerkonsole ausgeben, jedes Mal, wenn die Dashboard-Seite angezeigt wird.

## Bewertungskriterien

| Kriterien | Vorbildlich                                                                                                                       | Angemessen                                                                                                                                                                                | Verbesserungswürdig                                    |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|           | Die beiden Funktionen sind implementiert und funktionieren. Titel und Codeausführung funktionieren auch für eine neue Route, die in der `routes`-Deklaration hinzugefügt wurde. | Die beiden Funktionen funktionieren, aber das Verhalten ist fest codiert und nicht über die `routes`-Deklaration konfigurierbar. Das Hinzufügen einer dritten Route mit Titel und Codeausführung funktioniert nicht oder nur teilweise. | Eine der Funktionen fehlt oder funktioniert nicht richtig. |

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.