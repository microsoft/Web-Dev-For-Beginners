# AGENTS.md

## Panoramica del Progetto

Questo è un repository curriculum educativo per insegnare i fondamenti dello sviluppo web ai principianti. Il curriculum è un corso completo di 12 settimane sviluppato dai Microsoft Cloud Advocates, con 24 lezioni pratiche che coprono JavaScript, CSS e HTML.

### Componenti Chiave

- **Contenuti Educativi**: 24 lezioni strutturate organizzate in moduli basati su progetti
- **Progetti Pratici**: Terrarium, Gioco di Digitazione, Estensione Browser, Gioco Spaziale, App Bancaria, Editor di Codice e Assistente Chat AI
- **Quiz Interattivi**: 48 quiz con 3 domande ciascuno (valutazioni pre/post lezione)
- **Supporto Multilingue**: Traduzioni automatiche in 50+ lingue tramite GitHub Actions
- **Tecnologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (per progetti AI)

### Architettura

- Repository educativo con struttura basata su lezioni
- Ogni cartella lezione contiene README, esempi di codice e soluzioni
- Progetti autonomi in directory separate (quiz-app, vari progetti delle lezioni)
- Sistema di traduzione usando GitHub Actions (co-op-translator)
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

### API del Progetto Banca (Node.js + Express)

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

## Flusso di Lavoro di Sviluppo

### Per i Collaboratori di Contenuti

1. **Effettua il fork del repository** sul tuo account GitHub
2. **Clona il tuo fork** localmente
3. **Crea un nuovo branch** per le tue modifiche
4. Modifica i contenuti delle lezioni o gli esempi di codice
5. Testa eventuali modifiche al codice nelle directory di progetto rilevanti
6. Invia pull request seguendo le linee guida di contributo

### Per gli Studenti

1. Effettua il fork o clona il repository
2. Naviga sequenzialmente tra le directory delle lezioni
3. Leggi i file README di ogni lezione
4. Completa i quiz pre-lezione su https://ff-quizzes.netlify.app/web/
5. Lavora sugli esempi di codice nelle cartelle delle lezioni
6. Completa incarichi e sfide
7. Fai i quiz post-lezione

### Sviluppo Live

- **Documentazione**: Esegui `docsify serve` dalla root (porta 3000)
- **Quiz App**: Esegui `npm run dev` nella directory quiz-app
- **Progetti**: Usa l’estensione Live Server di VS Code per i progetti HTML
- **Progetti API**: Esegui `npm start` nelle directory API rispettive

## Istruzioni per il Testing

### Test Quiz App

```bash
cd quiz-app
npm run lint       # Controlla problemi di stile del codice
npm run build      # Verifica che la compilazione abbia successo
```

### Test API Banca

```bash
cd 7-bank-project/api
npm run lint       # Controlla problemi di stile del codice
node server.js     # Verifica che il server si avvii senza errori
```

### Approccio Generale al Testing

- Questo è un repository educativo senza test automatizzati completi
- Il testing manuale si focalizza su:
  - Esecuzione senza errori degli esempi di codice
  - Funzionamento corretto dei link nella documentazione
  - Completamento riuscito delle build dei progetti
  - Applicazione delle best practice negli esempi

### Verifiche Prima della Sottomissione

- Esegui `npm run lint` nelle directory con package.json
- Verifica che i link markdown siano validi
- Testa gli esempi di codice nel browser o in Node.js
- Controlla che le traduzioni mantengano la giusta struttura

## Linee Guida per lo Stile del Codice

### JavaScript

- Usa sintassi moderna ES6+
- Segui le configurazioni ESLint standard fornite nei progetti
- Usa nomi di variabili e funzioni significativi per chiarezza educativa
- Aggiungi commenti esplicativi per i concetti destinati agli studenti
- Formattta con Prettier se configurato

### HTML/CSS

- Elementi semantici HTML5
- Principi di design responsive
- Convenzioni chiare per la denominazione delle classi
- Commenti che spiegano le tecniche CSS per i studenti

