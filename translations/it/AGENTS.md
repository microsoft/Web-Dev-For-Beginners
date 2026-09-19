# AGENTS.md

## Panoramica del Progetto

Questo è un repository di curriculum educativo per l'insegnamento delle basi dello sviluppo web ai principianti. Il curriculum è un corso completo di 12 settimane sviluppato dai Microsoft Cloud Advocates, che include 24 lezioni pratiche su JavaScript, CSS e HTML.

### Componenti Chiave

- **Contenuto Educativo**: 24 lezioni strutturate organizzate in moduli basati su progetti
- **Progetti Pratici**: Terrarium, Gioco di Digitazione, Estensione Browser, Gioco Spaziale, App Bancaria, Editor di Codice e Assistente Chat AI
- **Quiz Interattivi**: 48 quiz con 3 domande ciascuno (valutazioni pre/post-lezione)
- **Supporto Multilingue**: Traduzioni automatiche per oltre 50 lingue tramite GitHub Actions
- **Tecnologie**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (per progetti AI)

### Architettura

- Repository educativo con struttura basata sulle lezioni
- Ogni cartella di lezione contiene README, esempi di codice e soluzioni
- Progetti standalone in directory separate (quiz-app, vari progetti di lezione)
- Sistema di traduzione tramite GitHub Actions (co-op-translator)
- Documentazione servita tramite Docsify e disponibile in PDF

## Comandi di Configurazione

Questo repository è principalmente per il consumo di contenuti educativi. Per lavorare su progetti specifici:

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
npm run format     # Formatta con Prettier
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

## Flusso di Lavoro di Sviluppo

### Per i Collaboratori di Contenuti

1. **Effettua il fork** del repository nel tuo account GitHub
2. **Clona il tuo fork** localmente
3. **Crea un nuovo branch** per le tue modifiche
4. Modifica il contenuto delle lezioni o gli esempi di codice
5. Testa le modifiche al codice nelle directory dei progetti rilevanti
6. Invia pull request seguendo le linee guida di contributo

### Per gli Studenti

1. Fai fork o clona il repository
2. Naviga sequenzialmente nelle directory delle lezioni
3. Leggi i file README di ogni lezione
4. Completa i quiz pre-lezione su https://ff-quizzes.netlify.app/web/
5. Lavora sugli esempi di codice nelle cartelle delle lezioni
6. Completa compiti e sfide
7. Esegui i quiz post-lezione

### Sviluppo in Tempo Reale

- **Documentazione**: Esegui `docsify serve` nella root (porta 3000)
- **Quiz App**: Esegui `npm run dev` nella directory quiz-app
- **Progetti**: Usa l'estensione Live Server di VS Code per progetti HTML
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
- Il testing manuale si concentra su:
  - Esecuzione senza errori degli esempi di codice
  - Correttezza dei link nella documentazione
  - Completamento con successo delle build dei progetti
  - Esempi che seguono le best practice

### Controlli Pre-Invio

- Esegui `npm run lint` nelle directory con package.json
- Verifica che i link markdown siano validi
- Testa gli esempi di codice in browser o Node.js
- Controlla che le traduzioni mantengano la struttura corretta

## Linee Guida sullo Stile del Codice

### JavaScript

- Usa sintassi moderna ES6+
- Segui le configurazioni standard ESLint fornite nei progetti
- Usa nomi di variabili e funzioni significativi per chiarezza educativa
- Aggiungi commenti per spiegare concetti agli studenti
- Formattta usando Prettier dove configurato

### HTML/CSS

- Elementi semantici HTML5
- Principi di design responsive
- Convenzioni chiare di denominazione delle classi
- Commenti che spiegano tecniche CSS per gli studenti

### Python

- Linee guida di stile PEP 8
- Esempi di codice chiari ed educativi
- Suggerimenti di tipo dove utili per l’apprendimento

### Documentazione Markdown

- Gerarchia chiara delle intestazioni
- Blocchi di codice con specifica del linguaggio
- Link a risorse aggiuntive
- Screenshot e immagini nelle cartelle `images/`
- Testo alternativo per le immagini per accessibilità

### Organizzazione dei File

- Lezioni numerate sequenzialmente (1-getting-started-lessons, 2-js-basics, ecc.)
- Ogni progetto ha directory `solution/` e spesso anche `start/` o `your-work/`
- Immagini archiviate nelle cartelle `images/` specifiche di ogni lezione
- Traduzioni nella struttura `translations/{language-code}/`

## Build e Deploy

### Distribuzione Quiz App (Azure Static Web Apps)

