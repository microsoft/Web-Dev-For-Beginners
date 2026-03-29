# AGENTS.md

## Prezentare generală a proiectului

Aceasta este o arhivă curriculară educațională pentru predarea elementelor fundamentale de dezvoltare web pentru începători. Curriculumul este un curs cuprinzător de 12 săptămâni dezvoltate de Microsoft Cloud Advocates, care include 24 de lecții practice acoperind JavaScript, CSS și HTML.

### Componente cheie

- **Conținut educațional**: 24 de lecții structurate organizate în module bazate pe proiecte
- **Proiecte practice**: Terrarium, Typing Game, Browser Extension, Space Game, Banking App, Code Editor și AI Chat Assistant
- **Chestionare interactive**: 48 de chestionare cu câte 3 întrebări fiecare (evaluări pre/post-lecție)
- **Suport multi-limbă**: Traduceri automate pentru 50+ de limbi prin GitHub Actions
- **Tehnologii**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pentru proiectele AI)

### Arhitectură

- Arhivă educațională cu structură bazată pe lecții
- Fiecare dosar de lecție conține README, exemple de cod și soluții
- Proiecte independente în directoare separate (quiz-app, diverse proiecte de lecții)
- Sistem de traducere folosind GitHub Actions (co-op-translator)
- Documentație servită prin Docsify și disponibilă ca PDF

## Comenzi de configurare

Această arhivă este destinată în principal consumului de conținut educațional. Pentru a lucra cu proiecte specifice:

### Configurare principală a repository-ului

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

### API pentru proiectul Bank (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Pornește serverul API
npm run lint       # Rulează ESLint
npm run format     # Formatează cu Prettier
```

### Proiecte Browser Extension

```bash
cd 5-browser-extension/solution
npm install
# Urmați instrucțiunile specifice browserului pentru încărcarea extensiilor
```

### Proiecte Space Game

```bash
cd 6-space-game/solution
npm install
# Deschide index.html în browser sau folosește Live Server
```

### Proiect Chat (backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Setează variabila de mediu GITHUB_TOKEN
python api.py
```

## Flux de dezvoltare

### Pentru contribuitorii de conținut

1. **Fork la repository** în contul tău GitHub
2. **Clonează fork-ul** local
3. **Creează un nou branch** pentru modificările tale
4. Fă modificări în conținutul lecțiilor sau în exemplele de cod
5. Testează orice modificare de cod în directoarele proiectelor relevante
6. Trimite pull requests urmând ghidurile de contribuție

### Pentru cursanți

1. Fork sau clonează repository-ul
2. Navighează secvențial prin directoarele lecțiilor
3. Citește fișierele README pentru fiecare lecție
4. Completează chestionarele pre-lecție la https://ff-quizzes.netlify.app/web/
5. Parcurge exemplele de cod din folderele lecțiilor
6. Finalizează temele și provocările
7. Susține chestionarele post-lecție

### Dezvoltare locală (Live Development)

- **Documentație**: Rulează `docsify serve` în rădăcină (portul 3000)
- **Quiz App**: Rulează `npm run dev` în directorul quiz-app
- **Proiecte**: Folosește extensia VS Code Live Server pentru proiectele HTML
- **Proiecte API**: Rulează `npm start` în directoarele API respective

## Instrucțiuni de testare

### Testare Quiz App

```bash
cd quiz-app
npm run lint       # Verifică probleme de stil ale codului
npm run build      # Verifică dacă compilarea reușește
```

### Testare Bank API

```bash
cd 7-bank-project/api
npm run lint       # Verifică problemele de stil din cod
node server.js     # Verifică dacă serverul pornește fără erori
```

### Abordare generală de testare

- Aceasta este o arhivă educațională fără teste automate cuprinzătoare
- Testarea manuală se concentrează pe:
  - Exemplele de cod rulează fără erori
  - Linkurile din documentație funcționează corect
  - Build-urile proiectelor se finalizează cu succes
  - Exemplele urmează bune practici

### Verificări pre-trimitere

- Rulează `npm run lint` în directoarele cu package.json
- Verifică dacă linkurile markdown sunt valide
- Testează exemplele de cod în browser sau Node.js
- Verifică că traducerile păstrează structura corespunzătoare

## Ghid de stil pentru cod

### JavaScript

