# Ehita Näidismäng

## Ülesande Ülevaade

Nüüd, kui oled oma kosmosemängus valdanud mängu lõpptingimused ja taaskäivitamise funktsionaalsuse, on aeg rakendada neid kontseptsioone täiesti uues mängukogemuses. Sa kavandad ja ehitad oma mängu, mis demonstreerib erinevaid lõpptingimuste mudeleid ja taaskäivitamise mehhanisme.

See ülesanne paneb sind loovalt mõtlema mängudisaini üle, samas harjutades õpitud tehnilisi oskusi. Sa uurid erinevaid võidu ja kaotuse stsenaariume, rakendad mängija edenemist ja lood kaasahaaravaid taaskäivitamise kogemusi.

## Projekti Nõuded

### Põhimängu Omadused

Sinu mäng peab sisaldama järgmisi olulisi elemente:

**Lõpptingimuste Mitmekesisus**: Rakenda vähemalt kahte erinevat mängu lõppemist viisi:
- **Punktipõhine võit**: Mängija saavutab sihtpunktisumma või kogub kindlaid esemeid
- **Eludepõhine kaotus**: Mängija kaotab kõik saadaolevad elud või elupunktid
- **Eesmärgi täitmine**: Kõik vaenlased alistatud, kindlad esemed kogutud või eesmärgid saavutatud
- **Ajapõhine**: Mäng lõpeb pärast määratud kestust või taimer jõuab nulli

**Taaskäivitamise Funktsionaalsus**:
- **Mänguoleku puhastamine**: Eemalda kõik varasemad mänguobjektid ja lähtesta muutujad
- **Süsteemide uuesti initsialiseerimine**: Alusta uuesti uute mängija näitajate, vaenlaste ja eesmärkidega
- **Kasutajasõbralikud juhised**: Paku selged juhised mängu taaskäivitamiseks

**Mängija Tagasiside**:
- **Võiduteated**: Tähista mängija saavutusi positiivse tagasisidega
- **Kaotusteated**: Paku julgustavaid sõnumeid, mis motiveerivad uuesti mängima
- **Edenemise näitajad**: Näita jooksvaid skoori, elusid või eesmärgi olekut

### Mänguideed ja Inspiratsioon

Vali üks järgmistest mängukontseptidest või loo oma:

#### 1. Konsooli seiklusmäng
Loo tekstipõhine seiklus koos võitlusmehhaanikaga:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Olulised funktsioonid rakendamiseks:**
- **Pöördepõhine võitlus** erinevate ründevõimalustega
- **Elupunktid** nii mängijale kui vaenlastele
- **Varustussüsteem** müntide või esemete kogumiseks
- **Mitmed vaenlase tüübid** erineva raskusastmega
- **Võidu tingimus** kui kõik vaenlased on alistatud

#### 2. Kogumismäng
- **Eesmärk**: Kogu kindlaid esemeid, vältides takistusi
- **Lõpptingimused**: Saavuta sihtkogus või kaota kõik elud
- **Edenemine**: Esmed muutuvad raskemini kättesaadavaks mängu edenedes

#### 3. Puslemäng
- **Eesmärk**: Lahenda järjest keerukamaid mõistatusi
- **Lõpptingimused**: Lõpeta kõik tasemed või kasuta ära kõik käigud/taimer
- **Taaskäivitamine**: Lähtesta edusammud ja alusta esimesest tasemest uuesti

#### 4. Kaitsemäng
- **Eesmärk**: Kaitse oma baasi vaenlaste lainete eest
- **Lõpptingimused**: Elu kõik lained üle (võit) või baas hävib (kaotus)
- **Edenemine**: Vaenlaste lained muutuvad raskemaks ja arvukamaks

## Rakendamisjuhised

### Algus

1. **Plaani oma mängudisaini**:
   - Joonista põhiline mängutsükkel
   - Määra oma lõpptingimused selgelt
   - Tuvasta, millised andmed tuleb taaskäivitamisel lähtestada

2. **Sea üles projekti struktuur**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Loo oma põhimängutsükkel**:
   - Initsialiseeri mänguolek
   - Tööta kasutajasisendiga
   - Uuenda mänguloogikat
   - Kontrolli lõpptingimusi
   - Kuvada jooksvat olekut

### Tehnilised Nõuded

**Kasuta kaasaegset JavaScripti**:
- Rakenda muutujate deklareerimisel `const` ja `let`
- Kasuta noolefunktsioone, kus sobib
- Rakenda ES6+ omadusi nagu templaatstringid ja destruktureerimine

**Sündmuspõhine Arhitektuur**:
- Loo sündmuste töötlejad kasutajaliidese interaktsioonide jaoks
- Rakenda mänguoleku muutusi sündmuste kaudu
- Kasuta sündmuse kuulajaid taaskäivitamise funktsionaalsuseks

