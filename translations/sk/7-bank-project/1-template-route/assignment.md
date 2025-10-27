<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "df0dcecddcd28ea8cbf6ede0ad57d673",
  "translation_date": "2025-10-24T21:42:07+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "sk"
}
-->
# Vylepšenie smerovania

## Pokyny

Teraz, keď ste vytvorili základný systém smerovania, je čas ho rozšíriť o profesionálne funkcie, ktoré zlepšujú používateľskú skúsenosť a poskytujú lepšie nástroje pre vývojárov. Reálne aplikácie potrebujú viac než len prepínanie šablón – vyžadujú dynamické názvy stránok, lifecycle hooks a rozšíriteľné architektúry.

V tejto úlohe rozšírite svoju implementáciu smerovania o dve základné funkcie, ktoré sa bežne nachádzajú v produkčných webových aplikáciách. Tieto vylepšenia dodajú vašej bankovej aplikácii profesionálny vzhľad a poskytnú základ pre budúce funkcie.

Deklarácia trás momentálne obsahuje iba ID šablóny, ktoré sa má použiť. Ale pri zobrazovaní novej stránky je niekedy potrebné trochu viac. Vylepšime našu implementáciu smerovania o dve ďalšie funkcie:

### Funkcia 1: Dynamické názvy stránok
**Cieľ:** Pridajte názvy ku každej šablóne a aktualizujte názov okna s týmto novým názvom, keď sa šablóna zmení.

**Prečo je to dôležité:**
- **Zlepšuje** používateľskú skúsenosť zobrazovaním popisných názvov na kartách prehliadača
- **Zvyšuje** prístupnosť pre čítačky obrazovky a asistívne technológie  
- **Poskytuje** lepší kontext pre záložky a históriu prehliadača
- **Dodržiava** profesionálne postupy webového vývoja

**Prístup k implementácii:**
- **Rozšírte** objekt trás o informácie o názve pre každú trasu
- **Upravte** funkciu `updateRoute()`, aby dynamicky aktualizovala `document.title`
- **Otestujte**, či sa názvy správne menia pri navigácii medzi obrazovkami

### Funkcia 2: Lifecycle hooks trás  
**Cieľ:** Pridajte možnosť spustiť nejaký kód po zmene šablóny. Chceme, aby sa v konzole vývojára zobrazilo `'Dashboard is shown'` vždy, keď sa zobrazí stránka dashboardu.

**Prečo je to dôležité:**
- **Umožňuje** vykonávanie vlastnej logiky pri načítaní konkrétnych trás
- **Poskytuje** hooks pre analytiku, logovanie alebo inicializačný kód
- **Vytvára** základ pre zložitejšie správanie trás
- **Demonštruje** observer pattern vo webovom vývoji

**Prístup k implementácii:**
- **Pridajte** voliteľnú vlastnosť callback funkcie do konfigurácií trás
- **Vykonajte** callback funkciu (ak je prítomná) po dokončení vykreslenia šablóny
- **Zabezpečte**, že funkcia funguje pre akúkoľvek trasu s definovaným callbackom
- **Otestujte**, či sa správa v konzole zobrazí pri návšteve dashboardu

## Hodnotiace kritériá

| Kritérium | Vynikajúce                                                                                                                          | Dostatočné                                                                                                                                                                                  | Potrebuje zlepšenie                                       |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
|           | Obe funkcie sú implementované a fungujú. Názov a pridanie kódu fungujú aj pre novú trasu pridanú do deklarácie `routes`.             | Obe funkcie fungujú, ale správanie je pevne zakódované a nie je konfigurovateľné prostredníctvom deklarácie `routes`. Pridanie tretej trasy s názvom a pridaním kódu nefunguje alebo funguje čiastočne. | Jedna z funkcií chýba alebo nefunguje správne.            |

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.