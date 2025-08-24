<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f5e6821e0febccfc5d05e7c944d9e3d",
  "translation_date": "2025-08-24T13:25:14+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ja.md",
  "language_code": "de"
}
-->
# Carbon-Trigger-Browser-Erweiterung: Fertiger Code

Erstellen Sie eine Browser-Erweiterung, die mithilfe der CO2 Signal API von tmrow den Stromverbrauch in Ihrer Region überwacht und als Erinnerung im Browser anzeigt, wie hoch der Energieverbrauch ist. Mit dieser Erweiterung können Sie Ihre Aktivitäten basierend auf diesen Informationen besser planen.

![extension screenshot](../../../../../5-browser-extension/extension-screenshot.png)

## Einführung

Sie benötigen [npm](https://npmjs.com), um loszulegen. Laden Sie eine Kopie dieses Codes in einen Ordner auf Ihrem Computer herunter.

Installieren Sie alle erforderlichen Pakete.

```
npm install
```

Bauen Sie die Erweiterung mit webpack.

```
npm run build
```

Um die Erweiterung in Edge zu installieren, öffnen Sie das „Drei-Punkte“-Menü oben rechts im Browser und navigieren Sie zum „Erweiterungen“-Panel. Wählen Sie dort „Entpackte Erweiterung laden“ und laden Sie die neue Erweiterung. Öffnen Sie im angezeigten Dialogfeld den „dist“-Ordner, um die Erweiterung zu laden. Um die Erweiterung zu nutzen, benötigen Sie einen API-Schlüssel für die CO2 Signal API ([hier per E-Mail anfordern](https://www.co2signal.com/) – geben Sie Ihre E-Mail-Adresse in das Feld auf der Seite ein) sowie den [Code für Ihre Region](http://api.electricitymap.org/v3/zones), der mit der [Electricity Map](https://www.electricitymap.org/map) kompatibel ist (für Boston beispielsweise 'US-NEISO').

![installing](../../../../../5-browser-extension/install-on-edge.png)

Sobald Sie den API-Schlüssel und Ihre Region in die Erweiterungsschnittstelle eingegeben haben, ändert sich der farbige Punkt in der Browser-Erweiterungsleiste. Dieser Punkt spiegelt den Energieverbrauch in Ihrer Region wider und zeigt an, welche Aktivitäten in Bezug auf den Energiebedarf angemessen sind. Die Idee für dieses „Punkt“-System stammt von der [Energy Lollipop-Erweiterung](https://energylollipop.com/) für Emissionen in Kalifornien.

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.