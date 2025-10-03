<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a362efd06d64d4134a0cfe8515a86d34",
  "translation_date": "2025-10-03T11:31:33+00:00",
  "source_file": "AGENTS.md",
  "language_code": "nl"
}
-->
# AGENTS.md

## Projectoverzicht

Dit is een educatieve curriculumrepository voor het onderwijzen van de basisprincipes van webontwikkeling aan beginners. Het curriculum is een uitgebreide 12-weekse cursus ontwikkeld door Microsoft Cloud Advocates, met 24 praktische lessen over JavaScript, CSS en HTML.

### Belangrijke onderdelen

- **Educatieve inhoud**: 24 gestructureerde lessen georganiseerd in projectgebaseerde modules
- **Praktische projecten**: Terrarium, Typingspel, Browserextensie, Ruimtespel, Bankapp, Code-editor en AI-chatassistent
- **Interactieve quizzen**: 48 quizzen met elk 3 vragen (voorafgaande/naderhandse lesbeoordelingen)
- **Meertalige ondersteuning**: Geautomatiseerde vertalingen in meer dan 50 talen via GitHub Actions
- **Technologieën**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (voor AI-projecten)

### Architectuur

- Educatieve repository met lesgebaseerde structuur
- Elke lesmap bevat een README, codevoorbeelden en oplossingen
- Zelfstandige projecten in aparte mappen (quiz-app, diverse lesprojecten)
- Vertalingssysteem met GitHub Actions (co-op-translator)
- Documentatie beschikbaar via Docsify en als PDF

## Setup-commando's

Deze repository is primair bedoeld voor het consumeren van educatieve inhoud. Voor het werken met specifieke projecten:

