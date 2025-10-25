<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a203e560e58ccc6ba68bffc40c7c8676",
  "translation_date": "2025-10-24T21:13:13+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/assignment.md",
  "language_code": "cs"
}
-->
# Analýza výkonu webu

## Přehled úkolu

Analýza výkonu je klíčovou dovedností moderních webových vývojářů. V tomto úkolu provedete komplexní audit výkonu skutečného webu, využijete nástroje integrované v prohlížeči i služby třetích stran k identifikaci úzkých míst a navrhnete strategie optimalizace.

Vaším úkolem je vytvořit podrobnou zprávu o výkonu, která prokáže vaše porozumění principům webového výkonu a schopnost efektivně používat profesionální analytické nástroje.

## Pokyny k úkolu

**Vyberte web** pro analýzu - zvolte jednu z následujících možností:
- Populární web, který často používáte (zpravodajský web, sociální sítě, e-commerce)
- Web projektu s otevřeným zdrojovým kódem (GitHub stránky, dokumentační weby)
- Web místního podniku nebo portfolio
- Váš vlastní projekt nebo předchozí školní práce

**Proveďte analýzu pomocí více nástrojů** s využitím alespoň tří různých přístupů:
- **DevTools prohlížeče** - Použijte záložku Výkon v Chrome/Edge pro podrobný profil
- **Online nástroje pro audit** - Vyzkoušejte Lighthouse, GTmetrix nebo WebPageTest
- **Analýza sítě** - Prozkoumejte načítání zdrojů, velikosti souborů a vzory požadavků

**Zdokumentujte své zjištění** v podrobné zprávě, která zahrnuje:

### Analýza metrik výkonu
- **Měření doby načítání** z různých nástrojů a perspektiv
- **Skóre Core Web Vitals** (LCP, FID, CLS) a jejich dopady
- **Rozpis zdrojů**, který ukazuje, které prvky nejvíce přispívají k době načítání
- **Analýza vodopádu sítě**, identifikace blokujících zdrojů

### Identifikace problémů
- **Konkrétní úzká místa výkonu** s podpůrnými daty
- **Analýza příčin** vysvětlující, proč k problémům dochází
- **Hodnocení dopadu na uživatele**, popisující, jak problémy ovlivňují skutečné uživatele
- **Prioritizace problémů** podle závažnosti a obtížnosti jejich řešení

### Doporučení pro optimalizaci
- **Konkrétní, proveditelná zlepšení** s očekávaným dopadem
- **Strategie implementace** pro každou doporučenou změnu
- **Moderní osvědčené postupy**, které lze aplikovat (lazy loading, komprese atd.)
- **Nástroje a techniky** pro průběžné sledování výkonu

## Požadavky na výzkum

**Nespoléhejte se pouze na nástroje prohlížeče** - rozšiřte svou analýzu pomocí:

**Služby pro audit třetích stran:**
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) - Komplexní audity
- [GTmetrix](https://gtmetrix.com/) - Přehled výkonu a optimalizace
- [WebPageTest](https://www.webpagetest.org/) - Testování v reálných podmínkách
- [Pingdom](https://tools.pingdom.com/) - Globální monitorování výkonu

**Specializované nástroje pro analýzu:**
- [Bundle Analyzer](https://bundlephobia.com/) - Analýza velikosti JavaScriptových balíčků
- [Nástroje pro optimalizaci obrázků](https://squoosh.app/) - Možnosti optimalizace zdrojů
- [Analýza bezpečnostních hlaviček](https://securityheaders.com/) - Dopad bezpečnosti na výkon

## Formát výstupu

Vytvořte profesionální zprávu (2-3 stránky), která zahrnuje:

1. **Výkonný souhrn** - Přehled klíčových zjištění a doporučení
2. **Metodologie** - Použité nástroje a přístup k testování
3. **Hodnocení aktuálního výkonu** - Základní metriky a měření
4. **Identifikované problémy** - Podrobná analýza problémů s podpůrnými daty
5. **Doporučení** - Prioritizované strategie zlepšení
6. **Plán implementace** - Krok za krokem plán optimalizace

**Zahrňte vizuální důkazy:**
- Snímky obrazovky nástrojů a metrik výkonu
- Grafy nebo diagramy zobrazující data o výkonu
- Porovnání před/po, pokud je to možné
- Vodopádové grafy sítě a rozpis zdrojů

## Hodnotící kritéria

| Kritérium | Vynikající (90-100%) | Dostatečné (70-89%) | Potřebuje zlepšení (50-69%) |
| --------- | -------------------- | ------------------- | -------------------------- |
| **Hloubka analýzy** | Komplexní analýza s využitím 4+ nástrojů, podrobné metriky, analýza příčin a hodnocení dopadu na uživatele | Dobrá analýza s využitím 3 nástrojů, jasné metriky a základní identifikace problémů | Základní analýza s využitím 2 nástrojů, omezená hloubka a minimální identifikace problémů |
| **Rozmanitost nástrojů** | Použití nástrojů prohlížeče + 3+ služeb třetích stran s porovnávací analýzou a poznatky z každého | Použití nástrojů prohlížeče + 2 služeb třetích stran s určitou porovnávací analýzou | Použití nástrojů prohlížeče + 1 služby třetí strany s omezeným porovnáním |
| **Identifikace problémů** | Identifikace 5+ konkrétních problémů výkonu s podrobnou analýzou příčin a kvantifikovaným dopadem | Identifikace 3-4 problémů výkonu s dobrou analýzou a částečným měřením dopadu | Identifikace 1-2 problémů výkonu se základní analýzou |
| **Doporučení** | Poskytnutí konkrétních, proveditelných doporučení s detaily implementace, očekávaným dopadem a moderními osvědčenými postupy | Poskytnutí dobrých doporučení s určitou implementační podporou a očekávanými výsledky | Poskytnutí základních doporučení s omezenými detaily implementace |
| **Profesionální prezentace** | Dobře organizovaná zpráva s jasnou strukturou, vizuálními důkazy, výkonným souhrnem a profesionálním formátováním | Dobrá organizace s některými vizuálními důkazy a jasnou strukturou | Základní organizace s minimálními vizuálními důkazy |

## Výukové cíle

Dokončením tohoto úkolu prokážete svou schopnost:
- **Používat** profesionální nástroje a metodiky pro analýzu výkonu
- **Identifikovat** úzká místa výkonu pomocí analýzy založené na datech
- **Analyzovat** vztah mezi kvalitou kódu a uživatelskou zkušeností
- **Doporučit** konkrétní, proveditelné strategie optimalizace
- **Komunikovat** technická zjištění v profesionálním formátu

Tento úkol posiluje koncepty výkonu probírané v lekci a zároveň rozvíjí praktické dovednosti, které využijete během své kariéry webového vývojáře.

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.