**Puhtakoodi Praktikad**:
- Kirjuta funktsioonid ühe ülesandega
- Kasuta kirjeldavaid muutujate ja funktsioonide nimesid
- Lisa kommentaare, mis selgitavad mänguloogikat ja reegleid
- Järjesta kood loogilistesse sektsioonidesse

## Esitamise Nõuded

### Esitatud Failid

1. **Täielikud mängufailid**: Kõik HTML, CSS ja JavaScripti failid, mida mänguks vaja
2. **README.md**: Dokumentatsioon, mis selgitab:
   - Kuidas mängu mängida
   - Millised lõpptingimused on rakendatud
   - Juhised taaskäivitamiseks
   - Spetsiaalsed omadused või mehhaanikad
3. **Koodi kommentaarid**: Selged selgitused mänguloogika ja algoritmide kohta

### Testimise Kontrollnimekiri

Enne esitmist veendu, et su mäng:

- [ ] **Jookseb ilma vigadeta** brauseri konsoolis
- [ ] **Rakendab mitu lõpptingimust** nagu nõutud
- [ ] **Taaskäivitub korralikult** ja puhastab oleku
- [ ] **Annavad mängijale selget tagasisidet** mängu oleku kohta
- [ ] **Kasutab kaasaegset JavaScripti** süntaksit ja parimaid tavasid
- [ ] **Sisaldab põhjalikku dokumentatsiooni** README.md-s

## Hindamisjuhend

| Kriteerium | Suurepärane (4) | Hea (3) | Arenguaste (2) | Algus (1) |
|------------|-----------------|---------|----------------|-----------|
| **Mängu funktsionaalsus** | Täielik mäng mitme lõpptingimusega, sujuva taaskäivitusprotsessiga ja hästi lihvitud mängukogemusega | Täielik mäng, baastasemel lõpptingimused ja toimiv taaskäivitamine | Osaline mäng, mõned lõpptingimused rakendatud, taaskäivitamisel väikesed vead | Mittetäielik mäng piiratud funktsionaalsusega ja oluliste vigadega |
| **Koodi kvaliteet** | Puhas, hästi organiseeritud kood kaasaegsete JavaScripti praktikatega, põhjalike kommentaaridega ja suurepärase struktuuriga | Hea koodi organiseerimine kaasaegse süntaksiga, piisavate kommentaaridega ja selge ülesehitusega | Põhiline koodi organiseerimine, mõned kaasaegsed praktikad, minimaalsed kommentaarid | Kehv koodi organiseerimine, ajale jalgu jäänud süntaks, kommentaarideta ja struktuur puudulik |
| **Kasutajakogemus** | Intuitiivne mäng koos selgete juhiste, suurepärase tagasiside ja kaasahaarava lõpu/taaskäivitus kogemusega | Hea mäng koos piisavate juhiste ja tagasisidega, toimiv lõpp/taaskäivitus | Baastasemel mäng, minimaalsete juhistega, piiratud tagasiside mänguoleku kohta | Segane mäng, ebaselged juhised ja halb kasutajate tagasiside |
| **Tehniline rakendus** | Näitab mänguarenduse kontseptsioonide, sündmuste käsitlemise ja oleku haldamise valdamist | Tugev arusaam mängukontseptsioonidest hea rakendusega | Põhiline arusaam ja vastuvõetav rakendus | Piiratud arusaam ja kehv rakendus |
| **Dokumentatsioon** | Põhjalik README koos selgete juhiste, hästi dokumenteeritud koodi ja põhjalike testimisandmetega | Hea dokumentatsioon koos selgete juhiste ja piisavate kommentaaridega | Põhjalik dokumentatsioon minimaalse juhistete ja kommentaaridega | Kehv või puuduv dokumentatsioon |

### Hindamisskaala
- **Suurepärane (16-20 punkti)**: Ületab ootusi loominguliste omaduste ja lihvitud rakendusega
- **Hea (12-15 punkti)**: Vastab kõigile nõuetele korraliku täitmisega
- **Arengujärgne (8-11 punkti)**: Vastab enamikele nõuetele väikeste puudustega
- **Algus (4-7 punkti)**: Vastab mõnele nõudele, kuid vajab olulist parandamist

## Täiendavad Õppematerjalid

- [MDN mänguarenduse juhend](https://developer.mozilla.org/en-US/docs/Games)
- [JavaScript-i mänguarenduse õpikud](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Canvas API dokumentatsioon](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Mängudisaini põhimõtted](https://www.gamasutra.com/blogs/)

> 💡 **Kasulik näpunäide**: Alusta lihtsaga ja lisa funktsioone järk-järgult. Hästi lihvitud lihtne mäng on parem kui keerukas vigadega mäng!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest vabastamine**:  
See dokument on tõlgitud kasutades tehisintellekti tõlketeenust [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi me püüame täpsust, tuleb arvestada, et automatiseeritud tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle emakeeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitatakse kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti mõistmiste eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->