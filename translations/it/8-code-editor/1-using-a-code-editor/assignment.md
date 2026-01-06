<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "effe56ba51c38d7bdfad1ea38288666b",
  "translation_date": "2025-10-22T23:21:58+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/assignment.md",
  "language_code": "it"
}
-->
# Crea un sito web per il curriculum utilizzando VSCode.dev

Trasforma le tue prospettive di carriera creando un sito web professionale per il tuo curriculum che metta in mostra le tue competenze e la tua esperienza in un formato interattivo e moderno. Invece di inviare PDF tradizionali, immagina di fornire ai recruiter un sito web elegante e reattivo che dimostri sia le tue qualifiche che le tue capacità di sviluppo web.

Questo esercizio pratico ti permetterà di mettere in pratica tutte le tue competenze su VSCode.dev, creando qualcosa di veramente utile per la tua carriera. Vivrai l'intero flusso di lavoro dello sviluppo web – dalla creazione del repository al deployment – tutto direttamente dal tuo browser.

Completando questo progetto, avrai una presenza online professionale che potrai facilmente condividere con potenziali datori di lavoro, aggiornare man mano che le tue competenze crescono e personalizzare per riflettere il tuo brand personale. Questo è esattamente il tipo di progetto pratico che dimostra competenze reali nello sviluppo web.

## Obiettivi di apprendimento

Dopo aver completato questo esercizio, sarai in grado di:

- **Creare** e gestire un progetto completo di sviluppo web utilizzando VSCode.dev
- **Strutturare** un sito web professionale utilizzando elementi HTML semantici
- **Stilizzare** layout reattivi con tecniche moderne di CSS
- **Implementare** funzionalità interattive utilizzando tecnologie web di base
- **Pubblicare** un sito web live accessibile tramite un URL condivisibile
- **Dimostrare** le migliori pratiche di controllo di versione durante il processo di sviluppo

## Prerequisiti

Prima di iniziare questo esercizio, assicurati di avere:

