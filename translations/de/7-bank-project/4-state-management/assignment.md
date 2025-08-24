<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-24T13:47:39+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "de"
}
-->
# Implementieren Sie den Dialog "Transaktion hinzufügen"

## Anweisungen

Unsere Banking-App fehlt noch eine wichtige Funktion: die Möglichkeit, neue Transaktionen einzugeben.
Nutzen Sie alles, was Sie in den vier vorherigen Lektionen gelernt haben, um einen Dialog "Transaktion hinzufügen" zu implementieren:

- Fügen Sie einen Button "Transaktion hinzufügen" auf der Dashboard-Seite hinzu.
- Erstellen Sie entweder eine neue Seite mit einer HTML-Vorlage oder verwenden Sie JavaScript, um das Dialog-HTML ein- und auszublenden, ohne die Dashboard-Seite zu verlassen (Sie können dafür die [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden)-Eigenschaft oder CSS-Klassen verwenden).
- Stellen Sie sicher, dass Sie [Tastatur- und Screenreader-Zugänglichkeit](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) für den Dialog berücksichtigen.
- Implementieren Sie ein HTML-Formular, um Eingabedaten zu erfassen.
- Erstellen Sie JSON-Daten aus den Formulardaten und senden Sie diese an die API.
- Aktualisieren Sie die Dashboard-Seite mit den neuen Daten.

Schauen Sie sich die [Server-API-Spezifikationen](../api/README.md) an, um zu sehen, welche API Sie aufrufen müssen und welches JSON-Format erwartet wird.

Hier ist ein Beispielergebnis nach Abschluss der Aufgabe:

![Screenshot eines Beispieldialogs "Transaktion hinzufügen"](../../../../7-bank-project/4-state-management/images/dialog.png)

## Bewertungskriterien

| Kriterien | Vorbildlich                                                                                     | Angemessen                                                                                                             | Verbesserungswürdig                          |
| --------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
|           | Das Hinzufügen einer Transaktion ist vollständig implementiert und folgt allen Best Practices aus den Lektionen. | Das Hinzufügen einer Transaktion ist implementiert, folgt jedoch nicht den Best Practices aus den Lektionen oder funktioniert nur teilweise. | Das Hinzufügen einer Transaktion funktioniert überhaupt nicht. |

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, weisen wir darauf hin, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.