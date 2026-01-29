## GIT alapjai webfejlesztő kezdőknek👶

## Mi az a `Git`?
1. A Git egy elosztott verziókezelő rendszer.
2. Az egész kódbázis és annak története minden fejlesztő számítógépén elérhető, ami megkönnyíti az ágak létrehozását és összevonását.
3. Verziókezelő rendszerként (VCS) használják a számítógépes fájlok változásainak nyomon követésére.

* Elosztott verziókezelés
* Több fejlesztő munkájának koordinálása  
* Ki milyen változtatásokat végzett és mikor
* Bármikor visszaállítható
* Lokális és távoli tárolók

## GIT FOGALMAK
* Nyomon követi a kód történetét
* "Pillanatképeket" készít a fájljaidról
* Te döntöd el, mikor készítesz pillanatképet, azaz "commit"-ot
* Bármikor visszatérhetsz egy korábbi pillanatképhez
* Fájlokat előzetesen "stage"-elhetsz a commit előtt

### Különbség Git és GitHub között

| Git | GitHub |
| ------- | ----------- |
| A Git egy szoftver | A GitHub egy felhőszolgáltatás |
| A Git helyileg van telepítve a rendszerre | A GitHub az interneten van hosztolva |
| Parancssori eszköz | Grafikus felhasználói felület |
| A Gitet a Linux tartja karban | A GitHubot a Microsoft tartja karban |
| A Git a verziókezelésre és kódmegosztásra fókuszál | A GitHub a központosított forráskód hosztolásra fókuszál |
| A Git nyílt forráskódú licencelt | A GitHub ingyenes és fizetős csomagokat kínál |
| A Git 2005-ben jelent meg | A GitHub 2008-ban jelent meg |

## GIT telepítése
* Linux (Debian)
    `$sudo apt-get install git`
* Linux (Fedora)
    `$sudo yum install git`
* [Letöltés](http://git-scm.com/download/mac) Mac-re
* [Letöltés](http://git-scm.com/download/win) Windows-ra

### Telepítési folyamat lépései:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. Ezután folytasd a Next > Next > Next > <b>Install</b> gombokkal
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Telepítés után konfigurálnunk kell a Gitet a git bash használatával
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## Git parancsok
___

### Projektek létrehozása és letöltése

| Parancs | Leírás |
| ------- | ----------- |
| `git init` | Lokális Git tároló inicializálása |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Távoli tároló lokális másolatának létrehozása |

### Alapvető pillanatképek készítése

| Parancs | Leírás |
| ------- | ----------- |
| `git status` | Állapot ellenőrzése |
| `git add [file-name.txt]` | Fájl hozzáadása a staging területhez |
| `git add -A` | Minden új és módosított fájl hozzáadása a staging területhez |
| `git commit -m "[commit message]"` | Változások elmentése (commit) |
| `git rm -r [file-name.txt]` | Fájl (vagy mappa) eltávolítása |
| `git push` | Feltöltés a távoli tárolóba |
| `git pull` | Legfrissebb változások letöltése a távoli tárolóból |

### Ágak kezelése és összevonása

| Parancs | Leírás |
| ------- | ----------- |
| `git branch` | Ágak listázása (a csillag jelzi az aktuális ágat) |
| `git branch -a` | Minden ág listázása (lokális és távoli) |
| `git branch [branch name]` | Új ág létrehozása |
| `git branch -D [branch name]` | Ág törlése |
| `git push origin --delete [branch name]` | Távoli ág törlése |
| `git checkout -b [branch name]` | Új ág létrehozása és váltás rá |
| `git checkout -b [branch name] origin/[branch name]` | Távoli ág klónozása és váltás rá |
| `git branch -m [old branch name] [new branch name]` | Lokális ág átnevezése |
| `git checkout [branch name]` | Váltás egy ágra |
| `git checkout -` | Váltás az utoljára kiválasztott ágra |
| `git checkout -- [file-name.txt]` | Változások elvetése egy fájlban |
| `git merge [branch name]` | Ág összevonása az aktív ággal |
| `git merge [source branch] [target branch]` | Ág összevonása egy célággal |
| `git stash` | Változások ideiglenes tárolása |
| `git stash clear` | Minden ideiglenesen tárolt bejegyzés eltávolítása |

### Projektek megosztása és frissítése

| Parancs | Leírás |
| ------- | ----------- |
| `git push origin [branch name]` | Ág feltöltése a távoli tárolóba |
| `git push -u origin [branch name]` | Változások feltöltése a távoli tárolóba (és az ág megjegyzése) |
| `git push` | Változások feltöltése a távoli tárolóba (megjegyzett ág) |
| `git push origin --delete [branch name]` | Távoli ág törlése |
| `git pull` | Lokális tároló frissítése a legújabb commit-ra |
| `git pull origin [branch name]` | Változások letöltése a távoli tárolóból |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Távoli tároló hozzáadása |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Tároló eredeti ágának beállítása SSH-ra |

### Ellenőrzés és összehasonlítás

| Parancs | Leírás |
| ------- | ----------- |
| `git log` | Változások megtekintése |
| `git log --summary` | Változások megtekintése (részletesen) |
| `git log --oneline` | Változások megtekintése (röviden) |
| `git diff [source branch] [target branch]` | Változások előnézete összevonás előtt |

---

**Felelősségi nyilatkozat**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével került lefordításra. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Fontos információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.