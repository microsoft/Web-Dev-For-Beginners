<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "acad15f3164cd6348e065ff38619aae9",
  "translation_date": "2025-10-23T21:58:46+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "da"
}
-->
# Introduktion til GitHub

Hej der, fremtidige udvikler! 👋 Klar til at slutte dig til millioner af kodere verden over? Jeg er virkelig begejstret for at introducere dig til GitHub – tænk på det som en social medieplatform for programmører, bortset fra at vi deler kode og skaber fantastiske ting sammen i stedet for at dele billeder af vores frokost!

Her er noget, der virkelig blæser mig omkuld: hver app på din telefon, hver hjemmeside du besøger, og de fleste af de værktøjer, du vil lære at bruge, er bygget af teams af udviklere, der samarbejder på platforme som GitHub. Den musikapp, du elsker? Nogen som dig har bidraget til den. Det spil, du ikke kan lægge fra dig? Jep, sandsynligvis bygget med GitHub-samarbejde. Og nu skal DU lære, hvordan du bliver en del af det fantastiske fællesskab!

Jeg ved, det kan føles som meget i starten – jeg husker selv, hvordan jeg stirrede på min første GitHub-side og tænkte "Hvad i alverden betyder alt dette?" Men her er sagen: hver eneste udvikler startede præcis der, hvor du er lige nu. Ved slutningen af denne lektion vil du have din helt egen GitHub-repository (tænk på det som din personlige projektudstilling i skyen), og du vil vide, hvordan du gemmer dit arbejde, deler det med andre og endda bidrager til projekter, som millioner af mennesker bruger.

Vi tager denne rejse sammen, skridt for skridt. Ingen hast, ingen pres – bare dig, mig og nogle virkelig seje værktøjer, der snart bliver dine nye bedste venner!

