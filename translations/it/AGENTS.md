# AGENTS.md

## Panoramica del Progetto

Questo è un repository curriculare educativo per insegnare le basi dello sviluppo web ai principianti. Il curriculum è un corso completo di 12 settimane sviluppato dai Microsoft Cloud Advocates, con 24 lezioni pratiche che coprono JavaScript, CSS e HTML.

### Componenti Chiave

- **Contenuti Educativi**: 24 lezioni strutturate organizzate in moduli basati su progetti
- **Progetti Pratici**: Terrarium, Gioco di Digitazione, Estensione Browser, Gioco Spaziale, App Bancaria, Editor di Codice e Assistente Chat AI
- **Quiz Interattivi**: 48 quiz con 3 domande ciascuno (valutazioni pre/post lezione)
- **Supporto Multilingue**: Traduzioni automatizzate in oltre 50 lingue tramite GitHub Actions
- **Tecnologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (per progetti AI)

### Architettura

- Repository educativo con struttura basata sulle lezioni
- Ogni cartella lezione contiene README, esempi di codice e soluzioni
- Progetti indipendenti in directory separate (quiz-app, vari progetti delle lezioni)
- Sistema di traduzione tramite GitHub Actions (co-op-translator)
- Documentazione servita tramite Docsify e disponibile in PDF

## Comandi di Configurazione

