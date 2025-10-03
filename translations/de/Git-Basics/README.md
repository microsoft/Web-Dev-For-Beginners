<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T15:45:03+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "de"
}
-->
## Grundlagen von GIT für Webentwicklungs-Anfänger👶

## Was ist `Git`?
1. Git ist ein verteiltes Versionskontrollsystem.
2. Der gesamte Code und die Historie sind auf jedem Entwicklercomputer verfügbar, 
   was einfaches Branching und Merging ermöglicht.
3. Es wird als Versionskontrollsystem (VCS) verwendet, um Änderungen an Dateien zu verfolgen.

* Verteilte Versionskontrolle
* Koordiniert die Arbeit zwischen mehreren Entwicklern  
* Wer hat welche Änderungen wann vorgenommen
* Jederzeit zurücksetzen möglich
* Lokale & entfernte Repositories

## KONZEPTE VON GIT
* Verfolgt die Code-Historie
* Macht "Schnappschüsse" deiner Dateien
* Du entscheidest, wann ein Schnappschuss gemacht wird, indem du einen "Commit" erstellst
* Du kannst jeden Schnappschuss jederzeit besuchen
* Du kannst Dateien vor dem Commit vorbereiten (stagen)

### Unterschied zwischen Git & GitHub

| Git | GitHub |
| ------- | ----------- |
| Git ist eine Software | GitHub ist ein Cloud-Dienst |
| Git wird lokal auf dem System installiert | GitHub ist im Web gehostet |
| Es ist ein Kommandozeilen-Tool | Es ist eine grafische Benutzeroberfläche |
| Git wird von Linux gepflegt | GitHub wird von Microsoft gepflegt |
| Es konzentriert sich auf Versionskontrolle und Code-Sharing | Es konzentriert sich auf zentralisiertes Hosting von Quellcode |
| Git ist Open-Source-lizenziert | GitHub bietet eine kostenlose und eine kostenpflichtige Version |
| Git wurde 2005 veröffentlicht | GitHub wurde 2008 veröffentlicht |

## GIT Installation
* Linux (Debian)
    `$sudo apt-get install git`
* Linux (Fedora)
    `$sudo yum install git`
* [Download](http://git-scm.com/download/mac) für Mac
* [Download](http://git-scm.com/download/win) für Windows

### Installationsschritte:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. Und dann Weiter > Weiter > Weiter > <b>Installieren</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Nach der Installation müssen wir Git mit Git Bash konfigurieren
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## Git-Befehle
___

### Projekte abrufen & erstellen

| Befehl | Beschreibung |
| ------- | ----------- |
| `git init` | Initialisiert ein lokales Git-Repository |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Erstellt eine lokale Kopie eines entfernten Repositories |

### Grundlegende Snapshot-Erstellung

| Befehl | Beschreibung |
| ------- | ----------- |
| `git status` | Status überprüfen |
| `git add [file-name.txt]` | Fügt eine Datei zum Staging-Bereich hinzu |
| `git add -A` | Fügt alle neuen und geänderten Dateien zum Staging-Bereich hinzu |
| `git commit -m "[commit message]"` | Änderungen committen |
| `git rm -r [file-name.txt]` | Entfernt eine Datei (oder einen Ordner) |
| `git push` | Änderungen ins entfernte Repository hochladen |
| `git pull` | Neueste Änderungen aus dem entfernten Repository abrufen |

### Branching & Merging

| Befehl | Beschreibung |
| ------- | ----------- |
| `git branch` | Listet Branches auf (der Stern zeigt den aktuellen Branch an) |
| `git branch -a` | Listet alle Branches auf (lokal und entfernt) |
| `git branch [branch name]` | Erstellt einen neuen Branch |
| `git branch -D [branch name]` | Löscht einen Branch |
| `git push origin --delete [branch name]` | Löscht einen entfernten Branch |
| `git checkout -b [branch name]` | Erstellt einen neuen Branch und wechselt zu ihm |
| `git checkout -b [branch name] origin/[branch name]` | Klont einen entfernten Branch und wechselt zu ihm |
| `git branch -m [old branch name] [new branch name]` | Benennt einen lokalen Branch um |
| `git checkout [branch name]` | Wechselt zu einem Branch |
| `git checkout -` | Wechselt zum zuletzt ausgecheckten Branch |
| `git checkout -- [file-name.txt]` | Verwirft Änderungen an einer Datei |
| `git merge [branch name]` | Führt einen Branch mit dem aktiven Branch zusammen |
| `git merge [source branch] [target branch]` | Führt einen Branch mit einem Ziel-Branch zusammen |
| `git stash` | Speichert Änderungen in einem unordentlichen Arbeitsverzeichnis |
| `git stash clear` | Entfernt alle gespeicherten Einträge |

### Projekte teilen & aktualisieren

| Befehl | Beschreibung |
| ------- | ----------- |
| `git push origin [branch name]` | Lädt einen Branch ins entfernte Repository hoch |
| `git push -u origin [branch name]` | Lädt Änderungen ins entfernte Repository hoch (und merkt sich den Branch) |
| `git push` | Lädt Änderungen ins entfernte Repository hoch (gemerkter Branch) |
| `git push origin --delete [branch name]` | Löscht einen entfernten Branch |
| `git pull` | Aktualisiert das lokale Repository auf den neuesten Commit |
| `git pull origin [branch name]` | Holt Änderungen aus dem entfernten Repository |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Fügt ein entferntes Repository hinzu |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Setzt die Origin-URL eines Repositories auf SSH |

### Inspektion & Vergleich

| Befehl | Beschreibung |
| ------- | ----------- |
| `git log` | Änderungen anzeigen |
| `git log --summary` | Änderungen anzeigen (detailliert) |
| `git log --oneline` | Änderungen anzeigen (kurz) |
| `git diff [source branch] [target branch]` | Änderungen vor dem Merging anzeigen |

---

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.