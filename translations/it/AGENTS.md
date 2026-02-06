# AGENTS.md

## Panoramica del Progetto

Questo è un repository di curriculum educativo per insegnare le basi dello sviluppo web ai principianti. Il curriculum è un corso completo di 12 settimane sviluppato dai Microsoft Cloud Advocates, che comprende 24 lezioni pratiche su JavaScript, CSS e HTML.

### Componenti Chiave

- **Contenuti Educativi**: 24 lezioni strutturate organizzate in moduli basati su progetti
- **Progetti Pratici**: Terrarium, Gioco di Digitazione, Estensione Browser, Gioco Spaziale, App Bancaria, Editor di Codice e Assistente Chat AI
- **Quiz Interattivi**: 48 quiz con 3 domande ciascuno (valutazioni pre/post-lezione)
- **Supporto Multilingue**: Traduzioni automatiche in oltre 50 lingue tramite GitHub Actions
- **Tecnologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (per progetti AI)

### Architettura

- Repository educativo con struttura basata sulle lezioni
- Ogni cartella di lezione contiene README, esempi di codice e soluzioni
- Progetti indipendenti in directory separate (quiz-app, vari progetti di lezione)
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

### Per i Collaboratori di Contenuto

1. **Forka il repository** nel tuo account GitHub
2. **Clona il fork** localmente
3. **Crea un nuovo branch** per le tue modifiche
4. Apporta modifiche ai contenuti delle lezioni o agli esempi di codice
5. Testa eventuali cambiamenti di codice nelle directory di progetto pertinenti
6. Invia pull request seguendo le linee guida di contributo

### Per gli Studenti

1. Forka o clona il repository
2. Naviga nelle directory delle lezioni in sequenza
3. Leggi i file README di ogni lezione
4. Completa i quiz pre-lezione su https://ff-quizzes.netlify.app/web/
5. Lavora sugli esempi di codice nelle cartelle delle lezioni
6. Completa compiti e sfide
7. Svolgi i quiz post-lezione

### Sviluppo Live

- **Documentazione**: Esegui `docsify serve` nella root (porta 3000)
- **Quiz App**: Esegui `npm run dev` nella cartella quiz-app
- **Progetti**: Usa l’estensione Live Server di VS Code per i progetti HTML
- **Progetti API**: Esegui `npm start` nelle rispettive directory API

## Istruzioni per i Test

### Test Quiz App

```bash
cd quiz-app
npm run lint       # Controlla i problemi di stile del codice
npm run build      # Verifica che la compilazione abbia successo
```

### Test API Bancaria

```bash
cd 7-bank-project/api
npm run lint       # Controlla la presenza di problemi di stile del codice
node server.js     # Verifica che il server si avvii senza errori
```

### Approccio Generale ai Test

- Questo è un repository educativo senza test automatizzati completi
- I test manuali si concentrano su:
  - Esempi di codice eseguiti senza errori
  - Link nella documentazione funzionanti correttamente
  - Compilazioni di progetto completate con successo
  - Esempi conformi alle migliori pratiche

### Controlli Pre-Invio

- Esegui `npm run lint` nelle directory con package.json
- Verifica che i link markdown siano validi
- Testa gli esempi di codice in browser o Node.js
- Assicurati che le traduzioni mantengano la struttura corretta

## Linee Guida per lo Stile del Codice

### JavaScript

- Usa sintassi moderna ES6+
- Segui le configurazioni ESLint standard fornite nei progetti
- Usa nomi di variabili e funzioni significativi per chiarezza educativa
- Aggiungi commenti che spiegano i concetti per gli studenti
- Formattta con Prettier dove configurato

### HTML/CSS

- Elementi semantici HTML5
- Principi di design responsivo
- Convenzioni di nomi di classi chiare
- Commenti che spiegano le tecniche CSS per gli studenti

### Python

- Linee guida di stile PEP 8
- Esempi di codice chiari ed educativi
- Indicazioni di tipo (type hints) dove utili per l’apprendimento

### Documentazione Markdown

- Gerarchia chiara delle intestazioni
- Blocchi di codice con specifica del linguaggio
- Link a risorse aggiuntive
- Screenshot e immagini nelle cartelle `images/`
- Testo alternativo per le immagini a scopo di accessibilità

### Organizzazione dei File

- Lezioni numerate in modo sequenziale (1-getting-started-lessons, 2-js-basics, ecc.)
- Ogni progetto ha cartelle `solution/` e spesso `start/` o `your-work/`
- Immagini conservate nelle cartelle `images/` specifiche delle lezioni
- Traduzioni nella struttura `translations/{language-code}/`

## Build e Deployment

### Deployment Quiz App (Azure Static Web Apps)

La quiz-app è configurata per il deployment su Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Crea la cartella dist/
# Distribuisce tramite il flusso di lavoro GitHub Actions al push su main
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

### Build Specifico per Progetto

Ogni directory di progetto può avere il proprio processo di build:
- Progetti Vue: `npm run build` crea bundle di produzione
- Progetti statici: nessun passaggio di build, servire i file direttamente

## Linee Guida per le Pull Request

### Formato del Titolo

Usa titoli chiari e descrittivi che indichino l’area di modifica:
- `[Quiz-app] Aggiungi nuovo quiz per la lezione X`
- `[Lesson-3] Correggi errore nel progetto terrarium`
- `[Translation] Aggiungi traduzione spagnola per la lezione 5`
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

4. **Revisione Contenuti**:
   - Controlla ortografia e grammatica
   - Verifica che gli esempi di codice siano corretti ed educativi
   - Assicurati che le traduzioni mantengano il significato originale

### Requisiti di Contributo

