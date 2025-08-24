<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dd58ae1b7707034f055718c1b68bc8de",
  "translation_date": "2025-08-24T13:21:31+00:00",
  "source_file": "5-browser-extension/solution/translation/README.hi.md",
  "language_code": "de"
}
-->
# Carbon Trigger Browser-Erweiterung: Fertiger Code

Verwendung der CO2 Signal API von tmrow, um den Stromverbrauch zu verfolgen und eine Browser-Erweiterung zu erstellen, die Sie daran erinnert, wie stark der Stromverbrauch in Ihrer Region ist. Durch die Nutzung dieser Erweiterung können Sie basierend auf diesen Informationen Entscheidungen über Ihre Aktivitäten treffen.

![Erweiterung Screenshot](../../../../../5-browser-extension/extension-screenshot.png)

## Erste Schritte

Sie müssen [npm](https://npmjs.com) installieren. Laden Sie eine Kopie dieses Codes in einen Ordner auf Ihrem Computer herunter.

Installieren Sie alle erforderlichen Pakete:

```
npm install
```

Erstellen Sie die Erweiterung mit Webpack:

```
npm run build
```

Um sie in Edge zu installieren, verwenden Sie das "Drei-Punkte"-Menü oben rechts im Browser, um das Erweiterungs-Panel zu finden. Wählen Sie dort "Entpackte Erweiterung laden". Öffnen Sie im angezeigten Dialogfeld den Ordner "dist", und die Erweiterung wird geladen. Um sie zu nutzen, benötigen Sie einen API-Schlüssel für die CO2 Signal API ([hier per E-Mail erhältlich](https://www.co2signal.com/) – geben Sie Ihre E-Mail-Adresse in das Feld auf dieser Seite ein) und [den Code für Ihre Region](http://api.electricitymap.org/v3/zones) von der [Electricity Map](https://www.electricitymap.org/map) (zum Beispiel verwende ich für Boston "US-NEISO").

![Installation](../../../../../5-browser-extension/install-on-edge.png)

Sobald der API-Schlüssel und die Region in die Benutzeroberfläche der Erweiterung eingegeben wurden, sollte sich der farbige Punkt in der Browser-Erweiterungsleiste ändern, um den Energieverbrauch Ihrer Region widerzuspiegeln. Dies gibt Ihnen einen Hinweis darauf, welche energieintensiven Aktivitäten für Sie geeignet sind. Das Konzept hinter diesem "Punkt"-System wurde mir durch die [Energy Lollipop-Erweiterung](https://energylollipop.com/) für Emissionen in Kalifornien inspiriert.

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.