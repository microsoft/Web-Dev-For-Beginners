<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "acad15f3164cd6348e065ff38619aae9",
  "translation_date": "2025-10-23T22:22:15+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "no"
}
-->
# Introduksjon til GitHub

Hei der, fremtidige utvikler! 👋 Klar for å bli med millioner av kodere over hele verden? Jeg er virkelig spent på å introdusere deg for GitHub – tenk på det som en sosial medieplattform for programmerere, bortsett fra at vi deler kode og bygger fantastiske ting sammen i stedet for å dele bilder av lunsjen vår!

Her er noe som virkelig blåser meg av banen: hver app på telefonen din, hver nettside du besøker, og de fleste verktøyene du kommer til å lære å bruke, ble bygget av team av utviklere som samarbeidet på plattformer akkurat som GitHub. Den musikkappen du elsker? Noen som deg bidro til den. Det spillet du ikke kan legge fra deg? Jepp, sannsynligvis bygget med GitHub-samarbeid. Og nå skal DU lære hvordan du kan bli en del av det fantastiske fellesskapet!

Jeg vet at dette kan føles overveldende i starten – jeg husker selv da jeg stirret på min første GitHub-side og tenkte "Hva i all verden betyr dette?" Men her er greia: hver eneste utvikler startet akkurat der du er nå. Innen slutten av denne leksjonen vil du ha din egen GitHub-repository (tenk på det som din personlige prosjektutstilling i skyen), og du vil vite hvordan du lagrer arbeidet ditt, deler det med andre, og til og med bidrar til prosjekter som millioner av mennesker bruker.

Vi skal ta denne reisen sammen, ett steg av gangen. Ingen hastverk, ingen press – bare deg, meg, og noen virkelig kule verktøy som snart kommer til å bli dine nye bestevenner!

