<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T15:54:28+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "no"
}
-->
## Grunnleggende om GIT for nybegynnere innen webutvikling👶

## Hva er `Git`?
      1. Git er et distribuert versjonskontrollsystem.
      2. Hele kodebasen og historikken er tilgjengelig på hver utviklers datamaskin, 
         noe som gjør det enkelt å opprette og slå sammen grener.
      3. Det brukes som et versjonskontrollsystem (VCS) for å spore endringer i datamaskinfiler.
      
* Distribuert versjonskontroll
* Koordinerer arbeid mellom flere utviklere  
* Hvem gjorde hvilke endringer og når
* Gå tilbake til tidligere versjoner når som helst
* Lokale og eksterne repositorier

## KONSEPTER I GIT
* Holder oversikt over kodehistorikk
* Tar "snapshots" av filene dine
* Du bestemmer når du vil ta et snapshot ved å lage en "commit"
* Du kan besøke ethvert snapshot når som helst
* Du kan klargjøre filer før du gjør en commit

### Forskjellen mellom Git og GitHub

| Git | GitHub |
| ------- | ----------- |
| Git er en programvare | GitHub er en skytjeneste |
| Git er installert lokalt på systemet | GitHub er tilgjengelig på nettet |
| Det er et kommandolinjeverktøy | Det er en grafisk brukergrensesnitt |
| Git vedlikeholdes av Linux | GitHub vedlikeholdes av Microsoft |
| Fokusert på versjonskontroll og deling av kode | Fokusert på sentralisert hosting av kildekode |
| Git er åpen kildekode | GitHub har både gratis- og betalte nivåer |
| Git ble lansert i 2005 | GitHub ble lansert i 2008 |

## GIT-installasjon
* Linux (Debian)
    `$sudo apt-get install git`
* Linux (Fedora)
    `$sudo yum install git`
* [Last ned](http://git-scm.com/download/mac) for Mac
* [Last ned](http://git-scm.com/download/win) for Windows

### Installasjonsprosess:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. Deretter fortsett med Neste > Neste > Neste > <b>Installer</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Etter installasjon må vi konfigurere Git ved hjelp av Git Bash
  1. `git config --global user.name 'YourName'`
  2. `git config --global user.email 'YourEmail'`
___

## Git-kommandoer
___

### Hente og opprette prosjekter

| Kommando | Beskrivelse |
| ------- | ----------- |
| `git init` | Initialiser et lokalt Git-repositorium |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Opprett en lokal kopi av et eksternt repositorium |

### Grunnleggende snapshotting

| Kommando | Beskrivelse |
| ------- | ----------- |
| `git status` | Sjekk status |
| `git add [file-name.txt]` | Legg til en fil i staging-området |
| `git add -A` | Legg til alle nye og endrede filer i staging-området |
| `git commit -m "[commit message]"` | Utfør endringer |
| `git rm -r [file-name.txt]` | Fjern en fil (eller mappe) |
| `git push` | Skyv til eksternt repositorium |
| `git pull` | Hent siste endringer fra eksternt repositorium |

### Grening og sammenslåing

| Kommando | Beskrivelse |
| ------- | ----------- |
| `git branch` | List opp grener (asterisken viser den aktive grenen) |
| `git branch -a` | List opp alle grener (lokale og eksterne) |
| `git branch [branch name]` | Opprett en ny gren |
| `git branch -D [branch name]` | Slett en gren |
| `git push origin --delete [branch name]` | Slett en ekstern gren |
| `git checkout -b [branch name]` | Opprett en ny gren og bytt til den |
| `git checkout -b [branch name] origin/[branch name]` | Klon en ekstern gren og bytt til den |
| `git branch -m [old branch name] [new branch name]` | Gi nytt navn til en lokal gren |
| `git checkout [branch name]` | Bytt til en gren |
| `git checkout -` | Bytt til den sist besøkte grenen |
| `git checkout -- [file-name.txt]` | Forkast endringer i en fil |
| `git merge [branch name]` | Slå sammen en gren med den aktive grenen |
| `git merge [source branch] [target branch]` | Slå sammen en gren med en målgren |
| `git stash` | Lagre endringer midlertidig i et skittent arbeidsområde |
| `git stash clear` | Fjern alle midlertidige lagrede endringer |

### Deling og oppdatering av prosjekter

| Kommando | Beskrivelse |
| ------- | ----------- |
| `git push origin [branch name]` | Skyv en gren til ditt eksterne repositorium |
| `git push -u origin [branch name]` | Skyv endringer til eksternt repositorium (og husk grenen) |
| `git push` | Skyv endringer til eksternt repositorium (husket gren) |
| `git push origin --delete [branch name]` | Slett en ekstern gren |
| `git pull` | Oppdater lokalt repositorium til nyeste commit |
| `git pull origin [branch name]` | Hent endringer fra eksternt repositorium |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Legg til et eksternt repositorium |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Sett en repositoriums opprinnelsesgren til SSH |

### Inspeksjon og sammenligning

| Kommando | Beskrivelse |
| ------- | ----------- |
| `git log` | Vis endringer |
| `git log --summary` | Vis endringer (detaljert) |
| `git log --oneline` | Vis endringer (kortfattet) |
| `git diff [source branch] [target branch]` | Forhåndsvis endringer før sammenslåing |

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi tilstreber nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.