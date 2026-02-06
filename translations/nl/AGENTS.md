# AGENTS.md

## Projectoverzicht

Dit is een educatieve curriculumrepository voor het onderwijzen van webontwikkeling fundamentals aan beginners. Het curriculum is een uitgebreide 12-weekse cursus ontwikkeld door Microsoft Cloud Advocates, met 24 praktische lessen over JavaScript, CSS en HTML.

### Belangrijke Onderdelen

- **Educatieve Inhoud**: 24 gestructureerde lessen georganiseerd in projectgebaseerde modules
- **Praktische Projecten**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor en AI Chat Assistant
- **Interactieve Quizzen**: 48 quizzen met elk 3 vragen (voor- en na-les assessments)
- **Meertalige Ondersteuning**: Geautomatiseerde vertalingen voor 50+ talen via GitHub Actions
- **Technologieën**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (voor AI-projecten)

### Architectuur

- Educatieve repository met lesgebaseerde structuur
- Elke lesmap bevat README, codevoorbeelden en oplossingen
- Losstaande projecten in aparte directories (quiz-app, diverse lesprojecten)
- Vertalingssysteem met GitHub Actions (co-op-translator)
- Documentatie geserveerd via Docsify en beschikbaar als PDF

## Setup Commando's

Deze repository is voornamelijk bedoeld voor consumptie van educatieve inhoud. Voor het werken met specifieke projecten:

### Hoofdrepository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start ontwikkelserver
npm run build      # Bouw voor productie
npm run lint       # Voer ESLint uit
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API-server
npm run lint       # Voer ESLint uit
npm run format     # Opmaak met Prettier
```

### Browser Extension Projecten

```bash
cd 5-browser-extension/solution
npm install
# Volg browser-specifieke instructies voor het laden van extensies
```

### Space Game Projecten

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser of gebruik Live Server
```

### Chat Project (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Stel de omgevingsvariabele GITHUB_TOKEN in
python api.py
```

## Ontwikkelworkflow

### Voor Inhoud Bijdragers

1. **Fork de repository** naar je GitHub-account
2. **Clone je fork** lokaal
3. **Maak een nieuwe branch** aan voor je wijzigingen
4. Breng wijzigingen aan in lesinhoud of codevoorbeelden
5. Test eventuele codewijzigingen in relevante projectmappen
6. Dien pull requests in volgens de bijdrage richtlijnen

### Voor Leerlingen

1. Fork of clone de repository
2. Navigeer sequentieel door de lesmappen
3. Lees README-bestanden van elke les
4. Maak de voor-les quizzen op https://ff-quizzes.netlify.app/web/
5. Werk codevoorbeelden door in lesmappen
6. Voltooi opdrachten en uitdagingen
7. Maak de na-les quizzen

### Live Ontwikkeling

- **Documentatie**: Voer `docsify serve` uit in de root (poort 3000)
- **Quiz App**: Voer `npm run dev` uit in quiz-app map
- **Projecten**: Gebruik VS Code Live Server extensie voor HTML-projecten
- **API Projecten**: Voer `npm start` uit in respectievelijke API-mappen

## Testinstructies

### Quiz App Testen

```bash
cd quiz-app
npm run lint       # Controleer op problemen met de code-stijl
npm run build      # Verifieer dat de build slaagt
```

### Bank API Testen

```bash
cd 7-bank-project/api
npm run lint       # Controleer op code stijlproblemen
node server.js     # Controleer of de server zonder fouten start
```

### Algemene Testbenadering

- Dit is een educatieve repository zonder uitgebreide geautomatiseerde tests
- Handmatig testen richt zich op:
  - Codevoorbeelden draaien zonder fouten
  - Links in documentatie werken correct
  - Project builds voltooien succesvol
  - Voorbeelden volgen best practices

### Checks Voor Submitten

- Voer `npm run lint` uit in mappen met package.json
- Controleer of markdown links geldig zijn
- Test codevoorbeelden in browser of Node.js
- Controleer dat vertalingen juiste structuur behouden

## Code Stijl Richtlijnen

### JavaScript

- Gebruik moderne ES6+ syntax
- Volg standaard ESLint configuraties in projecten
- Gebruik betekenisvolle variabele- en functienamen voor educatieve duidelijkheid
- Voeg commentaar toe dat concepten uitlegt voor leerlingen
- Format met Prettier waar geconfigureerd

### HTML/CSS

- Semantische HTML5 elementen
- Responsive design principes
- Duidelijke class naamgevingsconventies
- Commentaar die CSS-technieken uitlegt voor leerlingen

### Python

- PEP 8 stijlrichtlijnen
- Duidelijke, educatieve codevoorbeelden
- Type hints waar nuttig voor leren

### Markdown Documentatie

- Duidelijke kophiërarchie
- Codeblokken met taalspecificatie
- Links naar extra bronnen
- Screenshots en afbeeldingen in `images/` mappen
- Alt-tekst voor afbeeldingen voor toegankelijkheid

### Bestandsorganisatie

- Lessen genummerd in volgorde (1-getting-started-lessons, 2-js-basics, etc.)
- Elk project heeft `solution/` en vaak `start/` of `your-work/` mappen
- Afbeeldingen opgeslagen in les-specifieke `images/` mappen
- Vertalingen in `translations/{language-code}/` structuur

## Build en Deployment

### Quiz App Deployment (Azure Static Web Apps)

De quiz-app is geconfigureerd voor Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Maakt de map dist/ aan
# Zet uit via GitHub Actions workflow bij push naar main
```

