<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f5e6821e0febccfc5d05e7c944d9e3d",
  "translation_date": "2025-08-28T03:47:16+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ja.md",
  "language_code": "cs"
}
-->
# Rozšíření prohlížeče Carbon Trigger: Hotový kód

Vytvořte rozšíření prohlížeče, které pomocí API CO2 Signal od tmrow sleduje spotřebu energie a zobrazuje připomínku o tom, jak vysoká je spotřeba energie ve vaší oblasti. Toto rozšíření můžete používat ad hoc, abyste mohli na základě těchto informací rozhodovat o svých aktivitách.

![snímek obrazovky rozšíření](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.cs.png)

## Začínáme

Je nutné mít nainstalovaný [npm](https://npmjs.com). Stáhněte si kopii tohoto kódu do složky na vašem počítači.

Nainstalujte všechny potřebné balíčky.

```
npm install
```

Sestavte rozšíření pomocí webpacku.

```
npm run build
```

Pro instalaci do Edge najděte panel „Rozšíření“ v nabídce „tři tečky“ v pravém horním rohu prohlížeče. Odtud vyberte „Načíst nebalené“ a načtěte nové rozšíření. Při výzvě otevřete složku „dist“ a rozšíření se načte. Pro použití budete potřebovat API klíč CO2 Signal ([získejte jej zde e-mailem](https://www.co2signal.com/) – zadejte svůj e-mail do pole na této stránce) a [kód pro vaši oblast](http://api.electricitymap.org/v3/zones) odpovídající [Electricity Map](https://www.electricitymap.org/map) (například pro Boston použijte 'US-NEISO').

![instalace](../../../../../translated_images/install-on-edge.78634f02842c48283726c531998679a6f03a45556b2ee99d8ff231fe41446324.cs.png)

Po zadání API klíče a oblasti do rozhraní rozšíření se barevná tečka zobrazená na liště rozšíření prohlížeče změní, aby odrážela spotřebu energie ve vaší oblasti. Tím vám naznačí, jaké aktivity vyžadující energii jsou vhodné. Koncept tohoto „tečkového“ systému jsem převzal z [Energy Lollipop extension](https://energylollipop.com/) pro emise v Kalifornii.

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.