# AGENTS.md

## Prezentarea Proiectului

Acesta este un depozit de curriculum educațional pentru predarea fundamentelor dezvoltării web începătorilor. Curriculumul este un curs cuprinzător de 12 săptămâni dezvoltat de Microsoft Cloud Advocates, care include 24 de lecții practice ce acoperă JavaScript, CSS și HTML.

### Componente Cheie

- **Conținut Educațional**: 24 de lecții structurate organizate în module bazate pe proiecte
- **Proiecte Practice**: Terrarium, Joc de tastare, Extensie de browser, Joc spațial, Aplicație bancară, Editor de cod și Asistent de chat AI
- **Chestionare Interactive**: 48 chestionare cu câte 3 întrebări fiecare (evaluări înainte/după lecție)
- **Suport Multilingv**: Traduceri automate pentru peste 50 de limbi prin GitHub Actions
- **Tehnologii**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pentru proiectele AI)

### Arhitectură

- Depozit educațional cu structură bazată pe lecții
- Fiecare folder de lecție conține README, exemple de cod și soluții
- Proiecte independente în directoare separate (quiz-app, diverse proiecte de lecție)
- Sistem de traducere folosind GitHub Actions (co-op-translator)
- Documentație servită prin Docsify și disponibilă ca PDF

## Comenzi de Configurare

Acest depozit este destinat în principal consumului de conținut educațional. Pentru lucrul cu proiecte specifice:

### Configurare Principală a Depozitului

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Configurare Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Pornește serverul de dezvoltare
npm run build      # Construiește pentru producție
npm run lint       # Rulează ESLint
```

### API Proiect Bancar (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Pornește serverul API
npm run lint       # Rulează ESLint
npm run format     # Formatează cu Prettier
```

### Proiecte Extensie Browser

```bash
cd 5-browser-extension/solution
npm install
# Urmați instrucțiunile specifice browserului pentru încărcarea extensiilor
```

### Proiecte Joc Spațial

```bash
cd 6-space-game/solution
npm install
# Deschide index.html în browser sau folosește Live Server
```

### Proiect Chat (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Setează variabila de mediu GITHUB_TOKEN
python api.py
```

## Flux de Dezvoltare

### Pentru Contribuitorii de Conținut

1. **Furcați depozitul** în contul vostru GitHub
2. **Clonați furca** local
3. **Creați un nou branch** pentru modificările voastre
4. Faceți modificări în conținutul lecțiilor sau exemplele de cod
5. Testați orice modificare de cod în directoarele proiectelor relevante
6. Trimiteți pull requests respectând ghidul de contribuție

### Pentru Învățăcei

1. Fork sau clonați depozitul
2. Navigați secvențial în directoarele lecțiilor
3. Citiți fișierele README pentru fiecare lecție
4. Completați chestionarele pre-lectură la https://ff-quizzes.netlify.app/web/
5. Parcurgeți exemplele de cod din folderele lecțiilor
6. Finalizați temele și provocările
7. Susțineți chestionarele post-lectură

### Dezvoltare Live

- **Documentație**: Rulați `docsify serve` în rădăcină (port 3000)
- **Quiz App**: Rulați `npm run dev` în directorul quiz-app
- **Proiecte**: Folosiți extensia VS Code Live Server pentru proiectele HTML
- **Proiecte API**: Rulați `npm start` în directoarele API corespunzătoare

## Instrucțiuni de Testare

### Testare Quiz App

```bash
cd quiz-app
npm run lint       # Verifică problemele de stil al codului
npm run build      # Verifică dacă compilarea reușește
```

### Testare API Bancar

```bash
cd 7-bank-project/api
npm run lint       # Verifică problemele de stil ale codului
node server.js     # Verifică dacă serverul pornește fără erori
```

### Abordare Generală de Testare

- Este un depozit educațional fără teste automate cuprinzătoare
- Testarea manuală se concentrează pe:
  - Exemplele de cod rulează fără erori
  - Linkurile din documentație funcționează corect
  - Proiectele se construiesc cu succes
  - Exemplele respectă bunele practici

### Verificări Pre-trimitere

- Rulați `npm run lint` în directoarele cu package.json
- Verificați validitatea linkurilor markdown
- Testați exemplele de cod în browser sau Node.js
- Asigurați-vă că traducerile păstrează structura corectă

## Ghid de Stil pentru Cod

### JavaScript

- Folosiți sintaxa modernă ES6+
- Respectați configurațiile standard ESLint din proiecte
- Utilizați nume semnificative pentru variabile și funcții pentru claritate educațională
- Adăugați comentarii explicative pentru învățăcei
- Formatați cu Prettier unde este configurat

### HTML/CSS

- Elemente semantice HTML5
- Principii de design responsive
- Convenții clare de denumire a claselor
- Comentarii explicative pentru tehnici CSS pentru învățare

### Python

- Respectați ghidul de stil PEP 8
- Exemple de cod clare, educaționale
- Hinturi de tip unde sunt utile pentru învățare

### Documentație Markdown

- Ierarhie clară a titlurilor
- Blocuri de cod cu specificare de limbaj
- Linkuri către resurse suplimentare
- Capturi de ecran și imagini în directoarele `images/`
- Text alternativ pentru imagini pentru accesibilitate

### Organizarea Fișierelor

- Lecțiile numerotate secvențial (1-getting-started-lessons, 2-js-basics, etc.)
- Fiecare proiect are directoare `solution/` și de obicei `start/` sau `your-work/`
- Imaginile stocate în foldere `images/` specifice lecțiilor
- Traducerile în structura `translations/{language-code}/`

## Construire și Deploy

### Deploy Quiz App (Azure Static Web Apps)

quiz-app este configurat pentru deploy pe Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creează folderul dist/
# Implementare prin workflow GitHub Actions la push pe main
```

