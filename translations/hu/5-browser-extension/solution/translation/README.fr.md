<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9361268ca430b2579375009e1eceb5e5",
  "translation_date": "2025-08-28T03:48:43+00:00",
  "source_file": "5-browser-extension/solution/translation/README.fr.md",
  "language_code": "hu"
}
-->
# Carbon Trigger böngészőbővítmény: Elkészült kód

A tmrow CO2 Signal API-ját használva az áramfogyasztás nyomon követésére hozz létre egy böngészőbővítményt, amely közvetlenül a böngésződben emlékeztet az adott régió áramfogyasztására. Ennek az ad hoc bővítménynek a használata segíthet abban, hogy az információk alapján mérlegeld a tevékenységeidet.

![bővítmény képernyőkép](../../../../../translated_images/hu/extension-screenshot.0e7f5bfa110e92e3.png)

## Kezdés

Szükséged lesz a [npm](https://npmjs.com) telepítésére. Töltsd le a kód egy példányát a számítógéped egy mappájába.

Telepítsd a szükséges csomagokat:

```
npm install
```

Fordítsd le a bővítményt a webpack segítségével:

```
npm run build
```

Edge böngészőre való telepítéshez használd a böngésző jobb felső sarkában található 'három pont' menüt, hogy megtaláld a Bővítmények panelt. Innen válaszd a 'Kicsomagolt bővítmény betöltése' opciót egy új bővítmény betöltéséhez. A megjelenő ablakban nyisd meg a 'dist' mappát, és a bővítmény betöltődik. A használathoz szükséged lesz egy API kulcsra a CO2 Signal API-hoz ([itt szerezhetsz egyet e-mailben](https://www.co2signal.com/) - add meg az e-mail címedet az oldalon található mezőben), valamint a régiód [kódjára](http://api.electricitymap.org/v3/zones), amely megfelel az [Electricity Map](https://www.electricitymap.org/map) térképének (például Boston esetében az 'US-NEISO' kódot használom).

![telepítés](../../../../../translated_images/hu/install-on-edge.78634f02842c4828.png)

Miután az API kulcsot és a régiót megadtad a bővítmény felületén, a böngésző bővítménysávjában található színes pontnak meg kell változnia, hogy tükrözze a régiód energiafogyasztását, és jelezze, hogy milyen energiaigényes tevékenységek végzése lenne megfelelő. A 'pontok' mögötti koncepciót az [Energy Lollipop bővítmény](https://energylollipop.com/) adta, amely a kaliforniai kibocsátásokat követi.

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás, a [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.