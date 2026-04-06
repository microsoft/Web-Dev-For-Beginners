# AGENTS.md

## Projectoverzicht

Dit is een educatieve curriculumrepository voor het aanleren van webontwikkelingbasisprincipes aan beginners. Het curriculum is een uitgebreide cursus van 12 weken, ontwikkeld door Microsoft Cloud Advocates, met 24 praktische lessen die JavaScript, CSS en HTML behandelen.

### Belangrijkste Componenten

- **Educatieve Inhoud**: 24 gestructureerde lessen georganiseerd in projectgebaseerde modules  
- **Praktische Projecten**: Terrarium, Typspel, Browserextensie, Ruimtespel, Bankapp, Code-editor en AI Chat-assistent  
- **Interactieve Quizzen**: 48 quizzen met elk 3 vragen (pre-/post-les evaluaties)  
- **Meertalige Ondersteuning**: Geautomatiseerde vertalingen voor 50+ talen via GitHub Actions  
- **Technologieën**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (voor AI-projecten)  

### Architectuur

- Educatieve repository met lesgebaseerde structuur  
- Elke lesmap bevat README, codevoorbeelden en oplossingen  
- Zelfstandige projecten in aparte mappen (quiz-app, diverse lesprojecten)  
- Vertalingssysteem met behulp van GitHub Actions (co-op-translator)  
- Documentatie geleverd via Docsify en beschikbaar als PDF  

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
npm run format     # Formatteer met Prettier
```

### Browser Extensie Projecten

```bash
cd 5-browser-extension/solution
npm install
# Volg browser-specifieke instructies voor het laden van extensies
```

### Ruimtespel Projecten

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

### Voor Inhoudbijdragers

1. **Fork de repository** naar je GitHub-account  
2. **Clone je fork** lokaal  
3. **Maak een nieuwe branch** aan voor je wijzigingen  
4. Breng wijzigingen aan in lesinhoud of codevoorbeelden  
5. Test eventuele codewijzigingen in relevante projectmappen  
6. Dien pull requests in volgens de bijdrage richtlijnen  

### Voor Studenten

1. Fork of clone de repository  
2. Navigeer sequentieel door de lesmappen  
3. Lees de README-bestanden van elke les  
4. Maak pre-les quizzen bij https://ff-quizzes.netlify.app/web/  
5. Werk de codevoorbeelden in lesmappen door  
6. Voltooi opdrachten en uitdagingen  
7. Maak post-les quizzen  

### Live Ontwikkeling

- **Documentatie**: Voer `docsify serve` uit in de root (poort 3000)  
- **Quiz App**: Voer `npm run dev` uit in de quiz-app map  
- **Projecten**: Gebruik VS Code Live Server extensie voor HTML-projecten  
- **API Projecten**: Voer `npm start` uit in de betreffende API-mappen  

## Testinstructies

### Quiz App Testen

```bash
cd quiz-app
npm run lint       # Controleren op problemen met de code stijl
npm run build      # Verifiëren dat de build slaagt
```

### Bank API Testen

```bash
cd 7-bank-project/api
npm run lint       # Controleer op codeerstijl problemen
node server.js     # Controleer of de server zonder fouten start
```

### Algemene Testaanpak

- Dit is een educatieve repository zonder uitgebreide geautomatiseerde tests  
- Handmatig testen richt zich op:  
  - Codevoorbeelden draaien zonder fouten  
  - Links in documentatie werken correct  
  - Project builds voltooien succesvol  
  - Voorbeelden volgen best practices  

### Pre-submissie Checks

- Voer `npm run lint` uit in mappen met package.json  
- Controleer of markdown links geldig zijn  
- Test codevoorbeelden in browser of Node.js  
- Controleer dat vertalingen de juiste structuur behouden  

## Code Style Richtlijnen

### JavaScript

- Gebruik moderne ES6+ syntaxis  
- Volg standaard ESLint-configuraties uit projecten  
- Gebruik betekenisvolle variabele- en functienamen voor educatieve duidelijkheid  
- Voeg commentaar toe die concepten uitleggen voor studenten  
- Format gebruikmakend van Prettier waar ingesteld  

### HTML/CSS

- Semantische HTML5 elementen  
- Responsive design principes  
- Duidelijke naamgevingsconventies voor classes  
- Commentaar dat CSS-technieken uitlegt voor studenten  

### Python

- PEP 8 stijl richtlijnen  
- Duidelijke, educatieve codevoorbeelden  
- Type hints waar nuttig voor het leren  

### Markdown Documentatie

- Duidelijke kopstructuur  
- Codeblokken met taal specificatie  
- Links naar aanvullende bronnen  
- Screenshots en afbeeldingen in `images/` mappen  
- Alternatieve tekst voor afbeeldingen voor toegankelijkheid  

### Bestandsorganisatie

- Lessen genummerd op volgorde (1-getting-started-lessons, 2-js-basics, enz.)  
- Elk project heeft `solution/` en vaak `start/` of `your-work/` mappen  
- Afbeeldingen opgeslagen in les-specifieke `images/` mappen  
- Vertalingen in `translations/{taalcode}/` structuur  

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

### Documentatie PDF Generatie

```bash
npm install                    # Installeer docsify-to-pdf
npm run convert               # Genereer PDF van docs
```

### Docsify Documentatie

```bash
npm install -g docsify-cli    # Installeer Docsify globaal
docsify serve                 # Server op localhost:3000
```

### Projectspecifieke Builds

Elke projectmap kan een eigen buildproces hebben:  
- Vue projecten: `npm run build` genereert productie bundles  
- Statische projecten: Geen build stap, lever bestanden direct aan  

## Pull Request Richtlijnen

### Titel Formaat

Gebruik duidelijke, beschrijvende titels die het wijzigingsgebied aangeven:  
- `[Quiz-app] Voeg nieuwe quiz toe voor les X`  
- `[Lesson-3] Verander typefout in terrarium project`  
- `[Translation] Voeg Spaanse vertaling toe voor les 5`  
- `[Docs] Werk installatie-instructies bij`  

### Verplichte Checks

Voor het indienen van een PR:

1. **Codekwaliteit**:  
   - Voer `npm run lint` uit in de betrokken projectmappen  
   - Los alle lintfouten en waarschuwingen op  

2. **Build Validatie**:  
   - Voer `npm run build` uit indien van toepassing  
   - Zorg dat er geen build-fouten zijn  

3. **Link Validatie**:  
   - Test alle markdown links  
   - Controleer of afbeeldingsreferenties werken  

4. **Inhoud Review**:  
   - Controleer spelling en grammatica  
   - Zorg dat codevoorbeelden correct en educatief zijn  
   - Verifieer dat vertalingen de oorspronkelijke betekenis behouden  

### Bijdragevereisten

- Stem in met Microsoft CLA (automatische controle bij eerste PR)  
- Volg de [Microsoft Open Source Gedragscode](https://opensource.microsoft.com/codeofconduct/)  
- Zie [CONTRIBUTING.md](./CONTRIBUTING.md) voor gedetailleerde richtlijnen  
- Verwijs in de PR-beschrijving naar issue-nummers indien van toepassing  

### Reviewproces

- PR’s worden beoordeeld door maintainers en de community  
- Educatieve duidelijkheid heeft prioriteit  
- Codevoorbeelden moeten huidige best practices volgen  
- Vertalingen worden gecontroleerd op nauwkeurigheid en culturele gepastheid  

## Vertalingssysteem

### Geautomatiseerde Vertaling

- Maakt gebruik van GitHub Actions met co-op-translator workflow  
- Vertaalt automatisch naar 50+ talen  
- Bronbestanden in hoofdmap  
- Vertaalde bestanden in `translations/{taalcode}/` mappen  

### Handmatige Vertalingsverbeteringen Toevoegen

1. Zoek bestand in `translations/{taalcode}/`  
2. Breng verbeteringen aan terwijl structuur behouden blijft  
3. Zorg dat codevoorbeelden functioneel blijven  
4. Test eventuele gelokaliseerde quizinhoud  

### Vertaal Metadata

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

## Debugging en Probleemoplossing

### Veelvoorkomende Problemen

**Quiz-app start niet**:  
- Controleer Node.js versie (v14+ aanbevolen)  
- Verwijder `node_modules` en `package-lock.json`, voer daarna `npm install` opnieuw uit  
- Controleer op poortconflicten (standaard: Vite gebruikt poort 5173)  

**API-server start niet**:  
- Controleer of Node.js versie voldoet aan minimum (node >=10)  
- Controleer of poort al in gebruik is  
- Zorg dat alle dependencies geïnstalleerd zijn met `npm install`  

**Browserextensie laadt niet**:  
- Controleer of manifest.json correct is geformatteerd  
- Bekijk browserconsole op fouten  
- Volg browser-specifieke extensie installatie-instructies  

**Python chat project problemen**:  
- Zorg dat OpenAI package geïnstalleerd is: `pip install openai`  
- Controleer of GITHUB_TOKEN omgevingsvariabele is ingesteld  
- Controleer GitHub Models toegangsrechten  

**Docsify serveert geen docs**:  
- Installeer docsify-cli globaal: `npm install -g docsify-cli`  
- Voer uit vanuit de root directory van de repository  
- Controleer of `docs/_sidebar.md` aanwezig is  

### Tips Ontwikkelomgeving

- Gebruik VS Code met Live Server extensie voor HTML-projecten  
- Installeer ESLint- en Prettier-extensies voor consistente formattering  
- Gebruik browser DevTools voor het debuggen van JavaScript  
- Voor Vue-projecten, installeer Vue DevTools browserextensie  

### Prestatieoverwegingen

- Groot aantal vertaalde bestanden (50+ talen) betekent dat volledige clones groot zijn  
- Gebruik shallow clone als je alleen aan inhoud werkt: `git clone --depth 1`  
- Sluit vertalingen uit van zoekopdrachten bij het werken aan Engelse inhoud  
- Buildprocessen kunnen traag zijn bij eerste uitvoering (npm install, Vite build)  

## Beveiligingsoverwegingen

### Omgevingsvariabelen

- API-sleutels mogen nooit in de repository worden gecommit  
- Gebruik `.env` bestanden (reeds opgenomen in `.gitignore`)  
- Documenteer vereiste omgevingsvariabelen in project-READMEs  

### Python Projecten

- Gebruik virtuele omgevingen: `python -m venv venv`  
- Houd dependencies up-to-date  
- GitHub-tokens moeten minimale benodigde rechten hebben  

### GitHub Models Toegang

- Persoonlijke toegangstokens (PAT) zijn vereist voor GitHub Models  
- Tokens moeten worden opgeslagen als omgevingsvariabelen  
- Tokens of inloggegevens nooit committen  

## Aanvullende Notities

### Doelgroep

- Volledige beginners in webontwikkeling  
- Studenten en zelflerenden  
- Docenten die het curriculum in de klas gebruiken  
- Inhoud is ontworpen voor toegankelijkheid en geleidelijke vaardigheidsopbouw  

### Educatieve Filosofie

- Projectgebaseerde leerbenadering  
- Frequente kenniscontroles (quizzen)  
- Praktische codeer oefeningen  
- Voorbeelden van toepassing in de praktijk  
- Focus op basisprincipes voordat frameworks aan bod komen  

### Repository Onderhoud

- Actieve community van lerenden en bijdragers  
- Regelmatige updates van dependencies en inhoud  
- Issues en discussies worden gemonitord door maintainers  
- Vertaalupdates geautomatiseerd via GitHub Actions  

### Gerelateerde Bronnen

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)  
- [Student Hub bronnen](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) aanbevolen voor lerenden  
- Extra cursussen: Generatieve AI, Data Science, ML, IoT curricula beschikbaar  

### Werken met Specifieke Projecten

Voor gedetailleerde instructies over individuele projecten, zie de README-bestanden in:  
- `quiz-app/README.md` - Vue 3 quiz applicatie  
- `7-bank-project/README.md` - Bankapplicatie met authenticatie  
- `5-browser-extension/README.md` - Browserextensie ontwikkeling  
- `6-space-game/README.md` - Canvas-gebaseerd spel  
- `9-chat-project/README.md` - AI chat-assistent project  

### Monorepo-structuur

Hoewel geen traditionele monorepo, bevat deze repository meerdere onafhankelijke projecten:  
- Elke les is zelfstandig  
- Projecten delen geen dependencies  
- Werk aan individuele projecten zonder anderen te beïnvloeden  
- Clone hele repo voor de volledige curriculumervaring  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:  
Dit document is vertaald met behulp van de AI vertaaldienst [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onjuistheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet als de gezaghebbende bron worden beschouwd. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->