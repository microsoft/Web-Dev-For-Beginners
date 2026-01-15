<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fab4e6b4f0efcd587a9029d82991f597",
  "translation_date": "2025-08-28T03:45:39+00:00",
  "source_file": "5-browser-extension/solution/README.md",
  "language_code": "hu"
}
-->
# Carbon Trigger böngészőbővítmény: Kész kód

A tmrow CO2 Signal API-ját használva az áramfogyasztás nyomon követésére, készíts egy böngészőbővítményt, amely emlékeztetőt ad a böngésződben arról, hogy mennyire terhelt az áramfogyasztás a régiódban. Az ad hoc használat segít abban, hogy az információk alapján döntéseket hozz a tevékenységeidről.

![bővítmény képernyőkép](../../../../translated_images/hu/extension-screenshot.0e7f5bfa110e92e3.png)

## Első lépések

Szükséged lesz a [npm](https://npmjs.com) telepítésére. Töltsd le a kód egy példányát egy mappába a számítógépeden.

Telepítsd az összes szükséges csomagot:

```
npm install
```

Építsd meg a bővítményt a webpack segítségével:

```
npm run build
```

Edge böngészőn való telepítéshez használd a böngésző jobb felső sarkában található 'három pont' menüt, hogy megtaláld a Bővítmények panelt. Ott válaszd a 'Kicsomagolt betöltése' opciót egy új bővítmény betöltéséhez. A megjelenő ablakban nyisd meg a 'dist' mappát, és a bővítmény betöltődik. A használathoz szükséged lesz egy API kulcsra a CO2 Signal API-hoz ([itt szerezhetsz egyet e-mailben](https://www.co2signal.com/) - add meg az e-mail címedet az oldalon található mezőben), valamint a régiódhoz tartozó [kódra](http://api.electricitymap.org/v3/zones), amely megfelel az [Electricity Map](https://www.electricitymap.org/map) térképének (például Bostonban én az 'US-NEISO' kódot használom).

![telepítés](../../../../translated_images/hu/install-on-edge.78634f02842c4828.png)

Miután az API kulcsot és a régiót megadtad a bővítmény felületén, a böngészőbővítmény sávjában lévő színes pontnak meg kell változnia, hogy tükrözze a régiód energiafogyasztását, és iránymutatást adjon arról, hogy milyen energiaigényes tevékenységek lennének megfelelőek számodra. Ennek a 'pont' rendszernek az ötletét a [Energy Lollipop bővítmény](https://energylollipop.com/) adta, amely a kaliforniai kibocsátásokat követi.

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás, a [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével került lefordításra. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget az ebből a fordításból eredő félreértésekért vagy téves értelmezésekért.