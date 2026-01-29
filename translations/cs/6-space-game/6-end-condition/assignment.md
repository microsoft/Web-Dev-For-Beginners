# Vytvořte ukázkovou hru

## Přehled úkolu

Teď, když jste zvládli podmínky ukončení hry a funkci restartu ve své vesmírné hře, je čas aplikovat tyto koncepty na zcela nový herní zážitek. Navrhnete a vytvoříte vlastní hru, která demonstruje různé vzory podmínek ukončení a mechaniky restartu.

Tento úkol vás vyzývá k tomu, abyste kreativně přemýšleli o herním designu a zároveň si procvičili technické dovednosti, které jste se naučili. Prozkoumáte různé scénáře vítězství a porážky, implementujete hráčský postup a vytvoříte poutavé zážitky z restartu.

## Požadavky na projekt

### Základní prvky hry

Vaše hra musí obsahovat následující základní prvky:

**Různé podmínky ukončení**: Implementujte alespoň dva různé způsoby, jak může hra skončit:
- **Vítězství na základě bodů**: Hráč dosáhne cílového skóre nebo nasbírá specifické předměty
- **Porážka na základě životů**: Hráč ztratí všechny dostupné životy nebo body zdraví
- **Splnění cíle**: Porážka všech nepřátel, nasbírání specifických předmětů nebo dosažení cílů
- **Časové omezení**: Hra končí po stanovené době nebo když odpočet dosáhne nuly

**Funkce restartu**: 
- **Vymazání stavu hry**: Odstranění všech předchozích herních objektů a reset proměnných
- **Znovu inicializace systémů**: Začátek od začátku s novými statistikami hráče, nepřáteli a cíli
- **Uživatelsky přívětivé ovládání**: Poskytnutí jasných instrukcí pro restart hry

**Zpětná vazba hráči**:
- **Zprávy o vítězství**: Oslava úspěchů hráče pozitivní zpětnou vazbou
- **Zprávy o porážce**: Poskytnutí povzbudivých zpráv, které motivují k opětovnému hraní
- **Ukazatele postupu**: Zobrazení aktuálního skóre, životů nebo stavu cíle

### Nápady na hry a inspirace

Vyberte si jeden z těchto konceptů her nebo vytvořte vlastní:

#### 1. Konzolová dobrodružná hra
Vytvořte textovou adventuru s bojovými mechanikami:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Klíčové prvky k implementaci:**
- **Tahové souboje** s různými možnostmi útoku
- **Body zdraví** pro hráče i nepřátele
- **Inventářový systém** pro sbírání mincí nebo předmětů
- **Různé typy nepřátel** s různou obtížností
- **Podmínka vítězství**, když jsou všichni nepřátelé poraženi

#### 2. Sběratelská hra
- **Cíl**: Sbírat specifické předměty a vyhýbat se překážkám
- **Podmínky ukončení**: Dosáhnout cílového počtu nasbíraných předmětů nebo ztratit všechny životy
- **Postup**: Předměty se stávají těžšími na dosažení, jak hra pokračuje

#### 3. Logická hra
- **Cíl**: Řešit stále obtížnější hádanky
- **Podmínky ukončení**: Dokončit všechny úrovně nebo vyčerpat tahy/čas
- **Restart**: Reset na první úroveň s vymazaným postupem

#### 4. Obranná hra
- **Cíl**: Chránit svou základnu před vlnami nepřátel
- **Podmínky ukončení**: Přežít všechny vlny (vítězství) nebo zničení základny (porážka)
- **Postup**: Vlny nepřátel se stávají obtížnějšími a početnějšími

## Pokyny k implementaci

### Začínáme

1. **Naplánujte si design hry**:
   - Nakreslete základní herní smyčku
   - Jasně definujte své podmínky ukončení
   - Identifikujte, jaká data je třeba resetovat při restartu

2. **Nastavte strukturu projektu**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Vytvořte hlavní herní smyčku**:
   - Inicializujte stav hry
   - Zpracovávejte vstupy uživatele
   - Aktualizujte herní logiku
   - Kontrolujte podmínky ukončení
   - Zobrazujte aktuální stav

### Technické požadavky

**Používejte moderní JavaScript**: 
- Používejte `const` a `let` pro deklaraci proměnných
- Používejte šipkové funkce, kde je to vhodné
- Implementujte funkce ES6+ jako šablonové literály a destrukturalizaci

