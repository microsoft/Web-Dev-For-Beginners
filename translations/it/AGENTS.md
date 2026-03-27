# AGENTS.md

## Panoramica del Progetto

Questo è un repository curriculum educativo per insegnare le basi dello sviluppo web ai principianti. Il curriculum è un corso completo di 12 settimane sviluppato dai Microsoft Cloud Advocates, con 24 lezioni pratiche che coprono JavaScript, CSS e HTML.

### Componenti Chiave

- **Contenuti Educativi**: 24 lezioni strutturate organizzate in moduli basati su progetti
- **Progetti Pratici**: Terrarium, Gioco di Digitazione, Estensione del Browser, Gioco Spaziale, App Bancaria, Editor di Codice e Assistente Chat AI
- **Quiz Interattivi**: 48 quiz con 3 domande ciascuno (valutazioni pre/post-lezione)
- **Supporto Multilingue**: Traduzioni automatiche per oltre 50 lingue tramite GitHub Actions
- **Tecnologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (per progetti AI)

### Architettura

- Repository educativo con struttura basata sulle lezioni
- Ogni cartella delle lezioni contiene README, esempi di codice e soluzioni
- Progetti autonomi in directory separate (quiz-app, vari progetti di lezione)
- Sistema di traduzione tramite GitHub Actions (co-op-translator)
- Documentazione servita tramite Docsify e disponibile in PDF

## Comandi di Configurazione

Questo repository è principalmente destinato al consumo di contenuti educativi. Per lavorare con progetti specifici:

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

### API del Progetto Bancario (Node.js + Express)

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

### Per i Collaboratori di Contenuti

1. **Effettuare il fork del repository** sul proprio account GitHub
2. **Clonare il fork** localmente
3. **Creare un nuovo branch** per le modifiche
4. Apportare modifiche ai contenuti delle lezioni o agli esempi di codice
5. Testare eventuali modifiche al codice nelle directory di progetto rilevanti
6. Inviare pull request seguendo le linee guida di contributo

### Per gli Studenti

1. Fare il fork o clonare il repository
2. Navigare sequenzialmente nelle directory delle lezioni
3. Leggere i file README di ogni lezione
4. Completare i quiz pre-lezione su https://ff-quizzes.netlify.app/web/
5. Lavorare sugli esempi di codice nelle cartelle delle lezioni
6. Completare compiti e sfide
7. Sostenere i quiz post-lezione

### Sviluppo Live

