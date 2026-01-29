# AGENTS.md

## Prezentare Generală a Proiectului

Acesta este un depozit de curriculum educațional destinat predării fundamentelor dezvoltării web pentru începători. Curriculumul este un curs cuprinzător de 12 săptămâni dezvoltat de Microsoft Cloud Advocates, care include 24 de lecții practice ce acoperă JavaScript, CSS și HTML.

### Componente Cheie

- **Conținut Educațional**: 24 de lecții structurate organizate în module bazate pe proiecte
- **Proiecte Practice**: Terrarium, Joc de Tastare, Extensie de Browser, Joc Spațial, Aplicație Bancară, Editor de Cod și Asistent AI de Chat
- **Teste Interactive**: 48 de teste cu câte 3 întrebări fiecare (evaluări pre/post-lecție)
- **Suport Multilingv**: Traduceri automate pentru peste 50 de limbi prin GitHub Actions
- **Tehnologii**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pentru proiectele AI)

### Arhitectură

- Depozit educațional cu structură bazată pe lecții
- Fiecare folder de lecție conține README, exemple de cod și soluții
- Proiecte independente în directoare separate (quiz-app, diverse proiecte de lecții)
- Sistem de traducere utilizând GitHub Actions (co-op-translator)
- Documentație servită prin Docsify și disponibilă ca PDF

## Comenzi de Configurare

Acest depozit este destinat în principal consumului de conținut educațional. Pentru lucrul cu proiecte specifice:

