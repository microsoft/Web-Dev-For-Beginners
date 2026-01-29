# Rozšírenie prehliadača Carbon Trigger: Kompletný kód

Pomocou API CO2 Signal od tmrow na sledovanie spotreby elektriny vytvorte rozšírenie prehliadača, ktoré vám umožní mať priamo vo vašom prehliadači pripomienku o spotrebe elektriny vo vašom regióne. Používanie tohto ad hoc rozšírenia vám pomôže robiť rozhodnutia o vašich aktivitách na základe týchto informácií.

![screenshot rozšírenia](../../../../../translated_images/sk/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.png)

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

Na inštaláciu v Edge použite menu s 'tromi bodkami' v pravom hornom rohu prehliadača, aby ste našli panel Rozšírenia. Odtiaľ vyberte 'Načítať rozbalené' na načítanie nového rozšírenia. Keď budete vyzvaní, otvorte priečinok 'dist' a rozšírenie sa načíta. Na jeho používanie budete potrebovať API kľúč pre API CO2 Signal ([získajte ho tu e-mailom](https://www.co2signal.com/) - zadajte svoj e-mail do poľa na tejto stránke) a [kód pre váš región](http://api.electricitymap.org/v3/zones) zodpovedajúci [Elektrickej mape](https://www.electricitymap.org/map) (napríklad v Bostone používam 'US-NEISO').

![inštalácia](../../../../../translated_images/sk/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.png)

Keď zadáte API kľúč a región do rozhrania rozšírenia, farebný bod na lište rozšírenia prehliadača by sa mal zmeniť tak, aby odrážal spotrebu energie vo vašom regióne a poskytol vám indikátor o aktivitách s vysokou spotrebou energie, ktoré by pre vás boli vhodné. Koncept tohto systému "bodov" som získal z [rozšírenia Energy Lollipop](https://energylollipop.com/) pre emisie v Kalifornii.

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.