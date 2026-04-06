# AGENTS.md

## Panoramica del Progetto

Questo è un repository curriculare educativo per insegnare le basi dello sviluppo web ai principianti. Il curriculum è un corso completo di 12 settimane sviluppato dai Microsoft Cloud Advocates, che presenta 24 lezioni pratiche che coprono JavaScript, CSS e HTML.

### Componenti Chiave

- **Contenuti Educativi**: 24 lezioni strutturate organizzate in moduli basati su progetti
- **Progetti Pratici**: Terrario, Gioco di Digitazione, Estensione Browser, Gioco Spaziale, App Bancaria, Editor di Codice e Assistente Chat AI
- **Quiz Interattivi**: 48 quiz con 3 domande ciascuno (valutazioni pre/post lezione)
- **Supporto Multilingue**: Traduzioni automatizzate per oltre 50 lingue tramite GitHub Actions
- **Tecnologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (per progetti AI)

### Architettura

- Repository educativo con struttura basata sulle lezioni
- Ogni cartella lezione contiene README, esempi di codice e soluzioni
- Progetti autonomi in directory separate (quiz-app, vari progetti lezioni)
- Sistema di traduzione usando GitHub Actions (co-op-translator)
- Documentazione servita tramite Docsify e disponibile in PDF

## Comandi di Setup

Questo repository è principalmente per il consumo di contenuti educativi. Per lavorare su progetti specifici:

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
npm run build      # Costruisci per la produzione
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
# Apri index.html nel browser oppure usa Live Server
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

1. **Forka il repository** nel tuo account GitHub
2. **Clona il tuo fork** localmente
3. **Crea un nuovo branch** per le tue modifiche
4. Modifica contenuti delle lezioni o esempi di codice
5. Testa eventuali modifiche al codice nelle directory dei progetti pertinenti
6. Invia pull request seguendo le linee guida per i contributi

### Per gli Studenti

1. Fork o clona il repository
2. Naviga nelle directory delle lezioni in sequenza
3. Leggi i file README di ogni lezione
4. Completa i quiz pre-lezione su https://ff-quizzes.netlify.app/web/
5. Lavora sugli esempi di codice nelle cartelle delle lezioni
6. Completa esercizi e sfide
7. Fai i quiz post-lezione

### Sviluppo in Diretta

- **Documentazione**: Esegui `docsify serve` nella root (porta 3000)
- **Quiz App**: Esegui `npm run dev` nella directory quiz-app
- **Progetti**: Usa l'estensione Live Server di VS Code per progetti HTML
- **Progetti API**: Esegui `npm start` nelle directory API rispettive

## Istruzioni per il Testing

### Testing Quiz App

```bash
cd quiz-app
npm run lint       # Controlla problemi di stile del codice
npm run build      # Verifica che la compilazione abbia successo
```

### Testing Bank API

```bash
cd 7-bank-project/api
npm run lint       # Verifica la presenza di problemi di stile del codice
node server.js     # Verifica che il server si avvii senza errori
```

### Approccio Generale al Testing

- Questo è un repository educativo senza test automatizzati completi
- Il testing manuale si concentra su:
  - Esempi di codice eseguiti senza errori
  - Link nella documentazione funzionanti correttamente
  - Build dei progetti completate con successo
  - Esempi che seguono le migliori pratiche

### Controlli Pre-Invio

- Esegui `npm run lint` nelle directory con package.json
- Verifica che i link markdown siano validi
- Testa gli esempi di codice in browser o Node.js
- Controlla che le traduzioni mantengano la struttura corretta

## Linee Guida per lo Stile del Codice

### JavaScript

- Usa sintassi moderna ES6+
- Segui le configurazioni ESLint standard fornite nei progetti
- Usa nomi di variabili e funzioni significativi per chiarezza educativa
- Aggiungi commenti che spiegano i concetti per gli studenti
- Formattta con Prettier ove configurato

### HTML/CSS

- Elementi semantici HTML5
- Principi di design responsivo
- Convenzioni chiare per nomi di classi
- Commenti che spiegano le tecniche CSS per gli studenti

