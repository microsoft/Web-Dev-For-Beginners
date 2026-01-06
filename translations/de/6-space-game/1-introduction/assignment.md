<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c8fc39a014d08247c082878122e2ba73",
  "translation_date": "2026-01-06T08:48:39+00:00",
  "source_file": "6-space-game/1-introduction/assignment.md",
  "language_code": "de"
}
-->
# Spiele-Prototyp erstellen: Designmuster anwenden

## Aufgabenübersicht

Setze dein neu erworbenes Wissen über Designmuster ein, indem du einen einfachen Spieleprototyp erstellst! Diese Aufgabe hilft dir, sowohl architektonische Muster (Vererbung oder Komposition) als auch das Pub/Sub-Kommunikationssystem, das du in der Lektion gelernt hast, zu üben.

## Anweisungen

Erstelle eine einfache Spielrepräsentation, die die Designmuster aus dieser Lektion demonstriert. Dein Spiel sollte funktional sein, benötigt jedoch keine komplexen Grafiken – konzentriere dich auf die zugrunde liegende Architektur und die Kommunikationsmuster.

### Anforderungen

**Wähle dein Architektur-Muster:**
- **Option A**: Verwende klassenbasierte Vererbung (wie im Beispiel `GameObject` → `Movable` → `Hero`)
- **Option B**: Verwende Komposition (wie der Fabrik-Funktionsansatz mit gemischten Verhaltensweisen)

**Implementiere Kommunikation:**
- **Enthalten** eine `EventEmitter` Klasse für Pub/Sub-Nachrichten
- **Richte ein** mindestens 2-3 verschiedene Nachrichtentypen ein (wie `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Verbinde** Benutzereingaben (Tastatur/Maus) mit Spielereignissen über das Event-System

**Zu enthaltende Spielelemente:**
- Mindestens ein spieler-kontrollierter Charakter
- Mindestens ein weiteres Spielobjekt (Gegner, Sammelobjekt oder Umweltelement)
- Grundlegende Interaktion zwischen Objekten (Kollision, Sammlung oder Kommunikation)

### Vorgeschlagene Spielideen

**Einfache Spiele zur Auswahl:**
- **Snake-Spiel** – Schlangensegmente folgen dem Kopf, Nahrung erscheint zufällig
- **Pong-Variation** – Schläger reagiert auf Eingaben, Ball prallt von Wänden ab
- **Collector-Spiel** – Spieler bewegt sich und sammelt Gegenstände, während er Hindernissen ausweicht
- **Grundlagen Tower Defense** – Türme erkennen und schießen auf bewegende Gegner

### Richtlinien zur Code-Struktur

```javascript
// Beispiel Anfangsstruktur
const Messages = {
  // Definieren Sie hier Ihre Spielnachrichten
};

class EventEmitter {
  // Ihre Ereignissystem-Implementierung
}

// Wählen Sie entweder den klassenbasierten ODER den Kompositionsansatz
// Klassenbasiertes Beispiel:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// Oder Kompositionsbeispiel:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Testen deiner Umsetzung

**Überprüfe, ob dein Code funktioniert, indem du:**
- **Testest**, dass sich Objekte bewegen oder ändern, wenn Ereignisse ausgelöst werden
- **Bestätigst**, dass mehrere Objekte auf dasselbe Ereignis reagieren können
- **Prüfst**, dass du neue Verhaltensweisen hinzufügen kannst, ohne bestehenden Code zu ändern
- **Sicherstellst**, dass Tastatur-/Mauseingaben Spielereignisse korrekt auslösen

## Abgabe-Anforderungen

**Deine Abgabe sollte enthalten:**
1. **JavaScript-Datei(en)** mit deiner Spieleimplementierung
2. **HTML-Datei** zum Ausführen und Testen deines Spiels (kann einfach sein)
3. **Kommentare**, die erklären, welches Muster du gewählt hast und warum
4. **Kurze Dokumentation** deiner Nachrichtentypen und deren Funktion

## Bewertungskriterien

| Kriterium | Hervorragend (3 Punkte) | Ausreichend (2 Punkte) | Verbesserungswürdig (1 Punkt) |
|-----------|-------------------------|-----------------------|-------------------------------|
| **Architektur-Muster** | Implementiert korrekt entweder Vererbung ODER Komposition mit klarer Klassen-/Objekthierarchie | Verwendet gewähltes Muster mit kleineren Problemen oder Inkonsistenzen | Versuch, Muster zu verwenden, aber Umsetzung hat erhebliche Probleme |
| **Pub/Sub Umsetzung** | EventEmitter funktioniert korrekt mit mehreren Nachrichtentypen und ordnungsgemäßem Ereignisablauf | Grundlegendes Pub/Sub-System funktioniert mit etwas Event-Handling | Event-System vorhanden, funktioniert jedoch nicht zuverlässig |
| **Spiel-Funktionalität** | Drei oder mehr interaktive Elemente, die über Events kommunizieren | Zwei interaktive Elemente mit einfacher Ereigniskommunikation | Ein Element reagiert auf Events oder einfache Interaktion |
| **Code-Qualität** | Sauberer, gut kommentierter Code mit logischer Organisation und modernem JavaScript | Im Allgemeinen gut organisierter Code mit ausreichenden Kommentaren | Code funktioniert, aber mangelt an Organisation oder klaren Kommentaren |

**Bonus-Punkte:**
- **Kreative Spielmechaniken**, die interessante Anwendungen der Muster zeigen
- **Mehrere Eingabemethoden** (Tastatur UND Mausereignisse)
- **Skalierbare Architektur**, die leicht mit neuen Features erweiterbar wäre

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner Ursprungssprache gilt als maßgebliche Quelle. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Nutzung dieser Übersetzung entstehen.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->