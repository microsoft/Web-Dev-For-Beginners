# AGENTS.md

## Prezentarea Proiectului

Acesta este un depozit curricular educațional pentru predarea fundamentelor dezvoltării web începătorilor. Curriculumul este un curs cuprinzător de 12 săptămâni dezvoltat de Microsoft Cloud Advocates, cuprinzând 24 de lecții practice care acoperă JavaScript, CSS și HTML.

### Componente Cheie

- **Conținut educațional**: 24 de lecții structurate organizate în module bazate pe proiecte
- **Proiecte practice**: Terrarium, Joc de tastare, Extensie de browser, Joc spațial, Aplicație bancară, Editor de cod și Asistent AI chat
- **Chestionare interactive**: 48 de chestionare cu câte 3 întrebări fiecare (evaluări pre/post-lecție)
- **Suport multilingv**: Traduceri automate pentru peste 50 de limbi prin GitHub Actions
- **Tehnologii**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pentru proiecte AI)

### Arhitectură

- Depozit educațional cu structură pe bază de lecții
- Fiecare dosar de lecție conține README, exemple de cod și soluții
- Proiecte autonome în directoare separate (quiz-app, diverse proiecte de lecție)
- Sistem de traducere folosind GitHub Actions (co-op-translator)
- Documentație servită prin Docsify și disponibilă ca PDF

## Comenzi de Configurare

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

### Pentru Contribuitori de Conținut

1. **Fork la depozit** în contul tău GitHub
2. **Clonează fork-ul** local
3. **Creează un branch nou** pentru modificările tale
4. Fă modificări în conținutul lecțiilor sau în exemplele de cod
5. Testează orice modificări de cod în directoarele proiectelor relevante
6. Trimite pull request-uri urmând ghidurile de contribuție

### Pentru Învățăcei

1. Fă fork sau clonează depozitul
2. Navighează secvențial prin directoarele lecțiilor
3. Citește fișierele README pentru fiecare lecție
4. Completează chestionarele pre-lecție la https://ff-quizzes.netlify.app/web/
5. Parcurge exemplele de cod din dosarele lecțiilor
6. Realizează temele și provocările
7. Completează chestionarele post-lecție

### Dezvoltare Live

- **Documentație**: Rulează `docsify serve` la rădăcină (port 3000)
- **Quiz App**: Rulează `npm run dev` în directorul quiz-app
- **Proiecte**: Folosește extensia VS Code Live Server pentru proiectele HTML
- **Proiecte API**: Rulează `npm start` în directoarele API respective

## Instrucțiuni de Testare

### Testarea Quiz App

```bash
cd quiz-app
npm run lint       # Verifică problemele legate de stilul codului
npm run build      # Verifică dacă build-ul reușește
```

### Testarea API Bancar

```bash
cd 7-bank-project/api
npm run lint       # Verifica problemele de stil ale codului
node server.js     # Verifică dacă serverul pornește fără erori
```

### Abordare Generală de Testare

- Acesta este un depozit educațional fără teste automate complete
- Testarea manuală se concentrează pe:
  - Executarea corectă a exemplelor de cod fără erori
  - Funcționarea corectă a linkurilor în documentație
  - Finalizarea cu succes a construziunilor proiectelor
  - Urmarea celor mai bune practici în exemple

### Verificări înainte de Trimitere

- Rulează `npm run lint` în directoarele cu package.json
- Verifică validitatea linkurilor markdown
- Testează exemplele de cod în browser sau Node.js
- Verifică că traducerile păstrează structura corectă

## Ghid de Stil pentru Cod

### JavaScript

- Folosește sintaxa modernă ES6+
- Respectă configurațiile standard ESLint oferite în proiecte
- Folosește nume semnificative de variabile și funcții pentru claritate educațională
- Adaugă comentarii care explică conceptele pentru învățăcei
- Formatează cu Prettier unde este configurat

### HTML/CSS

- Elemente semantice HTML5
- Principii de design responsive
- Convenții clare de denumire a claselor
- Comentarii care explică tehnicile CSS pentru învățăcei

### Python

