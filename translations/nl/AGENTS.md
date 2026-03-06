# AGENTS.md

## Projectoverzicht

Dit is een educatieve curriculumrepository voor het onderwijzen van webontwikkeling aan beginners. Het curriculum is een uitgebreide cursus van 12 weken ontwikkeld door Microsoft Cloud Advocates, met 24 hands-on lessen over JavaScript, CSS en HTML.

### Belangrijkste Onderdelen

- **Educatieve inhoud**: 24 gestructureerde lessen georganiseerd in projectgebaseerde modules
- **Praktische projecten**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor en AI Chat Assistant
- **Interactieve quizzen**: 48 quizzen met elk 3 vragen (pre/post-les beoordelingen)
- **Meertalige ondersteuning**: Geautomatiseerde vertalingen voor 50+ talen via GitHub Actions
- **Technologieën**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (voor AI-projecten)

### Architectuur

- Educatieve repository met lesgebaseerde structuur
- Elke lesmap bevat README, codevoorbeelden en oplossingen
- Losstaande projecten in aparte directories (quiz-app, diverse lesprojecten)
- Vertalingssysteem via GitHub Actions (co-op-translator)
- Documentatie geserveerd via Docsify en beschikbaar als PDF

## Setup Commando's

Deze repository is primair bedoeld voor het consumeren van educatieve inhoud. Voor het werken met specifieke projecten:

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
# Open index.html in de browser of gebruik Live Server
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
5. Test eventuele codewijzigingen in relevante projectdirectories
6. Dien pull requests in volgens de bijdrage-richtlijnen

### Voor Leerlingen

1. Fork of clone de repository
2. Navigeer sequentieel naar lesdirectories
3. Lees README-bestanden voor iedere les
4. Maak de pre-les quizzen op https://ff-quizzes.netlify.app/web/
5. Werk door codevoorbeelden in lesmappen
6. Voltooi opdrachten en uitdagingen
7. Maak post-les quizzen

### Live Ontwikkeling

- **Documentatie**: Run `docsify serve` in root (poort 3000)
- **Quiz App**: Run `npm run dev` in quiz-app directory
- **Projecten**: Gebruik VS Code Live Server extensie voor HTML-projecten
- **API Projecten**: Run `npm start` in respectievelijke API directories

## Testinstructies

### Quiz App Testing

```bash
cd quiz-app
npm run lint       # Controleer op problemen met code-stijl
npm run build      # Verifieer dat de build slaagt
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # Controleren op problemen met de code stijl
node server.js     # Controleren of de server zonder fouten start
```

### Algemene Testaanpak

- Dit is een educatieve repository zonder uitgebreide geautomatiseerde tests
- Handmatig testen focust op:
  - Codevoorbeelden draaien zonder fouten
  - Links in documentatie werken correct
  - Project builds verlopen succesvol
  - Voorbeelden volgen best practices

### Pre-Submission Checks

- Run `npm run lint` in directories met package.json
- Verifieer dat markdown links geldig zijn
- Test codevoorbeelden in browser of Node.js
- Controleer dat vertalingen juiste structuur behouden

## Code Style Richtlijnen

### JavaScript

- Gebruik moderne ES6+ syntax
- Volg standaard ESLint configuraties zoals in projecten opgegeven
- Gebruik betekenisvolle variabele- en functienamen voor educatieve duidelijkheid
- Voeg commentaar toe die concepten uitlegt voor leerlingen
- Format met Prettier waar geconfigureerd

### HTML/CSS

- Semantische HTML5-elementen
- Responsive design principes
- Duidelijke class naming conventies
- Commentaar dat CSS-technieken uitlegt voor leerlingen

### Python

- PEP 8 stijlrichtlijnen
- Duidelijke, educatieve codevoorbeelden
- Type hints waar nuttig voor leren

### Markdown Documentatie

- Duidelijke koppenhiërarchie
- Codeblokken met taalspecificatie
- Links naar aanvullende bronnen
- Screenshots en afbeeldingen in `images/` directories
- Alt-tekst voor afbeeldingen voor toegankelijkheid

