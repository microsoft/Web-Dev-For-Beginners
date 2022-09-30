# Introduktion till GitHub

Den här lektionen täcker grunderna i GitHub, en plattform för att vara värd och hantera ändringar av din kod.

![Intro till Github](../../sketchnotes/webdev101-github.png)
> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz före föreläsningen

[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/3)

## Introduktion

I den här lektionen tar vi upp:

- spåra arbetet du gör på din maskin
- arbeta i projekt tillsammans med andra
- hur man bidrar till programvara med öppen källkod

### Förutsättningar

Innan du börjar måste du kontrollera om Git är installerat. Typ i terminalen:
`git --version`

Om Git inte är installerat, [ladda ner Git](https://git-scm.com/downloads). Ställ sedan in din lokala Git-profil i terminalen:
* `git config --global user.name "your-name"`
* `git config --global user.email "your-email"`

För att kontrollera om Git redan är konfigurerat kan du skriva:
`git config --list`

Du behöver också ett GitHub-konto, en kodredigerare (som Visual Studio Code), och du måste öppna din terminal (eller: kommandotolken).

Navigera till [github.com](https://github.com/) och skapa ett konto om du inte redan har gjort det, eller logga in och fyll i din profil.

✅ GitHub är inte det enda kodarkivet i världen; det finns andra, men GitHub är den mest kända

### Förberedelser

Du behöver både en mapp med ett kodprojekt på din lokala dator (bärbar dator eller PC) och ett offentligt arkiv på GitHub, som kommer att fungera som ett exempel på hur du kan bidra till andras projekt.

---

## Kodhantering

Låt oss säga att du har en mapp lokalt med något kodprojekt och du vill börja spåra dina framsteg med git - versionskontrollsystemet. Vissa människor jämför att använda git med att skriva ett kärleksbrev till ditt framtida jag. När du läser dina commit-meddelanden dagar eller veckor eller månader senare kommer du att kunna komma ihåg varför du tog ett beslut, eller "återställa" en ändring - det vill säga när du skriver bra "commit-meddelanden".

### Uppgift: Skapa ett arkiv och commita kod

> Kolla in videon
>
> [![Git and GitHub basics video](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)


1. **Skapa repo på GitHub**. På GitHub.com, i repositories-fliken, eller från navigeringsfältet uppe till höger, hitta knappen **new repo**.

    1. Ge ditt repo (mapp) ett namn
    1. Välj **create repo**.

1. **Navigera till din arbetsmapp**. I din terminal byter du till den mapp (även känd som katalogen) du vill börja spåra. Typ:

   ```bash
   cd [name of your folder]
   ```

1. **Initiera ett git-repo**. I ditt projekt:

    ``` bash
    git init
    ```

1. **Kontrollera status**. Så här kontrollerar du statusen för ditt repo:

    ``` bash
    git status
    ```

    utskriften kan se ut ungefär så här:

       ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Vanligtvis berättar ett `git status`-kommando saker som vilka filer som är redo att _sparas_ till repo eller har ändringar på sig som du kanske vill bestå.

1. **Lägg till alla filer för spårning**
    Detta kallas även staging/lägga till filer till staging area.

    ``` bash
    git add .
    ```

    Argumentet `git add` plus `.` indikerar att alla dina filer och ändringar för spårning.

1. **Lägg till valda filer för spårning**

    ``` bash
    git add [fil- eller mappnamn]
    ```

    Detta hjälper oss att bara lägga till utvalda filer till uppställningsområdet när vi inte vill commitera alla filer på en gång.

1. **Ta bort alla filer**

    ``` bash
    git reset
    ```

    Det här kommandot hjälper oss att ta bort alla filer på en gång.

1. **Ta bort en viss fil**

    ``` bash
    git reset [fil- eller mappnamn]
    ```

    Det här kommandot hjälper oss att ta bort endast en viss fil på en gång som vi inte vill inkludera för nästa commit.

1. **Fortsätta på ditt arbete**. Vid det här laget har du lagt till filerna till ett så kallat _staging area_. En plats där Git spårar dina filer. För att göra ändringen permanent måste du _commit_ filerna. För att göra det skapar du en _commit_ med kommandot `git commit`. En _commit_ representerar en besparingspunkt i historiken för din repo. Skriv följande för att skapa en _commit_:

    ``` bash
    git commit -m "first commit"
    ```

    Detta commiterar alla dina filer och lägger till meddelandet "first commit". För framtida commit-meddelanden kommer du att vilja vara mer beskrivande i din beskrivning för att förmedla vilken typ av förändring du har gjort.

1. **Anslut ditt lokala Git-repo med GitHub**. Ett Git-repo är bra på din maskin men någon gång vill du ha säkerhetskopiering av dina filer någonstans och även bjuda in andra att arbeta med dig på din repo. Ett så bra ställe att göra det är GitHub. Kom ihåg att vi redan har skapat ett repo på GitHub så det enda vi behöver göra är att ansluta vår lokala Git-repo med GitHub. Kommandot 'git remote add' kommer att göra just det. Skriv följande kommando:

    > Notera, innan du skriver kommandot gå till din GitHub-reposida för att hitta repots URL. Du kommer att använda det i kommandot nedan. Ersätt ```https://github.com/username/repository_name.git``` med din GitHub-URL.

    ``` bash
    git remote add origin https://github.com/username/repository_name.git
    ```

    Detta skapar en _remote_, eller anslutning, som heter "origin" som pekar på GitHub-repot du skapade tidigare.

1. **Skicka lokala filer till GitHub**. Hittills har du skapat en _koppling_ mellan det lokala repet och GitHub-repoet. Låt oss skicka dessa filer till GitHub med följande kommando `git push`, som så:

    > Observera att ditt branch-namn kan skilja sig från ```main``` som standard.

    ``` bash
    git push -u origin main
    ```

    Detta skickar dina commits i din "main" till GitHub.

2. **Att lägga till fler ändringar**. Om du vill fortsätta att göra ändringar och skicka dem till GitHub behöver du bara använda följande tre kommandon:

    ``` bash
    git add .
    git commit -m "skriv ditt commit-meddelande här"
    git push
    ```

    > Tips, du kanske också vill använda en `.gitignore`-fil för att förhindra att filer du inte vill spåra visas på GitHub - som den där anteckningsfilen du lagrar i samma mapp men som inte har någon plats i ett offentligt arkiv. Du kan hitta mallar för `.gitignore`-filer på [.gitignore-mallar](https://github.com/github/gitignore).

#### Commit meddelanden

En fantastisk Git-commit ämnesrad slutför följande mening:
Om det tillämpas kommer detta åtagande att <din ämnesrad här>

För subjektet använd imperativ, presens: "förändring" inte "förändrad" eller "förändringar".
Liksom i ämnet, i bodyn (valfritt) använd också imperativ, presens. Bodyn bör inkludera motivationen för förändringen och kontrastera detta mot tidigare beteende. Du förklarar "varför", inte "hur".

✅ Ta några minuter att surfa runt på GitHub. Kan du hitta ett riktigt bra commit-meddelande? Kan du hitta en riktigt minimal sådan? Vilken information tycker du är viktigast och användbar att förmedla i ett commit-meddelande?

### Uppgift: Samarbeta

Det främsta skälet till att lägga saker på GitHub var att göra det möjligt att samarbeta med andra utvecklare.

## Arbeta med projekt tillsammans med andra

> Kolla in videon
>
> [![Git och GitHub grundvideo](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8 )

I ditt arkiv, navigera till "Insights > Community" för att se hur ditt projekt står sig i jämförelse med rekommenderade community standard.

   Här är några saker som kan förbättra din GitHub-repo:
   - **Beskrivning**. Har du lagt till en beskrivning för ditt projekt?
   - **README**. Har du lagt till en README? GitHub ger vägledning för att skriva en [README](https://docs.github.com/articles/about-readmes/).
   - **Bidragande riktlinje**. Har ditt projekt [bidragsriktlinjer](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/),
   - **Uppförandekod**. en [uppförandekod](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/),
   - **Licens**. Kanske viktigast av allt, en [licens](https://docs.github.com/articles/adding-a-license-to-a-repository/)?


Alla dessa resurser kommer att gynnas av nya teammedlemmar. Det är vanligtvis sådana saker som nya bidragsgivare tittar på innan de ens tittar på din kod, för att ta reda på om ditt projekt är rätt plats för dem att spendera sin tid.

✅ README-filer, även om de tar tid att förbereda, försummas ofta av upptagna underhållare. Kan du hitta ett exempel på ett särskilt beskrivande README? Obs! Det finns några [verktyg för att skapa bra READMEs](https://www.makeareadme.com/) som du kanske skulle vilja prova.

### Uppgift: Slå ihop lite kod

Att bidra med dokumentation hjälper människor att bidra till projektet. Den förklarar vilka typer av bidrag du letar efter och hur processen fungerar. Bidragsgivare måste gå igenom en rad steg för att kunna bidra till ditt repo på GitHub:


1. **Forka ditt repo** Du kommer förmodligen att vilja att folk ska _fork_ ditt projekt. Forking innebär att skapa en kopia av ditt arkiv på deras GitHub-profil.
1. **Klona**. Därifrån kommer de att klona projektet till sin lokala maskin.
1. **Skapa en branch**. Du kommer att vilja be dem att skapa en _branch_ för deras arbete.
1. **Fokusera sin förändring på ett område**. Be bidragsgivare att koncentrera sina commits på en sak i taget - på så sätt är chansen större att du kan _mergea_ i deras arbete. Föreställ dig att de skriver en buggfix, lägger till en ny funktion och uppdaterar flera tester - vad händer om du vill eller bara kan implementera 2 av 3 eller 1 av 3 ändringar?

✅ Föreställ dig en situation där branches är särskilt viktiga för att skriva och skicka bra kod. Vilka användningsfall kan du tänka dig?

> Notera, var den förändring du vill se i världen, och skapa branches för ditt eget arbete också. Alla åtaganden du gör kommer att göras på den branch du för närvarande har "checkat ut" till. Använd `git status` för att se vilken branch det är.

Låt oss gå igenom ett arbetsflöde för bidragsgivare. Anta att bidragsgivaren redan har _forkat_ och _klonat_ repot så att de har ett Git-repo redo att arbeta med, på sin lokala maskin:

1. **Skapa en branch**. Använd kommandot 'git branch' för att skapa en branch som kommer att innehålla de ändringar de menar att bidra:

    ``` bash
    git branch [grennamn]
    ```

1. **Växla till branchen**. Byt till den angivna branch och uppdatera arbetskatalogen med `git switch`:

    ``` bash
    git switch [branch-name]
    ```

1. **Arbeta**. Vid det här laget vill du lägga till dina ändringar. Glöm inte att berätta för Git om det med följande kommandon:

    ``` bash
    git add .
    git commit -m "mina ändringar"
    ```

    Se till att du ger ditt engagemang ett bra namn, både för din skull och för underhållaren av repan du hjälper till med.

1. **Kombinera ditt arbete med "main"**. Vid något tillfälle är du klar med arbetet och du vill kombinera ditt arbete med det i `main`. `main` kan ha ändrats under tiden så se till att du först uppdaterar den till den senaste med följande kommandon:

    ``` bash
    git switch main
    git pull
    ```

    Vid det här laget vill du försäkra dig om att eventuella _konflikter_, situationer där Git inte enkelt kan _kombinera_ ändringarna sker i din branch. Kör därför följande kommandon:

    ``` bash
    git switch [branch_name]
    git merge main
    ```

    Detta kommer att ta in alla förändringar från "main" i din gren och förhoppningsvis kan du bara fortsätta. Om inte, kommer VS Code att berätta var Git är _confused_ och du ändrar bara de berörda filerna för att säga vilket innehåll som är mest korrekt.

1. **Skicka ditt arbete till GitHub**. Att skicka ditt arbete till GitHub betyder två saker. Laddar upp din branch till ditt repo och öppnar sedan en PR, Pull Request.

    ``` bash
    git push --set-upstream origin [branch-name]
    ```

    Kommandot ovan skapar branchen på ditt delade repo.

1. **Öppna en PR**. Därefter vill du öppna upp en PR. Du gör detta genom att navigera till det delade repot på GitHub. Du kommer att se en indikation på GitHub där den frågar om du vill skapa en ny PR, du klickar på den och du kommer till ett gränssnitt där du kan ändra titeln på commit-meddelandet och ge den en mer passande beskrivning. Nu kommer underhållaren av repot du forka se denna PR och _håller tummarna_ de kommer att uppskatta och _merge_ din PR. Du är nu en bidragsgivare, yay :)

1. **Städa upp**. Det anses vara bra att _städa upp_ efter att du lyckats slå samman en PR. Du vill städa upp både din lokala filial och filialen du skickade till GitHub. Låt oss först ta bort det lokalt med följande kommando:

   ``` bash
   git branch -d [grennamn]
   ```

   Se till att du går till GitHub-sidan för det forkade repot härnäst och tar bort den fjärranslutna grenen du just tryckte till den.

'Pull request' verkar vara en dum term eftersom du verkligen vill driva dina ändringar i projektet. Men underhållaren (projektägaren) eller kärnteamet måste överväga dina ändringar innan de sammanfogas med projektets "huvudgren", så du begär verkligen ett ändringsbeslut från en underhållare.

En pull request är platsen för att jämföra och diskutera skillnaderna som introduceras på en gren med recensioner, kommentarer, integrerade tester och mer. En bra pull request följer ungefär samma regler som ett commit-meddelande. Du kan lägga till en referens till ett issue i issue-trackern på Github repot, när ditt arbete till exempel fixar ett problem. Detta görs med ett `#` följt av numret på ditt problem. Till exempel "#97".

🤞 Håller tummarna för att alla kontroller går igenom och att projektägaren(arna) slår ihop dina ändringar i projektet🤞

Uppdatera din nuvarande lokala arbetsgren med alla nya commits från motsvarande fjärrgren på GitHub:

"git pull"

## Hur man bidrar till öppen källkod

Låt oss först hitta ett **repo** på GitHub som är intressant för dig och som du vill bidra med en förändring till. Du vill kopiera dess innehåll till din maskin.

✅ Ett bra sätt att hitta "nybörjarvänliga" repos är att [söka med taggen "good-first-issue"](https://github.blog/2020-01-22-browse-good-first-issues-att-börja-bidra-till-open-source/).

![Kopiera ett repo lokalt](images/clone_repo.png)

Det finns flera sätt att kopiera kod. Ett sätt är att "klona" innehållet i förvaret med hjälp av HTTPS, SSH eller med GitHub CLI (Command Line Interface).

Öppna din terminal och klona repot så här:
`git clone https://github.com/ProjectURL`

För att arbeta med projektet, byt till rätt mapp:
"cd ProjectURL".

Du kan också öppna hela projektet med hjälp av [Codespaces](https://github.com/features/codespaces), GitHubs inbäddade kodredigerare/molnutvecklingsmiljö eller [GitHub Desktop](https://desktop.github.com/ ).

Slutligen kan du ladda ner koden i en zippad mapp.

### Några fler intressanta saker om GitHub

Du kan stjärnmarkera, titta på och/eller "fork" alla offentliga arkiv på GitHub. Du kan hitta dina stjärnmärkta arkiv i rullgardinsmenyn uppe till höger. Det är som att bokmarkera fast med kod.

Projekt har en issue-tracker, mestadels på GitHub på fliken "Issues" om inte annat anges, där utvecklare diskuterar frågor relaterade till projektet. Och fliken Pull Requests är där utvecklare diskuterar och granskar ändringar som pågår.

Projekt kan också ha diskussioner i forum, e-postlistor eller chattkanaler som Slack, Discord eller IRC.

✅ Ta en titt runt ditt nya GitHub-repo och prova några saker, som att redigera inställningar, lägga till information till ditt repo och skapa ett projekt (som en Kanban-bräda). Det finns mycket du kan göra!

---

## 🚀 Utmaning

Para ihop med en vän för att arbeta med varandras kod. Skapa ett projekt tillsammans, dela kod, skapa branches och slå samman ändringar.

## Quiz efter föreläsningen
[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/4)

## Recension och självstudier

Läs mer om [att bidra till programvara med öppen källkod](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).

[Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/).

Öva, öva, öva. GitHub har fantastiska inlärningsvägar tillgängliga via [lab.github.com](https://lab.github.com/):

- [Första veckan på GitHub](https://lab.github.com/githubtraining/first-week-on-github)

Du hittar också mer avancerade labbar.

## Uppgift

Slutför [första veckan på GitHub-träningslabbet](https://lab.github.com/githubtraining/first-week-on-github)