Configurare Azure Static Web Apps:
- **Locația aplicației**: `/quiz-app`
- **Locația output-ului**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generare PDF Documentație

```bash
npm install                    # Instalează docsify-to-pdf
npm run convert               # Generează PDF din docs
```

### Documentație Docsify

```bash
npm install -g docsify-cli    # Instalează Docsify global
docsify serve                 # Servește pe localhost:3000
```

### Build-uri Specifice Proiectului

Fiecare director de proiect poate avea propriul proces de build:
- Proiecte Vue: `npm run build` creează bundle-uri de producție
- Proiecte statice: Fără pas de build, servește fișierele direct

## Ghid pentru Pull Request-uri

### Formatul Titlului

Folosiți titluri clare și descriptive care indică zona de schimbare:
- `[Quiz-app] Adaugă un nou chestionar pentru lecția X`
- `[Lesson-3] Corectează o greșeală din proiectul terrarium`
- `[Translation] Adaugă traducerea în spaniolă pentru lecția 5`
- `[Docs] Actualizează instrucțiunile de configurare`

### Verificările Necesare

Înainte de a trimite un PR:

1. **Calitatea Codului**:
   - Rulați `npm run lint` în directoarele proiectului afectat
   - Remediați toate erorile și avertismentele lint

2. **Verificarea Build-ului**:
   - Rulați `npm run build` dacă este aplicabil
   - Asigurați-vă că nu există erori la build

3. **Validarea Linkurilor**:
   - Testați toate linkurile markdown
   - Verificați referințele imaginilor

4. **Revizuire Conținut**:
   - Corectați ortografia și gramatica
   - Asigurați corectitudinea și valoarea educațională a exemplelor de cod
   - Verificați că traducerile păstrează sensul original

### Cerințe pentru Contribuție

