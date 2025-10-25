<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c8fc39a014d08247c082878122e2ba73",
  "translation_date": "2025-10-24T20:35:05+00:00",
  "source_file": "6-space-game/1-introduction/assignment.md",
  "language_code": "hu"
}
-->
# Készíts egy játékot: Alkalmazz tervezési mintákat

## Feladat áttekintése

Használd az újonnan megszerzett tudásodat a tervezési mintákról, és hozz létre egy egyszerű játék prototípust! Ez a feladat segít gyakorolni az architekturális mintákat (öröklődés vagy kompozíció) és a pub/sub kommunikációs rendszert, amelyet a leckében tanultál.

## Utasítások

Hozz létre egy egyszerű játékot, amely bemutatja a leckében tanult tervezési mintákat. A játék legyen működőképes, de nem szükséges bonyolult grafikát készíteni – a hangsúly az alapvető architektúrán és kommunikációs mintákon van.

### Követelmények

**Válassz egy architekturális mintát:**
- **Opció A**: Használj osztályalapú öröklődést (például a `GameObject` → `Movable` → `Hero` példát)
- **Opció B**: Használj kompozíciót (például a gyári függvény megközelítést vegyes viselkedésekkel)

**Valósítsd meg a kommunikációt:**
- **Tartalmazzon** egy `EventEmitter` osztályt a pub/sub üzenetküldéshez
- **Állíts be** legalább 2-3 különböző üzenettípust (például `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Kapcsolj össze** felhasználói bemenetet (billentyűzet/egér) a játék eseményeivel az eseményrendszeren keresztül

**Tartalmazzon játék elemeket:**
- Legalább egy játékos által irányított karakter
- Legalább egy másik játékobjektum (ellenség, gyűjthető tárgy vagy környezeti elem)
- Alapvető interakció az objektumok között (ütközés, gyűjtés vagy kommunikáció)

### Javasolt játékötletek

**Egyszerű játékok, amelyeket megfontolhatsz:**
- **Kígyójáték** – A kígyó szegmensei követik a fejet, az étel véletlenszerűen jelenik meg
- **Pong variáció** – Az ütő reagál a bemenetre, a labda visszapattan a falakról
- **Gyűjtögető játék** – A játékos mozog, tárgyakat gyűjt, miközben akadályokat kerül el
- **Alapvető toronyvédelem** – Tornyok érzékelik és lövik a mozgó ellenségeket

### Kódstruktúra irányelvek

```javascript
// Example starting structure
const Messages = {
  // Define your game messages here
};

class EventEmitter {
  // Your event system implementation
}

// Choose either class-based OR composition approach
// Class-based example:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// OR Composition example:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Az implementáció tesztelése

**Győződj meg arról, hogy a kód működik:**
- **Teszteld**, hogy az objektumok mozognak vagy változnak, amikor események kiváltódnak
- **Ellenőrizd**, hogy több objektum is reagálhat ugyanarra az eseményre
- **Vizsgáld meg**, hogy új viselkedéseket hozzáadhatsz anélkül, hogy módosítanád a meglévő kódot
- **Biztosítsd**, hogy a billentyűzet/egér bemenet megfelelően kiváltja a játék eseményeit

## Beküldési irányelvek

**A beküldésnek tartalmaznia kell:**
1. **JavaScript fájl(ok)** a játék implementációjával
2. **HTML fájl**, amelyen futtathatod és tesztelheted a játékot (lehet egyszerű)
3. **Kommentek**, amelyek elmagyarázzák, hogy melyik mintát választottad és miért
4. **Rövid dokumentáció** az üzenettípusokról és azok funkciójáról

## Értékelési szempontok

| Kritérium | Kiváló (3 pont) | Megfelelő (2 pont) | Fejlesztésre szorul (1 pont) |
|-----------|-----------------|--------------------|-----------------------------|
| **Architekturális minta** | Helyesen implementálja az öröklődést VAGY a kompozíciót egyértelmű osztály/objektum hierarchiával | A választott minta kisebb hibákkal vagy következetlenségekkel működik | Megpróbálja használni a mintát, de az implementáció jelentős problémákkal küzd |
| **Pub/Sub implementáció** | Az EventEmitter helyesen működik több üzenettípussal és megfelelő eseményáramlással | Alapvető pub/sub rendszer működik néhány eseménykezeléssel | Az eseményrendszer jelen van, de nem működik megbízhatóan |
| **Játék funkcionalitása** | Három vagy több interaktív elem, amelyek eseményeken keresztül kommunikálnak | Két interaktív elem alapvető eseménykommunikációval | Egy elem reagál az eseményekre vagy alapvető interakció |
| **Kódminőség** | Tiszta, jól kommentált kód logikus szervezéssel és modern JavaScript használatával | Általában jól szervezett kód megfelelő kommentekkel | A kód működik, de hiányzik belőle a szervezettség vagy az egyértelmű kommentelés |

**Bónuszpontok:**
- **Kreatív játékmenet**, amely érdekes módon mutatja be a minták használatát
- **Több bemeneti módszer** (billentyűzet ÉS egér események)
- **Skálázható architektúra**, amelyet könnyű új funkciókkal bővíteni

---

**Felelősségi nyilatkozat**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget az ebből a fordításból eredő félreértésekért vagy téves értelmezésekért.