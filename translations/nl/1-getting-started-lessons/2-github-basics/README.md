<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "acad15f3164cd6348e065ff38619aae9",
  "translation_date": "2025-10-23T00:53:06+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "nl"
}
-->
# Introductie tot GitHub

Hey daar, toekomstige ontwikkelaar! 👋 Klaar om je aan te sluiten bij miljoenen programmeurs over de hele wereld? Ik ben echt enthousiast om je kennis te laten maken met GitHub – zie het als een soort sociale media voor programmeurs, maar in plaats van foto's van je lunch te delen, delen we code en bouwen we samen geweldige dingen!

Wat ik echt geweldig vind: elke app op je telefoon, elke website die je bezoekt, en de meeste tools die je leert gebruiken, zijn gemaakt door teams van ontwikkelaars die samenwerken op platforms zoals GitHub. Die muziekapp waar je dol op bent? Iemand zoals jij heeft eraan bijgedragen. Dat spel waar je niet mee kunt stoppen? Ja, waarschijnlijk gebouwd met GitHub-samenwerking. En nu ga JIJ leren hoe je deel kunt uitmaken van die geweldige community!

Ik weet dat dit in het begin misschien overweldigend lijkt – ik weet nog dat ik naar mijn eerste GitHub-pagina staarde en dacht: "Wat betekent dit allemaal in hemelsnaam?" Maar het zit zo: elke ontwikkelaar is precies begonnen waar jij nu bent. Aan het einde van deze les heb je je eigen GitHub-repository (zie het als jouw persoonlijke projectshowcase in de cloud), en weet je hoe je je werk kunt opslaan, delen met anderen en zelfs bijdragen aan projecten die door miljoenen mensen worden gebruikt.

We gaan deze reis samen maken, stap voor stap. Geen haast, geen druk – alleen jij, ik en een paar hele coole tools die je nieuwe beste vrienden gaan worden!