### Bestandsorganisatie

- Lessen oplopend genummerd (1-getting-started-lessons, 2-js-basics, etc.)
- Elk project heeft `solution/` en vaak `start/` of `your-work/` directories
- Afbeeldingen opgeslagen in les-specifieke `images/` mappen
- Vertalingen in `translations/{language-code}/` structuur

## Build en Deployment

### Quiz App Deployment (Azure Static Web Apps)

De quiz-app is geconfigureerd voor Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Maakt map dist/ aan
# Zet uit via GitHub Actions workflow bij push naar main
```

Azure Static Web Apps configuratie:
- **App locatie**: `/quiz-app`
- **Output locatie**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generatie van Documentatie PDF

```bash
npm install                    # Installeer docsify-to-pdf
npm run convert               # Genereer PDF van docs
```

### Docsify Documentatie

```bash
npm install -g docsify-cli    # Installeer Docsify wereldwijd
docsify serve                 # Server op localhost:3000
```

### Projectspecifieke Builds

Elke projectdirectory kan zijn eigen buildproces hebben:
- Vue projecten: `npm run build` creëert productie bundles
- Statische projecten: Geen buildstap, serveer bestanden direct

## Pull Request Richtlijnen

### Titel Formaat

Gebruik duidelijke, beschrijvende titels die het wijzigingsgebied aangeven:
- `[Quiz-app] Voeg nieuwe quiz toe voor les X`
- `[Lesson-3] Corrigeer typefout in terrarium project`
- `[Translation] Voeg Spaanse vertaling toe voor les 5`
- `[Docs] Werk setup-instructies bij`

### Vereiste Checks

Voor het indienen van een PR:

1. **Codekwaliteit**:
   - Run `npm run lint` in de betrokken projectdirectories
   - Los alle linting-fouten en waarschuwingen op

2. **Build-verificatie**:
   - Run `npm run build` indien van toepassing
   - Zorg dat er geen buildfouten zijn

3. **Link validatie**:
   - Test alle markdown links
   - Verifieer dat afbeeldingsreferenties werken

4. **Inhoud Review**:
   - Corrigeer spelling en grammatica
   - Zorg dat codevoorbeelden correct en educatief zijn
   - Controleer dat vertalingen oorspronkelijke betekenis behouden

### Bijdrage Vereisten

- Ga akkoord met Microsoft CLA (automatische check bij eerste PR)
- Volg de [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Zie [CONTRIBUTING.md](./CONTRIBUTING.md) voor gedetailleerde richtlijnen
- Verwijs naar issuetickets in PR-beschrijving indien relevant

### Review Proces

- PR's worden beoordeeld door maintainers en community
- Educatieve duidelijkheid wordt prioriteit gegeven
- Codevoorbeelden moeten huidige best practices volgen
- Vertalingen worden beoordeeld op nauwkeurigheid en culturele passendheid

## Vertalingssysteem

### Geautomatiseerde Vertaling

- Gebruikt GitHub Actions met co-op-translator workflow
- Vertalingen naar 50+ talen automatisch
- Bronbestanden in hoofddirectories
- Vertaalde bestanden in `translations/{language-code}/` directories

### Handmatige Vertaalverbeteringen Toevoegen

1. Zoek bestand op in `translations/{language-code}/`
2. Breng verbeteringen aan met behoud van structuur
3. Zorg dat codevoorbeelden functioneel blijven
4. Test eventuele gelokaliseerde quizinhoud

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

## Debugging en Probleemoplossing

### Veelvoorkomende Problemen

**Quiz app start niet**:
- Controleer Node.js versie (v14+ aanbevolen)
- Verwijder `node_modules` en `package-lock.json`, run `npm install` opnieuw
- Controleer op poortconflicten (standaard: Vite gebruikt poort 5173)

**API server start niet**:
- Verifieer dat Node.js versie minimaal is (node >=10)
- Controleer of poort al in gebruik is
- Zorg dat alle dependencies geïnstalleerd zijn met `npm install`

**Browser extensie laadt niet**:
- Controleer of manifest.json correct is geformatteerd
- Bekijk browserconsole op fouten
- Volg browser-specifieke installatie-instructies voor extensies

**Python chat project problemen**:
- Zorg dat OpenAI pakket geïnstalleerd is: `pip install openai`
- Controleer of GITHUB_TOKEN omgevingsvariabele ingesteld is
- Controleer GitHub Models toegangsrechten

**Docsify serveert geen documentatie**:
- Installeer docsify-cli globaal: `npm install -g docsify-cli`
- Run vanuit root van repository
- Controleer dat `docs/_sidebar.md` bestaat

### Tips voor Ontwikkelomgeving

- Gebruik VS Code met Live Server-extensie voor HTML-projecten
- Installeer ESLint en Prettier extensies voor consistente formattering
- Gebruik browser DevTools voor debugging van JavaScript
- Voor Vue projecten, installeer Vue DevTools browserextensie

### Prestatie Overwegingen

- Groot aantal vertaalde bestanden (50+ talen) betekent grote volledige clones
- Gebruik shallow clone als je alleen aan inhoud werkt: `git clone --depth 1`
- Sluit vertalingen uit van zoekopdrachten bij werken in Engelse inhoud
- Buildprocessen kunnen traag zijn bij eerste run (npm install, Vite build)

## Beveiligingsoverwegingen

### Omgevingsvariabelen

- API-sleutels mogen nooit in de repository gecommit worden
- Gebruik `.env` bestanden (staan al in `.gitignore`)
- Documenteer vereiste omgevingsvariabelen in project READMEs

### Python Projecten

- Gebruik virtuele omgevingen: `python -m venv venv`
- Houd dependencies up-to-date
- GitHub tokens moeten minimale vereiste permissies hebben

### GitHub Models Toegang

- Persoonlijke toegangs-token (PAT) vereist voor GitHub Models
- Tokens moeten als omgevingsvariabelen worden opgeslagen
- Tokens en inloggegevens nooit comitten

## Aanvullende Notities

### Doelgroep

- Complete beginners in webontwikkeling
- Studenten en zelflerenden
- Docenten die curriculum in klaslokalen gebruiken
- Inhoud is ontworpen voor toegankelijkheid en geleidelijke vaardighedenopbouw

### Educatieve Filosofie

- Projectgebaseerde leerbenadering
- Regelmatige kennischecks (quizzen)
- Hands-on programmeeroefeningen
- Voorbeelden met echte toepassingen
- Focus op basisprincipes vóór frameworks

### Repository Onderhoud

- Actieve gemeenschap van leerlingen en bijdragers
- Regelmatige updates van dependencies en inhoud
- Issues en discussies worden gemonitord door maintainers
- Vertaalupdates geautomatiseerd via GitHub Actions

### Gerelateerde Bronnen

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub bronnen](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) aanbevolen voor leerlingen
- Extra cursussen: Generatieve AI, Data Science, ML, IoT curricula beschikbaar

### Werken met Specifieke Projecten

Voor gedetailleerde instructies per individueel project, zie de README-bestanden in:
- `quiz-app/README.md` - Vue 3 quizapplicatie
- `7-bank-project/README.md` - Banking applicatie met authenticatie
- `5-browser-extension/README.md` - Browser extensie ontwikkeling
- `6-space-game/README.md` - Canvas-gebaseerde game ontwikkeling
- `9-chat-project/README.md` - AI chat assistent project

### Monorepo Structuur

Hoewel dit geen traditionele monorepo is, bevat deze repository meerdere onafhankelijke projecten:
- Elke les is op zichzelf staand
- Projecten delen geen dependencies
- Werk aan individuele projecten zonder anderen te beïnvloeden
- Clone de hele repo voor de volledige curriculumervaring

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel wij streven naar nauwkeurigheid, dient u er rekening mee te houden dat automatische vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal wordt beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->