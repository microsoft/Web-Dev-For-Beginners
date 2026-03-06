# AGENTS.md

## Panoramica del Progetto

Questo è un repository di curriculum educativo per insegnare i fondamenti dello sviluppo web ai principianti. Il curriculum è un corso completo di 12 settimane sviluppato dai Microsoft Cloud Advocates, che propone 24 lezioni pratiche su JavaScript, CSS e HTML.

### Componenti Chiave

- **Contenuti Educativi**: 24 lezioni strutturate organizzate in moduli basati su progetti
- **Progetti Pratici**: Terrario, Gioco di Digitazione, Estensione Browser, Gioco Spaziale, App Bancaria, Editor di Codice e Assistente Chat AI
- **Quiz Interattivi**: 48 quiz con 3 domande ciascuno (valutazioni pre/post lezione)
- **Supporto Multilingue**: Traduzioni automatizzate per più di 50 lingue tramite GitHub Actions
- **Tecnologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (per progetti AI)

### Architettura

- Repository educativo con struttura basata sulle lezioni
- Ogni cartella lezione contiene README, esempi di codice e soluzioni
- Progetti autonomi in directory separate (quiz-app, vari progetti delle lezioni)
- Sistema di traduzione che usa GitHub Actions (co-op-translator)
- Documentazione servita tramite Docsify e disponibile in PDF

## Comandi di Setup

Questo repository è principalmente per fruizione di contenuti educativi. Per lavorare con progetti specifici:

### Setup Principale del Repository

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Setup Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Avvia il server di sviluppo
npm run build      # Compila per la produzione
npm run lint       # Esegui ESLint
```

### API Progetto Bancario (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Avvia il server API
npm run lint       # Esegui ESLint
npm run format     # Format con Prettier
```

### Progetti Estensione Browser

```bash
cd 5-browser-extension/solution
npm install
# Seguire le istruzioni specifiche del browser per il caricamento delle estensioni
```

### Progetti Gioco Spaziale

```bash
cd 6-space-game/solution
npm install
# Apri index.html nel browser o usa Live Server
```

### Progetto Chat (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Imposta la variabile d'ambiente GITHUB_TOKEN
python api.py
```

## Flusso di Lavoro per lo Sviluppo

### Per i Contributori di Contenuti

1. **Forka il repository** sul tuo account GitHub
2. **Clona il tuo fork** localmente
3. **Crea un nuovo branch** per le tue modifiche
4. Apporta modifiche ai contenuti delle lezioni o agli esempi di codice
5. Testa eventuali modifiche al codice nelle directory di progetto rilevanti
6. Invia pull request seguendo le linee guida per i contributi

### Per gli Studenti

1. Fork o clona il repository
2. Naviga le directory delle lezioni in sequenza
3. Leggi i file README di ogni lezione
4. Completa i quiz pre-lezione su https://ff-quizzes.netlify.app/web/
5. Lavora sugli esempi di codice nelle cartelle delle lezioni
6. Completa compiti e sfide
7. Fai i quiz post-lezione

### Sviluppo Live

- **Documentazione**: Esegui `docsify serve` nella root (porta 3000)
- **Quiz App**: Esegui `npm run dev` nella directory quiz-app
- **Progetti**: Usa l’estensione Live Server di VS Code per i progetti HTML
- **Progetti API**: Esegui `npm start` nelle directory API corrispondenti

## Istruzioni per il Testing

### Testing Quiz App

```bash
cd quiz-app
npm run lint       # Controlla problemi di stile del codice
npm run build      # Verifica che la compilazione abbia successo
```

### Testing API Bancaria

```bash
cd 7-bank-project/api
npm run lint       # Controlla problemi di stile del codice
node server.js     # Verifica che il server si avvii senza errori
```

### Approccio Generale al Testing

- Questo è un repository educativo senza test automatici completi
- Il testing manuale è focalizzato su:
  - Esecuzione senza errori degli esempi di codice
  - Funzionalità corretta dei link nella documentazione
  - Completamento di build dei progetti senza errori
  - Applicazione delle best practice negli esempi

### Controlli Prima dell’Invio

- Esegui `npm run lint` nelle directory con package.json
- Verifica che i link markdown siano validi
- Testa gli esempi di codice nel browser o in Node.js
- Controlla che le traduzioni mantengano una struttura corretta

## Linee Guida per lo Stile del Codice

### JavaScript

- Usa sintassi moderna ES6+
- Segui le configurazioni standard ESLint fornite nei progetti
- Usa nomi significativi di variabili e funzioni per chiarezza educativa
- Aggiungi commenti che spiegano i concetti agli studenti
- Formatta con Prettier dove è configurato

### HTML/CSS

- Elementi semantici HTML5
- Principi di design responsivo
- Convenzioni chiare per nomi delle classi
- Commenti che spiegano tecniche CSS per studenti

### Python

- Linee guida di stile PEP 8
- Codice chiaro ed educativo
- Suggerimenti di tipo dove utili per l’apprendimento

### Documentazione Markdown

- Gerarchia chiara dei titoli
- Blocchi di codice con specifica del linguaggio
- Link a risorse aggiuntive
- Screenshot e immagini nelle cartelle `images/`
- Testo alternativo per le immagini per accessibilità

### Organizzazione dei File

- Lezioni numerate sequenzialmente (1-getting-started-lessons, 2-js-basics, ecc.)
- Ogni progetto ha directory `solution/` e spesso `start/` o `your-work/`
- Immagini archiviate nelle cartelle `images/` specifiche per le lezioni
- Traduzioni nella struttura `translations/{language-code}/`

## Costruzione e Distribuzione

### Distribuzione Quiz App (Azure Static Web Apps)

La quiz-app è configurata per la distribuzione su Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Crea la cartella dist/
# Esegue il deploy tramite workflow GitHub Actions al push su main
```

