# AGENTS.md

## Prezentare generală a proiectului

Acesta este un depozit curricular educațional pentru predarea bazelor dezvoltării web începătorilor. Curriculumul este un curs cuprinzător de 12 săptămâni, dezvoltat de Microsoft Cloud Advocates, care cuprinde 24 de lecții practice ce acoperă JavaScript, CSS și HTML.

### Componente cheie

- **Conținut educațional**: 24 de lecții structurate organizate în module bazate pe proiecte
- **Proiecte practice**: Terrarium, Joc de tastare, Extensie browser, Joc spațial, Aplicație bancară, Editor de cod și Asistent AI pentru chat
- **Teste interactive**: 48 de teste cu câte 3 întrebări fiecare (evaluări înainte și după lecție)
- **Suport multilingv**: Traduceri automate în peste 50 de limbi prin GitHub Actions
- **Tehnologii**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pentru proiecte AI)

### Arhitectură

- Depozit educațional cu structură bazată pe lecții
- Fiecare dosar de lecție conține README, exemple de cod și soluții
- Proiecte independente în directoare separate (quiz-app, diverse proiecte de lecții)
- Sistem de traducere folosind GitHub Actions (co-op-translator)
- Documentație servită prin Docsify și disponibilă în format PDF

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
npm run dev        # Porniți serverul de dezvoltare
npm run build      # Compilați pentru producție
npm run lint       # Rulați ESLint
```

### API Proiect bancar (Node.js + Express)

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

### Proiect chat (backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Setează variabila de mediu GITHUB_TOKEN
python api.py
```

## Flux de lucru pentru dezvoltare

### Pentru contribuitori de conținut

1. **Forkați depozitul** în contul dvs. GitHub
2. **Clonați fork-ul** local
3. **Creați un nou branch** pentru modificările dvs.
4. Faceți modificări în conținutul lecțiilor sau exemplele de cod
5. Testați orice modificări de cod în directoarele proiectelor relevante
6. Trimiteți pull request-uri urmând ghidul de contribuție

### Pentru cursanți

1. Fork sau clonați depozitul
2. Navigați secvențial prin directoarele lecțiilor
3. Citiți fișierele README pentru fiecare lecție
4. Completați testele înainte de lecție la https://ff-quizzes.netlify.app/web/
5. Parcurgeți exemplele de cod din folderele lecțiilor
6. Finalizați temele și provocările
7. Susțineți testele post-lectie

### Dezvoltare live

- **Documentație**: Rulați `docsify serve` în rădăcină (port 3000)
- **Quiz App**: Rulați `npm run dev` în directorul quiz-app
- **Proiecte**: Folosiți extensia VS Code Live Server pentru proiectele HTML
- **Proiecte API**: Rulați `npm start` în directoarele API respective

## Instrucțiuni de testare

### Testarea Quiz App

```bash
cd quiz-app
npm run lint       # Verifică problemele de stil de cod
npm run build      # Verifică dacă compilarea reușește
```

### Testarea API bancar

```bash
cd 7-bank-project/api
npm run lint       # Verifică problemele de stil de cod
node server.js     # Verifică dacă serverul pornește fără erori
```

### Abordare generală pentru testare

- Acesta este un depozit educațional fără teste automate cuprinzătoare
- Testarea manuală se concentrează pe:
  - Exemple de cod care rulează fără erori
  - Linkurile din documentație funcționează corect
  - Proiectele se construiesc cu succes
  - Exemplele urmează cele mai bune practici

### Verificări înainte de trimitere

- Rulați `npm run lint` în directoarele cu package.json
- Verificați validitatea linkurilor markdown
- Testați exemplele de cod în browser sau Node.js
- Asigurați-vă că traducerile mențin structura corectă

## Ghid de stil pentru cod

### JavaScript

- Folosiți sintaxa modernă ES6+
- Urmați configurațiile standard ESLint din proiecte
- Folosiți nume semnificative pentru variabile și funcții pentru claritatea educațională
- Adăugați comentarii explicative pentru concepte
- Formatați folosind Prettier unde este configurat

### HTML/CSS

