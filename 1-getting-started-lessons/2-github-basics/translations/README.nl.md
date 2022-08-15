# Inleiding van GitHub

Deze les behandelt de basisprincipes van GitHub, een platform voor het hosten en beheren van wijzigingen in uw code.

![Intro to GitHub](/sketchnotes/webdev101-github.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz voorafgaand aan de lezing
[Quiz voorafgaand aan de lezing](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/3)

## Inleiding

In deze les behandelen we:

- het volgen van het werk dat u op uw machine doet
- samen met anderen aan projecten werken
- hoe u kunt bijdragen aan open source software

### Vereisten

Voordat u begint, moet u controleren of Git is geïnstalleerd. In het terminal typ:
`git --version`

Als Git niet is geïnstalleerd, [download Git](https://git-scm.com/downloads). Stel vervolgens uw lokale Git-profiel in de terminal in:
* `git config --global user.name "uw-naam"`
* `git config --global user.email "uw-email"`

Om te controleren of Git al is geconfigureerd, kunt u het volgende typen:
`git config --list`

U heeft ook een GitHub-account nodig, een code-editor (zoals Visual Studio Code) en u moet uw terminal openen (of: command prompt).

Navigeer naar [github.com](https://github.com/) en maak een account aan als u dat nog niet heeft gedaan, of log in en vul uw profiel in.

✅ GitHub is niet de enige coderepository ter wereld; er zijn anderen, maar GitHub is de bekendste

### Voorbereiding

U heeft zowel een map met een codeproject op uw lokale computer (laptop of pc) als een openbare repository op GitHub nodig, die als voorbeeld zal dienen voor hoe u kunt bijdragen aan de projecten van anderen.  

---

## Code beheer

Laten we zeggen dat u lokaal een map hebt met een of ander codeproject en u wilt beginnen met het volgen van uw voortgang met git - het versiebeheersysteem. Sommige mensen vergelijken het gebruik van git met het schrijven van een liefdesbrief aan uw toekomstige zelf. Als u uw commitberichten dagen of weken of maanden later leest, zult u u kunnen herinneren waarom u een beslissing heeft genomen, of een wijziging "terugdraaien" - dat wil zeggen, wanneer u goede "commitberichten" schrijft.

### Taak: maak een repository en leg code vast

1. **Maak een repository op GitHub**. Zoek op GitHub.com, in het tabblad repositories, of in de navigatiebalk rechtsboven, de knop **new repo**.

   1. Geef uw repository (map) een naam
   1. Selecteer **create repository**.

1. **Navigeer naar uw werkmap**. Schakel in uw terminal naar de map (ook bekend als de directory) die u wilt beginnen met volgen. Typ:

   ```bash
   cd [naam van uw map]
   ```

1. **Initialiseer een git-repository**. In uw project, typ:

   ```bash
   git init
   ```

1. **Controleer de status**. Om de status van uw repository te controleren, typ:

   ```bash
   git status
   ```

   de output kan er ongeveer zo uitzien:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Typisch vertelt een `git status` commando u dingen zoals welke bestanden klaar zijn om _opgeslagen_ te worden naar de repo of bevat veranderingen die u misschien wilt behouden.

1. **Voeg alle bestanden toe voor tracking**
   Dit wordt ook wel staging-bestanden/ bestanden toevoegen aan het staging-gebied genoemd.

   ```bash
   git add .
   ```

   Het `git add` plus `.` argument geeft aan dat al uw bestanden en wijzigingen voor tracking geselecteerd zijn. 

1. **Voeg geselecteerde bestanden toe voor tracking**

   ```bash
   git add [bestands- of mapnaam]
   ```

   Dit helpt ons om alleen geselecteerde bestanden aan het staging-gebied toe te voegen als we niet alle bestanden tegelijk willen vastleggen.

1. **Unstage alle bestanden**

   ```bash
   git reset
   ```

   Dit commando helpt ons om alle bestanden tegelijk te unstagen.

1. **Unstage een bepaald bestand**

   ```bash
   git reset [bestands- of mapnaam]
   ```

   Dit commando helpt ons om alleen een bepaald bestand tegelijk te unstagen dat we niet willen opnemen voor de volgende commit.

1. **Uw werk voortzetten**. Op dit punt heeft u de bestanden toegevoegd aan een zogenaamd _staging-gebied_. Een plek waar Git uw bestanden bijhoudt. Om de wijziging permanent te maken, moet u de bestanden _commiten_. Om dit te doen maakt u een _commit_ aan met het `git commit` commando. Een _commit_ vertegenwoordigt een besparingspunt in de geschiedenis van uw repo. Typ het volgende om een _commit_ te maken:

   ```bash
   git commit -m "eerste commit"
   ```

   Dit commit al uw bestanden door het bericht "first commit" toe te voegen. Voor toekomstige commitberichten wilt u meer beschrijvend zijn in uw beschrijving om over te brengen wat voor soort wijziging u heeft aangebracht.

1. **Verbind uw lokale Git-repo met GitHub**. Een Git-repo is goed op uw computer, maar op een gegeven moment wilt u ergens een back-up van uw bestanden hebben en ook andere mensen uitnodigen om met u aan uw opslagplaats te werken. Een geweldige plek om dat te doen is GitHub. Onthoud dat we al een repo op GitHub hebben gemaakt, dus het enige dat we hoeven te doen, is onze lokale Git-repo verbinden met GitHub. Het commando `git remote add` zal precies dat doen. Typ de volgende commando:

   > Let op: voordat u de opdracht typt, gaat u naar uw GitHub-repo-pagina om de repository-URL te vinden. U gebruikt het in het onderstaande commando. Vervang `repository_name` door uw GitHub-URL.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Dit creëert een _remote_, of verbinding, genaamd "origin", wijzend naar de GitHub-repository die u eerder heeft gemaakt.

1. **Stuur lokale bestanden naar GitHub**. Tot nu toe heeft u een _verbinding_ gemaakt tussen de lokale repo en de GitHub-repo. Laten we deze bestanden naar GitHub sturen met het volgende commando `git push`, zoals zo:

   ```bash
   git push -u origin main
   ```

   Dit stuurt uw commits in uw "main" tak naar GitHub.

1. **Om meer wijzigingen toe te voegen**. Als u door wilt gaan met het aanbrengen van wijzigingen en ze naar GitHub wilt pushen, hoeft u alleen maar de volgende drie commando's te gebruiken:

   ```bash
   git add .
   git commit -m "typ hier uw commitbericht"
   git push
   ```

   > Tip, misschien wilt u ook een `.gitignore`-bestand adopteren om te voorkomen dat bestanden die u niet wilt volgen, verschijnen op GitHub - zoals dat notitiesbestand dat u opslaat in dezelfde map maar geen plaats heeft op een openbare repository. U kunt sjablonen voor `.gitignore` bestanden vinden op [.gitignore templates](https://github.com/github/gitignore).

#### Commit berichten

Een geweldige onderwerpregel voor een commitbericht van Git maakt de volgende zin compleet:
Indien toegepast, zal deze commit <uw onderwerpregel hier>

Gebruik voor het onderwerp de gebiedende wijs, tegenwoordige tijd: "verander" niet "veranderd" noch "veranderingen".
Net als in het onderwerp, gebruik in het lichaam (optioneel) ook de imperatieve tegenwoordige tijd. Het lichaam moet de motivatie voor de verandering opnemen en dit contrasteren met eerder gedrag. U legt het `waarom` uit, niet het `hoe`.

✅ Neem een paar minuten de tijd om rond GitHub te surfen. Kunt u een echt geweldig commitbericht vinden? Kunt u een echt minimale vinden? Welke informatie is volgens u het belangrijkst en nuttigst om over te brengen in een commitbericht?

### Taak: Samenwerken

De belangrijkste reden om dingen op GitHub te zetten, was om het mogelijk te maken om samen te werken met andere ontwikkelaars.

## Samen met anderen aan projecten werken

Navigeer in uw repository naar `Insights > Community` om te zien hoe uw project zich verhoudt tot aanbevolen communitystandaarden.

   Hier zijn enkele dingen die uw GitHub-repo kunnen verbeteren:
   - **Omschrijving**. Heeft u een beschrijving voor uw project toegevoegd?
   - **README**. Heeft u een README toegevoegd? GitHub biedt richtlijnen voor het schrijven van een [README](https://docs.github.com/articles/about-readmes/).
   - **Richtlijn voor bijdragen**. Heeft uw project [richtlijnen voor bijdragen](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/), 
   - **Gedragscode**. Een [Gedragscode](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/), 
   - **Licentie**. Misschien nog belangrijker, een [licentie](https://docs.github.com/articles/adding-a-license-to-a-repository/)?


Al deze middelen zullen nieuwe teamleden helpen. En dat zijn typisch het soort dingen waar nieuwe bijdragers naar kijken voordat ze zelfs maar naar uw code kijken, om erachter te komen of uw project de juiste plek is om hun tijd door te brengen.

✅ README-bestanden, hoewel ze wat tijd nodig hebben om voor te bereiden, worden vaak genegeerd door drukke beheerders. Kunt u een voorbeeld vinden van een bijzonder beschrijvende? Opmerking: er zijn enkele [tools om goede README's te maken](https://www.makeareadme.com/) die u misschien zou willen proberen.

### Taak: voeg een code samen

Documenten voor bijdragen helpen mensen bij te dragen aan het project. Het legt uit wat voor soort bijdragen u zoekt en hoe het proces werkt. Bijdragers moeten een reeks stappen doorlopen om bij te dragen aan uw repo op GitHub:


1. **Uw repo forken** Waarschijnlijk wilt u dat mensen uw project _forken_. Forken betekent het maken van een replica van uw repository op hun GitHub-profiel.
1. **Kloon**. Van daaruit zullen ze het project naar hun lokale computer klonen (clone). 
1. **Maak een tak**. U zult ze willen vragen om een _tak_ voor hun werk te creëren (branch). 
1. **Richt hun verandering op één gebied**. Vraag bijdragers om hun bijdragen op één ding tegelijk te concentreren - op die manier is de kans groter dat u hun werk kan _samenvoegen_ (merge). Stelt u voor dat ze een bugfix schrijven, een nieuwe functie toevoegen en verschillende tests bijwerken - wat als u slechts 2 van de 3 of 1 van de 3 wijzigingen wilt of kunt implementeren?

✅ Stelt u een situatie voor waarin takken bijzonder cruciaal zijn voor het schrijven en verzenden van goede code. Welke use-cases kunt u bedenken?

> Let op: wees de verandering die u in de wereld wilt zien, en maak ook takken voor uw eigen werk. Alle commits die u maakt, worden gemaakt op de tak waar u momenteel naar "uitgecheckt" bent. Gebruik `git status` om te zien welke tak dat is.

Laten we een workflow voor bijdragers doorlopen. Veronderstel dat de bijdrager de repo al _geforkt_ en _gekloond_ heeft, zodat ze een Git-repo hebben klaar om aan te werken, op hun lokale computer:

1. **Maak een tak**. Gebruik het commando `git branch` om een branch te maken die de wijzigingen bevat die ze willen bijdragen:

   ```bash
   git branch [taknaam]
   ```

1. **Overschakelen naar werkende tak**. Schakel over naar de gespecificeerde tak en update de werkdirectory met `git switch`:

   ```bash
   git switch [taknaam]
   ```

1. **Werken**. Op dit punt wilt u uw wijzigingen toevoegen. Vergeet niet om Git erover te vertellen met de volgende commando's:

   ```bash
   git add .
   git commit -m "mijn veranderingen"
   ```

   Zorg ervoor dat u uw commit een goede naam geeft, zowel voor u als voor de beheerder van de repo waarmee u helpt.

1. **Combineer uw werk met de `main` tak**. Op een gegeven moment bent u klaar met werken en wilt u uw werk combineren met dat van de `main` tak. De `main` tak kan ondertussen veranderd zijn, dus zorg ervoor dat u deze eerst bijwerkt naar de laatste versie met de volgende commando's:

   ```bash
   git switch main
   git pull
   ```

   Op dit punt wilt u er zeker van zijn dat alle _conflicten_, situaties waarin Git niet gemakkelijk de veranderingen kan _combineren_ plaatsvinden in uw werkende tak. Voer daarom de volgende opdrachten uit:

   ```bash
   git switch [taknaam]
   git merge main
   ```

   Dit brengt alle wijzigingen van `main` naar uw tak en hopelijk kunt u gewoon doorgaan. Als dit niet het geval is, zal VS Code u vertellen waar Git _in de war_ is en verandert u gewoon de betrokken bestanden om te zeggen welke inhoud het meest accuraat is.

1. **Stuur uw werk naar GitHub**. Het verzenden van uw werk naar GitHub betekent twee dingen. Uw tak naar uw repo pushen en vervolgens een PR, Pull Request openen.

   ```bash
   git push --set-upstream origin [taknaam]
   ```

   Het bovenstaande commando maakt de tak op uw geforkte repo.

1. **Open een PR**. Vervolgens wilt u een PR openen. U doet dat door naar de geforkte repo op GitHub te navigeren. U ziet een indicatie op GitHub waar het vraagt of u een nieuwe PR wilt maken, u klikt erop en u wordt naar een interface geleid waar u de titel van het commitbericht kunt wijzigen, geef het een meer geschikte beschrijving. Nu zal de beheerder van de repo die u heeft geforkt deze PR zien en, _vingers gekruist_, zullen ze uw PR waarderen en _samenvoegen_. U bent nu een bijdrager, yay :)

1. **Opruimen**. Het wordt als een goede gewoonte beschouwd om _op te ruimen_ nadat u met succes een PR hebt samengevoegd. U wilt zowel uw lokale tak opruimen als de tak die u naar GitHub hebt gepusht. Laten we het eerst lokaal verwijderen met het volgende commando: 

   ```bash
   git branch -d [taknaam]
   ```

   Zorg ervoor dat u naar de GitHub-pagina gaat voor de geforkte repo en verwijder de externe tak die u er zojuist naartoe hebt gepusht.

`Pull request` lijkt een gekke term, omdat u uw wijzigingen echt in het project wilt pushen. Maar de onderhouder (projecteigenaar) of het kernteam moet rekening houden met uw wijzigingen voordat u deze samenvoegt met de "main" tak van het project, dus u vraagt echt om een wijzigingsbesluit van een onderhouder.  

Een pull request is de plek om de verschillen die op een tak zijn geïntroduceerd te vergelijken en te bespreken met recensies, opmerkingen, geïntegreerde tests en meer. Een goed pull request volgt ongeveer dezelfde regels als een commitbericht. U kunt een verwijzing naar een probleem (issue) toevoegen in de issue tracker, bijvoorbeeld wanneer uw werk een probleem oplost. Dit doet u met een `#` gevolgd door het nummer van uw probleem. Bijvoorbeeld `# 97`.

🤞Duimen dat alle controles slagen en de projecteigenaar(s) uw wijzigingen in het project samenvoegen🤞

Update uw huidige lokale werkende tak met alle nieuwe commits van de corresponderende remote tak op GitHub:

`git pull`

## Hoe u kunt bijdragen aan open source

Laten we eerst een repository - of: repo - op GitHub zoeken die voor u interessant is en waaraan u een wijziging zou willen bijdragen. U zult de inhoud ervan naar uw machine kopiëren.

✅ Een goede manier om 'beginnersvriendelijke' repos te vinden, is door [te zoeken op de tag 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Kopieer lokaal een repo](../images/clone_repo.png)

Er zijn verschillende manieren om code te kopiëren. Een manier is om de inhoud van de repository te "klonen" door HTTPS, SSH of de GitHub CLI (Command Line Interface) te gebruiken. 

Open uw terminal en kloon de repository op deze manier:
`git clone https://github.com/ProjectURL`

Schakel naar de juiste map om aan het project te werken:
`cd ProjectURL`

U kunt ook het hele project openen met [Codespaces](https://github.com/features/codespaces), GitHub's ingesloten code-editor  /cloud-ontwikkelomgeving of [GitHub Desktop](https://desktop.github.com/).

Ten slotte kunt u de code downloaden in een gecomprimeerde map. 

### Nog een paar interessante dingen over GitHub

U kunt elke openbare repository op GitHub een ster geven, bekijken en/of "forken". U kunt uw repositories met ster vinden in het vervolgkeuzemenu rechtsboven. Het is net als bladwijzers, maar dan voor code. 

Projecten hebben een issue tracker, meestal op GitHub in de "Issues" tab, tenzij anders aangegeven, waar mensen problemen bespreken die verband houden met het project. En op het tabblad Pull Requests bespreken en beoordelen mensen lopende wijzigingen.

Projecten kunnen ook worden besproken in forums, mailinglijsten of chatkanalen zoals Slack, Discord of IRC.

✅ Kijk eens rond in uw nieuwe GitHub-repo en probeer een paar dingen, zoals het bewerken van instellingen, het toevoegen van informatie aan uw repo en het maken van een project (zoals een Kanban-bord). U kunt veel doen!

---

## 🚀 Uitdaging 

Koppel met een vriend om aan elkaars code te werken. Creëer gezamenlijk een project, fork code, maak takken en voeg wijzigingen samen.

## Quiz na de lezing
[Quiz na de lezing](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/4)

## Beoordeling en zelfstudie

Lees meer over [bijdragen aan open source software](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution). 

[Git-cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/).

Oefenen, oefenen, oefenen. GitHub heeft geweldige leertrajecten beschikbaar via [lab.github.com](https://lab.github.com/):

- [Eerste week op GitHub](https://lab.github.com/githubtraining/first-week-on-github)

U zult ook meer geavanceerde labs vinden. 

## Toewijzing 

Voltooi [de eerste week op GitHub-trainingslaboratorium](https://lab.github.com/githubtraining/first-week-on-github)
