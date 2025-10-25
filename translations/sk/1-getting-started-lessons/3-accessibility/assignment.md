<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e6d0f456dfc22afb41bbdefeb5ec179d",
  "translation_date": "2025-10-24T21:27:34+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/assignment.md",
  "language_code": "sk"
}
-->
# Komplexný audit prístupnosti webovej stránky

## Pokyny

V tejto úlohe vykonáte profesionálny audit prístupnosti skutočnej webovej stránky, pričom využijete princípy a techniky, ktoré ste sa naučili. Táto praktická skúsenosť prehĺbi vaše pochopenie bariér prístupnosti a ich riešení.

Vyberte si webovú stránku, ktorá má zjavné problémy s prístupnosťou – poskytne vám to viac príležitostí na učenie, než analýza už dokonalej stránky. Dobré kandidáty zahŕňajú staršie webové stránky, komplexné webové aplikácie alebo stránky s bohatým multimediálnym obsahom.

### Fáza 1: Strategické manuálne hodnotenie

Predtým, než sa uchýlite k automatizovaným nástrojom, vykonajte komplexné manuálne hodnotenie. Tento prístup zameraný na človeka často odhalí problémy, ktoré nástroje prehliadajú, a pomôže vám pochopiť skutočný používateľský zážitok.

**🔍 Základné kritériá hodnotenia:**

**Navigácia a štruktúra:**
- Môžete prechádzať celú stránku iba pomocou klávesnice (Tab, Shift+Tab, Enter, Space, šípky)?
- Sú indikátory zamerania jasne viditeľné na všetkých interaktívnych prvkoch?
- Vytvára štruktúra nadpisov (H1-H6) logický obsahový prehľad?
- Existujú odkazy na preskočenie na hlavný obsah?

**Vizuálna prístupnosť:**
- Je na celej stránke dostatočný kontrast farieb (minimálne 4.5:1 pre bežný text)?
- Spolieha sa stránka výlučne na farbu pri prenose dôležitých informácií?
- Majú všetky obrázky vhodný alternatívny text?
- Zostáva rozloženie funkčné pri priblížení na 200%?

**Obsah a komunikácia:**
- Existujú nejasné texty odkazov ako "kliknite sem"?
- Je možné pochopiť obsah a funkčnosť bez vizuálnych podnetov?
- Sú polia formulára správne označené a zoskupené?
- Sú chybové hlásenia jasné a užitočné?

**Interaktívne prvky:**
- Fungujú všetky tlačidlá a ovládacie prvky formulára iba pomocou klávesnice?
- Sú dynamické zmeny obsahu oznamované čítačom obrazovky?
- Dodržiavajú modálne dialógy a komplexné widgety správne vzory prístupnosti?

📝 **Zdokumentujte svoje zistenia** s konkrétnymi príkladmi, snímkami obrazovky a URL stránok. Poznamenajte si problémy aj pozitívne aspekty.

### Fáza 2: Komplexné automatizované testovanie

Teraz overte a rozšírte svoje manuálne zistenia pomocou štandardných nástrojov na testovanie prístupnosti. Každý nástroj má svoje silné stránky, takže použitie viacerých nástrojov vám poskytne úplný prehľad.

**🛠️ Požadované testovacie nástroje:**

1. **Lighthouse Accessibility Audit** (zabudovaný v Chrome/Edge DevTools)
   - Spustite audit na viacerých stránkach
   - Zamerajte sa na konkrétne metriky a odporúčania
   - Poznamenajte si skóre prístupnosti a konkrétne porušenia

2. **axe DevTools** (rozšírenie prehliadača - priemyselný štandard)
   - Podrobnejšie detekovanie problémov ako Lighthouse
   - Poskytuje konkrétne príklady kódu na opravy
   - Testuje podľa kritérií WCAG 2.1

3. **WAVE Web Accessibility Evaluator** (rozšírenie prehliadača)
   - Vizualizácia prístupnostných prvkov
   - Zvýrazňuje chyby aj pozitívne vlastnosti
   - Skvelé na pochopenie štruktúry stránky

