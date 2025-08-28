<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-28T07:33:01+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "ro"
}
-->
# Refactorizează și comentează codul tău

## Instrucțiuni

Pe măsură ce baza ta de cod crește, este important să refactorizezi codul frecvent pentru a-l menține ușor de citit și de întreținut în timp. Adaugă comentarii și refactorizează `app.js` pentru a îmbunătăți calitatea codului:

- Extrage constante, cum ar fi URL-ul de bază al API-ului serverului
- Factorizează codul similar: de exemplu, poți crea o funcție `sendRequest()` pentru a grupa codul utilizat atât în `createAccount()`, cât și în `getAccount()`
- Reorganizează codul pentru a-l face mai ușor de citit și adaugă comentarii

## Criterii de evaluare

| Criteriu | Exemplary                                                                                                                                                     | Adequate                                                                                          | Needs Improvement                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|          | Codul este comentat, bine organizat în secțiuni diferite și ușor de citit. Constantele sunt extrase și a fost creată o funcție factorizată `sendRequest()`.     | Codul este curat, dar poate fi îmbunătățit cu mai multe comentarii, extragerea constantelor sau factorizare. | Codul este dezordonat, fără comentarii, constantele nu sunt extrase și codul nu este factorizat. |

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.