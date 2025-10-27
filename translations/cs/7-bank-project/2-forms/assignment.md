<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2025-10-24T21:07:33+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "cs"
}
-->
# Vylepšete vzhled své bankovní aplikace pomocí moderního CSS

## Přehled projektu

Proměňte svou funkční bankovní aplikaci na vizuálně atraktivní, profesionálně vypadající webovou aplikaci pomocí moderních technik CSS. Vytvoříte jednotný designový systém, který zlepší uživatelskou zkušenost, přičemž zachováte principy přístupnosti a responzivního designu.

Tento úkol vás vyzývá k aplikaci současných vzorů webového designu, implementaci konzistentní vizuální identity a vytvoření rozhraní, které bude pro uživatele atraktivní a intuitivní.

## Pokyny

### Krok 1: Nastavení stylového souboru

**Vytvořte základ pro svůj CSS:**

1. **Vytvořte** nový soubor s názvem `styles.css` v kořenovém adresáři projektu.
2. **Propojte** stylový soubor ve svém souboru `index.html`:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Začněte** s resetem CSS a moderními výchozími hodnotami:
   ```css
   /* Modern CSS reset and base styles */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     line-height: 1.6;
     color: #333;
   }
   ```

### Krok 2: Požadavky na designový systém

**Implementujte tyto základní designové prvky:**

#### Barevná paleta
- **Primární barva**: Zvolte profesionální barvu pro tlačítka a zvýraznění.
- **Sekundární barva**: Doplňková barva pro akcenty a sekundární akce.
- **Neutrální barvy**: Odstíny šedé pro text, okraje a pozadí.
- **Barvy úspěchu/chyby**: Zelená pro úspěšné stavy, červená pro chyby.

#### Typografie
- **Hierarchie nadpisů**: Jasné rozlišení mezi prvky H1, H2 a H3.
- **Text těla**: Čitelná velikost písma (minimálně 16px) a vhodná výška řádku.
- **Popisky formulářů**: Jasné, přístupné stylování textu.

#### Rozvržení a rozestupy
- **Konzistentní rozestupy**: Použijte škálu rozestupů (8px, 16px, 24px, 32px).
- **Grid systém**: Organizované rozvržení pro formuláře a obsahové sekce.
- **Responzivní design**: Přístup zaměřený na mobilní zařízení s použitím breakpointů.

### Krok 3: Stylování komponent

**Upravte styl těchto konkrétních komponent:**

#### Formuláře
- **Vstupní pole**: Profesionální okraje, stavy zaostření a stylování validace.
- **Tlačítka**: Efekty při najetí myší, stavy deaktivace a indikátory načítání.
- **Popisky**: Jasné umístění a indikátory povinných polí.
- **Chybové zprávy**: Viditelné stylování chyb a užitečné zprávy.

#### Navigace
- **Záhlaví**: Čistá, značková navigační oblast.
- **Odkazy**: Jasné stavy při najetí myší a aktivní indikátory.
- **Logo/Název**: Výrazný prvek značky.

#### Obsahové oblasti
- **Sekce**: Jasné vizuální oddělení mezi různými oblastmi.
- **Karty**: Pokud používáte rozvržení založené na kartách, zahrňte stíny a okraje.
- **Pozadí**: Vhodné použití bílého prostoru a jemných pozadí.

### Krok 4: Rozšířené funkce (volitelné)

**Zvažte implementaci těchto pokročilých funkcí:**
- **Tmavý režim**: Přepínání mezi světlým a tmavým tématem.
- **Animace**: Jemné přechody a mikrointerakce.
- **Stavy načítání**: Vizuální zpětná vazba během odesílání formulářů.
- **Responzivní obrázky**: Optimalizované obrázky pro různé velikosti obrazovek.

## Inspirace pro design

**Charakteristiky moderní bankovní aplikace:**
- **Čistý, minimalistický design** s dostatkem bílého prostoru.
- **Profesionální barevné schéma** (modré, zelené nebo sofistikované neutrální barvy).
- **Jasná vizuální hierarchie** s výraznými tlačítky pro výzvu k akci.
- **Přístupné kontrastní poměry** splňující pokyny WCAG.
- **Responzivní rozvržení** fungující na všech zařízeních.