- Folosește sintaxa modernă ES6+
- Urmează configurațiile standard ESLint furnizate în proiecte
- Folosește nume semnificative pentru variabile și funcții pentru claritate educațională
- Adaugă comentarii care explică conceptele pentru cursanți
- Formatează folosind Prettier acolo unde este configurat

### HTML/CSS

- Elemente semantice HTML5
- Principii de design responsive
- Convenții clare de denumire a claselor
- Comentarii care explică tehnicile CSS pentru cursanți

### Python

- Ghiduri de stil PEP 8
- Exemple de cod clare și educaționale
- Hint-uri de tipare acolo unde sunt utile pentru învățare

### Documentație Markdown

- Ierarhie clară a titlurilor
- Blocuri de cod cu specificație a limbajului
- Linkuri către resurse suplimentare
- Capturi de ecran și imagini în directoarele `images/`
- Text alternativ pentru imagini pentru accesibilitate

### Organizarea fișierelor

- Lecțiile numerotate secvențial (1-getting-started-lessons, 2-js-basics, etc.)
- Fiecare proiect are `solution/` și adesea `start/` sau `your-work/` directoare
- Imaginile stocate în foldere `images/` specifice lecțiilor
- Traducerile în structura `translations/{language-code}/`

## Build și Deployment

### Deployment Quiz App (Azure Static Web Apps)

