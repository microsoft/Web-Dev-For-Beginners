## Osnove GIT-a za začetnike spletnega razvoja👶

## Kaj je `Git`?
1. Git je porazdeljen sistem za nadzor različic.
2. Celotna baza kode in zgodovina sta na voljo na računalniku vsakega razvijalca, kar omogoča enostavno ustvarjanje vej in združevanje.
3. Uporablja se kot sistem za nadzor različic (VCS) za sledenje spremembam v računalniških datotekah.

* Porazdeljen nadzor različic
* Koordinira delo med več razvijalci  
* Kdo je naredil katere spremembe in kdaj
* Možnost povrnitve na prejšnje stanje kadarkoli
* Lokalni in oddaljeni repozitoriji

## KONCEPTI GIT-a
* Sledi zgodovini kode
* Ustvarja "posnetke" vaših datotek
* Sami se odločite, kdaj želite ustvariti posnetek, tako da naredite "commit"
* Kadarkoli lahko obiščete kateri koli posnetek
* Datoteke lahko pripravite za commit (staging)

### Razlika med Git in GitHub

| Git | GitHub |
| ------- | ----------- |
| Git je programska oprema | GitHub je storitev v oblaku |
| Git je nameščen lokalno na sistemu | GitHub je gostovan na spletu |
| Je orodje ukazne vrstice | Je grafični uporabniški vmesnik |
| Git vzdržuje Linux | GitHub vzdržuje Microsoft |
| Osredotočen je na nadzor različic in deljenje kode | Osredotočen je na centralizirano gostovanje izvorne kode |
| Git je odprtokoden | GitHub vključuje brezplačno in plačljivo različico |
| Git je bil izdan leta 2005 | GitHub je bil izdan leta 2008 |

## Namestitev GIT-a
* Linux (Debian)
    `$sudo apt-get install git`
* Linux (Fedora)
    `$sudo yum install git`
* [Prenesi](http://git-scm.com/download/mac) za Mac
* [Prenesi](http://git-scm.com/download/win) za Windows

### Koraki namestitve:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. Nato nadaljujte Naprej > Naprej > Naprej > <b>Namesti</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Po namestitvi moramo Git konfigurirati z uporabo Git Bash
1. `git config --global user.name 'VašeIme'`
2. `git config --global user.email 'VašEmail'`
___

## Git ukazi
___

### Pridobivanje in ustvarjanje projektov

| Ukaz | Opis |
| ------- | ----------- |
| `git init` | Inicializiraj lokalni Git repozitorij |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Ustvari lokalno kopijo oddaljenega repozitorija |

### Osnovno zajemanje posnetkov

| Ukaz | Opis |
| ------- | ----------- |
| `git status` | Preveri stanje |
| `git add [file-name.txt]` | Dodaj datoteko v staging območje |
| `git add -A` | Dodaj vse nove in spremenjene datoteke v staging območje |
| `git commit -m "[commit message]"` | Potrdi spremembe |
| `git rm -r [file-name.txt]` | Odstrani datoteko (ali mapo) |
| `git push` | Potisni v oddaljeni repozitorij |
| `git pull` | Povleci najnovejše spremembe iz oddaljenega repozitorija |

### Ustvarjanje vej in združevanje

| Ukaz | Opis |
| ------- | ----------- |
| `git branch` | Prikaži seznam vej (zvezdica označuje trenutno vejo) |
| `git branch -a` | Prikaži vse veje (lokalne in oddaljene) |
| `git branch [branch name]` | Ustvari novo vejo |
| `git branch -D [branch name]` | Izbriši vejo |
| `git push origin --delete [branch name]` | Izbriši oddaljeno vejo |
| `git checkout -b [branch name]` | Ustvari novo vejo in preklopi nanjo |
| `git checkout -b [branch name] origin/[branch name]` | Kloniraj oddaljeno vejo in preklopi nanjo |
| `git branch -m [old branch name] [new branch name]` | Preimenuj lokalno vejo |
| `git checkout [branch name]` | Preklopi na vejo |
| `git checkout -` | Preklopi na zadnjo uporabljeno vejo |
| `git checkout -- [file-name.txt]` | Zavrzi spremembe v datoteki |
| `git merge [branch name]` | Združi vejo v aktivno vejo |
| `git merge [source branch] [target branch]` | Združi vejo v ciljno vejo |
| `git stash` | Shrani spremembe v delovnem direktoriju |
| `git stash clear` | Odstrani vse shranjene vnose |

### Deljenje in posodabljanje projektov

| Ukaz | Opis |
| ------- | ----------- |
| `git push origin [branch name]` | Potisni vejo v oddaljeni repozitorij |
| `git push -u origin [branch name]` | Potisni spremembe v oddaljeni repozitorij (in si zapomni vejo) |
| `git push` | Potisni spremembe v oddaljeni repozitorij (zapomnjena veja) |
| `git push origin --delete [branch name]` | Izbriši oddaljeno vejo |
| `git pull` | Posodobi lokalni repozitorij na najnovejši commit |
| `git pull origin [branch name]` | Povleci spremembe iz oddaljenega repozitorija |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Dodaj oddaljeni repozitorij |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Nastavi izvorno vejo repozitorija na SSH |

### Pregledovanje in primerjava

| Ukaz | Opis |
| ------- | ----------- |
| `git log` | Prikaži spremembe |
| `git log --summary` | Prikaži spremembe (podrobno) |
| `git log --oneline` | Prikaži spremembe (na kratko) |
| `git diff [source branch] [target branch]` | Predogled sprememb pred združevanjem |

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.