<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b121a279a6ab39878491f3e572673515",
  "translation_date": "2025-08-24T13:07:42+00:00",
  "source_file": "5-browser-extension/README.md",
  "language_code": "de"
}
-->
# Erstellen einer Browser-Erweiterung

Das Erstellen von Browser-Erweiterungen ist eine unterhaltsame und interessante Möglichkeit, über die Leistung Ihrer Apps nachzudenken, während Sie eine andere Art von Web-Asset entwickeln. Dieses Modul enthält Lektionen darüber, wie Browser funktionieren und wie man eine Browser-Erweiterung bereitstellt, wie man ein Formular erstellt, eine API aufruft und lokalen Speicher verwendet, sowie wie man die Leistung Ihrer Website bewertet und verbessert.

Sie werden eine Browser-Erweiterung erstellen, die mit Edge, Chrome und Firefox funktioniert. Diese Erweiterung, die wie eine Mini-Website ist, die auf eine sehr spezifische Aufgabe zugeschnitten ist, überprüft die [C02 Signal API](https://www.co2signal.com) für den Stromverbrauch und die Kohlenstoffintensität einer bestimmten Region und liefert eine Bewertung des Kohlenstoff-Fußabdrucks der Region.

Diese Erweiterung kann von einem Benutzer ad hoc aufgerufen werden, sobald ein API-Schlüssel und ein Regionscode in ein Formular eingegeben wurden, um den lokalen Stromverbrauch zu bestimmen und so Daten bereitzustellen, die die Stromentscheidungen eines Benutzers beeinflussen können. Zum Beispiel könnte es sinnvoll sein, das Einschalten eines Wäschetrockners (eine kohlenstoffintensive Aktivität) während einer Zeit mit hohem Stromverbrauch in Ihrer Region zu verschieben.

### Themen

1. [Über den Browser](1-about-browsers/README.md)
2. [Formulare und lokaler Speicher](2-forms-browsers-local-storage/README.md)
3. [Hintergrundaufgaben und Leistung](3-background-tasks-and-performance/README.md)

### Credits

![eine grüne Browser-Erweiterung](../../../5-browser-extension/extension-screenshot.png)

## Credits

Die Idee für diesen Web-Kohlenstoff-Auslöser wurde von Asim Hussain, Leiter des Green Cloud Advocacy Teams bei Microsoft und Autor der [Green Principles](https://principles.green/), vorgeschlagen. Ursprünglich war es ein [Webseitenprojekt](https://github.com/jlooper/green).

Die Struktur der Browser-Erweiterung wurde von [Adebola Adenirans COVID-Erweiterung](https://github.com/onedebos/covtension) beeinflusst.

Das Konzept hinter dem 'Punkt'-Icon-System wurde durch die Icon-Struktur der [Energy Lollipop](https://energylollipop.com/) Browser-Erweiterung für Emissionen in Kalifornien inspiriert.

Diese Lektionen wurden mit ♥️ von [Jen Looper](https://www.twitter.com/jenlooper) geschrieben.

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, weisen wir darauf hin, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.