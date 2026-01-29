# Komplexní audit přístupnosti webových stránek

## Pokyny

V tomto úkolu provedete profesionální audit přístupnosti skutečné webové stránky, přičemž využijete principy a techniky, které jste se naučili. Tato praktická zkušenost prohloubí vaše porozumění bariérám přístupnosti a jejich řešením.

Vyberte si webovou stránku, která má zjevné problémy s přístupností – to vám poskytne více příležitostí k učení než analýza již dokonalé stránky. Dobrou volbou jsou starší webové stránky, složité webové aplikace nebo stránky s bohatým multimediálním obsahem.

### Fáze 1: Strategické manuální hodnocení

Než začnete používat automatizované nástroje, proveďte komplexní manuální hodnocení. Tento přístup zaměřený na člověka často odhalí problémy, které nástroje přehlédnou, a pomůže vám pochopit skutečné uživatelské zkušenosti.

**🔍 Základní kritéria hodnocení:**

**Navigace a struktura:**
- Lze procházet celou stránku pouze pomocí klávesnice (Tab, Shift+Tab, Enter, Space, šipky)?
- Jsou indikátory zaměření jasně viditelné na všech interaktivních prvcích?
- Vytváří struktura nadpisů (H1-H6) logický obsahový přehled?
- Jsou k dispozici odkazy pro přeskočení na hlavní obsah?

**Vizualní přístupnost:**
- Je na stránce dostatečný kontrast barev (minimálně 4,5:1 pro běžný text)?
- Spoléhá se stránka pouze na barvu při sdělování důležitých informací?
- Mají všechny obrázky vhodný alternativní text?
- Zůstává rozvržení funkční při přiblížení na 200 %?

**Obsah a komunikace:**
- Jsou na stránce odkazy typu „klikněte zde“ nebo nejasné texty odkazů?
- Lze obsah a funkčnost pochopit bez vizuálních podnětů?
- Jsou formulářová pole správně označena a seskupena?
- Jsou chybové zprávy jasné a užitečné?

**Interaktivní prvky:**
- Fungují všechny tlačítka a ovládací prvky formulářů pouze s klávesnicí?
- Jsou dynamické změny obsahu oznamovány čtečkám obrazovky?
- Dodržují modální dialogy a složité widgety správné vzory přístupnosti?

📝 **Zdokumentujte své zjištění** pomocí konkrétních příkladů, snímků obrazovky a URL adres stránek. Poznamenejte si jak problémy, tak i dobře provedené prvky.

### Fáze 2: Komplexní automatizované testování

Nyní ověřte a rozšiřte svá manuální zjištění pomocí standardních nástrojů pro testování přístupnosti. Každý nástroj má své silné stránky, takže použití více nástrojů vám poskytne kompletní pokrytí.

**🛠️ Požadované testovací nástroje:**

1. **Lighthouse Accessibility Audit** (součást DevTools v Chrome/Edge)
   - Proveďte audit na několika stránkách
   - Zaměřte se na konkrétní metriky a doporučení
   - Zaznamenejte skóre přístupnosti a konkrétní porušení

2. **axe DevTools** (rozšíření pro prohlížeč - průmyslový standard)
   - Podrobnější detekce problémů než Lighthouse
   - Poskytuje konkrétní příklady kódu pro opravy
   - Testuje podle kritérií WCAG 2.1

3. **WAVE Web Accessibility Evaluator** (rozšíření pro prohlížeč)
   - Vizualizace přístupnostních prvků
   - Zvýrazňuje chyby i pozitivní vlastnosti
   - Skvělé pro pochopení struktury stránky

4. **Analyzátory kontrastu barev**
   - WebAIM Contrast Checker pro konkrétní barevné páry
   - Rozšíření pro prohlížeče pro analýzu celé stránky
   - Testování podle standardů WCAG AA a AAA

**🎧 Testování skutečných asistivních technologií:**
- **Testování čtečky obrazovky**: Použijte NVDA (Windows), VoiceOver (Mac) nebo TalkBack (Android)
- **Navigace pouze klávesnicí**: Odpojte myš a procházejte celou stránku
- **Testování přiblížení**: Testujte funkčnost při přiblížení na 200 % a 400 %
- **Testování hlasového ovládání**: Pokud je k dispozici, vyzkoušejte nástroje pro hlasovou navigaci

**📊 Organizujte své výsledky** vytvořením hlavní tabulky s:
- Popisem problému a jeho umístěním
- Úrovní závažnosti (Kritická/Vysoká/Střední/Nízká)
- Porušenými kritérii úspěchu WCAG
- Nástrojem, který problém detekoval
- Snímky obrazovky a důkazy

### Fáze 3: Dokumentace komplexních zjištění

Vytvořte profesionální zprávu o auditu přístupnosti, která demonstruje vaše porozumění technickým problémům i jejich dopadu na uživatele.

**📋 Požadované sekce zprávy:**

1. **Shrnutí** (1 stránka)
   - URL webové stránky a stručný popis
   - Celková úroveň přístupnosti
   - 3 nejkritičtější problémy
   - Odhadovaný dopad na uživatele s postižením