Questo repository è principalmente per la fruizione di contenuti educativi. Per lavorare con progetti specifici:

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
npm run build      # Costruisci per la produzione
npm run lint       # Esegui ESLint
```

### API Progetto Banca (Node.js + Express)

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
# Seguire le istruzioni specifiche del browser per il caricamento dell'estensione
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

### Per i Collaboratori di Contenuti

1. **Fork del repository** nel proprio account GitHub
2. **Clonare il fork** localmente
3. **Creare un nuovo branch** per le modifiche
4. Apportare modifiche ai contenuti delle lezioni o agli esempi di codice
5. Testare eventuali modifiche al codice nelle directory dei progetti rilevanti
6. Inviare pull request seguendo le linee guida di contributo

### Per gli Studenti

1. Fork o clone del repository
2. Navigare sequenzialmente tra le cartelle delle lezioni
3. Leggere i file README di ogni lezione
4. Completare i quiz preliminari della lezione su https://ff-quizzes.netlify.app/web/
5. Lavorare sugli esempi di codice nelle cartelle delle lezioni
6. Completare compiti e sfide
7. Sostenere i quiz post-lezione

### Sviluppo Live

- **Documentazione**: Eseguire `docsify serve` nella root (porta 3000)
- **Quiz App**: Eseguire `npm run dev` nella cartella quiz-app
- **Progetti**: Usare l’estensione Live Server di VS Code per progetti HTML
- **Progetti API**: Eseguire `npm start` nelle rispettive directory API

## Istruzioni per i Test

### Test per Quiz App

```bash
cd quiz-app
npm run lint       # Controlla problemi di stile del codice
npm run build      # Verifica che la compilazione abbia successo
```

### Test per API Bancaria

```bash
cd 7-bank-project/api
npm run lint       # Controlla problemi di stile del codice
node server.js     # Verifica che il server si avvii senza errori
```

### Approccio Generale ai Test

- Questo è un repository educativo senza test automatici completi
- I test manuali si concentrano su:
  - Esecuzione senza errori degli esempi di codice
  - Funzionamento corretto dei link nella documentazione
  - Completamento senza errori delle build dei progetti
  - Rispetto delle best practice negli esempi

### Controlli Prima della Sottomissione

- Eseguire `npm run lint` nelle directory con package.json
- Verificare che i link markdown siano validi
- Testare gli esempi di codice in browser o Node.js
- Controllare che le traduzioni mantengano la struttura corretta

## Linee Guida per lo Stile del Codice

### JavaScript

- Usare sintassi moderna ES6+
- Seguire le configurazioni ESLint standard fornite nei progetti
- Usare nomi di variabili e funzioni significativi per chiarezza educativa
- Aggiungere commenti che spieghino i concetti agli studenti
- Formattare con Prettier dove configurato

### HTML/CSS

- Elementi HTML5 semantici
- Principi di design responsive
- Convenzioni chiare per il naming delle classi
- Commenti che spiegano le tecniche CSS per gli studenti

### Python

- Linee guida di stile PEP 8
- Esempi di codice chiari ed educativi
- Usare type hint ove utili per l’apprendimento

### Documentazione Markdown

- Gerarchia chiara dei titoli
- Blocchi di codice con specifica del linguaggio
- Link a risorse aggiuntive
- Schermate e immagini nelle cartelle `images/`
- Testo alternativo per immagini per l’accessibilità

### Organizzazione dei File

- Lezioni numerate in modo sequenziale (1-getting-started-lessons, 2-js-basics, ecc.)
- Ogni progetto ha cartelle `solution/` e spesso `start/` o `your-work/`
- Immagini salvate in cartelle `images/` specifiche di ogni lezione
- Traduzioni nella struttura `translations/{language-code}/`

## Build e Distribuzione

### Distribuzione Quiz App (Azure Static Web Apps)

La quiz-app è configurata per la distribuzione su Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Crea la cartella dist/
# Distribuisce tramite il flusso di lavoro GitHub Actions su push verso main
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

### Build Specifiche per Progetto

Ogni directory progetto può avere il proprio processo di build:
- Progetti Vue: `npm run build` crea bundle di produzione
- Progetti statici: Nessun passaggio di build, servire file direttamente

## Linee Guida per le Pull Request

### Formato del Titolo

Usare titoli chiari e descrittivi che indichino l’area di modifica:
- `[Quiz-app] Aggiungi nuovo quiz per la lezione X`
- `[Lesson-3] Correzione di refuso nel progetto terrarium`
- `[Translation] Aggiunta traduzione spagnola per la lezione 5`
- `[Docs] Aggiornamento istruzioni di configurazione`

### Controlli Richiesti

Prima di inviare una PR:

1. **Qualità del Codice**:
   - Eseguire `npm run lint` nelle directory di progetto coinvolte
   - Correggere tutti gli errori e avvisi di linting

2. **Verifica Build**:
   - Eseguire `npm run build` se applicabile
   - Assicurarsi che non ci siano errori di build

3. **Validazione Link**:
   - Testare tutti i link markdown
   - Verificare il corretto funzionamento dei riferimenti alle immagini

4. **Revisione Contenuti**:
   - Controllare ortografia e grammatica
   - Assicurarsi che gli esempi di codice siano corretti ed educativi
   - Verificare che le traduzioni mantengano il significato originale

### Requisiti per il Contributo

- Accettare la Microsoft CLA (verifica automatica alla prima PR)
- Seguire il [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Consultare [CONTRIBUTING.md](./CONTRIBUTING.md) per linee guida dettagliate
- Citare numeri di issue nella descrizione PR se applicabile

### Processo di Revisione

- Le PR sono revisionate da mantenitori e comunità
- Si privilegia la chiarezza educativa
- Gli esempi di codice devono seguire le best practice correnti
- Le traduzioni sono revisionate per accuratezza e adeguatezza culturale

## Sistema di Traduzione

### Traduzione Automatizzata

- Usa GitHub Actions con workflow co-op-translator
- Traduce automaticamente in oltre 50 lingue
- File sorgente nelle directory principali
- File tradotti in directory `translations/{language-code}/`

### Aggiunta di Migliorie Manuali alle Traduzioni

1. Localizzare i file in `translations/{language-code}/`
2. Apportare migliorie preservando struttura
3. Assicurarsi che gli esempi di codice rimangano funzionanti
4. Testare eventuali contenuti quiz localizzati

### Metadata della Traduzione

I file tradotti includono header metadata:
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

## Debugging e Risoluzione Problemi

### Problemi Comuni

**La quiz app non parte**:
- Verificare versione Node.js (consigliato v14+)
- Eliminare `node_modules` e `package-lock.json`, eseguire nuovamente `npm install`
- Controllare conflitti di porta (predefinita: Vite usa porta 5173)

**Il server API non si avvia**:
- Verificare che la versione di Node.js sia minima (node >=10)
- Controllare se la porta è già in uso
- Assicurarsi di aver installato tutte le dipendenze con `npm install`

**L’estensione browser non si carica**:
- Verificare che manifest.json sia formattato correttamente
- Controllare la console del browser per errori
- Seguire le istruzioni specifiche del browser per l’installazione dell’estensione

**Problemi progetto chat Python**:
- Verificare che il pacchetto OpenAI sia installato: `pip install openai`
- Assicurarsi che la variabile d’ambiente GITHUB_TOKEN sia impostata
- Verificare i permessi di accesso ai modelli GitHub

**Docsify non serve la documentazione**:
- Installare docsify-cli globalmente: `npm install -g docsify-cli`
- Eseguire dalla directory root del repository
- Verificare che `docs/_sidebar.md` esista

### Consigli per l’Ambiente di Sviluppo

- Usare VS Code con estensione Live Server per progetti HTML
- Installare estensioni ESLint e Prettier per formattazione coerente
- Usare DevTools del browser per il debug di JavaScript
- Per progetti Vue, installare l’estensione Vue DevTools per browser

### Considerazioni sulle Prestazioni

- L’alto numero di file tradotti (oltre 50 lingue) rende i cloni completi grandi
- Usare clone superficiale se si lavora solo sui contenuti: `git clone --depth 1`
- Escludere le traduzioni dalle ricerche quando si lavora sul contenuto in inglese
- I processi di build possono essere lenti al primo avvio (npm install, build Vite)

## Considerazioni sulla Sicurezza

### Variabili d’Ambiente

- Le chiavi API non devono mai essere commesse nel repository
- Usare file `.env` (già in `.gitignore`)
- Documentare le variabili ambiente necessarie nei README dei progetti

### Progetti Python

- Usare ambienti virtuali: `python -m venv venv`
- Mantenere aggiornate le dipendenze
- I token GitHub devono avere permessi minimi necessari

### Accesso ai Modelli GitHub

- I token di accesso personale (PAT) sono richiesti per i Modelli GitHub
- I token devono essere memorizzati come variabili d’ambiente
- Mai commettere token o credenziali

## Note Aggiuntive

### Pubblico Target

- Principianti assoluti allo sviluppo web
- Studenti e autodidatti
- Insegnanti che usano il curriculum in aula
- Contenuti progettati per accessibilità e costruzione graduale delle competenze

### Filosofia Educativa

- Approccio di apprendimento basato su progetti
- Verifiche frequenti della conoscenza (quiz)
- Esercizi pratici di programmazione
- Esempi di applicazioni reali
- Focus sulle basi prima dei framework

### Manutenzione del Repository

- Comunità attiva di studenti e collaboratori
- Aggiornamenti regolari di dipendenze e contenuti
- Issue e discussioni monitorate dai mantenitori
- Aggiornamenti delle traduzioni automatizzati tramite GitHub Actions

### Risorse Correlate

- [Moduli Microsoft Learn](https://docs.microsoft.com/learn/)
- [Risorse Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) consigliato per gli studenti
- Corsi aggiuntivi: Generative AI, Data Science, ML, curricula IoT disponibili

### Lavorare con Progetti Specifici

Per istruzioni dettagliate su singoli progetti, fare riferimento ai file README in:
- `quiz-app/README.md` - Applicazione quiz Vue 3
- `7-bank-project/README.md` - Applicazione bancaria con autenticazione
- `5-browser-extension/README.md` - Sviluppo estensione browser
- `6-space-game/README.md` - Sviluppo gioco su canvas
- `9-chat-project/README.md` - Progetto assistente chat AI

### Struttura Monorepo

Pur non essendo un monorepo tradizionale, questo repository contiene più progetti indipendenti:
- Ogni lezione è autoconclusiva
- I progetti non condividono dipendenze
- Lavorare su singoli progetti senza influenzare gli altri
- Clonare l’intero repo per fruire del curriculum completo

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica AI [Co-op Translator](https://github.com/Azure/co-op-translator). Pur impegnandoci per garantire l’accuratezza, si prega di tenere presente che le traduzioni automatiche possono contenere errori o inesattezze. Il documento originale nella sua lingua nativa deve essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un esperto. Non ci assumiamo alcuna responsabilità per incomprensioni o interpretazioni errate derivanti dall’uso di questa traduzione.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->