<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0a02cb117e91a5b5f24178080068a3d",
  "translation_date": "2026-01-06T09:07:06+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "de"
}
-->
# Code-Refactoring- und Dokumentationsaufgabe

## Lernziele

Mit dieser Aufgabe üben Sie wichtige Softwareentwicklungskompetenzen, die professionelle Entwickler täglich nutzen. Sie lernen, Code für Wartbarkeit zu organisieren, Duplikate durch Abstraktion zu reduzieren und Ihre Arbeit für zukünftige Entwickler (einschließlich sich selbst!) zu dokumentieren.

Sauberer, gut dokumentierter Code ist entscheidend für reale Webentwicklungsprojekte, bei denen mehrere Entwickler zusammenarbeiten und Codebasen sich im Laufe der Zeit weiterentwickeln.

## Aufgabenübersicht

Die `app.js`-Datei Ihrer Banking-App ist mit Login-, Registrierungs- und Dashboard-Funktionalität erheblich gewachsen. Es ist Zeit, diesen Code mithilfe professioneller Entwicklungsmethoden zu refaktorisieren, um die Lesbarkeit, Wartbarkeit zu verbessern und Duplikate zu reduzieren.

## Anleitung

Transformieren Sie Ihren aktuellen `app.js`-Code durch Implementierung dieser drei Kern-Refactoring-Techniken:

### 1. Extrahieren von Konfigurationskonstanten

**Aufgabe**: Erstellen Sie einen Konfigurationsbereich am Anfang Ihrer Datei mit wiederverwendbaren Konstanten.

**Implementierungshinweise:**
- Extrahieren Sie die Basis-URL der Server-API (derzeit mehrfach fest kodiert)
- Erstellen Sie Konstanten für Fehlermeldungen, die in mehreren Funktionen vorkommen
- Ziehen Sie in Betracht, wiederholt verwendete Routenpfade und Element-IDs zu extrahieren

**Beispielstruktur:**
```javascript
// Konfigurationskonstanten
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Erstellen Sie eine einheitliche Request-Funktion

**Aufgabe**: Entwickeln Sie eine wiederverwendbare `sendRequest()`-Funktion, die doppelten Code zwischen `createAccount()` und `getAccount()` eliminiert.

**Anforderungen:**
- Unterstützt sowohl GET- als auch POST-Anfragen
- Beinhaltet ordnungsgemäße Fehlerbehandlung
- Unterstützt unterschiedliche URL-Endpunkte
- Akzeptiert optional Daten im Request-Body

**Funktionssignaturhinweise:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Ihre Implementierung hier
}
```

### 3. Professionelle Code-Dokumentation hinzufügen

**Aufgabe**: Dokumentieren Sie Ihren Code mit klaren, hilfreichen Kommentaren, die das „Warum“ hinter Ihrer Logik erklären.

**Dokumentationsstandards:**
- Fügen Sie Funktionsdokumentationen hinzu, die Zweck, Parameter und Rückgabewerte erklären
- Integrieren Sie Inline-Kommentare bei komplexer Logik oder geschäftlichen Regeln
- Gruppieren Sie verwandte Funktionen mit Abschnittsüberschriften
- Erklären Sie unklare Code-Muster oder browser-spezifische Workarounds

