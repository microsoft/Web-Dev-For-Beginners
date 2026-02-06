# AGENTS.md

## Prezentare generală a proiectului

Acesta este un depozit curricular educațional pentru predarea fundamentelor dezvoltării web începătorilor. Curriculumul este un curs cuprinzător de 12 săptămâni dezvoltat de Microsoft Cloud Advocates, cuprinzând 24 de lecții practice care acoperă JavaScript, CSS și HTML.

### Componente cheie

- **Conținut educațional**: 24 de lecții structurate organizate în module bazate pe proiecte
- **Proiecte practice**: Terrarium, Joc de tastare, Extensie browser, Joc spațial, Aplicație bancară, Editor de cod și Asistent AI chat
- **Chestionare interactive**: 48 de chestionare cu câte 3 întrebări fiecare (evaluări pre/post-liceu)
- **Suport multilingv**: traduceri automate pentru peste 50 de limbi prin GitHub Actions
- **Tehnologii**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pentru proiectele AI)

### Arhitectură

- Depozit educațional cu structură bazată pe lecții
- Fiecare folder lecție conține README, exemple de cod și soluții
- Proiecte independente în directoare separate (quiz-app, diverse proiecte lecții)
- Sistem de traducere folosind GitHub Actions (co-op-translator)
- Documentație servită prin Docsify și disponibilă și în PDF

## Comenzi de configurare

Acest depozit este destinat în principal consumului de conținut educațional. Pentru a lucra cu proiecte specifice:

### Configurare depozit principal

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

### Proiecte extensie browser

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

### Proiect chat (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Setează variabila de mediu GITHUB_TOKEN
python api.py
```

## Flux de dezvoltare

### Pentru contribuitorii de conținut

1. **Fork la depozit** în contul tău GitHub
2. **Clonează fork-ul** local
3. **Creează un branch nou** pentru modificările tale
4. Fă schimbări la conținutul lecțiilor sau la exemplele de cod
5. Testează orice modificări de cod în directoarele relevante proiectului
6. Trimite cereri pull request urmând ghidurile de contribuție

### Pentru cursanți

1. Fă fork sau clonează depozitul
2. Navighează secvențial prin directoarele lecțiilor
3. Citește fișierele README pentru fiecare lecție
4. Completează chestionarele pre-liceu la https://ff-quizzes.netlify.app/web/
5. Lucrează cu exemplele de cod din folderele lecțiilor
6. Completează temele și provocările
7. Susține chestionarele post-liceu

### Dezvoltare live

- **Documentație**: Rulează `docsify serve` în rădăcină (port 3000)
- **Quiz App**: Rulează `npm run dev` în directorul quiz-app
- **Proiecte**: Folosește extensia VS Code Live Server pentru proiectele HTML
- **Proiecte API**: Rulează `npm start` în directoarele API respective

## Instrucțiuni de testare

### Testare Quiz App

```bash
cd quiz-app
npm run lint       # Verifică problemele stilului de cod
npm run build      # Verifică dacă compilarea reușește
```

### Testare API bancar

```bash
cd 7-bank-project/api
npm run lint       # Verifică pentru probleme de stil de cod
node server.js     # Verifică dacă serverul pornește fără erori
```

### Abordare generală de testare

- Acesta este un depozit educațional fără teste automate complexe
- Testarea manuală se concentrează pe:
  - Exemple de cod care rulează fără erori
  - Legături în documentație funcționează corect
  - Build-urile proiectelor se finalizează cu succes
  - Exemplele respectă bunele practici

### Verificări pre-trimitere

- Rulează `npm run lint` în directoarele cu package.json
- Verifică dacă link-urile markdown sunt valide
- Testează exemplele de cod în browser sau Node.js
- Verifică dacă traducerile păstrează structura corectă

## Ghiduri de stil pentru cod

### JavaScript

- Folosește sintaxa modernă ES6+
- Urmează configurațiile standard ESLint din proiecte
- Folosește nume semnificative pentru variabile și funcții pentru claritate educațională
- Adaugă comentarii care explică conceptele pentru cursanți
- Formatează folosind Prettier, dacă este configurat

### HTML/CSS

- Elemente semantice HTML5
- Principii de design responsive
- Convenții clare de denumire pentru clase
- Comentarii explicative privind tehnicile CSS pentru cursanți

### Python

- Ghiduri de stil PEP 8
- Exemple clare, educaționale de cod
- Hint-uri de tip unde sunt utile pentru învățare

### Documentație Markdown

- Ierarhie clară a titlurilor
- Blocuri de cod cu specificarea limbajului
- Link-uri către resurse suplimentare
- Capturi de ecran și imagini în directoarele `images/`
- Text alternativ pentru imagini pentru accesibilitate

### Organizarea fișierelor

- Lecțiile numerotate secvențial (1-getting-started-lessons, 2-js-basics, etc.)
- Fiecare proiect are directoarele `solution/` și frecvent `start/` sau `your-work/`
- Imaginile stocate în foldere `images/` specifice fiecărei lecții
- Traducerile în structura `translations/{language-code}/`

## Construire și implementare

### Implementarea Quiz App (Azure Static Web Apps)

Quiz-app este configurat pentru implementarea pe Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creează folderul dist/
# Implementare prin fluxul de lucru GitHub Actions la push pe main
```

