<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-28T03:27:31+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "cs"
}
-->
# Refaktorujte a komentujte svůj kód

## Pokyny

Jak vaše kódová základna roste, je důležité pravidelně refaktorovat kód, aby byl čitelný a udržovatelný v průběhu času. Přidejte komentáře a refaktorujte svůj `app.js`, abyste zlepšili kvalitu kódu:

- Extrahujte konstanty, jako je základní URL adresa serverového API
- Zjednodušte podobný kód: například můžete vytvořit funkci `sendRequest()`, která sloučí kód používaný v `createAccount()` a `getAccount()`
- Přeskupte kód tak, aby byl přehlednější, a přidejte komentáře

## Hodnocení

| Kritéria | Vynikající                                                                                                                                                     | Dostatečné                                                                                       | Vyžaduje zlepšení                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
|          | Kód je okomentovaný, dobře organizovaný do různých sekcí a snadno čitelný. Konstanty jsou extrahovány a byla vytvořena zjednodušená funkce `sendRequest()`.     | Kód je čistý, ale stále by mohl být vylepšen více komentáři, extrakcí konstant nebo zjednodušením. | Kód je chaotický, neokomentovaný, konstanty nejsou extrahovány a kód není zjednodušen. |

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.