- Respectă ghidurile stil PEP 8
- Exemple clare și educaționale de cod
- Hinturi de tipuri acolo unde sunt utile pentru învățare

### Documentație Markdown

- Ierarhie clară a titlurilor
- Blocuri de cod cu specificarea limbajului
- Linkuri către resurse suplimentare
- Capturi de ecran și imagini în directoarele `images/`
- Text alternativ pentru imagini pentru accesibilitate

### Organizarea Fișierelor

- Lecțiile numerotate secvențial (1-getting-started-lessons, 2-js-basics, etc.)
- Fiecare proiect are directoare `solution/` și adesea `start/` sau `your-work/`
- Imaginile stocate în foldere specifice lecțiilor, `images/`
- Traduceri în structura `translations/{language-code}/`

## Construire și Desfășurare

### Desfășurarea Quiz App (Azure Static Web Apps)

quiz-app este configurat pentru desfășurare în Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creează folderul dist/
# Desfășoară prin fluxul de lucru GitHub Actions la push către main
```

Configurare Azure Static Web Apps:
- **Locația aplicației**: `/quiz-app`
- **Locația outputului**: `dist`
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

### Construiri specifice proiectului

Fiecare director de proiect poate avea propriul proces de construire:
- Proiecte Vue: `npm run build` creează bundle-uri de producție
- Proiecte statice: fără pas de construire, fișiere servite direct

## Ghid pentru Pull Requests

### Formatul Titlului

Folosește titluri clare, descriptive care indică aria modificării:
- `[Quiz-app] Adaugă chestionar nou pentru lecția X`
- `[Lesson-3] Corectează greșeală în proiectul terrarium`
- `[Translation] Adaugă traducerea în spaniolă pentru lecția 5`
- `[Docs] Actualizează instrucțiunile de configurare`

### Verificări Necesare

Înainte de a trimite un PR:

1. **Calitate cod**:
   - Rulează `npm run lint` în directoarele proiectelor afectate
   - Rezolvă toate erorile și avertismentele lint

2. **Verificare construire**:
   - Rulează `npm run build` dacă este cazul
   - Asigură-te că nu apar erori la construire

3. **Validare linkuri**:
   - Testează toate linkurile markdown
   - Verifică referințele imaginii funcționează

4. **Revizuire conținut**:
   - Corectează ortografia și gramatica
   - Asigură integritatea și claritatea educațională a exemplelor
   - Verifică că traducerile păstrează sensul original

### Cerințe de Contribuție

- Acceptă Microsoft CLA (verificare automată la primul PR)
- Respectă [Codul de Conduită Open Source Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Consultă [CONTRIBUTING.md](./CONTRIBUTING.md) pentru ghiduri detaliate
- Referințează numere de issue în descrierea PR-ului dacă este cazul

### Procesul de Revizuire

- PR-urile sunt revizuite de mentori și comunitate
- Se prioritizează claritatea educațională
- Exemplele de cod trebuie să urmeze cele mai bune practici actuale
- Traducerile sunt revizuite pentru acuratețe și adecvare culturală

## Sistemul de Traducere

### Traducere Automată

- Folosește GitHub Actions cu workflow-ul co-op-translator
- Traduce automat în peste 50 de limbi
- Fișiere sursă în directoarele principale
- Fișiere traduse în structura `translations/{language-code}/`

### Adăugarea Îmbunătățirilor Manuale la Traducere

1. Localizează fișierul în `translations/{language-code}/`
2. Fă îmbunătățiri păstrând structura
3. Asigură-te că exemplele de cod rămân funcționale
4. Testează orice conținut localizat de chestionar

### Metadate Traducere

Fișierele traduse includ antet cu metadate:
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
- Verifică versiunea Node.js (recomandat v14+)
- Șterge `node_modules` și `package-lock.json`, rulează din nou `npm install`
- Verifică conflicte de port (implicit: Vite folosește port 5173)

**Server API nu pornește**:
- Asigură versiunea minimă Node.js (node >=10)
- Verifică dacă portul este deja folosit
- Asigură instalarea dependențelor cu `npm install`

**Extensia browser nu se încarcă**:
- Verifică formatul corect al manifest.json
- Verifică consola browser pentru erori
- Urmează instrucțiunile specifice browser-ului pentru instalare extensie

**Probleme proiect chat Python**:
- Asigură pachetul OpenAI instalat: `pip install openai`
- Verifică că variabila de mediu GITHUB_TOKEN este setată
- Verifică permisiunile de acces GitHub Models

**Docsify nu servește documentația**:
- Instalează docsify-cli global: `npm install -g docsify-cli`
- Rulează din directorul rădăcină al depozitului
- Verifică existența fișierului `docs/_sidebar.md`

### Sfaturi pentru Mediu de Dezvoltare

- Folosește VS Code cu extensia Live Server pentru proiectele HTML
- Instalează extensiile ESLint și Prettier pentru formatare constantă
- Folosește DevTools din browser pentru depanare JavaScript
- Pentru proiecte Vue, instalează extensia Vue DevTools pentru browser

### Considerații de Performanță

- Numărul mare de fișiere traduse (peste 50 de limbi) înseamnă că clonările complete sunt mari
- Folosește shallow clone dacă lucrezi doar pe conținut: `git clone --depth 1`
- Exclude traducerile din căutări când lucrezi pe conținut în engleză
- Procesele de construire pot fi lente la prima execuție (npm install, construcție Vite)

## Considerații de Securitate

### Variabile de Mediu

- Cheile API nu trebuie niciodată comise în depozit
- Folosește fișiere `.env` (deja incluse în `.gitignore`)
- Documentează variabilele de mediu necesare în README-urile proiectelor

### Proiecte Python

- Folosește medii virtuale: `python -m venv venv`
- Menține dependențele actualizate
- Tokenii GitHub trebuie să aibă permisiuni minime necesare

### Acces GitHub Models

- Se cer Tokenuri Personale de Acces (PAT) pentru GitHub Models
- Tokenii trebuie stocați ca variabile de mediu
- Nu comite niciodată tokenuri sau credențiale

## Note Suplimentare

### Public Țintă

- Începători compleți în dezvoltare web
- Studenți și autodidacți
- Profesori care folosesc curriculumul în săli de clasă
- Conținut conceput pentru accesibilitate și dezvoltare graduală a abilităților

### Filosofie Educațională

- Abordare bazată pe învățarea prin proiecte
- Verificări frecvente ale cunoștințelor (chestionare)
- Exerciții practice de programare
- Exemple de aplicare în lumea reală
- Accent pe fundamente înainte de framework-uri

### Mentenanța Depozitului

- Comunitate activă de învățăcei și contribuitori
- Actualizări regulate la dependențe și conținut
- Probleme și discuții monitorizate de mentori
- Actualizări traduceri automate prin GitHub Actions

### Resurse Relatate

- [Module Microsoft Learn](https://docs.microsoft.com/learn/)
- [Resurse Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomandat pentru învățăcei
- Cursuri suplimentare: AI Generativ, Data Science, ML, curricula IoT disponibile

### Lucrul cu Proiecte Specifice

Pentru instrucțiuni detaliate despre proiecte individuale, consultă fișierele README în:
- `quiz-app/README.md` - aplicație quiz Vue 3
- `7-bank-project/README.md` - aplicație bancară cu autentificare
- `5-browser-extension/README.md` - dezvoltare extensie browser
- `6-space-game/README.md` - dezvoltare joc pe canvas
- `9-chat-project/README.md` - proiect asistent AI chat

### Structura Monorepo

Deși nu este un monorepo tradițional, acest depozit conține mai multe proiecte independente:
- Fiecare lecție este autonomă
- Proiectele nu împart dependențe
- Lucrează pe proiecte individuale fără a afecta altele
- Clonează întregul depozit pentru experiența completă a curriculumului

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Declinare de responsabilitate**:
Acest document a fost tradus folosind serviciul de traducere automată [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim pentru acuratețe, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa nativă trebuie considerat sursa autorizată. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventuale neînțelegeri sau interpretări greșite rezultate din utilizarea acestei traduceri.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->