![Intro til GitHub](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.da.png)
> Sketchnote af [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz før lektionen
[Quiz før lektionen](https://ff-quizzes.netlify.app)

## Introduktion

Før vi dykker ned i de virkelig spændende ting, skal vi gøre din computer klar til noget GitHub-magi! Tænk på det som at organisere dine kunstforsyninger, før du skaber et mesterværk – at have de rigtige værktøjer klar gør alting så meget nemmere og meget sjovere.

Jeg vil personligt guide dig gennem hvert opsætningsskridt, og jeg lover, det er slet ikke så skræmmende, som det måske ser ud ved første øjekast. Hvis noget ikke giver mening med det samme, er det helt normalt! Jeg husker, da jeg satte mit første udviklingsmiljø op og følte, at jeg forsøgte at læse gamle hieroglyffer. Hver eneste udvikler har været præcis der, hvor du er lige nu, og undret sig over, om de gør det rigtigt. Spoiler alert: hvis du er her og lærer, gør du det allerede rigtigt! 🌟

I denne lektion vil vi dække:

- hvordan du sporer det arbejde, du laver på din maskine
- hvordan du arbejder på projekter med andre
- hvordan du bidrager til open source-software

### Forudsætninger

Lad os gøre din computer klar til noget GitHub-magi! Bare rolig – denne opsætning er noget, du kun behøver at gøre én gang, og så er du klar til hele din koderejse.

Okay, lad os starte med fundamentet! Først skal vi tjekke, om Git allerede er på din computer. Git er grundlæggende som at have en super-smart assistent, der husker hver eneste ændring, du laver i din kode – meget bedre end at trykke Ctrl+S hvert andet sekund (vi har alle været der!).

Lad os se, om Git allerede er installeret ved at skrive denne magiske kommando i din terminal:
`git --version`

Hvis Git ikke er der endnu, ingen problemer! Bare gå til [download Git](https://git-scm.com/downloads) og hent det. Når du har installeret det, skal vi introducere Git til dig ordentligt:

> 💡 **Første opsætning**: Disse kommandoer fortæller Git, hvem du er. Denne information vil blive knyttet til hver commit, du laver, så vælg et navn og en e-mail, du er komfortabel med at dele offentligt.

```bash
git config --global user.name "your-name"
git config --global user.email "your-email"
```

For at tjekke, om Git allerede er konfigureret, kan du skrive:
```bash
git config --list
```

Du skal også bruge en GitHub-konto, en kodeeditor (som Visual Studio Code), og du skal åbne din terminal (eller: kommandoprompt).

Naviger til [github.com](https://github.com/) og opret en konto, hvis du ikke allerede har en, eller log ind og udfyld din profil.

💡 **Moderne tip**: Overvej at opsætte [SSH-nøgler](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) eller bruge [GitHub CLI](https://cli.github.com/) for nemmere autentificering uden adgangskoder.

✅ GitHub er ikke det eneste koderepositorium i verden; der findes andre, men GitHub er det mest kendte.

### Forberedelse

Du skal bruge både en mappe med et kodeprojekt på din lokale maskine (laptop eller PC) og et offentligt repository på GitHub, som vil fungere som et eksempel på, hvordan man bidrager til andres projekter.

### Hold din kode sikker

Lad os tale om sikkerhed et øjeblik – men bare rolig, vi vil ikke overvælde dig med skræmmende ting! Tænk på disse sikkerhedspraksisser som at låse din bil eller dit hus. De er simple vaner, der bliver en selvfølge og holder dit hårde arbejde beskyttet.

Vi vil vise dig de moderne, sikre måder at arbejde med GitHub lige fra starten. På den måde vil du udvikle gode vaner, der vil tjene dig godt gennem hele din kodningskarriere.

Når du arbejder med GitHub, er det vigtigt at følge sikkerhedsbedste praksis:

| Sikkerhedsområde | Bedste praksis | Hvorfor det er vigtigt |
|------------------|----------------|-------------------------|
| **Autentificering** | Brug SSH-nøgler eller personlige adgangstokens | Adgangskoder er mindre sikre og udfases |
| **To-faktor autentificering** | Aktiver 2FA på din GitHub-konto | Tilføjer et ekstra lag af kontobeskyttelse |
| **Repository-sikkerhed** | Aldrig commit følsomme oplysninger | API-nøgler og adgangskoder bør aldrig være i offentlige repos |
| **Afhængighedsstyring** | Aktiver Dependabot for opdateringer | Holder dine afhængigheder sikre og opdaterede |

> ⚠️ **Kritisk sikkerhedspåmindelse**: Aldrig commit API-nøgler, adgangskoder eller andre følsomme oplysninger til noget repository. Brug miljøvariabler og `.gitignore`-filer til at beskytte følsomme data.

**Moderne autentificeringsopsætning:**

```bash
# Generate SSH key (modern ed25519 algorithm)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Set up Git to use SSH
git remote set-url origin git@github.com:username/repository.git
```

> 💡 **Pro Tip**: SSH-nøgler eliminerer behovet for gentagne adgangskoder og er mere sikre end traditionelle autentificeringsmetoder.

---

## Administrer din kode som en professionel

Okay, NU bliver det virkelig spændende! 🎉 Vi skal lære, hvordan man sporer og administrerer sin kode som de professionelle, og ærligt talt er dette en af mine yndlingsting at undervise i, fordi det er en total game-changer.

Forestil dig dette: du skriver en fantastisk historie, og du vil holde styr på hver udkast, hver genial redigering og hver "vent, det er genialt!"-øjeblik undervejs. Det er præcis, hvad Git gør for din kode! Det er som at have den mest utrolige tidsrejsende notesbog, der husker ALT – hver tastetryk, hver ændring, hver "ups, det ødelagde alt"-øjeblik, som du straks kan fortryde.

Jeg skal være ærlig – det kan føles overvældende i starten. Da jeg begyndte, tænkte jeg "Hvorfor kan jeg ikke bare gemme mine filer som normalt?" Men stol på mig: når Git klikker for dig (og det vil det!), vil du få en af de der lyspære-øjeblikke, hvor du tænker "Hvordan har jeg NOGENSINDE kodet uden dette?" Det er som at opdage, at du kan flyve, når du har gået overalt hele dit liv!

Lad os sige, at du har en mappe lokalt med et kodeprojekt, og du vil begynde at spore din fremgang ved hjælp af git – versionskontrolsystemet. Nogle mennesker sammenligner brugen af git med at skrive et kærlighedsbrev til dit fremtidige jeg. Når du læser dine commit-beskeder dage, uger eller måneder senere, vil du kunne huske, hvorfor du tog en beslutning, eller "rulle tilbage" en ændring – altså, når du skriver gode "commit-beskeder".

### Opgave: Opret dit første repository!

> 🎯 **Din mission (og jeg er så begejstret for dig!)**: Vi skal sammen oprette dit allerførste GitHub-repository! Når vi er færdige her, vil du have din egen lille hjørne af internettet, hvor din kode bor, og du vil have lavet din første "commit" (det er udvikler-sprog for at gemme dit arbejde på en virkelig smart måde).
>
> Dette er ærligt talt et helt specielt øjeblik – du er ved officielt at slutte dig til det globale fællesskab af udviklere! Jeg husker stadig spændingen ved at oprette mit første repo og tænke "Wow, jeg gør virkelig dette!"

Lad os gå igennem dette eventyr sammen, skridt for skridt. Tag dig god tid med hver del – der er ingen præmie for at skynde sig, og jeg lover, at hvert eneste skridt vil give mening. Husk, hver kodningsstjerne, du beundrer, har engang siddet præcis der, hvor du er, klar til at oprette deres første repository. Hvor sejt er det?

> Se video
> 
> [![Git og GitHub grundlæggende video](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

**Lad os gøre det sammen:**

1. **Opret dit repository på GitHub**. Gå til GitHub.com og kig efter den lysegrønne **Ny**-knap (eller **+**-tegnet i øverste højre hjørne). Klik på den og vælg **Nyt repository**.

   Her er, hvad du skal gøre:
   1. Giv dit repository et navn – gør det til noget, der betyder noget for dig!
   1. Tilføj en beskrivelse, hvis du vil (det hjælper andre med at forstå, hvad dit projekt handler om)
   1. Beslut, om du vil have det offentligt (alle kan se det) eller privat (kun for dig)
   1. Jeg anbefaler at markere boksen for at tilføje en README-fil – det er som forsiden af dit projekt
   1. Klik på **Opret repository** og fejre – du har lige oprettet dit første repo! 🎉

2. **Naviger til din projektmappe**. Nu skal vi åbne din terminal (bare rolig, det ser ikke så skræmmende ud!). Vi skal fortælle din computer, hvor dine projektfiler er. Skriv denne kommando:

   ```bash
   cd [name of your folder]
   ```

   **Hvad vi gør her:**
   - Vi siger grundlæggende "Hej computer, tag mig til min projektmappe"
   - Det er som at åbne en specifik mappe på dit skrivebord, men vi gør det med tekstkommandoer
   - Erstat `[navn på din mappe]` med det faktiske navn på din projektmappe

3. **Gør din mappe til et Git repository**. Her sker magien! Skriv:

   ```bash
   git init
   ```

   **Her er, hvad der lige skete (ret sejt!):**
   - Git har lige oprettet en skjult `.git`-mappe i dit projekt – du kan ikke se den, men den er der!
   - Din almindelige mappe er nu et "repository", der kan spore hver ændring, du laver
   - Tænk på det som at give din mappe superkræfter til at huske alt

4. **Tjek, hvad der sker**. Lad os se, hvad Git synes om dit projekt lige nu:

   ```bash
   git status
   ```

   **Forstå, hvad Git fortæller dig:**
   
   Du kan se noget, der ser sådan her ud:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git restore <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   **Ingen panik! Her er, hvad det betyder:**
   - Filer i **rødt** er filer, der har ændringer, men ikke er klar til at blive gemt endnu
   - Filer i **grønt** (når du ser dem) er klar til at blive gemt
   - Git er hjælpsom ved at fortælle dig præcis, hvad du kan gøre næste gang

   > 💡 **Pro tip**: Kommandoen `git status` er din bedste ven! Brug den, når du er forvirret over, hvad der foregår. Det er som at spørge Git "Hej, hvad er situationen lige nu?"

5. **Gør dine filer klar til at gemme** (det kaldes "staging"):

   ```bash
   git add .
   ```

   **Hvad vi lige gjorde:**
   - Vi fortalte Git "Hej, jeg vil inkludere ALLE mine filer i den næste gemning"
   - `.` er som at sige "alt i denne mappe"
   - Nu er dine filer "staged" og klar til næste trin

   **Vil du være mere selektiv?** Du kan tilføje kun specifikke filer:

   ```bash
   git add [file or folder name]
   ```

   **Hvorfor vil du måske gøre dette?**
   - Nogle gange vil du gemme relaterede ændringer sammen
   - Det hjælper dig med at organisere dit arbejde i logiske dele
   - Gør det lettere at forstå, hvad der ændrede sig og hvornår

   **Har du ombestemt dig?** Ingen problemer! Du kan fjerne filer fra staging som dette:

   ```bash
   # Unstage everything
   git reset
   
   # Unstage just one file
   git reset [file name]
   ```

   Bare rolig – dette sletter ikke dit arbejde, det fjerner bare filer fra "klar til at gemme"-bunken.

6. **Gem dit arbejde permanent** (lav din første commit!):

   ```bash
   git commit -m "first commit"
   ```

   **🎉 Tillykke! Du har lige lavet din første commit!**
   
   **Her er, hvad der lige skete:**
   - Git tog et "snapshot" af alle dine staged filer på dette præcise tidspunkt
   - Din commit-besked "første commit" forklarer, hvad dette gemmepunkt handler om
   - Git gav dette snapshot en unik ID, så du altid kan finde det senere
   - Du er officielt begyndt at spore din projekthistorik!

   > 💡 **Fremtidige commit-beskeder**: For dine næste commits, vær mere beskrivende! I stedet for "opdateret ting", prøv "Tilføj kontaktformular til hjemmeside" eller "Fix fejl i navigationsmenu". Dit fremtidige jeg vil takke dig!

7. **Forbind dit lokale projekt til GitHub**. Lige nu eksisterer dit projekt kun på din computer. Lad os forbinde det til dit GitHub-repository, så du kan dele det med verden!

   Først, gå til din GitHub repository-side og kopier URL'en. Gå derefter tilbage her og skriv:

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```
   
   (Erstat den URL med din faktiske repository-URL!)

   **Hvad vi lige gjorde:**
   - Vi har oprettet en forbindelse mellem dit lokale projekt og din GitHub-repository
   - "Origin" er bare et kælenavn for din GitHub-repository – det er som at tilføje en kontakt til din telefon
   - Nu ved din lokale Git, hvor den skal sende din kode, når du er klar til at dele den

   💡 **Nem løsning**: Hvis du har GitHub CLI installeret, kan du gøre dette med én kommando:
   ```bash
   gh repo create my-repo --public --push --source=.
   ```

8. **Send din kode til GitHub** (det store øjeblik!):

   ```bash
   git push -u origin main
   ```

   **🚀 Det er nu! Du uploader din kode til GitHub!**
   
   **Hvad der sker:**
   - Dine commits rejser fra din computer til GitHub
   - `-u` flaget opretter en permanent forbindelse, så fremtidige pushes bliver nemmere
   - "main" er navnet på din primære branch (som hovedmappen)
   - Efter dette kan du bare skrive `git push` for fremtidige uploads!

   💡 **Hurtig note**: Hvis din branch hedder noget andet (som "master"), skal du bruge det navn. Du kan tjekke med `git branch --show-current`.

9. **Din nye daglige kodningsrytme** (her bliver det vanedannende!):

   Fra nu af, hver gang du laver ændringer i dit projekt, har du denne enkle tre-trins dans:

   ```bash
   git add .
   git commit -m "describe what you changed"
   git push
   ```

   **Dette bliver din kodningspuls:**
   - Lav nogle fantastiske ændringer i din kode ✨
   - Stage dem med `git add` ("Hey Git, læg mærke til disse ændringer!")
   - Gem dem med `git commit` og en beskrivende besked (fremtidige dig vil takke dig!)
   - Del dem med verden ved hjælp af `git push` 🚀
   - Gentag – seriøst, det bliver lige så naturligt som at trække vejret!

   Jeg elsker denne arbejdsgang, fordi det er som at have flere gemmepunkter i et videospil. Lavede du en ændring, du elsker? Commit den! Vil du prøve noget risikabelt? Intet problem – du kan altid gå tilbage til din sidste commit, hvis tingene går galt!

   > 💡 **Tip**: Du vil måske også bruge en `.gitignore`-fil til at forhindre filer, du ikke vil tracke, i at dukke op på GitHub - som den notesfil, du gemmer i samme mappe, men som ikke hører hjemme i en offentlig repository. Du kan finde skabeloner til `.gitignore`-filer på [.gitignore templates](https://github.com/github/gitignore) eller oprette en ved hjælp af [gitignore.io](https://www.toptal.com/developers/gitignore).

#### Moderne Git-arbejdsgange

Overvej at tage disse moderne praksisser i brug:

- **Conventional Commits**: Brug et standardiseret format til commit-beskeder som `feat:`, `fix:`, `docs:` osv. Læs mere på [conventionalcommits.org](https://www.conventionalcommits.org/)
- **Atomiske commits**: Sørg for, at hver commit repræsenterer én logisk ændring
- **Hyppige commits**: Commit ofte med beskrivende beskeder i stedet for store, sjældne commits

#### Commit-beskeder

En god Git commit-emnelinje fuldender følgende sætning:
Hvis anvendt, vil denne commit <din emnelinje her>

Brug imperativ nutid: "ændre" i stedet for "ændrede" eller "ændringer". 
Som i emnet, brug også imperativ nutid i brødteksten (valgfrit). Brødteksten bør inkludere motivationen for ændringen og kontrastere dette med tidligere adfærd. Du forklarer `hvorfor`, ikke `hvordan`.

✅ Brug et par minutter på at surfe rundt på GitHub. Kan du finde en virkelig god commit-besked? Kan du finde en meget minimal en? Hvilke oplysninger synes du er de vigtigste og mest nyttige at formidle i en commit-besked?

## Arbejde med andre (Den sjove del!)

Hold på hat og briller, for HER bliver GitHub helt magisk! 🪄 Du har mestret at administrere din egen kode, men nu dykker vi ned i min absolutte yndlingsdel – samarbejde med fantastiske mennesker fra hele verden.

Forestil dig dette: Du vågner i morgen og ser, at nogen i Tokyo har forbedret din kode, mens du sov. Så fikser nogen i Berlin en fejl, du har været fastlåst på. Om eftermiddagen har en udvikler i São Paulo tilføjet en funktion, du aldrig engang havde tænkt på. Det er ikke science fiction – det er bare tirsdag i GitHub-universet!

Det, der virkelig begejstrer mig, er, at de samarbejdsevner, du er ved at lære? Det er PRÆCIS de samme arbejdsgange, som teams hos Google, Microsoft og dine yndlingsstartups bruger hver eneste dag. Du lærer ikke bare et sejt værktøj – du lærer det hemmelige sprog, der får hele softwareverdenen til at arbejde sammen.

Seriøst, når du oplever rusen ved at få nogen til at merge din første pull request, vil du forstå, hvorfor udviklere bliver så passionerede omkring open source. Det er som at være en del af verdens største, mest kreative teamprojekt!

> Se video
>
> [![Git og GitHub basics video](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

Hovedårsagen til at lægge ting på GitHub var at gøre det muligt at samarbejde med andre udviklere.

I din repository, naviger til `Insights > Community` for at se, hvordan dit projekt sammenlignes med anbefalede fællesskabsstandarder.

Vil du gøre din repository professionel og indbydende? Gå til din repository og klik på `Insights > Community`. Denne smarte funktion viser dig, hvordan dit projekt sammenlignes med, hvad GitHub-fællesskabet anser for "gode repository-praksisser."

> 🎯 **Få dit projekt til at skinne**: En velorganiseret repository med god dokumentation er som at have en ren, indbydende butik. Det viser folk, at du går op i dit arbejde og får andre til at ville bidrage!

**Her er, hvad der gør en repository fantastisk:**

| Hvad skal tilføjes | Hvorfor det er vigtigt | Hvad det gør for dig |
|--------------------|------------------------|----------------------|
| **Beskrivelse** | Førstehåndsindtryk betyder noget! | Folk ved straks, hvad dit projekt gør |
| **README** | Dit projekts forside | Som en venlig guide for nye besøgende |
| **Retningslinjer for bidrag** | Viser, at du byder hjælp velkommen | Folk ved præcis, hvordan de kan hjælpe dig |
| **Adfærdskodeks** | Skaber et venligt miljø | Alle føler sig velkomne til at deltage |
| **Licens** | Juridisk klarhed | Andre ved, hvordan de kan bruge din kode |
| **Sikkerhedspolitik** | Viser, at du er ansvarlig | Demonstrerer professionelle praksisser |

> 💡 **Pro Tip**: GitHub tilbyder skabeloner til alle disse filer. Når du opretter en ny repository, skal du markere felterne for automatisk at generere disse filer.

**Moderne GitHub-funktioner at udforske:**

🤖 **Automatisering & CI/CD:**
- **GitHub Actions** til automatiseret test og deployment
- **Dependabot** til automatiske opdateringer af afhængigheder

💬 **Fællesskab & projektstyring:**
- **GitHub Discussions** til fællesskabssamtaler ud over issues
- **GitHub Projects** til kanban-stil projektstyring
- **Branch-beskyttelsesregler** for at sikre kodekvalitetsstandarder

Alle disse ressourcer vil være til gavn for onboarding af nye teammedlemmer. Og det er typisk den slags ting, nye bidragydere kigger på, før de overhovedet ser på din kode, for at finde ud af, om dit projekt er det rette sted for dem at bruge deres tid.

✅ README-filer, selvom de tager tid at forberede, bliver ofte overset af travle vedligeholdere. Kan du finde et eksempel på en særlig beskrivende en? Bemærk: Der findes nogle [værktøjer til at hjælpe med at lave gode README'er](https://www.makeareadme.com/), som du måske vil prøve.

### Opgave: Merge noget kode

Bidragsdokumenter hjælper folk med at bidrage til projektet. Det forklarer, hvilke typer bidrag du leder efter, og hvordan processen fungerer. Bidragydere skal gennem en række trin for at kunne bidrage til din repo på GitHub:

1. **Fork din repo**. Du vil sandsynligvis gerne have, at folk _forker_ dit projekt. Forking betyder at oprette en kopi af din repository på deres GitHub-profil.
1. **Clone**. Derfra vil de klone projektet til deres lokale maskine. 
1. **Opret en branch**. Du vil gerne bede dem om at oprette en _branch_ til deres arbejde. 
1. **Fokuser deres ændring på ét område**. Bed bidragydere om at koncentrere deres bidrag om én ting ad gangen - på den måde er chancerne for, at du kan _merge_ deres arbejde, højere. Forestil dig, at de skriver en fejlrettelse, tilføjer en ny funktion og opdaterer flere tests - hvad hvis du vil, eller kun kan implementere 2 ud af 3, eller 1 ud af 3 ændringer?

✅ Forestil dig en situation, hvor branches er særligt kritiske for at skrive og levere god kode. Hvilke anvendelsesscenarier kan du komme i tanke om?

> Bemærk, vær den forandring, du ønsker at se i verden, og opret branches til dit eget arbejde også. Enhver commit, du laver, vil blive lavet på den branch, du i øjeblikket er "checked out" til. Brug `git status` for at se, hvilken branch det er.

Lad os gennemgå en bidragsarbejdsgang. Antag, at bidragyderen allerede har _forket_ og _klonet_ repoen, så de har en Git-repo klar til at arbejde på, på deres lokale maskine:

1. **Opret en branch**. Brug kommandoen `git branch` til at oprette en branch, der vil indeholde de ændringer, de ønsker at bidrage med:

   ```bash
   git branch [branch-name]
   ```

   > 💡 **Moderne tilgang**: Du kan også oprette og skifte til den nye branch med én kommando:
   ```bash
   git switch -c [branch-name]
   ```

1. **Skift til arbejdsbranch**. Skift til den angivne branch og opdater arbejdsmappen med `git switch`:

   ```bash
   git switch [branch-name]
   ```

   > 💡 **Moderne note**: `git switch` er den moderne erstatning for `git checkout`, når du skifter branch. Det er mere klart og sikrere for begyndere.

1. **Arbejd**. På dette tidspunkt vil du tilføje dine ændringer. Husk at fortælle Git om det med følgende kommandoer:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   > ⚠️ **Commit-beskedkvalitet**: Sørg for at give din commit et godt navn, både for din egen skyld og for vedligeholderen af repoen, du hjælper med. Vær specifik om, hvad du har ændret!

1. **Kombiner dit arbejde med `main`-branchen**. På et tidspunkt er du færdig med at arbejde, og du vil kombinere dit arbejde med det fra `main`-branchen. `main`-branchen kan have ændret sig i mellemtiden, så sørg for først at opdatere den til det nyeste med følgende kommandoer:

   ```bash
   git switch main
   git pull
   ```

   På dette tidspunkt vil du sikre dig, at eventuelle _konflikter_, situationer hvor Git ikke nemt kan _kombinere_ ændringerne, sker i din arbejdsbranch. Derfor skal du køre følgende kommandoer:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Kommandoen `git merge main` vil bringe alle ændringer fra `main` ind i din branch. Forhåbentlig kan du bare fortsætte. Hvis ikke, vil VS Code fortælle dig, hvor Git er _forvirret_, og du ændrer de berørte filer for at angive, hvilket indhold der er mest korrekt.

   💡 **Moderne alternativ**: Overvej at bruge `git rebase` for en renere historik:
   ```bash
   git rebase main
   ```
   Dette afspiller dine commits oven på den nyeste main-branch og skaber en lineær historik.

1. **Send dit arbejde til GitHub**. At sende dit arbejde til GitHub betyder to ting. At pushe din branch til din repo og derefter åbne en PR, Pull Request.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   Kommandoen ovenfor opretter branchen på din forkede repo.

1. **Åbn en PR**. Dernæst vil du åbne en PR. Det gør du ved at navigere til den forkede repo på GitHub. Du vil se en indikation på GitHub, hvor den spørger, om du vil oprette en ny PR, du klikker på det, og du bliver ført til en grænseflade, hvor du kan ændre commit-beskedens titel, give den en mere passende beskrivelse. Nu vil vedligeholderen af repoen, du forkede, se denne PR, og _fingers crossed_ vil de værdsætte og _merge_ din PR. Du er nu en bidragyder, yay :)

   💡 **Moderne tip**: Du kan også oprette PR'er ved hjælp af GitHub CLI:
   ```bash
   gh pr create --title "Your PR title" --body "Description of changes"
   ```

   🔧 **Bedste praksis for PR'er**:
   - Link til relaterede issues ved hjælp af nøgleord som "Fixes #123"
   - Tilføj screenshots for UI-ændringer
   - Anmod om specifikke reviewers
   - Brug draft PR'er til igangværende arbejde
   - Sørg for, at alle CI-tjek er bestået, før du anmoder om review

1. **Ryd op**. Det anses for god praksis at _rydde op_, efter du har fået succes med at merge en PR. Du vil rydde op i både din lokale branch og den branch, du pushede til GitHub. Først skal du slette den lokalt med følgende kommando: 

   ```bash
   git branch -d [branch-name]
   ```

   Sørg for at gå til GitHub-siden for den forkede repo bagefter og fjerne den eksterne branch, du lige har pushet til den.

`Pull request` virker som et fjollet udtryk, fordi du egentlig vil pushe dine ændringer til projektet. Men vedligeholderen (projektets ejer) eller kerneholdet skal overveje dine ændringer, før de merges med projektets "main"-branch, så du anmoder faktisk om en beslutning om ændringen fra en vedligeholder.  

En pull request er stedet, hvor man kan sammenligne og diskutere forskellene, der introduceres på en branch, med reviews, kommentarer, integrerede tests og mere. En god pull request følger stort set de samme regler som en commit-besked. Du kan tilføje en reference til et issue i issue-tracker, når dit arbejde for eksempel løser et issue. Dette gøres ved hjælp af et `#` efterfulgt af nummeret på dit issue. For eksempel `#97`.
🤞Krydser fingre for, at alle tjek går igennem, og projektets ejer(e) godkender dine ændringer og integrerer dem i projektet🤞

Opdater din nuværende lokale arbejdsgren med alle nye commits fra den tilsvarende fjerngren på GitHub:

`git pull`

## Bidrag til Open Source (Din Chance for at Gøre en Forskel!)

Er du klar til noget, der vil blæse dit sind? 🤯 Lad os tale om at bidrage til open source-projekter – jeg får gåsehud bare ved tanken om at dele dette med dig!

Dette er din chance for at blive en del af noget virkelig ekstraordinært. Forestil dig at forbedre de værktøjer, som millioner af udviklere bruger hver dag, eller rette en fejl i en app, som dine venner elsker. Det er ikke bare en drøm – det er, hvad open source-bidrag handler om!

Her er det, der giver mig kuldegysninger hver gang jeg tænker på det: hvert eneste værktøj, du har lært med – din kodeeditor, de frameworks vi vil udforske, endda den browser, du læser dette i – startede med en person præcis som dig, der lavede deres allerførste bidrag. Den geniale udvikler, der byggede din yndlings VS Code-udvidelse? De var engang en nybegynder, der nervøst klikkede på "create pull request", præcis som du er ved at gøre.

Og her er det smukkeste: open source-fællesskabet er som internettets største gruppekram. De fleste projekter leder aktivt efter nybegyndere og har problemer mærket "good first issue" specifikt for folk som dig! Maintainers bliver oprigtigt begejstrede, når de ser nye bidragsydere, fordi de husker deres egne første skridt.

Du lærer ikke bare at kode her – du forbereder dig på at blive en del af en global familie af skabere, der vågner op hver dag og tænker "Hvordan kan vi gøre den digitale verden lidt bedre?" Velkommen til klubben! 🌟

Først skal vi finde et repository (eller **repo**) på GitHub, som interesserer dig, og som du gerne vil bidrage med en ændring til. Du vil gerne kopiere dets indhold til din maskine.

✅ En god måde at finde 'begynder-venlige' repos er at [søge efter tagget 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Kopier et repo lokalt](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.da.png)

Der er flere måder at kopiere kode på. En måde er at "klone" indholdet af repositoryet ved hjælp af HTTPS, SSH eller GitHub CLI (Command Line Interface).

Åbn din terminal og klon repositoryet sådan her:
```bash
# Using HTTPS
git clone https://github.com/ProjectURL

# Using SSH (requires SSH key setup)
git clone git@github.com:username/repository.git

# Using GitHub CLI
gh repo clone username/repository
```

For at arbejde på projektet, skift til den rigtige mappe:
`cd ProjectURL`

Du kan også åbne hele projektet ved hjælp af:
- **[GitHub Codespaces](https://github.com/features/codespaces)** - GitHubs cloud-udviklingsmiljø med VS Code i browseren
- **[GitHub Desktop](https://desktop.github.com/)** - En GUI-applikation til Git-operationer  
- **[GitHub.dev](https://github.dev)** - Tryk på `.`-tasten på et hvilket som helst GitHub-repo for at åbne VS Code i browseren
- **VS Code** med GitHub Pull Requests-udvidelsen

Til sidst kan du downloade koden i en zip-mappe.

### Et par flere interessante ting om GitHub

Du kan stjerne, følge og/eller "forke" ethvert offentligt repository på GitHub. Du kan finde dine stjernemarkerede repositories i drop-down-menuen øverst til højre. Det er som bogmærker, men for kode.

Projekter har en problemtracker, som oftest på GitHub i "Issues"-fanen, medmindre andet er angivet, hvor folk diskuterer problemer relateret til projektet. Og fanen Pull Requests er, hvor folk diskuterer og gennemgår ændringer, der er undervejs.

Projekter kan også have diskussioner i fora, mailinglister eller chatkanaler som Slack, Discord eller IRC.

🔧 **Moderne GitHub-funktioner**:
- **GitHub Discussions** - Indbygget forum til fællesskabssamtaler
- **GitHub Sponsors** - Støt maintainers økonomisk  
- **Security tab** - Rapporter om sårbarheder og sikkerhedsrådgivning
- **Actions tab** - Se automatiserede workflows og CI/CD-pipelines
- **Insights tab** - Analyse af bidragsydere, commits og projektets sundhed
- **Projects tab** - GitHubs indbyggede projektstyringsværktøjer

✅ Tag et kig rundt i dit nye GitHub-repo og prøv et par ting, som at redigere indstillinger, tilføje information til dit repo, oprette et projekt (som et Kanban-board) og opsætte GitHub Actions til automatisering. Der er meget, du kan gøre!

---

## 🚀 Udfordring 

Okay, det er tid til at teste dine nye GitHub-superkræfter! 🚀 Her er en udfordring, der vil få det hele til at give mening på den mest tilfredsstillende måde:

Tag fat i en ven (eller det familiemedlem, der altid spørger, hvad du laver med alt det "computer-noget") og begiv jer ud på et samarbejdende kodeeventyr sammen! Her sker den ægte magi – opret et projekt, lad dem forke det, lav nogle grene og flet ændringer som de professionelle, I er ved at blive.

Jeg vil ikke lyve – I vil sandsynligvis grine på et tidspunkt (især når I begge prøver at ændre den samme linje), måske klø jer i hovedet af forvirring, men I vil helt sikkert have de fantastiske "aha!"-øjeblikke, der gør al læring det værd. Plus, der er noget særligt ved at dele den første vellykkede fletning med en anden – det er som en lille fejring af, hvor langt I er kommet!

Har du ikke en kodekammerat endnu? Ingen problemer! GitHub-fællesskabet er fyldt med utroligt imødekommende mennesker, der husker, hvordan det var at være ny. Kig efter repositories med "good first issue"-mærker – de siger i bund og grund "Hej nybegyndere, kom og lær med os!" Hvor fedt er det?

## Quiz efter forelæsning
[Quiz efter forelæsning](https://ff-quizzes.netlify.app/web/en/)

## Gennemgang & Fortsæt med at Lære

Pyha! 🎉 Se på dig – du har lige erobret GitHub-grundlæggende som en absolut mester! Hvis din hjerne føles lidt fyldt lige nu, er det helt normalt og ærligt talt et godt tegn. Du har lige lært værktøjer, der tog mig uger at føle mig komfortabel med, da jeg startede.

Git og GitHub er utroligt kraftfulde (som, virkelig kraftfulde), og hver udvikler jeg kender – inklusive dem, der nu virker som troldmænd – måtte øve sig og snuble lidt rundt, før det hele gav mening. Det faktum, at du er kommet igennem denne lektion, betyder, at du allerede er på vej til at mestre nogle af de vigtigste værktøjer i en udviklers værktøjskasse.

Her er nogle helt fantastiske ressourcer, der kan hjælpe dig med at øve dig og blive endnu mere fantastisk:

- [Guide til at bidrage til open source-software](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution) – Din køreplan til at gøre en forskel
- [Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/) – Hav denne ved hånden til hurtig reference!

Og husk: øvelse gør fremskridt, ikke perfektion! Jo mere du bruger Git og GitHub, jo mere naturligt bliver det. GitHub har skabt nogle fantastiske interaktive kurser, der lader dig øve dig i et sikkert miljø:

- [Introduktion til GitHub](https://github.com/skills/introduction-to-github)
- [Kommunikér ved hjælp af Markdown](https://github.com/skills/communicate-using-markdown)  
- [GitHub Pages](https://github.com/skills/github-pages)
- [Håndtering af fletningskonflikter](https://github.com/skills/resolve-merge-conflicts)

**Føler du dig eventyrlysten? Tjek disse moderne værktøjer:**
- [GitHub CLI-dokumentation](https://cli.github.com/manual/) – Når du vil føle dig som en kommandolinje-troldmand
- [GitHub Codespaces-dokumentation](https://docs.github.com/en/codespaces) – Kod i skyen!
- [GitHub Actions-dokumentation](https://docs.github.com/en/actions) – Automatiser alt
- [Git bedste praksis](https://www.atlassian.com/git/tutorials/comparing-workflows) – Forbedr din arbejdsgang

## GitHub Copilot Agent Udfordring 🚀

Brug Agent-tilstand til at fuldføre følgende udfordring:

**Beskrivelse:** Opret et samarbejdende webudviklingsprojekt, der demonstrerer den komplette GitHub-arbejdsgang, du har lært i denne lektion. Denne udfordring vil hjælpe dig med at øve repository-oprettelse, samarbejdsfunktioner og moderne Git-arbejdsgange i et virkeligt scenarie.

**Opgave:** Opret et nyt offentligt GitHub-repository til et simpelt "Web Development Resources"-projekt. Repositoryet skal inkludere en velstruktureret README.md-fil, der lister nyttige webudviklingsværktøjer og ressourcer, organiseret efter kategorier (HTML, CSS, JavaScript osv.). Opsæt repositoryet med korrekte fællesskabsstandarder, inklusive en licens, bidragsretningslinjer og en adfærdskodeks. Opret mindst to funktionsgrene: en til at tilføje CSS-ressourcer og en anden til JavaScript-ressourcer. Lav commits til hver gren med beskrivende commit-beskeder, og opret derefter pull requests for at flette ændringerne tilbage til main. Aktiver GitHub-funktioner som Issues, Discussions, og opsæt et grundlæggende GitHub Actions-workflow til automatiske tjek.

## Opgave 

Din mission, hvis du vælger at acceptere den: Fuldfør [Introduktion til GitHub](https://github.com/skills/introduction-to-github)-kurset på GitHub Skills. Dette interaktive kursus lader dig øve alt, hvad du har lært, i et sikkert, vejledt miljø. Plus, du får et sejt badge, når du er færdig! 🏅

**Føler du dig klar til flere udfordringer?**
- Opsæt SSH-autentifikation for din GitHub-konto (ikke flere adgangskoder!)
- Prøv at bruge GitHub CLI til dine daglige Git-operationer
- Opret et repository med et GitHub Actions-workflow
- Udforsk GitHub Codespaces ved at åbne netop dette repository i en cloud-baseret editor

Husk: hver ekspert var engang en nybegynder. Du kan klare det! 💪

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.