4. **Analyzátory kontrastu farieb**
   - WebAIM Contrast Checker pre konkrétne farebné páry
   - Rozšírenia prehliadača na analýzu celej stránky
   - Testovanie podľa štandardov WCAG AA a AAA

**🎧 Testovanie skutočných asistenčných technológií:**
- **Testovanie čítačiek obrazovky**: Použite NVDA (Windows), VoiceOver (Mac) alebo TalkBack (Android)
- **Navigácia iba klávesnicou**: Odpojte myš a prejdite celú stránku
- **Testovanie priblíženia**: Otestujte funkčnosť pri priblížení na 200% a 400%
- **Testovanie hlasového ovládania**: Ak je k dispozícii, vyskúšajte nástroje na hlasovú navigáciu

**📊 Organizujte svoje výsledky** vytvorením hlavnej tabuľky s:
- Popisom problému a jeho umiestnením
- Úrovňou závažnosti (Kritická/Vysoká/Stredná/Nízka)
- Porušenými kritériami úspešnosti WCAG
- Nástrojom, ktorý problém detekoval
- Snímky obrazovky a dôkazy

### Fáza 3: Dokumentácia komplexných zistení

Vytvorte profesionálnu správu o audite prístupnosti, ktorá demonštruje vaše pochopenie technických problémov aj ich dopadu na používateľov.

**📋 Požadované časti správy:**

1. **Výkonný súhrn** (1 strana)
   - URL webovej stránky a stručný popis
   - Celková úroveň prístupnosti
   - 3 najkritickejšie problémy
   - Odhadovaný dopad na používateľov so zdravotným postihnutím

2. **Metodológia** (½ strany)
   - Použitý prístup k testovaniu a nástroje
   - Hodnotené stránky a kombinácie zariadení/prehliadačov
   - Štandardy, podľa ktorých sa hodnotilo (WCAG 2.1 AA)

3. **Podrobné zistenia** (2-3 strany)
   - Problémy kategorizované podľa princípu WCAG (Vnímateľné, Ovládateľné, Pochopiteľné, Robustné)
   - Zahrňte snímky obrazovky a konkrétne príklady
   - Poznamenajte pozitívne prístupnostné prvky, ktoré ste našli
   - Krížové odkazy na výsledky automatizovaných nástrojov

4. **Hodnotenie dopadu na používateľov** (1 strana)
   - Ako identifikované problémy ovplyvňujú používateľov s rôznymi zdravotnými postihnutiami
   - Scenáre opisujúce skutočné používateľské skúsenosti
   - Dopad na podnikanie (právne riziko, SEO, rozšírenie používateľskej základne)

**📸 Zber dôkazov:**
- Snímky obrazovky porušení prístupnosti
- Záznamy obrazovky problematických používateľských tokov
- Správy z nástrojov (uložené ako PDF)
- Príklady kódu ukazujúce problémy a riešenia

### Fáza 4: Profesionálny plán nápravy

Vypracujte strategický, prioritný plán na riešenie problémov s prístupnosťou. Tým preukážete schopnosť myslieť ako profesionálny webový vývojár, ktorý rieši skutočné obchodné obmedzenia.

**🎯 Vytvorte podrobné odporúčania na zlepšenie (minimálne 10 problémov):**

**Pre každý identifikovaný problém uveďte:**

- **Popis problému**: Jasné vysvetlenie, čo je zlé a prečo je to problematické
- **Referenciu WCAG**: Konkrétne porušené kritérium úspešnosti (napr. "2.4.4 Účel odkazu (v kontexte) - Úroveň A")
- **Dopad na používateľa**: Ako to ovplyvňuje ľudí s rôznymi zdravotnými postihnutiami
- **Riešenie**: Konkrétne zmeny kódu, úpravy dizajnu alebo zlepšenia procesov
- **Úroveň priority**: Kritická (blokuje základné používanie) / Vysoká (významná prekážka) / Stredná (problém použiteľnosti) / Nízka (vylepšenie)
- **Náročnosť implementácie**: Odhad času/komplexnosti (Rýchle riešenie / Stredná námaha / Veľká úprava)
- **Overenie opravy**: Ako overiť, že oprava funguje

