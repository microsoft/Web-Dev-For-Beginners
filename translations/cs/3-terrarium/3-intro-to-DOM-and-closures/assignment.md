<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "947ca5ce7c94aee9c7de7034e762bc17",
  "translation_date": "2025-10-24T20:59:14+00:00",
  "source_file": "3-terrarium/3-intro-to-DOM-and-closures/assignment.md",
  "language_code": "cs"
}
-->
# Úkol: Zkoumání DOM elementů

## Přehled

Nyní, když jste si sami vyzkoušeli sílu manipulace s DOM, je čas prozkoumat širší svět rozhraní DOM. Tento úkol vám pomůže lépe pochopit, jak různé webové technologie interagují s DOM, a to nejen při přesouvání prvků.

## Cíle učení

Splněním tohoto úkolu:
- **Prozkoumáte** a důkladně pochopíte konkrétní rozhraní DOM
- **Analyzujete** reálné implementace manipulace s DOM
- **Propojíte** teoretické koncepty s praktickými aplikacemi
- **Rozvinete** dovednosti v technické dokumentaci a analýze

## Pokyny

### Krok 1: Vyberte si rozhraní DOM

Navštivte komplexní [seznam rozhraní DOM na MDN](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) a vyberte si rozhraní, které vás zajímá. Zvažte výběr z těchto kategorií pro rozmanitost:

**Možnosti pro začátečníky:**
- `Element.classList` - Dynamické spravování CSS tříd
- `Document.querySelector()` - Pokročilý výběr elementů
- `Element.addEventListener()` - Zpracování událostí nad rámec ukazatelů
- `Window.localStorage` - Ukládání dat na straně klienta

**Výzvy pro pokročilé:**
- `Intersection Observer API` - Detekce viditelnosti prvků
- `MutationObserver` - Sledování změn v DOM
- `Drag and Drop API` - Alternativa k našemu přístupu založenému na ukazateli
- `Geolocation API` - Přístup k poloze uživatele

**Pokročilé zkoumání:**
- `Web Components` - Vlastní prvky a shadow DOM
- `Canvas API` - Programová grafika
- `Web Workers` - Zpracování na pozadí
- `Service Workers` - Funkce offline

### Krok 2: Prozkoumejte a dokumentujte

Vytvořte komplexní analýzu (300–500 slov), která zahrnuje:

#### Technický přehled
- **Definujte**, co vaše vybrané rozhraní dělá, jasným a srozumitelným jazykem pro začátečníky
- **Vysvětlete** klíčové metody, vlastnosti nebo události, které poskytuje
- **Popište**, jaké typy problémů je navrženo řešit

#### Reálná implementace
- **Najděte** webovou stránku, která používá vaše vybrané rozhraní (prozkoumejte kód nebo vyhledejte příklady)
- **Zdokumentujte** konkrétní implementaci, pokud možno s ukázkami kódu
- **Analyzujte**, proč si vývojáři zvolili tento přístup
- **Vysvětlete**, jak zlepšuje uživatelskou zkušenost

#### Praktická aplikace
- **Porovnejte** vaše rozhraní s technikami, které jsme použili v projektu terária
- **Navrhněte**, jak by vaše rozhraní mohlo vylepšit nebo rozšířit funkčnost terária
- **Identifikujte** další projekty, kde by toto rozhraní bylo užitečné

### Krok 3: Ukázka kódu

Zahrňte jednoduchý, funkční příklad kódu, který demonstruje vaše rozhraní v praxi. Tento příklad by měl být:
- **Funkční** - Kód by měl skutečně fungovat při testování
- **Okomentovaný** - Vysvětlete, co každá část dělá
- **Relevantní** - Spojený s realistickým případem použití
- **Přístupný pro začátečníky** - Srozumitelný pro někoho, kdo se učí webový vývoj

## Formát odevzdání

Strukturovat odevzdaný úkol s jasnými nadpisy:

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

## Hodnotící kritéria

| Kritéria | Výborné (A) | Dobré (B) | Průměrné (C) | Nedostatečné (D) |
|----------|-------------|-----------|--------------|------------------|
| **Technické porozumění** | Prokazuje hluboké porozumění s přesnými vysvětleními a správnou terminologií | Ukazuje solidní porozumění s většinou přesnými vysvětleními | Základní porozumění s některými nesprávnými představami | Omezené porozumění s významnými chybami |
| **Analýza reálného světa** | Identifikuje a důkladně analyzuje skutečnou implementaci s konkrétními příklady | Najde reálný příklad s dostatečnou analýzou | Lokalizuje příklad, ale analýza postrádá hloubku | Nejasné nebo nepřesné propojení s reálným světem |
| **Ukázka kódu** | Funkční, dobře okomentovaný kód, který jasně demonstruje rozhraní | Funkční kód s dostatečnými komentáři | Kód funguje, ale potřebuje lepší dokumentaci | Kód obsahuje chyby nebo špatné vysvětlení |
| **Kvalita psaní** | Jasné, poutavé psaní se správnou strukturou a technickou komunikací | Dobře organizované s kvalitním technickým psaním | Přiměřená organizace a srozumitelnost | Špatná organizace nebo nejasná komunikace |
| **Kritické myšlení** | Dělá bystré souvislosti mezi koncepty a navrhuje inovativní aplikace | Ukazuje dobré analytické myšlení a relevantní souvislosti | Nějaká analýza je přítomna, ale mohla by být hlubší | Omezené důkazy o kritickém myšlení |

## Tipy pro úspěch

**Strategie výzkumu:**
- **Začněte** s dokumentací na MDN pro ověřené informace
- **Hledejte** příklady kódu na GitHubu nebo CodePen
- **Prozkoumejte** populární webové stránky pomocí nástrojů pro vývojáře v prohlížeči
- **Sledujte** výuková videa pro vizuální vysvětlení

**Pokyny k psaní:**
- **Používejte** vlastní slova místo kopírování dokumentace
- **Zahrňte** konkrétní příklady a ukázky kódu
- **Vysvětlujte** technické koncepty, jako byste je učili kamaráda
- **Propojujte** vaše rozhraní s širšími koncepty webového vývoje

**Nápady na ukázky kódu:**
- **Vytvořte** jednoduchou ukázku, která předvede hlavní funkce rozhraní
- **Navazujte** na koncepty z našeho projektu terária, kde je to relevantní
- **Zaměřte se** na funkčnost spíše než na vizuální design
- **Otestujte** svůj kód, aby správně fungoval

## Termín odevzdání

[Vložte termín zde]

## Otázky?

Pokud potřebujete objasnit jakýkoli aspekt tohoto úkolu, neváhejte se zeptat! Toto zkoumání prohloubí vaše porozumění tomu, jak DOM umožňuje interaktivní webové zážitky, které používáme každý den.

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.