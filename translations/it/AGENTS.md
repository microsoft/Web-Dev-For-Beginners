# AGENTS.md

## Panoramica del Progetto

Questo è un repository per un curriculum educativo per insegnare le basi dello sviluppo web ai principianti. Il curriculum è un corso completo di 12 settimane sviluppato dai Microsoft Cloud Advocates, con 24 lezioni pratiche che coprono JavaScript, CSS e HTML.

### Componenti Chiave

- **Contenuto Educativo**: 24 lezioni strutturate organizzate in moduli basati su progetti
- **Progetti Pratici**: Terrarium, Gioco di Digitazione, Estensione per Browser, Gioco Spaziale, App Bancaria, Editor di Codice e Assistente Chat AI
- **Quiz Interattivi**: 48 quiz con 3 domande ciascuno (valutazioni pre/post lezione)
- **Supporto Multilingue**: Traduzioni automatizzate per più di 50 lingue tramite GitHub Actions
- **Tecnologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (per progetti AI)

### Architettura

- Repository educativo con struttura basata sulle lezioni
- Ogni cartella lezione contiene README, esempi di codice e soluzioni
- Progetti autonomi in directory separate (quiz-app, vari progetti di lezione)
- Sistema di traduzione tramite GitHub Actions (co-op-translator)
- Documentazione servita tramite Docsify e disponibile in PDF

## Comandi di Configurazione

Questo repository è principalmente per il consumo di contenuti educativi. Per lavorare con progetti specifici:

### Configurazione Principale del Repository

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Configurazione Quiz App (Vue 3 + Vite)

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

### Per i Collaboratori dei Contenuti

1. **Fork del repository** nel tuo account GitHub
2. **Clona il tuo fork** in locale
3. **Crea un nuovo branch** per le tue modifiche
4. Modifica contenuti delle lezioni o esempi di codice
5. Testa eventuali modifiche al codice nelle directory di progetto rilevanti
6. Invia pull request seguendo le linee guida di contributo

### Per gli Studenti

1. Fai fork o clona il repository
2. Naviga nelle cartelle delle lezioni in ordine
3. Leggi i file README di ogni lezione
4. Completa i quiz pre-lezione su https://ff-quizzes.netlify.app/web/
5. Lavora sugli esempi di codice nelle cartelle delle lezioni
6. Completa compiti e sfide
7. Sostieni i quiz post-lezione

### Sviluppo in Diretta

- **Documentazione**: esegui `docsify serve` nella root (porta 3000)
- **Quiz App**: esegui `npm run dev` nella directory quiz-app
- **Progetti**: usa l’estensione Live Server di VS Code per i progetti HTML
- **Progetti API**: esegui `npm start` nelle directory API corrispondenti

## Istruzioni per il Test

### Test Quiz App

```bash
cd quiz-app
npm run lint       # Controlla problemi di stile del codice
npm run build      # Verifica che la compilazione abbia successo
```

### Test API Bancaria

```bash
cd 7-bank-project/api
npm run lint       # Controlla problemi di stile del codice
node server.js     # Verifica che il server si avvii senza errori
```

### Approccio Generale ai Test

- Questo è un repository educativo senza test automatizzati completi
- I test manuali si concentrano su:
  - Esecuzione senza errori degli esempi di codice
  - Funzionamento corretto dei link nella documentazione
  - Build dei progetti completati con successo
  - Gli esempi seguono le migliori pratiche

### Controlli Pre-Consegna

- Esegui `npm run lint` nelle directory con package.json
- Verifica che i link markdown siano validi
- Testa esempi di codice in browser o Node.js
- Controlla che le traduzioni mantengano la struttura corretta

## Linee Guida di Stile del Codice

### JavaScript

- Usa sintassi moderna ES6+
- Segui le configurazioni ESLint standard fornite nei progetti
- Usa nomi di variabili e funzioni significativi per chiarezza educativa
- Aggiungi commenti che spiegano i concetti agli studenti
- Format con Prettier dove configurato

### HTML/CSS

