<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "21b364c158c8e4f698de65eeac16c9fe",
  "translation_date": "2025-08-28T03:48:11+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ms.md",
  "language_code": "hu"
}
-->
# Carbon Trigger Böngészőbővítmény: Teljes Kód

A tmrow CO2 Signal API használatával nyomon követheted az áramfogyasztást, és létrehozhatsz egy böngészőbővítményt, amely figyelmeztetéseket ad a böngésződben arról, hogy mennyire terhelt az adott régió áramfogyasztása. Ennek a bővítménynek a használata segíthet abban, hogy tevékenységeidet ezen információk alapján mérlegeld.

![böngészőbővítmény képernyőképe](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.hu.png)

## Kezdjük innen

Először telepítened kell az [npm](https://npmjs.com) alkalmazást. Töltsd le ennek a kódnak egy példányát a számítógéped egy mappájába.

Telepítsd az összes szükséges csomagot:

```
npm install
```

Építsd meg a bővítményt a webpack segítségével:

```
npm run build
```

Edge böngészőben való telepítéshez használd a böngésző jobb felső sarkában található 'három pont' menüt, hogy megtaláld a Bővítmények panelt. Ott válaszd a 'Load Unpacked' opciót, hogy betöltsd az új bővítményt. Nyisd meg a 'dist' mappát a kérésre, és a bővítmény betöltődik. A használathoz szükséged lesz egy API kulcsra a CO2 Signal API-hoz ([itt szerezhetsz egyet e-mailben](https://www.co2signal.com/) - írd be az e-mail címedet az oldalon található mezőbe), valamint a régiód [kódjára](http://api.electricitymap.org/v3/zones), amely megfelel az [Electricity Map](https://www.electricitymap.org/map) térképének (például Bostonban én az 'US-NEISO' kódot használom).

![letöltés folyamatban](../../../../../translated_images/install-on-edge.78634f02842c48283726c531998679a6f03a45556b2ee99d8ff231fe41446324.hu.png)

Miután az API kulcsot és a régiót megadtad a bővítmény felületén, a böngészőbővítmény sávjában lévő színes pont megváltozik, hogy tükrözze a régió energiafogyasztását, és útmutatást adjon arról, hogy milyen tevékenységek végezhetők az adott időszakban. Ennek a 'pont' rendszernek az ötletét a [Lollipop Energy böngészőbővítmény](https://energylollipop.com/) adta, amelyet Kalifornia kibocsátásaihoz fejlesztettek ki.

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás, a [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.