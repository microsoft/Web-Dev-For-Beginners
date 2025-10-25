<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8328f58f4593b4671656ff8f4b2edbd9",
  "translation_date": "2025-10-24T20:41:57+00:00",
  "source_file": "2-js-basics/2-functions-methods/assignment.md",
  "language_code": "cs"
}
-->
# Zábava s funkcemi

## Pokyny

V tomto úkolu si procvičíte vytváření různých typů funkcí, abyste si upevnili znalosti o JavaScriptových funkcích, parametrech, výchozích hodnotách a návratových hodnotách.

Vytvořte soubor JavaScript s názvem `functions-practice.js` a implementujte následující funkce:

### Část 1: Základní funkce
1. **Vytvořte funkci s názvem `sayHello`**, která nepřijímá žádné parametry a jednoduše vypíše "Hello!" do konzole.

2. **Vytvořte funkci s názvem `introduceYourself`**, která přijímá parametr `name` a vypíše zprávu jako "Ahoj, jmenuji se [name]" do konzole.

### Část 2: Funkce s výchozími parametry
3. **Vytvořte funkci s názvem `greetPerson`**, která přijímá dva parametry: `name` (povinný) a `greeting` (volitelný, výchozí hodnota je "Hello"). Funkce by měla vypisovat zprávu jako "[greeting], [name]!" do konzole.

### Část 3: Funkce vracející hodnoty
4. **Vytvořte funkci s názvem `addNumbers`**, která přijímá dva parametry (`num1` a `num2`) a vrací jejich součet.

5. **Vytvořte funkci s názvem `createFullName`**, která přijímá parametry `firstName` a `lastName` a vrací celé jméno jako jeden řetězec.

### Část 4: Kombinace všeho dohromady
6. **Vytvořte funkci s názvem `calculateTip`**, která přijímá dva parametry: `billAmount` (povinný) a `tipPercentage` (volitelný, výchozí hodnota je 15). Funkce by měla vypočítat a vrátit částku spropitného.

### Část 5: Otestujte své funkce
Přidejte volání funkcí, abyste otestovali každou z nich, a zobrazte výsledky pomocí `console.log()`.

**Příklad volání funkcí:**
```javascript
// Test your functions here
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## Hodnocení

| Kritéria | Výborné | Dostatečné | Potřebuje zlepšení |
| -------- | -------- | ---------- | ------------------ |
| **Vytvoření funkcí** | Všech 6 funkcí je správně implementováno s odpovídající syntaxí a názvy | 4-5 funkcí je správně implementováno s drobnými syntaktickými chybami | 3 nebo méně funkcí je implementováno nebo obsahují závažné syntaktické chyby |
| **Parametry a výchozí hodnoty** | Správně používá povinné parametry, volitelné parametry a výchozí hodnoty podle zadání | Parametry jsou použity správně, ale mohou mít problémy s výchozími hodnotami | Nesprávná nebo chybějící implementace parametrů |
| **Návratové hodnoty** | Funkce, které by měly vracet hodnoty, to dělají správně, a funkce, které by neměly vracet hodnoty, pouze provádějí akce | Většina návratových hodnot je správná s drobnými problémy | Závažné problémy s návratovými hodnotami |
| **Kvalita kódu** | Čistý, dobře organizovaný kód s významnými názvy proměnných a správným odsazením | Kód funguje, ale mohl by být čistší nebo lépe organizovaný | Kód je obtížně čitelný nebo špatně strukturovaný |
| **Testování** | Všechny funkce jsou otestovány pomocí vhodných volání funkcí a výsledky jsou jasně zobrazeny | Většina funkcí je otestována dostatečně | Omezené nebo nesprávné testování funkcí |

## Bonusové výzvy (volitelné)

Pokud se chcete dále vyzvat:

1. **Vytvořte verzi jedné z funkcí jako arrow funkci**
2. **Vytvořte funkci, která přijímá jinou funkci jako parametr** (například jako příklady `setTimeout` z lekce)
3. **Přidejte validaci vstupů**, abyste zajistili, že vaše funkce správně zpracují neplatné vstupy

---

> 💡 **Tip**: Nezapomeňte otevřít vývojářskou konzoli svého prohlížeče (F12), abyste viděli výstup svých příkazů `console.log()`!

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho rodném jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.