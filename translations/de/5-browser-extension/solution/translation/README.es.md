# Browser-Erweiterung Carbon Trigger: Vollständiger Code

Mit der CO2-Signal-API von tmrow, die den Stromverbrauch verfolgt, können Sie eine Browser-Erweiterung erstellen, die Ihnen direkt in Ihrem Browser eine Erinnerung an den Stromverbrauch Ihrer Region gibt. Die Nutzung dieser Ad-hoc-Erweiterung hilft Ihnen, Entscheidungen über Ihre Aktivitäten basierend auf diesen Informationen zu treffen.

![extension screenshot](../../../../../5-browser-extension/solution/start/extension-screenshot.png)

## Erste Schritte

Sie müssen [npm](https://npmjs.com) installiert haben. Laden Sie eine Kopie dieses Codes in einen Ordner auf Ihrem Computer herunter.

Installieren Sie alle erforderlichen Pakete:

```
npm install
```

Bauen Sie die Erweiterung mit webpack:

```
npm run build
```

Um die Erweiterung in Edge zu installieren, verwenden Sie das Menü mit den 'drei Punkten' in der oberen rechten Ecke des Browsers, um das Erweiterungs-Panel zu finden. Wählen Sie dort 'Entpackt laden', um eine neue Erweiterung zu installieren. Öffnen Sie den Ordner 'dist', wenn Sie dazu aufgefordert werden, und die Erweiterung wird geladen. Um sie zu verwenden, benötigen Sie einen API-Schlüssel für die CO2-Signal-API ([hier per E-Mail anfordern](https://www.co2signal.com/) - geben Sie Ihre E-Mail-Adresse in das Feld auf dieser Seite ein) und den [Code für Ihre Region](http://api.electricitymap.org/v3/zones), der dem [Electricity Map](https://www.electricitymap.org/map) entspricht (in Boston verwende ich beispielsweise 'US-NEISO').

![installing](../../../../../5-browser-extension/solution/start/install-on-edge.png)

Sobald der API-Schlüssel und die Region in der Erweiterungsoberfläche eingegeben wurden, sollte sich der Farbpunktsymbol in der Browser-Erweiterungsleiste ändern, um den Energieverbrauch Ihrer Region widerzuspiegeln und Ihnen einen Hinweis darauf zu geben, welche energieintensiven Aktivitäten für Sie geeignet wären. Die Idee hinter diesem "Punkt"-System stammt von der [Energy Lollipop-Erweiterung](https://energylollipop.com/) für die Emissionen in Kalifornien.

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, weisen wir darauf hin, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Nutzung dieser Übersetzung entstehen.