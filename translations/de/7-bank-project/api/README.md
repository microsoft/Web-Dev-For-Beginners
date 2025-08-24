<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9884f8c8a61cf56214450f8b16a094ce",
  "translation_date": "2025-08-24T13:27:01+00:00",
  "source_file": "7-bank-project/api/README.md",
  "language_code": "de"
}
-->
# Bank-API

> Bank-API erstellt mit [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

Die API ist bereits für Sie erstellt und nicht Teil der Übung.

Falls Sie jedoch daran interessiert sind, zu lernen, wie man eine solche API erstellt, können Sie diese Videoserie verfolgen: https://aka.ms/NodeBeginner (Videos 17 bis 21 behandeln genau diese API).

Sie können sich auch dieses interaktive Tutorial ansehen: https://aka.ms/learn/express-api

## Server starten

Stellen Sie sicher, dass [Node.js](https://nodejs.org) installiert ist.

1. Klonen Sie dieses Repository: [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Öffnen Sie Ihr Terminal und navigieren Sie in den Ordner `Web-Dev-For-Beginners/7-bank-project/api`.
3. Führen Sie `npm install` aus und warten Sie, bis die Pakete installiert sind (dies kann je nach Qualität Ihrer Internetverbindung eine Weile dauern).
4. Wenn die Installation abgeschlossen ist, führen Sie `npm start` aus, und Sie sind startklar.

Der Server sollte auf Port `5000` lauschen.  
*Dieser Server wird zusammen mit dem Hauptserver der Bank-App (lauscht auf Port `3000`) ausgeführt. Schließen Sie ihn nicht.*

> Hinweis: Alle Einträge werden im Arbeitsspeicher gespeichert und nicht dauerhaft gesichert. Wenn der Server gestoppt wird, gehen alle Daten verloren.

## API-Details

Route                                        | Beschreibung
---------------------------------------------|------------------------------------
GET    /api/                                 | Serverinformationen abrufen
POST   /api/accounts/                        | Ein Konto erstellen, z. B.: `{ user: 'Yohan', description: 'Mein Budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Alle Daten für das angegebene Konto abrufen
DELETE /api/accounts/:user                   | Angegebenes Konto entfernen
POST   /api/accounts/:user/transactions      | Eine Transaktion hinzufügen, z. B.: `{ date: '2020-07-23T18:25:43.511Z', object: 'Ein Buch gekauft', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Angegebene Transaktion entfernen

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.