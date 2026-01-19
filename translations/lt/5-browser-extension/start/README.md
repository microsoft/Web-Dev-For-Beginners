<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "26fd39046d264ba185dcb086d3a8cf3e",
  "translation_date": "2025-08-28T11:26:50+00:00",
  "source_file": "5-browser-extension/start/README.md",
  "language_code": "lt"
}
-->
# Naršyklės plėtinys „Carbon Trigger“: Pradinis kodas

Naudojant „tmrow“ C02 Signal API stebėti elektros energijos naudojimą, sukurkite naršyklės plėtinį, kad galėtumėte gauti priminimą tiesiai savo naršyklėje apie tai, kaip intensyviai jūsų regione naudojama elektra. Naudojant šį plėtinį ad hoc būdu, galėsite priimti sprendimus dėl savo veiklos remdamiesi šia informacija.

![plėtinio ekrano nuotrauka](../../../../translated_images/lt/extension-screenshot.0e7f5bfa110e92e3.webp)

## Pradžia

Jums reikės įdiegti [npm](https://npmjs.com). Atsisiųskite šio kodo kopiją į aplanką savo kompiuteryje.

Įdiekite visas reikalingas paketas:

```
npm install
```

Sukurkite plėtinį naudodami „webpack“:

```
npm run build
```

Norėdami įdiegti „Edge“ naršyklėje, naudokite meniu „trys taškai“ viršutiniame dešiniajame naršyklės kampe, kad rastumėte plėtinių skydelį. Ten pasirinkite „Įkelti neišpakuotą“, kad įkeltumėte naują plėtinį. Atsidarius raginimui, pasirinkite „dist“ aplanką, ir plėtinys bus įkeltas. Norėdami jį naudoti, jums reikės API rakto CO2 Signal API ([gaukite jį čia el. paštu](https://www.co2signal.com/) - įveskite savo el. pašto adresą į laukelį šiame puslapyje) ir [savo regiono kodą](http://api.electricitymap.org/v3/zones), atitinkantį [Electricity Map](https://www.electricitymap.org/map) (pavyzdžiui, Bostone aš naudoju „US-NEISO“).

![įdiegimas](../../../../translated_images/lt/install-on-edge.78634f02842c4828.webp)

Kai API raktas ir regionas bus įvesti į plėtinio sąsają, spalvotas taškas naršyklės plėtinio juostoje turėtų pasikeisti, atspindėdamas jūsų regiono energijos naudojimą ir pateikdamas jums rekomendacijas, kokią energiją reikalaujančią veiklą būtų tinkama atlikti. Šio „taško“ sistemos koncepcija buvo pasiūlyta [Energy Lollipop plėtinio](https://energylollipop.com/) skirtam Kalifornijos emisijoms.

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors stengiamės užtikrinti tikslumą, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius dėl šio vertimo naudojimo.