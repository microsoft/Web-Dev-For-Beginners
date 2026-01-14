<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "26fd39046d264ba185dcb086d3a8cf3e",
  "translation_date": "2025-08-28T03:45:07+00:00",
  "source_file": "5-browser-extension/start/README.md",
  "language_code": "hu"
}
-->
# Carbon Trigger böngészőbővítmény: Kezdő kód

A tmrow CO2 Signal API-ját használva követheted az áramfogyasztást, és készíthetsz egy böngészőbővítményt, amely emlékeztetőt ad a böngésződben arról, hogy mennyire terhelt a régiód áramhasználata. Az ilyen jellegű bővítmény segíthet abban, hogy az információk alapján jobban megfontold a tevékenységeidet.

![bővítmény képernyőkép](../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.hu.png)

## Első lépések

Szükséged lesz a [npm](https://npmjs.com) telepítésére. Töltsd le a kód egy példányát egy mappába a számítógépeden.

Telepítsd a szükséges csomagokat:

```
npm install
```

Építsd meg a bővítményt a webpack segítségével:

```
npm run build
```

Edge böngészőn való telepítéshez használd a böngésző jobb felső sarkában található 'három pont' menüt, hogy megtaláld a Bővítmények panelt. Ott válaszd a 'Betöltés csomagolatlanul' opciót, hogy új bővítményt tölts be. A megjelenő ablakban nyisd meg a 'dist' mappát, és a bővítmény betöltődik. Használatához szükséged lesz egy API kulcsra a CO2 Signal API-hoz ([itt szerezhetsz egyet e-mailben](https://www.co2signal.com/) - add meg az e-mail címedet az oldalon található mezőben), valamint a régiódhoz tartozó [kódra](http://api.electricitymap.org/v3/zones), amely megfelel az [Electricity Map](https://www.electricitymap.org/map) térképének (például Bostonban én az 'US-NEISO' kódot használom).

![telepítés](../../../../translated_images/install-on-edge.78634f02842c4828.hu.png)

Miután az API kulcsot és a régiót megadtad a bővítmény felületén, a böngészőbővítmény sávjában lévő színes pontnak meg kell változnia, hogy tükrözze a régiód energiahasználatát, és iránymutatást adjon arról, hogy milyen energiaigényes tevékenységek lennének megfelelőek számodra. Ennek a 'pont' rendszernek az ötletét a [Energy Lollipop bővítmény](https://energylollipop.com/) adta, amely a kaliforniai kibocsátásokat követi.

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.