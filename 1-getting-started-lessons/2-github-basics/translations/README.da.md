# Introduktion til GitHub

Denne lektion dækker det grundlæggende i GitHub, en platform til at hoste og administrere ændringer i din kode.

![Intro to GitHub](/sketchnotes/webdev101-github.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz for undervisning
[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/3)

## Introduktion

I denne lektion vil vi dække:

- sporing af det arbejde, du udfører på din maskine
- at arbejde på projekter sammen med andre
- hvordan man bidrager til open source-software

### Forudsætninger

Før du begynder, skal du tjekke, om Git er installeret. Skriv i terminalen: 
`git --version`

Hvis Git ikke er installeret, skal du [downloade Git] (https://git-scm.com/downloads). Opsæt derefter din lokale Git-profil i terminalen:
* `git config --global user.name "dit-navn"`
* `git config --global user.email "din-email"`

For at tjekke, om Git allerede er konfigureret, kan du skrive:
`git config --list`

For at tjekke, om Git allerede er konfigureret, kan du skrive:
`git config --list`

Du skal også bruge en GitHub-konto, en kodeeditor (som Visual Studio Code), og du skal åbne din terminal (eller: kommandoprompt).

Naviger til [github.com](https://github.com/) og opret en konto, hvis du ikke allerede har gjort det, eller log ind og udfyld din profil. 

✅ GitHub er ikke det eneste kodelager i verden; der er andre, men GitHub er det mest kendte.

### Forberedelse

Du skal bruge både en mappe med et kodeprojekt på din lokale maskine (laptop eller pc) og et offentligt repository på GitHub, som vil fungere som et eksempel på, hvordan man bidrager til andres projekter.

---

## Håndtering af kode

Lad os sige, at du har en mappe lokalt med et kodeprojekt, og at du vil begynde at spore dine fremskridt ved hjælp af git - versionsstyringssystemet. Nogle mennesker sammenligner det at bruge git med at skrive et kærlighedsbrev til sit fremtidige jeg. Når du læser dine commit-meddelelser dage, uger eller måneder senere, vil du kunne huske, hvorfor du tog en beslutning eller "rullede" en ændring tilbage - det vil sige, når du skriver gode "commit-meddelelser".

### Opgave: Lav et repository og commit kode  

> Tjek videoen ud
> 
> [![Git and GitHub basics video](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)


1. **Opret et repository på GitHub**. På GitHub.com finder du knappen **new repo** under fanen repositories eller i navigationslinjen øverst til højre.

   1. Giv dit repository (mappe) et navn.
   1. Vælg **opret repository**.

1. **Naviger til din arbejdsmappe**. I din terminal skal du skifte til den mappe (også kendt som biblioteket), du vil begynde at spore. Skriv:

   ```bash
   cd [navn på din mappe]
   ```

1. **Initialiser et git-repository**. I din projekttype:

   ```bash
   git init
   ```

1. **Tjek status**. For at tjekke status for dit repository skriver du:

   ```bash
   git status
   ```

   Outputtet kan se nogenlunde sådan ud:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Typically a `git status` command tells you things like what files are ready to be _saved_ to the    En `git status`-kommando fortæller dig typisk ting som, hvilke filer der er klar til at blive _gemt_ i repoen eller har ændringer, som du måske ønsker at bevare.

1. **Tilføj alle filer til sporing**.
   Dette kaldes også staging files/tilføjelse af filer til staging-området.

   ```bash
   git add .
   ```

   Argumentet `git add` plus `.` angiver, at alle dine filer og ændringer skal spores. 



1. **Tilføj udvalgte filer til sporing**.

   ```bash
   git add [fil- eller mappenavn]
   ```

   Dette hjælper os med kun at tilføje udvalgte filer til staging-området, når vi ikke ønsker at overføre alle filer på én gang.

1. **Fjern (unstage) alle filer fra scenen**

   ```bash
   git reset
   ```

   Denne kommando hjælper os med at fjerne alle filer fra scenen på én gang.

1. **Fjern (unstage) en bestemt fil**

   ```bash
   git reset [fil- eller mappenavn]
   ```

   Denne kommando hjælper os med kun at fjerne en bestemt fil på én gang, som vi ikke ønsker at inkludere i den næste commit.
   
1. **Fastholdelse af dit arbejde**. På dette tidspunkt har du tilføjet filerne til et såkaldt _staging area_. Et sted, hvor Git sporer dine filer. For at gøre ændringen permanent er du nødt til at _committe_ filerne. Det gør du ved at oprette en _commit_ med kommandoen `git commit`. En _commit_ repræsenterer et gemmepunkt i dit repos historik. Skriv følgende for at oprette en _commit_:

   ```bash
   git commit -m "første commit"
   ```

   Dette committer alle dine filer og tilføjer beskeden "first commit". For fremtidige commit-meddelelser skal du være mere beskrivende i din beskrivelse for at formidle, hvilken type ændring du har foretaget.c

1. **Forbind dit lokale Git-repo med GitHub**. Et Git-repo er godt på din maskine, men på et tidspunkt vil du gerne have en backup af dine filer et sted og også invitere andre til at arbejde sammen med dig på dit repo. Et godt sted at gøre det er GitHub. Husk, at vi allerede har oprettet et repo på GitHub, så det eneste, vi skal gøre, er at forbinde vores lokale Git-repo med GitHub. Kommandoen `git remote add` vil gøre netop det. Skriv følgende kommando:

   > Bemærk, før du skriver kommandoen, skal du gå til din GitHub repo-side for at finde repository-URL'en. Du skal bruge den i kommandoen nedenfor. Erstat ``https://github.com/username/repository_name.git``` med din GitHub-URL.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Dette opretter en _remote_, eller forbindelse, med navnet "origin", der peger på det GitHub-repositorium, du oprettede tidligere.

1. **Send lokale filer til GitHub**. Indtil videre har du oprettet en _forbindelse_ mellem det lokale repo og GitHub-repoet. Lad os sende disse filer til GitHub med følgende kommando `git push`, sådan her: 
   
   > Bemærk, din branches navn kan som standard være forskelligt fra ```main```.

   ```bash
   git push -u origin main
   ```

   Dette sender dine commits i din "main"-gren til GitHub.

2. **For at tilføje flere ændringer**. Hvis du vil fortsætte med at lave ændringer og skubbe dem til GitHub, skal du bare bruge de følgende tre kommandoer:

   ```bash
   git add .
   git commit -m "skriv din commit-besked her"
   git push
   ```

   > Tip: Du kan også indføre en `.gitignore`-fil for at forhindre filer, du ikke ønsker at spore, i at dukke op på GitHub - som den note-fil, du gemmer i den samme mappe, men som ikke hører hjemme i et offentligt repository. Du kan finde skabeloner til `.gitignore`-filer på [.gitignore templates](https://github.com/github/gitignore).

#### Commit-meddelelser

En god Git commit-emnelinje afslutter følgende sætning:
Hvis den anvendes, vil dette commit <din emnelinje her>.

I emnet skal du bruge imperativ, nutid: "change", ikke "changed" eller "changes". 
Som i emnet skal du i brødteksten (valgfri) også bruge imperativ, nutid. Brødteksten skal indeholde motivationen for ændringen og sætte den i kontrast til tidligere adfærd. Du forklarer `hvorfor`, ikke `hvordan`.

✅ Brug et par minutter på at surfe rundt på GitHub. Kan du finde en rigtig god commit-besked? Kan du finde en virkelig minimal en? Hvilke oplysninger synes du er de vigtigste og mest nyttige at formidle i en commit-meddelelse?

### Opgave: Samarbejde

Hovedårsagen til at lægge ting på GitHub var at gøre det muligt at samarbejde med andre udviklere.

## Arbejde på projekter med andre

> Tjek videoen ud
>
> [![Git and GitHub basics video](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

I dit repository skal du navigere til `Insights > Community` for at se, hvordan dit projekt ligger i forhold til de anbefalede community-standarder.

   Her er nogle ting, der kan forbedre dit GitHub repo:
   - **Beskrivelse**. Har du tilføjet en beskrivelse af dit projekt?
   - **README**. Har du tilføjet en README? GitHub giver vejledning i at skrive en [README] (https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon).
   - **Retningslinjer for bidrag**. Har dit projekt [retningslinjer for bidrag](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon), 
   - **Code of Conduct**. en [Code of Conduct](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/), 
   - **Licens**. Måske vigtigst af alt, en [licens](https://docs.github.com/articles/adding-a-license-to-a-repository/)?

Alle disse ressourcer vil gavne onboarding af nye teammedlemmer. Og det er typisk den slags ting, nye bidragydere kigger på, før de overhovedet kigger på din kode, for at finde ud af, om dit projekt er det rigtige sted for dem at bruge deres tid.

✅ README-filer, selvom de tager tid at forberede, bliver ofte forsømt af travle vedligeholdere. Kan du finde et eksempel på en særligt beskrivende en? Bemærk: der er nogle [værktøjer til at hjælpe med at skabe gode README'er] (https://www.makeareadme.com/), som du måske vil prøve.

### Opgave: Flet noget kode

Contributing docs hjælper folk med at bidrage til projektet. Den forklarer, hvilke typer bidrag du leder efter, og hvordan processen fungerer. Bidragsydere skal igennem en række trin for at kunne bidrage til dit repo på GitHub:


1. **Forking af dit repo** Du vil sandsynligvis gerne have folk til at _forke_ dit projekt. At forke betyder, at man opretter en kopi af dit repository på sin GitHub-profil.
1. **Klon**. Derfra vil de klone projektet til deres lokale maskine. 
1. **Opret en gren**. Du vil bede dem om at oprette en _branch_ til deres arbejde. 
1. **Fokuser deres ændringer på ét område**. Bed bidragsyderne om at koncentrere deres bidrag om én ting ad gangen - på den måde er chancerne for, at du kan _fusionere_ i deres arbejde, større. Forestil dig, at de skriver en fejlrettelse, tilføjer en ny funktion og opdaterer flere tests - hvad nu, hvis du kun vil eller kan implementere 2 ud af 3 eller 1 ud af 3 ændringer?

✅ Forestil dig en situation, hvor branches er særligt kritiske for at skrive og sende god kode. Hvilke use cases kan du komme i tanke om?

> Bemærk, vær den forandring, du ønsker at se i verden, og opret også grene til dit eget arbejde. Alle commits, du laver, vil blive lavet på den gren, du i øjeblikket er "checket ud" til. Brug `git status` til at se, hvilken gren det er.

Lad os gennemgå en arbejdsgang for en bidragyder. Antag, at bidragyderen allerede har _forked_ og _cloned_ repoen, så de har en Git repo klar til at arbejde på, på deres lokale maskine:

1. **Opret en gren (branch)**. Brug kommandoen `git branch` til at oprette en gren, der skal indeholde de ændringer, de har tænkt sig at bidrage med:

   ```bash
   git branch [branch-name]
   ```

1. **Skift til arbejdsgren**. Skift til den angivne gren, og opdater arbejdsmappen med `git switch`:

   ```bash
   git switch [branch-name]
   ```

1. **Gør arbejdet**. På dette tidspunkt vil du tilføje dine ændringer. Glem ikke at fortælle Git om det med følgende kommandoer:

   ```bash
   git add .
   git commit -m "mine ændringer"
   ```

   Sørg for at give din commit et godt navn, både for din egen skyld og for vedligeholderen af det repo, du hjælper på.

1. **Kombiner dit arbejde med `hovedgrenen`**. På et tidspunkt er du færdig med at arbejde, og du ønsker at kombinere dit arbejde med `main` branch. `main` branch kan have ændret sig i mellemtiden, så sørg for først at opdatere den til den nyeste med følgende kommandoer:

   ```bash
   git switch main
   git pull
   ```

   På dette tidspunkt vil du sikre dig, at eventuelle _konflikter_, situationer, hvor Git ikke nemt kan _kombinere_ ændringerne, sker i din arbejdsgren. Kør derfor følgende kommandoer:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Dette vil bringe alle ændringer fra `main` ind i din gren, og forhåbentlig kan du bare fortsætte. Hvis ikke, vil VS Code fortælle dig, hvor Git er _forvirret_, og du skal bare ændre de berørte filer for at sige, hvilket indhold der er det mest nøjagtige.

1. **Send dit arbejde til GitHub**. At sende dit arbejde til GitHub betyder to ting. Skubbe din gren til dit repo og derefter åbne en PR, Pull Request.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   Ovenstående kommando opretter grenen på dit forkede repo.

1. **Åbn en PR**. Dernæst skal du åbne en PR. Det gør du ved at navigere til det forkede repo på GitHub. Du vil se en indikation på GitHub, hvor den spørger, om du vil oprette en ny PR, du klikker på det, og du bliver ført til en grænseflade, hvor du kan ændre commit message-titlen, give den en mere passende beskrivelse. Nu vil vedligeholderen af det repo, du forkede, se denne PR, og _fingers crossed_ vil de værdsætte og _merge_ din PR. Du er nu en bidragyder, yay :)

1. **Ryd op**. Det anses for at være god praksis at _rydde op_, når du har flettet en PR. Du ønsker at rydde op i både din lokale gren og den gren, du har skubbet til GitHub. Lad os først slette den lokalt med følgende kommando: 

   ```bash
   git branch -d [branch-name]
   ```

   Sørg derefter for at gå ind på GitHub-siden for det forkede repo og fjern den remote branch, du lige har skubbet til det.

`Pull request` virker som et fjollet udtryk, fordi du i virkeligheden ønsker at skubbe dine ændringer til projektet. Men vedligeholderen (projektejeren) eller kerneteamet er nødt til at overveje dine ændringer, før de flettes med projektets "hovedgren", så du anmoder i virkeligheden om en ændringsbeslutning fra en vedligeholder.  

En pull request er stedet, hvor man kan sammenligne og diskutere de forskelle, der er introduceret på en branch, med reviews, kommentarer, integrerede tests og meget mere. En god pull request følger nogenlunde de samme regler som en commit-meddelelse. Du kan tilføje en reference til et problem i issue tracker, når dit arbejde f.eks. løser et problem. Dette gøres ved hjælp af et `#` efterfulgt af nummeret på dit problem. For eksempel `#97`.

🤞Vi krydser fingre for, at alle checks går igennem, og at projektejerne fletter dine ændringer ind i projektet🤞.

Opdater din nuværende lokale arbejdsgren med alle nye commits fra den tilsvarende fjerngren på GitHub:

`git pull`

## Sådan bidrager du til open source

Lad os først finde et repository (eller **repo**) på GitHub, som er interessant for dig, og som du gerne vil bidrage med en ændring til. Du skal kopiere dets indhold til din maskine.

✅ En god måde at finde 'begyndervenlige' repos på er at [søge efter tagget 'good-first-issue'] (https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Kopier et repo lokalt](images/clone_repo.png)

Der er flere måder at kopiere kode på. En måde er at "klone" indholdet af repository'et ved hjælp af HTTPS, SSH eller GitHub CLI (Command Line Interface). 

Åbn din terminal og klon depotet på denne måde:
`git clone https://github.com/ProjectURL`

For at arbejde på projektet skal du skifte til den rigtige mappe:
`cd ProjectURL`

Du kan også åbne hele projektet ved hjælp af [Codespaces](https://github.com/features/codespaces), GitHubs indlejrede kodeeditor / cloud-udviklingsmiljø, eller [GitHub Desktop](https://desktop.github.com/).

Endelig kan du downloade koden i en zippet mappe. 

### Et par mere interessante ting om GitHub

Du kan stjernemarkere, overvåge og/eller "forke" ethvert offentligt repositorium på GitHub. Du kan finde dine stjernemarkerede repositories i rullemenuen øverst til højre. Det er ligesom bogmærker, men for kode. 

Projekter har en issue tracker, for det meste på GitHub under fanen "Issues", medmindre andet er angivet, hvor folk diskuterer problemer relateret til projektet. Og fanen Pull Requests er der, hvor folk diskuterer og gennemgår ændringer, der er undervejs.

Projekter kan også have diskussioner i fora, mailinglister eller chatkanaler som Slack, Discord eller IRC.

✅ Tag et kig på dit nye GitHub-repo, og prøv et par ting, som at redigere indstillinger, tilføje oplysninger til dit repo og oprette et projekt (som en Kanban-tavle). Der er meget, du kan gøre!

---

## 🚀 Udfordring 

Gå sammen med en ven om at arbejde på hinandens kode. Opret et projekt i fællesskab, fork kode, opret branches og flet ændringer.

## Quiz efter undervisning
[Quiz efter forelæsning](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/4)

## Gennemgang og selvstudium

Læs mere om [bidrag til open source-software](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution). 

[Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/).

Øvelse, øvelse, øvelse. GitHub har gode læringsstier tilgængelige via [skills.github.com](https://skills.github.com):

- [Første uge på GitHub](https://skills.github.com/#first-week-on-github)

Du kan også finde mere avancerede kurser. 

## Opgave 

Gennemfør [kurset First Week on GitHub](https://skills.github.com/#first-week-on-github)
