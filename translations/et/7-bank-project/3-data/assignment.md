<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-10-11T12:04:56+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "et"
}
-->
# Refaktoreeri ja kommenteeri oma kood

## Juhised

Kui sinu koodibaas kasvab, on oluline koodi regulaarselt refaktoreerida, et see jääks aja jooksul loetavaks ja hallatavaks. Lisa kommentaare ja refaktoreeri oma `app.js`, et parandada koodi kvaliteeti:

- Ekstraheerige konstandid, näiteks serveri API põhiaadress
- Ühenda sarnane kood: näiteks loo funktsioon `sendRequest()`, et koondada kood, mida kasutatakse nii `createAccount()` kui ka `getAccount()` funktsioonides
- Reorganiseeri kood, et see oleks lihtsamini loetav, ja lisa kommentaare

## Hindamiskriteeriumid

| Kriteerium | Näidislik                                                                                                                                                     | Piisav                                                                                           | Vajab parandamist                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
|            | Kood on kommenteeritud, hästi organiseeritud erinevatesse sektsioonidesse ja kergesti loetav. Konstandid on ekstraheeritud ja loodud on faktoriseeritud funktsioon `sendRequest()`. | Kood on puhas, kuid seda saab veel parandada rohkemate kommentaaride, konstantide ekstraheerimise või faktoriseerimisega. | Kood on segane, kommenteerimata, konstandid pole ekstraheeritud ja kood pole faktoriseeritud. |

---

**Lahtiütlus**:  
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palume arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.