Configurazione Azure Static Web Apps:
- **Posizione app**: `/quiz-app`
- **Posizione output**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generazione PDF Documentazione

```bash
npm install                    # Installa docsify-to-pdf
npm run convert               # Genera PDF da docs
```

### Documentazione Docsify

```bash
npm install -g docsify-cli    # Installa Docsify globalmente
docsify serve                 # Servi su localhost:3000
```

### Build specifici per progetto

Ogni directory di progetto può avere il proprio processo di build:
- Progetti Vue: `npm run build` crea bundle di produzione
- Progetti statici: nessun passaggio di build, i file sono serviti direttamente

## Linee Guida per le Pull Request

### Formato del Titolo

Usa titoli chiari e descrittivi che indicano l’area di modifica:
- `[Quiz-app] Aggiungi nuovo quiz per la lezione X`
- `[Lesson-3] Correggi errore di battitura nel progetto terrarium`
- `[Translation] Aggiungi traduzione spagnola per la lezione 5`
- `[Docs] Aggiorna istruzioni di setup`

### Controlli Richiesti

Prima di inviare una PR:

1. **Qualità del Codice**:
   - Esegui `npm run lint` nelle directory di progetto coinvolte
   - Risolvi tutti gli errori e avvisi di linting

2. **Verifica Build**:
   - Esegui `npm run build` se applicabile
   - Assicurati che non ci siano errori di build

3. **Validazione Link**:
   - Testa tutti i link markdown
   - Verifica riferimenti alle immagini

4. **Revisione Contenuto**:
   - Controlla ortografia e grammatica
   - Verifica che esempi di codice siano corretti ed educativi
   - Controlla che le traduzioni mantengano il significato originale

### Requisiti per il Contributo

