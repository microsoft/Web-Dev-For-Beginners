# AGENTS.md

## Prezentare generală a proiectului

Acesta este un depozit curricular educațional pentru predarea fundamentelor dezvoltării web începătorilor. Curriculumul este un curs cuprinzător de 12 săptămâni, dezvoltat de Microsoft Cloud Advocates, care include 24 de lecții practice acoperind JavaScript, CSS și HTML.

### Componente cheie

- **Conținut educațional**: 24 de lecții structurate, organizate în module bazate pe proiecte
- **Proiecte practice**: Terrarium, Joc de tastare, Extensie de browser, Joc spațial, Aplicație bancară, Editor de cod și Asistent chat AI
- **Chestionare interactive**: 48 de chestionare cu câte 3 întrebări fiecare (evaluări pre/post-lectie)
- **Suport multilingv**: Traduceri automate în peste 50 de limbi prin GitHub Actions
- **Tehnologii**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pentru proiecte AI)

### Arhitectură

- Depozit educațional cu structură bazată pe lecții
- Fiecare folder de lecție conține README, exemple de cod și soluții
- Proiecte independente în directoare separate (quiz-app, proiecte diverse de lecții)
- Sistem de traducere folosind GitHub Actions (co-op-translator)
- Documentație servită prin Docsify și disponibilă ca PDF

## Comenzi de configurare

Acest depozit este destinat în principal pentru consumul conținutului educațional. Pentru a lucra cu proiecte specifice:

### Configurare principală a depozitului

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

### API proiect bancar (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Pornește serverul API
npm run lint       # Rulează ESLint
npm run format     # Formatează cu Prettier
```

### Proiecte extensie de browser

```bash
cd 5-browser-extension/solution
npm install
# Urmați instrucțiunile specifice browserului pentru încărcarea extensiilor
```

### Proiecte joc spațial

```bash
cd 6-space-game/solution
npm install
# Deschide index.html în browser sau folosește Live Server
```

### Proiect chat (backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Setează variabila de mediu GITHUB_TOKEN
python api.py
```

## Flux de dezvoltare

### Pentru contribuitorii de conținut

1. **Fork-uiți depozitul** în contul dvs. GitHub
2. **Clonați fork-ul** local
3. **Creați un nou branch** pentru modificările dvs.
4. Modificați conținutul lecțiilor sau exemplele de cod
5. Testați orice modificare de cod în directoarele proiectelor relevante
6. Trimiteți pull request-uri urmând ghidurile de contribuție

### Pentru cursanți

1. Faceți fork sau clonați depozitul
2. Navigați secvențial prin directoarele lecțiilor
3. Citiți fișierele README pentru fiecare lecție
4. Completați chestionarele pre-lectie la https://ff-quizzes.netlify.app/web/
5. Parcurgeți exemplele de cod din folderele lecțiilor
6. Finalizați temele și provocările
7. Susțineți chestionarele post-lectie

### Dezvoltare live

- **Documentație**: Rulați `docsify serve` în rădăcină (port 3000)
- **Quiz App**: Rulați `npm run dev` în directorul quiz-app
- **Proiecte**: Folosiți extensia VS Code Live Server pentru proiectele HTML
- **Proiecte API**: Rulați `npm start` în directoarele specifice API

## Instrucțiuni de testare

### Testare Quiz App

```bash
cd quiz-app
npm run lint       # Verifică problemele de stil în cod
npm run build      # Verifică dacă compilarea reușește
```

### Testare API bancar

```bash
cd 7-bank-project/api
npm run lint       # Verifică problemele de stil de cod
node server.js     # Verifică dacă serverul pornește fără erori
```

### Abordare generală de testare

- Acesta este un depozit educațional fără teste automate comprehensive
- Testarea manuală se concentrează pe:
  - Rularea exemplelor de cod fără erori
  - Funcționarea corectă a linkurilor din documentație
  - Complectarea cu succes a compilărilor proiectelor
  - Exemplele urmează cele mai bune practici

### Verificări înainte de trimitere

- Rulați `npm run lint` în directoarele cu package.json
- Verificați validitatea linkurilor markdown
- Testați exemplele de cod în browser sau Node.js
- Verificați dacă traducerile păstrează structura corectă

## Ghid de stil de cod

### JavaScript

- Folosiți sintaxa modernă ES6+
- Respectați configurațiile ESLint standard furnizate în proiecte
- Folosiți nume de variabile și funcții semnificative pentru claritatea educațională
- Adăugați comentarii explicative pentru concepte pentru cursanți
- Formatați folosind Prettier acolo unde este configurat

