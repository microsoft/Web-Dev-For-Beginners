<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cfd4a15974168ca426d50c67682ab9d4",
  "translation_date": "2025-10-22T23:21:15+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "it"
}
-->
# Utilizzare un Editor di Codice: Padroneggiare VSCode.dev

Ricordi in *Matrix* quando Neo doveva collegarsi a un enorme terminale per accedere al mondo digitale? Gli strumenti di sviluppo web di oggi raccontano una storia completamente diversa: capacità incredibilmente potenti accessibili ovunque. VSCode.dev è un editor di codice basato su browser che porta strumenti di sviluppo professionali su qualsiasi dispositivo connesso a Internet.

Proprio come la stampa ha reso i libri accessibili a tutti, non solo agli scribi nei monasteri, VSCode.dev democratizza la programmazione. Puoi lavorare su progetti da un computer della biblioteca, un laboratorio scolastico o ovunque tu abbia accesso al browser. Niente installazioni, niente limitazioni legate a configurazioni specifiche.

Alla fine di questa lezione, capirai come navigare in VSCode.dev, aprire repository GitHub direttamente nel browser e utilizzare Git per il controllo delle versioni – tutte competenze su cui gli sviluppatori professionisti fanno affidamento ogni giorno.

## Cosa Imparerai

Dopo aver seguito questa guida, sarai in grado di:

- Navigare in VSCode.dev come se fosse la tua seconda casa – trovando tutto ciò di cui hai bisogno senza perderti
- Aprire qualsiasi repository GitHub nel browser e iniziare subito a modificarlo (questa è davvero magica!)
- Utilizzare Git per tracciare le modifiche e salvare i progressi come un professionista
- Potenziare il tuo editor con estensioni che rendono la programmazione più veloce e divertente
- Creare e organizzare file di progetto con sicurezza

## Cosa Ti Serve

I requisiti sono semplici:

