# Carbon Trigger Browser-Erweiterung: Code zum Starten

Die CO2 Signal API von tmrow wird verwendet, um den Stromverbrauch zu überwachen und eine Browser-Erweiterung zu erstellen, die direkt im Browser daran erinnert, wie hoch der Stromverbrauch in der eigenen Region ist. Die Nutzung dieser maßgeschneiderten Erweiterung hilft dabei, die eigenen Aktivitäten basierend auf diesen Informationen zu bewerten.

![Screenshot der Erweiterung](../../../../../5-browser-extension/extension-screenshot.png)

## Erste Schritte

Es ist erforderlich, dass [npm](https://npmjs.com) installiert ist. Laden Sie eine Kopie dieses Codes in einen Ordner auf Ihrem Computer herunter.

Installieren Sie alle benötigten Pakete:

```
npm install
```

Erstellen Sie die Erweiterung mit webpack:

```
npm run build
```

Um die Erweiterung in Edge zu installieren, verwenden Sie das Menü mit den "drei Punkten" oben rechts im Browser, um das Erweiterungs-Panel zu finden. Falls noch nicht aktiviert, schalten Sie den Entwicklermodus (unten links) ein. Wählen Sie "Entpackt laden", um eine neue Erweiterung zu installieren. Öffnen Sie den Ordner "dist" im Dialogfeld, und die Erweiterung wird geladen. Um sie zu verwenden, benötigen Sie einen API-Schlüssel für die CO2 Signal API (diesen können Sie [hier per E-Mail erhalten](https://www.co2signal.com/) – geben Sie Ihre E-Mail-Adresse in das Feld auf dieser Seite ein) sowie den [Code für Ihre Region](http://api.electricitymap.org/v3/zones), der der [Electricity Map](https://www.electricitymap.org/map) entspricht (zum Beispiel "US-NEISO" für Boston).

![Installation](../../../../../5-browser-extension/install-on-edge.png)

Sobald der API-Schlüssel und die Region in der Benutzeroberfläche der Erweiterung eingegeben wurden, sollte der farbige Punkt in der Browser-Erweiterungsleiste sich ändern, um den Energieverbrauch der Region widerzuspiegeln und Hinweise darauf zu geben, welche energieintensiven Aktivitäten geeignet wären, auszuführen. Das Konzept hinter diesem "Punkt"-System wurde von der [Energy Lollipop Erweiterung](https://energylollipop.com/) für die Emissionen in Kalifornien inspiriert.

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, weisen wir darauf hin, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.