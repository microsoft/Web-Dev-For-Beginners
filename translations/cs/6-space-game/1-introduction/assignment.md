# Vytvořte hru: Použití návrhových vzorů

## Přehled úkolu

Využijte své nové znalosti návrhových vzorů k vytvoření jednoduchého prototypu hry! Tento úkol vám pomůže procvičit jak architektonické vzory (dědičnost nebo kompozici), tak systém komunikace pub/sub, o kterém jste se dozvěděli v lekci.

## Pokyny

Vytvořte jednoduchou reprezentaci hry, která demonstruje návrhové vzory z této lekce. Vaše hra by měla být funkční, ale nemusí obsahovat složitou grafiku – zaměřte se na základní architekturu a komunikační vzory.

### Požadavky

**Vyberte si architektonický vzor:**
- **Možnost A**: Použijte dědičnost založenou na třídách (například `GameObject` → `Movable` → `Hero`)
- **Možnost B**: Použijte kompozici (například přístup s tovární funkcí a smíšenými chováními)

**Implementujte komunikaci:**
- **Zahrňte** třídu `EventEmitter` pro zasílání zpráv pomocí pub/sub systému
- **Nastavte** alespoň 2-3 různé typy zpráv (například `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Propojte** uživatelský vstup (klávesnice/myš) s herními událostmi prostřednictvím systému událostí

**Herní prvky, které je třeba zahrnout:**
- Alespoň jednu postavu ovládanou hráčem
- Alespoň jeden další herní objekt (nepřítel, sběratelský předmět nebo prvek prostředí)
- Základní interakci mezi objekty (kolize, sběr nebo komunikace)

### Návrhy na hry

**Jednoduché hry, které můžete zvážit:**
- **Hra Snake** – Segmenty hada následují hlavu, jídlo se objevuje náhodně
- **Variace Pongu** – Pálka reaguje na vstup, míček se odráží od stěn
- **Sběratelská hra** – Hráč se pohybuje a sbírá předměty, zatímco se vyhýbá překážkám
- **Základy Tower Defense** – Věže detekují a střílí na pohybující se nepřátele

### Pokyny ke struktuře kódu

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

### Testování vaší implementace

**Ověřte, že váš kód funguje:**
- **Testováním**, zda se objekty pohybují nebo mění při spuštění událostí
- **Potvrzením**, že více objektů může reagovat na stejnou událost
- **Kontrolou**, že můžete přidávat nové chování bez úprav stávajícího kódu
- **Zajištěním**, že vstup z klávesnice/myši správně spouští herní události

## Pokyny k odevzdání

**Vaše odevzdání by mělo zahrnovat:**
1. **JavaScript soubor(y)** s vaší implementací hry
2. **HTML soubor** pro spuštění a testování vaší hry (může být jednoduchý)
3. **Komentáře**, které vysvětlují, jaký vzor jste si vybrali a proč
4. **Stručnou dokumentaci** vašich typů zpráv a jejich funkcí

## Hodnotící kritéria

| Kritérium | Vynikající (3 body) | Dostatečné (2 body) | Potřebuje zlepšení (1 bod) |
|-----------|---------------------|---------------------|----------------------------|
| **Architektonický vzor** | Správně implementuje buď dědičnost NEBO kompozici s jasnou hierarchií tříd/objektů | Používá zvolený vzor s drobnými problémy nebo nekonzistencemi | Pokouší se použít vzor, ale implementace má významné problémy |
| **Implementace pub/sub** | EventEmitter funguje správně s více typy zpráv a správným tokem událostí | Základní systém pub/sub funguje s některým zpracováním událostí | Systém událostí je přítomen, ale nefunguje spolehlivě |
| **Funkčnost hry** | Tři nebo více interaktivních prvků, které komunikují prostřednictvím událostí | Dva interaktivní prvky se základní komunikací událostí | Jeden prvek reaguje na události nebo základní interakci |
| **Kvalita kódu** | Čistý, dobře komentovaný kód s logickou organizací a moderním JavaScriptem | Obecně dobře organizovaný kód s dostatečnými komentáři | Kód funguje, ale postrádá organizaci nebo jasné komentáře |

**Bonusové body:**
- **Kreativní herní mechaniky**, které ukazují zajímavé využití vzorů
- **Více vstupních metod** (události z klávesnice I myši)
- **Škálovatelná architektura**, kterou by bylo snadné rozšířit o nové funkce

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho rodném jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.