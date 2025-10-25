<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "947ca5ce7c94aee9c7de7034e762bc17",
  "translation_date": "2025-10-24T21:36:06+00:00",
  "source_file": "3-terrarium/3-intro-to-DOM-and-closures/assignment.md",
  "language_code": "sk"
}
-->
# Zadanie na preskúmanie prvkov DOM

## Prehľad

Teraz, keď ste si sami vyskúšali silu manipulácie s DOM, je čas preskúmať širší svet rozhraní DOM. Toto zadanie prehĺbi vaše pochopenie toho, ako rôzne webové technológie interagujú s DOM, nielen pri presúvaní prvkov.

## Ciele učenia

Po splnení tohto zadania budete:
- **Skúmať** a dôkladne rozumieť konkrétnemu rozhraniu DOM
- **Analyzovať** reálne implementácie manipulácie s DOM
- **Spojiť** teoretické koncepty s praktickými aplikáciami
- **Rozvíjať** zručnosti v technickej dokumentácii a analýze

## Pokyny

### Krok 1: Vyberte si rozhranie DOM

Navštívte komplexný [zoznam rozhraní DOM na MDN](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) a vyberte si rozhranie, ktoré vás zaujíma. Zvážte výber z týchto kategórií pre rozmanitosť:

**Možnosti pre začiatočníkov:**
- `Element.classList` - Dynamické spravovanie CSS tried
- `Document.querySelector()` - Pokročilý výber prvkov
- `Element.addEventListener()` - Spracovanie udalostí nad rámec ukazovateľov
- `Window.localStorage` - Ukladanie dát na strane klienta

**Výzvy pre pokročilých:**
- `Intersection Observer API` - Detekcia viditeľnosti prvkov
- `MutationObserver` - Sledovanie zmien v DOM
- `Drag and Drop API` - Alternatíva k nášmu prístupu založenému na ukazovateľoch
- `Geolocation API` - Prístup k polohe používateľa

**Pokročilé skúmanie:**
- `Web Components` - Vlastné prvky a shadow DOM
- `Canvas API` - Programovateľná grafika
- `Web Workers` - Spracovanie na pozadí
- `Service Workers` - Funkcionalita offline režimu

### Krok 2: Skúmajte a dokumentujte

Vytvorte komplexnú analýzu (300-500 slov), ktorá zahŕňa:

#### Technický prehľad
- **Definujte**, čo vaše vybrané rozhranie robí, jasným a zrozumiteľným jazykom pre začiatočníkov
- **Vysvetlite** kľúčové metódy, vlastnosti alebo udalosti, ktoré poskytuje
- **Popíšte** typy problémov, ktoré je navrhnuté riešiť

#### Reálna implementácia
- **Nájdite** webovú stránku, ktorá používa vaše vybrané rozhranie (skontrolujte kód alebo vyhľadajte príklady)
- **Zdokumentujte** konkrétnu implementáciu, ak je to možné, s ukážkami kódu
- **Analyzujte**, prečo si vývojári zvolili tento prístup
- **Vysvetlite**, ako to zlepšuje používateľskú skúsenosť

#### Praktická aplikácia
- **Porovnajte** vaše rozhranie s technikami, ktoré sme použili v projekte terária
- **Navrhnite**, ako by vaše rozhranie mohlo zlepšiť alebo rozšíriť funkcionalitu terária
- **Identifikujte** ďalšie projekty, kde by toto rozhranie bolo užitočné

### Krok 3: Ukážka kódu

Priložte jednoduchý, funkčný príklad kódu, ktorý demonštruje vaše rozhranie v praxi. Tento kód by mal byť:
- **Funkčný** - Kód by mal skutočne fungovať pri testovaní
- **Komentovaný** - Vysvetlite, čo robí každá časť
- **Relevantný** - Spojený s realistickým použitím
- **Prístupný pre začiatočníkov** - Zrozumiteľný pre niekoho, kto sa učí webový vývoj

## Formát odovzdania

Štruktúrujte svoju prácu s jasnými nadpismi:

```markdown
# [Interface Name] DOM Investigation

## What It Does
[Technical overview]

## Real-World Example
[Website analysis and implementation details]

## Code Demonstration
[Your working example with comments]

## Reflection
[How this connects to our terrarium project and future applications]
```

## Hodnotiaca tabuľka

| Kritérium | Vynikajúce (A) | Dostačujúce (B) | Rozvíjajúce sa (C) | Potrebné zlepšenie (D) |
|-----------|----------------|-----------------|--------------------|------------------------|
| **Technické porozumenie** | Preukazuje hlboké porozumenie s presnými vysvetleniami a správnou terminológiou | Ukazuje solídne porozumenie s väčšinou presnými vysvetleniami | Základné porozumenie s niektorými nepresnosťami | Obmedzené porozumenie s významnými chybami |
| **Analýza reálneho sveta** | Identifikuje a dôkladne analyzuje skutočnú implementáciu s konkrétnymi príkladmi | Nájde reálny príklad s primeranou analýzou | Lokalizuje príklad, ale analýza je povrchná | Nejasné alebo nepresné spojenie s reálnym svetom |
| **Ukážka kódu** | Funkčný, dobre komentovaný kód, ktorý jasne demonštruje rozhranie | Funkčný kód s primeranými komentármi | Kód funguje, ale potrebuje lepšiu dokumentáciu | Kód má chyby alebo slabé vysvetlenie |
| **Kvalita písania** | Jasné, pútavé písanie so správnou štruktúrou a technickou komunikáciou | Dobre organizované s dobrou technickou komunikáciou | Primeraná organizácia a jasnosť | Slabá organizácia alebo nejasná komunikácia |
| **Kritické myslenie** | Robí prenikavé spojenia medzi konceptmi a navrhuje inovatívne aplikácie | Ukazuje dobré analytické myslenie a relevantné spojenia | Prítomná určitá analýza, ale mohla by byť hlbšia | Obmedzené dôkazy o kritickom myslení |

## Tipy na úspech

**Stratégie výskumu:**
- **Začnite** s dokumentáciou na MDN pre autoritatívne informácie
- **Hľadajte** ukážky kódu na GitHub alebo CodePen
- **Skontrolujte** populárne webové stránky pomocou nástrojov pre vývojárov v prehliadači
- **Sledujte** tutoriálne videá pre vizuálne vysvetlenia

**Pokyny k písaniu:**
- **Používajte** vlastné slová namiesto kopírovania dokumentácie
- **Zahrňte** konkrétne príklady a ukážky kódu
- **Vysvetlite** technické koncepty, akoby ste ich učili priateľa
- **Spojte** vaše rozhranie so širšími konceptmi webového vývoja

**Nápady na ukážku kódu:**
- **Vytvorte** jednoduchú ukážku, ktorá predstavuje hlavné funkcie rozhrania
- **Stavajte** na konceptoch z nášho projektu terária, kde je to relevantné
- **Zamerajte sa** na funkcionalitu namiesto vizuálneho dizajnu
- **Otestujte** váš kód, aby ste sa uistili, že funguje správne

## Termín odovzdania

[Sem vložte termín]

## Otázky?

Ak potrebujete objasniť akýkoľvek aspekt tohto zadania, neváhajte sa opýtať! Toto preskúmanie prehĺbi vaše pochopenie toho, ako DOM umožňuje interaktívne webové zážitky, ktoré používame každý deň.

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.