Azure Static Web Apps configuratie:
- **App locatie**: `/quiz-app`
- **Output locatie**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentatie PDF Generatie

```bash
npm install                    # Installeer docsify-to-pdf
npm run convert               # Genereer PDF van docs
```

### Docsify Documentatie

```bash
npm install -g docsify-cli    # Installeer Docsify wereldwijd
docsify serve                 # Serveer op localhost:3000
```

### Project-specifieke Builds

Elke projectmap kan een eigen buildproces hebben:
- Vue projecten: `npm run build` maakt productiebundels
- Statische projecten: Geen buildstap, serveer bestanden direct

## Pull Request Richtlijnen

### Titel Formaat

Gebruik duidelijke, beschrijvende titels die het wijzigingsgebied aangeven:
- `[Quiz-app] Nieuwe quiz toevoegen voor les X`
- `[Les-3] Typfout in terrarium project corrigeren`
- `[Vertaling] Spaanse vertaling toevoegen voor les 5`
- `[Docs] Setup instructies bijwerken`

### Vereiste Checks

Voor het indienen van een PR:

1. **Code Kwaliteit**:
   - Voer `npm run lint` uit in getroffen projectmappen
   - Los alle linting fouten en waarschuwingen op

2. **Build Verificatie**:
   - Voer `npm run build` uit indien toepasbaar
   - Zorg voor geen buildfouten

3. **Link Validatie**:
   - Test alle markdown links
   - Controleer of afbeeldingreferenties werken

4. **Inhoud Review**:
   - Proeflees op spelling en grammatica
   - Zorg dat codevoorbeelden correct en educatief zijn
   - Controleer dat vertalingen originele betekenis behouden

### Bijdrageregels

