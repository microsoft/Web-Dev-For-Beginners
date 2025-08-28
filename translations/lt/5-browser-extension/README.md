<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b121a279a6ab39878491f3e572673515",
  "translation_date": "2025-08-28T11:23:06+00:00",
  "source_file": "5-browser-extension/README.md",
  "language_code": "lt"
}
-->
# Naršyklės plėtinio kūrimas

Naršyklės plėtinių kūrimas yra smagus ir įdomus būdas galvoti apie savo programų našumą, kuriant kitokio tipo interneto išteklius. Šiame modulyje pateikiamos pamokos apie tai, kaip veikia naršyklės, kaip įdiegti naršyklės plėtinį, kaip sukurti formą, iškviesti API, naudoti vietinę saugyklą, taip pat kaip įvertinti savo svetainės našumą ir jį pagerinti.

Jūs sukursite naršyklės plėtinį, kuris veikia Edge, Chrome ir Firefox naršyklėse. Šis plėtinys, kuris yra tarsi mini svetainė, pritaikyta labai specifinei užduočiai, tikrina [C02 Signal API](https://www.co2signal.com) tam tikro regiono elektros energijos naudojimą ir anglies intensyvumą, bei pateikia regiono anglies pėdsako rodmenis.

Šį plėtinį vartotojas gali naudoti ad hoc būdu, kai į formą įvedamas API raktas ir regiono kodas, kad būtų nustatytas vietinis elektros energijos naudojimas ir pateikti duomenys, galintys paveikti vartotojo elektros energijos sprendimus. Pavyzdžiui, gali būti tikslinga atidėti drabužių džiovyklės (anglies intensyvi veikla) naudojimą laikotarpiu, kai jūsų regione yra didelis elektros energijos naudojimas.

### Temos

1. [Apie naršyklę](1-about-browsers/README.md)
2. [Formos ir vietinė saugykla](2-forms-browsers-local-storage/README.md)
3. [Fono užduotys ir našumas](3-background-tasks-and-performance/README.md)

### Kreditas

![žalias naršyklės plėtinys](../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.lt.png)

## Kreditas

Šios interneto anglies pėdsako idėją pasiūlė Asim Hussain, „Microsoft“ Žaliosios debesų advokatūros komandos vadovas ir [Žaliųjų principų](https://principles.green/) autorius. Iš pradžių tai buvo [internetinės svetainės projektas](https://github.com/jlooper/green).

Naršyklės plėtinio struktūrą įkvėpė [Adebola Adeniran COVID plėtinys](https://github.com/onedebos/covtension).

„Taško“ piktogramų sistemos koncepciją pasiūlė [Energy Lollipop](https://energylollipop.com/) naršyklės plėtinio Kalifornijos emisijoms piktogramų struktūra.

Šios pamokos buvo parašytos su ♥️ [Jen Looper](https://www.twitter.com/jenlooper).

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius dėl šio vertimo naudojimo.