<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T15:55:11+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "nl"
}
-->
## Basisprincipes van GIT voor web-dev beginners👶

## Wat is `Git`?
1. Git is een gedistribueerd versiebeheersysteem.
2. De volledige codebase en geschiedenis zijn beschikbaar op de computer van elke ontwikkelaar, wat zorgt voor eenvoudig branchbeheer en samenvoeging.
3. Het wordt gebruikt als Versiebeheersysteem (VCS) om wijzigingen in computerbestanden bij te houden.

* Gedistribueerd versiebeheer
* Coördineert werk tussen meerdere ontwikkelaars  
* Wie heeft welke wijzigingen aangebracht en wanneer
* Op elk moment terugkeren naar een eerdere versie
* Lokale & externe repositories

## CONCEPTEN VAN GIT
* Houdt de geschiedenis van de code bij
* Maakt "snapshots" van je bestanden
* Jij bepaalt wanneer je een snapshot maakt door een "commit" te doen
* Je kunt op elk moment een snapshot bekijken
* Je kunt bestanden voorbereiden voordat je ze commit

### Verschil tussen Git & GitHub

| Git | GitHub |
| ------- | ----------- |
| Git is software | GitHub is een clouddienst |
| Git wordt lokaal op het systeem geïnstalleerd | GitHub is gehost op het web |
| Het is een command-line tool | Het is een grafische gebruikersinterface |
| Git wordt onderhouden door Linux | GitHub wordt onderhouden door Microsoft |
| Het richt zich op versiebeheer en het delen van code | Het richt zich op gecentraliseerde hosting van broncode |
| Git is open-source gelicenseerd | GitHub heeft een gratis versie en een betaalde versie |
| Git werd uitgebracht in 2005 | GitHub werd uitgebracht in 2008 |

## GIT Installatie
* Linux (Debian)
    `$sudo apt-get install git`
* Linux (Fedora)
    `$sudo yum install git`
* [Download](http://git-scm.com/download/mac) voor Mac
* [Download](http://git-scm.com/download/win) voor Windows

### Installatieproces stappen:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. En vervolgens Doorgaan met Volgende > Volgende > Volgende > <b>Installeren</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Na installatie moeten we Git configureren met behulp van Git Bash
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## Git Commando's
___

### Projecten ophalen & aanmaken

| Commando | Beschrijving |
| ------- | ----------- |
| `git init` | Initialiseer een lokale Git-repository |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Maak een lokale kopie van een externe repository |

### Basis Snapshotting

| Commando | Beschrijving |
| ------- | ----------- |
| `git status` | Controleer de status |
| `git add [file-name.txt]` | Voeg een bestand toe aan de staging area |
| `git add -A` | Voeg alle nieuwe en gewijzigde bestanden toe aan de staging area |
| `git commit -m "[commit message]"` | Commit wijzigingen |
| `git rm -r [file-name.txt]` | Verwijder een bestand (of map) |
| `git push` | Push naar externe repository |
| `git pull` | Haal de nieuwste wijzigingen op uit de externe repository |

### Branching & Merging

| Commando | Beschrijving |
| ------- | ----------- |
| `git branch` | Lijst branches op (de asterisk geeft de huidige branch aan) |
| `git branch -a` | Lijst alle branches op (lokaal en extern) |
| `git branch [branch name]` | Maak een nieuwe branch |
| `git branch -D [branch name]` | Verwijder een branch |
| `git push origin --delete [branch name]` | Verwijder een externe branch |
| `git checkout -b [branch name]` | Maak een nieuwe branch en schakel ernaar over |
| `git checkout -b [branch name] origin/[branch name]` | Clone een externe branch en schakel ernaar over |
| `git branch -m [old branch name] [new branch name]` | Hernoem een lokale branch |
| `git checkout [branch name]` | Schakel over naar een branch |
| `git checkout -` | Schakel over naar de laatst bekeken branch |
| `git checkout -- [file-name.txt]` | Negeer wijzigingen in een bestand |
| `git merge [branch name]` | Voeg een branch samen met de actieve branch |
| `git merge [source branch] [target branch]` | Voeg een branch samen met een doelbranch |
| `git stash` | Sla wijzigingen op in een rommelige werkdirectory |
| `git stash clear` | Verwijder alle opgeslagen items |

### Projecten delen & bijwerken

| Commando | Beschrijving |
| ------- | ----------- |
| `git push origin [branch name]` | Push een branch naar je externe repository |
| `git push -u origin [branch name]` | Push wijzigingen naar externe repository (en onthoud de branch) |
| `git push` | Push wijzigingen naar externe repository (onthouden branch) |
| `git push origin --delete [branch name]` | Verwijder een externe branch |
| `git pull` | Werk de lokale repository bij naar de nieuwste commit |
| `git pull origin [branch name]` | Haal wijzigingen op uit de externe repository |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Voeg een externe repository toe |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Stel de origin branch van een repository in op SSH |

### Inspectie & Vergelijking

| Commando | Beschrijving |
| ------- | ----------- |
| `git log` | Bekijk wijzigingen |
| `git log --summary` | Bekijk wijzigingen (gedetailleerd) |
| `git log --oneline` | Bekijk wijzigingen (kort) |
| `git diff [source branch] [target branch]` | Bekijk wijzigingen voorafgaand aan samenvoeging |

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.