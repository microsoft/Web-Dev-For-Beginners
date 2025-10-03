<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T15:58:23+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "sk"
}
-->
## Základy GITu pre začiatočníkov vo webovom vývoji👶

## Čo je `Git`?
1. Git je distribuovaný systém na správu verzií.
2. Celá kódová základňa a história sú dostupné na počítači každého vývojára, čo umožňuje jednoduché vetvenie a zlúčenie.
3. Používa sa ako systém na správu verzií (VCS) na sledovanie zmien v počítačových súboroch.

* Distribuovaná správa verzií
* Koordinuje prácu medzi viacerými vývojármi  
* Kto urobil aké zmeny a kedy
* Možnosť návratu kedykoľvek
* Lokálne a vzdialené repozitáre

## KONCEPTY GITu
* Sleduje históriu kódu
* Robí "snímky" vašich súborov
* Vy rozhodujete, kedy urobiť snímku, vytvorením "commitu"
* Môžete navštíviť akúkoľvek snímku kedykoľvek
* Môžete pripraviť súbory pred commitom

### Rozdiel medzi Git a GitHub

| Git | GitHub |
| ------- | ----------- |
| Git je softvér | GitHub je cloudová služba |
| Git je nainštalovaný lokálne na systéme | GitHub je hostovaný na webe |
| Je to nástroj príkazového riadku | Je to grafické rozhranie |
| Git je spravovaný Linuxom | GitHub je spravovaný Microsoftom |
| Zameriava sa na správu verzií a zdieľanie kódu | Zameriava sa na centralizované hosťovanie zdrojového kódu |
| Git je open-source licencovaný | GitHub obsahuje bezplatnú a platenú verziu |
| Git bol vydaný v roku 2005 | GitHub bol vydaný v roku 2008 |

## Inštalácia GITu
* Linux (Debian)
    `$sudo apt-get install git`
* Linux (Fedora)
    `$sudo yum install git`
* [Stiahnuť](http://git-scm.com/download/mac) pre Mac
* [Stiahnuť](http://git-scm.com/download/win) pre Windows

### Kroky inštalácie:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. Potom pokračujte ďalej > Ďalej > Ďalej > <b>Inštalovať</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Po inštalácii je potrebné nakonfigurovať Git pomocou Git Bash
1. `git config --global user.name 'VašeMeno'`
2. `git config --global user.email 'VášEmail'`
___

## Príkazy GITu
___

### Získanie a vytvorenie projektov

| Príkaz | Popis |
| ------- | ----------- |
| `git init` | Inicializuje lokálny Git repozitár |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Vytvorí lokálnu kópiu vzdialeného repozitára |

### Základné snímkovanie

| Príkaz | Popis |
| ------- | ----------- |
| `git status` | Skontroluje stav |
| `git add [file-name.txt]` | Pridá súbor do staging oblasti |
| `git add -A` | Pridá všetky nové a zmenené súbory do staging oblasti |
| `git commit -m "[commit message]"` | Uloží zmeny |
| `git rm -r [file-name.txt]` | Odstráni súbor (alebo priečinok) |
| `git push` | Nahraje zmeny do vzdialeného repozitára |
| `git pull` | Stiahne najnovšie zmeny zo vzdialeného repozitára |

### Vetvenie a zlúčenie

| Príkaz | Popis |
| ------- | ----------- |
| `git branch` | Zobrazí zoznam vetiev (hviezdička označuje aktuálnu vetvu) |
| `git branch -a` | Zobrazí všetky vetvy (lokálne a vzdialené) |
| `git branch [branch name]` | Vytvorí novú vetvu |
| `git branch -D [branch name]` | Odstráni vetvu |
| `git push origin --delete [branch name]` | Odstráni vzdialenú vetvu |
| `git checkout -b [branch name]` | Vytvorí novú vetvu a prepne sa na ňu |
| `git checkout -b [branch name] origin/[branch name]` | Naklonuje vzdialenú vetvu a prepne sa na ňu |
| `git branch -m [old branch name] [new branch name]` | Premenuje lokálnu vetvu |
| `git checkout [branch name]` | Prepne sa na vetvu |
| `git checkout -` | Prepne sa na poslednú použitú vetvu |
| `git checkout -- [file-name.txt]` | Zruší zmeny v súbore |
| `git merge [branch name]` | Zlúči vetvu do aktívnej vetvy |
| `git merge [source branch] [target branch]` | Zlúči vetvu do cieľovej vetvy |
| `git stash` | Uloží zmeny v nečistom pracovnom adresári |
| `git stash clear` | Odstráni všetky uložené položky |

### Zdieľanie a aktualizácia projektov

| Príkaz | Popis |
| ------- | ----------- |
| `git push origin [branch name]` | Nahraje vetvu do vzdialeného repozitára |
| `git push -u origin [branch name]` | Nahraje zmeny do vzdialeného repozitára (a zapamätá si vetvu) |
| `git push` | Nahraje zmeny do vzdialeného repozitára (zapamätaná vetva) |
| `git push origin --delete [branch name]` | Odstráni vzdialenú vetvu |
| `git pull` | Aktualizuje lokálny repozitár na najnovší commit |
| `git pull origin [branch name]` | Stiahne zmeny zo vzdialeného repozitára |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Pridá vzdialený repozitár |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Nastaví URL vzdialeného repozitára na SSH |

### Inšpekcia a porovnanie

| Príkaz | Popis |
| ------- | ----------- |
| `git log` | Zobrazí zmeny |
| `git log --summary` | Zobrazí zmeny (podrobne) |
| `git log --oneline` | Zobrazí zmeny (stručne) |
| `git diff [source branch] [target branch]` | Náhľad zmien pred zlúčením |

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.