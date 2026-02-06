# AGENTS.md

## Prezentare generală a proiectului

Acesta este un depozit educațional pentru predarea fundamentelor dezvoltării web începătorilor. Curriculumul este un curs cuprinzător de 12 săptămâni dezvoltat de Microsoft Cloud Advocates, cuprinzând 24 de lecții practice despre JavaScript, CSS și HTML.

### Componente cheie

- **Conținut educațional**: 24 de lecții structurate organizate în module bazate pe proiecte
- **Proiecte practice**: Terrarium, Joc de tastare, Extensie de browser, Joc spațial, Aplicație bancară, Editor de cod și Asistent AI pentru chat
- **Teste interactive**: 48 de teste cu câte 3 întrebări fiecare (evaluări pre/post-lesson)
- **Suport multilingv**: Traduceri automate în peste 50 de limbi prin GitHub Actions
- **Tehnologii**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pentru proiecte AI)

### Arhitectură

- Depozit educațional cu structură bazată pe lecții
- Fiecare folder de lecție conține README, exemple de cod și soluții
- Proiecte autonome în directoare separate (quiz-app, diverse proiecte de lecții)
- Sistem de traducere folosind GitHub Actions (co-op-translator)
- Documentația este servită prin Docsify și disponibilă ca PDF

## Comenzi de configurare

Acest depozit este destinat în principal consumului de conținut educațional. Pentru lucru cu proiecte specifice:

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

### API pentru proiectul bancar (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Pornește serverul API
npm run lint       # Rulează ESLint
npm run format     # Formatează cu Prettier
```

### Proiecte extensii de browser

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

1. **Fă fork al depozitului** în contul tău GitHub
2. **Clonează fork-ul** local
3. **Crează un branch nou** pentru modificările tale
4. Modifică conținutul lecțiilor sau exemplele de cod
5. Testează orice modificare de cod în directoarele proiectelor relevante
6. Trimite pull requests conform ghidurilor de contribuție

### Pentru cursanți

1. Fă fork sau clonează depozitul
2. Navighează în ordine prin directoarele lecțiilor
3. Citește fișierele README pentru fiecare lecție
4. Completează testele pre-lesson la https://ff-quizzes.netlify.app/web/
5. Lucrează prin exemplele de cod din folderele lecțiilor
6. Finalizează temele și provocările
7. Susține testele post-lesson

### Dezvoltare live

- **Documentație**: Rulează `docsify serve` din directorul rădăcină (port 3000)
- **Quiz App**: Rulează `npm run dev` în directorul quiz-app
- **Proiecte**: Folosește extensia VS Code Live Server pentru proiectele HTML
- **Proiecte API**: Rulează `npm start` în directoarele API respective

## Instrucțiuni de testare

### Testare Quiz App

```bash
cd quiz-app
npm run lint       # Verifică problemele de stil ale codului
npm run build      # Verifică dacă compilarea reușește
```

### Testare API Bancar

```bash
cd 7-bank-project/api
npm run lint       # Verificați problemele legate de stilul codului
node server.js     # Verificați dacă serverul pornește fără erori
```

### Abordare generală de testare

- Acesta este un depozit educațional fără teste automate complete
- Testarea manuală se concentrează pe:
  - Exemplele de cod rulează fără erori
  - Legăturile din documentație funcționează corect
  - Construirea proiectului se finalizează cu succes
  - Exemplele respectă bunele practici

### Verificări înainte de trimitere

- Rulează `npm run lint` în directoarele cu package.json
- Verifică dacă linkurile markdown sunt valide
- Testează exemplele de cod în browser sau Node.js
- Verifică dacă traducerile păstrează structura corectă

## Ghid de stil pentru cod

### JavaScript

- Folosește sintaxa modernă ES6+
- Urmează configurațiile ESLint standard oferite în proiecte
- Folosește nume semnificative de variabile și funcții pentru claritate educațională
- Adaugă comentarii care explică conceptele pentru cursanți
- Formatează folosind Prettier unde este configurat

### HTML/CSS

- Elemente semantice HTML5
- Principii de design responsive
- Convenții clare de denumire a claselor
- Comentarii care explică tehnicile CSS pentru cursanți

### Python

- Urmează ghidul de stil PEP 8
- Exemple clare, educaționale de cod
- Hint-uri de tip unde sunt utile pentru învățare

### Documentație Markdown

- Ierarhie clară a titlurilor
- Blocuri de cod cu specificarea limbajului
- Linkuri către resurse suplimentare
- Capturi de ecran și imagini în directoarele `images/`
- Text alternativ pentru imagini pentru accesibilitate

### Organizarea fișierelor

- Lecții numerotate secvențial (1-getting-started-lessons, 2-js-basics etc.)
- Fiecare proiect are directoare `solution/` și deseori `start/` sau `your-work/`
- Imaginile stocate în foldere specifice lecțiilor `images/`
- Traduceri în structura `translations/{language-code}/`

## Construire și distribuire

### Distribuire Quiz App (Azure Static Web Apps)

quiz-app este configurat pentru distribuire pe Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creează folderul dist/
# Depune prin workflow-ul GitHub Actions la push în main
```

