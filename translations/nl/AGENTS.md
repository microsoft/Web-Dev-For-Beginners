# AGENTS.md

## Projectoverzicht

Dit is een educatieve curriculumrepository voor het onderwijzen van basisprincipes van webontwikkeling aan beginners. Het curriculum is een uitgebreide cursus van 12 weken ontwikkeld door Microsoft Cloud Advocates, met 24 praktische lessen die JavaScript, CSS en HTML behandelen.

### Belangrijke Componenten

- **Educatieve Inhoud**: 24 gestructureerde lessen georganiseerd in projectgebaseerde modules
- **Praktische Projecten**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor en AI Chat Assistant
- **Interactieve Quizzen**: 48 quizzen met elk 3 vragen (voor/na lesbeoordelingen)
- **Meertalige Ondersteuning**: Automatische vertalingen voor 50+ talen via GitHub Actions
- **Technologieën**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (voor AI-projecten)

### Architectuur

- Educatieve repository met lesgebaseerde structuur
- Elke lesmap bevat README, codevoorbeelden en oplossingen
- Onafhankelijke projecten in aparte mappen (quiz-app, diverse lesprojecten)
- Vertalingssysteem met GitHub Actions (co-op-translator)
- Documentatie geleverd via Docsify en beschikbaar als PDF

## Installatiecommando's

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
npm run format     # Format met Prettier
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
# Stel de GITHUB_TOKEN omgevingsvariabele in
python api.py
```

## Ontwikkelworkflow

### Voor Inhoudbijdragers

1. **Fork de repository** naar je GitHub-account
2. **Clone je fork** lokaal
3. **Maak een nieuwe branch** voor je wijzigingen
4. Pas lesinhoud of codevoorbeelden aan
5. Test codewijzigingen in relevante projectmappen
6. Dien pull requests in volgens de bijdrage-richtlijnen

### Voor Leerlingen

1. Fork of clone de repository
2. Navigeer sequentieel door de lesmappen
3. Lees de README-bestanden van elke les
4. Maak pre-les quizzen op https://ff-quizzes.netlify.app/web/
5. Werk door codevoorbeelden in de lesmappen
6. Maak opdrachten en uitdagingen af
7. Maak post-les quizzen

### Live Ontwikkeling

- **Documentatie**: Voer `docsify serve` uit in de root (poort 3000)
- **Quiz App**: Voer `npm run dev` uit in quiz-app map
- **Projecten**: Gebruik VS Code Live Server extensie voor HTML-projecten
- **API Projecten**: Voer `npm start` uit in respectievelijke API-mappen

## Testinstructies

### Quiz App Testen

```bash
cd quiz-app
npm run lint       # Controleer op code stijlproblemen
npm run build      # Controleer of de build slaagt
```

### Bank API Testen

```bash
cd 7-bank-project/api
npm run lint       # Controleer op problemen met code stijl
node server.js     # Controleer of de server zonder fouten start
```

### Algemene Testaanpak

- Dit is een educatieve repository zonder uitgebreide geautomatiseerde tests
- Handmatig testen richt zich op:
  - Codevoorbeelden die foutloos draaien
  - Links in documentatie die werken
  - Project builds die succesvol afronden
  - Voorbeelden die best practices volgen

### Pre-submissie Checks

- Voer `npm run lint` uit in mappen met package.json
- Controleer of markdown links geldig zijn
- Test codevoorbeelden in browser of Node.js
- Controleer dat vertalingen structuur behouden

## Code Stijlrichtlijnen

### JavaScript

- Gebruik moderne ES6+ syntax
- Volg standaard ESLint-configuraties in projecten
- Gebruik betekenisvolle variabele- en functienamen voor educatieve duidelijkheid
- Voeg commentaar toe dat concepten uitlegt voor leerlingen
- Format met Prettier waar geconfigureerd

### HTML/CSS

- Semantische HTML5 elementen
- Responsieve designprincipes
- Duidelijke klassennamenconventies
- Commentaar dat CSS-technieken uitlegt voor leerlingen

### Python

- PEP 8 stijlrichtlijnen
- Duidelijke, educatieve codevoorbeelden
- Type hints waar nuttig voor leren

### Markdown Documentatie

- Duidelijke koppenhiërarchie
- Codeblokken met taalspecificatie
- Links naar aanvullende bronnen
- Screenshots en afbeeldingen in `images/` mappen
- Alt-tekst voor afbeeldingen voor toegankelijkheid

### Bestandsorganisatie

- Lessen genummerd in volgorde (1-getting-started-lessons, 2-js-basics, enz.)
- Elk project heeft `solution/` en vaak `start/` of `your-work/` mappen
- Afbeeldingen opgeslagen in les-specifieke `images/` mappen
- Vertalingen in `translations/{language-code}/` structuur

## Build en Deployment

### Quiz App Deployment (Azure Static Web Apps)

De quiz-app is geconfigureerd voor Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Maakt dist/ map aan
# Zet uit via GitHub Actions workflow bij push naar main
```

