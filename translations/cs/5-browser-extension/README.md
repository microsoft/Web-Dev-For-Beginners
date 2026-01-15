<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b121a279a6ab39878491f3e572673515",
  "translation_date": "2025-08-28T03:38:54+00:00",
  "source_file": "5-browser-extension/README.md",
  "language_code": "cs"
}
-->
# Vytváření rozšíření pro prohlížeč

Vytváření rozšíření pro prohlížeče je zábavný a zajímavý způsob, jak přemýšlet o výkonu vašich aplikací při vytváření jiného typu webového prostředku. Tento modul obsahuje lekce o tom, jak fungují prohlížeče, jak nasadit rozšíření pro prohlížeč, jak vytvořit formulář, volat API, používat místní úložiště a jak hodnotit výkon vašeho webu a zlepšovat ho.

Vytvoříte rozšíření pro prohlížeč, které funguje na Edge, Chrome a Firefoxu. Toto rozšíření, které je jako mini webová stránka přizpůsobená velmi specifickému úkolu, kontroluje [C02 Signal API](https://www.co2signal.com) pro spotřebu elektřiny a uhlíkovou intenzitu v daném regionu a vrací údaj o uhlíkové stopě regionu.

Toto rozšíření může být uživatelem ad hoc vyvoláno poté, co je do formuláře zadán klíč API a kód regionu, aby bylo možné určit místní spotřebu elektřiny a tím poskytnout data, která mohou ovlivnit rozhodnutí uživatele ohledně spotřeby elektřiny. Například může být vhodnější odložit spuštění sušičky prádla (činnost s vysokou uhlíkovou náročností) během období vysoké spotřeby elektřiny ve vašem regionu.

### Témata

1. [O prohlížeči](1-about-browsers/README.md)
2. [Formuláře a místní úložiště](2-forms-browsers-local-storage/README.md)
3. [Úlohy na pozadí a výkon](3-background-tasks-and-performance/README.md)

### Poděkování

![zelené rozšíření prohlížeče](../../../translated_images/cs/extension-screenshot.0e7f5bfa110e92e3.png)

## Poděkování

Nápad na tento webový uhlíkový spouštěč nabídl Asim Hussain, vedoucí týmu Green Cloud Advocacy ve společnosti Microsoft a autor [Green Principles](https://principles.green/). Původně šlo o [projekt webové stránky](https://github.com/jlooper/green).

Struktura rozšíření pro prohlížeč byla ovlivněna [rozšířením COVID od Adeboly Adenirana](https://github.com/onedebos/covtension).

Koncept ikonového systému „teček“ byl inspirován strukturou ikon rozšíření prohlížeče [Energy Lollipop](https://energylollipop.com/) pro emise v Kalifornii.

Tyto lekce byly napsány s ♥️ [Jen Looper](https://www.twitter.com/jenlooper).

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za závazný zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné výklady vyplývající z použití tohoto překladu.