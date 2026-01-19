<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f5e6821e0febccfc5d05e7c944d9e3d",
  "translation_date": "2025-08-27T22:19:33+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ja.md",
  "language_code": "sk"
}
-->
# Rozšírenie prehliadača Carbon Trigger: Hotový kód

Pomocou API CO2 Signal od tmrow môžete sledovať spotrebu elektrickej energie vo vašej oblasti a zobrazovať pripomienky priamo v prehliadači. Toto rozšírenie vám umožní rozhodovať sa na základe týchto informácií o vašich aktivitách.

![screenshot rozšírenia](../../../../../translated_images/sk/extension-screenshot.0e7f5bfa110e92e3.webp)

## Začíname

Musíte mať nainštalovaný [npm](https://npmjs.com). Stiahnite si kópiu tohto projektu do priečinka na vašom počítači.

Nainštalujte všetky potrebné balíčky.

```
npm install
```

Vytvorte rozšírenie pomocou webpacku.

```
npm run build
```

Ak chcete rozšírenie nainštalovať do Edge, otvorte panel „Rozšírenia“ cez menu „tri bodky“ v pravom hornom rohu prehliadača. Vyberte možnosť „Load Unpacked“ a načítajte nové rozšírenie. Keď sa zobrazí výzva, otvorte priečinok „dist“ a rozšírenie sa načíta. Na používanie budete potrebovať API kľúč CO2 Signal ([získajte ho tu cez e-mail](https://www.co2signal.com/) - zadajte svoj e-mail do políčka na stránke) a [kód pre vašu oblasť](http://api.electricitymap.org/v3/zones) zodpovedajúci [Electricity Map](https://www.electricitymap.org/map) (napríklad pre Boston použite 'US-NEISO').

![inštalácia](../../../../../translated_images/sk/install-on-edge.78634f02842c4828.webp)

Po zadaní API kľúča a oblasti do rozhrania rozšírenia sa farba bodky v rozšírenej lište prehliadača zmení, aby odrážala energetickú spotrebu vo vašej oblasti. Táto bodka vám pomôže rozhodnúť, aké aktivity vyžadujúce energiu sú vhodné. Koncept systému „bodky“ som si osvojil z rozšírenia [Energy Lollipop](https://energylollipop.com/) pre emisie v Kalifornii.

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.