## GIT-i põhialused veebiarenduse algajatele👶

## Mis on `Git`?
      1. Git on hajutatud versioonihaldussüsteem.
      2. Kogu koodibaas ja ajalugu on saadaval iga arendaja arvutis, 
         mis võimaldab lihtsat harude loomist ja ühendamist.
      3. Seda kasutatakse versioonihaldussüsteemina (VCS) arvutifailide muudatuste jälgimiseks.

* Hajutatud versioonihaldus
* Koordineerib tööd mitme arendaja vahel  
* Kes tegi milliseid muudatusi ja millal
* Võimalus igal ajal muudatusi tagasi võtta
* Kohalikud ja kaughoidlad

## GIT-i PÕHIMÕTTED
* Jälgib koodi ajalugu
* Võtab failidest "hetktõmmiseid"
* Sina otsustad, millal hetktõmmis teha, tehes "commit'i"
* Võid igal ajal külastada mis tahes hetktõmmist
* Võid faile enne commit'i ette valmistada

### Erinevus Git-i ja GitHub-i vahel

| Git | GitHub |
| ------- | ----------- |
| Git on tarkvara | GitHub on pilveteenus |
| Git on paigaldatud kohalikult süsteemi | GitHub on veebis majutatud |
| See on käsurea tööriist | See on graafiline kasutajaliides |
| Git-i haldab Linux | GitHub-i haldab Microsoft |
| Keskendub versioonihaldusele ja koodi jagamisele | Keskendub tsentraliseeritud lähtekoodi majutamisele |
| Git on avatud lähtekoodiga litsentsiga | GitHub sisaldab tasuta ja tasulist versiooni |
| Git ilmus 2005. aastal | GitHub ilmus 2008. aastal |

## GIT-i paigaldamine
* Linux (Debian)
    `$sudo apt-get install git`
* Linux (Fedora)
    `$sudo yum install git`
* [Laadi alla](http://git-scm.com/download/mac) Mac-i jaoks
* [Laadi alla](http://git-scm.com/download/win) Windowsi jaoks

### Paigaldamise sammud:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. Seejärel jätka Next > Next > Next > <b>Install</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Pärast paigaldamist tuleb Git konfigureerida, kasutades Git Bash-i
  1. `git config --global user.name 'YourName'`
  2. `git config --global user.email 'YourEmail'`
___

## Git-i käsud
___

### Projektide hankimine ja loomine

| Käsk | Kirjeldus |
| ------- | ----------- |
| `git init` | Loo kohalik Git-hoidla |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Loo kaughoidla kohalik koopia |

### Põhiline hetktõmmiste tegemine

| Käsk | Kirjeldus |
| ------- | ----------- |
| `git status` | Kontrolli olekut |
| `git add [file-name.txt]` | Lisa fail ettevalmistusalasse |
| `git add -A` | Lisa kõik uued ja muudetud failid ettevalmistusalasse |
| `git commit -m "[commit message]"` | Salvesta muudatused |
| `git rm -r [file-name.txt]` | Eemalda fail (või kaust) |
| `git push` | Saada muudatused kaughoidlasse |
| `git pull` | Tõmba viimased muudatused kaughoidlast |

### Harude loomine ja ühendamine

| Käsk | Kirjeldus |
| ------- | ----------- |
| `git branch` | Näita harusid (tärn tähistab aktiivset haru) |
| `git branch -a` | Näita kõiki harusid (kohalikud ja kaughoidla omad) |
| `git branch [branch name]` | Loo uus haru |
| `git branch -D [branch name]` | Kustuta haru |
| `git push origin --delete [branch name]` | Kustuta kaughoidla haru |
| `git checkout -b [branch name]` | Loo uus haru ja lülitu sellele |
| `git checkout -b [branch name] origin/[branch name]` | Kloonige kaughoidla haru ja lülituge sellele |
| `git branch -m [old branch name] [new branch name]` | Nimeta kohalik haru ümber |
| `git checkout [branch name]` | Lülitu harule |
| `git checkout -` | Lülitu viimati kasutatud harule |
| `git checkout -- [file-name.txt]` | Loobu faili muudatustest |
| `git merge [branch name]` | Ühenda haru aktiivse haruga |
| `git merge [source branch] [target branch]` | Ühenda haru sihtmärgi haruga |
| `git stash` | Salvesta muudatused määrdunud töökaustas |
| `git stash clear` | Eemalda kõik salvestatud muudatused |

### Projektide jagamine ja uuendamine

| Käsk | Kirjeldus |
| ------- | ----------- |
| `git push origin [branch name]` | Saada haru kaughoidlasse |
| `git push -u origin [branch name]` | Saada muudatused kaughoidlasse (ja mäleta haru) |
| `git push` | Saada muudatused kaughoidlasse (mäletatud haru) |
| `git push origin --delete [branch name]` | Kustuta kaughoidla haru |
| `git pull` | Uuenda kohalik hoidla viimase commit'iga |
| `git pull origin [branch name]` | Tõmba muudatused kaughoidlast |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Lisa kaughoidla |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Määra hoidla algusharu SSH-ks |

### Kontrollimine ja võrdlemine

| Käsk | Kirjeldus |
| ------- | ----------- |
| `git log` | Vaata muudatusi |
| `git log --summary` | Vaata muudatusi (detailsemalt) |
| `git log --oneline` | Vaata muudatusi (lühidalt) |
| `git diff [source branch] [target branch]` | Eelvaata muudatusi enne ühendamist |

---

**Lahtiütlus**:  
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palume arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.