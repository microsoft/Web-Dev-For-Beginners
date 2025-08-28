<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-28T11:16:02+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "lt"
}
-->
# Refaktorizuokite ir komentuokite savo kodą

## Instrukcijos

Kai jūsų kodo bazė auga, svarbu reguliariai refaktorizuoti kodą, kad jis išliktų skaitomas ir lengvai prižiūrimas. Pridėkite komentarus ir refaktorizuokite savo `app.js`, kad pagerintumėte kodo kokybę:

- Išskirkite konstantas, pvz., serverio API bazinį URL
- Suvienodinkite panašų kodą: pavyzdžiui, galite sukurti funkciją `sendRequest()`, kuri apjungtų kodą, naudojamą tiek `createAccount()`, tiek `getAccount()`
- Pertvarkykite kodą, kad jis būtų lengviau skaitomas, ir pridėkite komentarus

## Vertinimo kriterijai

| Kriterijai | Puikiai                                                                                                                                                     | Pakankamai                                                                                       | Reikia tobulinti                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
|            | Kodas yra komentuotas, gerai organizuotas į skirtingas sekcijas ir lengvai skaitomas. Konstantos yra išskirtos, o suvienodinta funkcija `sendRequest()` sukurta. | Kodas yra tvarkingas, bet jį dar galima patobulinti pridėjus daugiau komentarų, išskiriant konstantas ar suvienodinant kodą. | Kodas yra netvarkingas, nekomentuotas, konstantos neišskirtos, o kodas nesuvienodintas. |

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius dėl šio vertimo naudojimo.