Azure Static Web Apps configuratie:
- **App locatie**: `/quiz-app`
- **Output locatie**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### PDF Generatie Documentatie

```bash
npm install                    # Installeer docsify-to-pdf
npm run convert               # Genereer PDF van docs
```

### Docsify Documentatie

```bash
npm install -g docsify-cli    # Installeer Docsify wereldwijd
docsify serve                 # Serveer op localhost:3000
```

### Projectspecifieke Builds

Elke projectmap kan een eigen buildproces hebben:
- Vue projecten: `npm run build` maakt productie bundles
- Statische projecten: Geen build stap, serveer bestanden direct

## Pull Request Richtlijnen

### Titel Formaat

Gebruik duidelijke, beschrijvende titels die het wijzigingsgebied aangeven:
- `[Quiz-app] Voeg nieuwe quiz toe voor les X`
- `[Les-3] Corrigeer typefout in terrarium project`
- `[Vertaling] Voeg Spaanse vertaling toe voor les 5`
- `[Docs] Update installatie-instructies`

### Vereiste Checks

Voor het indienen van een PR:

1. **Codekwaliteit**:
   - Voer `npm run lint` uit in getroffen projectmappen
   - Los alle lintfouten en waarschuwingen op

2. **Build Verificatie**:
   - Voer `npm run build` uit indien van toepassing
   - Zorg dat er geen buildfouten zijn

3. **Link Validatie**:
   - Test alle markdown links
   - Verifieer dat afbeeldingen correct verwijzen

4. **Inhoud Review**:
   - Controleer spelling en grammatica
   - Zorg dat codevoorbeelden correct en educatief zijn
   - Controleer dat vertalingen oorspronkelijke betekenis behouden

### Bijdragereisen

