<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "7aa6e4f270d38d9cb17f2b5bd86b863d",
  "translation_date": "2025-08-24T13:02:42+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "de"
}
-->
# Verwendung eines Code-Editors

Diese Lektion behandelt die Grundlagen der Nutzung von [VSCode.dev](https://vscode.dev), einem webbasierten Code-Editor, damit du Änderungen an deinem Code vornehmen und zu einem Projekt beitragen kannst, ohne etwas auf deinem Computer installieren zu müssen.

## Lernziele

In dieser Lektion lernst du:

- Einen Code-Editor in einem Projekt zu verwenden
- Änderungen mit Versionskontrolle nachzuverfolgen
- Den Editor für die Entwicklung anzupassen

### Voraussetzungen

Bevor du beginnst, musst du ein Konto bei [GitHub](https://github.com) erstellen. Gehe zu [GitHub](https://github.com/) und erstelle ein Konto, falls du noch keines hast.

### Einführung

Ein Code-Editor ist ein unverzichtbares Werkzeug, um Programme zu schreiben und an bestehenden Coding-Projekten zusammenzuarbeiten. Sobald du die Grundlagen eines Editors und dessen Funktionen verstehst, kannst du diese beim Schreiben von Code anwenden.

## Erste Schritte mit VSCode.dev

[VSCode.dev](https://vscode.dev) ist ein Code-Editor im Web. Du musst nichts installieren, um ihn zu nutzen – es funktioniert wie das Öffnen einer beliebigen anderen Website. Um mit dem Editor zu starten, öffne den folgenden Link: [https://vscode.dev](https://vscode.dev). Falls du nicht bei [GitHub](https://github.com/) angemeldet bist, folge den Anweisungen, um dich anzumelden oder ein neues Konto zu erstellen und dich dann einzuloggen.

Sobald der Editor geladen ist, sollte er ähnlich wie dieses Bild aussehen:

![Standardansicht VSCode.dev](../../../../8-code-editor/images/default-vscode-dev.png)

Es gibt drei Hauptbereiche, von links nach rechts:

1. Die _Aktivitätsleiste_, die einige Symbole wie die Lupe 🔎, das Zahnrad ⚙️ und andere enthält.
2. Die erweiterte Aktivitätsleiste, die standardmäßig den _Explorer_ anzeigt und als _Seitenleiste_ bezeichnet wird.
3. Und schließlich der Codebereich auf der rechten Seite.

Klicke auf jedes der Symbole, um ein anderes Menü anzuzeigen. Kehre anschließend zum _Explorer_ zurück, um wieder an den Ausgangspunkt zu gelangen.

Wenn du beginnst, Code zu erstellen oder bestehenden Code zu ändern, geschieht dies im größten Bereich auf der rechten Seite. Du wirst diesen Bereich auch nutzen, um bestehenden Code anzuzeigen, was du als Nächstes tun wirst.

## Ein GitHub-Repository öffnen

Das Erste, was du benötigst, ist das Öffnen eines GitHub-Repositories. Es gibt mehrere Möglichkeiten, ein Repository zu öffnen. In diesem Abschnitt siehst du zwei verschiedene Methoden, um ein Repository zu öffnen und mit Änderungen zu beginnen.

### 1. Mit dem Editor

Verwende den Editor selbst, um ein Remote-Repository zu öffnen. Wenn du [VSCode.dev](https://vscode.dev) besuchst, siehst du eine Schaltfläche _"Open Remote Repository"_:

![Remote-Repository öffnen](../../../../8-code-editor/images/open-remote-repository.png)

Du kannst auch die Befehls-Palette verwenden. Die Befehls-Palette ist ein Eingabefeld, in das du ein beliebiges Wort eingeben kannst, das Teil eines Befehls oder einer Aktion ist, um den richtigen Befehl auszuführen. Öffne das Menü oben links, wähle _Ansicht_ und dann _Befehls-Palette_, oder nutze die folgende Tastenkombination: Strg-Shift-P (auf MacOS wäre es Command-Shift-P).

![Palette-Menü](../../../../8-code-editor/images/palette-menu.png)

Sobald das Menü geöffnet ist, gib _open remote repository_ ein und wähle die erste Option. Mehrere Repositories, an denen du beteiligt bist oder die du kürzlich geöffnet hast, werden angezeigt. Du kannst auch eine vollständige GitHub-URL eingeben, um eines auszuwählen. Verwende die folgende URL und füge sie in das Feld ein:

```
https://github.com/microsoft/Web-Dev-For-Beginners
```

✅ Wenn erfolgreich, werden alle Dateien dieses Repositories im Texteditor geladen.

### 2. Über die URL

Du kannst auch direkt eine URL verwenden, um ein Repository zu laden. Zum Beispiel lautet die vollständige URL für das aktuelle Repository [https://github.com/microsoft/Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners), aber du kannst die GitHub-Domain durch `VSCode.dev/github` ersetzen und das Repository direkt laden. Die resultierende URL wäre [https://vscode.dev/github/microsoft/Web-Dev-For-Beginners](https://vscode.dev/github/microsoft/Web-Dev-For-Beginners).

## Dateien bearbeiten

Sobald du das Repository im Browser/vscode.dev geöffnet hast, besteht der nächste Schritt darin, Updates oder Änderungen am Projekt vorzunehmen.

### 1. Eine neue Datei erstellen

Du kannst entweder eine Datei in einem bestehenden Ordner erstellen oder sie im Stammverzeichnis/Ordner anlegen. Um eine neue Datei zu erstellen, öffne den Ort/Ordner, in dem die Datei gespeichert werden soll, und wähle das Symbol _'Neue Datei ...'_ in der Aktivitätsleiste _(links)_, gib ihr einen Namen und drücke Enter.

![Neue Datei erstellen](../../../../8-code-editor/images/create-new-file.png)

### 2. Eine Datei im Repository bearbeiten und speichern

Die Nutzung von vscode.dev ist hilfreich, wenn du schnelle Updates an deinem Projekt vornehmen möchtest, ohne Software lokal laden zu müssen.  
Um deinen Code zu aktualisieren, klicke auf das Symbol 'Explorer', das sich ebenfalls in der Aktivitätsleiste befindet, um Dateien und Ordner im Repository anzuzeigen.  
Wähle eine Datei aus, um sie im Codebereich zu öffnen, nimm deine Änderungen vor und speichere sie.

![Datei bearbeiten](../../../../8-code-editor/images/edit-a-file.png)

Sobald du mit der Aktualisierung deines Projekts fertig bist, wähle das Symbol _`Quellkontrolle`_, das alle neuen Änderungen enthält, die du an deinem Repository vorgenommen hast.

Um die Änderungen an deinem Projekt anzuzeigen, wähle die Datei(en) im Ordner `Changes` in der erweiterten Aktivitätsleiste aus. Dadurch wird ein 'Working Tree' geöffnet, in dem du die Änderungen an der Datei visuell sehen kannst. Rot zeigt eine Entfernung aus dem Projekt, während Grün eine Hinzufügung bedeutet.

![Änderungen anzeigen](../../../../8-code-editor/images/working-tree.png)

Wenn du mit den vorgenommenen Änderungen zufrieden bist, bewege den Mauszeiger über den Ordner `Changes` und klicke auf die Schaltfläche `+`, um die Änderungen zu stagen. Staging bedeutet, dass du deine Änderungen vorbereitest, um sie bei GitHub zu committen.

Falls du jedoch mit einigen Änderungen nicht zufrieden bist und sie verwerfen möchtest, bewege den Mauszeiger über den Ordner `Changes` und wähle das Symbol `Rückgängig`.

Gib dann eine `Commit-Nachricht` ein _(eine Beschreibung der Änderungen, die du am Projekt vorgenommen hast)_, klicke auf das `Häkchen-Symbol`, um die Änderungen zu committen und zu pushen.

Sobald du mit deinem Projekt fertig bist, wähle das `Hamburger-Menü-Symbol` oben links, um zum Repository auf github.com zurückzukehren.

![Änderungen stagen & committen](../../../../8-code-editor/images/edit-vscode.dev.gif)

## Erweiterungen verwenden

Das Installieren von Erweiterungen in VSCode ermöglicht es dir, neue Funktionen hinzuzufügen und die Entwicklungsumgebung in deinem Editor anzupassen, um deinen Workflow zu verbessern. Diese Erweiterungen helfen dir auch, Unterstützung für mehrere Programmiersprachen hinzuzufügen, und sind oft entweder generische oder sprachbasierte Erweiterungen.

Um die Liste aller verfügbaren Erweiterungen zu durchsuchen, klicke auf das Symbol _`Erweiterungen`_ in der Aktivitätsleiste und beginne, den Namen der Erweiterung in das Textfeld mit der Bezeichnung _'Erweiterungen im Marketplace suchen'_ einzugeben.  
Du siehst eine Liste von Erweiterungen, die jeweils **den Namen der Erweiterung, den Namen des Herausgebers, eine kurze Beschreibung, die Anzahl der Downloads** und **eine Sternebewertung** enthalten.

![Erweiterungsdetails](../../../../8-code-editor/images/extension-details.png)

Du kannst auch alle zuvor installierten Erweiterungen anzeigen, indem du den Ordner _`Installiert`_ erweiterst, beliebte Erweiterungen im Ordner _`Beliebt`_ und empfohlene Erweiterungen für dich entweder von Nutzern im selben Arbeitsbereich oder basierend auf deinen zuletzt geöffneten Dateien im Ordner _`Empfohlen`_.

![Erweiterungen anzeigen](../../../../8-code-editor/images/extensions.png)

### 1. Erweiterungen installieren

Um eine Erweiterung zu installieren, gib den Namen der Erweiterung in das Suchfeld ein und klicke darauf, um zusätzliche Informationen über die Erweiterung im Codebereich anzuzeigen, sobald sie in der erweiterten Aktivitätsleiste erscheint.

Du kannst entweder auf die _blaue Installieren-Schaltfläche_ in der erweiterten Aktivitätsleiste klicken, um die Erweiterung zu installieren, oder die Installieren-Schaltfläche verwenden, die im Codebereich erscheint, sobald du die Erweiterung auswählst, um zusätzliche Informationen zu laden.

![Erweiterungen installieren](../../../../8-code-editor/images/install-extension.gif)

### 2. Erweiterungen anpassen

Nach der Installation der Erweiterung musst du möglicherweise deren Verhalten ändern und sie basierend auf deinen Vorlieben anpassen. Um dies zu tun, wähle das Symbol Erweiterungen, und diesmal erscheint deine Erweiterung im Ordner _Installiert_. Klicke auf das _**Zahnrad-Symbol**_ und navigiere zu _Erweiterungseinstellungen_.

![Erweiterungseinstellungen anpassen](../../../../8-code-editor/images/extension-settings.png)

### 3. Erweiterungen verwalten

Nach der Installation und Nutzung deiner Erweiterung bietet vscode.dev Optionen, um deine Erweiterung basierend auf verschiedenen Anforderungen zu verwalten. Zum Beispiel kannst du:

- **Deaktivieren:** _(Du kannst eine Erweiterung vorübergehend deaktivieren, wenn du sie nicht mehr benötigst, sie aber nicht vollständig deinstallieren möchtest.)_

    Wähle die installierte Erweiterung in der erweiterten Aktivitätsleiste aus > klicke auf das Zahnrad-Symbol > wähle 'Deaktivieren' oder 'Deaktivieren (Arbeitsbereich)' **ODER** öffne die Erweiterung im Codebereich und klicke auf die blaue Deaktivieren-Schaltfläche.

- **Deinstallieren:** Wähle die installierte Erweiterung in der erweiterten Aktivitätsleiste aus > klicke auf das Zahnrad-Symbol > wähle 'Deinstallieren' **ODER** öffne die Erweiterung im Codebereich und klicke auf die blaue Deinstallieren-Schaltfläche.

---

## Aufgabe

[Erstelle eine Lebenslauf-Website mit vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

## Überprüfung & Selbststudium

Lies mehr über [VSCode.dev](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) und einige seiner weiteren Funktionen.

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, weisen wir darauf hin, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Nutzung dieser Übersetzung entstehen.