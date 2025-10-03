<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T15:58:02+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "cs"
}
-->
## Základy GITu pro začátečníky ve webovém vývoji 👶

## Co je `Git`?
1. Git je distribuovaný systém pro správu verzí.
2. Celá základna kódu a historie je dostupná na každém vývojářském počítači, což umožňuje snadné větvení a slučování.
3. Používá se jako systém pro správu verzí (VCS) ke sledování změn v počítačových souborech.

* Distribuovaná správa verzí
* Koordinace práce mezi více vývojáři  
* Kdo udělal jaké změny a kdy
* Možnost návratu zpět kdykoliv
* Lokální a vzdálené repozitáře

## KONCEPTY GITU
* Sleduje historii kódu
* Vytváří "snímky" vašich souborů
* Vy rozhodujete, kdy vytvořit snímek pomocí "commitu"
* Můžete kdykoliv navštívit jakýkoliv snímek
* Můžete připravit soubory před commitováním

### Rozdíl mezi Git a GitHub

| Git | GitHub |
| ------- | ----------- |
| Git je software | GitHub je cloudová služba |
| Git je nainstalován lokálně na systému | GitHub je hostován na webu |
| Je to nástroj příkazového řádku | Je to grafické uživatelské rozhraní |
| Git je spravován Linuxem | GitHub je spravován Microsoftem |
| Zaměřuje se na správu verzí a sdílení kódu | Zaměřuje se na centralizované hostování zdrojového kódu |
| Git je open-source licencovaný | GitHub zahrnuje bezplatnou a placenou verzi |
| Git byl vydán v roce 2005 | GitHub byl vydán v roce 2008 |

## Instalace GITu
* Linux (Debian)
    `$sudo apt-get install git`
* Linux (Fedora)
    `$sudo yum install git`
* [Stáhnout](http://git-scm.com/download/mac) pro Mac
* [Stáhnout](http://git-scm.com/download/win) pro Windows

### Kroky instalace:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. Poté pokračujte Další > Další > Další > <b>Instalovat</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Po instalaci je potřeba nakonfigurovat Git pomocí Git Bash
1. `git config --global user.name 'VašeJméno'`
2. `git config --global user.email 'VášEmail'`
___

## Příkazy Gitu
___

### Získání a vytváření projektů

| Příkaz | Popis |
| ------- | ----------- |
| `git init` | Inicializace lokálního Git repozitáře |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Vytvoření lokální kopie vzdáleného repozitáře |

### Základní snímkování

| Příkaz | Popis |
| ------- | ----------- |
| `git status` | Zkontrolovat stav |
| `git add [file-name.txt]` | Přidat soubor do přípravné oblasti |
| `git add -A` | Přidat všechny nové a změněné soubory do přípravné oblasti |
| `git commit -m "[commit message]"` | Commitovat změny |
| `git rm -r [file-name.txt]` | Odstranit soubor (nebo složku) |
| `git push` | Odeslat do vzdáleného repozitáře |
| `git pull` | Stáhnout nejnovější změny z vzdáleného repozitáře |

### Větvení a slučování

| Příkaz | Popis |
| ------- | ----------- |
| `git branch` | Vypsat větve (hvězdička označuje aktuální větev) |
| `git branch -a` | Vypsat všechny větve (lokální a vzdálené) |
| `git branch [branch name]` | Vytvořit novou větev |
| `git branch -D [branch name]` | Smazat větev |
| `git push origin --delete [branch name]` | Smazat vzdálenou větev |
| `git checkout -b [branch name]` | Vytvořit novou větev a přepnout na ni |
| `git checkout -b [branch name] origin/[branch name]` | Klonovat vzdálenou větev a přepnout na ni |
| `git branch -m [old branch name] [new branch name]` | Přejmenovat lokální větev |
| `git checkout [branch name]` | Přepnout na větev |
| `git checkout -` | Přepnout na poslední použitou větev |
| `git checkout -- [file-name.txt]` | Zrušit změny v souboru |
| `git merge [branch name]` | Sloučit větev do aktivní větve |
| `git merge [source branch] [target branch]` | Sloučit větev do cílové větve |
| `git stash` | Uložit změny v nečistém pracovním adresáři |
| `git stash clear` | Odstranit všechny uložené položky |

### Sdílení a aktualizace projektů

| Příkaz | Popis |
| ------- | ----------- |
| `git push origin [branch name]` | Odeslat větev do vzdáleného repozitáře |
| `git push -u origin [branch name]` | Odeslat změny do vzdáleného repozitáře (a zapamatovat si větev) |
| `git push` | Odeslat změny do vzdáleného repozitáře (zapamatovaná větev) |
| `git push origin --delete [branch name]` | Smazat vzdálenou větev |
| `git pull` | Aktualizovat lokální repozitář na nejnovější commit |
| `git pull origin [branch name]` | Stáhnout změny z vzdáleného repozitáře |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Přidat vzdálený repozitář |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Nastavit origin větve repozitáře na SSH |

### Inspekce a porovnání

| Příkaz | Popis |
| ------- | ----------- |
| `git log` | Zobrazit změny |
| `git log --summary` | Zobrazit změny (podrobně) |
| `git log --oneline` | Zobrazit změny (stručně) |
| `git diff [source branch] [target branch]` | Náhled změn před sloučením |

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.