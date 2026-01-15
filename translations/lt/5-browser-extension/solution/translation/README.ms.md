<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "21b364c158c8e4f698de65eeac16c9fe",
  "translation_date": "2025-08-28T11:28:54+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ms.md",
  "language_code": "lt"
}
-->
# Naršyklės plėtinys Carbon Trigger: Pilnas kodas

Naudojant tmrow CO2 Signal API, galima stebėti elektros energijos suvartojimą ir sukurti naršyklės plėtinį, kuris įspės jus apie jūsų regiono elektros energijos naudojimo intensyvumą. Šis plėtinys padės priimti sprendimus dėl jūsų veiklos, remiantis šia informacija.

![naršyklės plėtinio ekrano nuotrauka](../../../../../translated_images/lt/extension-screenshot.0e7f5bfa110e92e3.png)

## Pradėkite čia

Jums reikės įdiegti [npm](https://npmjs.com). Atsisiųskite šio kodo kopiją į aplanką savo kompiuteryje.

Įdiekite visas reikalingas paketas:

```
npm install
```

Sukurkite plėtinį naudodami webpack:

```
npm run build
```

Norėdami įdiegti Edge naršyklėje, naudokite meniu „trys taškai“ viršutiniame dešiniajame naršyklės kampe, kad surastumėte plėtinių skydelį. Ten pasirinkite „Load Unpacked“, kad įkeltumėte naują plėtinį. Atidarykite aplanką „dist“ pagal užklausą, ir plėtinys bus įkeltas. Norėdami jį naudoti, jums reikės API rakto CO2 Signal API ([gaukite jį čia el. paštu](https://www.co2signal.com/) - įveskite savo el. pašto adresą į laukelį šioje svetainėje) ir [kodo savo regionui](http://api.electricitymap.org/v3/zones), kuris atitinka [Electricity Map](https://www.electricitymap.org/map) (pavyzdžiui, Bostone aš naudoju „US-NEISO“).

![parsisiuntimas](../../../../../translated_images/lt/install-on-edge.78634f02842c4828.png)

Kai API raktas ir regionas bus įvesti į plėtinio sąsają, spalvotas taškas naršyklės plėtinio juostoje pasikeis, atspindėdamas jūsų regiono energijos suvartojimą, ir pateiks jums rekomendacijas dėl veiklos, kurią galite atlikti. Šios „taškų“ sistemos idėją pasiskolinau iš [naršyklės plėtinio Energy Lollipop](https://energylollipop.com/) skirtam Kalifornijos emisijoms.

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius dėl šio vertimo naudojimo.