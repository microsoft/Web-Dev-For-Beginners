<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fab4e6b4f0efcd587a9029d82991f597",
  "translation_date": "2025-08-28T03:45:50+00:00",
  "source_file": "5-browser-extension/solution/README.md",
  "language_code": "cs"
}
-->
# Rozšíření prohlížeče Carbon Trigger: Hotový kód

Pomocí API C02 Signal od tmrow sledujte spotřebu elektřiny a vytvořte rozšíření prohlížeče, které vám přímo v prohlížeči připomene, jak náročná je spotřeba elektřiny ve vašem regionu. Používání tohoto rozšíření ad hoc vám pomůže činit rozhodnutí o vašich aktivitách na základě těchto informací.

![snímek obrazovky rozšíření](../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.cs.png)

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

Pro instalaci na Edge použijte nabídku „tři tečky“ v pravém horním rohu prohlížeče a najděte panel Rozšíření. Odtud vyberte „Načíst nebalené“ pro načtení nového rozšíření. Na výzvu otevřete složku „dist“ a rozšíření se načte. Pro jeho použití budete potřebovat API klíč pro API CO2 Signal ([získejte ho zde e-mailem](https://www.co2signal.com/) – zadejte svůj e-mail do pole na této stránce) a [kód pro váš region](http://api.electricitymap.org/v3/zones) odpovídající [Electricity Map](https://www.electricitymap.org/map) (například v Bostonu používám „US-NEISO“).

![instalace](../../../../translated_images/install-on-edge.78634f02842c4828.cs.png)

Jakmile zadáte API klíč a region do rozhraní rozšíření, barevná tečka v liště rozšíření prohlížeče by se měla změnit tak, aby odrážela spotřebu energie ve vašem regionu, a poskytla vám doporučení, jaké energeticky náročné aktivity by pro vás byly vhodné. Koncept tohoto systému „teček“ mi byl inspirován rozšířením [Energy Lollipop](https://energylollipop.com/) pro emise v Kalifornii.

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.