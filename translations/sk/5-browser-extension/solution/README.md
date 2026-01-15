<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fab4e6b4f0efcd587a9029d82991f597",
  "translation_date": "2025-08-27T22:18:01+00:00",
  "source_file": "5-browser-extension/solution/README.md",
  "language_code": "sk"
}
-->
# Rozšírenie prehliadača Carbon Trigger: Hotový kód

Použitím API C02 Signal od tmrow na sledovanie spotreby elektriny vytvorte rozšírenie prehliadača, aby ste mali pripomienku priamo vo svojom prehliadači o tom, aká náročná je spotreba elektriny vo vašom regióne. Používanie tohto rozšírenia ad hoc vám pomôže robiť rozhodnutia o vašich aktivitách na základe týchto informácií.

![screenshot rozšírenia](../../../../translated_images/sk/extension-screenshot.0e7f5bfa110e92e3.webp)

## Začíname

Budete potrebovať nainštalovaný [npm](https://npmjs.com). Stiahnite si kópiu tohto projektu do priečinka na vašom počítači.

Nainštalujte všetky potrebné balíčky:

```
npm install
```

Vytvorte rozšírenie pomocou webpacku:

```
npm run build
```

Na inštaláciu v Edge použite menu „tri bodky“ v pravom hornom rohu prehliadača, aby ste našli panel Rozšírenia. Odtiaľ vyberte „Načítať nebalené“ na načítanie nového rozšírenia. Pri výzve otvorte priečinok „dist“ a rozšírenie sa načíta. Na jeho používanie budete potrebovať API kľúč pre API CO2 Signal ([získajte ho tu cez email](https://www.co2signal.com/) - zadajte svoj email do políčka na tejto stránke) a [kód pre váš región](http://api.electricitymap.org/v3/zones) zodpovedajúci [Electricity Map](https://www.electricitymap.org/map) (napríklad v Bostone používam 'US-NEISO').

![inštalácia](../../../../translated_images/sk/install-on-edge.78634f02842c4828.webp)

Keď zadáte API kľúč a región do rozhrania rozšírenia, farebná bodka v paneli rozšírenia prehliadača by sa mala zmeniť tak, aby odrážala spotrebu energie vo vašom regióne a poskytla vám odporúčanie, aké energeticky náročné aktivity by boli vhodné vykonať. Koncept za týmto systémom „bodky“ mi bol inšpirovaný rozšírením [Energy Lollipop](https://energylollipop.com/) pre emisie v Kalifornii.

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.