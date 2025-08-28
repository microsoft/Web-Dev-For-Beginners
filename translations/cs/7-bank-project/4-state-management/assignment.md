<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-28T03:35:45+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "cs"
}
-->
# Implementace dialogu "Přidat transakci"

## Pokyny

Naše bankovní aplikace stále postrádá jednu důležitou funkci: možnost zadat nové transakce.
Použijte vše, co jste se naučili v předchozích čtyřech lekcích, a implementujte dialog "Přidat transakci":

- Přidejte tlačítko "Přidat transakci" na stránku dashboardu
- Vytvořte buď novou stránku s HTML šablonou, nebo použijte JavaScript k zobrazení/skrytí HTML dialogu bez opuštění stránky dashboardu (můžete použít vlastnost [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) nebo CSS třídy)
- Ujistěte se, že zpracováváte [přístupnost pro klávesnici a čtečky obrazovky](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) pro dialog
- Implementujte HTML formulář pro příjem vstupních dat
- Vytvořte JSON data z dat formuláře a odešlete je na API
- Aktualizujte stránku dashboardu s novými daty

Podívejte se na [specifikace serverového API](../api/README.md), abyste zjistili, které API je potřeba volat a jaký je očekávaný formát JSON.

Zde je příklad výsledku po dokončení úkolu:

![Screenshot zobrazující příklad dialogu "Přidat transakci"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.cs.png)

## Hodnocení

| Kritéria | Vynikající                                                                                       | Přiměřené                                                                                                              | Potřebuje zlepšení                          |
| -------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|          | Přidání transakce je kompletně implementováno podle všech nejlepších postupů z lekcí.            | Přidání transakce je implementováno, ale ne podle nejlepších postupů z lekcí, nebo funguje jen částečně.               | Přidání transakce vůbec nefunguje.          |

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro kritické informace se doporučuje profesionální lidský překlad. Nenese odpovědnost za žádné nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.