2. **Metodologie** (½ stránky)
   - Přístup k testování a použité nástroje
   - Hodnocené stránky a kombinace zařízení/prohlížečů
   - Standardy, podle kterých bylo hodnoceno (WCAG 2.1 AA)

3. **Podrobné zjištění** (2-3 stránky)
   - Problémy kategorizované podle principů WCAG (Vnímatelné, Ovládatelné, Srozumitelné, Robustní)
   - Zahrňte snímky obrazovky a konkrétní příklady
   - Poznamenejte pozitivní prvky přístupnosti, které jste našli
   - Propojte s výsledky automatizovaných nástrojů

4. **Hodnocení dopadu na uživatele** (1 stránka)
   - Jak identifikované problémy ovlivňují uživatele s různými postiženími
   - Scénáře popisující skutečné uživatelské zkušenosti
   - Dopad na podnikání (právní riziko, SEO, rozšíření uživatelské základny)

**📸 Sbírání důkazů:**
- Snímky obrazovky přístupnostních problémů
- Záznamy obrazovky problematických uživatelských toků
- Zprávy z nástrojů (uložte jako PDF)
- Příklady kódu ukazující problémy

### Fáze 4: Profesionální plán nápravy

Vypracujte strategický, prioritní plán pro řešení problémů s přístupností. Tím prokážete schopnost myslet jako profesionální webový vývojář, který se zabývá skutečnými obchodními omezeními.

**🎯 Vytvořte podrobné návrhy zlepšení (minimálně 10 problémů):**

**Pro každý identifikovaný problém uveďte:**

- **Popis problému**: Jasné vysvětlení, co je špatně a proč je to problematické
- **Odkaz na WCAG**: Konkrétní porušená kritéria úspěchu (např. „2.4.4 Účel odkazu (v kontextu) - Úroveň A“)
- **Dopad na uživatele**: Jak to ovlivňuje lidi s různými postiženími
- **Řešení**: Konkrétní změny kódu, úpravy designu nebo zlepšení procesů
- **Úroveň priority**: Kritická (blokuje základní použití) / Vysoká (významná bariéra) / Střední (problém použitelnosti) / Nízká (vylepšení)
- **Náročnost implementace**: Odhad času/komplexity (Rychlé řešení / Střední úsilí / Velká úprava)
- **Ověření testování**: Jak ověřit, že oprava funguje

**Příklad návrhu zlepšení:**

```
Issue: Generic "Read more" link text appears 8 times on homepage
WCAG Reference: 2.4.4 Link Purpose (In Context) - Level A
User Impact: Screen reader users cannot distinguish between links when viewed in link list
Solution: Replace with descriptive text like "Read more about sustainability initiatives"
Priority: High (major navigation barrier)
Effort: Low (30 minutes to update content)
Testing: Generate link list with screen reader - each link should be meaningful standalone
```

**📈 Strategické fáze implementace:**

- **Fáze 1 (0-2 týdny)**: Kritické problémy blokující základní funkčnost
- **Fáze 2 (1-2 měsíce)**: Vylepšení s vysokou prioritou pro lepší uživatelskou zkušenost
- **Fáze 3 (3-6 měsíců)**: Vylepšení se střední prioritou a zlepšení procesů
- **Fáze 4 (Průběžně)**: Nepřetržité monitorování a zlepšování

## Hodnotící kritéria

Váš audit přístupnosti bude hodnocen na základě technické přesnosti a profesionální prezentace:

| Kritéria | Výborné (90-100 %) | Dobré (80-89 %) | Dostatečné (70-79 %) | Potřebuje zlepšení (<70 %) |
|----------|-------------------|---------------|---------------------|------------------------|
| **Hloubka manuálního testování** | Komplexní hodnocení pokrývající všechny principy POUR s podrobnými pozorováními a uživatelskými scénáři | Dobré pokrytí většiny oblastí přístupnosti s jasnými zjištěními a analýzou dopadu na uživatele | Základní hodnocení klíčových oblastí s dostatečnými pozorováními | Omezené testování s povrchními pozorováními a minimálním zohledněním dopadu na uživatele |
| **Využití nástrojů a analýza** | Efektivní využití všech požadovaných nástrojů, křížové odkazy na zjištění, jasné důkazy a analýza omezení nástrojů | Využití většiny nástrojů s dobrou dokumentací, některé křížové odkazy a dostatečné důkazy | Použití požadovaných nástrojů se základní dokumentací a některými důkazy | Minimální využití nástrojů, špatná dokumentace nebo chybějící důkazy |
| **Identifikace a kategorizace problémů** | Identifikace 15+ konkrétních problémů napříč všemi principy WCAG, přesná kategorizace podle závažnosti, hluboké porozumění | Identifikace 10-14 problémů napříč většinou principů WCAG, dobrá kategorizace, solidní porozumění | Identifikace 7-9 problémů s dostatečným pokrytím WCAG a základní kategorizací | Identifikace <7 problémů s omezeným rozsahem nebo špatnou kategorizací |
| **Kvalita a proveditelnost řešení** | 10+ podrobných, akčních řešení s přesnými odkazy na WCAG, realistické časové plány implementace a metody ověření | 8-9 dobře vyvinutých řešení s většinou přesných odkazů a dobrými detaily implementace | 6-7 základních řešení s některými detaily a obecně realistickými přístupy | <6 řešení nebo nedostatečné detaily, nerealistické implementace |
| **Profesionální komunikace** | Zpráva je výborně organizovaná, jasně napsaná, obsahuje shrnutí, používá vhodný technický jazyk a dodržuje standardy obchodních dokumentů | Dobře organizovaná s dobrou kvalitou psaní, obsahuje většinu požadovaných sekcí, vhodný tón | Přiměřeně organizovaná s přijatelnou kvalitou psaní, obsahuje základní požadované sekce | Špatná organizace, nejasné psaní nebo chybějící klíčové sekce |
| **Aplikace v reálném světě** | Prokazuje porozumění dopadu na podnikání, právním aspektům, rozmanitosti uživatelů a praktickým výzvám implementace | Ukazuje dobré porozumění praktickým aplikacím s určitým obchodním kontextem | Základní porozumění aplikacím v reálném světě | Omezené propojení s praktickými aplikacemi |