Quiz-app este configurat pentru deployment pe Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creează folderul dist/
# Desfășoară prin fluxul de lucru GitHub Actions la împingerea în ramura main
```

Azure Static Web Apps configuration:
- **App location**: `/quiz-app`
- **Output location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generare PDF pentru documentație

```bash
npm install                    # Instalează docsify-to-pdf
npm run convert               # Generează PDF din documentație
```

### Documentație Docsify

```bash
npm install -g docsify-cli    # Instalează Docsify la nivel global
docsify serve                 # Servește pe localhost:3000
```

### Build-uri specifice proiectelor

Fiecare director de proiect poate avea propriul proces de build:
- Proiecte Vue: `npm run build` creează bundle-uri pentru producție
- Proiecte statice: Fără pas de build, servește fișierele direct

## Ghid pentru Pull Request-uri

### Formatul titlului

Folosește titluri clare și descriptive care indică aria modificării:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Verificări necesare

Înainte de a trimite un PR:

1. **Calitatea codului**:
   - Rulează `npm run lint` în directoarele proiectului afectate
   - Remediază toate erorile și avertismentele de lint

2. **Verificare build**:
   - Rulează `npm run build` dacă este aplicabil
   - Asigură-te că nu există erori de build

3. **Validare linkuri**:
   - Testează toate linkurile markdown
   - Verifică referințele la imagini

4. **Revizuire conținut**:
   - Verifică ortografia și gramatica
   - Asigură-te că exemplele de cod sunt corecte și educaționale
   - Verifică că traducerile păstrează sensul original

### Cerințe pentru contribuție

- Acceptă Microsoft CLA (verificare automată la primul PR)
- Urmează [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Vezi [CONTRIBUTING.md](./CONTRIBUTING.md) pentru ghiduri detaliate
- Referă numerele issue-urilor în descrierea PR-ului dacă este cazul

### Procesul de revizuire

- PR-urile sunt revizuite de maintaineri și comunitate
- Claritatea educațională este prioritară
- Exemplele de cod trebuie să urmeze bune practici actuale
- Traducerile sunt revizuite pentru acuratețe și adecvare culturală

## Sistemul de traducere

### Traducere automată

- Folosește GitHub Actions cu workflow-ul co-op-translator
- Traduce automat în 50+ de limbi
- Fișiere sursă în directoarele principale
- Fișiere traduse în directoarele `translations/{language-code}/`

### Adăugarea îmbunătățirilor manuale la traduceri

1. Localizează fișierul în `translations/{language-code}/`
2. Fă îmbunătățiri păstrând structura
3. Asigură-te că exemplele de cod rămân funcționale
4. Testează orice conținut localizat al chestionarelor

### Metadate pentru traduceri

Fișierele traduse includ antetul de metadate:
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

## Depanare și rezolvarea problemelor

### Probleme comune

**Quiz app nu pornește**:
- Verifică versiunea Node.js (recomandat v14+)
- Șterge `node_modules` și `package-lock.json`, rulează `npm install` din nou
- Verifică conflictele de port (implicit: Vite folosește portul 5173)

**Serverul API nu pornește**:
- Verifică dacă versiunea Node.js îndeplinește minimul (node >=10)
- Verifică dacă portul este deja folosit
- Asigură-te că toate dependențele sunt instalate cu `npm install`

**Browser extension nu se încarcă**:
- Verifică dacă manifest.json este formatat corect
- Verifică consola browser-ului pentru erori
- Urmează instrucțiunile specifice browser-ului pentru instalarea extensiei

**Probleme proiect chat Python**:
- Asigură-te că pachetul OpenAI este instalat: `pip install openai`
- Verifică variabila de mediu GITHUB_TOKEN este setată
- Verifică permisiunile de acces GitHub Models

**Docsify nu servește documentația**:
- Instalează docsify-cli global: `npm install -g docsify-cli`
- Rulează din directorul rădăcină al repository-ului
- Verifică că `docs/_sidebar.md` există

### Sfaturi pentru mediul de dezvoltare

- Folosește VS Code cu extensia Live Server pentru proiectele HTML
- Instalează extensiile ESLint și Prettier pentru format consistent
- Folosește DevTools din browser pentru depanarea JavaScript
- Pentru proiectele Vue, instalează extensia Vue DevTools pentru browser

### Considerații de performanță

- Numărul mare de fișiere traduse (50+ de limbi) înseamnă că clone-urile complete sunt mari
- Folosește clone superficial dacă lucrezi doar pe conținut: `git clone --depth 1`
- Exclude traducerile din căutări când lucrezi pe conținutul în engleză
- Procesele de build pot fi lente la prima rulare (npm install, Vite build)

## Considerații de securitate

### Variabile de mediu

- Cheile API nu trebuie niciodată comise în repository
- Folosește fișiere `.env` (sunt deja în `.gitignore`)
- Documentează variabilele de mediu necesare în README-urile proiectelor

### Proiecte Python

- Folosește medii virtuale: `python -m venv venv`
- Păstrează dependențele actualizate
- Token-urile GitHub ar trebui să aibă permisiunile minime necesare

### Acces GitHub Models

- Personal Access Tokens (PAT) necesare pentru GitHub Models
- Token-urile ar trebui stocate ca variabile de mediu
- Nu comite niciodată token-uri sau credențiale

## Note suplimentare

### Public țintă

- Începători compleți în dezvoltarea web
- Studenți și autodidacți
- Profesori care folosesc curriculumul în sălile de clasă
- Conținutul este conceput pentru accesibilitate și construire treptată a abilităților

### Filosofia educațională

- Abordare de învățare bazată pe proiecte
- Verificări frecvente ale cunoștințelor (chestionare)
- Exerciții practice de codare
- Exemple de aplicații din lumea reală
- Accent pe elementele fundamentale înaintea framework-urilor

### Mentenanța repository-ului

- Comunitate activă de cursanți și contributori
- Actualizări regulate ale dependențelor și conținutului
- Issue-uri și discuții monitorizate de maintaineri
- Actualizările de traducere automatizate prin GitHub Actions

### Resurse conexe

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomandat pentru cursanți
- Cursuri adiționale: Generative AI, Data Science, ML, IoT curricula disponibile

### Lucrul cu proiecte specifice

Pentru instrucțiuni detaliate despre proiectele individuale, consultă fișierele README din:
- `quiz-app/README.md` - Vue 3 quiz application
- `7-bank-project/README.md` - Banking application with authentication
- `5-browser-extension/README.md` - Browser extension development
- `6-space-game/README.md` - Canvas-based game development
- `9-chat-project/README.md` - AI chat assistant project

### Structura monorepo-ului

Deși nu este un monorepo tradițional, acest repository conține multiple proiecte independente:
- Fiecare lecție este autonomă
- Proiectele nu împart dependențe
- Lucrează la proiecte individuale fără a afecta altele
- Clonează întregul repo pentru experiența completă a curriculumului

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Declinare de responsabilitate**:
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim pentru acuratețe, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa nativă trebuie considerat sursa autorizată. Pentru informații critice, se recomandă o traducere profesională realizată de un traducător uman. Nu ne asumăm nicio răspundere pentru orice neînțelegeri sau interpretări greșite care rezultă din utilizarea acestei traduceri.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->