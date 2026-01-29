## Gitin perusteet web-kehityksen aloittelijoille👶

## Mikä on `Git`?
1. Git on hajautettu versionhallintajärjestelmä.
2. Koko koodikanta ja historia ovat saatavilla jokaisen kehittäjän tietokoneella, mikä mahdollistaa helpon haarautumisen ja yhdistämisen.
3. Sitä käytetään versionhallintajärjestelmänä (VCS) tietokoneen tiedostojen muutosten seuraamiseen.

* Hajautettu versionhallinta
* Koordinoi työtä useiden kehittäjien välillä  
* Kuka teki mitä muutoksia ja milloin
* Palauta muutokset milloin tahansa
* Paikalliset ja etävarastot

## GITIN KÄSITTEET
* Seuraa koodin historiaa
* Ottaa "tilannekuvia" tiedostoistasi
* Päätät itse, milloin otat tilannekuvan tekemällä "commitin"
* Voit tarkastella mitä tahansa tilannekuvaa milloin tahansa
* Voit valmistella tiedostoja ennen commitin tekemistä

### Ero Gitin ja GitHubin välillä

| Git | GitHub |
| ------- | ----------- |
| Git on ohjelmisto | GitHub on pilvipalvelu |
| Git asennetaan paikallisesti järjestelmään | GitHub on verkossa |
| Se on komentorivityökalu | Se on graafinen käyttöliittymä |
| Gitin ylläpitäjä on Linux | GitHubin ylläpitäjä on Microsoft |
| Keskittyy versionhallintaan ja koodin jakamiseen | Keskittyy keskitettyyn lähdekoodin isännöintiin |
| Git on avoimen lähdekoodin lisensoitu | GitHub sisältää ilmaisen ja maksullisen version |
| Git julkaistiin vuonna 2005 | GitHub julkaistiin vuonna 2008 |

## GITIN Asennus
* Linux (Debian)
    `$sudo apt-get install git`
* Linux (Fedora)
    `$sudo yum install git`
* [Lataa](http://git-scm.com/download/mac) Macille
* [Lataa](http://git-scm.com/download/win) Windowsille

### Asennusprosessin vaiheet:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. Jatka sitten Next > Next > Next > <b>Install</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Asennuksen jälkeen Git täytyy konfiguroida Git Bashin avulla
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## Git-komennot
___

### Projektien hakeminen ja luominen

| Komento | Kuvaus |
| ------- | ----------- |
| `git init` | Alusta paikallinen Git-repositorio |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Luo paikallinen kopio etävarastosta |

### Perustason tilannekuvien ottaminen

| Komento | Kuvaus |
| ------- | ----------- |
| `git status` | Tarkista tila |
| `git add [file-name.txt]` | Lisää tiedosto valmistelualueelle |
| `git add -A` | Lisää kaikki uudet ja muutetut tiedostot valmistelualueelle |
| `git commit -m "[commit message]"` | Tee commit muutoksista |
| `git rm -r [file-name.txt]` | Poista tiedosto (tai kansio) |
| `git push` | Lähetä muutokset etävarastoon |
| `git pull` | Hae viimeisimmät muutokset etävarastosta |

### Haarautuminen ja yhdistäminen

| Komento | Kuvaus |
| ------- | ----------- |
| `git branch` | Listaa haarat (tähti osoittaa nykyisen haaran) |
| `git branch -a` | Listaa kaikki haarat (paikalliset ja etähaarat) |
| `git branch [branch name]` | Luo uusi haara |
| `git branch -D [branch name]` | Poista haara |
| `git push origin --delete [branch name]` | Poista etähaara |
| `git checkout -b [branch name]` | Luo uusi haara ja vaihda siihen |
| `git checkout -b [branch name] origin/[branch name]` | Kloonaa etähaara ja vaihda siihen |
| `git branch -m [old branch name] [new branch name]` | Nimeä paikallinen haara uudelleen |
| `git checkout [branch name]` | Vaihda haaraan |
| `git checkout -` | Vaihda viimeksi tarkasteltuun haaraan |
| `git checkout -- [file-name.txt]` | Hylkää muutokset tiedostossa |
| `git merge [branch name]` | Yhdistä haara aktiiviseen haaraan |
| `git merge [source branch] [target branch]` | Yhdistä haara kohdehaaraan |
| `git stash` | Tallenna muutokset likaisessa työhakemistossa |
| `git stash clear` | Poista kaikki tallennetut merkinnät |

### Projektien jakaminen ja päivittäminen

| Komento | Kuvaus |
| ------- | ----------- |
| `git push origin [branch name]` | Lähetä haara etävarastoon |
| `git push -u origin [branch name]` | Lähetä muutokset etävarastoon (ja muista haara) |
| `git push` | Lähetä muutokset etävarastoon (muistettu haara) |
| `git push origin --delete [branch name]` | Poista etähaara |
| `git pull` | Päivitä paikallinen varasto uusimpaan commitin |
| `git pull origin [branch name]` | Hae muutokset etävarastosta |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Lisää etävarasto |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Aseta varaston alkuperähaara SSH:ksi |

### Tarkastelu ja vertailu

| Komento | Kuvaus |
| ------- | ----------- |
| `git log` | Näytä muutokset |
| `git log --summary` | Näytä muutokset (yksityiskohtaisesti) |
| `git log --oneline` | Näytä muutokset (lyhyesti) |
| `git diff [source branch] [target branch]` | Esikatsele muutokset ennen yhdistämistä |

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.