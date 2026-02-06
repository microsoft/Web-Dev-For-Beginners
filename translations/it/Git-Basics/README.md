## Nozioni di base su GIT per principianti nello sviluppo web 👶

## Cos'è `Git`?
1. Git è un sistema di controllo di versione distribuito.  
2. L'intero codice e la cronologia sono disponibili sul computer di ogni sviluppatore, il che facilita la creazione di branch e il merging.  
3. Viene utilizzato come sistema di controllo di versione (VCS) per tracciare le modifiche ai file.  

* Controllo di versione distribuito  
* Coordina il lavoro tra più sviluppatori  
* Chi ha fatto quali modifiche e quando  
* Possibilità di tornare indietro in qualsiasi momento  
* Repository locali e remoti  

## CONCETTI DI GIT
* Tiene traccia della cronologia del codice  
* Crea "istantanee" dei tuoi file  
* Decidi tu quando creare un'istantanea effettuando un "commit"  
* Puoi visitare qualsiasi istantanea in qualsiasi momento  
* Puoi preparare i file prima di effettuare il commit  

### Differenza tra Git e GitHub

| Git | GitHub |
| ------- | ----------- |
| Git è un software | GitHub è un servizio cloud |
| Git è installato localmente sul sistema | GitHub è ospitato sul web |
| È uno strumento da riga di comando | È un'interfaccia grafica |
| Git è mantenuto da Linux | GitHub è mantenuto da Microsoft |
| È focalizzato sul controllo di versione e sulla condivisione del codice | È focalizzato sull'hosting centralizzato del codice sorgente |
| Git è open-source | GitHub include un piano gratuito e uno a pagamento |
| Git è stato rilasciato nel 2005 | GitHub è stato rilasciato nel 2008 |

## Installazione di GIT
* Linux (Debian)  
    `$sudo apt-get install git`  
* Linux (Fedora)  
    `$sudo yum install git`  
* [Scarica](http://git-scm.com/download/mac) per Mac  
* [Scarica](http://git-scm.com/download/win) per Windows  

### Passaggi per l'installazione:  
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>  
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>  
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>  
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>  
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>  
6. Poi continua con Next > Next > Next > <b>Install</b>  
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>  

### Dopo l'installazione, è necessario configurare Git utilizzando Git Bash  
1. `git config --global user.name 'YourName'`  
2. `git config --global user.email 'YourEmail'`  
___  

## Comandi Git  
___  

### Creazione e gestione di progetti

| Comando | Descrizione |
| ------- | ----------- |
| `git init` | Inizializza un repository Git locale |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Crea una copia locale di un repository remoto |

### Snapshot di base

| Comando | Descrizione |
| ------- | ----------- |
| `git status` | Controlla lo stato |
| `git add [file-name.txt]` | Aggiungi un file all'area di staging |
| `git add -A` | Aggiungi tutti i file nuovi e modificati all'area di staging |
| `git commit -m "[commit message]"` | Effettua un commit delle modifiche |
| `git rm -r [file-name.txt]` | Rimuovi un file (o una cartella) |
| `git push` | Invia al repository remoto |
| `git pull` | Scarica le ultime modifiche dal repository remoto |

### Branching e merging

| Comando | Descrizione |
| ------- | ----------- |
| `git branch` | Elenca i branch (l'asterisco indica il branch corrente) |
| `git branch -a` | Elenca tutti i branch (locali e remoti) |
| `git branch [branch name]` | Crea un nuovo branch |
| `git branch -D [branch name]` | Elimina un branch |
| `git push origin --delete [branch name]` | Elimina un branch remoto |
| `git checkout -b [branch name]` | Crea un nuovo branch e passa ad esso |
| `git checkout -b [branch name] origin/[branch name]` | Clona un branch remoto e passa ad esso |
| `git branch -m [old branch name] [new branch name]` | Rinomina un branch locale |
| `git checkout [branch name]` | Passa a un branch |
| `git checkout -` | Torna al branch precedentemente selezionato |
| `git checkout -- [file-name.txt]` | Annulla le modifiche a un file |
| `git merge [branch name]` | Unisce un branch al branch attivo |
| `git merge [source branch] [target branch]` | Unisce un branch a un branch di destinazione |
| `git stash` | Salva temporaneamente le modifiche in una directory di lavoro |
| `git stash clear` | Rimuove tutte le modifiche salvate temporaneamente |

### Condivisione e aggiornamento di progetti

| Comando | Descrizione |
| ------- | ----------- |
| `git push origin [branch name]` | Invia un branch al repository remoto |
| `git push -u origin [branch name]` | Invia modifiche al repository remoto (e ricorda il branch) |
| `git push` | Invia modifiche al repository remoto (branch ricordato) |
| `git push origin --delete [branch name]` | Elimina un branch remoto |
| `git pull` | Aggiorna il repository locale con l'ultimo commit |
| `git pull origin [branch name]` | Scarica modifiche dal repository remoto |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Aggiungi un repository remoto |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Imposta il branch di origine di un repository su SSH |

### Ispezione e confronto

| Comando | Descrizione |
| ------- | ----------- |
| `git log` | Visualizza le modifiche |
| `git log --summary` | Visualizza le modifiche (dettagliate) |
| `git log --oneline` | Visualizza le modifiche (brevi) |
| `git diff [source branch] [target branch]` | Anteprima delle modifiche prima del merging |

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un traduttore umano. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.