**Beispiel-Dokumentationsstil:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Verhindert das standardmäßige Abschicken des Formulars, um es mit JavaScript zu verarbeiten
  event.preventDefault();
  
  // Ihre Implementierung...
}
```

## Erfolgskriterien

Ihr refaktorisierter Code sollte diese professionellen Entwicklungspraktiken demonstrieren:

### Beispielhafte Umsetzung
- ✅ **Konstanten**: Alle magischen Strings und URLs sind in klar benannte Konstanten ausgelagert
- ✅ **DRY-Prinzip**: Gemeinsame Request-Logik ist in der wiederverwendbaren `sendRequest()`-Funktion zusammengefasst
- ✅ **Dokumentation**: Funktionen verfügen über klare JSDoc-Kommentare, die Zweck und Parameter erläutern
- ✅ **Organisation**: Code ist logisch gruppiert mit Abschnittsüberschriften und konsistenter Formatierung
- ✅ **Fehlerbehandlung**: Verbesserte Fehlerbehandlung mittels der neuen Request-Funktion

### Ausreichende Umsetzung
- ✅ **Konstanten**: Die meisten wiederholten Werte sind extrahiert, kleinere fest kodierte Werte verbleiben
- ✅ **Faktorisierung**: Grundlegende `sendRequest()`-Funktion erstellt, könnte aber nicht alle Randfälle abdecken
- ✅ **Kommentare**: Schlüssel-Funktionen sind dokumentiert, einige Erklärungen könnten ausführlicher sein
- ✅ **Lesbarkeit**: Code ist größtenteils gut organisiert, mit einigen Verbesserungsmöglichkeiten

### Verbesserungsbedürftig
- ❌ **Konstanten**: Viele magische Strings und URLs bleiben hartkodiert im gesamten File
- ❌ **Duplikation**: Deutliche Code-Duplikationen zwischen ähnlichen Funktionen vorhanden
- ❌ **Dokumentation**: Fehlende oder unzureichende Kommentare, die Zweck des Codes nicht erklären
- ❌ **Organisation**: Code fehlt eine klare Struktur und logische Gruppierung

## Testen des refaktorierten Codes

Nach der Refaktorisierung stellen Sie sicher, dass Ihre Banking-App weiterhin korrekt funktioniert:

1. **Testen Sie alle Nutzerflüsse**: Registrierung, Login, Dashboard-Anzeige und Fehlerbehandlung
2. **Überprüfen Sie API-Aufrufe**: Bestätigen Sie, dass Ihre `sendRequest()`-Funktion sowohl für Kontenerstellung als auch -abruf funktioniert
3. **Prüfen Sie Fehlerfälle**: Testen Sie mit ungültigen Zugangsdaten und Netzwerkfehlern
4. **Überprüfen Sie Konsolenausgaben**: Stellen Sie sicher, dass bei der Refaktorisierung keine neuen Fehler aufgetreten sind

## Einreichungsrichtlinien

Reichen Sie Ihre refaktorisierte `app.js`-Datei ein mit:
- Klare Abschnittsüberschriften, die verschiedene Funktionalitäten organisieren
- Konsistente Codeformatierung und Einrückung
- Vollständige JSDoc-Dokumentation für alle Funktionen
- Ein kurzer Kommentar am Anfang, der Ihren Refaktorisierungsansatz erklärt

**Bonus-Herausforderung**: Erstellen Sie eine einfache Code-Dokumentationsdatei (`CODE_STRUCTURE.md`), die die Architektur Ihrer App und das Zusammenspiel der verschiedenen Funktionen erklärt.

## Praxisbezug

Diese Aufgabe spiegelt die Art der Codewartung wider, die professionelle Entwickler regelmäßig durchführen. In der Industrie:
- **Code-Reviews** bewerten Lesbarkeit und Wartbarkeit wie in dieser Aufgabe
- **Technische Schulden** entstehen, wenn Code nicht regelmäßig refaktoriert und dokumentiert wird
- **Teamzusammenarbeit** basiert auf klarem, gut dokumentiertem Code, den neue Teammitglieder leicht verstehen können
- **Fehlerbehebungen** sind in gut organisierten Codebasen mit geeigneten Abstraktionen viel einfacher

Die hier geübten Fähigkeiten – Konstanten extrahieren, Duplikationen beseitigen und klare Dokumentation verfassen – sind grundlegend für professionelle Softwareentwicklung.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir um Genauigkeit bemüht sind, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner Ursprungssprache gilt als maßgebliche Quelle. Für wichtige Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Verwendung dieser Übersetzung entstehen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->