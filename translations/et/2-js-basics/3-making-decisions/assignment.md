<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bf62b82567e6f9bdf4abda9ae0ccb64a",
  "translation_date": "2025-10-11T11:46:29+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "et"
}
-->
# Operaatorid

## Juhised

Katseta operaatoritega. Siin on soovitus programmiks, mida saad rakendada:

Sul on kaks erinevat hindamissüsteemi, mida kasutatakse õpilaste jaoks.

### Esimene hindamissüsteem

Üks hindamissüsteem määratleb hinded vahemikus 1–5, kus 3 ja kõrgem tähendavad, et õpilane läbib kursuse.

### Teine hindamissüsteem

Teises hindamissüsteemis on järgmised hinded: `A, A-, B, B-, C, C-`, kus `A` on parim hinne ja `C` on madalaim läbiv hinne.

### Ülesanne

Arvestades järgmist massiivi `allStudents`, mis esindab kõiki õpilasi ja nende hindeid, loo uus massiiv `studentsWhoPass`, mis sisaldab kõiki õpilasi, kes läbivad kursuse.

> NIPP: kasuta for-tsüklit, if...else tingimusi ja võrdlusoperaatoreid:

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

## Hindamiskriteeriumid

| Kriteerium | Näidislik lahendus            | Piisav lahendus               | Vajab parandamist               |
| ---------- | ----------------------------- | ----------------------------- | ------------------------------- |
|            | Esitatakse täielik lahendus   | Esitatakse osaline lahendus   | Esitatakse vigadega lahendus    |

---

**Lahtiütlus**:  
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palume arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.