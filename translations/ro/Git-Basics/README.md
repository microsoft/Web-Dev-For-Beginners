## Noțiuni de bază despre GIT pentru începători în dezvoltarea web 👶

## Ce este `Git`?
1. Git este un sistem distribuit de control al versiunilor.
2. Întregul cod sursă și istoricul sunt disponibile pe computerul fiecărui dezvoltator, ceea ce permite ramificarea și îmbinarea ușoară.
3. Este utilizat ca sistem de control al versiunilor (VCS) pentru a urmări modificările fișierelor de pe computer.

* Control al versiunilor distribuit
* Coordonează munca între mai mulți dezvoltatori  
* Cine a făcut ce modificări și când
* Revenire la orice moment
* Repositori locale și remote

## CONCEPTELE GIT
* Urmărește istoricul codului
* Face "instantanee" ale fișierelor tale
* Tu decizi când să faci o instantanee prin crearea unui "commit"
* Poți vizita orice instantanee oricând
* Poți pregăti fișiere înainte de a le comite

### Diferența între Git și GitHub

| Git | GitHub |
| ------- | ----------- |
| Git este un software | GitHub este un serviciu cloud |
| Git este instalat local pe sistem | GitHub este găzduit pe web |
| Este un instrument de linie de comandă | Este o interfață grafică |
| Git este întreținut de Linux | GitHub este întreținut de Microsoft |
| Este axat pe controlul versiunilor și partajarea codului | Este axat pe găzduirea centralizată a codului sursă |
| Git este licențiat open-source | GitHub include un nivel gratuit și unul plătit |
| Git a fost lansat în 2005 | GitHub a fost lansat în 2008 |

## Instalarea GIT
* Linux (Debian)
    `$sudo apt-get install git`
* Linux (Fedora)
    `$sudo yum install git`
* [Descărcare](http://git-scm.com/download/mac) pentru Mac
* [Descărcare](http://git-scm.com/download/win) pentru Windows

### Pașii procesului de instalare:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. Apoi continuă cu Next > Next > Next > <b>Install</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### După instalare, trebuie să configurăm Git folosind Git Bash
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## Comenzi Git
___

### Obținerea și crearea proiectelor

| Comandă | Descriere |
| ------- | ----------- |
| `git init` | Inițializează un repository Git local |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Creează o copie locală a unui repository remote |

### Crearea de instantanee de bază

| Comandă | Descriere |
| ------- | ----------- |
| `git status` | Verifică starea |
| `git add [file-name.txt]` | Adaugă un fișier în zona de pregătire |
| `git add -A` | Adaugă toate fișierele noi și modificate în zona de pregătire |
| `git commit -m "[commit message]"` | Comite modificările |
| `git rm -r [file-name.txt]` | Șterge un fișier (sau folder) |
| `git push` | Trimite modificările către repository-ul remote |
| `git pull` | Preia cele mai recente modificări din repository-ul remote |

### Ramificare și îmbinare

| Comandă | Descriere |
| ------- | ----------- |
| `git branch` | Listează ramurile (asteriscul indică ramura curentă) |
| `git branch -a` | Listează toate ramurile (locale și remote) |
| `git branch [branch name]` | Creează o nouă ramură |
| `git branch -D [branch name]` | Șterge o ramură |
| `git push origin --delete [branch name]` | Șterge o ramură remote |
| `git checkout -b [branch name]` | Creează o nouă ramură și trece la ea |
| `git checkout -b [branch name] origin/[branch name]` | Clonează o ramură remote și trece la ea |
| `git branch -m [old branch name] [new branch name]` | Redenumește o ramură locală |
| `git checkout [branch name]` | Treci la o ramură |
| `git checkout -` | Treci la ultima ramură accesată |
| `git checkout -- [file-name.txt]` | Renunță la modificările unui fișier |
| `git merge [branch name]` | Îmbină o ramură în ramura activă |
| `git merge [source branch] [target branch]` | Îmbină o ramură în ramura țintă |
| `git stash` | Salvează modificările într-un director de lucru murdar |
| `git stash clear` | Șterge toate intrările salvate |

### Partajarea și actualizarea proiectelor

| Comandă | Descriere |
| ------- | ----------- |
| `git push origin [branch name]` | Trimite o ramură către repository-ul remote |
| `git push -u origin [branch name]` | Trimite modificările către repository-ul remote (și memorează ramura) |
| `git push` | Trimite modificările către repository-ul remote (ramura memorată) |
| `git push origin --delete [branch name]` | Șterge o ramură remote |
| `git pull` | Actualizează repository-ul local la cel mai recent commit |
| `git pull origin [branch name]` | Preia modificările din repository-ul remote |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Adaugă un repository remote |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Setează ramura origin a unui repository la SSH |

### Inspecție și comparație

| Comandă | Descriere |
| ------- | ----------- |
| `git log` | Vizualizează modificările |
| `git log --summary` | Vizualizează modificările (detaliat) |
| `git log --oneline` | Vizualizează modificările (succint) |
| `git diff [source branch] [target branch]` | Previzualizează modificările înainte de îmbinare |

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa maternă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.