Configurație Azure Static Web Apps:
- **Locație aplicație**: `/quiz-app`
- **Locație output**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generare PDF pentru documentație

```bash
npm install                    # Instalare docsify-to-pdf
npm run convert               # Generează PDF din docs
```

### Documentație Docsify

```bash
npm install -g docsify-cli    # Instalează Docsify global
docsify serve                 # Servește pe localhost:3000
```

### Build-uri specifice proiectelor

Fiecare director de proiect poate avea propriul proces de build:
- Proiecte Vue: `npm run build` creează pachete pentru producție
- Proiecte statice: Fără pas de build, se servesc fișierele direct

## Ghid pentru Pull Request-uri

### Format titlu

Folosește titluri clare, descriptive care indică aria de modificare:
- `[Quiz-app] Adaugă noul quiz pentru lecția X`
- `[Lesson-3] Corectează typo în proiectul terrarium`
- `[Translation] Adaugă traducere în spaniolă pentru lecția 5`
- `[Docs] Actualizează instrucțiunile de configurare`

### Verificări necesare

Înainte de a trimite un PR:

1. **Calitatea codului**:
   - Rulează `npm run lint` în directoarele proiectelor afectate
   - Corectează toate erorile și avertismentele

2. **Verificare build**:
   - Rulează `npm run build` dacă este cazul
   - Asigură-te că nu există erori la build

3. **Validare linkuri**:
   - Testează toate linkurile markdown
   - Verifică dacă referințele la imagini funcționează

4. **Revizuirea conținutului**:
   - Corectează gramatica și ortografia
   - Asigură-te că exemplele de cod sunt corecte și educaționale
   - Verifică dacă traducerile păstrează sensul original

### Cerințe pentru contribuție