## Možnosti pokročilého úkolu

**🚀 Pro studenty hledající další výzvu:**

- **Srovnávací analýza**: Proveďte audit 2-3 konkurenčních webových stránek a porovnejte jejich úroveň přístupnosti
- **Zaměření na mobilní přístupnost**: Podrobně se zaměřte na problémy specifické pro mobilní přístupnost pomocí Android TalkBack nebo iOS VoiceOver
- **Mezinárodní perspektiva**: Prozkoumejte a aplikujte standardy přístupnosti z různých zemí (EN 301 549, Section 508, ADA)
- **Hodnocení prohlášení o přístupnosti**: Zhodnoťte existující prohlášení o přístupnosti webové stránky (pokud existuje) na základě vašich zjištění

## Výstupy

Odevzdejte komplexní zprávu o auditu přístupnosti, která demonstruje profesionální analýzu a praktické plánování implementace:

**📄 Požadavky na závěrečnou zprávu:**

1. **Shrnutí** (1 stránka)
   - Přehled webové stránky a hodnocení úrovně přístupnosti
   - Souhrn klíčových zjištění s dopadem na podnikání
   - Doporučené prioritní kroky

2. **Metodologie a rozsah** (1 stránka)
   - Přístup k testování, použité nástroje a kritéria hodnocení
   - Hodnocené stránky/sekce a případná omezení
   - Rámec pro dodržování standardů (WCAG 2.1 AA)

3. **Podrobná zpráva o zjištěních** (3-4 stránky)
   - Pozorování z manuálního testování s uživatelskými scénáři
   - Výsledky automatizovaných nástrojů s křížovými odkazy
   - Problémy organizované podle principů WCAG s důkazy
   - Identifikované pozitivní prvky přístupnosti

4. **Strategický plán nápravy** (3-4 stránky)
   - Prioritní doporučení pro zlepšení (minimálně 10)
   - Časový plán implementace s odhady úsilí
   - Metriky úspěchu a metody ověření
   - Strategie dlouhodobé údržby přístupnosti

5. **Podpůrné důkazy** (Přílohy)
   - Snímky obrazovky problémů s přístupností a testovacích nástrojů
   - Příklady kódu ukazující problémy a řešení
   - Zprávy z nástrojů a souhrny auditu
   - Poznámky nebo záznamy z testování čtečky obrazovky

**📊 Požadavky na formát:**
- **Formát dokumentu**: PDF (profesionální prezentace)
- **Počet slov**: 2 500-3 500 slov (bez příloh a snímků obrazovky)
- **Vizualní prvky**: Zahrňte snímky obrazovky, diagramy a příklady
- **Citace**: Odkazujte na pokyny WCAG a zdroje přístupnosti vhodně

**💡 Tipy pro excelenci:**
- Použijte profesionální formátování zprávy s konzistentními nadpisy a stylováním
- Zahrňte obsah pro snadnou navigaci
- Vyvážte technickou přesnost s jasným, obchodně vhodným jazykem
- Prokažte porozumění technické implementaci i dopadu na uživatele

## Výukové cíle

Po dokončení tohoto komplexního auditu přístupnosti si osvojíte klíčové profesionální dovednosti:

**🎯 Technické kompetence:**
- **Mistrovství v testování přístupnosti**: Znalost manuálních i automatizovaných metod testování přístupnosti
- **Aplikace WCAG**: Praktická zkušenost s aplikací Web Content Accessibility Guidelines na reálné scénáře
- **Porozumění asistivním technologiím**: Praktická zkušenost s čtečkami obrazovky a navigací pomocí klávesnice
- **Mapování problémů a řešení**: Schopnost identifikovat bariéry přístupnosti a vyvinout konkrétní, akční strategie nápravy

**💼 Profesionální dovednosti:**
- **Technická komunikace**: Zkušenost s psaním profesionálních zpráv o přístupnosti pro různé zainteresované strany
- **Strategické plánování**:

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.