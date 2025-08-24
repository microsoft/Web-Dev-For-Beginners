<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05666cecb8983a72cf0ce1d18932b5b7",
  "translation_date": "2025-08-24T12:48:32+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "de"
}
-->
# Einführung in GitHub

Diese Lektion behandelt die Grundlagen von GitHub, einer Plattform zum Hosten und Verwalten von Änderungen an deinem Code.

![Einführung in GitHub](../../../../sketchnotes/webdev101-github.png)
> Sketchnote von [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz vor der Vorlesung
[Quiz vor der Vorlesung](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/3)

## Einführung

In dieser Lektion behandeln wir:

- das Nachverfolgen der Arbeit, die du auf deinem Rechner erledigst
- das Arbeiten an Projekten mit anderen
- wie man zu Open-Source-Software beiträgt

### Voraussetzungen

Bevor du beginnst, überprüfe, ob Git installiert ist. Gib im Terminal ein:  
`git --version`

Falls Git nicht installiert ist, [lade Git herunter](https://git-scm.com/downloads). Richte anschließend dein lokales Git-Profil im Terminal ein:
* `git config --global user.name "dein-name"`
* `git config --global user.email "deine-email"`

Um zu überprüfen, ob Git bereits konfiguriert ist, kannst du eingeben:  
`git config --list`

Du benötigst außerdem ein GitHub-Konto, einen Code-Editor (wie Visual Studio Code) und musst dein Terminal (oder die Eingabeaufforderung) öffnen.

Gehe zu [github.com](https://github.com/) und erstelle ein Konto, falls du noch keines hast, oder melde dich an und vervollständige dein Profil.

✅ GitHub ist nicht das einzige Code-Repository der Welt; es gibt auch andere, aber GitHub ist das bekannteste.

### Vorbereitung

Du benötigst sowohl einen Ordner mit einem Code-Projekt auf deinem lokalen Rechner (Laptop oder PC) als auch ein öffentliches Repository auf GitHub, das als Beispiel dafür dient, wie man zu den Projekten anderer beiträgt.

---

## Code-Verwaltung

Angenommen, du hast lokal einen Ordner mit einem Code-Projekt und möchtest deinen Fortschritt mit Git, dem Versionskontrollsystem, nachverfolgen. Manche Leute vergleichen die Nutzung von Git mit dem Schreiben eines Liebesbriefs an dein zukünftiges Ich. Wenn du deine Commit-Nachrichten Tage, Wochen oder Monate später liest, kannst du dich daran erinnern, warum du eine Entscheidung getroffen hast, oder eine Änderung "rückgängig machen" – vorausgesetzt, du schreibst gute "Commit-Nachrichten".

### Aufgabe: Ein Repository erstellen und Code committen  

> Schau dir das Video an  
> 
> [![Git- und GitHub-Grundlagen-Video](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

1. **Repository auf GitHub erstellen**. Auf GitHub.com findest du im Reiter "Repositories" oder in der Navigationsleiste oben rechts den Button **new repo**.

   1. Gib deinem Repository (Ordner) einen Namen.
   1. Wähle **create repository**.

1. **Zu deinem Arbeitsordner navigieren**. Wechsle im Terminal zu dem Ordner (auch Verzeichnis genannt), den du nachverfolgen möchtest. Gib ein:

   ```bash
   cd [name of your folder]
   ```

1. **Ein Git-Repository initialisieren**. Gib in deinem Projekt ein:

   ```bash
   git init
   ```

1. **Status überprüfen**. Um den Status deines Repositories zu überprüfen, gib ein:

   ```bash
   git status
   ```

   Die Ausgabe könnte etwa so aussehen:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Normalerweise zeigt dir der Befehl `git status` Dinge wie Dateien, die bereit sind, im Repository _gespeichert_ zu werden, oder Änderungen, die du möglicherweise beibehalten möchtest.

1. **Alle Dateien zum Nachverfolgen hinzufügen**  
   Dies wird auch als Staging von Dateien oder Hinzufügen von Dateien zum Staging-Bereich bezeichnet.

   ```bash
   git add .
   ```

   Das Argument `git add` plus `.` bedeutet, dass alle deine Dateien und Änderungen nachverfolgt werden.

1. **Ausgewählte Dateien zum Nachverfolgen hinzufügen**

   ```bash
   git add [file or folder name]
   ```

   Dies hilft uns, nur ausgewählte Dateien zum Staging-Bereich hinzuzufügen, wenn wir nicht alle Dateien auf einmal committen möchten.

1. **Alle Dateien aus dem Staging-Bereich entfernen**

   ```bash
   git reset
   ```

   Dieser Befehl hilft uns, alle Dateien auf einmal aus dem Staging-Bereich zu entfernen.

1. **Eine bestimmte Datei aus dem Staging-Bereich entfernen**

   ```bash
   git reset [file or folder name]
   ```

   Dieser Befehl hilft uns, nur eine bestimmte Datei aus dem Staging-Bereich zu entfernen, die wir nicht in den nächsten Commit aufnehmen möchten.

1. **Deine Arbeit speichern**. An diesem Punkt hast du die Dateien in einen sogenannten _Staging-Bereich_ hinzugefügt. Ein Ort, an dem Git deine Dateien nachverfolgt. Um die Änderung dauerhaft zu machen, musst du die Dateien _committen_. Dazu erstellst du einen _Commit_ mit dem Befehl `git commit`. Ein _Commit_ stellt einen Speicherpunkt in der Historie deines Repositories dar. Gib Folgendes ein, um einen _Commit_ zu erstellen:

   ```bash
   git commit -m "first commit"
   ```

   Dies commitet alle deine Dateien und fügt die Nachricht "first commit" hinzu. Für zukünftige Commit-Nachrichten solltest du eine detailliertere Beschreibung verwenden, um zu vermitteln, welche Art von Änderung du vorgenommen hast.

1. **Dein lokales Git-Repository mit GitHub verbinden**. Ein Git-Repository ist auf deinem Rechner nützlich, aber irgendwann möchtest du ein Backup deiner Dateien an einem anderen Ort haben und auch andere Leute einladen, mit dir an deinem Repository zu arbeiten. Ein großartiger Ort dafür ist GitHub. Wir haben bereits ein Repository auf GitHub erstellt, daher müssen wir nur noch unser lokales Git-Repository mit GitHub verbinden. Der Befehl `git remote add` erledigt genau das. Gib den folgenden Befehl ein:

   > Hinweis: Bevor du den Befehl eingibst, gehe zu deiner GitHub-Repository-Seite, um die Repository-URL zu finden. Du wirst sie im folgenden Befehl verwenden. Ersetze ```https://github.com/username/repository_name.git``` durch deine GitHub-URL.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Dies erstellt eine _Remote-Verbindung_, die "origin" genannt wird und auf das GitHub-Repository zeigt, das du zuvor erstellt hast.

1. **Lokale Dateien zu GitHub senden**. Bisher hast du eine _Verbindung_ zwischen dem lokalen Repository und dem GitHub-Repository erstellt. Lass uns diese Dateien mit dem folgenden Befehl `git push` zu GitHub senden:

   > Hinweis: Dein Branch-Name könnte standardmäßig anders sein als ```main```.

   ```bash
   git push -u origin main
   ```

   Dies sendet deine Commits in deinem "main"-Branch zu GitHub.

2. **Weitere Änderungen hinzufügen**. Wenn du weiterhin Änderungen vornehmen und sie zu GitHub pushen möchtest, musst du nur die folgenden drei Befehle verwenden:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > Tipp: Du möchtest vielleicht auch eine `.gitignore`-Datei verwenden, um zu verhindern, dass Dateien, die du nicht nachverfolgen möchtest, auf GitHub erscheinen – wie z. B. eine Notizdatei, die du im selben Ordner speicherst, die aber nichts in einem öffentlichen Repository zu suchen hat. Vorlagen für `.gitignore`-Dateien findest du unter [.gitignore templates](https://github.com/github/gitignore).

#### Commit-Nachrichten

Eine großartige Git-Commit-Betreffzeile vervollständigt den folgenden Satz:  
Wenn angewendet, wird dieser Commit <deine Betreffzeile hier>.

Für den Betreff verwende die Befehlsform im Präsens: "ändern" statt "geändert" oder "ändert".  
Wie im Betreff solltest du auch im optionalen Textkörper die Befehlsform im Präsens verwenden. Der Textkörper sollte die Motivation für die Änderung enthalten und diese mit dem vorherigen Verhalten kontrastieren. Du erklärst das `Warum`, nicht das `Wie`.

✅ Nimm dir ein paar Minuten Zeit, um auf GitHub zu stöbern. Kannst du eine wirklich großartige Commit-Nachricht finden? Kannst du eine sehr minimale finden? Welche Informationen denkst du, sind am wichtigsten und nützlichsten, um sie in einer Commit-Nachricht zu vermitteln?

### Aufgabe: Zusammenarbeit

Der Hauptgrund, Dinge auf GitHub zu stellen, ist die Möglichkeit, mit anderen Entwicklern zusammenzuarbeiten.

## Zusammenarbeit an Projekten mit anderen

> Schau dir das Video an  
>
> [![Git- und GitHub-Grundlagen-Video](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

Navigiere in deinem Repository zu `Insights > Community`, um zu sehen, wie dein Projekt im Vergleich zu den empfohlenen Community-Standards abschneidet.

   Hier sind einige Dinge, die dein GitHub-Repository verbessern können:
   - **Beschreibung**. Hast du eine Beschreibung für dein Projekt hinzugefügt?
   - **README**. Hast du ein README hinzugefügt? GitHub bietet Anleitungen zum Schreiben eines [README](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon).
   - **Beitragsrichtlinien**. Hat dein Projekt [Beitragsrichtlinien](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon)?
   - **Verhaltenskodex**. Einen [Verhaltenskodex](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/)?
   - **Lizenz**. Vielleicht am wichtigsten: eine [Lizenz](https://docs.github.com/articles/adding-a-license-to-a-repository/)?

All diese Ressourcen helfen dabei, neue Teammitglieder einzuarbeiten. Und genau das sind in der Regel die Dinge, die neue Mitwirkende sich ansehen, bevor sie überhaupt deinen Code betrachten, um herauszufinden, ob dein Projekt der richtige Ort für sie ist, um ihre Zeit zu investieren.

✅ README-Dateien werden oft von beschäftigten Maintainer:innen vernachlässigt, obwohl sie Zeit in Anspruch nehmen, um sie vorzubereiten. Kannst du ein Beispiel für ein besonders aussagekräftiges README finden? Hinweis: Es gibt einige [Tools, um gute READMEs zu erstellen](https://www.makeareadme.com/), die du ausprobieren könntest.

### Aufgabe: Code zusammenführen

Beitragsdokumente helfen Menschen, zum Projekt beizutragen. Sie erklären, welche Arten von Beiträgen du suchst und wie der Prozess funktioniert. Mitwirkende müssen eine Reihe von Schritten durchlaufen, um zu deinem Repository auf GitHub beitragen zu können:

1. **Dein Repository forken**. Du wirst wahrscheinlich möchten, dass Leute dein Projekt _forken_. Forken bedeutet, eine Kopie deines Repositories in ihrem GitHub-Profil zu erstellen.
1. **Klonen**. Von dort aus klonen sie das Projekt auf ihren lokalen Rechner.
1. **Einen Branch erstellen**. Du wirst sie bitten, einen _Branch_ für ihre Arbeit zu erstellen.
1. **Änderungen auf einen Bereich konzentrieren**. Bitte Mitwirkende, ihre Beiträge auf eine Sache gleichzeitig zu konzentrieren – so ist die Wahrscheinlichkeit höher, dass du ihre Arbeit _zusammenführen_ kannst. Stell dir vor, sie schreiben einen Bugfix, fügen ein neues Feature hinzu und aktualisieren mehrere Tests – was, wenn du nur 2 von 3 oder 1 von 3 Änderungen implementieren möchtest oder kannst?

✅ Stell dir eine Situation vor, in der Branches besonders wichtig sind, um guten Code zu schreiben und zu veröffentlichen. Welche Anwendungsfälle fallen dir ein?

> Hinweis: Sei die Veränderung, die du in der Welt sehen möchtest, und erstelle auch für deine eigene Arbeit Branches. Alle Commits, die du machst, werden auf dem Branch gemacht, auf dem du dich gerade "befindest". Verwende `git status`, um zu sehen, auf welchem Branch du dich befindest.

Lass uns einen Workflow für Mitwirkende durchgehen. Angenommen, der Mitwirkende hat das Repository bereits _geforkt_ und _geklont_, sodass er ein Git-Repository hat, das auf seinem lokalen Rechner bereit ist:

1. **Einen Branch erstellen**. Verwende den Befehl `git branch`, um einen Branch zu erstellen, der die Änderungen enthält, die sie beitragen möchten:

   ```bash
   git branch [branch-name]
   ```

1. **Zum Arbeits-Branch wechseln**. Wechsle zum angegebenen Branch und aktualisiere das Arbeitsverzeichnis mit `git switch`:

   ```bash
   git switch [branch-name]
   ```

1. **Arbeiten durchführen**. An diesem Punkt möchtest du deine Änderungen hinzufügen. Vergiss nicht, Git darüber zu informieren, mit den folgenden Befehlen:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Stelle sicher, dass du deinem Commit einen guten Namen gibst – für dich selbst und für den Maintainer des Repositories, dem du hilfst.

1. **Deine Arbeit mit dem `main`-Branch kombinieren**. Irgendwann bist du mit deiner Arbeit fertig und möchtest sie mit der des `main`-Branches kombinieren. Der `main`-Branch könnte sich inzwischen geändert haben, also stelle sicher, dass du ihn zuerst mit den neuesten Änderungen aktualisierst, indem du die folgenden Befehle ausführst:

   ```bash
   git switch main
   git pull
   ```

   An diesem Punkt möchtest du sicherstellen, dass alle _Konflikte_, Situationen, in denen Git die Änderungen nicht einfach _kombinieren_ kann, in deinem Arbeits-Branch auftreten. Führe daher die folgenden Befehle aus:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Dies bringt alle Änderungen von `main` in deinen Branch, und hoffentlich kannst du einfach weitermachen. Falls nicht, zeigt dir VS Code, wo Git _verwirrt_ ist, und du änderst die betroffenen Dateien, um anzugeben, welcher Inhalt am genauesten ist.

1. **Deine Arbeit zu GitHub senden**. Deine Arbeit zu GitHub zu senden bedeutet zwei Dinge: Deinen Branch in dein Repository pushen und dann einen PR (Pull Request) öffnen.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   Der obige Befehl erstellt den Branch in deinem geforkten Repository.

1. **Einen PR öffnen**. Als Nächstes möchtest du einen PR öffnen. Das machst du, indem du zu deinem geforkten Repository auf GitHub navigierst. Du wirst auf GitHub eine Anzeige sehen, die fragt, ob du einen neuen PR erstellen möchtest. Klicke darauf, und du wirst zu einer Oberfläche weitergeleitet, in der du den Commit-Nachrichtentitel ändern und eine passendere Beschreibung hinzufügen kannst. Jetzt sieht der Maintainer des Repositories, das du geforkt hast, diesen PR, und _Daumen drücken_, sie werden ihn schätzen und _zusammenführen_. Du bist jetzt ein Mitwirkender, yay :)

1. **Aufräumen**. Es gilt als gute Praxis, nach einem erfolgreich zusammengeführten PR aufzuräumen. Du möchtest sowohl deinen lokalen Branch als auch den Branch, den du zu GitHub gepusht hast, bereinigen. Lösche ihn zuerst lokal mit dem folgenden Befehl:

   ```bash
   git branch -d [branch-name]
   ```
Stellen Sie sicher, dass Sie als Nächstes zur GitHub-Seite des geforkten Repos gehen und den Remote-Branch entfernen, den Sie gerade dorthin gepusht haben.

`Pull request` scheint ein seltsamer Begriff zu sein, da Sie eigentlich Ihre Änderungen in das Projekt pushen möchten. Aber der Maintainer (Projektbesitzer) oder das Kernteam muss Ihre Änderungen prüfen, bevor sie mit dem "main"-Branch des Projekts zusammengeführt werden. Sie bitten also im Grunde um eine Entscheidungsfindung des Maintainers.

Ein Pull Request ist der Ort, an dem die Unterschiede, die auf einem Branch eingeführt wurden, verglichen und diskutiert werden können – mit Reviews, Kommentaren, integrierten Tests und mehr. Ein guter Pull Request folgt in etwa denselben Regeln wie eine Commit-Nachricht. Sie können einen Verweis auf ein Issue im Issue-Tracker hinzufügen, wenn Ihre Arbeit beispielsweise ein Problem löst. Dies geschieht mit einem `#`, gefolgt von der Nummer des Issues. Zum Beispiel `#97`.

🤞Daumen drücken, dass alle Prüfungen bestanden werden und die Projektverantwortlichen Ihre Änderungen in das Projekt übernehmen🤞

Aktualisieren Sie Ihren aktuellen lokalen Arbeits-Branch mit allen neuen Commits vom entsprechenden Remote-Branch auf GitHub:

`git pull`

## Wie man zu Open Source beiträgt

Zuerst suchen wir ein Repository (oder **Repo**) auf GitHub, das Sie interessiert und zu dem Sie eine Änderung beitragen möchten. Sie sollten dessen Inhalte auf Ihren Rechner kopieren.

✅ Eine gute Möglichkeit, 'anfängerfreundliche' Repos zu finden, ist die [Suche nach dem Tag 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Ein Repo lokal kopieren](../../../../1-getting-started-lessons/2-github-basics/images/clone_repo.png)

Es gibt mehrere Möglichkeiten, Code zu kopieren. Eine Möglichkeit ist, die Inhalte des Repositories zu "klonen", entweder über HTTPS, SSH oder die GitHub CLI (Command Line Interface).

Öffnen Sie Ihr Terminal und klonen Sie das Repository wie folgt:
`git clone https://github.com/ProjectURL`

Um am Projekt zu arbeiten, wechseln Sie in den richtigen Ordner:
`cd ProjectURL`

Sie können das gesamte Projekt auch mit [Codespaces](https://github.com/features/codespaces), dem eingebetteten Code-Editor / Cloud-Entwicklungsumgebung von GitHub, oder [GitHub Desktop](https://desktop.github.com/) öffnen.

Alternativ können Sie den Code in einem gezippten Ordner herunterladen.

### Ein paar weitere interessante Dinge über GitHub

Sie können jedes öffentliche Repository auf GitHub mit einem Stern markieren, beobachten oder "forken". Ihre mit einem Stern markierten Repositories finden Sie im Dropdown-Menü oben rechts. Es ist wie ein Lesezeichen, aber für Code.

Projekte haben einen Issue-Tracker, meistens auf GitHub im Tab "Issues", es sei denn, es wird anders angegeben. Dort diskutieren Menschen über Probleme, die mit dem Projekt zusammenhängen. Im Tab "Pull Requests" werden Änderungen, die in Bearbeitung sind, diskutiert und überprüft.

Projekte können auch Diskussionen in Foren, Mailinglisten oder Chat-Kanälen wie Slack, Discord oder IRC haben.

✅ Schauen Sie sich Ihr neues GitHub-Repo an und probieren Sie ein paar Dinge aus, wie das Bearbeiten von Einstellungen, das Hinzufügen von Informationen zu Ihrem Repo und das Erstellen eines Projekts (wie ein Kanban-Board). Es gibt viel zu entdecken!

---

## 🚀 Herausforderung

Arbeiten Sie mit einem Freund zusammen an den Codes des jeweils anderen. Erstellen Sie gemeinsam ein Projekt, forken Sie Code, erstellen Sie Branches und führen Sie Änderungen zusammen.

## Quiz nach der Vorlesung
[Quiz nach der Vorlesung](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/4)

## Überprüfung & Selbststudium

Lesen Sie mehr über [Beiträge zu Open Source Software](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).

[Git-Spickzettel](https://training.github.com/downloads/github-git-cheat-sheet/).

Üben, üben, üben. GitHub bietet großartige Lernpfade über [skills.github.com](https://skills.github.com):

- [Erste Woche auf GitHub](https://skills.github.com/#first-week-on-github)

Dort finden Sie auch fortgeschrittene Kurse.

## Aufgabe

Absolvieren Sie [den Kurs "Erste Woche auf GitHub"](https://skills.github.com/#first-week-on-github).

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, weisen wir darauf hin, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die aus der Nutzung dieser Übersetzung entstehen.