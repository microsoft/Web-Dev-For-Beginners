# AGENTS.md

## Projectoverzicht

Dit is een educatieve curriculumrepository voor het onderwijzen van de basisprincipes van webontwikkeling aan beginners. Het curriculum is een uitgebreide cursus van 12 weken, ontwikkeld door Microsoft Cloud Advocates, met 24 praktische lessen over JavaScript, CSS en HTML.

### Belangrijke componenten

- **Educatieve inhoud**: 24 gestructureerde lessen georganiseerd in projectgebaseerde modules
- **Praktische projecten**: Terrarium, Typing Game, Browser Extensie, Space Game, Banking App, Code Editor en AI Chat Assistent
- **Interactieve quizzes**: 48 quizzes met elk 3 vragen (pre/post-les beoordelingen)
- **Meertalige ondersteuning**: Geautomatiseerde vertalingen voor meer dan 50 talen via GitHub Actions
- **Technologieën**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (voor AI-projecten)

### Architectuur

- Educatieve repository met les-gebaseerde structuur
- Elke lesmap bevat README, codevoorbeelden en oplossingen
- Op zichzelf staande projecten in aparte mappen (quiz-app, diverse lesprojecten)
- Vertalingssysteem met GitHub Actions (co-op-translator)
- Documentatie wordt geserveerd via Docsify en is beschikbaar als PDF

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
npm run dev        # Start de ontwikkelserver
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

## Ontwikkelingsworkflow

### Voor Inhoud Bijdragers

1. **Fork de repository** naar je GitHub-account
2. **Clone je fork** lokaal
3. **Maak een nieuwe branch** voor je wijzigingen
4. Maak wijzigingen aan lesinhoud of codevoorbeelden
5. Test eventuele codewijzigingen in relevante projectmappen
6. Dien pull requests in volgens de bijdrage richtlijnen

### Voor Leerlingen

1. Fork of clone de repository
2. Navigeer sequentieel door de lesmappen
3. Lees README-bestanden voor elke les
4. Maak pre-les quizzes bij https://ff-quizzes.netlify.app/web/
5. Werk door codevoorbeelden in lesmappen
6. Maak opdrachten en uitdagingen
7. Maak post-les quizzes

### Live Ontwikkeling

- **Documentatie**: Run `docsify serve` in root (poort 3000)
- **Quiz App**: Run `npm run dev` in quiz-app map
- **Projecten**: Gebruik VS Code Live Server extensie voor HTML-projecten
- **API Projecten**: Run `npm start` in respectievelijke API mappen

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
npm run lint       # Controleer op code stijlproblemen
node server.js     # Controleren of de server zonder fouten start
```

### Algemene Testaanpak

- Dit is een educatieve repository zonder uitgebreide geautomatiseerde tests
- Handmatig testen richt zich op:
  - Codevoorbeelden draaien zonder fouten
  - Links in documentatie werken correct
  - Project builds voltooien succesvol
  - Voorbeelden volgen best practices

### Pre-submissie Checks

- Run `npm run lint` in mappen met package.json
- Verifieer of markdown links geldig zijn
- Test codevoorbeelden in browser of Node.js
- Controleer of vertalingen juiste structuur behouden

## Code Stijl Richtlijnen

### JavaScript

- Gebruik moderne ES6+ syntax
- Volg standaard ESLint configuraties binnen projecten
- Gebruik betekenisvolle variabele- en functienamen voor educatieve duidelijkheid
- Voeg commentaar toe om concepten voor leerlingen uit te leggen
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

- Duidelijke koppenhiërarchie
- Codeblokken met taal specificatie
- Links naar aanvullende bronnen
- Screenshots en afbeeldingen in `images/` mappen
- Alt-tekst voor afbeeldingen voor toegankelijkheid

### Bestandsorganisatie

- Lessen genummerd in volgorde (1-getting-started-lessons, 2-js-basics, etc.)
- Elk project heeft `solution/` en vaak `start/` of `your-work/` mappen
- Afbeeldingen opgeslagen in les-specifieke `images/` mappen
- Vertalingen in `translations/{language-code}/` structuur

## Build en Deploy

### Quiz App Deploy (Azure Static Web Apps)

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
docsify serve                 # Serveer op localhost:3000
```

### Project-specifieke Builds

Elke projectmap kan een eigen buildproces hebben:
- Vue-projecten: `npm run build` maakt productie-bundels
- Statische projecten: Geen build stap, bestanden direct serveren

## Pull Request Richtlijnen

### Titel Formaat

Gebruik duidelijke, beschrijvende titels die het wijzigingsgebied aangeven:
- `[Quiz-app] Voeg nieuwe quiz toe voor les X`
- `[Les-3] Corrigeer typefout in terrarium project`
- `[Vertaling] Voeg Spaanse vertaling toe voor les 5`
- `[Docs] Update setup instructies`

### Vereiste Checks

Voor het indienen van een PR:

1. **Codekwaliteit**:
   - Run `npm run lint` in getroffen projectmappen
   - Los alle lintfouten en waarschuwingen op

2. **Build Verificatie**:
   - Run `npm run build` indien van toepassing
   - Zorg dat er geen build fouten zijn

3. **Link Validatie**:
   - Test alle markdown links
   - Controleer afbeeldingreferenties

4. **Inhoud Review**:
   - Proeflees op spelling en grammatica
   - Zorg dat codevoorbeelden correct en educatief zijn
   - Verifieer vertalingen behouden originele betekenis

### Bijdragevereisten

