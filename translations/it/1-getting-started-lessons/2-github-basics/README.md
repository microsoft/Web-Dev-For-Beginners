<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ea65b75e488aa33a3cc5cb1c6c3f047a",
  "translation_date": "2025-10-03T13:54:33+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "it"
}
-->
# Introduzione a GitHub

Questa lezione copre le basi di GitHub, una piattaforma per ospitare e gestire le modifiche al tuo codice.

![Intro a GitHub](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.it.png)
> Sketchnote di [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pre-Lettura
[Quiz pre-lettura](https://ff-quizzes.netlify.app)

## Introduzione

In questa lezione, tratteremo:

- il tracciamento del lavoro che fai sul tuo computer
- lavorare su progetti con altri
- come contribuire al software open source

### Prerequisiti

Prima di iniziare, verifica se Git è installato. Nel terminale digita: 
`git --version`

Se Git non è installato, [scarica Git](https://git-scm.com/downloads). Poi, configura il tuo profilo Git locale nel terminale:
* `git config --global user.name "tuo-nome"`
* `git config --global user.email "tuo-email"`

Per verificare se Git è già configurato, puoi digitare:
`git config --list`

Avrai anche bisogno di un account GitHub, un editor di codice (come Visual Studio Code) e dovrai aprire il tuo terminale (o prompt dei comandi).

Vai su [github.com](https://github.com/) e crea un account se non lo hai già fatto, oppure accedi e completa il tuo profilo.

✅ GitHub non è l'unico repository di codice al mondo; ce ne sono altri, ma GitHub è il più conosciuto.

### Preparazione

Avrai bisogno di una cartella con un progetto di codice sul tuo computer locale (laptop o PC) e di un repository pubblico su GitHub, che servirà come esempio per imparare a contribuire ai progetti di altri.

---

## Gestione del codice

Supponiamo che tu abbia una cartella localmente con un progetto di codice e voglia iniziare a tracciare i tuoi progressi usando git, il sistema di controllo delle versioni. Alcuni paragonano l'uso di git a scrivere una lettera d'amore al tuo futuro io. Leggendo i tuoi messaggi di commit giorni, settimane o mesi dopo, sarai in grado di ricordare perché hai preso una decisione o "annullare" una modifica, ovvero quando scrivi buoni "messaggi di commit".

### Compito: Crea un repository e fai il commit del codice  

> Guarda il video
> 
> [![Video sulle basi di Git e GitHub](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

1. **Crea un repository su GitHub**. Su GitHub.com, nella scheda dei repository o dalla barra di navigazione in alto a destra, trova il pulsante **new repo**.

   1. Dai un nome al tuo repository (cartella)
   1. Seleziona **create repository**.

1. **Naviga nella tua cartella di lavoro**. Nel terminale, passa alla cartella (nota anche come directory) che vuoi iniziare a tracciare. Digita:

   ```bash
   cd [name of your folder]
   ```

1. **Inizializza un repository git**. Nel tuo progetto digita:

   ```bash
   git init
   ```

1. **Controlla lo stato**. Per controllare lo stato del tuo repository digita:

   ```bash
   git status
   ```

   l'output potrebbe apparire simile a questo:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Tipicamente, il comando `git status` ti dice cose come quali file sono pronti per essere _salvati_ nel repository o hanno modifiche che potresti voler rendere persistenti.

1. **Aggiungi tutti i file per il tracciamento**
   Questo è anche chiamato staging dei file/aggiunta dei file all'area di staging.

   ```bash
   git add .
   ```

   L'argomento `git add` più `.` indica che tutti i tuoi file e modifiche sono pronti per il tracciamento.

1. **Aggiungi file selezionati per il tracciamento**

   ```bash
   git add [file or folder name]
   ```

   Questo ci aiuta ad aggiungere solo file selezionati all'area di staging quando non vogliamo fare il commit di tutti i file contemporaneamente.

1. **Rimuovi tutti i file dall'area di staging**

   ```bash
   git reset
   ```

   Questo comando ci aiuta a rimuovere tutti i file dall'area di staging contemporaneamente.

1. **Rimuovi un file specifico dall'area di staging**

   ```bash
   git reset [file or folder name]
   ```

   Questo comando ci aiuta a rimuovere solo un file specifico dall'area di staging che non vogliamo includere nel prossimo commit.

1. **Rendi persistente il tuo lavoro**. A questo punto hai aggiunto i file a una cosiddetta _area di staging_. Un luogo dove Git sta tracciando i tuoi file. Per rendere la modifica permanente, devi _committare_ i file. Per farlo, crei un _commit_ con il comando `git commit`. Un _commit_ rappresenta un punto di salvataggio nella storia del tuo repository. Digita il seguente comando per creare un _commit_:

   ```bash
   git commit -m "first commit"
   ```

   Questo committa tutti i tuoi file, aggiungendo il messaggio "first commit". Per i futuri messaggi di commit, vorrai essere più descrittivo nella tua descrizione per trasmettere il tipo di modifica che hai fatto.

1. **Collega il tuo repository Git locale con GitHub**. Un repository Git è utile sul tuo computer, ma a un certo punto vorrai avere un backup dei tuoi file da qualche parte e anche invitare altre persone a lavorare con te sul tuo repository. Un ottimo posto per farlo è GitHub. Ricorda che abbiamo già creato un repository su GitHub, quindi l'unica cosa che dobbiamo fare è collegare il nostro repository Git locale con GitHub. Il comando `git remote add` farà proprio questo. Digita il seguente comando:

   > Nota, prima di digitare il comando vai alla pagina del tuo repository GitHub per trovare l'URL del repository. Lo userai nel comando qui sotto. Sostituisci ```https://github.com/username/repository_name.git``` con il tuo URL GitHub.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Questo crea un _remote_, o connessione, chiamato "origin" che punta al repository GitHub che hai creato in precedenza.

1. **Invia i file locali a GitHub**. Finora hai creato una _connessione_ tra il repository locale e il repository GitHub. Inviamo questi file a GitHub con il seguente comando `git push`, come segue: 
   
   > Nota, il nome del tuo branch potrebbe essere diverso da ```main```.

   ```bash
   git push -u origin main
   ```

   Questo invia i tuoi commit nel branch "main" a GitHub. Impostare il branch `upstream` includendo `-u` nel comando stabilisce un collegamento tra il tuo branch locale e il branch remoto, così puoi semplicemente usare git push o git pull senza specificare il nome del branch in futuro. Git utilizzerà automaticamente il branch upstream e non dovrai specificare esplicitamente il nome del branch nei comandi futuri.

2. **Per aggiungere altre modifiche**. Se vuoi continuare a fare modifiche e inviarle a GitHub, dovrai solo usare i seguenti tre comandi:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > Suggerimento, potresti anche voler adottare un file `.gitignore` per evitare che i file che non vuoi tracciare compaiano su GitHub, come quel file di note che conservi nella stessa cartella ma che non ha posto in un repository pubblico. Puoi trovare modelli per i file `.gitignore` su [.gitignore templates](https://github.com/github/gitignore).

#### Messaggi di commit

Un ottimo messaggio di commit completa la seguente frase:
Se applicato, questo commit <tuo messaggio qui>

Per il soggetto usa il tempo presente imperativo: "modifica" non "modificato" né "modifiche". 
Come nel soggetto, anche nel corpo (opzionale) usa il tempo presente imperativo. Il corpo dovrebbe includere la motivazione per la modifica e confrontarla con il comportamento precedente. Stai spiegando il `perché`, non il `come`.

✅ Prenditi qualche minuto per navigare su GitHub. Riesci a trovare un messaggio di commit davvero ottimo? Riesci a trovarne uno davvero minimale? Quali informazioni pensi siano le più importanti e utili da trasmettere in un messaggio di commit?

### Compito: Collaborare

Il motivo principale per mettere le cose su GitHub è rendere possibile collaborare con altri sviluppatori.

## Lavorare su progetti con altri

> Guarda il video
>
> [![Video sulle basi di Git e GitHub](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

Nel tuo repository, vai su `Insights > Community` per vedere come il tuo progetto si confronta con gli standard comunitari raccomandati.

   Ecco alcune cose che possono migliorare il tuo repository GitHub:
   - **Descrizione**. Hai aggiunto una descrizione per il tuo progetto?
   - **README**. Hai aggiunto un README? GitHub fornisce indicazioni per scrivere un [README](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon).
   - **Linee guida per i contributi**. Il tuo progetto ha [linee guida per i contributi](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon)?
   - **Codice di condotta**. Un [Codice di Condotta](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/),
   - **Licenza**. Forse più importante, una [licenza](https://docs.github.com/articles/adding-a-license-to-a-repository/)?

Tutte queste risorse saranno utili per integrare nuovi membri del team. E sono tipicamente il tipo di cose che i nuovi contributori guardano prima ancora di esaminare il tuo codice, per capire se il tuo progetto è il posto giusto dove spendere il loro tempo.

✅ I file README, anche se richiedono tempo per essere preparati, sono spesso trascurati dai manutentori impegnati. Riesci a trovare un esempio di uno particolarmente descrittivo? Nota: ci sono alcuni [strumenti per aiutare a creare buoni README](https://www.makeareadme.com/) che potresti voler provare.

### Compito: Unire del codice

I documenti di contributo aiutano le persone a contribuire al progetto. Spiegano quali tipi di contributi stai cercando e come funziona il processo. I contributori dovranno seguire una serie di passaggi per poter contribuire al tuo repository su GitHub:

1. **Fork del tuo repository**. Probabilmente vorrai che le persone _forkino_ il tuo progetto. Forkare significa creare una replica del tuo repository sul loro profilo GitHub.
1. **Clonare**. Da lì cloneranno il progetto sul loro computer locale.
1. **Creare un branch**. Vorrai chiedere loro di creare un _branch_ per il loro lavoro.
1. **Concentrarsi su un'area**. Chiedi ai contributori di concentrarsi su un contributo alla volta: in questo modo le possibilità che tu possa _unire_ il loro lavoro sono più alte. Immagina che scrivano una correzione di bug, aggiungano una nuova funzionalità e aggiornino diversi test: cosa succede se vuoi, o puoi implementare solo 2 su 3, o 1 su 3 modifiche?

✅ Immagina una situazione in cui i branch sono particolarmente critici per scrivere e distribuire buon codice. Quali casi d'uso ti vengono in mente?

> Nota, sii il cambiamento che vuoi vedere nel mondo e crea branch anche per il tuo lavoro. Qualsiasi commit che fai sarà fatto sul branch su cui sei attualmente "checkout". Usa `git status` per vedere su quale branch ti trovi.

Passiamo attraverso un flusso di lavoro per i contributori. Supponiamo che il contributore abbia già _forkato_ e _clonato_ il repository, quindi ha un repository Git pronto per essere lavorato sul suo computer locale:

1. **Creare un branch**. Usa il comando `git branch` per creare un branch che conterrà le modifiche che intende contribuire:

   ```bash
   git branch [branch-name]
   ```

1. **Passare al branch di lavoro**. Passa al branch specificato e aggiorna la directory di lavoro con `git switch`:

   ```bash
   git switch [branch-name]
   ```

1. **Lavorare**. A questo punto vuoi aggiungere le tue modifiche. Non dimenticare di comunicarlo a Git con i seguenti comandi:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Assicurati di dare al tuo commit un buon nome, per il tuo bene e per quello del manutentore del repository a cui stai contribuendo.

1. **Combinare il tuo lavoro con il branch `main`**. A un certo punto hai finito di lavorare e vuoi combinare il tuo lavoro con quello del branch `main`. Il branch `main` potrebbe essere cambiato nel frattempo, quindi assicurati prima di aggiornarlo con i seguenti comandi:

   ```bash
   git switch main
   git pull
   ```

   A questo punto vuoi assicurarti che eventuali _conflitti_, situazioni in cui Git non può facilmente _combinare_ le modifiche, si verifichino nel tuo branch di lavoro. Pertanto, esegui i seguenti comandi:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Il comando `git merge main` porterà tutte le modifiche da `main` nel tuo branch. Si spera che tu possa semplicemente continuare. In caso contrario, VS Code ti dirà dove Git è _confuso_ e tu altererai i file interessati per indicare quale contenuto è il più accurato.

   Per passare a un branch diverso, usa il moderno comando `git switch`:
   ```bash
   git switch [branch_name]


1. **Inviare il tuo lavoro a GitHub**. Inviare il tuo lavoro a GitHub significa due cose: spingere il tuo branch al tuo repository e poi aprire una PR, Pull Request.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   Il comando sopra crea il branch nel tuo repository forkato.
1. **Apri una PR**. Successivamente, vuoi aprire una PR. Per farlo, vai al repository forkato su GitHub. Vedrai un'indicazione su GitHub che ti chiede se vuoi creare una nuova PR; clicca su quella e verrai portato a un'interfaccia dove puoi modificare il titolo del messaggio di commit e fornire una descrizione più adatta. Ora il manutentore del repository che hai forkato vedrà questa PR e _incrociamo le dita_ apprezzerà e _unirà_ la tua PR. Ora sei un collaboratore, evviva :)

1. **Pulizia**. È considerata una buona pratica _fare pulizia_ dopo aver unito con successo una PR. Vuoi pulire sia il tuo branch locale che il branch che hai caricato su GitHub. Per prima cosa, eliminiamolo localmente con il seguente comando:

   ```bash
   git branch -d [branch-name]
   ```
  
   Assicurati di andare alla pagina GitHub del repository forkato e rimuovere il branch remoto che hai appena caricato.

`Pull request` sembra un termine strano perché in realtà vuoi spingere le tue modifiche nel progetto. Ma il manutentore (proprietario del progetto) o il team principale deve considerare le tue modifiche prima di unirle al branch "main" del progetto, quindi stai davvero richiedendo una decisione di modifica da parte di un manutentore.

Una pull request è il luogo in cui confrontare e discutere le differenze introdotte in un branch con revisioni, commenti, test integrati e altro. Una buona pull request segue più o meno le stesse regole di un messaggio di commit. Puoi aggiungere un riferimento a un problema nel tracker degli issue, ad esempio quando il tuo lavoro risolve un problema. Questo si fa usando un `#` seguito dal numero del problema. Ad esempio `#97`.

🤞Incrociamo le dita che tutti i controlli passino e che il/i proprietario/i del progetto uniscano le tue modifiche nel progetto🤞

Aggiorna il tuo branch di lavoro locale corrente con tutti i nuovi commit dal branch remoto corrispondente su GitHub:

`git pull`

## Come contribuire all'open source

Per prima cosa, troviamo un repository (o **repo**) su GitHub che ti interessa e al quale vorresti contribuire con una modifica. Vorrai copiarne il contenuto sulla tua macchina.

✅ Un buon modo per trovare repository 'adatti ai principianti' è [cercare con il tag 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Copia un repo localmente](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.it.png)

Ci sono diversi modi per copiare il codice. Un modo è "clonare" il contenuto del repository, utilizzando HTTPS, SSH o il GitHub CLI (Command Line Interface).

Apri il terminale e clona il repository in questo modo:  
`git clone https://github.com/ProjectURL`

Per lavorare sul progetto, passa alla cartella corretta:  
`cd ProjectURL`

Puoi anche aprire l'intero progetto utilizzando [Codespaces](https://github.com/features/codespaces), l'editor di codice integrato / ambiente di sviluppo cloud di GitHub, o [GitHub Desktop](https://desktop.github.com/).

Infine, puoi scaricare il codice in una cartella compressa.

### Alcune cose interessanti su GitHub

Puoi mettere una stella, seguire e/o "forkare" qualsiasi repository pubblico su GitHub. Puoi trovare i tuoi repository con stella nel menu a tendina in alto a destra. È come salvare nei segnalibri, ma per il codice.

I progetti hanno un tracker degli issue, per lo più su GitHub nella scheda "Issues" a meno che non sia indicato diversamente, dove le persone discutono dei problemi relativi al progetto. E la scheda Pull Requests è dove le persone discutono e revisionano le modifiche in corso.

I progetti potrebbero anche avere discussioni in forum, mailing list o canali di chat come Slack, Discord o IRC.

✅ Dai un'occhiata al tuo nuovo repository GitHub e prova alcune cose, come modificare le impostazioni, aggiungere informazioni al tuo repository e creare un progetto (come una bacheca Kanban). C'è molto che puoi fare!

---

## 🚀 Sfida

Lavora in coppia con un amico sul codice di ciascuno. Create un progetto collaborativo, forkate il codice, create branch e unite le modifiche.

## Quiz post-lezione  
[Quiz post-lezione](https://ff-quizzes.netlify.app/web/en/)

## Revisione e studio autonomo  

Leggi di più su [come contribuire al software open source](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).

[Cheatsheet di Git](https://training.github.com/downloads/github-git-cheat-sheet/).

Pratica, pratica, pratica. GitHub offre ottimi percorsi di apprendimento disponibili su [skills.github.com](https://skills.github.com):

- [Prima settimana su GitHub](https://skills.github.com/#first-week-on-github)

Troverai anche corsi più avanzati.

## Compito  

Completa [il corso Prima settimana su GitHub](https://skills.github.com/#first-week-on-github)

---

**Disclaimer (Avvertenza)**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un esperto umano. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.