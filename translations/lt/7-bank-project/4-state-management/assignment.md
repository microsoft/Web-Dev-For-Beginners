<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-28T11:20:56+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "lt"
}
-->
# Įgyvendinkite „Pridėti operaciją“ dialogą

## Instrukcijos

Mūsų banko programėlėje vis dar trūksta vienos svarbios funkcijos: galimybės įvesti naujas operacijas. Naudodamiesi viskuo, ką išmokote per keturias ankstesnes pamokas, įgyvendinkite „Pridėti operaciją“ dialogą:

- Pridėkite mygtuką „Pridėti operaciją“ prietaisų skydelio puslapyje
- Sukurkite naują puslapį su HTML šablonu arba naudokite JavaScript, kad parodytumėte/paslėptumėte dialogo HTML neišeidami iš prietaisų skydelio puslapio (galite naudoti [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) atributą arba CSS klases)
- Užtikrinkite, kad dialogas būtų pritaikytas [klaviatūros ir ekrano skaitytuvo prieinamumui](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/)
- Įgyvendinkite HTML formą, skirtą įvesties duomenims gauti
- Sukurkite JSON duomenis iš formos duomenų ir išsiųskite juos į API
- Atnaujinkite prietaisų skydelio puslapį su naujais duomenimis

Peržiūrėkite [serverio API specifikacijas](../api/README.md), kad sužinotumėte, kokį API reikia iškviesti ir koks yra laukiamas JSON formatas.

Štai pavyzdys, kaip turėtų atrodyti rezultatas atlikus užduotį:

![Ekrano nuotrauka, rodanti pavyzdinį „Pridėti operaciją“ dialogą](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.lt.png)

## Vertinimo kriterijai

| Kriterijai | Puikiai                                                                                         | Pakankamai                                                                                                             | Reikia patobulinimų                          |
| ---------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
|            | Operacijos pridėjimas įgyvendintas visiškai laikantis visų pamokose aptartų geriausių praktikų. | Operacijos pridėjimas įgyvendintas, bet nesilaikant geriausių praktikų arba veikia tik iš dalies.                     | Operacijos pridėjimas visiškai neveikia.     |

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius dėl šio vertimo naudojimo.