### Hoofdrepository instellen

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz-app instellen (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### Bankproject-API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Browserextensieprojecten

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Ruimtespelprojecten

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Chatproject (Python-backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Ontwikkelworkflow

### Voor inhoudsbijdraaiers

1. **Fork de repository** naar je GitHub-account
2. **Clone je fork** lokaal
3. **Maak een nieuwe branch** voor je wijzigingen
4. Breng wijzigingen aan in lesinhoud of codevoorbeelden
5. Test eventuele codewijzigingen in relevante projectmappen
6. Dien pull requests in volgens de richtlijnen voor bijdragen

### Voor leerlingen

1. Fork of clone de repository
2. Navigeer naar lesmappen in volgorde
3. Lees README-bestanden voor elke les
4. Maak voorafgaande quizzen op https://ff-quizzes.netlify.app/web/
5. Werk door codevoorbeelden in lesmappen
6. Voltooi opdrachten en uitdagingen
7. Maak naderhandse quizzen

### Live ontwikkeling

- **Documentatie**: Voer `docsify serve` uit in de root (poort 3000)
- **Quiz-app**: Voer `npm run dev` uit in de quiz-app-map
- **Projecten**: Gebruik de Live Server-extensie van VS Code voor HTML-projecten
- **API-projecten**: Voer `npm start` uit in de respectieve API-mappen

## Testinstructies

### Quiz-app testen

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Bank-API testen

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Algemene testaanpak

- Dit is een educatieve repository zonder uitgebreide geautomatiseerde tests
- Handmatige tests richten zich op:
  - Codevoorbeelden draaien zonder fouten
  - Links in documentatie werken correct
  - Projecten bouwen succesvol
  - Voorbeelden volgen best practices

### Controle vóór indiening

- Voer `npm run lint` uit in mappen met package.json
- Controleer of markdown-links geldig zijn
- Test codevoorbeelden in de browser of Node.js
- Controleer of vertalingen de juiste structuur behouden

## Richtlijnen voor codestijl

### JavaScript

- Gebruik moderne ES6+ syntax
- Volg standaard ESLint-configuraties die in projecten worden geleverd
- Gebruik betekenisvolle variabele- en functienamen voor educatieve duidelijkheid
- Voeg opmerkingen toe die concepten uitleggen voor leerlingen
- Formatteer met Prettier waar geconfigureerd

### HTML/CSS

- Semantische HTML5-elementen
- Responsieve ontwerpprincipes
- Duidelijke klassennaamgeving
- Opmerkingen die CSS-technieken uitleggen voor leerlingen

### Python

- PEP 8-stijlrichtlijnen
- Duidelijke, educatieve codevoorbeelden
- Type hints waar nuttig voor leren

### Markdown-documentatie

- Duidelijke koppenhiërarchie
- Codeblokken met taalspecificatie
- Links naar aanvullende bronnen
- Screenshots en afbeeldingen in `images/`-mappen
- Alt-tekst voor afbeeldingen voor toegankelijkheid

### Bestandsorganisatie

- Lessen genummerd in volgorde (1-getting-started-lessons, 2-js-basics, enz.)
- Elk project heeft `solution/` en vaak `start/` of `your-work/`-mappen
- Afbeeldingen opgeslagen in les-specifieke `images/`-mappen
- Vertalingen in `translations/{language-code}/`-structuur

## Build en deployment

### Quiz-app deployment (Azure Static Web Apps)

De quiz-app is geconfigureerd voor Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Azure Static Web Apps-configuratie:
- **App-locatie**: `/quiz-app`
- **Output-locatie**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentatie PDF-generatie

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Docsify-documentatie

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Projectspecifieke builds

Elke projectmap kan zijn eigen buildproces hebben:
- Vue-projecten: `npm run build` maakt productie-bundels
- Statische projecten: Geen buildstap, bestanden direct serveren

## Richtlijnen voor pull requests

### Titelindeling

Gebruik duidelijke, beschrijvende titels die het gebied van wijziging aangeven:
- `[Quiz-app] Nieuwe quiz toevoegen voor les X`
- `[Les-3] Typfout corrigeren in terrariumproject`
- `[Vertaling] Spaanse vertaling toevoegen voor les 5`
- `[Docs] Setup-instructies bijwerken`

### Vereiste controles

Voordat je een PR indient:

1. **Codekwaliteit**:
   - Voer `npm run lint` uit in de getroffen projectmappen
   - Los alle lintingfouten en -waarschuwingen op

2. **Buildverificatie**:
   - Voer `npm run build` uit indien van toepassing
   - Zorg ervoor dat er geen buildfouten zijn

3. **Linkvalidatie**:
   - Test alle markdown-links
   - Controleer of afbeeldingsverwijzingen werken

4. **Inhoudscontrole**:
   - Controleer op spelling en grammatica
   - Zorg ervoor dat codevoorbeelden correct en educatief zijn
   - Controleer of vertalingen de oorspronkelijke betekenis behouden

### Bijdragevereisten

- Ga akkoord met Microsoft CLA (automatische controle bij eerste PR)
- Volg de [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Zie [CONTRIBUTING.md](./CONTRIBUTING.md) voor gedetailleerde richtlijnen
- Verwijs naar issuetickets in de PR-beschrijving indien van toepassing

### Reviewproces

- PR's worden beoordeeld door maintainers en de community
- Educatieve duidelijkheid heeft prioriteit
- Codevoorbeelden moeten huidige best practices volgen
- Vertalingen worden beoordeeld op nauwkeurigheid en culturele geschiktheid

## Vertalingssysteem

### Geautomatiseerde vertaling

- Gebruikt GitHub Actions met co-op-translator workflow
- Vertaalt automatisch naar meer dan 50 talen
- Bronbestanden in hoofdmap
- Vertaalde bestanden in `translations/{language-code}/`-mappen

### Handmatige verbeteringen aan vertalingen toevoegen

1. Zoek bestand in `translations/{language-code}/`
2. Breng verbeteringen aan terwijl je de structuur behoudt
3. Zorg ervoor dat codevoorbeelden functioneel blijven
4. Test eventuele gelokaliseerde quizinhoud

### Metadata van vertalingen

Vertaalde bestanden bevatten een metadata-header:
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

## Debugging en probleemoplossing

### Veelvoorkomende problemen

**Quiz-app start niet**:
- Controleer Node.js-versie (v14+ aanbevolen)
- Verwijder `node_modules` en `package-lock.json`, voer `npm install` opnieuw uit
- Controleer op poortconflicten (standaard: Vite gebruikt poort 5173)

**API-server start niet**:
- Controleer of Node.js-versie voldoet aan minimumvereisten (node >=10)
- Controleer of poort al in gebruik is
- Zorg ervoor dat alle afhankelijkheden zijn geïnstalleerd met `npm install`

**Browserextensie laadt niet**:
- Controleer of manifest.json correct is geformatteerd
- Controleer browserconsole op fouten
- Volg browser-specifieke installatie-instructies voor extensies

**Python-chatprojectproblemen**:
- Zorg ervoor dat OpenAI-pakket is geïnstalleerd: `pip install openai`
- Controleer of GITHUB_TOKEN-omgevingsvariabele is ingesteld
- Controleer toegangsmachtigingen voor GitHub Models

**Docsify serveert geen docs**:
- Installeer docsify-cli globaal: `npm install -g docsify-cli`
- Voer uit vanuit de rootmap van de repository
- Controleer of `docs/_sidebar.md` bestaat

### Tips voor ontwikkelomgeving

- Gebruik VS Code met Live Server-extensie voor HTML-projecten
- Installeer ESLint- en Prettier-extensies voor consistente opmaak
- Gebruik browser DevTools voor het debuggen van JavaScript
- Voor Vue-projecten, installeer Vue DevTools-browserextensie

### Prestatieoverwegingen

- Groot aantal vertaalde bestanden (50+ talen) betekent dat volledige clones groot zijn
- Gebruik een shallow clone als je alleen aan inhoud werkt: `git clone --depth 1`
- Sluit vertalingen uit van zoekopdrachten bij het werken aan Engelse inhoud
- Buildprocessen kunnen traag zijn bij de eerste run (npm install, Vite build)

## Veiligheidsoverwegingen

### Omgevingsvariabelen

- API-sleutels mogen nooit in de repository worden opgenomen
- Gebruik `.env`-bestanden (al in `.gitignore`)
- Documenteer vereiste omgevingsvariabelen in project-README's

### Python-projecten

- Gebruik virtuele omgevingen: `python -m venv venv`
- Houd afhankelijkheden up-to-date
- GitHub-tokens moeten minimale vereiste machtigingen hebben

### Toegang tot GitHub Models

- Persoonlijke toegangstokens (PAT) vereist voor GitHub Models
- Tokens moeten worden opgeslagen als omgevingsvariabelen
- Nooit tokens of inloggegevens opnemen in de repository

## Aanvullende opmerkingen

### Doelgroep

- Volledige beginners in webontwikkeling
- Studenten en zelflerenden
- Docenten die het curriculum in klaslokalen gebruiken
- Inhoud is ontworpen voor toegankelijkheid en geleidelijke vaardigheidsopbouw

### Educatieve filosofie

- Projectgebaseerde leerbenadering
- Regelmatige kenniscontroles (quizzen)
- Praktische codeoefeningen
- Voorbeelden van toepassingen in de echte wereld
- Focus op basisprincipes vóór frameworks

### Onderhoud van de repository

- Actieve community van leerlingen en bijdragers
- Regelmatige updates van afhankelijkheden en inhoud
- Issues en discussies worden gemonitord door maintainers
- Vertalingsupdates geautomatiseerd via GitHub Actions

### Gerelateerde bronnen

- [Microsoft Learn-modules](https://docs.microsoft.com/learn/)
- [Student Hub-bronnen](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) aanbevolen voor leerlingen
- Aanvullende cursussen: Generatieve AI, Data Science, ML, IoT-curricula beschikbaar

### Werken met specifieke projecten

Voor gedetailleerde instructies over individuele projecten, raadpleeg de README-bestanden in:
- `quiz-app/README.md` - Vue 3 quiz-applicatie
- `7-bank-project/README.md` - Bankapplicatie met authenticatie
- `5-browser-extension/README.md` - Ontwikkeling van browserextensies
- `6-space-game/README.md` - Canvas-gebaseerde spelontwikkeling
- `9-chat-project/README.md` - AI-chatassistentproject

### Monorepo-structuur

Hoewel geen traditionele monorepo, bevat deze repository meerdere onafhankelijke projecten:
- Elke les is zelfstandig
- Projecten delen geen afhankelijkheden
- Werk aan individuele projecten zonder anderen te beïnvloeden
- Clone de volledige repo voor de volledige curriculumervaring

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.