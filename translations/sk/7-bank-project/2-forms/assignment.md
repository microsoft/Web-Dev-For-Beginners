# Štýlovanie vašej bankovej aplikácie pomocou moderného CSS

## Prehľad projektu

Premeňte svoju funkčnú bankovú aplikáciu na vizuálne atraktívnu, profesionálne vyzerajúcu webovú aplikáciu pomocou moderných techník CSS. Vytvoríte ucelený dizajnový systém, ktorý zlepší používateľskú skúsenosť a zároveň zachová princípy prístupnosti a responzívneho dizajnu.

Táto úloha vás vyzýva, aby ste aplikovali súčasné vzory webového dizajnu, implementovali konzistentnú vizuálnu identitu a vytvorili rozhranie, ktoré bude pre používateľov atraktívne a intuitívne na navigáciu.

## Pokyny

### Krok 1: Nastavenie štýlového súboru

**Vytvorte základ pre váš CSS:**

1. **Vytvorte** nový súbor s názvom `styles.css` v koreňovom adresári projektu.
2. **Prepojte** štýlový súbor vo vašom súbore `index.html`:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Začnite** s resetovaním CSS a modernými predvolenými nastaveniami:
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


### Krok 2: Požiadavky na dizajnový systém

**Implementujte tieto základné dizajnové prvky:**

#### Farebná paleta
- **Primárna farba**: Vyberte profesionálnu farbu pre tlačidlá a zvýraznenia.
- **Sekundárna farba**: Doplnková farba pre akcenty a sekundárne akcie.
- **Neutrálne farby**: Odtiene šedej pre text, okraje a pozadia.
- **Farby úspechu/chyby**: Zelená pre stavy úspechu, červená pre chyby.

#### Typografia
- **Hierarchia nadpisov**: Jasné rozlíšenie medzi prvkami H1, H2 a H3.
- **Text tela**: Čitateľná veľkosť písma (minimálne 16px) a vhodná výška riadku.
- **Popisky formulárov**: Jasné, prístupné štýlovanie textu.

#### Rozloženie a rozstupy
- **Konzistentné rozstupy**: Používajte škálu rozstupov (8px, 16px, 24px, 32px).
- **Grid systém**: Organizované rozloženie pre formuláre a obsahové sekcie.
- **Responzívny dizajn**: Prístup "mobile-first" s bodmi zlomu.

### Krok 3: Štýlovanie komponentov

**Štýlovanie týchto konkrétnych komponentov:**

#### Formuláre
- **Vstupné polia**: Profesionálne okraje, stavy zamerania a štýlovanie validácie.
- **Tlačidlá**: Efekty pri prechode myšou, stavy deaktivácie a indikátory načítania.
- **Popisky**: Jasné umiestnenie a indikátory povinných polí.
- **Chybové správy**: Viditeľné štýlovanie chýb a užitočné správy.

#### Navigácia
- **Hlavička**: Čistá, značková navigačná oblasť.
- **Odkazy**: Jasné efekty pri prechode myšou a indikátory aktívnych stavov.
- **Logo/Názov**: Výrazný prvok značky.

#### Obsahové oblasti
- **Sekcie**: Jasné vizuálne oddelenie medzi rôznymi oblasťami.
- **Karty**: Ak používate rozloženie založené na kartách, zahrňte tiene a okraje.
- **Pozadia**: Vhodné využitie bieleho priestoru a jemných pozadí.

### Krok 4: Rozšírené funkcie (voliteľné)

**Zvážte implementáciu týchto pokročilých funkcií:**
- **Tmavý režim**: Prepínanie medzi svetlými a tmavými témami.
- **Animácie**: Jemné prechody a mikrointerakcie.
- **Stavy načítania**: Vizuálna spätná väzba počas odosielania formulárov.
- **Responzívne obrázky**: Optimalizované obrázky pre rôzne veľkosti obrazovky.

## Inšpirácia pre dizajn

**Charakteristiky moderných bankových aplikácií:**
- **Čistý, minimalistický dizajn** s dostatkom bieleho priestoru.
- **Profesionálne farebné schémy** (modré, zelené alebo sofistikované neutrálne farby).
- **Jasná vizuálna hierarchia** s výraznými tlačidlami na výzvu k akcii.
- **Prístupné kontrastné pomery** spĺňajúce smernice WCAG.
- **Responzívne rozloženia** fungujúce na všetkých zariadeniach.

