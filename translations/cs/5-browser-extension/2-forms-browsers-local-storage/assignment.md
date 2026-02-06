# Přijměte API

## Přehled

API otevírají nekonečné možnosti pro kreativní vývoj webu! V tomto úkolu si vyberete externí API a vytvoříte rozšíření pro prohlížeč, které řeší skutečný problém nebo poskytuje uživatelům hodnotnou funkci.

## Pokyny

### Krok 1: Vyberte si API
Vyberte si API z tohoto kurátorského [seznamu bezplatných veřejných API](https://github.com/public-apis/public-apis). Zvažte tyto kategorie:

**Oblíbené možnosti pro začátečníky:**
- **Zábava**: [Dog CEO API](https://dog.ceo/dog-api/) pro náhodné obrázky psů
- **Počasí**: [OpenWeatherMap](https://openweathermap.org/api) pro aktuální údaje o počasí
- **Citáty**: [Quotable API](https://quotable.io/) pro inspirativní citáty
- **Zprávy**: [NewsAPI](https://newsapi.org/) pro aktuální titulky
- **Zajímavosti**: [Numbers API](http://numbersapi.com/) pro zajímavé informace o číslech

### Krok 2: Naplánujte si rozšíření
Než začnete kódovat, odpovězte na tyto plánovací otázky:
- Jaký problém vaše rozšíření řeší?
- Kdo je váš cílový uživatel?
- Jaká data budete ukládat do místního úložiště?
- Jak budete řešit selhání API nebo limity požadavků?

### Krok 3: Vytvořte své rozšíření
Vaše rozšíření by mělo obsahovat:

**Povinné funkce:**
- Formulářové vstupy pro všechny požadované parametry API
- Integraci API s řádným zpracováním chyb
- Místní úložiště pro uživatelské preference nebo klíče API
- Čisté, responzivní uživatelské rozhraní
- Stav načítání a zpětnou vazbu pro uživatele

**Požadavky na kód:**
- Používejte moderní funkce JavaScriptu (ES6+)
- Implementujte async/await pro volání API
- Zahrňte řádné zpracování chyb pomocí bloků try/catch
- Přidejte smysluplné komentáře vysvětlující váš kód
- Dodržujte konzistentní formátování kódu

### Krok 4: Testujte a dolaďte
- Testujte své rozšíření s různými vstupy
- Řešte okrajové případy (např. žádné připojení k internetu, neplatné odpovědi API)
- Ujistěte se, že vaše rozšíření funguje i po restartu prohlížeče
- Přidejte uživatelsky přívětivé chybové zprávy

## Bonusové výzvy

Posuňte své rozšíření na vyšší úroveň:
- Přidejte více koncových bodů API pro bohatší funkčnost
- Implementujte ukládání dat do mezipaměti pro snížení počtu volání API
- Vytvořte klávesové zkratky pro běžné akce
- Přidejte funkce exportu/importu dat
- Implementujte možnosti přizpůsobení pro uživatele

## Požadavky na odevzdání

1. **Funkční rozšíření pro prohlížeč**, které úspěšně integruje vybrané API
2. **Soubor README**, který vysvětluje:
   - Které API jste si vybrali a proč
   - Jak nainstalovat a používat vaše rozšíření
   - Jaké klíče API nebo nastavení jsou vyžadovány
   - Screenshoty vašeho rozšíření v akci
3. **Čistý, komentovaný kód** dodržující moderní praktiky JavaScriptu

## Hodnotící kritéria

| Kritéria | Vynikající (90-100%) | Dobré (80-89%) | Rozvíjející se (70-79%) | Začínající (60-69%) |
|----------|----------------------|----------------|-------------------------|---------------------|
| **Integrace API** | Bezchybná integrace API s komplexním zpracováním chyb a řešením okrajových případů | Úspěšná integrace API se základním zpracováním chyb | API funguje, ale má omezené zpracování chyb | Integrace API má významné problémy |
| **Kvalita kódu** | Čistý, dobře komentovaný moderní JavaScript dodržující nejlepší praktiky | Dobrá struktura kódu s dostatečnými komentáři | Kód funguje, ale potřebuje lepší organizaci | Špatná kvalita kódu s minimem komentářů |
| **Uživatelská zkušenost** | Vyleštěné rozhraní s vynikajícími stavy načítání a zpětnou vazbou pro uživatele | Dobré rozhraní se základní zpětnou vazbou | Základní rozhraní, které funguje dostatečně | Špatná uživatelská zkušenost s matoucím rozhraním |
| **Místní úložiště** | Sofistikované použití místního úložiště s validací a správou dat | Správná implementace místního úložiště pro klíčové funkce | Základní implementace místního úložiště | Minimální nebo nesprávné použití místního úložiště |
| **Dokumentace** | Komplexní README s pokyny k nastavení a screenshoty | Dobrá dokumentace pokrývající většinu požadavků | Základní dokumentace, která postrádá některé detaily | Špatná nebo chybějící dokumentace |

## Tipy na začátek

1. **Začněte jednoduše**: Vyberte si API, které nevyžaduje složité ověřování
2. **Čtěte dokumentaci**: Důkladně si prostudujte koncové body a odpovědi vybraného API
3. **Naplánujte si UI**: Nakreslete si rozhraní svého rozšíření před začátkem kódování
4. **Testujte často**: Budujte postupně a testujte každou funkci, jak ji přidáváte
5. **Řešte chyby**: Vždy předpokládejte, že volání API může selhat, a podle toho plánujte

## Zdroje

- [Dokumentace k rozšířením pro prohlížeče](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Průvodce Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Tutoriál k místnímu úložišti](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [Parsování a zpracování JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Užijte si tvorbu něčeho užitečného a kreativního! 🚀

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlad [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho rodném jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.