Configurare Azure Static Web Apps:
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

Fiecare director de proiect poate avea propriul proces de construire:
- Proiecte Vue: `npm run build` creează pachetele pentru producție
- Proiecte statice: Fără pas de build, fișierele se servesc direct

## Ghiduri pentru Pull Request-uri

### Format titlu

Folosește titluri clare, descriptive care indică aria de modificare:
- `[Quiz-app] Add new quiz for lesson X`
- `[Lesson-3] Fix typo in terrarium project`
- `[Translation] Add Spanish translation for lesson 5`
- `[Docs] Update setup instructions`

### Verificări necesare

Înainte de a trimite un PR:

1. **Calitatea codului**:
   - Rulează `npm run lint` în directoarele proiectelor afectate
   - Corectează toate erorile și avertismentele linting

2. **Verificarea build-ului**:
   - Rulează `npm run build`, dacă este cazul
   - Asigură-te că nu există erori de build

3. **Validarea linkurilor**:
   - Testează toate link-urile markdown
   - Verifică dacă referințele imaginilor funcționează

4. **Revizuirea conținutului**:
   - Corectează ortografia și gramatica
   - Asigură-te că exemplele de cod sunt corecte și educaționale
   - Verifică dacă traducerile păstrează sensul original

### Cerințe pentru contribuție

