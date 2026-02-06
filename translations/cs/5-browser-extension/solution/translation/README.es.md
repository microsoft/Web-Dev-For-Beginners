# Rozšíření prohlížeče Carbon Trigger: Kompletní kód

Pomocí API CO2 Signal od tmrow pro sledování spotřeby elektřiny vytvořte rozšíření prohlížeče, které vám umožní mít přímo v prohlížeči připomínku o spotřebě elektřiny ve vašem regionu. Používání tohoto ad hoc rozšíření vám pomůže činit rozhodnutí o vašich aktivitách na základě těchto informací.

![snímek obrazovky rozšíření](../../../../../translated_images/cs/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.png)

## Začínáme

Musíte mít nainstalovaný [npm](https://npmjs.com). Stáhněte si kopii tohoto kódu do složky na vašem počítači.

Nainstalujte všechny potřebné balíčky:

```
npm install
```

Sestavte rozšíření pomocí webpacku:

```
npm run build
```

Pro instalaci v Edge použijte nabídku 'tři tečky' v pravém horním rohu prohlížeče a najděte panel Rozšíření. Odtud vyberte 'Načíst nebalené' pro přidání nového rozšíření. Otevřete složku 'dist', když budete vyzváni, a rozšíření se načte. Pro jeho použití budete potřebovat API klíč pro CO2 Signal API ([získejte jej zde e-mailem](https://www.co2signal.com/) - zadejte svůj e-mail do pole na této stránce) a [kód pro váš region](http://api.electricitymap.org/v3/zones) odpovídající [Mapě elektřiny](https://www.electricitymap.org/map) (například v Bostonu používám 'US-NEISO').

![instalace](../../../../../translated_images/cs/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.png)

Jakmile zadáte API klíč a region do rozhraní rozšíření, barevný bod na liště rozšíření prohlížeče by se měl změnit tak, aby odrážel spotřebu energie ve vašem regionu, a poskytl vám indikátor o aktivitách s vysokou spotřebou energie, které by pro vás byly vhodné. Koncept tohoto systému "bodů" jsem převzal z [rozšíření Energy Lollipop](https://energylollipop.com/) pro emise v Kalifornii.

---

**Upozornění**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o co největší přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za závazný zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné výklady vyplývající z použití tohoto překladu.