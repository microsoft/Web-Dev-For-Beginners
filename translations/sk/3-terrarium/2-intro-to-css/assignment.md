# Úloha na refaktoring CSS

## Cieľ

Transformujte svoj projekt terária tak, aby používal moderné techniky rozloženia CSS! Refaktorujte aktuálny prístup s absolútnym pozicionovaním a implementujte **Flexbox** alebo **CSS Grid** pre udržateľnejší a responzívny dizajn. Táto úloha vás vyzýva aplikovať moderné štandardy CSS a zároveň zachovať vizuálnu atraktivitu vášho terária.

Porozumenie tomu, kedy a ako používať rôzne metódy rozloženia, je kľúčovou zručnosťou pre moderný webový vývoj. Toto cvičenie spája tradičné techniky pozicionovania so súčasnými systémami rozloženia CSS.

## Pokyny k úlohe

### Fáza 1: Analýza a plánovanie
1. **Preskúmajte svoj aktuálny kód terária** - Identifikujte, ktoré prvky aktuálne používajú absolútne pozicionovanie
2. **Vyberte metódu rozloženia** - Rozhodnite sa, či Flexbox alebo CSS Grid lepšie vyhovuje vašim dizajnovým cieľom
3. **Navrhnite novú štruktúru rozloženia** - Naplánujte, ako budú kontajnery a prvky rastlín usporiadané

### Fáza 2: Implementácia
1. **Vytvorte novú verziu** svojho projektu terária v samostatnom priečinku
2. **Aktualizujte štruktúru HTML** podľa potreby na podporu zvolenej metódy rozloženia
3. **Refaktorujte CSS** tak, aby používalo Flexbox alebo CSS Grid namiesto absolútneho pozicionovania
4. **Zachovajte vizuálnu konzistenciu** - Uistite sa, že vaše rastliny a nádoba na terárium sa zobrazujú na rovnakých pozíciách
5. **Implementujte responzívne správanie** - Vaše rozloženie by sa malo elegantne prispôsobiť rôznym veľkostiam obrazovky

### Fáza 3: Testovanie a dokumentácia
1. **Testovanie v rôznych prehliadačoch** - Overte, či váš dizajn funguje v prehliadačoch Chrome, Firefox, Edge a Safari
2. **Responzívne testovanie** - Skontrolujte svoje rozloženie na mobilných zariadeniach, tabletoch a desktopoch
3. **Dokumentácia** - Pridajte komentáre do svojho CSS, ktoré vysvetľujú vaše rozhodnutia o rozložení
4. **Snímky obrazovky** - Zachyťte svoje terárium v rôznych prehliadačoch a veľkostiach obrazovky

## Technické požiadavky

### Implementácia rozloženia
- **Vyberte JEDNU možnosť**: Implementujte buď Flexbox ALEBO CSS Grid (nie oboje pre rovnaké prvky)
- **Responzívny dizajn**: Používajte relatívne jednotky (`rem`, `em`, `%`, `vw`, `vh`) namiesto pevných pixelov
- **Prístupnosť**: Zachovajte správnu sémantickú štruktúru HTML a alt text
- **Kvalita kódu**: Používajte konzistentné názvy a logicky organizujte CSS

### Moderné funkcie CSS, ktoré treba zahrnúť
```css
/* Example Flexbox approach */
.terrarium-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.plant-containers {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

/* Example Grid approach */
.terrarium-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  gap: 1rem;
}
```

### Požiadavky na podporu prehliadačov
- **Chrome/Edge**: Posledné 2 verzie
- **Firefox**: Posledné 2 verzie  
- **Safari**: Posledné 2 verzie
- **Mobilné prehliadače**: iOS Safari, Chrome Mobile

## Výstupy

