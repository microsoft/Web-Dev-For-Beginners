<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bf62b82567e6f9bdf4abda9ae0ccb64a",
  "translation_date": "2025-08-28T11:41:45+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "lt"
}
-->
# Operatoriai

## Instrukcijos

Eksperimentuokite su operatoriais. Štai pasiūlymas, kokią programą galite įgyvendinti:

Turite studentų rinkinį iš dviejų skirtingų vertinimo sistemų.

### Pirma vertinimo sistema

Viena vertinimo sistema apibrėžia pažymius nuo 1 iki 5, kur 3 ir daugiau reiškia, kad kursas išlaikytas.

### Antra vertinimo sistema

Kita vertinimo sistema turi šiuos pažymius: `A, A-, B, B-, C, C-`, kur `A` yra aukščiausias pažymys, o `C` yra žemiausias išlaikymo pažymys.

### Užduotis

Turint šį masyvą `allStudents`, kuris atspindi visus studentus ir jų pažymius, sukurkite naują masyvą `studentsWhoPass`, kuriame būtų visi studentai, išlaikę kursą.

> PATARIMAS: naudokite for ciklą, if...else ir palyginimo operatorius:

```javascript
let allStudents = [
  'A',
  'B-',
  1,
  4,
  5,
  2
]

let studentsWhoPass = [];
```

## Vertinimo kriterijai

| Kriterijai | Puikiai                       | Pakankamai                   | Reikia patobulinimų            |
| ---------- | ----------------------------- | ---------------------------- | ------------------------------ |
|            | Pateiktas pilnas sprendimas   | Pateiktas dalinis sprendimas | Pateiktas sprendimas su klaidomis |

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius naudojant šį vertimą.