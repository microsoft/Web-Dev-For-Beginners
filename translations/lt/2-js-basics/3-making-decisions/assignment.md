# Sprendimų priėmimas: Studentų pažymių apdorotojas

## Mokymosi Tikslai

Šiame uždavinyje praktikuosite šios pamokos sprendimų priėmimo koncepcijas, kurdami programą, kuri apdoroja studentų pažymius iš skirtingų vertinimo sistemų. Naudosite `if...else` sakinius, palyginimo operatorius ir loginiai operatoriai, kad nustatytumėte, kurie studentai išlaiko savo kursus.

## Iššūkis

Dirbate mokykloje, kuri neseniai susijungė su kita įstaiga. Dabar turite apdoroti studentų pažymius iš dviejų visiškai skirtingų vertinimo sistemų ir nustatyti, kurie studentai išlaiko. Tai puiki galimybė praktiškai pritaikyti sąlyginius logikos sprendimus!

### Vertinimo Sistemų Suvokimas

#### Pirmoji Vertinimo Sistema (Skaičiai)
- Pažymiai pateikiami skaičiais nuo 1 iki 5
- **Išlaikymo pažymys**: 3 ir daugiau (3, 4 arba 5)
- **Nepraeinantis pažymys**: žemiau 3 (1 arba 2)

#### Antroji Vertinimo Sistema (Raidiniai Pažymiai)
- Pažymiai išreiškiami raidėmis: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Išlaikymo pažymiai**: `A`, `A-`, `B`, `B-`, `C`, `C-` (visi išvardyti pažymiai yra išlaikymo)
- **Pastaba**: Ši sistema neapima nepraeinančių pažymių kaip `D` arba `F`

### Jūsų Užduotis

Turint žemiau pateiktą masyvą `allStudents`, kuris atspindi visus studentus ir jų pažymius, sukurkite naują masyvą `studentsWhoPass`, kuriame būtų visi tie studentai, kurie išlaiko pagal savo vertinimo sistemas.

```javascript
let allStudents = [
  'A',    // Raide įvertinimas - praėjo
  'B-',   // Raide įvertinimas - praėjo
  1,      // Skaitmeninis įvertinimas - neįveikė
  4,      // Skaitmeninis įvertinimas - praėjo
  5,      // Skaitmeninis įvertinimas - praėjo
  2       // Skaitmeninis įvertinimas - neįveikė
];

let studentsWhoPass = [];
```

### Žingsnis po žingsnio

1. **Sukurkite ciklą**, kuris eis per kiekvieną pažymį masyve `allStudents`
2. **Patikrinkite pažymio tipą** (ar tai skaičius, ar tekstas?)
3. **Taikykite atitinkamas vertinimo taisykles**:
   - Skaičiams: patikrinkite, ar pažymys >= 3
   - Tekstui: patikrinkite ar tai viena iš galiojančių išlaikymo raidinių pažymių
4. **Įterpkite išlaikiusius į masyvą** `studentsWhoPass`

### Naudingi Kodo Metodai

Naudokite šias JavaScript sąvokas iš pamokos:

- **typeof operatorius**: `typeof grade === 'number'` patikrinti, ar tai skaitmeninis pažymys
- **Palyginimo operatoriai**: `>=` patikrinti skaitmeninių pažymių reikšmes
- **Loginiai operatoriai**: `||` patikrinti kelias raidinių pažymių sąlygas
- **if...else sakiniai**: apdoroti skirtingas vertinimo sistemas
- **Masyvų metodai**: `.push()` pridėti išlaikytus studentus į naują masyvą

### Tikėtina Išvestis

Kai paleidžiate programą, `studentsWhoPass` turėtų turėti: `['A', 'B-', 4, 5]`

**Kodėl šie pažymiai yra išlaikyti:**
- `'A'` ir `'B-'` yra galiojantys raidiniai pažymiai (visi šios sistemos raidiniai pažymiai yra išlaikymo)
- `4` ir `5` yra skaitmeniniai pažymiai >= 3
- `1` ir `2` nepraeina, nes yra skaitmeniniai pažymiai < 3

## Sprendimo Testavimas

Išbandykite savo kodą su skirtingais scenarijais:

```javascript
// Išbandykite su skirtingomis pažymių kombinacijomis
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Jūsų sprendimas turėtų veikti su bet kokia galiojančių pažymių kombinacija
```

## Papildomos Užduotys

Kai atliksite pagrindinę užduotį, išbandykite šiuos pratęsimus:

1. **Pridėkite patikrinimą**: tikrinkite galiojančius pažymius (pvz., neigiamus skaičius ar netinkamas raides)
2. **Skaičiuokite statistiką**: apskaičiuokite, kiek studentų išlaiko ir kiek nepraeina
3. **Vertinkių konvertavimas**: konvertuokite visus pažymius į vieningą skaitmeninę sistemą (A=5, B=4, C=3 ir t.t.)

## Vertinimo Lentelė

| Kriterijus | Puikiai (4) | Gerai (3) | Besivystantis (2) | Pradinis (1) |
|------------|-------------|-----------|-------------------|--------------|
| **Funkcionalumas** | Programa teisingai identifikuoja visus išlaikytus pažymius iš abiejų sistemų | Programa veikia su nedidelėmis klaidomis ar ribiniais atvejais | Programa dalinai veikia, bet turi loginės klaidų | Programa turi rimtų klaidų arba neveikia |
| **Kodo Struktūra** | Švarus, gerai sutvarkytas kodas su tinkama if...else logika | Gera struktūra su tinkamais sąlyginiais sakiniais | Priimtina struktūra su kai kuriomis organizacinėmis problemomis | Prasta struktūra, sunku sekti logiką |
| **Sąvokų Naudojimas** | Efektyviai naudojami palyginimo operatoriai, loginiai operatoriai ir sąlyginiai sakiniai | Geras pamokos sąvokų panaudojimas su mažomis spragomis | Kai kur naudojamos pamokos sąvokos, bet trūksta svarbių elementų | Ribotas pamokos sąvokų panaudojimas |
| **Problemos Sprendimas** | Aiškiai suprantama problema ir elegantiškas sprendimo būdas | Geras problemų sprendimo būdas su tvirta logika | Pakankamas problemų sprendimas, bet su tam tikru sumišimu | Neaiškus požiūris, nesuteikia supratimo |

## Pateikimo Nurodymai

1. **Atidžiai ištestuokite savo kodą** su pateiktais pavyzdžiais
2. **Pridėkite komentarus**, aiškinančius jūsų logiką, ypač sąlyginius sakinius
3. **Patikrinkite, ar išvestis** atitinka tikėtinus rezultatus: `['A', 'B-', 4, 5]`
4. **Apsvarstykite ribinius atvejus** kaip tuščius masyvus ar netikėtas duomenų rūšis

> 💡 **Patarimas**: Pradėkite paprastai! Iš pradžių užtikrinkite pagrindinį funkcionalumą, tada pridėkite sudėtingesnes funkcijas. Svarbiausia – praktikuoti sprendimų priėmimo logiką su pamokoje išmoktomis priemonėmis.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatizuoti vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba laikomas autoritetingu šaltiniu. Svarbiai informacijai rekomenduojama naudotis profesionalių vertėjų paslaugomis. Mes neatsakome už bet kokius nesusipratimus ar klaidingą interpretavimą, kylančius dėl šio vertimo naudojimo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->