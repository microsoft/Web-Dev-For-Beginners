# AGENTS.md

## Prezentare generală a proiectului

Acesta este un depozit curricular educațional pentru predarea fundamentelor dezvoltării web începătorilor. Curriculum-ul este un curs cuprinzător de 12 săptămâni dezvoltat de Microsoft Cloud Advocates, care include 24 de lecții practice acoperind JavaScript, CSS și HTML.

### Componente cheie

- **Conținut educațional**: 24 de lecții structurate organizate în module bazate pe proiecte
- **Proiecte practice**: Terrarium, Joc de tastare, Extensie de browser, Joc spațial, Aplicație bancară, Editor de cod și Asistent AI pentru chat
- **Chestionare interactive**: 48 de chestionare cu câte 3 întrebări fiecare (evaluări pre/post lecție)
- **Suport multilingv**: Traduceri automate în peste 50 de limbi prin GitHub Actions
- **Tehnologii**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pentru proiecte AI)

### Arhitectură

- Depozit educațional cu structură bazată pe lecții
- Fiecare folder de lecție conține README, exemple de cod și soluții
- Proiecte independente în directoare separate (quiz-app, diverse proiecte de lecție)
- Sistem de traducere folosind GitHub Actions (co-op-translator)
- Documentație servită prin Docsify și disponibilă ca PDF

## Comenzi de configurare

Acest depozit este destinat în principal consumului de conținut educațional. Pentru a lucra cu proiecte specifice:

### Configurarea principală a depozitului

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

### Proiect API bancar (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Pornire server API
npm run lint       # Rulează ESLint
npm run format     # Formatează cu Prettier
```

### Proiecte Extensie de browser

```bash
cd 5-browser-extension/solution
npm install
# Urmați instrucțiunile specifice browserului pentru încărcarea extensiilor
```

### Proiecte Joc spațial

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

## Flux de lucru pentru dezvoltare

### Pentru colaboratori de conținut

1. **Fă fork la depozit** în contul tău de GitHub
2. **Clonează fork-ul** local
3. **Creează un nou branch** pentru modificările tale
4. Fă modificări în conținutul lecțiilor sau exemplele de cod
5. Testează orice modificări de cod în directoarele proiectelor relevante
6. Trimite pull requests respectând ghidul de contribuție

### Pentru cursanți

1. Fă fork sau clonează depozitul
2. Navighează secvențial în directoarele lecțiilor
3. Citește fișierele README pentru fiecare lecție
4. Completează chestionarele pre-lecție la https://ff-quizzes.netlify.app/web/
5. Parcurge exemplele de cod din folderul lecțiilor
6. Finalizează temele și provocările
7. Parcurge chestionarele post-lecție

### Dezvoltare live

- **Documentație**: Rulează `docsify serve` în rădăcină (port 3000)
- **Quiz App**: Rulează `npm run dev` în directorul quiz-app
- **Proiecte**: Folosește extensia VS Code Live Server pentru proiectele HTML
- **Proiecte API**: Rulează `npm start` în directoarele API corespunzătoare

## Instrucțiuni pentru testare

### Testare Quiz App

```bash
cd quiz-app
npm run lint       # Verifică problemele de stil de cod
npm run build      # Verifică dacă compilarea reușește
```

### Testare API bancar

```bash
cd 7-bank-project/api
npm run lint       # Verifică problemele de stil ale codului
node server.js     # Verifică dacă serverul pornește fără erori
```

### Abordare generală pentru testare

- Acesta este un depozit educațional fără teste automate complete
- Testarea manuală se concentrează pe:
  - Exemplele de cod rulează fără erori
  - Linkurile din documentație funcționează corect
  - Construirile proiectelor se finalizează cu succes
  - Exemplele respectă bune practici

### Verificări înainte de trimitere

- Rulează `npm run lint` în directoarele cu package.json
- Verifică dacă linkurile markdown sunt valide
- Testează exemplele de cod în browser sau Node.js
- Verifică dacă traducerile păstrează structura corectă

## Ghid de stil pentru cod

### JavaScript

- Folosește sintaxa modernă ES6+
- Respectă configurațiile ESLint standard oferite în proiecte
- Folosește nume semnificative pentru variabile și funcții pentru claritate educațională
- Adaugă comentarii care explică conceptele pentru cursanți
- Formatează cu Prettier acolo unde este configurat

### HTML/CSS

- Elemente semantice HTML5
- Principii de design responsive
- Convenții clare de denumire a claselor
- Comentarii care explică tehnici CSS pentru cursanți

### Python

- Ghiduri de stil PEP 8
- Exemple de cod clare și educaționale
- Indicații de tip unde sunt utile pentru învățare

### Documentație Markdown

- Ierarhie clară a titlurilor
- Blocuri de cod cu specificare a limbajului
- Linkuri către resurse suplimentare
- Capturi de ecran și imagini în directoarele `images/`
- Text alternativ pentru imagini pentru accesibilitate

### Organizarea fișierelor

- Lecții numerotate secvențial (1-getting-started-lessons, 2-js-basics, etc.)
- Fiecare proiect are directoare `solution/` și adesea `start/` sau `your-work/`
- Imaginile stocate în folderele `images/` specifice lecțiilor
- Traducerile în structura `translations/{language-code}/`

## Construire și implementare

### Implementarea Quiz App (Azure Static Web Apps)

Quiz-app este configurat pentru implementare pe Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creează folderul dist/
# Publică prin fluxul de lucru GitHub Actions la push pe main
```

