<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "232d592791465c1678cab3a2bb6cd3e8",
  "translation_date": "2025-10-25T00:43:17+00:00",
  "source_file": "6-space-game/6-end-condition/assignment.md",
  "language_code": "sl"
}
-->
# Ustvarite vzorčno igro

## Pregled naloge

Zdaj, ko ste obvladali pogoje za konec igre in funkcionalnost ponovnega zagona v vaši vesoljski igri, je čas, da te koncepte uporabite v povsem novi igralni izkušnji. Oblikovali in zgradili boste svojo igro, ki bo prikazala različne vzorce končnih pogojev in mehanizme ponovnega zagona.

Ta naloga vas spodbuja k ustvarjalnemu razmišljanju o oblikovanju igre, hkrati pa vadite tehnične veščine, ki ste se jih naučili. Raziskovali boste različne scenarije zmage in poraza, izvajali napredovanje igralca ter ustvarjali privlačne izkušnje ponovnega zagona.

## Zahteve projekta

### Osnovne značilnosti igre

Vaša igra mora vključevati naslednje ključne elemente:

**Raznolikost končnih pogojev**: Uvedite vsaj dva različna načina, kako se igra lahko konča:
- **Zmaga na podlagi točk**: Igralec doseže ciljno število točk ali zbere določene predmete
- **Poraz na podlagi življenj**: Igralec izgubi vsa razpoložljiva življenja ali točke zdravja
- **Izpolnitev cilja**: Premagani so vsi sovražniki, zbrani so določeni predmeti ali doseženi cilji
- **Časovna omejitev**: Igra se konča po določenem času ali ko odštevanje doseže nič

**Funkcionalnost ponovnega zagona**: 
- **Čiščenje stanja igre**: Odstranite vse prejšnje predmete igre in ponastavite spremenljivke
- **Ponovna inicializacija sistemov**: Začnite znova z novimi statistikami igralca, sovražniki in cilji
- **Uporabniku prijazni nadzor**: Zagotovite jasna navodila za ponovni zagon igre

**Povratne informacije za igralca**:
- **Sporočila o zmagi**: Praznujte dosežke igralca s pozitivnimi povratnimi informacijami
- **Sporočila o porazu**: Ponudite spodbudna sporočila, ki motivirajo za ponovno igranje
- **Kazalniki napredka**: Prikaz trenutnih točk, življenj ali stanja ciljev

### Ideje za igro in navdih

Izberite enega od teh konceptov igre ali ustvarite svojega:

#### 1. Konzolna pustolovska igra
Ustvarite besedilno pustolovščino z mehaniko bojevanja:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Ključne značilnosti za izvedbo:**
- **Boj na poteze** z različnimi možnostmi napada
- **Točke zdravja** za igralca in sovražnike
- **Sistem inventarja** za zbiranje kovancev ali predmetov
- **Več vrst sovražnikov** z različno težavnostjo
- **Pogoj za zmago**, ko so vsi sovražniki premagani

#### 2. Igra zbiranja
- **Cilj**: Zberite določene predmete, medtem ko se izogibate oviram
- **Končni pogoji**: Dosezite ciljno število zbranih predmetov ali izgubite vsa življenja
- **Napredovanje**: Predmeti postajajo težje dosegljivi, ko igra napreduje

#### 3. Ugankarska igra
- **Cilj**: Rešite vedno težje uganke
- **Končni pogoji**: Dokončajte vse ravni ali porabite vse poteze/čas
- **Ponovni zagon**: Ponastavite na prvo raven z izbrisanim napredkom

#### 4. Obrambna igra
- **Cilj**: Zaščitite svojo bazo pred valovi sovražnikov
- **Končni pogoji**: Preživite vse valove (zmaga) ali baza je uničena (poraz)
- **Napredovanje**: Valovi sovražnikov postajajo težji in številčnejši

## Smernice za izvedbo

### Začetek

1. **Načrtujte oblikovanje igre**:
   - Narišite osnovni igralni cikel
   - Jasno določite svoje končne pogoje
   - Identificirajte podatke, ki jih je treba ponastaviti ob ponovnem zagonu

2. **Postavite strukturo projekta**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Ustvarite osnovni igralni cikel**:
   - Inicializirajte stanje igre
   - Obdelajte uporabniški vnos
   - Posodobite logiko igre
   - Preverite končne pogoje
   - Prikaz trenutnega stanja

### Tehnične zahteve

**Uporabite sodobni JavaScript**: 
- Uporabite `const` in `let` za deklaracijo spremenljivk
- Uporabite puščične funkcije, kjer je primerno
- Uvedite funkcije ES6+ kot so predloge literali in destrukturiranje

