# Rozhodování: Zpracování známek studentů

## Cíle učení

V tomto úkolu si procvičíte koncepty rozhodování z této lekce tím, že vytvoříte program, který zpracovává známky studentů z různých systémů hodnocení. Použijete příkazy `if...else`, operátory porovnání a logické operátory k určení, kteří studenti projdou své kurzy.

## Výzva

Pracujete pro školu, která se nedávno sloučila s jinou institucí. Nyní musíte zpracovat známky studentů ze dvou zcela odlišných systémů hodnocení a určit, kteří studenti projdou. To je ideální příležitost procvičit si podmíněnou logiku!

### Porozumění systémům hodnocení

#### První systém hodnocení (Číselný)
- Známky jsou udělovány jako čísla od 1 do 5
- **Prospěl**: 3 a více (3, 4 nebo 5)
- **Neprospěl**: Méně než 3 (1 nebo 2)

#### Druhý systém hodnocení (Písmenové známky)
- Známky jsou udělovány jako písmena: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Prospěl**: `A`, `A-`, `B`, `B-`, `C`, `C-` (všechny uvedené známky jsou prospěšné)
- **Poznámka**: Tento systém neobsahuje neprospěšné známky jako `D` nebo `F`

### Váš úkol

Na základě následujícího pole `allStudents`, které reprezentuje všechny studenty a jejich známky, vytvořte nové pole `studentsWhoPass`, které bude obsahovat všechny studenty, kteří projdou podle jejich příslušných systémů hodnocení.

```javascript
let allStudents = [
  'A',    // Letter grade - passing
  'B-',   // Letter grade - passing  
  1,      // Numeric grade - failing
  4,      // Numeric grade - passing
  5,      // Numeric grade - passing
  2       // Numeric grade - failing
];

let studentsWhoPass = [];
```

### Postupný přístup

1. **Nastavte smyčku**, která projde každou známku v poli `allStudents`
2. **Zkontrolujte typ známky** (je to číslo nebo řetězec?)
3. **Použijte odpovídající pravidla systému hodnocení**:
   - Pro čísla: zkontrolujte, zda je známka >= 3
   - Pro řetězce: zkontrolujte, zda je to jedna z platných prospěšných písmenových známek
4. **Přidejte prospěšné známky** do pole `studentsWhoPass`

### Užitečné techniky kódu

Použijte tyto koncepty JavaScriptu z lekce:

- **Operátor typeof**: `typeof grade === 'number'` pro kontrolu, zda je známka číselná
- **Operátory porovnání**: `>=` pro porovnání číselných známek
- **Logické operátory**: `||` pro kontrolu více podmínek písmenových známek
- **Příkazy if...else**: pro zpracování různých systémů hodnocení
- **Metody pole**: `.push()` pro přidání prospěšných známek do nového pole

### Očekávaný výstup

Když spustíte svůj program, pole `studentsWhoPass` by mělo obsahovat: `['A', 'B-', 4, 5]`

**Proč tyto známky prošly:**
- `'A'` a `'B-'` jsou platné písmenové známky (všechny písmenové známky v tomto systému jsou prospěšné)
- `4` a `5` jsou číselné známky >= 3
- `1` a `2` neprošly, protože jsou číselné známky < 3

## Testování vašeho řešení

Otestujte svůj kód s různými scénáři:

```javascript
// Test with different grade combinations
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Your solution should work with any combination of valid grades
```

## Bonusové výzvy

Jakmile dokončíte základní úkol, zkuste tyto rozšíření:

1. **Přidejte validaci**: Zkontrolujte neplatné známky (například záporná čísla nebo neplatná písmena)
2. **Spočítejte statistiky**: Vypočítejte, kolik studentů prošlo vs. neprošlo
3. **Konverze známek**: Převádějte všechny známky na jednotný číselný systém (A=5, B=4, C=3, atd.)

## Hodnotící kritéria

| Kritéria | Vynikající (4) | Dobré (3) | Rozvíjející se (2) | Začínající (1) |
|----------|---------------|-----------|--------------------|---------------|
| **Funkčnost** | Program správně identifikuje všechny prospěšné známky z obou systémů | Program funguje s drobnými problémy nebo okrajovými případy | Program částečně funguje, ale má logické chyby | Program má významné chyby nebo nefunguje |
| **Struktura kódu** | Čistý, dobře organizovaný kód s odpovídající logikou if...else | Dobrá struktura s vhodnými podmíněnými příkazy | Přijatelná struktura s některými organizačními problémy | Špatná struktura, obtížně sledovatelná logika |
| **Použití konceptů** | Efektivní použití operátorů porovnání, logických operátorů a podmíněných příkazů | Dobré použití konceptů lekce s drobnými nedostatky | Nějaké použití konceptů lekce, ale chybí klíčové prvky | Omezené použití konceptů lekce |
| **Řešení problému** | Jasné pochopení problému a elegantní přístup k řešení | Dobrý přístup k řešení problému s pevnou logikou | Přiměřené řešení problému s určitým zmatením | Nejasný přístup, neprokazuje pochopení |

## Pokyny k odevzdání

1. **Důkladně otestujte svůj kód** s poskytnutými příklady
2. **Přidejte komentáře**, které vysvětlují vaši logiku, zejména u podmíněných příkazů
3. **Ověřte, že výstup** odpovídá očekávaným výsledkům: `['A', 'B-', 4, 5]`
4. **Zvažte okrajové případy**, jako jsou prázdná pole nebo neočekávané datové typy

> 💡 **Tip**: Začněte jednoduše! Nejprve zajistěte, aby základní funkčnost fungovala, a poté přidejte sofistikovanější funkce. Pamatujte, že cílem je procvičit si logiku rozhodování pomocí nástrojů, které jste se naučili v této lekci.

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.