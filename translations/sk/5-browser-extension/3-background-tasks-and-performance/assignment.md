# Analýza webovej stránky z hľadiska výkonu

## Prehľad zadania

Analýza výkonu je kľúčovou zručnosťou moderných webových vývojárov. V tomto zadaní vykonáte komplexný audit výkonu reálnej webovej stránky, pričom použijete nástroje zabudované v prehliadači aj služby tretích strán na identifikáciu úzkych miest a navrhnutie optimalizačných stratégií.

Vašou úlohou je poskytnúť podrobnú správu o výkone, ktorá preukáže vaše pochopenie princípov webového výkonu a schopnosť efektívne používať profesionálne nástroje na analýzu.

## Pokyny k zadaniu

**Vyberte webovú stránku** na analýzu - vyberte jednu z nasledujúcich možností:
- Populárnu webovú stránku, ktorú často používate (spravodajský portál, sociálne siete, e-commerce)
- Webovú stránku open-source projektu (GitHub stránky, dokumentačné stránky)
- Webovú stránku miestneho podnikania alebo portfólia
- Váš vlastný projekt alebo predchádzajúcu školskú prácu

**Vykonajte analýzu pomocou viacerých nástrojov** s použitím minimálne troch rôznych prístupov:
- **DevTools prehliadača** - Použite kartu Výkon v Chrome/Edge na podrobné profilovanie
- **Online nástroje na audit** - Vyskúšajte Lighthouse, GTmetrix alebo WebPageTest
- **Analýza siete** - Preskúmajte načítanie zdrojov, veľkosti súborov a vzory požiadaviek

**Zdokumentujte svoje zistenia** v komplexnej správe, ktorá bude obsahovať:

### Analýza metrík výkonu
- **Merania času načítania** z viacerých nástrojov a perspektív
- **Skóre Core Web Vitals** (LCP, FID, CLS) a ich dôsledky
- **Rozpis zdrojov**, ktorý ukazuje, ktoré aktíva najviac prispievajú k času načítania
- **Analýza vodopádu siete**, identifikácia blokujúcich zdrojov

### Identifikácia problémov
- **Konkrétne úzke miesta výkonu** s podpornými údajmi
- **Analýza príčin** vysvetľujúca, prečo každý problém vzniká
- **Hodnotenie dopadu na používateľov**, opisujúce, ako problémy ovplyvňujú reálnych používateľov
- **Prioritizácia problémov** na základe závažnosti a náročnosti opravy

### Odporúčania na optimalizáciu
- **Konkrétne, realizovateľné zlepšenia** s očakávaným dopadom
- **Stratégie implementácie** pre každú odporúčanú zmenu
- **Moderné osvedčené postupy**, ktoré by sa mohli aplikovať (lazy loading, kompresia atď.)
- **Nástroje a techniky** na priebežné monitorovanie výkonu

## Požiadavky na výskum

**Nespoliehajte sa len na nástroje prehliadača** - rozšírte svoju analýzu pomocou:

**Služby na audit tretích strán:**
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) - Komplexné audity
- [GTmetrix](https://gtmetrix.com/) - Informácie o výkone a optimalizácii
- [WebPageTest](https://www.webpagetest.org/) - Testovanie v reálnych podmienkach
- [Pingdom](https://tools.pingdom.com/) - Globálne monitorovanie výkonu

**Špecializované nástroje na analýzu:**
- [Bundle Analyzer](https://bundlephobia.com/) - Analýza veľkosti JavaScript balíkov
- [Nástroje na optimalizáciu obrázkov](https://squoosh.app/) - Príležitosti na optimalizáciu aktív
- [Analýza bezpečnostných hlavičiek](https://securityheaders.com/) - Dopad bezpečnosti na výkon

## Formát výstupu

Vytvorte profesionálnu správu (2-3 strany), ktorá bude obsahovať:

1. **Výkonný súhrn** - Prehľad kľúčových zistení a odporúčaní
2. **Metodológia** - Použité nástroje a prístup k testovaniu
3. **Hodnotenie aktuálneho výkonu** - Základné metriky a merania
4. **Identifikované problémy** - Podrobná analýza problémov s podpornými údajmi
5. **Odporúčania** - Prioritizované stratégie zlepšenia
6. **Plán implementácie** - Krok za krokom plán optimalizácie

**Zahrňte vizuálne dôkazy:**
- Snímky obrazovky nástrojov na analýzu výkonu a metrík
- Grafy alebo diagramy zobrazujúce údaje o výkone
- Porovnania pred a po, ak je to možné
- Grafy vodopádu siete a rozpis zdrojov

## Hodnotiace kritériá

| Kritérium | Vynikajúce (90-100%) | Dostatočné (70-89%) | Potrebuje zlepšenie (50-69%) |
| --------- | -------------------- | ------------------- | --------------------------- |
| **Hĺbka analýzy** | Komplexná analýza s použitím 4+ nástrojov, podrobné metriky, analýza príčin a hodnotenie dopadu na používateľov | Dobrá analýza s použitím 3 nástrojov, jasné metriky a základná identifikácia problémov | Základná analýza s použitím 2 nástrojov, obmedzená hĺbka a minimálna identifikácia problémov |
| **Rozmanitosť nástrojov** | Použitie nástrojov prehliadača + 3+ služieb tretích strán s porovnávacou analýzou a poznatkami z každého | Použitie nástrojov prehliadača + 2 služby tretích strán s určitými porovnávacími analýzami | Použitie nástrojov prehliadača + 1 služba tretích strán s obmedzeným porovnaním |
| **Identifikácia problémov** | Identifikácia 5+ konkrétnych problémov výkonu s podrobnou analýzou príčin a kvantifikovaným dopadom | Identifikácia 3-4 problémov výkonu s dobrou analýzou a určitým meraním dopadu | Identifikácia 1-2 problémov výkonu so základnou analýzou |
| **Odporúčania** | Poskytuje konkrétne, realizovateľné odporúčania s podrobnosťami o implementácii, očakávanom dopade a moderných osvedčených postupoch | Poskytuje dobré odporúčania s určitými pokynmi na implementáciu a očakávanými výsledkami | Poskytuje základné odporúčania s obmedzenými podrobnosťami o implementácii |
| **Profesionálna prezentácia** | Dobre organizovaná správa s jasnou štruktúrou, vizuálnymi dôkazmi, výkonným súhrnom a profesionálnym formátovaním | Dobrá organizácia s určitými vizuálnymi dôkazmi a jasnou štruktúrou | Základná organizácia s minimálnymi vizuálnymi dôkazmi |

## Výsledky učenia

Splnením tohto zadania preukážete svoju schopnosť:
- **Aplikovať** profesionálne nástroje a metodiky na analýzu výkonu
- **Identifikovať** úzke miesta výkonu pomocou analýzy založenej na údajoch
- **Analyzovať** vzťah medzi kvalitou kódu a používateľskou skúsenosťou
- **Odporučiť** konkrétne, realizovateľné stratégie optimalizácie
- **Komunikovať** technické zistenia v profesionálnom formáte

Toto zadanie posilňuje koncepty výkonu, ktoré ste sa naučili počas lekcie, a zároveň rozvíja praktické zručnosti, ktoré budete využívať počas celej svojej kariéry webového vývojára.

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.