### Python

- Linee guida di stile PEP 8
- Esempi di codice chiari e educativi
- Indicazioni di tipo dove utili per l’apprendimento

### Documentazione Markdown

- Chiara gerarchia di intestazioni
- Blocchi di codice con specifica del linguaggio
- Link a risorse aggiuntive
- Screenshot e immagini nelle cartelle `images/`
- Testo alternativo per immagini per accessibilità

### Organizzazione dei File

- Lezioni numerate progressivamente (1-getting-started-lessons, 2-js-basics, ecc.)
- Ogni progetto ha directory `solution/` e spesso `start/` o `your-work/`
- Immagini conservate in cartelle `images/` specifiche per la lezione
- Traduzioni in struttura `translations/{language-code}/`

## Build e Distribuzione

### Distribuzione Quiz App (Azure Static Web Apps)

La quiz-app è configurata per distribuzione su Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Crea la cartella dist/
# Esegue il deploy tramite workflow di GitHub Actions al push sul ramo main
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

### Build Specifici per Progetto

Ogni directory progetto può avere un proprio processo di build:
- Progetti Vue: `npm run build` crea bundle di produzione
- Progetti statici: nessun passaggio di build, servire file direttamente

## Linee Guida per le Pull Request

### Formato del Titolo

Usa titoli chiari e descrittivi indicanti l’area di modifica:
- `[Quiz-app] Aggiungi nuovo quiz per la lezione X`
- `[Lesson-3] Correggi errore di battitura nel progetto terrario`
- `[Translation] Aggiungi traduzione spagnola per la lezione 5`
- `[Docs] Aggiorna istruzioni di setup`

### Controlli Richiesti

Prima di inviare una PR:

1. **Qualità del Codice**:
   - Esegui `npm run lint` nelle directory progetto coinvolte
   - Risolvi tutti gli errori e avvisi di linting

2. **Verifica Build**:
   - Esegui `npm run build` se applicabile
   - Assicurati di non avere errori di build

3. **Validazione Link**:
   - Testa tutti i link markdown
   - Verifica i riferimenti alle immagini

4. **Revisione Contenuti**:
   - Correggi errori di ortografia e grammatica
   - Assicurati che gli esempi di codice siano corretti ed educativi
   - Verifica che le traduzioni mantengano il significato originale

### Requisiti per il Contributo

