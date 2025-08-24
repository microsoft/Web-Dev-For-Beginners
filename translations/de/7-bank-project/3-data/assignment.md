<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-24T13:37:17+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "de"
}
-->
# Refaktorieren und kommentieren Sie Ihren Code

## Anweisungen

Wenn Ihre Codebasis wächst, ist es wichtig, den Code regelmäßig zu refaktorieren, um ihn im Laufe der Zeit lesbar und wartbar zu halten. Fügen Sie Kommentare hinzu und refaktorieren Sie Ihre `app.js`, um die Codequalität zu verbessern:

- Extrahieren Sie Konstanten, wie die Basis-URL der Server-API
- Vereinfachen Sie ähnlichen Code: Zum Beispiel können Sie eine `sendRequest()`-Funktion erstellen, um den Code, der sowohl in `createAccount()` als auch in `getAccount()` verwendet wird, zusammenzufassen
- Organisieren Sie den Code neu, um ihn leichter lesbar zu machen, und fügen Sie Kommentare hinzu

## Bewertungskriterien

| Kriterien | Vorbildlich                                                                                                                                                  | Angemessen                                                                                       | Verbesserungswürdig                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
|           | Code ist kommentiert, gut organisiert in verschiedene Abschnitte und leicht zu lesen. Konstanten sind extrahiert und eine vereinfachte `sendRequest()`-Funktion wurde erstellt. | Code ist sauber, kann aber durch mehr Kommentare, Konstantenextraktion oder Vereinfachung weiter verbessert werden. | Code ist unübersichtlich, nicht kommentiert, Konstanten sind nicht extrahiert und der Code ist nicht vereinfacht. |

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, weisen wir darauf hin, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Nutzung dieser Übersetzung entstehen.