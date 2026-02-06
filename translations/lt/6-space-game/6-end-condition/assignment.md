# Sukurkite Pavyzdinį Žaidimą

## Užduoties Apžvalga

Dabar, kai jau įvaldėte žaidimo pabaigos sąlygas ir perkrovimo funkcionalumą savo erdvės žaidime, laikas pritaikyti šias koncepcijas visiškai naujai žaidimo patirčiai. Sukursite ir suprojektuosite savo žaidimą, kuris demonstruos skirtingus pabaigos sąlygų modelius ir perkrovimo mechanizmus.

Ši užduotis skatina kūrybiškai mąstyti apie žaidimų dizainą, kartu praktikuojant techninius įgūdžius, kuriuos išmokote. Tyrinėsite skirtingus pergalės ir pralaimėjimo scenarijus, įgyvendinsite žaidėjo progresavimą ir kursite įtraukiančias perkrovimo patirtis.

## Projekto Reikalavimai

### Pagrindinės Žaidimo Funkcijos

Jūsų žaidime turi būti šie esminiai elementai:

**Įvairios Pabaigos Sąlygos**: Įgyvendinkite bent du skirtingus būdus, kaip žaidimas gali baigtis:
- **Taškų pagrindu pergalė**: Žaidėjas pasiekia reikiamą taškų skaičių arba surenka konkrečius daiktus
- **Gyvybių pagrindu pralaimėjimas**: Žaidėjas praranda visas turimas gyvybes arba sveikatos taškus
- **Tikslo įvykdymas**: Nugalėti visi priešai, surinkti tam tikri daiktai arba pasiekti tikslai
- **Laiko pagrindu**: Žaidimas baigiasi po nustatyto laiko arba kai atgalinės atskaitos laikas pasiekia nulį

**Perkrovimo Funkcionalumas**: 
- **Išvalyti žaidimo būseną**: Pašalinti visus ankstesnius žaidimo objektus ir iš naujo nustatyti kintamuosius
- **Sistemos iš naujo inicializuojamos**: Pradėti su naujais žaidėjo statistikos duomenimis, priešininkais ir tikslais
- **Vartotojo draugiška kontrolė**: Suteikti aiškias instrukcijas žaidimo perkrovimui

**Žaidėjo Atsiliepimai**:
- **Pergalės pranešimai**: Švęskite žaidėjo pasiekimus teigiamais atsiliepimais
- **Pralaimėjimo pranešimai**: Pateikite motyvuojančius žinutės, skatinančias žaisti iš naujo
- **Progresijos indikatoriai**: Rodykite esamą taškų skaičių, gyvybes arba tikslo būseną

### Žaidimo Idėjos ir Įkvėpimas

Pasirinkite vieną iš šių žaidimų koncepcijų arba sukurkite savo:

#### 1. Konsolinis Nuotykių Žaidimas
Sukurkite tekstinį nuotykį su kovos mechanika:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Svarbiausios funkcijos įgyvendinimui:**
- **Eilės pagrindu veikianti kova** su skirtingomis atakų galimybėmis
- **Gyvybės taškai** tiek žaidėjui, tiek priešams
- **Inventoriaus sistema** monetoms ar daiktams rinkti
- **Keli priešų tipai** su skirtingu sudėtingumu
- **Pergalės sąlyga** kai visi priešai nugalėti

#### 2. Surinkimo Žaidimas
- **Tikslas**: Surinkti konkrečius daiktus vengiant kliūčių
- **Pabaigos sąlygos**: Pasiekti reikiamą surinktų daiktų skaičių arba prarasti visas gyvybes
- **Progresavimas**: Daiktai tampa sunkiau pasiekiami žaidimui besitęsiant

#### 3. Galvosūkio Žaidimas
- **Tikslas**: Išspręsti vis sudėtingesnius galvosūkius
- **Pabaigos sąlygos**: Įveikti visas lygius arba baigti ėjimus/laiką
- **Perkrovimas**: Grįžti į pirmą lygį, išvalius pažangą

#### 4. Gynybos Žaidimas
- **Tikslas**: Apsaugoti bazę nuo priešų bangų
- **Pabaigos sąlygos**: Išgyventi visas bangas (pergalė) arba bazė sunaikinta (pralaimėjimas)
- **Progresavimas**: Priešų bangos tampa sunkesnės ir jų daugėja

## Įgyvendinimo Vadovas

### Pradžia

1. **Planuokite savo žaidimo dizainą**:
   - Apibrėžkite pagrindinį žaidimo ciklą
   - Aiškiai apibrėžkite pabaigos sąlygas
   - Nustatykite, kokius duomenis reikia iš naujo nustatyti perkrovimo metu

2. **Sukurkite projekto struktūrą**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Sukurkite pagrindinį žaidimo ciklą**:
   - Inicializuokite žaidimo būseną
   - Apdorokite vartotojo įvestį
   - Atnaujinkite žaidimo logiką
   - Patikrinkite pabaigos sąlygas
   - Atvaizduokite dabartinę būseną

### Techniniai Reikalavimai

**Naudokite Modernų JavaScript**: 
- Naudokite `const` ir `let` kintamųjų deklaracijoms
- Naudokite rodyklines funkcijas ten, kur tinka
- Įgyvendinkite ES6+ funkcijas, tokias kaip šabloninės eilutės ir destruktūrizavimas

**Įvykių Valdymo Architektūra**:
- Sukurkite įvykių apdorotojus vartotojo sąveikai
- Pakeitimams žaidimo būsenoje naudokite įvykius
- Naudokite įvykių klausytojus perkrovimo funkcionalumui