Configurare Azure Static Web Apps:
- **Locația aplicației**: `/quiz-app`
- **Locația output-ului**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generare PDF pentru documentație

```bash
npm install                    # Instalează docsify-to-pdf
npm run convert               # Generează PDF din docs
```

### Documentație Docsify

```bash
npm install -g docsify-cli    # Instalează Docsify global
docsify serve                 # Servește pe localhost:3000
```

### Build-uri specifice proiectelor

Fiecare director de proiect poate avea propriul proces de build:
- Proiecte Vue: `npm run build` creează pachetele pentru producție
- Proiecte statice: Nu există pas de build, se servesc fișierele direct

## Ghid pentru Pull Request-uri

### Formatul titlului

Folosește titluri clare și descriptive care indică aria schimbării:
- `[Quiz-app] Adaugă chestionar nou pentru lecția X`
- `[Lesson-3] Corectează typo în proiectul terrarium`
- `[Translation] Adaugă traducere spaniolă pentru lecția 5`
- `[Docs] Actualizează instrucțiunile de configurare`

### Verificări obligatorii

Înainte de a trimite un PR:

1. **Calitatea codului**:
   - Rulează `npm run lint` în directoarele proiectelor afectate
   - Corectează toate erorile și avertismentele lintei

2. **Verificarea build-ului**:
   - Rulează `npm run build` dacă este cazul
   - Asigură-te că nu există erori de build

3. **Validarea linkurilor**:
   - Testează toate linkurile markdown
   - Verifică dacă referințele imaginilor funcționează

4. **Revizuire conținut**:
   - Corectează ortografia și gramatica
   - Asigură-te că exemplele de cod sunt corecte și educaționale
   - Verifică dacă traducerile păstrează sensul original

### Cerințe pentru contribuții

