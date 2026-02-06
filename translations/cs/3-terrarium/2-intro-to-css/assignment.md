# Úkol na refaktorizaci CSS

## Cíl

Přeměňte svůj projekt terária tak, aby využíval moderní techniky rozvržení CSS! Refaktorujte aktuální přístup absolutního pozicování a implementujte **Flexbox** nebo **CSS Grid** pro udržitelnější a responzivní design. Tento úkol vás vyzývá k aplikaci moderních standardů CSS při zachování vizuální atraktivity vašeho terária.

Porozumění tomu, kdy a jak používat různé metody rozvržení, je klíčovou dovedností pro moderní webový vývoj. Toto cvičení propojuje tradiční techniky pozicování se současnými systémy rozvržení CSS.

## Pokyny k úkolu

### Fáze 1: Analýza a plánování
1. **Projděte si svůj aktuální kód terária** - Identifikujte, které prvky aktuálně používají absolutní pozicování
2. **Vyberte metodu rozvržení** - Rozhodněte se, zda Flexbox nebo CSS Grid lépe odpovídá vašim designovým cílům
3. **Navrhněte novou strukturu rozvržení** - Naplánujte, jak budou kontejnery a prvky rostlin organizovány

### Fáze 2: Implementace
1. **Vytvořte novou verzi** svého projektu terária v samostatné složce
2. **Aktualizujte strukturu HTML** podle potřeby, aby podporovala zvolenou metodu rozvržení
3. **Refaktorujte CSS** tak, aby používalo Flexbox nebo CSS Grid místo absolutního pozicování
4. **Zachovejte vizuální konzistenci** - Ujistěte se, že vaše rostliny a sklenice terária se zobrazují na stejných pozicích
5. **Implementujte responzivní chování** - Vaše rozvržení by mělo být přizpůsobivé různým velikostem obrazovky

### Fáze 3: Testování a dokumentace
1. **Testování napříč prohlížeči** - Ověřte, že váš design funguje v Chrome, Firefoxu, Edge a Safari
2. **Responzivní testování** - Zkontrolujte své rozvržení na mobilních, tabletových a desktopových obrazovkách
3. **Dokumentace** - Přidejte komentáře do svého CSS, které vysvětlují vaše volby rozvržení
4. **Snímky obrazovky** - Zachyťte své terárium v různých prohlížečích a velikostech obrazovek

## Technické požadavky

### Implementace rozvržení
- **Vyberte JEDNU**: Implementujte buď Flexbox NEBO CSS Grid (ne obojí pro stejné prvky)
- **Responzivní design**: Používejte relativní jednotky (`rem`, `em`, `%`, `vw`, `vh`) místo pevných pixelů
- **Přístupnost**: Zachovejte správnou semantickou strukturu HTML a alt text
- **Kvalita kódu**: Používejte konzistentní názvy a logicky organizujte CSS

### Moderní funkce CSS k zahrnutí
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

### Požadavky na podporu prohlížečů
- **Chrome/Edge**: Poslední 2 verze
- **Firefox**: Poslední 2 verze  
- **Safari**: Poslední 2 verze
- **Mobilní prohlížeče**: iOS Safari, Chrome Mobile

## Výstupy

1. **Aktualizovaný HTML soubor** s vylepšenou semantickou strukturou
2. **Refaktorovaný CSS soubor** využívající moderní techniky rozvržení
3. **Sbírka snímků obrazovky** ukazující kompatibilitu napříč prohlížeči:
   - Zobrazení na desktopu (1920x1080)
   - Zobrazení na tabletu (768x1024) 
   - Zobrazení na mobilu (375x667)
   - Alespoň 2 různé prohlížeče
4. **README.md soubor** dokumentující:
   - Vaši volbu rozvržení (Flexbox vs Grid) a důvody
   - Výzvy, kterým jste čelili během refaktorizace
   - Poznámky ke kompatibilitě prohlížečů
   - Pokyny pro spuštění vašeho kódu

## Hodnotící kritéria

| Kritérium | Vynikající (4) | Dobré (3) | Průměrné (2) | Začátečník (1) |
|----------|---------------|----------------|---------------|---------------|
| **Implementace rozvržení** | Mistrovské použití Flexbox/Grid s pokročilými funkcemi; plně responzivní | Správná implementace s dobrým responzivním chováním | Základní implementace s drobnými problémy s responzivitou | Neúplná nebo nesprávná implementace rozvržení |
| **Kvalita kódu** | Čisté, dobře organizované CSS s významnými komentáři a konzistentními názvy | Dobrá organizace s několika komentáři | Přiměřená organizace s minimem komentářů | Špatná organizace; obtížné na pochopení |
| **Kompatibilita napříč prohlížeči** | Perfektní konzistence ve všech požadovaných prohlížečích se snímky obrazovky | Dobrá kompatibilita s drobnými rozdíly zdokumentovanými | Některé problémy s kompatibilitou, které nebrání funkčnosti | Závažné problémy s kompatibilitou nebo chybějící testování |
| **Responzivní design** | Výjimečný přístup zaměřený na mobilní zařízení s plynulými přechody | Dobré responzivní chování s vhodnými přechody | Základní responzivní funkce s některými problémy s rozvržením | Omezené nebo nefunkční responzivní chování |
| **Dokumentace** | Komplexní README s podrobnými vysvětleními a poznatky | Dobrá dokumentace pokrývající všechny požadované prvky | Základní dokumentace s minimálními vysvětleními | Neúplná nebo chybějící dokumentace |

## Užitečné zdroje

### Průvodci metodami rozvržení
- 📖 [Kompletní průvodce Flexboxem](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [Kompletní průvodce CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - Vyberte správný nástroj](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### Nástroje pro testování prohlížečů
- 🛠️ [Režim responzivního zobrazení v DevTools](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - Podpora funkcí](https://caniuse.com/)
- 🛠️ [BrowserStack - Testování napříč prohlížeči](https://www.browserstack.com/)

### Nástroje pro kvalitu kódu
- ✅ [CSS Validator](https://jigsaw.w3.org/css-validator/)
- ✅ [HTML Validator](https://validator.w3.org/)
- ✅ [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Bonusové výzvy

🌟 **Pokročilá rozvržení**: Implementujte Flexbox I Grid v různých částech vašeho designu  
🌟 **Integrace animací**: Přidejte CSS přechody nebo animace, které fungují s vaším novým rozvržením  
🌟 **Tmavý režim**: Implementujte přepínač motivů založený na vlastnostech CSS  
🌟 **Dotazy na kontejnery**: Použijte moderní techniky dotazů na kontejnery pro responzivitu na úrovni komponent  

> 💡 **Pamatujte**: Cílem není jen to, aby to fungovalo, ale pochopit, PROČ je vámi zvolená metoda rozvržení nejlepší řešení pro tento konkrétní designový úkol!

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.