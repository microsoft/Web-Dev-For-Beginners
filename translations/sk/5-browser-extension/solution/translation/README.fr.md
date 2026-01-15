<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9361268ca430b2579375009e1eceb5e5",
  "translation_date": "2025-08-27T22:21:05+00:00",
  "source_file": "5-browser-extension/solution/translation/README.fr.md",
  "language_code": "sk"
}
-->
# Rozšírenie prehliadača Carbon Trigger: Dokončený kód

Pomocou API C02 Signal od tmrow na sledovanie spotreby elektriny vytvorte rozšírenie prehliadača, aby ste mohli mať priamo vo svojom prehliadači pripomienku o spotrebe elektriny vo vašom regióne. Používanie tohto ad hoc rozšírenia vám pomôže robiť rozhodnutia o vašich aktivitách na základe týchto informácií.

![snímka rozšírenia](../../../../../translated_images/sk/extension-screenshot.0e7f5bfa110e92e3.png)

## Začíname

Budete potrebovať nainštalovaný [npm](https://npmjs.com). Stiahnite si kópiu tohto kódu do priečinka vo vašom počítači.

Nainštalujte všetky potrebné balíčky:

```
npm install
```

Vytvorte rozšírenie pomocou webpacku:

```
npm run build
```

Na inštaláciu v prehliadači Edge použite menu „tri bodky“ v pravom hornom rohu prehliadača na otvorenie panela Rozšírenia. Odtiaľ vyberte „Načítať rozbalené rozšírenie“ na pridanie nového rozšírenia. Pri výzve otvorte priečinok „dist“ a rozšírenie sa načíta. Na jeho používanie budete potrebovať API kľúč pre API CO2 Signal ([získajte ho tu e-mailom](https://www.co2signal.com/) – zadajte svoj e-mail do poľa na tejto stránke) a [kód pre váš región](http://api.electricitymap.org/v3/zones) zodpovedajúci [mape elektriny](https://www.electricitymap.org/map) (napríklad v Bostone používam 'US-NEISO').

![inštalácia](../../../../../translated_images/sk/install-on-edge.78634f02842c4828.png)

Keď zadáte API kľúč a región do rozhrania rozšírenia, farebný bod v paneli rozšírení prehliadača by sa mal zmeniť tak, aby odrážal spotrebu energie vo vašom regióne, a poskytol vám indikátor, ktoré energeticky náročné aktivity by bolo vhodné vykonávať. Koncept tohto systému „bodov“ mi bol inšpirovaný [rozšírením Energy Lollipop](https://energylollipop.com/) pre kalifornské emisie.

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby na automatický preklad [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, upozorňujeme, že automatické preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nezodpovedáme za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.