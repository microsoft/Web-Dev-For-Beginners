<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9a6b22a2eff0f499b66236be973b24ad",
  "translation_date": "2025-08-28T11:27:49+00:00",
  "source_file": "5-browser-extension/solution/translation/README.it.md",
  "language_code": "lt"
}
-->
# Naršyklės plėtinys Carbon Trigger: kodas pradžiai

Naudosime tmrow Signal C02 API, kad stebėtume elektros energijos naudojimą ir sukurtume naršyklės plėtinį, kuris tiesiogiai naršyklėje primintų, kiek energijos naudojimas jūsų regione yra intensyvus. Šis specialiai sukurtas plėtinys padės įvertinti savo veiklą remiantis šiomis informacija.

![plėtinio ekrano vaizdas](../../../../../translated_images/lt/extension-screenshot.0e7f5bfa110e92e3.webp)

## Pradžia

Reikia, kad būtų įdiegtas [npm](https://npmjs.com). Atsisiųskite šio kodo kopiją į savo kompiuterio aplanką.

Įdiekite visus reikalingus paketus:

```
npm install
```

Sukurkite plėtinį naudodami webpack:

```
npm run build
```

Norėdami įdiegti Edge naršyklėje, naudokite meniu „trys taškai“ viršutiniame dešiniajame naršyklės kampe, kad rastumėte plėtinių skydelį. Jei dar neaktyvuota, įjunkite Kūrėjo režimą (apačioje kairėje). Pasirinkite „Įkelti neišpakuotą“, kad įkeltumėte naują plėtinį. Atidarykite „dist“ aplanką, kai būsite paraginti, ir plėtinys bus įkeltas. Norėdami jį naudoti, jums reikės API rakto CO2 Signal API (galite [gauti jį el. paštu čia](https://www.co2signal.com/) - įveskite savo el. pašto adresą laukelyje šioje puslapyje) ir [savo regiono kodą](http://api.electricitymap.org/v3/zones), atitinkantį [elektros žemėlapį](https://www.electricitymap.org/map) (pavyzdžiui, Bostone - „US-NEISO“).

![įdiegimas](../../../../../translated_images/lt/install-on-edge.78634f02842c4828.webp)

Kai API raktas ir regionas bus įvesti plėtinio sąsajoje, spalvotas taškas naršyklės plėtinio juostoje turėtų pasikeisti, atspindėdamas regiono energijos naudojimą ir pateikdamas užuominą, kokia veikla, reikalaujanti daug energijos, būtų tinkama vykdyti. Šios „taškų“ sistemos koncepcija buvo pasiskolinta iš [Energy Lollipop plėtinio](https://energylollipop.com/) Kalifornijos emisijoms.

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors stengiamės užtikrinti tikslumą, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius dėl šio vertimo naudojimo.