La quiz-app è configurata per il deployment su Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Crea la cartella dist/
# Distribuisce tramite il flusso di lavoro GitHub Actions al push su main
```

Configurazione Azure Static Web Apps:
- **Posizione dell’app**: `/quiz-app`
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

### Build Specifici dei Progetti

Ogni directory progetto può avere un proprio processo di build:
- Progetti Vue: `npm run build` crea bundle per produzione
- Progetti statici: Nessun passaggio build, i file sono serviti direttamente

## Linee Guida per le Pull Request

### Formato del Titolo

Usa titoli chiari e descrittivi che indichino l’area di modifica:
- `[Quiz-app] Aggiungi nuovo quiz per la lezione X`
- `[Lesson-3] Correzione refusi nel progetto terrarium`
- `[Translation] Aggiunta traduzione spagnola per la lezione 5`
- `[Docs] Aggiornamento istruzioni di configurazione`

### Controlli Richiesti

Prima di inviare una PR:

1. **Qualità del Codice**:
   - Esegui `npm run lint` nelle directory progetto interessate
   - Risolvi tutti gli errori e avvertimenti di lint

2. **Verifica Build**:
   - Esegui `npm run build` se applicabile
   - Assicurati che non ci siano errori di build

3. **Validazione Link**:
   - Testa tutti i link markdown
   - Verifica che i riferimenti alle immagini funzionino

4. **Revisione del Contenuto**:
   - Correggi ortografia e grammatica
   - Assicurati che gli esempi di codice siano corretti ed educativi
   - Verifica che le traduzioni mantengano il significato originale

### Requisiti per il Contributo

- Accettare il CLA Microsoft (controllo automatico alla prima PR)
- Seguire il [Codice di Condotta Open Source Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Consultare [CONTRIBUTING.md](./CONTRIBUTING.md) per linee guida dettagliate
- Fare riferimento ai numeri degli issue nella descrizione della PR se applicabile

### Processo di Revisione

- Le PR sono revisionate da mantenitori e comunità
- La chiarezza educativa è prioritaria
- Gli esempi di codice devono seguire le best practice attuali
- Le traduzioni sono revisionate per precisione e adeguatezza culturale

## Sistema di Traduzione

### Traduzione Automatica

- Usa GitHub Actions con il workflow co-op-translator
- Traduce automaticamente in oltre 50 lingue
- File sorgente nelle directory principali
- File tradotti in `translations/{language-code}/`

### Aggiunta di Miglioramenti Manuali alle Traduzioni

1. Individua il file in `translations/{language-code}/`
2. Effettua miglioramenti preservando la struttura
3. Assicurati che gli esempi di codice rimangano funzionanti
4. Testa eventuale contenuto quiz localizzato

### Metadata delle Traduzioni

I file tradotti includono header di metadata:
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
- Verifica versione Node.js (consigliato v14+)
- Elimina `node_modules` e `package-lock.json`, esegui di nuovo `npm install`
- Controlla conflitti di porta (default: Vite usa porta 5173)

**Server API non si avvia**:
- Verifica versione Node.js minima (node >=10)
- Controlla che la porta non sia già utilizzata
- Assicurati che tutte le dipendenze siano installate con `npm install`

**Estensione browser non si carica**:
- Verifica che manifest.json sia formattato correttamente
- Controlla la console del browser per errori
- Segui le istruzioni specifiche di installazione per il browser

**Problemi progetto chat Python**:
- Assicurati che il pacchetto OpenAI sia installato: `pip install openai`
- Verifica che la variabile ambiente GITHUB_TOKEN sia impostata
- Controlla i permessi d'accesso ai modelli GitHub

**Docsify non serve la documentazione**:
- Installa docsify-cli globalmente: `npm install -g docsify-cli`
- Avvia dal root del repository
- Verifica che `docs/_sidebar.md` esista

### Consigli per l’Ambiente di Sviluppo

- Usa VS Code con l’estensione Live Server per i progetti HTML
- Installa le estensioni ESLint e Prettier per formattazione coerente
- Usa DevTools del browser per il debug di JavaScript
- Per progetti Vue, installa l’estensione Vue DevTools per browser

### Considerazioni sulle Prestazioni

- L’alto numero di file tradotti (oltre 50 lingue) rende le clone complete molto grandi
- Usa clone superficiale se lavori solo sul contenuto: `git clone --depth 1`
- Escludi le traduzioni dalle ricerche quando lavori su contenuti in inglese
- I processi di build possono essere lenti al primo avvio (npm install, build Vite)

## Considerazioni di Sicurezza

### Variabili d’Ambiente

- Le chiavi API non devono mai essere committate nel repository
- Usa file `.env` (già presenti in `.gitignore`)
- Documenta le variabili ambiente richieste nei README dei progetti

### Progetti Python

- Usa ambienti virtuali: `python -m venv venv`
- Mantieni aggiornate le dipendenze
- I token GitHub devono avere i permessi minimi necessari

### Accesso ai Modelli GitHub

- Sono richiesti Personal Access Token (PAT) per i modelli GitHub
- I token devono essere conservati come variabili ambiente
- Mai committare token o credenziali

## Note Aggiuntive

### Pubblico Target

- Principianti completi nello sviluppo web
- Studenti e autoapprendenti
- Insegnanti che usano il curriculum in aula
- I contenuti sono progettati per accessibilità e sviluppo graduale delle competenze

### Filosofia Educativa

- Approccio di apprendimento basato su progetti
- Controlli di conoscenza frequenti (quiz)
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

Per istruzioni dettagliate sui singoli progetti, riferirsi ai file README in:
- `quiz-app/README.md` - Applicazione quiz Vue 3
- `7-bank-project/README.md` - Applicazione bancaria con autenticazione
- `5-browser-extension/README.md` - Sviluppo estensione browser
- `6-space-game/README.md` - Sviluppo gioco con canvas
- `9-chat-project/README.md` - Progetto assistente chat AI

### Struttura Monorepo

Pur non essendo un monorepo tradizionale, questo repository contiene molteplici progetti indipendenti:
- Ogni lezione è autonoma
- I progetti non condividono dipendenze
- Lavorare su progetti individuali senza influenzare gli altri
- Clonare l’intero repo per l’esperienza completa del curriculum

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Dichiarazione di esclusione di responsabilità**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Pur impegnandoci per l’accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa deve essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un umano. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall’uso di questa traduzione.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->