- Un account gratuito su [GitHub](https://github.com) (ti guideremo nella creazione se necessario)
- Familiarità di base con i browser web
- La lezione "GitHub Basics" fornisce un utile background, anche se non è essenziale

> 💡 **Nuovo su GitHub?** Creare un account è gratuito e richiede pochi minuti. Proprio come una tessera della biblioteca ti dà accesso ai libri di tutto il mondo, un account GitHub apre le porte ai repository di codice su Internet.

## Perché gli Editor di Codice Basati su Web Sono Importanti

Prima di Internet, gli scienziati di diverse università non potevano facilmente condividere le loro ricerche. Poi arrivò ARPANET negli anni '60, collegando computer a distanza. Gli editor di codice basati su web seguono lo stesso principio: rendere strumenti potenti accessibili indipendentemente dalla tua posizione fisica o dal dispositivo.

Un editor di codice è il tuo spazio di lavoro per lo sviluppo, dove scrivi, modifichi e organizzi file di codice. A differenza dei semplici editor di testo, gli editor di codice professionali offrono evidenziazione della sintassi, rilevamento degli errori e funzionalità di gestione dei progetti.

VSCode.dev porta queste capacità nel tuo browser:

**Vantaggi dell'editing basato su web:**

| Funzione | Descrizione | Vantaggio Pratico |
|---------|-------------|----------|
| **Indipendenza dalla Piattaforma** | Funziona su qualsiasi dispositivo con un browser | Lavora da computer diversi senza problemi |
| **Nessuna Installazione Necessaria** | Accesso tramite URL web | Supera le restrizioni di installazione software |
| **Aggiornamenti Automatici** | Sempre aggiornato all'ultima versione | Accesso alle nuove funzionalità senza aggiornamenti manuali |
| **Integrazione con Repository** | Connessione diretta a GitHub | Modifica il codice senza gestione locale dei file |

**Implicazioni pratiche:**
- Continuità del lavoro in ambienti diversi
- Interfaccia coerente indipendentemente dal sistema operativo
- Capacità di collaborazione immediata
- Riduzione delle esigenze di archiviazione locale

## Esplorare VSCode.dev

Proprio come il laboratorio di Marie Curie conteneva attrezzature sofisticate in uno spazio relativamente semplice, VSCode.dev racchiude strumenti di sviluppo professionali in un'interfaccia browser. Questa applicazione web offre la stessa funzionalità di base degli editor di codice desktop.

Inizia navigando su [vscode.dev](https://vscode.dev) nel tuo browser. L'interfaccia si carica senza download o installazioni di sistema – un'applicazione diretta dei principi del cloud computing.

### Collegare il Tuo Account GitHub

Proprio come il telefono di Alexander Graham Bell collegava luoghi distanti, collegare il tuo account GitHub crea un ponte tra VSCode.dev e i tuoi repository di codice. Quando ti viene chiesto di accedere con GitHub, è consigliabile accettare questa connessione.

**L'integrazione con GitHub offre:**
- Accesso diretto ai tuoi repository all'interno dell'editor
- Impostazioni e estensioni sincronizzate tra dispositivi
- Flusso di lavoro semplificato per il salvataggio su GitHub
- Ambiente di sviluppo personalizzato

### Conoscere il Tuo Nuovo Spazio di Lavoro

Una volta caricato tutto, vedrai uno spazio di lavoro pulito e progettato per mantenerti concentrato su ciò che conta – il tuo codice!

![Interfaccia predefinita di VSCode.dev](../../../../translated_images/default-vscode-dev.5d06881d65c1b3234ce50cd9ed3b0028e6031ad5f5b441bcbed96bfa6311f6d0.it.png)

**Ecco un tour del "quartiere":**
- **Barra delle Attività** (quella striscia a sinistra): La tua navigazione principale con Esplora 📁, Cerca 🔍, Controllo Sorgente 🌿, Estensioni 🧩 e Impostazioni ⚙️
- **Barra Laterale** (il pannello accanto): Cambia per mostrarti informazioni pertinenti in base a ciò che hai selezionato
- **Area Editor** (lo spazio grande al centro): Qui avviene la magia – la tua area principale di programmazione

**Prenditi un momento per esplorare:**
- Clicca sulle icone della Barra delle Attività e scopri cosa fanno
- Nota come la barra laterale si aggiorna per mostrare informazioni diverse – piuttosto interessante, vero?
- La vista Esplora (📁) è probabilmente dove passerai la maggior parte del tempo, quindi prenditi confidenza

## Aprire i Repository GitHub

Prima di Internet, i ricercatori dovevano viaggiare fisicamente nelle biblioteche per accedere ai documenti. I repository GitHub funzionano in modo simile – sono raccolte di codice archiviate in remoto. VSCode.dev elimina il passaggio tradizionale di scaricare i repository sul tuo computer locale prima di modificarli.

Questa funzionalità consente l'accesso immediato a qualsiasi repository pubblico per visualizzare, modificare o contribuire. Ecco due metodi per aprire i repository:

### Metodo 1: Il Metodo "Punta e Clicca"

Perfetto quando inizi da zero in VSCode.dev e vuoi aprire un repository specifico. È semplice e adatto ai principianti:

**Ecco come fare:**

1. Vai su [vscode.dev](https://vscode.dev) se non ci sei già
2. Cerca il pulsante "Apri Repository Remoto" nella schermata di benvenuto e cliccaci sopra

   ![Apri repository remoto](../../../../translated_images/open-remote-repository.bd9c2598b8949e7fc283cdfc8f4050c6205a7c7c6d3f78c4b135115d037d6fa2.it.png)

3. Incolla l'URL di un repository GitHub (prova questo: `https://github.com/microsoft/Web-Dev-For-Beginners`)
4. Premi Invio e guarda la magia accadere!

**Suggerimento Pro - Scorciatoia del Command Palette:**

Vuoi sentirti come un mago della programmazione? Prova questa scorciatoia da tastiera: Ctrl+Shift+P (o Cmd+Shift+P su Mac) per aprire il Command Palette:

![Command Palette](../../../../translated_images/palette-menu.4946174e07f426226afcdad707d19b8d5150e41591c751c45b5dee213affef91.it.png)

**Il Command Palette è come avere un motore di ricerca per tutto ciò che puoi fare:**
- Digita "open remote" e troverà l'apertura del repository per te
- Ricorda i repository che hai aperto di recente (super utile!)
- Una volta che ti abitui, ti sentirai come se stessi programmando alla velocità della luce
- È praticamente la versione di VSCode.dev di "Ehi Siri, ma per la programmazione"

### Metodo 2: Tecnica di Modifica dell'URL

Proprio come HTTP e HTTPS utilizzano protocolli diversi mantenendo la stessa struttura del dominio, VSCode.dev utilizza un modello di URL che rispecchia il sistema di indirizzamento di GitHub. Qualsiasi URL di repository GitHub può essere modificato per aprirlo direttamente in VSCode.dev.

**Modello di trasformazione URL:**

| Tipo di Repository | URL GitHub | URL VSCode.dev |
|----------------|---------------------|----------------|
| **Repository Pubblico** | `github.com/microsoft/Web-Dev-For-Beginners` | `vscode.dev/github/microsoft/Web-Dev-For-Beginners` |
| **Progetto Personale** | `github.com/your-username/my-project` | `vscode.dev/github/your-username/my-project` |
| **Qualsiasi Repo Accessibile** | `github.com/their-username/awesome-repo` | `vscode.dev/github/their-username/awesome-repo` |

**Implementazione:**
- Sostituisci `github.com` con `vscode.dev/github`
- Mantieni invariati tutti gli altri componenti dell'URL
- Funziona con qualsiasi repository pubblicamente accessibile
- Fornisce accesso immediato alla modifica

> 💡 **Suggerimento che cambia la vita**: Salva nei segnalibri le versioni VSCode.dev dei tuoi repository preferiti. Io ho segnalibri come "Modifica il Mio Portfolio" e "Correggi la Documentazione" che mi portano direttamente alla modalità di modifica!

**Quale metodo dovresti usare?**
- **Il metodo dell'interfaccia**: Ottimo quando stai esplorando o non ricordi i nomi esatti dei repository
- **Il trucco dell'URL**: Perfetto per un accesso rapido quando sai esattamente dove stai andando

## Lavorare con File e Progetti

Ora che hai aperto un repository, iniziamo a costruire! VSCode.dev ti offre tutto ciò di cui hai bisogno per creare, modificare e organizzare i tuoi file di codice. Pensalo come il tuo laboratorio digitale – ogni strumento è proprio dove ti serve.

Immergiamoci nelle attività quotidiane che comporranno la maggior parte del tuo flusso di lavoro di programmazione.

### Creare Nuovi File

Proprio come organizzare progetti in uno studio di architettura, la creazione di file in VSCode.dev segue un approccio strutturato. Il sistema supporta tutti i tipi di file standard per lo sviluppo web.

**Processo di creazione file:**

1. Vai alla cartella di destinazione nella barra laterale Esplora
2. Passa il mouse sopra il nome della cartella per rivelare l'icona "Nuovo File" (📄+)
3. Inserisci il nome del file includendo l'estensione appropriata (`style.css`, `script.js`, `index.html`)
4. Premi Invio per creare il file

![Creare un nuovo file](../../../../translated_images/create-new-file.2814e609c2af9aeb6c6fd53156c503ac91c3d538f9cac63073b2dd4a7631f183.it.png)

**Convenzioni di denominazione:**
- Usa nomi descrittivi che indicano lo scopo del file
- Includi estensioni di file per una corretta evidenziazione della sintassi
- Segui modelli di denominazione coerenti in tutti i progetti
- Usa lettere minuscole e trattini invece di spazi

### Modificare e Salvare File

Qui inizia il vero divertimento! L'editor di VSCode.dev è ricco di funzionalità utili che rendono la programmazione fluida e intuitiva. È come avere un assistente di scrittura davvero intelligente, ma per il codice.

**Il tuo flusso di lavoro di modifica:**

1. Clicca su qualsiasi file nell'Esplora per aprirlo nell'area principale
2. Inizia a digitare e guarda VSCode.dev aiutarti con colori, suggerimenti e rilevamento degli errori
3. Salva il tuo lavoro con Ctrl+S (Windows/Linux) o Cmd+S (Mac) – anche se salva automaticamente!

![Modificare file in VSCode.dev](../../../../translated_images/edit-a-file.52c0ee665ef19f08119d62d63f395dfefddc0a4deb9268d73bfe791f52c5807a.it.png)

**Le cose interessanti che accadono mentre programmi:**
- Il tuo codice viene evidenziato con colori per renderlo facile da leggere
- VSCode.dev suggerisce completamenti mentre digiti (come l'autocorrezione, ma molto più intelligente)
- Rileva errori e refusi prima che tu salvi
- Puoi avere più file aperti in schede, proprio come in un browser
- Tutto viene salvato automaticamente in background

> ⚠️ **Suggerimento rapido**: Anche se il salvataggio automatico ti protegge, premere Ctrl+S o Cmd+S è comunque una buona abitudine. Salva immediatamente tutto e attiva alcune funzionalità extra utili come il controllo degli errori.

### Controllo delle Versioni con Git

Proprio come gli archeologi creano registri dettagliati degli strati di scavo, Git traccia le modifiche nel tuo codice nel tempo. Questo sistema preserva la storia del progetto e ti consente di tornare a versioni precedenti quando necessario. VSCode.dev include funzionalità Git integrate.

**Interfaccia Controllo Sorgente:**

1. Accedi al pannello Controllo Sorgente tramite l'icona 🌿 nella Barra delle Attività
2. I file modificati appaiono nella sezione "Modifiche"
3. La codifica a colori indica i tipi di modifica: verde per aggiunte, rosso per eliminazioni

![Visualizzare modifiche nel Controllo Sorgente](../../../../translated_images/working-tree.c58eec08e6335c79cc708c0c220c0b7fea61514bd3c7fb7471905a864aceac7c.it.png)

**Salvare il tuo lavoro (flusso di lavoro di commit):**

```mermaid
flowchart TD
    A[Make changes to files] --> B[View changes in Source Control]
    B --> C[Stage changes by clicking +]
    C --> D[Write descriptive commit message]
    D --> E[Click checkmark to commit]
    E --> F[Changes pushed to GitHub]
```

**Ecco il tuo processo passo-passo:**
- Clicca sull'icona "+" accanto ai file che vuoi salvare (questo li "staggia")
- Controlla che tu sia soddisfatto di tutte le modifiche staggiate
- Scrivi una breve nota spiegando cosa hai fatto (questo è il tuo "messaggio di commit")
- Clicca sul pulsante con il segno di spunta per salvare tutto su GitHub
- Se cambi idea su qualcosa, l'icona di annullamento ti permette di scartare le modifiche

**Scrivere buoni messaggi di commit (è più facile di quanto pensi!):**
- Descrivi semplicemente cosa hai fatto, come "Aggiungi modulo di contatto" o "Correggi navigazione rotta"
- Mantienilo breve e conciso – pensa alla lunghezza di un tweet, non a un saggio
- Inizia con verbi d'azione come "Aggiungi", "Correggi", "Aggiorna" o "Rimuovi"
- **Esempi buoni**: "Aggiungi menu di navigazione responsive", "Correggi problemi di layout mobile", "Aggiorna colori per una migliore accessibilità"

> 💡 **Suggerimento di navigazione rapida**: Usa il menu hamburger (☰) in alto a sinistra per tornare al tuo repository GitHub e vedere le modifiche salvate online. È come un portale tra il tuo ambiente di modifica e la "casa" del tuo progetto su GitHub!

## Potenziare le Funzionalità con le Estensioni

Proprio come il laboratorio di un artigiano contiene strumenti specializzati per compiti diversi, VSCode.dev può essere personalizzato con estensioni che aggiungono capacità specifiche. Questi plugin sviluppati dalla comunità affrontano esigenze comuni di sviluppo come la formattazione del codice, l'anteprima live e l'integrazione avanzata con Git.

Il marketplace delle estensioni ospita migliaia di strumenti gratuiti creati da sviluppatori di tutto il mondo. Ogni estensione risolve particolari sfide di flusso di lavoro, permettendoti di costruire un ambiente di sviluppo personalizzato adatto alle tue esigenze e preferenze specifiche.

### Trovare le Tue Estensioni Perfette

Il marketplace delle estensioni è davvero ben organizzato, quindi non ti perderai cercando ciò di cui hai bisogno. È progettato per aiutarti a scoprire sia strumenti specifici che cose interessanti che non sapevi nemmeno esistessero!

**Accedere al marketplace:**

1. Clicca sull'icona delle Estensioni (🧩) nella Barra delle Attività
2. Sfoglia o cerca qualcosa di specifico
3. Clicca su qualsiasi cosa sembri interessante per saperne di più

![Interfaccia del marketplace delle estensioni](../../../../translated_images/extensions.eca0e0c7f59a10b5c88be7fe24b3e32cca6b6058b35a49026c3a9d80b1813b7c.it.png)

**Cosa troverai lì:**

| Sezione | Contenuto | Perché è utile |
|----------|---------|----------|
| **Installate** | Estensioni che hai già aggiunto | La tua cassetta degli attrezzi personale per la programmazione |
| **Popolari** | I preferiti della comunità | Quelli che la maggior parte degli sviluppatori consiglia |
| **Consigliate** | Suggerimenti intelligenti per il tuo progetto | Raccomandazioni utili di VSCode.dev |

**Cosa rende facile la navigazione:**
- Ogni estensione mostra valutazioni, numero di download e recensioni degli utenti reali
- Trovi screenshot e descrizioni chiare di ciò che fa ciascuna estensione
- Tutto è chiaramente indicato con informazioni sulla compatibilità
- Vengono suggerite estensioni simili per confrontare le opzioni disponibili

### Installare le Estensioni (È Super Facile!)

Aggiungere nuove funzionalità al tuo editor è semplice come cliccare un pulsante. Le estensioni si installano in pochi secondi e iniziano a funzionare immediatamente – niente riavvii, niente attese.

**Ecco cosa devi fare:**

1. Cerca ciò che ti serve (prova a cercare "live server" o "prettier")
2. Clicca su quella che ti sembra interessante per vedere più dettagli
3. Leggi cosa fa e controlla le valutazioni
4. Premi il pulsante blu "Installa" e il gioco è fatto!

![Installare estensioni](../../../../8-code-editor/images/install-extension.gif)

**Cosa succede dietro le quinte:**
- L'estensione viene scaricata e configurata automaticamente
- Le nuove funzionalità appaiono subito nella tua interfaccia
- Tutto inizia a funzionare immediatamente (davvero, è così veloce!)
- Se hai effettuato l'accesso, l'estensione si sincronizza su tutti i tuoi dispositivi

**Alcune estensioni che ti consiglio di provare:**
- **Live Server**: Guarda il tuo sito web aggiornarsi in tempo reale mentre scrivi il codice (è magico!)
- **Prettier**: Rende il tuo codice pulito e professionale automaticamente
- **Auto Rename Tag**: Modifica un tag HTML e il suo partner si aggiorna automaticamente
- **Bracket Pair Colorizer**: Colora le parentesi per non perderti mai
- **GitLens**: Potenzia le funzionalità di Git con tantissime informazioni utili

### Personalizzare le Tue Estensioni

La maggior parte delle estensioni ha impostazioni che puoi modificare per farle funzionare esattamente come preferisci. Pensalo come regolare il sedile e gli specchietti in un'auto – ognuno ha le proprie preferenze!

**Modificare le impostazioni delle estensioni:**

1. Trova l'estensione installata nel pannello delle Estensioni
2. Cerca l'icona dell'ingranaggio (⚙️) accanto al suo nome e cliccaci sopra
3. Scegli "Impostazioni Estensione" dal menu a tendina
4. Modifica le impostazioni finché non si adattano perfettamente al tuo flusso di lavoro

![Personalizzare le impostazioni delle estensioni](../../../../translated_images/extension-settings.21c752ae4f4cdb78a867f140ccd0680e04619d0c44bb4afb26373e54b829d934.it.png)

**Cose comuni che potresti voler modificare:**
- Come viene formattato il tuo codice (tab vs spazi, lunghezza delle righe, ecc.)
- Quali scorciatoie da tastiera attivano diverse azioni
- Con quali tipi di file l'estensione dovrebbe funzionare
- Attivare o disattivare specifiche funzionalità per mantenere tutto ordinato

### Organizzare le Tue Estensioni

Man mano che scopri nuove estensioni interessanti, vorrai mantenere la tua collezione ordinata e funzionante senza problemi. VSCode.dev rende tutto questo molto facile da gestire.

**Opzioni per gestire le tue estensioni:**

| Cosa Puoi Fare | Quando È Utile | Consiglio |
|--------|---------|----------|
| **Disabilitare** | Per verificare se un'estensione causa problemi | Meglio che disinstallarla se pensi di volerla riutilizzare |
| **Disinstallare** | Per rimuovere completamente le estensioni che non ti servono | Mantiene l'ambiente pulito e veloce |
| **Aggiornare** | Per ottenere le ultime funzionalità e correzioni di bug | Di solito avviene automaticamente, ma vale la pena controllare |

**Come gestisco le mie estensioni:**
- Ogni pochi mesi, rivedo ciò che ho installato e rimuovo ciò che non uso
- Mantengo le estensioni aggiornate per ottenere gli ultimi miglioramenti e correzioni di sicurezza
- Se qualcosa sembra lento, disabilito temporaneamente le estensioni per vedere se una di esse è la causa
- Leggo le note di aggiornamento quando le estensioni ricevono aggiornamenti importanti – a volte ci sono nuove funzionalità interessanti!

> ⚠️ **Consiglio per le prestazioni**: Le estensioni sono fantastiche, ma averne troppe può rallentare il sistema. Concentrati su quelle che rendono davvero la tua vita più facile e non esitare a disinstallare quelle che non usi mai.

## Sfida dell'Agente GitHub Copilot 🚀

Come l'approccio strutturato che la NASA utilizza per le missioni spaziali, questa sfida prevede l'applicazione sistematica delle competenze di VSCode.dev in uno scenario di flusso di lavoro completo.

**Obiettivo:** Dimostrare la padronanza di VSCode.dev stabilendo un flusso di lavoro completo per lo sviluppo web.

**Requisiti del progetto:** Utilizzando l'assistenza in modalità Agente, completa questi compiti:
1. Effettua un fork di un repository esistente o creane uno nuovo
2. Stabilisci una struttura di progetto funzionale con file HTML, CSS e JavaScript
3. Installa e configura tre estensioni che migliorano lo sviluppo
4. Pratica il controllo di versione con messaggi di commit descrittivi
5. Sperimenta la creazione e modifica di branch di funzionalità
6. Documenta il processo e le lezioni apprese in un file README.md

Questo esercizio consolida tutti i concetti di VSCode.dev in un flusso di lavoro pratico che può essere applicato a progetti di sviluppo futuri.

Scopri di più sulla [modalità agente](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) qui.

## Compito

È ora di mettere alla prova queste competenze! Ho un progetto pratico che ti permetterà di esercitarti con tutto ciò che abbiamo trattato: [Crea un sito web per il tuo curriculum usando VSCode.dev](./assignment.md)

Questo compito ti guida nella creazione di un sito web professionale per il tuo curriculum interamente nel browser. Utilizzerai tutte le funzionalità di VSCode.dev che abbiamo esplorato e, alla fine, avrai sia un sito web dall'aspetto fantastico che una solida fiducia nel tuo nuovo flusso di lavoro.

## Continua a Esplorare e Crescere nelle Tue Competenze

Hai ora una solida base, ma c'è ancora tanto da scoprire! Ecco alcune risorse e idee per portare le tue competenze con VSCode.dev al livello successivo:

**Documentazione ufficiale da salvare nei preferiti:**
- [Documentazione Web di VSCode](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) – La guida completa per l'editing basato su browser
- [GitHub Codespaces](https://docs.github.com/en/codespaces) – Per quando vuoi ancora più potenza nel cloud

**Funzionalità interessanti da sperimentare:**
- **Scorciatoie da tastiera**: Impara le combinazioni di tasti che ti faranno sentire un ninja del codice
- **Impostazioni dell'ambiente di lavoro**: Configura ambienti diversi per diversi tipi di progetti
- **Ambienti di lavoro multi-root**: Lavora su più repository contemporaneamente (super utile!)
- **Integrazione del terminale**: Accedi agli strumenti da riga di comando direttamente nel browser

**Idee per esercitarti:**
- Partecipa a progetti open-source e contribuisci utilizzando VSCode.dev – è un ottimo modo per restituire qualcosa!
- Prova diverse estensioni per trovare la configurazione perfetta
- Crea modelli di progetto per i tipi di siti che costruisci più spesso
- Esercitati con i flussi di lavoro Git come la creazione e fusione di branch – queste competenze sono preziose nei progetti di team

---

**Hai padroneggiato lo sviluppo basato sul browser!** 🎉 Come l'invenzione di strumenti portatili ha permesso agli scienziati di condurre ricerche in luoghi remoti, VSCode.dev consente di programmare professionalmente da qualsiasi dispositivo connesso a Internet.

Queste competenze riflettono le pratiche attuali del settore – molti sviluppatori professionisti utilizzano ambienti di sviluppo basati sul cloud per la loro flessibilità e accessibilità. Hai imparato un flusso di lavoro che si adatta sia ai progetti individuali che alle collaborazioni di grandi team.

Applica queste tecniche al tuo prossimo progetto di sviluppo! 🚀

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche potrebbero contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si consiglia una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.