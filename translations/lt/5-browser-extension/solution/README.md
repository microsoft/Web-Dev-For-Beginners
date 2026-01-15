<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fab4e6b4f0efcd587a9029d82991f597",
  "translation_date": "2025-08-28T11:27:08+00:00",
  "source_file": "5-browser-extension/solution/README.md",
  "language_code": "lt"
}
-->
# Naršyklės plėtinys „Carbon Trigger“: Baigtas kodas

Naudojant tmrow C02 Signal API, skirtą stebėti elektros energijos suvartojimą, sukurkite naršyklės plėtinį, kad galėtumėte gauti priminimą tiesiai savo naršyklėje apie tai, kokia intensyvi yra jūsų regiono elektros energijos apkrova. Naudodami šį plėtinį ad hoc būdu, galėsite priimti sprendimus dėl savo veiklos, remdamiesi šia informacija.

![plėtinio ekrano nuotrauka](../../../../translated_images/lt/extension-screenshot.0e7f5bfa110e92e3.png)

## Pradžia

Jums reikės įdiegti [npm](https://npmjs.com). Atsisiųskite šio kodo kopiją į aplanką savo kompiuteryje.

Įdiekite visas reikalingas paketas:

```
npm install
```

Sukurkite plėtinį naudodami webpack:

```
npm run build
```

Norėdami įdiegti „Edge“ naršyklėje, naudokite meniu „trys taškai“ viršutiniame dešiniajame naršyklės kampe, kad rastumėte plėtinių skydelį. Iš ten pasirinkite „Įkelti neišpakuotą“ („Load Unpacked“), kad įkeltumėte naują plėtinį. Atsidariusiame lange pasirinkite „dist“ aplanką, ir plėtinys bus įkeltas. Norėdami jį naudoti, jums reikės API rakto CO2 Signal API ([gaukite jį el. paštu čia](https://www.co2signal.com/) – įveskite savo el. pašto adresą šiame puslapyje) ir [jūsų regiono kodo](http://api.electricitymap.org/v3/zones), atitinkančio [Electricity Map](https://www.electricitymap.org/map) (pavyzdžiui, Bostone aš naudoju „US-NEISO“).

![įdiegimas](../../../../translated_images/lt/install-on-edge.78634f02842c4828.png)

Kai API raktas ir regionas bus įvesti į plėtinio sąsają, spalvotas taškas naršyklės plėtinio juostoje turėtų pasikeisti, atspindėdamas jūsų regiono energijos suvartojimą, ir pateikti jums užuominą, kokia energiją naudojanti veikla būtų tinkama. Šios „taško“ sistemos idėją man pasiūlė [Energy Lollipop plėtinys](https://energylollipop.com/) Kalifornijos emisijoms.

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius dėl šio vertimo naudojimo.