### Python

- Linee guida di stile PEP 8
- Esempi di codice chiari e didattici
- Hint di tipo dove utili all’apprendimento

### Documentazione Markdown

- Gerarchia chiara delle intestazioni
- Blocchi di codice con specifica del linguaggio
- Link a risorse aggiuntive
- Screenshot e immagini nelle cartelle `images/`
- Testo alternativo per le immagini per accessibilità

### Organizzazione dei File

- Lezioni numerate in sequenza (1-getting-started-lessons, 2-js-basics, ecc.)
- Ogni progetto ha directory `solution/` e spesso `start/` o `your-work/`
- Immagini conservate in cartelle `images/` specifiche della lezione
- Traduzioni in struttura `translations/{language-code}/`

## Build e Distribuzione

### Distribuzione Quiz App (Azure Static Web Apps)

La quiz-app è configurata per la distribuzione su Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Crea la cartella dist/
# Esegue il deploy tramite workflow di GitHub Actions al push su main
```

Configurazione Azure Static Web Apps:
- **Posizione app**: `/quiz-app`
- **Posizione output**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generazione PDF della Documentazione

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

Ogni directory di progetto può avere il proprio processo di build:
- Progetti Vue: `npm run build` crea bundle di produzione
- Progetti statici: nessun passo di build, servire i file direttamente

## Linee Guida per le Pull Request

### Formato del Titolo

Usa titoli chiari e descrittivi indicando l’area di modifica:
- `[Quiz-app] Aggiunta nuovo quiz per lezione X`
- `[Lesson-3] Correzione refuso nel progetto terrarium`
- `[Translation] Aggiunta traduzione spagnola per lezione 5`
- `[Docs] Aggiornate istruzioni di setup`

### Controlli Richiesti

Prima di inviare una PR:

1. **Qualità del Codice**:
   - Esegui `npm run lint` nelle directory di progetti interessati
   - Risolvi tutti gli errori e warning di linting

2. **Verifica Build**:
   - Esegui `npm run build` se applicabile
   - Assicurati che non ci siano errori di build

3. **Validazione Link**:
   - Testa tutti i link markdown
   - Verifica che i riferimenti alle immagini funzionino

4. **Revisione Contenuti**:
   - Correggi errori di ortografia e grammatica
   - Verifica che gli esempi di codice siano corretti e didattici
   - Assicurati che le traduzioni mantengano il significato originale

### Requisiti di Contributo

- Accettare il CLA Microsoft (controllo automatico alla prima PR)
- Seguire il [Codice di Condotta Open Source Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Vedere [CONTRIBUTING.md](./CONTRIBUTING.md) per linee guida dettagliate
- Riferire numeri di issue nella descrizione della PR se applicabile

### Processo di Revisione

- Le PR sono revisionate dai mantenitori e dalla comunità
- Priorità alla chiarezza educativa
- Esempi di codice devono seguire best practice attuali
- Le traduzioni sono controllate per accuratezza e appropriatezza culturale

## Sistema di Traduzione

### Traduzione Automatizzata

- Usa GitHub Actions con workflow co-op-translator
- Traduce automaticamente in 50+ lingue
- File sorgente nelle directory principali
- File tradotti in directory `translations/{language-code}/`

### Aggiunta Miglioramenti Manuali alla Traduzione

1. Trova il file in `translations/{language-code}/`
2. Apporta miglioramenti preservando la struttura
3. Assicurati che gli esempi di codice rimangano funzionanti
4. Testa eventuale contenuto quiz localizzato

### Metadata di Traduzione

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

**Quiz app non si avvia**:
- Controlla versione Node.js (consigliato v14+)
- Elimina `node_modules` e `package-lock.json`, poi esegui di nuovo `npm install`
- Verifica conflitti di porta (default: Vite usa porta 5173)

**Server API non parte**:
- Verifica versione minima Node.js (node >=10)
- Controlla se la porta è già in uso
- Assicurati che tutte le dipendenze siano installate con `npm install`

**Estensione browser non si carica**:
- Verifica che manifest.json sia correttamente formattato
- Controlla console browser per errori
- Segui le istruzioni di installazione specifiche per browser

**Problemi progetto chat Python**:
- Assicurati che il pacchetto OpenAI sia installato: `pip install openai`
- Verifica che la variabile d’ambiente GITHUB_TOKEN sia impostata
- Controlla i permessi d’accesso ai modelli GitHub

**Docsify non serve la documentazione**:
- Installa docsify-cli globalmente: `npm install -g docsify-cli`
- Avvia dalla directory root del repository
- Verifica che `docs/_sidebar.md` esista

### Consigli per l’Ambiente di Sviluppo

- Usa VS Code con estensione Live Server per progetti HTML
- Installa le estensioni ESLint e Prettier per formattazione coerente
- Usa DevTools browser per debug JavaScript
- Per progetti Vue, installa l’estensione Vue DevTools browser

### Considerazioni sulle Prestazioni

- Il grande numero di file tradotti (50+ lingue) rende le clonazioni complete pesanti
- Usa clone shallow se lavori solo su contenuti: `git clone --depth 1`
- Escludi le traduzioni dalle ricerche quando lavori su contenuti in inglese
- I processi di build possono essere lenti al primo avvio (npm install, build Vite)

## Considerazioni di Sicurezza

### Variabili d’Ambiente

- Le chiavi API non devono mai essere committate nel repository
- Usa file `.env` (già in `.gitignore`)
- Documenta le variabili d’ambiente richieste nei README dei progetti

### Progetti Python

- Usa ambienti virtuali: `python -m venv venv`
- Mantieni aggiornate le dipendenze
- I token GitHub devono avere permessi minimi necessari

### Accesso ai Modelli GitHub

- Per i modelli GitHub sono necessari Personal Access Tokens (PAT)
- Conserva i token come variabili d’ambiente
- Mai committare token o credenziali

## Note Aggiuntive

### Pubblico Target

- Principianti completi nello sviluppo web
- Studenti e autodidatti
- Insegnanti che usano il curriculum in aula
- Contenuti progettati per accessibilità e apprendimento graduale

### Filosofia Educativa

- Approccio di apprendimento basato su progetti
- Controlli frequenti della conoscenza (quiz)
- Esercizi pratici di coding
- Esempi di applicazioni reali
- Focus sui fondamenti prima dei framework

### Manutenzione del Repository

- Comunità attiva di studenti e contribuenti
- Aggiornamenti regolari di dipendenze e contenuti
- Segnalazioni e discussioni seguite dai mantenitori
- Aggiornamenti delle traduzioni automatizzati tramite GitHub Actions

### Risorse Correlate

- [Moduli Microsoft Learn](https://docs.microsoft.com/learn/)
- [Risorse Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) consigliato per gli studenti
- Corsi aggiuntivi: curricula di AI Generativa, Data Science, ML, IoT disponibili

### Lavorare con Progetti Specifici

Per istruzioni dettagliate su progetti individuali, consulta i file README in:
- `quiz-app/README.md` - Applicazione quiz Vue 3
- `7-bank-project/README.md` - Applicazione bancaria con autenticazione
- `5-browser-extension/README.md` - Sviluppo estensioni browser
- `6-space-game/README.md` - Sviluppo gioco canvas
- `9-chat-project/README.md` - Progetto assistente chat AI

### Struttura Monorepo

Sebbene non sia un monorepo tradizionale, questo repository contiene più progetti indipendenti:
- Ogni lezione è autonoma
- I progetti non condividono dipendenze
- Lavora su singoli progetti senza influenzare gli altri
- Clona l’intero repository per l’esperienza completa del curriculum

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo a garantire l’accuratezza, si prega di considerare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua natale deve essere considerato la fonte autorevole. Per informazioni critiche si consiglia una traduzione professionale effettuata da un essere umano. Non ci assumiamo alcuna responsabilità per eventuali malintesi o interpretazioni errate derivanti dall’uso di questa traduzione.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->