# Vytvorenie hry: Použitie návrhových vzorov

## Prehľad zadania

Využite svoje nové znalosti návrhových vzorov na vytvorenie jednoduchého prototypu hry! Toto zadanie vám pomôže precvičiť si architektonické vzory (dedičnosť alebo kompozíciu) a systém komunikácie pub/sub, o ktorom ste sa učili v lekcii.

## Pokyny

Vytvorte jednoduchú reprezentáciu hry, ktorá demonštruje návrhové vzory z tejto lekcie. Vaša hra by mala byť funkčná, ale nemusí obsahovať zložité grafické prvky – zamerajte sa na základnú architektúru a komunikačné vzory.

### Požiadavky

**Vyberte si architektonický vzor:**
- **Možnosť A**: Použite dedičnosť založenú na triedach (ako príklad `GameObject` → `Movable` → `Hero`)
- **Možnosť B**: Použite kompozíciu (ako prístup s továrenskou funkciou a zmiešanými správaním)

**Implementujte komunikáciu:**
- **Zahrňte** triedu `EventEmitter` pre messaging pub/sub
- **Nastavte** aspoň 2-3 rôzne typy správ (napr. `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Prepojte** vstup používateľa (klávesnica/myš) s hernými udalosťami prostredníctvom systému udalostí

**Herné prvky, ktoré treba zahrnúť:**
- Aspoň jednu postavu ovládanú hráčom
- Aspoň jeden ďalší herný objekt (nepriateľ, predmet na zbieranie alebo environmentálny prvok)
- Základnú interakciu medzi objektmi (kolízia, zbieranie alebo komunikácia)

### Návrhy na hry

**Jednoduché hry na zváženie:**
- **Hra Snake** – Segmenty hada nasledujú hlavu, jedlo sa objavuje náhodne
- **Variácia Pong** – Pálka reaguje na vstup, lopta sa odráža od stien
- **Hra na zber** – Hráč sa pohybuje a zbiera predmety, pričom sa vyhýba prekážkam
- **Základy Tower Defense** – Veže detekujú a strieľajú na pohybujúcich sa nepriateľov

### Usmernenia pre štruktúru kódu

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

### Testovanie implementácie

**Overte, že váš kód funguje:**
- **Testovaním**, že objekty sa pohybujú alebo menia, keď sú spustené udalosti
- **Potvrdením**, že viaceré objekty môžu reagovať na tú istú udalosť
- **Kontrolou**, že môžete pridať nové správania bez úpravy existujúceho kódu
- **Zabezpečením**, že vstup z klávesnice/myši správne spúšťa herné udalosti

## Pokyny na odovzdanie

**Vaše odovzdanie by malo obsahovať:**
1. **JavaScript súbor(y)** s implementáciou hry
2. **HTML súbor** na spustenie a testovanie hry (môže byť jednoduchý)
3. **Komentáre** vysvetľujúce, ktorý vzor ste si vybrali a prečo
4. **Stručnú dokumentáciu** vašich typov správ a ich funkcie

## Hodnotiace kritériá

| Kritérium | Vynikajúce (3 body) | Dostatočné (2 body) | Potrebuje zlepšenie (1 bod) |
|-----------|---------------------|---------------------|-----------------------------|
| **Architektonický vzor** | Správne implementuje buď dedičnosť ALEBO kompozíciu s jasnou hierarchiou tried/objektov | Používa zvolený vzor s menšími chybami alebo nekonzistenciami | Pokúša sa použiť vzor, ale implementácia má významné problémy |
| **Implementácia pub/sub** | EventEmitter funguje správne s viacerými typmi správ a správnym tokom udalostí | Základný systém pub/sub funguje s určitým spracovaním udalostí | Systém udalostí je prítomný, ale nefunguje spoľahlivo |
| **Funkčnosť hry** | Tri alebo viac interaktívnych prvkov, ktoré komunikujú prostredníctvom udalostí | Dva interaktívne prvky so základnou komunikáciou udalostí | Jeden prvok reaguje na udalosti alebo základnú interakciu |
| **Kvalita kódu** | Čistý, dobre komentovaný kód s logickou organizáciou a moderným JavaScriptom | Všeobecne dobre organizovaný kód s dostatočnými komentármi | Kód funguje, ale chýba mu organizácia alebo jasné komentovanie |

**Bonusové body:**
- **Kreatívne herné mechaniky**, ktoré ukazujú zaujímavé použitie vzorov
- **Viacero metód vstupu** (klávesnica A myš)
- **Škálovateľná architektúra**, ktorá by sa dala ľahko rozšíriť o nové funkcie

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.