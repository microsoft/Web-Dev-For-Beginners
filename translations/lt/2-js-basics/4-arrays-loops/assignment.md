<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8abcada0534e0fb3a7556ea3c5a2a8a4",
  "translation_date": "2026-01-07T11:17:28+00:00",
  "source_file": "2-js-basics/4-arrays-loops/assignment.md",
  "language_code": "lt"
}
-->
# Masyvai ir ciklai – užduotis

## Instrukcijos

Atlikite šias užduotis, kad praktikuotumėte darbą su masyvais ir ciklais. Kiekviena užduotis remiasi pamokoje aptartomis sąvokomis ir skatintų panaudoti skirtingus ciklų tipus bei masyvų metodus.

### Užduotis 1: Skaičių modelio generatorius
Sukurkite programą, kuri surašo kas trečią skaičių nuo 1 iki 20 ir išveda jį į konsolę.

**Reikalavimai:**
- Naudokite `for` ciklą su pasirinktiniu žingsniu
- Rodykite skaičius draugišku formatu
- Pridėkite aiškius komentarus, paaiškinančius jūsų logiką

**Tikėtina išvestis:**
```
3, 6, 9, 12, 15, 18
```

> **Patarimas:** Modifikuokite iteracijos išraišką savo for cikle, kad praleistumėte skaičius.

### Užduotis 2: Masyvo analizė
Sukurkite masyvą su bent 8 skirtingais skaičiais ir parašykite funkcijas, kurios analizuotų duomenis.

**Reikalavimai:**
- Sukurkite masyvą pavadinimu `numbers`, turintį bent 8 reikšmes
- Parašykite funkciją `findMaximum()`, kuri grąžina didžiausią skaičių
- Parašykite funkciją `findMinimum()`, kuri grąžina mažiausią skaičių  
- Parašykite funkciją `calculateSum()`, kuri grąžina visų skaičių sumą
- Išbandykite kiekvieną funkciją ir parodykite rezultatus

**Papildomas iššūkis:** Parašykite funkciją, kuri randa antrą pagal dydį skaičių masyve.

### Užduotis 3: Tekstinį masyvą apdorojimas
Sukurkite masyvą su savo mėgstamais filmais/knygomis/dainomis ir pasipraktikuokite naudodami skirtingus ciklų tipus.

**Reikalavimai:**
- Sukurkite masyvą su bent 5 tekstinėmis reikšmėmis
- Naudokite tradicinį `for` ciklą, kad išvestumėte elementus su skaičiais (1. Elemento pavadinimas)
- Naudokite `for...of` ciklą, kad išvestumėte elementus didžiosiomis raidėmis
- Naudokite `forEach()` metodą parodyti, kiek yra bendras simbolių skaičius

**Pavyzdinė išvestis:**
```
Traditional for loop:
1. The Matrix
2. Inception
3. Interstellar

For...of loop (uppercase):
THE MATRIX
INCEPTION
INTERSTELLAR

Character count:
Total characters across all titles: 42
```

### Užduotis 4: Duomenų filtravimas (pažengęs)
Sukurkite programą, kuri apdoroja masyvą su objektais, atitinkančiais studentus.

**Reikalavimai:**
- Sukurkite masyvą su bent 5 studentų objektais, turinčiais savybes: `name`, `age`, `grade`
- Naudokite ciklus, kad rastumėte studentus, kuriems yra 18 metų ar daugiau
- Apskaičiuokite visų studentų vidutinį pažymį
- Sukurkite naują masyvą, kuriame bus tik studentai su pažymiais virš 85

**Pavyzdinė struktūra:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Pridėti daugiau mokinių...
];
```

## Kodo testavimas

Testuokite savo programas:
1. Vykdydami kiekvieną užduotį naršyklės konsolėje
2. Tikrindami, ar išvestys atitinka lūkesčius
3. Išbandydami su skirtingais duomenų rinkiniais
4. Patikrinkite, ar jūsų kodas tinkamai tvarko kraštutinius atvejus (tuščius masyvus, vienetus)

## Pateikimo reikalavimai

Pateikdami darbą, pridėkite:
- Gerai komentuotą JavaScript kodą kiekvienai užduočiai
- Ekrano nuotraukas arba tekstinę išvestį, rodančią jūsų programų veikimą
- Trumpą paaiškinimą, kokį ciklų tipą pasirinkote kiekvienai užduočiai ir kodėl

## Vertinimo kriterijai

| Kriterijus | Puikiai (3 taškai) | Patenkinamai (2 taškai) | Reikia tobulinti (1 taškas) |
| -------- | ------------------ | ---------------------- | --------------------------- |
| **Funkcionalumas** | Visos užduotys atliktos teisingai su papildomais iššūkiais | Visos privalomos užduotys veikia tinkamai | Kai kurios užduotys neišbaigtos arba yra klaidų |
| **Kodo kokybė** | Švarus, gerai organizuotas kodas su aprašomais kintamaisiais | Kodo veikia, bet galėtų būti tvarkingesnis | Kode nešvaru arba sunku suprasti |
| **Komentarai** | Išsamūs komentarai, paaiškinantys logiką ir sprendimus | Pateikti pagrindiniai komentarai | Minimalūs arba be komentarų |
| **Ciklų naudojimas** | Tinkamai panaudoti skirtingi ciklų tipai | Ciklai naudojami teisingai, bet nedaug įvairovės | Netinkamas ar neefektyvus ciklų naudojimas |
| **Testavimas** | Akivaizdūs nuodugnūs testai su keliomis situacijomis | Demonstravimas pagrindinio testavimo | Mažai testavimo įrodymų |

## Refleksijos klausimai

Baigus užduotis, apmąstykite:
1. Kuris ciklų tipas buvo patogiausias naudoti ir kodėl?
2. Su kokiais iššūkiais susidūrėte dirbdami su masyvais?
3. Kaip šios įgūdžiai galėtų būti pritaikyti realiuose interneto kūrimo projektuose?
4. Ką darytumėte kitaip, jei reikėtų optimizuoti savo kodą dėl našumo?

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors stengiamės užtikrinti tikslumą, atkreipkite dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turi būti laikomas autoritetingu šaltiniu. Esant svarbiai informacijai, rekomenduojama kreiptis į profesionalius vertėjus. Mes neatsakome už jokius nesusipratimus ar neteisingus aiškinimus, kilusius dėl šio vertimo naudojimo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->