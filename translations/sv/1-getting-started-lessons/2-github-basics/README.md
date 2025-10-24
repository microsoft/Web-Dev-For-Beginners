<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "acad15f3164cd6348e065ff38619aae9",
  "translation_date": "2025-10-23T21:33:03+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "sv"
}
-->
# Introduktion till GitHub

Hej där, framtida utvecklare! 👋 Är du redo att ansluta dig till miljontals kodare runt om i världen? Jag är verkligen exalterad över att få introducera dig till GitHub – tänk på det som en social medieplattform för programmerare, fast istället för att dela bilder på din lunch, delar vi kod och skapar fantastiska saker tillsammans!

Här är något som verkligen fascinerar mig: varje app på din telefon, varje webbplats du besöker och de flesta verktyg du kommer att lära dig att använda har byggts av team av utvecklare som samarbetar på plattformar precis som GitHub. Den där musikappen du älskar? Någon som du har bidragit till den. Det där spelet du inte kan sluta spela? Japp, förmodligen byggt med hjälp av GitHub-samarbete. Och nu ska DU lära dig hur du blir en del av den fantastiska gemenskapen!

Jag vet att det kan kännas överväldigande i början – jag minns själv hur jag stirrade på min första GitHub-sida och tänkte "Vad i hela friden betyder allt detta?" Men här är grejen: varje enskild utvecklare började precis där du är just nu. I slutet av den här lektionen kommer du att ha ditt alldeles egna GitHub-repository (tänk på det som din personliga projektportfölj i molnet), och du kommer att veta hur du sparar ditt arbete, delar det med andra och till och med bidrar till projekt som används av miljontals människor.

Vi ska ta den här resan tillsammans, steg för steg. Ingen stress, ingen press – bara du, jag och några riktigt coola verktyg som snart kommer att bli dina nya bästa vänner!