**Švaraus Kodo Praktikos**:
- Rašykite funkcijas su viena atsakomybe
- Naudokite aprašomuosius kintamųjų ir funkcijų pavadinimus
- Pridėkite komentarus, paaiškinančius žaidimo logiką ir taisykles
- Organizuokite kodą į logines sekcijas

## Pateikimo Reikalavimai

### Pristatomi Failai

1. **Pilni žaidimo failai**: visi HTML, CSS ir JavaScript failai, reikalingi žaidimui paleisti
2. **README.md**: dokumentacija, kurioje paaiškinama:
   - Kaip žaisti jūsų žaidimą
   - Kokias pabaigos sąlygas įgyvendinote
   - Instrukcijos dėl perkrovimo
   - Bet kokios ypatingos funkcijos ar mechanikos
3. **Kodo komentarai**: aiškūs jūsų žaidimo logikos ir algoritmų paaiškinimai

### Testavimo Kontrolinis Sąrašas

Prieš pateikdami patikrinkite, ar jūsų žaidimas:

- [ ] **Veikia be klaidų** naršyklės konsolėje
- [ ] **Įgyvendina kelias pabaigos sąlygas** pagal nurodymus
- [ ] **Tinkamai perkrauna** su išvalyta būsena
- [ ] **Teikia aiškią informaciją** žaidėjams apie žaidimo būseną
- [ ] **Naudoja modernų JavaScript** sintaksę ir geriausią praktiką
- [ ] **Turi išsamią dokumentaciją** README.md faile

## Vertinimo Lentelė

| Kriterijus | Išskirtinis (4) | Geras (3) | Tobulėjantis (2) | Pradedantysis (1) |
|------------|-----------------|-----------|------------------|-------------------|
| **Žaidimo Funkcionalumas** | Pilnas žaidimas su keliomis pabaigos sąlygomis, sklandus perkrovimas ir rafinuota žaidimo patirtis | Pilnas žaidimas su pagrindinėmis pabaigos sąlygomis ir veikiantis perkrovimo mechanizmas | Dalinis žaidimas su kai kuriomis pabaigos sąlygomis, perkrovimas gali turėti smulkių trūkumų | Nepilnas žaidimas su ribota funkcionalumu ir reikšmingais klaidomis |
| **Kodo Kokybė** | Švarus, gerai organizuotas kodas, naudojant modernias JavaScript praktikas, išsamūs komentarai ir puiki struktūra | Geras kodo organizavimas su modernaus sintaksės naudojimu, pakankamais komentarais ir aiškia struktūra | Pagrindinis kodo organizavimas, kai kurios modernios praktikos, minimalūs komentarai | Prastas kodo organizavimas, pasenusi sintaksė, trūksta komentarų ir struktūros |
| **Vartotojo Patirtis** | Intuityvus žaidimas su aiškiomis instrukcijomis, puikiais atsiliepimais ir įtraukiančia pabaigos/perkraunimo patirtimi | Geras žaidimas su pakankamomis instrukcijomis ir grįžtamuoju ryšiu, veikiantis pabaigos/perkrovimo funkcionalumas | Pagrindinis žaidimas su minimaliomis instrukcijomis, ribotu žaidimo būsenos atsiliepimu | Sunku suprasti žaidimą dėl neaiškių instrukcijų ir prasto vartotojo atsiliepimo |
| **Techninis Įgyvendinimas** | Parodo puikų žaidimų kūrimo koncepcijų, įvykių valdymo ir būsenos valdymo valdymą | Geras supratimas apie žaidimų koncepcijas su geru įgyvendinimu | Pagrindinis supratimas su priimtinu įgyvendinimu | Ribotas supratimas su prastu įgyvendinimu |
| **Dokumentacija** | Išsami README su aiškiomis instrukcijomis, gerai dokumentuotu kodu ir išsamiais testavimo duomenimis | Gerai dokumentuota, su aiškiomis instrukcijomis ir pakankamais kodo komentarais | Pagrindinė dokumentacija su minimaliais nurodymais | Bloga arba trūkstama dokumentacija |

### Vertinimo Skalė
- **Išskirtinis (16–20 taškų)**: Viršija lūkesčius kūrybiškomis funkcijomis ir rafinuotu įgyvendinimu
- **Geras (12–15 taškų)**: Atitinka visus reikalavimus su stipriu vykdymu
- **Tobulėjantis (8–11 taškų)**: Atitinka daugumą reikalavimų su mažomis problemomis
- **Pradedantysis (4–7 taškai)**: Atitinka kai kuriuos reikalavimus, bet reikia reikšmingo tobulinimo

## Papildomi Mokymosi Ištekliai

- [MDN Žaidimų Kūrimo Vadovas](https://developer.mozilla.org/en-US/docs/Games)
- [JavaScript Žaidimų Kūrimo Pamokos](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Canvas API Dokumentacija](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Žaidimų Dizaino Principai](https://www.gamasutra.com/blogs/)

> 💡 **Naudingas Patarimas**: Pradėkite paprastai ir palaipsniui pridėkite funkcijas. Gerai apdirbtas paprastas žaidimas yra geriau nei sudėtingas žaidimas su klaidomis!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, atkreipkite dėmesį, kad automatiniai vertimai gali turėti klaidų arba netikslumų. Originalus dokumentas gimtąja kalba laikomas autoritetingu šaltiniu. Svarbiai informacijai rekomenduojama kreiptis į profesionalų žmogaus vertimą. Mes neatsakome už bet kokius nesusipratimus ar neteisingus aiškinimus, kylantčius dėl šio vertimo naudojimo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->