- Elementi HTML5 semantici
- Principi di design responsive
- Convenzioni chiare per nomi delle classi
- Commenti che spiegano tecniche CSS per studenti

### Python

- Linee guida di stile PEP 8
- Esempi di codice chiari e didattici
- Hint tipi dove utile per l’apprendimento

### Documentazione Markdown

- Gerarchia chiara delle intestazioni
- Blocchi di codice con specifica di linguaggio
- Link a risorse aggiuntive
- Screenshot e immagini nelle cartelle `images/`
- Testo alternativo per immagini per accessibilità

### Organizzazione dei File

- Lezioni numerate sequenzialmente (1-getting-started-lessons, 2-js-basics, ecc.)
- Ogni progetto ha directory `solution/` e spesso `start/` o `your-work/`
- Immagini archiviate in cartelle `images/` specifiche per lezione
- Traduzioni nella struttura `translations/{language-code}/`

## Build e Distribuzione

### Distribuzione Quiz App (Azure Static Web Apps)

La quiz-app è configurata per la distribuzione su Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Crea la cartella dist/
# Esegue il deployment tramite workflow GitHub Actions al push su main
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
docsify serve                 # Serve su localhost:3000
```

### Build Specifici per Progetto

Ogni directory progetto può avere un proprio processo di build:
- Progetti Vue: `npm run build` crea bundle di produzione
- Progetti statici: Nessun passaggio di build, servire i file direttamente

## Linee Guida per le Pull Request

### Formato del Titolo

Usa titoli chiari e descrittivi che indicano l’area di modifica:
- `[Quiz-app] Aggiungi nuovo quiz per lezione X`
- `[Lesson-3] Correggi errore di battitura nel progetto terrarium`
- `[Translation] Aggiungi traduzione spagnola per lezione 5`
- `[Docs] Aggiorna istruzioni di configurazione`

### Controlli Richiesti

Prima di inviare una PR:

1. **Qualità del Codice**:
   - Esegui `npm run lint` nelle directory di progetto interessate
   - Risolvi tutti gli errori e avvisi di linting

2. **Verifica Build**:
   - Esegui `npm run build` se applicabile
   - Assicurati che non ci siano errori di build

3. **Validazione Link**:
   - Testa tutti i link markdown
   - Verifica che i riferimenti alle immagini funzionino

4. **Revisione Contenuto**:
   - Controlla ortografia e grammatica
   - Assicurati che gli esempi di codice siano corretti e didattici
   - Verifica che le traduzioni mantengano il significato originale

### Requisiti per il Contributo

- Accetta il CLA Microsoft (controllo automatico alla prima PR)
- Segui il [Codice di Condotta Open Source Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Consulta [CONTRIBUTING.md](./CONTRIBUTING.md) per linee guida dettagliate
- Riferisci i numeri degli issue nella descrizione della PR se applicabile

### Processo di Revisione

- Le PR sono revisionate da manutentori e comunità
- Priorità alla chiarezza educativa
- Gli esempi di codice devono seguire le migliori pratiche correnti
- Le traduzioni sono revisionate per accuratezza e adeguatezza culturale

## Sistema di Traduzione

### Traduzione Automatica

- Usa GitHub Actions con workflow co-op-translator
- Traduce automaticamente in oltre 50 lingue
- File sorgente nelle directory principali
- File tradotti nelle directory `translations/{language-code}/`

### Aggiunta di Miglioramenti Manuali alla Traduzione

1. Trova il file in `translations/{language-code}/`
2. Effettua miglioramenti mantenendo la struttura
3. Assicurati che gli esempi di codice rimangano funzionanti
4. Testa eventuale contenuto quiz localizzato

### Metadati della Traduzione

I file tradotti includono header metadati:
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

**Quiz app non si avvia**:
- Controlla versione Node.js (consigliato v14+)
- Elimina `node_modules` e `package-lock.json`, esegui di nuovo `npm install`
- Controlla conflitti di porta (default: Vite usa porta 5173)

**Server API non si avvia**:
- Verifica versione minima Node.js (node >=10)
- Controlla se la porta è già in uso
- Assicurati che tutte le dipendenze siano installate con `npm install`

**Estensione browser non si carica**:
- Controlla che manifest.json sia formattato correttamente
- Controlla la console del browser per errori
- Segui istruzioni specifiche per installazione estensioni browser

**Problemi progetto chat Python**:
- Assicurati che il pacchetto OpenAI sia installato: `pip install openai`
- Verifica che la variabile ambiente GITHUB_TOKEN sia impostata
- Controlla permessi di accesso GitHub Models

**Docsify non serve la documentazione**:
- Installa docsify-cli globalmente: `npm install -g docsify-cli`
- Esegui dalla directory root del repository
- Controlla che `docs/_sidebar.md` esista

### Consigli per l’Ambiente di Sviluppo

- Usa VS Code con estensione Live Server per progetti HTML
- Installa estensioni ESLint e Prettier per formattazione coerente
- Usa DevTools del browser per il debug JavaScript
- Per progetti Vue, installa estensione browser Vue DevTools

### Considerazioni sulle Prestazioni

- Il gran numero di file tradotti (oltre 50 lingue) rende i clone completi grandi
- Usa clone superficiale se lavori solo sui contenuti: `git clone --depth 1`
- Escludi traduzioni dalle ricerche quando lavori sui contenuti in inglese
- I processi di build possono essere lenti alla prima esecuzione (npm install, build Vite)

## Considerazioni sulla Sicurezza

### Variabili d’Ambiente

- Le chiavi API non devono mai essere committate nel repository
- Usa file `.env` (già in `.gitignore`)
- Documenta le variabili ambiente richieste nei README dei progetti

### Progetti Python

- Usa ambienti virtuali: `python -m venv venv`
- Mantieni aggiornate le dipendenze
- I token GitHub devono avere permessi minimi necessari

### Accesso ai Modelli GitHub

- Sono necessari Personal Access Tokens (PAT) per i Modelli GitHub
- I token devono essere conservati come variabili ambiente
- Non committare mai token o credenziali

## Note Aggiuntive

### Pubblico Target

- Principianti completi nello sviluppo web
- Studenti e autodidatti
- Insegnanti che utilizzano il curriculum in classe
- Contenuti progettati per accessibilità e crescita graduale delle competenze

### Filosofia Educativa

- Approccio basato su apprendimento tramite progetto
- Controlli di conoscenza frequenti (quiz)
- Esercizi pratici di programmazione
- Esempi di applicazione reali
- Focus sulle fondamenta prima dei framework

### Manutenzione del Repository

- Comunità attiva di studenti e collaboratori
- Aggiornamenti regolari di dipendenze e contenuti
- Monitoraggio di issue e discussioni da parte dei manutentori
- Aggiornamenti traduzioni automatizzati tramite GitHub Actions

### Risorse Correlate

- [Moduli Microsoft Learn](https://docs.microsoft.com/learn/)
- [Risorse Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) consigliato per studenti
- Corsi aggiuntivi: AI generativa, Data Science, ML, curricula IoT disponibili

### Lavorare con Progetti Specifici

Per istruzioni dettagliate sui progetti singoli, consulta i file README in:
- `quiz-app/README.md` - Applicazione quiz Vue 3
- `7-bank-project/README.md` - Applicazione bancaria con autenticazione
- `5-browser-extension/README.md` - Sviluppo estensione per browser
- `6-space-game/README.md` - Sviluppo gioco basato su Canvas
- `9-chat-project/README.md` - Progetto assistente chat AI

### Struttura Monorepo

Pur non essendo un monorepo tradizionale, questo repository contiene più progetti indipendenti:
- Ogni lezione è autonoma
- I progetti non condividono dipendenze
- Lavora su singoli progetti senza influire sugli altri
- Clona l'intero repository per l’esperienza completa del curriculum

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Pur impegnandoci per l’accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o inesattezze. Il documento originale nella sua lingua nativa deve essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un esperto umano. Non siamo responsabili per eventuali malintesi o interpretazioni errate derivanti dall’uso di questa traduzione.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->