![Intro tot GitHub](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.nl.png)
> Sketchnote door [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz voor de les
[Quiz voor de les](https://ff-quizzes.netlify.app)

## Introductie

Voordat we in de echt spannende dingen duiken, gaan we je computer klaarmaken voor wat GitHub-magie! Zie dit als het organiseren van je kunstbenodigdheden voordat je een meesterwerk maakt – de juiste tools klaar hebben maakt alles zoveel soepeler en veel leuker.

Ik ga je persoonlijk door elke stap van de setup leiden, en ik beloof dat het lang niet zo intimiderend is als het er in eerste instantie uitziet. Als iets niet meteen duidelijk is, is dat helemaal normaal! Ik herinner me dat ik mijn eerste ontwikkelomgeving instelde en het gevoel had dat ik oude hiërogliefen probeerde te ontcijferen. Elke ontwikkelaar heeft precies gestaan waar jij nu bent, zich afvragend of ze het goed doen. Spoiler alert: als je hier bent om te leren, doe je het al goed! 🌟

In deze les behandelen we:

- het bijhouden van het werk dat je op je computer doet
- samenwerken aan projecten met anderen
- hoe je kunt bijdragen aan open source software

### Vereisten

Laten we je computer klaarmaken voor wat GitHub-magie! Maak je geen zorgen – deze setup hoef je maar één keer te doen, en dan ben je helemaal klaar voor je hele codeerreis.

Oké, laten we beginnen met de basis! Eerst moeten we controleren of Git al op je computer staat. Git is eigenlijk als een super slimme assistent die zich elke verandering herinnert die je aan je code maakt – veel beter dan elke twee seconden paniekerig op Ctrl+S drukken (we hebben het allemaal gedaan!).

Laten we kijken of Git al is geïnstalleerd door dit magische commando in je terminal te typen:
`git --version`

Als Git nog niet aanwezig is, geen zorgen! Ga gewoon naar [download Git](https://git-scm.com/downloads) en haal het binnen. Zodra je het hebt geïnstalleerd, moeten we Git goed aan je voorstellen:

> 💡 **Eerste keer instellen**: Deze commando's vertellen Git wie je bent. Deze informatie wordt gekoppeld aan elke commit die je maakt, dus kies een naam en e-mailadres die je comfortabel openbaar wilt delen.

```bash
git config --global user.name "your-name"
git config --global user.email "your-email"
```

Om te controleren of Git al is geconfigureerd, kun je typen:
```bash
git config --list
```

Je hebt ook een GitHub-account nodig, een code-editor (zoals Visual Studio Code), en je moet je terminal (of: command prompt) openen.

Ga naar [github.com](https://github.com/) en maak een account aan als je dat nog niet hebt gedaan, of log in en vul je profiel in.

💡 **Moderne tip**: Overweeg het instellen van [SSH-sleutels](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) of het gebruik van [GitHub CLI](https://cli.github.com/) voor eenvoudigere authenticatie zonder wachtwoorden.

✅ GitHub is niet de enige code-repository ter wereld; er zijn anderen, maar GitHub is de bekendste.

### Voorbereiding

Je hebt zowel een map met een codeproject op je lokale machine (laptop of pc) nodig, als een openbare repository op GitHub, die als voorbeeld zal dienen voor hoe je kunt bijdragen aan de projecten van anderen.

### Je code veilig houden

Laten we het even hebben over beveiliging – maar maak je geen zorgen, we gaan je niet overweldigen met enge dingen! Zie deze beveiligingspraktijken als het op slot doen van je auto of je huis. Het zijn eenvoudige gewoontes die vanzelfsprekend worden en je harde werk beschermen.

We laten je vanaf het begin de moderne, veilige manieren zien om met GitHub te werken. Op deze manier ontwikkel je goede gewoontes die je goed van pas zullen komen gedurende je hele carrière als ontwikkelaar.

Bij het werken met GitHub is het belangrijk om de beste beveiligingspraktijken te volgen:

| Beveiligingsgebied | Beste praktijk | Waarom het belangrijk is |
|--------------------|----------------|--------------------------|
| **Authenticatie** | Gebruik SSH-sleutels of Persoonlijke Toegangstokens | Wachtwoorden zijn minder veilig en worden uitgefaseerd |
| **Tweefactorauthenticatie** | Schakel 2FA in op je GitHub-account | Voegt een extra laag bescherming toe aan je account |
| **Repository-beveiliging** | Nooit gevoelige informatie committen | API-sleutels en wachtwoorden mogen nooit in openbare repositories staan |
| **Afhankelijkheidsbeheer** | Schakel Dependabot in voor updates | Houdt je afhankelijkheden veilig en up-to-date |

> ⚠️ **Belangrijke beveiligingsherinnering**: Commit nooit API-sleutels, wachtwoorden of andere gevoelige informatie naar een repository. Gebruik omgevingsvariabelen en `.gitignore`-bestanden om gevoelige gegevens te beschermen.

**Moderne authenticatie-instelling:**

```bash
# Generate SSH key (modern ed25519 algorithm)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Set up Git to use SSH
git remote set-url origin git@github.com:username/repository.git
```

> 💡 **Pro Tip**: SSH-sleutels elimineren de noodzaak om herhaaldelijk wachtwoorden in te voeren en zijn veiliger dan traditionele authenticatiemethoden.

---

## Je code beheren als een pro

Oké, DIT is waar het echt spannend wordt! 🎉 We gaan leren hoe je je code kunt bijhouden en beheren zoals de professionals dat doen, en eerlijk gezegd is dit een van mijn favoriete dingen om te leren omdat het zo'n gamechanger is.

Stel je dit voor: je schrijft een geweldig verhaal en je wilt elke versie, elke briljante bewerking en elk "wacht, dat is geniaal!" moment onderweg bijhouden. Dat is precies wat Git doet voor je code! Het is alsof je een ongelooflijk tijdreizend notitieboek hebt dat ALLES onthoudt – elke toetsaanslag, elke verandering, elke "oeps, dat heeft alles kapot gemaakt" moment dat je onmiddellijk kunt terugdraaien.

Ik geef toe – dit kan in het begin overweldigend aanvoelen. Toen ik begon, dacht ik "Waarom kan ik mijn bestanden niet gewoon normaal opslaan?" Maar vertrouw me hierop: zodra Git voor je klikt (en dat zal gebeuren!), krijg je een van die aha-momenten waarin je denkt "Hoe heb ik OOIT gecodeerd zonder dit?" Het is alsof je ontdekt dat je kunt vliegen terwijl je je hele leven overal naartoe hebt gelopen!

Stel dat je een map lokaal hebt met een codeproject en je wilt je voortgang gaan bijhouden met git - het versiebeheersysteem. Sommige mensen vergelijken het gebruik van git met het schrijven van een liefdesbrief aan je toekomstige zelf. Door je commitberichten dagen, weken of maanden later te lezen, kun je je herinneren waarom je een bepaalde beslissing hebt genomen, of een verandering "terugdraaien" - dat is, wanneer je goede "commitberichten" schrijft.

### Taak: Maak je eerste repository!

> 🎯 **Je missie (en ik ben zo enthousiast voor je!)**: We gaan samen je allereerste GitHub-repository maken! Tegen de tijd dat we hier klaar zijn, heb je je eigen kleine hoekje van het internet waar je code leeft, en heb je je eerste "commit" gemaakt (dat is ontwikkelaarstaal voor het slim opslaan van je werk).
>
> Dit is echt zo'n speciaal moment – je staat op het punt officieel deel uit te maken van de wereldwijde gemeenschap van ontwikkelaars! Ik herinner me nog steeds de opwinding van het maken van mijn eerste repo en dacht "Wauw, ik doe dit echt!"

Laten we deze reis samen doorlopen, stap voor stap. Neem de tijd voor elk onderdeel – er is geen prijs voor haasten, en ik beloof dat elke stap logisch zal zijn. Onthoud, elke codeer-superster die je bewondert, zat ooit precies waar jij nu bent, klaar om hun eerste repository te maken. Hoe gaaf is dat?

> Bekijk video
> 
> [![Git en GitHub basisvideo](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

**Laten we dit samen doen:**

1. **Maak je repository op GitHub**. Ga naar GitHub.com en zoek naar die felgroene **New** knop (of het **+** teken in de rechterbovenhoek). Klik erop en selecteer **New repository**.

   Hier is wat je moet doen:
   1. Geef je repository een naam – maak het iets dat betekenisvol voor je is!
   1. Voeg een beschrijving toe als je wilt (dit helpt anderen te begrijpen waar je project over gaat)
   1. Beslis of je het openbaar (iedereen kan het zien) of privé (alleen voor jou) wilt maken
   1. Ik raad aan om het vakje aan te vinken om een README-bestand toe te voegen – het is als de voorpagina van je project
   1. Klik op **Create repository** en vier feest – je hebt zojuist je eerste repo gemaakt! 🎉

2. **Navigeer naar je projectmap**. Laten we nu je terminal openen (maak je geen zorgen, het is niet zo eng als het eruitziet!). We moeten je computer vertellen waar je projectbestanden zijn. Typ dit commando:

   ```bash
   cd [name of your folder]
   ```

   **Wat we hier doen:**
   - We zeggen eigenlijk "Hé computer, breng me naar mijn projectmap"
   - Dit is als het openen van een specifieke map op je bureaublad, maar dan met tekstcommando's
   - Vervang `[naam van je map]` door de daadwerkelijke naam van je projectmap

3. **Maak van je map een Git-repository**. Hier gebeurt de magie! Typ:

   ```bash
   git init
   ```

   **Wat er net gebeurde (best cool spul!):**
   - Git heeft een verborgen `.git`-map in je project gemaakt – je ziet het niet, maar het is er!
   - Je gewone map is nu een "repository" die elke verandering die je maakt kan bijhouden
   - Zie het als het geven van superkrachten aan je map om alles te onthouden

4. **Controleer wat er gebeurt**. Laten we eens kijken wat Git op dit moment van je project vindt:

   ```bash
   git status
   ```

   **Begrijpen wat Git je vertelt:**
   
   Je ziet misschien iets dat er ongeveer zo uitziet:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git restore <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   **Geen paniek! Dit betekent:**
   - Bestanden in **rood** zijn bestanden die wijzigingen hebben maar nog niet klaar zijn om opgeslagen te worden
   - Bestanden in **groen** (als je ze ziet) zijn klaar om opgeslagen te worden
   - Git is behulpzaam door je precies te vertellen wat je hierna kunt doen

   > 💡 **Pro tip**: Het commando `git status` is je beste vriend! Gebruik het altijd als je niet zeker weet wat er aan de hand is. Het is alsof je Git vraagt: "Hé, wat is de situatie op dit moment?"

5. **Maak je bestanden klaar om op te slaan** (dit heet "staging"):

   ```bash
   git add .
   ```

   **Wat we net deden:**
   - We vertelden Git "Hé, ik wil AL mijn bestanden opnemen in de volgende opslag"
   - De `.` is als zeggen "alles in deze map"
   - Nu zijn je bestanden "gestaged" en klaar voor de volgende stap

   **Wil je selectiever zijn?** Je kunt alleen specifieke bestanden toevoegen:

   ```bash
   git add [file or folder name]
   ```

   **Waarom zou je dit willen doen?**
   - Soms wil je gerelateerde wijzigingen samen opslaan
   - Het helpt je werk te organiseren in logische stukken
   - Maakt het gemakkelijker om te begrijpen wat er is veranderd en wanneer

   **Van gedachten veranderd?** Geen zorgen! Je kunt bestanden uit de staging halen zoals dit:

   ```bash
   # Unstage everything
   git reset
   
   # Unstage just one file
   git reset [file name]
   ```

   Maak je geen zorgen – dit verwijdert je werk niet, het haalt bestanden gewoon uit de "klaar om op te slaan"-stapel.

6. **Sla je werk permanent op** (maak je eerste commit!):

   ```bash
   git commit -m "first commit"
   ```

   **🎉 Gefeliciteerd! Je hebt zojuist je eerste commit gemaakt!**
   
   **Wat er net gebeurde:**
   - Git heeft een "snapshot" gemaakt van al je gestagede bestanden op dit exacte moment
   - Je commitbericht "first commit" legt uit waar dit opslagpunt over gaat
   - Git heeft deze snapshot een unieke ID gegeven zodat je het later altijd kunt vinden
   - Je bent officieel begonnen met het bijhouden van de geschiedenis van je project!

   > 💡 **Toekomstige commitberichten**: Voor je volgende commits, wees meer beschrijvend! In plaats van "updated stuff", probeer "Contactformulier toegevoegd aan homepage" of "Bug in navigatiemenu opgelost". Je toekomstige zelf zal je dankbaar zijn!

7. **Verbind je lokale project met GitHub**. Op dit moment bestaat je project alleen op je computer. Laten we het verbinden met je GitHub-repository zodat je het met de wereld kunt delen!

   Ga eerst naar de pagina van je GitHub-repository en kopieer de URL. Typ vervolgens:

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```
   
   (Vervang die URL door de daadwerkelijke URL van je repository!)

   **Wat we net deden:**
   - We hebben een verbinding gemaakt tussen je lokale project en je GitHub-repository.
   - "Origin" is gewoon een bijnaam voor je GitHub-repository – het is alsof je een contact toevoegt aan je telefoon.
   - Nu weet je lokale Git waar het je code naartoe moet sturen wanneer je klaar bent om deze te delen.

   💡 **Makkelijkere manier**: Als je GitHub CLI hebt geïnstalleerd, kun je dit met één opdracht doen:
   ```bash
   gh repo create my-repo --public --push --source=.
   ```

8. **Stuur je code naar GitHub** (het grote moment!):

   ```bash
   git push -u origin main
   ```

   **🚀 Dit is het! Je uploadt je code naar GitHub!**
   
   **Wat er gebeurt:**
   - Je commits reizen van je computer naar GitHub.
   - De `-u` vlag stelt een permanente verbinding in, zodat toekomstige pushes eenvoudiger zijn.
   - "main" is de naam van je primaire branch (zoals de hoofdmap).
   - Hierna kun je gewoon `git push` typen voor toekomstige uploads!

   💡 **Snel notitie**: Als je branch een andere naam heeft (zoals "master"), gebruik dan die naam. Je kunt dit controleren met `git branch --show-current`.

9. **Je nieuwe dagelijkse coderitme** (hier wordt het verslavend!):

   Vanaf nu, telkens wanneer je wijzigingen aanbrengt in je project, volg je deze eenvoudige drie stappen:

   ```bash
   git add .
   git commit -m "describe what you changed"
   git push
   ```

   **Dit wordt je coderingsritme:**
   - Maak geweldige wijzigingen in je code ✨
   - Stage ze met `git add` ("Hé Git, let op deze wijzigingen!")
   - Sla ze op met `git commit` en een beschrijvende boodschap (je toekomstige zelf zal je dankbaar zijn!)
   - Deel ze met de wereld met `git push` 🚀
   - Herhaal – echt, dit wordt net zo natuurlijk als ademhalen!

   Ik hou van deze workflow omdat het voelt alsof je meerdere save-punten hebt in een videogame. Heb je een wijziging gemaakt waar je trots op bent? Commit het! Wil je iets risicovols proberen? Geen probleem – je kunt altijd teruggaan naar je laatste commit als het misgaat!

   > 💡 **Tip**: Je wilt misschien ook een `.gitignore`-bestand gebruiken om te voorkomen dat bestanden die je niet wilt volgen op GitHub verschijnen - zoals dat notitiebestand dat je in dezelfde map opslaat maar geen plaats heeft in een openbare repository. Je kunt sjablonen voor `.gitignore`-bestanden vinden op [.gitignore templates](https://github.com/github/gitignore) of er een maken met [gitignore.io](https://www.toptal.com/developers/gitignore).

#### Moderne Git-workflows

Overweeg om deze moderne praktijken te adopteren:

- **Conventional Commits**: Gebruik een gestandaardiseerd formaat voor commitberichten zoals `feat:`, `fix:`, `docs:`, enz. Meer informatie op [conventionalcommits.org](https://www.conventionalcommits.org/)
- **Atomic commits**: Zorg ervoor dat elke commit een enkele logische wijziging vertegenwoordigt.
- **Frequent commits**: Commit vaak met beschrijvende berichten in plaats van grote, zeldzame commits.

#### Commitberichten

Een geweldige Git commit onderwerpregel maakt de volgende zin af:
Als toegepast, zal deze commit <jouw onderwerpregel hier>

Gebruik voor het onderwerp de gebiedende wijs, tegenwoordige tijd: "verander" in plaats van "veranderd" of "verandert". 
Net als in het onderwerp, gebruik je in de body (optioneel) ook de gebiedende wijs, tegenwoordige tijd. De body moet de motivatie voor de wijziging bevatten en dit contrasteren met het vorige gedrag. Je legt de `waarom` uit, niet de `hoe`.

✅ Neem een paar minuten de tijd om rond te kijken op GitHub. Kun je een echt goed commitbericht vinden? Kun je een heel minimaal bericht vinden? Welke informatie vind je het belangrijkst en meest nuttig om over te brengen in een commitbericht?

## Samenwerken met anderen (Het leukste deel!)

Hou je vast, want DIT is waar GitHub absoluut magisch wordt! 🪄 Je hebt geleerd hoe je je eigen code beheert, maar nu duiken we in mijn absolute favoriete deel – samenwerken met geweldige mensen van over de hele wereld.

Stel je dit voor: je wordt morgen wakker en ziet dat iemand in Tokio je code heeft verbeterd terwijl je sliep. Dan lost iemand in Berlijn een bug op waar je mee vastzat. Tegen de middag heeft een ontwikkelaar in São Paulo een functie toegevoegd waar je nooit aan had gedacht. Dat is geen sciencefiction – dat is gewoon een doorsnee dinsdag in het GitHub-universum!

Wat mij echt enthousiast maakt, is dat de samenwerkingsvaardigheden die je nu gaat leren? Dit zijn PRECIES dezelfde workflows die teams bij Google, Microsoft en je favoriete startups elke dag gebruiken. Je leert niet alleen een coole tool – je leert de geheime taal die de hele softwarewereld samen laat werken.

Serieus, zodra je de kick ervaart van iemand die je eerste pull request merge, begrijp je waarom ontwikkelaars zo gepassioneerd zijn over open source. Het is alsof je deel uitmaakt van 's werelds grootste, meest creatieve teamproject!

> Bekijk de video
>
> [![Git en GitHub basisvideo](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

De belangrijkste reden om dingen op GitHub te zetten was om samenwerking met andere ontwikkelaars mogelijk te maken.

In je repository, navigeer naar `Insights > Community` om te zien hoe jouw project zich verhoudt tot aanbevolen communitystandaarden.

Wil je dat je repository er professioneel en uitnodigend uitziet? Ga naar je repository en klik op `Insights > Community`. Deze coole functie laat zien hoe jouw project zich verhoudt tot wat de GitHub-community beschouwt als "goede repository-praktijken."

> 🎯 **Laat je project stralen**: Een goed georganiseerde repository met goede documentatie is als een nette, uitnodigende winkel. Het laat mensen zien dat je om je werk geeft en maakt dat anderen willen bijdragen!

**Wat een repository geweldig maakt:**

| Wat toe te voegen | Waarom het belangrijk is | Wat het voor jou doet |
|-------------------|--------------------------|-----------------------|
| **Beschrijving** | Eerste indruk telt! | Mensen weten meteen wat je project doet |
| **README** | De voorpagina van je project | Als een vriendelijke gids voor nieuwe bezoekers |
| **Bijdrage richtlijnen** | Laat zien dat je hulp verwelkomt | Mensen weten precies hoe ze kunnen helpen |
| **Gedragscode** | Creëert een vriendelijke omgeving | Iedereen voelt zich welkom om deel te nemen |
| **Licentie** | Juridische duidelijkheid | Anderen weten hoe ze je code kunnen gebruiken |
| **Beveiligingsbeleid** | Laat zien dat je verantwoordelijk bent | Toont professionele praktijken |

> 💡 **Pro Tip**: GitHub biedt sjablonen voor al deze bestanden. Wanneer je een nieuwe repository maakt, vink de vakjes aan om deze bestanden automatisch te genereren.

**Moderne GitHub-functies om te verkennen:**

🤖 **Automatisering & CI/CD:**
- **GitHub Actions** voor geautomatiseerd testen en implementeren.
- **Dependabot** voor automatische updates van afhankelijkheden.

💬 **Community & Projectbeheer:**
- **GitHub Discussions** voor communitygesprekken buiten issues.
- **GitHub Projects** voor kanban-stijl projectbeheer.
- **Branch-beschermingsregels** om codekwaliteitsnormen af te dwingen.

Al deze middelen zullen het onboarden van nieuwe teamleden ten goede komen. En dit zijn meestal de dingen waar nieuwe bijdragers naar kijken voordat ze zelfs maar naar je code kijken, om te bepalen of jouw project de juiste plek is om hun tijd aan te besteden.

✅ README-bestanden, hoewel ze tijd kosten om te maken, worden vaak over het hoofd gezien door drukke beheerders. Kun je een voorbeeld vinden van een bijzonder beschrijvende README? Opmerking: er zijn enkele [tools om goede READMEs te maken](https://www.makeareadme.com/) die je misschien wilt proberen.

### Taak: Code samenvoegen

Bijdrage-documentatie helpt mensen bijdragen aan het project. Het legt uit welke soorten bijdragen je zoekt en hoe het proces werkt. Bijdragers moeten een reeks stappen doorlopen om aan je repo op GitHub te kunnen bijdragen:

1. **Fork je repo**. Je wilt waarschijnlijk dat mensen je project _forken_. Forken betekent dat ze een replica van je repository maken op hun GitHub-profiel.
1. **Clone**. Vanaf daar klonen ze het project naar hun lokale machine.
1. **Maak een branch**. Je wilt dat ze een _branch_ maken voor hun werk.
1. **Focus hun wijziging op één gebied**. Vraag bijdragers om hun bijdragen op één ding tegelijk te concentreren - zo is de kans groter dat je hun werk kunt _mergen_. Stel dat ze een bugfix schrijven, een nieuwe functie toevoegen en verschillende tests bijwerken - wat als je slechts 2 van de 3, of 1 van de 3 wijzigingen wilt of kunt implementeren?

✅ Stel je een situatie voor waarin branches bijzonder cruciaal zijn voor het schrijven en verzenden van goede code. Aan welke gebruiksscenario's kun je denken?

> Onthoud, wees de verandering die je in de wereld wilt zien, en maak branches voor je eigen werk. Alle commits die je maakt, worden gemaakt op de branch waar je momenteel naar "uitgecheckt" bent. Gebruik `git status` om te zien welke branch dat is.

Laten we een workflow voor bijdragers doorlopen. Stel dat de bijdrager de repo al heeft _geforkt_ en _gekloned_, zodat ze een Git-repo hebben die klaar is om aan te werken op hun lokale machine:

1. **Maak een branch**. Gebruik de opdracht `git branch` om een branch te maken die de wijzigingen bevat die ze willen bijdragen:

   ```bash
   git branch [branch-name]
   ```

   > 💡 **Moderne aanpak**: Je kunt ook een nieuwe branch maken en er in één opdracht naar overschakelen:
   ```bash
   git switch -c [branch-name]
   ```

1. **Schakel over naar de werkbranch**. Schakel over naar de opgegeven branch en werk de werkmap bij met `git switch`:

   ```bash
   git switch [branch-name]
   ```

   > 💡 **Moderne notitie**: `git switch` is de moderne vervanging voor `git checkout` bij het wisselen van branches. Het is duidelijker en veiliger voor beginners.

1. **Doe je werk**. Op dit punt wil je je wijzigingen toevoegen. Vergeet niet om Git hierover te informeren met de volgende opdrachten:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   > ⚠️ **Kwaliteit van commitberichten**: Zorg ervoor dat je je commit een goede naam geeft, zowel voor jezelf als voor de beheerder van de repo waaraan je helpt. Wees specifiek over wat je hebt veranderd!

1. **Combineer je werk met de `main` branch**. Op een gegeven moment ben je klaar met werken en wil je je werk combineren met dat van de `main` branch. De `main` branch kan ondertussen zijn veranderd, dus zorg ervoor dat je deze eerst bijwerkt naar de nieuwste versie met de volgende opdrachten:

   ```bash
   git switch main
   git pull
   ```

   Op dit punt wil je ervoor zorgen dat eventuele _conflicten_, situaties waarin Git de wijzigingen niet gemakkelijk kan _combineren_, plaatsvinden in je werkbranch. Voer daarom de volgende opdrachten uit:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   De opdracht `git merge main` brengt alle wijzigingen van `main` naar je branch. Hopelijk kun je gewoon doorgaan. Zo niet, dan zal VS Code je vertellen waar Git _verward_ is en pas je de betreffende bestanden aan om aan te geven welke inhoud het meest accuraat is.

   💡 **Modern alternatief**: Overweeg om `git rebase` te gebruiken voor een schonere geschiedenis:
   ```bash
   git rebase main
   ```
   Dit speelt je commits opnieuw af bovenop de nieuwste main branch, waardoor een lineaire geschiedenis ontstaat.

1. **Stuur je werk naar GitHub**. Je werk naar GitHub sturen betekent twee dingen: je branch naar je repo pushen en vervolgens een PR (Pull Request) openen.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   De bovenstaande opdracht maakt de branch aan in je geforkte repo.

1. **Open een PR**. Vervolgens wil je een PR openen. Dit doe je door naar de geforkte repo op GitHub te navigeren. Je ziet een indicatie op GitHub waar wordt gevraagd of je een nieuwe PR wilt maken. Klik daarop en je wordt naar een interface geleid waar je de commitberichttitel kunt wijzigen en een meer geschikte beschrijving kunt geven. Nu ziet de beheerder van de repo die je hebt geforkt deze PR en _duimen maar_ dat ze het waarderen en je PR _mergen_. Je bent nu een bijdrager, yay :)

   💡 **Moderne tip**: Je kunt ook PR's maken met GitHub CLI:
   ```bash
   gh pr create --title "Your PR title" --body "Description of changes"
   ```

   🔧 **Best practices voor PR's**:
   - Link naar gerelateerde issues met trefwoorden zoals "Fixes #123".
   - Voeg screenshots toe voor UI-wijzigingen.
   - Vraag specifieke reviewers.
   - Gebruik concept-PR's voor werk in uitvoering.
   - Zorg ervoor dat alle CI-controles slagen voordat je een review aanvraagt.

1. **Opruimen**. Het wordt als goede gewoonte beschouwd om op te ruimen nadat je een PR succesvol hebt gemerged. Je wilt zowel je lokale branch als de branch die je naar GitHub hebt gepusht opruimen. Verwijder deze eerst lokaal met de volgende opdracht:

   ```bash
   git branch -d [branch-name]
   ```

   Zorg ervoor dat je naar de GitHub-pagina van de geforkte repo gaat en de remote branch verwijdert die je er net naartoe hebt gepusht.

`Pull request` lijkt misschien een vreemde term, omdat je eigenlijk je wijzigingen naar het project wilt pushen. Maar de beheerder (projecteigenaar) of kernteam moet je wijzigingen overwegen voordat ze worden gemerged met de "main" branch van het project. Dus je vraagt eigenlijk om een wijzigingsbeslissing van een beheerder.

Een pull request is de plek om de verschillen die op een branch zijn geïntroduceerd te vergelijken en te bespreken met reviews, opmerkingen, geïntegreerde tests en meer. Een goede pull request volgt ongeveer dezelfde regels als een commitbericht. Je kunt een verwijzing naar een issue in de issue tracker toevoegen, bijvoorbeeld wanneer je werk een issue oplost. Dit doe je door een `#` gevolgd door het nummer van je issue te gebruiken. Bijvoorbeeld `#97`.
🤞Fingers crossed dat alle controles slagen en de projectbeheerder(s) jouw wijzigingen in het project opnemen🤞

Werk je huidige lokale werkbranch bij met alle nieuwe commits van de bijbehorende remote branch op GitHub:

`git pull`

## Bijdragen aan Open Source (Jouw kans om impact te maken!)

Ben je klaar voor iets dat je compleet gaat verbazen? 🤯 Laten we het hebben over bijdragen aan open source projecten – en ik krijg kippenvel bij het idee om dit met je te delen!

Dit is jouw kans om deel uit te maken van iets echt buitengewoons. Stel je voor dat je de tools verbetert die miljoenen ontwikkelaars dagelijks gebruiken, of een bug oplost in een app die je vrienden geweldig vinden. Dat is niet zomaar een droom – dat is waar bijdragen aan open source om draait!

Hier is wat me elke keer weer kippenvel bezorgt: elke tool waarmee je hebt leren werken – je code-editor, de frameworks die we gaan verkennen, zelfs de browser waarin je dit leest – begon met iemand zoals jij die zijn allereerste bijdrage leverde. Die briljante ontwikkelaar die jouw favoriete VS Code-extensie heeft gebouwd? Die was ooit een beginner die met trillende handen op "create pull request" klikte, net zoals jij dat nu gaat doen.

En hier komt het mooiste: de open source community is als de grootste groepsknuffel van het internet. De meeste projecten zoeken actief naar nieuwkomers en hebben issues getagd met "good first issue" speciaal voor mensen zoals jij! Beheerders worden echt enthousiast als ze nieuwe bijdragers zien, omdat ze zich hun eigen eerste stappen herinneren.

Je leert hier niet alleen coderen – je bereidt je voor om deel uit te maken van een wereldwijde familie van bouwers die elke dag wakker worden met de gedachte: "Hoe kunnen we de digitale wereld een beetje beter maken?" Welkom bij de club! 🌟

Laten we eerst een repository (of **repo**) op GitHub vinden die je interesseert en waaraan je een wijziging wilt bijdragen. Je wilt de inhoud ervan naar je computer kopiëren.

✅ Een goede manier om 'beginner-vriendelijke' repos te vinden is door [te zoeken op de tag 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Een repo lokaal kopiëren](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.nl.png)

Er zijn verschillende manieren om code te kopiëren. Eén manier is om de inhoud van de repository te "clonen", via HTTPS, SSH, of met de GitHub CLI (Command Line Interface).

Open je terminal en clone de repository als volgt:
```bash
# Using HTTPS
git clone https://github.com/ProjectURL

# Using SSH (requires SSH key setup)
git clone git@github.com:username/repository.git

# Using GitHub CLI
gh repo clone username/repository
```

Om aan het project te werken, ga je naar de juiste map:
`cd ProjectURL`

Je kunt het hele project ook openen met:
- **[GitHub Codespaces](https://github.com/features/codespaces)** - GitHub's cloudontwikkelomgeving met VS Code in de browser
- **[GitHub Desktop](https://desktop.github.com/)** - Een GUI-applicatie voor Git-operaties  
- **[GitHub.dev](https://github.dev)** - Druk op de `.`-toets in een GitHub-repo om VS Code in de browser te openen
- **VS Code** met de GitHub Pull Requests-extensie

Je kunt de code ook downloaden in een gecomprimeerde map.

### Een paar interessante dingen over GitHub

Je kunt elke openbare repository op GitHub ster geven, volgen en/of "forken". Je kunt je gestarred repositories vinden in het dropdownmenu rechtsboven. Het is als bladwijzers maken, maar dan voor code.

Projecten hebben een issue tracker, meestal op GitHub in het tabblad "Issues", tenzij anders aangegeven, waar mensen problemen met betrekking tot het project bespreken. En het tabblad Pull Requests is waar mensen wijzigingen bespreken en beoordelen die in behandeling zijn.

Projecten kunnen ook discussies hebben in forums, mailinglijsten of chatkanalen zoals Slack, Discord of IRC.

🔧 **Moderne GitHub-functies**:
- **GitHub Discussions** - Ingebouwd forum voor communitygesprekken
- **GitHub Sponsors** - Ondersteun financieel de beheerders  
- **Security tab** - Rapporten over kwetsbaarheden en beveiligingsadviezen
- **Actions tab** - Bekijk geautomatiseerde workflows en CI/CD-pijplijnen
- **Insights tab** - Analyse over bijdragers, commits en de gezondheid van het project
- **Projects tab** - GitHub's ingebouwde projectmanagementtools

✅ Neem een kijkje in je nieuwe GitHub-repo en probeer een paar dingen, zoals instellingen bewerken, informatie toevoegen aan je repo, een project maken (zoals een Kanban-bord), en GitHub Actions instellen voor automatisering. Er is zoveel dat je kunt doen!

---

## 🚀 Uitdaging 

Oké, het is tijd om je nieuwe GitHub-superkrachten te testen! 🚀 Hier is een uitdaging die alles op de meest bevredigende manier duidelijk zal maken:

Pak een vriend (of dat familielid dat altijd vraagt wat je doet met al die "computer dingen") en ga samen op een collaboratief codeeravontuur! Hier gebeurt de echte magie – maak een project, laat hen het forken, maak wat branches, en merge wijzigingen zoals de professionals die jullie aan het worden zijn.

Ik ga niet liegen – je zult waarschijnlijk op een gegeven moment lachen (vooral als jullie allebei proberen dezelfde regel te veranderen), misschien even in verwarring raken, maar je zult zeker die geweldige "aha!"-momenten hebben die al het leren de moeite waard maken. Bovendien is er iets speciaals aan het delen van die eerste succesvolle merge met iemand anders – het is als een kleine viering van hoe ver je bent gekomen!

Heb je nog geen codeervriend? Geen zorgen! De GitHub-community zit vol met ongelooflijk gastvrije mensen die zich herinneren hoe het was om nieuw te zijn. Zoek naar repositories met "good first issue"-labels – ze zeggen eigenlijk "Hey beginners, kom leren met ons!" Hoe geweldig is dat?

## Post-Lecture Quiz
[Post-lecture quiz](https://ff-quizzes.netlify.app/web/en/)

## Review & Blijf Leren

Wauw! 🎉 Kijk eens naar jezelf – je hebt net de basis van GitHub veroverd als een absolute kampioen! Als je hoofd nu een beetje vol voelt, is dat helemaal normaal en eerlijk gezegd een goed teken. Je hebt net tools geleerd die mij weken kostten om comfortabel mee te worden toen ik begon.

Git en GitHub zijn ongelooflijk krachtig (echt, serieus krachtig), en elke ontwikkelaar die ik ken – inclusief degenen die nu als tovenaars lijken – moest oefenen en een beetje struikelen voordat alles klikte. Het feit dat je deze les hebt doorlopen betekent dat je al op weg bent om enkele van de belangrijkste tools in de toolkit van een ontwikkelaar onder de knie te krijgen.

Hier zijn een paar fantastische bronnen om je te helpen oefenen en nog beter te worden:

- [Handleiding voor bijdragen aan open source software](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution) – Jouw routekaart om een verschil te maken
- [Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/) – Houd deze bij de hand voor snelle referentie!

En onthoud: oefening maakt vooruitgang, geen perfectie! Hoe meer je Git en GitHub gebruikt, hoe natuurlijker het wordt. GitHub heeft een aantal geweldige interactieve cursussen gemaakt waarmee je in een veilige omgeving kunt oefenen:

- [Introductie tot GitHub](https://github.com/skills/introduction-to-github)
- [Communiceren met Markdown](https://github.com/skills/communicate-using-markdown)  
- [GitHub Pages](https://github.com/skills/github-pages)
- [Omgaan met merge-conflicten](https://github.com/skills/resolve-merge-conflicts)

**Voel je avontuurlijk? Bekijk deze moderne tools:**
- [GitHub CLI documentatie](https://cli.github.com/manual/) – Voor wanneer je je als een command-line tovenaar wilt voelen
- [GitHub Codespaces documentatie](https://docs.github.com/en/codespaces) – Code in de cloud!
- [GitHub Actions documentatie](https://docs.github.com/en/actions) – Automatiseer alles
- [Git best practices](https://www.atlassian.com/git/tutorials/comparing-workflows) – Verbeter je workflowvaardigheden 

## GitHub Copilot Agent Uitdaging 🚀

Gebruik de Agent-modus om de volgende uitdaging te voltooien:

**Beschrijving:** Maak een collaboratief webontwikkelingsproject dat de volledige GitHub-workflow demonstreert die je in deze les hebt geleerd. Deze uitdaging helpt je om repository-creatie, samenwerkingsfuncties en moderne Git-workflows in een realistische situatie te oefenen.

**Prompt:** Maak een nieuwe openbare GitHub-repository voor een eenvoudig "Web Development Resources"-project. De repository moet een goed gestructureerd README.md-bestand bevatten met een lijst van nuttige webontwikkelingshulpmiddelen en -bronnen, georganiseerd per categorie (HTML, CSS, JavaScript, enz.). Stel de repository in met de juiste communitystandaarden, inclusief een licentie, richtlijnen voor bijdragen en een gedragscode. Maak minstens twee feature branches: één voor het toevoegen van CSS-bronnen en een andere voor JavaScript-bronnen. Maak commits naar elke branch met beschrijvende commitberichten, en maak vervolgens pull requests om de wijzigingen terug te mergen naar main. Schakel GitHub-functies zoals Issues, Discussions in en stel een basis GitHub Actions-workflow in voor geautomatiseerde controles.

## Opdracht 

Jouw missie, als je ervoor kiest om deze te accepteren: Voltooi de [Introductie tot GitHub](https://github.com/skills/introduction-to-github) cursus op GitHub Skills. Deze interactieve cursus laat je alles wat je hebt geleerd oefenen in een veilige, begeleide omgeving. Plus, je krijgt een coole badge als je klaar bent! 🏅

**Klaar voor meer uitdagingen?**
- Stel SSH-authenticatie in voor je GitHub-account (nooit meer wachtwoorden!)
- Probeer GitHub CLI te gebruiken voor je dagelijkse Git-operaties
- Maak een repository met een GitHub Actions-workflow
- Verken GitHub Codespaces door deze repository te openen in een cloudgebaseerde editor

Onthoud: elke expert was ooit een beginner. Je kunt dit! 💪

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.