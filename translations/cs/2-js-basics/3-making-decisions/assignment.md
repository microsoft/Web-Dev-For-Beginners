<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bf62b82567e6f9bdf4abda9ae0ccb64a",
  "translation_date": "2025-08-28T04:07:35+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "cs"
}
-->
# Operátory

## Instrukce

Vyzkoušejte si práci s operátory. Zde je návrh programu, který můžete implementovat:

Máte skupinu studentů ze dvou různých systémů hodnocení.

### První systém hodnocení

Jeden systém hodnocení je definován známkami od 1 do 5, kde známka 3 a vyšší znamená, že student úspěšně absolvoval kurz.

### Druhý systém hodnocení

Druhý systém hodnocení obsahuje následující známky: `A, A-, B, B-, C, C-`, kde `A` je nejlepší známka a `C` je nejnižší známka, která znamená úspěšné absolvování.

### Úkol

Na základě následujícího pole `allStudents`, které reprezentuje všechny studenty a jejich známky, vytvořte nové pole `studentsWhoPass`, které bude obsahovat všechny studenty, kteří úspěšně absolvovali.

> TIP: Použijte for-cyklus, if...else a porovnávací operátory:

```javascript
let allStudents = [
  'A',
  'B-',
  1,
  4,
  5,
  2
]

let studentsWhoPass = [];
```

## Hodnocení

| Kritéria | Vynikající                    | Přiměřené                     | Vyžaduje zlepšení              |
| -------- | ----------------------------- | ----------------------------- | ------------------------------ |
|          | Je prezentováno kompletní řešení | Je prezentováno částečné řešení | Je prezentováno řešení s chybami |

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádné nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.