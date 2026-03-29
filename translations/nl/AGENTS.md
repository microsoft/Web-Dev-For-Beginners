# AGENTS.md

## Projectoverzicht

Dit is een educatieve curriculum-repository voor het onderwijzen van webontwikkeling basisprincipes aan beginners. Het curriculum is een uitgebreide cursus van 12 weken ontwikkeld door Microsoft Cloud Advocates, met 24 praktijkgerichte lessen over JavaScript, CSS en HTML.

### Belangrijkste Onderdelen

- **Educatieve Inhoud**: 24 gestructureerde lessen georganiseerd in projectgebaseerde modules
- **Praktische Projecten**: Terrarium, Typing Game, Browser Extensie, Space Game, Banking App, Code Editor en AI Chat Assistent
- **Interactieve Quizzen**: 48 quizzen met elk 3 vragen (pre/post-les assessments)
- **Meertalige Ondersteuning**: Automatische vertalingen voor 50+ talen via GitHub Actions
- **Technologieën**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (voor AI projecten)

### Architectuur

- Educatieve repository met les-gebaseerde structuur
- Elke lesmap bevat README, codevoorbeelden en oplossingen
- Standalone projecten in aparte directories (quiz-app, diverse lesprojecten)
- Vertalingssysteem gebruikmakend van GitHub Actions (co-op-translator)
- Documentatie aangeboden via Docsify en beschikbaar als PDF

## Setup Commando’s

Deze repository is primair voor consumptie van educatieve inhoud. Voor werken met specifieke projecten:

### Hoofd Repository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start ontwikkelserver
npm run build      # Bouwen voor productie
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

### Browser Extensie Projecten

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
3. **Maak een nieuwe branch** voor je wijzigingen
4. Breng wijzigingen aan in lesinhoud of codevoorbeelden
5. Test codewijzigingen in relevante projectmappen
6. Dien pull requests in volgens de bijdrage richtlijnen

### Voor Leerlingen

1. Fork of clone de repository
2. Navigeer sequentieel door lesmappen
3. Lees README bestanden voor elke les
4. Maak pre-les quizzen op https://ff-quizzes.netlify.app/web/
5. Werk door codevoorbeelden in lesmappen
6. Voltooi opdrachten en uitdagingen
7. Maak post-les quizzen

### Live Ontwikkeling

- **Documentatie**: Voer `docsify serve` uit in root (poort 3000)
- **Quiz App**: Voer `npm run dev` uit in quiz-app directory
- **Projecten**: Gebruik VS Code Live Server extensie voor HTML projecten
- **API Projecten**: Voer `npm start` uit in respectievelijke API directories

## Testinstructies

### Quiz App Testen

```bash
cd quiz-app
npm run lint       # Controleer op problemen met de code stijl
npm run build      # Verifieer dat de build slaagt
```

### Bank API Testen

```bash
cd 7-bank-project/api
npm run lint       # Controleer op code-stijl problemen
node server.js     # Controleer of de server zonder fouten start
```

### Algemene Testaanpak

- Dit is een educatieve repository zonder uitgebreide geautomatiseerde tests
- Handmatig testen richt zich op:
  - Codevoorbeelden draaien zonder fouten
  - Links in documentatie functioneren correct
  - Project builds slagen succesvol
  - Voorbeelden volgen best practices

### Pre-submissie Checks

- Voer `npm run lint` uit in directories met package.json
- Controleer of markdown links geldig zijn
- Test codevoorbeelden in browser of Node.js
- Controleer dat vertalingen juiste structuur behouden

## Code Stilering Richtlijnen

### JavaScript

- Gebruik moderne ES6+ syntax
- Volg standaard ESLint configuraties zoals geleverd in projecten
- Gebruik betekenisvolle variabele- en functienamen voor educatieve duidelijkheid
- Voeg commentaar toe ter uitleg van concepten voor leerlingen
- Format gebruik makend van Prettier waar geconfigureerd

### HTML/CSS

