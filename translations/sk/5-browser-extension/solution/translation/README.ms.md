<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "21b364c158c8e4f698de65eeac16c9fe",
  "translation_date": "2025-08-27T22:20:34+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ms.md",
  "language_code": "sk"
}
-->
# Rozšírenie prehliadača Carbon Trigger: Kompletný kód

Použitím API CO2 Signal od tmrow na sledovanie spotreby elektrickej energie vytvorte rozšírenie prehliadača, ktoré vám umožní dostávať upozornenia o aktuálnej záťaži spotreby elektrickej energie vo vašom regióne. Používanie tohto rozšírenia vám pomôže robiť informované rozhodnutia o vašich aktivitách na základe týchto údajov.

![screenshot rozšírenia prehliadača](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.sk.png)

## Začíname

Najprv si musíte nainštalovať [npm](https://npmjs.com). Stiahnite si kópiu tohto projektu do priečinka na vašom počítači.

Nainštalujte všetky potrebné balíčky:

```
npm install
```

Vytvorte rozšírenie pomocou webpacku:

```
npm run build
```

Na inštaláciu v Edge použite menu „tri bodky“ v pravom hornom rohu prehliadača a vyhľadajte panel Rozšírenia. Odtiaľ vyberte „Load Unpacked“ na načítanie nového rozšírenia. Otvorte priečinok „dist“ na požiadanie a rozšírenie sa načíta. Na jeho používanie budete potrebovať API kľúč pre CO2 Signal ([získajte ho tu cez e-mail](https://www.co2signal.com/) - zadajte svoj e-mail do políčka na stránke) a [kód pre váš región](http://api.electricitymap.org/v3/zones), ktorý zodpovedá [Elektrickej mape](https://www.electricitymap.org/map) (napríklad v Bostone používam 'US-NEISO').

![sťahovanie](../../../../../translated_images/install-on-edge.78634f02842c4828.sk.png)

Po zadaní API kľúča a regiónu do rozhrania rozšírenia sa farebný bod na paneli rozšírenia prehliadača zmení, aby odrážal spotrebu energie vo vašom regióne, a poskytne vám odporúčania ohľadom vhodných aktivít. Koncept systému „bodov“ mi bol inšpiráciou od [rozšírenia prehliadača Energy Lollipop](https://energylollipop.com/) pre Kaliforniu.

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.