- Accetta il CLA Microsoft (controllo automatico alla prima PR)
- Segui il [Codice di Condotta Open Source Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Consulta [CONTRIBUTING.md](./CONTRIBUTING.md) per linee guida dettagliate
- Riporta i numeri degli issue nella descrizione della PR se applicabile

### Processo di Revisione

- Le PR sono revisionate da manutentori e comunità
- La chiarezza educativa è una priorità
- Gli esempi di codice devono seguire le migliori pratiche correnti
- Le traduzioni sono revisionate per accuratezza e adeguatezza culturale

## Sistema di Traduzione

### Traduzione Automatica

- Usa GitHub Actions con workflow co-op-translator
- Traduce automaticamente in più di 50 lingue
- File sorgente nelle directory principali
- File tradotti nelle directory `translations/{language-code}/`

### Aggiunta di Miglioramenti Manuali alle Traduzioni

1. Trova il file in `translations/{language-code}/`
2. Effettua miglioramenti mantenendo la struttura
3. Assicurati che gli esempi di codice restino funzionanti
4. Testa eventuali quiz localizzati

### Metadati di Traduzione

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

## Debugging e Risoluzione Problemi

### Problemi Comuni

**Quiz app non si avvia**:
- Controlla la versione di Node.js (consigliata v14+)
- Cancella `node_modules` e `package-lock.json`, esegui di nuovo `npm install`
- Controlla conflitti di porta (default: Vite usa porta 5173)

**Server API non parte**:
- Verifica che la versione di Node.js sia minima (node >=10)
- Controlla se la porta è già in uso
- Assicurati che tutte le dipendenze siano installate con `npm install`

**Estensione browser non si carica**:
- Verifica che manifest.json sia formattato correttamente
- Controlla la console del browser per errori
- Segui le istruzioni di installazione specifiche per il browser

**Problemi con progetto chat Python**:
- Assicurati che il pacchetto OpenAI sia installato: `pip install openai`
- Verifica che la variabile ambiente GITHUB_TOKEN sia impostata
- Controlla i permessi di accesso ai GitHub Models

**Docsify non serve la documentazione**:
- Installa docsify-cli globalmente: `npm install -g docsify-cli`
- Esegui dalla directory root del repository
- Controlla che esista `docs/_sidebar.md`

### Suggerimenti per l’Ambiente di Sviluppo

- Usa VS Code con estensione Live Server per progetti HTML
- Installa estensioni ESLint e Prettier per formattazione coerente
- Usa DevTools del browser per il debugging di JavaScript
- Per progetti Vue, installa l’estensione Vue DevTools per browser

### Considerazioni sulle Prestazioni

- L’elevato numero di file tradotti (oltre 50 lingue) rende le clone complete grandi
- Usa clone superficiale se lavori solo sui contenuti: `git clone --depth 1`
- Escludi le traduzioni dalle ricerche quando lavori solo su contenuti in inglese
- I processi di build possono essere lenti alla prima esecuzione (npm install, build Vite)

## Considerazioni sulla Sicurezza

### Variabili d’Ambiente

- Le API key non devono mai essere immesse nel repository
- Usa file `.env` (già inclusi in `.gitignore`)
- Documenta le variabili d’ambiente richieste nei README dei progetti

### Progetti Python

- Usa ambienti virtuali: `python -m venv venv`
- Mantieni le dipendenze aggiornate
- I token GitHub devono avere permessi minimi necessari

### Accesso a GitHub Models

- Sono necessari Personal Access Token (PAT) per GitHub Models
- I token vanno conservati come variabili d’ambiente
- Mai commitare token o credenziali

## Note Aggiuntive

### Pubblico Target

- Principianti completi nello sviluppo web
- Studenti e autodidatti
- Insegnanti che usano il curriculum in aula
- Contenuti progettati per accessibilità e costruzione graduale di competenze

### Filosofia Educativa

- Approccio basato su apprendimento via progetti
- Controlli frequenti della conoscenza (quiz)
- Esercizi pratici di coding
- Esempi di applicazione reale
- Focus sui fondamenti prima dei framework

### Manutenzione del Repository

- Comunità attiva di studenti e collaboratori
- Aggiornamenti regolari di dipendenze e contenuti
- Monitoraggio di issue e discussioni da parte dei manutentori
- Aggiornamenti traduzione automatizzati tramite GitHub Actions

### Risorse Correlate

- [Moduli Microsoft Learn](https://docs.microsoft.com/learn/)
- [Risorse Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) consigliato per studenti
- Corsi aggiuntivi: curricula Generative AI, Data Science, ML, IoT disponibili

### Lavorare con Progetti Specifici

Per istruzioni dettagliate sui singoli progetti, consulta i file README in:
- `quiz-app/README.md` - applicazione quiz Vue 3
- `7-bank-project/README.md` - applicazione bancaria con autenticazione
- `5-browser-extension/README.md` - sviluppo estensione browser
- `6-space-game/README.md` - sviluppo gioco basato su canvas
- `9-chat-project/README.md` - progetto assistente chat AI

### Struttura Monorepo

Anche se non è un monorepo tradizionale, questo repository contiene molti progetti indipendenti:
- Ogni lezione è autonoma
- I progetti non condividono dipendenze
- Lavora su progetti individuali senza influenzare gli altri
- Clona l’intero repo per l’esperienza completa del curriculum

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Pur impegnandoci per garantire l’accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o inesattezze. Il documento originale nella sua lingua originale dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un essere umano. Non ci assumiamo alcuna responsabilità per eventuali malintesi o interpretazioni errate derivanti dall’uso di questa traduzione.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->