- Acceptă Microsoft CLA (verificare automată la primul PR)
- Urmează [Codul de conduită pentru surse deschise Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Vezi [CONTRIBUTING.md](./CONTRIBUTING.md) pentru ghiduri detaliate
- Referințe numerele issue-urilor în descrierea PR-ului dacă este cazul

### Proces de revizuire

- PR-urile sunt revizuite de mentori și comunitate
- Claritatea educațională este prioritară
- Exemplele de cod trebuie să urmeze cele mai bune practici actuale
- Traducerile sunt revizuite pentru acuratețe și adecvare culturală

## Sistem de traducere

### Traducere automată

- Folosește GitHub Actions cu workflow-ul co-op-translator
- Traduce automat în peste 50 de limbi
- Fișierele sursă sunt în directoarele principale
- Fișierele traduse sunt în directoarele `translations/{language-code}/`

### Adăugarea îmbunătățirilor manuale de traducere

1. Localizează fișierul în `translations/{language-code}/`
2. Fă îmbunătățiri păstrând structura
3. Asigură-te că exemplele de cod rămân funcționale
4. Testează orice conținut localizat pentru quiz

### Metadata traducere

Fișierele traduse includ antet cu metadata:
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
- Verifică dacă există conflicte de port (implicit: Vite folosește port 5173)

**Serverul API nu pornește**:
- Verifică dacă versiunea Node.js este minimă (node >=10)
- Verifică dacă portul este deja ocupat
- Asigură-te că toate dependențele sunt instalate cu `npm install`

**Extensia browser nu se încarcă**:
- Verifică dacă manifest.json este corect formatat
- Verifică consola browserului pentru erori
- Urmează instrucțiunile specifice browserului pentru instalarea extensiei

**Probleme proiect chat Python**:
- Asigură-te că pachetul OpenAI este instalat: `pip install openai`
- Verifică dacă variabila de mediu GITHUB_TOKEN este setată
- Verifică permisiunile de acces la GitHub Models

**Docsify nu servește documentația**:
- Instalează docsify-cli global: `npm install -g docsify-cli`
- Rulează din directorul rădăcină al depozitului
- Verifică dacă există `docs/_sidebar.md`

### Sfaturi pentru mediul de dezvoltare

- Folosește VS Code cu extensia Live Server pentru proiecte HTML
- Instalează extensiile ESLint și Prettier pentru formatări consecvente
- Folosește DevTools din browser pentru depanare JavaScript
- Pentru proiecte Vue, instalează extensia Vue DevTools pentru browser

### Considerații de performanță

- Numărul mare de fișiere traduse (50+ limbi) înseamnă clone complete mari
- Folosește clone superficial dacă lucrezi doar pe conținut: `git clone --depth 1`
- Exclude traducerile din căutări când lucrezi pe conținut în engleză
- Procesele de build pot fi lente la prima rulare (npm install, build Vite)

## Considerații de securitate

### Variabile de mediu

- Cheile API nu trebuie niciodată comise în depozit
- Folosește fișiere `.env` (inclus deja în `.gitignore`)
- Documentează variabilele de mediu necesare în README-urile proiectelor

### Proiecte Python

- Folosește medii virtuale: `python -m venv venv`
- Păstrează dependențele actualizate
- Token-urile GitHub trebuie să aibă permisiuni minime necesare

### Acces GitHub Models

- Sunt necesare Personal Access Tokens (PAT) pentru GitHub Models
- Token-urile trebuie stocate ca variabile de mediu
- Nu comite niciodată token-uri sau credențiale

## Note suplimentare

### Public țintă

- Începători compleți în dezvoltarea web
- Studenți și autodidacți
- Profesori care folosesc curriculumul în săli de clasă
- Conținut pentru accesibilitate și dezvoltarea graduală a abilităților

### Filosofie educațională

- Abordare bazată pe învățare prin proiecte
- Verificări frecvente ale cunoștințelor (teste)
- Exerciții practice de codare
- Exemple de aplicații din lumea reală
- Accent pe baze înainte de framework-uri

### Mentenanță depozit

- Comunitate activă de cursanți și contribuitori
- Actualizări regulate ale dependențelor și conținutului
- Probleme și discuții monitorizate de mentori
- Actualizări automate ale traducerilor prin GitHub Actions

### Resurse conexe

- [Module Microsoft Learn](https://docs.microsoft.com/learn/)
- [Resurse Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomandat pentru cursanți
- Cursuri adiționale: AI generativă, Data Science, ML, IoT

### Lucrul cu proiecte specifice

Pentru instrucțiuni detaliate privind proiectele individuale, consultă fișierele README din:
- `quiz-app/README.md` - aplicație de quiz Vue 3
- `7-bank-project/README.md` - aplicație bancară cu autentificare
- `5-browser-extension/README.md` - dezvoltare extensii browser
- `6-space-game/README.md` - dezvoltare joc pe canvas
- `9-chat-project/README.md` - proiect asistent AI chat

### Structura monorepo

Deși nu este un monorepo tradițional, acest depozit conține mai multe proiecte independente:
- Fiecare lecție este autonomă
- Proiectele nu împart dependențe
- Lucrează pe proiecte individuale fără a afecta altele
- Clonează întregul depozit pentru experiența completă a curriculumului

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Declinare de responsabilitate**:
Acest document a fost tradus folosind serviciul de traducere automată AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să oferim o traducere corectă, vă rugăm să aveți în vedere că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa nativă trebuie considerat sursa autorizată. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm răspunderea pentru eventualele neînțelegeri sau interpretări greșite ce pot rezulta din utilizarea acestei traduceri.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->