## Technické požadavky

### Organizace CSS
```css
/* 1. CSS Custom Properties (Variables) */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* Add more variables */
}

/* 2. Base Styles */
/* Reset, typography, general elements */

/* 3. Layout */
/* Grid, flexbox, positioning */

/* 4. Components */
/* Forms, buttons, cards */

/* 5. Utilities */
/* Helper classes, responsive utilities */

/* 6. Media Queries */
/* Responsive breakpoints */
```

### Požadavky na přístupnost
- **Kontrast barev**: Zajistěte poměr alespoň 4,5:1 pro běžný text.
- **Indikátory zaostření**: Viditelné stavy zaostření pro navigaci pomocí klávesnice.
- **Popisky formulářů**: Správně propojené s vstupními poli.
- **Responzivní design**: Použitelné na obrazovkách od 320px do 1920px šířky.

## Hodnotící kritéria

| Kritéria | Výborné (A) | Dobré (B) | Rozvíjející se (C) | Potřebuje zlepšení (F) |
|----------|-------------|-----------|--------------------|------------------------|
| **Designový systém** | Implementuje komplexní designový systém s konzistentními barvami, typografií a rozestupy | Používá konzistentní stylizaci s jasnými designovými vzory a dobrou vizuální hierarchií | Základní stylizace s některými problémy konzistence nebo chybějícími prvky designu | Minimální stylizace s nekonzistentními nebo konfliktními designovými volbami |
| **Uživatelská zkušenost** | Vytváří intuitivní, profesionální rozhraní s vynikající použitelností a vizuální přitažlivostí | Poskytuje dobrou uživatelskou zkušenost s jasnou navigací a čitelným obsahem | Základní použitelnost s potřebou některých vylepšení UX | Špatná použitelnost, obtížná navigace nebo čtení |
| **Technická implementace** | Používá moderní techniky CSS, organizovanou strukturu kódu a dodržuje nejlepší praktiky | Efektivně implementuje CSS s dobrou organizací a vhodnými technikami | CSS funguje správně, ale může postrádat organizaci nebo moderní přístupy | Špatná implementace CSS s technickými problémy nebo problémy kompatibility prohlížeče |
| **Responzivní design** | Plně responzivní design, který funguje skvěle na všech velikostech zařízení | Dobré responzivní chování s drobnými problémy na některých obrazovkách | Základní responzivní implementace s některými problémy rozvržení | Není responzivní nebo významné problémy na mobilních zařízeních |
| **Přístupnost** | Splňuje pokyny WCAG s vynikající navigací pomocí klávesnice a podporou čteček obrazovky | Dobré praktiky přístupnosti s vhodným kontrastem a indikátory zaostření | Základní úvahy o přístupnosti s některými chybějícími prvky | Špatná přístupnost, obtížné pro uživatele s postižením |

## Pokyny k odevzdání

**Do svého odevzdání zahrňte:**
- **styles.css**: Kompletní stylový soubor.
- **Aktualizovaný HTML**: Jakékoliv úpravy HTML, které jste provedli.
- **Snímky obrazovky**: Obrázky zobrazující váš design na desktopu a mobilu.
- **README**: Stručný popis vašich designových voleb a barevné palety.

**Bonusové body za:**
- **CSS vlastní vlastnosti** pro udržitelné tématizování.
- **Pokročilé funkce CSS** jako Grid, Flexbox nebo CSS animace.
- **Úvahy o výkonu** jako optimalizované CSS a minimální velikost souboru.
- **Testování napříč prohlížeči** zajišťující kompatibilitu mezi různými prohlížeči.

> 💡 **Tip**: Začněte nejprve s designem pro mobilní zařízení a poté jej vylepšete pro větší obrazovky. Tento přístup zaměřený na mobilní zařízení zajistí, že vaše aplikace bude dobře fungovat na všech zařízeních a bude odpovídat moderním praktikám webového vývoje.

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlad [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho rodném jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.