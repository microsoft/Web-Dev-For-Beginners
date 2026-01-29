# Browser-Erweiterung Carbon Trigger: Fertiger Code

Mit der CO2 Signal API von tmrow, die den Stromverbrauch verfolgt, erstellen Sie eine Browser-Erweiterung, die Sie direkt in Ihrem Browser an den Stromverbrauch in Ihrer Region erinnert. Die Nutzung dieser maßgeschneiderten Erweiterung hilft Ihnen, Ihre Aktivitäten basierend auf diesen Informationen zu bewerten.

![Erweiterungsscreenshot](../../../../../5-browser-extension/extension-screenshot.png)

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

Um die Erweiterung in Edge zu installieren, verwenden Sie das Menü mit den 'drei Punkten' in der oberen rechten Ecke des Browsers, um das Erweiterungsfenster zu finden. Wählen Sie dort 'Entpackte Erweiterung laden', um eine neue Erweiterung hinzuzufügen. Öffnen Sie den Ordner 'dist' im Dialogfeld, und die Erweiterung wird geladen. Um sie zu verwenden, benötigen Sie einen API-Schlüssel für die CO2 Signal API ([hier per E-Mail anfordern](https://www.co2signal.com/) – geben Sie Ihre E-Mail-Adresse in das Feld auf dieser Seite ein) und den [Code für Ihre Region](http://api.electricitymap.org/v3/zones), der der [Electricity Map](https://www.electricitymap.org/map) entspricht (zum Beispiel verwende ich in Boston 'US-NEISO').

![Installation](../../../../../5-browser-extension/install-on-edge.png)

Sobald der API-Schlüssel und die Region in der Erweiterungsschnittstelle eingegeben wurden, sollte sich der farbige Punkt in der Browser-Erweiterungsleiste ändern, um den Energieverbrauch Ihrer Region widerzuspiegeln. Er gibt Ihnen einen Hinweis darauf, welche energieintensiven Aktivitäten Sie entsprechend durchführen sollten. Das Konzept hinter diesem 'Punktesystem' wurde von der [Energy Lollipop-Erweiterung](https://energylollipop.com/) für kalifornische Emissionen inspiriert.

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, weisen wir darauf hin, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.