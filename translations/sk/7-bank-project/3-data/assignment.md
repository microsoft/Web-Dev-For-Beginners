<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-27T22:03:11+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "sk"
}
-->
# Refaktorujte a komentujte svoj kód

## Pokyny

Ako vaša kódová základňa rastie, je dôležité pravidelne refaktorovať kód, aby zostal čitateľný a udržiavateľný v priebehu času. Pridajte komentáre a refaktorujte svoj `app.js`, aby ste zlepšili kvalitu kódu:

- Extrahujte konštanty, ako napríklad základnú URL adresu API servera
- Zoskupte podobný kód: napríklad môžete vytvoriť funkciu `sendRequest()`, ktorá zoskupí kód použitý v `createAccount()` a `getAccount()`
- Preorganizujte kód, aby bol ľahšie čitateľný, a pridajte komentáre

## Kritériá hodnotenia

| Kritérium | Vynikajúce                                                                                                                                                     | Dostatočné                                                                                       | Potrebuje zlepšenie                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
|           | Kód je okomentovaný, dobre organizovaný v rôznych sekciách a ľahko čitateľný. Konštanty sú extrahované a bola vytvorená zoskupená funkcia `sendRequest()`.      | Kód je čistý, ale stále by sa dal zlepšiť pridaním ďalších komentárov, extrakciou konštánt alebo zoskupením. | Kód je neprehľadný, neokomentovaný, konštanty nie sú extrahované a kód nie je zoskupený. |

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.