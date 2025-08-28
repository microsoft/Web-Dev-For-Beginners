<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-28T11:22:49+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "lt"
}
-->
# Patobulinkite maršrutizavimą

## Instrukcijos

Maršrutų deklaracijoje šiuo metu nurodomas tik šablono ID, kurį reikia naudoti. Tačiau, kai rodoma nauja puslapio versija, kartais reikia šiek tiek daugiau. Patobulinkime mūsų maršrutizavimo įgyvendinimą pridėdami dvi papildomas funkcijas:

- Priskirkite kiekvienam šablonui pavadinimus ir atnaujinkite lango pavadinimą nauju pavadinimu, kai keičiasi šablonas.
- Pridėkite galimybę vykdyti tam tikrą kodą po šablono pakeitimo. Norime, kad kiekvieną kartą, kai rodoma prietaisų skydelio puslapis, kūrėjo konsolėje būtų atspausdinta `'Dashboard is shown'`.

## Vertinimo kriterijai

| Kriterijai | Puikiai                                                                                                                          | Pakankamai                                                                                                                                                                                | Reikia patobulinimų                                   |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|            | Abi funkcijos įgyvendintos ir veikia. Pavadinimo ir kodo pridėjimas taip pat veikia naujai pridėtame maršrute `routes` deklaracijoje. | Abi funkcijos veikia, tačiau elgsena yra užkoduota ir nekonfigūruojama per `routes` deklaraciją. Pridėjus trečią maršrutą su pavadinimu ir kodo pridėjimu, tai neveikia arba veikia iš dalies. | Viena iš funkcijų trūksta arba neveikia tinkamai.     |

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius dėl šio vertimo naudojimo.