### Configurarea Depozitului Principal

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Configurarea Aplicației de Teste (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### API-ul Proiectului Bancar (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Proiecte de Extensii de Browser

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Proiecte Joc Spațial

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Proiect Chat (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Flux de Lucru în Dezvoltare

### Pentru Contribuitorii de Conținut

1. **Fork-uiți depozitul** în contul dvs. GitHub
2. **Clonați fork-ul** local
3. **Creați o ramură nouă** pentru modificările dvs.
4. Faceți modificări la conținutul lecțiilor sau exemplele de cod
5. Testați modificările de cod în directoarele relevante ale proiectelor
6. Trimiteți pull request-uri conform ghidurilor de contribuție

### Pentru Cursanți

1. Fork-uiți sau clonați depozitul
2. Navigați prin directoarele lecțiilor în ordine
3. Citiți fișierele README pentru fiecare lecție
4. Completați testele pre-lecție la https://ff-quizzes.netlify.app/web/
5. Lucrați prin exemplele de cod din folderele lecțiilor
6. Finalizați temele și provocările
7. Completați testele post-lecție

### Dezvoltare Live

- **Documentație**: Rulați `docsify serve` în root (port 3000)
- **Aplicație de Teste**: Rulați `npm run dev` în directorul quiz-app
- **Proiecte**: Utilizați extensia Live Server din VS Code pentru proiectele HTML
- **Proiecte API**: Rulați `npm start` în directoarele API respective

## Instrucțiuni de Testare

### Testarea Aplicației de Teste

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Testarea API-ului Bancar

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Abordare Generală de Testare

- Acesta este un depozit educațional fără teste automate cuprinzătoare
- Testarea manuală se concentrează pe:
  - Exemplele de cod rulează fără erori
  - Linkurile din documentație funcționează corect
  - Build-urile proiectelor se finalizează cu succes
  - Exemplele respectă cele mai bune practici

### Verificări Pre-trimitere

- Rulați `npm run lint` în directoarele cu package.json
- Verificați validitatea linkurilor markdown
- Testați exemplele de cod în browser sau Node.js
- Asigurați-vă că traducerile mențin structura corectă

## Ghiduri de Stil pentru Cod

### JavaScript

- Utilizați sintaxa modernă ES6+
- Respectați configurațiile standard ESLint furnizate în proiecte
- Folosiți nume semnificative pentru variabile și funcții pentru claritate educațională
- Adăugați comentarii care explică conceptele pentru cursanți
- Formatați folosind Prettier acolo unde este configurat

### HTML/CSS

- Elemente semantice HTML5
- Principii de design responsive
- Convenții clare de denumire a claselor
- Comentarii care explică tehnicile CSS pentru cursanți

### Python

- Ghiduri de stil PEP 8
- Exemple de cod clare și educaționale
- Hint-uri de tip acolo unde sunt utile pentru învățare

### Documentație Markdown

- Ierarhie clară a titlurilor
- Blocuri de cod cu specificația limbajului
- Linkuri către resurse suplimentare
- Capturi de ecran și imagini în directoarele `images/`
- Text alternativ pentru imagini pentru accesibilitate

### Organizarea Fișierelor

- Lecțiile numerotate secvențial (1-getting-started-lessons, 2-js-basics, etc.)
- Fiecare proiect are directoare `solution/` și adesea `start/` sau `your-work/`
- Imaginile stocate în folderele `images/` specifice lecțiilor
- Traducerile în structura `translations/{language-code}/`

## Build și Deployment

### Deployment Aplicație de Teste (Azure Static Web Apps)

Aplicația quiz-app este configurată pentru deployment pe Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Configurație Azure Static Web Apps:
- **Locația aplicației**: `/quiz-app`
- **Locația output-ului**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generarea Documentației PDF

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Documentație Docsify

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Build-uri Specifice Proiectelor

Fiecare director de proiect poate avea propriul proces de build:
- Proiecte Vue: `npm run build` creează bundle-uri de producție
- Proiecte statice: Fără pas de build, serve fișierele direct

## Ghiduri pentru Pull Request-uri

### Formatul Titlului

Utilizați titluri clare și descriptive care indică zona de modificare:
- `[Quiz-app] Adăugare test nou pentru lecția X`
- `[Lesson-3] Corectare typo în proiectul terrarium`
- `[Translation] Adăugare traducere în spaniolă pentru lecția 5`
- `[Docs] Actualizare instrucțiuni de configurare`

### Verificări Necesare

Înainte de a trimite un PR:

1. **Calitatea Codului**:
   - Rulați `npm run lint` în directoarele proiectelor afectate
   - Remediați toate erorile și avertismentele de linting

2. **Verificarea Build-ului**:
   - Rulați `npm run build` dacă este aplicabil
   - Asigurați-vă că nu există erori de build

3. **Validarea Linkurilor**:
   - Testați toate linkurile markdown
   - Verificați că referințele imaginilor funcționează

4. **Revizuirea Conținutului**:
   - Corectați greșelile de ortografie și gramatică
   - Asigurați-vă că exemplele de cod sunt corecte și educaționale
   - Verificați că traducerile mențin sensul original

### Cerințe de Contribuție

- Acceptați Microsoft CLA (verificare automată la primul PR)
- Respectați [Codul de Conduită Open Source Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Consultați [CONTRIBUTING.md](./CONTRIBUTING.md) pentru ghiduri detaliate
- Referiți numerele de probleme în descrierea PR-ului, dacă este aplicabil

### Procesul de Revizuire

- PR-urile sunt revizuite de mentori și comunitate
- Claritatea educațională este prioritară
- Exemplele de cod trebuie să respecte cele mai bune practici actuale
- Traducerile sunt revizuite pentru acuratețe și adecvare culturală

## Sistem de Traducere

### Traducere Automată

- Utilizează GitHub Actions cu workflow-ul co-op-translator
- Traduce automat în peste 50 de limbi
- Fișierele sursă în directoarele principale
- Fișierele traduse în directoarele `translations/{language-code}/`

### Adăugarea Îmbunătățirilor Manuale la Traduceri

1. Localizați fișierul în `translations/{language-code}/`
2. Faceți îmbunătățiri păstrând structura
3. Asigurați-vă că exemplele de cod rămân funcționale
4. Testați orice conținut localizat de teste

### Metadata Traduceri

Fișierele traduse includ un header de metadata:
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

## Debugging și Rezolvarea Problemelor

### Probleme Comune

**Aplicația de teste nu pornește**:
- Verificați versiunea Node.js (recomandat v14+)
- Ștergeți `node_modules` și `package-lock.json`, rulați din nou `npm install`
- Verificați conflictele de port (implicit: Vite folosește portul 5173)

**Serverul API nu pornește**:
- Verificați că versiunea Node.js îndeplinește minimul (node >=10)
- Verificați dacă portul este deja utilizat
- Asigurați-vă că toate dependențele sunt instalate cu `npm install`

**Extensia de browser nu se încarcă**:
- Verificați că manifest.json este formatat corect
- Verificați consola browserului pentru erori
- Urmați instrucțiunile specifice browserului pentru instalarea extensiei

**Probleme proiect chat Python**:
- Asigurați-vă că pachetul OpenAI este instalat: `pip install openai`
- Verificați că variabila de mediu GITHUB_TOKEN este setată
- Verificați permisiunile de acces la modelele GitHub

**Docsify nu servește documentația**:
- Instalați docsify-cli global: `npm install -g docsify-cli`
- Rulați din directorul root al depozitului
- Verificați că `docs/_sidebar.md` există

### Sfaturi pentru Mediul de Dezvoltare

- Utilizați VS Code cu extensia Live Server pentru proiectele HTML
- Instalați extensiile ESLint și Prettier pentru formatare consistentă
- Utilizați DevTools-ul browserului pentru debugging JavaScript
- Pentru proiectele Vue, instalați extensia Vue DevTools pentru browser

### Considerații de Performanță

- Numărul mare de fișiere traduse (peste 50 de limbi) înseamnă că clonele complete sunt mari
- Utilizați clonarea superficială dacă lucrați doar pe conținut: `git clone --depth 1`
- Excludeți traducerile din căutări când lucrați pe conținutul în engleză
- Procesele de build pot fi lente la prima rulare (npm install, Vite build)

## Considerații de Securitate

### Variabile de Mediu

- Cheile API nu trebuie niciodată comise în depozit
- Utilizați fișiere `.env` (deja în `.gitignore`)
- Documentați variabilele de mediu necesare în README-urile proiectelor

### Proiecte Python

- Utilizați medii virtuale: `python -m venv venv`
- Mențineți dependențele actualizate
- Token-urile GitHub ar trebui să aibă permisiuni minime necesare

### Acces la Modelele GitHub

- Token-uri de Acces Personal (PAT) necesare pentru Modelele GitHub
- Token-urile ar trebui stocate ca variabile de mediu
- Nu comiteți niciodată token-uri sau credențiale

## Note Suplimentare

### Public Țintă

- Începători complet în dezvoltarea web
- Studenți și autodidacți
- Profesori care utilizează curriculumul în săli de clasă
- Conținutul este conceput pentru accesibilitate și dezvoltarea graduală a abilităților

### Filosofia Educațională

- Abordare bazată pe proiecte
- Verificări frecvente ale cunoștințelor (teste)
- Exerciții practice de codare
- Exemple de aplicații din lumea reală
- Accent pe fundamente înainte de framework-uri

### Întreținerea Depozitului

- Comunitate activă de cursanți și contribuitori
- Actualizări regulate ale dependențelor și conținutului
- Probleme și discuții monitorizate de mentori
- Actualizări ale traducerilor automatizate prin GitHub Actions

### Resurse Asemănătoare

- [Module Microsoft Learn](https://docs.microsoft.com/learn/)
- [Resurse Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomandat pentru cursanți
- Cursuri suplimentare: Generative AI, Data Science, ML, IoT disponibile

### Lucrul cu Proiecte Specifice

Pentru instrucțiuni detaliate despre proiectele individuale, consultați fișierele README din:
- `quiz-app/README.md` - Aplicație de teste Vue 3
- `7-bank-project/README.md` - Aplicație bancară cu autentificare
- `5-browser-extension/README.md` - Dezvoltarea extensiilor de browser
- `6-space-game/README.md` - Dezvoltarea jocurilor bazate pe Canvas
- `9-chat-project/README.md` - Proiect asistent AI de chat

### Structura Monorepo

Deși nu este un monorepo tradițional, acest depozit conține mai multe proiecte independente:
- Fiecare lecție este autonomă
- Proiectele nu împărtășesc dependențe
- Lucrați la proiecte individuale fără a afecta altele
- Clonați întregul depozit pentru experiența completă a curriculumului

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa maternă trebuie considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.