**Príklad záznamu zlepšenia:**

```
Issue: Generic "Read more" link text appears 8 times on homepage
WCAG Reference: 2.4.4 Link Purpose (In Context) - Level A
User Impact: Screen reader users cannot distinguish between links when viewed in link list
Solution: Replace with descriptive text like "Read more about sustainability initiatives"
Priority: High (major navigation barrier)
Effort: Low (30 minutes to update content)
Testing: Generate link list with screen reader - each link should be meaningful standalone
```

**📈 Strategické fázy implementácie:**

- **Fáza 1 (0-2 týždne)**: Kritické problémy, ktoré blokujú základnú funkčnosť
- **Fáza 2 (1-2 mesiace)**: Vylepšenia s vysokou prioritou pre lepší používateľský zážitok
- **Fáza 3 (3-6 mesiacov)**: Vylepšenia so strednou prioritou a zlepšenia procesov
- **Fáza 4 (Priebežne)**: Neustále monitorovanie a zlepšovanie

## Hodnotiace kritériá

Váš audit prístupnosti bude hodnotený na základe technickej presnosti a profesionálnej prezentácie:

| Kritérium | Výborné (90-100%) | Dobré (80-89%) | Uspokojivé (70-79%) | Potrebuje zlepšenie (<70%) |
|-----------|-------------------|----------------|---------------------|---------------------------|
| **Hĺbka manuálneho testovania** | Komplexné hodnotenie pokrývajúce všetky princípy POUR s podrobnými pozorovaniami a používateľskými scenármi | Dobré pokrytie väčšiny oblastí prístupnosti s jasnými zisteniami a niektorou analýzou dopadu na používateľa | Základné hodnotenie pokrývajúce kľúčové oblasti s primeranými pozorovaniami | Obmedzené testovanie s povrchnými pozorovaniami a minimálnym zohľadnením dopadu na používateľa |
| **Využitie nástrojov a analýza** | Efektívne využitie všetkých požadovaných nástrojov, krížové odkazy na zistenia, jasné dôkazy a analýza obmedzení nástrojov | Použitie väčšiny nástrojov s dobrou dokumentáciou, niektoré krížové odkazy a primerané dôkazy | Použitie požadovaných nástrojov so základnou dokumentáciou a niektorými dôkazmi | Minimálne využitie nástrojov, slabá dokumentácia alebo chýbajúce dôkazy |
| **Identifikácia a kategorizácia problémov** | Identifikácia 15+ konkrétnych problémov vo všetkých princípoch WCAG, presná kategorizácia podľa závažnosti, hlboké pochopenie | Identifikácia 10-14 problémov vo väčšine princípov WCAG, dobrá kategorizácia, solídne pochopenie | Identifikácia 7-9 problémov s primeraným pokrytím WCAG a základnou kategorizáciou | Identifikácia <7 problémov s obmedzeným rozsahom alebo slabou kategorizáciou |
| **Kvalita a realizovateľnosť riešení** | 10+ podrobných, realizovateľných riešení s presnými referenciami WCAG, realistické časové harmonogramy implementácie a metódy overovania | 8-9 dobre vyvinutých riešení s väčšinou presných referencií a dobrými detailmi implementácie | 6-7 základných riešení s niektorými detailmi a všeobecne realistickými prístupmi | <6 riešení alebo nedostatočné detaily, nerealistické implementácie |
| **Profesionálna komunikácia** | Správa je výborne organizovaná, jasne napísaná, obsahuje výkonný súhrn, používa vhodný technický jazyk a dodržiava štandardy obchodných dokumentov | Dobre organizovaná s dobrou kvalitou písania, obsahuje väčšinu požadovaných sekcií, vhodný tón | Primerane organizovaná s prijateľným písaním, obsahuje základné požadované sekcie | Slabá organizácia, nejasné písanie alebo chýbajúce kľúčové sekcie |
| **Aplikácia v reálnom svete** | Demonštruje pochopenie dopadu na podnikanie, právnych aspektov, rozmanitosti používateľov a praktických výziev implementácie | Ukazuje dobré pochopenie praktických aplikácií s niektorým obchodným kontextom | Základné pochopenie aplikácií v reálnom svete | Obmedzené prepojenie na praktické aplikácie |

