# Carbon Trigger Browser-Erweiterung: Starter-Code

Verwenden Sie die CO2 Signal API von tmrow, um den Stromverbrauch zu verfolgen, und erstellen Sie eine Browser-Erweiterung, damit Sie direkt in Ihrem Browser eine Erinnerung daran haben, wie stark der Stromverbrauch in Ihrer Region ist. Die gelegentliche Nutzung dieser Erweiterung hilft Ihnen, Entscheidungen über Ihre Aktivitäten basierend auf diesen Informationen zu treffen.

![Erweiterung Screenshot](../../../../5-browser-extension/extension-screenshot.png)

## Erste Schritte

Sie müssen [npm](https://npmjs.com) installiert haben. Laden Sie eine Kopie dieses Codes in einen Ordner auf Ihrem Computer herunter.

Installieren Sie alle erforderlichen Pakete:

```
npm install
```

Bauen Sie die Erweiterung mit Webpack:

```
npm run build
```

Um die Erweiterung in Edge zu installieren, verwenden Sie das Menü mit den 'drei Punkten' in der oberen rechten Ecke des Browsers, um das Erweiterungs-Panel zu finden. Wählen Sie dort 'Entpackt laden', um eine neue Erweiterung zu laden. Öffnen Sie den Ordner 'dist' bei der Aufforderung, und die Erweiterung wird geladen. Um sie zu verwenden, benötigen Sie einen API-Schlüssel für die CO2 Signal API ([hier per E-Mail anfordern](https://www.co2signal.com/) - geben Sie Ihre E-Mail-Adresse in das Feld auf dieser Seite ein) und den [Code für Ihre Region](http://api.electricitymap.org/v3/zones), der der [Electricity Map](https://www.electricitymap.org/map) entspricht (in Boston verwende ich zum Beispiel 'US-NEISO').

![Installation](../../../../5-browser-extension/install-on-edge.png)

Sobald der API-Schlüssel und die Region in die Erweiterungsschnittstelle eingegeben wurden, sollte sich der farbige Punkt in der Browser-Erweiterungsleiste ändern, um den Energieverbrauch Ihrer Region widerzuspiegeln, und Ihnen Hinweise darauf geben, welche energieintensiven Aktivitäten für Sie angemessen wären. Das Konzept hinter diesem 'Punkt'-System wurde mir von der [Energy Lollipop-Erweiterung](https://energylollipop.com/) für Emissionen in Kalifornien inspiriert.

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, weisen wir darauf hin, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Nutzung dieser Übersetzung entstehen.