- Semantische HTML5 elementen
- Responsive design principes
- Duidelijke class naamgevingsconventies
- Comments die CSS-technieken uitleggen voor leerlingen

### Python

- PEP 8 stijl richtlijnen
- Duidelijke educatieve codevoorbeelden
- Type hints waar nuttig voor leerdoelen

### Markdown Documentatie

- Duidelijke koppenhiërarchie
- Codeblokken met taalspecificatie
- Links naar extra resources
- Screenshots en afbeeldingen in `images/` directories
- Alt-tekst voor afbeeldingen voor toegankelijkheid

### Bestandsorganisatie

- Lessen genummerd in oplopende volgorde (1-getting-started-lessons, 2-js-basics, etc.)
- Elk project heeft `solution/` en vaak `start/` of `your-work/` directories
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

### Documentatie PDF Generatie

```bash
npm install                    # Installeer docsify-to-pdf
npm run convert               # Genereer PDF van docs
```

### Docsify Documentatie

```bash
npm install -g docsify-cli    # Installeer Docsify wereldwijd
docsify serve                 # Server op localhost:3000
```

### Project-specifieke Builds

Elke projectdirectory kan een eigen buildproces hebben:
- Vue projecten: `npm run build` creëert productie bundles
- Statische projecten: Geen build stap, bestanden direct serveren

## Pull Request Richtlijnen

### Titel Formaat

Gebruik duidelijke, beschrijvende titels die gebied van wijziging aangeven:
- `[Quiz-app] Nieuwe quiz toegevoegd voor les X`
- `[Lesson-3] Typfout opgelost in terrarium project`
- `[Vertaling] Spaanse vertaling toegevoegd voor les 5`
- `[Docs] Setup instructies bijgewerkt`

### Vereiste Checks

Voordat je een PR indient:

1. **Code Kwaliteit**:
   - Voer `npm run lint` uit in betrokken projectdirectories
   - Los alle lint fouten en waarschuwingen op

2. **Build Verificatie**:
   - Voer `npm run build` uit indien van toepassing
   - Zorg dat er geen build fouten zijn

3. **Link Validatie**:
   - Test alle markdown links
   - Controleer dat afbeelding-referenties werken

4. **Inhoud Review**:
   - Controleer spelling en grammatica
   - Zorg dat codevoorbeelden juist zijn en educatief
   - Verifieer dat vertalingen oorspronkelijke betekenis behouden

### Bijdragevereisten