- Ga akkoord met Microsoft CLA (automatische check bij eerste PR)
- Volg de [Microsoft Open Source Gedragscode](https://opensource.microsoft.com/codeofconduct/)
- Zie [CONTRIBUTING.md](./CONTRIBUTING.md) voor gedetailleerde richtlijnen
- Verwijs naar issue nummers in PR beschrijving indien relevant

### Review Proces

- PR's worden beoordeeld door maintainers en community
- Educatieve duidelijkheid heeft prioriteit
- Codevoorbeelden moeten huidige best practices volgen
- Vertalingen worden gecontroleerd op nauwkeurigheid en culturele juistheid

## Vertalingssysteem

### Geautomatiseerde Vertaling

- Gebruikt GitHub Actions met co-op-translator workflow
- Vertaal naar 50+ talen automatisch
- Bronbestanden in hoofddirectories
- Vertaalde bestanden in `translations/{language-code}/` directories

### Handmatige Vertaalverbeteringen Toevoegen

1. Zoek bestand in `translations/{language-code}/`
2. Breng verbeteringen aan met behoud van structuur
3. Zorg dat codevoorbeelden functioneel blijven
4. Test eventueel gelokaliseerde quizinhoud

### Vertaal Metadata

Vertaalde bestanden bevatten metadata header:
```markdown
<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "...",
  "translation_date": "...",
  "source_file": "...",
  "language_code": "..."
}
-->
```

## Debuggen en Problemen Oplossen

### Veelvoorkomende Problemen

**Quiz app start niet**:
- Controleer Node.js versie (v14+ aanbevolen)
- Verwijder `node_modules` en `package-lock.json`, voer `npm install` opnieuw uit
- Controleer op poortconflicten (standaard: Vite gebruikt poort 5173)

**API server start niet**:
- Controleer Node.js versie voldoet aan minimum (node >=10)
- Controleer of poort al in gebruik is
- Zorg dat alle dependencies geïnstalleerd zijn met `npm install`

**Browser extensie laadt niet**:
- Controleer of manifest.json correct geformatteerd is
- Bekijk browserconsole op fouten
- Volg browserspecifieke installatie-instructies voor extensies

**Python chat project problemen**:
- Zorg dat OpenAI package geïnstalleerd is: `pip install openai`
- Controleer dat GITHUB_TOKEN omgevingsvariabele is ingesteld
- Controleer GitHub Models toegangsrechten

**Docsify serveert geen docs**:
- Installeer docsify-cli globaal: `npm install -g docsify-cli`
- Start in root directory van repository
- Controleer dat `docs/_sidebar.md` bestaat

### Ontwikkelomgeving Tips

- Gebruik VS Code met Live Server extensie voor HTML-projecten
- Installeer ESLint en Prettier extensies voor consistente formatting
- Gebruik browser DevTools voor debuggen van JavaScript
- Voor Vue projecten, installeer Vue DevTools browser extensie

### Prestatie Overwegingen

- Groot aantal vertaalde bestanden (50+ talen) maakt volledige klonen groot
- Gebruik shallow clone als je alleen aan inhoud werkt: `git clone --depth 1`
- Sluit vertalingen uit van zoekopdrachten wanneer je aan Engels werkt
- Build processen kunnen traag zijn bij eerste run (npm install, Vite build)

## Beveiligingsoverwegingen

### Omgevingsvariabelen

- API sleutels nooit in repository committen
- Gebruik `.env` bestanden (staan al in `.gitignore`)
- Documenteer vereiste omgevingsvariabelen in project READMEs

### Python Projecten

- Gebruik virtuele omgevingen: `python -m venv venv`
- Houd dependencies up-to-date
- GitHub tokens moeten minimaal vereiste permissies hebben

### GitHub Models Toegang

- Personal Access Tokens (PAT) vereist voor GitHub Models
- Tokens moeten als omgevingsvariabelen opgeslagen worden
- Tokens of credentials nooit committen

## Aanvullende Notities

### Doelgroep

- Complete beginners in webontwikkeling
- Studenten en zelflerenden
- Docenten die het curriculum in klaslokalen gebruiken
- Inhoud ontworpen voor toegankelijkheid en geleidelijke vaardigheidsopbouw

### Educatieve Filosofie

- Projectgebaseerde leerbenadering
- Regelmatige kennistests (quizzen)
- Praktische codeeroefeningen
- Praktijkvoorbeelden
- Focus op fundamentals vóór frameworks

### Repository Onderhoud

- Actieve community van leerlingen en bijdragers
- Regelmatige updates van dependencies en inhoud
- Issues en discussies worden gemonitord door maintainers
- Vertaalupdates geautomatiseerd met GitHub Actions

### Gerelateerde Bronnen

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub bronnen](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) aanbevolen voor lerenden
- Extra cursussen: Generative AI, Data Science, ML, IoT curricula beschikbaar

### Werken met Specifieke Projecten

Voor gedetailleerde instructies per project, zie de README-bestanden in:
- `quiz-app/README.md` - Vue 3 quizapplicatie
- `7-bank-project/README.md` - Bankapplicatie met authenticatie
- `5-browser-extension/README.md` - Browser extensie ontwikkeling
- `6-space-game/README.md` - Canvas-gebaseerd spelontwikkeling
- `9-chat-project/README.md` - AI chat assistant project

### Monorepo Structuur

Hoewel geen traditionele monorepo, bevat deze repository meerdere onafhankelijke projecten:
- Elke les is zelfstandig
- Projecten delen geen dependencies
- Werk aan individuele projecten zonder anderen te beïnvloeden
- Clone de volledige repo voor de volledige curriculumervaring

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u er rekening mee te houden dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het oorspronkelijke document in de oorspronkelijke taal moet als de gezaghebbende bron worden beschouwd. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->