- Un account GitHub (creane uno su [github.com](https://github.com/) se necessario)
- Completato la lezione su VSCode.dev che copre la navigazione dell'interfaccia e le operazioni di base
- Una comprensione di base della struttura HTML e dei concetti di stilizzazione CSS

## Configurazione del progetto e creazione del repository

Iniziamo impostando le basi del tuo progetto. Questo processo rispecchia i flussi di lavoro di sviluppo reali, in cui i progetti iniziano con una corretta inizializzazione del repository e una pianificazione della struttura.

### Passo 1: Crea il tuo repository GitHub

Impostare un repository dedicato garantisce che il tuo progetto sia organizzato correttamente e controllato in versione fin dall'inizio.

1. **Vai** su [GitHub.com](https://github.com) e accedi al tuo account
2. **Clicca** sul pulsante verde "New" o sull'icona "+" nell'angolo in alto a destra
3. **Dai un nome** al tuo repository `my-resume` (o scegli un nome personalizzato come `mario-rossi-resume`)
4. **Aggiungi** una breve descrizione: "Sito web professionale per il curriculum costruito con HTML e CSS"
5. **Seleziona** "Public" per rendere il tuo curriculum accessibile ai potenziali datori di lavoro
6. **Spunta** "Add a README file" per creare una descrizione iniziale del progetto
7. **Clicca** su "Create repository" per completare la configurazione

> 💡 **Suggerimento per il nome del repository**: Usa nomi descrittivi e professionali che indicano chiaramente lo scopo del progetto. Questo aiuta quando lo condividi con i datori di lavoro o durante le revisioni del portfolio.

### Passo 2: Inizializza la struttura del progetto

Poiché VSCode.dev richiede almeno un file per aprire un repository, creeremo il nostro file HTML principale direttamente su GitHub prima di passare all'editor web.

1. **Clicca** sul link "creating a new file" nel tuo nuovo repository
2. **Digita** `index.html` come nome del file
3. **Aggiungi** questa struttura HTML iniziale:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Professional Resume</title>
</head>
<body>
    <h1>Your Name</h1>
    <p>Professional Resume Website</p>
</body>
</html>
```

4. **Scrivi** un messaggio di commit: "Aggiungi struttura HTML iniziale"
5. **Clicca** su "Commit new file" per salvare le modifiche

![Creazione del file iniziale su GitHub](../../../../translated_images/new-file-github.com.c886796d800e8056.it.png)

**Ecco cosa realizza questa configurazione iniziale:**
- **Stabilisce** una corretta struttura del documento HTML5 con elementi semantici
- **Include** il meta tag viewport per la compatibilità con il design reattivo
- **Imposta** un titolo descrittivo della pagina che appare nelle schede del browser
- **Crea** la base per l'organizzazione professionale dei contenuti

## Lavorare su VSCode.dev

Ora che le basi del tuo repository sono state stabilite, passiamo a VSCode.dev per il lavoro principale di sviluppo. Questo editor basato sul web fornisce tutti gli strumenti necessari per lo sviluppo web professionale.

### Passo 3: Apri il tuo progetto su VSCode.dev

1. **Vai** su [vscode.dev](https://vscode.dev) in una nuova scheda del browser
2. **Clicca** su "Open Remote Repository" nella schermata di benvenuto
3. **Copia** l'URL del tuo repository da GitHub e incollalo nel campo di input

   Formato: `https://github.com/tuo-username/my-resume`
   
   *Sostituisci `tuo-username` con il tuo vero username GitHub*

4. **Premi** Invio per caricare il tuo progetto

✅ **Indicatore di successo**: Dovresti vedere i file del tuo progetto nella barra laterale Explorer e `index.html` disponibile per la modifica nell'area principale dell'editor.

![Progetto caricato su VSCode.dev](../../../../translated_images/project-on-vscode.dev.e79815a9a95ee7fe.it.png)

**Cosa vedrai nell'interfaccia:**
- **Barra laterale Explorer**: **Mostra** i file e la struttura delle cartelle del tuo repository
- **Area dell'editor**: **Mostra** il contenuto dei file selezionati per la modifica
- **Barra delle attività**: **Fornisce** accesso a funzionalità come Source Control ed Extensions
- **Barra di stato**: **Indica** lo stato della connessione e le informazioni sul branch corrente

### Passo 4: Crea il contenuto del tuo curriculum

Sostituisci il contenuto segnaposto in `index.html` con una struttura completa del curriculum. Questo HTML fornisce la base per una presentazione professionale delle tue qualifiche.

<details>
<summary><b>Struttura completa del curriculum HTML</b></summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <title>Your Name - Professional Resume</title>
</head>
<body>
    <header id="header">
        <h1>Your Full Name</h1>
        <hr>
        <p class="role">Your Professional Title</p>
        <hr>
    </header>
    
    <main>
        <article id="mainLeft">
            <section>
                <h2>CONTACT</h2>
                <p>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <a href="mailto:your.email@domain.com">your.email@domain.com</a>
                </p>
                <p>
                    <i class="fab fa-github" aria-hidden="true"></i>
                    <a href="https://github.com/your-username">github.com/your-username</a>
                </p>
                <p>
                    <i class="fab fa-linkedin" aria-hidden="true"></i>
                    <a href="https://linkedin.com/in/your-profile">linkedin.com/in/your-profile</a>
                </p>
            </section>
            
            <section>
                <h2>SKILLS</h2>
                <ul>
                    <li>HTML5 & CSS3</li>
                    <li>JavaScript (ES6+)</li>
                    <li>Responsive Web Design</li>
                    <li>Version Control (Git)</li>
                    <li>Problem Solving</li>
                </ul>
            </section>
            
            <section>
                <h2>EDUCATION</h2>
                <h3>Your Degree or Certification</h3>
                <p>Institution Name</p>
                <p>Start Date - End Date</p>
            </section>
        </article>
        
        <article id="mainRight">
            <section>
                <h2>ABOUT</h2>
                <p>Write a compelling summary that highlights your passion for web development, key achievements, and career goals. This section should give employers insight into your personality and professional approach.</p>
            </section>
            
            <section>
                <h2>WORK EXPERIENCE</h2>
                <div class="job">
                    <h3>Job Title</h3>
                    <p class="company">Company Name | Start Date – End Date</p>
                    <ul>
                        <li>Describe a key accomplishment or responsibility</li>
                        <li>Highlight specific skills or technologies used</li>
                        <li>Quantify impact where possible (e.g., "Improved efficiency by 25%")</li>
                    </ul>
                </div>
                
                <div class="job">
                    <h3>Previous Job Title</h3>
                    <p class="company">Previous Company | Start Date – End Date</p>
                    <ul>
                        <li>Focus on transferable skills and achievements</li>
                        <li>Demonstrate growth and learning progression</li>
                        <li>Include any leadership or collaboration experiences</li>
                    </ul>
                </div>
            </section>
            
            <section>
                <h2>PROJECTS</h2>
                <div class="project">
                    <h3>Project Name</h3>
                    <p>Brief description of what the project accomplishes and technologies used.</p>
                    <a href="#" target="_blank">View Project</a>
                </div>
            </section>
        </article>
    </main>
</body>
</html>
```
</details>

**Linee guida per la personalizzazione:**
- **Sostituisci** tutto il testo segnaposto con le tue informazioni reali
- **Adatta** le sezioni in base al tuo livello di esperienza e al tuo focus professionale
- **Aggiungi** o rimuovi sezioni secondo necessità (es. Certificazioni, Volontariato, Lingue)
- **Includi** link ai tuoi profili e progetti reali

### Passo 5: Crea file di supporto

I siti web professionali richiedono strutture di file organizzate. Crea il foglio di stile CSS e i file di configurazione necessari per un progetto completo.

1. **Passa il mouse** sopra il nome della cartella del tuo progetto nella barra laterale Explorer
2. **Clicca** sull'icona "New File" (📄+) che appare
3. **Crea** questi file uno alla volta:
   - `style.css` (per stilizzazione e layout)
   - `codeswing.json` (per la configurazione dell'estensione di anteprima)

**Creazione del file CSS (`style.css`):**

<details>
<summary><b>Stilizzazione CSS professionale</b></summary>

```css
/* Modern Resume Styling */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    color: #333;
    background-color: #f9f9f9;
}

/* Header Styling */
header {
    text-align: center;
    margin-bottom: 3em;
    padding: 2em;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 3em;
    letter-spacing: 0.1em;
    margin-bottom: 0.2em;
    font-weight: 300;
}

.role {
    font-size: 1.3em;
    font-weight: 300;
    margin: 1em 0;
}

/* Main Content Layout */
main {
    display: grid;
    grid-template-columns: 35% 65%;
    gap: 3em;
    margin-top: 3em;
    background: white;
    padding: 2em;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Typography */
h2 {
    font-size: 1.4em;
    font-weight: 600;
    margin-bottom: 1em;
    color: #667eea;
    border-bottom: 2px solid #667eea;
    padding-bottom: 0.3em;
}

h3 {
    font-size: 1.1em;
    font-weight: 600;
    margin-bottom: 0.5em;
    color: #444;
}

/* Section Styling */
section {
    margin-bottom: 2.5em;
}

#mainLeft {
    border-right: 1px solid #e0e0e0;
    padding-right: 2em;
}

/* Contact Links */
section a {
    color: #667eea;
    text-decoration: none;
    transition: color 0.3s ease;
}

section a:hover {
    color: #764ba2;
    text-decoration: underline;
}

/* Icons */
i {
    margin-right: 0.8em;
    width: 20px;
    text-align: center;
    color: #667eea;
}

/* Lists */
ul {
    list-style: none;
    padding-left: 0;
}

li {
    margin: 0.5em 0;
    padding: 0.3em 0;
    position: relative;
}

li:before {
    content: "▸";
    color: #667eea;
    margin-right: 0.5em;
}

/* Work Experience */
.job, .project {
    margin-bottom: 2em;
    padding-bottom: 1.5em;
    border-bottom: 1px solid #f0f0f0;
}

.company {
    font-style: italic;
    color: #666;
    margin-bottom: 0.5em;
}

/* Responsive Design */
@media (max-width: 768px) {
    main {
        grid-template-columns: 1fr;
        gap: 2em;
    }
    
    #mainLeft {
        border-right: none;
        border-bottom: 1px solid #e0e0e0;
        padding-right: 0;
        padding-bottom: 2em;
    }
    
    h1 {
        font-size: 2.2em;
    }
    
    body {
        padding: 10px;
    }
}

/* Print Styles */
@media print {
    body {
        background: white;
        color: black;
        font-size: 12pt;
    }
    
    header {
        background: none;
        color: black;
        box-shadow: none;
    }
    
    main {
        box-shadow: none;
    }
}
```
</details>

**Creazione del file di configurazione (`codeswing.json`):**

```json
{
    "scripts": [],
    "styles": []
}
```

**Comprensione delle funzionalità CSS:**
- **Utilizza** CSS Grid per una struttura di layout reattiva e professionale
- **Implementa** schemi di colori moderni con intestazioni a gradiente
- **Include** effetti hover e transizioni fluide per l'interattività
- **Fornisce** un design reattivo che funziona su tutte le dimensioni dei dispositivi
- **Aggiunge** stili compatibili con la stampa per la generazione di PDF

### Passo 6: Installa e configura le estensioni

Le estensioni migliorano la tua esperienza di sviluppo fornendo funzionalità di anteprima live e strumenti di flusso di lavoro avanzati. L'estensione CodeSwing è particolarmente utile per i progetti di sviluppo web.

**Installazione dell'estensione CodeSwing:**

1. **Clicca** sull'icona Extensions (🧩) nella barra delle attività
2. **Cerca** "CodeSwing" nella casella di ricerca del marketplace
3. **Seleziona** l'estensione CodeSwing dai risultati della ricerca
4. **Clicca** sul pulsante blu "Install"

![Installazione dell'estensione CodeSwing](../../../../8-code-editor/images/install-extension.gif)

**Cosa offre CodeSwing:**
- **Abilita** l'anteprima live del tuo sito web mentre lo modifichi
- **Mostra** le modifiche in tempo reale senza necessità di aggiornamento manuale
- **Supporta** tipi di file multipli, inclusi HTML, CSS e JavaScript
- **Fornisce** un'esperienza di ambiente di sviluppo integrato

**Risultati immediati dopo l'installazione:**
Una volta installato CodeSwing, vedrai un'anteprima live del tuo sito web per il curriculum apparire nell'editor. Questo ti permette di vedere esattamente come appare il tuo sito mentre apporti modifiche.

![Estensione CodeSwing che mostra l'anteprima live](../../../../translated_images/after-codeswing-extension-pb.0ebddddcf73b5509.it.png)

**Comprensione dell'interfaccia migliorata:**
- **Vista divisa**: **Mostra** il tuo codice da un lato e l'anteprima live dall'altro
- **Aggiornamenti in tempo reale**: **Riflette** le modifiche immediatamente mentre scrivi
- **Anteprima interattiva**: **Permette** di testare link e interazioni
- **Simulazione mobile**: **Fornisce** capacità di test del design reattivo

### Passo 7: Controllo di versione e pubblicazione

Ora che il tuo sito web per il curriculum è completo, utilizza Git per salvare il tuo lavoro e renderlo disponibile online.

**Commettere le modifiche:**

1. **Clicca** sull'icona Source Control (🌿) nella barra delle attività
2. **Rivedi** tutti i file che hai creato e modificato nella sezione "Changes"
3. **Stagia** le modifiche cliccando sull'icona "+" accanto a ogni file
4. **Scrivi** un messaggio di commit descrittivo, come:
   - "Aggiungi sito web completo per il curriculum con design reattivo"
   - "Implementa stilizzazione professionale e struttura dei contenuti"
5. **Clicca** sul segno di spunta (✓) per commettere e pushare le modifiche

**Esempi di messaggi di commit efficaci:**
- "Aggiungi contenuto e stilizzazione professionale per il curriculum"
- "Implementa design reattivo per compatibilità mobile"
- "Aggiorna informazioni di contatto e link ai progetti"

> 💡 **Suggerimento professionale**: Buoni messaggi di commit aiutano a tracciare l'evoluzione del tuo progetto e dimostrano attenzione ai dettagli – qualità che i datori di lavoro apprezzano.

**Accesso al tuo sito pubblicato:**
Una volta commesso, puoi tornare al tuo repository GitHub utilizzando il menu hamburger (☰) nell'angolo in alto a sinistra. Il tuo sito web per il curriculum è ora controllato in versione e pronto per il deployment o la condivisione.

## Risultati e prossimi passi

**Congratulazioni! 🎉** Hai creato con successo un sito web professionale per il curriculum utilizzando VSCode.dev. Il tuo progetto dimostra:
**Competenze tecniche dimostrate:**
- **Gestione del repository**: Creazione e organizzazione di una struttura di progetto completa
- **Sviluppo web**: Creazione di un sito web reattivo utilizzando HTML5 e CSS3 moderni
- **Controllo di versione**: Implementazione di un flusso di lavoro Git corretto con commit significativi
- **Competenza negli strumenti**: Utilizzo efficace dell'interfaccia e del sistema di estensioni di VSCode.dev

**Risultati professionali raggiunti:**
- **Presenza online**: Un URL condivisibile che mostra le tue qualifiche
- **Formato moderno**: Un'alternativa interattiva ai curriculum PDF tradizionali
- **Competenze dimostrabili**: Prove concrete delle tue capacità di sviluppo web
- **Aggiornamenti facili**: Una base che puoi migliorare e personalizzare continuamente

### Opzioni di deployment

Per rendere il tuo curriculum accessibile ai datori di lavoro, considera queste opzioni di hosting:

**GitHub Pages (Consigliato):**
1. Vai alle impostazioni del tuo repository su GitHub
2. Scorri fino alla sezione "Pages"
3. Seleziona "Deploy from a branch" e scegli "main"
4. Il tuo sito sarà disponibile su `https://tuo-username.github.io/my-resume`

**Piattaforme alternative:**
- **Netlify**: Deployment automatico con domini personalizzati
- **Vercel**: Deployment veloce con funzionalità di hosting moderne
- **GitHub Codespaces**: Ambiente di sviluppo con anteprima integrata

### Suggerimenti per miglioramenti

Continua a sviluppare le tue competenze aggiungendo queste funzionalità:

**Miglioramenti tecnici:**
- **Interattività JavaScript**: Aggiungi scrolling fluido o elementi interattivi
- **Toggle modalità scura**: Implementa il cambio di tema per preferenze utente
- **Modulo di contatto**: Abilita la comunicazione diretta con i potenziali datori di lavoro
- **Ottimizzazione SEO**: Aggiungi meta tag e dati strutturati per una migliore visibilità nei motori di ricerca

**Miglioramenti del contenuto:**
- **Portfolio progetti**: Link ai repository GitHub e dimostrazioni live
- **Visualizzazione competenze**: Crea barre di progresso o sistemi di valutazione delle competenze
- **Sezione testimonianze**: Includi raccomandazioni di colleghi o istruttori
- **Integrazione blog**: Aggiungi una sezione blog per mostrare il tuo percorso di apprendimento

## Sfida GitHub Copilot Agent 🚀

Usa la modalità Agent per completare la seguente sfida:

**Descrizione:** Migliora il tuo sito web per il curriculum con funzionalità avanzate che dimostrano capacità professionali di sviluppo web e principi di design moderni.

**Prompt:** Basandoti sul tuo sito web per il curriculum esistente, implementa queste funzionalità avanzate:
1. Aggiungi un toggle per il tema scuro/chiaro con transizioni fluide
2. Crea una sezione competenze interattiva con barre di progresso animate
3. Implementa un modulo di contatto con validazione del modulo
4. Aggiungi una sezione portfolio progetti con effetti hover e popup modali
5. Includi una sezione blog con almeno 3 post di esempio sul tuo percorso di apprendimento
6. Ottimizza per SEO con meta tag appropriati, dati strutturati e prestazioni
7. Pubblica il sito migliorato utilizzando GitHub Pages o Netlify
8. Documenta tutte le nuove funzionalità nel tuo README.md con screenshot

Il tuo sito web migliorato dovrebbe dimostrare padronanza delle pratiche moderne di sviluppo web, inclusi design reattivo, interattività JavaScript e flussi di lavoro di deployment professionali.

## Estensione della sfida

Pronto a portare le tue competenze ancora più avanti? Prova queste sfide avanzate:

**📱 Redesign Mobile-First:** Ricostruisci completamente il tuo sito utilizzando un approccio mobile-first con CSS Grid e Flexbox

**🔍 Ottimizzazione SEO:** Implementa un'ottimizzazione SEO completa, inclusi meta tag, dati strutturati e ottimizzazione delle prestazioni

**🌐 Supporto multilingue:** Aggiungi funzionalità di internazionalizzazione per supportare più lingue

**📊 Integrazione Analytics:** Aggiungi Google Analytics per monitorare il coinvolgimento dei visitatori e ottimizzare i tuoi contenuti

**🚀 Ottimizzazione delle prestazioni:** Ottieni punteggi perfetti su Lighthouse in tutte le categorie

## Revisione e studio autonomo

Amplia le tue conoscenze con queste risorse:

**Funzionalità avanzate di VSCode.dev:**
- [Documentazione VSCode.dev](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) - Guida completa all'editing basato sul web
- [GitHub Codespaces](https://docs.github.com/en/codespaces) - Ambienti di sviluppo cloud

**Best practices per lo sviluppo web:**
- **Design reattivo**: Studia CSS Grid e Flexbox per layout moderni
- **Accessibilità**: Impara le linee guida WCAG per un design web inclusivo  
- **Prestazioni**: Esplora strumenti come Lighthouse per l'ottimizzazione  
- **SEO**: Comprendi i fondamenti dell'ottimizzazione per i motori di ricerca  

**Sviluppo Professionale:**  
- **Creazione del Portfolio**: Realizza progetti aggiuntivi per mostrare competenze diversificate  
- **Open Source**: Contribuisci a progetti esistenti per acquisire esperienza di collaborazione  
- **Networking**: Condividi il tuo sito web curriculum nelle comunità di sviluppatori per ricevere feedback  
- **Apprendimento Continuo**: Rimani aggiornato sulle tendenze e tecnologie dello sviluppo web  

---

**I tuoi prossimi passi:** Condividi il tuo sito web curriculum con amici, familiari o mentori per ricevere feedback. Usa i loro suggerimenti per iterare e migliorare il tuo design. Ricorda, questo progetto non è solo un curriculum – è una dimostrazione della tua crescita come sviluppatore web!

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche potrebbero contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.