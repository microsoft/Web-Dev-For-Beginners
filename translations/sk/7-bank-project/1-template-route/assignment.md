<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-27T22:11:51+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "sk"
}
-->
# Vylepšenie smerovania

## Inštrukcie

Deklarácia trás momentálne obsahuje iba ID šablóny, ktorú treba použiť. Pri zobrazovaní novej stránky je však niekedy potrebné urobiť viac. Vylepšime našu implementáciu smerovania o dve ďalšie funkcie:

- Pridajte názvy ku každej šablóne a aktualizujte názov okna týmto novým názvom, keď sa šablóna zmení.
- Pridajte možnosť spustiť nejaký kód po zmene šablóny. Chceme, aby sa v konzole pre vývojárov zobrazilo `'Dashboard is shown'` vždy, keď sa zobrazí stránka dashboardu.

## Kritériá hodnotenia

| Kritérium | Vynikajúce                                                                                                                        | Dostatočné                                                                                                                                                                               | Potrebuje zlepšenie                                   |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|           | Obe funkcie sú implementované a fungujú. Pridanie názvu a kódu funguje aj pre novú trasu pridanú do deklarácie `routes`.            | Obe funkcie fungujú, ale správanie je pevne zakódované a nie je konfigurovateľné prostredníctvom deklarácie `routes`. Pridanie tretej trasy s názvom a kódom nefunguje alebo funguje čiastočne. | Jedna z funkcií chýba alebo nefunguje správne.       |

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.