- Ga akkoord met Microsoft CLA (geautomatiseerde check bij eerste PR)
- Volg de [Microsoft Open Source Gedragscode](https://opensource.microsoft.com/codeofconduct/)
- Zie [CONTRIBUTING.md](./CONTRIBUTING.md) voor gedetailleerde richtlijnen
- Verwijs naar issue nummers in PR omschrijving indien van toepassing

### Review Proces

- PR's worden beoordeeld door maintainers en de gemeenschap
- Educatieve helderheid heeft prioriteit
- Codevoorbeelden dienen best practices te volgen
- Vertalingen worden gecontroleerd op nauwkeurigheid en culturele relevantie

## Vertalingssysteem

### Geautomatiseerde Vertaling

- Maakt gebruik van GitHub Actions met co-op-translator workflow
- Verzamelt vertalingen in 50+ talen automatisch
- Bronbestanden in hoofdmappen
- Vertaalde bestanden in `translations/{language-code}/` mappen

### Handmatige Vertaalverbeteringen Toevoegen

1. Zoek bestand in `translations/{language-code}/`
2. Breng verbeteringen aan terwijl de structuur behouden blijft
3. Zorg dat codevoorbeelden functioneel blijven
4. Test gelokaliseerde quizcontent

### Vertaal Metadata

Vertaalde bestanden bevatten metadata-header:
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

## Debuggen en Probleemoplossing

### Veelvoorkomende Problemen

**Quiz app start niet**:
- Controleer Node.js versie (v14+ aanbevolen)
- Verwijder `node_modules` en `package-lock.json`, voer `npm install` opnieuw uit
- Controleer op poortconflicten (standaard: Vite gebruikt poort 5173)

**API server start niet**:
- Controleer Node.js versie (node >=10)
- Controleer of poort al in gebruik is
- Zorg dat alle dependencies zijn geïnstalleerd met `npm install`

**Browser extensie laadt niet**:
- Controleer of manifest.json correct is geformatteerd
- Check browser console op fouten
- Volg browser-specifieke installatie-instructies

**Python chat project problemen**:
- Zorg dat OpenAI package geïnstalleerd is: `pip install openai`
- Controleer of GITHUB_TOKEN omgevingvariabele is ingesteld
- Controleer GitHub Models toegangsrechten

**Docsify serveert geen docs**:
- Installeer docsify-cli globaal: `npm install -g docsify-cli`
- Voer uit vanuit root van repository
- Controleer dat `docs/_sidebar.md` bestaat

### Ontwikkelomgeving Tips

- Gebruik VS Code met Live Server extensie voor HTML-projecten
- Installeer ESLint en Prettier extensies voor consistente formatting
- Gebruik browser DevTools voor JavaScript debugging
- Installeer Vue DevTools browser extensie voor Vue projecten

### Prestatie Overwegingen

- Groot aantal vertaalde bestanden (50+ talen) maakt volledige clones groot
- Gebruik shallow clone als je alleen aan inhoud werkt: `git clone --depth 1`
- Sluit vertalingen uit in zoekopdrachten wanneer je aan Engelse inhoud werkt
- Build processen kunnen traag zijn bij eerste run (npm install, Vite build)

## Beveiligingsoverwegingen

### Omgevingsvariabelen

- API-sleutels mogen nooit gecommit worden in repository
- Gebruik `.env` bestanden (al opgenomen in `.gitignore`)
- Documenteer vereiste omgevingsvariabelen in project README's

### Python Projecten

- Gebruik virtuele omgevingen: `python -m venv venv`
- Houd dependencies up-to-date
- GitHub tokens moeten minimale vereiste permissies hebben

### GitHub Models Toegang

- Personal Access Tokens (PAT) zijn vereist voor GitHub Models
- Tokens moeten als omgevingsvariabelen worden opgeslagen
- Tokens of credentials nooit commiten

## Aanvullende Notities

### Doelgroep

- Volledige beginners in webontwikkeling
- Studenten en zelfstudie
- Docenten die curriculum in klaslokalen gebruiken
- Inhoud is ontworpen voor toegankelijkheid en geleidelijke vaardigheidsopbouw

### Educatieve Filosofie

- Project-gebaseerde leerbenadering
- Frequent kenniscontroles (quizzen)
- Praktische codeer oefeningen
- Voorbeelden uit de echte wereld
- Focus op basisprincipes voor frameworks

### Repository Onderhoud

- Actieve community van leerlingen en bijdragers
- Regelmatige updates van dependencies en inhoud
- Issues en discussies worden door maintainers gemonitord
- Vertalingsupdates geautomatiseerd via GitHub Actions

### Gerelateerde Bronnen

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub bronnen](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) aanbevolen voor leerlingen
- Extra cursussen: generatieve AI, data science, ML, IoT curricula beschikbaar

### Werken met Specifieke Projecten

Voor gedetailleerde instructies over individuele projecten, zie de README-bestanden in:
- `quiz-app/README.md` - Vue 3 quizapplicatie
- `7-bank-project/README.md` - Bankapplicatie met authenticatie
- `5-browser-extension/README.md` - Browser extensie ontwikkeling
- `6-space-game/README.md` - Canvas-gebaseerde game ontwikkeling
- `9-chat-project/README.md` - AI chatassistent project

### Monorepo Structuur

Hoewel dit geen traditionele monorepo is, bevat deze repository meerdere onafhankelijke projecten:
- Elke les staat op zichzelf
- Projecten delen geen dependencies
- Werk aan afzonderlijke projecten zonder impact op anderen
- Clone de gehele repo voor de volledige curriculumervaring

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, verzoeken wij u er rekening mee te houden dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal dient als de gezaghebbende bron te worden beschouwd. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->