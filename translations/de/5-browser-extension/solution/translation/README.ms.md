# Carbon Trigger Browser-Erweiterung: Vollständiger Code

Nutzen Sie die CO2-Signal-API von tmrow, um den Stromverbrauch zu überwachen, und erstellen Sie eine Browser-Erweiterung, die Sie im Browser über die Intensität des Stromverbrauchs in Ihrer Region informiert. Die Verwendung dieser Erweiterung hilft Ihnen, Ihre Aktivitäten basierend auf diesen Informationen bewusster zu planen.

![Screenshot der Browser-Erweiterung](../../../../../5-browser-extension/extension-screenshot.png)

## Erste Schritte

Sie müssen [npm](https://npmjs.com) installiert haben. Laden Sie eine Kopie dieses Codes in einen Ordner auf Ihrem Computer herunter.

Installieren Sie alle benötigten Pakete:

```
npm install
```

Erstellen Sie die Erweiterung mit Webpack:

```
npm run build
```

Um die Erweiterung in Edge zu installieren, verwenden Sie das Menü mit den „drei Punkten“ in der oberen rechten Ecke des Browsers, um das Erweiterungs-Panel zu finden. Wählen Sie dort „Entpackte Erweiterung laden“, um die neue Erweiterung zu installieren. Öffnen Sie den Ordner „dist“, wenn Sie dazu aufgefordert werden, und die Erweiterung wird geladen. Um sie zu verwenden, benötigen Sie einen API-Schlüssel für die CO2-Signal-API ([hier per E-Mail anfordern](https://www.co2signal.com/) – geben Sie Ihre E-Mail-Adresse in das Feld auf der Seite ein) sowie [den Code für Ihre Region](http://api.electricitymap.org/v3/zones), der mit der [Electricity Map](https://www.electricitymap.org/map) übereinstimmt (in Boston zum Beispiel verwende ich „US-NEISO“).

![wird heruntergeladen](../../../../../5-browser-extension/install-on-edge.png)

Sobald der API-Schlüssel und die Region in die Benutzeroberfläche der Erweiterung eingegeben wurden, ändert sich der farbige Punkt in der Browser-Erweiterungsleiste, um den Energieverbrauch Ihrer Region widerzuspiegeln. Er gibt Ihnen Hinweise darauf, welche energieintensiven Aktivitäten Sie durchführen sollten. Die Idee hinter diesem „Punkt“-System wurde von der [Energy Lollipop Browser-Erweiterung](https://energylollipop.com/) für Kalifornien inspiriert.

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.