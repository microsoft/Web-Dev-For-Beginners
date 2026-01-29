# Úkol: Pole a cykly

## Pokyny

Dokončete následující cvičení, abyste si procvičili práci s poli a cykly. Každé cvičení navazuje na koncepty z lekce a povzbuzuje vás k použití různých typů cyklů a metod pro práci s poli.

### Cvičení 1: Generátor číselného vzoru
Vytvořte program, který vypíše každé 3. číslo mezi 1-20 a zobrazí ho v konzoli.

**Požadavky:**
- Použijte `for` cyklus s vlastním inkrementem
- Zobrazte čísla v uživatelsky přívětivém formátu
- Přidejte popisné komentáře vysvětlující vaši logiku

**Očekávaný výstup:**
```
3, 6, 9, 12, 15, 18
```

> **Tip:** Upravte výraz pro iteraci ve vašem `for` cyklu tak, aby přeskočil čísla.

### Cvičení 2: Analýza pole
Vytvořte pole s alespoň 8 různými čísly a napište funkce pro analýzu dat.

**Požadavky:**
- Vytvořte pole nazvané `numbers` s alespoň 8 hodnotami
- Napište funkci `findMaximum()`, která vrátí nejvyšší číslo
- Napište funkci `findMinimum()`, která vrátí nejnižší číslo  
- Napište funkci `calculateSum()`, která vrátí součet všech čísel
- Otestujte každou funkci a zobrazte výsledky

**Bonusová výzva:** Vytvořte funkci, která najde druhé nejvyšší číslo v poli.

### Cvičení 3: Zpracování pole řetězců
Vytvořte pole vašich oblíbených filmů/knih/písní a procvičte různé typy cyklů.

**Požadavky:**
- Vytvořte pole s alespoň 5 hodnotami typu řetězec
- Použijte tradiční `for` cyklus k zobrazení položek s čísly (1. Název položky)
- Použijte `for...of` cyklus k zobrazení položek velkými písmeny
- Použijte metodu `forEach()` k počítání a zobrazení celkového počtu znaků

**Příklad výstupu:**
```
Traditional for loop:
1. The Matrix
2. Inception
3. Interstellar

For...of loop (uppercase):
THE MATRIX
INCEPTION
INTERSTELLAR

Character count:
Total characters across all titles: 42
```

### Cvičení 4: Filtrování dat (Pokročilé)
Vytvořte program, který zpracovává pole objektů reprezentujících studenty.

**Požadavky:**
- Vytvořte pole alespoň 5 objektů studentů s vlastnostmi: `name`, `age`, `grade`
- Použijte cykly k nalezení studentů, kteří jsou starší 18 let
- Vypočítejte průměrnou známku všech studentů
- Vytvořte nové pole obsahující pouze studenty s známkami nad 85

**Příklad struktury:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Add more students...
];
```

## Testování vašeho kódu

Testujte své programy:
1. Spuštěním každého cvičení v konzoli vašeho prohlížeče
2. Ověřením, že výstupy odpovídají očekávaným výsledkům
3. Testováním s různými datovými sadami
4. Kontrolou, že váš kód zvládá hraniční případy (prázdná pole, jednotlivé prvky)

## Pokyny k odevzdání

Zahrňte následující do svého odevzdání:
- Dobře okomentovaný JavaScriptový kód pro každé cvičení
- Snímky obrazovky nebo textový výstup ukazující běh vašich programů
- Stručné vysvětlení, jaký typ cyklu jste zvolili pro každou úlohu a proč

## Hodnotící kritéria

| Kritérium | Vynikající (3 body) | Přiměřené (2 body) | Potřebuje zlepšení (1 bod) |
| --------- | ------------------- | ------------------ | -------------------------- |
| **Funkčnost** | Všechna cvičení dokončena správně včetně bonusových výzev | Všechna požadovaná cvičení fungují správně | Některá cvičení neúplná nebo obsahují chyby |
| **Kvalita kódu** | Čistý, dobře organizovaný kód s popisnými názvy proměnných | Kód funguje, ale mohl by být čistší | Kód je chaotický nebo těžko pochopitelný |
| **Komentáře** | Komplexní komentáře vysvětlující logiku a rozhodnutí | Základní komentáře přítomny | Minimální nebo žádné komentáře |
| **Použití cyklů** | Ukazuje pochopení různých typů cyklů a jejich vhodné použití | Používá cykly správně, ale omezená rozmanitost | Nesprávné nebo neefektivní použití cyklů |
| **Testování** | Důkazy o důkladném testování s více scénáři | Základní testování prokázáno | Málo důkazů o testování |

## Otázky k zamyšlení

Po dokončení cvičení zvažte:
1. Který typ cyklu vám připadal nejpřirozenější na použití a proč?
2. Jaké výzvy jste potkali při práci s poli?
3. Jak by se tyto dovednosti mohly uplatnit v reálných projektech webového vývoje?
4. Co byste udělali jinak, kdybyste museli optimalizovat svůj kód pro výkon?

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.