- Instemmen met Microsoft CLA (automatische check bij eerste PR)
- Volg de [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Zie [CONTRIBUTING.md](./CONTRIBUTING.md) voor gedetailleerde richtlijnen
- Verwijs naar issuennummers in PR-beschrijving indien van toepassing

### Reviewproces

- PR's worden beoordeeld door maintainers en community
- Educatieve duidelijkheid staat voorop
- Codevoorbeelden moeten huidige best practices volgen
- Vertalingen worden gecontroleerd op nauwkeurigheid en culturele passendheid

## Vertalingssysteem

### Geautomatiseerde Vertaling

- Gebruikt GitHub Actions met co-op-translator workflow
- Vertaal automatisch naar meer dan 50 talen
- Bronbestanden in hoofdmappen
- Vertaalde bestanden in `translations/{language-code}/` mappen

### Handmatige Vertalingsverbeteringen Toevoegen

1. Zoek bestand in `translations/{language-code}/`
2. Breng verbeteringen aan met behoud van structuur
3. Zorg dat codevoorbeelden functioneel blijven
4. Test eventuele gelokaliseerde quizinhoud

### Vertalingsmetadata

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

**Quiz-app start niet**:
- Controleer Node.js versie (v14+ aanbevolen)
- Verwijder `node_modules` en `package-lock.json`, run opnieuw `npm install`
- Controleer op poortconflicten (standaard: Vite gebruikt poort 5173)

**API-server start niet**:
- Verifieer Node.js versie voldoet aan minimum (node >=10)
- Controleer of poort al in gebruik is
- Zorg dat alle dependencies geïnstalleerd zijn met `npm install`

**Browserextensie laadt niet**:
- Controleer of manifest.json correct is geformatteerd
- Bekijk browserconsole op fouten
- Volg browser-specifieke installatie-instructies voor extensies

**Python chat project problemen**:
- Zorg dat OpenAI pakket geïnstalleerd is: `pip install openai`
- Verifieer dat GITHUB_TOKEN omgevingsvariabele is ingesteld
- Controleer GitHub Models toegangsrechten

**Docsify serveert geen docs**:
- Installeer docsify-cli globaal: `npm install -g docsify-cli`
- Run vanuit root directory van repository
- Controleer dat `docs/_sidebar.md` bestaat

### Tips voor Ontwikkelomgeving

- Gebruik VS Code met Live Server extensie voor HTML-projecten
- Installeer ESLint en Prettier extensies voor consistente formatting
- Gebruik browser DevTools voor JavaScript debugging
- Voor Vue projecten, installeer Vue DevTools browserextensie

### Prestatieoverwegingen

- Groot aantal vertaalde bestanden (50+ talen) maakt volledige clones groot
- Gebruik shallow clone als je enkel inhoud bewerkt: `git clone --depth 1`
- Sluit vertalingen uit zoekopdrachten uit bij werken aan Engelse inhoud
- Build processen kunnen traag zijn bij eerste run (npm install, Vite build)

## Beveiligingsoverwegingen

### Omgevingsvariabelen

- API-sleutels mogen nooit in repository worden gecommit
- Gebruik `.env` bestanden (staan al in `.gitignore`)
- Documenteer vereiste omgevingsvariabelen in project READMEs

### Python-projecten

- Gebruik virtuele omgevingen: `python -m venv venv`
- Houd dependencies up-to-date
- GitHub tokens dienen minimale benodigde rechten te hebben

### GitHub Models Toegang

- Personal Access Tokens (PAT) vereist voor GitHub Models
- Tokens moeten als omgevingsvariabelen worden opgeslagen
- Tokens of inloggegevens nooit committen

## Aanvullende Notities

### Doelgroep

- Volledige beginners in webontwikkeling
- Studenten en zelflerenden
- Docenten die curriculum in klaslokalen gebruiken
- Inhoud ontworpen voor toegankelijkheid en geleidelijke vaardigheidsopbouw

### Educatieve Filosofie

- Projectgebaseerde leerbenadering
- Frequente kennischecks (quizzes)
- Praktische codeer oefeningen
- Voorbeelden van echte toepassingen
- Focus op basisprincipes vóór frameworks

### Repository Onderhoud

- Actieve gemeenschap van leerlingen en bijdragers
- Regelmatige updates van dependencies en inhoud
- Issues en discussies worden bewaakt door maintainers
- Vertalingsupdates geautomatiseerd via GitHub Actions

### Gerelateerde Bronnen

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) aanbevolen voor leerlingen
- Extra cursussen: Generative AI, Data Science, ML, IoT curricula beschikbaar

### Werken met Specifieke Projecten

Voor gedetailleerde instructies over individuele projecten, raadpleeg de README-bestanden in:
- `quiz-app/README.md` - Vue 3 quizapplicatie
- `7-bank-project/README.md` - Banking applicatie met authenticatie
- `5-browser-extension/README.md` - Browser extensie ontwikkeling
- `6-space-game/README.md` - Canvas-gebaseerd spelontwikkeling
- `9-chat-project/README.md` - AI chat assistent project

### Monorepo Structuur

Hoewel het geen traditionele monorepo is, bevat deze repository meerdere onafhankelijke projecten:
- Elke les is op zichzelf staand
- Projecten delen geen dependencies
- Werk aan individuele projecten zonder anderen te beïnvloeden
- Clone de volledige repo voor de volledige curriculumervaring

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dit document is vertaald met behulp van de AI-vertalingsdienst [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u er rekening mee te houden dat automatische vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet als de gezaghebbende bron worden beschouwd. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of onjuiste interpretaties die voortvloeien uit het gebruik van deze vertaling.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->