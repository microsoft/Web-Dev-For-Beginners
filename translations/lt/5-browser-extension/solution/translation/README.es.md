# Naršyklės plėtinys Carbon Trigger: Pilnas kodas

Naudojant tmrow CO2 Signal API, skirtą stebėti elektros energijos naudojimą, sukurkite naršyklės plėtinį, kuris tiesiogiai jūsų naršyklėje primintų apie jūsų regiono elektros energijos suvartojimą. Šis ad hoc plėtinys padės priimti sprendimus dėl jūsų veiklų, remiantis šia informacija.

![plėtinio ekrano nuotrauka](../../../../../translated_images/lt/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.png)

## Pradžia

Jums reikės įdiegti [npm](https://npmjs.com). Atsisiųskite šio kodo kopiją į savo kompiuterio aplanką.

Įdiekite visus reikalingus paketus:

```
npm install
```

Sukurkite plėtinį naudodami webpack:

```
npm run build
```

Norėdami įdiegti Edge naršyklėje, naudokite 'trijų taškų' meniu, esantį viršutiniame dešiniajame naršyklės kampe, kad rastumėte plėtinių skydelį. Iš ten pasirinkite 'Įkelti neišpakuotą', kad įkeltumėte naują plėtinį. Kai būsite paprašyti, atidarykite aplanką 'dist', ir plėtinys bus įkeltas. Norėdami jį naudoti, jums reikės API rakto CO2 Signal API ([gaukite jį el. paštu čia](https://www.co2signal.com/) - įveskite savo el. paštą šio puslapio laukelyje) ir [savo regiono kodą](http://api.electricitymap.org/v3/zones), atitinkantį [Electricity Map](https://www.electricitymap.org/map) (pavyzdžiui, Bostone naudoju 'US-NEISO').

![įdiegimas](../../../../../translated_images/lt/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.png)

Kai API raktas ir regionas bus įvesti plėtinio sąsajoje, spalvotas taškas naršyklės plėtinių juostoje turėtų pasikeisti, atspindėdamas jūsų regiono energijos naudojimą ir suteikdamas indikatorių apie veiklas, kurios būtų tinkamos esant dideliam energijos suvartojimui. Šios "taškų" sistemos idėją man suteikė [plėtinys Energy Lollipop](https://energylollipop.com/) skirtas Kalifornijos emisijoms.

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors stengiamės užtikrinti tikslumą, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius dėl šio vertimo naudojimo.