**Architektura založená na událostech**:
- Vytvářejte obslužné funkce pro interakce uživatele
- Implementujte změny stavu hry prostřednictvím událostí
- Používejte posluchače událostí pro funkci restartu

**Čisté programovací praktiky**:
- Pište funkce s jedním účelem
- Používejte popisné názvy proměnných a funkcí
- Přidávejte komentáře vysvětlující herní logiku a pravidla
- Organizujte kód do logických sekcí

## Požadavky na odevzdání

### Výstupy

1. **Kompletní soubory hry**: Všechny soubory HTML, CSS a JavaScript potřebné pro spuštění vaší hry
2. **README.md**: Dokumentace vysvětlující:
   - Jak hrát vaši hru
   - Jaké podmínky ukončení jste implementovali
   - Instrukce pro restart
   - Jakékoliv speciální funkce nebo mechaniky
3. **Komentáře v kódu**: Jasná vysvětlení vaší herní logiky a algoritmů

### Kontrolní seznam testování

Před odevzdáním ověřte, že vaše hra:

- [ ] **Běží bez chyb** v konzoli prohlížeče
- [ ] **Implementuje více podmínek ukončení** podle specifikací
- [ ] **Správně se restartuje** s čistým resetem stavu
- [ ] **Poskytuje jasnou zpětnou vazbu** hráčům o stavu hry
- [ ] **Používá moderní JavaScript** syntaxi a nejlepší praktiky
- [ ] **Obsahuje komplexní dokumentaci** v README.md

## Hodnotící kritéria

| Kritéria | Vynikající (4) | Dobré (3) | Rozvíjející se (2) | Začínající (1) |
|----------|---------------|-----------|--------------------|----------------|
| **Funkčnost hry** | Kompletní hra s více podmínkami ukončení, plynulým restartem a propracovaným herním zážitkem | Kompletní hra se základními podmínkami ukončení a funkčním restartem | Částečná hra s některými implementovanými podmínkami ukončení, restart může mít drobné problémy | Nedokončená hra s omezenou funkčností a významnými chybami |
| **Kvalita kódu** | Čistý, dobře organizovaný kód využívající moderní praktiky JavaScriptu, komplexní komentáře a výborná struktura | Dobrá organizace kódu s moderní syntaxí, dostatečné komentáře a jasná struktura | Základní organizace kódu s některými moderními praktikami, minimální komentáře | Špatná organizace kódu, zastaralá syntaxe, nedostatek komentářů a struktury |
| **Uživatelský zážitek** | Intuitivní hratelnost s jasnými instrukcemi, výbornou zpětnou vazbou a poutavým zážitkem z ukončení/restartu | Dobrá hratelnost s dostatečnými instrukcemi a zpětnou vazbou, funkční ukončení/restart | Základní hratelnost s minimálními instrukcemi, omezená zpětná vazba o stavu hry | Matoucí hratelnost s nejasnými instrukcemi a špatnou zpětnou vazbou |
| **Technická implementace** | Prokazuje mistrovství v konceptech vývoje her, zpracování událostí a správě stavu | Ukazuje solidní pochopení herních konceptů s dobrou implementací | Základní pochopení s přijatelnou implementací | Omezené pochopení s špatnou implementací |
| **Dokumentace** | Komplexní README s jasnými instrukcemi, dobře dokumentovaný kód a důkazy o důkladném testování | Dobrá dokumentace s jasnými instrukcemi a dostatečnými komentáři v kódu | Základní dokumentace s minimálními instrukcemi | Špatná nebo chybějící dokumentace |

### Hodnotící stupnice
- **Vynikající (16-20 bodů)**: Překračuje očekávání s kreativními funkcemi a propracovanou implementací
- **Dobré (12-15 bodů)**: Splňuje všechny požadavky s kvalitním provedením
- **Rozvíjející se (8-11 bodů)**: Splňuje většinu požadavků s drobnými problémy
- **Začínající (4-7 bodů)**: Splňuje některé požadavky, ale potřebuje výrazné zlepšení

## Další zdroje pro učení

- [MDN Průvodce vývojem her](https://developer.mozilla.org/en-US/docs/Games)
- [JavaScript Tutoriály pro vývoj her](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Dokumentace Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Principy herního designu](https://www.gamasutra.com/blogs/)

> 💡 **Tip**: Začněte jednoduše a postupně přidávejte funkce. Dobře propracovaná jednoduchá hra je lepší než složitá hra plná chyb!

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlad [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.