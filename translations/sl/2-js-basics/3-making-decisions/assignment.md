<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bf62b82567e6f9bdf4abda9ae0ccb64a",
  "translation_date": "2025-08-27T22:39:07+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "sl"
}
-->
# Operatorji

## Navodila

Preizkusite operaterje. Tukaj je predlog za program, ki ga lahko implementirate:

Imate skupino študentov iz dveh različnih ocenjevalnih sistemov.

### Prvi ocenjevalni sistem

En ocenjevalni sistem določa ocene od 1 do 5, pri čemer ocena 3 ali več pomeni, da ste opravili predmet.

### Drugi ocenjevalni sistem

Drugi ocenjevalni sistem vključuje naslednje ocene: `A, A-, B, B-, C, C-`, kjer je `A` najvišja ocena, `C` pa najnižja ocena za uspešno opravljen predmet.

### Naloga

Glede na naslednje polje `allStudents`, ki predstavlja vse študente in njihove ocene, sestavite novo polje `studentsWhoPass`, ki vsebuje vse študente, ki so opravili.

> TIP: uporabite for-zanko, if...else in primerjalne operaterje:

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

## Merila

| Merilo  | Odlično                        | Zadostno                      | Potrebne izboljšave             |
| -------- | ------------------------------ | ----------------------------- | ------------------------------- |
|          | Predstavljena je popolna rešitev | Predstavljena je delna rešitev | Predstavljena rešitev vsebuje napake |

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne odgovarjamo za morebitne nesporazume ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.