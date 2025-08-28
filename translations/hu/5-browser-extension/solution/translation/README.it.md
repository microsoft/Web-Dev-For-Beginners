<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9a6b22a2eff0f499b66236be973b24ad",
  "translation_date": "2025-08-28T03:46:37+00:00",
  "source_file": "5-browser-extension/solution/translation/README.it.md",
  "language_code": "hu"
}
-->
# Carbon Trigger böngészőbővítmény: kezdőkód

A tmrow Signal CO2 API-ját fogjuk használni az áramfogyasztás nyomon követésére, hogy egy böngészőbővítményt hozzunk létre. Ez a bővítmény közvetlenül a böngészőben emlékeztet arra, hogy mennyire terheli az áramfogyasztás a régiódat. Ennek az egyedi bővítménynek a használata segít abban, hogy tevékenységeidet ezek alapján az információk alapján értékeld.

![a bővítmény képernyőképe](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.hu.png)

## Kezdés

Győződj meg róla, hogy az [npm](https://npmjs.com) telepítve van. Töltsd le a kód egy példányát a számítógéped egy mappájába.

Telepítsd a szükséges csomagokat:

```
npm install
```

Hozd létre a bővítményt a webpack segítségével:

```
npm run build
```

Edge böngészőhöz való telepítéshez használd a böngésző jobb felső sarkában található "három pont" menüt, hogy megtaláld a Bővítmények panelt. Ha még nincs bekapcsolva, kapcsold be a Fejlesztői módot (a bal alsó sarokban). Válaszd a "Kitömörített bővítmény betöltése" opciót egy új bővítmény hozzáadásához. A megjelenő ablakban nyisd meg a "dist" mappát, és a bővítmény betöltődik. A használathoz szükséged lesz egy API kulcsra a CO2 Signal API-hoz (ezt [itt szerezheted meg e-mailben](https://www.co2signal.com/) - add meg az e-mail címedet az oldalon található mezőben), valamint a [régiód kódjára](http://api.electricitymap.org/v3/zones), amely megfelel az [elektromos térkép](https://www.electricitymap.org/map) régiójának (például Boston esetében "US-NEISO").

![telepítés](../../../../../translated_images/install-on-edge.78634f02842c48283726c531998679a6f03a45556b2ee99d8ff231fe41446324.hu.png)

Miután megadtad az API kulcsot és a régiót a bővítmény felületén, a böngésző bővítménysávjában található színes pontnak meg kell változnia, hogy tükrözze a régió energiafogyasztását. Ez egyben útmutatást is ad arról, hogy mely nagy energiaigényű tevékenységek végrehajtása lenne megfelelő. Ennek a "pontozási" rendszernek az alapötletét a [California Energy Lollipop](https://energylollipop.com/) bővítmény biztosította.

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás, a [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.