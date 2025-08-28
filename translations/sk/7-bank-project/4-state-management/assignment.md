<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-27T22:09:25+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "sk"
}
-->
# Implementácia dialógu "Pridať transakciu"

## Inštrukcie

Naša banková aplikácia stále chýba jedna dôležitá funkcia: možnosť zadávať nové transakcie. 
Pomocou všetkého, čo ste sa naučili v predchádzajúcich štyroch lekciách, implementujte dialóg "Pridať transakciu":

- Pridajte tlačidlo "Pridať transakciu" na stránku dashboardu
- Buď vytvorte novú stránku s HTML šablónou, alebo použite JavaScript na zobrazenie/skrytie HTML dialógu bez opustenia stránky dashboardu (môžete použiť vlastnosť [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) alebo CSS triedy)
- Uistite sa, že riešite [prístupnosť pre klávesnicu a čítačky obrazovky](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) pre dialóg
- Implementujte HTML formulár na prijímanie vstupných údajov
- Vytvorte JSON dáta z údajov formulára a odošlite ich na API
- Aktualizujte stránku dashboardu s novými údajmi

Pozrite si [špecifikácie serverového API](../api/README.md), aby ste zistili, ktoré API je potrebné zavolať a aký je očakávaný formát JSON.

Tu je príklad výsledku po dokončení úlohy:

![Snímka obrazovky zobrazujúca príklad dialógu "Pridať transakciu"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.sk.png)

## Hodnotiace kritériá

| Kritérium | Vynikajúce                                                                                       | Dostatočné                                                                                                             | Potrebuje zlepšenie                          |
| --------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
|           | Pridanie transakcie je implementované úplne podľa všetkých najlepších praktík z lekcií.          | Pridanie transakcie je implementované, ale nie podľa najlepších praktík z lekcií, alebo funguje len čiastočne.         | Pridanie transakcie vôbec nefunguje.         |

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.