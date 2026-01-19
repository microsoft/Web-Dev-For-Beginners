<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "26fd39046d264ba185dcb086d3a8cf3e",
  "translation_date": "2025-08-28T03:45:19+00:00",
  "source_file": "5-browser-extension/start/README.md",
  "language_code": "cs"
}
-->
# Rozšíření prohlížeče Carbon Trigger: Výchozí kód

Pomocí API CO2 Signal od tmrow pro sledování spotřeby elektřiny vytvořte rozšíření prohlížeče, které vám přímo v prohlížeči připomene, jak náročná je spotřeba elektřiny ve vaší oblasti. Používání tohoto rozšíření vám pomůže lépe se rozhodovat o vašich aktivitách na základě těchto informací.

![snímek obrazovky rozšíření](../../../../translated_images/cs/extension-screenshot.0e7f5bfa110e92e3.webp)

## Začínáme

Budete potřebovat mít nainstalovaný [npm](https://npmjs.com). Stáhněte si kopii tohoto kódu do složky na vašem počítači.

Nainstalujte všechny potřebné balíčky:

```
npm install
```

Sestavte rozšíření pomocí webpacku:

```
npm run build
```

Pro instalaci na Edge použijte nabídku „tři tečky“ v pravém horním rohu prohlížeče a najděte panel Rozšíření. Odtud vyberte „Načíst nebalené“ pro načtení nového rozšíření. Na výzvu otevřete složku „dist“ a rozšíření se načte. Pro jeho použití budete potřebovat API klíč pro API CO2 Signal ([získejte jej zde e-mailem](https://www.co2signal.com/) – zadejte svůj e-mail do pole na této stránce) a [kód pro vaši oblast](http://api.electricitymap.org/v3/zones) odpovídající [Electricity Map](https://www.electricitymap.org/map) (například v Bostonu používám „US-NEISO“).

![instalace](../../../../translated_images/cs/install-on-edge.78634f02842c4828.webp)

Jakmile zadáte API klíč a region do rozhraní rozšíření, barevná tečka na liště rozšíření prohlížeče by se měla změnit tak, aby odrážela spotřebu energie ve vaší oblasti, a poskytne vám doporučení, jaké energeticky náročné aktivity by pro vás byly vhodné. Koncept tohoto systému „teček“ jsem převzal z rozšíření [Energy Lollipop](https://energylollipop.com/) pro emise v Kalifornii.

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.