![Intro til GitHub](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.no.png)
> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz før leksjonen
[Quiz før leksjonen](https://ff-quizzes.netlify.app)

## Introduksjon

Før vi dykker inn i de virkelig spennende tingene, la oss gjøre datamaskinen din klar for litt GitHub-magi! Tenk på dette som å organisere kunstforsyningene dine før du lager et mesterverk – å ha de riktige verktøyene klare gjør alt så mye enklere og mye morsommere.

Jeg skal gå gjennom hvert oppsettsteg med deg personlig, og jeg lover at det ikke er i nærheten av så skremmende som det kanskje ser ut ved første øyekast. Hvis noe ikke gir mening med en gang, er det helt normalt! Jeg husker da jeg satte opp mitt første utviklingsmiljø og følte meg som om jeg prøvde å lese gamle hieroglyfer. Hver eneste utvikler har vært akkurat der du er nå, og lurt på om de gjør det riktig. Spoiler: hvis du er her og lærer, gjør du det allerede riktig! 🌟

I denne leksjonen skal vi dekke:

- hvordan du sporer arbeidet du gjør på maskinen din
- hvordan du jobber med prosjekter sammen med andre
- hvordan du kan bidra til åpen kildekode-programvare

### Forutsetninger

La oss gjøre datamaskinen din klar for litt GitHub-magi! Ikke bekymre deg – dette oppsettet er noe du bare trenger å gjøre én gang, og deretter er du klar for hele kodereisen din.

Ok, la oss starte med grunnlaget! Først må vi sjekke om Git allerede er installert på datamaskinen din. Git er i utgangspunktet som å ha en super-smart assistent som husker hver eneste endring du gjør i koden din – mye bedre enn å frenetisk trykke Ctrl+S hvert andre sekund (vi har alle vært der!).

La oss se om Git allerede er installert ved å skrive denne magiske kommandoen i terminalen din:
`git --version`

Hvis Git ikke er der ennå, ingen grunn til bekymring! Bare gå til [last ned Git](https://git-scm.com/downloads) og last det ned. Når du har installert det, må vi introdusere Git ordentlig for deg:

> 💡 **Første gangs oppsett**: Disse kommandoene forteller Git hvem du er. Denne informasjonen vil bli knyttet til hver commit du gjør, så velg et navn og en e-postadresse du er komfortabel med å dele offentlig.

```bash
git config --global user.name "your-name"
git config --global user.email "your-email"
```

For å sjekke om Git allerede er konfigurert, kan du skrive:
```bash
git config --list
```

Du trenger også en GitHub-konto, en kodeeditor (som Visual Studio Code), og du må åpne terminalen din (eller: kommandolinjen).

Gå til [github.com](https://github.com/) og opprett en konto hvis du ikke allerede har en, eller logg inn og fyll ut profilen din.

💡 **Moderne tips**: Vurder å sette opp [SSH-nøkler](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) eller bruke [GitHub CLI](https://cli.github.com/) for enklere autentisering uten passord.

✅ GitHub er ikke det eneste kode-repositoriet i verden; det finnes andre, men GitHub er det mest kjente.

### Forberedelse

Du trenger både en mappe med et kodeprosjekt på din lokale maskin (laptop eller PC), og et offentlig repository på GitHub, som vil fungere som et eksempel på hvordan du kan bidra til andres prosjekter.

### Hold koden din trygg

La oss snakke om sikkerhet et øyeblikk – men ikke bekymre deg, vi skal ikke overvelde deg med skumle ting! Tenk på disse sikkerhetspraksisene som å låse bilen eller huset ditt. De er enkle vaner som blir en selvfølge og holder det harde arbeidet ditt beskyttet.

Vi skal vise deg moderne, sikre måter å jobbe med GitHub fra starten av. På denne måten vil du utvikle gode vaner som vil tjene deg godt gjennom hele kodingskarrieren din.

Når du jobber med GitHub, er det viktig å følge sikkerhetspraksis:

| Sikkerhetsområde | Beste praksis | Hvorfor det er viktig |
|------------------|---------------|------------------------|
| **Autentisering** | Bruk SSH-nøkler eller Personlige Tilgangstokens | Passord er mindre sikre og blir faset ut |
| **Tofaktorautentisering** | Aktiver 2FA på GitHub-kontoen din | Gir et ekstra lag med kontobeskyttelse |
| **Repository-sikkerhet** | Aldri commit sensitiv informasjon | API-nøkler og passord skal aldri være i offentlige repositorier |
| **Avhengighetsstyring** | Aktiver Dependabot for oppdateringer | Holder avhengighetene dine sikre og oppdaterte |

> ⚠️ **Kritisk sikkerhetspåminnelse**: Aldri commit API-nøkler, passord eller annen sensitiv informasjon til noe repository. Bruk miljøvariabler og `.gitignore`-filer for å beskytte sensitiv data.

**Moderne autentiseringsoppsett:**

```bash
# Generate SSH key (modern ed25519 algorithm)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Set up Git to use SSH
git remote set-url origin git@github.com:username/repository.git
```

> 💡 **Proff-tips**: SSH-nøkler eliminerer behovet for å skrive inn passord gjentatte ganger og er mer sikre enn tradisjonelle autentiseringsmetoder.

---

## Administrer koden din som en proff

Ok, NÅ blir det virkelig spennende! 🎉 Vi skal lære hvordan du sporer og administrerer koden din som proffene gjør, og helt ærlig, dette er en av mine favoritting å lære bort fordi det er en skikkelig game-changer.

Se for deg dette: du skriver en fantastisk historie, og du vil holde styr på hver utkast, hver briljant redigering, og hver "vent, det der er genialt!"-øyeblikk underveis. Det er akkurat det Git gjør for koden din! Det er som å ha den mest utrolige tidsreisende notatboken som husker ALT – hver tastetrykk, hver endring, hver "oi, det ødela alt"-øyeblikk som du umiddelbart kan angre.

Jeg skal være ærlig – dette kan føles overveldende i starten. Da jeg begynte, tenkte jeg "Hvorfor kan jeg ikke bare lagre filene mine som vanlig?" Men stol på meg: når Git klikker for deg (og det vil!), vil du ha et av de lyspære-øyeblikkene hvor du tenker "Hvordan har jeg NOEN GANG kodet uten dette?" Det er som å oppdage at du kan fly når du har gått overalt hele livet!

La oss si at du har en mappe lokalt med et kodeprosjekt, og du vil begynne å spore fremgangen din ved hjelp av git – versjonskontrollsystemet. Noen sammenligner det å bruke git med å skrive et kjærlighetsbrev til ditt fremtidige jeg. Når du leser commit-meldingene dine dager, uker eller måneder senere, vil du kunne huske hvorfor du tok en beslutning, eller "rulle tilbake" en endring – det vil si, når du skriver gode "commit-meldinger".

### Oppgave: Opprett ditt første repository!

> 🎯 **Din oppgave (og jeg er så spent på deg!)**: Vi skal opprette ditt aller første GitHub-repository sammen! Når vi er ferdige her, vil du ha din egen lille hjørne av internett hvor koden din bor, og du vil ha gjort din første "commit" (det er utviklerspråk for å lagre arbeidet ditt på en veldig smart måte).
>
> Dette er ærlig talt et så spesielt øyeblikk – du er i ferd med å offisielt bli med i det globale fellesskapet av utviklere! Jeg husker fortsatt spenningen ved å opprette mitt første repo og tenke "Wow, jeg gjør virkelig dette!"

La oss gå gjennom dette eventyret sammen, steg for steg. Ta deg god tid med hver del – det er ingen premie for å skynde seg, og jeg lover at hvert eneste steg vil gi mening. Husk, hver kodestjerne du beundrer, satt en gang akkurat der du er nå, klar til å opprette sitt første repository. Hvor kult er det?

> Sjekk ut videoen
> 
> [![Git og GitHub grunnleggende video](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

**La oss gjøre dette sammen:**

1. **Opprett ditt repository på GitHub**. Gå til GitHub.com og se etter den lysegrønne **Ny**-knappen (eller **+**-tegnet øverst til høyre). Klikk på den og velg **Nytt repository**.

   Slik gjør du det:
   1. Gi repositoryet ditt et navn – velg noe som betyr noe for deg!
   1. Legg til en beskrivelse hvis du vil (dette hjelper andre med å forstå hva prosjektet ditt handler om)
   1. Bestem om du vil ha det offentlig (alle kan se det) eller privat (bare for deg)
   1. Jeg anbefaler å krysse av for å legge til en README-fil – det er som forsiden av prosjektet ditt
   1. Klikk **Opprett repository** og feir – du har nettopp opprettet ditt første repo! 🎉

2. **Naviger til prosjektmappen din**. Nå skal vi åpne terminalen din (ikke bekymre deg, det er ikke så skummelt som det ser ut!). Vi må fortelle datamaskinen hvor prosjektfilene dine er. Skriv denne kommandoen:

   ```bash
   cd [name of your folder]
   ```

   **Hva vi gjør her:**
   - Vi sier i utgangspunktet "Hei datamaskin, ta meg til prosjektmappen min"
   - Dette er som å åpne en spesifikk mappe på skrivebordet ditt, men vi gjør det med tekstkommandoer
   - Erstatt `[navnet på mappen din]` med det faktiske navnet på prosjektmappen din

3. **Gjør mappen din om til et Git repository**. Her skjer magien! Skriv:

   ```bash
   git init
   ```

   **Her er hva som nettopp skjedde (ganske kult!):**
   - Git opprettet en skjult `.git`-mappe i prosjektet ditt – du ser den ikke, men den er der!
   - Den vanlige mappen din er nå et "repository" som kan spore hver endring du gjør
   - Tenk på det som å gi mappen din superkrefter til å huske alt

4. **Sjekk hva som skjer**. La oss se hva Git tenker om prosjektet ditt akkurat nå:

   ```bash
   git status
   ```

   **Forstå hva Git forteller deg:**
   
   Du kan se noe som ser slik ut:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git restore <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   **Ikke få panikk! Her er hva dette betyr:**
   - Filer i **rødt** er filer som har endringer, men som ikke er klare til å lagres ennå
   - Filer i **grønt** (når du ser dem) er klare til å lagres
   - Git er hjelpsom ved å fortelle deg nøyaktig hva du kan gjøre videre

   > 💡 **Proff-tips**: Kommandoen `git status` er din beste venn! Bruk den når som helst du er forvirret over hva som skjer. Det er som å spørre Git "Hei, hva er situasjonen akkurat nå?"

5. **Gjør filene dine klare til å lagres** (dette kalles "staging"):

   ```bash
   git add .
   ```

   **Hva vi nettopp gjorde:**
   - Vi fortalte Git "Hei, jeg vil inkludere ALLE filene mine i neste lagring"
   - `.` er som å si "alt i denne mappen"
   - Nå er filene dine "staged" og klare for neste steg

   **Vil du være mer selektiv?** Du kan legge til bare spesifikke filer:

   ```bash
   git add [file or folder name]
   ```

   **Hvorfor vil du kanskje gjøre dette?**
   - Noen ganger vil du lagre relaterte endringer sammen
   - Det hjelper deg med å organisere arbeidet ditt i logiske deler
   - Gjør det lettere å forstå hva som endret seg og når

   **Endret mening?** Ingen problem! Du kan fjerne filer fra staging slik:

   ```bash
   # Unstage everything
   git reset
   
   # Unstage just one file
   git reset [file name]
   ```

   Ikke bekymre deg – dette sletter ikke arbeidet ditt, det tar bare filene ut av "klar til å lagres"-bunken.

6. **Lagre arbeidet ditt permanent** (gjør din første commit!):

   ```bash
   git commit -m "first commit"
   ```

   **🎉 Gratulerer! Du har nettopp gjort din første commit!**
   
   **Her er hva som nettopp skjedde:**
   - Git tok et "snapshot" av alle de staged filene dine akkurat nå
   - Commit-meldingen "første commit" forklarer hva dette lagringspunktet handler om
   - Git ga dette snapshotet en unik ID slik at du alltid kan finne det senere
   - Du har offisielt begynt å spore prosjektets historie!

   > 💡 **Fremtidige commit-meldinger**: For dine neste commits, vær mer beskrivende! I stedet for "oppdatert ting", prøv "La til kontaktskjema på hjemmesiden" eller "Fikset feil i navigasjonsmenyen". Ditt fremtidige jeg vil takke deg!

7. **Koble ditt lokale prosjekt til GitHub**. Akkurat nå eksisterer prosjektet ditt bare på datamaskinen din. La oss koble det til GitHub-repositoryet ditt slik at du kan dele det med verden!

   Først, gå til GitHub-repository-siden din og kopier URL-en. Deretter kommer du tilbake hit og skriver:

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```
   
   (Erstatt den URL-en med din faktiske repository-URL!)

   **Hva vi nettopp gjorde:**
- Vi har opprettet en forbindelse mellom ditt lokale prosjekt og GitHub-repositoriet ditt  
- "Origin" er bare et kallenavn for GitHub-repositoriet ditt – det er som å legge til en kontakt på telefonen din  
- Nå vet ditt lokale Git hvor det skal sende koden din når du er klar til å dele den  

💡 **Enklere måte**: Hvis du har GitHub CLI installert, kan du gjøre dette med én kommando:  
   ```bash
   gh repo create my-repo --public --push --source=.
   ```
  
8. **Send koden din til GitHub** (det store øyeblikket!):  

   ```bash
   git push -u origin main
   ```
  
**🚀 Dette er det! Du laster opp koden din til GitHub!**  

**Hva som skjer:**  
- Dine commits reiser fra datamaskinen din til GitHub  
- `-u`-flagget setter opp en permanent forbindelse slik at fremtidige pushes blir enklere  
- "main" er navnet på din primære branch (som hovedmappen)  
- Etter dette kan du bare skrive `git push` for fremtidige opplastinger!  

💡 **Raskt notat**: Hvis branchen din heter noe annet (som "master"), bruk det navnet i stedet. Du kan sjekke med `git branch --show-current`.  

9. **Din nye daglige koderytme** (her blir det vanedannende!):  

Fra nå av, hver gang du gjør endringer i prosjektet ditt, har du denne enkle tretrinnsprosessen:  

   ```bash
   git add .
   git commit -m "describe what you changed"
   git push
   ```
  
**Dette blir din kodingspuls:**  
- Gjør noen fantastiske endringer i koden din ✨  
- Stage dem med `git add` ("Hei Git, følg med på disse endringene!")  
- Lagre dem med `git commit` og en beskrivende melding (fremtidige deg vil takke deg!)  
- Del dem med verden ved å bruke `git push` 🚀  
- Gjenta – seriøst, dette blir like naturlig som å puste!  

Jeg elsker denne arbeidsflyten fordi det er som å ha flere lagringspunkter i et videospill. Gjorde du en endring du elsker? Commit den! Vil du prøve noe risikabelt? Ikke noe problem – du kan alltid gå tilbake til din siste commit hvis ting går galt!  

> 💡 **Tips**: Du vil kanskje også ta i bruk en `.gitignore`-fil for å forhindre at filer du ikke vil spore dukker opp på GitHub – som den notatfilen du lagrer i samme mappe, men som ikke har noe å gjøre i et offentlig repository. Du kan finne maler for `.gitignore`-filer på [.gitignore templates](https://github.com/github/gitignore) eller lage en ved hjelp av [gitignore.io](https://www.toptal.com/developers/gitignore).  

#### Moderne Git-arbeidsflyter  

Vurder å ta i bruk disse moderne praksisene:  

- **Conventional Commits**: Bruk et standardisert format for commit-meldinger som `feat:`, `fix:`, `docs:` osv. Lær mer på [conventionalcommits.org](https://www.conventionalcommits.org/)  
- **Atomiske commits**: Sørg for at hver commit representerer én logisk endring  
- **Hyppige commits**: Commit ofte med beskrivende meldinger i stedet for store, sjeldne commits  

#### Commit-meldinger  

En god Git-commit-emnelinje fullfører følgende setning:  
Hvis den brukes, vil denne commiten <din emnelinje her>  

For emnet, bruk imperativ, nåtid: "endre" ikke "endret" eller "endrer".  
Som i emnet, bruk også imperativ, nåtid i kroppen (valgfritt). Kroppen bør inkludere motivasjonen for endringen og kontrastere dette med tidligere oppførsel. Du forklarer `hvorfor`, ikke `hvordan`.  

✅ Ta noen minutter til å surfe rundt på GitHub. Kan du finne en virkelig god commit-melding? Kan du finne en veldig minimal en? Hvilken informasjon synes du er den viktigste og mest nyttige å formidle i en commit-melding?  

## Samarbeid med andre (Den morsomme delen!)  

Hold på hatten, for NÅ blir GitHub helt magisk! 🪄 Du har mestret å administrere din egen kode, men nå dykker vi inn i min absolutte favorittdel – å samarbeide med fantastiske mennesker fra hele verden.  

Se for deg dette: Du våkner i morgen og ser at noen i Tokyo har forbedret koden din mens du sov. Så fikser noen i Berlin en feil du har slitt med. Innen ettermiddagen har en utvikler i São Paulo lagt til en funksjon du aldri engang hadde tenkt på. Det er ikke science fiction – det er bare en vanlig tirsdag i GitHub-universet!  

Det som virkelig begeistrer meg er at samarbeidsferdighetene du er i ferd med å lære? Dette er de EKSAKTE samme arbeidsflytene som teamene hos Google, Microsoft og dine favorittstartups bruker hver eneste dag. Du lærer ikke bare et kult verktøy – du lærer det hemmelige språket som får hele programvareverdenen til å samarbeide.  

Seriøst, når du opplever gleden av at noen godkjenner din første pull request, vil du forstå hvorfor utviklere blir så lidenskapelige om åpen kildekode. Det er som å være en del av verdens største, mest kreative teamprosjekt!  

> Se video  
>  
> [![Git og GitHub grunnleggende video](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)  

Hovedgrunnen til å legge ting på GitHub var å gjøre det mulig å samarbeide med andre utviklere.  

I ditt repository, naviger til `Insights > Community` for å se hvordan prosjektet ditt sammenlignes med anbefalte fellesskapsstandarder.  

Vil du få repositoryet ditt til å se profesjonelt og innbydende ut? Gå til repositoryet ditt og klikk på `Insights > Community`. Denne kule funksjonen viser deg hvordan prosjektet ditt sammenlignes med det GitHub-fellesskapet anser som "gode repository-praksiser."  

> 🎯 **Få prosjektet ditt til å skinne**: Et godt organisert repository med god dokumentasjon er som å ha en ren, innbydende butikkfront. Det viser folk at du bryr deg om arbeidet ditt og får andre til å ville bidra!  

**Dette gjør et repository fantastisk:**  

| Hva du bør legge til | Hvorfor det er viktig | Hva det gjør for deg |  
|-----------------------|-----------------------|-----------------------|  
| **Beskrivelse** | Førsteinntrykk teller! | Folk vet umiddelbart hva prosjektet ditt gjør |  
| **README** | Forsiden til prosjektet ditt | Som en vennlig guide for nye besøkende |  
| **Retningslinjer for bidrag** | Viser at du ønsker hjelp | Folk vet nøyaktig hvordan de kan hjelpe deg |  
| **Adferdskodeks** | Skaper et vennlig miljø | Alle føler seg velkomne til å delta |  
| **Lisens** | Juridisk klarhet | Andre vet hvordan de kan bruke koden din |  
| **Sikkerhetspolicy** | Viser at du er ansvarlig | Demonstrerer profesjonelle praksiser |  

> 💡 **Profftips**: GitHub tilbyr maler for alle disse filene. Når du oppretter et nytt repository, huk av boksene for å automatisk generere disse filene.  

**Moderne GitHub-funksjoner å utforske:**  

🤖 **Automatisering & CI/CD:**  
- **GitHub Actions** for automatisert testing og distribusjon  
- **Dependabot** for automatiske oppdateringer av avhengigheter  

💬 **Fellesskap & Prosjektledelse:**  
- **GitHub Discussions** for fellesskapsdiskusjoner utover issues  
- **GitHub Projects** for kanban-stil prosjektledelse  
- **Branch-beskyttelsesregler** for å opprettholde kodekvalitetsstandarder  

Alle disse ressursene vil være nyttige for å onboarde nye teammedlemmer. Og dette er typisk ting nye bidragsytere ser på før de i det hele tatt ser på koden din, for å finne ut om prosjektet ditt er det rette stedet for dem å bruke tiden sin.  

✅ README-filer, selv om de tar tid å forberede, blir ofte oversett av travle vedlikeholdere. Kan du finne et eksempel på en spesielt beskrivende README? Merk: det finnes noen [verktøy for å lage gode README-filer](https://www.makeareadme.com/) som du kanskje vil prøve.  

### Oppgave: Merge litt kode  

Bidragsdokumenter hjelper folk med å bidra til prosjektet. Det forklarer hvilke typer bidrag du ser etter og hvordan prosessen fungerer. Bidragsytere må gå gjennom en serie med steg for å kunne bidra til ditt repo på GitHub:  

1. **Forke repoet ditt** Du vil sannsynligvis at folk skal _forke_ prosjektet ditt. Forking betyr å lage en kopi av repositoryet ditt på deres GitHub-profil.  
1. **Clone**. Derfra vil de klone prosjektet til sin lokale maskin.  
1. **Opprette en branch**. Du vil be dem om å opprette en _branch_ for arbeidet sitt.  
1. **Fokusere endringen på ett område**. Be bidragsytere om å konsentrere bidragene sine på én ting av gangen – på den måten øker sjansen for at du kan _merge_ arbeidet deres. Tenk deg at de skriver en feilretting, legger til en ny funksjon og oppdaterer flere tester – hva om du vil, eller bare kan implementere 2 av 3, eller 1 av 3 endringer?  

✅ Tenk deg en situasjon der branches er spesielt kritiske for å skrive og levere god kode. Hvilke bruksområder kan du komme på?  

> Merk, vær den endringen du ønsker å se i verden, og opprett branches for ditt eget arbeid også. Alle commits du gjør vil bli gjort på branchen du for øyeblikket er "checked out" til. Bruk `git status` for å se hvilken branch det er.  

La oss gå gjennom en bidragsarbeidsflyt. Anta at bidragsyteren allerede har _forket_ og _klonet_ repoet, så de har et Git-repo klart til å jobbe med på sin lokale maskin:  

1. **Opprett en branch**. Bruk kommandoen `git branch` for å opprette en branch som vil inneholde endringene de har tenkt å bidra med:  

   ```bash
   git branch [branch-name]
   ```
  
   > 💡 **Moderne tilnærming**: Du kan også opprette og bytte til den nye branchen med én kommando:  
   ```bash
   git switch -c [branch-name]
   ```
  
1. **Bytt til arbeidsbranch**. Bytt til den spesifiserte branchen og oppdater arbeidskatalogen med `git switch`:  

   ```bash
   git switch [branch-name]
   ```
  
   > 💡 **Moderne notat**: `git switch` er den moderne erstatningen for `git checkout` når du bytter branch. Det er tydeligere og tryggere for nybegynnere.  

1. **Utfør arbeid**. På dette tidspunktet kan du legge til endringene dine. Ikke glem å informere Git om det med følgende kommandoer:  

   ```bash
   git add .
   git commit -m "my changes"
   ```
  
   > ⚠️ **Kvalitet på commit-meldinger**: Sørg for å gi commiten din et godt navn, både for din egen del og for vedlikeholderen av repoet du hjelper til med. Vær spesifikk om hva du har endret!  

1. **Kombiner arbeidet ditt med `main`-branchen**. På et tidspunkt er du ferdig med arbeidet og ønsker å kombinere det med `main`-branchen. `main`-branchen kan ha endret seg i mellomtiden, så sørg for å oppdatere den til det nyeste med følgende kommandoer:  

   ```bash
   git switch main
   git pull
   ```
  
   På dette tidspunktet vil du sørge for at eventuelle _konflikter_, situasjoner der Git ikke enkelt kan _kombinere_ endringene, skjer i din arbeidsbranch. Derfor kjør følgende kommandoer:  

   ```bash
   git switch [branch_name]
   git merge main
   ```
  
   Kommandoen `git merge main` vil hente inn alle endringer fra `main` til din branch. Forhåpentligvis kan du bare fortsette. Hvis ikke, vil VS Code fortelle deg hvor Git er _forvirret_, og du kan endre de berørte filene for å angi hvilket innhold som er mest nøyaktig.  

   💡 **Moderne alternativ**: Vurder å bruke `git rebase` for en renere historikk:  
   ```bash
   git rebase main
   ```
  
   Dette spiller av dine commits på toppen av den nyeste main-branchen, og skaper en lineær historikk.  

1. **Send arbeidet ditt til GitHub**. Å sende arbeidet ditt til GitHub betyr to ting. Å pushe branchen din til repoet ditt og deretter åpne en PR, Pull Request.  

   ```bash
   git push --set-upstream origin [branch-name]
   ```
  
   Kommandoen ovenfor oppretter branchen på ditt forkede repo.  

1. **Åpne en PR**. Deretter vil du åpne en PR. Du gjør det ved å navigere til det forkede repoet på GitHub. Du vil se en indikasjon på GitHub hvor det spør om du vil opprette en ny PR, du klikker på det og blir tatt til et grensesnitt hvor du kan endre commit-meldingens tittel, gi den en mer passende beskrivelse. Nå vil vedlikeholderen av repoet du forked se denne PR-en og _krysser fingrene_ for at de setter pris på og _merger_ PR-en din. Du er nå en bidragsyter, yay :)  

   💡 **Moderne tips**: Du kan også opprette PR-er ved hjelp av GitHub CLI:  
   ```bash
   gh pr create --title "Your PR title" --body "Description of changes"
   ```
  
   🔧 **Beste praksis for PR-er**:  
   - Link til relaterte issues ved å bruke nøkkelord som "Fixes #123"  
   - Legg til skjermbilder for UI-endringer  
   - Be om spesifikke anmeldere  
   - Bruk utkast-PR-er for arbeid som pågår  
   - Sørg for at alle CI-sjekker er bestått før du ber om gjennomgang  

1. **Rydd opp**. Det anses som god praksis å _rydde opp_ etter at du har lykkes med å merge en PR. Du vil rydde opp både din lokale branch og branchen du pushet til GitHub. Først, la oss slette den lokalt med følgende kommando:  

   ```bash
   git branch -d [branch-name]
   ```
  
   Sørg for å gå til GitHub-siden for det forkede repoet og fjern den eksterne branchen du nettopp pushet til.  

`Pull request` virker som et rart begrep fordi du egentlig ønsker å pushe endringene dine til prosjektet. Men vedlikeholderen (prosjekteieren) eller kjerneteamet må vurdere endringene dine før de merger dem med prosjektets "main"-branch, så du ber egentlig om en beslutning om endringen fra en vedlikeholder.  

En pull request er stedet for å sammenligne og diskutere forskjellene som er introdusert på en branch med anmeldelser, kommentarer, integrerte tester og mer. En god pull request følger omtrent de samme reglene som en commit-melding. Du kan legge til en referanse til en issue i issue-tracker, når arbeidet ditt for eksempel fikser en issue. Dette gjøres ved å bruke en `#` etterfulgt av nummeret på din issue. For eksempel `#97`.  
🤞Krysser fingrene for at alle sjekker går gjennom og at prosjektets eier(e) godkjenner endringene dine og slår dem sammen med prosjektet🤞

Oppdater din nåværende lokale arbeidsgren med alle nye commits fra den tilsvarende eksterne grenen på GitHub:

`git pull`

## Bidra til Open Source (Din sjanse til å gjøre en forskjell!)

Er du klar for noe som kommer til å blåse deg helt av banen? 🤯 La oss snakke om å bidra til open source-prosjekter – jeg får gåsehud bare av å dele dette med deg!

Dette er din sjanse til å bli en del av noe virkelig ekstraordinært. Tenk deg å forbedre verktøyene som millioner av utviklere bruker hver dag, eller fikse en feil i en app som vennene dine elsker. Det er ikke bare en drøm – det er det open source-bidrag handler om!

Her er det som gir meg frysninger hver gang jeg tenker på det: hvert eneste verktøy du har lært med – kodeeditoren din, rammeverkene vi skal utforske, til og med nettleseren du leser dette i – startet med noen akkurat som deg som gjorde sitt aller første bidrag. Den geniale utvikleren som bygde din favoritt-VS Code-utvidelse? De var en gang en nybegynner som klikket "create pull request" med skjelvende hender, akkurat som du er i ferd med å gjøre.

Og her er det vakreste: open source-samfunnet er som internettets største gruppesamling. De fleste prosjekter ser aktivt etter nykommere og har problemer merket "good first issue" spesielt for folk som deg! Vedlikeholdere blir genuint begeistret når de ser nye bidragsytere fordi de husker sine egne første steg.

Du lærer ikke bare å kode her – du forbereder deg på å bli med i en global familie av skapere som våkner hver dag og tenker "Hvordan kan vi gjøre den digitale verden litt bedre?" Velkommen til klubben! 🌟

Først, la oss finne et repository (eller **repo**) på GitHub som interesserer deg og som du ønsker å bidra med en endring til. Du vil kopiere innholdet til din maskin.

✅ En god måte å finne 'nybegynnervennlige' repoer på er å [søke etter taggen 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Kopier et repo lokalt](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.no.png)

Det finnes flere måter å kopiere kode på. En måte er å "klone" innholdet i repositoryet, ved å bruke HTTPS, SSH eller GitHub CLI (Command Line Interface). 

Åpne terminalen din og klon repositoryet slik:
```bash
# Using HTTPS
git clone https://github.com/ProjectURL

# Using SSH (requires SSH key setup)
git clone git@github.com:username/repository.git

# Using GitHub CLI
gh repo clone username/repository
```

For å jobbe med prosjektet, bytt til riktig mappe:
`cd ProjectURL`

Du kan også åpne hele prosjektet ved å bruke:
- **[GitHub Codespaces](https://github.com/features/codespaces)** - GitHubs skyutviklingsmiljø med VS Code i nettleseren
- **[GitHub Desktop](https://desktop.github.com/)** - En GUI-applikasjon for Git-operasjoner  
- **[GitHub.dev](https://github.dev)** - Trykk på `.`-tasten på et hvilket som helst GitHub-repo for å åpne VS Code i nettleseren
- **VS Code** med GitHub Pull Requests-utvidelsen

Til slutt kan du laste ned koden i en zip-mappe. 

### Noen flere interessante ting om GitHub

Du kan stjerne, følge og/eller "forke" ethvert offentlig repository på GitHub. Du finner dine stjernemerkede repositories i rullegardinmenyen øverst til høyre. Det er som bokmerker, men for kode. 

Prosjekter har en problemsporer, som oftest på GitHub under "Issues"-fanen med mindre annet er angitt, hvor folk diskuterer problemer relatert til prosjektet. Og Pull Requests-fanen er der folk diskuterer og vurderer endringer som er under behandling.

Prosjekter kan også ha diskusjoner i forum, e-postlister eller chattekanaler som Slack, Discord eller IRC.

🔧 **Moderne GitHub-funksjoner**:
- **GitHub Discussions** - Innebygd forum for samtaler i fellesskapet
- **GitHub Sponsors** - Støtt vedlikeholdere økonomisk  
- **Security-fanen** - Rapporter om sårbarheter og sikkerhetsråd
- **Actions-fanen** - Se automatiserte arbeidsflyter og CI/CD-pipelines
- **Insights-fanen** - Analyse om bidragsytere, commits og prosjektets helse
- **Projects-fanen** - GitHubs innebygde prosjektstyringsverktøy

✅ Ta en titt rundt i ditt nye GitHub-repo og prøv noen ting, som å redigere innstillinger, legge til informasjon i repoet ditt, opprette et prosjekt (som et Kanban-brett), og sette opp GitHub Actions for automatisering. Det er mye du kan gjøre!

---

## 🚀 Utfordring 

Ok, det er på tide å teste dine nye GitHub-superkrefter! 🚀 Her er en utfordring som kommer til å få alt til å falle på plass på den mest tilfredsstillende måten:

Ta med deg en venn (eller et familiemedlem som alltid spør hva du driver med når du sitter foran datamaskinen) og begi dere ut på et samarbeidsprosjekt sammen! Her skjer den virkelige magien – opprett et prosjekt, la dem forke det, lag noen grener og slå sammen endringer som de proffene dere er i ferd med å bli.

Jeg skal ikke lyve – dere kommer sannsynligvis til å le på et tidspunkt (spesielt når dere begge prøver å endre den samme linjen), kanskje klø dere i hodet av forvirring, men dere vil definitivt ha de fantastiske "aha!"-øyeblikkene som gjør all læringen verdt det. I tillegg er det noe spesielt med å dele den første vellykkede sammenslåingen med noen andre – det er som en liten feiring av hvor langt dere har kommet!

Har du ikke en kodevenn ennå? Ingen problem! GitHub-samfunnet er fullt av utrolig velkomne mennesker som husker hvordan det var å være ny. Se etter repositories med "good first issue"-etiketter – de sier i bunn og grunn "Hei nybegynnere, kom og lær med oss!" Hvor kult er ikke det?

## Quiz etter forelesning
[Quiz etter forelesning](https://ff-quizzes.netlify.app/web/en/)

## Oppsummering & Fortsett å lære

Puh! 🎉 Se på deg – du har nettopp mestret GitHub-grunnleggende som en ekte mester! Hvis hjernen din føles litt full akkurat nå, er det helt normalt og faktisk et godt tegn. Du har nettopp lært verktøy som tok meg uker å bli komfortabel med da jeg startet.

Git og GitHub er utrolig kraftige (som, seriøst kraftige), og hver utvikler jeg kjenner – inkludert de som nå virker som trollmenn – måtte øve og snuble litt før alt falt på plass. Det faktum at du har kommet deg gjennom denne leksjonen betyr at du allerede er på vei til å mestre noen av de viktigste verktøyene i en utviklers verktøykasse.

Her er noen helt fantastiske ressurser for å hjelpe deg med å øve og bli enda mer fantastisk:

- [Veiledning for å bidra til open source-programvare](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution) – Din veikart til å gjøre en forskjell
- [Git jukselapp](https://training.github.com/downloads/github-git-cheat-sheet/) – Ha denne tilgjengelig for rask referanse!

Og husk: øvelse gir fremgang, ikke perfeksjon! Jo mer du bruker Git og GitHub, jo mer naturlig blir det. GitHub har laget noen fantastiske interaktive kurs som lar deg øve i et trygt miljø:

- [Introduksjon til GitHub](https://github.com/skills/introduction-to-github)
- [Kommuniser med Markdown](https://github.com/skills/communicate-using-markdown)  
- [GitHub Pages](https://github.com/skills/github-pages)
- [Håndtering av sammenslåingskonflikter](https://github.com/skills/resolve-merge-conflicts)

**Føler du deg eventyrlysten? Sjekk ut disse moderne verktøyene:**
- [GitHub CLI-dokumentasjon](https://cli.github.com/manual/) – For når du vil føle deg som en kommandolinje-trollmann
- [GitHub Codespaces-dokumentasjon](https://docs.github.com/en/codespaces) – Kode i skyen!
- [GitHub Actions-dokumentasjon](https://docs.github.com/en/actions) – Automatiser alt
- [Beste praksis for Git](https://www.atlassian.com/git/tutorials/comparing-workflows) – Ta arbeidsflyten din til neste nivå 

## GitHub Copilot Agent Challenge 🚀

Bruk Agent-modus for å fullføre følgende utfordring:

**Beskrivelse:** Opprett et samarbeidsprosjekt for webutvikling som demonstrerer hele GitHub-arbeidsflyten du har lært i denne leksjonen. Denne utfordringen vil hjelpe deg med å øve på opprettelse av repository, samarbeidsfunksjoner og moderne Git-arbeidsflyter i et realistisk scenario.

**Oppgave:** Opprett et nytt offentlig GitHub-repository for et enkelt "Web Development Resources"-prosjekt. Repositoryet bør inkludere en godt strukturert README.md-fil som lister opp nyttige verktøy og ressurser for webutvikling, organisert etter kategorier (HTML, CSS, JavaScript, osv.). Sett opp repositoryet med riktige fellesskapsstandarder, inkludert lisens, retningslinjer for bidrag og en adferdskodeks. Opprett minst to funksjonsgrener: en for å legge til CSS-ressurser og en annen for JavaScript-ressurser. Gjør commits til hver gren med beskrivende commit-meldinger, og opprett deretter pull requests for å slå sammen endringene tilbake til main. Aktiver GitHub-funksjoner som Issues, Discussions, og sett opp en grunnleggende GitHub Actions-arbeidsflyt for automatiserte sjekker.

## Oppgave 

Din oppgave, hvis du velger å akseptere den: Fullfør [Introduksjon til GitHub](https://github.com/skills/introduction-to-github)-kurset på GitHub Skills. Dette interaktive kurset lar deg øve på alt du har lært i et trygt, veiledet miljø. I tillegg får du et kult merke når du er ferdig! 🏅

**Føler du deg klar for flere utfordringer?**
- Sett opp SSH-autentisering for GitHub-kontoen din (slutt på passord!)
- Prøv å bruke GitHub CLI for dine daglige Git-operasjoner
- Opprett et repository med en GitHub Actions-arbeidsflyt
- Utforsk GitHub Codespaces ved å åpne akkurat dette repositoryet i en skybasert editor

Husk: hver ekspert var en gang nybegynner. Du klarer dette! 💪

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.