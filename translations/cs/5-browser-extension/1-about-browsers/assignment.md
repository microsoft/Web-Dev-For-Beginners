# Zadání: Přestylizujte svůj rozšíření prohlížeče

## Přehled

Nyní, když jste vytvořili HTML strukturu pro své rozšíření prohlížeče zaměřené na uhlíkovou stopu, je čas udělat ho vizuálně atraktivním a uživatelsky přívětivým. Skvělý design zlepšuje uživatelskou zkušenost a činí vaše rozšíření profesionálním a poutavým.

Vaše rozšíření má základní CSS stylování, ale toto zadání vás vyzývá k vytvoření jedinečné vizuální identity, která odráží váš osobní styl a zároveň zachovává vynikající použitelnost.

## Pokyny

### Část 1: Analyzujte aktuální design

Než provedete změny, prozkoumejte existující strukturu CSS:

1. **Najděte** CSS soubory ve svém projektu rozšíření
2. **Projděte si** aktuální přístup ke stylování a barevné schéma
3. **Identifikujte** oblasti, které je třeba zlepšit v rozvržení, typografii a vizuální hierarchii
4. **Zvažte**, jak design podporuje cíle uživatele (snadné vyplnění formuláře a jasné zobrazení dat)

### Část 2: Navrhněte vlastní stylování

Vytvořte soudržný vizuální design, který zahrnuje:

**Barevné schéma:**
- Vyberte primární barevnou paletu, která odráží environmentální témata
- Zajistěte dostatečný kontrast pro přístupnost (použijte nástroje jako WebAIM's contrast checker)
- Zvažte, jak budou barvy vypadat v různých tématech prohlížeče

**Typografie:**
- Vyberte čitelné fonty, které dobře fungují na malých rozměrech rozšíření
- Vytvořte jasnou hierarchii s vhodnými velikostmi a váhami písma
- Zajistěte, aby text zůstal čitelný jak ve světlých, tak tmavých tématech prohlížeče

**Rozvržení a rozestupy:**
- Zlepšete vizuální organizaci prvků formuláře a zobrazení dat
- Přidejte vhodné odsazení a okraje pro lepší čitelnost
- Zvažte principy responzivního designu pro různé velikosti obrazovek

### Část 3: Implementujte svůj design

Upravte CSS soubory, abyste implementovali svůj design:

```css
/* Example starting points for customization */

.form-data {
    /* Style the configuration form */
    background: /* your choice */;
    padding: /* your spacing */;
    border-radius: /* your preference */;
}

.result-container {
    /* Style the data display area */
    background: /* complementary color */;
    border: /* your border style */;
    margin: /* your spacing */;
}

/* Add your custom styles here */
```

**Klíčové oblasti pro stylování:**
- **Prvky formuláře**: Vstupní pole, popisky a tlačítko pro odeslání
- **Zobrazení výsledků**: Kontejner pro data, stylování textu a stavy načítání
- **Interaktivní prvky**: Efekty při najetí myší, stavy tlačítek a přechody
- **Celkové rozvržení**: Rozestupy kontejnerů, barvy pozadí a vizuální hierarchie

### Část 4: Testování a doladění

1. **Sestavte** své rozšíření pomocí `npm run build`
2. **Nahrajte** aktualizované rozšíření do svého prohlížeče
3. **Otestujte** všechny vizuální stavy (vyplnění formuláře, načítání, zobrazení výsledků, chyby)
4. **Ověřte** přístupnost pomocí nástrojů pro vývojáře v prohlížeči
5. **Doladěte** své styly na základě skutečného použití

## Kreativní výzvy

### Základní úroveň
- Aktualizujte barvy a fonty, abyste vytvořili soudržné téma
- Zlepšete rozestupy a zarovnání v celém rozhraní
- Přidejte jemné efekty při najetí myší na interaktivní prvky

### Střední úroveň
- Navrhněte vlastní ikony nebo grafiku pro své rozšíření
- Implementujte plynulé přechody mezi různými stavy
- Vytvořte jedinečnou animaci načítání pro API volání

### Pokročilá úroveň
- Navrhněte více možností témat (světlé/tmavé/vysoký kontrast)
- Implementujte responzivní design pro různé velikosti oken prohlížeče
- Přidejte mikrointerakce, které zlepší uživatelskou zkušenost

## Pokyny k odevzdání

Vaše dokončené zadání by mělo obsahovat:

- **Upravené CSS soubory** s vaším vlastním stylováním
- **Snímky obrazovky**, které ukazují vaše rozšíření v různých stavech (formulář, načítání, výsledky)
- **Krátký popis** (2-3 věty), který vysvětluje vaše designové volby a jak zlepšují uživatelskou zkušenost

## Hodnotící kritéria

| Kritéria | Vynikající (4) | Dobré (3) | Rozvíjející se (2) | Začínající (1) |
|----------|----------------|-----------|--------------------|----------------|
| **Vizuální design** | Kreativní, soudržný design, který zlepšuje použitelnost a odráží silné designové principy | Dobré designové volby s konzistentním stylováním a jasnou vizuální hierarchií | Základní zlepšení designu s některými problémy s konzistencí | Minimální změny stylování nebo nekonzistentní design |
| **Funkčnost** | Všechny styly perfektně fungují ve všech stavech a prostředích prohlížeče | Styly fungují dobře s drobnými problémy v okrajových případech | Většina stylů je funkční s některými problémy zobrazení | Významné problémy se stylováním, které ovlivňují použitelnost |
| **Kvalita kódu** | Čistý, dobře organizovaný CSS s smysluplnými názvy tříd a efektivními selektory | Dobrá struktura CSS s vhodným použitím selektorů a vlastností | Přijatelný CSS s některými problémy v organizaci | Špatná struktura CSS nebo příliš složité stylování |
| **Přístupnost** | Vynikající kontrast barev, čitelné fonty a zohlednění uživatelů s postižením | Dobré praktiky přístupnosti s drobnými oblastmi pro zlepšení | Základní zohlednění přístupnosti s některými problémy | Omezená pozornost věnovaná požadavkům na přístupnost |

## Tipy pro úspěch

> 💡 **Tip pro design**: Začněte s jemnými změnami a postupně přecházejte k výraznějším úpravám. Malá zlepšení v typografii a rozestupech často mají velký dopad na vnímanou kvalitu.

**Osvědčené postupy:**
- **Testujte** své rozšíření ve světlých i tmavých tématech prohlížeče
- **Používejte** relativní jednotky (em, rem) pro lepší škálovatelnost
- **Udržujte** konzistentní rozestupy pomocí vlastností CSS
- **Zvažte**, jak bude váš design vypadat pro uživatele s různými vizuálními potřebami
- **Validujte** svůj CSS, aby splňoval správnou syntaxi

> ⚠️ **Častá chyba**: Neobětujte použitelnost kvůli vizuální atraktivitě. Vaše rozšíření by mělo být jak krásné, tak funkční.

**Nezapomeňte:**
- **Udržujte** důležité informace snadno čitelné
- **Zajistěte**, aby tlačítka a interaktivní prvky byly snadno klikatelné
- **Udržujte** jasnou vizuální zpětnou vazbu pro akce uživatele
- **Testujte** svůj design s reálnými daty, nejen s textem zástupce

Hodně štěstí při tvorbě rozšíření prohlížeče, které bude jak funkční, tak vizuálně ohromující!

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.