- Acceptați Microsoft CLA (verificare automată la primul PR)
- Urmați [Codul de conduită Microsoft Open Source](https://opensource.microsoft.com/codeofconduct/)
- Consultați [CONTRIBUTING.md](./CONTRIBUTING.md) pentru ghiduri detaliate
- Referiți numerele de issue în descrierea PR-ului dacă este cazul

### Procesul de Revizuire

- PR-urile sunt revizuite de menținători și comunitate
- Claritatea educațională este prioritară
- Exemplele de cod ar trebui să urmeze cele mai bune practici curente
- Traducerile sunt revizuite pentru corectitudine și potrivire culturală

## Sistemul de Traducere

### Traducere Automată

- Folosește GitHub Actions cu workflow co-op-translator
- Traduce automat în peste 50 de limbi
- Fișierele sursă în directoare principale
- Fișierele traduse în directoarele `translations/{language-code}/`

### Adăugarea Îmbunătățirilor Manuale de Traducere

1. Localizați fișierul în `translations/{language-code}/`
2. Faceți îmbunătățiri păstrând structura
3. Asigurați-vă că exemplele de cod rămân funcționale
4. Testați orice conținut localizat pentru chestionare

### Metadate ale Traducerii

Fișierele traduse includ un antet cu metadate:
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

## Depanare și Rezolvare Probleme

### Probleme Comune

**Quiz app nu pornește**:
- Verificați versiunea Node.js (recomandat v14+)
- Ștergeți `node_modules` și `package-lock.json`, rulați din nou `npm install`
- Verificați conflictele de port (implicit: Vite folosește portul 5173)

**Serverul API nu pornește**:
- Verificați dacă versiunea Node.js este minimă (node >=10)
- Verificați dacă portul este deja ocupat
- Asigurați-vă că toate dependențele sunt instalate cu `npm install`

**Extensia de browser nu se încarcă**:
- Verificați dacă manifest.json este formatat corect
- Verificați consola browser-ului pentru erori
- Urmați instrucțiunile specifice browserului pentru instalarea extensiei

**Probleme cu proiectul chat Python**:
- Asigurați-vă că pachetul OpenAI este instalat: `pip install openai`
- Verificați dacă variabila de mediu GITHUB_TOKEN este setată
- Verificați permisiunile de acces la GitHub Models

**Docsify nu servește documentația**:
- Instalați docsify-cli global: `npm install -g docsify-cli`
- Rulați din directorul rădăcină al depozitului
- Verificați dacă `docs/_sidebar.md` există

### Sfaturi pentru Mediul de Dezvoltare

- Folosiți VS Code cu extensia Live Server pentru proiectele HTML
- Instalați extensiile ESLint și Prettier pentru formatare uniformă
- Utilizați DevTools în browser pentru depanarea JavaScript
- Pentru proiectele Vue, instalați extensia Vue DevTools în browser

### Considerații de Performanță

- Numărul mare de fișiere traduse (peste 50 de limbi) face clonările complete mari
- Folosiți clonare superficială dacă lucrați doar cu conținutul: `git clone --depth 1`
- Excludeți traducerile din căutări când lucrați cu conținutul în engleză
- Procesele de build pot fi lente la prima rulare (npm install, build Vite)

## Considerații de Securitate

### Variabile de Mediu

- Cheile API nu trebuie niciodată păstrate în depozit
- Folosiți fișiere `.env` (deja în `.gitignore`)
- Documentați variabilele de mediu necesare în README-urile proiectelor

### Proiecte Python

- Folosiți medii virtuale: `python -m venv venv`
- Mențineți dependențele actualizate
- Token-urile GitHub trebuie să aibă permisiuni minime necesare

### Acces GitHub Models

- Sunt necesare Personal Access Tokens (PAT) pentru GitHub Models
- Token-urile trebuie stocate ca variabile de mediu
- Nu comiteți niciodată token-urile sau acreditările

## Note Suplimentare

### Public Țintă

- Începători compleți în dezvoltarea web
- Studenți și autodidacți
- Profesori care folosesc curriculumul în sălile de clasă
- Conținut conceput pentru accesibilitate și dezvoltare graduală a abilităților

### Filosofia Educațională

- Abordare bazată pe învățare prin proiecte
- Verificări frecvente ale cunoștințelor (chestionare)
- Exerciții practice de programare
- Exemple de aplicații din lumea reală
- Accent pe fundament înainte de framework-uri

### Mentenanță Depozit

- Comunitate activă de învățăcei și contribuitori
- Actualizări regulate ale dependențelor și conținutului
- Probleme și discuții monitorizate de menținători
- Actualizări ale traducerilor automatizate prin GitHub Actions

### Resurse Asociate

- [Module Microsoft Learn](https://docs.microsoft.com/learn/)
- [Resurse Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomandat pentru învățăcei
- Cursuri suplimentare: AI Generativ, Știința Datelor, ML, curricula IoT disponibile

### Lucrul cu Proiecte Specifice

Pentru instrucțiuni detaliate despre proiecte individuale, consultați fișierele README în:
- `quiz-app/README.md` - Aplicație quiz Vue 3
- `7-bank-project/README.md` - Aplicație bancară cu autentificare
- `5-browser-extension/README.md` - Dezvoltare extensie browser
- `6-space-game/README.md` - Dezvoltare joc canvas
- `9-chat-project/README.md` - Proiect asistent chat AI

### Structura Monorepo

Deși nu este un monorepo tradițional, acest depozit conține mai multe proiecte independente:
- Fiecare lecție este auto-suficientă
- Proiectele nu împart dependențe
- Se poate lucra pe proiecte individuale fără a afecta altele
- Clonați întregul depozit pentru experiența completă a curriculumului

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Declinare a responsabilității**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa nativă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională efectuată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite rezultate din utilizarea acestei traduceri.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->