- Accetta il Microsoft CLA (controllo automatico alla prima PR)
- Segui il [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Consulta [CONTRIBUTING.md](./CONTRIBUTING.md) per linee guida dettagliate
- Inserisci numeri issue nella descrizione della PR se applicabile

### Processo di Revisione

- Le PR sono revisionate da manutentori e dalla community
- Priorità alla chiarezza educativa
- Gli esempi di codice devono seguire le best practice correnti
- Le traduzioni sono revisionate per accuratezza e adeguatezza culturale

## Sistema di Traduzione

### Traduzione Automatizzata

- Usa GitHub Actions con workflow co-op-translator
- Traduce automaticamente in oltre 50 lingue
- File sorgente nelle directory principali
- File tradotti nelle directory `translations/{language-code}/`

### Aggiunta di Miglioramenti Manuali

1. Trova il file in `translations/{language-code}/`
2. Apporta miglioramenti preservando la struttura
3. Assicurati che gli esempi di codice restino funzionanti
4. Testa eventuali contenuti di quiz localizzati

### Metadati della Traduzione

I file tradotti includono header di metadati:
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

## Debug e Risoluzione Problemi

### Problemi Comuni

**La quiz app non si avvia**:
- Controlla la versione di Node.js (consigliata v14+)
- Cancella `node_modules` e `package-lock.json`, esegui di nuovo `npm install`
- Controlla conflitti di porta (default: Vite usa porta 5173)

**Il server API non parte**:
- Verifica che la versione di Node.js sia almeno node >=10
- Controlla se la porta è già occupata
- Assicurati che tutte le dipendenze siano installate con `npm install`

**L’estensione browser non si carica**:
- Verifica che manifest.json sia formattato correttamente
- Controlla la console del browser per errori
- Segui le istruzioni specifiche del browser per l’installazione dell’estensione

**Problemi con progetto chat Python**:
- Assicurati che il pacchetto OpenAI sia installato: `pip install openai`
- Verifica che la variabile ambiente GITHUB_TOKEN sia impostata
- Controlla i permessi di accesso ai modelli GitHub

**Docsify non serve la documentazione**:
- Installa docsify-cli globalmente: `npm install -g docsify-cli`
- Esegui dalla directory root del repository
- Controlla che `docs/_sidebar.md` esista

### Consigli per l’Ambiente di Sviluppo

- Usa VS Code con l’estensione Live Server per progetti HTML
- Installa le estensioni ESLint e Prettier per formattazione coerente
- Usa DevTools del browser per il debug di JavaScript
- Per progetti Vue, installa l’estensione browser Vue DevTools

### Considerazioni sulle Prestazioni

- L’elevato numero di file tradotti (oltre 50 lingue) rende le clonazioni complete pesanti
- Usa un clone superficiale se lavori solo sui contenuti: `git clone --depth 1`
- Escludi le traduzioni dalle ricerche quando lavori su contenuti in inglese
- I processi di build possono essere lenti al primo avvio (npm install, build Vite)

## Considerazioni sulla Sicurezza

### Variabili d’Ambiente

- Le chiavi API non devono mai essere inserite nel repository
- Usa file `.env` (già inclusi in `.gitignore`)
- Documenta le variabili d’ambiente richieste nei README di progetto

### Progetti Python

- Usa ambienti virtuali: `python -m venv venv`
- Mantieni aggiornate le dipendenze
- I token GitHub devono avere i permessi minimi necessari

### Accesso ai Modelli GitHub

- Sono richiesti Personal Access Token (PAT) per i modelli GitHub
- I token devono essere memorizzati come variabili d’ambiente
- Mai committare token o credenziali

## Note Aggiuntive

### Pubblico Target

- Principianti completi nello sviluppo web
- Studenti e autodidatti
- Insegnanti che usano il curriculum in aula
- I contenuti sono progettati per accessibilità e apprendimento graduale

### Filosofia Educativa

- Approccio basato su progetti
- Controlli frequenti della conoscenza (quiz)
- Esercizi pratici di coding
- Esempi di applicazioni reali
- Attenzione ai fondamenti prima dei framework

### Manutenzione del Repository

- Community attiva di apprendenti e contributori
- Aggiornamenti regolari di dipendenze e contenuti
- Monitoraggio di issue e discussioni da parte dei manutentori
- Aggiornamenti di traduzione automatizzati via GitHub Actions

### Risorse Correlate

- [Moduli Microsoft Learn](https://docs.microsoft.com/learn/)
- [Risorse Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) consigliato per studenti
- Corsi aggiuntivi: curricula Generative AI, Data Science, ML, IoT disponibili

### Lavorare con Progetti Specifici

Per istruzioni dettagliate sui singoli progetti, consulta i file README in:
- `quiz-app/README.md` - Applicazione quiz Vue 3
- `7-bank-project/README.md` - Applicazione bancaria con autenticazione
- `5-browser-extension/README.md` - Sviluppo estensione browser
- `6-space-game/README.md` - Sviluppo gioco canvas
- `9-chat-project/README.md` - Progetto assistente chat AI

### Struttura Monorepo

Sebbene non sia un monorepo tradizionale, questo repository contiene più progetti indipendenti:
- Ogni lezione è autonoma
- I progetti non condividono dipendenze
- Lavora su singoli progetti senza influenzare gli altri
- Clona l’intero repo per l’esperienza completa del curriculum

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Pur impegnandoci per garantire accuratezza, si prega di notare che le traduzioni automatizzate possono contenere errori o imprecisioni. Il documento originale nella sua lingua originale deve essere considerato la fonte autorevole. Per informazioni critiche si raccomanda una traduzione professionale effettuata da un essere umano. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall’uso di questa traduzione.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->