**Arhitektura, ki temelji na dogodkih**:
- Ustvarite obdelovalce dogodkov za interakcije uporabnika
- Izvedite spremembe stanja igre prek dogodkov
- Uporabite poslušalce dogodkov za funkcionalnost ponovnega zagona

**Prakse čiste kode**:
- Pišite funkcije z eno samo odgovornostjo
- Uporabljajte opisna imena spremenljivk in funkcij
- Dodajte komentarje, ki pojasnjujejo logiko igre in pravila
- Organizirajte kodo v logične razdelke

## Zahteve za oddajo

### Dostavni elementi

1. **Popolne datoteke igre**: Vse datoteke HTML, CSS in JavaScript, potrebne za zagon vaše igre
2. **README.md**: Dokumentacija, ki pojasnjuje:
   - Kako igrati vašo igro
   - Katere končne pogoje ste izvedli
   - Navodila za ponovni zagon
   - Morebitne posebne značilnosti ali mehanike
3. **Komentarji v kodi**: Jasne razlage vaše logike igre in algoritmov

### Preveritveni seznam testiranja

Pred oddajo preverite, ali vaša igra:

- [ ] **Deluje brez napak** v konzoli brskalnika
- [ ] **Izvaja več končnih pogojev**, kot je določeno
- [ ] **Se pravilno ponovno zažene** z očiščenim stanjem
- [ ] **Ponuja jasne povratne informacije** igralcem o stanju igre
- [ ] **Uporablja sodobno sintakso JavaScript** in najboljše prakse
- [ ] **Vključuje celovito dokumentacijo** v README.md

## Ocenjevalna lestvica

| Kriterij | Odlično (4) | Dobro (3) | Povprečno (2) | Začetno (1) |
|----------|-------------|-----------|---------------|-------------|
| **Funkcionalnost igre** | Popolna igra z več končnimi pogoji, gladkim ponovnim zagonom in dodelano igralno izkušnjo | Popolna igra z osnovnimi končnimi pogoji in funkcionalnim mehanizmom ponovnega zagona | Delna igra z nekaterimi izvedenimi končnimi pogoji, ponovni zagon ima lahko manjše težave | Nepopolna igra z omejeno funkcionalnostjo in pomembnimi napakami |
| **Kakovost kode** | Čista, dobro organizirana koda, ki uporablja sodobne prakse JavaScript, obsežne komentarje in odlično strukturo | Dobra organizacija kode s sodobno sintakso, ustrezni komentarji in jasna struktura | Osnovna organizacija kode z nekaj sodobnimi praksami, minimalni komentarji | Slaba organizacija kode, zastarela sintaksa, pomanjkanje komentarjev in strukture |
| **Uporabniška izkušnja** | Intuitivna igralna izkušnja z jasnimi navodili, odličnimi povratnimi informacijami in privlačnim koncem/ponovnim zagonom | Dobra igralna izkušnja z ustreznimi navodili in povratnimi informacijami, funkcionalen konec/ponovni zagon | Osnovna igralna izkušnja z minimalnimi navodili, omejene povratne informacije o stanju igre | Zmedena igralna izkušnja z nejasnimi navodili in slabimi povratnimi informacijami |
| **Tehnična izvedba** | Prikazuje obvladovanje konceptov razvoja iger, obdelave dogodkov in upravljanja stanja | Prikazuje solidno razumevanje konceptov iger z dobro izvedbo | Osnovno razumevanje z sprejemljivo izvedbo | Omejeno razumevanje s slabo izvedbo |
| **Dokumentacija** | Celovita README z jasnimi navodili, dobro dokumentirano kodo in temeljitimi dokazi o testiranju | Dobra dokumentacija z jasnimi navodili in ustreznimi komentarji kode | Osnovna dokumentacija z minimalnimi navodili | Slaba ali manjkajoča dokumentacija |

### Ocena
- **Odlično (16-20 točk)**: Presega pričakovanja z ustvarjalnimi značilnostmi in dodelano izvedbo
- **Dobro (12-15 točk)**: Izpolnjuje vse zahteve z dobro izvedbo
- **Povprečno (8-11 točk)**: Izpolnjuje večino zahtev z manjšimi težavami
- **Začetno (4-7 točk)**: Izpolnjuje nekatere zahteve, vendar potrebuje veliko izboljšav

## Dodatni učni viri

- [MDN Vodnik za razvoj iger](https://developer.mozilla.org/en-US/docs/Games)
- [JavaScript Vadnice za razvoj iger](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Dokumentacija Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Načela oblikovanja iger](https://www.gamasutra.com/blogs/)

> 💡 **Nasvet**: Začnite preprosto in postopoma dodajajte funkcije. Dobro dodelana preprosta igra je boljša od zapletene igre z napakami!

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije je priporočljivo profesionalno človeško prevajanje. Ne odgovarjamo za morebitne nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.