## Možnosti pokročilých výziev

**🚀 Pre študentov, ktorí hľadajú ďalšiu výzvu:**

- **Porovnávacia analýza**: Audit 2-3 konkurenčných webových stránok a porovnanie ich úrovne prístupnosti
- **Zameranie na mobilnú prístupnosť**: Hlbšia analýza problémov špecifických pre mobilné zariadenia pomocou Android TalkBack alebo iOS VoiceOver
- **Medzinárodná perspektíva**: Výskum a aplikácia štandardov prístupnosti z rôznych krajín (EN 301 549, Section 508, ADA)
- **Hodnotenie vyhlásenia o prístupnosti**: Posúdenie existujúceho vyhlásenia o prístupnosti webovej stránky (ak existuje) v porovnaní s vašimi zisteniami

## Výstupy

Odošlite komplexnú správu o audite prístupnosti, ktorá demonštruje profesionálnu analýzu a praktické plánovanie implementácie:

**📄 Požiadavky na záverečnú správu:**

1. **Výkonný súhrn** (1 strana)
   - Prehľad webovej stránky a hodnotenie úrovne prístupnosti
   - Zhrnutie kľúčových zistení s dopadom na podnikanie
   - Odporúčané prioritné kroky

2. **Metodológia a rozsah** (1 strana)
   - Prístup k testovaniu, použité nástroje a kritériá hodnotenia
   - Hodnotené stránky/sekcie a akékoľvek obmedzenia
   - Rámec súladu so štandardmi (WCAG 2.1 AA)

3. **Podrobná správa o zisteniach** (3-4 strany)
   - Pozorovania z manuálneho testovania s používateľskými scenármi
   - Výsledky automatizovaných nástrojov s krížovými odkazmi
   - Problémy organizované podľa princípov WCAG s dôkazmi
   - Identifikované pozitívne prístupnostné prvky

4. **Strategický plán nápravy** (3-4 strany)
   - Prioritné odporúčania na zlepšenie (minimálne 10)
   - Časový harmonogram implementácie s odhadom náročnosti
   - Metódy overovania úspechu
   - Dlhodobá stratégia údržby prístupnosti

5. **Podporné dôkazy** (Prílohy)
   - Snímky obrazovky porušení prístupnosti a testovacích nástrojov
   - Príklady kódu ukazujúce problémy a riešenia
   - Správy z nástrojov a súhrny auditov
   - Poznámky alebo záznamy z testovania čítačiek obrazovky

**📊 Požiadavky na formát:**
- **Formát dokumentu**: PDF (profesionálna prezentácia)
- **Počet slov**: 2 500-3 500 slov (bez príloh a snímok obrazovky)
- **Vizuálne prvky**: Zahrňte snímky obrazovky, diagramy a príklady
- **Citácie**: Správne odkazujte na pokyny WCAG a zdroje prístupnosti

**💡 Tipy pre excelentnosť:**
- Používajte profesionálne formátovanie správy s konzistentnými nadpismi a štýlom
- Zahrňte obsah pre jednoduchú navigáciu
- Vyvážte technickú presnosť s jasným, obchodne vhodným jazykom
- Demonštrujte pochopenie technickej implementácie aj dopadu na používateľa

## Výsledky učenia

Po dokončení tohto komplexného auditu prístupnosti si osvojíte základné profesionálne zručnosti:

**🎯 Technické kompetencie:**
- **Majstrovstvo v testovaní prístupnosti**: Znalosť štandardných manuálnych a automatizovaných metód testovania
- **Aplikácia WCAG**: Praktické skúsenosti s

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.