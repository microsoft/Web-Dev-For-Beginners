<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T15:54:09+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "da"
}
-->
## Grundlæggende om GIT for web-udviklingsbegyndere👶

## Hvad er `Git`?
1. Git er et distribueret versionskontrolsystem.
2. Hele kodebasen og historikken er tilgængelig på hver udviklers computer, hvilket gør det nemt at oprette og fusionere grene.
3. Det bruges som Versionskontrolsystem (VCS) til at spore ændringer i computerfiler.

* Distribueret versionskontrol
* Koordinerer arbejde mellem flere udviklere  
* Hvem lavede hvilke ændringer og hvornår
* Mulighed for at gå tilbage til tidligere versioner
* Lokale og fjernlagre

## KONCEPTER I GIT
* Holder styr på kodehistorik
* Tager "snapshots" af dine filer
* Du bestemmer, hvornår du vil tage et snapshot ved at lave en "commit"
* Du kan besøge ethvert snapshot når som helst
* Du kan forberede filer før du committer

### Forskel mellem Git & GitHub

| Git | GitHub |
| ------- | ----------- |
| Git er en software | GitHub er en cloud-tjeneste |
| Git er installeret lokalt på systemet | GitHub er hostet på nettet |
| Det er et kommandolinjeværktøj | Det er en grafisk brugergrænseflade |
| Git vedligeholdes af Linux | GitHub vedligeholdes af Microsoft |
| Fokus på versionskontrol og deling af kode | Fokus på centraliseret hosting af kildekode |
| Git er open-source licenseret | GitHub har både en gratis og en betalt version |
| Git blev udgivet i 2005 | GitHub blev udgivet i 2008 |

## GIT Installation
* Linux (Debian)
    `$sudo apt-get install git`
* Linux (Fedora)
    `$sudo yum install git`
* [Download](http://git-scm.com/download/mac) til Mac
* [Download](http://git-scm.com/download/win) til Windows

### Installationsproces:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. Og derefter Fortsæt Næste > Næste > Næste > <b>Installér</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Efter installation skal vi konfigurere Git ved hjælp af Git Bash
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## Git Kommandoer
___

### Hente & Oprette Projekter

| Kommando | Beskrivelse |
| ------- | ----------- |
| `git init` | Initialiser et lokalt Git-lager |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Opret en lokal kopi af et fjernlager |

### Grundlæggende Snapshotting

| Kommando | Beskrivelse |
| ------- | ----------- |
| `git status` | Tjek status |
| `git add [file-name.txt]` | Tilføj en fil til staging-området |
| `git add -A` | Tilføj alle nye og ændrede filer til staging-området |
| `git commit -m "[commit message]"` | Commit ændringer |
| `git rm -r [file-name.txt]` | Fjern en fil (eller mappe) |
| `git push` | Push til fjernlager |
| `git pull` | Hent de nyeste ændringer fra fjernlager |

### Branching & Fletning

| Kommando | Beskrivelse |
| ------- | ----------- |
| `git branch` | Vis grene (stjernen angiver den aktuelle gren) |
| `git branch -a` | Vis alle grene (lokale og fjern) |
| `git branch [branch name]` | Opret en ny gren |
| `git branch -D [branch name]` | Slet en gren |
| `git push origin --delete [branch name]` | Slet en fjerngren |
| `git checkout -b [branch name]` | Opret en ny gren og skift til den |
| `git checkout -b [branch name] origin/[branch name]` | Klon en fjerngren og skift til den |
| `git branch -m [old branch name] [new branch name]` | Omdøb en lokal gren |
| `git checkout [branch name]` | Skift til en gren |
| `git checkout -` | Skift til den sidst valgte gren |
| `git checkout -- [file-name.txt]` | Forkast ændringer til en fil |
| `git merge [branch name]` | Flet en gren ind i den aktive gren |
| `git merge [source branch] [target branch]` | Flet en gren ind i en målgren |
| `git stash` | Gem ændringer i et rodet arbejdsområde |
| `git stash clear` | Fjern alle gemte ændringer |

### Deling & Opdatering af Projekter

| Kommando | Beskrivelse |
| ------- | ----------- |
| `git push origin [branch name]` | Push en gren til dit fjernlager |
| `git push -u origin [branch name]` | Push ændringer til fjernlager (og husk grenen) |
| `git push` | Push ændringer til fjernlager (husket gren) |
| `git push origin --delete [branch name]` | Slet en fjerngren |
| `git pull` | Opdater lokalt lager til den nyeste commit |
| `git pull origin [branch name]` | Hent ændringer fra fjernlager |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Tilføj et fjernlager |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Indstil et lager's origin-gren til SSH |

### Inspektion & Sammenligning

| Kommando | Beskrivelse |
| ------- | ----------- |
| `git log` | Se ændringer |
| `git log --summary` | Se ændringer (detaljeret) |
| `git log --oneline` | Se ændringer (kort) |
| `git diff [source branch] [target branch]` | Forhåndsvis ændringer før fletning |

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal det bemærkes, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os ikke ansvar for misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.