- Elemente semantice HTML5
- Principii de design responsive
- Convenții clare de denumire a claselor
- Comentarii care explică tehnicile CSS pentru cursanți

### Python

- Respectați ghidul de stil PEP 8
- Exemple de cod clare și educaționale
- Sugestii de tipuri de date acolo unde ajută la învățare

### Documentație Markdown

- Ierarhie clară a titlurilor
- Blocuri de cod cu specificație de limbaj
- Linkuri către resurse suplimentare
- Capturi de ecran și imagini în directoarele `images/`
- Text alt pentru imagini pentru accesibilitate

### Organizarea fișierelor

- Lecții numerotate secvențial (1-getting-started-lessons, 2-js-basics, etc.)
- Fiecare proiect are directoare `solution/` și adesea `start/` sau `your-work/`
- Imaginile stocate în foldere `images/` specifice lecțiilor
- Traducerile în structura `translations/{language-code}/`

## Construire și implementare

### Implementarea Quiz App (Azure Static Web Apps)

quiz-app este configurat pentru implementare în Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creează folderul dist/
# Realizează implementarea prin workflow-ul GitHub Actions la împingerea pe main
```

Configurare Azure Static Web Apps:
- **Locația aplicației**: `/quiz-app`
- **Locația outputului**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generare PDF documentație

```bash
npm install                    # Instalează docsify-to-pdf
npm run convert               # Generează PDF din docs
```

### Documentație Docsify

```bash
npm install -g docsify-cli    # Instalează Docsify la nivel global
docsify serve                 # Rulează pe localhost:3000
```

### Construiri specifice proiectelor

Fiecare director de proiect poate avea propriul proces de build:
- Proiecte Vue: `npm run build` creează bundle-uri pentru producție
- Proiecte statice: Nu au pas de build, se servesc fișierele direct

## Ghid de pull request-uri

### Formatul titlului

Folosiți titluri clare și descriptive care indică aria de modificare:
- `[Quiz-app] Adaugă test nou pentru lecția X`
- `[Lecția-3] Corectează typo în proiectul terrarium`
- `[Traducere] Adaugă traducere spaniolă pentru lecția 5`
- `[Docs] Actualizează instrucțiunile de configurare`

### Verificările necesare

Înainte de a trimite un PR:

1. **Calitatea codului**:
   - Rulați `npm run lint` în directoarele proiectelor afectate
   - Remediați toate erorile și avertismentele lint

2. **Verificarea build-ului**:
   - Rulați `npm run build` dacă este cazul
   - Asigurați-vă că nu există erori la build

3. **Validarea linkurilor**:
   - Testați toate linkurile markdown
   - Verificați funcționalitatea imaginilor

4. **Revizuirea conținutului**:
   - Corectați ortografia și gramatica
   - Asigurați-vă că exemplele de cod sunt corecte și educaționale
   - Verificați ca traducerile să păstreze sensul original

### Cerințe de contribuție

- Acceptați Microsoft CLA (verificare automată la primul PR)
- Urmați [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Consultați [CONTRIBUTING.md](./CONTRIBUTING.md) pentru ghid complet
- Referiți numerele de issue în descrierea PR-ului dacă este cazul

### Procesul de revizuire

- PR-urile sunt revizuite de mentori și comunitate
- Claritatea educațională este prioritară
- Exemplele de cod trebuie să urmeze cele mai bune practici curente
- Traducerile sunt verificate pentru acuratețe și adecvare culturală

## Sistem de traducere

### Traducere automată

- Folosește GitHub Actions cu workflow-ul co-op-translator
- Traduce automat în peste 50 de limbi
- Fișiere sursă în directoare principale
- Fișiere traduse în directoarele `translations/{language-code}/`

### Adăugarea îmbunătățirilor manuale de traducere

1. Localizați fișierul în `translations/{language-code}/`
2. Faceți îmbunătățiri păstrând structura
3. Asigurați funcționalitatea exemplelor de cod
4. Testați orice conținut de quiz localizat

### Metadate pentru traduceri

Fișierele traduse includ un header de metadate:
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
- Verificați conflictele de port (implicit: Vite folosește port 5173)

**Server API nu pornește**:
- Verificați dacă versiunea Node.js este minim (node >=10)
- Verificați dacă portul este deja folosit
- Asigurați-vă că toate dependențele sunt instalate cu `npm install`

**Extensia browser nu se încarcă**:
- Verificați formatul corect al fișierului manifest.json
- Consultați consola browserului pentru erori
- Urmați instrucțiunile specifice browserului pentru instalare

**Probleme proiect chat Python**:
- Asigurați instalarea pachetului OpenAI: `pip install openai`
- Verificați setarea variabilei de mediu GITHUB_TOKEN
- Verificați permisiunile de acces la GitHub Models

**Docsify nu servește documentația**:
- Instalați global docsify-cli: `npm install -g docsify-cli`
- Rulați din directorul rădăcină al repo-ului
- Verificați existența fișierului `docs/_sidebar.md`

### Sfaturi pentru mediul de dezvoltare

- Folosiți VS Code cu extensia Live Server pentru proiectele HTML
- Instalați extensiile ESLint și Prettier pentru formatare consistentă
- Folosiți DevTools din browser pentru depanarea JavaScript
- Pentru proiectele Vue, instalați extensia Vue DevTools în browser

### Considerații de performanță

- Numărul mare de fișiere traduse (peste 50 de limbi) face clonele complete mari
- Folosiți shallow clone dacă lucrați doar pe conținut: `git clone --depth 1`
- Excludeți traducerile din căutări când lucrați pe conținut în limba engleză
- Procesele de build pot fi lente la prima rulare (npm install, build Vite)

## Considerații de securitate

### Variabile de mediu

- Cheile API nu trebuie niciodată să fie comise în depozit
- Folosiți fișiere `.env` (inclus deja în `.gitignore`)
- Documentați variabilele de mediu necesare în README-urile proiectelor

### Proiecte Python

- Folosiți medii virtuale: `python -m venv venv`
- Mențineți dependențele actualizate
- Token-urile GitHub trebuie să aibă permisiunile minime necesare

### Acces GitHub Models

- Token-uri personale de acces (PAT) necesare pentru GitHub Models
- Token-urile trebuie stocate ca variabile de mediu
- Nu comiteți niciodată token-uri sau credențiale

## Note suplimentare

### Public țintă

- Începători absoluți în dezvoltarea web
- Studenți și autodidacți
- Profesori care folosesc curriculumul în săli de clasă
- Conținut proiectat pentru accesibilitate și dezvoltare graduală a competențelor

### Filosofie educațională

- Abordare bazată pe învățare prin proiecte
- Verificări frecvente de cunoștințe (teste)
- Exerciții practice de codare
- Exemple reale de aplicare
- Accent pe fundamente înainte de framework-uri

### Mentenanța depozitului

- Comunitate activă de cursanți și contribuitori
- Actualizări regulate ale dependențelor și conținutului
- Probleme și discuții monitorizate de mentori
- Actualizări automate ale traducerilor prin GitHub Actions

### Resurse utile

- [Module Microsoft Learn](https://docs.microsoft.com/learn/)
- [Resurse Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomandat pentru cursanți
- Cursuri suplimentare: AI Generativ, Data Science, ML, IoT disponibile

### Lucrul cu proiecte specifice

Pentru instrucțiuni detaliate despre proiectele individuale, consultați fișierele README din:
- `quiz-app/README.md` - aplicație quiz Vue 3
- `7-bank-project/README.md` - aplicație bancară cu autentificare
- `5-browser-extension/README.md` - dezvoltare extensie browser
- `6-space-game/README.md` - dezvoltare joc pe canvas
- `9-chat-project/README.md` - proiect asistent AI pentru chat

### Structura Monorepo

Deși nu este un monorepo tradițional, acest depozit conține mai multe proiecte independente:
- Fiecare lecție este autonomă
- Proiectele nu împart dependențe
- Lucrați pe proiecte individuale fără a afecta altele
- Clonați întregul repo pentru experiența completă a curriculumului

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere automată AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa nativă trebuie considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm răspunderea pentru neînțelegeri sau interpretări eronate rezultate din utilizarea acestei traduceri.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->