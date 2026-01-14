<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9a6b22a2eff0f499b66236be973b24ad",
  "translation_date": "2025-08-27T22:19:05+00:00",
  "source_file": "5-browser-extension/solution/translation/README.it.md",
  "language_code": "sk"
}
-->
# Rozšírenie prehliadača Carbon Trigger: kód na začiatok

Použije sa API Signal CO2 od tmrow na sledovanie spotreby elektriny, aby sa vytvorilo rozšírenie pre prehliadač, ktoré poskytne pripomienku priamo v prehliadači o tom, aká náročná je spotreba elektriny vo vašom regióne. Používanie tohto rozšírenia pomôže lepšie zhodnotiť svoje aktivity na základe týchto informácií.

![screenshot rozšírenia](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.sk.png)

## Začíname

Je potrebné mať nainštalovaný [npm](https://npmjs.com). Stiahnite si kópiu tohto projektu do priečinka na svojom počítači.

Nainštalujte všetky potrebné balíčky:

```
npm install
```

Vytvorte rozšírenie pomocou webpacku:

```
npm run build
```

Na inštaláciu v Edge použite menu "tri bodky" v pravom hornom rohu prehliadača a vyhľadajte panel Rozšírenia. Ak ešte nie je aktívny, zapnite režim vývojára (v dolnej časti). Vyberte "Načítať rozbalené" na načítanie nového rozšírenia. Otvorte priečinok "dist" v zobrazenom okne a rozšírenie sa načíta. Na jeho používanie budete potrebovať API kľúč pre CO2 Signal API (môžete ho [získať tu e-mailom](https://www.co2signal.com/) - zadajte svoju e-mailovú adresu do políčka na tejto stránke) a [kód pre váš región](http://api.electricitymap.org/v3/zones) zodpovedajúci [elektrickej mape](https://www.electricitymap.org/map) (napríklad v Bostone "US-NEISO").

![inštalácia](../../../../../translated_images/install-on-edge.78634f02842c4828.sk.png)

Keď zadáte API kľúč a región do rozhrania rozšírenia, farebný bod v paneli rozšírenia prehliadača by sa mal zmeniť tak, aby odrážal spotrebu energie vo vašom regióne. Poskytne tiež návod na to, ktoré aktivity s vysokou spotrebou energie by boli vhodné vykonať. Koncept tohto systému "bodov" bol inšpirovaný [rozšírením Energy Lollipop](https://energylollipop.com/) pre emisie v Kalifornii.

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.