- Acceptă Microsoft CLA (verificare automată la primul PR)
- Respectă [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Vezi [CONTRIBUTING.md](./CONTRIBUTING.md) pentru ghiduri detaliate
- Referențiază numerele issue-urilor în descrierea PR-ului dacă este cazul

### Procesul de revizuire

- PR-urile sunt revizuite de menținători și comunitate
- Prioritizăm claritatea educațională
- Exemplele de cod trebuie să urmeze cele mai bune practici actuale
- Traducerile sunt revizuite pentru acuratețe și adecvare culturală

## Sistemul de traducere

### Traducere automată

- Folosește GitHub Actions cu workflow-ul co-op-translator
- Traduce în peste 50 de limbi automat
- Fișierele sursă în directoarele principale
- Fișierele traduse în directoarele `translations/{language-code}/`

### Adăugarea îmbunătățirilor manuale la traducere

1. Localizează fișierul în `translations/{language-code}/`
2. Fă îmbunătățiri păstrând structura
3. Asigură-te că exemplele de cod rămân funcționale
4. Testează eventual conținutul localizat al chestionarelor

### Metadate pentru traduceri

Fișierele traduse includ un antet de metadate:
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
- Verifică versiunea Node.js (recomandat v14+)
- Șterge `node_modules` și `package-lock.json`, rulează din nou `npm install`
- Verifică conflictele de port (implicit: Vite folosește portul 5173)

**Serverul API nu pornește**:
- Asigură-te că versiunea Node.js este minim node >=10
- Verifică dacă portul este deja folosit
- Asigură-te că toate dependențele sunt instalate cu `npm install`

**Extensia browserului nu se încarcă**:
- Verifică dacă manifest.json este formatat corect
- Verifică consola browserului pentru erori
- Urmează instrucțiunile specifice browserului pentru instalarea extensiei

**Probleme proiect chat Python**:
- Asigură-te că pachetul OpenAI este instalat: `pip install openai`
- Verifică dacă variabila de mediu GITHUB_TOKEN este setată
- Verifică permisiunile de acces GitHub Models

**Docsify nu servește documentația**:
- Instalează docsify-cli global: `npm install -g docsify-cli`
- Rulează din directorul rădăcină al depozitului
- Verifică dacă `docs/_sidebar.md` există

### Sfaturi pentru mediul de dezvoltare

- Folosește VS Code cu extensia Live Server pentru proiectele HTML
- Instalează extensiile ESLint și Prettier pentru formatări consistente
- Folosește DevTools din browser pentru depanarea JavaScript-ului
- Pentru proiectele Vue, instalează extensia Vue DevTools pentru browser

### Considerații legate de performanță

- Numărul mare de fișiere traduse (peste 50 de limbi) face ca clonările întregi să fie mari
- Folosește shallow clone dacă lucrezi doar cu conținutul: `git clone --depth 1`
- Exclude traducerile din căutări când lucrezi pe conținutul în engleză
- Procesele de build pot fi lente la prima rulare (npm install, build cu Vite)

## Considerații de securitate

### Variabile de mediu

- Cheile API nu trebuie niciodată comise în depozit
- Folosește fișiere `.env` (excluse deja din `.gitignore`)
- Documentează variabilele de mediu necesare în README-urile proiectelor

### Proiecte Python

- Folosește medii virtuale: `python -m venv venv`
- Păstrează dependențele actualizate
- Tokenurile GitHub ar trebui să aibă permisiunile minime necesare

### Acces GitHub Models

- Tokenuri de acces personal (PAT) sunt necesare pentru GitHub Models
- Tokenurile trebuie stocate ca variabile de mediu
- Nu comite niciodată tokenuri sau credentiale

## Note suplimentare

### Public țintă

- Începători compleți în dezvoltarea web
- Studenți și autodidacți
- Profesori care folosesc curriculumul în clasă
- Conținut accesibil și construit pentru dezvoltare treptată a abilităților

### Filosofia educațională

- Abordare bazată pe proiecte
- Verificări frecvente ale cunoștințelor (quiz-uri)
- Exerciții practice de programare
- Exemple din lumea reală
- Accent pe fundament înainte de framework-uri

### Mentenanța depozitului

- Comunitate activă de cursanți și colaboratori
- Actualizări regulate ale dependențelor și conținutului
- Probleme și discuții monitorizate de menținători
- Actualizări automate ale traducerilor prin GitHub Actions

### Resurse conexe

- [Module Microsoft Learn](https://docs.microsoft.com/learn/)
- [Resurse Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomandat pentru cursanți
- Cursuri suplimentare: AI generativă, Data Science, ML, curricula IoT disponibile

### Lucrul cu proiecte specifice

Pentru instrucțiuni detaliate despre proiectele individuale, consultă fișierele README din:
- `quiz-app/README.md` - aplicație quiz Vue 3
- `7-bank-project/README.md` - aplicație bancară cu autentificare
- `5-browser-extension/README.md` - dezvoltare extensie browser
- `6-space-game/README.md` - dezvoltare joc bazat pe canvas
- `9-chat-project/README.md` - proiect asistent AI pentru chat

### Structura Monorepo

Deși nu este un monorepo tradițional, acest depozit conține mai multe proiecte independente:
- Fiecare lecție este autocontenută
- Proiectele nu împart dependențe
- Lucrează pe proiecte individuale fără a afecta altele
- Clonează întregul depozit pentru experiența completă a curriculumului

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Declinare de responsabilitate**:
Acest document a fost tradus folosind serviciul de traducere automată AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa nativă trebuie considerat sursa autorizată. Pentru informații critice, se recomandă traducerea profesională realizată de un traducător uman. Nu ne asumăm răspunderea pentru eventualele neînțelegeri sau interpretări greșite cauzate de utilizarea acestei traduceri.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->