- Akkoord gaan met Microsoft CLA (automatische check bij eerste PR)
- Volg de [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Zie [CONTRIBUTING.md](./CONTRIBUTING.md) voor gedetailleerde richtlijnen
- Verwijs naar issue nummers in PR beschrijving indien van toepassing

### Review Proces

- PRs worden beoordeeld door maintainers en community
- Educatieve duidelijkheid staat voorop
- Codevoorbeelden moeten huidige best practices volgen
- Vertalingen worden gecontroleerd op nauwkeurigheid en culturele geschiktheid

## Vertalingssysteem

### Geautomatiseerde Vertaling

- Maakt gebruik van GitHub Actions met co-op-translator workflow
- Vertaal naar 50+ talen automatisch
- Bronbestanden in hoofd directories
- Vertaalde bestanden in `translations/{language-code}/` directories

### Handmatige Vertalingsverbeteringen Toevoegen

1. Zoek bestand in `translations/{language-code}/`
2. Breng verbeteringen aan met behoud van structuur
3. Zorg dat codevoorbeelden functioneel blijven
4. Test eventueel gelokaliseerde quizinhoud

### Vertalingsmetadata

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

**Quiz app start niet op**:
- Controleer Node.js versie (v14+ aanbevolen)
- Verwijder `node_modules` en `package-lock.json`, voer `npm install` opnieuw uit
- Controleer op poortconflicten (standaard: Vite gebruikt poort 5173)

**API server start niet**:
- Verifieer dat Node.js versie voldoet aan minimum (node >=10)
- Controleer of poort al in gebruik is
- Zorg dat alle dependencies geïnstalleerd zijn met `npm install`

**Browser extensie laadt niet**:
- Verifieer dat manifest.json correct is geformatteerd
- Controleer browserconsole op fouten
- Volg browser-specifieke extensie-installatie instructies

**Python chat project problemen**:
- Zorg dat OpenAI pakket geïnstalleerd is: `pip install openai`
- Verifieer dat GITHUB_TOKEN omgeving variabele is ingesteld
- Controleer GitHub Models toegangsmachtigingen

**Docsify serveert geen docs**:
- Installeer docsify-cli globaal: `npm install -g docsify-cli`
- Start vanuit root directory van repository
- Controleer dat `docs/_sidebar.md` bestaat

### Ontwikkelomgeving Tips

- Gebruik VS Code met Live Server extensie voor HTML projecten
- Installeer ESLint en Prettier extensies voor consistente formatting
- Gebruik browser DevTools voor JavaScript debugging
- Voor Vue projecten, installeer Vue DevTools browser extensie

### Prestatie Overwegingen

- Groot aantal vertaalde bestanden (50+ talen) maakt volledige clones groot
- Gebruik shallow clone indien je alleen aan inhoud werkt: `git clone --depth 1`
- Sluit vertalingen uit van zoekopdrachten indien je aan Engelse inhoud werkt
- Build processen kunnen traag zijn bij eerste run (npm install, Vite build)

## Beveiligingsoverwegingen

### Omgevingsvariabelen

- API-sleutels mogen nooit worden gecommit naar repository
- Gebruik `.env` bestanden (al in `.gitignore`)
- Documenteer vereiste omgevingsvariabelen in project README’s

### Python Projecten

- Gebruik virtual environments: `python -m venv venv`
- Houd dependencies up-to-date
- GitHub tokens moeten minimale vereiste permissies hebben

### GitHub Models Toegang

- Persoonlijke toegangstokens (PAT) vereist voor GitHub Models
- Tokens dienen als omgevingsvariabelen te worden opgeslagen
- Token of inloggegevens nooit commiten

## Aanvullende Notities

### Doelgroep

- Volledige beginners in webontwikkeling
- Studenten en zelflerenden
- Docenten die curriculum in klaslokalen gebruiken
- Inhoud is ontworpen voor toegankelijkheid en geleidelijke vaardigheidsopbouw

### Educatieve Filosofie

- Project-gebaseerd leerproces
- Frequente kenniscontroles (quizzen)
- Praktische codeeroefeningen
- Voorbeelden van toepassingen in de praktijk
- Focus op basisprincipes vóór frameworks

### Repository Onderhoud

- Actieve community van leerlingen en bijdragers
- Regelmatige updates van dependencies en inhoud
- Issues en discussies worden gemonitord door maintainers
- Vertaalupdates geautomatiseerd via GitHub Actions

### Gerelateerde Resources

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) aanbevolen voor leerlingen
- Extra cursussen: Generative AI, Data Science, ML, IoT curricula beschikbaar

### Werken met Specifieke Projecten

Voor gedetailleerde instructies over individuele projecten, raadpleeg de README-bestanden in:
- `quiz-app/README.md` - Vue 3 quiz applicatie
- `7-bank-project/README.md` - Banking applicatie met authenticatie
- `5-browser-extension/README.md` - Browser extensie ontwikkeling
- `6-space-game/README.md` - Canvas-gebaseerde game ontwikkeling
- `9-chat-project/README.md` - AI chat assistent project

### Monorepo Structuur

Hoewel dit geen traditionele monorepo is, bevat deze repository meerdere onafhankelijke projecten:
- Elke les is zelfvoorzienend
- Projecten delen geen dependencies
- Werk aan individuele projecten zonder anderen te beïnvloeden
- Clone de volledige repo voor de volledige curriculum ervaring

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsdienst [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u er rekening mee te houden dat automatische vertalingen fouten of onjuistheden kunnen bevatten. Het originele document in de oorspronkelijke taal wordt beschouwd als de gezaghebbende bron. Voor belangrijke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->