## Technické požiadavky

### Organizácia CSS
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

### Požiadavky na prístupnosť
- **Kontrast farieb**: Zabezpečte pomer minimálne 4,5:1 pre bežný text.
- **Indikátory zamerania**: Viditeľné stavy zamerania pre navigáciu pomocou klávesnice.
- **Popisky formulárov**: Správne priradené k vstupom.
- **Responzívny dizajn**: Použiteľné na obrazovkách od 320px do 1920px šírky.

## Hodnotiace kritériá

| Kritérium | Vynikajúce (A) | Dobré (B) | Rozvíjajúce sa (C) | Potrebuje zlepšenie (F) |
|-----------|----------------|-----------|--------------------|-------------------------|
| **Dizajnový systém** | Implementuje komplexný dizajnový systém s konzistentnými farbami, typografiou a rozstupmi | Používa konzistentné štýlovanie s jasnými dizajnovými vzormi a dobrou vizuálnou hierarchiou | Základné štýlovanie s niektorými problémami konzistencie alebo chýbajúcimi prvkami dizajnu | Minimálne štýlovanie s nekonzistentnými alebo protichodnými dizajnovými voľbami |
| **Používateľská skúsenosť** | Vytvára intuitívne, profesionálne rozhranie s vynikajúcou použiteľnosťou a vizuálnou príťažlivosťou | Poskytuje dobrú používateľskú skúsenosť s jasnou navigáciou a čitateľným obsahom | Základná použiteľnosť s potrebou niektorých vylepšení UX | Slabá použiteľnosť, ťažko navigovateľné alebo čitateľné |
| **Technická implementácia** | Používa moderné techniky CSS, organizovanú štruktúru kódu a dodržiava najlepšie postupy | Efektívne implementuje CSS s dobrou organizáciou a vhodnými technikami | CSS funguje správne, ale môže chýbať organizácia alebo moderné prístupy | Slabá implementácia CSS s technickými problémami alebo problémami kompatibility prehliadača |
| **Responzívny dizajn** | Plne responzívny dizajn, ktorý funguje krásne na všetkých veľkostiach zariadení | Dobré responzívne správanie s menšími problémami na niektorých obrazovkách | Základná responzívna implementácia s niektorými problémami rozloženia | Nie je responzívny alebo má významné problémy na mobilných zariadeniach |
| **Prístupnosť** | Spĺňa smernice WCAG s vynikajúcou navigáciou pomocou klávesnice a podporou čítačiek obrazovky | Dobré prístupové praktiky s vhodným kontrastom a indikátormi zamerania | Základné úvahy o prístupnosti s niektorými chýbajúcimi prvkami | Slabá prístupnosť, ťažko použiteľné pre osoby so zdravotným postihnutím |

## Pokyny na odovzdanie

**Do odovzdania zahrňte:**
- **styles.css**: Váš kompletný štýlový súbor.
- **Aktualizovaný HTML**: Akékoľvek úpravy HTML, ktoré ste vykonali.
- **Snímky obrazovky**: Obrázky zobrazujúce váš dizajn na desktopoch a mobiloch.
- **README**: Stručný popis vašich dizajnových rozhodnutí a farebnej palety.

**Bonusové body za:**
- **Vlastné vlastnosti CSS** pre udržiavateľnú tému.
- **Pokročilé funkcie CSS** ako Grid, Flexbox alebo animácie CSS.
- **Úvahy o výkone** ako optimalizovaný CSS a minimálna veľkosť súboru.
- **Testovanie kompatibility prehliadačov** na zabezpečenie funkčnosti v rôznych prehliadačoch.

> 💡 **Tip od profesionála**: Začnite najskôr s dizajnom pre mobilné zariadenia a potom ho rozšírte na väčšie obrazovky. Tento prístup "mobile-first" zabezpečí, že vaša aplikácia bude dobre fungovať na všetkých zariadeniach a bude nasledovať moderné postupy vývoja webu.

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, uvedomte si, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.