- **Documentazione**: Eseguire `docsify serve` nella root (porta 3000)
- **Quiz App**: Eseguire `npm run dev` nella directory quiz-app
- **Progetti**: Usare l’estensione Live Server di VS Code per progetti HTML
- **Progetti API**: Eseguire `npm start` nelle rispettive directory API

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
npm run lint       # Controlla la presenza di problemi nello stile del codice
node server.js     # Verifica che il server si avvii senza errori
```

### Approccio Generale al Testing

- Questo è un repository educativo senza test automatizzati completi
- Il testing manuale si concentra su:
  - Esecuzione degli esempi di codice senza errori
  - Funzionamento corretto dei link nella documentazione
  - Completamento con successo delle build dei progetti
  - Aderenza degli esempi alle migliori pratiche

### Controlli Pre-Invio

- Eseguire `npm run lint` nelle directory con package.json
- Verificare che i link markdown siano validi
- Testare gli esempi di codice nel browser o in Node.js
- Controllare che le traduzioni mantengano la struttura corretta

## Linee Guida per lo Stile del Codice

### JavaScript

- Usare sintassi moderna ES6+
- Seguire le configurazioni standard ESLint fornite nei progetti
- Usare nomi di variabili e funzioni significativi per chiarezza educativa
- Aggiungere commenti che spiegano i concetti per gli studenti
- Formattare usando Prettier dove configurato

### HTML/CSS

- Elementi semantici HTML5
- Principi di design responsivo
- Convenzioni chiare per la denominazione delle classi
- Commenti che spiegano tecniche CSS per studenti

### Python

- Linee guida di stile PEP 8
- Esempi di codice chiari ed educativi
- Annotazioni di tipo dove utili per l’apprendimento

### Documentazione Markdown

- Chiara gerarchia delle intestazioni
- Blocchi di codice con specificazione del linguaggio
- Link a risorse aggiuntive
- Screenshot e immagini nelle directory `images/`
- Testo alternativo per le immagini per accessibilità

### Organizzazione dei File

- Lezioni numerate progressivamente (1-getting-started-lessons, 2-js-basics, ecc.)
- Ogni progetto ha cartelle `solution/` e spesso `start/` o `your-work/`
- Immagini conservate nelle cartelle `images/` specifiche delle lezioni
- Traduzioni nella struttura `translations/{language-code}/`

## Build e Distribuzione

### Distribuzione Quiz App (Azure Static Web Apps)

La quiz-app è configurata per la distribuzione su Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Crea la cartella dist/
# Effettua il deploy tramite il workflow di GitHub Actions al push su main
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

### Build Specifiche dei Progetti

Ogni directory di progetto può avere il proprio processo di build:
- Progetti Vue: `npm run build` crea bundle di produzione
- Progetti statici: Nessun passaggio di build, servire file direttamente

## Linee Guida per le Pull Request

### Formato del Titolo

Usare titoli chiari e descrittivi indicando l’area di modifica:
- `[Quiz-app] Aggiungi nuovo quiz per la lezione X`
- `[Lesson-3] Correggi errore di battitura nel progetto terrarium`
- `[Translation] Aggiungi traduzione spagnola per la lezione 5`
- `[Docs] Aggiorna istruzioni di configurazione`

### Controlli Richiesti

Prima di inviare una PR:

1. **Qualità del Codice**:
   - Eseguire `npm run lint` nelle directory di progetto interessate
   - Correggere tutti gli errori e avvertimenti lint

2. **Verifica della Build**:
   - Eseguire `npm run build` se applicabile
   - Assicurarsi che non vi siano errori di build

3. **Validazione Link**:
   - Testare tutti i link markdown
   - Verificare che i riferimenti alle immagini funzionino

4. **Revisione Contenuto**:
   - Correggere ortografia e grammatica
   - Assicurarsi che gli esempi di codice siano corretti ed educativi
   - Verificare che le traduzioni mantengano il significato originale

### Requisiti di Contributo

- Accettare il CLA Microsoft (controllo automatico alla prima PR)
- Seguire il [Codice di Condotta Open Source Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Consultare [CONTRIBUTING.md](./CONTRIBUTING.md) per linee guida dettagliate
- Fare riferimento ai numeri delle issue nella descrizione PR se applicabile

### Processo di Revisione

- Le PR sono revisionate dai responsabili e dalla community
- Si dà priorità alla chiarezza educativa
- Gli esempi di codice devono seguire le migliori pratiche correnti
- Le traduzioni sono revisionate per accuratezza e adeguatezza culturale

## Sistema di Traduzione

### Traduzione Automatica

- Usa GitHub Actions con workflow co-op-translator
- Traduce automaticamente in oltre 50 lingue
- File sorgente nelle directory principali
- File tradotti in directory `translations/{language-code}/`

### Aggiunta di Miglioramenti Manuali alle Traduzioni

1. Trovare il file in `translations/{language-code}/`
2. Apportare miglioramenti mantenendo la struttura
3. Assicurarsi che gli esempi di codice restino funzionanti
4. Testare eventuali contenuti del quiz localizzati

### Metadati della Traduzione

I file tradotti includono intestazione metadata:
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
- Controllare versione Node.js (consigliata v14+)
- Cancellare `node_modules` e `package-lock.json`, eseguire di nuovo `npm install`
- Verificare conflitti di porta (default: Vite usa porta 5173)

**Server API non si avvia**:
- Verificare che la versione Node.js sia minima (node >=10)
- Controllare se la porta è già in uso
- Assicurarsi che tutte le dipendenze siano installate con `npm install`

**Estensione browser non si carica**:
- Verificare che manifest.json sia formattato correttamente
- Controllare la console del browser per errori
- Seguire le istruzioni specifiche del browser per l’installazione delle estensioni

**Problemi progetto chat Python**:
- Assicurarsi che il pacchetto OpenAI sia installato: `pip install openai`
- Verificare che la variabile d’ambiente GITHUB_TOKEN sia impostata
- Controllare i permessi di accesso ai modelli GitHub

**Docsify non serve la documentazione**:
- Installare docsify-cli globalmente: `npm install -g docsify-cli`
- Eseguire dalla directory root del repository
- Verificare che `docs/_sidebar.md` esista

### Consigli per l’Ambiente di Sviluppo

- Usare VS Code con estensione Live Server per progetti HTML
- Installare estensioni ESLint e Prettier per formattazione coerente
- Usare gli strumenti DevTools del browser per il debug di JavaScript
- Per progetti Vue, installare l’estensione Vue DevTools per browser

### Considerazioni sulle Prestazioni

- L’elevato numero di file tradotti (oltre 50 lingue) rende le clone complete grandi
- Usare clone superficiale se si lavora solo sui contenuti: `git clone --depth 1`
- Escludere le traduzioni dalle ricerche quando si lavora su contenuti in inglese
- I processi di build possono essere lenti al primo avvio (npm install, build Vite)

## Considerazioni sulla Sicurezza

### Variabili di Ambiente

- Le chiavi API non devono mai essere inserite nel repository
- Usare file `.env` (già inclusi in `.gitignore`)
- Documentare le variabili di ambiente richieste nei README dei progetti

### Progetti Python

- Usare ambienti virtuali: `python -m venv venv`
- Mantenere aggiornate le dipendenze
- I token GitHub devono avere permessi minimi necessari

### Accesso Modelli GitHub

- Sono necessari Personal Access Tokens (PAT) per i modelli GitHub
- I token devono essere conservati come variabili di ambiente
- Non commettere mai token o credenziali

## Note Aggiuntive

### Pubblico di Destinazione

- Principianti completi nello sviluppo web
- Studenti e autodidatti
- Insegnanti che usano il curriculum in aula
- Contenuti progettati per accessibilità e acquisizione graduale delle competenze

### Filosofia Educativa

- Approccio di apprendimento basato su progetti
- Verifiche frequenti delle conoscenze (quiz)
- Esercizi di programmazione pratici
- Esempi applicativi reali
- Focus sui fondamenti prima dei framework

### Manutenzione del Repository

- Comunità attiva di studenti e collaboratori
- Aggiornamenti regolari di dipendenze e contenuti
- Issue e discussioni monitorate dai manutentori
- Aggiornamenti delle traduzioni automatizzati tramite GitHub Actions

### Risorse Correlate

- [Moduli Microsoft Learn](https://docs.microsoft.com/learn/)
- [Risorse Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) consigliato per studenti
- Corsi aggiuntivi: AI Generativa, Data Science, ML, curricoli IoT disponibili

### Lavorare con Progetti Specifici

Per istruzioni dettagliate su singoli progetti, consultare i file README in:
- `quiz-app/README.md` - Applicazione quiz Vue 3
- `7-bank-project/README.md` - Applicazione bancaria con autenticazione
- `5-browser-extension/README.md` - Sviluppo estensione browser
- `6-space-game/README.md` - Sviluppo gioco basato su canvas
- `9-chat-project/README.md` - Progetto assistente chat AI

### Struttura Monorepo

Pur non essendo un monorepo tradizionale, questo repository contiene più progetti indipendenti:
- Ogni lezione è autonoma
- I progetti non condividono dipendenze
- Lavorare su singoli progetti senza influenzare gli altri
- Clonare l’intero repository per l’esperienza completa del curriculum

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Dichiarazione di non responsabilità**:
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Pur impegnandoci per garantire l’accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa deve essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda la traduzione professionale effettuata da un umano. Non siamo responsabili per eventuali fraintendimenti o interpretazioni errate derivanti dall’uso di questa traduzione.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->