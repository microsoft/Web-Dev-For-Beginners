<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ea65b75e488aa33a3cc5cb1c6c3f047a",
  "translation_date": "2025-10-03T14:00:59+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "da"
}
-->
# Introduktion til GitHub

Denne lektion dækker det grundlæggende i GitHub, en platform til at hoste og administrere ændringer i din kode.

![Intro til GitHub](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.da.png)
> Sketchnote af [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz før lektionen
[Quiz før lektionen](https://ff-quizzes.netlify.app)

## Introduktion

I denne lektion vil vi dække:

- hvordan du sporer det arbejde, du laver på din maskine
- hvordan du arbejder på projekter med andre
- hvordan du bidrager til open source-software

### Forudsætninger

Før du begynder, skal du tjekke, om Git er installeret. I terminalen skal du skrive:  
`git --version`

Hvis Git ikke er installeret, [download Git](https://git-scm.com/downloads). Derefter skal du opsætte din lokale Git-profil i terminalen:
* `git config --global user.name "dit-navn"`
* `git config --global user.email "din-email"`

For at tjekke, om Git allerede er konfigureret, kan du skrive:  
`git config --list`

Du skal også bruge en GitHub-konto, en kodeeditor (som Visual Studio Code), og du skal åbne din terminal (eller: kommandoprompt).

Gå til [github.com](https://github.com/) og opret en konto, hvis du ikke allerede har en, eller log ind og udfyld din profil.

✅ GitHub er ikke det eneste koderepositorium i verden; der findes andre, men GitHub er det mest kendte.

### Forberedelse

Du skal bruge både en mappe med et kodeprojekt på din lokale maskine (laptop eller PC) og et offentligt repository på GitHub, som vil fungere som et eksempel på, hvordan man bidrager til andres projekter.

---

## Kodestyring

Lad os sige, at du har en mappe lokalt med et kodeprojekt, og du vil begynde at spore din fremgang ved hjælp af git - versionskontrolsystemet. Nogle mennesker sammenligner brugen af git med at skrive et kærlighedsbrev til dit fremtidige jeg. Når du læser dine commit-beskeder dage, uger eller måneder senere, vil du kunne huske, hvorfor du tog en beslutning, eller "rulle tilbage" en ændring - det vil sige, når du skriver gode "commit-beskeder".

### Opgave: Opret et repository og commit kode  

> Se video
> 
> [![Git og GitHub grundlæggende video](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

1. **Opret repository på GitHub**. På GitHub.com, under repositories-fanen eller fra navigationslinjen øverst til højre, find knappen **new repo**.

   1. Giv dit repository (mappe) et navn.
   1. Vælg **create repository**.

1. **Naviger til din arbejdsmappe**. I din terminal skal du skifte til den mappe (også kendt som bibliotek), du vil begynde at spore. Skriv:

   ```bash
   cd [name of your folder]
   ```

1. **Initialiser et git repository**. I dit projekt skal du skrive:

   ```bash
   git init
   ```

1. **Tjek status**. For at tjekke status for dit repository skal du skrive:

   ```bash
   git status
   ```

   outputtet kan se sådan ud:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Typisk fortæller en `git status`-kommando dig ting som hvilke filer der er klar til at blive _gemt_ i repoet, eller som har ændringer, du måske vil gemme.

1. **Tilføj alle filer til sporing**  
   Dette kaldes også at stage filer/tilføje filer til staging-området.

   ```bash
   git add .
   ```

   `git add` plus `.` argumentet angiver, at alle dine filer og ændringer skal spores.

1. **Tilføj udvalgte filer til sporing**

   ```bash
   git add [file or folder name]
   ```

   Dette hjælper os med kun at tilføje udvalgte filer til staging-området, når vi ikke ønsker at committe alle filer på én gang.

1. **Fjern alle filer fra staging**

   ```bash
   git reset
   ```

   Denne kommando hjælper os med at fjerne alle filer fra staging-området på én gang.

1. **Fjern en bestemt fil fra staging**

   ```bash
   git reset [file or folder name]
   ```

   Denne kommando hjælper os med kun at fjerne en bestemt fil fra staging-området, som vi ikke ønsker at inkludere i den næste commit.

1. **Gem dit arbejde**. På dette tidspunkt har du tilføjet filerne til et såkaldt _staging-område_. Et sted, hvor Git sporer dine filer. For at gøre ændringen permanent skal du _committe_ filerne. For at gøre dette opretter du en _commit_ med kommandoen `git commit`. En _commit_ repræsenterer et gemmepunkt i historien for dit repo. Skriv følgende for at oprette en _commit_:

   ```bash
   git commit -m "first commit"
   ```

   Dette commit'er alle dine filer og tilføjer beskeden "first commit". For fremtidige commit-beskeder vil du gerne være mere beskrivende i din beskrivelse for at formidle, hvilken type ændring du har lavet.

1. **Forbind dit lokale Git-repo med GitHub**. Et Git-repo er godt på din maskine, men på et tidspunkt vil du gerne have en backup af dine filer et sted og også invitere andre til at arbejde med dig på dit repo. Et godt sted at gøre dette er GitHub. Husk, vi har allerede oprettet et repo på GitHub, så det eneste, vi skal gøre, er at forbinde vores lokale Git-repo med GitHub. Kommandoen `git remote add` vil gøre netop dette. Skriv følgende kommando:

   > Bemærk, før du skriver kommandoen, gå til din GitHub repo-side for at finde repository-URL'en. Du vil bruge den i nedenstående kommando. Erstat ```https://github.com/username/repository_name.git``` med din GitHub URL.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Dette opretter en _remote_, eller forbindelse, kaldet "origin", der peger på det GitHub repository, du oprettede tidligere.

1. **Send lokale filer til GitHub**. Indtil videre har du oprettet en _forbindelse_ mellem det lokale repo og GitHub repoet. Lad os sende disse filer til GitHub med følgende kommando `git push`, som så:

   > Bemærk, dit branch-navn kan være anderledes som standard end ```main```.

   ```bash
   git push -u origin main
   ```

   Dette sender dine commits i din "main"-branch til GitHub. Ved at inkludere `-u` i kommandoen etableres en forbindelse mellem din lokale branch og den eksterne branch, så du fremover kan bruge git push eller git pull uden at specificere branch-navnet.

2. **Tilføj flere ændringer**. Hvis du vil fortsætte med at lave ændringer og sende dem til GitHub, skal du blot bruge følgende tre kommandoer:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > Tip, du vil måske også adoptere en `.gitignore`-fil for at forhindre filer, du ikke ønsker at spore, i at dukke op på GitHub - som den notesfil, du gemmer i samme mappe, men som ikke har nogen plads i et offentligt repository. Du kan finde skabeloner til `.gitignore`-filer på [.gitignore templates](https://github.com/github/gitignore).

#### Commit-beskeder

En god Git commit-emnelinje fuldender følgende sætning:  
Hvis anvendt, vil denne commit <din emnelinje her>

For emnet skal du bruge den imperativ, nutid: "ændre" i stedet for "ændrede" eller "ændringer".  
Som i emnet skal du også i kroppen (valgfri) bruge den imperativ, nutid. Kroppen bør inkludere motivationen for ændringen og kontrastere dette med tidligere adfærd. Du forklarer `hvorfor`, ikke `hvordan`.

✅ Tag et par minutter til at surfe rundt på GitHub. Kan du finde en virkelig god commit-besked? Kan du finde en virkelig minimal en? Hvilke oplysninger synes du er de vigtigste og mest nyttige at formidle i en commit-besked?

### Opgave: Samarbejd

Hovedårsagen til at lægge ting på GitHub var at gøre det muligt at samarbejde med andre udviklere.

## Arbejde på projekter med andre

> Se video
>
> [![Git og GitHub grundlæggende video](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

I dit repository skal du navigere til `Insights > Community` for at se, hvordan dit projekt sammenlignes med anbefalede fællesskabsstandarder.

   Her er nogle ting, der kan forbedre dit GitHub-repo:
   - **Beskrivelse**. Har du tilføjet en beskrivelse af dit projekt?
   - **README**. Har du tilføjet en README? GitHub giver vejledning til at skrive en [README](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon).
   - **Retningslinjer for bidrag**. Har dit projekt [retningslinjer for bidrag](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon)?
   - **Adfærdskodeks**. Et [adfærdskodeks](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/).
   - **Licens**. Måske vigtigst af alt, en [licens](https://docs.github.com/articles/adding-a-license-to-a-repository/)?

Alle disse ressourcer vil gavne onboarding af nye teammedlemmer. Og det er typisk den slags ting, nye bidragydere kigger på, før de overhovedet ser på din kode, for at finde ud af, om dit projekt er det rette sted for dem at bruge deres tid.

✅ README-filer, selvom de tager tid at forberede, bliver ofte overset af travle vedligeholdere. Kan du finde et eksempel på en særlig beskrivende README? Bemærk: der findes nogle [værktøjer til at hjælpe med at lave gode READMEs](https://www.makeareadme.com/), som du måske vil prøve.

### Opgave: Flet noget kode

Bidragsdokumenter hjælper folk med at bidrage til projektet. De forklarer, hvilke typer bidrag du leder efter, og hvordan processen fungerer. Bidragydere skal gennem en række trin for at kunne bidrage til dit repo på GitHub:

1. **Fork dit repo**. Du vil sandsynligvis have, at folk _forker_ dit projekt. Forking betyder at oprette en kopi af dit repository på deres GitHub-profil.
1. **Clone**. Derfra vil de clone projektet til deres lokale maskine.
1. **Opret en branch**. Du vil bede dem om at oprette en _branch_ til deres arbejde.
1. **Fokuser deres ændring på ét område**. Bed bidragydere om at koncentrere deres bidrag om én ting ad gangen - på den måde er chancerne for, at du kan _flette_ deres arbejde, højere. Forestil dig, at de skriver en fejlrettelse, tilføjer en ny funktion og opdaterer flere tests - hvad hvis du kun vil eller kan implementere 2 ud af 3 eller 1 ud af 3 ændringer?

✅ Forestil dig en situation, hvor branches er særligt kritiske for at skrive og levere god kode. Hvilke anvendelsesscenarier kan du komme i tanke om?

> Bemærk, vær den forandring, du ønsker at se i verden, og opret branches til dit eget arbejde også. Enhver commit, du laver, vil blive lavet på den branch, du i øjeblikket er "checket ud" til. Brug `git status` for at se, hvilken branch det er.

Lad os gennemgå en bidragsarbejdsgang. Antag, at bidragsyderen allerede har _forket_ og _clonet_ repoet, så de har et Git-repo klar til at blive arbejdet på, på deres lokale maskine:

1. **Opret en branch**. Brug kommandoen `git branch` til at oprette en branch, der vil indeholde de ændringer, de har til hensigt at bidrage med:

   ```bash
   git branch [branch-name]
   ```

1. **Skift til arbejdsbranch**. Skift til den specificerede branch og opdater arbejdsmappen med `git switch`:

   ```bash
   git switch [branch-name]
   ```

1. **Arbejd på projektet**. På dette tidspunkt vil du tilføje dine ændringer. Glem ikke at fortælle Git om det med følgende kommandoer:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Sørg for at give din commit et godt navn, for din egen skyld såvel som for vedligeholderen af det repo, du hjælper med.

1. **Kombiner dit arbejde med `main`-branchen**. På et tidspunkt er du færdig med at arbejde, og du vil kombinere dit arbejde med det i `main`-branchen. `main`-branchen kan have ændret sig i mellemtiden, så sørg for først at opdatere den til det nyeste med følgende kommandoer:

   ```bash
   git switch main
   git pull
   ```

   På dette tidspunkt vil du sikre dig, at eventuelle _konflikter_, situationer hvor Git ikke nemt kan _kombinere_ ændringerne, sker i din arbejdsbranch. Derfor skal du køre følgende kommandoer:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Kommandoen `git merge main` vil bringe alle ændringer fra `main` ind i din branch. Forhåbentlig kan du bare fortsætte. Hvis ikke, vil VS Code fortælle dig, hvor Git er _forvirret_, og du skal blot ændre de berørte filer for at angive, hvilket indhold der er mest korrekt.

   For at skifte til en anden branch skal du bruge den moderne `git switch`-kommando:
   ```bash
   git switch [branch_name]


1. **Send dit arbejde til GitHub**. At sende dit arbejde til GitHub betyder to ting: at pushe din branch til dit repo og derefter åbne en PR, Pull Request.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   Den ovenstående kommando opretter branchen på dit forkede repo.
1. **Åbn en PR**. Næste skridt er at åbne en PR. Det gør du ved at navigere til den forkede repo på GitHub. Du vil se en indikation på GitHub, hvor der spørges, om du vil oprette en ny PR. Klik på det, og du bliver ført til en grænseflade, hvor du kan ændre commit-beskedens titel og give en mere passende beskrivelse. Nu vil vedligeholderen af det repo, du har forket, se denne PR, og _krydser fingre_ de vil sætte pris på og _merge_ din PR. Du er nu en bidragyder, yay :)

1. **Ryd op**. Det anses som god praksis at _rydde op_, efter du har fået en PR succesfuldt merged. Du vil gerne rydde op både i din lokale branch og den branch, du har skubbet til GitHub. Først skal vi slette den lokalt med følgende kommando:

   ```bash
   git branch -d [branch-name]
   ```

   Sørg for at gå til GitHub-siden for det forkede repo og fjerne den fjernbranch, du lige har skubbet til.

`Pull request` virker som et fjollet udtryk, fordi du egentlig vil skubbe dine ændringer til projektet. Men vedligeholderen (projektets ejer) eller kerneholdet skal overveje dine ændringer, før de merges med projektets "main"-branch, så du anmoder faktisk om en beslutning om ændringer fra en vedligeholder.

En pull request er stedet, hvor man kan sammenligne og diskutere forskellene, der er introduceret på en branch, med anmeldelser, kommentarer, integrerede tests og mere. En god pull request følger nogenlunde de samme regler som en commit-besked. Du kan tilføje en reference til et issue i issue tracker, når dit arbejde for eksempel løser et problem. Dette gøres ved at bruge et `#` efterfulgt af nummeret på dit issue. For eksempel `#97`.

🤞Krydser fingre for, at alle checks går igennem, og projektets ejer(e) merger dine ændringer ind i projektet🤞

Opdater din nuværende lokale arbejdsbranch med alle nye commits fra den tilsvarende fjernbranch på GitHub:

`git pull`

## Hvordan bidrager man til open source

Først skal vi finde et repository (eller **repo**) på GitHub, som interesserer dig, og som du gerne vil bidrage med en ændring til. Du vil gerne kopiere dets indhold til din maskine.

✅ En god måde at finde 'begynder-venlige' repos er at [søge efter tagget 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Kopier et repo lokalt](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.da.png)

Der er flere måder at kopiere kode på. En måde er at "klone" indholdet af repositoryet ved hjælp af HTTPS, SSH eller GitHub CLI (Command Line Interface).

Åbn din terminal og klon repositoryet sådan her:
`git clone https://github.com/ProjectURL`

For at arbejde på projektet, skift til den rigtige mappe:
`cd ProjectURL`

Du kan også åbne hele projektet ved hjælp af [Codespaces](https://github.com/features/codespaces), GitHubs indbyggede kodeeditor / cloud-udviklingsmiljø, eller [GitHub Desktop](https://desktop.github.com/).

Til sidst kan du downloade koden i en zippet mappe.

### Et par flere interessante ting om GitHub

Du kan stjerne, følge og/eller "forke" ethvert offentligt repository på GitHub. Du kan finde dine stjernemarkerede repositories i drop-down-menuen øverst til højre. Det er som at bogmærke, men for kode.

Projekter har en issue tracker, som oftest på GitHub under fanen "Issues", medmindre andet er angivet, hvor folk diskuterer problemer relateret til projektet. Og fanen Pull Requests er, hvor folk diskuterer og gennemgår ændringer, der er undervejs.

Projekter kan også have diskussioner i fora, mailinglister eller chatkanaler som Slack, Discord eller IRC.

✅ Tag et kig rundt i dit nye GitHub-repo og prøv et par ting, som at redigere indstillinger, tilføje information til dit repo og oprette et projekt (som et Kanban-board). Der er meget, du kan gøre!

---

## 🚀 Udfordring

Samarbejd med en ven om at arbejde på hinandens kode. Opret et projekt sammen, fork kode, opret branches og merge ændringer.

## Quiz efter forelæsning
[Quiz efter forelæsning](https://ff-quizzes.netlify.app/web/en/)

## Gennemgang & Selvstudie

Læs mere om [at bidrage til open source software](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).

[Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/).

Øv, øv, øv. GitHub har fantastiske læringsforløb tilgængelige via [skills.github.com](https://skills.github.com):

- [Første uge på GitHub](https://skills.github.com/#first-week-on-github)

Du vil også finde mere avancerede kurser.

## Opgave

Gennemfør [kurset Første uge på GitHub](https://skills.github.com/#first-week-on-github)

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på at opnå nøjagtighed, skal det bemærkes, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os ikke ansvar for eventuelle misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.