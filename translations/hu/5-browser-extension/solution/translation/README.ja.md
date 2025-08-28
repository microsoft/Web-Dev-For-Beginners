<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f5e6821e0febccfc5d05e7c944d9e3d",
  "translation_date": "2025-08-28T03:47:06+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ja.md",
  "language_code": "hu"
}
-->
# Carbon Trigger böngészőbővítmény: Kész kód

Építs egy böngészőbővítményt, amely a tmrow CO2 Signal API-t használja az energiafogyasztás nyomon követésére, és emlékeztetőként megjeleníti, hogy a régiódban mennyire magas az energiafogyasztás. Ezt a bővítményt ad hoc módon használhatod, hogy az információk alapján dönts a tevékenységeidről.

![extension screenshot](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.hu.png)

## Kezdés

Szükséged lesz az [npm](https://npmjs.com) telepítésére. Töltsd le a kód másolatát egy mappába a számítógépeden.

Telepítsd az összes szükséges csomagot.

```
npm install
```

Építsd meg a bővítményt a webpack segítségével.

```
npm run build
```

Edge böngészőre való telepítéshez keresd meg a böngésző jobb felső sarkában található „három pont” menüben az „Extensions” panelt. Ott válaszd a „Load Unpacked” opciót, hogy betöltsd az új bővítményt. A megjelenő ablakban nyisd meg a „dist” mappát, és a bővítmény betöltődik. A használathoz szükséged lesz a CO2 Signal API API-kulcsára ([itt szerezhetsz egyet e-mailben](https://www.co2signal.com/) - írd be az e-mail címedet az oldalon található mezőbe), valamint a régiódnak megfelelő [kódra](http://api.electricitymap.org/v3/zones) az [Electricity Map](https://www.electricitymap.org/map) alapján (például Boston esetében 'US-NEISO').

![installing](../../../../../translated_images/install-on-edge.78634f02842c48283726c531998679a6f03a45556b2ee99d8ff231fe41446324.hu.png)

Miután megadtad az API-kulcsot és a régiót a bővítmény felületén, a böngésző bővítménysávjában megjelenő színes pont változni fog, tükrözve a régiód energiafogyasztását. Ez segít eldönteni, hogy milyen energiaigényes tevékenységeket érdemes végezni. Ennek a „pont” rendszernek az ötletét a kaliforniai kibocsátásokhoz készült [Energy Lollipop bővítmény](https://energylollipop.com/) inspirálta.

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás, a [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.