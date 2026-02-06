# AGENTS.md

## Projectoverzicht

Dit is een educatief curriculumrepository voor het onderwijzen van webontwikkelingsbasisprincipes aan beginners. Het curriculum is een uitgebreide cursus van 12 weken ontwikkeld door Microsoft Cloud Advocates, met 24 praktische lessen over JavaScript, CSS en HTML.

### Belangrijkste Onderdelen

- **Educatieve Inhoud**: 24 gestructureerde lessen georganiseerd in projectgebaseerde modules
- **Praktische Projecten**: Terrarium, Typvaardigheidspel, Browserextensie, Ruimtespel, Bankapp, Code-editor en AI-chatassistent
- **Interactieve Quizzen**: 48 quizzen met elk 3 vragen (voor- en na-les beoordelingen)
- **Meertalige Ondersteuning**: Geautomatiseerde vertalingen voor 50+ talen via GitHub Actions
- **Technologieën**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (voor AI-projecten)

### Architectuur

- Educatieve repository met lesgebaseerde structuur
- Elke lesmap bevat README, codevoorbeelden en oplossingen
- Op zichzelf staande projecten in aparte mappen (quiz-app, diverse lesprojecten)
- Vertalingssysteem via GitHub Actions (co-op-translator)
- Documentatie geserveerd via Docsify en beschikbaar als PDF

## Setup-commando's

Deze repository is voornamelijk bedoeld voor het consumeren van educatieve inhoud. Voor werken met specifieke projecten:

### Hoofdrepository Setup

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz-app Setup (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start ontwikkelserver
npm run build      # Bouw voor productie
npm run lint       # Voer ESLint uit
```

### Bankproject API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API-server
npm run lint       # Voer ESLint uit
npm run format     # Formatteren met Prettier
```

### Browserextensieprojecten

```bash
cd 5-browser-extension/solution
npm install
# Volg browser-specifieke instructies voor het laden van extensies
```

### Ruimtespelprojecten

```bash
cd 6-space-game/solution
npm install
# Open index.html in de browser of gebruik Live Server
```

### Chatproject (Python Backend)

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
3. **Maak een nieuwe branch** voor je wijzigingen
4. Maak wijzigingen aan lesinhoud of codevoorbeelden
5. Test eventuele codewijzigingen in relevante projectmappen
6. Dien pull requests in volgens de bijdrage-richtlijnen

### Voor Leerlingen

1. Fork of clone de repository
2. Navigeer sequentieel door de lesmappen
3. Lees de README-bestanden van elke les
4. Maak pre-les quizzen op https://ff-quizzes.netlify.app/web/ af
5. Werk codevoorbeelden in lesmappen door
6. Maak opdrachten en uitdagingen af
7. Maak post-les quizzen

### Live Ontwikkeling

- **Documentatie**: Voer `docsify serve` uit in de hoofdmap (poort 3000)
- **Quiz-app**: Voer `npm run dev` uit in de quiz-app map
- **Projecten**: Gebruik VS Code Live Server extensie voor HTML-projecten
- **API-projecten**: Voer `npm start` uit in respectievelijke API-mappen

## Testinstructies

### Quiz-app Testing

```bash
cd quiz-app
npm run lint       # Controleer op problemen met de code-stijl
npm run build      # Verifieer dat de build slaagt
```

### Bank API Testing

```bash
cd 7-bank-project/api
npm run lint       # Controleer op code stijlproblemen
node server.js     # Verifieer dat de server zonder fouten start
```

### Algemene Testaanpak

- Dit is een educatieve repository zonder uitgebreide geautomatiseerde tests
- Handmatig testen richt zich op:
  - Codevoorbeelden zonder fouten uitvoeren
  - Links in documentatie werken correct
  - Project builds worden succesvol voltooid
  - Voorbeelden volgen best practices

### Pre-submissie Controles

- Voer `npm run lint` uit in mappen met package.json
- Controleer of Markdown-links geldig zijn
- Test codevoorbeelden in browser of Node.js
- Controleer dat vertalingen de juiste structuur behouden

## Code Stijlrichtlijnen

### JavaScript

- Gebruik moderne ES6+ syntax
- Volg standaard ESLint-configuraties in projecten
- Gebruik betekenisvolle variabele- en functienamen voor educatieve duidelijkheid
- Voeg opmerkingen toe die concepten uitleggen voor leerlingen
- Format met Prettier waar geconfigureerd

### HTML/CSS

- Semantische HTML5-elementen
- Responsive designprincipes
- Duidelijke classnaamconventies
- Opmerkingen die CSS-technieken uitleggen voor leerlingen

### Python

- PEP 8-stijlrichtlijnen
- Duidelijke, educatieve codevoorbeelden
- Type hints waar nuttig voor het leren

### Markdown Documentatie

- Duidelijke koppenhiërarchie
- Codeblokken met taalspecificatie
- Links naar aanvullende bronnen
- Screenshots en afbeeldingen in `images/` mappen
- Alt-tekst voor afbeeldingen voor toegankelijkheid

### Bestandsorganisatie

- Lessen genummerd in volgorde (1-getting-started-lessons, 2-js-basics, etc.)
- Elk project heeft `solution/` en vaak `start/` of `your-work/` mappen
- Afbeeldingen opgeslagen in les-specifieke `images/` mappen
- Vertalingen in `translations/{language-code}/` structuur

## Build en Deployment

### Quiz-app Deployment (Azure Static Web Apps)

De quiz-app is geconfigureerd voor Azure Static Web Apps deployment:

```bash
cd quiz-app
npm run build      # Maakt dist/ map aan
# Zet uit via GitHub Actions workflow bij push naar main
```

Azure Static Web Apps configuratie:
- **App-locatie**: `/quiz-app`
- **Output-locatie**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Documentatie PDF Generatie

```bash
npm install                    # Installeer docsify-to-pdf
npm run convert               # Genereer PDF van docs
```

### Docsify Documentatie

```bash
npm install -g docsify-cli    # Installeer Docsify wereldwijd
docsify serve                 # Serveren op localhost:3000
```

### Project-specifieke Builds

Elke projectmap kan zijn eigen buildproces hebben:
- Vue-projecten: `npm run build` maakt productie-bundels aan
- Statische projecten: Geen buildstap, bestanden direct serveren

## Pull Request Richtlijnen

### Titelindeling

Gebruik duidelijke, beschrijvende titels die het wijzigingsgebied aangeven:
- `[Quiz-app] Voeg nieuwe quiz toe voor les X`
- `[Lesson-3] Corrigeer typefout in terrarium project`
- `[Translation] Voeg Spaanse vertaling toe voor les 5`
- `[Docs] Update setupinstructies`

### Vereiste Controles

Voor het indienen van een PR:

1. **Codekwaliteit**:
   - Voer `npm run lint` uit in betrokken projectmappen
   - Los alle lintfouten en waarschuwingen op

2. **Build Verificatie**:
   - Voer `npm run build` uit indien van toepassing
   - Zorg dat er geen buildfouten zijn

3. **Linkvalidatie**:
   - Test alle markdown-links
   - Controleer of afbeeldingsreferenties werken

4. **Inhoud Review**:
   - Controleer spelling en grammatica
   - Zorg dat codevoorbeelden correct en educatief zijn
   - Verifieer dat vertalingen de oorspronkelijke betekenis behouden

### Bijdragereisen

- Ga akkoord met Microsoft CLA (automatische controle bij eerste PR)
- Volg de [Microsoft Open Source Gedragscode](https://opensource.microsoft.com/codeofconduct/)
- Zie [CONTRIBUTING.md](./CONTRIBUTING.md) voor gedetailleerde richtlijnen
- Verwijs indien van toepassing naar issuetitels in PR-beschrijving

### Reviewproces

- PR's worden beoordeeld door maintainers en de community
- Educatieve duidelijkheid staat voorop
- Codevoorbeelden dienen de huidige best practices te volgen
- Vertalingen worden beoordeeld op nauwkeurigheid en culturele geschiktheid

## Vertalingssysteem

### Geautomatiseerde Vertaling

- Gebruikt GitHub Actions met co-op-translator workflow
- Vertaalt automatisch naar 50+ talen
- Bronbestanden in hoofddirectories
- Vertaalde bestanden in `translations/{language-code}/` mappen

### Handmatige Verbeteringen Toevoegen

1. Zoek het bestand in `translations/{language-code}/`
2. Breng verbeteringen aan terwijl de structuur behouden blijft
3. Zorg dat codevoorbeelden blijven werken
4. Test eventuele gelokaliseerde quiz-inhoud

### Vertaalmetadata

Vertaalde bestanden bevatten metadatakoppen:
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
- Controleer Node.js-versie (v14+ aanbevolen)
- Verwijder `node_modules` en `package-lock.json`, voer opnieuw `npm install` uit
- Controleer op poortconflicten (standaard: Vite gebruikt poort 5173)

**API-server start niet**:
- Controleer of Node.js-versie minimaal is (node >=10)
- Controleer of poort al in gebruik is
- Zorg dat alle afhankelijkheden zijn geïnstalleerd met `npm install`

**Browserextensie laadt niet**:
- Controleer of manifest.json correct is geformatteerd
- Controleer de browserconsole op fouten
- Volg browser-specifieke instructies voor het installeren van extensies

**Python chatprojectproblemen**:
- Zorg dat het OpenAI pakket is geïnstalleerd: `pip install openai`
- Controleer of de GITHUB_TOKEN omgevingsvariabele is ingesteld
- Controleer GitHub Models toegangsrechten

**Docsify serveert geen documentatie**:
- Installeer docsify-cli globaal: `npm install -g docsify-cli`
- Start vanuit de rootmap van de repository
- Controleer dat `docs/_sidebar.md` bestaat

### Tips voor Ontwikkelomgeving

- Gebruik VS Code met de Live Server extensie voor HTML-projecten
- Installeer ESLint en Prettier extensies voor consistente formattering
- Gebruik browser DevTools voor het debuggen van JavaScript
- Voor Vue-projecten, installeer Vue DevTools browser extensie

### Prestatieoverwegingen

- Groot aantal vertaalde bestanden (50+ talen) betekent grote volledige clones
- Gebruik shallow clone als je alleen aan inhoud werkt: `git clone --depth 1`
- Sluit vertalingen uit van zoekacties bij werken in Engelse inhoud
- Buildprocessen kunnen traag zijn bij eerste run (npm install, Vite build)

## Veiligheidsoverwegingen

### Omgevingsvariabelen

- API-sleutels mogen nooit in de repository worden gecommit
- Gebruik `.env` bestanden (staan al in `.gitignore`)
- Documenteer vereiste omgevingsvariabelen in project-READMEs

### Python-projecten

- Gebruik virtuele omgevingen: `python -m venv venv`
- Houd afhankelijkheden up-to-date
- GitHub-tokens moeten minimale vereiste machtigingen hebben

### GitHub Models Toegang

- Persoonlijke toegangstokens (PAT) zijn vereist voor GitHub Models
- Tokens moeten als omgevingsvariabele worden opgeslagen
- Tokens of inloggegevens nooit commiten

## Aanvullende Aantekeningen

### Doelgroep

- Complete beginners in webontwikkeling
- Studenten en zelfstudie-lezers
- Docenten die het curriculum in klassen gebruiken
- Inhoud is ontworpen voor toegankelijkheid en geleidelijke vaardigheidsopbouw

### Educatieve Filosofie

- Projectgebaseerde leerbenadering
- Regelmatige kennistoetsen (quizzen)
- Praktische codeeropdrachten
- Voorbeelden van toepassingen in de praktijk
- Focus op basisprincipes vóór frameworks

### Repository Onderhoud

- Actieve community van leerlingen en bijdragers
- Reguliere updates van dependencies en inhoud
- Issues en discussies worden gemonitord door maintainers
- Vertaalupdates geautomatiseerd via GitHub Actions

### Gerelateerde Bronnen

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub bronnen](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) aanbevolen voor leerlingen
- Aanvullende cursussen: Generative AI, Data Science, ML, IoT curricula beschikbaar

### Werken met Specifieke Projecten

Voor gedetailleerde instructies over individuele projecten, raadpleeg de README-bestanden in:
- `quiz-app/README.md` - Vue 3 quizapplicatie
- `7-bank-project/README.md` - Bankapplicatie met authenticatie
- `5-browser-extension/README.md` - Browserextensie ontwikkeling
- `6-space-game/README.md` - Canvas-gebaseerd spel
- `9-chat-project/README.md` - AI chatassistent project

### Monorepo Structuur

Hoewel dit geen traditionele monorepo is, bevat deze repository meerdere onafhankelijke projecten:
- Elke les is zelfstandig
- Projecten delen geen dependencies
- Werk aan individuele projecten zonder de anderen te beïnvloeden
- Clone de gehele repo voor de volledige curriculumervaring

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel wij streven naar nauwkeurigheid, dient u er rekening mee te houden dat geautomatiseerde vertalingen fouten of onjuistheden kunnen bevatten. Het oorspronkelijke document in de oorspronkelijke taal dient als de gezaghebbende bron te worden beschouwd. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->