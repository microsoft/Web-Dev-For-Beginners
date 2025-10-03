<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T08:30:37+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "de"
}
-->
***

# Verwendung eines Code-Editors: Meistere [VSCode.dev](https://vscode.dev)

**Willkommen!**  
Diese Lektion führt dich von den Grundlagen bis zur fortgeschrittenen Nutzung von [VSCode.dev](https://vscode.dev)—dem leistungsstarken, webbasierten Code-Editor. Du lernst, wie du sicher Code bearbeiten, Projekte verwalten, Änderungen verfolgen, Erweiterungen installieren und wie ein Profi zusammenarbeiten kannst—all das direkt im Browser, ohne Installation.

***

## Lernziele

Am Ende dieser Lektion wirst du in der Lage sein:

- Einen Code-Editor effizient für jedes Projekt und überall zu nutzen
- Deine Arbeit nahtlos mit integriertem Versionskontrollsystem zu verfolgen
- Deinen Entwicklungsworkflow mit Anpassungen und Erweiterungen des Editors zu personalisieren und zu optimieren

***

## Voraussetzungen

Um loszulegen, **melde dich für ein kostenloses [GitHub](https://github.com)-Konto an**, mit dem du Code-Repositories verwalten und weltweit zusammenarbeiten kannst. Falls du noch kein Konto hast, [erstelle hier eines](https://github.com/).

***

## Warum einen webbasierten Code-Editor verwenden?

Ein **Code-Editor** wie VSCode.dev ist dein Kontrollzentrum für das Schreiben, Bearbeiten und Verwalten von Code. Mit einer intuitiven Benutzeroberfläche, zahlreichen Funktionen und sofortigem Zugriff über den Browser kannst du:

- Projekte auf jedem Gerät bearbeiten
- Installationsprobleme vermeiden
- Sofort zusammenarbeiten und Beiträge leisten

Sobald du dich mit VSCode.dev vertraut gemacht hast, bist du bereit, Coding-Aufgaben jederzeit und überall zu meistern.

***

## Erste Schritte mit VSCode.dev

Navigiere zu **[VSCode.dev](https://vscode.dev)**—keine Installation, keine Downloads. Durch das Anmelden mit GitHub erhältst du vollen Zugriff, einschließlich der Synchronisierung deiner Einstellungen, Erweiterungen und Repositories. Falls du dazu aufgefordert wirst, verbinde dein GitHub-Konto.

Nach dem Laden sieht dein Arbeitsbereich so aus:

![Standard VSCode.dev](../images/default-vscode-dev hat drei Hauptbereiche von links nach rechts:
- **Aktivitätsleiste:** Die Symbole wie 🔎 (Suche), ⚙️ (Einstellungen), Dateien, Quellcodeverwaltung usw.
- **Seitenleiste:** Ändert den Kontext basierend auf dem ausgewählten Symbol in der Aktivitätsleiste (standardmäßig *Explorer*, um Dateien anzuzeigen).
- **Editor-/Code-Bereich:** Der größte Bereich rechts—hier bearbeitest und siehst du deinen Code.

Klicke durch die Symbole, um die Funktionen zu erkunden, kehre aber zum _Explorer_ zurück, um deinen Platz zu behalten.

***

## Öffnen eines GitHub-Repositories

### Methode 1: Vom Editor aus

1. Gehe zu [VSCode.dev](https://vscode.dev). Klicke auf **"Open Remote Repository."**

   ![Remote-Repository öffnen](../../../../8-code-editor/images/open-remote-repository nutze die _Befehls-Palette_ (Strg-Shift-P oder Cmd-Shift-P auf Mac).

   ![Palettenmenü](../images/palette-menu.pngopen remote repository.”
   - Wähle die Option aus.
   - Füge die URL deines GitHub-Repos ein (z. B. `https://github.com/microsoft/Web-Dev-For-Beginners`) und drücke Enter.

Wenn erfolgreich, wird das gesamte Projekt geladen und ist bereit zur Bearbeitung!

***

### Methode 2: Sofort über die URL

Verwandle jede GitHub-Repo-URL, um sie direkt in VSCode.dev zu öffnen, indem du `github.com` durch `vscode.dev/github` ersetzt.  
Beispiel:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Diese Funktion ermöglicht schnellen Zugriff auf JEDES Projekt.

***

## Dateien in deinem Projekt bearbeiten

Sobald dein Repository geöffnet ist, kannst du:

### 1. **Eine neue Datei erstellen**
- Navigiere in der *Explorer*-Seitenleiste zu deinem gewünschten Ordner oder nutze das Root-Verzeichnis.
- Klicke auf das Symbol _‘Neue Datei ...’_.
- Benenne deine Datei, drücke **Enter**, und deine Datei erscheint sofort.

![Neue Datei erstellen](../images/create-new-file 2. **Dateien bearbeiten und speichern**

- Klicke auf eine Datei im *Explorer*, um sie im Code-Bereich zu öffnen.
- Nimm die gewünschten Änderungen vor.
- VSCode.dev speichert deine Änderungen automatisch, du kannst jedoch auch manuell mit Strg+S speichern.

![Datei bearbeiten](../images/edit-a-file.png. **Änderungen mit Versionskontrolle verfolgen und festschreiben**

VSCode.dev hat integrierte **Git**-Versionskontrolle!

- Klicke auf das Symbol _'Quellcodeverwaltung'_, um alle vorgenommenen Änderungen anzuzeigen.
- Dateien im `Changes`-Ordner zeigen Hinzufügungen (grün) und Löschungen (rot).  
  ![Änderungen anzeigen](../images/working-tree.png Änderungen durch Klicken auf das `+` neben den Dateien vorbereiten.
- **Verwerfe** unerwünschte Änderungen durch Klicken auf das Rückgängig-Symbol.
- Gib eine klare Commit-Nachricht ein und klicke dann auf das Häkchen, um zu committen und zu pushen.

Um zu deinem Repository auf GitHub zurückzukehren, wähle das Hamburger-Menü oben links.

![Änderungen vorbereiten und committen](../images/edit-vscode.dev Mit Erweiterungen aufrüsten

Erweiterungen ermöglichen es dir, Sprachen, Themes, Debugger und Produktivitätstools zu VSCode.dev hinzuzufügen—was dein Coding-Leben einfacher und angenehmer macht.

### Erweiterungen durchsuchen und verwalten

- Klicke auf das **Erweiterungen-Symbol** in der Aktivitätsleiste.
- Suche nach einer Erweiterung im Feld _'Search Extensions in Marketplace'_.

  ![Erweiterungsdetails](../images/extension-details:
  - **Installiert**: Alle Erweiterungen, die du hinzugefügt hast
  - **Beliebt**: Branchenfavoriten
  - **Empfohlen**: Auf deinen Workflow zugeschnitten

  ![Erweiterungen anzeigen](

  

***

### 1. **Erweiterungen installieren**

- Gib den Namen der Erweiterung in die Suche ein, klicke darauf und überprüfe die Details im Editor.
- Drücke die **blaue Installieren-Schaltfläche** in der Seitenleiste _oder_ im Haupt-Code-Bereich.

  ![Erweiterungen installieren](../images/install-extension 2. **Erweiterungen anpassen**

- Finde deine installierte Erweiterung.
- Klicke auf das **Zahnrad-Symbol** → wähle _Erweiterungseinstellungen_, um das Verhalten nach deinen Wünschen anzupassen.

  ![Erweiterungseinstellungen ändern](../images/extension-settings 3. **Erweiterungen verwalten**
Du kannst:

- **Deaktivieren:** Eine Erweiterung vorübergehend ausschalten, während sie installiert bleibt
- **Deinstallieren:** Sie dauerhaft entfernen, wenn sie nicht mehr benötigt wird

  Finde die Erweiterung, klicke auf das Zahnrad-Symbol und wähle ‘Deaktivieren’ oder ‘Deinstallieren’, oder nutze die blauen Schaltflächen im Code-Bereich.

***

## Aufgabe

Teste deine Fähigkeiten: [Erstelle eine Lebenslauf-Website mit vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Weiterführende Erkundung und Selbststudium

- Vertiefe dein Wissen mit [den offiziellen VSCode-Web-Dokumenten](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Erkunde erweiterte Arbeitsbereichsfunktionen, Tastenkombinationen und Einstellungen.

***

**Jetzt bist du bereit, zu programmieren, zu erstellen und zusammenzuarbeiten—von überall, auf jedem Gerät, mit VSCode.dev!**

---

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.