### HTML/CSS

- Elemente semantice HTML5
- Principii de design responsive
- Convenții clare de denumire a claselor
- Comentarii explicative pentru tehnici CSS pentru cursanți

### Python

- Ghiduri de stil PEP 8
- Exemple clare și educaționale de cod
- Tipări de tip unde sunt utile pentru învățare

### Documentație Markdown

- Ierarhie clară a titlurilor
- Blocuri de cod cu specificare a limbajului
- Linkuri către resurse suplimentare
- Capturi de ecran și imagini în directoarele `images/`
- Text alternativ pentru imagini pentru accesibilitate

### Organizarea fișierelor

- Lecții numerotate secvențial (1-getting-started-lessons, 2-js-basics etc.)
- Fiecare proiect are directoare `solution/` și adesea `start/` sau `your-work/`
- Imaginile sunt stocate în foldere `images/` specifice lecțiilor
- Traducerile sunt în structura `translations/{cod-limbă}/`

## Compilare și implementare

### Implementare Quiz App (Azure Static Web Apps)

quiz-app este configurat pentru implementarea Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creează folderul dist/
# Publică prin fluxul de lucru GitHub Actions la împingerea pe main
```

Configurarea Azure Static Web Apps:
- **Locație aplicație**: `/quiz-app`
- **Locație output**: `dist`
- **Flux de lucru**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generare PDF documentație

```bash
npm install                    # Instalează docsify-to-pdf
npm run convert               # Generează PDF din docs
```

### Documentație Docsify

```bash
npm install -g docsify-cli    # Instalează Docsify global
docsify serve                 # Servește pe localhost:3000
```

### Construiri specifice proiectelor

Fiecare director de proiect poate avea propriul proces de compilare:
- Proiecte Vue: `npm run build` creează bundle-uri de producție
- Proiecte statice: Fără pas de build, se servesc fișierele direct

## Ghid pentru pull request-uri

### Format titlu

Folosiți titluri clare, descriptive, indicând aria de schimbare:
- `[Quiz-app] Adăugare quiz nou pentru lecția X`
- `[Lesson-3] Corectare greșeală de tipar în proiectul terrarium`
- `[Translation] Adăugare traducere în spaniolă pentru lecția 5`
- `[Docs] Actualizare instrucțiuni de configurare`

### Verificări necesare

Înainte de trimiterea PR:

1. **Calitatea codului**:
   - Rulați `npm run lint` în directoarele proiectului afectat
   - Remediați toate erorile și avertismentele de lint

2. **Verificarea build-ului**:
   - Rulați `npm run build` dacă este cazul
   - Asigurați-vă că nu există erori de compilare

3. **Validare link-uri**:
   - Testați toate linkurile markdown
   - Verificați referințele imaginilor

4. **Revizuirea conținutului**:
   - Corectați ortografia și gramatica
   - Asigurați-vă că exemplele de cod sunt corecte și educaționale
   - Verificați dacă traducerile păstrează sensul original

### Cerințe de contribuție

- Acceptați CLA Microsoft (verificare automată la primul PR)
- Respectați [Codul de conduită Microsoft Open Source](https://opensource.microsoft.com/codeofconduct/)
- Consultați [CONTRIBUTING.md](./CONTRIBUTING.md) pentru ghiduri detaliate
- Referiți numere de issue în descrierea PR-ului dacă este cazul

### Proces de revizuire

- PR-urile sunt revizuite de către mentori și comunitate
- Claritatea educațională este prioritară
- Exemplele de cod ar trebui să urmeze cele mai bune practici actuale
- Traducerile sunt revizuite pentru acuratețe și adecvare culturală

## Sistem de traducere

### Traducere automată

- Folosește GitHub Actions cu flux de lucru co-op-translator
- Traduce automat în peste 50 de limbi
- Fișiere sursă în directoarele principale
- Fișiere traduse în directoarele `translations/{cod-limba}/`

### Adăugarea de îmbunătățiri manuale la traduceri

1. Localizați fișierul în `translations/{cod-limba}/`
2. Faceți îmbunătățiri păstrând structura
3. Asigurați-vă că exemplele de cod rămân funcționale
4. Testați orice conținut localizat pentru chestionare

### Metadata traducerii

Fișierele traduse includ un antet metadata:
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

## Depanare și rezolvare probleme

### Probleme comune

**Quiz app nu pornește**:
- Verificați versiunea Node.js (recomandat v14+)
- Ștergeți `node_modules` și `package-lock.json`, rulați din nou `npm install`
- Verificați conflictele de port (implicit: Vite folosește portul 5173)

**Serverul API nu pornește**:
- Verificați dacă versiunea Node.js este minim (node >=10)
- Verificați dacă portul este deja utilizat
- Asigurați-vă că toate dependențele sunt instalate cu `npm install`

**Extensia browser nu se încarcă**:
- Verificați dacă manifest.json este corect formatat
- Verificați consola browserului pentru erori
- Urmați instrucțiunile specifice browserului pentru instalarea extensiei

**Probleme proiect chat Python**:
- Asigurați-vă că pachetul OpenAI este instalat: `pip install openai`
- Verificați dacă variabila de mediu GITHUB_TOKEN este setată
- Verificați permisiunile de acces GitHub Models

**Docsify nu servește documentația**:
- Instalați docsify-cli global: `npm install -g docsify-cli`
- Rulați din directorul rădăcină al depozitului
- Verificați că există `docs/_sidebar.md`

### Sfaturi pentru mediul de dezvoltare

- Folosiți VS Code cu extensia Live Server pentru proiectele HTML
- Instalați extensiile ESLint și Prettier pentru formatare consistentă
- Folosiți DevTools din browser pentru depanarea JavaScript
- Pentru proiectele Vue, instalați extensia Vue DevTools pentru browser

### Considerații de performanță

- Numărul mare de fișiere traduse (50+ limbi) face clonele complete mari
- Folosiți clone shallow dacă lucrați doar cu conținut: `git clone --depth 1`
- Excludeți traducerile din căutări când lucrați cu conținutul în engleză
- Procesele de build pot fi lente la prima rulare (npm install, build Vite)

## Considerații de securitate

### Variabile de mediu

- Cheile API nu trebuie niciodată să fie comise în depozit
- Folosiți fișiere `.env` (explicit ignorate în `.gitignore`)
- Documentați variabilele de mediu necesare în README-urile proiectelor

### Proiecte Python

- Folosiți medii virtuale: `python -m venv venv`
- Mențineți dependențele actualizate
- Token-urile GitHub trebuie să aibă permisiuni minime necesare

### Acces GitHub Models

- Sunt necesare token-uri de acces personal (PAT) pentru GitHub Models
- Tokenurile trebuie stocate ca variabile de mediu
- Nu comiteți niciodată tokenurile sau credențialele

## Note suplimentare

### Public țintă

- Începători compleți în dezvoltarea web
- Studenți și autodidacți
- Profesori care folosesc curriculumul în săli de clasă
- Conținut creat pentru accesibilitate și dezvoltare graduală a abilităților

### Filosofia educațională

- Abordare bazată pe învățare prin proiecte
- Verificări frecvente ale cunoștințelor (chestionare)
- Exerciții practice de codare
- Exemple de aplicații din lumea reală
- Accent pe fundamente înainte de framework-uri

### Mentenanța depozitului

- Comunitate activă de cursanți și contribuitori
- Actualizări regulate ale dependințelor și conținutului
- Probleme și discuții monitorizate de mentori
- Actualizări automate ale traducerilor prin GitHub Actions

### Resurse conexe

- [Module Microsoft Learn](https://docs.microsoft.com/learn/)
- [Resurse Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomandat pentru cursanți
- Cursuri suplimentare: AI generativ, Data Science, ML, curriculum IoT disponibile

### Lucrul cu proiecte specifice

Pentru instrucțiuni detaliate despre proiectele individuale consultați fișierele README din:
- `quiz-app/README.md` - aplicație quiz Vue 3
- `7-bank-project/README.md` - aplicație bancară cu autentificare
- `5-browser-extension/README.md` - dezvoltare extensie browser
- `6-space-game/README.md` - dezvoltare joc canvas
- `9-chat-project/README.md` - proiect asistent chat AI

### Structura monorepo

Deși nu este un monorepo tradițional, acest depozit conține mai multe proiecte independente:
- Fiecare lecție este auto-conținută
- Proiectele nu împart dependențe
- Se poate lucra pe proiecte individuale fără a afecta altele
- Clonați întregul depozit pentru experiența completă a curriculumului

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Declinare a responsabilității**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). În timp ce ne străduim pentru acuratețe, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa nativă trebuie considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm răspunderea pentru eventualele neînțelegeri sau interpretări greșite apărute în urma utilizării acestei traduceri.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->