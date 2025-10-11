<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a362efd06d64d4134a0cfe8515a86d34",
  "translation_date": "2025-10-03T11:25:36+00:00",
  "source_file": "AGENTS.md",
  "language_code": "it"
}
-->
# AGENTS.md

## Panoramica del Progetto

Questo è un repository di curriculum educativo per insegnare i fondamenti dello sviluppo web ai principianti. Il curriculum è un corso completo di 12 settimane sviluppato dai Microsoft Cloud Advocates, con 24 lezioni pratiche che coprono JavaScript, CSS e HTML.

### Componenti Principali

- **Contenuti Educativi**: 24 lezioni strutturate organizzate in moduli basati su progetti
- **Progetti Pratici**: Terrarium, Gioco di Scrittura, Estensione per Browser, Gioco Spaziale, App Bancaria, Editor di Codice e Assistente Chat AI
- **Quiz Interattivi**: 48 quiz con 3 domande ciascuno (valutazioni pre/post lezione)
- **Supporto Multilingue**: Traduzioni automatiche in oltre 50 lingue tramite GitHub Actions
- **Tecnologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (per progetti AI)

### Architettura

- Repository educativo con struttura basata su lezioni
- Ogni cartella di lezione contiene README, esempi di codice e soluzioni
- Progetti indipendenti in directory separate (quiz-app, vari progetti delle lezioni)
- Sistema di traduzione tramite GitHub Actions (co-op-translator)
- Documentazione servita tramite Docsify e disponibile in formato PDF

## Comandi di Configurazione

Questo repository è principalmente destinato al consumo di contenuti educativi. Per lavorare con progetti specifici:

### Configurazione del Repository Principale

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Configurazione dell'App Quiz (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### API del Progetto Bancario (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Progetti di Estensione per Browser

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Progetti del Gioco Spaziale

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Progetto Chat (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Flusso di Lavoro per lo Sviluppo

### Per i Contributori di Contenuti

1. **Fork del repository** sul tuo account GitHub
2. **Clona il tuo fork** localmente
3. **Crea un nuovo branch** per le tue modifiche
4. Apporta modifiche ai contenuti delle lezioni o agli esempi di codice
5. Testa le modifiche al codice nelle directory dei progetti pertinenti
6. Invia pull request seguendo le linee guida per i contributi

### Per gli Studenti

1. Fai il fork o clona il repository
2. Naviga nelle directory delle lezioni in ordine sequenziale
3. Leggi i file README di ogni lezione
4. Completa i quiz pre-lezione su https://ff-quizzes.netlify.app/web/
5. Lavora sugli esempi di codice nelle cartelle delle lezioni
6. Completa gli esercizi e le sfide
7. Fai i quiz post-lezione

### Sviluppo Live

- **Documentazione**: Esegui `docsify serve` nella root (porta 3000)
- **App Quiz**: Esegui `npm run dev` nella directory quiz-app
- **Progetti**: Usa l'estensione Live Server di VS Code per progetti HTML
- **Progetti API**: Esegui `npm start` nelle directory API pertinenti

## Istruzioni per il Testing

### Testing dell'App Quiz

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Testing dell'API Bancaria

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Approccio Generale al Testing

- Questo è un repository educativo senza test automatizzati completi
- Il testing manuale si concentra su:
  - Esecuzione degli esempi di codice senza errori
  - Funzionamento corretto dei link nella documentazione
  - Completamento con successo delle build dei progetti
  - Conformità degli esempi alle migliori pratiche

### Controlli Pre-invio

- Esegui `npm run lint` nelle directory con package.json
- Verifica che i link markdown siano validi
- Testa gli esempi di codice nel browser o in Node.js
- Controlla che le traduzioni mantengano la struttura corretta

## Linee Guida per lo Stile del Codice

### JavaScript

- Usa sintassi moderna ES6+
- Segui le configurazioni standard di ESLint fornite nei progetti
- Usa nomi di variabili e funzioni significativi per chiarezza educativa
- Aggiungi commenti che spiegano i concetti agli studenti
- Formatta usando Prettier dove configurato

### HTML/CSS

- Elementi semantici HTML5
- Principi di design responsive
- Convenzioni chiare per la denominazione delle classi
- Commenti che spiegano le tecniche CSS agli studenti

### Python

- Linee guida di stile PEP 8
- Esempi di codice chiari ed educativi
- Suggerimenti di tipo dove utili per l'apprendimento

### Documentazione Markdown

- Gerarchia chiara dei titoli
- Blocchi di codice con specifica del linguaggio
- Link a risorse aggiuntive
- Screenshot e immagini nelle directory `images/`
- Testo alternativo per immagini per l'accessibilità

### Organizzazione dei File

- Lezioni numerate in ordine sequenziale (1-getting-started-lessons, 2-js-basics, ecc.)
- Ogni progetto ha directory `solution/` e spesso `start/` o `your-work/`
- Immagini archiviate nelle cartelle `images/` specifiche per le lezioni
- Traduzioni nella struttura `translations/{language-code}/`

## Build e Deployment

### Deployment dell'App Quiz (Azure Static Web Apps)

L'app quiz è configurata per il deployment su Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Configurazione di Azure Static Web Apps:
- **Posizione dell'app**: `/quiz-app`
- **Posizione dell'output**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generazione del PDF della Documentazione

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Documentazione Docsify

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Build Specifiche per i Progetti

Ogni directory di progetto può avere il proprio processo di build:
- Progetti Vue: `npm run build` crea bundle di produzione
- Progetti statici: Nessun passaggio di build, servire direttamente i file

## Linee Guida per le Pull Request

### Formato del Titolo

Usa titoli chiari e descrittivi che indicano l'area di modifica:
- `[Quiz-app] Aggiungi nuovo quiz per la lezione X`
- `[Lesson-3] Correggi errore di battitura nel progetto terrarium`
- `[Translation] Aggiungi traduzione in spagnolo per la lezione 5`
- `[Docs] Aggiorna istruzioni di configurazione`

### Controlli Richiesti

Prima di inviare una PR:

1. **Qualità del Codice**:
   - Esegui `npm run lint` nelle directory dei progetti interessati
   - Correggi tutti gli errori e avvisi di linting

2. **Verifica della Build**:
   - Esegui `npm run build` se applicabile
   - Assicurati che non ci siano errori di build

3. **Validazione dei Link**:
   - Testa tutti i link markdown
   - Verifica che i riferimenti alle immagini funzionino

4. **Revisione dei Contenuti**:
   - Controlla ortografia e grammatica
   - Assicurati che gli esempi di codice siano corretti ed educativi
   - Verifica che le traduzioni mantengano il significato originale

### Requisiti per i Contributi

- Accetta il Microsoft CLA (controllo automatico alla prima PR)
- Segui il [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Consulta [CONTRIBUTING.md](./CONTRIBUTING.md) per linee guida dettagliate
- Riferisci i numeri delle issue nella descrizione della PR, se applicabile

### Processo di Revisione

- Le PR vengono revisionate dai manutentori e dalla comunità
- La chiarezza educativa è prioritaria
- Gli esempi di codice devono seguire le migliori pratiche attuali
- Le traduzioni vengono revisionate per accuratezza e adeguatezza culturale

## Sistema di Traduzione

### Traduzione Automatica

- Utilizza GitHub Actions con il workflow co-op-translator
- Traduce automaticamente in oltre 50 lingue
- File sorgente nelle directory principali
- File tradotti nella struttura `translations/{language-code}/`

### Aggiunta di Miglioramenti Manuali alle Traduzioni

1. Trova il file in `translations/{language-code}/`
2. Apporta miglioramenti preservando la struttura
3. Assicurati che gli esempi di codice rimangano funzionali
4. Testa eventuali contenuti localizzati dei quiz

### Metadata delle Traduzioni

I file tradotti includono un'intestazione di metadata:
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

## Debugging e Risoluzione dei Problemi

### Problemi Comuni

**L'app quiz non si avvia**:
- Controlla la versione di Node.js (v14+ raccomandata)
- Elimina `node_modules` e `package-lock.json`, esegui di nuovo `npm install`
- Controlla conflitti di porta (default: Vite usa la porta 5173)

**Il server API non si avvia**:
- Verifica che la versione di Node.js soddisfi il minimo (node >=10)
- Controlla se la porta è già in uso
- Assicurati che tutte le dipendenze siano installate con `npm install`

**L'estensione per browser non si carica**:
- Verifica che manifest.json sia formattato correttamente
- Controlla la console del browser per errori
- Segui le istruzioni specifiche del browser per l'installazione dell'estensione

**Problemi con il progetto chat Python**:
- Assicurati che il pacchetto OpenAI sia installato: `pip install openai`
- Verifica che la variabile di ambiente GITHUB_TOKEN sia impostata
- Controlla i permessi di accesso ai modelli GitHub

**Docsify non serve i documenti**:
- Installa docsify-cli globalmente: `npm install -g docsify-cli`
- Esegui dalla directory root del repository
- Controlla che `docs/_sidebar.md` esista

### Consigli per l'Ambiente di Sviluppo

- Usa VS Code con l'estensione Live Server per progetti HTML
- Installa le estensioni ESLint e Prettier per formattazione coerente
- Usa gli strumenti di sviluppo del browser per il debugging JavaScript
- Per progetti Vue, installa l'estensione Vue DevTools per il browser

### Considerazioni sulle Prestazioni

- Il gran numero di file tradotti (oltre 50 lingue) rende i cloni completi molto grandi
- Usa il clone superficiale se lavori solo sui contenuti: `git clone --depth 1`
- Escludi le traduzioni dalle ricerche quando lavori sui contenuti in inglese
- I processi di build possono essere lenti al primo avvio (npm install, build Vite)

## Considerazioni sulla Sicurezza

### Variabili di Ambiente

- Le chiavi API non devono mai essere commesse nel repository
- Usa file `.env` (già in `.gitignore`)
- Documenta le variabili di ambiente richieste nei README dei progetti

### Progetti Python

- Usa ambienti virtuali: `python -m venv venv`
- Mantieni aggiornate le dipendenze
- I token GitHub devono avere i permessi minimi richiesti

### Accesso ai Modelli GitHub

- Sono richiesti Personal Access Tokens (PAT) per i modelli GitHub
- I token devono essere archiviati come variabili di ambiente
- Non commettere mai token o credenziali

## Note Aggiuntive

### Pubblico Target

- Principianti assoluti nello sviluppo web
- Studenti e autodidatti
- Insegnanti che utilizzano il curriculum in aula
- I contenuti sono progettati per l'accessibilità e la costruzione graduale delle competenze

### Filosofia Educativa

- Approccio basato su progetti
- Verifiche frequenti delle conoscenze (quiz)
- Esercizi di codifica pratici
- Esempi di applicazioni reali
- Focus sui fondamenti prima dei framework

### Manutenzione del Repository

- Comunità attiva di studenti e contributori
- Aggiornamenti regolari alle dipendenze e ai contenuti
- Issue e discussioni monitorate dai manutentori
- Aggiornamenti delle traduzioni automatizzati tramite GitHub Actions

### Risorse Correlate

- [Moduli Microsoft Learn](https://docs.microsoft.com/learn/)
- [Risorse Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) raccomandato per gli studenti
- Corsi aggiuntivi: Generative AI, Data Science, ML, curricula IoT disponibili

### Lavorare con Progetti Specifici

Per istruzioni dettagliate sui singoli progetti, consulta i file README in:
- `quiz-app/README.md` - Applicazione quiz Vue 3
- `7-bank-project/README.md` - Applicazione bancaria con autenticazione
- `5-browser-extension/README.md` - Sviluppo di estensioni per browser
- `6-space-game/README.md` - Sviluppo di giochi basati su Canvas
- `9-chat-project/README.md` - Progetto assistente chat AI

### Struttura Monorepo

Sebbene non sia un monorepo tradizionale, questo repository contiene più progetti indipendenti:
- Ogni lezione è autonoma
- I progetti non condividono dipendenze
- Lavora su progetti individuali senza influenzare gli altri
- Clona l'intero repository per l'esperienza completa del curriculum

---

**Disclaimer (Avvertenza)**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua madre dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si consiglia una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.