<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-28T03:38:21+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "cs"
}
-->
# Vylepšení směrování

## Pokyny

Deklarace tras aktuálně obsahuje pouze ID šablony, kterou je třeba použít. Ale při zobrazování nové stránky je někdy potřeba něco víc. Vylepšeme naši implementaci směrování dvěma dalšími funkcemi:

- Přidejte názvy ke každé šabloně a aktualizujte název okna pomocí tohoto nového názvu, když se šablona změní.
- Přidejte možnost spustit nějaký kód po změně šablony. Chceme, aby se v konzoli pro vývojáře pokaždé, když se zobrazí stránka dashboardu, vytisklo `'Dashboard is shown'`.

## Hodnocení

| Kritéria | Vynikající                                                                                                                         | Přiměřené                                                                                                                                                                                 | Potřebuje zlepšení                                     |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|          | Obě funkce jsou implementovány a fungují. Přidání názvu a kódu funguje také pro novou trasu přidanou do deklarace `routes`.         | Obě funkce fungují, ale chování je pevně zakódováno a není konfigurovatelné prostřednictvím deklarace `routes`. Přidání třetí trasy s názvem a přidáním kódu nefunguje nebo funguje částečně. | Jedna z funkcí chybí nebo nefunguje správně.          |

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.