1. **Aktualizovaný HTML súbor** s vylepšenou sémantickou štruktúrou
2. **Refaktorovaný CSS súbor** používajúci moderné techniky rozloženia
3. **Kolekcia snímok obrazovky** zobrazujúca kompatibilitu medzi prehliadačmi:
   - Zobrazenie na desktopoch (1920x1080)
   - Zobrazenie na tabletoch (768x1024) 
   - Zobrazenie na mobiloch (375x667)
   - Aspoň 2 rôzne prehliadače
4. **README.md súbor** dokumentujúci:
   - Vašu voľbu rozloženia (Flexbox vs Grid) a dôvody
   - Výzvy, ktorým ste čelili počas refaktoringu
   - Poznámky o kompatibilite prehliadačov
   - Pokyny na spustenie vášho kódu

## Hodnotiace kritériá

| Kritérium | Vynikajúce (4) | Dobré (3) | Rozvíjajúce sa (2) | Začiatočnícke (1) |
|-----------|----------------|-----------|--------------------|-------------------|
| **Implementácia rozloženia** | Majstrovské použitie Flexbox/Grid s pokročilými funkciami; plne responzívne | Správna implementácia s dobrým responzívnym správaním | Základná implementácia s drobnými problémami s responzivitou | Neúplná alebo nesprávna implementácia rozloženia |
| **Kvalita kódu** | Čisté, dobre organizované CSS s významnými komentármi a konzistentnými názvami | Dobrá organizácia s niekoľkými komentármi | Primeraná organizácia s minimálnymi komentármi | Zlá organizácia; ťažko pochopiteľné |
| **Kompatibilita medzi prehliadačmi** | Perfektná konzistencia vo všetkých požadovaných prehliadačoch so snímkami obrazovky | Dobrá kompatibilita s drobnými rozdielmi zdokumentovanými | Niektoré problémy s kompatibilitou, ktoré neovplyvňujú funkčnosť | Závažné problémy s kompatibilitou alebo chýbajúce testovanie |
| **Responzívny dizajn** | Výnimočný prístup zameraný na mobilné zariadenia s plynulými bodmi zlomu | Dobré responzívne správanie s vhodnými bodmi zlomu | Základné responzívne funkcie s niektorými problémami s rozložením | Obmedzené alebo nefunkčné responzívne správanie |
| **Dokumentácia** | Komplexný README s podrobnými vysvetleniami a poznatkami | Dobrá dokumentácia pokrývajúca všetky požadované prvky | Základná dokumentácia s minimálnymi vysvetleniami | Neúplná alebo chýbajúca dokumentácia |

## Užitočné zdroje

### Príručky k metódam rozloženia
- 📖 [Kompletný sprievodca Flexboxom](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [Kompletný sprievodca CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - Vyberte správny nástroj](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### Nástroje na testovanie prehliadačov
- 🛠️ [Režim responzívnych zariadení v DevTools](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - Podpora funkcií](https://caniuse.com/)
- 🛠️ [BrowserStack - Testovanie kompatibility prehliadačov](https://www.browserstack.com/)

### Nástroje na kontrolu kvality kódu
- ✅ [Validator CSS](https://jigsaw.w3.org/css-validator/)
- ✅ [Validator HTML](https://validator.w3.org/)
- ✅ [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Bonusové výzvy

🌟 **Pokročilé rozloženia**: Implementujte Flexbox AJ Grid v rôznych častiach vášho dizajnu  
🌟 **Integrácia animácií**: Pridajte CSS prechody alebo animácie, ktoré fungujú s vaším novým rozložením  
🌟 **Tmavý režim**: Implementujte prepínač témy založený na vlastnostiach CSS  
🌟 **Dotazníky kontajnerov**: Použite moderné techniky dotazníkov kontajnerov pre responzivitu na úrovni komponentov  

> 💡 **Pamätajte**: Cieľom nie je len dosiahnuť funkčnosť, ale pochopiť, PREČO je vaša zvolená metóda rozloženia najlepším riešením pre tento konkrétny dizajnový problém!

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.