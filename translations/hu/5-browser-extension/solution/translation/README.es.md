# Carbon Trigger böngészőbővítmény: Teljes kód

A tmrow CO2 Signal API-ját használva az áramfogyasztás nyomon követésére, hozzon létre egy böngészőbővítményt, amely közvetlenül a böngészőjében emlékeztetőt ad az Ön régiójának áramfogyasztásáról. Ennek az ad hoc bővítménynek a használata segít döntéseket hozni a tevékenységeiről ezen információk alapján.

![extension screenshot](../../../../../translated_images/hu/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.png)

## Kezdés

Telepítenie kell a [npm](https://npmjs.com) programot. Töltse le ennek a kódnak egy példányát a számítógépén egy mappába.

Telepítse az összes szükséges csomagot:

```
npm install
```

Építse meg a bővítményt a webpack segítségével:

```
npm run build
```

Edge böngészőben való telepítéshez használja a böngésző jobb felső sarkában található 'három pont' menüt, hogy megtalálja a Bővítmények panelt. Innen válassza a 'Kicsomagolt betöltése' opciót egy új bővítmény betöltéséhez. Amikor a rendszer kéri, nyissa meg a 'dist' mappát, és a bővítmény betöltődik. A használathoz szüksége lesz egy API kulcsra a CO2 Signal API-hoz ([itt szerezhet egyet e-mailben](https://www.co2signal.com/) - írja be az e-mail címét az oldal mezőjébe), valamint a régiójához tartozó [kódra](http://api.electricitymap.org/v3/zones), amely megfelel az [Electricity Map](https://www.electricitymap.org/map) térképének (például Bostonban én az 'US-NEISO' kódot használom).

![installing](../../../../../translated_images/hu/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.png)

Miután az API kulcsot és a régiót megadta a bővítmény felületén, a böngésző bővítménysávjában lévő színes pontnak meg kell változnia, hogy tükrözze az Ön régiójának energiafogyasztását, és jelezze, hogy milyen magas energiafogyasztású tevékenységek lennének megfelelőek az Ön számára. Ennek a "pont" rendszernek a koncepcióját a [Energy Lollipop bővítmény](https://energylollipop.com/) adta, amely Kalifornia kibocsátásait mutatja.

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás, a [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.