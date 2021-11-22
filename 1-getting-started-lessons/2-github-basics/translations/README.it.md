# Introduzione a GitHub

Questa lezione tratta delle basi di GitHub, una piattaforma per ospitare e gestire modifiche al proprio codice.

![Intro to GitHub](/sketchnotes/webdev101-github.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pre-lezione
[Pre-lecture quiz](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/3?loc=it)

## Introduzione

In questa lezione tratteremo come:

- tracciare il lavoro che si fa sulla propria macchina
- lavorare con altri su progetti
- come contribuire a software open source

### Prerequisiti

Prima di iniziare, si dovrebbe verificare se Git è installato. Dal terminale digitare:
`git --version`

Se Git non è installato, [scaricare Git](https://git-scm.com/downloads). Poi impostare il proprio profilo locale Git dal terminale:
* `git config --global user.name "il-proprio-nominativo"`
* `git config --global user.email "la-propria-email"`

Per verificare se Git è già configurato si può digitare:
`git config --list`

E' anche necessario un account GitHub, un editor di codice (tipo Visual Studio Code), e sarà necessario aprire il proprio terminale (o prompt di comando).

Navigare su [github.com](https://github.com/) e creare un account se non se ne dispone già di uno, oppure accedere e compilare il proprio profilo. 

✅ GitHub non è il solo deposito di codice nel mondo, ce ne sono altri, ma GitHub è il più conosciuto.

### Preparazione

Servirà sia una cartella con il codice di un progetto sulla propria macchina locale (laptop o PC), e un repository pubblico su GitHub, che servirà come esempio su come contribuire a progetti di altri.  

---

## Gestione del codice

Diciamo che si ha una cartella in locale con del codice di un progetto e che si vuole iniziare a tracciarne lo sviluppo usando git - il sistema di controllo di versione. Alcuni paragonano l'uso di git alla scrittura di una lettera d'amore a se stessi nel futuro. Leggendo i messaggi di commit giorni, settimane o mesi più tardi si dovrà essere in grado di ricordare perchè è stata presa una certa decisione, o ripristinare ("rollback") una modifica - questo è, quando si scrivono dei buoni "messaggi di commit".

### Compito: Creare un repository e inserirvi codice via commit

1. **Creare un repository su GitHub**. Su GitHub.com, nella scheda repositories, o dalla barra di navigazione in alto a destra, trovare il bottone **new repository**.

   1. Dare un nome al proprio repository (cartella)
   1. Selezionare **create repository**.

1. **Navigare verso la propria cartella di lavoro**. Nel proprio terminale, portarsi nella cartella (detta anche directory) che si vuole iniziare a tracciare. Digitare:

   ```bash
   cd [nome della cartella]
   ```

1. **Inizializzare un repository git**. Nel proprio progetto digitare:

   ```bash
   git init
   ```

1. **Verifica stato**. Per verificare lo stato del proprio repository digitare:

   ```bash
   git status
   ```

   il risultato potrebbe essere qualcosa tipo:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   In genere un comando `git status` informa circa quali file sono pronti per essere  _salvati_ nel repository o quali modifiche sono state effettuate che si vogliono persistere.

1. **Aggiungere tutti i file per la tracciatura**
   Fase nota anche come aggiungere file nell'area di staging.

   ```bash
   git add .
   ```

   Gli argomenti `git add` più `.` indicano che tutti i propri file e modifiche sono selezionati per la tracciatura. 

1. **Aggiungere file selezionati per la tracciatura**

   ```bash
   git add [file o nome cartella]
   ```

   Questo consente di aggiungere file nell'area di staging quando non si vogliono aggiungere tutti in una volta.

1. **Togliere dall'area di staging tutti i file**

   ```bash
   git reset
   ```

   Questo comando consente di togliere tutti i file dall'area di staging.

1. **Togliere dall'area di staging uno specifico file**

   ```bash
   git reset [file o nome cartella]
   ```

   Questo comando consente di togliere dall'area di staging uno specifico file che non si vuole includere nel commit successivo.

1. **Persistere il proprio lavoro**. A questo punto sono stati aggiunti tutti i file alla cosiddetta _area di staging_. Un posto nel quale Git sta tracciando i propri file. Per rendere permanenti le modifiche occorre eseguire un'azione di _commit_ dei file. Per farlo si crea un _commit_ con il comando `git commit`. Un _commit_ rappresenta un punto di salvataggio nella storia del proprio repository. Digitare questo per creare un _commit_:

   ```bash
   git commit -m "primo commit"
   ```

   Questo esegue il commit di tutti i file a suo tempo inclusi, aggiungendo il messaggio 'primo commit'. Per messaggi di commit successivi si vorrà essere più descrittivi nell'esposizione per identificare il tipo di modifiche effettuate.

1. **Connettere il repository Git locale a GitHub**. Un repository Git va bene sulla propria macchina ma a un certo punto si vuole avere una copia dei propri file da qualche altra parte e anche invitare altre persone a lavorare al proprio progetto. Un gran posto per fare questo è GitHub. Si ricorderà che è stato già creato un repository in GitHub quindi la sola cosa da fare è connettere il repository Git locale con GitHub. Il comando `git remote add` farà proprio questo. Digitare il comando:

   > Nota, prima di digitare il comando portarsi sulla propria pagina del repository su GitHub per trovare l'URL del repository. Dovrà essere usato nel comando seguente. Sostituire `repository_name` con il proprio URL di GitHub e `username` con il proprio nome utente di github.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Questo crea un  _remote_, o connessione, chiamata "origin" che punta al repository GitHub precedentemente creato.

1. **Inviare file locali a GitHub**. Fino ad ora è stata creata una _connessione_ tra il repository locale e quello GitHub. Ora si inviano i file locali a GitHub usando il comando `git push`, in questo modo: 

   ```bash
   git push -u origin main
   ```

   Questo invia i propri commit nel ramo  "main" di GitHub.

1. **Aggiungere ulteriori modifiche**. Se si vuole continuare a fare modifiche e inviarle a GitHub occorre usare uno dei tre comandi seguenti:

   ```bash
   git add .
   git commit -m "digitare qui il messaggio di commit"
   git push
   ```

   > Suggerimento, Si potrebbe anche utilizzare un file `.gitignore` per evitare che alcuni file che non si vogliono tracciare finiscano su GitHub - come le note che si salvano sulla cartella del progetto ma che non sono adatte in un repository pubblico. Si possono trovare modelli di file `.gitignore` a [modelli .gitignore](github.com/github/gitignore).

#### Messaggi di commit

Una grande riga di oggetto per un commit Git completa la seguente frase:
Se applicato, questo commit farà ... (qui la vostra riga oggetto)

Per l'oggetto utilizzare l'imperativo presente: "modifica" non "modificato" o "modifiche"- Come per l'oggetto nel corpo (opzionale) usar4 l'imperativo presente. Il corpo dovrebbe includere il motivo della modifica e il confronto con il precedente comportamento. Si sta spiegando il `perchè`, non il `come`.

✅ Si prenda qualche minuto per esplorare GitHub. E' possibile scovare un bel messaggio di commit? Se ne puà trovare uno assolutamente minimale? Quali informazioni si pensa che siano le più importanti e utili per un messaggio di commit?

### Compito: Collaborare

La ragione principale per inserire cose in GitHub è di fare in modo che si possa collaborare tra sviluppatori.

## Lavorare su progetti con altri

Nel proprio repository, portarsi a `Insights > Community` per vedere come il proprio progetto si confronta con gli standard della comunità.

   Ecco alcune cose che possono migliorare il proprio repository GitHub:
   - **Descrizione**. E' stata aggiunta una descrizione per il proprio progetto?
   - **README**. E' stato aggiunto un README (leggimi)? GitHub fornisce una traccia per scrivere un [README](https://docs.github.com/articles/about-readmes/).
   - **Linee guida per contribuire**. Il proprio progetto fornisce [linne guida per contribuire](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/), 
   - **Codice di Condotta**. un [Codice di Condotta](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/), 
   - **Licenza**. Forse la più imporatante, una [licenza](https://docs.github.com/articles/adding-a-license-to-a-repository/)?

Tutte queste risorse favoriranno la salita a bordo di nuovi elementi nella squadra. Queste sono in genere il tipo di cose che i nuovi contributori cercano anche prima di dare un'occhiata al codice, per scoprire se il progetto è il posto giusto per spendere il loro tempo.

✅ I file README, sebbene richiedono tempo per prepararli, sono spesso trascurati da manutentori troppo occupati. E' possibile trovare un esempio di uno particolarmente descrittivo? Nota: ci sono alcuni [strumenti per aiutare la creazione di buoni  README](https://www.makeareadme.com/) che si potrebbero provare.

### Compito: Fondere del codice

La documentazione per la collaborazione aiuta a fare sì che la gente contribuisca al progetto. Spiega che tipo di collaborazione ci si deve attendere e come funziona il processo. I contributori dovranno compiere una serie di passi per poter contribuire a un repository su GitHub:

1. **Biforcare il repository** Probabilmente si vorrà che la gente possa  _biforcare_ il proprio progetto (forking). Questa azione crea una replica di un repository al quale si vuole contribuire sul profilo del contributore su GitHub.
1. **Clonare**. Da qui verrà eseguita una azione di clonazione del progetto sulla  macchina locale del contributore. 
1. **Creare un ramo**. Sarà richiesto al contributore di creare un _ramo_ (branch) per il suo lavoro. 
1. **Concentrare le modifiche del contributore su una area**. Richiedere ai contributori di concentrarsi su una cosa sola alla volta - in questo modo le possibilità che si possa _fondere_ (merge) il lavoro del contributore sono più alte. Se viene scritta la risoluzione di un bug, o viene aggiunta una nuova funzionalità o vengono aggiornati parecchi test - cosa succede se si vuole o si può, solo implementarne 2 su 3 o 1 su 3 di queste modifiche?

✅ Si immagini una situazione dove i rami sono particolarmente critici per la scrittura e lo sviluppo di buon codice. A quali casi d'uso sono stati individuati?

> Nota, siate il cambiamento che volete vedere nel mondo, e si creino rami anche per il proprio lavoro. Qualsiasi commit che verrà fatto sarà su rami che si sta attualmente *verificando* (check out). Usare  `git status` per vedere su quale ramo ci si trova attualmente.

Si analizza il flusso di lavoro di un contributore. Si assume che egli abbia già eseguito il _fork_ e _clonato_ il repository in modo che lo stesso sia pronto per lavorarci, sulla sua macchina locale:

1. **Creare un ramo**. Usare il comando `git branch` per creare un ramo che conterrà le modifiche per le quali si è offerta la collaborazione:

   ```bash
   git branch [branch-name]
   ```

1. **Passare al ramo di lavoro**. Passare al ramo specificato e aggiornare la directory di lavoro con `git checkout`:

   ```bash
   git checkout [nome ramo]
   ```

1. **Eseguire il lavoro**. A questo punto si vorranno aggiungere i propri cambiamenti. Non dimenticarsi di dirlo a Git tramite questi comandi:

   ```bash
   git add .
   git commit -m "le mie modifiche"
   ```

   Assicurarsi che il commit abbia un buon messaggio, a beneficio proprio e del manutentore del repository sul quale si sta collaborando.

1. **Combinare il proprio lavoro con il ramo `main`**. Una volta terminato il lavoro occorre combinarlo con quello del ramo principale (`main`). Il ramo principale potrebbe avere subito cambiamenti nel mentre quindi ci si deve assicurare di eseguire prima un aggiornamento all'ultima versione con i comandi:

   ```bash
   git checkout main
   git pull
   ```

   A questo punto occorre assicurarsi che qualsiasi eventuale _conflitto_ (conflict), situazioni dove Git non è in grado di determinare facilmente come _combinare_ le modifiche effettuate nel proprio ramo di lavoro. Eseguire i seguenti comandi:

   ```bash
   git checkout [branch_name]
   git merge main
   ```

   Questo porterà tutte le modifiche da `main` verso il proprio ramo, augurandosi che si possa poi continuare. In caso contrario VS Code vi può indicare dove Git si _confonde_ e si potranno modificare i file coinvolti per determinare quale contenuto sia il più accurato.

1. **Inviare il proprio lavoro a GitHub**. Questo significa due cose. Spingere il proprio ramo verso il proprio repository, quindi aprire una PR, Pull Request.

   ```bash
   git push --set-upstream origin [nome-ramo]
   ```

   Il comando qui sopra crea il ramo sulla propria biforcazione del repository.

1. **Aprire una PR**. Successivamente, si vorrà aprire una Pull Request. Si fa portandosi nel repository biforcato su GitHub. Si vedrà una indicazione su GitHub dove viene chiesto se si vuol creare una nuova PR, cliccando su questa si verrà portati su una interfaccia dove si potrà cambiare il titolo del messaggio di commit e fornire una descrizione più adatta. Ora il manutentore del repository che è stato biforcato vedrà questa PR e _incrociando le dita_ apprezzerà e _fonderà_ (merge) la PR. Ora si avrà contribuito, yay :)

1. **Pulire**. E' considerata buona pratica effettuare una _pulizia_ dopo il lavoro compiuto. Si vorrà pulire sia il ramo locale che quello spinto su GitHub. Per prima cosa cancellarlo localmente con il comando: 

   ```bash
   git branch -d [nome-ramo]
   ```

   Successivamente assicurarsi di andare nella pagina GitHub per del repository biforcato per eliminare il ramo remoto che è stato appena spinto.

`Pull request` sembra un termine sciocco in quanto in realtà si vogliono portare le proprie modifiche al progetto. Ma il manutentore (proprietario del progetto) o la squadra base deve valutare i cambiamenti dei contributori prima di fonderli con il ramo principale del progetto, quindi in realtà il contributore sta chiedendo una decisione sulle modifiche al manutentore.  

Una pull request è il posto dove confrontare e discutere le differenze introdotte su un ramo con valutazioni, commenti, verifiche integrate e altro. Una buona pull request segue grossolanmente le stesse regole di un messaggio di commit. Si può aggiungere un riferimento al problema nel tracciatore di problemi (issue tracker), quando il proprio lavoro risolve ad esempio un problema. Questo viene fatto usando un `#` seguito dal numero del vostro problema. Ad esempio `#97`.

🤞Incrociando le dita si spera che tutte le verifiche vengano superate e che il proprietario(i) del progetto voglia incorporare le modifiche all'interno del progetto🤞

Aggiornare il proprio ramo corrente locale con tutti i nuovi commit per il ramo remoto corrispondente su GitHub:

`git pull`

## Come contribuire a progetti open source

Per prima cosa, trovare un repository - o repo - che interessi su GitHub e per il quale si desideri contribuire con una modifica. Si vorrà copiare il contenuto sulla propria macchina.

✅ Un buon modo di trovare repository 'adatti per i principianti' è di [cercare il tag 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Copiare un repository localmente](../images/clone_repo.png)

Ci sono parecchi modi di copiare il codice. Un modo è "clonare" il contenuto del repository, usando HTTPS, SSH, o usando l'interfaccia da riga di comando GitHub CLI. 

Aprire il proprio terminale e clonare il repository così:
`git clone https://github.com/URLdelProgetto`

Per lavorare su un progetto, passare alla corretta cartella:
`cd URLdelProgetto`

Si può anche aprire l'intero progetto usando [Codespaces](https://github.com/features/codespaces), l'editor di codice incorporato di GitHub, oppure un ambiente di sviluppo nel cloud, oppure [GitHub Desktop](https://desktop.github.com/).

Infine si può scaricare il codice in una cartella compressa. 

### Qualche altra cosa interessante riguardo a GitHub

E' possibile attribuire una stella, osservare, e/o "biforcare" un qualsiasi progetto pubblico su GitHub. Si possono trovare i propri repository che hanno stelle nel menù a tendina in alto a destra. E' come mettere un segnalibro, ma per il codice. 

I progetti che hanno un tracciatore di problemi, per la maggior parte nella scheda "Issues" di GitHub a meno di indicazioni diverse, è dove la gente discute dei problemi relativi al progetto. E la scheda Pull Requests è dove la gente discute e verifica le modifiche in corso d'opera.

I progetti potrebbero anche essere discussi nei forum, liste di distribuzione, o canali chat come Slack, Discord o IRC.

✅ Dare una occhiata al proprio nuovo repository in GitHub e provare alcune cose, come modificare la configurazione, aggiungere informazioni al repository e creare un progetto come un tabellone Kanban. C'è tanto che si può fare!

---

## 🚀 Sfida

Fare coppia con un amico per lavorare al codice dei progetti l'uno dell'altro. Creare un progetto in modo collaborativo, biforcare il codice, craare rami e fondere modifiche.

## Quiz Post-lezione
[Post-lecture quiz](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/4?loc=it)

## Revisione e Auto Apprendimento

Leggene di più al riguardo: [contribuire a software open source](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution). 

[Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/).

Esercizio, esercizio, esercizio. GitHub ha ottimi percorsi di apprendimento disponibili via [lab.github.com](https://lab.github.com/):

- [Prima settimana su GitHub](https://lab.github.com/githubtraining/first-week-on-github)

Si potranno trovare anche altri laboratori più avanzati. 

## Compito 

Completare [la prima settimana nel laboratorio di apprendimento di GitHub](https://lab.github.com/githubtraining/first-week-on-github)