- Accetta il Microsoft CLA (verifica automatica alla prima PR)
- Segui il [Codice di Condotta Microsoft Open Source](https://opensource.microsoft.com/codeofconduct/)
- Vedi [CONTRIBUTING.md](./CONTRIBUTING.md) per dettagli
- Riferisci i numeri delle issue nella descrizione della PR se necessario

### Processo di Revisione

- Le PR sono revisionate da manutentori e comunità
- La chiarezza educativa è prioritaria
- Gli esempi di codice devono seguire le migliori pratiche attuali
- Le traduzioni sono verificate per accuratezza e idoneità culturale

## Sistema di Traduzione

### Traduzione Automatica

- Usa GitHub Actions con workflow co-op-translator
- Traduce automaticamente in oltre 50 lingue
- File sorgente nelle directory principali
- File tradotti in `translations/{language-code}/`

### Aggiunta di Miglioramenti Manuali alla Traduzione

1. Trova il file in `translations/{language-code}/`
2. Apporta miglioramenti mantenendo la struttura
3. Assicurati che gli esempi di codice restino funzionanti
4. Testa eventuali contenuti quiz localizzati

### Metadata di Traduzione

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

## Debugging e Risoluzione Problemi

### Problemi Comuni

**L’app quiz non si avvia**:
- Controlla versione Node.js (consigliata v14+)
- Elimina `node_modules` e `package-lock.json`, esegui di nuovo `npm install`
- Controlla conflitti di porta (default: Vite usa porta 5173)

**Server API non si avvia**:
- Verifica che la versione di Node.js sia minima (node >=10)
- Controlla che la porta non sia già in uso
- Assicurati che tutte le dipendenze siano installate con `npm install`

**Estensione browser non si carica**:
- Verifica che manifest.json sia formattato correttamente
- Controlla errori nella console del browser
- Segui istruzioni specifiche per l’installazione dell’estensione nel browser

**Problemi con progetto chat Python**:
- Assicurati che il pacchetto OpenAI sia installato: `pip install openai`
- Verifica che la variabile ambiente GITHUB_TOKEN sia impostata
- Controlla i permessi di accesso ai GitHub Models

**Docsify non serve la documentazione**:
- Installa docsify-cli globalmente: `npm install -g docsify-cli`
- Esegui dalla directory radice del repository
- Verifica che `docs/_sidebar.md` esista

### Consigli per l’Ambiente di Sviluppo

- Usa VS Code con l’estensione Live Server per progetti HTML
- Installa le estensioni ESLint e Prettier per formato coerente
- Usa DevTools del browser per il debug di JavaScript
- Per progetti Vue, installa l’estensione Vue DevTools per browser

### Considerazioni sulle Prestazioni

- L’elevato numero di file tradotti (50+ lingue) fa sì che i clone completi siano grandi
- Usa clone shallow se lavori solo su contenuti: `git clone --depth 1`
- Escludi le traduzioni dalle ricerche se lavori sul contenuto inglese
- I processi di build possono essere lenti al primo avvio (npm install, build Vite)

## Considerazioni di Sicurezza

### Variabili d’Ambiente

- Le chiavi API non devono mai essere impegnate nel repository
- Usa file `.env` (già in `.gitignore`)
- Documenta le variabili d’ambiente richieste nei README dei progetti

### Progetti Python

- Usa ambienti virtuali: `python -m venv venv`
- Mantieni le dipendenze aggiornate
- I token GitHub devono avere permessi minimi necessari

### Accesso ai GitHub Models

- Sono necessari Personal Access Token (PAT) per i GitHub Models
- I token devono essere salvati come variabili d’ambiente
- Mai impegnare token o credenziali

## Note Aggiuntive

### Pubblico Target

- Principianti completi nello sviluppo web
- Studenti e autodidatti
- Insegnanti che usano il curriculum in classe
- Contenuti progettati per accessibilità e sviluppo graduale delle competenze

### Filosofia Educativa

- Approccio di apprendimento basato su progetti
- Verifiche frequenti della conoscenza (quiz)
- Esercizi pratici di coding
- Esempi di applicazioni reali
- Focus sulle basi prima dei framework

### Manutenzione del Repository

- Comunità attiva di studenti e collaboratori
- Aggiornamenti regolari di dipendenze e contenuti
- Monitoraggio di issue e discussioni da parte dei manutentori
- Aggiornamenti di traduzione automatizzati tramite GitHub Actions

### Risorse Correlate

- [Moduli Microsoft Learn](https://docs.microsoft.com/learn/)
- [Risorse Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) consigliato per gli studenti
- Corsi aggiuntivi: curricula di AI generativa, Data Science, ML, IoT disponibili

### Lavorare con Progetti Specifici

Per istruzioni dettagliate su singoli progetti, consulta i file README in:
- `quiz-app/README.md` - Applicazione quiz Vue 3
- `7-bank-project/README.md` - Applicazione bancaria con autenticazione
- `5-browser-extension/README.md` - Sviluppo estensione browser
- `6-space-game/README.md` - Sviluppo gioco basato su canvas
- `9-chat-project/README.md` - Progetto assistente chat AI

### Struttura Monorepo

Pur non essendo un monorepo tradizionale, questo repository contiene molti progetti indipendenti:
- Ogni lezione è autonoma
- I progetti non condividono dipendenze
- Lavora su singoli progetti senza influenzare gli altri
- Clona l’intero repo per l’esperienza completa del curriculum

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Pur impegnandoci per garantire l’accuratezza, si prega di notare che le traduzioni automatizzate possono contenere errori o inesattezze. Il documento originale nella sua lingua nativa deve essere considerato la fonte autorevole. Per informazioni critiche, si consiglia una traduzione professionale eseguita da un umano. Non ci assumiamo alcuna responsabilità per eventuali malintesi o interpretazioni errate derivanti dall’uso di questa traduzione.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->