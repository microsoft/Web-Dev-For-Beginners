<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f5e6821e0febccfc5d05e7c944d9e3d",
  "translation_date": "2025-08-28T11:28:12+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ja.md",
  "language_code": "lt"
}
-->
# Anglies pėdsako naršyklės plėtinys: Baigtas kodas

Naudodami tmrow CO2 Signal API, sukursime naršyklės plėtinį, kuris primins, kiek energijos sunaudojama jūsų regione. Šis plėtinys leis stebėti elektros energijos suvartojimą ir priimti sprendimus, pagrįstus šia informacija.

![plėtinio ekrano nuotrauka](../../../../../translated_images/lt/extension-screenshot.0e7f5bfa110e92e3.png)

## Pradžia

Įsitikinkite, kad jūsų sistemoje įdiegtas [npm](https://npmjs.com). Atsisiųskite šio kodo kopiją į savo kompiuterio aplanką.

Įdiekite visas reikalingas paketas.

```
npm install
```

Sukurkite plėtinį naudodami webpack.

```
npm run build
```

Norėdami įdiegti plėtinį Edge naršyklėje, eikite į naršyklės viršutiniame dešiniajame kampe esantį „trijų taškų“ meniu ir suraskite „Plėtiniai“ skydelį. Pasirinkite „Įkelti neišpakuotą“ ir nurodykite „dist“ aplanką. Plėtinys bus įkeltas. Norėdami naudoti plėtinį, jums reikės CO2 Signal API rakto ([gaukite jį čia el. paštu](https://www.co2signal.com/) - įveskite savo el. pašto adresą į šios svetainės laukelį) ir [Electricity Map](https://www.electricitymap.org/map) atitinkančio [kodo jūsų regionui](http://api.electricitymap.org/v3/zones) (pavyzdžiui, Bostone naudojamas 'US-NEISO').

![įdiegimas](../../../../../translated_images/lt/install-on-edge.78634f02842c4828.png)

Įvedę API raktą ir regiono kodą į plėtinio sąsają, naršyklės plėtinių juostoje matysite spalvotą tašką, kuris atspindės jūsų regiono energijos suvartojimą. Tai padės nuspręsti, kokią veiklą atlikti, atsižvelgiant į energijos poreikius. Šios „taško“ sistemos idėją įkvėpė Kalifornijos emisijų stebėjimui skirtas [Energy Lollipop plėtinys](https://energylollipop.com/).

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius dėl šio vertimo naudojimo.