![Intro till GitHub](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.sv.png)
> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz före föreläsningen
[Quiz före föreläsningen](https://ff-quizzes.netlify.app)

## Introduktion

Innan vi dyker in i det riktigt spännande, låt oss göra din dator redo för lite GitHub-magi! Tänk på det som att organisera dina konstnärsmaterial innan du skapar ett mästerverk – att ha rätt verktyg redo gör allt så mycket smidigare och mycket roligare.

Jag kommer att guida dig genom varje steg i installationen personligen, och jag lovar att det inte är så skrämmande som det kan verka vid första anblicken. Om något inte klickar direkt, är det helt normalt! Jag minns när jag satte upp min första utvecklingsmiljö och kände mig som om jag försökte läsa antika hieroglyfer. Varje enskild utvecklare har varit precis där du är just nu, undrande om de gör rätt. Spoiler: om du är här och lär dig, gör du redan rätt! 🌟

I den här lektionen kommer vi att täcka:

- hur du spårar det arbete du gör på din dator
- hur du arbetar med projekt tillsammans med andra
- hur du bidrar till öppen källkod

### Förkunskaper

Låt oss göra din dator redo för lite GitHub-magi! Oroa dig inte – den här installationen behöver du bara göra en gång, och sedan är du redo för hela din kodningsresa.

Okej, låt oss börja med grunden! Först måste vi kontrollera om Git redan finns på din dator. Git är i princip som att ha en superintelligent assistent som kommer ihåg varje liten ändring du gör i din kod – mycket bättre än att frenetiskt trycka på Ctrl+S varannan sekund (vi har alla varit där!).

Låt oss se om Git redan är installerat genom att skriva detta magiska kommando i din terminal:
`git --version`

Om Git inte är där än, ingen fara! Gå bara till [ladda ner Git](https://git-scm.com/downloads) och hämta det. När du har installerat det, behöver vi introducera Git ordentligt för dig:

> 💡 **Första gången du ställer in**: Dessa kommandon berättar för Git vem du är. Den här informationen kommer att bifogas varje commit du gör, så välj ett namn och en e-postadress som du är bekväm med att dela offentligt.

```bash
git config --global user.name "your-name"
git config --global user.email "your-email"
```

För att kontrollera om Git redan är konfigurerat kan du skriva:
```bash
git config --list
```

Du behöver också ett GitHub-konto, en kodredigerare (som Visual Studio Code), och du måste öppna din terminal (eller: kommandotolken).

Gå till [github.com](https://github.com/) och skapa ett konto om du inte redan har ett, eller logga in och fyll i din profil.

💡 **Modernt tips**: Överväg att ställa in [SSH-nycklar](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) eller använda [GitHub CLI](https://cli.github.com/) för enklare autentisering utan lösenord.

✅ GitHub är inte det enda kodarkivet i världen; det finns andra, men GitHub är det mest kända.

### Förberedelse

Du behöver både en mapp med ett kodprojekt på din lokala dator (laptop eller PC) och ett offentligt repository på GitHub, som kommer att fungera som ett exempel på hur man bidrar till andras projekt.

### Håll din kod säker

Låt oss prata om säkerhet en stund – men oroa dig inte, vi ska inte överväldiga dig med skrämmande saker! Tänk på dessa säkerhetsrutiner som att låsa din bil eller ditt hus. Det är enkla vanor som blir en andra natur och håller ditt hårda arbete skyddat.

Vi kommer att visa dig moderna, säkra sätt att arbeta med GitHub redan från början. På så sätt utvecklar du goda vanor som kommer att tjäna dig väl under hela din kodningskarriär.

När du arbetar med GitHub är det viktigt att följa bästa praxis för säkerhet:

| Säkerhetsområde | Bästa praxis | Varför det är viktigt |
|-----------------|--------------|-----------------------|
| **Autentisering** | Använd SSH-nycklar eller personliga åtkomsttoken | Lösenord är mindre säkra och håller på att fasas ut |
| **Tvåfaktorsautentisering** | Aktivera 2FA på ditt GitHub-konto | Lägger till ett extra lager av kontoskydd |
| **Repository-säkerhet** | Lämna aldrig ut känslig information | API-nycklar och lösenord ska aldrig finnas i offentliga repos |
| **Hantering av beroenden** | Aktivera Dependabot för uppdateringar | Håller dina beroenden säkra och uppdaterade |

> ⚠️ **Viktig säkerhetspåminnelse**: Lämna aldrig ut API-nycklar, lösenord eller annan känslig information i något repository. Använd miljövariabler och `.gitignore`-filer för att skydda känsliga data.

**Modern autentiseringsinställning:**

```bash
# Generate SSH key (modern ed25519 algorithm)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Set up Git to use SSH
git remote set-url origin git@github.com:username/repository.git
```

> 💡 **Proffstips**: SSH-nycklar eliminerar behovet av att ange lösenord upprepade gånger och är säkrare än traditionella autentiseringsmetoder.

---

## Hantera din kod som ett proffs

Okej, NU blir det riktigt spännande! 🎉 Vi ska lära oss hur man spårar och hanterar sin kod som proffsen gör, och ärligt talat, det här är en av mina favoritgrejer att lära ut eftersom det är en riktig game-changer.

Föreställ dig detta: du skriver en fantastisk berättelse och vill hålla koll på varje utkast, varje briljant redigering och varje "vänta, det där är genialt!"-ögonblick längs vägen. Det är precis vad Git gör för din kod! Det är som att ha den mest otroliga tidsresande anteckningsboken som minns ALLT – varje tangenttryckning, varje ändring, varje "oj, det där förstörde allt"-ögonblick som du omedelbart kan ångra.

Jag ska vara ärlig – det kan kännas överväldigande i början. När jag började tänkte jag "Varför kan jag inte bara spara mina filer som vanligt?" Men lita på mig: när Git klickar för dig (och det kommer det!), kommer du att få en sådan där aha-upplevelse där du tänker "Hur har jag NÅGONSIN kunnat koda utan detta?" Det är som att upptäcka att du kan flyga när du har gått överallt hela ditt liv!

Låt oss säga att du har en mapp lokalt med ett kodprojekt och du vill börja spåra dina framsteg med hjälp av git – versionshanteringssystemet. Vissa människor jämför att använda git med att skriva ett kärleksbrev till sitt framtida jag. När du läser dina commit-meddelanden dagar, veckor eller månader senare kommer du att kunna minnas varför du tog ett beslut, eller "rulla tillbaka" en ändring – det vill säga, när du skriver bra "commit-meddelanden".

### Uppgift: Skapa ditt första repository!

> 🎯 **Din uppgift (och jag är så exalterad för din skull!)**: Vi ska skapa ditt allra första GitHub-repository tillsammans! När vi är klara här kommer du att ha din egen lilla hörna av internet där din kod bor, och du kommer att ha gjort din första "commit" (det är utvecklarspråk för att spara ditt arbete på ett riktigt smart sätt).
>
> Det här är ärligt talat ett så speciellt ögonblick – du är på väg att officiellt ansluta dig till den globala gemenskapen av utvecklare! Jag minns fortfarande spänningen när jag skapade mitt första repo och tänkte "Wow, jag gör verkligen det här!"

Låt oss gå igenom det här äventyret tillsammans, steg för steg. Ta din tid med varje del – det finns inget pris för att skynda sig, och jag lovar att varje steg kommer att vara logiskt. Kom ihåg, varje kodningsstjärna du beundrar satt en gång precis där du är nu, redo att skapa sitt första repository. Hur coolt är inte det?

> Titta på videon
> 
> [![Git och GitHub-grunder video](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

**Låt oss göra detta tillsammans:**

1. **Skapa ditt repository på GitHub**. Gå till GitHub.com och leta efter den ljusgröna **New**-knappen (eller **+**-symbolen längst upp till höger). Klicka på den och välj **New repository**.

   Så här gör du:
   1. Ge ditt repository ett namn – välj något som betyder något för dig!
   1. Lägg till en beskrivning om du vill (det hjälper andra att förstå vad ditt projekt handlar om)
   1. Bestäm om du vill att det ska vara offentligt (alla kan se det) eller privat (bara för dig)
   1. Jag rekommenderar att du kryssar i rutan för att lägga till en README-fil – det är som projektets framsida
   1. Klicka på **Create repository** och fira – du har precis skapat ditt första repo! 🎉

2. **Navigera till din projektmapp**. Nu ska vi öppna din terminal (oroa dig inte, det är inte så läskigt som det ser ut!). Vi måste berätta för din dator var dina projektfiler finns. Skriv detta kommando:

   ```bash
   cd [name of your folder]
   ```

   **Vad vi gör här:**
   - Vi säger i princip "Hej dator, ta mig till min projektmapp"
   - Det är som att öppna en specifik mapp på ditt skrivbord, men vi gör det med textkommandon
   - Ersätt `[name of your folder]` med det faktiska namnet på din projektmapp

3. **Förvandla din mapp till ett Git-repository**. Här händer magin! Skriv:

   ```bash
   git init
   ```

   **Här är vad som just hände (rätt coolt!):**
   - Git skapade precis en dold `.git`-mapp i ditt projekt – du kommer inte att se den, men den finns där!
   - Din vanliga mapp är nu ett "repository" som kan spåra varje ändring du gör
   - Tänk på det som att ge din mapp superkrafter för att komma ihåg allt

4. **Kolla vad som händer**. Låt oss se vad Git tycker om ditt projekt just nu:

   ```bash
   git status
   ```

   **Förstå vad Git säger till dig:**
   
   Du kanske ser något som ser ut så här:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git restore <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   **Ingen panik! Här är vad det betyder:**
   - Filer i **rött** är filer som har ändringar men inte är redo att sparas än
   - Filer i **grönt** (när du ser dem) är redo att sparas
   - Git är hjälpsam och berättar exakt vad du kan göra härnäst

   > 💡 **Proffstips**: Kommandot `git status` är din bästa vän! Använd det när du är osäker på vad som händer. Det är som att fråga Git "Hej, vad är läget just nu?"

5. **Gör dina filer redo att sparas** (detta kallas "staging"):

   ```bash
   git add .
   ```

   **Vad vi just gjorde:**
   - Vi sa till Git "Hej, jag vill inkludera ALLA mina filer i nästa sparning"
   - `.` är som att säga "allt i den här mappen"
   - Nu är dina filer "staged" och redo för nästa steg

   **Vill du vara mer selektiv?** Du kan lägga till bara specifika filer:

   ```bash
   git add [file or folder name]
   ```

   **Varför skulle du vilja göra detta?**
   - Ibland vill du spara relaterade ändringar tillsammans
   - Det hjälper dig att organisera ditt arbete i logiska delar
   - Gör det lättare att förstå vad som ändrades och när

   **Ångrat dig?** Ingen fara! Du kan ta bort filer från staging så här:

   ```bash
   # Unstage everything
   git reset
   
   # Unstage just one file
   git reset [file name]
   ```

   Oroa dig inte – detta raderar inte ditt arbete, det tar bara bort filer från "redo att spara"-högen.

6. **Spara ditt arbete permanent** (gör din första commit!):

   ```bash
   git commit -m "first commit"
   ```

   **🎉 Grattis! Du har just gjort din första commit!**
   
   **Här är vad som just hände:**
   - Git tog en "ögonblicksbild" av alla dina staged-filer vid just detta ögonblick
   - Ditt commit-meddelande "first commit" förklarar vad denna sparpunkt handlar om
   - Git gav denna ögonblicksbild ett unikt ID så att du alltid kan hitta den senare
   - Du har officiellt börjat spåra ditt projekts historia!

   > 💡 **Framtida commit-meddelanden**: För dina nästa commits, var mer beskrivande! Istället för "uppdaterade grejer", prova "Lägg till kontaktformulär på hemsidan" eller "Fixade bugg i navigationsmenyn". Ditt framtida jag kommer att tacka dig!

7. **Koppla ditt lokala projekt till GitHub**. Just nu finns ditt projekt bara på din dator. Låt oss koppla det till ditt GitHub-repository så att du kan dela det med världen!

   Först, gå till din GitHub-repository-sida och kopiera URL:en. Gå sedan tillbaka hit och skriv:

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```
   
   (Ersätt den URL:en med din faktiska repository-URL!)

   **Vad vi just gjorde:**
   - Vi skapade en koppling mellan ditt lokala projekt och ditt GitHub-repository.
   - "Origin" är bara ett smeknamn för ditt GitHub-repository – det är som att lägga till en kontakt i din telefon.
   - Nu vet ditt lokala Git var det ska skicka din kod när du är redo att dela den.

   💡 **Enklare sätt**: Om du har GitHub CLI installerat kan du göra detta med ett enda kommando:
   ```bash
   gh repo create my-repo --public --push --source=.
   ```

8. **Skicka din kod till GitHub** (den stora stunden!):

   ```bash
   git push -u origin main
   ```

   **🚀 Nu händer det! Du laddar upp din kod till GitHub!**
   
   **Vad som händer:**
   - Dina commits skickas från din dator till GitHub.
   - Flaggan `-u` skapar en permanent koppling så att framtida pushar blir enklare.
   - "main" är namnet på din primära branch (som huvudmappen).
   - Efter detta kan du bara skriva `git push` för framtida uppladdningar!

   💡 **Snabb notering**: Om din branch heter något annat (som "master"), använd det namnet istället. Du kan kontrollera med `git branch --show-current`.

9. **Din nya dagliga kodningsrytm** (det är här det blir beroendeframkallande!):

   Från och med nu, varje gång du gör ändringar i ditt projekt, har du denna enkla trestegsprocess:

   ```bash
   git add .
   git commit -m "describe what you changed"
   git push
   ```

   **Detta blir din kodningspuls:**
   - Gör några fantastiska ändringar i din kod ✨
   - Stagea dem med `git add` ("Hej Git, uppmärksamma dessa ändringar!")
   - Spara dem med `git commit` och en beskrivande meddelande (framtida du kommer att tacka dig!)
   - Dela dem med världen med `git push` 🚀
   - Upprepa – seriöst, detta blir lika naturligt som att andas!

   Jag älskar detta arbetsflöde eftersom det är som att ha flera sparpunkter i ett videospel. Gjorde du en ändring du älskar? Commita den! Vill du prova något riskabelt? Inga problem – du kan alltid gå tillbaka till din senaste commit om saker går snett!

   > 💡 **Tips**: Du kanske också vill använda en `.gitignore`-fil för att förhindra att filer du inte vill spåra dyker upp på GitHub - som den där anteckningsfilen du lagrar i samma mapp men som inte har någon plats i ett offentligt repository. Du kan hitta mallar för `.gitignore`-filer på [.gitignore templates](https://github.com/github/gitignore) eller skapa en med [gitignore.io](https://www.toptal.com/developers/gitignore).

#### Moderna Git-arbetsflöden

Överväg att använda dessa moderna metoder:

- **Conventional Commits**: Använd ett standardiserat format för commit-meddelanden som `feat:`, `fix:`, `docs:` osv. Läs mer på [conventionalcommits.org](https://www.conventionalcommits.org/)
- **Atomiska commits**: Låt varje commit representera en enda logisk ändring.
- **Frekventa commits**: Commita ofta med beskrivande meddelanden istället för stora, sällsynta commits.

#### Commit-meddelanden

En bra Git commit-rubrik avslutar följande mening:
Om den tillämpas kommer denna commit att <din rubrik här>

För rubriken, använd imperativ, presens: "ändra" inte "ändrade" eller "ändringar". 
Precis som i rubriken, använd också imperativ, presens i brödtexten (valfritt). Brödtexten bör inkludera motivationen för ändringen och kontrastera detta med tidigare beteende. Du förklarar `varför`, inte `hur`.

✅ Ta några minuter och surfa runt på GitHub. Kan du hitta ett riktigt bra commit-meddelande? Kan du hitta ett riktigt minimalt? Vilken information tycker du är mest viktig och användbar att förmedla i ett commit-meddelande?

## Att arbeta med andra (den roliga delen!)

Håll i hatten, för NU blir GitHub helt magiskt! 🪄 Du har bemästrat att hantera din egen kod, men nu dyker vi in i min absoluta favoritdel – att samarbeta med fantastiska människor från hela världen.

Föreställ dig detta: du vaknar imorgon och ser att någon i Tokyo har förbättrat din kod medan du sov. Sedan fixar någon i Berlin en bugg du har kämpat med. På eftermiddagen har en utvecklare i São Paulo lagt till en funktion du aldrig ens tänkt på. Det är inte science fiction – det är bara en vanlig tisdag i GitHub-universumet!

Det som verkligen gör mig exalterad är att de samarbetsfärdigheter du är på väg att lära dig? Det är EXAKT samma arbetsflöden som team på Google, Microsoft och dina favoritstartups använder varje dag. Du lär dig inte bara ett coolt verktyg – du lär dig det hemliga språket som får hela mjukvaruvärlden att samarbeta.

Seriöst, när du väl upplever känslan av att någon godkänner din första pull request, kommer du att förstå varför utvecklare blir så passionerade över öppen källkod. Det är som att vara en del av världens största, mest kreativa grupparbete!

> Titta på video
>
> [![Git och GitHub-grunder video](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

Huvudsyftet med att lägga upp saker på GitHub var att göra det möjligt att samarbeta med andra utvecklare.

I ditt repository, navigera till `Insights > Community` för att se hur ditt projekt jämför sig med rekommenderade gemenskapsstandarder.

Vill du få ditt repository att se professionellt och välkomnande ut? Gå till ditt repository och klicka på `Insights > Community`. Denna coola funktion visar dig hur ditt projekt jämför sig med vad GitHub-gemenskapen anser vara "bra repository-praktiker."

> 🎯 **Få ditt projekt att glänsa**: Ett välorganiserat repository med bra dokumentation är som att ha en ren, välkomnande butik. Det visar att du bryr dig om ditt arbete och får andra att vilja bidra!

**Detta gör ett repository fantastiskt:**

| Vad du ska lägga till | Varför det är viktigt | Vad det gör för dig |
|------------------------|-----------------------|---------------------|
| **Beskrivning** | Första intrycket är viktigt! | Folk vet direkt vad ditt projekt handlar om |
| **README** | Ditt projekts förstasida | Som en vänlig guide för nya besökare |
| **Riktlinjer för bidrag** | Visar att du välkomnar hjälp | Folk vet exakt hur de kan hjälpa dig |
| **Uppförandekod** | Skapar en vänlig miljö | Alla känner sig välkomna att delta |
| **Licens** | Juridisk klarhet | Andra vet hur de kan använda din kod |
| **Säkerhetspolicy** | Visar att du är ansvarsfull | Demonstrerar professionella metoder |

> 💡 **Proffstips**: GitHub tillhandahåller mallar för alla dessa filer. När du skapar ett nytt repository, markera rutorna för att automatiskt generera dessa filer.

**Moderna GitHub-funktioner att utforska:**

🤖 **Automation & CI/CD:**
- **GitHub Actions** för automatiserad testning och distribution.
- **Dependabot** för automatiska uppdateringar av beroenden.

💬 **Gemenskap & Projektledning:**
- **GitHub Discussions** för gemenskapskonversationer utöver issues.
- **GitHub Projects** för projektledning i kanban-stil.
- **Regler för branch-skydd** för att upprätthålla kodkvalitetsstandarder.

Alla dessa resurser kommer att gynna onboarding av nya teammedlemmar. Och det är vanligtvis sådana saker som nya bidragsgivare tittar på innan de ens tittar på din kod, för att ta reda på om ditt projekt är rätt plats för dem att spendera sin tid.

✅ README-filer, även om de tar tid att förbereda, förbises ofta av upptagna projektledare. Kan du hitta ett exempel på en särskilt beskrivande? Obs: det finns några [verktyg för att skapa bra README-filer](https://www.makeareadme.com/) som du kanske vill prova.

### Uppgift: Slå ihop lite kod

Bidragsdokument hjälper människor att bidra till projektet. Det förklarar vilka typer av bidrag du letar efter och hur processen fungerar. Bidragsgivare måste gå igenom en serie steg för att kunna bidra till ditt repository på GitHub:

1. **Forka ditt repository**. Du kommer förmodligen vilja att folk _forkar_ ditt projekt. Forkning innebär att skapa en kopia av ditt repository på deras GitHub-profil.
1. **Klona**. Därefter kommer de att klona projektet till sin lokala dator.
1. **Skapa en branch**. Du vill be dem att skapa en _branch_ för sitt arbete.
1. **Fokusera sin ändring på ett område**. Be bidragsgivare att koncentrera sina bidrag på en sak i taget – på så sätt ökar chansen att du kan _slå ihop_ deras arbete. Tänk dig att de fixar en bugg, lägger till en ny funktion och uppdaterar flera tester – vad händer om du vill, eller bara kan implementera 2 av 3, eller 1 av 3 ändringar?

✅ Föreställ dig en situation där branches är särskilt viktiga för att skriva och leverera bra kod. Vilka användningsområden kan du komma på?

> Observera, var den förändring du vill se i världen och skapa branches för ditt eget arbete också. Alla commits du gör kommer att göras på den branch du för närvarande är "utcheckad" till. Använd `git status` för att se vilken branch det är.

Låt oss gå igenom ett arbetsflöde för bidragsgivare. Anta att bidragsgivaren redan har _forkat_ och _klonat_ repositoryt så att de har ett Git-repository redo att arbeta med på sin lokala dator:

1. **Skapa en branch**. Använd kommandot `git branch` för att skapa en branch som kommer att innehålla de ändringar de avser att bidra med:

   ```bash
   git branch [branch-name]
   ```

   > 💡 **Modern metod**: Du kan också skapa och byta till den nya branchen med ett enda kommando:
   ```bash
   git switch -c [branch-name]
   ```

1. **Byt till arbetsbranch**. Byt till den angivna branchen och uppdatera arbetskatalogen med `git switch`:

   ```bash
   git switch [branch-name]
   ```

   > 💡 **Modern notering**: `git switch` är den moderna ersättningen för `git checkout` när du byter branch. Det är tydligare och säkrare för nybörjare.

1. **Utför arbete**. Vid denna punkt vill du lägga till dina ändringar. Glöm inte att informera Git om det med följande kommandon:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   > ⚠️ **Kvalitet på commit-meddelanden**: Se till att du ger din commit ett bra namn, både för din egen skull och för projektledaren för repositoryt du hjälper till med. Var specifik om vad du ändrade!

1. **Kombinera ditt arbete med `main`-branchen**. Vid något tillfälle är du klar med ditt arbete och vill kombinera det med `main`-branchen. `main`-branchen kan ha ändrats under tiden, så se till att du först uppdaterar den till det senaste med följande kommandon:

   ```bash
   git switch main
   git pull
   ```

   Vid denna punkt vill du se till att eventuella _konflikter_, situationer där Git inte enkelt kan _kombinera_ ändringarna, uppstår i din arbetsbranch. Kör därför följande kommandon:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Kommandot `git merge main` kommer att ta in alla ändringar från `main` till din branch. Förhoppningsvis kan du bara fortsätta. Om inte, kommer VS Code att visa dig var Git är _förvirrad_ och du kan ändra de berörda filerna för att ange vilket innehåll som är mest korrekt.

   💡 **Modern alternativ**: Överväg att använda `git rebase` för en renare historik:
   ```bash
   git rebase main
   ```
   Detta spelar upp dina commits ovanpå den senaste main-branchen och skapar en linjär historik.

1. **Skicka ditt arbete till GitHub**. Att skicka ditt arbete till GitHub innebär två saker. Att pusha din branch till ditt repository och sedan öppna en PR, Pull Request.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   Kommandot ovan skapar branchen på ditt forkade repository.

1. **Öppna en PR**. Nästa steg är att öppna en PR. Du gör det genom att navigera till det forkade repositoryt på GitHub. Du kommer att se en indikation på GitHub där det frågar om du vill skapa en ny PR, du klickar på det och tas till ett gränssnitt där du kan ändra commit-meddelandets titel, ge det en mer lämplig beskrivning. Nu kommer projektledaren för det repository du forkade att se denna PR och _håller tummarna_ att de uppskattar och _slår ihop_ din PR. Du är nu en bidragsgivare, yay :)

   💡 **Modernt tips**: Du kan också skapa PRs med hjälp av GitHub CLI:
   ```bash
   gh pr create --title "Your PR title" --body "Description of changes"
   ```

   🔧 **Bästa praxis för PRs**:
   - Länka till relaterade issues med nyckelord som "Fixes #123".
   - Lägg till skärmdumpar för UI-ändringar.
   - Begär specifika granskare.
   - Använd utkast-PRs för pågående arbete.
   - Se till att alla CI-kontroller passerar innan du begär granskning.

1. **Rensa upp**. Det anses vara god praxis att _rensa upp_ efter att du framgångsrikt har slagit ihop en PR. Du vill rensa både din lokala branch och den branch du pushade till GitHub. Först, ta bort den lokalt med följande kommando:

   ```bash
   git branch -d [branch-name]
   ```

   Se till att du går till GitHub-sidan för det forkade repositoryt och tar bort den fjärrstyrda branchen du just pushade till det.

`Pull request` verkar som en konstig term eftersom du egentligen vill pusha dina ändringar till projektet. Men projektledaren (projektägaren) eller kärnteamet behöver överväga dina ändringar innan de slår ihop dem med projektets "main"-branch, så du begär egentligen ett beslut om ändringsförslag från en projektledare.

En pull request är platsen för att jämföra och diskutera skillnaderna som introduceras på en branch med granskningar, kommentarer, integrerade tester och mer. En bra pull request följer ungefär samma regler som ett commit-meddelande. Du kan lägga till en referens till ett issue i issue-tracker, när ditt arbete till exempel löser ett problem. Detta görs med ett `#` följt av numret på ditt issue. Till exempel `#97`.
🤞Håller tummarna att alla kontroller går igenom och att projektägaren/-ägarna slår ihop dina ändringar med projektet🤞

Uppdatera din aktuella lokala arbetsgren med alla nya commits från motsvarande fjärrgren på GitHub:

`git pull`

## Bidra till Open Source (Din chans att göra skillnad!)

Är du redo för något som kommer att blåsa dig av stolen? 🤯 Låt oss prata om att bidra till open source-projekt – jag får gåshud bara av att tänka på att dela detta med dig!

Det här är din chans att bli en del av något verkligen extraordinärt. Tänk dig att förbättra verktyg som miljontals utvecklare använder varje dag, eller att fixa en bugg i en app som dina vänner älskar. Det är inte bara en dröm – det är vad open source-bidrag handlar om!

Här är vad som ger mig rysningar varje gång jag tänker på det: varje verktyg du har lärt dig att använda – din kodredigerare, de ramverk vi kommer att utforska, till och med webbläsaren du läser detta i – började med någon precis som du som gjorde sitt allra första bidrag. Den briljanta utvecklaren som byggde din favorit-VS Code-tillägg? De var en gång nybörjare som klickade på "create pull request" med skakiga händer, precis som du är på väg att göra.

Och här är det vackraste: open source-communityn är som internetets största gruppkram. De flesta projekt letar aktivt efter nykomlingar och har problem taggade "good first issue" specifikt för personer som du! Underhållare blir genuint glada när de ser nya bidragsgivare eftersom de minns sina egna första steg.

Du lär dig inte bara att koda här – du förbereder dig för att gå med i en global familj av skapare som vaknar varje dag och tänker "Hur kan vi göra den digitala världen lite bättre?" Välkommen till klubben! 🌟

Först, låt oss hitta ett repository (eller **repo**) på GitHub som intresserar dig och som du vill bidra med en ändring till. Du kommer att vilja kopiera dess innehåll till din dator.

✅ Ett bra sätt att hitta 'nybörjarvänliga' repos är att [söka efter taggen 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Kopiera ett repo lokalt](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.sv.png)

Det finns flera sätt att kopiera kod. Ett sätt är att "klona" innehållet i repositoryn, med hjälp av HTTPS, SSH eller GitHub CLI (Command Line Interface).

Öppna din terminal och klona repositoryn så här:
```bash
# Using HTTPS
git clone https://github.com/ProjectURL

# Using SSH (requires SSH key setup)
git clone git@github.com:username/repository.git

# Using GitHub CLI
gh repo clone username/repository
```

För att arbeta med projektet, byt till rätt mapp:
`cd ProjectURL`

Du kan också öppna hela projektet med:
- **[GitHub Codespaces](https://github.com/features/codespaces)** - GitHubs molnutvecklingsmiljö med VS Code i webbläsaren
- **[GitHub Desktop](https://desktop.github.com/)** - En GUI-applikation för Git-operationer  
- **[GitHub.dev](https://github.dev)** - Tryck på `.`-tangenten på valfri GitHub-repo för att öppna VS Code i webbläsaren
- **VS Code** med GitHub Pull Requests-tillägget

Slutligen kan du ladda ner koden i en zippad mapp.

### Några fler intressanta saker om GitHub

Du kan stjärnmärka, bevaka och/eller "forka" valfri offentlig repository på GitHub. Du hittar dina stjärnmärkta repositories i rullgardinsmenyn längst upp till höger. Det är som att bokmärka, fast för kod.

Projekt har en problemspårare, oftast på GitHub i fliken "Issues" om inte annat anges, där folk diskuterar problem relaterade till projektet. Och fliken Pull Requests är där folk diskuterar och granskar ändringar som är på gång.

Projekt kan också ha diskussioner i forum, e-postlistor eller chattkanaler som Slack, Discord eller IRC.

🔧 **Moderna GitHub-funktioner**:
- **GitHub Discussions** - Inbyggt forum för community-konversationer
- **GitHub Sponsors** - Stöd underhållare ekonomiskt  
- **Security tab** - Rapporter om sårbarheter och säkerhetsrådgivningar
- **Actions tab** - Se automatiserade arbetsflöden och CI/CD-pipelines
- **Insights tab** - Analys om bidragsgivare, commits och projektets hälsa
- **Projects tab** - GitHubs inbyggda projektledningsverktyg

✅ Utforska din nya GitHub-repo och prova några saker, som att redigera inställningar, lägga till information i din repo, skapa ett projekt (som en Kanban-tavla) och ställa in GitHub Actions för automatisering. Det finns mycket du kan göra!

---

## 🚀 Utmaning 

Okej, det är dags att sätta dina nya GitHub-superkrafter på prov! 🚀 Här är en utmaning som kommer att få allt att klicka på det mest tillfredsställande sättet:

Ta med en vän (eller den familjemedlem som alltid frågar vad du håller på med med allt detta "datorgrejs") och ge er ut på ett gemensamt kodningsäventyr tillsammans! Här händer den verkliga magin – skapa ett projekt, låt dem forka det, skapa några grenar och slå ihop ändringar som de proffs ni håller på att bli.

Jag ska inte ljuga – ni kommer förmodligen att skratta vid något tillfälle (särskilt när ni båda försöker ändra samma rad), kanske klia er i huvudet av förvirring, men ni kommer definitivt att ha de där fantastiska "aha!"-ögonblicken som gör allt lärande värt det. Dessutom finns det något speciellt med att dela den första lyckade sammanslagningen med någon annan – det är som en liten fest för hur långt ni har kommit!

Har du ingen kodningskompis än? Ingen fara! GitHub-communityn är full av otroligt välkomnande människor som minns hur det var att vara ny. Leta efter repositories med etiketten "good first issue" – de säger i princip "Hej nybörjare, kom och lär dig med oss!" Hur fantastiskt är inte det?

## Quiz efter föreläsningen
[Quiz efter föreläsningen](https://ff-quizzes.netlify.app/web/en/)

## Granska & Fortsätt Lära

Puh! 🎉 Titta på dig – du har precis bemästrat GitHub-grunderna som en riktig mästare! Om din hjärna känns lite full just nu, är det helt normalt och ärligt talat ett bra tecken. Du har precis lärt dig verktyg som tog mig veckor att känna mig bekväm med när jag började.

Git och GitHub är otroligt kraftfulla (alltså, verkligen kraftfulla), och varje utvecklare jag känner – inklusive de som verkar som trollkarlar nu – var tvungna att öva och snubbla runt lite innan allt föll på plats. Det faktum att du har tagit dig igenom denna lektion betyder att du redan är på väg att bemästra några av de viktigaste verktygen i en utvecklares verktygslåda.

Här är några helt fantastiska resurser för att hjälpa dig att öva och bli ännu mer fantastisk:

- [Guide för att bidra till open source-programvara](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution) – Din vägkarta till att göra skillnad
- [Git fusklapp](https://training.github.com/downloads/github-git-cheat-sheet/) – Ha denna till hands för snabb referens!

Och kom ihåg: övning ger framsteg, inte perfektion! Ju mer du använder Git och GitHub, desto mer naturligt blir det. GitHub har skapat några fantastiska interaktiva kurser som låter dig öva i en säker miljö:

- [Introduktion till GitHub](https://github.com/skills/introduction-to-github)
- [Kommunicera med Markdown](https://github.com/skills/communicate-using-markdown)  
- [GitHub Pages](https://github.com/skills/github-pages)
- [Hantera sammanslagningskonflikter](https://github.com/skills/resolve-merge-conflicts)

**Känner du dig äventyrlig? Kolla in dessa moderna verktyg:**
- [GitHub CLI-dokumentation](https://cli.github.com/manual/) – För när du vill känna dig som en kommandoradstrollkarl
- [GitHub Codespaces-dokumentation](https://docs.github.com/en/codespaces) – Koda i molnet!
- [GitHub Actions-dokumentation](https://docs.github.com/en/actions) – Automatisera allt
- [Git bästa praxis](https://www.atlassian.com/git/tutorials/comparing-workflows) – Höj din arbetsflödesnivå 

## GitHub Copilot Agent-utmaning 🚀

Använd Agent-läget för att slutföra följande utmaning:

**Beskrivning:** Skapa ett samarbetsprojekt för webbutveckling som demonstrerar hela GitHub-arbetsflödet du har lärt dig i denna lektion. Denna utmaning hjälper dig att öva på att skapa repositories, samarbetsfunktioner och moderna Git-arbetsflöden i ett verkligt scenario.

**Uppgift:** Skapa en ny offentlig GitHub-repository för ett enkelt projekt "Webbutvecklingsresurser". Repositoryn ska innehålla en välstrukturerad README.md-fil som listar användbara verktyg och resurser för webbutveckling, organiserade efter kategorier (HTML, CSS, JavaScript, etc.). Ställ in repositoryn med korrekta community-standarder inklusive en licens, riktlinjer för att bidra och en uppförandekod. Skapa minst två funktionsgrenar: en för att lägga till CSS-resurser och en annan för JavaScript-resurser. Gör commits till varje gren med beskrivande commit-meddelanden, skapa sedan pull requests för att slå ihop ändringarna tillbaka till main. Aktivera GitHub-funktioner som Issues, Discussions och ställ in ett grundläggande GitHub Actions-arbetsflöde för automatiska kontroller.

## Uppgift 

Din uppgift, om du väljer att acceptera den: Slutför kursen [Introduktion till GitHub](https://github.com/skills/introduction-to-github) på GitHub Skills. Denna interaktiva kurs låter dig öva på allt du har lärt dig i en säker, guidad miljö. Dessutom får du en cool badge när du är klar! 🏅

**Känner du dig redo för fler utmaningar?**
- Ställ in SSH-autentisering för ditt GitHub-konto (inga fler lösenord!)
- Prova att använda GitHub CLI för dina dagliga Git-operationer
- Skapa en repository med ett GitHub Actions-arbetsflöde
- Utforska GitHub Codespaces genom att öppna just denna repository i en molnbaserad editor

Kom ihåg: varje expert var en gång nybörjare. Du klarar det! 💪

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.