- Acceptă Microsoft CLA (verificare automată la primul PR)
- Urmează [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Consultă [CONTRIBUTING.md](./CONTRIBUTING.md) pentru ghiduri detaliate
- Referințează în descrierea PR-ului numerele de issue, dacă este cazul

### Procesul de revizuire

- PR-urile sunt revizuite de mentori și comunitate
- Se prioritizează claritatea educațională
- Exemplele de cod trebuie să respecte cele mai bune practici actuale
- Traducerile sunt revizuite pentru acuratețe și adecvare culturală

## Sistem de traducere

### Traducere automată

- Folosește GitHub Actions cu fluxul co-op-translator
- Traduce automat în peste 50 de limbi
- Fișiere sursă în directoarele principale
- Fișiere traduse în directoarele `translations/{language-code}/`

### Adăugarea îmbunătățirilor manuale la traduceri

1. Găsește fișierul în `translations/{language-code}/`
2. Fă îmbunătățiri păstrând structura
3. Asigură-te că exemplele de cod rămân funcționale
4. Testează conținutul localizat al chestionarelor

### Metadate traducere

Fișiere traduse includ antet de metadate:
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

## Debugging și depanare

### Probleme comune

**Quiz app nu pornește**:
- Verifică versiunea Node.js (recomandat v14+)
- Șterge `node_modules` și `package-lock.json`, rulează `npm install` din nou
- Verifică conflictele de port (implicit: Vite folosește port 5173)

**Serverul API nu pornește**:
- Verifică versiunea minimă Node.js (node >=10)
- Verifică dacă portul este deja ocupat
- Asigură-te că toate dependențele sunt instalate cu `npm install`

**Extensia browser nu se încarcă**:
- Verifică dacă manifest.json este formatat corect
- Verifică consola browser pentru erori
- Urmează instrucțiunile specifice browserului pentru instalare extensii

**Probleme proiect chat Python**:
- Asigură-te că pachetul OpenAI e instalat: `pip install openai`
- Verifică că variabila de mediu GITHUB_TOKEN este setată
- Verifică permisiunile de acces la GitHub Models

**Docsify nu servește documentația**:
- Instalează docsify-cli global: `npm install -g docsify-cli`
- Rulează din directorul rădăcină al depozitului
- Verifică dacă `docs/_sidebar.md` există

### Sfaturi pentru mediul de dezvoltare

- Folosește VS Code cu extensia Live Server pentru proiectele HTML
- Instalează extensiile ESLint și Prettier pentru formatare consistentă
- Folosește DevTools din browser pentru depanarea JavaScript
- Pentru proiectele Vue, instalează extensia Vue DevTools în browser

### Considerații de performanță

- Numărul mare de fișiere traduse (50+ limbi) face clonele complete mari
- Folosește clone shallow dacă lucrezi doar cu conținut: `git clone --depth 1`
- Exclude traducerile din căutări când lucrezi pe conținut în engleză
- Procesele de build pot rula încet la prima execuție (npm install, build Vite)

## Considerații de securitate

### Variabile de mediu

- Cheile API să nu fie niciodată comise în depozit
- Folosește fișiere `.env` (deja în `.gitignore`)
- Documentează variabilele de mediu necesare în README-urile proiectelor

### Proiecte Python

- Folosește medii virtuale: `python -m venv venv`
- Menține dependențele actualizate
- Token-urile GitHub trebuie să aibă permisiunile minime necesare

### Acces GitHub Models

- Pentru GitHub Models sunt necesare token-uri personale de acces (PAT)
- Token-urile trebuie stocate ca variabile de mediu
- Nu comite niciodată token-uri sau credențiale

## Note suplimentare

### Public țintă

- Începători compleți în dezvoltarea web
- Studenți și autodidacți
- Profesori care folosesc curriculumul în sălile de clasă
- Conținutul este conceput pentru accesibilitate și dezvoltare graduală a abilitaților

### Filosofie educațională

- Abordare de învățare bazată pe proiecte
- Verificări frecvente ale cunoștințelor (chestionare)
- Exerciții practice de codare
- Exemple de aplicare în lumea reală
- Focalizare pe fundamente înainte de cadre de lucru

### Mentenanță depozit

- Comunitate activă de cursanți și contribuitori
- Actualizări regulate ale dependențelor și conținutului
- Probleme și discuții monitorizate de mentori
- Actualizările traducerilor automatizate prin GitHub Actions

### Resurse conexe

- [Module Microsoft Learn](https://docs.microsoft.com/learn/)
- [Resurse Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomandat pentru cursanți
- Cursuri suplimentare: Generative AI, Data Science, ML, IoT disponibile

### Lucrul cu proiecte specifice

Pentru instrucțiuni detaliate despre proiectele individuale, consultă fișierele README din:
- `quiz-app/README.md` - aplicație quiz Vue 3
- `7-bank-project/README.md` - aplicație bancară cu autentificare
- `5-browser-extension/README.md` - dezvoltare extensie browser
- `6-space-game/README.md` - dezvoltare joc bazat pe canvas
- `9-chat-project/README.md` - proiect asistent chat AI

### Structura Monorepo

Deși nu este un monorepo tradițional, acest depozit conține mai multe proiecte independente:
- Fiecare lecție este autonomă
- Proiectele nu împart dependențe
- Lucrează pe proiecte individuale fără a afecta altele
- Clonează întregul depozit pentru experiența completă a curriculumului

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Declinare a responsabilității**:
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim pentru acuratețe, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa nativă trebuie considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm răspunderea pentru eventuale neînțelegeri sau interpretări greșite rezultate din utilizarea acestei traduceri.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->